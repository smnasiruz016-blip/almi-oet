/**
 * B3 · BUILD speaking_model_scripts.ts FROM scripts/content/b3-model-scripts-2026-10-30.json (the 30 scripts of
 * AlmiOET_B3_Model_Roleplay_Scripts_DRAFT_v2.docx, beta-g PASS on v1 with its 5 clinical fixes). It checks every script
 * (model-scripts-check.ts) against the CURRENT seed before it writes, and writes nothing when one fails.
 *   npx tsx scripts/seed/gen/_build_model_scripts.mts
 * The scripts reach the items through scripts/seed/gen/index.ts (payload.modelScript). No production row changes until the owner runs
 * the payload write.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ITEMS as SPEAKING_SETS } from "./speaking_sets";
import { checkScript, type ScriptSource } from "./model-scripts-check";

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE = "scripts/content/b3-model-scripts-2026-10-30.json";
const raw = readFileSync(join(HERE, "..", "..", "..", SOURCE), "utf8");
const sha = createHash("sha256").update(raw, "utf8").digest("hex").slice(0, 16);
const src = JSON.parse(raw) as { numbersAllowed: Record<string, string>; derived: Record<string, Record<string, string>>; scripts: ScriptSource[] };
const out: Record<string, unknown> = {};
let bad = 0;
for (const s of src.scripts) {
  if (out[s.slug]) { console.error(`  🔴 ${s.slug}: twice in the source`); bad++; continue; }
  const r = checkScript(s, SPEAKING_SETS, { ...src.numbersAllowed, ...(src.derived[s.slug] ?? {}) });
  for (const p of r.problems) { console.error(`  🔴 ${p}`); bad++; }
  out[s.slug] = r.script;
}
if (bad) { console.error(`\n${bad} problem(s) — nothing written.`); process.exit(1); }
const body = `// GENERATED — DO NOT HAND-EDIT.
//
// Source:  ${SOURCE}
//          sha256(first 16) = ${sha}
// Built by scripts/seed/gen/_build_model_scripts.mts, which checks every script against the seed before writing
// (scripts/seed/gen/model-scripts-check.ts — the same check scripts/gates/model-scripts.ts runs). ${Object.keys(out).length} model script(s).
import type { ModelScript } from "../../../src/lib/oet/tasks/speaking-roleplay";

/** the numbers a script may say that are not on its card, with why (from the source) */
export const SCRIPT_NUMBERS_ALLOWED: Record<string, string> = ${JSON.stringify(src.numbersAllowed, null, 2)};
export const SCRIPT_NUMBERS_DERIVED: Record<string, Record<string, string>> = ${JSON.stringify(src.derived, null, 2)};

export const MODEL_SCRIPTS: Record<string, ModelScript> = ${JSON.stringify(out, null, 2)};
`;
writeFileSync(join(HERE, "speaking_model_scripts.ts"), body, "utf8");
console.log(`[build] ${Object.keys(out).length} model scripts checked and written`);
