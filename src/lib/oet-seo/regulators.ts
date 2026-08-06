// Enrichment layer: real per-regulator facts (combining rules, validity,
// alternatives, registration context), compiled and sourced by beta-g.
//
// This ENRICHES organisations.json — it does not replace it. organisations.json
// is the base scrape of OET's own recognising-organisations list (610 bodies,
// name/country/grade/website). This file adds the facts that make a page worth
// existing. An org with no entry here keeps its base data and will simply fail
// the quality gate, which is the intended behaviour.
//
// WHO OWNS WHAT (enrichment v2): the BASE owns the grades, the country and the
// professions covered. Enrichment carries none of them, because v1 did and got
// them wrong — it guessed all-B for the New Zealand nursing council, the Oregon
// board and the DHA, and the base record had the real, different figures the
// whole time. Enrichment may only supply `gradeFallback`, and only where the
// base has no published grade at all (uk-hcpc). Enrichment never overrides base.

import RAW from "./regulators.json";
import { orgBySlug } from "./data";

export type RegulatorGrades = { L?: string; R?: string; W?: string; S?: string };

export type CombiningRule = {
  windowMonths?: number;
  halfGradeRule?: string | boolean;
  reducedWriting?: string;
  [k: string]: unknown;
};

export type RegulatorEntity = {
  slug: string;
  /** All optional: the base org record is the source of truth for each of these.
   *  An enrichment entry that omits them is the normal, correct shape. */
  regulator?: string;
  country?: string;
  officialUrl?: string;
  professionsRecognised?: string[];
  grades?: RegulatorGrades;
  /** Used ONLY where the base org publishes no grade at all. Never an override. */
  gradeFallback?: RegulatorGrades;
  combiningRule?: CombiningRule | null;
  validityYears?: number | null;
  alternativeTests?: string[];
  registrationContext?: string;
  professionNotes?: Record<string, string>;
  note?: string;
  source?: string;
  verifyStatus?: "verified" | "verified-base" | "confirm-official" | string;
  lastVerified?: string;
};

type Payload = { _meta?: Record<string, unknown>; regulators: RegulatorEntity[] };

const DATA = RAW as unknown as Payload;

export const REGULATOR_META = DATA._meta ?? {};
export const REGULATORS: readonly RegulatorEntity[] = DATA.regulators ?? [];

/** FINAL RECIPE §4 — "rich AND current, or it doesn't ship". Every page must be
 *  able to state a real date. A per-entity `lastVerified` is the one that
 *  matters, so it wins; the dataset's compile date is the honest fallback. */
export const DATASET_COMPILED: string | null =
  typeof (DATA._meta as { lastCompiled?: unknown } | undefined)?.lastCompiled === "string"
    ? ((DATA._meta as { lastCompiled: string }).lastCompiled)
    : null;

export function verifiedOn(r: RegulatorEntity | undefined): string | null {
  return r?.lastVerified ?? (r ? DATASET_COMPILED : null);
}

const bySlug = new Map(REGULATORS.map((r) => [r.slug, r]));
export function regulatorBySlug(slug: string): RegulatorEntity | undefined {
  return bySlug.get(slug);
}

// ── grades: base wins, always ───────────────────────────────────────────────

const GRADE_KEYS = ["L", "R", "W", "S"] as const;

/** The base org's published grade, in the enrichment's L/R/W/S shape. */
export function baseGrades(slug: string): RegulatorGrades | null {
  const g = orgBySlug(slug)?.grade;
  if (!g) return null;
  const out: RegulatorGrades = {};
  if (g.listening) out.L = g.listening;
  if (g.reading) out.R = g.reading;
  if (g.writing) out.W = g.writing;
  if (g.speaking) out.S = g.speaking;
  return Object.keys(out).length ? out : null;
}

export type ResolvedGrades = {
  grades: RegulatorGrades | null;
  /** "base" | "fallback" — which source the rendered grade came from. */
  origin: "base" | "fallback" | null;
  /** True when enrichment carries a grade that CONTRADICTS a published base
   *  grade. We render the base figure and hold the page out of the index: a
   *  disagreement between two sources is exactly the case where a confident
   *  page is the dangerous one. */
  conflict: boolean;
};

/** Resolve the grade for an org. The base record wins whenever it has one;
 *  `gradeFallback` fills in only where the base is silent. */
export function resolveGrades(slug: string): ResolvedGrades {
  const base = baseGrades(slug);
  const r = regulatorBySlug(slug);
  const enriched = r?.grades ?? r?.gradeFallback ?? null;
  if (base) {
    const conflict = Boolean(
      enriched && GRADE_KEYS.some((k) => enriched[k] && base[k] && enriched[k] !== base[k]),
    );
    return { grades: base, origin: "base", conflict };
  }
  if (enriched) return { grades: enriched, origin: "fallback", conflict: false };
  return { grades: null, origin: null, conflict: false };
}

