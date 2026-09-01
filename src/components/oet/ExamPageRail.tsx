"use client";

/**
 * The numbered rail down the left: which item of this set you are on.
 *
 * `pageCount` is the real length of the set and is passed in from the engine
 * (PRACTICE_SET_STEPS via the session's targetCount) — never retyped here. A rail
 * that said "3" while the set served 5 would be worse than no rail.
 *
 * Arrangement observed on OET's own sample: a numbered rail on the left with the
 * current position marked. Nothing else was taken — no styling, no wording.
 * Dropping <ExamPageRail> from the session page removes this and nothing else.
 */
export function ExamPageRail({
  pageNumber,
  pageCount,
}: {
  pageNumber: number;
  pageCount: number;
}) {
  return (
    <nav
      data-testid="exam-page-rail"
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
