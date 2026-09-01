/**
 * gate:chain-is-paid — EVERY DOOR INTO A SESSION IS LOCKED, INCLUDING THE NEW ONE.
 *
 * MONEY BEFORE TOKENS. Writing and Speaking are graded by an AI call on submit,
 * so a way to start attempts without an entitlement check is a way to spend
 * tokens for free. The "Next exercise" chain is the entry point that makes this
 * urgent: it is the one a learner can press over and over without ever passing
 * back through a page that gates.
 *
 * ── THIS GATE ENUMERATES THE DOORS RATHER THAN LISTING THEM ─────────────────
 *
 * It reads the exports of src/lib/oet/entry.ts AT RUNTIME and calls every one of
 * them as a learner without paid access. A fourth door added to that module is
 * therefore covered the day it is written — and if it is added without this test
 * knowing how to call it, the census below fails rather than silently skipping
 * it. That is the difference between a guard over a population and a guard over
 * a list somebody has to remember to update.
 *
 * A SECOND census closes the other half: no page under src/app may call
 * startSession() directly, because a page that did would have its own copy of
 * the check and could drift. entry.ts is the only importer.
 *
 * ── HOW IT WAS SEEN RED ─────────────────────────────────────────────────────
 *
 *   a) The guard was deleted from continuePracticeChain — i.e. `payingUser()`
 *      was replaced with a bare `requireUser()`. The unpaid case reached
 *      startSession and the redirect assertion failed.
 *   b) `import { startSession }` was added back to the task page and used
 *      directly. The call-site census failed.
 *
 * Both restored afterwards; the recorded output is in the PR body.
 *
 * ── WHAT THIS DOES NOT PROVE ────────────────────────────────────────────────
 *
 * It proves no door reaches startSession without hasPaidAccess. It does NOT
 * prove hasPaidAccess itself is right (that is lib/billing/plans), and it does
 * not prove the submit route's own trial cap — that lives in
 * lib/billing/trial-limits.ts and is checked where the tokens are actually spent.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

let PAID = false;
let USER = {
  id: "u1",
  email: "learner@example.com",
  targetProfession: "NURSING" as string | null,
};

class RedirectError extends Error {
  constructor(public to: string) {
    super(`REDIRECT:${to}`);
  }
}

vi.mock("next/navigation", () => ({
  redirect: (to: string) => {
    throw new RedirectError(to);
  },
  notFound: () => {
    throw new Error("NOT_FOUND");
  },
}));
vi.mock("@/lib/auth", () => ({ requireUser: async () => USER }));
vi.mock("@/lib/billing/plans", () => ({ hasPaidAccess: () => PAID }));

const startSession = vi.fn(async () => "new-session-id");
const getSessionView = vi.fn(async () => ({
  id: "old-session-id",
  mode: "PRACTICE_SET",
  profession: null,
  attempts: [{ itemId: "la1", taskType: "LISTENING_PART_A" }],
}));
vi.mock("@/lib/oet/session", () => ({ startSession, getSessionView }));

// A two-item pool, so the chain has somewhere to go for the positive control.
vi.mock("@/lib/prisma", () => ({
  prisma: {
    oetItem: {
      findMany: async () => [
        { id: "la1", title: "Item 1", difficulty: "CORE", topicTag: null },
        { id: "la2", title: "Item 2", difficulty: "CORE", topicTag: null },
      ],
      count: async () => 2,
      findFirst: async () => null,
    },
    oetAttempt: { findMany: async () => [] },
  },
}));

const entry = await import("@/lib/oet/entry");

/**
 * How to call each door. 🔴 THE KEYS OF THIS MAP ARE ASSERTED TO BE EXACTLY THE
 * MODULE'S EXPORTS — a new door with no entry here fails the census below, so it
 * cannot be added and quietly left untested.
 */
const CALL: Record<string, () => Promise<unknown>> = {
  beginPracticeSession: () =>
    entry.beginPracticeSession({
      taskSlug: "listening-part-a",
      professionSlug: "nursing",
      itemId: null,
    }),
  beginMockSession: () => entry.beginMockSession(),
  continuePracticeChain: () => entry.continuePracticeChain("old-session-id"),
};

