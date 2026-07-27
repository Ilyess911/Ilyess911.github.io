import { describe, expect, it } from 'vitest';

import { fr } from '~/data/translations/fr';
import { en } from '~/data/translations/en';
import { PROJECTS, CASE_STUDY_PROJECTS, FEATURED_PROJECTS } from '~/data/projects';
import { EDUCATION, EXPERIENCE } from '~/data/experience';
import { AXES, LANGUAGES, PRINCIPLES, PROFILE, SKILLS } from '~/data/profile';
import { LOCALES, type Locale } from '~/data/types';
import { CONTACT, SITE_URL, absoluteUrl, withBase } from '~/config/site';

/* ---------------------------------------------------------------------------
   Outils
   --------------------------------------------------------------------------- */

/** Aplati un objet en une liste de chemins de clés, pour comparer deux dictionnaires. */
function keyPaths(value: unknown, prefix = ''): string[] {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return [prefix];
  return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
    keyPaths(child, prefix ? `${prefix}.${key}` : key),
  );
}

/** Récupère toutes les chaînes d'un objet, récursivement. */
function allStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(allStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(allStrings);
  return [];
}

const EVERY_STRING = [
  ...allStrings(fr),
  ...allStrings(en),
  ...allStrings(PROJECTS),
  ...allStrings(EXPERIENCE),
  ...allStrings(EDUCATION),
  ...allStrings(PROFILE),
  ...allStrings(PRINCIPLES),
  ...allStrings(AXES),
  ...allStrings(SKILLS),
];

/* ---------------------------------------------------------------------------
   Internationalisation
   --------------------------------------------------------------------------- */

