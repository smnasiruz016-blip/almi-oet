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
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-advice-letter-to-gp-on-warfarin-to-doac-switch",
    "title": "Medicine — Advice letter to GP on warfarin to DOAC switch",
    "prompt": "Using the case notes, write a letter to the patient's General Practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "ANTICOAGULATION CLINIC — REVIEW\nPatient: Mrs Glenda Pruitt\nAge: 78\nRegistered GP: Dr Imran Saleh, Brookside Surgery\nSeen: 4 September 2026\n\nReason for review:\nRoutine anticoagulation review. Atrial fibrillation, on warfarin for four years with unstable control. Time in therapeutic range 48% over the past twelve months.\n\nRecent INR results:\n14 August 2026 — 1.4\n21 August 2026 — 3.8\n28 August 2026 — 1.6\nFrequent dose changes over the past six months. She has missed four appointments this year and reports that getting to the clinic is difficult since her daughter changed her working hours.\n\nCurrent medications:\nwarfarin, dose variable, currently 3 mg alternating with 4 mg\nbisoprolol 5 mg daily\nfurosemide 40 mg daily\natorvastatin 40 mg at night\n\nAssessment:\nWeight 62 kg. eGFR 44, stable across three readings this year. No mechanical heart valve. No bleeding events at any point on warfarin. HAS-BLED score 2. Blood pressure today 134/78, pulse 76 and irregular.\n\nPast medical history:\nAtrial fibrillation, heart failure with preserved ejection fraction, chronic kidney disease stage 3b, osteoarthritis of both knees.\n\nAllergies:\nSulfonamides — rash.\n\nRecommendation:\nSwitch to apixaban 5 mg twice daily. The reduced dose of 2.5 mg twice daily applies only where two of three criteria are met — age 80 or over, weight 60 kg or less, creatinine 133 or above. She meets one criterion only, so the full dose is appropriate.\n\nMonitoring required:\nRenal function at one month after the switch, then at least annually, and sooner during any intercurrent illness. No routine INR monitoring will be needed.\n\nSocial:\nLives with her daughter, who manages her tablets. Does not drive.\n\nAlso noted today:\nAsked about a flu vaccination. Reports mild hearing loss. Enquired whether she still needs to avoid green vegetables.",
      "recipient": "Dr Imran Saleh, General Practitioner, Brookside Surgery",
      "letterType": "advice",
      "taskInstruction": "Advise the GP on switching the patient from warfarin to a direct oral anticoagulant and the monitoring required."
    },
    "guidanceNote": "This is advisory — state the recommended drug, the dose rationale tied to her parameters, and the renal monitoring schedule. The poor INR control is the justification; keep it concise."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-cardiology-referral-for-new-atrial-fibrillation",
    "title": "Medicine — Cardiology referral for new atrial fibrillation",
    "prompt": "Using the case notes, write a letter to the cardiology outpatient clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "RIVERSIDE SURGERY — REFERRAL\nPatient: Mr Trevor Hale\nAge: 68\nReferred to: Dr Helena Frost, Consultant Cardiologist, Riverside Hospital\nSeen: 4 September 2026\n\nReason for referral:\nNewly diagnosed atrial fibrillation. Assessment and a decision on anticoagulation are requested.\n\nHistory:\nTwo-week history of palpitations, described as a fluttering in the chest, present most days and lasting up to an hour. Breathlessness on climbing stairs, new over the same period. One episode of light-headedness while gardening on 30 August; no loss of consciousness and no fall. No chest pain. No orthopnoea and no ankle swelling.\n\nExamination today:\nPulse 112 and irregularly irregular. Blood pressure 138/86. Chest clear. Heart sounds normal, no murmur. No peripheral oedema. Weight 84 kg, BMI 27.\n\nInvestigations:\nECG today — atrial fibrillation at 110, no acute ischaemic changes, no left ventricular hypertrophy.\nBloods on 2 September — thyroid function normal, urea and electrolytes normal, full blood count normal.\n\nRisk assessment:\nCHA2DS2-VASc score 3, for age, hypertension and a transient ischaemic attack in 2021.\n\nPast medical history:\nHypertension since 2015. Transient ischaemic attack 2021, fully recovered, on no antiplatelet at present. Osteoarthritis of the right hip.\n\nCurrent medications:\namlodipine 5 mg daily\natorvastatin 20 mg at night\n\nAllergies:\nPenicillin — rash.\n\nPlan today:\nStarted bisoprolol 2.5 mg daily for rate control. Not anticoagulated pending your review. Advised to seek help if he develops chest pain or a further blackout.\n\nSocial:\nRetired electrician. Lives with his wife. Non-smoker. Alcohol six units a week. Drives.\n\nAlso mentioned today:\nAsked about a knee injection for his hip pain. Reports occasional heartburn.\nEchocardiogram:\nRequested 2 September 2026, not yet performed. The patient has been given the appointment card for 18 September. A 24-hour tape has not been arranged, as the rhythm is documented on today's ECG. He has been given a written explanation of atrial fibrillation and advised to seek immediate help if he develops chest pain, severe breathlessness or a further blackout.",
      "recipient": "Dr Helena Frost, Consultant Cardiologist, Riverside Hospital Cardiology Clinic",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for assessment of newly diagnosed atrial fibrillation and consideration of anticoagulation."
    },
    "guidanceNote": "Prioritise the CHA2DS2-VASc score and anticoagulation question — that is the reason for referral. Mention the penicillin allergy but omit the osteoarthritis."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-community-mental-health-referral-for-first-episode-depression",
    "title": "Medicine — Community mental health referral for first-episode depression",
    "prompt": "Using the case notes, write a letter to the community mental health team. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "WESTBROOK SURGERY — REFERRAL\nPatient: Ms Rebecca Lyall\nAge: 34\nReferred to: Dr Yusuf Karim, Consultant Psychiatrist, Westbrook Community Mental Health Team\nSeen: 4 September 2026\n\nReason for referral:\nModerate to severe depression with only partial response to a first antidepressant. Specialist assessment and psychological therapy requested.\n\nHistory:\nFour-month history of persistent low mood, present every day and worse in the mornings. Early-morning waking at around four o'clock and unable to return to sleep. Poor appetite with a weight loss of five kilograms over that period. Anhedonia — has stopped seeing friends and has given up a choir she previously attended weekly. Poor concentration, describes reading the same email repeatedly.\n\nRisk assessment today:\nFleeting thoughts of not wanting to be here, described as passing and unwelcome. No active plan, no intent, no preparatory acts. No history of self-harm. Identifies her four-year-old daughter as the reason she would not act. Agreed a safety plan and has been given crisis contact details in writing.\n\nScore:\nPHQ-9 today 18, moderately severe. GAD-7 11.\n\nExamination:\nTearful during the consultation but affect reactive. Well kempt. No psychotic features, no thought disorder, no perceptual disturbance.\n\nPrecipitants:\nRelationship breakdown in April 2026. Her mother died in March 2026 after a short illness.\n\nCurrent medications:\nsertraline 50 mg daily, started 21 August 2026 — partial response only, tolerated without side effects.\n\nPast history:\nNo previous psychiatric contact. No alcohol or drug misuse; drinks rarely.\n\nAllergies:\nNone known.\n\nSocial:\nSingle parent, works as a marketing manager, off work for three weeks. Limited support network locally; her sister lives abroad.\n\nAlso mentioned today:\nAsked about a sick note extension. Reports intermittent migraines, long-standing.\nWhat she has already tried:\nSelf-referred to an online talking-therapy service in June 2026 and completed two sessions before stopping, saying she could not concentrate on the written exercises. Sleeping tablets were not prescribed.",
      "recipient": "Dr Yusuf Karim, Consultant Psychiatrist, Westbrook Community Mental Health Team",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for specialist assessment of moderate-to-severe depression with persistent low mood."
    },
    "guidanceNote": "Document the risk assessment carefully and honestly — passive thoughts without plan, plus protective factors. Include PHQ-9, current treatment and the limited support network."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-discharge-after-community-acquired-pneumonia",
    "title": "Medicine — Discharge after community-acquired pneumonia",
    "prompt": "Using the case notes, write a letter to the patient's General Practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "RIVERSIDE HOSPITAL — DISCHARGE SUMMARY\nPatient: Mrs Doreen Whitfield\nAge: 74\nRegistered GP: Dr Amara Okoye, Lakeside Medical Centre\nAdmitted: 30 August 2026 · Discharged: 4 September 2026\n\nReason for admission:\nRight lower lobe community-acquired pneumonia.\n\nPresentation:\nFour-day history of cough productive of green sputum, fever and increasing breathlessness. Confusion noted by her neighbour on the day of admission, resolved within 24 hours. CURB-65 score 2 on arrival.\n\nObservations on admission:\nTemperature 38.6, oxygen saturation 89% on air, respiratory rate 24, blood pressure 124/72, pulse 104.\n\nInvestigations:\nChest X-ray — right lower lobe consolidation. White cell count 17.2, CRP 186 on admission, falling to 42 on 3 September. Urea 8.1. Blood cultures no growth. Sputum culture no significant growth.\n\nTreatment:\nIntravenous co-amoxiclav from admission, switched to oral after 48 hours. Oxygen via nasal cannulae, weaned by day three. Regular inhalers continued throughout. Intravenous fluids for the first 24 hours.\n\nProgress:\nAfebrile for 48 hours before discharge. Oxygen saturation 95% on air at rest. Mobilising independently on the ward. Eating and drinking normally.\n\nDischarge medications:\noral amoxicillin to complete a seven-day course — three days remaining\ntiotropium inhaler, unchanged\nsalbutamol inhaler as required, unchanged\nmetformin 1 g twice daily, unchanged\n\nPast medical history:\nCOPD, diagnosed 2018. Type 2 diabetes, diagnosed 2014.\n\nAllergies:\nNone known.\n\nFollow-up required:\nRepeat chest X-ray in six weeks to confirm radiological resolution. Review of smoking cessation. Consideration of pneumococcal vaccination if not up to date.\n\nSocial:\nLives alone in a ground-floor flat. Ex-smoker, stopped four months ago. A neighbour checks on her daily.\n\nAlso noted during admission:\nAsked about hospital transport. Long-standing osteoarthritis of both hands.\nInformation given to the patient:\nA copy of the discharge summary and the antibiotic course have been given to her. She has been told to seek help if the breathlessness returns or the fever recurs, and she has the ward number for the next 48 hours.",
      "recipient": "Dr Amara Okoye, General Practitioner, Lakeside Medical Centre",
      "letterType": "discharge",
      "taskInstruction": "Inform the GP of the admission for community-acquired pneumonia and outline the follow-up required."
    },
    "guidanceNote": "The 6-week chest X-ray and antibiotic completion are the key handover items. Keep the admission obs brief — the GP needs the plan, not every number."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-discharge-after-paediatric-asthma-admission",
    "title": "Medicine — Discharge after paediatric asthma admission",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "discharge",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "RIVERSIDE HOSPITAL, PAEDIATRIC WARD — DISCHARGE SUMMARY\nPatient: Mia Holloway\nAge: 7 years\nRegistered GP: Dr Priya Nair, Elmwood Family Surgery\nAdmitted: 31 August 2026 · Discharged: 4 September 2026\n\nReason for admission:\nAcute moderate to severe asthma exacerbation, triggered by a viral upper respiratory tract infection.\n\nOn admission:\nRespiratory rate 38, oxygen saturation 90% on room air, widespread expiratory wheeze, unable to complete sentences, peak flow 55% of predicted. Using accessory muscles. Afebrile.\n\nTreatment given:\nOxygen by face mask. Back-to-back salbutamol nebulisers for the first two hours, then salbutamol via spacer at reducing frequency. Ipratropium for the first 24 hours. Oral prednisolone, three-day course, completed today.\n\nProgress:\nOxygen weaned by day two. Saturation 98% on room air at discharge. Peak flow 85% of predicted. Afebrile throughout. Eating and playing normally on the ward for the past 24 hours.\n\nDischarge medications:\nbeclometasone inhaler 100 mcg twice daily, preventer\nsalbutamol inhaler 100 mcg as required, via spacer\nemollient cream for eczema, unchanged\n\nPast medical history:\nAsthma diagnosed at age four. Previous admission 18 months ago with a similar exacerbation. Eczema since infancy, mild and well controlled.\n\nAllergies:\nNone known.\n\nInhaler technique:\nReviewed with her mother on the ward. Spacer technique demonstrated and returned satisfactorily. The family did not previously own a spacer; one has been supplied.\n\nPlan and follow-up:\nReview at the practice within 48 hours. A written asthma action plan has been supplied and explained. Preventer adherence needs reinforcing — the family reports using it only when symptoms occur. Consider routine asthma clinic review. Smoking cessation advice offered to the household.\n\nSocial:\nLives with her mother and older brother. Her father smokes, outdoors only. No pets. Attends primary school, missed four days.\n\nAlso noted during admission:\nMother asked about swimming lessons. Mia is due a routine dental check.",
      "recipient": "Dr Priya Nair, General Practitioner, Elmwood Family Surgery",
      "letterType": "discharge",
      "taskInstruction": "Hand over post-discharge management and follow-up arrangements following an acute asthma exacerbation in a child."
    },
    "guidanceNote": "Prioritise the discharge medications, the 48-hour review request and the action plan — these are what the GP must act on. The eczema and emollient are minor; mention household smoke exposure as it is relevant to ongoing control. Avoid restating every observation."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-emergency-department-letter-for-acute-coronary-syndrome",
    "title": "Medicine — Emergency department letter for acute coronary syndrome",
    "prompt": "Using the case notes, write a letter to the on-call cardiology registrar. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "HARBOURVIEW HOSPITAL, EMERGENCY DEPARTMENT — URGENT REFERRAL\nPatient: Mr Patrick O'Donnell\nAge: 59\nReferred to: Dr Ravi Chandran, On-call Cardiology Registrar, Coronary Care Unit\nTime of referral: 4 September 2026, 14:20\n\nReason for referral:\nNon-ST-elevation myocardial infarction. Urgent admission and consideration of inpatient angiography requested.\n\nHistory:\nThree-hour history of central crushing chest pain radiating to the left arm and jaw, with sweating and nausea. Onset at rest while sitting in his cab. Pain partially eased with sublingual glyceryl trinitrate given by the ambulance crew, from 9/10 to 6/10. No previous episodes of exertional chest pain.\n\nObservations:\nPulse 96, blood pressure 150/92, oxygen saturation 96% on air, respiratory rate 18, afebrile. Blood glucose 11.4.\n\nECG:\nT-wave inversion in leads V4 to V6. No ST elevation. Sinus rhythm. Repeat at one hour unchanged.\n\nTroponin:\n320 ng/L on arrival; repeat at three hours rising to 640 ng/L.\n\nExamination:\nAnxious and sweating. Chest clear. Heart sounds normal, no murmurs. No raised jugular venous pressure, no peripheral oedema, no signs of heart failure.\n\nTreatment given in the department:\naspirin 300 mg, ticagrelor 180 mg, fondaparinux, sublingual glyceryl trinitrate, morphine 5 mg with an antiemetic.\n\nPast medical history:\nType 2 diabetes since 2019. Hyperlipidaemia. Current smoker, 20 a day for 40 years.\n\nFamily history:\nFather had a myocardial infarction at 55.\n\nAllergies:\nNone known.\n\nSocial:\nLives with his partner. Works as a long-distance lorry driver — there are implications for his fitness to drive that will need to be addressed before discharge.\n\nAlso noted:\nAsked whether his employer will be informed. Reports long-standing lower back pain.\nOther bloods on arrival:\nHaemoglobin 141, creatinine 96, potassium 4.2, HbA1c 68 mmol/mol. Chest X-ray no acute abnormality. Cannulated and on cardiac monitoring since arrival.",
      "recipient": "Dr Ravi Chandran, On-call Cardiology Registrar, Coronary Care Unit, Harbourview Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient urgently for admission and management of a non-ST-elevation myocardial infarction."
    },
    "guidanceNote": "Lead with the diagnostic triad: ischaemic ECG changes, rising troponin and the treatment already given. The occupational driving point is worth a brief mention for the registrar."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-endocrine-referral-for-poorly-controlled-type-2-diabetes",
    "title": "Medicine — Endocrine referral for poorly controlled type 2 diabetes",
    "prompt": "Using the case notes, write a letter to the diabetes specialist clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "GREENFIELD SURGERY — REFERRAL\nPatient: Mrs Felicity Boateng\nAge: 56\nReferred to: Dr Priya Nair, Consultant Endocrinologist, Greenfield Diabetes Centre\nSeen: 4 September 2026\n\nReason for referral:\nPersistent hyperglycaemia despite maximal oral therapy, in the presence of impaired renal function. Specialist guidance on the next agent is requested.\n\nHistory:\nPolyuria and fatigue for two months, worse over the past three weeks. Nocturia three times a night. No visual disturbance. No symptoms of neuropathy. No recent infections.\n\nGlycaemic control:\nHbA1c 86 mmol/mol on 21 August 2026. Previous readings: 72 in March 2026, 64 in September 2025. Home readings mostly 12 to 16 mmol/L before meals.\n\nExamination:\nBMI 34, weight 92 kg, unchanged over the year. Blood pressure 142/88. Feet examined today — no ulcers, no deformity, monofilament sensation intact at all sites, pedal pulses present. Fundoscopy due; last retinal screening September 2025, background changes only.\n\nBloods, 21 August 2026:\neGFR 58, stable. Urine albumin-creatinine ratio 4.5, mildly raised. Liver function normal. Lipids: total cholesterol 5.1.\n\nCurrent medications:\nmetformin 1 g twice daily\ngliclazide 80 mg twice daily\natorvastatin 20 mg at night\nramipril 5 mg daily\n\nPast medical history:\nType 2 diabetes for eight years. Hypertension. Mild diabetic kidney disease.\n\nAllergies:\nNone known.\n\nLifestyle:\nLimited exercise, describes being on her feet at work but doing nothing beyond that. Struggling with diet, particularly during the school term. Non-smoker. Alcohol minimal.\n\nPlan:\nConsidering a GLP-1 receptor agonist or an SGLT2 inhibitor. Specialist guidance requested given the renal function and the current sulfonylurea.\n\nSocial:\nSchoolteacher, works full time. Lives with her husband.\n\nAlso mentioned today:\nAsked about a podiatry appointment. Reports occasional dry eyes.\nAdherence:\nCollects her prescriptions regularly and reports taking all four medicines every day. Describes some gastrointestinal upset with metformin in the past, now settled on the modified-release preparation.",
      "recipient": "Dr Priya Nair, Consultant Endocrinologist, Greenfield Diabetes Centre",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for specialist optimisation of poorly controlled type 2 diabetes and review of treatment options."
    },
    "guidanceNote": "The rising HbA1c, renal function and current medication list drive the referral. Include the eGFR and ACR — they shape which agents are safe."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-gp-referral-for-suspected-dvt",
    "title": "Medicine — GP referral for suspected DVT",
    "prompt": "Using the case notes, write a letter to the on-call medical registrar at the Emergency Assessment Unit. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "ORTEGA — GENERAL PRACTICE, URGENT REFERRAL\nPatient: Mr Daniel Ortega\nAge: 58\nReferred to: Dr Helena Cardoso, On-call Medical Registrar, Riverside Hospital Emergency Assessment Unit\nSeen: 4 September 2026, this morning\n\nReason for referral:\nSuspected deep vein thrombosis with new pleuritic chest discomfort. Urgent assessment and imaging requested today.\n\nHistory:\nThree-day history of progressive swelling, warmth and aching of the right calf, worse on walking. Mild pleuritic right-sided chest discomfort since this morning, sharp and worse on deep inspiration. No cough, no haemoptysis, no syncope.\n\nRisk factors:\nReturned five days ago from a thirteen-hour long-haul flight. Reduced mobility for the past week because of the calf pain. No recent surgery, no known malignancy, no previous thrombosis, no family history of clotting disorder.\n\nObservations today:\nBlood pressure 138/84, pulse 96, respiratory rate 18, oxygen saturation 96% on room air, afebrile.\n\nExamination:\nRight calf tender, warm and oedematous, four centimetres greater in circumference than the left measured 10 cm below the tibial tuberosity. Superficial veins prominent. Chest clear on auscultation, heart sounds normal, no calf erythema suggestive of cellulitis.\n\nWells score:\nHigh probability for deep vein thrombosis.\n\nPast medical history:\nType 2 diabetes for eight years, well controlled, HbA1c 48 in June 2026. Osteoarthritis of the right knee. Appendicectomy aged 19.\n\nCurrent medications:\nmetformin 1 g twice daily\nparacetamol as required\n\nAllergies:\nPenicillin — rash.\n\nPlan:\nUrgent referral today. D-dimer and Doppler ultrasound of the right leg required. A CT pulmonary angiogram should be considered given the chest symptoms. Analgesia continued in the meantime; no anticoagulation started pending assessment.\n\nSocial:\nOffice manager. Ex-smoker, stopped six years ago. Lives with his wife. Drives to work.\n\nAlso mentioned today:\nAsked about travel insurance for a further trip. Reports mild eczema on both elbows.",
      "recipient": "Dr Helena Cardoso, On-call Medical Registrar, Riverside Hospital Emergency Assessment Unit",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for urgent assessment and imaging to exclude a deep vein thrombosis and possible pulmonary embolism."
    },
    "guidanceNote": "Foreground the calf findings, recent long-haul travel and chest symptoms — these drive the urgency. The appendicectomy and osteoarthritis are background; omit them unless space allows. State the penicillin allergy clearly."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-gastroenterology-referral-for-iron-deficiency-anaemia",
    "title": "Medicine — Gastroenterology referral for iron-deficiency anaemia",
    "prompt": "Using the case notes, write a letter to the gastroenterology team. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "ST AIDEN'S — TWO-WEEK-WAIT REFERRAL\nPatient: Mr Colin Radley\nAge: 61\nReferred to: Dr Sanjay Mehta, Consultant Gastroenterologist, St Aiden's Hospital\nSeen: 4 September 2026\n\nReason for referral:\nUnexplained iron-deficiency anaemia with a positive faecal immunochemical test and weight loss. Urgent endoscopic investigation requested.\n\nHistory:\nThree-month history of fatigue and breathlessness on climbing stairs, progressive. No overt rectal bleeding at any point. Intermittent change in bowel habit towards looser stools over the same period, without mucus. No abdominal pain. No vomiting. No dysphagia.\n\nWeight:\nUnintentional loss of four kilograms over three months, from 82 kg to 78 kg. Appetite reported as normal.\n\nExamination:\nPale. Pulse 84, blood pressure 128/76. Abdomen soft, non-tender, no palpable mass, no hepatomegaly. Rectal examination — no mass, no blood on the glove.\n\nInvestigations:\nBloods 28 August 2026 — haemoglobin 88 g/L, MCV 71, ferritin 6, B12 and folate normal, liver function normal, urea and electrolytes normal, coeliac serology negative.\nFaecal immunochemical test 30 August 2026 — positive.\n\nPast medical history:\nHypertension since 2016. Gastro-oesophageal reflux, on long-term acid suppression.\n\nCurrent medications:\nramipril 5 mg daily\nlansoprazole 30 mg daily\nferrous fumarate 210 mg twice daily, started 30 August 2026\n\nAllergies:\nAspirin — wheeze.\n\nFamily history:\nFather diagnosed with bowel cancer at 70. No other relevant family history.\n\nPlan:\nReferring on the two-week-wait pathway for upper gastrointestinal endoscopy and colonoscopy. Oral iron started; he has been told it may darken the stool.\n\nSocial:\nAccountant, works full time. Non-smoker. Alcohol ten units a week. Lives with his wife.\n\nAlso mentioned today:\nAsked about the shingles vaccine. Reports occasional knee pain.\nEarlier results for comparison:\nHaemoglobin was 134 g/L in March 2026 with a normal MCV, so the fall has occurred over six months. No previous endoscopy at any point.",
      "recipient": "Dr Sanjay Mehta, Consultant Gastroenterologist, St Aiden's Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for urgent endoscopic investigation of unexplained iron-deficiency anaemia."
    },
    "guidanceNote": "Flag the red flags clearly — positive FIT, weight loss, family history — as these justify the urgent pathway. The aspirin allergy is relevant; reflux history is contextual."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-geriatric-referral-after-recurrent-falls",
    "title": "Medicine — Geriatric referral after recurrent falls",
    "prompt": "Using the case notes, write a letter to the falls and syncope service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "ELMWOOD SURGERY — REFERRAL\nPatient: Mrs Edith Marlow\nAge: 83\nReferred to: Dr Harriet Cole, Consultant Geriatrician, Falls and Syncope Service, Elmwood Hospital\nSeen: 4 September 2026\n\nReason for referral:\nThree falls in two months. Multifactorial assessment requested.\n\nThe falls:\n12 July 2026 — indoors, in the hallway, tripped on a rug. No injury.\n9 August 2026 — indoors, on standing from a chair, felt dizzy first. Fractured left wrist, treated in a cast, now healed.\n30 August 2026 — outdoors, on the path to the bins, no warning symptoms.\nNo loss of consciousness on any occasion. No palpitations. Able to get up unaided on two of the three occasions.\n\nObservations:\nLying blood pressure 138/80. Standing blood pressure 112/68 at one minute, with light-headedness reported. Pulse 72, regular.\n\nExamination:\nUnsteady gait, uses a single stick indoors and out. Reduced power in both legs, 4/5. Bilateral cataracts, visual acuity not formally tested. Timed up-and-go 18 seconds.\n\nCognition:\nAbbreviated Mental Test Score 8 out of 10, losing points on date and recall.\n\nBloods, 28 August 2026:\nVitamin D low at 28 nmol/L. Urea and electrolytes normal. Full blood count normal. Thyroid function normal. Calcium normal.\n\nCurrent medications:\namlodipine 10 mg daily\nbendroflumethiazide 2.5 mg daily\nzopiclone 7.5 mg at night, taken for three years\nparacetamol as required\n\nPast medical history:\nHypertension, osteoporosis, bilateral cataracts.\n\nAllergies:\nCodeine — nausea.\n\nPlan:\nRequesting medication review with particular attention to the antihypertensives and the hypnotic, gait and balance assessment, and falls-prevention input. Vitamin D replacement started today.\n\nSocial:\nWidow, lives alone in a bungalow. Daughter visits daily. No care package at present. Has a personal alarm but does not wear it.\n\nAlso mentioned today:\nAsked about a hearing test. Enjoys her weekly lunch club.",
      "recipient": "Dr Harriet Cole, Consultant Geriatrician, Falls and Syncope Service, Elmwood Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for multifactorial assessment following recurrent falls."
    },
    "guidanceNote": "Polypharmacy (especially the antihypertensives and zopiclone) and the postural drop are central to the falls workup. Include the fracture history and living situation."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-neurology-referral-for-first-unprovoked-seizure",
    "title": "Medicine — Neurology referral for first unprovoked seizure",
    "prompt": "Using the case notes, write a letter to the first-seizure clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "CENTRAL SURGERY — URGENT REFERRAL\nPatient: Miss Olivia Pearson\nAge: 24\nReferred to: Dr Marcus Lindqvist, Consultant Neurologist, Central First-Seizure Clinic\nSeen: 4 September 2026\n\nReason for referral:\nFirst unprovoked generalised seizure. Urgent assessment requested.\n\nThe event:\nWitnessed generalised tonic-clonic seizure at work on 3 September 2026, at approximately 11:15. Lasted around ninety seconds by a colleague's account. Tongue-biting to the left side and brief urinary incontinence. Post-ictal confusion for twenty minutes, then full recovery. No warning or aura recalled. She has no memory of the event itself.\n\nPreceding circumstances:\nHad slept approximately four hours a night for the previous three nights because of a work deadline. No alcohol in the preceding week. No recreational drug use. No new medication. No febrile illness. No head injury.\n\nExamination today:\nFully recovered. Neurological examination normal — cranial nerves, tone, power, reflexes and coordination all normal. No focal deficit. Cardiovascular examination normal. Blood pressure 118/72.\n\nInvestigations:\nCT head 3 September 2026 — normal.\nBloods — glucose, calcium, magnesium, sodium, full blood count and liver function all normal.\nECG — normal, corrected QT interval within range.\nPregnancy test negative.\n\nPast medical history:\nNothing significant. No febrile convulsions in childhood. No family history of epilepsy.\n\nCurrent medications:\ncombined oral contraceptive pill only.\n\nAllergies:\nLatex — contact dermatitis.\n\nAdvice given:\nAdvised not to drive and to inform the licensing authority; she has been given this in writing. Advised against swimming alone, baths and working at height until reviewed.\n\nPlan:\nAwaiting outpatient EEG and MRI. No anticonvulsant started.\n\nSocial:\nGraphic designer. Lives with her partner. Non-smoker.\n\nAlso mentioned today:\nAsked when she can return to work. Reports occasional tension headaches.\nOccupational note:\nShe works at a screen for long periods and has asked whether this is relevant. She has been told there is no evidence that ordinary screen work provokes seizures, but that the sleep deprivation is likely to have contributed.",
      "recipient": "Dr Marcus Lindqvist, Consultant Neurologist, Central First-Seizure Clinic",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for urgent assessment following a first unprovoked generalised seizure."
    },
    "guidanceNote": "Capture the seizure description and the normal first-line investigations. The driving advice and contraception (relevant to future anticonvulsant choice) should be noted; latex allergy belongs in but is minor."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-paediatric-referral-for-faltering-growth",
    "title": "Medicine — Paediatric referral for faltering growth",
    "prompt": "Using the case notes, write a letter to the paediatric outpatient clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "NORTHGATE SURGERY — REFERRAL\nPatient: Lucas Bramley\nAge: 18 months\nReferred to: Dr Eleanor Vasquez, Consultant Paediatrician, Children's Outpatient Department, Northgate Hospital\nSeen: 4 September 2026\n\nReason for referral:\nFaltering growth with loose stools and strongly positive coeliac serology. Assessment and confirmation requested.\n\nGrowth:\nWeight has fallen from the 50th centile at 12 months to the 9th centile today. Length remains on the 50th centile. Head circumference on the 50th centile. Weights: 9.8 kg at 12 months, 9.9 kg at 15 months, 10.1 kg today.\n\nSymptoms:\nFrequent loose, pale and offensive stools, three to four a day, for around four months. Irritability, particularly in the afternoons. Reduced appetite, noted by his mother since he was weaned onto cereals at around ten months. Abdominal distension.\n\nExamination:\nThin, with reduced subcutaneous fat over the buttocks. Mildly distended abdomen, soft, no organomegaly, no masses. Alert and interactive throughout. No rash. No mouth ulcers.\n\nDevelopment:\nMeeting milestones. Walking independently since 14 months. Six words. Normal hearing screen.\n\nFeeding:\nVaried family diet, includes bread, pasta and breakfast cereal. Cow's milk 400 ml daily. No food refusal beyond normal for age.\n\nInvestigations, 28 August 2026:\nMild iron-deficiency anaemia — haemoglobin 98 g/L, MCV 68, ferritin 8.\nAnti-tissue transglutaminase strongly positive. Total IgA normal.\n\nPast medical history:\nTerm delivery at 39 weeks, birth weight 3.4 kg. No neonatal concerns. Immunisations up to date.\n\nCurrent medications:\nNone regular. Vitamin D drops daily.\n\nAllergies:\nNone known.\n\nFamily history:\nMaternal aunt has coeliac disease.\n\nPlan:\nReferring for confirmation and dietetic input. The family has been advised specifically NOT to remove gluten from his diet before specialist review, as this would affect the results.\n\nSocial:\nLives with both parents and no siblings. No smokers in the household. Attends nursery two days a week.\n\nAlso mentioned today:\nMother asked about a nursery form. He is due his 18-month review.",
      "recipient": "Dr Eleanor Vasquez, Consultant Paediatrician, Children's Outpatient Department, Northgate Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the child for assessment of faltering growth and recurrent loose stools."
    },
    "guidanceNote": "The centile drop, positive anti-TTG and family history are the crux. Note the advice to continue gluten until review — that affects the diagnostic pathway."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-respiratory-referral-for-suspected-lung-malignancy",
    "title": "Medicine — Respiratory referral for suspected lung malignancy",
    "prompt": "Using the case notes, write a letter to the rapid-access lung clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "STONEBRIDGE SURGERY — TWO-WEEK-WAIT REFERRAL\nPatient: Mr Albert Finch\nAge: 66\nReferred to: Dr Wendy Acheampong, Consultant Respiratory Physician, Rapid-Access Lung Clinic, Stonebridge Hospital\nSeen: 4 September 2026\n\nReason for referral:\nSuspicious right upper lobe mass on chest X-ray with haemoptysis, hoarseness and weight loss. Urgent investigation requested.\n\nHistory:\nSix-week history of persistent cough, different in character from his usual COPD cough and not responding to two courses of antibiotics. Two episodes of small-volume haemoptysis, on 22 and 28 August 2026, described as streaks of blood in the sputum. Hoarse voice for three weeks, continuous, with no sore throat.\n\nConstitutional symptoms:\nUnintentional weight loss of five kilograms over two months, from 74 kg to 69 kg. Fatigue, sleeping in the afternoons, which is new. Appetite reduced. No night sweats. No bone pain. No headache.\n\nExamination:\nNo clubbing. Reduced air entry in the right upper zone. No cervical or supraclavicular lymphadenopathy palpable. No superior vena caval obstruction. Chest expansion symmetrical.\n\nInvestigations:\nChest X-ray 1 September 2026 — 3 cm mass in the right upper lobe, no effusion, no bony lesion reported.\nBloods 1 September 2026 — mild anaemia, haemoglobin 112 g/L. Corrected calcium normal at 2.38. Liver function normal. Sodium normal.\n\nPast medical history:\nCOPD, diagnosed 2014. Ex-smoker, 40 pack-years, stopped four years ago. Occupational asbestos exposure as a welder between 1979 and 1994.\n\nCurrent medications:\ntiotropium inhaler once daily\nsalbutamol inhaler as required\n\nAllergies:\nNone known.\n\nFamily history:\nNothing relevant.\n\nPlan:\nReferring under the two-week-wait pathway. CT of the chest and abdomen arranged prior to clinic.\n\nSocial:\nLives with his wife. Retired welder. Drives.\n\nAlso mentioned today:\nAsked about a repeat of his emollient. Reports long-standing hearing loss from occupational noise.\n\nExamination findings today:\nReduced air entry at the right base with dullness to percussion. No clubbing. No palpable cervical or supraclavicular lymphadenopathy. Oxygen saturation 94 per cent on air at rest.\n\nSymptom timeline:\nCough changed in character approximately three months ago. Two episodes of blood-streaked sputum in the past fortnight. Weight down 6 kg over four months, unintentional.\n",
      "recipient": "Dr Wendy Acheampong, Consultant Respiratory Physician, Rapid-Access Lung Clinic, Stonebridge Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient urgently for investigation of a suspicious lung lesion on chest imaging."
    },
    "guidanceNote": "The mass, haemoptysis, hoarseness and weight loss justify the urgent pathway. Asbestos and smoking history are essential context; omit the inhaler doses' fine detail."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-surgical-referral-for-symptomatic-gallstones",
    "title": "Medicine — Surgical referral for symptomatic gallstones",
    "prompt": "Using the case notes, write a letter to the general surgical team. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "FAIRMONT SURGERY — REFERRAL\nPatient: Mrs Anita Sharma\nAge: 45\nReferred to: Mr David Ashworth, Consultant General Surgeon, Upper GI Surgery, Fairmont Hospital\nSeen: 4 September 2026\n\nReason for referral:\nSymptomatic gallstones. Assessment for elective laparoscopic cholecystectomy requested.\n\nHistory:\nThree-month history of recurrent right upper quadrant colicky pain, coming on within an hour of a fatty meal and lasting from thirty minutes to several hours. Two more severe episodes, on 8 August and 27 August 2026, each lasting around four hours with nausea and vomiting. Pain radiates to the right shoulder blade. Between attacks she is entirely well.\n\nAbsent features:\nNo jaundice at any point. No fever or rigors. Stools and urine normal in colour. No weight loss. No change in bowel habit.\n\nExamination today:\nAbdomen soft, mild right upper quadrant tenderness. Murphy's sign negative when settled. No palpable mass. No jaundice. Temperature 36.8. Pulse 76.\n\nInvestigations:\nUltrasound 26 August 2026 — multiple gallstones, largest 12 mm. Gallbladder wall not thickened. Common bile duct not dilated at 4 mm. Liver and pancreas normal.\nBloods 26 August 2026 — liver function normal, amylase normal, full blood count normal, CRP 4.\n\nPast medical history:\nNothing significant. Two previous uncomplicated pregnancies and vaginal deliveries.\n\nCurrent medications:\ncombined oral contraceptive pill\nibuprofen occasionally for headaches\n\nAllergies:\nNone known.\n\nLifestyle:\nBMI 29. Non-smoker. Alcohol four units a week.\n\nPlan:\nReferring for elective laparoscopic cholecystectomy. Advised a low-fat diet in the meantime and to attend urgently if she develops pain with fever, jaundice or persistent vomiting.\n\nSocial:\nWorks shifts as a nurse. Lives with her husband and two children.\n\nAlso mentioned today:\nAsked about occupational health clearance after surgery. Reports occasional lower back pain.\nImpact on work:\nHas taken four days off in the past three months because of the attacks, and finds night shifts particularly difficult as the pain has twice woken her during one.",
      "recipient": "Mr David Ashworth, Consultant General Surgeon, Upper GI Surgery, Fairmont Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for surgical assessment of symptomatic gallstones and consideration of cholecystectomy."
    },
    "guidanceNote": "The biliary colic pattern plus confirmatory ultrasound is what the surgeon needs. Note the normal LFTs and non-dilated duct (no current need for ERCP); the safety-netting advice can be summarised briefly."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "MEDICINE",
    "slug": "wri-medicine-transfer-of-stroke-patient-to-rehabilitation-unit",
    "title": "Medicine — Transfer of stroke patient to rehabilitation unit",
    "prompt": "Using the case notes, write a letter to the rehabilitation unit. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "BROOKHAVEN — TRANSFER SUMMARY\nPatient: Mr Gerald Thompson\nAge: 71\nTransferred to: Dr Ngozi Adeyemi, Consultant in Rehabilitation Medicine, Maple Ward, Brookhaven Rehabilitation Unit\nAdmitted: 23 August 2026 · Transferred: 4 September 2026\n\nReason for transfer:\nInpatient neurorehabilitation following a left middle cerebral artery ischaemic stroke twelve days ago.\n\nPresentation:\nSudden-onset right-sided weakness and difficulty speaking, witnessed by his wife at 07:40 on 23 August. Right facial droop. Arrived within the thrombolysis window.\n\nTreatment:\nThrombolysed at 09:25 on the day of admission. Repeat imaging at 24 hours showed no haemorrhagic transformation. Antiplatelet started at 24 hours.\n\nCurrent status:\nRight arm power 3/5, right leg 4/5. Expressive dysphasia, improving — now using short sentences with occasional word-finding difficulty. Comprehension intact. Swallow assessed by speech and language therapy on 25 August and again on 1 September; safe for a normal diet and thin fluids.\n\nMobility:\nTransfers with the assistance of one. Walks short distances with a frame and one person. Has not attempted stairs.\n\nContinence:\nOccasional urinary urgency, continent with prompting. Bowels regular.\n\nCurrent medications:\nclopidogrel 75 mg daily\natorvastatin 80 mg at night\nramipril 2.5 mg daily\nparacetamol as required\n\nPast medical history:\nHypertension since 2012. Ex-smoker, stopped 2005. No previous stroke or transient ischaemic attack. Atrial fibrillation excluded on prolonged monitoring.\n\nAllergies:\nNone known.\n\nTherapy input to date:\nPhysiotherapy and speech and language therapy started on the ward, daily on weekdays. Occupational therapy assessment completed.\n\nPlan:\nOngoing multidisciplinary rehabilitation. Goals agreed with the patient: independent transfers, and discharge home.\n\nSocial:\nLives with his wife in a two-storey house with the only bathroom upstairs; the stairs are the main concern for discharge planning. Retired postman. Two adult children living locally.\n\nAlso noted:\nAsked about driving. Wears reading glasses.",
      "recipient": "Dr Ngozi Adeyemi, Consultant in Rehabilitation Medicine, Maple Ward, Brookhaven Rehabilitation Unit",
      "letterType": "transfer",
      "taskInstruction": "Transfer the patient for inpatient neurorehabilitation following an ischaemic stroke."
    },
    "guidanceNote": "The receiving team needs the functional status and rehab goals, not the acute thrombolysis detail in depth. Highlight current power, mobility and the home environment."
  }
];