const DOORS = Object.entries(entry)
  .filter(([, v]) => typeof v === "function")
  .map(([name]) => name);

beforeEach(() => {
  PAID = false;
  USER = { id: "u1", email: "learner@example.com", targetProfession: "NURSING" };
  startSession.mockClear();
  getSessionView.mockClear();
});
afterEach(() => vi.clearAllMocks());

describe("the population this gate covers", () => {
  it("is every exported function of entry.ts, and it is not empty", () => {
    expect(DOORS.length).toBeGreaterThan(0);
  });

  it("knows how to call every one of them — a new door cannot slip past untested", () => {
    expect(DOORS.slice().sort()).toEqual(Object.keys(CALL).sort());
  });
});

describe.each(DOORS)("%s", (name) => {
  it("refuses a learner without paid access, and never reaches startSession", async () => {
    PAID = false;
    await expect(CALL[name]()).rejects.toThrow(/REDIRECT:\/pricing/);
    // The check is not just first in the file — no session row was created.
    expect(startSession).not.toHaveBeenCalled();
  });

  it("lets a paying learner through — so the refusal above is not vacuous", async () => {
    // 🔴 THE CONTROL SHARES THE RULE'S CODE. Same function, same arguments, one
    // flag flipped. Without this, a door that was simply broken would look
    // perfectly locked.
    PAID = true;
    await expect(CALL[name]()).rejects.toThrow(/REDIRECT:\/practice\/session\//);
    expect(startSession).toHaveBeenCalledTimes(1);
  });
});

describe("the entitlement check runs BEFORE anything else", () => {
  it("beats the mock's own profession check", async () => {
    // A user with no profession set and no subscription must be sent to /pricing,
    // not to /account. If the profession check ran first, an unpaid learner would
    // set a profession and only then be told they cannot practise — and, worse,
    // the ordering would show the guard is not the first thing in the function.
    PAID = false;
    USER = { id: "u1", email: "learner@example.com", targetProfession: null };
    await expect(entry.beginMockSession()).rejects.toThrow(/REDIRECT:\/pricing/);

    PAID = true;
    await expect(entry.beginMockSession()).rejects.toThrow(/REDIRECT:\/account/);
  });

  it("beats the task-slug check", async () => {
    PAID = false;
    await expect(
      entry.beginPracticeSession({ taskSlug: "not-a-task", professionSlug: "nursing" }),
    ).rejects.toThrow(/REDIRECT:\/pricing/);

    PAID = true;
    await expect(
      entry.beginPracticeSession({ taskSlug: "not-a-task", professionSlug: "nursing" }),
    ).rejects.toThrow(/REDIRECT:\/practice$/);
    expect(startSession).not.toHaveBeenCalled();
  });
});

describe("no page has its own way into a session", () => {
  const SRC = join(process.cwd(), "src");

  function walk(dir: string): string[] {
    const out: string[] = [];
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) out.push(...walk(full));
      else if (/\.tsx?$/.test(full)) out.push(full);
    }
    return out;
  }

  const files = walk(SRC);
  // Population first: if this glob ever matched nothing, the assertion below
  // would pass over an empty set and prove nothing.
  const appFiles = files.filter((f) => relative(SRC, f).replace(/\\/g, "/").startsWith("app/"));

  it("finds the app tree at all", () => {
    expect(appFiles.length).toBeGreaterThan(0);
  });

  it("is imported by exactly one module — entry.ts", () => {
    const importers = files.filter((f) =>
      /\bimport\b[^;]*\bstartSession\b/.test(readFileSync(f, "utf8")),
    );
    const rel = importers.map((f) => relative(SRC, f).replace(/\\/g, "/")).sort();
    expect(rel).toEqual(["lib/oet/entry.ts"]);
  });

  it("is called from no page or route under src/app", () => {
    const offenders = appFiles
      .filter((f) => /\bstartSession\s*\(/.test(readFileSync(f, "utf8")))
      .map((f) => relative(SRC, f).replace(/\\/g, "/"));
    expect(offenders).toEqual([]);
  });
});
