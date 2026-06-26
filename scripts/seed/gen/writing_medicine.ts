import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Cardiology referral for new atrial fibrillation",
    prompt:
      "Using the case notes, write a letter to the cardiology outpatient clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Helena Frost, Consultant Cardiologist, Riverside Hospital Cardiology Clinic",
      taskInstruction:
        "Refer the patient for assessment of newly diagnosed atrial fibrillation and consideration of anticoagulation.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Trevor Hale, 68, retired electrician.\nPresenting: 2-week history of palpitations and exertional breathlessness; one episode of light-headedness, no syncope.\nExamination: irregularly irregular pulse 112/min, BP 138/86, no peripheral oedema, chest clear.\nECG: atrial fibrillation, rate 110, no acute ischaemic changes.\nBloods: TSH normal, U&E normal, FBC normal.\nCHA2DS2-VASc: 3 (age, hypertension, prior TIA 2021).\nPMH: hypertension, TIA 2021, osteoarthritis.\nAllergies: penicillin (rash).\nMedications: amlodipine 5mg daily, atorvastatin 20mg nocte.\nPlan today: started bisoprolol 2.5mg daily for rate control; not yet anticoagulated pending review.\nSocial: lives with wife, non-smoker, alcohol 6 units/week.",
    },
    guidanceNote:
      "Prioritise the CHA2DS2-VASc score and anticoagulation question — that is the reason for referral. Mention the penicillin allergy but omit the osteoarthritis.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Discharge after community-acquired pneumonia",
    prompt:
      "Using the case notes, write a letter to the patient's General Practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Amara Okoye, General Practitioner, Lakeside Medical Centre",
      taskInstruction:
        "Inform the GP of the admission for community-acquired pneumonia and outline the follow-up required.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Doreen Whitfield, 74.\nAdmitted: 5 days for right lower lobe pneumonia.\nPresentation: 4-day cough productive of green sputum, fever, breathlessness. CURB-65 score 2.\nObs on admission: temp 38.6, SpO2 89% on air, RR 24, BP 124/72.\nTreatment: IV co-amoxiclav switched to oral after 48 hours; oxygen weaned by day 3.\nProgress: afebrile 48 hours, SpO2 95% on air at discharge, mobilising independently.\nAllergies: none known.\nDischarge medications: oral amoxicillin to complete 7-day course (3 days remaining), regular inhalers continued.\nPMH: COPD, type 2 diabetes.\nFollow-up needed: repeat chest X-ray in 6 weeks to confirm resolution; review smoking cessation.\nSocial: lives alone, ex-smoker.",
    },
    guidanceNote:
      "The 6-week chest X-ray and antibiotic completion are the key handover items. Keep the admission obs brief — the GP needs the plan, not every number.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Gastroenterology referral for iron-deficiency anaemia",
    prompt:
      "Using the case notes, write a letter to the gastroenterology team. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Sanjay Mehta, Consultant Gastroenterologist, St Aiden's Hospital",
      taskInstruction:
        "Refer the patient for urgent endoscopic investigation of unexplained iron-deficiency anaemia.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Colin Radley, 61, accountant.\nPresenting: 3-month fatigue, breathlessness on stairs; no overt rectal bleeding; intermittent change in bowel habit toward looser stools.\nExamination: pale, pulse 84, abdomen soft, no mass, PR exam no blood.\nBloods: Hb 88 g/L, MCV 71, ferritin 6, normal LFTs, normal U&E.\nWeight: unintentional 4kg loss over 3 months.\nFIT test: positive.\nAllergies: aspirin (wheeze).\nMedications: ramipril 5mg daily, lansoprazole 30mg daily.\nPMH: hypertension, gastro-oesophageal reflux.\nFamily history: father bowel cancer aged 70.\nPlan: started oral ferrous fumarate; referring under 2-week-wait pathway for OGD and colonoscopy.\nSocial: non-smoker, alcohol 10 units/week.",
    },
    guidanceNote:
      "Flag the red flags clearly — positive FIT, weight loss, family history — as these justify the urgent pathway. The aspirin allergy is relevant; reflux history is contextual.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Endocrine referral for poorly controlled type 2 diabetes",
    prompt:
      "Using the case notes, write a letter to the diabetes specialist clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Priya Nair, Consultant Endocrinologist, Greenfield Diabetes Centre",
      taskInstruction:
        "Refer the patient for specialist optimisation of poorly controlled type 2 diabetes and review of treatment options.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Felicity Boateng, 56, schoolteacher.\nPresenting: persistent hyperglycaemia despite maximal oral therapy; polyuria and fatigue for 2 months.\nLatest HbA1c: 86 mmol/mol (was 72 six months ago).\nBMI: 34. BP 142/88.\nExamination: no foot ulcers, monofilament intact, fundoscopy due.\nBloods: eGFR 58, urine ACR mildly raised at 4.5, normal LFTs.\nAllergies: none known.\nMedications: metformin 1g twice daily, gliclazide 80mg twice daily, atorvastatin 20mg nocte, ramipril 5mg daily.\nPMH: type 2 diabetes (8 years), hypertension, mild diabetic kidney disease.\nLifestyle: limited exercise, struggling with diet.\nPlan: considering GLP-1 agonist or SGLT2 inhibitor; requesting specialist guidance given renal function.\nSocial: non-smoker.",
    },
    guidanceNote:
      "The rising HbA1c, renal function and current medication list drive the referral. Include the eGFR and ACR — they shape which agents are safe.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Neurology referral for first unprovoked seizure",
    prompt:
      "Using the case notes, write a letter to the first-seizure clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Marcus Lindqvist, Consultant Neurologist, Central First-Seizure Clinic",
      taskInstruction:
        "Refer the patient for urgent assessment following a first unprovoked generalised seizure.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Miss Olivia Pearson, 24, graphic designer.\nEvent: witnessed generalised tonic-clonic seizure at work yesterday, lasting ~90 seconds, with tongue-biting and brief incontinence; post-ictal confusion 20 minutes.\nNo prior seizures. No head injury. No fever. Not pregnant.\nTriggers: had been sleep-deprived (work deadline), no alcohol or recreational drugs.\nExamination: fully recovered, neurological exam normal, no focal deficit.\nInvestigations: CT head normal, bloods including glucose, calcium, sodium normal. ECG normal.\nAllergies: latex (contact dermatitis).\nMedications: combined oral contraceptive pill only.\nPMH: nil significant.\nDriving: advised not to drive and to inform DVLA.\nPlan: awaiting outpatient EEG and MRI; no anticonvulsant started.\nSocial: lives with partner, non-smoker.",
    },
    guidanceNote:
      "Capture the seizure description and the normal first-line investigations. The driving advice and contraception (relevant to future anticonvulsant choice) should be noted; latex allergy belongs in but is minor.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Transfer of stroke patient to rehabilitation unit",
    prompt:
      "Using the case notes, write a letter to the rehabilitation unit. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Dr Ngozi Adeyemi, Consultant in Rehabilitation Medicine, Maple Ward, Brookhaven Rehabilitation Unit",
      taskInstruction:
        "Transfer the patient for inpatient neurorehabilitation following an ischaemic stroke.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Gerald Thompson, 71, retired postman.\nAdmission: 12 days ago with left middle cerebral artery ischaemic stroke.\nPresentation: right-sided weakness, expressive dysphasia, facial droop.\nTreatment: thrombolysed within window; no haemorrhagic transformation on repeat imaging.\nCurrent status: right arm power 3/5, right leg 4/5, dysphasia improving, swallow assessed safe for normal diet.\nMobility: transfers with assistance of one, short distances with frame.\nContinence: occasional urinary urgency.\nAllergies: none known.\nMedications: clopidogrel 75mg daily, atorvastatin 80mg nocte, ramipril 2.5mg daily.\nPMH: hypertension, ex-smoker.\nTherapy input: physiotherapy and speech therapy started on ward.\nSocial: lives with wife in two-storey house, stairs a concern for discharge.\nPlan: ongoing multidisciplinary rehabilitation, goal of independent transfers and home discharge.",
    },
    guidanceNote:
      "The receiving team needs the functional status and rehab goals, not the acute thrombolysis detail in depth. Highlight current power, mobility and the home environment.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Paediatric referral for faltering growth",
    prompt:
      "Using the case notes, write a letter to the paediatric outpatient clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Eleanor Vasquez, Consultant Paediatrician, Children's Outpatient Department, Northgate Hospital",
      taskInstruction:
        "Refer the child for assessment of faltering growth and recurrent loose stools.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Lucas Bramley, 18 months.\nPresenting: poor weight gain over 4 months; weight has dropped from 50th to 9th centile.\nSymptoms: frequent loose, pale, offensive stools; irritability; reduced appetite since weaning onto cereals.\nExamination: thin, mildly distended abdomen, no organomegaly, alert and interactive.\nDevelopment: meeting milestones, walking.\nFeeding: varied diet, includes wheat-based foods.\nBloods: mild iron-deficiency anaemia; coeliac serology (anti-TTG) strongly positive.\nAllergies: none known.\nMedications: none regular; vitamin D drops.\nPMH: term delivery, no neonatal concerns.\nFamily history: maternal aunt has coeliac disease.\nPlan: referring for confirmation and dietetic input; advised not to remove gluten before specialist review.\nSocial: lives with both parents, no smokers in household.",
    },
    guidanceNote:
      "The centile drop, positive anti-TTG and family history are the crux. Note the advice to continue gluten until review — that affects the diagnostic pathway.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Geriatric referral after recurrent falls",
    prompt:
      "Using the case notes, write a letter to the falls and syncope service. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Harriet Cole, Consultant Geriatrician, Falls and Syncope Service, Elmwood Hospital",
      taskInstruction:
        "Refer the patient for multifactorial assessment following recurrent falls.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Edith Marlow, 83, widow.\nPresenting: three falls in the past two months, two indoors; no loss of consciousness; one resulted in a wrist fracture (now healed).\nContributing factors: postural dizziness on standing.\nObs: lying BP 138/80, standing BP 112/68 with symptoms (postural drop).\nExamination: unsteady gait, uses stick, reduced lower limb power, cataracts noted.\nCognition: AMTS 8/10.\nBloods: vitamin D low, U&E normal, FBC normal.\nMedications: amlodipine 10mg daily, bendroflumethiazide 2.5mg daily, zopiclone 7.5mg nocte, paracetamol PRN.\nAllergies: codeine (nausea).\nPMH: hypertension, osteoporosis, bilateral cataracts.\nSocial: lives alone in bungalow, daughter visits daily, no current care package.\nPlan: requesting medication review, gait assessment and falls-prevention input.",
    },
    guidanceNote:
      "Polypharmacy (especially the antihypertensives and zopiclone) and the postural drop are central to the falls workup. Include the fracture history and living situation.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Emergency department letter for acute coronary syndrome",
    prompt:
      "Using the case notes, write a letter to the on-call cardiology registrar. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Ravi Chandran, On-call Cardiology Registrar, Coronary Care Unit, Harbourview Hospital",
      taskInstruction:
        "Refer the patient urgently for admission and management of a non-ST-elevation myocardial infarction.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Patrick O'Donnell, 59, lorry driver.\nPresenting: 3-hour central crushing chest pain radiating to left arm, associated sweating and nausea; pain partially eased with GTN.\nObs: HR 96, BP 150/92, SpO2 96% on air, afebrile.\nECG: T-wave inversion in leads V4–V6, no ST elevation.\nTroponin: elevated at 320 ng/L (repeat rising).\nExamination: anxious, chest clear, no murmurs, no signs of heart failure.\nAllergies: none known.\nMedications given in ED: aspirin 300mg, ticagrelor 180mg, fondaparinux, sublingual GTN.\nPMH: type 2 diabetes, hyperlipidaemia, smoker 20/day.\nFamily history: father MI aged 55.\nPlan: refer for CCU admission and consideration of inpatient angiography.\nSocial: lives with partner, occupational driver (fitness-to-drive implications).",
    },
    guidanceNote:
      "Lead with the diagnostic triad: ischaemic ECG changes, rising troponin and the treatment already given. The occupational driving point is worth a brief mention for the registrar.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Community mental health referral for first-episode depression",
    prompt:
      "Using the case notes, write a letter to the community mental health team. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Yusuf Karim, Consultant Psychiatrist, Westbrook Community Mental Health Team",
      taskInstruction:
        "Refer the patient for specialist assessment of moderate-to-severe depression with persistent low mood.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Ms Rebecca Lyall, 34, marketing manager.\nPresenting: 4-month history of persistent low mood, early-morning waking, poor appetite with 5kg weight loss, anhedonia and poor concentration affecting work.\nRisk: fleeting thoughts of not wanting to be here, no active plan or intent, no prior self-harm; protective factor of young child.\nPHQ-9: 18 (moderately severe).\nExamination: tearful, reactive affect, no psychotic features, well-kempt.\nTrigger: recent relationship breakdown and bereavement (mother died 6 months ago).\nAllergies: none known.\nMedications: started sertraline 50mg daily two weeks ago, partial response only.\nPMH: nil psychiatric, no alcohol or drug misuse.\nSocial: single parent, off work for 3 weeks, limited support network.\nPlan: requesting psychological therapy and medication review; safety-netted to attend if worsening.",
    },
    guidanceNote:
      "Document the risk assessment carefully and honestly — passive thoughts without plan, plus protective factors. Include PHQ-9, current treatment and the limited support network.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Respiratory referral for suspected lung malignancy",
    prompt:
      "Using the case notes, write a letter to the rapid-access lung clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Wendy Acheampong, Consultant Respiratory Physician, Rapid-Access Lung Clinic, Stonebridge Hospital",
      taskInstruction:
        "Refer the patient urgently for investigation of a suspicious lung lesion on chest imaging.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Albert Finch, 66, retired welder.\nPresenting: 6-week history of persistent cough, two episodes of small-volume haemoptysis, hoarse voice for 3 weeks.\nConstitutional: unintentional 5kg weight loss, fatigue.\nExamination: clubbing absent, reduced air entry right upper zone, no lymphadenopathy palpable.\nChest X-ray: 3cm right upper lobe mass.\nBloods: mild anaemia, corrected calcium normal, LFTs normal.\nAllergies: none known.\nMedications: tiotropium inhaler, salbutamol PRN.\nPMH: COPD, ex-smoker (40 pack-years, quit 4 years ago), occupational asbestos exposure.\nFamily history: nil relevant.\nPlan: referring under 2-week-wait; arranging CT chest and abdomen prior to clinic.\nSocial: lives with wife, retired.",
    },
    guidanceNote:
      "The mass, haemoptysis, hoarseness and weight loss justify the urgent pathway. Asbestos and smoking history are essential context; omit the inhaler doses' fine detail.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Advice letter to GP on warfarin to DOAC switch",
    prompt:
      "Using the case notes, write a letter to the patient's General Practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Dr Imran Saleh, General Practitioner, Brookside Surgery",
      taskInstruction:
        "Advise the GP on switching the patient from warfarin to a direct oral anticoagulant and the monitoring required.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Glenda Pruitt, 78.\nContext: reviewed in anticoagulation clinic; atrial fibrillation on warfarin for 4 years with unstable control (time-in-therapeutic-range 48%).\nRecent INRs: 1.4, 3.8, 1.6 — frequent dose changes, difficulty attending for testing.\nRenal function: eGFR 44 (stable).\nWeight: 62kg. No mechanical heart valve.\nBleeding history: nil. HAS-BLED 2.\nAllergies: sulfonamides (rash).\nMedications: warfarin (variable), bisoprolol 5mg daily, furosemide 40mg daily, atorvastatin 40mg nocte.\nPMH: atrial fibrillation, heart failure with preserved ejection fraction, chronic kidney disease stage 3b.\nRecommendation: switch to apixaban 5mg twice daily — reduce to 2.5mg twice daily only if two of (age ≥80, weight ≤60kg, creatinine ≥133); she meets one criterion, so full dose.\nMonitoring: check renal function in 1 month then at least annually.\nSocial: lives with daughter.",
    },
    guidanceNote:
      "This is advisory — state the recommended drug, the dose rationale tied to her parameters, and the renal monitoring schedule. The poor INR control is the justification; keep it concise.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "MEDICINE",
    title: "Medicine — Surgical referral for symptomatic gallstones",
    prompt:
      "Using the case notes, write a letter to the general surgical team. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Mr David Ashworth, Consultant General Surgeon, Upper GI Surgery, Fairmont Hospital",
      taskInstruction:
        "Refer the patient for surgical assessment of symptomatic gallstones and consideration of cholecystectomy.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Anita Sharma, 45, nurse.\nPresenting: recurrent right upper quadrant colicky pain after fatty meals over 3 months; two episodes lasting several hours with nausea and vomiting.\nNo jaundice, no fever, stools and urine normal colour.\nExamination: soft abdomen, mild RUQ tenderness, Murphy's sign negative when settled, no mass.\nUltrasound: multiple gallstones, gallbladder wall not thickened, common bile duct not dilated.\nBloods: LFTs normal, amylase normal, FBC normal.\nAllergies: none known.\nMedications: combined oral contraceptive pill, occasional ibuprofen.\nPMH: nil significant, two previous uncomplicated pregnancies.\nLifestyle: BMI 29, non-smoker.\nPlan: referring for elective laparoscopic cholecystectomy; advised low-fat diet meanwhile and to attend if pain with fever or jaundice.\nSocial: works shifts, lives with husband and children.",
    },
    guidanceNote:
      "The biliary colic pattern plus confirmatory ultrasound is what the surgeon needs. Note the normal LFTs and non-dilated duct (no current need for ERCP); the safety-netting advice can be summarised briefly.",
  },
];
