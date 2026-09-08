/**
 * BUILD THE 15 NEW READING PART A SETS AND 15 NEW PART B ITEMS FROM SOURCE.
 *
 * ── WHY THIS RUNS AT ALL ────────────────────────────────────────────────────
 *
 * READING_PART_A and READING_PART_B each sat at EXACTLY 15 active items in
 * production, which is exactly `FLOOR` in src/instrumentation.ts. One retirement
 * on either part and the app stops booting. This doubles both to 30 and puts a
 * margin of 15 under each.
 *
 * ── 🔴 IT REPORTS, IT DOES NOT SKIP ─────────────────────────────────────────
 *
 * Every question, every answer, every accepted variant is either parsed or
 * throws by name. A porting script that silently drops what it cannot read is
 * how three Urdu editorial notes once nearly shipped as accepted answers. If a
 * source file changes shape, this stops and says which file and which line.
 *
 * ── ON THE TITLES ───────────────────────────────────────────────────────────
 *
 * `scripts/seed/append.ts` is INSERT-ONLY and dedupes on
 * (taskType, profession, title). A title already on ANY row — including a
 * retired one — makes the new item SILENTLY SKIP. No error, no output.
 *
 * So the titles are not merely read out of the source. TITLES below is the
 * authority (the owner's own table), and the topic in each file's header is
 * checked against it. Two independent statements of the same title, and a
 * mismatch stops the build — because the one time this was done by eye, set 16
 * was written on "Anaphylaxis", which is set 1's live topic, and the collision
 * was invisible until the whole set had been authored twice.
 *
 * Run:  npx tsx scripts/seed/gen/_build_reading_sets.mts
 *       READING_SOURCE_DIR=... to point somewhere other than C:\Projects\_handoffs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { unwrap } from "../../wrap-rule";

const SRC = process.env.READING_SOURCE_DIR ?? "C:\\Projects\\_handoffs";
const OUT_DIR = "scripts/seed/gen";

// ── the owner's title table, verbatim from the command file ─────────────────
const TITLES: Record<number, string> = {
  16: "Part A — Pneumonia acquired in the community",
  17: "Part A — Delirium in the older inpatient",
  18: "Part A — Urinary catheters and infection",
  19: "Part A — Pain relief after surgery",
  20: "Part A — Malnutrition and feeding in hospital",
  21: "Part A — A flare-up of chronic obstructive lung disease",
  22: "Part A — Atrial fibrillation and anticoagulation",
  23: "Part A — Seizures and prolonged convulsions",
  24: "Part A — Diabetic ketoacidosis",
  25: "Part A — Heart failure and fluid overload",
  26: "Part A — Caring for a patient with a tracheostomy",
  27: "Part A — Care in the last days of life",
  28: "Part A — Infectious diarrhoea on the ward",
  29: "Part A — Caring for a patient with dementia in hospital",
  30: "Part A — Peripheral cannulas and phlebitis",
};

const PART_A_PROMPT =
  "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.";
const PART_A_GUIDANCE =
  "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read.";
const PART_B_PROMPT =
  "Read the short workplace text and answer the question by choosing the best option (a, b or c).";

const fail = (file: string, msg: string): never => {
  throw new Error(`[build-reading] ${file}: ${msg}`);
};

/**
 * 🔴 CONTENT REPAIRS APPLIED AT BUILD TIME, EACH WITH ITS MEASUREMENT.
 *
 * The source markdown lives in the owner's `_handoffs` directory, which is not
 * under version control. A repair typed there would be invisible to review, and
 * a repair typed into the GENERATED file would be silently undone by the next
 * build. So it lives here: in git, reviewable, and reapplied every run.
 *
 * Each entry states the rule it satisfies and the measurement before and after.
 * This is the D2 precedent the gate's own header records — when newly authored
 * Part B items breached D2, the distractor was REWRITTEN, not exempted.
 */
const OPTION_REPAIRS: { item: number; option: string; from: string; to: string; why: string }[] = [
  {
    item: 16,
    option: "C",
    from: "the time of the call has been written into the notes.",
    to: "the time of the call has been recorded.",
    why:
      "gate:distractor D2 — no option may exceed 1.6x the mean length of the others, " +
      "in words. Options were A 8 · B 4 · C 11, so C measured 11/6 = 1.83x and the " +
      "length alone told a candidate which option to discount. Rewritten to 8 words: " +
      "A 8 · B 4 · C 8, worst ratio 1.33x. The distractor still says what it said — " +
      "recording the time is in the passage, but as a separate rule from escalation — " +
      "so the key and the guidance note are untouched.",
  },
];

