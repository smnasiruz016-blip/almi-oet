import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Charcot foot suspected, urgent orthopaedic referral",
    prompt:
      "Using the case notes, write a letter to the orthopaedic foot and ankle consultant. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Mr Daniel Osei, Consultant Orthopaedic Foot & Ankle Surgeon",
      taskInstruction:
        "Refer this patient urgently for assessment of suspected acute Charcot neuroarthropathy.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Raymond Clarke, aged 58. Type 2 diabetes for 19 years, HbA1c 74 mmol/mol. Peripheral neuropathy confirmed; 10g monofilament absent at all sites both feet. Presenting today: right midfoot red, warm, swollen for 12 days; skin intact, no ulcer. Temperature difference 4.2°C warmer than left. No trauma recalled. Pedal pulses palpable bilaterally, ABPI 1.1 right. Foot shape: early loss of medial arch, rocker-bottom developing. X-ray today: no obvious fracture but soft-tissue swelling noted. Medications: metformin, empagliflozin, atorvastatin, ramipril. Allergies: penicillin (rash). Plan today: non-weight-bearing advised, total contact below-knee cast not available locally. Concern: acute Charcot until proven otherwise; needs prompt immobilisation and MRI. Patient continues working as a delivery driver, reluctant to rest.",
    },
    guidanceNote:
      "Charcot is a clinical emergency despite intact skin — convey the urgency and the warm/swollen/neuropathic triad clearly. Don't bury the temperature difference.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Peripheral arterial disease referral to vascular clinic",
    prompt:
      "Using the case notes, write a letter to the vascular surgery clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Helen Burnett, Consultant Vascular Surgeon",
      taskInstruction:
        "Refer this patient for vascular assessment of suspected significant lower-limb arterial disease.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Pauline Hardy, aged 71. Presenting: 6-month history of right calf pain on walking 100 metres, relieved by rest; now occasional rest pain at night, eased by hanging foot out of bed. Smoker, 40 pack-years. Hypertension, hyperlipidaemia. On examination: right foot cool, pale on elevation, dusky on dependency. Pedal pulses absent on right, weak on left. ABPI: right 0.52, left 0.78. Capillary refill 5 seconds right hallux. No tissue loss yet; skin thin and shiny, hair loss noted. Toenails dystrophic. Medications: amlodipine, atorvastatin, aspirin 75mg. Allergies: none known. Podiatry plan: protective footwear advice given, callus debrided, patient advised against self-cutting nails. Smoking cessation discussed. Concern: critical limb ischaemia risk; requires duplex imaging and revascularisation assessment.",
    },
    guidanceNote:
      "Distinguish claudication from rest pain — the night rest pain and ABPI of 0.52 are the load-bearing findings that justify priority. Keep social history brief but include smoking.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Ingrown toenail recurrence, referral for partial nail avulsion",
    prompt:
      "Using the case notes, write a letter to the podiatric surgery service. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Mr Faisal Rahman, Podiatric Surgeon",
      taskInstruction:
        "Refer this patient for partial nail avulsion with phenolisation following recurrent conservative-treatment failure.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Joshua Bennett, aged 23. Right hallux, lateral nail sulcus: recurrent onychocryptosis, third episode in 12 months. Presenting: painful, red, exudate present, hypergranulation tissue at lateral fold. Pain limiting football. Conservative care to date: packing, filing, education on cutting technique — relief temporary, problem recurs. No diabetes, well perfused, pedal pulses strong, neurology intact. Involuted nail shape with deep lateral sulcus. Currently no spreading cellulitis; afebrile. Medications: none. Allergies: none known. Patient keen for definitive treatment. Plan: refer for partial nail avulsion with phenol to lateral border; counselled on day-case local anaesthetic procedure, healing time, and regrowth risk. Advised to keep dressed and elevate meanwhile.",
    },
    guidanceNote:
      "Justify the surgical referral by emphasising the recurrence and failure of conservative measures, not just current symptoms. Confirm good vascular/neuro status since it bears on suitability for phenolisation.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Rheumatoid forefoot deformity, referral to MDT foot clinic",
    prompt:
      "Using the case notes, write a letter to the rheumatology multidisciplinary foot clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Anita Kapoor, Consultant Rheumatologist",
      taskInstruction:
        "Refer this patient for multidisciplinary assessment of progressive rheumatoid forefoot deformity and ulcer risk.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Geraldine Foster, aged 64. Seropositive rheumatoid arthritis for 15 years, on methotrexate and adalimumab. Presenting: increasing forefoot pain, feeling of 'walking on pebbles'. Examination: marked hallux valgus bilaterally, clawing of lesser toes, plantar metatarsal head prominence with thick callus over second and third metatarsal heads right foot. Early pre-ulcerative lesion (macerated callus) beneath right second metatarsal head, skin intact. Bursitis dorsum of toes. Pulses present, neurology grossly intact. Footwear: standard high-street shoes, narrow toe box. Medications: methotrexate, adalimumab, folic acid, omeprazole. Allergies: sulfasalazine (rash). Plan today: callus debrided, padding applied, advised on wider footwear. Concern: deformity progressing, ulcer risk high; needs orthotic provision, bespoke footwear assessment, and possible surgical opinion.",
    },
    guidanceNote:
      "The pre-ulcerative callus and immunosuppression are what raise urgency — make the ulcer-risk link explicit. Note the DMARD therapy as it affects healing and infection risk.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Plantar fasciitis not responding, referral to MSK physiotherapy",
    prompt:
      "Using the case notes, write a letter to the musculoskeletal physiotherapy service. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "The Senior Physiotherapist, MSK Physiotherapy Service",
      taskInstruction:
        "Refer this patient for physiotherapy-led management of persistent plantar heel pain after first-line podiatry care.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Steven Walsh, aged 45. Presenting: 5-month history of right heel pain, worst on first steps in the morning and after sitting, eases with activity then worsens late in day. Office worker, recently started running. Examination: tenderness at medial calcaneal tubercle, pain on dorsiflexion of toes (windlass positive). Tight gastrocnemius, limited ankle dorsiflexion. BMI 31. Normal pulses and sensation; no neurological signs, Tinel's negative at tarsal tunnel. Podiatry care so far: heel cushioning, taping, off-the-shelf orthoses, calf stretches advised — partial improvement only over 10 weeks. Medications: occasional ibuprofen. Allergies: none known. Plan: refer for structured loading programme, gastrocnemius stretching, and gait/running review. Weight management discussed.",
    },
    guidanceNote:
      "A clean, straightforward referral — keep it concise. The positive windlass test and tight calf are the findings physio will act on; the failed first-line care justifies escalation.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Diabetic neuropathic ulcer, transfer to community diabetic foot team",
    prompt:
      "Using the case notes, write a letter to the community diabetic foot team. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "The Lead Podiatrist, Community Diabetic Foot Team",
      taskInstruction:
        "Transfer this patient's ongoing care for offloading and wound management of a neuropathic plantar ulcer.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Abdul Karim, aged 67. Type 2 diabetes 14 years, HbA1c 69 mmol/mol. Moving into the area, transferring care. Presenting: neuropathic ulcer beneath right first metatarsal head, present 7 weeks. Wound: 12mm x 10mm, depth to subcutaneous tissue, granulating base, moderate exudate, surrounding callus rim, no probe-to-bone, no malodour or cellulitis. University of Texas grade 1A. Neuropathy: monofilament absent. Pulses palpable, ABPI 1.0. Offloading: currently in removable walker, adherence inconsistent. Dressings: foam, changed twice weekly. Medications: metformin, gliclazide, atorvastatin. Allergies: none known. Recent swab: mixed skin flora, not treated. Plan to continue: sharp debridement of callus rim, offloading optimisation (consider total contact cast), weekly wound review, vascular monitoring. Patient lives alone, needs district nurse support for dressings.",
    },
    guidanceNote:
      "This is a transfer, so summarise the established care plan clearly so the new team can continue seamlessly. Include wound grading and offloading adherence — both drive their decisions.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Paediatric in-toeing gait, reassurance letter to GP",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Marcus Lowe, General Practitioner",
      taskInstruction:
        "Update the GP and discharge this child following assessment of in-toeing gait, with reassurance and safety-netting.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Lucy Adeyemi, aged 4. Referred by GP after parental concern about 'turning feet inwards' and frequent tripping. History: born at term, normal development, walking from 13 months. No pain, no family history of orthopaedic conditions. Examination: in-toeing gait, source identified as bilateral internal tibial torsion (thigh-foot angle internally rotated). Hips: full symmetrical rotation, no excess femoral anteversion. Feet structurally normal, no metatarsus adductus, full range of motion. Neurological examination normal, symmetrical reflexes. No leg-length discrepancy. Tripping consistent with age and gait pattern, improving. Plan: reassure parents this is a normal developmental variant expected to resolve spontaneously by around age 8; no orthoses, no night splints, no exercises required. Discharged. Safety-net: return if pain, asymmetry, regression, or no improvement.",
    },
    guidanceNote:
      "Reassurance letters must still be specific — name the cause (internal tibial torsion) and the expected resolution. Include the safety-netting advice so the GP knows when to re-refer.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Recalcitrant plantar verruca, referral for specialist treatment",
    prompt:
      "Using the case notes, write a letter to the podiatry verruca clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "The Specialist Podiatrist, Verruca Clinic",
      taskInstruction:
        "Refer this patient for advanced verruca treatment after failure of conservative therapy.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Miss Chloe Davenport, aged 16. Presenting: painful plantar verruca beneath left heel, present 18 months, now mosaic spread to three satellite lesions. Pain on weight-bearing, limiting dance lessons. Lesion: well-defined, disrupted skin striae, pinpoint capillaries, pain on lateral pressure — confirms verruca, not corn. Otherwise fit and well, no diabetes, good circulation and sensation. Treatments tried: over-the-counter salicylic acid 12 weeks, cryotherapy x4 sessions, with no resolution. Medications: none. Allergies: none known. Not pregnant. Plan: refer for consideration of needling, stronger salicylic/monochloroacetic acid, or microwave therapy. Counselled that verrucae are often self-limiting but treatment justified given pain and duration. Parental consent obtained for ongoing care as patient is a minor.",
    },
    guidanceNote:
      "Confirm the diagnosis is verruca rather than corn — the clinical signs distinguish them. State clearly what has already failed so the clinic doesn't repeat first-line care.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Discharge to GP following resolved cellulitis and ulcer healing",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Priya Sharma, General Practitioner",
      taskInstruction:
        "Discharge this patient back to GP-led care following healed neuropathic ulcer and resolved infection, with ongoing monitoring advice.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Gordon Mackenzie, aged 70. Type 2 diabetes 11 years, HbA1c improved to 58 mmol/mol. History: neuropathic ulcer right second toe with associated cellulitis, treated with 14 days flucloxacillin (completed), now resolved. Wound fully epithelialised, no exudate, no surrounding erythema. Examination: skin intact, callus reduced, no new lesions. Neuropathy persists, monofilament absent. Pulses palpable, ABPI 1.0. Footwear reviewed, accommodative insoles fitted. Medications: metformin, dapagliflozin, atorvastatin, ramipril. Allergies: penicillin tolerated this course — earlier 'allergy' was nausea, reclassified as intolerance. Plan: discharge from active podiatry treatment to routine annual diabetic foot screening (high-risk category, recall every 3 months in community). Advised on daily foot checks, footwear, prompt reporting of any breaks in skin. GP to continue glycaemic and vascular risk management.",
    },
    guidanceNote:
      "Confirm full healing before discharge and state the surveillance interval clearly. Flag the corrected penicillin record — it's a meaningful detail for the GP's future prescribing.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Biomechanical assessment outcome, orthotic advice to referring GP",
    prompt:
      "Using the case notes, write a letter to the referring general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Dr Nathan Reid, General Practitioner",
      taskInstruction:
        "Advise the GP of the biomechanical findings and the custom orthotic management plan for this patient's anterior knee and arch pain.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Ms Rebecca Lyons, aged 34. Referred with bilateral medial arch ache and anterior knee pain, worse with running. Examination: bilateral excessive subtalar pronation, navicular drop 12mm, forefoot supinatus, flexible flatfoot fully correctable on tiptoe. Tibialis posterior intact, no tenderness along tendon. Gait: prolonged pronation through midstance, early heel lift loss. Calf flexibility reduced. No neurological deficit, pulses normal. Knee: patellofemoral signs, no effusion, ligaments stable. Medications: none. Allergies: none known. Plan: casted bespoke functional orthoses prescribed with medial rearfoot posting and arch fill; gradual break-in schedule advised. Calf stretching programme issued. Footwear advice given. Review at 8 weeks. No referral to orthopaedics needed at this stage; conservative management expected to settle symptoms.",
    },
    guidanceNote:
      "This is an advice letter — focus on what you found and the management plan, not a request for the GP to act. Keep biomechanical jargon balanced with a plain summary the GP can follow.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Suspected osteomyelitis in diabetic foot, urgent hospital referral",
    prompt:
      "Using the case notes, write a letter to the on-call diabetic foot multidisciplinary team. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "The On-Call Registrar, Hospital Diabetic Foot MDT",
      taskInstruction:
        "Refer this patient urgently for assessment of a deep diabetic foot infection with suspected osteomyelitis.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Terence Boyle, aged 62. Type 2 diabetes 16 years, HbA1c 81 mmol/mol. Presenting: deteriorating ulcer right hallux over 3 weeks. Wound: deep, probes to bone (positive probe-to-bone test), malodorous, purulent exudate, surrounding erythema extending 3cm, sausage-shaped swollen toe. Patient febrile 38.1°C, feeling generally unwell. Neuropathy present. Pulses palpable but foot warm and swollen. Bloods today: CRP 96, WCC 14.2, glucose 16 mmol/L. X-ray: cortical erosion and lucency around distal phalanx, suggestive of osteomyelitis. Medications: metformin, insulin (newly variable control), atorvastatin. Allergies: none known. Plan: urgent same-day referral; patient advised to attend hospital today, non-weight-bearing. Concern: limb-threatening deep infection requiring IV antibiotics, imaging, and possible surgical debridement.",
    },
    guidanceNote:
      "Lead with the limb-threatening features — positive probe-to-bone, systemic upset, and X-ray changes. This is time-critical; make the same-day expectation unmistakable.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Paediatric Sever's disease, advice letter to school nurse",
    prompt:
      "Using the case notes, write a letter to the school nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Mrs Linda Carter, School Nurse",
      taskInstruction:
        "Advise the school nurse on supporting this child's heel pain management during school sport.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Tom Whitfield, aged 11. Presenting: bilateral heel pain, worse during and after PE and football, eased by rest. Active in three sports, recent growth spurt. Examination: tenderness on medial-lateral compression of calcaneal apophysis (positive squeeze test) bilaterally, tight gastrocnemius, positive on heel-raise. No swelling, no redness, no limp at rest. Diagnosis: Sever's disease (calcaneal apophysitis), a self-limiting condition of growing children. Neurology and circulation normal. Medications: none. Allergies: none known. Plan: heel raises/cushions fitted, calf and hamstring stretching programme, activity modification — reduce high-impact loading during flares, not total rest. Ice after sport. Supportive footwear. Expected to resolve as growth plate matures. Parents informed. Advised school to allow modified PE participation during painful episodes.",
    },
    guidanceNote:
      "Frame the advice around practical school support — modified rather than total activity restriction. Reassure that the condition is self-limiting so PE staff don't over-restrict the child.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PODIATRY",
    title: "Podiatry — Achilles tendinopathy with rupture concern, referral to orthopaedics",
    prompt:
      "Using the case notes, write a letter to the orthopaedic foot and ankle service. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Caroline Pratt, Consultant Orthopaedic Surgeon",
      taskInstruction:
        "Refer this patient for orthopaedic assessment of chronic insertional Achilles tendinopathy with a partial tear concern.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Ian Forsyth, aged 52. Presenting: 9-month history of posterior heel pain at the Achilles insertion, recently sharp increase after a stumble two weeks ago. Examination: thickened tender Achilles at insertion, palpable Haglund prominence, retrocalcaneal tenderness. Calf squeeze (Simmonds-Thompson) test elicits plantarflexion — rupture unlikely but a partial tear suspected given acute change. Reduced single-heel-raise capacity right side, painful. Tight calf complex. Recently completed eccentric loading programme and orthoses with limited benefit. Comorbidity: on long-term ciprofloxacin course recently for prostatitis — fluoroquinolone tendinopathy risk noted. Medications: tamsulosin, recently ciprofloxacin (now stopped). Allergies: none known. Plan: refer for imaging (ultrasound/MRI) and surgical opinion; advised relative rest and a heel raise meanwhile. Concern: structural tendon damage warranting specialist assessment.",
    },
    guidanceNote:
      "The recent fluoroquinolone exposure is clinically significant for tendon integrity — include it. Note that the Simmonds-Thompson test argues against full rupture but the acute change still warrants imaging.",
  },
];
