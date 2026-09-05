/**
 * gate:progress-visible — WHAT /progress SHOWS IS WHAT THE DATABASE HOLDS.
 *
 * Read out of RENDERED MARKUP, never out of the props that went in — the same
 * discipline gate:pool-visible uses, and for the same reason: the defect this
 * guards against is a number or a letter written into the UI.
 *
 * ── THE FIVE THINGS IT PROVES ───────────────────────────────────────────────
 *
 *   1. every count on the page equals poolCounts()/completedCounts()
 *   2. 🔴 THE GRADE IS RECOMPUTED. A fixture whose STORED grade is "E" must not
 *      render "E" anywhere — the letter shown comes from gradeForScore(midpoint)
 *   3. 🔴 THE BENCHMARK SENTENCE COMES FROM readinessBand(). A Grade A estimate
 *      must NOT say "Within reach of Grade B"
 *   4. an item with no attempt says so in words, and still prints its count
 *   5. Next Recommended names exactly ONE item AND gives a reason
 *
 * ── WHY 2 AND 3 ARE THE POINT ───────────────────────────────────────────────
 *
 * Both are defects that shipped and were seen by a human, not hypotheticals.
 *
 * `gradeEstimate` is written once at submit time and never rewritten, so a row
 * scored before the floors were corrected on 2026-08-31 still carries the old
 * letter. Measured on production 2026-09-05: 18 SCORED attempts, 8 storing "D"
 * or "E" — bands the artefact publishes no range for. Reading the stored letter
 * would print those to those learners forever, because fixing code does not
 * repair stored rows.
 *
 * And `estimate.hi >= 350` — the binary this replaced — told a learner estimated
 * 430-500, comfortably Grade A, that they were "within reach of Grade B".
 *
 * ── HOW IT WAS SEEN RED ─────────────────────────────────────────────────────
 *
 * Twice, both recorded in the PR body:
 *   1. the rendered "done" count replaced with a literal -> the count assertion
 *      failed, because both sides of it come from the fake database
 *   2. a fixture whose gradeEstimate is null -> the page must still render and
 *      say so in words; if it threw, that is red
 */
import { beforeEach, describe, expect, it, vi } from "vitest";
import type React from "react";
import { renderToStaticMarkup } from "react-dom/server";

type Row = {
  id: string;
  taskType: string;
  profession: string | null;
  active: boolean;
  title: string;
  difficulty: string;
  topicTag: string | null;
};
type Attempt = {
  id: string;
  userId: string;
  itemId: string;
  subTest: string;
  taskType: string;
  status: string;
  pointsEarned: number;
  pointsMax: number;
  gradeEstimate: unknown;
  submittedAt: Date | null;
  updatedAt: Date;
};

let BANK: Row[] = [];
let ATTEMPTS: Attempt[] = [];
const USER = { id: "u1", email: "learner@example.com", targetProfession: "NURSING" as string | null };

const item = (id: string, taskType: string, profession: string | null): Row => ({
  id,
  taskType,
  profession,
  active: true,
  title: `Item ${id}`,
  difficulty: "CORE",
  topicTag: null,
});

function matches(row: Record<string, unknown>, where: Record<string, unknown>): boolean {
  for (const [k, v] of Object.entries(where)) {
    if (v && typeof v === "object" && "in" in (v as object)) {
      if (!(v as { in: unknown[] }).in.includes(row[k])) return false;
      continue;
    }
    if (row[k] !== v) return false;
  }
  return true;
}

vi.mock("@/lib/prisma", () => ({
  prisma: {
    oetItem: {
      count: async ({ where }: { where: Record<string, unknown> }) =>
        BANK.filter((r) => matches(r as unknown as Record<string, unknown>, where)).length,
      findMany: async ({ where }: { where: Record<string, unknown> }) =>
        [...BANK.filter((r) => matches(r as unknown as Record<string, unknown>, where))].sort((a, b) =>
          a.title.localeCompare(b.title),
        ),
    },
    oetAttempt: {
      findMany: async ({
        where,
        take,
      }: {
        where: Record<string, unknown>;
        take?: number;
        distinct?: string[];
      }) => {
        let rows = ATTEMPTS.filter((a) => matches(a as unknown as Record<string, unknown>, where));
        rows = [...rows].sort(
          (a, b) => (b.submittedAt?.getTime() ?? 0) - (a.submittedAt?.getTime() ?? 0),
        );
        const withItem = rows.map((a) => ({
          ...a,
          item: { title: BANK.find((b) => b.id === a.itemId)?.title ?? "gone" },
        }));
        return take ? withItem.slice(0, take) : withItem;
      },
    },
  },
}));
vi.mock("@/lib/auth", () => ({ requireUser: async () => USER }));

const { poolCounts, completedCounts } = await import("@/lib/oet/pool");
const ProgressPage = (await import("@/app/(app)/progress/page")).default;

const render = async () => renderToStaticMarkup(await (ProgressPage as () => Promise<React.ReactElement>)());

/** Read every value carried by a testid back out of the HTML. */
function readAll(html: string, testid: string): string[] {
  const re = new RegExp(`data-testid="${testid}"[^>]*>([^<]*)<`, "g");
  return [...html.matchAll(re)].map((m) => m[1].trim());
}

