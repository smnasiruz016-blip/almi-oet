/**
 * gate:funnel — THE FUNNEL SAYS WHAT ACTUALLY HAPPENED.
 *
 * Master Standard §J ends with the sentence that makes analytics urgent rather
 * than nice:
 *
 *     "Product quality and funnel defects must be fixed before increasing
 *      advertising spend."
 *
 * Measured on main @ #68: zero analytics calls, zero packages, zero events. Ads
 * today would mean paying to push people through a pipe with no instrument on it.
 *
 * ── 🔴 THE RULE THIS GATE EXISTS FOR ───────────────────────────────────────
 *
 * §J: "Do not fire a trial event merely because a user visited a page."
 *
 * A click on the pricing page is an INTENTION. Until Stripe says the card
 * verified, that person is not on a trial. A `trial_started` fired from a page
 * would inflate the top of the funnel at exactly the point money is about to be
 * spent against it — the funnel would lie in the direction that costs most.
 *
 * ── FOUR CHECKS ─────────────────────────────────────────────────────────────
 *
 *   1. every catalogued event has at least one call site — a name nobody emits
 *      is a step nobody can see
 *   2. every track() name is in the catalogue — no ad-hoc event names
 *   3. every event is emitted only from its declared owner. The CONVERSION
 *      events may live in exactly one route each
 *   4. payload keys are inside the event's allowlist, and never email · name ·
 *      token · stripeCustomerId
 *
 * ── 🔴 AND THE CONTROL, WITHOUT WHICH THIS GATE IS NOT TRUSTWORTHY ─────────
 *
 * `landing_view`, `pricing_view` and `progress_view` LIVE IN page.tsx FILES, and
 * must never be flagged. If this gate were written as "no analytics in a page",
 * it would pass its own sabotage — a `trial_started` planted in page.tsx would
 * go red for the wrong reason, and three correct events would go red too.
 *
 * The rule is therefore about OWNERSHIP, not about file type. Check 3 asks
 * "is this event allowed HERE", never "is this a page".
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import {
  FUNNEL_EVENTS,
  FORBIDDEN_KEYS,
  FUNNEL_EVENT_NAMES,
  FUNNEL_DISPLAYED,
} from "../../src/lib/analytics/events";

const ROOTS = ["src"];
const CALL = /\btrack\(\s*"([a-z_]+)"\s*(,\s*\{([\s\S]*?)\})?\s*\)/g;

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx)$/.test(e)) out.push(p);
  }
  return out;
}

type Call = { file: string; line: number; name: string; keys: string[] };
const calls: Call[] = [];
const failures: string[] = [];
const fail = (m: string) => failures.push(m);

for (const root of ROOTS) {
  for (const file of walk(root)) {
    // The chokepoint and the catalogue mention every name; they are not callers.
    const rel = file.replace(/\\/g, "/");
    if (rel.startsWith("src/lib/analytics/")) continue;
    const src = readFileSync(file, "utf8");
    for (const m of src.matchAll(CALL)) {
      const line = src.slice(0, m.index).split(/\r?\n/).length;
      const body = m[3] ?? "";
      const keys = [...body.matchAll(/(?:^|[\s,{])([A-Za-z_][\w]*)\s*:/g)].map((k) => k[1]);
      calls.push({ file: rel, line, name: m[1], keys });
    }
  }
}

console.log(`[gate:funnel] ${FUNNEL_EVENT_NAMES.length} catalogued event(s) · ${calls.length} call site(s)`);

// ── a gate over an empty population passes vacuously ────────────────────────
if (calls.length === 0) {
  console.error(
    "[gate:funnel] not one track() call was found. Either the funnel is gone, or\n" +
      "  the detector stopped matching. Both mean this gate is green over nothing.",
  );
  process.exit(1);
}

// ── 1 · every catalogued event is actually emitted ──────────────────────────
const emitted = new Set(calls.map((c) => c.name));
for (const name of FUNNEL_EVENT_NAMES) {
  if (!emitted.has(name)) {
    fail(`1 · "${name}" is in the catalogue and nothing emits it — a step nobody can see`);
  }
}

// ── 2 · every emitted name is catalogued ────────────────────────────────────
for (const c of calls) {
  if (!(c.name in FUNNEL_EVENTS)) {
    fail(`2 · ${c.file}:${c.line} emits "${c.name}", which is not in the catalogue`);
  }
}

// ── 3 · every event only from its owner ─────────────────────────────────────
for (const c of calls) {
  const def = FUNNEL_EVENTS[c.name as keyof typeof FUNNEL_EVENTS];
  if (!def) continue;
  if (c.file !== def.owner) {
    fail(
      `3 · ${c.file}:${c.line} emits "${c.name}", which belongs to ${def.owner}` +
        (def.conversion
          ? " — and it is a CONVERSION event, which may live in exactly one route"
          : ""),
    );
  }
}

// ── 4 · payload keys ────────────────────────────────────────────────────────
for (const c of calls) {
  const def = FUNNEL_EVENTS[c.name as keyof typeof FUNNEL_EVENTS];
  if (!def) continue;
  for (const k of c.keys) {
    if ((FORBIDDEN_KEYS as readonly string[]).includes(k)) {
      fail(`4 · ${c.file}:${c.line} puts "${k}" in a "${c.name}" payload — that is a person, not a key`);
    } else if (!(def.keys as readonly string[]).includes(k)) {
      fail(`4 · ${c.file}:${c.line} puts "${k}" in "${c.name}", which allows only [${def.keys.join(", ")}]`);
    }
  }
}

// ── 5 · every conversion event is actually shown somewhere ─────────────────
//
// An event we collect and never display is an event nobody sees. Membership is
// checked against FUNNEL_DISPLAYED — steps, friction and churn — rather than
// against the step order alone, because churn inside a forward funnel would
// make every rate in it wrong.
const displayed = new Set<string>(FUNNEL_DISPLAYED);
for (const name of FUNNEL_EVENT_NAMES) {
  if (!FUNNEL_EVENTS[name].conversion) continue;
  if (!displayed.has(name)) {
    fail(`5 · "${name}" is a conversion event and /admin/funnel never shows it — nobody sees it`);
  }
}

const conversions = FUNNEL_EVENT_NAMES.filter((n) => FUNNEL_EVENTS[n].conversion);
console.log(`  ${conversions.length} conversion event(s), each confined to one route`);

if (failures.length > 0) {
  console.error(`\n[gate:funnel] ${failures.length} problem(s):`);
  for (const f of failures) console.error(`  ${f}`);
  console.error(
    "\n  §J: do not fire a trial event because a user visited a page. An event is\n" +
      "  emitted where the thing HAPPENS — after the row is written, after Stripe\n" +
      "  confirms — and a conversion event lives in exactly one route.\n" +
      "  Payloads carry keys, never people.",
  );
  process.exit(1);
}
console.log("[gate:funnel] all clear — every event is catalogued, owned, and free of personal data");
