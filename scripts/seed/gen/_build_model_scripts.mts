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
import { ITEMS as S_NURSING } from "./speaking_nursing";
import { ITEMS as S_MEDICINE } from "./speaking_medicine";
import { ITEMS as S_PHARMACY } from "./speaking_pharmacy";
import { ITEMS as S_DENTISTRY } from "./speaking_dentistry";
import { ITEMS as S_PHYSIOTHERAPY } from "./speaking_physiotherapy";
import { ITEMS as S_DIETETICS } from "./speaking_dietetics";
import { ITEMS as S_OT } from "./speaking_occupational_therapy";
import { ITEMS as S_OPTOMETRY } from "./speaking_optometry";
import { ITEMS as S_PODIATRY } from "./speaking_podiatry";
import { ITEMS as S_RADIOGRAPHY } from "./speaking_radiography";
import { ITEMS as S_SPEECH } from "./speaking_speech_pathology";
import { ITEMS as S_VET } from "./speaking_veterinary_science";
import { checkScript, type ScriptSource } from "./model-scripts-check";

const HERE = dirname(fileURLToPath(import.meta.url));
/* B3 (the 4 September sets, 15 Nursing + 15 Medicine) and S1–S6 (every other speaking card of all 12 professions, 31 Oct 2026) —
   every script checked against its own card; the allowed numbers are merged (111/999 in both), derivations are per slug */
const SOURCES = ["scripts/content/b3-model-scripts-2026-10-30.json", "scripts/content/s1-s6-model-scripts-2026-10-31.json"];
const ITEMS = [...SPEAKING_SETS, ...S_NURSING, ...S_MEDICINE, ...S_PHARMACY, ...S_DENTISTRY, ...S_PHYSIOTHERAPY, ...S_DIETETICS, ...S_OT, ...S_OPTOMETRY, ...S_PODIATRY, ...S_RADIOGRAPHY, ...S_SPEECH, ...S_VET];
const src = { numbersAllowed: {} as Record<string, string>, derived: {} as Record<string, Record<string, string>> };
const out: Record<string, unknown> = {}, shas: string[] = [];
let bad = 0;
for (const SOURCE of SOURCES) {
  const raw = readFileSync(join(HERE, "..", "..", "..", SOURCE), "utf8");
  shas.push(`${SOURCE} sha256(first 16) = ${createHash("sha256").update(raw, "utf8").digest("hex").slice(0, 16)}`);
  const one = JSON.parse(raw) as { numbersAllowed: Record<string, string>; derived: Record<string, Record<string, string>>; scripts: ScriptSource[] };
  Object.assign(src.numbersAllowed, one.numbersAllowed); Object.assign(src.derived, one.derived);
  for (const s of one.scripts) {
    if (out[s.slug]) { console.error(`  🔴 ${s.slug}: twice in the sources`); bad++; continue; }
    const r = checkScript(s, ITEMS, { ...src.numbersAllowed, ...(one.derived[s.slug] ?? {}) });
    for (const p of r.problems) { console.error(`  🔴 ${p}`); bad++; }
    out[s.slug] = r.script;
  }
}
if (bad) { console.error(`\n${bad} problem(s) — nothing written.`); process.exit(1); }
const body = `// GENERATED — DO NOT HAND-EDIT.
//
// Sources: ${shas.join("\n//          ")}
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
