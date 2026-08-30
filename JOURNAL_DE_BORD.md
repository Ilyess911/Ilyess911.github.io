# Journal de bord

Décisions de conception du portfolio, dans l'ordre où elles ont été prises.
Ce document existe pour qu'on puisse comprendre **pourquoi** une chose est
comme elle est sans avoir à relire l'historique Git.

---

## 28 juillet 2026 — Refonte de direction artistique, preuve business, composition

Une seule session, six passes successives. Chacune est partie d'un constat, pas
d'une envie.

### 1. La direction artistique vient des produits, pas d'une référence externe

La version précédente était un portfolio éditorial : serif, filets, grandes
typographies, beaucoup de blanc. Elle était propre et elle ne ressemblait à
rien de ce qui a été construit par ailleurs.

Le système actuel est **extrait des landing pages Médical'IA et Time2Drive**,
lues et mesurées dans leur code, puis ramené d'un cran vers la neutralité. Le
portfolio est la maison mère : il doit pouvoir héberger des produits aux marques
différentes sans qu'aucun ne détonne.

Ce que les deux systèmes partagent, et qui est repris :

- Inter, tracking serré sur le titrage, graisses franches — aucun serif
- canvas off-white froid, surfaces blanches, filets d'un pixel
- rayons emboîtés de 4 à 20 px
- ombres teintées encre, jamais noires, au moins deux couches
- un seul accent bleu profond
- eyebrow mono en majuscules, 11 px, interlettrage `0.14em`
- chiffres tabulaires
- captures produit montées dans un chrome de fenêtre
- entrées courtes en `cubic-bezier(0.16, 1, 0.3, 1)`

**L'accent `#1D2F96`** n'est ni celui de Médical'IA (`#001C55`, marine) ni celui
de Time2Drive (`#2E44D4`, indigo) : c'est leur point milieu. Il révèle ce que
les deux marques ont en commun sans être la marque d'aucune.

### 2. Le portfolio doit vendre un métier, pas un profil

Un audit froid a montré que la homepage mémorisait « Product Designer » et non
« Sales Engineer ». Trois corrections :

- **Le métier visé est écrit en grand** dans le module de statut du hero
  (`POSTE RECHERCHÉ / Sales Engineering · Solutions Engineering`). Il n'existait
  auparavant qu'en gris 13 px, dans un paragraphe secondaire.
- **La preuve terrain remonte sous le hero.** Les faits commerciaux existaient,
  enterrés dans les études de cas : démonstration devant des décideurs au Café IA
  de Syntec-Ingénierie, cycle B2B de plusieurs mois sur intégration API / RGPD /
  tarification au volume, campagne de prospection auprès d'auto-écoles. Ils sont
  désormais au-dessus des projets.
- **« Aucun contrat signé à ce jour » est composé comme les trois autres faits**,
  pas comme une note. C'est lui qui rend les trois premiers croyables.

Règle qui n'a pas bougé : aucun chiffre qui ne soit vérifiable, aucune traction
inventée.

### 3. Attribution

La contribution Time2Drive était résumée en « design + go-to-market », ce qui
sous-vendait la part technique. Elle est maintenant énoncée en clair — produit,
UI, analytics, modèle ROI, tests, landing, go-to-market — **et la ligne de
crédit figure sur la carte d'accueil**, pas seulement dans l'étude de cas :

> Socle backend initial par Adel Bousri ; le produit a ensuite évolué à deux.

Une capture impressionnante sans mention de la collaboration laisse croire à une
contribution qu'on n'a pas eue.

### 4. Réparation des pages secondaires

La refonte n'avait couvert que la homepage. **66 références à 10 variables CSS
supprimées** subsistaient dans la navigation, le pied de page, le bloc contact,
la 404 et les quatre études de cas : titres effondrés, filets disparus, rayons à
zéro, transitions invalides.

Les tokens ont été remappés vers le système actuel (`--rule` → `--line`,
`--paper` → `--canvas`, `--radius` → `--r-md`, `--dur`/`--ease` → leurs
équivalents nommés), et les classes utilitaires disparues avec eux (`meta` →
`eyebrow`, `section-title` → `title-md`, `section-intro` → `lede`).

