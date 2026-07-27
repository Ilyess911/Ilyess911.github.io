# Passation de session

> Document écrit pour être lu **sans accès à l'historique de conversation**.
> Il contient les décisions, leurs raisons, et les pièges déjà rencontrés.
> Si vous reprenez ce projet, lisez-le en entier avant de toucher au code.

---

# Session

|                         |                                                                             |
| ----------------------- | --------------------------------------------------------------------------- |
| **Date**                | 27 juillet 2026                                                             |
| **Durée approximative** | ~3 h 30, dont ~40 min d'audit préalable du disque et des dépôts             |
| **Branche Git**         | `main`                                                                      |
| **Dernier commit**      | `e7f9403` — _content: une seule vision au lieu de trois projets juxtaposés_ |
| **État du repository**  | Propre.                                                                     |
| **Remote**              | `origin` → `https://github.com/Ilyess911/Ilyess911.github.io` (public)      |
| **Push effectué**       | **Oui**, le 27 juillet à 23 h 13.                                           |
| **Site en ligne**       | **https://ilyess911.github.io** et **https://ilyess911.github.io/en/**      |

### Mise à jour de fin de session

Le corps de ce document a été rédigé **avant** la publication, alors qu'aucun dépôt distant n'existait. La mise en ligne a été faite juste après, dans la même session. Ce qui a changé depuis la rédaction :

- dépôt public `Ilyess911/Ilyess911.github.io` créé, `main` poussé ;
- GitHub Pages activé. **Attention** : Pages s'était auto-activé en mode `legacy` (source = branche), ce qui aurait servi le README au lieu du site construit. Il a fallu basculer explicitement en `build_type: workflow` via `gh api -X PUT repos/Ilyess911/Ilyess911.github.io/pages -f build_type=workflow`. À vérifier si Pages est un jour réinitialisé ;
- le workflow `Build and deploy to GitHub Pages` est passé au vert du premier coup (typecheck, lint, tests, build, publication) ;
- les six URL de contrôle répondent 200, les titres FR et EN sont corrects.

**Ce qui n'a pas changé** : tous les points ouverts, risques et arbitrages listés plus bas restent valables. En particulier, la contradiction `medical-ai.fr` (risque n° 1) **est désormais publique**. C'est la première chose à traiter.

### Historique complet

```
aeb9b55  2026-07-27 23:0x  docs: passation de session du 27 juillet 2026
e7f9403  2026-07-27 22:34  content: une seule vision au lieu de trois projets juxtaposés
545f398  2026-07-27 20:27  refactor: corrections issues de la revue de conception
f6b34e3  2026-07-27 20:22  feat: portfolio bilingue Astro, prêt pour GitHub Pages
```

Note : le commit `aeb9b55` a été amendé après coup pour appliquer Prettier à ce document. `npm run lint` vérifie le formatage des fichiers Markdown, et un document non formaté **fait échouer la CI**. Y penser avant tout ajout de documentation.

### Fichiers

Le dépôt a été créé de zéro pendant cette session : **les 57 fichiers suivis sont nouveaux**. Rien n'a été modifié ni supprimé en dehors de ce dossier.

```
.github/workflows/deploy.yml        typecheck → lint → test → build → publication Pages
.nvmrc .gitignore .prettierrc.json .prettierignore
astro.config.mjs  eslint.config.js  tsconfig.json  vitest.config.ts  package.json
LICENSE  README.md
public/                 favicon.svg, og.png, apple-touch-icon.png, robots.txt
scripts/                build-og.mjs, fetch-github-metadata.mjs, screenshot.mjs
src/assets/projects/    4 captures produit réelles (PNG 2000 px)
src/components/         14 composants Astro
src/config/site.ts      URL, base, contact, CV
src/data/               profile.ts, projects.ts, experience.ts, types.ts, translations/{fr,en}.ts
src/layouts/Base.astro  head, SEO, données structurées, script de révélation
src/lib/                i18n.ts, images.ts, project.ts
src/pages/              index, en/index, projets/[slug], en/work/[slug], 404
src/styles/global.css   tokens et système de design
tests/content.test.ts   21 tests
```

Le contenu représente **1 394 lignes** réparties sur les 6 fichiers de `src/data/`.

### Environnement vérifié

