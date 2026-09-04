import "./load-env.mjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
try {
  const rows = await prisma.oetAttempt.findMany({
    orderBy: { startedAt: "desc" },
    take: 8,
    select: { startedAt: true, taskType: true, status: true },
  });
  console.log("production ke aakhri attempts:");
  for (const r of rows) {
    console.log(`  ${r.startedAt.toISOString()}  ${String(r.taskType).padEnd(18)} ${r.status}`);
  }
  const first = await prisma.oetAttempt.findFirst({
    orderBy: { startedAt: "asc" },
    select: { startedAt: true },
  });
  console.log(`\npehla attempt: ${first?.startedAt.toISOString()}`);
  console.log(`kul attempts: ${await prisma.oetAttempt.count()}`);
  const sessions = await prisma.oetSession.count().catch(() => -1);
  console.log(`kul sessions: ${sessions}`);
} finally {
  await prisma.$disconnect();
}
