"use client";

/**
 * WHERE YOU ARE IN THIS TEST — and, in a mock, what the test is shaped like.
 *
 * ── PRACTICE: unchanged ─────────────────────────────────────────────────────
 *
 * With no `groups`, this is exactly what it always was: the numbered rail down
 * the left, one square per item, the current one marked. `pageCount` is the real
 * length of the set and comes from the engine (PRACTICE_SET_STEPS via the
 * session's targetCount) — never retyped here. A rail that said "3" while the set
 * served 5 would be worse than no rail.
 *
 * Arrangement observed on OET's own sample: a numbered rail on the left with the
 * current position marked. Nothing else was taken — no styling, no wording.
 * Dropping <ExamPageRail> from the session page removes this and nothing else.
 *
 * ── 🔴 MOCK (GAP-048): the four sections, named ─────────────────────────────
 *
 * Twenty-two bare numbers told a candidate nothing. The owner opened a real mock
 * and asked where Reading, Writing and Speaking were — and he built the product.
 * With `groups` this renders L / R / W / S in plan order, each with its own step
 * count, the current one marked and showing the position inside it. Ten steps of
 * Listening is a fact the student can now read instead of discover.
 *
 * The groups are DERIVED FROM THE SESSION'S PLAN by examMap(), not from the step
 * index — see src/lib/oet/exam-map.ts. Twenty-two numbered squares are not drawn
 * in this mode on purpose: at h-9 plus gaps they stood 876px tall inside a
 * sticky, non-scrolling column, so on an ordinary laptop the last rows — Writing
 * and both Speaking steps — sat below the fold. The end of the test was not on
 * the screen at all.
 *
 * ── 🔴 IT MUST SURVIVE 430px, BECAUSE THAT IS WHERE THE CANDIDATE IS ────────
 *
 * The old rail was `hidden sm:block`: below 640px there was no strip whatsoever
 * and the only position indicator was the top bar. One list is rendered here and
 * laid out two ways — a horizontal strip that scrolls at small widths, a column
 * from `sm` up. Not two copies of the markup: two copies would be free to
 * disagree, and the narrow one is the one nobody tests by eye.
 */
import type { ExamGroup } from "@/lib/oet/exam-map";
import { groupIndexOfPage } from "@/lib/oet/exam-map";

export function ExamPageRail({
  pageNumber,
  pageCount,
  groups,
}: {
  pageNumber: number;
  pageCount: number;
  /** MOCK only. Absent = the numbered rail this component has always drawn. */
  groups?: ExamGroup[];
}) {
  if (groups && groups.length > 0) {
    const currentIndex = groupIndexOfPage(groups, pageNumber);
    return (
      <nav
        data-testid="exam-page-rail"
        data-rail-mode="grouped"
        aria-label="Sections in this mock"
        className="w-full shrink-0 sm:w-44"
      >
        <ol className="flex gap-2 overflow-x-auto pb-1 sm:sticky sm:top-16 sm:flex-col sm:gap-1 sm:overflow-visible sm:pb-0">
          {groups.map((g, i) => {
            const isCurrent = i === currentIndex;
            const done = currentIndex >= 0 && i < currentIndex;
            return (
              <li key={`${g.subTest}-${g.from}`} className="shrink-0 sm:shrink">
                <div
                  data-testid={`exam-rail-group-${g.subTest}`}
                  aria-current={isCurrent ? "step" : undefined}
                  className={
                    "flex items-center gap-2 rounded-lg border px-2 py-1.5 sm:px-3 " +
                    (isCurrent
                      ? "border-almi-coral bg-almi-coral text-almi-ink"
                      : done
                        ? "border-almi-bg-peach bg-almi-bg-peach/60 text-almi-text-muted"
                        : "border-almi-bg-peach bg-almi-paper text-almi-text-muted")
                  }
                >
                  <span
                    aria-hidden
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-xs font-bold"
                  >
                    {g.letter}
                  </span>
                  {/* The word is the first thing dropped when there is no room —
                      never the letter, and never the count. */}
                  <span className="hidden text-sm font-semibold sm:inline">{g.label}</span>
                  <span className="text-xs font-semibold tabular-nums">
                    {isCurrent ? `${pageNumber - g.from + 1}/${g.count}` : g.count}
                  </span>
                  {/* Said in full for a screen reader at every width, because the
                      visible text above is abbreviated at 430px. */}
                  <span className="sr-only">
                    {g.label}, {g.count} {g.count === 1 ? "step" : "steps"}, steps {g.from} to {g.to}
                    {isCurrent ? `. You are on step ${pageNumber}.` : done ? ". Done." : ""}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
        <p data-testid="exam-rail-position" className="mt-1 text-xs text-almi-text-muted sm:mt-2">
          Step {pageNumber} of {pageCount}
        </p>
      </nav>
    );
  }

  return (
    <nav
      data-testid="exam-page-rail"
      data-rail-mode="numbered"
      aria-label="Items in this set"
      className="hidden w-12 shrink-0 sm:block"
    >
      <ol className="sticky top-16 space-y-1">
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => {
          const isCurrent = n === pageNumber;
          return (
            <li key={n}>
              <span
                data-testid={`exam-rail-item-${n}`}
                aria-current={isCurrent ? "step" : undefined}
                className={
                  "flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold " +
                  (isCurrent
                    ? "border-almi-coral bg-almi-coral text-almi-ink"
                    : "border-almi-bg-peach bg-almi-paper text-almi-text-muted")
                }
              >
                {n}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