Un contrôle automatique existe désormais : le script de captures signale tout
token mort. **Aucun ne subsiste.**

### 5. Composition — occuper le canvas

Le défaut récurrent : du contenu tassé dans une moitié d'écran et une zone morte
en face. Corrigé section par section, avec une grille dont les **deux colonnes
ont chacune une fonction**, jamais deux `1fr` posées côte à côte.

| Section         | Avant                                                      | Après                                                                                  |
| --------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Hero            | fenêtre débordant de 164 px du conteneur, colonnes 480/720 | colonnes 480/520, bord droit aligné sur la navigation                                  |
| Preuve business | bande vide de 485 px, satellites plus gros que l'idée      | citation dominante, trois faits en bande dense                                         |
| Projets         | trois variantes d'un même bloc                             | `wide` produit pleine largeur, `quiet` déroulé commercial, `split` interface dominante |
| Parcours        | cinq cartes de poids identique                             | Air France dominant, second poste intermédiaire, passé compacté                        |
| Contact         | titre traversant l'écran, éléments dispersés               | signature à gauche, parcours de conversion à droite                                    |
| Études de cas   | tout le contenu à 587 px sur 1 072                         | une composition par section, **6 758 → 5 356 px**                                      |

Cas emblématique : **« Mon rôle »**. Le titre en haut à gauche, six
responsabilités empilées sur la moitié gauche, et le bloc Collaboration posé
dessous comme une note de bas de page. Désormais titre et Collaboration forment
la colonne de gauche, les responsabilités occupent la droite sur deux colonnes.
L'attribution participe à la composition au lieu de la subir.

### 6. Le blanc laissé volontairement

- **La section « Je viens de l'industrie »** est la seule respiration entre la
  preuve business et les trois cartes projet. Le blanc y est le contenu.
- **Le quart inférieur droit du hero.** La fenêtre Atlas s'arrête avant le bas
  de la colonne de gauche : Atlas est une preuve, pas le sujet du portfolio.
- **Le rythme vertical de 128 px** est identique dans toutes les sections. C'est
  lui qui fait lire la page comme un objet et non comme six blocs collés.

### 7. Photo

Deux portraits proposés. **Retenu : le noir et blanc sur fond charbon** — aucune
teinte ne concurrence l'accent, meilleur contraste en petit avatar, et le
monochrome évite le registre headshot corporate. **Écarté : la version bleu
nuit**, dont le bleu entre en conflit direct avec `--accent`.

Deux emplacements seulement : l'avatar du hero, et le bloc contact à 130 px —
au moment où l'on décide d'écrire, on voit à qui.

> Le portrait a été remplacé le 30 août 2026, voir l'entrée de cette date. Le
> raisonnement ci-dessus tient toujours : monochrome, deux emplacements.

### 8. Mobile

Traité comme un entonnoir distinct, pas comme un desktop réduit.

- ordre inversé sur les cartes projet : **le visuel avant le texte**
- **recadrages dédiés** servis en `<picture>` sous 46 rem — une capture
  d'interface réduite à 340 px n'est plus lisible, on montre alors le détail qui
  porte la même idée (`time2drive-triage`, `atlas-agenda`)
- action principale sur sa propre ligne, les deux liens externes sur la suivante
- citation de la preuve business séparée du titre de section, qui sinon se
  lisaient comme une seule phrase

### 9. Passe de composition sur tout le site

Le défaut récurrent, corrigé section par section : du contenu tassé dans une
moitié d'écran et une zone morte en face. La règle appliquée partout est qu'une
grille a **deux colonnes aux fonctions distinctes**, jamais deux `1fr` posées
côte à côte.

Sur les études de cas, tous les blocs faisaient 587 px dans un conteneur de
1 072 : la moitié droite de la page était vide sur cinq sections d'affilée.
Chacune a désormais sa propre composition — titre étroit et exposé large pour
les entrées, titre plus attribution contre responsabilités pour « Mon rôle »,
encart de statut contre enseignements pour les résultats, avertissement contre
liste pour les limites, et les décisions en grille de deux. **L'étude de cas
Time2Drive est passée de 6 758 à 5 356 px pour le même contenu.**

