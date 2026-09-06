/**
 * PUT THE HAND-CONDENSED READING PART A TEXTS INTO THE SEED SOURCE.
 *
 *   npx tsx scripts/content/apply-reading-a-condensed-2026-09-06.ts C:\Projects\_handoffs
 *   npx tsx scripts/content/apply-reading-a-condensed-2026-09-06.ts C:\Projects\_handoffs --write
 *
 * ── WHY THIS EXISTS AND WHY IT IS SO NARROW ─────────────────────────────────
 *
 * Sixteen Reading Part A items sat at 1012-1058 words against a law of 885-1009.
 * 🔴 THREE AUTOMATED PASSES HAD ALREADY TRIED TO FIX THEM, and each one measured
 * green — items inside the law, no answer lost, text balance fine — while
 * DELETING A CLINICAL SAFETY INSTRUCTION:
 *
 *     "Never use a speaking valve while the cuff is inflated"
 *     "Lie the patient flat with the legs raised"
 *     "In impaired awareness the first sign is confusion, with no warning stage"
 *     "A normal carbon dioxide level in a patient this unwell is not reassuring"
 *
 * The correct method was never a rule. It was condensing each sentence by hand,
 * and the owner did that: AlmiOET_ReadingPartA_condensed_2026-09-06.json.
 *
 * SO THIS SCRIPT DECIDES NOTHING. It carries sixteen items' four bodies from that
 * file into scripts/seed/gen, BYTE FOR BYTE. It does not re-wrap, re-flow,
 * re-punctuate, normalise a dash or trim a space. It refuses to run if the file
 * and the source disagree about how many texts an item has or about a single
 * heading — because a heading mismatch means the bodies are being written onto
 * the wrong text, and that is silent.
 *
 * ── HOW IT WRITES ───────────────────────────────────────────────────────────
 *
 * BY REPLACING ONE `"body": "…"` LINE AT A TIME, never by re-emitting the file.
 * The same discipline, for the same measured reasons, as
 * scripts/content/sync-gen-payloads-2026-09-06.ts: a JSON.stringify rebuild
 * silently deleted four comments living inside reading_c.ts's array, and a
 * split(/\r?\n/) rewrote 935 lines in a file with MIXED endings.
 *
 * So: lines are split on "\n" alone, every line keeps its own ending, and the
 * only bytes that change are between the quotes of a `"body"` value. Before a
 * line is touched, the value already on it is JSON.parse'd and compared to what
 * the seed source currently reports for that text — if they differ, the script
 * has found the wrong line and stops.
 *
 * ── AND IT PROVES ITSELF AFTERWARDS ─────────────────────────────────────────
 *
 * With --write it re-imports every gen module from disk and compares all 64
 * bodies to the file they came from, with ===. Any mismatch is reported and the
 * script exits 1. A rewrite that looks right is not a rewrite that is right.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { GEN_ITEMS } from "../seed/gen/index";

const WRITE = process.argv.includes("--write");
const VERIFY_ONLY = process.argv.includes("--verify-only");
// 🔴 THE FILE IS AN ARGUMENT, AND THE DEFAULT IS THE LATEST AUTHORITY.
// `AlmiOET_ReadingPartA_condensed_v3_2026-09-07.json` SUPERSEDES the 6 September
// file: two bodies differ and only two, both of them restoring a word the
// condensation had removed and something else was standing on -
//   sharps injury  "because of side effects"    -> "because of the side effects"
//   blood clots    "after the patient is home"  -> "after the patient has gone home"
// Pass --file=NAME to run an older one; the default is what should be applied.
const FILE =
  process.argv.find((a) => a.startsWith("--file="))?.slice("--file=".length) ??
  "AlmiOET_ReadingPartA_condensed_v3_2026-09-07.json";

// A function DECLARATION, not a const arrow: TypeScript narrows on a `never`
// return only for a declaration or an explicitly typed variable, and without
// that narrowing every `if (!item) die(...)` below leaves `item` possibly
// undefined.
function die(msg: string): never {
  console.error(`\n[reading-a-condensed] 🔴 ${msg}\n`);
  process.exit(1);
}

const dir = process.argv[2];
if (!dir || dir.startsWith("--")) die(`give the directory holding ${FILE} as the first argument`);

type Row = { slug: string; texts: { heading: string; body: string }[] };
const rows = JSON.parse(readFileSync(join(dir, FILE), "utf8")) as Row[];
if (!Array.isArray(rows) || rows.length === 0) die(`${FILE} is not a non-empty array`);

const GEN_DIR = join(import.meta.dirname, "..", "seed", "gen");

// ── what the source says today, read through the same import the gates use ──
type Text = { id?: string; heading?: string; body?: string };
type Item = { taskType: string; slug: string; title: string; payload: { texts?: Text[] } };
const ITEMS = GEN_ITEMS as unknown as Item[];
const bySlug = new Map(ITEMS.map((i) => [i.slug, i]));

// ── the check that has to pass BEFORE a byte moves ──────────────────────────
//
// Population first: a run that matched nothing would report a clean sweep of an
// empty set.
let planned = 0;
for (const row of rows) {
  const item = bySlug.get(row.slug);
  if (!item) die(`the seed source has no item with slug "${row.slug}"`);
  if (item.taskType !== "READING_PART_A") {
    die(`"${row.slug}" is ${item.taskType}, not READING_PART_A`);
  }
  const texts = item.payload.texts ?? [];
  if (texts.length !== row.texts.length) {
    die(`"${row.slug}": the source has ${texts.length} texts, the file has ${row.texts.length}`);
  }
  for (let i = 0; i < texts.length; i++) {
    if ((texts[i].heading ?? "") !== row.texts[i].heading) {
      die(
        `"${row.slug}" text ${i + 1}: the headings do not match, so the bodies would be ` +
          `written onto the wrong text.\n     source ${JSON.stringify(texts[i].heading)}\n` +
          `     file   ${JSON.stringify(row.texts[i].heading)}`,
      );
    }
    planned += 1;
  }
}
if (planned === 0) die("nothing to write — the file named no text at all");

// ── locate every slug in exactly one module ─────────────────────────────────
const files = readdirSync(GEN_DIR).filter((f) => f.endsWith(".ts") && !f.startsWith("_") && f !== "index.ts");
const sourceOf = new Map<string, string>(files.map((f) => [f, readFileSync(join(GEN_DIR, f), "utf8")]));
const fileForSlug = new Map<string, string>();
for (const row of rows) {
  const hits = files.filter((f) => sourceOf.get(f)!.includes(`"slug": "${row.slug}"`));
  if (hits.length !== 1) die(`"${row.slug}" is in ${hits.length} gen module(s), need exactly 1`);
  fileForSlug.set(row.slug, hits[0]);
}

/** Split keeping each line's own ending, so a file with mixed endings survives. */
const linesOf = (s: string): string[] => s.split("\n").map((l, i, a) => (i < a.length - 1 ? l + "\n" : l));
const BODY = /^(\s*"body":\s*)("(?:[^"\\]|\\.)*")(.*)$/;

