"use client";

/**
 * Back / Next, pinned bottom-right — the position the exam puts them in.
 *
 * 🔴 NEXT IS NOT A LINK, AND THAT IS DELIBERATE. Advancing is a scored
 * submission. A "Next >" that navigated would quietly discard the candidate's
 * answers for that item, which is a worse failure than the button looking inert.
 * The composer's own submit control is the only way forward, and this says so on
 * hover rather than pretending to be a second route.
 *
 * 🔴 AND IT SAYS SO IN WORDS, SINCE 9 SEPTEMBER 2026 (GAP-048). The rule used to
 * live in a `title` attribute — a hover tooltip. THERE IS NO HOVER ON A PHONE, so
 * at 430px a candidate had no way at all to discover why the next step would not
 * open; the button simply looked broken. The owner had to be told the rule out
 * loud, and he built this. It is now visible text, in both modes, because a
 * practice learner meets the same disabled button. The title stays as well: it
 * costs nothing and helps a mouse user who hovers before reading.
 *
 * Back is rendered disabled on the first item rather than hidden: a control that
 * appears and disappears is harder to find than one that greys out.
 *
 * Dropping <ExamNav> from the session page removes this and nothing else.
 */
export function ExamNav({
  backHref,
  sealedNotice,
}: {
  backHref?: string;
  /** Set on a sealed section. States the rule AND that we inferred it. */
  sealedNotice?: string;
}) {
  return (
    <div className="mt-6 border-t border-almi-bg-peach pt-4">
      {sealedNotice && (
        <p
          data-testid="exam-sealed-notice"
          className="mb-3 rounded-xl border border-almi-accent/40 bg-almi-accent/10 px-4 py-2 text-xs text-almi-ink"
        >
          {sealedNotice}
        </p>
      )}
      <div data-testid="exam-nav" className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
        <p
          data-testid="exam-advance-hint"
          className="order-2 text-xs text-almi-text-muted sm:order-none sm:mr-auto"
        >
          Submit your answers to continue — <span className="font-semibold text-almi-ink">Next</span>{" "}
          opens once this step has been marked.
        </p>
        <div className="order-1 flex items-center justify-end gap-3 sm:order-none">
      {backHref ? (
        <a
          data-testid="exam-back"
          href={backHref}
          className="inline-flex min-h-[44px] items-center rounded-full border border-almi-ink/15 bg-almi-paper px-5 py-2 text-sm font-semibold text-almi-ink hover:border-almi-coral"
        >
          &lt; Back
        </a>
      ) : (
        <span
          data-testid="exam-back"
          aria-disabled="true"
          className="inline-flex min-h-[44px] cursor-not-allowed items-center rounded-full border border-almi-bg-peach px-5 py-2 text-sm font-semibold text-almi-text-muted opacity-60"
        >
          &lt; Back
        </span>
      )}
      <span
        data-testid="exam-next"
        aria-disabled="true"
        className="inline-flex min-h-[44px] cursor-not-allowed items-center rounded-full border border-almi-bg-peach px-5 py-2 text-sm font-semibold text-almi-text-muted opacity-60"
        title="Submit your answers to continue"
      >
        Next &gt;
      </span>
        </div>
      </div>
    </div>
  );
}
