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
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-discharge-advice-to-gp-following-women-s-health-continence-programme",
    "title": "Physiotherapy — Discharge advice to GP following women's health continence programme",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Emily Hartnett, 35, office administrator. Two children.\nReferred by her GP on 3 March 2026. Discharged 28 August 2026.\n\nPresenting condition:\nStress urinary incontinence since the birth of her second child by vaginal delivery in December 2025.\nSecond-degree perineal tear, repaired at delivery.\n\nInitial assessment, 17 March:\nLeakage on coughing, sneezing, laughing and during exercise classes.\nUsing two pads daily and avoiding the trampoline park with her elder child.\nNo urgency, no nocturia, no faecal incontinence, no prolapse symptoms.\nPelvic floor muscle grade 2 out of 5 on the modified Oxford scale.\nEndurance three seconds, two repetitions only. No co-contraction of the transversus abdominis.\nBladder diary showed a fluid intake of 3.2 litres daily, including four caffeinated drinks, and voiding eleven times a day.\n\nTreatment provided:\nSix sessions over five months.\nSupervised pelvic floor muscle training with digital assessment and biofeedback.\nBladder retraining and caffeine and fluid advice.\nLifting technique for handling both children.\nGraded return-to-exercise programme, moving from low to high impact.\n\nProgress:\nPelvic floor strength now 4 out of 5, endurance eight seconds with ten repetitions.\nLeakage during coughing, sneezing and daily activities has resolved.\nPad use has stopped.\nMinor leakage remains with high-impact running only, and only after about twenty minutes.\nFluid intake reduced to 2 litres with two caffeinated drinks.\n\nMedication:\nNothing relevant. No anticholinergic and no topical oestrogen.\n\nAllergies:\nNone known.\n\nSocial:\nReturns to full-time work in September. Her husband works shifts.\nShe was keen to run a half marathon next spring and this has shaped the programme.\n\nPlan and advice to the GP:\nDischarged with a written maintenance programme — three sets daily, continuing for life.\nGradual return to running, adding no more than ten per cent of distance each week.\nPlease review if the symptoms recur, or if urgency, nocturia, a sensation of prolapse or any bowel symptom develops, as these would need reassessment rather than a repeat of this programme.\nShe is aware she may self-refer back within twelve months.\n",
      "recipient": "Dr Sandra Whitlock, General Practitioner, Bramley Lane Practice",
      "letterType": "advice",
      "taskInstruction": "Update the GP on outcomes of pelvic floor rehabilitation and advise on residual symptoms needing review."
    },
    "guidanceNote": "Report the objective change (Oxford grade 2 to 4, leakage resolved) honestly alongside the residual high-impact symptom — don't overstate a full cure."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-discharge-to-gp-after-lateral-ankle-sprain-rehabilitation",
    "title": "Physiotherapy — Discharge to GP after lateral ankle sprain rehabilitation",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMs Aoife Brennan, 24, recreational netball player. Works as a veterinary receptionist.\nFirst seen 14 July 2026. Discharged 1 September 2026.\n\nInjury:\nGrade II inversion sprain of the right lateral ankle ligament complex, sustained on 12 July while landing from a jump.\nAnterior talofibular and calcaneofibular ligaments involved.\nOttawa ankle rules applied at presentation — no bony tenderness, able to weight-bear four steps, so no radiograph required.\n\nInitial assessment:\nSwelling over the lateral malleolus with bruising tracking into the forefoot.\nWeight-bearing limited and painful; using one crutch.\nDorsiflexion range reduced by 50 per cent compared with the left.\nSingle-leg balance not possible.\nAnterior drawer test positive with a soft end feel. Squeeze and external rotation tests negative, so no syndesmotic injury.\n\nTreatment provided:\nSix sessions over seven weeks.\nInitial protection, ice, compression and elevation with early controlled loading.\nProgressive proprioceptive retraining on stable then unstable surfaces.\nCalf and peroneal strengthening with resistance band and then bodyweight.\nSport-specific drills — cutting, landing and change of direction.\n\nProgress at discharge:\nFull pain-free range of movement, dorsiflexion equal to the left on the lunge test.\nSingle-leg balance thirty seconds with eyes closed.\nSingle hop for distance and triple hop both within five per cent of the uninjured side.\nCalf raise endurance 25 repetitions, matching the left.\nReturned to light netball training two weeks ago with no swelling afterwards.\n\nMedication:\nNone current. Took ibuprofen for the first four days only.\n\nAllergies:\nNone known.\n\nPlan:\nDischarged from physiotherapy.\nHome balance and strengthening programme three times weekly for a further three months; recurrence risk is highest in the first year.\nAdvised to use an ankle brace or taping for her first competitive matches.\nGP review only if recurrent giving way or persistent swelling develops.\n",
      "recipient": "Dr Priya Nair, General Practitioner, Oakfield Surgery",
      "letterType": "discharge",
      "taskInstruction": "Inform the GP that rehabilitation is complete and outline a self-managed maintenance plan."
    },
    "guidanceNote": "A discharge letter for a resolved injury should reassure — keep the maintenance plan and the single condition to return (recurrent instability) clear and brief."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-discharge-to-gp-after-post-stroke-rehabilitation",
    "title": "Physiotherapy — Discharge to GP after post-stroke rehabilitation",
    "prompt": "Using the case notes, write a letter to the patient's GP. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "discharge",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr George Whitlock, 71, retired electrician. Lives with his wife in a bungalow.\nDischarged from community physiotherapy 31 August 2026.\n\nDiagnosis:\nLeft middle cerebral artery ischaemic stroke on 24 March 2026, with right hemiparesis.\nThrombolysed within the window. No haemorrhagic transformation.\n\nPast medical history:\nHypertension.\nAtrial fibrillation, diagnosed 2019.\nType 2 diabetes.\n\nMedication:\nApixaban 5 mg twice daily.\nAmlodipine 10 mg daily.\nMetformin 1 g twice daily.\nAtorvastatin 80 mg at night.\n\nAllergies:\nNone known.\n\nRehabilitation course:\nFour weeks on the inpatient stroke unit, then fourteen weeks of community physiotherapy, twice weekly reducing to fortnightly.\n\nProgress:\nIndependent with all transfers, including from the floor.\nIndependent indoor mobility with a single-point stick.\nWalks 150 metres outdoors with supervision; distance limited by fatigue rather than balance.\nMild residual right foot drop, managed well with an ankle-foot orthosis worn all day.\nRight upper limb — functional grasp returning, used as an assisting hand for dressing and for holding a cup. No shoulder subluxation and no pain.\n\nCurrent status:\nBerg Balance Score 44 out of 56, improved from 28 at the start of community input.\nTen-metre walk 14 seconds with the stick.\nOne fall in June while reaching into a high kitchen cupboard; no injury, and the cupboard has been reorganised.\nIndependent in all personal activities of daily living.\nHis wife assists with showering by preference rather than need.\n\nMood and psychosocial:\nLow at times, particularly regarding driving cessation and the loss of his allotment.\nNo formal mood screening carried out.\n\nPlan and recommendations:\nDischarged — the agreed goals have been met.\nContinue the written home exercise programme, five days a week.\nPlease monitor blood pressure and falls risk; the June fall is the main flag.\nReview the ankle-foot orthosis fit in six months, or sooner if it rubs.\nPlease consider a review of his low mood.\nHe has not resumed driving and is awaiting guidance from the licensing authority.\n",
      "recipient": "Dr Amara Singh, General Practitioner, Eastgate Medical Centre",
      "letterType": "discharge",
      "taskInstruction": "Inform the GP of the patient's discharge from community physiotherapy following stroke rehabilitation and request ongoing monitoring and falls-risk support."
    },
    "guidanceNote": "Frame discharge around what the GP must now monitor — falls risk, low mood, AFO review — not the full rehab timeline. Be specific about the single fall."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-discharge-to-gp-after-total-hip-replacement-rehabilitation",
    "title": "Physiotherapy — Discharge to GP after total hip replacement rehabilitation",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Patricia Donnelly, 69, retired librarian.\nDischarged from physiotherapy 27 August 2026.\n\nCondition:\nEight weeks following left total hip replacement by a posterior approach, performed 2 July 2026 for end-stage osteoarthritis.\nUncemented prosthesis. No intraoperative or postoperative complications.\n\nAssessment at discharge:\nWound fully healed with no discharge and no erythema.\nWalks independently without any aid, indoors and outdoors.\nHip flexion 95 degrees, extension to neutral, abduction strength 4+ out of 5 and improving.\nMinimal residual stiffness on first standing in the morning, easing within ten minutes.\nNo leg-length discrepancy reported. Trendelenburg sign negative.\nObserving posterior hip precautions until twelve weeks, as instructed by the surgical team.\n\nTreatment provided:\nSeven sessions over seven weeks.\nProgressive strengthening of the abductors, quadriceps and extensors.\nGait re-education, progressing from frame to two sticks to one and then to none.\nStair practice with the correct sequence.\nPrecautions education, repeated with her daughter present.\n\nProgress:\nPain-free at rest and on walking; occasional ache after prolonged standing.\nIndependent with stairs and community walking, managing a mile to the shops.\nResumed light household tasks and has returned to her book group.\nOxford Hip Score improved from 14 before surgery to 41 today.\n\nMedication:\nParacetamol as required, now taken perhaps twice a week.\nAlendronic acid weekly for osteoporosis.\nNo opioid since week three.\n\nAllergies:\nNone known.\n\nSocial:\nLives alone in a house with fourteen stairs. A raised toilet seat and perching stool remain in place and can be returned after week twelve.\nHer daughter visits twice weekly.\n\nPlan:\nDischarged from physiotherapy.\nContinue the home strengthening programme daily for at least three further months.\nMaintain hip precautions to twelve weeks, that is until 24 September.\nPlease review if pain, swelling, a new limp or any temperature develops, as these could indicate infection or dislocation.\nRoutine orthopaedic follow-up is scheduled for December.\n",
      "recipient": "Dr Iain MacLeod, General Practitioner, Glenmore Health Centre",
      "letterType": "discharge",
      "taskInstruction": "Inform the GP that post-operative rehabilitation is complete and outline the maintenance plan."
    },
    "guidanceNote": "Even a straightforward discharge should remind the GP of the remaining precaution period and the warning signs (new pain, swelling, limp) that would warrant review."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-referral-to-gp-for-suspected-lumbar-radiculopathy",
    "title": "Physiotherapy — Referral to GP for suspected lumbar radiculopathy",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Daniel Whitford, 47, warehouse operative.\nSelf-referred to physiotherapy on 28 July 2026. Reviewed today, 31 August 2026.\n\nCondition:\nA six-week history of right-sided low back pain radiating into the posterior thigh and the lateral calf.\nOnset was gradual, with no single injury; he lifts and stacks boxes for eight hours a day.\nLeg pain is now worse than the back pain.\n\nInitial assessment, 28 July:\nLumbar flexion restricted by 40 per cent and painful, with deviation to the right.\nStraight leg raise positive on the right at 40 degrees, reproducing the calf pain.\nReduced pinprick sensation over the lateral calf and dorsum of the foot.\nAnkle dorsiflexion strength 4 out of 5.\nAnkle and knee reflexes present and equal at that stage.\nNo saddle anaesthesia, no bladder or bowel disturbance, no bilateral leg symptoms.\n\nTreatment provided:\nFive sessions over four weeks.\nNeural mobilisation, McKenzie extension protocol, core stabilisation and graded activity advice.\nWorkplace advice on lifting and on breaking up prolonged flexion.\n\nFindings today, and the reason for this referral:\nPain overall unchanged.\nNew findings — the right ankle reflex is now absent, having been present in July.\nCalf and dorsiflexion strength has fallen to 3 out of 5.\nHe reports catching his right foot on kerbs and has tripped twice in the past ten days.\nSensory loss now extends into the fourth and fifth toes.\nRed flag questions remain negative today: no saddle sensory change, no urinary hesitancy or retention, no faecal incontinence, no fever, no night pain, no weight loss.\n\nMedication:\nIbuprofen 400 mg as required, taking it most days.\nParacetamol 1 g four times daily.\nNo neuropathic agent.\n\nAllergies:\nPenicillin.\n\nPlan:\nReferred to you for neurological review and consideration of urgent MRI of the lumbar spine.\nThe progressive motor deficit is the concern; the sensory change alone would not have prompted this letter.\nHe has been given written cauda equina safety-netting advice and told to attend the emergency department immediately if any of those symptoms appear.\nAdvised to remain active and to modify, not stop, his work duties; his employer has been informed with his consent.\n",
      "recipient": "Dr Helen Carter, General Practitioner, Riverside Medical Centre",
      "letterType": "referral",
      "taskInstruction": "Refer the patient to the GP for review of worsening neurological signs and possible imaging."
    },
    "guidanceNote": "Foreground the progressive motor deficit (calf weakness, foot drop, lost reflex) — these are the red flags driving the referral, not the original pain."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-referral-to-falls-clinic-for-recurrent-geriatric-falls",
    "title": "Physiotherapy — Referral to falls clinic for recurrent geriatric falls",
    "prompt": "Using the case notes, write a letter to the multidisciplinary falls clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Doreen Pelletier, 82. Lives alone in a first-floor flat with no lift.\nSeen for review 29 August 2026.\n\nCondition:\nThree falls in the past two months.\nThe second, in July, resulted in a right wrist fracture, treated in a cast and now healed.\nAll three falls occurred indoors; two on turning and one getting out of bed at night.\nNo loss of consciousness and no palpitations reported.\n\nAssessment:\nTimed Up and Go 22 seconds with a stick — well above the falls-risk threshold.\nReduced ankle plantarflexor and hip abductor strength bilaterally, 3+ out of 5.\nUnsteady on turning, taking six steps to turn 180 degrees.\nReports dizziness on standing, particularly first thing in the morning; lying and standing blood pressure taken here fell from 148/82 to 118/70 with symptoms.\nVision impaired by bilateral cataracts; she is awaiting surgery on the right.\nHome environment cluttered, with two loose rugs and no rail on the internal stairs.\nFear of falling is now limiting her; she has stopped going to the day centre.\n\nTreatment provided:\nFour sessions of a strength and balance programme over six weeks.\nGait re-education, progressed from a stick to a wheeled walking frame indoors.\nHome exercise programme, which she reports doing three times weekly.\n\nProgress:\nModest gains in strength and in sit-to-stand repetitions.\nContinued unsteadiness on turning.\nPostural dizziness is not improving with exercise alone, which is why this referral is being made.\n\nMedication:\nAmlodipine 10 mg daily.\nBendroflumethiazide 2.5 mg daily.\nZopiclone 7.5 mg at night, taken for several years.\n\nAllergies:\nNone known.\n\nSocial:\nA daughter visits weekly. No care package. She has no personal alarm.\n\nPlan:\nReferred to the falls clinic for a multifactorial assessment.\nSpecifically requested — a medication review, as three of her drugs plausibly contribute, two to postural hypotension and one to night-time sedation; lying and standing blood pressure over a longer period; bone health assessment following the fracture; and expediting of the cataract surgery.\nPhysiotherapy input will continue in parallel.\nAn occupational therapy home hazard assessment and a personal alarm have both been requested.\n",
      "recipient": "Falls Clinic Coordinator, Meadowbank Community Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for comprehensive falls assessment given recurrent falls and multiple risk factors."
    },
    "guidanceNote": "Falls are multifactorial — flag the items outside physiotherapy's remit (sedating medication, postural dizziness, vision) that the clinic needs to address, since exercise alone has not been enough."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-referral-to-hand-therapy-after-complex-distal-radius-fracture",
    "title": "Physiotherapy — Referral to hand therapy after complex distal radius fracture",
    "prompt": "Using the case notes, write a letter to the specialist hand therapy service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMs Bridget Lawson, 52, seamstress.\nSeen 30 August 2026, third session.\n\nCondition:\nSeven weeks following open reduction and internal fixation of a comminuted right distal radius fracture, sustained in a fall on 12 July 2026.\nVolar plate fixation. Cast removed two weeks ago at the fracture clinic.\nShe is right-hand dominant.\n\nAssessment:\nMarked stiffness of the wrist and of all fingers.\nWrist extension 15 degrees, flexion 20 degrees.\nComposite finger flexion — fingertips 3 cm from the distal palmar crease.\nForearm supination 30 degrees, pronation 60 degrees.\nGrip strength 6 kg on the right against 24 kg on the left.\n\nFeatures of concern:\nBurning pain disproportionate to the stage of healing, present at rest and disturbing sleep.\nPersistent swelling of the whole hand extending beyond the fracture site.\nShiny, mottled skin over the dorsum with increased sweating, and the hand is warmer than the left.\nHypersensitivity to light touch — she cannot tolerate a sleeve or bedsheet on the hand.\nNail and hair growth changes noted on the right.\nPain is not confined to a single nerve distribution.\nThese findings meet the Budapest clinical criteria and raise real concern for complex regional pain syndrome.\n\nTreatment provided:\nThree sessions — gentle active range of movement, oedema management with retrograde massage and elevation, graded desensitisation, and a resting splint.\n\nProgress:\nLimited gains in range. Pain and the trophic changes are unchanged or slightly worse.\n\nMedication:\nParacetamol 1 g four times daily.\nAmitriptyline 10 mg at night, started by the GP ten days ago.\n\nAllergies:\nLatex — contact dermatitis. Please use latex-free gloves and splinting materials.\n\nSocial and occupational:\nSelf-employed; has not worked since the injury and is anxious about income.\nLives with her husband, who is assisting with dressing.\n\nPlan:\nReferred to the specialist hand therapy service for intensive management, as early intervention materially changes the outcome in this condition.\nMirror therapy and graded motor imagery are likely to be indicated.\nDesensitisation and oedema control will continue here in the meantime.\nThe GP has been copied in regarding analgesia and possible pain clinic referral.\n",
      "recipient": "Specialist Hand Therapy Service, Upper Limb Unit, Croftwell Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for specialist hand therapy due to stiffness and suspected complex regional pain syndrome."
    },
    "guidanceNote": "Flag the CRPS warning features (disproportionate burning pain, skin/temperature changes, hypersensitivity) prominently — they change the urgency and the nature of the specialist input required."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-referral-to-orthopaedic-surgeon-for-non-improving-knee",
    "title": "Physiotherapy — Referral to orthopaedic surgeon for non-improving knee",
    "prompt": "Using the case notes, write a letter to the orthopaedic surgeon. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMs Hannah Pierce, 34, primary school teacher.\nFirst seen 15 June 2026. Reviewed today, 31 August 2026.\n\nPresenting condition:\nRight knee pain and intermittent locking for four months.\n\nMechanism:\nTwisting injury while pivoting during recreational netball on 2 May 2026.\nShe felt a pop and had immediate swelling within two hours, which is significant.\n\nRelevant history:\nNo previous knee injury or surgery.\nNon-smoker. Body mass index 24. No diabetes and no inflammatory joint disease.\nNo family history of early joint replacement.\n\nMedication:\nIbuprofen 400 mg as required, taken before sport and after long days.\nParacetamol as required.\n\nAllergies:\nPenicillin — rash.\n\nInitial assessment:\nEffusion, graded moderate on the sweep test.\nMedial joint line tenderness, well localised.\nMcMurray test positive medially with a palpable click.\nRange of movement 5 to 110 degrees, with a lack of terminal extension.\nQuadriceps inhibition with an extension lag; manual muscle testing 4 out of 5.\nLachman, anterior drawer and pivot shift all negative, so the cruciates appear intact.\nCollateral ligaments stable.\n\nTreatment provided:\nTwelve sessions over ten weeks.\nProgressive quadriceps and hamstring strengthening.\nRange of movement work, proprioceptive retraining, taping and activity modification.\n\nProgress:\nRange of movement now 0 to 130 degrees.\nStrength 4+ out of 5, with the extension lag resolved.\nHowever, mechanical locking persists two or three times weekly, each episode needing her to manipulate the knee to unlock it.\nRecurrent effusion after any activity beyond walking.\nOngoing instability descending stairs, which she describes as the knee catching rather than giving way.\nUnable to return to sport. Working modified duties, seated for playground supervision.\n\nPlan:\nConservative management has plateaued over the last four weeks despite good compliance.\nThe persistent mechanical symptoms with a positive McMurray suggest a medial meniscal tear, possibly a displaced bucket-handle fragment.\nReferred for orthopaedic review with a view to MRI of the right knee.\nStrengthening will continue in the meantime so that she is well prepared should surgery be offered.\n",
      "recipient": "Mr Daniel Okafor, Orthopaedic Surgeon, Riverside General Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for orthopaedic assessment of a suspected internal derangement of the right knee that has not responded to conservative physiotherapy."
    },
    "guidanceNote": "Lead with the mechanical locking and failed conservative trial — those justify the referral. Omit the resolved ROM details unless they support the plateau."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-referral-to-orthopaedic-team-for-suspected-rotator-cuff-tear",
    "title": "Physiotherapy — Referral to orthopaedic team for suspected rotator cuff tear",
    "prompt": "Using the case notes, write a letter to the orthopaedic shoulder team. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Raymond Fletcher, 58, self-employed painter and decorator.\nFirst seen 7 July 2026. Reviewed 28 August 2026.\n\nCondition:\nRight shoulder pain and weakness following a fall onto an outstretched arm on 20 June 2026, tripping on a dust sheet.\nHe is right-hand dominant.\nRadiograph at the time showed no fracture and no dislocation.\n\nAssessment:\nActive abduction limited to 70 degrees, with a painful arc between 70 and 110 degrees when assisted.\nPassive range near full, so the restriction is not capsular.\nEmpty can test positive and weak.\nExternal rotation lag sign positive — he cannot hold the arm in external rotation and it drops back by about 30 degrees.\nBelly press negative, so subscapularis appears intact.\nDeltoid and supraspinatus fossa wasting visible on inspection.\nNight pain waking him three or four times, unable to lie on the right side.\nNo neck pain and no radicular symptoms; cervical screen negative.\n\nTreatment provided:\nSix sessions over seven weeks.\nGraded loading within available range, scapular control work, soft tissue treatment and activity modification.\nSleep positioning advice with a pillow support.\n\nProgress:\nPain slightly improved at rest.\nWeakness persists and the external rotation lag is unchanged, which is the key finding.\nUnable to return to any overhead work.\n\nMedication:\nParacetamol 1 g four times daily.\nTopical anti-inflammatory gel twice daily.\nNo oral anti-inflammatory because of his allergy.\n\nAllergies:\nAspirin — wheeze. Avoid oral non-steroidal anti-inflammatory drugs.\n\nSocial and occupational:\nSelf-employed with no sick pay; he has not worked for ten weeks and is under financial pressure.\nLives with his wife. Non-smoker, drinks approximately ten units weekly.\n\nPlan:\nReferred to the orthopaedic shoulder service for assessment and imaging, ultrasound or MRI.\nA positive external rotation lag with wasting and failure to progress over seven weeks of appropriate loading points to a full-thickness tear, and outcomes for repair are time-dependent in a working man of this age.\nPain-management and scapular exercises will continue pending review.\nThe occupational impact is flagged for consideration in prioritisation.\n",
      "recipient": "Mr Stephen Locke, Consultant Orthopaedic Surgeon, Shoulder Clinic, Eastvale Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for orthopaedic assessment and imaging of a non-responding shoulder."
    },
    "guidanceNote": "Name the special test findings that signal a structural tear (lag sign, painful arc, weakness) — they justify imaging better than a general statement that physiotherapy 'did not work'."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-referral-to-paediatric-service-for-developmental-motor-delay",
    "title": "Physiotherapy — Referral to paediatric service for developmental motor delay",
    "prompt": "Using the case notes, write a letter to the paediatric physiotherapy service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMaster Leo Sutcliffe, 18 months, accompanied by his mother.\nSeen 25 August 2026, second session.\n\nReason for referral:\nGross motor delay, raised by the health visitor at the twelve-month developmental check and again at fifteen months.\n\nCondition:\nNot yet pulling to stand and not cruising along furniture.\nBottom-shuffles rather than crawling, and has done so since ten months.\nSits independently since nine months.\nRolled at seven months.\n\nAssessment:\nLow central tone with a rounded posture in sitting.\nDelayed protective reactions — no forward parachute and an incomplete sideways save.\nTends to W-sit, and returns to it whenever repositioned.\nReduced weight-bearing through the legs in supported standing; he lifts his feet rather than taking load.\nAnkles are held in slight plantarflexion and there is mild hypermobility at the knees.\nReaches, grasps and transfers appropriately for age; a neat pincer grip is present.\nSociable, makes good eye contact, babbles and uses four or five words.\n\nBirth and medical history:\nTerm delivery, birth weight 3.4 kg, no neonatal problems.\nNo seizures. Hearing screen passed. No regression of any skill.\n\nFamily history:\nAn older sister walked at eighteen months. No neuromuscular disease known in the family.\n\nTreatment provided:\nTwo sessions — parental advice on positioning, play activities to encourage weight-bearing through the legs, and strategies to discourage W-sitting.\nA written home programme with photographs was given.\n\nProgress:\nEngaging well and tolerating standing practice for short periods.\nHis mother is following the programme consistently.\nTone and lower-limb loading need specialist monitoring, and the pattern of delay is beyond what a general programme should manage alone.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nSocial:\nLives with both parents and one older sibling.\nAttends nursery two mornings a week.\nHis mother is worried and has asked directly whether this is cerebral palsy; she has been told that this needs specialist assessment rather than reassurance from me.\n\nPlan:\nReferred to the paediatric physiotherapy service for ongoing developmental assessment.\nOrthotic review may be needed for the ankle position.\nA family-centred programme and, in my view, a paediatrician's opinion on the cause of the low tone are both indicated.\n",
      "recipient": "Paediatric Physiotherapy Service, Children's Development Centre, Linfield",
      "letterType": "referral",
      "taskInstruction": "Refer a child with gross motor delay for specialist paediatric assessment and ongoing input."
    },
    "guidanceNote": "For a paediatric referral, balance the concern (tone, delayed milestones, W-sitting) with the reassuring findings (good fine motor and social skills) so the specialist gets a full picture of the child."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-referral-to-rheumatologist-for-suspected-inflammatory-arthritis",
    "title": "Physiotherapy — Referral to rheumatologist for suspected inflammatory arthritis",
    "prompt": "Using the case notes, write a letter to the consultant rheumatologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Lillian Osei, 38, primary school teacher.\nReferred to physiotherapy by her GP on 21 July 2026 with hand and wrist pain attributed to overuse.\nSeen three times. This letter written 30 August 2026.\n\nFindings on assessment:\nSymmetrical swelling of the second and third metacarpophalangeal joints and several proximal interphalangeal joints, both hands.\nThe distal interphalangeal joints are spared.\nBoth wrists swollen and warm.\nEarly-morning stiffness lasting over ninety minutes, every day, easing with movement.\nGrip strength markedly reduced — 9 kg right and 8 kg left.\nSqueeze test across the metacarpophalangeal joints positive bilaterally.\nNo nodules, no nail changes, no psoriasis, no Raynaud phenomenon.\n\nAdditional symptoms she reports:\nMarked fatigue for about four months; she sleeps in the afternoon at weekends.\nIntermittent swelling of the left knee, twice in three months, each lasting a week.\nNo fever, no weight loss, no rash, no mouth ulcers, no eye symptoms.\nNo preceding infection and no recent travel.\n\nWhy this does not fit overuse:\nThe distribution is symmetrical and inflammatory rather than related to a specific task.\nThe morning stiffness lasts far longer than mechanical stiffness would.\nSymptoms are worse at rest and better with activity, which is the reverse of an overuse pattern.\nThere has been no response to load management.\n\nTreatment provided:\nThree sessions — joint protection education, resting splints for night use, and graded exercise within comfort.\n\nProgress:\nMinimal response over six weeks.\n\nMedication:\nParacetamol 1 g four times daily.\nNaproxen 250 mg twice daily, started by the GP, with limited benefit.\nNo corticosteroid and no disease-modifying agent.\n\nAllergies:\nCodeine — nausea.\n\nSocial:\nLives with her husband and two children aged six and nine.\nStruggling with buttons, jars and writing on the board at school.\n\nPlan:\nReferred to rheumatology for assessment of possible inflammatory arthritis, with serological investigation — rheumatoid factor, anti-CCP antibodies, inflammatory markers — and imaging as indicated.\nThe duration of symptoms is now approaching the point where early treatment matters, so I would ask that this be seen soon.\nJoint protection and splinting will continue here in the meantime.\n",
      "recipient": "Dr Marcus Hale, Consultant Rheumatologist, City General Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for specialist assessment of a suspected inflammatory rather than mechanical joint condition."
    },
    "guidanceNote": "The clinical reasoning is the point here — emphasise the features (symmetry, prolonged morning stiffness, systemic signs) that pushed you away from a mechanical diagnosis toward referral."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-referral-to-sports-medicine-for-suspected-acl-deficiency",
    "title": "Physiotherapy — Referral to sports medicine for suspected ACL deficiency",
    "prompt": "Using the case notes, write a letter to the sports medicine consultant. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Callum Reyes, 21, semi-professional footballer. Also works part-time as a delivery driver.\nFirst seen 5 July 2026. Reviewed 29 August 2026.\n\nCondition:\nRight knee injury sustained on 28 June 2026 during a non-contact pivot while turning with the ball.\nHe reported an audible pop and had immediate swelling within one hour, which points to haemarthrosis.\nUnable to continue playing.\n\nAssessment:\nEffusion has now settled fully.\nLachman test positive, grade 2, with a soft end feel.\nAnterior drawer positive.\nPivot shift produces marked apprehension and he does not allow it to be completed.\nQuadriceps wasting measured at 2 cm circumference difference, 10 cm above the patella, compared with the left.\nFull range of movement regained, 0 to 140 degrees.\nMedial and lateral joint lines non-tender.\nMcMurray negative, though a meniscal tear cannot be excluded clinically.\nCollateral ligaments stable.\n\nFunctional findings:\nGives way on cutting and rotational movement — five episodes since the injury, two of them during rehabilitation drills.\nStraight-line running and cycling are symptom-free.\nSingle hop for distance 82 per cent of the left side; below the 90 per cent threshold.\n\nTreatment provided:\nEight sessions over eight weeks.\nSwelling management initially, then quadriceps and hamstring strengthening, and proprioceptive retraining.\nCompliance has been excellent; he attends the gym four times weekly.\n\nProgress:\nStrength improving steadily and range is full.\nRecurrent instability on rotation nonetheless prevents any return to sport, and each giving-way episode risks secondary meniscal and chondral damage.\n\nMedication:\nNone regular.\n\nAllergies:\nNone known.\n\nSocial and occupational:\nPlays at a level where the club has asked for a timeline.\nLives with his parents. Non-smoker.\n\nPlan:\nReferred to sports medicine for MRI of the right knee and a surgical opinion regarding anterior cruciate ligament reconstruction.\nGiven his age, his sport and the demonstrated rotational instability, reconstruction is likely to be considered.\nPrehabilitation strengthening will continue here, since preoperative quadriceps strength predicts the postoperative outcome.\nHe has been advised to avoid all pivoting sport in the meantime, and the reason has been explained.\n",
      "recipient": "Dr Naomi Forsythe, Consultant in Sport and Exercise Medicine, Pinehurst Clinic",
      "letterType": "referral",
      "taskInstruction": "Refer a young athlete with persistent knee instability for specialist assessment and imaging."
    },
    "guidanceNote": "For an athlete, link the instability on rotation directly to the return-to-sport goal — the functional impact, not just the positive Lachman test, is what makes surgical referral appropriate."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-transfer-to-cardiac-rehabilitation-after-coronary-bypass-surgery",
    "title": "Physiotherapy — Transfer to cardiac rehabilitation after coronary bypass surgery",
    "prompt": "Using the case notes, write a letter to the cardiac rehabilitation physiotherapy team. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Tomasz Wójcik, 64, retired electrician.\nSurgery 25 August 2026. This handover written 31 August 2026, day six.\n\nCondition:\nElective coronary artery bypass graft, triple vessel, with left internal mammary artery to the left anterior descending and two saphenous vein grafts.\nPreoperative ejection fraction 52 per cent.\nNo perioperative myocardial infarction. A short run of atrial fibrillation on day two, self-terminating, not recurred.\n\nAssessment today:\nMedian sternotomy healing well, dry, with no discharge and no clicking or instability on gentle testing.\nBreath sounds clear throughout, no added sounds.\nEffective cough using a sternal support cushion, taught on day one.\nOxygen saturation 96 per cent on air at rest and 94 per cent on exertion.\nIndependent mobilising 100 metres on the flat and one flight of stairs with monitoring.\nHeart rate 78 at rest rising to 96 on the stair climb, returning to baseline within three minutes.\nNo chest pain, no dizziness and no arrhythmia on exertion.\nBorg rating of perceived exertion 11 to 12 during mobilising.\n\nTreatment provided:\nInpatient airway clearance and incentive spirometry.\nSternal precautions education, given to him and to his wife with a written sheet.\nProgressive mobilisation from bed to chair on day one, to corridor walking and stairs by day five.\n\nProgress:\nTolerating activity well and observing sternal precautions correctly.\nMotivated and keen to resume gardening, which has been used to frame the goals.\nLeg wound at the vein harvest site slightly swollen; elevation advised.\n\nMedication:\nAspirin 75 mg daily.\nBisoprolol 2.5 mg daily.\nAtorvastatin 80 mg at night.\nRamipril 2.5 mg daily.\n\nAllergies:\nNone known.\n\nSocial:\nLives with his wife in a two-storey house. A son lives nearby.\nEx-smoker, stopped at the time of listing.\n\nPlan:\nTransfer to phase III cardiac rehabilitation for graded aerobic conditioning, education and risk-factor management.\nSternal precautions for a further six weeks — no lifting over 5 kg, no pushing or pulling, and no driving until reviewed.\nHome walking programme provided for the interim, starting at ten minutes twice daily.\n",
      "recipient": "Cardiac Rehabilitation Team, Phase III Programme, Harborough Hospital",
      "letterType": "transfer",
      "taskInstruction": "Hand over a post-surgical patient for supervised outpatient cardiac rehabilitation."
    },
    "guidanceNote": "Confirm the safety-critical items the rehab team must respect — sternal precautions, wound stability and the patient's current exercise tolerance — before listing future goals."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-transfer-to-community-respiratory-team-after-copd-exacerbation",
    "title": "Physiotherapy — Transfer to community respiratory team after COPD exacerbation",
    "prompt": "Using the case notes, write a letter to the community respiratory physiotherapy team. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr George Adeyemi, 71, retired bus driver. Lives with his wife.\nAdmitted 26 August 2026. Discharge planned 1 September 2026.\n\nCondition:\nAcute exacerbation of chronic obstructive pulmonary disease secondary to a chest infection.\nCOPD diagnosed 2015, FEV1 48 per cent predicted at last spirometry.\nThis is his second admission in twelve months.\n\nAssessment on admission:\nProductive cough with green sputum, approximately 30 mL daily.\nCoarse crackles at the right base with widespread expiratory wheeze.\nOxygen saturation 90 per cent on 2 litres via nasal cannula; target range 88 to 92 per cent.\nBreathless on minimal exertion, MRC dyspnoea grade 5 acutely.\nChest radiograph showed right basal consolidation.\n\nTreatment provided:\nAirway clearance using the active cycle of breathing technique, taught and now performed independently.\nPositioning for ease of breathing and forward-lean positions demonstrated.\nGraded mobilisation from bed to chair, then corridor walking.\n\nProgress:\nChest markedly clearer; sputum now scant and mucoid.\nOxygen saturation 93 per cent on air at rest, dropping to 89 per cent on walking and recovering within two minutes.\nWalking 30 metres with a wheeled frame and one rest, deconditioned after a five-day admission.\nRemains breathless climbing stairs and needs a rest halfway on his eight stairs at home.\nIndependent with airway clearance and using the sputum chart.\nBaseline function before admission was independent walking to the corner shop, about 200 metres.\n\nMedication:\nInhaled tiotropium once daily.\nSalbutamol as required, inhaler technique checked and corrected — he was not shaking the device.\nCompleting a course of oral amoxicillin, two days remaining.\nNo home oxygen and no nebuliser.\n\nAllergies:\nNone known.\n\nSmoking:\nEx-smoker, stopped 2015 after forty years.\n\nSocial:\nTwo-storey house with a downstairs toilet.\nHis wife is fit and provides support. No package of care.\n\nPlan:\nTransfer to the community respiratory team for pulmonary rehabilitation, stair practice and endurance progression back to his baseline.\nReinforcement of self-management, including a rescue pack and an action plan, which he does not currently have.\nVaccination status to be checked.\n",
      "recipient": "Community Respiratory Physiotherapy Team, Northgate Health Centre",
      "letterType": "transfer",
      "taskInstruction": "Hand over a patient recovering from an acute exacerbation for ongoing home-based respiratory rehabilitation."
    },
    "guidanceNote": "A transfer letter must give the next team a working baseline — state current SpO2, mobility distance and what the patient can already do independently, not just the diagnosis."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PHYSIOTHERAPY",
    "slug": "wri-physiotherapy-transfer-to-neuro-rehabilitation-unit-after-guillain-barre-syndrome",
    "title": "Physiotherapy — Transfer to neuro-rehabilitation unit after Guillain-Barré syndrome",
    "prompt": "Using the case notes, write a letter to the neuro-rehabilitation unit physiotherapist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMs Hannah Choi, 33, graphic designer.\nAdmitted 10 August 2026. This transfer summary written 31 August 2026.\n\nCondition:\nGuillain-Barré syndrome. Ascending weakness beginning 8 August, preceded by a diarrhoeal illness two weeks earlier.\nIntubated on day three for respiratory muscle weakness with a falling vital capacity.\nTreated with intravenous immunoglobulin.\nWeaned from ventilatory support on 23 August and extubated the same day.\n\nAssessment:\nDistal lower-limb power 2 out of 5, proximal lower limb 3 out of 5.\nUpper limbs 3 to 4 out of 5, weaker distally.\nReflexes absent at both ankles and reduced at the knees.\nReduced light touch and pinprick sensation in a stocking distribution to mid-calf.\nSitting balance fair — unsupported for ten minutes with supervision.\nUnable to stand independently; stands with two assistants and a frame for thirty seconds.\nFatigues rapidly; sessions limited to fifteen minutes with rests.\nVital capacity now 2.6 litres and stable over five days.\nNo bulbar weakness; swallow assessed and normal diet resumed.\n\nTreatment provided:\nRespiratory care and cough assist during the ventilated period.\nPassive and then active-assisted movement of all four limbs.\nSitting tolerance building, progressed from ten degrees of tilt to full sitting.\nAnkle splints worn overnight to prevent foot contracture.\nPressure area care in conjunction with nursing.\n\nProgress:\nRespiratory status stable, no oxygen required.\nSitting unsupported for ten minutes, up from two minutes a week ago.\nEarly return of proximal strength, particularly hip flexion.\nNeuropathic pain in the feet limits tolerance of the splints; she manages about six hours.\n\nMedication:\nGabapentin for neuropathic pain, dose being titrated.\nProphylactic enoxaparin daily.\n\nAllergies:\nNone known.\n\nSocial:\nLives alone in a first-floor flat with no lift; this will need addressing before discharge home.\nHer parents live two hours away and are visiting daily.\nHer mood has been low this week and she asked whether she will walk again.\n\nPlan:\nTransfer to the neuro-rehabilitation unit for intensive multidisciplinary input — strengthening, standing practice, gait re-education and fatigue management.\nOveractivity in the early recovery phase can be counterproductive, so pacing should be built into the programme.\nOccupational therapy home assessment will be needed in due course.\n",
      "recipient": "Senior Physiotherapist, Regional Neuro-rehabilitation Unit, Westbrook Hospital",
      "letterType": "transfer",
      "taskInstruction": "Hand over an early-recovery patient for intensive inpatient neurological rehabilitation."
    },
    "guidanceNote": "Give the receiving neuro team a precise functional and motor baseline (graded power, balance tolerance, fatigue) — recovery tracking depends on accurate starting figures."
  }
];
