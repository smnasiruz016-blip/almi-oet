/**
 * PUT THE 168 READING PART C `kind` MARKERS ON THE PRODUCTION ROWS.
 *
 * ── WHY A SCRIPT AND NOT A SEED ─────────────────────────────────────────────
 *
 * PR #58 applied the markers to the SEED SOURCE. `scripts/seed/append.ts` is
 * INSERT-ONLY, so the 168 questions already in production never received them.
 * That gap was flagged in #58's own commit message rather than discovered later,
 * and this is the script that closes it — the same shape as
 * scripts/seed/update-speaking-prompt.mts, which did 180 rows on 5 September.
 *
 * ── MEASURED BEFORE ANYTHING WAS WRITTEN ────────────────────────────────────
 *
 *     READING_PART_C rows                42  (21 active, 21 retired)
 *     questions                         246  (4-option 168 | 3-option legacy 78)
 *     questions already carrying kind      0
 *     rows whose title is in the JSON     21
 *     JSON questions present on those     168 / 168
 *     4-option questions on those rows    168
 *
 * The JSON maps ONE-TO-ONE onto the four-option population. The 78 legacy
 * three-option questions sit on the other 21 rows, all retired, so they are out
 * of scope by construction rather than by a filter anyone has to trust — and
 * this script refuses to mark one anyway.
 *
 * ── 🔴 WHO CAN ACTUALLY SEE `kind`, AND WHY THAT ANSWER CHANGED ─────────────
 *
 * The obvious worry before writing to a live payload is whether zod will reject
 * the row or quietly drop the field. Neither happens, and the reason is worth
 * writing down because the intuitive answer is WRONG:
 *
 *   · `kind` IS declared on `mcqQuestionSchema` (src/lib/oet/tasks/reading.ts),
 *     added in PR #58. So zod does NOT strip it — `.parse()` keeps it, and the
 *     value reaches the grader and anything else reading the payload.
 *   · Because it is declared as `z.array(z.enum([...])).optional()`, it is also
 *     VALIDATED. A marker outside those three literals would make `.parse()`
 *     THROW inside the grader — this file refuses such a value rather than
 *     relying on that.
 *   · There is no `.strict()` anywhere in src/lib/oet, and registry.ts:245
 *     parses Part C through this same schema.
 *
 * MEASURED after the write, not assumed: all 42 rows parse, and 168 `kind`
 * values survive `readingMcqPayloadSchema.parse()`. If zod were stripping the
 * field that count would be 0.
 *
 * ⚠️ SO IT IS STORED, VALID AND READABLE — BUT NOTHING RENDERS IT YET. No UI
 * shows a marker today; `gate:partc-kind` is its only consumer. Whoever wants to
 * display it does NOT need a schema change — that is already done — they need a
 * component. And whoever adds a fourth marker kind must widen the enum FIRST, or
 * every Part C item will throw at parse time the moment such a row is served.
 *
 * ── WHAT IT TOUCHES ─────────────────────────────────────────────────────────
 *
 *   · only taskType = READING_PART_C
 *   · only rows whose title appears in the marker JSON
 *   · only the questions that JSON names, and only their `kind` field
 *   · every other value in the payload is compared before and after, deep, and
 *     the row is refused if anything else moved
 *
 * 🔴 "BYTE-IDENTICAL" IS THE WRONG TEST FOR JSONB. Postgres does not preserve
 * key order in a jsonb column, so a byte comparison would fail on rows that are
 * identical in meaning — the same drift that made a payload-comparison version
 * of gate:title-collision report 555 false collisions. So the check here is a
 * DEEP VALUE comparison with `kind` removed: every other field must be equal.
 *
 * Idempotent: a question that already carries the right `kind` is not rewritten,
 * so a second run reports 0 rows.
 *
 * ── RUNNING IT ──────────────────────────────────────────────────────────────
 *
 * Dry run (the default, writes nothing):
 *
 *     npx tsx scripts/seed/update-partc-kind.mts
 *
 * The real write needs BOTH of prod-write-guard's conditions — `--confirm` on
 * the command line AND ALLOW_PROD_WRITE=1 in the environment. The runnable form
 * is deliberately not written here; see scripts/prod-write-guard.ts.
 *
 * `--restore` removes the markers again. It exists so this is reversible and has
 * NOT been run.
 */
import "../load-env.mjs";
import { readFileSync } from "node:fs";
import { PrismaClient } from "@prisma/client";
import { requireProdWrite } from "../prod-write-guard";

const SRC = process.env.READING_SOURCE_DIR ?? "C:/Projects/_handoffs";
const DATA = `${SRC.replace(/\\/g, "/")}/AlmiOET_PartC_kind_markers.json`;
const TASK_TYPE = "READING_PART_C";
const KINDS = ["paragraph", "reference", "writer"];

const restore = process.argv.includes("--restore");
const confirm = process.argv.includes("--confirm");

type Q = { id: string; options?: unknown[]; kind?: string[] };
type Payload = { questions?: Q[] };

const die = (m: string): never => {
  throw new Error(`[update-partc-kind] ${m}`);
};

