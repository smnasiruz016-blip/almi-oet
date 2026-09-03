// Lightweight ops/health endpoint: confirms the practice item bank is seeded and
// reports active counts per sub-test (no PII, counts only). Used to verify a
// deploy's auto-seed step landed.
//
// ── 🔴 IT ALSO REPORTS PENDING MIGRATIONS, SINCE 3 SEPTEMBER 2026 ───────────
//
// On 2 September, PR #27 added `OetAttempt.deadlineAt` and a migration for it.
// The migration was never applied to production. `src/lib/oet/session.ts` passes
// `deadlineAt` on EVERY attempt create, so from that deploy onwards every
// attempt to start any exercise died with
//
//     P2022  The column `deadlineAt` does not exist in the current database
//
// The last successful attempt on production was 1 September 22:37 UTC; the
// commit that started writing the column landed 2 September 03:42 UTC; ZERO
// attempts were created in between. The product could not start a single
// exercise for about 43 hours, and it was found by the owner on a phone.
//
// NOTHING WE HAD COULD HAVE SEEN IT, AND THAT IS THE POINT:
//   · `npm run build` runs `prisma generate` (reads the schema, never a
//     database), `gate:all` (reads scripts/seed/gen — files, not rows) and
//     `next build`. No gate opens a database.
//   · CI's e2e job boots a THROWAWAY PostgreSQL and runs `prisma migrate deploy`
//     against it, so the database it walks always has every migration. It could
//     never see production's missing one — a check that cannot fail.
//   · this endpoint answered `ok:true` throughout, because it only counted rows.
//
// So the check goes where the evidence is: in production, against the production
// database, readable by anyone with curl and no credentials. `ok` is false and
// the status is 503 while any migration in the repo is missing from the database
// it is actually talking to.
//
// The migration folder is read at request time, which is why next.config.ts
// traces `./prisma/migrations/**` into this route. A list embedded at build time
// would be a second copy that could go stale against the folder.

import { readdirSync } from "node:fs";
import { join } from "node:path";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Migration names in the repo, from the folder Prisma itself reads. */
function migrationsInRepo(): string[] {
  try {
    return readdirSync(join(process.cwd(), "prisma", "migrations"), { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
  } catch {
    return [];
  }
}

/** Migration names the database says it has finished. */
async function migrationsApplied(): Promise<string[]> {
  const rows = await prisma.$queryRawUnsafe<{ migration_name: string }[]>(
    `select migration_name from "_prisma_migrations"
       where finished_at is not null and rolled_back_at is null`,
  );
  return rows.map((r) => r.migration_name).sort();
}

export async function GET(): Promise<NextResponse> {
  try {
    const [bySubTest, total, approvedReviews, applied] = await Promise.all([
      prisma.oetItem.groupBy({
        by: ["subTest"],
        where: { active: true },
        _count: true,
      }),
      prisma.oetItem.count({ where: { active: true } }),
      prisma.review.count({ where: { approved: true } }),
      migrationsApplied(),
    ]);
    const items: Record<string, number> = {};
    for (const r of bySubTest) items[r.subTest] = r._count;

    const inRepo = migrationsInRepo();
    const appliedSet = new Set(applied);
    const pending = inRepo.filter((m) => !appliedSet.has(m));
    // An empty folder means the trace did not ship it. Say so rather than
    // reporting "0 pending", which is what a check that reads nothing looks like.
    const readable = inRepo.length > 0;
    const ok = readable && pending.length === 0;

    return NextResponse.json(
      {
        ok,
        itemsActive: total,
        items,
        approvedReviews,
        migrations: {
          inRepo: inRepo.length,
          applied: applied.length,
          pending,
          ...(readable ? {} : { error: "migration folder not readable in this deployment" }),
        },
      },
      { status: ok ? 200 : 503, headers: { "Cache-Control": "no-store" } },
    );
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : "error" },
      { status: 500 },
    );
  }
}
