/**
 * gate:length — THE LENGTH LAW, AND THE DEBT IT MAKES VISIBLE.
 *
 * The item COUNT has passed for a while: 21 Listening Part A, 33 Part B, 18
 * Reading Part A, all above the fifteen-per-skill law. The item LENGTH has not.
 * Measured from scripts/seed/gen on 2 September 2026:
 *
 *   LISTENING_PART_A  550-600 words, 12 gaps   shortest  49   median  75    0/21 pass
 *   READING_PART_A    560-640 words            shortest  64   median  95    0/18 pass
 *   LISTENING_PART_C  500-600 words            shortest  59   median 141    0/21 pass
 *   READING_PART_C    750-850 words            shortest  51   median 144    0/21 pass
 *   LISTENING_PART_B  150-200 words            shortest  29   median  45    0/33 pass
 *   READING_PART_B    100-150 words            shortest  28   median  48    1/33 pass
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
 * Every run prints LEGACY DEBT: <n>, so the number is in front of us.
 *
 * ── WHAT "MEETS THE LAW" MEANS ──────────────────────────────────────────────
 *
 * Length, plus the structural rules that come with it where the law states one:
 * Listening Part A carries exactly 12 gaps, Reading Part A exactly 4 texts and
 * 20 questions. An exempted title is exempt from the whole of its law, because
 * the legacy items breach the structure as well as the length — a 49-word Part A
 * has 4 gaps, not 12.
 *
 * ⚠️ WORD COUNTING IS NOT UNIQUE. Measured independently against the supplied
 * list on 2 Sep 2026: the same 146 titles, zero membership disagreement, and six
 * counts differing by 1-6 words on items that are 400+ words short either way.
 * The verdicts are identical; only the tokenisation differs.
 */
import { GEN_ITEMS } from "../seed/gen/index";

type Item = {
  taskType: string;
  title: string;
  payload: {
    audioScript?: string;
    gaps?: unknown[];
    texts?: { body?: string }[];
    passages?: { body?: string }[];
    questions?: unknown[];
  };
};

/** taskType -> [min, max] words of the item's own text. */
const LAW: Record<string, [number, number]> = {
  LISTENING_PART_A: [550, 600],
  LISTENING_PART_B: [150, 200],
  LISTENING_PART_C: [500, 600],
  READING_PART_A: [560, 640],
  READING_PART_B: [100, 150],
  READING_PART_C: [750, 850],
};

