// The UK health invariant, after the v4 recomposition.
//
//   npx tsx scripts/verify-spine-invariant.ts
//
// WHAT THIS USED TO BE, and why it changed. It deep-compared the spine's UK
// corridors against a verbatim re-parse of v3, so a refactor that changed how a
// corridor was BUILT could not change what it WAS. That guard did its job through
// the entity-spine commit.
//
// v4 retires it deliberately: the UK facts that were baked into ten origin
// records now live once at destination level and are joined back on, so the
// prose legitimately differs. Comparing against v3 would fail forever and prove
// nothing.
//
// What replaces it is the invariant that still matters — the UK set must stay
// complete and rich. Ten corridors, each clearing the uniqueWords floor on its
// own. INDEXABILITY is deliberately NOT asserted here: that is the gate's
// verdict, it moves with sibling overlap, and pinning it in a build gate would
// mean a data improvement could not change it without editing this file. G7
// guards indexability against silent drift; this guards coverage and richness.

import { CORRIDORS, destinationFor, destinationGradeConflicts, corridorFaqFor } from "../src/lib/oet-seo/corridors";
import { composeJourney } from "../src/lib/journey/compose";
import { GATE } from "../src/lib/oet-seo/compose-core";

const EXPECTED_ORIGINS = [
  "pakistan", "nigeria", "india", "philippines", "ghana",
  "kenya", "zimbabwe", "egypt", "sri-lanka", "nepal",
];

const conflicts = destinationGradeConflicts();
const failures: string[] = [];

const have = CORRIDORS.map((c) => c.originSlug).sort();
const want = [...EXPECTED_ORIGINS].sort();
if (JSON.stringify(have) !== JSON.stringify(want)) {
  failures.push(`UK corridor set changed: expected ${want.join(",")} got ${have.join(",")}`);
}

let thinnest = Number.POSITIVE_INFINITY;
for (const c of CORRIDORS) {
  const r = composeJourney(c, destinationFor(c), "nurses", { conflicts, faqs: corridorFaqFor(c.slug) });
  thinnest = Math.min(thinnest, r.uniqueWords);
  if (r.uniqueWords < GATE.uniqueWords) {
    failures.push(`${c.originSlug} is thin: ${r.uniqueWords} < ${GATE.uniqueWords} uniqueWords`);
  }
  if (!c.verificationRoute) failures.push(`${c.originSlug} lost its verification route`);
  if (!c.englishRoute) failures.push(`${c.originSlug} lost its English paragraph`);
}

console.log(`[spine] ${CORRIDORS.length} UK corridors · thinnest ${thinnest} uniqueWords (floor ${GATE.uniqueWords})`);
if (failures.length) {
  console.error(`[spine] ${failures.length} problem(s):`);
  for (const f of failures) console.error(`   ${f}`);
  console.error("[spine] UK COVERAGE/RICHNESS INVARIANT BROKEN.");
  process.exit(1);
}
console.log("[spine] UK set complete and every corridor clears the richness floor.");
