/**
 * LISTENING AUDIO GATE — `npm run gate:audio` (exit 1 on any breach).
 *
 * WHAT G5 ALREADY DID, AND WHY IT WAS NOT ENOUGH.
 *
 * G5 in scripts/gates/run.ts asserts `existsSync(file)` for every Listening
 * item. It has been green throughout — and on 2026-09-01 a learner opened a live
 * Part A item, the player ran through to "Played", and no voice came out. A file
 * that exists is not audio. A zero-byte file exists. A truncated file exists. A
 * file of digital silence exists, and it plays perfectly: it ends, it fires
 * `onended`, the button says "Played", and the learner has lost the item.
 *
 * So this gate opens every file and reads what is inside it:
 *
 *   A1  every Listening item resolves to a file (the same check G5 makes)
 *   A2  the file parses as MP3 and contains real frames
 *   A3  the encoding is the one the key promises
 *   A4  the audio is long enough to be a consultation, not a click
 *   A5  the audio is not silence
 *   A6  no segment SPEAKS a speaker label
 *
 * ── A6 · WHY A SIXTH CHECK WAS ADDED ON 3 SEPTEMBER 2026 ────────────────────
 *
 * A1-A5 open the file and ask whether it is real audio. None of them asks what
 * the audio SAYS. On 3 September, measuring the 103 new Listening items through
 * `segmentsFor` — the renderer's own function, rather than through
 * `splitDialogue` — showed that a SINGLE-SPEAKER script fell to a fallback that
 * spoke the whole script, label and all. Twenty-two live items already begin by
 * reading "Manager:", "Doctor:", "Nurse A:" or "Speaker:" out loud, and three of
 * the new extracts would have joined them.
 *
 * A6 reads the segments the renderer will speak and fails if one starts with a
 * label. It runs through `segmentsFor`, so it is checking the real path and not
 * a description of it — remove `stripLeadingLabel` from that function and this
 * check goes red, which is how it was proved.
 *
 * ── HOW "NOT SILENCE" IS MEASURED WITHOUT A DECODER ─────────────────────────
 *
 * There is no ffmpeg on the build machine and adding one to CI to decode 36
 * minutes of audio on every push is not worth it. But full decoding is not
 * needed to tell speech from silence.
 *
 * These are CBR files: a silent frame occupies exactly as many bytes as a loud
 * one, and the encoder fills it with zeros. So the share of frames whose main
 * data is almost entirely zero bytes separates the two cleanly.
 *
 * THE THRESHOLD WAS MEASURED, NOT INVENTED. Across all 75 shipped files on
 * 2026-09-01, the share of near-all-zero frames was 0.0000 — every file, without
 * exception. The limit below is 0.50, which is not a tuned value but a vast
 * margin: a file would have to be half digital silence before it tripped. A
 * fully silent file scores 1.0. Verified by sabotage in both directions.
 *
 * ⚠️ WHAT THIS GATE STILL DOES NOT PROVE. It reads the bytes in this repo. It
 * says nothing about what the deployed route serves, and nothing about whether a
 * browser can decode it. Those are different failures and they need different
 * evidence — see the PR.
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { GEN_ITEMS } from "../seed/gen/index";
import { AUDIO_DIR, audioFileName, audioKey, segmentsFor } from "../../src/lib/oet/audio";

// ── Hand-typed expectations. Never read from src/lib/oet/audio.ts, so a change
// there cannot quietly redefine what "correct" means. If a deliberate re-encode
// happens, these move by hand, in the same edit, or the gate goes red. ────────
const EXPECT_MPEG = "MPEG2"; // 22050 Hz is below MPEG1's range, so Layer III here is MPEG2
const EXPECT_LAYER = "III";
const EXPECT_RATE_HZ = 22050;
const EXPECT_KBPS = 48;
const EXPECT_MODE = "mono";
const MIN_BYTES = 2048;
const MIN_SECONDS = 3.0; // no real consultation is under three seconds
const MAX_QUIET_SHARE = 0.5; // measured 0.0000 on every shipped file
const MAX_JUNK_BYTES = 256; // measured 0 on every shipped file
const QUIET_FRAME_ZERO_RATIO = 0.95;

const MPEG2_LAYER3_BITRATES = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0];
const MPEG1_LAYER3_BITRATES = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0];
const SAMPLE_RATES: Record<number, number[]> = {
  3: [44100, 48000, 32000], // MPEG1
  2: [22050, 24000, 16000], // MPEG2
  0: [11025, 12000, 8000], // MPEG2.5
};
const CHANNEL_MODES = ["stereo", "joint", "dual", "mono"];

type Probe = {
  bytes: number;
  frames: number;
  seconds: number;
  quietShare: number;
  junkBytes: number;
  mpeg: string;
  layer: string;
  rateHz: number;
  kbps: number;
  mode: string;
};

/** Walk MP3 frame headers. No decoding, no dependency. */
function probeMp3(buf: Buffer): Probe {
  let i = 0;
  // Skip an ID3v2 tag if present (syncsafe size).
  if (buf.length > 10 && buf[0] === 0x49 && buf[1] === 0x44 && buf[2] === 0x33) {
    i = 10 + (((buf[6] & 0x7f) << 21) | ((buf[7] & 0x7f) << 14) | ((buf[8] & 0x7f) << 7) | (buf[9] & 0x7f));
  }
  let frames = 0;
  let samples = 0;
  let junk = 0;
  let quiet = 0;
  let first: { mpeg: string; kbps: number; rateHz: number; mode: string } | null = null;

  while (i + 4 <= buf.length) {
    if (buf[i] !== 0xff || (buf[i + 1] & 0xe0) !== 0xe0) {
      i++;
      junk++;
      continue;
    }
    const verBits = (buf[i + 1] >> 3) & 0x03; // 3=MPEG1, 2=MPEG2, 0=MPEG2.5, 1=reserved
    const layerBits = (buf[i + 1] >> 1) & 0x03; // 1 = Layer III
    const brIdx = (buf[i + 2] >> 4) & 0x0f;
    const srIdx = (buf[i + 2] >> 2) & 0x03;
    const padding = (buf[i + 2] >> 1) & 0x01;
    const modeBits = (buf[i + 3] >> 6) & 0x03;

    if (layerBits !== 1 || srIdx === 3 || brIdx === 0 || brIdx === 15 || verBits === 1) {
      i++;
      junk++;
      continue;
    }
    const isMpeg1 = verBits === 3;
    const kbps = (isMpeg1 ? MPEG1_LAYER3_BITRATES : MPEG2_LAYER3_BITRATES)[brIdx];
    const rateHz = SAMPLE_RATES[verBits][srIdx];
    if (!kbps || !rateHz) {
      i++;
      junk++;
      continue;
    }
    const samplesPerFrame = isMpeg1 ? 1152 : 576;
    const frameLen = Math.floor(((samplesPerFrame / 8) * kbps * 1000) / rateHz) + padding;
    if (frameLen <= 4) {
      i++;
      junk++;
      continue;
    }
    if (!first) {
      first = {
        mpeg: isMpeg1 ? "MPEG1" : verBits === 2 ? "MPEG2" : "MPEG2.5",
        kbps,
        rateHz,
        mode: CHANNEL_MODES[modeBits],
      };
    }
    const body = buf.subarray(i + 4, Math.min(i + frameLen, buf.length));
    if (body.length > 0) {
      let zeros = 0;
      for (const b of body) if (b === 0) zeros++;
      if (zeros / body.length >= QUIET_FRAME_ZERO_RATIO) quiet++;
    }
    frames++;
    samples += samplesPerFrame;
    i += frameLen;
  }

  return {
    bytes: buf.length,
    frames,
    seconds: first ? Number((samples / first.rateHz).toFixed(2)) : 0,
    quietShare: frames ? quiet / frames : 1,
    junkBytes: junk,
    mpeg: first?.mpeg ?? "(none)",
    layer: first ? "III" : "(none)",
    rateHz: first?.rateHz ?? 0,
    kbps: first?.kbps ?? 0,
    mode: first?.mode ?? "(none)",
  };
}

