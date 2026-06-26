// Seeds original OET Reading items (common to all professions, profession null).
// Part A = expeditious reading (matching + gap fill over short texts); Part B =
// short workplace texts with one MCQ each; Part C = a longer text with MCQ. All
// texts are original to AlmiOET — never copied from OET. Phase 0 ships one
// starter item per part.
//
// Run: npm run seed:reading  (needs DATABASE_URL set)

import { PrismaClient, Prisma } from "@prisma/client";
import { isDirectRun } from "./_entry";

const prisma = new PrismaClient();

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Hand hygiene texts",
    prompt:
      "Skim the four short texts on hand hygiene. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "CORE",
    topicTag: "infection-control",
    payload: {
      texts: [
        { id: "A", heading: "When to clean hands", body: "Clean hands before touching a patient and before a clean or aseptic procedure." },
        { id: "B", heading: "Technique", body: "Alcohol hand rub should be applied to dry hands and rubbed until fully evaporated, covering all surfaces." },
        { id: "C", heading: "When soap is required", body: "Use soap and water rather than alcohol rub when hands are visibly soiled or after caring for a patient with diarrhoea." },
        { id: "D", heading: "Skin care", body: "Apply emollient regularly to reduce the skin damage that repeated cleaning can cause." },
      ],
      questions: [
        { id: "q1", kind: "match", stem: "Which text says when alcohol rub is not appropriate?", options: [ { id: "A", text: "A" }, { id: "B", text: "B" }, { id: "C", text: "C" }, { id: "D", text: "D" } ], answer: "C" },
        { id: "q2", kind: "match", stem: "Which text describes correct rubbing technique?", options: [ { id: "A", text: "A" }, { id: "B", text: "B" }, { id: "C", text: "C" }, { id: "D", text: "D" } ], answer: "B" },
        { id: "q3", kind: "gap", stem: "Alcohol rub should be applied to ______ hands.", answer: "dry" },
      ],
    },
    guidanceNote: "Scan for the keyword in the question — you don't need to read every word to match a text.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Medicines policy extract",
    prompt: "Read the workplace text and choose the answer which best fits the meaning.",
    difficulty: "CORE",
    topicTag: "policy",
    payload: {
      passages: [
        { id: "p1", body: "Where a medicine is omitted, the reason must be recorded on the chart using the approved code. An omission without a documented reason is treated as a medication incident and must be reported, even if no harm resulted." },
      ],
      questions: [
        {
          id: "q1",
          stem: "According to the text, an undocumented omission must be:",
          options: [
            { id: "a", text: "ignored if no harm resulted" },
            { id: "b", text: "reported as a medication incident" },
            { id: "c", text: "corrected at the next drug round only" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Read to the end — the key condition often sits in the final clause.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — Article on shared decision-making",
    prompt: "Read the text and choose the answer which best fits the writer's meaning.",
    difficulty: "STRETCH",
    topicTag: "communication",
    payload: {
      passages: [
        { id: "p1", body: "Shared decision-making is often presented as simply offering patients options. In practice, the harder skill is eliciting what matters to the person in front of you — and resisting the pull to steer them toward the choice you would make. The evidence suggests clinicians consistently overestimate how well they already do this." },
      ],
      questions: [
        {
          id: "q1",
          stem: "What does the writer suggest is the harder part of shared decision-making?",
          options: [
            { id: "a", text: "Listing the available options" },
            { id: "b", text: "Drawing out and respecting the patient's own priorities" },
            { id: "c", text: "Recommending the clinician's preferred choice" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "What does the writer imply about clinicians' self-assessment?",
          options: [
            { id: "a", text: "They tend to overrate their own skill at it" },
            { id: "b", text: "They generally judge it accurately" },
            { id: "c", text: "They underrate their ability" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Distinguish what the writer states from what is merely mentioned as a common view.",
  },
];

async function main() {
  const res = await prisma.oetItem.createMany({ data: ITEMS });
  console.log(`Seeded ${res.count} Reading item(s).`);
}

if (isDirectRun(import.meta.url)) {
  main()
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}
