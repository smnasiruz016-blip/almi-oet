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
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-abdominal-aortic-aneurysm-found-on-ultrasound-screening",
    "title": "Radiography — Abdominal aortic aneurysm found on ultrasound screening",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Raymond Cole, 71, retired scaffolder.\nAttended 28 August 2026.\n\nReason for scan:\nRoutine abdominal aortic aneurysm screening ultrasound. First invitation, attended on the second letter.\n\nExamination performed:\nTransabdominal ultrasound of the abdominal aorta. Curvilinear probe, patient supine, adequate fasting.\nImage quality good; bowel gas did not limit the study.\n\nImaging findings:\nInfrarenal abdominal aorta measured at a maximum anteroposterior diameter of 5.7 cm, inner-to-inner, reproduced on three measurements.\nThe aneurysm extends from just below the renal arteries to the bifurcation, length approximately 6 cm.\nNo free fluid in the abdomen or pelvis.\nNo periaortic collection and no evidence of leak.\nCommon iliac arteries within normal limits at 1.3 cm right and 1.2 cm left.\nBoth kidneys of normal size with no hydronephrosis.\n\nRelevant history:\nForty-five pack-year smoking history; still smoking ten a day.\nHypertension, diagnosed 2009.\nHyperlipidaemia.\nNo abdominal or back pain reported today and no pulsatile sensation noticed by the patient.\nFather died of a ruptured aneurysm at 68.\n\nMedication:\nAmlodipine 10 mg daily.\nAtorvastatin 40 mg daily.\nAspirin 75 mg daily.\n\nAllergies and contrast:\nNo known allergies. No contrast used; this was an ultrasound study only.\n\nBlood pressure at attendance:\n158/92, repeated at 154/90.\n\nCommunication with the patient:\nInformed of the finding at the appointment, as is protocol for a screen-positive result.\nHe was calm but his wife, who attended, was distressed.\nWritten information given.\n\nRecommendation and plan:\nThe aneurysm exceeds the 5.5 cm intervention threshold, so urgent referral to vascular surgery is advised rather than surveillance.\nHe has been counselled to seek emergency care immediately for sudden severe abdominal or back pain, or collapse, and given a card to carry.\nAdvised not to drive himself to any appointment.\nSmoking cessation reinforced with a specific explanation of its effect on expansion rate, and a referral made.\nBlood pressure control should be reviewed, as today's readings are above target.\n",
      "recipient": "Dr Helen Forsythe, General Practitioner, Brookvale Medical Centre",
      "letterType": "referral",
      "taskInstruction": "Write a letter referring the patient for vascular surgical assessment after an enlarged abdominal aorta was identified during screening ultrasound."
    },
    "guidanceNote": "Foreground the aneurysm size and the urgency of vascular referral; the smoking history is relevant context, but do not list every cardiovascular detail."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-acute-appendicitis-confirmed-on-abdominal-ultrasound",
    "title": "Radiography — Acute appendicitis confirmed on abdominal ultrasound",
    "prompt": "Using the case notes, write a letter to the on-call surgical registrar. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMiss Hannah Okeke, 22, university student.\nAttended the emergency department 1 September 2026. Scanned at 14.10.\n\nReason for scan:\nRight iliac fossa pain for eighteen hours, initially periumbilical and then localising.\nLow-grade fever, anorexia and one episode of vomiting.\nReferred from the emergency department with an Alvarado score of 7.\n\nExamination performed:\nGraded compression ultrasound of the right iliac fossa and pelvis.\nTransabdominal only; transvaginal declined by the patient.\nStudy limited slightly by tenderness but diagnostic.\n\nImaging findings:\nBlind-ending, non-compressible tubular structure in the right iliac fossa measuring 9 mm in maximum outer diameter.\nWall thickening with hyperaemia on colour Doppler.\nSurrounding echogenic fat stranding.\nA small volume of free fluid in the pelvis, simple in appearance.\nNo appendicolith identified. No abscess or phlegmon.\nBoth ovaries visualised and normal; no adnexal mass and no torsion.\nRight kidney normal with no hydronephrosis.\nAppearances are consistent with acute appendicitis.\n\nRelevant history:\nLast menstrual period two weeks ago. Urinary pregnancy test negative, performed on arrival.\nNo previous abdominal surgery.\nNo urinary symptoms. No diarrhoea.\nNo recent travel.\n\nObservations at the time of scanning:\nTemperature 37.8 degrees Celsius, pulse 98, blood pressure 118/72.\nWhite cell count 13.6, C-reactive protein 42.\n\nMedication:\nNone regular.\n\nAllergies and contrast:\nNo known allergies. No contrast used; ultrasound only.\n\nCommunication:\nFindings telephoned to the referring emergency department registrar at 14.35 and acknowledged.\nThe patient has been told that the scan shows appendicitis and that a surgeon will see her.\n\nRecommendation and plan:\nImaging supports acute appendicitis. Urgent surgical assessment recommended.\nThe patient has been kept nil by mouth and analgesia has been given.\nCT is not indicated given the diagnostic ultrasound and her age; further imaging would add radiation without benefit.\n",
      "recipient": "Dr James Carrick, On-call Surgical Registrar, General Surgery",
      "letterType": "referral",
      "taskInstruction": "Write a letter referring the patient for urgent surgical review after ultrasound confirmed acute appendicitis."
    },
    "guidanceNote": "This is time-sensitive, so lead with the diagnosis and the request for urgent review; include the negative pregnancy test as it is relevant to surgical management."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-bone-metastases-on-whole-body-bone-scintigraphy",
    "title": "Radiography — Bone metastases on whole-body bone scintigraphy",
    "prompt": "Using the case notes, write a letter to the referring urologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Frederick Naylor, 74, retired farmer.\nScanned 27 August 2026.\n\nReason for scan:\nWhole-body bone scintigraphy for staging of newly diagnosed prostate cancer with a high PSA.\n\nTechnique:\nTechnetium-99m methylene diphosphonate, 600 MBq administered intravenously at 09.20.\nWhole-body anterior and posterior images acquired at three hours.\nAdditional SPECT of the lumbar spine and pelvis performed.\nPatient hydrated and voided before imaging.\n\nImaging findings:\nMultiple focal areas of increased tracer uptake involving the thoracolumbar spine at T8, T11, L2 and L4; the right and left iliac bones; the sacrum; and the right proximal femur.\nDistribution is multifocal, asymmetric and predominantly axial — typical of skeletal metastatic disease.\nThe right proximal femoral lesion is intense and involves the intertrochanteric region.\nNo linear uptake pattern to suggest traumatic fracture.\nDegenerative uptake noted at both knees and the right shoulder, of no significance.\nRenal outline and bladder visualised normally; no superscan pattern.\n\nRelevant history:\nProstate adenocarcinoma, Gleason 9, diagnosed 11 August 2026.\nPSA 186 micrograms/L.\nPresented with three months of thoracolumbar back pain, worse at night.\nNo previous malignancy.\nNo neurological symptoms; no leg weakness, no sensory level, no bladder or bowel disturbance today.\n\nMedication:\nTamsulosin 400 micrograms daily.\n\nAllergies and contrast:\nNo reaction to the radiopharmaceutical injection.\nNo iodinated contrast used.\n\nRecommendation and plan:\nScintigraphic appearances favour widespread skeletal metastatic disease.\nCorrelation with PSA and with the urology multidisciplinary team is recommended.\nConsideration of bone-targeted therapy is advised.\nThe right proximal femoral lesion should be reviewed with plain radiography or CT for fracture risk, as prophylactic fixation may be needed before it becomes a pathological fracture.\nGiven the extent of vertebral involvement, the patient has been given written spinal cord compression warning advice and told to present immediately if leg weakness, numbness or urinary difficulty develops.\n",
      "recipient": "Mr Gareth Pryce, Consultant Urologist, Department of Urology",
      "letterType": "advice",
      "taskInstruction": "Write a letter reporting findings of a nuclear medicine bone scan demonstrating probable skeletal metastases and advising on follow-up."
    },
    "guidanceNote": "Report the metastatic pattern in plain terms and flag the femoral lesion for fracture-risk review, as this directly affects the patient's management."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-cerebral-aneurysm-on-mr-angiography-of-the-brain",
    "title": "Radiography — Cerebral aneurysm on MR angiography of the brain",
    "prompt": "Using the case notes, write a letter to the neurosurgical service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Carol Mensah, 52, school catering manager.\nScanned 26 August 2026.\n\nReason for scan:\nMRI and MR angiography of the brain, requested for investigation of recurrent migraine with a family history of subarachnoid haemorrhage.\n\nTechnique:\n1.5 Tesla. Axial T1, T2, FLAIR and diffusion-weighted sequences.\nTime-of-flight MR angiography of the circle of Willis.\nPost-gadolinium T1 sequences performed.\nNo motion artefact; study of diagnostic quality throughout.\n\nImaging findings:\nIncidental 6 mm saccular aneurysm arising from the left middle cerebral artery bifurcation.\nNeck approximately 3 mm; the dome points superolaterally.\nNo daughter sac and no surrounding oedema.\nNo acute or old subarachnoid haemorrhage.\nNo infarct, acute or chronic.\nNo mass lesion, no hydrocephalus, no demyelination.\nA few scattered T2 hyperintensities in the deep white matter, in keeping with age and vascular risk factors.\nThe remainder of the intracranial vessels is unremarkable, with no further aneurysm and no stenosis.\n\nRelevant history:\nSister had a ruptured aneurysm at 49 and survived with a deficit.\nA maternal aunt died of a brain haemorrhage in her fifties.\nCurrent smoker, twenty a day for thirty years.\nHypertension, diagnosed 2020.\nMigraine with aura since her twenties, unchanged in character.\n\nMedication:\nLosartan 50 mg daily.\nSumatriptan 50 mg as required, used about twice monthly.\n\nAllergies and contrast:\nTolerated gadolinium contrast without reaction.\nNo known allergies. eGFR 88.\n\nCommunication:\nShe has been told a scan abnormality was found and that a specialist will discuss it. Detailed discussion deferred to neurosurgery, which is the appropriate service.\nShe was tearful and asked whether she would have the same outcome as her sister.\n\nRecommendation and plan:\nUnruptured intracranial aneurysm with a first-degree family history of rupture. Refer to neurosurgery for assessment of treatment versus surveillance.\nBlood pressure control and smoking cessation are the two modifiable risk factors and both should be addressed now.\nWritten safety-net advice given for thunderclap headache, with instruction to call emergency services rather than attend a surgery.\n",
      "recipient": "Mr Oliver Hargreaves, Consultant Neurosurgeon, Regional Neurosciences Centre",
      "letterType": "referral",
      "taskInstruction": "Write a letter referring the patient for neurosurgical assessment of an unruptured intracranial aneurysm detected on MR angiography."
    },
    "guidanceNote": "Make clear the aneurysm is unruptured but warrants specialist assessment; the family history, hypertension and smoking are relevant risk factors that justify the referral."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-incidental-adrenal-mass-on-ct-urogram",
    "title": "Radiography — Incidental adrenal mass on CT urogram",
    "prompt": "Using the case notes, write a letter to the requesting urologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Geraldine Apt, 63, retired teacher.\nScanned 25 August 2026.\n\nReason for scan:\nCT urogram for investigation of painless visible haematuria, referred from the haematuria clinic.\n\nTechnique:\nMultiphase CT of the abdomen and pelvis — unenhanced, nephrographic and delayed excretory phases.\nIodinated contrast 100 mL administered intravenously.\nSplit-bolus technique used to limit dose.\n\nImaging findings, urinary tract:\nNo urinary tract tumour identified in the kidneys, ureters or bladder.\nNo calculus.\nNo hydronephrosis.\nBoth kidneys of normal size and enhancement, with no cortical scarring.\nBladder wall smooth and of normal thickness; the study was performed with adequate distension.\nNo pelvic lymphadenopathy.\n\nImaging findings, incidental:\nIncidental 2.8 cm nodule in the left adrenal gland.\nUnenhanced attenuation 4 Hounsfield units, which is below the 10 HU threshold and is consistent with a lipid-rich benign adenoma.\nMargins smooth, shape round, no necrosis and no calcification.\nThe right adrenal gland is normal.\nNo retroperitoneal lymphadenopathy and no other abnormality.\n\nRelevant history:\nType 2 diabetes, well controlled, HbA1c 46 mmol/mol.\nNo symptoms of hormone excess — no episodic sweating, palpitations or headache; no proximal weakness, no easy bruising, no striae.\nNormotensive, 124/76 today.\nNo previous imaging available for comparison.\nNo history of malignancy, which is relevant since the pre-test probability of metastasis is low.\n\nMedication:\nMetformin 1 g twice daily.\nMetformin was withheld on the day of the scan in line with local protocol and may be restarted; renal function was normal.\n\nAllergies and contrast:\nTolerated iodinated contrast without reaction. No known allergies. eGFR 84.\n\nRecommendation and plan:\nThe adrenal lesion has benign imaging features and does not require characterisation by further imaging.\nBiochemical screening is suggested to exclude a functioning tumour — overnight dexamethasone suppression test, plasma metanephrines and, if hypertension develops, an aldosterone to renin ratio.\nRoutine imaging follow-up is not mandated if the biochemistry is normal.\nThe haematuria remains unexplained on imaging; cystoscopy correlation is advised.\n",
      "recipient": "Mr David Okonkwo, Consultant Urologist, Riverside Hospital",
      "letterType": "advice",
      "taskInstruction": "Write a letter advising the requesting clinician of an incidental adrenal lesion identified during a CT urogram and recommending appropriate characterisation."
    },
    "guidanceNote": "Distinguish the negative haematuria result from the separate incidental adrenal finding; specify the imaging features that suggest a benign lesion rather than overstating concern."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-incidental-liver-lesions-on-staging-ct",
    "title": "Radiography — Incidental liver lesions on staging CT",
    "prompt": "Using the case notes, write a letter to the requesting oncologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Patricia Holloway, 67, retired nurse.\nScanned 28 August 2026.\n\nReason for scan:\nStaging CT of the chest, abdomen and pelvis for newly diagnosed colorectal cancer.\n\nTechnique:\nPortal venous phase after 100 mL of iodinated contrast intravenously.\nChest acquired in the same phase.\nSlice thickness 1.25 mm with coronal and sagittal reformats.\n\nImaging findings, primary disease:\nCircumferential wall thickening of the sigmoid colon over 5 cm, corresponding to the known tumour.\nNo pericolic abscess and no perforation.\nNo definite pericolic nodes above 8 mm.\n\nImaging findings, liver:\nTwo indeterminate hypodense liver lesions.\nSegment 7 — 12 mm, ill-defined margins, attenuation 38 Hounsfield units.\nSegment 4a — 8 mm, similar characteristics.\nBoth are too small to characterise reliably on CT.\nNeither shows convincing features of metastasis, but metastasis cannot be excluded on this study.\nNo other focal liver lesion. Liver otherwise of normal size and contour, with no cirrhotic change.\n\nImaging findings, elsewhere:\nNo lymphadenopathy in the chest, abdomen or pelvis.\nNo lung nodules.\nNo ascites and no peritoneal deposits.\nNo bone lesion.\n\nRelevant history:\nSigmoid adenocarcinoma diagnosed at colonoscopy 14 August 2026, awaiting surgery.\nCEA 6.2 micrograms/L.\nOtherwise well; no weight loss, performance status 0.\nNo previous imaging available for comparison, which is the main limitation here.\n\nMedication:\nRamipril 5 mg daily.\n\nAllergies and contrast:\nMild contrast-related nausea at a previous CT in 2021; no rash, no bronchospasm. This is not a true allergy and no premedication was required.\neGFR normal at 79.\n\nRecommendation and plan:\nThe liver lesions are indeterminate and materially affect treatment planning, since a metastatic diagnosis would change the operative approach.\nContrast-enhanced MRI of the liver with hepatocyte-specific agent is recommended before the multidisciplinary team meeting.\nNo definite metastatic disease is confirmed at this stage and this should be made clear to the patient, who should not be told she has liver metastases on the basis of this scan.\n",
      "recipient": "Dr Rebecca Tan, Consultant Medical Oncologist, Oncology Department",
      "letterType": "advice",
      "taskInstruction": "Write a letter advising the requesting oncologist of indeterminate liver lesions seen on staging CT and recommending MRI characterisation."
    },
    "guidanceNote": "Be precise that the lesions are indeterminate rather than confirmed metastases; recommending the MRI clearly supports the oncologist's treatment planning."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-incidental-pulmonary-nodule-on-ct",
    "title": "Radiography — Incidental pulmonary nodule on CT",
    "prompt": "Using the case notes, write a letter to the referring GP. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Daniel Okoye, 58, male, taxi driver.\nScanned 27 August 2026.\n\nReason for scan:\nCT of the abdomen and pelvis with contrast, requested to investigate a three-month history of right upper quadrant pain.\n\nTechnique:\nPortal venous phase, 90 mL iodinated contrast intravenously.\nThe lower lung fields were included within the field of view, as is unavoidable in an abdominal study.\n\nPrimary findings:\nNo abdominal cause identified for the pain.\nLiver of normal size and attenuation, no focal lesion, no biliary dilatation.\nGallbladder thin-walled with no calculus.\nKidneys, pancreas, spleen and adrenals unremarkable.\nNo lymphadenopathy, no free fluid, no bowel wall thickening.\n\nIncidental finding:\nA 9 mm solid nodule in the right lower lobe, within the included lung bases.\nSmooth margins, homogeneous, no cavitation, no calcification.\nNo pleural contact and no associated lymphadenopathy within the field of view.\nThe upper lungs were not imaged, so further nodules cannot be excluded.\nNo prior imaging is available for comparison, which is the key limitation in assessing stability.\n\nRelevant history:\nEx-smoker, twenty-five pack-years, stopped four years ago.\nNo haemoptysis, no weight loss, no fever, no night sweats.\nNo occupational asbestos exposure reported.\nNo personal or family history of malignancy.\n\nMedication:\nOmeprazole 20 mg daily.\nAtorvastatin 20 mg at night.\n\nAllergies and contrast:\nNone known. Contrast tolerated well with no reaction.\neGFR 91.\n\nCommunication:\nThe patient has been informed that the scan is complete and that the report will go to his GP.\nHe has not yet been told about the nodule; that conversation belongs with the clinician who can also explain the plan, and it should happen promptly rather than be left to a routine appointment.\n\nRadiologist recommendation and plan:\nDedicated low-dose CT of the chest in three months, in line with nodule surveillance guidance for a solid nodule of this size in a person with this risk profile.\nReferral to respiratory services if the nodule grows, if it is found to be one of several, or if symptoms develop.\nPlease arrange the follow-up CT and counsel the patient; the main risk with an incidental nodule is that the follow-up is never booked.\n",
      "recipient": "Dr Helena Marsh, General Practitioner, Riverside Medical Centre",
      "letterType": "referral",
      "taskInstruction": "Inform the GP of an incidental finding requiring follow-up and outline the recommended surveillance pathway."
    },
    "guidanceNote": "The abdominal pain investigation was negative — say so briefly, but the letter's real purpose is the incidental lung nodule and surveillance plan. Don't pad with the normal abdominal organs."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-incidental-thyroid-nodule-on-neck-ct-for-trauma",
    "title": "Radiography — Incidental thyroid nodule on neck CT for trauma",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Thomas Bridges, 44, delivery driver.\nScanned 30 August 2026 at 23.40, following attendance at the emergency department.\n\nReason for scan:\nCT of the cervical spine after a road traffic collision, to exclude bony injury.\nRear-end collision at approximately 40 miles per hour. Restrained driver, airbag deployed.\nMidline cervical tenderness and an inability to rotate 45 degrees each way, so the Canadian C-spine rule required imaging.\n\nTechnique:\nNon-contrast CT of the cervical spine from the skull base to T4, with sagittal and coronal reformats.\nIodinated contrast was in fact not required for the spine study; it had been given for a concurrent CT of the chest and abdomen, which was reported separately and was normal.\n\nImaging findings, cervical spine:\nNo cervical spine fracture at any level.\nAlignment normal, with preserved cervical lordosis.\nNo facet joint diastasis or subluxation.\nPrevertebral soft tissues of normal thickness.\nMild degenerative change at C5/6 with anterior osteophytes, of no acute significance.\nNo craniocervical junction injury.\n\nIncidental finding:\nA 1.6 cm nodule in the right thyroid lobe, well defined, of soft tissue attenuation, without calcification.\nThe left lobe and isthmus are normal.\nNo enlarged cervical lymph nodes.\nTrachea central with no compression or deviation.\nNo retrosternal extension.\n\nRelevant history:\nOtherwise fit and well.\nNo symptoms of thyroid dysfunction — no weight change, no palpitations, no heat or cold intolerance, no hoarseness, no dysphagia.\nNo neck swelling noticed by the patient or his family.\nNo previous head or neck irradiation.\nNo family history of thyroid cancer.\n\nMedication:\nNone regular.\n\nAllergies and contrast:\nTolerated intravenous iodinated contrast without reaction.\nNo known allergies.\n\nRecommendation and plan:\nThe cervical spine is clear for the presenting complaint and the collar may be removed.\nThe incidental thyroid nodule warrants a dedicated thyroid ultrasound to characterise it and assign a U score; CT is not the correct modality for this.\nThyroid function tests are suggested at the same time.\nNo urgent action is required and the patient should be reassured that most such nodules are benign, while still being followed up.\n",
      "recipient": "Dr Anika Sharma, General Practitioner, Meadowbank Health Centre",
      "letterType": "advice",
      "taskInstruction": "Write a letter advising the GP of an incidental thyroid nodule seen on a CT performed for trauma and recommending ultrasound follow-up."
    },
    "guidanceNote": "Keep the negative trauma result brief and focus on the incidental nodule and the recommended ultrasound; avoid alarming language for a common incidental finding."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-lytic-bone-lesion-on-knee-radiograph-requiring-mri",
    "title": "Radiography — Lytic bone lesion on knee radiograph requiring MRI",
    "prompt": "Using the case notes, write a letter to the orthopaedic oncology service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Daniel Ashford, 17, sixth-form student.\nImaged 31 August 2026.\n\nReason for examination:\nPersistent left knee pain for six weeks, worse at night and waking him from sleep.\nMild swelling above the knee noticed by his mother two weeks ago.\nReferred by the GP for plain radiographs.\n\nTechnique:\nAnteroposterior and lateral radiographs of the left knee, including the distal femur.\n\nImaging findings:\nAn ill-defined lytic lesion in the distal femoral metaphysis, approximately 6 cm in length.\nPoorly defined zone of transition between the lesion and normal bone.\nAggressive periosteal reaction with a lamellated appearance and early Codman triangle formation medially.\nCortical breach medially with an associated soft tissue component.\nNo pathological fracture.\nThe growth plate is not clearly crossed on these views.\nThe knee joint itself is normal, with no effusion.\nThe features are aggressive and are concerning for a primary bone tumour.\n\nRelevant history:\nPreviously fit and active; plays rugby.\nNo trauma to account for the findings.\nRecent unintentional weight loss reported by his parents, approximately 4 kg over two months.\nNo fever and no night sweats.\nNo family history of malignancy.\nPain has been present at rest and at night from the outset, which is the feature that distinguishes it from a sports injury.\n\nMedication:\nNone.\n\nAllergies and contrast:\nNo known allergies. No prior contrast studies.\n\nCommunication:\nThe images were reviewed with the duty radiologist immediately and the referring GP was telephoned the same day at 16.15.\nThe patient and his parents have been told that the X-ray shows an abnormality in the bone that needs urgent specialist assessment. No diagnosis has been given, as that is for the sarcoma team.\n\nRecommendation and plan:\nAppearances are suspicious for a primary bone malignancy, most likely osteosarcoma at this age and site.\nUrgent referral to the regional sarcoma service for MRI of the whole femur and further staging, including CT of the chest.\nBiopsy must be performed at the specialist centre and not locally, as an ill-placed biopsy tract can compromise limb-sparing surgery.\nAdvised to avoid contact sport and heavy loading in the meantime because of fracture risk.\n",
      "recipient": "Mr Andrew Fielding, Consultant Orthopaedic Oncologist, Regional Sarcoma Unit",
      "letterType": "referral",
      "taskInstruction": "Write a letter referring the patient for specialist assessment of an aggressive-looking lytic bone lesion identified on plain radiograph."
    },
    "guidanceNote": "Describe the worrying radiographic features and the urgency clearly, and include the specific caution that biopsy should occur at the specialist centre, as this affects management."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-paediatric-toddler-s-fracture-on-tibial-radiograph",
    "title": "Radiography — Paediatric toddler's fracture on tibial radiograph",
    "prompt": "Using the case notes, write a letter to the paediatric emergency consultant. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nLucas Brennan, 2 years 4 months.\nImaged 29 August 2026, accompanied by his mother throughout.\n\nReason for examination:\nRefusal to weight-bear on the left leg since the previous evening.\nA low fall while running in the garden, witnessed by his mother.\nNo mechanism of concern reported and the account has been consistent between the triage nurse, the doctor and the radiographer.\n\nTechnique:\nAnteroposterior and lateral radiographs of the left tibia and fibula, including the knee and ankle.\nImmobilisation achieved with parental assistance; no sedation required.\nGonad shielding applied and exposure factors reduced for age.\nTwo exposures only; no repeat required.\n\nImaging findings:\nA subtle undisplaced spiral fracture of the distal tibial shaft, visible on the lateral view and only faintly on the anteroposterior — the typical appearance of a toddler's fracture.\nThe fibula is intact.\nNo periosteal reaction, so there is no radiological evidence of an older or healing injury.\nNo metaphyseal corner fracture and no bucket-handle lesion.\nBone density and modelling are normal, with no features to suggest osteogenesis imperfecta or rickets.\nKnee and ankle joints normal.\n\nRelevant history:\nPreviously well, normal development, walking since thirteen months.\nFully immunised.\nNo prior fractures and no previous attendances.\nNo safeguarding concerns known to the department.\n\nMedication:\nNone.\n\nAllergies and contrast:\nNo known allergies. No contrast used.\n\nRadiation dose:\nDose length product recorded and within the local diagnostic reference level for this age group.\n\nRecommendation and plan:\nFindings are consistent with a typical toddler's fracture, which is a common and benign injury of this age group and mechanism.\nAbove-knee immobilisation recommended, with routine paediatric orthopaedic follow-up in one week.\nThere are no imaging features suggestive of non-accidental injury, and the mechanism described fits the fracture pattern.\nThat said, imaging alone cannot exclude a safeguarding concern, and clinical correlation remains advised in the usual way.\nParents have been given advice on cast care and on the expected three to four weeks of immobilisation.\n",
      "recipient": "Dr Sarah Whitlock, Consultant in Paediatric Emergency Medicine, Children's Unit",
      "letterType": "advice",
      "taskInstruction": "Write a letter reporting a subtle spiral tibial fracture in a young child and advising on imaging interpretation and follow-up."
    },
    "guidanceNote": "Toddler's fractures are easily overlooked, so describe the finding precisely; note the absence of features suggesting older or non-accidental injury without making clinical safeguarding judgements beyond your remit."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-renal-calculus-on-ct-kub-for-acute-flank-pain",
    "title": "Radiography — Renal calculus on CT KUB for acute flank pain",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Stephen Vasquez, 38, chef.\nScanned 1 September 2026 at 03.20 following emergency department attendance.\n\nReason for scan:\nCT of the kidneys, ureters and bladder for acute right loin-to-groin pain with microscopic haematuria.\nPain began suddenly at 23.00, colicky, with vomiting.\n\nTechnique:\nLow-dose non-contrast CT KUB protocol, from the upper poles of the kidneys to the pubic symphysis.\nNo intravenous or oral contrast, as is standard for this indication.\nDose length product within the local diagnostic reference level.\n\nImaging findings:\nA 5 mm calculus at the right vesicoureteric junction.\nMild proximal ureteric dilatation to 7 mm and minimal perinephric fat stranding on the right, consistent with acute obstruction.\nNo hydronephrosis beyond mild.\nNo other calculus in either kidney or ureter.\nKidneys of normal size and position with no scarring or mass.\nBladder unremarkable; no bladder calculus.\nNo appendicitis, no diverticulitis, no aortic aneurysm — the main alternative diagnoses in this presentation are excluded.\nNo free fluid.\n\nRelevant history:\nA previous single episode of renal colic three years ago; the stone passed spontaneously and no metabolic workup was done at the time.\nNo fever and no rigors today.\nNo known renal impairment.\nWorks long shifts in a hot kitchen with, by his own account, a low fluid intake.\n\nObservations at the time of scanning:\nTemperature 36.8 degrees Celsius, pulse 88, blood pressure 136/82.\nWhite cell count 9.8, C-reactive protein 6, creatinine 92, eGFR above 90.\nUrine dipstick — blood 3+, nitrites negative, leucocytes negative.\n\nMedication:\nNone regular. Diclofenac 75 mg given in the department with good effect.\n\nAllergies and contrast:\nTolerated intravenous access. No contrast used for the KUB protocol.\nNo known drug allergies.\n\nRecommendation and plan:\nA 5 mm distal stone is likely to pass spontaneously; the great majority of stones of this size and position do.\nDischarge with oral analgesia, advice to increase fluid intake substantially given his working conditions, and a urine strainer.\nTo return immediately if fever, rigors or uncontrolled pain develop, as infection behind an obstructing stone is a urological emergency.\nGP follow-up and consideration of metabolic review are advised, as this is a second episode.\n",
      "recipient": "Dr Louise Bennett, General Practitioner, Canalside Surgery",
      "letterType": "discharge",
      "taskInstruction": "Write a letter informing the GP of an obstructing renal calculus found on CT and the patient's discharge plan from imaging."
    },
    "guidanceNote": "Summarise the stone size and position and the conservative plan; safety-netting advice (fever, uncontrolled pain) is relevant for continuity of care."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-scaphoid-fracture-missed-on-initial-wrist-film",
    "title": "Radiography — Scaphoid fracture missed on initial wrist film",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMiss Amelia Dawson, 19, student and keen netball player.\nImaged today, 31 August 2026.\n\nReason for examination:\nFall onto the outstretched right hand twelve days ago while playing netball.\nPersistent tenderness in the anatomical snuffbox and pain on axial loading of the thumb.\nReferred back from the fracture clinic for repeat imaging.\n\nPrevious imaging:\nInitial wrist radiographs on the day of injury, 19 August 2026, were reported as normal.\nOn review today, those films were technically adequate but did not include dedicated scaphoid views, and no fracture is visible on them even in retrospect. This is the expected behaviour of an undisplaced scaphoid fracture, which is radiographically occult in up to a third of cases in the first two weeks.\n\nTechnique today:\nDedicated scaphoid series — posteroanterior, lateral, and two oblique views with ulnar deviation.\n\nImaging findings:\nAn undisplaced fracture through the scaphoid waist, now visible on the ulnar deviation posteroanterior and both oblique views.\nNo displacement and no angulation.\nNo humpback deformity on the lateral view.\nNo associated distal radius fracture.\nScapholunate interval normal at 2 mm; no carpal instability.\nNo evidence of avascular necrosis at this stage, though it is too early to assess.\n\nRelevant history:\nRight-hand dominant.\nNo other injuries from the fall.\nNon-smoker — relevant, as smoking impairs scaphoid union.\nNo previous wrist injury.\n\nMedication:\nCombined oral contraceptive pill only.\n\nAllergies and contrast:\nNo known drug allergies. No contrast used.\n\nCommunication:\nThe patient has been told that the repeat films show a fracture that was not visible initially, and that this is a known limitation of early imaging rather than an error.\n\nRecommendation and plan:\nConfirmed undisplaced scaphoid waist fracture.\nImmobilise in a below-elbow cast including the thumb, and refer to the orthopaedic fracture clinic.\nWrist support and analgesia in the interim.\nCounselled on the risk of non-union and avascular necrosis if the fracture is not immobilised properly, given the retrograde blood supply of the scaphoid, and on the likely six to twelve weeks out of netball.\n",
      "recipient": "Dr Priya Nair, General Practitioner, Eastgate Surgery",
      "letterType": "referral",
      "taskInstruction": "Write a letter recommending orthopaedic review after delayed radiographs confirmed a scaphoid fracture not visible on the first attendance."
    },
    "guidanceNote": "Explain clearly that the fracture was occult initially and is now confirmed; an honest account of the delayed diagnosis helps the GP and patient understand the follow-up."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-suspended-mammogram-refer-to-breast-clinic",
    "title": "Radiography — Suspended mammogram, refer to breast clinic",
    "prompt": "Using the case notes, write a letter to the breast clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Priya Sharma, 52.\nAttended 28 August 2026.\n\nAttendance:\nRoutine breast screening mammogram, both breasts.\nFirst invitation attended; she did not attend the invitation in 2023.\n\nTechnique and technical note:\nCranio-caudal and mediolateral oblique views attempted on both sides.\nThe mediolateral oblique view of the left breast was suspended — the patient could not tolerate compression because of severe pain and a recent left shoulder injury sustained in June.\nCranio-caudal views were adequate on both sides.\nThe right mediolateral oblique was completed without difficulty.\nThe incomplete left view is a limitation of this study and is stated here so that it is not overlooked.\n\nFindings:\nLeft breast — a 14 mm spiculated mass in the upper outer quadrant, with associated fine pleomorphic microcalcification extending approximately 8 mm beyond the mass.\nAppearances are highly suspicious.\nNo skin thickening or nipple retraction seen on the available views.\nRight breast — no abnormality. Breast density category B.\n\nClinical assessment at the appointment:\nThe patient reports she had not noticed a lump.\nNo nipple discharge and no skin change observed at the appointment.\nThe left axilla was not formally examined here.\n\nRelevant history:\nMother had breast cancer at 61.\nNo prior breast imaging of any kind.\nNot on hormone replacement therapy.\nTwo children, first at 29, both breastfed.\nNo previous breast surgery or biopsy.\n\nMedication:\nLevothyroxine 75 micrograms daily.\n\nAllergies:\nPenicillin — rash.\n\nCommunication:\nThe patient has been informed that further assessment is needed. She was anxious and asked many questions, including whether this is cancer; she was told that the mammogram cannot answer that and that the assessment clinic will.\nWritten information and a contact number for the screening office given.\nShe asked to bring her daughter to the next appointment and was encouraged to do so.\n\nPlan:\nUrgent triple assessment — clinical examination, ultrasound of the breast and axilla, and image-guided biopsy.\nRepeat left mediolateral oblique or an MRI should be considered at that visit if compression remains intolerable, so that the left breast is fully assessed.\n",
      "recipient": "The Consultant Radiologist, Breast Assessment Clinic, St Aidan's Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for triple assessment following a suspicious screening mammogram and abandoned views."
    },
    "guidanceNote": "Two things drive this referral: the suspicious left-breast findings AND the suspended view that needs completing. Mention the shoulder injury because it affects how the clinic should image her; the thyroid history is not relevant."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-suspicious-breast-lesion-on-screening-recall-ultrasound",
    "title": "Radiography — Suspicious breast lesion on screening recall ultrasound",
    "prompt": "Using the case notes, write a letter to the breast clinic consultant. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Joan Pemberton, 58, retired civil servant.\nAttended the assessment clinic 27 August 2026.\n\nReason for scan:\nRecall from routine breast screening for an asymmetric density in the right breast on mammography performed 6 August 2026.\n\nTechnique:\nTargeted high-frequency ultrasound of the right breast and both axillae.\nSupplementary magnification and spot compression mammographic views were obtained before the ultrasound.\n\nImaging findings, right breast:\nA 14 mm irregular hypoechoic mass at the 10 o'clock position, 4 cm from the nipple.\nMargins spiculated and non-circumscribed.\nTaller than wide in orientation.\nPosterior acoustic shadowing.\nInternal vascularity on colour Doppler.\nNo surrounding ductal dilatation.\nAppearances correspond to the mammographic asymmetry.\n\nImaging findings, axilla:\nOne indeterminate right axillary node, 11 mm, with cortical thickening of 4 mm and partial loss of the fatty hilum.\nLeft axilla normal.\n\nImaging findings, left breast:\nNo focal abnormality on the screening mammogram; ultrasound not performed on that side.\n\nRelevant history:\nPostmenopausal since 52.\nMother had breast cancer at 70.\nNo prior breast surgery and no previous biopsy.\nNo hormone replacement therapy.\nTwo children, first at 26.\nNo palpable lump noticed by the patient.\n\nMedication:\nBisoprolol 2.5 mg daily.\n\nAllergies and contrast:\nPenicillin allergy — rash. No contrast used.\n\nCommunication:\nThe patient was seen by the clinician immediately after the scan, as is the protocol in this clinic.\nShe has been told that the findings are suspicious and that a biopsy is needed today; she consented and attended with her husband.\n\nRecommendation and plan:\nImaging features are suspicious, graded U4 to U5.\nUrgent clinical examination and image-guided core biopsy of the breast lesion, with a marker clip placed.\nSeparate ultrasound-guided sampling of the right axillary node, as nodal status changes the treatment pathway.\nResults to the multidisciplinary team meeting on 3 September, with the patient booked for a results appointment the following week.\n",
      "recipient": "Miss Catherine Lowe, Consultant Breast Surgeon, Park Lane Breast Unit",
      "letterType": "referral",
      "taskInstruction": "Write a letter referring the patient for triple assessment after a recall ultrasound demonstrated a suspicious solid breast lesion."
    },
    "guidanceNote": "Convey the suspicious nature of the findings and the need for prompt triple assessment without offering a definitive diagnosis, which depends on histology."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "RADIOGRAPHY",
    "slug": "wri-radiography-vertebral-compression-fracture-on-lumbar-spine-film",
    "title": "Radiography — Vertebral compression fracture on lumbar spine film",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Edith Lawson, 78, retired seamstress.\nImaged 30 August 2026.\n\nReason for examination:\nAcute lower back pain, sudden onset two days ago while lifting a shopping bag from the car boot.\nNo fall and no other trauma.\nPain is severe on movement and eased by lying flat.\n\nTechnique:\nAnteroposterior and lateral radiographs of the lumbar spine.\nPositioning limited by pain; the lateral view was obtained with the patient standing rather than lying.\n\nImaging findings:\nA wedge compression fracture of the L1 vertebral body with approximately 30 per cent loss of anterior height.\nThe posterior vertebral body wall is intact, with no retropulsion into the canal.\nGeneralised reduced bone density with prominent vertical trabeculae, in keeping with osteoporosis.\nNo destructive bony lesion, no pedicle erosion and no paravertebral soft tissue mass — nothing to suggest malignancy or infection.\nMild wedging at T12 of uncertain age; no previous imaging is available for comparison.\nDegenerative disc height loss at L4/5 and L5/S1.\n\nRelevant history:\nPostmenopausal since age 50, no hormone replacement therapy taken.\nLong-term oral corticosteroids for polymyalgia rheumatica, five years.\nPrevious wrist fracture in 2022 after a low fall, which was not investigated for bone health.\nMaternal history of hip fracture.\nHeight loss of 5 cm reported since her sixties.\nNo fever, no weight loss, no night pain, no neurological symptoms — no leg weakness, no sensory change, no bladder or bowel disturbance.\n\nMedication:\nPrednisolone 5 mg daily.\nCalcium and vitamin D supplement.\nNo bisphosphonate.\n\nAllergies and contrast:\nNo known allergies. No contrast used.\n\nRecommendation and plan:\nFindings are those of an osteoporotic fragility fracture, and this is now her second fragility fracture.\nDEXA scan and formal fracture risk assessment recommended.\nReview of bone-protective therapy is advised; she is on long-term steroids with two fragility fractures and no bisphosphonate, which merits attention regardless of the DEXA result.\nConservative pain management with early mobilisation, as prolonged bed rest worsens bone loss.\nMRI would be indicated only if neurological signs develop or if malignancy is suspected clinically.\n",
      "recipient": "Dr Malcolm Reeves, General Practitioner, Hillcrest Practice",
      "letterType": "advice",
      "taskInstruction": "Write a letter reporting an osteoporotic vertebral compression fracture and recommending bone health assessment."
    },
    "guidanceNote": "Highlight the fragility-fracture interpretation and the steroid risk factor; state clearly that no malignant features were seen, as this reassures the GP."
  }
];
