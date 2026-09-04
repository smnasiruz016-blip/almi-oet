/**
 * gate:title-collision — A TITLE THAT ALREADY EXISTS MAKES A NEW ITEM VANISH.
 *
 * ── WHY THIS GATE EXISTS ────────────────────────────────────────────────────
 *
 * `scripts/seed/append.ts` is INSERT-ONLY and dedupes on
 * (taskType, profession, title). It reads the titles already in the database,
 * and drops from the insert list anything whose key it already has:
 *
 *     const toInsert = ALL.filter((it) => !seen.has(key(...)))
 *
 * That is correct, and it is what makes re-running the seed safe. But it means a
 * newly authored item whose title happens to match a row ALREADY THERE — an
 * active row, or a RETIRED one, since retirement does not remove the row — is
 * simply not inserted. No error. No warning. The counts in the summary line are
 * the only trace, and they are easy to read as "already done".
 *
 * 🔴 THIS HAS ALREADY HAPPENED ONCE, AND WAS CAUGHT BY LUCK. Reading Part A set
 * 16 was first authored on "Anaphylaxis" — which is set 1's topic, and live. Set
 * 1's source file header carried no "— Topic:" line, so it did not appear in the
 * inventory the author was reading, and the collision was invisible until the
 * whole set had been written. Had it gone to seed, the seed would have reported
 * success and shipped fourteen items instead of fifteen.
 *
 * The lesson written down at the time: a title clash is not checked by eye. It
 * is checked by a gate.
 *
 * ── WHAT IT CHECKS ──────────────────────────────────────────────────────────
 *
 *   1. SOURCE — any (taskType, profession, title) appearing twice in GEN_ITEMS.
 *      append.ts throws on this too, but only once the seed is already running.
 *   2. DATABASE — any title in a batch DECLARED NEW below that is already on a
 *      row in the DB, active or retired.
 *
 * ── 🔴 WHY "DECLARED NEW", AND NOT A PAYLOAD COMPARISON ─────────────────────
 *
 * The obvious rule is "same title, different content = collision". It was
 * written that way first, and it reported 555 collisions out of 1066 items.
 * Every one was noise: the seed source and production differ harmlessly in JSON
 * KEY ORDER and in OPTION ORDER (the de-game shuffle was applied in prod and
 * exported back), so `JSON.stringify` disagrees on rows that are identical in
 * meaning. This drift is already known and recorded.
 *
 * A gate that cries 555 times is a gate somebody switches off, so it does not
 * get to guess. The DB cannot distinguish "already seeded last month" from
 * "newly authored and about to vanish" — only the author knows which, so the
 * author states it. Each new module is registered in NEW_BATCHES with the date
 * it was authored, exactly as each new module is registered in seed/gen/index.ts.
 *
 * The cost is that a batch nobody registers is not checked. That is a real hole
 * and it is named here rather than hidden: it is bounded by one line per batch,
 * where the alternative was a check nobody would leave switched on.
 *
 * ── ON THE DATABASE HALF WHEN THERE IS NO DATABASE ──────────────────────────
 *
 * With no DATABASE_URL this gate runs its source half and says, loudly, that the
 * database half DID NOT RUN. It does not pretend to a pass it did not earn, and
 * it does not fail a CI job that legitimately has no database — a gate that goes
 * red for the wrong reason is a gate somebody switches off. The database half is
 * the one that matters immediately before a seed, and that is where it runs.
 */
import "../load-env.mjs";
import { GEN_ITEMS } from "../seed/gen/index";
import { ITEMS as READING_A_SETS } from "../seed/gen/reading_a_sets";
import { ITEMS as READING_B_SETS } from "../seed/gen/reading_b_sets";

/** Batches authored but not yet in the database. One line per new gen module,
 *  the same discipline seed/gen/index.ts already asks for. Remove a batch once
 *  it is seeded and confirmed — a stale entry costs nothing but says less. */
const NEW_BATCHES: { name: string; authored: string; items: unknown[] }[] = [
  { name: "reading_a_sets", authored: "2026-09-04", items: READING_A_SETS },
  { name: "reading_b_sets", authored: "2026-09-04", items: READING_B_SETS },
];

type Item = { taskType: string; profession: string | null; title: string; payload?: unknown };

const key = (t: string, p: string | null | undefined, title: string) => `${t}::${p ?? "_"}::${title}`;

