// Shared Listening-audio logic: how a script is split into speaker turns, which
// voice each turn is spoken in, and the content key that names the pre-rendered
// file on disk.
//
// This module is imported by BOTH the offline renderer (scripts/render-audio.ts)
// and the runtime audio route. That is deliberate: the key is what connects a
// rendered file to the request that wants it, so a second copy of this logic
// would mean a silent cache miss (and a silent OpenAI bill) the moment the two
// drifted apart.

import { createHash } from "node:crypto";

export type DialogueSpeaker = { role: string; voice: string };

/** The two locally-rendered Piper voices. Filenames, not paths — the renderer
 *  resolves them against the voice directory. */
export const PIPER_FEMALE = "en_GB-alba-medium";
export const PIPER_MALE = "en_GB-northern_english_male-medium";

/** Encoder settings baked into the key: change one and every file re-renders
 *  rather than silently serving audio that no longer matches the settings. */
export const AUDIO_SAMPLE_RATE = 22050;
export const AUDIO_BITRATE_KBPS = 48;

// Voice names come from the seed data, which was authored against OpenAI's
// catalogue. We only need the presented gender to choose between two Piper
// voices; anything unrecognised falls to the male voice deterministically.
const FEMALE_VOICES = new Set(["alloy", "aria", "nova", "shimmer", "coral", "sage", "fable"]);

function presentedGender(voice: string): "F" | "M" {
  return FEMALE_VOICES.has(voice.toLowerCase()) ? "F" : "M";
}

/** Map each distinct script voice to a Piper voice.
 *
 *  Gender is honoured where it can be, but DISTINCTNESS WINS. Several Part A
 *  consultations pair two same-gender voices (Clinician=alloy with Patient=aria);
 *  mapping both to the female voice would render the whole consultation in one
 *  voice, and in Part A the voice change is what tells the candidate who is
 *  speaking. So when a second speaker would collide with the first, it flips.
 *  With only two voices available that trade is unavoidable — the renderer
 *  reports every flip so the mismatch is known rather than discovered. */
export function planVoices(speakers: DialogueSpeaker[]): {
  plan: Map<string, string>;
  flipped: string[];
} {
  const plan = new Map<string, string>();
  const used = new Set<string>();
  const flipped: string[] = [];
  for (const s of speakers) {
    if (plan.has(s.voice)) continue;
    const wanted = presentedGender(s.voice) === "F" ? PIPER_FEMALE : PIPER_MALE;
    let chosen = wanted;
    if (used.has(wanted) && used.size < 2) {
      chosen = wanted === PIPER_FEMALE ? PIPER_MALE : PIPER_FEMALE;
      flipped.push(`${s.role} (${s.voice})`);
    }
    plan.set(s.voice, chosen);
    used.add(chosen);
  }
  return { plan, flipped };
}

/** Split a labelled script ("Clinician: … Patient: …") into ordered segments,
 *  each tagged with the speaker's voice. Speaker labels are removed from the
 *  spoken text — the voice change signals who is talking, as in the real exam. */
