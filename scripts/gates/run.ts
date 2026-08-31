/**
 * BUILD GATES — run before `next build`, hard-fail on any breach (exit 1).
 *
 * These run over the SEED SOURCE (scripts/seed/gen), not the database, and that is
 * deliberate: `build` no longer touches the DB at all, so a gate that queried Neon
 * would re-couple the two and fail a build whenever the database blinked. The seed
 * source is what this repo can actually promise about.
 *
 * SCOPE, measured 2026-08-31 — the gap this comment used to warn about has CLOSED.
 * It previously said prod held MORE items than the seed source (450 vs 390), so a
 * green here proved nothing about the served bank. A read-only query on 2026-08-31
 * found production at 507 rows, 507 active, 0 inactive, matching gen/ 1:1 on
 * (taskType, profession, title) with 0 rows on either side. So today a green here
 * DOES describe the served bank.
 *
 * That is a fact about that date, not an invariant: nothing in this file reads
 * Postgres, so if a row is edited or deactivated in the database and never written
 * back to gen/, these gates will not see it. The claim is "source and prod agreed
 * when last measured", never "source and prod agree". Re-measure before relying on
 * it. The stale version of this note understated a good gate, which is its own
 * hazard — the next reader mistrusts the gate instead of the comment.
 *
 *   G1 item-id       — identity is unique and resolvable
 *   G2 floor         — >= 15 per task type, and per profession for Writing/Speaking
 *   G3 distribution  — no MCQ part gameable from answer position
 *   G4 structure     — payload shape valid per task type; all 12 professions covered
 *   G5 audio         — every Listening script has pre-rendered audio committed
 *   G6 prep time     — Speaking prepSeconds inside OET's published range
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { GEN_ITEMS } from "../seed/gen/index";
import { AUDIO_DIR, audioFileName, audioKey } from "../../src/lib/oet/audio";

const FLOOR = 15;
const PROFS = [
  "MEDICINE", "NURSING", "DENTISTRY", "DIETETICS", "PHARMACY", "OPTOMETRY",
  "OCCUPATIONAL_THERAPY", "VETERINARY_SCIENCE", "PODIATRY", "PHYSIOTHERAPY",
  "SPEECH_PATHOLOGY", "RADIOGRAPHY",
] as const;
const OBJECTIVE = [
  "LISTENING_PART_A", "LISTENING_PART_B", "LISTENING_PART_C",
  "READING_PART_A", "READING_PART_B", "READING_PART_C",
] as const;
const MCQ = ["LISTENING_PART_B", "LISTENING_PART_C", "READING_PART_A", "READING_PART_B", "READING_PART_C"] as const;
const AI_TASKS = ["WRITING_LETTER", "SPEAKING_ROLEPLAY"] as const;

// Same thresholds the family audit uses, so a gate-green here means the same thing
// it means everywhere else: extreme skew at any size, or clustering once n is big
// enough for the spread to beat chance.
const EXTREME = 0.8;
const EXTREME_MIN_N = 3;
const CLUSTER = 0.6;
const CLUSTER_MIN_N = 6;

type Q = { id?: string; stem?: string; answer?: string; options?: { id: string; text?: string }[] };
type Gap = { id?: string; label?: string; answer?: string };
type Payload = { questions?: Q[]; gaps?: Gap[]; texts?: unknown; passages?: unknown; audioScript?: string };
type Item = { subTest: string; taskType: string; profession: string | null; title: string; payload: Payload };

const items = GEN_ITEMS as unknown as Item[];
const failures: string[] = [];
const fail = (gate: string, msg: string) => failures.push(`${gate}  ${msg}`);

// ── G1 · identity ────────────────────────────────────────────────────────────
{
  const seen = new Map<string, number>();
  for (const it of items) {
    const k = `${it.taskType}|${it.profession ?? "-"}|${it.title.trim().toLowerCase()}`;
    seen.set(k, (seen.get(k) ?? 0) + 1);
  }
  for (const [k, n] of seen) if (n > 1) fail("G1", `duplicate item identity (${n}x): ${k}`);

  for (const it of items) {
    const ids = [...(it.payload.questions ?? []), ...(it.payload.gaps ?? [])].map((q) => q.id);
    if (ids.some((i) => !i)) fail("G1", `question/gap with no id in "${it.title}"`);
    const dupe = ids.filter((i, n) => i && ids.indexOf(i) !== n);
    if (dupe.length) fail("G1", `duplicate question id ${[...new Set(dupe)].join(",")} in "${it.title}"`);
  }
}

// ── G2 · floor ───────────────────────────────────────────────────────────────
{
  const byTask = new Map<string, number>();
  for (const it of items) byTask.set(it.taskType, (byTask.get(it.taskType) ?? 0) + 1);
  for (const t of [...OBJECTIVE, ...AI_TASKS]) {
    const n = byTask.get(t) ?? 0;
    if (t === "WRITING_LETTER" || t === "SPEAKING_ROLEPLAY") continue; // checked per profession
    if (n < FLOOR) fail("G2", `${t} has ${n} items, floor is ${FLOOR}`);
  }
  for (const p of PROFS) {
    for (const t of AI_TASKS) {
      const n = items.filter((i) => i.profession === p && i.taskType === t).length;
      if (n < FLOOR) fail("G2", `${p}/${t} has ${n} items, floor is ${FLOOR}`);
    }
  }
}

// ── G3 · answer-position distribution ────────────────────────────────────────
{
  for (const t of MCQ) {
    const dist = new Map<number, number>();
    for (const it of items) {
      if (it.taskType !== t) continue;
      for (const q of it.payload.questions ?? []) {
        if (!q.options || !q.answer) continue;
        const idx = q.options.findIndex((o) => o.id === q.answer);
        if (idx < 0) continue;
        dist.set(idx, (dist.get(idx) ?? 0) + 1);
      }
    }
    const counts = [...dist.values()];
    const n = counts.reduce((a, b) => a + b, 0);
    if (n === 0) continue;
    const share = Math.max(...counts) / n;
    const shape = JSON.stringify(Object.fromEntries([...dist.entries()].sort((a, b) => a[0] - b[0])));
    if (n >= EXTREME_MIN_N && share >= EXTREME) {
      fail("G3", `${t} is gameable from position: ${Math.round(share * 100)}% on one option (n=${n}) ${shape}`);
    } else if (n >= CLUSTER_MIN_N && share > CLUSTER) {
      fail("G3", `${t} clusters on one option: ${Math.round(share * 100)}% (n=${n}) ${shape}`);
    }
  }
}

// ── G4 · structure + coverage ────────────────────────────────────────────────
{
  for (const it of items) {
    const p = it.payload;
    if (OBJECTIVE.includes(it.taskType as (typeof OBJECTIVE)[number])) {
      const qs = p.questions ?? [];
      const gaps = p.gaps ?? [];
      if (qs.length === 0 && gaps.length === 0) fail("G4", `${it.taskType} "${it.title}" has no questions or gaps`);
      for (const q of qs) {
        if (!q.stem) fail("G4", `question ${q.id} in "${it.title}" has no stem`);
        if (q.options) {
          if (q.options.length < 2) fail("G4", `question ${q.id} in "${it.title}" has < 2 options`);
          if (q.answer && !q.options.some((o) => o.id === q.answer)) {
            fail("G4", `answer "${q.answer}" for ${q.id} in "${it.title}" resolves to no option`);
          }
        }
        if (!q.answer) fail("G4", `question ${q.id} in "${it.title}" has no answer key`);
      }
      for (const g of gaps) if (!g.answer) fail("G4", `gap ${g.id} in "${it.title}" has no answer key`);
    }
    if (it.taskType === "LISTENING_PART_A" || it.taskType === "LISTENING_PART_B" || it.taskType === "LISTENING_PART_C") {
      if (!p.audioScript) fail("G4", `${it.taskType} "${it.title}" has no audioScript`);
    }
    if (AI_TASKS.includes(it.taskType as (typeof AI_TASKS)[number]) && !it.profession) {
      fail("G4", `${it.taskType} "${it.title}" has no profession — per-profession task`);
    }
  }
  for (const p of PROFS) {
    for (const t of AI_TASKS) {
      if (!items.some((i) => i.profession === p && i.taskType === t)) fail("G4", `no ${t} coverage for ${p}`);
    }
  }
}

// ── G5 audio ─────────────────────────────────────────────────────────────────
// A Listening item with no rendered file still plays — it just bills OpenAI on
// every single play. That is a cost regression that looks like success, so it
// fails the build rather than waiting to be noticed on an invoice. Fix by
// running `npm run audio:render` and committing the output.
{
  for (const it of items) {
    if (!it.taskType.startsWith("LISTENING")) continue;
    const payload = it.payload as { audioScript?: string; speakers?: { role: string; voice: string }[] };
    if (!payload.audioScript) {
      fail("G5", `${it.taskType} "${it.title}" has no audioScript`);
      continue;
    }
    const file = join(process.cwd(), AUDIO_DIR, audioFileName(audioKey(payload as { audioScript: string; speakers?: { role: string; voice: string }[] })));
    if (!existsSync(file)) {
      fail("G5", `"${it.title}" has no pre-rendered audio — run npm run audio:render`);
    }
  }
}

// ── report ───────────────────────────────────────────────────────────────────
// ── G6 · Speaking preparation time ───────────────────────────────────────────
// A criterion-4 defect, not a preference: every Speaking item shipped with
// prepSeconds = 60, giving a learner ONE minute where the exam gives two to
// three. Practice that misdescribes the test is worse than no practice, because
// the learner rehearses a tempo they will not meet on the day.
//
// THE SOURCE. OET's own Speaking page states candidates get
//
//     "2-3 minutes to prepare for each"
//
// role-play.  https://occupationalenglishtest.org/test-information/speaking/
//
// PROVENANCE, stated so nobody has to guess: that sentence comes from Nasir's
// dated re-read of the official site on 2026-08-31. It was NOT retrieved by this
// repo's tooling — the site answers 403 to automated fetches and never completes
// loading in an automated browser, so an unattended re-check is not possible.
// Re-verify by hand before treating these bounds as current.
//
// WHY 120 AND NOT 180. OET publishes a RANGE. 120 is inside it and is a condition
// a learner may actually face; 180 would train only for the easiest case. 60 was
// wrong because it sat OUTSIDE the range entirely.
//
// THE BOUNDS BELOW ARE HAND-TYPED LITERALS. They are never derived from the items
// this gate checks. A verifier that reads its expectation from its subject proves
// only that the subject agrees with itself — which was exactly as true when every
// item said 60.
const PREP_MIN_SECONDS = 120; // "2 minutes"
const PREP_MAX_SECONDS = 180; // "3 minutes"
{
  for (const it of items) {
    if (it.taskType !== "SPEAKING_ROLEPLAY") continue;
    const prep = (it.payload as { prepSeconds?: unknown }).prepSeconds;
    if (typeof prep !== "number" || !Number.isFinite(prep)) {
      fail("G6", `"${it.title}" has no numeric prepSeconds`);
      continue;
    }
    if (prep < PREP_MIN_SECONDS || prep > PREP_MAX_SECONDS) {
      fail(
        "G6",
        `"${it.title}" has prepSeconds ${prep}, outside OET's published ${PREP_MIN_SECONDS}-${PREP_MAX_SECONDS}s (2-3 minutes)`,
      );
    }
  }
}

const GATES = ["G1 item-id", "G2 floor", "G3 distribution", "G4 structure", "G5 audio", "G6 prep time"];
console.log(`[gates] ${items.length} seed items scanned`);
for (const g of GATES) {
  const hits = failures.filter((f) => f.startsWith(g.slice(0, 2)));
  console.log(`  ${hits.length === 0 ? "PASS" : "FAIL"}  ${g}${hits.length ? ` (${hits.length})` : ""}`);
}
if (failures.length) {
  console.error(`\n[gates] ${failures.length} breach(es):`);
  for (const f of failures.slice(0, 40)) console.error(`  ${f}`);
  if (failures.length > 40) console.error(`  … ${failures.length - 40} more`);
  console.error("\n[gates] BUILD BLOCKED.");
  process.exit(1);
}
console.log("[gates] all clear");
