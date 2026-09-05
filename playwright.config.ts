/**
 * The browser walk. Driven by scripts/e2e/run.mts, which owns the throwaway
 * database and the server — see the header of that file for why the ordering is
 * not left to Playwright's `webServer`.
 *
 * `workers: 1` and no retries on purpose: the walk is a SEQUENCE over one shared
 * pool, and a retried step would re-enter a pool the first attempt had already
 * consumed. A flaky pass here would be worse than a failure.
 */
import { defineConfig, devices } from "@playwright/test";

const BASE_URL = process.env.E2E_BASE_URL ?? "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "./tests/e2e",
  outputDir: "./tests/e2e/.artifacts",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  // The walk is FLOOR (15) exercises long, because that is the smallest bank
  // src/instrumentation.ts will let the server start with. Each hop is a submit
  // plus two navigations, so the budget is generous rather than tight.
  timeout: 300_000,
  expect: { timeout: 15_000 },
  reporter: [["list"]],
  use: {
    baseURL: BASE_URL,
    // 🔴 WITHOUT THIS, EVERY NAVIGATION WAIT IS UNBOUNDED.
    //
    // playwright-core/types/types.d.ts:3317 — "Maximum operation time in
    // milliseconds. Defaults to `0` - no timeout." So page.waitForURL() has no
    // limit of its own and runs to the 300s per-TEST timeout, which then reports
    // that a test was slow rather than which navigation never arrived.
    //
    // That is what cost this repo an hour: the funnel walk waited for a redirect
    // that never came, sat for the full 300s, and the CI job looked like it had
    // hung somewhere unknown. Rewriting the condition from negative to positive
    // improved the MESSAGE and changed the waiting time not at all.
    //
    // 15s is generous for a redirect: the walk's own navigations run in ~1s.
    navigationTimeout: 15_000,
    // 🔴 actionTimeout is deliberately NOT set globally. The walk is FLOOR (15)
    // exercises long and some clicks are legitimately slow; a global action
    // budget would turn honest work into flakes. Bound actions individually.
    viewport: { width: 1360, height: 900 },
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
