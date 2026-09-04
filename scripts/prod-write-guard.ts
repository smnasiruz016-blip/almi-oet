/**
 * 🔴 TWO CONDITIONS BEFORE ANY SCRIPT WRITES TO PRODUCTION. RULED 4 SEPTEMBER 2026.
 *
 *   1. `--confirm` on the command line, and
 *   2. `ALLOW_PROD_WRITE=1` in the environment.
 *
 * A stray command line satisfies one of these. It cannot satisfy both.
 *
 * ── WHY THE RULE EXISTS ─────────────────────────────────────────────────────
 *
 * On 4 September 2026 a pull-request body was passed inline to a shell. Its
 * backticks became command substitution and bash executed lines out of the
 * project's own documentation — including a usage line that ended `--confirm`,
 * against production. It changed nothing, because that repair was idempotent and
 * only touches rows where the value actually differs: 0 jobs, 0 rows.
 *
 * The owner's ruling on that near-miss is the reason for this file, and it is
 * worth quoting because it is the part that is easy to get wrong:
 *
 *     "Idempotence saved us this time — it will not always. The next repair
 *      script may not be idempotent. And this is the SECOND time today we were
 *      saved by accident: the first was a zod schema refusing `transfer of
 *      care`. Both times the thing that saved us was a GUARD, not care. Twice in
 *      one day is a pattern."
 *
 * So the protection stops depending on a property of each script and becomes a
 * property of all of them.
 *
 * ── AND THE DOCUMENTATION RULE THAT GOES WITH IT ────────────────────────────
 *
 * No runnable production-write command may appear verbatim in `docs/` or in a
 * PR body. Write it WITH the environment variable in front, so anyone copying it
 * has to type something deliberate:
 *
 *     ALLOW_PROD_WRITE=1 npx tsx scripts/<script>.mts --confirm
 *
 * That form is also what makes the intent visible in a shell history.
 */

import { isDisposableUrl } from "./disposable-url";

/** Throws unless BOTH conditions are met. Call it immediately before the first
 *  write, never at import time — a script must still be able to dry-run. */
export function requireProdWrite(script: string): void {
  // 🔴 THE RULE IS ABOUT PRODUCTION, NOT ABOUT WRITING.
  //
  // The e2e walk runs the REAL retire script against a THROWAWAY database, on
  // purpose, so the walk exercises what runs in anger. The first version of this
  // guard refused that and turned two retire walks red. Making the walk set
  // ALLOW_PROD_WRITE=1 would have taught exactly the habit this guard exists to
  // prevent, so the guard learned the distinction instead.
  //
  // It fails CLOSED: whyNotDisposable() calls anything it cannot parse
  // production, so "I do not recognise this URL" never means "go ahead".
  const target = process.env.E2E_DATABASE_URL ?? process.env.DATABASE_URL;
  if (isDisposableUrl(target)) return;

  const confirmed = process.argv.includes("--confirm");
  const allowed = process.env.ALLOW_PROD_WRITE === "1";
  if (confirmed && allowed) return;

  const missing: string[] = [];
  if (!confirmed) missing.push("--confirm");
  if (!allowed) missing.push("ALLOW_PROD_WRITE=1");

  console.error(
    `\n[${script}] REFUSING TO WRITE — ${missing.length} of 2 condition(s) missing: ${missing.join(" and ")}\n` +
      `\n  A production write needs BOTH, on purpose. One of them can be satisfied by\n` +
      `  accident; both cannot. See scripts/prod-write-guard.ts for the near-miss that\n` +
      `  put this here.\n` +
      `\n  ALLOW_PROD_WRITE=1 npx tsx ${script} --confirm\n`,
  );
  process.exit(1);
}

/** True when both conditions hold — for a script that wants to PLAN rather than
 *  throw, and print what it would do. */
export const prodWriteAllowed = (): boolean =>
  isDisposableUrl(process.env.E2E_DATABASE_URL ?? process.env.DATABASE_URL) ||
  (process.argv.includes("--confirm") && process.env.ALLOW_PROD_WRITE === "1");
