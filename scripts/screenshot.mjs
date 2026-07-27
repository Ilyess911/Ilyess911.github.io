/**
 * Captures de contrôle et mesure de débordement horizontal.
 *
 * Pilote Chrome via le Chrome DevTools Protocol, sans dépendance :
 * Node 22 fournit `fetch` et `WebSocket` nativement.
 *
 *   node scripts/screenshot.mjs <baseUrl> <outDir>
 *
 * Sortie : une capture pleine page par couple (page × largeur), et un rapport
 * console listant tout dépassement de la largeur du viewport.
 */

import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { setTimeout as sleep } from 'node:timers/promises';

const CHROME =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;

const baseUrl = process.argv[2] ?? 'http://localhost:4321';
const outDir = process.argv[3] ?? 'screenshots';

const PAGES = [
  { name: 'home-fr', path: '/' },
  { name: 'home-en', path: '/en/' },
  { name: 'case-time2drive', path: '/projets/time2drive/' },
  { name: 'case-medical-ia', path: '/projets/medical-ia/' },
  { name: 'case-resum-eye', path: '/projets/resum-eye/' },
  { name: '404', path: '/404.html' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900, mobile: false, scale: 2 },
  { name: 'mobile', width: 390, height: 844, mobile: true, scale: 2 },
  { name: 'narrow', width: 320, height: 568, mobile: true, scale: 1 },
];

let messageId = 0;

function send(ws, method, params = {}, sessionId) {
  const id = ++messageId;
  const payload = { id, method, params };
  if (sessionId) payload.sessionId = sessionId;
  ws.send(JSON.stringify(payload));
  return new Promise((resolve, reject) => {
    const onMessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id !== id) return;
      ws.removeEventListener('message', onMessage);
      if (data.error) reject(new Error(`${method}: ${data.error.message}`));
      else resolve(data.result);
    };
    ws.addEventListener('message', onMessage);
    setTimeout(() => reject(new Error(`${method}: délai dépassé`)), 30000);
  });
}

async function waitForDevtools() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return await res.json();
    } catch {
      /* le navigateur n'écoute pas encore */
    }
    await sleep(250);
  }
  throw new Error('Chrome ne répond pas sur le port de débogage.');
}

async function main() {
  await mkdir(outDir, { recursive: true });

  const chrome = spawn(
    CHROME,
    [
      '--headless=new',
      `--remote-debugging-port=${PORT}`,
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      '--hide-scrollbars',
      '--user-data-dir=/tmp/chrome-portfolio-shots',
      'about:blank',
    ],
    { stdio: 'ignore' },
  );

  const overflows = [];

  try {
    const version = await waitForDevtools();
    const ws = new WebSocket(version.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      ws.addEventListener('open', resolve, { once: true });
      ws.addEventListener('error', reject, { once: true });
    });

    const { targetId } = await send(ws, 'Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await send(ws, 'Target.attachToTarget', { targetId, flatten: true });

    await send(ws, 'Page.enable', {}, sessionId);
    await send(ws, 'Runtime.enable', {}, sessionId);

    for (const viewport of VIEWPORTS) {
      await send(
        ws,
        'Emulation.setDeviceMetricsOverride',
        {
          width: viewport.width,
          height: viewport.height,
          deviceScaleFactor: viewport.scale,
          mobile: viewport.mobile,
        },
        sessionId,
      );

      for (const page of PAGES) {
        const url = `${baseUrl}${page.path}`;
        await send(ws, 'Page.navigate', { url }, sessionId);
        await sleep(900);

        /* Parcourt la page pour déclencher les révélations au défilement,
           puis revient en haut : sans cela, une capture pleine page montre
           des blocs restés invisibles. */
        await send(
          ws,
          'Runtime.evaluate',
          {
            awaitPromise: true,
            expression: `(async () => {
              /* Le site utilise scroll-behavior: smooth ; on le neutralise
                 le temps du parcours, sinon les positions ne sont jamais atteintes
                 et l'observateur de révélation ne se déclenche pas. */
              const root = document.documentElement;
              const previous = root.style.scrollBehavior;
              root.style.scrollBehavior = 'auto';

              const step = Math.round(window.innerHeight * 0.6);
              for (let y = 0; y < document.body.scrollHeight; y += step) {
                window.scrollTo(0, y);
                await new Promise((r) => setTimeout(r, 90));
              }
              window.scrollTo(0, 0);
              root.style.scrollBehavior = previous;

              /* Laisse les transitions d'opacité se terminer (520 ms). */
              await new Promise((r) => setTimeout(r, 800));
            })()`,
          },
          sessionId,
        );

        /* Mesure : largeur du document, et liste des éléments qui dépassent. */
        const { result } = await send(
          ws,
          'Runtime.evaluate',
          {
            returnByValue: true,
            expression: `(() => {
              const vw = document.documentElement.clientWidth;
              const offenders = [];
              for (const el of document.querySelectorAll('body *')) {
                const r = el.getBoundingClientRect();
                if (r.width === 0) continue;
                if (r.right > vw + 1 || r.left < -1) {
                  offenders.push({
                    tag: el.tagName.toLowerCase(),
                    cls: el.className && String(el.className).slice(0, 60),
                    left: Math.round(r.left),
                    right: Math.round(r.right),
                  });
                }
              }
              return {
                viewportWidth: vw,
                scrollWidth: document.documentElement.scrollWidth,
                bodyScrollWidth: document.body.scrollWidth,
                offenders: offenders.slice(0, 12),
                title: document.title,
              };
            })()`,
          },
          sessionId,
        );

        const measure = result.value;
        if (measure.scrollWidth > measure.viewportWidth + 1 || measure.offenders.length > 0) {
          overflows.push({ page: page.name, viewport: viewport.name, ...measure });
        }

        const { data } = await send(
          ws,
          'Page.captureScreenshot',
          { format: 'png', captureBeyondViewport: true, fromSurface: true },
          sessionId,
        );

        const file = `${outDir}/${page.name}--${viewport.name}.png`;
        await writeFile(file, Buffer.from(data, 'base64'));
        process.stdout.write(`✓ ${file}\n`);
      }
    }

    ws.close();
  } finally {
    chrome.kill();
  }

  if (overflows.length === 0) {
    process.stdout.write('\n✓ Aucun débordement horizontal, de 320 px à 1440 px.\n');
  } else {
    process.stdout.write('\n✗ Débordements détectés :\n');
    for (const o of overflows) {
      process.stdout.write(
        `  ${o.page} @ ${o.viewport} — viewport ${o.viewportWidth}, scroll ${o.scrollWidth}\n`,
      );
      for (const el of o.offenders) {
        process.stdout.write(
          `      <${el.tag} class="${el.cls}"> left=${el.left} right=${el.right}\n`,
        );
      }
    }
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
