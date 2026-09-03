/**
 * measure:listening-json — MEASURE THE THREE HANDOFF FILES BEFORE ANYTHING READS THEM.
 *
 * Step 1 of the Listening command of 3 September 2026. It changes nothing; it
 * prints the numbers the handoff claims beside the numbers this machine gets,
 * so a disagreement stops the work instead of travelling into gen/.
 *
 * 🔴 THE TOKENISER IS THE ONE `scripts/gates/length.ts` RULED ON 3 SEPTEMBER 2026:
 *     a token counts as a word only if it contains at least one letter or digit.
 * It is repeated here rather than imported because length.ts is a gate that runs
 * on import; the real control on these counts is gate:length itself once the
 * items are in gen/ — this script exists to stop them BEFORE that.
 *
 * The spoken-only counts come from `segmentsFor` in src/lib/oet/audio.ts — the
 * function the renderer actually speaks from — so "what is heard" is measured by
 * the code that produces it, not by a second stripper written here.
 */
import { readFileSync } from "node:fs";
import { segmentsFor, splitDialogue, type DialogueSpeaker } from "../../src/lib/oet/audio";
import { GEN_ITEMS } from "../seed/gen/index";

const A_PATH = "C:/Projects/_handoffs/AlmiOET_Listening_PartA_13_items.json";
const B_PATH = "C:/Projects/_handoffs/AlmiOET_Listening_PartB_90_items.json";
const C_PATH = "C:/Projects/_handoffs/AlmiOET_Listening_PartC_15_items.json";

const words = (s: string | undefined): number =>
  s ? (s.match(/[^\s]+/g) ?? []).filter((t) => /[A-Za-z0-9]/.test(t)).length : 0;

type Gap = { id: string; label: string; answer: string; variants?: string[] };
type Opt = { id: string; text: string };
type Q = { id: string; stem: string; options: Opt[]; answer: string };
type Item = {
  taskType: string;
  title: string;
  payload: { speakers: DialogueSpeaker[]; gaps?: Gap[]; questions?: Q[]; audioScript: string };
};

const load = (p: string): Item[] => Object.values(JSON.parse(readFileSync(p, "utf8")) as Record<string, Item>);

const A = load(A_PATH);
const B = load(B_PATH);
const C = load(C_PATH);

// "read nothing and pass" is the failure shape this project keeps meeting.
if (A.length === 0 || B.length === 0 || C.length === 0) {
  console.error("[measure] read NOTHING from one of the files — refusing to report");
  process.exit(1);
}

/**
 * What a candidate actually HEARS, through the renderer's own code.
 *
 * 🔴 `segmentsFor`, not `splitDialogue`. `splitDialogue` returns [] for a
 * SINGLE-SPEAKER script, and the first version of this file joined that empty
 * array to "" and reported a minimum of 0 spoken words for Part B. Three Part B
 * extracts and all fifteen Part C recordings are monologues. Measuring through
 * `segmentsFor` measures the fallback path too — which is how the
 * label-read-aloud defect became visible instead of hiding behind a 0.
 */
const spoken = (it: Item): string => segmentsFor(it.payload).map((s) => s.text).join(" ");

/** A leading label the OLD fallback would have spoken out loud: the script does
 *  not split into two or more turns, and it opens with "Role:". Measured from
 *  the raw script, so the number does not move when the renderer is fixed. */
const wouldHaveSpokenLabel = (it: Item): string | null => {
  if (splitDialogue(it.payload.audioScript, it.payload.speakers).length >= 2) return null;
  const m = it.payload.audioScript.match(/^\s*([^\s:][^:\n]{0,39}):\s/);
  const label = m?.[1];
  if (!label || label.trim().split(/\s+/).length > 4 || /[.!?,;]/.test(label)) return null;
  return label;
};

/** A leading label the renderer WILL speak, as the code stands now. */
const stillSpeaksLabel = (it: Item): string | null => {
  for (const seg of segmentsFor(it.payload)) {
    const label = seg.text.match(/^\s*([^\s:][^:\n]{0,39}):\s/)?.[1];
    if (label && label.trim().split(/\s+/).length <= 4 && !/[.!?,;]/.test(label)) return label;
  }
  return null;
};

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\s+/g, " ")
    .trim();

const range = (ns: number[]) => `${Math.min(...ns)} - ${Math.max(...ns)}`;
const mismatches: string[] = [];
let rows: string[] = [];
const row = (label: string, claim: string, mine: string) => {
  const ok = claim === mine;
  if (!ok) mismatches.push(`${label}: handoff says ${claim}, measured ${mine}`);
  rows.push(`${ok ? "  " : "X "}${label.padEnd(44)} | ${claim.padEnd(22)} | ${mine}`);
};
const head = (title: string) => {
  console.log(`\n=== ${title} ===`);
  console.log(`  ${"naap".padEnd(44)} | ${"handoff".padEnd(22)} | mera naap`);
  rows = [];
};
const flush = () => rows.forEach((r) => console.log(r));

