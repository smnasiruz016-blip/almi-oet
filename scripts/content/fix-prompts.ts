/**
 * WRITE THE `prompt` COLUMN — AND NOTHING ELSE — FROM A CHECKED-IN LIST.
 *
 *   npx tsx scripts/content/fix-prompts.ts <list.json>                       DRY RUN
 *   ALLOW_PROD_WRITE=1 npx tsx scripts/content/fix-prompts.ts <list.json> --confirm --max-rows N
 *
 * ── WHY THIS IS ITS OWN SCRIPT AND NOT A FLAG ON THE APPLIER ────────────────
 *
 * 🔴 RULED 8 SEPTEMBER 2026. apply-verified-content-2026-09-08.ts writes
 * `payload` and nothing else, and asserts the shape of its own update object to
 * keep that true. That single property is what made three production writes safe
 * in one day. Teaching it a second column for one job would put a hole in the
 * property, and a hole opened for one job outlives the job.
 *
 * The house already has the pattern: retire-fragments.mts writes only `active`.
 * One script, one column, one checked-in list.
 *
 * ── WHAT IT IS FOR ─────────────────────────────────────────────────────────
 *
 * GAP-046. The session page renders the ROW's prompt —
 * src/app/(app)/practice/session/[sessionId]/page.tsx:231, `prompt={current.item.prompt}` —
 * and registry.ts carries no prompt at all. Six Reading Part C rows say
 * "(A, B or C)" while offering four options, so a learner would be told there are
 * three.
 *
 * ── 🔴 A PROMPT AND ITS PAYLOAD MOVE TOGETHER ──────────────────────────────
 *
 * Either both land or neither does. A prompt that describes a shape the row does
 * not yet have is a defect for as long as the gap is open. That is why the list
 * this ships with names six rows and not the twenty-one that lack the prompt in
 * gen/: the other fifteen are still two questions of three options in the
 * DATABASE, so their "(a, b or c)" is true of the row as it stands, and this
 * prompt would be a fresh lie about them.
 *
 * ── WHAT IT REFUSES ────────────────────────────────────────────────────────
 *
 *   1  a slug in the list matching NO row
 *   2  a slug matching MORE THAN ONE row
 *   3  rows-to-update exceeding --max-rows (required for a write, ignored in a
 *      dry run — the operator states what they expect)
 *   4  being asked to write any column but `prompt`, asserted against WRITABLE
 *      rather than trusted to the literal below
 *
 * A row whose prompt already equals the target is a NO-OP, reported and not
 * written — not a failure. That is the difference between "already done" and
 * "wrong", and only the second should stop a run.
 */
import "../load-env.mjs";
import { readFileSync } from "node:fs";
import { PrismaClient } from "@prisma/client";
import { requireProdWrite } from "../prod-write-guard";

const SCRIPT = "scripts/content/fix-prompts.ts";
const CONFIRM = process.argv.includes("--confirm");

/** 🔴 THE ONE COLUMN. Stop 4 asserts against this rather than trusting `data`. */
const WRITABLE = ["prompt"] as const;
const NEVER_WRITTEN = [
  "payload", "active", "slug", "form", "id", "createdAt", "subTest", "taskType",
  "profession", "title", "difficulty", "guidanceNote", "timeLimitSeconds", "topicTag",
];

// The explicit annotation is what lets TypeScript treat a call as unreachable
// past this point, so a stop condition narrows the code after it.
const die: (msg: string) => never = (msg) => {
  console.error(`\n[fix-prompts] 🔴 STOP — ${msg}\n`);
  process.exit(1);
};

const listPath = process.argv.slice(2).find((a) => !a.startsWith("--") && !/^\d+$/.test(a));
if (!listPath) {
  console.error(`usage: npx tsx ${SCRIPT} <list.json> [--confirm] [--max-rows N]`);
  process.exit(2);
}

function maxRows(): number | null {
  const i = process.argv.indexOf("--max-rows");
  if (i === -1) return null;
  const n = Number(process.argv[i + 1]);
  if (!Number.isInteger(n) || n < 0) die(`--max-rows needs a non-negative integer, got ${process.argv[i + 1]}`);
  return n;
}

type Entry = { slug: string; prompt: string };

/** Accepts `{ items: [...] }` or a bare array, so a list can carry its own
 *  reasoning without needing a second format. */
