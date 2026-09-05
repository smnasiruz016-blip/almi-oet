/**
 * THE FUNNEL ARRIVES IN ORDER — walked in a real browser, read back from the
 * table the admin page reads.
 *
 * Section J's first bullet asks for the whole journey. This walks the part of it
 * that is reachable without Stripe, and asserts the one thing that must never be
 * true: a step arriving out of order.
 *
 * ── ORDER, NOT COUNT ────────────────────────────────────────────────────────
 *
 * #59 is the reason. The retire walk asserted the SIZE of the bank and went red
 * the day the bank grew — a test failing because the product got better. A funnel
 * walk asserting "3 exercise_submitted events" would break the first time anyone
 * added a step to the walk. What cannot change is the SEQUENCE.
 *
 * The order itself is not written here. It comes from FUNNEL_STEP_ORDER in
 * src/lib/analytics/events.ts, so this walk and /admin/funnel cannot disagree
 * about what the journey is.
 *
 * ── 🔴 WHERE THE EVENTS COME FROM, AND WHY IT IS NOT THE LOG ────────────────
 *
 * They are read from the FunnelEvent table — the same rows /admin/funnel counts.
 *
 * The first version read the server's stdout, teed to a file. It could never have
 * worked, and it took two defects to see it:
 *
 * 1. The log was written into tests/e2e/.artifacts, which IS playwright's
 *    outputDir, and playwright clears that directory as it starts. The spec
 *    opened a path playwright had just deleted and died on a raw ENOENT. That is
 *    now scripts/e2e/server-log-path.mts plus a millisecond-cheap gate.
 *
 * 2. 🔴 AND FIXING THE PATH CHANGED NOTHING, because the server's stdout is
 *    BLOCK-BUFFERED when piped. Measured on a full walk: 0 ANALYTICS lines
 *    arrived while the 40 tests ran, and all 80 landed after the server was
 *    killed. A spec reading that file mid-run sees an empty slice however correct
 *    its path is.
 *
 * The table has neither problem, and it is the source the product itself reports
 * from — one place, not two answers.
 *
 * ── 🔴 AND WHY THE WALK NOW SIGNS UP ────────────────────────────────────────
 *
 * FUNNEL_STEP_ORDER is account_created, email_verified, checkout_started,
 * trial_started, exercise_submitted, subscription_active. The fixture creates its
 * learner with prisma.user.create and sets emailVerified directly, and the rest
 * need Stripe — so the walk used to reach exactly ONE step. An order over one step
 * can never go backwards: the assertion was unfalsifiable by construction, and its
 * non-vacuity guard counted distinct event NAMES, which page views satisfied. It
 * would have passed forever without measuring anything.
 *
 * So the walk now registers a real account through the real form, which fires
 * account_created, and the guard below counts distinct STEPS. Two steps is the
 * minimum at which "in order" means anything.
 *
 * ── WHAT THIS WALK CANNOT REACH, SAID PLAINLY ───────────────────────────────
 *
 * email_verified, checkout_started, trial_started and subscription_active need a
 * mailbox or Stripe. They are absent, and the assertion is about the RELATIVE
 * order of the steps that do occur — it does not pretend to have seen the rest.
 */
import { readFileSync } from "node:fs";
import { randomBytes } from "node:crypto";
import { test, expect, type Page } from "@playwright/test";
import { PrismaClient } from "@prisma/client";
import { FUNNEL_STEP_ORDER, funnelStepIndex } from "../../src/lib/analytics/events";

type Fixture = { email: string; password: string; professionSlug: string };
const fixture: Fixture = JSON.parse(readFileSync(process.env.E2E_FIXTURE_FILE!, "utf8"));

// The throwaway database the runner made. assertDisposable() has already refused
// anything that is not one.
const prisma = new PrismaClient({ datasourceUrl: process.env.E2E_DATABASE_URL });
test.afterAll(async () => {
  await prisma.$disconnect();
});

type Seen = { name: string; step: number | null };

const FORBIDDEN = ["email", "name", "token", "stripeCustomerId"];

/** Every event recorded since `since`, oldest first. */
async function readFunnelOnce(since: Date): Promise<Seen[]> {
  const rows = await prisma.funnelEvent.findMany({
    where: { createdAt: { gte: since } },
    orderBy: { createdAt: "asc" },
  });
  return rows.map((r) => {
    // The gate checks payload keys in the SOURCE; this checks what was actually
    // stored, which is the only place a value can arrive from a variable the gate
    // could not read.
    for (const k of Object.keys((r.props ?? {}) as Record<string, unknown>)) {
      expect(FORBIDDEN, `a funnel event carried "${k}" — that is a person, not a key`).not.toContain(
        k,
      );
    }
    return { name: r.name, step: funnelStepIndex(r.name) };
  });
}

