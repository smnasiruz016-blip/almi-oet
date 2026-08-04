// Offline Listening-audio renderer: Piper (local, free) -> raw PCM -> MP3.
//
// Replaces a metered OpenAI tts-1 call on EVERY play with a file committed to
// the repo and served same-origin. Run on a machine with Piper installed; the
// output is committed, so this never runs in CI or on Vercel.
//
//   npm run audio:render            render anything missing
//   npm run audio:render -- --force re-render everything
//   npm run audio:render -- --check report coverage, render nothing
//
// Piper costs ~5s of model load per invocation, so the whole corpus is rendered
// in ONE invocation per voice: piper reads a file of one-line-per-utterance and
// logs "Wrote <path>" per line IN INPUT ORDER, which is what maps its output
// back to the segment that asked for it.

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { Mp3Encoder } from "@breezystack/lamejs";
import { GEN_ITEMS } from "./seed/gen";
import {
  AUDIO_BITRATE_KBPS,
  AUDIO_DIR,
  AUDIO_SAMPLE_RATE,
  audioFileName,
  audioKey,
  planVoices,
  segmentsFor,
  type ListeningAudioPayload,
} from "../src/lib/oet/audio";

const FORCE = process.argv.includes("--force");
const CHECK = process.argv.includes("--check");

const PIPER =
  process.env.PIPER_BIN ??
  join(
    process.env.LOCALAPPDATA ?? "",
    "Programs",
    "Python",
    "Python313",
    "Scripts",
    "piper.exe",
  );
const VOICE_DIR = process.env.PIPER_VOICES ?? join(process.env.LOCALAPPDATA ?? "", "piper-voices");

/** 350ms between speaker turns so a consultation does not run together. */
const GAP_MS = 350;

type Item = { taskType: string; title: string; payload: Record<string, unknown> };

function listeningItems(): { title: string; taskType: string; payload: ListeningAudioPayload }[] {
  return (GEN_ITEMS as unknown as Item[])
    .filter((i) => i.taskType.startsWith("LISTENING"))
    .map((i) => ({
      title: i.title,
      taskType: i.taskType,
      payload: i.payload as unknown as ListeningAudioPayload,
    }))
    .filter((i) => typeof i.payload.audioScript === "string" && i.payload.audioScript.length > 0);
}

/** 16-bit mono PCM out of a Piper WAV (44-byte canonical header). */
function pcmFromWav(buf: Buffer): Int16Array {
  if (buf.length < 44 || buf.toString("ascii", 0, 4) !== "RIFF") {
    throw new Error("not a RIFF wav");
  }
  // Walk the chunks rather than assuming 44 — some writers add LIST/fact.
  let off = 12;
  while (off + 8 <= buf.length) {
    const id = buf.toString("ascii", off, off + 4);
    const size = buf.readUInt32LE(off + 4);
    if (id === "data") {
      const start = off + 8;
      const end = Math.min(start + size, buf.length);
      const bytes = end - start;
      const out = new Int16Array(bytes >> 1);
      for (let i = 0; i < out.length; i++) out[i] = buf.readInt16LE(start + i * 2);
      return out;
    }
    off += 8 + size + (size % 2);
  }
  throw new Error("no data chunk");
}

function encodeMp3(pcm: Int16Array): Buffer {
  const enc = new Mp3Encoder(1, AUDIO_SAMPLE_RATE, AUDIO_BITRATE_KBPS);
  const chunks: Buffer[] = [];
  const BLOCK = 1152;
  for (let i = 0; i < pcm.length; i += BLOCK) {
    const slice = pcm.subarray(i, Math.min(i + BLOCK, pcm.length));
    const buf = enc.encodeBuffer(slice);
    if (buf.length > 0) chunks.push(Buffer.from(buf));
  }
  const end = enc.flush();
  if (end.length > 0) chunks.push(Buffer.from(end));
  return Buffer.concat(chunks);
}

