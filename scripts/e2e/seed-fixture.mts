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
import { join } from "node:path";
import { assertDisposable } from "./disposable-db.mjs";
import { GEN_ITEMS } from "../seed/gen/index";
import {
  splitByRetireList,
  readRetireList,
  isFullLengthPartA,
  isFullLengthPartB,
  isFullLengthPartC,
  PART_A_MIN,
  PART_A_MAX,
  PART_B_MIN,
  PART_B_MAX,
  PART_C_MIN,
  PART_C_MAX,
} from "./bank-split";

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
  /** Reading Part C, on the same terms with ONE difference that matters: the two
   *  halves are not told apart by shape. All 42 articles meet the 653-836 law
   *  with eight questions of four options — the outgoing twenty-one were rewritten
   *  by the verified bank of 6 September 2026 — so the twenty-one on their way out
   *  are the twenty-one scripts/retire/reading-part-c-legacy.json names, and the
   *  other twenty-one are what the learner is left with. See ./bank-split.ts. */
  partC: PartCWalk;
  partCFullLengthTitles: string[];
  partCLegacyTitles: string[];
  /** A SECOND full-length item, so the "a wrong option marks wrong" control can
   *  answer a known-wrong option rather than whichever radio sits second. */
  partBSecond: PartBWalk;
  partBFullLengthTitles: string[];
  partBLegacyTitles: string[];
  /** The three Listening walks, on the same terms as the Reading ones: an item
   *  written to the measured law, with everything the walk answers with read off
   *  its own payload. Added 3 September 2026 with the 118 new items. */
  listeningA: ListeningAWalk;
  listeningB: ListeningMcqWalk;
  listeningC: ListeningMcqWalk;
  listeningAFullLengthTitles: string[];
  listeningBFullLengthTitles: string[];
  listeningCFullLengthTitles: string[];
  /** One Writing and one Speaking item for the learner's own profession, so a
   *  walk can render an AI-graded task and watch what a retire does to it. */
  writing: AiWalk;
  speaking: AiWalk;
};

/** An AI-graded item, addressed the way the library addresses it. Nothing about
 *  its payload is carried here: these tasks are graded by a model, so there is
 *  no key to read off and nothing for a walk to answer "correctly". */
export type AiWalk = { taskSlug: string; professionSlug: string; title: string };

/**
 * LISTENING PART A: one consultation and twelve gaps.
 *
 * Every gap is answered, and one of them is answered with an AUTHORED VARIANT
 * rather than the primary answer — the same reasoning as the Reading Part A
 * walk. A pass on the variant proves the accept list reaches the grader; a walk
 * that only ever types the primary answer would still pass if the accept list
 * were dead.
 */
export type ListeningAWalk = {
  taskSlug: string;
  title: string;
  /** Every gap, with the exact text to type into it. */
  answers: { id: string; label: string; text: string }[];
  /** Which of the above is being answered with a variant, so the walk can say so. */
  variantGapId: string | null;
  gapCount: number;
};

/** Listening Part B and Part C: an extract or a recording, and its questions.
 *  Part B has one question, Part C has six; the shape is the same. */
