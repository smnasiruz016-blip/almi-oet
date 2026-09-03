/**
 * THE BANK, COUNTED FROM THE DATABASE — read-only, no writes of any kind.
 *
 * Printed so the next command is written against measured counts rather than a
 * document. `itemsActive` is the number src/instrumentation.ts guards: it
 * refuses to boot the server below FLOOR active items on any objective part.
 */
import "./load-env.mjs";
import { PrismaClient } from "@prisma/client";

const FLOOR = 15;
const OBJECTIVE = new Set([
  "READING_PART_A",
  "READING_PART_B",
  "READING_PART_C",
  "LISTENING_PART_A",
  "LISTENING_PART_B",
  "LISTENING_PART_C",
]);

const prisma = new PrismaClient();
try {
  const rows = await prisma.oetItem.groupBy({
    by: ["taskType", "active"],
    _count: { _all: true },
  });
  const by = new Map<string, { rows: number; active: number }>();
  for (const r of rows) {
    const k = String(r.taskType);
    const cur = by.get(k) ?? { rows: 0, active: 0 };
    cur.rows += r._count._all;
    if (r.active) cur.active += r._count._all;
    by.set(k, cur);
  }

  console.log(`| taskType | rows | active | retired | vs floor ${FLOOR} |`);
  console.log(`|---|---|---|---|---|`);
  let totalRows = 0;
  let totalActive = 0;
  for (const k of [...by.keys()].sort()) {
    const v = by.get(k)!;
    totalRows += v.rows;
    totalActive += v.active;
    const floor = OBJECTIVE.has(k)
      ? v.active >= FLOOR
        ? `+${v.active - FLOOR}`
        : `🔴 ${v.active - FLOOR}`
      : "—";
    console.log(`| ${k} | ${v.rows} | ${v.active} | ${v.rows - v.active} | ${floor} |`);
  }
  console.log(`| **ALL** | **${totalRows}** | **${totalActive}** | **${totalRows - totalActive}** | |`);

  const [users, attempts, scored] = await Promise.all([
    prisma.user.count(),
    prisma.oetAttempt.count(),
    prisma.oetAttempt.count({ where: { status: "SCORED" } }),
  ]);
  console.log(`\nUser ${users} · OetAttempt ${attempts} (SCORED ${scored})`);
} finally {
  await prisma.$disconnect();
}
