import type { ExperienceItem } from './types';

/**
 * Expériences et formation.
 *
 * ⚠️ Air France Industries : aucune donnée, aucun document, aucun résultat interne
 * ne figure ici. Les descriptions restent au niveau des compétences et des méthodes.
 */

export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    org: 'Air France Industries',
    kind: 'work',
    role: {
      fr: 'Apprenti ingénieur méthodes — Direction Ingénierie des Équipements',
      en: 'Methods engineering apprentice — Equipment Engineering Department',
    },
    period: { fr: 'Sept. 2024 — aujourd’hui', en: 'Sept. 2024 — present' },
    start: '2024-09',
    end: null,
    location: 'Tremblay-en-France',
    summary: {
      fr: "Ingénierie des équipements avioniques dans un environnement de maintenance aéronautique. Le travail consiste à comprendre un système contraint par la réglementation, la documentation et la réalité de l'atelier, puis à en fiabiliser les processus. C'est ici que j'ai rencontré pour la première fois le problème que je retrouve dans chacun de mes projets : la donnée technique est disponible, et la décision se prend quand même sans elle.",
      en: 'Avionics equipment engineering in an aviation maintenance environment. The work consists of understanding a system constrained by regulation, documentation and shop-floor reality, then making its processes more reliable. This is where I first met the problem I now find in every one of my projects: the technical data is available, and the decision still gets made without it.',
    },
    highlights: [
      {
        fr: 'Comprendre avant de proposer : documentation technique, contraintes de navigabilité, contraintes opérationnelles.',
        en: 'Understand before proposing: technical documentation, airworthiness constraints, operational constraints.',
      },
      {
        fr: "Travailler la donnée technique pour qu'elle serve une décision, et pas seulement un rapport.",
        en: 'Work technical data so that it supports a decision, not only a report.',
      },
      {
        fr: "Automatiser ce qui est répétitif et mesurer ce qui est amélioré, dans une logique d'amélioration continue.",
        en: 'Automate what is repetitive and measure what is improved, in a continuous improvement approach.',
      },
      {
        fr: 'Aucun détail opérationnel, aucune donnée et aucun document interne ne sont publiés ici.',
        en: 'No operational detail, data or internal document is published here.',
      },
    ],
  },

  {
    org: 'Nexya Agency',
    kind: 'work',
    role: { fr: 'Co-fondateur', en: 'Co-founder' },
    period: { fr: 'Juil. 2025 — aujourd’hui', en: 'July 2025 — present' },
    start: '2025-07',
    end: null,
    location: 'Courbevoie',
    summary: {
      fr: "Studio produit indépendant. C'est le cadre dans lequel Time2Drive, Resum'EYE et Médical'IA ont été conçus, construits et présentés à des interlocuteurs réels. Trois secteurs différents, un même constat : une décision quotidienne s'y prend sans l'information qui existe déjà.",
      en: "An independent product studio. It is the frame in which Time2Drive, Resum'EYE and Médical'IA were designed, built and taken to real counterparts. Three different sectors, one shared observation: a daily decision is made there without information that already exists.",
    },
    highlights: [
      {
        fr: 'Choisir le problème avant la technologie : chaque produit part d’un métier observé.',
        en: 'Choose the problem before the technology: every product starts from an observed line of work.',
      },
      {
        fr: 'Aller au contact : appels, démonstrations, discussions de tarification et de conformité.',
        en: 'Get in front of people: calls, demos, pricing and compliance conversations.',
      },
      {
        fr: "Annoncer le statut réel de chaque produit à l'interlocuteur, prototype compris.",
        en: 'State the real status of each product to the person across the table, prototype included.',
      },
    ],
  },

  {
    org: 'Paris 2024',
    kind: 'other',
    role: { fr: 'Juge d’athlétisme certifié', en: 'Certified athletics official' },
    period: { fr: '2024', en: '2024' },
    start: '2024-01',
    end: '2024-12',
    location: 'Paris',
    summary: {
      fr: "Certification de juge d'athlétisme et participation aux Jeux olympiques de Paris 2024. Un environnement international où le protocole est écrit à l'avance et où tout se joue dans la gestion de l'imprévu.",
      en: 'Athletics officiating certification and participation in the Paris 2024 Olympic Games. An international environment where the protocol is written in advance and everything is decided by how you handle the unexpected.',
    },
    highlights: [
      {
        fr: 'Accueil événementiel chez City One Events depuis décembre 2022 : brief, flux de public, décisions rapides.',
        en: 'Event hosting with City One Events since December 2022: briefings, crowd flow, fast decisions.',
      },
    ],
  },

  {
    org: 'Airbus Helicopters',
    kind: 'work',
    role: { fr: 'Apprenti ingénieur industriel', en: 'Industrial engineering apprentice' },
    period: { fr: 'Sept. 2023 — juil. 2024', en: 'Sept. 2023 — July 2024' },
    start: '2023-09',
    end: '2024-07',
    location: 'Le Bourget',
    summary: {
      fr: "Logistique et moyens industriels. Un environnement où la rigueur d'exécution compte autant que l'idée, et où une amélioration ne vaut que si elle tient sur le terrain.",
      en: 'Logistics and industrial equipment. An environment where execution discipline matters as much as the idea, and where an improvement only counts if it holds on the floor.',
    },
    highlights: [
      {
        fr: "Inventaire et codification : remettre de l'ordre dans un référentiel avant de vouloir l'optimiser.",
        en: 'Inventory and coding: put a reference system back in order before trying to optimise it.',
      },
      { fr: 'Démarche 5S sur les postes de travail.', en: '5S approach applied to workstations.' },
      {
        fr: "Conception et mise au point d'un banc d'essai pour une presse thermoplastique.",
        en: 'Design and commissioning of a test bench for a thermoplastic press.',
      },
    ],
  },

  {
    org: 'Amundi Asset Management',
    kind: 'work',
    role: {
      fr: 'Assistant d’été — Private Equity, Distribution France et Monaco',
      en: 'Summer assistant — Private Equity, France and Monaco Distribution',
    },
    period: { fr: 'Juil. — août 2023', en: 'July — Aug. 2023' },
    start: '2023-07',
    end: '2023-08',
    location: 'Paris',
    summary: {
      fr: "Premier contact avec un univers où la valeur se démontre par le chiffre et se vend par la relation. Une grille de lecture qui m'a servi ensuite sur des produits techniques.",
      en: 'A first encounter with a world where value is proven by numbers and sold through relationships. A lens that later proved useful on technical products.',
    },
    highlights: [],
  },
];

