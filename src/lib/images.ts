import type { ImageMetadata } from 'astro';

import time2driveCockpit from '~/assets/projects/time2drive-cockpit.png';
import time2driveLanding from '~/assets/projects/time2drive-landing.png';
import medicalIaTerritory from '~/assets/projects/medical-ia-territory.png';
import medicalIaScore from '~/assets/projects/medical-ia-score.png';

/**
 * Registre des visuels produit.
 *
 * Règle : uniquement des captures réelles des produits. Aucune maquette dessinée
 * pour le portfolio, aucun rendu d'illustration. Si une capture manque, le projet
 * affiche l'état « captures à venir » plutôt qu'une image fabriquée.
 *
 * Astro optimise ces fichiers au build (WebP + srcset) via `astro:assets`.
 */
export const PROJECT_IMAGES = {
  'time2drive-cockpit': time2driveCockpit,
  'time2drive-landing': time2driveLanding,
  'medical-ia-territory': medicalIaTerritory,
  'medical-ia-score': medicalIaScore,
} satisfies Record<string, ImageMetadata>;

export type ProjectImageKey = keyof typeof PROJECT_IMAGES;

export function getProjectImage(key: string): ImageMetadata | undefined {
  return (PROJECT_IMAGES as Record<string, ImageMetadata>)[key];
}
