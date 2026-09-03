/** Count the Listening bank in whatever database DATABASE_URL points at.
 *  Read-only. Used before and after seed:prod so the insert is a measured
 *  difference and not a claim. */
import "./load-env.mjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
try {
  const rows = await prisma.oetItem.groupBy({
    by: ["taskType", "active"],
    _count: { _all: true },
  });
  const byType = new Map<string, { total: number; active: number }>();
  for (const r of rows) {
    const k = String(r.taskType);
    const cur = byType.get(k) ?? { total: 0, active: 0 };
    cur.total += r._count._all;
    if (r.active) cur.active += r._count._all;
    byType.set(k, cur);
  }
  for (const k of [...byType.keys()].sort()) {
    if (!k.startsWith("LISTENING")) continue;
    const v = byType.get(k)!;
    console.log(`  ${k.padEnd(20)} rows ${String(v.total).padStart(4)}   active ${String(v.active).padStart(4)}`);
  }
  console.log(`  ${"ALL items".padEnd(20)} rows ${String(await prisma.oetItem.count()).padStart(4)}`);
} finally {
  await prisma.$disconnect();
}
