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
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-aac-funding-and-support-referral-for-a-child-with-cerebral-palsy",
    "title": "Speech Pathology — AAC funding and support referral for a child with cerebral palsy",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMaster Daniel Petrov, 8 years 4 months.\nReviewed 27 August 2026. Known to this service since 2021.\n\nDiagnosis:\nSpastic quadriplegic cerebral palsy, GMFCS level V.\nSevere dysarthria with markedly reduced speech intelligibility — under 10 per cent to unfamiliar listeners.\n\nCognition and receptive language:\nReceptive language assessed within the functional range using eye-gaze responses on a two-choice and then four-choice array.\nDemonstrates clear and consistent yes and no responses.\nMakes choices reliably and shows humour and preference.\nFormal standardised assessment is not possible, but there is no reason to consider him cognitively impaired at the level his speech would suggest.\n\nVision:\nFunctional. Reviewed by orthoptics in March; no significant field loss.\nUses eye-gaze access reliably in trials, with calibration achieved on four of four attempts.\n\nCurrent communication:\nLow-tech picture board with 24 symbols, vocalisations, facial expression and eye pointing.\nUnderstood well by his mother and by his class aide.\nFrequently misunderstood outside the family, which he finds distressing; his mother reports he has begun to stop trying with unfamiliar adults.\n\nSeating and access:\nCustom wheelchair with good head and trunk support, reviewed by the wheelchair service in May.\nHead control adequate for sustained eye-gaze access at a 60 cm distance.\nUpper limb access not viable because of dystonic movement.\n\nPast medical history:\nEpilepsy, well controlled, last seizure fourteen months ago.\nGastro-oesophageal reflux.\n\nMedication:\nSodium valproate twice daily.\nOmeprazole 10 mg daily.\n\nAllergies:\nNone known.\n\nAssessment:\nTrialled an eye-gaze speech-generating device over four sessions.\nNavigated pages accurately by session two.\nGenerated three and four-word messages by session four, including a spontaneous request and a joke.\nHigh engagement; he refused to stop at the end of two sessions.\n\nContext:\nSchool supportive; the class teacher and aide have both observed a session and are willing to implement.\nFamily committed to daily use and have space and power at home.\n\nPlan:\nRequesting a formal AAC assessment, an extended device trial and a funding application.\nOngoing speech pathology to provide implementation training and aided language modelling across home and school.\nDelay matters here — he is at the age where communication failure begins to shape behaviour and self-image.\n",
      "recipient": "The AAC Coordinator, Statewide Assistive Technology Service",
      "letterType": "referral",
      "taskInstruction": "Refer this child for assessment, trial and funding of a high-tech augmentative and alternative communication system."
    },
    "guidanceNote": "Emphasise the successful eye-gaze trial and the evidence of preserved comprehension — funding bodies need proof the device is both accessible and warranted."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-aphasia-community-team-referral-after-left-mca-stroke",
    "title": "Speech Pathology — Aphasia community team referral after left MCA stroke",
    "prompt": "Using the case notes, write a letter to the community speech pathologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Trevor Aldous, 68, right-handed, retired postman.\nAdmitted 18 August 2026. This referral written 1 September 2026, day fourteen.\n\nDiagnosis:\nLeft middle cerebral artery ischaemic stroke.\nThrombolysed within the window; no haemorrhagic transformation.\n\nLiving situation:\nLives with his wife, who is his primary support and is fit and well.\nTwo adult children living within ten miles.\nTwo-storey house, no adaptations needed.\n\nPast medical history:\nHypertension.\nAtrial fibrillation, diagnosed 2021 — the likely source.\nType 2 diabetes.\n\nMedication:\nApixaban 5 mg twice daily.\nRamipril 5 mg daily.\nMetformin 1 g twice daily.\nAtorvastatin 80 mg at night.\n\nAllergies:\nPenicillin — rash.\n\nLanguage assessment:\nExpressive aphasia of Broca type.\nComprehension relatively preserved for single-stage commands; breaks down at two and three stages and with complex grammar.\nNaming markedly impaired — 12 of 60 on the Boston Naming Test, with phonemic cues helping in about half.\nReading of single words intact; sentence-level reading reduced.\nWriting telegraphic, content words only.\nRepetition impaired.\nMild verbal apraxia with groping on multisyllabic words.\n\nSwallowing:\nNo dysphagia on bedside assessment on day one and again on day ten.\nCleared for a full normal diet and thin fluids.\nMild right facial weakness with no oral residue.\n\nCommunication and mood:\nUses single words with gesture, and draws when stuck.\nVisibly frustrated by word-finding difficulty; he thumped the table twice during assessment.\nMotivated and attends every session.\nNo formal mood screen; low mood should be monitored, as it is common at this stage and treatable.\n\nGoals, set with him and his wife:\nTo hold a conversation with his grandchildren, aged four and seven.\nTo use the telephone.\nTo order in a café himself.\n\nPlan:\nTwice-weekly outpatient therapy — picture naming with semantic and phonological cueing, and script practice built around his own goals.\nSupported conversation training for his wife, who is keen to attend and who currently answers for him.\nReview at six weeks with repeat naming measures.\n",
      "recipient": "Ms Carol Whitfield, Community Speech Pathologist, Eastbrook Community Health Centre",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for ongoing community-based aphasia rehabilitation following acute inpatient discharge."
    },
    "guidanceNote": "Comprehension is relatively preserved, so don't imply global aphasia — be precise about the expressive profile and what the community clinician should continue."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-childhood-stammer-referral-to-paediatric-slp-clinic",
    "title": "Speech Pathology — Childhood stammer referral to paediatric SLP clinic",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMaster Liam Okoro, 4 years 6 months.\nSeen 26 August 2026 with both parents.\nReferred by the general practitioner at the parents' request.\n\nHistory:\nOnset of disfluency at around three years of age, so approximately eighteen months' duration.\nGradually increasing in frequency and in effort over the past six months rather than settling.\nNo period of remission longer than a fortnight.\n\nFeatures observed and reported:\nPart-word repetitions — three to five iterations, for example \"b-b-b-ball\".\nSound prolongations of one to two seconds.\nOccasional silent blocks with no airflow.\nVisible facial tension, eye closure and jaw tremor during blocks.\nSome avoidance of speaking — he now asks his older sister to order for him.\nStammering counted at 9 per cent of syllables in a ten-minute play sample.\n\nFamily history:\nA paternal uncle stammers into adulthood.\nNo other family history and no recovery history to draw on.\n\nDevelopmental history:\nOtherwise typical. All milestones met.\nHearing screen passed at birth and again at three years.\nLanguage skills appear age-appropriate on informal assessment.\nNo regression of any skill.\n\nSocial and educational:\nAttends kindergarten five mornings weekly.\nHis teacher reports he is becoming reluctant to answer in group time and has twice said he does not want to go.\nPeers have occasionally commented on his speech.\n\nParental concern:\nHigh. His mother reports he said \"my words get stuck\" and cried about it last month.\nBoth parents are anxious and have been telling him to slow down and take a breath, which was gently addressed today.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nPrevious input:\nNone. No prior speech pathology contact.\n\nPlan:\nRequesting assessment for the Lidcombe Program or a comparable early-intervention approach.\nParent training and monitoring advised.\nThe duration of over twelve months, the increasing physical tension, the emerging avoidance and the awareness he has expressed together make this a case for timely rather than watchful review; natural recovery is less likely once these features appear.\n",
      "recipient": "The Paediatric Speech Pathology Team, Northgate Children's Therapy Service",
      "letterType": "referral",
      "taskInstruction": "Refer this child for specialist assessment and management of developmental stuttering."
    },
    "guidanceNote": "Highlight the risk factors (duration over a year, family history, rising tension, emerging avoidance) — these justify prioritising the referral."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-cognitive-communication-referral-after-traumatic-brain-injury",
    "title": "Speech Pathology — Cognitive-communication referral after traumatic brain injury",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Jaymon Reeves, 24, apprentice electrician.\nDischarging from inpatient rehabilitation on 3 September 2026.\n\nMechanism and diagnosis:\nMotorcycle accident on 21 July 2026.\nSevere traumatic brain injury with frontal and temporal contusions.\nInitial Glasgow Coma Scale 7. Ventilated for four days.\nPost-traumatic amnesia of approximately eighteen days.\nNow medically stable.\n\nPast medical history:\nNothing significant. No previous head injury.\n\nMedication:\nLevetiracetam 500 mg twice daily for seizure prophylaxis.\nParacetamol as required.\n\nAllergies:\nNone known.\n\nAssessment:\nLanguage structurally intact — naming, repetition, comprehension and reading all within normal limits on formal testing.\nThe difficulties are cognitive-communicative rather than linguistic.\nReduced sustained and divided attention; loses the thread of a conversation after about three minutes.\nImpaired verbal memory — recalls two of ten words at delay.\nTangential and disinhibited conversation, including inappropriate personal comments to unfamiliar staff.\nPoor topic maintenance and difficulty taking turns.\nReduced insight into his errors; he reports no communication problems at all.\nImpulsive responses, answering before the question is finished.\nReading and writing slowed by attention and fatigue rather than by skill loss.\n\nSwallowing:\nSafe. Full normal diet, no restrictions.\n\nFatigue:\nFatigues quickly; tolerates 30-minute sessions with a break, and performance falls sharply after that.\n\nSocial:\nLives with his parents, who have been present throughout and are realistic.\nGirlfriend supportive and attending sessions.\nHis stated goal is to return to his apprenticeship; his employer has kept the position open.\n\nPlan:\nOutpatient therapy targeting attention in conversation, conversational pragmatics and turn-taking, and compensatory memory strategies using a diary and phone reminders.\nCommunication-partner education for his family and, with consent, for his employer and supervisor.\nCoordination with occupational therapy and neuropsychology; the insight problem is the limiting factor for all three disciplines.\nStaged return to work, not before a formal work assessment.\nInsight and fatigue to be reviewed at every session, as both change the plan.\n",
      "recipient": "Ms Rebecca Tan, Speech Pathologist, Community Rehabilitation Team",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for ongoing management of cognitive-communication difficulties following traumatic brain injury."
    },
    "guidanceNote": "Stress that language is intact and the issue is cognitive-communication — this guides the community clinician toward pragmatics and strategy work rather than aphasia therapy."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-communication-advice-to-nursing-staff-for-advanced-dementia",
    "title": "Speech Pathology — Communication advice to nursing staff for advanced dementia",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nResident:\nMr Stanley Ovenden, 79.\nReviewed on the unit, 28 August 2026, at the request of the nursing team.\n\nDiagnosis:\nAdvanced Alzheimer's dementia, diagnosed 2018.\n\nReason for review:\nStaff report difficulty communicating with him and concerns at mealtimes, including two episodes of coughing during lunch last week.\n\nPast medical history:\nIschaemic heart disease.\nOsteoarthritis.\nPrevious transient ischaemic attack in 2019.\n\nMedication:\nDonepezil 10 mg daily.\nAspirin 75 mg daily.\nParacetamol regularly for joint pain.\n\nAllergies:\nNone known.\n\nCommunication assessment:\nComprehension limited to short, familiar phrases in context.\nExpressive output reduced to single words and stock phrases — \"all right\", \"thank you love\".\nResponds well to gesture, tone of voice and visual cues.\nRecognises familiar carers and settles with them; becomes agitated with agency staff.\nHearing aid in the right ear; the battery was flat at the time of review, which is likely contributing.\n\nSwallowing assessment:\nBedside assessment shows mild oral-phase delay.\nHolds food in the mouth for up to thirty seconds before initiating.\nOccasional throat clearing on thin fluids.\nNo overt aspiration observed, but he is at risk if rushed or if fed while distracted.\nEats best with prompting, with familiar foods, and when someone sits at his eye level.\nNo chest infections in the past year and weight stable.\n\nRecommendations for communication:\nShort simple sentences, one idea at a time.\nOne instruction at a time; wait, then repeat the same words rather than rephrasing.\nAllow at least ten seconds for a response.\nReduce background noise — the television is on during meals and should be off.\nUse visual and gestural cues, and approach from the front at eye level.\nCheck the hearing aid daily.\n\nRecommendations for meals:\nUpright seating at 90 degrees, feet supported.\nUnhurried pace; one mouthful at a time with a verbal prompt to swallow.\nRegular-texture diet with thin fluids continued for now.\nSupervise every meal and watch for coughing, wet voice or a change in breathing.\nOral care after each meal.\n\nPlan:\nReview in six weeks, or sooner if swallowing deteriorates, if he develops a chest infection, or if weight falls.\n",
      "recipient": "The Clinical Care Coordinator, Willowdene Dementia Care Unit",
      "letterType": "advice",
      "taskInstruction": "Provide communication and mealtime strategies to support staff caring for this resident with advanced dementia."
    },
    "guidanceNote": "Practical, staff-facing strategies are the point — present communication and mealtime tips clearly, and flag the swallow-monitoring triggers without overstating aspiration risk."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-dietitian-referral-for-unintentional-weight-loss-with-dysphagia",
    "title": "Speech Pathology — Dietitian referral for unintentional weight loss with dysphagia",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Doris Pemberton, 77. Lives alone with daily home support.\nReviewed 29 August 2026.\n\nDiagnosis:\nDysphagia secondary to progressive motor neurone disease, bulbar onset.\nDiagnosed February 2026.\n\nPast medical history:\nOsteoporosis.\nDepression, long-standing.\n\nMedication:\nRiluzole 50 mg twice daily.\nSertraline 100 mg daily.\nCalcium and vitamin D supplement.\n\nAllergies:\nNone known.\n\nSwallowing assessment:\nOral and pharyngeal weakness with reduced tongue strength and delayed swallow initiation.\nCurrently safest on an IDDSI Level 6 soft and bite-sized diet with IDDSI Level 2 mildly thick fluids.\nFatigues markedly during meals; the last third of every meal is the highest-risk period.\nMeals now taking up to 45 minutes, up from 20 minutes in June.\nIntake has reduced accordingly.\nCough is weak; peak cough flow reduced, so aspiration may be silent.\n\nNutritional concern — reason for this referral:\nWeight loss of 4 kg over eight weeks, unintentional.\nReports poor appetite and finds the modified textures unappealing; she says food no longer tastes of anything and that she eats only to please her support worker.\nHydration borderline; she restricts fluids because thickened drinks are unpleasant and because of urinary urgency.\nNo current chest infections.\n\nSocial:\nLives alone in a bungalow.\nMeals prepared by a support worker who visits twice daily; nobody is present for the evening meal.\nA niece visits weekly.\n\nPsychosocial:\nLow mood.\nAnxious about future eating and about the possibility of a feeding tube, which was mentioned at her last neurology appointment without a full discussion.\nShe has strong views and has said she does not want \"to be fed by a machine\", but has not made an advance decision.\n\nPlan:\nSpeech pathology to continue swallow monitoring and texture review, four-weekly, with earlier review if she deteriorates.\nRequesting dietetic input for high-energy, high-protein modified-texture options, food fortification and small frequent meals; the texture restriction and the calorie need are pulling in opposite directions and need specialist input.\nA joint discussion is needed regarding nutrition goals and advance care planning while she is able to take part fully in it. I would suggest this is arranged in the next few weeks rather than deferred.\n",
      "recipient": "Ms Hana Suzuki, Dietitian, Community Nutrition Service",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for nutritional assessment given weight loss associated with a texture-modified diet for dysphagia."
    },
    "guidanceNote": "Make the speech pathology and dietetic roles distinct — you manage swallow safety and texture, you're asking the dietitian to address the calorie and weight problem within those constraints."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-discharge-summary-after-paediatric-speech-sound-disorder-therapy",
    "title": "Speech Pathology — Discharge summary after paediatric speech sound disorder therapy",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMiss Sofia Bianchi, 6 years 2 months.\nReferred 20 October 2025. Discharged 27 August 2026.\n\nReason for referral:\nUnintelligible speech, referred by the health visitor with parental agreement.\n\nOriginal assessment findings:\nPhonological disorder.\nProcesses present — fronting of velars, stopping of fricatives, and final-consonant deletion.\nIntelligibility to unfamiliar listeners approximately 40 per cent.\nPercentage of consonants correct 62 per cent.\nReceptive and expressive language within normal limits on formal assessment.\n\nHearing:\nNormal. Audiology assessment 3 November 2025 cleared, with normal tympanograms bilaterally.\n\nOromotor assessment:\nStructurally normal lips, tongue, palate and dentition.\nNo signs of childhood apraxia of speech — no groping, consistent errors, and normal prosody.\n\nTreatment:\nEighteen sessions over ten months, in three blocks with breaks.\nMinimal-pairs approach for fronting and stopping, then a cycles approach for the remaining processes.\nHome programme supported by both parents, completed most days by their report and evidenced in the diary.\n\nProgress:\nAll target processes resolved.\nIntelligibility now estimated at 90 per cent to unfamiliar listeners.\nPercentage of consonants correct 94 per cent.\nAge-appropriate speech sound system on reassessment.\n\nResidual features:\nOccasional distortion of /r/, which is developmentally appropriate at this age and does not require therapy.\n\nSchool:\nTeacher reports improved class participation and confidence; she now volunteers answers, which she did not do in Reception.\nNo literacy concerns raised.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nPlan:\nDischarged from the caseload.\nParents advised to monitor /r/ and to re-refer if it is not acquired by age seven.\nAlso advised to re-refer if any literacy concerns emerge, since a history of phonological disorder carries an increased risk of later reading and spelling difficulty; the school has been made aware of this in the discharge copy.\nNo further routine review needed.\n",
      "recipient": "Dr Helen Marsh, General Practitioner, Brookfield Family Practice",
      "letterType": "discharge",
      "taskInstruction": "Provide a discharge summary following successful treatment of this child's speech sound disorder."
    },
    "guidanceNote": "This is a positive discharge — note the residual /r/ as developmentally normal and give clear re-referral criteria so the GP knows when to act."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-feeding-and-dysphagia-advice-letter-for-a-child-with-cleft-palate",
    "title": "Speech Pathology — Feeding and dysphagia advice letter for a child with cleft palate",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nBaby Amara Nguyen, 4 months.\nReviewed 25 August 2026.\n\nDiagnosis:\nUnilateral cleft lip and palate, left-sided, complete.\nLip repair performed at three months, on 12 June 2026, healed well.\nPalate repair scheduled at ten to twelve months.\n\nFeeding history:\nBottle feeding with a specialised cleft teat and a squeezable bottle.\nPrevious nasal regurgitation and prolonged feeds of over an hour, both now much improved with positioning changes.\nBreastfeeding was attempted and not sustained; her mother expressed for six weeks and has since moved to formula. She has expressed some guilt about this and was reassured.\n\nGeneral health:\nOtherwise well.\nGaining weight along the 25th centile, tracking consistently.\nNo admissions and no chest infections.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nHearing:\nAt risk of middle-ear effusion, as is usual with a cleft palate.\nNewborn screen passed.\nAudiology surveillance arranged, next appointment October 2026.\n\nFeeding assessment today:\nUpright feeding position at approximately 60 degrees, maintained well by both parents.\nPaced bottle feeding with breaks every ten to fifteen sucks.\nFrequent burping.\nFeeds completing within 30 minutes, taking 150 mL.\nNo coughing, no colour change, no distress during the observed feed.\nAdequate weight gain confirms intake is sufficient.\nMild nasal air escape during vocalisation, which is expected before palate repair and is not a feeding concern.\n\nCommunication development:\nBabbling emerging, with vowels and some nasal consonants.\nParents responsive and talking to her throughout the observed feed.\n\nPlan:\nContinue the current feeding technique unchanged; it is working.\nMonitor weight and hydration at routine checks.\nWatch for signs of ear infection or reduced response to sound, as hearing loss at this stage affects later speech.\nSpeech and resonance assessment planned after palate repair, at around eighteen months.\nParents are coping well and reassurance has been given.\nReview at the multidisciplinary cleft clinic in six weeks.\n",
      "recipient": "The Community Child Health Nurse, Hillcrest Early Childhood Centre",
      "letterType": "advice",
      "taskInstruction": "Provide feeding and communication advice to support ongoing community care for this infant with a cleft palate."
    },
    "guidanceNote": "This is reassurance plus monitoring advice — keep it practical (positioning, weight, ear/hearing surveillance) and avoid implying speech therapy is needed before the palate is repaired."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-modified-diet-transfer-letter-for-residential-aged-care",
    "title": "Speech Pathology — Modified-diet transfer letter for residential aged care",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nResident:\nMrs Eileen Forsythe, 84.\nTransferring from hospital to permanent residential care on 2 September 2026.\n\nReason for admission:\nRecurrent aspiration pneumonia — three admissions in eight months, the most recent on 12 August 2026.\n\nPast medical history:\nAdvanced Parkinson's disease, diagnosed 2014.\nTwo falls this year, one with a minor head injury.\nMild cognitive impairment.\n\nMedication:\nLevodopa with carbidopa, four times daily — timing matters, as swallowing is measurably better in the on periods.\nDomperidone 10 mg three times daily.\nParacetamol regularly.\n\nAllergies:\nNone known.\n\nAssessment:\nVideofluoroscopy on 20 August 2026 confirmed delayed swallow initiation, reduced laryngeal elevation and silent aspiration on thin fluids.\nNo aspiration on mildly thick fluids or on minced and moist textures.\nPharyngeal residue after each swallow, clearing with a second dry swallow.\nCough response absent on aspiration — she does not cough, so absence of coughing must not be taken as safety.\n\nRecommendations:\nIDDSI Level 5 minced and moist diet.\nIDDSI Level 2 mildly thick fluids.\nFull upright seating at 90 degrees for all intake, and for 30 minutes afterwards.\nChin-tuck posture on every swallow.\nOne-to-one supervision at all meals — not group supervision.\nAlternate solids and fluids to clear residue.\nMedications crushed in puree where the pharmacist confirms this is permitted; some of her Parkinson's medication must not be crushed and the chart should be checked.\nOral care after every meal and at bedtime.\nMeals to be timed to fall within the on period, approximately 45 minutes after a levodopa dose.\n\nSigns of concern for staff:\nWet or gurgly voice, coughing during or after meals, prolonged meals, raised temperature, breathlessness, or refusal to eat.\n\nPractical note:\nShe often fatigues mid-meal; offer smaller, more frequent portions rather than three full meals.\n\nFamily:\nAware of and supportive of the plan. Her daughter requests updates and has provided a mobile number.\n\nPlan:\nSpeech pathology review in four weeks, or sooner if chest symptoms develop.\nWeigh weekly.\n",
      "recipient": "The Registered Nurse in Charge, Maplewood Residential Aged Care Facility",
      "letterType": "transfer",
      "taskInstruction": "Transfer this resident's swallowing management to the aged-care nursing team to ensure dysphagia precautions continue."
    },
    "guidanceNote": "State the IDDSI levels precisely and the supervision requirements clearly — vague phrasing like 'soft diet' is unsafe for handover."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-outpatient-discharge-after-voice-prosthesis-rehabilitation",
    "title": "Speech Pathology — Outpatient discharge after voice prosthesis rehabilitation",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Bernard Castellano, 64, retired warehouse manager.\nDischarged from speech pathology 28 August 2026.\n\nHistory:\nTotal laryngectomy on 15 December 2025 for T3 laryngeal squamous cell carcinoma.\nTracheo-oesophageal voice prosthesis fitted intraoperatively.\nAdjuvant radiotherapy completed March 2026.\nNo evidence of recurrence at the last ENT review.\n\nPast medical history:\nType 2 diabetes.\nHypertension.\nEx-smoker, stopped at diagnosis after forty years.\n\nMedication:\nMetformin 1 g twice daily.\nPerindopril 4 mg daily.\n\nAllergies:\nNone known.\n\nProgress:\nFluent tracheo-oesophageal speech achieved by week six.\nIntelligible in most settings, including on the telephone and in a noisy pub, which was one of his goals.\nIndependent with stoma care, heat-moisture exchanger use and prosthesis cleaning; he demonstrated all three unaided today.\nManages his own supplies and reordering.\n\nSwallowing:\nFull normal diet with no restrictions.\nNo aspiration.\nWeight stable since February.\nMild dryness from radiotherapy, managed with sips.\n\nPsychosocial:\nReturned to part-time work in May and to his bowls club.\nMood good. His wife has attended throughout and is confident.\nHe has spoken to two newly laryngectomised patients as a volunteer.\n\nProsthesis:\nCurrent device functioning well, fitted 10 June 2026.\nRoutine replacement is managed by the ENT clinic; average device life so far four months.\nNo leakage at present.\n\nEducation completed:\nLeakage management, including what to do at night.\nHands-free valve trialled; he prefers the standard cassette for now and knows he can revisit this.\nEmergency stoma care, including resuscitation information for family, and a neck-breather alert card carried.\n\nPlan:\nDischarged from the speech pathology caseload to routine ENT prosthesis review.\nPlease re-refer if his voice deteriorates, if leakage through or around the prosthesis develops, if swallowing worsens, or if new throat, neck or stoma symptoms arise.\nPatient and family confident with self-management, and they have the department's direct number.\n",
      "recipient": "Dr Owen Fairbrother, General Practitioner, Lakeside Medical Centre",
      "letterType": "discharge",
      "taskInstruction": "Provide a discharge summary following completion of voice and swallowing rehabilitation after total laryngectomy."
    },
    "guidanceNote": "A successful-outcome discharge: summarise function achieved and give the GP concrete re-referral triggers (voice change, prosthesis leakage, swallowing decline)."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-paediatric-language-delay-discharge",
    "title": "Speech Pathology — Paediatric language delay discharge",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "discharge",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nChild:\nLeo Hartman, 5 years 2 months.\nStarting Reception in September 2026.\nDischarged from the caseload 28 August 2026.\n\nReferral:\nGP referral at age 3 years 6 months for expressive language delay and unclear speech.\nParents reported frustration, tantrums around communication, and limited two-word combinations.\n\nHistory:\nFull-term birth, unremarkable.\nRecurrent otitis media between ages two and three, with six documented episodes.\nGrommets inserted at 3 years 2 months.\nHearing now normal on recent audiology, tested 12 June 2026, with normal tympanograms.\nNo other developmental concerns; motor and social development typical.\nEnglish and Tamil spoken at home; Tamil is the main language with his grandmother.\n\nAssessment at intake:\nExpressive language approximately 18 months below age level.\nPhonological processes of fronting — /k/ to /t/ and /g/ to /d/ — and cluster reduction.\nReceptive language six months below age level, within the broad normal range.\nIntelligibility to unfamiliar listeners approximately 50 per cent.\n\nIntervention:\nTwelve blocks of therapy over fourteen months.\nPhonological approach for the speech sound errors, with a parent-delivered home programme.\nBilingual advice given early: the family were told to continue Tamil at home, as reducing it would have removed his richest language input.\n\nCurrent status, reviewed 21 August 2026:\nExpressive and receptive language within normal limits for age on formal reassessment.\nFronting fully resolved.\nClusters emerging, with occasional reduction in long words only.\nSpeech intelligible to unfamiliar listeners.\nConfident communicator in play and with unfamiliar adults.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nPlan:\nDischarge from the active caseload. No further direct therapy needed.\nRe-referral route open if concerns arise, and the parents have the number.\nAdvice given to the family and copied to the school — model the correct production rather than asking him to repeat, allow processing time, and encourage but do not pressure clear speech.\nPlease re-refer if literacy difficulties emerge in Year 1, given his history.\n",
      "recipient": "Mrs Priya Naidu, Reception Class Teacher, Oakfield Primary School",
      "letterType": "discharge",
      "taskInstruction": "Discharge the child from the speech & language service and advise the teacher on classroom strategies to support continued progress."
    },
    "guidanceNote": "This is a discharge to a teacher, so prioritise current classroom-relevant abilities and the support strategies — not the full therapy history. The grommets and bilingual background give helpful context; resist copying every intake detail or you will exceed 200 words."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-post-stroke-dysphagia-referral",
    "title": "Speech Pathology — Post-stroke dysphagia referral",
    "prompt": "Using the case notes, write a letter to the dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr George Aldridge, 74.\nAdmitted 21 July 2026. Transferring to the community caseload 1 September 2026.\n\nDiagnosis:\nAcute left middle cerebral artery ischaemic stroke, six weeks ago.\nNow medically stable.\n\nSocial:\nLives with his wife, who is his primary carer and is 71 with her own arthritis.\nRetired carpenter.\nFully independent before the stroke, including driving.\n\nMedical history:\nHypertension.\nAtrial fibrillation.\nType 2 diabetes.\n\nMedication:\nApixaban 5 mg twice daily.\nAmlodipine 5 mg daily.\nMetformin 1 g twice daily.\nAtorvastatin 80 mg at night.\n\nAllergies:\nPenicillin — rash.\n\nSwallowing assessment, videofluoroscopy 29 August 2026:\nDelayed swallow trigger, approximately two seconds.\nReduced laryngeal elevation.\nTrace silent aspiration on thin fluids, with no cough response.\nNo aspiration on mildly thick fluids or on pureed textures.\nVallecular residue after each swallow, clearing with a second swallow.\n\nCurrent recommendations:\nIDDSI Level 4 pureed diet.\nIDDSI Level 2 mildly thick fluids.\nUpright at 90 degrees for all intake and for 30 minutes after.\nSupervision required for all meals.\nSmall spoonfuls, one at a time, with a second dry swallow.\nOral care four times daily; he has his own teeth.\n\nNutritional concern:\nWeight down 4 kg since admission.\nReduced appetite; he reports that food tastes bland on the modified textures and has said he would \"rather not bother\".\nBody mass index now 21.\nMild right-hand weakness affecting self-feeding; he is right-handed and this is a significant loss of independence for him.\n\nPlan:\nContinue weekly speech and language therapy swallow rehabilitation, with effortful swallow and Mendelsohn manoeuvre practice; the aim is upgrade of textures, not indefinite restriction.\nRequires dietetic input regarding calorie and protein intake on modified textures, and monitoring of weight and hydration.\nOccupational therapy review for adapted cutlery.\nRepeat instrumental assessment in six weeks if he progresses as expected.\n",
      "recipient": "Ms Hannah Brett, Senior Dietitian, Riverside Community Nutrition Service",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for nutritional assessment and texture-modified diet planning following an instrumental swallow assessment."
    },
    "guidanceNote": "Select only details the dietitian needs — the IDDSI levels, weight loss, diabetes and self-feeding difficulty are relevant; full neurological detail is not. State the penicillin allergy only if it affects nutrition decisions; here it is safer to omit and keep within the word count."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-pre-laryngectomy-counselling-referral-for-head-and-neck-cancer",
    "title": "Speech Pathology — Pre-laryngectomy counselling referral for head and neck cancer",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Gordon Halliwell, 61, self-employed plumber.\nSeen 31 August 2026.\n\nDiagnosis:\nT3 squamous cell carcinoma of the larynx.\nThe multidisciplinary team on 26 August recommended total laryngectomy, planned in three weeks on 21 September 2026.\nNeck dissection also planned.\n\nHistory:\nForty pack-year smoking history; stopped at diagnosis six weeks ago.\nModerate alcohol intake, approximately eighteen units weekly.\n\nPast medical history:\nCOPD, moderate, FEV1 62 per cent predicted.\nHypertension.\n\nMedication:\nTiotropium once daily.\nSalbutamol as required.\nAmlodipine 5 mg daily.\n\nAllergies:\nSulfa drugs — rash.\n\nCurrent status:\nHoarse but intelligible voice; he can still work by telephone.\nMild stridor on exertion, present for three weeks and worsening.\nSwallowing functional with mild sticking of solid food; no weight loss.\nNo aspiration.\n\nPsychosocial:\nLives with his partner of twenty years.\nAnxious about permanent voice loss and about the impact on his work and social life; he runs a two-man business and takes all the calls himself.\nLimited understanding of post-surgery communication options — he believes he will be permanently mute, which is the main misconception to address.\nNo prior speech pathology contact.\nHe has not told his customers and is worried about losing the business.\n\nPlan:\nRequesting a pre-operative session, ideally within the next week so there is time for a second appointment.\nContent to cover: the anatomical change and its effect on voice, breathing and swallowing, including that he will breathe through a neck stoma permanently and will not be able to smell or blow his nose in the usual way.\nIntroduction of alaryngeal communication options — surgical voice prosthesis, electrolarynx and oesophageal speech — with recorded samples of each.\nEstablishment of a post-operative communication plan, including a writing board and an agreed signal system for the immediate post-operative period.\nBaseline voice and swallow measures to be recorded before surgery.\nEarly post-operative review for stoma care and rehabilitation.\nHis COPD is noted, as it affects both the anaesthetic and later pulmonary rehabilitation through a stoma.\nHe is keen to maintain work where possible and this should shape the goals.\n",
      "recipient": "The Head and Neck Speech Pathology Team, Metropolitan Cancer Centre",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for pre-operative counselling and communication planning prior to total laryngectomy."
    },
    "guidanceNote": "Frame this as time-critical pre-operative input — the value is preparation and baseline before surgery, so make the timeline and counselling needs prominent."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-transfer-to-school-slp-for-developmental-language-disorder",
    "title": "Speech Pathology — Transfer to school SLP for developmental language disorder",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMaster Kwame Mensah, 5 years 4 months.\nStarting Year 1 in September 2026.\nTransfer of care from the community service, written 27 August 2026.\n\nDiagnosis:\nDevelopmental language disorder, receptive and expressive.\n\nHistory:\nSeen by this community service for fourteen months, from June 2025.\nReferred by the health visitor at the two-and-a-half-year check and re-referred at four.\n\nHearing:\nNormal. Audiology 3 September 2025, with normal tympanograms.\n\nCognition:\nNon-verbal skills within the normal range on assessment by the educational psychologist in March 2026, which supports the diagnosis of a specific language disorder rather than a global delay.\n\nAssessment, most recent, 14 August 2026:\nReceptive language — difficulty following multi-step instructions; he manages one step reliably and two with visual support.\nDifficulty understanding complex grammar, particularly passives and embedded clauses.\nExpressive language — short sentences of three to four words.\nWord-finding difficulties with frequent use of \"that thing\".\nImmature grammar, with errors in verb tense and plural marking.\nNarrative skills emerging but disorganised; he gives events out of sequence.\nVocabulary below age expectations, standard score 78.\n\nSpeech sounds:\nAge appropriate. No articulation or phonological therapy needed.\n\nSocial and behaviour:\nFriendly and engages well; seeks out adults and peers.\nSome frustration when misunderstood, occasionally expressed by walking away.\nNo behavioural concerns raised by the nursery.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nProgress and what works:\nGood response to visual supports — a visual timetable and picture cues.\nBenefits from explicit vocabulary teaching, with new words pre-taught before a topic.\nBenefits from repetition and from instructions chunked into single steps.\nResponds poorly to being asked \"do you understand?\", to which he always says yes.\n\nFamily:\nSupportive and consistent with the home programme.\nEnglish spoken at home.\n\nPlan:\nHandover to the school-based service for classroom-embedded language support.\nRecommend continued use of visual supports, pre-teaching of vocabulary, simplified and chunked instructions, and regular liaison with the class teacher.\nPrevious assessment reports available on request; consent for sharing has been obtained.\n",
      "recipient": "The School Speech Pathologist, Greenfield Primary School",
      "letterType": "transfer",
      "taskInstruction": "Transfer this child's care to the school speech pathology service to continue language support as he starts school."
    },
    "guidanceNote": "Give the school clinician what they can act on in the classroom — the language profile and the strategies that worked — rather than a full developmental history."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "wri-speech-pathology-voice-nodules-referral-to-ent-for-a-primary-teacher",
    "title": "Speech Pathology — Voice nodules referral to ENT for a primary teacher",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMs Priya Sandhu, 34, primary school teacher.\nSeen 29 August 2026, after a course of voice therapy.\n\nPresenting complaint:\nProgressive hoarseness over five months.\nVocal fatigue by midday, with the voice deteriorating markedly through the school day and recovering partly overnight.\nOccasional complete aphonia, most recently for two hours last week.\nHabitual throat clearing.\nMild discomfort in the throat, described as an ache rather than pain.\nNo dysphagia, no haemoptysis, no weight loss, no neck lump, no otalgia — no red flags.\n\nVocal demands:\nTeaches Year 2, thirty children.\nAlso runs the after-school choir twice weekly and coaches netball outdoors.\nNo amplification available in the classroom.\n\nLifestyle:\nNever smoked.\nAlcohol minimal.\nFour coffees daily.\nHydration poor during teaching days; she reports drinking almost nothing between 8 am and lunchtime.\n\nPast medical history:\nMild reflux, untreated, with occasional night-time symptoms.\nSeasonal allergic rhinitis with post-nasal drip.\n\nMedication:\nLoratadine 10 mg as required.\n\nAllergies:\nNone known.\n\nAssessment:\nPerceptual voice quality — rough and breathy, with reduced loudness and reduced pitch range.\nHard glottal onsets on vowel-initial words.\nHabitual throat clearing observed six times in a 20-minute session.\nClavicular breathing pattern with little abdominal movement.\nMaximum phonation time 9 seconds, below normal.\nVoice Handicap Index 42, in the moderate range.\n\nTherapy provided:\nSix sessions of voice therapy — vocal hygiene, resonant voice technique and breath support.\nGood compliance; she completed the home practice log.\nOnly partial improvement; the vocal fatigue is better but the hoarseness is unchanged.\n\nImpression:\nSuspected bilateral vocal fold nodules, given the occupation, the pattern of symptoms and the perceptual findings.\nLaryngeal imaging has not yet been performed, which is the gap this referral addresses.\n\nPlan:\nRequesting laryngoscopy and stroboscopy to confirm the diagnosis and to guide further management; five months of hoarseness in any patient warrants visualisation of the larynx regardless of the likely benign cause.\nVoice therapy to continue concurrently.\nReflux review suggested.\nOccupational health referral discussed regarding classroom amplification.\n",
      "recipient": "Dr Anita Rasheed, Ear, Nose and Throat Surgeon, Riverside ENT Clinic",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for ENT laryngeal review given persistent dysphonia despite a trial of voice therapy."
    },
    "guidanceNote": "The reason for referral is partial response to therapy plus need for laryngeal visualisation — make that rationale explicit rather than just listing symptoms."
  }
];