/**
 * The same, but waits for the writes to land.
 *
 * track() persists fire-and-forget on purpose — analytics must never be able to
 * cost a learner their submission (tests/analytics-never-blocks.test.ts). So the
 * rows arrive shortly AFTER the response the browser saw, and a single read can
 * race them. This waits for the steps rather than sleeping a guessed amount.
 */
async function readFunnel(since: Date, wantSteps: number): Promise<Seen[]> {
  const deadline = Date.now() + 20_000;
  for (;;) {
    const seen = await readFunnelOnce(since);
    const steps = new Set(seen.filter((s) => s.step !== null).map((s) => s.step));
    if (steps.size >= wantSteps || Date.now() > deadline) return seen;
    await new Promise((r) => setTimeout(r, 500));
  }
}

async function signIn(page: Page) {
  await page.goto("/login");
  await page.fill('input[name="email"]', fixture.email);
  await page.fill('input[name="password"]', fixture.password);
  await Promise.all([
    // The DESTINATION, not "anything that is not /login". Both pages redirect to
    // /account on success (login/page.tsx:23, signup/page.tsx:60); a failure
    // redirects BACK with ?error=..., which a negative condition treats as "keep
    // waiting" and sits on for the full 300s test timeout before saying nothing
    // useful. Waiting for the destination fails immediately, and playwright's own
    // message names the URL it wanted.
    page.waitForURL(/\/account/),
    page.click('button[type="submit"]'),
  ]);
}

/** A real registration through the real form. This is what fires account_created. */
async function signUp(page: Page) {
  const email = `e2e-funnel-${randomBytes(6).toString("hex")}@example.com`;
  await page.goto("/signup");
  await page.fill('input[name="name"]', "Funnel Walk");
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', `e2e-${randomBytes(9).toString("hex")}`);
  await Promise.all([
    // Positive, for the same reason as signIn above: /signup?error=taken and
    // ?error=invalid both still start with /signup.
    page.waitForURL(/\/account/),
    page.click('button[type="submit"]'),
  ]);
}

test.describe.configure({ mode: "serial" });

test("the journey emits its funnel in the order the catalogue declares", async ({ page }) => {
  // Everything the earlier specs recorded is behind us; only what follows is ours.
  const since = new Date();

  // landing → pricing → register → (as the fixture learner) an exercise → progress
  await page.goto("/");
  await expect(page.locator("body")).toBeVisible();
  await page.goto("/pricing");
  await expect(page.locator("body")).toBeVisible();

  await signUp(page);

  // A different person does the exercise: the fixture learner, who already has a
  // bank and an entitlement. Cookies rather than a logout click, so the walk does
  // not depend on where the button happens to live.
  await page.context().clearCookies();
  await signIn(page);

  const library = `/practice/${fixture.professionSlug}/reading-part-a`;
  await page.goto(library);
  await expect(page.getByTestId("exercise-list-heading")).toBeVisible();
  await page.getByTestId("exercise-start").first().click();
  await expect(page.getByTestId("session-item-title")).toBeVisible();

  const box = page.locator('input[type="text"]').first();
  await expect(box).toBeVisible();
  await box.fill("a deliberate answer");
  const submitted = page.waitForResponse((r) => r.url().includes("/api/oet/submit"));
  await page.getByTestId("submit-answers").click();
  expect((await submitted).status()).toBe(200);

  await page.goto("/progress");
  await expect(page.getByTestId("progress-page")).toBeVisible();

  const seen = await readFunnel(since, 2);
  const names = seen.map((s) => s.name);
  console.log(`[e2e] funnel observed: ${names.join(" → ")}`);

  // ── non-vacuity, before any ordering claim ──────────────────────────────
  //
  // 🔴 DISTINCT STEPS, NOT DISTINCT NAMES. Counting names let page views satisfy
  // this while the ordering loop below saw a single step index and could never
  // fail. One step is not an order.
  const steps = seen.filter((s) => s.step !== null);
  const distinctSteps = new Set(steps.map((s) => s.step));
  expect(
    distinctSteps.size,
    `only ${distinctSteps.size} distinct STEP(s) were recorded (${names.join(", ") || "none"}) — ` +
      "an order over fewer than two steps cannot be violated, so this walk would be " +
      "asserting nothing",
  ).toBeGreaterThanOrEqual(2);
  expect(names, "the walk registered an account and no event recorded it").toContain(
    "account_created",
  );
  expect(names, "the walk submitted an exercise and no event recorded it").toContain(
    "exercise_submitted",
  );

  // ── the invariant: steps never go backwards ─────────────────────────────
  let highest = -1;
  for (const s of steps) {
    expect(
      s.step!,
      `"${s.name}" arrived after a later step — the journey went backwards. ` +
        `Order is FUNNEL_STEP_ORDER: ${FUNNEL_STEP_ORDER.join(" → ")}. Observed: ${names.join(" → ")}`,
    ).toBeGreaterThanOrEqual(highest);
    highest = Math.max(highest, s.step!);
  }
});
