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
 *   A4 coverage: every free-text answer in the bank HAS an accept-list
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
import { GEN_ITEMS } from "../seed/gen/index";
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

type Gap = { id: string; label: string; answer: string; variants?: string[] };
type ReadingQ = { id: string; kind: string; stem: string; answer: string; variants?: string[] };
type Item = {
  taskType: string;
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

const listeningByTitle = new Map(LISTENING.map((i) => [i.title, i]));
const readingByTitle = new Map(READING.map((i) => [i.title, i]));

// ── A1 · every overlay title exists ─────────────────────────────────────────
for (const title of Object.keys(LISTENING_PART_A_ACCEPT)) {
  if (!listeningByTitle.has(title)) {
    fail("A1", `Listening accept-list names an item that does not exist: "${title}"`);
  }
}
for (const title of Object.keys(READING_PART_A_ACCEPT)) {
  if (!readingByTitle.has(title)) {
    fail("A1", `Reading accept-list names an item that does not exist: "${title}"`);
  }
}

// ── A2 · every Listening label exists on its item ───────────────────────────
for (const [title, labels] of Object.entries(LISTENING_PART_A_ACCEPT)) {
  const item = listeningByTitle.get(title);
  if (!item) continue; // already reported by A1
  const known = new Set((item.payload.gaps ?? []).map((g) => g.label));
  for (const label of Object.keys(labels)) {
    if (!known.has(label)) {
      fail("A2", `"${title}" has no gap labelled "${label}"`);
    }
  }
}

// ── A3 · every Reading key matches exactly one question's answer ────────────
for (const [title, keys] of Object.entries(READING_PART_A_ACCEPT)) {
  const item = readingByTitle.get(title);
  if (!item) continue;
  const free = (item.payload.questions ?? []).filter((q) => q.kind !== "match");
  for (const key of Object.keys(keys)) {
    const hits = free.filter((q) => q.answer === key);
    if (hits.length !== 1) {
      fail(
        "A3",
        `"${title}" has ${hits.length} free-text questions whose answer is exactly "${key}" (need 1)`,
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
    item: "Part A — Anaphylaxis",
    answer: "glucagon",
    why: "author: 'sirf glucagon — is ka koi doosra lafz nahi' (a drug name has no synonym)",
  },
  {
    item: "Part A — Hypoglycaemia",
    answer: "glucagon",
    why: "author: 'sirf glucagon — is ka koi doosra lafz nahi'",
  },
  {
    item: "Part A — High-risk medicines",
    answer: "methotrexate",
    why: "author: 'sirf methotrexate — dawa ka naam hai' (it is a drug name)",
  },
  {
    item: "Part A — Pressure ulcer prevention",
    answer: "shear",
    why: "author: 'sirf shear'",
  },
  {
    item: "Part A — Sepsis",
    answer: "source control",
    why: "author: 'sirf yehi — text ka apna lafz hai' (only this; it is the text's own term)",
  },
  {
    item: "Part A — Pressure ulcer prevention",
    answer: "drainage",
    why: "the author's only other entry was a REFUSAL: 'discharge NAHIN — wo lafz text mein nahi hai'",
  },
  {
    item: "Part A — Preventing blood clots in hospital",
    answer: "blood",
    why: "the author's accepted list is the answer alone: 'qubool: blood'",
  },
  {
    item: "Part A — Wound infection and antibiotics",
    answer: "effective",
    why: "the author's accepted list is the answer alone: 'qubool: effective'",
  },
];
const A4_SINGLE_KEY = new Set(A4_SINGLE_FORM.map((e) => `${e.item}||${e.answer}`));
const a4SingleSeen = new Set<string>();

// ── A4 · coverage — no free-text answer without an accept-list ──────────────
//
// The handoff states the bank is fully covered: 146 Listening gaps and 54
// Reading free-text answers, 200 in all. Asserting it means a NEW item cannot
// ship without its accept-list — which is the discipline, not an accident.
let listeningGaps = 0;
for (const item of LISTENING) {
  for (const gap of item.payload.gaps ?? []) {
    listeningGaps += 1;
    // An accept-list may live in EITHER place. The overlay is how the original
    // bank got one without a database write; a payload `variants` array is how
    // newly authored items carry their own, and reading.ts prefers the payload
    // when it is non-empty. A4 asks whether the answer HAS an accept-list, not
    // where it is kept.
    if (
      listeningAcceptFor(item.title, gap.label).length === 0 &&
      (gap.variants ?? []).length === 0
    ) {
      fail("A4", `no accept-list for "${item.title}" → "${gap.label}"`);
    }
  }
}
let readingFree = 0;
for (const item of READING) {
  for (const q of (item.payload.questions ?? []).filter((x) => x.kind !== "match")) {
    readingFree += 1;
    const hasList =
      readingAcceptFor(item.title, q.answer).length > 0 || (q.variants ?? []).length > 0;
    const singleKey = `${item.title}||${q.answer}`;
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
    if (!hasList) {
      fail("A4", `no accept-list for "${item.title}" → answer "${q.answer}"`);
    }
  }
}

for (const e of A4_SINGLE_FORM) {
  if (!a4SingleSeen.has(`${e.item}||${e.answer}`)) {
    fail("A4", `single-form row points at an answer that is not in the bank — delete it: "${e.item}" / "${e.answer}"`);
  }
}

// ── A5-A7 · the marking actually accepts what it should ────────────────────
type Case = { where: string; answer: string; variants: readonly string[] };
const CASES: Case[] = [];
for (const item of LISTENING) {
  for (const gap of item.payload.gaps ?? []) {
    CASES.push({
      where: `${item.title} → ${gap.label}`,
      answer: gap.answer,
      variants: [...(gap.variants ?? []), ...listeningAcceptFor(item.title, gap.label)],
    });
  }
}
for (const item of READING) {
  for (const q of (item.payload.questions ?? []).filter((x) => x.kind !== "match")) {
    CASES.push({
      where: `${item.title} → "${q.answer}"`,
      answer: q.answer,
      variants: [...(q.variants ?? []), ...readingAcceptFor(item.title, q.answer)],
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
  if (!accepts(c.answer, c.variants, `the ${c.answer}`)) {
    fail("A7", `${c.where}: "the ${c.answer}" is not accepted`);
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
const FOLIC_TITLE = "OET Form 3 · Listening Part A — Midwife antenatal booking visit";
const FOLIC_LABEL = "Folic acid dose:";
const folicItem = listeningByTitle.get(FOLIC_TITLE);
const folicGap = folicItem?.payload.gaps?.find((g) => g.label === FOLIC_LABEL);
if (!folicGap) {
  // Population before the guard: if this gap is ever renamed, the check below
  // would silently test nothing.
  fail("A9", `the folic-acid gap ("${FOLIC_TITLE}" → "${FOLIC_LABEL}") was not found`);
} else {
  const variants = [
    ...(folicGap.variants ?? []),
    ...listeningAcceptFor(FOLIC_TITLE, FOLIC_LABEL),
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
      strings: [g.answer, ...(g.variants ?? []), ...listeningAcceptFor(item.title, g.label)],
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
        strings: [q.answer, ...(q.variants ?? []), ...readingAcceptFor(item.title, q.answer)],
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

/** 🔴 THE WRITTEN EXEMPTION LIST. Short on purpose. Every entry is an
 *  abbreviation or a spelling of something the audio DOES say — never a
 *  different word. Adding to it is a decision, which is why each carries its
 *  reason here in the file rather than in a commit message. */
const AUDIO_EXEMPT: Record<string, string> = {
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
const AUDIO_EXEMPT_TOKENS = new Map<string, string>(
  Object.entries(AUDIO_EXEMPT).flatMap(([k, why]) =>
    normalizeTokens(k).map((t) => [t, why] as [string, string]),
  ),
);

/** Words that carry no answer. Not checked against the audio, because A11 is
 *  about what was HEARD, not about how a candidate joined the words up. */
const FUNCTION_WORDS = new Set([
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
const INFLECTION =
  /^(|e|d|s|es|ed|y|ie|ies|th|le|ly|er|est|al|age|ion|ised|less|ness|iness|ity|ility|ment|ement|ation|ating|ying|tion|sion|[bcdfglmnprstz]?(ing|ed|er|est))$/;

function sharedPrefix(a: string, b: string): number {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i += 1;
  return i;
}

/** Are these two the same word in different forms? */
function sameWordAnotherForm(a: string, b: string): boolean {
  const n = sharedPrefix(a, b);
  if (n < 3) return false;
  return INFLECTION.test(a.slice(n)) && INFLECTION.test(b.slice(n));
}

function wordInAudio(word: string, audioWords: Set<string>): boolean {
  if (audioWords.has(word)) return true;
  for (const a of audioWords) if (sameWordAnotherForm(word, a)) return true;
  return false;
}

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
 * ⚠️ An entry that is not currently load-bearing is REPORTED, not failed. The
 * ruling required both `night-time` rows, and one of them passes today only
 * because its own script happens to say "six times a day" — "times" reduces to
 * "time". That is a coincidence of wording, not a decision, and the day it
 * changes the row is the thing that keeps the gate green.
 */
type VariantExemption = {
  item: string;
  gap: string;
  variant: string;
  source:
    | "ruling-2026-09-02"
    | "irregular-form"
    | "reading-audit-2026-09-02"
    | "pending-decision";
  why: string;
};

const A11_EXEMPT_VARIANT: VariantExemption[] = [
  {
    item: "OET Form 1 · Listening Part A — Dietitian consultation (type 2 diabetes)",
    gap: "Referred because this was high",
    variant: "HbA1c level",
    source: "ruling-2026-09-02",
    why: "'level' names nothing new — an HbA1c IS a level",
  },
  {
    item: "OET Form 1 · Listening Part A — Dietitian consultation (type 2 diabetes)",
    gap: "Referred because this was high",
    variant: "blood sugar level",
    source: "ruling-2026-09-02",
    why: "same reason; 'blood sugar' is itself said in the script",
  },
  {
    item: "OET Form 2 · Listening Part A — Occupational therapy home visit (post-stroke)",
    gap: "Rail is only on",
    variant: "left side",
    source: "ruling-2026-09-02",
    why: "'the left' IS a side — no new information",
  },
  {
    item: "OET Form 2 · Listening Part A — Occupational therapy home visit (post-stroke)",
    gap: "Rail is only on",
    variant: "left-hand side",
    source: "ruling-2026-09-02",
    why: "same reason as 'left side'",
  },
  {
    item: "Part A — Ankle injury after a fall",
    gap: "Site of worst swelling",
    variant: "outside of the ankle",
    source: "ruling-2026-09-02",
    why: "another ordering of 'outer ankle' — the same place",
  },
  {
    item: "Part A — Ankle injury after a fall",
    gap: "Site of worst swelling",
    variant: "outer side of the ankle",
    source: "ruling-2026-09-02",
    why: "same reason as 'outside of the ankle'",
  },
  {
    item: "Part A — Medication side-effect",
    gap: "Suspected cause",
    variant: "blood pressure medicine",
    source: "ruling-2026-09-02",
    why: "'medication' and 'medicine' are one word's family",
  },
  {
    item: "Part A — Asthma flare-up",
    gap: "Worse timing",
    variant: "night-time",
    source: "ruling-2026-09-02",
    why: "a compound of 'night' — nothing new said",
  },
  {
    item: "Part A — Medication side-effect",
    gap: "Worse timing",
    variant: "night-time",
    source: "ruling-2026-09-02",
    why: "same reason as the Asthma flare-up row; the two are NOT interchangeable",
  },
  // ── not the ruling's: a limit of the written morphology above ─────────────
  {
    item: "Part A — Diabetes annual check",
    gap: "Weight change",
    variant: "weight loss",
    source: "irregular-form",
    why: "the script says 'lost about four kilos'; loss/lost is one word, irregularly, and the ending list cannot derive it",
  },
  {
    item: "Part A — Post-operative wound check",
    gap: "Pain trend",
    variant: "getting worse",
    source: "irregular-form",
    why: "the script says 'has actually got worse'; getting/got is one word, irregularly",
  },
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
 */
const A12_PENDING_DECISION: VariantExemption[] = [
  {
    item: "OET Form 2 · Reading Part A — Preventing falls in older adults",
    gap: "an occupational therapist",
    variant: "occupational therapist",
    source: "pending-decision",
    why: "the text prints 'occupational-therapy', never 'therapist' — and this is the item's own answer, not just a variant",
  },
  {
    item: "OET Form 3 · Reading Part A — Delirium in hospital",
    gap: "night",
    variant: "night-time",
    source: "pending-decision",
    why: "the text says 'at night', never 'time'; the same variant is an exemption on two Listening items, but this one was not named",
  },
];

const A12_EXEMPT_VARIANT: VariantExemption[] = [
  {
    item: "Part A — Malnutrition screening",
    gap: "dietitian",
    variant: "dietician",
    source: "reading-audit-2026-09-02",
    why: "both spellings are current English; failing a nurse on the spelling is not what this question measures",
  },
  {
    item: "OET Form 1 · Reading Part A — Preventing pressure injuries",
    gap: "the dietitian",
    variant: "dietician",
    source: "reading-audit-2026-09-02",
    why: "same spelling split, in the other item that asks for it",
  },
  {
    item: "Part A — Informed consent essentials",
    gap: "capacity",
    variant: "mental capacity",
    source: "reading-audit-2026-09-02",
    why: "'mental' names nothing new — the text's capacity IS mental capacity",
  },
  {
    item: "OET Form 1 · Reading Part A — Preventing pressure injuries",
    gap: "condition",
    variant: "clinical condition",
    source: "reading-audit-2026-09-02",
    why: "'clinical' names nothing new in a clinical text",
  },
  {
    item: "OET Form 1 · Reading Part A — Preventing pressure injuries",
    gap: "non-blanching redness",
    variant: "redness that does not blanch",
    source: "reading-audit-2026-09-02",
    why: "the same fact written as a clause instead of a compound",
  },
  {
    item: "OET Form 2 · Reading Part A — Preventing falls in older adults",
    gap: "an occupational therapist",
    variant: "OT",
    source: "reading-audit-2026-09-02",
    why: "the standard abbreviation of the words the text prints in full",
  },
  {
    item: "OET Form 2 · Reading Part A — Preventing falls in older adults",
    gap: "bifocals",
    variant: "bifocal glasses",
    source: "reading-audit-2026-09-02",
    why: "'glasses' names nothing new — bifocals ARE glasses",
  },
  {
    item: "OET Form 2 · Reading Part A — Preventing falls in older adults",
    gap: "bifocals",
    variant: "bifocal lenses",
    source: "reading-audit-2026-09-02",
    why: "same reason as 'bifocal glasses'",
  },
  {
    item: "OET Form 3 · Reading Part A — Delirium in hospital",
    gap: "urinary",
    variant: "urinary tract",
    source: "reading-audit-2026-09-02",
    why: "'tract' names nothing new — the text's urinary source IS the urinary tract",
  },
  {
    item: "OET Form 3 · Reading Part A — Delirium in hospital",
    gap: "urinary",
    variant: "urinary tract infection",
    source: "reading-audit-2026-09-02",
    why: "same reason, written out in full",
  },
  {
    item: "OET Form 3 · Reading Part A — Delirium in hospital",
    gap: "urinary",
    variant: "UTI",
    source: "reading-audit-2026-09-02",
    why: "the standard abbreviation of 'urinary tract infection'",
  },
];

const exemptKey = (item: string, gap: string, variant: string) => `${item}||${gap}||${variant}`;

/** One variant of one answer, as the checks below see it. */
type VariantCase = { itemTitle: string; gapLabel: string; variant: string };

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
  sourceFor: (itemTitle: string) => string;
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
  const tokensFor = new Map<string, { words: Set<string>; joined: string }>();
  for (const c of cases) {
    if (tokensFor.has(c.itemTitle)) continue;
    const text = sourceFor(c.itemTitle);
    if (!text.trim()) {
      fail(check, `"${c.itemTitle}" has no ${sourceName} to check its variants against`);
      continue;
    }
    const toks = normalizeTokens(text);
    tokensFor.set(c.itemTitle, { words: new Set(toks), joined: toks.join("") });
  }

  for (const c of cases) {
    const src = tokensFor.get(c.itemTitle);
    if (!src) continue; // already reported as sourceless
    checked += 1;
    const key = exemptKey(c.itemTitle, c.gapLabel, c.variant);
    const exempt = byKey.get(key);
    if (exempt) seen.add(key);
    const isPending = pendingByKey.has(key);
    if (isPending) pendingSeen.add(key);

    // A run-on spelling of words the source writes separately ("buttonhook" for
    // "button hook", "taichi" for "tai chi") is still the source's own wording.
    if (src.joined.includes(normalize(c.variant))) continue;

    // Collect EVERY missing word first, so an exempt row can be told apart from
    // one that never needed exempting.
    const missing: string[] = [];
    for (const word of normalizeTokens(c.variant)) {
      if (AUDIO_EXEMPT_TOKENS.has(word)) {
        abbreviations += 1;
        continue;
      }
      if (FUNCTION_WORDS.has(word)) {
        functionWords += 1;
        continue;
      }
      if (wordInAudio(word, src.words)) continue;
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
        `"${c.itemTitle}" / "${c.gapLabel}": variant "${c.variant}" uses "${word}", ` +
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
    for (const variant of listeningAcceptFor(item.title, gap.label)) {
      A11_CASES.push({ itemTitle: item.title, gapLabel: gap.label, variant });
    }
  }
}
const A11_AUDIO = new Map(LISTENING.map((i) => [i.title, i.payload.audioScript ?? ""]));
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
    i.title,
    ((i.payload as { texts?: { heading?: string; body?: string }[] }).texts ?? [])
      .map((t) => `${t.heading ?? ""} ${t.body ?? ""}`)
      .join(" "),
  ]),
);

const A12_CASES: VariantCase[] = [];
for (const item of READING) {
  for (const q of (item.payload.questions ?? []).filter((x) => x.kind !== "match")) {
    for (const variant of readingAcceptFor(item.title, q.answer)) {
      A12_CASES.push({ itemTitle: item.title, gapLabel: q.answer, variant });
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


// ── report ─────────────────────────────────────────────────────────────────
console.log(
  `[gate:accept-lists] ${LISTENING.length} Listening Part A item(s), ${listeningGaps} gap(s); ` +
    `${READING.length} Reading Part A item(s), ${readingFree} free-text answer(s); ` +
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
  for (const e of idle) console.log(`        "${e.variant}" — ${e.item} / ${e.gap}`);
}
if (A12_PENDING_DECISION.length > 0) {
  console.log(
    `  🔴 A12 HANDED BACK — ${A12_PENDING_DECISION.length} variant(s) flagged by this run that ` +
      "the audit did not name. NOT decided here:",
  );
  for (const e of A12_PENDING_DECISION) {
    console.log(`        "${e.variant}" — ${e.item} / ${e.gap}`);
    console.log(`           ${e.why}`);
  }
}
reportExemptions("A11", A11_EXEMPT_VARIANT, a11.loadBearing);
reportExemptions("A12", A12_EXEMPT_VARIANT, a12.loadBearing);

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
  for (const f of failures.slice(0, 60)) console.error(`  ${f}`);
  if (failures.length > 60) console.error(`  …and ${failures.length - 60} more`);
  process.exit(1);
}
console.log("[gate:accept-lists] all clear");