Node 22.16.0, npm 11.17.0, Astro 5.18.2, Chrome installé dans `/Applications/Google Chrome.app` (utilisé par les scripts de capture et de génération d'image OG).

---

# Objectif de la session

Concevoir et livrer, prêt au déploiement sur GitHub Pages, le portfolio professionnel d'Ilyess Assadi.

L'enjeu n'était pas de faire un site : c'était de **rendre lisible un profil hybride ingénierie / produit / business** auprès de recruteurs Big Tech, de Sales Engineering Managers et de jurys d'école de management, sans jamais tomber dans les cinq pièges identifiés dès le départ :

1. le portfolio de développeur frontend générique ;
2. l'empilement de projets scolaires ;
3. le rendu « généré par IA » ou le clone de template ;
4. le CV mis en ligne ;
5. **le profil qui s'attribue un travail collectif.**

Contrainte structurante et non négociable : **ne rien inventer**. Ni métrique, ni client, ni utilisateur, ni récompense, ni responsabilité non démontrée. En cas d'information manquante, un emplacement explicite plutôt qu'une invention.

Une seconde phase, en fin de session, a porté uniquement sur la narration : rendre les projets solidaires d'une même vision au lieu de les laisser se lire comme trois initiatives indépendantes.

---

# Ce qui a été réalisé

## 1. Audit préalable du disque et des dépôts

Rien n'a été écrit avant d'avoir vérifié ce qui existait réellement. Trois explorations parallèles ont couvert Time2Drive, Médical'IA, l'ancien portfolio et les autres projets. **Les conclusions de cet audit ne sont écrites nulle part ailleurs que dans ce document**, et plusieurs sont contre-intuitives.

### Ce que l'audit a établi et qui change tout

**Time2Drive.** L'historique Git est sans ambiguïté : le socle technique initial (authentification Lucia, schéma Prisma, moteur de disponibilités, OAuth Google, API de base) provient de **2 commits d'Adel Bousri le 07/01/2026, 88 fichiers, 17 386 insertions**. Ilyess a fait 45 commits sur 2 jours (10 et 11 juillet 2026), soit environ +8 400 / −4 300 lignes sur 59 fichiers : moteur d'analytics, modèle ROI, refonte complète de l'interface et du cockpit, jeu de démonstration, 22 des 43 tests unitaires, 100 % de la landing (13/13 commits) et 100 % de l'assistant d'appel (12/12 commits).

Point important pour la suite : **la documentation d'Ilyess sous-estimait sa contribution technique**. Elle disait « je ne revendique pas le code cœur » sans mentionner l'analytics ni la refonte. Le portfolio corrige cet écart dans les deux sens : il nomme la contribution d'Adel **et** décrit ce qu'Ilyess a réellement écrit.

Zéro client réel, écrit noir sur blanc dans le README du projet. Landing en ligne et vérifiée : `https://lp-time2drive.vercel.app` répond 200.

**Médical'IA.** Moteur MédiScore de 574 lignes, 5 piliers pondérés (35/25/20/15/5), 11 sources publiques horodatées avec licence et niveau de confiance, indice de confiance entre ±0,1 et ±0,4, garde-fou sur l'indice de défavorisation, benchmark par strate de population, moteur de projection à 3 et 5 ans (346 lignes), export PDF. Marque MédiScore déposée à l'INPI sous le **n° 5155219**. Site en ligne sur `medical-ai.fr`.

Le point le plus remarquable, et celui autour duquel l'étude de cas est construite : **le code refuse d'étiqueter « réelle » une variable qui n'est pas branchée en flux**. La fonction de statut de provenance classe chaque variable en `reel`, `estime` ou `demonstratif`, et l'avertissement va jusque dans le PDF exporté. C'est rare et c'est vérifiable ligne par ligne.

Limites réelles : 10 communes témoins, 100 % de données locales, backend FastAPI non branché, cartographie limitée à un seul territoire, 4 modules en page vide, aucun déploiement de la plateforme.

**Resum'EYE.** L'analyse de CV est **simulée** dans le prototype : pas d'extraction, pas de modèle, pas de scoring. Authentification factice sur `localStorage`. Un seul commit. Mais la traction commerciale, elle, est réelle : relation de plusieurs mois avec un groupe d'ingénierie français portant sur l'intégration par API, la conformité RGPD et une tarification au volume, plus une présentation en direct au « Café IA » de Syntec-Ingénierie. Aucun contrat signé.

**Contrainte GitHub majeure.** Sur 18 dépôts, **3 seulement sont publics** : `VOUCH.xyz`, `Iconik-LP` et `ML-PROJECT-Anomaly-Detection-in-Industrial-Robot-Executions`. Time2Drive, Médical'IA, Resum'EYE, Atlas et 1vest sont privés. C'est la contrainte la plus lourde du projet et elle n'est pas résolue.

**Contradictions CV / brief relevées** (non résolues, voir « Points encore ouverts ») : « Airbus Helicopters » figure dans le brief mais le CV dit seulement « Airbus, Le Bourget » ; l'intitulé Air France est « Apprenti Ingénieur Méthodes, Direction Ingénierie des Équipements » et non « maintenance et systèmes avioniques » ; la disponibilité est passée de « juillet-août 2026 » (ancien portfolio) à « 3 mois à partir de février 2027 » (CV de juillet 2026).

## 2. Les quatre décisions prises par Ilyess

Ces quatre points ont été soumis à arbitrage parce qu'ils engageaient soit la véracité, soit un risque juridique. **Ne pas les rouvrir sans raison.**

**Décision 1 : projets retenus.** Trois études de cas complètes (Time2Drive, Médical'IA, Resum'EYE) plus Atlas et le projet ML de détection d'anomalies en travaux secondaires. Ilyess a précisé que « les projets vont évoluer », d'où un système de contenu conçu pour qu'ajouter ou promouvoir un projet soit une opération de données, jamais de code.

**Décision 2 : aucune référence à Kesk'IA.** Formulation exacte d'Ilyess : ne mentionner ni le programme, ni les mentors, ni les partenaires, ni les logos associés, ni le POC initial, ni la chronologie liée à cette période. Médical'IA est présenté uniquement sur le problème, la vision, l'architecture, le MédiScore, les données publiques, les choix produit et les apprentissages.

**Contexte que le futur intervenant doit connaître :** un contentieux de propriété intellectuelle est en cours autour de cette période (mise en demeure de juin 2026, pièces précontentieuses, dossiers avocat sur le disque). Ce n'est pas une préférence esthétique, c'est une précaution. Un test automatisé interdit désormais ces termes dans tout le contenu.

**Décision 3 : dépôts privés affichés honnêtement.** Aucun lien mort. Chaque projet annonce son statut réel (« code privé, accès sur demande » ou « code public » avec lien). Les démos réellement en ligne sont liées. Un test fait échouer le build si un projet privé expose un lien vers GitHub.

**Décision 4 : Nexya Agency comme studio chapeau.** Ilyess a fourni l'arborescence : Nexya → Time2Drive (SaaS B2B), Resum'EYE (outil RH), Médical'IA (IA santé publique), plus « produits à venir ». Atlas n'en fait volontairement pas partie.

## 3. Architecture retenue et pourquoi

**Astro 5 + TypeScript strict, sans framework client.** Le site est intégralement statique. `dist/` ne contient **aucun fichier `.js`** : les deux comportements interactifs (révélation au défilement, copie de l'email) tiennent dans des scripts inline de quelques lignes. C'est ce qui donne 100 de performance sans effort.

**Pas de Tailwind. CSS natif avec design tokens.** Décision assumée et documentée dans le README. Sur une composition éditoriale sur mesure (filets d'un pixel, épine dorsale numérotée, grilles asymétriques), Tailwind aurait ajouté une couche d'indirection sans rien simplifier, et surtout c'est lui qui produit la signature visuelle « template généré » que le brief interdisait explicitement. Le système tient en un seul fichier, `src/styles/global.css`.

**Contenu dans `src/data/`, pas `src/content/`.** Piège rencontré : `src/content/` est un **répertoire réservé par Astro** pour les collections. Y placer des fichiers `.ts` déclenche une auto-génération de collections et un avertissement de dépréciation. Le dossier a été renommé en cours de session. **Ne pas le renommer en `content`.**

**Séparation contenu / registre d'images.** `src/data/projects.ts` ne référence les visuels que par une **clé texte**. Le registre `src/lib/images.ts` fait la correspondance vers les fichiers importés. Raison : les tests Vitest importent `projects.ts`, et un import de `.png` dans un contexte de test poserait problème. Effet de bord bénéfique : une clé absente du registre lève une erreur **au build**, jamais une image cassée en production.

**Internationalisation avec segments d'URL traduits.** Français à la racine, anglais sous `/en/`, et les segments eux-mêmes sont traduits : `/projets/<slug>/` et `/en/work/<slug>/`. La table est dans `src/lib/i18n.ts`. Conséquence à connaître : `@astrojs/sitemap` ne sait pas apparier automatiquement des URL dont les segments diffèrent, d'où un `serialize()` sur mesure dans `astro.config.mjs` qui rétablit les alternances de langue. Les balises `hreflang` du `<head>` sont générées manuellement dans `Base.astro` et sont correctes indépendamment du sitemap.

**Configuration de déploiement centralisée.** Passer d'un dépôt utilisateur à un dépôt projet, ou brancher un domaine, se fait en modifiant deux constantes (`astro.config.mjs` et `src/config/site.ts`). Tous les liens internes passent par `withBase()`, toutes les URL absolues par `absoluteUrl()`.

## 4. Direction artistique et pourquoi

Light-first, éditorial, sans aucune carte.

- **Surfaces** : blanc cassé légèrement chaud (`#fbfbf9`) plutôt que blanc clinique, avec une bande enfoncée (`#f4f4f0`) pour rythmer sans créer de boîtes.
- **Encres** : trois niveaux, contrastes tous vérifiés au minimum AA (16,5:1, 9,4:1 et 5,9:1 sur le fond).
- **Accent unique** : indigo `#2c36c9`, 8,2:1 sur le fond. Il n'apparaît que sur la dernière ligne du hero, les numéros de section, les libellés « preuve » et les états de survol.
- **Structure portée par des filets d'un pixel**, jamais par des ombres ni des bordures épaisses. Aucun dégradé, aucun flou, aucun glassmorphism.
- **Épine dorsale numérotée** dans la marge gauche (01 à 06), collante au défilement sur grand écran. C'est le dispositif qui donne au site son allure de dossier plutôt que de page marketing.
- **Typographie** : Instrument Sans pour le texte, JetBrains Mono pour les métadonnées et les chiffres, les deux auto-hébergées. Chiffres tabulaires partout où il y a des données.
- **Animations** : révélation d'opacité très légère au défilement, transitions de survol, micro-interaction de copie d'email. Rien d'autre. `prefers-reduced-motion` désactive tout.

Deux corrections issues de la revue de conception valent d'être connues :

- Les libellés de l'épine faisaient **doublon** avec les titres de section (« 04 PARCOURS » au-dessus d'un titre « Parcours »). Les deux ont été dissociés : l'épine classe, le titre raconte (« De l'atelier au produit »).
- Le bloc Studio avait une grille cassée et **annonçait trois produits en en listant quatre**. Une garde a été ajoutée dans `Studio.astro` : le build échoue si le nombre de projets rattachés à Nexya diverge de la description. Le même principe existe dans `Hero.astro` pour les affiliations.

## 5. Contenu : les trois règles, transformées en tests

C'est le cœur du projet et ce qui le distingue d'un portfolio ordinaire.

1. **Chaque étude de cas expose ses limites**, au même niveau typographique que le reste. Time2Drive dit « aucun client réel », « le produit n'est pas déployé », « la création de leçon n'existe pas encore côté interface ». Médical'IA dit « aucune variable n'est branchée en flux ». Resum'EYE dit « l'analyse est simulée ».
2. **Un dépôt privé n'affiche jamais de lien vers du code.**
3. **Toute contribution externe est nommée** à l'endroit où elle compte.

Ces règles ne sont pas des intentions : `tests/content.test.ts` en fait **21 tests** qui cassent le build. Sont vérifiés, entre autres :

- section `limits` non vide sur chaque étude de cas ;
- cohérence entre `codeVisibility` et les liens ;
- **liste noire de termes interdits** : `Kesk.?IA`, `LGM`, `SNDS`, `mise en demeure` ;
- **liste noire de langue de bois** : `révolutionnaire`, `leader du marché`, `passionné`, `passionate`, `seamless`, `cutting-edge`, `game-changer`, `disrupt`, `unlock`, `empower`, `turning ideas into`, `building the future`, `welcome to my portfolio` ;
- parité exacte des clés entre `fr.ts` et `en.ts` ;
- détection des chaînes françaises laissées telles quelles côté anglais ;
- présence du nom d'Adel Bousri dans la collaboration Time2Drive, dans les deux langues ;
- ordre des expériences (postes en cours avant postes passés, puis antichronologique) ;
- présence de la mention de confidentialité sur Air France Industries ;
- alternatives textuelles d'images d'au moins 40 caractères.

**Le nom du groupe d'ingénierie de Resum'EYE n'est pas publié.** Il figure sur le CV d'Ilyess mais nommer un prospect sans son accord dans un document public est un risque inutile. Le test l'interdit désormais.

## 6. Refonte narrative de fin de session

Après validation technique, une relecture « recruteur qui ne connaît pas Ilyess » a fait apparaître un défaut de fond que la qualité d'exécution masquait.

**Le diagnostic.** Le site racontait une **méthode**, pas une **conviction**. Trois marchés sans rapport (auto-écoles, santé publique, recrutement) reliés seulement par « il est honnête sur ses limites ». Pire, la section Positionnement ancrait chaque axe sur un projet **différent** : Engineering → Médical'IA, Product → Time2Drive, Business → Resum'EYE. Elle disait donc littéralement « chaque projet montre un tiers de moi ». Trois marchés étrangers plus trois compétences séparées produisent l'impression d'un profil dispersé, c'est-à-dire exactement le piège n° 2 du cahier des charges.

**Le fil trouvé.** Il existait déjà dans les textes, six fois, sans avoir jamais été nommé :

| Projet                | Formulation déjà présente                                               |
| --------------------- | ----------------------------------------------------------------------- |
| Time2Drive            | « le manque à gagner est invisible parce qu'il n'est écrit nulle part » |
| Médical'IA            | « un raisonnement qu'il peut défendre devant un conseil »               |
| Resum'EYE             | « peu traçable », « une trace de ce qui a été évalué »                  |
| Air France Industries | « que la donnée serve une décision, et pas seulement un rapport »       |
| Atlas                 | « que faut-il faire dans les deux prochaines heures »                   |
| Détection d'anomalies | reconnaître l'anomalie à partir des seules mesures                      |

Une seule idée : **une décision se prend tous les jours sur une information qui existe déjà mais que personne ne rend lisible.**

**Ce qui a changé.**

- **Hero** : passé de « Comprendre le système. En faire un produit. En défendre la valeur. » (un processus personnel, ni mémorable ni différenciant) à « L'information existe. Elle n'est pas lisible. **Je construis ce qui manque.** » (le problème attaqué).
- **Sous-titre** : la formule « à l'intersection de l'IA, des opérations et du SaaS B2B », trois mots-valises, a été remplacée par les quatre terrains réels (auto-écoles, collectivités, équipes RH, maintenance aéronautique).
- **Positionnement** : les trois axes deviennent trois **étapes du même geste appliquées au même objet, la décision** (trouver la donnée et savoir ce qu'elle vaut, en faire un écran où la décision devient évidente, chiffrer ce qu'elle change et le défendre). Les trois projets illustrent désormais une chaîne unique.
- **Introduction des projets** : c'est le paragraphe décisif. Il retourne la dispersion en preuve. Trois marchés étrangers ne disent plus « il papillonne » mais « le problème est général ».
- **Air France Industries** devient l'**origine** du fil et non une ligne de parcours isolée.
- **« Je nomme les limites »** cesse d'être un trait de caractère sympathique pour devenir une obligation professionnelle : quand on construit l'instrument avec lequel un autre décide, on lui doit le degré de confiance.

**Garde-fou appliqué pendant cette refonte.** Deux formulations écrites en cours de route affirmaient qu'Ilyess avait **choisi** ces marchés pour cette raison. C'est une intention rétrospective invérifiable, donc exactement le type de glissement que le reste du site interdit. Elles ont été ramenées à un constat (« un même angle mort ») avant le commit.

## 7. Problèmes résolus en cours de route

Ces incidents ont coûté du temps. Les documenter évite de les revivre.

| Problème                                        | Cause réelle                                                                                                                                  | Résolution                                                                                                                                                                      |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Build en échec sur `lightningcss`               | Option `cssMinify: 'lightningcss'` dans `astro.config.mjs` sans le paquet installé                                                            | Option retirée, le minificateur par défaut suffit                                                                                                                               |
| Collections Astro auto-générées + avertissement | `src/content/` est un répertoire réservé                                                                                                      | Renommé en `src/data/`                                                                                                                                                          |
| 80 erreurs de typage sur `en.ts`                | `as const` sur l'objet `fr` figeait les **valeurs** en types littéraux, donc l'anglais devait être identique au français                      | `as const` retiré de `fr.ts`. **Ne pas le remettre.**                                                                                                                           |
| Débordement horizontal apparent sur mobile      | Artefact de l'outil : Chrome `--screenshot` sans émulation mobile n'applique pas la balise viewport                                           | Outil de capture réécrit en pilotant le Chrome DevTools Protocol, avec mesure réelle de `scrollWidth` et détection des éléments hors cadre                                      |
| Captures pleine page partiellement vides        | `scroll-behavior: smooth` empêchait le script de capture d'atteindre les positions, donc l'observateur de révélation ne se déclenchait jamais | Le script neutralise temporairement `scroll-behavior`. En parallèle, une règle `@media print` et un écouteur `beforeprint` garantissent que rien ne reste masqué à l'impression |
| `sips` incapable d'exporter en WebP             | Version de macOS de la machine                                                                                                                | Les sources restent en PNG et la conversion WebP responsive est faite par `sharp` au build, ce qui donne une meilleure qualité                                                  |
| Type `never` dans `astro.config.mjs`            | `const BASE = '/'` était inféré comme type littéral, rendant la branche `else` inatteignable                                                  | Annotations JSDoc `@type {string}`                                                                                                                                              |

---

# État actuel du portfolio

## Terminé et vérifié par mesure

| Vérification                                         | Résultat                                                                |
| ---------------------------------------------------- | ----------------------------------------------------------------------- |
| `npm run typecheck`                                  | **0 erreur** sur 38 fichiers                                            |
| `npm run lint`                                       | **0 erreur** (ESLint + Prettier)                                        |
| `npm run test`                                       | **21 tests passés**                                                     |
| `npm run build`                                      | **9 pages**, 1,6 Mo, **0 fichier JS expédié**                           |
| `npm run shots`                                      | **Aucun débordement horizontal de 320 px à 1440 px**, sur les 6 pages   |
| Lighthouse accueil FR et EN, mobile et desktop       | **100 / 100 / 100 / 100**                                               |
| Lighthouse étude de cas Resum'EYE, mobile et desktop | **100 / 100 / 100 / 100**                                               |
| Recherche de secrets                                 | Aucun. Seules des occurrences du mot « secret » dans la prose du README |

**Livrables complets** : les 9 pages (accueil FR et EN, 3 études de cas × 2 langues, page 404 bilingue), le workflow GitHub Actions, le README, la licence, le sitemap avec alternances de langue, `robots.txt`, l'image Open Graph, le favicon, l'icône iOS, les données structurées `Person` et `WebSite`, et 18 captures de contrôle dans `screenshots/` (ignoré par Git).

## Validé sur le fond

- Attribution Time2Drive conforme à l'historique Git réel.
- Aucune mention de Kesk'IA, du POC initial ou de la période associée.
- Aucune métrique inventée. Tous les chiffres proviennent du code ou de la documentation des projets.
- Aucun lien mort, aucune ancre `#` visible, aucun bouton sans action.
- Aucune donnée Air France Industries. Une mention explicite le rappelle sur la page.

## Volontairement en attente

- ~~**Le déploiement.**~~ **Fait en fin de session.** Le site est en ligne sur `https://ilyess911.github.io`. Les points de contenu à confirmer listés plus bas sont donc désormais publics : ils passent de « à traiter avant publication » à « à corriger en priorité ».
- **La ligne CV.** L'emplacement existe dans `src/config/site.ts` (`CV = null`) et n'affiche rien tant qu'aucun fichier n'est déposé. Volontairement inactif plutôt que pointant vers un 404.
- **Les captures Resum'EYE.** Le projet affiche un encart « captures à venir » plutôt qu'un visuel fabriqué.
- **La photo de profil.** Aucun emplacement n'a été construit, faute de décision. Voir « Risques ».

---

# Points encore ouverts

## Captures manquantes

| Manque                                                                                          | Où déposer                                               | Notes                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Resum'EYE** : accueil RH, fiche candidat, page RGPD                                           | `src/assets/projects/` puis registre `src/lib/images.ts` | Le `dist/` du projet (`~/Desktop/Claude Code Projects/RESUM-EYE/dist`) **rend une page blanche** une fois servi. Tentatives sur `/` et `/dashboard`, avec 12 s de budget : rien. Il faudra relancer le projet en mode développement (`npm run dev`) pour capturer. |
| **Time2Drive** : réservation élève, espace moniteur, écran d'impact financier, planning refondu | `src/assets/projects/`                                   | Seul le cockpit gérant existe. Le produit tourne en local via Docker.                                                                                                                                                                                              |
| **Médical'IA** : page projection                                                                | `src/assets/projects/`                                   | Une capture a été prise pendant la session (`med-projection`) mais n'a pas été retenue. Reproductible, voir la procédure ci-dessous.                                                                                                                               |

**Procédure de capture reproductible pour Médical'IA** (utilisée pendant la session) : le build `frontend/dist` existe déjà dans `~/Documents/Medical'IA/MVP-demo-claudecode/frontend/dist`. Le servir avec un serveur statique doté d'un repli SPA, puis capturer `/home`, `/home/score` et `/home/projection` avec Chrome headless en `--force-device-scale-factor=2`. Format cible : environ 2000 px de large, PNG, la conversion WebP est faite au build.

## Contenus à confirmer

| #   | Point                                      | Enjeu                                                                                                                                                                                                                                                                                                                                                                     |
| --- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **« Airbus Helicopters »**                 | Le brief l'affirme, le CV de juillet 2026 dit seulement « Airbus, Le Bourget ». Airbus Helicopters a bien un site au Bourget, donc c'est plausible, mais non confirmé.                                                                                                                                                                                                    |
| 2   | **Formulation du rôle aux JO Paris 2024**  | Le CV dit « Athlétisme (juge certifié, Paris 2024) », le brief dit « participation aux Jeux olympiques ». La formulation retenue est vraie sous les deux lectures, mais elle sera questionnée en entretien.                                                                                                                                                               |
| 3   | **Phrase pivot sur Air France Industries** | « C'est ici que j'ai rencontré pour la première fois le problème que je retrouve dans chacun de mes projets. » C'est **la seule affirmation du site qui porte sur le vécu d'Ilyess et non sur un artefact vérifiable**. Elle tient toute la narration. Si elle ne sonne pas vrai pour lui, elle doit sauter, et la narration doit être reconstruite autour d'autre chose. |
| 4   | **Chiffres d'activité commerciale**        | Combien d'auto-écoles appelées, combien de démonstrations réalisées, combien d'inscriptions sur la liste d'attente Supabase. Absents de tout le corpus, donc absents du site. Ce sont les chiffres qui manqueraient le plus à un Sales Engineering Manager.                                                                                                               |
| 5   | **Accord d'Adel Bousri**                   | Son nom figure sur Time2Drive et sur le projet ML. Courtoisie minimale avant publication.                                                                                                                                                                                                                                                                                 |

## Liens à vérifier

- **LinkedIn** : `https://www.linkedin.com/in/ilyess-assadi` est **déduit du CV**, jamais ouvert ni validé. Défini dans `src/config/site.ts`.
- **`medical-ai.fr`** : lien actif dans l'étude de cas Médical'IA. Voir la section Risques, c'est le point le plus sensible du dossier.
- **`lp-time2drive.vercel.app`** : vérifié pendant la session, répond 200.
- Le dépôt public du projet ML : vérifié via l'API GitHub, dernier push le 15/12/2025.

## Décisions non prises

- **Ouvrir ou non certains dépôts privés.** C'est la décision à plus fort impact du dossier, et elle n'a pas été tranchée.
- **Ajouter ou non une photo de profil.** Aucun emplacement construit, par refus de créer une structure spéculative.
- **Inclure ou non VOUCH** (hackathon ETHGlobal Cannes, dépôt public). Écarté par Ilyess lors de l'arbitrage, mais c'est un des rares dépôts publics et donc vérifiables.
- **Nom de domaine personnalisé.** La procédure complète est documentée dans le README, aucune décision prise.

## Éléments juridiques et de communication à arbitrer

1. **La contradiction `medical-ai.fr`.** Détaillée dans la section Risques. C'est le point n° 1.
2. **Contentieux de propriété intellectuelle en cours** autour de la période Kesk'IA. Le portfolio est construit pour n'y donner aucune prise, mais toute modification du contenu Médical'IA doit être faite en conscience de ce contexte.
3. **Publication du dépôt `Ilyess911/time2drive`.** Le remote `origin` du produit pointe vers le dépôt privé d'Adel (`94abix/time2drive`). Le rendre public sans son accord serait un problème.
4. **Nommer le groupe d'ingénierie de Resum'EYE.** Actuellement interdit par test. Ne changer qu'avec un accord écrit.

---

# Dette technique

Elle est faible mais réelle.

1. **Le contrôle du nombre de produits Nexya est un `throw` au build.** `Studio.astro` lève une erreur si le compte diverge de la description textuelle. C'est volontaire et efficace, mais un peu brutal : passer de trois à quatre produits exigera de modifier **à la fois** le champ `studio` d'un projet **et** le texte dans les deux fichiers de traduction. Le message d'erreur le dit.

2. **La constante `HEADLINE` de `scripts/build-og.mjs` duplique `PROFILE.headline.fr`.** Le script est en `.mjs` et ne peut pas importer un `.ts` sans étape de compilation. Un commentaire signale l'obligation de synchroniser. Si l'accroche change et que l'image OG n'est pas régénérée, les réseaux sociaux afficheront l'ancienne. Une amélioration possible serait de lire la valeur par expression régulière comme le fait déjà `fetch-github-metadata.mjs` pour les dépôts.

3. **`src/data/github-metadata.json` n'est lu par aucune page.** Le script `npm run github:sync` le produit et il est versionné, mais aucun composant ne l'exploite aujourd'hui. C'est de l'infrastructure prête à l'emploi, pas du code mort dangereux, mais un lecteur pourrait s'interroger.

4. **Lighthouse sur l'étude de cas Médical'IA : 99 en performance mobile**, à cause de `uses-responsive-images` sur la première image en chargement immédiat. Deux correctifs ont été appliqués après cette mesure (élargissement de la liste de tailles à `[420, 640, 860, 1200, 1600, 2000]` et `fetchpriority="high"`), mais **cette page précise n'a pas été remesurée après le second correctif**. Les autres pages testées ensuite sont à 100. À revérifier.

5. **Les images sources pèsent 1,4 Mo dans le dépôt** (4 PNG à 2000 px). C'est le prix d'une conversion WebP de qualité au build plutôt qu'une double compression. Acceptable, mais à surveiller si le nombre de captures augmente beaucoup.

6. **Aucun test de rendu.** Les 21 tests portent sur le contenu et les invariants de données, pas sur le HTML produit. Une régression de mise en page ne serait détectée que visuellement, via `npm run shots`.

7. **`scripts/screenshot.mjs` dépend d'un chemin Chrome macOS** (surchargeable par la variable d'environnement `CHROME_PATH`). Ce script ne tourne pas en intégration continue, uniquement en local, donc l'impact est nul sur le déploiement.

