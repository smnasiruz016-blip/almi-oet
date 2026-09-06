/**
 * THE REVIEW SCREEN AND THE GRADER MUST NEVER DISAGREE.
 *
 * ── WHY THIS FILE EXISTS ────────────────────────────────────────────────────
 *
 * On 3 September 2026 a browser walk put a Reading Part A result on screen and
 * found two numbers there at the same moment:
 *
 *     4 / 20 practice points          ← markObjective, the score that is stored
 *     Answer review · 3/20 correct    ← buildObjectiveReview, what the learner reads
 *
 * `review.ts` carried its own comparison and never read `variants` or the
 * accept-list overlay. Measured across the bank: 361 questions carry at least one
 * accepted answer beyond the key, 882 accepted strings in total, and 688 of them
 * were SCORED RIGHT AND SHOWN WRONG.
 *
 * ── WHAT THIS TEST ACTUALLY DOES ────────────────────────────────────────────
 *
 * It runs EVERY accepted answer in the seed bank through BOTH paths and asserts
 * they agree — not a sample, not a fixture. It also runs an answer that must be
 * wrong through both, so a comparison that returned `true` for everything would
 * fail here rather than pass twice.
 *
 * 🔴 AND IT GUARDS THE SHAPE, NOT JUST TODAY'S BEHAVIOUR. A second comparison
 * that happens to agree today is the defect waiting to come back, so the source
 * check below fails if `review.ts` regrows a normaliser or compares answers
 * itself. Two live graders agreeing is not the same as one grader.
 */
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { GEN_ITEMS } from "../scripts/seed/gen/index";
import { buildObjectiveReview } from "../src/lib/oet/review";
import { markObjective, type AnswerKey } from "../src/lib/oet/tasks/objective";
import {
  listeningMcqAnswerKey,
  listeningPartAAnswerKey,
} from "../src/lib/oet/tasks/listening";
import { readingMcqAnswerKey, readingPartAAnswerKey } from "../src/lib/oet/tasks/reading";

type Item = { taskType: string; title: string; slug: string; payload: Record<string, unknown> };

const OBJECTIVE = new Set([
  "LISTENING_PART_A",
  "LISTENING_PART_B",
  "LISTENING_PART_C",
  "READING_PART_A",
  "READING_PART_B",
  "READING_PART_C",
]);

const items = (GEN_ITEMS as unknown as Item[]).filter((i) => OBJECTIVE.has(i.taskType));

/** The key the graders build, chosen the way the registry chooses a handler. */
function keyFor(item: Item): AnswerKey[] {
  const p = item.payload as never;
  switch (item.taskType) {
    case "LISTENING_PART_A":
      return listeningPartAAnswerKey(p, item.slug);
    case "LISTENING_PART_B":
    case "LISTENING_PART_C":
      return listeningMcqAnswerKey(p);
    case "READING_PART_A":
      return readingPartAAnswerKey(p, item.slug);
    default:
      return readingMcqAnswerKey(p);
  }
}

/** Every string that MUST be marked right for this question, plus one that must
 *  not be. For an `exact` (id) key the wrong answer is another option id. */
function probesFor(k: AnswerKey): { accepted: string[]; wrong: string } {
  const accepted = [k.answer, ...(k.variants ?? [])];
  // Nothing in the bank is answered with this, under any leniency rule.
  const wrong = k.exact ? `${k.answer}__no_such_option` : "qqzzx not an answer at all";
  return { accepted, wrong };
}

function verdicts(item: Item, id: string, given: string) {
  const key = keyFor(item);
  const response = { answers: { [id]: given } };
  // TaskRunResult.detail is declared `unknown` on the registry type; markObjective
  // always fills it with one row per key. Narrowed here rather than widening the
  // registry, which is not what this change is about.
  const detail = markObjective(key, response).detail as { id: string; correct: boolean }[];
  const scored = detail.find((d) => d.id === id)?.correct;
  const review = buildObjectiveReview(item.taskType as never, item.payload, response, item.slug);
  const index = key.findIndex((k) => k.id === id);
  return { scored, shown: review?.rows[index]?.ok, hasRow: Boolean(review?.rows[index]) };
}

