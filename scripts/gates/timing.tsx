/**
 * TIMING RENDER GATE  —  `npm run gate:timing` (exit 1 on any breach).
 *
 * WHY THIS RENDERS INSTEAD OF READING SOURCE OR PAYLOADS.
 *
 * Gate G6 asserted that every Speaking item carried `prepSeconds` inside OET's
 * published 2-3 minute range. It was green for weeks. During all of those weeks
 * `SpeakingComposer` did not destructure `prepSeconds` at all, so no learner ever
 * saw a preparation phase. The number was correct, stored, schema-valid, and
 * invisible. `timeLimitSeconds` was worse: stored on every item, read NOWHERE in
 * src/. Reading's only clock counted UP from 00:00, which is not a limit.
 *
 * A gate that validates stored data proves nothing about what a learner sees.
 * A gate that greps the component source proves only that a string is present —
 * it survives a rename, and it cannot tell a rendered value from a dead one.
 *
 * So this gate MOUNTS THE REAL COMPONENT and asserts on the HTML that comes out.
 * `renderToStaticMarkup` runs the component body and its useState initialisers,
 * which is exactly the first frame a learner is served.
 *
 * ── HOW IT AVOIDS PROVING THAT THE CODE AGREES WITH ITSELF ───────────────────
 *
 * Every expected string below is HAND-TYPED from OET's published timings. None
 * is computed from TIMING, from a payload, or from the component. "15:00" is
 * typed here because OET says fifteen minutes, not because exam-shape.ts says
 * 900.
 *
 * And for the payload-driven case there is a second, stronger test: Speaking is
 * rendered TWICE with DIFFERENT prepSeconds and the two outputs must DIFFER in
 * the way the field predicts. A component that ignores the payload and prints a
 * constant passes a single-value assertion and fails this one. That is the exact
 * defect being guarded against, so it is the one that gets the differential.
 *
 * PUBLISHED TIMINGS THIS FILE ENCODES (sources in src/lib/oet/exam-shape.ts):
 *   Reading Part A .......... 15 minutes, strictly timed
 *   Reading Parts B and C ... 45 minutes
 *   Writing ................. 5 minutes reading, then 40 minutes writing
 *   Speaking ................ 2-3 minutes preparation per role-play
 */
