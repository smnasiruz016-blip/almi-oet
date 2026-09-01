/**
 * THE EXAM FRAME — asserted on rendered HTML, not on the claim that it renders.
 *
 * Three droppable pieces (ExamChrome / ExamPageRail / ExamNav) and the sealed
 * Part A rule. Each is checked for what a candidate would actually see, and each
 * has a sabotage in the harness that puts it back the way it was.
 *
 * Expected strings and counts are HAND-TYPED. "15:00" is here because OET
 * publishes fifteen minutes for Part A, not because exam-shape.ts says 900.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, createElement, type ReactElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { OetTaskType } from "@prisma/client";
import { ExamChrome } from "@/components/oet/ExamChrome";
import { ExamPageRail } from "@/components/oet/ExamPageRail";
import { ExamNav } from "@/components/oet/ExamNav";
import { OetComposer } from "@/components/oet/OetComposer";
import {
  READING_PART_A_NO_RETURN,
  isSealedSection,
  sealedSectionNotice,
} from "@/lib/oet/section-rules";

const router = { refresh() {}, push() {}, replace() {}, back() {}, forward() {}, prefetch() {} };
let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  vi.useFakeTimers();
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});
afterEach(() => {
  act(() => root.unmount());
  container.remove();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

function mount(el: ReactElement) {
  act(() => {
    root.render(createElement(AppRouterContext.Provider, { value: router as never }, el));
  });
}

const READING_PAYLOAD = {
  texts: [{ id: "A", heading: "Text A", body: "Alpha beta gamma delta epsilon." }],
  questions: [{ id: "q1", stem: "A stem." }],
};

function framed(taskType: string, pageNumber = 1, pageCount = 3, opts: { rail?: boolean; nav?: boolean } = {}) {
  const { rail = true, nav = true } = opts;
  mount(
    <ExamChrome
      sectionLabel={taskType === "READING_PART_A" ? "Reading Part A" : "Reading Part B"}
      pageNumber={pageNumber}
      pageCount={pageCount}
      onFinishHref="/practice"
      rail={rail ? <ExamPageRail pageNumber={pageNumber} pageCount={pageCount} /> : undefined}
      nav={
        nav ? (
          <ExamNav
            sealedNotice={
              isSealedSection(taskType) ? sealedSectionNotice("Reading Part A") : undefined
            }
          />
        ) : undefined
      }
    >
      <OetComposer
        attemptId="a1"
        taskType={taskType as OetTaskType}
        prompt="Read."
        payload={READING_PAYLOAD}
      />
    </ExamChrome>,
  );
}

const q = (sel: string) => container.querySelector(`[data-testid="${sel}"]`);
const text = () => container.textContent ?? "";

// ── 3a · section-labelled countdown, in the fixed top bar ────────────────────
describe("3a · the countdown sits in the chrome and says what it counts", () => {
  it("shows page, section and a labelled countdown in the top bar", () => {
    framed("READING_PART_A");
    expect(q("exam-topbar")).not.toBeNull();
    expect(q("exam-page-indicator")!.textContent).toContain("Page 1 of 3");
    expect(q("exam-section-label")!.textContent).toContain("Section: Reading Part A");
    const clock = q("exam-countdown")!;
    expect(clock.textContent).toContain("15:00");
    // LABELLED. A bare clock does not say whether it is the section or the room.
    expect(clock.textContent).toContain("Part A");
  });

  it("counts Parts B and C at 45 minutes, not Part A's 15", () => {
    framed("READING_PART_B");
    const clock = q("exam-countdown")!;
    expect(clock.textContent).toContain("45:00");
    expect(clock.textContent).not.toContain("15:00");
  });

  it("keeps ONE clock — the composer does not also draw its own", () => {
    // The composer publishes upward when a frame is mounted. Two clocks would be
    // two implementations, free to disagree.
    framed("READING_PART_A");
    expect(container.querySelectorAll('[role="timer"]')).toHaveLength(1);
  });

  it("still draws inline when there is NO frame, so the timing gates stay valid", () => {
    mount(
      <OetComposer
        attemptId="a1"
        taskType={"READING_PART_A" as OetTaskType}
        prompt="Read."
        payload={READING_PAYLOAD}
      />,
    );
    expect(q("exam-topbar")).toBeNull();
    expect(container.querySelector('[role="timer"]')!.textContent).toContain("15:00");
  });

  it("the chrome countdown actually ticks", () => {
    framed("READING_PART_A");
    act(() => vi.advanceTimersByTime(60_000));
    expect(q("exam-countdown")!.textContent).toContain("14:00");
  });

  it("keeps a persistent finish control", () => {
    framed("READING_PART_A");
    expect(q("exam-finish")).not.toBeNull();
  });
});

// ── 3b · the page rail ──────────────────────────────────────────────────────
describe("3b · the page rail shows the real length of the set", () => {
  it("renders one numbered entry per item and marks the current one", () => {
    framed("READING_PART_A", 2, 3);
    expect(q("exam-page-rail")).not.toBeNull();
    expect(container.querySelectorAll('[data-testid^="exam-rail-item-"]')).toHaveLength(3);
    expect(q("exam-rail-item-2")!.getAttribute("aria-current")).toBe("step");
    expect(q("exam-rail-item-1")!.getAttribute("aria-current")).toBeNull();
  });

  it("follows the set length it is given rather than a fixed number", () => {
    // A rail that said 3 while the set served 5 would be worse than no rail.
    framed("READING_PART_A", 1, 5);
    expect(container.querySelectorAll('[data-testid^="exam-rail-item-"]')).toHaveLength(5);
  });

  it("is droppable on its own", () => {
    framed("READING_PART_A", 1, 3, { rail: false });
    expect(q("exam-page-rail")).toBeNull();
    expect(q("exam-topbar")).not.toBeNull(); // 3a unaffected
  });
});

// ── 3c · back / next ────────────────────────────────────────────────────────
describe("3c · Back and Next are present, bottom-right", () => {
  it("renders both controls", () => {
    framed("READING_PART_A");
    expect(q("exam-nav")).not.toBeNull();
    expect(q("exam-back")).not.toBeNull();
    expect(q("exam-next")).not.toBeNull();
  });

  it("Next is not a link — advancing is a scored submission", () => {
    // A Next that navigated would quietly discard the candidate's answers.
    framed("READING_PART_A");
    expect(q("exam-next")!.tagName.toLowerCase()).not.toBe("a");
    expect(q("exam-next")!.getAttribute("aria-disabled")).toBe("true");
  });

  it("is droppable on its own", () => {
    framed("READING_PART_A", 1, 3, { nav: false });
    expect(q("exam-nav")).toBeNull();
    expect(q("exam-page-rail")).not.toBeNull(); // 3b unaffected
  });
});

// ── 4 · Part A is sealed, and the inference is admitted ─────────────────────
describe("4 · Part A is a sealed section and we say the rule is ours", () => {
  it("marks Part A sealed and Part B not", () => {
    expect(isSealedSection("READING_PART_A")).toBe(true);
    expect(isSealedSection("READING_PART_B")).toBe(false);
    expect(isSealedSection("LISTENING_PART_A")).toBe(false);
  });

  it("shows the sealed notice on Part A", () => {
    framed("READING_PART_A");
    expect(q("exam-sealed-notice")).not.toBeNull();
    expect(text()).toContain("sealed");
  });

  it("shows NO sealed notice on Part B", () => {
    framed("READING_PART_B");
    expect(q("exam-sealed-notice")).toBeNull();
  });

  it("🔴 tells the learner the no-return rule is OURS, not quoted from OET", () => {
    // This is the whole point of the item. A learner told "you cannot go back"
    // deserves to know whether that is the exam's rule or our reading of it.
    framed("READING_PART_A");
    expect(text()).toContain("not a rule we have seen OET state");
  });

  it("🔴 records the no-return rule as INFERRED, with what would settle it", () => {
    const p = READING_PART_A_NO_RETURN.provenance;
    expect(p.kind).toBe("inferred");
    if (p.kind !== "inferred") throw new Error("unreachable");
    expect(p.from.length).toBeGreaterThan(0);
    expect(p.because.length).toBeGreaterThan(20);
    expect(p.correctWhen).toContain("FAQ");
    // An inference has no field to put a sentence in — that is the point of the
    // shape. If this ever passes, someone has smuggled one back in.
    expect(JSON.stringify(p)).not.toContain('"quote"');
  });
});

// ── 3d · highlighting ───────────────────────────────────────────────────────
describe("3d · Reading text can be highlighted", () => {
  it("offers the controls and marks nothing until asked", () => {
    framed("READING_PART_A");
    expect(q("reading-texts")).not.toBeNull();
    expect(q("highlight-add")).not.toBeNull();
    expect(container.querySelectorAll('[data-testid="reading-highlight"]')).toHaveLength(0);
  });

  it("says the marks are never submitted or scored", () => {
    framed("READING_PART_A");
    expect(text()).toContain("never submitted or scored");
  });
});
