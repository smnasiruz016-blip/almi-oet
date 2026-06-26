// Seeds original OET Writing (clinical letter) items. These are PER-PROFESSION:
// each item carries a `profession`. Phase 0 ships Nursing starter content; the
// other 11 professions follow in content batches (the schema/routes are ready
// for all 12). Case notes are original to AlmiOET — never copied from OET.
//
// Run: npm run seed:writing  (needs DATABASE_URL set)

import { PrismaClient, Prisma } from "@prisma/client";
import { isDirectRun } from "./_entry";

const prisma = new PrismaClient();

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Discharge to community nurse (leg ulcer)",
    prompt:
      "Using the case notes, write a letter to the community nurse who will continue this patient's care after discharge. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "discharge",
    timeLimitSeconds: 45 * 60,
    payload: {
      letterType: "discharge",
      recipient: "Ms R. Okafor, Community Nursing Team, Riverside Health Centre",
      taskInstruction:
        "Write a discharge letter handing over this patient's wound care and follow-up to the community nursing team.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr George Hill, 74. Admitted 8 days ago with cellulitis of the left lower leg over a chronic venous ulcer. Treatment: IV antibiotics (now switched to oral, 5 days remaining), daily wound dressing with foam dressing, compression bandaging resumed once infection settled. Current status: cellulitis resolved, ulcer clean and granulating, ~3cm diameter. Mobility: independent with a stick. Social: lives alone, daughter visits daily. Allergies: penicillin. Plan: continue oral antibiotics to completion; redress every 48 hours; maintain compression; GP review in 2 weeks; refer to tissue viability if not improving in 4 weeks.",
    },
    guidanceNote:
      "A discharge letter hands over care. Lead with what the community nurse must do next; include allergies and the follow-up plan; leave out admission detail that doesn't affect ongoing care.",
  },
];

async function main() {
  const res = await prisma.oetItem.createMany({ data: ITEMS });
  console.log(`Seeded ${res.count} Writing item(s).`);
}

if (isDirectRun(import.meta.url)) {
  main()
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}
