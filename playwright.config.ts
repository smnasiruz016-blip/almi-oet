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
    viewport: { width: 1360, height: 900 },
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
