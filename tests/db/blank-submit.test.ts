/**
 * gate:no-tokens-for-nothing — DOES AN EMPTY SUBMISSION REACH A PAID MODEL?
 *
 * PR #21 measured a blank submit on Reading Part B (accepted, HTTP 200, scored
 * 0) and could not say anything about Writing or Speaking. Those are the two
 * that cost money: AI/API is roughly $250 a month of Nasir's own money, the
 * trial cap does not apply to a paying subscriber (`trialAiAllowance` returns
 * UNCAPPED for any status that is not "trialing"), and PR #21 has just put the
 * next exercise one button away, repeatedly.
 *
 * ── HOW THIS MEASURES, AND WHY NOT BY CALLING A MODEL ───────────────────────
 *
 * 🔴 NO REAL MODEL IS EVER CALLED. The paid boundaries are stubbed with
 * COUNTERS and the counts are asserted:
 *
 *   client.messages.create   the Anthropic call, in evaluateWritingLetter and
 *                            evaluateSpeakingRoleplay
 *   transcribeAudio          the Whisper call, in the submit route
 *
 * Everything else is real: the real POST handler, the real registry dispatch,
 * the real evaluators, the real Zod schemas, the real Prisma against a real
 * (throwaway) PostgreSQL. The stub sits at the last possible point before money
 * is spent, so a call that reaches it is a call that would have been paid for.
 *
 * 🔴 IT COUNTS CALLS, NOT ERRORS. A gate that asserted "the request failed"
 * would pass just as happily if the model had been called and the failure came
 * afterwards — the money is spent at the call, not at the response.
 *
 * ── THE THREE QUESTIONS ─────────────────────────────────────────────────────
 *
 * ① Population: every AI-graded task type is enumerated from OET_TASKS by
 *    `scoringMode === "AI"`, not from a list typed here, and asserted non-empty.
 * ② Every assertion can fail: each empty case is paired with a CONTROL that
 *    submits real substance through the same code path and asserts the counters
 *    go UP. A stub that silently stopped being wired would fail the control.
 * ③ The expected value: the counts are literals — 0 for empty, 1 for the
 *    control — and that is the point. They are not read from the code under
 *    test; if they were, the gate would agree with whatever it did.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import type { OetTaskType } from "@prisma/client";

// ── the counters ────────────────────────────────────────────────────────────
type ModelCall = { model: string; system: string; user: string };
const modelCalls: ModelCall[] = [];
const transcriptionCalls: { bytes: number; durationSeconds: number }[] = [];

/** A feedback object that satisfies BOTH evaluators' Zod schemas. Zod objects
 *  are non-strict by default, so the union of the two shapes parses as either.
 *  It exists so the flow can COMPLETE and the test can see what was stored —
 *  a stub that threw would hide the "what was stored" column. */
const STUB_FEEDBACK = {
  purpose: "limited",
  content: "limited",
  concisenessAndClarity: "limited",
  genreAndStyle: "limited",
  organisationAndLayout: "limited",
  language: "limited",
  intelligibility: "limited",
  fluency: "limited",
  appropriatenessOfLanguage: "limited",
  resourcesOfGrammarAndExpression: "limited",
  relationshipBuilding: "limited",
  understandingPatientPerspective: "limited",
  providingStructure: "limited",
  informationGathering: "limited",
  informationGiving: "limited",
  strengths: [],
  improvements: [],
  overallComment: "stubbed by the measurement harness",
};

vi.mock("@/lib/ai/anthropic-client", async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>;
  return {
    ...actual,
    // recordCost / recordTranscriptionCost stay REAL: they write the ledger to
    // the throwaway database, which is part of "what was stored".
    getAnthropicClient: () => ({
      messages: {
        create: async (args: {
          model: string;
          system: { text: string }[];
          messages: { content: string }[];
        }) => {
          modelCalls.push({
            model: args.model,
            system: args.system?.[0]?.text ?? "",
            user: args.messages?.[0]?.content ?? "",
          });
          return {
            content: [{ type: "text", text: JSON.stringify(STUB_FEEDBACK) }],
            usage: {
              input_tokens: 1200,
              output_tokens: 400,
              cache_read_input_tokens: 0,
              cache_creation_input_tokens: 0,
            },
          };
        },
      },
    }),
  };
});