describe("the review screen never disagrees with the grader", () => {
  it("covers a real population — the guard is not vacuous", () => {
    expect(items.length).toBeGreaterThan(100);
    const keys = items.flatMap(keyFor);
    expect(keys.length).toBeGreaterThan(500);
    const withVariants = keys.filter((k) => (k.variants?.length ?? 0) > 0);
    // The 361 questions carrying an accepted answer beyond the key are the whole
    // reason this test exists; if they vanish, it is testing nothing.
    expect(withVariants.length).toBeGreaterThan(300);
  });

  it("marks every accepted answer in the bank the same way on both paths", () => {
    const disagreements: string[] = [];
    let acceptedTested = 0;
    let variantsTested = 0;

    for (const item of items) {
      for (const k of keyFor(item)) {
        const { accepted, wrong } = probesFor(k);
        for (const [i, a] of accepted.entries()) {
          acceptedTested += 1;
          if (i > 0) variantsTested += 1;
          const v = verdicts(item, k.id, a);
          if (!v.hasRow) {
            disagreements.push(`${item.title} / ${k.id}: no review row at all`);
            continue;
          }
          if (v.scored !== true) {
            disagreements.push(
              `${item.title} / ${k.id}: the GRADER rejected its own accepted answer ` +
                `${JSON.stringify(a)}`,
            );
          }
          if (v.shown !== v.scored) {
            disagreements.push(
              `${item.title} / ${k.id}: answered ${JSON.stringify(a)} — ` +
                `scored ${v.scored}, shown ${v.shown}`,
            );
          }
        }
        // …and the control, so "always true" cannot pass this test.
        const w = verdicts(item, k.id, wrong);
        if (w.scored !== false || w.shown !== false) {
          disagreements.push(
            `${item.title} / ${k.id}: a plainly wrong answer was accepted ` +
              `(scored ${w.scored}, shown ${w.shown})`,
          );
        }
      }
    }

    // Printed so the number is in front of us on every run, the way the gates do.
    console.log(
      `[review] ${acceptedTested} accepted answer(s) across ${items.length} item(s), ` +
        `${variantsTested} of them variants; disagreements: ${disagreements.length}`,
    );
    expect(variantsTested).toBeGreaterThan(500);
    expect(disagreements.slice(0, 20)).toEqual([]);
    expect(disagreements).toHaveLength(0);
  });

  it("an unanswered question is shown wrong, and shown as unanswered", () => {
    const item = items.find((i) => i.taskType === "READING_PART_A")!;
    const key = keyFor(item);
    const review = buildObjectiveReview(
      item.taskType as never,
      item.payload,
      { answers: {} },
      item.slug,
    )!;
    expect(review.rows).toHaveLength(key.length);
    expect(review.correct).toBe(0);
    for (const r of review.rows) expect(r.your).toBe("—");
  });

  it("the 'Correct:' line stays the primary answer, not whichever variant matched", () => {
    const item = items.find(
      (i) => i.taskType === "READING_PART_A" && keyFor(i).some((k) => (k.variants?.length ?? 0) > 0),
    )!;
    const key = keyFor(item);
    const k = key.find((x) => (x.variants?.length ?? 0) > 0)!;
    const variant = k.variants![0];
    const review = buildObjectiveReview(
      item.taskType as never,
      item.payload,
      { answers: { [k.id]: variant } },
      item.slug,
    )!;
    const row = review.rows[key.findIndex((x) => x.id === k.id)];
    expect(row.ok, `${item.title} / ${k.id}: variant ${JSON.stringify(variant)} not accepted`).toBe(
      true,
    );
    expect(row.your).toBe(variant);
    // The learner sees the model answer, not their own accepted wording.
    expect(row.correct).toBe(k.answer);
  });

  it("review.ts owns no comparison of its own", () => {
    const src = readFileSync(join(process.cwd(), "src/lib/oet/review.ts"), "utf8");
    const code = src
      // Comments talk ABOUT normalize(); that must not fail the check, and the
      // check must not be satisfiable by moving the defect into a comment.
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/^\s*\/\/.*$/gm, "");
    expect(code, "review.ts must ask isAnswerCorrect(), not decide").toContain("isAnswerCorrect");
    for (const banned of ["toLowerCase", "normalize", "normalise", "trim() ===", ".trim()==="]) {
      expect(code, `review.ts has regrown its own comparison: ${banned}`).not.toContain(banned);
    }
  });
});
