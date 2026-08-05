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
console.log("\nverdict:", JSON.stringify(verdict));