Un cas mérite d'être retenu : le bloc « Collaboration » était posé sous la liste
des responsabilités comme une note de bas de page. Il forme maintenant la
colonne de gauche avec le titre. **L'attribution participe à la composition au
lieu de la subir** — c'est cohérent avec la règle d'honnêteté, une mention qu'on
relègue en petit finit par se lire comme une précaution.

Le hero a été recalibré après un vrai bug : une marge négative de 184 px faisait
sortir la fenêtre produit de 164 px hors du conteneur de la navigation. Corrigé,
et Atlas ramené de 720 à 520 px de large. **Atlas est une preuve, pas le sujet
du portfolio.**

### 10. Aperçu de lien

L'ancienne image reprenait le manifeste sur trois lignes plus les affiliations :
illisible à la taille où elle est réellement vue, une centaine de pixels dans un
fil LinkedIn. Remplacée par le portrait monochrome et « Portfolio / Ilyess
ASSADI », centrés, sur le canvas et l'encre du système. Rendue à 2400 × 1260
puis réduite à 1200 × 630 pour correspondre exactement aux dimensions déclarées
dans les balises.

À savoir : **LinkedIn, Slack et X gardent les aperçus en cache** plusieurs jours.
Le Post Inspector de LinkedIn force le rafraîchissement.

> Cette image avait été fabriquée à la main : `scripts/build-og.mjs` ne savait
> pas la produire, et la divergence est restée invisible jusqu'au 30 août 2026.
> Voir l'entrée de cette date.

---

## 2 août 2026 — Le parcours Business engineering

### 1. Une information vraie mais invisible

Le double cursus avec l'EMLV était déjà écrit dans les données, dans le champ
`summary` de l'entrée ESILV. Il n'était affiché nulle part : le bloc Formation
de `Experience.astro` ne rend que trois choses, la période, l'école et
l'intitulé. **Un champ rempli n'est pas une information publiée.** Vérifier le
rendu, pas la donnée.

Corrigé en remontant le parcours dans l'intitulé du diplôme, seul champ visible :

```
2024–2027 · ESILV · Diplôme d'ingénieur — Industrie 4.0 et Robotique,
parcours Business engineering avec l'EMLV à partir de la rentrée 2026
```

Repris aussi dans « En ce moment » du hero, en français et en anglais, parce que
c'est là que se lit le présent.

### 2. Le nom exact vient de la source, pas du souvenir

Première rédaction : « double diplôme Ingénieur d'Affaires ». La page de l'ESILV
dit autre chose. Le parcours s'appelle **Business engineering**, il se suit en
**dernière année**, il est enseigné avec l'EMLV, et ce n'est **pas un second
diplôme**. Les trois formulations ont été corrigées avant publication.

Un portfolio qui interdit les métriques inventées ne peut pas se permettre un
intitulé de formation approximatif. La règle vaut aussi pour ce qui flatte.

### 3. Une école, un bloc

Le parcours avait d'abord sa propre entrée, sous `ESILV × EMLV`. Le bloc
Formation affichait alors deux lignes pour une seule école et deux périodes qui
se chevauchaient, ce qui se lit comme deux cursus. Fusionné dans l'entrée ESILV.
**Le bloc Formation compte les écoles, pas les parcours.**

Contrôlé après coup : `npm run shots` ne relève aucun débordement de 320 à
1440 px, l'intitulé plus long se replie.

---

## 30 août 2026 — Nouveau portrait, et la dérive qu'il a révélée

Demande d'une ligne, changer la photo. Le fichier a été remplacé en dix minutes.
Le reste de la session a servi à réparer ce que ce remplacement a mis au jour.

### 1. Le recadrage n'est pas un détail esthétique

La photo fournie est cadrée large : buste, baie vitrée, plante. L'ancienne était
un buste serré sur fond studio. Posée telle quelle, la tête occupait 28 % de la
hauteur du cadre contre 41 % avant, donc **une quinzaine de pixels de visage
dans l'avatar de 52 px du hero**.

