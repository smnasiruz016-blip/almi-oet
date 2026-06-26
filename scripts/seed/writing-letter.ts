// Seeds original OET Writing (clinical letter) items. These are PER-PROFESSION:
// each item carries a `profession`. Phase 0 ships Nursing starter content; the
// other 11 professions follow in content batches (the schema/routes are ready
// for all 12). Case notes are original to AlmiOET — never copied from OET.
//
// Run: npm run seed:writing  (needs DATABASE_URL set)

import { PrismaClient, Prisma } from "@prisma/client";
import { isDirectRun } from "./_entry";

const prisma = new PrismaClient();

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Discharge to community nurse (leg ulcer)",
    prompt:
      "Using the case notes, write a letter to the community nurse who will continue this patient's care after discharge. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "discharge",
    timeLimitSeconds: 45 * 60,
    payload: {
      letterType: "discharge",
      recipient: "Ms R. Okafor, Community Nursing Team, Riverside Health Centre",
      taskInstruction:
        "Write a discharge letter handing over this patient's wound care and follow-up to the community nursing team.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr George Hill, 74. Admitted 8 days ago with cellulitis of the left lower leg over a chronic venous ulcer. Treatment: IV antibiotics (now switched to oral, 5 days remaining), daily wound dressing with foam dressing, compression bandaging resumed once infection settled. Current status: cellulitis resolved, ulcer clean and granulating, ~3cm diameter. Mobility: independent with a stick. Social: lives alone, daughter visits daily. Allergies: penicillin. Plan: continue oral antibiotics to completion; redress every 48 hours; maintain compression; GP review in 2 weeks; refer to tissue viability if not improving in 4 weeks.",
    },
    guidanceNote:
      "A discharge letter hands over care. Lead with what the community nurse must do next; include allergies and the follow-up plan; leave out admission detail that doesn't affect ongoing care.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "NURSING",
    title: "Nursing — Transfer to rehabilitation unit (post-hip fracture)",
    prompt:
      "Using the case notes, write a letter to the Charge Nurse at the rehabilitation unit. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "transfer",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Ms Carla Devine, Charge Nurse, Riverside Rehabilitation Unit",
      taskInstruction: "Write a transfer letter handing over Mrs Pereira's post-operative status and rehabilitation needs so the receiving team can continue safe care.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mrs Aurora Pereira, 78 years, retired seamstress.\nAdmission: 04/06/2026, via Emergency. Mechanical fall at home; right neck-of-femur fracture.\nSurgery: 05/06/2026 — right hemiarthroplasty under spinal anaesthetic. Uncomplicated.\nPast history: Type 2 diabetes (diet-controlled), hypertension, mild osteoarthritis (both knees), cataract surgery 2021.\nMedications: amlodipine 5 mg daily, metformin 500 mg BD, paracetamol 1 g QDS PRN, enoxaparin 40 mg SC daily (VTE prophylaxis, continue 14 days post-op).\nAllergies: penicillin (rash).\nPost-op progress: Wound clean, dry, staples intact — removal due 19/06/2026. Mobilising 10 m with frame and one assist; weight-bearing as tolerated. Pain well controlled, scores 3/10 on movement. Slight constipation — lactulose commenced.\nFunctional: Independent before fall, lived alone in ground-floor flat, daughter nearby. Needs assist with washing/dressing currently. Continent. Pressure areas intact (Waterlow 12).\nSocial: Anxious about returning home; daughter supportive.\nPlan: Inpatient rehab to restore independent mobility and ADLs; ongoing physiotherapy and occupational therapy; pre-discharge home assessment.",
    },
    guidanceNote:
      "This is a handover for ongoing rehabilitation — prioritise mobility status, weight-bearing instructions, wound/staple plan, VTE prophylaxis duration, allergy and her care goals. Omit resolved details (cataract 2021) unless they affect current care.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — GP referral for suspected DVT",
    prompt:
      "Using the case notes, write a letter to the on-call medical registrar at the Emergency Assessment Unit. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Helena Cardoso, On-call Medical Registrar, Riverside Hospital Emergency Assessment Unit",
      taskInstruction: "Refer the patient for urgent assessment and imaging to exclude a deep vein thrombosis and possible pulmonary embolism.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Daniel Ortega, 58 years.\nSetting: General practice, today.\nPresenting: 3-day history of progressive swelling, warmth and aching of the right calf; calf 4 cm greater in circumference than left; mild pleuritic right-sided chest discomfort since this morning.\nPMH: Type 2 diabetes (8 yrs, well controlled); osteoarthritis right knee; appendicectomy aged 19.\nRecent: Returned 5 days ago from a 13-hour long-haul flight; reduced mobility past week.\nMeds: Metformin 1 g BD; paracetamol PRN.\nAllergies: Penicillin (rash).\nSocial: Ex-smoker (quit 6 yrs ago); office manager; lives with wife.\nObs today: BP 138/84; HR 96; RR 18; SpO2 96% room air; afebrile.\nExam: Right calf tender, warm, oedematous; Homans sign positive; chest clear; heart sounds normal.\nWells score: high probability.\nPlan: Urgent referral; D-dimer and Doppler ultrasound required; consider CTPA given chest symptoms; analgesia continued.",
    },
    guidanceNote:
      "Foreground the calf findings, recent long-haul travel and chest symptoms — these drive the urgency. The appendicectomy and osteoarthritis are background; omit them unless space allows. State the penicillin allergy clearly.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Discharge after paediatric asthma admission",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "discharge",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Priya Nair, General Practitioner, Elmwood Family Surgery",
      taskInstruction: "Hand over post-discharge management and follow-up arrangements following an acute asthma exacerbation in a child.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mia Holloway, 7 years.\nAdmitted: 4 days ago, Paediatric Ward, Riverside Hospital. Discharged today.\nReason: Acute moderate-to-severe asthma exacerbation triggered by viral URTI.\nOn admission: RR 38, SpO2 90% room air, widespread wheeze, unable to complete sentences, peak flow 55% predicted.\nTreatment given: Oxygen; back-to-back salbutamol nebulisers then spacer; ipratropium; oral prednisolone 3-day course (completed today).\nPMH: Asthma diagnosed age 4; previous admission 18 months ago; eczema.\nMeds on discharge: Beclometasone inhaler 100 mcg BD (preventer); salbutamol 100 mcg PRN via spacer; emollient cream for eczema.\nAllergies: None known.\nInhaler technique: Reviewed with mother; spacer demonstrated.\nSocial: Lives with mother and older brother; household smoker (father, smokes outdoors); no pets.\nProgress: SpO2 98% room air at discharge; peak flow 85% predicted; afebrile; eating and playing normally.\nPlan: GP review within 48 hrs; written asthma action plan supplied; preventer adherence to reinforce; consider routine asthma clinic review; smoking-cessation advice for household.",
    },
    guidanceNote:
      "Prioritise the discharge medications, the 48-hour review request and the action plan — these are what the GP must act on. The eczema and emollient are minor; mention household smoke exposure as it is relevant to ongoing control. Avoid restating every observation.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Warfarin–antibiotic interaction referral",
    prompt:
      "Using the case notes, write a letter to the patient's GP/prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Helen Pryce, General Practitioner, Riverside Medical Centre",
      taskInstruction: "Refer the patient to the GP to review the warfarin dose and arrange earlier INR monitoring because of a clinically significant antibiotic interaction.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Colin Davies, 68 years.\nPresented today to collect a private prescription for clarithromycin 500mg twice daily for 7 days (prescribed yesterday by out-of-hours service for a chest infection).\nCurrent regular medication: warfarin 4mg daily (target INR 2.0–3.0, atrial fibrillation), bisoprolol 5mg daily, atorvastatin 40mg daily, omeprazole 20mg daily.\nMost recent INR 2.6, taken three weeks ago; stable for the past six months.\nAllergies: penicillin (rash).\nRelevant history: AF diagnosed 2019; mild renal impairment.\nIssue identified at counter: clarithromycin is a potent enzyme inhibitor and markedly potentiates warfarin, raising bleeding risk; patient unaware of interaction.\nPatient reports no current bruising or bleeding.\nLives alone; reliable with medication.\nDeclined to delay antibiotic as feels unwell.",
    },
    guidanceNote:
      "State the interaction and bleeding risk plainly and request a specific action (dose review plus earlier INR), rather than listing every medicine in the notes.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Discharge medicines reconciliation to GP",
    prompt:
      "Using the case notes, write a letter to the patient's GP/prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "discharge",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Sara Mahmood, General Practitioner, Oakfield Surgery",
      taskInstruction: "Inform the GP of medication changes made during admission and request continued monitoring of renal function and blood pressure.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mrs Eleanor Fitch, 79 years. Discharged today from Ward 6 after admission for an acute kidney injury secondary to dehydration following a diarrhoeal illness.\nMedication changes on admission: ramipril 10mg daily SUSPENDED; metformin 1g twice daily SUSPENDED; furosemide 40mg daily SUSPENDED.\nRenal function on discharge improving but not yet at baseline (eGFR 48, baseline 62).\nContinued unchanged: amlodipine 5mg daily, atorvastatin 20mg daily, lansoprazole 30mg daily.\nNew on discharge: none.\nPlan agreed with consultant: restart ramipril and furosemide once renal function and blood pressure reviewed in primary care; metformin to remain suspended pending eGFR recheck.\nAllergies: none known.\nLives with daughter, who manages medication.\nBlood pressure at discharge 138/82.\nUnderstands tablets have been paused.",
    },
    guidanceNote:
      "Make the suspended-versus-continued medicines unambiguous and tie each request to a monitoring parameter; omit unchanged social detail that does not affect ongoing care.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Impacted lower third molar referral",
    prompt:
      "Using the case notes, write a letter to the oral & maxillofacial surgeon. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Mr. Daniel Okafor, Oral & Maxillofacial Surgeon, Riverside Dental Hospital",
      taskInstruction: "Refer the patient for surgical assessment and removal of a symptomatic, partially erupted lower left third molar.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Ms. Hannah Whitlock, 27 years, administrative assistant.\nPresenting complaint: 3-week history of recurrent pain and swelling around lower left back tooth; difficulty opening mouth fully for past 4 days.\nDental history: Regular attender. Restorations 36, 46. No prior extractions.\nMedical history: Mild asthma (salbutamol PRN). No other conditions.\nAllergies: Penicillin (rash as a child).\nMedications: Combined oral contraceptive pill.\nSocial: Non-smoker. Occasional alcohol.\nExamination: 38 partially erupted, mesioangular impaction. Operculum over distal 38 inflamed, tender, slight pus on pressure. Limited mouth opening (~30mm). No facial swelling, no lymphadenopathy, afebrile today.\nRadiograph (OPG): 38 mesioangular impaction; roots in close proximity to inferior dental canal — possible superimposition over canal.\nProvisional diagnosis: Recurrent pericoronitis associated with impacted 38.\nManagement to date: Irrigation under operculum, chlorhexidine mouthwash advised, metronidazole 400mg TDS 5 days commenced (penicillin allergy).\nPlan: Refer for surgical removal assessment given recurrent episodes and IDC proximity.",
    },
    guidanceNote:
      "This is a referral, so your aim is a clear request for surgical assessment — foreground the recurrent pericoronitis, the radiographic IDC proximity, and the penicillin allergy. The asthma and contraceptive pill are relevant to surgical/anaesthetic safety; the childhood restorations are not, so omit them.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Discharge to GP after suspicious lesion biopsy",
    prompt:
      "Using the case notes, write a letter to the patient's GP. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "discharge",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr. Priya Venkataraman, General Practitioner, Eastgate Medical Centre",
      taskInstruction: "Inform the GP of a benign biopsy outcome, the advice given, and request support with smoking cessation and ongoing monitoring.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr. George Halloran, 58 years, retired bus driver.\nReason for attendance: Routine check-up; incidental white patch noted on left lateral border of tongue.\nDental history: Irregular attender. Upper partial denture. Heavily restored dentition.\nMedical history: Type 2 diabetes (metformin), hypertension (amlodipine).\nSocial: Smokes 20/day for 35 years; 30 units alcohol/week.\nExamination: 15mm homogenous white patch, left lateral tongue, non-wipeable, no induration or ulceration. No cervical lymphadenopathy.\nProcedure: Incisional biopsy performed under local anaesthetic two weeks ago; sutures removed, healing well.\nHistopathology: Hyperkeratosis with mild epithelial dysplasia; no malignancy.\nAdvice given: Strong smoking cessation and alcohol reduction advice; explained link to oral cancer risk.\nPlan: Discharge to routine dental recall with 3-monthly soft-tissue review; lesion to be re-referred if change. Denture reline planned separately.\nRequest: GP support for smoking cessation referral and diabetes review.",
    },
    guidanceNote:
      "A discharge letter should reassure and hand over clearly: lead with the benign biopsy result, then the lifestyle risk factors and the specific support you want the GP to provide. The denture reline is your own follow-up, not the GP's, so leave it out or mention it only in passing.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Referral to orthopaedic surgeon for non-improving knee",
    prompt:
      "Using the case notes, write a letter to the orthopaedic surgeon. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Mr Daniel Okafor, Orthopaedic Surgeon, Riverside General Hospital",
      taskInstruction: "Refer the patient for orthopaedic assessment of a suspected internal derangement of the right knee that has not responded to conservative physiotherapy.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Ms Hannah Pierce, 34, primary school teacher.\nPresenting condition: Right knee pain and intermittent locking, 4 months.\nMechanism: Twisting injury during recreational netball; felt a 'pop', immediate swelling.\nHistory: No previous knee injury or surgery. Non-smoker. BMI 24. No diabetes.\nMeds: Ibuprofen 400mg PRN; Paracetamol PRN. Allergy: penicillin (rash).\nAssessment (initial): Effusion +, medial joint line tenderness, McMurray positive medially, ROM 5–110° (limited terminal extension), quads inhibition, MMT quads 4/5.\nTreatment so far (12 sessions / 10 weeks): Progressive quads/hamstring strengthening, ROM work, proprioceptive retraining, taping, activity modification.\nProgress: ROM improved to 0–130°, strength now 4+/5; HOWEVER mechanical locking persists ~2–3x/week, recurrent effusion after activity, ongoing instability descending stairs. Unable to return to sport; modified work duties.\nPlan: Conservative management plateaued; mechanical symptoms suggest possible medial meniscal tear. Refer for orthopaedic review +/- MRI.",
    },
    guidanceNote:
      "Lead with the mechanical locking and failed conservative trial — those justify the referral. Omit the resolved ROM details unless they support the plateau.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Discharge to GP after post-stroke rehabilitation",
    prompt:
      "Using the case notes, write a letter to the patient's GP. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "discharge",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Amara Singh, General Practitioner, Eastgate Medical Centre",
      taskInstruction: "Inform the GP of the patient's discharge from community physiotherapy following stroke rehabilitation and request ongoing monitoring and falls-risk support.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr George Whitlock, 71, retired electrician, lives with wife (bungalow).\nDiagnosis: Left middle cerebral artery ischaemic stroke, 5 months ago. Right hemiparesis.\nPMH: Hypertension, atrial fibrillation, type 2 diabetes.\nMeds: Apixaban, amlodipine, metformin, atorvastatin. No known allergies.\nRehab course: Inpatient then 14 weeks community physiotherapy.\nProgress: Independent transfers and indoor mobility with single-point stick. Walks 150m outdoors with supervision; mild residual right foot drop, manages with AFO. Right upper limb: functional grasp returning, used as assist.\nCurrent status: Berg Balance 44/56; one fall (no injury) reaching in kitchen. Independent in personal ADLs. Mood low at times re: driving cessation.\nPlan/recommendations: Discharge — goals met. Continue home exercise programme (provided). Monitor BP and falls risk; review AFO fit in 6 months. Consider low-mood review. Has not resumed driving — awaiting DVLA guidance.",
    },
    guidanceNote:
      "Frame discharge around what the GP must now monitor — falls risk, low mood, AFO review — not the full rehab timeline. Be specific about the single fall.",
  },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "DIETETICS", title: "Dietetics — Type 2 diabetes referral to community dietitian", prompt: "Using the case notes, write a letter to the community dietetics service. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "referral", timeLimitSeconds: 2700, payload: { letterType: "referral", recipient: "Ms Helena Brookes, Senior Dietitian, Riverside Community Dietetics Service", taskInstruction: "Refer Mr Okonkwo for ongoing dietary management of poorly controlled type 2 diabetes and recent weight gain.", wordMin: 180, wordMax: 200, caseNotes: "Patient: Mr Daniel Okonkwo, 54, accountant. Seen in GP-attached diabetes clinic, 12 June 2026.\nDiagnosis: Type 2 diabetes (diagnosed 2021); hypertension; mild obesity.\nCurrent status: HbA1c 9.2% (up from 7.8% six months ago). Weight 96 kg, height 1.74 m, BMI 31.7. Waist 108 cm. BP 142/88.\nDiet history: Skips breakfast; large evening meals; 2–3 sugary soft drinks/day; frequent takeaway lunches; minimal vegetables. Snacks on biscuits at desk.\nMedications: Metformin 1g BD; Ramipril 5mg OD; Atorvastatin 20mg ON.\nAllergies: Penicillin (rash).\nSocial: Lives with wife; sedentary job; walks little; reports work stress and irregular meals. Wife cooks; willing to attend joint sessions.\nMotivation: Concerned after father's amputation; keen to avoid insulin.\nPlan: Dietitian to provide carbohydrate-awareness education, structured meal pattern, weight-management goals; reinforce physical activity; review in 3 months alongside GP." }, guidanceNote: "Lead with why ongoing dietetic input is needed (rising HbA1c, weight gain), then give the diet history and motivators the dietitian will build on. Omit the BP and statin detail unless you can tie it to the dietary plan." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "DIETETICS", title: "Dietetics — Discharge: malnutrition & enteral feeding handover", prompt: "Using the case notes, write a letter to the patient's General Practitioner. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "STRETCH", topicTag: "discharge", timeLimitSeconds: 2700, payload: { letterType: "discharge", recipient: "Dr Anita Verma, General Practitioner, Larchfield Surgery", taskInstruction: "Hand over nutritional care for a patient discharged home on oral nutritional supplements following treatment for malnutrition.", wordMin: 180, wordMax: 200, caseNotes: "Patient: Mrs Eileen Carmody, 78, widow, lives alone.\nAdmission: 28 May 2026, aspiration pneumonia + significant weight loss.\nNutrition assessment: Unintentional loss 7 kg over 3 months. Weight on admission 47 kg, height 1.62 m, BMI 17.9. MUST score 3 (high risk). Poor appetite, ill-fitting dentures, low mood since husband's death.\nIntervention: Nasogastric feeding for 8 days during acute phase; transitioned to full oral intake by discharge. Now eating soft fortified meals + 2 oral nutritional supplements/day (Ensure Plus, prescribed).\nDischarge status (24 June 2026): Weight 49 kg, swallow safe (SALT cleared normal diet/fluids), tolerating supplements well.\nMedications: Supplements as above; Lansoprazole 30mg OD; new low-dose Sertraline 50mg OD.\nAllergies: None known.\nSocial: Daughter visits weekly; meals-on-wheels arranged; dental referral pending.\nPlan: GP to continue supplement prescription, monitor weight monthly, re-refer to dietitian if weight loss recurs or intake falls; community dietitian to follow up in 6 weeks." }, guidanceNote: "The GP needs the discharge weight, current oral intake plan and clear monitoring instructions — the NG-feeding episode is resolved, so summarise it briefly rather than detailing the acute course." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "OCCUPATIONAL_THERAPY", title: "Occupational Therapy — Hand therapy referral after flexor tendon repair", prompt: "Using the case notes, write a letter to the senior hand therapist. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "referral", timeLimitSeconds: 2700, payload: { letterType: "referral", recipient: "Ms Aileen Roberts, Senior Hand Therapist, Riverside Hand Therapy Unit", taskInstruction: "Refer the patient for specialist splinting and graded mobilisation following surgical repair of a flexor tendon injury.", wordMin: 180, wordMax: 200, caseNotes: "Patient: Mr Daniel Okafor, 34, right-hand-dominant carpenter.\nDate of assessment: 24/06/2026.\nHistory: Laceration to volar aspect of right index finger from a circular saw, 18/06/2026. Surgical repair of flexor digitorum profundus (Zone 2) on 19/06/2026. Referred to OT for early controlled mobilisation.\nSocial: Lives with partner; two young children. Self-employed; unable to work currently. Keen to return to manual trade.\nAllergies: Penicillin (rash).\nMedications: Paracetamol 1g QDS PRN; ibuprofen 400mg TDS with food.\nObservations: Dorsal blocking orthosis fitted. Wound clean, sutures intact, mild oedema. Active flexion limited; protective sensation present. Reports anxiety about re-rupture.\nProgress: Educated on tendon-healing precautions and oedema management. Demonstrated passive flexion home exercises. Compliant but cautious.\nPlan: Specialist review for orthosis adjustment, graded active mobilisation, scar management once sutures removed (~02/07/2026), and staged return-to-work planning." }, guidanceNote: "Zone 2 flexor repairs are tendon-healing-precaution sensitive — prioritise the orthosis, mobilisation stage and re-rupture risk; omit unrelated social detail unless it affects the rehab plan." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "OCCUPATIONAL_THERAPY", title: "Occupational Therapy — Discharge after stroke rehabilitation", prompt: "Using the case notes, write a letter to the community occupational therapy team. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "discharge", timeLimitSeconds: 2700, payload: { letterType: "discharge", recipient: "The Community Occupational Therapy Team, Eastbrook Community Rehabilitation Service", taskInstruction: "Hand over the patient for continued home-based rehabilitation, equipment follow-up and review of ordered home adaptations.", wordMin: 180, wordMax: 200, caseNotes: "Patient: Mrs Margaret Lindqvist, 71, retired teacher.\nDischarge date: 26/06/2026.\nHistory: Left middle cerebral artery ischaemic stroke, 02/06/2026. Right-sided weakness; mild expressive dysphasia, improving.\nSocial: Lives alone in a two-storey house; stairs to bathroom. Widowed. Daughter visits twice weekly.\nAllergies: Codeine (nausea).\nMedications: Clopidogrel 75mg OD; atorvastatin 40mg ON; amlodipine 5mg OD.\nFunctional status: Independent with feeding and upper-body dressing using adaptive techniques. Requires supervision for lower-body dressing and bathing. Mobilises with a four-wheeled walker; one assist on stairs.\nEquipment provided: Perching stool, long-handled sponge, raised toilet seat, bed lever.\nAdaptations: Stairlift and grab rails ASSESSED and ORDERED — awaiting installation.\nPlan: Continue ADL retraining, upper-limb function, falls prevention, and review once adaptations installed. Carer education ongoing." }, guidanceNote: "Discharge handovers must flag outstanding items — make the ordered-but-not-yet-installed stairlift and grab rails explicit so the community team knows what to follow up; summarise function by what supervision is still needed." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "OPTOMETRY", title: "Optometry — Urgent referral for suspected acute angle-closure glaucoma", prompt: "Using the case notes, write a letter to the ophthalmologist. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "referral", timeLimitSeconds: 2700, payload: { letterType: "referral", recipient: "Dr Helena Prasad, Consultant Ophthalmologist, Eye Casualty, Riverside General Hospital", taskInstruction: "Write an urgent referral letter requesting same-day ophthalmology assessment.", wordMin: 180, wordMax: 200, caseNotes: "Patient: Mrs Eileen Doherty, 64 years.\nPresentation today (unscheduled walk-in): 3-hour history of severe right-eye pain, blurred vision with coloured haloes around lights, frontal headache, nausea and one episode of vomiting.\nOnset: came on rapidly while sitting in a dimly lit cinema.\nVA: R 6/36 (reduced from 6/9 last visit), L 6/9.\nRight eye: cornea hazy/cloudy, mid-dilated fixed oval pupil, conjunctival redness, eye feels hard on palpation.\nIOP: R 48 mmHg, L 17 mmHg.\nAnterior chamber: shallow, van Herick grade 1 right.\nHistory: long-sighted (hyperopic), no prior eye surgery.\nMedical: type 2 diabetes (diet-controlled), hypertension.\nMeds: amlodipine 5mg daily. Recently started over-the-counter cold remedy containing an antihistamine/decongestant 2 days ago.\nAllergies: penicillin (rash).\nFamily history: mother had glaucoma.\nPlan: suspect acute angle-closure; advised to attend eye casualty immediately; not driven self." }, guidanceNote: "This is an urgent referral — open by stating the suspected diagnosis and the same-day request. Include IOP, the mid-dilated fixed pupil and recent decongestant use (a precipitant); the diabetes and amlodipine are background and can be omitted or kept brief." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "OPTOMETRY", title: "Optometry — GP letter on newly detected diabetic retinopathy", prompt: "Using the case notes, write a letter to the GP. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "referral", timeLimitSeconds: 2700, payload: { letterType: "referral", recipient: "Dr Samuel Okonkwo, General Practitioner, Maple Lane Surgery", taskInstruction: "Write a letter informing the GP of newly detected diabetic retinopathy and requesting a review of diabetic control.", wordMin: 180, wordMax: 200, caseNotes: "Patient: Mr Raymond Whitfield, 58 years.\nRoutine sight test today; attended for new reading glasses.\nSymptoms: occasional blurred vision, worse when blood sugars 'run high'; no floaters or flashes; no pain.\nVA: R 6/9, L 6/12 (improving to 6/9 with pinhole).\nFundus (dilated): both eyes show scattered dot-and-blot haemorrhages, several microaneurysms, and a few hard exudates; no neovascularisation; no exudate within one disc diameter of the fovea.\nImpression: mild-to-moderate non-proliferative diabetic retinopathy, no maculopathy threatening fixation today.\nHistory: type 2 diabetes 9 years; last HbA1c (per patient) 'about 8.5%' six months ago.\nMeds: metformin 1g twice daily; atorvastatin 20mg.\nAllergies: none known.\nLifestyle: smokes 10/day; reports infrequent diabetic eye-screening attendance.\nIOP: R 15, L 16 mmHg.\nPlan: ensure enrolled in diabetic eye-screening programme; optometry review 6 months; advised smoking cessation and importance of glycaemic control." }, guidanceNote: "Frame this as informing the GP and asking for a diabetic-control review rather than an emergency. The retinopathy findings, smoking, and reported HbA1c are central; the new reading prescription is not relevant to ongoing medical care." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "PODIATRY", title: "Podiatry — Diabetic foot ulcer referral to vascular team", prompt: "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "referral", timeLimitSeconds: 2700, payload: { letterType: "referral", recipient: "Dr Helena Pratt, Consultant Vascular Surgeon, Riverside General Hospital", taskInstruction: "Write a referral letter requesting urgent vascular assessment of a non-healing neuroischaemic ulcer.", wordMin: 180, wordMax: 200, caseNotes: "Patient: Mr Trevor Okonkwo, 64, retired bus driver.\nDiagnosis: Type 2 diabetes (18 yrs), poorly controlled (HbA1c 9.4%).\nPresenting: Ulcer right plantar 1st metatarsal head, present 7 weeks, not healing.\nWound: 2cm x 1.5cm, depth 4mm, sloughy base, mild malodour, no probing to bone, periwound callus.\nVascular: Pedal pulses absent right foot, faint left. ABPI right 0.6. Cool, pale, capillary refill 4s. Intermittent claudication ~100m.\nNeuro: 10g monofilament absent at 6/10 sites both feet. Vibration reduced.\nMeds: Metformin, gliclazide, atorvastatin, ramipril. Allergy: penicillin (rash).\nSocial: Ex-smoker (quit 2 yrs, 30 pack-yr). Lives with wife.\nManagement to date: Sharp debridement x3, offloading felt padding, antimicrobial dressing, weekly review. No clinical improvement; ischaemia suspected limiting factor.\nPlan: Refer for vascular assessment re revascularisation; continue offloading and dressings meanwhile." }, guidanceNote: "Lead with the reason for referral (suspected ischaemia limiting healing) and the ABPI/absent pulses — the social history and exact dressing brand are background, not the request." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "PODIATRY", title: "Podiatry — Discharge to GP after nail surgery", prompt: "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "discharge", timeLimitSeconds: 2700, payload: { letterType: "discharge", recipient: "Dr Anita Shah, General Practitioner, Meadowbrook Surgery", taskInstruction: "Write a discharge letter summarising the partial nail avulsion and the patient's ongoing self-care needs.", wordMin: 180, wordMax: 200, caseNotes: "Patient: Miss Chloe Bennett, 22, university student.\nProblem: Recurrent ingrown toenail, right hallux, lateral border. Third episode in 12 months.\nHistory: Repeated infection, granulation tissue, pain limiting walking. Conservative care (packing, filing) unsuccessful.\nProcedure: Partial nail avulsion (lateral) with phenolisation, performed under local anaesthetic (lidocaine 2% plain), today.\nPost-op: Haemostasis achieved, sterile dressing applied. Tolerated well.\nAftercare given: Salt-water soaks from day 2, daily dressing change, keep dry 24h, footwear advice. Reviewed once at 1 week — healing well, no infection.\nMeds: None regular. No known allergies. Healthy, non-diabetic, no vascular concern.\nSafety-net: Advised to contact surgery if increasing redness, swelling, discharge or fever.\nPlan: Discharged from podiatry. GP to be aware; no routine follow-up needed unless regrowth/recurrence." }, guidanceNote: "This is straightforward — confirm the procedure, that healing was uneventful, and the safety-net advice. State clearly the patient is discharged and what would warrant re-referral." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "RADIOGRAPHY", title: "Radiography — Incidental pulmonary nodule on CT", prompt: "Using the case notes, write a letter to the referring GP. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "referral", timeLimitSeconds: 2700, payload: { letterType: "referral", recipient: "Dr Helena Marsh, General Practitioner, Riverside Medical Centre", taskInstruction: "Inform the GP of an incidental finding requiring follow-up and outline the recommended surveillance pathway.", wordMin: 180, wordMax: 200, caseNotes: "Patient: Mr Daniel Okoye, 58, male.\nReason for scan: CT abdomen/pelvis with contrast, requested to investigate 3-month history of right upper quadrant pain.\nPrimary finding: No abdominal cause identified for pain; liver, kidneys, pancreas unremarkable.\nIncidental finding: Lower lung fields included on scan — 9 mm solid nodule, right lower lobe. Smooth margins. No cavitation. No prior imaging available for comparison.\nRelevant history: Ex-smoker, 25 pack-years, stopped 4 years ago. No haemoptysis, weight loss, or fever.\nMeds: Omeprazole 20 mg daily; atorvastatin 20 mg nocte.\nAllergies: Nil known. Contrast tolerated well, no reaction.\nRadiologist recommendation: Dedicated low-dose CT chest in 3 months per nodule surveillance guidance; refer to respiratory if growth or symptoms develop.\nPatient informed scan complete; not yet told of nodule.\nPlan: GP to arrange follow-up CT chest and counsel patient." }, guidanceNote: "The abdominal pain investigation was negative — say so briefly, but the letter's real purpose is the incidental lung nodule and surveillance plan. Don't pad with the normal abdominal organs." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "RADIOGRAPHY", title: "Radiography — Suspended mammogram, refer to breast clinic", prompt: "Using the case notes, write a letter to the breast clinic. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "STRETCH", topicTag: "referral", timeLimitSeconds: 2700, payload: { letterType: "referral", recipient: "The Consultant Radiologist, Breast Assessment Clinic, St Aidan's Hospital", taskInstruction: "Refer the patient for triple assessment following a suspicious screening mammogram and abandoned views.", wordMin: 180, wordMax: 200, caseNotes: "Patient: Mrs Priya Sharma, 52, female.\nAttendance: Routine NHS breast screening mammogram, both breasts.\nFindings: Left breast — 14 mm spiculated mass, upper outer quadrant, with associated fine pleomorphic microcalcification. Highly suspicious. Right breast — no abnormality.\nTechnical note: Lateral oblique view of left breast suspended; patient could not tolerate compression due to severe pain and a recent left shoulder injury. Cranio-caudal views adequate.\nPalpation: Patient reports she had not noticed a lump; no nipple discharge or skin change observed at appointment.\nHistory: Mother had breast cancer aged 61. No prior breast imaging. Not on HRT.\nMeds: Levothyroxine 75 mcg daily.\nAllergies: Penicillin (rash).\nPatient informed further assessment needed; anxious, asked many questions.\nPlan: Urgent triple assessment — clinical exam, ultrasound +/- repeat/MRI as tolerated, and biopsy." }, guidanceNote: "Two things drive this referral: the suspicious left-breast findings AND the suspended view that needs completing. Mention the shoulder injury because it affects how the clinic should image her; the thyroid history is not relevant." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "SPEECH_PATHOLOGY", title: "Speech Pathology — Post-stroke dysphagia referral", prompt: "Using the case notes, write a letter to the dietitian. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "referral", timeLimitSeconds: 2700, payload: { letterType: "referral", recipient: "Ms Hannah Brett, Senior Dietitian, Riverside Community Nutrition Service", taskInstruction: "Refer the patient for nutritional assessment and texture-modified diet planning following an instrumental swallow assessment.", wordMin: 180, wordMax: 200, caseNotes: "Patient: Mr George Aldridge, 74 years. Admission: acute left middle cerebral artery ischaemic stroke, 6 weeks ago. Now medically stable, transferring to community caseload.\nSocial: Lives with wife (primary carer). Retired carpenter. Independent before stroke.\nMedical history: Hypertension; atrial fibrillation; type 2 diabetes.\nMedications: Apixaban; amlodipine; metformin; atorvastatin.\nAllergies: Penicillin (rash).\nSwallowing assessment (videofluoroscopy, 3 days ago): Delayed swallow trigger; reduced laryngeal elevation; trace silent aspiration on thin fluids; no aspiration on mildly thick fluids or pureed textures.\nCurrent recommendations: IDDSI Level 4 (pureed) diet; IDDSI Level 2 (mildly thick) fluids; upright 90 degrees for all intake; supervision required; small spoonfuls.\nOther: Weight down 4 kg since admission; reduced appetite; reports food 'tastes bland'. BMI now 21. Mild right-hand weakness affecting self-feeding.\nPlan: Continue weekly SLT swallow rehab. Requires dietetic input re calorie & protein intake on modified textures, and monitoring of weight & hydration." }, guidanceNote: "Select only details the dietitian needs — the IDDSI levels, weight loss, diabetes and self-feeding difficulty are relevant; full neurological detail is not. State the penicillin allergy only if it affects nutrition decisions; here it is safer to omit and keep within the word count." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "SPEECH_PATHOLOGY", title: "Speech Pathology — Paediatric language delay discharge", prompt: "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "discharge", timeLimitSeconds: 2700, payload: { letterType: "discharge", recipient: "Mrs Priya Naidu, Reception Class Teacher, Oakfield Primary School", taskInstruction: "Discharge the child from the speech & language service and advise the teacher on classroom strategies to support continued progress.", wordMin: 180, wordMax: 200, caseNotes: "Child: Leo Hartman, 5 years 2 months. Starting Reception in September.\nReferral: GP referral at age 3y6m for expressive language delay & unclear speech. Parents reported frustration & limited two-word combinations.\nHistory: Full-term birth, unremarkable. Recurrent otitis media ages 2–3; grommets inserted age 3y2m. Hearing now normal (recent audiology). No other developmental concerns. English & Tamil spoken at home.\nAssessment at intake: Expressive language ~18 months below age; phonological process of fronting (/k/ to /t/, /g/ to /d/) & cluster reduction.\nIntervention: 12 blocks of therapy over 14 months; phonological approach plus parent-delivered home programme.\nCurrent status (review last week): Expressive & receptive language within normal limits for age. Fronting resolved; clusters emerging, occasional reduction in long words only. Speech intelligible to unfamiliar listeners. Confident communicator in play.\nPlan: Discharge from active caseload. No further direct therapy needed. Re-referral route open if concerns arise. Recommend: model correct production, allow processing time, encourage but do not pressure clear speech." }, guidanceNote: "This is a discharge to a teacher, so prioritise current classroom-relevant abilities and the support strategies — not the full therapy history. The grommets and bilingual background give helpful context; resist copying every intake detail or you will exceed 200 words." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "VETERINARY_SCIENCE", title: "Veterinary Science — Referral for suspected cranial cruciate ligament rupture", prompt: "Using the case notes, write a letter to the orthopaedic specialist. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "referral", timeLimitSeconds: 2700, payload: { letterType: "referral", recipient: "Dr Hannah Pereira, Veterinary Orthopaedic Specialist, Riverside Referral Hospital", taskInstruction: "Refer this dog for orthopaedic assessment & surgical management of a suspected cranial cruciate ligament rupture.", wordMin: 180, wordMax: 200, caseNotes: "Patient: 'Bramble', 4-year-old male neutered Labrador Retriever, 38 kg (body condition score 6/9).\nPresenting complaint: 3-week history of progressive right hindlimb lameness; acute worsening after running 4 days ago. Now non-weight-bearing intermittently.\nHistory: Active family pet, no prior orthopaedic problems. Fully vaccinated. No current medication other than that below. No known drug reactions.\nExamination: Right stifle effusion & medial buttress palpable. Positive cranial drawer & tibial thrust on right stifle. Pain on full extension. Mild muscle atrophy right thigh. Left stifle: no drawer but mild effusion noted — possible early contralateral disease.\nDiagnostics: Sedated orthopaedic exam confirmed instability. Mediolateral radiographs: stifle effusion, mild osteophytosis, no fracture. Routine bloods unremarkable.\nCurrent treatment: Meloxicam 0.1 mg/kg PO q24h (started 5 days ago), strict rest, weight-loss diet commenced.\nPlan: Refer for surgical stabilisation (TPLO discussed with owner). Owner counselled on cost & possible bilateral disease. Awaiting your assessment." }, guidanceNote: "Lead with the reason for referral and the confirmed instability findings; the contralateral stifle and the body condition score are relevant to the specialist's surgical planning, so keep them." },
  { subTest: "WRITING", taskType: "WRITING_LETTER", profession: "VETERINARY_SCIENCE", title: "Veterinary Science — Discharge & ongoing management of feline chronic kidney disease", prompt: "Using the case notes, write a letter to the patient's regular veterinarian. Write 180–200 words. Select only the information relevant to ongoing care.", difficulty: "CORE", topicTag: "discharge", timeLimitSeconds: 2700, payload: { letterType: "discharge", recipient: "Dr Omar Khan, the cat's regular veterinarian, Hilltop Veterinary Clinic", taskInstruction: "Hand this cat back to the regular vet for long-term monitoring after stabilisation of newly diagnosed chronic kidney disease.", wordMin: 180, wordMax: 200, caseNotes: "Patient: 'Misty', 13-year-old female spayed Domestic Shorthair, 3.4 kg (lost 0.6 kg over 6 months).\nPresenting complaint: 3-week history of polyuria, polydipsia, reduced appetite & lethargy. Owner reported vomiting twice weekly.\nExamination on admission: 6–8% dehydrated, small irregular kidneys on palpation, mild halitosis, BP 178 mmHg (systolic).\nDiagnostics: Creatinine 320 umol/L, urea 21 mmol/L, SDMA 28 ug/dL, phosphate elevated, potassium low-normal. USG 1.012. Urine protein:creatinine 0.6. Staged as IRIS Stage 3, hypertensive, borderline proteinuric.\nTreatment during stay: IV fluids 48 h, antiemetic (maropitant), amlodipine started for hypertension, transitioned to renal prescription diet — eating well.\nDischarge status: Rehydrated, eating, BP now 150 mmHg. Bright & stable.\nPlan: Continue renal diet & amlodipine 0.625 mg PO q24h. Recheck creatinine, phosphate, potassium & BP in 2 weeks, then every 3 months. Consider phosphate binder if phosphate remains high. Monitor weight & appetite." }, guidanceNote: "Frame this as a handover for chronic monitoring: the IRIS stage, current medications and the specific recheck schedule matter most; the acute fluid therapy detail can be summarised briefly." },
];

async function main() {
  const res = await prisma.oetItem.createMany({ data: ITEMS });
  console.log(`Seeded ${res.count} Writing item(s).`);
}

if (isDirectRun(import.meta.url)) {
  main()
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}