vi.mock("@/lib/ai/openai", () => ({
  transcribeAudio: async (args: { file: Blob; durationSeconds: number }) => {
    transcriptionCalls.push({
      bytes: args.file?.size ?? 0,
      durationSeconds: args.durationSeconds,
    });
    // Whisper on silence returns empty or near-empty text. Returning "" is the
    // honest stub for a zero-length recording.
    return args.file && args.file.size > 0 ? "Hello, I understand your concern." : "";
  },
}));

// The signed-in learner. Set in beforeAll from the row actually written to the
// database, so hasPaidAccess() and trialAiAllowance() run on real values.
let CURRENT_USER: Record<string, unknown> | null = null;
vi.mock("@/lib/auth", () => ({
  getCurrentUser: async () => CURRENT_USER,
  requireUser: async () => CURRENT_USER,
}));

const { prisma } = await import("@/lib/prisma");
const { POST } = await import("@/app/api/oet/submit/route");
const { OET_TASKS } = await import("@/lib/oet/registry");
const { GEN_ITEMS } = await import("../../scripts/seed/gen/index");

const AI_TASKS = Object.values(OET_TASKS).filter((t) => t.scoringMode === "AI");

const ITEM_ID: Partial<Record<OetTaskType, string>> = {};
let userId = "";

beforeAll(async () => {
  // One real item per AI task type, taken from the seed source so the payload
  // shapes and the prompts are the ones production serves.
  for (const def of AI_TASKS) {
    const seed = (GEN_ITEMS as Record<string, unknown>[]).find(
      (i) => i.taskType === def.taskType,
    );
    if (!seed) throw new Error(`no seed item for ${def.taskType}`);
    const created = await prisma.oetItem.create({ data: seed as never });
    ITEM_ID[def.taskType] = created.id;
  }

  // 🔴 A PAYING, NON-TRIAL SUBSCRIBER — the account the brief is worried about.
  // `active` (not `trialing`) means trialAiAllowance() returns UNCAPPED, so
  // nothing but an emptiness check stands between this user and the model.
  // emailVerified is set because the route refuses AI tasks without it.
  const user = await prisma.user.create({
    data: {
      email: `measure-${Date.now()}@almioet.invalid`,
      passwordHash: "not-used-getCurrentUser-is-stubbed",
      emailVerified: new Date(),
      subscriptionStatus: "active",
      subscriptionPlan: "pro_monthly",
      subscriptionCurrentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      targetProfession: "NURSING",
    },
  });
  userId = user.id;
  CURRENT_USER = user as unknown as Record<string, unknown>;
});

afterAll(async () => {
  await prisma.$disconnect();
});

beforeEach(() => {
  modelCalls.length = 0;
  transcriptionCalls.length = 0;
});

/** A fresh IN_PROGRESS attempt — a SCORED one short-circuits the route. */
async function freshAttempt(taskType: OetTaskType): Promise<string> {
  const a = await prisma.oetAttempt.create({
    data: {
      userId,
      itemId: ITEM_ID[taskType]!,
      subTest: OET_TASKS[taskType].subTest,
      taskType,
      status: "IN_PROGRESS",
    },
  });
  return a.id;
}

type Outcome = {
  status: number;
  body: Record<string, unknown>;
  modelCalls: number;
  transcriptionCalls: number;
  /** The attempt's status AFTER the request — a refusal must not consume it. */
  attemptStatus: string;
  ledgerRows: number;
};

async function submitJson(taskType: OetTaskType, response: unknown): Promise<Outcome> {
  const attemptId = await freshAttempt(taskType);
  const ledgerBefore = await prisma.aICostLedger.count({ where: { userId } });
  const res = await POST(
    new Request("http://localhost/api/oet/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ attemptId, response, timeSpentSeconds: 5 }),
    }),
  );
  return finish(res, attemptId, ledgerBefore);
}