// ── the currency gate ───────────────────────────────────────────────────────

/** Recipe §4 + design §6: an unconfirmed grade must not be presented as fact.
 *  These pages compose and render, but ship `noindex` and stay out of the
 *  sitemap until the body's own page has been re-read. */
export function isCurrentEnoughToIndex(slugOrEntity: string | RegulatorEntity | undefined): boolean {
  const slug = typeof slugOrEntity === "string" ? slugOrEntity : slugOrEntity?.slug;
  if (!slug) return false;
  const r = regulatorBySlug(slug);
  if (!r) return false;
  // `confirm-official` NO LONGER blocks — law #5 as refined on 2026-08-06.
  //
  // It used to, here and on the corridor axis, and the corridor axis was fixed
  // while this was left behind. The two mean different things and only one is a
  // defect: "sourced from the body, confirm your own case" is a permanent
  // property of registration material and belongs in a caveat, while "we cannot
  // stand behind this as current" belongs in noindex. Holding a page out for the
  // first is punishing it for being careful — which is how the GPhC's page, and
  // the Irish Medical Council's, were being kept out of the index while saying
  // nothing wrong.
  //
  // What still blocks is what the refinement kept: a genuine conflict between
  // the base record and enrichment, and a record with no verification date at
  // all. See lib/journey/currency.ts for the same rule on corridors.
  if (resolveGrades(slug).conflict) return false;
  return Boolean(verifiedOn(r));
}

/** Why a page is held back, for the build report. */
export function notCurrentReason(slug: string): string | null {
  const r = regulatorBySlug(slug);
  if (!r) return "no enrichment entry";
  if (resolveGrades(slug).conflict) return "base/enrichment grade conflict";
  if (!verifiedOn(r)) return "no lastVerified date";
  return null;
}

/** Real name variants, DERIVED from the official name — never guessed.
 *  "Nursing and Midwifery Council (NMC)" yields both the full name and NMC,
 *  which are the two strings people actually search. Recipe §2, organisation axis. */
export function nameVariants(name: string): { full: string; abbrev: string | null; all: string[] } {
  const m = /^(.*?)\s*\(([^)]+)\)\s*$/.exec(name);
  if (m && /^[A-Z][A-Za-z0-9&/+. -]{1,14}$/.test(m[2])) {
    return { full: m[1].trim(), abbrev: m[2].trim(), all: [m[1].trim(), m[2].trim()] };
  }
  return { full: name, abbrev: null, all: [name] };
}

// ── country: read off the base record ───────────────────────────────────────

/** The country of an enriched regulator — from its base org record, with the
 *  enrichment's own value only as a fallback. */
export function regulatorCountry(r: RegulatorEntity): string | null {
  return orgBySlug(r.slug)?.country ?? r.country ?? null;
}

/** Distinct countries that have at least one enriched regulator — the country hubs. */
export const REGULATOR_COUNTRIES: readonly string[] = [
  ...new Set(REGULATORS.map(regulatorCountry).filter((c): c is string => !!c)),
].sort();

export function regulatorsForCountry(country: string): RegulatorEntity[] {
  return REGULATORS.filter((r) => regulatorCountry(r) === country);
}

/** ISO-ish 2-letter code from the slug prefix ("uk-nmc" -> "UK"), used to look up
 *  the lexicon. Falls back to null when the slug carries no country prefix. */
export function countryCodeFromSlug(slug: string): string | null {
  const m = /^([a-z]{2})-/.exec(slug);
  return m ? m[1].toUpperCase() : null;
}

const COUNTRY_TO_CODE: Record<string, string> = {
  "United Kingdom": "GB",
  Australia: "AU",
  Ireland: "IE",
  "New Zealand": "NZ",
  "United States": "US",
  Canada: "CA",
  "United Arab Emirates": "AE",
  Philippines: "PH",
  Malta: "MT",
  Singapore: "SG",
  Namibia: "NA",
};

export function codeForCountry(country: string | null | undefined): string | null {
  if (!country) return null;
  return COUNTRY_TO_CODE[country] ?? null;
}

export function countrySlug(country: string): string {
  return country.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const SLUG_TO_COUNTRY = new Map(REGULATOR_COUNTRIES.map((c) => [countrySlug(c), c]));
export function countryFromSlug(slug: string): string | undefined {
  return SLUG_TO_COUNTRY.get(slug);
}
