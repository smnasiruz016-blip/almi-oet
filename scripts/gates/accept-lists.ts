/**
 * gate:accept-lists — THE ACCEPT LISTS ACTUALLY REACH THE ANSWERS THEY NAME.
 *
 * The accept-lists in src/lib/oet/accept-lists.ts are a code-side overlay keyed
 * by item title and, inside that, by gap label (Listening) or by the question's
 * own answer (Reading). Every one of those keys is a string typed by hand
 * against content that lives somewhere else. A key that matches nothing is not
 * an error at runtime — it is SILENCE: the lookup returns an empty array, the
 * gap keeps whatever it had, and a candidate who wrote a right answer is still
 * marked wrong. Nobody would ever find out.
 *
 * So: A KEY THAT MATCHES NOTHING FAILS THE BUILD. This gate runs inside
 * `gate:all`, which runs inside `npm run build`. It reads scripts/seed/gen and
 * the overlay; it opens no database and needs no credential.
 *
 * ── WHAT IT CHECKS ──────────────────────────────────────────────────────────
 *
 *   A1 every overlay title exists in the seed source
 *   A2 every Listening gap label exists on that item
 *   A3 every Reading key matches EXACTLY ONE question's `answer` on that item
 *   A4 coverage: every MULTI-WORD free-text answer in the bank HAS an
 *      accept-list; one-word answers are the normaliser's job (see A4 below)
 *   A5 the original answer is accepted
 *   A6 every authored variant is accepted
 *   A7 "the " + the answer is accepted, and so is the digit/word counterpart
 *   A8 a deliberately WRONG answer is refused  ← without this the gate is
 *      unfalsifiable: a normaliser that returned "" would pass A5–A7 perfectly
 *   A9 `400 mg` is refused on the folic-acid gap
 *  A10 no two DIFFERENT answers inside one item normalise alike
 *  A11 every Listening variant's words are in that item's own audioScript,
 *      with a WRITTEN PER-VARIANT exemption list and no baseline
 *  A12 the same, for every Reading variant against that item's own texts
 *
 * ── HOW IT WAS SEEN RED ─────────────────────────────────────────────────────
 *
 * The article rule was removed from normalize() — the two `while` loops that
 * drop a leading hedge and a leading article. A7 fell over, naming the gap and
 * the answer it could no longer accept. Restored; the output is in the PR body.
 *
 * ── 🔴 WHERE THE EXPECTED VALUES COME FROM ──────────────────────────────────
 *
 * A5–A7 build their inputs from the SEED (the answer) and from the OVERLAY (the
 * variants) and push them through the real markObjective. A8 and A9 use
 * hand-typed literals, because the whole point of a refusal case is that it is
 * not derived from the thing being tested.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { GEN_ITEMS } from "../seed/gen/index";
import { READING_SETS_SINGLE_FORM } from "./reading_sets_single_form";
import {
  LISTENING_PART_A_ACCEPT,
  READING_PART_A_ACCEPT,
  listeningAcceptFor,
  readingAcceptFor,
} from "../../src/lib/oet/accept-lists";
import {
  markObjective,
  normalize,
  normalizeTokens,
} from "../../src/lib/oet/tasks/objective";
import {
  AUDIO_EXEMPT,
  AUDIO_EXEMPT_TOKENS,
  FUNCTION_WORDS,
  isAllFunctionWords,
  runOnMatch,
  wordFoundInSource,
} from "./word-forms";

type Gap = { id: string; label: string; answer: string; variants?: string[]; acceptExhaustive?: boolean };
type ReadingQ = { id: string; kind: string; stem: string; answer: string; variants?: string[]; acceptExhaustive?: boolean };
type Item = {
  taskType: string;
  // The machine key. `title` is still read below, but only to PRINT.
  slug: string;
  title: string;
  payload: { gaps?: Gap[]; questions?: ReadingQ[]; audioScript?: string };
};

const ITEMS = GEN_ITEMS as unknown as Item[];
const LISTENING = ITEMS.filter((i) => i.taskType === "LISTENING_PART_A");
const READING = ITEMS.filter((i) => i.taskType === "READING_PART_A");

const failures: string[] = [];
const fail = (check: string, msg: string) => failures.push(`${check}  ${msg}`);

/** Would `markObjective` accept `given` for this key? The REAL marker, so this
 *  gate cannot drift from what a candidate actually experiences. */
function accepts(answer: string, variants: readonly string[], given: string): boolean {
  const res = markObjective(
    [{ id: "q", answer, variants: [...variants] }],
    { answers: { q: given } },
  );
  return res.pointsEarned === 1;
}

// ── population, before any guard ────────────────────────────────────────────
if (LISTENING.length === 0) fail("A0", "no LISTENING_PART_A items in the seed source");
if (READING.length === 0) fail("A0", "no READING_PART_A items in the seed source");

const listeningBySlug = new Map(LISTENING.map((i) => [i.slug, i]));
const readingBySlug = new Map(READING.map((i) => [i.slug, i]));
/** slug -> title, for the MESSAGES. The overlay is keyed by slug so that a
 *  rename cannot silently empty it; a human reading a red gate still needs the
 *  name they know, so the words come from here and the key never does. */
const titleOf = (slug: string): string =>
  ITEMS.find((i) => i.slug === slug)?.title ?? `<no item with slug ${slug}>`;
/** `taskType::title` -> slug, and the rows that did not resolve.
 *
 *  🔴 TWO INPUTS TO THIS GATE ARE STILL KEYED BY TITLE, ON PURPOSE, AND BOTH ARE
 *  RECORDS RATHER THAN RULES: scripts/gates/reading_sets_single_form.ts is
 *  GENERATED from the authors' own "qubool:" lines, and scripts/retire/*.json are
 *  a historical log of what was switched off on a given day. Neither is
 *  rewritten. They are resolved to slugs HERE, once, and a row that resolves to
 *  nothing is NAMED rather than dropped -- a silent miss would quietly widen A4's
 *  escape hatch or understate the dead half of the overlay. */
const SLUG_BY_TITLE_KEY = new Map(ITEMS.map((i) => [`${i.taskType}::${i.title}`, i.slug]));
const titleKeyedUnresolved: string[] = [];
const slugForTitle = (taskType: string, title: string, where: string): string => {
  const s = SLUG_BY_TITLE_KEY.get(`${taskType}::${title}`);
  if (s) return s;
  titleKeyedUnresolved.push(`${where}: ${taskType} :: ${JSON.stringify(title)}`);
  return `UNRESOLVED::${taskType}::${title}`;
};

// ── A1 · every overlay slug exists ──────────────────────────────────────────
for (const slug of Object.keys(LISTENING_PART_A_ACCEPT)) {
  if (!listeningBySlug.has(slug)) {
    fail("A1", `Listening accept-list names an item that does not exist: "${slug}"`);
  }
}
for (const slug of Object.keys(READING_PART_A_ACCEPT)) {
  if (!readingBySlug.has(slug)) {
    fail("A1", `Reading accept-list names an item that does not exist: "${slug}"`);
  }
}

// ── A2 · every Listening key is a gap ID, and its label is still that gap's ──
//
// 🔴 THE OVERLAY IS KEYED BY GAP ID, NOT BY LABEL, SINCE 7 SEPTEMBER 2026.
// The 6 September bank rewrote fifteen Listening items from five gaps to twelve
// and reworded every label; 45 label-keyed rows went silent in one afternoon.
// An id survives a rewording. The row still CARRIES the label, and A2 asserts
// it: a row whose label has drifted off its gap is a row a human can no longer
// read correctly, and this is the check that says so out loud.
for (const [slug, rows] of Object.entries(LISTENING_PART_A_ACCEPT)) {
  const item = listeningBySlug.get(slug);
  if (!item) continue; // already reported by A1
  const gaps = item.payload.gaps ?? [];
  for (const [gapId, row] of Object.entries(rows)) {
    const hits = gaps.filter((g) => g.id === gapId);
    if (hits.length !== 1) {
      fail("A2", `"${titleOf(slug)}" has ${hits.length} gaps with id "${gapId}" (need 1)`);
      continue;
    }
    if (hits[0].label !== row.label) {
      fail(
        "A2",
        `"${titleOf(slug)}" ${gapId}: the row says it belongs to "${row.label}", but that gap ` +
          `is now labelled "${hits[0].label}" — read the row, then update or delete it`,
      );
    }
  }
}

// ── A3 · every Reading key is a free-text question ID, with its answer ─────
//
// Same re-key as A2. The Reading row's `label` is the QUESTION'S OWN ANSWER,
// which is what the key used to be — so nothing was given up by moving to ids:
// the row is still checked against the answer it was written for, and it is now
// also nailed to one question rather than to whichever one happens to share
// that answer text.
for (const [slug, rows] of Object.entries(READING_PART_A_ACCEPT)) {
  const item = readingBySlug.get(slug);
  if (!item) continue;
  const free = (item.payload.questions ?? []).filter((q) => q.kind !== "match");
  for (const [qid, row] of Object.entries(rows)) {
    const hits = free.filter((q) => q.id === qid);
    if (hits.length !== 1) {
      fail(
        "A3",
        `"${titleOf(slug)}" has ${hits.length} free-text questions with id "${qid}" (need 1)`,
      );
      continue;
    }
    if (hits[0].answer !== row.label) {
      fail(
        "A3",
        `"${titleOf(slug)}" ${qid}: the row was written for the answer "${row.label}", but that ` +
          `question now answers "${hits[0].answer}" — read the row, then update or delete it`,
      );
    }
  }
}

/**
 * 🔴 ANSWERS THAT ARE DELIBERATELY SINGLE-FORM.
 *
 * A4 asks that every free-text answer has an accept-list. Nine Reading Part A
 * sets authored on 1-2 September carry their accept-lists in the payload, and in
 * eight places the author wrote that there is nothing else to accept —
 * `qubool: sirf glucagon — is ka koi doosra lafz nahi` ("only glucagon; it has
 * no other word"), or an accepted list whose only entry is the answer itself.
 * The porting instruction was explicit: emit an EMPTY variants array, never a
 * guessed one.
 *
 * So A4 needs to know the difference between "nobody wrote an accept-list" and
 * "the author wrote that there isn't one". This list is the second. It is
 * per-answer, carries the author's own reason, and is CLOSED both ways: an
 * answer with no accept-list that is not named here fails the build, and a row
 * here whose answer HAS gained an accept-list also fails, so it cannot rot.
 */
