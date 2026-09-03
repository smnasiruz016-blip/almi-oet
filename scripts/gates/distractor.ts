/**
 * gate:distractor — THE TELL THAT PAID FOR THE WRONG SKILL.
 *
 * Measured across every multiple-choice question in scripts/seed/gen on
 * 2 September 2026, counting how often the correct answer is the UNIQUELY
 * longest option:
 *
 *   LISTENING_PART_B   33 questions   20 · 61%
 *   LISTENING_PART_C   66 questions   48 · 73%
 *   READING_PART_B     33 questions   19 · 58%
 *   READING_PART_C     78 questions   51 · 65%
 *   ── all           210 questions  138 · 66%      by chance: 33%
 *
 * A candidate who reads nothing, listens to nothing and always picks the longest
 * option scores 66% on this bank. That is twice chance, and it holds across all
 * four task types.
 *
 * 🔴 THIS IS WORSE THAN A WRONG ANSWER. A wrong answer teaches nothing; this
 * REWARDS THE WRONG SKILL. Someone practising here is being trained to spot the
 * long option, and the real exam will not pay them for it.
 *
 * It survived a de-game pass, an accept-list repair and three content PRs
 * because nothing in the repository measured it. This gate measures it.
 *
 * FIXING THE 138 IS NOT THIS GATE'S JOB — that is a large authoring task and it
 * is the author's. This stops it growing.
 *
 * ── THE THREE CHECKS ────────────────────────────────────────────────────────
 *
 *   D1  the key is not the uniquely longest option. A tie for longest is fine;
 *       being alone at the top is not.
 *   D2  no option is more than 1.6x the mean length of the others — a tell
 *       whether or not it is the key.
 *   D3  within one taskType, no single option letter holds more than 45% of the
 *       keys.
 *   D4  every MCQ question has the number of options ITS OWN task type's law
 *       gives. Added 3 September 2026.
 *   D5  every option is 1-17 words, the range OET's own options measure.
 *
 * 🔴 D4 EXISTS BECAUSE NOTHING MEASURED HOW MANY OPTIONS THERE WERE.
 *
 * D1 and D2 measure option LENGTHS; gate:length measures TEXT length. Between
 * them they read every Reading Part C question in the bank and never noticed
 * that all 78 offered THREE options where OET gives four. A three-option
 * question is guessed at 33%; the exam pays 25%. It passed every gate we had.
 *
 * ⚠️ AND THE LAW IS NOT UNIFORM — IT IS PER TASK TYPE, from
 * _handoffs/AlmiOET_likhne_ka_zabta.md §2, measured 3 September 2026:
 *
 *     Reading Part B      3 options     3 on all 48   — correct
 *     Reading Part C      4 options     3 on 78, 4 on 168
 *     Listening Part B    3 options     3 on all 33   — correct
 *     Listening Part C    3 options     3 on all 66   — correct
 *
 * Only Reading Part C is wrong. Gating all four at four would have condemned
 * 147 correct questions — which is what assuming a uniform law costs.
 *
 * D5 was measured before it was written: ZERO options in the bank fall outside
 * 1-17 words, so it carries no debt list. It is a hard check from birth.
 *
 * ── THE DEBT LISTS, AND THE RULE THEY SHARE ─────────────────────────────────
 *
 * Each list below is a LITERAL, measured once and checked in. None is computed
 * at build time: a list the gate builds for itself exempts every breach it finds
 * and proves nothing. Each obeys the same two rules as LEGACY_SHORT in
 * gate:length:
 *
 *   · a breach that is NOT on its list  -> exit 1. New content must be clean.
 *   · an entry that now measures CLEAN  -> exit 1, saying so. A stale exemption
 *     is how a debt list turns into a permanent excuse.
 *
 * ── 🔴 A THRESHOLD IS NEVER WIDENED TO ADMIT CONTENT AUTHORED AFTER IT ──────
 *
 * This was tested on 2 September 2026, the day the gate was written. One of
 * fifteen newly authored Reading Part B items breached D2 at 2.00x —
 * "Notice: quality control on blood glucose meters", options of 7 / 12 / 5
 * words. The argument for letting it through was a decent one: the oversized
 * option was a DISTRACTOR and the key was the SHORTEST, so the item worked
 * against the very bias D1 exists to remove.
 *
 * The owner ruled the other way, and the reasoning is worth keeping: ANY option
 * that stands out by size is a signal. A learner who meets three options where
 * one is twice the length of its neighbours learns to treat the odd one as the
 * trap — the same wrong skill D1 removes, only pointing the other way. The
 * distractor was rewritten to nine words; the item now sits inside D2 with the
 * key still the shortest and D1 untouched.
 *
 * CONTENT MOVES; THE THRESHOLD DOES NOT. If a threshold here is ever genuinely
 * wrong, change it in its own commit with its own reason — never as a side
 * effect of making today's item fit.
 *
 * ⚠️ THE COMMAND SIZED ONLY THE FIRST OF THE THREE. It specified a single
 * LEGACY_TELL of "the 138 offending triples", which is D1. Measured here, D2
 * fails on 65 further legacy questions and D3 fails on all
 * 4 MCQ task types — neither reachable by a list of D1 triples. So
 * there are three lists, sized from a real run, and the disagreement is reported
 * rather than resolved by widening a threshold.
 *
 * D3 is an aggregate, not a per-question fact, so its list is a RATCHET: an
 * exempted taskType may not get worse than the percentage recorded here, and
 * when it reaches 45% or below the row must be deleted. That way D3 has teeth
 * today instead of being inert until the legacy items are retired.
 */