describe('internationalisation', () => {
  it('expose exactement les mêmes clés en français et en anglais', () => {
    expect(keyPaths(en).sort()).toEqual(keyPaths(fr).sort());
  });

  it("ne laisse aucune chaîne d'interface vide", () => {
    for (const dict of [fr, en]) {
      for (const value of allStrings(dict)) {
        expect(value.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('ne recopie pas le français en anglais sur les textes rédigés', () => {
    /* Certaines valeurs sont identiques par nature (noms propres, codes). */
    const identicalByDesign = new Set([
      fr.notFound.code,
      fr.positioning.title,
      fr.studio.name,
      fr.sections.positioning.number,
      fr.sections.selection.number,
      fr.sections.approach.number,
      fr.sections.experience.number,
      fr.sections.toolbox.number,
      fr.sections.contact.number,
      fr.sections.positioning.label,
      fr.sections.contact.label,
    ]);

    const frLong = allStrings(fr).filter((s) => s.length > 24 && !identicalByDesign.has(s));
    const enStrings = new Set(allStrings(en));
    for (const value of frLong) {
      expect(enStrings.has(value), `« ${value.slice(0, 50)}… » n'est pas traduit`).toBe(false);
    }
  });
});

/* ---------------------------------------------------------------------------
   Honnêteté du contenu — ces règles sont le cœur du portfolio
   --------------------------------------------------------------------------- */

describe('honnêteté du contenu', () => {
  it('donne une section « limites » non vide à chaque étude de cas', () => {
    expect(CASE_STUDY_PROJECTS.length).toBeGreaterThan(0);
    for (const project of CASE_STUDY_PROJECTS) {
      expect(project.caseStudy?.limits.length, `${project.slug} sans limites`).toBeGreaterThan(0);
      for (const limit of project.caseStudy?.limits ?? []) {
        for (const locale of LOCALES) {
          expect(limit[locale as Locale].trim().length).toBeGreaterThan(10);
        }
      }
    }
  });

  it("n'affiche jamais de lien vers un dépôt annoncé comme privé", () => {
    for (const project of PROJECTS) {
      if (project.codeVisibility === 'public') {
        expect(project.repo, `${project.slug} est public sans dépôt renseigné`).toBeTruthy();
        continue;
      }
      expect(project.repo, `${project.slug} est privé mais expose un dépôt`).toBeUndefined();
      for (const link of project.links) {
        expect(link.kind, `${project.slug} expose un lien code sur un dépôt privé`).not.toBe(
          'code',
        );
        expect(link.href).not.toContain('github.com/Ilyess911');
      }
    }
  });

  it('ne contient aucun terme de langue de bois', () => {
    /* Vocabulaire qui signale un texte générique ou une promesse invérifiable. */
    const banned = [
      /r[ée]volutionnaire/i,
      /leader du march[ée]/i,
      /passionn[ée]\b/i,
      /\bpassionate\b/i,
      /game[- ]?chang/i,
      /cutting[- ]?edge/i,
      /\bseamless\b/i,
      /state[- ]of[- ]the[- ]art/i,
      /\bsynerg/i,
      /disrupt/i,
      /\bunlock\b/i,
      /\bempower/i,
      /solutions innovantes/i,
      /turning ideas into/i,
      /building the future/i,
      /welcome to my portfolio/i,
    ];

    for (const value of EVERY_STRING) {
      for (const pattern of banned) {
        expect(pattern.test(value), `« ${value.slice(0, 60)}… » contient ${pattern}`).toBe(false);
      }
    }
  });

  it('ne mentionne aucune information à ne pas publier', () => {
    /* Garde-fou permanent : ces termes ne doivent jamais réapparaître dans le contenu. */
    const forbidden = [/kesk.?ia/i, /\bSNDS\b/, /mise en demeure/i, /\bLGM\b/];
    for (const value of EVERY_STRING) {
      for (const pattern of forbidden) {
        expect(pattern.test(value), `« ${value.slice(0, 60)}… » contient ${pattern}`).toBe(false);
      }
    }
  });

  it('nomme la collaboration quand une partie du code vient de quelqu’un d’autre', () => {
    const time2drive = PROJECTS.find((p) => p.slug === 'time2drive');
    expect(time2drive?.caseStudy?.collaboration).toBeDefined();
    for (const locale of LOCALES) {
      expect(time2drive?.caseStudy?.collaboration?.[locale as Locale]).toContain('Adel Bousri');
    }
  });
});

/* ---------------------------------------------------------------------------
   Intégrité des données
   --------------------------------------------------------------------------- */

describe('projets', () => {
  it('a des identifiants uniques et utilisables en URL', () => {
    const slugs = PROJECTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it('remplit les champs obligatoires dans les deux langues', () => {
    for (const project of PROJECTS) {
      for (const locale of LOCALES) {
        const l = locale as Locale;
        expect(project.tagline[l].trim().length, `${project.slug} tagline ${l}`).toBeGreaterThan(
          10,
        );
        expect(project.positioning[l].trim().length).toBeGreaterThan(20);
        expect(project.roleLabel[l].trim().length).toBeGreaterThan(3);
      }
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.year).toMatch(/^\d{4}( — \d{4})?$/);
    }
  });

  it("n'utilise que des liens externes sécurisés et jamais d'ancre vide", () => {
    for (const project of PROJECTS) {
      for (const link of project.links) {
        expect(link.href, `${project.slug}: lien non sécurisé`).toMatch(/^https:\/\//);
        expect(link.href).not.toBe('#');
        for (const locale of LOCALES) {
          expect(link.label[locale as Locale].trim().length).toBeGreaterThan(0);
        }
      }
    }
  });

  it('met en avant au moins trois projets, tous dotés d’une étude de cas', () => {
    expect(FEATURED_PROJECTS.length).toBeGreaterThanOrEqual(3);
    for (const project of FEATURED_PROJECTS) {
      expect(project.caseStudy, `${project.slug} est mis en avant sans étude de cas`).toBeDefined();
    }
  });

  it('décrit chaque visuel avec une alternative textuelle utile', () => {
    for (const project of CASE_STUDY_PROJECTS) {
      for (const image of project.caseStudy?.images ?? []) {
        expect(image.key).toMatch(/^[a-z0-9-]+$/);
        for (const locale of LOCALES) {
          /* Une alternative doit décrire l'écran, pas répéter le nom du projet. */
          expect(image.alt[locale as Locale].length).toBeGreaterThan(40);
        }
      }
    }
  });
});

describe('parcours', () => {
  it('place les postes en cours avant les postes passés, puis du plus récent au plus ancien', () => {
    const work = EXPERIENCE.filter((e) => e.kind === 'work');
    const firstPast = work.findIndex((e) => e.end !== null);

    /* Aucun poste en cours ne doit apparaître après un poste terminé. */
    if (firstPast !== -1) {
      expect(work.slice(firstPast).every((e) => e.end !== null)).toBe(true);
    }

    const pastStarts = work.filter((e) => e.end !== null).map((e) => e.start);
    expect([...pastStarts].sort().reverse()).toEqual(pastStarts);
  });

  it('renvoie les expériences hors poste salarié en fin de liste', () => {
    const kinds = EXPERIENCE.map((e) => e.kind);
    const lastWork = kinds.lastIndexOf('work');
    expect(kinds.slice(0, lastWork + 1).every((k) => k === 'work')).toBe(true);
  });

  it('utilise des dates au format AAAA-MM et cohérentes', () => {
    for (const item of [...EXPERIENCE, ...EDUCATION]) {
      expect(item.start).toMatch(/^\d{4}-\d{2}$/);
      if (item.end !== null) {
        expect(item.end).toMatch(/^\d{4}-\d{2}$/);
        expect(item.end >= item.start, `${item.org}: fin avant début`).toBe(true);
      }
    }
  });

  it('mentionne explicitement la règle de confidentialité pour Air France Industries', () => {
    const afi = EXPERIENCE.find((e) => e.org === 'Air France Industries');
    expect(afi).toBeDefined();
    const text = allStrings(afi).join(' ');
    expect(text).toMatch(/aucun d[ée]tail op[ée]rationnel/i);
  });
});

/* ---------------------------------------------------------------------------
   Configuration et URL
   --------------------------------------------------------------------------- */

describe('configuration du site', () => {
  it('centralise un contact valide', () => {
    expect(CONTACT.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i);
    expect(CONTACT.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\/in\//);
    expect(CONTACT.github).toMatch(/^https:\/\/github\.com\//);
  });

  it('construit des URL absolues sans double slash', () => {
    expect(absoluteUrl('/')).toBe(`${SITE_URL}/`);
    expect(absoluteUrl('/projets/time2drive/')).toBe(`${SITE_URL}/projets/time2drive/`);
    expect(absoluteUrl('/')).not.toMatch(/\/\/$/);
  });

  it('préfixe les chemins internes par le base path', () => {
    expect(withBase('/')).toBe('/');
    expect(withBase('/en/')).toBe('/en/');
  });

  it('déclare un profil complet et des axes rattachés à de vrais projets', () => {
    const slugs = new Set(PROJECTS.map((p) => p.slug));
    for (const axis of AXES) {
      expect(slugs.has(axis.project), `axe ${axis.key} pointe vers un projet inconnu`).toBe(true);
    }
    expect(PRINCIPLES.length).toBeGreaterThanOrEqual(3);
    expect(SKILLS.length).toBeGreaterThanOrEqual(3);
    expect(LANGUAGES.length).toBeGreaterThanOrEqual(2);
    expect(PROFILE.headline.fr.length).toBe(PROFILE.headline.en.length);
  });
});
