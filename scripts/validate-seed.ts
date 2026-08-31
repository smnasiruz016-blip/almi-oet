// Dev-only: validate every seed item's payload against its runtime Zod schema,
// so a malformed payload is caught here, not at scoring time. Run: tsx scripts/validate-seed.ts
//
// ── WHICH ITEMS THIS VALIDATES, AND WHY THE COUNT USED TO BE WRONG ───────────
// This file used to concatenate all five sources and print "All 567 payloads
// valid", which reads as though 567 items ship. They do not. append.ts seeds
// `const ALL = GEN_ITEMS` — 507 items — and imports the four hand-written task
// files only to check that gen/ remains their superset. The 60 hand-written
// items are duplicates of items already in gen/ and are never written to the
// database.
//
// Same stale premise the family audit adapter carried until 2026-08-31, where it
// mattered far more: there the extra 60 polluted every answer-position statistic,
// because they carry the PRE-de-game option order. Here the consequence is milder
// — schema validity over extra items is conservative, not corrupting — but the
// printed number was still wrong about what ships.
//
// The fix is not a hardcoded 507. It is to read what append.ts NAMES, and to fail
// if that ever stops matching what this file reads. EXPECTED_SEEDED_EXPR below is
// the expectation and is hand-typed; append.ts is the subject. Deriving the
// expectation from append.ts would prove only that append.ts agrees with itself.
import fs from "node:fs";
import path from "node:path";
import { ITEMS as L } from "./seed/listening";
import { ITEMS as R } from "./seed/reading";
import { ITEMS as W } from "./seed/writing-letter";
import { ITEMS as S } from "./seed/speaking-roleplay";
import { GEN_ITEMS } from "./seed/gen";
import { listeningPartAPayloadSchema, listeningMcqPayloadSchema } from "../src/lib/oet/tasks/listening";
import { readingPartAPayloadSchema, readingMcqPayloadSchema } from "../src/lib/oet/tasks/reading";
import { writingLetterPayloadSchema } from "../src/lib/oet/tasks/writing-letter";
import { speakingRoleplayPayloadSchema } from "../src/lib/oet/tasks/speaking-roleplay";

const EXPECTED_SEEDED_EXPR = "GEN_ITEMS";

const appendPath = path.join(process.cwd(), "scripts", "seed", "append.ts");
if (!fs.existsSync(appendPath)) {
  console.error("scripts/seed/append.ts not found — cannot confirm what is seeded.");
  process.exit(1);
}
const appendSrc = fs.readFileSync(appendPath, "utf8");
const mAll = /const\s+ALL\s*=\s*([^;]+);/.exec(appendSrc);
const actualSeededExpr = mAll ? mAll[1].trim() : "(no 'const ALL =' found)";
if (actualSeededExpr !== EXPECTED_SEEDED_EXPR) {
  console.error(
    "SEEDED SET DIVERGED.\n" +
      `  append.ts seeds     : ${actualSeededExpr}\n` +
      `  this script validates: ${EXPECTED_SEEDED_EXPR}\n` +
      "Update the import AND this literal together, then re-run.",
  );
  process.exit(1);
}

const schemas: Record<string, { safeParse: (v: unknown) => { success: boolean; error?: unknown } }> = {
  LISTENING_PART_A: listeningPartAPayloadSchema,
  LISTENING_PART_B: listeningMcqPayloadSchema,
  LISTENING_PART_C: listeningMcqPayloadSchema,
  READING_PART_A: readingPartAPayloadSchema,
  READING_PART_B: readingMcqPayloadSchema,
  READING_PART_C: readingMcqPayloadSchema,
  WRITING_LETTER: writingLetterPayloadSchema,
  SPEAKING_ROLEPLAY: speakingRoleplayPayloadSchema,
};

type SeedItem = { taskType: string; title: string; payload: unknown };

function validate(items: SeedItem[], label: string): number {
  let bad = 0;
  for (const it of items) {
    const sc = schemas[it.taskType];
    const res = sc.safeParse(it.payload);
    if (!res.success) {
      bad++;
      console.error(`FAIL [${label}] [${it.taskType}] ${it.title}:`, JSON.stringify(res.error).slice(0, 300));
    }
  }
  return bad;
}

// What SHIPS. This is the number that matters.
const seeded = GEN_ITEMS as unknown as SeedItem[];
const badSeeded = validate(seeded, "seeded");

// The four hand-written files are NOT seeded. They are still checked, because
// append.ts imports them as a superset guard and a malformed one would surface
// there — but they are counted separately so the headline number stays honest.
const handwritten = [...L, ...R, ...W, ...S] as unknown as SeedItem[];
const badHand = validate(handwritten, "not-seeded");

console.log(
  badSeeded
    ? `\n${badSeeded} invalid payload(s) in the seeded set`
    : `All ${seeded.length} SEEDED payloads valid ✓  (source: ${EXPECTED_SEEDED_EXPR})`,
);
console.log(
  badHand
    ? `${badHand} invalid payload(s) in the ${handwritten.length} hand-written items (not seeded)`
    : `All ${handwritten.length} hand-written payloads valid ✓  (not seeded — superset guard only)`,
);
process.exit(badSeeded || badHand ? 1 : 0);
