/**
 * THE BROWSABLE LIST — every exercise in this learner's pool, numbered 1..N in
 * the order the chain walks them.
 *
 * ── WHY IT IS A COMPONENT AND NOT INLINE MARKUP ─────────────────────────────
 *
 * Two screens need the same list in two states, and a gate needs to render it
 * without a page around it:
 *
 *   subscribed  — every row has a Start / Again button
 *   locked      — the same rows, numbered, titles only, no way in
 *
 * ── 🔴 THE LOCKED STATE SHOWS TITLES AND NOTHING ELSE ───────────────────────
 *
 * A learner without a subscription used to reach `const pool = needsPaid ? []`
 * and land on a page with no browse on it at all, under a card that had just
 * invited them to "Browse & practise". They could not tell the library existed.
 * Titles are enough to prove it does; passages, questions, audio and answer keys
 * live in `payload` and this component never receives one. Decided by Nasir on
 * 1 September 2026 — the alternative on the table was a bare count sentence.
 *
 * ── NUMBERING ───────────────────────────────────────────────────────────────
 *
 * The index printed here is the index the results screen means by "Exercise 4 of
 * 21". Both come from the order listPool() returns (title ascending), so they
 * cannot drift.
 */
import type { ExerciseRow } from "@/lib/oet/pool";

const STATUS_LABEL: Record<ExerciseRow["status"], string> = {
  SCORED: "Done",
  IN_PROGRESS: "In progress",
  NOT_STARTED: "Not started",
};

const STATUS_CLASS: Record<ExerciseRow["status"], string> = {
  SCORED: "bg-almi-teal/15 text-almi-teal",
  IN_PROGRESS: "bg-almi-accent/20 text-almi-ink",
  NOT_STARTED: "bg-almi-bg-peach text-almi-text-muted",
};

export function ExerciseList({
  rows,
  taskSlug,
  professionSlug,
  beginAction,
}: {
  rows: ExerciseRow[];
  taskSlug: string;
  professionSlug: string;
  /** Omitted for a locked learner: no action, so no Start button is rendered.
   *  The absence of the action IS the lock in the markup — there is no button
   *  to disable and no form to post. */
  beginAction?: (formData: FormData) => void | Promise<void>;
}) {
  if (rows.length === 0) return null;
  return (
    <section data-testid="exercise-list">
      <h2
        data-testid="exercise-list-heading"
        className="text-sm font-bold uppercase tracking-wider text-almi-text-muted"
      >
        All <span data-testid="exercise-list-total">{rows.length}</span>{" "}
        {rows.length === 1 ? "exercise" : "exercises"}
      </h2>
      <ul className="mt-3 divide-y divide-almi-bg-peach overflow-hidden rounded-2xl border border-almi-bg-peach bg-almi-paper">
        {rows.map((ex, i) => (
          <li
            key={ex.id}
            data-testid="exercise-row"
            className="flex flex-wrap items-center gap-3 px-4 py-3"
          >
            <span className="w-6 shrink-0 text-xs font-semibold text-almi-text-muted">{i + 1}</span>
            <span data-testid="exercise-title" className="min-w-0 flex-1 text-sm text-almi-ink">
              {ex.title}
            </span>
            <span
              className={
                "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold " + STATUS_CLASS[ex.status]
              }
            >
              {STATUS_LABEL[ex.status]}
            </span>
            {beginAction && (
              <form action={beginAction} className="shrink-0">
                <input type="hidden" name="slug" value={taskSlug} />
                <input type="hidden" name="professionSlug" value={professionSlug} />
                <input type="hidden" name="itemId" value={ex.id} />
                <button
                  type="submit"
                  data-testid="exercise-start"
                  className="inline-flex min-h-[40px] items-center rounded-full border border-almi-ink/15 bg-almi-bg px-4 py-2 text-sm font-semibold text-almi-ink hover:border-almi-coral"
                >
                  {ex.status === "NOT_STARTED" ? "Start" : "Again"}
                </button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
