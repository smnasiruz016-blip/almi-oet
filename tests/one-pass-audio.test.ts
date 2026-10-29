import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { onePassDecision, ONE_PASS_WINDOW_SECONDS, PLAYED_ONCE_MESSAGE } from "@/lib/oet/one-pass";

/* RR-345 (D1) · a mock recording is heard once — on the SERVER, and after a reload */
describe("RR-345 · one pass on the server", () => {
  const t0 = Date.parse("2026-10-29T08:00:00Z");
  it("practice always serves; a mock stamps the first play, serves inside the window, refuses after it", () => {
    expect(onePassDecision({ onePass: false, playedAt: new Date(t0 - 86400e3), now: t0 })).toMatchObject({ serve: true, markPlayed: false });
    expect(onePassDecision({ onePass: true, playedAt: null, now: t0 })).toMatchObject({ serve: true, markPlayed: true });
    expect(onePassDecision({ onePass: true, playedAt: new Date(t0), now: t0 + ONE_PASS_WINDOW_SECONDS * 1000 })).toMatchObject({ serve: true, markPlayed: false });
    expect(onePassDecision({ onePass: true, playedAt: new Date(t0), now: t0 + (ONE_PASS_WINDOW_SECONDS + 1) * 1000 })).toMatchObject({ serve: false, markPlayed: false });
    expect(ONE_PASS_WINDOW_SECONDS).toBeLessThan(2 * 345); // never long enough to hear the longest recording twice
  });
  it("the route decides from the attempt's own session, stamps only once, answers 410 after, and a mock file is never cached", () => {
    const route = readFileSync("src/app/api/oet/audio/[attemptId]/route.ts", "utf8");
    expect(route).toMatch(/include: \{ item: true, session: \{ select: \{ mode: true \} \} \}/);
    expect(route).toMatch(/onePassDecision\(\{ onePass, playedAt: attempt\.audioPlayedAt, now: Date\.now\(\) \}\)/);
    expect(route).toMatch(/if \(!decision\.serve\) \{\s*return NextResponse\.json\(\{ ok: false, error: PLAYED_ONCE_MESSAGE, played: true \}, \{ status: 410/);
    expect(route).toMatch(/updateMany\(\{ where: \{ id: attempt\.id, audioPlayedAt: null \}, data: \{ audioPlayedAt: new Date\(\) \} \}\)/);
    expect(route).toMatch(/serveAudio\(file, _req, \{ noStore: onePass \}\)/);
    expect(route.indexOf("onePassDecision(")).toBeLessThan(route.indexOf("prerendered(parsed.data)"));
    expect(readFileSync("src/lib/oet/serve-audio.ts", "utf8")).toMatch(/"Cache-Control": opts\.noStore \? "no-store" : "private, max-age=3600"/);
    expect(PLAYED_ONCE_MESSAGE).toMatch(/heard once/);
  });
  it("a reload shows a played mock recording as played; the column is an expand-only migration", () => {
    expect(readFileSync("src/app/(app)/practice/session/[sessionId]/page.tsx", "utf8")).toContain("listeningPlayed={Boolean(current.audioPlayedAt)}");
    expect(readFileSync("src/components/oet/OetComposer.tsx", "utf8")).toMatch(/useState<"idle" \| "loading" \| "playing" \| "done" \| "error">\(onePass && played \? "done" : "idle"\)/);
    const sql = readFileSync("prisma/migrations/6_attempt_audio_played_at/migration.sql", "utf8").split("\n").filter((l) => l.trim() && !l.startsWith("--"));
    expect(sql).toEqual(['ALTER TABLE "OetAttempt" ADD COLUMN "audioPlayedAt" TIMESTAMP(3);']);
  });
});