---

# Risques

## Risque 1 : la contradiction `medical-ai.fr` — élevé

L'étude de cas Médical'IA lie le site du projet. Or ce site affiche, sous le libellé « Ils travaillent déjà avec nous », les logos de **Nanterre, l'ARS Île-de-France, Ramsay Santé et Nestlé**, et son fichier `llms.txt` affirme « Pas un projet étudiant ni un MVP, produit déployé auprès de collectivités françaises » ainsi que « utilisé par les communes, intercommunalités et ARS ».

**Rien dans le code ne soutient ces affirmations** : 10 communes, 100 % de données locales, aucun déploiement de la plateforme.

C'est le seul point du dispositif qu'un recruteur attentif peut retourner contre Ilyess, et il est d'autant plus dommageable que tout le portfolio est construit sur l'honnêteté. Un clic suffit pour voir l'inverse du discours.

**Trois options** : corriger la landing (préférable, c'est aussi un risque d'usage de marques tierces), retirer le lien (une ligne dans `projects.ts`), ou assumer et documenter. **Cette décision doit être prise avant toute publication.**

## Risque 2 : la crédibilité technique repose sur un seul dépôt public — élevé

Un recruteur Big Tech ne peut vérifier aucune ligne de code des trois projets vedettes. Le seul dépôt ouvrable est un projet scolaire coécrit. L'honnêteté du dispositif compense partiellement mais ne remplace pas du code lisible. Ouvrir `Atlas` ou `1vest`, après purge des secrets, changerait davantage la donne que n'importe quel ajustement de design.

