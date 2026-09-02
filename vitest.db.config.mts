import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

// Tests that need a REAL PostgreSQL. They are excluded from the default project
// (see vitest.config.mts) because `npm test` does not provision a server;
// scripts/measure/blank-submit.mts boots a throwaway one and runs this config
// against it.
//
// `environment: "node"` on purpose — these drive a route handler, not a
// component, and jsdom would only slow it down.
export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/db/**/*.test.ts"],
    env: { NODE_ENV: "test" },
    // One database, shared state, sequential cases.
    fileParallelism: false,
    testTimeout: 30_000,
  },
  resolve: {
    alias: { "@": resolve(import.meta.dirname, "./src") },
  },
});
