/**
 * APPLY THE OWNER'S ACCEPT-LIST RULINGS OF 7 SEPTEMBER 2026.
 *
 *   npx tsx scripts/content/apply-accept-list-decisions-2026-09-07.ts C:\Projects\_handoffs
 *   npx tsx scripts/content/apply-accept-list-decisions-2026-09-07.ts C:\Projects\_handoffs --write
 *
 * ── WHAT IT DOES, AND WHAT IT REFUSES TO DECIDE ─────────────────────────────
 *
 * `AlmiOET_accept_list_DECISIONS_2026-09-07.json` rules on all 194 open items,
 * against a rule the owner wrote out in the file itself: an accept list may
 * cover only another way of writing the SAME word — a spelling, a standard
 * abbreviation or unit expansion, another grammatical form — and never a
 * different word that means the same thing, because a synonym accepted is a
 * wrong answer marked right.
 *
 * This script carries three of his lists into the code and decides nothing:
 *
 *   refuse (120)                     delete the variant
 *   decision2_deleteTheAddedVariant  delete the variants the 6-Sep file added
 *                                    to an answer he had already called single-form
 *   decision1_noVariantsNeeded (28)  declare `acceptExhaustive: true` on the unit
 *
 * `keep` (34) is touched by nothing here; the check at the end asserts every one
 * of those 34 is still present, byte-identical, afterwards.
 *
 * ── A VARIANT USUALLY LIVES IN TWO PLACES ───────────────────────────────────
 *
 * 🔴 Deleting it from one leaves it accepted. The 6 September accept-list file
 * restated 879 variants that were already in the item payloads, so most rows are
 * held BOTH in scripts/seed/gen (the payload) and in src/lib/oet/accept-lists.ts
 * (the overlay), and `markObjective` merges the two. Every deletion below is
 * therefore attempted in both places, and a variant that is found in NEITHER is
 * reported and fails the run — a ruling that reached nothing is a ruling nobody
 * would notice had been lost.
 *
 * ── HOW IT WRITES ───────────────────────────────────────────────────────────
 *
 * In place, line by line, never by re-emitting a file: lines are split on "\n"
 * alone and every line keeps its own ending. Same discipline as
 * sync-gen-payloads-2026-09-06.ts, for the same measured reasons — a
 * JSON.stringify rebuild once deleted four comments living inside reading_c.ts,
 * and a split(/\r?\n/) rewrote 935 lines of a file with mixed endings.
 *
 * With --write it re-reads everything IN A FRESH PROCESS (--verify-only) and
 * asserts all three lists landed. The obvious in-process check is vacuous: a
 * dynamic import after writing returns the module already in this process's
 * cache, which on 7 September reported 63 correct bodies as wrong.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { GEN_ITEMS } from "../seed/gen/index";
import { listeningAcceptFor, readingAcceptFor } from "../../src/lib/oet/accept-lists";

const WRITE = process.argv.includes("--write");
const VERIFY_ONLY = process.argv.includes("--verify-only");
const FILE = "AlmiOET_accept_list_DECISIONS_2026-09-07.json";

function die(msg: string): never {
  console.error(`\n[decisions] 🔴 ${msg}\n`);
  process.exit(1);
}

const dir = process.argv[2];
if (!dir || dir.startsWith("--")) die(`give the directory holding ${FILE} as the first argument`);

type Ruling = { slug: string; id: string; answer: string; variant: string };
type D = {
  keep: Ruling[];
  refuse: Ruling[];
  decision2_deleteTheAddedVariant: { slug: string; id: string; answer: string; theFileAdds: string[] }[];
  decision1_noVariantsNeeded: { slug: string; id: string; answer: string }[];
};
const D = JSON.parse(readFileSync(join(dir, FILE), "utf8")) as D;

const keepKey = new Set(D.keep.map((k) => `${k.slug}||${k.id}||${k.variant}`));
const asked: { slug: string; id: string; variant: string; from: string }[] = [
  ...D.refuse.map((r) => ({ slug: r.slug, id: r.id, variant: r.variant, from: "refuse" })),
  ...D.decision2_deleteTheAddedVariant.flatMap((r) =>
    r.theFileAdds.map((v) => ({ slug: r.slug, id: r.id, variant: v, from: "decision2" })),
  ),
];

/**
 * 🔴 TWO OF THE OWNER'S OWN LISTS CONTRADICT EACH OTHER ON FOUR ROWS, AND THIS
 * SCRIPT WILL NOT PICK A WINNER.
 *
 * `decision2_deleteTheAddedVariant` is a blanket ruling on nine answers he had
 * already called single-form: delete whatever the 6 September file added to
 * them. `keep` is his later row-by-row ruling on the A11/A12 list. On four
 * variants they say opposite things, and every one of the four is the class his
 * own written rule protects — a standard abbreviation or a US spelling:
 *
 *     rea-a-sepsis/q19                              blood pressure -> BP
 *     rea-a-sharps-injury-and-exposure-to-blood/q17 hepatitis B    -> hep B
 *     rea-a-a-flare-up-of-...-lung-disease/q10      carbon dioxide -> CO2
 *     rea-a-diabetic-ketoacidosis/q15               litres         -> liters
 *
 * A script that resolved that would be deciding content. It skips them, names
 * them, and leaves gate:accept-lists A4 red on those four answers — which is the
 * flag pointing straight at the contradiction, and is the honest state until he
 * rules once more.
 */
