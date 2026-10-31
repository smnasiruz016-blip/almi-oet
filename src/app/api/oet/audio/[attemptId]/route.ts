// Listening audio for an attempt. Serves the PRE-RENDERED file when one exists
// and falls back to on-demand TTS only for a script that has never been
// rendered. Audio is generated server-side either way, so the transcript (which
// carries the answers) never reaches the client. Ownership-scoped to the
// requesting user's attempt.
//
// Pre-rendered audio is produced offline by scripts/render-audio.ts with Piper
// and committed to the repo. The fallback is the previous behaviour and still
// bills OpenAI per play, so a miss is a cost event, not just a slow path — it is
// logged as one.

import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";
import { hasPaidAccess } from "@/lib/billing/plans";
import { isTasteActive } from "@/lib/billing/taste";
import { unlockLabel } from "@/lib/billing/offer";
import { prisma } from "@/lib/prisma";
import { synthesizeSpeech, synthesizeDialogue } from "@/lib/ai/openai";
import { AUDIO_DIR, audioFileName, audioKey, stripLeadingLabel } from "@/lib/oet/audio";
import { serveAudio } from "@/lib/oet/serve-audio";
import { listeningAudioPolicy } from "@/lib/oet/audio-policy";
import { onePassDecision, PLAYED_ONCE_MESSAGE } from "@/lib/oet/one-pass";

export const runtime = "nodejs";

// Every Listening payload (Part A/B/C) carries an audioScript; Part A also
// carries the two speakers, so we render it as an alternating-voice dialogue.
const audioPayloadSchema = z.object({
  audioScript: z.string().min(1),
  speakers: z.array(z.object({ role: z.string(), voice: z.string() })).optional(),
});

if (AUDIO_DIR !== "audio/oet") throw new Error(`AUDIO_DIR is ${AUDIO_DIR} but the audio route reads the literal "audio/oet"`);

/** The rendered file for this script, or null if it was never rendered. */
async function prerendered(payload: z.infer<typeof audioPayloadSchema>): Promise<Buffer | null> {
  const key = audioKey(payload);
  try {
    // The literal "audio/oet" (= AUDIO_DIR, asserted below) is what lets the tracer narrow this read to that folder. With the imported
    // constant it widened to the WHOLE project — scripts/, docs/, tests/, 23 MiB — and took this function to 254.33 MiB of Vercel's
    // 250 MiB limit (S1–S6 PR, 31 Oct 2026). Measured in .next/server/app/api/oet/audio/[attemptId]/route.js.nft.json.
    return await readFile(join(process.cwd(), "audio/oet", audioFileName(key)));
  } catch {
    return null;
  }
}

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ attemptId: string }> },
): Promise<Response> {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Not authenticated" }, { status: 401 });
  }
  const { attemptId } = await ctx.params;

  // Card-first: the audio IS the Listening content. Ownership alone used to be
  // enough, so a free account holding an attempt could stream the whole bank.
  // Pre-rendering it with Piper removed the marginal cost, not the paywall.
  // 48-hour taste (31 Oct 2026): an unpaid learner hears only the recordings of
  // a PRACTICE set the taste door opened, while the 48 hours run.
  const paid = hasPaidAccess(user);
  const locked = () =>
    NextResponse.json(
      { ok: false, error: `This recording is part of the full plan. ${unlockLabel()}.`, upgradeUrl: "/pricing" },
      { status: 402 },
    );
  if (!paid && !isTasteActive(user)) return locked();

  const attempt = await prisma.oetAttempt.findFirst({
    where: { id: attemptId, userId: user.id },
    include: { item: true, session: { select: { mode: true } } },
  });
  if (!paid && attempt?.session?.mode !== "PRACTICE_SET") return locked();
  if (!attempt || attempt.subTest !== "LISTENING") {
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  }

  // RR-345 (D1): a mock recording is heard once — decided here, on the server, from the session it belongs to
  const onePass = attempt.sessionId ? listeningAudioPolicy(attempt.session).onePass : listeningAudioPolicy(null).onePass;
  const decision = onePassDecision({ onePass, playedAt: attempt.audioPlayedAt, now: Date.now() });
  if (!decision.serve) {
    return NextResponse.json({ ok: false, error: PLAYED_ONCE_MESSAGE, played: true }, { status: 410, headers: { "Cache-Control": "no-store" } });
  }
  if (decision.markPlayed) {
    // only the first stamp counts: a second request racing this one leaves the earlier time
    await prisma.oetAttempt.updateMany({ where: { id: attempt.id, audioPlayedAt: null }, data: { audioPlayedAt: new Date() } });
  }

  const parsed = audioPayloadSchema.safeParse(attempt.item.payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Bad item" }, { status: 500 });
  }

  const file = await prerendered(parsed.data);
  if (file) return serveAudio(file, _req, { noStore: onePass });

  console.warn(
    `[oet.audio] no rendered file for item ${attempt.item.id} (${attempt.item.title}) — falling back to paid TTS`,
  );
  try {
    const speakers = parsed.data.speakers ?? [];
    const audio =
      speakers.length >= 2
        ? await synthesizeDialogue(parsed.data.audioScript, speakers, user.id)
        : // 🔴 stripLeadingLabel, not the raw script. A single-speaker item takes
          // this branch, and its script opens "Presenter: …" — which was spoken
          // out loud. synthesizeDialogue's own fallback was fixed on 3 September
          // 2026; this call bypasses it, so it needs the same rule. Both paths
          // now speak the same words as the offline renderer.
          await synthesizeSpeech(
            stripLeadingLabel(parsed.data.audioScript),
            user.id,
            speakers[0]?.voice,
          );
    return new Response(audio, {
      headers: {
        "Content-Type": "audio/mpeg",
        // Not range-served: this body is synthesised per request, so a second
        // range request would re-synthesise and re-bill rather than seek.
        "Accept-Ranges": "none",
        "Cache-Control": "private, no-store",
        "X-Audio-Source": "openai-tts",
      },
    });
  } catch (err) {
    console.error("[oet.audio] tts failed:", err);
    return NextResponse.json({ ok: false, error: "Audio unavailable" }, { status: 500 });
  }
}
