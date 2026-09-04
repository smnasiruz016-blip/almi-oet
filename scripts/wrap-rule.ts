/**
 * 🔴 THE ONE PLACE THIS PROJECT DECIDES WHAT A HARD WRAP IS.
 *
 * A line break inside authored prose is a WRAP — an artefact of the author's
 * editor — only when all three hold:
 *
 *   1. the line reached the author's wrap column (>= 80 characters)
 *   2. its sentence is UNFINISHED — it does not end in . ? ! : ;
 *   3. the next line starts neither a labelled field nor a bullet
 *
 * ── WHY IT LIVES IN ITS OWN FILE ────────────────────────────────────────────
 *
 * It was a const inside `scripts/fix-hard-wraps.mts`, which connects to the
 * database and runs on import — so the measurement script that tried to import
 * it silently ran the whole repair instead and printed nothing. The same trap
 * `words()` was in. One rule, no side effects, two callers.
 *
 * ── HOW THE RULE GOT ITS THREE CONDITIONS ───────────────────────────────────
 *
 * The first version was "every newline inside a paragraph becomes a space". Run
 * against the live rows it destroyed the case notes, whose header is one FIELD
 * PER LINE:
 *
 *     WESTERGATE DENTAL PRACTICE          ->  WESTERGATE DENTAL PRACTICE Patient:
 *     Patient: Thomas Van Rooyen-Obi          Thomas Van Rooyen-Obi, aged 9 …
 *     Attended: 4 March 2029
 *
 * Conditions 1 and 3 replaced it, and two INDEPENDENT implementations of that —
 * one here, one written separately against the source markdown — agreed on
 * 10,309 of 10,315 Writing breaks and disagreed on 12. (The headline difference
 * was 6; the aggregate hid half of them, because 9 went one way and 3 the other.)
 *
 * The 12 were not a bug in either. EVERY ONE has a previous line that finishes
 * its sentence, so both were arguing about whether to join two complete
 * sentences — which is not the defect. The defect is a sentence cut in half.
 * Condition 2 says exactly that, and under it the disagreement is ZERO.
 *
 * Both detectors did have real false positives, which is why neither was taken
 * whole: a colon inside a clock time ("Telephoned … at 13:15 and explained …")
 * read as a field label, and an ordinary prose colon at 41-44 characters
 * ("…more than magnification: a dark plate…") read as one too. Condition 2 makes
 * both harmless.
 *
 * ── WHAT IT DELIBERATELY LEAVES ─────────────────────────────────────────────
 *
 * 1,557 Writing breaks where the line is long and its sentence IS finished.
 * Those render as one sentence per line — which is what clinical case notes look
 * like — and not one of them is a broken sentence. Left on purpose, and counted
 * out loud by scripts/measure/hard-wraps.mts.
 */

/** A line that begins a list item. The newline before it is structure. */
export const isList = (l: string): boolean => /^\s*[-•*]|^\s*\d+[.)]\s/.test(l);

/** A line that begins a labelled field — "Patient: …", "Age: 54", "The injury:". */
export const isField = (l: string): boolean => /^[A-Z][^:]{0,40}:/.test(l);

/** Does this line finish its sentence? */
export const endsSentence = (l: string): boolean => /[.?!:;]["')\]]?$/.test(l.trimEnd());

/** Is the newline between these two lines a wrap, rather than the author's layout? */
export function isWrapBreak(cur: string, next: string): boolean {
  return (
    cur.trim() !== "" &&
    next.trim() !== "" &&
    cur.length >= 80 &&
    !endsSentence(cur) &&
    !isList(next) &&
    !isField(next)
  );
}

/** Join wrapped lines; leave paragraph breaks, fields and bullets exactly alone. */
export function unwrap(text: string): string {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  let out = "";
  for (let i = 0; i < lines.length; i++) {
    out += lines[i];
    const next = lines[i + 1];
    if (next === undefined) break;
    out += isWrapBreak(lines[i], next) ? " " : "\n";
  }
  // A wrap joined onto a line that already ended in a space would double it.
  return out.replace(/[ \t]{2,}/g, " ").replace(/[ \t]+\n/g, "\n");
}
