/**
 * 🔴 THE ONLY DOOR INTO A PRACTICE SESSION.
 *
 * Every way a learner can begin an OET attempt goes through a function in this
 * file, and every function in this file starts with the same two lines:
 *
 *     const user = await requireUser();
 *     if (!hasPaidAccess(user)) redirect("/pricing");
 *
 * ── WHY IT IS ONE FILE AND NOT A CHECK PER PAGE ─────────────────────────────
 *
 * Until now the check was copied into each page's server action. Two copies was
 * survivable; adding a third — the "Next exercise →" chain — is where that shape
 * turns into a hole, because the chain is the one entry point a learner can hit
 * over and over without ever returning to a page that gates. A chain that
 * skipped the check would be a way to start an unlimited number of Writing and
 * Speaking attempts, and those attempts spend AI tokens on submit.
 *
 * MONEY BEFORE TOKENS: the entitlement check runs before the session row is
 * created, which is before any item is served, which is long before a single
 * token can be spent on grading it.
 *
 * `redirect()` throws. That is the point — a caller cannot receive a value here
 * and forget to act on it. These functions never return normally; their return
 * type is `never` and control leaves via a redirect on every path.
 *
 * 🔴 IF YOU ADD A FOURTH DOOR, IT GOES IN THIS FILE. tests/chain-is-paid.test.ts
 * enumerates this module's exports at runtime and calls every one of them as an
 * unpaid user, so a new export that skips the guard fails CI, and a new export
 * the test does not know how to call fails CI too.
 */
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { hasPaidAccess } from "@/lib/billing/plans";
import { startSession, getSessionView } from "@/lib/oet/session";
import { taskBySlug } from "@/lib/oet/registry";
import { professionBySlug } from "@/lib/oet/professions";
import { isPerProfession } from "@/lib/oet/types";
import { chainView } from "@/lib/oet/chain";

/** The guard, in one place, so all three doors share the same code rather than
 *  three copies that can drift apart one at a time. */
async function payingUser() {
  const user = await requireUser();
  if (!hasPaidAccess(user)) redirect("/pricing");
  return user;
}

/**
 * Begin a practice set for one task type — from the "Start a set" button or from
 * a specific row of the browsable list.
 *
 * `itemId` is a PREFERENCE, not a grant: startSession re-validates it against
 * this learner's own `poolWhere()` and refuses anything outside it, so a posted
 * id cannot reach a deactivated item or another profession's Writing task.
 */
export async function beginPracticeSession(input: {
  taskSlug: string;
  professionSlug: string;
  itemId?: string | null;
}): Promise<never> {
  const user = await payingUser();

  const def = taskBySlug(input.taskSlug);
  if (!def || !def.live) redirect("/practice");

  // The profession comes from the URL the learner was on, re-resolved through
  // the registry rather than trusted as a string, falling back to their stored
  // one if the form somehow arrives without it.
  const chosenProfession =
    professionBySlug(input.professionSlug)?.profession ?? user.targetProfession ?? null;
  const profession = isPerProfession(def.subTest) ? chosenProfession : null;

  const id = await startSession({
    userId: user.id,
    mode: "PRACTICE_SET",
    taskType: def.taskType,
    profession,
    itemId: input.itemId ?? null,
  });
  if (!id) redirect(`/practice/${input.professionSlug}/${def.slug}?empty=1`);
  redirect(`/practice/session/${id}`);
}

/** Begin a full mock — all four sub-tests from one complete form. */
export async function beginMockSession(): Promise<never> {
  const user = await payingUser();
  if (!user.targetProfession) redirect("/account?needprofession=1");
  const id = await startSession({
    userId: user.id,
    mode: "MOCK",
    profession: user.targetProfession,
  });
  if (!id) redirect("/practice?mockempty=1");
  redirect(`/practice/session/${id}`);
}

/**
 * THE CHAIN. Continue from a finished practice set into the next exercise of the
 * same task, same profession pool, in the same order the list shows.
 *
 * Nothing is trusted from the form but the session id, and that is immediately
 * scoped to the caller's own user — getSessionView filters on `{ id, userId }`,
 * so another learner's session id resolves to nothing. The task type, the
 * profession and the pool are all re-derived server-side from the session row;
 * the client never says which exercise comes next.
 *
 * `restart` is the explicit "start again from the top" the results screen offers
 * once the pool is exhausted. It is a separate argument precisely so the
 * automatic chain cannot loop: without it, an exhausted pool returns null and
 * this sends the learner back to the list.
 */
export async function continuePracticeChain(
  sessionId: string,
  opts: { restart?: boolean } = {},
): Promise<never> {
  const user = await payingUser();

  const session = await getSessionView(sessionId, user.id);
  // A mock has no single task type to continue within; its chain is the plan.
  if (!session || session.mode !== "PRACTICE_SET" || session.attempts.length === 0) {
    redirect("/practice");
  }

  const taskType = session.attempts[0].taskType;
  const view = await chainView({
    taskType,
    profession: session.profession,
    userId: user.id,
    excludeIds: session.attempts.map((a) => a.itemId),
    userProfession: user.targetProfession ?? null,
    includeScored: opts.restart === true,
  });
  // Nothing left, and the learner did not ask to start over: say so on the list
  // rather than quietly handing them exercise 1 again.
  if (!view.next) redirect(view.libraryHref);

  const id = await startSession({
    userId: user.id,
    mode: "PRACTICE_SET",
    taskType,
    profession: session.profession,
    itemId: view.next.id,
  });
  if (!id) redirect(view.libraryHref);
  redirect(`/practice/session/${id}`);
}