const contested = asked.filter((d) => keepKey.has(`${d.slug}||${d.id}||${d.variant}`));
const doomed = asked.filter((d) => !keepKey.has(`${d.slug}||${d.id}||${d.variant}`));
if (contested.length > 0) {
  console.log(`[decisions] ⚠️ ${contested.length} deletion(s) SKIPPED — the same variant is on the keep list:`);
  for (const c of contested) console.log(`    ${c.slug}/${c.id} "${c.variant}" (asked by ${c.from}, kept by keep)`);
}
const exhaustive = D.decision1_noVariantsNeeded.map((r) => ({ slug: r.slug, id: r.id, answer: r.answer }));

// ── the population, before a byte moves ─────────────────────────────────────
type Item = { taskType: string; slug: string; title: string; payload: any };
const ITEMS = GEN_ITEMS as unknown as Item[];
const bySlug = new Map(ITEMS.map((i) => [i.slug, i]));
const unitOf = (it: Item, id: string) =>
  it.taskType === "LISTENING_PART_A"
    ? (it.payload.gaps ?? []).find((g: any) => g.id === id)
    : (it.payload.questions ?? []).find((q: any) => q.id === id);
const overlayOf = (it: Item, id: string) =>
  it.taskType === "LISTENING_PART_A" ? listeningAcceptFor(it.slug, id) : readingAcceptFor(it.slug, id);

// ── --verify-only: run in a FRESH process after the write ───────────────────
if (VERIFY_ONLY) {
  const bad: string[] = [];
  for (const d of doomed) {
    const it = bySlug.get(d.slug);
    if (!it) { bad.push(`${d.slug}: gone`); continue; }
    const u = unitOf(it, d.id);
    if ((u?.variants ?? []).includes(d.variant)) bad.push(`${d.slug}/${d.id} "${d.variant}" is STILL in the payload`);
    if (overlayOf(it, d.id).includes(d.variant)) bad.push(`${d.slug}/${d.id} "${d.variant}" is STILL in the overlay`);
  }
  for (const k of D.keep) {
    const it = bySlug.get(k.slug);
    const u = it ? unitOf(it, k.id) : null;
    const live = [...((u?.variants ?? []) as string[]), ...(it ? overlayOf(it, k.id) : [])];
    if (!live.includes(k.variant)) bad.push(`KEEP LOST: ${k.slug}/${k.id} "${k.variant}" is no longer accepted anywhere`);
  }
  for (const e of exhaustive) {
    const it = bySlug.get(e.slug);
    const u = it ? unitOf(it, e.id) : null;
    if (!u) { bad.push(`${e.slug}/${e.id}: no such unit`); continue; }
    if (u.acceptExhaustive !== true) bad.push(`${e.slug}/${e.id} has no acceptExhaustive: true`);
    if ((u.variants ?? []).length > 0) bad.push(`${e.slug}/${e.id} is declared exhaustive but HAS variants`);
  }
  if (bad.length > 0) {
    console.error(`[decisions] 🔴 ${bad.length} problem(s) on disk:`);
    for (const b of bad) console.error(`  ${b}`);
    process.exit(1);
  }
  console.log(
    `[decisions] verified in a fresh process: ${doomed.length} variant(s) gone from payload and overlay, ` +
      `${D.keep.length} keep(s) still accepted, ${exhaustive.length} unit(s) declared exhaustive`,
  );
  process.exit(0);
}

