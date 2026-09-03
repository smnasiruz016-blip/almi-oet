/**
 * Does production's OetAttempt actually have `deadlineAt`, and which migrations
 * has it recorded? Read-only — a catalogue query and a read of
 * _prisma_migrations. Nothing is written.
 *
 * Written 3 September 2026 to answer the production error, digest 1956175996:
 *   Invalid `prisma.oetAttempt.create()`: The column `deadlineAt` does not exist
 *   in the current database.  (P2022)
 */
import "./load-env.mjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
try {
  const cols = await prisma.$queryRawUnsafe<{ column_name: string }[]>(
    `select column_name from information_schema.columns
       where table_name = 'OetAttempt' order by ordinal_position`,
  );
  const names = cols.map((c) => c.column_name);
  console.log(`OetAttempt ke columns (${names.length}): ${names.join(", ")}`);
  console.log(`\n🔴 deadlineAt maujood hai? ${names.includes("deadlineAt") ? "HAAN" : "NAHI"}`);

  const migs = await prisma.$queryRawUnsafe<
    { migration_name: string; finished_at: Date | null; rolled_back_at: Date | null }[]
  >(`select migration_name, finished_at, rolled_back_at from "_prisma_migrations" order by started_at`);
  console.log(`\nproduction mein darj migrations (${migs.length}):`);
  for (const m of migs) {
    console.log(
      `  ${m.migration_name.padEnd(24)} finished=${m.finished_at ? m.finished_at.toISOString() : "NULL"}` +
        `${m.rolled_back_at ? "  ROLLED BACK" : ""}`,
    );
  }
} finally {
  await prisma.$disconnect();
}
