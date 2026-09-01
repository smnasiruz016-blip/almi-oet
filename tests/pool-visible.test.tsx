/**
 * gate:pool-visible — THE NUMBER ON THE SCREEN IS THE NUMBER IN THE POOL.
 *
 * Three surfaces have to agree, and all three are read here out of RENDERED
 * MARKUP rather than out of the props that went in:
 *
 *   1. the count on each task card at /practice/<profession>
 *   2. the "N exercises available" sentence on the task page
 *   3. the length of the browsable list under it
 *
 * and all three must equal poolCounts() for that task AND that profession.
 *
 * ── 🔴 NO LITERAL INTEGER APPEARS IN ANY ASSERTION ──────────────────────────
 *
 * Both sides of every comparison come from the database. The expected value is
 * `poolCounts(profession)[taskType]`; the actual value is parsed back out of the
 * HTML. Writing a number into either side would defeat the point, because the
 * defect this guards against is exactly a number written into the UI:
 *
 *     🔴 A card must show 15 for Writing/Speaking, never 180.
 *
 * The fixture below therefore gives Writing DIFFERENT counts per profession, and
 * the assertions check that a nurse's card shows the nurse's number — never the
 * bank total across professions.
 *
 * ── HOW IT WAS SEEN RED ─────────────────────────────────────────────────────
 *
 * `{total}` in the task card of src/app/(app)/practice/[profession]/page.tsx was
 * replaced with the literal `15`. Both the per-task-type comparison and the
 * "the numbers are not all the same" anti-vacuity check failed. Restored
 * afterwards; the recorded output is in the PR body.
 *
 * ── WHY A FAKE PRISMA ───────────────────────────────────────────────────────
 *
 * CI has no database by design (see .github/workflows/ci.yml). The fake here
 * evaluates the `where` clause it is handed against an in-memory bank, so
 * poolWhere() is exercised for real: if the filter stopped excluding inactive
 * rows or stopped filtering by profession, these numbers would move. It does NOT
 * prove Postgres reads the clause the same way. That still needs Neon.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
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

let BANK: Row[] = [];
let USER = { id: "u1", email: "learner@example.com", targetProfession: "NURSING" as string | null };

const item = (id: string, taskType: string, profession: string | null, active = true): Row => ({
  id,
  taskType,
  profession,
  active,
  // Titles are deliberately NOT in insertion order, so an ordering bug between
  // the list and the chain would show up as a different first row.
  title: `Item ${id}`,
  difficulty: "CORE",
  topicTag: null,
});

/** Evaluate the subset of Prisma `where` this code path actually uses. */
function matches(row: Row, where: Record<string, unknown>): boolean {
  for (const [k, v] of Object.entries(where)) {
    if (k === "id" && typeof v === "object" && v !== null && "in" in (v as object)) {
      if (!(v as { in: string[] }).in.includes(row.id)) return false;
      continue;
    }
    const actual = (row as unknown as Record<string, unknown>)[k];
    if (actual !== v) return false;
  }
  return true;
}

function sortBy<T>(rows: T[], orderBy: { title?: "asc" | "desc" } | undefined): T[] {
  if (!orderBy?.title) return rows;
  const dir = orderBy.title === "desc" ? -1 : 1;
  return [...rows].sort(
    (a, b) =>
      dir *
      String((a as unknown as Row).title).localeCompare(String((b as unknown as Row).title)),
  );
}

vi.mock("@/lib/prisma", () => ({
  prisma: {
    oetItem: {
      count: async ({ where }: { where: Record<string, unknown> }) =>
        BANK.filter((r) => matches(r, where)).length,
      findMany: async ({
        where,
        orderBy,
      }: {
        where: Record<string, unknown>;
        orderBy?: { title?: "asc" | "desc" };
      }) => sortBy(BANK.filter((r) => matches(r, where)), orderBy),
      findFirst: async ({ where }: { where: Record<string, unknown> }) =>
        BANK.find((r) => matches(r, where)) ?? null,
    },
    oetAttempt: {
      findMany: async () => [],
    },
    user: { update: async () => USER },
  },
}));

vi.mock("@/lib/auth", () => ({ requireUser: async () => USER }));

let PAID = true;
vi.mock("@/lib/billing/plans", () => ({ hasPaidAccess: () => PAID }));

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

const { poolCounts, listPool } = await import("@/lib/oet/pool");
const { OET_TASKS } = await import("@/lib/oet/registry");
const { PROFESSION_LIST } = await import("@/lib/oet/professions");
const ProfessionPage = (await import("@/app/(app)/practice/[profession]/page")).default;
const TaskPage = (await import("@/app/(app)/practice/[profession]/[task]/page")).default;

const LIVE = Object.values(OET_TASKS).filter((t) => t.live);
const NURSE = PROFESSION_LIST.find((p) => p.profession === "NURSING")!;
const MEDIC = PROFESSION_LIST.find((p) => p.profession === "MEDICINE")!;

