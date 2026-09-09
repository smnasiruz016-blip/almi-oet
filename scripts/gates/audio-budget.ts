/**
 * LISTENING AUDIO BUDGET GATE — `npm run gate:audio-budget` (exit 1 on breach).
 *
 * WHAT gate:audio ALREADY DID, AND WHY IT WAS NOT ENOUGH.
 *
 * gate:audio opens every file and reads what is inside it: that it is real MP3,
 * the right encoding, long enough, not silence, does not speak a label, lasts as
 * long as the exam's audio lasts. Seven checks, all of them about ONE file.
 *
 * NOTHING MEASURED HOW MUCH THERE IS ALTOGETHER. On 9 September 2026 that cost
 * a day of production:
 *
 *   · #109 re-rendered all 194 Listening items at AUDIO_LENGTH_SCALE 1.5. The
 *     filename is a content hash, so a re-render WRITES NEW FILES BESIDE THE OLD
 *     ONES — it does not replace them. audio/oet went 194 -> 511 files,
 *     152 -> 311 MiB, and nothing anywhere said a word about it.
 *   · next.config.ts traces "./audio/oet" whole into /api/oet/audio/[attemptId],
 *     because the files are paid content served through an ownership-scoped
 *     route rather than from public/. So every byte in this directory is carried
 *     into that function's deployed bundle.
 *   · Vercel refused it, in these words, on both the Preview
 *     (dpl_CUjCCzghEPVRHST1rZ7e3q5qqeve) and the Production build
 *     (dpl_CuLK4dLb6EfDAf5yC1ui9FGDz7x1):
 *
 *       The Vercel Function "api/oet/audio/[attemptId]" is 401.68mb uncompressed
 *       which exceeds the maximum uncompressed size limit of 250mb.
 *
 *   · Every gate was green. gate:audio printed "317 orphan file(s)" as
 *     INFORMATION and passed. The merge succeeded, the deploy did not, and
 *     production served the previous commit for hours while every student kept
 *     hearing the fast audio the re-render was meant to fix.
 *
 * A size that is only ever reported is a size nobody is measuring.
 *
 * ── B1 · THE BYTE CEILING, AND WHERE THE NUMBER COMES FROM ──────────────────
 *
 * The budget is derived from the platform limit downwards, not from today's
 * directory upwards. Every term is measured, and dated:
 *
 *   250 MiB   the limit Vercel enforces, quoted verbatim above. It applies to
 *             the UNCOMPRESSED function, and it is per function.
 *  - 95 MiB   reserved for everything in that function that is NOT audio: the
 *             route, Next's runtime, and above all the Prisma client and its
 *             query engine. MEASURED, 9 September 2026: the build Vercel refused
 *             reported 401.68 MiB for a tree whose audio/oet held 311.16 MiB, so
 *             the non-audio share of this function was 90.52 MiB. The reserve is
 *             that measurement plus ~4.5 MiB, because it grows on a dependency
 *             bump and shrinks on nothing, and a content author has no way to
 *             see it move.
 *  = 155 MiB  what audio/oet may hold.
 *
 * 🔴 AND 155 MiB IS NOT ROOM. TODAY'S DIRECTORY IS 152.02 MiB — 98% OF IT.
 *
 * That is stated here rather than hidden behind a comfortable-looking constant,
 * because the arithmetic above allows no better number: with a 250 MiB ceiling
 * and 90.52 MiB of runtime, the absolute most audio could ever be is 159.5 MiB,
 * and we are 7.5 MiB under that. There is no limit that both passes today and
 * leaves real headroom. THE HEADROOM HAS TO COME FROM SOMEWHERE ELSE — from the
 * audio no longer shipping inside the function at all. Until that happens this
 * gate is not a budget with slack in it; it is an alarm bolted to a wall we are
 * already touching, and its value is that it rings HERE, in a second, with this
 * explanation, instead of hours later in a deploy log nobody reads.
 *
 * ⚠️ IF THE CEILING MOVES, THIS CONSTANT MOVES BY HAND. Vercel's own message
 * says the project is eligible for a large-functions beta that raises the limit
 * to 5 GB via VERCEL_SUPPORT_LARGE_FUNCTIONS. That is a decision made in the
 * dashboard, not in this file, and if it is ever taken, FUNCTION_LIMIT_MIB and
 * the reserve are re-measured and re-typed here, in the same edit, with the new
 * evidence — never quietly widened to make a red gate green.
 *
 * ── B2 · ZERO ORPHANS, AND WHY THAT IS THE CHECK THAT MATTERS ───────────────
 *
 * B1 measures the symptom. B2 measures the cause. An orphan is a file whose key
 * no live item computes: nobody can reach it, no lesson uses it, and it is
 * carried into the bundle for the rest of its life. 317 of them are what took
 * this function from 242 MiB to 401 MiB, and every one arrived in a single
 * commit that read as an improvement.
 *
 * gate:audio counts them and passes. Here they fail. The fix is one command and
 * the message names it. Zero is the only defensible tolerance: an orphan has no
 * legitimate reason to sit in a directory that is traced into a function whole.
 *
 * ⚠️ WHAT THIS GATE DOES NOT PROVE. It measures the bytes in this repo, not the
 * bundle Vercel builds. The reserve is a measurement of one build on one day; if
 * the non-audio side grows past 95 MiB this gate will still be green while the
 * deploy fails. The number that settles it is the one in the deploy log, and it
 * is read AFTER the merge, on the deployment, not on the merge.
 */
