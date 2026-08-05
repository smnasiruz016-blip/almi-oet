// The corridor gate run — Pattern 5's measurement, kept runnable.
//
//   npx tsx scripts/corridor-report.ts
//
// Reports STATE, not a verdict: per-corridor uniqueWords / facts, the pairwise
// 5-gram overlap between every corridor pair, what was emitted vs skipped and
// why, and the ceiling — how much sourced origin material actually exists before
// any prose is written around it. That last number is the one that says whether
// a shortfall is the composer's fault or the dataset's.
//
// No silent caps: every corridor is listed with its reason.

import { CORRIDORS, destinationFor } from "../src/lib/oet-seo/corridors";
import { composeJourney, journeyNotCurrentReason } from "../src/lib/journey/compose";
import { GATE, fingerprint, largestFirst, type Composed } from "../src/lib/oet-seo/compose-core";

const composed = new Map<string, Composed | null>();
const byslug = new Map<string, Composed>();
for (const c of CORRIDORS) {
  const r = composeJourney(c, destinationFor(c), "nurses");
  composed.set(c.slug, r);
  byslug.set(c.slug, r);
}

console.log("=== PER-CORRIDOR, in gate order (largest material first) ===");
console.log(
  `gate: uniqueWords >= ${GATE.uniqueWords} · facts >= ${GATE.facts} · overlap <= ${GATE.siblingOverlap * 100}%\n`,
);

// The accept-order overlap column is only meaningful once something has passed:
// a corridor is compared against siblings ALREADY ACCEPTED, so with zero passes
// it reads 0% for everyone and says nothing. It is reported as "—" in that case
// rather than as a number that looks like good news. The symmetric pairwise
// block below is the one to read.
const seen: { k: string; fp: Set<string> }[] = [];
const verdict: Record<string, string> = {};
const emitted: string[] = [];
const noindexed: { slug: string; reason: string }[] = [];
const skipped: { slug: string; reasons: string[] }[] = [];

for (const c of largestFirst([...CORRIDORS], (x) => x.slug, composed)) {
  const r = byslug.get(c.slug)!;
  const fp = fingerprint(r.sections, r.tables);
  let worst = 0;
  let who = "—";
  for (const p of seen) {
    let h = 0;
    for (const g of fp) if (p.fp.has(g)) h++;
    const o = h / fp.size;
    if (o > worst) {
      worst = o;
      who = p.k;
    }
  }
  const why: string[] = [];
  if (r.uniqueWords < GATE.uniqueWords) why.push(`uniqueWords ${r.uniqueWords}<${GATE.uniqueWords}`);
  if (r.facts < GATE.facts) why.push(`facts ${r.facts}<${GATE.facts}`);
  if (worst > GATE.siblingOverlap) why.push(`overlap ${(worst * 100).toFixed(0)}%>40% vs ${who}`);
  const pass = why.length === 0;
  verdict[c.originSlug] = pass ? "PASS" : "COLLAPSE";
  const vsCol = seen.length === 0 ? "  — (first accepted)" : `${(worst * 100).toFixed(0).padStart(3)}% vs ${who.split("__")[1] ?? who}`;
  console.log(
    `${pass ? "PASS    " : "COLLAPSE"} ${c.originSlug.padEnd(12)} uniqueWords=${String(r.uniqueWords).padStart(4)}  facts=${String(r.facts).padStart(2)}  acceptOverlap=${vsCol}   ${why.join(" · ")}`,
  );
  if (pass) {
    seen.push({ k: c.slug, fp });
    const reason = journeyNotCurrentReason(c);
    if (reason) noindexed.push({ slug: c.originSlug, reason });
    else emitted.push(c.originSlug);
  } else {
    skipped.push({ slug: c.originSlug, reasons: why });
  }
}

console.log("\n=== PAIRWISE OVERLAP (symmetric, independent of accept order) ===");
const origins = CORRIDORS.map((c) => c.originSlug);
const fpOf = (o: string) => {
  const c = CORRIDORS.find((x) => x.originSlug === o)!;
  return fingerprint(byslug.get(c.slug)!.sections, byslug.get(c.slug)!.tables);
};
let worstPair = 0;
for (let i = 0; i < origins.length; i += 1) {
  for (let j = i + 1; j < origins.length; j += 1) {
    const fa = fpOf(origins[i]);
    const fb = fpOf(origins[j]);
    let h = 0;
    for (const g of fb) if (fa.has(g)) h++;
    let h2 = 0;
    for (const g of fa) if (fb.has(g)) h2++;
    const worst = Math.max(h / fb.size, h2 / fa.size);
    worstPair = Math.max(worstPair, worst);
    console.log(
      `  ${(origins[i] + " vs " + origins[j]).padEnd(26)} ${(worst * 100).toFixed(0).padStart(3)}%  ${worst > GATE.siblingOverlap ? "OVER " : "under"}`,
    );
  }
}
console.log(`  worst pair: ${(worstPair * 100).toFixed(0)}% (gate ≤ ${GATE.siblingOverlap * 100}%)`);

// The ceiling. This is the number that decides whether a shortfall is the
// composer's fault or the dataset's: how much sourced origin material exists
// before a single word of prose is written around it.
console.log("\n=== CEILING: sourced origin material, before any prose ===");
console.log(`   (the finished page needs ${GATE.uniqueWords} uniqueWords to clear the gate)`);
for (const c of CORRIDORS) {
  const sourced = [
    c.originRegulator.value,
    c.verificationRoute.value,
    c.attestationChain?.value ?? "",
    c.feesTimeline?.value ?? "",
    c.englishRoute?.value ?? "",
    c.originDistinctSummary ?? "",
    ...(c.localSearchWording ?? []),
  ]
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const short = GATE.uniqueWords - sourced;
  console.log(
    `  ${c.originSlug.padEnd(12)} ${String(sourced).padStart(3)} sourced words · ${short > 0 ? `${String(short).padStart(3)} short before any prose` : `${String(-short).padStart(3)} OVER the bar on sourced material alone`}`,
  );
}

console.log("\n=== EMITTED vs SKIPPED (no silent caps) ===");
console.log(`  sitemapped        : ${emitted.length ? emitted.join(", ") : "(none)"}`);
for (const n of noindexed) console.log(`  rendered, NOINDEX : ${n.slug} — ${n.reason}`);
for (const s of skipped) console.log(`  not built         : ${s.slug} — ${s.reasons.join(" · ")}`);

console.log("\nSTATE:", JSON.stringify(verdict));
const passed = Object.values(verdict).filter((v) => v === "PASS").length;
console.log(`${passed} of ${CORRIDORS.length} corridors cleared the gate distinct.`);
console.log(
  `of those, ${emitted.length} are sitemapped and ${noindexed.length} render at noindex pending re-confirmation.`,
);
