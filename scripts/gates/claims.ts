/**
 * gate:claims — WHAT THE PUBLIC COPY PROMISES MUST BE WHAT THE CODE DELIVERS.
 *
 * ── WHY THIS GATE EXISTS ────────────────────────────────────────────────────
 *
 * On 4 September 2026 the landing page and the pricing page told visitors, in
 * eighteen places, that AlmiOET gives "an A–E grade per sub-test".
 *
 * It does not, and never did. `gradeForScore` returns exactly four letters — A,
 * B, C+, C — and null below 200, where the UI prints "below the published grade
 * bands". There is no D and no E, deliberately: OET's scoring document publishes
 * no band beneath 200, and inventing one was refused (scale.ts:42-49).
 *
 * 🔴 THE ENGINE WAS NOT THE THING THAT WAS WRONG. The engine was carefully,
 * deliberately honest — it declined to print a letter it could not source. The
 * COPY over-promised. So the fix ran in that direction: the copy was brought to
 * the engine, and scale.ts was not touched. This gate keeps it that way.
 *
 * ── WHAT IT CHECKS ──────────────────────────────────────────────────────────
 *
 * Each row below is a claim the public copy makes, the SYMBOL that decides it,
 * and the value that symbol must actually produce. The gate runs the symbol —
 * it does not hold its own copy of the answer, because a check that carries a
 * second transcription of the number it is checking proves only that two
 * transcriptions agree.
 *
 *   claim              symbol                     expected
 *   ─────────────────  ─────────────────────────  ──────────────────────────
 *   grade letters      gradeForScore()            A, B, C+, C (and null)
 *   "0–500"            OET_MIN / OET_MAX          0, 500
 *   "10-point"         OET_STEP                   10
 *   "$12/month"        PRICE_MONTHLY_CENTS        1200 cents, per month
 *   "7-day free trial" TRIAL_PERIOD_DAYS          7
 *
 * Scope is USER-FACING COPY: string and JSX text under src/app/ and
 * src/components/. Comments are skipped — a comment is not a promise to a
 * customer, and three comments describing OET's own published scale (which does
 * name grades A to E) are legitimately left alone.
 *
 * ── ON THE GRADE ROW ────────────────────────────────────────────────────────
 *
 * The grade set is DERIVED, by sweeping gradeForScore across the whole 0–500
 * scale and collecting what comes back. Nothing here restates "A, B, C+, C" as
 * a literal to compare against. Change the engine's grade set and this gate
 * changes with it; leave the copy behind and the copy is what fails.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { OET_MAX, OET_MIN, OET_STEP, gradeForScore } from "../../src/lib/oet/scale";
import { PRICE_MONTHLY_CENTS } from "../../src/lib/billing/plans";
import { TRIAL_PERIOD_DAYS } from "../../src/lib/billing/stripe";

const ROOTS = ["src/app", "src/components"];

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx)$/.test(entry)) out.push(p);
  }
  return out;
}

/** A comment is not a promise to a customer. Strip them before reading copy. */
function stripComments(src: string): string {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/(^|[^:])\/\/[^\n]*/g, (m, p1) => p1 + " ".repeat(Math.max(0, m.length - p1.length)));
}

// ── the grade set the engine can actually produce, swept, not restated ──────
const ENGINE_GRADES = new Set<string>();
for (let s = OET_MIN; s <= OET_MAX; s += 1) {
  const g = gradeForScore(s);
  if (g !== null) ENGINE_GRADES.add(g);
}
const ENGINE_GRADE_LIST = [...ENGINE_GRADES].join(", ");

type Finding = { file: string; line: number; claim: string; found: string; expected: string };
const findings: Finding[] = [];

