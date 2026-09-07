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
// 🔴 MOVED TO src/lib/oet/words.ts ON 7 SEPTEMBER 2026, AND RE-EXPORTED HERE.
//
// The definition was right and the LOCATION was wrong: shipped code cannot
// import from a gate, so `wordCount()` — which marks the learner's letter —
// carried its own copy and counted a bare dash as a word. The gates measured
// the bank one way and the student was measured another. One definition now,
// in src/, where both sides can reach it. Every import of this file still
// works and no verdict moved.
export { words } from "../../src/lib/oet/words";