/**
 * 🔴 HAND-CHECKED-IN, MEASURED, MAY ONLY SHRINK. Each line carries the word
 * count measured on 2 September 2026, so a reader can see how far short an item
 * was without re-running anything.
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
  "LISTENING_PART_A::OET Form 1 · Listening Part A — Physiotherapy consultation (lower back pain)", // 233 words
  "LISTENING_PART_A::OET Form 1 · Listening Part A — Dietitian consultation (type 2 diabetes)", // 198 words
  "LISTENING_PART_A::OET Form 2 · Listening Part A — Occupational therapy home visit (post-stroke)", // 193 words
  "LISTENING_PART_A::OET Form 2 · Listening Part A — Practice-nurse asthma review", // 165 words
  "LISTENING_PART_A::OET Form 3 · Listening Part A — Physiotherapist and lower back pain", // 213 words
  "LISTENING_PART_A::OET Form 3 · Listening Part A — Midwife antenatal booking visit", // 200 words
  // ── LISTENING_PART_B · 33 item(s), law 150-200 words ──
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
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Discharge concern", // 47 words
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Hand-hygiene audit", // 29 words
  "LISTENING_PART_B::OET Form 1 · Listening Part B — X-ray result", // 33 words
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Home exercises", // 31 words
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Infusion pump training", // 34 words
  "LISTENING_PART_B::OET Form 1 · Listening Part B — Handling results", // 34 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Low sodium", // 35 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Gloves and hand hygiene", // 36 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Nil by mouth", // 37 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Paracetamol order", // 39 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Escalating concern", // 41 words
  "LISTENING_PART_B::OET Form 2 · Listening Part B — Chest pain at reception", // 39 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Sharps bins", // 44 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Transfusion check", // 49 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Timely notes", // 41 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Oxygen as a drug", // 42 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Interpreters", // 40 words
  "LISTENING_PART_B::OET Form 3 · Listening Part B — Red wristband", // 45 words
  // ── LISTENING_PART_C · 21 item(s), law 500-600 words ──
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
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Interview: wound-care nursing", // 312 words
  "LISTENING_PART_C::OET Form 1 · Listening Part C — Presentation: polypharmacy", // 245 words
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Interview: de-escalation in mental health", // 221 words
  "LISTENING_PART_C::OET Form 2 · Listening Part C — Presentation: antimicrobial resistance", // 156 words
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Interview: living with chronic pain", // 261 words
  "LISTENING_PART_C::OET Form 3 · Listening Part C — Presentation: health literacy", // 245 words
  // ── READING_PART_A · 18 item(s), law 560-640 words ──
  "READING_PART_A::Part A — Aseptic non-touch technique", // 95 words
  "READING_PART_A::Part A — Discharge planning checklist", // 91 words
  "READING_PART_A::Part A — Falls risk assessment", // 100 words
  "READING_PART_A::Part A — Hand hygiene texts", // 64 words
  "READING_PART_A::Part A — Informed consent essentials", // 82 words
  "READING_PART_A::Part A — Insulin storage and handling", // 95 words
  "READING_PART_A::Part A — Malnutrition screening", // 89 words
  "READING_PART_A::Part A — Oxygen cylinder safety", // 94 words
  "READING_PART_A::Part A — Pain assessment methods", // 100 words
  "READING_PART_A::Part A — Preventing pressure injuries in immobile patients", // 188 words
  "READING_PART_A::Part A — Repositioning for skin protection", // 97 words
  "READING_PART_A::Part A — Safe patient transfers", // 86 words
  "READING_PART_A::Part A — Source isolation precautions", // 91 words
  "READING_PART_A::Part A — Urinary catheter care", // 92 words
  "READING_PART_A::Part A — Wound dressing selection", // 107 words
  "READING_PART_A::OET Form 1 · Reading Part A — Preventing pressure injuries", // 236 words
  "READING_PART_A::OET Form 2 · Reading Part A — Preventing falls in older adults", // 220 words
  "READING_PART_A::OET Form 3 · Reading Part A — Delirium in hospital", // 215 words
  // ── READING_PART_B · 32 item(s), law 100-150 words ──
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
  "READING_PART_B::Part B — Medicines policy extract", // 38 words
  "READING_PART_B::Part B — Sharps disposal at point of use", // 80 words
  "READING_PART_B::Part B — Staff rostering swap email", // 87 words
  "READING_PART_B::Part B — Visiting policy on protected mealtimes", // 80 words
  "READING_PART_B::OET Form 1 · Reading Part B — Controlled-drugs policy", // 48 words
  "READING_PART_B::OET Form 1 · Reading Part B — Sharps memo", // 37 words
  "READING_PART_B::OET Form 1 · Reading Part B — Hand-hygiene guideline", // 40 words
  "READING_PART_B::OET Form 1 · Reading Part B — Medicine label", // 29 words
  "READING_PART_B::OET Form 1 · Reading Part B — Visitor notice", // 35 words
  "READING_PART_B::OET Form 1 · Reading Part B — Handover note", // 39 words
  "READING_PART_B::OET Form 2 · Reading Part B — Consent", // 36 words
  "READING_PART_B::OET Form 2 · Reading Part B — Vaccine fridge log", // 47 words
  "READING_PART_B::OET Form 2 · Reading Part B — Terminology memo", // 28 words
  "READING_PART_B::OET Form 2 · Reading Part B — Protected breaks", // 34 words
  "READING_PART_B::OET Form 2 · Reading Part B — Specimen labelling", // 33 words
  "READING_PART_B::OET Form 2 · Reading Part B — Safe discharge", // 33 words
  "READING_PART_B::OET Form 3 · Reading Part B — Penicillin allergy label", // 59 words
  "READING_PART_B::OET Form 3 · Reading Part B — Controlled drugs", // 46 words
  "READING_PART_B::OET Form 3 · Reading Part B — Early warning scores", // 54 words
  "READING_PART_B::OET Form 3 · Reading Part B — Bare below the elbows", // 45 words
  "READING_PART_B::OET Form 3 · Reading Part B — Confidentiality in public areas", // 45 words
  "READING_PART_B::OET Form 3 · Reading Part B — Verbal orders", // 46 words
  // ── READING_PART_C · 21 item(s), law 750-850 words ──
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
  "READING_PART_C::Part C — Whose decision is it anyway", // 127 words
  "READING_PART_C::OET Form 1 · Reading Part C — The quiet skill of listening", // 413 words
  "READING_PART_C::OET Form 1 · Reading Part C — Rethinking resilience", // 361 words
  "READING_PART_C::OET Form 2 · Reading Part C — The trouble with 'just in case'", // 315 words
  "READING_PART_C::OET Form 2 · Reading Part C — What checklists can and can't do", // 307 words
  "READING_PART_C::OET Form 3 · Reading Part C — The fifteen-minute appointment", // 345 words
  "READING_PART_C::OET Form 3 · Reading Part C — Resilience is not the answer", // 335 words
];

const words = (s: string | undefined): number =>
  s && s.trim() ? s.trim().split(/\s+/).length : 0;

function textWords(item: Item): number {
  if (item.taskType.startsWith("LISTENING")) return words(item.payload.audioScript);
  if (item.taskType === "READING_PART_A") {
    return (item.payload.texts ?? []).reduce((n, t) => n + words(t.body), 0);
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

const green = governed.length - stillShort.size;
console.log(
  `[gate:length] ${governed.length} governed item(s): ${green} meet the law, ` +
    `${stillShort.size} exempt as legacy debt`,
);
console.log(`LEGACY DEBT: ${stillShort.size} items still short of the law`);
if (failures.length > 0) {
  console.error(`\n[gate:length] ${failures.length} failure(s):`);
  for (const f of failures.slice(0, 40)) console.error(`  ${f}`);
  if (failures.length > 40) console.error(`  …and ${failures.length - 40} more`);
  process.exit(1);
}
console.log("[gate:length] all clear");
