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

// ── A4 · coverage — no free-text answer without an accept-list ──────────────
//
// The handoff states the bank is fully covered: 146 Listening gaps and 54
// Reading free-text answers, 200 in all. Asserting it means a NEW item cannot
// ship without its accept-list — which is the discipline, not an accident.
let listeningGaps = 0;
for (const item of LISTENING) {
  for (const gap of item.payload.gaps ?? []) {
    listeningGaps += 1;
    if (listeningAcceptFor(item.title, gap.label).length === 0) {
      fail("A4", `no accept-list for "${item.title}" → "${gap.label}"`);
    }
  }
}
let readingFree = 0;
for (const item of READING) {
  for (const q of (item.payload.questions ?? []).filter((x) => x.kind !== "match")) {
    readingFree += 1;
    if (readingAcceptFor(item.title, q.answer).length === 0) {
      fail("A4", `no accept-list for "${item.title}" → answer "${q.answer}"`);
    }
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
const INFLECTION =
  /^(|e|d|s|es|ed|y|ie|ies|th|le|ly|er|est|al|ion|less|ness|iness|ity|ility|ment|ement|ation|ating|ying|tion|sion|[bcdfglmnprstz]?(ing|ed|er|est))$/;

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
  source: "ruling-2026-09-02" | "irregular-form";
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

const exemptKey = (item: string, gap: string, variant: string) => `${item}||${gap}||${variant}`;
const A11_EXEMPT_BY_KEY = new Map(
  A11_EXEMPT_VARIANT.map((e) => [exemptKey(e.item, e.gap, e.variant), e]),
);
if (A11_EXEMPT_BY_KEY.size !== A11_EXEMPT_VARIANT.length) {
  fail("A11", "the per-variant exemption list contains a duplicate row");
}

let audioChecked = 0;
let audioExempted = 0;
let audioFunctionSkipped = 0;
let itemsWithAudio = 0;
/** Keys that exist in the overlay, so a row pointing at deleted content fails. */
const exemptSeen = new Set<string>();
/** Keys that were actually needed — the rest are reported, not failed. */
const exemptLoadBearing = new Set<string>();

for (const item of LISTENING) {
  const script = item.payload.audioScript ?? "";
  if (!script.trim()) {
    fail("A11", `"${item.title}" has no audioScript to check its variants against`);
    continue;
  }
  itemsWithAudio += 1;
  const audioTokens = normalizeTokens(script);
  const audioWords = new Set(audioTokens);
  const audioJoined = audioTokens.join("");
  for (const gap of item.payload.gaps ?? []) {
    for (const variant of listeningAcceptFor(item.title, gap.label)) {
      audioChecked += 1;
      const key = exemptKey(item.title, gap.label, variant);
      const exempt = A11_EXEMPT_BY_KEY.get(key);
      if (exempt) exemptSeen.add(key);

      // A run-on spelling of words the script says separately ("buttonhook" for
      // "button hook") is still the script's own wording.
      if (audioJoined.includes(normalize(variant))) continue;

      // Collect EVERY missing word first, so an exempt row can be told apart
      // from one that never needed exempting.
      const missing: string[] = [];
      for (const word of normalizeTokens(variant)) {
        if (AUDIO_EXEMPT_TOKENS.has(word)) {
          audioExempted += 1;
          continue;
        }
        if (FUNCTION_WORDS.has(word)) {
          audioFunctionSkipped += 1;
          continue;
        }
        if (wordInAudio(word, audioWords)) continue;
        missing.push(word);
      }
      if (missing.length === 0) continue;
      if (exempt) {
        exemptLoadBearing.add(key);
        continue;
      }
      for (const word of missing) {
        fail(
          "A11",
          `"${item.title}" / "${gap.label}": variant "${variant}" uses "${word}", ` +
            "which that item's audioScript never says, and it is not on the " +
            "written per-variant exemption list",
        );
      }
    }
  }
}

// The list cannot rot: a row pointing at a variant that is no longer in the
// overlay is an excuse for content that does not exist.
for (const e of A11_EXEMPT_VARIANT) {
  const key = exemptKey(e.item, e.gap, e.variant);
  if (!exemptSeen.has(key)) {
    fail(
      "A11",
      `exemption points at a variant that is not in the overlay — delete the row: ` +
        `"${e.item}" / "${e.gap}" / "${e.variant}"`,
    );
  }
}
if (itemsWithAudio === 0) fail("A11", "no Listening item had an audioScript — A11 was vacuous");
if (audioChecked === 0) fail("A11", "no variant reached the audio check — A11 was vacuous");


// ── report ─────────────────────────────────────────────────────────────────
console.log(
  `[gate:accept-lists] ${LISTENING.length} Listening Part A item(s), ${listeningGaps} gap(s); ` +
    `${READING.length} Reading Part A item(s), ${readingFree} free-text answer(s); ` +
    `${CASES.length} answer(s) checked, ${numericChecked} with a numeric counterpart; ` +
    `${audioChecked} Listening variant(s) against ${itemsWithAudio} audio script(s) ` +
    `(${audioExempted} abbreviation(s), ${audioFunctionSkipped} function word(s), ` +
    `${A11_EXEMPT_VARIANT.length} per-variant exemption(s), ` +
    `${exemptLoadBearing.size} of them load-bearing)`,
);
const notLoadBearing = A11_EXEMPT_VARIANT.filter(
  (e) => !exemptLoadBearing.has(exemptKey(e.item, e.gap, e.variant)),
);
if (notLoadBearing.length > 0) {
  console.log(
    `  NOTE  ${notLoadBearing.length} of ${A11_EXEMPT_VARIANT.length} per-variant ` +
      "exemption(s) are not load-bearing today — kept deliberately, see the file:",
  );
  for (const e of notLoadBearing) {
    console.log(`        "${e.variant}" — ${e.item} / ${e.gap}`);
  }
}
for (const check of [
  "A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11",
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