// ── where does each doomed variant live today? ──────────────────────────────
let inPayload = 0, inOverlay = 0, inBoth = 0;
const orphans: string[] = [];
for (const d of doomed) {
  const it = bySlug.get(d.slug);
  if (!it) die(`the seed source has no item with slug "${d.slug}"`);
  const u = unitOf(it, d.id);
  if (!u) die(`"${d.slug}" has no unit with id "${d.id}"`);
  const p = ((u.variants ?? []) as string[]).includes(d.variant);
  const o = overlayOf(it, d.id).includes(d.variant);
  if (p && o) inBoth += 1; else if (p) inPayload += 1; else if (o) inOverlay += 1;
  else orphans.push(`${d.slug}/${d.id} "${d.variant}" (${d.from})`);
}
for (const e of exhaustive) {
  const it = bySlug.get(e.slug);
  if (!it) die(`decision1 names an item that does not exist: "${e.slug}"`);
  const u = unitOf(it, e.id);
  if (!u) die(`decision1 names a unit that does not exist: "${e.slug}"/"${e.id}"`);
  if (u.answer !== e.answer) {
    die(`decision1 "${e.slug}"/"${e.id}" was ruled on the answer ${JSON.stringify(e.answer)}, but the bank now says ${JSON.stringify(u.answer)}`);
  }
}
console.log(`[decisions] ${doomed.length} variant(s) to delete: ${inBoth} in both places, ${inPayload} payload only, ${inOverlay} overlay only`);
console.log(`[decisions] ${exhaustive.length} unit(s) to declare acceptExhaustive`);
if (orphans.length > 0) {
  console.error(`[decisions] 🔴 ${orphans.length} ruling(s) name a variant that is accepted NOWHERE:`);
  for (const o of orphans) console.error(`  ${o}`);
  die("a ruling that reaches nothing is a ruling nobody would notice had been lost");
}

// ── the edits ───────────────────────────────────────────────────────────────
const GEN_DIR = join(import.meta.dirname, "..", "seed", "gen");
const linesOf = (s: string): string[] => s.split("\n").map((l, i, a) => (i < a.length - 1 ? l + "\n" : l));
const endingOf = (l: string) => (/\r\n$/.test(l) ? "\r\n" : /\n$/.test(l) ? "\n" : "");
const bare = (l: string) => l.slice(0, l.length - endingOf(l).length);

const genFiles = readdirSync(GEN_DIR).filter((f) => f.endsWith(".ts") && !f.startsWith("_") && f !== "index.ts");
const genText = new Map(genFiles.map((f) => [f, readFileSync(join(GEN_DIR, f), "utf8")]));
const genLines = new Map<string, string[]>();
const linesFor = (f: string) => {
  if (!genLines.has(f)) genLines.set(f, linesOf(genText.get(f)!));
  return genLines.get(f)!;
};
const fileFor = (slug: string) => {
  const hits = genFiles.filter((f) => genText.get(f)!.includes(`"slug": "${slug}"`));
  if (hits.length !== 1) die(`"${slug}" is in ${hits.length} gen module(s), need exactly 1`);
  return hits[0];
};

