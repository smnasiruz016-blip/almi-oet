/**
 * TIMING — RUNTIME BEHAVIOUR, WITH THE CLOCK UNDER TEST CONTROL.
 *
 * WHAT THIS EXISTS TO COVER, AND WHY IT IS A SECOND FILE.
 *
 * `scripts/gates/timing.tsx` renders the composers with `renderToStaticMarkup`.
 * That runs component bodies and useState initialisers, so it proves what the
 * FIRST FRAME contains — 15:00, 05:00, 02:00, a disabled textarea. It runs no
 * effects at all. Every countdown in this product lives in a `useEffect` +
 * `setInterval`, so after that first frame the static gate proves nothing:
 *
 *   - a clock that renders 15:00 and never decrements passes it
 *   - inputs that never lock at zero pass it
 *   - a Writing reading-phase that never ends pass it
 *   - a Speaking prep phase that never releases the record button passes it
 *
 * Every one of those is a shipped-looking product with a dead timer. So these
 * tests mount into a real DOM (jsdom), run the real effects, and DRIVE THE CLOCK
 * with vitest's fake timers — advancing time by an exact number of seconds and
 * asserting what changed.
 *
 * ⚠️ NO BROWSER EXECUTED THIS CODE. jsdom is a DOM implementation in Node, not a
 * browser: no layout, no paint, no real rAF scheduling, and — relevant here —
 * MediaRecorder and getUserMedia do not exist. What is proven below is React
 * state, effects and rendered DOM under a controlled clock. What is NOT proven
 * is anything a browser does. See the report; this must not be described as a
 * browser check.
 *
 * EXPECTED VALUES ARE HAND-TYPED from OET's published timings — 15 minutes, 5
 * then 40, 2 minutes — never imported from TIMING or read back off the
 * component. The number of seconds each test advances is likewise typed here.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createElement, type ReactElement } from "react";
import type { OetTaskType } from "@prisma/client";
import { OetComposer } from "@/components/oet/OetComposer";

declare global {
  // eslint-disable-next-line no-var
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}

const router = {
  refresh() {},
  push() {},
  replace() {},
  back() {},
  forward() {},
  prefetch() {},
};

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
});

function mount(el: ReactElement) {
  act(() => {
    root.render(createElement(AppRouterContext.Provider, { value: router as never }, el));
  });
}

function composer(taskType: string, payload: unknown, allowSkipPreparation?: boolean) {
  return (
    <OetComposer
      attemptId="runtime-test"
      taskType={taskType as OetTaskType}
      prompt="Runtime test."
      payload={payload}
      allowSkipPreparation={allowSkipPreparation}
    />
  );
}

/** Advance the fake clock by whole seconds and let React flush. */
function tick(seconds: number) {
  act(() => {
    vi.advanceTimersByTime(seconds * 1000);
  });
}

const text = () => container.textContent ?? "";
const timer = () => container.querySelector('[role="timer"]')?.textContent ?? "";
const buttonNamed = (label: string) =>
  [...container.querySelectorAll("button")].find((b) => (b.textContent ?? "").includes(label));

const READING_PAYLOAD = {
  texts: [{ id: "A", heading: "Text A", body: "Body." }],
  questions: [{ id: "q1", stem: "A question stem." }],
};
const WRITING_PAYLOAD = {
  caseNotes: "Case notes.",
  recipient: "Dr Test",
  taskInstruction: "Write a referral letter.",
  wordMin: 180,
  wordMax: 200,
};
const SPEAKING_PAYLOAD = {
  setting: "A ward.",
  candidateRole: "You are the nurse.",
  patientRole: "The patient is anxious.",
  candidateCard: "Task card.",
  prepSeconds: 120,
  speakSeconds: 300,
};

describe("the countdown actually decrements", () => {
  it("Reading Part A goes 15:00 → 14:59 → 14:00 → 10:00", () => {
    mount(composer("READING_PART_A", READING_PAYLOAD));
    expect(timer()).toContain("15:00");

    tick(1);
    expect(timer()).toContain("14:59");

    tick(59);
    expect(timer()).toContain("14:00");

    // 15 minutes minus 5 minutes = 10:00. Hand-typed, not computed from TIMING.
    tick(4 * 60);
    expect(timer()).toContain("10:00");
  });
});

