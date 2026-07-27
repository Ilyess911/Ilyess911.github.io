import type { I18n, Principle, SkillGroup } from './types';

export const PROFILE = {
  name: 'Ilyess Assadi',

  /** Rôle court, affiché en en-tête et dans les métadonnées. */
  role: {
    fr: 'Ingénierie, produit et business',
    en: 'Engineering, product and business',
  } satisfies I18n,

  /** Titre principal du hero. Trois temps, une idée par ligne. */
  headline: {
    fr: ['Comprendre le système.', 'En faire un produit.', 'En défendre la valeur.'],
    en: ['Understand the system.', 'Turn it into a product.', 'Make the case for it.'],
  } satisfies I18n<readonly string[]>,

  subline: {
    fr: "Étudiant ingénieur à l'ESILV, apprenti ingénieur méthodes chez Air France Industries. Je construis des produits à l'intersection de l'IA, des opérations et du SaaS B2B, et je documente leurs limites aussi précisément que leurs résultats.",
    en: 'Engineering student at ESILV, methods engineering apprentice at Air France Industries. I build products where AI, operations and B2B SaaS meet, and I document their limits as precisely as their results.',
  } satisfies I18n,

  /** Affiliations affichées en filet sous le hero. Texte, pas de logos. */
  affiliations: ['Air France Industries', 'ESILV', 'Nexya Agency'] as const,

  /* Cette ligne répond à la question qu'un recruteur se pose en premier :
     quel poste, et à partir de quand. Elle apparaît dès le hero, pas seulement en bas de page. */
  availability: {
    fr: 'Stage de trois mois à partir de février 2027, en sales engineering, produit ou développement commercial technique.',
    en: 'Three-month internship from February 2027, in sales engineering, product or technical business development.',
  } satisfies I18n,

  about: {
    fr: "Je viens de l'industrie : maintenance aéronautique, méthodes, opérations. C'est là que j'ai appris à lire un système avant de vouloir le changer. Depuis, je construis des produits, et je passe autant de temps à expliquer leur valeur qu'à les développer. Ce qui m'intéresse n'est ni la technologie seule, ni la vente seule, mais le point exact où une contrainte technique devient un argument commercial.",
    en: 'I come from industry: aviation maintenance, methods, operations. That is where I learned to read a system before trying to change it. Since then I have been building products, and I spend as much time explaining their value as writing them. What interests me is neither technology alone nor selling alone, but the exact point where a technical constraint becomes a commercial argument.',
  } satisfies I18n,
} as const;

/**
 * Les trois axes du positionnement.
 * Chaque axe est ancré sur un projet réel : c'est la preuve qui compte, pas l'adjectif.
 */
export const AXES = [
  {
    key: 'engineering',
    label: { fr: 'Engineering', en: 'Engineering' } satisfies I18n,
    body: {
      fr: 'Lire un système, ses données et ses contraintes avant de proposer quoi que ce soit.',
      en: 'Read a system, its data and its constraints before proposing anything.',
    } satisfies I18n,
    proof: {
      fr: 'Un score composite à cinq piliers pondérés, alimenté par onze sources publiques horodatées.',
      en: 'A composite score built on five weighted pillars, fed by eleven timestamped public sources.',
    } satisfies I18n,
    project: 'medical-ia',
  },
  {
    key: 'product',
    label: { fr: 'Product', en: 'Product' } satisfies I18n,
    body: {
      fr: 'Transformer un besoin métier en parcours, en priorités et en décisions assumées.',
      en: 'Turn a business need into user journeys, priorities and decisions you can defend.',
    } satisfies I18n,
    proof: {
      fr: 'Un écran par métier : le gérant pilote, le moniteur exécute, l’élève réserve.',
      en: 'One screen per role: the owner steers, the instructor executes, the student books.',
    } satisfies I18n,
    project: 'time2drive',
  },
  {
    key: 'business',
    label: { fr: 'Business', en: 'Business' } satisfies I18n,
    body: {
      fr: 'Expliquer la valeur, la chiffrer, et la défendre devant quelqu’un qui décide.',
      en: 'Explain the value, put a number on it, and defend it in front of a decision maker.',
    } satisfies I18n,
    proof: {
      fr: 'Plusieurs mois de discussions avec un groupe d’ingénierie, jusqu’à la conformité et la tarification.',
      en: 'Months of discussions with an engineering group, all the way to compliance and pricing.',
    } satisfies I18n,
    project: 'resum-eye',
  },
] as const;

