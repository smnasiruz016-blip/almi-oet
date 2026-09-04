/**
 * UNWRAP THE AUTHORED PROSE IN LIVE ITEMS — a production UPDATE, and a
 * reversible one.
 *
 * The 360 new Writing and Speaking items were authored in markdown wrapped by
 * hand at ~100 characters. Those breaks travelled into the payload, the composer
 * renders `whitespace-pre-wrap`, and every wrap became a visible break
 * mid-sentence. The owner saw it on a phone; no gate could, because `words()`
 * counts a newline and a space identically — only the SHAPE changed.
 *
 *   npx tsx scripts/fix-hard-wraps.mts                 DRY RUN — writes nothing
 *   npx tsx scripts/fix-hard-wraps.mts --confirm       writes, after saving a rollback
 *   npx tsx scripts/fix-hard-wraps.mts --one --confirm just ONE row, to look at
 *   npx tsx scripts/fix-hard-wraps.mts --restore <file> --confirm   puts it all back
 *
 * ── 🔴 THE RULE ─────────────────────────────────────────────────────────────
 *
 * A single newline INSIDE a paragraph becomes a space. Two or more newlines are
 * a real paragraph break and are left exactly as they are.
 *
 * ⚠️ AND A LINE THAT BEGINS A LIST ITEM KEEPS THE NEWLINE BEFORE IT. This is not
 * caution in the abstract: a de-wrap on this project has already merged two
 * bullet lists into one paragraph. Measured here first — the Writing case notes
 * carry 18 such newlines, and joining them would have swallowed 18 bullets.
 *
 * ── 🔴 IT ONLY TOUCHES ACTIVE ROWS ──────────────────────────────────────────
 *
 * Active is what a learner is served, and that is what is broken. 127 RETIRED
 * Writing rows carry 1,027 wraps of their own; they are measured, reported and
 * left, because a production write should be the smallest one that fixes the
 * fault in front of the customer.
 *
 * ── ROLLBACK ────────────────────────────────────────────────────────────────
 *
 * Before a single row is written, every original value is saved to
 * docs/rollback/hard-wraps-<timestamp>.json — id, field and the exact old
 * string. `--restore <file> --confirm` writes them back verbatim. Master
 * Standard §I: a production change carries its own way back.
 */
import "./load-env.mjs";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { PrismaClient } from "@prisma/client";
import { words } from "./gates/words";
import { unwrap } from "./wrap-rule";
import { requireProdWrite } from "./prod-write-guard";

const CONFIRM = process.argv.includes("--confirm");
const ONE = process.argv.includes("--one");
const onlyIdx = process.argv.indexOf("--only");
/** Restrict to one task type. Used to land SPEAKING — where every break is
 *  unambiguously a wrap — while the WRITING rule was still being ruled on. */
const ONLY = onlyIdx >= 0 ? process.argv[onlyIdx + 1] : null;
const restoreIdx = process.argv.indexOf("--restore");
const RESTORE_FILE = restoreIdx >= 0 ? process.argv[restoreIdx + 1] : null;

const FIELD = { WRITING_LETTER: "caseNotes", SPEAKING_ROLEPLAY: "candidateCard" } as const;

// The rule lives in scripts/wrap-rule.ts so a measurement can import it
// without running this repair. See that file for how its three conditions were
// arrived at, and for the twelve lines that settled the third.