## Risque 3 : absence de photo — moyen

Pour des métiers de relation (avant-vente, sales engineering, développement commercial), l'absence de visage est un handicap réel. Aucune photo professionnelle n'a été trouvée sur le disque pendant l'audit.

## Risque 4 : trois projets, zéro contrat signé — moyen, mais bien traité

Un Sales Engineering Manager le remarquera. C'est assumé et expliqué (absence de structure juridique constituée pour Time2Drive, écart entre le prototype et l'attente de l'acheteur pour Resum'EYE), ce qui sauve la lecture. Des volumes d'activité commerciale renforceraient nettement le dossier, mais ils n'existent nulle part dans le corpus.

## Risque 5 : dérive du contenu dans le temps — faible, mais permanent

Le contenu est protégé par 21 tests, mais rien n'empêche quelqu'un de désactiver un test plutôt que de corriger un contenu. **Les listes noires de `tests/content.test.ts` sont une décision de fond, pas une contrainte technique à contourner.**

## Risque 6 : captures produit contenant des données sensibles — faible aujourd'hui

Les captures actuelles ne montrent que des jeux de démonstration. **À surveiller lors de l'ajout de nouvelles captures.** Points de vigilance identifiés à l'audit : le tableau Supabase de Time2Drive contient des prospects réels (nom, email, téléphone, adresse IP), et le fichier `.env.local` de la landing contient une clé de service Supabase donnant un accès administrateur complet. Ne jamais capturer ces écrans.

