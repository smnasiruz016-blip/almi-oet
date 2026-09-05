/**
 * gate:dates — A DATE TWO READERS READ DIFFERENTLY IS NOT A DATE.
 *
 * ── WHY THIS GATE EXISTS ────────────────────────────────────────────────────
 *
 * `src/app/(app)/account/page.tsx:85` rendered the billing date as
 *
 *     {new Date(user.subscriptionCurrentPeriodEnd).toLocaleDateString()}
 *
 * with no locale and no options, in a SERVER component — so the shape came from
 * whatever locale the server felt like, not the learner's. It printed
 * `Renews 9/12/2026`, which is:
 *
 *     12 September   to a reader in the US
 *      9 December    to a reader in the UK, Ireland, Australia, New Zealand,
 *                    India or the Philippines
 *
 * Three months apart, on the day a card is charged, for most of this product's
 * market. That is not cosmetic; it is what support tickets and chargebacks are
 * made of.
 *
 * ── 🔴 THE RULE IS ABOUT SHAPE, NOT ABOUT THE FUNCTION'S NAME ───────────────
 *
 * The first draft of this gate was going to exempt `toLocaleTimeString` by name,
 * because `ExamChrome.tsx:65` legitimately passes `undefined` as its locale — it
 * is a wall clock in a client component and must show the CANDIDATE's own time.
 *
 * The owner refused the exemption, and the reasoning is the part worth keeping:
 * exempt the NAME and tomorrow a bare `toLocaleTimeString()` — which prints
 * `2:05:33 PM` — sails through on the same exemption.
 *
 * So the rule is the underlying principle instead: A VALUE IS FORBIDDEN WHEN TWO
 * READERS CAN READ IT TWO WAYS. A date's numbers swap places (`9/12`). A
 * 24-hour, 2-digit time cannot: `14:05` is never `05:14`.
 *
 *   toLocaleDateString · toLocaleString
 *       explicit locale  AND  an options object  AND  timeZone
 *
 *   toLocaleTimeString
 *       hour12: false  AND  hour: "2-digit"  AND  minute: "2-digit"
 *       (and NOT timeZone — a wall clock pinned to UTC is a broken wall clock)
 *
 * Under that rule ExamChrome.tsx:65 passes ON ITS SHAPE, with no exemption list
 * to rot, and a bare `toLocaleTimeString()` still fails. There is no per-file
 * skip list here, and none should be added.
 *
 * ── 🔴 AND timeZone, WHICH SHAPE ALONE DOES NOT COVER ───────────────────────
 *
 * `src/lib/email.ts` formats the SAME `subscriptionCurrentPeriodEnd` the account
 * page shows, and it pins `timeZone: "UTC"`. One timestamp renders as two
 * different DAYS either side of midnight, so without a pinned zone the email can
 * say "12 September" while the page says "11 September" — two dates for one
 * charge, in front of one learner. Options without `timeZone` is RED.
 *
 * ── SCOPE, AND WHY IT IS WIDER THAN THE RULING SAID ─────────────────────────
 *
 * The ruling scoped this to src/app and src/components. It also required the
 * pages to share email.ts's formatter rather than copy it — and the moment they
 * do, those pages contain no toLocale* call at all, so a gate scoped to them
 * would pass over nothing while the single function that formats every date in
 * the product sat unchecked in src/lib. So src/lib is scanned too. Widening the
 * net is a decision, so it is written down rather than done quietly.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["src/app", "src/components", "src/lib"];
const METHODS = ["toLocaleDateString", "toLocaleString", "toLocaleTimeString"] as const;

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx)$/.test(e)) out.push(p);
  }
  return out;
}

/** The text between the call's parentheses, balanced so multi-line option
 *  objects (email.ts formats over five lines) are read whole. */
function argsAt(src: string, open: number): string | null {
  let depth = 0;
  for (let i = open; i < src.length; i++) {
    const c = src[i];
    if (c === "(") depth++;
    else if (c === ")") {
      depth--;
      if (depth === 0) return src.slice(open + 1, i);
    }
  }
  return null;
}

type Finding = { file: string; line: number; method: string; why: string; code: string };
const findings: Finding[] = [];
let callSites = 0;
const compliant: string[] = [];

