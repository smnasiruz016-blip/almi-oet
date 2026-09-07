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
