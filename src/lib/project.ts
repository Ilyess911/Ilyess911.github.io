import type { Project } from '~/data/types';
import { caseStudyPath, getDictionary, type Locale } from './i18n';

/** Libellé lisible du statut réel du projet. */
export function stageLabel(project: Project, locale: Locale): string {
  return getDictionary(locale).stage[project.stage];
}

/** Libellé de visibilité du code. Ne produit jamais de lien mort. */
export function codeLabel(project: Project, locale: Locale): string {
  return getDictionary(locale).code[project.codeVisibility];
}

/** Nom affiché : version longue localisée si elle existe, sinon la marque. */
export function projectTitle(project: Project, locale: Locale): string {
  return project.displayName ? project.displayName[locale] : project.name;
}

/**
 * Destination principale d'une ligne de projet.
 * Une étude de cas prime ; à défaut on retombe sur un lien externe réel ;
 * sinon la ligne n'est pas cliquable, plutôt que de pointer vers `#`.
 */
export function primaryHref(
  project: Project,
  locale: Locale,
): { href: string; external: boolean } | null {
  if (project.caseStudy) {
    return { href: caseStudyPath(locale, project.slug), external: false };
  }
  const first = project.links[0];
  if (first) return { href: first.href, external: true };
  return null;
}
