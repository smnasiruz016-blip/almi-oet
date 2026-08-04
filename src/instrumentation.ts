// Next runs register() once, at server startup, before any request is served —
// the only place in this app a "refuses to boot" guard can actually live. A check
// at module scope in a lib file would NOT be one: Next does not eagerly import
// route modules, so the server would start clean and the throw would first land on
// a request, after the deploy had already gone green. (Proven on AlmiPrep: with the
// guard at module scope, `next start` listened happily and only 500'd on the first
// credential request.)

/** Served-exercise floor. Same number the build gate enforces on the seed source. */
const FLOOR = 15;

/** The six objective parts. Writing and Speaking are per-profession and are covered
 *  by the build gate's per-profession floor; these six are common to every learner,
 *  so a thin one is thin for everybody. */
const OBJECTIVE_PARTS = [
  "LISTENING_PART_A", "LISTENING_PART_B", "LISTENING_PART_C",
  "READING_PART_A", "READING_PART_B", "READING_PART_C",
] as const;

/** The build gate (scripts/gates/run.ts) reads the SEED SOURCE, which is the right
 *  axis for what this repo ships — but it cannot see the database. `OetItem.active`
 *  exists, so a deactivation in prod drops a SERVED part below floor while the seed
 *  source, and therefore the gate, still reads clean. Every one of the 450 rows is
 *  active today; this makes sure that stays true or the deploy says so.
 *
 *  Three verdicts, deliberately. A DB error is COULD-NOT-PROVE and only warns —
 *  refusing to start on a transient Neon blip would be a self-inflicted outage, and
 *  "I could not count" is not "the bank is thin". Only a successful count below the
 *  floor throws.
 *
 *  Parts are seeded at 0 before counting, so a part whose items are ALL deactivated
 *  still fails rather than vanishing from a group-by and reading as clean. */
async function assertServedFloor(): Promise<void> {
  let counts: Map<string, number>;
  try {
    const { prisma } = await import("@/lib/prisma");
    const rows = await prisma.oetItem.findMany({
      where: { taskType: { in: [...OBJECTIVE_PARTS] } },
      select: { taskType: true, active: true },
    });
    counts = new Map(OBJECTIVE_PARTS.map((p) => [p as string, 0]));
    for (const r of rows) {
      if (r.active) counts.set(r.taskType, (counts.get(r.taskType) ?? 0) + 1);
    }
  } catch (err) {
    console.warn(
      "[floor] could not verify the served OET floor (DB unreachable at boot) — " +
        "not treating this as a failure:",
      err instanceof Error ? err.message : String(err),
    );
    return;
  }

  const thin = [...counts.entries()].filter(([, n]) => n < FLOOR);
  if (thin.length > 0) {
    throw new Error(
      `Served OET floor breached (need >= ${FLOOR} ACTIVE items per objective part; have ` +
        `${thin.map(([p, n]) => `${p}: ${n}`).join(", ")}). Refusing to start: a part below ` +
        "floor serves a thin bank with nothing to say so. Reactivate items or author " +
        "replacements before deploying.",
    );
  }
}

export async function register() {
  if (process.env.NODE_ENV !== "production") return;
  await assertServedFloor();
}