export type ListeningMcqWalk = {
  taskSlug: string;
  title: string;
  questionCount: number;
  /** Answered with the item's own key. */
  right: { id: string; stem: string; optionId: string }[];
  /** One question answered with a known-wrong option, so a bank that marks
   *  everything correct cannot pass. Null when the item has one question only
   *  and it is already being answered right — Part B is walked twice instead. */
  wrong: { id: string; stem: string; optionId: string; correctOptionId: string } | null;
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
/** The two AI-graded parts. They are seeded WHOLE alongside the objective six so
 *  a walk can open one — until 4 September 2026 the fixture seeded neither, so
 *  nothing in this suite had ever rendered a Writing or Speaking item. */
const AI_PARTS = ["WRITING_LETTER", "SPEAKING_ROLEPLAY"] as const;
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
 * 🔴 THE THREE READING LENGTH LAWS, AND THE THREE RETIRE LISTS, LIVE IN
 * ./bank-split.ts.
 *
 * They moved there on 7 September 2026 when the fixture died naming a Part C
 * article it could no longer classify. That file carries the measurement, the
 * reasoning, and the guards the old shape rule could not make;
 * tests/reading-retire-split.test.ts fails in Unknown command: "test"


Did you mean this?
  npm test # Test a package
To see a list of supported npm commands, run:
  npm help rather than waiting
 * for a browser. Nothing about the laws themselves changed.
 */
const RETIRE_DIR = join(import.meta.dirname, "..", "retire");
const RETIRE_LIST: Record<string, string> = {
  [PART_A]: join(RETIRE_DIR, "reading-part-a-legacy.json"),
  [PART_B]: join(RETIRE_DIR, "reading-part-b-legacy.json"),
  [PART_C]: join(RETIRE_DIR, "reading-part-c-legacy.json"),
};

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


/**
 * 🔴 THE FULL-LENGTH LISTENING ITEMS, IDENTIFIED BY THE LAW — NEVER BY slice().
 *
 * The seed source now holds 34 Listening Part A items, 123 Part B and 36 Part C,
 * and in every one of the three the LEGACY items come first, because
 * `listening_a.ts` is imported before `listening_a_sets.ts`. `pool.slice(0, 15)`
 * — which is what this fixture did for the Listening parts until 3 September
 * 2026 — takes fifteen legacy items every time. The walk would then have opened
 * a 65-word "Part A — Antenatal visit" with four gaps and proved the product
 * renders the very items this work exists to replace.
 *
 * The law is the whole law, structure included, and the bounds are the ones
 * `scripts/gates/length.ts` enforces with its citations: 550-600 words and
 * exactly 12 gaps; 140-165 and one three-option question; 780-880 and SIX
 * three-option questions.
 */
const LISTENING_A_MIN = 550;
const LISTENING_A_MAX = 600;
const LISTENING_B_MIN = 140;
const LISTENING_B_MAX = 165;
const LISTENING_C_MIN = 780;
const LISTENING_C_MAX = 880;

type ListeningPayload = {
  audioScript?: string;
  speakers?: { role: string; voice: string }[];
  gaps?: { id: string; label?: string; answer?: string; variants?: string[] }[];
  questions?: { id: string; stem?: string; answer?: string; options?: { id: string }[] }[];
};

function isFullLengthListeningA(item: Prisma.OetItemCreateManyInput): boolean {
  const p = item.payload as ListeningPayload | null;
  const n = words(p?.audioScript);
  return n >= LISTENING_A_MIN && n <= LISTENING_A_MAX && (p?.gaps ?? []).length === 12;
}

function isFullLengthListeningMcq(
  item: Prisma.OetItemCreateManyInput,
  min: number,
  max: number,
  questionCount: number,
): boolean {
  const p = item.payload as ListeningPayload | null;
  const n = words(p?.audioScript);
  const qs = p?.questions ?? [];
  return (
    n >= min &&
    n <= max &&
    qs.length === questionCount &&
    qs.every((q) => (q.options?.length ?? 0) === 3)
  );
}

/**
 * The Part A walk: all twelve gaps, one of them answered with an authored
 * variant. Throws rather than guesses — a gap with no answer is a finding about
 * the bank, not something a test should paper over.
 */
function listeningAWalk(item: Prisma.OetItemCreateManyInput): ListeningAWalk {
  const p = item.payload as ListeningPayload;
  const gaps = p.gaps ?? [];
  if (gaps.length !== 12) throw new Error(`[e2e] ${item.title}: ${gaps.length} gaps, law 12`);
  // The first gap that carries an authored variant is answered with the VARIANT,
  // so the accept list is on the walked path and not merely in the payload.
  const variantGap = gaps.find((g) => (g.variants?.length ?? 0) > 0);
  return {
    taskSlug: "listening-part-a",
    title: item.title,
    gapCount: gaps.length,
    variantGapId: variantGap?.id ?? null,
    answers: gaps.map((g) => {
      if (!g.answer) throw new Error(`[e2e] ${item.title}: gap ${g.id} has no answer`);
      const useVariant = g.id === variantGap?.id;
      return {
        id: g.id,
        label: g.label ?? "",
        text: useVariant ? g.variants![0] : g.answer,
      };
    }),
  };
}

/** Part B and Part C: answer every question with its key, and hold back one
 *  known-wrong option (Part C only, which has six) for the control. */
function listeningMcqWalk(
  item: Prisma.OetItemCreateManyInput,
  taskSlug: string,
  withWrong: boolean,
): ListeningMcqWalk {
  const p = item.payload as ListeningPayload;
  const qs = p.questions ?? [];
  if (qs.length === 0) throw new Error(`[e2e] ${item.title}: no questions to walk`);
  for (const q of qs) {
    if (!q.answer) throw new Error(`[e2e] ${item.title}: question ${q.id} has no key`);
  }
  const last = qs[qs.length - 1];
  const wrongOpt = withWrong ? last.options!.find((o) => o.id !== last.answer) : undefined;
  if (withWrong && !wrongOpt) throw new Error(`[e2e] ${item.title}: every option is the answer`);
  const right = (withWrong ? qs.slice(0, -1) : qs).map((q) => ({
    id: q.id,
    stem: q.stem ?? "",
    optionId: q.answer!,
  }));
  return {
    taskSlug,
    title: item.title,
    questionCount: qs.length,
    right,
    wrong: wrongOpt
      ? { id: last.id, stem: last.stem ?? "", optionId: wrongOpt.id, correctOptionId: last.answer! }
      : null,
  };
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

/** The first item of the learner's own profession for an AI task. Throws rather
 *  than guesses: an empty AI pool is a finding about the bank. */
function aiWalk(
  items: Prisma.OetItemCreateManyInput[],
  taskType: string,
  taskSlug: string,
): AiWalk {
  const hit = items.find((i) => i.taskType === taskType && i.profession === "NURSING");
  if (!hit) throw new Error(`[e2e] no NURSING ${taskType} item in the seed source`);
  return { taskSlug, professionSlug: "nursing", title: hit.title };
}

export async function seedFixture(url: string): Promise<Fixture> {
  assertDisposable(url);
  const prisma = new PrismaClient({ datasourceUrl: url });
  try {
    const all = GEN_ITEMS as Prisma.OetItemCreateManyInput[];
    const items: Prisma.OetItemCreateManyInput[] = [];
    for (const part of [...OBJECTIVE_PARTS, ...AI_PARTS]) {
      const pool = all.filter((i) => i.taskType === part);
      // 🔴 READING PART A IS SEEDED WHOLE, and the others are cut to the floor.
      // The retire walk has to see what production sees: the corrected items AND
      // the legacy ones it is about to hide. Cutting Part A to fifteen would mean
      // retiring nothing, or retiring the very items the learner is left with.
      // Reading Part A and Part B are seeded WHOLE; the other four are cut to
      // the floor. Both retires have to be walkable here before they are run
      // there, and a pool cut to fifteen would mean retiring nothing.
      // 🔴 EVERY PART IS NOW SEEDED WHOLE. Until 3 September 2026 the three
      // Listening parts were cut with `pool.slice(0, FLOOR)`, and the legacy
      // items sort first in GEN_ITEMS — so the fixture held fifteen 37-to-114
      // word fragments and not one of the full-length items. A Listening walk
      // written against that pool would have opened a legacy item and passed.
      // Seeding whole costs a few hundred rows in a throwaway database and
      // removes the question.
      const forPart = pool;
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
        // 🔴 VERIFIED, because the AI tasks require it. src/app/api/oet/submit
        // refuses Writing and Speaking for an unverified address BEFORE the
        // substance guard, so an unverified fixture user would make every AI
        // probe return 403 and a walk could not tell that apart from anything
        // else. Verifying is a real path a real learner takes.
        emailVerified: new Date(),
      },
    });

    const partAAll = items.filter((i) => i.taskType === PART_A);
    const { full: partAFull, legacy: partALegacy } = splitByRetireList(
      PART_A,
      partAAll,
      readRetireList(RETIRE_LIST[PART_A]),
      isFullLengthPartA,
      `${PART_A_MIN}-${PART_A_MAX} words over four texts and twenty questions`,
    );
    // The retire leaves exactly the full-length ones standing, and the server's
    // own floor is FLOOR. If that ever stopped being true the walk would prove
    // the retire safe on a bank the product would refuse to boot with.
    if (partAFull.length < FLOOR) {
      throw new Error(
        `[e2e] the Reading Part A retire would leave ${partAFull.length} item(s) standing; ` +
          `the server's own floor needs ${FLOOR}.`,
      );
    }
    /**
     * 🔴 THE WALK TAKES THE FIRST ITEM IT CAN ACTUALLY WALK, AND partAWalk ITSELF
     * DECIDES WHICH THOSE ARE.
     *
     * This was `partAFull[0]` until 7 September 2026, which is to say it was
     * whichever item the shape rule called full length and that happened to sort
     * first. On that day the fixture died on
     *
     *     Part A — Informed consent essentials: no short-answer question
     *
     * ⚠️ THAT WAS THE STALE SPLIT AGAIN AND NOT A CONTENT DEFECT, AND THE FIRST
     * VERSION OF THIS COMMENT SAID OTHERWISE. Measured: FIFTEEN Reading Part A
     * items carry no short-answer question — every free-text question a gap-fill
     * — and all fifteen are named in scripts/retire/reading-part-a-legacy.json.
     * Not one item the learner is left with is missing one. Three of the fifteen
     * also meet the 885-1009 law, which is why the shape rule handed them to the
     * walk as keepers; the retire list does not, and the retire list is right.
     *
     * The loop stays because `[0]` is not a choice, it is an accident of sort
     * order, and the accident is what broke. Anything passed over is NAMED on
     * stdout rather than skipped quietly.
     *
     * The candidate is chosen by RUNNING partAWalk, not by a second copy of its
     * requirements. A predicate written here could agree with partAWalk today and
     * drift from it tomorrow, and then the walk would be choosing its item by a
     * rule nobody maintains.
     */
    let partAItem: Prisma.OetItemCreateManyInput | undefined;
    let partA: PartAWalk | undefined;
    const partAUnwalkable: string[] = [];
    for (const candidate of partAFull) {
      try {
        partA = partAWalk(candidate);
        partAItem = candidate;
        break;
      } catch (e) {
        partAUnwalkable.push(`${candidate.title} — ${(e as Error).message}`);
      }
    }
    if (partAUnwalkable.length > 0) {
      console.log(
        `[e2e] ⚠️ ${partAUnwalkable.length} full-length Reading Part A item(s) the walk cannot ` +
          `answer, passed over:\n  ${partAUnwalkable.join("\n  ")}`,
      );
    }
    if (!partA || !partAItem) {
      throw new Error(
        `[e2e] not one of the ${partAFull.length} full-length Reading Part A items carries the ` +
          `four question shapes the walk answers:\n  ${partAUnwalkable.join("\n  ")}`,
      );
    }

    const partBAll = items.filter((i) => i.taskType === PART_B);
    const { full: partBFull, legacy: partBLegacy } = splitByRetireList(
      PART_B,
      partBAll,
      readRetireList(RETIRE_LIST[PART_B]),
      isFullLengthPartB,
      `${PART_B_MIN}-${PART_B_MAX} words`,
    );
    if (partBFull.length < FLOOR) {
      throw new Error(
        `[e2e] the Reading Part B retire would leave ${partBFull.length} item(s) standing; ` +
          `the server's own floor needs ${FLOOR}.`,
      );
    }

    const partCAll = items.filter((i) => i.taskType === PART_C);
    const { full: partCFull, legacy: partCLegacy } = splitByRetireList(
      PART_C,
      partCAll,
      readRetireList(RETIRE_LIST[PART_C]),
      isFullLengthPartC,
      `${PART_C_MIN}-${PART_C_MAX} words with eight questions of four options`,
    );
    if (partCFull.length < FLOOR) {
      throw new Error(
        `[e2e] the Reading Part C retire would leave ${partCFull.length} article(s) standing; ` +
          `the server's own floor needs ${FLOOR}.`,
      );
    }

    // ── the three Listening pools, chosen by the law ─────────────────────────
    const listeningAFull = items
      .filter((i) => i.taskType === "LISTENING_PART_A")
      .filter(isFullLengthListeningA);
    const listeningBFull = items
      .filter((i) => i.taskType === "LISTENING_PART_B")
      .filter((i) => isFullLengthListeningMcq(i, LISTENING_B_MIN, LISTENING_B_MAX, 1));
    const listeningCFull = items
      .filter((i) => i.taskType === "LISTENING_PART_C")
      .filter((i) => isFullLengthListeningMcq(i, LISTENING_C_MIN, LISTENING_C_MAX, 6));
    // 🔴 A CENSUS, NOT A BAR. `want` counts how many items MEET their law; the
    // law itself is above and is not touched here. It is exact rather than a
    // floor so that a bank which quietly loses a full-length item goes red, and
    // moving one of these numbers is meant to cost somebody a measurement.
    //
    // LISTENING_PART_A moved 13 -> 18 on 7 September 2026. FIVE items were
    // brought up to the 550-600 law by the verified bank of 6 September, and
    // gate:length's own ratchet then required their removal from LEGACY_SHORT
    // ("now meets the law — delete it from LEGACY_SHORT"). Measured, with the
    // word count each one now carries:
    //
    //     lis-a-f1-physiotherapy-consultation-lower-back-pain   560
    //     lis-a-f2-practice-nurse-asthma-review                 564
    //     lis-a-child-with-fever                                584
    //     lis-a-f3-physiotherapist-and-lower-back-pain          586
    //     lis-a-chest-pain-assessment                           595
    //
    // LEGACY_SHORT's LISTENING_PART_A section went 21 -> 16 across the same
    // commits, which is the same five and nothing else. The walk therefore has
    // MORE lawful consultations to choose from than it had, not fewer.
    //
    // Parts B and C moved by one each, on the same evidence and in the same
    // direction — one item apiece left LEGACY_SHORT by meeting its law:
    //
    //     LISTENING_PART_B  90 -> 91   lis-b-f1-discharge-concern            140 words (140-165)
    //     LISTENING_PART_C  15 -> 16   lis-c-a-multimodal-approach-to-...    784 words (780-880)
    //
    // LEGACY_SHORT: lis-b 33 -> 32, lis-c 21 -> 20. Same five-plus-two items,
    // no other movement, and no bound anywhere was touched to get here.
    for (const [part, pool, want] of [
      ["LISTENING_PART_A", listeningAFull, 18],
      ["LISTENING_PART_B", listeningBFull, 91],
      ["LISTENING_PART_C", listeningCFull, 16],
    ] as const) {
      if (pool.length !== want) {
        throw new Error(
          `[e2e] ${pool.length} full-length ${part} item(s) in the seed source, expected ${want}. ` +
            "A short item must never be walked as if it were one of the new ones.",
        );
      }
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
      partA,
      partAFullLengthTitles: partAFull.map((i) => i.title),
      partALegacyTitles: partALegacy.map((i) => i.title),
      partB: partBWalk(partBFull[0]),
      partC: partCWalk(partCFull[0]),
      partCFullLengthTitles: partCFull.map((i) => i.title),
      partCLegacyTitles: partCLegacy.map((i) => i.title),
      partBSecond: partBWalk(partBFull[1]),
      partBFullLengthTitles: partBFull.map((i) => i.title),
      partBLegacyTitles: partBLegacy.map((i) => i.title),
      listeningA: listeningAWalk(listeningAFull[0]),
      // Part B carries ONE question, so the key and a known-wrong option cannot
      // be walked on the same item: the second item takes the wrong option.
      listeningB: listeningMcqWalk(listeningBFull[0], "listening-part-b", false),
      listeningC: listeningMcqWalk(listeningCFull[0], "listening-part-c", true),
      writing: aiWalk(items, "WRITING_LETTER", "writing-letter"),
      speaking: aiWalk(items, "SPEAKING_ROLEPLAY", "speaking-roleplay"),
      listeningAFullLengthTitles: listeningAFull.map((i) => i.title),
      listeningBFullLengthTitles: listeningBFull.map((i) => i.title),
      listeningCFullLengthTitles: listeningCFull.map((i) => i.title),
    };
  } finally {
    await prisma.$disconnect();
  }
}
