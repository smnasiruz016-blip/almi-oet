/**
 * B3 · GATE: every model role-play script in the seed passes the SAME check its builder ran (scripts/seed/gen/model-scripts-check.ts),
 * read from the items as the seed composes them (GEN_ITEMS) — 600–750 words, 24–40 turns, every card task mapped, every number on the card
 * or in the allowed list, the payload parsing — and its stored word count is the real one. A later change to a card that leaves its script
 * saying something else fails here.
 */
import { GEN_ITEMS } from "../seed/gen/index";
import { MODEL_SCRIPTS, SCRIPT_NUMBERS_ALLOWED, SCRIPT_NUMBERS_DERIVED } from "../seed/gen/speaking_model_scripts";
import { checkScript, scriptWordsOf } from "../seed/gen/model-scripts-check";

const EXPECTED_AT_LEAST = 480; // every speaking card of all 12 professions: B3 (15 Nursing + 15 Medicine) + S1–S6 (the other 330) + SP+120 (1 Nov 2026)
let bad = 0;
const fail = (m: string) => { bad++; console.error(`  🔴 ${m}`); };
const slugs = Object.keys(MODEL_SCRIPTS);
if (slugs.length < EXPECTED_AT_LEAST) fail(`${slugs.length} model scripts — expected at least ${EXPECTED_AT_LEAST}`);
for (const slug of slugs) {
  const item = GEN_ITEMS.find((i) => i.slug === slug), s = MODEL_SCRIPTS[slug];
  const inSeed = (item?.payload as { modelScript?: unknown } | undefined)?.modelScript;
  if (JSON.stringify(inSeed) !== JSON.stringify(s)) fail(`${slug}: the seed card does not carry this script`);
  if (scriptWordsOf(s) !== s.words) fail(`${slug}: stored ${s.words} words, the turns have ${scriptWordsOf(s)}`);
  const plain = { ...(item?.payload as object), modelScript: undefined };
  for (const p of checkScript({ slug, ...s }, [{ ...item, payload: plain }], { ...SCRIPT_NUMBERS_ALLOWED, ...(SCRIPT_NUMBERS_DERIVED[slug] ?? {}) }).problems) fail(p);
}
const carrying = GEN_ITEMS.filter((i) => (i.payload as { modelScript?: unknown } | null)?.modelScript).length;
if (carrying !== slugs.length) fail(`${carrying} seed cards carry a model script, ${slugs.length} scripts exist`);
if (bad) { console.error(`\n[model-scripts] ${bad} problem(s)`); process.exit(1); }
console.log(`[model-scripts] ${slugs.length} model scripts PASS (600–750 words, 24–40 turns, every card task mapped, numbers, schema)`);
