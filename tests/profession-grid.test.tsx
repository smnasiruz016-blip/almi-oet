/**
 * THE PROFESSION GRID — what renders, and what a tile does.
 *
 * /practice is now a profession chooser, because the old page opened on eight
 * task cards, never mentioned profession, and gave a learner no way to tell that
 * fifteen or more exercises sat behind each card.
 *
 * Two properties are asserted, and they fail for different reasons:
 *
 *   1. THE GRID RENDERS EXACTLY THE PROFESSIONS THE DATA HOLDS. Not "at least
 *      twelve", not "some tiles" — exactly the set, and no extras. A grid that
 *      quietly drops one is a profession whose learners cannot reach their own
 *      Writing bank.
 *
 *   2. A TILE SETS targetProfession. That field decides which Writing and
 *      Speaking bank `poolWhere()` filters to. A tile that renders beautifully
 *      and writes nothing leaves the learner on someone else's material.
 *
 * ── THREE INDEPENDENT LISTS, ON PURPOSE ─────────────────────────────────────
 *
 * The expectation below is HAND-TYPED from the owner's own list of the twelve OET
 * professions. It is never derived from PROFESSION_LIST or from the schema. The
 * test then requires all three to agree:
 *
 *   hand-typed here   ←→   PROFESSION_LIST (src/lib/oet/professions.ts)
 *   hand-typed here   ←→   OetProfession   (the Prisma enum, i.e. the database)
 *   hand-typed here   ←→   the rendered HTML
 *
 * Comparing only the page to the registry would pass happily when both are wrong
 * in the same way — which is exactly what happens when one is copied from the
 * other.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { $Enums } from "@prisma/client";

// The twelve OET professions, typed out by hand. Sorted, so the comparison is
// about membership rather than about the order a page happens to render in.
const HAND_TYPED = [
  "DENTISTRY",
  "DIETETICS",
  "MEDICINE",
  "NURSING",
  "OCCUPATIONAL_THERAPY",
  "OPTOMETRY",
  "PHARMACY",
  "PHYSIOTHERAPY",
  "PODIATRY",
  "RADIOGRAPHY",
  "SPEECH_PATHOLOGY",
  "VETERINARY_SCIENCE",
];

let USER: { id: string; targetProfession: string | null } = {
  id: "u1",
  targetProfession: null,
};
const updates: { where: unknown; data: Record<string, unknown> }[] = [];

vi.mock("@/lib/auth", () => ({ requireUser: async () => USER }));
vi.mock("@/lib/billing/plans", () => ({ hasPaidAccess: () => true }));
vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      update: async (args: { where: unknown; data: Record<string, unknown> }) => {
        updates.push(args);
        USER = { ...USER, targetProfession: args.data.targetProfession as string | null };
        return USER;
      },
    },
  },
}));
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

const { PROFESSION_LIST } = await import("@/lib/oet/professions");
const { parseProfession, setTargetProfession } = await import("@/lib/oet/set-profession");
const PracticePage = (await import("@/app/(app)/practice/page")).default;

beforeEach(() => {
  USER = { id: "u1", targetProfession: null };
  updates.length = 0;
});
afterEach(() => vi.clearAllMocks());

/** Render the async server component and return its HTML. The page reads
 *  searchParams, so the caller says what the URL carried — passing nothing is
 *  a plain visit to /practice. */
async function renderPractice(searchParams: { mockempty?: string } = {}): Promise<string> {
  return renderToStaticMarkup(await PracticePage({ searchParams: Promise.resolve(searchParams) }));
}

/** Every profession the rendered grid actually offers, read out of the markup. */
function professionsInMarkup(html: string): string[] {
  return [...html.matchAll(/data-profession="([A-Z_]+)"/g)].map((m) => m[1]).sort();
}

describe("the three lists agree", () => {
  it("the registry holds exactly the twelve hand-typed professions", () => {
    expect(PROFESSION_LIST.map((p) => p.profession).sort()).toEqual(HAND_TYPED);
  });

  it("the database enum holds exactly the twelve hand-typed professions", () => {
    // If a migration adds a thirteenth, this fails before anyone notices the tile
    // is missing from the page.
    expect(Object.keys($Enums.OetProfession).sort()).toEqual(HAND_TYPED);
  });
});

