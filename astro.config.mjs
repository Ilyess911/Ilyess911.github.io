// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * DÉPLOIEMENT — un seul endroit à modifier.
 *
 * Repository utilisateur (cas actuel) : `Ilyess911.github.io`
 *   → SITE = 'https://ilyess911.github.io', BASE = '/'
 *
 * Repository projet (ex. `portfolio`) :
 *   → SITE = 'https://ilyess911.github.io', BASE = '/portfolio'
 *
 * Domaine personnalisé (ex. ilyessassadi.com) :
 *   → SITE = 'https://ilyessassadi.com', BASE = '/'
 *     et ajouter `public/CNAME` contenant le domaine.
 *
 * La même valeur doit être reportée dans `src/config/site.ts` (SITE_URL / BASE_PATH).
 */
/** @type {string} */
const SITE = 'https://ilyess911.github.io';
/** @type {string} */
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US' },
      },
      filter: (page) => !page.includes('/404'),
      /**
       * Les segments d'URL sont traduits (`/projets/` en français, `/en/work/`
       * en anglais), ce que la détection automatique ne sait pas apparier.
       * On rétablit donc les alternances de langue pour les études de cas.
       */
      serialize(item) {
        const fr = item.url.match(/\/projets\/([^/]+)\/?$/);
        const en = item.url.match(/\/en\/work\/([^/]+)\/?$/);
        const slug = fr?.[1] ?? en?.[1];
        if (!slug) return item;

        const origin = SITE.replace(/\/$/, '');
        const prefix = BASE === '/' ? '' : BASE.replace(/\/$/, '');
        return {
          ...item,
          links: [
            { lang: 'fr-FR', url: `${origin}${prefix}/projets/${slug}/` },
            { lang: 'en-US', url: `${origin}${prefix}/en/work/${slug}/` },
          ],
        };
      },
    }),
  ],
});