const A4_SINGLE_FORM: { item: string; answer: string; why: string }[] = [
  {
    item: "rea-a-anaphylaxis",
    answer: "glucagon",
    why: "author: 'sirf glucagon — is ka koi doosra lafz nahi' (a drug name has no synonym)",
  },
  {
    item: "rea-a-hypoglycaemia",
    answer: "glucagon",
    why: "author: 'sirf glucagon — is ka koi doosra lafz nahi'",
  },
  {
    item: "rea-a-high-risk-medicines",
    answer: "methotrexate",
    why: "author: 'sirf methotrexate — dawa ka naam hai' (it is a drug name)",
  },
  {
    item: "rea-a-pressure-ulcer-prevention",
    answer: "shear",
    why: "author: 'sirf shear'",
  },
  {
    item: "rea-a-sepsis",
    answer: "source control",
    why: "author: 'sirf yehi — text ka apna lafz hai' (only this; it is the text's own term)",
  },
  {
    item: "rea-a-pressure-ulcer-prevention",
    answer: "drainage",
    why: "the author's only other entry was a REFUSAL: 'discharge NAHIN — wo lafz text mein nahi hai'",
  },
  {
    item: "rea-a-preventing-blood-clots-in-hospital",
    answer: "blood",
    why: "the author's accepted list is the answer alone: 'qubool: blood'",
  },
  {
    item: "rea-a-wound-infection-and-antibiotics",
    answer: "effective",
    why: "the author's accepted list is the answer alone: 'qubool: effective'",
  },
  // ── added by the teacher's pass of 2026-09-02 ────────────────────────────
  {
    item: "rea-a-sepsis",
    answer: "blood pressure",
    why: "Finding 1b replaced an inference question with a retrieval one over the same sentence and specified variants: [] — 'blood pressure' is printed in that sentence",
  },
  {
    item: "rea-a-wound-infection-and-antibiotics",
    answer: "cleansed",
    why: "Finding 2 withdrew 'cleaned' and 'washed' as DIFFERENT words and specified variants: [] — cleansed is the only accepted form",
  },
  // ── sets 10-15, ported 2026-09-02 ─────────────────────────────────────────
  // Every row below is an answer whose accepted list the author closed in the
  // source with `qubool: sirf <x> — is ka koi doosra lafz nahi` ("only x; it has
  // no other word"). The porter emits `variants: []` for those and refuses to
  // invent one, so this list is where that decision is recorded. Generated once
  // from the ported items and checked in as a literal — never computed at build
  // time, on the same terms as LEGACY_SHORT.
  {
    item: "rea-a-acute-kidney-injury",
    answer: "dehydration",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-acute-kidney-injury",
    answer: "metformin",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-acute-kidney-injury",
    answer: "potassium",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-acute-kidney-injury",
    answer: "diuretics",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-acute-kidney-injury",
    answer: "chronic kidney disease",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-blood-transfusion-safety",
    answer: "interrupted",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-blood-transfusion-safety",
    answer: "returned",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-blood-transfusion-safety",
    answer: "identification",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-blood-transfusion-safety",
    answer: "receive",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-chest-pain-and-acute-coronary-syndrome",
    answer: "blocked artery",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-chest-pain-and-acute-coronary-syndrome",
    answer: "antiplatelet",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-chest-pain-and-acute-coronary-syndrome",
    answer: "dangerous",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-chest-pain-and-acute-coronary-syndrome",
    answer: "effect",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-an-asthma-attack-in-adults",
    answer: "oxygen",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-an-asthma-attack-in-adults",
    answer: "prednisolone",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-an-asthma-attack-in-adults",
    answer: "ipratropium",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-an-asthma-attack-in-adults",
    answer: "tiring",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-an-asthma-attack-in-adults",
    answer: "checked",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-venepuncture-and-handling-the-sample",
    answer: "stay seated",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-sharps-injury-and-exposure-to-blood",
    answer: "immunoglobulin",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-sharps-injury-and-exposure-to-blood",
    answer: "infection",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-sharps-injury-and-exposure-to-blood",
    answer: "hepatitis B",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-sharps-injury-and-exposure-to-blood",
    answer: "missed",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  {
    item: "rea-a-sharps-injury-and-exposure-to-blood",
    answer: "treatment",
    why: "author closed the accepted list with 'sirf' — this wording only",
  },
  // The 15 Reading Part A sets of 4 September 2026. DERIVED FROM THE SOURCE by
  // scripts/seed/gen/_build_reading_sets.mts, not hand-typed: the builder records
  // an entry only where the author's own "qubool:" line says there is nothing
  // else to accept, and it STOPS if a question has no "qubool:" line at all —
  // so an omission can never arrive here dressed as a decision.
  ...READING_SETS_SINGLE_FORM.map((e) => ({
    ...e,
    item: slugForTitle("READING_PART_A", e.item, "reading_sets_single_form.ts"),
  })),
];
/**
 * 🔴 THE SAME LIST, FOR LISTENING GAPS — ADDED 3 SEPTEMBER 2026 BY OWNER'S RULING.
 *
 * A4's Listening branch had no single-form escape at all: it asked only whether
 * an accept-list existed, in the overlay or in the payload. The thirteen new
 * full-length Part A scripts carry eight gaps whose answer is a drug name or a
 * named condition, and those cannot take an accept-list — a variant on a drug
 * name is the name of a DIFFERENT medicine.
 *
 * THE RULE THE OWNER WROTE, and the reason this list exists rather than eight
 * invented variant arrays:
 *
 *     A drug name, and a disease name spoken verbatim, are single-form answers.
 *     An accept-list on either would widen the key to something the candidate
 *     did not hear.
 *
 * Every `why` below is the OWNER'S OWN WORDING, pasted from the ruling of
 * 3 September 2026. None of it was written here. A reason invented by the agent
 * and a reason ruled by the owner look identical in a file, and after that
 * nobody can tell which decision was whose.
 *
 * Closed both ways, exactly like the Reading list above: an answer with no
 * accept-list that is not named here fails the build, and a row here whose
 * answer HAS gained an accept-list also fails, so it cannot rot. `gap` is the
 * gap's label — documentation for the reader; the key is item + answer, which
 * A10 already proves is unique inside one item.
 */
const A4_SINGLE_FORM_LISTENING: { item: string; gap: string; answer: string; why: string }[] = [
  {
    item: "lis-a-script-3-dietetics-unintentional-weight-loss",
    gap: "Food stopped altogether",
    answer: "bread",
    why: "owner: A common noun heard verbatim and having no second legitimate wording. \"Breads\" is reached by the depluralise rule, not by an accept-list.",
  },
  {
    item: "lis-a-script-3-dietetics-unintentional-weight-loss",
    gap: "Food she would always accept",
    answer: "custard",
    why: "owner: As above: one word, heard verbatim, with no synonym a candidate could reasonably write instead.",
  },
  {
    item: "lis-a-script-3-dietetics-unintentional-weight-loss",
    gap: "Medication that may reduce appetite",
    answer: "metformin",
    why: "owner: A drug name. A drug name has exactly one correct form, and any variant accepted here would be the name of a different medicine. Case and punctuation are already handled by the normaliser.",
  },
  {
    item: "lis-a-script-6-optometry-difficulty-driving-at-night",
    gap: "Family history: mother had",
    answer: "glaucoma",
    why: "owner: A named condition spoken verbatim. A lay paraphrase (\"pressure in the eye\") is a different answer to a different question and must not be accepted here.",
  },
  {
    item: "lis-a-script-6-optometry-difficulty-driving-at-night",
    gap: "Current medication",
    answer: "amlodipine",
    why: "owner: A drug name — see metformin above.",
  },
  {
    item: "lis-a-script-7-pharmacy-a-medicines-review",
    gap: "Medicine bought without a prescription",
    answer: "ibuprofen",
    why: "owner: A drug name — see metformin above.",
  },
  {
    item: "lis-a-script-8-nursing-a-leg-ulcer-at-a-home-visit",
    gap: "Analgesia taken before the visit",
    answer: "paracetamol",
    why: "owner: A drug name — see metformin above.",
  },
  {
    item: "lis-a-script-15-nursing-a-pre-operative-assessment",
    gap: "Medicine to stop before surgery",
    answer: "ibuprofen",
    why: "owner: A drug name — see metformin above.",
  },
];

/**
 * 🔴 FOUR ANSWERS THE OWNER HAS OVERRULED, 7 SEPTEMBER 2026. HIS WORDS, KEPT.
 *
 * Two of his own written decisions were in conflict, and this is the record of
 * which one won — without deleting either, so the next reader sees both.
 *
 * The decision that lost: "single form, nothing else to accept", written against
 * each of these four answers. Two of those rows are hand-written in
 * A4_SINGLE_FORM above; the other two come from
 * scripts/gates/reading_sets_single_form.ts, which is GENERATED from the
 * authors' own "qubool:" lines and must not be hand-edited — delete a row there
 * and the next build brings it back. So nothing is deleted anywhere. The rows
 * stay as the true record of what the author wrote, and this list records that
 * the owner later ruled otherwise.
 *
 * THE RULING, VERBATIM:
 *
 *     BP ← blood pressure · hep B ← hepatitis B · CO2 ← carbon dioxide ·
 *     liters ← litres. KEEP ALL FOUR. Nasir's decision, 7 September, in chat.
 *
 *     His earlier note "single form, nothing else to accept" is read as aimed
 *     at PARAPHRASES — teenagers for adolescents, being drunk for intoxication
 *     — not at whether a standard clinical abbreviation of the same word is
 *     acceptable. A student who writes CO2 has not written a different word;
 *     they have written the same word short. That is the rule already applied
 *     to C. diff, 40 km, 300 milligrams and EKG, and this makes it consistent
 *     rather than broken on the fifth case.
 *
 * ⚠️ CLOSED BOTH WAYS, like every other list here. A row whose answer has NO
 * accept-list is an override for nothing and FAILS THE BUILD, so this cannot rot
 * into a standing excuse the day the content changes underneath it.
 */
const A4_SINGLE_FORM_OVERRULED: { item: string; answer: string; variant: string }[] = [
  { item: "rea-a-sepsis", answer: "blood pressure", variant: "BP" },
  { item: "rea-a-sharps-injury-and-exposure-to-blood", answer: "hepatitis B", variant: "hep B" },
  { item: "rea-a-a-flare-up-of-chronic-obstructive-lung-disease", answer: "carbon dioxide", variant: "CO2" },
  { item: "rea-a-diabetic-ketoacidosis", answer: "litres", variant: "liters" },
];
const A4_OVERRULED_KEY = new Set(A4_SINGLE_FORM_OVERRULED.map((e) => `${e.item}||${e.answer}`));
const A4_SINGLE_KEY = new Set(
  A4_SINGLE_FORM.map((e) => `${e.item}||${e.answer}`).filter((k) => !A4_OVERRULED_KEY.has(k)),
);

const A4_SINGLE_LISTENING_KEY = new Set(
  A4_SINGLE_FORM_LISTENING.map((e) => `${e.item}||${e.answer}`),
);
const a4SingleSeen = new Set<string>();
const a4SingleListeningSeen = new Set<string>();

// ── A4 · coverage — no MULTI-WORD answer without an accept-list ──────────────
//
// The handoff states the bank is fully covered: 146 Listening gaps and 54
// Reading free-text answers, 200 in all. Asserting it means a NEW item cannot
// ship without its accept-list — which is the discipline, not an accident.
//
// 🔴 NARROWED ON 7 SEPTEMBER 2026, DELIBERATELY, AND HERE IS THE REASON.
// That rule was written when the bank held 200 free-text answers. It now holds
// 1032, and 658 of them are ONE WORD. A one-word answer has nothing an
// accept-list can usefully add: case, surrounding punctuation, a trailing full
// stop, a leading article, a leading hedge, hyphen-versus-space, a trailing
// plural and a number written as a word are ALL already folded by normalize()
// in src/lib/oet/tasks/objective.ts — the same function that marks the
// candidate. What is left over is a DIFFERENT WORD, and a different word is
// exactly what this file refuses to accept.
//
// 🔴 AND THE COST OF NOT NARROWING IT WAS MEASURED. Demanding a row per
// answer is what produced a mechanically generated accept-list on 6 September
// containing hours→hors, four→for, biscuits→biscuitbing and
// headaches→headacheing — rules that mark WRONG ANSWERS CORRECT. A gate that
// can only be satisfied by inventing content will be satisfied by invented
// content.
//
// "One word" is decided by the MARKER'S OWN tokeniser, not by counting spaces,
// so it means one word AFTER normalisation: "a triptan" is one word (the
// article is stripped), "twenty-eight weeks" is two (the number folds to 28,
// the unit stays). The class skipped is precisely the class normalize()
// already covers.
//
// ⚠️ WHAT THIS GIVES UP, SAID OUT LOUD: a one-word answer with a legitimate
// one-word alternative the normaliser cannot reach (throbs / throbbing) no
// longer has to be recorded here. That is authoring, and it is now caught by
// reading the content rather than by a build failure. The skipped count is
// PRINTED on every run so the size of the hole is never a surprise, and A4
// fails as vacuous if the narrowing ever swallows the whole population.
// One word AFTER the marker's own normalisation. Hyphens are GLUED rather than
// split, because for the marker a hyphen is neither a letter nor a boundary:
// "three-quarters", "three quarters" and "threequarters" are already one and
// the same answer, so demanding an accept-list row for them would be asking
// for a variant that cannot exist.
// 🔴 AND THE AUTHOR MAY SAY IT OUTRIGHT, SINCE 7 SEPTEMBER 2026.
//
// A4 left 28 multi-word answers red that had no accept list because none
// exists — "frozen peas", "laundry detergent", "130 over 80". The two ways to
// clear them were to invent a variant or to write another exemption row in
// this file, and inventing is what produced hours→hors and
// biscuits→biscuitbing on 6 September. Neither belongs to a gate.
//
// `acceptExhaustive: true` on the gap or question is the author saying, in the
// content, that the list is complete. A4 counts it as satisfied. It is CLOSED
// BOTH WAYS like every other list here: a unit that declares it and then GAINS
// an accept list fails the build, so the declaration cannot rot into a
// blanket excuse, and the count is printed on every run.
const oneWordAnswer = (answer: string) =>
  normalizeTokens(answer.replace(/[-‐-―]/g, "")).length <= 1;
let a4Required = 0;
let a4OneWordSkipped = 0;
let a4Exhaustive = 0;
let listeningGaps = 0;
for (const item of LISTENING) {
  for (const gap of item.payload.gaps ?? []) {
    listeningGaps += 1;
    // An accept-list may live in EITHER place. The overlay is how the original
    // bank got one without a database write; a payload `variants` array is how
    // newly authored items carry their own, and reading.ts prefers the payload
    // when it is non-empty. A4 asks whether the answer HAS an accept-list, not
    // where it is kept.
    const hasList =
      listeningAcceptFor(item.slug, gap.id).length > 0 || (gap.variants ?? []).length > 0;
    const singleKey = `${item.slug}||${gap.answer}`;
    if (A4_SINGLE_LISTENING_KEY.has(singleKey)) {
      a4SingleListeningSeen.add(singleKey);
      if (hasList) {
        fail(
          "A4",
          `"${item.title}" → "${gap.label}" is listed as single-form but now HAS an ` +
            "accept-list — delete the A4_SINGLE_FORM_LISTENING row",
        );
      }
      continue;
    }
    if (gap.acceptExhaustive) {
      a4Exhaustive += 1;
      if (hasList) {
        fail(
          "A4",
          `"${item.title}" → "${gap.label}" declares acceptExhaustive but HAS an ` +
            "accept-list — one of the two is wrong",
        );
      }
      continue;
    }
    if (!hasList && oneWordAnswer(gap.answer)) {
      a4OneWordSkipped += 1;
      continue;
    }
    a4Required += 1;
    if (!hasList) {
      fail(
        "A4",
        `no accept-list for "${item.title}" → "${gap.label}" (answer "${gap.answer}") — ` +
          "more than one word, so the normaliser cannot stand in for one",
      );
    }
  }
}
let readingFree = 0;
for (const item of READING) {
  for (const q of (item.payload.questions ?? []).filter((x) => x.kind !== "match")) {
    readingFree += 1;
    const hasList =
      readingAcceptFor(item.slug, q.id).length > 0 || (q.variants ?? []).length > 0;
    const singleKey = `${item.slug}||${q.answer}`;
    if (A4_SINGLE_KEY.has(singleKey)) {
      a4SingleSeen.add(singleKey);
      if (hasList) {
        fail(
          "A4",
          `"${item.title}" → "${q.answer}" is listed as single-form but now HAS an ` +
            "accept-list — delete the A4_SINGLE_FORM row",
        );
      }
      continue;
    }
    if (q.acceptExhaustive) {
      a4Exhaustive += 1;
      if (hasList) {
        fail(
          "A4",
          `"${item.title}" → answer "${q.answer}" declares acceptExhaustive but HAS ` +
            "an accept-list — one of the two is wrong",
        );
      }
      continue;
    }
    if (!hasList && oneWordAnswer(q.answer)) {
      a4OneWordSkipped += 1;
      continue;
    }
    a4Required += 1;
    if (!hasList) {
      fail(
        "A4",
        `no accept-list for "${item.title}" → answer "${q.answer}" — more than one ` +
          "word, so the normaliser cannot stand in for one",
      );
    }
  }
}

// A row the owner has OVERRULED is not expected to be reached: A4_SINGLE_KEY no
// longer holds it, so it can never be "seen". It is not rot, and its own rot
// check is the A4_SINGLE_FORM_OVERRULED loop below.
for (const e of A4_SINGLE_FORM) {
  if (A4_OVERRULED_KEY.has(`${e.item}||${e.answer}`)) continue;
  if (!a4SingleSeen.has(`${e.item}||${e.answer}`)) {
    fail("A4", `single-form row points at an answer that is not in the bank — delete it: "${e.item}" / "${e.answer}"`);
  }
}
for (const e of A4_SINGLE_FORM_LISTENING) {
  if (!a4SingleListeningSeen.has(`${e.item}||${e.answer}`)) {
    fail(
      "A4",
      `single-form row points at a gap that is not in the bank — delete it: "${e.item}" / "${e.answer}"`,
    );
  }
}
// 🔴 THE OVERRIDE IS CLOSED BOTH WAYS. Each overruled row exists because the
// owner ruled that the answer DOES have something to accept. If it stops having
// one, the override is an excuse for nothing and the row must go with it.
for (const e of A4_SINGLE_FORM_OVERRULED) {
  const it = ITEMS.find((i) => i.slug === e.item);
  if (!it) {
    fail("A4", `an overruled row names an item that is not in the bank — delete it: "${e.item}"`);
    continue;
  }
  const unit =
    it.taskType === "LISTENING_PART_A"
      ? (it.payload.gaps ?? []).find((g) => g.answer === e.answer)
      : (it.payload.questions ?? []).find((q) => q.kind !== "match" && q.answer === e.answer);
  if (!unit) {
    fail("A4", `an overruled row names an answer that is not in the bank — delete it: "${e.item}" / "${e.answer}"`);
    continue;
  }
  const accepted = [
    ...(unit.variants ?? []),
    ...(it.taskType === "LISTENING_PART_A"
      ? listeningAcceptFor(it.slug, unit.id)
      : readingAcceptFor(it.slug, unit.id)),
  ];
  if (accepted.length === 0) {
    fail(
      "A4",
      `"${e.item}" / "${e.answer}" is overruled as NOT single-form, but it has no ` +
        "accept-list at all — the override is an excuse for nothing, delete the row",
    );
  } else if (!accepted.includes(e.variant)) {
    fail(
      "A4",
      `"${e.item}" / "${e.answer}" is overruled on the strength of ${JSON.stringify(e.variant)}, ` +
        `which is no longer accepted — the ruling and the content have parted company`,
    );
  }
}

// Population AFTER the narrowing. If every answer in the bank ever became one
// word, A4 would pass by looking at nothing at all.
if (a4Required === 0) {
  fail("A4", "the one-word skip swallowed every answer — A4 asserted nothing");
}

/**
 * 🔴 A7 · A MEASURED LIMIT OF THE MARKER, NOT A DEFECT IN THE CONTENT.
 * Ruled by the owner on 3 September 2026, in its own words:
 *
 *     Marker limitation, measured 3 September 2026: `normalize()` removes the
 *     hedge before the article, so "about a year" reduces to "year" while the
 *     gate's probe "the about a year" reduces to "aboutayear". The content is
 *     correct; the probe order is not reachable by any candidate answer. Fixing
 *     the order changes the marking of every live item and therefore belongs in
 *     its own change, with the before/after count in front of the owner.
 *
 * The owner asked for that count before any change: run the old and the new
 * normaliser over every answer string saved on `OetAttempt` and report how many
 * verdicts move, in each direction. NO CHANGE BEFORE THE COUNT.
 *
 * Two rows, keyed by the case's `where` (item title → gap label). Closed both
 * ways, like every other list in this file: a case listed here that starts
 * PASSING fails the build, so the day `normalize()` is fixed these rows must go.
 */
const A7_MARKER_LIMIT: { where: string; answer: string; why: string }[] = [
  {
    where: "Listening Part A · script 6 — Optometry (difficulty driving at night) → Duration of the problem",
    answer: "about a year",
    why: "hedge-then-article: \"about a year\" normalises to \"year\", the probe \"the about a year\" to \"aboutayear\"",
  },
  {
    where: "Listening Part A · script 12 — Occupational therapy (recovery after a wrist fracture) → Grip strength compared with the other side",
    answer: "about half",
    why: "hedge-then-article: \"about half\" normalises to \"half\", the probe \"the about half\" to \"abouthalf\"",
  },
];
const A7_MARKER_LIMIT_KEY = new Set(A7_MARKER_LIMIT.map((e) => e.where));
const a7LimitSeen = new Set<string>();

// ── A5-A7 · the marking actually accepts what it should ────────────────────
type Case = { where: string; answer: string; variants: readonly string[] };
const CASES: Case[] = [];
for (const item of LISTENING) {
  for (const gap of item.payload.gaps ?? []) {
    CASES.push({
      where: `${item.title} → ${gap.label}`,
      answer: gap.answer,
      variants: [...(gap.variants ?? []), ...listeningAcceptFor(item.slug, gap.id)],
    });
  }
}
for (const item of READING) {
  for (const q of (item.payload.questions ?? []).filter((x) => x.kind !== "match")) {
    CASES.push({
      where: `${item.title} → "${q.answer}"`,
      answer: q.answer,
      variants: [...(q.variants ?? []), ...readingAcceptFor(item.slug, q.id)],
    });
  }
}

/** Digit ↔ word, for A7. Hand-typed here rather than imported from normalize(),
 *  so the gate does not agree with the mapping under test. */
const WORD_FOR: Record<string, string> = {
  "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six",
  "7": "seven", "8": "eight", "9": "nine", "10": "ten", "12": "twelve",
  "18": "eighteen", "28": "twenty-eight", "50": "fifty",
};
const DIGIT_FOR: Record<string, string> = Object.fromEntries(
  Object.entries(WORD_FOR).map(([d, w]) => [w, d]),
);

let numericChecked = 0;
for (const c of CASES) {
  // A5 · the authored answer itself.
  if (!accepts(c.answer, c.variants, c.answer)) {
    fail("A5", `${c.where}: the item's own answer "${c.answer}" is not accepted`);
  }
  // A6 · every variant.
  for (const v of c.variants) {
    if (!accepts(c.answer, c.variants, v)) {
      fail("A6", `${c.where}: authored variant "${v}" is not accepted`);
    }
  }
  // A7a · "the " + answer.
  {
    const ok = accepts(c.answer, c.variants, `the ${c.answer}`);
    const listed = A7_MARKER_LIMIT_KEY.has(c.where);
    if (listed) {
      a7LimitSeen.add(c.where);
      if (ok) {
        fail(
          "A7",
          `${c.where}: "the ${c.answer}" IS accepted now — delete the A7_MARKER_LIMIT row`,
        );
      }
    } else if (!ok) {
      fail("A7", `${c.where}: "the ${c.answer}" is not accepted`);
    }
  }
  // A7b · the digit/word counterpart, where the answer opens with one.
  const first = c.answer.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  const swapped = WORD_FOR[first] ?? DIGIT_FOR[first];
  if (swapped) {
    const rest = c.answer.trim().split(/\s+/).slice(1).join(" ");
    const alt = rest ? `${swapped} ${rest}` : swapped;
    numericChecked += 1;
    if (!accepts(c.answer, c.variants, alt)) {
      fail("A7", `${c.where}: numeric counterpart "${alt}" is not accepted`);
    }
  }
}
if (numericChecked === 0) {
  fail("A7", "no answer in the bank starts with a number — the numeric check was vacuous");
}
// The limit list cannot rot either: a row naming a case that no longer exists is
// an exemption for nothing.
for (const e of A7_MARKER_LIMIT) {
  if (!a7LimitSeen.has(e.where)) {
    fail("A7", `A7_MARKER_LIMIT names a case that is not in the bank — delete it: "${e.where}"`);
  }
}

// ── A8 · a wrong answer is REFUSED, or none of the above means anything ────
const REFUSALS: { where: string; answer: string; variants: readonly string[]; given: string }[] = [
  // Hand-typed. Each is a plausible thing a candidate might write that is wrong.
  { where: "generic", answer: "dog", variants: [], given: "cat" },
  { where: "generic", answer: "three weeks", variants: [], given: "four weeks" },
  { where: "generic", answer: "ibuprofen", variants: [], given: "paracetamol" },
  // 🔴 THE HEDGES THAT ARE MEANING, NOT WORDING.
  { where: "hedge", answer: "under 5", variants: [], given: "over 5" },
  { where: "hedge", answer: "at least 50 hours", variants: [], given: "50 hours or fewer" },
  { where: "hedge", answer: "more than 20", variants: [], given: "less than 20" },
  // 🔴 The line the handoff drew deliberately: the word was never said.
  { where: "migraine", answer: "flashing lines", variants: ["lines"], given: "flashing lights" },
  { where: "urinary", answer: "stings", variants: ["stinging"], given: "burning" },
];
for (const r of REFUSALS) {
  if (accepts(r.answer, r.variants, r.given)) {
    fail("A8", `${r.where}: "${r.given}" was ACCEPTED for "${r.answer}" — it must not be`);
  }
}

// ── A9 · the dose that must never be forgiven ──────────────────────────────
const FOLIC_SLUG = "lis-a-f3-midwife-antenatal-booking-visit";
const FOLIC_LABEL = "Folic acid dose:";
const folicItem = listeningBySlug.get(FOLIC_SLUG);
const folicGap = folicItem?.payload.gaps?.find((g) => g.label === FOLIC_LABEL);
if (!folicGap) {
  // Population before the guard: if this gap is ever renamed, the check below
  // would silently test nothing.
  fail("A9", `the folic-acid gap ("${titleOf(FOLIC_SLUG)}" → "${FOLIC_LABEL}") was not found`);
} else {
  const variants = [
    ...(folicGap.variants ?? []),
    ...listeningAcceptFor(FOLIC_SLUG, folicGap.id),
  ];
  for (const wrong of ["400 mg", "400mg", "400 milligrams", "400 mgs"]) {
    if (accepts(folicGap.answer, variants, wrong)) {
      fail("A9", `"${wrong}" was ACCEPTED for the folic acid dose — that is a 1000× dose`);
    }
  }
  // The control: the real answer and the authored variants still work, so a
  // normaliser that refused everything could not pass A9 by accident.
  if (!accepts(folicGap.answer, variants, "400 micrograms")) {
    fail("A9", "the folic-acid gap no longer accepts its own answer");
  }
  if (!accepts(folicGap.answer, variants, "400 mcg")) {
    fail("A9", "the folic-acid gap no longer accepts \"400 mcg\"");
  }
}

// ── A10 · NO TWO ANSWERS INSIDE ONE ITEM MAY NORMALISE ALIKE ───────────────
//
// 🔴 THIS IS THE HOLE THE PREVIOUS PR NAMED IN ITS OWN CLOSING LIST and did not
// close: "I do not check that two different answers within one item now
// normalize to the same string." Nasir ran it by hand and it found a collision
// he had authored himself — inside the Dietitian item, "Coffee taken with"
// (answer `two sugars`) also accepted `sugar`, which is the entire answer to a
// DIFFERENT gap in the same item, "Reduce this in coffee gradually". A gap
// measuring HOW MUCH could be answered without the amount.
//
// The check is on the WHOLE accepted set — answer plus payload variants plus the
// overlay — because a collision reached through a variant marks just as wrongly
// as one between two answers. It runs on Listening gaps and on Reading FREE-TEXT
// questions; "match" questions are compared exactly and leniency never reaches
// them.
//
// This is a benefit of counting, not of looking. Reading the list one entry at a
// time cannot find it: both halves are individually reasonable.
//
// It earned its keep again on 2 September 2026, this time on newly authored
// content rather than a legacy accept-list. In `Part A — Blood transfusion
// safety`, q8 ("Where is the grouping sample labelled?") and q15 ("The final
// check happens at the ___") both rested on "bedside" — and the text says both,
// so neither answer was wrong. The defect was that one clue then solved two
// questions and the item was easier than its question count suggested. The owner
// rewrote q15 onto a different fact in the same text ("almost never a laboratory
// error"). Nothing is exempted here: A10 passes with no pending list at all.
type Accepted = { id: string; label: string; strings: string[] };

function collisionsIn(itemTitle: string, entries: Accepted[]) {
  const seen = new Map<string, { id: string; label: string; raw: string }>();
  for (const e of entries) {
    // Within ONE gap a repeat is harmless — the overlay usually restates the
    // answer as its own first variant. Only cross-gap collisions mark wrongly.
    const own = new Set<string>();
    for (const raw of e.strings) {
      const norm = normalize(raw);
      if (!norm || own.has(norm)) continue;
      own.add(norm);
      const prior = seen.get(norm);
      if (prior && prior.id !== e.id) {
        fail(
          "A10",
          `"${itemTitle}": "${prior.label}" (via "${prior.raw}") and "${e.label}" (via "${raw}") ` +
            `both accept the same thing — both normalise to "${norm}"`,
        );
        continue;
      }
      if (!prior) seen.set(norm, { id: e.id, label: e.label, raw });
    }
  }
}

for (const item of LISTENING) {
  collisionsIn(
    item.title,
    (item.payload.gaps ?? []).map((g) => ({
      id: g.id,
      label: g.label,
      strings: [g.answer, ...(g.variants ?? []), ...listeningAcceptFor(item.slug, g.id)],
    })),
  );
}
for (const item of READING) {
  collisionsIn(
    item.title,
    (item.payload.questions ?? [])
      .filter((q) => q.kind !== "match")
      .map((q) => ({
        id: q.id,
        label: `answer "${q.answer}"`,
        strings: [q.answer, ...(q.variants ?? []), ...readingAcceptFor(item.slug, q.id)],
      })),
  );
}

// ── A11 · EVERY LISTENING VARIANT IS IN THAT ITEM'S OWN AUDIO ──────────────
//
// Rule 1 of the authoring was "only what was actually said". The first version
// of the accept-lists broke it: it refused `flashing lights` and `burning`
// because the audio never said them, then accepted `soft drink`, `pudding`,
// `saucepan`, `flu jab`, `backbone` and `finances`, which the audio never said
// either. 63 variants were withdrawn on 2 September 2026. This check is what
// stops the same inconsistency being written back in.
//
// ⚠️ READING PART A IS DELIBERATELY OUT OF SCOPE. There the answer comes from
// printed texts that live in the payload as `texts`, not from an audio script.
// Checking those is a different job and is not in this change.
//
// ── WHAT "IN THE AUDIO" MEANS ───────────────────────────────────────────────
//
// The words are tokenised with the MARKER'S OWN pipeline (normalizeTokens), so
// number and word are one, hyphen and space are one, and a trailing plural is
// forgiven — the same rules a candidate's answer is judged by. On top of that:
//
//   · THE SAME WORD IN ANOTHER FORM counts, which is exactly what the
//     correction says to keep accepting (sit↔sitting, red↔redness). It is
//     decided by a shared stem plus a WRITTEN list of inflectional endings, not
//     by a shared-prefix threshold: "bread" and "breakfast" share four letters
//     and are not the same word, while "wake" and "waking" share three and are.
//
//   · A SMALL WRITTEN LIST OF ABBREVIATIONS AND SPELLINGS is exempt, as the
//     correction requires. Each carries its reason.
//
//   · FUNCTION WORDS are not checked. A11 asks whether the candidate heard the
//     right THING; "seven out of ten" is the spoken form of 7/10 whether or not
//     the script happens to contain the word "of". Every one of the 63 variants
//     withdrawn on 2 September differed by a CONTENT word — pudding, saucepan,
//     backbone, finances — so this list could not have let a single one through.

/* 🔴 THE EXEMPTION LIST, THE FUNCTION WORDS AND THE SAME-WORD RULE MOVED OUT
 * ON 7 SEPTEMBER 2026, to scripts/gates/word-forms.ts. Nothing about them
 * changed; they left because this file is a SCRIPT and importing it runs the
 * whole gate, so nothing could measure how many rows pass only because
 * sameWordAnotherForm() fired. `out` had been standing in for `outer` on one
 * live row for months. Read them there. */

/**
 * 🔴 THE WRITTEN, PER-VARIANT EXEMPTION LIST — Nasir's ruling of 2 September 2026.
 *
 * A11 found twelve variants whose words the script never says. He ruled on all
 * twelve: four were withdrawn, and these eight stay. The reason he gave is a
 * rule, not a shrug:
 *
 *   AN ADDED WORD IS ACCEPTABLE ONLY WHEN IT NAMES NOTHING NEW — when it says
 *   nothing about the thing that was not already said.
 *
 *   `level` in "HbA1c level"      an HbA1c IS a level               kept
 *   `side` in "left side"         "the left" IS a side              kept
 *   `outside` for "outer ankle"   the same place, reordered         kept
 *   `medicine` for "medication"   one word's family                 kept
 *   `bread` for "toast"           a DIFFERENT thing                  withdrawn
 *   `short of breath`             built from other words, not       withdrawn
 *                                 another form of "breathless"
 *   `morning` for "around four"   the script never mentions morning withdrawn
 *
 * That last group is why the ruling holds together: refusing `burning` on
 * `stings` and accepting `short of breath` on `breathless` would have been the
 * same inconsistency twice.
 *
 * ── 🔴 PER VARIANT, NEVER PER WORD ─────────────────────────────────────────
 *
 * Each entry names the ITEM, the GAP and the VARIANT. Exempting the word
 * `level` everywhere would let a real synonym through the next time somebody
 * wrote one. `night-time` is exempt in two items and is listed twice for
 * exactly that reason — the two rows are not interchangeable.
 *
 * This list is CLOSED: a variant whose words are not in its script and which is
 * not named here FAILS THE BUILD. And an entry pointing at a variant that no
 * longer exists in the overlay also FAILS, so it cannot rot into a list of
 * excuses for content that has been deleted.
 *
 * ⚠️ An entry that is not currently load-bearing is REPORTED, not failed, and
 * that is not a formality — the count moves under you.
 *
 * 🔴 `OT` ON "Preventing falls in older adults" IS THE CASE TO REMEMBER. It sat
 * in this list reported as NOT load-bearing, which reads like a row that could
 * be deleted. It could not: the variant was passing the run-on rule instead,
 * because `joined` had no spaces in it and two unrelated words abutted to spell
 * "ot". When that rule was narrowed to align on token boundaries on 7 September
 * 2026, the coincidence went and the row became load-bearing again — the only
 * thing standing between a correct answer and a red gate.
 *
 * So: NOT LOAD-BEARING MEANS SOMETHING ELSE IS CARRYING IT, NOT THAT NOTHING IS.
 * Find out what before deleting the row.
 */
/**
 * 🔴 `ruling-2026-09-07` — THE OWNER RULED ON ALL 156 OPEN ROWS IN ONE PASS.
 * 34 KEEP, 120 REFUSE, 2 he would not rule on. The 120 are DELETED from the
 * content, not exempted here; the 34 below are the ones he kept, each carrying
 * his own category and reason from
 * `AlmiOET_accept_list_DECISIONS_2026-09-07.json`, transcribed, not summarised.
 * His rule, verbatim: "An accept list may cover only other ways of writing the
 * SAME word — a spelling variant, a standard abbreviation or unit expansion, or
 * another grammatical form. It may never cover a different word that means the
 * same thing. A synonym accepted is a wrong answer marked right."
 *
 * ABBR 20 · SPELL 9 · INFLECT 5. Every one is still closed both ways: the day a
 * row stops failing it must be deleted, so none of them can rot into a blanket
 * excuse for content that changed underneath it.
 */
type VariantExemption = {
  item: string;
  gap: string;
  variant: string;
  source:
    | "ruling-2026-09-02"
    | "irregular-form"
    | "reading-audit-2026-09-02"
    | "ruling-2026-09-07"
    | "pending-decision";
  why: string;
};

const A11_EXEMPT_VARIANT: VariantExemption[] = [
  {
    item: "lis-a-script-9-veterinary-science-a-stiff-older-dog",
    gap: "Breed",
    variant: "lab",
    source: "ruling-2026-09-07",
    why:
      "ABBR: lab is the standard clipping of labrador, and the script says " +
      "\"he's a labrador\" and \"a labrador, yes\". It is the same shape as BP, " +
      "hep B, C. diff and CO2, all of which I kept. Refusing it would apply my " +
      "own rule four times and break it on the fifth. The ambiguity I raised — " +
      "lab also meaning laboratory — does not apply: marking compares an answer " +
      "against THAT question's key only, never across the bank, and the gap " +
      "label is \"Breed\".",
  },
  {
    item: "lis-a-medication-side-effect",
    gap: "Suspected cause",
    variant: "BP medication",
    source: "ruling-2026-09-07",
    why: "ABBR: BP is the standard abbreviation of blood pressure",
  },
  {
    item: "lis-a-ongoing-sleep-problem",
    gap: "Referral to be made for",
    variant: "CBT",
    source: "ruling-2026-09-07",
    why: "ABBR: CBT is the standard initialism of cognitive behavioural therapy",
  },
  {
    item: "lis-a-ongoing-sleep-problem",
    gap: "Referral to be made for",
    variant: "cognitive behavioral therapy",
    source: "ruling-2026-09-07",
    why: "SPELL: US spelling of behavioural",
  },
  {
    item: "lis-a-script-3-dietetics-unintentional-weight-loss",
    gap: "Shopping is done by",
    variant: "her neighbor",
    source: "ruling-2026-09-07",
    why: "SPELL: US spelling of neighbour",
  },
  {
    item: "lis-a-script-6-optometry-difficulty-driving-at-night",
    gap: "General health condition",
    variant: "high BP",
    source: "ruling-2026-09-07",
    why: "ABBR: BP",
  },
  {
    item: "lis-a-script-7-pharmacy-a-medicines-review",
    gap: "First action: check her ______ sitting and standing",
    variant: "BP",
    source: "ruling-2026-09-07",
    why: "ABBR: BP",
  },
  {
    item: "lis-a-script-10-radiography-safety-checks-before-an-mri-scan",
    gap: "Difficulty reported",
    variant: "claustrophobic",
    source: "ruling-2026-09-07",
    why: "INFLECT: claustrophobic — adjective form of claustrophobia",
  },
  {
    item: "lis-a-script-13-medicine-breathlessness-with-an-irregular-pulse",
    gap: "Distance he can walk now",
    variant: "fifty meters",
    source: "ruling-2026-09-07",
    why: "SPELL: US spelling of metres",
  },
  {
    item: "lis-a-script-13-medicine-breathlessness-with-an-irregular-pulse",
    gap: "Before leaving the building: an",
    variant: "EKG",
    source: "ruling-2026-09-07",
    why: "SPELL: EKG is the US form of ECG",
  },
  {
    item: "lis-a-script-14-physiotherapy-knee-pain-in-a-runner",
    gap: "Weekly distance",
    variant: "40 km",
    source: "ruling-2026-09-07",
    why: "ABBR: km is the symbol for kilometres",
  },
  {
    item: "lis-a-script-14-physiotherapy-knee-pain-in-a-runner",
    gap: "Weekly distance",
    variant: "forty km",
    source: "ruling-2026-09-07",
    why: "ABBR: km",
  },
  {
    item: "lis-a-script-15-nursing-a-pre-operative-assessment",
    gap: "Date of surgery",
    variant: "12th",
    source: "ruling-2026-09-07",
    why: "ABBR: 12th is the numeral form of twelfth",
  },
  {
    item: "lis-a-script-15-nursing-a-pre-operative-assessment",
    gap: "Date of surgery",
    variant: "the 12th",
    source: "ruling-2026-09-07",
    why: "ABBR: 12th",
  },
  {
    item: "lis-a-script-15-nursing-a-pre-operative-assessment",
    gap: "No food after",
    variant: "12 midnight",
    source: "ruling-2026-09-07",
    why: "ABBR: 12 midnight — numeral form, meaning unchanged",
  },
  {
    item: "lis-a-f1-dietitian-consultation-type-2-diabetes",
    gap: "Referred because this was high",
    variant: "HbA1c level",
    source: "ruling-2026-09-02",
    why: "'level' names nothing new — an HbA1c IS a level",
  },
  {
    item: "lis-a-f1-dietitian-consultation-type-2-diabetes",
    gap: "Referred because this was high",
    variant: "blood sugar level",
    source: "ruling-2026-09-02",
    why: "same reason; 'blood sugar' is itself said in the script",
  },
  {
    item: "lis-a-f2-occupational-therapy-home-visit-post-stroke",
    gap: "Rail is only on",
    variant: "left side",
    source: "ruling-2026-09-02",
    why: "'the left' IS a side — no new information",
  },
  {
    item: "lis-a-f2-occupational-therapy-home-visit-post-stroke",
    gap: "Rail is only on",
    variant: "left-hand side",
    source: "ruling-2026-09-02",
    why: "same reason as 'left side'",
  },
  {
    item: "lis-a-ankle-injury-after-a-fall",
    gap: "Site of worst swelling",
    variant: "outside of the ankle",
    source: "ruling-2026-09-02",
    why: "another ordering of 'outer ankle' — the same place",
  },
  {
    item: "lis-a-ankle-injury-after-a-fall",
    gap: "Site of worst swelling",
    variant: "outer side of the ankle",
    source: "ruling-2026-09-02",
    why: "same reason as 'outside of the ankle'",
  },
  {
    item: "lis-a-medication-side-effect",
    gap: "Suspected cause",
    variant: "blood pressure medicine",
    source: "ruling-2026-09-02",
    why: "'medication' and 'medicine' are one word's family",
  },
  // ── not the ruling's: a limit of the written morphology above ─────────────
];

/**
 * 🔴 A12's WRITTEN, PER-VARIANT EXEMPTION LIST — from Nasir's Reading Part A
 * audit of 2 September 2026.
 *
 * He measured all 158 Reading variants against their own texts himself, was
 * suspicious of 37, and found 8 that were genuinely wrong. Those 8 are withdrawn
 * in this change. The remaining suspicions were his counting being rough, not the
 * content being wrong, and he wrote down why each survives:
 *
 *   number ↔ word          28 / twenty-eight, 18 / eighteen
 *   another form           massage/massaging, remove/removing/removal,
 *                          mobile/mobilised/mobility, dehydrated/dehydration
 *   spelling or joining    non-blanching/nonblanching, hypoactive/hypo-active,
 *                          tai chi/taichi, night/night-time
 *   a real spelling split  dietitian / dietician
 *   an abbreviation        occupational therapist / OT, UTI
 *   longer, nothing new    capacity / mental capacity, condition / clinical
 *                          condition, urinary / urinary tract, bifocals /
 *                          bifocal glasses / bifocal lenses
 *
 * Most of those pass A12 on their own, because the shared tolerance already
 * covers number, form, spelling and hyphenation. The rows below are the ones
 * that do NOT — an abbreviation the text spells out, or an added word the text
 * never prints. Each is named per variant, never per word: exempting `mental`
 * everywhere would forgive the next variant that used it to mean something new.
 *
 * ⚠️ HIS LIST NAMED THESE, AND MY RUN FLAGGED EXACTLY THESE. Nothing more was
 * flagged, so nothing here is my judgement about content — see the PR body,
 * where that is stated as the thing I would have stopped on.
 */
/**
 * 🔴 NOT MINE TO DECIDE — handed back, not resolved.
 *
 * The Reading audit told me to stop and report anything my own run flagged
 * beyond the exemptions it named, rather than judge it myself. It flagged four.
 * Two were my ending list being narrower than the audit's own rule (it names
 * `mobile → mobilised` and `dose → dosage` as forms that must survive), so the
 * RULE was widened — see INFLECTION above. These two are not that. They are
 * content questions, and they are Nasir's:
 *
 *   `occupational therapist` — the text prints "an occupational-therapy home
 *      assessment". It never prints "therapist". This is not only a variant
 *      question: the item's own ANSWER is "an occupational therapist", so A12 is
 *      reporting that a seeded answer names a person the source never names.
 *
 *   `night-time` — the delirium text says "worse at night" and "at night",
 *      never "time". The audit's survivors table does list `night → night-time`,
 *      and the identical variant was ruled a per-variant exemption for two
 *      LISTENING items on 2 September — but it was not among the exemptions
 *      this audit named for Reading, so adding it is a decision and the
 *      instruction was not to make one.
 *
 * ⚠️ THIS LIST IS A TO-DO, NOT AN ALLOWANCE, so it is stricter than the
 * exemption lists: a row that has STOPPED failing fails the build, because a
 * resolved question should be deleted rather than left lying here.
 *
 * 🔴 ONE ROW WAS DELETED ON 7 SEPTEMBER 2026 AND THE QUESTION IS STILL OPEN.
 * `night-time` on "Reading Part A — Delirium in hospital" (answer `night`)
 * stopped failing, so this list's own rule required its removal. It did NOT
 * stop failing because anyone answered it: A12 splits `night-time` into
 * `night` + `time`, and the item's rewritten text now happens to contain the
 * word "time" in an unrelated sentence ("…fluctuates through the day…").
 * A COINCIDENCE OF WORDING IS NOT A RULING. The question Nasir was handed —
 * is `night-time` acceptable where the text only ever says "at night"? — is
 * recorded here because A12 can no longer see it, and the row would fail the
 * build if it were left in.
 */
const A12_PENDING_DECISION: VariantExemption[] = [
  {
    item: "rea-a-f2-preventing-falls-in-older-adults",
    gap: "an occupational therapist",
    variant: "occupational therapist",
    source: "pending-decision",
    why: "the text prints 'occupational-therapy', never 'therapist' — and this is the item's own answer, not just a variant",
  },
];

const A12_EXEMPT_VARIANT: VariantExemption[] = [
  {
    item: "rea-a-sepsis",
    gap: "blood pressure",
    variant: "BP",
    source: "ruling-2026-09-07",
    why: "ABBR: BP",
  },
  {
    item: "rea-a-hypoglycaemia",
    gap: "15–20 g",
    variant: "15 to 20 grams",
    source: "ruling-2026-09-07",
    why: "ABBR: g written out as grams, unit complete",
  },
  {
    item: "rea-a-hypoglycaemia",
    gap: "15–20 g",
    variant: "15-20 grams",
    source: "ruling-2026-09-07",
    why: "ABBR: g written out as grams, unit complete",
  },
  {
    item: "rea-a-hypoglycaemia",
    gap: "15–20 g",
    variant: "15g to 20g",
    source: "ruling-2026-09-07",
    why: "ABBR: g written out per figure, unit complete",
  },
  {
    item: "rea-a-acute-stroke",
    gap: "hypoglycaemia",
    variant: "hypoglycemia",
    source: "ruling-2026-09-07",
    why: "SPELL: US spelling of hypoglycaemia",
  },
  {
    item: "rea-a-preventing-blood-clots-in-hospital",
    gap: "swelling",
    variant: "swollen",
    source: "ruling-2026-09-07",
    why: "INFLECT: swollen — adjective form of swelling",
  },
  {
    item: "rea-a-preventing-blood-clots-in-hospital",
    gap: "arterial",
    variant: "artery",
    source: "ruling-2026-09-07",
    why: "INFLECT: artery — noun form of arterial",
  },
  {
    item: "rea-a-preventing-blood-clots-in-hospital",
    gap: "writing",
    variant: "written",
    source: "ruling-2026-09-07",
    why: "INFLECT: written — participle form of writing",
  },
  {
    item: "rea-a-high-risk-medicines",
    gap: "nought",
    variant: "naught",
    source: "ruling-2026-09-07",
    why: "SPELL: naught is a variant spelling of nought",
  },
  {
    item: "rea-a-high-risk-medicines",
    gap: "large",
    variant: "larger",
    source: "ruling-2026-09-07",
    why: "INFLECT: larger — comparative form of large",
  },
  {
    item: "rea-a-wound-infection-and-antibiotics",
    gap: "Clostridioides difficile",
    variant: "C. diff",
    source: "ruling-2026-09-07",
    why: "ABBR: C. diff is the standard clinical abbreviation",
  },
  {
    item: "rea-a-oxygen-therapy",
    gap: "carbon dioxide",
    variant: "CO2",
    source: "ruling-2026-09-07",
    why: "ABBR: CO2 is the symbol for carbon dioxide",
  },
  {
    item: "rea-a-acute-kidney-injury",
    gap: "26 micromol/L",
    variant: "26 micromol per litre",
    source: "ruling-2026-09-07",
    why: "ABBR: micromol/L written out in full, unit complete",
  },
  {
    item: "rea-a-acute-kidney-injury",
    gap: "a litre",
    variant: "a liter",
    source: "ruling-2026-09-07",
    why: "SPELL: US spelling of litre",
  },
  {
    item: "rea-a-chest-pain-and-acute-coronary-syndrome",
    gap: "300 mg",
    variant: "300 milligrams",
    source: "ruling-2026-09-07",
    why: "ABBR: mg written out as milligrams, unit complete",
  },
  {
    item: "rea-a-sharps-injury-and-exposure-to-blood",
    gap: "hepatitis B",
    variant: "hep B",
    source: "ruling-2026-09-07",
    why: "ABBR: hep B is the standard clinical abbreviation",
  },
  {
    item: "rea-a-a-flare-up-of-chronic-obstructive-lung-disease",
    gap: "the colour",
    variant: "the color",
    source: "ruling-2026-09-07",
    why: "SPELL: US spelling of colour",
  },
  {
    item: "rea-a-a-flare-up-of-chronic-obstructive-lung-disease",
    gap: "carbon dioxide",
    variant: "CO2",
    source: "ruling-2026-09-07",
    why: "ABBR: CO2",
  },
  {
    item: "rea-a-diabetic-ketoacidosis",
    gap: "the electrocardiogram",
    variant: "the ECG",
    source: "ruling-2026-09-07",
    why: "ABBR: ECG is the standard abbreviation of electrocardiogram",
  },
  {
    item: "rea-a-diabetic-ketoacidosis",
    gap: "litres",
    variant: "liters",
    source: "ruling-2026-09-07",
    why: "SPELL: US spelling of litres",
  },
  {
    item: "rea-a-malnutrition-screening",
    gap: "dietitian",
    variant: "dietician",
    source: "reading-audit-2026-09-02",
    why: "both spellings are current English; failing a nurse on the spelling is not what this question measures",
  },
  {
    item: "rea-a-f1-preventing-pressure-injuries",
    gap: "the dietitian",
    variant: "dietician",
    source: "reading-audit-2026-09-02",
    why: "same spelling split, in the other item that asks for it",
  },
  {
    item: "rea-a-informed-consent-essentials",
    gap: "capacity",
    variant: "mental capacity",
    source: "reading-audit-2026-09-02",
    why: "'mental' names nothing new — the text's capacity IS mental capacity",
  },
  {
    item: "rea-a-f1-preventing-pressure-injuries",
    gap: "condition",
    variant: "clinical condition",
    source: "reading-audit-2026-09-02",
    why: "'clinical' names nothing new in a clinical text",
  },
  {
    item: "rea-a-f1-preventing-pressure-injuries",
    gap: "non-blanching redness",
    variant: "redness that does not blanch",
    source: "reading-audit-2026-09-02",
    why: "the same fact written as a clause instead of a compound",
  },
  {
    item: "rea-a-f2-preventing-falls-in-older-adults",
    gap: "an occupational therapist",
    variant: "OT",
    source: "reading-audit-2026-09-02",
    why: "the standard abbreviation of the words the text prints in full",
  },
  {
    item: "rea-a-f2-preventing-falls-in-older-adults",
    gap: "bifocals",
    variant: "bifocal glasses",
    source: "reading-audit-2026-09-02",
    why: "'glasses' names nothing new — bifocals ARE glasses",
  },
  {
    item: "rea-a-f2-preventing-falls-in-older-adults",
    gap: "bifocals",
    variant: "bifocal lenses",
    source: "reading-audit-2026-09-02",
    why: "same reason as 'bifocal glasses'",
  },
  {
    item: "rea-a-f3-delirium-in-hospital",
    gap: "urinary",
    variant: "urinary tract",
    source: "reading-audit-2026-09-02",
    why: "'tract' names nothing new — the text's urinary source IS the urinary tract",
  },
  {
    item: "rea-a-f3-delirium-in-hospital",
    gap: "urinary",
    variant: "urinary tract infection",
    source: "reading-audit-2026-09-02",
    why: "same reason, written out in full",
  },
  {
    item: "rea-a-f3-delirium-in-hospital",
    gap: "urinary",
    variant: "UTI",
    source: "reading-audit-2026-09-02",
    why: "the standard abbreviation of 'urinary tract infection'",
  },
];

const exemptKey = (item: string, gap: string, variant: string) => `${item}||${gap}||${variant}`;

/** One variant of one answer, as the checks below see it. */
/** `itemSlug`, not a title: the exemption lists are keyed by slug so a rename
 *  cannot silently empty them. Messages print titleOf(itemSlug). */
type VariantCase = { itemSlug: string; gapLabel: string; variant: string };

type SourceCheckResult = {
  checked: number;
  abbreviations: number;
  functionWords: number;
  sources: number;
  loadBearing: Set<string>;
};

/**
 * 🔴 A11 AND A12 ARE THE SAME CHECK OVER DIFFERENT SOURCES, so they are the same
 * FUNCTION over different sources. Listening variants must be built from the
 * item's `audioScript`; Reading variants from the item's own `texts`. The
 * tolerance — form, spelling, number, hyphen, the abbreviation list, the
 * function words, the per-variant exemptions — is shared by construction. Two
 * copies would be two things that could drift, and a Reading check that was
 * quietly more forgiving than the Listening one is precisely the inconsistency
 * this whole series of corrections has been about.
 */
function runSourceWordCheck(opts: {
  check: "A11" | "A12";
  /** What the source is called in a failure message. */
  sourceName: string;
  /** The text every variant of this item must be built from. */
  sourceFor: (itemSlug: string) => string;
  /** Every (item, answer, variant) triple to check. */
  cases: VariantCase[];
  exemptions: VariantExemption[];
  /** Questions handed back to the author, not answered here. */
  pending?: VariantExemption[];
}): SourceCheckResult {
  const { check, sourceName, sourceFor, cases, exemptions } = opts;
  const pending = opts.pending ?? [];
  const pendingByKey = new Map(pending.map((e) => [exemptKey(e.item, e.gap, e.variant), e]));
  const pendingSeen = new Set<string>();
  const pendingLoadBearing = new Set<string>();

  const byKey = new Map(exemptions.map((e) => [exemptKey(e.item, e.gap, e.variant), e]));
  if (byKey.size !== exemptions.length) {
    fail(check, `the ${check} per-variant exemption list contains a duplicate row`);
  }

  const seen = new Set<string>();
  const loadBearing = new Set<string>();
  let checked = 0;
  let abbreviations = 0;
  let functionWords = 0;

  // Tokenise each source once, not once per variant.
  const tokensFor = new Map<string, { words: Set<string>; joined: string; tokens: string[] }>();
  for (const c of cases) {
    if (tokensFor.has(c.itemSlug)) continue;
    const text = sourceFor(c.itemSlug);
    if (!text.trim()) {
      fail(check, `"${titleOf(c.itemSlug)}" has no ${sourceName} to check its variants against`);
      continue;
    }
    const toks = normalizeTokens(text);
    tokensFor.set(c.itemSlug, { words: new Set(toks), joined: toks.join(""), tokens: toks });
  }

  for (const c of cases) {
    const src = tokensFor.get(c.itemSlug);
    if (!src) continue; // already reported as sourceless
    checked += 1;
    const key = exemptKey(c.itemSlug, c.gapLabel, c.variant);
    const exempt = byKey.get(key);
    if (exempt) seen.add(key);
    const isPending = pendingByKey.has(key);
    if (isPending) pendingSeen.add(key);

    // A run-on spelling of words the source writes separately ("buttonhook" for
    // "button hook", "taichi" for "tai chi") is still the source's own wording.
    //
    // 🔴 IT MUST ALIGN ON A TOKEN BOUNDARY — see runOnMatch in ./word-forms.ts.
    // `joined` has no spaces in it, so without alignment every short string was a
    // substring of something: `ot` passed because two unrelated words abutted and
    // `ckd` because a script said "check dose". A row that stops taking this
    // route is NOT failed here; it falls through to the word check below, which
    // is where nine of the thirteen affected rows are then answered anyway.
    if (runOnMatch(src.joined, src.tokens, normalize(c.variant))) continue;

    // Collect EVERY missing word first, so an exempt row can be told apart from
    // one that never needed exempting.
    // 🔴 A VARIANT WITH NO CONTENT WORD IS NOT A VARIANT THAT WAS HEARD.
    // Skipping function words one at a time is right; skipping ALL of them is a
    // check that never runs. `no` stood in for the answer `never` on two
    // Listening items for months on exactly that hole. Such a variant has to be
    // found outright — by the run-on rule above, by a written exemption, or not
    // at all — so every one of its words is reported.
    const variantWords = normalizeTokens(c.variant);
    const noContentWord = isAllFunctionWords(variantWords);
    const missing: string[] = [];
    for (const word of variantWords) {
      if (AUDIO_EXEMPT_TOKENS.has(word)) {
        abbreviations += 1;
        continue;
      }
      if (FUNCTION_WORDS.has(word) && !noContentWord) {
        functionWords += 1;
        continue;
      }
      // The source says this word, either as a token of its own or spelled
      // across two — "twenty nineteen" carries 2019. See wordFoundInSource.
      if (wordFoundInSource(word, src.words, src.joined, src.tokens)) continue;
      missing.push(word);
    }
    if (missing.length === 0) continue;
    if (exempt) {
      loadBearing.add(key);
      continue;
    }
    if (isPending) {
      pendingLoadBearing.add(key);
      continue;
    }
    for (const word of missing) {
      fail(
        check,
        `"${titleOf(c.itemSlug)}" / "${c.gapLabel}": variant "${c.variant}" uses "${word}", ` +
          `which that item's ${sourceName} never says, and it is not on the ` +
          "written per-variant exemption list",
      );
    }
  }

  // The list cannot rot: a row pointing at a variant that is no longer in the
  // overlay is an excuse for content that does not exist.
  for (const e of exemptions) {
    const key = exemptKey(e.item, e.gap, e.variant);
    if (!seen.has(key)) {
      fail(
        check,
        "exemption points at a variant that is not in the overlay — delete the row: " +
          `"${e.item}" / "${e.gap}" / "${e.variant}"`,
      );
    }
  }
  // A to-do is stricter than an allowance: a row that no longer fails is a
  // question that has been answered, and it should be deleted rather than left.
  for (const e of pending) {
    const key = exemptKey(e.item, e.gap, e.variant);
    if (!pendingSeen.has(key)) {
      fail(check, `pending row points at a variant not in the overlay — delete it: "${e.variant}"`);
    } else if (!pendingLoadBearing.has(key)) {
      fail(check, `pending row no longer fails — it is resolved, delete it: "${e.variant}"`);
    }
  }
  if (tokensFor.size === 0) fail(check, `no item had a ${sourceName} — ${check} was vacuous`);
  if (checked === 0) fail(check, `no variant reached ${check} — it was vacuous`);

  return { checked, abbreviations, functionWords, sources: tokensFor.size, loadBearing };
}

// ── A11 · run it over Listening, against each item's audioScript ────────────
const A11_CASES: VariantCase[] = [];
for (const item of LISTENING) {
  for (const gap of item.payload.gaps ?? []) {
    for (const variant of listeningAcceptFor(item.slug, gap.id)) {
      A11_CASES.push({ itemSlug: item.slug, gapLabel: gap.label, variant });
    }
  }
}
const A11_AUDIO = new Map(LISTENING.map((i) => [i.slug, i.payload.audioScript ?? ""]));
const a11 = runSourceWordCheck({
  check: "A11",
  sourceName: "audioScript",
  sourceFor: (t) => A11_AUDIO.get(t) ?? "",
  cases: A11_CASES,
  exemptions: A11_EXEMPT_VARIANT,
});

// ── A12 · THE SAME CHECK OVER READING, AGAINST EACH ITEM'S OWN TEXTS ────────
//
// 🔴 THIS IS THE HOLE THE PREVIOUS CHANGE LEFT OPEN AND SAID SO. A11 was
// deliberately kept off Reading Part A because the source there is printed text
// rather than an audio script, and that was recorded as unfinished work in two
// PRs running. Nasir then audited all 158 Reading variants by hand and found
// eight that no gate could have caught — `a hard surface`, `an external
// surface`, `off the mattress`, `dry`, `postural hypotension`, `lying and
// standing`, `orthostatic`, `moving`. They are withdrawn in this change, and
// this check is what stops the next eight.
//
// The source is the item's own `texts` — every heading and body, which is
// exactly what the candidate reads. "match" questions are excluded: their
// answers are text ids and leniency never touches them.

/** title → the item's whole printed text. */
const READING_TEXT = new Map(
  READING.map((i) => [
    i.slug,
    ((i.payload as { texts?: { heading?: string; body?: string }[] }).texts ?? [])
      .map((t) => `${t.heading ?? ""} ${t.body ?? ""}`)
      .join(" "),
  ]),
);

const A12_CASES: VariantCase[] = [];
for (const item of READING) {
  for (const q of (item.payload.questions ?? []).filter((x) => x.kind !== "match")) {
    for (const variant of readingAcceptFor(item.slug, q.id)) {
      A12_CASES.push({ itemSlug: item.slug, gapLabel: q.answer, variant });
    }
  }
}

const a12 = runSourceWordCheck({
  check: "A12",
  sourceName: "texts",
  sourceFor: (t) => READING_TEXT.get(t) ?? "",
  cases: A12_CASES,
  exemptions: A12_EXEMPT_VARIANT,
  pending: A12_PENDING_DECISION,
});



// ---- 🔴 OVERLAY DEAD ---- counted, not failed ----------------------------
//
// The Reading half of the overlay is keyed by item TITLE, and on 3 September 2026
// the eighteen titles it names were retired from production. It now serves
// nothing, and it is kept only so `retire-fragments.mts --restore` can bring
// those items back WITHOUT re-opening the marking defect PR #35 closed. See the
// header of src/lib/oet/accept-lists.ts.
//
// 🔴 THE RETIRED SET IS READ FROM THE CHECKED-IN RETIRE LISTS, NEVER TYPED HERE.
// A hand-typed count is a second copy of the truth and would drift the first time
// a list changed — which is the whole family of mistake this evening was spent on.
//
// IT PRINTS, IT DOES NOT FAIL. This is a state we chose; a gate that fails on it
// is noise, and noise is how gates get switched off. The number may only shrink:
// when it reaches 0 the Reading half of the overlay goes, and so does this block.
const RETIRE_DIR = join(import.meta.dirname, "..", "retire");
// 🔴 The retire files are a HISTORICAL RECORD, keyed by the title as it stood on
// the day of the retire, and they are not rewritten. They are resolved to slugs
// HERE, against the seed source, so that the overlay -- which is keyed by slug --
// can be asked the same question. A row that resolves to nothing is counted and
// named rather than dropped: a retire row matching nothing would understate the
// dead half of the overlay, which is the number this block exists to print.
const retiredSlugs = new Set<string>();
let retireListsRead = 0;
for (const file of readdirSync(RETIRE_DIR).filter((f) => f.endsWith(".json"))) {
  const rows = JSON.parse(readFileSync(join(RETIRE_DIR, file), "utf8")) as {
    taskType: string;
    title: string;
  }[];
  retireListsRead += 1;
  for (const r of rows) retiredSlugs.add(slugForTitle(r.taskType, r.title, file));
}
// Population before the guard: with no list read every count below is 0, and the
// line would report a clean overlay it never actually looked at.
if (retireListsRead === 0) {
  fail("A0", `no retire list found in ${RETIRE_DIR} — the OVERLAY DEAD count would be vacuous`);
}
const deadKeys: string[] = [];
let deadVariants = 0;
if (titleKeyedUnresolved.length > 0) {
  fail(
    "A13",
    `${titleKeyedUnresolved.length} title-keyed row(s) name an item the seed source does not have:` +
      titleKeyedUnresolved.map((r) => `
    ${r}`).join(""),
  );
}
for (const [slug, answers] of Object.entries(READING_PART_A_ACCEPT)) {
  if (!retiredSlugs.has(slug)) continue;
  deadKeys.push(slug);
  for (const row of Object.values(answers)) deadVariants += row.accept.length;
}
let liveListeningVariants = 0;
for (const rows of Object.values(LISTENING_PART_A_ACCEPT)) {
  for (const row of Object.values(rows)) liveListeningVariants += row.accept.length;
}

// ── report ─────────────────────────────────────────────────────────────────
console.log(
  `[gate:accept-lists] ${LISTENING.length} Listening Part A item(s), ${listeningGaps} gap(s); ` +
    `${READING.length} Reading Part A item(s), ${readingFree} free-text answer(s); ` +
    `A4 required a list on ${a4Required}, skipped ${a4OneWordSkipped} one-word answer(s), ` +
    `${a4Exhaustive} declared exhaustive; ` +
    `${CASES.length} answer(s) checked, ${numericChecked} with a numeric counterpart; ` +
    `A11: ${a11.checked} Listening variant(s) against ${a11.sources} audio script(s); ` +
    `A12: ${a12.checked} Reading variant(s) against ${a12.sources} text set(s); ` +
    `(${a11.abbreviations + a12.abbreviations} abbreviation(s), ` +
    `${a11.functionWords + a12.functionWords} function word(s), ` +
    `${A11_EXEMPT_VARIANT.length + A12_EXEMPT_VARIANT.length} per-variant exemption(s), ` +
    `${a11.loadBearing.size + a12.loadBearing.size} load-bearing)`,
);
function reportExemptions(
  check: string,
  exemptions: VariantExemption[],
  loadBearing: Set<string>,
) {
  const idle = exemptions.filter((e) => !loadBearing.has(exemptKey(e.item, e.gap, e.variant)));
  if (idle.length === 0) return;
  console.log(
    `  NOTE  ${idle.length} of ${exemptions.length} ${check} per-variant exemption(s) ` +
      "are not load-bearing today — kept deliberately, see the file:",
  );
  for (const e of idle) console.log(`        "${e.variant}" — ${titleOf(e.item)} / ${e.gap}`);
}
if (A12_PENDING_DECISION.length > 0) {
  console.log(
    `  🔴 A12 HANDED BACK — ${A12_PENDING_DECISION.length} variant(s) flagged by this run that ` +
      "the audit did not name. NOT decided here:",
  );
  for (const e of A12_PENDING_DECISION) {
    console.log(`        "${e.variant}" — ${titleOf(e.item)} / ${e.gap}`);
    console.log(`           ${e.why}`);
  }
}
reportExemptions("A11", A11_EXEMPT_VARIANT, a11.loadBearing);
reportExemptions("A12", A12_EXEMPT_VARIANT, a12.loadBearing);

console.log(
  `OVERLAY DEAD: ${deadKeys.length} key(s) naming retired items, ` +
    `${deadVariants} variant(s) serving nothing ` +
    `(from ${retireListsRead} retire list(s); Listening's ${liveListeningVariants} are live)`,
);

for (const check of [
  "A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12",
]) {
  // startsWith(check) alone would make "A1" swallow "A10" and "A11"; the two
  // spaces after the key are part of how fail() writes them.
  const hits = failures.filter((f) => f.startsWith(`${check}  `));
  console.log(`  ${hits.length === 0 ? "PASS" : "FAIL"}  ${check}${hits.length ? ` (${hits.length})` : ""}`);
}
if (failures.length > 0) {
  console.error(`\n[gate:accept-lists] ${failures.length} failure(s):`);
  // UNCAPPED, DELIBERATELY. A cap of 60 on this gate hid A11 and A12 entirely
  // on 6 September — 391 failures, 60 printed, and the two checks a human still
  // had to rule on were both past the cut. A report that hides the half you can
  // act on costs a whole session.
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}
console.log("[gate:accept-lists] all clear");