async function submitMultipart(
  taskType: OetTaskType,
  audio: Blob | null,
  durationSeconds: number,
): Promise<Outcome> {
  const attemptId = await freshAttempt(taskType);
  const ledgerBefore = await prisma.aICostLedger.count({ where: { userId } });
  const form = new FormData();
  form.append("attemptId", attemptId);
  form.append("timeSpentSeconds", "5");
  form.append("durationSeconds", String(durationSeconds));
  if (audio) form.append("audio", audio, "speech.webm");
  const res = await POST(
    new Request("http://localhost/api/oet/submit", { method: "POST", body: form }),
  );
  return finish(res, attemptId, ledgerBefore);
}

async function finish(res: Response, attemptId: string, ledgerBefore: number): Promise<Outcome> {
  const body = (await res.json()) as Record<string, unknown>;
  const attempt = await prisma.oetAttempt.findUnique({ where: { id: attemptId } });
  const ledgerAfter = await prisma.aICostLedger.count({ where: { userId } });
  return {
    status: res.status,
    body,
    modelCalls: modelCalls.length,
    transcriptionCalls: transcriptionCalls.length,
    attemptStatus: attempt?.status ?? "GONE",
    ledgerRows: ledgerAfter - ledgerBefore,
  };
}

// ── the measurement table, printed whatever the assertions do ───────────────
const TABLE: {
  task: string;
  body: string;
  model: number;
  transcription: number;
  http: number;
  stored: string;
}[] = [];

function record(task: string, label: string, o: Outcome) {
  TABLE.push({
    task,
    body: label,
    model: o.modelCalls,
    transcription: o.transcriptionCalls,
    http: o.status,
    stored: `attempt ${o.attemptStatus}, ${o.ledgerRows} ledger row(s)`,
  });
}

/**
 * 🔴 THE TABLE IS AN ARTEFACT, NOT A LOG LINE.
 *
 * The first version printed with console.log from afterAll. Vitest swallows
 * hook output on a PASSING run, so the table appeared only when the gate was
 * red — exactly backwards for something whose whole job is to state a number.
 *
 * It is written to docs/measurements/blank-submit.md and committed, so the
 * counts are under version control: if a change ever puts a model call back on
 * an empty submission, the diff says so in words as well as failing the gate.
 */
const REPORT = join(process.cwd(), "docs", "measurements", "blank-submit.md");

afterAll(() => {
  const header = [
    "# Blank submit, counted at the model boundary",
    "",
    "<!-- GENERATED by tests/db/blank-submit.test.ts via `npm run gate:no-tokens-for-nothing`.",
    "     Do not edit by hand — re-run the gate. NO REAL MODEL IS EVER CALLED: the",
    "     Anthropic client and transcribeAudio are replaced with counters, and the",
    "     database is a throwaway PostgreSQL on loopback. -->",
    "",
    "| task | body | model calls | transcription calls | HTTP | what was stored |",
    "| --- | --- | --- | --- | --- | --- |",
  ];
  const rows = TABLE.map(
    (r) => `| ${r.task} | ${"`"}${r.body}${"`"} | ${r.model} | ${r.transcription} | ${r.http} | ${r.stored} |`,
  );
  const out = [...header, ...rows, ""].join("\n");
  mkdirSync(dirname(REPORT), { recursive: true });
  writeFileSync(REPORT, out, "utf8");
  // process.stdout.write, not console.log: vitest intercepts the latter in hooks.
  process.stdout.write(`\n${out}\n`);
});

describe("the population this gate covers", () => {
  it("is every AI-graded task type, and it is not empty", () => {
    expect(AI_TASKS.length).toBeGreaterThan(0);
    for (const t of AI_TASKS) expect(ITEM_ID[t.taskType]).toBeTruthy();
  });

  it("the learner is entitled, verified, and NOT on a trial — so nothing else can refuse", async () => {
    const { hasPaidAccess } = await import("@/lib/billing/plans");
    const { trialAiAllowance } = await import("@/lib/billing/trial-limits");
    expect(hasPaidAccess(CURRENT_USER as never)).toBe(true);
    for (const t of AI_TASKS) {
      const allowance = trialAiAllowance({
        subscriptionStatus: (CURRENT_USER as { subscriptionStatus: string }).subscriptionStatus,
        taskType: t.taskType,
        used: 999,
        bypass: false,
      });
      // Uncapped even at 999 used: a paying subscriber has no ceiling here.
      expect(allowance.allowed).toBe(true);
    }
  });
});

