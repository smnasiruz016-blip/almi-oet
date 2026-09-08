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
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-adaptive-feeding-and-dressing-after-hand-burns",
    "title": "Occupational Therapy — Adaptive feeding and dressing after hand burns",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Burns rehabilitation outpatient clinic, a review appointment five weeks after the injury.",
      "candidateRole": "You are the occupational therapist. The patient has healing burns and stiffness across both hands and needs adaptive techniques for self-care.",
      "patientRole": "A 52-year-old with healing partial-thickness burns to both hands, who currently relies on a partner for washing, dressing and eating, and has said little at previous appointments.",
      "patientConcern": "The patient feels humiliated needing their partner's help with intimate personal care and quietly fears the dependence is permanent.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the past week has gone and what they have managed to do themselves.\n\nAsk which task they most want back, and let the answer come from them rather than from your list.\n\nAsk how their partner is managing, since the strain is on both of them.\n\nAcknowledge the loss of privacy and independence directly, since it is the thing not being said.\n\nExplain what the current hand stiffness means and how it is expected to change over the coming months.\n\nExplain how adaptive equipment works during recovery: as a bridge rather than as a permanent arrangement.\n\nDemonstrate built-up cutlery and have them use it now rather than describing it.\n\nDemonstrate dressing aids and easier fastenings, and let them try one.\n\nDiscuss washing and toileting specifically, since these are the tasks that carry the most distress.\n\nAgree one or two tasks to take back this week, small enough to succeed.\n\nExplain how the hand exercises and the adaptive equipment fit together, so neither is dropped.\n\nArrange the equipment, arrange follow-up, and agree what would prompt an earlier review."
    },
    "guidanceNote": "Lead with the patient's own priorities for independence and treat the dignity issue gently. Frame the aids as temporary support during recovery, and pick a first task likely to give an early, motivating success."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-anxiety-management-and-graded-exposure-for-activity-avoidance",
    "title": "Occupational Therapy — Anxiety management and graded exposure for activity avoidance",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community mental health occupational therapy clinic, a third appointment.",
      "candidateRole": "You are the occupational therapist introducing graded exposure and anxiety management to rebuild access to community activities.",
      "patientRole": "A 31-year-old who has not entered a supermarket or taken a bus for five months, relies on deliveries and lifts from a sister, and has recently declined a job interview.",
      "patientConcern": "The patient fears a panic attack in public where they will lose control and be humiliated, so avoidance feels like the safer option.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what a typical week looks like now and what has changed over the five months.\n\nAsk which activities they most want back, and let them rank them rather than you.\n\nAsk what happens when they try: the physical symptoms, the thoughts, and what they do.\n\nAcknowledge that avoidance works in the short term, which is exactly why it is so hard to give up.\n\nExplain what a panic attack is physically and why it peaks and passes.\n\nExplain how avoidance maintains anxiety, using their own five months as the illustration.\n\nExplain graded exposure in plain terms and why the steps must be small enough to complete.\n\nTeach one coping technique now and practise it together rather than describing it.\n\nBuild the first two rungs of a ladder together, specific enough to do this week.\n\nAgree how they will record what happens, including what they felt and how long it lasted.\n\nAgree what to do if a step is not completed, so a setback is planned for rather than feared."
    },
    "guidanceNote": "Keep the first exposure step genuinely small and patient-chosen; the therapeutic value is in achievable graded steps. Validate that panic feels frightening and explain coping tools, rather than pushing the patient toward a step that feels overwhelming."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-cognitive-strategies-after-mild-traumatic-brain-injury",
    "title": "Occupational Therapy — Cognitive strategies after mild traumatic brain injury",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community brain-injury rehabilitation clinic, a first appointment eight weeks after the accident.",
      "candidateRole": "You are the occupational therapist introducing compensatory cognitive strategies and a graded return to routine.",
      "patientRole": "A 34-year-old office worker who has missed three appointments, loses track mid-task, has been signed off work for six weeks, and is frightened by the changes.",
      "patientConcern": "The patient is secretly terrified the memory problems are permanent, that they are losing their mind, and that the job will not be held open.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what a typical day looks like now and which tasks are most affected.\n\nAsk for specific examples rather than a general account, since the pattern matters.\n\nAsk about fatigue, sleep, headaches and how much they are attempting each day.\n\nAsk what worries them most, and let the fear about permanence be spoken.\n\nExplain why memory and attention are affected after this kind of injury, in plain terms.\n\nExplain what recovery usually looks like over months, honestly and without a guarantee.\n\nIntroduce compensatory strategies: a single diary or phone system, checklists, and one task at a time.\n\nExplain reducing distractions and why multitasking is the first thing to go and the last to return.\n\nDiscuss the graded return to routine, and why doing too much sets recovery back.\n\nAgree three strategies to trial, set up the phone reminders with them now, and write the plan down.\n\nExplain what would mean seeking medical review rather than pressing on with the strategies.\n\nDiscuss the employer and what a phased return would involve, and arrange the review."
    },
    "guidanceNote": "Acknowledge how frightening the cognitive changes feel and give realistic, honest reassurance about recovery without over-promising. Present the strategies as practical tools that help now, and start with a small, manageable set."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-driving-cessation-conversation-with-an-older-adult",
    "title": "Occupational Therapy — Driving cessation conversation with an older adult",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community occupational therapy clinic, following an on-road and cognitive driving assessment.",
      "candidateRole": "You are the occupational therapist. The assessment of a 79-year-old with early cognitive decline raises significant concerns about safe driving.",
      "patientRole": "A 79-year-old living six miles from the nearest shop in a rural area, who drives to see grandchildren twice a week, and who came expecting to be passed.",
      "patientConcern": "The deepest fear is becoming isolated and a burden, cut off from grandchildren and unable to manage rurally without a car, so anger or pleading is likely.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they expected from today and what driving means to them practically.\n\nAsk what journeys they make in a typical week and who else depends on them for lifts.\n\nWarn them that the findings are not what they hoped, then state the recommendation plainly.\n\nExplain the specific findings from the assessment rather than a general statement about age.\n\nAllow the reaction, whether anger or tears, and do not fill the silence with reasons.\n\nAcknowledge exactly what is being lost, in their own terms, rather than moving to alternatives too quickly.\n\nExplain the duty to inform the licensing authority and what that process involves.\n\nSay clearly that you cannot recommend otherwise, and explain your position without hiding behind procedure.\n\nExplore the practical alternatives: community transport, family, deliveries, and the rural bus.\n\nAddress the grandchildren specifically, since that is the loss that matters most.\n\nExplain what would happen if they continued to drive, including the insurance position.\n\nAgree concrete next steps, offer to speak to the family, and arrange to see them again."
    },
    "guidanceNote": "Be honest about the recommendation and the legal duty without softening it into ambiguity, but lead with empathy for what driving means. Spend real time on practical alternatives — addressing the isolation fear is what makes the message bearable."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-equipment-home-adaptation-advice",
    "title": "Occupational Therapy — Equipment & home adaptation advice",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community occupational therapy home visit, following two falls in the bathroom.",
      "candidateRole": "You are the occupational therapist recommending grab rails, a shower seat and a raised toilet seat after a home assessment.",
      "patientRole": "A 78-year-old retired farmer with osteoarthritis who has fallen twice getting out of the bath, lives alone, and is reluctant to have the house look like a hospital.",
      "patientConcern": "The patient fears that accepting equipment is the first step towards losing the house and being moved into residential care.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the two falls: what happened each time, and whether anyone knew.\n\nAsk how they manage washing now, and what they have already changed themselves.\n\nAsk what they think about equipment, and let the objection be stated fully.\n\nAcknowledge the pride and the appearance concern rather than treating either as trivial.\n\nExplain what you observed in the bathroom and why those particular movements are the risk.\n\nExplain what a fractured hip at their age would actually mean, plainly and without threat.\n\nAddress the care home fear directly, and explain that equipment is what keeps people at home.\n\nExplain what the equipment looks like now, and show photographs rather than describing it.\n\nOffer the smallest acceptable starting point, such as one rail rather than the full list.\n\nDiscuss what neighbours would actually notice, and let them decide what goes where.\n\nExplain how the equipment is provided and whether it can be removed later if unwanted.\n\nAgree a first step they are willing to try, arrange the fitting, and set a review after it."
    },
    "guidanceNote": "Lead with empathy and frame equipment as protecting independence, not signalling decline — uncover the unspoken fear of losing the home before pushing any single recommendation, and negotiate one acceptable first step."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-falls-prevention-routine-after-a-hip-fracture",
    "title": "Occupational Therapy — Falls-prevention routine after a hip fracture",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Rehabilitation unit, a discharge planning appointment three weeks after hip fracture surgery.",
      "candidateRole": "You are the occupational therapist agreeing a falls-prevention routine before the patient goes home.",
      "patientRole": "An 82-year-old who lives alone in a house with rugs and a steep stair, is impatient to be home, rushes when standing, and has already left the frame behind twice on the ward.",
      "patientConcern": "The patient fears that admitting difficulty or accepting fuss about safety will give the family a reason to stop them living independently.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how they expect to manage at home and what a normal day there looks like.\n\nAsk about the house: the stairs, the bathroom, the floor coverings and the lighting.\n\nAsk what they think about the walking frame, and let the resistance be voiced.\n\nAcknowledge that they want to get back to normal and treat that as the shared goal.\n\nExplain why the first weeks after a hip fracture carry a much higher risk of a further fall.\n\nExplain what a second fracture would mean for the independence they are trying to protect.\n\nAddress the family fear directly, and be clear about what you would and would not report.\n\nAgree the practical measures: using the frame indoors, standing slowly, clearing rugs and cords.\n\nDiscuss footwear and lighting specifically, since both are commonly overlooked.\n\nAgree which changes they will actually make, chosen by them rather than listed by you.\n\nExplain what to do if they do fall at home, including how to get help from the floor.\n\nArrange the home visit or equipment delivery, and set the follow-up date."
    },
    "guidanceNote": "Position the routine as the thing that protects independent living, which is what the patient most wants. Draw out the unspoken fear about the family before pushing measures, and negotiate changes rather than dictating them."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-fatigue-management-in-multiple-sclerosis",
    "title": "Occupational Therapy — Fatigue management in multiple sclerosis",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community neurology occupational therapy clinic, a review appointment.",
      "candidateRole": "You are the occupational therapist introducing energy conservation and pacing for a patient with relapsing multiple sclerosis and severe fatigue.",
      "patientRole": "A 39-year-old parent of two working four days a week, who does everything on a good day and then spends two days unable to get off the sofa.",
      "patientConcern": "The patient fears that slowing down and asking for help means giving in to the illness and being seen as a lazy or inadequate parent.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what a typical week looks like, day by day, including work, children and housework.\n\nAsk what a good day and a bad day each look like in practice.\n\nAsk what they would most want to protect their energy for, since that is what the plan is built around.\n\nAcknowledge that pacing sounds like giving in, and address that belief before explaining the method.\n\nExplain the boom-and-bust pattern using their own week rather than a general example.\n\nExplain planning, prioritising and pacing, and what each looks like in a real day.\n\nWork through one heavy day together and redistribute the tasks across the week.\n\nDiscuss which tasks could be delegated, dropped, or done differently, and what that would mean at home.\n\nDiscuss rest as an active part of the plan rather than as a failure.\n\nAddress the parenting fear directly, including what the children currently experience on crash days.\n\nExplain how the plan would be adjusted around a relapse, so it is not abandoned at the first setback.\n\nAgree two or three changes for the coming fortnight, and arrange the review."
    },
    "guidanceNote": "Name the boom-and-bust cycle the patient will recognise, and reframe pacing as staying in control of the illness rather than surrendering to it. Address the fear of seeming lazy before agreeing concrete changes."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-graded-return-to-work-after-a-back-injury",
    "title": "Occupational Therapy — Graded return to work after a back injury",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Occupational health and vocational rehabilitation clinic, ten weeks after the injury.",
      "candidateRole": "You are the occupational therapist planning a phased return to work for a patient medically cleared for graded activity.",
      "patientRole": "A 47-year-old warehouse supervisor, sole earner, whose sick pay ends in three weeks, who still has back pain on lifting and no red flag symptoms.",
      "patientConcern": "The patient fears that returning before being completely pain-free will cause a serious re-injury leaving them permanently disabled and unable to provide.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the job actually involves: lifting, supervising, driving and how much of each.\n\nAsk what they can do now and what they have been avoiding for ten weeks.\n\nAsk what worries them most about going back, and let the fear of permanent damage be stated.\n\nAsk about the financial position, since the deadline is shaping the decision.\n\nExplain why waiting to be pain-free is not the right threshold, and what the evidence shows about returning sooner.\n\nExplain what a graded return means in practice: hours, duties and progression over weeks.\n\nAddress the re-injury fear directly with what actually predicts a poor outcome.\n\nDiscuss pacing and lifting technique, and demonstrate rather than describe.\n\nDiscuss the reasonable adjustments to request and how to raise them with the employer.\n\nOffer to write to the employer setting out the restrictions, so the message is not his alone.\n\nExplain what a flare would mean and why it is not evidence that the return was a mistake.\n\nAgree a phased plan with dates, a review point, and what to do in a flare."
    },
    "guidanceNote": "Acknowledge the re-injury fear and the financial pressure rather than dismissing either. Explain that graded activity is protective and that some discomfort is expected and safe, then co-design the phased plan with the patient."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-joint-protection-in-early-rheumatoid-hand-arthritis",
    "title": "Occupational Therapy — Joint protection in early rheumatoid hand arthritis",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Hand therapy outpatient clinic at a rheumatology unit, a first appointment after diagnosis.",
      "candidateRole": "You are the occupational therapist teaching joint protection and introducing adaptive techniques and a night resting splint.",
      "patientRole": "A 38-year-old self-employed hairdresser with painful, stiff finger joints for an hour each morning, who works with scissors for eight hours a day.",
      "patientConcern": "The patient secretly fears that being told to protect the joints means giving up hairdressing, the work they love and depend on financially.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask which tasks hurt most, at work and at home, and at what point in the day.\n\nAsk how the mornings are and how long the stiffness takes to ease.\n\nAsk what they are most worried about, and let the question about the job be asked.\n\nAddress that fear early: explain that joint protection is about how tasks are done, not about stopping them.\n\nExplain joint protection in plain terms: spreading the load, using larger joints, and respecting pain.\n\nExplain pacing across a working day and why the afternoon list matters as much as the morning.\n\nDiscuss the tools of the trade: lighter scissors, built-up grips, and chair and mirror height.\n\nIntroduce the night resting splint, what it does, and how it should feel.\n\nDiscuss morning routine changes that shorten the stiffness before the first client.\n\nAgree one or two specific work adjustments to trial this week.\n\nExplain how joint protection fits alongside the medication the rheumatology team has started.\n\nArrange the splint, agree the follow-up, and explain what would prompt an earlier review."
    },
    "guidanceNote": "Keep the advice concrete and few in number for a first session. Surface the fear about losing the job early — frame joint protection as a way to keep working, not a step toward stopping."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-mental-health-ot-graded-return-to-routine",
    "title": "Occupational Therapy — Mental-health OT: graded return to routine",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community mental health team clinic, an appointment for activity scheduling.",
      "candidateRole": "You are the occupational therapist introducing graded activity scheduling to rebuild daily structure and a return to part-time study.",
      "patientRole": "A 26-year-old recovering from a depressive episode, sleeping until midday, out of contact with friends, and suspended from a university course they want to resume.",
      "patientConcern": "The patient fears that committing to goals will lead to disappointing their family again if they cannot keep up, so attempting nothing feels safer.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what a typical day looks like now, from waking to going to bed.\n\nAsk what they used to do that they valued, and what they miss most.\n\nAsk what they think would happen if they set a goal and did not manage it.\n\nAcknowledge that attempting nothing protects them from failing, and name that plainly rather than arguing with it.\n\nExplain the relationship between activity, mood and motivation, and why waiting to feel like it does not work.\n\nExplain graded activity scheduling and why the first steps must be almost too easy.\n\nAgree two small, achievable goals for the coming week, chosen by them and specific about when.\n\nBuild in what happens if a goal is not met, so the plan survives a bad week.\n\nDiscuss the family expectations and what could be said to them about the pace.\n\nDiscuss the return to study as a later stage with its own steps, so it is not the first one.\n\nAgree how the week will be recorded, and arrange the next appointment."
    },
    "guidanceNote": "Keep goals genuinely small and patient-led — in mental-health OT the therapeutic value is in achievable graded steps; validate the fear of failure rather than over-promising, and let the patient choose the activities that matter to them."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-sensory-strategies-for-a-child-struggling-at-school",
    "title": "Occupational Therapy — Sensory strategies for a child struggling at school",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Paediatric occupational therapy clinic, a feedback appointment with the parent after a school observation.",
      "candidateRole": "You are the occupational therapist. A seven-year-old with sensory processing difficulties becomes overwhelmed in the busy classroom.",
      "patientRole": "The parent of the seven-year-old, who has had four calls from the school this term describing the child as disruptive, and who arrives defensive and tired.",
      "patientConcern": "The parent privately fears the difficulties are their fault, or that the child is being labelled naughty rather than understood.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the parent sees at home and how it compares with what the school describes.\n\nAsk what the school has actually said and how those conversations have felt.\n\nAcknowledge how hard repeated calls from school are, before offering any explanation.\n\nExplain sensory overload in plain terms, using the specific things you observed in the classroom.\n\nExplain how overload looks like disruption from the outside, which reframes the behaviour without excusing it.\n\nAddress the parent's fear of blame directly, and be clear that this is not caused by parenting.\n\nSuggest practical strategies for school: movement breaks, a quiet space, ear defenders, and warning of transitions.\n\nSuggest strategies for home: predictable routines, a wind-down after school, and managing the busiest times.\n\nExplain what you will share with the school and how you will support them to use the strategies.\n\nAgree a small number of strategies to start with rather than a full list.\n\nExplain what would prompt a wider developmental assessment, so the parent knows where this could lead.\n\nAgree how progress will be reviewed and who will report back to whom."
    },
    "guidanceNote": "Reframe the behaviour as a response to sensory overload, not naughtiness or poor parenting, early in the conversation. Give a few concrete strategies rather than many, and make the parent a partner in supporting the school."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-splinting-and-scar-management-after-hand-tendon-repair",
    "title": "Occupational Therapy — Splinting and scar management after hand tendon repair",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Hand therapy clinic, an early review two weeks after flexor tendon repair surgery.",
      "candidateRole": "You are the occupational therapist explaining the splinting regime, the controlled exercise protocol and scar management.",
      "patientRole": "A 29-year-old professional keyboard player with a repaired flexor tendon in the left hand, who admits removing the splint at home to test the grip.",
      "patientConcern": "The patient fears that following the slow protocol will leave the hand stiff and end their playing, so is tempted to push harder and faster than advised.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the fortnight has gone and what they have been doing with the hand.\n\nAsk directly about removing the splint, and make an honest answer easy rather than punished.\n\nAsk what they are most afraid of, and let the fear about playing again be stated.\n\nExplain what a repaired tendon is like at two weeks, and how much force it can actually take.\n\nExplain what a rupture would mean: further surgery, a worse outcome, and a much longer delay.\n\nExplain why the protocol is slow on purpose, and that it is designed to prevent both rupture and stiffness.\n\nAddress the stiffness fear directly, and explain how the controlled exercises are what prevent it.\n\nCheck the splint fit and the exercise technique, and correct both now.\n\nExplain scar management: when it starts, how it is done, and why it matters for gliding.\n\nSet out the timeline to playing again, stage by stage, so there is a visible endpoint.\n\nAgree the wearing and exercise plan, arrange close review, and agree what to do if the splint is uncomfortable."
    },
    "guidanceNote": "Explain clearly that following the protocol is what protects the future of playing, and that pushing early risks a rupture that would set recovery back much further. Acknowledge the impatience and the fear about the hand rather than simply issuing rules."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-supporting-a-carer-of-a-person-with-dementia",
    "title": "Occupational Therapy — Supporting a carer of a person with dementia",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Memory clinic appointment, the spouse attending alone at their own request.",
      "candidateRole": "You are the occupational therapist discussing daily activity, environmental cues and structure to reduce distress for a person with moderate dementia.",
      "patientRole": "The 70-year-old spouse and main carer, exhausted and tearful, who washes and dresses their partner entirely because it is quicker, and dreads the afternoons.",
      "patientConcern": "The carer feels guilty admitting they are struggling and fears that asking for help, or letting their partner attempt things, means failing as a husband or wife.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the days are structured now, hour by hour, including the afternoons.\n\nAsk what the hardest part of the day is and what usually happens then.\n\nAsk how they are themselves: sleep, their own health, and whether they get any time away.\n\nAcknowledge the exhaustion and say plainly that struggling is not failing.\n\nExplain how routine and familiar cues reduce agitation, and why the afternoons are often worst.\n\nExplain how doing everything for someone accelerates the loss of their remaining abilities.\n\nSuggest letting the partner do parts of tasks rather than whole ones, with a specific example.\n\nSuggest environmental changes: labels, laid-out clothes, reduced noise, and a visible clock.\n\nDiscuss meaningful activity that fits who their partner was, rather than generic activities.\n\nRaise respite and a carer's assessment directly, and address the guilt attached to both.\n\nExplain what would mean asking for a reassessment, such as a fall, a new behaviour, or a change in continence.\n\nAgree two or three practical changes, and arrange to follow up on the carer as well as the patient."
    },
    "guidanceNote": "Address the carer's exhaustion and guilt before offering techniques — an overwhelmed carer cannot absorb a long strategy list. Reframe enabling the partner as good care, not neglect, and validate how hard the afternoons are."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-upper-limb-retraining-after-stroke",
    "title": "Occupational Therapy — Upper-limb retraining after stroke",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Stroke rehabilitation ward, at the bedside, three weeks after a left-hemisphere stroke.",
      "candidateRole": "You are the occupational therapist introducing a daily upper-limb retraining programme using the affected right arm in real tasks.",
      "patientRole": "A 64-year-old right-handed former carpenter with a weak, clumsy right arm, who now washes, dresses and eats entirely with the left hand.",
      "patientConcern": "The patient has privately decided the right arm is finished, that practising is a waste of effort, and fears never working with his hands again.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how he is managing daily tasks now and what he has stopped doing altogether.\n\nAsk him to show you a task rather than describe it, so you can see what the arm does.\n\nAsk what he thinks the arm will be like in six months, and let the conclusion be spoken.\n\nAcknowledge what the arm meant to a carpenter, and do not move straight to exercises.\n\nExplain learned non-use: how the good arm takes over and how the weak arm then loses further ground.\n\nExplain why practice in real tasks works better than exercises alone.\n\nShow him what the arm can already do, using measurement rather than encouragement.\n\nBe honest about the uncertainty of the outcome while making clear the ceiling is not yet reached.\n\nChoose two or three specific everyday tasks for the right arm, and do one now.\n\nAgree how often, and how the ward staff and family will support it rather than take over.\n\nArrange the review, and agree how progress will be recorded so he can see it himself."
    },
    "guidanceNote": "Draw out the belief that the arm is beyond recovery before prescribing tasks. Frame everyday use as the therapy itself, set genuinely small first goals, and acknowledge the grief about the carpentry rather than glossing over it."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OCCUPATIONAL_THERAPY",
    "slug": "spk-occupational-therapy-wheelchair-and-pressure-care-advice-after-spinal-cord-injury",
    "title": "Occupational Therapy — Wheelchair and pressure-care advice after spinal cord injury",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Spinal rehabilitation unit, a seating and pressure care review appointment.",
      "candidateRole": "You are the occupational therapist reviewing pressure-relief routines, weight shifts, skin checks and the cushion.",
      "patientRole": "A 26-year-old with a thoracic spinal cord injury four months ago, using a manual wheelchair, who skips weight shifts when out with friends and has not checked the skin for a week.",
      "patientConcern": "The patient does not want to be defined by the injury and feels that skin checks and weight shifts in front of friends mark them out, so downplays the risk.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the routine is going day to day, and make an honest answer easy to give.\n\nAsk when it is hardest to fit in, and let the social answer come out.\n\nAsk when the skin was last checked and who helps with the parts they cannot see.\n\nInspect the skin and the cushion now, and explain what you find.\n\nExplain how a pressure injury develops, including the timescale, which is shorter than most people expect.\n\nExplain what a grade three or four injury would actually cost: months in bed and everything that stops.\n\nAcknowledge the wish not to be defined by the injury, and take it seriously rather than overriding it.\n\nProblem-solve discreet weight shifts that do not announce themselves in a pub or a lecture.\n\nDiscuss reminders, a routine attached to existing events, and using a mirror or phone camera for checks.\n\nExplain what to do if any redness does not fade, and who to contact.\n\nAgree a realistic routine that survives a night out, and arrange the seating and skin review."
    },
    "guidanceNote": "Acknowledge the wish to feel normal and the social cost of the routine rather than lecturing about consequences. Problem-solve discreet ways to do weight shifts so the routine fits the patient's life instead of fighting it."
  }
];
