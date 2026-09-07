/**
 * gate:partc-kind — A READING PART C ITEM MUST TEST MORE THAN ONE THING.
 *
 * ── WHY THIS GATE EXISTS, AND WHY ONLY NOW ──────────────────────────────────
 *
 * OET's Reading Part C asks a spread of question types across an item: some
 * about the CONTENT of a paragraph, at least one about what a word or phrase
 * REFERS TO, and a few about the WRITER's own position. An item that is eight
 * content questions in a row is a comprehension quiz, not a Part C.
 *
 * The rule was agreed before the data existed, and it was deliberately NOT
 * switched on then. The reason is worth keeping, in the owner's words:
 *
 *     "a gate over a field nobody has filled is another green check over nothing."
 *
 * `kind` was empty on all 246 Reading Part C questions. Turning the gate on then
 * would have produced a passing check that proved nothing at all. The field is
 * filled now — 168 questions, 222 markers, applied from the marker data file by
 * scripts/seed/gen/_apply_partc_kind.mts — so the gate goes on.
 *
 * ── THE RULE, PER ITEM ──────────────────────────────────────────────────────
 *
 *   paragraph   >= 5
 *   reference   1 or 2
 *   writer      <= 3
 *
 * Measured across the 21 governed items: paragraph 7, reference 1, writer 2 or
 * 3, every one. Items breaking the rule: 0.
 *
 * ── ON THE TOTAL BEING MORE THAN 100% ───────────────────────────────────────
 *
 * 222 markers over 168 questions is 132%, because ONE QUESTION MAY LEGITIMATELY
 * BE TWO KINDS — a question about what a phrase refers to can also be a question
 * about the writer's stance. That is not double-counting and it is not a defect.
 * OET's own published breakdown of this question type overlaps the same way, at
 * 130% (63+38+12+17), so the shape of our bank sits alongside the exam's.
 *
 * ── WHAT `writer` DELIBERATELY EXCLUDES ─────────────────────────────────────
 *
 * A question phrased "what does the writer SAY about X" is NOT `writer`. It is a
 * detail question that happens to be reported in the writer's voice. `writer` is
 * for questions whose answer IS the writer's stance.
 *
 * 🔴 THIS DISTINCTION WAS MADE TO PROTECT THE RULE, NOT TO SATISFY IT. Under the
 * looser reading, `writer` reached 5-6 in every item and the <= 3 rule would have
 * broken everywhere. The choice then is to widen the threshold or to tighten the
 * definition. The definition was tightened. A threshold moved to admit the
 * content authored after it is not a threshold.
 *
 * ── 🔴 THE LEGACY 78 ARE GONE, AND THIS PARAGRAPH USED TO SAY THE OPPOSITE ─
 *
 * It read: "The 21 older items carry THREE options where the law gives four —
 * the standing OPTION COUNT DEBT in gate:distractor. They have no markers and
 * are exempt here." That was true when it was written and it is FALSE now.
 *
 * The owner's rebuild of 6 September 2026 gave those 21 items FOUR options each.
 * The legacy three-option count is 0, the exemption catches nothing, and the 21
 * moved from exempt to GOVERNED in one afternoon — which is the whole reason this
 * gate went from 0 failures to 210 without a line of its own code changing.
 * Anyone reading the old paragraph would have gone looking for a bug in the gate.
 *
 * ⚠️ A COMMENT THAT EXPLAINS THE OPPOSITE OF WHAT HAPPENED IS WORSE THAN NO
 * COMMENT. The exemption branch below stays, because a marker on a three-option
 * question would still mean somebody marked content nobody reviewed — but it now
 * guards a population of zero, and the printed count says so on every run.
 */
import { GEN_ITEMS } from "../seed/gen/index";

type Q = { id: string; options?: unknown[]; kind?: string[] };
type Item = { taskType: string; title: string; payload?: { questions?: Q[] } };

const KINDS = ["paragraph", "reference", "writer"] as const;
const RULE = { paragraphMin: 5, referenceMin: 1, referenceMax: 2, writerMax: 3 };

