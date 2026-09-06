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
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-checking-for-metal-implants-before-an-mri-scan",
    "title": "Radiography — Checking for metal implants before an MRI scan",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "MRI department, in the screening area outside the scan room, before a knee scan.",
      "candidateRole": "You are the radiographer completing the MRI safety screening questionnaire before the patient enters the scan room.",
      "patientRole": "A 70-year-old who is vague about past operations, has ticked no to everything on the form, and keeps saying it was all a long time ago.",
      "patientConcern": "The patient had eye surgery decades ago and does not realise a retained metal fragment could be dangerous, so waves the questions away.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain before you begin why these questions are asked every time and of every patient.\n\nExplain what the magnet does to metal, in concrete terms rather than as a general safety statement.\n\nAsk about each category in turn rather than accepting a single blanket answer: pacemakers, clips, stents, joints and plates.\n\nAsk specifically about eye injuries and eye surgery, and about metalwork or grinding at work.\n\nAsk about anything implanted that they may not think of as an operation, including a hearing implant or a drug pump.\n\nAsk patiently again about the periods they have skipped over, and give them time to remember.\n\nExplain why the timing matters, since older implants are often the ones that are not MRI safe.\n\nExplain what happens if there is any doubt, including checking the medical record or arranging an orbital radiograph.\n\nReassure them that the scan is not being obstructed and that a delay is preferable to the alternative.\n\nAsk about loose metal on their person now: jewellery, hearing aids, dentures and clothing.\n\nGain full and honest cooperation, and confirm every answer with them before entering the room."
    },
    "guidanceNote": "Convey that thorough screening protects the patient rather than being bureaucratic; probe gently about old operations and occupational metal exposure rather than accepting a quick 'no'."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-contrast-injection-anxiety-before-ct-angiogram",
    "title": "Radiography — Contrast injection anxiety before CT angiogram",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "CT imaging department, on the scanner table, cannula in place and the pump loaded.",
      "candidateRole": "You are the radiographer about to perform a CT angiogram requiring intravenous iodinated contrast.",
      "patientRole": "A 47-year-old who has become tense and quiet since seeing the pump, whose aunt was said to have reacted badly to a dye years ago.",
      "patientConcern": "The patient secretly fears the warm flushing sensation means an allergic reaction is beginning, and is close to asking to stop.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Notice the change in the patient and ask what is going through their mind.\n\nAsk what they have been told about the injection and whether anything has worried them.\n\nAsk about the relative's reaction and what actually happened, since the account may not describe an allergy at all.\n\nAsk about their own history: previous contrast, asthma, allergies, kidney function and any medication.\n\nCorrect the shellfish and iodine misconception if it arises, since it is common and unfounded.\n\nExplain why the contrast is needed and what the scan would show without it.\n\nDescribe exactly what the injection feels like: the warmth spreading, the metallic taste, and the sensation of having passed urine.\n\nSay clearly that these sensations are normal, expected and brief, and that they are not the start of a reaction.\n\nDescribe what a genuine reaction would feel like and how quickly staff would respond.\n\nExplain the breath-hold instruction and how long the scan itself takes.\n\nConfirm consent, agree how they will signal you, and check they are willing to proceed."
    },
    "guidanceNote": "Name the warm-flush and metallic-taste sensations before they happen so the patient does not mistake a normal effect for an allergic reaction; keep your tone calm and unhurried."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-explaining-a-barium-enema-bowel-preparation",
    "title": "Radiography — Explaining a barium enema bowel preparation",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Fluoroscopy suite, in the changing area, before a barium enema examination.",
      "candidateRole": "You are the radiographer preparing the patient for a barium enema examination.",
      "patientRole": "A 63-year-old who has completed the bowel preparation, is apprehensive, avoids eye contact, and has asked twice how many people will be in the room.",
      "patientConcern": "The patient is deeply embarrassed about the possibility of losing bowel control during the examination and is reluctant to admit it.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the bowel preparation went and whether they managed it fully, since an incomplete preparation changes the plan.\n\nAsk what they already know about the examination and what they have been told.\n\nAsk what concerns them most, and make the embarrassing answer easy to give.\n\nExplain how the examination works: the tube, the barium, the air, and the table movement.\n\nExplain what they will feel: the fullness, the cramping, and the urge to open the bowels, and say that this is expected.\n\nAddress the loss of control worry directly, before they have to raise it, and explain how common it is.\n\nExplain the practical measures: the balloon, the incontinence sheet, the gown, and that this happens in every list.\n\nExplain who will be in the room and what each person is doing.\n\nExplain how they will be covered and how their dignity will be protected throughout.\n\nExplain the aftermath: white stools, the need for fluids and a laxative, and how long the barium takes to clear.\n\nAgree a signal for stopping, confirm consent, and check they are ready to proceed."
    },
    "guidanceNote": "Address dignity proactively, the patient may not voice the embarrassment, and normalise the cramping and urge sensations so they are not alarmed when they occur."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-gaining-cooperation-for-a-chest-x-ray-breath-hold",
    "title": "Radiography — Gaining cooperation for a chest X-ray breath-hold",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General X-ray room, the patient standing at the erect bucky, breathless after walking from the waiting area.",
      "candidateRole": "You are the radiographer performing a chest X-ray and needing an adequate inspiratory breath-hold.",
      "patientRole": "A 66-year-old with COPD who is short of breath, has not followed the breathing instruction on two attempts, and is becoming embarrassed.",
      "patientConcern": "The patient worries that taking a deep breath will trigger a coughing fit or worsen the breathlessness, so is holding back deliberately.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Stop, let them recover their breath, and offer a chair before trying again.\n\nAsk what happens when they take a deep breath and what they are worried about.\n\nAcknowledge that the breathlessness is real and that the instruction is not easy for them.\n\nExplain why the breath-hold matters: what a poorly inflated chest image hides and why it may need repeating.\n\nExplain that fewer good attempts means less radiation than several poor ones.\n\nDemonstrate the instruction yourself rather than only saying it.\n\nBreak the instruction into steps and rehearse it once without an exposure.\n\nAgree exactly how you will time it, including the words you will use and the count.\n\nOffer a seated or alternative projection if standing is the limiting factor.\n\nReassure them that a cough is not a disaster and that you will simply wait and repeat.\n\nExplain what will happen if the image is still inadequate, so a repeat is not experienced as failure.\n\nTake the image, tell them how it went, and thank them rather than moving straight on."
    },
    "guidanceNote": "Demonstrate the breath-hold yourself and keep instructions short and well-timed; reassure the breathless patient that the hold lasts only a couple of seconds."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-immobilising-a-frightened-young-child-for-a-forearm-x-ray",
    "title": "Radiography — Immobilising a frightened young child for a forearm X-ray",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Paediatric X-ray room, the child crying and clinging to the parent, the arm supported in a sling.",
      "candidateRole": "You are the radiographer needing anteroposterior and lateral images of a possibly fractured forearm in a four-year-old.",
      "patientRole": "The parent of a frightened four-year-old, reluctant to let you position or hold the arm, and visibly upset at the child's distress.",
      "patientConcern": "The parent worries that holding the child still will be traumatic and that the equipment and lead apron will frighten the child further.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Speak to the child first, at their level, before addressing the parent about the procedure.\n\nAsk the parent how the injury happened and what has upset the child most so far.\n\nAcknowledge that the crying is hard to watch and that the parent's instinct to protect is right.\n\nExplain why two views are needed and what a movement-blurred image would mean: repeating everything.\n\nExplain that gentle immobilisation is quicker and less distressing than several attempts.\n\nShow the parent the immobilisation aids and the lead apron before using them, so nothing appears without warning.\n\nExplain exactly where the parent may stand, what they may hold, and why the apron is for their protection.\n\nAsk about pregnancy before inviting the parent to assist, discreetly.\n\nAgree distraction techniques: a phone, a toy, counting, or a favourite song during the exposure.\n\nExplain what the child will hear and see, in words a four-year-old will accept.\n\nExplain what happens after the images and how long the results will take, so the parent knows what to expect.\n\nAgree the plan with the parent, take the images quickly, and praise the child afterwards."
    },
    "guidanceNote": "Make the parent your ally by giving them a clear comforting role; emphasise that a still child means one quick exposure rather than repeated attempts."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-keeping-still-during-an-image-guided-breast-biopsy",
    "title": "Radiography — Keeping still during an image-guided breast biopsy",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Interventional imaging room, the patient on the couch, before an ultrasound-guided core biopsy.",
      "candidateRole": "You are the radiographer assisting with the biopsy and preparing the patient for the procedure.",
      "patientRole": "A 44-year-old recalled from routine screening after an abnormal mammogram, attending alone today, frightened of the needle and shaking slightly on the couch.",
      "patientConcern": "The patient is mainly terrified that the biopsy is being done because the team already believes she has cancer.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what she has been told so far and what she understands about why the biopsy is being done.\n\nAsk what is worrying her most, and let the cancer question be asked rather than assumed.\n\nAnswer that question honestly: explain what a recall and a biopsy do and do not mean at this stage.\n\nExplain the sequence: the ultrasound, the cleaning, the local anaesthetic, and then the needle.\n\nExplain what the local anaesthetic feels like and how long it takes to work.\n\nWarn her about the loud click of the biopsy device before it happens, and explain what the noise is.\n\nExplain how many samples are usually taken and why more than one is needed.\n\nExplain why staying still matters for accuracy, and what would happen if the sample missed.\n\nExplain the marker clip, if one is used, and why it is placed.\n\nExplain the aftercare: pressure, bruising, when to remove the dressing, and what would be abnormal.\n\nConfirm who will give the results and when, gain her consent, and agree a signal to pause."
    },
    "guidanceNote": "Separate the procedure explanation from the diagnostic uncertainty; warn her about the sharp click of the biopsy gun in advance so the noise does not make her flinch at a critical moment."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-mri-claustrophobia-and-cooperation",
    "title": "Radiography — MRI claustrophobia and cooperation",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "MRI suite in a hospital imaging department, immediately before a scheduled lumbar spine scan.",
      "candidateRole": "You are the radiographer about to perform an MRI of the lumbar spine on a patient who has become visibly anxious in the waiting area.",
      "patientRole": "A 44-year-old who has never had an MRI, has been in the waiting room for forty minutes, and asked the receptionist how wide the scanner is.",
      "patientConcern": "The patient is terrified of panicking and being trapped, and is too embarrassed to say so unless gently invited.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how they are feeling about the scan, and give an opening for an answer they may find embarrassing.\n\nAsk whether anything similar has been difficult before, such as lifts or crowded places.\n\nAcknowledge the fear without dismissing it, and say that it is one of the commonest reasons scans are abandoned.\n\nExplain what the scan involves in plain terms: the tunnel, how far in they go, the noise, the stillness and the duration.\n\nBe honest that the space is enclosed rather than promising it is open.\n\nExplain the safety points: no radiation, and that you are watching and listening throughout.\n\nOffer the concrete coping options: the call buzzer, headphones and music, a mirror, feet-first positioning where possible.\n\nOffer a support person in the room and a planned break partway through.\n\nLet them hold the buzzer and test it, and lie on the table before committing to the scan.\n\nExplain what happens if they need to stop, and that stopping is a normal outcome rather than a failure.\n\nGain their willingness to proceed, and agree exactly what you will do if they signal."
    },
    "guidanceNote": "Don't over-reassure or rush to the buzzer. Name the fear out loud first — 'a lot of people feel closed in' — then offer the practical controls. Being honest that it IS a snug tunnel builds more trust than pretending it's roomy."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-managing-pain-and-compression-during-mammography",
    "title": "Radiography — Managing pain and compression during mammography",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Mammography unit, in the screening room, the patient gowned and standing at the machine.",
      "candidateRole": "You are the radiographer performing a routine screening mammogram and you need four standard views of adequate quality.",
      "patientRole": "A 56-year-old who found the previous mammogram three years ago very painful, hesitated about attending, and is now reluctant to step forward.",
      "patientConcern": "The patient fears the compression will be as painful as last time and is privately considering leaving before the second view.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the previous experience and what made it painful.\n\nAsk whether there is any breast tenderness today and where in her cycle she is, if relevant.\n\nAcknowledge that compression can genuinely hurt and do not tell her it will be fine.\n\nExplain why compression is necessary: image quality, spreading the tissue, and a lower radiation dose.\n\nExplain what would happen without adequate compression, including a repeat visit.\n\nExplain how you will work with her: warning before each compression, applying it gradually, and stopping at her word.\n\nAgree a signal for pausing, and make clear you will honour it.\n\nExplain how many views are needed and how long each compression actually lasts.\n\nExplain the positioning for each view before you move her, so nothing is a surprise.\n\nOffer practical measures: analgesia at the next appointment, timing in the cycle, and a slower pace today.\n\nExplain how and when the result will reach her, so the appointment ends with something certain.\n\nGain cooperation for all the required views, and check afterwards how it compared with last time."
    },
    "guidanceNote": "Give the patient a sense of control, for example agreeing a signal to pause, and explain that good compression actually lowers the radiation dose and reduces the need to repeat views."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-patient-who-did-not-fast-before-an-abdominal-ultrasound",
    "title": "Radiography — Patient who did not fast before an abdominal ultrasound",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Ultrasound department, in the scanning room, the patient already on the couch.",
      "candidateRole": "You are the radiographer about to perform an abdominal ultrasound, having discovered the patient ate breakfast two hours ago.",
      "patientRole": "A 52-year-old who took unpaid leave to attend, drove an hour, and did not read the fasting instruction on the appointment letter.",
      "patientConcern": "The patient took time off work with difficulty and fears that rescheduling means more lost pay and a longer wait for answers.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask exactly what was eaten and drunk and at what time, since it determines what is still possible.\n\nAsk what the scan has been requested for, since fasting matters for some questions and not for others.\n\nAcknowledge the frustration and the effort of getting here, before explaining the problem.\n\nExplain why fasting matters: the gallbladder contracts after a meal and bowel gas obscures the view.\n\nExplain plainly what could and could not be assessed reliably today.\n\nOffer the options honestly: a limited scan now with a note of the limitation, or rebooking for the full study.\n\nExplain the consequence of each option, including the possibility of having to return anyway.\n\nAsk what would suit them practically, including how soon a fasted appointment could be offered.\n\nCheck whether a later slot on the same day would be possible, since a few more hours may suffice.\n\nExplain, if you proceed, what you are able to see and what will be documented as not assessed.\n\nAgree the plan, arrange any rebooking before they leave, and make sure the referrer is informed."
    },
    "guidanceNote": "Lead with empathy for the wasted journey before explaining the clinical limitation; offer a concrete next step rather than simply turning the patient away."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-pregnancy-check-before-a-lumbar-spine-x-ray",
    "title": "Radiography — Pregnancy check before a lumbar spine X-ray",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General X-ray room, the door closed, before a lumbar spine examination.",
      "candidateRole": "You are the radiographer required to confirm pregnancy status before X-raying the lumbar spine of a patient of childbearing age.",
      "patientRole": "A 29-year-old attending with several months of back pain, who becomes defensive when asked, says she is sure she is not pregnant, and glances towards the door.",
      "patientConcern": "She could be in the very early stages of a pregnancy she has told nobody about and does not want to disclose it where she might be overheard.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ensure privacy before asking, and say explicitly that the conversation is confidential.\n\nExplain that you ask this of everyone in this age group before this examination, so it is not a personal judgement.\n\nAsk the date of the last menstrual period rather than only asking whether she could be pregnant.\n\nExplain why it matters specifically for this examination, since the beam includes the pelvis.\n\nDescribe the radiation risk to an early pregnancy honestly and proportionately, without exaggeration.\n\nGive her the opportunity to change the answer without embarrassment, and make that easy.\n\nExplain the options available: proceeding, rescheduling to the first ten days of the cycle, or arranging a pregnancy test.\n\nExplain what a delay would mean clinically, so the choice is informed rather than made in a vacuum.\n\nExplain what protection can and cannot be provided if the examination proceeds.\n\nExplain that the answer will be recorded and who has access to it.\n\nExplain what the examination itself will involve, so the delay is the only thing being decided.\n\nAgree the way forward, confirm her decision, and document the discussion."
    },
    "guidanceNote": "Frame the pregnancy question as routine safety for everyone, offer privacy, and explain the '10-day rule' style reasoning without pressuring the patient to disclose details she is not ready to share."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-preparing-a-nervous-patient-for-a-barium-swallow",
    "title": "Radiography — Preparing a nervous patient for a barium swallow",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Fluoroscopy suite, the patient standing at the table, cup of barium prepared.",
      "candidateRole": "You are the radiographer setting up a barium swallow examination for a patient investigated for dysphagia.",
      "patientRole": "A 60-year-old who has been coughing on liquids for three months, has lost weight, and is looking at the cup with obvious apprehension.",
      "patientConcern": "The patient is afraid the thick liquid will make them choke, given the swallowing problem that brought them here.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the swallowing difficulty: what is hardest, liquids or solids, and whether they cough on either.\n\nAsk what they have been told about the examination.\n\nAsk what worries them most, and let the fear of choking be named.\n\nAcknowledge that the fear is reasonable given why they are here.\n\nExplain how the examination works: small amounts at a time, in stages, with moving images taken as they swallow.\n\nExplain that you are watching the swallow as it happens and can stop immediately.\n\nDescribe the taste and texture honestly, as chalky and thick, rather than pretending it is pleasant.\n\nExplain the different consistencies used and why you may start with the thinnest.\n\nAgree a signal for stopping and explain how you will position them for each swallow.\n\nExplain the aftermath: white stools for a day or two, and the need for extra fluids to avoid constipation.\n\nExplain who will report the images and when the result will reach the referring doctor.\n\nGain cooperation for the sequence of swallows, and check they are comfortable to begin."
    },
    "guidanceNote": "Acknowledge the choking fear directly and explain you control the pace and can stop between sips; honesty about the chalky taste builds trust better than overselling it."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-preparing-a-patient-for-a-dexa-bone-density-scan",
    "title": "Radiography — Preparing a patient for a DEXA bone density scan",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Bone densitometry room, the patient seated beside the scanner.",
      "candidateRole": "You are the radiographer about to perform a DEXA bone density scan of the spine and hip.",
      "patientRole": "A 58-year-old referred after a wrist fracture, who has read about radiation risk, is unsure why the scan was requested, and is considering declining.",
      "patientConcern": "The patient believes any scan involving radiation must carry a serious risk and is close to walking out of the appointment.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they understand about why the scan has been requested.\n\nAsk what they have read about the radiation and what specifically worries them.\n\nExplain what a DEXA scan measures and what the result will be used for.\n\nExplain the radiation dose in terms they can weigh, comparing it with everyday background exposure.\n\nBe honest that it uses X-rays rather than claiming there is none, and explain why the dose is so low.\n\nExplain what an untreated low bone density would mean, given the fracture they have already had.\n\nExplain what happens during the scan: lying still, the arm passing over, and no enclosed space.\n\nExplain how long it takes and that nothing touches them.\n\nAsk about pregnancy and about recent barium or nuclear medicine studies, which would affect the scan.\n\nExplain who will give the result and roughly when.\n\nExplain what the scan will not tell them, so the result is not expected to answer more than it can.\n\nExplain what treatment options would follow a low result, so the scan has a purpose beyond a number.\n\nGain cooperation to proceed, and make clear that declining remains their decision."
    },
    "guidanceNote": "Put the very low DEXA dose in everyday terms the patient can relate to; keep the explanation simple and focus on how the result helps protect their bone health."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-radiation-dose-concern-for-paediatric-ct",
    "title": "Radiography — Radiation dose concern for paediatric CT",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "CT department, the child on the trolley from the emergency department, the parent standing beside it.",
      "candidateRole": "You are the radiographer preparing to perform a non-contrast head CT on a six-year-old following a fall from playground equipment.",
      "patientRole": "The parent of the child, who has read online that CT scans cause cancer, and is asking whether the scan can be avoided or delayed.",
      "patientConcern": "The parent fears they are consenting to something that could give their child cancer later, and wants to know whether it is truly necessary.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the emergency department team has explained about why the scan was requested.\n\nAsk what they have read and what specifically concerns them.\n\nExplain why the scan has been requested: the injury it is looking for and why it cannot be seen any other way.\n\nExplain that the decision was made because the clinical benefit outweighs the risk in this particular case.\n\nBe honest that CT uses X-rays and that the dose is higher than a plain film, without minimising it.\n\nExplain the measures that reduce the dose: child-sized settings, scanning only the head, and a single acquisition.\n\nAddress the cancer question proportionately, giving a sense of the size of the risk rather than dismissing it.\n\nExplain what the risk of missing a significant head injury would be, so both sides of the decision are visible.\n\nExplain practically what will happen: how quick it is, staying still, and any immobilisation.\n\nExplain whether the parent may stay in the room, and what protection they would be given.\n\nAnswer any remaining questions, gain consent to proceed, and offer to fetch the referring doctor if they wish."
    },
    "guidanceNote": "Resist saying 'it's completely safe' — that's dishonest and parents see through it. Put the small risk next to the real risk of a missed bleed, explain dose-reduction and ALARA in plain words, and confirm a doctor judged it necessary. Validate the worry rather than correcting the internet."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-reassuring-a-distressed-elderly-patient-before-a-hip-x-ray",
    "title": "Radiography — Reassuring a distressed elderly patient before a hip X-ray",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Emergency department X-ray room, the patient on a trolley, having fallen at home four hours ago.",
      "candidateRole": "You are the radiographer needing anteroposterior and lateral views of a possibly fractured hip.",
      "patientRole": "An 84-year-old in pain, confused about where she is and why, calling for her daughter, and resisting attempts to move her onto the table.",
      "patientConcern": "The patient is frightened of being moved because every previous position change has caused severe pain, and does not understand why an X-ray is needed.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Introduce yourself again, at eye level, and use her name each time you speak.\n\nAsk where the pain is and how bad it is now, before touching her.\n\nCheck when analgesia was last given and whether it is working before attempting to move her.\n\nExplain simply and in short sentences what you need to do and why the doctors need the pictures.\n\nAcknowledge that moving hurts and do not promise that it will not.\n\nExplain exactly what will happen, one movement at a time, and warn her before each one.\n\nAsk for help so that the movement is done by enough people, and use the trolley rather than transferring if possible.\n\nExplain the alternative projections that avoid rotating the leg, and use them if the pain is severe.\n\nAgree a signal for stopping and honour it the first time she uses it.\n\nTell her where her daughter is and when she will see her, since that is what she is asking for.\n\nTake the views quickly, tell her it is finished, and make her comfortable before leaving."
    },
    "guidanceNote": "Use short, clear sentences and check understanding often; coordinate movements so they are slow and predictable, and acknowledge the pain rather than dismissing it."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "RADIOGRAPHY",
    "slug": "spk-radiography-reassuring-a-patient-anxious-in-the-ct-scanner-bore",
    "title": "Radiography — Reassuring a patient anxious in the CT scanner bore",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "CT imaging department, the patient on the table with the head positioned in the head holder.",
      "candidateRole": "You are the radiographer preparing a patient for a head and neck CT who has become uneasy once positioned.",
      "patientRole": "A 38-year-old who has just had their head strapped into the holder, has asked to sit up once already, and is breathing quickly.",
      "patientConcern": "The patient is worried they will panic, be unable to stay still, and ruin the scan so that it has to be repeated.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Stop and let them sit up if they need to, before trying to talk them through it.\n\nAsk what is worrying them and what happened when they asked to sit up.\n\nAcknowledge the anxiety and say that it is common with the head holder specifically.\n\nExplain how short a CT scan is, in seconds rather than minutes, and how it differs from an MRI.\n\nExplain that the bore is open at both ends and that they are not enclosed.\n\nExplain what the head holder is for and loosen it if that is possible without losing the position.\n\nExplain the intercom, show them the camera, and confirm that you can see and hear them throughout.\n\nExplain the breath-hold instruction and rehearse it once before the scan.\n\nAddress the fear of ruining the scan: explain that movement means a repeat, not a disaster, and that most people manage.\n\nOffer practical measures: eyes closed, a cloth over the eyes, or a hand on the abdomen for a companion.\n\nGain their agreement to proceed, and confirm the signal for stopping."
    },
    "guidanceNote": "Distinguish CT clearly from MRI, the short scan time and open ring are genuine reassurances; offer the call button and a clear time estimate so the patient feels in control."
  }
];
