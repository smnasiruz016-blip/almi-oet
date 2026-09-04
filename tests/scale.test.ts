/**
 * THE FILE THAT DECIDES WHAT NUMBER AND WHAT LETTER A LEARNER SEES.
 *
 * ── WHY THIS FILE EXISTS ────────────────────────────────────────────────────
 *
 * `src/lib/oet/scale.ts` had, until this commit, ZERO tests:
 *
 *     gradeForScore · snapToScale · snapRange              0 · 0 · 0
 *     fractionToRange · fractionToEstimate                 0 · 0
 *     cefrHint · overallScoreSupported · readinessBand     0 · 0 · 0
 *
 * And it is the file that shipped a WRONG GRADE FLOOR FOR 27 DAYS. Between
 * 2026-08-04 and 2026-08-31 `GRADE_FLOORS` carried C at 250, so every score from
 * 200 to 240 was graded D by AlmiOET while OET's own scoring document puts that
 * range under C. Nothing failed. There was nothing that could fail.
 *
 * ── WHAT THIS TEST ASSERTS AGAINST ──────────────────────────────────────────
 *
 * 🔴 NOT against what the code does today. A test that records current behaviour
 * would have passed happily for all 27 days. The table below is transcribed from
 * the PUBLISHED table quoted at scale.ts:23-28 — the source of record — and every
 * row is asserted at BOTH its endpoints. If someone moves a floor, the row that
 * no longer contains its own published endpoints is the one that fails, and the
 * failure names the score and the grade OET publishes for it.
 *
 * The three-points-per-boundary checks that follow (floor-1, floor, floor+1) pin
 * the comparison itself — `>=` not `>` — which is the other way a floor breaks.
 */
import { describe, expect, it } from "vitest";
import {
  BELOW_PUBLISHED_BANDS,
  OET_BENCHMARK_B,
  OET_MAX,
  OET_MIN,
  OET_STEP,
  cefrHint,
  formatRange,
  fractionToEstimate,
  fractionToRange,
  gradeForScore,
  overallScoreSupported,
  rangeMidpoint,
  readinessBand,
  snapRange,
  snapToScale,
} from "../src/lib/oet/scale";
import { GRADE_FLOORS_PUBLISHED } from "../src/lib/oet/exam-shape";

/**
 * OET's published grade table, transcribed row for row from the quotation at
 * scale.ts:23-28. Every value here is a PUBLISHED score, i.e. a multiple of 10.
 *
 *     A   450–500
 *     B   400–440
 *     B   350–390
 *     C+  300–340
 *     C   250–290
 *     C   200–240
 */
const PUBLISHED_TABLE = [
  { grade: "A", lo: 450, hi: 500 },
  { grade: "B", lo: 400, hi: 440 },
  { grade: "B", lo: 350, hi: 390 },
  { grade: "C+", lo: 300, hi: 340 },
  { grade: "C", lo: 250, hi: 290 },
  { grade: "C", lo: 200, hi: 240 },
] as const;

describe("gradeForScore — against OET's published table, not against ourselves", () => {
  for (const row of PUBLISHED_TABLE) {
    it(`grades the whole published row ${row.grade} ${row.lo}–${row.hi}`, () => {
      // Every reportable score in the row, in OET's own 10-point increments.
      for (let s = row.lo; s <= row.hi; s += OET_STEP) {
        expect(gradeForScore(s), `OET publishes ${s} as grade ${row.grade}`).toBe(row.grade);
      }
    });
  }

  it("🔴 grades 200–240 as C — the exact range that was graded D for 27 days", () => {
    // This is the regression. With C's floor at 250 every one of these is null.
    for (const s of [200, 210, 220, 230, 240]) {
      expect(gradeForScore(s), `${s} is inside OET's published C row (200–240)`).toBe("C");
    }
  });
});

