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
    "profession": "NURSING",
    "slug": "wri-nursing-advice-letter-to-carer-following-copd-exacerbation-discharge",
    "title": "Nursing — Advice letter to carer following COPD exacerbation discharge",
    "prompt": "Using the case notes, write a letter to the patient's carer. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "RESPIRATORY WARD — DISCHARGE RECORD\nPatient: Mr Kofi Mensah\nAge: 75\nLetter to: Mr Joseph Mensah, son and main carer\nAdmitted: 18 June 2026 · Discharged: 26 June 2026\n\nReason for admission:\nAcute exacerbation of COPD with a chest infection. Third admission this year; the previous two were in January and April 2026.\n\nOn admission:\nOxygen saturation 84% on air, respiratory rate 28, temperature 38.1, purulent green sputum. Chest X-ray showed no consolidation. CRP 68.\n\nTreatment given:\nOral antibiotics, a seven-day course of prednisolone, nebulised bronchodilators, and controlled oxygen at a target saturation of 88 to 92%. Physiotherapy for sputum clearance.\n\nProgress:\nBreathing returned to his baseline by day six. Saturations now 90 to 92% on air, which is his normal range. Productive cough clearing. Eating better; ate a full meal on each of the last three days.\n\nPast medical history:\nSevere COPD, diagnosed 2013. Ex-smoker, stopped five years ago. Mild heart failure. Osteoarthritis of both knees.\n\nMedications on discharge:\ntiotropium inhaler once daily\nsalbutamol inhaler as required\nprednisolone — two doses remaining\nantibiotic — three days remaining\nfurosemide 20 mg each morning\nhome oxygen, 1 litre overnight\n\nAllergies:\nNone known.\n\nOxygen safety:\nEquipment delivered to the flat on 25 June. No smoking anywhere near the oxygen, and no naked flames, candles or paraffin-based creams. The fire service has been notified.\n\nWarning signs to watch for:\nIncreasing breathlessness at rest, a change in the colour or amount of sputum, fever, or new confusion. Any of these needs same-day contact.\n\nPlan:\nComplete both courses. Inhaler technique reinforced with the son on the ward. GP review in one week. Pulmonary rehabilitation referral pending.\n\nSocial:\nLives with his son, who provides daily care. Ground-floor flat. Uses a perching stool at the sink. Enjoys listening to the radio.\n\nAlso noted:\nAsked about a bus pass renewal. Due a dental appointment.",
      "recipient": "Mr Joseph Mensah, son and main carer of Mr Kofi Mensah",
      "letterType": "advice",
      "taskInstruction": "Write a letter advising the carer on home management and warning signs after his father's COPD admission."
    },
    "guidanceNote": "Write supportively for a lay carer: medication completion, inhaler use, oxygen safety and the warning signs to act on. The radio hobby and knee osteoarthritis are not relevant to managing the COPD at home."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-discharge-advice-for-new-mother-and-newborn-postnatal-ward",
    "title": "Nursing — Discharge advice for new mother and newborn (postnatal ward)",
    "prompt": "Using the case notes, write a letter to the community midwife. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "POSTNATAL WARD — DISCHARGE AND HANDOVER\nPatient: Mrs Amina Yusuf\nAge: 29\nLetter to: Ms Fiona Doyle, Community Midwife\nDelivered: 24 June 2026 · Discharged: 26 June 2026\n\nDelivery:\nNormal vaginal birth at 39 weeks and 2 days. Healthy girl, birth weight 3.4 kg. Second stage 45 minutes. Blood loss at delivery 250 ml.\n\nMaternal status:\nFirst-degree perineal tear, not sutured, healing well and reviewed today. Mild after-pains, controlled with paracetamol. Passing urine normally, bowels opened on day two. Observations stable throughout: temperature 36.8, pulse 78, blood pressure 112/70 today.\n\nFeeding:\nBreastfeeding established. Latch assessed as good on three occasions by two different midwives. Feeding eight to ten times in 24 hours. No nipple trauma.\n\nMood:\nSlightly tearful on day two, which she attributes to tiredness. Bonding well and holding the baby readily. No features suggestive of postnatal depression; Edinburgh score not indicated at this stage but mood should be reviewed at the home visit.\n\nObstetric history:\nFirst baby. Uncomplicated pregnancy. Gestational glucose tolerance test normal at 28 weeks. Booking haemoglobin 108, hence iron.\n\nBaby:\nFeeding well. Passed meconium at 6 hours and urine at 8 hours. Mild physiological jaundice appearing on day two, bilirubin below the treatment line and not requiring phototherapy. Newborn screening completed 26 June. Vitamin K given at birth with consent. Birth weight regained to 3.28 kg today.\n\nMedications:\nparacetamol as required\nferrous sulphate 200 mg daily\n\nAllergies:\nNone known.\n\nPlan:\nCommunity midwife home visit within 48 hours. Monitor the baby's jaundice and feeding. Weigh the baby. Check maternal mood and perineal healing.\n\nSocial:\nLives with her husband. Supportive extended family nearby. First language Somali, English good. Was a teacher before maternity leave.\n\nAlso noted:\nAsked about registering the birth. Enquired about baby massage classes.",
      "recipient": "Ms Fiona Doyle, Community Midwife",
      "letterType": "advice",
      "taskInstruction": "Write a handover letter requesting community follow-up of a new mother and her newborn."
    },
    "guidanceNote": "Keep it warm and clear for a routine postnatal handover. Focus on feeding, jaundice monitoring, perineal healing and mood. The mother's former occupation is not relevant to ongoing care."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-discharge-advice-to-parents-of-an-asthmatic-child-paediatric-ward",
    "title": "Nursing — Discharge advice to parents of an asthmatic child (paediatric ward)",
    "prompt": "Using the case notes, write a letter to the patient's parents. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "PAEDIATRIC WARD — DISCHARGE ADVICE\nPatient: Lily Tran\nAge: 6 years\nLetter to: Mr and Mrs Tran, parents\nAdmitted: 23 June 2026 · Discharged: 26 June 2026\n\nReason for admission:\nAcute asthma exacerbation triggered by a chest infection.\n\nOn admission:\nRespiratory rate 34, oxygen saturation 91% on air, widespread wheeze, speaking in short phrases only. Temperature 37.9. Peak flow not attempted on arrival.\n\nTreatment given:\nNebulised salbutamol, initially back-to-back then reducing. Oral prednisolone, five-day course. Oxygen for the first 24 hours. Responded well from day two.\n\nCurrent status:\nAfebrile for 48 hours. Oxygen saturation 98% on air. Chest clear on auscultation this morning. Playing normally on the ward and eating a full diet.\n\nPast medical history:\nAsthma diagnosed at age four. Two previous emergency department presentations, most recently December 2025. Eczema as an infant, now resolved.\n\nMedications on discharge:\nsalbutamol inhaler with spacer, as required\nbeclometasone preventer inhaler, twice daily\nprednisolone — two doses remaining\n\nAllergies:\nNone known.\n\nTechnique:\nSpacer technique demonstrated to her mother and returned correctly. The family did not have a spacer before this admission; one has been supplied with a new mask.\n\nWarning signs to return:\nBreathing that gets worse rather than better, lips or face turning blue, too breathless to talk or eat, or needing the reliever more often than every four hours. Any of these means an emergency call rather than an appointment.\n\nPlan:\nContinue the preventer inhaler every day, including when she is well. Complete the steroid course. GP review in one week. A written asthma plan has been given to the parents.\n\nSocial:\nLives with both parents and one younger sibling. Attends primary school; has missed three days. The family has a pet cat that sleeps in her room.\n\nAlso noted:\nParents asked about swimming. Due a routine eye test.",
      "recipient": "Mr and Mrs Tran, parents of Lily Tran",
      "letterType": "advice",
      "taskInstruction": "Write a letter advising the parents on home management and warning signs following their daughter's asthma admission."
    },
    "guidanceNote": "Use plain, reassuring language for parents. Focus on inhaler routine and the warning signs that mean returning to hospital. Past eczema is resolved and not relevant to ongoing care."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-discharge-to-community-nurse-leg-ulcer",
    "title": "Nursing — Discharge to community nurse (leg ulcer)",
    "prompt": "Using the case notes, write a letter to the community nurse who will continue this patient's care after discharge. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "discharge",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "WARD 4 — DISCHARGE AND HANDOVER\nPatient: Mr George Hill\nAge: 74\nLetter to: Ms R. Okafor, Community Nursing Team, Riverside Health Centre\nAdmitted: 18 June 2026 · Discharged: 26 June 2026\n\nReason for admission:\nCellulitis of the left lower leg, arising over a chronic venous ulcer present for around eight months.\n\nOn admission:\nSpreading erythema to mid-calf, marked on the skin. Temperature 38.4, pulse 98, CRP 112. White cell count 15.6.\n\nTreatment:\nIntravenous antibiotics for four days, then switched to oral with five days remaining at discharge. Daily wound dressing with a foam dressing. Leg elevated. Compression bandaging withheld during the acute infection and resumed on 24 June once the cellulitis had settled.\n\nCurrent wound status:\nUlcer on the medial gaiter area, approximately 3 cm in diameter, clean and granulating, moderate exudate, no slough or necrotic tissue. Surrounding skin dry with some scaling. Erythema now confined within the original marking, which has receded by around 5 cm.\n\nObservations at discharge:\nAfebrile for 72 hours. CRP 24. Pedal pulses palpable. Ankle-brachial pressure index 1.0, recorded 20 June, so compression is appropriate.\n\nMobility:\nIndependent with a stick. Manages stairs slowly.\n\nPast medical history:\nChronic venous insufficiency. Varicose veins. Type 2 diabetes, diet controlled. Hypertension.\n\nMedications:\noral antibiotic — five days remaining\namlodipine 5 mg daily\nparacetamol as required\nemollient twice daily\n\nAllergies:\nPenicillin — rash.\n\nPlan:\nContinue the oral antibiotic to completion. Redress every 48 hours. Maintain compression. GP review in two weeks. Refer to tissue viability if the ulcer has not reduced in size within four weeks.\n\nSocial:\nLives alone in a ground-floor flat. Daughter visits daily and does his shopping.\n\nAlso noted:\nAsked about a stairlift assessment. Reports poor sleep on the ward.",
      "recipient": "Ms R. Okafor, Community Nursing Team, Riverside Health Centre",
      "letterType": "discharge",
      "taskInstruction": "Write a discharge letter handing over this patient's wound care and follow-up to the community nursing team."
    },
    "guidanceNote": "A discharge letter hands over care. Lead with what the community nurse must do next; include allergies and the follow-up plan; leave out admission detail that doesn't affect ongoing care."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-discharge-to-community-nurse-following-cellulitis-treatment",
    "title": "Nursing — Discharge to community nurse following cellulitis treatment",
    "prompt": "Using the case notes, write a letter to the community nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "discharge",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "WARD 7 — DISCHARGE TO OUTPATIENT ANTIBIOTIC PATHWAY\nPatient: Mrs Beverley Hartley\nAge: 66\nLetter to: Ms Rachel Obi, Community Nursing Team\nAdmitted: 22 June 2026 · Discharged: 26 June 2026\n\nReason for admission:\nCellulitis of the right lower leg following an insect bite sustained while gardening on 19 June.\n\nOn admission:\nErythema from the ankle to below the knee, hot and tender, outline marked in pen. Temperature 38.2, pulse 102. CRP 96, white cell count 14.1. No abscess on ultrasound.\n\nTreatment:\nIntravenous flucloxacillin from admission. Leg elevated for most of each day. Analgesia as required.\n\nProgress:\nRedness and swelling reduced markedly by day three. Pain settled. Afebrile for 48 hours before discharge. CRP down to 31.\n\nCurrent status:\nRight calf still mildly warm and pink but clearly improving. The affected area remains within the original marking, which has been redrawn today for community comparison. No blistering, no ulceration, no skin breakdown. Mobile with one stick.\n\nPast medical history:\nType 2 diabetes, well controlled, HbA1c 46 in April 2026. Varicose veins. Hypertension. Hysterectomy 1998.\n\nMedications:\nintravenous flucloxacillin — five days remaining, to be given in the community\nmetformin 1 g twice daily\namlodipine 5 mg daily\nparacetamol as required\n\nAllergies:\nA penicillin allergy was queried on a previous admission and has since been formally excluded. She tolerates flucloxacillin without difficulty. The record has been corrected.\n\nPlan:\nCommunity nurse to administer the daily intravenous antibiotic. Monitor the markings for any spread. Encourage leg elevation for at least two hours in the afternoon. Review urgently if fever returns or the redness extends beyond the line.\n\nSocial:\nLives with her husband. Daughter lives nearby. Keen gardener and anxious to get back to it.\n\nAlso noted:\nAsked about insect repellent. Due a routine mammogram invitation.",
      "recipient": "Ms Rachel Obi, Community Nursing Team",
      "letterType": "discharge",
      "taskInstruction": "Write a discharge letter requesting completion of intravenous antibiotics at home and wound monitoring."
    },
    "guidanceNote": "Make the IV antibiotic schedule and cellulitis monitoring the core. Note the penicillin query was resolved. The 1998 hysterectomy is irrelevant; the gardening explains the bite but elevation and monitoring are the priorities."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-discharge-to-district-nurse-following-heart-failure-admission",
    "title": "Nursing — Discharge to district nurse following heart failure admission",
    "prompt": "Using the case notes, write a letter to the district nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "discharge",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "CARDIOLOGY WARD — DISCHARGE AND HANDOVER\nPatient: Mr Albert Finch\nAge: 79\nLetter to: Ms Carol Underwood, District Nursing Service\nAdmitted: 17 June 2026 · Discharged: 26 June 2026\n\nReason for admission:\nDecompensated chronic heart failure with peripheral oedema and breathlessness.\n\nOn admission:\nOedema to mid-thigh bilaterally, orthopnoea requiring four pillows, oxygen saturation 91% on air. Weight 82 kg. Chest X-ray showed pulmonary congestion. NT-proBNP markedly raised.\n\nTreatment:\nIntravenous furosemide for five days, then converted to oral. Fluid restriction 1.5 litres a day. Daily weights. Diuretic dose optimised before discharge.\n\nProgress:\nLost 4 kg of fluid over the admission. Oedema much improved, now to the ankles only. Breathing comfortably at rest and able to lie flat with two pillows.\n\nCurrent status at discharge:\nWeight 78 kg — this is the target weight to work from. Oxygen saturation 95% on air. Mobilising with a frame on the ward. Blood pressure 118/68 sitting. Renal function: creatinine 128, eGFR 42, stable over the last four days.\n\nPast medical history:\nHeart failure with an ejection fraction of 35%. Atrial fibrillation. Chronic kidney disease stage 3. Cataract surgery 2022.\n\nMedications:\nfurosemide 40 mg twice daily\nbisoprolol 5 mg daily\napixaban 5 mg twice daily\nramipril 2.5 mg daily\natorvastatin 20 mg at night\n\nAllergies:\nNone known.\n\nPlan:\nDaily weight, at the same time each morning, recorded on the chart supplied. Report a gain of more than 2 kg over three days. Monitor for increasing oedema and breathlessness. Bloods for renal function in one week. Reinforce the fluid restriction, which he finds difficult.\n\nSocial:\nWidower, lives alone in a bungalow. One daughter visits weekly. Uses a walking frame. Concerned about managing alone. Meals-on-wheels arranged from 27 June.\n\nAlso noted:\nAsked about a blue badge. Enjoys crosswords.",
      "recipient": "Ms Carol Underwood, District Nursing Service",
      "letterType": "discharge",
      "taskInstruction": "Write a discharge letter requesting home monitoring of fluid status, weight and medication titration."
    },
    "guidanceNote": "Centre the letter on daily weight, fluid restriction and the weight-gain threshold to report. The cataract surgery is irrelevant to heart-failure home monitoring — leave it out."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-referral-to-community-drug-and-alcohol-service-alcohol-withdrawal",
    "title": "Nursing — Referral to community drug and alcohol service (alcohol withdrawal)",
    "prompt": "Using the case notes, write a letter to the community addiction nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "WARD 2 — REFERRAL ON DISCHARGE\nPatient: Mr Wayne Fletcher\nAge: 47\nReferred to: Mr Sean Gallagher, Community Drug and Alcohol Service\nAdmitted: 20 June 2026 · Discharged: 26 June 2026\n\nReason for admission:\nAlcohol withdrawal after stopping a long history of heavy daily drinking. He reported drinking around 100 units a week for the past three years.\n\nDetoxification:\nCompleted assisted withdrawal with a reducing chlordiazepoxide regimen over five days. Peak withdrawal score on day two. No seizures and no delirium tremens at any point. Medication-free for 24 hours before discharge.\n\nCurrent status:\nStable. No tremor. Eating three meals a day. Sleeping six hours. Motivated to remain abstinent; expresses regret about the effect on his family and wants to repair relationships with his children.\n\nPast medical history:\nAlcohol-related liver disease, mild and compensated — ultrasound June 2026 showed fatty change without cirrhosis. Depression, diagnosed 2023. Previous relapse in 2025 after completing a community programme. Wrist fracture 2018.\n\nBloods, 25 June 2026:\nLiver function improving — ALT 62, down from 118 on admission. GGT 210, falling. Full blood count normal. Vitamin B12 and folate normal.\n\nMedications on discharge:\nthiamine 100 mg three times daily\nvitamin B compound strong, one daily\nacamprosate 666 mg three times daily, started 24 June to support abstinence\nsertraline 50 mg daily\n\nAllergies:\nNone known.\n\nPlan:\nCommunity follow-up for relapse prevention. Continue acamprosate and thiamine. Psychological support. Address social isolation, which he identifies as the main trigger alongside stress. Monitor mood, as the depression is not yet treated to remission.\n\nSocial:\nRecently separated from his partner. Two children he wishes to see, contact currently supervised. Unemployed builder. Lives alone in a bedsit. Limited support network.\n\nAlso noted:\nAsked about help with a housing application. Reports back pain from his previous work.",
      "recipient": "Mr Sean Gallagher, Community Drug and Alcohol Service",
      "letterType": "referral",
      "taskInstruction": "Write a referral letter requesting ongoing support following a medically managed alcohol detoxification."
    },
    "guidanceNote": "Emphasise the completed detox, current medications supporting abstinence, previous relapse and the social triggers. The 2018 wrist fracture is not relevant to addiction follow-up."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-referral-to-community-mental-health-team-post-discharge-depression",
    "title": "Nursing — Referral to community mental health team (post-discharge depression)",
    "prompt": "Using the case notes, write a letter to the community mental health nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "ACUTE MENTAL HEALTH UNIT — REFERRAL ON DISCHARGE\nPatient: Mr Daniel Okoro\nAge: 34\nReferred to: Ms Hannah Pereira, Community Mental Health Nurse, Riverside Wellbeing Team\nAdmitted: 12 June 2026, voluntarily · Discharged: 26 June 2026\n\nReason for admission:\nModerate depressive episode following the loss of his job in April 2026. Passive suicidal ideation on admission — thoughts that he would rather not wake up — with no plan and no intent. He presented himself to the emergency department.\n\nProgress in hospital:\nStarted sertraline 50 mg daily on 13 June. Engaged well in group therapy and attended every session. Mood improved steadily over the second week. PHQ-9 fell from 21 on admission to 11 on 25 June.\n\nCurrent status:\nMood stable. Sleeping six to seven hours without medication. Eating regularly and has regained 2 kg. Denies current suicidal thoughts and was able to talk about them openly when asked today. Has agreed a written safety plan and has crisis numbers.\n\nRisk on discharge:\nAssessed as low but not absent. The main concerns are living alone, the estrangement from his mother, and the possibility of further job rejections over the coming weeks.\n\nPast history:\nFirst episode of depression. No previous psychiatric admissions. No self-harm. No alcohol or drug misuse. Smoker, ten a day. Father died of a myocardial infarction aged 60.\n\nMedications:\nsertraline 50 mg each morning\n\nAllergies:\nNone known.\n\nPlan:\nCommunity follow-up within one week. Monitor mood and adherence. Reassess suicide risk at each contact. GP to continue prescribing after the first review. Consider a dose increase if the response plateaus.\n\nSocial:\nSingle, lives alone in a rented flat. Estranged from his mother. One supportive friend nearby who visited twice during the admission. Applying for new jobs.\n\nAlso noted:\nEnjoys cycling and hopes to return to it. Asked about a bus pass.",
      "recipient": "Ms Hannah Pereira, Community Mental Health Nurse, Riverside Wellbeing Team",
      "letterType": "referral",
      "taskInstruction": "Write a referral letter requesting community follow-up and monitoring of mood, medication adherence and suicide risk."
    },
    "guidanceNote": "Lead with the ongoing risk-monitoring need and medication adherence. Hobbies such as cycling and the father's cardiac history are not relevant to this mental health referral — omit them."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-referral-to-diabetes-specialist-nurse-newly-diagnosed-type-1",
    "title": "Nursing — Referral to diabetes specialist nurse (newly diagnosed type 1)",
    "prompt": "Using the case notes, write a letter to the diabetes specialist nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "WARD 9 — REFERRAL ON DISCHARGE\nPatient: Miss Chloe Adeyemi\nAge: 19\nReferred to: Ms Lauren Hayes, Diabetes Specialist Nurse\nAdmitted: 21 June 2026 · Discharged: 26 June 2026\n\nReason for admission:\nDiabetic ketoacidosis at first presentation. New diagnosis of type 1 diabetes.\n\nOn admission:\nBlood glucose 31 mmol/L, ketones 5.2, pH 7.18, bicarbonate 12. Two-week history of thirst, polyuria and 5 kg weight loss, which she had attributed to exam stress.\n\nTreatment:\nFixed-rate intravenous insulin infusion and fluid replacement. Ketoacidosis resolved within 18 hours. Converted to subcutaneous insulin on 22 June.\n\nCurrent status:\nStable and eating normally. Blood glucose 7 to 11 mmol/L over the past 48 hours. Ketones cleared. Anxious about self-injecting and became tearful during the second teaching session.\n\nEducation completed on the ward:\nBasic insulin injection technique taught and she can demonstrate it, but lacks confidence and has needed prompting each time. Signs of hypoglycaemia explained and written information given. Blood glucose monitoring taught.\n\nEducation NOT yet covered:\nCarbohydrate counting. Dose adjustment. Sick-day rules. Alcohol and exercise. Driving.\n\nMedications:\ninsulin glargine 14 units at night\ninsulin aspart with meals, currently fixed doses\nno other regular medication\n\nPast medical history:\nPreviously well. Tonsillectomy aged 8. Immunisations up to date.\n\nFamily history:\nMaternal aunt and grandmother have autoimmune thyroid disease.\n\nAllergies:\nNone known.\n\nPlan:\nSpecialist education on carbohydrate counting, dose adjustment, sick-day rules and hypoglycaemia management. Psychological support for adjustment to the diagnosis. Structured follow-up. Early contact is important as term begins in three weeks.\n\nSocial:\nUniversity student, lives in halls with a shared kitchen. Busy social schedule. Plays netball twice a week. Concerned about managing diabetes at university and about telling her friends.\n\nAlso noted:\nAsked about a medical alert bracelet. Due a routine dental check.",
      "recipient": "Ms Lauren Hayes, Diabetes Specialist Nurse",
      "letterType": "referral",
      "taskInstruction": "Write a referral letter requesting education and ongoing support for a newly diagnosed type 1 diabetic."
    },
    "guidanceNote": "Highlight the new diagnosis, current insulin regimen and the specific education gaps (carb counting, sick-day rules, confidence). The childhood tonsillectomy is not relevant; her living situation matters because it affects self-management."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-referral-to-falls-prevention-service-from-aged-care-facility",
    "title": "Nursing — Referral to falls prevention service from aged care facility",
    "prompt": "Using the case notes, write a letter to the falls prevention coordinator. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "WILLOWBANK RESIDENTIAL CARE — REFERRAL\nResident: Mrs Doris Whitfield\nAge: 84\nReferred to: Mr Thomas Reilly, Falls Prevention Coordinator, Aged Care Outreach Service\nReferral date: 26 June 2026\n\nReason for referral:\nThree falls in the past six weeks. Multidisciplinary assessment requested.\n\nThe falls:\n14 May 2026 — in her room at night, on the way to the toilet. No injury.\n2 June 2026 — in the corridor after breakfast, described as her feet sticking to the floor. No injury.\n24 June 2026 — in her room at night, again heading for the toilet. Skin tear to the left forearm, dressed and healing.\n\nPast medical history:\nOsteoporosis. Parkinson's disease, diagnosed 2021. Mild cognitive impairment. Macular degeneration with reduced vision, last reviewed 2025. Previous hip fracture 2023, right side.\n\nMobility:\nWalks with a wheeled frame. Unsteady, with freezing episodes noted particularly in doorways and when turning. Tends to rush to the toilet at night and has twice been found without her frame.\n\nObservations:\nPostural blood pressure recorded 23 June — lying 130/80, standing 105/65 with reported dizziness. Pulse 68 regular. Weight stable at 54 kg.\n\nContributing factors identified:\nPoor night lighting in her room; the switch is behind the bed. Urinary urgency, worse at night. Occasional nocturnal sedation. Footwear — she prefers backless slippers.\n\nMedications:\nlevodopa/carbidopa three times daily\nalendronate 70 mg weekly\nbisoprolol 2.5 mg daily\nzopiclone 3.75 mg at night, used two or three nights a week\n\nAllergies:\nSulfa drugs — rash.\n\nPlan:\nMultidisciplinary falls assessment requested. Review of postural blood pressure and night sedation. Environmental and continence review. Physiotherapy for gait and freezing.\n\nSocial:\nSon visits fortnightly. Enjoys knitting and sings in the facility choir.\n\nAlso noted:\nAsked about a visit to the hairdresser. Due an annual eye review.",
      "recipient": "Mr Thomas Reilly, Falls Prevention Coordinator, Aged Care Outreach Service",
      "letterType": "referral",
      "taskInstruction": "Write a referral letter requesting assessment of a resident with recurrent falls."
    },
    "guidanceNote": "Group the falls-relevant factors — Parkinson's, postural hypotension, vision, night toileting and sedation. Knitting and choir attendance are social colour, not relevant to a falls assessment."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-referral-to-wound-care-clinic-post-operative-surgical-wound-dehiscence",
    "title": "Nursing — Referral to wound care clinic (post-operative surgical wound dehiscence)",
    "prompt": "Using the case notes, write a letter to the wound care nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "SURGICAL WARD — REFERRAL ON DISCHARGE\nPatient: Mr Gregor Bauer\nAge: 58\nReferred to: Ms Priya Naidoo, Clinical Nurse Specialist, Outpatient Wound Care Clinic\nProcedure: 10 June 2026 · Discharged: 26 June 2026\n\nReason for referral:\nDehisced abdominal wound healing by secondary intention. Ongoing assessment and dressing management requested.\n\nOperation:\nEmergency laparotomy for perforated diverticulitis, with Hartmann's procedure. Lower midline incision.\n\nPost-operative course:\nWound infection identified on day six with purulent discharge; swab grew mixed skin flora. Partial dehiscence of the lower third of the incision on day seven. Treated with intravenous antibiotics for five days, now on oral with five days remaining. Deep dehiscence excluded on examination by the surgical team.\n\nCurrent wound status:\nCavity 4 cm by 2 cm, depth 1.5 cm. Moderate exudate. Granulating base, no slough and no necrotic tissue. Surrounding skin healthy with no erythema. Currently dressed with an alginate rope and a secondary absorbent dressing, changed on alternate days. Photograph taken 25 June and filed in the record.\n\nCurrent status:\nAfebrile for six days. Eating well. Mobile independently. Blood glucose 8 to 10 mmol/L; CRP 18, down from 180.\n\nPast medical history:\nType 2 diabetes on metformin, HbA1c 62 in May 2026. Obesity, BMI 34. Hypertension. Ex-smoker, stopped 2020.\n\nMedications:\nmetformin 1 g twice daily\nco-amoxiclav — five days remaining\namlodipine 5 mg daily\nparacetamol as required\n\nAllergies:\nNone known.\n\nPlan:\nTwice-weekly clinic dressing changes. Monitor for re-infection. Optimise glycaemic control to support healing — a diabetes review has been requested at the practice. Measure and record the wound weekly.\n\nSocial:\nLives with his wife. Works as an accountant and plans to return in three weeks.\n\nAlso noted:\nAsked about lifting restrictions. Has a stoma nurse appointment on 30 June.",
      "recipient": "Ms Priya Naidoo, Clinical Nurse Specialist, Outpatient Wound Care Clinic",
      "letterType": "referral",
      "taskInstruction": "Write a referral letter requesting ongoing assessment and dressing management of a dehisced abdominal wound."
    },
    "guidanceNote": "Describe the wound dimensions, current dressing regimen and the diabetes relevant to healing. The patient's occupation is minor context — the clinical detail the wound nurse needs is the wound status and glycaemic control."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-transfer-to-coronary-care-unit-from-emergency-department-chest-pain",
    "title": "Nursing — Transfer to coronary care unit from emergency department (chest pain)",
    "prompt": "Using the case notes, write a letter to the receiving nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "transfer",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "EMERGENCY DEPARTMENT — TRANSFER TO CORONARY CARE\nPatient: Mr Raymond Bellini\nAge: 62\nTransferred to: Charge Nurse, Coronary Care Unit\nArrived: 26 June 2026, 14:20 · Transferred: 17:00 the same day\n\nReason for transfer:\nConfirmed non-ST-elevation myocardial infarction.\n\nPresentation:\nCentral crushing chest pain radiating to the left arm, present for two hours before arrival. Onset at rest. Associated sweating and nausea. Pain 8/10 on arrival.\n\nFindings:\nECG at 14:30 — ST depression in the lateral leads, no ST elevation. Repeat at 16:00 unchanged. Troponin 480 ng/L on arrival, repeat at three hours rising to 910 ng/L. Chest X-ray no acute abnormality. Bloods otherwise unremarkable; potassium 4.1, creatinine 88.\n\nTreatment given in the department:\naspirin 300 mg, ticagrelor 180 mg, fondaparinux, glyceryl trinitrate infusion, morphine 5 mg with an antiemetic, oxygen titrated to saturation.\n\nCurrent observations, 16:45:\nBlood pressure 138/82, pulse 76 regular, oxygen saturation 97% on 2 litres, respiratory rate 16, afebrile. Pain now settled, score 1/10. Cannula in the left forearm, patent, sited 14:35.\n\nPast medical history:\nHypertension. Hyperlipidaemia. Current smoker, 20 a day. Appendicectomy aged 20.\n\nFamily history:\nFather had a myocardial infarction in his fifties.\n\nHome medications:\namlodipine 5 mg daily\natorvastatin 20 mg at night\n\nAllergies:\nNone known.\n\nPlan:\nContinue cardiac monitoring. Awaiting cardiology review for consideration of angiography. Repeat troponin and ECG in the morning. Bed rest. Observe for further chest pain or arrhythmia.\n\nSocial:\nMarried, works as a taxi driver. Visibly anxious about the diagnosis and has asked twice whether he will be able to work. His wife has been contacted and is on her way.\n\nAlso noted:\nWears glasses for driving. Has not eaten since breakfast.\nRisk score:\nGRACE score calculated as intermediate to high. Awaiting the cardiology decision on the timing of angiography.\n\nLines and infusions in progress at transfer:\nGlyceryl trinitrate infusion running at 2 mg per hour, titrated to pain and blood pressure. Cardiac monitor in situ, leads intact.",
      "recipient": "Charge Nurse, Coronary Care Unit",
      "letterType": "transfer",
      "taskInstruction": "Write a transfer letter handing over a patient with a confirmed non-ST-elevation myocardial infarction."
    },
    "guidanceNote": "A transfer handover needs the diagnosis, treatment already given, current observations and the immediate monitoring plan. The childhood appendicectomy is irrelevant — the cardiac risk factors and acute management are what matter."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-transfer-to-palliative-care-unit-advanced-pancreatic-cancer",
    "title": "Nursing — Transfer to palliative care unit (advanced pancreatic cancer)",
    "prompt": "Using the case notes, write a letter to the receiving nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "transfer",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "ONCOLOGY WARD — TRANSFER SUMMARY\nPatient: Mrs Eleanor Castle\nAge: 71\nTransferred to: Sister Mary Quinn, Palliative Care Unit, St Anne's Hospice\nAdmitted: 18 June 2026 · Transferred: 26 June 2026\n\nReason for transfer:\nEnd-of-life care. Advanced pancreatic cancer with liver metastases. Active treatment ceased on 20 June following discussion with the oncology team.\n\nUnderstanding:\nThe patient and both daughters are aware of the diagnosis and the prognosis, which has been discussed as being short — likely days to a small number of weeks. The conversation took place on 20 June with the consultant, and Mrs Castle has spoken about it since without distress.\n\nCurrent status:\nBedbound since 22 June. Pain in the epigastrium and back, previously escalating, now controlled on a syringe driver. Nausea controlled. Poor oral intake — sips of fluid and occasional yoghurt. Mild confusion at night on two occasions, settling with reorientation and without medication. Pressure-area care two-hourly; sacral skin intact, Waterlow 18.\n\nSymptom management:\nmorphine 30 mg over 24 hours via syringe driver\nmetoclopramide 30 mg over 24 hours via syringe driver\nmidazolam as required for agitation, used twice\nhyoscine butylbromide prescribed as required, not yet needed\nmouth care four-hourly\n\nPast medical history:\nType 2 diabetes, diet controlled — capillary glucose monitoring discontinued 23 June by agreement. Hypertension, antihypertensives stopped. Cholecystectomy 2009.\n\nAllergies:\nPenicillin — rash.\n\nWishes and plans:\nDNACPR in place, signed 20 June, and the family is aware. She wishes to die peacefully and without further investigations. Catholic; requests chaplain visits, and the hospital chaplain has visited twice.\n\nPlan:\nContinue comfort-focused care. Maintain the syringe driver and review as required. Honour the DNACPR. Involve the family fully. Spiritual support to continue.\n\nSocial:\nWidow. Two adult daughters, both involved and present daily. A grandson visits at weekends.\n\nAlso noted:\nEnjoys having the window open. Prefers not to have the television on.",
      "recipient": "Sister Mary Quinn, Palliative Care Unit, St Anne's Hospice",
      "letterType": "transfer",
      "taskInstruction": "Write a transfer letter summarising the patient's condition, symptom management and family wishes for end-of-life care."
    },
    "guidanceNote": "Prioritise current symptom control, the DNACPR decision, allergy and the family's wishes. Old surgical history (cholecystectomy) is background — keep it brief or omit; comfort and dignity are the focus."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-transfer-to-rehabilitation-unit-post-hip-fracture",
    "title": "Nursing — Transfer to rehabilitation unit (post-hip fracture)",
    "prompt": "Using the case notes, write a letter to the Charge Nurse at the rehabilitation unit. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "transfer",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "ORTHOPAEDIC WARD — TRANSFER SUMMARY\nPatient: Mrs Aurora Pereira\nAge: 78\nTransferred to: Ms Carla Devine, Charge Nurse, Riverside Rehabilitation Unit\nAdmitted: 4 June 2026 · Transferred: 26 June 2026\n\nReason for transfer:\nInpatient rehabilitation following surgical repair of a hip fracture.\n\nAdmission:\nMechanical fall at home on 4 June, tripping on a rug. Right neck-of-femur fracture confirmed on X-ray. No head injury and no loss of consciousness.\n\nSurgery:\n5 June 2026 — right hemiarthroplasty under spinal anaesthetic. Uncomplicated. Estimated blood loss 300 ml.\n\nPost-operative progress:\nWound clean and dry, staples intact, removal due 19 June — this has been done and the wound remains healed. Mobilising 10 metres with a frame and one assistant. Weight-bearing as tolerated from day one. Pain well controlled, scoring 3 out of 10 on movement and 0 at rest. Slight constipation from day four; lactulose commenced and bowels now open regularly.\n\nObservations:\nAfebrile throughout. Haemoglobin 104 on 20 June, down from 128 pre-operatively, no transfusion required. Blood glucose 6 to 8 mmol/L.\n\nFunctional status:\nIndependent before the fall. Currently needs assistance with washing and dressing. Continent. Pressure areas intact, Waterlow 12.\n\nPast medical history:\nType 2 diabetes, diet controlled. Hypertension. Mild osteoarthritis of both knees. Cataract surgery 2021.\n\nMedications:\namlodipine 5 mg daily\nmetformin 500 mg twice daily\nparacetamol 1 g four times daily as required\nenoxaparin 40 mg subcutaneously daily — continue until 19 July, 14 days post-operatively\n\nAllergies:\nPenicillin — rash.\n\nPlan:\nInpatient rehabilitation to restore independent mobility and activities of daily living. Ongoing physiotherapy and occupational therapy. Pre-discharge home assessment required.\n\nSocial:\nRetired seamstress. Lived alone in a ground-floor flat. Daughter lives nearby and is supportive. Anxious about returning home and has raised it several times.\n\nAlso noted:\nAsked about her sewing machine. Enjoys the ward's afternoon tea round.",
      "recipient": "Ms Carla Devine, Charge Nurse, Riverside Rehabilitation Unit",
      "letterType": "transfer",
      "taskInstruction": "Write a transfer letter handing over Mrs Pereira's post-operative status and rehabilitation needs so the receiving team can continue safe care."
    },
    "guidanceNote": "This is a handover for ongoing rehabilitation — prioritise mobility status, weight-bearing instructions, wound/staple plan, VTE prophylaxis duration, allergy and her care goals. Omit resolved details (cataract 2021) unless they affect current care."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "NURSING",
    "slug": "wri-nursing-transfer-to-stroke-rehabilitation-ward-acute-ischaemic-stroke",
    "title": "Nursing — Transfer to stroke rehabilitation ward (acute ischaemic stroke)",
    "prompt": "Using the case notes, write a letter to the rehabilitation nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "transfer",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "ACUTE STROKE UNIT — TRANSFER SUMMARY\nPatient: Mr Ivan Petrov\nAge: 68\nTransferred to: Nurse in Charge, Stroke Rehabilitation Ward\nAdmitted: 19 June 2026 · Transferred: 26 June 2026\n\nReason for transfer:\nRehabilitation following an acute ischaemic stroke.\n\nAdmission:\nSudden onset of left-sided weakness and slurred speech at 08:10 on 19 June, witnessed by his wife. CT confirmed a right middle cerebral artery ischaemic stroke. Thrombolysed at 09:40, within the window. Repeat imaging at 24 hours showed no haemorrhagic transformation.\n\nCurrent status:\nLeft arm power 2/5, left leg power 3/5. Mild facial droop, improving. Speech now intelligible with occasional slurring. Comprehension intact. Requires the assistance of two to transfer. Sits out of bed for two hours twice a day.\n\nSwallow:\nAssessed by speech and language therapy on 20 and 24 June. Currently on a soft diet with thickened fluids, level 2. Supervision required at meals. No coughing on the current consistency.\n\nContinence:\nOccasional urinary incontinence, using continence aids. Bowels opened with lactulose.\n\nSkin:\nAt risk. Pressure-area care two-hourly. Sacrum intact. Waterlow 16. Pressure-redistributing mattress in place.\n\nPast medical history:\nAtrial fibrillation, now anticoagulated — he had been on aspirin only before admission. Hypertension. Type 2 diabetes. Hernia repair 2015.\n\nMedications:\napixaban 5 mg twice daily\namlodipine 5 mg daily\nmetformin 500 mg twice daily\natorvastatin 80 mg at night\n\nAllergies:\nCodeine — nausea.\n\nPlan:\nMultidisciplinary rehabilitation — physiotherapy, occupational therapy and ongoing speech and language therapy. Maintain swallow precautions until reassessed. Continue pressure care. Continence assessment. Mobility goals to be agreed with the patient.\n\nSocial:\nLives with his wife in a two-storey house with the bathroom upstairs. Retired carpenter. Highly motivated and states repeatedly that he wants to walk again.\n\nAlso noted:\nWife visits daily and brings his own pyjamas. Wears a hearing aid on the right.",
      "recipient": "Nurse in Charge, Stroke Rehabilitation Ward",
      "letterType": "transfer",
      "taskInstruction": "Write a transfer letter handing over a patient for rehabilitation following an acute ischaemic stroke."
    },
    "guidanceNote": "Rehabilitation staff need the functional deficits, swallow precautions, transfer needs and skin/continence risks. The 2015 hernia repair is irrelevant; the two-storey home is relevant to discharge planning."
  }
];
