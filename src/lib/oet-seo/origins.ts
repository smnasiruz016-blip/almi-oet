// Origin layer for the OET SEO surface: ~191 countries a healthcare professional
// might be applying FROM. The list is the shared AlmiWorld origin set (slug +
// name). The angle is OET-specific (registration-abroad framing), generated from
// the origin name so each page leads with its own honest line — no fabricated
// per-country facts.

import RAW from "./origins-raw.json";

export type OetOrigin = { slug: string; name: string };

export const OET_ORIGINS: readonly OetOrigin[] = (RAW as { slug: string; name: string }[]).map(
  (o) => ({ slug: o.slug, name: o.name }),
);

const _bySlug = new Map<string, OetOrigin>(OET_ORIGINS.map((o) => [o.slug, o]));

export const OET_ORIGIN_SLUGS: string[] = OET_ORIGINS.map((o) => o.slug);

export function findOrigin(slug: string): OetOrigin | undefined {
  return _bySlug.get(slug);
}
export function isOriginValid(slug: string): boolean {
  return _bySlug.has(slug);
}

// A small, deterministic set of honest, registration-focused angles. Picked by a
// stable hash of the slug so each origin reads a little differently without
// inventing country-specific claims.
const ANGLES: ((name: string) => string)[] = [
  (n) => `Healthcare professionals applying from ${n} usually need to prove their English separately from their qualifications. OET is built for exactly that — clinical communication, not general academic English.`,
  (n) => `If you trained in ${n} and are registering abroad, the English requirement is set by the regulator, not the visa office. Practise the real OET sub-tests and confirm the exact grade with the organisation below.`,
  (n) => `Coming from ${n}, your professional registration and your visa are two separate steps. OET evidence supports registration; check the grade each organisation asks for before you sit the test.`,
  (n) => `Many clinicians from ${n} sit OET because it mirrors real consultations and letters. Use honest practice estimates to see where you stand, then verify the requirement with your regulator.`,
];

export function originAngle(origin: OetOrigin): string {
  let h = 0;
  for (let i = 0; i < origin.slug.length; i++) h = (h * 31 + origin.slug.charCodeAt(i)) >>> 0;
  return ANGLES[h % ANGLES.length](origin.name);
}