import { GEN_ITEMS } from "../seed/gen/index";

type Option = { id: string; text: string };
type Question = { id: string; answer: string; options?: Option[] };
type Item = { taskType: string; title: string; payload?: { questions?: Question[] } };

const words = (s: string | undefined): number =>
  s && s.trim() ? s.trim().split(/\s+/).length : 0;

/** D1 · the key is the uniquely longest option. 138 legacy questions. */
const LEGACY_TELL: string[] = [
  "LISTENING_PART_B::Part B — Arranging a complex discharge::q1",
  "LISTENING_PART_B::Part B — Morning team brief on bed pressures::q1",
  "LISTENING_PART_B::Part B — Reminder about timing of antibiotics::q1",
  "LISTENING_PART_B::Part B — Shortage of a wound dressing size::q1",
  "LISTENING_PART_B::Part B — Switching to a new infusion pump model::q1",
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Discharge concern::q1",
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Hand-hygiene audit::q1",
  "LISTENING_PART_B::OET Form 1 · Listening Part B — X-ray result::q1",
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Home exercises::q1",
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Handling results::q1",
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Low sodium::q1",
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Gloves and hand hygiene::q1",
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Nil by mouth::q1",
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Paracetamol order::q1",
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Escalating concern::q1",
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Sharps bins::q1",
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Transfusion check::q1",
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Timely notes::q1",
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Interpreters::q1",
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Red wristband::q1",
  "LISTENING_PART_C::Part C — A multimodal approach to chronic pain management::q2",
  "LISTENING_PART_C::Part C — Antibiotic stewardship and the 48-hour review::q1",
  "LISTENING_PART_C::Part C — Antibiotic stewardship and the 48-hour review::q2",
  "LISTENING_PART_C::Part C — Building a culture of patient safety on the ward::q1",
  "LISTENING_PART_C::Part C — Building a culture of patient safety on the ward::q2",
  "LISTENING_PART_C::Part C — Honest conversations at the end of life::q1",
  "LISTENING_PART_C::Part C — Improving health literacy through teach-back::q1",
  "LISTENING_PART_C::Part C — Improving health literacy through teach-back::q2",
  "LISTENING_PART_C::Part C — Preventing inpatient falls through hourly rounding::q1",
  "LISTENING_PART_C::Part C — Preventing inpatient falls through hourly rounding::q2",
  "LISTENING_PART_C::Part C — Recognising and preventing clinician burnout::q2",
  "LISTENING_PART_C::Part C — Responding to agitation in dementia care::q1",
  "LISTENING_PART_C::Part C — Responding to agitation in dementia care::q2",
  "LISTENING_PART_C::Part C — Sustaining gains in quality improvement projects::q1",
  "LISTENING_PART_C::Part C — Sustaining gains in quality improvement projects::q2",
  "LISTENING_PART_C::Part C — Tackling malnutrition risk in hospital patients::q1",
  "LISTENING_PART_C::Part C — Tackling malnutrition risk in hospital patients::q2",
  "LISTENING_PART_C::Part C — The first hour in recognising sepsis::q1",
  "LISTENING_PART_C::Part C — The first hour in recognising sepsis::q2",
  "LISTENING_PART_C::Part C — Understanding hesitancy to improve vaccination uptake::q1",
  "LISTENING_PART_C::Part C — Understanding hesitancy to improve vaccination uptake::q2",
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Interview: wound-care nursing::q2",
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Interview: wound-care nursing::q3",
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Interview: wound-care nursing::q4",
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Interview: wound-care nursing::q5",
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy::q1",
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy::q2",
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy::q3",
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy::q4",
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy::q5",
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy::q6",
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Interview: de-escalation in mental health::q3",
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Interview: de-escalation in mental health::q4",
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Interview: de-escalation in mental health::q6",
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Presentation: antimicrobial resistance::q4",
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Presentation: antimicrobial resistance::q5",
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Presentation: antimicrobial resistance::q6",
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Interview: living with chronic pain::q1",
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Interview: living with chronic pain::q2",
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Interview: living with chronic pain::q3",
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Interview: living with chronic pain::q4",
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Interview: living with chronic pain::q5",
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Interview: living with chronic pain::q6",
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Presentation: health literacy::q1",
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Presentation: health literacy::q2",
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Presentation: health literacy::q3",
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Presentation: health literacy::q5",
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Presentation: health literacy::q6",
  "READING_PART_B::Part B — Allergy alert documentation::q1",
  "READING_PART_B::Part B — Complaints procedure acknowledgement::q1",
  "READING_PART_B::Part B — Consent policy for capacity assessment::q1",
  "READING_PART_B::Part B — Equipment recall action notice::q1",
  "READING_PART_B::Part B — Incident reporting timeframe::q1",
  "READING_PART_B::Part B — Infection control hand hygiene memo::q1",
  "READING_PART_B::Part B — Sharps disposal at point of use::q1",
  "READING_PART_B::Part B — Staff rostering swap email::q1",
  "READING_PART_B::OET Form 1 · Reading Part B — Controlled-drugs policy::q1",
  "READING_PART_B::OET Form 2 · Reading Part B — Consent::q1",
  "READING_PART_B::OET Form 2 · Reading Part B — Terminology memo::q1",
  "READING_PART_B::OET Form 2 · Reading Part B — Protected breaks::q1",
  "READING_PART_B::OET Form 2 · Reading Part B — Specimen labelling::q1",
  "READING_PART_B::OET Form 2 · Reading Part B — Safe discharge::q1",
  "READING_PART_B::OET Form 3 · Reading Part B — Penicillin allergy label::q1",
  "READING_PART_B::OET Form 3 · Reading Part B — Early warning scores::q1",
  "READING_PART_B::OET Form 3 · Reading Part B — Bare below the elbows::q1",
  "READING_PART_B::OET Form 3 · Reading Part B — Confidentiality in public areas::q1",
  "READING_PART_B::OET Form 3 · Reading Part B — Verbal orders::q1",
  "READING_PART_C::Part C — Article on shared decision-making::q1",
  "READING_PART_C::Part C — Article on shared decision-making::q2",
  "READING_PART_C::Part C — Evidence, experience and the bedside::q1",
  "READING_PART_C::Part C — Knowing a patient over time::q1",
  "READING_PART_C::Part C — Practising to protect ourselves::q1",
  "READING_PART_C::Part C — Running on empty in the caring professions::q2",
  "READING_PART_C::Part C — Sitting with not knowing::q1",
  "READING_PART_C::Part C — The arithmetic patients actually hear::q1",
  "READING_PART_C::Part C — The lost art of letting people finish::q1",
  "READING_PART_C::Part C — The screen between us::q1",
  "READING_PART_C::Part C — The screen between us::q2",
  "READING_PART_C::Part C — What a good team really shares::q1",
  "READING_PART_C::Part C — What we do with our mistakes::q1",
  "READING_PART_C::Part C — What we do with our mistakes::q2",
  "READING_PART_C::Part C — Whose decision is it anyway::q1",
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q2",
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q3",
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q4",
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q5",
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q6",
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q8",
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q1",
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q2",
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q3",
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q4",
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q5",
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q7",
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q8",
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q1",
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q2",
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q3",
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q5",
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q6",
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q8",
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q1",
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q2",
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q3",
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q5",
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q7",
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q8",
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q1",
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q2",
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q4",
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q6",
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q7",
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q8",
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q2",
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q3",
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q5",
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q6",
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q8",
];

