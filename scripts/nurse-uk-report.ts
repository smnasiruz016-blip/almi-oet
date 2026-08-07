// The nationality-first batch, measured.
//
//   npx tsx scripts/nurse-uk-report.ts
//
// 15 pages at /nurse/{nationality}/uk. The claim being checked is that they are
// distinct BY CONSTRUCTION — local currency, local test centres, a national
// migration statistic and a nationality angle, plus ~16 Q&A pairs written per
// nationality — rather than distinct because of how they were composed.

import { GATE, gate, fingerprint } from "../src/lib/oet-seo/compose-core";
import { composeAllNurseUk } from "../src/lib/oet-seo/nurse-uk-compose";

const pages = composeAllNurseUk();
const ordered = [...pages].sort(
  (a, b) => b.facts - a.facts || b.uniqueWords - a.uniqueWords || a.path.localeCompare(b.path),
);

const seen: Set<string>[] = [];
const cleared: typeof pages = [];
const failed: string[] = [];
for (const p of ordered) {
  const g = gate(p, seen);
  if (g.pass) {
    cleared.push(p);
    seen.push(fingerprint(p.sections, p.tables));
  } else failed.push(`${p.path} :: ${g.reasons.join(" | ")}`);
}

const words = pages.map((p) => p.uniqueWords).sort((a, b) => a - b);
const pct = (v: number) => `${(v * 100).toFixed(0)}%`;

console.log("=".repeat(74));
console.log("NATIONALITY-FIRST BATCH — /nurse/{nationality}/uk");
console.log("=".repeat(74));
console.log(`gate: uniqueWords >= ${GATE.uniqueWords} · facts >= ${GATE.facts} · siblingOverlap <= ${GATE.siblingOverlap * 100}%`);
console.log(`GENERATED ${pages.length}   CLEARED ${cleared.length}`);
for (const f of failed) console.log(`  FAIL ${f}`);
console.log(`uniqueWords  min ${words[0]} · median ${words[Math.floor(words.length / 2)]} · max ${words[words.length - 1]}`);
console.log(`facts        min ${Math.min(...pages.map((p) => p.facts))} · max ${Math.max(...pages.map((p) => p.facts))}`);
console.log("");

const fps = pages.map((p) => ({ p, fp: fingerprint(p.sections, p.tables) }));
const worst: number[] = [];
console.log("PER PAGE, worst overlap against any sibling");
for (const a of fps) {
  let w = 0;
  let who = "";
  for (const b of fps) {
    if (a.p.path === b.p.path || !a.fp.size) continue;
    let hit = 0;
    for (const g of a.fp) if (b.fp.has(g)) hit += 1;
    if (hit / a.fp.size > w) {
      w = hit / a.fp.size;
      who = b.p.path;
    }
  }
  worst.push(w);
  console.log(
    `  ${a.p.path.padEnd(26)} words=${String(a.p.uniqueWords).padStart(4)} facts=${String(a.p.facts).padStart(2)} worst=${pct(w).padStart(4)} vs ${who}`,
  );
}
const sorted = [...worst].sort((a, b) => a - b);
console.log("");
console.log(
  `CROSS-PAGE OVERLAP  min ${pct(sorted[0])} · median ${pct(sorted[Math.floor(sorted.length / 2)])} · max ${pct(sorted[sorted.length - 1])}   over gate ${worst.filter((v) => v > GATE.siblingOverlap).length}/${worst.length}`,
);

const bad = /‹research›|<research>|[:—]\s*not stated\b|\bis not stated\./i;
const leaks = pages.filter((p) => bad.test(p.sections.flatMap((s) => [s.heading, ...s.paras]).join(" ")));
console.log(`INTEGRITY  pages rendering a placeholder or unsourced value: ${leaks.length}`);
for (const p of leaks) console.log(`  ${p.path}`);
console.log("");
console.log("URLS");
for (const p of cleared) console.log(`  https://almioet.almiworld.com${p.path}`);
