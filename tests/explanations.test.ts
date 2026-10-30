import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { GEN_ITEMS } from "../scripts/seed/gen/index";
import { buildObjectiveReview } from "@/lib/oet/review";

/**
 * RR-346 (B1) · EXPLANATIONS — written for the 3 mock forms, shown after marking.
 * The rules a learner relies on: every explanation stands on the item's OWN words (its evidence is a literal quotation from
 * the script or text), it answers a question that exists, it explains only options that exist, and it never reaches the
 * browser before the answer is marked.
 */
type Opt = { id: string; text: string };
type Q = { id: string; options?: Opt[]; answer?: string };
type Ex = { why: string; evidence?: string; wrong?: Record<string, string>; watch?: string };
const ITEMS = GEN_ITEMS as unknown as { slug: string; taskType: string; form?: string; payload: Record<string, unknown> }[];
const withEx = ITEMS.filter((i) => i.payload.explanations);
const sourceOf = (p: Record<string, unknown>): string =>
  [p.audioScript, ...(((p.texts as { body: string }[]) ?? []).map((t) => t.body)), ...(((p.passages as unknown[]) ?? []).map((x) => (typeof x === "string" ? x : JSON.stringify(x))))].filter(Boolean).join("\n");

describe("RR-346 · B1 explanations", () => {
  it("cover the 3 mock forms: 57 items, 252 questions", () => {
    const form = ITEMS.filter((i) => i.form && i.payload.explanations);
    expect(form.length).toBe(57);
    const n = form.reduce((a, i) => a + Object.keys(i.payload.explanations as object).length, 0);
    expect(n).toBe(252);
  });
  it("cover the practice bank too: 244 items, 1419 questions (Nov 2026, beta-g checked)", () => {
    const practice = ITEMS.filter((i) => !i.form && i.payload.explanations);
    expect(practice.length).toBe(244);
    const n = practice.reduce((a, i) => a + Object.keys(i.payload.explanations as object).length, 0);
    expect(n).toBe(1419);
  });
  it("every explanation answers a real question, quotes its own item word for word, and explains only real wrong options", () => {
    const bad: string[] = [];
    for (const i of withEx) {
      const ex = i.payload.explanations as Record<string, Ex>, src = sourceOf(i.payload);
      const qs = ((i.payload.questions ?? i.payload.gaps) as Q[]) ?? [];
      const ids = new Set(qs.map((q) => q.id));
      for (const [qid, e] of Object.entries(ex)) {
        if (!ids.has(qid)) bad.push(`${i.slug} ${qid}: no such question`);
        if (!e.why?.trim()) bad.push(`${i.slug} ${qid}: no why`);
        if (e.evidence && !src.includes(e.evidence)) bad.push(`${i.slug} ${qid}: evidence not in the item's own text`);
        const q = qs.find((x) => x.id === qid);
        for (const optId of Object.keys(e.wrong ?? {})) {
          if (!q?.options?.some((o) => o.id === optId)) bad.push(`${i.slug} ${qid}: explains option ${optId}, which does not exist`);
          if (q?.answer === optId) bad.push(`${i.slug} ${qid}: calls the KEY wrong`);
        }
      }
      for (const q of qs) if (!ex[q.id]) bad.push(`${i.slug} ${q.id}: no explanation`);
    }
    expect(bad).toEqual([]);
  });
  it("is shown after marking: why, the evidence, and — for a wrong choice — why THAT option is wrong", () => {
    const i = withEx.find((x) => x.taskType === "READING_PART_C")!;
    const q = (i.payload.questions as Q[])[0], wrong = q.options!.find((o) => o.id !== q.answer)!;
    const r = buildObjectiveReview("READING_PART_C", i.payload, { answers: { [q.id]: wrong.id } }, i.slug)!;
    const ex = (i.payload.explanations as Record<string, Ex>)[q.id];
    expect(r.rows[0].ok).toBe(false);
    expect(r.rows[0].explanation).toEqual({ why: ex.why, evidence: ex.evidence ?? null, note: ex.wrong![wrong.id] });
    const right = buildObjectiveReview("READING_PART_C", i.payload, { answers: { [q.id]: q.answer } }, i.slug)!;
    expect(right.rows[0]).toMatchObject({ ok: true, explanation: { why: ex.why, note: null } });
  });
  it("never reaches the browser before marking, and never during a mock", () => {
    const page = readFileSync("src/app/(app)/practice/session/[sessionId]/page.tsx", "utf8");
    const sanitize = page.slice(page.indexOf("function sanitizePayload"), page.indexOf("export default"));
    expect(sanitize).not.toMatch(/explanations/); // a whitelist: the field is never passed to the composer
    expect(page).toContain('variant="step" mode={session.mode}');
    const result = readFileSync("src/components/oet/OetResult.tsx", "utf8");
    expect(result).toMatch(/const inMock = variant === "step" && mode === "MOCK";/);
    expect(result).toMatch(/\{inMock \? \(\s*<p data-mock-review-later/);
    expect(readFileSync("src/components/oet/OetSessionResult.tsx", "utf8")).toMatch(/\{isMock && \(\s*<section data-mock-review/);
  });
});
