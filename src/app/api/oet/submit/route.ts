// Unified submit endpoint for every OET task. The route does NOT branch on task
// type — it looks the handler up in the registry, runs it, turns the result into
// an honest 0–500 grade estimate, and persists. Card-first: EVERY task needs an
// active trial or subscription, objective ones included — objective scoring used
// to be free, which is what let the whole Listening and Reading bank be worked
// through without a card. The AI tasks (Writing letter, Speaking role-play) carry
// two further gates on top: a verified email, and the trial's 2-per-task-type
// evaluation cap. The Speaking role-play arrives as multipart audio, which is
// transcribed (Whisper) before scoring — after all gates, so a refused request
// costs nothing.

import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { getCurrentUser } from "@/lib/auth";
import { hasPaidAccess, isComped } from "@/lib/billing/plans";
import { trialAiAllowance } from "@/lib/billing/trial-limits";
import { isOwner } from "@/lib/auth/owner-check";
import { prisma } from "@/lib/prisma";
import { OET_HANDLERS } from "@/lib/oet/registry";
import { fractionToEstimate } from "@/lib/oet/scale";
import { transcribeAudio } from "@/lib/ai/openai";
import { checkBeforeTranscription, checkBeforeGrading } from "@/lib/oet/substance";
import { aiFeedbackBlockedByEmail } from "@/lib/billing/email-gate";
import { isPastDeadline } from "@/lib/oet/deadline";
import { track } from "@/lib/analytics/track";

export const runtime = "nodejs";

