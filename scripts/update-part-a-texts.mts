/**
 * UPDATE THE FIFTEEN READING PART A TEXT BODIES IN PRODUCTION — and only those.
 *
 *   npx tsx scripts/update-part-a-texts.mts                      DRY RUN
 *   npx tsx scripts/update-part-a-texts.mts --confirm            writes
 *   npx tsx scripts/update-part-a-texts.mts --restore <file>     puts it back
 *   npx tsx scripts/update-part-a-texts.mts --restore <file> --confirm
 *
 * ── WHY THIS SCRIPT EXISTS AT ALL ───────────────────────────────────────────
 *
 * scripts/seed/append.ts is INSERT-ONLY, by design: it inserts what production
 * does not have and never touches a row it does. The fifteen Reading Part A
 * items are already rows in production, so correcting their text in gen/ can
 * never reach them. Every seed run after this change would report "nothing to
 * insert" and the learner would keep reading the short version.
 *
 * ── WHAT IT TOUCHES ─────────────────────────────────────────────────────────
 *
 * payload.texts[].body, matched by text id, on rows matched by taskType +
 * title. Nothing else: not the title, not the prompt, not a question, not an
 * answer, not a variant, not `active`, not any other column, not any other row.
 * The payload is rebuilt from the row's OWN payload with only those four strings
 * replaced, so anything the JSON does not mention survives untouched.
 *
 * ── IT WRITES ITS OWN WAY BACK FIRST ────────────────────────────────────────
 *
 * Before a single row is updated it writes the CURRENT bodies to
 * scripts/part-a-texts-rollback-<timestamp>.json — a filename the repo already
 * ignores — and it REFUSES TO WRITE if that file cannot be created, or cannot be
 * read back and re-parsed identically. A rollback file that exists but is
 * unreadable is worse than none, because it is trusted. It is written to a
 * temporary name and renamed into place, so an encoding error late in
 * serialisation cannot leave a truncated file where the way back should be.
 *
 * ── ORDER OF OPERATIONS (this is not optional) ──────────────────────────────
 *
 *   1. THIS SCRIPT --confirm       the fifteen become full length in production
 *   2. see them at /practice       with eyes, answerable, findable
 *   3. retire the legacy eighteen  scripts/retire-fragments.mts
 *
 * Retiring the eighteen before the fifteen that replace them are full length
 * would leave the Reading Part A pool made entirely of items that are short of
 * the measured law. There is nothing to be gained by doing it in that order.
 *
 * Expected on a first --confirm run: 15 updated, 0 inserted, 0 deleted, and the
 * active item count unchanged. The script counts active rows before and after
 * and fails loudly if that number moves.
 */
// 🔴 FIRST, and before @prisma/client: tsx does not load .env.local, so a
// PrismaClient built above this line would have no DATABASE_URL. An explicitly
// set variable still wins — see scripts/load-env.mts.
import "./load-env.mjs";
import { readFileSync, writeFileSync, renameSync, unlinkSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { PrismaClient } from "@prisma/client";
import { requireProdWrite } from "./prod-write-guard";

const TASK_TYPE = "READING_PART_A";
const DEFAULT_JSON = "C:/Projects/_handoffs/AlmiOET_PartA_new_text_bodies.json";

type NewBodies = Record<string, Record<string, string>>;
type Backup = {
  writtenAt: string;
  taskType: string;
  source: string;
  rows: { id: string; title: string; texts: { id: string; body: string }[] }[];
};

const args = process.argv.slice(2);
const confirm = args.includes("--confirm");
const restoreIdx = args.indexOf("--restore");
const restorePath = restoreIdx >= 0 ? args[restoreIdx + 1] : undefined;
const jsonPath =
  args.find((a, i) => !a.startsWith("--") && args[i - 1] !== "--restore") ?? DEFAULT_JSON;

if (restoreIdx >= 0 && (!restorePath || restorePath.startsWith("--"))) {
  console.error("usage: tsx scripts/update-part-a-texts.mts --restore <rollback.json> [--confirm]");
  process.exit(2);
}

const words = (s: string | undefined): number =>
  s && s.trim() ? s.trim().split(/\s+/).length : 0;

/** The gate's measure: the four texts PLUS the twenty question stems. */
const combined = (payload: {
  texts?: { body?: string }[];
  questions?: { stem?: string }[];
}): number =>
  (payload.texts ?? []).reduce((n, t) => n + words(t.body), 0) +
  (payload.questions ?? []).reduce((n, q) => n + words(q.stem), 0);

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
      if (got.id !== row.id || got.texts.length !== row.texts.length) {
        throw new Error(`row ${i} (${row.title}) did not survive the round trip`);
      }
      for (const [j, t] of row.texts.entries()) {
        if (got.texts[j].id !== t.id || got.texts[j].body !== t.body) {
          throw new Error(`row ${i} text ${t.id} did not survive the round trip`);
        }
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
      `\n[part-a] REFUSING TO WRITE: the rollback file could not be created at ${path}\n` +
        `         ${e instanceof Error ? e.message : String(e)}\n` +
        "         A production write with no way back is not one this script will make.",
    );
    process.exit(1);
  }
}