export const EDUCATION: readonly ExperienceItem[] = [
  {
    org: 'ESILV × EMLV',
    kind: 'education',
    role: {
      fr: 'Parcours Business engineering — dernière année, à partir de la rentrée 2026',
      en: 'Business engineering track — final year, from the 2026 intake',
    },
    period: { fr: '2026 — 2027', en: '2026 — 2027' },
    start: '2026-09',
    end: '2027-08',
    location: 'Courbevoie',
    summary: {
      fr: "Parcours d'ingénieur d'affaires de l'ESILV, enseigné avec l'EMLV : cycles de vente, développement commercial, négociation et gestion de compte.",
      en: 'The ESILV business engineering track, taught with EMLV: sales cycles, business development, negotiation and account management.',
    },
    highlights: [],
  },
  {
    org: 'ESILV',
    kind: 'education',
    role: {
      fr: 'Diplôme d’ingénieur — Industrie 4.0 et Robotique',
      en: 'Engineering degree — Industry 4.0 and Robotics',
    },
    period: { fr: '2024 — 2027', en: '2024 — 2027' },
    start: '2024-09',
    end: '2027-08',
    location: 'Courbevoie',
    summary: {
      fr: "Dernière année en parcours Business engineering, le parcours d'ingénieur d'affaires enseigné avec l'EMLV.",
      en: 'Final year on the Business engineering track, the business engineering path taught with EMLV.',
    },
    highlights: [],
  },
  {
    org: 'Université Paris-Saclay',
    kind: 'education',
    role: {
      fr: 'BUT Génie Industriel et Maintenance — parcours Management, Méthodes, Maintenance Innovante',
      en: 'Industrial Engineering and Maintenance degree — Management, Methods, Innovative Maintenance track',
    },
    period: { fr: '2022 — 2024', en: '2022 — 2024' },
    start: '2022-09',
    end: '2024-07',
    location: 'Paris',
    summary: { fr: '', en: '' },
    highlights: [],
  },
];
