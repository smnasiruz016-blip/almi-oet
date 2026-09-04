/**
 * WHAT A RETIRE DOES TO A LEARNER WHO IS MID-EXERCISE — WRITING AND SPEAKING.
 *
 * The owner's ruling of 4 September 2026 asks one question before the 360 legacy
 * Writing and Speaking items are retired: **does an IN_PROGRESS attempt on an
 * item that has just been switched off still open, and can it still be
 * submitted?** Six real attempts on production are in exactly that state, and
 * the answer decides whether 360 items are retired or 352.
 *
 * ── WHY THE PART C WALK IS NOT THE ANSWER ───────────────────────────────────
 *
 * `retire-part-c.spec.ts` already proves it for Reading Part C, and it would be
 * easy to say the same must hold here. It is not the same path: Writing and
 * Speaking are AI-graded, and their submit carries two further gates — a
 * verified email and the trial allowance — plus a substance guard, none of which
 * a Reading submit meets. An answer measured on one path is not an answer on
 * the other.
 *
 * ── HOW IT IS MEASURED WITHOUT ASSUMING THE ANSWER ──────────────────────────
 *
 * The probe is an EMPTY submission. `src/app/api/oet/submit/route.ts` refuses
 * one at the substance guard — AFTER every entitlement gate and BEFORE the first
 * paid call — so it travels the whole route and costs nothing.
 *
 * 🔴 And the assertion is not "it returns 422". It is that the status and the
 * refusal reason are IDENTICAL before and after the retire. That way the test
 * does not have to predict which gate answers; it only has to show that
 * retiring the item changed nothing for the learner holding it. If some other
 * gate ever answers first, this still measures the right thing.
 *
 * 🔴 AND IT PROVES THE RETIRE ACTUALLY HAPPENED. Without that, "nothing changed"
 * is exactly what a retire that silently did nothing would print — the vacuous
 * pass this project keeps meeting. The library is read back and the title must
 * be gone from it.
 */
import { readFileSync } from "node:fs";
import { test, expect, type Page } from "@playwright/test";
import { PrismaClient } from "@prisma/client";
import { assertDisposable } from "../../scripts/e2e/disposable-db.mjs";

type AiWalk = { taskSlug: string; professionSlug: string; title: string };
type Fixture = { email: string; password: string; writing: AiWalk; speaking: AiWalk };

const fixture: Fixture = JSON.parse(readFileSync(process.env.E2E_FIXTURE_FILE!, "utf8"));

async function signIn(page: Page) {
  await page.goto("/login");
  await page.fill('input[name="email"]', fixture.email);
  await page.fill('input[name="password"]', fixture.password);
  await Promise.all([
    page.waitForURL((u) => !u.pathname.startsWith("/login")),
    page.click('button[type="submit"]'),
  ]);
}

/** The composer element that proves THIS task's content actually rendered.
 *  Asserting the content beats asserting a title: `session-item-title` is not on
 *  the Speaking page at all — it opens in a preparation phase with its own
 *  chrome — and the first version of this walk sat waiting for it until the test
 *  timed out. */
const contentTestId = (taskSlug: string) =>
  taskSlug === "writing-letter" ? "writing-case-notes" : "speaking-card";