async function doRestore(path: string): Promise<void> {
  const backup = JSON.parse(readFileSync(path, "utf8")) as Backup;
  if (backup.taskType !== TASK_TYPE || !Array.isArray(backup.rows) || backup.rows.length === 0) {
    console.error(`[part-a] ${path} is not a Reading Part A rollback file — refusing to run`);
    process.exit(2);
  }
  console.log(
    `[part-a] RESTORE from ${path} — ${backup.rows.length} row(s), taken ${backup.writtenAt}`,
  );
  console.log(`[part-a] mode: ${confirm ? "🔴 WRITING (--confirm)" : "dry run (no --confirm)"}\n`);

  const plans: { id: string; title: string; before: number; after: number; payload: unknown }[] = [];
  for (const row of backup.rows) {
    const live = await prisma.oetItem.findUnique({ where: { id: row.id } });
    if (!live) {
      console.error(
        `[part-a] row ${row.id} (${row.title}) is no longer in the bank — refusing to run`,
      );
      process.exit(1);
    }
    const payload = live.payload as { texts?: { id?: string; body?: string }[] };
    const texts = (payload.texts ?? []).map((t) => {
      const was = row.texts.find((b) => b.id === t.id);
      return was ? { ...t, body: was.body } : t;
    });
    const next = { ...(payload as object), texts };
    plans.push({
      id: row.id,
      title: row.title,
      before: combined(payload as never),
      after: combined(next as never),
      payload: next,
    });
  }
  for (const p of plans) console.log(`   ${p.before} -> ${p.after} words   ${p.title}`);
  if (!confirm) {
    console.log("\n[part-a] DRY RUN — nothing was written. Re-run with --confirm to restore.");
    return;
  }
  requireProdWrite("scripts/update-part-a-texts.mts");
  const res = await prisma.$transaction(
    plans.map((p) =>
      prisma.oetItem.update({ where: { id: p.id }, data: { payload: p.payload as never } }),
    ),
  );
  console.log(`\n[part-a] RESTORE complete — ${res.length} row(s) updated, 0 inserted, 0 deleted.`);
}

async function doUpdate(): Promise<void> {
  const raw = readFileSync(resolve(jsonPath), "utf8");
  const bodies = JSON.parse(raw) as NewBodies;
  const titles = Object.keys(bodies);
  if (titles.length === 0) {
    console.error(`[part-a] ${jsonPath} holds no items — refusing to run`);
    process.exit(2);
  }
  console.log(`[part-a] UPDATE — ${titles.length} title(s) from ${jsonPath}`);
  console.log(`[part-a] mode: ${confirm ? "🔴 WRITING (--confirm)" : "dry run (no --confirm)"}\n`);

  // Resolve every title BEFORE anything is written, so a typo, a duplicate or a
  // payload of the wrong shape is reported while nothing has changed.
  const plans: {
    id: string;
    title: string;
    before: number;
    after: number;
    payload: unknown;
    backup: { id: string; body: string }[];
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
    const payload = row.payload as { texts?: { id?: string; body?: string }[] };
    const texts = payload.texts ?? [];
    const wanted = bodies[title];
    const ids = texts.map((t) => t.id);
    const unknownKeys = Object.keys(wanted).filter((k) => !ids.includes(k));
    const uncovered = ids.filter((id) => !(String(id) in wanted));
    if (texts.length === 0 || unknownKeys.length > 0 || uncovered.length > 0) {
      missing.push(
        `${title} — text ids in the bank [${ids.join(",")}] do not match the JSON ` +
          `[${Object.keys(wanted).join(",")}]`,
      );
      continue;
    }
    const nextTexts = texts.map((t) => ({ ...t, body: wanted[String(t.id)] }));
    const next = { ...(payload as object), texts: nextTexts };
    plans.push({
      id: row.id,
      title,
      before: combined(payload as never),
      after: combined(next as never),
      payload: next,
      backup: texts.map((t) => ({ id: String(t.id), body: t.body ?? "" })),
    });
  }

  if (missing.length > 0) {
    console.error(`[part-a] ${missing.length} title(s) could not be resolved:`);
    for (const m of missing) console.error(`   ${m}`);
    console.error("[part-a] refusing to run: a list that does not match the bank is not reviewed.");
    process.exit(1);
  }

  console.log(
    `[part-a] rows that WOULD be touched (${plans.length}), combined words before -> after:`,
  );
  for (const p of plans) console.log(`   ${p.before} -> ${p.after}   ${p.title}`);

  const activeBefore = await prisma.oetItem.count({ where: { active: true } });
  console.log(`\n[part-a] itemsActive now: ${activeBefore} (must not move — this script updates only)`);

  if (!confirm) {
    console.log("\n[part-a] DRY RUN — nothing was written. Re-run with --confirm to update.");
    return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = resolve(`scripts/part-a-texts-rollback-${stamp}.json`);
  writeBackupOrDie(
    {
      writtenAt: new Date().toISOString(),
      taskType: TASK_TYPE,
      source: jsonPath,
      rows: plans.map((p) => ({ id: p.id, title: p.title, texts: p.backup })),
    },
    backupPath,
  );
  console.log(`\n[part-a] rollback written and read back clean: ${backupPath}`);

  // One transaction: either every named row moves or none does.
  const res = await prisma.$transaction(
    plans.map((p) =>
      prisma.oetItem.update({ where: { id: p.id }, data: { payload: p.payload as never } }),
    ),
  );
  const activeAfter = await prisma.oetItem.count({ where: { active: true } });
  console.log(`\n[part-a] UPDATE complete — ${res.length} row(s) updated, 0 inserted, 0 deleted.`);
  console.log(`[part-a] itemsActive ${activeBefore} -> ${activeAfter}`);
  if (activeAfter !== activeBefore) {
    console.error("[part-a] 🔴 itemsActive MOVED. This script updates payloads only — investigate.");
    process.exitCode = 1;
  }
  console.log(
    `[part-a] to undo: npx tsx scripts/update-part-a-texts.mts --restore ${backupPath} --confirm`,
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
