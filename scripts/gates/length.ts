/**
 * gate:length — THE LENGTH LAW, AND THE DEBT IT MAKES VISIBLE.
 *
 * ── 🔴 THE LAW, AND WHERE EVERY NUMBER COMES FROM ───────────────────────────
 *
 * Every bound below is cited. The first version of this table was written from a
 * prose summary rather than from the measured files, and four of the six laws
 * were wrong — READING_PART_A wrong in SHAPE, not only in numbers. A law with no
 * citation is how that happened, so no bound may be added here without one.
 *
 * Two source files, both measured from OET's own twenty sample papers:
 *   ZABTA     C:\Projects\_handoffs\AlmiOET_likhne_ka_zabta.md
 *   MEASURED  C:\Projects\_handoffs\AlmiOET_official_measured_2026-09-01.md
 *
 *   LISTENING_PART_A  550-600   ZABTA §2 line 38 ("550–600 lafz ka script", 12 gaps)
 *   LISTENING_PART_B  140-165   ZABTA §2 line 39 ("140–165 lafz")
 *   LISTENING_PART_C  780-880   ZABTA §2 line 40 ("780–880 lafz")
 *   READING_PART_A    885-1009  MEASURED line 73 ("chaar text + 20 sawal, kul |
 *                               885 – 976 – 1009 lafz") — low, median, high
 *   READING_PART_B    136-155   ZABTA §2 line 36; MEASURED line 57 ("136 – 155
 *                               lafz (naapa gaya)")
 *   READING_PART_C    653-836   MEASURED line 16 ("text ki lambai | 653 – 812 –
 *                               836") — low, median, high
 *
 * ⚠️ READING_PART_C: 653-836 IS THE LAW, 750-850 IS THE AUTHORING TARGET.
 * The two sources disagreed — MEASURED line 16 records OET's own Part C texts
 * at 653 – 812 – 836, ZABTA §2 line 37 says 750–850 — and the owner ruled on
 * 3 September 2026: WHERE A MEASURED RANGE AND A ROUND NUMBER DISAGREE, THE
 * MEASUREMENT GOVERNS. 750–850 reads as a round-numbered target derived from
 * the measurement rather than a second measurement of its own, so it stays as
 * the range to AUTHOR inside, and 653-836 is the range this gate enforces. A
 * new Part C text should be written at 750-850; it is not in BREACH until it
 * leaves 653-836.
 *
 * THIS CHANGED NO VERDICT ON THE DAY IT WAS ADOPTED, and that is why it was
 * safe to adopt: every one of the 21 Part C items is under 420 words, so both
 * candidate floors fail all 21 identically. Nothing was rescued or condemned
 * by the change.
 *
 * ── 🔴 READING PART A IS MEASURED COMBINED ──────────────────────────────────
 *
 * OET measured the four texts AND the twenty question stems together, as one
 * number: 885 – 976 – 1009. Measuring the texts alone against a 560-640 bound —
 * which is what this gate did before — let fifteen items pass at 770-846
 * combined when the real floor is 885. All fifteen were already in production.
 *
 * So textWords() for READING_PART_A sums every payload.texts[].body PLUS every
 * payload.questions[].stem.
 *
 * OPTION TEXT IS DELIBERATELY EXCLUDED, and this is not an oversight to
 * re-derive: in Part A the only questions carrying options are the matching
 * questions, and their options are the bare letters "A", "B", "C", "D". They
 * contribute four tokens per matching question of pure noise and nothing that a
 * candidate reads as prose. The short-answer and gap questions carry no options
 * at all.
 *
 * ── THE DEBT ────────────────────────────────────────────────────────────────
 *
 * A learner who trains on a 75-word Part A and then sits a 550-word Part A has
 * not been prepared. That is the debt. This gate stops it growing and counts it
 * out loud on every build.
 *
 * ── 🔴 HOW THE DEBT LIST WORKS ──────────────────────────────────────────────
 *
 * LEGACY_SHORT below is a LITERAL, copied from a measured run and checked in.
 * It is never built at build time: a list the gate computes for itself exempts
 * every breach it finds and proves nothing.
 *
 * It may only SHRINK.
 *   · a breach whose title is NOT in the list  -> exit 1. A new short item must
 *     never ship.
 *   · a title in the list that now MEETS the law -> exit 1, saying so. A stale
 *     exemption is how a debt list turns into a permanent excuse.
 *
 * ⚠️ THE LIST WAS REBUILT ON 3 SEPTEMBER 2026, AND THAT REBUILD IS THE ONE TIME
 * IT HAS GROWN. The previous 146 rows were measured under the four wrong laws
 * above, so both their membership and their printed counts were wrong. Every row
 * below carries a count re-measured on 3 September 2026 under the corrected law.
 * Membership moved by exactly one item: all 146 previous rows still breach, and
 *   READING_PART_B::Part B — Interpreter use during clinical consultations
 * joins them — it is 100 words, which met the old and wrong 100-150 bound (it was
 * the single item that passed it) and does not meet the measured 136-155. It is
 * an old bank item, not a new one; nothing short has been allowed to ship. From
 * here the may-only-shrink rule applies again with no exception.
 *
 * Every run prints LEGACY DEBT: <n>, so the number is in front of us.
 *
 * It also carries the FINDABILITY check — a Reading Part A answer must appear in
 * its own texts, because the instruction on the page says the answer comes from
 * them. See the block above the report for why that is here and not in
 * gate:accept-lists.
 *
 * ── WHAT "MEETS THE LAW" MEANS ──────────────────────────────────────────────
 *
 * Length, plus the structural rules that come with it where the law states one:
 * Listening Part A carries exactly 12 gaps, LISTENING PART C EXACTLY 6 QUESTIONS,
 * Reading Part A exactly 4 texts and 20 questions. An exempted title is exempt
 * from the whole of its law, because the legacy items breach the structure as
 * well as the length — a 49-word Part A has 4 gaps, not 12.
 *
 * 🔴 THE PART C QUESTION COUNT WAS ADDED ON 3 SEPTEMBER 2026, AND IT NEEDED NO
 * NEW DEBT LIST. The command that asked for it expected a second hand-typed list
 * of 21 legacy rows. Measured instead of assumed: 15 of the 21 legacy Part C
 * items carry 2 questions and 6 carry 6, and ALL 21 ARE ALREADY IN LEGACY_SHORT
 * for their length. Because an exempted title is exempt from the whole of its
 * law — the rule directly above, which is how the 12-gap rule already works —
 * a second list would have had zero rows in it. A gate over an empty list proves
 * nothing, and adding one would have been the new standard, not the existing one.
 *
 * 🔴 WHAT COUNTS AS A WORD — RULED 3 SEPTEMBER 2026
 *
 *     A TOKEN COUNTS AS A WORD ONLY IF IT CONTAINS AT LEAST ONE LETTER OR DIGIT.
 *     An em dash is not a word. A bullet hyphen is not a word.
 *
 * OET's own figures — 885, 976, 1009 — are counts of words. A gate that counts
 * punctuation as words is not measuring what OET measured. Until this change
 * `words()` split on whitespace and counted a standalone "—" and a bullet "-"
 * as words, reading every item 6-14 tokens LONGER than it is.
 *
 * WHICH WAY THE OLD ERROR RAN MATTERS: counting dashes made items look longer,
 * so the gate was LENIENT AT THE FLOOR — an item could have cleared 885 on the
 * strength of its punctuation. This change makes it stricter, which is the
 * direction the law points.
 *
 * 🔴 IT LANDED IN ITS OWN COMMIT, AFTER the one item that straddled the ceiling
 * had been cut, so nobody reading this later can mistake a correctness fix for a
 * convenience. THE INSTRUMENT IS NEVER CHANGED TO ADMIT CONTENT AUTHORED BEFORE
 * IT. Every count in LEGACY_SHORT below was re-measured from the run that made
 * this change; none was carried over.
 *
 * AND IT MOVED NO VERDICT. All 177 governed items were measured under both
 * tokenisers before the change was made: ZERO items cross a bound either way, so
 * LEGACY_SHORT's membership is identical and LEGACY DEBT stays 147. Only the
 * printed counts fall. That is what a correctness fix on an instrument should
 * look like when the content is already well clear of its bounds — and it is the
 * reason this was safe to do at all.
 */
