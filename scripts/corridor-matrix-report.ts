// The origin × destination measurement.
//
//   npx tsx scripts/corridor-matrix-report.ts
//
// Reports each destination's corridors on their own, and then the number the
// whole spine rests on: same-origin CROSS-destination overlap. pakistan→UK
// against pakistan→Australia share an origin and differ only in destination. If
// those read as near-duplicates, origin × destination is not a real axis beyond
// the first destination, and the answer is rich per-destination pages plus
// selective corridors rather than an N×M grid.
//
// No verdict is asserted here. The numbers are printed and the reader decides.

import { CORRIDORS, AU_CORRIDORS, destinationFor, destinationGradeConflicts, corridorFaqFor } from "../src/lib/oet-seo/corridors";
import { UK_DELTAS, AU_DELTAS } from "../src/lib/oet-seo/destination-deltas";
import { composeJourney, journeyVerdict } from "../src/lib/journey/compose";
import { GATE, fingerprint, type Composed } from "../src/lib/oet-seo/compose-core";
import type { Corridor, JourneyDestination } from "../src/lib/journey/types";

const conflicts = destinationGradeConflicts();
const auDest: JourneyDestination = {
  regulatorName: AU_DELTAS.regulatorName,
  requirementLine: null,
  sharedStepsHref: `/register/${AU_DELTAS.orgSlug}`,
  sharedStepsSummary: AU_DELTAS.sharedStepsSummary,
  destinationVerifiedOn: "2026-08-06",
};

const comp = new Map<string, Composed>();
for (const c of CORRIDORS) {
  comp.set(c.slug, composeJourney(c, destinationFor(c), "nurses", { conflicts, faqs: corridorFaqFor(c.slug) }));
}
for (const c of AU_CORRIDORS) comp.set(c.slug, composeJourney(c, auDest, "nurses", { conflicts }));

const fp = (c: Corridor) => fingerprint(comp.get(c.slug)!.sections, comp.get(c.slug)!.tables);
const pct = (v: number) => `${(v * 100).toFixed(0)}%`;
function ov(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let h = 0;
  for (const g of b) if (a.has(g)) h++;
  let h2 = 0;
  for (const g of a) if (b.has(g)) h2++;
  return Math.max(h / b.size, h2 / a.size);
}

function block(list: readonly Corridor[], label: string) {
  console.log(`\n=== ${label} ===`);
  console.log(`gate: uniqueWords >= ${GATE.uniqueWords} · facts >= ${GATE.facts} · overlap <= ${GATE.siblingOverlap * 100}%`);
  for (const c of list) {
    const r = comp.get(c.slug)!;
    const v = journeyVerdict(c, { conflicts });
    const thin = r.uniqueWords < GATE.uniqueWords ? ` uniqueWords ${r.uniqueWords}<${GATE.uniqueWords}` : "";
    console.log(
      `  ${c.originSlug.padEnd(12)} uniqueWords=${String(r.uniqueWords).padStart(4)} facts=${String(r.facts).padStart(2)} indexable=${v.indexable ? "YES" : "no "}${thin}${v.blockers.length ? " :: " + v.blockers.join(" · ") : ""}`,
    );
  }
  const vals: { a: string; b: string; v: number }[] = [];
  for (let i = 0; i < list.length; i += 1)
    for (let j = i + 1; j < list.length; j += 1)
      vals.push({ a: list[i].originSlug, b: list[j].originSlug, v: ov(fp(list[i]), fp(list[j])) });
  vals.sort((x, y) => y.v - x.v);
  const med = vals[Math.floor(vals.length / 2)].v;
  console.log(
    `  PAIRWISE (${vals.length} pairs): min ${pct(vals[vals.length - 1].v)} · median ${pct(med)} · max ${pct(vals[0].v)} · over gate ${vals.filter((x) => x.v > GATE.siblingOverlap).length}`,
  );
  for (const x of vals.slice(0, 3)) console.log(`     worst: ${x.a} vs ${x.b} ${pct(x.v)}`);
  return vals;
}

block(CORRIDORS, `UNITED KINGDOM — ${UK_DELTAS.regulatorName}`);
block(AU_CORRIDORS, `AUSTRALIA — ${AU_DELTAS.regulatorName}`);

console.log("\n=== SAME-ORIGIN, CROSS-DESTINATION — the number this rests on ===");
console.log("   (pakistan→UK vs pakistan→Australia: same origin, different destination)");
const cross: number[] = [];
for (const uk of CORRIDORS) {
  const au = AU_CORRIDORS.find((x) => x.originSlug === uk.originSlug);
  if (!au) continue;
  const v = ov(fp(uk), fp(au));
  cross.push(v);
  console.log(`  ${uk.originSlug.padEnd(12)} UK vs AU  ${pct(v).padStart(4)}  ${v > GATE.siblingOverlap ? "OVER GATE" : "under"}`);
}
cross.sort((a, b) => a - b);
console.log(
  `  min ${pct(cross[0])} · median ${pct(cross[Math.floor(cross.length / 2)])} · max ${pct(cross[cross.length - 1])} · over gate ${cross.filter((v) => v > GATE.siblingOverlap).length}/${cross.length}`,
);

console.log("\n=== ALL 20 TOGETHER ===");
const all = [...CORRIDORS, ...AU_CORRIDORS];
const allVals: number[] = [];
for (let i = 0; i < all.length; i += 1)
  for (let j = i + 1; j < all.length; j += 1) allVals.push(ov(fp(all[i]), fp(all[j])));
allVals.sort((a, b) => a - b);
console.log(
  `  ${allVals.length} pairs: min ${pct(allVals[0])} · median ${pct(allVals[Math.floor(allVals.length / 2)])} · max ${pct(allVals[allVals.length - 1])} · over gate ${allVals.filter((v) => v > GATE.siblingOverlap).length}`,
);
