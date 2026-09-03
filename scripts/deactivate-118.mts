/**
 * 🔴 PREPARED, NOT RUN. The lightest reversible rollback for the 118 Listening
 * items added by PR #47, if — and only if — a log says they are the cause.
 *
 * Written on 3 September 2026 while the owner's production error (digest
 * 1956175996) was still unexplained, so that the rollback exists and has been
 * read BEFORE anyone needs it in a hurry. That is rule 7 of the master handoff:
 * on production, one thing at a time, reversible, and the rollback written and
 * read first.
 *
 *   npx tsx scripts/deactivate-118.mts             report only, writes nothing
 *   npx tsx scripts/deactivate-118.mts --confirm   set active = false on the 118
 *   npx tsx scripts/deactivate-118.mts --restore --confirm      put them back
 *
 * WHY DEACTIVATE AND NOT REVERT THE DEPLOY: a revert takes the audio out of the
 * function again, which puts the OTHER 75 items back on the paid-TTS path for
 * the 22 whose key moved. Deactivating touches 118 rows and nothing else; no
 * learner's attempt is deleted or altered, and every one of them can be
 * reactivated by the same script.
 *
 * 🔴 IT REFUSES TO RUN IF THE FLOOR WOULD BREAK. src/instrumentation.ts will not
 * boot the server below 15 ACTIVE items on any objective part. Measured on
 * 3 September 2026, deactivating these 118 leaves LISTENING_PART_A 21,
 * LISTENING_PART_B 33, LISTENING_PART_C 21 — all clear of the floor. The script
 * re-measures that at run time rather than trusting this comment.
 */
import "./load-env.mjs";
import { PrismaClient } from "@prisma/client";
import { ITEMS as A } from "./seed/gen/listening_a_sets";
import { ITEMS as B } from "./seed/gen/listening_b_sets";
import { ITEMS as C } from "./seed/gen/listening_c_sets";

const CONFIRM = process.argv.includes("--confirm");
const RESTORE = process.argv.includes("--restore");
const FLOOR = 15;

const titles = [...A, ...B, ...C].map((i) => i.title as string);
if (titles.length !== 118) {
  console.error(`refusing: expected 118 titles from the three new modules, got ${titles.length}`);
  process.exit(1);
}

const prisma = new PrismaClient();
try {
  const rows = await prisma.oetItem.findMany({
    where: { title: { in: titles } },
    select: { id: true, taskType: true, title: true, active: true },
  });
  console.log(`${rows.length} of the 118 found in this database; ${rows.filter((r) => r.active).length} currently active`);
  if (rows.length !== 118) console.log(`⚠️ ${118 - rows.length} not found — check DATABASE_URL points where you think`);

  // What would remain active per part if these were switched off?
  const all = await prisma.oetItem.groupBy({
    by: ["taskType"],
    where: { active: true },
    _count: { _all: true },
  });
  const target = new Set(rows.map((r) => r.id));
  const affected = await prisma.oetItem.groupBy({
    by: ["taskType"],
    where: { active: true, id: { in: [...target] } },
    _count: { _all: true },
  });
  const off = new Map(affected.map((a) => [String(a.taskType), a._count._all]));
  let unsafe = false;
  console.log(`\nfloor check (${FLOOR} active per objective part):`);
  for (const r of all) {
    const k = String(r.taskType);
    if (!k.startsWith("LISTENING") && !k.startsWith("READING")) continue;
    const after = r._count._all - (off.get(k) ?? 0);
    const ok = after >= FLOOR;
    if (!ok) unsafe = true;
    console.log(`  ${k.padEnd(18)} ${r._count._all} active now -> ${after} after   ${ok ? "OK" : "🔴 BELOW FLOOR"}`);
  }
  if (!RESTORE && unsafe) {
    console.error("\nrefusing: this would drop a part below the boot floor");
    process.exit(1);
  }

  if (!CONFIRM) {
    console.log(`\n--confirm nahi diya: kuch nahi likha gaya.`);
    process.exit(0);
  }
  const res = await prisma.oetItem.updateMany({
    where: { title: { in: titles } },
    data: { active: RESTORE },
  });
  console.log(`\n${RESTORE ? "RESTORED" : "DEACTIVATED"} ${res.count} row(s).`);
  console.log(`wapas karne ke liye: npx tsx scripts/deactivate-118.mts ${RESTORE ? "" : "--restore "}--confirm`);
} finally {
  await prisma.$disconnect();
}
