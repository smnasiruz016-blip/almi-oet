/**
 * SET THE SPEAKING PREPARATION TIME TO OET'S OWN FIGURE — 180 SECONDS.
 *
 * ── THE SOURCE ──────────────────────────────────────────────────────────────
 *
 * oet.com/post/did-you-know-the-oet-speaking-test-gives-you-three-preparation-minutes
 * (14 November 2024), read in a browser and recorded in
 * PRODUCT_SOURCE_OF_TRUTH_AlmiOET.md:
 *
 *   "Before each role play, you are given a role card and three minutes to prepare."
 *   "the three-minute preparation time before each role play"
 *   "cover all essential points within the five-minute role play"
 *
 * A second, independent check on the same number: two role plays at 3 + 5
 * minutes is 16 minutes plus the introduction, which lands on OET's own
 * "approximately 20 minutes" for the Speaking sub-test. At two minutes it would
 * be 14, which that figure does not fit. `speakSeconds: 300` is already right
 * and is NOT touched here.
 *
 * ── WHAT WAS WRONG ──────────────────────────────────────────────────────────
 *
 * `prepSeconds: 120` on all 180 live Speaking items. It had been written down as
 * an AlmiWorld house standard, and that was wrong twice over: it was never our
 * decision to make — it is OET's number, and it was published.
 *
 *   ALLOW_PROD_WRITE=1 npx tsx scripts/fix-prep-seconds.mts --confirm
 *   ALLOW_PROD_WRITE=1 npx tsx scripts/fix-prep-seconds.mts --one --confirm
 *   ALLOW_PROD_WRITE=1 npx tsx scripts/fix-prep-seconds.mts --restore <file> --confirm
 *
 * Without both conditions it plans and prints and writes nothing — see
 * scripts/prod-write-guard.ts.
 *
 * Idempotent: it only touches rows whose value actually differs, so running it
 * twice is a no-op. It skips nothing by activity — a retired row that comes back
 * under the retirement ratchet must carry the right number too.
 */
import "./load-env.mjs";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { PrismaClient } from "@prisma/client";
import { requireProdWrite } from "./prod-write-guard";

/** OET's own figures. Cited above; not ours to choose. */
const PREP_SECONDS = 180;
const SPEAK_SECONDS = 300;

const ONE = process.argv.includes("--one");
const restoreIdx = process.argv.indexOf("--restore");
const RESTORE_FILE = restoreIdx >= 0 ? process.argv[restoreIdx + 1] : null;

const prisma = new PrismaClient();
try {
  if (RESTORE_FILE) {
    const saved = JSON.parse(readFileSync(RESTORE_FILE, "utf8")) as {
      id: string;
      title: string;
      before: number;
    }[];
    console.log(`[restore] ${saved.length} row(s) from ${RESTORE_FILE}`);
    requireProdWrite("scripts/fix-prep-seconds.mts");
    let n = 0;
    for (const s of saved) {
      const row = await prisma.oetItem.findUnique({ where: { id: s.id }, select: { payload: true } });
      if (!row) continue;
      const payload = { ...(row.payload as Record<string, unknown>), prepSeconds: s.before };
      await prisma.oetItem.update({ where: { id: s.id }, data: { payload: payload as never } });
      n += 1;
    }
    console.log(`[restore] ${n} row(s) written back.`);
    process.exit(0);
  }

  const rows = await prisma.oetItem.findMany({
    where: { taskType: "SPEAKING_ROLEPLAY" },
    select: { id: true, title: true, active: true, payload: true },
    orderBy: { title: "asc" },
  });
  if (rows.length === 0) {
    console.error("[prep] koi SPEAKING_ROLEPLAY row nahi mila — inkar");
    process.exit(1);
  }

  const before = new Map<number, number>();
  const jobs: { id: string; title: string; before: number }[] = [];
  for (const r of rows) {
    const p = r.payload as Record<string, unknown>;
    const cur = Number(p.prepSeconds);
    before.set(cur, (before.get(cur) ?? 0) + 1);
    if (cur !== PREP_SECONDS) jobs.push({ id: r.id, title: r.title, before: cur });
  }

  console.log(`[prep] SPEAKING_ROLEPLAY rows: ${rows.length} (${rows.filter((r) => r.active).length} active)`);
  console.log(`[prep] prepSeconds abhi:`);
  for (const [v, n] of [...before.entries()].sort((a, b) => a[0] - b[0])) {
    console.log(`         ${String(v).padStart(4)}s -> ${n} row(s)${v === PREP_SECONDS ? "  (durust)" : ""}`);
  }
  console.log(`[prep] badalne wali rows: ${jobs.length}  (${PREP_SECONDS}s, OET ka apna adad)`);

  // speakSeconds is not touched, but it IS checked — a script that fixes one
  // number should say out loud whether the number beside it is still right.
  const speakWrong = rows.filter((r) => Number((r.payload as Record<string, unknown>).speakSeconds) !== SPEAK_SECONDS);
  console.log(`[prep] speakSeconds != ${SPEAK_SECONDS}: ${speakWrong.length} row(s)  (chhua nahi ja raha)`);

  if (jobs.length === 0) {
    console.log("[prep] kuch karne ko nahi.");
    process.exit(0);
  }

  const todo = ONE ? jobs.slice(0, 1) : jobs;
  requireProdWrite("scripts/fix-prep-seconds.mts");

  mkdirSync(join(process.cwd(), "docs", "rollback"), { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const file = join(process.cwd(), "docs", "rollback", `prep-seconds-${stamp}.json`);
  writeFileSync(file, `${JSON.stringify(todo, null, 2)}\n`, "utf8");
  console.log(`\n[prep] rollback likha: ${file} (${todo.length} row(s))`);

  let written = 0;
  for (const j of todo) {
    const row = await prisma.oetItem.findUnique({ where: { id: j.id }, select: { payload: true } });
    if (!row) continue;
    const payload = { ...(row.payload as Record<string, unknown>), prepSeconds: PREP_SECONDS };
    await prisma.oetItem.update({ where: { id: j.id }, data: { payload: payload as never } });
    written += 1;
  }
  console.log(`[prep] ${written} row(s) updated.`);
  console.log(`[prep] wapas: ALLOW_PROD_WRITE=1 npx tsx scripts/fix-prep-seconds.mts --restore "${file}" --confirm`);
} finally {
  await prisma.$disconnect();
}
