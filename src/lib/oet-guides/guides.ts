// The OET guides published under /guides (owner GREEN, 16 Oct 2026). Each page is a static file the
// AlmiVisibility engine built and published — public/guides/<slug>.html — and is served at
// /guides/<slug> by a rewrite in next.config.ts. Listed one by one: no other address under /guides,
// and no existing route, changes.
export const GUIDE_SLUGS = [
  "oet-pakistan",
  "oet-for-speech-therapist",
  "oet-for-dentists",
  "oet-for-dietitians",
  "oet-for-doctors",
  "oet-for-occupational-therapists",
  "oet-for-optometrists",
  "oet-for-pharmacists",
  "oet-for-physiotherapists",
  "oet-for-podiatrists",
  "oet-for-radiographers",
  "oet-for-veterinarians",
] as const;

export const GUIDES_PATH = "/guides";
