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
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-advising-a-new-contact-lens-wearer-on-hygiene-and-safe-wear",
    "title": "Optometry — Advising a new contact lens wearer on hygiene and safe wear",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Contact lens fitting and aftercare clinic, a teach-and-aftercare appointment two weeks after fitting.",
      "candidateRole": "You are the optometrist. The patient has been fitted with monthly reusable soft lenses and is attending for aftercare.",
      "patientRole": "A 22-year-old university student who is delighted with the lenses, has slept in them twice after nights out, and tops up the old solution rather than replacing it.",
      "patientConcern": "The patient regards overnight wear and topping up solution as harmless shortcuts that everyone takes, and does not connect them with serious infection.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the lenses have been: comfort, vision, wearing time, and any redness or watering.\n\nAsk the patient to talk you through their actual routine, from taking the lenses out to putting them in the next day.\n\nAsk directly about sleeping in lenses and about the solution, in a way that makes an honest answer easy.\n\nExplain what the cornea needs overnight and why closing the eye on a lens changes things.\n\nExplain what microbial keratitis is, how quickly it develops, and what it can cost in vision, without turning it into a horror story.\n\nExplain why solution must be discarded and the case refilled fresh, and what topping up actually leaves behind.\n\nDemonstrate rubbing and rinsing the lens, and explain why it is not optional even with a no-rub solution.\n\nExplain case hygiene, the replacement interval for the case, and the rule about water and showers.\n\nExplain the warning signs: pain, redness, light sensitivity and blurred vision, and that lenses come out immediately.\n\nAgree a routine that fits student life, give the emergency contact number, and arrange the next aftercare visit."
    },
    "guidanceNote": "Frame hygiene around infection risk in concrete terms rather than rules for their own sake. Keep it practical and non-preachy — a friendly routine the student will actually follow beats an exhaustive list."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-advising-a-teenager-spending-long-hours-on-screens-about-eye-comfort",
    "title": "Optometry — Advising a teenager spending long hours on screens about eye comfort",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "High-street optometry practice, at the end of a routine sight test, the parent waiting in reception.",
      "candidateRole": "You are the optometrist. The patient has healthy eyes and a small stable prescription but reports eye strain and headaches after long screen sessions.",
      "patientRole": "A 15-year-old who games for four to five hours most evenings and studies on a laptop, and has read that screens permanently damage eyesight.",
      "patientConcern": "The patient is worried that the screen time has already ruined their eyes, and is bracing to be told to stop gaming altogether.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the symptoms: when the eyes ache, how long it takes to come on, and whether the headache is at the front or the back.\n\nAsk about the screen set-up: distance, height, lighting in the room, and how long between breaks.\n\nAsk what they have read about screens and where, and take the worry seriously rather than laughing it off.\n\nExplain what today's test found, specifically, so the reassurance is based on their own results.\n\nExplain why screens cause tired eyes: the sustained focusing, the reduced blink rate, and the dry surface.\n\nExplain clearly that this is discomfort rather than damage, and address the permanent damage belief head on.\n\nExplain the small prescription and whether glasses would help for close work.\n\nSuggest practical habits: regular distance breaks, screen position, room lighting, and blinking deliberately.\n\nSay plainly that they do not have to stop gaming, and explain what would need to change instead.\n\nExplain what would be worth reporting sooner, such as double vision or a change in distance vision.\n\nAgree two changes they will actually make, and arrange the review appointment before they leave."
    },
    "guidanceNote": "Reassure honestly — screen use causes temporary strain, not permanent damage. Keep advice teenager-friendly and realistic; suggest breaks and good lighting rather than telling them to stop the activity they enjoy."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-breaking-news-that-a-patient-no-longer-meets-the-driving-vision-standard",
    "title": "Optometry — Breaking news that a patient no longer meets the driving vision standard",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community optometry practice consulting room, at the end of a routine sight test.",
      "candidateRole": "You are the optometrist. The patient's best corrected visual acuity now falls below the legal standard for driving and cannot be improved with new glasses.",
      "patientRole": "A 73-year-old who lives alone in a rural village, drives to the shops, to appointments and to see grandchildren, and has come in expecting a new prescription.",
      "patientConcern": "The patient is frightened that losing the licence means losing all independence, and may become angry or ask you to overlook the result.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient has noticed about their vision, particularly when driving at dusk or in rain.\n\nAsk what driving means to them practically: what journeys they make and who depends on it.\n\nWarn them that the results are not what they were hoping for, then say plainly what the testing shows.\n\nExplain the legal standard in concrete terms and how their result compares with it.\n\nExplain honestly that new glasses will not correct this, and why.\n\nAllow the reaction, whether anger or tears, without moving straight on to the next point.\n\nExplain their legal responsibility to inform the licensing authority, and what the process involves.\n\nSay clearly that you cannot overlook the result, and explain the position you are in, without hiding behind rules.\n\nExplain what happens next clinically: the referral, what may be treatable, and whether the standard could be met again.\n\nDiscuss the practical alternatives — bus pass, community transport, family, deliveries — and what each would cover.\n\nAgree who they will speak to today, offer written information, and arrange to see them after the hospital appointment."
    },
    "guidanceNote": "This is emotionally charged — lead with empathy and let the patient react before moving to next steps. Be honest and firm about the legal standard without lecturing, and pivot quickly to practical support and alternatives so they do not leave feeling abandoned."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-discussing-a-colour-vision-result-affecting-a-career-choice",
    "title": "Optometry — Discussing a colour vision result affecting a career choice",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Optometry practice consulting room, immediately after a colour vision assessment requested by the patient.",
      "candidateRole": "You are the optometrist. Testing confirms a moderate red-green colour vision deficiency that may affect entry to certain occupations.",
      "patientRole": "A 17-year-old who has wanted to be a commercial pilot since childhood, has an application in progress, and asked for the test after reading the medical requirements.",
      "patientConcern": "The patient fears this single result has ended the ambition, and wants you either to fix the deficiency or to say it will not matter.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what prompted the test and what they already know about the requirements.\n\nAsk whether they have noticed anything in daily life, at school or in practical subjects.\n\nExplain what the test showed, in terms of the type and degree, using plain language.\n\nExplain what this means for everyday life: driving, most jobs, and what they will and will not notice.\n\nExplain that it is a lifelong characteristic and not a disease, and that it will not deteriorate.\n\nBe honest that no treatment corrects it, and address any expectation raised by tinted lenses advertised online.\n\nExplain what you can and cannot say about aviation: that the standards are set by the regulator, are specific, and involve further testing.\n\nAvoid both false hope and a verdict, and say clearly that this result is not the final word.\n\nSignpost precisely where authoritative occupational advice comes from and how to obtain a formal assessment.\n\nAcknowledge how much this matters to them, ask what they want to do next, and offer a written copy of the results."
    },
    "guidanceNote": "Be honest that the deficiency is lifelong and cannot be corrected, but stay within your scope — final fitness-to-fly decisions rest with aviation medical authorities. Balance honesty with not crushing a young person; signpost rather than pronounce."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-encouraging-consistent-use-of-glaucoma-drops",
    "title": "Optometry — Encouraging consistent use of glaucoma drops",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community optometry practice, a glaucoma monitoring clinic appointment three months after treatment started.",
      "candidateRole": "You are the optometrist. The patient has ocular hypertension, was started on nightly drops three months ago, and the pressure has not fallen as expected.",
      "patientRole": "A 67-year-old retired bus driver who finds the nightly routine fiddly, forgets when staying with family, and has a bottle at home that should have run out weeks ago.",
      "patientConcern": "The patient assumes that because the eyes feel fine and the vision seems unchanged, missing drops occasionally does no harm, and is embarrassed to say how many are missed.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how they have got on with the drops and what the routine has actually been.\n\nAsk how many they think they miss in a typical week, and make a truthful answer easy rather than shameful.\n\nAsk them to show you how they instil a drop, since technique may be the problem rather than memory.\n\nExplain today's pressure reading and what it means alongside the previous ones.\n\nExplain why the eye feels normal even when the pressure is raised, and what is happening to the nerve meanwhile.\n\nExplain that the damage is silent and irreversible, and that the drops prevent rather than repair.\n\nAddress the embarrassment directly and say that missed drops are the norm rather than the exception.\n\nWork out a practical routine tied to something fixed in the evening, and plan for nights away from home.\n\nDiscuss aids: a reminder, an eye-drop dispenser, or a second bottle kept at the family's house.\n\nAgree the plan, agree a repeat pressure check with a date, and explain what would change the treatment."
    },
    "guidanceNote": "Glaucoma is symptomless until late — make that the centre of your explanation rather than scolding. Ask about missed doses non-judgementally; patients under-report when they feel blamed."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-explaining-a-cataract-referral-to-an-anxious-patient",
    "title": "Optometry — Explaining a cataract referral to an anxious patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community optometry practice consulting room, during a routine sight test the patient booked for new glasses.",
      "candidateRole": "You are the optometrist. A visually significant right cataract has reduced acuity to 6/18 with glare difficulty at night, and referral is indicated.",
      "patientRole": "A 71-year-old who came in expecting stronger glasses, is alarmed by the word surgery, and is the sole carer for a housebound spouse at home.",
      "patientConcern": "The core fear is losing independence and being unable to care for the spouse during recovery, and consent will not come until that is addressed.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have noticed: reading, television, driving at night, and glare from headlights.\n\nAsk what the vision problem is stopping them doing, including anything to do with caring at home.\n\nExplain what a cataract is in plain language and why it is not something glasses can correct.\n\nShow them today's measurements against last year's, so the change is visible rather than asserted.\n\nExplain what the surgery involves at a basic level: day case, usually local anaesthetic, and how long it takes.\n\nAddress the anaesthetic fear specifically, and correct the assumption of a general anaesthetic.\n\nBe honest about risk without overstating it, and give a figure rather than the word small.\n\nExplain the recovery realistically: what they can do the next day, the drop regimen, and the restrictions.\n\nAsk directly about caring for their spouse during that fortnight, and discuss what support could be arranged.\n\nExplain that the second eye can be considered separately and later if it becomes troublesome.\n\nAgree the referral, explain what the hospital appointment will involve, and confirm they can change their mind."
    },
    "guidanceNote": "Avoid jargon like 'phacoemulsification'; check understanding frequently. The hidden concern is the caregiving role, so explore the patient's home situation rather than only the medical facts — addressing it is what unlocks agreement."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-explaining-patching-treatment-for-a-child-with-a-lazy-eye",
    "title": "Optometry — Explaining patching treatment for a child with a lazy eye",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Paediatric optometry and orthoptic clinic, a review appointment, the child playing on the floor.",
      "candidateRole": "You are the optometrist. A six-year-old has right amblyopia and has been prescribed two hours of daily occlusion of the left eye.",
      "patientRole": "The parent of the child, who has tried patching for a fortnight, faces daily tears and a patch peeled off within minutes, and is ready to stop.",
      "patientConcern": "The parent feels cruel covering the good eye, is losing faith that it works, and sees no improvement to justify the daily battle.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the fortnight has gone, in detail, including what time of day patching is attempted and what happens.\n\nAsk how the parent feels about it, and let them say that it feels cruel.\n\nAcknowledge that two weeks of tears with no visible result is a reasonable point at which to doubt the whole thing.\n\nExplain what amblyopia is: that the eye is healthy but the connection to the brain is underdeveloped.\n\nExplain why covering the stronger eye is what drives the weaker one to work, using a simple analogy.\n\nExplain the time window: why treatment now works and why it becomes much harder after eight or nine.\n\nSet an honest expectation of the timescale for visible improvement, so they are not judging it at two weeks.\n\nDiscuss practical strategies: patching during a favourite activity, a reward chart, involving the school, and different patch types.\n\nExplain what happens if patching fails, including atropine as an alternative, so this is not the only chance.\n\nAgree a realistic daily plan, arrange a review in four weeks, and offer a contact for when it goes badly."
    },
    "guidanceNote": "Validate that patching is genuinely difficult before problem-solving. Explain the time-limited window for amblyopia treatment so the parent understands why persistence now matters, and offer concrete tactics like patching during a favourite activity."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-explaining-why-a-child-s-prescription-is-changing-more-than-expected",
    "title": "Optometry — Explaining why a child's prescription is changing more than expected",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Family optometry practice, a paediatric review appointment, the child present with the parent.",
      "candidateRole": "You are the optometrist. A nine-year-old's myopia has progressed by one dioptre in a year and is likely to continue increasing.",
      "patientRole": "The parent of the child, alarmed by the jump, convinced that television and tablets have caused it, and asking whether the glasses themselves have made it worse.",
      "patientConcern": "The parent blames themselves and the child's screen habits, and fears the prescription will keep worsening at this rate every year.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the parent has noticed and what prompted the concern today.\n\nAsk about the child's day: hours outdoors, hours on close work, and whether either parent is short-sighted.\n\nExplain what short-sightedness is, in terms of the eye growing slightly too long.\n\nExplain why it commonly progresses during the school years and typically stabilises in the late teens.\n\nAddress the two beliefs directly: that screens alone caused it, and that wearing glasses has weakened the eyes.\n\nExplain what the evidence does show about time outdoors and about prolonged close work.\n\nExplain what can help slow progression, including outdoor time and the options for myopia control, honestly about what each offers.\n\nSet an expectation of the likely course over the next few years, so a further change is not another shock.\n\nExplain why regular review matters and what you will be measuring each time.\n\nExplain what would prompt an earlier appointment, such as squinting, headaches or complaints about the board at school.\n\nAgree a plan the family can follow, including outdoor time, and book the next review with a date."
    },
    "guidanceNote": "Separate fact from myth gently — glasses do not worsen myopia, and the picture is more nuanced than 'too much television'. Offer balanced, evidence-based options for slowing progression without overpromising, and emphasise regular monitoring."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-managing-chronic-dry-eye-and-setting-realistic-expectations",
    "title": "Optometry — Managing chronic dry eye and setting realistic expectations",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Dry eye assessment clinic within an optometry practice, a referral from the practice's own sight test.",
      "candidateRole": "You are the optometrist. The patient has evaporative dry eye with meibomian gland dysfunction, aggravated by prolonged screen use.",
      "patientRole": "A 45-year-old office worker with gritty, tired, watery eyes for a year, who has tried two supermarket drops and says they did nothing.",
      "patientConcern": "The patient wants a one-off cure, is sceptical of self-care measures, and believes only a stronger prescription drop will work.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the symptoms: when they are worst, what makes them better, and how they affect work.\n\nAsk about the watering specifically, since the patient may not connect watering with dryness.\n\nAsk what has been tried, how it was used, and for how long, since most drops are used too rarely to work.\n\nExplain what you found on examination, including the gland blockage and the tear film, using the images if available.\n\nExplain why the eyes water when they are dry, so the diagnosis stops sounding contradictory.\n\nExplain honestly that this is a condition to manage rather than cure, and why that is not the same as being untreatable.\n\nExplain warm compresses and lid hygiene properly: how hot, how long, how often, and for how many weeks before judging.\n\nExplain how drops should be used: preservative-free, regularly rather than as needed, and how many times a day.\n\nDiscuss the screen environment: blink rate, breaks, humidity and air conditioning.\n\nAgree a plan with a defined trial period, arrange a review, and say what would prompt escalating treatment."
    },
    "guidanceNote": "Manage expectations honestly — dry eye is controlled, not cured. Explain why daily self-care like warm compresses tackles the cause while drops only ease symptoms, and check the patient understands the routine before they leave."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-persuading-a-patient-to-attend-follow-up-after-a-borderline-pressure-reading",
    "title": "Optometry — Persuading a patient to attend follow-up after a borderline pressure reading",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community optometry practice consulting room, at the end of a routine sight test.",
      "candidateRole": "You are the optometrist. The patient has borderline raised intraocular pressures and a first-degree family history of glaucoma, and repeat measurement and field testing are needed.",
      "patientRole": "A 49-year-old with no symptoms and perfect vision, whose mother has glaucoma, who works shifts and sees a repeat appointment as unnecessary fuss.",
      "patientConcern": "The patient believes that feeling perfectly well means nothing can be wrong, and regards the recall as the practice generating business.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they know about glaucoma and about their mother's experience of it.\n\nAsk whether anything has been noticed at all, including in the outer field of vision.\n\nExplain today's readings and why borderline means uncertain rather than abnormal.\n\nExplain why one reading is not enough, including the variation through the day and the effect of corneal thickness.\n\nExplain what glaucoma does: that peripheral loss is not noticed until a great deal has gone, and that it does not recover.\n\nExplain why the family history changes the odds specifically, using their mother as the example.\n\nAddress the suspicion that this is about money, openly and without defensiveness.\n\nExplain what the follow-up would involve: repeat pressures, fields, imaging, and how long the appointment takes.\n\nOffer practical solutions for the shift pattern, including an early or late appointment.\n\nExplain what treatment would involve if glaucoma were confirmed, so the follow-up is not a step into the unknown.\n\nAdvise that any brothers, sisters or children over forty should also have regular sight tests.\n\nAgree the appointment there and then with a date, and explain what would happen if the repeat readings are normal."
    },
    "guidanceNote": "Use the family history to make the risk personal without frightening the patient. Stress that a single borderline reading needs confirming, not panic — frame follow-up as sensible caution that catches problems while they are still silent and treatable."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-reassuring-a-patient-anxious-about-new-floaters",
    "title": "Optometry — Reassuring a patient anxious about new floaters",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Optometry practice consulting room, immediately after a dilated fundus examination arranged the same day.",
      "candidateRole": "You are the optometrist. The examination shows an uncomplicated posterior vitreous detachment with no retinal tear or detachment.",
      "patientRole": "A 58-year-old who has had drifting specks and cobweb shapes for a week, has read about retinal detachment online, and has barely slept for two nights.",
      "patientConcern": "The patient is convinced the floaters signal something that will end in blindness, and needs both genuine reassurance and clarity about when to worry.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask exactly what they have seen: when it started, whether there were flashes, and whether anything has changed since.\n\nAsk about any shadow or curtain in the field of vision, and be specific rather than general.\n\nAsk what they have read and what they are most afraid of.\n\nExplain what today's dilated examination looked at and what you found, so the reassurance rests on the examination.\n\nExplain what a posterior vitreous detachment is, in plain terms, and why it happens at this age.\n\nExplain what floaters are and why they are more noticeable against a bright background.\n\nExplain honestly what usually happens over the following months: that they settle or become less noticeable rather than disappearing.\n\nExplain the residual risk of a tear in the coming weeks, and be honest that today's normal examination does not cover the future.\n\nDescribe the warning signs precisely — a shower of new floaters, flashes, or a curtain — and what to do the same day.\n\nAgree a review appointment, give written advice and an emergency number, and check they know where to go out of hours."
    },
    "guidanceNote": "Reassurance must be paired with clear safety-netting — name the red flags (a sudden shower of floaters, flashing lights, or a shadow or curtain across vision) and what to do, so the patient leaves calm but not complacent."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-reassuring-a-patient-reluctant-about-diabetic-eye-screening",
    "title": "Optometry — Reassuring a patient reluctant about diabetic eye screening",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "High-street optometry practice, during a routine sight test the patient booked for reading glasses.",
      "candidateRole": "You are the optometrist. The patient has type 2 diabetes and has missed the last two annual diabetic retinal screening appointments.",
      "patientRole": "A 54-year-old self-employed plumber with type 2 diabetes for seven years, whose sight seems perfect, who resents losing half a day of work.",
      "patientConcern": "The patient genuinely believes screening is pointless while he can read and drive, and is irritated at being chased about an appointment he did not request.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the diabetes has been and when he last had his HbA1c checked.\n\nAsk what he understands screening to be for, and listen to the objection in full.\n\nAcknowledge the time and income problem directly, since for a self-employed man it is the real issue.\n\nExplain what diabetic retinopathy is and where it starts in the retina.\n\nExplain why it causes no symptoms until it affects the centre, and why that is precisely the reason for screening.\n\nExplain what today's examination showed and be honest that a sight test is not the same as screening.\n\nExplain what treatment can achieve if changes are found early, and what is lost by finding them late.\n\nExplain the practical difference between screening and an eye appointment, including how long it actually takes.\n\nOffer help with the arrangements, including an early appointment or a local venue.\n\nExplain what the screening photographs show and why the drops are needed for them.\n\nAgree what he will do, offer to notify the screening service that he wishes to be re-invited, and set a date."
    },
    "guidanceNote": "Acknowledge the time pressure of self-employment before persuading. Stress that early diabetic changes are treatable precisely because they appear before symptoms — that is the whole point of screening."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-recommending-a-cessation-of-overnight-contact-lens-wear-after-an-infection-scare",
    "title": "Optometry — Recommending a cessation of overnight contact lens wear after an infection scare",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Urgent contact lens aftercare appointment, the patient having telephoned that morning with a painful red eye.",
      "candidateRole": "You are the optometrist. The patient has a painful red eye with a peripheral corneal infiltrate related to sleeping in monthly lenses.",
      "patientRole": "A 29-year-old shift worker who sleeps in lenses routinely because of irregular hours, has had a painful, watering right eye for two days, and still has the lens in.",
      "patientConcern": "The patient values the convenience of never removing the lenses around night shifts and hopes to resume overnight wear once this episode settles.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask when the symptoms began, how they have changed, and whether the vision is affected.\n\nAsk about the wearing pattern honestly: how many nights a week the lenses stay in, and for how long they have done so.\n\nExplain what you can see on examination and what an infiltrate is, in plain terms.\n\nExplain how overnight wear contributed, in terms of oxygen and of what happens under a closed lid.\n\nConvey the seriousness proportionately: this is not an ulcer today, but it is the step before one.\n\nExplain what a corneal ulcer would mean, including scarring on the visual axis, without frightening them into not returning.\n\nAgree the immediate steps: lenses out now, no wear at all until reviewed, and treatment as indicated.\n\nExplain the review schedule over the next few days and what would mean coming back sooner.\n\nNegotiate the long-term pattern rather than issuing a ban: daily disposables, a lens approved for extended wear, or glasses for night shifts.\n\nAgree a specific plan for the shift pattern and book the follow-up before they leave."
    },
    "guidanceNote": "Make the link between the habit and the painful eye explicit so the patient owns the risk. Negotiate rather than dictate — explore daily disposables or a no-overnight rule that fits shift work, since a plan they reject will not be followed."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-sudden-visual-change-and-possible-retinal-detachment",
    "title": "Optometry — Sudden visual change and possible retinal detachment",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Optometry practice, an emergency appointment arranged by telephone this morning.",
      "candidateRole": "You are the optometrist. Examination raises strong suspicion of a retinal detachment in the left eye requiring hospital assessment today.",
      "patientRole": "A 55-year-old high myope with a shower of new floaters and flashes since yesterday and a grey curtain now across the lower field, who is due at a family wedding this afternoon.",
      "patientConcern": "The hidden concern is letting the family down at the wedding, and they will not agree to go now until they hear plainly what delay costs.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask when the floaters and flashes began and when the curtain appeared, as precisely as possible.\n\nAsk whether the central vision is still clear, since this determines the urgency of the surgery.\n\nExplain what you have found on examination, in lay terms, without softening it into vagueness.\n\nExplain what may be happening to the retina, using a simple description of the layer lifting away.\n\nSay plainly that this needs assessment today and not next week, and give the reason before they argue.\n\nExplain what delay costs specifically: that once the centre detaches, the vision that is lost does not fully return.\n\nAddress the wedding directly rather than treating it as an obstacle, and acknowledge what missing it means.\n\nExplain what the hospital will do, roughly how long it takes, and that surgery may not be today.\n\nAdvise on what to do meanwhile: no driving, minimal head movement, and how to travel.\n\nMake the referral now, confirm who is taking them and how, and check they have the details in writing."
    },
    "guidanceNote": "Balance honesty about the sight-threatening risk with calm reassurance — do not minimise to placate the patient. Acknowledge the wedding explicitly; naming the genuine trade-off (a few hours now versus permanent vision loss) is usually what secures agreement to attend today."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "slug": "spk-optometry-supporting-a-parent-whose-young-child-needs-glasses-full-time",
    "title": "Optometry — Supporting a parent whose young child needs glasses full-time",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Family optometry practice paediatric clinic, following a cycloplegic refraction on a five-year-old.",
      "candidateRole": "You are the optometrist. The child is moderately hypermetropic and needs spectacles for all waking hours.",
      "patientRole": "The parent of a five-year-old about to start school, upset at the news, worried the eyes are weak, and afraid the child will be teased.",
      "patientConcern": "The parent fears that glasses will make the eyes dependent and weaker over time, and is anxious about how school will go.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the parent has noticed and whether anyone at nursery or school raised a concern.\n\nAsk what worries them most about the glasses, and let the fear of teasing be said out loud.\n\nExplain what long-sightedness is at this age, using a simple description of the focusing effort involved.\n\nExplain why full-time wear is recommended rather than for close work only.\n\nAddress the belief that glasses weaken the eyes directly, and explain what actually happens to vision with and without them.\n\nExplain what could happen without correction, including amblyopia and squint, without frightening them.\n\nExplain the likely course over the coming years and that the prescription often reduces with growth.\n\nGive practical advice on getting a five-year-old to wear glasses: frame choice, straps, short sessions at first, and consistency.\n\nDiscuss school: informing the teacher, a spare pair, and how children of this age usually respond.\n\nExplain how the glasses should fit a small face and what to do when they are bent or broken.\n\nAgree a plan for the first fortnight, arrange a review, and offer a contact for when it is not going well."
    },
    "guidanceNote": "Parents often believe glasses harm developing eyes — gently correct this without dismissing the worry. Keep your language simple and warm; this is a FOUNDATION-level reassurance task, not a technical lecture."
  }
];
