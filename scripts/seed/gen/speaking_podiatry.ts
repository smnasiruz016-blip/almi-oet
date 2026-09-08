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
    "slug": "spk-podiatry-advising-a-recreational-runner-with-an-achilles-overuse-injury",
    "title": "Podiatry — Advising a recreational runner with an Achilles overuse injury",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Sports podiatry clinic, a first assessment appointment booked by the patient.",
      "candidateRole": "You are the podiatrist. The patient has mid-portion Achilles tendinopathy following a sudden increase in training volume.",
      "patientRole": "A 38-year-old training for a marathon in eight weeks, who increased from 30 to 60 kilometres a week in a month and is still running daily through pain.",
      "patientConcern": "The patient has raised a substantial sum for charity tied to finishing this specific marathon and fears letting sponsors down more than they fear the injury.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the training history: the weekly distance before and after, and when the pain began.\n\nAsk about the pain pattern: morning stiffness, whether it eases as they run, and how it is afterwards.\n\nAsk what the marathon means to them and why this one in particular cannot be missed.\n\nExplain what tendinopathy is and why a sudden load increase causes it, using their own numbers.\n\nExplain what continuing at the current volume risks, including a partial tear and a recovery measured in months.\n\nExplain the role of load management and of eccentric or heavy slow loading, and how long it takes to work.\n\nSet out honestly what eight weeks can and cannot achieve for a tendon at this stage.\n\nDiscuss footwear, a temporary heel raise, and surface and cadence changes as adjuncts rather than solutions.\n\nNegotiate a modified plan: reduced volume, cross-training, and specific loading work.\n\nDiscuss the marathon goal honestly, including deferral, a slower finish, and what each would cost.\n\nAgree the plan and the review point, and be clear what would mean stopping running altogether."
    },
    "guidanceNote": "Draw out why the patient won't rest before judging them as non-compliant; the charity commitment is central — work with the deadline through load modification rather than a blanket 'stop running'."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-advising-an-anxious-patient-at-risk-of-foot-ulceration",
    "title": "Podiatry — Advising an anxious patient at risk of foot ulceration",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community podiatry clinic, an annual diabetic foot review appointment.",
      "candidateRole": "You are the podiatrist. The patient has type 2 diabetes with loss of protective sensation and dry, fissured heel skin, placing them at increased risk of ulceration.",
      "patientRole": "A 58-year-old with type 2 diabetes for nine years who says the feet are fine because nothing hurts, walks barefoot at home, and cuts their own nails.",
      "patientConcern": "The patient secretly fears that foot problems lead to amputation as happened to a relative, so dismisses the risk rather than think about it.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have noticed about their feet and what they currently do for them.\n\nAsk about footwear at home and outside, and about who cuts the nails.\n\nDemonstrate the monofilament test with them watching, so the loss of sensation is something they experience rather than are told.\n\nExplain in plain terms why an absence of pain does not mean the feet are safe, using what they have just seen.\n\nAsk about the relative's amputation and let the fear surface, since it is driving the avoidance.\n\nExplain honestly what leads to amputation and, more importantly, what interrupts that path.\n\nExplain what today's findings mean for their risk category and what changes it.\n\nAgree a daily routine: checking the soles with a mirror, between the toes, and moisturising while avoiding the toe webs.\n\nAdvise on footwear, on never walking barefoot, and on checking shoes before putting them on.\n\nExplain what counts as urgent: any break in the skin, redness, swelling or discharge, and who to call the same day.\n\nCheck understanding by asking them to describe the routine back, and arrange the review interval."
    },
    "guidanceNote": "Don't lecture — draw out why the patient thinks their feet are fine, then connect prevention to their hidden fear. Avoid the word 'amputation' unless the patient raises it."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-advising-on-corn-self-treatment-risks-for-a-patient-using-blades-and-acids",
    "title": "Podiatry — Advising on corn self-treatment risks for a patient using blades and acids",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Podiatry clinic, a first appointment following a GP referral about a persistent corn.",
      "candidateRole": "You are the podiatrist. The patient has been paring corns with a razor blade and applying salicylic acid corn plasters, with early peripheral arterial disease.",
      "patientRole": "A 64-year-old with weak pedal pulses and a history of smoking, proud of never having needed anyone to look after his feet, who has done this for years without trouble.",
      "patientConcern": "The patient values his independence highly and will hear the advice as being told he can no longer look after himself.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what he does, how often, and with what, and let him describe the routine in full.\n\nAsk what the corn does to him: where it hurts, when, and what shoes he wears.\n\nExamine and explain the circulation findings, including the pulses, and what they mean for healing.\n\nAcknowledge that he has managed for years, and do not open by telling him he has been reckless.\n\nExplain why blade paring carries a real risk for him specifically, in terms of a cut that would not heal.\n\nExplain what medicated corn plasters do to the surrounding skin and why they are not suitable with this circulation.\n\nExplain what a small infected wound could lead to in a foot with reduced blood supply.\n\nOffer the safer alternatives: professional reduction, a file, emollient, and how often that would be needed.\n\nAddress the cause rather than only the corn: footwear width and depth, and padding or an orthosis.\n\nFrame the plan as keeping him on his feet and independent, rather than as taking the job away from him.\n\nAgree what he will stop, what he will keep doing himself, and the review interval."
    },
    "guidanceNote": "Frame safer care as supporting independence, not removing it; be specific about why the blades and acids are risky for this particular patient rather than issuing a blanket prohibition."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-counselling-a-patient-with-chronic-plantar-heel-pain-on-a-long-recovery",
    "title": "Podiatry — Counselling a patient with chronic plantar heel pain on a long recovery",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Musculoskeletal podiatry clinic, a review appointment after several months of symptoms.",
      "candidateRole": "You are the podiatrist managing a patient with plantar fasciopathy whose first-step morning pain has persisted for seven months.",
      "patientRole": "A 46-year-old who stands on a shop floor all day, has tried stretches and off-the-shelf insoles for ten weeks with partial benefit, and is losing patience.",
      "patientConcern": "The patient is losing faith in treatment altogether and is close to giving up and simply living with the pain.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the pain behaves now: first thing, through the working day, and in the evening.\n\nAsk exactly what has been tried, how it was done, and for how long, since most stretching programmes are abandoned early.\n\nAsk what a working day involves: hours standing, the surface, and the footwear worn.\n\nAcknowledge that seven months is a long time and that the frustration is entirely reasonable.\n\nExplain what plantar fasciopathy is and why it takes months rather than weeks to settle.\n\nExplain what the partial improvement already achieved tells you, so the effort so far is not written off.\n\nExplain the three things that matter — loading, stretching and footwear — and how each contributes.\n\nSet an honest expectation of the timescale, using a range rather than a promise.\n\nDiscuss what practical changes are possible at work, including footwear, a mat and breaks.\n\nExplain what happens if it does not improve, including injection and shockwave, so there is a next step.\n\nAgree a plan with a defined review point, and agree how progress will be measured rather than guessed."
    },
    "guidanceNote": "Validate the frustration and explain the slow natural course honestly; the goal is to rebuild motivation and adherence, not to oversell another quick fix."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-discussing-verruca-treatment-options-with-an-undecided-patient",
    "title": "Podiatry — Discussing verruca treatment options with an undecided patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "High-street podiatry practice, a consultation appointment requested by the patient.",
      "candidateRole": "You are the podiatrist. The patient has a single plantar verruca present for four months, causing mild discomfort on walking.",
      "patientRole": "A 33-year-old who has read about cryotherapy, acids, needling and leaving it alone, has tried nothing so far, and cannot decide what to do.",
      "patientConcern": "The patient actually wants a guaranteed quick cure and will be disappointed to hear that no treatment is reliably fast or painless.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how long it has been there, whether it is painful, and what it stops them doing.\n\nAsk what they have read and what they were hoping for from today.\n\nExamine and confirm the diagnosis, explaining how a verruca differs from a corn and how you can tell.\n\nExplain what causes it and why the body eventually clears it.\n\nExplain the option of watchful waiting honestly, including how many resolve on their own and over what period.\n\nExplain each active option in turn: what it involves, how many sessions, how much it hurts, and the realistic success rate.\n\nBe honest that no treatment is reliably quick or painless, and say so before they choose.\n\nExplain what would change your advice, such as spread, pain that limits activity, or the patient's occupation.\n\nAdvise on preventing spread at home and at the pool, whichever option they choose.\n\nHelp them weigh the options against what matters to them: time, cost, discomfort or certainty.\n\nReach a decision together, and agree what would bring them back if it is left alone."
    },
    "guidanceNote": "Be honest that no option is guaranteed or instant; support shared decision-making instead of pushing one treatment, and manage the expectation of a quick fix."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-encouraging-a-walking-programme-for-intermittent-claudication",
    "title": "Podiatry — Encouraging a walking programme for intermittent claudication",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Vascular-linked podiatry clinic, a review appointment following an ABPI assessment.",
      "candidateRole": "You are the podiatrist. The patient has peripheral arterial disease with intermittent claudication at 200 metres and an ABPI of 0.7.",
      "patientRole": "A 68-year-old who smokes fifteen a day, has stopped walking to the shops, drives everywhere now, and stops the moment the calf pain begins.",
      "patientConcern": "The patient believes that any walking which brings on the pain is damaging the leg, and will resist exercise unless that belief is corrected.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how far they can walk before the pain starts and what happens when they stop.\n\nAsk what they have stopped doing because of it, and how life has changed over the past year.\n\nAsk what they think the pain is doing to the leg, and let the belief be stated.\n\nExplain what claudication is: the muscle asking for more blood than the narrowed artery can deliver.\n\nExplain clearly that walking into moderate discomfort does not damage the leg, and why.\n\nExplain how supervised walking improves the distance, through collateral circulation and muscle efficiency.\n\nSet out the programme concretely: walk to moderate pain, rest until it goes, repeat, for a set time most days.\n\nRaise smoking sensitively but directly, and explain its specific effect on this artery rather than in general.\n\nOffer a route to smoking cessation support rather than advice alone.\n\nExplain the warning signs that must be reported: rest pain, night pain, a wound that will not heal, or colour change.\n\nAgree a gradual walking plan with a starting distance, and arrange the review and the foot check interval."
    },
    "guidanceNote": "Correct the 'pain equals damage' belief carefully and distinguish claudication pain from warning signs; raise smoking once and respectfully, without lecturing."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-explaining-orthotics-for-biomechanical-heel-pain",
    "title": "Podiatry — Explaining orthotics for biomechanical heel pain",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Private musculoskeletal podiatry clinic, following a biomechanical assessment and gait analysis.",
      "candidateRole": "You are the podiatrist. You have diagnosed plantar heel pain related to overpronation and are recommending custom orthoses alongside stretching and load management.",
      "patientRole": "A 41-year-old recreational runner with several months of sharp morning heel pain, who wants a quick fix and is openly sceptical about the cost of custom devices.",
      "patientConcern": "The patient suspects orthoses are an expensive permanent crutch that will weaken the feet and stop them running, and wonders whether this is simply a way of selling a product.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the pain: first steps in the morning, through a run, and afterwards.\n\nAsk about training: distance, surfaces, footwear age, and any recent change.\n\nExplain what you found on the assessment, showing them the gait findings rather than describing them.\n\nExplain how the mechanics relate to the heel pain, in terms of load rather than of a fault to be fixed.\n\nAddress the scepticism about selling directly, and say what you would advise if you stocked nothing.\n\nExplain what an orthosis does and, importantly, what it does not do, including the weakening belief.\n\nExplain why the orthosis is one part of a plan alongside stretching and load management, and what each contributes.\n\nExplain the realistic timeframe for improvement, so a device is not judged after a fortnight.\n\nSet out the costs honestly, including what a prefabricated device would and would not achieve.\n\nExplain what would happen if they chose not to have orthoses, so declining is a real option.\n\nAgree a plan, with a review point at which the decision can be revisited."
    },
    "guidanceNote": "Acknowledge the cost and 'do I really need this' scepticism openly rather than glossing over it; frame orthoses as one temporary part of a plan, not a lifelong dependency, and tie advice back to returning to running."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-explaining-wound-care-after-debridement-of-a-neuropathic-ulcer",
    "title": "Podiatry — Explaining wound care after debridement of a neuropathic ulcer",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "High-risk foot clinic, immediately after sharp debridement, the offloading device being fitted.",
      "candidateRole": "You are the podiatrist. You have debrided a neuropathic plantar ulcer under the first metatarsal head and are fitting an offloading device.",
      "patientRole": "A 63-year-old with diabetic neuropathy who feels nothing in the foot, walks the dog twice a day, and intends to carry on exactly as before.",
      "patientConcern": "Because the foot is painless, the patient underestimates the ulcer entirely and does not connect walking on it with the risk of losing the foot.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they understand about the ulcer and how long they think it has been there.\n\nAsk what a normal day involves: how far they walk, on what surfaces, and what they wear indoors.\n\nShow them the wound and explain what you have removed and why.\n\nExplain plainly why an ulcer that does not hurt is more dangerous rather than less.\n\nExplain what offloading does and why it is the single most important part of the treatment.\n\nBe specific about the walking: what is allowed, what is not, and what the dog walk would need to become.\n\nExplain the dressing regime: who changes it, how often, and what to do if it comes off.\n\nExplain the signs of infection and what would warrant contact the same day rather than at the next visit.\n\nExplain what happens if the ulcer is walked on, in terms of infection, bone involvement and amputation, without threatening.\n\nAsk them to tell you the plan back, since compliance depends on understanding rather than agreement.\n\nAgree the review appointment, the contact number, and who at home will help check the foot."
    },
    "guidanceNote": "The absence of pain is the key danger — make 'no pain does not mean no harm' the centre of the consultation, and give specific, unambiguous offloading and red-flag instructions."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-managing-a-patient-who-repeatedly-skips-self-care-appointments",
    "title": "Podiatry — Managing a patient who repeatedly skips self-care appointments",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community podiatry clinic, a rebooked appointment after two consecutive non-attendances.",
      "candidateRole": "You are the podiatrist reviewing a patient with thickened, painful nails who has missed the last two routine appointments.",
      "patientRole": "A 78-year-old who lives alone, has become unsteady on the bus, cannot reach their own feet, and says the missed appointments did not matter.",
      "patientConcern": "The patient is embarrassed about struggling with transport and mobility and will minimise the problem rather than admit they could not get here.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how they have been since the last visit, and start with how they are rather than with the missed appointments.\n\nAsk how they usually get to the clinic and how that journey has been lately.\n\nAsk gently what happened on the two occasions, and leave space rather than accepting the first easy answer.\n\nAcknowledge that getting here is harder than it used to be, so that they do not have to say it first.\n\nExamine the feet and explain what has changed since the nails were last reduced.\n\nExplain why regular care matters for them specifically, in terms of what a nail injury or infection would mean.\n\nAsk who helps them at home and whether anyone could accompany them.\n\nDiscuss practical solutions: community transport, a different appointment time, a domiciliary visit, or a clinic nearer home.\n\nExplain what the criteria for a home visit are, honestly, so any offer is not withdrawn later.\n\nAsk what else has become difficult, since foot care is rarely the only thing.\n\nAgree a workable arrangement, book the next appointment, and agree who will be told if it is missed."
    },
    "guidanceNote": "Treat missed appointments as a problem to solve, not a behaviour to scold; gently uncover the transport and mobility barriers the patient is too proud to volunteer."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-persuading-a-patient-reluctant-to-change-unsuitable-footwear",
    "title": "Podiatry — Persuading a patient reluctant to change unsuitable footwear",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Outpatient podiatry clinic, a review appointment for recurrent forefoot callus.",
      "candidateRole": "You are the podiatrist. The patient's forefoot pain and callus are clearly related to narrow, high-heeled work shoes.",
      "patientRole": "A 45-year-old in a customer-facing role who is on their feet nine hours a day, considers flat supportive shoes unprofessional, and wants the callus removed again.",
      "patientConcern": "The patient believes their appearance at work matters more than the pain and expects you simply to fix the callus without changing anything they wear.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask where the pain is, when it is worst, and how long after starting a shift it begins.\n\nAsk about the working day: hours standing, the floor surface, and whether shoes are ever changed.\n\nAsk what the workplace dress code actually says, since the requirement may be less strict than assumed.\n\nShow them the callus and explain the relationship between the pressure points and the shoe shape.\n\nExplain what happens if the pattern continues: deeper callus, a possible ulcer, and permanent toe deformity.\n\nAcknowledge that appearance at work is a legitimate concern and not vanity.\n\nOffer practical compromises: a lower heel, a wider toe box, changing for the commute, and a second pair worn on alternate days.\n\nExplain what padding or an orthosis can and cannot do while the footwear stays the same.\n\nDebride the callus today and explain how long it will stay away under current conditions.\n\nNegotiate a plan the patient will actually follow rather than the ideal one.\n\nAgree the review interval and what would prompt an earlier appointment."
    },
    "guidanceNote": "Avoid an all-or-nothing demand; negotiate compromises and acknowledge the patient's professional concerns rather than dismissing them as vanity."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-preparing-a-patient-for-custom-orthoses-and-a-realistic-break-in-period",
    "title": "Podiatry — Preparing a patient for custom orthoses and a realistic break-in period",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Biomechanics podiatry clinic, the dispensing appointment for custom foot orthoses.",
      "candidateRole": "You are the podiatrist dispensing custom orthoses for a patient with overpronation-related knee and foot pain.",
      "patientRole": "A 34-year-old who has paid several hundred pounds for the devices, has waited three weeks for them, and expects them to feel comfortable and fix the pain from the first day.",
      "patientConcern": "The patient will conclude the money was wasted if the first few days feel uncomfortable, and may abandon the devices before they have been worn in.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they are expecting the orthoses to do and by when.\n\nCheck the fit in their own shoes now, and explain what you are looking at.\n\nExplain the wearing-in schedule concretely: how long on day one, and how it increases across the fortnight.\n\nExplain that some awkwardness and new aches in the arch, calf or knee are expected as the mechanics change.\n\nDistinguish clearly between normal settling and a problem, so they know when to persevere and when to return.\n\nExplain which footwear the devices suit and which they will not fit, before they discover it themselves.\n\nExplain how to move them between shoes and how to clean them.\n\nExplain the realistic timeframe for improvement in the knee and foot pain, which is weeks rather than days.\n\nExplain what the adjustment appointment is for and that adjustment is expected rather than a failure.\n\nAddress the cost directly and explain how long the devices should last.\n\nAgree the review appointment and give a contact for problems in the first fortnight."
    },
    "guidanceNote": "Pre-empt the 'they don't work / waste of money' reaction by clearly separating normal break-in discomfort from genuine problems, and make the return-for-adjustment offer explicit."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-reassuring-a-parent-worried-about-a-child-s-flat-feet",
    "title": "Podiatry — Reassuring a parent worried about a child's flat feet",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Paediatric podiatry clinic, a first appointment following a GP referral at the parent's request.",
      "candidateRole": "You are the podiatrist. A five-year-old has flexible, pain-free flat feet, walks and plays normally, and needs no treatment.",
      "patientRole": "The parent of the child, convinced the flat feet are abnormal, asking for orthotics and a specialist referral, and comparing the child's feet with an older sibling's.",
      "patientConcern": "The parent was told as a child that flat feet would cause lifelong problems and is anxious about passing on the same fate.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have noticed and what prompted the appointment.\n\nAsk whether the child ever complains of pain, tires more than other children, or avoids activities.\n\nAsk about their own experience of flat feet, and let the childhood story come out.\n\nExamine the child and demonstrate the arch appearing on tiptoes, with the parent watching.\n\nExplain what flexible flat feet are and why they are normal at five.\n\nExplain how the arch develops through childhood and roughly when it usually appears.\n\nAddress the parent's own history directly and explain how the advice has changed since then.\n\nExplain why routine orthotics are not recommended for a pain-free child, including that they do not change arch development.\n\nDescribe the signs that would warrant review: pain, a rigid foot, one side different from the other, or a change in walking.\n\nReassure without dismissing, and check whether the reassurance has actually landed.\n\nAdvise on footwear for an active child and on why barefoot play is good for developing feet.\n\nAgree that no treatment is needed now, explain how to come back, and offer written information."
    },
    "guidanceNote": "Reassurance must be genuine and evidence-based, not dismissive; uncover the parent's own history and give clear 'come back if' safety-netting so they leave feeling heard."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-reassuring-a-patient-anxious-about-ingrown-toenail-surgery",
    "title": "Podiatry — Reassuring a patient anxious about ingrown toenail surgery",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Podiatry clinic treatment room, a consultation appointment after a third episode of infection this year.",
      "candidateRole": "You are the podiatrist recommending a partial nail avulsion with phenolisation for a recurrent ingrown toenail.",
      "patientRole": "A 24-year-old who has had three painful infections and two courses of antibiotics this year, and who becomes visibly pale when the injection is mentioned.",
      "patientConcern": "The patient is far more frightened of the needle than of the surgery, and may agree to anything simply to stop discussing the injection.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the episodes: how many, how they were treated, and what they were like.\n\nAsk what has been tried so far and why it has not held.\n\nAsk what worries them about the procedure, and notice that the answer may be the injection rather than the surgery.\n\nAcknowledge the fear of needles openly and treat it as common rather than childish.\n\nExplain why repeated conservative treatment is not solving the problem, using their own three episodes.\n\nExplain what the procedure involves, step by step, including what they will and will not feel.\n\nExplain the injection specifically and in detail: where, how many, how long it stings, and what can be done to make it easier.\n\nExplain the healing: the discharge for several weeks, the dressings, and time off sport or work.\n\nExplain the success rate and the small chance of regrowth honestly.\n\nCheck that the agreement is genuine rather than an attempt to end the conversation.\n\nAgree a next step, offer time to think, and confirm consent properly if they wish to proceed."
    },
    "guidanceNote": "Name the needle fear directly and normalise it; do not let the patient consent purely to escape the conversation — ensure their agreement is genuinely informed."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-setting-realistic-expectations-for-fungal-nail-treatment",
    "title": "Podiatry — Setting realistic expectations for fungal nail treatment",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Podiatry clinic, a treatment planning appointment after a confirmed nail sample result.",
      "candidateRole": "You are the podiatrist. The patient has onychomycosis affecting two toenails, confirmed on microscopy and culture.",
      "patientRole": "A 55-year-old with a beach holiday in two months who expects the nails to look normal again within a few weeks of starting treatment.",
      "patientConcern": "The patient is really asking whether the nails will look presentable for the holiday, which they will not, and has not said so directly.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how long the nails have been affected and what has been tried already.\n\nAsk what prompted them to come now, and let the holiday emerge.\n\nExplain what the sample confirmed and why identifying the organism matters for treatment choice.\n\nExplain how the antifungal treatment works and why it acts on new growth rather than on the damaged nail.\n\nExplain how slowly a toenail grows, with a figure, so the timescale follows from something concrete.\n\nState plainly how long visible improvement takes, and answer the holiday question honestly rather than letting them infer it.\n\nExplain the treatment options, topical and oral, including monitoring requirements for the oral route.\n\nExplain why adherence over months determines the outcome and what happens when treatment is stopped early.\n\nAdvise on the hygiene measures: footwear, socks, treating athlete's foot and not sharing towels.\n\nExplain the recurrence rate honestly and what reduces it.\n\nExplain what would prompt stopping treatment early, including any side effect of the oral option.\n\nAgree a plan, discuss cosmetic options for the holiday itself, and arrange the review."
    },
    "guidanceNote": "Lead with the slow-growth timescale so the patient is not misled; gently surface the holiday expectation and offer practical cosmetic coping options rather than an unrealistic promise."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PODIATRY",
    "slug": "spk-podiatry-teaching-diabetic-foot-self-care-to-a-newly-diagnosed-patient",
    "title": "Podiatry — Teaching diabetic foot self-care to a newly diagnosed patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community podiatry clinic, a first foot assessment three weeks after the diagnosis of diabetes.",
      "candidateRole": "You are the podiatrist seeing a patient recently diagnosed with type 2 diabetes for a baseline foot assessment and education.",
      "patientRole": "A 52-year-old who was told by the GP to look after their feet, has no idea what that means, and has an uncle who had a below-knee amputation.",
      "patientConcern": "The patient feels overwhelmed by the new diagnosis and privately believes that losing a foot is inevitable, having watched it happen in the family.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have been told so far about diabetes and about their feet.\n\nAsk what they already do for their feet and what they think they are supposed to do.\n\nCarry out and explain the sensation and pulse checks, telling them what each result means.\n\nExplain what today's assessment shows about their current risk category, in plain terms.\n\nAsk about the uncle, and let the fear of amputation be spoken rather than left underneath.\n\nExplain honestly what leads to amputation and, more usefully, how far up that path someone has to travel first.\n\nTeach the daily check: soles with a mirror or a phone camera, between the toes, and what to look for.\n\nExplain moisturising, nail care, and why chiropody blades and corn plasters are not for them.\n\nExplain footwear: fit, checking inside shoes, and never walking barefoot.\n\nExplain why even a small cut needs attention and who to contact the same day.\n\nExplain how blood glucose control connects to the nerves and circulation in the feet over years.\n\nCheck understanding by asking them to describe the routine, and arrange the review interval."
    },
    "guidanceNote": "Keep the routine concrete and step-by-step; check understanding rather than listing facts, and address the unspoken fear of amputation honestly without false reassurance."
  }
];
