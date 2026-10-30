/**
 * The vocabulary bank (owner, 30 Oct 2026; beta-g PASS on v1 with 2 fixes, v2): 12 professions × (≈60 Understand + ≈40 Use); every entry
 * has our definition and example, the example uses the term, every Use entry has its plain version; the search and the tabs; the
 * whole feature is OFF until VOCABULARY_ON=1 (the owner's switch), and the menu link follows the switch.
 */
import { describe, expect, it } from "vitest";
import { VOCABULARY, vocabularyFor, vocabularyOn } from "../src/lib/oet/vocabulary";
import { PROFESSION_LIST } from "../src/lib/oet/professions";

const W = (s: string) => s.split(/\s+/).filter((t) => /[\p{L}\p{N}]/u.test(t)).length;

describe("vocabulary bank", () => {
  it("12 professions, each with ≥55 Understand (C1–C2) and ≥35 Use entries, no duplicates", () => {
    expect(Object.keys(VOCABULARY).sort()).toEqual(PROFESSION_LIST.map((p) => p.profession).sort());
    for (const [p, xs] of Object.entries(VOCABULARY)) {
      const u = xs.filter((e) => e.layer === "understand"), s = xs.filter((e) => e.layer === "use");
      expect(u.length, p).toBeGreaterThanOrEqual(55); expect(s.length, p).toBeGreaterThanOrEqual(35);
      expect(u.every((e) => e.cefr === "C1" || e.cefr === "C2"), `${p}: Understand is C1–C2`).toBe(true);
      expect(new Set(xs.map((e) => e.term.toLowerCase())).size, `${p}: duplicates`).toBe(xs.length);
    }
  });

  it("every entry: a short definition and example of our own, the example uses the term, a Use entry has its plain version", () => {
    for (const [p, xs] of Object.entries(VOCABULARY)) for (const e of xs) {
      const at = `${p} "${e.term}"`;
      expect(W(e.definition), at).toBeLessThanOrEqual(24); expect(W(e.example), at).toBeLessThanOrEqual(30);
      const stems = e.term.toLowerCase().replace(/[^a-z\s-]/g, "").split(/\s+/).filter((w) => w.length > 3).map((w) => w.slice(0, Math.max(4, w.length - 3)));
      if (stems.length) expect(stems.some((st) => e.example.toLowerCase().includes(st)), `${at}: example uses the term`).toBe(true);
      if (e.layer === "use") expect(e.plain.trim().length, `${at}: plain version`).toBeGreaterThan(0);
    }
  });

  it("beta-g's two v2 fixes are in", () => {
    expect(VOCABULARY.VETERINARY_SCIENCE.find((e) => e.term === "spaying")!.example).toContain("depends on her breed and size");
    expect(VOCABULARY.RADIOGRAPHY.find((e) => e.term === "has a known allergy to")!.example).toContain("may be advised");
  });

  it("tabs and search: one layer at a time, matching term, definition, example or plain version, accents and case ignored", () => {
    const all = vocabularyFor("NURSING", "use");
    expect(all.every((e) => e.layer === "use")).toBe(true);
    const hit = vocabularyFor("MEDICINE", "use", "HIGH BLOOD");
    expect(hit.length).toBeGreaterThan(0);
    expect(hit.every((e) => `${e.term} ${e.definition} ${e.example} ${e.plain}`.toLowerCase().includes("high blood"))).toBe(true);
    expect(vocabularyFor("NURSING", "understand", "zzzz-no-such-word")).toEqual([]);
  });

  it("OFF until the owner's switch: VOCABULARY_ON=1 only", () => {
    expect(vocabularyOn({})).toBe(false);
    expect(vocabularyOn({ VOCABULARY_ON: "true" })).toBe(false);
    expect(vocabularyOn({ VOCABULARY_ON: "1" })).toBe(true);
  });
});
