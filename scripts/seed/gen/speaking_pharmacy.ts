import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Starting metformin for newly diagnosed type 2 diabetes",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "community pharmacy consultation room",
      candidateRole: "You are the pharmacist dispensing a first prescription for metformin 500mg to a patient newly diagnosed with type 2 diabetes by their GP.",
      patientRole: "The patient is a 54-year-old who has just collected the prescription and is unsure why they need it when they feel well.",
      candidateCard: "Explain how and when to take metformin (with or after meals), set realistic expectations about gradual dose increases, warn about common gastrointestinal effects that usually settle, and reassure the patient that feeling well does not mean treatment is unnecessary.",
      patientConcern: "The patient feels healthy and secretly believes the diagnosis may be a mistake, so they are inclined to leave the tablets in the cupboard 'just in case'.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Acknowledge that feeling well is genuinely good news before explaining why early treatment still matters; avoid implying the patient was careless."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Warfarin and a new over-the-counter painkiller request",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "community pharmacy counter",
      candidateRole: "You are the pharmacist. A patient on long-term warfarin asks for ibuprofen for a sore knee.",
      patientRole: "The patient is a 67-year-old who has used ibuprofen for years and does not see why their blood-thinner should change anything.",
      candidateCard: "Explain the bleeding risk of combining warfarin with ibuprofen, suggest paracetamol as a safer first choice, and advise the patient to speak to their anticoagulation clinic if pain is not controlled. Manage the patient's frustration without being dismissive.",
      patientConcern: "The patient is in real discomfort, thinks the pharmacist is overcautious, and worries paracetamol simply 'won't be strong enough'.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Name the specific risk (internal bleeding) in plain language; offer a concrete alternative rather than only refusing the request."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Emergency contraception consultation",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "private pharmacy consultation room",
      candidateRole: "You are the pharmacist responding to a request for emergency contraception.",
      patientRole: "The patient is a 22-year-old who is anxious and embarrassed, and wants the matter dealt with quickly.",
      candidateCard: "Sensitively ask the time since unprotected intercourse, explain the options and the importance of taking it as soon as possible, advise on what to do if vomiting occurs, and signpost ongoing contraception and sexual-health follow-up.",
      patientConcern: "The patient fears being judged and just wants to leave with the pill; they have not considered ongoing contraception at all.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Set a calm, non-judgemental tone early; ask only the clinically necessary questions and explain why each one matters."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Managing a viral sore throat without antibiotics",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "community pharmacy counter",
      candidateRole: "You are the pharmacist. A patient asks you to recommend antibiotics for a three-day sore throat.",
      patientRole: "The patient is a 31-year-old who is certain antibiotics are the only thing that will help and is unhappy that they cannot buy them.",
      candidateCard: "Explain that most sore throats are viral and self-limiting, recommend symptomatic relief, set clear safety-net advice on when to see a GP, and explain why antibiotics are not appropriate here.",
      patientConcern: "The patient has an important event in two days and is convinced only antibiotics will get them better in time.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Validate the patient's wish to recover quickly, then explain antibiotic resistance simply; give a clear timeframe for seeking further help."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Polypharmacy review for an older patient",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "community pharmacy consultation room",
      candidateRole: "You are the pharmacist conducting a medicines-use review with a patient taking nine regular medications.",
      patientRole: "The patient is a 78-year-old who finds the routine overwhelming and admits to sometimes skipping doses to 'have a rest' from the tablets.",
      candidateCard: "Explore which medicines cause the most difficulty, check understanding of what each is for, discuss practical aids such as a dosette box, and agree which items to raise with the GP for possible review.",
      patientConcern: "The patient feels swamped by the number of tablets and quietly fears that nobody is keeping an overall eye on the full list.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Prioritise the patient's lived difficulty over a medicine-by-medicine lecture; agree a small number of realistic next steps."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Statin side-effect concern and stopping the tablet",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "community pharmacy counter",
      candidateRole: "You are the pharmacist. A patient tells you they stopped their statin a week ago because of aching legs.",
      patientRole: "The patient is a 60-year-old who read online that statins damage muscles and has decided not to restart.",
      candidateCard: "Explore the nature and timing of the muscle symptoms, explain that not all aches are statin-related, advise against simply abandoning treatment, and recommend a GP review to assess and possibly adjust therapy.",
      patientConcern: "The patient is frightened by online stories of permanent muscle damage and trusts those more than their prescriber.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Take the symptoms seriously rather than dismissing online fears; explain the difference between common minor aches and red-flag features needing urgent review."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Smoking cessation with nicotine replacement",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "pharmacy stop-smoking service room",
      candidateRole: "You are the pharmacist supporting a patient who wants to quit smoking and is asking about patches and gum.",
      patientRole: "The patient is a 45-year-old who has tried to quit twice before and relapsed, and is sceptical that anything will work this time.",
      candidateCard: "Explore the patient's smoking pattern and past attempts, explain how combining a patch with a faster-acting product helps cravings, set expectations about withdrawal, and arrange a follow-up to maintain support.",
      patientConcern: "The patient feels like a failure after previous relapses and expects to fail again, which is undermining their motivation.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Reframe past attempts as useful practice rather than failures; build a concrete plan and a follow-up point so the patient does not feel left alone."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Child's fever and correct paracetamol dosing",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "community pharmacy counter",
      candidateRole: "You are the pharmacist advising a parent whose toddler has a fever.",
      patientRole: "The patient is the parent of a 2-year-old, who is worried and wants to give as much medicine as possible to bring the temperature down fast.",
      candidateCard: "Explain weight-appropriate dosing of liquid paracetamol, the importance of not exceeding the stated frequency, the role of fluids and comfort, and clear safety-net signs that mean the child should be seen by a doctor urgently.",
      patientConcern: "The anxious parent is tempted to double the dose to act faster and does not realise this could be harmful.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Address the overdose risk gently but clearly; give specific warning signs (drowsiness, rash, breathing difficulty) that warrant urgent care."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Methotrexate weekly dosing safety check",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "community pharmacy consultation room",
      candidateRole: "You are the pharmacist dispensing methotrexate to a patient with rheumatoid arthritis.",
      patientRole: "The patient is a 49-year-old who mentions, in passing, that they have been taking the tablet every day because daily seemed 'more thorough'.",
      candidateCard: "Calmly establish exactly how the patient has been taking the medicine, explain that methotrexate is a once-weekly dose and why daily dosing is dangerous, advise on what to do now, and arrange urgent contact with the prescriber.",
      patientConcern: "The patient thought more frequent dosing would help their joints faster and has no idea the daily regimen could be life-threatening.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Stay composed to avoid alarming the patient while conveying genuine urgency; confirm the exact number of tablets taken before advising next steps."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Inhaled steroid and oral thrush worry",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "community pharmacy counter",
      candidateRole: "You are the pharmacist. A patient using a preventer inhaler complains of a sore, white-coated mouth.",
      patientRole: "The patient is a 38-year-old with asthma who is considering stopping the inhaler because of the mouth symptoms.",
      candidateCard: "Explain the likely link to the inhaled steroid, advise rinsing and spitting after each dose, discuss whether a spacer would help, recommend assessment of the oral symptoms, and stress that the preventer should not simply be stopped.",
      patientConcern: "The patient is ready to abandon the preventer inhaler, not realising this risks losing asthma control.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Solve the side effect with a simple technique change before the patient decides to stop a medicine that protects them."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Antidepressant early side effects and adherence",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "private pharmacy consultation room",
      candidateRole: "You are the pharmacist. A patient started an SSRI ten days ago and says they feel worse, not better.",
      patientRole: "The patient is a 29-year-old who feels more anxious and jittery and is thinking of stopping the tablets this evening.",
      candidateCard: "Explain that early worsening and a delayed onset of benefit are common, advise against stopping abruptly, agree clear safety-net advice including signs that need urgent help, and arrange GP follow-up to review progress.",
      patientConcern: "The patient is demoralised that the medicine seems to be making things worse and is close to giving up on treatment entirely.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Normalise the early settling-in period honestly while taking any low-mood or self-harm cues seriously and signposting urgent support."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Travel advice for a patient with diabetes",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "community pharmacy consultation room",
      candidateRole: "You are the pharmacist. A patient with insulin-treated diabetes is flying long-haul next week and asks how to manage their medicines.",
      patientRole: "The patient is a 41-year-old who is excited about the trip but has never travelled across several time zones while on insulin.",
      candidateCard: "Advise on carrying insulin in hand luggage, keeping supplies cool, managing doses across time zones, packing extra supplies and a letter from the prescriber, and recognising and treating hypoglycaemia while travelling.",
      patientConcern: "The patient is quietly worried about getting their insulin timing wrong mid-flight and having a hypo far from help.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Give practical, ordered advice the patient can remember; emphasise carrying spares and fast-acting sugar rather than overloading them with detail."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Suspected medication error on a repeat prescription",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "community pharmacy counter",
      candidateRole: "You are the pharmacist. A patient's repeat prescription shows their blood-pressure tablet at double the strength they have been taking for a year.",
      patientRole: "The patient is a 63-year-old who just wants to collect their usual medicine and get to work, and is irritated by any delay.",
      candidateCard: "Explain why you have noticed a discrepancy, reassure the patient you are acting in their interest, advise that you will check with the prescriber before dispensing, and agree a safe interim plan so the patient is not left without treatment.",
      patientConcern: "The patient assumes it is needless bureaucracy and is annoyed at being held up over what they think is a clerical fuss.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Frame the check as protecting the patient, not doubting them; offer a concrete plan so the delay does not feel like simply being sent away empty-handed."
  }
];
