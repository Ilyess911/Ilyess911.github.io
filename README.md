# Portfolio — Ilyess Assadi

Portfolio professionnel bilingue français / anglais, construit avec Astro et déployé sur GitHub Pages.

**En ligne :** https://ilyess911.github.io

---

## Aperçu

Le site présente un profil hybride ingénierie, produit et business à travers un petit nombre de projets racontés en entier. Chaque étude de cas expose le problème, les décisions prises, le résultat réel et, systématiquement, ses limites.

Trois règles gouvernent le contenu, et elles sont vérifiées par les tests :

1. Aucun chiffre, client, utilisateur ou récompense qui ne soit démontrable.
2. Toute contribution externe est nommée à l'endroit où elle compte.
3. Un dépôt privé n'affiche jamais de lien vers du code : il annonce qu'il est privé.

## Stack

| Choix                     | Raison                                                                                         |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| **Astro 5**               | Sortie 100 % statique, aucun framework côté client dans le rendu final.                        |
| **TypeScript strict**     | Contenu typé de bout en bout : une faute de clé casse le build, pas la page.                   |
| **CSS natif avec tokens** | Composition éditoriale sur mesure. Tailwind aurait ajouté une couche sans rien simplifier ici. |
| **JavaScript minimal**    | Deux comportements seulement : révélation au défilement et copie de l'email.                   |
| **Vitest**                | Les règles de contenu ci-dessus sont des tests, pas des bonnes intentions.                     |
| **GitHub Actions**        | Typecheck, lint, tests, build, puis publication. Aucun secret.                                 |

Polices auto-hébergées : Instrument Sans (texte) et JetBrains Mono (métadonnées et chiffres).

## Structure

```
.
├── .github/workflows/deploy.yml   Qualité + build + publication GitHub Pages
├── astro.config.mjs               site, base, i18n, sitemap
├── public/                        favicon, og.png, robots.txt
├── scripts/
│   ├── build-og.mjs               génère og.png et apple-touch-icon.png
│   ├── fetch-github-metadata.mjs  métadonnées publiques GitHub (optionnel)
│   └── screenshot.mjs             captures + audit de débordement horizontal
├── src/
│   ├── assets/projects/           captures produit réelles (optimisées au build)
│   ├── components/                composants Astro
│   ├── config/site.ts             URL, base, contact  ← à modifier en premier
│   ├── data/                      TOUT le contenu du site
│   │   ├── profile.ts             identité, axes, principes, compétences
│   │   ├── projects.ts            projets et études de cas
│   │   ├── experience.ts          expériences et formation
│   │   ├── types.ts               types du système de contenu
│   │   └── translations/{fr,en}.ts  chaînes d'interface
│   ├── layouts/Base.astro         head, SEO, données structurées
│   ├── lib/                       i18n, images, aides projets
│   ├── pages/                     routes FR et EN
│   └── styles/global.css          tokens et système de design
└── tests/content.test.ts          règles de contenu et d'intégrité
```

## Lancer en local

```bash
npm install
npm run dev          # http://localhost:4321
```

Node 22 ou plus (voir `.nvmrc`).

## Commandes

| Commande              | Effet                                                    |
| --------------------- | -------------------------------------------------------- |
| `npm run dev`         | Serveur de développement                                 |
| `npm run build`       | Génère `dist/`                                           |
| `npm run preview`     | Sert `dist/` localement                                  |
| `npm run typecheck`   | `astro check`                                            |
| `npm run lint`        | ESLint + Prettier en vérification                        |
| `npm run format`      | Applique Prettier                                        |
| `npm run test`        | Tests de contenu (Vitest)                                |
| `npm run verify`      | Typecheck, lint, tests et build à la suite               |
| `npm run github:sync` | Rafraîchit `src/data/github-metadata.json`               |
| `npm run assets:og`   | Régénère `public/og.png` et l'icône iOS                  |
| `npm run shots`       | Captures desktop, mobile, 320 px et audit de débordement |

## Modifier le contenu

Tout le contenu vit dans `src/data/`. Aucun texte n'est écrit en dur dans un composant.

- Identité, accroche, principes, compétences : `src/data/profile.ts`
- Projets et études de cas : `src/data/projects.ts`
- Expériences et formation : `src/data/experience.ts`
- Libellés d'interface : `src/data/translations/fr.ts` et `en.ts`
- Email, LinkedIn, GitHub, URL du site : `src/config/site.ts`

Après toute modification, lancer `npm run verify`.

### Ajouter un projet

1. Copier un bloc existant dans `src/data/projects.ts` et remplir les champs.
2. Choisir `codeVisibility` :
   - `'public'` → renseigner `repo` et ajouter un lien de type `code` ;
   - `'private'` → ne mettre **aucun** lien vers GitHub, le site affichera « code privé » ;
   - `'none'` → pas de dépôt.