/**
 * The fixture. Sizes differ per task type ON PURPOSE — a single hard-coded
 * number in the UI could otherwise satisfy every assertion at once. Writing and
 * Speaking differ per profession, which is the 180-vs-15 rule in miniature.
 */
function seedBank() {
  const rows: Row[] = [];
  const shared: [string, number][] = [
    ["LISTENING_PART_A", 6],
    ["LISTENING_PART_B", 9],
    ["LISTENING_PART_C", 4],
    ["READING_PART_A", 7],
    ["READING_PART_B", 5],
    ["READING_PART_C", 3],
  ];
  for (const [taskType, n] of shared) {
    for (let i = 1; i <= n; i++) rows.push(item(`${taskType}-${i}`, taskType, null));
    // One deactivated row per shared task: it must never reach a screen.
    rows.push(item(`${taskType}-off`, taskType, null, false));
  }
  const perProfession: [string, string, number][] = [
    ["WRITING_LETTER", "NURSING", 8],
    ["WRITING_LETTER", "MEDICINE", 2],
    ["SPEAKING_ROLEPLAY", "NURSING", 11],
    ["SPEAKING_ROLEPLAY", "MEDICINE", 3],
  ];
  for (const [taskType, profession, n] of perProfession) {
    for (let i = 1; i <= n; i++) {
      rows.push(item(`${taskType}-${profession}-${i}`, taskType, profession));
    }
  }
  return rows;
}

beforeEach(() => {
  BANK = seedBank();
  USER = { id: "u1", email: "learner@example.com", targetProfession: "NURSING" };
  PAID = true;
});
afterEach(() => vi.clearAllMocks());

async function renderProfession(slug: string): Promise<string> {
  return renderToStaticMarkup(await ProfessionPage({ params: Promise.resolve({ profession: slug }) }));
}

async function renderTask(professionSlug: string, taskSlug: string): Promise<string> {
  return renderToStaticMarkup(
    await TaskPage({
      params: Promise.resolve({ profession: professionSlug, task: taskSlug }),
      searchParams: Promise.resolve({}),
    }),
  );
}

/** Read a card's exercise count back OUT of the rendered markup. */
function cardCount(html: string, taskType: string): number {
  const re = new RegExp(
    `data-testid="task-card-count"[^>]*data-task-type="${taskType}"[^>]*>([^<]*)`,
  );
  const m = re.exec(html);
  if (!m) throw new Error(`no rendered card count for ${taskType}`);
  const n = /(\d+)/.exec(m[1]);
  if (!n) throw new Error(`card for ${taskType} printed no number: ${JSON.stringify(m[1])}`);
  return Number(n[1]);
}

/** The "N exercises available" sentence on the task page. */
function sentenceCount(html: string): number {
  const m = /data-testid="pool-count-sentence"[^>]*>([\s\S]*?)<\/span>/.exec(html);
  if (!m) throw new Error("no rendered pool-count sentence");
  const n = /(\d+)/.exec(m[1].replace(/<[^>]*>/g, ""));
  if (!n) throw new Error("the pool-count sentence printed no number");
  return Number(n[1]);
}

/** How many rows the browsable list actually rendered. */
function listedRows(html: string): number {
  return [...html.matchAll(/data-testid="exercise-row"/g)].length;
}

describe("the population this gate covers", () => {
  // A gate that loops over an empty list passes vacuously.
  it("is every live task type, and it is not empty", () => {
    expect(LIVE.length).toBeGreaterThan(0);
  });

  it("the fixture gives the tasks DIFFERENT counts, so one literal cannot satisfy them all", async () => {
    const counts = await poolCounts("NURSING");
    const values = LIVE.map((t) => counts[t.taskType]);
    for (const v of values) expect(v).toBeGreaterThan(0);
    expect(new Set(values).size).toBeGreaterThan(1);
  });
});

