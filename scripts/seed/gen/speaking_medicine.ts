import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Starting metformin for type 2 diabetes",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A general practice clinic",
      candidateRole:
        "You are the doctor seeing a 52-year-old patient whose recent blood tests confirm type 2 diabetes.",
      patientRole:
        "The patient is wary of starting tablets and would prefer to fix things with diet alone.",
      candidateCard:
        "Explain the diagnosis in plain terms, recommend starting metformin alongside dietary change, describe the common early side effects, and agree a follow-up plan for review.",
      patientConcern:
        "The patient fears that taking a tablet now means they will be on medication for life and have already 'failed'.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Acknowledge the wish to try diet first rather than dismissing it; frame medication as one tool, and be honest that diet and tablets often work best together.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Persuading a hesitant parent about the MMR vaccine",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A community child health clinic",
      candidateRole:
        "You are the doctor seeing the parent of a 14-month-old who is due the MMR vaccine.",
      patientRole:
        "The parent has read alarming claims online and wants to delay or skip the vaccine.",
      candidateCard:
        "Listen to the parent's specific worries, address them honestly with the evidence, explain the risks of leaving the child unprotected, and respect that the decision is theirs while encouraging vaccination.",
      patientConcern:
        "The parent is frightened by a discredited link between MMR and autism and feels judged by health staff.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Avoid lecturing; validate the parent's wish to protect their child, correct misinformation gently, and keep the door open even if they decline today.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Counselling before a planned knee replacement",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A pre-operative assessment clinic",
      candidateRole:
        "You are the doctor preparing a 68-year-old patient for a planned total knee replacement next month.",
      patientRole:
        "The patient is anxious about anaesthesia and the recovery period.",
      candidateCard:
        "Outline what to expect before, during and after surgery, explain the realistic recovery timeline and rehabilitation, and answer the patient's concerns about pain control and getting home.",
      patientConcern:
        "The patient is privately terrified of not waking up from the anaesthetic and of being a burden during recovery.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Give concrete, sequenced information but check understanding often; draw out the unspoken fear about anaesthesia rather than only listing facts.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Helping a patient improve inhaler adherence in asthma",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A general practice asthma review",
      candidateRole:
        "You are the doctor reviewing a 24-year-old patient with asthma who has needed several reliever prescriptions recently.",
      patientRole:
        "The patient only uses the brown preventer inhaler when feeling breathless and skips it otherwise.",
      candidateCard:
        "Explain the difference between the preventer and reliever inhalers, why daily preventer use matters, and agree a simple routine the patient can stick to.",
      patientConcern:
        "The patient does not understand why they should take an inhaler on days when they feel completely well.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Keep the explanation simple and practical; link the daily preventer to fewer attacks rather than relying on technical detail about inflammation.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Breaking news of a likely cancer diagnosis",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A hospital outpatient clinic",
      candidateRole:
        "You are the doctor reviewing a 60-year-old patient whose scan strongly suggests a tumour in the lung that needs urgent further tests.",
      patientRole:
        "The patient came in expecting a routine result and is alone today.",
      candidateCard:
        "Share the findings sensitively, be honest that further tests are needed before anything is certain, explain the next steps, and support the patient's immediate reaction.",
      patientConcern:
        "The patient is overwhelmed and most afraid of how to tell their family and whether they will suffer.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Warn before the difficult news, pause to let it land, and avoid false reassurance; follow the patient's pace rather than rushing into the management plan.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Supporting a patient with low mood and poor sleep",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A general practice clinic",
      candidateRole:
        "You are the doctor seeing a 30-year-old patient who has felt persistently low and has not been sleeping for several weeks.",
      patientRole:
        "The patient is reluctant to admit how bad things have become and is unsure whether to mention darker thoughts.",
      candidateCard:
        "Explore the patient's mood and daily functioning, ask sensitively about safety, and discuss treatment options including talking therapy and possible medication.",
      patientConcern:
        "The patient has had fleeting thoughts that life is not worth living but is ashamed to bring this up.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Create space for the patient to open up and ask directly but gently about safety; do not move to solutions before the patient feels heard.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Advising weight and lifestyle change after a heart scare",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A cardiology follow-up clinic",
      candidateRole:
        "You are the doctor reviewing a 47-year-old patient two weeks after a mild heart attack.",
      patientRole:
        "The patient feels fine again and is keen to get back to old habits, including smoking.",
      candidateCard:
        "Discuss the changes that will lower the risk of another event, including stopping smoking, diet and activity, and agree one or two realistic first steps together.",
      patientConcern:
        "The patient feels that the danger has passed and worries that giving up smoking will be impossible.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Resist overloading the patient with every change at once; negotiate small achievable goals and treat smoking cessation as something to support, not command.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Explaining shingles and managing pain in an older patient",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A general practice clinic",
      candidateRole:
        "You are the doctor seeing a 71-year-old patient with a painful blistering rash on one side of the chest, consistent with shingles.",
      patientRole:
        "The patient is worried the rash is contagious and dangerous.",
      candidateCard:
        "Explain what shingles is, start antiviral and pain treatment, advise on what to expect and when to seek further help, and reassure about the contagion risk.",
      patientConcern:
        "The patient is afraid of spreading it to their grandchildren and of the rash spreading across the whole body.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Address the contagion worry directly and in plain language; be clear about realistic timelines for the rash and pain so the patient knows what is normal.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Reassessing long-term opioid use for back pain",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A general practice clinic",
      candidateRole:
        "You are the doctor reviewing a 55-year-old patient who has taken strong opioid painkillers for chronic back pain for two years.",
      patientRole:
        "The patient relies on the tablets and fears being left in pain if the dose is reduced.",
      candidateCard:
        "Review how well the medication is really helping, explain the risks of long-term opioids, and propose a gradual, supported plan to reduce the dose alongside other approaches.",
      patientConcern:
        "The patient is frightened that the doctor sees them as drug-seeking and that any reduction will leave them unable to cope.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Lead with empathy for the genuine pain and avoid any hint of blame; frame reduction as a shared, gradual plan with support rather than a withdrawal of help.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Reassuring parents of a child with a febrile seizure",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A paediatric emergency department",
      candidateRole:
        "You are the doctor seeing the parent of a 2-year-old who had a brief seizure during a fever and has now recovered.",
      patientRole:
        "The parent is shaken, having thought their child was dying.",
      candidateCard:
        "Explain what a febrile seizure is, reassure about the usually good outcome, advise on what to do if it happens again, and describe the warning signs that need urgent help.",
      patientConcern:
        "The parent is terrified the child has epilepsy or brain damage and that the next seizure could be fatal.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Acknowledge how frightening it was before giving facts; give clear, memorable safety advice for a future episode rather than only reassurance.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Discussing statins with a patient worried about side effects",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A general practice clinic",
      candidateRole:
        "You are the doctor seeing a 58-year-old patient with raised cholesterol and a high cardiovascular risk score.",
      patientRole:
        "The patient has heard that statins cause muscle problems and memory loss and is reluctant to start.",
      candidateCard:
        "Explain why a statin is being recommended, discuss the real frequency of side effects honestly, and agree a plan that includes a trial and review.",
      patientConcern:
        "The patient trusts stories from friends and online more than figures and worries the doctor is just following targets.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Put the risks and benefits in proportion without dismissing what the patient has heard; offer a trial-and-review approach to share the decision.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Advising a pregnant patient on safe medication use",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "An antenatal clinic",
      candidateRole:
        "You are the doctor seeing a patient who is 10 weeks pregnant and has been taking over-the-counter medicines for headaches and a cold.",
      patientRole:
        "The patient is anxious that she may have already harmed the baby.",
      candidateCard:
        "Find out exactly what she has taken, reassure where appropriate, advise which remedies are safe in pregnancy and which to avoid, and explain when to seek advice before taking anything new.",
      patientConcern:
        "The patient feels guilty and fears she has caused lasting harm before she knew she was pregnant.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Gather the specifics before reassuring so your advice is accurate; address the guilt directly and give a simple rule for checking future medicines.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Explaining a new atrial fibrillation diagnosis and blood thinners",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A general practice clinic",
      candidateRole:
        "You are the doctor seeing a 74-year-old patient newly found to have an irregular heart rhythm, atrial fibrillation.",
      patientRole:
        "The patient feels well and is reluctant to start a blood-thinning medication.",
      candidateCard:
        "Explain what atrial fibrillation is and why it raises stroke risk, discuss the role of anticoagulation, weigh the benefits against the bleeding risk, and agree a way forward.",
      patientConcern:
        "The patient is more frightened of bleeding from a fall than of a stroke they cannot feel coming.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Make the invisible stroke risk concrete and balance it honestly against bleeding; involve the patient in weighing the trade-off rather than simply prescribing.",
  },
];