async function main(): Promise<void> {
const items = GEN_ITEMS as unknown as Item[];
let failed = false;
const fail = (msg: string) => {
  console.error(msg);
  failed = true;
};

// ── 1 · duplicates inside the seed source ───────────────────────────────────
const seen = new Map<string, number>();
for (const it of items) {
  const k = key(it.taskType, it.profession, it.title);
  seen.set(k, (seen.get(k) ?? 0) + 1);
}
const dupes = [...seen.entries()].filter(([, n]) => n > 1);

console.log(`[gate:title-collision] ${items.length} seed item(s) · ${seen.size} distinct (taskType, profession, title)`);

if (items.length === 0) {
  console.error("[gate:title-collision] the seed source is empty — this gate would pass over nothing");
  process.exit(1);
}

if (dupes.length > 0) {
  fail(`\n[gate:title-collision] ${dupes.length} title(s) appear more than once IN THE SEED SOURCE:`);
  for (const [k, n] of dupes) fail(`  ${n}x  ${k}`);
  fail("\n  append.ts dedupes on this key, so only one of them would ever be inserted.");
}

// ── 2 · collisions against rows already in the database ─────────────────────
const url = process.env.DATABASE_URL;
if (!url) {
  console.log(
    "\n[gate:title-collision] ⚠ THE DATABASE HALF DID NOT RUN — no DATABASE_URL.\n" +
      "  Only duplicates inside the seed source were checked. A title that collides\n" +
      "  with a row already in the database is NOT ruled out by this run, and such an\n" +
      "  item would be skipped silently by append.ts. Run this again with a database\n" +
      "  before seeding.",
  );
} else {
  const { PrismaClient } = await import("@prisma/client");
  const prisma = new PrismaClient();
  try {
    const rows = await prisma.oetItem.findMany({
      select: { taskType: true, profession: true, title: true, active: true, payload: true },
    });
    const byKey = new Map(rows.map((r) => [key(r.taskType, r.profession, r.title), r]));
    console.log(
      `[gate:title-collision] database reachable · ${rows.length} row(s) (${rows.filter((r) => r.active).length} active, ${rows.filter((r) => !r.active).length} retired)`,
    );

    const collisions: string[] = [];
    let declaredNew = 0;
    for (const batch of NEW_BATCHES) {
      for (const raw of batch.items) {
        const it = raw as Item;
        declaredNew++;
        const row = byKey.get(key(it.taskType, it.profession, it.title));
        if (!row) continue;
        collisions.push(
          `  ${batch.name} · ${it.taskType} · "${it.title}"\n` +
            `      already on a ${row.active ? "ACTIVE" : "RETIRED"} row — append.ts would insert nothing for this item`,
        );
      }
    }

    // An empty NEW_BATCHES is the correct STEADY STATE, not a vacuous pass: it
    // means nothing is waiting to be seeded. Said out loud so that "0 checked"
    // can never be mistaken for "0 found". A batch is removed from the list once
    // it is seeded and confirmed — leaving it there would fail every later build,
    // since by then those titles ARE in the database, legitimately.
    if (declaredNew === 0) {
      console.log(
        "[gate:title-collision] no batch is pending — the database half had nothing to check.\n" +
          "  This is the steady state after a seed. Register a module in NEW_BATCHES\n" +
          "  when you author one, and remove it once its rows are confirmed in the DB.",
      );
    }

    console.log(
      `[gate:title-collision] ${declaredNew} item(s) declared new across ${NEW_BATCHES.length} batch(es) · ${collisions.length} collision(s)`,
    );

    if (collisions.length > 0) {
      fail(`\n[gate:title-collision] ${collisions.length} newly authored item(s) would be SILENTLY SKIPPED:`);
      for (const c of collisions) fail(c);
      fail(
        "\n  append.ts is INSERT-ONLY and dedupes on (taskType, profession, title). It\n" +
          "  would report success and insert nothing for these. A retired row counts:\n" +
          "  retirement clears `active`, it does not remove the title.\n\n" +
          "  Give the new item a different title. Do NOT reuse a retired one — the\n" +
          "  retirement ratchet can bring that row back, and then two different items\n" +
          "  answer to one name.",
      );
    }
  } finally {
    await prisma.$disconnect();
  }
}

  if (failed) process.exit(1);
  console.log("[gate:title-collision] all clear — every seed title is unique, and none collides with a row already stored");
}

main().catch((e) => {
  console.error("[gate:title-collision] failed to run:", e);
  process.exit(1);
});
