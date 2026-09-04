/**
 * 🔴 THE ONE PLACE THIS PROJECT DECIDES WHAT A WORD IS.
 *
 * Split on whitespace, then keep only the tokens carrying a letter or a digit.
 * "—" alone is dropped; "-" alone is dropped; "mid-sentence", "1:1000", "92%"
 * and "18" are all words.
 *
 * RULED 3 SEPTEMBER 2026, and the ruling is recorded in full at the top of
 * `length.ts`: OET's own figures — 885, 976, 1009 — are counts of words, and a
 * gate that counts punctuation as words is not measuring what OET measured.
 *
 * ── WHY IT LIVES IN ITS OWN FILE ────────────────────────────────────────────
 *
 * It used to be a `const` inside `length.ts`, which is a gate: importing that
 * file RUNS the gate. So anything else that needed the same definition — the
 * e2e fixture, a measurement script — copied it instead, and a copy is free to
 * drift from the rule it is supposed to share. That has already cost this
 * project once: `scripts/e2e/seed-fixture.mts` split on whitespace while the
 * gate counted letters-or-digits, and two full-length Reading Part C items were
 * sorted into the LEGACY list on their punctuation alone.
 *
 * Moving it changed no verdict. `gate:length` was run before and after and
 * printed the same three numbers: 316 governed, 169 meeting the law, LEGACY DEBT
 * 147.
 */
export const words = (s: string | undefined): number =>
  s ? (s.match(/[^\s]+/g) ?? []).filter((t) => /[A-Za-z0-9]/.test(t)).length : 0;
