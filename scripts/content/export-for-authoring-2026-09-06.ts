/**
 * EXPORT THE TWO THINGS THAT CANNOT BE AUTHORED WITHOUT THE REAL BANK.
 *
 *   npx tsx scripts/content/export-for-authoring-2026-09-06.ts C:\Projects\_handoffs
 *
 * Read-only. Writes two JSON files into the handoff directory and nothing else.
 *
 * ── WHY AN EXPORT AND NOT A DESCRIPTION ─────────────────────────────────────
 *
 * Both jobs are authoring jobs, and both were measured as ZERO against a stale
 * local snapshot — so anything written against that snapshot would have been
 * invented rather than authored. The bank in this repo is now the only correct
 * source, so it is what gets sent.
 *
 *   1 · READING PART C · the questions that carry no `kind` marker.
 *       This batch took Reading Part C from 21 items to 42 and turned every
 *       legacy three-option question into a four-option one, so the governed
 *       population doubled: 168 marked questions, 168 unmarked. gate:partc-kind
 *       fails on the unmarked half and must not be allowed to pass over it.
 *
 *   2 · READING PART A · the items now above the length law.
 *       The law is 885-1009 words and comes from OET's own published figures, so
 *       the content moves, not the ceiling. Each item is 3 to 49 words over.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { readFileSync } from "node:fs";
import { GEN_ITEMS } from "../seed/gen/index";
import { words } from "../gates/words";
// 🔴 The SAME counter the gate uses. Counting these items here with a second rule
// reported 0 over the law while gate:length reported 16.
import { textWords, type LengthItem } from "../gates/text-words";

const dir = process.argv[2];
if (!dir || dir.startsWith("--")) {
  console.error("[export] give the handoff directory as the first argument");
  process.exit(1);
}

type Option = { id?: string; text?: string };
type Question = { id?: string; stem?: string; answer?: string; kind?: unknown; options?: Option[] };
type Item = {
  slug?: string;
  title?: string;
  taskType: string;
  payload: { questions?: Question[]; texts?: { heading?: string; body?: string }[] };
};
const ITEMS = GEN_ITEMS as unknown as Item[];

// ── 1 · the Reading Part C questions with no kind marker ────────────────────
const markers = JSON.parse(
  readFileSync(join(dir, "AlmiOET_PartC_kind_markers_2026-09-06.json"), "utf8"),
) as Record<string, Record<string, string[]>>;

const partC = ITEMS.filter((i) => i.taskType === "READING_PART_C");
const unmarkedRows: unknown[] = [];
for (const item of partC) {
  for (const q of item.payload.questions ?? []) {
    if ((q.options ?? []).length !== 4) continue;
    if (markers[item.slug!]?.[q.id!]) continue;
    unmarkedRows.push({
      slug: item.slug,
      title: item.title,
      questionId: q.id,
      stem: q.stem,
      answer: q.answer,
      options: (q.options ?? []).map((o) => ({ id: o.id, text: o.text })),
    });
  }
}
const outA = join(dir, "AlmiOET_PartC_unmarked_for_kind_2026-09-06.json");
writeFileSync(
  outA,
  JSON.stringify(
    {
      note:
        "Reading Part C questions carrying no `kind` marker. Return markers in the same shape " +
        "as AlmiOET_PartC_kind_markers_2026-09-06.json: { slug: { questionId: [kind, ...] } }.",
      taxonomy: ["paragraph", "writer", "reference"],
      items: [...new Set(unmarkedRows.map((r) => (r as { slug: string }).slug))].length,
      questions: unmarkedRows.length,
      rows: unmarkedRows,
    },
    null,
    2,
  ) + "\n",
  "utf8",
);
console.log(
  `[export] ${outA}\n         ${[...new Set(unmarkedRows.map((r) => (r as { slug: string }).slug))].length} item(s) · ${unmarkedRows.length} question(s)`,
);

// ── 2 · the Reading Part A items above the length law ───────────────────────
const LAW = [885, 1009] as const;
const overRows: unknown[] = [];
for (const item of ITEMS.filter((i) => i.taskType === "READING_PART_A")) {
  const texts = item.payload.texts ?? [];
  const total = textWords(item as unknown as LengthItem);
  if (total <= LAW[1]) continue;
  overRows.push({
    slug: item.slug,
    title: item.title,
    words: total,
    over: total - LAW[1],
    law: { min: LAW[0], max: LAW[1] },
    texts: texts.map((t) => ({
      heading: t.heading,
      words: words(`${t.heading ?? ""} ${t.body ?? ""}`),
      body: t.body,
    })),
  });
}
const outB = join(dir, "AlmiOET_ReadingPartA_over_length_2026-09-06.json");
writeFileSync(
  outB,
  JSON.stringify(
    {
      note:
        "Reading Part A items above the length law. Trim each to inside 885-1009 words and " +
        "return the four text bodies. The law comes from OET's published figures and does not move. " +
        "Word count is textWords() from scripts/gates/length.ts: the four text bodies PLUS the twenty question stems, which is what OET's 885-976-1009 was measured over.",
      law: { min: LAW[0], max: LAW[1] },
      items: overRows.length,
      rows: overRows,
    },
    null,
    2,
  ) + "\n",
  "utf8",
);
console.log(`[export] ${outB}\n         ${overRows.length} item(s) over the law`);
