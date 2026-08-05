// The corridor gate run — Pattern 5's measurement, kept runnable.
//
//   npx tsx scripts/corridor-report.ts
//
// Reports STATE, not a verdict: per-corridor uniqueWords / facts / sibling
// overlap, the pairwise 5-gram overlap between every corridor pair, and the
// ceiling — how much sourced origin material actually exists before any prose is
// written around it. That last number is the one that says whether a shortfall is
// the composer's fault or the dataset's.
//
// No silent caps: every corridor is listed with its reason.

import { CORRIDORS, destinationFor } from "../src/lib/oet-seo/corridors";
import { composeJourney } from "../src/lib/journey/compose";
import { GATE, fingerprint, largestFirst, type Composed } from "../src/lib/oet-seo/compose-core";

const composed = new Map<string, Composed | null>();
const byslug = new Map<string, any>();
for (const c of CORRIDORS) {
  const r = composeJourney(c, destinationFor(c), "nurses");
  composed.set(c.slug, r);
  byslug.set(c.slug, r);
}

console.log("=== PER-CORRIDOR, in gate order (largest material first) ===");
console.log(`gate: uniqueWords >= ${GATE.uniqueWords} · facts >= ${GATE.facts} · overlap <= ${GATE.siblingOverlap * 100}%\n`);
const seen: { k: string; fp: Set<string> }[] = [];
const verdict: Record<string, string> = {};
for (const c of largestFirst([...CORRIDORS], (x) => x.slug, composed)) {
  const r = byslug.get(c.slug)!;
  const fp = fingerprint(r.sections, r.tables);
  let worst = 0, who = "—";
  for (const p of seen) { let h = 0; for (const g of fp) if (p.fp.has(g)) h++; const o = h / fp.size; if (o > worst) { worst = o; who = p.k; } }
  const pass = r.uniqueWords >= GATE.uniqueWords && r.facts >= GATE.facts && worst <= GATE.siblingOverlap;
  verdict[c.originSlug] = pass ? "PASS" : "COLLAPSE";
  const why: string[] = [];
  if (r.uniqueWords < GATE.uniqueWords) why.push(`uniqueWords ${r.uniqueWords}<${GATE.uniqueWords}`);
  if (r.facts < GATE.facts) why.push(`facts ${r.facts}<${GATE.facts}`);
  if (worst > GATE.siblingOverlap) why.push(`overlap ${(worst*100).toFixed(0)}%>40% vs ${who}`);
  console.log(`${pass ? "PASS    " : "COLLAPSE"} ${c.originSlug.padEnd(12)} exempt=${String(c.englishExemption?.eligible).padEnd(5)} uniqueWords=${String(r.uniqueWords).padStart(4)}  facts=${String(r.facts).padStart(2)}  overlap=${(worst*100).toFixed(0).padStart(3)}% vs ${who.split("__")[1] ?? who}   ${why.join(" · ")}`);
  if (pass) seen.push({ k: c.slug, fp });
}

console.log("\n=== PAIRWISE OVERLAP (symmetric, independent of accept order) ===");
const pairs: [string, string, string][] = [
  ["pakistan", "india", "both NON-exempt — the hardest pair"],
  ["nigeria", "philippines", "both EXEMPT — the other hard pair"],
  ["pakistan", "nigeria", "differ ON the exemption"],
  ["india", "philippines", "differ on the exemption (cross-check)"],
];
const fpOf = (o: string) => {
  const c = CORRIDORS.find((x) => x.originSlug === o)!;
  const r = byslug.get(c.slug)!;
  return fingerprint(r.sections, r.tables);
};
for (const [a, b, note] of pairs) {
  const fa = fpOf(a), fb = fpOf(b);
  let h = 0; for (const g of fb) if (fa.has(g)) h++;
  let h2 = 0; for (const g of fa) if (fb.has(g)) h2++;
  const worst = Math.max(h / fb.size, h2 / fa.size);
  console.log(`  ${(a + " vs " + b).padEnd(26)} ${(worst*100).toFixed(0).padStart(3)}%  ${worst > GATE.siblingOverlap ? "OVER  " : "under "} ${note}`);
}
// The ceiling. This is the number that decides whether a shortfall is the
// composer's fault or the dataset's: how much sourced origin material exists
// before a single word of prose is written around it.
console.log("\n=== CEILING: sourced origin material, before any prose ===");
console.log("   (the finished page needs 350 uniqueWords to clear the gate)");
for (const c of CORRIDORS) {
  const sourced = [
    c.originRegulator,
    c.originRegulatorUrl ?? "",
    c.originVerification,
    c.englishExemption?.basis ?? "",
    ...(c.searchWording ?? []),
  ]
    .join(" ")
    .trim()
    .split(/\s+/).length;
  console.log(
    `  ${c.originSlug.padEnd(12)} ${String(sourced).padStart(3)} sourced words · ${String(350 - sourced).padStart(3)} short before any prose`,
  );
}

console.log("\nSTATE:", JSON.stringify(verdict));
const passed = Object.values(verdict).filter((v) => v === "PASS").length;
console.log(`${passed} of ${CORRIDORS.length} corridors cleared the gate distinct.`);
