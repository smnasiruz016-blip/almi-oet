// RR-345 (D6) · kept OUT of src/lib/oet/entry.ts on purpose: every export there is a door into a session (tests/chain-is-paid.test.ts
// calls each one); this is a question, not a door.
import { isComped } from "@/lib/billing/plans";
import { mockTrialShortfall } from "@/lib/billing/trial-limits";
import { isOwner } from "@/lib/auth/owner-check";
import { prisma } from "@/lib/prisma";
import { MOCK_PLAN } from "@/lib/oet/registry";
/** RR-345 (D6) · the words that stop a trialling learner's mock, or null — the same count the submit route caps on */
export async function mockShortfallFor(user: { id: string; email: string; subscriptionStatus: string | null; compProUntil: Date | null }): Promise<string | null> {
  if (user.subscriptionStatus !== "trialing") return null;
  const rows = await prisma.oetAttempt.groupBy({ by: ["taskType"], where: { userId: user.id, status: "SCORED", taskType: { in: ["WRITING_LETTER", "SPEAKING_ROLEPLAY"] } }, _count: true });
  const used = Object.fromEntries(rows.map((r) => [r.taskType, r._count]));
  return mockTrialShortfall({ subscriptionStatus: user.subscriptionStatus, used, plan: MOCK_PLAN, bypass: isOwner(user.email) || isComped(user) });
}