describe("the rendered grid", () => {
  it("renders exactly the professions the data holds — all twelve, no extras", async () => {
    const html = await renderPractice();
    const rendered = professionsInMarkup(html);
    expect(rendered).toHaveLength(12);
    expect(rendered).toEqual(HAND_TYPED);
  });

  it("shows each profession's own label, so the tiles are readable and not just values", async () => {
    const html = await renderPractice();
    for (const p of PROFESSION_LIST) {
      expect(html).toContain(p.label);
    }
  });

  it("says plainly that Listening and Reading are common to every profession", async () => {
    // Organising the product BY profession implies twelve of everything. It is
    // not true of the exam and not true of our bank, so the page has to say so.
    const html = await renderPractice();
    expect(html).toContain("Listening and Reading are the same for");
  });

  it("marks the learner's own profession and offers a way straight through", async () => {
    USER = { id: "u1", targetProfession: "NURSING" };
    const html = await renderPractice();
    expect(html).toContain('aria-current="true"');
    // One click through to their material, rather than choosing again every visit.
    expect(html).toContain('href="/practice/nursing"');
    // …and still every other tile, so the choice can be changed.
    expect(professionsInMarkup(html)).toHaveLength(12);
  });
});

describe("a tile sets targetProfession", () => {
  it("carries a value the parser accepts, for every tile in the grid", async () => {
    // The tile's submitted value has to survive parseProfession, which is what
    // stands between the form and the database. A tile posting a slug where the
    // writer expects an enum member would store null and silently empty the
    // learner's Writing bank.
    const html = await renderPractice();
    for (const value of professionsInMarkup(html)) {
      expect(parseProfession(value)).toBe(value);
    }
  });

  it("writes the profession the tile carries", async () => {
    const html = await renderPractice();
    const first = professionsInMarkup(html)[0];
    const stored = await setTargetProfession("u1", parseProfession(first));
    expect(stored).toBe(first);
    expect(updates).toHaveLength(1);
    expect(updates[0].data.targetProfession).toBe(first);
    expect(USER.targetProfession).toBe(first);
  });

  it("stores every one of the twelve, not just the first", async () => {
    for (const value of HAND_TYPED) {
      updates.length = 0;
      await setTargetProfession("u1", parseProfession(value));
      expect(updates[0]?.data.targetProfession).toBe(value);
    }
  });

  it("refuses a value that is not a profession rather than storing it", async () => {
    expect(parseProfession("nursing")).toBeNull(); // the slug, not the enum member
    expect(parseProfession("ASTRONAUT")).toBeNull();
    expect(parseProfession(undefined)).toBeNull();
  });
});

/**
 * 🔴 GAP-042 — ?mockempty=1 MUST RENDER SOMETHING.
 *
 * beginMockSession() redirects here with that flag when no complete form exists,
 * and until 9 September 2026 `mockempty` appeared in exactly ONE place in the
 * source: the line that set it. Nothing read it, so a learner who pressed Start
 * full mock landed back on this page and saw nothing at all — which is what a
 * dead button looks like, and is what GAP-041 made it for five days.
 *
 * Asserted BOTH WAYS. A page that always rendered the notice would tell every
 * visitor a mock is unavailable when it is not, so the control matters as much as
 * the case. tests/e2e/mockempty.spec.ts walks the same two URLs in a browser.
 */
describe("?mockempty=1 reaches the learner", () => {
  it("renders a notice when the flag is set", async () => {
    const html = await renderPractice({ mockempty: "1" });
    expect(html).toContain('data-testid="mockempty-notice"');
  });

  it("renders NOTHING of the kind on a plain visit", async () => {
    const html = await renderPractice();
    expect(html).not.toContain('data-testid="mockempty-notice"');
    // and the page itself still works, so the control is not passing by accident
    expect(html).toContain('data-testid="profession-grid"');
  });

  it("blames US, not her account or her payment, and sends her nowhere useless", async () => {
    // The wording may change; these two properties may not. A learner reading this
    // at eleven at night must not think she has lost what she paid for, and must
    // not be sent to support, who cannot conjure a complete form.
    const text = (await renderPractice({ mockempty: "1" }))
      .replace(/<[^>]+>/g, " ")
      .replace(/&#x27;|&apos;/g, "'")
      .toLowerCase();
    expect(text).toContain("problem on our side");
    expect(text).toContain("not with your account or your payment");
    for (const dead of ["support", "contact us", "help centre", "help center", "ticket"]) {
      expect(text, `the notice sends the learner to ${dead}`).not.toContain(dead);
    }
  });
});