import { GEN_ITEMS } from "../seed/gen/index";

type Item = {
  taskType: string;
  title: string;
  payload: {
    audioScript?: string;
    gaps?: unknown[];
    texts?: { heading?: string; body?: string }[];
    passages?: { body?: string }[];
    questions?: { id?: string; kind?: string; stem?: string; answer?: string }[];
  };
};

/**
 * taskType -> [min, max] words of the item's own text. Sources for every bound
 * are in the header block above; do not add a row here without one.
 */
const LAW: Record<string, [number, number]> = {
  LISTENING_PART_A: [550, 600],
  LISTENING_PART_B: [140, 165],
  LISTENING_PART_C: [780, 880],
  READING_PART_A: [885, 1009],
  READING_PART_B: [136, 155],
  READING_PART_C: [653, 836],
};

/**
 * 🔴 HAND-CHECKED-IN, MEASURED, MAY ONLY SHRINK. Each line carries the word
 * count measured on 3 September 2026 UNDER THE CORRECTED LAW AND THE RULED
 * TOKENISER, so a reader can see how far short an item is without re-running
 * anything.
 *
 * Every count here was RE-MEASURED from the run that made the tokeniser change;
 * none was carried over. 60 of the 147 fell, because those items carry
 * standalone punctuation the old whitespace split counted as words.
 *
 * MEMBERSHIP IS IDENTICAL, and that was established before the change rather
 * than discovered after it: all 177 governed items were measured under BOTH
 * tokenisers, and not one crosses a bound either way. So the may-only-shrink
 * rule is not being bent by a rebuild here. The Reading Part A counts are texts
 * + question stems combined.
 */
