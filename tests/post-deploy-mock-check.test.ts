/**
 * 🔴 A GREEN THAT CANNOT GO RED PROVES NOTHING — SO THIS DRIVES THE REAL SCRIPT.
 *
 * `scripts/check-prod-mock.mts` is the post-deploy answer to GAP-041: three
 * retire lists deactivated all 27 form-tagged Reading items, no form was complete
 * any more, and for five days the Start button on the full mock led nowhere while
 * every gate stayed green. A check that watches for that is worth exactly what it
 * is worth when the state it watches for is actually present.
 *
 * So the script is SPAWNED, unmodified, against a throwaway HTTP server serving
 * the payload shapes it will meet in production. Nothing is stubbed and no rule
 * is reimplemented here: the assertions are on the exit code of the same file the
 * workflow runs.
 *
 * ── 🔴 WHY THE SPAWN IS ASYNCHRONOUS, AND WHY THAT IS NOT A STYLE CHOICE ────
 *
 * The first draft used `spawnSync`, copied from tests/retire-direction-guard.test.ts
 * where it is correct. Here it DEADLOCKS: the fixture server lives in this
 * process, `spawnSync` blocks this process's event loop until the child exits,
 * and the child is waiting on an HTTP response this process can no longer send.
 * Neither side can move, and because the block is synchronous vitest cannot fire
 * its own beforeAll timeout either — the run simply hangs with no output. Measured
 * on 8 September 2026, twice, before the cause was found.
 *
 * The runs still all happen once, in beforeAll, for the reason that file gives:
 * each is `npx tsx`, which compiles before it decides, and a few seconds inside an
 * `it` blows vitest's 5s default and fails for the cost of starting rather than
 * for what it asserts.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { spawn } from "node:child_process";
import { createServer, type Server } from "node:http";
import { readFileSync } from "node:fs";
import { formTagsInRepo } from "../scripts/form-tags-in-repo";

/** What the SEED SOURCE declares, from the same function the script calls.
 *  The fixtures are built from this rather than from a literal 3: a fourth form
 *  would otherwise turn every case in this file red for a reason that is not the
 *  one it asserts. */
const SOURCE_FORMS = formTagsInRepo().length;

type Run = { out: string; code: number | null };

/** The shapes the endpoint can be in, keyed by the path the script is pointed at
 *  — it appends /api/status to whatever base it is given. */
const CASES: Record<string, unknown> = {
  // what production must look like today
  healthy: {
    ok: true,
    itemsActive: 661,
    mock: { formsDeclared: SOURCE_FORMS, formsComplete: SOURCE_FORMS, startable: true },
  },
  // GAP-041 itself: every form declared, none complete, nothing can start
  "nothing-startable": {
    ok: true,
    itemsActive: 634,
    mock: { formsDeclared: SOURCE_FORMS, formsComplete: 0, startable: false },
  },
  // the first two thirds of GAP-041, caught early: one form quietly lost
  "two-of-three": {
    ok: true,
    itemsActive: 655,
    mock: { formsDeclared: SOURCE_FORMS, formsComplete: SOURCE_FORMS - 1, startable: true },
  },
  // a form whose ROWS ARE GONE: the endpoint cannot tell that from a bank that
  // never had it, and reports the rest as complete. Only the source knows.
  "deleted-form": {
    ok: true,
    itemsActive: 604,
    mock: { formsDeclared: SOURCE_FORMS - 1, formsComplete: SOURCE_FORMS - 1, startable: true },
  },
  // a deployment from before the block existed
  "old-build": { ok: true, itemsActive: 661 },
  // a bank with no forms at all — the check would be measuring nothing
  "empty-bank": {
    ok: true,
    itemsActive: 0,
    mock: { formsDeclared: 0, formsComplete: 0, startable: false },
  },
  // 503 is the migrations check's business, not this one's: the counts are good
  "pending-migration": {
    ok: false,
    itemsActive: 661,
    mock: { formsDeclared: SOURCE_FORMS, formsComplete: SOURCE_FORMS, startable: true },
  },
};

let server: Server;
const runs: Record<string, Run> = {};

/** Runs the real script and resolves with its exit code and output. Async, so
 *  this process stays able to answer the request the child is about to make. */
function check(url: string): Promise<Run> {
  return new Promise((resolve) => {
    const child = spawn(`npx tsx scripts/check-prod-mock.mts ${url}`, {
      shell: true,
    });
    let out = "";
    child.stdout.on("data", (d) => (out += String(d)));
    child.stderr.on("data", (d) => (out += String(d)));
    child.on("close", (code) => resolve({ out, code }));
  });
}

beforeAll(async () => {
  server = createServer((req, res) => {
    const name = (req.url ?? "").split("/")[1] ?? "";
    const body = CASES[name];
    if (body === undefined) {
      res.writeHead(404).end("no such case");
      return;
    }
    res.writeHead(name === "pending-migration" ? 503 : 200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(body));
  });
  await new Promise<void>((r) => server.listen(0, "127.0.0.1", r));
  const addr = server.address();
  const port = typeof addr === "object" && addr ? addr.port : 0;
  const base = `http://127.0.0.1:${port}`;

  const names = Object.keys(CASES);
  const results = await Promise.all([
    ...names.map((n) => check(`${base}/${n}`)),
    check("http://127.0.0.1:1/nowhere"),
  ]);
  names.forEach((n, i) => (runs[n] = results[i]));
  runs.unreachable = results[names.length];
}, 300_000);