/** D2 · an option more than 1.6x the mean of the others. 65 legacy
 *  questions, with the measured ratio beside each. */
const LEGACY_OVERSIZE: string[] = [
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Low sodium::q1", // 1.71x
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Gloves and hand hygiene::q1", // 1.64x
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Nil by mouth::q1", // 2.29x
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Paracetamol order::q1", // 2.57x
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Sharps bins::q1", // 2.00x
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Transfusion check::q1", // 1.80x
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Timely notes::q1", // 1.80x
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Interpreters::q1", // 2.00x
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Red wristband::q1", // 1.67x
  "LISTENING_PART_C::Part C — Improving health literacy through teach-back::q1", // 1.80x
  "LISTENING_PART_C::Part C — Preventing inpatient falls through hourly rounding::q1", // 2.00x
  "LISTENING_PART_C::Part C — Sustaining gains in quality improvement projects::q2", // 1.71x
  "LISTENING_PART_C::Part C — Tackling malnutrition risk in hospital patients::q1", // 1.80x
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Interview: wound-care nursing::q4", // 2.00x
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Interview: wound-care nursing::q5", // 1.75x
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy::q1", // 1.69x
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy::q2", // 1.78x
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy::q3", // 2.40x
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy::q5", // 3.14x
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy::q6", // 1.80x
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Interview: de-escalation in mental health::q4", // 1.67x
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Interview: de-escalation in mental health::q6", // 1.80x
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Presentation: antimicrobial resistance::q4", // 2.00x
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Presentation: antimicrobial resistance::q5", // 2.00x
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Presentation: antimicrobial resistance::q6", // 2.00x
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Interview: living with chronic pain::q2", // 2.67x
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Interview: living with chronic pain::q3", // 3.20x
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Presentation: health literacy::q1", // 1.78x
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Presentation: health literacy::q5", // 2.00x
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Presentation: health literacy::q6", // 1.80x
  "READING_PART_B::OET Form 2 · Reading Part B — Consent::q1", // 1.75x
  "READING_PART_B::OET Form 2 · Reading Part B — Terminology memo::q1", // 2.29x
  "READING_PART_B::OET Form 2 · Reading Part B — Safe discharge::q1", // 1.80x
  "READING_PART_B::OET Form 3 · Reading Part B — Penicillin allergy label::q1", // 1.75x
  "READING_PART_B::OET Form 3 · Reading Part B — Controlled drugs::q1", // 1.80x
  "READING_PART_B::OET Form 3 · Reading Part B — Bare below the elbows::q1", // 2.00x
  "READING_PART_C::Part C — Article on shared decision-making::q1", // 1.78x
  "READING_PART_C::Part C — Article on shared decision-making::q2", // 2.00x
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q2", // 2.67x
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q3", // 1.67x
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q5", // 2.29x
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q8", // 2.29x
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q2", // 2.00x
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q4", // 2.40x
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q5", // 1.71x
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q8", // 1.80x
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q1", // 1.78x
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q2", // 3.50x
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q3", // 2.20x
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q5", // 2.25x
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q8", // 1.71x
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q2", // 1.75x
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q3", // 2.25x
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q5", // 1.78x
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q7", // 4.00x
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q1", // 1.80x
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q2", // 2.00x
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q4", // 3.14x
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q6", // 2.00x
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q7", // 1.71x
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q2", // 3.00x
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q3", // 2.00x
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q5", // 3.67x
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q6", // 3.00x
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q8", // 4.00x
];

