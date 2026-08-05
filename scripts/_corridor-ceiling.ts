import { CORRIDORS } from "../src/lib/oet-seo/corridors";
import { words, ngrams } from "../src/lib/oet-seo/compose-core";

// ONLY the sourced origin-side text. No composer prose at all. This is the
// ceiling: the most distinct material any wording could possibly draw on.
function sourceText(c: any): string {
  return [
    c.originRegulator,
    c.originRegulatorUrl ?? "",
    c.originVerification,
    c.englishExemption?.basis ?? "",
    ...(c.searchWording ?? []),
  ].join(" ");
}
console.log("=== RAW SOURCE MATERIAL PER CORRIDOR (no composer prose) ===");
for (const c of CORRIDORS) {
  const w = words(sourceText(c));
  console.log(`  ${c.originSlug.padEnd(12)} sourced words = ${String(w.length).padStart(3)}   (gate needs 350 on the finished page)`);
}
console.log("\n=== OVERLAP OF THE SOURCE FACTS THEMSELVES (5-gram) ===");
const fp = new Map<string, Set<string>>();
for (const c of CORRIDORS) fp.set(c.originSlug, ngrams(words(sourceText(c))));
const names = CORRIDORS.map((c) => c.originSlug);
for (let i = 0; i < names.length; i++)
  for (let j = i + 1; j < names.length; j++) {
    const a = fp.get(names[i])!, b = fp.get(names[j])!;
    let h = 0; for (const g of b) if (a.has(g)) h++;
    let h2 = 0; for (const g of a) if (b.has(g)) h2++;
    const worst = Math.max(h / b.size, h2 / a.size);
    console.log(`  ${(names[i] + " vs " + names[j]).padEnd(26)} ${(worst * 100).toFixed(0).padStart(3)}%`);
  }
// Word-level: how many words does a corridor have that NO other corridor has?
console.log("\n=== WORDS UNIQUE TO ONE CORRIDOR (not present in any other) ===");
const setOf = new Map(CORRIDORS.map((c) => [c.originSlug, new Set(words(sourceText(c)))]));
for (const c of CORRIDORS) {
  const mine = setOf.get(c.originSlug)!;
  const others = new Set<string>();
  for (const o of CORRIDORS) if (o.originSlug !== c.originSlug) for (const w of setOf.get(o.originSlug)!) others.add(w);
  const only = [...mine].filter((w) => !others.has(w));
  console.log(`  ${c.originSlug.padEnd(12)} ${String(only.length).padStart(3)} words unique to it: ${only.slice(0, 14).join(", ")}`);
}
