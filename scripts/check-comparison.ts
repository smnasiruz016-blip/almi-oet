/**
 * npm run check:comparison — the monthly re-check list for the home-page comparison (owner, 31 Oct 2026).
 *
 * Prints every provider's source URL with the cells that rest on it, the day they were last checked and how many days ago.
 * It fetches nothing and changes nothing: a person opens each page, re-reads it, updates src/content/comparison.ts and CHECKED_ON.
 * gate:claims turns RED when CHECKED_ON is older than MAX_AGE_DAYS.
 */
import { CHECKED_ON, MAX_AGE_DAYS, PROVIDERS, ROWS } from "../src/content/comparison";

const age = Math.floor((Date.now() - new Date(`${CHECKED_ON}T00:00:00Z`).getTime()) / 86_400_000);
console.log(`Comparison last checked ${CHECKED_ON} (${age} day(s) ago; gate:claims refuses after ${MAX_AGE_DAYS}).`);
for (const p of PROVIDERS) {
  console.log(`\n${p.name}`);
  for (const u of p.sources) console.log(`  ${u}`);
  for (const r of ROWS) console.log(`    ${r.label}: ${p.cells[r.key]}`);
}
console.log("\nRe-read each page. Change only what the page clearly says; anything unclear is \"Not stated\". Then set CHECKED_ON.");
