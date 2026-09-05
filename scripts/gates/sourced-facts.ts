/**
 * gate:sourced-facts — A FACT ABOUT SOMEBODY ELSE NEEDS A SOURCE BESIDE IT.
 *
 * ── WHY THIS IS NOT gate:claims ─────────────────────────────────────────────
 *
 * gate:claims measures a number in our copy against OUR OWN symbol: does the
 * page say $12 when PRICE_MONTHLY_CENTS is 1200. It cannot help with a sentence
 * about an EXTERNAL body, because there is no symbol in this repository that
 * knows what OET does. That is not a failing of that gate; it is a different
 * question, and this is the gate for it.
 *
 * ── THE SENTENCE THAT PROMPTED IT ───────────────────────────────────────────
 *
 * The results screen told a learner, in OET's name:
 *
 *     "OET reports a grade per sub-test and, since January 2025, an overall
 *      score too — we don't estimate that one, because we won't put a number
 *      next to your results that we invented."
 *
 * The SECOND half is about us, it is true, and it stays. The first half is a
 * dated factual claim about OET, it appears nowhere in docs/sources/, and the
 * owner's own browser reading of OET's page (PRODUCT_SOURCE_OF_TRUTH §1.6)
 * says the opposite.
 *
 * 🔴 AND REMOVING IT NEEDED NO ARTEFACT, WHICH IS THE WHOLE POINT:
 *
 *     Removing an unsourced claim requires no source. WRITING one does.
 *
 * If OET does report an overall, we merely stopped saying a true thing and no
 * learner is worse off. If it does not, we removed a falsehood. Both ways,
 * removing is safe — so it does not wait on anyone's decision.
 *
 * ── THE RULE, AND WHY A DATE CHANGES IT ─────────────────────────────────────
 *
 * Any statement about an external institution must have a docs/sources/ filename
 * near it. How near depends on whether it pins a DATE:
 *
 *   "since <Month> <Year>"        a citation within 3 lines — its OWN reference
 *   "OET reports/requires/…"      a citation within 15 lines — the block's is enough
 *
 * That distinction is not decoration; it is what makes this gate able to tell
 * two lines in the SAME comment block apart. scale.ts:3 says "OET reports a
 * score from 0 to 500" and the register is cited at scale.ts:10, seven lines
 * below. scale.ts:52 said "since 29 January 2025 OET also reports an overall
 * score" and its nearest citation was ALSO seven lines away. By distance they
 * are identical. By shape they are not: a claim that fixes a date to another
 * organisation's behaviour is exactly the kind that needs its own reference, and
 * a general description of a published scale is covered by the block's.
 *
 * scale.ts:3 is this gate's CONTROL — it must never produce a finding. A gate
 * that flags every mention of OET would be noise, and noise gets switched off.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["src/app", "src/components", "src/lib"];
const CITATION = /docs\/sources\//;

const MONTH =
  "(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)";

/**
 * 🔴 A DATE ALONE IS NOT A CLAIM ABOUT ANYBODY ELSE.
 *
 * The first run of this gate flagged src/app/api/status/route.ts:5 —
 * "IT ALSO REPORTS PENDING MIGRATIONS, SINCE 3 SEPTEMBER 2026" — which is a
 * dated fact about OUR OWN endpoint, and needs no external source at all. The
 * probe was matching the date and never asking whose behaviour was being dated.
 *
 * So a dated line only counts when an external body is named on it or beside it.
 */
const EXTERNAL_BODY = /\b(OET|CBLA|Occupational English Test|NARIC|Stripe|Anthropic)\b/;

