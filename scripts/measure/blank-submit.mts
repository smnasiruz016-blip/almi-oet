/**
 * RUNNER for the blank-submit measurement / gate.
 *
 *   npm run gate:no-tokens-for-nothing
 *
 * Boots a throwaway PostgreSQL, migrates it, and runs tests/db/blank-submit
 * against it. Same shape and the same guard as scripts/e2e/run.mts — the
 * database is disposable, on loopback, deleted afterwards, and
 * assertDisposable() refuses anything else with no flag to override it.
 *
 * ── WHY A DATABASE AT ALL ───────────────────────────────────────────────────
 *
 * The question is "does an empty submission reach a paid model", and the only
 * honest way to answer it is to drive the REAL POST handler. That handler reads
 * the attempt, the item and the user from Postgres, and it writes the score and
 * the cost ledger back. A fake Prisma would let the route take a path the real
 * one never takes. The model boundary is stubbed; nothing else is.
 *
 * ── WHY NOT IN `npm test` ───────────────────────────────────────────────────
 *
 * The default vitest project excludes tests/db — those tests need a server that
 * `npm test` does not provision. Running them there would fail for the wrong
 * reason, and a gate that fails for the wrong reason gets switched off.
 */
import { spawnSync } from "node:child_process";
import { assertDisposable, startDisposablePostgres, type DisposableDb } from "../e2e/disposable-db.mjs";

/**
 * 🔴 THIS GATE COULD NOT FAIL. FOUND AND MEASURED 6 SEPTEMBER 2026.
 *
 * It set `process.exitCode = 1` when vitest failed. A deliberately failing test
 * was planted in tests/db/ and `npm run gate:no-tokens-for-nothing` exited **0**
 * — in CI (.github/workflows/ci.yml, its own step) that is a green tick over a
 * red suite, on the gate that exists because empty submissions reached a paid
 * model.
 *
 * The cause is the one recorded at the foot of scripts/e2e/run.mts: the
 * embedded-postgres teardown calls `process.exit()` explicitly, and an explicit
 * exit overrides `process.exitCode`. run.mts was fixed for the path that THROWS;
 * this file's failing path returns normally, so it never reached that fix.
 *
 * The failure is now carried out of `main()` as a value and turned into a real
 * `process.exit(1)` after the database is down, where nothing can overrule it.
 */
async function main(): Promise<boolean> {
  let db: DisposableDb | null = null;
  try {
    const provided = process.env.E2E_DATABASE_URL;
    if (provided) {
      assertDisposable(provided);
      console.log("[measure] using the E2E_DATABASE_URL provided by the caller");
    } else {
      console.log("[measure] starting a throwaway PostgreSQL…");
      // A different port from the e2e walk's, so the two can run side by side.
      db = await startDisposablePostgres(Number(process.env.MEASURE_PG_PORT ?? 55434));
    }
    const url = provided ?? db!.url;
    assertDisposable(url);

    // schema.prisma declares both url and directUrl; the throwaway server
    // answers for both (there is no pooler in front of it).
    const env = { ...process.env, DATABASE_URL: url, DATABASE_URL_UNPOOLED: url };

    let r = spawnSync("npx prisma migrate deploy", { shell: true, stdio: "inherit", env });
    if (r.status !== 0) throw new Error("[measure] migrate failed");

    r = spawnSync("npx vitest run --config vitest.db.config.mts", {
      shell: true,
      stdio: "inherit",
      env,
    });
    return r.status === 0;
  } finally {
    if (db) {
      console.log("[measure] stopping the throwaway database…");
      await db.stop();
    }
  }
}

main()
  .then((ok) => {
    if (!ok) {
      console.error("\n[measure] 🔴 tests/db FAILED — see the assertions above.");
      process.exit(1);
    }
  })
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exit(1);
  });
