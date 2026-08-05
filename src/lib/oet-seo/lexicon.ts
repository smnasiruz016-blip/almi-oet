// Localized wording: the vocabulary people actually search in each country.
//
// "physical therapist" in the US is "physiotherapist" in the UK; Americans search
// "license", the British "registration". Naming the local credential (NCLEX, NMC,
// AHPRA) matters because that is the string typed into the search box. Every
// value here is data, so a page never invents a term — if the lexicon has no
// entry for a country the page falls back to the neutral default.

import RAW from "./lexicon.json";

type ProfessionTerm = {
  default: string;
  byCountry?: Record<string, string>;
  abbrev?: Record<string, string>;
  searchAlso?: string[];
};
type LocaleConvention = {
  credentialWord: string;
  processWord: string;
  examWord: string;
  spelling?: string;
  notes?: string;
};
type Payload = {
  localeConventions: Record<string, LocaleConvention>;
  professionTerms: Record<string, ProfessionTerm>;
  credentialNames: Record<string, Record<string, string>>;
  searchIntentTemplates: { byProfessionCountry: string[]; [k: string]: unknown };
};

const LEX = RAW as unknown as Payload;

const LOCALE_FOR_CODE: Record<string, string> = {
  US: "en-US",
  GB: "en-GB",
  AU: "en-AU",
  IE: "en-IE",
  NZ: "en-NZ",
  CA: "en-CA",
};

export type Wording = {
  /** Local term for the profession, e.g. "physical therapist" in the US. */
  term: string;
  /** Plural of the local term, for headings. */
  termPlural: string;
  /** "registration" / "license / licensure" — what locals call the credential. */
  credentialWord: string;
  /** "registration" / "credentialing" — what locals call the process. */
  processWord: string;
  /** The named local credential for this profession, e.g. "NMC (CBT + OSCE)". */
  credentialBody: string | null;
  /** Extra search phrasings worth naming in prose. */
  searchAlso: string[];
  /** True when this country uses a different term from the neutral default. */
  isLocalTerm: boolean;
  localeTag: string | null;
};

function plural(term: string): string {
  if (/(s|x|z|ch|sh)$/i.test(term)) return `${term}es`;
  if (/[^aeiou]y$/i.test(term)) return `${term.slice(0, -1)}ies`;
  return `${term}s`;
}

/** Resolve every localized string for one profession in one country. */
export function wordingFor(professionSlug: string, countryCode: string | null): Wording {
  const t = LEX.professionTerms[professionSlug];
  const fallback = professionSlug.replace(/-/g, " ");
  const def = t?.default ?? fallback;
  const local = countryCode ? t?.byCountry?.[countryCode] : undefined;
  const term = local ?? def;
  const locale = countryCode ? LOCALE_FOR_CODE[countryCode] ?? null : null;
  const conv = locale ? LEX.localeConventions[locale] : undefined;
  return {
    term,
    termPlural: plural(term),
    credentialWord: conv?.credentialWord ?? "registration",
    processWord: conv?.processWord ?? "registration",
    credentialBody: countryCode ? LEX.credentialNames[countryCode]?.[professionSlug] ?? null : null,
    searchAlso: t?.searchAlso ?? [],
    isLocalTerm: Boolean(local && local !== def),
    localeTag: locale,
  };
}

/** Search-intent phrasings for a profession × country, with the localized term
 *  substituted. Used for title/H1/meta and for the FAQ questions, so the page is
 *  worded the way the query is typed. */
export function searchIntents(input: {
  professionSlug: string;
  country: string;
  countryCode: string | null;
  credentialBody?: string | null;
}): string[] {
  const w = wordingFor(input.professionSlug, input.countryCode);
  const body = input.credentialBody ?? w.credentialBody ?? "the regulator";
  return (LEX.searchIntentTemplates.byProfessionCountry ?? []).map((tpl) =>
    tpl
      .replace(/\{profession\}/g, w.term)
      .replace(/\{country\}/g, input.country)
      .replace(/\{credentialBody\}/g, body),
  );
}

export function localeConvention(countryCode: string | null) {
  const locale = countryCode ? LOCALE_FOR_CODE[countryCode] : null;
  return locale ? LEX.localeConventions[locale] ?? null : null;
}
