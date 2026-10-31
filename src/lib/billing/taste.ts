/**
 * THE 48-HOUR TASTE — owner decision, 31 Oct 2026 (direct selling).
 *
 * The 7-day card trial is closed to NEW users. In its place every new account
 * gets a no-card taste that starts at sign-up (User.createdAt) and lasts
 * OFFER.tasteHours, with a small, fixed amount of practice:
 *
 *     1 Reading set + 1 Listening set (with explanations)
 *     1 AI-scored Writing letter
 *     1 Speaking role-play
 *     Lessons (open to every signed-in learner, as before)
 *
 * NOT in the taste: the full mock, model letters / model role-plays, any further
 * set, and vocabulary beyond a short sample.
 *
 * ── 🔴 WHAT THIS FILE DOES NOT TOUCH ───────────────────────────────────────
 *
 * `hasPaidAccess()` is unchanged and still decides paid / trialing / comp /
 * owner. The taste is a SEPARATE, NARROWER door that is only asked when
 * hasPaidAccess() has already said no. So an existing 7-day trial keeps every
 * right it had until it ends, and a paying learner never reaches this code.
 *
 * ── WHO HAS A TASTE ────────────────────────────────────────────────────────
 *
 * An account that has NEVER had a subscription of any kind (no status, no
 * Stripe subscription id) and no comp grant, for OFFER.tasteHours after it was
 * created. A cancelled subscriber, an ex-trialist or an ex-comp account does
 * not get a new taste. No column was added: createdAt is the start, so there is
 * no migration and nothing to backfill.
 *
 * ── WHAT "USED" MEANS ──────────────────────────────────────────────────────
 *
 * A sub-test's taste is used once a practice session of that sub-test holds a
 * SCORED attempt — what the learner actually received, not a click. A session
 * that was opened and never answered is resumed rather than replaced, so the
 * taste cannot be used to page through the bank; one whose clock ran out is
 * set aside so the learner is not stuck on it.
 */
import type { OetSubTest } from "@prisma/client";
import { OFFER } from "@/lib/billing/offer";
import { prisma } from "@/lib/prisma";
import { track } from "@/lib/analytics/track";

const HOUR_MS = 60 * 60 * 1000;

export type TasteUser = {
  createdAt?: Date | null;
  subscriptionStatus: string | null;
  stripeSubscriptionId?: string | null;
  compProUntil: Date | null;
};

/** When this account's taste ends, or null if it never had one. */
export function tasteEndsAt(user: TasteUser): Date | null {
  if (!(user.createdAt instanceof Date)) return null;
  if (user.subscriptionStatus != null) return null; // ever subscribed — trial, paid or cancelled
  if (user.stripeSubscriptionId) return null;
  if (user.compProUntil != null) return null; // a comp grant, current or past
  return new Date(user.createdAt.getTime() + OFFER.tasteHours * HOUR_MS);
}

/** True while the taste is running. */
export function isTasteActive(user: TasteUser, now: number = Date.now()): boolean {
  const end = tasteEndsAt(user);
  return end !== null && end.getTime() > now;
}

/** Whole hours left, rounded up, or null when no taste is running. */
export function tasteHoursLeft(user: TasteUser, now: number = Date.now()): number | null {
  const end = tasteEndsAt(user);
  if (!end || end.getTime() <= now) return null;
  return Math.ceil((end.getTime() - now) / HOUR_MS);
}

export const TASTE_LIMITS: Record<OetSubTest, number> = OFFER.tasteLimits;

export type TasteState = {
  /** Sessions per sub-test that already hold a SCORED attempt. */
  used: Record<OetSubTest, number>;
  /** An unanswered, still-open practice session per sub-test, to resume. */
  open: Record<OetSubTest, string | null>;
};

const zero = (): Record<OetSubTest, number> => ({ LISTENING: 0, READING: 0, WRITING: 0, SPEAKING: 0 });
const none = (): Record<OetSubTest, string | null> => ({ LISTENING: null, READING: null, WRITING: null, SPEAKING: null });

/** Pure: fold a learner's practice sessions into what the taste has used. */
export function foldTasteState(
  sessions: {
    id: string;
    subTest: OetSubTest | null;
    status: string;
    attempts: { status: string; deadlineAt: Date | null }[];
  }[],
  now: number = Date.now(),
): TasteState {
  const used = zero();
  const open = none();
  for (const s of sessions) {
    if (!s.subTest) continue;
    if (s.attempts.some((a) => a.status === "SCORED")) {
      used[s.subTest]++;
      continue;
    }
    const stale = s.attempts.some((a) => a.status !== "SCORED" && a.deadlineAt && a.deadlineAt.getTime() <= now);
    if (s.status === "IN_PROGRESS" && !stale && open[s.subTest] === null) open[s.subTest] = s.id;
  }
  return { used, open };
}

export async function tasteState(userId: string): Promise<TasteState> {
  const sessions = await prisma.oetSession.findMany({
    where: { userId, mode: "PRACTICE_SET" },
    orderBy: { startedAt: "desc" },
    select: { id: true, subTest: true, status: true, attempts: { select: { status: true, deadlineAt: true } } },
  });
  return foldTasteState(sessions);
}

export type TasteVerdict =
  | { kind: "START" }
  | { kind: "RESUME"; sessionId: string }
  | { kind: "LOCKED"; reason: "EXPIRED" | "USED" | "MOCK" | "NONE" };

/**
 * Pure: may an UNPAID learner start practice of this sub-test? (Paid access is
 * decided before this is ever asked.)
 */
export function tasteVerdict(input: {
  user: TasteUser;
  target: OetSubTest | "MOCK";
  state: TasteState | null;
  now?: number;
}): TasteVerdict {
  const end = tasteEndsAt(input.user);
  if (end === null) return { kind: "LOCKED", reason: "NONE" };
  if (end.getTime() <= (input.now ?? Date.now())) return { kind: "LOCKED", reason: "EXPIRED" };
  if (input.target === "MOCK") return { kind: "LOCKED", reason: "MOCK" };
  const state = input.state ?? { used: zero(), open: none() };
  if (state.used[input.target] >= TASTE_LIMITS[input.target]) return { kind: "LOCKED", reason: "USED" };
  const open = state.open[input.target];
  return open ? { kind: "RESUME", sessionId: open } : { kind: "START" };
}

/** Pure: may a taste learner have THIS attempt scored? The money guard behind
 *  the door — a second AI evaluation can never be bought by posting to submit. */
export function tasteMayScore(input: {
  user: TasteUser;
  sessionMode: string | null;
  subTest: OetSubTest;
  isAi: boolean;
  scoredOfThisSubTest: number;
  now?: number;
}): boolean {
  if (!isTasteActive(input.user, input.now)) return false;
  if (input.sessionMode !== "PRACTICE_SET") return false; // never a mock, never a loose attempt
  if (input.isAi && input.scoredOfThisSubTest >= TASTE_LIMITS[input.subTest]) return false;
  return true;
}

/** The friction event, emitted from ONE place (gate:funnel owner rule). */
export function noteTasteLimitHit(userId: string, target: OetSubTest | "MOCK" | "MODEL" | "VOCABULARY", reason: string): void {
  track("taste_limit_hit", { userId, target, reason });
}