function readList(path: string): Entry[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(path, "utf8"));
  } catch (e) {
    die(`${path}: could not be read or parsed — ${(e as Error).message}`);
  }
  const arr = Array.isArray(parsed) ? parsed : (parsed as { items?: unknown } | null)?.items;
  if (!Array.isArray(arr) || arr.length === 0) {
    die(`${path}: neither a non-empty array nor an object with a non-empty "items" array`);
  }
  const out = (arr as Entry[]).map((r, i) => {
    if (!r || typeof r.slug !== "string" || !r.slug) die(`${path} row ${i + 1}: no slug`);
    if (typeof r.prompt !== "string" || !r.prompt) die(`${path} row ${i + 1} (${r.slug}): no prompt`);
    return { slug: r.slug, prompt: r.prompt };
  });
  const dupes = out.map((r) => r.slug).filter((v, i, a) => a.indexOf(v) !== i);
  if (dupes.length > 0) die(`${path}: duplicate slug(s) ${[...new Set(dupes)].join(", ")}`);
  return out;
}

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const list = readList(listPath!);
  console.log(`[fix-prompts] ${list.length} row(s) from ${listPath}`);

  const rows = await prisma.oetItem.findMany({
    where: { slug: { in: list.map((r) => r.slug) } },
    select: { id: true, slug: true, taskType: true, active: true, prompt: true },
  });

  // ── stop 2 · a slug matching more than one row ────────────────────────────
  const bySlug = new Map<string, typeof rows>();
  for (const r of rows) bySlug.set(r.slug!, [...(bySlug.get(r.slug!) ?? []), r]);
  const dupes = [...bySlug.entries()].filter(([, v]) => v.length > 1);
  if (dupes.length > 0) {
    for (const [s, v] of dupes) console.error(`    ${s} matches ${v.length} rows`);
    die(`stop 2 · ${dupes.length} slug(s) match more than one row — an UPDATE would hit the wrong item`);
  }

  // ── stop 1 · a slug matching no row ───────────────────────────────────────
  const absent = list.filter((r) => !bySlug.has(r.slug));
  if (absent.length > 0) {
    for (const r of absent.slice(0, 30)) console.error(`    ${r.slug}`);
    die(
      `stop 1 · ${absent.length} slug(s) matched no row. A typo must stop the run rather than\n` +
        `  quietly shrink it, and a missing row is a question, not a gap to fill.`,
    );
  }

  // ── the plan ─────────────────────────────────────────────────────────────
  const plan: { slug: string; from: string; to: string }[] = [];
  let already = 0;
  console.log(`\n| slug | active | before -> after |`);
  for (const r of list) {
    const row = bySlug.get(r.slug)![0];
    if ((row.prompt ?? "") === r.prompt) {
      already += 1;
      console.log(`  ${r.slug}  (active ${row.active})  already correct — no action`);
      continue;
    }
    plan.push({ slug: r.slug, from: row.prompt ?? "", to: r.prompt });
    console.log(`  ${r.slug}  (active ${row.active})`);
    console.log(`      before: ${JSON.stringify(row.prompt ?? "")}`);
    console.log(`      after : ${JSON.stringify(r.prompt)}`);
  }

  console.log(`\nrows named                      : ${list.length}`);
  console.log(`already correct, no action      : ${already}`);
  console.log(`prompt DIFFERS, would update    : ${plan.length}`);
  console.log(`columns this run would write    : ${WRITABLE.join(", ")}`);
  console.log(`columns this run would NOT write: ${NEVER_WRITTEN.join(", ")}`);

  if (plan.length === 0) {
    console.log("\n[fix-prompts] every named row already holds its prompt — nothing to write.");
    return;
  }
  if (!CONFIRM) {
    console.log(`\n[fix-prompts] DRY RUN — NOTHING WRITTEN. ${plan.length} row(s) would change.`);
    return;
  }

  // ── stop 3 · the operator states what they expect ────────────────────────
  const max = maxRows();
  if (max === null) {
    die(
      `stop 3 · a write needs --max-rows N. State the number of rows you expect to change;\n` +
        `  this run would change ${plan.length}.`,
    );
  }
  if (plan.length > max) die(`stop 3 · ${plan.length} row(s) would change, which exceeds --max-rows ${max}`);

  // ── stop 4 · the shape of the write itself, asserted not assumed ─────────
  const data = { prompt: "" };
  const named = Object.keys(data);
  if (named.length !== WRITABLE.length || named.some((k) => !(WRITABLE as readonly string[]).includes(k))) {
    die(`stop 4 · the update names column(s) [${named.join(", ")}]; only [${WRITABLE.join(", ")}] is allowed`);
  }

  requireProdWrite(SCRIPT);

  const before = await prisma.oetItem.count();
  const activeBefore = await prisma.oetItem.count({ where: { active: true } });
  const res = await prisma.$transaction(
    plan.map((p) =>
      prisma.oetItem.updateMany({
        where: { slug: p.slug },
        // 🔴 ONE FIELD. Naming any other column here would make this a content
        // edit nobody asked for. Stop 4 above asserts this object's shape.
        data: { prompt: p.to },
      }),
    ),
  );
  const written = res.reduce((a, r) => a + r.count, 0);
  const after = await prisma.oetItem.count();
  const activeAfter = await prisma.oetItem.count({ where: { active: true } });

  console.log(`\n[fix-prompts] updated ${written} row(s) of a planned ${plan.length}`);
  console.log(`[fix-prompts] rows before ${before}, after ${after}  ·  active before ${activeBefore}, after ${activeAfter}`);
  if (written !== plan.length) die(`planned ${plan.length} and the database changed ${written}`);
  if (after !== before) die(`the row count moved by ${after - before} — this script inserts nothing`);
  if (activeAfter !== activeBefore) die(`the active count moved by ${activeAfter - activeBefore} — this script never writes 'active'`);

  // Read back, from the database, not from the plan.
  const check = await prisma.oetItem.findMany({
    where: { slug: { in: plan.map((p) => p.slug) } },
    select: { slug: true, prompt: true },
  });
  const wrong = check.filter((r) => r.prompt !== plan.find((p) => p.slug === r.slug)!.to);
  console.log(`[fix-prompts] read back ${check.length} row(s); ${wrong.length} still differ`);
  if (wrong.length > 0) die(`${wrong.length} row(s) did not take the new prompt`);
  console.log("[fix-prompts] ✅ every planned row now holds the prompt its list carries");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect().catch(() => {});
    // 🔴 process.exit(1), not exitCode — see scripts/measure/blank-submit.mts.
    process.exit(1);
  });
