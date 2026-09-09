/**
 * 🔴 GAP-048 — THE MOCK NEVER TOLD ANYONE WHAT THE 22 STEPS WERE.
 *
 * The owner opened a real mock, saw "Page 1 of 22 · Section: Listening — Part A"
 * and a strip of 22 bare numbers, and asked where Reading, Writing and Speaking
 * were. He built this product. If the map is not obvious to him it is not
 * obvious to anyone.
 *
 * Three things are under test, and the first is the one that decides the others:
 *
 *   1. the map is DERIVED FROM THE SESSION'S PLAN, never from the step index. A
 *      map that counted — "1 to 10 are Listening because that is what MOCK_PLAN
 *      looked like the day I wrote this" — would be a second copy of the plan,
 *      free to drift from the one the session is walking, and silently.
 *   2. it survives 430px. The old rail was `hidden sm:block`: below 640px there
 *      was NO position strip at all, which is where a candidate actually is.
 *   3. practice is untouched — no plan, no groups, the numbered rail as before.
 *
 * The expected boundaries are NOT hand-typed here. They are computed from
 * MOCK_PLAN, so this file cannot disagree with the plan the product ships; what
 * IS hand-typed is the shape the owner asked for — four groups, in test order,
 * Listening first and Speaking last — because that is a claim about the exam
 * rather than about the code.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { act, createElement, type ReactElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import type { OetTaskType } from "@prisma/client";
import { ExamPageRail } from "@/components/oet/ExamPageRail";
import { ExamNav } from "@/components/oet/ExamNav";
import { examMap, groupIndexOfPage, planOf } from "@/lib/oet/exam-map";
import { MOCK_PLAN } from "@/lib/oet/registry";

// ── 1. the map itself ───────────────────────────────────────────────────────
describe("examMap — the shape of the test, from the plan", () => {
  const groups = examMap(MOCK_PLAN);

  it("is four contiguous sections in exam order", () => {
    expect(groups.map((g) => g.subTest)).toEqual(["LISTENING", "READING", "WRITING", "SPEAKING"]);
  });

  it("covers every step exactly once, with no gap and no overlap", () => {
    expect(groups[0].from).toBe(1);
    expect(groups[groups.length - 1].to).toBe(MOCK_PLAN.length);
    for (let i = 1; i < groups.length; i++) {
      expect(groups[i].from, `gap or overlap before ${groups[i].subTest}`).toBe(groups[i - 1].to + 1);
    }
    expect(groups.reduce((n, g) => n + g.count, 0)).toBe(MOCK_PLAN.length);
  });

  it("counts each section as the plan counts it, not as a table says", () => {
    for (const g of groups) {
      const fromPlan = MOCK_PLAN.filter((_, i) => i + 1 >= g.from && i + 1 <= g.to).length;
      expect(g.count, g.label).toBe(fromPlan);
      expect(g.count).toBe(g.to - g.from + 1);
    }
  });

  it("🔴 follows the PLAN, not a memory of it", () => {
    // a plan in a different shape must produce a different map, or the map is a
    // hard-coded table wearing a function's clothes
    const other = ["READING_PART_A", "READING_PART_B", "WRITING_LETTER"] as OetTaskType[];
    const m = examMap(other);
    expect(m.map((g) => g.subTest)).toEqual(["READING", "WRITING"]);
    expect(m[0]).toMatchObject({ from: 1, to: 2, count: 2 });
    expect(m[1]).toMatchObject({ from: 3, to: 3, count: 1 });
  });

  it("returns an interleaving as an interleaving, rather than tidying it", () => {
    const messy = ["LISTENING_PART_A", "READING_PART_B", "LISTENING_PART_B"] as OetTaskType[];
    expect(examMap(messy).map((g) => g.subTest)).toEqual(["LISTENING", "READING", "LISTENING"]);
  });

  it("locates a page inside its section", () => {
    expect(groupIndexOfPage(groups, 1)).toBe(0);
    expect(groupIndexOfPage(groups, groups[1].from)).toBe(1);
    expect(groupIndexOfPage(groups, MOCK_PLAN.length)).toBe(groups.length - 1);
    expect(groupIndexOfPage(groups, 0)).toBe(-1);
    expect(groupIndexOfPage(groups, MOCK_PLAN.length + 1)).toBe(-1);
  });
});

describe("planOf — one answer to 'what plan is this session on'", () => {
  it("reads the plan the session stored", () => {
    const stored = ["READING_PART_A", "WRITING_LETTER"] as OetTaskType[];
    expect(planOf({ mode: "MOCK", plan: stored })).toEqual(stored);
  });

  it("falls back to MOCK_PLAN for a mock that stored none", () => {
    // the same fallback advanceSession has always applied — it now calls this
    expect(planOf({ mode: "MOCK", plan: null })).toEqual(MOCK_PLAN);
    expect(planOf({ mode: "MOCK" })).toEqual(MOCK_PLAN);
    expect(planOf({ mode: "MOCK", plan: [] })).toEqual(MOCK_PLAN);
  });

  it("gives a PRACTICE_SET no plan at all", () => {
    // N items of ONE task type: a four-section map would be an invention
    expect(planOf({ mode: "PRACTICE_SET", plan: MOCK_PLAN })).toBeNull();
    expect(planOf(null)).toBeNull();
    expect(planOf(undefined)).toBeNull();
    expect(planOf({ mode: "SOMETHING_ELSE" })).toBeNull();
  });
});

// ── 2. the rail ─────────────────────────────────────────────────────────────
let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});
afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

function mount(el: ReactElement) {
  act(() => root.render(el));
}
const q = (id: string) => container.querySelector(`[data-testid="${id}"]`);

const GROUPS = examMap(MOCK_PLAN);

describe("the rail in a MOCK", () => {
  it("names all four sections with their step counts, without being asked", () => {
    mount(createElement(ExamPageRail, { pageNumber: 1, pageCount: MOCK_PLAN.length, groups: GROUPS }));
    for (const g of GROUPS) {
      const el = q(`exam-rail-group-${g.subTest}`);
      expect(el, `${g.label} missing`).not.toBeNull();
      // the count is readable without hovering, tapping or counting squares
      expect(el!.textContent).toContain(String(g.count));
      expect(el!.textContent).toContain(g.label);
      expect(el!.textContent).toContain(g.letter);
    }
    expect(q("exam-rail-position")!.textContent).toContain(`Step 1 of ${MOCK_PLAN.length}`);
  });

  it("marks the section the student is in, and only that one", () => {
    const reading = GROUPS[1];
    mount(
      createElement(ExamPageRail, {
        pageNumber: reading.from + 2,
        pageCount: MOCK_PLAN.length,
        groups: GROUPS,
      }),
    );
    const current = container.querySelectorAll('[aria-current="step"]');
    expect(current).toHaveLength(1);
    expect(current[0].getAttribute("data-testid")).toBe(`exam-rail-group-${reading.subTest}`);
    // and says where inside it: third of nine, not "somewhere in Reading"
    expect(current[0].textContent).toContain(`3/${reading.count}`);
  });

  it("🔴 does NOT draw 22 numbered squares — the end of the test was below the fold", () => {
    mount(createElement(ExamPageRail, { pageNumber: 1, pageCount: MOCK_PLAN.length, groups: GROUPS }));
    expect(container.querySelectorAll('[data-testid^="exam-rail-item-"]')).toHaveLength(0);
    expect(q("exam-page-rail")!.getAttribute("data-rail-mode")).toBe("grouped");
  });

  it("🔴 survives 430px: it is never hidden, and it still names four sections", () => {
    mount(createElement(ExamPageRail, { pageNumber: 1, pageCount: MOCK_PLAN.length, groups: GROUPS }));
    const rail = q("exam-page-rail")!;
    // the old rail was `hidden sm:block` — below 640px there was NO strip at all
    expect(rail.className).not.toContain("hidden");
    expect(container.querySelectorAll('[data-testid^="exam-rail-group-"]')).toHaveLength(4);
    // the position is text, not a wide row of squares that would need scrolling
    expect(q("exam-rail-position")).not.toBeNull();
  });

  it("says in full to a screen reader what the strip abbreviates", () => {
    mount(createElement(ExamPageRail, { pageNumber: 1, pageCount: MOCK_PLAN.length, groups: GROUPS }));
    const listening = q(`exam-rail-group-LISTENING`)!;
    expect(listening.querySelector(".sr-only")!.textContent).toContain("Listening");
    expect(listening.querySelector(".sr-only")!.textContent).toContain("steps 1 to");
  });
});

describe("the rail in PRACTICE is unchanged", () => {
  it("draws the numbered squares exactly as before when there is no plan", () => {
    mount(createElement(ExamPageRail, { pageNumber: 2, pageCount: 3 }));
    expect(container.querySelectorAll('[data-testid^="exam-rail-item-"]')).toHaveLength(3);
    expect(q("exam-rail-item-2")!.getAttribute("aria-current")).toBe("step");
    expect(container.querySelectorAll('[data-testid^="exam-rail-group-"]')).toHaveLength(0);
    expect(q("exam-page-rail")!.getAttribute("data-rail-mode")).toBe("numbered");
  });

  it("an EMPTY group list is treated as no plan, not as a rail with no sections", () => {
    mount(createElement(ExamPageRail, { pageNumber: 1, pageCount: 3, groups: [] }));
    expect(container.querySelectorAll('[data-testid^="exam-rail-item-"]')).toHaveLength(3);
  });
});

// ── 3. submit-to-advance is TEXT, not a tooltip ─────────────────────────────
describe("🔴 'submit to advance' is visible, in both modes", () => {
  it("is rendered text, not only a title attribute", () => {
    mount(createElement(ExamNav, {}));
    const hint = q("exam-advance-hint");
    expect(hint, "the rule exists only on hover").not.toBeNull();
    expect(hint!.textContent).toContain("Submit your answers to continue");
    // there is no hover on a phone: the words must be IN the document
    expect(hint!.className).not.toContain("hidden");
    expect(hint!.className).not.toContain("sr-only");
  });

  it("still refuses to be a second route forward", () => {
    // advancing is a scored submission; a Next that navigated would discard answers
    mount(createElement(ExamNav, {}));
    expect(q("exam-next")!.tagName.toLowerCase()).not.toBe("a");
    expect(q("exam-next")!.getAttribute("aria-disabled")).toBe("true");
  });
});
