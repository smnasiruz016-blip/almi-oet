/**
 * RUNNER for the slug immutability proof.
 *
 *   npm run gate:slug-immutable
 *
 * Boots a throwaway PostgreSQL, migrates it, and runs
 * tests/db/backfill-slug-immutable against it. Same shape and the same guard as
 * scripts/measure/blank-submit.mts — loopback, deleted afterwards, and
 * assertDisposable() refuses anything else with no flag to override it.
 *
 * ── WHY A REAL DATABASE ─────────────────────────────────────────────────────
 *
 * The rule being proved is "a slug is written once and is then immutable", and
 * it is enforced in a WHERE clause:
 *
 *     updateMany({ where: { id, slug: null }, data: { slug, form } })
 *
 * Only PostgreSQL can say whether that clause did what it claims. A stubbed
 * Prisma would be a second opinion about a rule the database is the sole judge
 * of — and the whole point of these columns is to stop having two answers to one
 * question. So the test runs the REAL script, unmodified, through its own
 * command line.
 *
 * The production-write guard lets it through because the target is disposable —
 * see the comment at the top of scripts/prod-write-guard.ts. Nothing here sets
 * ALLOW_PROD_WRITE, and nothing here may.
 */
import { spawnSync } from "node:child_process";
import { assertDisposable, startDisposablePostgres, type DisposableDb } from "../e2e/disposable-db.mjs";

/**
 * 🔴 EXIT WITH `process.exit(1)`, NOT `process.exitCode = 1`. MEASURED HERE, TWICE.
 *
 * The first version of this runner set `process.exitCode = 1` when vitest
 * failed. The gate then printed three red assertions — including the sabotaged
 * guard being caught by name — and `npm run gate:slug-immutable` exited **0**.
 * In CI that is a gate that can never fail.
 *
 * The cause is the one already recorded at the foot of scripts/e2e/run.mts: the
 * embedded-postgres teardown calls `process.exit()` explicitly, and an explicit
 * exit overrides `process.exitCode`. Measured again for this runner rather than
 * assumed from that note: `exitCode` reads back as 1 both before and after
 * `db.stop()` resolves, and the process still leaves with 0.
 *
 * So the failure is carried out of `main()` as a value and turned into a real
 * `process.exit(1)` AFTER the database is down, where nothing can overrule it.
 */
async function main(): Promise<boolean> {
  let db: DisposableDb | null = null;
  try {
    const provided = process.env.E2E_DATABASE_URL;
    if (provided) {
      assertDisposable(provided);
      console.log("[slug-immutable] using the E2E_DATABASE_URL provided by the caller");
    } else {
      console.log("[slug-immutable] starting a throwaway PostgreSQL…");
      // Its own port, so this can run beside the e2e walk (55432) and the
      // blank-submit measurement (55434).
      db = await startDisposablePostgres(Number(process.env.SLUG_PG_PORT ?? 55435));
    }
    const url = provided ?? db!.url;
    assertDisposable(url);

    // schema.prisma declares both url and directUrl; the throwaway server
    // answers for both (there is no pooler in front of it).
    const env = { ...process.env, DATABASE_URL: url, DATABASE_URL_UNPOOLED: url };

    let r = spawnSync("npx prisma migrate deploy", { shell: true, stdio: "inherit", env });
    if (r.status !== 0) throw new Error("[slug-immutable] migrate failed");

    r = spawnSync(
      "npx vitest run --config vitest.db.config.mts tests/db/backfill-slug-immutable.test.ts --reporter=verbose",
      { shell: true, stdio: "inherit", env },
    );
    return r.status === 0;
  } finally {
    if (db) {
      console.log("[slug-immutable] stopping the throwaway database…");
      await db.stop();
    }
  }
}

main()
  .then((ok) => {
    if (!ok) {
      console.error("\n[slug-immutable] 🔴 the immutability proof FAILED — see the assertions above.");
      process.exit(1);
    }
  })
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exit(1);
  });
