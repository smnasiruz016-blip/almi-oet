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
    "profession": "NURSING",
    "title": "Nursing — Advising a patient on pressure area care at home",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community home visit",
      "patientRole": "The patient is the spouse and main carer, who has noticed a reddened area on the partner's lower back.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out about the partner's mobility and the carer's daily routine. Explain how pressure injuries develop and why the red area matters. Advise on repositioning, skin checks, and keeping skin clean and dry. Agree on a simple repositioning schedule and when to call for help.",
      "candidateRole": "You are the community nurse visiting a patient who cares for a mostly bed-bound spouse.",
      "patientConcern": "The carer is exhausted and feels guilty that the red mark means they have failed their partner."
    },
    "guidanceNote": "Recognise the carer's exhaustion and guilt, and offer manageable steps and support rather than adding to their sense of blame."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Calming a patient before an MRI scan",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Radiology department",
      "patientRole": "The patient is nervous about the scan and the enclosed scanner.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out what the patient knows about the scan and what worries them. Explain what the scan involves, including the noise and how long it takes. Advise on staying still and how to signal staff if needed. Agree on what would help them feel more comfortable.",
      "candidateRole": "You are the nurse preparing a patient for an MRI scan of the spine.",
      "patientConcern": "The patient is claustrophobic and is afraid of a panic attack inside the scanner but does not want to seem foolish."
    },
    "guidanceNote": "Create space for the patient to admit claustrophobia and offer practical options rather than simply reassuring them it is quick."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Discussing comfort care with the daughter of a dying patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Palliative care unit",
      "patientRole": "The patient is an adult daughter who is upset that her mother is no longer being given fluids by a drip.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out what the daughter understands about her mother's condition and her concerns. Explain the focus on comfort and why a drip may not help at this stage. Advise on how comfort and mouth care are being maintained. Agree on how she can be involved in her mother's care.",
      "candidateRole": "You are the nurse caring for a patient in the last days of life.",
      "patientConcern": "The daughter fears her mother is being left to die of thirst and that stopping fluids means staff have given up on her."
    },
    "guidanceNote": "Surface the painful belief that withholding fluids equals abandonment, and respond with honesty and compassion rather than clinical justification alone."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Discussing wound care with a patient going home with a drain",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Surgical day unit",
      "patientRole": "The patient is being sent home with a drain and written instructions on emptying and recording it.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out what the patient already understands about the drain. Explain how to empty it, record the output, and keep the site clean. Advise on warning signs that need urgent review. Agree on how they will contact the unit if worried.",
      "candidateRole": "You are the nurse discharging a patient who is going home with a surgical wound drain still in place.",
      "patientConcern": "The patient lives alone and is quietly overwhelmed at managing the drain without help and may not admit it."
    },
    "guidanceNote": "Check who is at home to help and surface the worry about coping alone before handing over a list of tasks."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Encouraging early mobilisation after hip surgery",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Orthopaedic ward",
      "patientRole": "The patient is reluctant to get out of bed and walk with the physiotherapy frame.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out why the patient is reluctant to move. Explain the benefits of early walking for recovery and preventing complications. Advise on pain relief timing and safe technique. Agree on a small first goal for today.",
      "candidateRole": "You are the nurse looking after a patient one day after a hip replacement.",
      "patientConcern": "The patient is privately terrified that moving will dislodge the new joint and undo the surgery."
    },
    "guidanceNote": "Draw out the fear of damaging the joint and address it directly, rather than only repeating that walking is good for them."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Explaining a fluid and salt limit to a heart failure patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Cardiology ward",
      "patientRole": "The patient finds the daily fluid limit and low-salt diet frustrating and unrealistic.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out about the patient's usual eating and drinking habits. Explain how extra fluid and salt make the heart work harder and worsen breathlessness. Advise on practical ways to manage thirst and reduce salt. Agree on one or two changes the patient is willing to try.",
      "candidateRole": "You are the nurse caring for a patient admitted with worsening heart failure.",
      "patientConcern": "The patient feels the restrictions strip away the few pleasures left in life and quietly doubts they are worth it."
    },
    "guidanceNote": "Acknowledge the real loss the restrictions represent and negotiate small realistic changes rather than insisting on a strict regime."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Helping a new mother worried about breastfeeding pain",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Postnatal ward",
      "patientRole": "The patient is a new mother whose baby is feeding but who finds breastfeeding very painful.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out how feeding is going and what the pain feels like. Explain that pain is often linked to how the baby attaches at the breast. Advise on positioning and latch, and on asking for help at each feed. Agree on a plan to review the next feed together.",
      "candidateRole": "You are the nurse caring for a first-time mother two days after a normal delivery.",
      "patientConcern": "She secretly fears she is failing as a mother and is close to giving up breastfeeding without telling anyone."
    },
    "guidanceNote": "Normalise early feeding difficulty without dismissing her pain, and offer practical help she can accept rather than pushing breastfeeding as the only acceptable choice."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Helping a teenager manage asthma before leaving hospital",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Paediatric ward",
      "patientRole": "The patient is a teenager who often forgets the preventer inhaler and finds it inconvenient.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out how the patient currently uses their inhalers and what gets in the way. Explain the difference between the preventer and reliever and why daily use matters. Advise on building it into a routine and recognising worsening symptoms. Agree on a realistic plan they will actually follow.",
      "candidateRole": "You are the nurse discharging a sixteen-year-old after an asthma flare-up.",
      "patientConcern": "The teenager does not want to seem different from friends and secretly avoids using inhalers in front of others."
    },
    "guidanceNote": "Engage the teenager as the decision-maker and explore the social embarrassment driving non-use, rather than lecturing about adherence."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Preparing an anxious patient for fasting before an operation",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Pre-operative admission clinic",
      "patientRole": "The patient is unsure about the fasting instructions and keeps asking about food and medicines.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out what the patient has understood about fasting. Explain when to stop eating and drinking and why it matters for safety. Advise on taking regular morning medicines as instructed. Agree on a simple plan for the night before and the morning.",
      "candidateRole": "You are the nurse preparing a patient for surgery scheduled for tomorrow morning.",
      "patientConcern": "The patient takes diabetes medication and is quietly worried that fasting will make their sugar levels dangerous."
    },
    "guidanceNote": "Ask about regular medicines and the diabetes worry directly, as a generic fasting rule could be unsafe for this patient."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Reassuring a patient anxious about discharge",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "patient-education",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A hospital ward. The patient is due to be discharged this afternoon.",
      "patientRole": "The patient is a 68-year-old recovering from pneumonia, worried about coping at home alone.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out what specifically worries the patient about going home. Acknowledge the concern. Explain the discharge support available (community nurse visit, medication plan, who to call if breathless). Agree a simple plan and check the patient feels ready.",
      "candidateRole": "You are the ward nurse.",
      "patientConcern": "The patient is afraid the breathlessness will return at night and no one will be there to help."
    },
    "guidanceNote": "Open by drawing out the real worry before reassuring. Address the specific concern (night-time breathlessness), not a generic script. Build rapport, give clear structure, and check understanding at the end."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Responding to a patient who wants to stop taking blood pressure tablets",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community nursing clinic",
      "patientRole": "The patient feels well and wants to stop the tablets because they think they no longer need them.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out why the patient wants to stop and how they have been feeling. Explain that good blood pressure now is often because of the tablets. Advise on the risks of stopping and on raising any side effects. Agree on a safe way forward, including review.",
      "candidateRole": "You are the practice nurse reviewing a patient with high blood pressure.",
      "patientConcern": "The patient has been getting dizzy spells and worries the tablets are harming them but is too embarrassed to mention it."
    },
    "guidanceNote": "Gently probe for side effects behind the wish to stop, so a real symptom like dizziness is not missed."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Supporting a man reluctant to use a walking aid in aged care",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Residential aged care home",
      "patientRole": "The patient refuses to use the walking frame the physiotherapist recommended.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out how the patient feels about using the frame. Explain the link between the recent near-falls and the risk of a serious injury. Advise on how the frame can keep his independence rather than take it. Agree on a trial of using it to the dining room.",
      "candidateRole": "You are the nurse caring for an older resident who has had two recent near-falls.",
      "patientConcern": "He feels the frame makes him look old and dependent, and fears losing his dignity in front of other residents."
    },
    "guidanceNote": "Recognise that the frame feels like a threat to his identity and independence, and frame it as a way to keep doing what he values."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Supporting a patient distressed after a panic attack on the ward",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Mental health inpatient unit",
      "patientRole": "The patient is shaken and embarrassed and wants to go back to their room and be left alone.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out how the patient is feeling now and what happened before the attack. Explain what a panic attack is and that it will pass. Advise on simple grounding and breathing techniques for next time. Agree on a way to seek support early rather than withdrawing.",
      "candidateRole": "You are the nurse supporting a patient who has just had a panic attack in the day room.",
      "patientConcern": "The patient is afraid the panic attack means they are getting worse and will never be allowed to leave the unit."
    },
    "guidanceNote": "Move at the patient's pace and draw out the fear about recovery and discharge before teaching coping techniques."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Supporting a patient hesitant about starting insulin",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A diabetes clinic in a community health centre.",
      "patientRole": "The patient is a 56-year-old who has had type 2 diabetes for nine years and has always managed it with tablets and diet.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out how the patient feels about the doctor's recommendation. Explain why insulin is now being suggested and what starting it would involve (daily self-injection, blood-glucose checks, support available). Acknowledge their feelings, address their specific worries, and agree on a practical next step together.",
      "candidateRole": "You are the practice nurse seeing a patient whose type 2 diabetes is no longer controlled on oral medication. The doctor has recommended starting insulin injections.",
      "patientConcern": "The patient secretly believes needing insulin means they have 'failed' and that their diabetes is now severe and life-threatening; they are also frightened of self-injecting and worry it will stop them driving and working. The candidate must gently draw out these fears and reassure realistically without dismissing them."
    },
    "guidanceNote": "Lead with open questions and let the patient voice their fears before giving facts — naming insulin as a normal next stage (not a punishment or failure) and checking understanding will land far better than launching straight into injection technique."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "NURSING",
    "title": "Nursing — Talking with a parent about a feverish child in the emergency department",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Emergency department",
      "patientRole": "The patient is a parent who feels the child has waited too long and wants antibiotics.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out the history of the fever and what the parent has tried. Explain how the child will be assessed and why antibiotics are not always needed. Advise on fever management and fluids while waiting. Agree on what would prompt them to seek help quickly.",
      "candidateRole": "You are the triage nurse seeing a parent whose toddler has had a high temperature for a day.",
      "patientConcern": "The parent is frightened the fever means something serious like meningitis and feels no one is taking it seriously."
    },
    "guidanceNote": "Acknowledge the parent's fear of a serious illness and explain the safety-netting plan, rather than only justifying the wait."
  }
];
