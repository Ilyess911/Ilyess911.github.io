import type { I18n } from './types';

export const PROFILE = {
  name: 'Ilyess Assadi',

  /** Rôle court, affiché en en-tête et dans les métadonnées. */
  role: {
    fr: 'Ingénierie, produit et business',
    en: 'Engineering, product and business',
  } satisfies I18n,

  /**
   * La phrase du hero. Une seule, à la première personne.
   * Le manifeste en trois lignes sonnait comme une accroche d'agence :
   * ici c'est quelqu'un qui dit ce qu'il fait.
   */
  headline: {
    fr: 'Je construis les instruments qui manquent à ceux qui décident.',
    en: 'I build the instruments that decision makers are missing.',
  } satisfies I18n,

  /** Les trois repères, sous la phrase. Rien d'autre. */
  subline: {
    fr: 'ESILV · Air France Industries · Nexya Agency',
    en: 'ESILV · Air France Industries · Nexya Agency',
  } satisfies I18n,

  /** Affiliations affichées en filet sous le hero. Texte, pas de logos. */
  affiliations: ['Air France Industries', 'ESILV', 'Nexya Agency'] as const,

  /* Cette ligne répond à la question qu'un recruteur se pose en premier :
     quel poste, et à partir de quand. Elle apparaît dès le hero, pas seulement en bas de page. */
  /* Résumé de la ligne ci-dessous, pour la pastille de statut : une pill est un
     objet d'une seule ligne, elle ne peut pas porter une phrase entière. */
  availabilityShort: {
    fr: 'Février 2027',
    en: 'February 2027',
  } satisfies I18n,

  availability: {
    fr: 'Stage de trois mois à partir de février 2027, en sales engineering, produit ou développement commercial technique.',
    en: 'Three-month internship from February 2027, in sales engineering, product or technical business development.',
  } satisfies I18n,

  /**
   * Texte d'introduction, en trois temps. Il est composé en paragraphes distincts
   * pour permettre une mise en page éditoriale, le premier servant d'exergue.
   */
  about: {
    fr: [
      "Je viens de l'industrie.",
      "Maintenance aéronautique, méthodes, opérations. C'est en atelier que j'ai vu pour la première fois le problème que je retrouve partout depuis : la donnée est là, tout le monde la voit passer, et la décision se prend quand même sans elle, parce que personne n'a le temps de la rendre lisible.",
      "Depuis, je construis cet instrument manquant. Je passe autant de temps à expliquer ce qu'il vaut qu'à l'écrire, et j'écris toujours ce qu'il ne sait pas encore faire. C'est vers ce métier que je vais : celui où une contrainte technique se transforme en argument devant quelqu'un qui décide.",
    ],
    en: [
      'I come from industry.',
      'Aviation maintenance, methods, operations. The shop floor is where I first saw the problem I have found everywhere since: the data is there, everyone watches it go by, and the decision still gets made without it, because nobody has time to make it readable.',
      'Since then I have been building that missing instrument. I spend as much time explaining what it is worth as writing it, and I always write down what it cannot do yet. That is the job I am heading towards: the one where a technical constraint turns into an argument in front of someone who decides.',
    ],
  } satisfies I18n<readonly string[]>,
} as const;

/**
 * La manière de travailler, en cinq temps.
 *
 * Ce n'est pas une liste de qualités : chaque étape est ancrée sur un travail réel,
 * projet ou expérience, et la preuve citée est vérifiable dans le contenu du site.
 */
export const METHOD: readonly {
  readonly step: string;
  readonly label: I18n;
  readonly body: I18n;
  readonly proof: I18n;
  readonly source: I18n;
  /** Slug de projet si la preuve renvoie vers une étude de cas. */
  readonly project?: string;
}[] = [
  {
    step: '01',
    label: { fr: 'Comprendre', en: 'Understand' },
    body: {
      fr: "Lire le système avant de vouloir le changer : la réglementation, la documentation, et ce qui se passe réellement à l'atelier.",
      en: 'Read the system before trying to change it: the regulation, the documentation, and what actually happens on the floor.',
    },
    proof: {
      fr: "La donnée technique est disponible, et la décision se prend quand même sans elle. C'est là que tout part.",
      en: 'The technical data is available, and the decision still gets made without it. That is where it all starts.',
    },
    source: { fr: 'Air France Industries', en: 'Air France Industries' },
  },
  {
    step: '02',
    label: { fr: 'Structurer', en: 'Structure' },
    body: {
      fr: "Choisir l'unité de compte du métier, pas celle du logiciel. C'est elle qui décide de la forme de tout le reste.",
      en: 'Choose the unit of account of the work, not the one of the software. It decides the shape of everything else.',
    },
    proof: {
      fr: "Le crédit d'heures plutôt que la réservation : chaque écran répond à « combien d'heures sont dues, consommées, disponibles ».",
      en: 'The hour credit rather than the booking: every screen answers "how many hours are owed, used, available".',
    },
    source: { fr: 'Time2Drive', en: 'Time2Drive' },
    project: 'time2drive',
  },
  {
    step: '03',
    label: { fr: 'Construire', en: 'Build' },
    body: {
      fr: 'Le moins de pièces possible, chacune à sa place, et rien qui ne serve à une décision.',
      en: 'As few parts as possible, each in its place, and nothing that does not serve a decision.',
    },
    proof: {
      fr: "TypeScript strict, quatre dépendances, aucune bibliothèque d'animation ni d'état.",
      en: 'Strict TypeScript, four dependencies, no animation or state library.',
    },
    source: { fr: 'Atlas', en: 'Atlas' },
    project: 'atlas',
  },
  {
    step: '04',
    label: { fr: 'Mesurer', en: 'Measure' },
    body: {
      fr: "Un chiffre qu'on peut contester vaut mieux qu'une promesse qu'on doit croire.",
      en: 'A number you can argue with beats a promise you have to believe.',
    },
    proof: {
      fr: 'Le calcul de valeur vit dans le produit, hypothèses affichées : taux horaire, occupation cible, heures facturables.',
      en: 'The value calculation lives inside the product, assumptions on screen: hourly rate, target occupancy, billable hours.',
    },
    source: { fr: 'Time2Drive', en: 'Time2Drive' },
    project: 'time2drive',
  },
  {
    step: '05',
    label: { fr: 'Expliquer', en: 'Explain' },
    body: {
      fr: "La valeur se défend devant quelqu'un qui décide, et ce n'est jamais la démonstration technique qui tranche.",
      en: 'Value gets defended in front of someone who decides, and it is never the technical demo that settles it.',
    },
    proof: {
      fr: "Plusieurs mois de discussions avec un groupe d'ingénierie, jusqu'à la conformité et la tarification.",
      en: 'Months of discussions with an engineering group, all the way to compliance and pricing.',
    },
    source: { fr: "Resum'EYE", en: "Resum'EYE" },
    project: 'resum-eye',
  },
];

/**
 * La phrase qui ferme la section « manière de travailler ».
 *
 * Elle remplace l'ancienne liste de quatre principes : une seule affirmation,
 * composée en exergue, dit mieux la même chose qu'une énumération.
 */
export const CREDO = {
  fr: "Quand on construit l'instrument avec lequel un autre décide, on lui doit le degré de confiance qu'il peut lui accorder. C'est une obligation, pas une modestie. C'est pour ça que chaque projet présenté ici commence par ce qu'il ne sait pas encore faire.",
  en: 'When you build the instrument someone else decides with, you owe them the confidence they can place in it. That is an obligation, not modesty. It is why every project shown here starts with what it cannot do yet.',
} satisfies I18n;

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
