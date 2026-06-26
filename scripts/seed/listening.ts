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
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Ankle injury after a fall",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "FOUNDATION",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: Good morning. Can you tell me what happened to your ankle? Patient: I twisted it while I was playing football, and it gave way underneath me. Clinician: I see. And when did this happen? Patient: It was three days ago, on Saturday afternoon. Clinician: How would you rate the pain right now, on a scale of zero to ten? Patient: I'd say it's about seven out of ten, especially when I put weight on it. Clinician: Have you taken anything for it? Patient: Just ibuprofen, two tablets in the morning and two at night. Clinician: And where exactly is the swelling worst? Patient: It's mainly on the outer ankle, just below the bone.",
      speakers: [
        { role: "Clinician", voice: "alloy" },
        { role: "Patient", voice: "verse" },
      ],
      gaps: [
        { id: "g1", label: "Activity at time of injury", answer: "playing football" },
        { id: "g2", label: "Time since injury", answer: "three days ago" },
        { id: "g3", label: "Current pain score (0–10)", answer: "seven out of ten" },
        { id: "g4", label: "Pain relief taken", answer: "ibuprofen" },
        { id: "g5", label: "Site of worst swelling", answer: "outer ankle" },
      ],
    },
    guidanceNote:
      "Listen for the patient's exact words about timing and pain — they often paraphrase the note label, so write what you hear, not a rephrasing.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Updated dressing trolley protocol",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "CORE",
    topicTag: "infection-control",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Before you start your shift, a quick reminder about the new dressing trolley protocol. From this week, all trolleys must be wiped down with the chlorine-based solution both before and after each procedure, not just at the end of the day. The alcohol wipes we used previously are now only for the patient's skin, not for the trolley surfaces. If you can't find the chlorine wipes, they're being stored in the locked cupboard by the sluice room, and the code is on the whiteboard.",
      speakers: [{ role: "Senior Nurse", voice: "aria" }],
      questions: [
        {
          id: "q1",
          stem: "What change to cleaning practice is the speaker describing?",
          options: [
            { id: "a", text: "Trolleys should be cleaned only at the end of the day." },
            { id: "b", text: "Trolleys must be cleaned before and after every procedure." },
            { id: "c", text: "Alcohol wipes should now be used on trolley surfaces." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Watch for the contrast signalled by 'not just' — the speaker contradicts the old routine, so don't pick the option that matches the previous practice.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Reducing medication errors with quiet zones",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "STRETCH",
    topicTag: "patient-safety",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Thank you all for coming. Today I want to focus on one of the most preventable causes of harm in hospitals: medication administration errors. Research consistently shows that the single biggest contributing factor is interruption during the preparation stage, rather than a lack of knowledge on the part of staff. In one study, nurses were interrupted on average ten times during a single drug round, and each interruption raised the likelihood of an error. The most promising intervention has not been more training, but the introduction of so-called quiet zones, where staff preparing medications wear a coloured tabard and are not to be disturbed. Where these have been trialled, error rates have fallen by roughly a third. Interestingly, the effect was strongest not in intensive care, but on general medical wards, where staffing pressures and interruptions are typically highest. My recommendation is that we pilot the tabard scheme on two wards before rolling it out more widely.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "According to the speaker, the main cause of medication errors is",
          options: [
            { id: "a", text: "insufficient training of nursing staff." },
            { id: "b", text: "interruptions during medication preparation." },
            { id: "c", text: "shortages of medication stock." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "The speaker says the quiet-zone intervention was most effective in",
          options: [
            { id: "a", text: "intensive care units." },
            { id: "b", text: "general medical wards." },
            { id: "c", text: "outpatient clinics." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The speaker uses 'not... but...' twice to overturn the answer you might expect; track those reversals rather than the first setting or cause mentioned.",
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
