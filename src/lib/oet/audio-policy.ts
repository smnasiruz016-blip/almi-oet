/**
 * DOES THIS ATTEMPT'S LISTENING AUDIO PLAY ONCE, OR MAY IT BE REPLAYED?
 *
 * The decision, from the owner on 2026-09-09 (GAP-047):
 *
 *   MOCK      one Play button. No seek, no pause, no download. Once played, it
 *             is spent.
 *   PRACTICE  full controls stay. A learner practising a section SHOULD be able
 *             to replay it — that is how a section is learned. The one-pass rule
 *             belongs to the exam, not to study.
 *
 * ── WHAT WENT WRONG, AND WHY NO GATE COULD HAVE SEEN IT ─────────────────────
 *
 * The screen printed "Plays once, like the real test." and rendered a full
 * native <audio controls> directly beneath it: pause, a SEEK BAR, and Chrome's
 * ⋮ menu with Download and playback speed. So a candidate could scrub back and
 * replay any part of a mock recording as often as they liked, and take the mp3.
 *
 * Two harms, and the first is the serious one. OET Listening is ONE-PASS, and
 * that constraint IS the skill being measured — a candidate who rewinds gets a
 * score that means nothing and has no way to know it. The second is that the
 * sentence and the control contradicted each other on the same screen. The
 * SENTENCE was correct; the control was wrong.
 *
 * Every gate in this repo reads content: words, options, prompts, payloads. None
 * of them can see that a rendered control disagrees with a rendered sentence.
 * The owner found this with his eyes, inside a real mock, on the live product.
 *
 * ── WHY THIS IS A FUNCTION AND NOT A PROP SOMEBODY PASSES ────────────────────
 *
 * Same reason as speakingPrepPolicy in prep-policy.ts, and deliberately the same
 * shape: the mode is DERIVED from the session record, in one place. A rule
 * re-implemented per caller is a rule that is eventually wrong in one of them,
 * and the failure here is silent and in the wrong direction — a mock that lets
 * you rewind looks exactly like a working screen.
 *
 * ── THE DEFAULT IS THE EXAM-LIKE ONE ─────────────────────────────────────────
 *
 * Anything this function cannot positively identify as practice returns
 * onePass: true. A session whose `mode` is null, unrecognised, or some future
 * enum member nobody updated this file for gets the STRICTER behaviour. The
 * failure mode of "too strict" is a learner who cannot replay a practice
 * recording and says so; the failure mode of "too lenient" is a mock score that
 * is quietly meaningless. Only the first is recoverable, and only the first is
 * visible to the person it happens to.
 *
 * The single exception is a genuinely ABSENT session, which per the same rule as
 * prep-policy means a standalone practice item.
 */

/** OET session modes as prisma/schema.prisma declares them, hand-typed here —
 *  the same hand-typing prep-policy.ts chose, for the same reason: the schema is
 *  the source, and an import would make one file's rule depend on another's. */
const MOCK = "MOCK";
const PRACTICE_SET = "PRACTICE_SET";

export type ListeningAudioPolicy = {
  /** true = one Play, no seeking, no pause, no download. false = full controls. */
  onePass: boolean;
  /** Why, in words, so a caller or a log can say what was decided and on what. */
  reason: string;
};

/**
 * Decide from the session the attempt belongs to.
 *
 * @param session the OetSession row, or null/undefined where there is no session
 *                at all (a standalone practice item).
 */
export function listeningAudioPolicy(
  session: { mode?: unknown } | null | undefined,
): ListeningAudioPolicy {
  // No session at all = a standalone practice item. Same rule prep-policy.ts
  // records, and the same measured caveat: no such path exists in this repo
  // today, because /practice/[task] starts a PRACTICE_SET session and redirects.
  // Kept so a future standalone route does not silently inherit the strict path.
  if (session === null || session === undefined) {
    return { onePass: false, reason: "no session — a standalone practice item" };
  }

  const mode = session.mode;
  if (mode === MOCK) {
    return { onePass: true, reason: "session.mode = MOCK — the recording plays once" };
  }
  if (mode === PRACTICE_SET) {
    return { onePass: false, reason: "session.mode = PRACTICE_SET — replay is how a section is learned" };
  }

  return {
    onePass: true,
    reason: `session.mode = ${JSON.stringify(mode)} — not recognised; defaulting to one pass`,
  };
}
