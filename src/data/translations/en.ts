import type { Dictionary } from './fr';

/**
 * Interface strings, English version.
 * Written, not machine-translated. Must mirror every key in `fr.ts`.
 */
export const en: Dictionary = {
  meta: {
    title: 'Ilyess Assadi — Engineering, product and business',
    description:
      'Engineering student at ESILV and apprentice at Air France Industries. I build decision instruments for people who decide without one: driving schools, local authorities, HR teams, aviation maintenance.',
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
      'Not three skills side by side, but three steps of the same move: find the data, turn it into a decision, defend what it is worth. Each step is anchored to a real project, and it is the same chain every time.',
    proofLabel: 'Evidence',
  },

  studio: {
    label: 'Studio',
    name: 'Nexya Agency',
    description:
      'An independent product studio, co-founded in July 2025. It is the frame in which three of these products were designed, built and taken to real counterparts. Three unrelated markets, one shared blind spot: the daily decision is made blind.',
    futureLabel: 'Products to come',
  },

  selection: {
    title: 'Selected work',
    intro:
      'A driving school, a local authority, an HR team. Three lines of work with nothing in common, except this: the decision is made every day, on information that already exists but that nobody has made readable. Each project is the same move applied to different ground, and told in full: decisions and limits included.',
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
    intro:
      'Four rules that follow from the rest. When you build the instrument someone else decides with, they are not preferences. Each one can be checked against the case studies above.',
  },

  experience: {
    title: 'From the shop floor to the product',
    intro:
      'The shop floor is where I first saw the problem: technical data sitting right there, and a decision made without it. Everything I have built since comes from that.',
    educationTitle: 'Education',
    confidentialityNote:
      'No confidential information, internal data or company document appears on this site.',
  },

  toolbox: {
    title: 'What I work with',
    intro:
      'The tools I actually use, grouped by purpose: find the data, turn it into a screen, defend what it is worth. No skill levels, because a percentage next to a technology means nothing.',
    languagesTitle: 'Languages',
  },

  contact: {
    title: 'Let us talk',
    intro:
      'I am looking for the role where this work is done for real, somewhere it is the actual job: pre-sales, sales engineering, product or technical business development.',
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