const items = (GEN_ITEMS as unknown as Item[]).filter((i) => i.taskType === "READING_PART_C");
const failures: string[] = [];
const fail = (m: string) => failures.push(m);

let governed = 0;
let legacy = 0;
let markers = 0;
let governedQuestions = 0;
const totals: Record<string, number> = { paragraph: 0, reference: 0, writer: 0 };

for (const item of items) {
  const qs = item.payload?.questions ?? [];
  const four = qs.filter((q) => (q.options ?? []).length === 4);
  const three = qs.filter((q) => (q.options ?? []).length === 3);

  // The legacy three-option items are exempt — but exempt is not the same as
  // unexamined: a marker appearing on one means somebody marked content nobody
  // reviewed, and that is worth failing for.
  for (const q of three) {
    legacy += 1;
    if (q.kind !== undefined) {
      fail(`${item.title} · ${q.id} — a LEGACY three-option question carries markers; it should have none`);
    }
  }

  if (four.length === 0) continue;
  governed += 1;
  governedQuestions += four.length;

  const count: Record<string, number> = { paragraph: 0, reference: 0, writer: 0 };
  for (const q of four) {
    if (!q.kind || q.kind.length === 0) {
      fail(`${item.title} · ${q.id} — a four-option question with NO marker`);
      continue;
    }
    if (new Set(q.kind).size !== q.kind.length) fail(`${item.title} · ${q.id} — repeats a marker`);
    for (const k of q.kind) {
      if (!(KINDS as readonly string[]).includes(k)) {
        fail(`${item.title} · ${q.id} — unknown marker "${k}"`);
        continue;
      }
      count[k] += 1;
      totals[k] += 1;
      markers += 1;
    }
  }

  if (count.paragraph < RULE.paragraphMin) {
    fail(`${item.title} — paragraph ${count.paragraph}, the rule is at least ${RULE.paragraphMin}`);
  }
  if (count.reference < RULE.referenceMin || count.reference > RULE.referenceMax) {
    fail(`${item.title} — reference ${count.reference}, the rule is ${RULE.referenceMin}-${RULE.referenceMax}`);
  }
  if (count.writer > RULE.writerMax) {
    fail(`${item.title} — writer ${count.writer}, the rule is at most ${RULE.writerMax}`);
  }
}

// ── a gate over an empty population passes vacuously ────────────────────────
if (items.length === 0) {
  console.error("[gate:partc-kind] no READING_PART_C item was read — this gate would pass over nothing");
  process.exit(1);
}
if (governed === 0) {
  console.error(
    "[gate:partc-kind] not one four-option Reading Part C item was found. This gate would be\n" +
      "  green over nothing, which is exactly why it stayed switched off until the markers\n" +
      "  existed. Fix the reader before trusting a pass.",
  );
  process.exit(1);
}

console.log(
  `[gate:partc-kind] ${governed} governed item(s) · ${governedQuestions} four-option question(s) · ` +
    `${markers} marker(s) = ${Math.round((markers / governedQuestions) * 100)}% ` +
    `(one question may be two kinds; OET's own overlap is 130%) · ${legacy} legacy three-option question(s) exempt`,
);
console.log(
  `  paragraph ${totals.paragraph} · reference ${totals.reference} · writer ${totals.writer}` +
    `  (rule: paragraph >= ${RULE.paragraphMin}, reference ${RULE.referenceMin}-${RULE.referenceMax}, writer <= ${RULE.writerMax} per item)`,
);

if (failures.length > 0) {
  console.error(`\n[gate:partc-kind] ${failures.length} item(s)/question(s) break the rule:`);
  for (const f of failures.slice(0, 25)) console.error(`  ${f}`);
  if (failures.length > 25) console.error(`  …and ${failures.length - 25} more`);
  console.error(
    "\n  Change the CONTENT, not the rule. A question phrased 'what does the writer say\n" +
      "  about X' is a detail question in the writer's voice, not a `writer` question —\n" +
      "  that distinction is what keeps writer at or under 3 without moving a threshold.",
  );
  process.exit(1);
}
console.log("[gate:partc-kind] all clear — every governed item spreads its questions across the three kinds");