describe("WRITING — a letter with no substance", () => {
  it("CONTROL: a real letter DOES reach the model (so a 0 below means something)", async () => {
    const o = await submitJson("WRITING_LETTER", {
      text: "Dear Dr Smith, I am writing to refer Mrs Jones, a 68-year-old woman who attended today with worsening shortness of breath over the past week. Her observations were stable. I would be grateful for your assessment. Yours sincerely, Nurse.",
    });
    record("Writing", "a real letter (control)", o);
    expect(o.modelCalls).toBe(1);
    expect(o.status).toBe(200);
    expect(o.attemptStatus).toBe("SCORED");
  });

  it("empty text spends nothing", async () => {
    const o = await submitJson("WRITING_LETTER", { text: "" });
    record("Writing", '{ text: "" }', o);
    expect(o.modelCalls).toBe(0);
    expect(o.transcriptionCalls).toBe(0);
  });

  it("whitespace-only text spends nothing", async () => {
    const o = await submitJson("WRITING_LETTER", { text: "   \n\t  " });
    record("Writing", '{ text: "   " }', o);
    expect(o.modelCalls).toBe(0);
    expect(o.transcriptionCalls).toBe(0);
  });

  it("a refused letter does NOT consume the attempt", async () => {
    const attemptId = await freshAttempt("WRITING_LETTER");
    await POST(
      new Request("http://localhost/api/oet/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attemptId, response: { text: "" }, timeSpentSeconds: 1 }),
      }),
    );
    const after = await prisma.oetAttempt.findUnique({ where: { id: attemptId } });
    // Still doable. A learner who submits blank by accident must be able to
    // come back and do that exercise properly.
    expect(after?.status).toBe("IN_PROGRESS");
  });
});

describe("SPEAKING — a recording with no substance", () => {
  it("CONTROL: real audio DOES reach transcription and the model", async () => {
    const audio = new Blob([new Uint8Array(4096).fill(7)], { type: "audio/webm" });
    const o = await submitMultipart("SPEAKING_ROLEPLAY", audio, 45);
    record("Speaking", "real audio, 45s (control)", o);
    expect(o.transcriptionCalls).toBe(1);
    expect(o.modelCalls).toBe(1);
    expect(o.status).toBe(200);
  });

  it("an empty multipart body spends nothing", async () => {
    const o = await submitMultipart("SPEAKING_ROLEPLAY", null, 0);
    record("Speaking", "multipart, no audio field", o);
    expect(o.modelCalls).toBe(0);
    expect(o.transcriptionCalls).toBe(0);
  });

  it("a zero-length recording spends nothing", async () => {
    const audio = new Blob([], { type: "audio/webm" });
    const o = await submitMultipart("SPEAKING_ROLEPLAY", audio, 0);
    record("Speaking", "zero-length audio, 0s", o);
    expect(o.transcriptionCalls).toBe(0);
    expect(o.modelCalls).toBe(0);
  });

  it("an empty transcript posted as JSON spends nothing", async () => {
    // The API accepts JSON as well as multipart, so this path skips Whisper and
    // would otherwise walk straight into the grader.
    const o = await submitJson("SPEAKING_ROLEPLAY", { transcript: "" });
    record("Speaking", '{ transcript: "" } as JSON', o);
    expect(o.modelCalls).toBe(0);
  });

  it("a refused recording does NOT consume the attempt", async () => {
    const attemptId = await freshAttempt("SPEAKING_ROLEPLAY");
    const form = new FormData();
    form.append("attemptId", attemptId);
    form.append("durationSeconds", "0");
    form.append("audio", new Blob([], { type: "audio/webm" }), "speech.webm");
    await POST(new Request("http://localhost/api/oet/submit", { method: "POST", body: form }));
    const after = await prisma.oetAttempt.findUnique({ where: { id: attemptId } });
    expect(after?.status).toBe("IN_PROGRESS");
  });
});
