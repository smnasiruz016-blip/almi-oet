/**
 * BUILD writing_sets.ts AND speaking_sets.ts FROM THE TWO HANDOFF JSON FILES.
 *
 * The 360 new Writing and Speaking items were authored and measured outside this
 * repo, in `_handoffs/AlmiOET_{Writing,Speaking}_ALL_180_items.json`. They are
 * carried into `gen/` by this script and never by hand.
 *
 * 🔴 IT VALIDATES BEFORE IT WRITES, with the SAME zod schemas the runtime parses
 * these payloads with. That is not ceremony: `src/lib/oet/registry.ts` calls
 * `.parse()` — not safeParse — when an attempt is marked, so a payload the
 * schema rejects is a 500 on a learner's screen. It caught ten items on
 * 3 September: `letterType: "transfer of care"` against an enum of four. The
 * owner fixed those at the markdown source and rebuilt the JSON rather than
 * patching it here, so the source and the generated file still agree.
 *
 * It also refuses to write unless the shape is exactly what the command
 * specifies: 180 + 180, twelve professions, fifteen each, no repeated title.
 * "Read nothing and pass" is the failure shape this project keeps meeting.
 *
 * Re-run after any edit to the source JSON:
 *   npx tsx scripts/seed/gen/_build_ws_sets.mts
 *
 * The existing per-profession `writing_*.ts` / `speaking_*.ts` are NOT touched:
 * their headers say they were generated from production, and rewriting them
 * would make the seed source disagree with the rows it describes.
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { writingLetterPayloadSchema } from "../../../src/lib/oet/tasks/writing-letter";
import { speakingRoleplayPayloadSchema } from "../../../src/lib/oet/tasks/speaking-roleplay";
import { unwrap } from "../../wrap-rule";
import { TIMING } from "../../../src/lib/oet/exam-shape";

const OUT_DIR = join(process.cwd(), "scripts", "seed", "gen");
const PROFESSIONS = [
  "DENTISTRY", "DIETETICS", "MEDICINE", "NURSING", "OCCUPATIONAL_THERAPY",
  "OPTOMETRY", "PHARMACY", "PHYSIOTHERAPY", "PODIATRY", "RADIOGRAPHY",
  "SPEECH_PATHOLOGY", "VETERINARY_SCIENCE",
];

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

const SETS = [
  {
    file: "writing_sets.ts",
    source: "C:/Projects/_handoffs/AlmiOET_Writing_ALL_180_items.json",
    taskType: "WRITING_LETTER",
    subTest: "WRITING",
    schema: writingLetterPayloadSchema,
    note:
      "180 case-note letters, 12 professions x 15. Case notes measured at 650-844\n" +
      "// words against the AlmiWorld house standard of 650-850 — see the LAW table in\n" +
      "// scripts/gates/length.ts for why that bound is ours and 180-200 is OET's.",
  },
  {
    file: "speaking_sets.ts",
    source: "C:/Projects/_handoffs/AlmiOET_Speaking_ALL_180_items.json",
    taskType: "SPEAKING_ROLEPLAY",
    subTest: "SPEAKING",
    schema: speakingRoleplayPayloadSchema,
    note:
      "180 role-play cards, 12 professions x 15. Card (setting + candidate role +\n" +
      "// patient role + task card) measured at 280-319 words against the AlmiWorld\n" +
      "// house standard of 280-330.",
  },
] as const;

let bad = 0;
const fail = (m: string) => {
  bad += 1;
  console.error(`  🔴 ${m}`);
};

for (const set of SETS) {
  const raw = readFileSync(set.source, "utf8");
  const sha = createHash("sha256").update(raw, "utf8").digest("hex").slice(0, 16);
  const rows = Object.values(JSON.parse(raw) as Record<string, Row>);

  if (rows.length !== 180) fail(`${set.file}: ${rows.length} rows, expected 180`);
  const titles = new Set<string>();
  const byProf = new Map<string, number>();
  for (const r of rows) {
    const where = `${set.taskType} "${String(r.title).slice(0, 50)}"`;
    if (r.taskType !== set.taskType) fail(`${where}: taskType ${r.taskType}`);
    if (r.subTest !== set.subTest) fail(`${where}: subTest ${r.subTest}`);
    if (!r.profession || !PROFESSIONS.includes(r.profession)) fail(`${where}: profession ${r.profession}`);
    else byProf.set(r.profession, (byProf.get(r.profession) ?? 0) + 1);
    if (titles.has(r.title)) fail(`${where}: duplicate title`);
    titles.add(r.title);
    const parsed = set.schema.safeParse(r.payload);
    if (!parsed.success) fail(`${where}: payload REJECTED — ${JSON.stringify(parsed.error.issues.slice(0, 2))}`);
  }
  for (const p of PROFESSIONS) {
    const n = byProf.get(p) ?? 0;
    if (n !== 15) fail(`${set.file}: ${p} has ${n} items, expected 15`);
  }
  if (bad > 0) continue;

  // 🔴 UNWRAP HERE, so the generated file says exactly what production says.
  //
  // The source markdown is hand-wrapped at ~100 characters and those breaks
  // travelled into the payload, where the composer renders them as visible
  // splits mid-sentence. The live rows were repaired on 4 September 2026; doing
  // it in the builder too means the source and the bank cannot drift apart, and
  // that a future seed cannot put the wraps back.
  //
  // `unwrap` is idempotent — text with no wrap left in it comes back unchanged —
  // so re-running this on already-clean JSON is a no-op.
  for (const r of rows) {
    const p = r.payload as Record<string, unknown>;
    for (const f of ["caseNotes", "candidateCard"]) {
      if (typeof p[f] === "string") p[f] = unwrap(p[f] as string);
    }
  }

  // 🔴 PREPARATION TIME IS OET'S NUMBER, NOT THE SOURCE FILE'S. Corrected here
  // on 4 September 2026 and reported out loud, never silently: the JSON carried
  // 120 seconds, which is the bottom of an older OET page's "2-3 minutes" range,
  // and OET's own newer page states three minutes four times. See
  // src/lib/oet/exam-shape.ts for both citations and the arithmetic that
  // corroborates it. Enforcing it in the builder is what stops a future seed
  // putting 120 back, and it is idempotent.
  if (set.taskType === "SPEAKING_ROLEPLAY") {
    let corrected = 0;
    for (const r of rows) {
      const p = r.payload as Record<string, unknown>;
      if (Number(p.prepSeconds) !== TIMING.speakingPrepSecondsMin) {
        p.prepSeconds = TIMING.speakingPrepSecondsMin;
        corrected += 1;
      }
    }
    if (corrected > 0) {
      console.log(
        `  ⚠️ prepSeconds corrected on ${corrected}/${rows.length} item(s) -> ` +
          `${TIMING.speakingPrepSecondsMin}s (OET: "three minutes to prepare")`,
      );
    }
  }

  const header = `// GENERATED — DO NOT HAND-EDIT.
//
// Source:  ${set.source}
//          sha256(first 16) = ${sha}
// Built by scripts/seed/gen/_build_ws_sets.mts, which validates every payload
// against the runtime zod schema before writing. ${rows.length} ${set.taskType} item(s),
// ${byProf.size} professions x 15.
//
// ${set.note}
//
// To change an item, change the SOURCE and re-run the builder. Editing this file
// by hand breaks the only proof that it matches what was authored and measured —
// and it leaves the source saying something the bank no longer says.
import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = ${JSON.stringify(rows, null, 2)};
`;
  writeFileSync(join(OUT_DIR, set.file), header, "utf8");
  console.log(`  wrote ${set.file} — ${rows.length} item(s), ${byProf.size} professions`);
}

if (bad > 0) {
  console.error(`\n${bad} problem(s) — nothing written.`);
  process.exit(1);
}
console.log("[build] 180 Writing + 180 Speaking validated against the runtime schemas");
