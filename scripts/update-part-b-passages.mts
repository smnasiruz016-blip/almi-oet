/**
 * UPDATE THE FIFTEEN READING PART B PASSAGES IN PRODUCTION — and only those.
 *
 *   npx tsx scripts/update-part-b-passages.mts                    DRY RUN
 *   npx tsx scripts/update-part-b-passages.mts --confirm          writes
 *   npx tsx scripts/update-part-b-passages.mts --restore <file>   puts it back
 *   npx tsx scripts/update-part-b-passages.mts --restore <file> --confirm
 *
 * ── WHY `seed:prod` CANNOT DO THIS ──────────────────────────────────────────
 *
 * scripts/seed/append.ts is INSERT-ONLY: it dedupes on taskType + profession +
 * title and never touches a row it finds. The fifteen Reading Part B items were
 * inserted on 3 September 2026, so `npm run seed:prod` now reports "nothing to
 * insert" and would leave the corrected passages in the seed source and nowhere
 * else. This is the same wall update-part-a-texts.mts was written for, and this
 * script is its Part B twin — deliberately a twin rather than a generalisation,
 * because a shared script that guesses which payload field to touch is one
 * wrong flag away from writing the wrong column.
 *
 * ── WHAT IT TOUCHES ─────────────────────────────────────────────────────────
 *
 * payload.passages[0].body, on rows matched by taskType + title. Nothing else:
 * not the title, not the prompt, not a question, not an option, not an answer,
 * not `active`, not any other column and no other row. The payload is rebuilt
 * from the row's OWN payload with that one string replaced, so anything the
 * JSON does not mention survives untouched.
 *
 * ── WHAT THE CORRECTION IS ──────────────────────────────────────────────────
 *
 * The fifteen passages were hard-wrapped at about 110 characters. The composer
 * renders them `whitespace-pre-wrap`, so on a column narrower than that every
 * authored line wrapped a second time and the text read ragged — measured in a
 * browser at 430px, 9 mid-paragraph line breaks on the first item alone, 125
 * across the fifteen. The 33 legacy extracts have none.
 *
 * NOT A WORD CHANGED. The de-rag joins the lines of a paragraph and keeps every
 * blank line; it refused to write unless the word count under both tokenisers,
 * the paragraph-break count and the WORD SEQUENCE were identical on all fifteen.
 * This script prints the before/after word counts so that is visible here too:
 * every one of them must be unchanged, and a moved count is a stop.
 *
 * ── IT WRITES ITS OWN WAY BACK FIRST ────────────────────────────────────────
 *
 * Before a single row is updated it writes the CURRENT passages to
 * scripts/part-b-passages-rollback-<timestamp>.json — a filename the repo
 * already ignores — and it REFUSES TO WRITE if that file cannot be created, or
 * cannot be read back and re-parsed identically. It is written to a temporary
 * name and renamed into place, so an encoding error late in serialisation
 * cannot leave a truncated file where the way back should be.
 *
 * Expected on a first --confirm run: 15 updated, 0 inserted, 0 deleted, the
 * active item count unchanged, and every passage the same length as before.
 */