/** D3 · a single option letter holding more than 45% of the keys, per taskType.
 *  A RATCHET: the recorded percentage may not be exceeded, and a taskType that
 *  reaches 45% or below must be deleted from this list. */
const LEGACY_SKEW: { taskType: string; maxPct: number; letter: string }[] = [
  { taskType: "LISTENING_PART_B", maxPct: 58, letter: "a" },
  { taskType: "LISTENING_PART_C", maxPct: 48, letter: "b" },
  { taskType: "READING_PART_B", maxPct: 48, letter: "b" },
  // READING_PART_C left this list on 3 September 2026: the twenty-one
  // full-length items brought it from 50%% "b" to 33%%, under the 45%% cap.
  // The ratchet requires the row to go, and a stale row fails the build.
];

/**
 * D4 · the number of options each task type's law gives.
 * Source: _handoffs/AlmiOET_likhne_ka_zabta.md §2. No row without one.
 */
const OPTION_COUNT_LAW: Record<string, number> = {
  READING_PART_B: 3,
  READING_PART_C: 4,
  LISTENING_PART_B: 3,
  LISTENING_PART_C: 3,
};

/** D5 · the range OET's own options measure. No debt list: measured on
 *  3 September 2026 and nothing in the bank falls outside it. */
const OPTION_WORDS_MIN = 1;
const OPTION_WORDS_MAX = 17;

