/**
 * 🔴 THE ONE PLACE THIS PROJECT DECIDES WHAT A PROMPT PROMISES.
 *
 * A companion to gates/words.ts and content/payload-shape.ts, and here for the
 * same reason: `scripts/gates/prompt-shape.ts` is a SCRIPT, not a library —
 * importing it runs the gate and calls process.exit. A test that wants to drive
 * the rule cannot import the gate, and a test that reimplements the rule is
 * testing its own copy.
 *
 * So the rule lives here, the gate imports it, and §H of the master standard —
 * a gate is not trusted until it has been deliberately broken and seen to go
 * red — can be satisfied against the same code the gate runs.
 *
 * Both functions read the bound off the PROMPT ITSELF. There is no table of
 * expected shapes to drift from the content.
 */

/**
 * Every question RANGE a prompt names, as the set of numbers it covers, or null
 * when it names none.
 *
 * 🔴 A PROMPT MAY NAME MORE THAN ONE RANGE. Reading Part A says
 *
 *   "Read the four texts and answer the twenty questions. Answer questions 1-7
 *    by choosing the text (A-D). Answer questions 8-20 with a word or short
 *    phrase taken from the texts."
 *
 * — two ranges that together cover 1-20, on an item with twenty questions. Read
 * as a single range it says seven, and the first version of this rule reported
 * thirty correct items as broken.
 *
 * The en dash matters elsewhere and not here: the correct Reading Part C prompt
 * uses one and the wrong variants use a hyphen, so both are accepted. This rule
 * is about the NUMBER; a dash-style rule would be a different check wearing this
 * one's clothes.
 */
export function statedQuestionNumbers(prompt: string): Set<number> | null {
  const re = /questions?\s+(\d+)\s*(?:[–—-]|to)\s*(\d+)/gi;
  const covered = new Set<number>();
  let found = false;
  for (const m of prompt.matchAll(re)) {
    const from = Number(m[1]);
    const to = Number(m[2]);
    if (!Number.isInteger(from) || !Number.isInteger(to) || to < from) continue;
    found = true;
    for (let n = from; n <= to; n++) covered.add(n);
  }
  return found ? covered : null;
}

/**
 * How many options a prompt says are on offer — "(a, b, c or d)" → 4,
 * "(A, B or C)" → 3 — or null when it names none.
 *
 * 🔴 SINGLE-LETTER TOKENS, NOT EVERY LETTER. The first version matched
 * /[A-Za-z]/g across "A, B or C" and counted the o and the r as options: five
 * where there are three, and 262 false failures across the bank. Splitting on
 * non-letters and keeping one-character tokens drops the joining word.
 *
 * Only a parenthesised run joined by "or" counts, so prose that happens to
 * contain a letter and the word "or" is not mistaken for a promise — and
 * "(A-D)", which names the TEXTS in Reading Part A rather than options, is
 * deliberately not matched.
 */
export function statedOptionCount(prompt: string): number | null {
  const m = prompt.match(/\(\s*([A-Za-z](?:\s*,\s*[A-Za-z])*\s*(?:,)?\s*or\s+[A-Za-z])\s*\)/);
  if (!m) return null;
  const letters = m[1].split(/[^A-Za-z]+/).filter((t) => t.length === 1);
  const unique = new Set(letters.map((l) => l.toLowerCase()));
  return unique.size >= 2 ? unique.size : null;
}

/** What the prompt is counting when it says "questions 1-N".
 *
 *  🔴 NOT ALWAYS payload.questions. Listening Part A is gap-fill: its prompt
 *  says "For questions 1-12, complete the notes" and those twelve live in
 *  `gaps`, with `questions` empty. The first version of the gate read only
 *  `questions` and reported six items as promising twelve and carrying none — a
 *  defect in the check, not in the bank. */
export function answerCount(payload: { questions?: unknown[]; gaps?: unknown[] } | undefined): number {
  return (payload?.questions ?? []).length || (payload?.gaps ?? []).length;
}

/** The numbers 1..n, which is what a prompt must account for. */
export function expectedNumbers(n: number): Set<number> {
  const out = new Set<number>();
  for (let i = 1; i <= n; i++) out.add(i);
  return out;
}

/** P1 · does the prompt account for exactly the answers the item has?
 *  Returns null when the prompt names no range (not every prompt states its
 *  shape, and requiring one would be a style opinion, not a defect). */
export function questionCountBreach(
  prompt: string,
  payload: { questions?: unknown[]; gaps?: unknown[] } | undefined,
): { said: number[]; have: number } | null {
  const said = statedQuestionNumbers(prompt);
  if (said === null) return null;
  const have = answerCount(payload);
  const expected = expectedNumbers(have);
  const missing = [...expected].filter((n) => !said.has(n));
  const extra = [...said].filter((n) => !expected.has(n));
  if (missing.length === 0 && extra.length === 0) return null;
  return { said: [...said].sort((a, b) => a - b), have };
}

/** P2 · does every question offer as many options as the prompt names? */
export function optionCountBreach(
  prompt: string,
  payload: { questions?: { options?: unknown[] }[] } | undefined,
): { said: number; offered: number[] } | null {
  const said = statedOptionCount(prompt);
  if (said === null) return null;
  const qs = payload?.questions ?? [];
  const offered = [...new Set(qs.map((q) => (q.options ?? []).length))].sort((a, b) => a - b);
  if (qs.length === 0) return { said, offered: [] };
  if (offered.every((n) => n === said)) return null;
  return { said, offered };
}
