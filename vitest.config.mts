import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

// Runtime behaviour tests. These are the ONLY place in this repo where React
// effects actually run: scripts/gates/timing.tsx renders to static markup, which
// executes component bodies but never useEffect — so it can prove what the first
// frame contains and nothing about what happens one second later.
export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["tests/**/*.test.tsx", "tests/**/*.test.ts"],
  },
  resolve: {
    alias: { "@": resolve(import.meta.dirname, "./src") },
  },
});