/** Manière de travailler. Quatre principes, chacun vérifiable dans les études de cas. */
export const PRINCIPLES: readonly Principle[] = [
  {
    title: {
      fr: 'Je pars du métier, pas de la stack.',
      en: 'I start from the work, not the stack.',
    },
    body: {
      fr: "Un planning d'auto-école, un atelier de maintenance et un conseil municipal n'ont pas les mêmes contraintes. Le choix technique vient après, et il se justifie par le métier.",
      en: 'A driving school schedule, a maintenance shop and a city council do not share the same constraints. The technical choice comes after, and it is justified by the work itself.',
    },
  },
  {
    title: { fr: 'Je nomme les limites.', en: 'I name the limits.' },
    body: {
      fr: "Chaque projet présenté ici a une section « Limites », et elle est écrite avec le même soin que le reste. Sur Médical'IA, le code lui-même refuse d'étiqueter « réelle » une variable qui ne l'est pas.",
      en: 'Every project here has a "Limits" section, written with the same care as the rest. In Médical\'IA, the code itself refuses to label a variable "real" when it is not.',
    },
  },
  {
    title: { fr: 'Je chiffre avant de convaincre.', en: 'I quantify before I convince.' },
    body: {
      fr: "Sur Time2Drive, le calcul de valeur est dans le produit, avec ses hypothèses visibles : taux horaire, taux d'occupation cible, heures facturables. Un gérant peut contester le chiffre, c'est le but.",
      en: 'In Time2Drive the value calculation lives inside the product, with its assumptions on screen: hourly rate, target occupancy, billable hours. An owner can argue with the number, which is the point.',
    },
  },
  {
    title: { fr: 'Je dis qui a fait quoi.', en: 'I say who did what.' },
    body: {
      fr: "Quand une partie du travail n'est pas la mienne, c'est écrit, à l'endroit où ça compte. Un portfolio qui gonfle les rôles ne survit pas au premier entretien technique.",
      en: 'When part of the work is not mine, it is written down where it matters. A portfolio that inflates roles does not survive the first technical interview.',
    },
  },
];

/** Compétences groupées et contextualisées. Ni barres de pourcentage, ni nuage de badges. */
export const SKILLS: readonly SkillGroup[] = [
  {
    label: { fr: 'Produit et interface', en: 'Product and interface' },
    items: [
      'TypeScript',
      'React',
      'Next.js',
      'Astro',
      'Conception d’interface',
      'Parcours utilisateur',
    ],
  },
  {
    label: { fr: 'Données et IA', en: 'Data and AI' },
    items: ['Python', 'pandas', 'scikit-learn', 'SQL', 'Workflows LLM', 'Sorties structurées'],
  },
  {
    label: { fr: 'Ingénierie et opérations', en: 'Engineering and operations' },
    items: [
      'Lean',
      'Méthodes de maintenance',
      'Suivi de KPI',
      'Automatisation de processus',
      '3DEXPERIENCE',
      'R Studio',
    ],
  },
  {
    label: { fr: 'Business', en: 'Business' },
    items: [
      'Développement commercial',
      'Démonstration produit',
      'Négociation',
      'Analyse de marché',
      'CRM',
    ],
  },
];

export const LANGUAGES: readonly { readonly label: I18n; readonly level: I18n }[] = [
  {
    label: { fr: 'Français', en: 'French' },
    level: { fr: 'Langue maternelle', en: 'Native' },
  },
  {
    label: { fr: 'Anglais', en: 'English' },
    level: { fr: 'TOEIC 845', en: 'TOEIC 845' },
  },
  {
    label: { fr: 'Espagnol', en: 'Spanish' },
    level: { fr: 'Niveau académique', en: 'Academic level' },
  },
  {
    label: { fr: 'Néerlandais', en: 'Dutch' },
    level: { fr: 'Débutant', en: 'Beginner' },
  },
];
