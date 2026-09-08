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
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-advice-letter-on-home-care-for-a-diabetic-cat-newly-started-on-insulin",
    "title": "Veterinary Science — Advice letter on home care for a diabetic cat newly started on insulin",
    "prompt": "Using the case notes, write a letter to the owner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Smokey', British Shorthair cat, male neutered, 9 years, 7.2 kg.\nBody condition score 8 out of 9 — overweight.\nSeen 28 August 2026.\n\nDiagnosis:\nNewly diagnosed diabetes mellitus, confirmed on persistent hyperglycaemia across three samples and an elevated fructosamine of 480 micromol/L.\nNo ketones detected on urine dipstick or blood ketone meter.\n\nHistory:\nIncreased thirst and frequent urination for six weeks, with the owner reporting the litter tray needing changing daily instead of twice weekly.\nWeight loss of 0.8 kg over the same period despite a good appetite.\nPreviously free-fed on dry food, topped up throughout the day.\nNo other medication and no recent corticosteroid.\n\nExamination:\nBright and alert. Mildly dehydrated at 3 per cent.\nNo plantigrade stance and no evidence of peripheral neuropathy.\nCoat slightly greasy. Abdomen soft, no organomegaly.\nHeart rate 180, no murmur.\n\nTreatment started:\nGlargine insulin, 1 unit twice daily by subcutaneous injection, twelve hours apart, given after food.\nInjection technique demonstrated in the clinic and performed successfully twice by the owner before leaving.\n\nDiet:\nTransition over seven days to a low-carbohydrate, high-protein diabetic diet.\nControlled portions, weighed, twice daily at the time of injection.\nNo free feeding and no treats.\nGradual weight loss target of 1 to 2 per cent of body weight per week — faster loss risks hepatic lipidosis.\n\nOwner education on hypoglycaemia:\nSigns explained — wobbliness, weakness, disorientation, twitching, unresponsiveness.\nIf seen, rub honey or glucose syrup on the gums and telephone the clinic immediately.\nThe single most important rule: never give a dose if the cat is unwell, vomiting or has not eaten. A missed dose is far safer than a dose given to a cat that has not eaten.\n\nPractical instructions:\nStore insulin in the fridge.\nRoll the pen gently between the palms; never shake it.\nUse a new needle each time.\nKeep an injection log, recording dose, time, appetite and any signs.\n\nPlan:\nBlood glucose curve and weight recheck in 7 to 10 days.\nDo not change the dose without veterinary advice.\nSome cats achieve remission with early, tight control and appropriate diet, and this is worth aiming for.\n",
      "recipient": "Mrs Karen Doyle, owner of 'Smokey'",
      "letterType": "advice",
      "taskInstruction": "Write to the owner explaining home management, monitoring and warning signs for their newly diagnosed diabetic cat."
    },
    "guidanceNote": "Use plain, supportive language for the owner and prioritise the safety points: do not inject if the cat is not eating, and recognise hypoglycaemia."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-discharge-ongoing-management-of-feline-chronic-kidney-disease",
    "title": "Veterinary Science — Discharge & ongoing management of feline chronic kidney disease",
    "prompt": "Using the case notes, write a letter to the patient's regular veterinarian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "discharge",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\n'Misty', 13-year-old female spayed Domestic Shorthair, 3.4 kg.\nHas lost 0.6 kg over six months.\nAdmitted 25 August 2026, discharged 28 August 2026.\n\nPresenting complaint:\nA three-week history of polyuria, polydipsia, reduced appetite and lethargy.\nThe owner reported vomiting approximately twice weekly.\n\nExamination on admission:\n6 to 8 per cent dehydrated, with reduced skin turgor and tacky mucous membranes.\nSmall, irregular kidneys on palpation, both reduced in size.\nMild halitosis with a uraemic character.\nSystolic blood pressure 178 mmHg by Doppler, averaged over five readings.\nBody condition score 3 out of 9.\nNo oral ulceration. No retinal detachment on fundic examination.\n\nDiagnostics:\nCreatinine 320 micromol/L.\nUrea 21 mmol/L.\nSDMA 28 micrograms/dL.\nPhosphate elevated at 2.1 mmol/L.\nPotassium low-normal at 3.6 mmol/L.\nUrine specific gravity 1.012.\nUrine protein to creatinine ratio 0.6.\nUrine culture negative.\nStaged as IRIS Stage 3, hypertensive, borderline proteinuric.\n\nTreatment during the stay:\nIntravenous fluids for 48 hours, with careful monitoring of body weight and respiratory rate.\nAntiemetic — maropitant, once daily.\nAmlodipine started for hypertension on day two.\nTransitioned to a renal prescription diet and eating it well, which is a good prognostic sign.\n\nDischarge status:\nRehydrated. Eating voluntarily.\nBlood pressure now 150 mmHg.\nBright and stable. Weight unchanged at 3.4 kg.\n\nPlan for the owner:\nContinue the renal diet exclusively; no other food or treats, as the phosphate restriction is the part that matters most.\nAmlodipine 0.625 mg by mouth every 24 hours.\nFresh water available in several places; a water fountain often helps.\nRecheck creatinine, phosphate, potassium and blood pressure in two weeks, then every three months.\nConsider a phosphate binder if phosphate remains above target despite the diet.\nMonitor weight and appetite at home and report any drop.\nContact the clinic if vomiting recurs, if she stops eating for more than 24 hours, or if she seems suddenly blind or disorientated.\n",
      "recipient": "Dr Omar Khan, the cat's regular veterinarian, Hilltop Veterinary Clinic",
      "letterType": "discharge",
      "taskInstruction": "Hand this cat back to the regular vet for long-term monitoring after stabilisation of newly diagnosed chronic kidney disease."
    },
    "guidanceNote": "Frame this as a handover for chronic monitoring: the IRIS stage, current medications and the specific recheck schedule matter most; the acute fluid therapy detail can be summarised briefly."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-discharge-and-home-management-of-a-canine-elbow-arthroscopy-patient",
    "title": "Veterinary Science — Discharge and home management of a canine elbow arthroscopy patient",
    "prompt": "Using the case notes, write a letter to the referring primary care veterinarian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Diesel', Bernese Mountain Dog, male neutered, 14 months, 39 kg.\nBody condition score 6 out of 9.\nAdmitted and discharged 27 August 2026.\n\nReason for referral:\nChronic intermittent left forelimb lameness for four months, worse after exercise and after rest following exercise.\nDiagnosed with medial coronoid process disease on CT.\n\nProcedure:\nArthroscopy of the left elbow under general anaesthesia.\nFragmented medial coronoid process identified and removed.\nCartilage assessed as modified Outerbridge grade 2 over the medial compartment.\nJoint lavaged.\nNo complications; anaesthesia uneventful, 55 minutes.\n\nPost-operative course:\nRecovered well.\nWeight-bearing on the limb within hours of recovery.\nPortals dry with a single suture in each.\nDischarged the same day, eating before leaving.\n\nMedication on discharge:\nMeloxicam 0.1 mg/kg once daily for 10 days, with food.\nMultimodal analgesia continued; paracetamol-containing human products must never be given, and the owner has been told this explicitly.\nA joint supplement containing omega-3 fatty acids and glucosamine recommended long term.\n\nHome care instructions:\nStrict lead-only exercise for two weeks, five to ten minutes three times daily for toileting only.\nNo stairs, no jumping, no play with the household's other dog, and no slippery floors — runners have been suggested for the hallway.\nPortal sites to be checked daily; suture removal at 10 days.\nBuster collar if he licks.\n\nRehabilitation:\nGraduated increase in lead exercise from week three.\nControlled physiotherapy and hydrotherapy from week three, referral details provided.\n\nWeight management:\nTarget body condition score 4 to 5 out of 9, which means losing approximately 4 kg.\nThis is the single most effective long-term intervention for elbow dysplasia and the owner has been given a written feeding plan.\n\nPlan:\nRecheck at six weeks with a gait assessment.\nLong-term monitoring for osteoarthritis, which is expected in this condition regardless of surgery; the owner has been counselled that the surgery addresses the fragment and the pain, not the underlying dysplasia.\nScreening implications for breeding discussed; he is neutered, but the breeder should be informed.\n",
      "recipient": "Dr James Okonkwo, primary care veterinarian, Fielding Road Veterinary Clinic",
      "letterType": "discharge",
      "taskInstruction": "Summarise the arthroscopic procedure and outline the rehabilitation plan after surgery for elbow dysplasia."
    },
    "guidanceNote": "Focus on the staged rehabilitation and weight control rather than the surgical detail; the primary vet will be managing the long-term osteoarthritis risk."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-discharge-of-a-canine-pyometra-patient-following-ovariohysterectomy",
    "title": "Veterinary Science — Discharge of a canine pyometra patient following ovariohysterectomy",
    "prompt": "Using the case notes, write a letter to the referring primary care veterinarian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Nala', Labrador Retriever, female, entire at presentation and now neutered, 7 years, 28 kg.\nAdmitted 24 August 2026, discharged 26 August 2026.\n\nReason for admission:\nLethargy, anorexia, polydipsia and purulent vulval discharge, five weeks after her last season.\nDiagnosed with open pyometra.\n\nDiagnostics:\nLeucocytosis of 32 x 10^9/L with a marked left shift.\nMild azotaemia, creatinine 145 micromol/L, which resolved with fluid therapy.\nUrine specific gravity 1.018 on admission.\nUltrasound confirmed a fluid-filled, distended uterus with no free abdominal fluid.\nVaginal cytology showed degenerate neutrophils with intracellular bacteria.\n\nProcedure:\nEmergency ovariohysterectomy under general anaesthesia on the evening of admission.\nThe uterus was markedly distended and was removed intact without spillage.\nOvarian pedicles and uterine body ligated routinely.\nAbdomen lavaged. Closure routine.\nUneventful recovery.\n\nPost-operative course:\nHospitalised for 48 hours on intravenous fluids and analgesia.\nEating and drinking normally by the morning of day two.\nUrinating freely; no discharge from the wound.\nTemperature normal throughout.\n\nMedication on discharge:\nAmoxicillin-clavulanate 12.5 mg/kg twice daily for 7 days, with food.\nMeloxicam 0.1 mg/kg once daily for 5 days, with food.\nBuprenorphine was given for the first 24 hours in hospital and is not continued at home.\n\nHome care:\nLead exercise only and a buster collar at all times for 10 days.\nNo bathing, no swimming.\nWound to be checked twice daily for swelling, redness or discharge.\n\nPlan:\nSuture check in 3 days, on 29 August.\nSuture removal on day 10, 5 September.\nRecheck renal values in 2 weeks to confirm the azotaemia has fully resolved.\nThe owner has been advised to contact the clinic immediately if Nala becomes dull, stops eating, vomits, or if the wound opens.\nThe relationship between entire status and pyometra has been discussed for the benefit of any future dogs in the household.\n",
      "recipient": "Dr Olivia Hart, primary care veterinarian, Meadowbank Veterinary Surgery",
      "letterType": "discharge",
      "taskInstruction": "Provide a discharge summary and ongoing care instructions following emergency surgery for pyometra."
    },
    "guidanceNote": "Give the primary vet the practical handover: medication course, wound care timeline and the renal recheck, since the azotaemia needs confirming it has resolved."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-emergency-transfer-of-canine-gastric-dilatation-volvulus-to-a-24-hour-surgical-centre",
    "title": "Veterinary Science — Emergency transfer of canine gastric dilatation-volvulus to a 24-hour surgical centre",
    "prompt": "Using the case notes, write a letter to the receiving emergency surgeon. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Bruno', Great Dane, male entire, 5 years, 62 kg.\nPresented 1 September 2026 at 21.15. This referral written at 21.50.\n\nPresenting complaint:\nAcute unproductive retching, abdominal distension and restlessness, beginning approximately two hours after his evening meal.\nThe owner describes him trying to vomit repeatedly with nothing produced, and pacing.\n\nHistory:\nNo prior episodes.\nDeep-chested breed, not gastropexied.\nFed one large meal daily and exercised afterwards.\nNo known toxin access.\n\nExamination on arrival:\nTachycardic at 160 beats per minute.\nWeak femoral pulses.\nCapillary refill time 3 seconds.\nTympanic, distended cranial abdomen.\nPale mucous membranes.\nRectal temperature 37.4 degrees Celsius.\nRespiratory rate 40 with an abdominal component.\n\nDiagnostics:\nRight lateral abdominal radiograph shows the classic double bubble compartmentalisation, consistent with volvulus rather than simple dilatation.\nLactate 6.2 mmol/L, which carries prognostic significance and should be rechecked on arrival with you.\nPacked cell volume 52 per cent, total protein 62 g/L.\n\nStabilisation provided here:\nTwo 18 gauge cephalic catheters placed.\nHartmann's solution, 20 mL/kg bolus given, with a second bolus running.\nGastric decompression by orogastric tube, partially successful — a large volume of gas released, but the tube would not pass fully.\nIntravenous methadone 0.2 mg/kg for analgesia.\nECG shows occasional ventricular premature complexes, currently not requiring treatment but needing continued monitoring.\nOxygen by flow-by.\n\nPlan:\nImmediate transfer for surgery — derotation, assessment of gastric and splenic viability, and gastropexy.\nThe owner has consented to surgery and is travelling separately in his own car; Bruno is travelling in ours with a nurse.\nAn estimate has been provided and accepted.\nHe is leaving at 21.55 and should be with you within 25 minutes.\nPlease telephone this practice on arrival; our number is on the referral form.\n",
      "recipient": "the duty emergency surgeon, Northgate Veterinary Emergency &amp; Critical Care Centre",
      "letterType": "transfer",
      "taskInstruction": "Transfer this dog urgently for surgical correction of confirmed gastric dilatation-volvulus, summarising stabilisation already provided."
    },
    "guidanceNote": "Lead with the time-critical diagnosis and what you have already done, so the surgeon can prepare theatre; the rising lactate and VPCs are the details that signal urgency."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-referral-for-refractory-feline-hyperthyroidism-for-radioiodine-therapy",
    "title": "Veterinary Science — Referral for refractory feline hyperthyroidism for radioiodine therapy",
    "prompt": "Using the case notes, write a letter to a veterinary internal medicine specialist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Biscuit', domestic shorthair cat, female neutered, 13 years, 3.4 kg.\nWeighed 4.6 kg fourteen months ago.\nSeen 30 August 2026.\n\nPresenting complaint:\nWeight loss despite polyphagia.\nIntermittent vomiting, approximately twice weekly.\nThe owner reports restlessness at night and increased vocalisation.\n\nHistory:\nDiagnosed hyperthyroid eleven months ago with a total T4 of 78 nmol/L.\nStarted on methimazole 2.5 mg twice daily.\nDose increased to 5 mg twice daily at month four.\nThe owner reports that tablet administration has become increasingly difficult and that she suspects several missed doses each week; Biscuit now hides when the tablet box is opened. This is likely to be at least part of the reason for the poor control.\n\nExamination:\nHeart rate 220 beats per minute.\nGrade II out of VI systolic murmur.\nPalpable goitre involving the left thyroid lobe.\nBody condition score 3 out of 9 with marked muscle wastage over the spine.\nMild dehydration at 3 per cent.\nCoat unkempt.\n\nDiagnostics:\nTotal T4 still elevated at 65 nmol/L on the current dose.\nUrea 9.8 mmol/L.\nCreatinine 132 micromol/L, at the upper end of normal — this is important, as treating the hyperthyroidism may unmask underlying kidney disease.\nUrine specific gravity 1.038.\nSystolic blood pressure 168 mmHg.\nNo proteinuria.\n\nCurrent treatment:\nMethimazole 5 mg twice daily.\nAmlodipine 0.625 mg once daily, started two weeks ago for the hypertension.\n\nOwner's position:\nKeen on a curative option and specifically asking about radioiodine, having read about it.\nShe has said clearly that she cannot continue tableting twice daily.\nAware of the isolation period and the cost.\n\nPlan:\nRefer for radioiodine therapy following pre-treatment renal and cardiac assessment.\nA methimazole trial to assess renal function once euthyroid would be the conventional step before treatment, and I would value your view on whether this is needed given the compliance problem.\nEchocardiography suggested in view of the murmur and the tachycardia.\n",
      "recipient": "Dr Helen Voss, Veterinary Internal Medicine Specialist, Riverside Referral Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer this cat for assessment and radioiodine (I-131) treatment of hyperthyroidism that is no longer controlled medically."
    },
    "guidanceNote": "Make the renal-masking concern explicit: borderline kidney values can worsen once the thyroid is controlled, so the specialist needs the pre-treatment creatinine and the medication history."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-referral-for-suspected-cranial-cruciate-ligament-rupture",
    "title": "Veterinary Science — Referral for suspected cranial cruciate ligament rupture",
    "prompt": "Using the case notes, write a letter to the orthopaedic specialist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\n'Bramble', 4-year-old male neutered Labrador Retriever, 38 kg.\nBody condition score 6 out of 9.\nSeen 29 August 2026.\n\nPresenting complaint:\nA three-week history of progressive right hindlimb lameness.\nAcute worsening after running four days ago.\nNow intermittently non-weight-bearing, and sitting with the leg out to the side.\n\nHistory:\nActive family pet, walked twice daily and swims.\nNo prior orthopaedic problems.\nFully vaccinated.\nNo current medication other than that listed below.\nNo known drug reactions.\n\nExamination:\nRight stifle effusion with a palpable medial buttress.\nPositive cranial drawer and positive tibial thrust on the right stifle.\nPain on full extension.\nMild muscle atrophy of the right thigh, 2 cm circumference difference.\nNo meniscal click detected conscious.\nLeft stifle — no drawer, but mild effusion noted, which raises the possibility of early contralateral disease. This is common in this breed and should be part of the discussion.\n\nDiagnostics:\nSedated orthopaedic examination confirmed instability, with a clear cranial drawer of approximately 8 mm.\nMediolateral radiographs show stifle effusion, mild osteophytosis at the trochlear ridges, and no fracture.\nTibial plateau angle measured at 27 degrees.\nRoutine bloods unremarkable; pre-anaesthetic panel within normal limits.\n\nCurrent treatment:\nMeloxicam 0.1 mg/kg by mouth every 24 hours, started five days ago with a good partial response.\nStrict rest, lead only.\nWeight-loss diet commenced; target 33 kg.\n\nOwner discussion:\nSurgical stabilisation discussed, with tibial plateau levelling osteotomy raised as the likely option for a dog of this size and activity level.\nCounselled on cost and on the possibility of bilateral disease, and that the second stifle may need surgery within a year.\nThe owner is committed and has arranged time off for the recovery period.\n\nPlan:\nRefer for surgical stabilisation.\nAwaiting your assessment.\nMeloxicam and rest to continue in the meantime.\n",
      "recipient": "Dr Hannah Pereira, Veterinary Orthopaedic Specialist, Riverside Referral Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer this dog for orthopaedic assessment & surgical management of a suspected cranial cruciate ligament rupture."
    },
    "guidanceNote": "Lead with the reason for referral and the confirmed instability findings; the contralateral stifle and the body condition score are relevant to the specialist's surgical planning, so keep them."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-referral-of-a-canine-appendicular-osteosarcoma-for-oncology-assessment",
    "title": "Veterinary Science — Referral of a canine appendicular osteosarcoma for oncology assessment",
    "prompt": "Using the case notes, write a letter to a veterinary oncologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Sasha', Rottweiler, female neutered, 8 years, 41 kg.\nSeen 31 August 2026.\n\nPresenting complaint:\nProgressive right forelimb lameness over six weeks, now non-weight-bearing.\nFirm painful swelling at the distal radius, noticed by the owner two weeks ago.\n\nHistory:\nNo known trauma.\nThe lameness initially responded partially to meloxicam and then deteriorated despite it, which is the pattern that prompted radiography.\nOtherwise well; appetite good and no weight loss.\nNo cough and no exercise intolerance before the lameness.\n\nExamination:\nMarked swelling and severe pain on palpation of the distal right radius.\nReduced carpal range of motion.\nNo palpable prescapular lymphadenopathy.\nOtherwise bright and alert, body condition score 5 out of 9.\nThoracic auscultation normal.\n\nDiagnostics:\nRadiographs of the right antebrachium show an aggressive mixed lytic and proliferative lesion of the distal radius with cortical destruction, a long zone of transition and marked soft tissue swelling.\nNo pathological fracture at present, though the cortex is thin.\nThoracic radiographs, three views, show no overt pulmonary metastasis.\nRoutine haematology and biochemistry unremarkable; alkaline phosphatase within normal limits, which carries prognostic relevance.\n\nCurrent treatment:\nMeloxicam 0.1 mg/kg once daily.\nMultimodal analgesia; no paracetamol-containing product is being used.\nGabapentin 10 mg/kg three times daily added four days ago with some improvement in night-time restlessness.\n\nOwner discussion:\nThe likely diagnosis and its implications have been explained honestly, including that thoracic radiographs cannot exclude micrometastasis, which is present in the great majority at diagnosis.\nThe owner is considering amputation and has asked about Sasha's ability to cope on three legs; her other joints are clinically normal, which is favourable.\n\nPlan:\nRefer for cytology or biopsy confirmation, full staging including CT of the thorax, and discussion of forelimb amputation with adjuvant carboplatin.\nPathological fracture is a real and imminent risk, so exercise is strictly restricted and I would ask that she be seen promptly.\nPalliative options including radiotherapy and bisphosphonates should also be presented, as the owner may not choose surgery.\n",
      "recipient": "Dr Marcus Lin, Veterinary Oncologist, Crownhill Cancer Referral Service",
      "letterType": "referral",
      "taskInstruction": "Refer this dog for staging and discussion of amputation and adjuvant chemotherapy for a suspected appendicular osteosarcoma."
    },
    "guidanceNote": "Note that thoracic films are currently clear but staging is incomplete; the oncologist needs to know what imaging has and has not been done before counselling the owner."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-referral-of-a-canine-cataract-for-ophthalmic-surgical-assessment",
    "title": "Veterinary Science — Referral of a canine cataract for ophthalmic surgical assessment",
    "prompt": "Using the case notes, write a letter to a veterinary ophthalmologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Tilly', Cocker Spaniel, female neutered, 7 years, 14.5 kg.\nSeen 28 August 2026.\n\nPresenting complaint:\nProgressive vision loss over three months.\nBumping into furniture, particularly in dim light and in unfamiliar places.\nCloudy appearance to both eyes, noticed by the owner about six weeks ago.\nReluctant to go out into the garden at night.\n\nHistory:\nNot diabetic — blood glucose and urine dipstick both normal, checked this week.\nNo ocular trauma reported.\nNo previous ocular medication.\nOtherwise healthy; no other systemic illness.\nSire and dam status unknown; she came from a private seller.\n\nExamination:\nBilateral immature to mature cataracts, more advanced in the left eye where the fundus cannot be visualised at all.\nMenace response reduced bilaterally, absent on the left.\nDazzle reflex present bilaterally.\nPupillary light reflexes present, both direct and consensual.\nNo overt uveitis — no ciliary flush, no miosis, no hypopyon.\nIntraocular pressures within normal range, left 16 and right 18 mmHg.\n\nDiagnostics:\nFundic examination obscured by lens opacity, particularly on the left.\nNo aqueous flare detected on slit-lamp examination.\nTear production normal on the Schirmer tear test, 18 mm on the left and 20 mm on the right.\nFluorescein negative both eyes.\n\nCurrent treatment:\nTopical anti-inflammatory drops, ketorolac twice daily, started to control lens-induced uveitis, which is a real risk with a maturing cataract and can compromise surgical candidacy if left.\n\nOwner's position:\nKeen to restore vision if retinal function can be confirmed.\nAware that surgery is not always possible and that the outcome depends on the retina behind the lens.\n\nPlan:\nRefer for electroretinography and ocular ultrasound to assess retinal function and to exclude retinal detachment or lens capsule rupture, followed by assessment for phacoemulsification.\nThe topical anti-inflammatory should continue until you see her.\nGiven progressive lens maturation, earlier assessment gives the better surgical result, and I have explained this to the owner.\n",
      "recipient": "Dr Sofia Mendez, Veterinary Ophthalmology Specialist, Vista Eye Referrals",
      "letterType": "referral",
      "taskInstruction": "Refer this dog for assessment of bilateral cataracts and suitability for phacoemulsification surgery."
    },
    "guidanceNote": "Mention that diabetes has been ruled out and IOPs are normal; the ophthalmologist needs to know retinal function is still to be assessed before surgery can be offered."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-referral-of-a-chronic-canine-atopic-dermatitis-case-to-a-dermatology-service",
    "title": "Veterinary Science — Referral of a chronic canine atopic dermatitis case to a dermatology service",
    "prompt": "Using the case notes, write a letter to a veterinary dermatologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Rolo', French Bulldog, male neutered, 4 years, 13.8 kg.\nSeen 29 August 2026.\n\nPresenting complaint:\nChronic pruritus affecting the face, paws, axillae and ventral abdomen.\nRecurrent ear infections, five courses of treatment in two years.\n\nHistory:\nItch began at 18 months of age, initially seasonal from spring to autumn, now year-round.\nMultiple courses of antibiotics and short courses of steroids, with partial response each time and prompt relapse.\nPruritus score reported by the owner as 7 out of 10 on a bad week.\nSleep disturbed for both dog and household.\n\nExamination:\nErythema and lichenification of the axillae and interdigital spaces.\nSalivary staining of all four paws.\nBilateral erythematous otitis externa with a moist discharge; the vertical canals are stenotic, worse on the left.\nSecondary excoriation over the ventral abdomen.\nNo alopecia suggestive of endocrine disease.\nSkin folds of the face and tail moist but not currently infected.\n\nDiagnostics:\nCytology shows Malassezia and cocci overgrowth in both the ear and the skin.\nA strict eight-week hydrolysed diet trial was completed with the owner's excellent compliance, with limited improvement — this makes food allergy unlikely as the primary driver.\nNo ectoparasites found on coat brushings or skin scrapes; on year-round flea control.\nNo dermatophytes on culture.\n\nCurrent treatment:\nOclacitinib 0.5 mg/kg twice daily, reduced to once daily after 14 days per licence.\nMedicated antiseptic shampoo twice weekly.\nEar cleaner twice weekly.\n\nOwner's position:\nSeeking steroid-sparing long-term control.\nConcerned about the cumulative cost of repeated infection treatment and open to immunotherapy despite the time it takes to work.\n\nPlan:\nRefer for intradermal or serological allergy testing and consideration of allergen-specific immunotherapy.\nEar canal assessment is also needed; the stenosis is progressing and video-otoscopy would be valuable before it becomes end-stage.\nCurrent medication to continue until you advise, though oclacitinib will need withdrawing before intradermal testing and I would appreciate guidance on timing.\n",
      "recipient": "Dr Claire Whitmore, Veterinary Dermatology Specialist, Parkside Skin &amp; Allergy Clinic",
      "letterType": "referral",
      "taskInstruction": "Refer this dog for allergy testing and a long-term management plan for chronic, poorly controlled atopic dermatitis."
    },
    "guidanceNote": "Confirm the diet trial and flea control have already excluded the main differentials; the dermatologist needs that work-up summarised to justify proceeding to allergy testing."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-referral-of-a-pet-rabbit-with-dental-malocclusion-and-molar-spurs",
    "title": "Veterinary Science — Referral of a pet rabbit with dental malocclusion and molar spurs",
    "prompt": "Using the case notes, write a letter to an exotic animal veterinary specialist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Clover', Netherland Dwarf rabbit, female neutered, 3 years, 1.1 kg.\nWeighed 1.35 kg at her last visit in February.\nSeen 30 August 2026.\n\nPresenting complaint:\nReduced appetite, dropping food from the mouth, weight loss and ocular discharge over two weeks.\n\nHistory:\nPredominantly pelleted diet with limited hay; the owner reports she \"doesn't like\" hay.\nOccasional greens and a daily muesli-type mix, which has been discussed.\nPrevious incisor trim six months ago at another practice.\nHoused indoors with a companion rabbit, who is well.\n\nExamination:\nReduced faecal output, with fewer and smaller pellets in the carrier.\nMoist dermatitis under the chin from drooling.\nWatery left eye with a patent nasolacrimal duct on flushing, though flushing was difficult.\nPalpable irregularity along the ventral border of the mandible.\nOral examination with an otoscope shows sharp spurs on the lower cheek teeth lacerating the lateral tongue on the left.\nBody condition score 2 out of 5.\nGut sounds reduced but present.\n\nDiagnostics:\nLimited conscious oral examination only; a full assessment is not possible in a conscious rabbit and should not be attempted.\nElongated tooth roots are suspected on palpation and on the nasolacrimal signs.\nNo imaging performed in-house.\n\nCurrent treatment:\nAssist-feeding with a critical care formula by syringe, 50 mL/kg daily divided into six feeds.\nMeloxicam 0.5 mg/kg once daily.\nProkinetic and subcutaneous fluids for gut stasis support.\nShe has taken syringe feeds willingly, which is encouraging.\n\nPlan:\nRefer for skull radiographs or CT and dental burring under general anaesthesia.\nCT would be preferable given the suspected root elongation and the nasolacrimal involvement.\nOngoing dietary correction advised — unlimited good-quality hay as the basis of the diet, pellets restricted to a tablespoon daily, and the muesli mix stopped entirely.\nThe owner has been told honestly that this is likely to be a lifelong, recurring problem requiring repeated procedures, and that diet is the only factor she can influence.\n",
      "recipient": "Dr Emma Coyle, Exotic Animal Veterinary Specialist, Greenway Exotics Practice",
      "letterType": "referral",
      "taskInstruction": "Refer this rabbit for advanced imaging and dental treatment of acquired molar malocclusion under specialist care."
    },
    "guidanceNote": "Keep it clear and factual for the exotics team: stress the gut stasis risk and current supportive feeding, since rabbits decompensate quickly when not eating."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-referral-of-an-equine-recurrent-colic-case-for-surgical-evaluation",
    "title": "Veterinary Science — Referral of an equine recurrent colic case for surgical evaluation",
    "prompt": "Using the case notes, write a letter to the equine surgical team. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Comet', Warmblood gelding, 12 years, approximately 560 kg.\nAttended on the yard 1 September 2026. This is the third visit in 36 hours.\n\nPresenting complaint:\nThird colic episode in 36 hours.\nPawing, flank-watching, rolling and reduced faecal output.\nPain has recurred within two hours of each treatment.\n\nHistory:\nRecent change of forage, from haylage to a new batch of hay ten days ago.\nPrevious mild spasmodic colics, twice in three years, both resolved with antispasmodics.\nUp to date with dental care, last floated in June, and with a targeted worming programme with negative faecal egg counts.\nStabled overnight, turned out by day.\nNo access to sand.\n\nExamination:\nHeart rate 64 beats per minute, up from 48 at the first visit.\nCongested mucous membranes.\nCapillary refill time 3 seconds.\nReduced gut sounds in all four quadrants.\nMild abdominal distension.\nRectal temperature 37.8 degrees Celsius.\nDigital pulses normal.\n\nDiagnostics:\nRectal examination reveals a distended large colon with a gas-filled viscus, and the position suggests a displacement.\nNasogastric intubation produced moderate net reflux, approximately 4 litres.\nPeritoneal tap shows mildly elevated protein with a normal lactate at this stage, so devitalised bowel is not yet indicated — but this can change quickly.\nPacked cell volume 46 per cent.\n\nCurrent treatment:\nIntravenous flunixin given; please note this may mask deterioration and the time of administration is on the referral form.\nBuscopan given at the second visit.\nIntravenous fluids running.\nStomach decompressed via nasogastric tube, which has been left in place for transport.\n\nPlan:\nRefer for surgical assessment and possible exploratory laparotomy.\nTransport is arranged and he is loading now; travel time approximately 50 minutes.\nThe owner has consented to surgery if required and has discussed insurance cover, which is in place.\nThe deteriorating heart rate, the reflux and the recurrence of pain despite analgesia are the three findings driving this referral.\n",
      "recipient": "the duty surgeon, Ashdown Equine Hospital Surgical Unit",
      "letterType": "referral",
      "taskInstruction": "Refer this horse urgently for surgical evaluation of recurrent colic unresponsive to medical management."
    },
    "guidanceNote": "Flag that flunixin has been given because it can mask cardiovascular deterioration; the surgeon needs the timeline of analgesia, the reflux and the recurring pain to judge urgency."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-referral-of-canine-diabetes-mellitus-with-suspected-concurrent-cushing-s-disease",
    "title": "Veterinary Science — Referral of canine diabetes mellitus with suspected concurrent Cushing's disease",
    "prompt": "Using the case notes, write a letter to a veterinary internal medicine specialist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Pippa', Miniature Schnauzer, female neutered, 10 years, 11.2 kg.\nSeen 27 August 2026.\n\nPresenting complaint:\nPersistent polyuria, polydipsia and polyphagia despite insulin therapy.\nPot-bellied appearance and thinning coat, both progressive over four months.\nThe owner reports needing to let her out twice during the night.\n\nHistory:\nDiagnosed diabetic eight months ago.\nOn caninsulin, with the dose escalated from 0.5 to 1.1 IU/kg twice daily with poor response at every step.\nNo cataracts as yet, which is somewhat surprising at this stage.\nNo history of pancreatitis. Triglycerides mildly elevated, as is common in the breed.\n\nExamination:\nBilaterally symmetrical truncal alopecia sparing the head and limbs.\nAbdominal distension with a pendulous appearance.\nHepatomegaly on palpation.\nBody condition score 7 out of 9.\nThin skin with visible ventral vessels.\nMuscle wastage over the hindlimbs despite the body condition score.\n\nDiagnostics:\nPersistent hyperglycaemia throughout the day.\nFructosamine elevated, indicating poor long-term control rather than a single bad day.\nMild alkaline phosphatase elevation at 620 U/L.\nUrine specific gravity 1.018 with no active sediment; urine culture negative, so urinary infection is not the cause of the resistance.\nBlood glucose curve shows minimal nadir, with glucose remaining above 18 mmol/L throughout.\n\nCurrent treatment:\nCaninsulin 1.1 IU/kg twice daily.\nControlled high-fibre diet, fed consistently at injection times.\nThe owner has demonstrated correct injection technique in the clinic and stores the insulin appropriately; a fresh vial was issued three weeks ago with no change in response.\n\nAssessment:\nInsulin resistance of this degree, with the clinical picture above, points strongly to concurrent hyperadrenocorticism.\n\nPlan:\nRefer for ACTH stimulation testing or a low-dose dexamethasone suppression test, and for a review of the insulin resistance.\nTrilostane has not been started, deliberately, pending confirmation.\nThe owner is aware that treating both conditions together is complex and that the insulin dose will need adjusting once the adrenal disease is controlled.\n",
      "recipient": "Dr Ahmed Farouk, Veterinary Internal Medicine Specialist, Beaumont Referral Centre",
      "letterType": "referral",
      "taskInstruction": "Refer this dog for investigation of poorly controlled diabetes mellitus with suspected concurrent hyperadrenocorticism."
    },
    "guidanceNote": "State clearly that endocrine testing has not yet been done; the specialist needs the insulin history and the signs raising suspicion of insulin resistance, not a self-diagnosis."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-referral-of-canine-immune-mediated-haemolytic-anaemia-to-a-transfusion-service",
    "title": "Veterinary Science — Referral of canine immune-mediated haemolytic anaemia to a transfusion service",
    "prompt": "Using the case notes, write a letter to a veterinary internal medicine specialist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Hugo', Springer Spaniel, male entire, 6 years, 19.4 kg.\nPresented 31 August 2026. This referral written the same day.\n\nPresenting complaint:\nSudden lethargy, one episode of collapse, pale gums and reluctance to exercise over 48 hours.\n\nHistory:\nNo toxin access reported; no zinc, no rodenticide.\nNo recent travel outside the country.\nVaccinations current, last given four months ago.\nNo known onion or garlic ingestion.\nNo recent medication of any kind.\n\nExamination:\nPale to icteric mucous membranes.\nTachycardia at 170 beats per minute.\nPulses bounding initially and now weak.\nSplenomegaly on palpation.\nGrade II out of VI flow murmur, consistent with the anaemia.\nRespiratory rate 44 with mild effort.\nTemperature 39.4 degrees Celsius.\n\nDiagnostics:\nPacked cell volume 14 per cent, with a regenerative response and marked reticulocytosis.\nSpherocytosis on blood smear.\nPositive in-saline agglutination test, persisting after washing.\nMild hyperbilirubinaemia.\nNo haemoparasites seen on smear.\nSNAP tests for vector-borne disease negative.\nThoracic and abdominal imaging showed no mass and no evidence of neoplasia; splenomegaly only.\nPlatelet count normal, so this appears to be primary IMHA without concurrent thrombocytopenia.\n\nCurrent treatment:\nPrednisolone 2 mg/kg per day, started this morning.\nGastroprotectant.\nIntravenous crystalloids.\nClopidogrel for thromboprophylaxis — thromboembolism remains the leading cause of death in this disease and prophylaxis has been started early.\n\nPlan:\nRefer urgently for blood typing and packed red cell transfusion; the packed cell volume is falling and he is symptomatic at rest.\nConsideration of second-line immunosuppression will be needed if there is no response within the first few days.\nThe owner is aware of the guarded prognosis and of the cost of transfusion and prolonged hospitalisation, and wishes to proceed.\nHe is travelling with the dog now and has our full records.\n",
      "recipient": "Dr Nathan Brooks, Veterinary Internal Medicine Specialist, Hartwell Referral Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer this dog for transfusion support and immunosuppressive management of suspected immune-mediated haemolytic anaemia."
    },
    "guidanceNote": "Include the agglutination and spherocyte findings that support the immune-mediated diagnosis, plus the current PCV, so the team can prioritise cross-matching and transfusion."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "VETERINARY_SCIENCE",
    "slug": "wri-veterinary-science-referral-of-feline-hypertrophic-cardiomyopathy-with-arterial-thromboembolism",
    "title": "Veterinary Science — Referral of feline hypertrophic cardiomyopathy with arterial thromboembolism",
    "prompt": "Using the case notes, write a letter to a veterinary cardiologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nAnimal:\n'Mochi', Maine Coon, male neutered, 6 years, 6.1 kg.\nPresented as an emergency 1 September 2026 at 09.40.\n\nPresenting complaint:\nAcute hindlimb paresis, distress and vocalisation this morning.\nThe owner found him dragging both back legs and crying at 08.30.\n\nHistory:\nNo prior cardiac diagnosis and no murmur recorded at his vaccination visit in March.\nMild lethargy noted by the owner over recent weeks and attributed to the warm weather.\nIndoor cat, no trauma possible.\n\nExamination:\nBoth hindlimbs cold to the touch with absent femoral pulses.\nCyanotic nail beds; no bleeding on nail quick trim.\nFirm, painful gastrocnemius muscles bilaterally.\nGallop rhythm auscultated; no murmur.\nRespiratory rate 48 per minute with mild increased effort.\nRectal temperature 36.2 degrees Celsius — hypothermia is a recognised negative prognostic indicator here.\nMotor function absent in both hindlimbs; deep pain sensation reduced but present on the right.\n\nDiagnostics:\nNT-proBNP markedly elevated.\nPoint-of-care echocardiography shows left atrial enlargement with a left atrium to aorta ratio of 2.2, and a thickened left ventricular wall.\nNo visible intracardiac thrombus on this limited study.\nMild pleural effusion on thoracic ultrasound.\nPotassium 4.2 mmol/L; this must be rechecked as reperfusion can cause a dangerous rise.\n\nCurrent treatment:\nIntravenous methadone for analgesia; the pain associated with this condition is severe and is the immediate priority.\nClopidogrel 18.75 mg once daily started.\nLow-dose furosemide given for suspected early congestive failure.\nKept warm with passive warming and cage-rested.\n\nPlan:\nRefer for full echocardiography, thromboprophylaxis planning and heart failure management.\nThe owner has been counselled honestly on the guarded prognosis, on the risk of recurrence even with treatment, and on euthanasia as a reasonable option; she wishes to attempt treatment and has asked to reassess at 48 hours.\nScreening implications for related cats have been mentioned but deferred.\n",
      "recipient": "Dr Priya Nair, Veterinary Cardiology Specialist, Lakeside Cardiac Referrals",
      "letterType": "referral",
      "taskInstruction": "Refer this cat for echocardiographic assessment and ongoing management following an episode of aortic thromboembolism."
    },
    "guidanceNote": "Be honest about the guarded prognosis and the analgesia given; the cardiologist needs the echo findings and current antithrombotic therapy to plan ongoing care."
  }
];