3. Pour une étude de cas complète, remplir `caseStudy`. La section `limits` est obligatoire et les tests échouent si elle est vide.
4. `featured: true` place le projet dans la sélection principale, qui exige une étude de cas.

Les pages `/projets/<slug>/` et `/en/work/<slug>/` sont générées automatiquement.

### Ajouter une capture produit

1. Déposer l'image dans `src/assets/projects/`. Une capture réelle du produit, jamais une maquette dessinée pour le portfolio.
2. L'importer dans `src/lib/images.ts` et l'ajouter au registre `PROJECT_IMAGES`.
3. Référencer sa clé dans `caseStudy.images`, avec une alternative textuelle décrivant l'écran dans les deux langues.

Astro se charge de la conversion WebP, du `srcset` et des dimensions : aucun saut de mise en page possible. Tant qu'un projet n'a pas d'image, la page affiche un encart « captures à venir » plutôt qu'un espace vide ou un visuel factice.

### Traductions

`src/data/translations/fr.ts` définit la forme du dictionnaire ; `en.ts` doit exposer exactement les mêmes clés. Les tests vérifient la parité des clés et signalent toute chaîne française laissée telle quelle côté anglais.

Le français est servi à la racine, l'anglais sous `/en/`. Les segments d'URL sont traduits eux aussi (`/projets/` et `/en/work/`) : la table se trouve dans `src/lib/i18n.ts`.

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy.yml` se déclenche à chaque push sur `main` et peut être lancé à la main depuis l'onglet Actions. Il exécute typecheck, lint, tests et build, puis publie `dist/` avec les actions officielles GitHub Pages. Permissions minimales, aucun secret.

**Activation, à faire une seule fois :**

> Settings → Pages → Build and deployment → Source → **GitHub Actions**

Sans cette étape, le job `deploy` échoue.

### Repository utilisateur ou repository projet

Le site est configuré pour un **repository utilisateur** nommé `Ilyess911.github.io`, servi à la racine du domaine.

Pour passer à un repository projet (par exemple `portfolio`, servi sous `/portfolio`), modifier deux fichiers :

```js
// astro.config.mjs
const SITE = 'https://ilyess911.github.io';
const BASE = '/portfolio';
```

```ts
// src/config/site.ts
export const BASE_PATH = '/portfolio';
export const SITE_REPO = 'portfolio';
```

Tous les liens internes passent par `withBase()` et toutes les URL absolues par `absoluteUrl()` : rien d'autre n'est à corriger.

### Nom de domaine personnalisé

1. Créer `public/CNAME` contenant le domaine, sans protocole ni slash :
   ```
   ilyessassadi.com
   ```
2. Chez le registrar, pour un domaine apex, créer quatre enregistrements `A` vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Pour un sous-domaine, un `CNAME` vers `ilyess911.github.io`.
3. Mettre à jour `SITE` dans `astro.config.mjs`, `SITE_URL` dans `src/config/site.ts` et l'URL du sitemap dans `public/robots.txt`.
4. Settings → Pages → Custom domain, puis cocher **Enforce HTTPS** une fois le certificat émis.

## Qualité

- HTML sémantique, navigation clavier complète, lien d'évitement, focus visibles.
- Contrastes vérifiés au moins AA sur toutes les combinaisons de texte.
- `prefers-reduced-motion` respecté ; sans JavaScript, aucun contenu ne reste masqué.
- Images en WebP responsive avec dimensions explicites, chargement différé hors première image.
- Métadonnées Open Graph et Twitter Card, `hreflang` FR / EN / x-default, canonical, sitemap, `robots.txt`.
- Données structurées `Person` et `WebSite` limitées à des faits vérifiables. Aucune notation, aucun avis.
- Page 404 bilingue listant les pages qui existent.
- `npm run shots` vérifie l'absence de défilement horizontal de 320 px à 1440 px.

## Confidentialité

Aucune donnée, aucun document et aucun détail opérationnel appartenant à Air France Industries ou à un autre employeur ne figure sur ce site. Aucun secret, aucune variable d'environnement et aucun jeton ne sont présents dans ce dépôt. Les scripts qui appellent l'API GitHub le font sans authentification, sur des données publiques.

## Crédits

Conception, contenu et développement : Ilyess Assadi.
Time2Drive a été construit en équipe ; l'attribution figure dans l'étude de cas correspondante.

## Licence

Le code de ce site est publié sous licence MIT (voir `LICENSE`).
Les textes, les captures produit et les visuels des projets ne sont pas couverts par cette licence et restent la propriété de leurs auteurs.