const LEGACY_SHORT: string[] = [
  // ── LISTENING_PART_A · 21 item(s), law 550-600 words ──
  "LISTENING_PART_A::Part A — Ankle injury after a fall", // 114 words
  "LISTENING_PART_A::Part A — Antenatal visit", // 65 words
  "LISTENING_PART_A::Part A — Asthma flare-up", // 74 words
  "LISTENING_PART_A::Part A — Chest pain assessment", // 78 words
  "LISTENING_PART_A::Part A — Child with fever", // 61 words
  "LISTENING_PART_A::Part A — Diabetes annual check", // 75 words
  "LISTENING_PART_A::Part A — Knee pain consultation", // 49 words
  "LISTENING_PART_A::Part A — Lower back pain", // 71 words
  "LISTENING_PART_A::Part A — Medication side-effect", // 77 words
  "LISTENING_PART_A::Part A — Mental-health check-in", // 72 words
  "LISTENING_PART_A::Part A — Migraine review", // 78 words
  "LISTENING_PART_A::Part A — New skin rash", // 56 words
  "LISTENING_PART_A::Part A — Ongoing sleep problem", // 75 words
  "LISTENING_PART_A::Part A — Post-operative wound check", // 60 words
  "LISTENING_PART_A::Part A — Suspected urinary infection", // 69 words
  "LISTENING_PART_A::OET Form 1 · Listening Part A — Physiotherapy consultation (lower back pain)", // 229 words
  "LISTENING_PART_A::OET Form 1 · Listening Part A — Dietitian consultation (type 2 diabetes)", // 193 words
  "LISTENING_PART_A::OET Form 2 · Listening Part A — Occupational therapy home visit (post-stroke)", // 190 words
  "LISTENING_PART_A::OET Form 2 · Listening Part A — Practice-nurse asthma review", // 161 words
  "LISTENING_PART_A::OET Form 3 · Listening Part A — Physiotherapist and lower back pain", // 210 words
  "LISTENING_PART_A::OET Form 3 · Listening Part A — Midwife antenatal booking visit", // 197 words
  // ── LISTENING_PART_B · 33 item(s), law 140-165 words ──
  "LISTENING_PART_B::Part B — Alert about a norovirus outbreak", // 53 words
  "LISTENING_PART_B::Part B — Arranging a complex discharge", // 51 words
  "LISTENING_PART_B::Part B — Changes to the weekend roster", // 51 words
  "LISTENING_PART_B::Part B — Feedback from a hand hygiene audit", // 49 words
  "LISTENING_PART_B::Part B — Following up a patient complaint", // 51 words
  "LISTENING_PART_B::Part B — Handover extract", // 37 words
  "LISTENING_PART_B::Part B — Morning team brief on bed pressures", // 53 words
  "LISTENING_PART_B::Part B — Note on mandatory manual handling training", // 47 words
  "LISTENING_PART_B::Part B — Reminder about timing of antibiotics", // 57 words
  "LISTENING_PART_B::Part B — Revised visiting hours policy", // 53 words
  "LISTENING_PART_B::Part B — Safeguarding reminder for new admissions", // 52 words
  "LISTENING_PART_B::Part B — Shortage of a wound dressing size", // 53 words
  "LISTENING_PART_B::Part B — Switching to a new infusion pump model", // 56 words
  "LISTENING_PART_B::Part B — Updated dressing trolley protocol", // 84 words
  "LISTENING_PART_B::Part B — Verbal handover for a post-operative patient", // 53 words
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Discharge concern", // 46 words
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Hand-hygiene audit", // 28 words
  "LISTENING_PART_B::OET Form 1 · Listening Part B — X-ray result", // 33 words
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Home exercises", // 30 words
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Infusion pump training", // 33 words
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Handling results", // 33 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Low sodium", // 34 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Gloves and hand hygiene", // 35 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Nil by mouth", // 36 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Paracetamol order", // 39 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Escalating concern", // 41 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Chest pain at reception", // 38 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Sharps bins", // 43 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Transfusion check", // 48 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Timely notes", // 41 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Oxygen as a drug", // 42 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Interpreters", // 39 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Red wristband", // 44 words
  // ── LISTENING_PART_C · 21 item(s), law 780-880 words ──
  "LISTENING_PART_C::Part C — A multimodal approach to chronic pain management", // 141 words
  "LISTENING_PART_C::Part C — Antibiotic stewardship and the 48-hour review", // 132 words
  "LISTENING_PART_C::Part C — Building a culture of patient safety on the ward", // 139 words
  "LISTENING_PART_C::Part C — Honest conversations at the end of life", // 138 words
  "LISTENING_PART_C::Part C — Improving health literacy through teach-back", // 138 words
  "LISTENING_PART_C::Part C — Making telehealth consultations safe and effective", // 142 words
  "LISTENING_PART_C::Part C — Preventing inpatient falls through hourly rounding", // 137 words
  "LISTENING_PART_C::Part C — Recognising and preventing clinician burnout", // 133 words
  "LISTENING_PART_C::Part C — Reducing medication errors with quiet zones", // 157 words
  "LISTENING_PART_C::Part C — Responding to agitation in dementia care", // 134 words
  "LISTENING_PART_C::Part C — Sustaining gains in quality improvement projects", // 138 words
  "LISTENING_PART_C::Part C — Tackling malnutrition risk in hospital patients", // 141 words
  "LISTENING_PART_C::Part C — Talk on hydration in older adults", // 59 words
  "LISTENING_PART_C::Part C — The first hour in recognising sepsis", // 145 words
  "LISTENING_PART_C::Part C — Understanding hesitancy to improve vaccination uptake", // 141 words
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Interview: wound-care nursing", // 305 words
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy", // 238 words
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Interview: de-escalation in mental health", // 217 words
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Presentation: antimicrobial resistance", // 151 words
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Interview: living with chronic pain", // 254 words
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Presentation: health literacy", // 240 words
  // ── READING_PART_A · 18 item(s), law 885-1009 words ──
  "READING_PART_A::Part A — Aseptic non-touch technique", // 133 words
  "READING_PART_A::Part A — Discharge planning checklist", // 130 words
  "READING_PART_A::Part A — Falls risk assessment", // 145 words
  "READING_PART_A::Part A — Hand hygiene texts", // 86 words
  "READING_PART_A::Part A — Informed consent essentials", // 129 words
  "READING_PART_A::Part A — Insulin storage and handling", // 140 words
  "READING_PART_A::Part A — Malnutrition screening", // 128 words
  "READING_PART_A::Part A — Oxygen cylinder safety", // 130 words
  "READING_PART_A::Part A — Pain assessment methods", // 141 words
  "READING_PART_A::Part A — Preventing pressure injuries in immobile patients", // 234 words
  "READING_PART_A::Part A — Repositioning for skin protection", // 136 words
  "READING_PART_A::Part A — Safe patient transfers", // 126 words
  "READING_PART_A::Part A — Source isolation precautions", // 131 words
  "READING_PART_A::Part A — Urinary catheter care", // 136 words
  "READING_PART_A::Part A — Wound dressing selection", // 144 words
  "READING_PART_A::OET Form 1 · Reading Part A — Preventing pressure injuries", // 375 words
  "READING_PART_A::OET Form 2 · Reading Part A — Preventing falls in older adults", // 364 words
  "READING_PART_A::OET Form 3 · Reading Part A — Delirium in hospital", // 342 words
  // ── READING_PART_B · 33 item(s), law 136-155 words ──
  "READING_PART_B::Part B — Allergy alert documentation", // 89 words
  "READING_PART_B::Part B — Audit memo on documentation timing", // 80 words
  "READING_PART_B::Part B — Clinical escalation policy", // 88 words
  "READING_PART_B::Part B — Complaints procedure acknowledgement", // 85 words
  "READING_PART_B::Part B — Consent policy for capacity assessment", // 78 words
  "READING_PART_B::Part B — Controlled drugs second check", // 76 words
  "READING_PART_B::Part B — Data protection record access", // 80 words
  "READING_PART_B::Part B — Equipment recall action notice", // 81 words
  "READING_PART_B::Part B — Incident reporting timeframe", // 73 words
  "READING_PART_B::Part B — Infection control hand hygiene memo", // 82 words
  "READING_PART_B::Part B — Interpreter use during clinical consultations", // 100 words
  "READING_PART_B::Part B — Medicines policy extract", // 38 words
  "READING_PART_B::Part B — Sharps disposal at point of use", // 80 words
  "READING_PART_B::Part B — Staff rostering swap email", // 87 words
  "READING_PART_B::Part B — Visiting policy on protected mealtimes", // 74 words
  "READING_PART_B::OET Form 1 · Reading Part B — Controlled-drugs policy", // 47 words
  "READING_PART_B::OET Form 1 · Reading Part B — Sharps memo", // 37 words
  "READING_PART_B::OET Form 1 · Reading Part B — Hand-hygiene guideline", // 40 words
  "READING_PART_B::OET Form 1 · Reading Part B — Medicine label", // 29 words
  "READING_PART_B::OET Form 1 · Reading Part B — Visitor notice", // 35 words
  "READING_PART_B::OET Form 1 · Reading Part B — Handover note", // 38 words
  "READING_PART_B::OET Form 2 · Reading Part B — Consent", // 36 words
  "READING_PART_B::OET Form 2 · Reading Part B — Vaccine fridge log", // 46 words
  "READING_PART_B::OET Form 2 · Reading Part B — Terminology memo", // 28 words
  "READING_PART_B::OET Form 2 · Reading Part B — Protected breaks", // 34 words
  "READING_PART_B::OET Form 2 · Reading Part B — Specimen labelling", // 32 words
  "READING_PART_B::OET Form 2 · Reading Part B — Safe discharge", // 33 words
  "READING_PART_B::OET Form 3 · Reading Part B — Penicillin allergy label", // 59 words
  "READING_PART_B::OET Form 3 · Reading Part B — Controlled drugs", // 45 words
  "READING_PART_B::OET Form 3 · Reading Part B — Early warning scores", // 53 words
  "READING_PART_B::OET Form 3 · Reading Part B — Bare below the elbows", // 44 words
  "READING_PART_B::OET Form 3 · Reading Part B — Confidentiality in public areas", // 44 words
  "READING_PART_B::OET Form 3 · Reading Part B — Verbal orders", // 46 words
  // ── READING_PART_C · 21 item(s), law 653-836 words ──
  "READING_PART_C::Part C — Article on shared decision-making", // 51 words
  "READING_PART_C::Part C — Evidence, experience and the bedside", // 136 words
  "READING_PART_C::Part C — Knowing a patient over time", // 146 words
  "READING_PART_C::Part C — Practising to protect ourselves", // 131 words
  "READING_PART_C::Part C — Rethinking the value of clinical handover", // 229 words
  "READING_PART_C::Part C — Running on empty in the caring professions", // 128 words
  "READING_PART_C::Part C — Sitting with not knowing", // 145 words
  "READING_PART_C::Part C — The arithmetic patients actually hear", // 151 words
  "READING_PART_C::Part C — The lost art of letting people finish", // 125 words
  "READING_PART_C::Part C — The quiet costs of finding more", // 130 words
  "READING_PART_C::Part C — The screen between us", // 133 words
  "READING_PART_C::Part C — What a good team really shares", // 136 words
  "READING_PART_C::Part C — What we do with our mistakes", // 144 words
  "READING_PART_C::Part C — When empathy becomes a clinical skill", // 141 words
  "READING_PART_C::Part C — Whose decision is it anyway", // 126 words
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening", // 405 words
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience", // 359 words
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'", // 310 words
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do", // 302 words
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment", // 341 words
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer", // 333 words
];