import { createElement, type ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { OetTaskType } from "@prisma/client";
import { OetComposer } from "../../src/components/oet/OetComposer";
import { speakingPrepPolicy } from "../../src/lib/oet/prep-policy";

const failures: string[] = [];
const fail = (check: string, msg: string) => failures.push(`${check}  ${msg}`);

// A no-op router. next/navigation's useRouter throws unless a router context is
// mounted; nothing here navigates.
const router = {
  refresh() {},
  push() {},
  replace() {},
  back() {},
  forward() {},
  prefetch() {},
};

function render(el: ReactElement): string {
  return renderToStaticMarkup(
    createElement(AppRouterContext.Provider, { value: router as never }, el),
  );
}

function renderComposer(
  taskType: string,
  payload: unknown,
  allowSkipPreparation?: boolean,
): string {
  return render(
    <OetComposer
      attemptId="gate-attempt"
      taskType={taskType as OetTaskType}
      prompt="Gate render."
      payload={payload}
      allowSkipPreparation={allowSkipPreparation}
    />,
  );
}

/** A rendered-nothing component passes every "must not contain" assertion. */
function assertRendered(label: string, html: string): boolean {
  if (html.length < 200) {
    fail(label, `rendered only ${html.length} chars — the component produced no real markup`);
    return false;
  }
  return true;
}

function mustContain(label: string, html: string, needle: string, why: string) {
  if (!html.includes(needle)) {
    fail(label, `rendered markup does NOT contain "${needle}" — ${why}`);
  }
}

function mustNotContain(label: string, html: string, needle: string, why: string) {
  if (html.includes(needle)) {
    fail(label, `rendered markup contains "${needle}" — ${why}`);
  }
}

// ── Reading Part A · a 15-minute COUNTDOWN ───────────────────────────────────
{
  const label = "T1 reading-part-a";
  const html = renderComposer("READING_PART_A", {
    texts: [{ id: "A", heading: "Text A", body: "Body text for the gate render." }],
    questions: [{ id: "q1", stem: "A question stem for the gate render." }],
  });
  if (assertRendered(label, html)) {
    mustContain(label, html, "15:00", "Reading Part A is 15 minutes and the clock must start there");
    mustNotContain(label, html, "45:00", "45 minutes is Parts B and C, not Part A");
    mustNotContain(
      label,
      html,
      "⏱ 00:00",
      "a clock starting at 00:00 is counting UP — that is a stopwatch, not a limit",
    );
  }
}

// ── Reading Parts B and C · 45 minutes ───────────────────────────────────────
for (const taskType of ["READING_PART_B", "READING_PART_C"]) {
  const label = `T2 ${taskType.toLowerCase().replace(/_/g, "-")}`;
  const html = renderComposer(taskType, {
    passages: [{ id: "1", heading: "Passage", body: "Body text for the gate render." }],
    questions: [
      {
        id: "q1",
        stem: "A question stem for the gate render.",
        options: [
          { id: "a", text: "Option A" },
          { id: "b", text: "Option B" },
        ],
      },
    ],
  });
  if (assertRendered(label, html)) {
    mustContain(label, html, "45:00", "Reading Parts B and C get 45 minutes");
    mustNotContain(label, html, "15:00", "15 minutes is Part A, not Parts B or C");
    mustNotContain(label, html, "⏱ 00:00", "the clock must count down, not up");
  }
}

// ── Reading · the two parts must NOT render the same duration ────────────────
// If someone hard-codes one limit for all Reading, every assertion above still
// passes on its own file. This is the pair that catches it.
{
  const label = "T3 reading-differential";
  const a = renderComposer("READING_PART_A", { texts: [], questions: [] });
  const b = renderComposer("READING_PART_B", { passages: [], questions: [] });
  if (a === b) {
    fail(label, "Part A and Part B render IDENTICAL markup — the time limit is not per-part");
  }
}

// ── Writing · 5 minutes reading, THEN 40 minutes ─────────────────────────────
{
  const label = "T4 writing-two-phases";
  const html = renderComposer("WRITING_LETTER", {
    caseNotes: "Case notes for the gate render.",
    recipient: "Dr Gate",
    taskInstruction: "Write a referral letter.",
    wordMin: 180,
    wordMax: 200,
  });
  if (assertRendered(label, html)) {
    mustContain(label, html, "05:00", "Writing opens with a 5-minute reading phase");
    mustContain(label, html, "40:00", "the writing phase that follows is 40 minutes");
    mustContain(
      label,
      html,
      "Case notes",
      "the case notes must be readable DURING the reading phase — that is what reading time is",
    );
    // The composer must be shut during the reading phase, or the phase is decorative.
    if (!/<textarea[^>]*\sdisabled=""/.test(html)) {
      fail(label, "the letter textarea is NOT disabled during the reading phase");
    }
  }
}

// ── Speaking · a preparation phase driven by payload.prepSeconds ─────────────
{
  const label = "T5 speaking-prep";
  const card = {
    setting: "A ward.",
    candidateRole: "You are the nurse.",
    patientRole: "The patient is anxious.",
    candidateCard: "Task card text for the gate render.",
    speakSeconds: 300,
  };

  const html120 = renderComposer("SPEAKING_ROLEPLAY", { ...card, prepSeconds: 120 });
  if (assertRendered(label, html120)) {
    mustContain(label, html120, "02:00", "OET gives 2 minutes to prepare and the item stores 120");
    // Recording must not be startable while preparing, or the phase is decorative.
    if (!/<button[^>]*\sdisabled=""[^>]*>[^<]*●/.test(html120)) {
      fail(label, '"Start recording" is NOT disabled during the preparation phase');
    }
  }

  // THE DIFFERENTIAL. 173 seconds is 02:53 — a value no constant in this repo
  // holds, and inside OET's published 2-3 minute range. If the composer prints a
  // literal instead of reading the field, this is the assertion that fails.
  const label2 = "T6 speaking-reads-the-field";
  const html173 = renderComposer("SPEAKING_ROLEPLAY", { ...card, prepSeconds: 173 });
  if (assertRendered(label2, html173)) {
    mustContain(
      label2,
      html173,
      "02:53",
      "prepSeconds 173 must render as 02:53 — the composer is not reading the payload field",
    );
    mustNotContain(
      label2,
      html173,
      "02:00",
      "a 173-second item still showing 02:00 means a constant is being printed, not the field",
    );
  }
  if (html120 === html173) {
    fail(
      label2,
      "two DIFFERENT prepSeconds values render IDENTICAL markup — prepSeconds is not read at all " +
        "(this is precisely the state the product shipped in until 2026-08-31)",
    );
  }
}

// ── Speaking · the skip button is a PRACTICE affordance only ─────────────────
//
// Owner's decision, 2026-09-01: a full mock gives no skip, practice does, and
// the practice screen must say so. The two failure directions are not
// symmetrical — a mock that offers a skip is a mock test that is not a mock
// test — so both are asserted, not just the one that looks like the feature.
//
// The mode is NOT passed as a literal here. It comes from speakingPrepPolicy(),
// the same function the session page calls, fed the session shapes it will
// actually see. Hard-coding true/false here would test that this gate agrees
// with itself while leaving the derivation untested.
//
// The explanatory sentence below is HAND-TYPED from the owner's own words. It is
// not imported from the component, so a reworded component fails this check
// rather than redefining what it is checked against.
const SKIP_SENTENCE =
  "Practice only. In a full mock test — and in the real OET — you get 2 minutes to prepare and there is no skip.";
const SKIP_BUTTON = "Skip preparation";
{
  const card = {
    setting: "A ward.",
    candidateRole: "You are the nurse.",
    patientRole: "The patient is anxious.",
    candidateCard: "Task card text for the gate render.",
    prepSeconds: 120,
    speakSeconds: 300,
  };

  // Sanity: the policy must actually disagree across these two sessions, or every
  // assertion below is being made twice about the same thing.
  const mock = speakingPrepPolicy({ mode: "MOCK" });
  const practice = speakingPrepPolicy({ mode: "PRACTICE_SET" });
  if (mock.allowSkip !== false || practice.allowSkip !== true) {
    fail(
      "T7 skip-practice-only",
      `speakingPrepPolicy is not discriminating: MOCK->${mock.allowSkip} (want false), ` +
        `PRACTICE_SET->${practice.allowSkip} (want true)`,
    );
  }

  const practiceHtml = renderComposer("SPEAKING_ROLEPLAY", card, practice.allowSkip);
  const mockHtml = renderComposer("SPEAKING_ROLEPLAY", card, mock.allowSkip);

  const labelP = "T7 skip-practice-only";
  if (assertRendered(labelP, practiceHtml)) {
    mustContain(labelP, practiceHtml, SKIP_BUTTON, "practice must offer a way past the preparation phase");
    mustContain(
      labelP,
      practiceHtml,
      SKIP_SENTENCE,
      "the skip must be explained in full, in the open — not behind a tooltip or an info icon",
    );
  }

  const labelM = "T8 skip-absent-in-mock";
  if (assertRendered(labelM, mockHtml)) {
    mustNotContain(
      labelM,
      mockHtml,
      SKIP_BUTTON,
      "a MOCK session must not offer a skip — the preparation phase is the test",
    );
    mustNotContain(
      labelM,
      mockHtml,
      "No microphone? Type your transcript instead",
      "the transcript box is a side door out of a mandatory preparation phase and must be shut while it runs",
    );
    mustContain(labelM, mockHtml, "02:00", "the mock still shows the preparation countdown");
  }

  // The unsafe default. An omitted prop must behave like a mock, not like practice.
  const labelD = "T9 skip-defaults-to-mandatory";
  const defaultHtml = renderComposer("SPEAKING_ROLEPLAY", card); // prop deliberately omitted
  if (assertRendered(labelD, defaultHtml)) {
    mustNotContain(
      labelD,
      defaultHtml,
      SKIP_BUTTON,
      "a caller that forgets the prop must get the EXAM-LIKE behaviour, not the lenient one",
    );
  }
  for (const [what, policy] of [
    ["a session with no mode", speakingPrepPolicy({})],
    ["a session with an unrecognised mode", speakingPrepPolicy({ mode: "SOMETHING_NEW" })],
    ["a session with mode null", speakingPrepPolicy({ mode: null })],
  ] as const) {
    if (policy.allowSkip !== false) {
      fail(labelD, `${what} allowed a skip — the undetermined case must default to mandatory`);
    }
  }
  if (speakingPrepPolicy(null).allowSkip !== true) {
    fail(labelD, "no session at all must count as a standalone practice item (owner's rule)");
  }
}

// ── report ───────────────────────────────────────────────────────────────────
const CHECKS = [
  "T1 reading-part-a",
  "T2 reading-part-b",
  "T2 reading-part-c",
  "T3 reading-differential",
  "T4 writing-two-phases",
  "T5 speaking-prep",
  "T6 speaking-reads-the-field",
  "T7 skip-practice-only",
  "T8 skip-absent-in-mock",
  "T9 skip-defaults-to-mandatory",
];
for (const c of CHECKS) {
  const hits = failures.filter((f) => f.startsWith(c));
  console.log(`  ${hits.length === 0 ? "PASS" : "FAIL"}  ${c}${hits.length ? ` (${hits.length})` : ""}`);
}
if (failures.length) {
  console.error(`\n[gate:timing] ${failures.length} breach(es):`);
  for (const f of failures) console.error(`  ${f}`);
  console.error("\n[gate:timing] BUILD BLOCKED.");
  process.exit(1);
}
console.log("[gate:timing] all clear — every published timing reaches the rendered page");
