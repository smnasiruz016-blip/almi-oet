/**
 * 🔴 THE RENDER SPEED MUST BE IN THE CONTENT KEY, AND THIS IS WHY.
 *
 * `audioKey()` names the file on disk. The renderer skips any item whose file is
 * already there, and the runtime route serves whatever that name resolves to. So
 * the key is the ONLY thing that decides whether a settings change reaches a
 * learner or is silently swallowed by the cache.
 *
 * Until 9 September 2026 the material was `{v, rate, kbps, segments}` — the
 * encoder settings were in it, and the SPEAKING RATE was not. That is the trap
 * this test exists to keep shut: change the speed with `lengthScale` left out of
 * the material and every key is unchanged, every filename is unchanged, the
 * renderer finds its own cache, and the old audio plays for ever. No error, no
 * failing gate, nothing to notice. `audio.ts`'s own comment had warned of exactly
 * this — "change one and every file re-renders rather than silently serving audio
 * that no longer matches the settings" — while the field was simply missing.
 *
 * ── WHY A GOLDEN HASH, WHICH IS NORMALLY A BAD IDEA ─────────────────────────
 *
 * `audioKey` takes only a payload; the settings come from module constants, so a
 * test cannot vary them and watch the key move. A frozen hash is the one thing
 * that does fail when the material's SHAPE changes — remove `lengthScale`, or
 * change any constant that belongs in the key, and this goes red.
 *
 * ⚠️ SO READ THE FAILURE BEFORE CHANGING THE NUMBER. A red here means one of:
 * the speed changed (intended — every file must then be re-rendered, and A7 will
 * fail until they are), the encoder settings changed (same), or something was
 * dropped from the material (a defect). Updating the constant below without
 * knowing which is how the cache silently keeps stale audio.
 */
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import {
  AUDIO_BITRATE_KBPS,
  AUDIO_LENGTH_SCALE,
  AUDIO_SAMPLE_RATE,
  audioFileName,
  audioKey,
} from "@/lib/oet/audio";

/** A tiny fixed payload. Ours, invented for this test, and deliberately dull. */
const PAYLOAD = {
  audioScript: "Nurse: Good morning.\nPatient: Good morning.",
  speakers: [
    { role: "Nurse", voice: "alloy" },
    { role: "Patient", voice: "onyx" },
  ],
};

describe("audioKey — the cache cannot outlive a settings change", () => {
  it("is stable for the same payload", () => {
    expect(audioKey(PAYLOAD as never)).toBe(audioKey(PAYLOAD as never));
  });

  it("is a 16-character hex name", () => {
    expect(audioKey(PAYLOAD as never)).toMatch(/^[0-9a-f]{16}$/);
    expect(audioFileName(audioKey(PAYLOAD as never))).toMatch(/^[0-9a-f]{16}\.mp3$/);
  });

  it("🔴 pins the key, so nothing can leave the material unnoticed", () => {
    // see the header before touching this value
    expect(audioKey(PAYLOAD as never)).toBe("7307294a42572ada");
  });

  it("changes when the script changes", () => {
    const other = { ...PAYLOAD, audioScript: PAYLOAD.audioScript + " Take a seat." };
    expect(audioKey(other as never)).not.toBe(audioKey(PAYLOAD as never));
  });

  it("changes when a speaker's voice changes", () => {
    const other = {
      ...PAYLOAD,
      speakers: [
        { role: "Nurse", voice: "onyx" },
        { role: "Patient", voice: "alloy" },
      ],
    };
    expect(audioKey(other as never)).not.toBe(audioKey(PAYLOAD as never));
  });

  it("🔴 carries the render speed in its material, not only in the renderer", () => {
    // The behavioural half is the pinned hash above. This half says WHICH field,
    // so a failure names the thing that was dropped instead of leaving the next
    // person to diff two hashes.
    const src = readFileSync("src/lib/oet/audio.ts", "utf8");
    const material = src.slice(src.indexOf("const material = JSON.stringify({"));
    const body = material.slice(0, material.indexOf("});"));
    for (const field of ["rate:", "kbps:", "lengthScale:", "segments:"]) {
      expect(body, `${field} is not in audioKey's material`).toContain(field);
    }
  });

  it("the renderer passes the SAME constant it hashes", () => {
    // a literal in the renderer would let the voice speak at one speed while the
    // key claimed another, and the cache would then be right about a wrong file
    const renderer = readFileSync("scripts/render-audio.mts", "utf8");
    expect(renderer).toContain("--length-scale");
    expect(renderer).toContain("String(AUDIO_LENGTH_SCALE)");
    expect(renderer).not.toMatch(/"--length-scale",\s*"1\./);
  });

  it("the constants that belong in the key are the ones this test knows about", () => {
    expect(AUDIO_SAMPLE_RATE).toBe(22050);
    expect(AUDIO_BITRATE_KBPS).toBe(48);
    expect(AUDIO_LENGTH_SCALE).toBe(1.5);
  });
});
