/**
 * DE-GAME the live MCQ bank — grade-safe option-position shuffle.
 *
 * WHY: Listening Part B keyed 13 of 15 answers to the FIRST option (87%). A candidate
 * who always picks A scores 87% on that part without listening. Reading Part B (80% on
 * B) and Part C (70%) cluster the same way.
 *
 * METHOD (the TOEFL grade-safe transform): within each question, only the ORDER of the
 * options array changes. Option TEXTS are untouched, option IDs are untouched, and the
 * `answer` field — which stores an option ID, not an index — is untouched. Grading
 * resolves the key by ID (see markObjective, `exact: true`), so reordering cannot change
 * whether any past or future answer is correct. What changes is only WHERE the correct
 * option appears on screen.
 *
 * Targets are assigned by a round-robin cursor per task type, so correct answers land
 * across positions evenly rather than randomly — random would leave clusters at this
 * sample size.
 *
 *   npx tsx --env-file=.env.local scripts/degame-mcq.ts             # dry-run, writes NOTHING
 *   npx tsx --env-file=.env.local scripts/degame-mcq.ts --commit    # one txn, snapshot first
 *   npx tsx --env-file=.env.local scripts/degame-mcq.ts --rollback <snapshot.json>
 */
import * as fs from "node:fs";
import { prisma } from "../src/lib/prisma";

const COMMIT = process.argv.includes("--commit");
const ROLLBACK = process.argv.includes("--rollback") ? process.argv[process.argv.indexOf("--rollback") + 1] : null;

const MCQ = ["LISTENING_PART_B", "LISTENING_PART_C", "READING_PART_A", "READING_PART_B", "READING_PART_C"];

type Opt = { id: string; text?: string };
type Q = { id: string; stem?: string; answer?: string; options?: Opt[] };
type Payload = { questions?: Q[]; [k: string]: unknown };

function distribution(rows: { taskType: string; payload: Payload }[], taskType: string) {
  const dist: Record<number, number> = {};
  for (const r of rows) {
    if (r.taskType !== taskType) continue;
    for (const q of r.payload.questions ?? []) {
      if (!q.options || !q.answer) continue;
      const i = q.options.findIndex((o) => o.id === q.answer);
      if (i >= 0) dist[i] = (dist[i] ?? 0) + 1;
    }
  }
  return dist;
}
const summarise = (d: Record<number, number>) => {
  const counts = Object.values(d);
  const n = counts.reduce((a, b) => a + b, 0);
  const top = counts.length ? Math.max(...counts) : 0;
  const share = n ? top / n : 0;
  const verdict = n < 3 ? "n<3" : share >= 0.8 ? "GAMEABLE (extreme)" : n >= 6 && share > 0.6 ? "gameable (cluster)" : "ok";
  return `n=${String(n).padStart(3)} dist=${JSON.stringify(d)} top=${Math.round(share * 100)}%  ${verdict}`;
};

async function main() {
  if (ROLLBACK) {
    const snap: { id: string; payload: unknown }[] = JSON.parse(fs.readFileSync(ROLLBACK, "utf8"));
    await prisma.$transaction(snap.map((s) => prisma.oetItem.update({ where: { id: s.id }, data: { payload: s.payload as never } })));
    console.log(`ROLLED BACK — ${snap.length} items restored.`);
    await prisma.$disconnect();
    return;
  }

  const rows = (await prisma.oetItem.findMany({
    where: { taskType: { in: MCQ as never } },
    select: { id: true, taskType: true, title: true, payload: true },
    orderBy: [{ taskType: "asc" }, { title: "asc" }],
  })) as unknown as { id: string; taskType: string; title: string; payload: Payload }[];

  console.log(`\n== BEFORE ==`);
  for (const t of MCQ) console.log(`  ${t.padEnd(20)} ${summarise(distribution(rows, t))}`);

  const cursor = new Map<string, number>();
  const updates: { id: string; payload: Payload }[] = [];

  for (const r of rows) {
    const qs = r.payload.questions ?? [];
    let changed = false;
    const next = qs.map((q) => {
      if (!q.options || !q.answer || q.options.length < 2) return q;
      const keyIdx = q.options.findIndex((o) => o.id === q.answer);
      if (keyIdx < 0) return q; // key resolves to nothing — G4's problem, never "fixed" silently here
      const c = (cursor.get(r.taskType) ?? -1) + 1;
      cursor.set(r.taskType, c);
      const target = c % q.options.length;
      const rest = q.options.filter((_, i) => i !== keyIdx);
      const options = [...rest.slice(0, target), q.options[keyIdx], ...rest.slice(target)];
      if (options.map((o) => o.id).join("|") !== q.options.map((o) => o.id).join("|")) changed = true;
      return { ...q, options };
    });

    // Invariants — a reorder that breaks any of these is a bug, not a shuffle.
    for (let i = 0; i < qs.length; i++) {
      const a = qs[i], b = next[i];
      if (!a.options || !b.options) continue;
      const sameSet = [...a.options.map((o) => o.id)].sort().join("|") === [...b.options.map((o) => o.id)].sort().join("|");
      if (!sameSet) throw new Error(`option SET changed for ${r.id} / ${a.id}`);
      if (a.answer !== b.answer) throw new Error(`answer id changed for ${r.id} / ${a.id}`);
      if (b.answer && !b.options.some((o) => o.id === b.answer)) throw new Error(`answer no longer resolves for ${r.id} / ${a.id}`);
      const textOf = (o: Opt[]) => o.map((x) => `${x.id}=${x.text ?? ""}`).sort().join("§");
      if (textOf(a.options) !== textOf(b.options)) throw new Error(`option TEXT changed for ${r.id} / ${a.id}`);
    }

    if (changed) updates.push({ id: r.id, payload: { ...r.payload, questions: next } });
  }

  const after = rows.map((r) => {
    const u = updates.find((x) => x.id === r.id);
    return { taskType: r.taskType, payload: (u?.payload ?? r.payload) as Payload };
  });
  console.log(`\n== AFTER (predicted) ==`);
  for (const t of MCQ) console.log(`  ${t.padEnd(20)} ${summarise(distribution(after, t))}`);
  console.log(`\n${updates.length} of ${rows.length} items would be reordered (option order only).`);

  if (!COMMIT) {
    console.log("\nDRY-RUN — no writes. Re-run with --commit to apply.");
    await prisma.$disconnect();
    return;
  }

  const snapPath = `scripts/degame-rollback-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  const snap = rows.filter((r) => updates.some((u) => u.id === r.id)).map((r) => ({ id: r.id, payload: r.payload }));
  fs.writeFileSync(snapPath, JSON.stringify(snap, null, 2));
  console.log(`\nRollback snapshot: ${snapPath}  (restore: --rollback ${snapPath})`);

  await prisma.$transaction(updates.map((u) => prisma.oetItem.update({ where: { id: u.id }, data: { payload: u.payload as never } })));
  console.log(`COMMITTED — ${updates.length} items reordered. Texts, ids and answer keys unchanged.`);
  await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