describe("gradeForScore — three points at every boundary, so >= cannot become >", () => {
  // floor-1, floor, floor+1 for each floor in GRADE_FLOORS.
  //
  // 🔴 449 IS "B", NOT "C+". The command file that ordered this test wrote
  // `449 -> "C+"`; that is a slip, and it is an understandable one. 441–449 falls
  // in a GAP in the published table — B tops out at 440 and A starts at 450 — so
  // there is no published row containing 449 to read the answer off. What decides
  // it is the floor comparison: 449 is below A's floor and at or above B's, so B.
  // Measured, not assumed. The reachable neighbours are covered by the published
  // -table block above, where 440 is B and 450 is A; a score of 449 cannot occur,
  // because OET reports in multiples of 10.
  const CASES: [number, string | null][] = [
    [449, "B"],
    [450, "A"],
    [451, "A"],
    [349, "C+"],
    [350, "B"],
    [351, "B"],
    [299, "C"],
    [300, "C+"],
    [301, "C+"],
    [199, null],
    [200, "C"],
    [201, "C"],
    [0, null],
    [500, "A"],
  ];

  for (const [score, expected] of CASES) {
    it(`${score} -> ${JSON.stringify(expected)}`, () => {
      expect(gradeForScore(score)).toBe(expected);
    });
  }

  it("returns null below 200 — not 'E', not 'D'", () => {
    // OET's scoring document publishes NO band below 200. The Results-and-Scoring
    // page names grades "A to E"; the two official sources disagree, and neither
    // is resolved in the other's favour (scale.ts:42-49). null is the honest
    // answer: no published band contains this score. A letter here would be
    // invented. If this ever returns "D" or "E", a number was made up.
    for (const s of [199, 150, 100, 10, 0, -1, -999]) {
      expect(gradeForScore(s), `${s} is below every published band`).toBeNull();
    }
  });

  it("keeps the floors in scale.ts and exam-shape.ts saying the same thing", () => {
    // Two independent hand-typed transcriptions of the same table. gate:sources
    // cross-checks them; this asserts the BEHAVIOUR agrees with the second copy,
    // so a floor edited in one file and not the other fails here too.
    for (const { grade, floor } of GRADE_FLOORS_PUBLISHED) {
      expect(gradeForScore(floor), `${floor} is the published floor of ${grade}`).toBe(grade);
    }
  });

  it("names the wording callers must use where the grade is null", () => {
    expect(BELOW_PUBLISHED_BANDS).toBe("below the published grade bands");
    expect(BELOW_PUBLISHED_BANDS).not.toMatch(/\b[DE]\b/); // never "below E", never "Grade D"
  });
});

describe("snapToScale — the 0–500 grid, in 10s", () => {
  it("clamps outside the scale", () => {
    expect(snapToScale(-50)).toBe(0);
    expect(snapToScale(9999)).toBe(500);
    expect(snapToScale(OET_MIN - 1)).toBe(OET_MIN);
    expect(snapToScale(OET_MAX + 1)).toBe(OET_MAX);
  });

  it("snaps to the nearest 10, halves upward", () => {
    expect(snapToScale(344)).toBe(340);
    expect(snapToScale(345)).toBe(350);
    expect(snapToScale(346)).toBe(350);
  });

  it("🔴 every output over the whole scale is a multiple of 10 — a property, not samples", () => {
    // OET reports in 10-point increments. A single value off the grid is a score
    // that cannot exist being shown to a learner, so this runs the whole range
    // rather than a handful of points.
    let checked = 0;
    for (let n = -20; n <= 520; n++) {
      const out = snapToScale(n);
      expect(out % OET_STEP, `snapToScale(${n}) = ${out} is off the 10-point grid`).toBe(0);
      expect(out).toBeGreaterThanOrEqual(OET_MIN);
      expect(out).toBeLessThanOrEqual(OET_MAX);
      checked++;
    }
    expect(checked).toBe(541); // the population, stated, so this cannot pass over nothing
  });
});

describe("snapRange", () => {
  it("orders its ends, whichever way round they arrive", () => {
    expect(snapRange(400, 200)).toEqual([200, 400]);
    expect(snapRange(200, 400)).toEqual([200, 400]);
  });

  it("snaps and clamps both ends", () => {
    expect(snapRange(-30, 9999)).toEqual([0, 500]);
    expect(snapRange(344, 346)).toEqual([340, 350]);
  });
});

describe("fractionToRange — the practice heuristic, kept inside the scale", () => {
  it("clamps a fraction outside 0..1", () => {
    expect(fractionToRange(-1)).toEqual(fractionToRange(0));
    expect(fractionToRange(2)).toEqual(fractionToRange(1));
  });

  const BUCKET_FLOORS = [0.0, 0.35, 0.55, 0.7, 0.82, 0.92];

  it("a bucket floor lands in that bucket, and a hair below lands in the one under it", () => {
    for (let i = 1; i < BUCKET_FLOORS.length; i++) {
      const floor = BUCKET_FLOORS[i];
      const atFloor = fractionToRange(floor);
      const justBelow = fractionToRange(floor - 0.0001);
      expect(atFloor, `fraction ${floor} should not sit in the bucket below it`).not.toEqual(
        justBelow,
      );
      // and the bucket below must be the lower one, never the higher
      expect(rangeMidpoint(justBelow)).toBeLessThan(rangeMidpoint(atFloor));
    }
  });

  it("🔴 every range is well formed across the whole 0..1 sweep", () => {
    let checked = 0;
    for (let f = -0.1; f <= 1.1; f += 0.001) {
      const [lo, hi] = fractionToRange(f);
      expect(lo, `fraction ${f} produced an inverted range`).toBeLessThanOrEqual(hi);
      expect(lo % OET_STEP, `lo ${lo} is off the grid`).toBe(0);
      expect(hi % OET_STEP, `hi ${hi} is off the grid`).toBe(0);
      expect(lo).toBeGreaterThanOrEqual(OET_MIN);
      expect(hi).toBeLessThanOrEqual(OET_MAX);
      checked++;
    }
    expect(checked).toBeGreaterThan(1000); // the population, stated
  });

  it("is monotonic — a better performance never estimates a lower range", () => {
    let prev = -1;
    for (let f = 0; f <= 1; f += 0.005) {
      const mid = rangeMidpoint(fractionToRange(f));
      expect(mid, `estimate went DOWN as the fraction rose, at ${f}`).toBeGreaterThanOrEqual(prev);
      prev = mid;
    }
  });
});

