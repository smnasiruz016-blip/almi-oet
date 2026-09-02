/**
 * "NEXT EXERCISE →" — the one place this control is written.
 *
 * ── WHY IT MOVED OUT OF OetSessionResult ────────────────────────────────────
 *
 * It used to live inline on the SET result, which meant it appeared only after
 * `PRACTICE_SET_STEPS` completed items. Nasir found that himself:
 *
 *     "i think need to fill and submit the test to be able to click next."
 *
 * A feature built so a learner can walk the library was sitting behind three
 * exercises. It now also renders at the end of EVERY item's result, and both
 * screens render THIS component — one markup, one action, one entitlement
 * check. Two copies would be two things that can drift, and the whole point of
 * the chain is that the number beside the button is true.
 *
 * The set flow is untouched: "Next step →" / "See results →" stay exactly where
 * they were. This is an ADDITIONAL exit, not a replacement — and
 * PRACTICE_SET_STEPS stays at 3, because the ask was "next, next and next", not
 * a longer block.
 *
 * ── EVERY NUMBER HERE COMES FROM THE DATABASE ───────────────────────────────
 *
 * `total`, `position`, `title` and `doneCount` are all fields of ChainView,
 * which chainView() reads through listPool() — the same query the list page
 * renders and the same poolWhere() the picker draws from. Nothing on this
 * component is a literal.
 *
 * ── EXHAUSTION IS SAID OUT LOUD ─────────────────────────────────────────────
 *
 * When the pool is finished this offers starting over as a BUTTON. It never
 * wraps round on its own: a learner quietly handed exercise 1 again after
 * finishing 21 has been told the library is bigger than it is.
 */
import Link from "next/link";
import type { ChainView } from "@/lib/oet/chain";

export function ChainNext({
  chain,
  continueAction,
  /** Styling only. The words, the numbers and the action are identical on both
   *  screens — a learner must not have to learn two controls. */
  tone = "primary",
}: {
  chain: ChainView;
  continueAction: (formData: FormData) => void | Promise<void>;
  tone?: "primary" | "secondary";
}) {
  const button =
    tone === "primary"
      ? "inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
      : "inline-flex min-h-[44px] items-center justify-center rounded-full border border-almi-ink/20 bg-almi-bg px-6 py-2.5 text-sm font-semibold text-almi-ink hover:border-almi-coral";

  return (
    <div
      data-testid="exercise-chain"
      className="rounded-2xl border border-almi-coral/30 bg-almi-coral/5 p-5"
    >
      {chain.next ? (
        <>
          <p data-testid="chain-position" className="text-sm font-semibold text-almi-ink">
            Next up — exercise {chain.next.position} of {chain.total}
          </p>
          <p data-testid="chain-next-title" className="mt-1 text-sm text-almi-text">
            {chain.next.title}
          </p>
          <form action={continueAction} className="mt-4">
            <button type="submit" data-testid="chain-next-button" className={button}>
              Next exercise →
            </button>
          </form>
        </>
      ) : (
        <>
          <p data-testid="chain-exhausted" className="text-sm font-semibold text-almi-ink">
            You have finished all {chain.total} — start again from the top?
          </p>
          <p className="mt-1 text-sm text-almi-text">
            There is nothing new left in this task for your profession. Going round again is useful
            practice; we are not going to pretend it is fresh material.
          </p>
          <form action={continueAction} className="mt-4">
            <input type="hidden" name="restart" value="1" />
            <button type="submit" data-testid="chain-restart-button" className={button}>
              Start again from the top →
            </button>
          </form>
        </>
      )}
      {/* The chain is an option, not a cage. */}
      <p className="mt-4 text-sm">
        <Link
          href={chain.libraryHref}
          data-testid="chain-library-link"
          className="font-semibold text-almi-ink underline"
        >
          Back to all {chain.total} exercises
        </Link>
        <span className="text-almi-text-muted">
          {" "}
          · {chain.doneCount} of {chain.total} done
        </span>
      </p>
    </div>
  );
}
