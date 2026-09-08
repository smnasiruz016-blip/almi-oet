/**
 * BULLET THE MEDICATION LISTS IN SIX PHARMACY CASE NOTES.
 *
 *   npx tsx scripts/content/bullet-medication-lists-2026-09-07.ts
 *   npx tsx scripts/content/bullet-medication-lists-2026-09-07.ts --write
 *
 * ── WHY, AND WHY IT IS CONTENT AND NOT THE RULE ─────────────────────────────
 *
 * gate:wraps reported 8 breaks, every one of them in a Pharmacy Writing case
 * note, and every one the same shape: a medication list written one drug per
 * line, the line at or over the author's 80-character wrap column, no terminal
 * punctuation, and the next line starting with a lowercase drug name.
 * scripts/wrap-rule.ts exempts a line that starts a labelled field or a bullet.
 * `omeprazole 20 mg daily — started 26 July 2026` is neither, so the rule reads
 * the list as prose. IT IS NOT WRONG TO DO SO.
 *
 * 🔴 THE OWNER'S RULING, 7 SEPTEMBER 2026, AND THE REASON MATTERS MORE THAN THE
 * FIX. Teaching the rule that "a line beginning a new medication entry is
 * structure" would require the rule to recognise drug names — a heuristic about
 * content, inside a gate. That is the disease of the whole night: a pattern that
 * is right most of the time, trusted as exact. `out` ≈ `outer` on three shared
 * letters; `hours` → `hors` from a suffix rule with no dictionary behind it; `no`
 * as a substring of a 5,000-character run. So the rule does not move. The content
 * says what it is: real case notes are written as lists, and a bullet says so.
 *
 * ── WHAT IT TOUCHES, AND WHAT IT REFUSES TO ─────────────────────────────────
 *
 * Only the blocks named in BLOCKS below, by hand. Five of the six items head
 * their list `Current medications:`; the sixth splits its drugs across two
 * headings, which is exactly why the header is not guessed at. Each line in a
 * named block gains "- " and NOTHING ELSE — no rewording, no re-punctuation, no
 * reflowing, and every byte outside those lines is untouched.
 *
 * ⚠️ ONE BLOCK IS DELIBERATELY LEFT ALONE: "New prescription received:" in the
 * SSRI item holds a single medication. It is not a list the rule can misread, and
 * the instruction was to change nothing else. It is reported rather than edited,
 * so the choice is the owner's and not this script's.
 *
 * ── THE SAFETY CONDITION ────────────────────────────────────────────────────
 *
 * WRITING_LETTER case notes are governed by gate:length at 280-470 words. This
 * script prints the count for every item before and after and REFUSES TO WRITE if
 * any item would leave the law — one gate is not traded for another. (A bullet
 * costs no words: scripts/gates/words.ts counts only tokens containing a letter
 * or a digit, and "-" contains neither. The count is measured anyway, because a
 * reasoned zero is not a measured zero.)
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { GEN_ITEMS } from "../seed/gen/index";
import { words } from "../gates/words";

const WRITE = process.argv.includes("--write");
const VERIFY_ONLY = process.argv.includes("--verify-only");

function die(msg: string): never {
  console.error(`\n[bullet-medications] 🔴 ${msg}\n`);
  process.exit(1);
}

/** slug -> the exact heading lines whose block is a medication list. Hand-written. */
const BLOCKS: { slug: string; headings: string[] }[] = [
  { slug: "wri-pharmacy-clopidogrel-and-omeprazole-interaction-concern", headings: ["Current medications:"] },
  { slug: "wri-pharmacy-gentamicin-level-handover-at-hospital-discharge", headings: ["Current medications:"] },
  { slug: "wri-pharmacy-new-prescription-duplication-of-two-ssris", headings: ["Existing repeat from the practice:"] },
  { slug: "wri-pharmacy-poor-inhaler-adherence-and-technique-referral", headings: ["Current medications:"] },
  { slug: "wri-pharmacy-suspected-adverse-skin-reaction-to-lamotrigine", headings: ["Current medications:"] },
  { slug: "wri-pharmacy-suspected-statin-induced-myalgia-review", headings: ["Current medications:"] },
];

type Item = { taskType: string; slug: string; title: string; payload: { caseNotes?: string } };
const ITEMS = GEN_ITEMS as unknown as Item[];
const bySlug = new Map(ITEMS.map((i) => [i.slug, i]));
const LAW = { min: 280, max: 470 };

/** the lines of a named block: from the heading to the next blank line */
function blockLines(notes: string[], heading: string, slug: string): [number, number] {
  const h = notes.findIndex((l) => l.trim() === heading);
  if (h < 0) die(`"${slug}" has no line reading ${JSON.stringify(heading)}`);
  let end = h + 1;
  while (end < notes.length && notes[end].trim() !== "") end += 1;
  if (end === h + 1) die(`"${slug}": the block under ${JSON.stringify(heading)} is empty`);
  return [h + 1, end];
}

