/**
 * gate:admin-learner-agree — ONE ATTEMPT, ONE ANSWER.
 *
 * Section G puts a learner's progress in front of the owner. The danger is not
 * that admin shows nothing; it is that admin shows something DIFFERENT.
 *
 * ── 🔴 THE DISAGREEMENT THIS RULES OUT ─────────────────────────────────────
 *
 * `gradeEstimate.grade` is written at submit time and never rewritten, so rows
 * scored before the floors were corrected on 2026-08-31 still carry the old
 * letter. Measured on production 2026-09-05: 18 SCORED attempts, and 8 of them
 * store "D" or "E" — bands the artefact publishes no range for.
 *
 * An admin page that read the stored letter would show the owner "E" while the
 * learner's own page said "below the published grade bands", for the same
 * attempt. Both would look right in isolation. That is exactly the shape of
 * defect that costs a support conversation nobody can win.
 *
 * ── HOW IT IS PROVED ────────────────────────────────────────────────────────
 *
 * Both pages are rendered against the SAME fixture, in the same test, and their
 * rendered grade strings are compared to each other — not to a literal. There is
 * no expected value written down here: if the two ever disagree, whichever is
 * wrong, this fails.
 *
 * This is a stronger check than asserting "admin shows Grade A", because that
 * would still pass if the learner page started showing something else.
 */
import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import type React from "react";

type Row = { id: string; taskType: string; profession: string | null; active: boolean; title: string; difficulty: string; topicTag: string | null };
type Attempt = {
  id: string; userId: string; itemId: string; subTest: string; taskType: string; status: string;
  pointsEarned: number; pointsMax: number; gradeEstimate: unknown; submittedAt: Date | null; updatedAt: Date;
};

let BANK: Row[] = [];
let ATTEMPTS: Attempt[] = [];
const LEARNER = { id: "u1", email: "learner@example.com", name: "A Learner", targetProfession: "NURSING" as string | null };

const item = (id: string, taskType: string, profession: string | null): Row => ({
  id, taskType, profession, active: true, title: `Item ${id}`, difficulty: "CORE", topicTag: null,
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
      findMany: async ({ where, take }: { where: Record<string, unknown>; take?: number }) => {
        const rows = ATTEMPTS.filter((a) => matches(a as unknown as Record<string, unknown>, where)).sort(
          (a, b) => (b.submittedAt?.getTime() ?? 0) - (a.submittedAt?.getTime() ?? 0),
        );
        const withItem = rows.map((a) => ({ ...a, item: { title: BANK.find((b) => b.id === a.itemId)?.title ?? "gone" } }));
        return take ? withItem.slice(0, take) : withItem;
      },
    },
    // The admin page looks the learner up; the learner page does not.
    user: { findUnique: async () => LEARNER },
  },
}));
vi.mock("@/lib/auth", () => ({ requireUser: async () => LEARNER }));
vi.mock("next/navigation", () => ({ notFound: () => { throw new Error("NOT_FOUND"); } }));

const LearnerPage = (await import("@/app/(app)/progress/page")).default;
const AdminPage = (await import("@/app/admin/accounts/[userId]/page")).default;

const renderLearner = async () =>
  renderToStaticMarkup(await (LearnerPage as () => Promise<React.ReactElement>)());
const renderAdmin = async () =>
  renderToStaticMarkup(
    await (AdminPage as (p: { params: Promise<{ userId: string }> }) => Promise<React.ReactElement>)({
      params: Promise.resolve({ userId: "u1" }),
    }),
  );

/** Every value carried by a testid, read back out of the HTML. */
const readAll = (html: string, testid: string): string[] =>
  [...html.matchAll(new RegExp(`data-testid="${testid}"[^>]*>([^<]*)<`, "g"))].map((m) => m[1].trim());

const scored = (id: string, itemId: string, taskType: string, subTest: string, grade: unknown): Attempt => ({
  id, userId: "u1", itemId, subTest, taskType, status: "SCORED",
  pointsEarned: 8, pointsMax: 10, gradeEstimate: grade,
  submittedAt: new Date(Date.now() - 864e5), updatedAt: new Date(Date.now() - 864e5),
});

beforeEach(() => {
  BANK = [
    item("r1", "READING_PART_A", null),
    item("r2", "READING_PART_B", null),
    item("l1", "LISTENING_PART_A", null),
    item("w1", "WRITING_LETTER", "NURSING"),
    item("s1", "SPEAKING_ROLEPLAY", "NURSING"),
  ];
  ATTEMPTS = [];
});

describe("admin and the learner cannot give two answers about one attempt", () => {
  it("🔴 a stored grade of \"E\" is shown by NEITHER page", async () => {
    // Midpoint 460 is Grade A. "E" is the stale letter 8 production rows carry.
    ATTEMPTS = [scored("a1", "r1", "READING_PART_A", "READING", { lo: 430, hi: 490, grade: "E" })];
    const admin = await renderAdmin();
    const learner = await renderLearner();
    expect(admin, "admin printed the stored letter").not.toContain("Grade E");
    expect(learner, "the learner page printed the stored letter").not.toContain("Grade E");
    expect(admin).toContain("Grade A");
  });

  it("🔴 the grade admin shows EQUALS the grade the learner sees — no literal on either side", async () => {
    ATTEMPTS = [scored("a1", "r1", "READING_PART_A", "READING", { lo: 430, hi: 490, grade: "E" })];
    const adminGrades = readAll(await renderAdmin(), "admin-progress-grade");
    const learnerGrades = readAll(await renderLearner(), "progress-grade");
    expect(adminGrades, "admin rendered no grade at all").not.toHaveLength(0);
    // Both sides come from the rendered pages. Whichever drifts, this fails.
    expect(adminGrades).toEqual(learnerGrades);
  });

  it("the counts agree too", async () => {
    ATTEMPTS = [scored("a1", "r1", "READING_PART_A", "READING", { lo: 300, hi: 360, grade: "C+" })];
    const admin = await renderAdmin();
    const learner = await renderLearner();
    expect(readAll(admin, "admin-progress-total")).toEqual(readAll(learner, "progress-total"));
    expect(readAll(admin, "admin-progress-done")).toEqual(readAll(learner, "progress-done"));
  });

  it("a below-band score reads the same on both", async () => {
    // Midpoint 60 — beneath every published band, so both must print the words.
    ATTEMPTS = [scored("a1", "r1", "READING_PART_A", "READING", { lo: 0, hi: 120, grade: "E" })];
    const admin = await renderAdmin();
    const learner = await renderLearner();
    expect(admin).toContain("below the published grade bands");
    expect(learner).toContain("below the published grade bands");
    expect(admin).not.toContain("Grade E");
  });

  it("a learner with no attempts renders on both, and says so", async () => {
    ATTEMPTS = [];
    const admin = await renderAdmin();
    expect(admin).toContain("No scored attempts yet");
    expect(readAll(admin, "admin-progress-grade")).toContain("Not practised yet");
  });
});
