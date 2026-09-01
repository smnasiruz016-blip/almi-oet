/**
 * gate:next-exercise — THE CHAIN REACHES EVERY EXERCISE, ONCE, AND THEN STOPS.
 *
 * Nasir's complaint was that each skill had "just 1 exercise to practice". The
 * bank was never the problem; the path between its items was. This gate asserts
 * the property that path has to have:
 *
 *   for every LIVE task type, starting at exercise 1 and pressing "Next exercise"
 *   until it stops visits every exercise in the pool exactly once, in the order
 *   the list page numbers them, and then reports exhaustion.
 *
 * ── HOW IT WAS SEEN RED ─────────────────────────────────────────────────────
 *
 * The picker in src/lib/oet/chain.ts was changed to return a random candidate:
 *
 *     const fresh = candidates[Math.floor(Math.random() * candidates.length)];
 *     if (fresh) return { id: fresh.row.id, position: fresh.position };
 *
 * The walk then revisited items and skipped others, and the ordered-visit
 * assertion failed. Restored afterwards. The recorded output is in the PR body.
 *
 * ── WHAT THIS PROVES AND WHAT IT DOES NOT ───────────────────────────────────
 *
 * This drives the PURE picker over an in-memory pool. It proves the walk is
 * total, ordered and terminating. It does NOT prove that Postgres returns rows
 * in the same order (listPool orders by title ascending and the list page
 * numbers whatever it is handed, so those two agree by construction rather than
 * because of this test), and it does NOT prove the entitlement check runs on
 * each hop — that is gate:chain-is-paid.
 *
 * The last describe block records a real divergence rather than hiding it: an
 * objective practice set serves PRACTICE_SET_STEPS items and fills steps 2..n at
 * RANDOM from the same pool, so a sitting can re-serve something the chain has
 * already covered. The chain's own walk is exactly-once; the sitting's is not.
 */
import { describe, expect, it } from "vitest";
import { nextInChain, type ChainRow } from "@/lib/oet/chain";
import { OET_TASKS } from "@/lib/oet/registry";
import { PRACTICE_SET_STEPS } from "@/lib/oet/session";

/** Pool sizes per task type. These are FIXTURE INPUT, not a claim about the live
 *  bank — deliberately all different, so no single hard-coded number could
 *  satisfy every case, and deliberately including 1 and 2 to catch off-by-one. */
const POOL_SIZE: Record<string, number> = {
  LISTENING_PART_A: 21,
  LISTENING_PART_B: 33,
  LISTENING_PART_C: 7,
  READING_PART_A: 18,
  READING_PART_B: 2,
  READING_PART_C: 1,
  WRITING_LETTER: 15,
  SPEAKING_ROLEPLAY: 4,
};

function freshPool(size: number): ChainRow[] {
  return Array.from({ length: size }, (_, i) => ({
    id: `e${i + 1}`,
    status: "NOT_STARTED" as const,
  }));
}

/**
 * One learner walking the chain. They open the list, press Start on row 1, and
 * from then on only ever press "Next exercise".
 */
function walkFromExerciseOne(pool: ChainRow[]) {
  const visited: string[] = [];
  const positions: number[] = [];

  // Row 1, chosen off the list page.
  pool[0].status = "SCORED";
  visited.push(pool[0].id);
  positions.push(1);
  let lastServed = [pool[0].id];

  // A hard stop, so a picker that loops forever fails the test instead of
  // hanging CI. Generous enough that a correct walk never reaches it.
  let budget = pool.length * 4 + 10;
  for (;;) {
    if (budget-- <= 0) return { visited, positions, terminated: false, exhausted: false };
    const pick = nextInChain(pool, lastServed);
    if (!pick) break;
    visited.push(pick.id);
    positions.push(pick.position);
    pool.find((r) => r.id === pick.id)!.status = "SCORED";
    lastServed = [pick.id];
  }
  return {
    visited,
    positions,
    terminated: true,
    exhausted: nextInChain(pool, lastServed) === null,
  };
}

const LIVE = Object.values(OET_TASKS).filter((t) => t.live);

describe("the population this gate covers", () => {
  // 🔴 COUNT THE POPULATION BEFORE THE GUARD. A gate that iterates an empty list
  // passes vacuously, and every assertion below sits inside a loop over LIVE.
  it("is every live task type, and it is not empty", () => {
    expect(LIVE.length).toBeGreaterThan(0);
    for (const t of LIVE) expect(POOL_SIZE[t.taskType]).toBeGreaterThan(0);
  });
});

describe.each(LIVE.map((t) => [t.taskType, POOL_SIZE[t.taskType]] as const))(
  "%s — walking the chain from exercise 1 through a pool of %i",
  (taskType, size) => {
    it("visits every exercise, in list order, exactly once, then stops", () => {
      void taskType;
      const pool = freshPool(size);
      const expectedIds = pool.map((r) => r.id);
      const walk = walkFromExerciseOne(pool);

      expect(walk.terminated).toBe(true);
      // Every exercise, in the order the list page numbers them.
      expect(walk.visited).toEqual(expectedIds);
      // Exactly once — no id served twice.
      expect(new Set(walk.visited).size).toBe(walk.visited.length);
      // The positions printed on screen are 1..N, no gaps and no repeats.
      expect(walk.positions).toEqual(expectedIds.map((_, i) => i + 1));
      // Nothing left, and it says so rather than wrapping round to 1.
      expect(walk.exhausted).toBe(true);
      expect(nextInChain(pool, [])).toBeNull();
    });
  },
);

