/**
 * MEASURE THE HARD WRAPS — and, before anything is rewritten, measure the one
 * thing that can go wrong while fixing them.
 *
 * The 360 new Writing and Speaking items were authored in markdown wrapped by
 * hand at ~100 characters. Those line breaks travelled into the payload, and the
 * composer renders `whitespace-pre-wrap`, so every wrap became a visible break
 * mid-sentence. The owner saw it on a phone.
 *
 * 🔴 THE DANGER IN THE FIX, WHICH IS WHY THIS RUNS FIRST. A previous de-wrap on
 * this project merged two bullet lists into one paragraph: joining every single
 * newline is only safe if no line is a LIST ITEM. So this counts bullets before
 * it counts wraps, and the fix protects them.
 *
 * Read only. It writes nothing and changes nothing.
 *
 *   npx tsx scripts/measure/hard-wraps.mts          the live bank
 *   npx tsx scripts/measure/hard-wraps.mts --gen    scripts/seed/gen instead
 */
import "../load-env.mjs";
import { PrismaClient } from "@prisma/client";
import { GEN_ITEMS } from "../seed/gen/index";
import { words } from "../gates/words";
// 🔴 THE SAME FUNCTION THE FIX USES. Until this import the measurement had its
// own, looser idea of a wrap and reported 7,245 remaining after the fix had
// removed every one it was asked to. Two definitions of the same word is how a
// report and a repair end up disagreeing about whether the job is done.
import { isWrapBreak } from "../wrap-rule";

const FROM_GEN = process.argv.includes("--gen");

/** The field each task type carries its authored prose in. */
const FIELD = { WRITING_LETTER: "caseNotes", SPEAKING_ROLEPLAY: "candidateCard" } as const;

/** A line that is a list item. Its preceding newline is STRUCTURE and must never
 *  be joined away. Matches "- ", "• ", "* ", "1. ", "1) ". */
export const isListLine = (l: string): boolean => /^\s*([-•*]\s|\d+[.)]\s)/.test(l);

type Row = { id: string; taskType: string; title: string; active: boolean; payload: Record<string, unknown> };

async function load(): Promise<Row[]> {
  if (FROM_GEN) {
    return (GEN_ITEMS as unknown as Omit<Row, "id">[])
      .filter((i) => i.taskType in FIELD)
      .map((i, n) => ({ ...i, id: `gen#${n}` }));
  }
  const prisma = new PrismaClient();
  try {
    return (await prisma.oetItem.findMany({
      where: { taskType: { in: ["WRITING_LETTER", "SPEAKING_ROLEPLAY"] } },
      select: { id: true, taskType: true, title: true, active: true, payload: true },
      orderBy: [{ taskType: "asc" }, { title: "asc" }],
    })) as unknown as Row[];
  } finally {
    await prisma.$disconnect();
  }
}

const rows = await load();
if (rows.length === 0) {
  console.error("[measure] koi row nahi mila — naap se inkar");
  process.exit(1);
}
console.log(`source: ${FROM_GEN ? "scripts/seed/gen" : "database"} · ${rows.length} row(s)\n`);

for (const [taskType, field] of Object.entries(FIELD)) {
  const set = rows.filter((r) => r.taskType === taskType);
  const active = set.filter((r) => r.active);
  // Split by active, because only an ACTIVE item is on a learner's screen — and
  // because the handoff's figures were measured over the 180 new items while
  // this reads all 360 rows in the bank. Reporting one denominator against the
  // other is how two correct measurements look like a disagreement.
  const activeAffected = new Set<string>();
  const retiredAffected = new Set<string>();
  let activeWraps = 0;
  let retiredWraps = 0;
  for (const r of set) {
    const t = String(r.payload[field] ?? "").replace(/\r\n/g, "\n");
    const ls = t.split("\n");
    let n = 0;
    for (let i = 0; i < ls.length - 1; i++) {
      if (!isWrapBreak(ls[i], ls[i + 1])) continue;
      n += 1;
    }
    if (n > 0) {
      if (r.active) {
        activeAffected.add(r.id);
        activeWraps += n;
      } else {
        retiredAffected.add(r.id);
        retiredWraps += n;
      }
    }
  }
  let lines = 0;
  let midSentence = 0;
  let paraBreaks = 0;
  let listLines = 0;
  let joinBeforeList = 0;
  const affected = new Set<string>();
  let maxLen = 0;
  const lens: number[] = [];

  for (const r of set) {
    const text = String(r.payload[field] ?? "").replace(/\r\n/g, "\n");
    const ls = text.split("\n");
    lines += ls.length;
    for (let i = 0; i < ls.length - 1; i++) {
      const cur = ls[i];
      const next = ls[i + 1];
      if (cur.trim() === "" || next.trim() === "") {
        paraBreaks += 1;
        continue;
      }
      if (isListLine(next)) {
        // A single newline before a list item: joining it would swallow the
        // bullet. Counted separately — this is the trap.
        joinBeforeList += 1;
        continue;
      }
      if (!isWrapBreak(cur, next)) continue;
      midSentence += 1;
      affected.add(r.id);
    }
    for (const l of ls) {
      if (isListLine(l)) listLines += 1;
      if (l.trim() !== "") {
        lens.push(l.length);
        maxLen = Math.max(maxLen, l.length);
      }
    }
  }
  lens.sort((a, b) => a - b);
  const median = lens.length ? lens[Math.floor(lens.length / 2)] : 0;

  console.log(`${taskType} (payload.${field}) — ${set.length} rows, ${active.length} active`);
  console.log(`  lines                        : ${lines}`);
  console.log(`  🔴 mid-sentence hard wrap    : ${midSentence}`);
  console.log(`  paragraph breaks (blank line): ${paraBreaks}`);
  console.log(`  list lines ("- ", "1. " …)   : ${listLines}`);
  console.log(`  ⚠️ newline before a list item : ${joinBeforeList}  <- joining these would eat the bullet`);
  console.log(`  affected rows                : ${affected.size}/${set.length} = ${Math.round((100 * affected.size) / set.length)}%`);
  console.log(`  ── active (screen par) : ${activeAffected.size}/${active.length} rows · ${activeWraps} wraps`);
  console.log(`  ── retired (band)      : ${retiredAffected.size}/${set.length - active.length} rows · ${retiredWraps} wraps`);
  console.log(`  line length: max ${maxLen} · median ${median}`);
  console.log(`  words (total, this field)    : ${set.reduce((n, r) => n + words(String(r.payload[field] ?? "")), 0)}`);
  console.log();
}