/**
 * 🔴 HAND-CHECKED-IN, MEASURED 3 SEPTEMBER 2026, MAY ONLY SHRINK.
 *
 * Every question whose option COUNT breaks its task type's law. All 78 are old
 * Reading Part C items; the twenty-one full-length ones added the same day
 * carry four options on all 168 of their questions and are not here.
 *
 * Same two rules as every other debt list here:
 *   · a breach that is NOT listed  -> exit 1. New content must be clean.
 *   · a listed question that now MEETS its law -> exit 1, saying so.
 */
const LEGACY_OPTION_COUNT: string[] = [
  // ── READING_PART_C · 78 question(s), law 4 options ──
  "READING_PART_C::Part C — Article on shared decision-making::q1", // 3 options, law 4
  "READING_PART_C::Part C — Article on shared decision-making::q2", // 3 options, law 4
  "READING_PART_C::Part C — Evidence, experience and the bedside::q1", // 3 options, law 4
  "READING_PART_C::Part C — Evidence, experience and the bedside::q2", // 3 options, law 4
  "READING_PART_C::Part C — Knowing a patient over time::q1", // 3 options, law 4
  "READING_PART_C::Part C — Knowing a patient over time::q2", // 3 options, law 4
  "READING_PART_C::Part C — Practising to protect ourselves::q1", // 3 options, law 4
  "READING_PART_C::Part C — Practising to protect ourselves::q2", // 3 options, law 4
  "READING_PART_C::Part C — Rethinking the value of clinical handover::q1", // 3 options, law 4
  "READING_PART_C::Part C — Rethinking the value of clinical handover::q2", // 3 options, law 4
  "READING_PART_C::Part C — Running on empty in the caring professions::q1", // 3 options, law 4
  "READING_PART_C::Part C — Running on empty in the caring professions::q2", // 3 options, law 4
  "READING_PART_C::Part C — Sitting with not knowing::q1", // 3 options, law 4
  "READING_PART_C::Part C — Sitting with not knowing::q2", // 3 options, law 4
  "READING_PART_C::Part C — The arithmetic patients actually hear::q1", // 3 options, law 4
  "READING_PART_C::Part C — The arithmetic patients actually hear::q2", // 3 options, law 4
  "READING_PART_C::Part C — The lost art of letting people finish::q1", // 3 options, law 4
  "READING_PART_C::Part C — The lost art of letting people finish::q2", // 3 options, law 4
  "READING_PART_C::Part C — The quiet costs of finding more::q1", // 3 options, law 4
  "READING_PART_C::Part C — The quiet costs of finding more::q2", // 3 options, law 4
  "READING_PART_C::Part C — The screen between us::q1", // 3 options, law 4
  "READING_PART_C::Part C — The screen between us::q2", // 3 options, law 4
  "READING_PART_C::Part C — What a good team really shares::q1", // 3 options, law 4
  "READING_PART_C::Part C — What a good team really shares::q2", // 3 options, law 4
  "READING_PART_C::Part C — What we do with our mistakes::q1", // 3 options, law 4
  "READING_PART_C::Part C — What we do with our mistakes::q2", // 3 options, law 4
  "READING_PART_C::Part C — When empathy becomes a clinical skill::q1", // 3 options, law 4
  "READING_PART_C::Part C — When empathy becomes a clinical skill::q2", // 3 options, law 4
  "READING_PART_C::Part C — Whose decision is it anyway::q1", // 3 options, law 4
  "READING_PART_C::Part C — Whose decision is it anyway::q2", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q1", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q2", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q3", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q4", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q5", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q6", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q7", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening::q8", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q1", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q2", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q3", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q4", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q5", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q6", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q7", // 3 options, law 4
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience::q8", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q1", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q2", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q3", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q4", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q5", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q6", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q7", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'::q8", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q1", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q2", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q3", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q4", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q5", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q6", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q7", // 3 options, law 4
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do::q8", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q1", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q2", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q3", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q4", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q5", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q6", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q7", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment::q8", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q1", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q2", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q3", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q4", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q5", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q6", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q7", // 3 options, law 4
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer::q8", // 3 options, law 4
];