export function splitDialogue(
  script: string,
  speakers: DialogueSpeaker[],
): { voice: string; text: string }[] {
  if (speakers.length < 2) return [];
  const roleToVoice = new Map(speakers.map((s) => [s.role.toLowerCase(), s.voice]));
  const labels = speakers.map((s) => s.role.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  // Find every "Role:" boundary, then slice the text between consecutive marks.
  const re = new RegExp(`(${labels.join("|")})\\s*:\\s*`, "gi");
  const marks: { role: string; at: number; end: number }[] = [];
  let match: RegExpExecArray | null;
  while ((match = re.exec(script)) !== null) {
    marks.push({ role: match[1], at: match.index, end: match.index + match[0].length });
  }
  if (marks.length < 2) return [];
  const segments: { voice: string; text: string }[] = [];
  for (let i = 0; i < marks.length; i++) {
    const m = marks[i];
    const textEnd = i + 1 < marks.length ? marks[i + 1].at : script.length;
    const text = script.slice(m.end, textEnd).trim();
    const voice = roleToVoice.get(m.role.toLowerCase()) ?? speakers[0].voice;
    if (text) segments.push({ voice, text });
  }
  return segments;
}

/**
 * 🔴 STRIP A LEADING SPEAKER LABEL FROM A SCRIPT THAT COULD NOT BE SPLIT.
 *
 * `splitDialogue` removes labels only when it finds TWO OR MORE of them; a
 * single-speaker script (a briefing, a talk, a presentation) has one label and
 * falls to the whole-script fallback, which spoke it out loud. Measured on
 * 3 September 2026: 22 LIVE items begin their audio by reading the label —
 * "Manager:", "Doctor:", "Nurse A:", "Speaker:" — before the extract starts. It
 * is not a rendering artefact a learner can ignore; it is the first thing they
 * hear, in an exam where the recording plays once.
 *
 * The rule is deliberately narrow so it cannot eat content:
 *   · only at the very START of the script,
 *   · at most four words before the colon and at most 40 characters,
 *   · no sentence punctuation inside it,
 *   · the colon must be followed by whitespace.
 * "Nurse educator: The commonest error…" loses its label. "One thing I want to
 * flag today: the rota" does not — it is over four words. A clock time
 * ("at 14:00") is untouched because it is not at position 0.
 *
 * Shared by the offline renderer and the on-demand OpenAI fallback, because a
 * second copy of this rule would mean the two paths speak different words.
 */
export function stripLeadingLabel(script: string): string {
  return script.replace(/^\s*([^\s:][^:\n]{0,39}):\s+/, (whole, label: string) => {
    const wordCount = label.trim().split(/\s+/).length;
    if (wordCount > 4) return whole;
    if (/[.!?,;]/.test(label)) return whole;
    return "";
  });
}

export type ListeningAudioPayload = {
  audioScript: string;
  speakers?: DialogueSpeaker[];
};

/** The Piper-voiced segments an item renders to, in playback order. A script
 *  that cannot be split (or has one speaker) is one segment in that speaker's
 *  voice — the same fallback the on-demand path takes — with its leading label
 *  removed, because the fallback used to speak it. See stripLeadingLabel. */
export function segmentsFor(payload: ListeningAudioPayload): { piperVoice: string; text: string }[] {
  const speakers = payload.speakers ?? [];
  const { plan } = planVoices(speakers);
  const fallback = plan.get(speakers[0]?.voice ?? "") ?? PIPER_MALE;
  const split = splitDialogue(payload.audioScript, speakers);
  if (split.length < 2) return [{ piperVoice: fallback, text: stripLeadingLabel(payload.audioScript) }];
  return split.map((s) => ({ piperVoice: plan.get(s.voice) ?? fallback, text: s.text }));
}

/** Content key naming the rendered file. Derived from the script and the exact
 *  voices/encoder it was rendered with, so any change to either misses the cache
 *  and re-renders instead of serving stale audio. Stable across environments —
 *  it never touches the database id, which differs per environment. */
export function audioKey(payload: ListeningAudioPayload): string {
  const segments = segmentsFor(payload);
  const material = JSON.stringify({
    v: 1,
    rate: AUDIO_SAMPLE_RATE,
    kbps: AUDIO_BITRATE_KBPS,
    segments: segments.map((s) => [s.piperVoice, s.text]),
  });
  return createHash("sha256").update(material, "utf8").digest("hex").slice(0, 16);
}

/** Repo-relative directory holding rendered audio. NOT under public/ — these
 *  files are paid content whose transcript carries the answers, so they are
 *  served only through the ownership-scoped route. */
export const AUDIO_DIR = "audio/oet";

export function audioFileName(key: string): string {
  return `${key}.mp3`;
}
