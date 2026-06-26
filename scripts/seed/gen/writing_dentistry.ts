import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Periodontal referral for advanced bone loss",
    prompt:
      "Using the case notes, write a letter to the periodontist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Helena Marsh, Specialist Periodontist",
      taskInstruction:
        "Refer the patient for specialist management of generalised stage III periodontitis unresponsive to non-surgical therapy.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr David Okoro, 52. Presenting complaint: bleeding gums, loose lower front teeth, persistent halitosis for 8 months. Dental history: irregular attender; full-mouth debridement and oral hygiene instruction completed 4 months ago at this practice. Medical history: type 2 diabetes (HbA1c 8.4%), hypertension. Social: smokes 15 cigarettes/day. Medications: metformin, amlodipine. Allergies: penicillin. Examination: generalised probing depths 6-8 mm, grade II mobility 31/41, BPE 4 in all sextants, bleeding on probing 70%. Radiographs: generalised horizontal and vertical bone loss exceeding one-third to one-half root length. Plan: refer for periodontal assessment and possible surgical therapy; reinforce smoking cessation and glycaemic control.",
    },
    guidanceNote:
      "Include diabetes control and smoking status because both directly affect periodontal prognosis and the specialist's treatment planning.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Endodontic referral for calcified canal",
    prompt:
      "Using the case notes, write a letter to the endodontist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Priya Nair, Specialist Endodontist",
      taskInstruction:
        "Refer the patient for root canal treatment of a calcified upper first molar that could not be negotiated in general practice.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Ms Carol Whitfield, 45. Presenting complaint: dull ache and sensitivity to heat in upper left back tooth, lingering 30 seconds. Dental history: tooth 26 heavily restored, amalgam placed 12 years ago. Medical history: well controlled asthma; otherwise fit. Medications: salbutamol inhaler as needed. Allergies: none known. Examination: tooth 26 tender to percussion, no swelling, no sinus tract; positive but exaggerated response to thermal testing. Radiograph: periapical radiolucency at mesiobuccal root; pulp chamber and canals appear sclerosed and calcified. Treatment attempted: access cavity started but canals could not be located with hand files; dressed with calcium hydroxide and temporary restoration placed. Plan: refer for endodontic treatment, likely requiring magnification and ultrasonics.",
    },
    guidanceNote:
      "State clearly what treatment you have already attempted so the specialist knows the tooth is currently dressed and temporised.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Orthodontic referral for crowding and impacted canine",
    prompt:
      "Using the case notes, write a letter to the orthodontist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Samuel Reece, Specialist Orthodontist",
      taskInstruction:
        "Refer the adolescent patient for assessment of dental crowding and a palatally displaced upper canine.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Miss Aisha Rahman, 13. Presenting complaint: parent concerned about crooked upper teeth and a 'missing' canine. Dental history: caries free, good oral hygiene, regular attender. Medical history: nil relevant; no syndromes. Medications: none. Allergies: none known. Examination: class II division 1 incisor relationship, 6 mm overjet, moderate upper and lower crowding. Retained deciduous upper left canine 63; permanent canine 23 not palpable buccally. Radiograph: OPG shows 23 palatally positioned, overlapping the lateral incisor root, no resorption of adjacent roots evident. Plan: refer for orthodontic assessment regarding fixed appliance treatment and possible surgical exposure of 23; monitor adjacent roots.",
    },
    guidanceNote:
      "Mention the radiographic position of the canine and that no root resorption is yet visible, as this affects urgency of intervention.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Referral to oral medicine for chronic mucosal lesion",
    prompt:
      "Using the case notes, write a letter to the oral medicine specialist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Lillian Hart, Consultant in Oral Medicine",
      taskInstruction:
        "Refer the patient for investigation of bilateral white striations and erosive areas suggestive of oral lichen planus.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Theresa Knowles, 58. Presenting complaint: soreness of inner cheeks and gums, worse with spicy or acidic food, present for 5 months. Dental history: complete upper denture, partial lower; sound remaining teeth. Medical history: hypothyroidism, hepatitis C (treated). Medications: levothyroxine. Allergies: none known. Social: non-smoker, minimal alcohol. Examination: bilateral lacy white striations on buccal mucosa with erythematous erosive patches; desquamative gingivitis on lower labial gingiva. No fixed indurated mass; lesions wipe-resistant. Plan: refer for specialist assessment and possible biopsy to confirm diagnosis and exclude dysplasia; consider topical corticosteroid management.",
    },
    guidanceNote:
      "Note the hepatitis C history, as it has a recognised association with lichen planus and is relevant to the specialist's assessment.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Referral to oral surgeon for dentigerous cyst",
    prompt:
      "Using the case notes, write a letter to the oral and maxillofacial surgeon. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Mr Jonathan Pryce, Consultant Oral & Maxillofacial Surgeon",
      taskInstruction:
        "Refer the patient for surgical management of a well-defined radiolucency associated with an unerupted lower wisdom tooth.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Liam Foster, 27. Presenting complaint: dull pressure and occasional swelling at the left lower jaw; no acute pain. Dental history: caries free, regular attender; finding noted on routine OPG. Medical history: fit and well. Medications: none. Allergies: none known. Examination: mild buccal expansion left posterior mandible, overlying mucosa intact and non-tender. Tooth 38 unerupted. Radiograph: OPG shows a well-corticated unilocular radiolucency approximately 3 cm attached at the cementoenamel junction of impacted 38, displacing it inferiorly; no root resorption of 37. Inferior dental canal in close proximity. Plan: refer for surgical exploration, enucleation and histopathology; warn re inferior dental nerve proximity.",
    },
    guidanceNote:
      "Highlight the proximity of the inferior dental canal, as it influences surgical planning and consent for nerve risk.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Referral to GP for suspected oral candidiasis and dry mouth",
    prompt:
      "Using the case notes, write a letter to the general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Naomi Clarke, General Practitioner",
      taskInstruction:
        "Ask the GP to review the patient's medications and investigate possible underlying causes of recurrent oral candidiasis and xerostomia.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Albert Siu, 71. Presenting complaint: sore, burning mouth and difficulty wearing upper denture for 6 weeks. Dental history: complete upper and partial lower dentures, 4 years old. Medical history: COPD (regular inhaled corticosteroid), depression, benign prostatic hyperplasia. Medications: fluticasone inhaler, sertraline, tamsulosin. Allergies: none known. Examination: erythematous palatal mucosa under denture, angular cheilitis bilaterally, white removable plaques on tongue; markedly reduced salivary pooling. Denture hygiene poor. Plan: commenced denture hygiene advice and topical antifungal; requesting GP review of inhaler technique with spacer, xerostomia-inducing medications, and screening for undiagnosed diabetes.",
    },
    guidanceNote:
      "Frame the medication review as a request, and list the relevant xerostomia-inducing drugs so the GP can act efficiently.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Discharge to GP after dental abscess management",
    prompt:
      "Using the case notes, write a letter to the general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Owen Bradley, General Practitioner",
      taskInstruction:
        "Inform the GP of the treatment provided for an acute dental abscess and request monitoring of the patient's blood glucose.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Fatima Yusuf, 49. Presenting complaint: severe throbbing pain and facial swelling left side, fever for 2 days. Dental history: irregular attender; tooth 36 grossly carious. Medical history: type 2 diabetes (recently poorly controlled), obesity. Medications: gliclazide. Allergies: penicillin (rash). Examination on presentation: diffuse left buccal swelling, tooth 36 tender, regional lymphadenopathy, temperature 38.1 C, trismus mild. Treatment provided: incision and drainage, extraction of 36, prescribed clarithromycin 500 mg twice daily for 5 days; analgesia advised. Patient now afebrile, swelling resolving at review. Plan: discharge from dental care; GP to monitor glycaemic control given infection, and review if swelling recurs or systemic symptoms develop.",
    },
    guidanceNote:
      "Record the penicillin allergy and the antibiotic actually prescribed so the GP has an accurate, safe medication record.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Transfer of paediatric patient for hospital extractions",
    prompt:
      "Using the case notes, write a letter to the paediatric dental department. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Dr Megan Aldridge, Consultant in Paediatric Dentistry",
      taskInstruction:
        "Transfer the child for extraction of multiple carious primary teeth under general anaesthesia.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Master Kofi Mensah, 5. Presenting complaint: night-time toothache and two episodes of facial swelling over 3 months. Dental history: first dental visit aged 4; uncooperative for in-chair treatment, unable to accept local anaesthetic. Medical history: moderate persistent asthma, frequent hospital admissions; under shared care with paediatrician. Medications: inhaled corticosteroid, montelukast. Allergies: none known. Examination: gross caries 54, 55, 64, 74, 75, 84, 85 with pulpal involvement; sinus tract adjacent to 74. Behaviour management and inhalation sedation deemed unsuitable. Plan: transfer for comprehensive dental rehabilitation under general anaesthesia; preventive advice and fluoride varnish given to carers; liaise with paediatrician re asthma and fitness for GA.",
    },
    guidanceNote:
      "Emphasise the asthma history and need for paediatrician liaison, as these affect fitness and planning for general anaesthesia.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Referral to oral surgeon after dental trauma",
    prompt:
      "Using the case notes, write a letter to the oral and maxillofacial surgeon. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Rebecca Lyons, Oral & Maxillofacial Surgery Registrar",
      taskInstruction:
        "Refer the patient following a sporting injury with a suspected root fracture and displaced upper incisor.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Thomas Bell, 19. Presenting complaint: trauma to front teeth during rugby 3 hours ago; pain and a loose, displaced upper tooth. Dental history: previously sound, regular attender. Medical history: fit and well; tetanus immunisation up to date. Medications: none. Allergies: none known. Examination: tooth 21 displaced palatally and extruded 3 mm, grade II mobile, tender; tooth 11 sensitive but stable. Small laceration upper lip, no foreign body felt. Sensibility testing unreliable acutely. Radiograph: periapical suggests mid-third root fracture of 21; no alveolar fracture seen. Treatment provided: repositioned 21 and applied flexible splint; analgesia advised. Plan: refer for specialist review of root-fractured tooth, splint monitoring and pulp vitality assessment.",
    },
    guidanceNote:
      "State the time elapsed since injury and the splinting already performed, as timing is critical in trauma management.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Referral to prosthodontist for full-mouth rehabilitation",
    prompt:
      "Using the case notes, write a letter to the prosthodontist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Henry Voss, Specialist Prosthodontist",
      taskInstruction:
        "Refer the patient for complex prosthodontic management of severe tooth surface loss and reduced vertical dimension.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Graham Pollard, 56. Presenting complaint: worn, sensitive teeth and concern about a 'collapsing' bite over several years. Dental history: heavy bruxist, wears a soft splint inconsistently; multiple cracked restorations. Medical history: gastro-oesophageal reflux disease, anxiety. Medications: omeprazole, occasional diazepam. Allergies: none known. Social: previously high cola intake, now reduced. Examination: generalised tooth surface loss with exposed dentine, cupping on occlusal surfaces, reduced occlusal vertical dimension, several teeth with short clinical crowns. No active caries; periodontal status stable. Plan: refer for assessment regarding occlusal rehabilitation, possible increase in vertical dimension and indirect restorations; reinforce reflux control and splint wear.",
    },
    guidanceNote:
      "Identify both the mechanical (bruxism) and chemical (reflux, diet) contributors so the specialist can plan durable restorations.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Advice letter to GP on dental focus before cardiac surgery",
    prompt:
      "Using the case notes, write a letter to the general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Dr Sandra Phillips, General Practitioner",
      taskInstruction:
        "Advise the GP of the dental clearance findings prior to the patient's planned heart valve replacement.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Edward Hammond, 64. Presenting complaint: attended for pre-operative dental assessment requested before valve surgery; no current dental pain. Dental history: irregular attender; several long-standing restorations. Medical history: severe aortic stenosis awaiting valve replacement, atrial fibrillation. Medications: apixaban, bisoprolol. Allergies: none known. Examination: tooth 47 unrestorable with periapical infection; teeth 16 and 26 with deep periodontal pockets and mobility; remaining dentition restorable. Radiographs: periapical radiolucency 47; advanced bone loss 16 and 26. Plan: extraction of 47, 16 and 26 to remove infective foci before surgery; liaison with cardiology re anticoagulation management for extractions; oral hygiene reinforcement.",
    },
    guidanceNote:
      "Make clear which teeth require removal and that anticoagulation must be coordinated with cardiology before any extraction.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Discharge of implant patient to referring dentist",
    prompt:
      "Using the case notes, write a letter to the referring general dental practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Imran Qureshi, Referring General Dental Practitioner",
      taskInstruction:
        "Discharge the patient back after successful placement and restoration of a single implant, outlining maintenance needs.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mrs Yvonne Carter, 60. Presenting complaint: replacement of a previously extracted lower first molar; treatment now complete. Dental history: tooth 46 lost 14 months ago; good oral hygiene, motivated. Medical history: well-controlled hypertension, former smoker (quit 3 years ago). Medications: ramipril. Allergies: none known. Treatment provided: single titanium implant placed at 46 site, integrated uneventfully over 4 months; screw-retained crown fitted, occlusion checked. Examination at fit: healthy peri-implant tissues, no bleeding on probing, radiograph shows stable crestal bone. Plan: discharge to referring dentist for routine maintenance; recommend 3-monthly hygiene initially then 6-monthly, peri-implant probing and annual radiographic review; reinforce interdental cleaning.",
    },
    guidanceNote:
      "Give specific maintenance intervals and monitoring requirements so the referring dentist can continue appropriate peri-implant care.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DENTISTRY",
    title: "Dentistry — Referral to special care dentistry for anxious patient",
    prompt:
      "Using the case notes, write a letter to the special care dentistry service. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Claire Donovan, Special Care Dentistry Lead",
      taskInstruction:
        "Refer the patient with a learning disability and severe dental anxiety for treatment under appropriate support or sedation.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Patient: Mr Ryan Doyle, 34. Presenting complaint: toothache and broken tooth; unable to tolerate examination in general practice. Dental history: avoids dental care, last seen 5 years ago; gagging and distress on attempts. Medical history: moderate learning disability, epilepsy (well controlled), lives in supported accommodation; attends with key worker. Medications: sodium valproate. Allergies: none known. Examination (limited): broken-down tooth in lower right quadrant with visible caries; generalised plaque and gingival inflammation; full charting not possible. Plan: refer for assessment with additional support, possible intravenous sedation, and a desensitisation approach; carer consent and best-interests considerations noted; preventive advice given to key worker.",
    },
    guidanceNote:
      "Document the epilepsy and current medication, as these are essential for safe sedation planning and consent considerations.",
  },
];