const ITEMS = GEN_ITEMS as unknown as Item[];
const failures: string[] = [];
const fail = (msg: string) => failures.push(msg);

const tellExempt = new Set(LEGACY_TELL);
const overExempt = new Set(LEGACY_OVERSIZE);
const skewByType = new Map(LEGACY_SKEW.map((s) => [s.taskType, s]));

const countExempt = new Set(LEGACY_OPTION_COUNT);
const countSeen = new Set<string>();
let optionCountDebt = 0;
const tellSeen = new Set<string>();
const overSeen = new Set<string>();
const skewSeen = new Set<string>();

let mcq = 0;
let tellNow = 0;
const perType = new Map<string, { q: number; keys: Map<string, number> }>();

for (const item of ITEMS) {
  for (const q of item.payload?.questions ?? []) {
    const opts = q.options;
    if (!Array.isArray(opts) || opts.length < 2) continue;
    mcq += 1;
    const key = `${item.taskType}::${item.title}::${q.id}`;
    const lens = opts.map((o) => words(o.text));
    const max = Math.max(...lens);
    const uniqueMax = lens.filter((n) => n === max).length === 1;
    const ki = opts.findIndex((o) => String(o.id) === String(q.answer));

    // ── D1 ──
    const keyIsLongest = uniqueMax && ki >= 0 && lens[ki] === max;
    if (keyIsLongest) {
      tellNow += 1;
      if (tellExempt.has(key)) tellSeen.add(key);
      else fail(`D1 ${key} — the key is the uniquely longest option (${lens[ki]} words)`);
    } else if (tellExempt.has(key)) {
      tellSeen.add(key);
      fail(`D1 ${key} is in LEGACY_TELL but the key is no longer the longest — delete it.`);
    }

    // ── D2 ──
    let worst = 0;
    for (let i = 0; i < lens.length; i++) {
      const others = lens.filter((_, j) => j !== i);
      const mean = others.reduce((a, b) => a + b, 0) / others.length;
      if (mean > 0) worst = Math.max(worst, lens[i] / mean);
    }
    const oversize = worst > 1.6;
    if (oversize) {
      if (overExempt.has(key)) overSeen.add(key);
      else fail(`D2 ${key} — an option is ${worst.toFixed(2)}x the mean of the others`);
    } else if (overExempt.has(key)) {
      overSeen.add(key);
      fail(`D2 ${key} is in LEGACY_OVERSIZE but no longer breaches — delete it.`);
    }

    // ── D4 · how many options, not how long they are ──
    const lawCount = OPTION_COUNT_LAW[item.taskType];
    if (lawCount !== undefined) {
      const listed = countExempt.has(key);
      if (opts.length !== lawCount) {
        if (listed) {
          countSeen.add(key);
          optionCountDebt += 1;
        } else {
          fail(`D4 ${key} — ${opts.length} option(s), law ${lawCount} for ${item.taskType}`);
        }
      } else if (listed) {
        countSeen.add(key);
        fail(`D4 ${key} now has ${lawCount} options — delete it from LEGACY_OPTION_COUNT.`);
      }
    }

    // ── D5 · an option is 1-17 words. No debt list; nothing breaches it. ──
    for (const [oi, o] of opts.entries()) {
      const n = lens[oi];
      if (n < OPTION_WORDS_MIN || n > OPTION_WORDS_MAX) {
        fail(
          `D5 ${key} option "${o.id}" — ${n} words, law ${OPTION_WORDS_MIN}-${OPTION_WORDS_MAX}`,
        );
      }
    }

    const t = perType.get(item.taskType) ?? { q: 0, keys: new Map<string, number>() };
    t.q += 1;
    t.keys.set(String(q.answer), (t.keys.get(String(q.answer)) ?? 0) + 1);
    perType.set(item.taskType, t);
  }
}

