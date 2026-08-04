// Reconciles AI-graded attempts against AICostLedger rows.
//
// The ledger swallows insert failures on purpose — a failed accounting write
// must never fail a learner's request. The cost of that choice is ambiguity: an
// empty ledger looks identical whether nothing has run or every write is
// failing. Resolving that by hand took a full investigation on 2026-08-04, so
// the distinction lives here instead.
//
// The rule: every SCORED Writing or Speaking attempt made at least one paid
// call (Sonnet for the grade, plus Whisper for Speaking), so it must leave at
// least one ledger row behind. Attempts without rows is the broken case;
// no attempts at all is simply unused.

export type LedgerHealth = {
  state: "unused" | "ok" | "missing" | "partial";
  attempts: number;
  rows: number;
  /** True when the admin surface should show a warning. */
  flag: boolean;
  headline: string;
  detail: string;
};

export function reconcileLedger(input: { attempts: number; rows: number }): LedgerHealth {
  const { attempts, rows } = input;

  if (attempts === 0) {
    return {
      state: "unused",
      attempts,
      rows,
      flag: false,
      headline: "No metered AI has run yet",
      detail:
        rows === 0
          ? "An empty ledger is expected: no Writing or Speaking attempt has been scored. This is not a recording failure."
          : `The ledger holds ${rows} row(s) from calls not tied to a scored attempt (audio or transcription).`,
    };
  }

  if (rows === 0) {
    return {
      state: "missing",
      attempts,
      rows,
      flag: true,
      headline: "AI attempts exist but the cost ledger is empty",
      detail:
        `${attempts} AI-graded attempt(s) have been scored, each of which makes at least one paid call, ` +
        `yet no ledger rows were written. Cost recording is failing silently — check the server logs for ` +
        `"[ai-cost-ledger] insert failed".`,
    };
  }

  if (rows < attempts) {
    return {
      state: "partial",
      attempts,
      rows,
      flag: true,
      headline: "Fewer ledger rows than AI-graded attempts",
      detail:
        `${attempts} scored AI attempt(s) but only ${rows} ledger row(s). Every scored attempt should leave ` +
        `at least one row, so some cost writes are being lost.`,
    };
  }

  return {
    state: "ok",
    attempts,
    rows,
    flag: false,
    headline: "Cost recording is healthy",
    detail: `${rows} ledger row(s) across ${attempts} scored AI attempt(s).`,
  };
}
