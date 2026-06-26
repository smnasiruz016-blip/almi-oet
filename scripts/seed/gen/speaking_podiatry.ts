import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Teaching diabetic foot self-care to a newly diagnosed patient",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A community podiatry clinic",
      candidateRole: "You are the podiatrist seeing a patient diagnosed with type 2 diabetes three weeks ago.",
      patientRole: "The patient is in their early 50s and has been told by their GP to 'look after their feet' but has no idea what that means in practice.",
      candidateCard: "Explain the daily foot-checking routine (inspecting soles, between toes, using a mirror or asking for help), the importance of well-fitting footwear, and why even small cuts need attention. Confirm the patient understands and arrange a follow-up review.",
      patientConcern: "The patient secretly feels overwhelmed by the new diagnosis and worries that 'losing a foot' is inevitable, having seen a relative undergo amputation.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Keep the routine concrete and step-by-step; check understanding rather than listing facts, and address the unspoken fear of amputation honestly without false reassurance."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Reassuring a patient anxious about ingrown toenail surgery",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A podiatry clinic treatment room",
      candidateRole: "You are the podiatrist recommending a partial nail avulsion with phenolisation for a recurrent ingrown toenail.",
      patientRole: "The patient is in their 20s, has had three painful infections this year, and is frightened of the local anaesthetic injection and the idea of a 'minor operation'.",
      candidateCard: "Explain what the procedure involves, why it is preferable to repeated conservative treatment, what the injection and healing will feel like, and the aftercare expected. Address the patient's fear and gain informed consent or agreement to consider it.",
      patientConcern: "The patient is far more frightened of the needle than of the surgery itself and may agree to anything just to avoid discussing the injection.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Name the needle fear directly and normalise it; do not let the patient consent purely to escape the conversation — ensure their agreement is genuinely informed."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Persuading a patient reluctant to change unsuitable footwear",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "An outpatient podiatry clinic",
      candidateRole: "You are the podiatrist seeing a patient whose forefoot pain and callus are clearly linked to narrow, high-heeled work shoes.",
      patientRole: "The patient is in their 40s, works in a customer-facing role, and feels the recommended supportive footwear is unattractive and unprofessional.",
      candidateCard: "Explain how the current footwear is contributing to the symptoms, suggest practical compromises (heel height, toe-box width, changing for the commute), and negotiate a realistic plan the patient will actually follow.",
      patientConcern: "The patient believes their appearance at work matters more than the foot pain and expects you to simply 'fix' the callus without changing anything they wear.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Avoid an all-or-nothing demand; negotiate compromises and acknowledge the patient's professional concerns rather than dismissing them as vanity."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Discussing verruca treatment options with an undecided patient",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A high-street podiatry practice",
      candidateRole: "You are the podiatrist consulting a patient with a single plantar verruca that has been present for four months.",
      patientRole: "The patient is in their 30s and has read online about cryotherapy, acids, needling and 'just leaving it alone', and cannot decide what to do.",
      candidateCard: "Outline the realistic options including watchful waiting, explain that many verrucae resolve on their own, set honest expectations about success rates and discomfort, and help the patient reach a decision that suits them.",
      patientConcern: "The patient actually wants a guaranteed quick cure and may be disappointed to hear that no treatment is reliably fast or painless.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Be honest that no option is guaranteed or instant; support shared decision-making instead of pushing one treatment, and manage the expectation of a quick fix."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Setting realistic expectations for fungal nail treatment",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A podiatry clinic",
      candidateRole: "You are the podiatrist seeing a patient with onychomycosis affecting two toenails, confirmed on a previous sample.",
      patientRole: "The patient is in their 50s and expects the nails to look normal again within a few weeks of starting treatment.",
      candidateCard: "Explain how the antifungal treatment works, that a healthy nail grows slowly so visible improvement takes many months, the importance of adherence and hygiene measures, and the risk of recurrence. Ensure the patient understands the timescale.",
      patientConcern: "The patient is planning a beach holiday in two months and is really asking whether the nails will look presentable by then, which they will not.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Lead with the slow-growth timescale so the patient is not misled; gently surface the holiday expectation and offer practical cosmetic coping options rather than an unrealistic promise."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Advising a recreational runner with an Achilles overuse injury",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A sports podiatry clinic",
      candidateRole: "You are the podiatrist assessing a patient with mid-portion Achilles tendinopathy after a sudden increase in training.",
      patientRole: "The patient is in their late 30s, training for a marathon in eight weeks, and does not want to stop running under any circumstances.",
      candidateCard: "Explain the likely cause, the role of load management and eccentric loading exercises, and why continuing to train at the current volume risks a worse injury. Negotiate a modified plan and discuss whether the marathon goal is realistic.",
      patientConcern: "The patient has raised significant money for charity tied to finishing this specific marathon and fears letting sponsors down more than the injury itself.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Draw out why the patient won't rest before judging them as non-compliant; the charity commitment is central — work with the deadline through load modification rather than a blanket 'stop running'."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Reassuring a parent worried about a child's flat feet",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A paediatric podiatry clinic",
      candidateRole: "You are the podiatrist assessing a 5-year-old with flexible flat feet who has no pain and walks and plays normally.",
      patientRole: "The patient is the child's parent, who is convinced the flat feet are abnormal and is requesting orthotics and possibly a referral.",
      candidateCard: "Explain that flexible flat feet are normal at this age and usually resolve as the arch develops, reassure the parent, describe the signs that would warrant review, and explain why routine orthotics are not needed for a pain-free child.",
      patientConcern: "The parent was themselves told as a child that flat feet would cause lifelong problems and is anxious about passing on the same fate.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Reassurance must be genuine and evidence-based, not dismissive; uncover the parent's own history and give clear 'come back if' safety-netting so they leave feeling heard."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Encouraging a walking programme for intermittent claudication",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A vascular-linked podiatry clinic",
      candidateRole: "You are the podiatrist seeing a patient with peripheral arterial disease who experiences calf pain on walking that eases with rest.",
      patientRole: "The patient is in their late 60s, a long-term smoker, and avoids walking because the pain frightens them into thinking they are causing damage.",
      candidateCard: "Explain why supervised walking to the point of moderate discomfort actually helps build circulation, address the fear that pain means harm, raise smoking cessation sensitively, and agree a gradual walking plan with clear warning signs to report.",
      patientConcern: "The patient believes any walking that brings on the pain is dangerous and may resist exercise unless this misconception is gently corrected.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Correct the 'pain equals damage' belief carefully and distinguish claudication pain from warning signs; raise smoking once and respectfully, without lecturing."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Explaining wound care after debridement of a neuropathic ulcer",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A high-risk foot clinic",
      candidateRole: "You are the podiatrist who has just debrided a neuropathic plantar ulcer and is fitting offloading.",
      patientRole: "The patient is in their 60s with diabetic neuropathy, feels no pain in the foot, and therefore underestimates how serious the ulcer is.",
      candidateCard: "Explain the dressing and offloading regime, why strict adherence to reduced weight-bearing matters even though it does not hurt, the signs of infection to watch for, and when to seek urgent help. Confirm the patient can follow the plan.",
      patientConcern: "Because the foot is painless, the patient intends to carry on with their usual activities and walking, not realising this could lead to the ulcer worsening or amputation.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "The absence of pain is the key danger — make 'no pain does not mean no harm' the centre of the consultation, and give specific, unambiguous offloading and red-flag instructions."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Managing a patient who repeatedly skips self-care appointments",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A community podiatry clinic",
      candidateRole: "You are the podiatrist reviewing a patient with thickened, painful nails who has missed the last two routine appointments.",
      patientRole: "The patient is in their 70s, lives alone, and finds it increasingly hard to reach the clinic by public transport.",
      candidateCard: "Explore sensitively why the appointments were missed, explain why regular care matters for this patient's feet, and work out practical solutions such as transport options, appointment timing or alternative services. Agree a workable plan.",
      patientConcern: "The patient is embarrassed about struggling with transport and mobility and may say the missed visits 'didn't matter' rather than admit they could not get there.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Treat missed appointments as a problem to solve, not a behaviour to scold; gently uncover the transport and mobility barriers the patient is too proud to volunteer."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Counselling a patient with chronic plantar heel pain on a long recovery",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A musculoskeletal podiatry clinic",
      candidateRole: "You are the podiatrist managing a patient with plantar fasciopathy whose first-step morning heel pain has lasted several months.",
      patientRole: "The patient is in their 40s, works on their feet all day, and is frustrated that stretches and insoles recommended elsewhere have not produced a quick cure.",
      candidateCard: "Explain why this condition typically takes months to settle, reinforce the value of consistent stretching, load management and footwear, and discuss what to do if it does not improve. Keep the patient motivated to continue.",
      patientConcern: "The patient is losing faith in treatment altogether and is on the verge of giving up and just living with the pain.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Validate the frustration and explain the slow natural course honestly; the goal is to rebuild motivation and adherence, not to oversell another quick fix."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Advising on corn self-treatment risks for a patient using blades and acids",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A podiatry clinic",
      candidateRole: "You are the podiatrist seeing a patient who has been cutting their own corns with a razor blade and using over-the-counter acid corn plasters.",
      patientRole: "The patient is in their 60s with early circulatory problems and is proud of managing their own feet without professional help.",
      candidateCard: "Explain why self-cutting and medicated corn plasters carry a real risk of injury and infection for this patient, suggest safer alternatives and professional reduction, and address the cause of the corn through footwear and padding. Agree a safer approach.",
      patientConcern: "The patient values their independence highly and may hear your advice as you telling them they can no longer look after themselves.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Frame safer care as supporting independence, not removing it; be specific about why the blades and acids are risky for this particular patient rather than issuing a blanket prohibition."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PODIATRY",
    title: "Podiatry — Preparing a patient for custom orthoses and a realistic break-in period",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A biomechanics podiatry clinic",
      candidateRole: "You are the podiatrist dispensing custom foot orthoses for a patient with overpronation-related knee and foot pain.",
      patientRole: "The patient is in their 30s and expects the new orthoses to feel comfortable and fix their pain immediately on the first day.",
      candidateCard: "Explain the gradual wearing-in schedule, that some initial awkwardness or new aches are normal, which footwear the devices suit, and when to return for adjustment. Set realistic expectations and confirm the patient knows what is and is not normal.",
      patientConcern: "The patient paid a significant amount for the devices and will worry they were a waste of money if the first few days feel uncomfortable.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Pre-empt the 'they don't work / waste of money' reaction by clearly separating normal break-in discomfort from genuine problems, and make the return-for-adjustment offer explicit."
  }
];
