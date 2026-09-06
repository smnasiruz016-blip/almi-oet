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
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-ace-inhibitor-and-potassium-supplement-hyperkalaemia-risk",
    "title": "Pharmacy — ACE inhibitor and potassium supplement hyperkalaemia risk",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "BROOKSIDE PHARMACY — MEDICINES USE REVIEW\nPatient: Mr Harold Pinto\nAge: 70\nRegistered GP: Dr Tomas Vega, Brookside Health Centre\nAttended: 14 August 2026 (repeat collection), 4 September 2026 (today, review)\n\nReason for review:\nAttended today to collect a repeat prescription. Combination of medicines noted at the counter that carries a significant risk of hyperkalaemia.\n\nCurrent medications:\nramipril 10 mg daily (started 2021, dose increased to 10 mg March 2026)\nspironolactone 25 mg daily (added January 2026 by cardiology)\nSando-K (potassium chloride) two tablets daily (started 2019)\nfurosemide 40 mg each morning (started 2019)\natorvastatin 20 mg at night\n\nThe concern:\nThe potassium supplement was begun in 2019 when the patient was hypokalaemic on furosemide alone. Since then an ACE inhibitor has been increased and a potassium-sparing diuretic added. All three raise serum potassium. The supplement may no longer be required, and the combination as it stands is a recognised cause of severe hyperkalaemia.\n\nRelevant history:\nHeart failure, diagnosed 2019, currently stable. Documented hypokalaemia 2019 on furosemide alone; potassium 3.1 mmol/L at that time. No episode since.\n\nBloods:\nLast recorded urea and electrolytes March 2026, six months ago. Potassium 5.1 mmol/L at that time, reported as borderline. No repeat since the spironolactone was added.\n\nToday:\nReports occasional muscle weakness in the legs over the past three weeks, worse at the end of the day. No palpitations. No nausea. Blood pressure at the counter 132/78. Ankles not swollen. Weight steady.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nRetired teacher, lives with his wife, manages his own medicines from a weekly tray. Drives.\n\nAlso mentioned today:\nAsked whether he is due a flu vaccine this autumn. Reports mild eczema on both hands, using an emollient bought over the counter. Requested advice on a supplement for joint stiffness.",
      "recipient": "Dr Tomas Vega, General Practitioner, Brookside Health Centre",
      "letterType": "advice",
      "taskInstruction": "Write to the GP highlighting a combination raising hyperkalaemia risk and recommending electrolyte monitoring."
    },
    "guidanceNote": "Ask the GP to check serum potassium and review the ongoing need for the potassium supplement now that combination therapy has changed."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-clopidogrel-and-omeprazole-interaction-concern",
    "title": "Pharmacy — Clopidogrel and omeprazole interaction concern",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "RIVERSIDE PHARMACY — RECORD OF INTERVENTION\nPatient: Mr Daniel Osei\nAge: 64\nRegistered GP: Dr Helen Carter, Riverside Medical Centre\nAttended: 4 September 2026 (today)\n\nReason for contact:\nPresented to collect a repeat prescription. Interaction identified between two medicines started in the same week.\n\nCurrent medications:\nclopidogrel 75 mg daily — started 24 July 2026 following insertion of a drug-eluting coronary stent\nomeprazole 20 mg daily — started 26 July 2026 by the practice for reflux symptoms\natorvastatin 40 mg at night — long-standing\nramipril 5 mg daily — long-standing\nglyceryl trinitrate spray as required — rarely used\n\nThe concern:\nOmeprazole inhibits CYP2C19, the enzyme that converts clopidogrel to its active form, and may therefore reduce its antiplatelet effect. Co-prescription is not recommended where an alternative exists, and the patient is within the highest-risk period following stent insertion.\n\nRelevant history:\nDrug-eluting stent placed six weeks ago. Dual antiplatelet therapy planned for twelve months. Reflux symptoms present for around a year, worse since the stent procedure, partially controlled on the current dose. No previous gastrointestinal bleed and no history of ulcer.\n\nToday:\nNo black stools, no vomiting of blood, no bruising. Reports dyspepsia most evenings, relieved somewhat by the omeprazole. Home blood pressure readings self-monitored and stable, around 128/76. No chest pain since the procedure.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nWorks part time as a college technician. Lives with his wife. Non-smoker for eleven years. Alcohol two units weekly.\n\nAlso mentioned today:\nMild seasonal hay fever, uses an over-the-counter antihistamine in spring. Wears reading glasses. Previous ankle sprain in 2019, fully recovered. Asked about a discount scheme for prescriptions.\nCardiology follow-up:\nReviewed 21 August 2026. Advised to continue dual antiplatelet therapy for twelve months without interruption. No mention of the reflux treatment in that letter.",
      "recipient": "Dr Helen Carter, General Practitioner, Riverside Medical Centre",
      "letterType": "referral",
      "taskInstruction": "Write to the GP to recommend reviewing the proton pump inhibitor choice because of a potential interaction reducing clopidogrel efficacy."
    },
    "guidanceNote": "State the mechanism concern briefly and suggest an alternative PPI such as pantoprazole rather than dictating the prescription; the decision rests with the GP."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-discharge-medicines-reconciliation-to-gp",
    "title": "Pharmacy — Discharge medicines reconciliation to GP",
    "prompt": "Using the case notes, write a letter to the patient's GP/prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "discharge",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "HOSPITAL PHARMACY — DISCHARGE MEDICINES RECONCILIATION\nPatient: Mrs Eleanor Fitch\nAge: 79\nRegistered GP: Dr Sara Mahmood, Oakfield Surgery\nAdmitted: 28 August 2026 · Discharged: 4 September 2026, from Ward 6\n\nReason for admission:\nAcute kidney injury secondary to dehydration following a five-day diarrhoeal illness. Creatinine on admission 168, eGFR 31.\n\nMedication changes made on admission:\nramipril 10 mg daily — SUSPENDED 28 August\nmetformin 1 g twice daily — SUSPENDED 28 August\nfurosemide 40 mg daily — SUSPENDED 28 August\n\nContinued unchanged throughout:\namlodipine 5 mg daily\natorvastatin 20 mg at night\nlansoprazole 30 mg daily\n\nNew medicines started on discharge:\nNone.\n\nRenal function:\neGFR on discharge 48. Baseline from March 2026 was 62. Improving but not yet returned to baseline. Creatinine 112 today.\n\nPlan agreed with the consultant:\nRestart ramipril and furosemide once renal function and blood pressure have been reviewed in primary care, and not before. Metformin to remain suspended pending a repeat eGFR. A repeat set of urea and electrolytes is requested within seven days of discharge.\n\nObservations on discharge:\nBlood pressure 138/82 sitting, 130/76 standing. Afebrile. Eating and drinking normally for the past three days. Bowels settled. Weight 61 kg, 2 kg below her recorded weight in March.\n\nAllergies:\nNone known.\n\nUnderstanding:\nThe patient has been told that three tablets have been paused and why. She understands that she should not restart them herself. A written list of the changes has been given to her and to her daughter.\n\nSocial:\nLives with her daughter, who fills a weekly dosette box and manages the ordering. Mobilises with a stick indoors.\n\nAlso noted during admission:\nAsked about hospital transport for a future appointment. Long-standing osteoarthritis of the right hip, no change. Cataract surgery on the left eye in 2019.",
      "recipient": "Dr Sara Mahmood, General Practitioner, Oakfield Surgery",
      "letterType": "discharge",
      "taskInstruction": "Inform the GP of medication changes made during admission and request continued monitoring of renal function and blood pressure."
    },
    "guidanceNote": "Make the suspended-versus-continued medicines unambiguous and tie each request to a monitoring parameter; omit unchanged social detail that does not affect ongoing care."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-gentamicin-level-handover-at-hospital-discharge",
    "title": "Pharmacy — Gentamicin level handover at hospital discharge",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "HOSPITAL PHARMACY — HANDOVER OF OUTPATIENT ANTIBIOTIC THERAPY\nPatient: Mr Victor Adeyemi\nAge: 59\nRegistered GP: Dr Raymond Ellis, Southfield Surgery\nAdmitted: 30 August 2026 · Discharged: 4 September 2026 (today)\n\nReason for handover:\nDischarged today to complete a course of intravenous antibiotics in the community. Ongoing monitoring must be arranged before each remaining dose.\n\nCurrent medications:\ngentamicin, intravenous, once daily — three further doses planned, to be given in the community\nflucloxacillin 1 g four times daily — oral, seven days remaining\nmetformin 1 g twice daily — regular, unchanged\nramipril 5 mg daily — regular, unchanged\n\nMonitoring required:\nA pre-dose gentamicin level and renal function are required before each remaining dose. Neither can be omitted. The dose must be withheld and advice sought if the pre-dose level is above the target range or if renal function deteriorates. Arrangements for sampling and for reporting the result the same day need to be confirmed locally.\n\nRelevant history:\nCellulitis of the right lower leg, admitted with spreading erythema and fever. Type 2 diabetes, diagnosed 2016, HbA1c 58 mmol/mol in May 2026. Baseline eGFR 68 from March 2026.\n\nProgress:\nAfebrile for four days. Erythema receding, margin marked and reducing daily. Wound healing, no discharge. Last gentamicin level, taken yesterday, within the target range. Creatinine stable at 96 throughout the admission.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nLives alone in a first-floor flat with a lift. Independent with washing and dressing. A neighbour has been collecting shopping during the admission.\n\nAlso noted during admission:\nEx-smoker, stopped in 2011. Asked about a parking permit for hospital visits. Wears a hearing aid in the right ear. Requested a repeat of his usual emollient.\nEquipment and supply:\nA line has been left in situ and is due for review on 8 September. Sufficient gentamicin, flucloxacillin and flushes have been supplied to cover the remaining course, together with a sharps container.",
      "recipient": "Dr Raymond Ellis, General Practitioner, Southfield Surgery",
      "letterType": "discharge",
      "taskInstruction": "Write to the GP to hand over a course of outpatient gentamicin requiring ongoing level and renal monitoring."
    },
    "guidanceNote": "Emphasise that pre-dose levels and renal checks must continue before each gentamicin dose; include the planned remaining doses clearly."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-insulin-regimen-confusion-and-recurrent-hypoglycaemia",
    "title": "Pharmacy — Insulin regimen confusion and recurrent hypoglycaemia",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "HARBORNE PHARMACY — RECORD OF CONSULTATION\nPatient: Mr Samuel Knox\nAge: 54\nRegistered GP: Dr Felix Conway, Harborne Family Practice\nAttended: 4 September 2026 (today), distressed and without an appointment\n\nReason for contact:\nAttended today unable to say which of his insulin pens is which, and reporting repeated low blood glucose readings over the past week.\n\nCurrent medications:\ninsulin glargine 24 units at night\ninsulin aspart with meals, dose variable and not written down\nmetformin 1 g twice daily\ngliclazide 80 mg twice daily\natorvastatin 20 mg at night\nramipril 5 mg daily\n\nThe concern:\nTwo insulin pens of similar appearance, no current written regimen, and a sulfonylurea prescribed alongside insulin. Any of these alone would raise the risk of hypoglycaemia; together they explain the pattern described.\n\nEpisodes reported this week:\nThree separate episodes of shaking, sweating and confusion, all between eleven in the morning and lunch. Two were treated with glucose tablets. On one occasion his neighbour found him unwell and gave him a sugary drink.\n\nHome readings shown today:\nSeveral values below 4 mmol/L, the lowest 2.8 mmol/L on 1 September before lunch. Readings before the evening meal generally between 9 and 12.\n\nRelevant history:\nType 2 diabetes diagnosed 2014, insulin started one year ago. No previous admission with hypoglycaemia. Last HbA1c 61 mmol/mol in April 2026.\n\nToday:\nBlood glucose at the counter 5.4 mmol/L. Alert, orientated, upset about the episodes. Unable to demonstrate which pen he uses at which time.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nLives alone. Former lorry driver, stopped work in 2021. Has told the licensing authority about the insulin. Cooks for himself, meals irregular.\n\nAlso mentioned today:\nAsked about sugar-free sweets. Reports mild back pain for several years, unchanged. Requested a repeat of his blood glucose testing strips.",
      "recipient": "Dr Felix Conway, General Practitioner, Harborne Family Practice",
      "letterType": "referral",
      "taskInstruction": "Write to the GP about confusion over insulin doses leading to hypoglycaemia and request a diabetes review."
    },
    "guidanceNote": "Highlight the recurrent lows and possible device confusion; suggest the GP review whether the sulfonylurea is still appropriate alongside insulin."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-levothyroxine-and-calcium-timing-affecting-control",
    "title": "Pharmacy — Levothyroxine and calcium timing affecting control",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "LAKESIDE PHARMACY — MEDICINES REVIEW\nPatient: Mrs Joan Pemberton\nAge: 62\nRegistered GP: Dr Maria Costa, Lakeside Medical Group\nAttended: 4 September 2026 (today)\n\nReason for review:\nAttended for a medicines review reporting persistent tiredness. A timing problem was identified that is likely to be affecting her thyroid control.\n\nCurrent medications:\nlevothyroxine 100 mcg each morning\ncalcium carbonate 1.5 g, taken with breakfast\nalendronic acid 70 mg weekly, Sunday mornings\nlansoprazole 30 mg daily\natorvastatin 20 mg at night\n\nHow she takes them:\nDescribes taking the levothyroxine and the calcium together at breakfast with tea, for at least the past year. Takes the alendronic acid on waking with water on Sundays and states she then waits half an hour before eating.\n\nThe concern:\nCalcium markedly reduces the absorption of levothyroxine and the two should be separated by at least four hours. The lansoprazole may also reduce absorption. This is a likely explanation for a rising thyroid-stimulating hormone level in a patient whose dose has not changed.\n\nRelevant history:\nHypothyroidism since 2015, on the same dose since 2018. Osteoporosis diagnosed 2021 after a wrist fracture. Recent thyroid function reported by the practice as showing an elevated TSH; the patient was told the result was abnormal but no change was made.\n\nSymptoms:\nFatigue for around two months, worse in the afternoons. Cold intolerance. Weight gain of about three kilograms over the same period despite no change in diet. Constipation. Hair described as drier.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nLives with her husband. Swims twice a week and has continued despite the tiredness. Retired from clerical work in 2023.\n\nAlso mentioned today:\nAsked whether cod liver oil would help her joints. Wears a hearing aid. Reports occasional heartburn, well controlled. Enquired about vitamin D.",
      "recipient": "Dr Maria Costa, General Practitioner, Lakeside Medical Group",
      "letterType": "advice",
      "taskInstruction": "Write to the GP about a likely absorption interaction affecting thyroid control and request review of recent results."
    },
    "guidanceNote": "Explain that separating the doses may improve control and ask the GP to recheck thyroid function before any dose change."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-lithium-monitoring-overdue-advice-to-gp",
    "title": "Pharmacy — Lithium monitoring overdue advice to GP",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "CASTLEGATE PHARMACY — RECORD OF INTERVENTION\nPatient: Ms Rebecca Lyne\nAge: 45\nRegistered GP: Dr Owen Pratt, Castlegate Practice\nAttended: 4 September 2026 (today), collecting a repeat prescription\n\nReason for contact:\nRoutine check of the lithium monitoring record at the point of supply identified that monitoring appears overdue, in a patient who is also describing symptoms that may be relevant.\n\nCurrent medications:\nlithium carbonate 400 mg at night — unchanged since 2024\nsertraline 100 mg daily\nbendroflumethiazide 2.5 mg daily — started February 2026\nibuprofen, bought over the counter, taken most days for two weeks\n\nMonitoring record:\nThe patient's lithium monitoring book records a serum lithium level on 8 February 2026, seven months ago. The recommended interval is every three to six months once stable, and more frequently after any change. Renal and thyroid function were last recorded at the same visit. No level has been taken since the thiazide was started.\n\nThe concern:\nBendroflumethiazide reduces lithium clearance and can raise the serum level. Non-steroidal anti-inflammatory drugs do the same. Both have been introduced since the last level was checked, and the symptoms described below are consistent with a rising level.\n\nSymptoms reported today:\nMild hand tremor, new over the past month and worse when holding a cup. Increased thirst, drinking considerably more than usual. No vomiting, no diarrhoea, no unsteadiness, no slurred speech.\n\nRelevant history:\nBipolar affective disorder, stable for two years with no admission since 2021. Compliant with medication and attends reviews.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nWorks full time in local government. Lives with her partner.\n\nAlso mentioned today:\nAsked which hay-fever tablets are suitable. Recently started a gym membership and has been going three times a week. Requested advice on a foot cream.",
      "recipient": "Dr Owen Pratt, General Practitioner, Castlegate Practice",
      "letterType": "advice",
      "taskInstruction": "Write to the GP advising that lithium level and renal/thyroid monitoring appear overdue and requesting arrangement of bloods."
    },
    "guidanceNote": "Mention the new tremor and thirst alongside the overdue monitoring, and note the thiazide interaction without alarming the patient."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-methotrexate-dosing-error-identified-at-dispensing",
    "title": "Pharmacy — Methotrexate dosing error identified at dispensing",
    "prompt": "Using the case notes, write a letter to the prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "HILLCREST PHARMACY — DISPENSING INCIDENT, SUPPLY WITHHELD\nPatient: Mr George Hardy\nAge: 71\nPrescriber: Dr Sandra Klein, Hillcrest Rheumatology Clinic\nPresented: 4 September 2026 (today)\n\nReason for contact:\nA new prescription has been received on which the methotrexate dose is written as a daily rather than a weekly dose. Supply has been withheld pending clarification.\n\nPrescription as received:\nmethotrexate 10 mg ONCE DAILY, quantity 28 tablets, dated 3 September 2026.\n\nRegimen recorded on the patient's file:\nmethotrexate 10 mg ONCE WEEKLY, taken on Mondays, unchanged for eighteen months\nfolic acid 5 mg once weekly, taken on Thursdays\nnaproxen 500 mg twice daily as required\nomeprazole 20 mg daily\n\nThe concern:\nDaily methotrexate at this dose carries a risk of severe and potentially fatal toxicity — bone marrow suppression, mucositis and hepatic injury. The quantity supplied would cover four weeks at the daily dose. A transcription error is suspected rather than an intended change, as no rationale is recorded and the patient has been told nothing.\n\nRelevant history:\nRheumatoid arthritis, diagnosed 2021. On weekly methotrexate for eighteen months with good disease control. Last full blood count and liver function six weeks ago, both stable and within range. No recent infection.\n\nToday:\nThe patient is well and has no mouth ulcers, sore throat, rash or breathlessness. He is unaware of any change to his treatment and expected the usual weekly prescription. He has one week of his previous supply remaining at home.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nLives with his wife. Uses a walking stick outdoors. Drives locally.\n\nAlso mentioned today:\nRequested advice on travel vaccinations for a trip planned next spring. Asked about a stronger painkiller for his knees. Reports his hearing has worsened.",
      "recipient": "Dr Sandra Klein, Prescriber, Hillcrest Rheumatology Clinic",
      "letterType": "referral",
      "taskInstruction": "Write to the prescriber to flag a methotrexate prescription written as a daily rather than weekly dose and seek urgent clarification."
    },
    "guidanceNote": "Be explicit that supply has been held for safety and request written confirmation of the intended frequency before dispensing."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-new-prescription-duplication-of-two-ssris",
    "title": "Pharmacy — New prescription duplication of two SSRIs",
    "prompt": "Using the case notes, write a letter to the prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "NORTHBRIDGE PHARMACY — RECORD OF INTERVENTION, SUPPLY PAUSED\nPatient: Ms Tanya Brooks\nAge: 34\nPrescriber: Dr Claire Mensah, Northbridge Mental Health Team\nPresented: 4 September 2026 (today)\n\nReason for contact:\nPresented with a hospital discharge prescription for a second selective serotonin reuptake inhibitor while an existing one remains on her repeat list. Supply paused for clarification.\n\nNew prescription received:\nsertraline 50 mg daily, dated 3 September 2026, issued on discharge.\n\nExisting repeat from the practice:\ncitalopram 20 mg daily, ongoing, last collected 21 August 2026, four weeks' supply issued\npropranolol 10 mg as required\ncombined oral contraceptive\n\nThe concern:\nTwo SSRIs prescribed at the same time. Taken together they carry a risk of serotonergic toxicity, and there is no record of whether the citalopram was intended to be stopped, cross-tapered or continued. Nothing on the discharge prescription indicates a switch. The patient has a month's supply of citalopram at home.\n\nWhat the patient reports:\nShe was told during her admission that her tablets were being changed, but has no written instruction and no discharge summary. She has not taken either medicine today because she was unsure which to take. She is anxious about getting it wrong.\n\nRelevant history:\nGeneralised anxiety disorder, diagnosed 2023. Recent short admission for review, discharged yesterday. No previous serious adverse reaction to medication.\n\nToday:\nAlert and orientated. No tremor, no sweating, no agitation. Reports her sleep has been poor for a week.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nWorks in retail. Lives with a flatmate. Non-smoker.\n\nAlso mentioned today:\nAsked about travel sickness remedies for a coach journey. Enquired whether she can take her usual hay-fever tablet. Requested a delivery service for future prescriptions.\nAction taken today:\nThe patient has been advised to take neither medicine until the position is clarified, and to contact the team or the practice today if she feels unwell. She has been given this in writing and has a number to ring.",
      "recipient": "Dr Claire Mensah, Prescriber, Northbridge Mental Health Team",
      "letterType": "referral",
      "taskInstruction": "Write to the prescriber to flag concurrent prescriptions of two SSRIs and request clarification before supply."
    },
    "guidanceNote": "Make clear the ambiguity is whether this is a switch or duplication; request confirmation of which SSRI to continue before dispensing."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-otc-ibuprofen-request-unsuitable-for-patient-on-anticoagulant",
    "title": "Pharmacy — OTC ibuprofen request unsuitable for patient on anticoagulant",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "PARKVIEW PHARMACY — RECORD OF CONSULTATION\nPatient: Mr Frank Bauer\nAge: 68\nRegistered GP: Dr Aisha Rahman, Parkview Surgery\nAttended: 4 September 2026 (today)\n\nReason for contact:\nRequested to buy ibuprofen for knee pain. The sale was declined and the patient advised to see his general practitioner, as his current pain relief is not controlling his symptoms.\n\nCurrent medications:\napixaban 5 mg twice daily — atrial fibrillation, started 2022\nbisoprolol 2.5 mg daily\nparacetamol 1 g up to four times daily as required\natorvastatin 20 mg at night\n\nWhy the sale was declined:\nA non-steroidal anti-inflammatory taken alongside a direct oral anticoagulant substantially increases the risk of gastrointestinal and other bleeding. The risk is higher still given a previous ulcer, and no gastroprotection is currently prescribed.\n\nThe underlying problem:\nThe patient reports daily knee pain that is not controlled on paracetamol taken regularly. Pain is worst on stairs and after standing. It wakes him most nights when he turns over. He has stopped walking to the shops, a distance he managed easily a year ago, and has given up his allotment for the summer.\n\nRelevant history:\nOsteoarthritis of both knees, diagnosed 2018, worse on the right. Previous gastric ulcer in 2017, treated and healed, no recurrence. Atrial fibrillation, rate controlled.\n\nToday:\nWalks with obvious discomfort and uses the counter for support. No bruising, no black stools, no bleeding gums. Blood pressure at the counter 136/80.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nLives with his wife. Keen gardener, currently unable to kneel. Retired electrician.\n\nAlso mentioned today:\nAsked whether glucosamine would help. Reports mild hearing loss and is waiting for an audiology appointment. Enquired about a knee support sold in the shop.\n\nCurrent medication:\nApixaban 5 mg twice daily for atrial fibrillation. Bisoprolol 2.5 mg daily. Paracetamol 500 mg, taken irregularly and only when the pain is severe. No gastroprotection prescribed.\n\nRequest made at the counter:\nAsked by name for ibuprofen 400 mg, having used it for years before the anticoagulant was started. Says paracetamol does nothing and was not told to avoid anti-inflammatories.\n",
      "recipient": "Dr Aisha Rahman, General Practitioner, Parkview Surgery",
      "letterType": "advice",
      "taskInstruction": "Write to the GP after declining an over-the-counter NSAID sale and request review of the patient's ongoing pain management."
    },
    "guidanceNote": "Explain why the NSAID was refused and ask the GP to consider safer analgesic options such as topical agents; note the prior ulcer history."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-polypharmacy-deprescribing-review-for-elderly-patient",
    "title": "Pharmacy — Polypharmacy deprescribing review for elderly patient",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "ELMWOOD PHARMACY — MEDICINES USE REVIEW\nPatient: Mrs Edith Crane\nAge: 83\nRegistered GP: Dr Nina Foster, Elmwood Medical Practice\nAttended: 4 September 2026 (today), with her daughter\n\nReason for review:\nAttended for a medicines use review. Her daughter raised concerns about drowsiness, confusion and two recent falls.\n\nCurrent medications:\namitriptyline 25 mg at night — started 2019 for insomnia, never reviewed\nzopiclone 7.5 mg at night — started 2022, taken most nights\noxybutynin 5 mg twice daily — started 2021 for urinary urgency\nfurosemide 40 mg each morning\nramipril 10 mg daily\natorvastatin 20 mg at night\n\nThe concern:\nThree medicines on this list are sedative, and two of those are also strongly anticholinergic. The combination is associated with falls, daytime drowsiness and cognitive impairment in older people, and each of the three was started for a symptom rather than for a diagnosis and has continued without review. A structured review with a view to reducing the anticholinergic burden is recommended.\n\nFalls:\nTwo falls in the past two months. The first was at night on the way to the bathroom. The second was in the kitchen in the morning, after standing up quickly. No fracture on either occasion; she attended the emergency department after the second and was discharged the same day.\n\nWhat the daughter reports:\nIncreasing daytime drowsiness, sleeping in the chair most afternoons, which is new. Repeating questions within the same conversation over the past three months. Dry mouth and constipation.\n\nToday:\nSteady when seated and when standing still. Reports light-headedness on standing. Blood pressure 142/78 sitting, 118/70 after one minute standing.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nRecently widowed, lives alone with daily visits from her daughter. Wears bifocals. Enjoys knitting.\n\nAlso mentioned today:\nAsked about a vitamin for energy. Requested a larger-print label on her tablets.",
      "recipient": "Dr Nina Foster, General Practitioner, Elmwood Medical Practice",
      "letterType": "referral",
      "taskInstruction": "Write to the GP recommending a structured medication review focusing on falls risk and possible deprescribing."
    },
    "guidanceNote": "Frame the high anticholinergic burden and sedative load as relevant to her falls and confusion; suggest review rather than naming exact stop decisions."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-poor-inhaler-adherence-and-technique-referral",
    "title": "Pharmacy — Poor inhaler adherence and technique referral",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "GREENWAY PHARMACY — RECORD OF INTERVENTION\nPatient: Mr Liam Doyle\nAge: 27\nRegistered GP: Dr Marcus Bell, Greenway Health Centre\nAttended: 4 September 2026 (today), collecting salbutamol\n\nReason for contact:\nA pattern of reliever overuse identified from the dispensing record, together with poor inhaler technique demonstrated at the counter today.\n\nCurrent medications:\nsalbutamol 100 mcg inhaler — collected 26 July, 14 August and 4 September 2026, three inhalers in six weeks\nbeclometasone 200 mcg inhaler, two puffs twice daily — last collected 8 May 2026, four months ago\ncetirizine 10 mg daily as required\n\nThe concern:\nThree reliever inhalers in six weeks indicates use well above the accepted threshold, and the preventer has not been reordered in four months, so it cannot have been taken as prescribed. Both are markers of poorly controlled asthma and of increased risk of a severe attack.\n\nTechnique check today:\nActuated the inhaler before beginning to breathe in on two of three attempts. Breathed in quickly rather than slowly and steadily. Did not hold his breath afterwards. Does not use a spacer and says he has never been given one.\n\nSymptoms:\nWakes with cough or wheeze about twice a week. Uses the reliever before five-a-side football and again afterwards. Reports he has been reaching for it three or four times most days over the past fortnight.\n\nRelevant history:\nAsthma since childhood. One attendance at the emergency department last winter, treated with oral steroids and discharged. No admission. No personal asthma action plan that he is aware of.\n\nToday:\nMild expiratory wheeze audible at the counter. Speaking in full sentences. No accessory muscle use.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nPlays five-a-side weekly. Recently changed jobs and now works in a warehouse. Non-smoker. Lives with his partner and a cat.\n\nAlso mentioned today:\nAsked about a cream for mild acne. Enquired about hay-fever tablets for next spring.",
      "recipient": "Dr Marcus Bell, General Practitioner, Greenway Health Centre",
      "letterType": "referral",
      "taskInstruction": "Write to the GP about repeated reliever overuse and poor inhaler technique, requesting an asthma review."
    },
    "guidanceNote": "Highlight the reliever-to-preventer collection mismatch as an objective marker of poor control; offer that technique counselling has been provided."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-suspected-adverse-skin-reaction-to-lamotrigine",
    "title": "Pharmacy — Suspected adverse skin reaction to lamotrigine",
    "prompt": "Using the case notes, write a letter to the prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "MEADOW PHARMACY — URGENT RECORD OF CONSULTATION\nPatient: Miss Hannah Reid\nAge: 22\nPrescriber: Dr Stephen Hollis, Meadow Neurology Service\nAttended: 4 September 2026 (today), without an appointment\n\nReason for contact:\nPresented with a new and spreading rash that began during a lamotrigine dose increase. Urgent review requested.\n\nCurrent medications:\nlamotrigine — increased from 25 mg to 50 mg daily on 27 August 2026, eight days ago\nsodium valproate 500 mg twice daily — unchanged since 2024\ncombined oral contraceptive — unchanged\nparacetamol as required\n\nThe concern:\nLamotrigine carries a risk of serious cutaneous reactions, and the risk is increased during titration and when it is combined with sodium valproate, which raises lamotrigine levels. The rash has appeared within the recognised window and is spreading. This requires same-day assessment rather than a routine appointment.\n\nThe rash:\nFirst noticed yesterday morning on the trunk. Now involves both upper arms and the front of the chest. Described as red, slightly raised and itchy. The patient reports it has spread noticeably since yesterday.\n\nAssessed today:\nNo involvement of the mouth, eyes or genital area reported. No fever reported and she feels well in herself. No facial swelling. No blistering seen or described. No sore throat.\n\nRelevant history:\nEpilepsy, diagnosed 2023. Generalised seizures, last seizure four months ago. Titration of lamotrigine ongoing with a further increase planned in two weeks.\n\nAdvice given today:\nAdvised not to take a further dose until she has been assessed, and to attend the emergency department immediately if she develops mouth or eye involvement, fever, blistering or facial swelling. She has been given this in writing.\n\nAllergies:\nNo known drug allergies.\n\nSocial:\nUniversity student, living in shared accommodation. Non-smoker.\n\nAlso mentioned today:\nAsked about managing exam stress. Reports occasional migraines, unchanged for years.",
      "recipient": "Dr Stephen Hollis, Prescriber, Meadow Neurology Service",
      "letterType": "referral",
      "taskInstruction": "Write to the prescriber to report a new rash during lamotrigine titration and seek urgent review."
    },
    "guidanceNote": "Convey urgency given the rash timing during titration and the valproate interaction; advise prompt clinical assessment without diagnosing the reaction yourself."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-suspected-statin-induced-myalgia-review",
    "title": "Pharmacy — Suspected statin-induced myalgia review",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "OAKFIELD PHARMACY — RECORD OF CONSULTATION\nPatient: Mrs Carol Whitfield\nAge: 58\nRegistered GP: Dr Priya Nair, Oakfield Surgery\nAttended: 4 September 2026 (today)\n\nReason for contact:\nAttended reporting muscle pain that began after a recent increase in her statin dose. Clinical review requested.\n\nCurrent medications:\natorvastatin 80 mg at night — increased from 40 mg on 31 July 2026, five weeks ago\namlodipine 5 mg daily\nmetformin 1 g twice daily\nlevothyroxine 75 mcg each morning\n\nThe symptoms:\nAching in both thighs and both shoulders for three weeks, and worsening. Described as a deep ache rather than cramp, present at rest and worse in the evenings. Symmetrical. No weakness reported and she can still climb stairs, though she has stopped her weekly exercise class because of the discomfort. Sleep is disturbed most nights.\n\nThe concern:\nThe onset follows a dose increase, the distribution is symmetrical and proximal, and there is no other obvious explanation. No recent unaccustomed exercise, no recent illness and no new medicine other than the dose change. This pattern is consistent with statin-associated muscle symptoms and warrants review and a creatine kinase measurement.\n\nRelevant history:\nNo previous statin intolerance; on atorvastatin 40 mg since 2021 without difficulty. Type 2 diabetes. Hypothyroidism, thyroid function checked in May 2026 and normal. eGFR normal at the last check four months ago.\n\nToday:\nNo dark urine reported. No fever. Able to mobilise unaided. Weight unchanged.\n\nAllergies:\nPenicillin — rash.\n\nSocial:\nWorks part time in an office. Lives with her husband. Non-smoker.\n\nAlso mentioned today:\nWishes to lose weight and asked about meal replacement products. Enquired about vitamin D. Reports a cat allergy, managed by avoidance.\nCholesterol control:\nTotal cholesterol 5.8 and LDL 3.4 in June 2026, which is why the dose was increased. No previous cardiovascular event; the statin is for primary prevention.",
      "recipient": "Dr Priya Nair, General Practitioner, Oakfield Surgery",
      "letterType": "referral",
      "taskInstruction": "Write to the GP describing new muscle symptoms that may relate to atorvastatin and request clinical review."
    },
    "guidanceNote": "Recommend the GP consider checking creatine kinase and reviewing the dose; avoid stating it is definitely myopathy when it is unconfirmed."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHARMACY",
    "slug": "wri-pharmacy-warfarin-antibiotic-interaction-referral",
    "title": "Pharmacy — Warfarin–antibiotic interaction referral",
    "prompt": "Using the case notes, write a letter to the patient's GP/prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "RIVERSIDE PHARMACY — RECORD OF INTERVENTION\nPatient: Mr Colin Davies\nAge: 68\nRegistered GP: Dr Helen Pryce, Riverside Medical Centre\nAttended: 4 September 2026 (today)\n\nReason for contact:\nPresented to collect a private prescription for an antibiotic that interacts significantly with his anticoagulant. Earlier monitoring and a possible dose adjustment are needed.\n\nPrescription presented:\nclarithromycin 500 mg twice daily for seven days, prescribed 3 September 2026 by the out-of-hours service for a chest infection.\n\nCurrent regular medications:\nwarfarin 4 mg daily — atrial fibrillation, target INR 2.0 to 3.0\nbisoprolol 5 mg daily\natorvastatin 40 mg daily\nomeprazole 20 mg daily\n\nThe concern:\nClarithromycin is a potent enzyme inhibitor and markedly potentiates warfarin, and the rise in INR typically appears within a few days of starting. The risk of bleeding over a seven-day course is clinically significant. The patient was not told of the interaction and no earlier INR has been arranged.\n\nAnticoagulation record:\nMost recent INR 2.6, taken on 14 August 2026, three weeks ago. Stable within range at every check for the past six months on the same dose. Next routine test due in four weeks.\n\nToday:\nNo bruising, no nosebleeds, no blood in the urine or stool. Reports a productive cough for four days, feels unwell and is keen to start the antibiotic without delay. Declined a suggestion to wait until the practice opens. Temperature 37.8 degrees. Blood pressure 130/78.\n\nRelevant history:\nAtrial fibrillation diagnosed 2019. Mild renal impairment, eGFR 58 in May 2026. No previous bleeding event.\n\nAllergies:\nPenicillin — rash.\n\nSocial:\nLives alone. Reliable with medication and keeps his own anticoagulation record book. Ex-smoker, stopped 2010.\n\nAlso mentioned today:\nAsked about a cough medicine to buy. Enquired whether he is due a pneumococcal vaccination.",
      "recipient": "Dr Helen Pryce, General Practitioner, Riverside Medical Centre",
      "letterType": "referral",
      "taskInstruction": "Refer the patient to the GP to review the warfarin dose and arrange earlier INR monitoring because of a clinically significant antibiotic interaction."
    },
    "guidanceNote": "State the interaction and bleeding risk plainly and request a specific action (dose review plus earlier INR), rather than listing every medicine in the notes."
  }
];