// 🔴 FIRST, and before @prisma/client: tsx does not load .env.local, so a
// PrismaClient built above this line would have no DATABASE_URL. An explicitly
// set variable still wins — see scripts/load-env.mts.
import "./load-env.mjs";
import { readFileSync, writeFileSync, renameSync, unlinkSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { PrismaClient } from "@prisma/client";

const TASK_TYPE = "READING_PART_B";
const DEFAULT_JSON = "C:/Projects/_handoffs/AlmiOET_PartB_new_passage_bodies.json";

/** title -> the whole replacement passage body. */
type NewBodies = Record<string, string>;
type Backup = {
  writtenAt: string;
  taskType: string;
  source: string;
  rows: { id: string; title: string; passageId: string; body: string }[];
};

const args = process.argv.slice(2);
const confirm = args.includes("--confirm");
const restoreIdx = args.indexOf("--restore");
const restorePath = restoreIdx >= 0 ? args[restoreIdx + 1] : undefined;
const jsonPath =
  args.find((a, i) => !a.startsWith("--") && args[i - 1] !== "--restore") ?? DEFAULT_JSON;

if (restoreIdx >= 0 && (!restorePath || restorePath.startsWith("--"))) {
  console.error("usage: tsx scripts/update-part-b-passages.mts --restore <rollback.json> [--confirm]");
  process.exit(2);
}

const words = (s: string | undefined): number =>
  s && s.trim() ? s.trim().split(/\s+/).length : 0;

/** Hard newlines INSIDE a paragraph — the defect this correction removes. */
function hardNewlines(body: string): number {
  const lines = body.split("\n");
  let n = 0;
  for (let i = 0; i < lines.length - 1; i++) {
    const a = lines[i].trim();
    const b = lines[i + 1].trim();
    if (a === "" || b === "") continue;
    if (a.startsWith("- ") || b.startsWith("- ")) continue;
    n += 1;
  }
  return n;
}

const prisma = new PrismaClient();

/**
 * Write, then prove it landed. Temp file + rename so a failure part-way through
 * serialising cannot overwrite an earlier rollback with half a file, and a
 * read-back parse so "the file exists" is never mistaken for "the file is good".
 */
function writeBackupOrDie(backup: Backup, path: string): void {
  const tmp = `${path}.partial`;
  try {
    writeFileSync(tmp, JSON.stringify(backup, null, 2), "utf8");
    const reread = JSON.parse(readFileSync(tmp, "utf8")) as Backup;
    if (reread.rows.length !== backup.rows.length) {
      throw new Error(`read back ${reread.rows.length} row(s), wrote ${backup.rows.length}`);
    }
    for (const [i, row] of backup.rows.entries()) {
      const got = reread.rows[i];
      if (got.id !== row.id || got.passageId !== row.passageId || got.body !== row.body) {
        throw new Error(`row ${i} (${row.title}) did not survive the round trip`);
      }
    }
    renameSync(tmp, path);
  } catch (e) {
    if (existsSync(tmp)) {
      try {
        unlinkSync(tmp);
      } catch {
        /* leaving the partial behind is still better than deleting blindly */
      }
    }
    console.error(
      `\n[part-b] REFUSING TO WRITE: the rollback file could not be created at ${path}\n` +
        `         ${e instanceof Error ? e.message : String(e)}\n` +
        "         A production write with no way back is not one this script will make.",
    );
    process.exit(1);
  }
}

async function doRestore(path: string): Promise<void> {
  const backup = JSON.parse(readFileSync(path, "utf8")) as Backup;
  if (backup.taskType !== TASK_TYPE || !Array.isArray(backup.rows) || backup.rows.length === 0) {
    console.error(`[part-b] ${path} is not a Reading Part B rollback file — refusing to run`);
    process.exit(2);
  }
  console.log(
    `[part-b] RESTORE from ${path} — ${backup.rows.length} row(s), taken ${backup.writtenAt}`,
  );
  console.log(`[part-b] mode: ${confirm ? "🔴 WRITING (--confirm)" : "dry run (no --confirm)"}\n`);

  const plans: { id: string; title: string; before: number; after: number; payload: unknown }[] = [];
  for (const row of backup.rows) {
    const live = await prisma.oetItem.findUnique({ where: { id: row.id } });
    if (!live) {
      console.error(`[part-b] row ${row.id} (${row.title}) is no longer in the bank — refusing`);
      process.exit(1);
    }
    const payload = live.payload as { passages?: { id?: string; body?: string }[] };
    const passages = (payload.passages ?? []).map((p) =>
      p.id === row.passageId ? { ...p, body: row.body } : p,
    );
    plans.push({
      id: row.id,
      title: row.title,
      before: words((payload.passages ?? [])[0]?.body),
      after: words(passages[0]?.body),
      payload: { ...(payload as object), passages },
    });
  }
  for (const p of plans) console.log(`   ${p.before} -> ${p.after} words   ${p.title}`);
  if (!confirm) {
    console.log("\n[part-b] DRY RUN — nothing was written. Re-run with --confirm to restore.");
    return;
  }
  const res = await prisma.$transaction(
    plans.map((p) =>
      prisma.oetItem.update({ where: { id: p.id }, data: { payload: p.payload as never } }),
    ),
  );
  console.log(`\n[part-b] RESTORE complete — ${res.length} row(s) updated, 0 inserted, 0 deleted.`);
}

async function doUpdate(): Promise<void> {
  const bodies = JSON.parse(readFileSync(resolve(jsonPath), "utf8")) as NewBodies;
  const titles = Object.keys(bodies);
  if (titles.length === 0) {
    console.error(`[part-b] ${jsonPath} holds no items — refusing to run`);
    process.exit(2);
  }
  console.log(`[part-b] UPDATE — ${titles.length} title(s) from ${jsonPath}`);
  console.log(`[part-b] mode: ${confirm ? "🔴 WRITING (--confirm)" : "dry run (no --confirm)"}\n`);

  // Resolve every title BEFORE anything is written, so a typo, a duplicate or a
  // payload of the wrong shape is reported while nothing has changed.
  const plans: {
    id: string;
    title: string;
    before: number;
    after: number;
    hardBefore: number;
    hardAfter: number;
    payload: unknown;
    backup: { passageId: string; body: string };
  }[] = [];
  const missing: string[] = [];

  for (const title of titles) {
    const rows = await prisma.oetItem.findMany({ where: { taskType: TASK_TYPE as never, title } });
    if (rows.length === 0) {
      missing.push(`${title} — not found`);
      continue;
    }
    if (rows.length > 1) {
      missing.push(`${title} — ${rows.length} rows share this taskType + title`);
      continue;
    }
    const row = rows[0];
    const payload = row.payload as { passages?: { id?: string; body?: string }[] };
    const passages = payload.passages ?? [];
    if (passages.length !== 1 || !passages[0].id) {
      missing.push(`${title} — ${passages.length} passage(s); this script updates exactly one`);
      continue;
    }
    const wasBody = passages[0].body ?? "";
    const next = {
      ...(payload as object),
      passages: [{ ...passages[0], body: bodies[title] }],
    };
    plans.push({
      id: row.id,
      title,
      before: words(wasBody),
      after: words(bodies[title]),
      hardBefore: hardNewlines(wasBody),
      hardAfter: hardNewlines(bodies[title]),
      payload: next,
      backup: { passageId: String(passages[0].id), body: wasBody },
    });
  }

  if (missing.length > 0) {
    console.error(`[part-b] ${missing.length} title(s) could not be resolved:`);
    for (const m of missing) console.error(`   ${m}`);
    console.error("[part-b] refusing to run: a list that does not match the bank is not reviewed.");
    process.exit(1);
  }

  console.log(`[part-b] rows that WOULD be touched (${plans.length}):`);
  console.log("   words        hard newlines inside a paragraph");
  for (const p of plans) {
    const flag = p.before === p.after ? "  " : "🔴";
    console.log(
      `   ${flag} ${p.before} -> ${p.after}      ${p.hardBefore} -> ${p.hardAfter}   ${p.title}`,
    );
  }

  // 🔴 THE CHECK THAT MATTERS FOR THIS PARTICULAR WRITE. It changes whitespace
  // and nothing else, so a moved word count means something was rewritten and
  // the law is back in play.
  const moved = plans.filter((p) => p.before !== p.after);
  if (moved.length > 0) {
    console.error(
      `\n[part-b] REFUSING: ${moved.length} passage(s) changed LENGTH. This correction removes ` +
        "newlines and must not move a single word.",
    );
    process.exit(1);
  }

  const activeBefore = await prisma.oetItem.count({ where: { active: true } });
  console.log(`\n[part-b] itemsActive now: ${activeBefore} (must not move — this script updates only)`);

  if (!confirm) {
    console.log("\n[part-b] DRY RUN — nothing was written. Re-run with --confirm to update.");
    return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = resolve(`scripts/part-b-passages-rollback-${stamp}.json`);
  writeBackupOrDie(
    {
      writtenAt: new Date().toISOString(),
      taskType: TASK_TYPE,
      source: jsonPath,
      rows: plans.map((p) => ({
        id: p.id,
        title: p.title,
        passageId: p.backup.passageId,
        body: p.backup.body,
      })),
    },
    backupPath,
  );
  console.log(`\n[part-b] rollback written and read back clean: ${backupPath}`);

  // One transaction: either every named row moves or none does.
  const res = await prisma.$transaction(
    plans.map((p) =>
      prisma.oetItem.update({ where: { id: p.id }, data: { payload: p.payload as never } }),
    ),
  );
  const activeAfter = await prisma.oetItem.count({ where: { active: true } });
  console.log(`\n[part-b] UPDATE complete — ${res.length} row(s) updated, 0 inserted, 0 deleted.`);
  console.log(`[part-b] itemsActive ${activeBefore} -> ${activeAfter}`);
  if (activeAfter !== activeBefore) {
    console.error("[part-b] 🔴 itemsActive MOVED. This script updates payloads only — investigate.");
    process.exitCode = 1;
  }
  console.log(
    `[part-b] to undo: npx tsx scripts/update-part-b-passages.mts --restore ${backupPath} --confirm`,
  );
}

async function main() {
  if (restorePath) await doRestore(restorePath);
  else await doUpdate();
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
