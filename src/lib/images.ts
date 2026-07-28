import type { ImageMetadata } from 'astro';

import time2driveCockpit from '~/assets/projects/time2drive-cockpit.png';
import time2driveLanding from '~/assets/projects/time2drive-landing.png';
import atlasToday from '~/assets/projects/atlas-today.png';
import atlasDetail from '~/assets/projects/atlas-detail.png';
import atlasAgenda from '~/assets/projects/atlas-agenda.png';
import time2driveLanes from '~/assets/projects/time2drive-lanes.png';
import time2driveTriage from '~/assets/projects/time2drive-triage.png';
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
  'atlas-today': atlasToday,
  /* Recadrages de captures réelles, pas des visuels fabriqués : le fragment du
     hero et la bande de couloirs sont découpés dans les deux captures ci-dessus. */
  'atlas-detail': atlasDetail,
  'time2drive-lanes': time2driveLanes,
  /* Recadrage pensé pour le mobile : le panneau de décision, lisible à 340 px,
     là où le tableau de bord entier n'est plus qu'un aplat gris. */
  'time2drive-triage': time2driveTriage,
  'atlas-agenda': atlasAgenda,
  /* Conservées bien que le projet soit hors périmètre : les retirer ferait perdre
     des captures réelles difficiles à reproduire. Voir `hidden` dans projects.ts. */
  'medical-ia-territory': medicalIaTerritory,
  'medical-ia-score': medicalIaScore,
} satisfies Record<string, ImageMetadata>;

export type ProjectImageKey = keyof typeof PROJECT_IMAGES;

export function getProjectImage(key: string): ImageMetadata | undefined {
  return (PROJECT_IMAGES as Record<string, ImageMetadata>)[key];
}
