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
      "caseNotes": "Patient: Mr Raymond Cole, 71 years.\nReason for scan: Routine NHS AAA screening ultrasound (first invitation).\nImaging findings: Infrarenal abdominal aorta measured at maximum diameter 5.7 cm; no free fluid; iliac arteries within normal limits.\nHistory: 45 pack-year smoking history, hypertension, hyperlipidaemia. No abdominal or back pain reported.\nMedications: Amlodipine 10 mg daily, atorvastatin 40 mg daily, aspirin 75 mg daily.\nAllergies/contrast: No known allergies; no contrast used (ultrasound only).\nRecommendation/plan: Aneurysm exceeds 5.5 cm threshold; urgent referral to vascular surgery advised. Patient counselled to seek emergency care for sudden severe abdominal/back pain. Smoking cessation reinforced.",
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
      "caseNotes": "Patient: Miss Hannah Okeke, 22 years.\nReason for scan: Right iliac fossa pain for 18 hours, low-grade fever, anorexia.\nImaging findings: Blind-ending, non-compressible tubular structure measuring 9 mm diameter in the right iliac fossa with surrounding fat stranding and a small amount of free fluid; consistent with acute appendicitis.\nHistory: Last menstrual period two weeks ago; pregnancy test negative. No prior abdominal surgery.\nMedications: None.\nAllergies/contrast: No known allergies; no contrast used (ultrasound).\nRecommendation/plan: Imaging supports acute appendicitis. Urgent surgical assessment recommended. Patient kept nil by mouth; analgesia given.",
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
      "caseNotes": "Patient: Mr Frederick Naylor, 74 years.\nReason for scan: Whole-body bone scintigraphy (Tc-99m MDP) for staging of newly diagnosed prostate cancer with a high PSA.\nImaging findings: Multiple focal areas of increased tracer uptake in the thoracolumbar spine, pelvis and right proximal femur, in a distribution typical of skeletal metastatic disease; no fracture in keeping with trauma.\nHistory: Prostate adenocarcinoma, Gleason 9; presented with back pain. No prior cancer.\nMedications: Tamsulosin 400 micrograms daily.\nAllergies/contrast: No reaction to radiopharmaceutical injection; no iodinated contrast used.\nRecommendation/plan: Scintigraphic appearances favour widespread bone metastases. Recommend correlation with PSA and consideration of bone-targeted therapy; review of femoral lesion for fracture risk advised.",
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
      "caseNotes": "Patient: Mrs Carol Mensah, 52 years.\nReason for scan: MRI/MRA brain for investigation of recurrent migraine and a family history of subarachnoid haemorrhage.\nImaging findings: Incidental 6 mm saccular aneurysm arising from the left middle cerebral artery bifurcation; no acute haemorrhage, infarct or mass lesion; remainder of intracranial vessels unremarkable.\nHistory: Sister had a ruptured aneurysm aged 49; patient is a current smoker; hypertension.\nMedications: Losartan 50 mg daily, sumatriptan as required.\nAllergies/contrast: Tolerated gadolinium contrast; no known allergies.\nRecommendation/plan: Unruptured aneurysm with relevant family history. Refer to neurosurgery for assessment of treatment versus surveillance. Advise blood pressure control and smoking cessation; safety-net for thunderclap headache.",
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
      "caseNotes": "Patient: Mrs Geraldine Apt, 63 years.\nReason for scan: CT urogram for investigation of painless visible haematuria.\nImaging findings: No urinary tract tumour or stone identified. Incidental 2.8 cm left adrenal nodule; low unenhanced attenuation (4 HU) consistent with a benign adenoma.\nHistory: Type 2 diabetes, well controlled. No symptoms of hormone excess. Normotensive.\nMedications: Metformin 1 g twice daily.\nAllergies/contrast: Tolerated iodinated contrast without reaction; no known allergies.\nRecommendation/plan: Adrenal lesion has benign imaging features. Suggest biochemical screening to exclude functional tumour; routine imaging follow-up not mandated if biochemistry normal. Haematuria otherwise unexplained on imaging.",
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
      "caseNotes": "Patient: Mrs Patricia Holloway, 67 years.\nReason for scan: Staging CT chest, abdomen and pelvis for newly diagnosed colorectal cancer.\nImaging findings: Two indeterminate hypodense liver lesions (12 mm and 8 mm) too small to characterise on CT; no convincing features of metastasis but cannot be excluded; no lymphadenopathy or lung nodules.\nHistory: Recently diagnosed sigmoid adenocarcinoma awaiting surgery; otherwise well.\nMedications: Ramipril 5 mg daily.\nAllergies/contrast: Mild contrast-related nausea previously; no true allergy. eGFR normal.\nRecommendation/plan: Liver lesions are indeterminate and require contrast-enhanced MRI liver for characterisation before treatment planning. No definite metastatic disease confirmed at this stage.",
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
      "caseNotes": "Patient: Mr Daniel Okoye, 58, male.\nReason for scan: CT abdomen/pelvis with contrast, requested to investigate 3-month history of right upper quadrant pain.\nPrimary finding: No abdominal cause identified for pain; liver, kidneys, pancreas unremarkable.\nIncidental finding: Lower lung fields included on scan — 9 mm solid nodule, right lower lobe. Smooth margins. No cavitation. No prior imaging available for comparison.\nRelevant history: Ex-smoker, 25 pack-years, stopped 4 years ago. No haemoptysis, weight loss, or fever.\nMeds: Omeprazole 20 mg daily; atorvastatin 20 mg nocte.\nAllergies: Nil known. Contrast tolerated well, no reaction.\nRadiologist recommendation: Dedicated low-dose CT chest in 3 months per nodule surveillance guidance; refer to respiratory if growth or symptoms develop.\nPatient informed scan complete; not yet told of nodule.\nPlan: GP to arrange follow-up CT chest and counsel patient.",
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
      "caseNotes": "Patient: Mr Thomas Bridges, 44 years.\nReason for scan: CT cervical spine after a road traffic collision to exclude bony injury.\nImaging findings: No cervical spine fracture. Incidental 1.6 cm nodule in the right thyroid lobe; no enlarged cervical lymph nodes; trachea central.\nHistory: Otherwise fit; no symptoms of thyroid dysfunction; no neck swelling noticed by patient.\nMedications: None regular.\nAllergies/contrast: Tolerated IV iodinated contrast; no known allergies.\nRecommendation/plan: Cervical spine clear for the presenting complaint. Incidental thyroid nodule warrants dedicated thyroid ultrasound to characterise it. Suggest thyroid function tests. No urgent action required.",
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
      "caseNotes": "Patient: Mr Daniel Ashford, 17 years.\nReason for scan: Persistent left knee pain for six weeks, worse at night; mild swelling.\nImaging findings: Plain radiographs show an ill-defined lytic lesion in the distal femoral metaphysis with periosteal reaction and a poorly defined zone of transition; features are aggressive and concerning for a primary bone tumour.\nHistory: Previously fit and active; no trauma; recent unintentional weight loss reported by parents.\nMedications: None.\nAllergies/contrast: No known allergies; no prior contrast studies.\nRecommendation/plan: Appearances are suspicious for a primary bone malignancy. Urgent referral to the sarcoma service for MRI and further staging; avoid biopsy outside the specialist centre.",
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
      "caseNotes": "Patient: Lucas Brennan, 2 years.\nReason for scan: Refusal to weight-bear on left leg after a low fall while running; no witnessed injury mechanism of concern.\nImaging findings: Subtle undisplaced spiral fracture of the distal tibial shaft (toddler's fracture); fibula intact; no periosteal reaction to suggest older injury.\nHistory: Previously well, normal development, fully immunised. No prior fractures. Mother present throughout.\nMedications: None.\nAllergies/contrast: No known allergies; no contrast used.\nRecommendation/plan: Findings consistent with a typical toddler's fracture. Recommend above-knee immobilisation and routine paediatric orthopaedic follow-up. No imaging features suggestive of non-accidental injury, but clinical correlation advised.",
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
      "caseNotes": "Patient: Mr Stephen Vasquez, 38 years.\nReason for scan: CT KUB for acute right loin-to-groin pain and microscopic haematuria.\nImaging findings: 5 mm calculus at the right vesicoureteric junction causing mild proximal ureteric dilatation and minimal perinephric stranding; no other stones; normal-sized kidneys.\nHistory: Previous single episode of renal colic three years ago, passed spontaneously. No fever.\nMedications: None regular; given diclofenac in the department.\nAllergies/contrast: Tolerated IV access; no contrast used for KUB protocol. No known drug allergies.\nRecommendation/plan: Small distal stone likely to pass spontaneously. Discharge with analgesia and advice to increase fluids; return if fever or uncontrolled pain. GP follow-up and consideration of metabolic review advised.",
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
      "caseNotes": "Patient: Miss Amelia Dawson, 19 years.\nReason for scan: Fall onto outstretched right hand 12 days ago; persistent anatomical snuffbox tenderness.\nImaging findings: Initial wrist radiographs (day of injury) reported as normal. Repeat scaphoid-series radiographs today show an undisplaced fracture through the scaphoid waist.\nHistory: Right-hand dominant, keen netball player. No other injuries.\nMedications: Combined oral contraceptive pill only.\nAllergies/contrast: No known drug allergies; no contrast used.\nRecommendation/plan: Confirmed scaphoid waist fracture; immobilise and refer to orthopaedic fracture clinic. Advise wrist support and analgesia in interim. Counsel on non-union risk if untreated.",
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
      "caseNotes": "Patient: Mrs Priya Sharma, 52, female.\nAttendance: Routine NHS breast screening mammogram, both breasts.\nFindings: Left breast — 14 mm spiculated mass, upper outer quadrant, with associated fine pleomorphic microcalcification. Highly suspicious. Right breast — no abnormality.\nTechnical note: Lateral oblique view of left breast suspended; patient could not tolerate compression due to severe pain and a recent left shoulder injury. Cranio-caudal views adequate.\nPalpation: Patient reports she had not noticed a lump; no nipple discharge or skin change observed at appointment.\nHistory: Mother had breast cancer aged 61. No prior breast imaging. Not on HRT.\nMeds: Levothyroxine 75 mcg daily.\nAllergies: Penicillin (rash).\nPatient informed further assessment needed; anxious, asked many questions.\nPlan: Urgent triple assessment — clinical exam, ultrasound +/- repeat/MRI as tolerated, and biopsy.",
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
      "caseNotes": "Patient: Mrs Joan Pemberton, 58 years.\nReason for scan: Recall from routine breast screening for an asymmetric density in the right breast on mammography.\nImaging findings: Targeted ultrasound shows a 14 mm irregular hypoechoic mass at the right 10 o'clock position with posterior shadowing; one indeterminate right axillary node noted.\nHistory: Postmenopausal; mother had breast cancer aged 70. No prior breast surgery. No hormone replacement therapy.\nMedications: Bisoprolol 2.5 mg daily.\nAllergies/contrast: Penicillin allergy (rash). No contrast used.\nRecommendation/plan: Imaging features are suspicious (likely U4/U5). Refer urgently for clinical examination and image-guided core biopsy of the lesion and axillary node.",
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
      "caseNotes": "Patient: Mrs Edith Lawson, 78 years.\nReason for scan: Acute lower back pain after lifting a shopping bag; no trauma.\nImaging findings: Plain radiographs show a wedge compression fracture of the L1 vertebral body with approximately 30 percent anterior height loss; generalised reduced bone density; no destructive bony lesion to suggest malignancy.\nHistory: Postmenopausal since age 50; long-term oral corticosteroids for polymyalgia rheumatica; previous wrist fracture.\nMedications: Prednisolone 5 mg daily, calcium/vitamin D supplement.\nAllergies/contrast: No known allergies; no contrast used.\nRecommendation/plan: Findings suggest an osteoporotic fragility fracture. Recommend DEXA scan, fracture risk assessment and review of bone-protective therapy. Conservative pain management advised.",
      "recipient": "Dr Malcolm Reeves, General Practitioner, Hillcrest Practice",
      "letterType": "advice",
      "taskInstruction": "Write a letter reporting an osteoporotic vertebral compression fracture and recommending bone health assessment."
    },
    "guidanceNote": "Highlight the fragility-fracture interpretation and the steroid risk factor; state clearly that no malignant features were seen, as this reassures the GP."
  }
];
