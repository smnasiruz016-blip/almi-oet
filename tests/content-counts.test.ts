import { describe, it, expect, vi, beforeEach } from "vitest";

/* RR-345 · the counts on the home and pricing pages are READ from the live bank (active only) and the startable mock forms — never typed;
 * Writing and Speaking are said per profession (the smallest); the database not readable → no line, never a guess */
const state: { rows: Array<{ subTest: string; profession: string | null; _count: number }>; fail: boolean; forms: { declared: string[]; complete: string[]; startable: boolean } } = { rows: [], fail: false, forms: { declared: [], complete: [], startable: false } };
vi.mock("@/lib/prisma", () => ({ prisma: { oetItem: { groupBy: async (q: { where: { active: boolean } }) => { if (state.fail) throw new Error("no database"); expect(q.where).toEqual({ active: true }); return state.rows; } } } }));
vi.mock("@/lib/oet/form-completeness", () => ({ formCompleteness: async () => state.forms }));

const PROFS = ["NURSING", "MEDICINE", "DENTISTRY", "DIETETICS", "OCCUPATIONAL_THERAPY", "OPTOMETRY", "PHARMACY", "PHYSIOTHERAPY", "PODIATRY", "RADIOGRAPHY", "SPEECH_PATHOLOGY", "VETERINARY_SCIENCE"];
beforeEach(() => {
  state.fail = false;
  state.forms = { declared: ["form-1", "form-2", "form-3"], complete: ["form-1", "form-2", "form-3"], startable: true };
  state.rows = [{ subTest: "LISTENING", profession: null, _count: 193 }, { subTest: "READING", profession: null, _count: 108 },
    ...PROFS.map((p) => ({ subTest: "WRITING", profession: p, _count: 15 })), ...PROFS.map((p) => ({ subTest: "SPEAKING", profession: p, _count: p === "NURSING" ? 30 : 15 }))];
});

describe("RR-345 · the true content counts", () => {
  it("says the live bank's numbers, per profession for Writing and Speaking, and the startable mocks", async () => {
    const { liveCounts, countsLine } = await import("@/components/oet/ContentCounts");
    const c = await liveCounts();
    expect(c).not.toBeNull();
    expect(countsLine(c!)).toBe("676 practice items in all 12 professions: 193 Listening and 108 Reading for everyone; at least 15 Writing letters and 15 Speaking role-plays for your own profession · 3 full timed mock exams");
    expect(countsLine(c!)).not.toMatch(/guarantee/i);
  });
  it("moves with the bank: a retired item, a profession with fewer, no startable mock", async () => {
    const { liveCounts, countsLine } = await import("@/components/oet/ContentCounts");
    state.rows = state.rows.map((r) => (r.subTest === "WRITING" && r.profession === "PODIATRY" ? { ...r, _count: 14 } : r));
    state.forms = { declared: ["form-1"], complete: [], startable: false };
    expect(countsLine((await liveCounts())!)).toBe("675 practice items in all 12 professions: 193 Listening and 108 Reading for everyone; at least 14 Writing letters and 15 Speaking role-plays for your own profession");
  });
  it("no database → no line (never a typed or guessed number)", async () => {
    const { liveCounts } = await import("@/components/oet/ContentCounts");
    state.fail = true;
    expect(await liveCounts()).toBeNull();
  });
  it("the home cards describe the WHOLE sub-test (Parts A, B and C; two role-plays), never Part A alone", async () => {
    const { SUBTEST_COPY } = await import("@/lib/oet/subtest-copy");
    expect(SUBTEST_COPY.LISTENING.what).toMatch(/^Three parts, 42 questions: two consultations .*six short workplace extracts.*two talks or interviews/);
    expect(SUBTEST_COPY.READING.what).toBe("Three parts, 42 questions: four short texts on one topic against a strict 15-minute clock, then six workplace texts and two long articles in 45 minutes.");
    expect(SUBTEST_COPY.WRITING.what).toMatch(/^Read the case notes for 5 minutes, then write a profession-specific letter \(180–200 words\) in 40\./);
    expect(SUBTEST_COPY.SPEAKING.what).toMatch(/^Two role-plays a test, each about 5 minutes after 3 minutes to prepare/);
    const home = (await import("node:fs")).readFileSync("src/app/page.tsx", "utf8");
    expect(home).toContain("{SUBTEST_COPY[subTest].what}"); expect(home).not.toContain("{parts[0]?.blurb}"); expect(home).toContain("<ContentCounts");
    expect((await import("node:fs")).readFileSync("src/app/pricing/page.tsx", "utf8")).toContain("<ContentCounts");
  });
});