const prisma = new PrismaClient();
try {
  // ── restore ───────────────────────────────────────────────────────────────
  if (RESTORE_FILE) {
    const saved = JSON.parse(readFileSync(RESTORE_FILE, "utf8")) as {
      id: string;
      field: string;
      before: string;
    }[];
    console.log(`[restore] ${saved.length} row(s) from ${RESTORE_FILE}`);
    if (!CONFIRM) {
      console.log("[restore] --confirm nahi diya: kuch nahi likha gaya.");
      process.exit(0);
    }
    let n = 0;
    for (const s of saved) {
      const row = await prisma.oetItem.findUnique({ where: { id: s.id }, select: { payload: true } });
      if (!row) continue;
      const payload = { ...(row.payload as Record<string, unknown>), [s.field]: s.before };
      await prisma.oetItem.update({ where: { id: s.id }, data: { payload: payload as never } });
      n += 1;
    }
    console.log(`[restore] ${n} row(s) written back.`);
    process.exit(0);
  }

  // ── plan ──────────────────────────────────────────────────────────────────
  const rows = await prisma.oetItem.findMany({
    where: {
      taskType: ONLY ? (ONLY as never) : { in: ["WRITING_LETTER", "SPEAKING_ROLEPLAY"] },
      active: true,
    },
    select: { id: true, taskType: true, title: true, payload: true },
    orderBy: [{ taskType: "asc" }, { title: "asc" }],
  });
  if (rows.length === 0) {
    console.error("[fix] koi active row nahi mila — inkar");
    process.exit(1);
  }

  type Job = { id: string; taskType: string; title: string; field: string; before: string; after: string };
  const jobs: Job[] = [];
  for (const r of rows) {
    const field = FIELD[r.taskType as keyof typeof FIELD];
    const before = String((r.payload as Record<string, unknown>)[field] ?? "");
    const after = unwrap(before);
    if (after !== before) {
      jobs.push({ id: r.id, taskType: r.taskType, title: r.title, field, before, after });
    }
  }

  const nl = (s: string) => (s.match(/\n/g) ?? []).length;
  const removed = jobs.reduce((n, j) => n + (nl(j.before) - nl(j.after)), 0);
  const wordsBefore = jobs.reduce((n, j) => n + words(j.before), 0);
  const wordsAfter = jobs.reduce((n, j) => n + words(j.after), 0);

  console.log(`[fix] active rows read: ${rows.length}`);
  console.log(`[fix] rows that change: ${jobs.length}`);
  for (const t of Object.keys(FIELD)) {
    console.log(`        ${t.padEnd(20)} ${jobs.filter((j) => j.taskType === t).length}`);
  }
  console.log(`[fix] newlines removed: ${removed}`);
  console.log(`[fix] words before: ${wordsBefore} · after: ${wordsAfter} · farq: ${wordsAfter - wordsBefore}`);

  // 🔴 THE WORD COUNT MUST NOT MOVE. `words()` treats a newline and a space
  // alike, so unwrapping is invisible to it. If this is not zero the transform
  // did something else as well, and that is a stop, not a warning.
  if (wordsAfter !== wordsBefore) {
    console.error(`\n🔴 lafzon ki ginti badal gayi (${wordsBefore} -> ${wordsAfter}) — RUK RAHA HOON, kuch nahi likha.`);
    process.exit(1);
  }

  console.log(`\n[fix] teen namoone — pehle / baad:`);
  for (const j of jobs.slice(0, 3)) {
    const cut = (s: string) => s.split("\n").slice(0, 4).join("\n").slice(0, 240);
    console.log(`\n  ── ${j.taskType} · ${j.title}`);
    console.log(`  PEHLE:\n${cut(j.before).split("\n").map((l) => `    | ${l}`).join("\n")}`);
    console.log(`  BAAD:\n${cut(j.after).split("\n").map((l) => `    | ${l}`).join("\n")}`);
  }

  const todo = ONE ? jobs.slice(0, 1) : jobs;
  if (!CONFIRM) {
    console.log(`\n[fix] DRY RUN — kuch nahi likha gaya. --confirm se ${todo.length} row(s) badlenge.`);
    process.exit(0);
  }

  // ── rollback first, always ────────────────────────────────────────────────
  mkdirSync(join(process.cwd(), "docs", "rollback"), { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const file = join(process.cwd(), "docs", "rollback", `hard-wraps-${stamp}.json`);
  writeFileSync(
    file,
    `${JSON.stringify(todo.map((j) => ({ id: j.id, field: j.field, title: j.title, before: j.before })), null, 2)}\n`,
    "utf8",
  );
  console.log(`\n[fix] rollback likha: ${file} (${todo.length} row(s))`);

  let written = 0;
  requireProdWrite("scripts/fix-hard-wraps.mts");
  for (const j of todo) {
    const row = await prisma.oetItem.findUnique({ where: { id: j.id }, select: { payload: true } });
    if (!row) continue;
    const payload = { ...(row.payload as Record<string, unknown>), [j.field]: j.after };
    await prisma.oetItem.update({ where: { id: j.id }, data: { payload: payload as never } });
    written += 1;
  }
  console.log(`[fix] ${written} row(s) updated.`);
  console.log(`[fix] wapas karne ke liye: npx tsx scripts/fix-hard-wraps.mts --restore "${file}" --confirm`);
} finally {
  await prisma.$disconnect();
}
