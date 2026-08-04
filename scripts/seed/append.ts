// Append-safe seeder. Inserts ONLY items not already in the database, so it is
// safe to run against a populated production DB and is fully idempotent.
//
// OetItem has no natural unique key (id is a cuid), so we dedupe on
// (taskType + profession + title) — unique per item across all seed sets, since
// Writing/Speaking items can share a title across professions.
//
//   npm run seed:append          insert missing items
//   npm run seed:append -- --dry preview only, write nothing
//
// Source of truth is gen/ — and ONLY gen/. When the seed source was converged to
// de-gamed prod, gen/*.ts was regenerated FROM the database, which already held
// the 60 items that the four hand-written task files describe. Since then those
// 60 exist twice in source, and concatenating both sets tripped the duplicate
// guard below: seed:prod threw before writing a single row.
//
// gen/ wins because it carries the option ORDER learners are actually served
// (post de-game); the hand-written files carry the pre-de-game order. Seeding
// from them would reintroduce an order that disagrees with production.
//
// The four files are still imported — not to be seeded, but to be CHECKED. If
// one ever gains an item gen/ does not have, that item would be silently dropped
// from every future seed, so we fail loudly instead.

import { PrismaClient } from "@prisma/client";
import { ITEMS as LISTENING } from "./listening";
import { ITEMS as READING } from "./reading";
import { ITEMS as WRITING } from "./writing-letter";
import { ITEMS as SPEAKING } from "./speaking-roleplay";
import { GEN_ITEMS } from "./gen";

const prisma = new PrismaClient();
const DRY = process.argv.includes("--dry");

const ALL = GEN_ITEMS;
const HANDWRITTEN = [...LISTENING, ...READING, ...WRITING, ...SPEAKING];

const key = (taskType: string, profession: string | null | undefined, title: string) =>
  `${taskType}::${profession ?? "_"}::${title}`;

async function main() {
  // Guard against an accidental duplicate (taskType,profession,title) in source.
  const sourceKeys = ALL.map((it) =>
    key(it.taskType as string, (it.profession as string | null) ?? null, it.title),
  );
  const dupes = sourceKeys.filter((k, i) => sourceKeys.indexOf(k) !== i);
  if (dupes.length > 0) {
    throw new Error(`Duplicate (taskType,profession,title) in seed source: ${[...new Set(dupes)].join(", ")}`);
  }

  // gen/ must remain a superset of the hand-written sets, or dropping them here
  // loses content silently.
  const sourceKeySet = new Set(sourceKeys);
  const orphans = HANDWRITTEN.map((it) =>
    key(it.taskType as string, (it.profession as string | null) ?? null, it.title),
  ).filter((k) => !sourceKeySet.has(k));
  if (orphans.length > 0) {
    throw new Error(
      `Hand-written seed item(s) missing from gen/ — they would never be seeded: ${[...new Set(orphans)].join(", ")}`,
    );
  }

  const existing = await prisma.oetItem.findMany({
    select: { taskType: true, profession: true, title: true },
  });
  const seen = new Set(existing.map((e) => key(e.taskType, e.profession, e.title)));

  const toInsert = ALL.filter(
    (it) => !seen.has(key(it.taskType as string, (it.profession as string | null) ?? null, it.title)),
  );

  const bySubTest = (rows: { subTest: string }[]) =>
    rows.reduce<Record<string, number>>((acc, r) => {
      acc[r.subTest] = (acc[r.subTest] ?? 0) + 1;
      return acc;
    }, {});

  console.log(`Source items: ${ALL.length} | already in DB: ${existing.length} | to insert: ${toInsert.length}`);
  const summary = bySubTest(toInsert as { subTest: string }[]);
  for (const t of Object.keys(summary).sort()) {
    console.log(`  + ${t}: ${summary[t]}`);
  }

  if (toInsert.length === 0) {
    console.log("Nothing to insert — database already has every source item.");
    return;
  }
  if (DRY) {
    console.log("\n--dry: no rows written. Re-run without --dry to insert.");
    return;
  }

  const res = await prisma.oetItem.createMany({ data: toInsert });
  console.log(`\nInserted ${res.count} new item(s). Skipped ${ALL.length - toInsert.length} already present.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