// ── the rows ────────────────────────────────────────────────────────────────
//
// Each probe reads a claim out of a line of copy and compares it to what the
// symbol says. `expected` is computed from the symbol on every run.
const ROWS: {
  name: string;
  re: RegExp;
  check: (m: RegExpMatchArray) => { ok: boolean; found: string; expected: string };
}[] = [
  {
    // Any grade RANGE claim: "A–E", "A-E", "A to E", "grade from A to E".
    // A range is the shape that over-promises, because it implies every letter
    // between the ends. The engine's set is not a contiguous letter range —
    // C+ sits inside it and D and E do not exist — so no range claim can be
    // true, whatever its endpoints.
    name: "grade letters",
    re: /(?:grade[ds]?\s+(?:from\s+)?)?\bA\s*(?:–|-|—|\s+to\s+)\s*E\b/i,
    check: (m) => ({
      ok: false,
      found: m[0].trim(),
      expected: `the grades gradeForScore() actually returns: ${ENGINE_GRADE_LIST} (and no letter below ${
        // the lowest score that still earns a letter
        (() => {
          for (let s = OET_MIN; s <= OET_MAX; s++) if (gradeForScore(s) !== null) return s;
          return OET_MIN;
        })()
      })`,
    }),
  },
  {
    // "0–500", "0 to 500" — the scale's ends.
    name: "the 0–500 scale",
    re: /\b(\d{1,4})\s*(?:–|—|-|\s+to\s+)\s*(\d{1,4})\s*(?=scale|estimate|practice|$|[ ,.)])/i,
    check: (m) => {
      const lo = Number(m[1]);
      const hi = Number(m[2]);
      // Only judge a pair that is CLAIMING to be this scale: one whose high end
      // is in the hundreds. A "10-point" or a "2–3 minutes" is not this row.
      if (hi < 100) return { ok: true, found: m[0], expected: "" };
      return {
        ok: lo === OET_MIN && hi === OET_MAX,
        found: `${lo}–${hi}`,
        expected: `${OET_MIN}–${OET_MAX} (OET_MIN / OET_MAX)`,
      };
    },
  },
  {
    name: "the 10-point step",
    re: /\b(\d{1,3})-point steps?\b/i,
    check: (m) => ({
      ok: Number(m[1]) === OET_STEP,
      found: `${m[1]}-point steps`,
      expected: `${OET_STEP}-point steps (OET_STEP)`,
    }),
  },
  {
    name: "the monthly price",
    re: /\$(\d+(?:\.\d{2})?)\s*(?:\/|\s+(?:a|per)\s+)month/i,
    check: (m) => {
      const cents = Math.round(Number(m[1]) * 100);
      return {
        ok: cents === PRICE_MONTHLY_CENTS,
        found: `$${m[1]}/month (${cents} cents)`,
        expected: `${PRICE_MONTHLY_CENTS} cents (PRICE_MONTHLY_CENTS)`,
      };
    },
  },
  {
    name: "the free-trial length",
    re: /\b(\d{1,3})[- ]day (?:free )?trial\b/i,
    check: (m) => ({
      ok: Number(m[1]) === TRIAL_PERIOD_DAYS,
      found: `${m[1]}-day trial`,
      expected: `${TRIAL_PERIOD_DAYS}-day trial (TRIAL_PERIOD_DAYS, the value handed to Stripe)`,
    }),
  },
];

const files = ROOTS.flatMap(walk);
let linesRead = 0;
const rowHits = new Map<string, number>(ROWS.map((r) => [r.name, 0]));

for (const file of files) {
  const lines = stripComments(readFileSync(file, "utf8")).split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    linesRead++;
    for (const row of ROWS) {
      const m = line.match(row.re);
      if (!m) continue;
      const verdict = row.check(m);
      rowHits.set(row.name, (rowHits.get(row.name) ?? 0) + 1);
      if (!verdict.ok) {
        findings.push({
          file,
          line: i + 1,
          claim: row.name,
          found: verdict.found,
          expected: verdict.expected,
        });
      }
    }
  }
}

// ── a gate over an empty population passes vacuously ────────────────────────
if (files.length === 0) {
  console.error("[gate:claims] no file read — this gate would pass over nothing");
  process.exit(1);
}
if (ENGINE_GRADES.size === 0) {
  console.error("[gate:claims] gradeForScore() returned no grade anywhere on 0–500 — refusing to judge copy against an empty set");
  process.exit(1);
}
// Every row must find SOMETHING to judge. A row that matches nothing is a claim
// nobody is making any more, or a regex that stopped working — and the second
// is indistinguishable from the first unless it is said out loud.
const silent = [...rowHits.entries()].filter(([, n]) => n === 0).map(([n]) => n);
const SILENCE_ALLOWED = new Set(["grade letters"]); // this one is silent when the copy is CORRECT
const wronglySilent = silent.filter((n) => !SILENCE_ALLOWED.has(n));

console.log(`[gate:claims] ${files.length} file(s) · ${linesRead} line(s) of copy read`);
console.log(`  engine grades, swept from gradeForScore(): ${ENGINE_GRADE_LIST}`);
for (const [name, n] of rowHits) console.log(`  ${String(n).padStart(3)} line(s) claiming ${name}`);

if (wronglySilent.length > 0) {
  console.error(
    `\n[gate:claims] ${wronglySilent.length} row(s) matched NOTHING: ${wronglySilent.join(", ")}\n` +
      "  Either the copy stopped making that claim, or the probe stopped matching it.\n" +
      "  Those look identical from here, so this is red until somebody says which.",
  );
  process.exit(1);
}

if (findings.length > 0) {
  console.error(`\n[gate:claims] ${findings.length} claim(s) the code does not deliver:`);
  for (const f of findings) {
    console.error(`  ${f.file}:${f.line}  [${f.claim}]`);
    console.error(`      copy says: ${f.found}`);
    console.error(`      code says: ${f.expected}`);
  }
  console.error(
    "\n  Bring the COPY to the code. scale.ts is right — it declines to print a\n" +
      "  letter it cannot source, and that is the behaviour worth keeping. If a\n" +
      "  number here really did change, change the SYMBOL and let the copy follow.",
  );
  process.exit(1);
}
console.log("[gate:claims] all clear — every checked promise matches the symbol that delivers it");
