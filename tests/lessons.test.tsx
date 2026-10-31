import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("@/lib/auth", () => ({ requireUser: async () => ({ id: "u1", email: "a@b.c" }) }));
vi.mock("next/navigation", () => ({ notFound: () => { throw new Error("NOT_FOUND"); }, redirect: () => { throw new Error("REDIRECT"); } }));

import { LESSONS, lessonForTask, lessonForTrait, lessonById, LESSON_FACT_SOURCES } from "@/lib/oet/lessons";
import LessonsIndex from "@/app/(app)/lessons/page";
import LessonPage from "@/app/(app)/lessons/[id]/page";

/**
 * LESSONS (Nov 2026, beta-g PASS): 21 short lessons, the pages that show them, and the links that lead to them.
 * The point that matters most: a result screen links each criterion to ITS lesson. A trait the grader can return with no
 * lesson behind it is a link to nothing, and nobody would ever see it fail — so the trait keys are read from the graders' own
 * schemas, not retyped here.
 */
const graderTraits = (path: string) => {
  // Every `<key>: TRAIT,` line in the grader's feedback schema (the file declares TRAIT once and uses it only there).
  return [...readFileSync(path, "utf8").matchAll(/^\s+(\w+): TRAIT,/gm)].map((m) => m[1]);
};

describe("lessons — content", () => {
  it("21 lessons: Writing 6, Speaking 9, Reading/Listening 6, each complete", () => {
    expect(LESSONS.length).toBe(21);
    const by = (a: string) => LESSONS.filter((l) => l.area === a).length;
    expect([by("writing"), by("speaking"), by("reading-listening")]).toEqual([6, 9, 6]);
    expect(new Set(LESSONS.map((l) => l.id)).size).toBe(21);
    for (const l of LESSONS) {
      expect(l.rules.length, l.id).toBeGreaterThanOrEqual(3);
      expect(l.rules.length, l.id).toBeLessThanOrEqual(5);
      expect(l.selfCheck.length, l.id).toBe(3);
      for (const q of l.selfCheck) { expect(q.options.length).toBe(3); expect(["a", "b", "c"]).toContain(q.answer); }
      expect(l.example.weak).not.toBe(l.example.good);
    }
  });
  it("every trait the Writing and Speaking graders can return reaches its lesson", () => {
    const w = graderTraits("src/lib/oet/tasks/writing-letter.ts"), s = graderTraits("src/lib/oet/tasks/speaking-roleplay.ts");
    expect(w.length).toBe(6);
    expect(s.length).toBe(9);
    for (const t of [...w, ...s]) expect(lessonForTrait(t), `no lesson for trait ${t}`).toBeDefined();
    expect(lessonForTrait("purpose")!.id).toBe("writing-purpose");
    expect(lessonForTrait("informationGiving")!.id).toBe("speaking-information-giving");
    expect(lessonForTrait("not-a-trait")).toBeUndefined();
  });
  it("every Reading and Listening part reaches its technique lesson", () => {
    for (const t of ["READING_PART_A", "READING_PART_B", "READING_PART_C", "LISTENING_PART_A", "LISTENING_PART_B", "LISTENING_PART_C"] as const)
      expect(lessonForTask(t)!.id).toBe(t.toLowerCase().replace(/_/g, "-"));
    expect(lessonForTask("WRITING_LETTER")).toBeUndefined();
  });
  it("the three facts beta-g asked to confirm carry their official source and date, and are cited in docs/sources", () => {
    const readme = readFileSync("docs/sources/README.md", "utf8");
    for (const f of LESSON_FACT_SOURCES) {
      expect(f.url).toMatch(/^https:\/\/oet\.com\//);
      expect(f.retrieved).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(readme).toContain(f.url);
    }
  });
});

describe("lessons — pages", () => {
  it("the index lists every lesson under its area", async () => {
    const html = renderToStaticMarkup(await LessonsIndex());
    for (const l of LESSONS) expect(html).toContain(`href="/lessons/${l.id}"`);
    expect(html.match(/data-lesson-area=/g)?.length).toBe(3);
  });
  it("a lesson shows what is looked for, the rules, both examples and a hidden self-check", async () => {
    const l = lessonById("writing-purpose")!;
    const html = renderToStaticMarkup(await LessonPage({ params: Promise.resolve({ id: l.id }) }));
    expect(html).toContain("data-lesson-looks-for");
    for (const r of l.rules) expect(html).toContain(r.replace(/&/g, "&amp;").replace(/'/g, "&#x27;").replace(/"/g, "&quot;").slice(0, 20));
    expect(html).toContain("✗ Weak");
    expect(html).toContain("✓ Good");
    expect(html.match(/<details/g)?.length).toBe(3);
  });
  it("an unknown lesson is a 404, not an empty page", async () => {
    await expect(LessonPage({ params: Promise.resolve({ id: "nope" }) })).rejects.toThrow("NOT_FOUND");
  });
});

describe("lessons — the links that lead to them", () => {
  it("the menu, the practice page and the result screen link to the lessons", () => {
    expect(readFileSync("src/components/Sidebar.tsx", "utf8")).toContain('href: "/lessons"');
    expect(readFileSync("src/app/(app)/practice/[profession]/page.tsx", "utf8")).toContain('href="/lessons"');
    const result = readFileSync("src/components/oet/OetResult.tsx", "utf8");
    expect(result).toContain("lessonForTrait(k)");
    expect(result).toContain("lessonForTask(def.taskType)");
    expect(result).toContain("Learn how this is marked");
  });
});
