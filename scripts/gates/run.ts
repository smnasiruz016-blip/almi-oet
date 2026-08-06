/**
 * BUILD GATES — run before `next build`, hard-fail on any breach (exit 1).
 *
 * These run over the SEED SOURCE (scripts/seed/gen), not the database, and that is
 * deliberate: `build` no longer touches the DB at all, so a gate that queried Neon
 * would re-couple the two and fail a build whenever the database blinked. The seed
 * source is what this repo can actually promise about.
 *
 * KNOWN LIMIT, stated rather than hidden: prod currently holds MORE items than the
 * seed source (450 vs 390 at the time of writing), so passing these gates does not
 * prove the served bank is clean — only that what ships FROM THIS REPO is. Closing
 * that gap means reconciling source with prod; until then the served floor is
 * checked separately at boot.
 *
 *   G1 item-id       — identity is unique and resolvable
 *   G2 floor         — >= 15 per task type, and per profession for Writing/Speaking
 *   G3 distribution  — no MCQ part gameable from answer position
 *   G4 structure     — payload shape valid per task type; all 12 professions covered
 *   G5 audio         — every Listening script has pre-rendered audio committed
 *   G6 redirect-map  — the precomputed emitted-page list matches what the gate emits
 *   G7 index-state   — no page changed indexability without a committed snapshot
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { GEN_ITEMS } from "../seed/gen/index";
import { AUDIO_DIR, audioFileName, audioKey } from "../../src/lib/oet/audio";
import { isCurrent, OUT } from "../gen-emitted";
import { indexStateIsCurrent, indexStateDrift, INDEX_STATE_OUT } from "../gen-index-state";

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

// ── G6 · redirect map is current ─────────────────────────────────────────────
// The middleware 301s ~239,705 pruned URLs using a PRECOMPUTED list of the pages
// the pSEO gate emits. If that list goes stale, every one of those redirects
// points at a page that no longer exists — a 301 into a 404, which is worse for
// the pruned URLs than having left them alone. So the build refuses to ship a
// map that disagrees with the gate.
{
  if (!isCurrent()) {
    fail("G6", `${OUT.replace(process.cwd(), ".")} is stale — run: npx tsx scripts/gen-emitted.ts`);
  }
}

// ── G7 · indexability has not drifted ────────────────────────────────────────
// G6 cannot catch this. emitted.generated.json UNIONS indexed and noindexed
// pages, because the redirect map only needs to know a page exists — so a page
// moving between the two changes that file by zero bytes. When the currency gate
// moved three corridors into the sitemap and later a fourth, G6 stayed green
// throughout, and a green G6 was being read as "nothing moved".
//
// Sitemap membership is the state that actually reaches Google: dropping out
// loses a page its traffic, entering publishes a claim that may not have been
// re-read. Neither is visible in a build log. So it gets its own snapshot, and
// changing it has to be a committed decision rather than a side effect.
{
  if (!indexStateIsCurrent()) {
    const drift = indexStateDrift();
    fail(
      "G7",
      `${INDEX_STATE_OUT.replace(process.cwd(), ".")} is stale — run: npx tsx scripts/gen-index-state.ts`,
    );
    for (const d of drift.slice(0, 20)) fail("G7", `  ${d}`);
    if (drift.length > 20) fail("G7", `  … ${drift.length - 20} more`);
  }
}

// ── report ───────────────────────────────────────────────────────────────────
const GATES = ["G1 item-id", "G2 floor", "G3 distribution", "G4 structure", "G5 audio", "G6 redirect-map", "G7 index-state"];
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
