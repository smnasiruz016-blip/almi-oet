import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Home adaptations referral for advancing multiple sclerosis",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Delphine Aubert, Senior Occupational Therapist, Local Authority Housing & Adaptations Team",
      taskInstruction:
        "Refer this patient for a major home-adaptations assessment to support safe mobility and bathing as her condition progresses.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Rosa Calderon, 52. Diagnosis: relapsing-remitting multiple sclerosis, 11 years; now secondary progressive. Reason for referral: declining mobility and falls at home. Function/ADLs: mobilises indoors with two sticks, ~8 metres before fatigue; uses a wheelchair outdoors. Unable to climb stairs safely (two falls on stairs in 6 weeks, no injury). Cannot step into the bath; strip-washing at sink. Toileting independent. Cooking limited by fatigue and reduced grip. Home: two-storey terraced house, bedroom and only bathroom upstairs. Lives with husband (works full-time). Assessment: reduced lower-limb strength, spasticity right leg, intention tremor right hand, fatigue worse afternoons. Cognition intact. Meds: baclofen 10mg TDS, fampridine 10mg BD, gabapentin 300mg TDS. Allergies: none known. Plan: requesting stairlift or downstairs-living assessment, level-access shower, grab rails; OT to continue energy-conservation and upper-limb work.",
    },
    guidanceNote:
      "The housing team needs the access problems and the home layout, not the full MS history. Lead with the stair falls, the bathing barrier and the upstairs-only bathroom — these justify the major adaptation request.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Transfer to community neuro-rehab after acquired brain injury",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "transfer",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Mr Idris Bello, Lead Occupational Therapist, Community Neuro-Rehabilitation Team",
      taskInstruction:
        "Hand over this patient's cognitive and functional rehabilitation so the community team can continue goal-based therapy at home.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Callum Whitfield, 34, warehouse supervisor. Diagnosis: traumatic brain injury (frontal and right temporal contusions) after a cycling collision 10 weeks ago. Inpatient neuro-rehab progress: now independent in basic self-care; mobilises independently. Key impairments: impaired attention and working memory, reduced insight, impulsivity, fatigue. Functional: prepares a simple cold meal with a checklist; unsafe with the hob (left it on twice). Money management and planning impaired. Mood: frustrated, occasional verbal outbursts; engaging with therapy. Driving: DVLA notified, not driving. Home: lives with partner and a 4-year-old; partner reducing work hours. Goals: supported community living, rebuild domestic routine, later vocational assessment. Meds: levetiracetam 500mg BD (seizure prophylaxis), sertraline 50mg OD. Allergies: latex. Plan: continue cognitive strategies (external memory aids, structured routine), graded supervised kitchen retraining, family education, fatigue management; vocational referral when ready.",
    },
    guidanceNote:
      "Foreground the cognitive impairments and the safety risks (hob, impulsivity) that shape ongoing therapy — these matter more than the injury mechanism. Note the seizure medication and that driving is suspended.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Falls-prevention referral for recurrent falls at home",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Harriet Lowndes, Coordinator, Community Falls-Prevention Service",
      taskInstruction:
        "Refer this patient for falls-prevention assessment, strength-and-balance input and a home hazard review.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Stanley Pickering, 81, retired postman. Reason for referral: four falls in the last three months, all indoors, no fractures; last fall caused a forehead laceration. Function/ADLs: independent in self-care; mobilises with a walking stick; reports unsteadiness rising from his armchair and at night. Reduced confidence, now rarely leaves the house. Vision: cataracts, awaiting surgery. Footwear: worn slippers. Home: bungalow; loose hallway rugs, low soft sofa, no rails by the back step, dim landing light. Medical: hypertension, osteoarthritis (knees), benign prostatic hyperplasia (nocturia ×3). Meds: amlodipine 10mg OD, ramipril 5mg OD, tamsulosin 400mcg OD, paracetamol PRN. Allergies: none known. Social: lives alone, daughter visits weekly. Cognition intact. Plan: requesting strength-and-balance programme, home hazard assessment, equipment (chair raise, grab rails, toilet frame), and footwear advice.",
    },
    guidanceNote:
      "Keep it simple and focused: the pattern of falls, the environmental hazards and the contributing factors (nocturia, low chair, poor footwear) tell the falls service what to target. Mention the awaited cataract surgery as relevant context.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Discharge to GP after total hip replacement",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "discharge",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Marcus Halloran, General Practitioner, Brookfield Medical Practice",
      taskInstruction:
        "Inform the GP that OT input is complete following hip surgery and outline the home setup and remaining precautions.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Eileen Forsythe, 68, retired teacher. Surgery: elective right total hip replacement (posterior approach) 12 days ago for osteoarthritis. OT involvement: assessed for hip-precaution compliance and home equipment before and after surgery. Function/ADLs: independent in washing and dressing using long-handled aids (sock aid, reacher, long shoehorn); mobilises with one crutch indoors. Precautions: maintain hip precautions for 6 weeks — no bending past 90°, no crossing legs, no twisting on the operated leg. Equipment installed at home: raised toilet seat, perching stool, chair and bed raisers, second stair rail. Home: two-storey house, lives with husband (fit and supportive). Meds: apixaban 2.5mg BD (VTE prophylaxis, 28 days total), paracetamol 1g QDS, codeine 30mg PRN. Allergies: aspirin (wheeze). Plan: continue equipment until precautions lift; OT discharged; orthopaedic review at 6 weeks; GP to monitor analgesia and wound.",
    },
    guidanceNote:
      "This is a closure letter — state that OT is complete and summarise the home setup and the time-limited precautions the GP should reinforce. Include the anticoagulant duration and the allergy; omit fine equipment detail the GP doesn't need.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Hand therapy splinting advice after Dupuytren's release",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "advice",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Ms Priya Nandakumar, Practice Nurse, Eastgate Surgery",
      taskInstruction:
        "Advise the practice nurse on wound care, the night splint and the exercise regimen so local follow-up supports recovery.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Trevor Aldington, 63, retired electrician. Surgery: limited fasciectomy, right ring and little fingers, for Dupuytren's contracture 9 days ago. Hand therapy input: fitted a custom thermoplastic night extension splint; commenced active flexion/extension and tendon-gliding exercises hourly when awake. Function/ADLs: dominant right hand; manages light self-care; avoiding gripping and heavy lifting. Wound: healing, sutures due out at 14 days; mild swelling, no signs of infection. Sensation intact. Scar care to begin once healed. Night splint: wear nightly for 8 weeks; daytime as needed if extension lag develops. Medical: type 2 diabetes (HbA1c 58), hypertension. Meds: metformin 1g BD, lisinopril 10mg OD. Allergies: none known. Social: lives with wife. Plan: hand therapy review in 2 weeks; practice nurse to remove sutures, monitor wound, reinforce splint wear and exercises; refer back if extension worsens or signs of CRPS.",
    },
    guidanceNote:
      "An advice letter shares responsibility for follow-up. Be clear about the three things the nurse should reinforce — wound/suture care, nightly splint wear and the exercises — and flag the diabetes as a wound-healing consideration.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Paediatric referral for handwriting and coordination difficulties",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Fiona Carrick, Paediatric Occupational Therapist, Children's Therapy Service",
      taskInstruction:
        "Refer this child for assessment of fine-motor and coordination difficulties affecting school participation.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Child: Mason Albright, 7 years, Year 3. Reason for referral: marked difficulty with handwriting and self-care; query developmental coordination disorder. Function: pencil grasp immature, writing slow, illegible and tiring; avoids drawing and cutting tasks. Struggles with buttons, shoelaces and using a knife and fork. Frequently bumps into furniture; clumsy on stairs; poor at catching a ball. Concentration in class reduced due to frustration. Hearing and vision screened — normal. No regression. Developmental history: walked at 18 months, otherwise unremarkable; no medical diagnoses. Meds: none. Allergies: none known. School: supportive; teacher reports he is bright verbally but written work is far behind peers; currently extra time and a pencil grip trialled. Home: lives with both parents and an older sibling; parents keen to help. Plan: requesting OT assessment of fine-motor and gross-motor coordination, advice for school and home, and a programme to support handwriting and dressing skills.",
    },
    guidanceNote:
      "Paint a functional picture across school and home — the impact on handwriting, dressing and coordination is what justifies assessment. State that vision and hearing are normal and there is no regression, which helps the service prioritise appropriately.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Wheelchair and pressure-care seating referral",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Mr Owen Trelawny, Clinical Lead, Wheelchair & Specialist Seating Service",
      taskInstruction:
        "Refer this patient for specialist seating assessment to manage posture and protect skin integrity.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Ms Dawn Eccleston, 47. Diagnosis: incomplete C6 spinal cord injury (road traffic collision 4 years ago). Reason for referral: deteriorating sitting posture and a developing pressure area. Function/ADLs: full-time wheelchair user; self-propels short distances, otherwise attendant-propelled; needs assistance with transfers (banana board) and lower-body dressing. Upper-limb function partial; weak hand grip. Posture: pelvic obliquity and a developing left-leaning trunk; current cushion (4 years old) compressed. Skin: category 2 pressure ulcer over left ischial tuberosity, present 3 weeks; reduced sitting tolerance to 2 hours. Sensation absent below injury. Continence: managed with intermittent catheterisation; neurogenic bowel. Meds: baclofen 20mg TDS, oxybutynin 5mg BD, paracetamol PRN. Allergies: Elastoplast (skin reaction). Home: adapted bungalow, husband assists, carers twice daily. Plan: requesting reassessment of wheelchair and pressure-relieving cushion, postural support, and a repositioning/pressure-care review.",
    },
    guidanceNote:
      "Lead with the seating problem and the pressure ulcer — these are the reason for the referral. Include posture, sensation loss, current cushion age and sitting tolerance. The bladder and bowel detail is background unless it bears on seating time.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Discharge from inpatient mental health to community team",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "discharge",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Ms Salome Karanja, Occupational Therapist, Community Mental Health Team",
      taskInstruction:
        "Hand over this patient's occupational goals and daily routine so the community team can support recovery after discharge.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Hassan Qureshi, 29. Diagnosis: first episode of psychosis; admitted informally 7 weeks ago after social withdrawal, disrupted sleep and self-neglect. Current status: psychotic symptoms settled on medication; insight improving; engaging well. OT involvement: graded re-engagement in daily routine and self-care; cooking group; community trips for confidence and using public transport. Function/ADLs: now independent in self-care and laundry; cooks simple meals; manages a basic budget with prompts. Occupation: was a second-year IT student; wishes to return to study; some anxiety about social situations. Sleep: improved with sleep-hygiene routine. Substance use: stopped cannabis during admission, motivated to remain abstinent. Meds: olanzapine 10mg ON. Allergies: none known. Social: lives with parents, supportive; under a care coordinator. Risk: no current risk to self or others; relapse signature documented in care plan. Plan: continue daily routine, graded return to study, social-confidence work, relapse-prevention; community OT to support reintegration.",
    },
    guidanceNote:
      "In mental health handovers, focus on function, occupation and recovery goals rather than symptom detail. Highlight the return-to-study aim, the relapse-prevention plan and the supportive home — these guide community OT input.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Advice to family carer of a person with dementia",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Mrs Janet Holloway, daughter and main carer of Mr Walter Holloway",
      taskInstruction:
        "Provide written advice on home safety, daily routine and equipment to support the patient living with dementia.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Walter Holloway, 79. Diagnosis: Alzheimer's disease, moderate stage, 3 years. Referral: home OT assessment after kitchen safety concerns. Function/ADLs: needs prompting to wash and dress; can manage with clothes laid out in order. Forgets the cooker is on; left a tap running and flooded the bathroom. Disorientated at night, has wandered to the front door twice. Eating well when food is prepared. Continence: occasional, improved with timed prompts and clear signage to the toilet. Mobility: steady indoors, no recent falls. Cognition: poor short-term memory, intact long-term memory, enjoys music and gardening. Carer: daughter lives with him, becoming exhausted, asking for practical strategies. Meds: donepezil 10mg ON, amlodipine 5mg OD. Allergies: none known. Plan: advise a consistent daily routine, an isolation device/monitored cooker, removal of clutter, contrasting toilet signage, a door sensor for night safety, meaningful activities (music, gardening), and information on carer support and respite.",
    },
    guidanceNote:
      "Write directly to the carer in plain, supportive language. Group your advice around the real risks — the cooker, night wandering, orientation — and point her to carer support. Avoid clinical jargon she may not follow.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Vocational rehab referral for return to work after back injury",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Bernadette Quill, Vocational Rehabilitation Consultant, Work Health Service",
      taskInstruction:
        "Refer this patient for a vocational assessment and a graded return-to-work plan following a back injury.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Liam Donoghue, 41, scaffolder. Reason for referral: off work 4 months after a lumbar disc prolapse (L5/S1), managed conservatively. Function/ADLs: independent in self-care; pain limits prolonged standing, bending and lifting over ~5kg. Pain settling, no longer radiating to the leg; no red-flag symptoms. Activity: completed a pain-management and graded-activity programme; walking tolerance now 30 minutes. Job demands: heavy manual work — climbing, carrying, working at height. Concerned about job security and finances; low mood related to inactivity. Driving: resumed, comfortable. Medical: otherwise well; ex-smoker. Meds: naproxen 500mg BD PRN, paracetamol PRN. Allergies: codeine (nausea). Social: lives with partner and two children, sole earner. Plan: requesting work-capacity assessment, ergonomic and manual-handling advice, liaison with employer regarding modified or alternative duties, and a phased graded return; OT to continue activity pacing and confidence work.",
    },
    guidanceNote:
      "The vocational service needs the gap between his current capacity and the demands of scaffolding. Contrast what he can now do with the heavy job requirements, and note the psychosocial factors (job-security worry, low mood) that affect return to work.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Transfer to hospice OT for advanced cancer fatigue management",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "transfer",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Ms Verity Ashworth, Occupational Therapist, Greenmeadow Hospice",
      taskInstruction:
        "Hand over this patient's functional needs and goals so hospice OT can support comfort, fatigue management and meaningful activity.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Constance Mbeki, 64. Diagnosis: metastatic ovarian cancer, now palliative; bony and lung metastases. Reason for transfer: moving to day-hospice support. Function/ADLs: independent in self-care on good days but severe cancer-related fatigue; rests most afternoons. Breathless on exertion, manages stairs slowly with one rest. Reduced grip from peripheral neuropathy (chemotherapy-related). Goals expressed: stay at home as long as possible, attend her granddaughter's wedding in 6 weeks, continue painting. Equipment in place: perching stool, raised toilet seat, bed lever. Mood: realistic, values independence and dignity. Medical: pain controlled; mild lymphoedema right leg. Meds: modified-release morphine 30mg BD, pregabalin 75mg BD, dexamethasone 4mg OD, lactulose PRN. Allergies: morphine causes no issues; intolerant of metoclopramide. Social: lives with husband, daughter nearby, carers once daily. Plan: continue energy-conservation and pacing, breathlessness strategies, equipment review, and support to achieve her wedding and painting goals.",
    },
    guidanceNote:
      "Palliative handovers centre on quality of life and the patient's own goals. Lead with fatigue, breathlessness and what matters to her (the wedding, painting) alongside current equipment; keep the disease detail brief and focus on comfort and dignity.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Referral for upper-limb rehab after rheumatoid arthritis flare",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Gretchen Adeyemi, Specialist Hand Therapist, Rheumatology Therapy Service",
      taskInstruction:
        "Refer this patient for hand and upper-limb assessment, joint protection and splinting following a disease flare.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Yolanda Estrada, 55, primary-school administrator. Diagnosis: seropositive rheumatoid arthritis, 9 years. Reason for referral: hand flare with worsening function over 6 weeks. Function/ADLs: difficulty with buttons, jar lids, kettle and writing; dropping objects; struggling at work with typing and filing. Self-care managed slowly. Joints: bilateral wrist and MCP swelling and tenderness, early ulnar drift, morning stiffness ~90 minutes. Pain 6/10. Fatigue prominent. No new deformity warranting surgery yet. Mood: frustrated, worried about keeping her job. Medical: also has hypothyroidism. Meds: methotrexate 20mg weekly, folic acid 5mg weekly, hydroxychloroquine 200mg BD, prednisolone 7.5mg OD (recently increased), levothyroxine 100mcg OD, paracetamol PRN. Allergies: sulfasalazine (rash). Social: lives with husband, works part-time. Plan: requesting joint-protection education, resting/working wrist splints, adaptive equipment (jar opener, ergonomic aids), hand-exercise programme, and workplace advice; OT to support fatigue management.",
    },
    guidanceNote:
      "Focus on the functional impact at home and work and the active joint signs that prompt referral. Note the recent flare and steroid increase, the disease-modifying medication and the sulfasalazine allergy; leave out the unrelated thyroid detail beyond a brief mention.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Discharge advice after stroke-related upper-limb retraining",
    prompt:
      "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Dr Naomi Frankland, General Practitioner, Hartside Health Centre",
      taskInstruction:
        "Inform the GP that OT input is ending and advise on the home programme and equipment to maintain progress.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Reginald Oduya, 70. Diagnosis: right middle cerebral artery ischaemic stroke 9 weeks ago, left-sided weakness (non-dominant). Reason: OT episode of care ending after community rehab. Function/ADLs: now independent in washing and dressing using one-handed techniques and aids (button hook, elastic laces, non-slip mat); manages simple meals with a kettle tipper and a spread board. Left arm: improving — some active shoulder and elbow movement, limited hand function; continuing a home exercise programme and task practice. Mobility: independent with a stick, supervised by physiotherapy separately. Cognition and mood: mild low mood, motivated. Equipment at home: perching stool, grab rail by the back door, bath board. Medical: atrial fibrillation, hypertension, type 2 diabetes. Meds: apixaban 5mg BD, bisoprolol 5mg OD, ramipril 10mg OD, metformin 1g BD, atorvastatin 40mg OD. Allergies: none known. Social: lives with wife, supportive. Plan: continue home exercise programme and one-handed strategies; OT discharged; GP to monitor mood and refer back if function plateaus or declines.",
    },
    guidanceNote:
      "This closes the OT episode — confirm the gains, the home programme to maintain and the equipment in place. Ask the GP to watch the low mood and to re-refer if progress stalls; you need not list the full stroke work-up.",
  },
];
