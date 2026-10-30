// /vocabulary → the learner's own profession's bank (or Nursing when none is set). Behind VOCABULARY_ON.
import { notFound, redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { PROFESSIONS } from "@/lib/oet/professions";
import { vocabularyOn } from "@/lib/oet/vocabulary";

export default async function VocabularyIndex() {
  if (!vocabularyOn()) notFound();
  const user = await requireUser();
  redirect(`/vocabulary/${PROFESSIONS[user.targetProfession ?? "NURSING"].slug}`);
}
