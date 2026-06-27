// OET SEO dataset: the 610 recognising organisations from OET's own official
// "Who Recognises OET" list (Algolia index agility_organisation_en_au), cleaned
// and slugged. Every record is real — names are exact, required grades are only
// what OET publishes (null where unpublished). Nothing here is invented.

import ORGS from "./organisations.json";
import { PROFESSIONS, PROFESSION_LIST } from "@/lib/oet/professions";

export type OrgGrade = {
  listening?: string;
  reading?: string;
  writing?: string;
  speaking?: string;
} | null;

export type SeoOrg = {
  id: string;
  name: string;
  slug: string;
  country: string | null;
  countrySlug: string | null;
  type: string | null;
  professions: string[]; // profession LABELS, e.g. "Nursing"
  grade: OrgGrade;
  website: string | null;
};

type Payload = {
  meta: {
    source: string;
    fetchedAt: string;
    total: number;
    gradeReal: number;
    gradeUnknown: number;
    roleCounts: Record<string, number>;
    roleInstances: number;
  };
  organisations: SeoOrg[];
};

const DATA = ORGS as unknown as Payload;
export const OET_SEO_META = DATA.meta;
export const ORGANISATIONS: readonly SeoOrg[] = DATA.organisations;

// ---- profession label <-> slug ----
const LABEL_TO_SLUG = new Map(PROFESSION_LIST.map((p) => [p.label, p.slug]));
const SLUG_TO_LABEL = new Map(PROFESSION_LIST.map((p) => [p.slug, p.label]));
export function professionLabelToSlug(label: string): string | undefined {
  return LABEL_TO_SLUG.get(label);
}
export function professionSlugToLabel(slug: string): string | undefined {
  return SLUG_TO_LABEL.get(slug);
}
export { PROFESSIONS, PROFESSION_LIST };

// ---- indexes ----
const _orgBySlug = new Map<string, SeoOrg>(ORGANISATIONS.map((o) => [o.slug, o]));
export function orgBySlug(slug: string): SeoOrg | undefined {
  return _orgBySlug.get(slug);
}

const _orgsByProfSlug = new Map<string, SeoOrg[]>();
for (const o of ORGANISATIONS) {
  for (const label of o.professions) {
    const s = LABEL_TO_SLUG.get(label);
    if (!s) continue;
    (_orgsByProfSlug.get(s) ?? _orgsByProfSlug.set(s, []).get(s)!).push(o);
  }
}
export function orgsForProfession(professionSlug: string): SeoOrg[] {
  return _orgsByProfSlug.get(professionSlug) ?? [];
}
export function orgCoversProfession(org: SeoOrg, professionSlug: string): boolean {
  const label = SLUG_TO_LABEL.get(professionSlug);
  return !!label && org.professions.includes(label);
}

// ---- the flat role-org pair list that drives the big matrix sitemap ----
// One entry per (profession the org covers, org). Length = roleInstances (1,243).
// Stable order: profession order from PROFESSION_LIST, then org order.
export type RoleOrgPair = { professionSlug: string; orgSlug: string };
export const ROLE_ORG_PAIRS: readonly RoleOrgPair[] = (() => {
  const out: RoleOrgPair[] = [];
  for (const p of PROFESSION_LIST) {
    for (const o of orgsForProfession(p.slug)) out.push({ professionSlug: p.slug, orgSlug: o.slug });
  }
  return out;
})();

// ---- presentation helpers ----
const SUBTESTS: [keyof NonNullable<OrgGrade>, string][] = [
  ["listening", "Listening"],
  ["reading", "Reading"],
  ["writing", "Writing"],
  ["speaking", "Speaking"],
];

/** Honest per-sub-test grade line, or null if OET publishes no grade for this org. */
export function gradeLine(org: SeoOrg): string | null {
  if (!org.grade) return null;
  const parts = SUBTESTS.map(([k, label]) => (org.grade![k] ? `${label} ${org.grade![k]}` : null)).filter(
    Boolean,
  );
  return parts.length ? parts.join(" · ") : null;
}

export function hasRealGrade(org: SeoOrg): boolean {
  return gradeLine(org) !== null;
}

// ---- indexability gate ----
// Every org is real (OET's own list), so an org page and any valid
// profession×origin×org combo is indexable — grade-unknown included (we render
// "confirm with the organisation"). Only structurally invalid combos 404.
export function isOrgIndexable(org: SeoOrg | undefined): boolean {
  return !!org && !!org.name && !!org.slug;
}
