/**
 * B2 · BUILD writing_model_letters.ts FROM scripts/content/b2-model-letters-2026-10-30.json (the 30 letters of
 * AlmiOET_B2_Model_Letters_DRAFT_v3.docx, beta-g PASS with its 3 fixes applied). It checks every letter (model-letters-check.ts) against
 * the CURRENT seed before it writes, and writes nothing when one fails.
 *   npx tsx scripts/seed/gen/_build_model_letters.mts
 * The letters reach the items through scripts/seed/gen/index.ts (payload.modelLetter). No production row changes until the owner runs
 * the payload write.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ITEMS as WRITING_SETS } from "./writing_sets";
import { ITEMS as W_NURSING } from "./writing_nursing";
import { ITEMS as W_MEDICINE } from "./writing_medicine";
import { checkLetter, type LetterSource } from "./model-letters-check";

const HERE = dirname(fileURLToPath(import.meta.url));
/* B2 (the 4 September sets) and B4 (the other 15 Nursing + 15 Medicine tasks, 30 Oct 2026) — every letter checked against its own item */
const SOURCES = ["scripts/content/b2-model-letters-2026-10-30.json", "scripts/content/b4-model-letters-2026-10-30.json"];
const ITEMS = [...WRITING_SETS, ...W_NURSING, ...W_MEDICINE];
const out: Record<string, unknown> = {}, shas: string[] = [];
let bad = 0;
for (const SOURCE of SOURCES) {
  const raw = readFileSync(join(HERE, "..", "..", "..", SOURCE), "utf8");
  shas.push(`${SOURCE} sha256(first 16) = ${createHash("sha256").update(raw, "utf8").digest("hex").slice(0, 16)}`);
  for (const l of (JSON.parse(raw) as { letters: LetterSource[] }).letters) {
    if (out[l.slug]) { console.error(`  🔴 ${l.slug}: twice in the sources`); bad++; continue; }
    const r = checkLetter(l, ITEMS);
    for (const p of r.problems) { console.error(`  🔴 ${p}`); bad++; }
    out[l.slug] = r.letter;
  }
}
if (bad) { console.error(`\n${bad} problem(s) — nothing written.`); process.exit(1); }
const body = `// GENERATED — DO NOT HAND-EDIT.
//
// Sources: ${shas.join("\n//          ")}
// Built by scripts/seed/gen/_build_model_letters.mts, which checks every letter against the seed before writing
// (scripts/seed/gen/model-letters-check.ts — the same check scripts/gates/model-letters.ts runs). ${Object.keys(out).length} model letter(s).
import type { ModelLetter } from "../../../src/lib/oet/tasks/writing-letter";

export const MODEL_LETTERS: Record<string, ModelLetter> = ${JSON.stringify(out, null, 2)};
`;
writeFileSync(join(HERE, "writing_model_letters.ts"), body, "utf8");
console.log(`[build] ${Object.keys(out).length} model letters checked and written`);
