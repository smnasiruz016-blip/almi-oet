import { describe, it, expect, vi } from "vitest";

// pickForm is pure; the module's database client is never reached here.
vi.mock("@/lib/prisma", () => ({ prisma: {} }));
import { pickForm } from "@/lib/oet/session";

/**
 * Mocks 4–10 (owner + beta-g, 1 Nov 2026): with ten forms, a learner gets a form they have NOT started yet, and a form
 * repeats only once every complete form has been started. Before this the pick was random over all complete forms, so
 * a learner could sit the same form twice while nine were untouched.
 */
const TEN = ["form-1", "form-2", "form-3", "form-4", "form-5", "form-6", "form-7", "form-8", "form-9", "form-10"];

describe("pickForm — an unstarted form first", () => {
  it("never repeats a started form while an unstarted one is complete", () => {
    const started = ["form-1", "form-2", "form-3", "form-4", "form-5", "form-6", "form-7", "form-8", "form-9"];
    for (const r of [0, 0.3, 0.5, 0.99]) expect(pickForm(TEN, started, () => r)).toBe("form-10");
  });
  it("draws only from the unstarted forms, and can reach each of them", () => {
    const got = new Set([0, 0.34, 0.67, 0.99].map((r) => pickForm(TEN, ["form-1", "form-2", "form-3", "form-4", "form-5", "form-6", "form-7"], () => r)));
    expect([...got].sort()).toEqual(["form-10", "form-8", "form-9"]);
  });
  it("repeats only when every complete form has been started", () => {
    expect(TEN).toContain(pickForm(TEN, [...TEN, "form-3"], () => 0.5));
  });
  it("ignores a started form that is no longer complete, and an attempt with no form", () => {
    expect(pickForm(["form-2"], ["form-1", null], () => 0)).toBe("form-2");
    expect(pickForm(["form-1", "form-2"], ["form-1", null], () => 0.9)).toBe("form-2");
  });
  it("returns null when no form is complete", () => {
    expect(pickForm([], ["form-1"])).toBeNull();
  });
});
