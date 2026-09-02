/**
 * SOURCE-FRESHNESS + GRADE-FLOOR GATES  —  `npm run gate:sources` (exit 1 on any breach).
 *
 * WHAT THIS EXISTS TO STOP. On 2026-08-04 someone edited `src/lib/oet/scale.ts`,
 * replaced OET's published C band with an invented one, wrote "re-verified"
 * beside it, and attached no artefact of any kind. It shipped wrong for 27 days.
 * A learner scoring 220 was told D; OET's own scoring document says C. Nothing in
 * this repo could have caught that, because there was nothing to catch it AGAINST.
 *
 * So this gate makes the artefact the thing under test:
 *
 *   S1  CITED, NEVER STORED.  Fail if
 *       (a) docs/sources/ holds any file but README.md — a stored publication,
 *       (b) the citation table is missing, empty, or has an empty cell,
 *       (c) a citation has no URL or no ISO retrieval date to follow.
 *
 *   S2  UNSOURCED "VERIFIED".  Fail if a comment block in scale.ts contains the
 *       word "verified" or "re-verified" beside an OET-scale number and does NOT
 *       name a docs/sources/ file in that same block. This is the literal shape
 *       of the 2026-08-04 defect.
 *
 *   S3  GRADE FLOORS AGREE.  Fail if the floors scale.ts actually applies
 *       disagree with GRADE_FLOORS_PUBLISHED in src/lib/oet/exam-shape.ts.
 *
 * THREE INDEPENDENT COPIES, AND WHY.
 *
 *   1. exam-shape.ts GRADE_FLOORS_PUBLISHED  — hand-typed by the owner from the PDF.
 *   2. HAND_TYPED_FROM_THE_PDF below         — hand-typed AGAIN, into this file,
 *                                              by a second reader of the same PDF.
 *   3. What scale.ts DOES                    — measured, not read: this gate probes
 *                                              gradeForScore() across 0..500 and
 *                                              derives the floors from its answers.
 *
 * Copy 2 is not decoration. A gate that compares scale.ts to exam-shape.ts and
 * nothing else fails only when the two disagree — it passes happily when both are
 * wrong in the same way, which is precisely what happens when one is copied from
 * the other. The third hand-typed copy here is the tie-breaker, and it must be
 * edited only with the PDF open.
 *
 * Copy 3 is MEASURED rather than parsed on purpose. Reading the GRADE_FLOORS
 * array out of scale.ts would prove the array's contents; probing gradeForScore
 * proves the boundary a learner is actually graded at. Those came apart once
 * already: a stored `prepSeconds` of 120 passed its gate for weeks while the UI
 * rendered nothing at all.
 *
 * TRANSCRIBED FROM THE PDF (decoded from its own content stream 2026-08-31, not
 * retyped from any comment in this repo):
 *
 *     A   450-500
 *     B   400-440
 *     B   350-390
 *     C+  300-340
 *     C   250-290
 *     C   200-240
 *
 * There is NO D row and NO E row in that document. OET's Results-and-Scoring page
 * says grades run "from A (highest) to E (lowest)". Two official sources; they
 * disagree about what lies below 200. Both are recorded in docs/sources/README.md
 * and neither is resolved in the other's favour, so gradeForScore returns null
 * below 200 and this gate asserts it never returns "D" or "E".
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { GRADE_FLOORS_PUBLISHED } from "../../src/lib/oet/exam-shape";
import { gradeForScore } from "../../src/lib/oet/scale";
import {
  READING_PART_A_NO_RETURN,
  READING_PART_A_TIME_LIMIT,
  READING_PARTS_BC_TIME_LIMIT,
  sealedSectionNotice,
  type Provenance,
} from "../../src/lib/oet/section-rules";

const ROOT = process.cwd();
const SOURCES_DIR = join(ROOT, "docs", "sources");
const MANIFEST = join(SOURCES_DIR, "README.md");
const SCALE = join(ROOT, "src", "lib", "oet", "scale.ts");

const failures: string[] = [];
const fail = (gate: string, msg: string) => failures.push(`${gate}  ${msg}`);

// ── S1 · CITED, NEVER STORED ─────────────────────────────────────────────────
//
// 🔴 THIS CHECK WAS INVERTED ON 2 SEPTEMBER 2026, AND THAT IS THE POINT.
//
// It used to re-hash `docs/sources/oet-understanding-your-score-2025-10-15.pdf`
// and fail if the bytes had moved. That guarded the wrong thing: the file was
// OET's own copyrighted publication, and keeping a byte-perfect copy of it in a
// public repository is not provenance, it is redistribution. Hashing it every
// build made the copy load-bearing.
//
// The rule now is the one written at the top of docs/sources/README.md:
//
//   NO OET PUBLICATION, PAGE, QUESTION, PASSAGE OR SCRIPT IS EVER COMMITTED TO
//   THIS REPOSITORY; SOURCES ARE CITED, NEVER STORED.
//
// So S1 asserts the opposite of what it used to:
//   (a) docs/sources/ holds nothing but README.md — no stored publication;
//   (b) the citation table has at least one row and no empty cell, so a number
//       that claims to be OET's can still be traced to a title, a URL and a date.
//
// ⚠️ WHAT THIS COSTS, STATED PLAINLY. Nobody can re-hash the artefact any more.
// The grade bands are now held by a citation plus TWO independent hand-typed
// transcriptions inside this repo — exam-shape.ts GRADE_FLOORS_PUBLISHED and
// HAND_TYPED_FROM_THE_PDF below — which S3 cross-checks against each other. Two
// readers agreeing is weaker than a hash, and it is the strongest thing that is
// left once the file is correctly gone. Re-verification is a human opening the
// cited page.
type Citation = { source: string; publisher: string; retrieved: string; reference: string };

function parseCitations(md: string): Citation[] {
  const rows: Citation[] = [];
  for (const line of md.split(/\r?\n/)) {
    const t = line.trim();
    if (!t.startsWith("|")) continue;
    const cells = t.split("|").slice(1, -1).map((c) => c.trim());
    if (cells.length !== 4) continue;
    if (/^-+$/.test(cells[0]) || cells[0].toLowerCase() === "source") continue;
    rows.push({ source: cells[0], publisher: cells[1], retrieved: cells[2], reference: cells[3] });
  }
  return rows;
}

{
  let md = "";
  try {
    md = readFileSync(MANIFEST, "utf8");
  } catch {
    fail("S1", "docs/sources/README.md is missing — the citation list IS the record of provenance");
  }

  const rows = parseCitations(md);
  if (md && rows.length === 0) {
    // A gate over an empty population passes vacuously. Say so loudly instead.
    fail("S1", "docs/sources/README.md parsed to ZERO citation rows — the table format changed");
  }
  for (const r of rows) {
    for (const [field, value] of Object.entries(r)) {
      if (!value) fail("S1", `citation "${r.source}" has an empty ${field} — a citation must be followable`);
    }
    if (!/^https?:\/\//.test(r.reference)) {
      fail("S1", `citation "${r.source}" has no URL in its reference cell: ${JSON.stringify(r.reference)}`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.retrieved)) {
      fail("S1", `citation "${r.source}" has no ISO retrieval date: ${JSON.stringify(r.retrieved)}`);
    }
  }

  let onDisk: string[] = [];
  try {
    onDisk = readdirSync(SOURCES_DIR).filter((f) => f !== "README.md");
  } catch {
    fail("S1", "docs/sources/ does not exist");
  }
  for (const f of onDisk) {
    fail(
      "S1",
      `docs/sources/${f} is a STORED source. Sources are cited, never stored — ` +
        "delete it and add a citation row to README.md instead.",
    );
  }
}

// ── S2 · "verified" beside a number, with nothing to point at ────────────────
// A comment BLOCK is a maximal run of consecutive `//` lines, or one `/* ... */`.
// The check is per block because provenance is only useful next to the claim: a
// filename mentioned 200 lines away does not source this number.
function commentBlocks(src: string): { line: number; text: string }[] {
  const lines = src.split(/\r?\n/);
  const blocks: { line: number; text: string }[] = [];
  let cur: string[] = [];
  let start = 0;
  let inBlockComment = false;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const t = raw.trim();
    if (inBlockComment) {
      cur.push(raw);
      if (t.includes("*/")) {
        blocks.push({ line: start, text: cur.join("\n") });
        cur = [];
        inBlockComment = false;
      }
      continue;
    }
    if (t.startsWith("/*")) {
      if (cur.length) {
        blocks.push({ line: start, text: cur.join("\n") });
        cur = [];
      }
      start = i + 1;
      cur.push(raw);
      if (t.includes("*/")) {
        blocks.push({ line: start, text: cur.join("\n") });
        cur = [];
      } else {
        inBlockComment = true;
      }
      continue;
    }
    if (t.startsWith("//")) {
      if (cur.length === 0) start = i + 1;
      cur.push(raw);
      continue;
    }
    if (cur.length) {
      blocks.push({ line: start, text: cur.join("\n") });
      cur = [];
    }
  }
  if (cur.length) blocks.push({ line: start, text: cur.join("\n") });
  return blocks;
}

// An "OET-scale number": a standalone integer 0..500 that is a multiple of 10.
// Deliberately narrow. Matching ANY digit made the gate fire on dates ("29 Jan
// 2025") and on sentences that DENY verification, and a gate that cries wolf is
// a gate somebody switches off.
const SCALE_NUMBER = /(?<![\w.])(?:0|[1-9]\d{0,1}0|500)(?![\w.])/;
const VERIFIED_WORD = /(?<![\w-])(?:re-)?verified(?![\w-])/i;
const SOURCE_REF = /docs\/sources\/[A-Za-z0-9._-]+/;

{
  const src = readFileSync(SCALE, "utf8");
  const blocks = commentBlocks(src);
  if (blocks.length === 0) {
    fail("S2", "no comment blocks parsed out of scale.ts — the block scanner is broken");
  }
  for (const b of blocks) {
    if (!VERIFIED_WORD.test(b.text)) continue;
    if (!SCALE_NUMBER.test(b.text)) continue;
    if (SOURCE_REF.test(b.text)) continue;
    const quoted = b.text
      .split("\n")
      .find((l) => VERIFIED_WORD.test(l))
      ?.trim();
    fail(
      "S2",
      `scale.ts:${b.line} claims "verified" beside an OET-scale number with no ` +
        `docs/sources/ file named in the same comment block:\n        ${quoted}`,
    );
  }
}

// ── S3 · the floors scale.ts APPLIES vs the floors OET PUBLISHES ─────────────
// Hand-typed from the PDF. Never import, derive or copy these from scale.ts,
// exam-shape.ts or each other. See the header for why there are three copies.
const HAND_TYPED_FROM_THE_PDF: { grade: string; floor: number }[] = [
  { grade: "A", floor: 450 },
  { grade: "B", floor: 350 },
  { grade: "C+", floor: 300 },
  { grade: "C", floor: 200 },
];

/** Measure — do not read — the floors scale.ts actually grades at. */
function measureFloors(): { grade: string; floor: number }[] {
  const firstSeen = new Map<string, number>();
  for (let score = 0; score <= 500; score++) {
    const g = gradeForScore(score);
    if (g === null) continue;
    if (!firstSeen.has(g)) firstSeen.set(g, score);
  }
  return [...firstSeen.entries()]
    .map(([grade, floor]) => ({ grade, floor }))
    .sort((a, b) => b.floor - a.floor);
}

function sameFloors(
  a: readonly { grade: string; floor: number }[],
  b: readonly { grade: string; floor: number }[],
): boolean {
  if (a.length !== b.length) return false;
  return a.every((x, i) => x.grade === b[i].grade && x.floor === b[i].floor);
}

const show = (rows: readonly { grade: string; floor: number }[]) =>
  rows.map((r) => `${r.grade}>=${r.floor}`).join(" ");

{
  const measured = measureFloors();
  const published = [...GRADE_FLOORS_PUBLISHED].map((r) => ({ grade: r.grade as string, floor: r.floor }));

  if (!sameFloors(measured, published)) {
    fail(
      "S3",
      "scale.ts grades at floors that DISAGREE with exam-shape.ts GRADE_FLOORS_PUBLISHED\n" +
        `        scale.ts applies : ${show(measured)}\n` +
        `        exam-shape says  : ${show(published)}`,
    );
  }
  if (!sameFloors(measured, HAND_TYPED_FROM_THE_PDF)) {
    fail(
      "S3",
      "scale.ts grades at floors that DISAGREE with this gate's own hand-typed copy of the PDF\n" +
        `        scale.ts applies : ${show(measured)}\n` +
        `        the PDF says     : ${show(HAND_TYPED_FROM_THE_PDF)}`,
    );
  }
  if (!sameFloors(published, HAND_TYPED_FROM_THE_PDF)) {
    fail(
      "S3",
      "exam-shape.ts GRADE_FLOORS_PUBLISHED disagrees with this gate's own hand-typed copy of the PDF\n" +
        `        exam-shape says : ${show(published)}\n` +
        `        the PDF says    : ${show(HAND_TYPED_FROM_THE_PDF)}`,
    );
  }

  // The PDF publishes no band below 200, so nothing may be graded below it, and
  // "D"/"E" must never be produced. Boundary probes are hand-typed.
  if (gradeForScore(199) !== null) fail("S3", `gradeForScore(199) returned ${gradeForScore(199)}, expected null`);
  if (gradeForScore(0) !== null) fail("S3", `gradeForScore(0) returned ${gradeForScore(0)}, expected null`);
  if (gradeForScore(200) !== "C") fail("S3", `gradeForScore(200) returned ${gradeForScore(200)}, expected "C"`);
  if (gradeForScore(220) !== "C") fail("S3", `gradeForScore(220) returned ${gradeForScore(220)}, expected "C" (the 27-day defect)`);
  if (gradeForScore(299) !== "C") fail("S3", `gradeForScore(299) returned ${gradeForScore(299)}, expected "C"`);
  if (gradeForScore(300) !== "C+") fail("S3", `gradeForScore(300) returned ${gradeForScore(300)}, expected "C+"`);
  if (gradeForScore(349) !== "C+") fail("S3", `gradeForScore(349) returned ${gradeForScore(349)}, expected "C+"`);
  if (gradeForScore(350) !== "B") fail("S3", `gradeForScore(350) returned ${gradeForScore(350)}, expected "B"`);
  if (gradeForScore(449) !== "B") fail("S3", `gradeForScore(449) returned ${gradeForScore(449)}, expected "B"`);
  if (gradeForScore(450) !== "A") fail("S3", `gradeForScore(450) returned ${gradeForScore(450)}, expected "A"`);
  if (gradeForScore(500) !== "A") fail("S3", `gradeForScore(500) returned ${gradeForScore(500)}, expected "A"`);
  for (let score = 0; score <= 500; score++) {
    const g = gradeForScore(score);
    if (g === "D" || g === "E") {
      fail("S3", `gradeForScore(${score}) returned "${g}" — no published range backs D or E`);
      break;
    }
  }
}

// ── S4 · every section rule declares WHERE IT CAME FROM ──────────────────────
//
// scale.ts shipped an invented grade band for 27 days because a confident comment
// is indistinguishable from a sourced one. src/lib/oet/section-rules.ts fixes that
// STRUCTURALLY: a quoted rule and an inferred rule are different shapes, so an
// inference has no `quote` field to put words into.
//
// This asserts the shapes hold, and — hand-typed — asserts which kind each rule
// is. If someone "upgrades" the no-return rule to quoted, they have to supply a
// sentence and a URL, and this gate's hand-typed expectation goes red until a
// human changes it deliberately.
{
  const rules: [string, { value: unknown; provenance: Provenance }][] = [
    ["READING_PART_A_TIME_LIMIT", READING_PART_A_TIME_LIMIT],
    ["READING_PARTS_BC_TIME_LIMIT", READING_PARTS_BC_TIME_LIMIT],
    ["READING_PART_A_NO_RETURN", READING_PART_A_NO_RETURN],
  ];
  if (rules.length === 0) fail("S4", "no section rules found — this gate would pass over nothing");

  for (const [name, rule] of rules) {
    const p = rule.provenance;
    if (p.kind === "quoted") {
      if (!p.quote || p.quote.trim().length < 10) fail("S4", `${name} is quoted but carries no sentence`);
      if (!/^https?:\/\//.test(p.url ?? "")) fail("S4", `${name} is quoted but carries no URL`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(p.read ?? "")) fail("S4", `${name} is quoted but records no read date`);
    } else if (p.kind === "inferred") {
      if (!p.from?.length) fail("S4", `${name} is inferred from nothing`);
      if (!p.because || p.because.trim().length < 20) fail("S4", `${name} is inferred with no reasoning`);
      if (!p.correctWhen || p.correctWhen.trim().length < 20) {
        fail("S4", `${name} is inferred with no statement of what would settle it`);
      }
      // An inference must not smuggle a sentence in through another field.
      if (JSON.stringify(p).includes('"quote"')) fail("S4", `${name} is inferred but carries a quote field`);
    } else {
      fail("S4", `${name} has an unrecognised provenance kind`);
    }
  }

  // HAND-TYPED. These say what each rule IS, and are never read from the module.
  if (READING_PART_A_TIME_LIMIT.provenance.kind !== "quoted") {
    fail("S4", "READING_PART_A_TIME_LIMIT must be quoted — OET publishes the 15 minutes");
  }
  if (READING_PARTS_BC_TIME_LIMIT.provenance.kind !== "quoted") {
    fail("S4", "READING_PARTS_BC_TIME_LIMIT must be quoted — OET publishes the 45 minutes");
  }
  if (READING_PART_A_NO_RETURN.provenance.kind !== "inferred") {
    fail(
      "S4",
      "READING_PART_A_NO_RETURN is marked as QUOTED. Nobody has read OET stating it — the FAQ " +
        "did not load on 2026-09-01. If it has now been read, change this expectation by hand in " +
        "the same edit as the sentence and URL.",
    );
  }
  // The learner-facing sentence must SAY it is our reading, not the exam's rule.
  const notice = sealedSectionNotice("Reading Part A");
  if (!/not a rule we have seen OET state/.test(notice)) {
    fail("S4", "the sealed-section notice no longer tells the learner the no-return rule is ours");
  }
}

// ── report ───────────────────────────────────────────────────────────────────
const GATES = ["S1 cited-never-stored", "S2 unsourced-verified", "S3 grade floors", "S4 rule provenance"];
for (const g of GATES) {
  const hits = failures.filter((f) => f.startsWith(g.slice(0, 2)));
  console.log(`  ${hits.length === 0 ? "PASS" : "FAIL"}  ${g}${hits.length ? ` (${hits.length})` : ""}`);
}
if (failures.length) {
  console.error(`\n[gate:sources] ${failures.length} breach(es):`);
  for (const f of failures) console.error(`  ${f}`);
  console.error("\n[gate:sources] BUILD BLOCKED.");
  process.exit(1);
}
console.log("[gate:sources] all clear");
