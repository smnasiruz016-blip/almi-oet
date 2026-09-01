/**
 * THE END-TO-END RUNNER — one command that owns the whole world the walk needs.
 *
 *   npm run test:e2e
 *
 * It boots a throwaway PostgreSQL, migrates it, seeds a learner and a small pool
 * of real exercises, builds and starts the app AGAINST THAT DATABASE, runs the
 * browser walk, and tears everything down.
 *
 * ── WHY AN OUTER SCRIPT AND NOT playwright's `webServer` ────────────────────
 *
 * The database has to exist before `next build` runs — the build prerenders `/`,
 * which calls prisma.review.findMany. Playwright's ordering between `webServer`
 * and `globalSetup` is a detail of Playwright's version, and the brief's rule is
 * not to lean on a mechanism we have not measured. Owning the order here removes
 * the question.
 *
 * ── 🔴 THE PRODUCTION DATABASE IS ONE MISTAKE AWAY, SO IT IS CHECKED TWICE ──
 *
 * `.env.local` in this repo holds the production Neon URL, and `next build` /
 * `next start` load `.env.local` themselves. Everything below depends on the
 * DATABASE_URL we pass WINNING over that file. Next's loader is documented not
 * to overwrite variables already present in process.env — but that is a
 * mechanism, so step 3 MEASURES it in a child process and refuses to continue if
 * the answer is not the throwaway URL. Nothing is asserted.
 *
 * The second check is assertDisposable(), which refuses any non-loopback host
 * and refuses a URL equal to this machine's DATABASE_URL.
 */
import { spawn, spawnSync } from "node:child_process";
import { writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { assertDisposable, startDisposablePostgres, type DisposableDb } from "./disposable-db.mjs";
import { seedFixture } from "./seed-fixture.mjs";

const PORT = Number(process.env.E2E_PORT ?? 3100);
const BASE_URL = `http://127.0.0.1:${PORT}`;

function run(cmd: string, env: NodeJS.ProcessEnv, label: string) {
  console.log(`\n[e2e] ${label}: ${cmd}`);
  const r = spawnSync(cmd, { shell: true, stdio: "inherit", env });
  if (r.status !== 0) throw new Error(`[e2e] ${label} failed (exit ${r.status})`);
}

/** Step 3: prove — do not assume — that Next's env loader leaves our
 *  DATABASE_URL alone in the presence of .env.local. */
function proveEnvPrecedence(url: string) {
  // @next/env is CJS: under ESM its API lands on `.default`. Resolved from the
  // namespace rather than destructured, so an interop change fails loudly here
  // rather than silently reporting "<unset>" and blocking a good run.
  const script = [
    "const m = await import('@next/env');",
    "const api = m.default ?? m;",
    "if (typeof api.loadEnvConfig !== 'function') throw new Error('no loadEnvConfig');",
    "api.loadEnvConfig(process.cwd());",
    "process.stdout.write(process.env.DATABASE_URL ?? '<unset>');",
  ].join("");
  const r = spawnSync(process.execPath, ["--input-type=module", "-e", script], {
    env: { ...process.env, DATABASE_URL: url },
    encoding: "utf8",
  });
  const seen = (r.stdout ?? "").trim();
  if (r.status !== 0 || seen === "") {
    throw new Error(
      `[e2e] REFUSING: could not measure whether .env.local overrides DATABASE_URL. ` +
        `probe exit ${r.status}: ${(r.stderr ?? "").trim().slice(0, 400)}`,
    );
  }
  if (seen !== url) {
    throw new Error(
      `[e2e] REFUSING: after Next loaded .env.local, DATABASE_URL was NOT the throwaway one.\n` +
        `      expected the loopback URL, saw a different value (host: ${
          (() => {
            try {
              return new URL(seen).hostname;
            } catch {
              return seen;
            }
          })()
        }).\n` +
        `      Running would have pointed the app at that database.`,
    );
  }
  console.log("[e2e] verified: .env.local does NOT override the throwaway DATABASE_URL");
}

async function waitForServer(timeoutMs = 180_000) {
  const started = Date.now();
  for (;;) {
    try {
      const res = await fetch(BASE_URL, { redirect: "manual" });
      if (res.status > 0) return;
    } catch {
      /* not up yet */
    }
    if (Date.now() - started > timeoutMs) throw new Error("[e2e] server never became reachable");
    await new Promise((r) => setTimeout(r, 500));
  }
}

async function main() {
  let db: DisposableDb | null = null;
  let server: ReturnType<typeof spawn> | null = null;
  const workDir = mkdtempSync(join(tmpdir(), "almioet-e2e-"));

  try {
    // 1 · the throwaway database
    const provided = process.env.E2E_DATABASE_URL;
    if (provided) {
      assertDisposable(provided);
      console.log("[e2e] using the E2E_DATABASE_URL provided by the caller");
    } else {
      console.log("[e2e] starting a throwaway PostgreSQL…");
      db = await startDisposablePostgres(Number(process.env.E2E_PG_PORT ?? 55432));
    }
    const url = provided ?? db!.url;
    assertDisposable(url);

    // 2 · the app's environment. DATABASE_URL is the throwaway one; nothing else
    //     from this shell is needed, and billing stays off because no Stripe key
    //     is set — the fixture learner is entitled by a comp grant.
    // schema.prisma declares BOTH url and directUrl (the Neon pooled/unpooled
    // pair). `prisma migrate deploy` refuses to load a schema whose directUrl
    // env var is unset, so the throwaway server answers for both — it is one
    // server with no pooler in front of it.
    const appEnv: NodeJS.ProcessEnv = {
      ...process.env,
      DATABASE_URL: url,
      DATABASE_URL_UNPOOLED: url,
    };

    // 3 · prove .env.local cannot win
    proveEnvPrecedence(url);

    // 4 · schema, through the REAL migration path production uses
    run("npx prisma migrate deploy", appEnv, "migrate");

    // 5 · the fixture
    console.log("[e2e] seeding the fixture…");
    const fixture = await seedFixture(url);
    const fixtureFile = join(workDir, "fixture.json");
    writeFileSync(fixtureFile, JSON.stringify(fixture, null, 2));
    console.log(`[e2e] seeded ${fixture.seededTitles.length} exercise(s) and one entitled learner`);

    // 6 · build + start
    if (process.env.E2E_SKIP_BUILD !== "1") {
      run("npx next build", appEnv, "build");
    } else {
      console.log("[e2e] E2E_SKIP_BUILD=1 — reusing the existing .next build");
    }
    console.log(`[e2e] starting the app on ${BASE_URL}…`);
    server = spawn(`npx next start -p ${PORT}`, {
      shell: true,
      stdio: "inherit",
      env: appEnv,
    });
    await waitForServer();
    console.log("[e2e] app is up");

    // 7 · the walk
    run(
      "npx playwright test",
      { ...process.env, E2E_BASE_URL: BASE_URL, E2E_FIXTURE_FILE: fixtureFile },
      "playwright",
    );
  } finally {
    if (server && !server.killed) {
      // next start spawns through a shell on Windows; kill the tree.
      if (process.platform === "win32" && server.pid) {
        spawnSync("taskkill", ["/pid", String(server.pid), "/t", "/f"], { stdio: "ignore" });
      } else {
        server.kill("SIGTERM");
      }
    }
    if (db) {
      console.log("[e2e] stopping the throwaway database…");
      await db.stop();
    }
    rmSync(workDir, { recursive: true, force: true });
  }
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exitCode = 1;
});