## Risque 7 : réintroduction accidentelle d'un visuel de l'ancienne version — faible mais coûteux

Détaillé dans la section suivante. C'est un piège auquel un intervenant non averti tomberait presque à coup sûr.

---

# Checklist avant publication

## Bloquant

- [ ] **Trancher la contradiction `medical-ai.fr`** : corriger la landing, ou retirer le lien de `src/data/projects.ts`
- [ ] **Vérifier l'URL LinkedIn** en l'ouvrant réellement, puis corriger si besoin dans `src/config/site.ts`
- [ ] **Confirmer « Airbus Helicopters »** dans `src/data/experience.ts`
- [ ] **Confirmer la formulation du rôle aux JO Paris 2024**
- [ ] **Relire la phrase pivot sur Air France Industries** et confirmer qu'elle est défendable en entretien
- [x] **Créer le dépôt GitHub** `Ilyess911.github.io` en public
- [x] **Activer GitHub Pages** en mode GitHub Actions (a nécessité un basculement explicite depuis le mode `legacy`, voir la mise à jour de fin de session)
- [x] **Vérifier que le workflow passe au vert** après le premier push

## Important

- [ ] Ajouter le **CV français** dans `public/cv/`, puis renseigner `CV` dans `src/config/site.ts`
- [ ] Ajouter le **CV anglais** au même endroit
- [ ] Produire les **captures Resum'EYE** (accueil RH, fiche candidat, page RGPD)
- [ ] Produire les **captures Time2Drive** manquantes (réservation élève, espace moniteur, impact financier, planning en couloirs)
- [ ] Prévenir **Adel Bousri** de la publication
- [ ] Décider pour la **photo de profil**
- [ ] Remesurer **Lighthouse sur `/projets/medical-ia/` en mobile** après les correctifs d'image

