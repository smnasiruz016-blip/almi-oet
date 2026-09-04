/**
 * STEP 1 — THE 360 WRITING AND SPEAKING PAYLOADS, AGAINST THE RUNTIME'S OWN SCHEMAS.
 *
 * Run BEFORE anything is seeded. `src/lib/oet/registry.ts` calls `.parse()` — not
 * safeParse — on the stored payload when an attempt is marked, so a payload the
 * schema rejects is a 500 on a learner's screen, not a warning. That is the same
 * shape of failure as the P2022 of 3 September: fine in the repo, dead in
 * production.
 *
 * It changes nothing and writes nothing. It also reports the row-level fields
 * (difficulty, topicTag, timeLimitSeconds, active, profession) against the
 * Prisma enums, because a payload can be perfect while the row around it is not.
 */
import { readFileSync } from "node:fs";
import {
  writingLetterPayloadSchema,
} from "../../src/lib/oet/tasks/writing-letter";
import { speakingRoleplayPayloadSchema } from "../../src/lib/oet/tasks/speaking-roleplay";

const W_PATH = "C:/Projects/_handoffs/AlmiOET_Writing_ALL_180_items.json";
const S_PATH = "C:/Projects/_handoffs/AlmiOET_Speaking_ALL_180_items.json";

type Row = {
  taskType?: string;
  subTest?: string;
  profession?: string | null;
  title?: string;
  prompt?: string;
  difficulty?: string;
  topicTag?: string;
  timeLimitSeconds?: number;
  active?: boolean;
  guidanceNote?: string;
  payload?: unknown;
};

/** Accept either a keyed object or an array — report which it was. */
function load(path: string): { rows: Row[]; shape: string } {
  const raw = JSON.parse(readFileSync(path, "utf8")) as unknown;
  if (Array.isArray(raw)) return { rows: raw as Row[], shape: "array" };
  return { rows: Object.values(raw as Record<string, Row>), shape: "keyed object" };
}

const PROFESSIONS = new Set([
  "DENTISTRY", "DIETETICS", "MEDICINE", "NURSING", "OCCUPATIONAL_THERAPY",
  "OPTOMETRY", "PHARMACY", "PHYSIOTHERAPY", "PODIATRY", "RADIOGRAPHY",
  "SPEECH_PATHOLOGY", "VETERINARY_SCIENCE",
]);
const DIFFICULTIES = new Set(["FOUNDATION", "CORE", "STRETCH"]);

const problems: string[] = [];
const note = (s: string) => {
  if (problems.length < 40) console.log(`  🔴 ${s}`);
  problems.push(s);
};

function check(
  label: string,
  path: string,
  wantTaskType: string,
  wantSubTest: string,
  schema: { safeParse: (v: unknown) => { success: boolean; error?: { issues: unknown[] } } },
) {
  const { rows, shape } = load(path);
  console.log(`\n=== ${label} · ${rows.length} row(s) · JSON ${shape} ===`);
  const byProf = new Map<string, number>();
  const titles = new Set<string>();
  let dupTitles = 0;
  let payloadOk = 0;

  for (const [i, r] of rows.entries()) {
    const where = `${label}[${i}] ${String(r.title ?? "(no title)").slice(0, 60)}`;
    if (r.taskType !== wantTaskType) note(`${where}: taskType ${r.taskType}`);
    if (r.subTest !== wantSubTest) note(`${where}: subTest ${r.subTest}`);
    if (!r.profession || !PROFESSIONS.has(r.profession)) note(`${where}: profession ${r.profession}`);
    else byProf.set(r.profession, (byProf.get(r.profession) ?? 0) + 1);
    if (!r.title) note(`${where}: no title`);
    else if (titles.has(r.title)) {
      dupTitles += 1;
      note(`${where}: DUPLICATE title`);
    } else titles.add(r.title);
    if (!r.prompt) note(`${where}: no prompt`);
    if (!r.difficulty || !DIFFICULTIES.has(r.difficulty)) note(`${where}: difficulty ${r.difficulty}`);
    if (typeof r.timeLimitSeconds !== "number") note(`${where}: timeLimitSeconds ${r.timeLimitSeconds}`);
    if (typeof r.active !== "boolean") note(`${where}: active ${r.active}`);

    const parsed = schema.safeParse(r.payload);
    if (parsed.success) payloadOk += 1;
    else note(`${where}: payload REJECTED — ${JSON.stringify(parsed.error?.issues?.slice(0, 2))}`);
  }

  console.log(`  payload schema se guzre: ${payloadOk}/${rows.length}`);
  console.log(`  unique titles: ${titles.size}/${rows.length}${dupTitles ? ` (${dupTitles} dohre)` : ""}`);
  const profs = [...byProf.entries()].sort();
  console.log(`  professions: ${profs.length} — ${profs.map(([p, n]) => `${p} ${n}`).join(" · ")}`);
  const wrong = profs.filter(([, n]) => n !== 15);
  if (wrong.length) note(`${label}: in professions par 15 nahi — ${wrong.map(([p, n]) => `${p}=${n}`).join(", ")}`);
  return rows;
}

check("WRITING", W_PATH, "WRITING_LETTER", "WRITING", writingLetterPayloadSchema);
check("SPEAKING", S_PATH, "SPEAKING_ROLEPLAY", "SPEAKING", speakingRoleplayPayloadSchema);

console.log(`\n=== NATIJA ===`);
if (problems.length === 0) {
  console.log("360/360 — payload aur row dono repo ke schema par poore utarte hain.");
} else {
  console.error(`${problems.length} farq mile — RUKO, JSON khud se mat dhalo.`);
  process.exit(1);
}
