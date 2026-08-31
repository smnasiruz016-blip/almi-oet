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
    "profession": "MEDICINE",
    "title": "Medicine — Advising a pregnant patient on safe medication use",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "An antenatal clinic",
      "patientRole": "The patient is anxious that she may have already harmed the baby.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Find out exactly what she has taken, reassure where appropriate, advise which remedies are safe in pregnancy and which to avoid, and explain when to seek advice before taking anything new.",
      "candidateRole": "You are the doctor seeing a patient who is 10 weeks pregnant and has been taking over-the-counter medicines for headaches and a cold.",
      "patientConcern": "The patient feels guilty and fears she has caused lasting harm before she knew she was pregnant."
    },
    "guidanceNote": "Gather the specifics before reassuring so your advice is accurate; address the guilt directly and give a simple rule for checking future medicines."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Advising weight and lifestyle change after a heart scare",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A cardiology follow-up clinic",
      "patientRole": "The patient feels fine again and is keen to get back to old habits, including smoking.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Discuss the changes that will lower the risk of another event, including stopping smoking, diet and activity, and agree one or two realistic first steps together.",
      "candidateRole": "You are the doctor reviewing a 47-year-old patient two weeks after a mild heart attack.",
      "patientConcern": "The patient feels that the danger has passed and worries that giving up smoking will be impossible."
    },
    "guidanceNote": "Resist overloading the patient with every change at once; negotiate small achievable goals and treat smoking cessation as something to support, not command."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Breaking news of a likely cancer diagnosis",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A hospital outpatient clinic",
      "patientRole": "The patient came in expecting a routine result and is alone today.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Share the findings sensitively, be honest that further tests are needed before anything is certain, explain the next steps, and support the patient's immediate reaction.",
      "candidateRole": "You are the doctor reviewing a 60-year-old patient whose scan strongly suggests a tumour in the lung that needs urgent further tests.",
      "patientConcern": "The patient is overwhelmed and most afraid of how to tell their family and whether they will suffer."
    },
    "guidanceNote": "Warn before the difficult news, pause to let it land, and avoid false reassurance; follow the patient's pace rather than rushing into the management plan."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Counselling before a planned knee replacement",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A pre-operative assessment clinic",
      "patientRole": "The patient is anxious about anaesthesia and the recovery period.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Outline what to expect before, during and after surgery, explain the realistic recovery timeline and rehabilitation, and answer the patient's concerns about pain control and getting home.",
      "candidateRole": "You are the doctor preparing a 68-year-old patient for a planned total knee replacement next month.",
      "patientConcern": "The patient is privately terrified of not waking up from the anaesthetic and of being a burden during recovery."
    },
    "guidanceNote": "Give concrete, sequenced information but check understanding often; draw out the unspoken fear about anaesthesia rather than only listing facts."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Discussing statins with a patient worried about side effects",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A general practice clinic",
      "patientRole": "The patient has heard that statins cause muscle problems and memory loss and is reluctant to start.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Explain why a statin is being recommended, discuss the real frequency of side effects honestly, and agree a plan that includes a trial and review.",
      "candidateRole": "You are the doctor seeing a 58-year-old patient with raised cholesterol and a high cardiovascular risk score.",
      "patientConcern": "The patient trusts stories from friends and online more than figures and worries the doctor is just following targets."
    },
    "guidanceNote": "Put the risks and benefits in proportion without dismissing what the patient has heard; offer a trial-and-review approach to share the decision."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Explaining a delayed test result",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A hospital outpatient clinic. The patient has attended to discuss results, but a CT scan was not booked due to an administrative error and has not yet been done.",
      "patientRole": "The patient is a 62-year-old retired teacher being investigated for unintentional weight loss and is anxiously awaiting CT scan results today.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Find out the patient's expectations for today's visit. Explain honestly that the CT scan was not arranged because of a booking error and apologise. Reassure about the interim safety-netting, arrange the scan as a priority and a clear follow-up, and address the patient's concerns.",
      "candidateRole": "You are the hospital doctor (medical registrar) seeing the patient in clinic.",
      "patientConcern": "The patient's underlying fear is that the delay means cancer has been missed or has worsened, and that they are 'not being taken seriously'. They may become angry and feel their time has been wasted, and need to feel the doctor is being honest and accountable."
    },
    "guidanceNote": "Be honest and take ownership of the error early rather than minimising it — patients forgive mistakes far more readily than evasiveness. Acknowledge the anxiety and anger as legitimate, give a concrete revised timeline, and check the patient leaves knowing exactly what happens next."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Explaining a new atrial fibrillation diagnosis and blood thinners",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A general practice clinic",
      "patientRole": "The patient feels well and is reluctant to start a blood-thinning medication.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Explain what atrial fibrillation is and why it raises stroke risk, discuss the role of anticoagulation, weigh the benefits against the bleeding risk, and agree a way forward.",
      "candidateRole": "You are the doctor seeing a 74-year-old patient newly found to have an irregular heart rhythm, atrial fibrillation.",
      "patientConcern": "The patient is more frightened of bleeding from a fall than of a stroke they cannot feel coming."
    },
    "guidanceNote": "Make the invisible stroke risk concrete and balance it honestly against bleeding; involve the patient in weighing the trade-off rather than simply prescribing."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Explaining shingles and managing pain in an older patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A general practice clinic",
      "patientRole": "The patient is worried the rash is contagious and dangerous.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Explain what shingles is, start antiviral and pain treatment, advise on what to expect and when to seek further help, and reassure about the contagion risk.",
      "candidateRole": "You are the doctor seeing a 71-year-old patient with a painful blistering rash on one side of the chest, consistent with shingles.",
      "patientConcern": "The patient is afraid of spreading it to their grandchildren and of the rash spreading across the whole body."
    },
    "guidanceNote": "Address the contagion worry directly and in plain language; be clear about realistic timelines for the rash and pain so the patient knows what is normal."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Helping a patient improve inhaler adherence in asthma",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A general practice asthma review",
      "patientRole": "The patient only uses the brown preventer inhaler when feeling breathless and skips it otherwise.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Explain the difference between the preventer and reliever inhalers, why daily preventer use matters, and agree a simple routine the patient can stick to.",
      "candidateRole": "You are the doctor reviewing a 24-year-old patient with asthma who has needed several reliever prescriptions recently.",
      "patientConcern": "The patient does not understand why they should take an inhaler on days when they feel completely well."
    },
    "guidanceNote": "Keep the explanation simple and practical; link the daily preventer to fewer attacks rather than relying on technical detail about inflammation."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Newly diagnosed hypertension in clinic",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A general practice consulting room. The patient has returned for results after three raised blood-pressure readings over the past month.",
      "patientRole": "The patient is a 45-year-old accountant recently found to have stage 1 hypertension. They feel completely well and are reluctant to start medication.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Find out the patient's understanding of and concerns about the diagnosis. Explain what hypertension means and why treatment matters even without symptoms. Discuss lifestyle measures (diet, salt, alcohol, activity, weight) and the option of starting medication. Agree a realistic plan and arrange follow-up.",
      "candidateRole": "You are the general practitioner.",
      "patientConcern": "The patient's hidden fear is that starting tablets means being 'on drugs for life' and becoming like their father, who had a disabling stroke despite taking many medications. They equate medication with being seriously ill and losing control."
    },
    "guidanceNote": "Because the patient feels well, lead with their concerns rather than statistics. Draw out the fear about lifelong medication and the family history before recommending anything — acknowledging it openly makes shared decision-making genuine, not a script."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Persuading a hesitant parent about the MMR vaccine",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A community child health clinic",
      "patientRole": "The parent has read alarming claims online and wants to delay or skip the vaccine.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Listen to the parent's specific worries, address them honestly with the evidence, explain the risks of leaving the child unprotected, and respect that the decision is theirs while encouraging vaccination.",
      "candidateRole": "You are the doctor seeing the parent of a 14-month-old who is due the MMR vaccine.",
      "patientConcern": "The parent is frightened by a discredited link between MMR and autism and feels judged by health staff."
    },
    "guidanceNote": "Avoid lecturing; validate the parent's wish to protect their child, correct misinformation gently, and keep the door open even if they decline today."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Reassessing long-term opioid use for back pain",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A general practice clinic",
      "patientRole": "The patient relies on the tablets and fears being left in pain if the dose is reduced.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Review how well the medication is really helping, explain the risks of long-term opioids, and propose a gradual, supported plan to reduce the dose alongside other approaches.",
      "candidateRole": "You are the doctor reviewing a 55-year-old patient who has taken strong opioid painkillers for chronic back pain for two years.",
      "patientConcern": "The patient is frightened that the doctor sees them as drug-seeking and that any reduction will leave them unable to cope."
    },
    "guidanceNote": "Lead with empathy for the genuine pain and avoid any hint of blame; frame reduction as a shared, gradual plan with support rather than a withdrawal of help."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Reassuring parents of a child with a febrile seizure",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A paediatric emergency department",
      "patientRole": "The parent is shaken, having thought their child was dying.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Explain what a febrile seizure is, reassure about the usually good outcome, advise on what to do if it happens again, and describe the warning signs that need urgent help.",
      "candidateRole": "You are the doctor seeing the parent of a 2-year-old who had a brief seizure during a fever and has now recovered.",
      "patientConcern": "The parent is terrified the child has epilepsy or brain damage and that the next seizure could be fatal."
    },
    "guidanceNote": "Acknowledge how frightening it was before giving facts; give clear, memorable safety advice for a future episode rather than only reassurance."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Starting metformin for type 2 diabetes",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A general practice clinic",
      "patientRole": "The patient is wary of starting tablets and would prefer to fix things with diet alone.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Explain the diagnosis in plain terms, recommend starting metformin alongside dietary change, describe the common early side effects, and agree a follow-up plan for review.",
      "candidateRole": "You are the doctor seeing a 52-year-old patient whose recent blood tests confirm type 2 diabetes.",
      "patientConcern": "The patient fears that taking a tablet now means they will be on medication for life and have already 'failed'."
    },
    "guidanceNote": "Acknowledge the wish to try diet first rather than dismissing it; frame medication as one tool, and be honest that diet and tablets often work best together."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "title": "Medicine — Supporting a patient with low mood and poor sleep",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A general practice clinic",
      "patientRole": "The patient is reluctant to admit how bad things have become and is unsure whether to mention darker thoughts.",
      "prepSeconds": 120,
      "speakSeconds": 300,
      "candidateCard": "Explore the patient's mood and daily functioning, ask sensitively about safety, and discuss treatment options including talking therapy and possible medication.",
      "candidateRole": "You are the doctor seeing a 30-year-old patient who has felt persistently low and has not been sleeping for several weeks.",
      "patientConcern": "The patient has had fleeting thoughts that life is not worth living but is ashamed to bring this up."
    },
    "guidanceNote": "Create space for the patient to open up and ask directly but gently about safety; do not move to solutions before the patient feels heard."
  }
];
