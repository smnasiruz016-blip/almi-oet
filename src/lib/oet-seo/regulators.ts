// Enrichment layer: real per-regulator facts (grades, combining rules, validity,
// alternatives, registration context), compiled and sourced by beta-g.
//
// This ENRICHES organisations.json — it does not replace it. organisations.json
// is the base scrape of OET's own recognising-organisations list (610 bodies,
// name/country/grade/website). This file adds the facts that make a page worth
// existing. An org with no entry here keeps its base data and will simply fail
// the quality gate, which is the intended behaviour.

import RAW from "./regulators.json";

export type RegulatorGrades = { L?: string; R?: string; W?: string; S?: string };

export type CombiningRule = {
  windowMonths?: number;
  halfGradeRule?: string;
  reducedWriting?: string;
  [k: string]: unknown;
};

export type RegulatorEntity = {
  slug: string;
  regulator: string;
  country: string;
  officialUrl: string;
  professionsRecognised: string[];
  grades: RegulatorGrades;
  combiningRule?: CombiningRule | null;
  validityYears?: number | null;
  alternativeTests?: string[];
  registrationContext?: string;
  professionNotes?: Record<string, string>;
  source?: string;
  verifyStatus?: "verified" | "confirm-official" | string;
  lastVerified?: string;
};

type Payload = { _meta?: Record<string, unknown>; regulators: RegulatorEntity[] };

const DATA = RAW as unknown as Payload;

export const REGULATOR_META = DATA._meta ?? {};
export const REGULATORS: readonly RegulatorEntity[] = DATA.regulators ?? [];

/** FINAL RECIPE §4 — "rich AND current, or it doesn't ship". Every page must be
 *  able to state a real date. The dataset carries `lastCompiled` at the top
 *  level but no per-entity `lastVerified` yet, so this is the honest date we can
 *  stamp: when the dataset was compiled. If per-entity dates arrive they take
 *  precedence, because a per-fact date is the one that actually matters. */
export const DATASET_COMPILED: string | null =
  typeof (DATA._meta as { lastCompiled?: unknown } | undefined)?.lastCompiled === "string"
    ? ((DATA._meta as { lastCompiled: string }).lastCompiled)
    : null;

export function verifiedOn(r: RegulatorEntity | undefined): string | null {
  return r?.lastVerified ?? (r ? DATASET_COMPILED : null);
}

/** Recipe §4 + design §6: an unconfirmed grade must not be presented as fact.
 *  These pages compose and render, but ship `noindex` and stay out of the
 *  sitemap until the body's own page has been re-read. */
export function isCurrentEnoughToIndex(r: RegulatorEntity | undefined): boolean {
  if (!r) return false;
  if (r.verifyStatus === "confirm-official") return false;
  return Boolean(verifiedOn(r));
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

const bySlug = new Map(REGULATORS.map((r) => [r.slug, r]));
export function regulatorBySlug(slug: string): RegulatorEntity | undefined {
  return bySlug.get(slug);
}

/** Distinct countries that have at least one enriched regulator — the country hubs. */
export const REGULATOR_COUNTRIES: readonly string[] = [
  ...new Set(REGULATORS.map((r) => r.country)),
].sort();

export function regulatorsForCountry(country: string): RegulatorEntity[] {
  return REGULATORS.filter((r) => r.country === country);
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
