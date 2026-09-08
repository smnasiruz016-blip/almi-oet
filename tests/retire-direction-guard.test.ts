/**
 * 🔴 THE DIRECTORY DECIDES THE DIRECTION, AND THIS TEST IS WHY IT STAYS THAT WAY.
 *
 * `scripts/retire-fragments.mts` takes its list as any path the caller passes,
 * and `--restore` flips every row that list names to `active = true`. Nothing
 * stopped those two facts meeting until 8 September 2026.
 *
 * A dry run that day showed what the meeting looked like: `--restore` against
 * `scripts/retire/reading-part-a-legacy.json` would have put all fifteen legacy
 * Reading Part A items back in front of paying learners — the exact items that
 * file exists to hide — and the only thing standing between that and production
 * was somebody remembering not to type it. That is not a guard, it is a habit.
 *
 * So the two directories now mean opposite things:
 *
 *   scripts/retire/   what is HIDDEN.        A retire may read it; a restore may not.
 *   anywhere else     what is BROUGHT BACK.  A restore may read it; a retire may not.
 *
 * ⚠️ THE REFUSAL BINDS THE WRITE, NOT THE LOOK. A dry run is deliberately still
 * allowed in both directions: it writes nothing, and a tool that refuses to let
 * somebody LOOK is a tool people stop looking with. The refusal cases below
 * therefore pass `--confirm`, because that is the case that matters.
 *
 * ⚠️ AND IT IS ABOUT PRODUCTION, NOT ABOUT WRITING. The e2e walk retires from a
 * checked-in list against a throwaway database and restores the same list to undo
 * itself; the guard exempts a disposable URL exactly as requireProdWrite() does,
 * so that walk keeps exercising the real script. These tests run with the
 * inherited environment, which is production-shaped, which is the case that needs
 * guarding.
 *
 * ── WHY EVERY INVOCATION HAPPENS ONCE, IN beforeAll ─────────────────────────
 *
 * Each run is `npx tsx`, which compiles before it refuses. Four of them inside
 * four `it` blocks each took 5-9 seconds on a loaded machine and blew vitest's
 * default 5s timeout — the tests failed for the cost of starting, not for what
 * they assert. They are run once here, with a timeout that reflects what
 * starting tsx actually costs, and the assertions below are pure reads.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

type Run = { out: string; code: number | null };

const RETIRE_LIST = "scripts/retire/reading-part-a-legacy.json";
const RESTORE_LIST = "scripts/restore/reading-form-27.json";

/** Runs the real script. ALLOW_PROD_WRITE is deleted, not blanked: an inherited
 *  value would make "it refused for the right reason" quietly untrue. */
function retireScript(args: string[]): Run {
  const env: NodeJS.ProcessEnv = { ...process.env };
  delete env.ALLOW_PROD_WRITE;
  const r = spawnSync(`npx tsx scripts/retire-fragments.mts ${args.join(" ")}`, {
    shell: true,
    env,
    encoding: "utf8",
  });
  return { out: `${r.stdout ?? ""}${r.stderr ?? ""}`, code: r.status };
}

let restoreFromRetireDir: Run;
let retireFromOutside: Run;
let dryRetire: Run;
let dryRestore: Run;

beforeAll(() => {
  restoreFromRetireDir = retireScript([RETIRE_LIST, "--restore", "--confirm"]);
  retireFromOutside = retireScript([RESTORE_LIST, "--confirm"]);
  dryRetire = retireScript([RETIRE_LIST]);
  dryRestore = retireScript([RESTORE_LIST, "--restore"]);
}, 180_000);

describe("retire-fragments — the directory decides the direction", () => {
  it("both fixtures exist and are the shape the script reads", () => {
    expect(existsSync(RETIRE_LIST), `${RETIRE_LIST} is missing`).toBe(true);
    expect(existsSync(RESTORE_LIST), `${RESTORE_LIST} is missing`).toBe(true);
    // so a refusal is about DIRECTION rather than about a malformed list
    for (const p of [RETIRE_LIST, RESTORE_LIST]) {
      const rows = JSON.parse(readFileSync(p, "utf8")) as { taskType?: string; title?: string }[];
      expect(Array.isArray(rows) && rows.length > 0, `${p} holds no rows`).toBe(true);
      for (const r of rows) {
        expect(typeof r.taskType, `${p} has a row without taskType`).toBe("string");
        expect(typeof r.title, `${p} has a row without title`).toBe("string");
      }
    }
  });

  it("REFUSES --restore on a list inside scripts/retire/", () => {
    const r = restoreFromRetireDir;
    expect(r.code, `expected a refusal, got exit ${r.code}:\n${r.out}`).toBe(2);
    expect(r.out).toContain("REFUSING");
    expect(r.out).toContain("--restore against a list in scripts/retire/");
    // it must not have got as far as naming rows it would touch
    expect(r.out, "it planned rows before refusing").not.toContain("rows that WOULD be touched");
    expect(r.out, "it reported a write").not.toContain("RESTORE complete");
  });

  it("REFUSES a retire from a list outside scripts/retire/", () => {
    const r = retireFromOutside;
    expect(r.code, `expected a refusal, got exit ${r.code}:\n${r.out}`).toBe(2);
    expect(r.out).toContain("REFUSING");
    expect(r.out).toContain("a retire from a list outside scripts/retire/");
    expect(r.out, "it planned rows before refusing").not.toContain("rows that WOULD be touched");
    expect(r.out, "it reported a write").not.toContain("RETIRE complete");
  });

  it("still ALLOWS both directions to be PLANNED, because a dry run writes nothing", () => {
    expect(dryRetire.out, "a dry-run retire from scripts/retire/ was refused").not.toContain(
      "REFUSING",
    );
    expect(dryRestore.out, "a dry-run restore from scripts/restore/ was refused").not.toContain(
      "REFUSING",
    );
  });
});