Recadrée pour retrouver le rapport d'origine : côté de 854 px pris dans la source
de 1254, centre de tête à 31 % du haut, puis ramenée à 886 × 886 en niveaux de
gris, 79 ko. Même nom de fichier, donc `Hero.astro` et `Contact.astro` n'ont pas
bougé d'une ligne.

**La règle à retenir : un portrait se cadre pour sa plus petite occurrence.**
Ici c'est un avatar de 52 px, pas le bloc contact de 148 px.

Le noir et blanc a été conservé pour les raisons déjà écrites au 28 juillet. La
variante couleur existe en local, hors dépôt.

### 2. Trois fois « c'est encore l'ancienne » avant de trouver la vraie

Le fichier était bien remplacé sur le disque, le serveur servait bien la
nouvelle image, et l'écran affichait toujours l'ancienne. Deux causes distinctes
se superposaient, et la première a masqué la seconde.

**Cache navigateur.** Le `dist` avait été servi sur le port 4321 juste avant que
le serveur de développement ne prenne le même port : mêmes URL, en-têtes de
cache longs. Prouvé en tirant l'image directement par `curl`, puis en rendant la
page avec un profil Chrome neuf.

**Divergence réelle.** `public/og.png` contenait toujours l'ancien portrait.
Elle n'a rien à voir avec le cache, et sans l'insistance elle serait passée.

À retenir : **vérifier une image par une capture d'écran de la page ne suffit
pas.** Ce qui tranche, c'est le contenu servi, récupéré hors du navigateur.

### 3. Un script qui ne pouvait plus tourner

`scripts/build-og.mjs` avait divergé deux fois du fichier qu'il est censé
produire, et rien ne le signalait.

- La mise en page rendue par le script était l'ancienne version typographique,
  **sans photo**. Le fichier publié, lui, était le portrait plus le titre,
  fabriqué à la main.
- Le script chargeait **Instrument Sans**, retirée du projet au passage à Inter.
  `npm run assets:og` échouait sur `ENOENT` avant même de rendre quoi que ce
  soit. Il était donc injouable depuis la refonte de direction artistique.

Corrigé : le script produit la mise en page réellement publiée et lit
`src/assets/portrait-mono.jpg`. **Une seule source pour la page et pour sa
vignette**, la dérive ne peut plus revenir.

Calé sur l'ancien fichier avant de remplacer : portrait à la même position et
aux mêmes dimensions, bloc de texte de 544 à 1022 px. Preuve que le rendu est
fidèle : `apple-touch-icon.png`, régénéré au passage, ressort **identique à
l'octet près** et n'apparaît même pas dans le `git status`.

### 4. Le journal a rattrapé une régression que les tests laissaient passer

L'entrée du 28 juillet précise que l'aperçu était rendu en 2400 × 1260 puis
réduit. Mon script rendait directement à la taille finale et perdait ce lissage.
Aucun test ne le voyait, aucune capture ne le montrait à taille réelle : il a
fallu agrandir les glyphes pour constater les diagonales crénelées.

Rétabli. La réduction passe par `sharp`, **déjà installé par le pipeline images
d'Astro**, donc toujours aucune dépendance ajoutée au projet.

**C'est la justification de ce document.** Une décision de qualité qui n'est ni
testée ni écrite disparaît à la première réécriture.

### 5. Ce qui a été publié

Trois passes, chacune sur sa branche, fusionnées en `--no-ff`, chacune précédée
d'un `npm run verify` complet et suivie d'une vérification sur la production.

| Passe              | `main`    | Déploiement        |
| ------------------ | --------- | ------------------ |
| Portrait           | `f23bf42` | 42 s + 9 s         |
| Aperçu de lien     | `855dc22` | 31 s + 10 s        |
| Suréchantillonnage | `dd33a12` | vérifié après coup |

Contrôle final : l'image de partage téléchargée depuis `ilyess911.github.io` a
le **même hash** que le fichier local, et l'asset du portrait servi en
production est bien le nouveau.

