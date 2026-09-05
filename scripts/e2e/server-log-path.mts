/**
 * WHERE THE SERVER LOG LIVES, AND THE ONE RULE ABOUT IT.
 *
 * track() writes an "ANALYTICS {...}" line to the server's stdout.
 * scripts/e2e/run.mts tees that to a file so tests/e2e/funnel-order.spec.ts can
 * read the ORDER the events arrived in.
 *
 * THE RULE: that file must NOT live inside playwright's outputDir.
 *
 * It did. The log was written to tests/e2e/.artifacts/server.log, which is
 * exactly playwright.config.ts's outputDir, and playwright CLEARS that directory
 * as it starts. So the sequence was: the runner creates the log -> playwright
 * wipes the directory -> the spec opens the path and gets ENOENT. The write
 * stream carried on writing into an unlinked file, so the ANALYTICS lines still
 * appeared on the console and nothing looked wrong.
 *
 * The walk was never once green. It shipped in #70 and turned main red, and the
 * merge went ahead 22 minutes after e2e had already reported the failure.
 *
 * Measured, not assumed: a marker file placed in .artifacts is gone after a
 * playwright run, and so is one held open by a write stream.
 *
 * This lives in its own module so the rule can be TESTED -- see
 * tests/e2e-log-outside-outputdir.test.ts. A guard buried inside a 200-line
 * runner that needs a database and a build to reach is a guard nobody can prove.
 */
import { join, relative, resolve, isAbsolute } from "node:path";
import pwConfig from "../../playwright.config.js";

/** The one place the server log's location is decided. */
export function serverLogPath(): string {
  return join(process.cwd(), "tests", "e2e", ".logs", "server.log");
}

/** Playwright's output directory, resolved -- read from the config, not repeated. */
export function playwrightOutputDir(): string {
  return resolve(process.cwd(), pwConfig.outputDir ?? "test-results");
}

/** True when `child` sits inside `parent`. */
export function isInside(parent: string, child: string): boolean {
  const rel = relative(resolve(parent), resolve(child));
  return rel !== "" && !rel.startsWith("..") && !isAbsolute(rel);
}

/**
 * Refuse a log path inside playwright's outputDir.
 *
 * outputDir is read from playwright.config.ts rather than repeated here, so
 * moving it in the config cannot silently re-open the hole. If the two ever
 * point at the same tree again the walk stops BEFORE it starts, instead of
 * producing a spec that reads a file nothing wrote.
 */
export function assertNotInsideOutputDir(logPath: string): void {
  const outputDir = playwrightOutputDir();
  if (isInside(outputDir, logPath)) {
    throw new Error(
      "[e2e] the server log would live inside playwright's outputDir (" +
        outputDir +
        "), which playwright clears at the start of every run. Move it outside, " +
        "or the funnel walk reads a file that no longer exists.",
    );
  }
}
