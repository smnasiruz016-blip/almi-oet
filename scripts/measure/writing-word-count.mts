/**
 * MEASURE — how AlmiOET counts a Writing letter's words, what it does with that
 * number, and what it calls the six criteria. READ ONLY. Nothing is fixed here.
 *
 * Asked for by AlmiOET_CC_COMMAND_word_count_and_criteria_2026-09-04.md, after
 * PRODUCT_SOURCE_OF_TRUTH v0.3 §1.4 recorded OET's own page
 * (oet.com/post/writing-word-limit, 14 Nov 2023):
 *
 *   "Only the body of the letter (the paragraphs) is included within the word
 *    limit ... The address, date, and opening greeting/reference lines are not
 *    counted at the top ... The closing sentence, complimentary close and job
 *    title are not counted at the end."
 *   "The guide of 180-200 words is not set to be strictly adhered to."
 *   "The assessors will not count your words."
 *
 * The sample letter below is ORIGINAL AlmiOET text written for this measurement.
 * No OET wording is reproduced anywhere in this file.
 */
import { wordCount, lengthPenalty, buildWritingPrompt } from "../../src/lib/oet/tasks/writing-letter";

// ── the sample: a complete letter, laid out the way a candidate lays one out ──
const SAMPLE = `Community Nursing Team
Riverbank Health Centre
14 Mill Lane
Eastport EP4 2NR

4 September 2026

Dr Helen Marsden
Eastport Vascular Clinic
2 Harbour Road
Eastport EP1 7QT

Dear Dr Marsden,

Re: Mrs Ada Okonjo, DOB 12/03/1949

I am writing to refer Mrs Okonjo, who has a venous ulcer on her left lower leg that has not
improved over eight weeks of compression therapy, for your assessment.

Mrs Okonjo was first seen at home on 9 July with a shallow ulcer above the medial malleolus.
Her ankle brachial pressure index was 0.9, and four-layer compression was started that week.
Dressings have been changed twice weekly since. The wound bed remains sloughy, and the ulcer
has widened from two centimetres to three and a half over the same period.

She reports aching in the leg by the end of each day, relieved by elevation. She takes
paracetamol before her dressing change and finds this adequate. There is no fever, no
increase in exudate odour, and no surrounding cellulitis. Her diabetes remains well
controlled, with a recent HbA1c of 48.

Mrs Okonjo lives alone in a first-floor flat and manages her own shopping. She has been
concordant with compression throughout and is anxious about the lack of progress.

I would be grateful for your assessment of her venous system and your advice on whether
further intervention is indicated.

Yours sincerely,

Community Nurse
Riverbank Health Centre`;

/**
 * OET's rule, implemented HERE ONLY so the two numbers can be compared. The
 * product does not do this and nothing in this script changes that.
 *
 * Body = everything after the greeting/reference lines, and before the closing
 * sentence. The closing sentence is taken as the paragraph that begins the
 * sign-off courtesy ("I would be grateful…", "Please contact me…"), followed by
 * the complimentary close and job title.
 */
function bodyOnly(letter: string): { body: string; dropped: { head: string; tail: string } } {
  const lines = letter.split("\n");
  // The last of the greeting/reference lines: "Dear …" or a "Re:" line after it.
  let start = lines.findIndex((l) => /^\s*dear\b/i.test(l));
  for (let i = start + 1; i < lines.length; i++) {
    if (/^\s*re\s*:/i.test(lines[i])) start = i;
    else if (lines[i].trim() !== "") break;
  }
  // The closing sentence: the last paragraph before the complimentary close.
  const closeAt = lines.findIndex((l) => /^\s*(yours\b|kind regards|regards\b)/i.test(l));
  const paras = lines.slice(0, closeAt).join("\n").trim().split(/\n\s*\n/);
  const body = paras.slice(0, -1).join("\n\n");
  const lastPara = paras[paras.length - 1] ?? "";
  return {
    body: lines.slice(start + 1, closeAt).join("\n").replace(lastPara, "").trim(),
    dropped: { head: lines.slice(0, start + 1).join("\n"), tail: [lastPara, ...lines.slice(closeAt)].join("\n") },
  };
}

