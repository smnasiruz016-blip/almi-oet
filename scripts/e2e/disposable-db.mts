/**
 * THE DISPOSABLE DATABASE, AND THE GUARD THAT KEEPS IT DISPOSABLE.
 *
 * The end-to-end walk has to write: it creates a user, sessions and attempts,
 * and it scores them. None of that may ever touch the production bank. So this
 * module owns two things — provisioning a throwaway Postgres, and REFUSING to
 * proceed against anything that is not obviously one.
 *
 * ── THE GUARD IS NOT ADVISORY ───────────────────────────────────────────────
 *
 * assertDisposable() throws. There is no flag to skip it and no environment
 * variable that turns it off, because the one time it matters is the one time
 * somebody is in a hurry. It refuses anything whose host is not loopback, and it
 * refuses a URL equal to the DATABASE_URL this machine already has — the exact
 * value sitting in .env.local, which points at production Neon.
 *
 * ── WHY EMBEDDED POSTGRES AND NOT DOCKER ────────────────────────────────────
 *
 * Measured on this machine, 1 Sep 2026: no `docker`, no `psql`, no local server.
 * `embedded-postgres` ships a real PostgreSQL 17.10 binary and runs it on a
 * loopback port from a temp directory that is deleted afterwards. It is a real
 * server speaking the real wire protocol, so Prisma's migrations and queries are
 * exercised for real — not a fake, and not SQLite pretending.
 *
 * CI uses this same path rather than a service container, deliberately: one
 * provisioning code path means a green run here and a green run there mean the
 * same thing.
 */
import EmbeddedPostgres from "embedded-postgres";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { whyNotDisposable, isThisMachinesDatabase } from "../disposable-url";

// The predicate lives in scripts/disposable-url.ts — one definition, shared with
// scripts/prod-write-guard.ts, which cannot import THIS file because it pulls in
// embedded-postgres.
export function assertDisposable(url: string): void {
  const why =
    whyNotDisposable(url) ??
    (isThisMachinesDatabase(url) ? "the target equals this machine's DATABASE_URL" : null);
  if (why) {
    throw new Error(
      `[e2e] REFUSING: ${why}. The end-to-end walk writes rows; it runs against a ` +
        "throwaway server only.",
    );
  }
}

export type DisposableDb = {
  url: string;
  stop: () => Promise<void>;
};

/** Boot a throwaway PostgreSQL on a loopback port. The data directory is a temp
 *  folder, `persistent: false`, and it is removed on stop — so a crashed run
 *  leaves a directory behind and never a database anyone could mistake for real. */
export async function startDisposablePostgres(port = 55432): Promise<DisposableDb> {
  const databaseDir = mkdtempSync(join(tmpdir(), "almioet-e2e-pg-"));
  const pg = new EmbeddedPostgres({
    databaseDir,
    user: "e2e",
    password: "e2e",
    port,
    persistent: false,
    // 🔴 UTF8 AND A NEUTRAL LOCALE, BOTH FORCED. FOUND 4 SEPTEMBER 2026.
    //
    // `initdb` takes its encoding from the HOST's locale. On this machine that
    // is Icelandic_Iceland.1252, so every throwaway database was created as
    // WIN1252 — and the first seed that carried a character outside it died:
    //
    //   ERROR: character with byte sequence 0xe2 0x89 0xa5 in encoding "UTF8"
    //   has no equivalent in encoding "WIN1252"
    //
    // 0xe2 0x89 0xa5 is "≥", which the Writing case notes use. Production is
    // Neon, which is UTF8, so the CONTENT was never the problem: the test
    // database simply could not hold what production holds, and no walk had ever
    // asked it to because Writing and Speaking were not seeded until today.
    //
    // A harness that cannot store the real bank cannot test the real product,
    // and it fails differently on a different developer's machine — which is the
    // worse half. The encoding is now the product's, not the laptop's.
    initdbFlags: ["--encoding=UTF8", "--locale=C"],
  });
  await pg.initialise();
  await pg.start();
  await pg.createDatabase("almioet_e2e");
  const url = `postgresql://e2e:e2e@127.0.0.1:${port}/almioet_e2e`;
  assertDisposable(url);
  return {
    url,
    stop: async () => {
      try {
        await pg.stop();
      } finally {
        rmSync(databaseDir, { recursive: true, force: true });
      }
    },
  };
}
