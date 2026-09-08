/**
 * 🔴 WHICH ITEMS THE RETIRE IS ABOUT TO HIDE, FOR ALL THREE READING PARTS.
 *
 * ── WHAT BROKE, AND WHEN ────────────────────────────────────────────────────
 *
 * The e2e fixture used to answer that question from each item's SHAPE: an item
 * short of its length law was on its way out, an item that met the law was
 * staying. Its own words about Part C, written 3 September 2026:
 *
 *     "The seed holds 42: twenty-one legacy articles of 51-405 words carrying
 *      two or eight questions with THREE options, and the twenty-one written to
 *      OET's own measure. Length alone separates them, and the option count
 *      confirms it."
 *
 * Every clause of that was true when it was written and none of it is true now.
 * Measured across the history of scripts/seed/gen/reading_c.ts:
 *
 *     afcd374  3 Sep   the 21 outgoing titles: 51-405 words,  0 inside 653-836
 *     594c0e6  5 Sep   the 21 outgoing titles: 51-405 words,  0 inside 653-836
 *     f355464  6 Sep   the 21 outgoing titles: 51-405 words,  0 inside 653-836
 *     7afe10a  6 Sep   the 21 outgoing titles: 694-803 words, 21 inside 653-836
 *
 * 7afe10a is "the verified bank of 6 September 2026". It rewrote all 42 Part C
 * articles, the outgoing twenty-one included, to full length with eight
 * questions of four options. So on 7 September the shape rule sorted all 42 into
 * "full length" and none into "legacy", and the fixture died on its own guard:
 *
 *     [e2e] no legacy Reading Part C item is left to walk its retire against
 *
 * That guard was right to fire. The bank had changed under an assumption nobody
 * had re-measured.
 *
 * ⚠️ AND IT WAS NOT ONLY PART C. Reading Part A's retire list names EIGHTEEN
 * items; the shape rule found FIFTEEN, because three of the eighteen now meet
 * the 885-1009 law. tests/e2e/retire-legacy.spec.ts asserts the list and the
 * fixture agree, so it would have gone red the moment the Part C error stopped
 * hiding it. Part B's two answers still agree at 33 — its legacy extracts really
 * are short — but agreeing today is not a rule, so it comes through here too.
 *
 * ── WHY THE ANSWER CANNOT COME FROM THE BANK AT ALL ─────────────────────────
 *
 * For Part C there is no longer any property that separates the two halves.
 * Measured over all 42: identical payload keys, identical question keys, one
 * passage each, 8 questions each, 4 options each, every one inside 653-836
 * words, every question `kind`-marked. The only fields that differ —
 * `difficulty`, `form`, `guidanceNote`, the shape of `topicTag` — are artefacts
 * of who authored them, not laws anyone enforces, and a split built on one of
 * those would be another pattern that is right today and silently wrong later.
 * That is the exact failure this file exists because of.
 *
 * 🔴 WHICH ITEMS ARE GOING IS A DECISION, AND THE DECISION IS A FILE.
 * scripts/retire/*.json is the record of what is switched off. Those are the
 * files retire-fragments.mts runs, the files gate:length reads for its
 * retirement ratchet ("The lists in scripts/retire/ ARE the record of what is
 * switched off"), and the files gate:accept-lists reads to find its dead overlay
 * keys. The fixture now reads the same files as everything else.
 *
 * ── WHAT THE FIXTURE GAINED BY ASKING THE FILE ──────────────────────────────
 *
 * The shape rule could not notice a retire list naming an item the bank no
 * longer holds: it never read the list. This one dies on it by name. A retire
 * row matching nothing is how a retire silently under-runs — the same defect
 * gate:accept-lists guards against at its own A0.
 *
 * ⚠️ THE LENGTH LAWS DID NOT GO AWAY, THEY MOVED TO WHERE THEY BELONG. They no
 * longer decide who is going; they are asked whether every item the learner is
 * LEFT with meets its law, which is the thing worth failing over. The three
 * predicates below are unchanged byte-for-byte from the fixture — this was a
 * move.
 */
import type { Prisma } from "@prisma/client";
import { readFileSync } from "node:fs";
import { words } from "../../src/lib/oet/words";

/** A row of scripts/retire/*.json, keyed by the title as it stood on the day of
 *  the retire. Those files are a historical record and are never rewritten. */
export type RetireRow = { taskType: string; title: string };

export function readRetireList(path: string): RetireRow[] {
  return JSON.parse(readFileSync(path, "utf8")) as RetireRow[];
}

// ── the three length laws, as gate:length holds them ───────────────────────
export const PART_A_MIN = 885;
export const PART_A_MAX = 1009;
export const PART_B_MIN = 136;
export const PART_B_MAX = 155;
export const PART_C_MIN = 653;
export const PART_C_MAX = 836;

/** Everything these predicates need of an item. Deliberately narrower than
 *  Prisma.OetItemCreateManyInput so a test can hand them a hand-built bank. */