/**
 * 🔴 THE ONE PLACE THIS FILE DECIDES WHAT A WORD IS.
 *
 * Split on whitespace, then keep only the tokens carrying a letter or a digit.
 * "—" alone is dropped; "-" alone is dropped; "mid-sentence", "1:1000",
 * "92%" and "18" are all words. See the ruling in the header.
 */
const words = (s: string | undefined): number =>
  s ? (s.match(/[^\s]+/g) ?? []).filter((t) => /[A-Za-z0-9]/.test(t)).length : 0;

function textWords(item: Item): number {
  if (item.taskType.startsWith("LISTENING")) return words(item.payload.audioScript);
  if (item.taskType === "READING_PART_A") {
    // Combined: the four texts AND the twenty question stems, because that is
    // what OET's own 885-976-1009 was measured over. Option text is excluded on
    // purpose — see the header.
    const texts = (item.payload.texts ?? []).reduce((n, t) => n + words(t.body), 0);
    const stems = (item.payload.questions ?? []).reduce((n, q) => n + words(q.stem), 0);
    return texts + stems;
  }
  return (item.payload.passages ?? []).reduce((n, t) => n + words(t.body), 0);
}

/** Every way this item falls short of its law. Empty means it meets it. */
function breaches(item: Item): string[] {
  const law = LAW[item.taskType];
  if (!law) return [];
  const out: string[] = [];
  const n = textWords(item);
  if (n < law[0] || n > law[1]) out.push(`${n} words, law ${law[0]}-${law[1]}`);
  if (item.taskType === "LISTENING_PART_A") {
    const gaps = (item.payload.gaps ?? []).length;
    if (gaps !== 12) out.push(`${gaps} gaps, law 12`);
  }
  // 🔴 ADDED 3 SEPTEMBER 2026. Nothing counted Listening Part C's questions
  // anywhere — not here, not in gate:distractor, which only ever looks at the
  // options a question already has. That is the same blind spot that let a
  // Reading Part C item ship with two questions instead of eight: a structural
  // law with no check attached to it. Source: ZABTA §2 line 40, "6 per
  // recording".
  if (item.taskType === "LISTENING_PART_C") {
    const qs = (item.payload.questions ?? []).length;
    if (qs !== 6) out.push(`${qs} questions, law 6`);
  }
  if (item.taskType === "READING_PART_A") {
    const texts = (item.payload.texts ?? []).length;
    const qs = (item.payload.questions ?? []).length;
    if (texts !== 4) out.push(`${texts} texts, law 4`);
    if (qs !== 20) out.push(`${qs} questions, law 20`);
  }
  return out;
}

