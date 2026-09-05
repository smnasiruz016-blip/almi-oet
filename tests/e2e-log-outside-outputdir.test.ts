/**
 * @vitest-environment node
 *
 * gate:e2e-log — THE SERVER LOG MUST NOT LIVE WHERE PLAYWRIGHT SWEEPS.
 *
 * The funnel walk reads the ORDER events arrive in from a file the runner tees
 * the server's stdout into. That file was written to tests/e2e/.artifacts, which
 * IS playwright's outputDir, and playwright clears that directory as it starts.
 * The spec therefore opened a path that no longer existed and died on a raw
 * ENOENT -- on every platform, on every run. It was never once green, it shipped
 * in #70, and it turned main red.
 *
 * The reason this gate exists rather than a comment: the runner needs a
 * throwaway database and a full Next build before it reaches the line that
 * decides the path, so nothing cheap could ever have caught the mistake. Here it
 * costs milliseconds.
 *
 * The outputDir is READ FROM playwright.config.ts on both sides, so moving it in
 * the config cannot quietly re-open the hole.
 */
import { describe, expect, it } from "vitest";
import { join } from "node:path";
import {
  assertNotInsideOutputDir,
  isInside,
  playwrightOutputDir,
  serverLogPath,
} from "../scripts/e2e/server-log-path.mjs";

describe("isInside — the predicate itself, before anything relies on it", () => {
  // Without this the rule below could pass because isInside() answers "no" to
  // everything, which is exactly how a guard becomes decoration.
  it("says YES to a path within the directory", () => {
    expect(isInside(playwrightOutputDir(), join(playwrightOutputDir(), "server.log"))).toBe(true);
  });

  it("says NO to a sibling, and NO to the directory itself", () => {
    expect(isInside(playwrightOutputDir(), join(playwrightOutputDir(), "..", "x.log"))).toBe(false);
    expect(isInside(playwrightOutputDir(), playwrightOutputDir())).toBe(false);
  });

  it("is not fooled by a name that merely starts the same way", () => {
    expect(isInside("/a/artifacts", "/a/artifacts-extra/server.log")).toBe(false);
  });
});

describe("the rule", () => {
  it("the real server log is OUTSIDE playwright outputDir", () => {
    expect(
      isInside(playwrightOutputDir(), serverLogPath()),
      "the server log is back inside the directory playwright wipes — the funnel " +
        "walk will read a file that no longer exists",
    ).toBe(false);
  });

  it("the real path is accepted", () => {
    expect(() => assertNotInsideOutputDir(serverLogPath())).not.toThrow();
  });

  it("a path inside outputDir is REFUSED, and the message says why", () => {
    expect(() => assertNotInsideOutputDir(join(playwrightOutputDir(), "server.log"))).toThrow(
      /clears at the start of every run/,
    );
  });
});
