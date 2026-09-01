/**
 * MAY THE LEARNER SKIP THE SPEAKING PREPARATION PHASE?
 *
 * The decision, from the owner on 2026-09-01: skippable in practice, mandatory
 * in a full mock, and the practice screen must SAY that the mock and the real
 * exam give no skip — so a learner who skips knows exactly what they are opting
 * out of, rather than discovering it on exam day.
 *
 * ── WHY THIS IS A FUNCTION AND NOT A PROP SOMEBODY PASSES ────────────────────
 *
 * The mode is DERIVED from the session record, in one place, by this function.
 * Every caller shares this code rather than re-deciding, because a rule that is
 * re-implemented per caller is a rule that is eventually wrong in one of them —
 * and the failure would be silent and in the wrong direction: a mock quietly
 * offering a skip looks like a working screen.
 *
 * ── THE DEFAULT IS THE EXAM-LIKE ONE ─────────────────────────────────────────
 *
 * Anything this function cannot positively identify as practice returns
 * allowSkip: false. A session whose `mode` is null, unrecognised, or some future
 * enum member nobody updated this file for gets the STRICTER behaviour. The
 * failure mode of "too strict" is a learner who waits two minutes they did not
 * have to; the failure mode of "too lenient" is a mock test that is not a mock
 * test. Only the first is recoverable.
 *
 * The single exception is a genuinely ABSENT session, which per the owner's rule
 * means a standalone practice item — see below.
 */

/** OET session modes as prisma/schema.prisma declares them, hand-typed here. */
const MOCK = "MOCK";
const PRACTICE_SET = "PRACTICE_SET";

export type PrepPolicy = {
  /** true = render a "Skip preparation" button. false = the phase is mandatory. */
  allowSkip: boolean;
  /** Why, in words, so a caller or a log can say what was decided and on what. */
  reason: string;
};

/**
 * Decide from the session the attempt belongs to.
 *
 * @param session the OetSession row, or null/undefined where there is no session
 *                at all (a standalone practice item).
 */
export function speakingPrepPolicy(
  session: { mode?: unknown } | null | undefined,
): PrepPolicy {
  // No session at all = a standalone practice item. The owner's rule: practice.
  //
  // ⚠️ MEASURED 2026-09-01: no such path currently exists in this repo.
  // /practice/[task] does not render a composer — it calls startSession({ mode:
  // "PRACTICE_SET" }) and redirects to /practice/session/[id], so every attempt
  // reaching OetComposer today has a session with a mode. This branch is
  // therefore correct-but-unreached by the product, and is exercised only by
  // scripts/gates/timing.tsx. It is kept because the rule was specified, and
  // because a future standalone route must not silently inherit the strict path.
  if (session === null || session === undefined) {
    return { allowSkip: true, reason: "no session — a standalone practice item" };
  }

  const mode = session.mode;
  if (mode === MOCK) {
    return { allowSkip: false, reason: "session.mode = MOCK — preparation is mandatory" };
  }
  if (mode === PRACTICE_SET) {
    return { allowSkip: true, reason: "session.mode = PRACTICE_SET — practice" };
  }

  return {
    allowSkip: false,
    reason: `session.mode = ${JSON.stringify(mode)} — not recognised; defaulting to no skip`,
  };
}
