/**
 * SETTING THE LEARNER'S PROFESSION — one writer, two callers.
 *
 * `User.targetProfession` decides which Writing and Speaking bank a learner is
 * served: `poolWhere()` filters on it, and `pickItemId` draws from what that
 * returns. It is now written from two places — the profession tiles on /practice
 * and the dropdown on /account — so it is written HERE, once, and both call this.
 *
 * Two writers of the same field drift. The failure would be quiet and
 * asymmetric: a tile that wrote a slug where the account page wrote an enum
 * member would set a value no query matches, and the learner would be shown an
 * empty Writing bank with no error anywhere.
 *
 * The value is validated against PROFESSION_LIST rather than cast, because it
 * arrives from a form and a form is user input.
 */
import type { OetProfession } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { PROFESSION_LIST } from "@/lib/oet/professions";

/** Coerce a submitted value to a profession, or null if it is not one. */
export function parseProfession(value: unknown): OetProfession | null {
  const s = typeof value === "string" ? value : "";
  const hit = PROFESSION_LIST.find((p) => p.profession === s);
  return hit ? hit.profession : null;
}

/**
 * Write the learner's profession. `null` clears it — that is a legitimate choice
 * on the account page ("Not set"), so it is not treated as a failed parse.
 *
 * Returns what was actually stored, so a caller can redirect to it rather than
 * to what it hoped was stored.
 */
export async function setTargetProfession(
  userId: string,
  profession: OetProfession | null,
): Promise<OetProfession | null> {
  await prisma.user.update({
    where: { id: userId },
    data: { targetProfession: profession },
  });
  return profession;
}
