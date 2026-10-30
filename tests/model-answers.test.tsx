/**
 * B2/B3 (owner, 30 Oct 2026) · MODEL ANSWERS ARE SHOWN TO LEARNERS — AND ONLY AFTER THE ATTEMPT.
 *   · the composer never receives the model letter or the model role-play (sanitizePayload) — before this, a Writing item's whole
 *     payload, model letter included, went to the browser with the composer;
 *   · a practice step's result shows "Model answer" / "Model role-play"; a MOCK step does not (it waits for the final review, like the
 *     answers), and the mock's final review shows them;
 *   · rendered from the REAL seed items (GEN_ITEMS), one Nursing and one Medicine of each.
 */
import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import type { OetAttempt, OetItem } from "@prisma/client";
import { GEN_ITEMS } from "../scripts/seed/gen/index";
import { sanitizePayload } from "../src/lib/oet/sanitize-payload";
import { ModelAnswer } from "../src/components/oet/ModelAnswer";
import { OetResult } from "../src/components/oet/OetResult";
import { OET_TASKS } from "../src/lib/oet/registry";

const withModel = (taskType: string, profession: string, key: string) =>
  GEN_ITEMS.find((i) => i.taskType === taskType && i.profession === profession && (i.payload as Record<string, unknown>)?.[key]) as unknown as OetItem;
const letterN = withModel("WRITING_LETTER", "NURSING", "modelLetter"), letterM = withModel("WRITING_LETTER", "MEDICINE", "modelLetter");
const scriptN = withModel("SPEAKING_ROLEPLAY", "NURSING", "modelScript"), scriptM = withModel("SPEAKING_ROLEPLAY", "MEDICINE", "modelScript");
const defOf = (t: string) => Object.values(OET_TASKS).find((d) => d.taskType === t)!;
const attemptFor = (item: OetItem) => ({ id: "a1", status: "SCORED", subTest: item.subTest, taskType: item.taskType, pointsEarned: 3, pointsMax: 6, gradeEstimate: null, feedback: null, response: { text: "x" } }) as unknown as OetAttempt;

describe("model answers", () => {
  it("the seed carries them: a Nursing and a Medicine letter and script", () => {
    for (const i of [letterN, letterM, scriptN, scriptM]) expect(i, "a seed item with its model").toBeTruthy();
  });

  it("the composer NEVER receives the model letter or the model role-play", () => {
    for (const i of [letterN, letterM]) {
      const p = sanitizePayload("WRITING_LETTER", i.payload) as Record<string, unknown>;
      expect(p.modelLetter).toBeUndefined(); expect(p.caseNotes).toBeTruthy();
      expect(JSON.stringify(p)).not.toContain((i.payload as { modelLetter: { re: string } }).modelLetter.re);
    }
    for (const i of [scriptN, scriptM]) {
      const p = sanitizePayload("SPEAKING_ROLEPLAY", i.payload) as Record<string, unknown>;
      expect(p.modelScript).toBeUndefined(); expect(p.patientConcern).toBeUndefined(); expect(p.candidateCard).toBeTruthy();
    }
  });

  it("\"Model answer\": the letter as a letter, its word count, why it is written so, what was left out on purpose — collapsible", () => {
    for (const i of [letterN, letterM]) {
      const l = (i.payload as { modelLetter: { salutation: string; body: string[]; bodyWords: number; notesLeftOut: string[]; commentary: { tone: string } } }).modelLetter;
      const html = renderToStaticMarkup(<ModelAnswer item={i} />);
      expect(html).toMatch(/^<details data-model-answer="letter"/);
      expect(html).toContain(">Model answer");
      for (const s of ["Why it is written this way", "Opening", "What was selected", "Organisation", "Tone", "Left out on purpose"]) expect(html).toContain(s);
      expect(html).toContain(`${l.bodyWords} words in the body`);
      expect(html).toContain(l.body[0].slice(0, 40).replace(/&/g, "&amp;").replace(/'/g, "&#x27;"));
    }
  });

  it("\"Model role-play\": the dialogue with both labels, the patient's real concern, the safety points", () => {
    for (const i of [scriptN, scriptM]) {
      const s = (i.payload as { modelScript: { candidateLabel: string; interlocutorLabel: string; turns: unknown[]; safety: unknown[] } }).modelScript;
      const html = renderToStaticMarkup(<ModelAnswer item={i} />);
      expect(html).toMatch(/^<details data-model-answer="script"/);
      expect(html).toContain(">Model role-play");
      expect((html.match(/<li class="rounded-xl/g) ?? []).length).toBe(s.turns.length);
      expect(html).toContain(`${s.candidateLabel}: </span>`);
      expect(html).toContain("The patient&#x27;s real concern");
      expect(html).toContain("Safety points");
    }
    expect(renderToStaticMarkup(<ModelAnswer item={{ taskType: "READING_PART_A", payload: {} } as unknown as OetItem} />)).toBe("");
  });

  it("a PRACTICE step shows it after the attempt; a MOCK step does not (the final review does)", () => {
    for (const i of [letterN, scriptM]) {
      const def = defOf(i.taskType);
      const practice = renderToStaticMarkup(<OetResult def={def} item={i} attempt={attemptFor(i)} variant="step" mode="PRACTICE_SET" />);
      const mock = renderToStaticMarkup(<OetResult def={def} item={i} attempt={attemptFor(i)} variant="step" mode="MOCK" />);
      expect(practice).toContain("data-model-answer");
      expect(mock).not.toContain("data-model-answer");
    }
  });
});