describe("fractionToEstimate", () => {
  it("carries the grade of its own midpoint, so the number and the letter agree", () => {
    for (let f = 0; f <= 1; f += 0.01) {
      const est = fractionToEstimate(f);
      expect(est.grade).toBe(gradeForScore(rangeMidpoint([est.lo, est.hi])));
      expect(est.lo).toBeLessThanOrEqual(est.hi);
    }
  });

  it("a perfect run estimates the top band, a blank one no band at all", () => {
    expect(fractionToEstimate(1).grade).toBe("A");
    expect(fractionToEstimate(0).grade).toBeNull(); // midpoint 60 — below every published band
  });
});

describe("overallScoreSupported", () => {
  it("🔴 is always false, so turning it on has to arrive with a test", () => {
    // OET has reported an overall score since 29 Jan 2025. AlmiOET does not derive
    // one, because the official method is not published in a form this repo has
    // verified, and an invented composite printed beside real sub-test grades
    // would read as authoritative. This assertion exists so that decision cannot
    // be reversed quietly — flipping it red-flags here first.
    expect(overallScoreSupported()).toBe(false);
  });
});

describe("cefrHint", () => {
  it("🔴 records current behaviour ONLY — this mapping is UNSOURCED", () => {
    // scale.ts:175-198 marks this function unsourced in its own 🔴 block: the one
    // artefact this repo cites contains NO CEFR alignment of any kind. These
    // assertions are a description of what the function does today so that a
    // silent change is visible. THEY ARE NOT A VERIFICATION OF THE MAPPING, and
    // they must not be cited as one. The open item stands: either an artefact
    // lands in docs/sources/ and scale.ts names it, or the hint leaves the UI.
    expect(cefrHint(299)).toBeNull();
    expect(cefrHint(300)).toBe("B2");
    expect(cefrHint(349)).toBe("B2");
    expect(cefrHint(350)).toBe("C1");
    expect(cefrHint(449)).toBe("C1");
    expect(cefrHint(450)).toBe("C2");
    expect(cefrHint(500)).toBe("C2");
    expect(cefrHint(0)).toBeNull();
  });

  it("claims no CEFR level for C or below, where OET aligns none", () => {
    for (const s of [0, 100, 199, 200, 250, 290, 299]) {
      expect(cefrHint(s), `${s} is C or below — no CEFR level is claimed`).toBeNull();
    }
  });
});

describe("readinessBand — orientation against the Grade B benchmark", () => {
  it("sits on the benchmark the rest of the app uses", () => {
    expect(OET_BENCHMARK_B).toBe(350);
    expect(readinessBand(OET_BENCHMARK_B)).toBe("At benchmark");
    expect(gradeForScore(OET_BENCHMARK_B)).toBe("B"); // the benchmark IS grade B's floor
  });

  it("three points at each of its own boundaries", () => {
    expect(readinessBand(449)).toBe("At benchmark");
    expect(readinessBand(450)).toBe("Above benchmark");
    expect(readinessBand(451)).toBe("Above benchmark");
    expect(readinessBand(349)).toBe("Approaching benchmark");
    expect(readinessBand(350)).toBe("At benchmark");
    expect(readinessBand(279)).toBe("Below benchmark");
    expect(readinessBand(280)).toBe("Approaching benchmark");
    expect(readinessBand(0)).toBe("Below benchmark");
  });

  it("never returns a value outside its own four labels", () => {
    const allowed = new Set([
      "Below benchmark",
      "Approaching benchmark",
      "At benchmark",
      "Above benchmark",
    ]);
    for (let s = 0; s <= 500; s += 10) expect(allowed.has(readinessBand(s))).toBe(true);
  });
});

describe("rangeMidpoint and formatRange", () => {
  it("takes the midpoint of a range", () => {
    expect(rangeMidpoint([200, 400])).toBe(300);
    expect(rangeMidpoint([350, 450])).toBe(400);
  });

  it("formats with an en dash, the way the UI prints it", () => {
    expect(formatRange([350, 450])).toBe("350–450");
  });
});

describe("the constants the public copy quotes", () => {
  it("are the OET scale, and gate:claims reads these same symbols", () => {
    expect(OET_MIN).toBe(0);
    expect(OET_MAX).toBe(500);
    expect(OET_STEP).toBe(10);
  });
});
