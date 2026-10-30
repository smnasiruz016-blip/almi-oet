/**
 * B3 · THE ONE CHECK OF A MODEL ROLE-PLAY SCRIPT, shared by its builder (_build_model_scripts.mts) and its gate (scripts/gates/model-scripts.ts).
 *   · the slug is a SPEAKING_ROLEPLAY item of the seed, and its payload (with the script) parses with the runtime schema;
 *   · 600–750 words across all turns (about five minutes) by the product's word rule (src/lib/oet/words.ts); 24–40 turns; the candidate
 *     opens; no candidate turn over 80 words; no brackets (no stage directions);
 *   · EVERY task of the card (a paragraph of candidateCard) is mapped to turns that exist, and so are the concern and each safety point;
 *   · every number said is on the CURRENT card, or in the source's allowed list with its reason (111/999; a figure derived from the card);
 *     a digit inside a word ("HbA1c") and a disease name ("type 2 diabetes") are not numbers said.
 */
import { words } from "../../../src/lib/oet/words";
import { speakingRoleplayPayloadSchema } from "../../../src/lib/oet/tasks/speaking-roleplay";

export type ScriptSource = {
  slug: string; candidateLabel: string; interlocutorLabel: string; turns: { who: "C" | "I"; text: string }[];
  coverage: { bullet: number; turns: number[]; how: string }[]; concern: { turns: number[]; how: string }; safety: { point: string; turn: number }[]; notes: string;
};
type Item = { slug?: string | null; taskType?: unknown; payload?: unknown };
const esc = (n: string) => n.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
export const scriptWordsOf = (s: { turns: { text: string }[] }) => s.turns.reduce((a, t) => a + words(t.text), 0);

export function checkScript(s: ScriptSource, items: Item[], allowed: Record<string, string>): { problems: string[]; script: Record<string, unknown> } {
  const problems: string[] = [];
  const item = items.find((i) => i.slug === s.slug);
  const script = { candidateLabel: s.candidateLabel, interlocutorLabel: s.interlocutorLabel, turns: s.turns, words: scriptWordsOf(s), coverage: s.coverage, concern: s.concern, safety: s.safety, notes: s.notes };
  if (!item) return { problems: [`${s.slug}: no such item in the seed`], script };
  if (item.taskType !== "SPEAKING_ROLEPLAY") problems.push(`${s.slug}: not a SPEAKING_ROLEPLAY item`);
  const p = item.payload as { candidateCard?: string; setting?: string; candidateRole?: string; patientRole?: string; patientConcern?: string };
  const n = s.turns.length, inRange = (t: number) => Number.isInteger(t) && t >= 1 && t <= n;
  if (script.words < 600 || script.words > 750) problems.push(`${s.slug}: ${script.words} words — the model is 600–750 (about five minutes)`);
  if (n < 24 || n > 40) problems.push(`${s.slug}: ${n} turns — 24–40`);
  if (s.turns[0]?.who !== "C") problems.push(`${s.slug}: the candidate must open`);
  const long = s.turns.filter((t) => t.who === "C" && words(t.text) > 80).length; if (long) problems.push(`${s.slug}: ${long} candidate turn(s) over 80 words`);
  if (s.turns.some((t) => /[[\]()]/.test(t.text))) problems.push(`${s.slug}: brackets in a turn (no stage directions)`);
  const bullets = String(p?.candidateCard ?? "").split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  for (let b = 1; b <= bullets.length; b++) { const c = s.coverage.find((x) => x.bullet === b); if (!c || !c.turns.length || !c.turns.every(inRange)) problems.push(`${s.slug}: card task ${b} not mapped to its turns`); }
  if (s.coverage.some((c) => c.bullet > bullets.length)) problems.push(`${s.slug}: a mapping names a task the card does not have`);
  if (!s.concern.turns.length || !s.concern.turns.every(inRange)) problems.push(`${s.slug}: the concern is not mapped`);
  if (!s.safety.length || !s.safety.every((x) => inRange(x.turn))) problems.push(`${s.slug}: a safety point without its turn`);
  const card = [p?.setting, p?.candidateRole, p?.patientRole, p?.candidateCard, p?.patientConcern].join("\n");
  const spoken = s.turns.map((t) => t.text).join("\n").replace(/\b[Tt]ype [12] diabetes\b/g, "").replace(/\b\w*[A-Za-z]\d\w*\b/g, "");
  const nums = [...new Set(spoken.match(/(?<![\w])\d+(?:[.,:/]\d+)*(?![\w])/g) ?? [])];
  const out = nums.filter((x) => !allowed[x] && !new RegExp(`(^|[^0-9])${esc(x)}($|[^0-9])`).test(card));
  if (out.length) problems.push(`${s.slug}: number(s) not on the card — ${out.join(", ")}`);
  const parsed = speakingRoleplayPayloadSchema.safeParse({ ...(item.payload as object), modelScript: script });
  if (!parsed.success) problems.push(`${s.slug}: payload with the script REJECTED — ${JSON.stringify(parsed.error.issues.slice(0, 2))}`);
  return { problems, script };
}