const ITEMS = GEN_ITEMS as unknown as Item[];
const governed = ITEMS.filter((i) => LAW[i.taskType]);
const failures: string[] = [];
const exempt = new Set(LEGACY_SHORT);
const stillShort = new Set<string>();

// Population before the guard: a gate that iterates nothing passes vacuously.
if (governed.length === 0) failures.push("no item is governed by a length law — the gate is vacuous");
if (exempt.size !== LEGACY_SHORT.length) {
  failures.push(`LEGACY_SHORT contains a duplicate (${LEGACY_SHORT.length} rows, ${exempt.size} unique)`);
}

for (const item of governed) {
  const key = `${item.taskType}::${item.title}`;
  const why = breaches(item);
  const listed = exempt.has(key);
  if (why.length > 0) {
    if (listed) stillShort.add(key);
    else failures.push(`${key} — ${why.join("; ")}`);
  } else if (listed) {
    failures.push(`${key} now meets the law — delete it from LEGACY_SHORT.`);
  }
}
for (const key of exempt) {
  if (!governed.some((i) => `${i.taskType}::${i.title}` === key)) {
    failures.push(`${key} is in LEGACY_SHORT but not in the bank — delete it.`);
  }
}


/**
 * 🔴 FLAGGED BY THIS CHECK, HANDED BACK — NOT DECIDED HERE.
 *
 * The teacher's pass of 2 September 2026 found two Part A answers that were not
 * printed in their own texts and corrected both. Running the check over all nine
 * new items finds FIVE. The command that asked for the check expected zero, and
 * the standing rule is that the code wins and that content quality is the
 * author's call, not a gate's — so these are recorded, not fixed.
 *
 * They fall into two kinds, and the difference matters:
 *
 *   THE SAME WORD IN ANOTHER FORM — the check as specified compares literally
 *   (lowercase, whitespace, dashes, apostrophes) with no morphology, so a form
 *   difference fails it:
 *     "cleansed"                    text prints "Cleanse the wound first."
 *     "insulin and sulfonylureas"   text prints "Insulin and the sulfonylurea
 *                                   tablets are the two treatments…"
 *   ⚠️ `cleansed` is a CONTRADICTION INSIDE THE COMMAND: Finding 2 rules it KEEP
 *   because it is "the same word in another form", while Finding 6's literal
 *   comparison fails it. Both cannot hold. That is the author's to settle.
 *
 *   A DIFFERENT WORDING — the same class as the two the teacher's pass caught,
 *   and not reachable by any tolerance:
 *     "label it"                     text prints "Label a syringe the moment it
 *                                    is drawn up…"
 *     "when it is clinically infected" text prints "Swab only where the wound is
 *                                    clinically infected on the findings above."
 *     "keep it"                      text prints "…or keep what is left for next
 *                                    time." (Finding 3.2 added "keep what is
 *                                    left" as a VARIANT while leaving the
 *                                    unfindable phrase as the primary — the
 *                                    opposite of what Finding 1a did.)
 *
 * ⚠️ THIS LIST IS A TO-DO, NOT AN ALLOWANCE. It is stricter than an exemption: a
 * row that has STOPPED failing fails the build, so a question that is fixed must
 * be deleted from here rather than left lying.
 */
