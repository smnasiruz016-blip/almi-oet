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
