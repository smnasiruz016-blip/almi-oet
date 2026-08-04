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
    "profession": "PODIATRY",
    "title": "Podiatry — Advising a recreational runner with an Achilles overuse injury",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A sports podiatry clinic",
      "patientRole": "The patient is in their late 30s, training for a marathon in eight weeks, and does not want to stop running under any circumstances.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain the likely cause, the role of load management and eccentric loading exercises, and why continuing to train at the current volume risks a worse injury. Negotiate a modified plan and discuss whether the marathon goal is realistic.",
      "candidateRole": "You are the podiatrist assessing a patient with mid-portion Achilles tendinopathy after a sudden increase in training.",
      "patientConcern": "The patient has raised significant money for charity tied to finishing this specific marathon and fears letting sponsors down more than the injury itself."
    },
    "guidanceNote": "Draw out why the patient won't rest before judging them as non-compliant; the charity commitment is central — work with the deadline through load modification rather than a blanket 'stop running'."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Advising an anxious patient at risk of foot ulceration",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community podiatry clinic.",
      "patientRole": "The patient is a 58-year-old with type 2 diabetes who feels their feet are 'fine' because they have no pain, and is reluctant to change daily habits.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain in plain terms why a lack of pain does not mean the feet are safe; agree a simple, realistic daily checking and moisturising routine; advise on appropriate footwear and when to seek urgent help. Check understanding throughout.",
      "candidateRole": "You are the podiatrist. A patient with diabetes and reduced foot sensation has attended for a routine review. You have found loss of protective sensation and dry, cracked skin, placing them at increased risk of ulceration.",
      "patientConcern": "The patient secretly fears that 'foot problems' lead to amputation like a relative experienced, so dismisses the risk to avoid thinking about it; they need reassurance that early action prevents this."
    },
    "guidanceNote": "Don't lecture — draw out why the patient thinks their feet are fine, then connect prevention to their hidden fear. Avoid the word 'amputation' unless the patient raises it."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Advising on corn self-treatment risks for a patient using blades and acids",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A podiatry clinic",
      "patientRole": "The patient is in their 60s with early circulatory problems and is proud of managing their own feet without professional help.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain why self-cutting and medicated corn plasters carry a real risk of injury and infection for this patient, suggest safer alternatives and professional reduction, and address the cause of the corn through footwear and padding. Agree a safer approach.",
      "candidateRole": "You are the podiatrist seeing a patient who has been cutting their own corns with a razor blade and using over-the-counter acid corn plasters.",
      "patientConcern": "The patient values their independence highly and may hear your advice as you telling them they can no longer look after themselves."
    },
    "guidanceNote": "Frame safer care as supporting independence, not removing it; be specific about why the blades and acids are risky for this particular patient rather than issuing a blanket prohibition."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Counselling a patient with chronic plantar heel pain on a long recovery",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A musculoskeletal podiatry clinic",
      "patientRole": "The patient is in their 40s, works on their feet all day, and is frustrated that stretches and insoles recommended elsewhere have not produced a quick cure.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain why this condition typically takes months to settle, reinforce the value of consistent stretching, load management and footwear, and discuss what to do if it does not improve. Keep the patient motivated to continue.",
      "candidateRole": "You are the podiatrist managing a patient with plantar fasciopathy whose first-step morning heel pain has lasted several months.",
      "patientConcern": "The patient is losing faith in treatment altogether and is on the verge of giving up and just living with the pain."
    },
    "guidanceNote": "Validate the frustration and explain the slow natural course honestly; the goal is to rebuild motivation and adherence, not to oversell another quick fix."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Discussing verruca treatment options with an undecided patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A high-street podiatry practice",
      "patientRole": "The patient is in their 30s and has read online about cryotherapy, acids, needling and 'just leaving it alone', and cannot decide what to do.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Outline the realistic options including watchful waiting, explain that many verrucae resolve on their own, set honest expectations about success rates and discomfort, and help the patient reach a decision that suits them.",
      "candidateRole": "You are the podiatrist consulting a patient with a single plantar verruca that has been present for four months.",
      "patientConcern": "The patient actually wants a guaranteed quick cure and may be disappointed to hear that no treatment is reliably fast or painless."
    },
    "guidanceNote": "Be honest that no option is guaranteed or instant; support shared decision-making instead of pushing one treatment, and manage the expectation of a quick fix."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Encouraging a walking programme for intermittent claudication",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A vascular-linked podiatry clinic",
      "patientRole": "The patient is in their late 60s, a long-term smoker, and avoids walking because the pain frightens them into thinking they are causing damage.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain why supervised walking to the point of moderate discomfort actually helps build circulation, address the fear that pain means harm, raise smoking cessation sensitively, and agree a gradual walking plan with clear warning signs to report.",
      "candidateRole": "You are the podiatrist seeing a patient with peripheral arterial disease who experiences calf pain on walking that eases with rest.",
      "patientConcern": "The patient believes any walking that brings on the pain is dangerous and may resist exercise unless this misconception is gently corrected."
    },
    "guidanceNote": "Correct the 'pain equals damage' belief carefully and distinguish claudication pain from warning signs; raise smoking once and respectfully, without lecturing."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Explaining orthotics for biomechanical heel pain",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Private musculoskeletal podiatry clinic.",
      "patientRole": "The patient is a 41-year-old recreational runner with several months of sharp morning heel pain who wants a quick fix and is sceptical about the cost and need for orthotics.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain the likely cause of the heel pain and how orthoses, stretching and load management work together; set realistic expectations about the timeframe for improvement; address the patient's doubts about cost and whether the inserts are truly necessary.",
      "candidateRole": "You are the podiatrist. Following a biomechanical assessment you have diagnosed plantar heel pain (plantar fasciitis) linked to overpronation, and you are recommending custom orthoses alongside stretching and activity modification.",
      "patientConcern": "The patient is worried orthotics are an expensive, permanent crutch that will weaken their feet and stop them running, and wants to know if it is just a way of selling a product."
    },
    "guidanceNote": "Acknowledge the cost and 'do I really need this' scepticism openly rather than glossing over it; frame orthoses as one temporary part of a plan, not a lifelong dependency, and tie advice back to returning to running."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Explaining wound care after debridement of a neuropathic ulcer",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A high-risk foot clinic",
      "patientRole": "The patient is in their 60s with diabetic neuropathy, feels no pain in the foot, and therefore underestimates how serious the ulcer is.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain the dressing and offloading regime, why strict adherence to reduced weight-bearing matters even though it does not hurt, the signs of infection to watch for, and when to seek urgent help. Confirm the patient can follow the plan.",
      "candidateRole": "You are the podiatrist who has just debrided a neuropathic plantar ulcer and is fitting offloading.",
      "patientConcern": "Because the foot is painless, the patient intends to carry on with their usual activities and walking, not realising this could lead to the ulcer worsening or amputation."
    },
    "guidanceNote": "The absence of pain is the key danger — make 'no pain does not mean no harm' the centre of the consultation, and give specific, unambiguous offloading and red-flag instructions."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Managing a patient who repeatedly skips self-care appointments",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A community podiatry clinic",
      "patientRole": "The patient is in their 70s, lives alone, and finds it increasingly hard to reach the clinic by public transport.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explore sensitively why the appointments were missed, explain why regular care matters for this patient's feet, and work out practical solutions such as transport options, appointment timing or alternative services. Agree a workable plan.",
      "candidateRole": "You are the podiatrist reviewing a patient with thickened, painful nails who has missed the last two routine appointments.",
      "patientConcern": "The patient is embarrassed about struggling with transport and mobility and may say the missed visits 'didn't matter' rather than admit they could not get there."
    },
    "guidanceNote": "Treat missed appointments as a problem to solve, not a behaviour to scold; gently uncover the transport and mobility barriers the patient is too proud to volunteer."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Persuading a patient reluctant to change unsuitable footwear",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "An outpatient podiatry clinic",
      "patientRole": "The patient is in their 40s, works in a customer-facing role, and feels the recommended supportive footwear is unattractive and unprofessional.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain how the current footwear is contributing to the symptoms, suggest practical compromises (heel height, toe-box width, changing for the commute), and negotiate a realistic plan the patient will actually follow.",
      "candidateRole": "You are the podiatrist seeing a patient whose forefoot pain and callus are clearly linked to narrow, high-heeled work shoes.",
      "patientConcern": "The patient believes their appearance at work matters more than the foot pain and expects you to simply 'fix' the callus without changing anything they wear."
    },
    "guidanceNote": "Avoid an all-or-nothing demand; negotiate compromises and acknowledge the patient's professional concerns rather than dismissing them as vanity."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Preparing a patient for custom orthoses and a realistic break-in period",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A biomechanics podiatry clinic",
      "patientRole": "The patient is in their 30s and expects the new orthoses to feel comfortable and fix their pain immediately on the first day.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain the gradual wearing-in schedule, that some initial awkwardness or new aches are normal, which footwear the devices suit, and when to return for adjustment. Set realistic expectations and confirm the patient knows what is and is not normal.",
      "candidateRole": "You are the podiatrist dispensing custom foot orthoses for a patient with overpronation-related knee and foot pain.",
      "patientConcern": "The patient paid a significant amount for the devices and will worry they were a waste of money if the first few days feel uncomfortable."
    },
    "guidanceNote": "Pre-empt the 'they don't work / waste of money' reaction by clearly separating normal break-in discomfort from genuine problems, and make the return-for-adjustment offer explicit."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Reassuring a parent worried about a child's flat feet",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A paediatric podiatry clinic",
      "patientRole": "The patient is the child's parent, who is convinced the flat feet are abnormal and is requesting orthotics and possibly a referral.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain that flexible flat feet are normal at this age and usually resolve as the arch develops, reassure the parent, describe the signs that would warrant review, and explain why routine orthotics are not needed for a pain-free child.",
      "candidateRole": "You are the podiatrist assessing a 5-year-old with flexible flat feet who has no pain and walks and plays normally.",
      "patientConcern": "The parent was themselves told as a child that flat feet would cause lifelong problems and is anxious about passing on the same fate."
    },
    "guidanceNote": "Reassurance must be genuine and evidence-based, not dismissive; uncover the parent's own history and give clear 'come back if' safety-netting so they leave feeling heard."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Reassuring a patient anxious about ingrown toenail surgery",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A podiatry clinic treatment room",
      "patientRole": "The patient is in their 20s, has had three painful infections this year, and is frightened of the local anaesthetic injection and the idea of a 'minor operation'.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain what the procedure involves, why it is preferable to repeated conservative treatment, what the injection and healing will feel like, and the aftercare expected. Address the patient's fear and gain informed consent or agreement to consider it.",
      "candidateRole": "You are the podiatrist recommending a partial nail avulsion with phenolisation for a recurrent ingrown toenail.",
      "patientConcern": "The patient is far more frightened of the needle than of the surgery itself and may agree to anything just to avoid discussing the injection."
    },
    "guidanceNote": "Name the needle fear directly and normalise it; do not let the patient consent purely to escape the conversation — ensure their agreement is genuinely informed."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Setting realistic expectations for fungal nail treatment",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A podiatry clinic",
      "patientRole": "The patient is in their 50s and expects the nails to look normal again within a few weeks of starting treatment.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain how the antifungal treatment works, that a healthy nail grows slowly so visible improvement takes many months, the importance of adherence and hygiene measures, and the risk of recurrence. Ensure the patient understands the timescale.",
      "candidateRole": "You are the podiatrist seeing a patient with onychomycosis affecting two toenails, confirmed on a previous sample.",
      "patientConcern": "The patient is planning a beach holiday in two months and is really asking whether the nails will look presentable by then, which they will not."
    },
    "guidanceNote": "Lead with the slow-growth timescale so the patient is not misled; gently surface the holiday expectation and offer practical cosmetic coping options rather than an unrealistic promise."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "title": "Podiatry — Teaching diabetic foot self-care to a newly diagnosed patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A community podiatry clinic",
      "patientRole": "The patient is in their early 50s and has been told by their GP to 'look after their feet' but has no idea what that means in practice.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain the daily foot-checking routine (inspecting soles, between toes, using a mirror or asking for help), the importance of well-fitting footwear, and why even small cuts need attention. Confirm the patient understands and arrange a follow-up review.",
      "candidateRole": "You are the podiatrist seeing a patient diagnosed with type 2 diabetes three weeks ago.",
      "patientConcern": "The patient secretly feels overwhelmed by the new diagnosis and worries that 'losing a foot' is inevitable, having seen a relative undergo amputation."
    },
    "guidanceNote": "Keep the routine concrete and step-by-step; check understanding rather than listing facts, and address the unspoken fear of amputation honestly without false reassurance."
  }
];