let written = 0;
let unchanged = 0;
const touched = new Map<string, string[]>();

for (const row of rows) {
  const file = fileForSlug.get(row.slug)!;
  const lines = touched.get(file) ?? linesOf(sourceOf.get(file)!);
  touched.set(file, lines);

  const start = lines.findIndex((l) => l.includes(`"slug": "${row.slug}"`));
  if (start < 0) die(`"${row.slug}" vanished from ${file} between two reads`);
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    if (/^\s*"slug":\s*"/.test(lines[i])) { end = i; break; }
  }

  const item = bySlug.get(row.slug)!;
  const texts = item.payload.texts ?? [];
  const bodyLines: number[] = [];
  for (let i = start; i < end; i++) if (BODY.test(lines[i].replace(/\r?\n$/, ""))) bodyLines.push(i);
  if (bodyLines.length !== texts.length) {
    die(`"${row.slug}" in ${file}: found ${bodyLines.length} body line(s), the item has ${texts.length} texts`);
  }

  for (let i = 0; i < bodyLines.length; i++) {
    const idx = bodyLines[i];
    const ending = /\r\n$/.test(lines[idx]) ? "\r\n" : /\n$/.test(lines[idx]) ? "\n" : "";
    const bare = lines[idx].slice(0, lines[idx].length - ending.length);
    const m = BODY.exec(bare)!;
    // 🔴 The line must already hold the body the import reports for this text.
    // Anything else means the line was located wrongly, and a wrongly located
    // line is how the last three passes deleted a safety instruction.
    const onDisk = JSON.parse(m[2]) as string;
    if (onDisk !== (texts[i].body ?? "")) {
      die(`"${row.slug}" text ${i + 1} in ${file}: the line found does not carry this text's body`);
    }
    if (onDisk === row.texts[i].body) { unchanged += 1; continue; }
    lines[idx] = m[1] + JSON.stringify(row.texts[i].body) + m[3] + ending;
    written += 1;
  }
}