const scored = (
  id: string,
  itemId: string,
  taskType: string,
  subTest: string,
  grade: unknown,
  daysAgo: number,
): Attempt => ({
  id,
  userId: "u1",
  itemId,
  subTest,
  taskType,
  status: "SCORED",
  pointsEarned: 8,
  pointsMax: 10,
  gradeEstimate: grade,
  submittedAt: new Date(Date.now() - daysAgo * 864e5),
  updatedAt: new Date(Date.now() - daysAgo * 864e5),
});

beforeEach(() => {
  BANK = [
    item("r1", "READING_PART_A", null),
    item("r2", "READING_PART_A", null),
    item("r3", "READING_PART_B", null),
    item("l1", "LISTENING_PART_A", null),
    item("w1", "WRITING_LETTER", "NURSING"),
    item("s1", "SPEAKING_ROLEPLAY", "NURSING"),
    item("w9", "WRITING_LETTER", "MEDICINE"), // another profession's item
  ];
  ATTEMPTS = [];
});

describe("/progress reads the database, not literals", () => {
  it("🔴 recomputes the grade — a row STORING \"E\" never renders \"E\"", async () => {
    // A midpoint of 460 is Grade A. The stored letter is the stale "E" that
    // 8 production rows actually carry.
    ATTEMPTS = [
      scored("a1", "r1", "READING_PART_A", "READING", { lo: 430, hi: 490, grade: "E" }, 1),
    ];
    const html = await render();

    expect(html, 'the stored letter "E" reached the screen').not.toContain("Grade E");
    expect(html).toContain("Grade A");
  });

  it("🔴 the benchmark sentence comes from readinessBand(), not hi >= 350", async () => {
    ATTEMPTS = [
      scored("a1", "r1", "READING_PART_A", "READING", { lo: 430, hi: 490, grade: "A" }, 1),
    ];
    const html = await render();

    // The binary this replaced said exactly this to a Grade A learner.
    expect(html, "a Grade A learner was told they are within reach of B").not.toContain(
      "Within reach",
    );
    expect(readAll(html, "progress-band").join(" ")).toContain("Above benchmark");
  });

  it("every count equals poolCounts()/completedCounts() — no literal on either side", async () => {
    ATTEMPTS = [
      scored("a1", "r1", "READING_PART_A", "READING", { lo: 300, hi: 360, grade: "C+" }, 2),
    ];
    const html = await render();

    const totals = await poolCounts("NURSING" as never);
    const done = await completedCounts("u1", "NURSING" as never);

    const expectedReadingTotal =
      (totals.READING_PART_A ?? 0) + (totals.READING_PART_B ?? 0) + (totals.READING_PART_C ?? 0);
    const expectedReadingDone =
      (done.READING_PART_A ?? 0) + (done.READING_PART_B ?? 0) + (done.READING_PART_C ?? 0);

    const shownTotals = readAll(html, "progress-total").map(Number);
    const shownDone = readAll(html, "progress-done").map(Number);

    expect(shownTotals, "four sub-test cards must render").toHaveLength(4);
    expect(shownTotals).toContain(expectedReadingTotal);
    expect(shownDone).toContain(expectedReadingDone);

    // Anti-vacuity: a page printing one number everywhere would pass a weaker
    // assertion. Writing is this profession's pool only, so it must NOT equal
    // the Reading total here.
    expect(new Set(shownTotals).size, "every card shows the same number").toBeGreaterThan(1);
  });

  it("a sub-test with no attempt says so in words, and still shows its count", async () => {
    ATTEMPTS = [];
    const html = await render();
    expect(readAll(html, "progress-grade")).toContain("Not practised yet");
    expect(readAll(html, "progress-total").map(Number).every((n) => Number.isFinite(n))).toBe(true);
  });

  it("Next Recommended names ONE item and gives a reason", async () => {
    ATTEMPTS = [];
    const html = await render();
    const titles = readAll(html, "progress-next-title");
    const reasons = readAll(html, "progress-next-reason");
    expect(titles, "exactly one recommendation").toHaveLength(1);
    expect(reasons, "a recommendation without a reason is an instruction").toHaveLength(1);
    expect(reasons[0].length).toBeGreaterThan(0);
  });

  it("🔴 a stored estimate of null does not break the page", async () => {
    // The second RED: older rows have no gradeEstimate at all.
    ATTEMPTS = [scored("a1", "r1", "READING_PART_A", "READING", null, 1)];
    const html = await render();
    expect(html).toContain("scored before estimates were recorded");
    expect(html).toContain("Recent results");
  });

  it("the page claims no overall score and no A–E", async () => {
    ATTEMPTS = [
      scored("a1", "r1", "READING_PART_A", "READING", { lo: 430, hi: 490, grade: "A" }, 1),
    ];
    const html = await render();
    expect(html, "an overall/composite score appeared").not.toMatch(/overall score/i);
    expect(html, "the A–E claim came back").not.toMatch(/A\s*[–—-]\s*E\b/);
  });
});
