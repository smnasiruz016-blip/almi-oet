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
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-antidepressant-early-side-effects-and-adherence",
    "title": "Pharmacy — Antidepressant early side effects and adherence",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Private consultation room in a community pharmacy, the patient having asked to speak to the pharmacist.",
      "candidateRole": "You are the pharmacist. The patient started an SSRI ten days ago and says they feel worse rather than better.",
      "patientRole": "A 29-year-old who has felt more anxious and jittery since starting the tablets, has slept badly all week, and intends to stop them this evening.",
      "patientConcern": "The patient is demoralised that the medicine appears to be making things worse and is close to abandoning treatment altogether without telling the prescriber.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they were told when the medicine was started and what they were expecting to feel by now.\n\nAsk exactly what has changed since starting: the jitteriness, the sleep, the appetite, and when in the day it is worst.\n\nAsk what dose they are taking and whether they have missed any.\n\nAsk sensitively whether they have had any thoughts of harming themselves, and take the answer seriously whatever it is.\n\nExplain that a period of increased anxiety in the first two weeks is common and usually settles.\n\nExplain the timescale honestly: that mood benefit typically takes four to six weeks, so ten days is too early to judge.\n\nExplain why stopping abruptly is the worst of the options, including discontinuation symptoms.\n\nExplain what can be done instead: a review of the dose, timing the dose differently, or something short-term to cover the early weeks.\n\nGive clear safety-net advice, including what would mean contacting the surgery today rather than waiting.\n\nAgree what they will do tonight, arrange contact with the GP, and offer to telephone the surgery yourself."
    },
    "guidanceNote": "Normalise the early settling-in period honestly while taking any low-mood or self-harm cues seriously and signposting urgent support."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-child-s-fever-and-correct-paracetamol-dosing",
    "title": "Pharmacy — Child's fever and correct paracetamol dosing",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community pharmacy, at the counter, with a queue behind and the child in a pushchair.",
      "candidateRole": "You are the pharmacist advising a parent whose two-year-old has had a fever since yesterday.",
      "patientRole": "The parent of a two-year-old with a temperature of 38.9 degrees, who has given two doses in four hours and wants something stronger to bring it down quickly.",
      "patientConcern": "The parent is anxious and tempted to double the dose to work faster, and does not realise that this could cause serious harm.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how long the fever has been present and what has been given so far, including exact times and amounts.\n\nAsk how the child is in herself: drinking, wet nappies, alertness, breathing, and whether there is any rash.\n\nAsk whether any other medicine has been given, including combined cold remedies that may already contain paracetamol.\n\nExplain the correct dose for this child's age and weight, and how it is measured with the syringe provided.\n\nExplain the maximum number of doses in twenty-four hours and the minimum gap between them.\n\nExplain plainly why exceeding the dose is dangerous and what paracetamol overdose does, without frightening the parent into giving nothing.\n\nExplain what the medicine is actually for: comfort rather than the number on the thermometer.\n\nAdvise on fluids, clothing and rest, and correct any plan to sponge the child with cold water.\n\nDescribe the specific warning signs that mean the child must be seen urgently, including a non-blanching rash and drowsiness.\n\nAgree what the parent will do over the next few hours and where to go if the child worsens overnight."
    },
    "guidanceNote": "Address the overdose risk gently but clearly; give specific warning signs (drowsiness, rash, breathing difficulty) that warrant urgent care."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-declining-an-otc-request-and-gp-referral",
    "title": "Pharmacy — Declining an OTC request and GP referral",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community pharmacy counter, a Saturday morning, the patient asking for a product by name.",
      "candidateRole": "You are the pharmacist. The patient is requesting an over-the-counter codeine-containing painkiller for daily headaches.",
      "patientRole": "A 41-year-old who has bought the same product roughly every ten days for several weeks, uses it most days, and has an important week at work ahead.",
      "patientConcern": "The patient is frustrated, fears being judged as drug-seeking, and is worried that without it they will not cope; nobody knows how often they are taking it.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the headaches: where, how often, how long they last, and how long this has been going on.\n\nAsk how many days a week they take a painkiller of any kind, and make an honest answer easy to give.\n\nAsk what else they have taken, including anything prescribed and anything containing caffeine.\n\nAsk about red flag features: sudden onset, waking from sleep, weakness, visual change, or a headache that is different from the usual.\n\nExplain that you cannot supply the product today, and give the reason before they have to ask for it.\n\nExplain medication-overuse headache in plain terms: how the treatment becomes the cause, and why taking more makes it worse.\n\nSay clearly that you are not accusing them of anything and that this is a common and reversible pattern.\n\nExplain what recovery involves, including that headaches typically worsen for a period before improving.\n\nRecommend what to do meanwhile, and be honest that stopping is uncomfortable rather than easy.\n\nRefer them to the GP with a specific reason, offer to write a note of what you have found, and agree a date."
    },
    "guidanceNote": "Refuse the supply without sounding accusatory; normalise medication-overuse headache as a common, treatable cause, validate the patient's distress, and frame the GP referral as help rather than punishment."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-emergency-contraception-consultation",
    "title": "Pharmacy — Emergency contraception consultation",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Private consultation room in a community pharmacy, the patient having asked quietly at the counter.",
      "candidateRole": "You are the pharmacist responding to a request for emergency contraception, and you must complete the consultation before any supply is made.",
      "patientRole": "A 22-year-old who is anxious and embarrassed, wants the matter dealt with as quickly as possible, and is not using any regular contraception.",
      "patientConcern": "The patient fears being judged and wants only to leave with the pill; ongoing contraception has not been considered at all.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Begin by setting the tone: explain that the conversation is confidential, that you need some information, and that you are not there to judge.\n\nAsk when the unprotected intercourse occurred, as precisely as possible, since the timing determines the options.\n\nAsk where they are in their cycle and when their last period was.\n\nAsk about any regular medication, including enzyme-inducing drugs, and about liver problems, asthma and body weight.\n\nAsk whether there has been any other episode of unprotected intercourse in this cycle.\n\nExplain the available options, including the copper coil, and be honest about which is the most effective.\n\nExplain how and when to take the chosen method, and what to do if vomiting occurs within a few hours.\n\nExplain what to expect afterwards: the next period, when to test, and that this does not protect for the rest of the cycle.\n\nRaise ongoing contraception without lecturing, and explain what is available and where.\n\nOffer sexual health testing and signpost the service, then agree what they will do and confirm they know when to seek advice."
    },
    "guidanceNote": "Set a calm, non-judgemental tone early; ask only the clinically necessary questions and explain why each one matters."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-inhaled-steroid-and-oral-thrush-worry",
    "title": "Pharmacy — Inhaled steroid and oral thrush worry",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community pharmacy, at the counter, the patient having come in to buy a mouthwash.",
      "candidateRole": "You are the pharmacist. The patient uses a preventer inhaler and describes a sore mouth with white patches.",
      "patientRole": "A 38-year-old with asthma who has had the symptoms for a fortnight, has stopped the preventer for two days already, and finds the taste unpleasant.",
      "patientConcern": "The patient is ready to abandon the preventer inhaler altogether, not realising that this risks losing asthma control entirely.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the mouth symptoms are: where, how long, whether it is painful, and whether it affects eating.\n\nAsk exactly how the inhaler is used, including whether a spacer is used and what happens after each dose.\n\nAsk to see the technique rather than take the description on trust.\n\nAsk about the asthma itself: reliever use, night waking, and whether the preventer has already been stopped.\n\nExplain the likely link between the inhaled steroid and oral candidiasis, and why it happens.\n\nAdvise on rinsing and spitting after every dose, and on cleaning the mouth, as the routine measure that prevents recurrence.\n\nDiscuss whether a spacer would help and demonstrate how it changes where the drug lands.\n\nExplain the treatment for the thrush itself and what needs a prescription.\n\nExplain clearly why the preventer should not simply be stopped, in terms of what happens to the airway over weeks.\n\nExplain when the mouth symptoms should improve and what would mean returning rather than waiting.\n\nAgree a plan: treat the mouth, correct the technique, restart the preventer, and arrange a review with the asthma nurse."
    },
    "guidanceNote": "Solve the side effect with a simple technique change before the patient decides to stop a medicine that protects them."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-managing-a-viral-sore-throat-without-antibiotics",
    "title": "Pharmacy — Managing a viral sore throat without antibiotics",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community pharmacy counter, mid-afternoon, the patient having asked outright for antibiotics.",
      "candidateRole": "You are the pharmacist. The patient has had a sore throat for three days and wants antibiotics.",
      "patientRole": "A 31-year-old with a sore throat, mild cough and a runny nose, no fever, who is giving a presentation at a conference in two days.",
      "patientConcern": "The patient has an event they cannot miss and is convinced that only antibiotics will get them well in time.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the symptoms: when they started, whether there is a cough, a runny nose, a fever, or difficulty swallowing.\n\nAsk whether they can open their mouth fully and drink normally, and about any voice change or drooling.\n\nAsk about their general health, any medication, and any allergy.\n\nAsk what the presentation involves and what they actually need to be able to do in two days.\n\nExplain what the pattern of symptoms suggests, and why a cough and runny nose point away from a bacterial cause.\n\nExplain what antibiotics would and would not do here, including the effect on duration, honestly rather than dismissively.\n\nExplain why antibiotics are not available without a prescription and why that rule exists.\n\nRecommend what will genuinely help: analgesia at proper doses, fluids, lozenges, and voice rest before the event.\n\nGive a realistic expectation of the timeline, so that the plan can be built around a voice that may still be hoarse.\n\nGive clear safety-net advice on when to see a GP urgently, and agree what they will do today."
    },
    "guidanceNote": "Validate the patient's wish to recover quickly, then explain antibiotic resistance simply; give a clear timeframe for seeking further help."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-methotrexate-weekly-dosing-safety-check",
    "title": "Pharmacy — Methotrexate weekly dosing safety check",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Consultation room in a community pharmacy, during a new medicine service appointment.",
      "candidateRole": "You are the pharmacist dispensing methotrexate for a patient with rheumatoid arthritis.",
      "patientRole": "A 49-year-old who started methotrexate three weeks ago, has taken one tablet every day since, and mentions it in passing while talking about the joints.",
      "patientConcern": "The patient believed daily dosing would work faster and has no idea that the regimen taken could be life-threatening.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Establish calmly and precisely how the medicine has been taken: which days, how many tablets, and since when.\n\nRepeat it back to confirm, without showing alarm that would stop them talking.\n\nAsk what they were told when it was started and what the label on the previous supply said.\n\nAsk about symptoms now: mouth ulcers, sore throat, fever, bruising, nausea, breathlessness or rash.\n\nExplain plainly that methotrexate is a once-weekly medicine and that daily dosing is dangerous, without blaming them.\n\nExplain what the risk actually is, in terms of the blood count, the mouth and the liver, so the urgency is understood.\n\nTell them to take no further doses until they have been assessed.\n\nContact the prescriber or the out-of-hours service now, while they are with you, and say what you are doing and why.\n\nExplain what will happen next, including an urgent blood test, and where they should go today.\n\nExplain the folic acid, the weekly day, the monitoring booklet and the warning signs for the future, and record the incident."
    },
    "guidanceNote": "Stay composed to avoid alarming the patient while conveying genuine urgency; confirm the exact number of tablets taken before advising next steps."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-new-inhaler-technique-and-adherence",
    "title": "Pharmacy — New inhaler technique and adherence",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Consultation room in a community pharmacy, a new medicine service appointment for a first preventer inhaler.",
      "candidateRole": "You are the pharmacist. The patient has been newly diagnosed with asthma and given a corticosteroid preventer inhaler alongside a reliever.",
      "patientRole": "A 34-year-old newly started on a brown preventer inhaler in addition to a blue reliever, who has read about steroids online and intends to use it only when breathless.",
      "patientConcern": "The patient believes inhaled steroids cause weight gain and weak bones and plans to use the preventer as a second reliever.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient understands about the two inhalers and what the doctor told them.\n\nAsk what they have read about steroids and what specifically concerns them.\n\nExplain the difference between the two inhalers in terms of what each does and how quickly.\n\nExplain what inhaled means: how much reaches the lung, how little reaches the rest of the body, and how that differs from steroid tablets.\n\nAddress weight gain and bone density directly with what the evidence shows for inhaled doses of this size.\n\nExplain why the preventer works only when taken every day, in terms of the inflammation that persists on good days.\n\nDemonstrate the technique, then ask them to show you, and correct what needs correcting.\n\nExplain rinsing and spitting after each dose and why it matters.\n\nAgree a daily routine anchored to something they already do, and discuss how they will notice a missed dose.\n\nAgree what good control looks like, arrange the follow-up call, and explain what to do if the reliever is needed more often."
    },
    "guidanceNote": "Draw out the patient's worry about daily steroids before reassuring; acknowledge the fear, explain that inhaled doses are low and act locally, and reach a shared plan rather than simply instructing."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-polypharmacy-review-for-an-older-patient",
    "title": "Pharmacy — Polypharmacy review for an older patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Consultation room in a community pharmacy, a booked medicines use review.",
      "candidateRole": "You are the pharmacist conducting a medicines use review with a patient taking nine regular medicines.",
      "patientRole": "A 78-year-old who takes tablets at four different times of day, cannot open two of the containers easily, and admits to skipping doses to have a rest from them.",
      "patientConcern": "The patient feels swamped by the number of tablets and quietly fears that nobody is looking at the whole list rather than one item at a time.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask the patient to describe an ordinary day and where each medicine fits into it.\n\nAsk which ones cause the most difficulty, and why: timing, size, taste, packaging or side effects.\n\nAsk which doses get missed, and make it easy to give a truthful number rather than a polite one.\n\nCheck their understanding of what each medicine is for, and note the ones they cannot account for.\n\nAsk specifically about side effects they may have accepted as ageing: dizziness, tiredness, constipation and falls.\n\nAcknowledge that nine medicines is a genuine burden, and do not treat missed doses as simple non-compliance.\n\nExplain which medicines matter most if a day goes wrong, and which are less time-critical.\n\nDiscuss practical aids: a dosette box, larger labels, easy-open caps, alarms, and synchronising the prescription dates.\n\nIdentify the items to raise with the GP for possible review or deprescribing, and say why each is on the list.\n\nAgree what you will write to the surgery, what the patient will do meanwhile, and when you will speak again."
    },
    "guidanceNote": "Prioritise the patient's lived difficulty over a medicine-by-medicine lecture; agree a small number of realistic next steps."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-smoking-cessation-with-nicotine-replacement",
    "title": "Pharmacy — Smoking cessation with nicotine replacement",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Stop-smoking service room within a community pharmacy, a first appointment.",
      "candidateRole": "You are the pharmacist supporting a patient who wants to stop smoking and is asking about patches and gum.",
      "patientRole": "A 45-year-old who smokes twenty a day, lights the first within ten minutes of waking, and has relapsed twice before, once at four months.",
      "patientConcern": "The patient feels like a failure after the previous relapses and expects to fail again, which is quietly undermining the attempt before it begins.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the current smoking pattern: how many, the first of the day, and the situations that always involve a cigarette.\n\nAsk about the previous attempts: what was used, how long each lasted, and what happened at the point of relapse.\n\nReframe the previous attempts as information rather than failure, and say what four months actually demonstrates.\n\nAsk what has prompted this attempt now and what would make it different.\n\nExplain how nicotine replacement works and why combining a patch with a faster-acting product suits a dependence of this level.\n\nExplain the dosing of each, including how to use the gum or spray properly, since most people use them wrongly.\n\nSet honest expectations about withdrawal: what it feels like, when it peaks, and how long it lasts.\n\nDiscuss the specific high-risk situations they named, and plan for each rather than in general.\n\nAgree a quit date and what happens to the cigarettes and lighters before it.\n\nArrange the follow-up appointments, explain the carbon monoxide check, and agree that a slip is a reason to return."
    },
    "guidanceNote": "Reframe past attempts as useful practice rather than failures; build a concrete plan and a follow-up point so the patient does not feel left alone."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-starting-metformin-for-newly-diagnosed-type-2-diabetes",
    "title": "Pharmacy — Starting metformin for newly diagnosed type 2 diabetes",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Consultation room in a community pharmacy, a new medicine service appointment on collection of the first prescription.",
      "candidateRole": "You are the pharmacist dispensing a first prescription for metformin 500 mg to a newly diagnosed patient.",
      "patientRole": "A 54-year-old who was told the diagnosis by telephone last week, feels entirely well, and questions whether the blood test could have been wrong.",
      "patientConcern": "The patient feels healthy and half believes the diagnosis is a mistake, so intends to leave the tablets in the cupboard just in case.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have been told about the diagnosis and what they understood from the telephone call.\n\nAsk what they think about it, and let the doubt be spoken rather than left unaddressed.\n\nExplain what the blood test measures and why the diagnosis does not depend on how they feel.\n\nExplain what type 2 diabetes does silently over years, using the eyes, kidneys and feet rather than abstract risk.\n\nExplain what metformin does and, importantly, what it is not: it is not insulin and not a last resort.\n\nExplain how and when to take it, with or after food, and why the dose starts low and increases.\n\nWarn about the common gastrointestinal effects, that they usually settle within a fortnight, and what to do if they do not.\n\nExplain the modified-release option if the side effects persist, so they know there is somewhere to go.\n\nExplain the checks that come with the diagnosis: HbA1c, retinal screening, foot checks and kidney function.\n\nAgree what they will do this week, offer a follow-up call, and check they know who to contact with problems."
    },
    "guidanceNote": "Acknowledge that feeling well is genuinely good news before explaining why early treatment still matters; avoid implying the patient was careless."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-statin-side-effect-concern-and-stopping-the-tablet",
    "title": "Pharmacy — Statin side-effect concern and stopping the tablet",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community pharmacy counter, the patient having come in for a different item and mentioned it in passing.",
      "candidateRole": "You are the pharmacist. The patient stopped their statin a week ago because of aching legs and does not intend to restart.",
      "patientRole": "A 62-year-old with a previous myocardial infarction who has had aching thighs for a month, has been doing more gardening, and has read that statins cause permanent muscle damage.",
      "patientConcern": "The patient is frightened by online accounts of permanent muscle damage and trusts them more than the prescriber who has not explained anything.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the aching: where exactly, when it started, whether it is symmetrical, and whether it has improved since stopping.\n\nAsk what else changed around the time it began, including activity, other new medicines and any illness.\n\nAsk about dark urine and about any weakness rather than ache, so that a serious cause is not missed.\n\nAsk when the statin was started and whether the dose has changed recently.\n\nExplain that muscle aches are common and that most are not caused by the statin, without dismissing what they feel.\n\nExplain what genuine statin myopathy looks like and how rare the serious form is.\n\nExplain why the statin was prescribed in their particular case, given the previous heart attack, and what stopping it means for risk.\n\nAddress the online accounts directly rather than around them, and say what the evidence shows.\n\nExplain the options a review could offer: a blood test, a lower dose, a different statin, or a break with a rechallenge.\n\nRecommend a GP review within a defined time, offer to write a note, and agree what they will do until then."
    },
    "guidanceNote": "Take the symptoms seriously rather than dismissing online fears; explain the difference between common minor aches and red-flag features needing urgent review."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-suspected-medication-error-on-a-repeat-prescription",
    "title": "Pharmacy — Suspected medication error on a repeat prescription",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community pharmacy counter, a busy Monday morning, the patient waiting for a repeat prescription.",
      "candidateRole": "You are the pharmacist. The repeat prescription shows the patient's antihypertensive at double the strength they have taken for a year.",
      "patientRole": "A 63-year-old who has come in on the way to work, wants the usual tablets, and is visibly irritated at being kept waiting.",
      "patientConcern": "The patient assumes this is needless bureaucracy and is annoyed at being delayed over what seems to them a clerical fuss.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain immediately why you have stopped, so the delay has a reason rather than feeling like obstruction.\n\nShow them the strength on the prescription and the strength on their previous supply.\n\nAsk whether anyone has recently changed the dose, and whether they have had a review or a hospital appointment.\n\nAsk how they have been feeling, and about dizziness, and check the blood pressure if they will let you.\n\nExplain what a doubled dose could do, briefly and without alarm, so the check is clearly in their interest.\n\nAcknowledge the inconvenience directly and apologise for the time, without apologising for the check itself.\n\nExplain what you are going to do now: contact the prescriber, and how long that is likely to take.\n\nOffer a safe interim plan so they are not left without treatment, including an emergency supply at the established dose.\n\nAgree how they will be told the outcome, and by what time today.\n\nExplain that the discrepancy will be reported so that the record is corrected, and confirm what they should take tonight."
    },
    "guidanceNote": "Frame the check as protecting the patient, not doubting them; offer a concrete plan so the delay does not feel like simply being sent away empty-handed."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-travel-advice-for-a-patient-with-diabetes",
    "title": "Pharmacy — Travel advice for a patient with diabetes",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Consultation room in a community pharmacy, a booked appointment a week before a long-haul flight.",
      "candidateRole": "You are the pharmacist. The patient has insulin-treated diabetes and is flying long-haul next week across several time zones.",
      "patientRole": "A 41-year-old on a basal-bolus regimen flying overnight to a destination eight hours ahead for two weeks, who has never travelled across time zones on insulin.",
      "patientConcern": "The patient is quietly worried about getting the timing wrong mid-flight and having a hypoglycaemic episode far from any help.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the trip: the flight time, the direction of travel, the time difference, and how long they are staying.\n\nAsk about their current regimen: which insulins, doses, timing, and how they monitor.\n\nAsk what they have already been told and what they have arranged.\n\nAdvise on carrying all insulin in hand luggage and never in the hold, and explain why.\n\nAdvise on keeping supplies cool, on the cool wallet, and on what heat does to insulin at the destination.\n\nExplain the principle for adjusting doses across time zones, and be honest that the detail must come from the diabetes team.\n\nAdvise on taking at least twice the supplies needed, split between two bags, plus spare needles and test strips.\n\nAdvise on the prescriber's letter for security, and on what documentation to carry.\n\nExplain hypoglycaemia in the specific context of a flight: what to carry, when to test, and what to do.\n\nAgree what they will confirm with the diabetes team before travelling, and give written advice and travel insurance guidance."
    },
    "guidanceNote": "Give practical, ordered advice the patient can remember; emphasise carrying spares and fast-acting sugar rather than overloading them with detail."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "PHARMACY",
    "slug": "spk-pharmacy-warfarin-and-a-new-over-the-counter-painkiller-request",
    "title": "Pharmacy — Warfarin and a new over-the-counter painkiller request",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community pharmacy counter, the patient holding a box of ibuprofen taken from the shelf.",
      "candidateRole": "You are the pharmacist. The patient takes long-term warfarin and wants to buy ibuprofen for knee pain.",
      "patientRole": "A 67-year-old with atrial fibrillation on warfarin for six years, with painful osteoarthritic knees, who has used ibuprofen on and off for twenty years.",
      "patientConcern": "The patient is in real discomfort, thinks the pharmacist is being overcautious, and is convinced paracetamol will not be strong enough.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the knee pain: how long, how bad, what makes it worse, and what has helped before.\n\nAsk what else they take, including any aspirin, and when the last INR check was.\n\nAsk whether they have had any indigestion, black stools or unusual bruising.\n\nAcknowledge that the pain is real and that you are not dismissing it.\n\nExplain the interaction plainly: what ibuprofen does to the stomach lining and to the effect of warfarin.\n\nExplain what the combined risk actually is, in terms of a bleed that would need hospital treatment.\n\nRecommend paracetamol at a proper regular dose rather than as needed, and explain why that is not the same as what they may have tried.\n\nSuggest topical anti-inflammatory gel and non-drug measures for the knee, and explain the difference in absorption.\n\nExplain what to do if the pain remains uncontrolled, including the anticoagulation clinic and the GP.\n\nManage the frustration without backing down, and agree what they will take today and who they will speak to this week."
    },
    "guidanceNote": "Name the specific risk (internal bleeding) in plain language; offer a concrete alternative rather than only refusing the request."
  }
];
