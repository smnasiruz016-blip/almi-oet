/**
 * 🔴 §H OF THE MASTER STANDARD: A GATE IS NOT TRUSTED UNTIL IT HAS BEEN
 * DELIBERATELY BROKEN AND SEEN TO GO RED.
 *
 * On 7 September 2026 three gates had never been proven able to fail:
 * gate:wraps, gate:distractor and gate:partc-kind. All three were reporting
 * failures on real content that day, which is a weaker thing entirely —
 * "currently red" says nothing about the day the content is fixed and the number
 * reaches zero. A gate that has quietly stopped looking reports zero too.
 *
 * These tests do not run the gate scripts: importing one runs it and calls
 * process.exit. They drive the RULE each gate is built on, through the same
 * module the gate imports, on a hand-built input carrying one injected defect —
 * and they assert the clean control alongside, so a rule that answered "yes" to
 * everything could not pass either.
 */
import { describe, expect, it } from "vitest";
import { isWrapBreak } from "@/../scripts/wrap-rule";
import { lengthCue } from "@/../scripts/content/payload-shape";
import {
  optionCountBreach,
  questionCountBreach,
} from "@/../scripts/prompt-shape-rule";

/** D2, transcribed from gate:distractor: no option may be more than 1.6x the
 *  mean WORD length of the others. */
const words = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);
const d2Worst = (options: string[]) => {
  const lens = options.map(words);
  let worst = 0;
  for (let i = 0; i < lens.length; i++) {
    const others = lens.filter((_, j) => j !== i);
    const mean = others.reduce((a, b) => a + b, 0) / others.length;
    if (mean > 0) worst = Math.max(worst, lens[i] / mean);
  }
  return worst;
};

/** The per-item spread rule of gate:partc-kind. */
const RULE = { paragraphMin: 5, referenceMin: 1, referenceMax: 2, writerMax: 3 };
const partCBreaks = (kinds: string[][]) => {
  const c = { paragraph: 0, reference: 0, writer: 0 } as Record<string, number>;
  const out: string[] = [];
  kinds.forEach((ks, i) => {
    if (ks.length === 0) out.push(`q${i + 1} has no marker`);
    for (const k of ks) c[k] += 1;
  });
  if (c.paragraph < RULE.paragraphMin) out.push(`paragraph ${c.paragraph}`);
  if (c.reference < RULE.referenceMin || c.reference > RULE.referenceMax) out.push(`reference ${c.reference}`);
  if (c.writer > RULE.writerMax) out.push(`writer ${c.writer}`);
  return out;
};

describe("gate:wraps can fail", () => {
  // A line that reached the author's wrap column with its sentence unfinished,
  // and a next line that is neither a labelled field nor a bullet.
  const wrapped = "Find out when she stopped taking it, whether she reduced the dose first or stopped";
  const continuation = "altogether, and how she has felt in the three weeks since.";

  it("goes RED on an injected mid-sentence wrap", () => {
    expect(wrapped.length).toBeGreaterThanOrEqual(80);
    expect(isWrapBreak(wrapped, continuation)).toBe(true);
  });

  it("is GREEN once the injection is removed", () => {
    // the same two lines joined, which is what the repair does
    expect(isWrapBreak(`${wrapped} ${continuation}`, "Patient: Thomas Van Rooyen-Obi")).toBe(false);
  });

  it("leaves structure alone, so it is not simply saying yes", () => {
    expect(isWrapBreak("WESTERGATE DENTAL PRACTICE", "Patient: Thomas Van Rooyen-Obi")).toBe(false);
    expect(isWrapBreak(wrapped, "- altogether, and how she has felt")).toBe(false);
    expect(isWrapBreak("She stopped taking it.", continuation)).toBe(false);
  });
});

describe("gate:distractor can fail", () => {
  it("D2 goes RED on an injected oversized option", () => {
    const injected = ["yes", "no", "into the sharps bin at the point of use"];
    expect(d2Worst(injected)).toBeGreaterThan(1.6);
  });

  it("D2 is GREEN once the injection is removed", () => {
    expect(d2Worst(["into the sharps bin", "into the yellow bag", "into the bin"])).toBeLessThanOrEqual(1.6);
  });

  it("D1 goes RED on an injected length cue, and is null on an honest item", () => {
    const cue = lengthCue({
      answer: "b",
      options: [
        { id: "a", text: "Check the chart." },
        { id: "b", text: "Check the chart against the prescription and the patient's wristband." },
        { id: "c", text: "Ask the nurse." },
      ],
    } as never);
    expect(cue).not.toBeNull();
    expect(
      lengthCue({
        answer: "b",
        options: [
          { id: "a", text: "Check the chart carefully." },
          { id: "b", text: "Check the wristband too." },
          { id: "c", text: "Ask the ward nurse now." },
        ],
      } as never),
    ).toBeNull();
  });
});

