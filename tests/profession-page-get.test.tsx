/**
 * A GET ON /practice/<profession> MUST NOT MUTATE.
 *
 * This page used to call setTargetProfession() while rendering, so that the
 * material shown and the material served could not disagree. The cost was that
 * opening somebody's shared `/practice/dentistry` link silently rewrote YOUR
 * profession, and the next Writing task you were handed came from a bank you
 * never chose. A read that rewrites the reader's account is a defect however
 * tidy it makes the page.
 *
 * Two properties, and they fail for different reasons:
 *
 *   1. NOTHING IS WRITTEN. `prisma.user.update` must not be called at all during
 *      a render. Asserting "the value is unchanged" would not be enough — a write
 *      of the same value is still a write on a GET, and it would start mutating
 *      the moment the values differed.
 *
 *   2. THE DISAGREEMENT IS NAMED. Showing Dentistry's material to a learner whose
 *      profession is Nursing is fine — as long as the page says so. Silence there
 *      is the original problem wearing different clothes: the counts on screen
 *      would describe one bank while a practice set drew from another.
 *
 * Counts still come from the URL's profession, because the URL is what the page
 * is displaying. What a session actually serves is decided by the stored value,
 * which is exactly what the notice warns about.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

type Row = { id: string; taskType: string; profession: string | null; active: boolean; title: string; difficulty: string; topicTag: string | null };

let USER: { id: string; targetProfession: string | null } = { id: "u1", targetProfession: null };
let BANK: Row[] = [];
const userUpdates: unknown[] = [];

function matches(row: Row, where: Record<string, unknown>): boolean {
  for (const [k, v] of Object.entries(where)) {
    if (k === "id" && typeof v === "object" && v !== null && "in" in (v as object)) {
      if (!(v as { in: string[] }).in.includes(row.id)) return false;
      continue;
    }
    if ((row as unknown as Record<string, unknown>)[k] !== v) return false;
  }
  return true;
}

vi.mock("@/lib/auth", () => ({ requireUser: async () => USER }));
vi.mock("@/lib/billing/plans", () => ({ hasPaidAccess: () => true }));
vi.mock("@/lib/prisma", () => ({
  prisma: {
    // 🔴 Every write is recorded. The assertion is that this list stays empty.
    user: {
      update: async (args: unknown) => {
        userUpdates.push(args);
        return USER;
      },
    },
    oetItem: {
      count: async ({ where }: { where: Record<string, unknown> }) => BANK.filter((r) => matches(r, where)).length,
      findMany: async ({ where }: { where: Record<string, unknown> }) => BANK.filter((r) => matches(r, where)),
      findFirst: async ({ where }: { where: Record<string, unknown> }) => BANK.find((r) => matches(r, where)) ?? null,
    },
    oetAttempt: { findMany: async () => [] },
  },
}));
vi.mock("next/navigation", () => ({
  redirect: (to: string) => {
    throw new Error(`REDIRECT:${to}`);
  },
  notFound: () => {
    throw new Error("NOT_FOUND");
  },
}));

const ProfessionPage = (await import("@/app/(app)/practice/[profession]/page")).default;

const item = (id: string, taskType: string, profession: string | null): Row => ({
  id, taskType, profession, active: true, title: `Item ${id}`, difficulty: "CORE", topicTag: null,
});

beforeEach(() => {
  userUpdates.length = 0;
  BANK = [
    item("l1", "LISTENING_PART_A", null),
    item("l2", "LISTENING_PART_A", null),
    item("wd1", "WRITING_LETTER", "DENTISTRY"),
    item("wd2", "WRITING_LETTER", "DENTISTRY"),
    item("wd3", "WRITING_LETTER", "DENTISTRY"),
    item("wn1", "WRITING_LETTER", "NURSING"),
  ];
});
afterEach(() => vi.clearAllMocks());

async function render(slug: string): Promise<string> {
  return renderToStaticMarkup(await ProfessionPage({ params: Promise.resolve({ profession: slug }) }));
}

describe("a GET writes nothing", () => {
  it("does not touch the database when the viewed profession differs from the stored one", async () => {
    USER = { id: "u1", targetProfession: "NURSING" };
    await render("dentistry");
    // Not "unchanged" — NOT CALLED. A write of the same value is still a write.
    expect(userUpdates).toHaveLength(0);
    expect(USER.targetProfession).toBe("NURSING");
  });

  it("does not write when the viewed profession matches the stored one either", async () => {
    USER = { id: "u1", targetProfession: "DENTISTRY" };
    await render("dentistry");
    expect(userUpdates).toHaveLength(0);
    expect(USER.targetProfession).toBe("DENTISTRY");
  });

  it("does not write when no profession is set at all", async () => {
    USER = { id: "u1", targetProfession: null };
    await render("dentistry");
    expect(userUpdates).toHaveLength(0);
    expect(USER.targetProfession).toBeNull();
  });

  it("leaves the stored value alone across repeated views of other professions", async () => {
    USER = { id: "u1", targetProfession: "NURSING" };
    for (const slug of ["dentistry", "pharmacy", "podiatry", "optometry"]) {
      await render(slug);
    }
    expect(userUpdates).toHaveLength(0);
    expect(USER.targetProfession).toBe("NURSING");
  });
});

describe("the disagreement is named on the page", () => {
  it("names both professions and offers a way to switch", async () => {
    USER = { id: "u1", targetProfession: "NURSING" };
    const html = await render("dentistry");
    expect(html).toContain('data-testid="profession-mismatch-notice"');
    expect(html).toContain("You&#x27;re viewing");
    expect(html).toContain("Dentistry"); // what is on screen
    expect(html).toContain("Nursing"); // what a session would actually serve
    expect(html).toContain('href="/practice"'); // the way to change it
  });

  it("says so when no profession is set yet", async () => {
    USER = { id: "u1", targetProfession: null };
    const html = await render("dentistry");
    expect(html).toContain('data-testid="profession-mismatch-notice"');
    expect(html).toContain("haven&#x27;t set a profession yet");
  });

  it("shows NO notice when the viewed profession is the learner's own", async () => {
    // A notice on every page would be noise, and noise gets ignored — which is
    // how the real warning stops being read.
    USER = { id: "u1", targetProfession: "DENTISTRY" };
    const html = await render("dentistry");
    expect(html).not.toContain('data-testid="profession-mismatch-notice"');
  });

  it("still shows that profession's counts, because the URL is what is displayed", async () => {
    USER = { id: "u1", targetProfession: "NURSING" };
    const html = await render("dentistry");
    // 3 Dentistry Writing items in the fixture, not the 1 Nursing one.
    expect(html).toContain("3 exercises");
    expect(html).toContain("Dentistry");
  });
});
