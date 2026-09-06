// GENERATED FROM PRODUCTION on 2026-08-04 — do not hand-edit ordering.
//
// This file is derived from the live bank AFTER the de-game pass (grade-safe
// option-position shuffle: option order only; ids, texts and answer keys
// unchanged). It is generated FROM prod rather than shuffled independently — a
// second local shuffle would produce a different order from what learners are
// actually being served, and the seed source would silently disagree with the
// database it is supposed to describe.
//
// Regenerate with the same exporter if prod content changes again.
import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-antidepressant-early-side-effects-and-adherence",
    "title": "Pharmacy — Antidepressant early side effects and adherence",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "private pharmacy consultation room",
      "patientRole": "The patient is a 29-year-old who feels more anxious and jittery and is thinking of stopping the tablets this evening.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain that early worsening and a delayed onset of benefit are common, advise against stopping abruptly, agree clear safety-net advice including signs that need urgent help, and arrange GP follow-up to review progress.",
      "candidateRole": "You are the pharmacist. A patient started an SSRI ten days ago and says they feel worse, not better.",
      "patientConcern": "The patient is demoralised that the medicine seems to be making things worse and is close to giving up on treatment entirely."
    },
    "guidanceNote": "Normalise the early settling-in period honestly while taking any low-mood or self-harm cues seriously and signposting urgent support."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-child-s-fever-and-correct-paracetamol-dosing",
    "title": "Pharmacy — Child's fever and correct paracetamol dosing",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "community pharmacy counter",
      "patientRole": "The patient is the parent of a 2-year-old, who is worried and wants to give as much medicine as possible to bring the temperature down fast.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain weight-appropriate dosing of liquid paracetamol, the importance of not exceeding the stated frequency, the role of fluids and comfort, and clear safety-net signs that mean the child should be seen by a doctor urgently.",
      "candidateRole": "You are the pharmacist advising a parent whose toddler has a fever.",
      "patientConcern": "The anxious parent is tempted to double the dose to act faster and does not realise this could be harmful."
    },
    "guidanceNote": "Address the overdose risk gently but clearly; give specific warning signs (drowsiness, rash, breathing difficulty) that warrant urgent care."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-declining-an-otc-request-and-gp-referral",
    "title": "Pharmacy — Declining an OTC request and GP referral",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A community pharmacy counter.",
      "patientRole": "The patient is a 41-year-old asking by name for a strong codeine medicine they have been buying frequently for daily headaches over several weeks.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out the nature, frequency and duration of the headaches and current painkiller use, explain why you cannot supply the codeine product today, raise the possibility of medication-overuse headache, and refer the patient to their GP for assessment.",
      "candidateRole": "You are the pharmacist responding to a patient requesting an over-the-counter codeine-based painkiller for persistent headaches.",
      "patientConcern": "The patient is frustrated and anxious, fears being judged as drug-seeking, and is worried that without the medicine they will be unable to cope at work; they have not told anyone how often they are taking painkillers."
    },
    "guidanceNote": "Refuse the supply without sounding accusatory; normalise medication-overuse headache as a common, treatable cause, validate the patient's distress, and frame the GP referral as help rather than punishment."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-emergency-contraception-consultation",
    "title": "Pharmacy — Emergency contraception consultation",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "private pharmacy consultation room",
      "patientRole": "The patient is a 22-year-old who is anxious and embarrassed, and wants the matter dealt with quickly.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Sensitively ask the time since unprotected intercourse, explain the options and the importance of taking it as soon as possible, advise on what to do if vomiting occurs, and signpost ongoing contraception and sexual-health follow-up.",
      "candidateRole": "You are the pharmacist responding to a request for emergency contraception.",
      "patientConcern": "The patient fears being judged and just wants to leave with the pill; they have not considered ongoing contraception at all."
    },
    "guidanceNote": "Set a calm, non-judgemental tone early; ask only the clinically necessary questions and explain why each one matters."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-inhaled-steroid-and-oral-thrush-worry",
    "title": "Pharmacy — Inhaled steroid and oral thrush worry",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "community pharmacy counter",
      "patientRole": "The patient is a 38-year-old with asthma who is considering stopping the inhaler because of the mouth symptoms.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain the likely link to the inhaled steroid, advise rinsing and spitting after each dose, discuss whether a spacer would help, recommend assessment of the oral symptoms, and stress that the preventer should not simply be stopped.",
      "candidateRole": "You are the pharmacist. A patient using a preventer inhaler complains of a sore, white-coated mouth.",
      "patientConcern": "The patient is ready to abandon the preventer inhaler, not realising this risks losing asthma control."
    },
    "guidanceNote": "Solve the side effect with a simple technique change before the patient decides to stop a medicine that protects them."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-managing-a-viral-sore-throat-without-antibiotics",
    "title": "Pharmacy — Managing a viral sore throat without antibiotics",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "community pharmacy counter",
      "patientRole": "The patient is a 31-year-old who is certain antibiotics are the only thing that will help and is unhappy that they cannot buy them.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain that most sore throats are viral and self-limiting, recommend symptomatic relief, set clear safety-net advice on when to see a GP, and explain why antibiotics are not appropriate here.",
      "candidateRole": "You are the pharmacist. A patient asks you to recommend antibiotics for a three-day sore throat.",
      "patientConcern": "The patient has an important event in two days and is convinced only antibiotics will get them better in time."
    },
    "guidanceNote": "Validate the patient's wish to recover quickly, then explain antibiotic resistance simply; give a clear timeframe for seeking further help."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-methotrexate-weekly-dosing-safety-check",
    "title": "Pharmacy — Methotrexate weekly dosing safety check",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "community pharmacy consultation room",
      "patientRole": "The patient is a 49-year-old who mentions, in passing, that they have been taking the tablet every day because daily seemed 'more thorough'.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Calmly establish exactly how the patient has been taking the medicine, explain that methotrexate is a once-weekly dose and why daily dosing is dangerous, advise on what to do now, and arrange urgent contact with the prescriber.",
      "candidateRole": "You are the pharmacist dispensing methotrexate to a patient with rheumatoid arthritis.",
      "patientConcern": "The patient thought more frequent dosing would help their joints faster and has no idea the daily regimen could be life-threatening."
    },
    "guidanceNote": "Stay composed to avoid alarming the patient while conveying genuine urgency; confirm the exact number of tablets taken before advising next steps."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-new-inhaler-technique-and-adherence",
    "title": "Pharmacy — New inhaler technique and adherence",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A community pharmacy consultation room.",
      "patientRole": "The patient is a 34-year-old recently started on a brown preventer inhaler in addition to their blue reliever inhaler.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out the patient's understanding of the two inhalers, explain the difference between the preventer and the reliever, check and advise on inhaler technique and rinsing the mouth, and agree a plan for daily use even when feeling well.",
      "candidateRole": "You are the pharmacist providing a first prescription of a preventer (corticosteroid) inhaler to a patient newly diagnosed with asthma.",
      "patientConcern": "The patient is reluctant to use a steroid inhaler every day because they have read online that steroids cause weight gain and weak bones, and they intend to only use it when breathless."
    },
    "guidanceNote": "Draw out the patient's worry about daily steroids before reassuring; acknowledge the fear, explain that inhaled doses are low and act locally, and reach a shared plan rather than simply instructing."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-polypharmacy-review-for-an-older-patient",
    "title": "Pharmacy — Polypharmacy review for an older patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "community pharmacy consultation room",
      "patientRole": "The patient is a 78-year-old who finds the routine overwhelming and admits to sometimes skipping doses to 'have a rest' from the tablets.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explore which medicines cause the most difficulty, check understanding of what each is for, discuss practical aids such as a dosette box, and agree which items to raise with the GP for possible review.",
      "candidateRole": "You are the pharmacist conducting a medicines-use review with a patient taking nine regular medications.",
      "patientConcern": "The patient feels swamped by the number of tablets and quietly fears that nobody is keeping an overall eye on the full list."
    },
    "guidanceNote": "Prioritise the patient's lived difficulty over a medicine-by-medicine lecture; agree a small number of realistic next steps."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-smoking-cessation-with-nicotine-replacement",
    "title": "Pharmacy — Smoking cessation with nicotine replacement",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "pharmacy stop-smoking service room",
      "patientRole": "The patient is a 45-year-old who has tried to quit twice before and relapsed, and is sceptical that anything will work this time.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explore the patient's smoking pattern and past attempts, explain how combining a patch with a faster-acting product helps cravings, set expectations about withdrawal, and arrange a follow-up to maintain support.",
      "candidateRole": "You are the pharmacist supporting a patient who wants to quit smoking and is asking about patches and gum.",
      "patientConcern": "The patient feels like a failure after previous relapses and expects to fail again, which is undermining their motivation."
    },
    "guidanceNote": "Reframe past attempts as useful practice rather than failures; build a concrete plan and a follow-up point so the patient does not feel left alone."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-starting-metformin-for-newly-diagnosed-type-2-diabetes",
    "title": "Pharmacy — Starting metformin for newly diagnosed type 2 diabetes",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "community pharmacy consultation room",
      "patientRole": "The patient is a 54-year-old who has just collected the prescription and is unsure why they need it when they feel well.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain how and when to take metformin (with or after meals), set realistic expectations about gradual dose increases, warn about common gastrointestinal effects that usually settle, and reassure the patient that feeling well does not mean treatment is unnecessary.",
      "candidateRole": "You are the pharmacist dispensing a first prescription for metformin 500mg to a patient newly diagnosed with type 2 diabetes by their GP.",
      "patientConcern": "The patient feels healthy and secretly believes the diagnosis may be a mistake, so they are inclined to leave the tablets in the cupboard 'just in case'."
    },
    "guidanceNote": "Acknowledge that feeling well is genuinely good news before explaining why early treatment still matters; avoid implying the patient was careless."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-statin-side-effect-concern-and-stopping-the-tablet",
    "title": "Pharmacy — Statin side-effect concern and stopping the tablet",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "community pharmacy counter",
      "patientRole": "The patient is a 60-year-old who read online that statins damage muscles and has decided not to restart.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explore the nature and timing of the muscle symptoms, explain that not all aches are statin-related, advise against simply abandoning treatment, and recommend a GP review to assess and possibly adjust therapy.",
      "candidateRole": "You are the pharmacist. A patient tells you they stopped their statin a week ago because of aching legs.",
      "patientConcern": "The patient is frightened by online stories of permanent muscle damage and trusts those more than their prescriber."
    },
    "guidanceNote": "Take the symptoms seriously rather than dismissing online fears; explain the difference between common minor aches and red-flag features needing urgent review."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-suspected-medication-error-on-a-repeat-prescription",
    "title": "Pharmacy — Suspected medication error on a repeat prescription",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "community pharmacy counter",
      "patientRole": "The patient is a 63-year-old who just wants to collect their usual medicine and get to work, and is irritated by any delay.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain why you have noticed a discrepancy, reassure the patient you are acting in their interest, advise that you will check with the prescriber before dispensing, and agree a safe interim plan so the patient is not left without treatment.",
      "candidateRole": "You are the pharmacist. A patient's repeat prescription shows their blood-pressure tablet at double the strength they have been taking for a year.",
      "patientConcern": "The patient assumes it is needless bureaucracy and is annoyed at being held up over what they think is a clerical fuss."
    },
    "guidanceNote": "Frame the check as protecting the patient, not doubting them; offer a concrete plan so the delay does not feel like simply being sent away empty-handed."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-travel-advice-for-a-patient-with-diabetes",
    "title": "Pharmacy — Travel advice for a patient with diabetes",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "community pharmacy consultation room",
      "patientRole": "The patient is a 41-year-old who is excited about the trip but has never travelled across several time zones while on insulin.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Advise on carrying insulin in hand luggage, keeping supplies cool, managing doses across time zones, packing extra supplies and a letter from the prescriber, and recognising and treating hypoglycaemia while travelling.",
      "candidateRole": "You are the pharmacist. A patient with insulin-treated diabetes is flying long-haul next week and asks how to manage their medicines.",
      "patientConcern": "The patient is quietly worried about getting their insulin timing wrong mid-flight and having a hypo far from help."
    },
    "guidanceNote": "Give practical, ordered advice the patient can remember; emphasise carrying spares and fast-acting sugar rather than overloading them with detail."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-warfarin-and-a-new-over-the-counter-painkiller-request",
    "title": "Pharmacy — Warfarin and a new over-the-counter painkiller request",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "community pharmacy counter",
      "patientRole": "The patient is a 67-year-old who has used ibuprofen for years and does not see why their blood-thinner should change anything.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain the bleeding risk of combining warfarin with ibuprofen, suggest paracetamol as a safer first choice, and advise the patient to speak to their anticoagulation clinic if pain is not controlled. Manage the patient's frustration without being dismissive.",
      "candidateRole": "You are the pharmacist. A patient on long-term warfarin asks for ibuprofen for a sore knee.",
      "patientConcern": "The patient is in real discomfort, thinks the pharmacist is overcautious, and worries paracetamol simply 'won't be strong enough'."
    },
    "guidanceNote": "Name the specific risk (internal bleeding) in plain language; offer a concrete alternative rather than only refusing the request."
  }
];
