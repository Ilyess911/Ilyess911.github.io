import type { I18n, Principle, SkillGroup } from './types';

export const PROFILE = {
  name: 'Ilyess Assadi',

  /** Rôle court, affiché en en-tête et dans les métadonnées. */
  role: {
    fr: 'Ingénierie, produit et business',
    en: 'Engineering, product and business',
  } satisfies I18n,

  /**
   * Titre principal du hero. Trois temps, une idée par ligne.
   * Il énonce le problème commun à tous les projets, pas une méthode de travail :
   * c'est lui qui empêche le site de se lire comme une collection.
   */
  headline: {
    fr: ["L'information existe.", "Elle n'est pas lisible.", 'Je construis ce qui manque.'],
    en: ['The information exists.', 'Nobody can act on it.', 'I build what is missing.'],
  } satisfies I18n<readonly string[]>,

  subline: {
    fr: "Étudiant ingénieur à l'ESILV, apprenti ingénieur méthodes chez Air France Industries. Je construis des outils pour des métiers qui décident tous les jours sans instrument : auto-écoles, collectivités, équipes RH, maintenance aéronautique. Et j'écris toujours ce que l'outil ne sait pas encore faire.",
    en: 'Engineering student at ESILV, methods engineering apprentice at Air France Industries. I build tools for people who make decisions every day without an instrument: driving schools, local authorities, HR teams, aviation maintenance. And I always write down what the tool cannot do yet.',
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
    fr: "Je viens de l'industrie : maintenance aéronautique, méthodes, opérations. C'est là que j'ai vu pour la première fois le problème que je retrouve partout depuis. La donnée est là, tout le monde la voit passer, et la décision se prend quand même sans elle, parce que personne n'a le temps de la rendre lisible. Depuis, je construis cet instrument manquant, et je passe autant de temps à expliquer ce qu'il vaut qu'à l'écrire. C'est vers ce métier que je vais : celui où une contrainte technique se transforme en argument devant quelqu'un qui décide.",
    en: 'I come from industry: aviation maintenance, methods, operations. That is where I first saw the problem I have found everywhere since. The data is there, everyone watches it go by, and the decision still gets made without it, because nobody has time to make it readable. Since then I have been building that missing instrument, and I spend as much time explaining what it is worth as writing it. That is the job I am heading towards: the one where a technical constraint turns into an argument in front of someone who decides.',
  } satisfies I18n,
} as const;

/**
 * Les trois axes du positionnement.
 *
 * Ce ne sont pas trois compétences juxtaposées mais trois étapes du même geste,
 * appliquées au même objet : la décision. Chacune est ancrée sur un projet réel,
 * de sorte que les trois projets illustrent une seule chaîne et non trois talents.
 */
export const AXES = [
  {
    key: 'engineering',
    label: { fr: 'Engineering', en: 'Engineering' } satisfies I18n,
    body: {
      fr: 'Aller chercher la donnée là où elle est, et savoir ce qu’elle vaut avant de s’en servir.',
      en: 'Go and find the data where it lives, and know what it is worth before using it.',
    } satisfies I18n,
    proof: {
      fr: 'Onze sources publiques, un statut de provenance par variable, et une marge d’incertitude affichée à côté du score.',
      en: 'Eleven public sources, a provenance status on every variable, and an uncertainty margin displayed next to the score.',
    } satisfies I18n,
    project: 'medical-ia',
  },
  {
    key: 'product',
    label: { fr: 'Product', en: 'Product' } satisfies I18n,
    body: {
      fr: 'En faire un écran où la décision devient évidente pour celui qui doit la prendre.',
      en: 'Turn it into a screen where the decision becomes obvious to whoever has to make it.',
    } satisfies I18n,
    proof: {
      fr: 'Le vide du planning rendu visible, parce que ce sont les créneaux vides qu’une auto-école vend.',
      en: 'Empty space in the schedule made visible, because empty slots are what a driving school sells.',
    } satisfies I18n,
    project: 'time2drive',
  },
  {
    key: 'business',
    label: { fr: 'Business', en: 'Business' } satisfies I18n,
    body: {
      fr: 'Chiffrer ce que cette décision change, et le défendre devant celui qui signe.',
      en: 'Put a number on what that decision changes, and defend it in front of whoever signs.',
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
      fr: "Un planning d'auto-école, un atelier de maintenance et un conseil municipal ont le même angle mort, mais pas les mêmes contraintes. C'est le métier qui dicte la forme de l'instrument. Le choix technique vient après, et il se justifie par lui.",
      en: 'A driving school schedule, a maintenance shop and a city council share the same blind spot, but not the same constraints. The work dictates the shape of the instrument. The technical choice comes after, and is justified by it.',
    },
  },
  {
    title: { fr: 'Je nomme les limites.', en: 'I name the limits.' },
    body: {
      fr: "Quand on construit l'instrument qui sert à décider, on doit à celui qui décide le degré de confiance qu'il peut lui accorder. C'est une obligation, pas une modestie. D'où la section « Limites » de chaque projet, et le fait que sur Médical'IA le code refuse d'étiqueter « réelle » une variable qui ne l'est pas.",
      en: 'When you build the instrument someone decides with, you owe that person the confidence they can place in it. That is an obligation, not modesty. Hence the "Limits" section on every project, and the fact that in Médical\'IA the code refuses to label a variable "real" when it is not.',
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
