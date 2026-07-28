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

### 8. Mobile

Traité comme un entonnoir distinct, pas comme un desktop réduit.

- ordre inversé sur les cartes projet : **le visuel avant le texte**
- **recadrages dédiés** servis en `<picture>` sous 46 rem — une capture
  d'interface réduite à 340 px n'est plus lisible, on montre alors le détail qui
  porte la même idée (`time2drive-triage`, `atlas-agenda`)
- action principale sur sa propre ligne, les deux liens externes sur la suivante
- citation de la preuve business séparée du titre de section, qui sinon se
  lisaient comme une seule phrase

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
- **Le champ « website » du profil GitHub** est toujours vide.
