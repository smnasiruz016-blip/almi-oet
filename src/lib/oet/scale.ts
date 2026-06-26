// The single source of truth for the Occupational English Test scale in AlmiOET.
//
// OET reports a SEPARATE score from 0 to 500 for each sub-test (in 10-point
// increments), each mapped to an A–E grade. There is NO composite/overall.
// Grade boundaries below are the OFFICIAL CBLA mapping, verified 2026-06-26
// against the UK NARIC report "Relating the Occupational English Test (OET) to
// the CEFR" (the test owner's own benchmarking study):
//
//     A  450–500   (CEFR C2)
//     B  350–440   (CEFR C1)   ← the grade most regulators require
//     C+ 300–340
//     C  200–290   (CEFR B2)
//     D  100–190
//     E    0–90
//
// AlmiOET turns practice performance into an HONEST estimate RANGE on this scale
// — deliberately wide, because a practice task is not the calibrated live exam.
// The fraction→range buckets are a documented practice heuristic, NOT OET's
// scoring algorithm (which is proprietary and varies slightly per test form). We
// always tell the user to confirm the score they need with their regulator.

import type { OetGrade, Range } from "@/lib/oet/types";

export const OET_MIN = 0;
export const OET_MAX = 500;
export const OET_STEP = 10; // OET reports in 10-point increments
export const OET_BENCHMARK_B = 350; // Grade B — the common regulator benchmark

// Official grade boundaries (lower bound of each grade), highest first.
const GRADE_FLOORS: { grade: OetGrade; floor: number }[] = [
  { grade: "A", floor: 450 },
  { grade: "B", floor: 350 },
  { grade: "C+", floor: 300 },
  { grade: "C", floor: 200 },
  { grade: "D", floor: 100 },
  { grade: "E", floor: 0 },
];

/** Clamp to [0,500] and snap to the nearest multiple of 10 — the OET grid. */
export function snapToScale(n: number): number {
  const clamped = Math.min(OET_MAX, Math.max(OET_MIN, n));
  return Math.round(clamped / OET_STEP) * OET_STEP;
}

export function snapRange(lo: number, hi: number): Range {
  const a = snapToScale(Math.min(lo, hi));
  const b = snapToScale(Math.max(lo, hi));
  return [a, b] as const;
}

/** The official OET letter grade for a 0–500 score. */
export function gradeForScore(score: number): OetGrade {
  for (const { grade, floor } of GRADE_FLOORS) {
    if (score >= floor) return grade;
  }
  return "E";
}

// Coarse performance buckets. `fraction` is 0..1 — the share of the available
// quality signal earned (objective: correct/total; productive: AI trait level
// normalised to 0..1). Each maps to a wide, humble range on the 0–500 scale.
// Intentionally overlapping — we never claim a precise OET number.
const BUCKETS: { min: number; range: Range }[] = [
  { min: 0.0, range: [0, 120] },
  { min: 0.35, range: [90, 220] },
  { min: 0.55, range: [180, 320] },
  { min: 0.7, range: [280, 400] },
  { min: 0.82, range: [350, 450] },
  { min: 0.92, range: [430, 500] },
];

/** Map a 0..1 performance fraction to a practice-estimate range on 0–500. */
export function fractionToRange(fraction: number): Range {
  const f = Math.min(1, Math.max(0, fraction));
  let chosen = BUCKETS[0];
  for (const b of BUCKETS) {
    if (f >= b.min) chosen = b;
  }
  return snapRange(chosen.range[0], chosen.range[1]);
}

export type GradeEstimate = { lo: number; hi: number; grade: OetGrade };

/** Turn a 0..1 fraction into a full estimate: a 0–500 range + the grade of its
 *  midpoint. The grade is the honest "most likely" band for this practice run. */
export function fractionToEstimate(fraction: number): GradeEstimate {
  const [lo, hi] = fractionToRange(fraction);
  const grade = gradeForScore(rangeMidpoint([lo, hi]));
  return { lo, hi, grade };
}

export function rangeMidpoint(range: Range): number {
  return (range[0] + range[1]) / 2;
}

/** CEFR alignment for a 0–500 score, per the UK NARIC benchmarking table.
 *  Only B2–C2 are benchmarked by the study; below 200 we report "below B2". */
export function cefrHint(score: number): "below B2" | "B2" | "C1" | "C2" {
  if (score >= 450) return "C2";
  if (score >= 350) return "C1";
  if (score >= 200) return "B2";
  return "below B2";
}

/** Honest readiness label relative to the common Grade B (350) benchmark.
 *  A label for orientation, never a number we'd defend as an OET score. */
export type ReadinessBand =
  | "Below benchmark"
  | "Approaching benchmark"
  | "At benchmark"
  | "Above benchmark";

export function readinessBand(midpoint: number): ReadinessBand {
  if (midpoint >= 450) return "Above benchmark";
  if (midpoint >= 350) return "At benchmark";
  if (midpoint >= 280) return "Approaching benchmark";
  return "Below benchmark";
}

/** Format a range for display, e.g. "350–450". */
export function formatRange(range: Range): string {
  return `${range[0]}–${range[1]}`;
}
