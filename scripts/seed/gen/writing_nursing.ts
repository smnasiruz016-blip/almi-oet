import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Referral to community mental health team (post-discharge depression)",
    prompt: "Using the case notes, write a letter to the community mental health nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Hannah Pereira, Community Mental Health Nurse, Riverside Wellbeing Team",
      taskInstruction: "Write a referral letter requesting community follow-up and monitoring of mood, medication adherence and suicide risk.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Daniel Okoro, 34 years, single, lives alone in rented flat.\nAdmission: 12 June 2026, voluntary, acute mental health unit.\nDischarge: 26 June 2026.\nPresenting: Moderate depressive episode following job loss; expressed passive suicidal ideation on admission, no plan or intent now.\nHistory: First episode of depression. No previous psychiatric admissions. Smoker 10/day. Father died of myocardial infarction aged 60.\nTreatment in hospital: Started sertraline 50mg daily; engaged in group therapy; mood improved over 2 weeks.\nCurrent status: Mood stable, sleeping 6–7 hours, eating regularly, denies current suicidal thoughts. Agreed to continue medication.\nSocial: Estranged from mother; one supportive friend nearby. Applying for new jobs. Limited family support.\nAllergies: Nil known.\nMedications: Sertraline 50mg mane.\nPlan: Community follow-up; monitor mood and adherence; reassess suicide risk; GP to continue prescribing. Patient enjoys cycling (mentioned in notes)."
    },
    guidanceNote: "Lead with the ongoing risk-monitoring need and medication adherence. Hobbies such as cycling and the father's cardiac history are not relevant to this mental health referral — omit them."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Discharge advice to parents of an asthmatic child (paediatric ward)",
    prompt: "Using the case notes, write a letter to the patient's parents. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Mr and Mrs Tran, parents of Lily Tran",
      taskInstruction: "Write a letter advising the parents on home management and warning signs following their daughter's asthma admission.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Lily Tran, 6 years, paediatric ward.\nAdmission: 23 June 2026 with acute asthma exacerbation triggered by a chest infection.\nDischarge: 26 June 2026.\nHistory: Asthma diagnosed age 4. Two previous emergency presentations. Eczema as infant, now resolved.\nTreatment: Nebulised salbutamol, oral prednisolone 5-day course, oxygen for 24 hours. Responded well.\nCurrent status: Afebrile, oxygen saturation 98% on air, chest clear, playing normally.\nMedications on discharge: Salbutamol inhaler with spacer PRN; beclomethasone preventer inhaler twice daily; remaining prednisolone doses.\nAllergies: Nil known.\nSocial: Lives with both parents and one younger sibling. Attends primary school. Family has a pet cat.\nPlan: Continue preventer inhaler daily; correct spacer technique demonstrated to mother; complete steroid course; GP review in one week; return if breathing worsens, lips blue, or reliever needed more than 4-hourly."
    },
    guidanceNote: "Use plain, reassuring language for parents. Focus on inhaler routine and the warning signs that mean returning to hospital. Past eczema is resolved and not relevant to ongoing care."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Transfer to palliative care unit (advanced pancreatic cancer)",
    prompt: "Using the case notes, write a letter to the receiving nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "transfer",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Sister Mary Quinn, Palliative Care Unit, St Anne's Hospice",
      taskInstruction: "Write a transfer letter summarising the patient's condition, symptom management and family wishes for end-of-life care.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mrs Eleanor Castle, 71 years, widow.\nCurrent admission: Oncology ward, 18 June 2026.\nTransfer date: 26 June 2026, to hospice for end-of-life care.\nDiagnosis: Advanced pancreatic cancer with liver metastases; further active treatment ceased. Patient and family aware of prognosis.\nHistory: Type 2 diabetes (diet-controlled); hypertension; cholecystectomy 2009.\nCurrent status: Bedbound, increasing pain managed with subcutaneous morphine via syringe driver; nausea controlled with metoclopramide; poor oral intake; mild confusion at night. Pressure-area care ongoing, sacral skin intact.\nSymptom management: Syringe driver morphine 30mg/24h; metoclopramide 30mg/24h; PRN midazolam for agitation.\nAllergies: Penicillin (rash).\nSocial: Two adult daughters, both involved and present daily. Patient wishes to die peacefully, no resuscitation — DNACPR in place. Religious: Catholic, requests chaplain visits.\nPlan: Continue comfort-focused care; maintain syringe driver; honour DNACPR; involve family; spiritual support."
    },
    guidanceNote: "Prioritise current symptom control, the DNACPR decision, allergy and the family's wishes. Old surgical history (cholecystectomy) is background — keep it brief or omit; comfort and dignity are the focus."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Referral to wound care clinic (post-operative surgical wound dehiscence)",
    prompt: "Using the case notes, write a letter to the wound care nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Priya Naidoo, Clinical Nurse Specialist, Outpatient Wound Care Clinic",
      taskInstruction: "Write a referral letter requesting ongoing assessment and dressing management of a dehisced abdominal wound.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Gregor Bauer, 58 years.\nProcedure: Emergency laparotomy for perforated diverticulitis, 10 June 2026.\nDischarge: 26 June 2026.\nPost-operative course: Wound infection day 6; partial dehiscence of lower midline incision. Treated with IV antibiotics, now oral. Wound now managing by secondary intention.\nWound status: 4cm x 2cm cavity, moderate exudate, no necrotic tissue, surrounding skin healthy. Currently dressed with alginate and secondary absorbent dressing, changed alternate days.\nHistory: Type 2 diabetes (metformin), obesity (BMI 34), ex-smoker. Hypertension.\nCurrent status: Afebrile, eating well, mobile independently, blood glucose 8–10 mmol/L.\nMedications: Metformin 1g BD; co-amoxiclav 5 days remaining; amlodipine 5mg; paracetamol PRN.\nAllergies: Nil known.\nSocial: Lives with wife, works as accountant, planning return to work in 3 weeks.\nPlan: Twice-weekly clinic dressing changes; monitor for re-infection; optimise glycaemic control to aid healing; review wound size weekly."
    },
    guidanceNote: "Describe the wound dimensions, current dressing regimen and the diabetes relevant to healing. The patient's occupation is minor context — the clinical detail the wound nurse needs is the wound status and glycaemic control."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Discharge to district nurse following heart failure admission",
    prompt: "Using the case notes, write a letter to the district nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "discharge",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Ms Carol Underwood, District Nursing Service",
      taskInstruction: "Write a discharge letter requesting home monitoring of fluid status, weight and medication titration.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Albert Finch, 79 years, widower, lives alone in bungalow.\nAdmission: 17 June 2026, decompensated chronic heart failure with peripheral oedema and breathlessness.\nDischarge: 26 June 2026.\nHistory: Heart failure (ejection fraction 35%); atrial fibrillation; chronic kidney disease stage 3; cataract surgery 2022.\nTreatment: IV furosemide, fluid restriction 1.5L/day, diuretic optimisation. Lost 4kg of fluid; oedema much improved; now breathing comfortably at rest.\nCurrent status: Weight 78kg on discharge, mild ankle oedema remaining, mobilising with frame, oxygen saturation 95% on air.\nMedications: Furosemide 40mg BD; bisoprolol 5mg; apixaban 5mg BD; ramipril 2.5mg; atorvastatin.\nAllergies: Nil known.\nSocial: One daughter visits weekly; uses a walking frame; concerned about managing alone. Meals-on-wheels arranged.\nPlan: Daily weight monitoring; report weight gain over 2kg in 3 days; monitor for increasing oedema and breathlessness; bloods for renal function in one week; reinforce fluid restriction."
    },
    guidanceNote: "Centre the letter on daily weight, fluid restriction and the weight-gain threshold to report. The cataract surgery is irrelevant to heart-failure home monitoring — leave it out."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Referral to falls prevention service from aged care facility",
    prompt: "Using the case notes, write a letter to the falls prevention coordinator. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Mr Thomas Reilly, Falls Prevention Coordinator, Aged Care Outreach Service",
      taskInstruction: "Write a referral letter requesting assessment of a resident with recurrent falls.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Resident: Mrs Doris Whitfield, 84 years, residential aged care facility.\nReferral date: 26 June 2026.\nReason: Three falls in the past six weeks, most recent two days ago causing a skin tear to left forearm (dressed, healing).\nHistory: Osteoporosis; Parkinson's disease (diagnosed 2021); mild cognitive impairment; macular degeneration with reduced vision; previous hip fracture 2023.\nMobility: Walks with a wheeled frame, unsteady, freezing episodes noted. Tends to rush to the toilet at night.\nMedications: Levodopa/carbidopa; alendronate weekly; bisoprolol; nocturnal sedation occasionally used.\nContributing factors: Poor night lighting in room; postural hypotension recorded (lying 130/80, standing 105/65); urinary urgency.\nAllergies: Sulfa drugs (rash).\nSocial: Son visits fortnightly. Enjoys knitting and the facility choir.\nPlan: Multidisciplinary falls assessment; review postural blood pressure and night sedation; environmental and continence review; physiotherapy for gait."
    },
    guidanceNote: "Group the falls-relevant factors — Parkinson's, postural hypotension, vision, night toileting and sedation. Knitting and choir attendance are social colour, not relevant to a falls assessment."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Transfer to coronary care unit from emergency department (chest pain)",
    prompt: "Using the case notes, write a letter to the receiving nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "transfer",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Charge Nurse, Coronary Care Unit",
      taskInstruction: "Write a transfer letter handing over a patient with a confirmed non-ST-elevation myocardial infarction.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Raymond Bellini, 62 years.\nED arrival: 26 June 2026, 14:20, central crushing chest pain radiating to left arm for two hours.\nTransfer: To CCU, 17:00 same day.\nFindings: ECG showed ST depression in lateral leads; troponin elevated at 480 ng/L (rising). Diagnosis: NSTEMI.\nTreatment given in ED: Aspirin 300mg, ticagrelor 180mg, fondaparinux, GTN infusion, morphine 5mg, oxygen titrated. Pain now settled, score 1/10.\nCurrent observations: BP 138/82, HR 76 regular, SpO2 97% on 2L, afebrile, cannula left forearm patent.\nHistory: Hypertension, hyperlipidaemia, smoker 20/day, father had MI. Appendicectomy aged 20.\nMedications (home): Amlodipine, atorvastatin.\nAllergies: Nil known.\nSocial: Married, works as a taxi driver, anxious about diagnosis.\nPlan: Continue cardiac monitoring; awaiting cardiology review for angiography; repeat troponin and ECG; bed rest; observe for further chest pain or arrhythmia."
    },
    guidanceNote: "A transfer handover needs the diagnosis, treatment already given, current observations and the immediate monitoring plan. The childhood appendicectomy is irrelevant — the cardiac risk factors and acute management are what matter."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Discharge advice for new mother and newborn (postnatal ward)",
    prompt: "Using the case notes, write a letter to the community midwife. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Ms Fiona Doyle, Community Midwife",
      taskInstruction: "Write a handover letter requesting community follow-up of a new mother and her newborn.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mrs Amina Yusuf, 29 years, first baby.\nDelivery: 24 June 2026, normal vaginal birth at 39 weeks, healthy girl 3.4kg.\nDischarge: 26 June 2026.\nMaternal status: Small perineal tear (first degree, no sutures), healing well. Mild after-pains. Breastfeeding established, latch good. Slightly tearful but bonding well; no signs of postnatal depression.\nObstetric history: Uncomplicated pregnancy; gestational glucose normal. Blood loss at delivery minimal.\nBaby: Feeding well, passed meconium and urine, mild physiological jaundice (not requiring phototherapy), newborn screening done, vitamin K given.\nMedications: Paracetamol PRN; ferrous sulphate (mild anaemia).\nAllergies: Nil known.\nSocial: Lives with husband; supportive extended family nearby; first language Somali, good English. Was a teacher before maternity leave.\nPlan: Community midwife home visit within 48 hours; monitor baby's jaundice and feeding; check maternal mood and perineal healing; weigh baby."
    },
    guidanceNote: "Keep it warm and clear for a routine postnatal handover. Focus on feeding, jaundice monitoring, perineal healing and mood. The mother's former occupation is not relevant to ongoing care."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Referral to diabetes specialist nurse (newly diagnosed type 1)",
    prompt: "Using the case notes, write a letter to the diabetes specialist nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Lauren Hayes, Diabetes Specialist Nurse",
      taskInstruction: "Write a referral letter requesting education and ongoing support for a newly diagnosed type 1 diabetic.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Miss Chloe Adeyemi, 19 years, university student.\nAdmission: 21 June 2026 with diabetic ketoacidosis.\nDischarge: 26 June 2026.\nDiagnosis: New diagnosis of type 1 diabetes. DKA resolved with IV insulin and fluids.\nCurrent status: Stable, eating, blood glucose 7–11 mmol/L on subcutaneous insulin. Ketones cleared. Anxious about self-injecting.\nEducation so far: Basic insulin injection technique taught on ward; can demonstrate but lacks confidence. Carbohydrate counting not yet covered. Hypoglycaemia signs explained.\nMedications: Basal-bolus insulin (glargine nocte; aspart with meals); no other regular medications.\nHistory: Previously well. Tonsillectomy aged 8. Family history of autoimmune thyroid disease.\nAllergies: Nil known.\nSocial: Lives in university halls, shares kitchen, busy social schedule, plays netball. Concerned about managing diabetes at university.\nPlan: Specialist education on carbohydrate counting, dose adjustment, sick-day rules and hypoglycaemia management; psychological support for adjustment; ongoing structured follow-up."
    },
    guidanceNote: "Highlight the new diagnosis, current insulin regimen and the specific education gaps (carb counting, sick-day rules, confidence). The childhood tonsillectomy is not relevant; her living situation matters because it affects self-management."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Transfer to stroke rehabilitation ward (acute ischaemic stroke)",
    prompt: "Using the case notes, write a letter to the rehabilitation nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "transfer",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Nurse in Charge, Stroke Rehabilitation Ward",
      taskInstruction: "Write a transfer letter handing over a patient for rehabilitation following an acute ischaemic stroke.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Ivan Petrov, 68 years.\nAcute admission: 19 June 2026, left-sided weakness and slurred speech; CT confirmed right middle cerebral artery ischaemic stroke. Thrombolysed within window.\nTransfer: 26 June 2026 to rehabilitation ward.\nCurrent status: Right MCA stroke. Left arm weakness (power 2/5), left leg weakness (power 3/5), mild facial droop improving. Speech now intelligible. Swallow assessed by SLT — soft diet, thickened fluids. Requires assistance of two to transfer.\nContinence: Occasional urinary incontinence, using continence aids.\nSkin: At risk; pressure-area care two-hourly, sacrum intact.\nHistory: Atrial fibrillation (now anticoagulated), hypertension, type 2 diabetes. Hernia repair 2015.\nMedications: Apixaban; amlodipine; metformin; atorvastatin.\nAllergies: Codeine (nausea).\nSocial: Lives with wife in a two-storey house; retired carpenter; motivated to walk again.\nPlan: Multidisciplinary rehabilitation — physiotherapy, occupational therapy, ongoing SLT; maintain swallow precautions; pressure care; continence assessment; mobility goals."
    },
    guidanceNote: "Rehabilitation staff need the functional deficits, swallow precautions, transfer needs and skin/continence risks. The 2015 hernia repair is irrelevant; the two-storey home is relevant to discharge planning."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Referral to community drug and alcohol service (alcohol withdrawal)",
    prompt: "Using the case notes, write a letter to the community addiction nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Mr Sean Gallagher, Community Drug and Alcohol Service",
      taskInstruction: "Write a referral letter requesting ongoing support following a medically managed alcohol detoxification.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Wayne Fletcher, 47 years.\nAdmission: 20 June 2026 with alcohol withdrawal after stopping a long history of heavy daily drinking.\nDischarge: 26 June 2026.\nDetox: Completed assisted withdrawal with reducing chlordiazepoxide regimen; no seizures or delirium tremens. Now medication-free for 24 hours.\nCurrent status: Stable, no tremor, eating well, sleeping. Motivated to remain abstinent; expresses regret and wants to repair family relationships.\nHistory: Alcohol-related liver disease (mild, compensated); previous relapse after a community programme last year; depression. Wrist fracture 2018.\nMedications: Thiamine; vitamin B compound; acamprosate started to support abstinence; sertraline 50mg.\nAllergies: Nil known.\nSocial: Recently separated from partner; two children he wishes to see; unemployed builder; lives alone. Limited support network. Identifies stress and isolation as triggers.\nPlan: Community follow-up for relapse prevention; continue acamprosate and thiamine; psychological support; address social isolation; monitor mood."
    },
    guidanceNote: "Emphasise the completed detox, current medications supporting abstinence, previous relapse and the social triggers. The 2018 wrist fracture is not relevant to addiction follow-up."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Discharge to community nurse following cellulitis treatment",
    prompt: "Using the case notes, write a letter to the community nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "discharge",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Ms Rachel Obi, Community Nursing Team",
      taskInstruction: "Write a discharge letter requesting completion of intravenous antibiotics at home and wound monitoring.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mrs Beverley Hartley, 66 years.\nAdmission: 22 June 2026 with cellulitis of the right lower leg following an insect bite.\nDischarge: 26 June 2026 on the home IV antibiotic (OPAT) pathway.\nTreatment: IV flucloxacillin; redness and swelling reduced markedly; pain settled; afebrile for 48 hours. Leg elevated during admission.\nCurrent status: Right calf still mildly warm and pink but improving; affected area outline marked; no blistering or ulceration; mobile with one stick.\nHistory: Type 2 diabetes (well controlled), varicose veins, hypertension. Hysterectomy 1998.\nMedications: IV flucloxacillin (5 days remaining via community); metformin; amlodipine; paracetamol PRN.\nAllergies: Penicillin previously queried but confirmed not allergic; tolerates flucloxacillin well.\nSocial: Lives with husband; daughter nearby; keen gardener (bite occurred while gardening).\nPlan: Community nurse to administer daily IV antibiotic; monitor cellulitis markings for spread; encourage leg elevation; review if fever returns or redness extends."
    },
    guidanceNote: "Make the IV antibiotic schedule and cellulitis monitoring the core. Note the penicillin query was resolved. The 1998 hysterectomy is irrelevant; the gardening explains the bite but elevation and monitoring are the priorities."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Advice letter to carer following COPD exacerbation discharge",
    prompt: "Using the case notes, write a letter to the patient's carer. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "advice",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Mr Joseph Mensah, son and main carer of Mr Kofi Mensah",
      taskInstruction: "Write a letter advising the carer on home management and warning signs after his father's COPD admission.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Kofi Mensah, 75 years.\nAdmission: 18 June 2026 with acute exacerbation of COPD and chest infection.\nDischarge: 26 June 2026.\nHistory: COPD (severe), ex-smoker (quit 5 years ago), previous two admissions this year, mild heart failure, osteoarthritis of knees.\nTreatment: Oral antibiotics, prednisolone course, nebulisers, controlled oxygen. Breathing returned to baseline; saturations 90–92% (his normal range).\nCurrent status: Comfortable at rest, breathless on exertion (baseline), productive cough now clearing, eating better.\nMedications: Tiotropium inhaler daily; salbutamol PRN; remaining prednisolone and antibiotic doses; home oxygen 1L overnight; furosemide.\nAllergies: Nil known.\nOxygen safety: No smoking near oxygen; equipment delivered to home.\nSocial: Lives with son who provides daily care; ground-floor flat; uses a perching stool. Enjoys listening to the radio.\nPlan: Complete medication courses; correct inhaler technique reinforced; recognise warning signs — increasing breathlessness, change in sputum colour, fever, confusion; oxygen safety; GP review in one week; pulmonary rehabilitation referral pending."
    },
    guidanceNote: "Write supportively for a lay carer: medication completion, inhaler use, oxygen safety and the warning signs to act on. The radio hobby and knee osteoarthritis are not relevant to managing the COPD at home."
  }
];
