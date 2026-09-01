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
 *   S1  MANIFEST <-> DISK.  Re-hash every file in docs/sources/ and fail on
 *       (a) a file listed in docs/sources/README.md that is missing from disk,
 *       (b) a file whose sha256 or byte count no longer matches its manifest row,
 *       (c) a file present on disk but absent from the manifest.
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
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { GRADE_FLOORS_PUBLISHED } from "../../src/lib/oet/exam-shape";
import { gradeForScore } from "../../src/lib/oet/scale";

const ROOT = process.cwd();
const SOURCES_DIR = join(ROOT, "docs", "sources");
const MANIFEST = join(SOURCES_DIR, "README.md");
const SCALE = join(ROOT, "src", "lib", "oet", "scale.ts");

const failures: string[] = [];
const fail = (gate: string, msg: string) => failures.push(`${gate}  ${msg}`);

// ── S1 · manifest <-> disk ───────────────────────────────────────────────────
// The manifest is a markdown table in docs/sources/README.md:
//   | file | sha256 | bytes | fetched |
type Row = { file: string; sha256: string; bytes: number; fetched: string };

function parseManifest(md: string): Row[] {
  const rows: Row[] = [];
  for (const line of md.split(/\r?\n/)) {
    const t = line.trim();
    if (!t.startsWith("|")) continue;
    const cells = t.split("|").slice(1, -1).map((c) => c.trim());
    if (cells.length !== 4) continue;
    if (!/^[0-9a-f]{64}$/i.test(cells[1])) continue; // skips the header and the --- rule
    rows.push({
      file: cells[0],
      sha256: cells[1].toLowerCase(),
      bytes: Number(cells[2]),
      fetched: cells[3],
    });
  }
  return rows;
}

{
  let md = "";
  try {
    md = readFileSync(MANIFEST, "utf8");
  } catch {
    fail("S1", "docs/sources/README.md is missing — the manifest IS the record of provenance");
  }

  const rows = parseManifest(md);
  if (md && rows.length === 0) {
    // A gate over an empty population passes vacuously. Say so loudly instead.
    fail("S1", "docs/sources/README.md parsed to ZERO manifest rows — the table format changed");
  }

  let onDisk: string[] = [];
  try {
    onDisk = readdirSync(SOURCES_DIR).filter((f) => f !== "README.md");
  } catch {
    fail("S1", "docs/sources/ does not exist");
  }

  for (const row of rows) {
    const path = join(SOURCES_DIR, row.file);
    let buf: Buffer;
    try {
      buf = readFileSync(path);
    } catch {
      fail("S1", `${row.file} is listed in the manifest but MISSING from docs/sources/`);
      continue;
    }
    const sha = createHash("sha256").update(buf).digest("hex");
    if (sha !== row.sha256) {
      fail(
        "S1",
        `${row.file} HASH CHANGED — manifest ${row.sha256}, on disk ${sha}. ` +
          "The file our numbers were read from is not the file on disk any more.",
      );
    }
    const bytes = statSync(path).size;
    if (bytes !== row.bytes) {
      fail("S1", `${row.file} is ${bytes} bytes, manifest says ${row.bytes}`);
    }
  }

  const listed = new Set(rows.map((r) => r.file));
  for (const f of onDisk) {
    if (!listed.has(f)) {
      fail(
        "S1",
        `${f} is in docs/sources/ but NOT listed in README.md — an artefact with no ` +
          "recorded provenance is not a source, it is a file someone left behind",
      );
    }
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

// ── report ───────────────────────────────────────────────────────────────────
const GATES = ["S1 manifest", "S2 unsourced-verified", "S3 grade floors"];
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
