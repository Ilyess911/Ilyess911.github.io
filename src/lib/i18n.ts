import { fr, type Dictionary } from '~/data/translations/fr';
import { en } from '~/data/translations/en';
import { LOCALES, type I18n, type Locale } from '~/data/types';
import { withBase } from '~/config/site';

export { LOCALES };
export type { Locale, Dictionary };

const DICTIONARIES: Readonly<Record<Locale, Dictionary>> = { fr, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

/** Résout une valeur bilingue dans la langue courante. */
export function t<T>(value: I18n<T>, locale: Locale): T {
  return value[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}

/**
 * Table de routes. Le français est la langue par défaut et n'a pas de préfixe ;
 * l'anglais vit sous /en/. Les segments sont traduits, pas seulement préfixés.
 */
const ROUTES = {
  home: { fr: '/', en: '/en/' },
  caseStudy: { fr: '/projets/', en: '/en/work/' },
} as const;

/** URL de la page d'accueil dans une langue donnée. */
export function homePath(locale: Locale): string {
  return withBase(ROUTES.home[locale]);
}

/** URL d'une étude de cas dans une langue donnée. */
export function caseStudyPath(locale: Locale, slug: string): string {
  return withBase(`${ROUTES.caseStudy[locale]}${slug}/`);
}

/** Chemin brut (sans base) utilisé pour les balises `hreflang`. */
export function rawHomePath(locale: Locale): string {
  return ROUTES.home[locale];
}

export function rawCaseStudyPath(locale: Locale, slug: string): string {
  return `${ROUTES.caseStudy[locale]}${slug}/`;
}

/** Ancres de navigation interne, communes aux deux langues. */
export const ANCHORS = {
  selection: 'selection',
  approach: 'approach',
  experience: 'experience',
  contact: 'contact',
} as const;

/**
 * Construit un lien de navigation vers une ancre.
 * Depuis une page d'étude de cas, on renvoie vers l'accueil de la même langue.
 */
export function anchorHref(locale: Locale, anchor: string, onHome: boolean): string {
  return onHome ? `#${anchor}` : `${homePath(locale)}#${anchor}`;
}
