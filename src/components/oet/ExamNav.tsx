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
 * Back is rendered disabled on the first item rather than hidden: a control that
 * appears and disappears is harder to find than one that greys out.
 *
 * Dropping <ExamNav> from the session page removes this and nothing else.
 */
export function ExamNav({ backHref }: { backHref?: string }) {
  return (
    <div
      data-testid="exam-nav"
      className="mt-6 flex items-center justify-end gap-3 border-t border-almi-bg-peach pt-4"
    >
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
  );
}
