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
  /** Everything the Reading Part A walk needs, computed FROM THE SEEDED PAYLOAD
   *  rather than typed out here — see partAWalk(). */
  partA: PartAWalk;
  /** Reading Part A as PRODUCTION holds it: the corrected full-length items and
   *  the legacy short ones that are on their way out, so the retire can be
   *  walked here before it is run there. Titles only; the walk reads the
   *  rendered list for everything it asserts. */
  partAFullLengthTitles: string[];
  partALegacyTitles: string[];
  /** Reading Part B, on the same terms: the fifteen written to the measured
   *  136-155 law, and the 33 legacy extracts on their way out. */
  partB: PartBWalk;
  /** Reading Part C, on the same terms: the twenty-one written to the measured
   *  653-836 law with FOUR options, and the twenty-one legacy articles on their
   *  way out (51-405 words, two or eight questions, three options). */
  partC: PartCWalk;
  partCFullLengthTitles: string[];
  partCLegacyTitles: string[];
  /** A SECOND full-length item, so the "a wrong option marks wrong" control can
   *  answer a known-wrong option rather than whichever radio sits second. */
  partBSecond: PartBWalk;
  partBFullLengthTitles: string[];
  partBLegacyTitles: string[];
};

/**
 * THE READING PART B WALK, DERIVED FROM THE ITEM ITSELF.
 *
 * Part B is one short workplace extract and one three-option question, so there
 * is one right answer and two wrong ones and nothing is hand-typed here: the key
 * and a deliberate wrong option are both read off the payload.
 */
export type PartBWalk = {
  taskSlug: string;
  title: string;
  /** The last words of the passage. A truncated extract fails on its own tail. */
  passageTail: string;
  question: { id: string; stem: string; correctOptionId: string; wrongOptionId: string };
};

/** Reading Part C: one long article and eight four-option questions. */
export type PartCWalk = {
  taskSlug: string;
  title: string;
  passageTail: string;
  /** Two questions: one answered with its key, one with a known-wrong option. */
  right: { id: string; stem: string; optionId: string };
  wrong: { id: string; stem: string; optionId: string; correctOptionId: string };
};

/**
 * THE READING PART A WALK, DERIVED FROM THE ITEM ITSELF.
 *
 * Nothing below is hand-typed. The answers are read out of the payload the app
 * is about to serve, so the walk cannot drift from the content: if an answer key
 * changed, the walk changes with it and still asserts the same thing — that the
 * product marks a right answer right.
 *
 * `variantAnswer` is the one that matters most. It is NOT the question's own
 * `answer`; it is one of its authored `variants`, so a pass proves the accept
 * list is reaching the grader and not merely sitting in the payload.
 */