export type BankItem = { title: string; payload: Prisma.InputJsonValue | unknown };

/**
 * Reading Part A: four texts, twenty questions, and the combined length
 * gate:length measures — every text body plus every question stem.
 *
 * ⚠️ THE STRUCTURAL HALF OF THE LAW IS NOT ENOUGH, AND THIS WAS MEASURED THE
 * HARD WAY. The first version of this filter asked only for FOUR texts and
 * TWENTY questions. Three legacy items carry exactly that shape and are still
 * 355-385 words combined, and one of them sorts FIRST — so the walk opened
 * `OET Form 1 · Reading Part A — Preventing pressure injuries`, rendered 266
 * words, and failed on its own word-count assertion. That failure is the reason
 * the assertion is there.
 */
export function isFullLengthPartA(item: BankItem): boolean {
  const p = item.payload as {
    texts?: { body?: string }[];
    questions?: { stem?: string }[];
  } | null;
  const texts = p?.texts ?? [];
  const questions = p?.questions ?? [];
  if (texts.length !== 4 || questions.length !== 20) return false;
  const combined =
    texts.reduce((n, t) => n + words(t.body), 0) +
    questions.reduce((n, q) => n + words(q.stem), 0);
  return combined >= PART_A_MIN && combined <= PART_A_MAX;
}

export function isFullLengthPartB(item: BankItem): boolean {
  const p = item.payload as { passages?: { body?: string }[] } | null;
  const n = (p?.passages ?? []).reduce((a, x) => a + words(x.body), 0);
  return n >= PART_B_MIN && n <= PART_B_MAX;
}

export function isFullLengthPartC(item: BankItem): boolean {
  const p = item.payload as {
    passages?: { body?: string }[];
    questions?: { options?: unknown[] }[];
  } | null;
  const n = (p?.passages ?? []).reduce((a, x) => a + words(x.body), 0);
  const qs = p?.questions ?? [];
  return (
    n >= PART_C_MIN &&
    n <= PART_C_MAX &&
    qs.length === 8 &&
    qs.every((q) => (q.options?.length ?? 0) === 4)
  );
}

/**
 * Split a seeded pool into the items a retire will hide and the items the
 * learner is left with.
 *
 * Throws rather than returning a half nobody meant: every one of these is a
 * state in which the retire walk would still run and would prove nothing.
 */
export function splitByRetireList<T extends BankItem>(
  taskType: string,
  all: readonly T[],
  retireRows: readonly RetireRow[],
  meetsLaw: (item: T) => boolean,
  lawText: string,
): { full: T[]; legacy: T[] } {
  if (retireRows.length === 0) {
    throw new Error(
      `[e2e] the ${taskType} retire list is empty — there would be nothing to walk the ` +
        "retire against, and the walk would pass by having no work to do.",
    );
  }

  const wrongType = retireRows.filter((r) => r.taskType !== taskType);
  if (wrongType.length > 0) {
    throw new Error(
      `[e2e] the ${taskType} retire list names ${wrongType.length} row(s) of another task ` +
        `type: ${[...new Set(wrongType.map((r) => r.taskType))].join(", ")}`,
    );
  }

  const going = new Set(retireRows.map((r) => r.title));
  if (going.size !== retireRows.length) {
    throw new Error(
      `[e2e] the ${taskType} retire list holds ${retireRows.length} row(s) but only ` +
        `${going.size} distinct title(s) — a duplicated row makes every count in the walk wrong.`,
    );
  }

  // 🔴 A RETIRE ROW MATCHING NOTHING IS HOW A RETIRE SILENTLY UNDER-RUNS.
  // The shape rule never read this file and so could never notice. Named, not
  // counted: the point of the message is that somebody can go and look.
  const held = new Set(all.map((i) => i.title));
  const unresolved = retireRows.map((r) => r.title).filter((t) => !held.has(t));
  if (unresolved.length > 0) {
    throw new Error(
      `[e2e] the ${taskType} retire list names ${unresolved.length} item(s) the seed source ` +
        `does not hold: ${unresolved.map((t) => JSON.stringify(t)).join(", ")}`,
    );
  }

  const legacy = all.filter((i) => going.has(i.title));
  const full = all.filter((i) => !going.has(i.title));

  // ⚠️ THE LAW, ASKED OF WHAT THE RETIRE LEAVES BEHIND. It no longer decides
  // who is going; it decides whether what stays is worth staying.
  const offLaw = full.filter((i) => !meetsLaw(i)).map((i) => i.title);
  if (offLaw.length > 0) {
    throw new Error(
      `[e2e] ${offLaw.length} ${taskType} item(s) the retire LEAVES BEHIND do not meet the ` +
        `law (${lawText}): ${offLaw.map((t) => JSON.stringify(t)).join(", ")}`,
    );
  }

  return { full, legacy };
}
