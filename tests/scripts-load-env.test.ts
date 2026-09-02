/**
 * THE SCRIPT ENV LOADER, AND THE ONE THING THAT MUST NOT CHANGE.
 *
 * `scripts/load-env.mts` makes `npx tsx scripts/<x>.mts` work as documented by
 * loading the app's own `.env.local`, the same way `next start` does. That file
 * in this repo holds the PRODUCTION Neon URL.
 *
 * ── 🔴 WHY THIS TEST EXISTS ─────────────────────────────────────────────────
 *
 * `scripts/e2e/run.mts` hands its children a throwaway `DATABASE_URL` and every
 * safety it has rests on that value SURVIVING the loader: the browser walk, the
 * retire walk and `prisma migrate deploy` all write, and if `.env.local` won,
 * they would write to production. run.mts already measures this for Next's own
 * loader in a child process; this measures it for OUR module, which is the one
 * the scripts import.
 *
 * It runs in a CHILD PROCESS on purpose. `loadEnvConfig` mutates `process.env`
 * once per process and caches; asserting inside this process would prove nothing
 * about a fresh script run and would leak a production URL into the test run's
 * own environment.
 */
import { afterAll, describe, expect, it } from "vitest";
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const LOADER = join(ROOT, "scripts", "load-env.mts");
const WORK = mkdtempSync(join(tmpdir(), "almioet-env-"));
afterAll(() => rmSync(WORK, { recursive: true, force: true }));

/**
 * Run a probe in a FRESH process and report what it printed.
 *
 * The probe is a real `.mts` FILE, not `tsx --eval`: --eval compiles as CommonJS
 * and a top-level `await import(...)` there dies with "Top-level await is
 * currently not supported with the cjs output format". Measured, not assumed.
 *
 * cwd is the repo, because that is the directory loadEnvConfig searches.
 */
function probe(body: string, env: NodeJS.ProcessEnv): {
  status: number | null;
  out: string;
  stderr: string;
} {
  const file = join(WORK, `probe-${Math.random().toString(36).slice(2)}.mts`);
  writeFileSync(file, `import ${JSON.stringify(pathToFileURL(LOADER).href)};\n${body}\n`);
  const r = spawnSync(`npx tsx ${JSON.stringify(file)}`, {
    shell: true,
    cwd: ROOT,
    encoding: "utf8",
    env,
  });
  return { status: r.status, out: (r.stdout ?? "").trim(), stderr: (r.stderr ?? "").trim() };
}

/**
 * A hand-run script's environment, as a person would have it.
 *
 * NODE_ENV IS REMOVED, and that is not cosmetic: vitest sets NODE_ENV=test, and
 * Next's loader deliberately SKIPS `.env.local` in the test environment. Leaving
 * it in would have this suite measure a loader that reads nothing, which is
 * exactly the sort of check that passes and proves nothing.
 */
function handRunEnv(extra: Record<string, string> = {}): NodeJS.ProcessEnv {
  const env: Record<string, string | undefined> = { ...process.env, ...extra };
  delete env.NODE_ENV;
  return env as NodeJS.ProcessEnv;
}

function loadWith(extra: Record<string, string>): {
  status: number | null;
  url: string;
  stderr: string;
} {
  const r = probe(
    "process.stdout.write(process.env.DATABASE_URL ?? '<unset>');",
    handRunEnv(extra),
  );
  return { status: r.status, url: r.out, stderr: r.stderr };
}

const THROWAWAY = "postgresql://e2e:e2e@127.0.0.1:55499/throwaway?schema=public";

describe("scripts/load-env.mts", () => {
  it("exists and is the module the hand-run scripts import", () => {
    expect(existsSync(LOADER)).toBe(true);
    for (const f of [
      "scripts/retire-fragments.mts",
      "scripts/update-part-a-texts.mts",
      "scripts/seed/append.ts",
    ]) {
      const src = readFileSync(join(ROOT, f), "utf8");
      const loaderAt = src.indexOf("load-env.mjs");
      const prismaAt = src.indexOf('from "@prisma/client"');
      expect(loaderAt, `${f} does not import the env loader`).toBeGreaterThan(-1);
      if (prismaAt > -1) {
        // Import order decides evaluation order, and PrismaClient reads the
        // environment when it is constructed, not when it is imported — but
        // putting the loader second invites someone to move a construction up.
        expect(loaderAt, `${f} imports @prisma/client before the env loader`).toBeLessThan(
          prismaAt,
        );
      }
    }
  });

  it("🔴 an explicitly-set DATABASE_URL SURVIVES — .env.local must not win", () => {
    const got = loadWith({ DATABASE_URL: THROWAWAY });
    expect(got.status, `the loader failed: ${got.stderr}`).toBe(0);
    expect(
      got.url,
      "the loader overwrote a DATABASE_URL its caller had set; the e2e walk, the " +
        "retire walk and `prisma migrate deploy` would all be pointed at production",
    ).toBe(THROWAWAY);
  });

  it("fills DATABASE_URL when the caller set none", () => {
    // The control for the test above: if the loader loaded NOTHING it would pass
    // that one perfectly, so this proves it is doing its job at all. The value is
    // only checked for shape — it is never printed.
    const clean = handRunEnv();
    delete clean.DATABASE_URL;
    const got = probe(
      "const u = process.env.DATABASE_URL;\n" +
        "process.stdout.write(u ? new URL(u).protocol : '<unset>');",
      clean,
    );
    expect(got.status, `the loader failed: ${got.stderr}`).toBe(0);
    // .env.local is not in git; on a checkout without one this is honestly unset,
    // and saying so is better than a test that quietly proves nothing.
    const seen = got.out;
    if (!existsSync(join(ROOT, ".env.local"))) {
      expect(seen).toBe("<unset>");
      return;
    }
    expect(seen, "the loader did not fill DATABASE_URL from .env.local").toMatch(/^postgres/);
  });
});