type Probe = { name: string; re: RegExp; window: number; why: string; needsBody?: boolean };
const PROBES: Probe[] = [
  {
    name: "a dated claim about an external body",
    re: new RegExp(`\\bsince\\s+(?:\\d{1,2}\\s+)?${MONTH}\\.?\\s+\\d{4}\\b`, "i"),
    window: 3,
    why: "a claim that pins a DATE to another organisation's behaviour needs its own reference",
    needsBody: true,
  },
  {
    name: "a statement about what OET does",
    re: /\bOET\s+(?:reports|requires|publishes|awards|does\s+not)\b/i,
    window: -1, // -1 = anywhere in the same file; see the note below
    why: "a statement about an external institution needs a source in the same block",
  },
];

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx)$/.test(e)) out.push(p);
  }
  return out;
}

type Finding = { file: string; line: number; probe: string; why: string; text: string };
const findings: Finding[] = [];
const cited: string[] = [];
let scanned = 0;
let matched = 0;

for (const root of ROOTS) {
  for (const file of walk(root)) {
    const lines = readFileSync(file, "utf8").split(/\r?\n/);
    scanned++;
    for (let i = 0; i < lines.length; i++) {
      for (const probe of PROBES) {
        if (!probe.re.test(lines[i])) continue;
        // A dated line must actually be ABOUT an external body — see the note
        // on EXTERNAL_BODY. Our own changelog dates are not claims about anyone.
        if (probe.needsBody) {
          const around = lines.slice(Math.max(0, i - 2), i + 3).join(" ");
          if (!EXTERNAL_BODY.test(around)) continue;
        }
        matched++;
        // window -1 means FILE level. A file that describes what OET publishes
        // must name the citation register somewhere in it; a DATED claim must
        // carry its own reference within a few lines. The file-level form is
        // deliberate: the first draft used a +/-15 line window and produced 15
        // findings on ordinary descriptive prose ("where OET publishes a
        // duration"), which is 2:1 noise against 8 real ones — and a gate at that
        // ratio is a gate somebody switches off, which would defeat the very
        // condition it exists to hold.
        const near =
          probe.window < 0
            ? lines.some((l) => CITATION.test(l))
            : lines
                .slice(Math.max(0, i - probe.window), Math.min(lines.length - 1, i + probe.window) + 1)
                .some((l) => CITATION.test(l));
        const rel = file.replace(/\\/g, "/");
        if (near) {
          cited.push(`${rel}:${i + 1}  ${probe.name}`);
        } else {
          findings.push({
            file: rel,
            line: i + 1,
            probe: probe.name,
            why: probe.why,
            text: lines[i].trim().slice(0, 116),
          });
        }
        break; // one finding per line; the dated probe is the stricter of the two
      }
    }
  }
}

// ── a gate over an empty population passes vacuously ────────────────────────
if (scanned === 0) {
  console.error("[gate:sourced-facts] no file was read — this gate would pass over nothing");
  process.exit(1);
}
if (matched === 0) {
  console.error(
    `[gate:sourced-facts] ${scanned} file(s) read and NOT ONE statement about an external body\n` +
      "  was found. Either every such sentence has gone, or the probes stopped matching.\n" +
      "  Those look identical from here, so this is red until somebody says which.",
  );
  process.exit(1);
}

console.log(`[gate:sourced-facts] ${scanned} file(s) · ${matched} statement(s) about an external body`);
console.log(`  properly cited: ${cited.length}`);
for (const c of cited) console.log(`    ok  ${c}`);

if (findings.length > 0) {
  console.error(`\n[gate:sourced-facts] ${findings.length} claim(s) with no source beside them:`);
  for (const f of findings) {
    console.error(`  ${f.file}:${f.line}  [${f.probe}]`);
    console.error(`      ${f.text}`);
    console.error(`      ${f.why}`);
  }
  console.error(
    "\n  Either cite a docs/sources/ entry on the spot, or DELETE the claim.\n" +
      "  Removing an unsourced claim requires no source; writing one does. If the\n" +
      "  fact is true you have merely stopped saying it, and nobody is worse off.",
  );
  process.exit(1);
}
console.log("[gate:sourced-facts] all clear — every statement about an external body cites one");
