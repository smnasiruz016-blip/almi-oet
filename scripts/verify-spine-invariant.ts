// The entity-spine invariant: refactoring how a UK corridor is BUILT must not
// change what it IS.
//
//   npx tsx scripts/verify-spine-invariant.ts
//
// Corridors used to be parsed straight out of the batch into ten self-contained
// records. They are now composed as origin × destination, so a second
// destination can reuse origins instead of duplicating them. That change adds a
// capability; it must not move a single field of the ten pages that already
// exist.
//
// So this parses the SAME JSON a second time, the old way, and deep-compares.
// Not "the rendered HTML looked the same" — field by field, in order, including
// the ones no page currently renders, because the next page type will render
// them and a silent drop would surface there instead of here.
//
// Wired into gate:all, so the invariant is enforced by the build rather than
// remembered by whoever last touched it.

import RAW from "../src/lib/oet-seo/corridors.json";
import { CORRIDORS } from "../src/lib/oet-seo/corridors";
import type { Corridor } from "../src/lib/journey/types";

type RawFact = Record<string, unknown> & { value?: string };
type RawCorridor = Record<string, unknown> & {
  slug: string;
  originCountry: string;
  originRegulator: RawFact;
  verificationRoute: RawFact;
  attestationChain?: RawFact;
  feesTimeline?: RawFact;
  verificationEligibilityFeesTimeline?: RawFact;
  englishRoute?: RawFact;
  localSearchWording?: string[];
  lastVerified: string;
  verifyStatus?: string;
};
const DATA = RAW as unknown as {
  sharedDestination: { country: string };
  corridors: RawCorridor[];
};

// The pre-refactor parse, reproduced verbatim. Deliberately duplicated rather
// than imported: a reference implementation that shares code with the thing it
// checks proves only that the code equals itself.
function fact(f: RawFact | undefined) {
  if (!f?.value) return undefined;
  const sources = (f.sources as { url?: string; name?: string; confidence?: string; note?: string }[] | undefined)?.map(
    (x) => ({ url: x.url, name: x.name, confidence: x.confidence, note: x.note }),
  );
  const primary = sources?.find((x) => x.confidence === "official") ?? sources?.[0];
  return {
    value: f.value,
    sourceUrl: (f.sourceUrl as string | undefined) ?? primary?.url,
    sourceName: (f.sourceName as string | undefined) ?? primary?.name,
    confidence: (f.confidence as string | undefined) ?? primary?.confidence,
    sources,
    corroborated: f.corroborated,
    asOf: f.asOf,
    verifyStatus: f.verifyStatus,
    note: f.note,
  };
}
function shortRegulatorName(value: string): string | null {
  const abbrev = value.match(/^(.{3,80}?\(([A-Z][A-Za-z0-9&.\s]{0,28})\))/);
  if (abbrev && abbrev[2].trim().split(/\s+/).length <= 3) return abbrev[1].trim();
  const lead = value.split(/(?:\s+—\s+|\.\s+|,\s+)/)[0].trim();
  const looksLikeSentence = /\b(is|are|was|regulated|comprises|consists|means)\b/i.test(lead);
  if (!lead || looksLikeSentence || lead.split(/\s+/).length > 9) return null;
  return lead;
}

const before = DATA.corridors.map((c) => {
  const [occupationSlug, originSlug, destinationSlug] = c.slug.split("__");
  const originRegulator = fact(c.originRegulator)!;
  return {
    slug: c.slug,
    occupationSlug,
    originSlug,
    destinationSlug,
    originCountry: c.originCountry,
    destinationCountry: DATA.sharedDestination.country,
    originRegulator,
    originRegulatorName:
      shortRegulatorName(originRegulator.value) ?? `${c.originCountry}'s nursing regulator`,
    verificationRoute: fact(c.verificationRoute)!,
    attestationChain: fact(c.attestationChain),
    feesTimeline: fact(c.feesTimeline ?? c.verificationEligibilityFeesTimeline),
    englishRoute: fact(c.englishRoute),
    originDistinctSummary: (c as { originDistinctSummary?: string }).originDistinctSummary,
    localSearchWording: c.localSearchWording,
    lastVerified: c.lastVerified,
    verifyStatus: c.verifyStatus,
  };
});

const after = [...CORRIDORS] as Corridor[];
const norm = (x: unknown) => JSON.stringify(x, Object.keys(x as object).sort());
const failures: string[] = [];

if (before.length !== after.length) {
  failures.push(`corridor count ${before.length} -> ${after.length}`);
}
for (const b of before) {
  const a = after.find((x) => x.slug === b.slug);
  if (!a) {
    failures.push(`${b.slug} MISSING after refactor`);
    continue;
  }
  const keys = new Set([...Object.keys(b), ...Object.keys(a)]);
  for (const k of keys) {
    const bv = (b as Record<string, unknown>)[k];
    const av = (a as unknown as Record<string, unknown>)[k];
    if (JSON.stringify(bv) !== JSON.stringify(av)) {
      failures.push(
        `${b.slug}.${k} differs\n      before: ${JSON.stringify(bv)?.slice(0, 160)}\n      after:  ${JSON.stringify(av)?.slice(0, 160)}`,
      );
    }
  }
}
for (const a of after) {
  if (!before.some((b) => b.slug === a.slug)) failures.push(`${a.slug} APPEARED after refactor`);
}
void norm;

console.log(`[spine] ${before.length} UK corridors compared field-by-field`);
if (failures.length) {
  console.error(`[spine] ${failures.length} difference(s):`);
  for (const f of failures.slice(0, 20)) console.error(`   ${f}`);
  console.error("[spine] INVARIANT BROKEN — the refactor changed existing output.");
  process.exit(1);
}
console.log("[spine] identical — the refactor added a capability without moving existing output.");
