// Builds a post-submission review for objective (Listening/Reading) attempts:
// for each question, the user's answer vs the correct answer. Safe to show now —
// the attempt is already scored, so the answer key is no longer a secret. Pure
// function (server-usable), reads the stored item payload + the user's response.
//
// ── 🔴 THIS FILE DOES NOT DECIDE WHAT IS CORRECT. IT ASKS. ──────────────────
//
// Until 3 September 2026 it did decide, with its own normalize() — trim,
// lowercase, collapse spaces, strip trailing punctuation — compared against
// `q.answer` ALONE. It never read `variants`, never merged the accept-list
// overlay, and applied none of the seven leniency rules in objective.ts. So a
// learner saw two numbers on one result screen, at one moment:
//
//     4 / 20 practice points          ← markObjective, the score
//     Answer review · 3/20 correct    ← this file, the screen
//
// 688 of the bank's 882 authored accepted answers were SCORED RIGHT AND SHOWN
// WRONG — 259 Listening Part A, 429 Reading Part A. That is worse than a wrong
// score, because it TEACHES THE MISTAKE: a learner who wrote "five minutes" and
// reads "✗ Correct: 5 minutes" corrects themselves away from a right answer, and
// trusts the next thing the screen says a little less. The whole line PRs #23-#25
// drew between "the same word in another form" and "a different word" was
// reversed at the last moment, on the one screen the learner actually reads.
//
// The fix is not a better normaliser here. It is NO normaliser here:
//
//   · the key is built by the SAME functions the graders use
//     (listeningPartAAnswerKey / readingPartAAnswerKey / the MCQ builders), so
//     payload `variants` and the code-side overlay are merged exactly once;
//   · the verdict is isAnswerCorrect() from objective.ts — the grader's own
//     function, not a copy that happens to agree today;
//   · the learner's answer is read with answerFor(), the grader's own reader.
//
// 🔴 IF A `normalize()` EVER REAPPEARS IN THIS FILE, THE DEFECT IS BACK.
// tests/review-agrees-with-the-grader.test.ts runs every accepted answer in the
// bank through both paths and fails on the first disagreement, and it also fails
// if this file grows its own comparison. Two live graders disagreeing is the
// same shape of failure as two green gates over a dead feature.
//
// ── WHY `title` IS REQUIRED AND NOT OPTIONAL ────────────────────────────────
//
// The accept-list overlay is keyed by item title. An optional title would let a
// caller silently fall back to payload-only variants and reopen a narrower
// version of exactly this defect — the screen disagreeing with the score on the
// 150 Reading and 380 Listening variants the overlay carries. A caller that
// cannot supply a title is a finding to report, not a reason for a fallback.

import type { OetTaskType } from "@prisma/client";
import {
  answerFor,
  isAnswerCorrect,
  type AnswerKey,
} from "@/lib/oet/tasks/objective";
import {
  listeningMcqAnswerKey,
  listeningPartAAnswerKey,
  type ListeningMcqPayload,
  type ListeningPartAPayload,
} from "@/lib/oet/tasks/listening";
import {
  readingMcqAnswerKey,
  readingPartAAnswerKey,
  type ReadingMcqPayload,
  type ReadingPartAPayload,
} from "@/lib/oet/tasks/reading";

export type ReviewRow = { label: string; your: string; correct: string; ok: boolean };
export type Review = { rows: ReviewRow[]; correct: number; total: number };

type Option = { id: string; text: string };

function optionText(options: Option[] | undefined, id: string): string {
  return options?.find((o) => o.id === id)?.text ?? id;
}

/** What the row SHOWS: the learner's own words, and the primary model answer.
 *  Only `ok` comes from the grader — the "Correct:" line is deliberately the
 *  item's own `answer`, because a learner wants the model answer, not whichever
 *  accepted variant happened to match. */
type Displayed = { id: string; label: string; your: string; correct: string };

function rowsFrom(displayed: Displayed[], key: AnswerKey[], response: unknown): Review {
  const byId = new Map(key.map((k) => [k.id, k]));
  const rows: ReviewRow[] = displayed.map((d) => {
    const k = byId.get(d.id);
    return {
      label: d.label,
      your: d.your || "—",
      correct: d.correct,
      // The grader's verdict, on the grader's key, from the grader's reader.
      ok: k ? isAnswerCorrect(k, answerFor(response, d.id)) : false,
    };
  });
  return { rows, correct: rows.filter((r) => r.ok).length, total: rows.length };
}

type Mcq = { id: string; stem: string; options: Option[]; answer: string };

function displayedMcq(questions: Mcq[], response: unknown): Displayed[] {
  return questions.map((q) => {
    const your = answerFor(response, q.id);
    return {
      id: q.id,
      label: q.stem,
      your: your ? optionText(q.options, your) : "",
      correct: optionText(q.options, q.answer),
    };
  });
}

/** Returns null for non-objective task types (Writing/Speaking use AI feedback). */
export function buildObjectiveReview(
  taskType: OetTaskType,
  payload: unknown,
  response: unknown,
  /** The item's SLUG. REQUIRED — the accept-list overlay is keyed by it. */
  slug: string | null,
): Review | null {
  const p = (payload ?? {}) as Record<string, unknown>;

  if (taskType === "LISTENING_PART_A") {
    const typed = p as unknown as ListeningPartAPayload;
    const gaps = typed.gaps ?? [];
    return rowsFrom(
      gaps.map((g) => ({
        id: g.id,
        label: g.label,
        your: answerFor(response, g.id),
        correct: g.answer,
      })),
      listeningPartAAnswerKey(typed, slug ?? undefined),
      response,
    );
  }

  if (taskType === "LISTENING_PART_B" || taskType === "LISTENING_PART_C") {
    const typed = p as unknown as ListeningMcqPayload;
    const questions = (typed.questions ?? []) as Mcq[];
    return rowsFrom(displayedMcq(questions, response), listeningMcqAnswerKey(typed), response);
  }

  if (taskType === "READING_PART_B" || taskType === "READING_PART_C") {
    const typed = p as unknown as ReadingMcqPayload;
    const questions = (typed.questions ?? []) as Mcq[];
    return rowsFrom(displayedMcq(questions, response), readingMcqAnswerKey(typed), response);
  }

  if (taskType === "READING_PART_A") {
    const typed = p as unknown as ReadingPartAPayload;
    const questions = typed.questions ?? [];
    return rowsFrom(
      questions.map((q) => {
        const your = answerFor(response, q.id);
        return q.kind === "match"
          ? {
              id: q.id,
              label: q.stem,
              your: your ? optionText(q.options as Option[] | undefined, your) : "",
              correct: optionText(q.options as Option[] | undefined, q.answer),
            }
          : { id: q.id, label: q.stem, your, correct: q.answer };
      }),
      readingPartAAnswerKey(typed, slug ?? undefined),
      response,
    );
  }

  return null;
}
