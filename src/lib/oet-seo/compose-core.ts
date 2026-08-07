// The quality gate, and only the quality gate.
//
// THIS IS A DELIBERATE SUBSET. On the `oet-pseo-rebuild` branch this file also
// carries `merge()`, grade resolution and the country/entity helpers, and those
// pull in `regulators.ts`, `audit.ts` and a corrected `data.ts` — most of the
// held rebuild, in other words. The nationality-first page type needs none of
// it: it needs a way to measure text and a rule for judging it.
//
// So this branch carries the measuring tape alone, under the same filename and
// exporting the same symbols with the same implementations. `nurse-uk-compose.ts`
// is therefore BYTE-IDENTICAL on both branches, and when the rebuild eventually
// lands this file is simply superseded by its superset rather than conflicting
// with it. The isolation is in what is absent, not in anything rewritten.
//
// The thresholds are the network's, unchanged: 350 unique words, 5 distinct
// facts, no more than 40% of 5-grams shared with a sibling that was accepted
// first.

// ── gate thresholds ─────────────────────────────────────────────────────────
export const GATE = { uniqueWords: 350, facts: 5, siblingOverlap: 0.4 } as const;

export type Section = { id: string; heading: string; paras: string[] };

/** A rendered comparison table. The gate has to measure it: text that ships but
 *  is never measured is exactly how a thin page slips through a green gate, so
 *  the composer hands the table's own text to `measure()` while the renderer
 *  draws it once, as a table. */
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

/** Sourced strings are written by hand and sometimes arrive without a full
 *  stop. Rendering them mid-paragraph then runs two sentences together. */
export function sentence(s: string): string {
  const t = s.trim();
  return /[.!?]$/.test(t) ? t : `${t}.`;
}
