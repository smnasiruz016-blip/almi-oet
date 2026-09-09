/**
 * HOW MANY FORMS THE SEED SOURCE DECLARES — counted from the files, cheaply.
 *
 * A companion to gates/words.ts and prompt-shape-rule.ts, and here for the same
 * reason: `scripts/check-prod-mock.mts` is a SCRIPT, not a library — importing it
 * runs the check and calls process.exit — so a test that wants to drive this rule
 * cannot import it there, and a test that reimplements the scan is testing its own
 * copy.
 *
 * ── 🔴 IT SCANS TEXT. IT DOES NOT IMPORT THE BANK. ─────────────────────────
 *
 * `scripts/seed/gen` is 4.6 MB. Importing GEN_ITEMS to learn ONE number would
 * pull all of it through tsx on every post-deploy run, and the same instinct
 * applied one layer up would have put it in a public serverless route. A regex
 * over the same files answers it in milliseconds with no module graph at all.
 *
 * Only the six objective files carry `form` tags — Writing and Speaking are
 * per-profession and are not part of a form — which is why this population
 * matches the one /api/status reports: objective rows with no profession.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

/** Distinct form tags declared anywhere in the seed source, sorted. */
export function formTagsInRepo(dir = join(process.cwd(), "scripts", "seed", "gen")): string[] {
  const tags = new Set<string>();
  let names: string[] = [];
  try {
    names = readdirSync(dir).filter((n) => n.endsWith(".ts"));
  } catch {
    return []; // not a checkout — the caller must treat this as "measured nothing"
  }
  for (const name of names) {
    const text = readFileSync(join(dir, name), "utf8");
    for (const m of text.matchAll(/"form":\s*"([^"]+)"/g)) tags.add(m[1]);
  }
  return [...tags].sort();
}