type Item = {
  taskType: string;
  title: string;
  payload: { audioScript?: string; speakers?: { role: string; voice: string }[] };
};

const failures: string[] = [];
const fail = (gate: string, msg: string) => failures.push(`${gate}  ${msg}`);

const listening = (GEN_ITEMS as unknown as Item[]).filter((i) => i.taskType.startsWith("LISTENING"));

// A gate over an empty population passes vacuously. Say so instead.
if (listening.length === 0) {
  fail("A1", "no LISTENING items in GEN_ITEMS — this gate would pass over nothing");
}

const claimed = new Set<string>();
let totalSeconds = 0;
let checked = 0;

for (const it of listening) {
  const label = `[${it.taskType}] ${it.title}`;
  if (!it.payload.audioScript) {
    fail("A1", `${label} has no audioScript`);
    continue;
  }
  // ── A6 · what the renderer will SAY, not just what is on disk ──────────────
  // A leading "Role:" at the start of a segment is a label being read aloud.
  // The bound is the same one stripLeadingLabel uses: at most four words and
  // forty characters before the colon, so an ordinary mid-sentence colon is not
  // mistaken for a label.
  for (const seg of segmentsFor(it.payload as { audioScript: string; speakers?: { role: string; voice: string }[] })) {
    const spoken = seg.text.match(/^\s*([^\s:][^:\n]{0,39}):\s/)?.[1];
    if (spoken && spoken.trim().split(/\s+/).length <= 4 && !/[.!?,;]/.test(spoken)) {
      fail("A6", `${label} — a segment SPEAKS the label "${spoken}:" before the extract starts`);
    }
  }

  const key = audioKey(it.payload as { audioScript: string; speakers?: { role: string; voice: string }[] });
  claimed.add(key);
  const path = join(process.cwd(), AUDIO_DIR, audioFileName(key));

  if (!existsSync(path)) {
    fail(
      "A1",
      `${label} resolves to ${key}.mp3 which does NOT exist — the script was edited after the ` +
        "render, so every play falls back to paid TTS. Run npm run audio:render and commit.",
    );
    continue;
  }

  const size = statSync(path).size;
  if (size < MIN_BYTES) {
    fail("A2", `${label} → ${key}.mp3 is ${size} bytes, floor is ${MIN_BYTES}`);
    continue;
  }

  const p = probeMp3(readFileSync(path));
  checked++;
  totalSeconds += p.seconds;

  if (p.frames === 0) {
    fail("A2", `${label} → ${key}.mp3 contains NO decodable MP3 frames (${p.bytes} bytes of something else)`);
    continue;
  }
  if (p.junkBytes > MAX_JUNK_BYTES) {
    fail("A2", `${label} → ${key}.mp3 has ${p.junkBytes} unparseable bytes between frames (limit ${MAX_JUNK_BYTES}) — truncated or corrupt`);
  }
  if (p.mpeg !== EXPECT_MPEG || p.layer !== EXPECT_LAYER || p.rateHz !== EXPECT_RATE_HZ || p.kbps !== EXPECT_KBPS || p.mode !== EXPECT_MODE) {
    fail(
      "A3",
      `${label} → ${key}.mp3 is ${p.mpeg} Layer ${p.layer} ${p.rateHz}Hz ${p.kbps}kbps ${p.mode}, ` +
        `expected ${EXPECT_MPEG} Layer ${EXPECT_LAYER} ${EXPECT_RATE_HZ}Hz ${EXPECT_KBPS}kbps ${EXPECT_MODE}`,
    );
  }
  if (p.seconds < MIN_SECONDS) {
    fail("A4", `${label} → ${key}.mp3 is only ${p.seconds}s of audio (floor ${MIN_SECONDS}s) — truncated`);
  }
  if (p.quietShare > MAX_QUIET_SHARE) {
    fail(
      "A5",
      `${label} → ${key}.mp3 is ${(p.quietShare * 100).toFixed(1)}% SILENT frames (limit ` +
        `${(MAX_QUIET_SHARE * 100).toFixed(0)}%). It would play to completion and the learner would hear nothing.`,
    );
  }
}