// ── --verify-only · run in a FRESH process after the write, see the bottom ──
if (VERIFY_ONLY) {
  const bad: string[] = [];
  let checked = 0;
  for (const row of rows) {
    const item = bySlug.get(row.slug)!;
    const texts = item.payload.texts ?? [];
    for (let i = 0; i < row.texts.length; i++) {
      checked += 1;
      if ((texts[i]?.heading ?? "") !== row.texts[i].heading) bad.push(`${row.slug} text ${i + 1}: heading changed`);
      if ((texts[i]?.body ?? "") !== row.texts[i].body) bad.push(`${row.slug} text ${i + 1}: body is NOT what the file says`);
    }
  }
  if (checked !== planned) bad.push(`re-read ${checked} texts, expected ${planned}`);
  if (bad.length > 0) {
    console.error(`[reading-a-condensed] 🔴 ${bad.length} mismatch(es) on disk:`);
    for (const b of bad) console.error(`  ${b}`);
    process.exit(1);
  }
  console.log(`[reading-a-condensed] verified in a fresh process: ${checked} text(s), every heading and body byte-identical to ${FILE}`);
  process.exit(0);
}

console.log(`[reading-a-condensed] ${rows.length} item(s), ${planned} text(s): ${written} to replace, ${unchanged} already identical`);

if (!WRITE) {
  console.log("[reading-a-condensed] dry run — nothing written. Re-run with --write.");
  process.exit(0);
}

for (const [file, lines] of touched) writeFileSync(join(GEN_DIR, file), lines.join(""), "utf8");
console.log(`[reading-a-condensed] wrote ${touched.size} module(s): ${[...touched.keys()].join(", ")}`);

// ── prove it, from disk, IN A FRESH PROCESS ─────────────────────────────────
//
// 🔴 THE OBVIOUS VERSION OF THIS CHECK IS VACUOUS AND WAS SEEN TO BE.
// `await import("../seed/gen/index")` after writing returns the module ALREADY
// IN THIS PROCESS'S CACHE — the one imported at the top, before a byte moved. It
// reported all 63 bodies as "NOT what the file says" while the files on disk were
// byte-perfect, and it would just as happily have reported success over a failed
// write. The module cache does not reload because the file changed.
//
// So the proof runs where nothing is cached: this same script, re-invoked with
// --verify-only, importing scripts/seed/gen for the first time in a new process.
void (async () => {
  const { execFileSync } = await import("node:child_process");
  const self = fileURLToPath(import.meta.url);
  try {
    // shell:true because on Windows the runner is npx.CMD and execFile cannot
    // spawn a batch file directly — it fails with ENOENT and no output at all,
    // which reads exactly like a failed verification.
    const out = execFileSync(`npx tsx "${self}" "${dir}" --verify-only`, {
      encoding: "utf8",
      shell: true,
      stdio: ["ignore", "pipe", "inherit"],
    });
    process.stdout.write(out);
  } catch {
    die("the fresh-process verification failed — see above. The write is NOT proven.");
  }
})();
