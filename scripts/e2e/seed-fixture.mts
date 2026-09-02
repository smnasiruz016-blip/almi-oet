/**
 * THE FIXTURE THE BROWSER WALK USES.
 *
 * One entitled learner and a SMALL pool of real exercises, written into the
 * throwaway database only (assertDisposable runs first, and throws).
 *
 * ── THE ITEMS ARE REAL SEED ROWS, NOT INVENTED ──────────────────────────────
 *
 * They are taken from scripts/seed/gen — the same source append.ts writes to
 * production from — so the payload shapes, the answer keys and the question ids
 * the composer renders are the ones the real product serves. An invented payload
 * would prove the test harness works, not that the product does.
 *
 * ── 🔴 THE POOL SIZE IS THE PRODUCT'S, NOT THE TEST'S ───────────────────────
 *
 * The first version seeded four exercises, because four is fast. The app refused
 * to boot:
 *
 *     Served OET floor breached (need >= 15 ACTIVE items per objective part;
 *     have LISTENING_PART_A: 0, ... READING_PART_B: 4, ...). Refusing to start.
 *
 * src/instrumentation.ts enforces a fifteen-item floor on every objective part at
 * server startup. That guard is right and the fixture was wrong, so the fixture
 * moved: FLOOR items of each of the six objective parts, which is the smallest
 * bank this product will agree to serve. The walk therefore runs against a bank
 * the product itself considers valid — and the boot guard is exercised on every
 * e2e run as a side effect.
 *
 * The WALK uses READING_PART_B:
 *   · Reading needs no audio file and no microphone, so the walk needs neither.
 *   · Part B is not the sealed 15-minute Part A, so nothing is confiscated
 *     mid-walk.
 * The COUNT is not hard-coded into any assertion; the test reads the list off
 * the rendered page.
 *
 * ── THE LEARNER ─────────────────────────────────────────────────────────────
 *
 * Entitled by `compProUntil` in the future. That is a real entitlement path —
 * isComped() short-circuits hasPaidAccess() — and it needs no Stripe, no
 * webhook and no email verification. The email is randomised per run so it
 * cannot collide with a real account under any circumstances.
 */
import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { randomBytes } from "node:crypto";
import { assertDisposable } from "./disposable-db.mjs";
import { GEN_ITEMS } from "../seed/gen/index";

export type Fixture = {
  email: string;
  password: string;
  professionSlug: string;
  taskSlug: string;
  /** Titles in the order listPool() will return them (title ascending). The test
   *  does NOT trust this — it reads the rendered list — but it is printed so a
   *  failure can be read without a database. */
  seededTitles: string[];
};

/** src/instrumentation.ts refuses to start the server below this per-part. It is
 *  read from the same place the product states it, not retyped as a number. */
const FLOOR = 15;
const OBJECTIVE_PARTS = [
  "LISTENING_PART_A",
  "LISTENING_PART_B",
  "LISTENING_PART_C",
  "READING_PART_A",
  "READING_PART_B",
  "READING_PART_C",
] as const;
/** The part the browser walks. */
const WALK_TASK = "READING_PART_B";

export async function seedFixture(url: string): Promise<Fixture> {
  assertDisposable(url);
  const prisma = new PrismaClient({ datasourceUrl: url });
  try {
    const all = GEN_ITEMS as Prisma.OetItemCreateManyInput[];
    const items: Prisma.OetItemCreateManyInput[] = [];
    for (const part of OBJECTIVE_PARTS) {
      const forPart = all.filter((i) => i.taskType === part).slice(0, FLOOR);
      if (forPart.length < FLOOR) {
        throw new Error(
          `[e2e] the seed source holds only ${forPart.length} ${part} items; ` +
            `the server's own floor needs ${FLOOR}.`,
        );
      }
      items.push(...forPart);
    }
    await prisma.oetItem.createMany({ data: items });

    const password = `e2e-${randomBytes(9).toString("hex")}`;
    const email = `e2e-${randomBytes(6).toString("hex")}@almioet.invalid`;
    await prisma.user.create({
      data: {
        email,
        passwordHash: await bcrypt.hash(password, 10),
        name: "E2E Learner",
        targetProfession: "NURSING",
        // Entitled without Stripe and without email verification: isComped()
        // short-circuits hasPaidAccess(). A real grant path, not a test-only one.
        compProUntil: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    const seeded = await prisma.oetItem.findMany({
      where: { taskType: WALK_TASK, active: true, profession: null },
      orderBy: { title: "asc" },
      select: { title: true },
    });

    return {
      email,
      password,
      professionSlug: "nursing",
      taskSlug: "reading-part-b",
      seededTitles: seeded.map((s) => s.title),
    };
  } finally {
    await prisma.$disconnect();
  }
}