// Informational only. An orphan is wasted space, not a broken lesson — and a
// script edit already fails A1 above, so failing here too would just double-count
// the same defect.
let orphans = 0;
if (existsSync(join(process.cwd(), AUDIO_DIR))) {
  for (const f of readdirSync(join(process.cwd(), AUDIO_DIR))) {
    if (!f.endsWith(".mp3")) continue;
    if (!claimed.has(f.replace(/\.mp3$/, ""))) orphans++;
  }
}

const GATES = [
  "A1 file present",
  "A2 real mp3",
  "A3 encoding",
  "A4 duration",
  "A5 not silent",
  "A6 no label spoken",
];
console.log(
  `[gate:audio] ${listening.length} Listening item(s); ${checked} file(s) opened and parsed; ` +
    `${(totalSeconds / 60).toFixed(1)} min of audio; ${orphans} orphan file(s)`,
);
for (const g of GATES) {
  const hits = failures.filter((f) => f.startsWith(g.slice(0, 2)));
  console.log(`  ${hits.length === 0 ? "PASS" : "FAIL"}  ${g}${hits.length ? ` (${hits.length})` : ""}`);
}
if (failures.length) {
  console.error(`\n[gate:audio] ${failures.length} breach(es):`);
  for (const f of failures) console.error(`  ${f}`);
  console.error("\n[gate:audio] BUILD BLOCKED.");
  process.exit(1);
}
console.log("[gate:audio] all clear — every Listening item resolves to real, non-silent audio");
