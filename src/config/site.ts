/**
 * Configuration globale du site.
 * Tout ce qui est identité, URL ou contact se modifie ICI et nulle part ailleurs.
 *
 * ⚠️ SITE_URL et BASE_PATH doivent rester synchronisés avec `astro.config.mjs`.
 */

export const GITHUB_USERNAME = 'Ilyess911';

/** Origine publique du site (sans slash final). */
export const SITE_URL = `https://${GITHUB_USERNAME.toLowerCase()}.github.io`;

/** Sous-chemin de déploiement. '/' pour un repo utilisateur, '/nom-du-repo' pour un repo projet. */
export const BASE_PATH = '/';

/** Nom du repository qui héberge ce site. */
export const SITE_REPO = `${GITHUB_USERNAME}.github.io`;

export const CONTACT = {
  /** Adresse professionnelle. Source : CV juillet 2026. */
  email: 'ilyess.assadipro@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ilyess-assadi',
  github: `https://github.com/${GITHUB_USERNAME}`,
  location: { fr: 'Paris, France', en: 'Paris, France' },
} as const;

export const SEO = {
  themeColor: '#15171c',
  ogImage: 'og.png',
  twitterCard: 'summary_large_image',
} as const;

/** Construit une URL absolue à partir d'un chemin relatif au site. */
export function absoluteUrl(path: string): string {
  const base = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${base}${clean}`;
}

/** Construit un chemin interne tenant compte du `base` de déploiement. */
export function withBase(path: string): string {
  const base = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}
