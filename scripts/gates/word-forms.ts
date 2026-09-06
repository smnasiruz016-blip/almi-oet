/**
 * 🔴 THE ONE PLACE THIS PROJECT DECIDES WHETHER TWO STRINGS ARE THE SAME WORD.
 *
 * A companion to ./words.ts (what a word is) and ./text-words.ts (which fields a
 * length law counts). This decides, for gate:accept-lists checks A11 and A12,
 * whether a word in an authored variant is a word the item's own audio script or
 * printed text actually says.
 *
 * ── WHY IT MOVED OUT OF accept-lists.ts, 7 SEPTEMBER 2026 ───────────────────
 *
 * It was asked a question it could not answer from inside the gate: HOW MANY
 * ROWS PASS ONLY BECAUSE sameWordAnotherForm() FIRED? On 6 September the
 * accept-list variant `outer thigh` was found to have been passing A12 for
 * months because the item's text contained the ordinary word `out` — shared
 * prefix of three, remainder `er`, which INFLECTION allows. The word `outer`
 * was never in that text at all. The row was passing on a coincidence of
 * wording, and nothing could count how many others were.
 *
 * accept-lists.ts is a SCRIPT, not a library: importing it runs the whole gate.
 * So the rule moved here, where anything can read it and nothing runs — exactly
 * what was done for text-words.ts on 6 September, and for the same reason.
 *
 * 🔴 THIS WAS A MOVE, NOT A CHANGE. Every literal below is byte-identical to
 * what it replaced, and gate:accept-lists reports the same numbers across it.
 * The one addition is `matchInSource`, which returns WHY a word matched instead
 * of only whether it did; `wordInSource` is defined in terms of it, so there is
 * still one implementation and a measurement cannot drift from the rule it is
 * measuring.
 */
import { normalizeTokens } from "../../src/lib/oet/tasks/objective";

/** 🔴 THE WRITTEN EXEMPTION LIST. Short on purpose. Every entry is an
 *  abbreviation or a spelling of something the audio DOES say — never a
 *  different word. Adding to it is a decision, which is why each carries its
 *  reason here in the file rather than in a commit message. */
export const AUDIO_EXEMPT: Record<string, string> = {
  mcg: "abbreviation of micrograms",
  ug: "ASCII spelling of the µg abbreviation for micrograms",
  kg: "abbreviation of kilos",
  c: "abbreviation of celsius",
  celsius: "the unit the script says as 'degrees'; same unit, written out",
  center: "US spelling of centre",
  "7/10": "the figures for 'seven out of ten'",
};

/** Keyed by the NORMALISED token, because that is what the check compares.
 *  Written out above in the form a person recognises; folded here once —
 *  "celsius" normalises to "celsiu", and an exemption that never matched would
 *  be an exemption that silently did nothing. */
export const AUDIO_EXEMPT_TOKENS = new Map<string, string>(
  Object.entries(AUDIO_EXEMPT).flatMap(([k, why]) =>
    normalizeTokens(k).map((t) => [t, why] as [string, string]),
  ),
);

/** Words that carry no answer. Not checked against the audio, because A11 is
 *  about what was HEARD, not about how a candidate joined the words up. */
export const FUNCTION_WORDS = new Set([
  "a", "an", "the", "and", "or", "of", "to", "in", "on", "at", "for", "with",
  "is", "was", "are", "were", "be", "been", "it", "its", "that", "this",
  "my", "your", "his", "her", "their", "she", "he", "they", "i", "we",
  "not", "no", "out", "up", "down", "over", "under", "from", "as", "so",
  // "can't" tokenises to "can" + "t"; "cannot" is the same words spelled shut.
  "can", "cannot", "cant", "t",
]);

/** Inflectional endings — the difference between two forms of ONE word. The
 *  optional doubled consonant covers sit→sitting, and the list is written out
 *  rather than inferred so that adding to it is a visible decision. */
//
// ⚠️ `ised` and `age` were added on 2 September 2026 because the Reading audit
// names `mobile → mobilised` and `dose → dosage` as forms that MUST survive —
// "ek hi lafz ka khandan", one word's family. Without them A12 flagged two
// variants their own author had already ruled on, which would have been the
// checker disagreeing with the rule it exists to enforce.
//
// `age` is the looser of the two: with a three-letter shared stem it also makes
// "man"/"manage" and "pack"/"package" read as one word. That is a real cost and
// it is accepted knowingly — it can only ever let a variant PASS the audio/text
// check, never change how a candidate is marked.
export const INFLECTION =
  /^(|e|d|s|es|ed|y|ie|ies|th|le|ly|er|est|al|age|ion|ised|less|ness|iness|ity|ility|ment|ement|ation|ating|ying|tion|sion|[bcdfglmnprstz]?(ing|ed|er|est))$/;

export function sharedPrefix(a: string, b: string): number {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i += 1;
  return i;
}

/** Are these two the same word in different forms? */
export function sameWordAnotherForm(a: string, b: string): boolean {
  const n = sharedPrefix(a, b);
  if (n < 3) return false;
  return INFLECTION.test(a.slice(n)) && INFLECTION.test(b.slice(n));
}

/**
 * How a word is covered by a source, or null if it is not.
 *
 * `exact` — the source says this very token.
 * `form`  — the source says another form of it, per sameWordAnotherForm. The
 *           evidence is returned WITH the verdict: which token, how many letters
 *           they share, and the two remainders INFLECTION accepted. A row that
 *           passes on `form` alone is a row nobody has read, and until 7
 *           September there was no way to list them.
 */
export type SourceMatch =
  | { how: "exact"; token: string }
  | { how: "form"; token: string; shared: number; remainderVariant: string; remainderSource: string };

export function matchInSource(word: string, sourceWords: Set<string>): SourceMatch | null {
  if (sourceWords.has(word)) return { how: "exact", token: word };
  for (const s of sourceWords) {
    if (!sameWordAnotherForm(word, s)) continue;
    const n = sharedPrefix(word, s);
    return { how: "form", token: s, shared: n, remainderVariant: word.slice(n), remainderSource: s.slice(n) };
  }
  return null;
}

/** The predicate the gate asks. Defined on matchInSource so the measurement and
 *  the rule can never be two different things. */
export function wordInSource(word: string, sourceWords: Set<string>): boolean {
  return matchInSource(word, sourceWords) !== null;
}
