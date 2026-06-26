// Seeds original OET Speaking (role-play) items. These are PER-PROFESSION: each
// item carries a `profession`. Phase 0 ships Nursing starter content; the other
// 11 professions follow in content batches. Scenarios are original to AlmiOET —
// never copied from OET.
//
// Run: npm run seed:speaking  (needs DATABASE_URL set)

import { PrismaClient, Prisma } from "@prisma/client";
import { isDirectRun } from "./_entry";

const prisma = new PrismaClient();

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "NURSING",
    title: "Nursing — Reassuring a patient anxious about discharge",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "patient-education",
    payload: {
      setting: "A hospital ward. The patient is due to be discharged this afternoon.",
      candidateRole: "You are the ward nurse.",
      patientRole:
        "The patient is a 68-year-old recovering from pneumonia, worried about coping at home alone.",
      candidateCard:
        "Find out what specifically worries the patient about going home. Acknowledge the concern. Explain the discharge support available (community nurse visit, medication plan, who to call if breathless). Agree a simple plan and check the patient feels ready.",
      patientConcern:
        "The patient is afraid the breathlessness will return at night and no one will be there to help.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Open by drawing out the real worry before reassuring. Address the specific concern (night-time breathlessness), not a generic script. Build rapport, give clear structure, and check understanding at the end.",
  },
];

async function main() {
  const res = await prisma.oetItem.createMany({ data: ITEMS });
  console.log(`Seeded ${res.count} Speaking item(s).`);
}

if (isDirectRun(import.meta.url)) {
  main()
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}
