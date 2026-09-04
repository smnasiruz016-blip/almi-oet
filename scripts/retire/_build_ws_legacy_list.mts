/**
 * BUILD THE RETIRE LIST FOR THE 360 LEGACY WRITING AND SPEAKING ITEMS —
 * and VERIFY the 360 replacements are live before naming a single one of them.
 *
 * 🔴 THE ORDER IS THE POINT. The ruling of 4 September 2026: "naye 360 daalo →
 * verify → phir purane 360 retire. Kabhi ulta nahin." So this script refuses to
 * write a list unless it has first confirmed, against the database, that all 360
 * new items are present and active. A retire list built before the replacements
 * landed is how a paying learner ends up with an empty pool.
 *
 * The legacy set is derived, never typed: every WRITING_LETTER and
 * SPEAKING_ROLEPLAY row in the database whose title is NOT one of the 360 in the
 * handoff JSON. That way it cannot drift from what was actually seeded, and it
 * cannot accidentally name a new item.
 *
 *   npx tsx scripts/retire/_build_ws_legacy_list.mts
 *
 * It writes scripts/retire/writing-speaking-legacy.json, which
 * scripts/retire-fragments.mts then runs — dry by default, --confirm to write,
 * --restore to put everything back.
 */
import "../load-env.mjs";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { PrismaClient } from "@prisma/client";

const NEW = {
  WRITING_LETTER: "C:/Projects/_handoffs/AlmiOET_Writing_ALL_180_items.json",
  SPEAKING_ROLEPLAY: "C:/Projects/_handoffs/AlmiOET_Speaking_ALL_180_items.json",
} as const;

const prisma = new PrismaClient();
try {
  const out: { taskType: string; title: string }[] = [];
  let problems = 0;

  for (const [taskType, path] of Object.entries(NEW)) {
    const newTitles = new Set(
      Object.values(JSON.parse(readFileSync(path, "utf8")) as Record<string, { title: string }>).map(
        (r) => r.title,
      ),
    );
    if (newTitles.size !== 180) {
      console.error(`🔴 ${taskType}: ${newTitles.size} new titles in the source, expected 180`);
      problems += 1;
      continue;
    }

    const rows = await prisma.oetItem.findMany({
      where: { taskType: taskType as never },
      select: { title: true, active: true, profession: true },
    });

    // ── VERIFY FIRST: every replacement is in the database and serving ────────
    const live = new Map(rows.map((r) => [r.title, r]));
    const missing = [...newTitles].filter((t) => !live.has(t));
    const notActive = [...newTitles].filter((t) => live.get(t)?.active === false);
    console.log(`${taskType}:`);
    console.log(`  database mein kul ${rows.length} · naye jo mile: ${180 - missing.length}/180 · in mein ghair-faal: ${notActive.length}`);
    if (missing.length > 0 || notActive.length > 0) {
      console.error(`  🔴 replacements are not all live — REFUSING to build a retire list`);
      for (const t of missing.slice(0, 5)) console.error(`     missing: ${t}`);
      for (const t of notActive.slice(0, 5)) console.error(`     inactive: ${t}`);
      problems += 1;
      continue;
    }

    const legacy = rows.filter((r) => !newTitles.has(r.title));
    const stillActive = legacy.filter((r) => r.active);
    console.log(`  legacy (naye set se bahar): ${legacy.length} · in mein abhi faal: ${stillActive.length}`);
    if (legacy.length !== 180) {
      console.error(`  🔴 ${legacy.length} legacy rows, expected 180 — stopping rather than guessing`);
      problems += 1;
      continue;
    }
    for (const r of legacy.sort((a, b) => a.title.localeCompare(b.title))) {
      out.push({ taskType, title: r.title });
    }
  }

  if (problems > 0) {
    console.error(`\n${problems} problem(s) — no list written.`);
    process.exit(1);
  }

  const file = join(process.cwd(), "scripts", "retire", "writing-speaking-legacy.json");
  writeFileSync(file, `${JSON.stringify(out, null, 2)}\n`, "utf8");
  console.log(`\nwrote ${file} — ${out.length} item(s)`);
  console.log(`ab: npx tsx scripts/retire-fragments.mts scripts/retire/writing-speaking-legacy.json`);
} finally {
  await prisma.$disconnect();
}
