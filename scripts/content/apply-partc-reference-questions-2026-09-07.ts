/**
 * APPLY THE OWNER'S FOUR REPLACEMENT QUESTIONS, ONE MARKER AND ONE DISTRACTOR FIX.
 *
 *   npx tsx scripts/content/apply-partc-reference-questions-2026-09-07.ts
 *   npx tsx scripts/content/apply-partc-reference-questions-2026-09-07.ts --write
 *
 * Reads AlmiOET_PartC_reference_questions_2026-09-07.json and decides nothing.
 *
 * ── THREE DIFFERENT THINGS, AND THE DIFFERENCE IS THE POINT ─────────────────
 *
 * A1 · FOUR REPLACEMENTS, NEVER ADDITIONS. Eight questions per item stays eight.
 *      The stem, options and answer are replaced wholesale; the question KEEPS ITS
 *      ID and its position in the array, and nothing is renumbered. Each gains
 *      kind ["reference"] in the same commit, because a reference question with no
 *      marker is the same silence this gate exists to break.
 *
 * A2 · ONE MARKER, NO CONTENT CHANGE. `rea-c-the-quiet-costs-of-finding-more` q5
 *      already asks what a metaphor refers to and its key is what the columns
 *      stand for. It was a reference question all along; the marker script missed
 *      it because "columns" was not in its noun list. So the marker is awarded and
 *      THE STEM, OPTIONS AND ANSWER ARE NOT TOUCHED. This script refuses to write
 *      if they differ from what is on disk.
 *
 * A3 · A DEAD OPTION, NOT A LENGTH. `lis-b-f3-sharps-bins` q1 measured 2.00x on
 *      D2. The cause was not the key's length: "faulty needles" named a hazard the
 *      extract never mentions, so nobody would choose it — Master Standard §C, no
 *      dead option. Two distractors are replaced with hazards the extract itself
 *      warns about. THE AUDIO IS NOT TOUCHED and nothing is re-rendered.
 *
 * ── HOW IT WRITES ───────────────────────────────────────────────────────────
 *
 * In place, replacing the lines of one question object, never re-emitting the
 * file: lines split on "\n" alone so each keeps its own ending, and an inserted
 * line copies the ending of the line it follows. The same discipline as every
 * other applier here, for the same measured reasons — a JSON.stringify rebuild
 * once deleted four comments inside reading_c.ts, and a split(/\r?\n/) rewrote 935
 * lines of a file with mixed endings.
 *
 * With --write it re-reads everything IN A FRESH PROCESS (--verify-only): the
 * obvious in-process check returns the module already in this process's cache and
 * would report a perfect write as broken, or a broken one as perfect.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { GEN_ITEMS } from "../seed/gen/index";

const WRITE = process.argv.includes("--write");
const VERIFY_ONLY = process.argv.includes("--verify-only");
const FILE = "AlmiOET_PartC_reference_questions_2026-09-07.json";
const SRC = process.env.READING_SOURCE_DIR ?? "C:\\Projects\\_handoffs";

function die(msg: string): never {
  console.error(`\n[partc-reference] 🔴 ${msg}\n`);
  process.exit(1);
}

type Opt = { id: string; text: string };
type Q = { id: string; stem: string; answer: string; options?: Opt[]; kind?: string[] };
type Item = { taskType: string; slug: string; title: string; payload: { questions?: Q[] } };
const ITEMS = GEN_ITEMS as unknown as Item[];
const bySlug = new Map(ITEMS.map((i) => [i.slug, i]));

type Data = {
  replacements: { slug: string; replaces: string; question: Q }[];
  markerOnly: Record<string, Record<string, string[] | string>>;
  distractorFix: Record<string, { id: string; answer: string; options: Opt[] }>;
};
const D = JSON.parse(readFileSync(join(SRC, FILE), "utf8")) as Data;

const KINDS = ["paragraph", "reference", "writer"];

// ── --verify-only, in a FRESH process ───────────────────────────────────────
if (VERIFY_ONLY) {
  const bad: string[] = [];
  for (const r of D.replacements) {
    const it = bySlug.get(r.slug);
    const q = it?.payload.questions?.find((x) => x.id === r.replaces);
    if (!q) { bad.push(`${r.slug}/${r.replaces}: gone`); continue; }
    if (q.stem !== r.question.stem) bad.push(`${r.slug}/${r.replaces}: stem is not the file's`);
    if (q.answer !== r.question.answer) bad.push(`${r.slug}/${r.replaces}: answer is not the file's`);
    if (JSON.stringify(q.options) !== JSON.stringify(r.question.options)) bad.push(`${r.slug}/${r.replaces}: options are not the file's`);
    if (JSON.stringify(q.kind) !== JSON.stringify(["reference"])) bad.push(`${r.slug}/${r.replaces}: kind is ${JSON.stringify(q.kind)}`);
    if ((it!.payload.questions ?? []).length !== 8) bad.push(`${r.slug}: ${it!.payload.questions?.length} questions, not 8`);
  }
  for (const [slug, qs] of Object.entries(D.markerOnly)) {
    for (const [qid, kinds] of Object.entries(qs)) {
      if (!Array.isArray(kinds)) continue;
      const q = bySlug.get(slug)?.payload.questions?.find((x) => x.id === qid);
      if (!q) { bad.push(`${slug}/${qid}: gone`); continue; }
      if (JSON.stringify(q.kind) !== JSON.stringify(kinds)) bad.push(`${slug}/${qid}: kind is ${JSON.stringify(q.kind)}, expected ${JSON.stringify(kinds)}`);
    }
  }
  for (const [slug, fix] of Object.entries(D.distractorFix)) {
    const q = bySlug.get(slug)?.payload.questions?.find((x) => x.id === fix.id);
    if (!q) { bad.push(`${slug}/${fix.id}: gone`); continue; }
    if (JSON.stringify(q.options) !== JSON.stringify(fix.options)) bad.push(`${slug}/${fix.id}: options are not the file's`);
    if (q.answer !== fix.answer) bad.push(`${slug}/${fix.id}: answer is not the file's`);
  }
  if (bad.length > 0) {
    console.error(`[partc-reference] 🔴 ${bad.length} problem(s) on disk:`);
    for (const b of bad) console.error(`  ${b}`);
    process.exit(1);
  }
  console.log(
    `[partc-reference] verified in a fresh process: ${D.replacements.length} replacement(s) in place with kind ["reference"], ` +
      `${Object.keys(D.markerOnly).length} marker-only row(s), ${Object.keys(D.distractorFix).length} distractor fix(es)`,
  );
  process.exit(0);
}

// ── the population and the refusals, before a byte moves ────────────────────
for (const r of D.replacements) {
  const it = bySlug.get(r.slug);
  if (!it) die(`the seed source has no item with slug "${r.slug}"`);
  const qs = it.payload.questions ?? [];
  const q = qs.find((x) => x.id === r.replaces);
  if (!q) die(`"${r.slug}" has no question ${r.replaces}`);
  if (r.question.id !== r.replaces) die(`"${r.slug}": the file would renumber ${r.replaces} to ${r.question.id}`);
  if ((r.question.options ?? []).length !== (q.options ?? []).length) {
    die(`"${r.slug}"/${r.replaces}: ${(q.options ?? []).length} options today, ${(r.question.options ?? []).length} in the file — the option count is a law, not a preference`);
  }
  if (!(r.question.options ?? []).some((o) => o.id === r.question.answer)) {
    die(`"${r.slug}"/${r.replaces}: the answer ${JSON.stringify(r.question.answer)} is not one of its own options`);
  }
}
// 🔴 A2 is a MARKER, and this is what makes that true rather than intended.
for (const [slug, qs] of Object.entries(D.markerOnly)) {
  const it = bySlug.get(slug);
  if (!it) die(`markerOnly names an item that does not exist: "${slug}"`);
  for (const [qid, kinds] of Object.entries(qs)) {
    if (!Array.isArray(kinds)) continue; // the "why" line
    const q = it.payload.questions?.find((x) => x.id === qid);
    if (!q) die(`"${slug}" has no question ${qid}`);
    if (q.kind !== undefined) die(`"${slug}"/${qid} already carries ${JSON.stringify(q.kind)}`);
    for (const k of kinds) if (!KINDS.includes(k)) die(`"${slug}"/${qid} has unknown marker "${k}"`);
  }
}
for (const [slug, fix] of Object.entries(D.distractorFix)) {
  const it = bySlug.get(slug);
  if (!it) die(`distractorFix names an item that does not exist: "${slug}"`);
  const q = it.payload.questions?.find((x) => x.id === fix.id);
  if (!q) die(`"${slug}" has no question ${fix.id}`);
  if (fix.options.length !== (q.options ?? []).length) die(`"${slug}"/${fix.id}: the option count would change`);
  if (q.answer !== fix.answer) die(`"${slug}"/${fix.id}: the file would move the key from ${q.answer} to ${fix.answer}`);
  if (!fix.options.some((o) => o.id === fix.answer)) die(`"${slug}"/${fix.id}: the answer is not one of its own options`);
}
console.log(`[partc-reference] ${D.replacements.length} replacement(s), ${Object.keys(D.markerOnly).length} marker-only, ${Object.keys(D.distractorFix).length} distractor fix(es) — all resolve`);

if (!WRITE) {
  console.log("[partc-reference] dry run — nothing written. Re-run with --write.");
  process.exit(0);
}

// ── write ───────────────────────────────────────────────────────────────────
const GEN_DIR = join(import.meta.dirname, "..", "seed", "gen");
const files = readdirSync(GEN_DIR).filter((f) => f.endsWith(".ts") && !f.startsWith("_") && f !== "index.ts");
const text = new Map(files.map((f) => [f, readFileSync(join(GEN_DIR, f), "utf8")]));
const linesOf = (s: string): string[] => s.split("\n").map((l, i, a) => (i < a.length - 1 ? l + "\n" : l));
const cache = new Map<string, string[]>();
const linesFor = (f: string) => { if (!cache.has(f)) cache.set(f, linesOf(text.get(f)!)); return cache.get(f)!; };
const fileFor = (slug: string) => {
  const hits = files.filter((f) => text.get(f)!.includes(`"slug": "${slug}"`));
  if (hits.length !== 1) die(`"${slug}" is in ${hits.length} gen module(s), need exactly 1`);
  return hits[0];
};
const ending = (l: string) => (/\r\n$/.test(l) ? "\r\n" : /\n$/.test(l) ? "\n" : "");
const bare = (l: string) => l.slice(0, l.length - ending(l).length);

/** the [start, end] line span of the question object whose id line is at `idLine` */
function objectSpan(lines: string[], idLine: number): [number, number] {
  let start = idLine;
  while (start > 0 && bare(lines[start]).trim() !== "{") start -= 1;
  let depth = 0;
  for (let i = start; i < lines.length; i++) {
    for (const ch of bare(lines[i])) { if (ch === "{") depth += 1; else if (ch === "}") depth -= 1; }
    if (depth === 0) return [start, i];
  }
  return die("a question object does not close");
}
function questionIdLine(lines: string[], slug: string, qid: string): number {
  const s = lines.findIndex((l) => l.includes(`"slug": "${slug}"`));
  if (s < 0) die(`"${slug}" vanished`);
  let end = lines.length;
  for (let i = s + 1; i < lines.length; i++) if (/^\s*"slug":\s*"/.test(lines[i])) { end = i; break; }
  const hits: number[] = [];
  for (let i = s; i < end; i++) {
    if (new RegExp(`^\\s*"id": "${qid}",\\s*$`).test(bare(lines[i])) && /^\s*"(stem|kind)":/.test(bare(lines[i + 1] ?? ""))) hits.push(i);
  }
  if (hits.length !== 1) die(`"${slug}" ${qid}: found ${hits.length} question id lines (need exactly 1)`);
  return hits[0];
}
/** re-emit one question object at the indentation it already has */
function render(q: Q, indent: string, nl: string, trailingComma: boolean): string[] {
  const i2 = indent + "  ";
  const out = [indent + "{" + nl, i2 + `"id": ${JSON.stringify(q.id)},` + nl];
  if (q.kind) out.push(i2 + `"kind": ${JSON.stringify(q.kind)},` + nl);
  out.push(i2 + `"stem": ${JSON.stringify(q.stem)},` + nl);
  if (q.options) {
    out.push(i2 + `"options": [` + nl);
    q.options.forEach((o, k) => {
      out.push(i2 + `  {` + nl, i2 + `    "id": ${JSON.stringify(o.id)},` + nl, i2 + `    "text": ${JSON.stringify(o.text)}` + nl,
        i2 + `  }${k < q.options!.length - 1 ? "," : ""}` + nl);
    });
    out.push(i2 + `],` + nl);
  }
  out.push(i2 + `"answer": ${JSON.stringify(q.answer)}` + nl, indent + `}${trailingComma ? "," : ""}` + nl);
  return out;
}

let replaced = 0, marked = 0, fixed = 0;
for (const r of D.replacements) {
  const f = fileFor(r.slug);
  const lines = linesFor(f);
  const idLine = questionIdLine(lines, r.slug, r.replaces);
  const [from, to] = objectSpan(lines, idLine);
  const indent = /^(\s*)/.exec(bare(lines[from]))![1];
  const nl = ending(lines[from]) || "\n";
  const trailing = /,\s*$/.test(bare(lines[to]));
  lines.splice(from, to - from + 1, ...render({ ...r.question, kind: ["reference"] }, indent, nl, trailing));
  replaced += 1;
}
for (const [slug, qs] of Object.entries(D.markerOnly)) {
  for (const [qid, kinds] of Object.entries(qs)) {
    if (!Array.isArray(kinds)) continue;
    const f = fileFor(slug);
    const lines = linesFor(f);
    const idLine = questionIdLine(lines, slug, qid);
    const indent = /^(\s*)/.exec(bare(lines[idLine]))![1];
    lines.splice(idLine + 1, 0, indent + `"kind": ${JSON.stringify(kinds)},` + ending(lines[idLine]));
    marked += 1;
  }
}
for (const [slug, fix] of Object.entries(D.distractorFix)) {
  const f = fileFor(slug);
  const lines = linesFor(f);
  const idLine = questionIdLine(lines, slug, fix.id);
  const [from, to] = objectSpan(lines, idLine);
  const it = bySlug.get(slug)!;
  const q = it.payload.questions!.find((x) => x.id === fix.id)!;
  const indent = /^(\s*)/.exec(bare(lines[from]))![1];
  const nl = ending(lines[from]) || "\n";
  const trailing = /,\s*$/.test(bare(lines[to]));
  // stem and kind are carried across untouched; only the options move.
  lines.splice(from, to - from + 1, ...render({ ...q, options: fix.options, answer: fix.answer }, indent, nl, trailing));
  fixed += 1;
}
for (const [f, lines] of cache) writeFileSync(join(GEN_DIR, f), lines.join(""), "utf8");
console.log(`[partc-reference] ${replaced} replaced, ${marked} marked, ${fixed} distractor fix(es); wrote ${cache.size} module(s)`);

void (async () => {
  const { execFileSync } = await import("node:child_process");
  const self = fileURLToPath(import.meta.url);
  try {
    process.stdout.write(execFileSync(`npx tsx "${self}" --verify-only`, { encoding: "utf8", shell: true, stdio: ["ignore", "pipe", "inherit"] }));
  } catch {
    die("the fresh-process verification failed — see above. The write is NOT proven.");
  }
})();