/**
 * 🔴 VARIANTS WITHDRAWN, WITH THE REASON. OWNER MAY REVERSE ANY OF THESE.
 *
 * Narrowing what a candidate may write is the dangerous direction — it marks a
 * right answer wrong — so nothing is withdrawn on style. Each entry below exists
 * because the SOURCE ITSELF contradicts the variant.
 */
const VARIANT_REPAIRS: { set: number; q: string; remove: string; why: string }[] = [
  {
    set: 20,
    q: "q13",
    remove: "flushed",
    why:
      "gate:accept-lists A10 — no two different answers inside one item may normalise " +
      "alike. q13's answer is 'flush' with 'flushed' accepted; q19's answer IS 'flushed', " +
      "and for q19 the author wrote 'sirf flushed — is ka koi doosra lafz nahi', reserving " +
      "that exact form to it. Accepting it on q13 as well contradicts that reservation " +
      "inside the same item. 'flush' and the article forms still mark q13 correct. " +
      "REVERSIBLE: if the owner would rather q19 accept a second form, withdraw this " +
      "entry and give q19 the variant instead.",
  },
];

const slug = (title: string): string =>
  title
    .replace(/^Part [AB] — /, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .split("-")
    .slice(0, 4)
    .join("-");

/** Strip the Urdu rubric/among-lines and the trailing GINTI table. */
function bodyOf(block: string): string {
  return unwrap(block.trim())
    .split("\n")
    .filter((l) => !/^\s*\*[^*]/.test(l)) // italic rubric lines
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

type Q =
  | { id: string; kind: "match"; stem: string; answer: string; options: { id: string; text: string }[] }
  | { id: string; kind: "gap"; stem: string; answer: string; variants?: string[] };

// ─────────────────────────────────────────────────────────────────────────────
// PART A
// ─────────────────────────────────────────────────────────────────────────────
type Item = Record<string, unknown>;
const partA: Item[] = [];
const reportA: string[] = [];
const singleForm: { item: string; answer: string; why: string }[] = [];
const repairsApplied: string[] = [];

for (let n = 16; n <= 30; n++) {
  const file = `AlmiOET_PartA_set_${n}.md`;
  const raw = readFileSync(join(SRC, file), "utf8").replace(/\r\n/g, "\n");

  // ── header topic, checked against the owner's table ──────────────────────
  const head = raw.match(/^#\s+AlmiOET\s+—\s+Reading Part A,\s+set\s+(\d+)\s+—\s+Topic:\s*(.+)$/m);
  if (!head) fail(file, "no '# AlmiOET — Reading Part A, set N — Topic: …' header");
  if (Number(head![1]) !== n) fail(file, `header says set ${head![1]}, file says ${n}`);
  const topic = head![2].trim();
  const expected = TITLES[n];
  if (`Part A — ${topic}` !== expected) {
    fail(file, `topic "${topic}" does not match the commanded title "${expected}"`);
  }

  // ── four texts ───────────────────────────────────────────────────────────
  const texts: { id: string; heading: string; body: string }[] = [];
  const textRe = /^##\s+TEXT\s+([A-D])\s+—\s+(.+)$/gm;
  const marks: { id: string; heading: string; at: number; end: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = textRe.exec(raw)) !== null) {
    marks.push({ id: m[1], heading: m[2].trim(), at: m.index + m[0].length, end: 0 });
  }
  if (marks.length !== 4) fail(file, `expected 4 '## TEXT X —' headings, found ${marks.length}`);
  for (let i = 0; i < marks.length; i++) {
    const stop =
      i + 1 < marks.length
        ? raw.lastIndexOf("## TEXT", marks[i + 1].at)
        : (() => {
            const q = raw.indexOf("## Questions 1");
            return q === -1 ? fail(file, "no '## Questions 1–7' section") : q;
          })();
    const body = bodyOf(raw.slice(marks[i].at, stop).replace(/\n---\s*$/, ""));
    if (!body) fail(file, `TEXT ${marks[i].id} has an empty body`);
    texts.push({ id: marks[i].id, heading: marks[i].heading, body });
  }

  // ── questions ────────────────────────────────────────────────────────────
  //
  // Each regex is scoped to its OWN section. Run over the whole file, the
  // answer-question pattern's stem spans newlines and swallows the entire
  // matching section from "**1.**" down to the first "**Answer:**" — which is
  // how this first failed, loudly, with "question ids are q1,q1,q2,…".
  const q1At = raw.indexOf("## Questions 1");
  const q8At = raw.indexOf("## Questions 8");
  const gintiAt = raw.indexOf("## GINTI");
  if (q1At === -1 || q8At === -1) fail(file, "missing a '## Questions …' section heading");
  const matchRegion = raw.slice(q1At, q8At);
  const gapRegion = raw.slice(q8At, gintiAt === -1 ? raw.length : gintiAt);

  const questions: Q[] = [];

  // 1–7 matching:  **1.** how long recovery may take? → **D**
  const matchRe = /^\*\*(\d+)\.\*\*\s+(.+?)\s*→\s*\*\*([A-D])\*\*\s*$/gm;
  while ((m = matchRe.exec(matchRegion)) !== null) {
    const idx = Number(m[1]);
    questions.push({
      id: `q${idx}`,
      kind: "match",
      stem: m[2].trim(),
      answer: m[3],
      options: ["A", "B", "C", "D"].map((id) => ({ id, text: id })),
    });
  }
  if (questions.length !== 7) fail(file, `expected 7 matching questions, parsed ${questions.length}`);

  // 8–20:  **8.** stem   /   **Answer: x** · *qubool: a · b*
  const gapRe =
    /^\*\*(\d+)\.\*\*\s+([\s\S]*?)\n\*\*Answer:\s*([^*]+?)\*\*(?:\s*·\s*\*qubool:\s*([^*]+?)\*)?\s*$/gm;
  const gaps: Q[] = [];
  while ((m = gapRe.exec(gapRegion)) !== null) {
    const idx = Number(m[1]);
    const stem = m[2].replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    const answer = m[3].trim();
    let variants: string[] = [];
    const qubool = (m[4] ?? "").trim();
    if (!qubool) {
      // No accepted-forms line at all. That is not the same as the author
      // writing "there is nothing else to accept", and it must not be recorded
      // as if it were — gate:accept-lists A4 would then be satisfied by an
      // omission. Stop and name it.
      fail(file, `q${idx} ("${answer}") has no "qubool:" line — A4 needs an accept-list or a stated reason there is none`);
    }
    if (qubool) {
      // "sirf X — is ka koi doosra lafz nahi" is a DELIBERATE empty variant list.
      if (/\bsirf\b[\s\S]*koi doosra lafz nahi/i.test(qubool)) {
        // The author states there is nothing else to accept. An EMPTY variants
        // array is deliberate here — never a guessed one. gate:accept-lists A4
        // must be told the difference between this and a missing accept-list,
        // so it is recorded with the author's own sentence as the reason.
        variants = [];
        singleForm.push({ item: expected, answer, why: `author: '${qubool}'` });
      } else {
        variants = qubool
          .split("·")
          .map((v) => v.trim())
          .filter(Boolean);
        for (const v of variants) {
          if (/[\u0600-\u06FF]/.test(v)) fail(file, `q${idx}: variant "${v}" contains Urdu script`);
          if (/\bsirf\b|\bnahi\b|\bhai\b/i.test(v)) {
            fail(file, `q${idx}: variant "${v}" looks like an editorial note, not an answer`);
          }
        }
      }
    }
    for (const r of VARIANT_REPAIRS.filter((r) => r.set === n && r.q === `q${idx}`)) {
      if (!variants.includes(r.remove)) {
        fail(file, `q${idx}: variant repair expected to remove "${r.remove}", but the source no longer offers it`);
      }
      variants = variants.filter((v) => v !== r.remove);
      repairsApplied.push(`  set ${n} ${r.q} — variant "${r.remove}" withdrawn (${r.why.split(" — ")[0]})`);
    }

    const q: Q = { id: `q${idx}`, kind: "gap", stem, answer };
    if (variants.length > 0) {
      (q as { variants?: string[] }).variants = variants;
    } else if (!singleForm.some((e) => e.item === expected && e.answer === answer)) {
      // A repair that empties the list turns the answer single-form, and A4 must
      // be told, or it reads the absence as an accept-list nobody wrote. The
      // guard is because the "sirf" branch above has already declared its own.
      singleForm.push({
        item: expected,
        answer,
        why: `variant repair left no accepted alternative (source said: ${qubool})`,
      });
    }
    gaps.push(q);
  }
  if (gaps.length !== 13) fail(file, `expected 13 answer/completion questions, parsed ${gaps.length}`);
  questions.push(...gaps);

  questions.sort((a, b) => Number(a.id.slice(1)) - Number(b.id.slice(1)));
  const ids = questions.map((q) => q.id).join(",");
  const want = Array.from({ length: 20 }, (_, i) => `q${i + 1}`).join(",");
  if (ids !== want) fail(file, `question ids are ${ids}`);

  // ── every answer must appear in its own texts ────────────────────────────
  const allText = texts.map((t) => t.body).join(" ").toLowerCase();
  for (const q of questions) {
    if (q.kind !== "gap") continue;
    if (!allText.includes(q.answer.toLowerCase())) {
      reportA.push(`  ⚠ ${expected} / ${q.id} — answer "${q.answer}" not found verbatim in its texts`);
    }
  }

  const words = (texts.map((t) => t.body).join(" ") + " " + questions.map((q) => q.stem).join(" "))
    .split(/\s+/)
    .filter(Boolean).length;
  const spread = ["A", "B", "C", "D"].map(
    (L) => `${L} ${questions.filter((q) => q.kind === "match" && q.answer === L).length}`,
  );
  reportA.push(`  set ${n}  ${String(words).padStart(4)} words  ${spread.join(" · ")}  ${expected}`);

  partA.push({
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: expected,
    prompt: PART_A_PROMPT,
    difficulty: "CORE",
    topicTag: slug(expected),
    timeLimitSeconds: 0,
    active: true,
    payload: { texts, questions },
    guidanceNote: PART_A_GUIDANCE,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// PART B
// ─────────────────────────────────────────────────────────────────────────────
const partB: Item[] = [];
const reportB: string[] = [];

for (const file of [
  "AlmiOET_PartB_reading_items_16_20.md",
  "AlmiOET_PartB_reading_items_21_25.md",
  "AlmiOET_PartB_reading_items_26_30.md",
]) {
  const raw = readFileSync(join(SRC, file), "utf8").replace(/\r\n/g, "\n");
  const blocks = raw.split(/^##\s+ITEM\s+/m).slice(1);
  if (blocks.length !== 5) fail(file, `expected 5 '## ITEM' blocks, found ${blocks.length}`);

  for (const block of blocks) {
    const head = block.match(/^(\d+)\s+—\s+(.+)$/m);
    if (!head) fail(file, "an ITEM block has no 'NN — title' header");
    const num = Number(head![1]);
    const title = `Part B — ${head![2].trim()}`;

    const qAt = block.indexOf("### QUESTION");
    if (qAt === -1) fail(file, `item ${num}: no '### QUESTION'`);
    const body = bodyOf(block.slice(block.indexOf("\n", head!.index! + head![0].length), qAt));
    if (!body) fail(file, `item ${num}: empty passage`);

    const qPart = block.slice(qAt);
    const stemM = qPart.match(/\*\*Stem:\*\*\s*([\s\S]*?)\n\s*-\s*A\)/);
    if (!stemM) fail(file, `item ${num}: no '**Stem:**' followed by option A`);
    const stem = stemM![1].replace(/\n/g, " ").replace(/\s+/g, " ").trim();

    const options: { id: string; text: string }[] = [];
    for (const L of ["A", "B", "C"]) {
      const om = qPart.match(new RegExp(`^\\s*-\\s*${L}\\)\\s*([\\s\\S]*?)\\s*$`, "m"));
      if (!om) fail(file, `item ${num}: no option ${L})`);
      let text = om![1].replace(/\s+/g, " ").trim();
      const repair = OPTION_REPAIRS.find((r) => r.item === num && r.option === L);
      if (repair) {
        // A repair that no longer matches its source describes an item that has
        // changed underneath it. Stop rather than quietly apply nothing.
        if (text !== repair.from) {
          fail(file, `item ${num} option ${L}: repair expected "${repair.from}", source has "${text}"`);
        }
        text = repair.to;
        repairsApplied.push(`  item ${num} option ${L} rewritten — ${repair.why.split(".")[0]}.`);
      }
      options.push({ id: L.toLowerCase(), text });
    }

    const ansM = qPart.match(/\*\*Answer:\s*([ABC])\*\*/);
    if (!ansM) fail(file, `item ${num}: no '**Answer: X**'`);
    const answer = ansM![1].toLowerCase();

    const guideM = qPart.match(/\*\*Guidance:\*\*\s*([\s\S]*?)(?:\n\n|$)/);
    const guidanceNote = guideM ? guideM[1].replace(/\s+/g, " ").trim() : undefined;

    const words = body.split(/\s+/).filter(Boolean).length;
    const keyLen = options.find((o) => o.id === answer)!.text.length;
    const longest = Math.max(...options.map((o) => o.text.length));
    reportB.push(
      `  item ${num}  ${String(words).padStart(3)} words  key ${answer.toUpperCase()}` +
        `${keyLen === longest ? "  ⚠ KEY IS LONGEST OPTION" : ""}  ${title}`,
    );

    partB.push({
      subTest: "READING",
      taskType: "READING_PART_B",
      profession: null,
      title,
      prompt: PART_B_PROMPT,
      difficulty: "CORE",
      topicTag: slug(title),
      timeLimitSeconds: 0,
      active: true,
      payload: { passages: [{ id: "p1", body }], questions: [{ id: "q1", stem, answer, options }] },
      ...(guidanceNote ? { guidanceNote } : {}),
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// EMIT
// ─────────────────────────────────────────────────────────────────────────────
const header = (what: string, count: number) => `// GENERATED by scripts/seed/gen/_build_reading_sets.mts — do not hand-edit.
//
// ${count} ${what}, authored 2026-09-04, to lift READING_PART_A and
// READING_PART_B off the boot floor in src/instrumentation.ts. Both parts stood
// at EXACTLY 15 active items — FLOOR is 15 — so one retirement would have
// stopped production booting. This takes each to 30.
//
// Titles are the owner's table, cross-checked against each source file's own
// header at build time: append.ts dedupes on (taskType, profession, title) and
// SILENTLY SKIPS a title already on any row, retired ones included.
//
// Accepted answers live in each item's own payload as \`variants\`. The
// READING_PART_A_ACCEPT overlay in src/lib/oet/accept-lists.ts is NOT touched —
// its keys belong to retired items and its variants serve nothing.
import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = `;

writeFileSync(
  join(OUT_DIR, "reading_a_sets.ts"),
  header("full-length Reading Part A sets", partA.length) +
    JSON.stringify(partA, null, 2) +
    " as unknown as Prisma.OetItemCreateManyInput[];\n",
  "utf8",
);
writeFileSync(
  join(OUT_DIR, "reading_b_sets.ts"),
  header("Reading Part B items", partB.length) +
    JSON.stringify(partB, null, 2) +
    " as unknown as Prisma.OetItemCreateManyInput[];\n",
  "utf8",
);

console.log(`\n[build-reading] READING_PART_A — ${partA.length} set(s)`);
for (const l of reportA) console.log(l);
console.log(`\n[build-reading] READING_PART_B — ${partB.length} item(s)`);
for (const l of reportB) console.log(l);
if (repairsApplied.length > 0) {
  console.log(`\n[build-reading] ${repairsApplied.length} content repair(s) applied at build time:`);
  for (const l of repairsApplied) console.log(l);
}
console.log(`\n[build-reading] wrote ${OUT_DIR}/reading_a_sets.ts and ${OUT_DIR}/reading_b_sets.ts`);

// ── the A4 single-form declarations, derived from the source, not hand-typed ──
writeFileSync(
  "scripts/gates/reading_sets_single_form.ts",
  `// GENERATED by scripts/seed/gen/_build_reading_sets.mts — do not hand-edit.
//
// Answers in the 15 new Reading Part A sets where the AUTHOR wrote that there is
// nothing else to accept ("sirf X — is ka koi doosra lafz nahi"). gate:accept-
// lists A4 requires every free-text answer to have an accept-list; these
// deliberately have none, and A4 must be able to tell that apart from an answer
// whose accept-list nobody wrote. The reason is the author's own sentence.
//
// Closed both ways by A4: an unlisted answer with no accept-list fails, and a
// listed answer that GAINS one fails too, so this cannot rot.
//
// 🔴 TWO ROWS IN THIS FILE WERE OVERRULED BY THE OWNER ON 7 SEPTEMBER 2026.
//
//     "Part A — A flare-up of chronic obstructive lung disease" / carbon dioxide
//     "Part A — Diabetic ketoacidosis" / litres
//
// They are NOT deleted, because this file is a record of what the author wrote
// and deleting a row here would be re-writing that record — and the next build
// would restore it anyway. The override lives in scripts/gates/accept-lists.ts as
// A4_SINGLE_FORM_OVERRULED, with his ruling quoted in full. In short: "single
// form, nothing else to accept" was aimed at PARAPHRASES, not at whether a
// standard clinical abbreviation of the same word is acceptable. A student who
// writes CO2 has not written a different word; they have written the same word
// short.
//
// If you are reading this file to learn what is accepted, READ THAT LIST TOO.
export const READING_SETS_SINGLE_FORM: { item: string; answer: string; why: string }[] =
${JSON.stringify(singleForm, null, 2)};
`,
  "utf8",
);
console.log(`\n[build-reading] ${singleForm.length} deliberately single-form answer(s) declared for A4`);
