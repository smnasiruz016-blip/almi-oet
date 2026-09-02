/**
 * THE SERVER'S CLOCK FOR A TIMED ATTEMPT.
 *
 * ── THE DEFECT ──────────────────────────────────────────────────────────────
 *
 * The countdown lived entirely in OetComposer, so it restarted on every render
 * of a fresh page. A candidate who pressed F5 got a new fifteen minutes, and
 * "Part A is strictly timed and you must complete all 20 question items within
 * 15 minutes" — the line PR #19 built a sealed section around — was decoration.
 * A clock that only exists in the browser is not a clock.
 *
 * `OetAttempt.deadlineAt` is now stamped by the SERVER when the attempt is
 * created, and both the countdown and the submit route read it. A reload
 * recomputes the remaining time from it instead of restarting it.
 *
 * ── 🔴 WHERE THE LIMIT COMES FROM, AND WHY NOT `timeLimitSeconds` ───────────
 *
 * The command that asked for this said `deadlineAt = now + timeLimitSeconds`.
 * That is wrong against this repo, and measurably so: of 516 seeded items, 336
 * carry `timeLimitSeconds: 0` — including EVERY Reading item, the ones this
 * change exists for. Only the 180 Writing items carry a non-zero value (2700).
 * `now + 0` would have expired every Reading attempt the instant it was created.
 *
 * The countdown the candidate actually sees comes from `TIMING` in exam-shape.ts,
 * which is sourced (see TIMING_SOURCES). So the deadline is derived from the
 * SAME constants the UI counts down from — otherwise the server and the browser
 * would be enforcing two different clocks, which is the bug in a new costume.
 * `timeLimitSeconds` is honoured when an item actually sets one, so per-item
 * overrides keep working.
 *
 * ── 🔴 WHY ONLY READING HAS A DEADLINE ──────────────────────────────────────
 *
 * A wrong deadline is worse than none: it refuses work the UI never warned
 * about. Measured against the composers on 2 September 2026:
 *
 *   ReadingComposer    ONE countdown, started at mount, limit fixed by task
 *                      type. A wall-clock deadline from attempt creation is
 *                      exactly what it displays.          -> deadline set
 *   ListeningComposer  no countdown at all; the audio paces it.  -> null
 *   WritingComposer    TWO learner-driven phases (5 min reading, then 40 min
 *                      writing). The writing clock starts when the candidate
 *                      chooses to start it, so wall-clock time from creation is
 *                      not what the screen shows.                -> null
 *   SpeakingComposer   a preparation timer only, then a recording. There is no
 *                      overall limit on screen to enforce.        -> null
 *
 * Null means "no server deadline", which is what every attempt had before this
 * column existed. Nothing is enforced that the candidate was not shown.
 */
import type { OetTaskType } from "@prisma/client";
import { TIMING } from "@/lib/oet/exam-shape";

/**
 * Seconds this attempt may take, or null when no server deadline applies.
 *
 * @param itemTimeLimitSeconds `OetItem.timeLimitSeconds` — honoured when an item
 *        sets one; 0 (the seeded default for every Reading item) means "use the
 *        published limit for the task type".
 */
export function attemptLimitSeconds(
  taskType: OetTaskType,
  itemTimeLimitSeconds: number,
): number | null {
  if (taskType === "READING_PART_A") {
    return itemTimeLimitSeconds > 0 ? itemTimeLimitSeconds : TIMING.readingPartASeconds;
  }
  if (taskType === "READING_PART_B" || taskType === "READING_PART_C") {
    return itemTimeLimitSeconds > 0 ? itemTimeLimitSeconds : TIMING.readingPartsBandCSeconds;
  }
  return null;
}

/** The instant this attempt stops accepting a submission, or null. */
export function attemptDeadline(
  taskType: OetTaskType,
  itemTimeLimitSeconds: number,
  now: Date = new Date(),
): Date | null {
  const seconds = attemptLimitSeconds(taskType, itemTimeLimitSeconds);
  return seconds === null ? null : new Date(now.getTime() + seconds * 1000);
}

/** Has this attempt's server deadline passed? Null deadline never expires. */
export function isPastDeadline(deadlineAt: Date | null | undefined, now: Date = new Date()): boolean {
  return deadlineAt instanceof Date && deadlineAt.getTime() <= now.getTime();
}

/** Whole seconds left, floored at 0. Null deadline yields null — the caller
 *  falls back to whatever it did before there was a server clock. */
export function secondsRemaining(
  deadlineAt: Date | string | null | undefined,
  now: Date = new Date(),
): number | null {
  if (!deadlineAt) return null;
  const end = deadlineAt instanceof Date ? deadlineAt : new Date(deadlineAt);
  if (Number.isNaN(end.getTime())) return null;
  return Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
}
