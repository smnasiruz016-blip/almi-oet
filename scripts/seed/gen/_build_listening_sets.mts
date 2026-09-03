/**
 * BUILD listening_{a,b,c}_sets.ts FROM THE THREE HANDOFF JSON FILES.
 *
 * The 118 new Listening items were authored and measured outside this repo, in
 * `_handoffs/AlmiOET_Listening_Part{A,B,C}_*_items.json`. They are carried into
 * `gen/` by this script and never by hand: one character of drift in a gap
 * answer or an option key is a wrong answer served to a learner, and a hand copy
 * has no way to prove it did not drift.
 *
 * 🔴 IT VALIDATES BEFORE IT WRITES, with the SAME zod schemas the runtime parses
 * these payloads with (`src/lib/oet/tasks/listening.ts`). A payload that the app
 * would reject never reaches a file. It also refuses to write if the item count
 * is not the 13 / 90 / 15 the command specifies — "read nothing and pass" is the
 * failure shape this project keeps meeting.
 *
 * Re-run after any edit to the source JSON:
 *   npx tsx scripts/seed/gen/_build_listening_sets.mts
 *
 * The existing `listening_a.ts` / `listening_b.ts` are NOT touched: their header
 * says they were generated from production, and rewriting them here would make
 * the seed source disagree with the database it describes.
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  listeningPartAPayloadSchema,
  listeningMcqPayloadSchema,
} from "../../../src/lib/oet/tasks/listening";

const SRC_A = "C:/Projects/_handoffs/AlmiOET_Listening_PartA_13_items.json";
const SRC_B = "C:/Projects/_handoffs/AlmiOET_Listening_PartB_90_items.json";
const SRC_C = "C:/Projects/_handoffs/AlmiOET_Listening_PartC_15_items.json";
const OUT_DIR = join(process.cwd(), "scripts", "seed", "gen");

type Row = {
  taskType: string;
  subTest: string;
  profession: string | null;
  title: string;
  prompt: string;
  difficulty: string;
  topicTag: string;
  timeLimitSeconds: number;
  active: boolean;
  guidanceNote?: string;
  payload: unknown;
};

/** Read a keyed object of rows, in a stable order derived from its keys. */
function read(path: string, expect: number): { rows: Row[]; sha: string } {
  const raw = readFileSync(path, "utf8");
  const sha = createHash("sha256").update(raw, "utf8").digest("hex").slice(0, 16);
  const obj = JSON.parse(raw) as Record<string, Row>;
  const keys = Object.keys(obj).sort((a, b) => {
    const na = a.split("-").map(Number);
    const nb = b.split("-").map(Number);
    for (let i = 0; i < Math.max(na.length, nb.length); i++) {
      if ((na[i] ?? 0) !== (nb[i] ?? 0)) return (na[i] ?? 0) - (nb[i] ?? 0);
    }
    return 0;
  });
  if (keys.length !== expect) {
    throw new Error(`${path}: ${keys.length} item(s), expected ${expect}`);
  }
  return { rows: keys.map((k) => obj[k]), sha };
}

function emit(
  file: string,
  rows: Row[],
  source: string,
  sha: string,
  taskType: string,
  note: string,
): void {
  const header = `// GENERATED — DO NOT HAND-EDIT.
//
// Source:  ${source}
//          sha256(first 16) = ${sha}
// Built by scripts/seed/gen/_build_listening_sets.mts, which validates every
// payload against the runtime zod schema in src/lib/oet/tasks/listening.ts
// before writing. ${rows.length} ${taskType} item(s).
//
// ${note}
//
// To change an item, change the source JSON and re-run the builder. Editing
// this file by hand breaks the only proof that it matches what was measured.
import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = ${JSON.stringify(rows, null, 2)};
`;
  writeFileSync(join(OUT_DIR, file), header, "utf8");
  console.log(`  wrote ${file} — ${rows.length} item(s)`);
}

const a = read(SRC_A, 13);
const b = read(SRC_B, 90);
const c = read(SRC_C, 15);

// Validate with the runtime's own schemas before a byte is written.
let bad = 0;
for (const r of a.rows) {
  const parsed = listeningPartAPayloadSchema.safeParse(r.payload);
  if (!parsed.success) {
    bad += 1;
    console.error(`  INVALID Part A payload: ${r.title}\n    ${parsed.error.message.slice(0, 300)}`);
  }
  if (r.taskType !== "LISTENING_PART_A") {
    bad += 1;
    console.error(`  wrong taskType on ${r.title}: ${r.taskType}`);
  }
}
for (const [rows, want] of [
  [b.rows, "LISTENING_PART_B"],
  [c.rows, "LISTENING_PART_C"],
] as const) {
  for (const r of rows) {
    const parsed = listeningMcqPayloadSchema.safeParse(r.payload);
    if (!parsed.success) {
      bad += 1;
      console.error(`  INVALID ${want} payload: ${r.title}\n    ${parsed.error.message.slice(0, 300)}`);
    }
    if (r.taskType !== want) {
      bad += 1;
      console.error(`  wrong taskType on ${r.title}: ${r.taskType}`);
    }
    // The six-question law for Part C, checked at the door as well as by
    // gate:length — a file that cannot be built wrong is better than one that
    // is built wrong and caught later.
    const qs = (r.payload as { questions?: unknown[] }).questions ?? [];
    if (want === "LISTENING_PART_C" && qs.length !== 6) {
      bad += 1;
      console.error(`  ${r.title}: ${qs.length} question(s), law 6 (ZABTA §2)`);
    }
  }
}
if (bad > 0) {
  console.error(`\n${bad} payload(s) rejected — nothing written.`);
  process.exit(1);
}

console.log(
  `[build] ${a.rows.length} Part A + ${b.rows.length} Part B + ${c.rows.length} Part C ` +
    `validated against the runtime schemas`,
);
emit(
  "listening_a_sets.ts",
  a.rows,
  SRC_A,
  a.sha,
  "LISTENING_PART_A",
  "Full-length consultation scripts, 550-600 words, 12 gaps each, written to the\n// measured law in _handoffs/AlmiOET_likhne_ka_zabta.md §2.",
);
emit(
  "listening_b_sets.ts",
  b.rows,
  SRC_B,
  b.sha,
  "LISTENING_PART_B",
  "15 sets of 6 workplace extracts, 140-165 words, one three-option MCQ each,\n// written to the measured law in _handoffs/AlmiOET_likhne_ka_zabta.md §2.",
);
emit(
  "listening_c_sets.ts",
  c.rows,
  SRC_C,
  c.sha,
  "LISTENING_PART_C",
  "15 recordings, 780-880 words, SIX three-option questions each, written to the\n// measured law in _handoffs/AlmiOET_likhne_ka_zabta.md §2. The six-question rule\n// is enforced by gate:length from 3 September 2026 — nothing checked it before,\n// which is the same hole that let a two-question Reading Part C ship.",
);
