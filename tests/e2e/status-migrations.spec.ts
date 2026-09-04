/**
 * /api/status MUST NOTICE A MIGRATION THE DATABASE HAS NOT GOT.
 *
 * On 2 September 2026 `3_attempt_deadline` was written and never applied to
 * production. `session.ts` passes `deadlineAt` on every attempt create, so every
 * "Start" died with P2022 for about 43 hours — and every check we had was green
 * throughout, because not one of them opened the database production uses:
 *
 *   · `npm run build` runs prisma generate (schema only), gate:all (files only)
 *     and next build. No gate opens a database.
 *   · this very e2e job boots a THROWAWAY PostgreSQL and runs
 *     `prisma migrate deploy` on it first, so its database always has every
 *     migration. It could not have seen production's missing one.
 *   · /api/status answered ok:true, because it only counted rows.
 *
 * So the endpoint now compares the migration FOLDER with what the database says
 * it has applied, and this walk asserts the comparison is real: that the folder
 * was actually readable in the deployment (a folder the tracer failed to ship
 * reads as zero, and zero pending out of zero is the "check that read nothing"
 * shape this project keeps meeting), and that the count matches.
 *
 * 🔴 AND THE SECOND TEST IS WHY THE FIRST ONE IS NOT ENOUGH.
 *
 * The obvious red proof — add a migration directory the database has not got —
 * DOES NOT WORK HERE, and finding that out was the useful part: the runner calls
 * `prisma migrate deploy` before it starts the app, so a new directory is simply
 * applied too, and the endpoint reports 4 in the repo, 4 applied, nothing
 * pending. The first test alone could never fail on a pending migration. That is
 * the exact shape of check this project keeps shipping by accident.
 *
 * So the second test makes the database look like production did: it DELETES the
 * `3_attempt_deadline` row from `_prisma_migrations` in the THROWAWAY database,
 * asks the endpoint, expects 503 and the name, and puts the row back. Nothing
 * about the schema changes; only the record of the migration is removed and
 * restored, and assertDisposable has already refused any non-loopback database.
 */
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { test, expect } from "@playwright/test";
import { PrismaClient } from "@prisma/client";
import { assertDisposable } from "../../scripts/e2e/disposable-db.mjs";

type Status = {
  ok: boolean;
  itemsActive: number;
  migrations?: { inRepo: number; applied: number; pending: string[]; error?: string };
};

const dirsOnDisk = readdirSync(join(process.cwd(), "prisma", "migrations"), {
  withFileTypes: true,
})
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

test.describe.configure({ mode: "serial" });

test("/api/status reports the migration state of the database it is talking to", async ({ request }) => {
  const res = await request.get("/api/status");
  const body = (await res.json()) as Status;

  expect(body.migrations, "the endpoint does not report migrations at all").toBeDefined();
  const m = body.migrations!;

  // "read nothing and pass" is the failure shape this check exists to avoid.
  expect(m.error, `the migration folder was not readable: ${m.error}`).toBeUndefined();
  expect(m.inRepo, "the endpoint read ZERO migrations — it is checking nothing").toBeGreaterThan(0);
  expect(m.inRepo, "the endpoint sees a different set of migrations than the repo holds").toBe(
    dirsOnDisk.length,
  );

  console.log(
    `[e2e] /api/status: ${m.inRepo} migration(s) in the repo, ${m.applied} applied, ` +
      `pending [${m.pending.join(", ")}]`,
  );

  // The throwaway database had `prisma migrate deploy` run against it, so there
  // is nothing pending and the endpoint must say so with a 200.
  expect(m.pending, "a migration is missing from the database this app is using").toEqual([]);
  expect(body.ok).toBe(true);
  expect(res.status()).toBe(200);
});

test("🔴 and it goes RED when the database is missing one — proved, not asserted", async ({ request }) => {
  const url = process.env.E2E_DATABASE_URL;
  expect(url, "E2E_DATABASE_URL is not set — refusing to touch any database").toBeTruthy();
  assertDisposable(url!);

  const victim = dirsOnDisk[dirsOnDisk.length - 1];
  const prisma = new PrismaClient({ datasourceUrl: url });
  let removed: { migration_name: string }[] = [];
  try {
    // Take the record of one migration away. The COLUMN it added stays — this is
    // the record, not the schema — so nothing else in the walk is disturbed.
    removed = await prisma.$queryRawUnsafe<{ migration_name: string }[]>(
      `delete from "_prisma_migrations" where migration_name = $1 returning migration_name`,
      victim,
    );
    expect(removed.length, `no _prisma_migrations row named ${victim}`).toBe(1);

    const res = await request.get("/api/status");
    const body = (await res.json()) as Status;
    console.log(
      `[e2e] with "${victim}" removed: HTTP ${res.status()}, ok=${body.ok}, ` +
        `pending [${body.migrations?.pending.join(", ")}]`,
    );
    expect(res.status(), "a pending migration must not answer 200").toBe(503);
    expect(body.ok).toBe(false);
    expect(body.migrations?.pending).toContain(victim);
  } finally {
    // Put it back, whatever happened above.
    if (removed.length === 1) {
      await prisma.$executeRawUnsafe(
        `insert into "_prisma_migrations"
           (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count)
         values (gen_random_uuid()::text, 'restored-by-e2e', now(), $1, null, null, now(), 1)`,
        victim,
      );
    }
    await prisma.$disconnect();
  }

  // And green again, so a failure here cannot leave the suite lying.
  const after = await request.get("/api/status");
  expect(after.status(), "the row was not restored").toBe(200);
});
