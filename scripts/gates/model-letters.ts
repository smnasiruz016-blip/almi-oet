/**
 * B2 · GATE: every model letter in the seed passes the SAME check its builder ran (scripts/seed/gen/model-letters-check.ts), read from the
 * items as the seed composes them (scripts/seed/gen/index.ts GEN_ITEMS) — 180–200 words by the product's word rule, every number in the
 * item's current case notes, the payload parsing with the runtime schema — and its stored word count is the real one.
 * A later change to an item's case notes that leaves its letter saying something else fails here.
 */
import { GEN_ITEMS } from "../seed/gen/index";
import { MODEL_LETTERS } from "../seed/gen/writing_model_letters";
import { checkLetter, bodyWordsOf } from "../seed/gen/model-letters-check";

const EXPECTED_AT_LEAST = 60; // B2: 15 Nursing + 15 Medicine; B4: the other 15 + 15
let bad = 0;
const fail = (m: string) => { bad++; console.error(`  🔴 ${m}`); };
const slugs = Object.keys(MODEL_LETTERS);
if (slugs.length < EXPECTED_AT_LEAST) fail(`${slugs.length} model letters — expected at least ${EXPECTED_AT_LEAST}`);
for (const slug of slugs) {
  const item = GEN_ITEMS.find((i) => i.slug === slug), l = MODEL_LETTERS[slug];
  const inSeed = (item?.payload as { modelLetter?: unknown } | undefined)?.modelLetter;
  if (JSON.stringify(inSeed) !== JSON.stringify(l)) fail(`${slug}: the seed item does not carry this letter`);
  if (bodyWordsOf(l) !== l.bodyWords) fail(`${slug}: stored ${l.bodyWords} words, the body has ${bodyWordsOf(l)}`);
  const plain = { ...(item?.payload as object), modelLetter: undefined };
  for (const p of checkLetter({ slug, ...l }, [{ ...item, payload: plain }]).problems) fail(p);
}
const carrying = GEN_ITEMS.filter((i) => (i.payload as { modelLetter?: unknown } | null)?.modelLetter).length;
if (carrying !== slugs.length) fail(`${carrying} seed items carry a model letter, ${slugs.length} letters exist`);
if (bad) { console.error(`\n[model-letters] ${bad} problem(s)`); process.exit(1); }
console.log(`[model-letters] ${slugs.length} model letters PASS (180–200 words, numbers in the notes, schema)`);
