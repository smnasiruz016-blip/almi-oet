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
 *   "$12/month"        OFFER.priceMonthlyCents    1200 cents, per month
 *   "7-day free trial" OFFER.trialDays            7
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
 * changes with it; leave the copy behind and the copy is what fails. *
 * ── 🔴 THESE ROWS WERE REPOINTED WHEN THE OFFER CONFIG LANDED ──────────────
 *
 * They used to read PRICE_MONTHLY_CENTS and TRIAL_PERIOD_DAYS, which were then
 * hard-coded constants. src/lib/billing/offer.ts is now the one place trial
 * length, price and caps live, and those two constants are re-exports of it.
 *
 * Leaving the gate on the old symbols would have been the exact trap it exists
 * to prevent: it would keep guarding a value nobody can see any more while the
 * config that actually drives the product went unguarded — a green check over a
 * dead constant. When you add an offer value, point this gate at it in the SAME
 * commit.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { OET_MAX, OET_MIN, OET_STEP, gradeForScore } from "../../src/lib/oet/scale";
import { OFFER } from "../../src/lib/billing/offer";
import { TIMING } from "../../src/lib/oet/exam-shape";
import { GEN_ITEMS } from "../seed/gen/index";


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
        ok: cents === OFFER.priceMonthlyCents,
        found: `$${m[1]}/month (${cents} cents)`,
        expected: `${OFFER.priceMonthlyCents} cents (OFFER.priceMonthlyCents)`,
      };
    },
  },
  {
    name: "the free-trial length",
    re: /\b(\d{1,3})[- ]day (?:free )?trial\b/i,
    check: (m) => ({
      ok: Number(m[1]) === OFFER.trialDays,
      found: `${m[1]}-day trial`,
      expected: `${OFFER.trialDays}-day trial (OFFER.trialDays, the value handed to Stripe)`,
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

// ═════════════════════════════════════════════════════════════════════════════
// THE SECOND HALF — THE ITEMS' OWN WORDS
//
// 🔴 THIS GATE'S SCOPE WAS TOO NARROW, AND IT COST A LIVE DEFECT.
//
// Until 5 September 2026 everything above read only src/app and src/components —
// the marketing surface. On 4 September the Speaking preparation time was
// corrected from 120 to 180 seconds: exam-shape.ts was fixed, the clock on
// screen was fixed, gate:exam-numbers was written to hold the payload figure,
// and every gate went green.
//
// The owner then opened a Speaking item and read, two lines under a clock
// showing 02:57:
//
//     "Read your role-play card. You have two minutes to prepare…"
//
// All 180 live Speaking items said it. The NUMBER was right everywhere and the
// SENTENCE was wrong everywhere, and nothing looked, because the sentence lives
// in item content and this gate only read marketing pages.
//
// That is the same shape as the two defects above it in this file: A–E in the
// copy against four grades in the engine, and markers in the seed against rows
// in production. Fix the number, leave the words. So the scope moves to where
// the words are.
//
// ── WHY IT MATCHES INSTRUCTION PHRASES, NOT TIMES ───────────────────────────
//
// "Any time in item text must match a constant" is unusable here, and that was
// MEASURED before this was written, not guessed. The bank is clinical prose:
// WRITING_LETTER alone carries 161 distinct time phrases — "48 hours",
// "two hours", and "two minutes" eleven times, every one of them about a
// patient. READING_PART_C says "two minutes" three times, about compressions.
// A rule over all of them would fire on hundreds of correct lines, and a gate
// that cries is a gate somebody switches off.
//
// So the probes below are EXAM-INSTRUCTION shapes — the sentences that speak to
// the candidate about the test itself. Measured across the whole bank they
// match 183 places and nothing clinical.
const items = GEN_ITEMS as unknown as { taskType: string; title: string; prompt?: string; payload?: unknown }[];

const WORD_NUMBER: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
  eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60,
  "twenty-five": 25, "forty-five": 45, "thirty-five": 35,
};
/** Both forms, because the defect can be written either way — "three" or "3". */
const minutesOf = (raw: string): number | null => {
  const t = raw.trim().toLowerCase();
  if (/^\d+$/.test(t)) return Number(t);
  return WORD_NUMBER[t] ?? null;
};

const TIMING_SOURCE = "src/lib/oet/exam-shape.ts · TIMING";
type TimeClaim = {
  label: string;
  re: RegExp;
  /** taskType -> the minutes that task's own constant gives. */
  expect: Record<string, { minutes: number; symbol: string }>;
};

const SPEAKING_PREP = {
  minutes: TIMING.speakingPrepSecondsMin / 60,
  symbol: "TIMING.speakingPrepSecondsMin",
};
const READING_A = {
  minutes: TIMING.readingPartASeconds / 60,
  symbol: "TIMING.readingPartASeconds",
};
const WRITING_TOTAL = {
  minutes: (TIMING.writingReadingSeconds + TIMING.writingWritingSeconds) / 60,
  symbol: "TIMING.writingReadingSeconds + TIMING.writingWritingSeconds",
};

const TIME_CLAIMS: TimeClaim[] = [
  {
    label: "… minutes to prepare",
    re: /\b([A-Za-z-]+|\d+)\s+minutes?\s+to\s+prepare\b/gi,
    expect: { SPEAKING_ROLEPLAY: SPEAKING_PREP },
  },
  {
    label: "you have … minutes",
    re: /\byou\s+have\s+([A-Za-z-]+|\d+)\s+minutes?\b/gi,
    expect: {
      SPEAKING_ROLEPLAY: SPEAKING_PREP,
      READING_PART_A: READING_A,
      WRITING_LETTER: WRITING_TOTAL,
    },
  },
  {
    label: "… minute role-play",
    re: /\b([A-Za-z-]+|\d+)[- ]minute\s+role[- ]?play\b/gi,
    expect: {
      SPEAKING_ROLEPLAY: {
        minutes: TIMING.speakingSpeakSeconds / 60,
        symbol: "TIMING.speakingSpeakSeconds",
      },
    },
  },
];

const claimHits = new Map<string, number>(TIME_CLAIMS.map((c) => [c.label, 0]));
let itemsRead = 0;

for (const item of items) {
  itemsRead++;
  const text = `${item.prompt ?? ""} ${JSON.stringify(item.payload ?? {})}`;
  for (const claim of TIME_CLAIMS) {
    const want = claim.expect[item.taskType];
    if (!want) continue; // this claim says nothing about this task type
    for (const m of text.matchAll(claim.re)) {
      claimHits.set(claim.label, (claimHits.get(claim.label) ?? 0) + 1);
      const said = minutesOf(m[1]);
      if (said === null) continue; // "a minute", "several minutes" — not a figure
      if (said !== want.minutes) {
        findings.push({
          file: `${item.taskType} · ${item.title}`,
          line: 0,
          claim: `item text — ${claim.label}`,
          found: `"${m[0].trim()}" = ${said} minute(s)`,
          expected: `${want.minutes} (${want.symbol}, ${TIMING_SOURCE})`,
        });
      }
    }
  }
}

// ── a gate over an empty population passes vacuously ────────────────────────
if (items.length === 0) {
  console.error("[gate:claims] no seed item was read — the item half would pass over nothing");
  process.exit(1);
}
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
console.log(`[gate:claims] ${itemsRead} seed item(s) read for exam-instruction time claims`);
for (const [label, n] of claimHits) console.log(`  ${String(n).padStart(4)} item claim(s) matching "${label}"`);
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
    // Item findings have no line number — they name the item instead.
    console.error(`  ${f.file}${f.line > 0 ? `:${f.line}` : ""}  [${f.claim}]`);
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