## Amélioration

- [ ] Décider de l'**ouverture de dépôts privés** (`Atlas` ou `1vest` en priorité, après purge des secrets)
- [ ] Ajouter les **chiffres d'activité commerciale** s'ils sont retrouvables
- [ ] Ajouter une **capture de la page projection** de Médical'IA
- [ ] Décider pour le **nom de domaine personnalisé** (procédure complète dans le README)
- [ ] Renseigner **description et sujets** sur le dépôt GitHub une fois créé
- [ ] Envisager la réintégration de **VOUCH**, dépôt public et donc vérifiable

## Commandes de publication

```bash
cd ~/Desktop/"Claude Code Projects"/ilyess911.github.io
npm run verify                 # doit être vert avant toute chose
gh repo create Ilyess911.github.io --public --source=. --remote=origin
git push -u origin main
```

URL attendue : **`https://ilyess911.github.io`** et **`https://ilyess911.github.io/en/`**

---

# Ce qu'il ne faut PAS oublier

Décisions arrêtées. **Ne pas les rouvrir sans raison explicite.**

1. **Ne jamais réintroduire Kesk'IA** dans le portfolio : ni le programme, ni les mentors, ni les partenaires, ni les logos, ni le POC initial, ni la chronologie de cette période. Un contentieux de propriété intellectuelle est en cours. Un test le vérifie.

