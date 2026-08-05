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
import { prisma } from "@/lib/prisma";
import { synthesizeSpeech, synthesizeDialogue } from "@/lib/ai/openai";
import { AUDIO_DIR, audioFileName, audioKey } from "@/lib/oet/audio";

export const runtime = "nodejs";

// Every Listening payload (Part A/B/C) carries an audioScript; Part A also
// carries the two speakers, so we render it as an alternating-voice dialogue.
const audioPayloadSchema = z.object({
  audioScript: z.string().min(1),
  speakers: z.array(z.object({ role: z.string(), voice: z.string() })).optional(),
});

/** The rendered file for this script, or null if it was never rendered. */
async function prerendered(payload: z.infer<typeof audioPayloadSchema>): Promise<Buffer | null> {
  const key = audioKey(payload);
  try {
    return await readFile(join(process.cwd(), AUDIO_DIR, audioFileName(key)));
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
  if (!hasPaidAccess(user)) {
    return NextResponse.json(
      { ok: false, error: "Start your 7-day free trial to play this audio.", upgradeUrl: "/pricing" },
      { status: 402 },
    );
  }

  const attempt = await prisma.oetAttempt.findFirst({
    where: { id: attemptId, userId: user.id },
    include: { item: true },
  });
  if (!attempt || attempt.subTest !== "LISTENING") {
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  }

  const parsed = audioPayloadSchema.safeParse(attempt.item.payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Bad item" }, { status: 500 });
  }

  const file = await prerendered(parsed.data);
  if (file) {
    return new Response(new Uint8Array(file), {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": String(file.length),
        // Pre-rendered audio is identical for every learner, but it is still
        // paid content behind an ownership check — private, not shared cache.
        "Cache-Control": "private, max-age=3600",
        "X-Audio-Source": "prerendered",
      },
    });
  }

  console.warn(
    `[oet.audio] no rendered file for item ${attempt.item.id} (${attempt.item.title}) — falling back to paid TTS`,
  );
  try {
    const speakers = parsed.data.speakers ?? [];
    const audio =
      speakers.length >= 2
        ? await synthesizeDialogue(parsed.data.audioScript, speakers, user.id)
        : await synthesizeSpeech(parsed.data.audioScript, user.id, speakers[0]?.voice);
    return new Response(audio, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "private, no-store",
        "X-Audio-Source": "openai-tts",
      },
    });
  } catch (err) {
    console.error("[oet.audio] tts failed:", err);
    return NextResponse.json({ ok: false, error: "Audio unavailable" }, { status: 500 });
  }
}
