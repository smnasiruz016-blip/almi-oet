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
    "profession": "PODIATRY",
    "slug": "wri-podiatry-achilles-tendinopathy-with-rupture-concern-referral-to-orthopaedics",
    "title": "Podiatry — Achilles tendinopathy with rupture concern, referral to orthopaedics",
    "prompt": "Using the case notes, write a letter to the orthopaedic foot and ankle service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Ian Forsyth, 52, secondary school teacher.\nSeen 28 August 2026. Under this clinic since December 2025.\n\nPresenting complaint:\nA nine-month history of posterior heel pain at the Achilles insertion, right side.\nInitially morning stiffness that eased with walking.\nA sharp increase two weeks ago after stumbling off a kerb; he felt a pull but did not fall.\nSince then he has been unable to walk more than about ten minutes and cannot manage stairs normally.\n\nExamination:\nThickened and tender Achilles tendon at the insertion, with tenderness extending 3 cm proximally.\nPalpable Haglund prominence at the posterosuperior calcaneus.\nRetrocalcaneal tenderness on medial and lateral squeeze.\nSimmonds-Thompson calf squeeze test produces plantarflexion, so a complete rupture is unlikely; a partial tear is nonetheless suspected given the acute change.\nNo palpable gap in the tendon.\nSingle heel raise on the right — three repetitions only, painful, against twenty on the left.\nTight gastrocnemius and soleus, ankle dorsiflexion limited to 5 degrees with the knee extended.\n\nTreatment to date:\nA twelve-week eccentric loading programme, completed with good compliance.\nPrefabricated orthoses with a heel raise, worn since February.\nLoad management advice.\nBenefit has been limited and the recent change has undone what gains there were.\n\nRelevant history:\nProstatitis earlier this year, treated with a course of ciprofloxacin, now stopped.\nFluoroquinolone-associated tendinopathy is a recognised risk and the timing here is consistent with it; this should be considered in the assessment.\nNo diabetes, no inflammatory arthritis, no previous tendon problems.\n\nMedication:\nTamsulosin 400 micrograms daily.\nCiprofloxacin taken earlier this year, now discontinued.\n\nAllergies:\nNone known.\n\nSocial:\nNon-smoker. Plays badminton weekly, stopped since June.\nHe asked directly whether the antibiotic caused this.\n\nPlan:\nReferred to orthopaedics for imaging — ultrasound or MRI — and a surgical opinion.\nRelative rest and a bilateral heel raise advised in the meantime, with no eccentric loading until imaging is available.\nHe has been advised to avoid any further fluoroquinolone unless it is unavoidable, and to tell any prescriber.\n",
      "recipient": "Ms Caroline Pratt, Consultant Orthopaedic Surgeon",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for orthopaedic assessment of chronic insertional Achilles tendinopathy with a partial tear concern."
    },
    "guidanceNote": "The recent fluoroquinolone exposure is clinically significant for tendon integrity — include it. Note that the Simmonds-Thompson test argues against full rupture but the acute change still warrants imaging."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-biomechanical-assessment-outcome-orthotic-advice-to-referring-gp",
    "title": "Podiatry — Biomechanical assessment outcome, orthotic advice to referring GP",
    "prompt": "Using the case notes, write a letter to the referring general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMs Rebecca Lyons, 34, secondary school teacher and recreational runner.\nReferred by you on 4 August 2026. Assessed 26 August 2026.\n\nReason for referral:\nBilateral medial arch ache and anterior knee pain, both worse with running.\nShe has increased from 10 to 30 kilometres weekly over four months in preparation for a half marathon.\n\nExamination, static:\nBilateral excessive subtalar pronation in relaxed calcaneal stance, calcaneal eversion 9 degrees right and 8 degrees left.\nNavicular drop 12 mm bilaterally, well above normal.\nForefoot supinatus present.\nFlexible flatfoot, fully correctable on tiptoe standing and on the Jack test, so the deformity is not rigid.\nTibialis posterior tendon intact, no tenderness or swelling along its course, single heel raise strong and inverting normally.\n\nExamination, dynamic:\nProlonged pronation through midstance with loss of resupination before heel lift.\nEarly heel lift lost; propulsion occurs through the medial forefoot.\nIncreased hip adduction and knee valgus on the right during single-leg squat.\n\nRange and flexibility:\nAnkle dorsiflexion 6 degrees with the knee extended, 14 degrees with the knee flexed — gastrocnemius equinus.\nHamstrings tight bilaterally.\n\nVascular and neurological:\nPedal pulses palpable and equal. Capillary refill under two seconds.\nSensation intact to monofilament and vibration. No neurological deficit.\n\nKnee assessment:\nPatellofemoral signs — pain on patellar compression and on step-down testing.\nNo effusion. Collateral and cruciate ligaments stable. McMurray negative.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nManagement provided:\nCasted bespoke functional orthoses prescribed, with medial rearfoot posting of 4 degrees and arch fill.\nA graded break-in schedule given — one hour on day one, increasing by an hour daily.\nCalf and hamstring stretching programme issued in writing.\nFootwear advice; her current running shoes are 18 months old and past their mileage.\nRunning volume to be reduced by a third for four weeks and then rebuilt by no more than ten per cent weekly.\n\nPlan:\nReview at eight weeks.\nNo orthopaedic referral is needed at this stage; conservative management is expected to settle the symptoms.\n",
      "recipient": "Dr Nathan Reid, General Practitioner",
      "letterType": "advice",
      "taskInstruction": "Advise the GP of the biomechanical findings and the custom orthotic management plan for this patient's anterior knee and arch pain."
    },
    "guidanceNote": "This is an advice letter — focus on what you found and the management plan, not a request for the GP to act. Keep biomechanical jargon balanced with a plain summary the GP can follow."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-charcot-foot-suspected-urgent-orthopaedic-referral",
    "title": "Podiatry — Charcot foot suspected, urgent orthopaedic referral",
    "prompt": "Using the case notes, write a letter to the orthopaedic foot and ankle consultant. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Raymond Clarke, 58, delivery driver.\nSeen as an urgent appointment, 1 September 2026.\n\nDiabetes history:\nType 2 diabetes for nineteen years.\nHbA1c 74 mmol/mol, taken 12 August.\nPeripheral neuropathy confirmed — 10 g monofilament absent at all ten sites on both feet, vibration perception threshold raised.\nBackground retinopathy on screening. eGFR 62.\n\nPresenting complaint:\nRight midfoot red, warm and swollen for twelve days.\nHe describes it as aching rather than painful, which is itself significant given the degree of swelling.\nNo trauma recalled, though he loads and unloads a van all day.\nHe has continued working throughout.\n\nExamination:\nSkin intact over the whole foot. No ulcer, no break, no blister.\nRight midfoot grossly swollen with dorsal erythema that blanches on elevation — this helps distinguish it from infection.\nTemperature difference 4.2 degrees Celsius warmer than the left, measured with an infrared thermometer at three matched sites.\nFoot shape — early loss of the medial arch with a rocker-bottom deformity developing.\nNo lymphangitis, no lymphadenopathy. He is afebrile.\n\nVascular:\nPedal pulses palpable bilaterally. ABPI 1.1 on the right, 1.0 on the left; note that calcification can falsely elevate these in long-standing diabetes.\n\nImaging:\nPlain radiograph taken today — no obvious fracture, soft tissue swelling noted.\nA normal radiograph does not exclude an acute Charcot process in the first weeks.\n\nMedication:\nMetformin 1 g twice daily.\nEmpagliflozin 10 mg daily.\nAtorvastatin 40 mg at night.\nRamipril 10 mg daily.\n\nAllergies:\nPenicillin — rash.\n\nPlan and concerns:\nAcute Charcot neuroarthropathy until proven otherwise.\nAdvised strict non-weight-bearing today; crutches issued.\nA total contact below-knee cast is not available at this clinic, which is the main reason for this referral.\nUrgent orthopaedic and diabetic foot service assessment requested for immobilisation and MRI.\nHe is reluctant to stop driving and is worried about his job. I have explained that continued loading risks permanent midfoot collapse and eventual amputation, and he has agreed to stop pending review.\n",
      "recipient": "Mr Daniel Osei, Consultant Orthopaedic Foot & Ankle Surgeon",
      "letterType": "referral",
      "taskInstruction": "Refer this patient urgently for assessment of suspected acute Charcot neuroarthropathy."
    },
    "guidanceNote": "Charcot is a clinical emergency despite intact skin — convey the urgency and the warm/swollen/neuropathic triad clearly. Don't bury the temperature difference."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-diabetic-foot-ulcer-referral-to-vascular-team",
    "title": "Podiatry — Diabetic foot ulcer referral to vascular team",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Trevor Okonkwo, 64, retired bus driver.\nSeen weekly since 15 July 2026. This referral written 31 August 2026.\n\nDiagnosis:\nType 2 diabetes for eighteen years, poorly controlled.\nHbA1c 9.4 per cent, taken 20 August.\n\nPresenting problem:\nUlcer on the plantar aspect of the right first metatarsal head, present for seven weeks and not healing.\n\nWound assessment today:\n2 cm by 1.5 cm, depth 4 mm.\nSloughy base with approximately 30 per cent granulation.\nMild malodour. Moderate serous exudate.\nDoes not probe to bone.\nPeriwound callus, debrided again today.\nNo surrounding cellulitis and he is afebrile.\nThe wound has shown no reduction in area over four weeks of appropriate care.\n\nVascular assessment — the reason for this referral:\nPedal pulses absent in the right foot, faint on the left.\nABPI 0.6 on the right.\nFoot cool and pale, capillary refill four seconds.\nIntermittent claudication at approximately 100 metres, worsening over six months.\nNo rest pain reported as yet, but sensation loss may be masking it.\n\nNeurological:\n10 g monofilament absent at six of ten sites on both feet.\nVibration perception reduced bilaterally.\n\nMedication:\nMetformin 1 g twice daily.\nGliclazide 80 mg twice daily.\nAtorvastatin 80 mg at night.\nRamipril 10 mg daily.\n\nAllergies:\nPenicillin — rash.\n\nSocial:\nEx-smoker, stopped two years ago after a thirty pack-year history.\nLives with his wife, who inspects his feet daily.\n\nManagement to date:\nSharp debridement on three occasions.\nOffloading with felt padding and a cast shoe.\nAntimicrobial dressing, changed twice weekly.\nWeekly review with wound tracing.\nNo clinical improvement; ischaemia is the suspected limiting factor rather than infection or offloading failure.\n\nPlan:\nReferred to the vascular team for assessment with a view to revascularisation.\nOffloading and dressings will continue here in the meantime, with weekly review.\nHe understands that healing is unlikely without improved perfusion.\n",
      "recipient": "Dr Helena Pratt, Consultant Vascular Surgeon, Riverside General Hospital",
      "letterType": "referral",
      "taskInstruction": "Write a referral letter requesting urgent vascular assessment of a non-healing neuroischaemic ulcer."
    },
    "guidanceNote": "Lead with the reason for referral (suspected ischaemia limiting healing) and the ABPI/absent pulses — the social history and exact dressing brand are background, not the request."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-diabetic-neuropathic-ulcer-transfer-to-community-diabetic-foot-team",
    "title": "Podiatry — Diabetic neuropathic ulcer, transfer to community diabetic foot team",
    "prompt": "Using the case notes, write a letter to the community diabetic foot team. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Abdul Karim, 67.\nTransfer of care — he has moved into your area to be nearer his son. Last seen by this service 27 August 2026.\n\nDiabetes history:\nType 2 diabetes for fourteen years.\nHbA1c 69 mmol/mol.\nEstablished peripheral neuropathy.\nNo retinopathy. Renal function normal.\n\nPresenting problem:\nNeuropathic ulcer beneath the right first metatarsal head, present for seven weeks.\n\nWound assessment at last review:\n12 mm by 10 mm, depth to subcutaneous tissue.\nGranulating base, approximately 70 per cent granulation tissue.\nModerate exudate.\nSurrounding callus rim, debrided at each visit and reforming within a week, which indicates the offloading is not yet adequate.\nDoes not probe to bone. No malodour, no cellulitis, no undermining.\nUniversity of Texas classification grade 1A.\nArea has reduced from 18 mm by 14 mm over four weeks — slow but genuine progress.\n\nNeurological and vascular:\n10 g monofilament absent at all sites both feet.\nPedal pulses palpable. ABPI 1.0 bilaterally. Capillary refill under two seconds.\n\nOffloading:\nCurrently in a removable walker. Adherence is inconsistent — he removes it at home and in the mosque, and admits to walking indoors unprotected.\nThis is the single greatest obstacle to healing.\n\nDressings:\nFoam dressing, changed twice weekly.\n\nMicrobiology:\nWound swab on 6 August grew mixed skin flora. Not treated, as there were no clinical signs of infection.\n\nMedication:\nMetformin 1 g twice daily.\nGliclazide 40 mg twice daily.\nAtorvastatin 20 mg at night.\n\nAllergies:\nNone known.\n\nSocial:\nLives alone in a ground-floor flat. His son visits at weekends.\nHe will need district nurse support for dressings between podiatry visits.\nReads English well; written instructions have been effective.\n\nPlan to continue:\nSharp debridement of the callus rim at each visit.\nOptimise offloading — I would recommend moving to a total contact cast or a rendered-irremovable walker, given the adherence problem.\nWeekly wound review with measurement.\nVascular status to be rechecked in three months.\n",
      "recipient": "The Lead Podiatrist, Community Diabetic Foot Team",
      "letterType": "transfer",
      "taskInstruction": "Transfer this patient's ongoing care for offloading and wound management of a neuropathic plantar ulcer."
    },
    "guidanceNote": "This is a transfer, so summarise the established care plan clearly so the new team can continue seamlessly. Include wound grading and offloading adherence — both drive their decisions."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-discharge-to-gp-after-nail-surgery",
    "title": "Podiatry — Discharge to GP after nail surgery",
    "prompt": "Using the case notes, write a letter to the recipient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "discharge",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMiss Chloe Bennett, 22, university student.\nProcedure performed 24 August 2026. Reviewed 31 August 2026.\n\nProblem:\nRecurrent ingrown toenail, right hallux, lateral border.\nThird episode in twelve months.\n\nHistory:\nRepeated infection requiring two courses of oral antibiotics from you in February and June.\nGranulation tissue at the lateral nail fold.\nPain limiting walking and she had stopped attending her netball club.\nConservative care — packing, filing and cutting technique education — was unsuccessful.\nInvoluted nail shape with a deep lateral sulcus, so recurrence was likely without definitive treatment.\n\nPreoperative assessment:\nHealthy, non-diabetic.\nPedal pulses strong, capillary refill under two seconds.\nSensation intact.\nNo vascular or healing concern. Not pregnant. Not taking any anticoagulant.\n\nProcedure:\nPartial nail avulsion of the lateral border with phenolisation.\nLocal anaesthetic — lidocaine 2 per cent plain, 3 mL, digital block. No adrenaline used.\nTourniquet applied for eight minutes.\nPhenol 80 per cent applied for three one-minute applications with alcohol irrigation between.\nHaemostasis achieved. Sterile non-adherent dressing applied.\nTolerated well; no vasovagal episode.\n\nAftercare given:\nKeep dry for 24 hours.\nSalt-water soaks from day two, then daily dressing changes.\nFootwear advice — open or wide shoes for two weeks.\nWritten instructions and a contact number provided.\n\nReview today, day seven:\nHealing well. Nail bed clean with expected serous discharge from the phenolised area.\nNo infection, no cellulitis, no excess granulation.\nShe is walking normally and pain-free.\n\nMedication:\nNone regular. Paracetamol taken for two days after the procedure.\n\nAllergies:\nNone known.\n\nSafety-net given:\nAdvised to contact the surgery if increasing redness, swelling, discharge or fever develops.\nTold that discharge may continue for four to six weeks and is expected, not infection.\n\nPlan:\nDischarged from podiatry.\nNo routine follow-up needed unless there is regrowth of the treated border or recurrence.\nPhenolisation has a recurrence rate of under five per cent and she has been told this.\n",
      "recipient": "Dr Anita Shah, General Practitioner, Meadowbrook Surgery",
      "letterType": "discharge",
      "taskInstruction": "Write a discharge letter summarising the partial nail avulsion and the patient's ongoing self-care needs."
    },
    "guidanceNote": "This is straightforward — confirm the procedure, that healing was uneventful, and the safety-net advice. State clearly the patient is discharged and what would warrant re-referral."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-discharge-to-gp-following-resolved-cellulitis-and-ulcer-healing",
    "title": "Podiatry — Discharge to GP following resolved cellulitis and ulcer healing",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Gordon Mackenzie, 70, retired postmaster.\nUnder this service since April 2026. Discharged 28 August 2026.\n\nDiabetes history:\nType 2 diabetes for eleven years.\nHbA1c improved to 58 mmol/mol from 76 in March, following dietary change and a medication review.\n\nHistory of the episode:\nNeuropathic ulcer on the right second toe, first seen 8 April 2026.\nAssociated cellulitis in May, with erythema extending to the mid-dorsum and a temperature of 37.9 degrees.\nTreated with fourteen days of flucloxacillin, course completed, with full resolution.\nNo bone involvement; probe-to-bone negative throughout and radiograph normal.\n\nExamination at discharge:\nWound fully epithelialised, closed for six weeks.\nNo exudate and no surrounding erythema.\nSkin intact across both feet.\nCallus reduced and now minimal with the current insoles.\nNo new lesions and no pre-ulcerative signs.\n\nNeurological and vascular:\nNeuropathy persists — 10 g monofilament absent at eight of ten sites.\nPedal pulses palpable bilaterally. ABPI 1.0.\nCapillary refill under two seconds.\n\nFootwear and offloading:\nFootwear reviewed and replaced.\nAccommodative insoles fitted in June and are being worn consistently.\n\nMedication:\nMetformin 1 g twice daily.\nDapagliflozin 10 mg daily.\nAtorvastatin 40 mg at night.\nRamipril 5 mg daily.\n\nAllergy record — please amend:\nThe record listed penicillin allergy. He tolerated flucloxacillin without any reaction during this episode.\nOn questioning, the original reaction in the 1990s was nausea, with no rash, swelling or breathing difficulty.\nThis has been reclassified as an intolerance rather than an allergy, and I would ask that the practice record be updated accordingly, as it materially affects future prescribing.\n\nAdvice given:\nDaily foot checks, including between the toes and using a mirror for the soles.\nNever to walk barefoot, indoors or out.\nTo report any break in the skin the same day rather than waiting.\n\nPlan:\nDischarged from active podiatry treatment into the high-risk foot surveillance pathway, with community review every three months.\nPlease continue glycaemic and vascular risk management.\n",
      "recipient": "Dr Priya Sharma, General Practitioner",
      "letterType": "discharge",
      "taskInstruction": "Discharge this patient back to GP-led care following healed neuropathic ulcer and resolved infection, with ongoing monitoring advice."
    },
    "guidanceNote": "Confirm full healing before discharge and state the surveillance interval clearly. Flag the corrected penicillin record — it's a meaningful detail for the GP's future prescribing."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-ingrown-toenail-recurrence-referral-for-partial-nail-avulsion",
    "title": "Podiatry — Ingrown toenail recurrence, referral for partial nail avulsion",
    "prompt": "Using the case notes, write a letter to the podiatric surgery service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Joshua Bennett, 23, apprentice electrician.\nSeen 29 August 2026.\n\nPresenting complaint:\nRecurrent onychocryptosis of the right hallux, lateral nail sulcus.\nThird episode in twelve months, the previous two in November 2025 and April 2026.\nPainful, red, with exudate present today.\nHypergranulation tissue at the lateral fold, approximately 4 mm, bleeding on contact.\nPain is limiting football and is now troublesome in safety boots at work.\n\nExamination:\nInvoluted nail shape with a deep lateral sulcus — the underlying reason for the recurrence.\nLateral nail fold swollen and inflamed with serous exudate.\nNo spreading cellulitis; erythema confined to the nail fold.\nAfebrile, no lymphangitis, no lymphadenopathy.\nMedial border and the left hallux both normal.\n\nVascular and neurological:\nNo diabetes.\nWell perfused — pedal pulses strong, capillary refill under two seconds.\nSensation intact throughout.\nNo healing risk identified.\n\nConservative care to date:\nPacking of the sulcus at three visits.\nFiling and thinning of the nail plate.\nEducation on cutting technique — straight across, not down the sides.\nRelief has been temporary on each occasion and the problem recurs within weeks.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nPatient's view:\nHe is keen for definitive treatment and has asked for surgery specifically. He does not want another course of antibiotics.\n\nCounselling given:\nDay-case procedure under local anaesthetic, taking about thirty minutes.\nPartial nail avulsion of the lateral border with phenol to prevent regrowth.\nHealing takes four to six weeks with daily dressings and ongoing discharge, which is expected.\nThe nail will be permanently narrower on that side.\nRegrowth risk under five per cent.\nTime off sport for about three weeks; work with a wide boot from day three.\n\nPlan:\nReferred for partial nail avulsion with phenolisation of the lateral border.\nAdvised to keep the toe dressed and elevated meanwhile, with salt-water soaks daily.\nTo return sooner if spreading redness, throbbing or fever develops.\n",
      "recipient": "Mr Faisal Rahman, Podiatric Surgeon",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for partial nail avulsion with phenolisation following recurrent conservative-treatment failure."
    },
    "guidanceNote": "Justify the surgical referral by emphasising the recurrence and failure of conservative measures, not just current symptoms. Confirm good vascular/neuro status since it bears on suitability for phenolisation."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-paediatric-sever-s-disease-advice-letter-to-school-nurse",
    "title": "Podiatry — Paediatric Sever's disease, advice letter to school nurse",
    "prompt": "Using the case notes, write a letter to the school nurse. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPupil:\nTom Whitfield, 11, Year 7.\nSeen in the podiatry clinic with his mother, 27 August 2026.\nThis letter is sent with parental consent.\n\nPresenting complaint:\nBilateral heel pain, right worse than left, for about four months.\nWorse during and after physical education and football, and eased by rest.\nHe limps for the rest of the day after a match.\nNo pain at night and no pain first thing in the morning.\n\nActivity and growth:\nPlays football three times weekly, plus school physical education and a Saturday club.\nHas grown 8 cm in the past year.\n\nExamination:\nTenderness on medial and lateral compression of the calcaneal apophysis — a positive squeeze test — bilaterally.\nTight gastrocnemius; ankle dorsiflexion 4 degrees with the knee extended.\nPain reproduced on single heel raise and on hopping.\nNo swelling, no redness, no warmth.\nNo limp at rest.\nNo tenderness of the Achilles insertion itself and no plantar fascia tenderness.\n\nDiagnosis:\nSever's disease, that is calcaneal apophysitis. This is a traction injury of the growth plate at the back of the heel, common in active children during a growth spurt, and it is self-limiting.\nIt causes no long-term damage and resolves once the growth plate matures, usually between thirteen and fifteen.\n\nOther findings:\nNeurological and circulatory examination normal.\nNo signs suggesting infection, tumour or inflammatory arthritis; no night pain, no systemic symptoms.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nManagement provided:\nHeel raises fitted to his school shoes and football boots.\nCalf and hamstring stretching programme, three times daily, demonstrated to him and his mother.\nIce for ten minutes after sport.\nSupportive footwear advice; he had been wearing flat canvas shoes.\n\nWhat I am asking the school to consider:\nModified participation in physical education during painful episodes rather than complete exclusion.\nAllowing him to wear his supportive trainers rather than plimsolls for indoor lessons.\nReducing high-impact loading — running and jumping — during a flare, while keeping him active.\nComplete rest is neither necessary nor helpful.\nHis parents are aware of all of the above and are supportive.\n",
      "recipient": "Mrs Linda Carter, School Nurse",
      "letterType": "advice",
      "taskInstruction": "Advise the school nurse on supporting this child's heel pain management during school sport."
    },
    "guidanceNote": "Frame the advice around practical school support — modified rather than total activity restriction. Reassure that the condition is self-limiting so PE staff don't over-restrict the child."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-paediatric-in-toeing-gait-reassurance-letter-to-gp",
    "title": "Podiatry — Paediatric in-toeing gait, reassurance letter to GP",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nLucy Adeyemi, 4 years 2 months.\nReferred by you on 30 July 2026 after parental concern. Seen with both parents, 26 August 2026.\n\nReason for referral:\nParents report that her feet turn inwards when she walks and runs, and that she trips frequently.\nThey have been advised by a relative that she needs corrective boots.\n\nHistory:\nBorn at term, uncomplicated delivery, birth weight 3.5 kg.\nDevelopment normal throughout; walked independently at thirteen months.\nNo pain at any time. She does not complain and is not limited in play.\nNo family history of orthopaedic or neuromuscular conditions.\nNo regression of any skill.\n\nExamination:\nIn-toeing gait confirmed on observation, symmetrical, foot progression angle approximately 12 degrees internal bilaterally.\nSource identified as bilateral internal tibial torsion — thigh-foot angle internally rotated 10 degrees on each side.\nHips: full and symmetrical internal and external rotation, 45 degrees each way in prone. No excess femoral anteversion.\nFeet structurally normal — no metatarsus adductus, no forefoot adduction, full range of motion at all joints.\nNeurological examination normal with symmetrical reflexes, normal tone and no clonus.\nNo leg-length discrepancy; both 46 cm.\nSpine straight, no sacral dimple.\n\nAssessment:\nInternal tibial torsion is a normal developmental variant. It is present in most toddlers and unwinds spontaneously with growth, usually resolving by around eight years of age.\nThe tripping is consistent with her age and gait pattern, and her parents report it is already less frequent than a year ago.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nDiscussion with the parents:\nExplained that there is good evidence that orthoses, night splints, corrective footwear and exercises do not change the natural history of this condition, and that treating it can create a problem where none exists.\nThey were relieved and accepted the explanation.\nSitting position was discussed; W-sitting is not proven to cause this but she was encouraged to sit cross-legged.\n\nPlan:\nReassurance given. Discharged, with no orthoses, no splints and no exercises.\nSafety-net advice: to return if she develops pain, if the in-toeing becomes asymmetrical, if any skill is lost, or if there is no improvement by around age eight.\n",
      "recipient": "Dr Marcus Lowe, General Practitioner",
      "letterType": "discharge",
      "taskInstruction": "Update the GP and discharge this child following assessment of in-toeing gait, with reassurance and safety-netting."
    },
    "guidanceNote": "Reassurance letters must still be specific — name the cause (internal tibial torsion) and the expected resolution. Include the safety-netting advice so the GP knows when to re-refer."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-peripheral-arterial-disease-referral-to-vascular-clinic",
    "title": "Podiatry — Peripheral arterial disease referral to vascular clinic",
    "prompt": "Using the case notes, write a letter to the vascular surgery clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Pauline Hardy, 71, retired care assistant.\nSeen 31 August 2026.\n\nPresenting complaint:\nA six-month history of right calf pain on walking, coming on at about 100 metres and relieved within three minutes of rest.\nThe distance has shortened from around 400 metres in the spring.\nFor the past three weeks she has had pain in the right forefoot at night, eased by hanging the foot out of bed — this is the concerning new development.\nNo tissue loss and no wound.\n\nRisk factors:\nCurrent smoker, forty pack-years, twenty cigarettes daily.\nHypertension.\nHyperlipidaemia.\nNo diabetes; a fasting glucose in June was normal.\n\nExamination:\nRight foot cool to touch compared with the left.\nPale on elevation to 45 degrees within 30 seconds, dusky red on dependency — a positive Buerger test.\nPedal pulses absent on the right, both dorsalis pedis and posterior tibial.\nWeak on the left. Femoral pulses palpable bilaterally, no bruit heard.\nCapillary refill five seconds at the right hallux.\nSkin thin and shiny with loss of hair over the dorsum and lower shin.\nToenails dystrophic and slow-growing.\nNo ulceration, no gangrene, no fissures.\n\nABPI:\nRight 0.52. Left 0.78.\n\nMedication:\nAmlodipine 10 mg daily.\nAtorvastatin 40 mg at night.\nAspirin 75 mg daily.\n\nAllergies:\nNone known.\n\nSocial:\nLives alone in a bungalow. Walks to the shops daily and this is now limited.\nShe has declined smoking cessation support twice before.\n\nPodiatry management provided:\nProtective footwear advice.\nCallus debrided carefully with minimal trauma.\nAdvised strongly against cutting her own nails or using any over-the-counter corn remedy.\nDaily foot inspection taught.\nSmoking cessation discussed again at length, with the specific link to her leg explained rather than general advice; she has agreed to a referral this time.\n\nPlan and concern:\nReferred to the vascular clinic. The rest pain with an ABPI of 0.52 raises the question of critical limb ischaemia, and I would ask that this be seen urgently rather than routinely.\nDuplex imaging and revascularisation assessment are needed.\n",
      "recipient": "Dr Helen Burnett, Consultant Vascular Surgeon",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for vascular assessment of suspected significant lower-limb arterial disease."
    },
    "guidanceNote": "Distinguish claudication from rest pain — the night rest pain and ABPI of 0.52 are the load-bearing findings that justify priority. Keep social history brief but include smoking."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-plantar-fasciitis-not-responding-referral-to-msk-physiotherapy",
    "title": "Podiatry — Plantar fasciitis not responding, referral to MSK physiotherapy",
    "prompt": "Using the case notes, write a letter to the musculoskeletal physiotherapy service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Steven Walsh, 45, office worker.\nFirst seen 20 June 2026. Reviewed 29 August 2026.\n\nPresenting complaint:\nA five-month history of right heel pain.\nWorst on the first steps in the morning and on standing after sitting at his desk.\nEases after ten minutes of walking, then worsens again late in the day.\nNo night pain. No pins and needles and no burning.\n\nHistory:\nBegan running in January after several sedentary years, going from nothing to four sessions weekly within a month.\nSits at a desk for around nine hours daily.\n\nExamination:\nTenderness at the medial calcaneal tubercle, well localised.\nPain reproduced on passive dorsiflexion of the toes — windlass test positive.\nTight gastrocnemius; ankle dorsiflexion 3 degrees with the knee extended, 12 degrees with the knee flexed.\nBody mass index 31.\nNo heel pad atrophy. No swelling.\nTinel's sign negative at the tarsal tunnel and no medial calcaneal nerve signs.\nPulses normal and sensation intact throughout.\nLumbar screen negative; no radicular features.\n\nPodiatry care so far, over ten weeks:\nHeel cushioning.\nLow-dye taping, which gave clear short-term relief and supports the diagnosis.\nOff-the-shelf orthoses with arch support, worn consistently.\nCalf stretching advised, though on questioning today he has been doing this only sporadically.\nLoad management advice; he stopped running in July.\nPartial improvement only — morning pain has reduced from severe to moderate but the late-day pain is unchanged.\n\nMedication:\nOccasional ibuprofen, perhaps twice weekly.\n\nAllergies:\nNone known.\n\nPlan:\nReferred to musculoskeletal physiotherapy for a structured progressive loading programme, which the current evidence supports as the mainstay and which has not yet been properly delivered here.\nSpecific gastrocnemius stretching with supervision, given the marked equinus.\nGait and running review before any return to running.\nWeight management has been discussed; he was receptive and would like a referral, which I have suggested he raise with you.\nOrthoses to continue.\nReview here in twelve weeks if symptoms persist.\n",
      "recipient": "The Senior Physiotherapist, MSK Physiotherapy Service",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for physiotherapy-led management of persistent plantar heel pain after first-line podiatry care."
    },
    "guidanceNote": "A clean, straightforward referral — keep it concise. The positive windlass test and tight calf are the findings physio will act on; the failed first-line care justifies escalation."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-recalcitrant-plantar-verruca-referral-for-specialist-treatment",
    "title": "Podiatry — Recalcitrant plantar verruca, referral for specialist treatment",
    "prompt": "Using the case notes, write a letter to the podiatry verruca clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMiss Chloe Davenport, 16, student.\nSeen with her mother, 28 August 2026.\n\nPresenting complaint:\nPainful plantar verruca beneath the left heel, present for eighteen months.\nNow with mosaic spread to three satellite lesions over the past six months.\nPain on weight-bearing, described as walking on a stone.\nLimiting her dance lessons, which she attends four times weekly and which matter greatly to her.\n\nExamination:\nMain lesion 9 mm diameter, well defined, with disruption of the normal skin striae.\nPinpoint capillaries visible on debridement.\nPain on lateral pressure rather than on direct pressure — this confirms a verruca rather than a corn.\nThree satellite lesions of 3 to 4 mm within 2 cm of the main lesion.\nNo surrounding cellulitis and no secondary infection.\n\nGeneral health:\nOtherwise fit and well.\nNo diabetes and no immunosuppression.\nGood circulation — pulses strong, capillary refill under two seconds.\nSensation intact.\nNot pregnant.\n\nTreatments already tried:\nOver-the-counter salicylic acid 17 per cent, applied daily for twelve weeks with regular debridement.\nCryotherapy, four sessions at three-week intervals, with no resolution and considerable pain.\nDuct tape occlusion for six weeks.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nCounselling given:\nExplained that most verrucae clear spontaneously within two years as immunity develops, and that treatment is not always necessary.\nIn this case the duration, the spread and the functional limitation together justify further treatment.\nDiscussed that no single treatment has a high success rate and that a course may be needed.\n\nPlan:\nReferred for consideration of needling under local anaesthetic, or stronger keratolytic therapy with salicylic or monochloroacetic acid, or microwave therapy where available.\nAdvised to continue regular filing and to keep the area covered at the dance studio and swimming pool to reduce transmission.\nWritten information given to take home.\nParental consent obtained for ongoing care and her mother will attend the appointment with her.\n",
      "recipient": "The Specialist Podiatrist, Verruca Clinic",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for advanced verruca treatment after failure of conservative therapy."
    },
    "guidanceNote": "Confirm the diagnosis is verruca rather than corn — the clinical signs distinguish them. State clearly what has already failed so the clinic doesn't repeat first-line care."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-rheumatoid-forefoot-deformity-referral-to-mdt-foot-clinic",
    "title": "Podiatry — Rheumatoid forefoot deformity, referral to MDT foot clinic",
    "prompt": "Using the case notes, write a letter to the rheumatology multidisciplinary foot clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Geraldine Foster, 64, retired school secretary.\nSeen 30 August 2026.\n\nBackground:\nSeropositive rheumatoid arthritis for fifteen years, diagnosed 2011.\nCurrently well controlled systemically; last DAS28 score 2.4.\nUnder rheumatology, reviewed six-monthly.\n\nPresenting complaint:\nIncreasing forefoot pain over about a year, both feet, right worse.\nShe describes the sensation as walking on pebbles.\nNow limiting her to about ten minutes on her feet.\n\nExamination:\nMarked hallux valgus bilaterally, approximately 40 degrees right and 35 degrees left.\nClawing of the lesser toes with dorsal subluxation at the metatarsophalangeal joints.\nPlantar fat pad displaced distally, leaving the metatarsal heads exposed.\nThick callus over the second and third metatarsal heads on the right.\nAn early pre-ulcerative lesion beneath the right second metatarsal head — macerated callus with underlying haemorrhage, skin still intact.\nBursitis over the dorsum of the second and third toes from shoe pressure.\nNo ulceration and no infection at present.\n\nVascular and neurological:\nPedal pulses present bilaterally. Capillary refill under two seconds.\nNeurology grossly intact; monofilament sensation present at all sites.\n\nFootwear:\nStandard high-street shoes with a narrow toe box and a 4 cm heel.\nThis is a significant contributor and she is reluctant to change, having always dressed smartly for work.\n\nMedication:\nMethotrexate 20 mg weekly.\nAdalimumab fortnightly.\nFolic acid 5 mg weekly.\nOmeprazole 20 mg daily.\n\nAllergies:\nSulfasalazine — rash.\n\nManagement provided today:\nCallus debrided from both metatarsal heads and the pre-ulcerative lesion offloaded.\nSemi-compressed felt padding applied.\nWider footwear advised and the reasoning explained in terms of her ulcer risk rather than fashion.\n\nPlan and concern:\nReferred to the multidisciplinary foot clinic.\nThe deformity is progressing and the pre-ulcerative lesion means ulceration is likely within months without intervention.\nBespoke orthoses with metatarsal offloading and a footwear assessment are needed, and a surgical opinion on forefoot reconstruction should be considered.\nHer immunosuppression raises the stakes should an ulcer become infected, and this is noted for the receiving team.\n",
      "recipient": "Dr Anita Kapoor, Consultant Rheumatologist",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for multidisciplinary assessment of progressive rheumatoid forefoot deformity and ulcer risk."
    },
    "guidanceNote": "The pre-ulcerative callus and immunosuppression are what raise urgency — make the ulcer-risk link explicit. Note the DMARD therapy as it affects healing and infection risk."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "PODIATRY",
    "slug": "wri-podiatry-suspected-osteomyelitis-in-diabetic-foot-urgent-hospital-referral",
    "title": "Podiatry — Suspected osteomyelitis in diabetic foot, urgent hospital referral",
    "prompt": "Using the case notes, write a letter to the on-call diabetic foot multidisciplinary team. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Terence Boyle, 62.\nSeen as an emergency appointment, 1 September 2026, 10.30 am.\n\nDiabetes history:\nType 2 diabetes for sixteen years.\nHbA1c 81 mmol/mol.\nEstablished peripheral neuropathy.\nPrevious ulcer on the same toe in 2024, healed.\n\nPresenting complaint:\nDeteriorating ulcer of the right hallux over three weeks.\nHe first noticed a blister after new shoes and has been dressing it himself.\nFeels generally unwell for four days, with poor appetite and shivering last night.\n\nWound assessment:\nDeep ulcer at the plantar aspect of the hallux, 15 mm diameter.\nProbes to bone — positive probe-to-bone test using a sterile blunt probe.\nMalodorous with purulent exudate.\nSurrounding erythema extending 3 cm proximally and not blanching.\nThe whole toe is swollen in a sausage shape — dactylitis.\nNo crepitus and no gas in the tissues clinically.\n\nSystemic:\nTemperature 38.1 degrees Celsius.\nPulse 96, blood pressure 132/78, respiratory rate 18.\nHe appears unwell.\n\nNeurovascular:\nNeuropathy present, monofilament absent at all sites.\nPedal pulses palpable but the foot is warm and swollen, which makes assessment difficult.\n\nInvestigations today:\nC-reactive protein 96 mg/L.\nWhite cell count 14.2.\nCapillary glucose 16 mmol/L.\nPlain radiograph shows cortical erosion and lucency around the distal phalanx, suggestive of osteomyelitis.\n\nMedication:\nMetformin 1 g twice daily.\nInsulin, recently started, with variable control.\nAtorvastatin 40 mg at night.\n\nAllergies:\nNone known.\n\nPlan and concern:\nUrgent same-day referral. I telephoned the diabetic foot service at 11.00 am and he is being admitted this afternoon.\nHe has been advised to attend hospital today and to remain non-weight-bearing; his daughter is driving him.\nThis is a limb-threatening deep infection requiring intravenous antibiotics, MRI and probable surgical debridement, and it meets the criteria for immediate admission rather than outpatient management.\nNo antibiotic has been started here so that deep tissue or bone culture is not compromised.\n",
      "recipient": "The On-Call Registrar, Hospital Diabetic Foot MDT",
      "letterType": "referral",
      "taskInstruction": "Refer this patient urgently for assessment of a deep diabetic foot infection with suspected osteomyelitis."
    },
    "guidanceNote": "Lead with the limb-threatening features — positive probe-to-bone, systemic upset, and X-ray changes. This is time-critical; make the same-day expectation unmistakable."
  }
];