describe("Reading Part A expires at 15 minutes", () => {
  it("locks the answer inputs at 00:00 while Submit stays enabled", () => {
    mount(composer("READING_PART_A", READING_PAYLOAD));

    const input = () => container.querySelector("input[type=text]") as HTMLInputElement | null;
    const submit = () => buttonNamed("Submit answers") as HTMLButtonElement | undefined;

    expect(input()?.disabled).toBe(false);
    expect(submit()?.disabled).toBe(false);

    // One second before the limit: still open.
    tick(15 * 60 - 1);
    expect(input()?.disabled).toBe(false);
    expect(text()).not.toContain("Time is up");

    // The limit.
    tick(1);
    expect(timer()).toContain("Time is up");
    expect(input()?.disabled).toBe(true);
    expect(text()).toContain("Time is up. You can't change your answers now");

    // The whole point of not auto-submitting: the learner can still hand it in.
    expect(submit()?.disabled).toBe(false);

    // And it does not keep counting into negative time.
    tick(120);
    expect(timer()).toContain("Time is up");
    expect(submit()?.disabled).toBe(false);
  });
});

describe("Writing crosses from reading time into writing time", () => {
  it("unlocks the composer at 5 minutes, then runs a 40-minute countdown to zero", () => {
    mount(composer("WRITING_LETTER", WRITING_PAYLOAD));

    const textarea = () => container.querySelector("textarea") as HTMLTextAreaElement | null;
    const submit = () => buttonNamed("Submit letter") as HTMLButtonElement | undefined;

    // Reading phase: case notes readable, composer shut, submit shut.
    expect(timer()).toContain("05:00");
    expect(text()).toContain("Case notes");
    expect(textarea()?.disabled).toBe(true);
    expect(submit()?.disabled).toBe(true);

    tick(4 * 60 + 59);
    expect(textarea()?.disabled).toBe(true);

    // 5 minutes: the phase flips on its own, with no interaction.
    tick(1);
    expect(textarea()?.disabled).toBe(false);
    expect(submit()?.disabled).toBe(false);
    expect(timer()).toContain("40:00");
    expect(text()).toContain("Case notes"); // still readable while writing

    tick(60);
    expect(timer()).toContain("39:00");

    // 40 minutes of writing: time up, composer shut, submit still available.
    tick(39 * 60);
    expect(timer()).toContain("Time is up");
    expect(textarea()?.disabled).toBe(true);
    expect(submit()?.disabled).toBe(false);
  });
});

describe("Speaking preparation releases recording on its own", () => {
  it("opens the record button at 2 minutes with no click", () => {
    mount(composer("SPEAKING_ROLEPLAY", SPEAKING_PAYLOAD));

    const record = () => buttonNamed("Start recording") as HTMLButtonElement | undefined;

    expect(timer()).toContain("02:00");
    expect(record()?.disabled).toBe(true);
    expect(text()).toContain("Preparation time.");

    tick(60);
    expect(timer()).toContain("01:00");
    expect(record()?.disabled).toBe(true);

    tick(59);
    expect(record()?.disabled).toBe(true);

    // 2 minutes. Nothing was clicked.
    tick(1);
    expect(record()?.disabled).toBe(false);
    expect(text()).not.toContain("Preparation time.");
  });

  it("reads prepSeconds from the payload at runtime, not a constant", () => {
    mount(composer("SPEAKING_ROLEPLAY", { ...SPEAKING_PAYLOAD, prepSeconds: 173 }));
    const record = () => buttonNamed("Start recording") as HTMLButtonElement | undefined;

    expect(timer()).toContain("02:53");
    tick(172);
    expect(record()?.disabled).toBe(true);
    tick(1);
    expect(record()?.disabled).toBe(false);
  });
});

describe("the practice skip button ends preparation immediately", () => {
  it("releases recording on click in practice, and does not exist in a mock", () => {
    mount(composer("SPEAKING_ROLEPLAY", SPEAKING_PAYLOAD, true));
    const record = () => buttonNamed("Start recording") as HTMLButtonElement | undefined;
    const skip = () => buttonNamed("Skip preparation") as HTMLButtonElement | undefined;

    expect(record()?.disabled).toBe(true);
    expect(skip()).toBeDefined();

    act(() => skip()!.click());
    expect(record()?.disabled).toBe(false);
    expect(skip()).toBeUndefined();
    // Skipping must not leave the clock running behind the screen.
    tick(300);
    expect(record()?.disabled).toBe(false);
  });

  it("has no skip button at all when preparation is mandatory", () => {
    mount(composer("SPEAKING_ROLEPLAY", SPEAKING_PAYLOAD, undefined));
    expect(buttonNamed("Skip preparation")).toBeUndefined();
    tick(119);
    expect((buttonNamed("Start recording") as HTMLButtonElement).disabled).toBe(true);
    tick(1);
    expect((buttonNamed("Start recording") as HTMLButtonElement).disabled).toBe(false);
  });
});
