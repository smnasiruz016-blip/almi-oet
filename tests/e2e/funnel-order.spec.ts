/**
 * THE FUNNEL ARRIVES IN ORDER — walked in a real browser, read off the server.
 *
 * §J's first bullet asks for the whole journey. This walks the part of it that
 * is reachable without Stripe, and asserts the one thing that must never be
 * true: an event arriving out of order.
 *
 * ── 🔴 ORDER, NOT COUNT ─────────────────────────────────────────────────────
 *
 * #59 is the reason. The retire walk asserted the SIZE of the bank, and went red
 * the day the bank grew — a test failing because the product got better. A
 * funnel walk asserting "3 exercise_submitted events" would break the first time
 * anyone added a step to the walk. What cannot change is the SEQUENCE:
 * exercise_submitted can never precede account_created, whatever the counts.
 *
 * The order itself is not written here. It comes from FUNNEL_STEP_ORDER in
 * src/lib/analytics/events.ts, so this walk and /admin/funnel cannot disagree
 * about what the journey is.
 *
 * ── WHERE THE EVENTS COME FROM ──────────────────────────────────────────────
 *
 * track() writes "ANALYTICS {...}" to the server's stdout, which scripts/e2e/run.mts
 * tees into tests/e2e/.artifacts/server.log. Nothing is sent anywhere real —
 * there is no provider, by decision: UK/EU healthcare learners would meet a
 * consent banner, and a consent banner is itself the funnel's first drop-off.
 *
 * ── WHAT THIS WALK CANNOT REACH, SAID PLAINLY ───────────────────────────────
 *
 * `checkout_started`, `trial_started` and `subscription_active` need Stripe, and
 * `account_created` needs a signup the fixture performs directly in the database
 * rather than through the form. Those steps are absent from this walk, and the
 * assertion below is about the RELATIVE order of the events that do occur — it
 * does not pretend to have seen the rest. The non-vacuity check makes sure it
 * saw enough to be saying anything at all.
 */
import { readFileSync } from "node:fs";
import { test, expect, type Page } from "@playwright/test";
import { FUNNEL_STEP_ORDER, funnelStepIndex } from "../../src/lib/analytics/events";

type Fixture = { email: string; password: string; professionSlug: string };
const fixture: Fixture = JSON.parse(readFileSync(process.env.E2E_FIXTURE_FILE!, "utf8"));

type Seen = { name: string; step: number | null; at: number };

/** Every ANALYTICS line the server has written so far, in the order written. */
function readFunnel(): Seen[] {
  const path = process.env.E2E_SERVER_LOG;
  if (!path) throw new Error("E2E_SERVER_LOG was not set by the runner");
  const raw = readFileSync(path, "utf8");
  const out: Seen[] = [];
  for (const line of raw.split(/\r?\n/)) {
    const i = line.indexOf("ANALYTICS ");
    if (i === -1) continue;
    try {
      const e = JSON.parse(line.slice(i + "ANALYTICS ".length)) as {
        name: string;
        props?: Record<string, unknown>;
      };
      out.push({ name: e.name, step: funnelStepIndex(e.name), at: out.length });
      // 🔴 The gate checks payload keys in the source; this checks what actually
      // went down the wire, which is the only place a value can arrive from a
      // variable the gate could not read.
      for (const k of Object.keys(e.props ?? {})) {
        expect(
          ["email", "name", "token", "stripeCustomerId"],
          `a funnel event carried "${k}" — that is a person, not a key`,
        ).not.toContain(k);
      }
    } catch {
      // A log line that merely contains the word is not an event.
    }
  }
  return out;
}

async function signIn(page: Page) {
  await page.goto("/login");
  await page.fill('input[name="email"]', fixture.email);
  await page.fill('input[name="password"]', fixture.password);
  await Promise.all([
    page.waitForURL((u) => !u.pathname.startsWith("/login")),
    page.click('button[type="submit"]'),
  ]);
}

test.describe.configure({ mode: "serial" });

test("the journey emits its funnel in the order the catalogue declares", async ({ page }) => {
  // landing → pricing → (signed in) → an exercise → its result → progress
  await page.goto("/");
  await expect(page.locator("body")).toBeVisible();
  await page.goto("/pricing");
  await expect(page.locator("body")).toBeVisible();

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

  const seen = readFunnel();
  const names = seen.map((s) => s.name);
  console.log(`[e2e] funnel observed: ${names.join(" → ")}`);

  // ── non-vacuity, before any ordering claim ──────────────────────────────
  expect(
    new Set(names).size,
    `only ${new Set(names).size} distinct event(s) were observed — this walk is not proving an order`,
  ).toBeGreaterThan(1);
  expect(names, "the walk submitted an exercise and no event recorded it").toContain(
    "exercise_submitted",
  );

  // ── the invariant: steps never go backwards ─────────────────────────────
  const steps = seen.filter((s) => s.step !== null);
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
