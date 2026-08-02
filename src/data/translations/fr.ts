/**
 * Chaînes d'interface, version française.
 * La version anglaise (`en.ts`) doit exposer exactement les mêmes clés.
 * Le test `tests/content.test.ts` vérifie cette parité à chaque build.
 */
export const fr = {
  meta: {
    title: 'Ilyess Assadi — Ingénierie, produit et business',
    description:
      "Étudiant ingénieur à l'ESILV et apprenti chez Air France Industries. Je construis des instruments de décision pour des métiers qui décident sans instrument : auto-écoles, équipes RH, forces de vente, maintenance aéronautique.",
    langLabel: 'Français',
    localeTag: 'fr-FR',
  },

  nav: {
    contactCta: 'Me contacter',
    skipToContent: 'Aller au contenu principal',
    home: 'Accueil',
    selection: 'Projets',
    approach: 'Méthode',
    experience: 'Parcours',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Fermer',
    switchLanguage: 'Switch to English',
    switchLanguageShort: 'EN',
  },

  hero: {
    previewStage: 'Prototype',
    targetLabel: 'Poste recherché',
    targetRole: 'Sales Engineering · Solutions Engineering',
    targetTerms: 'Stage de 3 mois · à partir de février 2027',
    discipline: 'Engineering × Product × Business',
    portraitAlt: "Portrait d'Ilyess Assadi.",
    statusLabel: 'Recherche',
    nowLabel: 'En ce moment',
    nowValue:
      "Apprenti ingénieur méthodes chez Air France Industries, en dernière année à l'ESILV, parcours Business engineering avec l'EMLV à partir de la rentrée 2026.",
    stackLabel: 'Terrain',
    previewLabel: 'atlas — écran today',
    projectsLabel: 'Produits',
    availabilityLabel: 'Disponibilité',
    primaryCta: 'Voir mes projets',
    secondaryCta: 'GitHub',
    tertiaryCta: 'LinkedIn',
    fragmentAlt:
      "Détail de l'écran Today d'Atlas : une liste d'actions classées par impact, dont un brouillon de réponse marqué comme généré par une machine.",
    fragmentCaption: 'Atlas — écran Today, détail.',
  },

  /* Le libellé de l'épine dorsale ne répète jamais le titre de la section :
     l'un classe, l'autre raconte. */
  sections: {
    intro: { number: '01', label: 'À propos' },
    selection: { number: '02', label: 'Projets' },
    experience: { number: '03', label: 'Parcours' },
    approach: { number: '04', label: 'Méthode' },
    workshop: { number: '05', label: 'Atelier' },
    contact: { number: '06', label: 'Contact' },
  },

  intro: {
    title: 'À propos',
  },

  studio: {
    description:
      "Time2Drive et Resum'EYE ont été conçus, construits et présentés à de vrais interlocuteurs sous Nexya Agency, studio produit co-fondé en juillet 2025.",
  },

  selection: {
    exitTitle: 'Un de ces problèmes ressemble au vôtre ?',
    exitCta: 'Parlons-en',
    title: 'Trois chantiers, un même angle mort.',
    readCase: 'Lire l’étude de cas',
  },

  chapter: {
    role: 'Rôle',
    builtWith: 'Construit avec',
    code: 'Code',
    ongoing: 'Chantier en cours, pas encore d’étude de cas.',
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
    backToSelection: 'Retour aux projets',
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

  method: {
    credoLabel: 'La règle qui tient le reste',
  },

  experience: {
    title: 'De l’atelier au produit',
    intro:
      "C'est en atelier que j'ai vu le problème pour la première fois : une donnée technique disponible, et une décision prise sans elle. Tout ce que je construis depuis vient de là.",
    educationTitle: 'Formation',
    more: 'Détail',
    less: 'Replier',
    confidentialityNote:
      'Aucune information confidentielle, donnée interne ou document d’entreprise ne figure sur ce site.',
  },

  workshop: {
    title: 'Aussi en chantier',
    intro:
      'Ce qui est réellement en chantier, avec son statut exact. Quand le code est ouvert, le lien est vérifiable ; quand il ne l’est pas, c’est écrit.',
    thisSite: 'Ce site',
    livePublic: 'En ligne · Code public',
    languages: 'Langues',
    githubCta: 'Voir le profil GitHub',
  },

  contact: {
    cta: 'M’écrire',
    title: 'Construisons quelque chose d’utile.',
    intro:
      'Je cherche le poste où ce travail se fait pour de vrai, chez quelqu’un dont c’est le métier : avant-vente, sales engineering, produit ou développement commercial technique.',
    emailLabel: 'Email',
    copyEmail: 'Copier',
    emailCopied: 'Adresse copiée',
    copyFailed: 'Copie impossible — sélectionnez l’adresse manuellement',
    cvLabel: 'CV',
    cvDownload: 'Télécharger le CV (PDF)',
    locationLabel: 'Localisation',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
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

  proof: {
    label: 'Sur le terrain',
    title: 'Deux produits, deux cycles de vente réels.',
    f1Label: 'Démonstration',
    f1: 'Resum’EYE présenté en direct devant des décideurs du secteur lors du « Café IA » de Syntec-Ingénierie.',
    f2Label: 'Cycle B2B',
    f2: 'Relation de plusieurs mois avec un groupe d’ingénierie français : intégration par API, conformité RGPD, tarification au volume.',
    f3Label: 'Prospection',
    f3: 'Campagne d’appels et d’emails auprès d’auto-écoles d’Île-de-France pour Time2Drive.',
    outcome: 'Aucun contrat signé à ce jour.',
    lesson:
      'La première objection d’un acheteur RH n’est pas la performance du modèle, c’est la responsabilité juridique.',
    lessonSource: 'Resum’EYE — ce que j’en retiens',
  },
};

/**
 * Forme du dictionnaire, dérivée du français.
 * Pas de `as const` : on veut figer les clés, pas les valeurs,
 * pour que l'anglais soit une traduction et non une copie.
 */
export type Dictionary = typeof fr;