export type PartAWalk = {
  taskSlug: string;
  title: string;
  /** The last words of each of the four texts, in order. The walk asserts each
   *  is on screen — a truncated or collapsed text fails on its own tail. */
  textTails: string[];
  /** questions 1-7: choose the text. */
  matching: { id: string; optionId: string; stem: string };
  /** questions 8-14: a question, answered with a word or short phrase. */
  shortAnswer: { id: string; answer: string; stem: string };
  /** questions 15-20: a sentence with a blank in it. */
  completion: { id: string; answer: string; stem: string };
  /** answered with an AUTHORED VARIANT, never with the primary answer. */
  variant: { id: string; primary: string; variantAnswer: string; stem: string };
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
/** …and the parts the later walks read. */
const PART_A = "READING_PART_A";
const PART_B = "READING_PART_B";
const PART_C = "READING_PART_C";

/**
 * 🔴 THE FIFTEEN, IDENTIFIED BY THE LAW AND NOT BY A LIST OF TITLES.
 *
 * The seed source holds 33 Reading Part A items: eighteen legacy ones that are
 * short of the measured law, and the fifteen full-length ones. `slice(0, 15)`
 * would take the eighteen's first fifteen — the harness would then have proved
 * the product renders the items that are on their way out.
 *
 * ⚠️ THE STRUCTURAL HALF OF THE LAW IS NOT ENOUGH, AND THIS WAS MEASURED THE
 * HARD WAY. The first version of this filter asked only for FOUR texts and
 * TWENTY questions. Three legacy items carry exactly that shape and are still
 * 355-385 words combined, and one of them sorts FIRST — so the walk opened
 * `OET Form 1 · Reading Part A — Preventing pressure injuries`, rendered 266
 * words, and failed on its own word-count assertion. That failure is the reason
 * the assertion is there.
 *
 * So the filter is the WHOLE law: four texts, twenty questions, AND the
 * combined length gate:length measures — every text body plus every question
 * stem — inside 885-1009. No title is typed here, so an item joins the walk by
 * becoming full length and leaves it by ceasing to be.
 */
const PART_A_MIN = 885;
const PART_A_MAX = 1009;
/**
 * 🔴 THE SAME TOKENISER gate:length USES, and for the same reason: a token is
 * a word only if it carries a letter or a digit (ruled 3 September 2026).
 *
 * This file split on whitespace until the Part C walk was written, and two of
 * the twenty-one full-length Part C items then measured OVER the 836 ceiling on
 * their punctuation alone and were sorted into the LEGACY list. The fixture
 * would have walked the retire against items it was supposed to keep. One law,
 * one definition of a word.
 */
const words = (s: string | undefined): number =>
  s ? (s.match(/[^\s]+/g) ?? []).filter((t) => /[A-Za-z0-9]/.test(t)).length : 0;

function isFullLengthPartA(item: Prisma.OetItemCreateManyInput): boolean {
  const p = item.payload as {
    texts?: { body?: string }[];
    questions?: { stem?: string }[];
  } | null;
  const texts = p?.texts ?? [];
  const questions = p?.questions ?? [];
  if (texts.length !== 4 || questions.length !== 20) return false;
  const combined =
    texts.reduce((n, t) => n + words(t.body), 0) +
    questions.reduce((n, q) => n + words(q.stem), 0);
  return combined >= PART_A_MIN && combined <= PART_A_MAX;
}

/**
 *  + RED +  THE FIFTEEN PART B ITEMS, IDENTIFIED BY THE LAW.
 *
 * Same reasoning as isFullLengthPartA: the seed holds 48 Reading Part B items,
 * 33 legacy extracts of 28-100 words and the fifteen written to the measured
 * 136-155. `slice(0, 15)` takes the legacy ones, because they sort first.
 */
const PART_B_MIN = 136;
const PART_B_MAX = 155;

function isFullLengthPartB(item: Prisma.OetItemCreateManyInput): boolean {
  const p = item.payload as { passages?: { body?: string }[] } | null;
  const n = (p?.passages ?? []).reduce((a, x) => a + words(x.body), 0);
  return n >= PART_B_MIN && n <= PART_B_MAX;
}

/**
 * 🔴 THE TWENTY-ONE FULL-LENGTH PART C ITEMS, IDENTIFIED BY THE LAW.
 *
 * The seed holds 42: twenty-one legacy articles of 51-405 words carrying two or
 * eight questions with THREE options, and the twenty-one written to OET's own
 * measure. Length alone separates them, and the option count confirms it —
 * gate:distractor's D4 gives Part C four options and records the old 78 as debt.
 */
const PART_C_MIN = 653;
const PART_C_MAX = 836;

function isFullLengthPartC(item: Prisma.OetItemCreateManyInput): boolean {
  const p = item.payload as {
    passages?: { body?: string }[];
    questions?: { options?: unknown[] }[];
  } | null;
  const n = (p?.passages ?? []).reduce((a, x) => a + words(x.body), 0);
  const qs = p?.questions ?? [];
  return (
    n >= PART_C_MIN &&
    n <= PART_C_MAX &&
    qs.length === 8 &&
    qs.every((q) => (q.options?.length ?? 0) === 4)
  );
}

function partCWalk(item: Prisma.OetItemCreateManyInput): PartCWalk {
  const payload = item.payload as {
    passages: { body?: string }[];
    questions: { id: string; stem?: string; answer?: string; options?: { id: string }[] }[];
  };
  const qs = payload.questions;
  if (qs.length < 2) throw new Error(`[e2e] ${item.title}: too few questions to walk`);
  const wrongOpt = qs[1].options!.find((o) => o.id !== qs[1].answer);
  if (!wrongOpt) throw new Error(`[e2e] ${item.title}: every option is the answer`);
  const body = String(payload.passages[0]?.body ?? "");
  return {
    taskSlug: "reading-part-c",
    title: item.title,
    passageTail: body.trim().split(/\s+/).slice(-8).join(" "),
    right: { id: qs[0].id, stem: qs[0].stem ?? "", optionId: qs[0].answer! },
    wrong: {
      id: qs[1].id,
      stem: qs[1].stem ?? "",
      optionId: wrongOpt.id,
      correctOptionId: qs[1].answer!,
    },
  };
}

function partBWalk(item: Prisma.OetItemCreateManyInput): PartBWalk {
  const payload = item.payload as {
    passages: { body?: string }[];
    questions: { id: string; stem?: string; answer?: string; options?: { id: string }[] }[];
  };
  const q = payload.questions[0];
  if (!q?.answer || (q.options?.length ?? 0) < 2) {
    throw new Error(`[e2e] ${item.title}: no answerable Part B question — refusing to walk it`);
  }
  const wrong = q.options!.find((o) => o.id !== q.answer);
  if (!wrong) throw new Error(`[e2e] ${item.title}: every option is the answer`);
  const body = String(payload.passages[0]?.body ?? "");
  return {
    taskSlug: "reading-part-b",
    title: item.title,
    passageTail: body.trim().split(/\s+/).slice(-8).join(" "),
    question: {
      id: q.id,
      stem: q.stem ?? "",
      correctOptionId: q.answer,
      wrongOptionId: wrong.id,
    },
  };
}

/** Build the Part A walk from one item's own payload. Throws rather than
 *  guesses: a missing question kind is a finding about the bank, not something
 *  for a test to paper over. */
function partAWalk(item: Prisma.OetItemCreateManyInput): PartAWalk {
  const payload = item.payload as {
    texts: { body?: string }[];
    questions: {
      id: string;
      kind?: string;
      stem?: string;
      answer?: string;
      variants?: string[];
      options?: { id: string }[];
    }[];
  };
  const qs = payload.questions;
  const need = <T,>(v: T | undefined, what: string): T => {
    if (v === undefined) throw new Error(`[e2e] ${item.title}: no ${what} — refusing to walk it`);
    return v;
  };

  // A matching question is the one carrying options; the free-text questions
  // carry none. THE BANK STORES BOTH FREE-TEXT KINDS AS `gap`, so the two are
  // told apart the way a candidate tells them apart — a sentence completion has
  // the blank printed in it, a short answer is a question.
  const matching = need(
    qs.find((q) => (q.options?.length ?? 0) > 0 && q.answer),
    "matching question",
  );
  const freeText = qs.filter((q) => (q.options?.length ?? 0) === 0 && q.answer);
  const hasBlank = (q: { stem?: string }) => /_{3,}/.test(q.stem ?? "");
  const shortAnswer = need(
    freeText.find((q) => !hasBlank(q)),
    "short-answer question",
  );
  const completion = need(
    freeText.find(hasBlank),
    "sentence-completion question",
  );
  const variant = need(
    freeText.find(
      (q) =>
        (q.variants?.length ?? 0) > 0 && q.id !== shortAnswer.id && q.id !== completion.id,
    ),
    "free-text question carrying an authored variant",
  );

  const tail = (body: string) => body.trim().split(/\s+/).slice(-8).join(" ");
  return {
    taskSlug: "reading-part-a",
    title: item.title,
    textTails: payload.texts.map((t) => tail(String(t.body ?? ""))),
    matching: { id: matching.id, optionId: matching.answer!, stem: matching.stem ?? "" },
    shortAnswer: { id: shortAnswer.id, answer: shortAnswer.answer!, stem: shortAnswer.stem ?? "" },
    completion: { id: completion.id, answer: completion.answer!, stem: completion.stem ?? "" },
    variant: {
      id: variant.id,
      primary: variant.answer!,
      variantAnswer: variant.variants![0],
      stem: variant.stem ?? "",
    },
  };
}

export async function seedFixture(url: string): Promise<Fixture> {
  assertDisposable(url);
  const prisma = new PrismaClient({ datasourceUrl: url });
  try {
    const all = GEN_ITEMS as Prisma.OetItemCreateManyInput[];
    const items: Prisma.OetItemCreateManyInput[] = [];
    for (const part of OBJECTIVE_PARTS) {
      const pool = all.filter((i) => i.taskType === part);
      // 🔴 READING PART A IS SEEDED WHOLE, and the others are cut to the floor.
      // The retire walk has to see what production sees: the corrected items AND
      // the legacy ones it is about to hide. Cutting Part A to fifteen would mean
      // retiring nothing, or retiring the very items the learner is left with.
      // Reading Part A and Part B are seeded WHOLE; the other four are cut to
      // the floor. Both retires have to be walkable here before they are run
      // there, and a pool cut to fifteen would mean retiring nothing.
      const forPart =
        part === PART_A || part === PART_B || part === PART_C ? pool : pool.slice(0, FLOOR);
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

    const partAAll = items.filter((i) => i.taskType === PART_A);
    const partAFull = partAAll.filter(isFullLengthPartA);
    const partALegacy = partAAll.filter((i) => !isFullLengthPartA(i));
    if (partAFull.length < FLOOR) {
      throw new Error(
        `[e2e] only ${partAFull.length} FULL-LENGTH Reading Part A item(s) in the seed ` +
          `source; the walk needs ${FLOOR}. A short item must never be walked as if it ` +
          `were one of the corrected ones.`,
      );
    }
    // The retire leaves exactly the full-length ones standing, and the server's
    // own floor is FLOOR. If that ever stopped being true the walk would prove
    // the retire safe on a bank the product would refuse to boot with.
    if (partAFull.length < FLOOR) throw new Error("[e2e] the retire would breach the floor");
    if (partALegacy.length === 0) {
      throw new Error("[e2e] no legacy Reading Part A item is left to walk the retire against");
    }
    const partAItem = partAFull[0];

    const partBAll = items.filter((i) => i.taskType === PART_B);
    const partBFull = partBAll.filter(isFullLengthPartB);
    const partBLegacy = partBAll.filter((i) => !isFullLengthPartB(i));
    if (partBFull.length < FLOOR) {
      throw new Error(
        `[e2e] only ${partBFull.length} full-length Reading Part B item(s) in the seed ` +
          `source; the walk needs ${FLOOR}.`,
      );
    }
    if (partBLegacy.length === 0) {
      throw new Error("[e2e] no legacy Reading Part B item is left to walk its retire against");
    }

    const partCAll = items.filter((i) => i.taskType === PART_C);
    const partCFull = partCAll.filter(isFullLengthPartC);
    const partCLegacy = partCAll.filter((i) => !isFullLengthPartC(i));
    if (partCFull.length < FLOOR) {
      throw new Error(
        `[e2e] only ${partCFull.length} full-length Reading Part C item(s) in the seed ` +
          `source; the walk needs ${FLOOR}.`,
      );
    }
    if (partCLegacy.length === 0) {
      throw new Error("[e2e] no legacy Reading Part C item is left to walk its retire against");
    }

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
      partA: partAWalk(partAItem),
      partAFullLengthTitles: partAFull.map((i) => i.title),
      partALegacyTitles: partALegacy.map((i) => i.title),
      partB: partBWalk(partBFull[0]),
      partC: partCWalk(partCFull[0]),
      partCFullLengthTitles: partCFull.map((i) => i.title),
      partCLegacyTitles: partCLegacy.map((i) => i.title),
      partBSecond: partBWalk(partBFull[1]),
      partBFullLengthTitles: partBFull.map((i) => i.title),
      partBLegacyTitles: partBLegacy.map((i) => i.title),
    };
  } finally {
    await prisma.$disconnect();
  }
}
