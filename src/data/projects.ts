import type { Project } from './types';

/**
 * Sélection de projets.
 *
 * Règles appliquées à ce fichier, sans exception :
 *  1. Aucun chiffre qui n'existe pas dans le code, la documentation ou un fait vérifiable.
 *  2. Aucun client, utilisateur, témoignage ou récompense inventé.
 *  3. Toute contribution externe est nommée dans `caseStudy.collaboration`.
 *  4. `codeVisibility: 'private'` n'affiche jamais de lien : on annonce que le code est privé.
 *  5. Chaque étude de cas possède une section `limits` non vide.
 *
 * Pour ajouter un projet : copier un bloc, remplir les champs, l'ajouter au tableau.
 * Les tests (`npm run test`) vérifient les règles 4 et 5 automatiquement.
 */

export const PROJECTS: readonly Project[] = [
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: 'time2drive',
    name: 'Time2Drive',
    studio: 'nexya',
    category: { fr: 'SaaS B2B', en: 'B2B SaaS' },
    year: '2026',
    stage: 'prototype',
    featured: true,
    tagline: {
      fr: 'SaaS B2B de réservation et de pilotage pour auto-écoles indépendantes.',
      en: 'B2B SaaS for booking and day-to-day steering in independent driving schools.',
    },
    positioning: {
      fr: "Un gérant d'auto-école ne sait pas combien d'heures il n'a pas vendues aujourd'hui. L'information est pourtant là, éclatée entre un téléphone, un tableur et un agenda personnel. Time2Drive la rassemble et la rend visible.",
      en: 'A driving school owner does not know how many hours went unsold today. The information is there all the same, scattered across a phone, a spreadsheet and a personal calendar. Time2Drive brings it together and makes it visible.',
    },
    roleLabel: {
      fr: 'Cadrage produit, design, analytics, landing, go-to-market',
      en: 'Product framing, design, analytics, landing page, go-to-market',
    },
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Lucia Auth', 'Vitest', 'Playwright'],
    codeVisibility: 'private',
    links: [
      {
        kind: 'demo',
        label: { fr: 'Landing en ligne', en: 'Live landing page' },
        href: 'https://lp-time2drive.vercel.app',
      },
    ],
    caseStudy: {
      problem: {
        fr: "Dans une auto-école indépendante, une heure de conduite se négocie au téléphone, se note sur un tableur et finit dans l'agenda personnel du moniteur. Résultat : personne ne sait, à un instant donné, combien d'heures sont réellement vendues, combien de créneaux restent vides, ni quel moniteur est sous-chargé. Le manque à gagner est invisible parce qu'il n'est écrit nulle part.",
        en: 'In an independent driving school, a lesson is negotiated over the phone, written down in a spreadsheet and ends up in the instructor’s personal calendar. Nobody knows, at any given moment, how many hours are actually sold, how many slots stay empty, or which instructor is underused. The lost revenue is invisible because it is written nowhere.',
      },
      audience: {
        fr: 'Auto-écoles indépendantes de un à dix moniteurs, sans service informatique et sans logiciel métier dédié.',
        en: 'Independent driving schools with one to ten instructors, no IT department and no dedicated business software.',
      },
      valueProposition: {
        fr: "Un seul système où le gérant pilote sa journée, l'élève réserve ses heures et le moniteur suit son planning, avec le crédit d'heures comme unité de compte commune.",
        en: 'One system where the owner steers the day, the student books hours and the instructor follows a schedule, with the hour credit as the shared unit of account.',
      },
      product: {
        fr: "Une application multi-rôle : un cockpit pour le gérant (occupation de la journée, moniteurs sous-chargés, créneaux libres, points à traiter), un espace de réservation pour l'élève adossé à son solde de crédits, et une vue « ma journée » pour le moniteur, connectable à Google Calendar. Douze écrans, dix-neuf routes d'API, un registre de crédits, un moteur de disponibilités et un écran d'impact financier.",
        en: 'A multi-role application: a cockpit for the owner (day occupancy, underused instructors, free slots, items to handle), a booking space for the student backed by their credit balance, and a "my day" view for the instructor, connectable to Google Calendar. Twelve screens, nineteen API routes, a credit ledger, an availability engine and a financial impact screen.',
      },
      role: [
        {
          fr: 'Cadrage du produit et définition de la proposition de valeur',
          en: 'Product framing and value proposition',
        },
        {
          fr: 'Parcours utilisateurs et direction artistique du produit',
          en: 'User journeys and product art direction',
        },
        {
          fr: "Refonte complète de l'interface, du système de design et du cockpit gérant",
          en: 'Full redesign of the interface, the design system and the owner cockpit',
        },
        {
          fr: "Moteur d'analytics et écran d'impact financier, du calcul jusqu'à l'affichage",
          en: 'Analytics engine and financial impact screen, from calculation to display',
        },
        {
          fr: 'Jeu de données de démonstration et scénario de démo',
          en: 'Demonstration dataset and demo scenario',
        },
        {
          fr: 'Landing page publique, de la conception au déploiement',
          en: 'Public landing page, from design to deployment',
        },
        {
          fr: 'Documentation, positionnement et prospection commerciale',
          en: 'Documentation, positioning and commercial outreach',
        },
      ],
      collaboration: {
        fr: "Le socle technique initial (authentification, schéma de données, moteur de disponibilités, intégration Google Calendar, API de base) a été développé par Adel Bousri. Je ne revendique pas ce code. Je l'écris ici parce que c'est vrai, et parce que ça change ce que vous devez lire de ce projet.",
        en: 'The initial technical foundation (authentication, data schema, availability engine, Google Calendar integration, base API) was built by Adel Bousri. I do not claim that code. I write it here because it is true, and because it changes how this project should be read.',
      },
      decisions: [
        {
          title: {
            fr: "Faire du crédit d'heures l'unité de compte",
            en: 'Make the hour credit the unit of account',
          },
          body: {
            fr: "Une auto-école ne vend pas des rendez-vous, elle vend des heures payées d'avance. Modéliser le crédit plutôt que la réservation aligne le produit sur la trésorerie du gérant : chaque écran répond à « combien d'heures sont dues, consommées, disponibles » plutôt qu'à « qui vient quand ».",
            en: 'A driving school does not sell appointments, it sells hours paid upfront. Modelling the credit rather than the booking aligns the product with the owner’s cash position: every screen answers "how many hours are owed, used, available" instead of "who comes when".',
          },
        },
        {
          title: {
            fr: 'Un écran par métier, pas un écran configurable',
            en: 'One screen per role, not one configurable screen',
          },
          body: {
            fr: "Le gérant, le moniteur et l'élève n'ouvrent pas l'outil pour la même raison ni au même moment. Un tableau générique aurait été moins coûteux à construire et beaucoup plus long à faire adopter. Trois interfaces séparées suppriment l'apprentissage : chacun voit d'abord ce qu'il doit décider.",
            en: 'The owner, the instructor and the student do not open the tool for the same reason or at the same moment. A generic table would have been cheaper to build and far harder to get adopted. Three separate interfaces remove the learning curve: each person sees first what they have to decide.',
          },
        },
        {
          title: {
            fr: 'Mettre le calcul de valeur dans le produit',
            en: 'Put the value calculation inside the product',
          },
          body: {
            fr: "Plutôt que d'argumenter sur le retour sur investissement en rendez-vous commercial, l'estimation est un écran du produit, avec ses hypothèses affichées : taux horaire, taux d'occupation cible, heures facturables par moniteur et par semaine. Un gérant peut contester le chiffre, et c'est exactement ce qu'on veut : une discussion sur des hypothèses, pas sur une promesse.",
            en: 'Rather than arguing about return on investment in a sales meeting, the estimate is a screen inside the product, with its assumptions visible: hourly rate, target occupancy, billable hours per instructor per week. An owner can push back on the number, which is exactly the point: a conversation about assumptions, not about a promise.',
          },
        },
        {
          title: {
            fr: 'Reconstruire le planning en couloirs de moniteurs',
            en: 'Rebuild the schedule as instructor lanes',
          },
          body: {
            fr: "La première version affichait les leçons en liste. Une liste répond à « qu'est-ce qui est prévu », jamais à « où reste-t-il de la place ». Le passage à une grille moniteurs × heures a rendu le vide visible, et le vide est précisément ce que le produit vend.",
            en: 'The first version displayed lessons as a list. A list answers "what is scheduled", never "where is there room left". Moving to an instructor × hour grid made the empty space visible, and empty space is exactly what the product sells.',
          },
        },
      ],
      outcome: {
        fr: "Landing page publiée et accessible en ligne. Produit fonctionnel en local, couvert par 43 tests unitaires et 19 tests end-to-end. Côté commercial, une campagne d'appels et d'emails auprès d'auto-écoles d'Île-de-France a suscité un intérêt réel mais n'a produit aucun client signé, faute de structure juridique constituée à ce moment-là.",
        en: 'Landing page published and live. Product working locally, covered by 43 unit tests and 19 end-to-end tests. On the commercial side, a call and email campaign aimed at driving schools in the Paris region generated genuine interest but no signed customer, since no legal entity was in place at the time.',
      },
      learnings: [
        {
          fr: "Un tableau de bord qui n'aide pas à décider en dix secondes n'est pas un tableau de bord, c'est un rapport.",
          en: 'A dashboard that does not help you decide within ten seconds is not a dashboard, it is a report.',
        },
        {
          fr: "Le chiffre qui parle à un gérant n'est pas le nombre de fonctionnalités, c'est le nombre d'heures qu'il ne vend pas aujourd'hui.",
          en: 'The number that speaks to an owner is not the feature count, it is the number of hours they fail to sell today.',
        },
        {
          fr: "Une démonstration se prépare comme un argumentaire : ce qui n'est pas montré doit être dit, sinon il sera découvert.",
          en: 'A demo is prepared like an argument: whatever you do not show has to be said, otherwise it will be found.',
        },
      ],
      limits: [
        {
          fr: "Aucun client réel à ce jour. Tous les chiffres visibles dans le produit proviennent d'un jeu de données de démonstration, pas de mesures.",
          en: 'No real customer to date. Every figure visible in the product comes from a demonstration dataset, not from measurements.',
        },
        {
          fr: "Le produit n'est pas déployé : il fonctionne en local, via Docker. Seule la landing page est en ligne.",
          en: 'The product is not deployed: it runs locally through Docker. Only the landing page is online.',
        },
        {
          fr: "L'intégration Google Calendar est codée mais dormante : elle attend des identifiants OAuth de production.",
          en: 'The Google Calendar integration is coded but dormant: it is waiting for production OAuth credentials.',
        },
        {
          fr: "Côté gérant, la création d'une leçon existe côté API mais pas encore dans l'interface.",
          en: 'On the owner side, lesson creation exists in the API but not yet in the interface.',
        },
        {
          fr: 'Le contrôle des rôles est appliqué page par page et route par route, pas au niveau du middleware.',
          en: 'Role checks are enforced page by page and route by route, not at middleware level.',
        },
        {
          fr: "Les tarifs présentés sont indicatifs. Ce n'est pas une offre commerciale.",
          en: 'The pricing shown is indicative. It is not a commercial offer.',
        },
      ],
      images: [
        {
          key: 'time2drive-cockpit',
          alt: {
            fr: "Cockpit du gérant : occupation de la journée, grille des créneaux par moniteur, rail des points à traiter et indicateurs d'heures réservées.",
            en: 'Owner cockpit: day occupancy, slot grid per instructor, a rail of items to handle and booked-hours indicators.',
          },
          caption: {
            fr: "Cockpit gérant. Le vide de la grille est l'information principale : ce sont les créneaux qui ne seront pas vendus. Les données affichées proviennent du jeu de démonstration.",
            en: 'Owner cockpit. The empty space in the grid is the main information: those are the slots that will not be sold. The data shown comes from the demonstration dataset.',
          },
        },
        {
          key: 'time2drive-landing',
          alt: {
            fr: 'Page de présentation publique de Time2Drive, avec son titre, ses deux appels à action et un aperçu du cockpit.',
            en: 'Public landing page for Time2Drive, with its headline, two calls to action and a preview of the cockpit.',
          },
          caption: {
            fr: 'Landing publique, en ligne. Conception, rédaction et développement de bout en bout.',
            en: 'Public landing page, live. Designed, written and built end to end.',
          },
        },
      ],
    },
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: 'medical-ia',
    name: "Médical'IA",
    studio: 'nexya',
    category: { fr: 'IA et santé publique', en: 'AI and public health' },
    year: '2025 — 2026',
    stage: 'demonstrator',
    featured: true,
    tagline: {
      fr: "Aide à la décision sur l'accès aux soins, pour les acteurs publics.",
      en: 'Decision support on healthcare access, built for public authorities.',
    },
    positioning: {
      fr: "Un élu sait qu'il manque des médecins sur son territoire. Il ne peut pas le démontrer avec un chiffre qui tienne devant un conseil. Médical'IA construit l'indicateur composite, sourcé et opposable, qui manque à cette conversation.",
      en: "An elected official knows doctors are missing in their area. They cannot prove it with a number that holds up in front of a council. Médical'IA builds the composite indicator, sourced and defensible, that this conversation lacks.",
    },
    roleLabel: {
      fr: 'Produit, données, développement',
      en: 'Product, data, engineering',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Leaflet', 'Recharts', 'FastAPI', 'jsPDF'],
    codeVisibility: 'private',
    links: [
      {
        kind: 'site',
        label: { fr: 'Site du projet', en: 'Project website' },
        href: 'https://medical-ai.fr',
      },
    ],
    caseStudy: {
      problem: {
        fr: "On parle de désert médical à partir d'un chiffre unique, le plus souvent l'accessibilité potentielle localisée. Mais un élu qui doit décider où implanter une maison de santé, ou justifier une demande de financement, n'a pas besoin d'un chiffre : il a besoin d'un raisonnement qu'il peut défendre devant un conseil, face à des gens qui contesteront la méthode avant le résultat.",
        en: 'Medical deserts are usually described with a single number, most often a localised potential accessibility index. But an elected official deciding where to open a health centre, or justifying a funding request, does not need a number: they need a line of reasoning they can defend in front of a council, against people who will challenge the method before the result.',
      },
      audience: {
        fr: 'Communes, intercommunalités et acteurs publics de la santé territoriale.',
        en: 'Municipalities, inter-municipal bodies and public actors in regional healthcare.',
      },
      valueProposition: {
        fr: 'Un score de 1 à 5, décomposé en cinq piliers pondérés, où chaque variable affiche sa source, son année de référence et son niveau de confiance.',
        en: 'A score from 1 to 5, broken down into five weighted pillars, where every variable displays its source, its reference year and its confidence level.',
      },
      product: {
        fr: "Un démonstrateur web pour analyste territorial. Le moteur MédiScore combine cinq piliers pondérés : accessibilité 35 %, offre de soins 25 %, besoin de la population 20 %, risque futur 15 %, capacité d'action 5 %. Il en tire un score continu accompagné d'un indice de confiance. Un second moteur projette la situation à trois et cinq ans en faisant vieillir les cohortes de praticiens. L'ensemble s'exporte en PDF, format dans lequel la décision publique circule réellement.",
        en: 'A web demonstrator for territorial analysts. The MédiScore engine combines five weighted pillars: accessibility 35%, care supply 25%, population need 20%, future risk 15%, capacity to act 5%. From those it derives a continuous score with a confidence index. A second engine projects the situation three and five years ahead by ageing practitioner cohorts. Everything exports to PDF, the format in which public decisions actually travel.',
      },
      role: [
        {
          fr: 'Définition du problème et de la proposition de valeur',
          en: 'Problem definition and value proposition',
        },
        {
          fr: 'Conception de la méthode de scoring et du système de pondération',
          en: 'Design of the scoring method and weighting system',
        },
        {
          fr: 'Sélection, qualification et documentation des sources de données',
          en: 'Selection, qualification and documentation of data sources',
        },
        {
          fr: 'Développement du moteur, du moteur de projection et de l’export PDF',
          en: 'Development of the engine, the projection engine and the PDF export',
        },
        {
          fr: 'Interface, cartographie et direction artistique',
          en: 'Interface, mapping and art direction',
        },
        { fr: 'Site du projet et positionnement', en: 'Project website and positioning' },
      ],
      decisions: [
        {
          title: {
            fr: "Un score composite plutôt qu'un indicateur unique",
            en: 'A composite score rather than a single indicator',
          },
          body: {
            fr: "Un seuil unique classe un territoire du bon ou du mauvais côté d'une ligne, et se conteste en une phrase. Cinq piliers pondérés obligent à expliciter ce qu'on considère comme important, et déplacent la discussion de « votre chiffre est faux » vers « votre pondération est discutable ». C'est un bien meilleur terrain.",
            en: 'A single threshold puts a territory on one side of a line and can be dismissed in one sentence. Five weighted pillars force you to state what you consider important, and move the discussion from "your number is wrong" to "your weighting is debatable". That is much better ground to stand on.',
          },
        },
        {
          title: {
            fr: 'Afficher une incertitude, pas seulement un score',
            en: 'Display an uncertainty, not just a score',
          },
          body: {
            fr: "Un score seul se lit comme une vérité. Chaque résultat est donc accompagné d'une marge, comprise entre ±0,1 et ±0,4, dérivée du niveau de confiance des sources qui l'alimentent. Un territoire évalué à partir de données estimées porte visiblement une incertitude plus large qu'un territoire évalué à partir de données publiées.",
            en: 'A score on its own reads as a truth. Every result therefore carries a margin, between ±0.1 and ±0.4, derived from the confidence level of the sources feeding it. A territory scored from estimated data visibly carries a wider uncertainty than one scored from published data.',
          },
        },
        {
          title: {
            fr: "Refuser d'écrire « réel » sur une variable qui ne l'est pas",
            en: 'Refuse to label a variable "real" when it is not',
          },
          body: {
            fr: "C'est la décision dont je suis le plus satisfait, et la moins spectaculaire. Le moteur classe chaque variable comme réelle, estimée ou démonstrative, et rien ne peut être marqué « réel » tant que la donnée n'est pas branchée sur un flux. L'avertissement qui en découle ne reste pas dans l'interface : il est imprimé dans le PDF exporté. Un démonstrateur qui se fait passer pour un produit est une dette qu'on paie en réunion.",
            en: 'This is the decision I am most satisfied with, and the least spectacular. The engine classifies every variable as real, estimated or demonstrative, and nothing can be marked "real" until the data is connected to a live feed. The resulting disclaimer does not stay inside the interface: it is printed into the exported PDF. A demonstrator passing itself off as a product is a debt you repay in a meeting.',
          },
        },
        {
          title: {
            fr: 'Poser un garde-fou social sur le score',
            en: 'Put a social guardrail on the score',
          },
          body: {
            fr: "Un territoire fortement défavorisé ne peut pas être classé « excellent », même si sa moyenne d'accessibilité est bonne. Une bonne moyenne peut recouvrir une population qui ne consulte pas. La règle est écrite dans le moteur plutôt que laissée à l'interprétation du lecteur.",
            en: 'A strongly deprived territory cannot be rated "excellent", even when its average accessibility looks good. A good average can hide a population that does not seek care. The rule is written into the engine rather than left to the reader’s interpretation.',
          },
        },
        {
          title: {
            fr: 'Comparer à strate de population comparable',
            en: 'Compare within a comparable population band',
          },
          body: {
            fr: "Comparer une commune rurale à une métropole ne produit aucune décision utile. Huit strates de population servent de référentiel, pour que le score réponde à « comment se situe ce territoire parmi ses semblables » plutôt qu'à « comment se situe-t-il en France ».",
            en: 'Comparing a rural municipality with a metropolis produces no useful decision. Eight population bands act as the reference, so the score answers "how does this territory compare with its peers" rather than "how does it compare with France".',
          },
        },
      ],
      outcome: {
        fr: "Démonstrateur v1.0 fonctionnel : moteur de score de 574 lignes, moteur de projection à trois et cinq ans, export PDF, onze sources publiques référencées avec leur année, leur licence et leur niveau de confiance. La marque MédiScore est déposée à l'INPI sous le numéro 5155219. Le site du projet est en ligne.",
        en: 'Working v1.0 demonstrator: a 574-line scoring engine, a three and five year projection engine, PDF export, and eleven public sources referenced with year, licence and confidence level. The MédiScore trademark is registered with the French INPI under number 5155219. The project website is online.',
      },
      learnings: [
        {
          fr: 'Sur un sujet public, la crédibilité ne vient pas de la précision affichée mais de la traçabilité assumée.',
          en: 'On a public-interest topic, credibility comes from traceability you own, not from the precision you display.',
        },
        {
          fr: "Pondérer, c'est prendre une position. Autant l'écrire dans l'interface plutôt que l'enfouir dans le code.",
          en: 'Weighting is taking a position. Better to write it in the interface than bury it in the code.',
        },
        {
          fr: "Un export PDF n'est pas une fonctionnalité secondaire : c'est le format dans lequel une décision publique se transmet et se défend.",
          en: 'A PDF export is not a secondary feature: it is the format in which a public decision is passed on and defended.',
        },
      ],
      limits: [
        {
          fr: "C'est un démonstrateur, et il le dit lui-même. Aucune variable n'est branchée sur un flux temps réel : les valeurs sont démonstratives ou estimées. Seules les sources sont réelles.",
          en: 'It is a demonstrator, and it says so itself. No variable is connected to a live feed: values are demonstrative or estimated. Only the sources are real.',
        },
        {
          fr: 'Dix communes témoins seulement, choisies pour couvrir des profils contrastés.',
          en: 'Ten reference municipalities only, chosen to cover contrasting profiles.',
        },
        {
          fr: "La cartographie détaillée ne couvre qu'un seul territoire. Il n'y a pas de carte de France à l'échelle communale.",
          en: 'Detailed mapping covers a single territory. There is no France-wide map at municipal level.',
        },
        {
          fr: "Le backend existe mais n'alimente pas encore l'interface : le front fonctionne sur des données locales.",
          en: 'The backend exists but does not yet feed the interface: the front end runs on local data.',
        },
        {
          fr: "Quatre modules de l'interface sont encore des pages vides.",
          en: 'Four modules of the interface are still empty pages.',
        },
        {
          fr: "Aucun utilisateur, aucune collectivité cliente, aucun contrat. La plateforme n'est pas déployée.",
          en: 'No users, no public-sector customer, no contract. The platform is not deployed.',
        },
      ],
      images: [
        {
          key: 'medical-ia-score',
          alt: {
            fr: 'Écran de décomposition du MédiScore : score de 65 sur 100 avec une marge de ±0,17, statut de provenance des données en réel, démonstratif ou estimé, et pilier accessibilité pondéré à 35 %.',
            en: 'MédiScore breakdown screen: a score of 65 out of 100 with a ±0.17 margin, data provenance status shown as real, demonstrative or estimated, and the accessibility pillar weighted at 35%.',
          },
          caption: {
            fr: "La décision produit la plus importante est visible ici : chaque variable porte son statut de provenance, et l'avertissement « démonstrateur v1.0 » est affiché dans l'écran, pas enfoui dans une page à part.",
            en: 'The most important product decision is visible here: every variable carries its provenance status, and the "demonstrator v1.0" warning sits inside the screen rather than buried on a separate page.',
          },
        },
        {
          key: 'medical-ia-territory',
          alt: {
            fr: 'Vue territoire : MédiScore de la commune, statut de dotation, et trois entrées vers la décomposition du score, la projection et les actions recommandées.',
            en: 'Territory view: the municipality MédiScore, its supply status, and three entry points to the score breakdown, the projection and recommended actions.',
          },
          caption: {
            fr: "Vue territoire. L'interface est organisée autour de quatre questions qu'un élu pose vraiment, pas autour des modules techniques.",
            en: 'Territory view. The interface is organised around four questions an elected official actually asks, not around technical modules.',
          },
        },
      ],
    },
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: 'resum-eye',
    name: "Resum'EYE",
    studio: 'nexya',
    category: { fr: 'Outil RH', en: 'HR tool' },
    year: '2026',
    stage: 'prototype',
    featured: true,
    tagline: {
      fr: 'Outil de pré-tri de candidatures pour équipes RH.',
      en: 'Application screening tool for HR teams.',
    },
    positioning: {
      fr: "Un recruteur écarte des centaines de candidatures sans qu'il reste de trace de ce qui a été évalué. Resum'EYE devait produire cette trace. Le produit est resté un prototype, la relation commerciale a été réelle, et c'est le projet qui m'a appris la différence.",
      en: "A recruiter rejects hundreds of applications with no record of what was actually assessed. Resum'EYE was meant to produce that record. The product stayed a prototype, the commercial relationship was real, and this is the project that taught me the difference.",
    },
    roleLabel: {
      fr: 'Produit, design, développement, vente',
      en: 'Product, design, engineering, sales',
    },
    stack: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'jsPDF'],
    codeVisibility: 'private',
    links: [],
    caseStudy: {
      problem: {
        fr: "Une équipe RH qui reçoit plusieurs centaines de candidatures pour un poste passe l'essentiel de son temps à écarter, pas à choisir. Ce premier tri est peu qualifié, peu traçable, et rarement homogène d'un recruteur à l'autre. Il concentre pourtant le risque : c'est là qu'on perd un bon profil sans jamais le savoir.",
        en: 'An HR team receiving several hundred applications for one role spends most of its time rejecting, not choosing. That first pass is low-skill, hard to trace and rarely consistent between recruiters. Yet it concentrates the risk: it is where a good candidate is lost without anyone ever knowing.',
      },
      audience: {
        fr: "Équipes RH et cabinets de recrutement, en particulier dans l'ingénierie, où le volume est élevé et les compétences difficiles à lire pour un non-spécialiste.",
        en: 'HR teams and recruitment firms, particularly in engineering, where volume is high and skills are hard to read for a non-specialist.',
      },
      valueProposition: {
        fr: "Un pré-tri assisté : un score d'adéquation par candidat, un résumé lisible, et une trace de ce qui a été évalué.",
        en: 'Assisted screening: a fit score per candidate, a readable summary, and a record of what was assessed.',
      },
      product: {
        fr: 'Une interface web complète : connexion, tableau de bord RH avec recherche et filtres, dépôt de CV en glisser-déposer avec progression, fiche candidat détaillée (compétences, expériences, formation), et une page entièrement dédiée à la conformité au RGPD.',
        en: 'A complete web interface: sign-in, an HR dashboard with search and filters, drag-and-drop CV upload with progress, a detailed candidate view (skills, experience, education), and a page entirely dedicated to GDPR compliance.',
      },
      role: [
        { fr: "Cadrage du besoin auprès d'équipes RH", en: 'Needs framing with HR teams' },
        {
          fr: 'Direction artistique et conception de l’interface',
          en: 'Art direction and interface design',
        },
        { fr: 'Développement du prototype', en: 'Prototype development' },
        {
          fr: 'Prospection, démonstration et négociation commerciale',
          en: 'Outreach, demonstration and commercial negotiation',
        },
      ],
      decisions: [
        {
          title: {
            fr: "Construire l'interface avant le modèle",
            en: 'Build the interface before the model',
          },
          body: {
            fr: "Sur un outil de tri, l'adoption ne dépend pas de la qualité du score mais de la confiance qu'on accorde à sa lecture. Commencer par l'interface a permis de tester la proposition de valeur en rendez-vous, avant d'investir dans une chaîne d'extraction et de scoring. C'est un choix assumé, et il a un coût : voir les limites.",
            en: 'For a screening tool, adoption does not depend on score quality but on how much you trust the way it is presented. Starting with the interface made it possible to test the value proposition in meetings before investing in an extraction and scoring pipeline. It is a deliberate choice, and it has a cost: see the limits.',
          },
        },
        {
          title: {
            fr: 'Mettre le RGPD dans le produit, pas dans les conditions générales',
            en: 'Put GDPR inside the product, not in the terms and conditions',
          },
          body: {
            fr: "En recrutement, la première objection n'est pas fonctionnelle, elle est juridique : où sont stockés les CV, combien de temps, qui est responsable du traitement. Une page dédiée dans le produit, écrite pour être lue par un DPO, a fait plus pour la crédibilité que n'importe quelle fonctionnalité. Les échanges commerciaux l'ont confirmé.",
            en: 'In recruitment the first objection is not functional, it is legal: where are the CVs stored, for how long, who is the data controller. A dedicated in-product page, written to be read by a data protection officer, did more for credibility than any feature. The sales conversations confirmed it.',
          },
        },
        {
          title: {
            fr: "Aller chercher l'acheteur avec un prototype",
            en: 'Take a prototype to the buyer',
          },
          body: {
            fr: "Plutôt que d'attendre un produit complet, j'ai engagé la discussion commerciale sur la base d'une démonstration. Le cadrage y a gagné énormément : intégration par API, conservation des données, tarification au volume, tous ces sujets sont sortis en semaines et non en mois. Le jour où l'acheteur a voulu voir le moteur, la limite est apparue d'un coup.",
            en: 'Rather than waiting for a finished product, I opened the commercial conversation on the basis of a demo. Framing gained enormously: API integration, data retention, volume pricing, all of it surfaced in weeks rather than months. The day the buyer asked to see the engine, the limit appeared all at once.',
          },
        },
      ],
      outcome: {
        fr: "Prototype d'interface complet et fonctionnel. Sur le plan commercial : une relation de plusieurs mois avec un groupe d'ingénierie français, portant sur la validation de l'intégration par API, la conformité au RGPD et une tarification au volume. Produit présenté en direct devant des décideurs du secteur lors du « Café IA » de Syntec-Ingénierie. Aucun contrat signé.",
        en: 'A complete, working interface prototype. Commercially: a several-month relationship with a French engineering group, covering API integration validation, GDPR compliance and volume pricing. The product was presented live to industry decision makers at the Syntec-Ingénierie "Café IA" event. No contract was signed.',
      },
      learnings: [
        {
          fr: "La première objection d'un acheteur RH n'est pas la performance du modèle, c'est la responsabilité juridique.",
          en: 'The first objection from an HR buyer is not model performance, it is legal responsibility.',
        },
        {
          fr: "Un cycle de vente B2B se joue sur des mois et sur des sujets qu'aucune démonstration ne couvre : intégration, conservation des données, tarification, responsabilité.",
          en: 'A B2B sales cycle plays out over months, on topics no demo covers: integration, data retention, pricing, liability.',
        },
        {
          fr: "Vendre avant de construire fait gagner du temps sur le cadrage, et en fait perdre le jour où l'on demande à voir ce qu'il y a derrière l'écran.",
          en: 'Selling before building saves time on framing, and loses it the day someone asks to see what sits behind the screen.',
        },
      ],
      limits: [
        {
          fr: "L'analyse des CV est simulée dans le prototype. Il n'y a ni extraction, ni modèle, ni scoring réel derrière l'interface.",
          en: 'CV analysis is simulated in the prototype. There is no extraction, no model and no real scoring behind the interface.',
        },
        {
          fr: "L'authentification est factice, sur stockage local du navigateur.",
          en: 'Authentication is fake, using browser local storage.',
        },
        {
          fr: 'Le code tient en un seul commit : le projet a été livré comme un support de démonstration, pas comme une base logicielle destinée à durer.',
          en: 'The code fits in a single commit: it was delivered as a demonstration asset, not as a codebase meant to last.',
        },
        {
          fr: 'Aucun contrat signé, aucun utilisateur en production.',
          en: 'No signed contract, no production users.',
        },
      ],
      images: [],
    },
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: 'atlas',
    name: 'Atlas',
    year: '2026',
    stage: 'prototype',
    featured: false,
    tagline: {
      fr: 'Poste de travail du commercial B2B, organisé autour de la journée plutôt que du pipeline.',
      en: 'A workspace for B2B sales, organised around the day rather than the pipeline.',
    },
    positioning: {
      fr: "Un CRM enregistre ce qui s'est passé. Atlas cherche à répondre à une autre question : que faut-il faire dans les deux prochaines heures.",
      en: 'A CRM records what happened. Atlas tries to answer a different question: what should be done in the next two hours.',
    },
    roleLabel: { fr: 'Produit et développement', en: 'Product and engineering' },
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    codeVisibility: 'private',
    links: [],
  },

  // ────────────────────────────────────────────────────────────────────────
  {
    slug: 'anomaly-detection',
    name: 'Détection d’anomalies',
    displayName: {
      fr: 'Détection d’anomalies sur robots industriels',
      en: 'Anomaly detection on industrial robots',
    },
    year: '2025',
    stage: 'archived',
    featured: false,
    tagline: {
      fr: 'Identifier une exécution robotisée anormale à partir de mesures de force et de couple.',
      en: 'Identifying abnormal robot executions from force and torque measurements.',
    },
    positioning: {
      fr: "Détection de collisions, d'obstructions et de défauts d'outil sur un jeu de 463 exécutions décrites par six capteurs. Le même angle mort que les autres projets, à l'échelle du capteur : la mesure contient déjà l'anomalie, encore faut-il savoir la lire.",
      en: 'Detecting collisions, obstructions and tool faults across 463 executions described by six sensors. The same blind spot as the other projects, at sensor scale: the measurement already contains the anomaly, the point is being able to read it.',
    },
    roleLabel: {
      fr: 'Analyse de données, en binôme avec Adel Bousri',
      en: 'Data analysis, paired with Adel Bousri',
    },
    stack: ['Python', 'scikit-learn', 'Jupyter'],
    codeVisibility: 'public',
    repo: 'ML-PROJECT-Anomaly-Detection-in-Industrial-Robot-Executions',
    links: [
      {
        kind: 'code',
        label: { fr: 'Code sur GitHub', en: 'Code on GitHub' },
        href: 'https://github.com/Ilyess911/ML-PROJECT-Anomaly-Detection-in-Industrial-Robot-Executions',
      },
    ],
  },
];

/** Projets mis en avant dans la sélection principale. */
export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

/** Projets disposant d'une page d'étude de cas dédiée. */
export const CASE_STUDY_PROJECTS = PROJECTS.filter((p) => p.caseStudy !== undefined);

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