Relevé au passage, sans conséquence aujourd'hui : GitHub annonce la fin de
Node 20 sur ses exécuteurs, les actions de `deploy.yml` sont déjà forcées sur
Node 24.

---

## Décisions permanentes

**Honnêteté.** Aucune métrique, aucun client, aucun utilisateur, aucun résultat
inventé. Les sections « Limites » font partie de chaque étude de cas au même
titre que les autres. `Prototype` et `Code privé` sont affichés quand c'est le
cas. Ces règles sont **appliquées par les tests** (`tests/content.test.ts`), pas
seulement par intention.

**Hors périmètre.** Aucune mention de Kesk'IA ni de la période associée.
Médical'IA reste marqué `hidden` : le contenu et les captures sont conservés,
le projet n'est rendu nulle part et n'apparaît pas au sitemap.

**Confidentialité.** Aucune donnée, aucun document, aucun détail opérationnel
d'Air France Industries.

**Technique.** Astro sans framework client, **zéro fichier JavaScript expédié**,
CSS vanille avec tokens (le refus de Tailwind est documenté dans le README).

---

## Garde-fous, à vérifier avant chaque publication

```bash
npm run verify   # types, format, tests de contenu, build
npm run shots    # débordement horizontal de 320 à 1440 px + tokens morts
```

**Après toute modification du portrait**, relancer aussi `npm run assets:og` :
l'aperçu de lien contient la photo, et rien dans `verify` ne le vérifie. C'est
exactement l'oubli du 30 août 2026.

Pour contrôler qu'une image est bien celle publiée, ne pas se fier au navigateur
ni à une capture : télécharger le fichier servi et comparer son empreinte.

```bash
curl -s -o /tmp/og.png https://ilyess911.github.io/og.png
shasum /tmp/og.png public/og.png   # les deux lignes doivent concorder
```

État à la fin de cette session : 23 tests, 0 erreur TypeScript, aucun
débordement, aucun token mort, Lighthouse 100 en accessibilité / bonnes
pratiques / SEO sur la homepage **et** sur les études de cas, performance 100
desktop et 99 mobile, 0 fichier JavaScript.

---

## Reste à faire

- **CV.** L'architecture est prête, aucun PDF n'a été fabriqué. Déposer le
  fichier dans `public/cv/`, puis remplacer `null` par
  `{ fr: '/cv/…-fr.pdf', en: '/cv/…-en.pdf' }` dans `src/config/site.ts`. Le
  lien apparaîtra seul dans le bloc contact.
- **Une démo essayable.** C'est la dernière grosse objection : aucun des trois
  produits ne peut être ouvert. Un lien de démo publique ferait plus, désormais,
  que n'importe quelle retouche visuelle.
- **Épingler les dépôts publics.** `Ilyess911.github.io` et
  `robot-anomaly-detection` ; dépingler `Ilyess911`, qui pointe vers le README
  de la page où le visiteur se trouve déjà. Action impossible par API, GitHub la
  réserve à son interface.

---

## Ce qui vit à côté de ce dépôt

**Le profil GitHub** (`Ilyess911/Ilyess911`) est une interface dessinée en 24
SVG, générés par `scripts/build-assets.py` depuis une source unique et deux
palettes. Registre Gotham / WayneTech, avec une règle : le clin d'œil est dans
le décor, jamais dans les faits. Il prolonge ce portfolio sans le concurrencer —
GitHub porte la preuve technique, le portfolio porte le récit.

Deux contraintes découvertes en le construisant, vérifiées et non supposées :
GitHub **supprime `style` et `bgcolor`** de tout HTML de README, y compris sur
`<tr>` et `<td>`, donc une vraie composition doit être dessinée ; et un lien
placé **à l'intérieur** d'un SVG servi en `<img>` est mort, il faut envelopper
l'image dans un `<a>`.

Le dépôt public de détection d'anomalies a été renommé
`robot-anomaly-detection` — l'ancien nom était tronqué sur une carte épinglée.
GitHub redirige, mais les références ont été suivies ici aussi : un lien vers un
nom mort finit toujours par en devenir un.
