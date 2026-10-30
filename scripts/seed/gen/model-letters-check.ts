/**
 * B2 · THE ONE CHECK OF A MODEL LETTER, shared by its builder (_build_model_letters.mts) and its gate (scripts/gates/model-letters.ts) —
 * so the gate can never pass a letter the builder would have refused, or the other way round.
 *   · the slug is a WRITING_LETTER item of the seed, and the item's payload (with the letter) parses with the runtime schema;
 *   · the body (salutation to valediction, the closing line included) is 180–200 words by the product's own word rule (src/lib/oet/words.ts);
 *   · every number in the header, the Re line and the body is in that item's CURRENT case notes or recipient line, as a whole token — the
 *     notes are read from the seed, so a later fix to the notes (RR-346: "Friday" → "23 February") is checked against the letter;
 *   · a placeholder [Name] signs it; the Re line starts "Re: "; every safety point names where it is.
 */
import { words } from "../../../src/lib/oet/words";
import { writingLetterPayloadSchema } from "../../../src/lib/oet/tasks/writing-letter";

export type LetterSource = {
  slug: string; header: string[]; salutation: string; re: string; body: string[]; valediction: string; signoff: string[];
  commentary: { opening: string; selection: string; organisation: string; tone: string }; notesUsed: string[]; notesLeftOut: string[];
  safety: { point: string; where: string }[];
};
type Item = { slug?: string | null; taskType?: unknown; payload?: unknown };

const esc = (n: string) => n.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
export const bodyWordsOf = (l: { body: string[] }) => words(l.body.join("\n"));

/** → the problems (empty when the letter may go in) and the letter as the payload holds it */
export function checkLetter(l: LetterSource, items: Item[]): { problems: string[]; letter: Record<string, unknown> } {
  const problems: string[] = [];
  const item = items.find((i) => i.slug === l.slug);
  const letter = { header: l.header, salutation: l.salutation, re: l.re, body: l.body, valediction: l.valediction, signoff: l.signoff, bodyWords: bodyWordsOf(l), commentary: l.commentary, notesUsed: l.notesUsed, notesLeftOut: l.notesLeftOut, safety: l.safety };
  if (!item) return { problems: [`${l.slug}: no such item in the seed`], letter };
  if (item.taskType !== "WRITING_LETTER") problems.push(`${l.slug}: not a WRITING_LETTER item`);
  const p = item.payload as { caseNotes?: string; recipient?: string };
  if (letter.bodyWords < 180 || letter.bodyWords > 200) problems.push(`${l.slug}: body ${letter.bodyWords} words — OET's guide is 180–200`);
  const notes = `${p?.caseNotes ?? ""}\n${p?.recipient ?? ""}`;
  const text = [...l.header, l.re, ...l.body].join("\n");
  const nums = [...new Set(text.match(/\d+(?:[.,:/]\d+)*/g) ?? [])];
  const missing = nums.filter((n) => !new RegExp(`(^|[^0-9])${esc(n)}($|[^0-9])`).test(notes));
  if (missing.length) problems.push(`${l.slug}: number(s) not in the case notes — ${missing.join(", ")}`);
  if (!/^Re: /.test(l.re)) problems.push(`${l.slug}: the Re line must start "Re: "`);
  if (!l.signoff.some((s) => s.includes("[Name]"))) problems.push(`${l.slug}: the sign-off must carry the [Name] placeholder`);
  if (!l.safety.length || l.safety.some((s) => !s.point || !s.where)) problems.push(`${l.slug}: every safety point needs its point and where it is`);
  const parsed = writingLetterPayloadSchema.safeParse({ ...(item.payload as object), modelLetter: letter });
  if (!parsed.success) problems.push(`${l.slug}: payload with the letter REJECTED — ${JSON.stringify(parsed.error.issues.slice(0, 2))}`);
  return { problems, letter };
}
