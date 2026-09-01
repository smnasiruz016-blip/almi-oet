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

/** Render the async server component and return its HTML. */
async function renderPractice(): Promise<string> {
  return renderToStaticMarkup(await PracticePage());
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
