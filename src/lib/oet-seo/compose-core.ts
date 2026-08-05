// Composition primitives shared by every page type.
//
// Extracted from compose.ts when the matrix page types (country×profession,
// profession-by-country, the ranking) arrived. They need the same measuring
// tape and the same gate as the per-organisation pages, but compose.ts owns
// `emitted()`, which has to know about them — so a composer that imported
// compose.ts would close a cycle. Everything genuinely shared lives here, both
// sides import it, and the dependency runs one way:
//
//   compose-core  ←  compose-matrix  ←  compose  (emitted)
//
// Nothing in this file knows what a page IS. It knows how to measure text, how
// to judge it, and how to state a grade — the vocabulary, not the sentences.

import { orgBySlug, professionLabelToSlug, type SeoOrg } from "./data";
import { codeForCountry, regulatorBySlug, resolveGrades, type RegulatorEntity } from "./regulators";

// ── gate thresholds ─────────────────────────────────────────────────────────
export const GATE = { uniqueWords: 350, facts: 5, siblingOverlap: 0.4 } as const;

export type Section = { id: string; heading: string; paras: string[] };

/** A rendered comparison table. The gate has to measure it: on a matrix page the
 *  table IS the distinct material, and text that ships but is never measured is
 *  exactly how a thin page slips through a green gate. So the composer hands the
 *  table's own text to `measure()` while the renderer draws it once, as a table. */
export type Table = {
  id: string;
  caption: string;
  columns: string[];
  rows: string[][];
};

export type Composed = {
  sections: Section[];
  facts: number;
  factList: string[];
  words: number;
  uniqueWords: number;
  overlap: number;
  tables: Table[];
};
export type GateResult = Composed & { pass: boolean; reasons: string[] };

// Boilerplate that appears on every page — excluded from uniqueWords so the gate
// measures what is actually distinctive about this page.
const BOILERPLATE = [
  "registration is not the same as a visa and recognition and required grades change always confirm the current requirement with your regulator or the organisation before you rely on it",
  "practise the real oet sub tests honest grades per sub test on the 0 500 scale graded on clinical communication never on your accent",
  "all content is original to almioet we never copy or reproduce oet test material scores are practice estimates not official occupational english test results",
  "25 of what the family earns goes to the shamool foundation which provides free education and daily meals to underprivileged children in lahore pakistan",
];
const BOILER_WORDS = new Set(BOILERPLATE.join(" ").split(/\s+/));

export function words(s: string): string[] {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
}
export function ngrams(ws: string[], n = 5): Set<string> {
  const out = new Set<string>();
  for (let i = 0; i + n <= ws.length; i += 1) out.add(ws.slice(i, i + n).join(" "));
  return out;
}

/** Every word the page actually renders — prose and table cells alike. */
function fullText(sections: Section[], tables: Table[]): string {
  return [
    ...sections.flatMap((s) => [s.heading, ...s.paras]),
    ...tables.flatMap((t) => [t.caption, ...t.columns, ...t.rows.flat()]),
  ].join(" ");
}

export function measure(sections: Section[], factList: string[], tables: Table[] = []): Composed {
  const ws = words(fullText(sections, tables));
  const uniq = ws.filter((x) => !BOILER_WORDS.has(x));
  return {
    sections,
    facts: new Set(factList).size,
    factList: [...new Set(factList)],
    words: ws.length,
    uniqueWords: uniq.length,
    overlap: 0,
    tables,
  };
}

// ── the gate ────────────────────────────────────────────────────────────────

/** Max 5-gram overlap against already-accepted siblings of the same type. */
function overlapAgainst(g: Set<string>, seen: Set<string>[]): number {
  if (g.size === 0) return 1;
  let worst = 0;
  for (const prev of seen) {
    let hit = 0;
    for (const x of g) if (prev.has(x)) hit += 1;
    worst = Math.max(worst, hit / g.size);
  }
  return worst;
}

export function fingerprint(sections: Section[], tables: Table[] = []): Set<string> {
  return ngrams(words(fullText(sections, tables)));
}

export function gate(c: Composed, seen: Set<string>[]): GateResult {
  const overlap = overlapAgainst(fingerprint(c.sections, c.tables), seen);
  const reasons: string[] = [];
  if (c.uniqueWords < GATE.uniqueWords) reasons.push(`uniqueWords ${c.uniqueWords} < ${GATE.uniqueWords}`);
  if (c.facts < GATE.facts) reasons.push(`facts ${c.facts} < ${GATE.facts}`);
  if (overlap > GATE.siblingOverlap) reasons.push(`siblingOverlap ${(overlap * 100).toFixed(0)}% > ${GATE.siblingOverlap * 100}%`);
  return { ...c, overlap, pass: reasons.length === 0, reasons };
}