/** Open the named item from its library and return the session URL it lands on. */
async function start(page: Page, w: AiWalk): Promise<string> {
  await page.goto(`/practice/${w.professionSlug}/${w.taskSlug}`);
  await expect(page.getByTestId("exercise-list-heading")).toBeVisible();
  const rows = page.getByTestId("exercise-row");
  const n = await rows.count();
  for (let i = 0; i < n; i++) {
    const row = rows.nth(i);
    if ((await row.getByTestId("exercise-title").innerText()).trim() === w.title) {
      await row.getByTestId("exercise-start").click();
      await page.waitForURL(/\/practice\/session\//);
      await expect(page.getByTestId(contentTestId(w.taskSlug))).toBeVisible();
      return page.url();
    }
  }
  throw new Error(`the ${w.taskSlug} list does not contain ${JSON.stringify(w.title)}`);
}

/** The attempt id out of a /practice/session/<id> URL. */
const sessionIdOf = (url: string) => url.split("/practice/session/")[1]?.split(/[?#]/)[0] ?? "";

/**
 * Submit nothing, as the signed-in learner, and report exactly what came back.
 *
 * 🔴 THE COOKIE IS CARRIED BY HAND, AND THREE EARLIER VERSIONS SHOW WHY.
 *   · Playwright's standalone `request` fixture has its own context: 401.
 *   · `page.request` did not carry the session cookie either: 401 again. And
 *     401 === 401 before and after a retire, so the walk PASSED and measured
 *     nothing — the vacuous shape this project keeps meeting. The guard below
 *     (`not.toBe(401)`) exists because of it.
 *   · Clicking the button works for Writing, but a Speaking item opens in its
 *     preparation phase and its "type your transcript instead" control could not
 *     be actuated headless. All six IN_PROGRESS attempts on production are
 *     SPEAKING, so that was the one path that had to be measured.
 * Reading the context's cookies and sending them explicitly is deterministic and
 * works for both.
 *
 * The submission is EMPTY on purpose: src/app/api/oet/submit refuses an empty AI
 * submission at the substance guard — after every entitlement gate, before the
 * first paid call — so it travels the whole route and costs nothing.
 */
async function emptySubmit(
  prisma: PrismaClient,
  page: Page,
  taskSlug: string,
): Promise<{ status: number; reason: string }> {
  const sessionId = sessionIdOf(page.url());
  const attempt = await prisma.oetAttempt.findFirst({
    where: { sessionId, status: "IN_PROGRESS" },
    select: { id: true },
    orderBy: { startedAt: "desc" },
  });
  if (!attempt) throw new Error(`no IN_PROGRESS attempt on session ${sessionId}`);
  const cookie = (await page.context().cookies())
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");
  const res = await page.request.post("/api/oet/submit", {
    headers: { cookie },
    data: {
      attemptId: attempt.id,
      response: taskSlug === "writing-letter" ? { text: "" } : { transcript: "" },
    },
  });
  const json = (await res.json().catch(() => ({}))) as { reason?: string; error?: string };
  return { status: res.status(), reason: String(json.reason ?? json.error ?? "") };
}

/** Is this title still offered in its library? */
async function listed(page: Page, w: AiWalk): Promise<boolean> {
  await page.goto(`/practice/${w.professionSlug}/${w.taskSlug}`);
  await expect(page.getByTestId("exercise-list-heading")).toBeVisible();
  const titles = await page.getByTestId("exercise-title").allInnerTexts();
  return titles.map((t) => t.trim()).includes(w.title);
}

test.describe.configure({ mode: "serial" });

test("🔴 an in-progress Writing and Speaking attempt survives its item being retired", async ({
  page,
}) => {
  const url = process.env.E2E_DATABASE_URL;
  expect(url, "E2E_DATABASE_URL is not set — refusing to touch any database").toBeTruthy();
  assertDisposable(url!);

  const prisma = new PrismaClient({ datasourceUrl: url });
  await signIn(page);

  // ── before ────────────────────────────────────────────────────────────────
  const wUrl = await start(page, fixture.writing);
  const wBefore = await emptySubmit(prisma, page, fixture.writing.taskSlug);
  await page.goto(wUrl);
  const sUrl = await start(page, fixture.speaking);
  const sBefore = await emptySubmit(prisma, page, fixture.speaking.taskSlug);

  expect(await listed(page, fixture.writing), "Writing item should be listed before the retire").toBe(true);
  expect(await listed(page, fixture.speaking), "Speaking item should be listed before the retire").toBe(true);
  console.log(
    `[e2e] before retire — writing ${wBefore.status} "${wBefore.reason}" · speaking ${sBefore.status} "${sBefore.reason}"`,
  );
  // 🔴 THE PROBE MUST HAVE REACHED PAST AUTHENTICATION, or "identical before and
  // after" is satisfied by a request that never arrived. This assertion exists
  // because the first version of this walk passed on 401/401.
  for (const [what, r] of [["writing", wBefore], ["speaking", sBefore]] as const) {
    expect(r.status, `the ${what} probe was rejected as signed-out — it never reached the item`).not.toBe(401);
  }

  // ── retire the two items under the learner ────────────────────────────────
  try {
    const res = await prisma.oetItem.updateMany({
      where: { title: { in: [fixture.writing.title, fixture.speaking.title] } },
      data: { active: false },
    });
    expect(res.count, "the retire did not touch two rows").toBe(2);

    // The retire must be REAL, or "nothing changed" proves nothing.
    expect(await listed(page, fixture.writing), "the retired Writing item is still offered").toBe(false);
    expect(await listed(page, fixture.speaking), "the retired Speaking item is still offered").toBe(false);

    // ── after ───────────────────────────────────────────────────────────────
    await page.goto(wUrl);
    await expect(
      page.getByTestId("writing-case-notes"),
      "the learner's open Writing exercise no longer renders its case notes",
    ).toBeVisible();
    const wAfter = await emptySubmit(prisma, page, fixture.writing.taskSlug);

    await page.goto(sUrl);
    await expect(
      page.getByTestId("speaking-card"),
      "the learner's open Speaking exercise no longer renders its role-play card",
    ).toBeVisible();
    const sAfter = await emptySubmit(prisma, page, fixture.speaking.taskSlug);

    console.log(
      `[e2e] after retire  — writing ${wAfter.status} "${wAfter.reason}" · speaking ${sAfter.status} "${sAfter.reason}"`,
    );

    expect(wAfter, "retiring the item changed what the Writing submit answers").toEqual(wBefore);
    expect(sAfter, "retiring the item changed what the Speaking submit answers").toEqual(sBefore);
  } finally {
    await prisma.oetItem.updateMany({
      where: { title: { in: [fixture.writing.title, fixture.speaking.title] } },
      data: { active: true },
    });
    await prisma.$disconnect();
  }

  expect(await listed(page, fixture.writing), "the Writing item was not restored").toBe(true);
});
