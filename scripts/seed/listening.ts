// Seeds original OET Listening items (common to all professions, so profession
// is null). Part A = note completion over a consultation; Part B = short
// workplace extracts with one MCQ each; Part C = a longer presentation with MCQ.
// All audio scripts and questions are original to AlmiOET — never copied from
// OET. Phase 0 ships one starter item per part; content batches expand this.
//
// Run: npm run seed:listening  (needs DATABASE_URL set)

import { PrismaClient, Prisma } from "@prisma/client";
import { isDirectRun } from "./_entry";

const prisma = new PrismaClient();

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Knee pain consultation",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "CORE",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: Good morning, what's brought you in today? Patient: It's my right knee. It's been aching for about three weeks now, especially when I climb stairs. Clinician: And is there any swelling? Patient: A little, mostly in the evenings. I've been taking paracetamol but it only helps a bit.",
      speakers: [
        { role: "Clinician", voice: "alloy" },
        { role: "Patient", voice: "verse" },
      ],
      gaps: [
        { id: "g1", label: "Affected joint", answer: "right knee" },
        { id: "g2", label: "Duration of symptoms", answer: "three weeks" },
        { id: "g3", label: "Pain worsens when", answer: "climbing stairs" },
        { id: "g4", label: "Current medication", answer: "paracetamol" },
      ],
    },
    guidanceNote:
      "Write only what you hear. Spelling and exact detail matter — note key clinical facts as they are said.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Handover extract",
    prompt:
      "You will hear a short workplace extract. Choose the answer which best fits what you hear.",
    difficulty: "CORE",
    topicTag: "workplace",
    payload: {
      audioScript:
        "Nurse A: Before you take over, bed four is nil by mouth from midnight for theatre tomorrow. The consent form is signed but the pre-op bloods are still pending. Can you chase them on the next round?",
      speakers: [{ role: "Nurse", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What does the nurse ask the colleague to do?",
          options: [
            { id: "a", text: "Obtain consent for theatre" },
            { id: "b", text: "Follow up the pending pre-op bloods" },
            { id: "c", text: "Keep the patient nil by mouth from midnight" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Listen for the action being requested, not just the facts mentioned.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Talk on hydration in older adults",
    prompt:
      "You will hear part of a presentation. Choose the answer which best fits what you hear.",
    difficulty: "STRETCH",
    topicTag: "presentation",
    payload: {
      audioScript:
        "Speaker: What surprised our team most was not that dehydration was common on the ward, but how often it was missed. The classic signs we are taught — dry mouth, reduced skin turgor — are far less reliable in older patients. We found a simple daily fluid chart, reviewed at the morning round, caught more cases than any single clinical sign.",
      speakers: [{ role: "Presenter", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What does the speaker emphasise about dehydration on the ward?",
          options: [
            { id: "a", text: "It was rarer than expected" },
            { id: "b", text: "It was frequently overlooked" },
            { id: "c", text: "It was easily confirmed by skin turgor" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "What did the team find most effective?",
          options: [
            { id: "a", text: "A reviewed daily fluid chart" },
            { id: "b", text: "Checking skin turgor each round" },
            { id: "c", text: "Relying on dry mouth as a sign" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "The answer is about the speaker's main point — listen past the examples to the conclusion.",
  },
];

async function main() {
  const res = await prisma.oetItem.createMany({ data: ITEMS });
  console.log(`Seeded ${res.count} Listening item(s).`);
}

if (isDirectRun(import.meta.url)) {
  main()
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}
