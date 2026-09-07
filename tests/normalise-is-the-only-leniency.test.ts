/**
 * THE SCORER'S NORMALISER, PINNED.
 *
 * The brief of 6 September 2026 asked for scorer normalisation to be added:
 * case-folding, whitespace, surrounding punctuation, a leading article, and
 * hyphen↔space equivalence — "ONE function, used by the scorer AND by the gate,
 * so the two can never disagree."
 *
 * 🔴 IT WAS ALREADY THERE. `normalize()` in src/lib/oet/tasks/objective.ts has
 * done all five since 1 September, plus number words and a trailing plural, and
 * `scripts/gates/accept-lists.ts` imports that same function rather than owning
 * a copy. Nothing was added. What was missing is this file: a test that says so,
 * so the next brief does not have to guess and a later edit cannot quietly take
 * a rule away.
 *
 * The refusals matter as much as the acceptances. A normaliser that returned ""
 * would pass every "these are the same" case in here, which is why the second
 * half is longer than the first.
 */
import { describe, expect, it } from "vitest";
import { isAnswerCorrect, normalize } from "@/lib/oet/tasks/objective";
import { LISTENING_PART_A_ACCEPT, READING_PART_A_ACCEPT, listeningAcceptFor } from "@/lib/oet/accept-lists";

const same = (a: string, b: string) => normalize(a) === normalize(b);

describe("normalize() — the leniency the accept-lists must NOT duplicate", () => {
  it("folds case", () => expect(same("Gloves", "gloves")).toBe(true));

  it("trims and collapses internal whitespace", () =>
    expect(same("  hot   water  bottle ", "hot water bottle")).toBe(true));

  it("drops surrounding punctuation and a trailing full stop", () => {
    expect(same("two sugars.", "two sugars")).toBe(true);
    expect(same('"stings"', "stings")).toBe(true);
  });

  it("drops a LEADING article only", () => {
    expect(same("a triptan", "triptan")).toBe(true);
    expect(same("the pill", "pill")).toBe(true);
    // …and keeps an inner one, or answers that differ would start merging.
    expect(same("the level of the bladder", "level of bladder")).toBe(false);
  });

  it("reads a hyphen as a space", () => {
    expect(same("night-time", "night time")).toBe(true);
    expect(same("three-quarters", "three quarters")).toBe(true);
  });

  it("reads a number word as its digits", () => {
    expect(same("three days", "3 days")).toBe(true);
    expect(same("twenty-eight weeks", "28 weeks")).toBe(true);
  });

  it("forgives a trailing plural", () => expect(same("biscuit", "biscuits")).toBe(true));
});

describe("normalize() — what it must NEVER forgive", () => {
  it("keeps a direction word, because the direction IS the answer", () => {
    expect(same("under 5", "over 5")).toBe(false);
    expect(same("at least an hour", "an hour")).toBe(false);
    expect(same("more than 20", "less than 20")).toBe(false);
  });

  it("keeps the unit — 400 micrograms is not 400 mg", () =>
    expect(same("400 micrograms", "400 mg")).toBe(false));

  it("keeps a different word a different word", () => {
    expect(same("flashing lines", "flashing lights")).toBe(false);
    expect(same("stings", "burning")).toBe(false);
    expect(same("dessert", "pudding")).toBe(false);
    expect(same("toast", "bread")).toBe(false);
  });

  it("does not collapse everything to nothing", () => {
    expect(normalize("frozen peas")).not.toBe("");
    expect(same("dog", "cat")).toBe(false);
  });
});

describe("the accept-list overlay is keyed by ID, not by wording", () => {
  const PHYSIO = "lis-a-f1-physiotherapy-consultation-lower-back-pain";

  it("looks a Listening gap up by its gap id", () => {
    // A label edit is what silenced 45 rows on 6 September. The id is the key.
    expect(listeningAcceptFor(PHYSIO, "g3")).toContain("sharp twinge");
    expect(listeningAcceptFor(PHYSIO, "Felt a sharp ___ on the left")).toEqual([]);
  });

  it("carries the label as CHECKED data, so a row cannot drift off its gap", () => {
    expect(LISTENING_PART_A_ACCEPT[PHYSIO].g3.label).toBe("Felt a sharp ___ on the left");
  });

  it("has a Reading half keyed the same way", () => {
    const rows = Object.values(READING_PART_A_ACCEPT);
    expect(rows.length).toBeGreaterThan(0);
    for (const item of rows) {
      for (const id of Object.keys(item)) expect(id).toMatch(/^q\d+$/);
    }
  });
});

/**
 * 🔴 THE DECIMAL POINT. Measured through the real marker on 7 September 2026,
 * BEFORE it was fixed:
 *
 *     key "4.0 mmol/L"  given "40 mmol/L"  -> ACCEPTED
 *     key "4.5 hours"   given "45 hours"   -> ACCEPTED
 *
 * normalize() deleted every full stop, so `4.0` and `40` were the same answer.
 * A tenfold blood-glucose reading and a ten-times thrombolysis window, both
 * marked correct. Eight strings in the bank carry a decimal, in Hypoglycaemia
 * q8 and Acute stroke q12.
 *
 * These four cases FAILED before the fix. The last two are the mirror: a stop
 * that ends a word or a sentence must still be stripped, or the fix would have
 * traded one wrong verdict for another.
 */
describe("a decimal point is meaning, not punctuation", () => {
  it("refuses the answer with the point removed", () => {
    expect(isAnswerCorrect({ id: "q", answer: "4.0 mmol/L", variants: ["4.0"] }, "40 mmol/L")).toBe(false);
    expect(isAnswerCorrect({ id: "q", answer: "4.5 hours", variants: ["4.5"] }, "45 hours")).toBe(false);
  });

  it("still accepts the answer as written", () => {
    expect(isAnswerCorrect({ id: "q", answer: "4.0 mmol/L", variants: ["4.0"] }, "4.0 mmol/L")).toBe(true);
    expect(isAnswerCorrect({ id: "q", answer: "4.0 mmol/L", variants: ["4.0"] }, "4.0")).toBe(true);
    expect(isAnswerCorrect({ id: "q", answer: "4.5 hours", variants: ["4.5"] }, "  4.5 Hours. ")).toBe(true);
  });

  it("still strips a stop that ends a word or a sentence", () => {
    expect(normalize("Gloves.")).toBe(normalize("gloves"));
    expect(normalize("Two sugars.")).toBe(normalize("two sugars"));
    expect(normalize("e.g.")).toBe("eg");
  });

  it("keeps the point only between two digits", () => {
    expect(normalize("38.5")).toBe("38.5");
    expect(normalize("38.5.")).toBe("38.5");
    expect(normalize(".5")).toBe("5");
  });
});

describe("the marker is the one place a verdict is decided", () => {
  it("accepts a declared variant on the same terms as the answer", () => {
    const key = { id: "q", answer: "flashing lines", variants: ["lines"] };
    expect(isAnswerCorrect(key, "Lines.")).toBe(true);
    expect(isAnswerCorrect(key, "flashing lights")).toBe(false);
  });
});
