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
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-advice-letter-to-gp-on-dental-focus-before-cardiac-surgery",
    "title": "Dentistry — Advice letter to GP on dental focus before cardiac surgery",
    "prompt": "Using the case notes, write a letter to the general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "KELBURY DENTAL PRACTICE — PRE-OPERATIVE ASSESSMENT\nPatient: Mr Edward Hammond\nAge: 64\nLetter to: Dr Sandra Phillips, General Practitioner\nSeen: 12 August 2026 and 4 September 2026\n\nReason for attendance:\nAttended for pre-operative dental assessment requested by cardiology before valve replacement surgery. No current dental pain.\n\nDental history:\nIrregular attender; last seen at this practice in 2022. Several long-standing restorations, some over twenty years old. Brushes once daily, does not use interdental aids.\n\nMedical history:\nSevere aortic stenosis, awaiting valve replacement, listed in July 2026. Atrial fibrillation. Hypertension.\n\nMedications:\napixaban 5 mg twice daily\nbisoprolol 5 mg daily\natorvastatin 20 mg at night\n\nAllergies:\nNone known.\n\nExamination, 12 August 2026:\nTooth 47 unrestorable, gross caries to the pulp chamber, tender to percussion, with a discharging sinus buccally. Teeth 16 and 26 with probing depths of 8 mm and grade II mobility. Remaining dentition restorable. Generalised plaque with bleeding on probing at 40% of sites. Oral mucosa healthy, no soft-tissue lesions.\n\nRadiographs:\nPeriapical radiolucency associated with 47, approximately 6 mm. Advanced bone loss around 16 and 26, exceeding half the root length. Remaining bone levels acceptable.\n\nAssessment:\nThree teeth represent active or potential infective foci and should be removed before valve surgery, in line with standard practice for reducing the risk of infective endocarditis.\n\nPlan:\nExtraction of 47, 16 and 26. Liaison with cardiology regarding anticoagulation management around the extractions — apixaban is not to be stopped without their advice. Oral hygiene instruction reinforced and an interdental brush pack supplied. Review two weeks after extractions to confirm healing before surgery is scheduled.\n\nRequest:\nPlease confirm the anticipated surgical date so that extractions can be completed with adequate healing time.\n\nSocial:\nRetired; lives with his wife. Non-smoker for twenty years. Alcohol six units a week.\n\nAlso noted:\nAsked about denture options once the extractions are done. Reports a dry mouth in the mornings.",
      "recipient": "Dr Sandra Phillips, General Practitioner",
      "letterType": "advice",
      "taskInstruction": "Advise the GP of the dental clearance findings prior to the patient's planned heart valve replacement."
    },
    "guidanceNote": "Make clear which teeth require removal and that anticoagulation must be coordinated with cardiology before any extraction."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-discharge-of-implant-patient-to-referring-dentist",
    "title": "Dentistry — Discharge of implant patient to referring dentist",
    "prompt": "Using the case notes, write a letter to the referring general dental practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "OAKFIELD IMPLANT CLINIC — DISCHARGE\nPatient: Mrs Yvonne Carter\nAge: 60\nLetter to: Dr Imran Qureshi, Referring General Dental Practitioner\nTreatment period: 14 April 2026 to 4 September 2026\n\nReason for referral:\nReplacement of a previously extracted lower right first molar. Treatment is now complete.\n\nDental history:\nTooth 46 lost 14 months before the implant was placed, following a vertical root fracture. Good oral hygiene throughout and a motivated patient who attended every appointment. Remaining dentition sound.\n\nMedical history:\nWell-controlled hypertension. Former smoker, stopped three years ago. No diabetes. No bisphosphonates at any point.\n\nMedications:\nramipril 5 mg daily\n\nAllergies:\nNone known.\n\nTreatment provided:\n14 April 2026 — single titanium implant placed at the 46 site under local anaesthetic. Primary stability good, insertion torque 35 Ncm. No bone graft required.\nHealing period of four months, uneventful. Reviewed at two weeks and at eight weeks.\n21 August 2026 — screw-retained crown fitted. Occlusion checked in intercuspal position and in excursions; no interferences.\n\nExamination at fit and at today's review:\nHealthy peri-implant tissues. No bleeding on probing at any of the four sites. Probing depths 3 mm circumferentially. Radiograph shows stable crestal bone at the level of the first thread.\n\nPlan for ongoing care:\nDischarge to your care for routine maintenance. Three-monthly hygiene appointments for the first year, then six-monthly if the tissues remain stable. Peri-implant probing at each visit and an annual radiograph. Interdental cleaning around the implant reinforced; she has been shown a single-tufted brush and can use it.\n\nAccess code for the screw channel:\nComposite-sealed access, marked on the occlusal surface. Records held here if retrieval is ever required.\n\nSocial:\nWorks part time. Lives with her husband.\n\nAlso noted:\nAsked about whitening the upper anterior teeth. Due a routine eye test.",
      "recipient": "Dr Imran Qureshi, Referring General Dental Practitioner",
      "letterType": "discharge",
      "taskInstruction": "Discharge the patient back after successful placement and restoration of a single implant, outlining maintenance needs."
    },
    "guidanceNote": "Give specific maintenance intervals and monitoring requirements so the referring dentist can continue appropriate peri-implant care."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-discharge-to-gp-after-dental-abscess-management",
    "title": "Dentistry — Discharge to GP after dental abscess management",
    "prompt": "Using the case notes, write a letter to the general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "BROOKSIDE DENTAL PRACTICE — DISCHARGE\nPatient: Mrs Fatima Yusuf\nAge: 49\nLetter to: Dr Owen Bradley, General Practitioner\nSeen: 28 August 2026 (emergency) and 4 September 2026 (review)\n\nReason for attendance:\nSevere throbbing pain and facial swelling on the left side, with fever for two days before attending.\n\nDental history:\nIrregular attender, last seen in 2023. Tooth 36 grossly carious with a history of intermittent pain for several months.\n\nMedical history:\nType 2 diabetes, recently poorly controlled — HbA1c 78 mmol/mol in July 2026, up from 61 in January. Obesity, BMI 33.\n\nMedications:\ngliclazide 80 mg twice daily\nmetformin 1 g twice daily\n\nAllergies:\nPenicillin — rash.\n\nExamination on 28 August:\nDiffuse left buccal swelling extending to the lower border of the mandible. Tooth 36 grossly carious and tender to percussion. Regional lymphadenopathy. Temperature 38.1. Mild trismus, mouth opening 30 mm. No swelling in the floor of the mouth, no difficulty swallowing or breathing — the airway was assessed and was not compromised at any point.\n\nTreatment provided:\nIncision and drainage under local anaesthetic on 28 August, with a moderate quantity of pus released. Extraction of 36 at the same visit. Clarithromycin 500 mg twice daily for five days prescribed, given the penicillin allergy. Analgesia advice given.\n\nReview today, 4 September:\nAfebrile. Swelling largely resolved with only mild residual firmness. Socket healing satisfactorily. Mouth opening returned to normal.\n\nPlan:\nDischarge from dental care with routine recall arranged for six months. Preventive advice given and a high-fluoride toothpaste prescribed.\n\nRequest:\nPlease monitor glycaemic control, which is likely to have been disturbed by the infection, and review if the swelling recurs or systemic symptoms develop.\n\nSocial:\nWorks as a care assistant. Lives with her husband and two teenage children.\n\nAlso noted:\nAsked about replacing the missing tooth. Reports occasional heartburn.",
      "recipient": "Dr Owen Bradley, General Practitioner",
      "letterType": "discharge",
      "taskInstruction": "Inform the GP of the treatment provided for an acute dental abscess and request monitoring of the patient's blood glucose."
    },
    "guidanceNote": "Record the penicillin allergy and the antibiotic actually prescribed so the GP has an accurate, safe medication record."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-discharge-to-gp-after-suspicious-lesion-biopsy",
    "title": "Dentistry — Discharge to GP after suspicious lesion biopsy",
    "prompt": "Using the case notes, write a letter to the patient's GP. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "discharge",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "EASTGATE DENTAL PRACTICE — DISCHARGE\nPatient: Mr George Halloran\nAge: 58\nLetter to: Dr Priya Venkataraman, General Practitioner, Eastgate Medical Centre\nSeen: 7 August 2026 (biopsy), 21 August 2026 (sutures), 4 September 2026 (results)\n\nReason for attendance:\nRoutine check-up on 24 July 2026, at which an incidental white patch was noted on the left lateral border of the tongue. The patient had not been aware of it.\n\nDental history:\nIrregular attender, previously seen in 2023. Upper partial denture, five years old. Heavily restored dentition.\n\nMedical history:\nType 2 diabetes on metformin, HbA1c 64 mmol/mol in June 2026. Hypertension on amlodipine.\n\nSocial:\nSmokes 20 a day and has done for 35 years. Alcohol approximately 30 units a week, mostly beer at weekends.\n\nExamination:\nA 15 mm homogeneous white patch on the left lateral tongue, non-wipeable, with no induration and no ulceration. No cervical lymphadenopathy. No other mucosal lesion. Photograph taken and filed.\n\nProcedure:\nIncisional biopsy performed under local anaesthetic on 7 August 2026. Two sutures placed, removed on 21 August. Site healing well today with no residual defect.\n\nHistopathology, reported 28 August 2026:\nHyperkeratosis with mild epithelial dysplasia. No evidence of malignancy.\n\nAdvice given:\nStrong smoking cessation advice and alcohol reduction advice, with the link to oral cancer risk explained directly. Written information supplied. He was receptive and has said he will consider stopping.\n\nPlan:\nDischarge to routine dental recall with three-monthly soft-tissue review here. The lesion is to be re-referred immediately if it changes in size, colour or texture, or if it becomes ulcerated or indurated. A denture reline is planned separately.\n\nRequest:\nSupport with a smoking cessation referral, and a diabetes review, as glycaemic control has drifted.\n\nAlso noted:\nRetired bus driver. Asked about a new denture. Enjoys sea fishing.",
      "recipient": "Dr. Priya Venkataraman, General Practitioner, Eastgate Medical Centre",
      "letterType": "discharge",
      "taskInstruction": "Inform the GP of a benign biopsy outcome, the advice given, and request support with smoking cessation and ongoing monitoring."
    },
    "guidanceNote": "A discharge letter should reassure and hand over clearly: lead with the benign biopsy result, then the lifestyle risk factors and the specific support you want the GP to provide. The denture reline is your own follow-up, not the GP's, so leave it out or mention it only in passing."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-endodontic-referral-for-calcified-canal",
    "title": "Dentistry — Endodontic referral for calcified canal",
    "prompt": "Using the case notes, write a letter to the endodontist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "LAKESIDE DENTAL PRACTICE — REFERRAL\nPatient: Ms Carol Whitfield\nAge: 45\nReferred to: Dr Priya Nair, Specialist Endodontist\nSeen: 21 August 2026 and 4 September 2026\n\nReason for referral:\nRoot canal treatment of a calcified upper left first molar which could not be negotiated in general practice.\n\nPresenting complaint:\nDull ache and sensitivity to heat in the upper left back tooth, present for six weeks and worsening. The pain lingers for around 30 seconds after a hot drink. No spontaneous night pain reported until the past week.\n\nDental history:\nTooth 26 heavily restored, with a large amalgam placed twelve years ago and a cuspal fracture repaired in 2021. Regular attender since 2019, good oral hygiene.\n\nMedical history:\nWell-controlled asthma, no admissions. Otherwise fit and well.\n\nMedications:\nsalbutamol inhaler as required\n\nAllergies:\nNone known.\n\nExamination:\nTooth 26 tender to percussion. No swelling, no sinus tract, no increased mobility. Probing depths within normal limits. Positive but exaggerated and lingering response to thermal testing. Adjacent teeth respond normally.\n\nRadiograph:\nPeriapical radiolucency at the mesiobuccal root of 26, approximately 4 mm. Pulp chamber and canals appear sclerosed and heavily calcified, particularly in the mesial root. No evidence of a separated instrument.\n\nTreatment attempted, 21 August 2026:\nAccess cavity commenced under rubber dam. Palatal canal located. Mesiobuccal and distobuccal canals could not be located with hand files after 40 minutes. Access left conservative, dressed with calcium hydroxide and a temporary restoration placed. The patient reports the pain has settled since.\n\nPlan:\nRefer for endodontic treatment, likely to require magnification and ultrasonic troughing. The patient understands the tooth may not be restorable and that extraction remains the alternative.\n\nSocial:\nWorks in an office. Lives with her partner. Non-smoker.\n\nAlso noted:\nAsked about the cost. Enquired about tooth whitening.",
      "recipient": "Dr Priya Nair, Specialist Endodontist",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for root canal treatment of a calcified upper first molar that could not be negotiated in general practice."
    },
    "guidanceNote": "State clearly what treatment you have already attempted so the specialist knows the tooth is currently dressed and temporised."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-impacted-lower-third-molar-referral",
    "title": "Dentistry — Impacted lower third molar referral",
    "prompt": "Using the case notes, write a letter to the oral & maxillofacial surgeon. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "RIVERSIDE DENTAL PRACTICE — REFERRAL\nPatient: Ms Hannah Whitlock\nAge: 27\nReferred to: Mr Daniel Okafor, Oral and Maxillofacial Surgeon, Riverside Dental Hospital\nSeen: 4 September 2026\n\nReason for referral:\nRecurrent pericoronitis associated with an impacted lower left third molar. Surgical assessment requested.\n\nPresenting complaint:\nThree-week history of recurrent pain and swelling around the lower left back tooth, this being the third episode in eight months. Difficulty opening the mouth fully for the past four days. Disturbed sleep for three nights.\n\nPrevious episodes:\nJanuary 2026 — pain and swelling, treated with irrigation and oral hygiene advice, resolved in five days.\nMay 2026 — recurrence, treated with metronidazole, resolved in a week.\n\nDental history:\nRegular attender. Restorations at 36 and 46. No prior extractions. Good oral hygiene, although access to the 38 region is difficult.\n\nMedical history:\nMild asthma. No other conditions.\n\nMedications:\nsalbutamol inhaler as required\ncombined oral contraceptive pill\n\nAllergies:\nPenicillin — rash as a child.\n\nExamination today:\nTooth 38 partially erupted, mesioangular impaction. Operculum over the distal aspect inflamed and tender, with slight pus on pressure. Limited mouth opening at approximately 30 mm. No facial swelling, no lymphadenopathy, afebrile. No swelling in the floor of the mouth and no difficulty swallowing.\n\nRadiograph:\nPanoramic radiograph shows 38 in mesioangular impaction. Roots in close proximity to the inferior dental canal, with possible superimposition over the canal — a cone beam scan may be indicated before surgery.\n\nManagement to date:\nIrrigation under the operculum today. Chlorhexidine mouthwash advised. Metronidazole 400 mg three times daily for five days commenced, given the penicillin allergy.\n\nPlan:\nRefer for surgical removal assessment given the recurrent episodes and the proximity to the inferior dental canal. The patient has been warned of the risk to the nerve.\n\nSocial:\nAdministrative assistant. Non-smoker. Occasional alcohol.\n\nAlso noted:\nAsked about time off work. Enquired about a whitening treatment.",
      "recipient": "Mr. Daniel Okafor, Oral & Maxillofacial Surgeon, Riverside Dental Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for surgical assessment and removal of a symptomatic, partially erupted lower left third molar."
    },
    "guidanceNote": "This is a referral, so your aim is a clear request for surgical assessment — foreground the recurrent pericoronitis, the radiographic IDC proximity, and the penicillin allergy. The asthma and contraceptive pill are relevant to surgical/anaesthetic safety; the childhood restorations are not, so omit them."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-orthodontic-referral-for-crowding-and-impacted-canine",
    "title": "Dentistry — Orthodontic referral for crowding and impacted canine",
    "prompt": "Using the case notes, write a letter to the orthodontist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "ELMWOOD DENTAL PRACTICE — REFERRAL\nPatient: Miss Aisha Rahman\nAge: 13\nReferred to: Dr Samuel Reece, Specialist Orthodontist\nSeen: 4 September 2026, attending with her mother\n\nReason for referral:\nDental crowding with a palatally displaced upper left permanent canine. Assessment requested.\n\nPresenting complaint:\nHer mother is concerned about crooked upper teeth and what she describes as a missing canine. The patient herself is conscious of the appearance and has begun covering her mouth when she smiles.\n\nDental history:\nCaries free. Good oral hygiene with no bleeding on probing. Regular attender since the age of four.\n\nMedical history:\nNothing relevant. No syndromes. No history of trauma to the anterior region.\n\nMedications:\nNone.\n\nAllergies:\nNone known.\n\nExamination:\nClass II division 1 incisor relationship. Overjet 6 mm, overbite increased but not complete. Moderate crowding in both arches, around 6 mm in the upper and 4 mm in the lower. Retained deciduous upper left canine 63, firm, with no mobility. Permanent canine 23 not palpable buccally; a slight palatal bulge is present. All other permanent teeth erupted except third molars. Oral hygiene good and motivation appears high.\n\nRadiograph:\nPanoramic radiograph shows 23 palatally positioned, overlapping the root of the lateral incisor by more than half its width. No resorption of the adjacent roots is evident at present. Root development of 23 approximately three-quarters complete.\n\nPlan:\nRefer for orthodontic assessment regarding fixed appliance treatment and possible surgical exposure of 23. The roots of 22 should be monitored radiographically in the interim as resorption can develop.\n\nConsent and expectations:\nThe mother is keen for treatment. Both have been told that treatment is likely to take two years or more and depends on excellent oral hygiene.\n\nSocial:\nYear 9 pupil. Plays the clarinet. Lives with both parents and one older brother.\n\nAlso noted:\nAsked whether treatment can be done in the school holidays. Due a routine fluoride varnish.",
      "recipient": "Dr Samuel Reece, Specialist Orthodontist",
      "letterType": "referral",
      "taskInstruction": "Refer the adolescent patient for assessment of dental crowding and a palatally displaced upper canine."
    },
    "guidanceNote": "Mention the radiographic position of the canine and that no root resorption is yet visible, as this affects urgency of intervention."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-periodontal-referral-for-advanced-bone-loss",
    "title": "Dentistry — Periodontal referral for advanced bone loss",
    "prompt": "Using the case notes, write a letter to the periodontist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "NORTHGATE DENTAL PRACTICE — REFERRAL\nPatient: Mr David Okoro\nAge: 52\nReferred to: Dr Helena Marsh, Specialist Periodontist\nSeen: 4 September 2026\n\nReason for referral:\nGeneralised stage III periodontitis, unresponsive to non-surgical therapy. Specialist management requested.\n\nPresenting complaint:\nBleeding gums, loose lower front teeth and persistent halitosis for eight months. Now finding it difficult to bite into firm food.\n\nDental history:\nIrregular attender until this year. Full-mouth debridement and oral hygiene instruction completed at this practice on 8 May 2026, with a re-evaluation on 10 July showing minimal improvement. Plaque control has improved but remains suboptimal in the posterior sextants.\n\nMedical history:\nType 2 diabetes with an HbA1c of 8.4% at the last check in June 2026. Hypertension.\n\nSocial:\nSmokes 15 cigarettes a day and has done for thirty years. Has declined cessation support twice.\n\nMedications:\nmetformin 1 g twice daily\namlodipine 5 mg daily\n\nAllergies:\nPenicillin.\n\nExamination:\nGeneralised probing depths of 6 to 8 mm, deepest at the lower incisors and upper molars. Grade II mobility at 31 and 41. Basic periodontal examination score 4 in all sextants. Bleeding on probing at 70% of sites. Suppuration from two sites in the lower anterior region. Furcation involvement grade II at 16 and 46.\n\nRadiographs:\nGeneralised horizontal bone loss with vertical defects at 16, 26 and 36, exceeding one-third to one-half of the root length. No periapical pathology.\n\nPlan:\nRefer for periodontal assessment and consideration of surgical therapy. Smoking cessation and glycaemic control reinforced today, as both materially affect the outcome and he has been told the treatment is unlikely to succeed without them.\n\nSocial:\nWorks as a delivery driver. Lives with his wife.\n\nAlso noted:\nAsked about replacing the lower incisors if they are lost. Reports a dry mouth.",
      "recipient": "Dr Helena Marsh, Specialist Periodontist",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for specialist management of generalised stage III periodontitis unresponsive to non-surgical therapy."
    },
    "guidanceNote": "Include diabetes control and smoking status because both directly affect periodontal prognosis and the specialist's treatment planning."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-referral-to-gp-for-suspected-oral-candidiasis-and-dry-mouth",
    "title": "Dentistry — Referral to GP for suspected oral candidiasis and dry mouth",
    "prompt": "Using the case notes, write a letter to the general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "PARKVIEW DENTAL PRACTICE — REFERRAL\nPatient: Mr Albert Siu\nAge: 71\nReferred to: Dr Naomi Clarke, General Practitioner\nSeen: 4 September 2026\n\nReason for referral:\nRecurrent oral candidiasis with marked xerostomia. Review of medications and investigation of underlying causes requested.\n\nPresenting complaint:\nSore, burning mouth and difficulty wearing the upper denture for six weeks. Describes a persistent bad taste and difficulty eating dry food without a drink.\n\nDental history:\nComplete upper and partial lower dentures, four years old. Denture hygiene poor — he reports wearing them overnight and cleaning them with toothpaste only.\n\nMedical history:\nCOPD on a regular inhaled corticosteroid. Depression, stable. Benign prostatic hyperplasia.\n\nMedications:\nfluticasone inhaler twice daily\nsertraline 100 mg daily\ntamsulosin 400 mcg daily\nsalbutamol inhaler as required\n\nAllergies:\nNone known.\n\nExamination:\nErythematous palatal mucosa conforming to the denture outline. Angular cheilitis bilaterally, with fissuring and crusting. White removable plaques on the dorsum of the tongue leaving an erythematous base. Markedly reduced salivary pooling in the floor of the mouth. No induration and no ulceration. No cervical lymphadenopathy.\n\nTreatment started today:\nDenture hygiene advice given, including removal overnight and soaking in a chlorhexidine solution. Topical antifungal prescribed. A saliva substitute has been recommended.\n\nRequests:\nReview of inhaler technique with a spacer, and rinsing after use, as the inhaled corticosteroid is likely to be a major contributor. Review of the medications contributing to xerostomia, particularly the sertraline and tamsulosin. Screening for undiagnosed diabetes, given recurrent candidiasis in an older patient.\n\nPlan here:\nReview in three weeks. A denture reline will be considered once the mucosa has settled.\n\nSocial:\nWidower, lives alone. Ex-smoker, stopped in 2011. Two daughters who visit weekly.\n\nAlso noted:\nAsked about a denture adhesive. Reports his hearing aid needs new batteries.",
      "recipient": "Dr Naomi Clarke, General Practitioner",
      "letterType": "referral",
      "taskInstruction": "Ask the GP to review the patient's medications and investigate possible underlying causes of recurrent oral candidiasis and xerostomia."
    },
    "guidanceNote": "Frame the medication review as a request, and list the relevant xerostomia-inducing drugs so the GP can act efficiently."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-referral-to-oral-medicine-for-chronic-mucosal-lesion",
    "title": "Dentistry — Referral to oral medicine for chronic mucosal lesion",
    "prompt": "Using the case notes, write a letter to the oral medicine specialist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "STONEBRIDGE DENTAL PRACTICE — REFERRAL\nPatient: Mrs Theresa Knowles\nAge: 58\nReferred to: Dr Lillian Hart, Consultant in Oral Medicine\nSeen: 4 September 2026\n\nReason for referral:\nBilateral white striations with erosive areas, clinically suggestive of oral lichen planus. Specialist assessment and possible biopsy requested.\n\nPresenting complaint:\nSoreness of the inner cheeks and gums, present for five months and gradually worsening. Markedly worse with spicy or acidic food; she has stopped eating tomatoes and citrus altogether. Describes the gums as feeling raw when brushing.\n\nDental history:\nComplete upper denture, partial lower denture with a cobalt-chromium framework, fitted 2021. Remaining teeth sound with no active caries.\n\nMedical history:\nHypothyroidism, stable on replacement. Hepatitis C, treated and cleared in 2019.\n\nMedications:\nlevothyroxine 75 mcg each morning\n\nAllergies:\nNone known.\n\nSocial:\nNon-smoker. Minimal alcohol. No betel or areca nut use.\n\nExamination:\nBilateral lacy white striations on the buccal mucosa, symmetrical, with erythematous erosive patches on the left buccal mucosa measuring approximately 10 mm. Desquamative gingivitis affecting the lower labial gingiva. Lesions are wipe-resistant. No fixed indurated mass and no ulceration with rolled margins. No cervical lymphadenopathy. The denture framework does not contact the affected areas directly.\n\nPhotographs:\nTaken today with consent and filed in the record for comparison.\n\nPlan:\nRefer for specialist assessment and biopsy to confirm the diagnosis and exclude dysplasia. Topical corticosteroid management to be considered by your service. Symptomatic advice given in the meantime — avoid sodium lauryl sulphate toothpaste and spicy foods. Oral hygiene reinforced gently, as plaque worsens desquamative gingivitis.\n\nSocial:\nRetired librarian. Lives with her husband.\n\nAlso noted:\nAsked whether the denture is to blame. Enquired about a soft toothbrush.\nPrevious dental history:\nRegular attender. Upper partial denture fitted 2021 and relined 2024. No recent restorative work in the affected quadrant.\n\nMedication review:\nAmlodipine was started in 2023, roughly six months before the lesions were first noticed. The patient has not altered any dose herself.\n",
      "recipient": "Dr Lillian Hart, Consultant in Oral Medicine",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for investigation of bilateral white striations and erosive areas suggestive of oral lichen planus."
    },
    "guidanceNote": "Note the hepatitis C history, as it has a recognised association with lichen planus and is relevant to the specialist's assessment."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-referral-to-oral-surgeon-after-dental-trauma",
    "title": "Dentistry — Referral to oral surgeon after dental trauma",
    "prompt": "Using the case notes, write a letter to the oral and maxillofacial surgeon. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "HARBOURVIEW DENTAL PRACTICE — URGENT REFERRAL\nPatient: Mr Thomas Bell\nAge: 19\nReferred to: Ms Rebecca Lyons, Oral and Maxillofacial Surgery Registrar\nSeen: 4 September 2026, three hours after injury\n\nReason for referral:\nSuspected mid-third root fracture with displacement of an upper central incisor following a sporting injury.\n\nThe injury:\nDirect trauma to the front teeth during a rugby match at approximately 14:00 today. He was not wearing a mouthguard. No loss of consciousness, no vomiting, no headache and no visual disturbance. Able to give a clear account of events.\n\nDental history:\nPreviously sound anterior teeth, no restorations. Regular attender.\n\nMedical history:\nFit and well. Tetanus immunisation up to date, confirmed with the practice.\n\nMedications:\nNone.\n\nAllergies:\nNone known.\n\nExamination:\nTooth 21 displaced palatally and extruded by 3 mm, grade II mobile and tender to touch. Tooth 11 sensitive to percussion but stable and not displaced. Small laceration of the upper lip, approximately 8 mm, cleaned and no foreign body felt on palpation. No alveolar segment mobility. Occlusion deranged anteriorly. Sensibility testing unreliable at this stage and not relied upon.\n\nRadiograph:\nPeriapical view suggests a mid-third root fracture of 21. No alveolar fracture seen. Tooth 11 appears intact.\n\nTreatment provided today:\nTooth 21 repositioned under local anaesthetic and a flexible splint applied from 12 to 22. Occlusion checked. Analgesia advice given. Soft diet advised and chlorhexidine mouthwash prescribed.\n\nPlan:\nRefer for specialist review of the root-fractured tooth, splint monitoring and pulp vitality assessment. He has been told that the tooth may lose vitality and that root treatment may be needed later.\n\nSocial:\nUniversity student. Lives in shared accommodation. Non-smoker.\n\nAlso noted:\nAsked when he can play again. Enquired about a custom mouthguard.",
      "recipient": "Ms Rebecca Lyons, Oral & Maxillofacial Surgery Registrar",
      "letterType": "referral",
      "taskInstruction": "Refer the patient following a sporting injury with a suspected root fracture and displaced upper incisor."
    },
    "guidanceNote": "State the time elapsed since injury and the splinting already performed, as timing is critical in trauma management."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-referral-to-oral-surgeon-for-dentigerous-cyst",
    "title": "Dentistry — Referral to oral surgeon for dentigerous cyst",
    "prompt": "Using the case notes, write a letter to the oral and maxillofacial surgeon. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "FAIRMONT DENTAL PRACTICE — REFERRAL\nPatient: Mr Liam Foster\nAge: 27\nReferred to: Mr Jonathan Pryce, Consultant Oral and Maxillofacial Surgeon\nSeen: 4 September 2026\n\nReason for referral:\nA well-defined radiolucency associated with an unerupted lower left third molar. Surgical management requested.\n\nPresenting complaint:\nDull pressure and occasional swelling at the left lower jaw over the past four months. No acute pain and no discharge. He describes the swelling as coming and going and had assumed it was related to grinding his teeth.\n\nDental history:\nCaries free. Regular attender. The finding was noted on a routine panoramic radiograph taken on 21 August 2026 as part of a general assessment.\n\nMedical history:\nFit and well. No previous surgery.\n\nMedications:\nNone.\n\nAllergies:\nNone known.\n\nExamination:\nMild buccal expansion of the left posterior mandible, palpable but not visible externally. Overlying mucosa intact, non-tender and normal in colour. No egg-shell crackling. Tooth 38 unerupted with no communication to the oral cavity. Tooth 37 vital on testing and not mobile. No lip or chin paraesthesia — specifically asked and denied. No lymphadenopathy.\n\nRadiograph:\nPanoramic view shows a well-corticated unilocular radiolucency of approximately 3 cm, attached at the cemento-enamel junction of the impacted 38 and displacing it inferiorly towards the lower border. No root resorption of 37. The inferior dental canal lies in close proximity to the inferior margin of the lesion.\n\nPlan:\nRefer for surgical exploration, enucleation and histopathology. The patient has been warned about the proximity of the inferior dental nerve and the possibility of altered sensation, and about the risk of jaw fracture given the size of the lesion.\n\nSocial:\nWorks as a software developer. Lives with his partner. Non-smoker.\n\nAlso noted:\nAsked how long he would need off work. Enquired about wisdom teeth on the right side.",
      "recipient": "Mr Jonathan Pryce, Consultant Oral & Maxillofacial Surgeon",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for surgical management of a well-defined radiolucency associated with an unerupted lower wisdom tooth."
    },
    "guidanceNote": "Highlight the proximity of the inferior dental canal, as it influences surgical planning and consent for nerve risk."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-referral-to-prosthodontist-for-full-mouth-rehabilitation",
    "title": "Dentistry — Referral to prosthodontist for full-mouth rehabilitation",
    "prompt": "Using the case notes, write a letter to the prosthodontist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "GREENWAY DENTAL PRACTICE — REFERRAL\nPatient: Mr Graham Pollard\nAge: 56\nReferred to: Dr Henry Voss, Specialist Prosthodontist\nSeen: 4 September 2026\n\nReason for referral:\nSevere tooth surface loss with reduced occlusal vertical dimension. Complex prosthodontic management requested.\n\nPresenting complaint:\nWorn, sensitive teeth and concern about what he describes as a collapsing bite, developing over several years and accelerating in the last two. Sensitivity to cold on most posterior teeth. Increasingly dissatisfied with the appearance of the upper anterior teeth, which he says look short.\n\nDental history:\nHeavy bruxist. A soft splint was supplied in 2022 and is worn inconsistently, perhaps two nights a week. Multiple cracked restorations, three replaced in the past eighteen months.\n\nMedical history:\nGastro-oesophageal reflux disease, on treatment since 2019 but with breakthrough symptoms two or three nights a week. Anxiety.\n\nMedications:\nomeprazole 20 mg daily\ndiazepam 2 mg occasionally\n\nAllergies:\nNone known.\n\nSocial:\nPreviously drank two litres of cola a day; now reduced to occasional. Non-smoker. Works long hours and identifies stress as a trigger for clenching.\n\nExamination:\nGeneralised tooth surface loss with exposed dentine on all posterior occlusal surfaces. Cupping on the occlusal surfaces of the lower molars. Reduced occlusal vertical dimension with a loss of approximately 4 mm. Several teeth with short clinical crowns, particularly the upper premolars. No active caries. Periodontal status stable, basic periodontal examination 1 in all sextants. Study models mounted and photographs taken today.\n\nPlan:\nRefer for assessment regarding occlusal rehabilitation, possible increase in vertical dimension and indirect restorations. Reflux control needs optimising first, and I have written separately to the general practitioner about this. Splint wear reinforced.\n\nSocial:\nMarried, two adult children. Works as a project manager.\n\nAlso noted:\nAsked about the likely cost and duration. Enquired about whitening.",
      "recipient": "Dr Henry Voss, Specialist Prosthodontist",
      "letterType": "referral",
      "taskInstruction": "Refer the patient for complex prosthodontic management of severe tooth surface loss and reduced vertical dimension."
    },
    "guidanceNote": "Identify both the mechanical (bruxism) and chemical (reflux, diet) contributors so the specialist can plan durable restorations."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-referral-to-special-care-dentistry-for-anxious-patient",
    "title": "Dentistry — Referral to special care dentistry for anxious patient",
    "prompt": "Using the case notes, write a letter to the special care dentistry service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "WILLOWBANK DENTAL PRACTICE — REFERRAL\nPatient: Mr Ryan Doyle\nAge: 34\nReferred to: Dr Claire Donovan, Special Care Dentistry Lead\nSeen: 4 September 2026, attending with his key worker\n\nReason for referral:\nToothache and a broken tooth in a patient with a learning disability and severe dental anxiety, unable to tolerate examination in general practice.\n\nPresenting complaint:\nPain in the lower right quadrant for about three weeks, reported by the key worker, who has noticed him holding his face and refusing hard food. He has become withdrawn at mealtimes.\n\nDental history:\nAvoids dental care. Last seen five years ago, when treatment was abandoned. Gagging and visible distress on any attempt to examine, including today. He tolerated the chair for approximately two minutes.\n\nMedical history:\nModerate learning disability. Epilepsy, well controlled, last seizure over two years ago. Lives in supported accommodation with 24-hour staffing.\n\nMedications:\nsodium valproate 600 mg twice daily\n\nAllergies:\nNone known.\n\nExamination, limited:\nA broken-down tooth in the lower right quadrant with visible caries, most likely 46. Generalised plaque and gingival inflammation. No facial swelling and no lymphadenopathy. Afebrile. Full charting was not possible and no radiographs could be taken.\n\nCapacity and consent:\nAssessed today as lacking capacity to consent to dental treatment. A best-interests process will be required, involving the key worker, his sister as next of kin, and the supported living team. Documentation started and enclosed.\n\nPlan:\nRefer for assessment with additional support, likely requiring intravenous sedation, alongside a desensitisation approach over several visits. Preventive advice given to the key worker, including supervised brushing and a high-fluoride toothpaste, which has been prescribed today.\n\nSocial:\nAttends a day centre three days a week. Enjoys music and swimming.\n\nAlso noted:\nThe key worker asked about sugar-free alternatives to his usual drinks. He is due an annual health check.",
      "recipient": "Dr Claire Donovan, Special Care Dentistry Lead",
      "letterType": "referral",
      "taskInstruction": "Refer the patient with a learning disability and severe dental anxiety for treatment under appropriate support or sedation."
    },
    "guidanceNote": "Document the epilepsy and current medication, as these are essential for safe sedation planning and consent considerations."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DENTISTRY",
    "slug": "wri-dentistry-transfer-of-paediatric-patient-for-hospital-extractions",
    "title": "Dentistry — Transfer of paediatric patient for hospital extractions",
    "prompt": "Using the case notes, write a letter to the paediatric dental department. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "MEADOW DENTAL PRACTICE — TRANSFER\nPatient: Master Kofi Mensah\nAge: 5\nTransferred to: Dr Megan Aldridge, Consultant in Paediatric Dentistry\nSeen: 4 September 2026, attending with his mother\n\nReason for transfer:\nExtraction of multiple carious primary teeth under general anaesthesia.\n\nPresenting complaint:\nNight-time toothache and two episodes of facial swelling over the past three months, the most recent in August 2026, treated with antibiotics by the general practitioner. Sleep is disturbed two or three nights a week and he has missed several days of school.\n\nDental history:\nFirst dental visit at the age of four. Uncooperative for in-chair treatment on three separate attempts. Unable to accept local anaesthetic. Inhalation sedation was attempted in June 2026 and was not tolerated.\n\nMedical history:\nModerate persistent asthma with frequent hospital admissions, most recently in May 2026. Under shared care with a paediatrician.\n\nMedications:\ninhaled corticosteroid twice daily\nmontelukast 4 mg at night\nsalbutamol inhaler as required\n\nAllergies:\nNone known.\n\nExamination:\nGross caries with pulpal involvement at 54, 55, 64, 74, 75, 84 and 85. A sinus tract adjacent to 74. Permanent first molars erupting and currently sound. Plaque heavy throughout. Radiographs not possible.\n\nPlan:\nTransfer for comprehensive dental rehabilitation under general anaesthesia. Preventive advice and fluoride varnish given to the carers today. Liaison with the paediatrician is requested regarding asthma control and fitness for general anaesthesia.\n\nDiet and prevention:\nFrequent sugary drinks between meals, including juice in a bottle at bedtime. Advice given and a written plan supplied. Toothbrushing is supervised but irregular.\n\nSocial:\nLives with his mother and two older siblings. Started school in September 2026.\n\nAlso noted:\nMother asked about free dental treatment. He is due his preschool booster.\nBehaviour:\nAnxious and uncooperative in the chair. Two previous attempts at treatment under local anaesthesia were abandoned. Inhalation sedation was not tolerated.\n\nCarer's concerns:\nMother reports disturbed sleep, repeated courses of antibiotics and time off work and nursery.\n",
      "recipient": "Dr Megan Aldridge, Consultant in Paediatric Dentistry",
      "letterType": "transfer",
      "taskInstruction": "Transfer the child for extraction of multiple carious primary teeth under general anaesthesia."
    },
    "guidanceNote": "Emphasise the asthma history and need for paediatrician liaison, as these affect fitness and planning for general anaesthesia."
  }
];