const FINDABILITY_PENDING: { title: string; qid: string; answer: string }[] = [
  { title: "Part A — Wound infection and antibiotics", qid: "q15", answer: "cleansed" },
  { title: "Part A — Hypoglycaemia", qid: "q14", answer: "insulin and sulfonylureas" },
  { title: "Part A — High-risk medicines", qid: "q11", answer: "label it" },
  {
    title: "Part A — Wound infection and antibiotics",
    qid: "q9",
    answer: "when it is clinically infected",
  },
  { title: "Part A — Wound infection and antibiotics", qid: "q14", answer: "keep it" },
];
const findabilityPendingKey = (t: string, q: string) => `${t}||${q}`;
const FINDABILITY_PENDING_KEYS = new Set(
  FINDABILITY_PENDING.map((e) => findabilityPendingKey(e.title, e.qid)),
);
const findabilityPendingHit = new Set<string>();

// ── FINDABILITY · a Part A answer must be IN its own text ───────────────────
//
// Reading Part A tells the candidate to answer "with a word or short phrase from
// the texts". An answer that is not in the texts cannot be answered that way, and
// no gate could see it: the accept-list checks (A0-A12) compare a variant against
// the OVERLAY or the payload, never against the source the candidate is reading.
//
// The teacher's pass of 2 September 2026 found two by hand — "the time last known
// well" (Acute stroke) and "reduced urine output" (Sepsis), neither printed
// anywhere in its item. Both are corrected in this change. This is the check that
// would have caught them, and it costs nothing.
//
// PRIMARY ANSWERS ONLY. A variant is allowed to be a form the text does not
// print — that is what a variant is for; A12 already governs the overlay's
// variants against the same texts.
//
// 🔴 LEGACY ITEMS ARE EXCLUDED, ON THE SAME TERMS AS THE LENGTH LAW. They were
// authored before this rule and would flood the output. The exclusion rides on
// LEGACY_SHORT, so it inherits that list's rule exactly: THE LIST MAY ONLY
// SHRINK. An item that leaves it starts being checked here too, and there is no
// second list to forget about.
function findNorm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[\u2010-\u2015\u2212]/g, "-")
    .replace(/[\u2018\u2019\u02bc]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

let findabilityChecked = 0;
let findabilityItems = 0;
for (const item of ITEMS) {
  if (item.taskType !== "READING_PART_A") continue;
  if (exempt.has(`${item.taskType}::${item.title}`)) continue;
  findabilityItems += 1;
  const source = findNorm(
    (item.payload.texts ?? []).map((t) => `${t.heading ?? ""} ${t.body ?? ""}`).join(" "),
  );
  for (const q of item.payload.questions ?? []) {
    if (q.kind !== "gap" || !q.answer) continue;
    findabilityChecked += 1;
    if (!source.includes(findNorm(q.answer))) {
      const key = findabilityPendingKey(item.title, q.id ?? "?");
      if (FINDABILITY_PENDING_KEYS.has(key)) {
        findabilityPendingHit.add(key);
        continue;
      }
      failures.push(
        `${item.title} / ${q.id ?? "?"} — answer ${JSON.stringify(q.answer)} is NOT in that ` +
          "item's own texts, and Part A says the answer comes from the texts",
      );
    }
  }
}
// Population before the guard: if no item is governed the check proves nothing.
if (findabilityItems === 0) {
  failures.push("no non-legacy READING_PART_A item exists — the findability check is vacuous");
}
// A to-do that has stopped failing is a question that has been answered.
for (const e of FINDABILITY_PENDING) {
  if (!findabilityPendingHit.has(findabilityPendingKey(e.title, e.qid))) {
    failures.push(
      `${e.title} / ${e.qid} is in FINDABILITY_PENDING but no longer fails — delete the row.`,
    );
  }
}

const green = governed.length - stillShort.size;
console.log(
  `[gate:length] ${governed.length} governed item(s): ${green} meet the law, ` +
    `${stillShort.size} exempt as legacy debt`,
);
console.log(
  `[gate:length] findability: ${findabilityChecked} Part A answer(s) across ` +
    `${findabilityItems} non-legacy item(s) checked against their own texts`,
);
if (FINDABILITY_PENDING.length > 0) {
  console.log(
    `  🔴 FINDABILITY HANDED BACK — ${FINDABILITY_PENDING.length} answer(s) not printed in ` +
      "their own texts. NOT decided here:",
  );
  for (const e of FINDABILITY_PENDING) {
    console.log(`        ${e.title} / ${e.qid} — ${JSON.stringify(e.answer)}`);
  }
}
console.log(`LEGACY DEBT: ${stillShort.size} items still short of the law`);
if (failures.length > 0) {
  console.error(`\n[gate:length] ${failures.length} failure(s):`);
  for (const f of failures.slice(0, 40)) console.error(`  ${f}`);
  if (failures.length > 40) console.error(`  …and ${failures.length - 40} more`);
  process.exit(1);
}
console.log("[gate:length] all clear");
