import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

// Runtime behaviour tests. These are the ONLY place in this repo where React
// effects actually run: scripts/gates/timing.tsx renders to static markup, which
// executes component bodies but never useEffect — so it can prove what the first
// frame contains and nothing about what happens one second later.
//
// ── 🔴 NODE_ENV IS PINNED TO "test", AND IT IS NOT COSMETIC ──────────────────
//
// React 19 exports `act` from its DEVELOPMENT build only. Its entry point picks
// a bundle at import time:
//
//     NODE_ENV unset       -> react.development.js   typeof act === "function"
//     NODE_ENV=test        -> react.development.js   typeof act === "function"
//     NODE_ENV=production  -> react.production.js    typeof act === "undefined"
//
// (Measured directly on 2026-09-01, not inferred.)
//
// Vitest defaults NODE_ENV to "test" only when it is UNSET. It inherits an
// existing value — so a suite invoked from inside a build that already exported
// NODE_ENV=production silently loaded React's production bundle and every test
// died on `TypeError: act is not a function`. That is exactly what broke the
// Vercel production deploy of #14: locally the suite ran in a shell with no
// NODE_ENV and passed; Vercel runs the whole build step with NODE_ENV=production
// and it failed.
//
// Pinning it here means the suite cannot inherit production from ANY caller,
// whatever invokes it. Verified by running `NODE_ENV=production npm test` — it
// passes with this line and fails without it.
export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["tests/**/*.test.tsx", "tests/**/*.test.ts"],
    env: { NODE_ENV: "test" },
  },
  resolve: {
    alias: { "@": resolve(import.meta.dirname, "./src") },
  },
});
