/** Types du système de contenu. Tout le contenu du site est typé et centralisé. */

export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

/** Une chaîne déclinée dans les deux langues. Aucune traduction automatique. */
export type I18n<T = string> = Readonly<Record<Locale, T>>;

/**
 * Statut de visibilité du code d'un projet.
 * `public`  → un lien vers le repository est affiché.
 * `private` → on affiche « code privé », sans lien mort.
 * `none`    → aucun repository (projet non versionné publiquement).
 */
export type CodeVisibility = 'public' | 'private' | 'none';

/** Où en est réellement le projet. Volontairement sobre : pas de « lancé », pas de « en production ». */
export type ProjectStage =
  | 'live' // quelque chose est accessible publiquement en ligne
  | 'prototype' // fonctionne, non déployé
  | 'demonstrator' // démonstrateur assumé, données non branchées
  | 'archived'; // travail terminé, plus de développement actif

export interface ProjectLink {
  readonly kind: 'demo' | 'code' | 'site';
  readonly label: I18n;
  readonly href: string;
}

export interface ProjectImage {
  /**
   * Clé du registre `src/lib/images.ts`. Les dimensions sont dérivées du fichier
   * par Astro : impossible de déclarer une taille erronée, donc pas de saut de mise en page.
   */
  readonly key: string;
  readonly alt: I18n;
  readonly caption?: I18n;
}

export interface CaseStudyDecision {
  readonly title: I18n;
  /** Le raisonnement, pas la fonctionnalité. C'est ce qui distingue une étude de cas d'une plaquette. */
  readonly body: I18n;
}

export interface CaseStudy {
  readonly problem: I18n;
  readonly audience: I18n;
  readonly valueProposition: I18n;
  readonly product: I18n;
  /** Rôle réel, formulé sans exagération. */
  readonly role: readonly I18n[];
  /** Mention explicite de la collaboration quand le code ne vient pas de moi. */
  readonly collaboration?: I18n;
  readonly decisions: readonly CaseStudyDecision[];
  readonly outcome: I18n;
  readonly learnings: readonly I18n[];
  /** Non négociable : chaque étude de cas énonce ses limites. */
  readonly limits: readonly I18n[];
  readonly images: readonly ProjectImage[];
}

export interface Project {
  readonly slug: string;
  /** Nom court, identique dans les deux langues (marque produit). */
  readonly name: string;
  /** Nom long localisé, utilisé quand le nom est descriptif plutôt qu'une marque. */
  readonly displayName?: I18n;
  readonly tagline: I18n;
  /** Une phrase de positionnement, lisible seule. */
  readonly positioning: I18n;
  readonly year: string;
  readonly stage: ProjectStage;
  readonly roleLabel: I18n;
  readonly stack: readonly string[];
  readonly codeVisibility: CodeVisibility;
  readonly repo?: string;
  readonly links: readonly ProjectLink[];
  /** Mis en avant dans la sélection principale. */
  readonly featured: boolean;
  /** Une étude de cas complète existe (page dédiée). */
  readonly caseStudy?: CaseStudy;
  /** Rattachement au studio. */
  readonly studio?: 'nexya' | null;
  /** Catégorie courte, affichée dans l'index du studio. Deux ou trois mots. */
  readonly category?: I18n;
}

export interface ExperienceItem {
  readonly org: string;
  readonly role: I18n;
  readonly period: I18n;
  readonly start: string;
  readonly end: string | null;
  readonly location: string;
  readonly summary: I18n;
  readonly highlights: readonly I18n[];
  readonly kind: 'work' | 'education' | 'other';
}

export interface SkillGroup {
  readonly label: I18n;
  readonly items: readonly string[];
}

export interface Principle {
  readonly title: I18n;
  readonly body: I18n;
}
