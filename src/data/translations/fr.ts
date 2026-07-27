/**
 * Chaînes d'interface, version française.
 * La version anglaise (`en.ts`) doit exposer exactement les mêmes clés.
 * Le test `tests/content.test.ts` vérifie cette parité à chaque build.
 */
export const fr = {
  meta: {
    title: 'Ilyess Assadi — Ingénierie, produit et business',
    description:
      "Étudiant ingénieur à l'ESILV et apprenti chez Air France Industries. Je construis des produits à l'intersection de l'IA, des opérations et du SaaS B2B, et j'en documente les limites.",
    langLabel: 'Français',
    localeTag: 'fr-FR',
  },

  nav: {
    skipToContent: 'Aller au contenu principal',
    home: 'Accueil',
    selection: 'Sélection',
    approach: 'Méthode',
    experience: 'Parcours',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Fermer',
    switchLanguage: 'Switch to English',
    switchLanguageShort: 'EN',
  },

  hero: {
    availabilityLabel: 'Disponibilité',
    primaryCta: 'Voir la sélection',
    secondaryCta: 'GitHub',
    tertiaryCta: 'Me contacter',
  },

  /* Le libellé de l'épine dorsale ne répète jamais le titre de la section :
     l'un classe, l'autre raconte. */
  sections: {
    positioning: { number: '01', label: 'Positionnement' },
    selection: { number: '02', label: 'Travaux' },
    approach: { number: '03', label: 'Méthode' },
    experience: { number: '04', label: 'Parcours' },
    toolbox: { number: '05', label: 'Outils' },
    contact: { number: '06', label: 'Contact' },
  },

  positioning: {
    title: 'Engineering × Product × Business',
    intro:
      "Trois compétences qui n'ont d'intérêt que réunies. Chacune est ancrée ici sur un projet réel, pas sur un adjectif.",
    proofLabel: 'Preuve',
  },

  studio: {
    label: 'Studio',
    name: 'Nexya Agency',
    description:
      "Studio produit indépendant, co-fondé en juillet 2025. C'est le cadre dans lequel trois de ces produits ont été conçus, construits et présentés.",
    futureLabel: 'Produits à venir',
  },

  selection: {
    title: 'Projets sélectionnés',
    intro:
      'Peu de projets, racontés en entier : le problème, les décisions, le résultat réel et ce qui ne fonctionne pas encore.',
    columns: {
      project: 'Projet',
      year: 'Année',
      role: 'Rôle',
      status: 'Statut',
    },
    readCase: 'Lire l’étude de cas',
    noCase: 'Pas d’étude de cas dédiée',
    otherWork: 'Autres travaux',
  },

  stage: {
    live: 'En ligne',
    prototype: 'Prototype',
    demonstrator: 'Démonstrateur',
    archived: 'Terminé',
  },

  code: {
    public: 'Code public',
    private: 'Code privé',
    none: 'Pas de dépôt public',
    privateNote: 'Dépôt privé — accès possible sur demande.',
  },

  caseStudy: {
    backToSelection: 'Retour à la sélection',
    overview: 'En bref',
    problem: 'Le problème',
    audience: 'Pour qui',
    value: 'Proposition de valeur',
    product: 'Le produit',
    role: 'Mon rôle',
    collaboration: 'Collaboration',
    decisions: 'Décisions',
    outcome: 'Où en est le projet',
    learnings: 'Ce que j’en retiens',
    limits: 'Limites',
    limitsIntro:
      'Ce que ce projet ne fait pas, ou pas encore. Cette section fait partie de l’étude de cas au même titre que les autres.',
    stack: 'Stack',
    period: 'Période',
    status: 'Statut',
    links: 'Liens',
    nextProject: 'Projet suivant',
    imagesPending:
      'Captures produit à venir. Aucune image d’interface n’est publiée tant qu’elle n’est pas une capture réelle du produit.',
  },

  approach: {
    title: 'Manière de travailler',
    intro: 'Quatre règles que je m’applique. Chacune se vérifie dans les études de cas ci-dessus.',
  },

  experience: {
    title: 'De l’atelier au produit',
    intro:
      'De la maintenance aéronautique au produit, en gardant la même méthode : comprendre le système avant de vouloir le changer.',
    educationTitle: 'Formation',
    confidentialityNote:
      'Aucune information confidentielle, donnée interne ou document d’entreprise ne figure sur ce site.',
  },

  toolbox: {
    title: 'Ce avec quoi je travaille',
    intro:
      'Les outils dont je me sers réellement, groupés par usage. Sans niveau affiché : un pourcentage de compétence ne veut rien dire.',
    languagesTitle: 'Langues',
  },

  contact: {
    title: 'Parlons-en',
    intro:
      'Je cherche un stage où l’ingénierie et le commerce se rencontrent : avant-vente, sales engineering, produit ou développement commercial technique.',
    emailLabel: 'Email',
    copyEmail: 'Copier l’adresse',
    emailCopied: 'Adresse copiée',
    copyFailed: 'Copie impossible — sélectionnez l’adresse manuellement',
    cvLabel: 'CV',
    cvDownload: 'Télécharger le CV (PDF)',
    locationLabel: 'Localisation',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    githubNote:
      'La plupart de mes dépôts récents sont privés. Ce que vous pouvez ouvrir est signalé projet par projet.',
  },

  footer: {
    builtWith:
      'Construit avec Astro, sans framework côté client. Déployé via GitHub Actions sur GitHub Pages.',
    sourceCode: 'Code source de ce site',
    rights: 'Tous droits réservés.',
    lastUpdated: 'Dernière mise à jour',
  },

  notFound: {
    code: '404',
    title: 'Cette page n’existe pas',
    body: 'Le lien est peut-être ancien, ou l’adresse comporte une erreur. Voici les pages qui existent bien.',
    backHome: 'Retour à l’accueil',
  },
};

/**
 * Forme du dictionnaire, dérivée du français.
 * Pas de `as const` : on veut figer les clés, pas les valeurs,
 * pour que l'anglais soit une traduction et non une copie.
 */
export type Dictionary = typeof fr;
