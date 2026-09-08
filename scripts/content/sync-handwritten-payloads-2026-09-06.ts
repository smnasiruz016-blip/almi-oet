/**
 * BRING THE FOUR HAND-WRITTEN SEED FILES BACK INTO AGREEMENT WITH gen/.
 *
 *   npx tsx scripts/content/sync-handwritten-payloads-2026-09-06.ts
 *   npx tsx scripts/content/sync-handwritten-payloads-2026-09-06.ts --write
 *
 * ── WHY THEY EXIST AND WHY THIS IS NEEDED ───────────────────────────────────
 *
 * scripts/seed/{listening,reading,writing-letter,speaking-roleplay}.ts are NOT
 * seeded. gen/ is the only seed source. They are kept and imported so that
 * scripts/seed/divergence.ts can CHECK them against gen/ — G7 in
 * scripts/gates/run.ts — because an item living only in a hand-written file
 * would be dropped from every future seed in silence.
 *
 * That check compares PAYLOAD VALUES, and it was widened to do so after 24
 * Speaking items sat with prepSeconds 120 in gen/ and 60 here: agreeing on
 * identity, disagreeing on content, for as long as the check only compared
 * (taskType, profession, title).
 *
 * The content batch of 6 September 2026 rewrote 56 of the 60 items these files
 * describe, so G7 reports 221 divergences — correctly. gen/ is the source of
 * truth (it carries the option order learners are actually served), so the
 * hand-written copies follow it.
 *
 * ── 🔴 WHY BRACE MATCHING AND NOT LINE MATCHING ─────────────────────────────
 *
 * These files are not uniformly formatted. writing-letter.ts holds 10 items as
 * multi-line literals and 14 as ONE LINE EACH, with the whole payload inline; a
 * line-based "find `payload: {` then the closing line" pass found 10 of 24 and
 * would have silently skipped the rest. So the payload block is located by
 * scanning braces while tracking string state — ordinary strings, escapes and
 * template literals all consume braces that a naive depth count would trip on.
 *
 * The Nth payload is matched to the Nth item of the module's own ITEMS export
 * and the preceding `title:` must equal that item's title, so a mis-alignment
 * stops rather than writing one item's payload onto another.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { GEN_ITEMS } from "../seed/gen/index";

const WRITE = process.argv.includes("--write");
const die = (m: string): never => {
  console.error(`\n[sync-handwritten] 🔴 ${m}\n`);
  process.exit(1);
};

type Item = { taskType: string; profession?: string | null; title: string; payload?: unknown };
const key = (i: Item) => `${i.taskType}::${i.profession ?? "_"}::${i.title}`;
const genByKey = new Map((GEN_ITEMS as unknown as Item[]).map((i) => [key(i), i]));

const MODULES = ["listening", "reading", "writing-letter", "speaking-roleplay"] as const;

/** Key order must not decide equality: the hand-written literals and gen/ list the
 *  same fields in different orders, and a raw JSON.stringify comparison reported
 *  all 60 as divergent when only 56 had actually changed. */
const norm = (v: unknown): unknown =>
  Array.isArray(v) ? v.map(norm)
  : v && typeof v === "object"
    ? Object.fromEntries(Object.keys(v as object).sort().map((k) => [k, norm((v as Record<string, unknown>)[k])]))
    : v;
const same = (a: unknown, b: unknown) => JSON.stringify(norm(a)) === JSON.stringify(norm(b));

/** Index of the `}` closing the `{` at `open`, respecting string literals. */
function matchBrace(text: string, open: number): number {
  let depth = 0;
  let quote: string | null = null;
  for (let i = open; i < text.length; i++) {
    const c = text[i];
    if (quote) {
      if (c === "\\") i += 1;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") quote = c;
    else if (c === "{") depth += 1;
    else if (c === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/** The `title: "…"` immediately before `at`, so alignment can be proved. */
function titleBefore(text: string, at: number): string | null {
  const head = text.slice(0, at);
  const m = [...head.matchAll(/\btitle:\s*("(?:[^"\\]|\\.)*")/g)].pop();
  return m ? (JSON.parse(m[1]) as string) : null;
}

let rewritten = 0;
let agreed = 0;

async function main(): Promise<void> {
  for (const name of MODULES) {
    const path = `scripts/seed/${name}.ts`;
    const mod = (await import(`../seed/${name}`)) as { ITEMS: Item[] };
    const items = mod.ITEMS;
    let text = readFileSync(path, "utf8");

    // Right to left, so an earlier replacement cannot move a later offset.
    const opens: number[] = [];
    for (const m of text.matchAll(/\bpayload:\s*\{/g)) opens.push(m.index! + m[0].length - 1);
    if (opens.length !== items.length) die(`${path}: ${opens.length} payload block(s) for ${items.length} item(s)`);

    let changedHere = 0;
    for (let n = opens.length - 1; n >= 0; n--) {
      const item = items[n];
      const t = titleBefore(text, opens[n]);
      if (t !== item.title) die(`${path}: payload ${n + 1} follows title ${JSON.stringify(t)}, ITEMS[${n}] is ${JSON.stringify(item.title)}`);
      const gen = genByKey.get(key(item)) ?? die(`${path}: ${key(item)} is not in gen/`);
      if (same(item.payload, gen!.payload)) {
        agreed += 1;
        continue;
      }
      const close = matchBrace(text, opens[n]);
      if (close === -1) die(`${path}: the payload block for ${JSON.stringify(item.title)} never closes`);
      text = text.slice(0, opens[n]) + JSON.stringify(gen!.payload) + text.slice(close + 1);
      rewritten += 1;
      changedHere += 1;
    }
    if (WRITE && changedHere > 0) writeFileSync(path, text, "utf8");
    console.log(`[sync-handwritten] ${path.padEnd(38)} ${items.length} item(s) · ${changedHere} rewritten`);
  }

  console.log(
    `[sync-handwritten] ${rewritten} payload(s) ${WRITE ? "rewritten" : "would be rewritten"}, ${agreed} already agreed`,
  );
  if (!WRITE) console.log("[sync-handwritten] dry run — nothing written. Re-run with --write.");
}

void main();