/** Deep equality ignoring every `kind` field — see the jsonb note above. */
const withoutKind = (v: unknown): unknown => {
  if (Array.isArray(v)) return v.map(withoutKind);
  if (v && typeof v === "object") {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(v as Record<string, unknown>).sort()) {
      if (k === "kind") continue;
      out[k] = withoutKind((v as Record<string, unknown>)[k]);
    }
    return out;
  }
  return v;
};
const sameExceptKind = (a: unknown, b: unknown) =>
  JSON.stringify(withoutKind(a)) === JSON.stringify(withoutKind(b));

async function main(): Promise<void> {
  const markers = JSON.parse(readFileSync(DATA, "utf8")) as Record<string, Record<string, string[]>>;
  const titles = Object.keys(markers);
  const namedQuestions = Object.values(markers).reduce((n, qs) => n + Object.keys(qs).length, 0);

  const prisma = new PrismaClient();
  try {
    const rows = await prisma.oetItem.findMany({
      where: { taskType: TASK_TYPE as never },
      select: { id: true, title: true, active: true, payload: true },
    });
    const byTitle = new Map(rows.map((r) => [r.title, r]));

    console.log(`[update-partc-kind] ${restore ? "RESTORE (removing kind)" : "APPLY"}`);
    console.log(`  source: ${DATA}`);
    console.log(`  JSON: ${titles.length} title(s) · ${namedQuestions} question(s)`);
    console.log(`  ${TASK_TYPE} rows in DB: ${rows.length} (${rows.filter((r) => r.active).length} active)`);

    const missingTitles = titles.filter((t) => !byTitle.has(t));
    if (missingTitles.length > 0) {
      die(
        `${missingTitles.length} marker title(s) are not in the database — refusing to guess:\n` +
          missingTitles.map((t) => `    ${t}`).join("\n"),
      );
    }

    // ── build the changes, refusing anything outside the four-option set ────
    const planned: { id: string; title: string; payload: Payload; changed: number }[] = [];
    let alreadyRight = 0;
    let questionsTouched = 0;

    for (const title of titles) {
      const row = byTitle.get(title)!;
      const payload = JSON.parse(JSON.stringify(row.payload)) as Payload;
      const qs = payload.questions ?? [];
      const byId = new Map(qs.map((q) => [q.id, q]));
      let changed = 0;

      for (const [qid, kinds] of Object.entries(markers[title])) {
        const q = byId.get(qid);
        if (!q) die(`"${title}" has no question ${qid} in production`);
        const opts = (q!.options ?? []).length;
        if (opts !== 4) {
          die(`"${title}" ${qid} has ${opts} options — the legacy three-option questions are never marked`);
        }
        for (const k of kinds) {
          if (!KINDS.includes(k)) die(`"${title}" ${qid} names an unknown marker "${k}"`);
        }

        const want = restore ? undefined : kinds;
        const have = q!.kind;
        if (JSON.stringify(have) === JSON.stringify(want)) {
          alreadyRight += 1;
          continue;
        }
        if (want === undefined) delete q!.kind;
        else q!.kind = want;
        changed += 1;
      }

      // Nothing but `kind` may have moved.
      if (!sameExceptKind(row.payload, payload)) {
        die(`"${title}" — something other than \`kind\` changed in the payload; refusing to write`);
      }
      if (changed > 0) {
        planned.push({ id: row.id, title, payload, changed });
        questionsTouched += changed;
      }
    }

    console.log(
      `  rows to update: ${planned.length} · questions to change: ${questionsTouched} · already correct: ${alreadyRight}`,
    );
    for (const p of planned.slice(0, 3)) console.log(`    ${p.title}  (${p.changed} question(s))`);
    if (planned.length > 3) console.log(`    …and ${planned.length - 3} more`);

    if (planned.length === 0) {
      console.log(
        "\n  Nothing to change. If this is the FIRST run the markers never landed;\n" +
          "  if it is a re-run this is the expected idempotent result.",
      );
      return;
    }

    if (!confirm) {
      console.log(
        `\n  DRY RUN — nothing was written. ${planned.length} row(s) / ${questionsTouched} question(s) would change.\n` +
          "  Re-run with --confirm AND ALLOW_PROD_WRITE=1 to write.",
      );
      return;
    }

    requireProdWrite("scripts/seed/update-partc-kind.mts");

    let updated = 0;
    for (const p of planned) {
      await prisma.oetItem.update({
        where: { id: p.id },
        data: { payload: p.payload as never },
      });
      updated += 1;
    }

    // ── read back with a FRESH query, never the loop counter ────────────────
    const after = await prisma.oetItem.findMany({
      where: { taskType: TASK_TYPE as never },
      select: { title: true, payload: true },
    });
    let withKind = 0;
    let legacyMarked = 0;
    for (const r of after) {
      for (const q of ((r.payload as Payload).questions ?? [])) {
        if (q.kind !== undefined) {
          withKind += 1;
          if ((q.options ?? []).length !== 4) legacyMarked += 1;
        }
      }
    }
    console.log(`\n  UPDATE complete — ${updated} row(s) updated.`);
    console.log(`  read back: ${withKind} question(s) now carry kind (expected ${restore ? 0 : namedQuestions})`);
    console.log(`  legacy three-option questions carrying kind: ${legacyMarked} (must be 0)`);
    if (withKind !== (restore ? 0 : namedQuestions) || legacyMarked !== 0) {
      console.error("  🔴 the read-back does not match — do not report this as done.");
      process.exitCode = 1;
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error("[update-partc-kind] failed:", e);
  process.exit(1);
});