describe("the picker's preference order", () => {
  it("prefers the first NOT_STARTED over an earlier half-finished one", () => {
    const pool: ChainRow[] = [
      { id: "a", status: "IN_PROGRESS" },
      { id: "b", status: "SCORED" },
      { id: "c", status: "NOT_STARTED" },
    ];
    expect(nextInChain(pool, [])).toEqual({ id: "c", position: 3 });
  });

  it("falls back to the first not-SCORED once nothing is untouched", () => {
    const pool: ChainRow[] = [
      { id: "a", status: "SCORED" },
      { id: "b", status: "IN_PROGRESS" },
      { id: "c", status: "SCORED" },
    ];
    expect(nextInChain(pool, [])).toEqual({ id: "b", position: 2 });
  });

  it("never hands back an item the session just served", () => {
    // Without this the walk cannot terminate: a set abandoned mid-way leaves its
    // own items IN_PROGRESS, and "first not-SCORED" would return them forever.
    const pool: ChainRow[] = [
      { id: "a", status: "IN_PROGRESS" },
      { id: "b", status: "SCORED" },
    ];
    expect(nextInChain(pool, ["a"])).toBeNull();
    expect(nextInChain(pool, [])).toEqual({ id: "a", position: 1 });
  });

  it("reports the POSITION IN THE FULL LIST, not among what is left", () => {
    // "Exercise 4 of 21" has to mean the row numbered 4 on the list page. If this
    // counted only unfinished rows it would print 1 while the learner is looking
    // at row 4, and the two screens would describe different libraries.
    const pool: ChainRow[] = [
      { id: "a", status: "SCORED" },
      { id: "b", status: "SCORED" },
      { id: "c", status: "SCORED" },
      { id: "d", status: "NOT_STARTED" },
    ];
    expect(nextInChain(pool, [])).toEqual({ id: "d", position: 4 });
  });
});

describe("exhaustion", () => {
  it("returns null on an exhausted pool — the automatic chain does not loop", () => {
    const pool: ChainRow[] = [
      { id: "a", status: "SCORED" },
      { id: "b", status: "SCORED" },
    ];
    expect(nextInChain(pool, [])).toBeNull();
    expect(nextInChain(pool, ["b"])).toBeNull();
  });

  it("returns null on an empty pool rather than throwing", () => {
    expect(nextInChain([], [])).toBeNull();
    expect(nextInChain([], [], { includeScored: true })).toBeNull();
  });

  it("only starts over when the learner explicitly asks", () => {
    const pool: ChainRow[] = [
      { id: "a", status: "SCORED" },
      { id: "b", status: "SCORED" },
      { id: "c", status: "SCORED" },
    ];
    // The button on the results screen, and nothing else, passes this.
    expect(nextInChain(pool, ["c"], { includeScored: true })).toEqual({ id: "a", position: 1 });
    // A second lap walks forward too — it does not pin the learner to row 1.
    expect(nextInChain(pool, ["a"], { includeScored: true })).toEqual({ id: "b", position: 2 });
  });
});

describe("WHAT THE CHAIN DOES NOT CONTROL: the rest of the set", () => {
  it("an objective set fills its later steps at random, so a sitting can repeat what the chain covered", () => {
    // This is NOT a defect asserted as correct — it is the honest scope of the
    // gate above. startSession pins step 0 to the exercise the chain chose;
    // advanceSession fills steps 1..PRACTICE_SET_STEPS-1 with pickItemId, which
    // draws at RANDOM from the same pool and excludes only items used inside the
    // SAME session. So across a whole walk some exercises are served more than
    // once — by the set filler, never by the chain.
    //
    // What survives: the chain never repeats itself, the walk terminates, and
    // every exercise is served at least once.
    expect(PRACTICE_SET_STEPS).toBeGreaterThan(1);

    const pool = freshPool(21);
    const chainPicks: string[] = [];
    pool[0].status = "SCORED";
    chainPicks.push(pool[0].id);
    let lastSession = [pool[0].id];
    for (let s = 1; s < PRACTICE_SET_STEPS; s++) {
      const fill = pool[Math.floor(Math.random() * pool.length)];
      fill.status = "SCORED";
      lastSession.push(fill.id);
    }

    let budget = pool.length * 4 + 10;
    for (;;) {
      if (budget-- <= 0) throw new Error("the chain did not terminate");
      const pick = nextInChain(pool, lastSession);
      if (!pick) break;
      chainPicks.push(pick.id);
      pool.find((r) => r.id === pick.id)!.status = "SCORED";
      lastSession = [pick.id];
      for (let s = 1; s < PRACTICE_SET_STEPS; s++) {
        const fill = pool[Math.floor(Math.random() * pool.length)];
        fill.status = "SCORED";
        lastSession.push(fill.id);
      }
    }

    // The chain itself never repeats.
    expect(new Set(chainPicks).size).toBe(chainPicks.length);
    // Every exercise has been served by the time it stops.
    expect(pool.every((r) => r.status === "SCORED")).toBe(true);
    // And the chain covered FEWER than all of them, because the random filler
    // consumed the rest. Asserted so it cannot be quietly downgraded to a
    // comment that nobody re-checks.
    expect(chainPicks.length).toBeLessThan(pool.length);
  });
});
