/**
 * STEP 3 — IS ANYTHING BOUND TO THE 360 LEGACY WRITING / SPEAKING ITEMS?
 *
 * Read-only. Retiring content has cost this project before: the Listening Part A
 * fragments cannot be retired because "OET Form 1/2/3" mocks are built from
 * their titles, and an accept-list overlay was left pointing at 150 variants of
 * items that had just been switched off. So the bindings are counted BEFORE any
 * retirement is proposed, not discovered after it.
 *
 * Three bindings are checked, and each is checked the way the product resolves
 * it, not by eye:
 *   1. MOCK forms — src/lib/oet/session.ts identifies a form by the title prefix
 *      /^(OET Form \d+) · /. Any legacy Writing/Speaking item carrying one is
 *      part of a mock and cannot be retired without breaking it.
 *   2. Learners' own work — an attempt pointing at an item. Retiring an item
 *      does not delete an attempt, but a learner's history should be looked at
 *      before it is hidden, and an IN_PROGRESS one matters more.
 *   3. The accept-list overlay — src/lib/oet/accept-lists.ts. Writing and
 *      Speaking are AI-graded and carry no overlay, which this asserts rather
 *      than assumes.
 */
import "../load-env.mjs";
import { PrismaClient } from "@prisma/client";
import { LISTENING_PART_A_ACCEPT, READING_PART_A_ACCEPT } from "../../src/lib/oet/accept-lists";

const prisma = new PrismaClient();
try {
  const items = await prisma.oetItem.findMany({
    where: { taskType: { in: ["WRITING_LETTER", "SPEAKING_ROLEPLAY"] } },
    select: { id: true, taskType: true, profession: true, title: true, form: true, active: true },
  });
  console.log(`${items.length} legacy Writing/Speaking item(s)\n`);

  // 1 · mock forms
  // The form is a COLUMN now, not a prefix parsed off the title.
  const inForm = items.filter((i) => i.form !== null);
  console.log(`1 · MOCK form ka hissa (OetItem.form set): ${inForm.length}`);
  for (const i of inForm) console.log(`     ${i.form}  ${i.taskType}  ${i.title}`);
  if (inForm.length === 0) console.log(`     koi nahi — mock in items se nahi banta`);

  // 2 · learners' attempts
  const attempts = await prisma.oetAttempt.groupBy({
    by: ["itemId", "status"],
    where: { itemId: { in: items.map((i) => i.id) } },
    _count: { _all: true },
  });
  const byItem = new Map<string, number>();
  for (const a of attempts) byItem.set(a.itemId, (byItem.get(a.itemId) ?? 0) + a._count._all);
  console.log(`\n2 · in items par learners ke attempts: ${[...byItem.values()].reduce((a, b) => a + b, 0)}`);
  for (const a of attempts) {
    const it = items.find((i) => i.id === a.itemId)!;
    console.log(`     ${a.status.padEnd(12)} ${a._count._all}x  ${it.taskType}  ${it.title.slice(0, 60)}`);
  }
  if (attempts.length === 0) console.log(`     koi nahi`);

  // 3 · accept-list overlay
  const overlayTitles = new Set([
    ...Object.keys(LISTENING_PART_A_ACCEPT),
    ...Object.keys(READING_PART_A_ACCEPT),
  ]);
  const overlapped = items.filter((i) => overlayTitles.has(i.title));
  console.log(`\n3 · accept-list overlay mein in items ka zikr: ${overlapped.length}`);
  for (const i of overlapped) console.log(`     ${i.title}`);
  if (overlapped.length === 0) {
    console.log(`     koi nahi — Writing/Speaking AI se grade hote hain, overlay nahi rakhte`);
  }

  // Floor, if all 360 were retired.
  const active = await prisma.oetItem.groupBy({
    by: ["taskType"],
    where: { active: true },
    _count: { _all: true },
  });
  console.log(`\n4 · farsh (15) agar ye 360 retire ho jayen aur 360 naye aa jayen:`);
  for (const r of active) {
    const k = String(r.taskType);
    if (k !== "WRITING_LETTER" && k !== "SPEAKING_ROLEPLAY") continue;
    const legacy = items.filter((i) => i.taskType === k && i.active).length;
    console.log(
      `     ${k.padEnd(18)} abhi ${r._count._all} active (${legacy} legacy) -> ` +
        `${r._count._all - legacy + 180} active  (180 naye, 15 per profession)`,
    );
  }
} finally {
  await prisma.$disconnect();
}