/** Sibling overlap is decided against whoever was accepted FIRST, so the order
 *  candidates are considered in decides which of two similar pages survives.
 *  Source order is the order of OET's scrape, which means an arbitrary body can
 *  claim the ground and knock out the NMC or AHPRA — the two most-searched
 *  regulators on the surface. Richest first instead: the page carrying the most
 *  distinct material wins its cluster, and the derivative one is the one cut.
 *  Ties break on slug so the emitted set is identical on every build. */
export function richestFirst<T>(
  items: T[],
  key: (t: T) => string,
  measured: Map<string, Composed | null>,
): T[] {
  const rank = (t: T) => measured.get(key(t)) ?? null;
  return [...items].sort((a, b) => {
    const ma = rank(a);
    const mb = rank(b);
    const byFacts = (mb?.facts ?? -1) - (ma?.facts ?? -1);
    if (byFacts !== 0) return byFacts;
    const byWords = (mb?.uniqueWords ?? -1) - (ma?.uniqueWords ?? -1);
    if (byWords !== 0) return byWords;
    return key(a).localeCompare(key(b));
  });
}

/** The same idea, ranked on VOLUME of distinct material rather than on how many
 *  kinds of fact a page happens to carry.
 *
 *  Fact-count is a good proxy for richness on a per-organisation page, where one
 *  body yields one of each fact. It is a bad proxy on an aggregate page, where
 *  the material scales with the number of bodies but the fact TYPES do not: the
 *  United States nursing page carries 41 boards and 1,158 words of distinct
 *  content under 12 fact types, while the US medicine page carries 7 bodies and
 *  722 words under 15. Ranked on fact types the medicine page claims the cluster
 *  and knocks out the nursing page — the single most useful page on the surface
 *  losing to a thinner one on a technicality of counting. Ranked on material, the
 *  page that actually dissolves the biggest cluster wins it, which is the whole
 *  point of ordering richest-first. */
export function largestFirst<T>(
  items: T[],
  key: (t: T) => string,
  measured: Map<string, Composed | null>,
): T[] {
  const rank = (t: T) => measured.get(key(t)) ?? null;
  return [...items].sort((a, b) => {
    const ma = rank(a);
    const mb = rank(b);
    const byWords = (mb?.uniqueWords ?? -1) - (ma?.uniqueWords ?? -1);
    if (byWords !== 0) return byWords;
    const byFacts = (mb?.facts ?? -1) - (ma?.facts ?? -1);
    if (byFacts !== 0) return byFacts;
    return key(a).localeCompare(key(b));
  });
}

// ── stating a grade, and naming a country ───────────────────────────────────

export const GRADE_LABEL: Record<string, string> = {
  L: "Listening",
  R: "Reading",
  W: "Writing",
  S: "Speaking",
};

/** "the United Kingdom", but "Australia". Country names arrive bare from the
 *  base record, and "registration in United Kingdom" was appearing on the two
 *  biggest destination surfaces we have. */
const NEEDS_ARTICLE = /^(United |Netherlands|Philippines|Bahamas|Maldives|Gambia|Czech )/;
export function inCountry(country: string | null): string {
  if (!country) return "";
  return NEEDS_ARTICLE.test(country) ? `the ${country}` : country;
}

/** Sourced strings are written by hand and sometimes arrive without a full
 *  stop. Rendering them mid-paragraph then runs two sentences together. */
export function sentence(s: string): string {
  const t = s.trim();
  return /[.!?]$/.test(t) ? t : `${t}.`;
}

export function gradesSentence(g: { L?: string; R?: string; W?: string; S?: string } | null): string | null {
  if (!g) return null;
  const parts = (["L", "R", "W", "S"] as const)
    .map((k) => (g[k] ? `${GRADE_LABEL[k]} ${g[k]}` : null))
    .filter(Boolean);
  return parts.length ? parts.join(", ") : null;
}

// ── the merged entity ───────────────────────────────────────────────────────

export type Merged = {
  org: SeoOrg;
  reg: RegulatorEntity | undefined;
  grades: ReturnType<typeof resolveGrades>;
  country: string | null;
  countryCode: string | null;
  professionSlugs: string[];
};

export function merge(orgSlug: string): Merged | null {
  const org = orgBySlug(orgSlug);
  if (!org) return null;
  const reg = regulatorBySlug(orgSlug);
  // Base first for country too: enrichment v2 carries no country field at all.
  const country = org.country ?? reg?.country ?? null;
  return {
    org,
    reg,
    grades: resolveGrades(orgSlug),
    country,
    countryCode: codeForCountry(country),
    professionSlugs: org.professions.map(professionLabelToSlug).filter((s): s is string => !!s),
  };
}
