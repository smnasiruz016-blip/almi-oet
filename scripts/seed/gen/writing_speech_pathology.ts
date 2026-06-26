import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Aphasia community team referral after left MCA stroke",
    prompt:
      "Using the case notes, write a letter to the community speech pathologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Carol Whitfield, Community Speech Pathologist, Eastbrook Community Health Centre",
      taskInstruction:
        "Refer this patient for ongoing community-based aphasia rehabilitation following acute inpatient discharge.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Trevor Aldous, 68, right-handed, retired postman. Admitted 14 days ago, left middle cerebral artery ischaemic stroke. Living situation: lives with wife (primary support); two adult children nearby. PMH: hypertension, atrial fibrillation, type 2 diabetes. Medications: apixaban, ramipril, metformin, atorvastatin. Allergies: penicillin (rash). Assessment: expressive (Broca's-type) aphasia; comprehension relatively preserved for single commands; naming markedly impaired; reading single words intact, sentence reading reduced; writing telegraphic. No dysphagia on bedside swallow; cleared for full diet. Mild right facial weakness, mild verbal apraxia. Communication: uses single words plus gesture; frustrated by word-finding difficulty; motivated. Goals: return to conversation with grandchildren, telephone use. Plan: twice-weekly outpatient therapy, picture-naming and script practice; supported-conversation training for wife; review in 6 weeks. Wife keen to attend sessions.",
    },
    guidanceNote:
      "Comprehension is relatively preserved, so don't imply global aphasia — be precise about the expressive profile and what the community clinician should continue.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Modified-diet transfer letter for residential aged care",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "The Registered Nurse in Charge, Maplewood Residential Aged Care Facility",
      taskInstruction:
        "Transfer this resident's swallowing management to the aged-care nursing team to ensure dysphagia precautions continue.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Eileen Forsythe, 84. Transferring from hospital to permanent residential care after recurrent aspiration pneumonia. PMH: advanced Parkinson's disease, two falls this year, mild cognitive impairment. Medications: levodopa/carbidopa, domperidone, paracetamol. Allergies: nil known. Assessment: videofluoroscopy confirmed delayed swallow initiation and silent aspiration on thin fluids. Recommendations: IDDSI Level 5 minced and moist diet; IDDSI Level 2 mildly thick fluids; full upright seating, chin-tuck; one-to-one supervision at all meals; alternate solids and fluids; medications crushed in puree where permitted. Oral care after every meal. Signs of concern: wet voice, coughing, prolonged meals, temperature. Resident often fatigues mid-meal; offer smaller, more frequent portions. Family aware and supportive of plan; daughter requests updates. Plan: speech pathology to review in 4 weeks or sooner if chest symptoms; weigh weekly.",
    },
    guidanceNote:
      "State the IDDSI levels precisely and the supervision requirements clearly — vague phrasing like 'soft diet' is unsafe for handover.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Voice nodules referral to ENT for a primary teacher",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Anita Rasheed, Ear, Nose and Throat Surgeon, Riverside ENT Clinic",
      taskInstruction:
        "Refer this patient for ENT laryngeal review given persistent dysphonia despite a trial of voice therapy.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Ms Priya Sandhu, 34, primary school teacher. Presenting: progressive hoarseness over 5 months, vocal fatigue by midday, occasional aphonia, throat clearing, mild discomfort. No dysphagia, no haemoptysis, no weight loss. Smoking: never. Alcohol: minimal. Caffeine: 4 coffees daily. Hydration: poor during teaching days. PMH: mild reflux (untreated), seasonal allergic rhinitis. Medications: loratadine PRN. Allergies: nil known. Assessment: perceptual — rough, breathy voice, reduced loudness; hard glottal onsets; habitual throat clearing; clavicular breathing pattern noted. Voice handicap index elevated. Completed 6 sessions of voice therapy (vocal hygiene, resonant voice, breath support) with only partial improvement. Suspected bilateral vocal nodules; laryngeal imaging not yet performed. Plan: requesting laryngoscopy/stroboscopy to confirm diagnosis and guide further management; voice therapy to continue concurrently; reflux review suggested.",
    },
    guidanceNote:
      "The reason for referral is partial response to therapy plus need for laryngeal visualisation — make that rationale explicit rather than just listing symptoms.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Childhood stammer referral to paediatric SLP clinic",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "The Paediatric Speech Pathology Team, Northgate Children's Therapy Service",
      taskInstruction:
        "Refer this child for specialist assessment and management of developmental stuttering.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Master Liam Okoro, 4 years 6 months. Referred by general practitioner at parents' request. History: onset of disfluency around 3 years; gradually increasing in frequency and effort over the past 6 months. Features: part-word repetitions, sound prolongations, occasional silent blocks, visible facial tension, some avoidance of speaking. Family history: paternal uncle stammers. Developmental history: otherwise typical; milestones met; hearing screen passed at birth. No regression of skills. Social: attends kindergarten; teacher reports child is becoming reluctant to answer in group time; peers occasionally comment. Parental concern: high; mother reports child said 'my words get stuck.' Medications: nil. Allergies: nil known. No prior speech pathology input. Plan: requesting assessment for the Lidcombe Program or comparable early-intervention approach; parent training and monitoring advised; the longer-than-12-month duration and increasing tension warrant timely review.",
    },
    guidanceNote:
      "Highlight the risk factors (duration over a year, family history, rising tension, emerging avoidance) — these justify prioritising the referral.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Discharge summary after paediatric speech sound disorder therapy",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Helen Marsh, General Practitioner, Brookfield Family Practice",
      taskInstruction:
        "Provide a discharge summary following successful treatment of this child's speech sound disorder.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Miss Sofia Bianchi, 6 years 2 months. Referred 10 months ago for unintelligible speech. Original diagnosis: phonological disorder — fronting, stopping, and final-consonant deletion; intelligibility to unfamiliar listeners approximately 40%. Hearing: normal (audiology cleared). Oromotor: structurally normal; no signs of childhood apraxia of speech. Treatment: 18 sessions, minimal-pairs and cycles approach; home programme supported by parents. Progress: target processes resolved; intelligibility now estimated 90% to unfamiliar listeners; age-appropriate speech sound system. Residual: occasional /r/ distortion, developmentally appropriate, not requiring therapy. School: teacher reports improved class participation and confidence. Medications: nil. Allergies: nil known. Plan: discharged from caseload; parents advised to monitor /r/ and re-refer if not acquired by age 7, or if any literacy concerns emerge. No further routine review needed.",
    },
    guidanceNote:
      "This is a positive discharge — note the residual /r/ as developmentally normal and give clear re-referral criteria so the GP knows when to act.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — AAC funding and support referral for a child with cerebral palsy",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "The AAC Coordinator, Statewide Assistive Technology Service",
      taskInstruction:
        "Refer this child for assessment, trial and funding of a high-tech augmentative and alternative communication system.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Master Daniel Petrov, 8. Diagnosis: spastic quadriplegic cerebral palsy (GMFCS V), dysarthria with severely reduced speech intelligibility. Cognition: receptive language assessed within functional range using eye-gaze responses; demonstrates clear yes/no and choice-making. Vision: functional; uses eye-gaze access reliably in trials. Current communication: low-tech picture board, vocalisations, facial expression; frequently misunderstood outside the family. Seating: custom wheelchair with good head support. PMH: epilepsy (well controlled), reflux. Medications: sodium valproate, omeprazole. Allergies: nil known. Assessment: trialled eye-gaze speech-generating device over 4 sessions — accurate page navigation, generated 3–4 word messages, high engagement and motivation. School supportive; teacher and aide willing to implement. Family committed to daily use. Plan: requesting formal AAC assessment, device trial and funding application; ongoing speech pathology to provide implementation and modelling support across home and school.",
    },
    guidanceNote:
      "Emphasise the successful eye-gaze trial and the evidence of preserved comprehension — funding bodies need proof the device is both accessible and warranted.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Pre-laryngectomy counselling referral for head and neck cancer",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "The Head and Neck Speech Pathology Team, Metropolitan Cancer Centre",
      taskInstruction:
        "Refer this patient for pre-operative counselling and communication planning prior to total laryngectomy.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Gordon Halliwell, 61, self-employed plumber. Diagnosis: T3 squamous cell carcinoma of the larynx; multidisciplinary team recommends total laryngectomy in three weeks. History: 40-pack-year smoking (quit at diagnosis), moderate alcohol. PMH: COPD, hypertension. Medications: tiotropium, salbutamol PRN, amlodipine. Allergies: sulfa drugs (rash). Current status: hoarse but intelligible voice; mild stridor on exertion; swallowing functional, mild solid-food sticking. Psychosocial: lives with partner; anxious about permanent voice loss and impact on work and social life; limited understanding of post-surgery communication options. No prior speech pathology contact. Plan: requesting pre-operative session to explain laryngectomy effects on voice, breathing and swallowing; introduce alaryngeal communication options (surgical voice prosthesis, electrolarynx, oesophageal speech); establish post-operative communication plan and baseline measures; arrange early post-op review for stoma care and rehabilitation. Patient keen to maintain work where possible.",
    },
    guidanceNote:
      "Frame this as time-critical pre-operative input — the value is preparation and baseline before surgery, so make the timeline and counselling needs prominent.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Cognitive-communication referral after traumatic brain injury",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Rebecca Tan, Speech Pathologist, Community Rehabilitation Team",
      taskInstruction:
        "Refer this patient for ongoing management of cognitive-communication difficulties following traumatic brain injury.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Jaymon Reeves, 24, apprentice electrician. Mechanism: motorcycle accident 6 weeks ago, severe traumatic brain injury (frontal and temporal contusions), initial GCS 7. Now medically stable, discharging from inpatient rehabilitation. PMH: nil significant. Medications: levetiracetam (seizure prophylaxis), paracetamol PRN. Allergies: nil known. Assessment: language structurally intact; difficulties are cognitive-communicative — reduced attention, impaired verbal memory, tangential and disinhibited conversation, poor topic maintenance, reduced insight into errors, impulsive responses. Swallowing safe, full diet. Reading and writing slowed by attention/fatigue. Social: lives with parents; girlfriend supportive; goal to return to apprenticeship. Fatigues quickly; tolerates 30-minute sessions. Plan: outpatient therapy targeting attention, conversational pragmatics, compensatory memory strategies (diary/phone reminders), and communication-partner education for family and employer; coordinate with occupational therapy and neuropsychology; staged return-to-work planning. Review insight and fatigue regularly.",
    },
    guidanceNote:
      "Stress that language is intact and the issue is cognitive-communication — this guides the community clinician toward pragmatics and strategy work rather than aphasia therapy.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Feeding and dysphagia advice letter for a child with cleft palate",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "The Community Child Health Nurse, Hillcrest Early Childhood Centre",
      taskInstruction:
        "Provide feeding and communication advice to support ongoing community care for this infant with a cleft palate.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Baby Amara Nguyen, 4 months. Diagnosis: unilateral cleft lip and palate, repaired lip at 3 months; palate repair scheduled at 10–12 months. Feeding: bottle feeding with specialised cleft teat and squeezable bottle; previous nasal regurgitation and prolonged feeds now improved with positioning. PMH: otherwise well; gaining weight along the 25th centile. Medications: nil. Allergies: nil known. Hearing: at risk of middle-ear effusion; audiology surveillance arranged. Assessment: upright feeding position, paced bottle feeding, frequent burping; feeds completing within 30 minutes; adequate weight gain. Mild nasal air escape during vocalisation, expected pre-palate-repair. Communication: babbling emerging; parents responsive. Plan: continue current feeding technique; monitor weight and hydration; watch for signs of ear infection affecting hearing and speech; speech and resonance assessment planned after palate repair. Parents coping well; reassurance provided. Review at the multidisciplinary cleft clinic in 6 weeks.",
    },
    guidanceNote:
      "This is reassurance plus monitoring advice — keep it practical (positioning, weight, ear/hearing surveillance) and avoid implying speech therapy is needed before the palate is repaired.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Communication advice to nursing staff for advanced dementia",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "The Clinical Care Coordinator, Willowdene Dementia Care Unit",
      taskInstruction:
        "Provide communication and mealtime strategies to support staff caring for this resident with advanced dementia.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Stanley Ovenden, 79. Diagnosis: advanced Alzheimer's dementia. Reason for review: staff report difficulty communicating and concerns at mealtimes. PMH: ischaemic heart disease, osteoarthritis, previous TIA. Medications: donepezil, aspirin, paracetamol. Allergies: nil known. Assessment: comprehension limited to short, familiar phrases; expressive output reduced to single words and stock phrases; responds well to gesture, tone and visual cues; recognises familiar carers. Swallowing: bedside assessment shows mild oral-phase delay, holds food in mouth, occasional throat clearing on thin fluids; no overt aspiration but at risk if rushed. Eats best with prompting and familiar foods. Recommendations: short simple sentences, one instruction at a time, allow extra response time, reduce background noise, use visual and gestural cues; for meals — upright seating, unhurried pace, verbal prompts to swallow, regular-texture diet with thin fluids continued for now, supervise and watch for coughing or wet voice. Plan: review in 6 weeks or if swallowing deteriorates.",
    },
    guidanceNote:
      "Practical, staff-facing strategies are the point — present communication and mealtime tips clearly, and flag the swallow-monitoring triggers without overstating aspiration risk.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Transfer to school SLP for developmental language disorder",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "The School Speech Pathologist, Greenfield Primary School",
      taskInstruction:
        "Transfer this child's care to the school speech pathology service to continue language support as he starts school.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Master Kwame Mensah, 5 years 4 months, starting Year 1. Diagnosis: developmental language disorder (DLD), receptive and expressive. History: seen by community service for 14 months. Hearing: normal. Cognition: non-verbal skills within normal range. Assessment (most recent): receptive language — difficulty following multi-step instructions and understanding complex grammar; expressive — short sentences, word-finding difficulties, immature grammar (verb tense, plurals); narrative skills emerging but disorganised. Vocabulary below age expectations. Speech sounds: age appropriate. Social: friendly, engages well; some frustration when misunderstood. Medications: nil. Allergies: nil known. Progress: good response to visual supports and explicit vocabulary teaching; benefits from repetition and chunked instructions. Family: supportive, English spoken at home. Plan: handover to school-based service for classroom-embedded language support; recommend continued use of visual supports, pre-teaching of vocabulary, simplified instructions, and liaison with the classroom teacher. Provide previous assessment reports on request.",
    },
    guidanceNote:
      "Give the school clinician what they can act on in the classroom — the language profile and the strategies that worked — rather than a full developmental history.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Outpatient discharge after voice prosthesis rehabilitation",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Owen Fairbrother, General Practitioner, Lakeside Medical Centre",
      taskInstruction:
        "Provide a discharge summary following completion of voice and swallowing rehabilitation after total laryngectomy.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Bernard Castellano, 64. History: total laryngectomy 8 months ago for laryngeal cancer; tracheo-oesophageal voice prosthesis fitted intra-operatively. PMH: type 2 diabetes, hypertension; ex-smoker. Medications: metformin, perindopril. Allergies: nil known. Progress: fluent tracheo-oesophageal speech achieved; intelligible in most settings including telephone; independent with stoma care, heat-moisture exchanger use, and prosthesis cleaning. Swallowing: full normal diet, no aspiration, weight stable. Psychosocial: returned to part-time work and social activities; mood good. Prosthesis: current device functioning; routine replacement managed by ENT clinic. Education completed: leakage management, hands-free valve trialled, emergency stoma care. No outstanding speech pathology goals. Medications and diabetes stable. Plan: discharged from speech pathology caseland to routine ENT prosthesis review; advise GP to re-refer if voice deteriorates, leakage through or around the prosthesis develops, swallowing worsens, or new throat or stoma symptoms arise. Patient and family confident with self-management.",
    },
    guidanceNote:
      "A successful-outcome discharge: summarise function achieved and give the GP concrete re-referral triggers (voice change, prosthesis leakage, swallowing decline).",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Dietitian referral for unintentional weight loss with dysphagia",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Hana Suzuki, Dietitian, Community Nutrition Service",
      taskInstruction:
        "Refer this patient for nutritional assessment given weight loss associated with a texture-modified diet for dysphagia.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Doris Pemberton, 77, lives alone with daily home support. Diagnosis: dysphagia secondary to progressive motor neurone disease (bulbar onset). PMH: osteoporosis, depression. Medications: riluzole, sertraline, calcium/vitamin D. Allergies: nil known. Swallowing assessment: oral and pharyngeal weakness; safest on IDDSI Level 6 soft and bite-sized diet with IDDSI Level 2 mildly thick fluids; fatigues during meals; meals now taking up to 45 minutes; reduced intake. Weight: 4 kg loss over 8 weeks; reports poor appetite and finds modified textures unappealing. No current chest infections. Hydration borderline. Lives alone; meals prepared by support worker. Psychosocial: low mood, anxious about future eating and possible feeding tube. Plan: speech pathology continuing swallow monitoring and texture review; requesting dietetic input for high-energy, high-protein modified-texture options, fortification and small frequent meals; joint discussion needed regarding nutrition goals and advance care planning as disease progresses.",
    },
    guidanceNote:
      "Make the speech pathology and dietetic roles distinct — you manage swallow safety and texture, you're asking the dietitian to address the calorie and weight problem within those constraints.",
  },
];
