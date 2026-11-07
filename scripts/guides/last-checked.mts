// RR-386: sets each published guide's "Last checked" date to the oldest fact check date the page shows (Q&A LAW 5A.6).
//   npx tsx scripts/guides/last-checked.mts          report only; exits 1 if any guide is wrong
//   npx tsx scripts/guides/last-checked.mts --write  rewrite the wrong ones (only the "Last checked" date changes)
// Reads and writes public/guides/<slug>.html only. No network, no database.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { GUIDE_SLUGS } from "../../src/lib/oet-guides/guides";
import { lastCheckedDate, oldestFactCheckDate, withLastCheckedOldest } from "../../src/lib/oet-guides/last-checked";

const write = process.argv.includes("--write");
let wrong = 0;
for (const slug of GUIDE_SLUGS) {
  const file = join("public/guides", `${slug}.html`);
  const html = readFileSync(file, "utf8");
  const shown = lastCheckedDate(html);
  const oldest = oldestFactCheckDate(html);
  if (shown === null || oldest === null || shown === oldest) {
    console.log(`${slug}: ${shown ?? "no Last checked line"} (oldest fact ${oldest ?? "none"}) ok`);
    continue;
  }
  wrong++;
  console.log(`${slug}: ${shown} -> ${oldest}${write ? " (written)" : ""}`);
  if (write) writeFileSync(file, withLastCheckedOldest(html), "utf8");
}
console.log(`${wrong} guide(s) ${write ? "rewritten" : "wrong"}`);
if (wrong && !write) process.exit(1);