afterAll(() => {
  // closeAllConnections first: fetch keeps its socket alive, and close() alone
  // waits for it, which leaves the run hanging after the last assertion passes.
  server?.closeAllConnections();
  server?.close();
});

describe("check-prod-mock — the post-deploy answer to GAP-041", () => {
  it("the source declares at least one form, and they all look like form tags", () => {
    // otherwise every case below would be asserting against an empty scan
    expect(SOURCE_FORMS).toBeGreaterThan(0);
    for (const tag of formTagsInRepo()) expect(tag).toMatch(/^form-\d+$/);
  });

  it("is GREEN when every declared form is complete and startable", () => {
    expect(runs.healthy.out).toContain(
      `${SOURCE_FORMS} form declare hain, ${SOURCE_FORMS} mukammal hain`,
    );
    expect(runs.healthy.out).toContain(`source ${SOURCE_FORMS} = database ${SOURCE_FORMS}`);
    expect(runs.healthy.code, runs.healthy.out).toBe(0);
  });

  it("🔴 goes RED when the SOURCE declares a form the database does not have", () => {
    // the one case the endpoint cannot see on its own: rows DELETED, not retired
    expect(runs["deleted-form"].code, runs["deleted-form"].out).not.toBe(0);
    expect(runs["deleted-form"].out).toContain("GHAYAB");
  });

  it("🔴 goes RED when nothing is startable — GAP-041 as it actually happened", () => {
    expect(runs["nothing-startable"].code, runs["nothing-startable"].out).not.toBe(0);
    expect(runs["nothing-startable"].out).toContain("START HI NAHI HO SAKTA");
  });

  it("🔴 goes RED at 2 of 3, even though a mock still starts", () => {
    // the learner who would have drawn the third form gets nothing, and the
    // other two working is not a state anybody chose
    expect(runs["two-of-three"].code, runs["two-of-three"].out).not.toBe(0);
    expect(runs["two-of-three"].out).toContain(`(${SOURCE_FORMS - 1}/${SOURCE_FORMS})`);
  });

  it("🔴 goes RED on a deployment that does not report the block at all", () => {
    expect(runs["old-build"].code, runs["old-build"].out).not.toBe(0);
    expect(runs["old-build"].out).toContain("purana build");
  });

  it("🔴 goes RED when NOTHING was measured, rather than passing over an empty bank", () => {
    expect(runs["empty-bank"].code, runs["empty-bank"].out).not.toBe(0);
    expect(runs["empty-bank"].out).toContain("SIFAR");
  });

  it("goes RED when the endpoint cannot be reached", () => {
    expect(runs.unreachable.code, runs.unreachable.out).not.toBe(0);
    expect(runs.unreachable.out).toContain("nahi pahuncha");
  });

  it("does NOT fail on 503 — a pending migration is the other check's job", () => {
    expect(runs["pending-migration"].out).toContain("HTTP 503");
    expect(runs["pending-migration"].code, runs["pending-migration"].out).toBe(0);
  });

  it("the script does not carry its own copy of the source scan", () => {
    const src = readFileSync("scripts/check-prod-mock.mts", "utf8");
    expect(src).toContain("formTagsInRepo()");
    // and does not import the 4.6 MB bank to learn one number. Asserted on the
    // IMPORT lines: the header discusses scripts/seed/gen in prose, and a search
    // for the string would call that a violation.
    const imports = src.split(/\r?\n/).filter((l) => l.startsWith("import "));
    expect(imports.length).toBeGreaterThan(0);
    for (const line of imports) expect(line).not.toContain("seed/gen");
  });

  it("the engine and the endpoint share ONE computation, by import", () => {
    // The point of the job: if the route ever counts the bank its own way it can
    // report startable:true while chooseCompleteForm() returns null, and this
    // check goes green over a product that refuses to start.
    for (const path of ["src/lib/oet/session.ts", "src/app/api/status/route.ts"]) {
      const src = readFileSync(path, "utf8");
      expect(src, `${path} must call the shared function`).toContain("formCompleteness()");
      expect(src.includes("mockObjectiveNeeds"), `${path} has its own needs table`).toBe(false);
    }
  });

  it("the workflow runs this script, and runs it even when the migrations step fails", () => {
    const wf = readFileSync(".github/workflows/post-deploy.yml", "utf8");
    expect(wf).toContain("scripts/check-prod-mock.mts");
    expect(wf).toContain("!cancelled()");
    // tsx-only, for the reason the workflow's own header gives. Asserted on what
    // the job RUNS, not on the text of the file — the header discusses `npm ci`
    // in prose, and a search for the string called that a violation.
    const runs = wf.split("\n").filter((l) => l.trim().startsWith("run:"));
    for (const line of runs) expect(line).toContain("npx --yes tsx@4");
    // A CENSUS, not a count. The number moved from 2 to 3 on 10 September 2026
    // when GAP-055 added the cache-header check, and a bare `toBe(3)` would have
    // said nothing about WHICH three. Naming them keeps the original purpose —
    // a step cannot appear or vanish unnoticed — and says what is there.
    expect(runs.map((l) => l.trim().replace(/^run:\s*/, "")).sort()).toEqual(
      [
        "npx --yes tsx@4 scripts/check-cache-headers.mts",
        "npx --yes tsx@4 scripts/check-prod-migrations.mts",
        "npx --yes tsx@4 scripts/check-prod-mock.mts",
      ].sort(),
    );
  });
});
