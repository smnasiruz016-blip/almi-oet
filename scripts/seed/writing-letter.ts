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
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Transfer to rehabilitation unit (post-hip fracture)",
    prompt:
      "Using the case notes, write a letter to the Charge Nurse at the rehabilitation unit. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "transfer",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Ms Carla Devine, Charge Nurse, Riverside Rehabilitation Unit",
      taskInstruction: "Write a transfer letter handing over Mrs Pereira's post-operative status and rehabilitation needs so the receiving team can continue safe care.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mrs Aurora Pereira, 78 years, retired seamstress.\nAdmission: 04/06/2026, via Emergency. Mechanical fall at home; right neck-of-femur fracture.\nSurgery: 05/06/2026 — right hemiarthroplasty under spinal anaesthetic. Uncomplicated.\nPast history: Type 2 diabetes (diet-controlled), hypertension, mild osteoarthritis (both knees), cataract surgery 2021.\nMedications: amlodipine 5 mg daily, metformin 500 mg BD, paracetamol 1 g QDS PRN, enoxaparin 40 mg SC daily (VTE prophylaxis, continue 14 days post-op).\nAllergies: penicillin (rash).\nPost-op progress: Wound clean, dry, staples intact — removal due 19/06/2026. Mobilising 10 m with frame and one assist; weight-bearing as tolerated. Pain well controlled, scores 3/10 on movement. Slight constipation — lactulose commenced.\nFunctional: Independent before fall, lived alone in ground-floor flat, daughter nearby. Needs assist with washing/dressing currently. Continent. Pressure areas intact (Waterlow 12).\nSocial: Anxious about returning home; daughter supportive.\nPlan: Inpatient rehab to restore independent mobility and ADLs; ongoing physiotherapy and occupational therapy; pre-discharge home assessment.",
    },
    guidanceNote:
      "This is a handover for ongoing rehabilitation — prioritise mobility status, weight-bearing instructions, wound/staple plan, VTE prophylaxis duration, allergy and her care goals. Omit resolved details (cataract 2021) unless they affect current care.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — GP referral for suspected DVT",
    prompt:
      "Using the case notes, write a letter to the on-call medical registrar at the Emergency Assessment Unit. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Helena Cardoso, On-call Medical Registrar, Riverside Hospital Emergency Assessment Unit",
      taskInstruction: "Refer the patient for urgent assessment and imaging to exclude a deep vein thrombosis and possible pulmonary embolism.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Daniel Ortega, 58 years.\nSetting: General practice, today.\nPresenting: 3-day history of progressive swelling, warmth and aching of the right calf; calf 4 cm greater in circumference than left; mild pleuritic right-sided chest discomfort since this morning.\nPMH: Type 2 diabetes (8 yrs, well controlled); osteoarthritis right knee; appendicectomy aged 19.\nRecent: Returned 5 days ago from a 13-hour long-haul flight; reduced mobility past week.\nMeds: Metformin 1 g BD; paracetamol PRN.\nAllergies: Penicillin (rash).\nSocial: Ex-smoker (quit 6 yrs ago); office manager; lives with wife.\nObs today: BP 138/84; HR 96; RR 18; SpO2 96% room air; afebrile.\nExam: Right calf tender, warm, oedematous; Homans sign positive; chest clear; heart sounds normal.\nWells score: high probability.\nPlan: Urgent referral; D-dimer and Doppler ultrasound required; consider CTPA given chest symptoms; analgesia continued.",
    },
    guidanceNote:
      "Foreground the calf findings, recent long-haul travel and chest symptoms — these drive the urgency. The appendicectomy and osteoarthritis are background; omit them unless space allows. State the penicillin allergy clearly.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Discharge after paediatric asthma admission",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "discharge",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Priya Nair, General Practitioner, Elmwood Family Surgery",
      taskInstruction: "Hand over post-discharge management and follow-up arrangements following an acute asthma exacerbation in a child.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mia Holloway, 7 years.\nAdmitted: 4 days ago, Paediatric Ward, Riverside Hospital. Discharged today.\nReason: Acute moderate-to-severe asthma exacerbation triggered by viral URTI.\nOn admission: RR 38, SpO2 90% room air, widespread wheeze, unable to complete sentences, peak flow 55% predicted.\nTreatment given: Oxygen; back-to-back salbutamol nebulisers then spacer; ipratropium; oral prednisolone 3-day course (completed today).\nPMH: Asthma diagnosed age 4; previous admission 18 months ago; eczema.\nMeds on discharge: Beclometasone inhaler 100 mcg BD (preventer); salbutamol 100 mcg PRN via spacer; emollient cream for eczema.\nAllergies: None known.\nInhaler technique: Reviewed with mother; spacer demonstrated.\nSocial: Lives with mother and older brother; household smoker (father, smokes outdoors); no pets.\nProgress: SpO2 98% room air at discharge; peak flow 85% predicted; afebrile; eating and playing normally.\nPlan: GP review within 48 hrs; written asthma action plan supplied; preventer adherence to reinforce; consider routine asthma clinic review; smoking-cessation advice for household.",
    },
    guidanceNote:
      "Prioritise the discharge medications, the 48-hour review request and the action plan — these are what the GP must act on. The eczema and emollient are minor; mention household smoke exposure as it is relevant to ongoing control. Avoid restating every observation.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Warfarin–antibiotic interaction referral",
    prompt:
      "Using the case notes, write a letter to the patient's GP/prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Helen Pryce, General Practitioner, Riverside Medical Centre",
      taskInstruction: "Refer the patient to the GP to review the warfarin dose and arrange earlier INR monitoring because of a clinically significant antibiotic interaction.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Colin Davies, 68 years.\nPresented today to collect a private prescription for clarithromycin 500mg twice daily for 7 days (prescribed yesterday by out-of-hours service for a chest infection).\nCurrent regular medication: warfarin 4mg daily (target INR 2.0–3.0, atrial fibrillation), bisoprolol 5mg daily, atorvastatin 40mg daily, omeprazole 20mg daily.\nMost recent INR 2.6, taken three weeks ago; stable for the past six months.\nAllergies: penicillin (rash).\nRelevant history: AF diagnosed 2019; mild renal impairment.\nIssue identified at counter: clarithromycin is a potent enzyme inhibitor and markedly potentiates warfarin, raising bleeding risk; patient unaware of interaction.\nPatient reports no current bruising or bleeding.\nLives alone; reliable with medication.\nDeclined to delay antibiotic as feels unwell.",
    },
    guidanceNote:
      "State the interaction and bleeding risk plainly and request a specific action (dose review plus earlier INR), rather than listing every medicine in the notes.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Discharge medicines reconciliation to GP",
    prompt:
      "Using the case notes, write a letter to the patient's GP/prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "discharge",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Sara Mahmood, General Practitioner, Oakfield Surgery",
      taskInstruction: "Inform the GP of medication changes made during admission and request continued monitoring of renal function and blood pressure.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mrs Eleanor Fitch, 79 years. Discharged today from Ward 6 after admission for an acute kidney injury secondary to dehydration following a diarrhoeal illness.\nMedication changes on admission: ramipril 10mg daily SUSPENDED; metformin 1g twice daily SUSPENDED; furosemide 40mg daily SUSPENDED.\nRenal function on discharge improving but not yet at baseline (eGFR 48, baseline 62).\nContinued unchanged: amlodipine 5mg daily, atorvastatin 20mg daily, lansoprazole 30mg daily.\nNew on discharge: none.\nPlan agreed with consultant: restart ramipril and furosemide once renal function and blood pressure reviewed in primary care; metformin to remain suspended pending eGFR recheck.\nAllergies: none known.\nLives with daughter, who manages medication.\nBlood pressure at discharge 138/82.\nUnderstands tablets have been paused.",
    },
    guidanceNote:
      "Make the suspended-versus-continued medicines unambiguous and tie each request to a monitoring parameter; omit unchanged social detail that does not affect ongoing care.",
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
