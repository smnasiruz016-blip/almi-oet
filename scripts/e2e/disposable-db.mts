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

const LOOPBACK = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);

/** Hosts that must never appear. Not a whitelist substitute — the loopback rule
 *  below already decides that — but a named refusal reads better in a log than
 *  "host is not loopback" when someone has pasted a Neon URL by mistake. */
const NEVER = /neon\.tech|supabase|amazonaws|azure|vercel-storage|\.render\.com/i;

export function assertDisposable(url: string): void {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`[e2e] E2E_DATABASE_URL is not a URL: refusing to run.`);
  }
  if (NEVER.test(url)) {
    throw new Error(
      `[e2e] REFUSING: the database URL names a hosted provider (${parsed.hostname}). ` +
        `The end-to-end walk writes rows; it runs against a throwaway server only.`,
    );
  }
  if (!LOOPBACK.has(parsed.hostname)) {
    throw new Error(
      `[e2e] REFUSING: database host is "${parsed.hostname}", not loopback. ` +
        `The end-to-end walk writes rows; it runs against a throwaway server only.`,
    );
  }
  if (process.env.DATABASE_URL && url.trim() === process.env.DATABASE_URL.trim()) {
    throw new Error(
      `[e2e] REFUSING: the target equals this machine's DATABASE_URL. ` +
        `That is the production database.`,
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
