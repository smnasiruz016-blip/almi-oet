/**
 * APPLY THE READING PART C `kind` MARKERS — FROM THE DATA FILE, NEVER BY HAND.
 *
 * The 3 September 2026 ruling (§4) settled that these markers would arrive as
 * DATA, not as a judgement made at the keyboard. So this reads
 * `AlmiOET_PartC_kind_markers.json` and writes `kind` onto the questions it
 * names, and it refuses to guess about anything the file does not say.
 *
 * ── WHAT A MARKER IS ────────────────────────────────────────────────────────
 *
 *   reference  — the question asks what a word or phrase POINTS TO
 *   writer     — the answer is the writer's OWN position: their opinion,
 *                concession, objection, suggestion, or a change of mind
 *   paragraph  — everything else: the answer is the CONTENT of a given paragraph
 *
 * A question may legitimately carry TWO of these, so `kind` is an ARRAY. Across
 * the 168 questions there are 222 markers — 132%. OET's own published overlap on
 * this question type is 130% (63+38+12+17), so ours sits alongside it.
 *
 * ── ⚠️ TWO DIFFERENT FIELDS ARE BOTH CALLED `kind` ──────────────────────────
 *
 * Reading Part A stores `kind: "match" | "gap"` — a STRING, saying how the
 * question is answered. This is `kind: string[]` on Part C — an ARRAY, saying
 * what the question is ABOUT. They share a name and nothing else. The name comes
 * from the ruling; the distinction is written here so a reader of either schema
 * is not misled by the other.
 *
 * ── WHAT IT REFUSES TO DO ───────────────────────────────────────────────────
 *
 * Marks nothing outside the 168 four-option questions. The 78 legacy
 * three-option questions are a separate, older debt (OPTION COUNT DEBT) and are
 * left entirely alone — giving them markers would quietly imply they had been
 * reviewed.
 *
 * ── 🔴 SECOND BATCH, 7 SEPTEMBER 2026, AND THREE THINGS CHANGED ────────────
 *
 * 1. THE FILE IS AN ARGUMENT. `--file=NAME`, defaulting to the v2 file. The
 *    6-September file `AlmiOET_PartC_kind_markers_2026-09-06.json` is WITHDRAWN
 *    by its author: 19 of its 21 items carry ZERO `reference` markers and it
 *    would fail the gate. It must never be applied.
 *
 * 2. IT KEYS BY SLUG. The v2 file does, and nothing has been keyed on a human
 *    title since PR #75.
 *
 * 3. ⚠️ THE COMPLETENESS GUARD IS NOW PER ITEM, NOT PER BANK. It used to
 *    demand that EVERY four-option question in the bank be marked, because when
 *    it was written every governed item was in the file. The bank has since
 *    doubled to 42 items, and FIVE of them cannot be marked yet: they have no
 *    reference QUESTION, and the owner is authoring those. Marking them anyway
 *    would be a lie the gate would then certify.
 *
 *    So the guard asks that every four-option question OF THE ITEMS THIS FILE
 *    NAMES is marked — still no partly-filled item. THE COMPLETENESS OF THE BANK
 *    IS gate:partc-kind'S JOB, AND IT STAYS RED ON THE FIVE. No threshold was
 *    lowered to let content through; the reporting of the gap lives where it
 *    belongs.
 *
 * Run:  npx tsx scripts/seed/gen/_apply_partc_kind.mts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ITEMS } from "./reading_c";

const SRC = process.env.READING_SOURCE_DIR ?? "C:\\Projects\\_handoffs";
const DATA = join(
  SRC,
  process.argv.find((a) => a.startsWith("--file="))?.slice("--file=".length) ??
    "AlmiOET_PartC_kind_markers_v2_2026-09-07.json",
);
const OUT = "scripts/seed/gen/reading_c.ts";
const KINDS = ["paragraph", "reference", "writer"] as const;

type Q = { id: string; stem: string; answer: string; options?: unknown[]; kind?: string[] };
type Item = { taskType: string; slug: string; title: string; payload?: { questions?: Q[] } };

const die = (msg: string): never => {
  throw new Error(`[apply-partc-kind] ${msg}`);
};

const markers = JSON.parse(readFileSync(DATA, "utf8")) as Record<string, Record<string, string[]>>;
const items = ITEMS as unknown as Item[];
const partC = items.filter((i) => i.taskType === "READING_PART_C");
const bySlug = new Map(partC.map((i) => [i.slug, i]));

// ── the population, stated before anything is marked ────────────────────────
const fourOption = new Set<string>();
const threeOption = new Set<string>();
for (const it of partC) {
  for (const q of it.payload?.questions ?? []) {
    const n = (q.options ?? []).length;
    if (n === 4) fourOption.add(`${it.slug}::${q.id}`);
    else if (n === 3) threeOption.add(`${it.slug}::${q.id}`);
    else die(`"${it.title}" ${q.id} has ${n} options — neither the 4-option law nor the legacy 3`);
  }
}
console.log(
  `[apply-partc-kind] READING_PART_C: ${partC.length} item(s) · ${fourOption.size} four-option question(s) · ${threeOption.size} legacy three-option (left alone)`,
);
if (fourOption.size === 0) die("no four-option question found — nothing to mark");

// ── apply ───────────────────────────────────────────────────────────────────
let marked = 0;
let markerCount = 0;
const perKind: Record<string, number> = { paragraph: 0, reference: 0, writer: 0 };

for (const [slug, qs] of Object.entries(markers)) {
  const item = bySlug.get(slug);
  if (!item) die(`the marker file names an item that is not in the seed source: "${slug}"`);
  const known = new Map((item!.payload?.questions ?? []).map((q) => [q.id, q]));
  for (const [qid, kinds] of Object.entries(qs)) {
    const q = known.get(qid);
    if (!q) die(`"${slug}" has no question ${qid}`);
    if (q!.kind !== undefined) die(`"${slug}" ${qid} is ALREADY marked — this file would double it`);
    if (!fourOption.has(`${slug}::${qid}`)) {
      die(`"${slug}" ${qid} is not a four-option question — the legacy three-option ones are not marked`);
    }
    if (!Array.isArray(kinds) || kinds.length === 0) die(`"${slug}" ${qid} has no marker`);
    for (const k of kinds) {
      if (!(KINDS as readonly string[]).includes(k)) die(`"${slug}" ${qid} has unknown marker "${k}"`);
      perKind[k] += 1;
      markerCount += 1;
    }
    if (new Set(kinds).size !== kinds.length) die(`"${slug}" ${qid} repeats a marker`);
    marked += 1;
  }
}

// ── every four-option question must have been reached ───────────────────────
const named = new Set(Object.keys(markers));
const missed = [...fourOption].filter((k) => {
  const [slug, qid] = k.split("::");
  if (!named.has(slug)) return false; // an item this file does not claim
  return !markers[slug][qid];
});
if (missed.length > 0) {
  die(
    `${missed.length} four-option question(s) got no marker — a partly-filled field is worse than an empty one:\n` +
      missed.slice(0, 10).map((m) => `    ${m}`).join("\n"),
  );
}
// ── and no legacy question may have been touched ────────────────────────────
for (const it of partC) {
  for (const q of it.payload?.questions ?? []) {
    if (threeOption.has(`${it.slug}::${q.id}`) && q.kind !== undefined) {
      die(`legacy three-option question "${it.slug}" ${q.id} was marked — it must not be`);
    }
  }
}

// ── write, BY INSERTION, never by re-emitting the file ──────────────────────
//
// 🔴 The first version of this script rebuilt reading_c.ts with
// JSON.stringify(items). It produced the right data and DELETED FOUR COMMENTS
// that live inside the array — the "OET Form 1/2/3 canonical ingest" markers and
// the block recording that the 21 ported items breach the measured law on three
// axes. JSON.stringify cannot see a comment, so the loss was silent and the diff
// was 1491/950 instead of additions-only.
//
// So the markers are INSERTED into the text. Everything this script does not
// explicitly add stays exactly as it was, comments included.
// 🔴 AND IT PRESERVES EVERY BYTE IT DOES NOT ADD. The second version split on
// /\r?\n/ and re-joined with one chosen ending. reading_c.ts has MIXED endings —
// 933 CRLF, one lone CR, the rest LF — so that quietly rewrote 935 lines that
// have nothing to do with markers, and buried 168 real additions in the noise.
// Splitting on "\n" alone keeps each line's own ending inside the line, and an
// inserted line copies the ending of the line it follows.
const text = readFileSync(OUT, "utf8");
const lines = text.split("\n");

// Item boundaries, so a question id is resolved within its own item.
// Located by SLUG, not by title: PR #75 moved every key off human titles, and
// one Part C title carries escaped quotes that a raw capture reads wrongly.
const B = String.fromCharCode(92); // a backslash, spelled out
const SLUG_LINE = new RegExp("^" + B + 's*"slug": "([^"]+)",' + B + "s*(" + B + "r)?$");
const bounds: { slug: string; from: number }[] = [];
for (let i = 0; i < lines.length; i++) {
  // The whole quoted literal, then JSON.parse it — one Part C title contains
  // escaped quotes ("What \"nil by mouth\" costs") and a raw capture reads them
  // as backslash-quote, which matches no title in the marker file.
  const m = lines[i].match(SLUG_LINE);
  if (m) bounds.push({ slug: m[1], from: i });
}

const inserts = new Map<number, string>(); // line index of the "id" line -> text to insert after it
for (const [slug, qs] of Object.entries(markers)) {
  const bi = bounds.findIndex((b) => b.slug === slug);
  if (bi === -1) die(`could not locate "${slug}" in ${OUT}`);
  const from = bounds[bi].from;
  const to = bi + 1 < bounds.length ? bounds[bi + 1].from : lines.length;

  for (const [qid, kinds] of Object.entries(qs)) {
    // A question's id line is followed by its stem. An OPTION's id line is not,
    // which is what keeps this off the a/b/c/d objects.
    const hits: number[] = [];
    for (let i = from; i < to; i++) {
      if (new RegExp(`^(\\s*)"id": "${qid}",\\s*\\r?$`).test(lines[i]) && /^\s*"stem":/.test(lines[i + 1] ?? "")) {
        hits.push(i);
      }
    }
    if (hits.length !== 1) die(`"${slug}" ${qid}: found ${hits.length} question id lines (need exactly 1)`);
    const indent = lines[hits[0]].match(/^(\s*)/)![1];
    // Copy this line's OWN ending, so a CRLF region stays CRLF and an LF region LF.
    const cr = lines[hits[0]].endsWith("\r") ? "\r" : "";
    inserts.set(hits[0], `${indent}"kind": ${JSON.stringify(kinds)},${cr}`);
  }
}
if (inserts.size !== marked) die(`prepared ${inserts.size} insertions for ${marked} marked questions`);

const out: string[] = [];
for (let i = 0; i < lines.length; i++) {
  out.push(lines[i]);
  const ins = inserts.get(i);
  if (ins !== undefined) out.push(ins);
}
writeFileSync(OUT, out.join("\n"), "utf8");

console.log(`[apply-partc-kind] ${marked} question(s) marked · ${markerCount} marker(s) (${Math.round((markerCount / marked) * 100)}% of questions)`);
for (const k of KINDS) console.log(`    ${k.padEnd(10)} ${perKind[k]}`);
console.log(`[apply-partc-kind] wrote ${OUT}`);
