import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Clopidogrel and omeprazole interaction concern",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Helen Carter, General Practitioner, Riverside Medical Centre",
      taskInstruction:
        "Write to the GP to recommend reviewing the proton pump inhibitor choice because of a potential interaction reducing clopidogrel efficacy.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Daniel Osei, 64, presented today collecting repeat prescription.\nCurrent medications: clopidogrel 75 mg daily (started 6 weeks ago after coronary stent), omeprazole 20 mg daily (started by GP same week for reflux), atorvastatin 40 mg nocte, ramipril 5 mg daily.\nIssue: Omeprazole is a CYP2C19 inhibitor and may reduce the antiplatelet effect of clopidogrel; co-prescription not recommended where avoidable.\nRelevant history: Drug-eluting stent placed 6 weeks ago; ongoing dyspepsia, partially controlled.\nObservations: No GI bleeding signs; BP self-monitored, stable.\nAllergies: No known drug allergies.\nNon-relevant: Mild seasonal hay fever; wears reading glasses; previous ankle sprain 2019.",
    },
    guidanceNote:
      "State the mechanism concern briefly and suggest an alternative PPI such as pantoprazole rather than dictating the prescription; the decision rests with the GP.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Suspected statin-induced myalgia review",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Priya Nair, General Practitioner, Oakfield Surgery",
      taskInstruction:
        "Write to the GP describing new muscle symptoms that may relate to atorvastatin and request clinical review.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Carol Whitfield, 58, attended pharmacy reporting muscle pain.\nCurrent medications: atorvastatin 80 mg nocte (dose increased 5 weeks ago), amlodipine 5 mg daily, metformin 1 g twice daily.\nIssue: Bilateral thigh and shoulder aching for 3 weeks, worsening; no recent unaccustomed exercise; symptoms began after dose increase.\nRelevant history: No previous statin intolerance; eGFR normal at last check 4 months ago.\nObservations: No dark urine reported; able to mobilise but discomfort affecting sleep.\nAllergies: Penicillin (rash).\nNon-relevant: Wishes to lose weight; enquired about vitamin D; cat allergy.",
    },
    guidanceNote:
      "Recommend the GP consider checking creatine kinase and reviewing the dose; avoid stating it is definitely myopathy when it is unconfirmed.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Poor inhaler adherence and technique referral",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Marcus Bell, General Practitioner, Greenway Health Centre",
      taskInstruction:
        "Write to the GP about repeated reliever overuse and poor inhaler technique, requesting an asthma review.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Liam Doyle, 27, regular customer collecting salbutamol.\nCurrent medications: salbutamol 100 mcg inhaler (collected 3 times in 6 weeks), beclometasone 200 mcg inhaler twice daily (last collected 4 months ago).\nIssue: Over-reliance on reliever; preventer not being reordered; technique check today showed poor coordination and no spacer use.\nRelevant history: Asthma since childhood; one A&E visit last winter.\nObservations: Mild wheeze audible today; reports waking at night twice weekly.\nAllergies: No known drug allergies.\nNon-relevant: Plays five-a-side football; recently changed jobs; mild acne.",
    },
    guidanceNote:
      "Highlight the reliever-to-preventer collection mismatch as an objective marker of poor control; offer that technique counselling has been provided.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Methotrexate dosing error identified at dispensing",
    prompt:
      "Using the case notes, write a letter to the prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Sandra Klein, Prescriber, Hillcrest Rheumatology Clinic",
      taskInstruction:
        "Write to the prescriber to flag a methotrexate prescription written as a daily rather than weekly dose and seek urgent clarification.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr George Hardy, 71, presented with new prescription.\nPrescription received: methotrexate 10 mg ONCE DAILY (quantity 28).\nUsual regimen: methotrexate 10 mg ONCE WEEKLY (Mondays) for rheumatoid arthritis; folic acid 5 mg weekly.\nIssue: Daily methotrexate dosing risks serious toxicity; suspected transcription error. Dispensing withheld pending clarification.\nRelevant history: On weekly methotrexate 18 months; last full blood count 6 weeks ago, stable.\nObservations: Patient well today, unaware of any change.\nAllergies: No known drug allergies.\nNon-relevant: Requested advice on travel vaccinations; uses a walking stick.",
    },
    guidanceNote:
      "Be explicit that supply has been held for safety and request written confirmation of the intended frequency before dispensing.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Lithium monitoring overdue advice to GP",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Dr Owen Pratt, General Practitioner, Castlegate Practice",
      taskInstruction:
        "Write to the GP advising that lithium level and renal/thyroid monitoring appear overdue and requesting arrangement of bloods.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Ms Rebecca Lyne, 45, collecting repeat lithium.\nCurrent medications: lithium carbonate 400 mg nocte, sertraline 100 mg daily, bendroflumethiazide 2.5 mg daily.\nIssue: Lithium monitoring book shows last serum level 7 months ago; recommended every 3-6 months. Concurrent thiazide can raise lithium levels.\nRelevant history: Bipolar affective disorder, stable for 2 years.\nObservations: Reports mild hand tremor and increased thirst over past month.\nAllergies: No known drug allergies.\nNon-relevant: Asked about hay-fever tablets; recently started a gym membership.",
    },
    guidanceNote:
      "Mention the new tremor and thirst alongside the overdue monitoring, and note the thiazide interaction without alarming the patient.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — OTC ibuprofen request unsuitable for patient on anticoagulant",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Dr Aisha Rahman, General Practitioner, Parkview Surgery",
      taskInstruction:
        "Write to the GP after declining an over-the-counter NSAID sale and request review of the patient's ongoing pain management.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Frank Bauer, 68, requested ibuprofen for knee pain.\nCurrent medications: apixaban 5 mg twice daily (atrial fibrillation), bisoprolol 2.5 mg daily, paracetamol 1 g as needed.\nIssue: OTC ibuprofen declined due to bleeding risk with apixaban; patient reports daily knee pain poorly controlled on paracetamol.\nRelevant history: Osteoarthritis of both knees; previous GI ulcer 2017.\nObservations: Walks with obvious discomfort; no current bleeding signs.\nAllergies: No known drug allergies.\nNon-relevant: Keen gardener; asked about glucosamine; mild hearing loss.",
    },
    guidanceNote:
      "Explain why the NSAID was refused and ask the GP to consider safer analgesic options such as topical agents; note the prior ulcer history.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Polypharmacy deprescribing review for elderly patient",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Nina Foster, General Practitioner, Elmwood Medical Practice",
      taskInstruction:
        "Write to the GP recommending a structured medication review focusing on falls risk and possible deprescribing.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Edith Crane, 83, attended with daughter for medicines use review.\nCurrent medications: amitriptyline 25 mg nocte, zopiclone 7.5 mg nocte, oxybutynin 5 mg twice daily, furosemide 40 mg morning, ramipril 10 mg daily, atorvastatin 20 mg nocte.\nIssue: Multiple sedative and anticholinergic medicines; two falls in the past 2 months; daughter reports increasing daytime drowsiness and confusion.\nRelevant history: Hypertension, urinary urgency, insomnia.\nObservations: Steady at rest; reports light-headedness on standing.\nAllergies: No known drug allergies.\nNon-relevant: Enjoys knitting; recently widowed; wears bifocals.",
    },
    guidanceNote:
      "Frame the high anticholinergic burden and sedative load as relevant to her falls and confusion; suggest review rather than naming exact stop decisions.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — ACE inhibitor and potassium supplement hyperkalaemia risk",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Dr Tomas Vega, General Practitioner, Brookside Health Centre",
      taskInstruction:
        "Write to the GP highlighting a combination raising hyperkalaemia risk and recommending electrolyte monitoring.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Harold Pinto, 70, collecting repeat prescription.\nCurrent medications: ramipril 10 mg daily, spironolactone 25 mg daily, Sando-K (potassium) two tablets daily, furosemide 40 mg morning.\nIssue: Concurrent ACE inhibitor, potassium-sparing diuretic and potassium supplement increase hyperkalaemia risk; potassium supplement may no longer be needed.\nRelevant history: Heart failure; previously hypokalaemic on furosemide alone.\nObservations: Reports occasional muscle weakness; no palpitations.\nAllergies: No known drug allergies.\nNon-relevant: Retired teacher; asked about flu vaccine; mild eczema.",
    },
    guidanceNote:
      "Ask the GP to check serum potassium and review the ongoing need for the potassium supplement now that combination therapy has changed.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — New prescription duplication of two SSRIs",
    prompt:
      "Using the case notes, write a letter to the prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Claire Mensah, Prescriber, Northbridge Mental Health Team",
      taskInstruction:
        "Write to the prescriber to flag concurrent prescriptions of two SSRIs and request clarification before supply.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Ms Tanya Brooks, 34, presented with hospital discharge prescription.\nNew prescription: sertraline 50 mg daily.\nExisting repeat (GP): citalopram 20 mg daily, ongoing.\nIssue: Two SSRIs prescribed simultaneously; risk of serotonergic effects. Unclear whether citalopram was meant to be stopped or switched. Supply paused for clarification.\nRelevant history: Generalised anxiety disorder; recent short admission for review.\nObservations: Patient reports she was told to 'change tablets' but has no written instruction.\nAllergies: No known drug allergies.\nNon-relevant: Works in retail; asked about travel sickness remedies.",
    },
    guidanceNote:
      "Make clear the ambiguity is whether this is a switch or duplication; request confirmation of which SSRI to continue before dispensing.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Gentamicin level handover at hospital discharge",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Raymond Ellis, General Practitioner, Southfield Surgery",
      taskInstruction:
        "Write to the GP to hand over a course of outpatient gentamicin requiring ongoing level and renal monitoring.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Victor Adeyemi, 59, discharged from hospital today on outpatient antibiotics.\nCurrent medications: gentamicin IV (community administration, 3 more doses planned), flucloxacillin 1 g four times daily, regular metformin 1 g twice daily.\nIssue: Gentamicin requires pre-dose level and renal function monitoring before each dose; arrangements needed in community.\nRelevant history: Cellulitis of right leg, improving; type 2 diabetes; baseline eGFR 68.\nObservations: Afebrile today; wound healing; last gentamicin level within range.\nAllergies: No known drug allergies.\nNon-relevant: Lives alone; asked about parking permit; ex-smoker.",
    },
    guidanceNote:
      "Emphasise that pre-dose levels and renal checks must continue before each gentamicin dose; include the planned remaining doses clearly.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Levothyroxine and calcium timing affecting control",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Dr Maria Costa, General Practitioner, Lakeside Medical Group",
      taskInstruction:
        "Write to the GP about a likely absorption interaction affecting thyroid control and request review of recent results.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Joan Pemberton, 62, attended for medicines review reporting tiredness.\nCurrent medications: levothyroxine 100 mcg morning, calcium carbonate 1.5 g with breakfast, alendronic acid 70 mg weekly, lansoprazole 30 mg daily.\nIssue: Patient takes levothyroxine and calcium together at breakfast; calcium reduces levothyroxine absorption and may explain rising TSH.\nRelevant history: Hypothyroidism; osteoporosis; recent TSH reported as elevated.\nObservations: Fatigue, cold intolerance, mild weight gain over 2 months.\nAllergies: No known drug allergies.\nNon-relevant: Enjoys swimming; asked about cod liver oil; wears hearing aid.",
    },
    guidanceNote:
      "Explain that separating the doses may improve control and ask the GP to recheck thyroid function before any dose change.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Suspected adverse skin reaction to lamotrigine",
    prompt:
      "Using the case notes, write a letter to the prescriber. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Stephen Hollis, Prescriber, Meadow Neurology Service",
      taskInstruction:
        "Write to the prescriber to report a new rash during lamotrigine titration and seek urgent review.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Miss Hannah Reid, 22, presented with new rash.\nCurrent medications: lamotrigine, dose increased from 25 mg to 50 mg daily 8 days ago; sodium valproate 500 mg twice daily; combined oral contraceptive.\nIssue: Widespread itchy rash on trunk and arms since yesterday; lamotrigine carries risk of serious skin reactions, increased when combined with valproate during titration.\nRelevant history: Epilepsy; recent titration ongoing.\nObservations: No mucosal involvement or fever reported today; rash spreading.\nAllergies: No known drug allergies.\nNon-relevant: University student; asked about exam stress; occasional migraines.",
    },
    guidanceNote:
      "Convey urgency given the rash timing during titration and the valproate interaction; advise prompt clinical assessment without diagnosing the reaction yourself.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHARMACY",
    title: "Pharmacy — Insulin regimen confusion and recurrent hypoglycaemia",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Felix Conway, General Practitioner, Harborne Family Practice",
      taskInstruction:
        "Write to the GP about confusion over insulin doses leading to hypoglycaemia and request a diabetes review.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Samuel Knox, 54, attended distressed about his insulin.\nCurrent medications: insulin glargine 24 units nocte, insulin aspart with meals (variable), metformin 1 g twice daily, gliclazide 80 mg twice daily.\nIssue: Patient unsure which pen is which; reports three hypoglycaemic episodes this week, especially before lunch; possible dosing confusion plus gliclazide adding to risk.\nRelevant history: Type 2 diabetes on insulin 1 year; lives alone.\nObservations: Recent home readings show several values below 4 mmol/L.\nAllergies: No known drug allergies.\nNon-relevant: Former lorry driver; asked about sugar-free sweets; mild back pain.",
    },
    guidanceNote:
      "Highlight the recurrent lows and possible device confusion; suggest the GP review whether the sulfonylurea is still appropriate alongside insulin.",
  },
];
