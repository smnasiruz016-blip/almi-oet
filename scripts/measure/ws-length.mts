/**
 * STEP 2 — MEASURE THE LEGACY WRITING AND SPEAKING BANK. READ ONLY.
 *
 * `gate:length`'s LAW table has no row for WRITING_LETTER or SPEAKING_ROLEPLAY.
 * Those two task types — 360 of the 676 items in the bank, more than half of it —
 * are UNDER NO LENGTH GATE AT ALL, and never have been. That is a finding in its
 * own right and it is why this measurement exists before any law is written.
 *
 * 🔴 IT IMPORTS `words()` FROM THE GATE'S OWN MODULE. It does not re-implement
 * it. A second copy is free to drift from the rule it claims to share, and that
 * has already cost this project once — `scripts/e2e/seed-fixture.mts` split on
 * whitespace while the gate counted letters-or-digits, and two full-length
 * Reading Part C items were sorted into the LEGACY list on their punctuation.
 *
 * WHAT IS COUNTED, and why:
 *   WRITING_LETTER      payload.caseNotes — the case notes the candidate writes
 *                       from. Not the recipient line or the task instruction:
 *                       those are the wrapper, not the stimulus.
 *   SPEAKING_ROLEPLAY   setting + candidateRole + patientRole + candidateCard —
 *                       the whole of what the CANDIDATE is shown.
 *                       `patientConcern` is deliberately EXCLUDED: the session
 *                       page strips it before the payload reaches the client
 *                       (sanitizePayload), because drawing it out is the task.
 *                       Counting it would measure text the candidate never sees.
 *
 * The bounds it reports against are the ones the command states — Writing
 * 650-850, Speaking 280-330 — and nothing here enforces them. Enforcement waits
 * on the owner's ruling.
 *
 *   npx tsx scripts/measure/ws-length.mts            the live bank (DATABASE_URL)
 *   npx tsx scripts/measure/ws-length.mts --gen      scripts/seed/gen instead
 */
import "../load-env.mjs";
import { PrismaClient } from "@prisma/client";
import { words } from "../gates/words";
import { GEN_ITEMS } from "../seed/gen/index";

const FROM_GEN = process.argv.includes("--gen");
/** --json reads the two handoff files, so the SAME tokeniser and the SAME field
 *  choice measure the incoming items before they are seeded and the live ones
 *  after. Two scripts would be two definitions of "a word". */
const FROM_JSON = process.argv.includes("--json");
const JSON_PATHS: Record<string, string> = {
  WRITING_LETTER: "C:/Projects/_handoffs/AlmiOET_Writing_ALL_180_items.json",
  SPEAKING_ROLEPLAY: "C:/Projects/_handoffs/AlmiOET_Speaking_ALL_180_items.json",
};

const LAW = {
  WRITING_LETTER: [650, 850] as const,
  SPEAKING_ROLEPLAY: [280, 330] as const,
};

type Item = {
  id: string;
  taskType: string;
  profession: string | null;
  title: string;
  active: boolean;
  payload: Record<string, unknown>;
};

/** The text each task type's law is measured over. One place, so the report and
 *  any future gate row cannot disagree about what was counted. */
function governedText(it: Item): string {
  const p = it.payload;
  if (it.taskType === "WRITING_LETTER") return String(p.caseNotes ?? "");
  return [p.setting, p.candidateRole, p.patientRole, p.candidateCard]
    .map((x) => String(x ?? ""))
    .join(" ");
}

async function load(): Promise<Item[]> {
  if (FROM_JSON) {
    const { readFileSync } = await import("node:fs");
    const out: Item[] = [];
    for (const [taskType, path] of Object.entries(JSON_PATHS)) {
      const rows = Object.values(JSON.parse(readFileSync(path, "utf8")) as Record<string, Omit<Item, "id">>);
      rows.forEach((r, n) => out.push({ ...r, taskType, id: `json#${taskType}#${n}` }));
    }
    return out;
  }
  if (FROM_GEN) {
    return (GEN_ITEMS as unknown as Omit<Item, "id">[])
      .filter((i) => i.taskType in LAW)
      .map((i, n) => ({ ...i, id: `gen#${n}` }));
  }
  const prisma = new PrismaClient();
  try {
    const rows = await prisma.oetItem.findMany({
      where: { taskType: { in: ["WRITING_LETTER", "SPEAKING_ROLEPLAY"] } },
      select: { id: true, taskType: true, profession: true, title: true, active: true, payload: true },
      orderBy: [{ taskType: "asc" }, { profession: "asc" }, { title: "asc" }],
    });
    return rows as unknown as Item[];
  } finally {
    await prisma.$disconnect();
  }
}

const items = await load();
// A measurement over nothing is the failure shape this project keeps meeting.
if (items.length === 0) {
  console.error("[measure] koi WRITING/SPEAKING item nahi mila — naap se inkar");
  process.exit(1);
}
console.log(`source: ${FROM_JSON ? "_handoffs JSON" : FROM_GEN ? "scripts/seed/gen" : "database (DATABASE_URL)"} · ${items.length} item(s)\n`);

for (const [taskType, [min, max]] of Object.entries(LAW)) {
  const set = items.filter((i) => i.taskType === taskType);
  const measured = set
    .map((i) => ({ it: i, n: words(governedText(i)) }))
    .sort((a, b) => a.n - b.n);
  const inside = measured.filter((m) => m.n >= min && m.n <= max);
  const below = measured.filter((m) => m.n < min);
  const above = measured.filter((m) => m.n > max);
  const pct = (n: number) => `${n}/${set.length} = ${Math.round((100 * n) / set.length)}%`;

  console.log(`${taskType.padEnd(18)}: kul ${set.length} items · ${min}-${max} ke andar: ${pct(inside.length)}`);
  console.log(`${"".padEnd(18)}  neeche: ${pct(below.length)} · upar: ${pct(above.length)}`);
  if (measured.length > 0) {
    const lo = measured[0];
    const hi = measured[measured.length - 1];
    console.log(`${"".padEnd(18)}  sab se chhota: ${lo.n} lafz (${lo.it.id}) "${lo.it.title.slice(0, 58)}"`);
    console.log(`${"".padEnd(18)}  sab se bara:   ${hi.n} lafz (${hi.it.id}) "${hi.it.title.slice(0, 58)}"`);
  }

  const out = measured.filter((m) => m.n < min || m.n > max);
  if (out.length > 0) {
    console.log(`\n  qanoon se bahar, poori fehrist (${out.length}):`);
    for (const m of out) {
      console.log(
        `    ${String(m.n).padStart(4)} lafz  ${(m.it.profession ?? "-").padEnd(21)} ${m.it.id}  ${m.it.title}`,
      );
    }
  }
  console.log();
}
