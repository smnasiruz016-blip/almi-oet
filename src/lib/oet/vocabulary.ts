// The vocabulary bank (owner, 30 Oct 2026): per profession, "Understand" (C1–C2, for Reading and Listening) and "Use" (clear professional
// English for Writing and Speaking, each with the plain version a patient would understand). AlmiWorld's own definitions and examples —
// beta-g cross-checked (src/content/vocabulary.json, from AlmiOET_Vocabulary_DRAFT_v2.docx).
//
// It is shown to learners only when VOCABULARY_ON=1 is set (the owner turns it on in Vercel when he says so): until then the page answers
// "not found" and the menu has no link.
import type { OetProfession } from "@prisma/client";
import data from "@/content/vocabulary.json";

export type VocabEntry = { term: string; layer: "understand" | "use"; cefr: "B2" | "C1" | "C2"; pos: string; definition: string; example: string; plain: string; from: string };
export const VOCABULARY = data.professions as Record<OetProfession, VocabEntry[]>;
export const vocabularyOn = (env: Record<string, string | undefined> = process.env) => env.VOCABULARY_ON === "1";

/** One profession's entries for a tab and a search (term, definition, example and plain version; case- and accent-insensitive). */
export function vocabularyFor(profession: OetProfession, layer: "understand" | "use", q = ""): VocabEntry[] {
  const fold = (s: string) => s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
  const needle = fold(q.trim());
  return (VOCABULARY[profession] ?? [])
    .filter((e) => e.layer === layer)
    .filter((e) => !needle || fold(`${e.term} ${e.definition} ${e.example} ${e.plain}`).includes(needle))
    .sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
}
