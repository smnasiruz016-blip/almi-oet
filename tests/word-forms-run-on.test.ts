/**
 * 🔴 THE RUN-ON RULE AND THE FUNCTION-WORD HOLE, PINNED.
 *
 * gate:accept-lists A11/A12 pass a variant outright when its normalised form
 * appears in the source's tokens joined with no separator. That is right for
 * "buttonhook" / "button hook". It was wrong for everything short, because
 * `joined` is a ~5,000-character string with no spaces in it and the test had no
 * alignment: measured on 7 September 2026, `ot` passed for "an occupational
 * therapist" and `ckd` passed because a script said "check dose".
 *
 * And separately: skipping function words one at a time is right, but skipping
 * ALL of them is a check that does not run. `no` stood in for the answer `never`
 * on two Listening items for months.
 *
 * Both halves of this file were seen RED before either rule existed.
 */
import { describe, expect, it } from "vitest";
import { isAllFunctionWords, runOnMatch } from "@/../scripts/gates/word-forms";
import { normalize, normalizeTokens } from "@/lib/oet/tasks/objective";

/** the two inputs the gate builds for a source */
const source = (text: string) => {
  const tokens = normalizeTokens(text);
  return { tokens, joined: tokens.join("") };
};
const matches = (text: string, variant: string) => {
  const s = source(text);
  return runOnMatch(s.joined, s.tokens, normalize(variant));
};

describe("the run-on rule must align on a source token boundary", () => {
  it("refuses an initialism that only touches because two words abut", () => {
    // "…check dose…" -> "checkdose", which contains "ckd".
    expect(matches("Always check dose against the chart.", "CKD")).toBe(false);
    // "…not on the therapist…" -> "…ottherapist…", which contains "ot".
    expect(matches("Refer to the occupational therapist, not on the day.", "OT")).toBe(false);
  });

  it("refuses a match that starts on a boundary but ends inside a word", () => {
    expect(matches("The wound is malodorous today.", "mal")).toBe(false);
  });

  it("still accepts the run-on spellings it exists for", () => {
    expect(matches("She uses a button hook to dress.", "buttonhook")).toBe(true);
    expect(matches("He goes to tai chi on Tuesdays.", "taichi")).toBe(true);
  });

  it("still accepts a phrase the source says outright", () => {
    expect(matches("Pain radiates down the left arm.", "left arm")).toBe(true);
    expect(matches("It began about three weeks ago.", "three weeks")).toBe(true);
  });

  it("still accepts a number the source spells out", () => {
    // normalize folds "twenty nineteen" and "2019" to the same string.
    expect(matches("The implant went in in twenty nineteen.", "2019")).toBe(true);
  });
});

describe("a variant made entirely of function words carries no answer", () => {
  it("names the all-function-word case", () => {
    expect(isAllFunctionWords(normalizeTokens("no"))).toBe(true);
    expect(isAllFunctionWords(normalizeTokens("the"))).toBe(true);
    expect(isAllFunctionWords(normalizeTokens("out of the"))).toBe(true);
  });

  it("does not fire when the variant carries a content word", () => {
    expect(isAllFunctionWords(normalizeTokens("no odour"))).toBe(false);
    expect(isAllFunctionWords(normalizeTokens("seven out of ten"))).toBe(false);
    expect(isAllFunctionWords(normalizeTokens("never"))).toBe(false);
  });

  it("is false for nothing at all, so an empty variant cannot pass through it", () => {
    expect(isAllFunctionWords([])).toBe(false);
  });
});