// ── D3 ──
for (const [taskType, v] of perType) {
  let best = { letter: "", n: 0 };
  for (const [l, n] of v.keys) if (n > best.n) best = { letter: l, n };
  const pct = Math.round((100 * best.n) / v.q);
  const row = skewByType.get(taskType);
  if (pct > 45) {
    if (!row) {
      fail(`D3 ${taskType} — option "${best.letter}" holds ${pct}% of the keys (cap 45%)`);
    } else {
      skewSeen.add(taskType);
      if (pct > row.maxPct) {
        fail(
          `D3 ${taskType} — skew got WORSE: "${best.letter}" now ${pct}%, recorded ${row.maxPct}%`,
        );
      }
    }
  } else if (row) {
    skewSeen.add(taskType);
    fail(`D3 ${taskType} is in LEGACY_SKEW but is now ${pct}% — delete it.`);
  }
}

// ── the lists cannot rot ────────────────────────────────────────────────────
for (const k of countExempt) {
  if (!countSeen.has(k)) fail(`D4 ${k} is in LEGACY_OPTION_COUNT but not in the bank — delete it.`);
}
for (const k of tellExempt) if (!tellSeen.has(k)) fail(`D1 ${k} is in LEGACY_TELL but not in the bank — delete it.`);
for (const k of overExempt) if (!overSeen.has(k)) fail(`D2 ${k} is in LEGACY_OVERSIZE but not in the bank — delete it.`);
for (const s of LEGACY_SKEW) if (!skewSeen.has(s.taskType)) fail(`D3 ${s.taskType} is in LEGACY_SKEW but has no questions — delete it.`);

// Population before the guard: a gate over nothing passes vacuously.
if (mcq === 0) fail("no multiple-choice question was found — the gate is vacuous");

console.log(`[gate:distractor] ${mcq} multiple-choice question(s) across ${perType.size} task type(s)`);
console.log(`DISTRACTOR DEBT: ${tellNow} questions where the key is the longest option`);
console.log(`OPTION COUNT DEBT: ${optionCountDebt} question(s) with the wrong number of options`);
if (failures.length > 0) {
  console.error(`\n[gate:distractor] ${failures.length} failure(s):`);
  for (const f of failures.slice(0, 40)) console.error(`  ${f}`);
  if (failures.length > 40) console.error(`  …and ${failures.length - 40} more`);
  process.exit(1);
}
console.log("[gate:distractor] all clear");