const ours = wordCount(SAMPLE);
const { body, dropped } = bodyOnly(SAMPLE);
const theirs = wordCount(body);

console.log("=== 1 · EK ASLI KHAT PAR DONO ADAD ===");
console.log(`  hamara wordCount(poora khat)        : ${ours} lafz`);
console.log(`  OET ka tareeqa (sirf body)          : ${theirs} lafz`);
console.log(`  farq                                : ${ours - theirs} lafz (${Math.round((100 * (ours - theirs)) / ours)}% zyada)`);
console.log(`  ginti se bahar rehna chahiye tha — sar : ${wordCount(dropped.head)} lafz`);
console.log(`  ginti se bahar rehna chahiye tha — dum : ${wordCount(dropped.tail)} lafz`);
console.log(`\n  hamara counter: s.trim().split(/\\s+/).length — har token, har line`);

console.log("\n=== 2 · US ADAD KA ASAR — lengthPenalty(words, 180, 200) ===");
console.log("  (ye code ka hissa hai, model ki raay nahin — score par zarb hota hai)");
for (const n of [107, 108, 179, 180, 200, 205, 250, 300, 301, 350]) {
  const m = lengthPenalty(n, 180, 200);
  const note = m === 1 ? "koi saza nahi" : m === 0.6 ? "🔴 0.6x — 40% score gaya" : "0.85x — 15% gaya";
  console.log(`  ${String(n).padStart(4)} lafz -> ${m.toFixed(2)}x   ${note}`);
}
console.log(`  hadd: ${180 * 0.6} lafz se neeche 0.6x · ${200 * 1.5} lafz se ooper 0.85x · beech mein 1.00x`);

console.log("\n=== 3 · GRADER KE PROMPT MEIN KYA JATA HAI ===");
for (const n of [179, 205, 250]) {
  const text = Array.from({ length: n }, (_, i) => `w${i + 1}`).join(" ");
  const { userMessage } = buildWritingPrompt({
    payload: {
      caseNotes: "…",
      recipient: "Dr Marsden",
      taskInstruction: "Write a referral letter.",
      letterType: "referral",
      wordMin: 180,
      wordMax: 200,
    },
    response: { text },
    profession: "NURSING",
  });
  console.log(`  ${n} lafz -> "${userMessage.split("\n")[1]}"`);
}

console.log("\n=== 4 · CHHE CRITERIA — OET ke naam, hamari key, aur jo STUDENT ko dikhta hai ===");
/**
 * 🔴 THE COMPARISON NORMALISES "&" TO "and", AND THAT MATTERS.
 * The first version stripped every non-letter, so OET's "Conciseness & Clarity"
 * became "concisenessclarity" while ours became "concisenessandclarity" — and it
 * printed three mismatches that do not exist. A checker that reports a defect
 * because of its own punctuation rule is worse than no checker.
 *
 * The third column answers what the command actually asks: the label the STUDENT
 * reads on the result screen (src/components/oet/OetResult.tsx TRAIT_LABEL).
 */
const norm = (x: string) => x.toLowerCase().replace(/&/g, "and").replace(/[^a-z]/g, "");
const ROWS: { oet: string; key: string; shown: string }[] = [
  { oet: "Content", key: "content", shown: "Content" },
  { oet: "Conciseness & Clarity", key: "concisenessAndClarity", shown: "Conciseness & clarity" },
  { oet: "Purpose", key: "purpose", shown: "Purpose" },
  { oet: "Genre & Style", key: "genreAndStyle", shown: "Genre & style" },
  { oet: "Organisation & Layout", key: "organisationAndLayout", shown: "Organisation & layout" },
  { oet: "Language", key: "language", shown: "Language" },
];
let mismatched = 0;
for (const r of ROWS) {
  const ok = norm(r.oet) === norm(r.key) && norm(r.oet) === norm(r.shown);
  if (!ok) mismatched += 1;
  console.log(`  ${ok ? "OK " : "X  "} OET "${r.oet}"  ·  key "${r.key}"  ·  student dekhta hai "${r.shown}"`);
}
console.log(`  mel na khane wale: ${mismatched}/6`);
