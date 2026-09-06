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
 * Every run prints the debt out loud, and since 4 September 2026 it prints TWO
 * numbers, never one:
 *
 *     LEGACY DEBT (active, short of the law): 75
 *     RETIRED and short of the law:          432   <- not served to anybody
 *
 * The 147 that used to be printed was both of these added together. Splitting
 * them did not make the debt smaller — it put each half where it belongs, and
 * the retired half is broken down by task type underneath so no decision hides
 * inside an aggregate. See the RETIRED block further down for the ruling, the
 * verification against production, and the ratchet that keeps the door shut.
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
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { GEN_ITEMS } from "../seed/gen/index";
// The tokeniser ruled on 3 September 2026, in its own file so anything that must
// count the same way can import it WITHOUT running this gate. See words.ts.
import { words } from "./words";

type Item = {
  taskType: string;
  // The machine key. `title` is still read below, but only to PRINT: a human
  // reading a red gate needs the name they know. Nothing is KEYED on it.
  slug: string;
  title: string;
  payload: {
    audioScript?: string;
    gaps?: unknown[];
    caseNotes?: string;
    setting?: string;
    candidateRole?: string;
    patientRole?: string;
    candidateCard?: string;
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
  // ── 🔴 WRITING AND SPEAKING, ADDED 4 SEPTEMBER 2026 ────────────────────────
  //
  // These two task types held 360 of the bank's items — more than half of it —
  // and were under NO length gate at all until this line. Nothing had ever
  // measured them, and not one of the 360 legacy items met either bound.
  //
  // ⚠️ THE TWO BOUNDS BELOW ARE NOT THE SAME KIND OF NUMBER, and the difference
  // must not be lost:
  //
  //   180-200 IS OET'S OWN FIGURE, and it governs the LETTER THE CANDIDATE
  //   WRITES — it is not in this table at all; it lives in each item's payload
  //   as wordMin/wordMax. OET's own page (oet.com/post/writing-word-limit,
  //   14 Nov 2023, recorded in PRODUCT_SOURCE_OF_TRUTH v0.3 §1.4) says it is a
  //   GUIDE, "not set to be strictly adhered to", that "assessors will not count
  //   your words", and that only the BODY of the letter counts.
  //
  //   650-850 and 280-330 ARE ALMIWORLD HOUSE STANDARDS. They govern the
  //   STIMULUS we author — the case notes a candidate works from, and the
  //   role-play card they are handed. OET publishes no figure for either. They
  //   were set by the owner on 3 September 2026 and every one of the 180 new
  //   items of each kind was written to them.
  //
  // WHAT IS COUNTED: WRITING_LETTER = payload.caseNotes. SPEAKING_ROLEPLAY =
  // setting + candidateRole + patientRole + candidateCard, which is the whole of
  // what the candidate is shown; patientConcern is excluded because the session
  // page strips it before the payload reaches the client.
  WRITING_LETTER: [650, 850],
  SPEAKING_ROLEPLAY: [280, 330],
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
  "lis-a-ankle-injury-after-a-fall", // 114 words
  "lis-a-antenatal-visit", // 65 words
  "lis-a-asthma-flare-up", // 74 words
  "lis-a-chest-pain-assessment", // 78 words
  "lis-a-child-with-fever", // 61 words
  "lis-a-diabetes-annual-check", // 75 words
  "lis-a-knee-pain-consultation", // 49 words
  "lis-a-lower-back-pain", // 71 words
  "lis-a-medication-side-effect", // 77 words
  "lis-a-mental-health-check-in", // 72 words
  "lis-a-migraine-review", // 78 words
  "lis-a-new-skin-rash", // 56 words
  "lis-a-ongoing-sleep-problem", // 75 words
  "lis-a-post-operative-wound-check", // 60 words
  "lis-a-suspected-urinary-infection", // 69 words
  "lis-a-f1-physiotherapy-consultation-lower-back-pain", // 229 words
  "lis-a-f1-dietitian-consultation-type-2-diabetes", // 193 words
  "lis-a-f2-occupational-therapy-home-visit-post-stroke", // 190 words
  "lis-a-f2-practice-nurse-asthma-review", // 161 words
  "lis-a-f3-physiotherapist-and-lower-back-pain", // 210 words
  "lis-a-f3-midwife-antenatal-booking-visit", // 197 words
  // ── LISTENING_PART_B · 33 item(s), law 140-165 words ──
  "lis-b-alert-about-a-norovirus-outbreak", // 53 words
  "lis-b-arranging-a-complex-discharge", // 51 words
  "lis-b-changes-to-the-weekend-roster", // 51 words
  "lis-b-feedback-from-a-hand-hygiene-audit", // 49 words
  "lis-b-following-up-a-patient-complaint", // 51 words
  "lis-b-handover-extract", // 37 words
  "lis-b-morning-team-brief-on-bed-pressures", // 53 words
  "lis-b-note-on-mandatory-manual-handling-training", // 47 words
  "lis-b-reminder-about-timing-of-antibiotics", // 57 words
  "lis-b-revised-visiting-hours-policy", // 53 words
  "lis-b-safeguarding-reminder-for-new-admissions", // 52 words
  "lis-b-shortage-of-a-wound-dressing-size", // 53 words
  "lis-b-switching-to-a-new-infusion-pump-model", // 56 words
  "lis-b-updated-dressing-trolley-protocol", // 84 words
  "lis-b-verbal-handover-for-a-post-operative-patient", // 53 words
  "lis-b-f1-discharge-concern", // 46 words
  "lis-b-f1-hand-hygiene-audit", // 28 words
  "lis-b-f1-x-ray-result", // 33 words
  "lis-b-f1-home-exercises", // 30 words
  "lis-b-f1-infusion-pump-training", // 33 words
  "lis-b-f1-handling-results", // 33 words
  "lis-b-f2-low-sodium", // 34 words
  "lis-b-f2-gloves-and-hand-hygiene", // 35 words
  "lis-b-f2-nil-by-mouth", // 36 words
  "lis-b-f2-paracetamol-order", // 39 words
  "lis-b-f2-escalating-concern", // 41 words
  "lis-b-f2-chest-pain-at-reception", // 38 words
  "lis-b-f3-sharps-bins", // 43 words
  "lis-b-f3-transfusion-check", // 48 words
  "lis-b-f3-timely-notes", // 41 words
  "lis-b-f3-oxygen-as-a-drug", // 42 words
  "lis-b-f3-interpreters", // 39 words
  "lis-b-f3-red-wristband", // 44 words
  // ── LISTENING_PART_C · 21 item(s), law 780-880 words ──
  "lis-c-a-multimodal-approach-to-chronic-pain-management", // 141 words
  "lis-c-antibiotic-stewardship-and-the-48-hour-review", // 132 words
  "lis-c-building-a-culture-of-patient-safety-on-the-ward", // 139 words
  "lis-c-honest-conversations-at-the-end-of-life", // 138 words
  "lis-c-improving-health-literacy-through-teach-back", // 138 words
  "lis-c-making-telehealth-consultations-safe-and-effective", // 142 words
  "lis-c-preventing-inpatient-falls-through-hourly-rounding", // 137 words
  "lis-c-recognising-and-preventing-clinician-burnout", // 133 words
  "lis-c-reducing-medication-errors-with-quiet-zones", // 157 words
  "lis-c-responding-to-agitation-in-dementia-care", // 134 words
  "lis-c-sustaining-gains-in-quality-improvement-projects", // 138 words
  "lis-c-tackling-malnutrition-risk-in-hospital-patients", // 141 words
  "lis-c-talk-on-hydration-in-older-adults", // 59 words
  "lis-c-the-first-hour-in-recognising-sepsis", // 145 words
  "lis-c-understanding-hesitancy-to-improve-vaccination-uptake", // 141 words
  "lis-c-f1-interview-wound-care-nursing", // 305 words
  "lis-c-f1-presentation-polypharmacy", // 238 words
  "lis-c-f2-interview-de-escalation-in-mental-health", // 217 words
  "lis-c-f2-presentation-antimicrobial-resistance", // 151 words
  "lis-c-f3-interview-living-with-chronic-pain", // 254 words
  "lis-c-f3-presentation-health-literacy", // 240 words
  // ── READING_PART_A · 18 item(s), law 885-1009 words ──
  // ── READING_PART_B · 33 item(s), law 136-155 words ──
  // ── READING_PART_C · 21 item(s), law 653-836 words ──
];


function textWords(item: Item): number {
  if (item.taskType.startsWith("LISTENING")) return words(item.payload.audioScript);
  // 🔴 THE TWO AI TASKS, AND WHICH FIELD EACH LAW COUNTS. Added with the LAW rows
  // on 4 September 2026 — and the gate itself found this missing: with the rows
  // in but this branch absent, every one of the 360 measured "0 words, law
  // 650-850". A bound with no reader is not a law, it is a refusal.
  //
  // WRITING_LETTER counts the CASE NOTES: the stimulus we author, not the
  // recipient line or the task instruction, which are the wrapper around it. It
  // is NOT the letter the candidate writes — that is governed by the item's own
  // wordMin/wordMax, which is OET's 180-200 guide.
  if (item.taskType === "WRITING_LETTER") return words(item.payload.caseNotes);
  // SPEAKING_ROLEPLAY counts the whole of what the CANDIDATE is shown.
  // `patientConcern` is excluded on purpose: the session page strips it before
  // the payload reaches the client, because drawing it out is the task, so
  // counting it would measure text the candidate never sees.
  if (item.taskType === "SPEAKING_ROLEPLAY") {
    return (
      words(item.payload.setting) +
      words(item.payload.candidateRole) +
      words(item.payload.patientRole) +
      words(item.payload.candidateCard)
    );
  }
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

/**
 * 🔴 THE GATE COUNTS WHAT A STUDENT CAN BE SERVED — RULED 4 SEPTEMBER 2026.
 *
 * A retired item is `active = false` in production: no learner is ever handed it.
 * Keeping it in LEGACY DEBT measures something that is not there. So every item
 * named in `scripts/retire/` is counted SEPARATELY, not silently dropped.
 *
 * ⚠️ THIS IS NOT A THRESHOLD BEING SOFTENED, and the difference is the whole
 * point. Every bound in LAW is untouched — 650-850, 280-330, and Reading's and
 * Listening's own. What changed is the gate's SCOPE: it governs what is served,
 * not what exists. The owner's words: "hadd bilkul wahi rehti hai. Sirf gate ka
 * daira durust ho raha hai."
 *
 * VERIFIED AGAINST PRODUCTION BEFORE THIS WAS APPLIED, because "the number
 * matches" is exactly what this project has slipped on before: all 72 items in
 * the three Reading lists were checked row by row against the live database —
 * 18 + 33 + 21, every one `active = false`, none missing, none still live.
 *
 * ── 🔴 THE RATCHET, AND HOW IT ACTUALLY BITES ───────────────────────────────
 *
 * Without it this ruling is a hole: retire an inconvenient item, watch the debt
 * fall, quietly bring it back later.
 *
 * The lists in `scripts/retire/` ARE the record of what is switched off — the
 * same files `retire-fragments.mts` runs. So bringing an item back means taking
 * its line out of a list, and the moment that happens the item is governed again
 * like anything else: it is short, it is not in LEGACY_SHORT, and the build goes
 * RED. LEGACY_SHORT may only shrink, so it cannot be re-admitted there either.
 *
 * The door back in is therefore: fix the item so it meets its law. Which is the
 * only door there should be.
 *
 * Proved by deleting one line from scripts/retire/reading-part-a-legacy.json —
 * the output is in the PR.
 */
const RETIRE_DIR = join(process.cwd(), "scripts", "retire");
const ITEMS = GEN_ITEMS as unknown as Item[];
/** `taskType::title` -> slug, from the seed source: the one place the gates and
 *  the database agree about which item is which. */
const SLUG_BY_TITLE_KEY = new Map(ITEMS.map((i) => [`${i.taskType}::${i.title}`, i.slug]));
/** slug -> taskType, for the aggregate breakdown. */
const TASK_BY_SLUG = new Map(ITEMS.map((i) => [i.slug, i.taskType]));
/** slug -> title, for the MESSAGES only. A gate that names a slug at a human is
 *  a gate they have to go and look up; the key is the slug, the words are the
 *  title, and neither pretends to be the other. */
const titleOf = (slug: string): string =>
  ITEMS.find((i) => i.slug === slug)?.title ?? `<no item with slug ${slug}>`;
/** Retire rows naming a title the seed source no longer has. Failed on below. */
const RETIRE_UNRESOLVED: string[] = [];
const RETIRED: ReadonlySet<string> = new Set(
  readdirSync(RETIRE_DIR)
    .filter((f) => f.endsWith(".json"))
    .flatMap(
      (f) =>
        (JSON.parse(readFileSync(join(RETIRE_DIR, f), "utf8")) as { taskType: string; title: string }[]).map(
          // 🔴 scripts/retire/*.json are a HISTORICAL RECORD, keyed by the title as
          // it stood on the day of the retire, and they are never rewritten. They are
          // resolved to a slug HERE, against the seed source. A record that names an
          // item the source no longer has would silently move that item back into the
          // governed population, so it is collected and failed on instead.
          (r) => {
            const s = SLUG_BY_TITLE_KEY.get(`${r.taskType}::${r.title}`);
            if (!s) RETIRE_UNRESOLVED.push(`${f}: ${r.taskType} :: ${JSON.stringify(r.title)}`);
            return s ?? `UNRESOLVED::${r.taskType}::${r.title}`;
          },
        ),
    ),
);
// A gate that reads an empty retire directory would silently govern everything
// and look identical to one that read it correctly. Say so instead.
if (RETIRED.size === 0) {
  throw new Error("scripts/retire/ named no items — refusing to run with an empty retire set");
}

const governed = ITEMS.filter((i) => LAW[i.taskType]);
const failures: string[] = [];
const exempt = new Set(LEGACY_SHORT);
const stillShort = new Set<string>();

// Population before the guard: a gate that iterates nothing passes vacuously.
if (governed.length === 0) failures.push("no item is governed by a length law — the gate is vacuous");
if (exempt.size !== LEGACY_SHORT.length) {
  failures.push(`LEGACY_SHORT contains a duplicate (${LEGACY_SHORT.length} rows, ${exempt.size} unique)`);
}

const retiredShort = new Set<string>();
for (const item of governed) {
  const key = item.slug;
  const why = breaches(item);
  const listed = exempt.has(key);

  // Retired: counted, never failed, and never in LEGACY_SHORT — one item must
  // not appear in two debt numbers.
  if (RETIRED.has(key)) {
    if (why.length > 0) retiredShort.add(key);
    if (listed) {
      failures.push(`${key} is RETIRED and also in LEGACY_SHORT — delete the LEGACY_SHORT row.`);
    }
    continue;
  }

  if (why.length > 0) {
    if (listed) stillShort.add(key);
    else failures.push(`${key} — ${why.join("; ")}`);
  } else if (listed) {
    failures.push(`${key} now meets the law — delete it from LEGACY_SHORT.`);
  }
}
for (const key of exempt) {
  if (!governed.some((i) => i.slug === key)) {
    failures.push(`${key} is in LEGACY_SHORT but not in the bank — delete it.`);
  }
// A retire row that resolves to nothing would quietly return its item to the
// governed population and change the two debt numbers with no trace.
if (RETIRE_UNRESOLVED.length > 0) {
  failures.push(
    `${RETIRE_UNRESOLVED.length} retire record(s) name an item the seed source does not have:\n` +
      RETIRE_UNRESOLVED.map((r) => `    ${r}`).join("\n"),
  );
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
const FINDABILITY_PENDING: { slug: string; qid: string; answer: string }[] = [
  { slug: "rea-a-wound-infection-and-antibiotics", qid: "q15", answer: "cleansed" },
  { slug: "rea-a-hypoglycaemia", qid: "q14", answer: "insulin and sulfonylureas" },
  { slug: "rea-a-high-risk-medicines", qid: "q11", answer: "label it" },
  {
    slug: "rea-a-wound-infection-and-antibiotics",
    qid: "q9",
    answer: "when it is clinically infected",
  },
  { slug: "rea-a-wound-infection-and-antibiotics", qid: "q14", answer: "keep it" },
];
const findabilityPendingKey = (slug: string, q: string) => `${slug}||${q}`;
const FINDABILITY_PENDING_KEYS = new Set(
  FINDABILITY_PENDING.map((e) => findabilityPendingKey(e.slug, e.qid)),
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
  // 🔴 RETIRED IS SKIPPED HERE FOR THE SAME REASON AS THE LENGTH LAW, and this
  // line was added because the gate found it: when the 72 retired Reading items
  // left LEGACY_SHORT, findability started checking one of them and went red on
  // "OET Form 2 · Reading Part A — Preventing falls in older adults / q12". That
  // item is switched off in production. Its answer is nobody's problem, and
  // reporting it would have been a defect the product cannot serve.
  //
  // It also shows the scope rule has to be applied EVERYWHERE the old one was —
  // exempt-means-skip was doing two jobs, and only one of them moved.
  if (RETIRED.has(item.slug)) continue;
  if (exempt.has(item.slug)) continue;
  findabilityItems += 1;
  const source = findNorm(
    (item.payload.texts ?? []).map((t) => `${t.heading ?? ""} ${t.body ?? ""}`).join(" "),
  );
  for (const q of item.payload.questions ?? []) {
    if (q.kind !== "gap" || !q.answer) continue;
    findabilityChecked += 1;
    if (!source.includes(findNorm(q.answer))) {
      const key = findabilityPendingKey(item.slug, q.id ?? "?");
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
  if (!findabilityPendingHit.has(findabilityPendingKey(e.slug, e.qid))) {
    failures.push(
      `${titleOf(e.slug)} / ${e.qid} is in FINDABILITY_PENDING but no longer fails — delete the row.`,
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
    console.log(`        ${titleOf(e.slug)} / ${e.qid} — ${JSON.stringify(e.answer)}`);
  }
}
// 🔴 TWO NUMBERS, ALWAYS BOTH. The debt did not fall by 72 — it moved to the
// column it belongs in. A single number here would read as progress that never
// happened.
console.log(`LEGACY DEBT (active, short of the law): ${stillShort.size} item(s)`);
console.log(`RETIRED and short of the law:           ${retiredShort.size} item(s)  <- not served to anybody`);
// Broken down, because one aggregate hides which decision produced it: 72 came
// from the three Reading retires, 360 from the Writing/Speaking retire of
// 4 September 2026.
{
  const byType = new Map<string, number>();
  for (const k of retiredShort) {
    // The key is a slug now, so the task type comes from the item itself. The
    // old `k.split("::")[0]` read it out of a `TASK::title` key and would have
    // returned the whole slug -- 432 rows of 1, silently, instead of five totals.
    const t = TASK_BY_SLUG.get(k) ?? "<unknown>";
    byType.set(t, (byType.get(t) ?? 0) + 1);
  }
  for (const t of [...byType.keys()].sort()) {
    console.log(`    ${t.padEnd(20)} ${byType.get(t)}`);
  }
}
if (failures.length > 0) {
  console.error(`\n[gate:length] ${failures.length} failure(s):`);
  for (const f of failures.slice(0, 40)) console.error(`  ${f}`);
  if (failures.length > 40) console.error(`  …and ${failures.length - 40} more`);
  process.exit(1);
}
console.log("[gate:length] all clear");