/** D1 (the key is the uniquely longest option) and the key spread, over a set of
 *  questions — the same two rules gate:distractor applies. */
const mcqStats = (qs: Q[]) => {
  let d1 = 0;
  const keys = new Map<string, number>();
  let optsInRange = 0;
  let optCount = 0;
  for (const q of qs) {
    const lens = q.options.map((o) => words(o.text));
    optCount += lens.length;
    optsInRange += lens.filter((n) => n >= 1 && n <= 17).length;
    const max = Math.max(...lens);
    const ki = q.options.findIndex((o) => o.id === q.answer);
    if (lens.filter((n) => n === max).length === 1 && ki >= 0 && lens[ki] === max) d1 += 1;
    keys.set(q.answer, (keys.get(q.answer) ?? 0) + 1);
  }
  const spread = [...keys.entries()]
    .sort()
    .map(([l, n]) => `${l} ${Math.round((100 * n) / qs.length)}%`)
    .join(" · ");
  return { d1, spread, optsInRange, optCount, keys };
};

// The titles already in the bank, for the collision check. GEN_ITEMS now carries
// the new Part A and Part B modules, which is why Part C is measured against a
// larger number than Part A and Part B were.
const bankTitles = new Set((GEN_ITEMS as { title: string }[]).map((i) => i.title));
const newATitles = new Set(A.map((i) => i.title));
const newBTitles = new Set(B.map((i) => i.title));
/** Titles that were in the bank BEFORE this command's own modules were wired in. */
const priorTitles = new Set([...bankTitles].filter((t) => !newATitles.has(t) && !newBTitles.has(t)));

// ── PART A ──────────────────────────────────────────────────────────────────
const aWords = A.map((i) => words(i.payload.audioScript));
head(`PART A · ${A.length} items · pehle se bank mein ${priorTitles.size} titles`);
row("audioScript lafz (labels ke saath)", "583 - 599", range(aWords));
row("andar 550-600", "13", `${aWords.filter((n) => n >= 550 && n <= 600).length}`);
row("gaps = 12", "13", `${A.filter((i) => (i.payload.gaps ?? []).length === 12).length}`);
row(
  "har jawab 1-3 lafz",
  "13",
  `${A.filter((i) => (i.payload.gaps ?? []).every((g) => words(g.answer) >= 1 && words(g.answer) <= 3)).length}`,
);
row(
  "jawab/variant script mein maujood",
  "13",
  `${
    A.filter((i) => {
      const hay = norm(i.payload.audioScript);
      return (i.payload.gaps ?? []).every((g) =>
        [g.answer, ...(g.variants ?? [])].some((v) => hay.includes(norm(v))),
      );
    }).length
  }`,
);
row("titles unique", "13", `${new Set(A.map((i) => i.title)).size}`);
row("bank ke titles se takrao", "0", `${A.filter((i) => priorTitles.has(i.title)).length}`);
row(
  "speakers ki voices alag",
  "13",
  `${A.filter((i) => i.payload.speakers.length >= 2 && new Set(i.payload.speakers.map((s) => s.voice)).size === i.payload.speakers.length).length}`,
);
row("sirf boli hui baat (lafz)", "554 - 570", range(A.map((i) => words(spoken(i)))));
flush();

// ── PART B ──────────────────────────────────────────────────────────────────
const bWords = B.map((i) => words(i.payload.audioScript));
const bQ = B.flatMap((i) => i.payload.questions ?? []);
const bStat = mcqStats(bQ);
head(`PART B · ${B.length} items · ${bQ.length} sawal · ${bStat.optCount} option`);
row("audioScript lafz (labels ke saath)", "145 - 164", range(bWords));
row("andar 140-165", "90", `${bWords.filter((n) => n >= 140 && n <= 165).length}`);
row(
  "ek sawal, teen option (a b c)",
  "90",
  `${B.filter((i) => {
    const qs = i.payload.questions ?? [];
    return qs.length === 1 && qs[0].options.map((o) => o.id).join("") === "abc";
  }).length}`,
);
row("option ki lambai 1-17 lafz", "270", `${bStat.optsInRange}`);
row("D1 jawab sab se lamba option", "0", `${bStat.d1}`);
row("key spread (D3)", "a 33% · b 33% · c 33%", bStat.spread);
row("titles unique", "90", `${new Set(B.map((i) => i.title)).size}`);
row("bank ke titles se takrao", "0", `${B.filter((i) => priorTitles.has(i.title)).length}`);
row("sirf boli hui baat (lafz)", "140 - 159", range(B.map((i) => words(spoken(i)))));
flush();

