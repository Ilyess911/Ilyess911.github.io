/**
 * Récupère, au moment où on le lance, les métadonnées publiques des dépôts
 * référencés dans `src/data/projects.ts` avec `codeVisibility: 'public'`.
 *
 *   npm run github:sync
 *
 * Choix assumés :
 *  - le site ne dépend PAS de ce script : la source de vérité reste le fichier
 *    de contenu local, et le build n'appelle jamais l'API GitHub ;
 *  - aucun jeton n'est utilisé ni requis (API publique, non authentifiée) ;
 *  - une indisponibilité de GitHub n'échoue pas : le script le signale et sort ;
 *  - les étoiles sont affichées à titre indicatif, jamais comme preuve de qualité.
 *
 * Le résultat est écrit dans `src/data/github-metadata.json`, qui sert de repli
 * lisible et versionné.
 */

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const projectsFile = `${root}src/data/projects.ts`;
const outputFile = `${root}src/data/github-metadata.json`;

const OWNER = 'Ilyess911';
const TIMEOUT_MS = 8000;

/** Extrait les valeurs de `repo:` du fichier de contenu, sans exécuter le TypeScript. */
async function readPublicRepos() {
  const source = await readFile(projectsFile, 'utf8');
  const matches = [...source.matchAll(/repo:\s*'([^']+)'/g)].map((m) => m[1]);
  return [...new Set(matches)];
}

async function fetchRepo(name) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${name}`, {
      headers: { accept: 'application/vnd.github+json', 'user-agent': `${OWNER}-portfolio` },
      signal: controller.signal,
    });
    if (!response.ok) {
      console.warn(`  ! ${name} : réponse ${response.status}, dépôt ignoré.`);
      return null;
    }
    const data = await response.json();
    if (data.private) {
      console.warn(`  ! ${name} : dépôt privé côté GitHub, rien n'est publié.`);
      return null;
    }
    return {
      name: data.name,
      url: data.html_url,
      description: data.description,
      language: data.language,
      stars: data.stargazers_count,
      updatedAt: data.pushed_at?.slice(0, 10) ?? null,
    };
  } catch (error) {
    console.warn(`  ! ${name} : ${error instanceof Error ? error.message : 'échec réseau'}.`);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const repos = await readPublicRepos();
  if (repos.length === 0) {
    console.log('Aucun dépôt public déclaré dans src/data/projects.ts.');
    return;
  }

  console.log(`Interrogation de l'API GitHub pour ${repos.length} dépôt(s) public(s)…`);
  const entries = [];
  for (const repo of repos) {
    const data = await fetchRepo(repo);
    if (data) {
      entries.push(data);
      console.log(`  ✓ ${data.name} · ${data.language ?? 'n/a'} · maj ${data.updatedAt}`);
    }
  }

  if (entries.length === 0) {
    console.log('Rien de récupéré. Le fichier existant est conservé tel quel.');
    return;
  }

  const payload = { fetchedAt: new Date().toISOString().slice(0, 10), repositories: entries };
  await writeFile(outputFile, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`\nÉcrit dans ${outputFile.replace(root, '')}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