import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { GEN_ITEMS } from "../seed/gen/index";
import { AUDIO_DIR, audioFileName, audioKey } from "../../src/lib/oet/audio";

/** Vercel's enforced ceiling for ONE uncompressed function bundle. Quoted from
 *  the build that was refused; see the header. Not read from anywhere — if the
 *  platform changes it, this line changes by hand. */
const FUNCTION_LIMIT_MIB = 250;

/** Measured non-audio share of this function on 9 September 2026 (90.52 MiB),
 *  plus a small allowance for it growing under us. See the header. */
const RUNTIME_RESERVE_MIB = 95;

const AUDIO_BUDGET_MIB = FUNCTION_LIMIT_MIB - RUNTIME_RESERVE_MIB;
const MIB = 1024 * 1024;
const AUDIO_BUDGET_BYTES = AUDIO_BUDGET_MIB * MIB;

/** Every byte under AUDIO_DIR, recursively — because next.config.ts traces the
 *  whole directory and the tracer does not care what a file is called. The
 *  manifest counts. A stray .wav counts. A forgotten backup counts. */
function walk(dir: string): { path: string; name: string; size: number }[] {
  const out: { path: string; name: string; size: number }[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push({ path: p, name: entry.name, size: statSync(p).size });
  }
  return out;
}

const mib = (bytes: number) => (bytes / MIB).toFixed(2);
const failures: string[] = [];
const fail = (gate: string, msg: string) => failures.push(`${gate}  ${msg}`);

const dir = join(process.cwd(), AUDIO_DIR);
if (!existsSync(dir)) {
  console.error(
    `[gate:audio-budget] ${AUDIO_DIR} does not exist — there is nothing to measure, ` +
      "and a gate over nothing is not a gate. Has the directory moved?",
  );
  process.exit(1);
}

const files = walk(dir);
const totalBytes = files.reduce((n, f) => n + f.size, 0);

// Population before the guard: an empty directory would sail under any budget
// while every Listening item was broken. gate:audio's A1 catches that too, but
// this gate must not report "all clear" over nothing.
if (files.length === 0) {
  fail("B1", `${AUDIO_DIR} is EMPTY — 0 bytes is under every budget and under every student's feet`);
}

