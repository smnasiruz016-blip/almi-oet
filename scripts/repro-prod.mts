/**
 * REPRODUCE THE PRODUCTION RENDER, LOCALLY, AGAINST PRODUCTION DATA — read only.
 *
 * The owner hit `error.tsx` ("Something went wrong at our end", digest
 * 1956175996) on a phone minutes after the deploy of #47. A digest carries no
 * message, so this runs the server-side work the pages actually do, over the
 * real rows, and reports the first thing that throws.
 *
 * It writes nothing. Every call below is a read.
 */
import "./load-env.mjs";
import { PrismaClient } from "@prisma/client";
import { listPool } from "@/lib/oet/pool";
import { chainView, libraryHrefFor } from "@/lib/oet/chain";
import { OET_TASKS, taskBySlug } from "@/lib/oet/registry";
import {
  listeningPartAPayloadSchema,
  listeningMcqPayloadSchema,
} from "@/lib/oet/tasks/listening";
import {
  readingPartAPayloadSchema,
  readingMcqPayloadSchema,
} from "@/lib/oet/tasks/reading";
import { segmentsFor, audioKey, stripLeadingLabel } from "@/lib/oet/audio";

const prisma = new PrismaClient();
const problems: string[] = [];
const note = (s: string) => {
  problems.push(s);
  console.log(`  🔴 ${s}`);
};

try {
  // ── 1 · every payload through the schema the runtime parses it with ────────
  const items = await prisma.oetItem.findMany({
    select: { id: true, taskType: true, title: true, active: true, payload: true },
  });
  console.log(`1 · payload parse — ${items.length} row(s) from production`);
  const schemaFor: Record<string, { safeParse: (v: unknown) => { success: boolean; error?: unknown } }> = {
    LISTENING_PART_A: listeningPartAPayloadSchema,
    LISTENING_PART_B: listeningMcqPayloadSchema,
    LISTENING_PART_C: listeningMcqPayloadSchema,
    READING_PART_A: readingPartAPayloadSchema,
    READING_PART_B: readingMcqPayloadSchema,
    READING_PART_C: readingMcqPayloadSchema,
  };
  let parsed = 0;
  for (const it of items) {
    const sch = schemaFor[it.taskType];
    if (!sch) continue;
    parsed += 1;
    const r = sch.safeParse(it.payload);
    if (!r.success) note(`schema REJECTS [${it.taskType}] ${it.title}`);
  }
  console.log(`    ${parsed} objective payload(s) parsed`);

  // ── 2 · the audio code, over every Listening row ───────────────────────────
  console.log(`2 · audio code over every Listening row`);
  let audioed = 0;
  for (const it of items) {
    if (!it.taskType.startsWith("LISTENING")) continue;
    audioed += 1;
    try {
      const p = it.payload as { audioScript: string; speakers?: { role: string; voice: string }[] };
      stripLeadingLabel(p.audioScript);
      segmentsFor(p);
      audioKey(p);
    } catch (e) {
      note(`audio code THROWS on [${it.taskType}] ${it.title}: ${(e as Error).message}`);
    }
  }
  console.log(`    ${audioed} Listening row(s) through stripLeadingLabel + segmentsFor + audioKey`);

  // ── 3 · the list page's own query, for every live task, for every user ─────
  console.log(`3 · listPool() — the practice list page's data`);
  const users = await prisma.user.findMany({ select: { id: true, targetProfession: true } });
  const slugs = ["listening-part-a", "listening-part-b", "listening-part-c", "reading-part-a", "reading-part-b", "reading-part-c"];
  for (const u of users) {
    for (const slug of slugs) {
      const def = taskBySlug(slug);
      if (!def) {
        note(`taskBySlug("${slug}") returned nothing`);
        continue;
      }
      try {
        const pool = await listPool(def.taskType, null, u.id);
        if (pool.length === 0) note(`listPool(${def.taskType}) is EMPTY for a user`);
      } catch (e) {
        note(`listPool(${def.taskType}) THROWS: ${(e as Error).message}`);
      }
    }
  }
  console.log(`    ${users.length} user(s) x ${slugs.length} task(s)`);

  // ── 4 · the chain — what the results screen renders after a set ────────────
  console.log(`4 · chainView() — the results screen's next-exercise block`);
  for (const u of users) {
    for (const taskType of ["LISTENING_PART_A", "LISTENING_PART_B", "LISTENING_PART_C"] as const) {
      try {
        const v = await chainView({
          taskType,
          profession: null,
          userId: u.id,
          excludeIds: [],
          userProfession: u.targetProfession ?? null,
        });
        if (!v) note(`chainView(${taskType}) returned null for a user`);
        libraryHrefFor(taskType, null, u.targetProfession ?? null);
      } catch (e) {
        note(`chainView(${taskType}) THROWS: ${(e as Error).message}`);
      }
    }
  }

  // ── 5 · every existing attempt, through its handler's payload parse ────────
  console.log(`5 · every OetAttempt's item, through OET_TASKS`);
  const attempts = await prisma.oetAttempt.findMany({
    select: { id: true, taskType: true, itemId: true, status: true },
  });
  for (const a of attempts) {
    if (!OET_TASKS[a.taskType]) note(`OET_TASKS has no entry for ${a.taskType} (attempt ${a.id})`);
  }
  console.log(`    ${attempts.length} attempt(s)`);

  console.log(`\n=== NATIJA ===`);
  console.log(problems.length === 0 ? "kuch nahi toota — masla in raston mein nahi hai" : `${problems.length} masla mila`);
} finally {
  await prisma.$disconnect();
}
