import type { Dictionary } from './fr';

/**
 * Interface strings, English version.
 * Written, not machine-translated. Must mirror every key in `fr.ts`.
 */
export const en: Dictionary = {
  meta: {
    title: 'Ilyess Assadi — Engineering, product and business',
    description:
      'Engineering student at ESILV and apprentice at Air France Industries. I build decision instruments for people who decide without one: driving schools, HR teams, sales teams, aviation maintenance.',
    langLabel: 'English',
    localeTag: 'en-US',
  },

  nav: {
    contactCta: 'Get in touch',
    skipToContent: 'Skip to main content',
    home: 'Home',
    selection: 'Work',
    approach: 'Method',
    experience: 'Background',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    switchLanguage: 'Passer en français',
    switchLanguageShort: 'FR',
  },

  hero: {
    previewStage: 'Prototype',
    targetLabel: 'Looking for',
    targetRole: 'Sales Engineering · Solutions Engineering',
    targetTerms: '3-month internship · from February 2027',
    discipline: 'Engineering × Product × Business',
    portraitAlt: 'Portrait of Ilyess Assadi.',
    statusLabel: 'Looking for',
    nowLabel: 'Right now',
    nowValue:
      'Methods engineering apprentice at Air France Industries, final year at ESILV, on the Business engineering track with EMLV from the 2026 intake.',
    stackLabel: 'Ground',
    previewLabel: 'atlas — today screen',
    projectsLabel: 'Products',
    availabilityLabel: 'Availability',
    primaryCta: 'See my work',
    secondaryCta: 'GitHub',
    tertiaryCta: 'LinkedIn',
    fragmentAlt:
      'Detail of the Atlas Today screen: a list of actions ranked by impact, including a reply draft flagged as machine-generated.',
    fragmentCaption: 'Atlas — Today screen, detail.',
  },

  sections: {
    intro: { number: '01', label: 'About' },
    selection: { number: '02', label: 'Work' },
    experience: { number: '03', label: 'Background' },
    approach: { number: '04', label: 'Method' },
    workshop: { number: '05', label: 'Workshop' },
    contact: { number: '06', label: 'Contact' },
  },

  intro: {
    title: 'About',
  },

  studio: {
    description:
      "Time2Drive and Resum'EYE were designed, built and taken to real counterparts under Nexya Agency, a product studio co-founded in July 2025.",
  },

  selection: {
    exitTitle: 'Does one of these problems look like yours?',
    exitCta: 'Let’s talk',
    title: 'Three fields, one blind spot.',
    readCase: 'Read the case study',
  },

  chapter: {
    role: 'Role',
    builtWith: 'Built with',
    code: 'Code',
    ongoing: 'Still under construction, no case study yet.',
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
    backToSelection: 'Back to work',
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

  method: {
    credoLabel: 'The rule that holds the rest together',
  },

  experience: {
    title: 'From the shop floor to the product',
    intro:
      'The shop floor is where I first saw the problem: technical data sitting right there, and a decision made without it. Everything I have built since comes from that.',
    educationTitle: 'Education',
    more: 'Detail',
    less: 'Collapse',
    confidentialityNote:
      'No confidential information, internal data or company document appears on this site.',
  },

  workshop: {
    title: 'Also on the bench',
    intro:
      'What is actually being built, with its exact status. Where the code is open, the link is verifiable; where it is not, it says so.',
    thisSite: 'This site',
    livePublic: 'Live · Public code',
    languages: 'Languages',
    githubCta: 'See the GitHub profile',
  },

  contact: {
    cta: 'Email me',
    title: 'Let us build something useful.',
    intro:
      'I am looking for the role where this work is done for real, somewhere it is the actual job: pre-sales, sales engineering, product or technical business development.',
    emailLabel: 'Email',
    copyEmail: 'Copy',
    emailCopied: 'Address copied',
    copyFailed: 'Copy failed — please select the address manually',
    cvLabel: 'Résumé',
    cvDownload: 'Download résumé (PDF)',
    locationLabel: 'Location',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
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

  proof: {
    label: 'In the field',
    title: 'Two products, two real sales cycles.',
    f1Label: 'Demo',
    f1: 'Resum’EYE presented live to industry decision makers at Syntec-Ingénierie’s “Café IA”.',
    f2Label: 'B2B cycle',
    f2: 'A months-long relationship with a French engineering group: API integration, GDPR compliance, volume-based pricing.',
    f3Label: 'Outbound',
    f3: 'A calling and emailing campaign to driving schools across the Paris region for Time2Drive.',
    outcome: 'No contract signed to date.',
    lesson: 'A HR buyer’s first objection is not model performance, it is legal liability.',
    lessonSource: 'Resum’EYE — what I took from it',
  },
};