// ── PART C ──────────────────────────────────────────────────────────────────
const cWords = C.map((i) => words(i.payload.audioScript));
const cQ = C.flatMap((i) => i.payload.questions ?? []);
const cStat = mcqStats(cQ);
head(`PART C · ${C.length} items · ${cQ.length} sawal · ${cStat.optCount} option · bank mein ${bankTitles.size} titles`);
row("audioScript lafz (labels ke saath)", "782 - 847", range(cWords));
row("andar 780-880", "15", `${cWords.filter((n) => n >= 780 && n <= 880).length}`);
row("sawal per recording = 6", "15", `${C.filter((i) => (i.payload.questions ?? []).length === 6).length}`);
row(
  "har sawal teen option (a b c)",
  "90",
  `${cQ.filter((q) => q.options.map((o) => o.id).join("") === "abc").length}`,
);
row("option ki lambai 1-17 lafz", "270", `${cStat.optsInRange}`);
row("D1 jawab sab se lamba option", "0", `${cStat.d1}`);
/**
 * 🔴 THE ONE NUMBER THAT DID NOT MATCH, AND WHY IT IS NOT A DISAGREEMENT.
 *
 * The handoff records Part C's key spread as "a 35% · b 32% · c 32%"; this
 * machine prints "a 36%". The COUNTS are identical — a 32, b 29, c 29 of 90 —
 * and 32/90 is 35.56%, which the handoff floors to 35 and `gate:distractor`
 * (Math.round) raises to 36. Two rounding conventions over one measurement.
 *
 * So the row below compares the COUNTS, which have no convention, and the
 * percentage is printed beside them for the reader. Nothing here changes a
 * verdict: the D3 cap is 45% and 32/90 clears it under either convention.
 */
row(
  "key spread (D3), sirf naye — ginti",
  "a 32 · b 29 · c 29",
  [...cStat.keys.entries()].sort().map(([l, n]) => `${l} ${n}`).join(" · "),
);
console.log(`  ${"".padEnd(44)} |                        | = ${cStat.spread} (handoff: a 35%, 32/90 = 35.56%)`);
row("titles unique", "15", `${new Set(C.map((i) => i.title)).size}`);
row("bank ke titles se takrao", "0", `${C.filter((i) => bankTitles.has(i.title)).length}`);
row("sirf boli hui baat (lafz)", "781 - 831", range(C.map((i) => words(spoken(i)))));
flush();

// ── D3 · where each task type's key spread lands once these join the bank ────
console.log(`\n=== D3 · LEGACY_SKEW ka ratchet ===`);
for (const [taskType, incoming] of [
  ["LISTENING_PART_B", bQ],
  ["LISTENING_PART_C", cQ],
] as const) {
  const liveQ = (GEN_ITEMS as { taskType: string; title: string; payload: { questions?: Q[] } }[])
    .filter((i) => i.taskType === taskType && !newBTitles.has(i.title))
    .flatMap((i) => i.payload.questions ?? []);
  const after = new Map<string, number>();
  for (const q of [...liveQ, ...incoming]) after.set(q.answer, (after.get(q.answer) ?? 0) + 1);
  const total = liveQ.length + incoming.length;
  const top = [...after.entries()].sort((x, y) => y[1] - x[1])[0];
  console.log(
    `  ${taskType}: pehle ${liveQ.length} sawal, naye ${incoming.length}, kul ${total} — ` +
      `sab se ooncha "${top[0]}" ${top[1]}/${total} = ${Math.round((100 * top[1]) / total)}%`,
  );
}

// ── FINDING · a role label that would be spoken out loud ────────────────────
const all = [...A, ...B, ...C];
const wouldHave = all.filter((i) => wouldHaveSpokenLabel(i));
const still = all.filter((i) => stillSpeaksLabel(i));
console.log(`\n=== NUQS · label jo awaz mein bola jata ===`);
console.log(`  naye ${all.length} items mein se ${wouldHave.length} ka label PURANE fallback par bola jata:`);
for (const i of wouldHave) console.log(`  - "${wouldHaveSpokenLabel(i)}:"  ${i.title}`);
console.log(`  fix ke baad ab bhi bolne wale: ${still.length}`);

console.log(`\n=== NATIJA ===`);
if (mismatches.length > 0) {
  console.error(`${mismatches.length} number mel nahi khaya:`);
  for (const m of mismatches) console.error(`  X ${m}`);
  process.exit(1);
}
console.log("har number handoff ke naap se mel khata hai.");