// ── B1 · the ceiling ────────────────────────────────────────────────────────
if (totalBytes > AUDIO_BUDGET_BYTES) {
  fail(
    "B1",
    `${AUDIO_DIR} holds ${mib(totalBytes)} MiB across ${files.length} file(s); the budget is ` +
      `${AUDIO_BUDGET_MIB} MiB (${FUNCTION_LIMIT_MIB} MiB function limit minus ${RUNTIME_RESERVE_MIB} MiB ` +
      `reserved for the runtime). Over by ${mib(totalBytes - AUDIO_BUDGET_BYTES)} MiB. ` +
      "This directory is traced whole into /api/oet/audio/[attemptId] by next.config.ts, so this " +
      "is not disk housekeeping — past the limit NOTHING DEPLOYS, and the merge still succeeds. " +
      "Start with: npx tsx scripts/prune-orphan-audio.mts --dry",
  );
}

// ── B2 · zero orphans ───────────────────────────────────────────────────────
const claimed = new Set<string>();
for (const it of GEN_ITEMS as { taskType: string; payload: { audioScript?: string } }[]) {
  if (!it.taskType.startsWith("LISTENING") || !it.payload?.audioScript) continue;
  claimed.add(audioFileName(audioKey(it.payload as never)));
}
if (claimed.size === 0) {
  fail(
    "B2",
    "no item claims any audio file — every file would look like an orphan, so this check would be " +
      "measuring a broken key function, not the directory",
  );
}

const mp3s = files.filter((f) => f.name.endsWith(".mp3"));
const orphans = claimed.size === 0 ? [] : mp3s.filter((f) => !claimed.has(f.name));
const orphanBytes = orphans.reduce((n, f) => n + f.size, 0);
if (orphans.length > 0) {
  fail(
    "B2",
    `${orphans.length} orphan file(s) holding ${mib(orphanBytes)} MiB — no live item computes their ` +
      "key, so no student can ever reach them, and every one is carried into the deployed function. " +
      "A re-render writes new names beside the old ones; it does not replace them. First few: " +
      `${orphans.slice(0, 5).map((f) => f.name).join(", ")}${orphans.length > 5 ? ", ..." : ""}. ` +
      "Fix: npx tsx scripts/prune-orphan-audio.mts",
  );
}

// ── report ──────────────────────────────────────────────────────────────────
const used = totalBytes / AUDIO_BUDGET_BYTES;
const spare = AUDIO_BUDGET_BYTES - totalBytes;
const meanItem = mp3s.length ? mp3s.reduce((n, f) => n + f.size, 0) / mp3s.length : 0;
console.log(
  `[gate:audio-budget] ${AUDIO_DIR}: ${files.length} file(s), ${mib(totalBytes)} MiB of a ` +
    `${AUDIO_BUDGET_MIB} MiB budget (${(used * 100).toFixed(1)}% used)`,
);
console.log(
  `  budget = ${FUNCTION_LIMIT_MIB} MiB Vercel function limit - ${RUNTIME_RESERVE_MIB} MiB runtime reserve`,
);
if (spare > 0 && meanItem > 0) {
  console.log(
    `  ${mib(spare)} MiB spare — about ${Math.floor(spare / meanItem)} more item(s) at the current mean ` +
      `of ${mib(meanItem)} MiB each`,
  );
}
console.log(`  ${orphans.length} orphan file(s)`);
for (const g of ["B1 total bytes under budget", "B2 no orphan files"]) {
  const hits = failures.filter((f) => f.startsWith(g.slice(0, 2)));
  console.log(`  ${hits.length === 0 ? "PASS" : "FAIL"}  ${g}${hits.length ? ` (${hits.length})` : ""}`);
}
if (failures.length) {
  console.error(`\n[gate:audio-budget] ${failures.length} breach(es):`);
  for (const f of failures) console.error(`  ${f}`);
  console.error(
    "\n[gate:audio-budget] BUILD BLOCKED — and blocked HERE is the point: past the limit the merge " +
      "still goes green and only the deploy fails.",
  );
  process.exit(1);
}
console.log("[gate:audio-budget] all clear — the audio fits the function it ships inside");