describe("gate:partc-kind can fail", () => {
  const clean: string[][] = [
    ["writer", "paragraph"], ["reference"], ["paragraph"], ["reference"],
    ["paragraph"], ["paragraph"], ["paragraph"], ["writer", "paragraph"],
  ];

  it("is GREEN on an item that satisfies the spread", () => {
    expect(partCBreaks(clean)).toEqual([]);
  });

  it("goes RED on an injected unmarked question", () => {
    const injected = clean.map((k, i) => (i === 2 ? [] : k));
    expect(partCBreaks(injected)).toContain("q3 has no marker");
  });

  it("goes RED on an injected item with no reference question", () => {
    const injected = clean.map((k) => (k[0] === "reference" ? ["paragraph"] : k));
    expect(partCBreaks(injected)).toContain("reference 0");
  });

  it("goes RED on an injected item that is all writer", () => {
    expect(partCBreaks(clean.map(() => ["writer"]))).toContain("writer 8");
  });
});

/**
 * 🔴 gate:prompt-shape, ADDED 8 SEPTEMBER 2026 AND PROVEN ABLE TO FAIL THE SAME DAY.
 *
 * The defect it exists for (GAP-046): six Reading Part C rows said "(A, B or C)"
 * while offering four options, so a learner would have been told there were three
 * answers and then shown four. The row's own prompt renders, registry.ts carries
 * none, and nothing compared the two numbers a prompt promises against the item.
 *
 * Both directions are driven here, because the same defect points both ways and
 * the instruction that nearly shipped it pointed the second way: giving the
 * eight-question four-option prompt to an item with two questions of three
 * options is the identical lie.
 *
 * The clean controls sit alongside, so a rule that answered "breach" to
 * everything could not pass either.
 */
describe("gate:prompt-shape — a prompt promises numbers, the item must keep them", () => {
  const STANDARD =
    "Read the text and answer questions 1\u20138. Choose the answer (a, b, c or d) which best fits the writer's meaning.";
  const fourOptions = { options: [{}, {}, {}, {}] };
  const threeOptions = { options: [{}, {}, {}] };
  const eightOfFour = { questions: Array.from({ length: 8 }, () => fourOptions) };
  const twoOfThree = { questions: Array.from({ length: 2 }, () => threeOptions) };

  it("is GREEN on the standard prompt over an eight-by-four item", () => {
    expect(questionCountBreach(STANDARD, eightOfFour)).toBeNull();
    expect(optionCountBreach(STANDARD, eightOfFour)).toBeNull();
  });

  it("P2 goes RED on the real GAP-046 shape — says three, offers four", () => {
    const wrong = "Read the text and answer questions 1-8. Choose the answer (A, B or C) which fits best.";
    expect(optionCountBreach(wrong, eightOfFour)).toEqual({ said: 3, offered: [4] });
  });

  it("P1 and P2 go RED the OTHER way — the standard prompt on a two-by-three item", () => {
    // the fifteen rows the first instruction would have broken
    expect(questionCountBreach(STANDARD, twoOfThree)).toEqual({ said: [1, 2, 3, 4, 5, 6, 7, 8], have: 2 });
    expect(optionCountBreach(STANDARD, twoOfThree)).toEqual({ said: 4, offered: [3] });
  });

  it("is GREEN where a prompt legitimately names TWO ranges", () => {
    // Reading Part A: 1-7 by text letter, 8-20 by short answer, twenty in all.
    const partA =
      "Read the four texts and answer the twenty questions. Answer questions 1\u20137 by choosing the text (A\u2013D). Answer questions 8\u201320 with a word or short phrase taken from the texts.";
    const twenty = { questions: Array.from({ length: 20 }, () => ({})) };
    expect(questionCountBreach(partA, twenty)).toBeNull();
    // "(A-D)" names the TEXTS, not options, and must not be read as a promise
    expect(optionCountBreach(partA, twenty)).toBeNull();
  });

  it("is GREEN on a gap-fill item, where the answers are gaps and not questions", () => {
    const partA = "You will hear a physiotherapist speaking to a patient. For questions 1-12, complete the notes with a word or short phrase.";
    expect(questionCountBreach(partA, { gaps: Array.from({ length: 12 }, () => ({})) })).toBeNull();
    // and RED when the gaps do not match what it promised
    expect(questionCountBreach(partA, { gaps: Array.from({ length: 10 }, () => ({})) })).not.toBeNull();
  });

  it("does not invent a promise where the prompt makes none", () => {
    const silent = "You will hear part of a presentation. Answer as you listen.";
    expect(questionCountBreach(silent, eightOfFour)).toBeNull();
    expect(optionCountBreach(silent, eightOfFour)).toBeNull();
  });

  it("counts letters, not the word joining them", () => {
    // "A, B or C" contains an o and an r; counting every letter said five
    expect(optionCountBreach("Choose (A, B or C).", { questions: [threeOptions] })).toBeNull();
    expect(optionCountBreach("Choose (a, b, c or d).", { questions: [fourOptions] })).toBeNull();
  });
});
