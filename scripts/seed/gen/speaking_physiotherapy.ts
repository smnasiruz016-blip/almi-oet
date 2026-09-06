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
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-addressing-fear-of-movement-after-a-disc-related-back-episode",
    "title": "Physiotherapy — Addressing fear of movement after a disc-related back episode",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community musculoskeletal physiotherapy clinic, a review appointment six weeks after the acute episode.",
      "candidateRole": "You are the physiotherapist. The patient's back and leg pain has settled and there are no neurological signs, but activity remains severely restricted by fear.",
      "patientRole": "A 38-year-old warehouse worker who has avoided all bending and lifting for six weeks, has been on light duties, and now moves as though the back were made of glass.",
      "patientConcern": "The patient believes the spine is permanently damaged and that one wrong movement could put them in a wheelchair.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what actually happened at the time of the episode and what they were told then.\n\nAsk what they are avoiding now, specifically, and what they believe would happen if they did it.\n\nAcknowledge how frightening the original episode was, and do not move straight to correcting the belief.\n\nAsk about the leg symptoms now, and check that nothing warrants further assessment.\n\nExplain what a disc problem is and, more importantly, what happens to it over weeks and months.\n\nExplain why prolonged avoidance weakens the supporting muscles and makes the next episode more likely, not less.\n\nChallenge the fragile spine belief gently, using what their own recovery over six weeks already demonstrates.\n\nExplain what hurt does and does not mean at this stage, so that discomfort during activity stops being a danger signal.\n\nDemonstrate a bend and a light lift with them now, so the first attempt happens with you rather than alone.\n\nAgree a graded plan for reintroducing bending and lifting, with specific weights and days.\n\nAgree what happens at work, what to do in a flare, and when you will review the plan together."
    },
    "guidanceNote": "Validate the fear without reinforcing the catastrophic belief; reframe the spine as strong and adaptable while keeping the graded plan concrete and small."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-advising-a-hesitant-patient-on-early-loading-after-ankle-sprain",
    "title": "Physiotherapy — Advising a hesitant patient on early loading after ankle sprain",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Outpatient physiotherapy clinic, a first appointment one week after the injury.",
      "candidateRole": "You are the physiotherapist. The patient has a grade II lateral ankle sprain with fracture excluded on imaging.",
      "patientRole": "A 28-year-old keen runner who has kept the foot elevated and used crutches for a week, has not put any weight through it, and has read that this should continue for six weeks.",
      "patientConcern": "The patient fears that loading the ankle will re-tear the ligament and end their running, and is following online advice rather than what they were told.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the injury happened and what has been done since.\n\nAsk exactly what they have been doing: crutches, elevation, ice, and how much weight has gone through the foot.\n\nAsk what they have read and where, and take it seriously rather than dismissing it.\n\nAsk what they are most afraid of, and let running be named as the real stake.\n\nExplain what a grade II sprain is and what is happening in the ligament at one week.\n\nExplain why protected early movement and graded weight-bearing speed recovery, and what prolonged rest costs in stiffness and strength.\n\nReassure them that some discomfort with controlled loading is expected and is not damage.\n\nExplain the plan in stages: range of movement first, then weight-bearing, then balance, then running.\n\nDemonstrate the first exercises and have them do each one now.\n\nAgree the criteria for progressing rather than a fixed timetable, so they know what they are working towards.\n\nExplain what taping or a brace can add during the return to running, and for how long.\n\nAgree short-term goals for the next fortnight and what would mean contacting you sooner."
    },
    "guidanceNote": "Draw out the re-injury fear before correcting the six-week belief; acknowledge the worry as reasonable rather than dismissing it, then give the graded plan."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-encouraging-a-new-mother-to-restart-pelvic-floor-rehabilitation",
    "title": "Physiotherapy — Encouraging a new mother to restart pelvic floor rehabilitation",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Women's health physiotherapy clinic, a review appointment ten weeks after a vaginal delivery.",
      "candidateRole": "You are the physiotherapist. The patient was started on a pelvic floor programme at six weeks and has not continued it.",
      "patientRole": "A 32-year-old first-time mother, exhausted, feeding through the night, leaking when she coughs or lifts the baby, and using pads without mentioning it to anyone.",
      "patientConcern": "She is embarrassed about the leaking and assumes it is a normal and permanent consequence of childbirth that cannot be helped.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how she is managing generally, with the baby and with sleep, before asking about the exercises.\n\nAsk about the symptoms gently and specifically: when the leaking happens, how much, and whether she is using pads.\n\nAsk about anything else she may not volunteer, including heaviness, bowel symptoms or pain with intercourse.\n\nAcknowledge how demanding the past ten weeks have been, and treat the stopped exercises as expected rather than as a failure.\n\nAddress the belief directly: explain that leaking after childbirth is common but not something she has to live with.\n\nExplain what the pelvic floor does and what has happened to it, in plain terms.\n\nExplain why doing the exercises now matters more than doing them later, and what happens over decades if it is left.\n\nCheck her technique, since many women contract the wrong muscles, and correct it if needed.\n\nAgree a routine she can genuinely fit around feeds, tied to something she already does many times a day.\n\nAdvise on lifting the baby, on constipation and on returning to exercise safely.\n\nAgree the review date and make it easy to come back if the routine falls apart again."
    },
    "guidanceNote": "Normalise the symptoms warmly to reduce embarrassment, then correct the belief that it is untreatable; tie the routine to existing moments in the baby's day."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-encouraging-adherence-to-a-knee-replacement-rehab-programme",
    "title": "Physiotherapy — Encouraging adherence to a knee replacement rehab programme",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Outpatient physiotherapy clinic, a review appointment three weeks after total knee replacement.",
      "candidateRole": "You are the physiotherapist. The patient's knee flexion has fallen since the last visit and the home exercises have been abandoned.",
      "patientRole": "A 70-year-old retired teacher who stopped the exercises after a week because they hurt, and who has been sitting with the leg propped up and straight.",
      "patientConcern": "The patient secretly fears that the pain means the new joint is being damaged and that exercising will loosen it.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what she has actually been doing since the last visit, and make an honest answer easy to give.\n\nAsk what happened when she did the exercises and what stopped her.\n\nAsk what she thinks the pain means, and let the fear about the joint be said aloud.\n\nMeasure the range now and compare it with the last visit, so the change is visible rather than asserted.\n\nExplain how the prosthesis is fixed and why exercise cannot loosen it.\n\nExplain what the pain during exercise actually is: stretching scar tissue and swelling, not damage.\n\nExplain why the next six weeks matter more than any later period, and what happens if the range is not regained now.\n\nExplain pain relief timing, and plan the exercises around the analgesia rather than around the day.\n\nDemonstrate each exercise and watch her do them, correcting the ones being done wrongly.\n\nAgree a realistic daily routine, broken into short sessions rather than one long one.\n\nAgree the review date and what would mean contacting the surgical team rather than you."
    },
    "guidanceNote": "Name the fear of joint damage early and explain the difference between expected exercise soreness and harmful pain before negotiating the routine."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-guiding-a-recreational-runner-back-to-sport-after-a-hamstring-strain",
    "title": "Physiotherapy — Guiding a recreational runner back to sport after a hamstring strain",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Sports physiotherapy clinic, a review appointment four weeks after the injury.",
      "candidateRole": "You are the physiotherapist. The patient has a grade two hamstring strain and is not yet meeting the criteria for a return to full running.",
      "patientRole": "A 34-year-old amateur runner entered in a half marathon in two weeks, who has been running through discomfort for the past week and wants to resume full training now.",
      "patientConcern": "The patient fears that missing this race means losing standing in their running group and being seen by friends as having given up.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what running they have actually done in the past two weeks and what it felt like.\n\nAsk what the race means to them and why this one in particular matters.\n\nRecognise the motivation rather than treating the goal as an obstacle to management.\n\nAssess and explain the current findings: strength, flexibility and tenderness, and what each tells you.\n\nExplain what a grade two strain is and how the tissue heals over weeks.\n\nExplain what re-injury looks like: how much longer it takes, and what the recurrence rate is for a hamstring returned to too early.\n\nSet out the specific criteria the hamstring must meet before full loading, so the decision is objective rather than a matter of opinion.\n\nGive an honest assessment of whether those criteria can be met in two weeks.\n\nNegotiate the options: not running, running slower and shorter, or accepting a defined risk with eyes open.\n\nAgree a staged loading plan for the coming fortnight whichever option they choose.\n\nAgree what they will do on race day and what would mean stopping mid-race."
    },
    "guidanceNote": "Surface the social pressure behind the rush; tie the return-to-sport criteria to the patient's own goal of running pain-free for the season, not just this race."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-managing-a-patient-with-chronic-low-back-pain-seeking-a-scan",
    "title": "Physiotherapy — Managing a patient with chronic low back pain seeking a scan",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community musculoskeletal physiotherapy clinic, a first assessment following GP referral.",
      "candidateRole": "You are the physiotherapist. The patient has non-specific chronic low back pain of eight months with no red flag features on assessment.",
      "patientRole": "A 45-year-old warehouse worker convinced that an MRI scan and rest are needed, frustrated that previous appointments have offered only exercises, and now working reduced hours.",
      "patientConcern": "The patient fears the pain means serious permanent damage and that continuing to work will end in a wheelchair, which is why proof from a scan feels essential.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they believe is causing the pain and what they think the scan would show.\n\nAsk how the pain affects work, sleep and home life, and what they have had to give up.\n\nScreen for red flags explicitly and tell them you are doing it, so the reassurance has a basis.\n\nAcknowledge that eight months of pain is a long time and that wanting an answer is reasonable.\n\nExplain what scans show in people of their age without back pain, and why the findings are often misleading.\n\nExplain why imaging is not usually helpful for this presentation, and what would change that.\n\nExplain why staying active is recommended over rest, in terms of what deconditioning does over months.\n\nAddress the wheelchair fear directly and say plainly what the evidence shows about the outlook.\n\nExplain what treatment can offer, honestly, including that it aims at function as much as at pain.\n\nAgree a graded activity and pacing plan, with something specific to do this week.\n\nAgree what would prompt review or referral, so the door is not closed on further investigation."
    },
    "guidanceNote": "Validate the fear of permanent damage before explaining why a scan would not change management; offer the staying-active message as protective, not dismissive, and co-agree one concrete step."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-managing-pain-medication-expectations-during-shoulder-rehabilitation",
    "title": "Physiotherapy — Managing pain medication expectations during shoulder rehabilitation",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Outpatient physiotherapy clinic, a mid-programme appointment for adhesive capsulitis.",
      "candidateRole": "You are the physiotherapist. The patient is asking you to recommend stronger painkillers so that the stretching can be avoided.",
      "patientRole": "A 52-year-old five months into a frozen shoulder, sleeping badly on the affected side, taking paracetamol irregularly and only when the pain is severe, and increasingly frustrated at the slow pace of recovery.",
      "patientConcern": "The patient hopes stronger medication will allow the painful stretching to be skipped altogether rather than made tolerable.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the pain is like now: at rest, at night, and during the exercises.\n\nAsk what they are currently taking, at what dose, and when in relation to the exercises.\n\nAcknowledge the discomfort and the frustration, and do not treat the request as an attempt to avoid work.\n\nExplain your role and why prescribing is the doctor's decision rather than yours.\n\nExplain where the condition is in its natural course and what the coming months are likely to look like.\n\nExplain why the stretching cannot simply be replaced by stronger analgesia, in terms of what the capsule needs.\n\nExplain what stronger opioids would and would not do here, including the effect on sleep and on function.\n\nDiscuss how the existing medication could be used better, including regular rather than as-needed dosing before exercise.\n\nDiscuss the non-drug strategies: heat before, positioning at night, and shorter more frequent sessions.\n\nAdjust the programme with them so that the exercises become tolerable rather than heroic.\n\nAgree what you will write to the GP about the analgesia, and agree the next review."
    },
    "guidanceNote": "Be honest about the limits of your role on medication without sounding dismissive; redirect to practical ways of making the stretches more bearable."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-motivating-a-stroke-survivor-during-arm-recovery",
    "title": "Physiotherapy — Motivating a stroke survivor during arm recovery",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community stroke rehabilitation, a home visit, the patient sitting in an armchair with the affected arm in the lap.",
      "candidateRole": "You are the physiotherapist. The patient has residual left arm weakness eleven weeks after a stroke and has stopped using the arm in daily tasks.",
      "patientRole": "A 66-year-old who has regained walking and self-care, has some active shoulder and elbow movement, and now does everything one-handed without thinking about it.",
      "patientConcern": "The patient has quietly concluded that the arm will never be useful again and that the exercises are wasted effort.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the past fortnight has gone and what they have managed to do.\n\nAsk specifically what the arm does during an ordinary day, and watch a task rather than take the description.\n\nAsk what they think the arm will be like in a year, and let the conclusion be spoken.\n\nAcknowledge the frustration with the pace of recovery and do not offer false optimism.\n\nExplain what learned non-use is: how the good arm takes over and how the affected arm then loses ground.\n\nExplain why regular use, even in small ways, is what drives recovery, in terms of the brain rather than the muscle.\n\nShow them the change since the last assessment, using measurements, so progress is visible.\n\nBe honest about the likely ceiling while making clear that the ceiling is not yet reached.\n\nChoose two or three everyday tasks the arm could assist with, and practise one now.\n\nAgree how the family can help without doing everything for them.\n\nAgree what to practise before the next visit and how it will be recorded."
    },
    "guidanceNote": "Draw out the hidden belief that recovery has stalled; offer honest, encouraging information about ongoing potential and anchor it to small, real daily tasks."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-negotiating-exercise-expectations-with-a-patient-with-severe-copd",
    "title": "Physiotherapy — Negotiating exercise expectations with a patient with severe COPD",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Pulmonary rehabilitation clinic, an enrolment assessment before the programme starts.",
      "candidateRole": "You are the physiotherapist enrolling a patient with severe COPD into a pulmonary rehabilitation programme.",
      "patientRole": "A 71-year-old with an FEV1 of 35 per cent predicted who stops at the first sensation of breathlessness, now walks only between rooms, and was persuaded to attend by a daughter.",
      "patientConcern": "The patient believes that pushing into breathlessness could trigger a respiratory collapse, so avoids all exertion as a matter of survival.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they can and cannot do now, and how that compares with a year ago.\n\nAsk what happens when they become breathless and what they do about it.\n\nAsk what they think would happen if they kept going, and let the fear be stated.\n\nAcknowledge that breathlessness is genuinely frightening and not merely unpleasant.\n\nExplain the cycle: less activity, weaker muscles, more breathlessness for the same task.\n\nExplain that becoming breathless during controlled exercise is expected and is not harmful, and explain why.\n\nExplain what the monitoring during the programme involves, so that the safety is visible rather than promised.\n\nTeach a breathing technique now, such as pursed-lip breathing, and practise it together.\n\nExplain what the programme actually involves, session by session, and what most people gain from it.\n\nAgree a starting level low enough to be certainly achievable, and say that it will be adjusted.\n\nExplain how the reliever inhaler is used before exercise and why that is planned rather than a rescue.\n\nAgree what would mean stopping an exercise, and what would mean contacting the team."
    },
    "guidanceNote": "Distinguish safe, controlled breathlessness from a genuine emergency; pairing exercise with a breathing-control technique gives the patient a sense of safety they can practise."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-persuading-a-reluctant-patient-to-begin-exercise-for-type-2-diabetes",
    "title": "Physiotherapy — Persuading a reluctant patient to begin exercise for type 2 diabetes",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Primary care physiotherapy clinic, a first appointment following referral from the diabetes review.",
      "candidateRole": "You are the physiotherapist. The patient has been referred for an activity programme to help manage type 2 diabetes.",
      "patientRole": "A 49-year-old shift worker with two young children who says there is no time and no energy, and who did not ask to be referred.",
      "patientConcern": "The patient feels judged about their lifestyle and assumes any plan will be unrealistic, so has decided in advance that it will fail.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they were told about why they were referred and what they think of it.\n\nAsk them to describe an ordinary day, hour by hour, including the shifts and the children.\n\nListen to the barriers in full without proposing solutions while they are still speaking.\n\nAcknowledge that the day they have described genuinely has very little room in it.\n\nExplain in simple terms how activity affects blood glucose, including the effect of a single walk.\n\nExplain what changes and what does not, so the expectation is realistic rather than transformative.\n\nAsk what they used to enjoy doing, and what they might tolerate now.\n\nFind something that fits inside the day already described rather than requiring a new slot in it.\n\nAddress the sense of being judged directly, and make clear this is not about willpower.\n\nAgree one small change with a specific time and place attached.\n\nExplain what to do on a night shift, when activity is hardest to fit in and easiest to abandon.\n\nAgree how it will be reviewed, and make it easy to come back having done nothing."
    },
    "guidanceNote": "Avoid lecturing; show genuine curiosity about the patient's day and build the plan from something they already do so it does not feel imposed."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-planning-a-graded-return-to-manual-work-after-a-shoulder-injury",
    "title": "Physiotherapy — Planning a graded return to manual work after a shoulder injury",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Occupational physiotherapy clinic, a review appointment seven weeks after the injury.",
      "candidateRole": "You are the physiotherapist. The patient is recovering from a rotator cuff injury sustained at work and wants to return to full duties immediately.",
      "patientRole": "A 39-year-old scaffolder, self-employed, who has had no income for seven weeks, still has pain above shoulder height, and has a job starting on Monday.",
      "patientConcern": "The patient fears that asking for modified duties will make them look unreliable and cost them future work, so would rather risk the shoulder.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask exactly what the job involves: what weights, at what heights, and for how long at a time.\n\nAsk about the financial position and what has been happening over the seven weeks.\n\nAssess and explain where the shoulder is now: strength, range, and what it can do above shoulder height.\n\nAcknowledge the pressure they are under rather than treating the deadline as an obstacle.\n\nExplain what would happen to the healing tendon under full overhead loading now.\n\nExplain the cost of getting it wrong in their own terms: a further three months off rather than three weeks.\n\nExplain what a graded return looks like and what tasks would be safe from Monday.\n\nDiscuss modified duties as a bridge, and how to raise it with the contractor without appearing unreliable.\n\nOffer to put the restrictions in writing so that the message comes from you rather than from them.\n\nAgree a staged plan with specific weights and heights week by week.\n\nAgree what a flare would mean and what they should do rather than simply stopping."
    },
    "guidanceNote": "Treat the income and job-security worry as central; position modified duties as the faster, safer route to keeping the job rather than a sign of weakness."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-reassuring-a-patient-anxious-about-post-operative-chest-physiotherapy",
    "title": "Physiotherapy — Reassuring a patient anxious about post-operative chest physiotherapy",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Surgical ward, at the bedside on the first day after open abdominal surgery.",
      "candidateRole": "You are the physiotherapist starting breathing and mobility exercises the day after surgery.",
      "patientRole": "A 64-year-old who had a laparotomy yesterday, is taking shallow breaths, has not coughed, and has declined to sit out of bed this morning.",
      "patientConcern": "The patient is afraid that coughing or moving will make the wound split open, and has said nothing about it to the nursing staff.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the night has been and where the pain is worst.\n\nAsk what is stopping them taking a deep breath, and give room for the fear rather than assuming it is pain alone.\n\nCheck when analgesia was last given and whether it is working before you ask for anything.\n\nAcknowledge the pain and the worry, and say plainly that neither is unreasonable.\n\nExplain what happens to the lungs after abdominal surgery if the bases are not expanded.\n\nExplain what a chest infection at this point would mean for their recovery and their discharge.\n\nExplain how the wound is closed and why coughing will not split it.\n\nDemonstrate supporting the wound with a rolled towel, and let them try it before asking for a cough.\n\nPractise a few deep breaths and one supported cough with you present.\n\nExplain why sitting out of bed matters as much as the breathing exercises.\n\nExplain how the pain team can be involved if the analgesia is not enough to allow the exercises.\n\nAgree what they will do each hour today and arrange when you will return."
    },
    "guidanceNote": "Address the fear of the wound splitting directly; demonstrating wound support while breathing turns an abstract reassurance into something the patient can feel works."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-reassuring-an-older-patient-after-a-fall-while-improving-balance",
    "title": "Physiotherapy — Reassuring an older patient after a fall while improving balance",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community falls-prevention physiotherapy clinic, a first appointment following a fall at home last month.",
      "candidateRole": "You are the physiotherapist. The patient fell at home, was not injured, and has since drastically reduced all activity.",
      "patientRole": "An 80-year-old who lives alone, now spends most of the day in a chair, has cancelled the weekly church coffee morning, and has a daughter telephoning daily.",
      "patientConcern": "The patient is afraid that another fall would mean losing independence and being moved into residential care, so has chosen stillness as the safer option.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what happened at the time of the fall and what they were doing.\n\nAsk what has changed since: what they have stopped doing, and how the days are spent now.\n\nAsk what they are most afraid of, and let residential care be named if that is the fear.\n\nAcknowledge that the fear is reasonable and that the fall was frightening.\n\nExplain that reducing activity increases falls risk, because the legs weaken within weeks.\n\nExplain what the assessment today shows about their strength and balance, in plain terms.\n\nExplain what a supervised strength and balance programme actually involves, and what it achieves.\n\nAddress the care home fear directly with what the evidence shows about activity and independence.\n\nDiscuss the practical safety measures at home: footwear, lighting, rugs and a personal alarm.\n\nAgree a small first step, such as one supervised session or standing exercises at the kitchen worktop.\n\nExplain what would be checked at a medication and blood pressure review, since falls often have several causes.\n\nAgree what would rebuild confidence outside the house, and set the next appointment."
    },
    "guidanceNote": "Connect the exercise plan directly to the patient's wish to stay independent; keep the first step small enough to feel safe and achievable at home."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-supporting-a-parent-of-a-child-with-a-wrist-fracture-in-a-cast",
    "title": "Physiotherapy — Supporting a parent of a child with a wrist fracture in a cast",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Paediatric physiotherapy outpatient clinic, the first appointment after cast removal.",
      "candidateRole": "You are the physiotherapist. An eight-year-old's distal radius fracture has united and the cast was removed two days ago.",
      "patientRole": "The parent of an eight-year-old, anxious, holding the child's arm protectively, who has kept the child off the trampoline and out of PE and wants a splint for several more weeks.",
      "patientConcern": "The parent is frightened that movement will re-break the wrist and that they will be blamed for pushing the child too hard.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the child has been since the cast came off and what they have been allowed to do.\n\nAsk what the parent is most worried about, and let the fear of being blamed be said if it is there.\n\nAsk the child directly how the wrist feels, rather than talking only to the parent.\n\nAcknowledge the wish to protect, and treat it as sensible rather than excessive.\n\nExplain what the fracture clinic found and why the bone is considered healed.\n\nExplain what happens to a joint after six weeks in a cast: the stiffness, the weakness, and how quickly it recovers with movement.\n\nExplain why gentle movement now shortens the recovery rather than risking the bone.\n\nBe clear about what is not yet allowed, so the permission has boundaries and the parent is not left guessing.\n\nShow simple activities the child can do at home, and let the child try each one now.\n\nAgree how the parent will encourage them without turning it into a daily argument.\n\nAgree the plan for school, PE and the trampoline, with dates, and arrange the review."
    },
    "guidanceNote": "Speak to the parent's protectiveness, not past it; make the exercises playful and child-led so the parent feels they are helping rather than risking harm."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHYSIOTHERAPY",
    "slug": "spk-physiotherapy-teaching-pacing-to-a-patient-with-persistent-widespread-pain",
    "title": "Physiotherapy — Teaching pacing to a patient with persistent widespread pain",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Persistent pain management physiotherapy service, a follow-up appointment in a group programme.",
      "candidateRole": "You are the physiotherapist working with a patient who has had widespread pain for over two years.",
      "patientRole": "A 44-year-old who cleans the whole house on a good day and then spends two days in bed, has stopped planning anything, and describes life as unpredictable.",
      "patientConcern": "The patient worries that pacing means accepting they will never improve and giving up the active life they used to have.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask them to describe the last good day and the days that followed it.\n\nAsk what a bad day looks like and what they do on one.\n\nAsk what pacing means to them, since the word may already carry a meaning you need to correct.\n\nAcknowledge that stopping while they still feel able is counter-intuitive and genuinely difficult.\n\nExplain the boom-and-bust pattern using their own example rather than a general one.\n\nExplain what an activity baseline is and how it is found, in plain terms.\n\nAddress the fear directly: explain that pacing is a way of increasing activity, not of accepting less.\n\nExplain how the baseline is increased over weeks, so the plan has a direction.\n\nChoose one activity together and work out its baseline now, with a number attached.\n\nAgree how they will stop at the baseline even on a good day, and what will make that hard.\n\nExplain how the baseline is protected on a bad day as well as on a good one.\n\nAgree how it will be recorded and reviewed, and what a setback would mean for the plan."
    },
    "guidanceNote": "Frame pacing as a route back towards valued activities rather than a limitation; pick one concrete, meaningful task to baseline so the concept stays tangible."
  }
];