2. **Ne jamais inventer de métrique.** Aucun client, utilisateur, témoignage, récompense, chiffre d'affaires ni technologie non utilisée. Si une information manque, un emplacement explicite, jamais une invention.

3. **Toujours présenter Time2Drive comme un travail collaboratif avec Adel Bousri.** Le socle technique initial est le sien, c'est écrit dans l'historique Git, et le portfolio le dit. Un test vérifie la présence de son nom dans les deux langues.

4. **Toujours documenter les limites de chaque projet.** La section « Limites » n'est pas décorative, elle est la contrepartie du fait de construire l'instrument avec lequel quelqu'un d'autre décide. Un test la rend obligatoire.

5. **Privilégier la preuve plutôt que le marketing.** Chaque affirmation renvoie à un artefact vérifiable. La liste noire de langue de bois dans les tests est là pour ça.

6. **Ne jamais afficher de lien vers un dépôt privé.** On annonce « code privé, accès sur demande ». Aucun lien mort, jamais.

7. **Ne pas nommer le groupe d'ingénierie de Resum'EYE** sans accord écrit.

8. **`solution-screen.png` de la landing Médical'IA est un piège.** Ce fichier, situé dans `~/Documents/Medical'IA/Landing PAge/med-oasis-scan-main/src/assets/`, ressemble à une capture produit utilisable. C'est en réalité une capture de **l'ancien tableau de bord Streamlit** (34 989 communes, seuil APL fixe, carte départementale). Il contredit frontalement l'étude de cas (10 communes, MédiScore à 5 piliers) **et** relève de la période à ne pas montrer. **Ne pas l'utiliser.** Les captures retenues viennent du démonstrateur V2.

9. **Ne pas renommer `src/data/` en `src/content/`.** Répertoire réservé par Astro, avec effets de bord.

10. **Ne pas remettre `as const` sur l'objet `fr` dans `src/data/translations/fr.ts`.** Cela figerait les valeurs en types littéraux et forcerait l'anglais à être identique au français (80 erreurs de typage).

11. **Ne pas ajouter Tailwind.** Le choix du CSS natif est documenté et motivé : sur cette composition, Tailwind n'apporterait rien et produirait la signature « template » que le brief interdit.

12. **La narration est une vision, pas une collection.** Tous les projets énoncent le même angle mort : une décision quotidienne prise sur une information qui existe déjà mais que personne ne rend lisible. Si un projet est ajouté, il doit rejoindre ce fil ou le fil doit être révisé consciemment. Ne pas ajouter un projet « parce qu'il est joli ».

13. **Ne jamais affirmer une intention rétrospective.** Écrire « trois marchés, un même angle mort » (constat vérifiable) et non « trois marchés choisis pour cette raison » (intention invérifiable). Cette nuance a déjà été corrigée une fois.

---

# Priorités de la prochaine session

## P0 — bloquant

**P0.1 — Trancher la contradiction `medical-ai.fr`.**
C'est la seule faille exploitable du dossier, et elle vise le point fort du portfolio. Tant qu'elle est ouverte, publier revient à donner à un recruteur attentif un moyen de retourner l'argument d'honnêteté. Coût : soit une correction sur la landing, soit la suppression d'une ligne.

**P0.2 — Vérifier LinkedIn, Airbus Helicopters et la formulation JO 2024.**
Trois informations non confirmées sur une page publique qui revendique la rigueur factuelle. Une erreur ici décrédibilise les 21 tests d'un coup. Coût : quelques minutes.

**P0.3 — Créer le dépôt et activer GitHub Pages.**
Rien n'est en ligne. Un portfolio non publié a exactement zéro valeur. À faire **après** P0.1 et P0.2, pas avant.

## P1 — important

**P1.1 — Déposer les deux CV.**
Un recruteur veut un PDF, systématiquement. L'emplacement est prêt, l'activation tient en une ligne. Rapport valeur / effort maximal de toute la liste.

**P1.2 — Produire les captures Resum'EYE.**
Resum'EYE est un des trois projets vedettes et le seul sans visuel. Il affiche un encart « captures à venir » qui est honnête mais faible, précisément sur le projet qui porte la meilleure preuve commerciale.

**P1.3 — Trancher la photo de profil.**
Pour des postes d'avant-vente et de développement commercial, c'est un manque concret.

**P1.4 — Prévenir Adel Bousri.**
Correction élémentaire avant une publication où son nom apparaît.

## P2 — amélioration

**P2.1 — Ouvrir un dépôt privé.**
Le plus fort levier de crédibilité technique restant, mais il demande une purge de secrets et une décision de fond, donc il ne doit pas bloquer la mise en ligne.

**P2.2 — Compléter les captures Time2Drive.**
Un seul écran sur quatre est montré alors que l'étude de cas décrit un produit multi-rôle.

**P2.3 — Retrouver les chiffres d'activité commerciale.**
Ce qui manque le plus au regard d'un Sales Engineering Manager, mais seulement si les chiffres existent réellement quelque part.

**P2.4 — Remesurer Lighthouse sur l'étude de cas Médical'IA en mobile.**
Un point de performance, probablement déjà corrigé.

---

# Recommandation personnelle

## Ce qui est excellent

**Le dispositif d'honnêteté transformé en système technique.** Beaucoup de portfolios prétendent être honnêtes. Celui-ci fait échouer son propre build quand il cesse de l'être. La section « Limites » sur chaque étude de cas, l'attribution nommée à Adel, l'absence de lien mort sur les dépôts privés, tout cela est vérifié à chaque commit. C'est rare et c'est un sujet de conversation en soi lors d'un entretien.

**L'étude de cas Médical'IA.** La décision de refuser d'étiqueter « réelle » une variable non branchée, avec l'avertissement qui va jusque dans le PDF exporté, est une vraie décision produit, prise pour une vraie raison, et elle est visible dans une capture d'écran réelle. C'est le meilleur contenu du site.

**L'exécution technique.** 100 sur 100 partout, zéro JavaScript expédié, aucun débordement de 320 px à 1440 px, contenu entièrement typé et centralisé. Un développeur qui reprend ce dépôt peut modifier tout le contenu sans ouvrir un seul composant.

**La direction artistique.** Elle a une identité propre. Pas de cartes, pas d'ombres, pas de dégradés, une seule couleur d'accent, des filets d'un pixel, une épine dorsale numérotée. Elle ne ressemble ni à un template Vercel ni à une production automatique.

**La narration, depuis la refonte finale.** Le site raconte maintenant une conviction plutôt qu'un curriculum. Trois marchés sans rapport sont devenus la preuve que le problème est général.

## Ce qui est encore perfectible

**La vérifiabilité technique.** C'est le vrai plafond du dossier. Un recruteur Big Tech ne peut ouvrir aucun des trois projets vedettes. Tout le reste est excellent, mais reste déclaratif pour un lecteur qui cherche du code.

**La preuve visuelle est inégale.** Deux projets sur trois ont des captures. Le troisième, celui qui porte la meilleure histoire commerciale, n'en a aucune.

**L'absence de résultat chiffré.** Trois projets, zéro contrat, zéro utilisateur. C'est honnête, c'est expliqué, mais un lecteur pressé retiendra « rien n'a abouti ». Le seul contrepoids possible serait des volumes d'activité commerciale, et ils n'ont pas été retrouvés.

**La dépendance à une phrase.** Toute la narration repose sur l'affirmation qu'Ilyess a rencontré ce problème pour la première fois chez Air France Industries. C'est la seule affirmation non vérifiable par un artefact. Si elle ne tient pas en entretien, l'édifice narratif perd son origine.

## La prochaine action qui apporte le plus de valeur

**Trancher `medical-ai.fr`, puis publier.**

Pas ouvrir un dépôt, pas ajouter des captures, pas chercher des chiffres. Le portfolio est à un niveau d'exécution qui dépasse largement le seuil de mise en ligne, et **sa valeur actuelle est nulle tant qu'il n'est pas en ligne**. Chaque jour non publié est un coût réel, alors que le reste de la liste est incrémental.

Le seul point qui doit impérativement précéder la publication est la contradiction Médical'IA, parce qu'elle attaque le fondement même du dossier. Une fois réglée, il faut pousser, activer Pages, et traiter le reste en itérations.

Le piège le plus probable pour la prochaine session serait de vouloir tout compléter avant de publier. Ce serait une erreur : les captures manquantes, les CV et la photo s'ajoutent parfaitement bien sur un site déjà en ligne, et le système de contenu a été conçu exactement pour ça.
