/**
 * @vitest-environment node
 *
 * gate:db-deploy-guarded — THE SCHEMA COMMAND OBEYS THE SAME TWO CONDITIONS.
 *
 * Every hand-run script in scripts/ has required `--confirm` AND
 * `ALLOW_PROD_WRITE=1` since 4 September 2026. `npm run db:deploy` did not, and
 * that was the gap: the guard covered the scripts that write ROWS and left
 * unguarded the one command that writes the SCHEMA.
 *
 * ── WHY THIS SPAWNS `npm run db:deploy` INSTEAD OF CALLING A FUNCTION ───────
 *
 * Because the thing that can rot is the WIRING, not the guard. requireProdWrite()
 * is already proved elsewhere; what this file has to prove is that the command
 * a human actually types goes through it. Calling the wrapper directly — or
 * asserting on package.json alone — would keep passing on the day `db:deploy`
 * was pointed back at bare `prisma migrate deploy`. So each case runs the real
 * npm script, in a child process, and reads what came out.
 *
 * ── 🔴 THE CONTROL THAT MATTERS MOST IS THE DISPOSABLE ONE ─────────────────
 *
 * A guard that refused everything would pass a naive RED test and break the e2e
 * walk, which runs migrations against a THROWAWAY database on loopback with no
 * conditions set, on purpose. That is case 5. Without it, "refuses" and "refuses
 * everything" are indistinguishable.
 *
 * ── SAFETY ─────────────────────────────────────────────────────────────────
 *
 * Every case supplies its own DATABASE_URL — `db.invalid` (unresolvable) or a
 * closed loopback port — and assertNotProduction() below refuses to spawn
 * anything else. No case can reach a real database: the two that get past the
 * guard both end at P1001, which is the point. There is no `.env` in this repo
 * and the Prisma CLI does not read `.env.local`, so there is no ambient
 * production URL for a child to fall back to either.
 */
import { describe, expect, it } from "vitest";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";

/** Not loopback and not a hosted provider => the guard must treat it as production. */
const PRODUCTION_SHAPED = "postgresql://u:p@db.invalid:5432/x";
/** Loopback, nothing listening => the guard must treat it as throwaway. */
const DISPOSABLE = "postgresql://u:p@localhost:59999/x";

/** The line the wrapper prints only after BOTH conditions are satisfied. */
const OPENED = "guard satisfied";
const REFUSED = "REFUSING TO WRITE";

/** npm start-up plus, in the control cases, prisma's connection attempt. */
const SPAWN_TIMEOUT = 60_000;

function assertNotProduction(url: string): void {
  const ok = url.includes("db.invalid") || url.includes("localhost:59999");
  if (!ok) throw new Error(`this test tried to spawn a migration at ${url} — refusing`);
}

type Run = { out: string; code: number | null };

function dbDeploy(opts: { url: string; confirm: boolean; allow: boolean }): Run {
  assertNotProduction(opts.url);
  const env: NodeJS.ProcessEnv = {
    ...process.env,
    DATABASE_URL: opts.url,
    DATABASE_URL_UNPOOLED: opts.url,
  };
  // Deleted rather than set to "": the guard tests for exactly "1", but an
  // inherited value would make a "no conditions" case quietly untrue.
  delete env.ALLOW_PROD_WRITE;
  if (opts.allow) env.ALLOW_PROD_WRITE = "1";

  const cmd = opts.confirm ? "npm run db:deploy -- --confirm" : "npm run db:deploy";
  const r = spawnSync(cmd, { shell: true, env, encoding: "utf8" });
  return { out: `${r.stdout ?? ""}${r.stderr ?? ""}`, code: r.status };
}

describe("the wiring — db:deploy must go through the wrapper", () => {
  it("package.json points db:deploy at scripts/db-deploy.mts", () => {
    const pkg = JSON.parse(readFileSync("package.json", "utf8")) as {
      scripts: Record<string, string>;
    };
    expect(
      pkg.scripts["db:deploy"],
      "db:deploy no longer runs the guarded wrapper — the schema command is unguarded again",
    ).toContain("scripts/db-deploy.mts");
  });
});

describe("🔴 RED — a production-shaped URL is refused without both conditions", () => {
  it("neither condition: refused, exit 1, and prisma is never started", () => {
    const r = dbDeploy({ url: PRODUCTION_SHAPED, confirm: false, allow: false });
    expect(r.out, "db:deploy did not refuse an unguarded production migration").toContain(REFUSED);
    // 🔴 Refused for the RIGHT reason: not because prisma failed to connect, and
    // not because the config would not load. The handover line never printed.
    expect(r.out, "the guard opened when it should have refused").not.toContain(OPENED);
    expect(r.out, "prisma was started despite the refusal").not.toContain("Prisma schema loaded");
    expect(r.out).toContain("--confirm");
    expect(r.out).toContain("ALLOW_PROD_WRITE=1");
    expect(r.code, "a refused migration must fail the shell").toBe(1);
  }, SPAWN_TIMEOUT);

  it("the refusal names the command a human would actually type", () => {
    const r = dbDeploy({ url: PRODUCTION_SHAPED, confirm: false, allow: false });
    // A refusal printing `npx tsx scripts/db-deploy.mts --confirm` would be a
    // wrong instruction at the moment somebody is looking for the right one.
    expect(r.out).toContain("npm run db:deploy -- --confirm");
  }, SPAWN_TIMEOUT);

  it("--confirm ALONE is not enough", () => {
    const r = dbDeploy({ url: PRODUCTION_SHAPED, confirm: true, allow: false });
    expect(r.out).toContain(REFUSED);
    expect(r.out).toContain("ALLOW_PROD_WRITE=1");
    expect(r.out).not.toContain(OPENED);
    expect(r.code).toBe(1);
  }, SPAWN_TIMEOUT);

  it("ALLOW_PROD_WRITE=1 ALONE is not enough", () => {
    const r = dbDeploy({ url: PRODUCTION_SHAPED, confirm: false, allow: true });
    expect(r.out).toContain(REFUSED);
    expect(r.out).toContain("--confirm");
    expect(r.out).not.toContain(OPENED);
    expect(r.code).toBe(1);
  }, SPAWN_TIMEOUT);
});

describe("the CONTROLS — the guard is a door, not a wall", () => {
  it("BOTH conditions: the guard opens and prisma runs", () => {
    const r = dbDeploy({ url: PRODUCTION_SHAPED, confirm: true, allow: true });
    expect(r.out, "both conditions were given and the guard still refused").not.toContain(REFUSED);
    expect(r.out, "the guard never handed over to prisma").toContain(OPENED);
    // It got as far as the database and stopped there — which is the proof that
    // the guard is no longer what is stopping it.
    expect(r.out, "prisma never reached the database").toMatch(/P1001|Can't reach database server/);
  }, SPAWN_TIMEOUT);

  it("🔴 a THROWAWAY database still runs with NO conditions — the e2e walk", () => {
    // scripts/e2e/run.mts and scripts/measure/blank-submit.mts migrate a loopback
    // database on purpose. Making them set ALLOW_PROD_WRITE=1 would teach exactly
    // the habit the guard exists to prevent.
    const r = dbDeploy({ url: DISPOSABLE, confirm: false, allow: false });
    expect(r.out, "the guard refused a throwaway database — the e2e walk is broken").not.toContain(
      REFUSED,
    );
    expect(r.out).toContain(OPENED);
  }, SPAWN_TIMEOUT);
});