/** the [start, end) line span of one unit inside its item */
function unitSpan(lines: string[], slug: string, id: string): [number, number] {
  const s = lines.findIndex((l) => l.includes(`"slug": "${slug}"`));
  if (s < 0) die(`"${slug}" vanished from its module`);
  let itemEnd = lines.length;
  for (let i = s + 1; i < lines.length; i++) if (/^\s*"slug":\s*"/.test(lines[i])) { itemEnd = i; break; }
  const idLine = lines.findIndex((l, i) => i > s && i < itemEnd && new RegExp(`^\\s*"id":\\s*"${id}"\\s*,?\\s*$`).test(bare(l)));
  if (idLine < 0) die(`"${slug}" has no line declaring id "${id}"`);
  let end = itemEnd;
  for (let i = idLine + 1; i < itemEnd; i++) if (/^\s*"id":\s*"/.test(lines[i])) { end = i; break; }
  return [idLine, end];
}

let payloadDeleted = 0, overlayDeleted = 0, declared = 0;

// (1) payload variants
const byUnit = new Map<string, string[]>();
for (const d of doomed) byUnit.set(`${d.slug}||${d.id}`, [...(byUnit.get(`${d.slug}||${d.id}`) ?? []), d.variant]);
for (const [k, variants] of byUnit) {
  const [slug, id] = k.split("||");
  const f = fileFor(slug);
  const lines = linesFor(f);
  const [from, to] = unitSpan(lines, slug, id);
  const vStart = lines.findIndex((l, i) => i >= from && i < to && /^\s*"variants":\s*\[\s*$/.test(bare(l)));
  if (vStart < 0) continue; // this unit keeps its variants only in the overlay
  let vEnd = -1;
  for (let i = vStart + 1; i < to; i++) if (/^\s*\]\s*,?\s*$/.test(bare(lines[i]))) { vEnd = i; break; }
  if (vEnd < 0) die(`${slug}/${id}: the variants array does not close inside the unit`);
  const kept: string[] = [];
  for (let i = vStart + 1; i < vEnd; i++) {
    const m = /^(\s*)("(?:[^"\\]|\\.)*")\s*,?\s*$/.exec(bare(lines[i]));
    if (!m) die(`${slug}/${id}: a variants line is not a plain string: ${JSON.stringify(bare(lines[i]))}`);
    const value = JSON.parse(m[2]) as string;
    if (variants.includes(value)) { payloadDeleted += 1; continue; }
    kept.push(m[1] + m[2]);
  }
  const ending = endingOf(lines[vStart]);
  const indent = /^(\s*)/.exec(bare(lines[vStart]))![1];
  const closeSuffix = /,\s*$/.test(bare(lines[vEnd])) ? "," : "";
  const rebuilt =
    kept.length === 0
      ? [indent + `"variants": []` + closeSuffix + ending]
      : [
          indent + `"variants": [` + ending,
          ...kept.map((l, i) => l + (i < kept.length - 1 ? "," : "") + ending),
          indent + `]` + closeSuffix + ending,
        ];
  lines.splice(vStart, vEnd - vStart + 1, ...rebuilt);
}

// (2) overlay rows — one line each, so the whole line is rewritten
const OVERLAY = join(import.meta.dirname, "..", "..", "src", "lib", "oet", "accept-lists.ts");
const overlayLines = linesOf(readFileSync(OVERLAY, "utf8"));
for (const [k, variants] of byUnit) {
  const [slug, id] = k.split("||");
  const start = overlayLines.findIndex((l) => l.includes(`"${slug}": {`));
  if (start < 0) continue;
  let end = overlayLines.length;
  for (let i = start + 1; i < overlayLines.length; i++) if (/^  "/.test(overlayLines[i])) { end = i; break; }
  const idx = overlayLines.findIndex((l, i) => i > start && i < end && new RegExp(`^\\s*${id}:\\s*\\{`).test(bare(l)));
  if (idx < 0) continue;
  const m = /^(\s*\w+: \{ label: (?:"(?:[^"\\]|\\.)*"), accept: )\[(.*)\](.*)$/.exec(bare(overlayLines[idx]));
  if (!m) die(`the overlay row for ${slug}/${id} is not in the expected shape`);
  const values = m[2].trim() === "" ? [] : (JSON.parse(`[${m[2]}]`) as string[]);
  const kept = values.filter((v) => !variants.includes(v));
  overlayDeleted += values.length - kept.length;
  overlayLines[idx] = m[1] + `[${kept.map((v) => JSON.stringify(v)).join(", ")}]` + m[3] + endingOf(overlayLines[idx]);
}

// (3) acceptExhaustive
for (const e of exhaustive) {
  const f = fileFor(e.slug);
  const lines = linesFor(f);
  const [from, to] = unitSpan(lines, e.slug, e.id);
  if (lines.slice(from, to).some((l) => /"acceptExhaustive"/.test(l))) continue;
  const aIdx = lines.findIndex((l, i) => i >= from && i < to && /^\s*"answer":\s*"/.test(bare(l)));
  if (aIdx < 0) die(`${e.slug}/${e.id}: no "answer" line to sit beside`);
  const ending = endingOf(lines[aIdx]);
  const indent = /^(\s*)/.exec(bare(lines[aIdx]))![1];
  const answerLine = bare(lines[aIdx]);
  lines[aIdx] = (/,\s*$/.test(answerLine) ? answerLine : answerLine + ",") + ending;
  lines.splice(aIdx + 1, 0, indent + `"acceptExhaustive": true` + ending);
  declared += 1;
}

console.log(`[decisions] payload variant lines removed: ${payloadDeleted}; overlay variants removed: ${overlayDeleted}; units declared exhaustive: ${declared}`);
if (!WRITE) {
  console.log("[decisions] dry run — nothing written. Re-run with --write.");
  process.exit(0);
}
for (const [f, lines] of genLines) writeFileSync(join(GEN_DIR, f), lines.join(""), "utf8");
writeFileSync(OVERLAY, overlayLines.join(""), "utf8");
console.log(`[decisions] wrote ${genLines.size} gen module(s) and the overlay`);

void (async () => {
  const { execFileSync } = await import("node:child_process");
  const self = fileURLToPath(import.meta.url);
  try {
    process.stdout.write(
      execFileSync(`npx tsx "${self}" "${dir}" --verify-only`, { encoding: "utf8", shell: true, stdio: ["ignore", "pipe", "inherit"] }),
    );
  } catch {
    die("the fresh-process verification failed — see above. The write is NOT proven.");
  }
})();
