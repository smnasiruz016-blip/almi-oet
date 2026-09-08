/**
 * 🔴 ONE DEFINITION OF A WORD, FOR THE GATES AND FOR THE STUDENT.
 *
 * This repo held eleven implementations of "what is a word". Measured, they
 * disagreed on 4 of 7 probes, and the whole disagreement reduced to one class: a
 * whitespace token carrying neither a letter nor a digit. The gates dropped it;
 * `wordCount()` — which marks the learner's letter against OET's 180-200 guide —
 * counted it.
 *
 * Ruled by the owner on 7 September 2026: A TOKEN WITH NO LETTER AND NO DIGIT IS
 * NOT A WORD. His reason is the student, not the tidiness — "a learner who writes
 * 198 real words and uses three dashes is shown 201 and told they exceeded a
 * 200-word limit they did not exceed."
 *
 * The first test below FAILED before the change: it read 203 and the letter was
 * over the limit.
 */
import { describe, expect, it } from "vitest";
import { words } from "@/lib/oet/words";
import { wordCount } from "@/lib/oet/tasks/writing-letter";
import { wordsIn } from "@/lib/oet/substance";
import { words as gateWords } from "@/../scripts/gates/words";

/** exactly 200 real words, with three bare em dashes standing alone among them */
const twoHundredPlusThreeDashes = (() => {
  const real = Array.from({ length: 200 }, (_, i) => `word${i + 1}`);
  real.splice(50, 0, "—");
  real.splice(120, 0, "—");
  real.splice(180, 0, "—");
  return real.join(" ");
})();

describe("a token with no letter and no digit is not a word", () => {
  it("reads 200, not 203 — the case that invented a penalty", () => {
    // 203 whitespace tokens, 200 of them words.
    expect(twoHundredPlusThreeDashes.trim().split(/\s+/).length).toBe(203);
    expect(wordCount(twoHundredPlusThreeDashes)).toBe(200);
  });

  it("so a 200-word letter PASSES a 200-word limit it did not exceed", () => {
    expect(wordCount(twoHundredPlusThreeDashes) <= 200).toBe(true);
  });

  it("drops every shape of the class, and keeps every shape that is a word", () => {
    for (const bare of ["—", "-", "·", "(", ")", "…", "/", "*"]) {
      expect(words(`alpha ${bare} beta`)).toBe(2);
    }
    for (const real of ["twenty-eight", "500", "4.5", "writer's", "1:1000", "92%", "6/12"]) {
      expect(words(`alpha ${real} beta`)).toBe(3);
    }
  });

  it("counts nothing as nothing, so an empty letter is still empty", () => {
    expect(words("")).toBe(0);
    expect(words("   ")).toBe(0);
    expect(words("— — —")).toBe(0);
    expect(words(undefined)).toBe(0);
  });
});

describe("every counter that reaches a learner gives the same answer", () => {
  const probes = [
    "the wound is clean — no odour",
    "4.5 hours ( see chart )",
    "amoxicillin 500 mg · three times a day",
    "-",
    "twenty-eight weeks",
    "she said \"stop\" and left",
  ];

  it("wordCount, wordsIn and the gate agree on every probe", () => {
    for (const p of probes) {
      expect(wordCount(p), p).toBe(words(p));
      expect(wordsIn(p), p).toBe(words(p));
      expect(gateWords(p), p).toBe(words(p));
    }
  });

  it("and the gate's own export is the same function, not a copy", () => {
    expect(gateWords).toBe(words);
  });
});
