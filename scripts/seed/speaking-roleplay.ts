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
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "NURSING",
    title: "Nursing — Supporting a patient hesitant about starting insulin",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A diabetes clinic in a community health centre.",
      candidateRole: "You are the practice nurse seeing a patient whose type 2 diabetes is no longer controlled on oral medication. The doctor has recommended starting insulin injections.",
      patientRole: "The patient is a 56-year-old who has had type 2 diabetes for nine years and has always managed it with tablets and diet.",
      candidateCard: "Find out how the patient feels about the doctor's recommendation. Explain why insulin is now being suggested and what starting it would involve (daily self-injection, blood-glucose checks, support available). Acknowledge their feelings, address their specific worries, and agree on a practical next step together.",
      patientConcern: "The patient secretly believes needing insulin means they have 'failed' and that their diabetes is now severe and life-threatening; they are also frightened of self-injecting and worry it will stop them driving and working. The candidate must gently draw out these fears and reassure realistically without dismissing them.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Lead with open questions and let the patient voice their fears before giving facts — naming insulin as a normal next stage (not a punishment or failure) and checking understanding will land far better than launching straight into injection technique.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Newly diagnosed hypertension in clinic",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A general practice consulting room. The patient has returned for results after three raised blood-pressure readings over the past month.",
      candidateRole: "You are the general practitioner.",
      patientRole: "The patient is a 45-year-old accountant recently found to have stage 1 hypertension. They feel completely well and are reluctant to start medication.",
      candidateCard: "Find out the patient's understanding of and concerns about the diagnosis. Explain what hypertension means and why treatment matters even without symptoms. Discuss lifestyle measures (diet, salt, alcohol, activity, weight) and the option of starting medication. Agree a realistic plan and arrange follow-up.",
      patientConcern: "The patient's hidden fear is that starting tablets means being 'on drugs for life' and becoming like their father, who had a disabling stroke despite taking many medications. They equate medication with being seriously ill and losing control.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Because the patient feels well, lead with their concerns rather than statistics. Draw out the fear about lifelong medication and the family history before recommending anything — acknowledging it openly makes shared decision-making genuine, not a script.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Explaining a delayed test result",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A hospital outpatient clinic. The patient has attended to discuss results, but a CT scan was not booked due to an administrative error and has not yet been done.",
      candidateRole: "You are the hospital doctor (medical registrar) seeing the patient in clinic.",
      patientRole: "The patient is a 62-year-old retired teacher being investigated for unintentional weight loss and is anxiously awaiting CT scan results today.",
      candidateCard: "Find out the patient's expectations for today's visit. Explain honestly that the CT scan was not arranged because of a booking error and apologise. Reassure about the interim safety-netting, arrange the scan as a priority and a clear follow-up, and address the patient's concerns.",
      patientConcern: "The patient's underlying fear is that the delay means cancer has been missed or has worsened, and that they are 'not being taken seriously'. They may become angry and feel their time has been wasted, and need to feel the doctor is being honest and accountable.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Be honest and take ownership of the error early rather than minimising it — patients forgive mistakes far more readily than evasiveness. Acknowledge the anxiety and anger as legitimate, give a concrete revised timeline, and check the patient leaves knowing exactly what happens next.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — New inhaler technique and adherence",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A community pharmacy consultation room.",
      candidateRole: "You are the pharmacist providing a first prescription of a preventer (corticosteroid) inhaler to a patient newly diagnosed with asthma.",
      patientRole: "The patient is a 34-year-old recently started on a brown preventer inhaler in addition to their blue reliever inhaler.",
      candidateCard: "Find out the patient's understanding of the two inhalers, explain the difference between the preventer and the reliever, check and advise on inhaler technique and rinsing the mouth, and agree a plan for daily use even when feeling well.",
      patientConcern: "The patient is reluctant to use a steroid inhaler every day because they have read online that steroids cause weight gain and weak bones, and they intend to only use it when breathless.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Draw out the patient's worry about daily steroids before reassuring; acknowledge the fear, explain that inhaled doses are low and act locally, and reach a shared plan rather than simply instructing.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Declining an OTC request and GP referral",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "referral",
    payload: {
      setting: "A community pharmacy counter.",
      candidateRole: "You are the pharmacist responding to a patient requesting an over-the-counter codeine-based painkiller for persistent headaches.",
      patientRole: "The patient is a 41-year-old asking by name for a strong codeine medicine they have been buying frequently for daily headaches over several weeks.",
      candidateCard: "Find out the nature, frequency and duration of the headaches and current painkiller use, explain why you cannot supply the codeine product today, raise the possibility of medication-overuse headache, and refer the patient to their GP for assessment.",
      patientConcern: "The patient is frustrated and anxious, fears being judged as drug-seeking, and is worried that without the medicine they will be unable to cope at work; they have not told anyone how often they are taking painkillers.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Refuse the supply without sounding accusatory; normalise medication-overuse headache as a common, treatable cause, validate the patient's distress, and frame the GP referral as help rather than punishment.",
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
