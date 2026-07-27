/**
 * Génère l'image Open Graph (1200 × 630) à partir du même système de design
 * que le site, puis l'écrit dans `public/og.png`.
 *
 *   node scripts/build-og.mjs
 *
 * Le rendu passe par Chrome en mode headless : pas de dépendance ajoutée,
 * et le résultat reste cohérent avec la typographie du site.
 */

import { spawn } from 'node:child_process';
import { mkdtemp, writeFile, readdir, copyFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const CHROME =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

/* Doit rester identique à PROFILE.headline.fr dans src/data/profile.ts. */
const HEADLINE = [
  "L'information existe.",
  "Elle n'est pas lisible.",
  'Je construis ce qui manque.',
];
const NAME = 'Ilyess Assadi';
const SUB = 'Ingénierie, produit et business · Paris';
const FOOT = 'Air France Industries · ESILV · Nexya Agency';

/** Retrouve un fichier de police woff2 dans le paquet fontsource installé. */
async function findFont(pkg, match) {
  const dir = join(root, 'node_modules', pkg, 'files');
  const files = await readdir(dir);
  const file = files.find((f) => f.includes(match) && f.endsWith('.woff2'));
  if (!file) throw new Error(`Police introuvable dans ${pkg}`);
  return join(dir, file);
}

async function main() {
  const work = await mkdtemp(join(tmpdir(), 'og-'));
  const sans = await findFont('@fontsource-variable/instrument-sans', 'latin-wght-normal');
  const mono = await findFont('@fontsource-variable/jetbrains-mono', 'latin-wght-normal');

  await copyFile(sans, join(work, 'sans.woff2'));
  await copyFile(mono, join(work, 'mono.woff2'));

  const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><style>
  @font-face { font-family: 'Sans'; src: url('sans.woff2') format('woff2'); font-weight: 100 900; }
  @font-face { font-family: 'Mono'; src: url('mono.woff2') format('woff2'); font-weight: 100 900; }
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; background: #fbfbf9; color: #14161a;
    font-family: 'Sans', sans-serif; display: flex; flex-direction: column;
    justify-content: space-between; padding: 68px 72px;
    -webkit-font-smoothing: antialiased;
  }
  .eyebrow {
    font-family: 'Mono', monospace; font-size: 17px; font-weight: 500;
    letter-spacing: 0.1em; text-transform: uppercase; color: #61666e;
    display: flex; gap: 14px; align-items: center;
  }
  .eyebrow .slash { color: #cfcfc6; }
  h1 { font-size: 74px; font-weight: 500; line-height: 1.03; letter-spacing: -0.035em; }
  h1 span { display: block; }
  h1 span:last-child { color: #2c36c9; }
  .foot {
    display: flex; justify-content: space-between; align-items: flex-end;
    padding-top: 26px; border-top: 1px solid #e4e4dd;
    font-family: 'Mono', monospace; font-size: 16px; letter-spacing: 0.04em;
    text-transform: uppercase; color: #61666e;
  }
  .mark { display: flex; gap: 5px; flex-direction: column; }
  .mark i { display: block; height: 4px; border-radius: 2px; background: #14161a; }
  .mark i:nth-child(1) { width: 34px; }
  .mark i:nth-child(2) { width: 25px; }
  .mark i:nth-child(3) { width: 17px; background: #2c36c9; }
</style></head><body>
  <div class="eyebrow"><span>${NAME}</span><span class="slash">/</span><span>${SUB}</span></div>
  <h1>${HEADLINE.map((l) => `<span>${l}</span>`).join('')}</h1>
  <div class="foot"><span>${FOOT}</span><span class="mark"><i></i><i></i><i></i></span></div>
</body></html>`;

  await writeFile(join(work, 'og.html'), html, 'utf8');

  await runChrome(1200, 630, join(root, 'public', 'og.png'), join(work, 'og.html'));

  console.log(`✓ public/og.png (1200 × 630)`);

  /* Icône pour l'écran d'accueil iOS : même marque que le favicon SVG,
     mais en PNG, seul format accepté par Safari. */
  const iconHtml = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  * { margin: 0; box-sizing: border-box; }
  body { width: 180px; height: 180px; background: #14161a;
         display: flex; flex-direction: column; justify-content: center;
         align-items: flex-start; gap: 16px; padding-left: 45px; }
  i { display: block; height: 12px; border-radius: 6px; background: #fbfbf9; }
  i:nth-child(1) { width: 90px; }
  i:nth-child(2) { width: 68px; }
  i:nth-child(3) { width: 45px; background: #5b63e8; }
</style></head><body><i></i><i></i><i></i></body></html>`;

  await writeFile(join(work, 'icon.html'), iconHtml, 'utf8');
  await runChrome(180, 180, join(root, 'public', 'apple-touch-icon.png'), join(work, 'icon.html'));

  await rm(work, { recursive: true, force: true });
  console.log('✓ public/apple-touch-icon.png (180 × 180)');
}

/** Rend un fichier HTML local en PNG, à la taille exacte demandée. */
function runChrome(width, height, out, file) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      CHROME,
      [
        '--headless=new',
        '--disable-gpu',
        '--hide-scrollbars',
        '--force-device-scale-factor=1',
        `--window-size=${width},${height}`,
        `--screenshot=${out}`,
        `file://${file}`,
      ],
      { stdio: 'ignore' },
    );
    child.on('exit', (code) =>
      code === 0 ? resolve() : reject(new Error(`Chrome: code ${code}`)),
    );
    child.on('error', reject);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