export async function POST(req: Request): Promise<NextResponse> {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Not authenticated" }, { status: 401 });
  }

  const contentType = req.headers.get("content-type") ?? "";
  let attemptId = "";
  let responseValue: unknown = {};
  let timeSpent = 0;
  let audio: { file: Blob; durationSeconds: number } | null = null;

  if (contentType.includes("multipart/form-data")) {
    const form = await req.formData();
    attemptId = String(form.get("attemptId") ?? "");
    timeSpent = Number(form.get("timeSpentSeconds") ?? 0);
    const f = form.get("audio");
    const dur = Number(form.get("durationSeconds") ?? 0);
    if (f instanceof Blob) {
      audio = { file: f, durationSeconds: Number.isFinite(dur) ? dur : 0 };
    }
  } else {
    let body: { attemptId?: unknown; response?: unknown; timeSpentSeconds?: unknown };
    try {
      body = (await req.json()) as typeof body;
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }
    attemptId = typeof body.attemptId === "string" ? body.attemptId : "";
    responseValue = body.response ?? {};
    timeSpent = typeof body.timeSpentSeconds === "number" ? body.timeSpentSeconds : 0;
  }

  if (!attemptId) {
    return NextResponse.json({ ok: false, error: "Missing attemptId" }, { status: 400 });
  }

  const attempt = await prisma.oetAttempt.findFirst({
    where: { id: attemptId, userId: user.id },
    include: { item: true },
  });
  if (!attempt) {
    return NextResponse.json({ ok: false, error: "Attempt not found" }, { status: 404 });
  }
  if (attempt.status === "SCORED") {
    return NextResponse.json({ ok: true, alreadyScored: true });
  }

  // 🔴 A CLOCK THAT ONLY EXISTS IN THE BROWSER IS DECORATION. The countdown used
  // to live entirely in OetComposer, so F5 handed the candidate a fresh one.
  // This is the same deadline the countdown now renders from, checked where it
  // cannot be reloaded away. Attempts created before the column existed carry
  // NULL and are never refused.
  if (isPastDeadline(attempt.deadlineAt)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Time is up for this exercise, so it can't be marked. Nothing has been " +
          "used up — start it again when you're ready.",
        reason: "PAST_DEADLINE",
      },
      { status: 422 },
    );
  }

  const handler = OET_HANDLERS[attempt.taskType];
  if (!handler) {
    return NextResponse.json(
      { ok: false, error: "This task is not available yet" },
      { status: 400 },
    );
  }

  // Card-first: ALL scoring needs a subscription, not just the AI-graded tasks.
  // Objective auto-marking used to be free and uncapped, which meant the whole
  // Listening and Reading bank could be worked through without ever adding a
  // card. The trial is the free tier now.
  if (!hasPaidAccess(user)) {
    // Demand meeting the wall. Fired HERE, where the refusal happens.
    track("paywall_blocked", { userId: user.id, taskType: attempt.taskType });
    return NextResponse.json(
      {
        ok: false,
        error: "Start your 7-day free trial to score this task.",
        upgradeUrl: "/pricing",
      },
      { status: 402 },
    );
  }

  // ...and a verified email. Paid-but-unverified was reaching Sonnet and Whisper:
  // an address nobody has proven they own could burn metered tokens on every
  // submit. Checked AFTER the paid gate so the 402 stays the first answer for a
  // free account, and BEFORE transcription so no unverified request costs money.
  // The predicate is shared with the banner that DESCRIBES this rule to the
  // learner — see src/lib/billing/email-gate.ts. A description that was its own
  // copy of the rule would be free to drift from it, and did.
  if (handler.mode === "AI" && aiFeedbackBlockedByEmail(user)) {
    return NextResponse.json(
      { ok: false, error: "Verify your email address before using AI feedback.", verifyUrl: "/account" },
      { status: 403 },
    );
  }

  // Trial cap on the metered surface. Checked AFTER the paid + verified gates
  // and BEFORE transcription, so a capped trial request costs nothing: no
  // Whisper call, no Sonnet call. Owner and comp bypass — they never had a
  // trial to limit.
  if (handler.mode === "AI") {
    const used = await prisma.oetAttempt.count({
      where: { userId: user.id, taskType: attempt.taskType, status: "SCORED" },
    });
    const allowance = trialAiAllowance({
      subscriptionStatus: user.subscriptionStatus,
      taskType: attempt.taskType,
      used,
      bypass: isOwner(user.email) || isComped(user),
    });
    if (!allowance.allowed) {
      // The moment to ask them to subscribe — a trial that has spent its AI.
      track("trial_cap_hit", {
        userId: user.id,
        taskType: attempt.taskType,
        limit: allowance.limit ?? 0,
      });
      return NextResponse.json(
        {
          ok: false,
          error: allowance.message,
          trial: { limit: allowance.limit, used: allowance.used, remaining: 0 },
          upgradeUrl: "/account",
        },
        { status: 402 },
      );
    }
  }

  // ── 🔴 SUBSTANCE BEFORE TOKENS ────────────────────────────────────────────
  //
  // MEASURED 2 Sep 2026, counting calls at the model boundary: an empty letter,
  // a whitespace-only letter, a zero-length recording and an empty transcript
  // each reached a paid model, wrote a cost-ledger row, and marked the attempt
  // SCORED. Four of six empty cases. The trial cap does not catch them —
  // trialAiAllowance() is UNCAPPED for any status that is not "trialing", so a
  // paying subscriber had nothing between them and the money.
  //
  // This runs AFTER the entitlement gates (money before tokens is unchanged)
  // and BEFORE transcribeAudio(), which is the first paid call on the Speaking
  // path. Returning here leaves the attempt IN_PROGRESS, so a learner who
  // submits blank by accident can still do the exercise properly.
  //
  // The rule itself is in src/lib/oet/substance.ts — one definition, no I/O.
  if (handler.mode === "AI") {
    const pre = checkBeforeTranscription({
      taskType: attempt.taskType,
      audio: audio ? { bytes: audio.file.size, durationSeconds: audio.durationSeconds } : null,
      response: responseValue,
    });
    if (!pre.ok) {
      return NextResponse.json(
        { ok: false, error: pre.message, reason: pre.reason },
        { status: 422 },
      );
    }
  }

  // Speaking: transcribe the uploaded audio before scoring.
  if (audio) {
    try {
      const transcript = await transcribeAudio({
        file: audio.file,
        filename: "speech.webm",
        durationSeconds: audio.durationSeconds,
        userId: user.id,
      });
      responseValue = { transcript };
    } catch (err) {
      console.error("[oet.submit] transcription failed:", err);
      return NextResponse.json(
        { ok: false, error: "Could not transcribe your recording. Try again." },
        { status: 500 },
      );
    }
  }

  // The second half of substance-before-tokens. Whisper can return an empty
  // string for a recording that was large enough to look real — the upload
  // check above cannot see that, and by here the transcription is already paid
  // for. The GRADING call is not, and this is where it is saved.
  if (handler.mode === "AI") {
    const post = checkBeforeGrading({ taskType: attempt.taskType, response: responseValue });
    if (!post.ok) {
      return NextResponse.json(
        { ok: false, error: post.message, reason: post.reason },
        { status: 422 },
      );
    }
  }

  let run;
  try {
    run = await handler.run({
      payload: attempt.item.payload,
      response: responseValue,
      userId: user.id,
      // The ITEM's profession, not the user's target — the case notes and the
      // role-play card belong to the item, and a user may practise outside
      // their own target profession.
      profession: attempt.item.profession,
      // Listening/Reading Part A look their authored accept-lists up by SLUG.
      // Never by title: a rename would then silently mark a correct answer wrong.
      slug: attempt.item.slug,
    });
  } catch (err) {
    console.error("[oet.submit] scoring failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not score this attempt. Try again in a moment." },
      { status: 500 },
    );
  }

  // OET scores each sub-test independently on the 0–500 scale with an A–E grade.
  const gradeEstimate = fractionToEstimate(run.fraction);
  const timeSpentSeconds =
    Number.isFinite(timeSpent) && timeSpent >= 0 ? Math.round(timeSpent) : 0;

  await prisma.oetAttempt.update({
    where: { id: attempt.id },
    data: {
      status: "SCORED",
      response: (responseValue ?? {}) as Prisma.InputJsonValue,
      pointsEarned: run.pointsEarned,
      pointsMax: run.pointsMax,
      gradeEstimate: gradeEstimate as unknown as Prisma.InputJsonValue,
      feedback: (run.feedback ?? Prisma.JsonNull) as Prisma.InputJsonValue,
      aiModel: run.telemetry?.aiModel ?? null,
      costCents: run.telemetry?.costCents ?? null,
      latencyMs: run.telemetry?.latencyMs ?? null,
      submittedAt: new Date(),
      timeSpentSeconds,
    },
  });

  // Activation. Fired AFTER the attempt is written SCORED — not when the
  // request arrived, and not when the grader returned. §J: at the actual point.
  track("exercise_submitted", {
    userId: user.id,
    taskType: attempt.taskType,
    subTest: attempt.subTest,
  });

  return NextResponse.json({ ok: true, gradeEstimate });
}
