import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Referral to GP for suspected lumbar radiculopathy",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Helen Carter, General Practitioner, Riverside Medical Centre",
      taskInstruction:
        "Refer the patient to the GP for review of worsening neurological signs and possible imaging.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Daniel Whitford, 47, warehouse operative.\nCondition: 6-week history of right-sided low back pain radiating to posterior thigh and calf.\nReferral source: self-referred to physiotherapy.\nAssessment (initial): lumbar flexion 40% restricted, painful; positive right straight leg raise at 40 degrees; reduced sensation lateral calf; ankle dorsiflexion strength 4/5.\nTreatment: 5 sessions over 4 weeks — neural mobilisation, McKenzie extension protocol, core stabilisation, activity advice.\nProgress: pain unchanged; new finding today — reduced right ankle reflex, calf weakness now 3/5, reports occasional foot drop catching kerbs.\nMeds: ibuprofen 400mg PRN, paracetamol.\nAllergies: penicillin.\nPlan: refer to GP for neurological review and consideration of MRI lumbar spine; continue advice on remaining active.",
    },
    guidanceNote:
      "Foreground the progressive motor deficit (calf weakness, foot drop, lost reflex) — these are the red flags driving the referral, not the original pain.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Discharge to GP after lateral ankle sprain rehabilitation",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Priya Nair, General Practitioner, Oakfield Surgery",
      taskInstruction:
        "Inform the GP that rehabilitation is complete and outline a self-managed maintenance plan.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Ms Aoife Brennan, 24, recreational netball player.\nCondition: Grade II inversion sprain of right lateral ankle ligaments, sustained 7 weeks ago.\nAssessment (initial): swelling lateral malleolus, weight-bearing limited, dorsiflexion ROM reduced 50%, single-leg balance unable.\nTreatment: 6 sessions — RICE advice initially, progressive proprioceptive retraining, calf and peroneal strengthening, return-to-sport drills.\nProgress: full pain-free ROM restored; single-leg balance 30 seconds eyes closed; hop test symmetrical; returned to light training.\nMeds: nil current.\nAllergies: none known.\nPlan: discharge from physiotherapy; continue home balance and strengthening programme 3x weekly; advised to use ankle support for first competitive matches; review with GP only if recurrent instability.",
    },
    guidanceNote:
      "A discharge letter for a resolved injury should reassure — keep the maintenance plan and the single condition to return (recurrent instability) clear and brief.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Referral to rheumatologist for suspected inflammatory arthritis",
    prompt:
      "Using the case notes, write a letter to the consultant rheumatologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Marcus Hale, Consultant Rheumatologist, City General Hospital",
      taskInstruction:
        "Refer the patient for specialist assessment of a suspected inflammatory rather than mechanical joint condition.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Lillian Osei, 38, primary school teacher.\nCondition: referred for physiotherapy with bilateral hand and wrist pain attributed to overuse.\nAssessment: symmetrical swelling of multiple metacarpophalangeal and proximal interphalangeal joints; prolonged early-morning stiffness lasting over 90 minutes; grip strength markedly reduced bilaterally; reports fatigue and intermittent knee swelling.\nTreatment: 3 sessions — joint protection education, splinting, graded exercise.\nProgress: minimal response; pattern and morning stiffness atypical for mechanical overuse.\nMeds: paracetamol, naproxen 250mg BD (limited benefit).\nAllergies: codeine (nausea).\nPlan: refer to rheumatology for assessment of possible inflammatory arthritis and serological investigation; continue joint protection meanwhile.",
    },
    guidanceNote:
      "The clinical reasoning is the point here — emphasise the features (symmetry, prolonged morning stiffness, systemic signs) that pushed you away from a mechanical diagnosis toward referral.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Transfer to community respiratory team after COPD exacerbation",
    prompt:
      "Using the case notes, write a letter to the community respiratory physiotherapy team. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Community Respiratory Physiotherapy Team, Northgate Health Centre",
      taskInstruction:
        "Hand over a patient recovering from an acute exacerbation for ongoing home-based respiratory rehabilitation.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr George Adeyemi, 71, retired bus driver, lives with wife.\nCondition: admitted with acute exacerbation of COPD secondary to chest infection.\nAssessment (inpatient): productive cough, coarse crackles right base, SpO2 90% on 2L oxygen, breathless on minimal exertion, deconditioned after 5-day admission.\nTreatment: airway clearance (active cycle of breathing technique), positioning, graded mobilisation — now walking 30m with frame and rests.\nProgress: chest clearer, SpO2 93% on air at rest, independent with airway clearance; remains breathless climbing stairs.\nMeds: inhaled tiotropium, salbutamol PRN, completing oral amoxicillin course.\nAllergies: none known.\nPlan: transfer to community team for pulmonary rehabilitation, stair and endurance progression, and reinforcement of self-management.",
    },
    guidanceNote:
      "A transfer letter must give the next team a working baseline — state current SpO2, mobility distance and what the patient can already do independently, not just the diagnosis.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Referral to orthopaedic team for suspected rotator cuff tear",
    prompt:
      "Using the case notes, write a letter to the orthopaedic shoulder team. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Mr Stephen Locke, Consultant Orthopaedic Surgeon, Shoulder Clinic, Eastvale Hospital",
      taskInstruction:
        "Refer the patient for orthopaedic assessment and imaging of a non-responding shoulder.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Raymond Fletcher, 58, self-employed painter and decorator.\nCondition: right shoulder pain and weakness following a fall onto an outstretched arm 10 weeks ago.\nAssessment: active abduction limited to 70 degrees with painful arc; positive empty can and external rotation lag signs; night pain disturbing sleep; deltoid wasting noted.\nTreatment: 6 sessions — graded loading, scapular control, soft tissue work, activity modification.\nProgress: weakness persists, external rotation lag unchanged, unable to return to overhead work.\nMeds: paracetamol, topical NSAID gel.\nAllergies: aspirin (wheeze).\nPlan: refer to orthopaedics for assessment and ultrasound/MRI given clinical signs of full-thickness rotator cuff tear; continue pain-management exercises pending review.",
    },
    guidanceNote:
      "Name the special test findings that signal a structural tear (lag sign, painful arc, weakness) — they justify imaging better than a general statement that physiotherapy 'did not work'.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Transfer to neuro-rehabilitation unit after Guillain-Barré syndrome",
    prompt:
      "Using the case notes, write a letter to the neuro-rehabilitation unit physiotherapist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Senior Physiotherapist, Regional Neuro-rehabilitation Unit, Westbrook Hospital",
      taskInstruction:
        "Hand over an early-recovery patient for intensive inpatient neurological rehabilitation.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Ms Hannah Choi, 33, graphic designer.\nCondition: Guillain-Barré syndrome, ascending weakness 3 weeks ago; weaned from ventilatory support 8 days ago.\nAssessment: distal lower-limb power 2/5, proximal 3/5, upper limbs 3-4/5; absent ankle reflexes; reduced sensation feet; sitting balance fair, unable to stand independently; fatigues rapidly.\nTreatment: respiratory care, passive and active-assisted movements, sitting tolerance building, splinting to prevent foot contracture.\nProgress: respiratory status stable, sitting unsupported 10 minutes, early return of proximal strength.\nMeds: gabapentin for neuropathic pain, prophylactic enoxaparin.\nAllergies: none known.\nPlan: transfer for intensive multidisciplinary neuro-rehabilitation focusing on strength, standing, gait re-education and fatigue management.",
    },
    guidanceNote:
      "Give the receiving neuro team a precise functional and motor baseline (graded power, balance tolerance, fatigue) — recovery tracking depends on accurate starting figures.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Referral to falls clinic for recurrent geriatric falls",
    prompt:
      "Using the case notes, write a letter to the multidisciplinary falls clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Falls Clinic Coordinator, Meadowbank Community Hospital",
      taskInstruction:
        "Refer the patient for comprehensive falls assessment given recurrent falls and multiple risk factors.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Doreen Pelletier, 82, lives alone in a first-floor flat.\nCondition: three falls in the past two months, one resulting in a wrist fracture (now healed).\nAssessment: Timed Up and Go 22 seconds; reduced ankle and hip strength; unsteady on turning; reports dizziness on standing; impaired vision awaiting cataract surgery; cluttered home environment.\nTreatment: 4 sessions — strength and balance programme, gait re-education with walking frame, home exercise advice.\nProgress: modest balance gains but continued unsteadiness; postural dizziness not improving with exercise alone.\nMeds: amlodipine, bendroflumethiazide, zopiclone at night.\nAllergies: none known.\nPlan: refer to falls clinic for medication review (postural hypotension, sedative), vision and multifactorial assessment alongside ongoing physiotherapy.",
    },
    guidanceNote:
      "Falls are multifactorial — flag the items outside physiotherapy's remit (sedating medication, postural dizziness, vision) that the clinic needs to address, since exercise alone has not been enough.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Discharge advice to GP following women's health continence programme",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Dr Sandra Whitlock, General Practitioner, Bramley Lane Practice",
      taskInstruction:
        "Update the GP on outcomes of pelvic floor rehabilitation and advise on residual symptoms needing review.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Emily Hartnett, 35, two children, office administrator.\nCondition: stress urinary incontinence since second vaginal delivery 8 months ago.\nAssessment: leakage on coughing, sneezing and exercise; pelvic floor muscle grade 2/5 (modified Oxford); poor endurance; no urgency or nocturia.\nTreatment: 6 sessions — supervised pelvic floor muscle training, biofeedback, bladder and lifting advice, return-to-exercise guidance.\nProgress: pelvic floor strength now 4/5; leakage during daily activities resolved; minor leakage remains with high-impact running only.\nMeds: nil relevant.\nAllergies: none known.\nPlan: discharge with maintenance programme; advised gradual return to running; recommend GP review if symptoms recur or if any urgency, prolapse sensation or new symptoms develop.",
    },
    guidanceNote:
      "Report the objective change (Oxford grade 2 to 4, leakage resolved) honestly alongside the residual high-impact symptom — don't overstate a full cure.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Referral to paediatric service for developmental motor delay",
    prompt:
      "Using the case notes, write a letter to the paediatric physiotherapy service. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Paediatric Physiotherapy Service, Children's Development Centre, Linfield",
      taskInstruction:
        "Refer a child with gross motor delay for specialist paediatric assessment and ongoing input.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Master Leo Sutcliffe, 18 months, accompanied by mother.\nCondition: gross motor delay — not yet pulling to stand or cruising; bottom-shuffling rather than crawling.\nAssessment: low central tone; delayed protective reactions; tends to W-sit; reduced weight-bearing through legs; reaches and grasps appropriately; sociable and interactive.\nReferral source: health visitor concern at developmental check.\nTreatment: 2 sessions — parental advice on positioning, play to encourage weight-bearing, discouraging W-sitting.\nProgress: engaging well; tone and lower-limb loading need specialist monitoring and equipment review.\nMeds: nil.\nAllergies: none known.\nPlan: refer to paediatric physiotherapy for ongoing developmental assessment, possible orthotic review and family-centred programme.",
    },
    guidanceNote:
      "For a paediatric referral, balance the concern (tone, delayed milestones, W-sitting) with the reassuring findings (good fine motor and social skills) so the specialist gets a full picture of the child.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Transfer to cardiac rehabilitation after coronary bypass surgery",
    prompt:
      "Using the case notes, write a letter to the cardiac rehabilitation physiotherapy team. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Cardiac Rehabilitation Team, Phase III Programme, Harborough Hospital",
      taskInstruction:
        "Hand over a post-surgical patient for supervised outpatient cardiac rehabilitation.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Tomasz Wójcik, 64, retired electrician.\nCondition: day 6 following elective coronary artery bypass graft (triple vessel).\nAssessment: median sternotomy healing well, no instability; breath sounds clear, effective cough using sternal support; independent mobilising on flat 100m and one flight of stairs with monitoring; no chest pain or arrhythmia on exertion.\nTreatment: inpatient airway clearance, sternal precautions education, progressive mobilisation.\nProgress: tolerating activity well, observing sternal precautions, keen to resume gardening.\nMeds: aspirin, bisoprolol, atorvastatin, ramipril.\nAllergies: none known.\nPlan: transfer to Phase III cardiac rehabilitation for graded aerobic conditioning, education and risk-factor management; sternal precautions for a further 6 weeks.",
    },
    guidanceNote:
      "Confirm the safety-critical items the rehab team must respect — sternal precautions, wound stability and the patient's current exercise tolerance — before listing future goals.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Referral to sports medicine for suspected ACL deficiency",
    prompt:
      "Using the case notes, write a letter to the sports medicine consultant. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Naomi Forsythe, Consultant in Sport and Exercise Medicine, Pinehurst Clinic",
      taskInstruction:
        "Refer a young athlete with persistent knee instability for specialist assessment and imaging.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Callum Reyes, 21, semi-professional footballer.\nCondition: right knee injury from a non-contact pivot 9 weeks ago; reported a 'pop' and immediate swelling.\nAssessment: effusion settled; positive Lachman and anterior drawer; pivot-shift apprehension; quadriceps wasting 2cm versus left; gives way on cutting movements; full ROM regained.\nTreatment: 8 sessions — swelling management, quadriceps and hamstring strengthening, proprioceptive retraining.\nProgress: strength improving but recurrent episodes of instability on rotation prevent return to sport.\nMeds: nil regular.\nAllergies: none known.\nPlan: refer to sports medicine for MRI and surgical opinion regarding anterior cruciate ligament reconstruction; continue prehabilitation strengthening meanwhile.",
    },
    guidanceNote:
      "For an athlete, link the instability on rotation directly to the return-to-sport goal — the functional impact, not just the positive Lachman test, is what makes surgical referral appropriate.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Discharge to GP after total hip replacement rehabilitation",
    prompt:
      "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Iain MacLeod, General Practitioner, Glenmore Health Centre",
      taskInstruction:
        "Inform the GP that post-operative rehabilitation is complete and outline the maintenance plan.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Patricia Donnelly, 69, retired librarian.\nCondition: 8 weeks following left total hip replacement (posterior approach) for osteoarthritis.\nAssessment: wound healed; walks independently without aids; hip flexion 95 degrees, abduction strength 4+/5; minimal residual stiffness; observing posterior hip precautions until 12 weeks.\nTreatment: 7 sessions — progressive strengthening, gait re-education, stair practice, precautions education.\nProgress: pain-free, independent with stairs and community walking, resumed light household tasks.\nMeds: paracetamol PRN, alendronic acid weekly.\nAllergies: none known.\nPlan: discharge from physiotherapy; continue home strengthening programme; maintain hip precautions to 12 weeks; GP review if pain, swelling or limp develops.",
    },
    guidanceNote:
      "Even a straightforward discharge should remind the GP of the remaining precaution period and the warning signs (new pain, swelling, limp) that would warrant review.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Referral to hand therapy after complex distal radius fracture",
    prompt:
      "Using the case notes, write a letter to the specialist hand therapy service. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Specialist Hand Therapy Service, Upper Limb Unit, Croftwell Hospital",
      taskInstruction:
        "Refer the patient for specialist hand therapy due to stiffness and suspected complex regional pain syndrome.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Ms Bridget Lawson, 52, seamstress.\nCondition: 7 weeks post open reduction internal fixation of right distal radius fracture; cast removed 2 weeks ago.\nAssessment: marked wrist and finger stiffness; wrist extension 15 degrees, flexion 20 degrees; disproportionate burning pain; swelling, shiny skin and temperature change over dorsum of hand; reduced grip; hypersensitivity to light touch.\nTreatment: 3 sessions — gentle active ROM, oedema management, desensitisation, splinting.\nProgress: limited gains; pain and trophic changes raise concern for complex regional pain syndrome.\nMeds: paracetamol, amitriptyline 10mg nocte recently started.\nAllergies: latex.\nPlan: refer to specialist hand therapy for intensive management and early CRPS intervention; continue desensitisation and oedema control meanwhile.",
    },
    guidanceNote:
      "Flag the CRPS warning features (disproportionate burning pain, skin/temperature changes, hypersensitivity) prominently — they change the urgency and the nature of the specialist input required.",
  },
];
