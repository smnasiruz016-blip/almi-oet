import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Contrast injection anxiety before CT angiogram",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "CT imaging department",
      candidateRole: "You are the radiographer about to perform a CT angiogram requiring an intravenous iodinated contrast injection.",
      patientRole: "The patient is a 47-year-old who has become tense and quiet after seeing the cannula and contrast pump.",
      candidateCard: "Explain why the contrast is needed and what the injection will feel like (warm flush, metallic taste), reassure the patient that these sensations are normal and brief, confirm there is no shellfish/iodine misconception blocking consent, and gain cooperation to proceed.",
      patientConcern: "The patient secretly fears the warm flushing sensation means an allergic reaction is starting, having heard a relative reacted badly to a 'dye'.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Name the warm-flush and metallic-taste sensations before they happen so the patient does not mistake a normal effect for an allergic reaction; keep your tone calm and unhurried."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Preparing a nervous patient for a barium swallow",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "fluoroscopy suite",
      candidateRole: "You are the radiographer setting up a barium swallow examination.",
      patientRole: "The patient is a 60-year-old referred for swallowing difficulties who is worried about the taste and texture of the barium.",
      candidateCard: "Explain how the examination works, that they will drink the barium in stages while you take moving images, describe the chalky taste honestly, advise on the white stools and fluids afterwards, and gain cooperation to complete the series of swallows.",
      patientConcern: "The patient is afraid the thick liquid will make them choke given their existing swallowing problem.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Acknowledge the choking fear directly and explain you control the pace and can stop between sips; honesty about the chalky taste builds trust better than overselling it."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Pregnancy check before a lumbar spine X-ray",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "general X-ray room",
      candidateRole: "You are the radiographer required to confirm pregnancy status before a lumbar spine X-ray on a patient of childbearing age.",
      patientRole: "The patient is a 29-year-old who is embarrassed and slightly defensive when asked about the possibility of pregnancy.",
      candidateCard: "Explain sensitively why you must ask about possible pregnancy before X-raying the lower abdomen and pelvis, describe the small radiation risk to a developing pregnancy, agree a way forward (proceed, reschedule, or arrange a test) and gain informed cooperation.",
      patientConcern: "The patient could be in the very early stages of a pregnancy she has not told anyone about and does not want to disclose this in front of others.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Frame the pregnancy question as routine safety for everyone, offer privacy, and explain the '10-day rule' style reasoning without pressuring the patient to disclose details she is not ready to share."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Patient who did not fast before an abdominal ultrasound",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "ultrasound department",
      candidateRole: "You are the radiographer about to perform an abdominal ultrasound and you discover the patient has eaten breakfast despite fasting instructions.",
      patientRole: "The patient is a 52-year-old who admits to eating and is frustrated at the thought of a wasted trip.",
      candidateCard: "Explain why fasting matters for gallbladder and upper-abdomen imaging, acknowledge their frustration, agree a practical plan (limited scan now versus rebooking for the full study), and keep their cooperation and goodwill.",
      patientConcern: "The patient took time off work with difficulty and is anxious that rescheduling means more lost pay and a longer wait for answers.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Lead with empathy for the wasted journey before explaining the clinical limitation; offer a concrete next step rather than simply turning the patient away."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Keeping still during an image-guided breast biopsy",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "interventional imaging room",
      candidateRole: "You are the radiographer assisting with an ultrasound-guided breast biopsy and preparing the patient for the procedure.",
      patientRole: "The patient is a 44-year-old recalled from screening who is frightened about both the needle and what it might find.",
      candidateCard: "Explain how the local anaesthetic and biopsy needle work, what the loud clicking sound of the device means, why staying still is essential for accuracy, reassure her about the recall process, and gain cooperation and informed consent.",
      patientConcern: "The patient is mainly terrified that the biopsy is being done because the team already believes she has cancer.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Separate the procedure explanation from the diagnostic uncertainty; warn her about the sharp click of the biopsy gun in advance so the noise does not make her flinch at a critical moment."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Immobilising a frightened young child for a forearm X-ray",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "paediatric X-ray room",
      candidateRole: "You are the radiographer needing to X-ray a possibly fractured forearm in a crying 4-year-old.",
      patientRole: "The patient is the parent of a frightened 4-year-old who is reluctant to let you position or gently restrain the arm.",
      candidateCard: "Explain to the parent why the child must hold still and how immobilisation aids help, agree how the parent can comfort and assist while staying safe from the beam, describe distraction techniques, and gain cooperation to get a usable image quickly.",
      patientConcern: "The parent worries that holding the child down will be traumatic and that the lead apron and equipment will frighten the child further.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Make the parent your ally by giving them a clear comforting role; emphasise that a still child means one quick exposure rather than repeated attempts."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Managing pain and compression during mammography",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "mammography unit",
      candidateRole: "You are the radiographer performing a routine screening mammogram.",
      patientRole: "The patient is a 56-year-old who recalls a painful previous mammogram and is hesitant about the breast compression.",
      candidateCard: "Explain why compression is necessary for a clear, low-dose image, acknowledge that it can be uncomfortable, describe how you will work with her to manage the pressure, and gain cooperation to complete all the required views.",
      patientConcern: "The patient fears the compression will be as painful as last time and is privately considering walking out before the second view.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Give the patient a sense of control, for example agreeing a signal to pause, and explain that good compression actually lowers the radiation dose and reduces the need to repeat views."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Reassuring a distressed elderly patient before a hip X-ray",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "emergency department X-ray room",
      candidateRole: "You are the radiographer needing to X-ray a possibly fractured hip in a frail, distressed older patient.",
      patientRole: "The patient is an 84-year-old in pain who is confused about where they are and resistant to being moved onto the table.",
      candidateCard: "Explain gently and simply what you need to do, agree how you will move them with minimal pain, reassure them about the trolley transfer, and gain cooperation to obtain the views the doctors need.",
      patientConcern: "The patient is frightened of being moved because every previous position change has caused severe pain, and they do not fully understand why an X-ray is needed.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Use short, clear sentences and check understanding often; coordinate movements so they are slow and predictable, and acknowledge the pain rather than dismissing it."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Reassuring a patient anxious in the CT scanner bore",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "CT imaging department",
      candidateRole: "You are the radiographer preparing a patient for a head and neck CT who is uneasy about lying in the scanner.",
      patientRole: "The patient is a 38-year-old who feels enclosed and panicky when their head is positioned in the scanner ring.",
      candidateCard: "Explain how short the CT scan is, that the bore is open at both ends and they will not be fully enclosed, describe the breath-hold instructions and the intercom, and gain cooperation to complete the scan without movement.",
      patientConcern: "The patient is worried they will panic and be unable to stay still, ruining the scan and having to start again.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Distinguish CT clearly from MRI, the short scan time and open ring are genuine reassurances; offer the call button and a clear time estimate so the patient feels in control."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Explaining a barium enema bowel preparation",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "fluoroscopy suite",
      candidateRole: "You are the radiographer preparing a patient for a barium enema examination.",
      patientRole: "The patient is a 63-year-old who is embarrassed and apprehensive about the procedure and the bowel preparation.",
      candidateCard: "Explain the bowel-cleansing preparation, how the barium and air are introduced, the cramping and urge sensations they may feel, how dignity will be maintained, and gain cooperation and consent to proceed.",
      patientConcern: "The patient is deeply embarrassed about possible loss of bowel control during the examination and is reluctant to admit it.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Address dignity proactively, the patient may not voice the embarrassment, and normalise the cramping and urge sensations so they are not alarmed when they occur."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Checking for metal implants before an MRI scan",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "MRI department",
      candidateRole: "You are the radiographer completing the MRI safety screening before a knee scan.",
      patientRole: "The patient is a 70-year-old who is vague about past surgeries and dismissive about the detailed metal-implant questions.",
      candidateCard: "Explain why the strong magnet makes the metal-screening questions a genuine safety matter, work patiently through the history of any implants, pacemakers, clips or retained fragments, and gain full and honest cooperation before entering the scan room.",
      patientConcern: "The patient had eye surgery decades ago and does not realise a possible retained metal fragment could be dangerous, so they keep waving the questions away.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Convey that thorough screening protects the patient rather than being bureaucratic; probe gently about old operations and occupational metal exposure rather than accepting a quick 'no'."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Preparing a patient for a DEXA bone density scan",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "bone densitometry room",
      candidateRole: "You are the radiographer about to perform a DEXA bone density scan.",
      patientRole: "The patient is a 58-year-old who is anxious about the radiation involved and unsure why the scan is needed.",
      candidateCard: "Explain in simple terms what a DEXA scan measures, reassure them that the radiation dose is very low, describe how they need to lie still while the arm passes over them, and gain cooperation to complete the scan.",
      patientConcern: "The patient believes any scan involving radiation must carry a serious risk and is close to declining the appointment.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Put the very low DEXA dose in everyday terms the patient can relate to; keep the explanation simple and focus on how the result helps protect their bone health."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "RADIOGRAPHY",
    title: "Radiography — Gaining cooperation for a chest X-ray breath-hold",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "general X-ray room",
      candidateRole: "You are the radiographer performing a chest X-ray and needing a good inspiratory breath-hold.",
      patientRole: "The patient is a 66-year-old who is short of breath and struggling to follow the breathing instructions.",
      candidateCard: "Explain why holding a deep breath improves the chest image, demonstrate the breathing instruction clearly, agree how you will time the exposure with their breath, and gain cooperation to get a clear picture in as few attempts as possible.",
      patientConcern: "The patient is worried that taking a deep breath will trigger a coughing fit or make their breathlessness worse.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Demonstrate the breath-hold yourself and keep instructions short and well-timed; reassure the breathless patient that the hold lasts only a couple of seconds."
  }
];