function main() {
  const items = listeningItems();
  const outDir = resolve(process.cwd(), AUDIO_DIR);
  mkdirSync(outDir, { recursive: true });

  // ---- what needs rendering ----
  type Job = {
    key: string;
    title: string;
    taskType: string;
    segments: { piperVoice: string; text: string }[];
    flipped: string[];
  };
  const jobs: Job[] = [];
  let present = 0;
  for (const it of items) {
    const key = audioKey(it.payload);
    const file = join(outDir, audioFileName(key));
    const { flipped } = planVoices(it.payload.speakers ?? []);
    if (existsSync(file) && !FORCE) {
      present += 1;
      continue;
    }
    jobs.push({ key, title: it.title, taskType: it.taskType, segments: segmentsFor(it.payload), flipped });
  }

  console.log(`Listening items: ${items.length}`);
  console.log(`already rendered: ${present}`);
  console.log(`to render: ${jobs.length}`);
  const flippedItems = items.filter((i) => planVoices(i.payload.speakers ?? []).flipped.length > 0);
  if (flippedItems.length > 0) {
    console.log(
      `\nGENDER FLIPS (same-gender pair forced apart so the speakers stay distinguishable): ${flippedItems.length}`,
    );
    for (const i of flippedItems) {
      console.log(`  ${i.title} — flipped ${planVoices(i.payload.speakers ?? []).flipped.join(", ")}`);
    }
  }
  if (CHECK || jobs.length === 0) {
    writeManifest(items, outDir);
    return;
  }

  if (!existsSync(PIPER)) throw new Error(`piper not found at ${PIPER} (set PIPER_BIN)`);

  // ---- one piper invocation per voice, for every segment that voice speaks ----
  const work = new Map<string, { job: Job; index: number; text: string }[]>();
  for (const job of jobs) {
    job.segments.forEach((seg, index) => {
      const list = work.get(seg.piperVoice) ?? [];
      list.push({ job, index, text: seg.text });
      work.set(seg.piperVoice, list);
    });
  }

  const rendered = new Map<string, Int16Array[]>();
  for (const job of jobs) rendered.set(job.key, new Array(job.segments.length));

  const scratch = join(tmpdir(), `oet-piper-${process.pid}`);
  mkdirSync(scratch, { recursive: true });

  for (const [voice, segs] of work.entries()) {
    const model = join(VOICE_DIR, `${voice}.onnx`);
    if (!existsSync(model)) throw new Error(`voice model missing: ${model}`);
    const inFile = join(scratch, `${voice}.txt`);
    const outSub = join(scratch, voice);
    mkdirSync(outSub, { recursive: true });
    // One line per utterance — newlines inside a turn would split it into two.
    writeFileSync(inFile, segs.map((s) => s.text.replace(/\s+/g, " ").trim()).join("\n") + "\n", "utf8");

    console.log(`\npiper: ${voice} — ${segs.length} segment(s)`);
    const res = spawnSync(
      PIPER,
      ["-m", model, "-i", inFile, "-d", outSub, "--output-dir-naming", "timestamp"],
      { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
    );
    if (res.status !== 0) {
      throw new Error(`piper failed (${res.status}): ${(res.stderr ?? "").slice(-800)}`);
    }
    // "Wrote <path>" lines come out in input order — that is the mapping.
    const wrote = (res.stderr ?? "")
      .split(/\r?\n/)
      .map((l) => /Wrote (.+\.wav)\s*$/.exec(l))
      .filter((m): m is RegExpExecArray => m !== null)
      .map((m) => m[1].trim());
    if (wrote.length !== segs.length) {
      throw new Error(`piper wrote ${wrote.length} file(s) for ${segs.length} segment(s) — refusing to guess the mapping`);
    }
    // Output names are timestamps. Two segments landing on the same name would
    // mean one overwrote the other and a turn is silently duplicated.
    if (new Set(wrote).size !== wrote.length) {
      throw new Error(`piper reused an output filename — ${wrote.length - new Set(wrote).size} collision(s)`);
    }
    segs.forEach((s, i) => {
      const pcm = pcmFromWav(readFileSync(wrote[i]));
      rendered.get(s.job.key)![s.index] = pcm;
    });
  }

  // ---- stitch each item's segments, encode once, write ----
  const gap = new Int16Array(Math.round((AUDIO_SAMPLE_RATE * GAP_MS) / 1000));
  let bytes = 0;
  for (const job of jobs) {
    const parts = rendered.get(job.key)!;
    if (parts.some((p) => !p)) throw new Error(`${job.title}: a segment did not render`);
    const totalLen = parts.reduce((n, p) => n + p.length, 0) + gap.length * (parts.length - 1);
    const all = new Int16Array(totalLen);
    let at = 0;
    parts.forEach((p, i) => {
      all.set(p, at);
      at += p.length;
      if (i < parts.length - 1) {
        all.set(gap, at);
        at += gap.length;
      }
    });
    const mp3 = encodeMp3(all);
    const file = join(outDir, audioFileName(job.key));
    writeFileSync(file, mp3);
    bytes += mp3.length;
    const secs = all.length / AUDIO_SAMPLE_RATE;
    console.log(
      `  ${audioFileName(job.key)}  ${(mp3.length / 1024).toFixed(0)} KB  ${secs.toFixed(1)}s  ${job.segments.length} seg  ${job.title}`,
    );
  }
  rmSync(scratch, { recursive: true, force: true });
  console.log(`\nrendered ${jobs.length} file(s), ${(bytes / 1024 / 1024).toFixed(2)} MB`);

  writeManifest(items, outDir);
}

/** Coverage manifest — what is rendered, what is not. The route does not need
 *  it (it checks the file), but a missing file should be visible, not silent. */
function writeManifest(
  items: { title: string; taskType: string; payload: ListeningAudioPayload }[],
  outDir: string,
) {
  const entries = items.map((i) => {
    const key = audioKey(i.payload);
    const file = join(outDir, audioFileName(key));
    const there = existsSync(file);
    return {
      key,
      title: i.title,
      taskType: i.taskType,
      file: audioFileName(key),
      rendered: there,
      bytes: there ? statSync(file).size : 0,
    };
  });
  const total = entries.filter((e) => e.rendered).length;
  writeFileSync(
    join(outDir, "manifest.json"),
    JSON.stringify(
      { generatedFrom: "scripts/render-audio.ts", sampleRate: AUDIO_SAMPLE_RATE, bitrateKbps: AUDIO_BITRATE_KBPS, items: entries },
      null,
      2,
    ) + "\n",
    "utf8",
  );
  const bytes = entries.reduce((n, e) => n + e.bytes, 0);
  console.log(`\ncoverage: ${total}/${entries.length} rendered, ${(bytes / 1024 / 1024).toFixed(2)} MB on disk`);
  const missing = entries.filter((e) => !e.rendered);
  if (missing.length > 0) {
    console.log("NOT RENDERED (these still cost an OpenAI call per play):");
    for (const m of missing) console.log(`  [${m.taskType}] ${m.title}`);
  }
}

main();
