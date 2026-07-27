import type { Dictionary } from './fr';

/**
 * Interface strings, English version.
 * Written, not machine-translated. Must mirror every key in `fr.ts`.
 */
export const en: Dictionary = {
  meta: {
    title: 'Ilyess Assadi — Engineering, product and business',
    description:
      'Engineering student at ESILV and apprentice at Air France Industries. I build products where AI, operations and B2B SaaS meet, and I document their limits.',
    langLabel: 'English',
    localeTag: 'en-US',
  },

  nav: {
    skipToContent: 'Skip to main content',
    home: 'Home',
    selection: 'Selected work',
    approach: 'Approach',
    experience: 'Background',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    switchLanguage: 'Passer en français',
    switchLanguageShort: 'FR',
  },

  hero: {
    availabilityLabel: 'Availability',
    primaryCta: 'See selected work',
    secondaryCta: 'GitHub',
    tertiaryCta: 'Get in touch',
  },

  sections: {
    positioning: { number: '01', label: 'Positioning' },
    selection: { number: '02', label: 'Work' },
    approach: { number: '03', label: 'Method' },
    experience: { number: '04', label: 'Background' },
    toolbox: { number: '05', label: 'Tools' },
    contact: { number: '06', label: 'Contact' },
  },

  positioning: {
    title: 'Engineering × Product × Business',
    intro:
      'Three skills that only matter together. Each one is anchored here to a real project, not to an adjective.',
    proofLabel: 'Evidence',
  },

  studio: {
    label: 'Studio',
    name: 'Nexya Agency',
    description:
      'An independent product studio, co-founded in July 2025. It is the frame in which three of these products were designed, built and presented.',
    futureLabel: 'Products to come',
  },

  selection: {
    title: 'Selected work',
    intro:
      'A small number of projects, told in full: the problem, the decisions, the real outcome and what does not work yet.',
    columns: {
      project: 'Project',
      year: 'Year',
      role: 'Role',
      status: 'Status',
    },
    readCase: 'Read the case study',
    noCase: 'No dedicated case study',
    otherWork: 'Other work',
  },

  stage: {
    live: 'Live',
    prototype: 'Prototype',
    demonstrator: 'Demonstrator',
    archived: 'Completed',
  },

  code: {
    public: 'Public code',
    private: 'Private code',
    none: 'No public repository',
    privateNote: 'Private repository — access available on request.',
  },

  caseStudy: {
    backToSelection: 'Back to selected work',
    overview: 'At a glance',
    problem: 'The problem',
    audience: 'Who it is for',
    value: 'Value proposition',
    product: 'The product',
    role: 'My role',
    collaboration: 'Collaboration',
    decisions: 'Decisions',
    outcome: 'Where the project stands',
    learnings: 'What I took from it',
    limits: 'Limits',
    limitsIntro:
      'What this project does not do, or does not do yet. This section belongs to the case study as much as any other.',
    stack: 'Stack',
    period: 'Period',
    status: 'Status',
    links: 'Links',
    nextProject: 'Next project',
    imagesPending:
      'Product screenshots to come. No interface image is published unless it is a real capture of the product.',
  },

  approach: {
    title: 'How I work',
    intro: 'Four rules I hold myself to. Each one can be checked against the case studies above.',
  },

  experience: {
    title: 'From the shop floor to the product',
    intro:
      'From aviation maintenance to product, keeping the same method: understand the system before trying to change it.',
    educationTitle: 'Education',
    confidentialityNote:
      'No confidential information, internal data or company document appears on this site.',
  },

  toolbox: {
    title: 'What I work with',
    intro:
      'The tools I actually use, grouped by purpose. No skill levels: a percentage next to a technology means nothing.',
    languagesTitle: 'Languages',
  },

  contact: {
    title: 'Let us talk',
    intro:
      'I am looking for an internship where engineering meets commerce: pre-sales, sales engineering, product or technical business development.',
    emailLabel: 'Email',
    copyEmail: 'Copy address',
    emailCopied: 'Address copied',
    copyFailed: 'Copy failed — please select the address manually',
    cvLabel: 'Résumé',
    cvDownload: 'Download résumé (PDF)',
    locationLabel: 'Location',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    githubNote:
      'Most of my recent repositories are private. What you can open is flagged project by project.',
  },

  footer: {
    builtWith:
      'Built with Astro, no client-side framework. Deployed to GitHub Pages through GitHub Actions.',
    sourceCode: 'Source code of this site',
    rights: 'All rights reserved.',
    lastUpdated: 'Last updated',
  },

  notFound: {
    code: '404',
    title: 'This page does not exist',
    body: 'The link may be old, or the address may contain a typo. Here are the pages that do exist.',
    backHome: 'Back to home',
  },
};