for (const root of ROOTS) {
  for (const file of walk(root)) {
    const src = readFileSync(file, "utf8");
    for (const method of METHODS) {
      const needle = `.${method}(`;
      let at = src.indexOf(needle);
      while (at !== -1) {
        const open = at + needle.length - 1;
        const args = argsAt(src, open) ?? "";
        const line = src.slice(0, at).split(/\r?\n/).length;
        const rel = file.replace(/\\/g, "/");
        const code = (src.split(/\r?\n/)[line - 1] ?? "").trim();
        callSites++;

        // 🔴 "EXPLICIT" MEANS STATED, NOT NECESSARILY A QUOTED LITERAL.
        //
        // The first version required a string literal here, and immediately
        // failed src/lib/format-date.ts — the shared helper this gate tells
        // everyone to use — because it passes a named constant `LOCALE`. That is
        // as explicit as "en-GB" and better, since one constant cannot drift.
        //
        // What the rule actually forbids is leaving the choice to the
        // ENVIRONMENT: an omitted first argument, or an explicit `undefined`,
        // both of which mean "whatever this machine feels like" — which on a
        // server component is the SERVER's locale, not the reader's. So that is
        // what is tested.
        const first = args.split(",")[0].trim();
        const hasLocale = first !== "" && first !== "undefined" && !first.startsWith("{");
        const hasOptions = args.includes("{");
        const has = (k: string, v: string) =>
          new RegExp(`${k}\\s*:\\s*${v}`).test(args);

        const problems: string[] = [];
        if (method === "toLocaleTimeString") {
          // Unambiguous by shape: 24-hour, both parts two digits.
          if (!has("hour12", "false")) problems.push("no hour12: false");
          if (!has("hour", `["']2-digit["']`)) problems.push('no hour: "2-digit"');
          if (!has("minute", `["']2-digit["']`)) problems.push('no minute: "2-digit"');
          // 🔴 DELIBERATELY NOT CHECKED: whether timeZone is pinned.
          //
          // A draft of this gate also failed a pinned timeZone here, reasoning
          // that "a wall clock pinned to UTC is a broken wall clock". True of a
          // wall clock — and false of a TIMESTAMP, which is the other thing
          // toLocaleTimeString is used for and which SHOULD pin its zone. The
          // check fired on formatDateTimeUTC, correct code, on its first run.
          //
          // The two cannot be told apart by shape: one formats `new Date()`, the
          // other a stored instant, and this gate reads text, not intent. So it
          // does not guess. What it CAN prove — that the time is unambiguous to
          // read — it proves; the zone question on times is left to review, and
          // that limit is written here rather than papered over with a rule that
          // misfires. A gate that fails correct code is a gate someone disables.
        } else {
          if (!hasLocale) problems.push("no explicit locale");
          if (!hasOptions) problems.push("no options");
          else if (!has("timeZone", `["'\\w/]+`)) problems.push("options but no timeZone");
        }

        if (problems.length > 0) {
          findings.push({ file: rel, line, method, why: problems.join(" · "), code });
        } else {
          compliant.push(`${rel}:${line}  ${method}`);
        }
        at = src.indexOf(needle, at + 1);
      }
    }
  }
}

// ── a gate over an empty population passes vacuously ────────────────────────
if (callSites === 0) {
  console.error(
    `[gate:dates] not one toLocale* call was found under ${ROOTS.join(", ")}.\n` +
      "  Either every date now goes through a helper this gate cannot see, or the\n" +
      "  detector stopped matching. Both mean this gate is green over nothing.",
  );
  process.exit(1);
}

console.log(`[gate:dates] ${callSites} toLocale* call site(s) across ${ROOTS.join(", ")}`);
console.log(`  compliant: ${compliant.length}`);
for (const c of compliant) console.log(`    ok  ${c}`);

if (findings.length > 0) {
  console.error(`\n[gate:dates] ${findings.length} call site(s) can be read two ways:`);
  for (const f of findings) {
    console.error(`  ${f.file}:${f.line}  ${f.method} — ${f.why}`);
    console.error(`      ${f.code.slice(0, 120)}`);
  }
  console.error(
    "\n  A bare toLocaleDateString() prints 9/12/2026, which is 12 September to a US\n" +
      "  reader and 9 December to a UK, Irish, Australian, NZ, Indian or Filipino one.\n" +
      "  And options without timeZone lets the same instant render as two different\n" +
      "  DAYS — the email says one date, the page says another, for one charge.\n\n" +
      '  Use the shared helpers in src/lib/format-date.ts (locale "en-GB", explicit\n' +
      "  options, timeZone \"UTC\"), which is what src/lib/email.ts formats with.\n" +
      "  Do not add a per-file exemption: the rule is the SHAPE, not the name.",
  );
  process.exit(1);
}
console.log("[gate:dates] all clear — no user-facing date or time can be read two ways");