describe("the count on the /practice card", () => {
  it("equals poolCounts() for that task AND that profession, on every live card", async () => {
    const counts = await poolCounts(NURSE.profession);
    const html = await renderProfession(NURSE.slug);
    for (const t of LIVE) {
      expect(cardCount(html, t.taskType)).toBe(counts[t.taskType]);
    }
  });

  it("shows a nurse THEIR OWN Writing and Speaking numbers, not the bank total", async () => {
    // 🔴 The 180-vs-15 rule. The bank holds Writing for two professions here; a
    // nurse's card must show the nurse's share, and a doctor's the doctor's.
    const nurseHtml = await renderProfession(NURSE.slug);
    const medicHtml = await renderProfession(MEDIC.slug);
    const nurseCounts = await poolCounts(NURSE.profession);
    const medicCounts = await poolCounts(MEDIC.profession);
    const bankWriting = BANK.filter((r) => r.taskType === "WRITING_LETTER" && r.active).length;

    expect(cardCount(nurseHtml, "WRITING_LETTER")).toBe(nurseCounts.WRITING_LETTER);
    expect(cardCount(medicHtml, "WRITING_LETTER")).toBe(medicCounts.WRITING_LETTER);
    expect(cardCount(nurseHtml, "SPEAKING_ROLEPLAY")).toBe(nurseCounts.SPEAKING_ROLEPLAY);
    // The two professions genuinely differ, and neither is the bank total.
    expect(cardCount(nurseHtml, "WRITING_LETTER")).not.toBe(cardCount(medicHtml, "WRITING_LETTER"));
    expect(cardCount(nurseHtml, "WRITING_LETTER")).toBeLessThan(bankWriting);
  });

  it("MOVES when an item is deactivated", async () => {
    const before = cardCount(await renderProfession(NURSE.slug), "LISTENING_PART_A");
    BANK.find((r) => r.taskType === "LISTENING_PART_A" && r.active)!.active = false;
    const after = cardCount(await renderProfession(NURSE.slug), "LISTENING_PART_A");
    expect(after).toBe(before - 1);
    expect(after).toBe((await poolCounts(NURSE.profession)).LISTENING_PART_A);
  });
});

describe("the task page", () => {
  it("its sentence, its list length and the card all equal poolCounts()", async () => {
    const counts = await poolCounts(NURSE.profession);
    const cardHtml = await renderProfession(NURSE.slug);
    for (const t of LIVE) {
      const html = await renderTask(NURSE.slug, t.slug);
      const expected = counts[t.taskType];
      expect(sentenceCount(html)).toBe(expected);
      expect(listedRows(html)).toBe(expected);
      expect(cardCount(cardHtml, t.taskType)).toBe(expected);
      // And the list the page renders is the list the chain walks.
      const pool = await listPool(
        t.taskType,
        t.subTest === "WRITING" || t.subTest === "SPEAKING" ? NURSE.profession : null,
        USER.id,
      );
      expect(listedRows(html)).toBe(pool.length);
    }
  });

  it("shows every title in the list, in the order listPool returns them", async () => {
    const html = await renderTask(NURSE.slug, OET_TASKS.LISTENING_PART_A.slug);
    const pool = await listPool("LISTENING_PART_A", null, USER.id);
    for (const row of pool) expect(html).toContain(row.title);
    // First row first: the numbering on this page is what "Exercise 1 of N" means.
    const firstAt = html.indexOf(pool[0].title);
    const secondAt = html.indexOf(pool[1].title);
    expect(firstAt).toBeGreaterThan(-1);
    expect(firstAt).toBeLessThan(secondAt);
  });
});

describe("a learner without a subscription", () => {
  // D3: the list used to be `needsPaid ? [] : await listPool(...)`, so a locked
  // learner saw a page with nothing on it under a card inviting them to browse.
  it("still sees the whole numbered list, and the same count", async () => {
    PAID = false;
    const counts = await poolCounts(NURSE.profession);
    const html = await renderTask(NURSE.slug, OET_TASKS.LISTENING_PART_A.slug);
    expect(listedRows(html)).toBe(counts.LISTENING_PART_A);
    expect(sentenceCount(html)).toBe(counts.LISTENING_PART_A);
  });

  it("gets no way in: no Start button and no item id anywhere in the markup", async () => {
    PAID = false;
    const html = await renderTask(NURSE.slug, OET_TASKS.LISTENING_PART_A.slug);
    const pool = await listPool("LISTENING_PART_A", null, USER.id);
    expect(html).not.toContain(">Start<");
    expect(html).not.toContain(">Again<");
    expect(html).not.toContain('name="itemId"');
    for (const row of pool) expect(html).not.toContain(`value="${row.id}"`);
    // The subscription notice is still the thing they are pointed at.
    expect(html).toContain("/pricing");
  });

  it("sees titles and NOTHING from the payload", async () => {
    // Titles only was Nasir's decision on 1 Sep 2026. The list component is never
    // handed a payload, so there is nothing for it to leak — asserted rather than
    // asserted-by-comment.
    PAID = false;
    const html = await renderTask(NURSE.slug, OET_TASKS.WRITING_LETTER.slug);
    const pool = await listPool("WRITING_LETTER", NURSE.profession, USER.id);
    for (const row of pool) expect(html).toContain(row.title);
    expect(html).not.toContain("caseNotes");
    expect(html).not.toContain("audioScript");
    expect(html).not.toContain("answer");
  });

  it("a paid learner DOES get a Start button — so the check above is not vacuous", async () => {
    PAID = true;
    const html = await renderTask(NURSE.slug, OET_TASKS.LISTENING_PART_A.slug);
    expect(html).toContain('name="itemId"');
    expect(html).toContain(">Start<");
  });
});
