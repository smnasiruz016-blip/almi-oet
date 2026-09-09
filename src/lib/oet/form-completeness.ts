/**
 * 🔴 ONE ANSWER TO "CAN A FULL MOCK START", SHARED BY THE ENGINE AND THE PROBE.
 *
 * `chooseCompleteForm()` decides whether a learner gets a mock. `/api/status`
 * reports whether a learner can get a mock. Those must be the SAME sentence of
 * arithmetic, not two implementations of one rule.
 *
 * ── WHY THAT IS THE WHOLE POINT OF THIS FILE ────────────────────────────────
 *
 * If the status route computed completeness its own way it could answer
 * `startable: true` while `chooseCompleteForm()` returned null, and the check
 * built on top of it would go green over a product that refuses to start — the
 * exact failure this exists to catch, wearing a new coat. A second copy of a
 * rule is a second answer to one question, and this repo has spent more time on
 * that family of defect than on any other.
 *
 * So: the route does not count rows. It calls `formCompleteness()`, and so does
 * the engine. `startable` is not an opinion about what the engine would do — it
 * is `complete.length > 0` on the same list the engine picks from.
 *
 * ── WHAT "DECLARED" MEANS, AND WHY IT IS NOT READ FROM scripts/seed/gen ─────
 *
 * A form is DECLARED by rows carrying its tag, active or not; it is COMPLETE
 * when its ACTIVE rows satisfy the whole objective MOCK_PLAN. The two numbers
 * are deliberately taken from different populations, because the way a form
 * dies here is retirement, not deletion: on 3 September 2026 three retire lists
 * deactivated all 27 form-tagged Reading items and every form silently stopped
 * being startable. Under this rule that reads 3 declared, 0 complete — the
 * regression is visible in the gap between the numbers.
 *
 * ⚠️ IT DOES NOT READ THE SEED SOURCE. `scripts/seed/gen` is 4.6 MB of content
 * and this runs inside a public serverless route; bundling the bank into an
 * endpoint that returns counts would be a real cost for a number the database
 * already carries. The consequence is stated where it belongs, in the header of
 * scripts/check-prod-mock.mts: a form whose rows were DELETED rather than
 * deactivated is undeclared, not incomplete, and neither number would move.
 */
import type { OetTaskType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { OET_TASKS, MOCK_PLAN } from "@/lib/oet/registry";
import { isPerProfession } from "@/lib/oet/types";

/** The objective items one full mock consumes, per task type. Writing and
 *  Speaking are per-profession and draw from a different axis, so form coherence
 *  is not asked of them. */
export function mockObjectiveNeeds(): Map<OetTaskType, number> {
  const need = new Map<OetTaskType, number>();
  for (const t of MOCK_PLAN) {
    if (isPerProfession(OET_TASKS[t].subTest)) continue;
    need.set(t, (need.get(t) ?? 0) + 1);
  }
  return need;
}

export type FormCompleteness = {
  /** Every form tag the objective bank carries, active or retired. */
  declared: string[];
  /** Those whose ACTIVE rows satisfy the whole objective plan. */
  complete: string[];
  /** Whether `chooseCompleteForm()` would return a form rather than null. */
  startable: boolean;
};

/** Count the objective bank by form. Counts only — no titles, no payloads —
 *  which is what lets the public status route report this without leaking
 *  anything and without credentials. */
export async function formCompleteness(): Promise<FormCompleteness> {
  const need = mockObjectiveNeeds();
  const rows = await prisma.oetItem.findMany({
    where: { profession: null, taskType: { in: [...need.keys()] } },
    select: { form: true, taskType: true, active: true },
  });

  const declared = new Set<string>();
  const activeCounts = new Map<string, Map<OetTaskType, number>>();
  for (const r of rows) {
    if (!r.form) continue; // legacy items carry no form and are not part of any
    declared.add(r.form);
    if (!r.active) continue;
    const m = activeCounts.get(r.form) ?? new Map<OetTaskType, number>();
    m.set(r.taskType, (m.get(r.taskType) ?? 0) + 1);
    activeCounts.set(r.form, m);
  }

  // Iterating DECLARED rather than the counts keeps `complete ⊆ declared` true
  // by construction, so formsComplete can never exceed formsDeclared.
  const complete = [...declared]
    .filter((f) => {
      const m = activeCounts.get(f);
      return !!m && [...need.entries()].every(([t, n]) => (m.get(t) ?? 0) >= n);
    })
    .sort();

  return { declared: [...declared].sort(), complete, startable: complete.length > 0 };
}
