/**
 * SECTION RULES — and, more importantly, WHERE EACH ONE COMES FROM.
 *
 * ── WHY PROVENANCE IS A TYPE HERE AND NOT A COMMENT ─────────────────────────
 *
 * On 2026-08-04 someone wrote an invented grade band into scale.ts with the word
 * "re-verified" beside it and no artefact. It read exactly like a sourced number
 * and shipped wrong for 27 days. A comment cannot stop that, because a comment is
 * prose and prose can be confident about anything.
 *
 * So a rule in this file carries a `Provenance` value, and the two kinds are
 * different SHAPES:
 *
 *   { kind: "quoted",   quote, url }              — someone read this sentence
 *   { kind: "inferred", from, because, correctWhen } — nobody did; we reasoned
 *
 * An inference cannot be dressed up as a quote, because it has no `quote` field
 * to put words in. `npm run gate:sources` asserts the shapes, so the distinction
 * survives a careless edit rather than depending on the next reader noticing.
 */

export type Provenance =
  | {
      kind: "quoted";
      /** The sentence, verbatim, as published. */
      quote: string;
      url: string;
      /** When a human last read it at that URL. */
      read: string;
    }
  | {
      kind: "inferred";
      /** The quoted facts this was reasoned FROM. */
      from: string[];
      /** The reasoning, in one sentence. */
      because: string;
      /** Exactly what evidence would settle it, so it can be corrected. */
      correctWhen: string;
    };

export type SectionRule<T> = { value: T; provenance: Provenance };

/**
 * Reading Part A is strictly timed at 15 minutes.
 *
 * QUOTED. Both sentences below are also in TIMING_SOURCES in exam-shape.ts, where
 * the numbers live; this repeats the provenance beside the RULE the product
 * enforces, which is a different claim from the duration itself.
 */
export const READING_PART_A_TIME_LIMIT: SectionRule<{ seconds: number }> = {
  value: { seconds: 15 * 60 },
  provenance: {
    kind: "quoted",
    quote:
      "Part A is strictly timed and you must complete all 20 question items within 15 minutes.",
    url: "https://oet.com/en-us/post/reading-part-a-the-complete-guide",
    read: "2026-08-31",
  },
};

/** Reading Parts B and C share 45 minutes. QUOTED. */
export const READING_PARTS_BC_TIME_LIMIT: SectionRule<{ seconds: number }> = {
  value: { seconds: 45 * 60 },
  provenance: {
    kind: "quoted",
    quote: "You have 45 minutes in total to complete Reading Parts B and C.",
    url: "https://oet.com/en-us/post/reading-part-b-the-complete-guide",
    read: "2026-08-31",
  },
};

/**
 * 🔴 PART A IS SEALED: ONCE IT ENDS, THE CANDIDATE DOES NOT RETURN TO IT.
 *
 * 🔴🔴 THIS IS AN INFERENCE. NOBODY HAS READ OET SAYING IT.
 *
 * OET's Reading page carries an FAQ that would answer this directly. It would not
 * load on 2026-09-01, and the answer was NOT taken from a third-party prep site —
 * a prep site's summary of a rule is not the rule, and copying one would put an
 * unsourced claim in this file wearing a source's clothes.
 *
 * What IS quoted is that Part A is "strictly timed" at 15 minutes, and that Parts
 * B and C have their own separate 45 minutes. A sealed Part A is the reading of
 * those two facts that cannot cheat the candidate: if returning IS allowed, we
 * have practised them under a stricter rule than the exam, which costs them
 * nothing on the day. If returning is NOT allowed and we had let them back, we
 * would have taught a habit the exam punishes.
 *
 * Correct this the moment the FAQ answer is in hand — change `kind` to "quoted"
 * with the sentence and URL in the same edit, or flip `value.sealed` to false.
 */
export const READING_PART_A_NO_RETURN: SectionRule<{ sealed: true }> = {
  value: { sealed: true },
  provenance: {
    kind: "inferred",
    from: [
      "Part A is strictly timed and you must complete all 20 question items within 15 minutes.",
      "You have 45 minutes in total to complete Reading Parts B and C.",
    ],
    because:
      "Part A has its own strict allocation and Parts B and C have a separate one, so time spent " +
      "back in Part A would have to come out of an allocation OET describes as belonging to B and C.",
    correctWhen:
      "OET's Reading FAQ 'can I go back to Part A?' loads and is read by a human. It did not load " +
      "on 2026-09-01 and no third-party summary was used in its place.",
  },
};

/** Task types that run as a sealed section — entered once, not returned to. */
const SEALED_TASK_TYPES = new Set<string>(["READING_PART_A"]);

export function isSealedSection(taskType: string): boolean {
  return READING_PART_A_NO_RETURN.value.sealed && SEALED_TASK_TYPES.has(taskType);
}

/**
 * The sentence shown to a candidate on a sealed section. It states the rule AND
 * that we inferred it — a learner told "you cannot go back" deserves to know
 * whether that is the exam's rule or ours, especially while it is ours.
 */
export function sealedSectionNotice(sectionLabel: string): string {
  return (
    `${sectionLabel} is strictly timed and sealed: once it ends you can't return to it. ` +
    `OET publishes the 15-minute limit; the no-return part is our reading of it, not a rule we ` +
    `have seen OET state, so we practise the stricter version.`
  );
}
