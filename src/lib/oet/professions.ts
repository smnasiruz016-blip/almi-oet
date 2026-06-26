// The 12 OET professions — the official CBLA / UK NARIC list. This registry is
// the single source of truth for profession metadata across AlmiOET: the
// profession selector, the Writing/Speaking bank queries, mock assembly, and
// (later) the SEO landing pages all read from here. Listening + Reading are
// common to every profession, so they don't appear keyed here.

import type { OetProfession } from "@prisma/client";

export type ProfessionDef = {
  profession: OetProfession;
  slug: string; // URL segment, e.g. "nursing"
  label: string; // display name, e.g. "Nursing"
  // Short, honest one-liner for the selector card. No marketing verbs.
  blurb: string;
  // Whether the per-profession Writing + Speaking banks have seeded content yet.
  // Nursing ships first; the rest follow in content batches. The schema/routes
  // are ready for all 12 regardless.
  contentReady: boolean;
};

export const PROFESSIONS: Record<OetProfession, ProfessionDef> = {
  NURSING: {
    profession: "NURSING",
    slug: "nursing",
    label: "Nursing",
    blurb: "Letters and role-plays set in ward, community and aged-care nursing.",
    contentReady: true,
  },
  MEDICINE: {
    profession: "MEDICINE",
    slug: "medicine",
    label: "Medicine",
    blurb: "Referral and discharge letters and consultations for doctors.",
    contentReady: true,
  },
  DENTISTRY: {
    profession: "DENTISTRY",
    slug: "dentistry",
    label: "Dentistry",
    blurb: "Dental referrals, treatment letters and chair-side role-plays.",
    contentReady: true,
  },
  DIETETICS: {
    profession: "DIETETICS",
    slug: "dietetics",
    label: "Dietetics",
    blurb: "Nutrition advice letters and dietary counselling role-plays.",
    contentReady: true,
  },
  OCCUPATIONAL_THERAPY: {
    profession: "OCCUPATIONAL_THERAPY",
    slug: "occupational-therapy",
    label: "Occupational Therapy",
    blurb: "Functional assessment letters and rehabilitation role-plays.",
    contentReady: true,
  },
  OPTOMETRY: {
    profession: "OPTOMETRY",
    slug: "optometry",
    label: "Optometry",
    blurb: "Eye-care referral letters and patient examination role-plays.",
    contentReady: true,
  },
  PHARMACY: {
    profession: "PHARMACY",
    slug: "pharmacy",
    label: "Pharmacy",
    blurb: "Medication letters and counselling-at-the-counter role-plays.",
    contentReady: true,
  },
  PHYSIOTHERAPY: {
    profession: "PHYSIOTHERAPY",
    slug: "physiotherapy",
    label: "Physiotherapy",
    blurb: "Rehabilitation referral letters and movement-advice role-plays.",
    contentReady: true,
  },
  PODIATRY: {
    profession: "PODIATRY",
    slug: "podiatry",
    label: "Podiatry",
    blurb: "Foot-care referral letters and patient management role-plays.",
    contentReady: true,
  },
  RADIOGRAPHY: {
    profession: "RADIOGRAPHY",
    slug: "radiography",
    label: "Radiography",
    blurb: "Imaging report letters and procedure-explanation role-plays.",
    contentReady: true,
  },
  SPEECH_PATHOLOGY: {
    profession: "SPEECH_PATHOLOGY",
    slug: "speech-pathology",
    label: "Speech Pathology",
    blurb: "Communication assessment letters and therapy role-plays.",
    contentReady: true,
  },
  VETERINARY_SCIENCE: {
    profession: "VETERINARY_SCIENCE",
    slug: "veterinary-science",
    label: "Veterinary Science",
    blurb: "Animal-care referral letters and owner-consultation role-plays.",
    contentReady: true,
  },
};

export const PROFESSION_LIST: readonly ProfessionDef[] = Object.values(PROFESSIONS);

export function professionBySlug(slug: string): ProfessionDef | undefined {
  return PROFESSION_LIST.find((p) => p.slug === slug);
}

export function professionLabel(profession: OetProfession): string {
  return PROFESSIONS[profession].label;
}