// ── --verify-only, run in a FRESH process after the write ───────────────────
if (VERIFY_ONLY) {
  const bad: string[] = [];
  for (const b of BLOCKS) {
    const item = bySlug.get(b.slug);
    if (!item) { bad.push(`${b.slug}: gone`); continue; }
    const notes = (item.payload.caseNotes ?? "").split("\n");
    for (const h of b.headings) {
      const [from, to] = blockLines(notes, h, b.slug);
      for (let i = from; i < to; i++) {
        if (!/^- \S/.test(notes[i])) bad.push(`${b.slug} line ${i} is not bulleted: ${JSON.stringify(notes[i].slice(0, 40))}`);
      }
    }
    const n = words(item.payload.caseNotes);
    if (n < LAW.min || n > LAW.max) bad.push(`${b.slug}: ${n} words, outside ${LAW.min}-${LAW.max}`);
  }
  if (bad.length > 0) {
    console.error(`[bullet-medications] 🔴 ${bad.length} problem(s) on disk:`);
    for (const x of bad) console.error(`  ${x}`);
    process.exit(1);
  }
  console.log(`[bullet-medications] verified in a fresh process: every named medication line is bulleted, every item inside ${LAW.min}-${LAW.max} words`);
  process.exit(0);
}

// ── plan, and measure the word count on both sides before writing anything ──
const plan: { slug: string; before: number; after: number; lines: number }[] = [];
for (const b of BLOCKS) {
  const item = bySlug.get(b.slug);
  if (!item) die(`the seed source has no item with slug "${b.slug}"`);
  if (item.taskType !== "WRITING_LETTER") die(`"${b.slug}" is ${item.taskType}, not WRITING_LETTER`);
  const notes = (item.payload.caseNotes ?? "").split("\n");
  const before = words(item.payload.caseNotes);
  let changed = 0;
  const after = [...notes];
  for (const h of b.headings) {
    const [from, to] = blockLines(notes, h, b.slug);
    for (let i = from; i < to; i++) {
      if (/^\s*[-•*]/.test(after[i])) continue; // already a bullet
      after[i] = `- ${after[i]}`;
      changed += 1;
    }
  }
  plan.push({ slug: b.slug, before, after: words(after.join("\n")), lines: changed });
}
console.log(`[bullet-medications] ${plan.length} item(s), law ${LAW.min}-${LAW.max} words`);
for (const p of plan) {
  console.log(`  ${p.slug.padEnd(60)} ${p.lines} line(s)  ${p.before} -> ${p.after} words`);
}
const outside = plan.filter((p) => p.after < LAW.min || p.after > LAW.max);
if (outside.length > 0) {
  for (const p of outside) console.error(`  🔴 ${p.slug} would be ${p.after} words`);
  die("an item would leave the length law — one gate is not traded for another");
}
if (plan.every((p) => p.lines === 0)) {
  console.log("[bullet-medications] every named line is already bulleted — nothing to do.");
  process.exit(0);
}

if (!WRITE) {
  console.log("[bullet-medications] dry run — nothing written. Re-run with --write.");
  process.exit(0);
}

// ── write, in place, line by line ───────────────────────────────────────────
//
// Lines are split on "\n" alone so each keeps its own ending, and the only bytes
// that change are the two added at the start of a named line. Same discipline as
// the other content appliers, for the same measured reasons.
const GEN_DIR = join(import.meta.dirname, "..", "seed", "gen");
const files = ["writing_pharmacy.ts", "writing_sets.ts"];
let written = 0;
for (const file of files) {
  const path = join(GEN_DIR, file);
  let text: string;
  try { text = readFileSync(path, "utf8"); } catch { continue; }
  const lines = text.split("\n").map((l, i, a) => (i < a.length - 1 ? l + "\n" : l));
  let touched = false;
  for (const b of BLOCKS) {
    const s = lines.findIndex((l) => l.includes(`"slug": "${b.slug}"`));
    if (s < 0) continue;
    let end = lines.length;
    for (let i = s + 1; i < lines.length; i++) if (/^\s*"slug":\s*"/.test(lines[i])) { end = i; break; }
    const idx = lines.findIndex((l, i) => i > s && i < end && /^\s*"caseNotes":\s*"/.test(l));
    if (idx < 0) die(`"${b.slug}" has no caseNotes line in ${file}`);
    const ending = /\r\n$/.test(lines[idx]) ? "\r\n" : /\n$/.test(lines[idx]) ? "\n" : "";
    const bare = lines[idx].slice(0, lines[idx].length - ending.length);
    const m = /^(\s*"caseNotes":\s*)("(?:[^"\\]|\\.)*")(.*)$/.exec(bare);
    if (!m) die(`"${b.slug}": the caseNotes line in ${file} is not a single JSON string`);
    const notes = (JSON.parse(m[2]) as string).split("\n");
    for (const h of b.headings) {
      const [from, to] = blockLines(notes, h, b.slug);
      for (let i = from; i < to; i++) {
        if (/^\s*[-•*]/.test(notes[i])) continue;
        notes[i] = `- ${notes[i]}`;
        written += 1;
      }
    }
    lines[idx] = m[1] + JSON.stringify(notes.join("\n")) + m[3] + ending;
    touched = true;
  }
  if (touched) writeFileSync(path, lines.join(""), "utf8");
}
console.log(`[bullet-medications] ${written} medication line(s) bulleted`);

void (async () => {
  const { execFileSync } = await import("node:child_process");
  const self = fileURLToPath(import.meta.url);
  try {
    process.stdout.write(
      execFileSync(`npx tsx "${self}" --verify-only`, { encoding: "utf8", shell: true, stdio: ["ignore", "pipe", "inherit"] }),
    );
  } catch {
    die("the fresh-process verification failed — see above. The write is NOT proven.");
  }
})();
