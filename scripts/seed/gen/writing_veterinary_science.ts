import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Referral for refractory feline hyperthyroidism for radioiodine therapy",
    prompt:
      "Using the case notes, write a letter to a veterinary internal medicine specialist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Helen Voss, Veterinary Internal Medicine Specialist, Riverside Referral Hospital",
      taskInstruction:
        "Refer this cat for assessment and radioiodine (I-131) treatment of hyperthyroidism that is no longer controlled medically.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Biscuit', domestic shorthair cat, female neutered, 13 years, 3.4 kg (was 4.6 kg 14 months ago).\nPresenting complaint: weight loss despite polyphagia, intermittent vomiting, owner reports restlessness and increased vocalisation.\nHistory: diagnosed hyperthyroid 11 months ago (total T4 78 nmol/L). Started methimazole 2.5 mg twice daily; dose increased to 5 mg twice daily at month 4. Owner reports tablet administration increasingly difficult; suspected missed doses.\nExam: heart rate 220 bpm, grade II/VI systolic murmur, palpable goitre left thyroid lobe, body condition score 3/9, mild dehydration.\nDiagnostics: total T4 still elevated at 65 nmol/L on current dose; urea 9.8 mmol/L, creatinine 132 umol/L (upper normal); USG 1.038; systolic BP 168 mmHg.\nCurrent treatment: methimazole 5 mg twice daily; amlodipine 0.625 mg once daily started 2 weeks ago.\nPlan: owner keen on curative option; refer for radioiodine following pre-treatment renal and cardiac assessment.",
    },
    guidanceNote:
      "Make the renal-masking concern explicit: borderline kidney values can worsen once the thyroid is controlled, so the specialist needs the pre-treatment creatinine and the medication history.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Emergency transfer of canine gastric dilatation-volvulus to a 24-hour surgical centre",
    prompt:
      "Using the case notes, write a letter to the receiving emergency surgeon. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "the duty emergency surgeon, Northgate Veterinary Emergency &amp; Critical Care Centre",
      taskInstruction:
        "Transfer this dog urgently for surgical correction of confirmed gastric dilatation-volvulus, summarising stabilisation already provided.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Bruno', Great Dane, male entire, 5 years, 62 kg.\nPresenting complaint: acute unproductive retching, abdominal distension and restlessness 2 hours after evening meal.\nHistory: no prior episodes; deep-chested breed; not gastropexied.\nExam on arrival: tachycardic 160 bpm, weak femoral pulses, prolonged capillary refill 3 seconds, tympanic distended cranial abdomen, pale mucous membranes.\nDiagnostics: right lateral abdominal radiograph shows classic 'double bubble' compartmentalisation consistent with volvulus; lactate 6.2 mmol/L.\nStabilisation provided: two 18 g cephalic catheters placed; Hartmann's bolus 20 mL/kg given, second bolus running; gastric decompression by orogastric tube partially successful; IV methadone 0.2 mg/kg for analgesia; ECG shows occasional ventricular premature complexes.\nPlan: immediate transfer for surgery (derotation and gastropexy); owner has consented and is travelling separately; estimate provided.",
    },
    guidanceNote:
      "Lead with the time-critical diagnosis and what you have already done, so the surgeon can prepare theatre; the rising lactate and VPCs are the details that signal urgency.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Referral of a canine appendicular osteosarcoma for oncology assessment",
    prompt:
      "Using the case notes, write a letter to a veterinary oncologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Marcus Lin, Veterinary Oncologist, Crownhill Cancer Referral Service",
      taskInstruction:
        "Refer this dog for staging and discussion of amputation and adjuvant chemotherapy for a suspected appendicular osteosarcoma.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Sasha', Rottweiler, female neutered, 8 years, 41 kg.\nPresenting complaint: progressive right forelimb lameness over 6 weeks, now non-weight-bearing; firm painful swelling at distal radius.\nHistory: no known trauma; lameness initially responded partially to meloxicam then deteriorated.\nExam: marked swelling and pain on palpation distal right radius; reduced carpal range of motion; otherwise bright, alert, body condition score 5/9.\nDiagnostics: radiographs show aggressive mixed lytic-proliferative lesion of distal radius with cortical destruction and soft tissue swelling, no clear margin; thoracic radiographs (three views) show no overt pulmonary metastasis; routine bloods unremarkable.\nCurrent treatment: meloxicam 0.1 mg/kg once daily plus paracetamol-free multimodal analgesia; gabapentin 10 mg/kg three times daily added.\nPlan: refer for cytology/biopsy confirmation, full staging and discussion of forelimb amputation with adjuvant carboplatin.",
    },
    guidanceNote:
      "Note that thoracic films are currently clear but staging is incomplete; the oncologist needs to know what imaging has and has not been done before counselling the owner.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Referral of feline hypertrophic cardiomyopathy with arterial thromboembolism",
    prompt:
      "Using the case notes, write a letter to a veterinary cardiologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Priya Nair, Veterinary Cardiology Specialist, Lakeside Cardiac Referrals",
      taskInstruction:
        "Refer this cat for echocardiographic assessment and ongoing management following an episode of aortic thromboembolism.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Mochi', Maine Coon, male neutered, 6 years, 6.1 kg.\nPresenting complaint: acute hindlimb paresis, distress and vocalisation this morning.\nHistory: no prior cardiac diagnosis; mild lethargy noted by owner over recent weeks.\nExam: both hindlimbs cold with absent femoral pulses, cyanotic nail beds, firm painful gastrocnemius muscles; gallop rhythm auscultated; respiratory rate 48/min with mild effort.\nDiagnostics: NT-proBNP markedly elevated; point-of-care echo shows left atrial enlargement and thickened left ventricular wall; mild pleural effusion on thoracic ultrasound; rectal temperature 36.2 C.\nCurrent treatment: IV methadone for analgesia; clopidogrel 18.75 mg once daily started; low-dose furosemide given for suspected early congestion; kept warm and cage-rested.\nPlan: refer for full echocardiography, thromboprophylaxis planning and heart failure management; owner counselled on guarded prognosis.",
    },
    guidanceNote:
      "Be honest about the guarded prognosis and the analgesia given; the cardiologist needs the echo findings and current antithrombotic therapy to plan ongoing care.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Referral of canine diabetes mellitus with suspected concurrent Cushing's disease",
    prompt:
      "Using the case notes, write a letter to a veterinary internal medicine specialist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Ahmed Farouk, Veterinary Internal Medicine Specialist, Beaumont Referral Centre",
      taskInstruction:
        "Refer this dog for investigation of poorly controlled diabetes mellitus with suspected concurrent hyperadrenocorticism.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Pippa', Miniature Schnauzer, female neutered, 10 years, 11.2 kg.\nPresenting complaint: persistent polyuria, polydipsia and polyphagia despite insulin therapy; pot-bellied appearance and thinning coat.\nHistory: diagnosed diabetic 8 months ago; on caninsulin, dose escalated from 0.5 to 1.1 IU/kg twice daily with poor response.\nExam: bilaterally symmetrical truncal alopecia, abdominal distension, hepatomegaly on palpation, body condition score 7/9.\nDiagnostics: persistent hyperglycaemia, fructosamine elevated indicating poor long-term control; mild ALP elevation; urine specific gravity 1.018 with no active sediment; blood glucose curve shows minimal nadir.\nCurrent treatment: caninsulin 1.1 IU/kg twice daily; controlled high-fibre diet; owner confirms correct injection technique and storage.\nPlan: refer for ACTH stimulation/low-dose dexamethasone testing and review of insulin resistance; trilostane not yet started.",
    },
    guidanceNote:
      "State clearly that endocrine testing has not yet been done; the specialist needs the insulin history and the signs raising suspicion of insulin resistance, not a self-diagnosis.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Referral of a chronic canine atopic dermatitis case to a dermatology service",
    prompt:
      "Using the case notes, write a letter to a veterinary dermatologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Claire Whitmore, Veterinary Dermatology Specialist, Parkside Skin &amp; Allergy Clinic",
      taskInstruction:
        "Refer this dog for allergy testing and a long-term management plan for chronic, poorly controlled atopic dermatitis.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Rolo', French Bulldog, male neutered, 4 years, 13.8 kg.\nPresenting complaint: chronic pruritus affecting face, paws, axillae and ventral abdomen; recurrent ear infections.\nHistory: seasonal then year-round itch since 18 months of age; multiple courses of antibiotics and short steroid courses; partial response only.\nExam: erythema and lichenification of axillae and interdigital spaces, salivary staining of paws, bilateral erythematous otitis externa, secondary excoriation.\nDiagnostics: cytology shows Malassezia and cocci overgrowth in ear and skin; strict 8-week hydrolysed diet trial completed with limited improvement, suggesting non-food allergy; no ectoparasites found, on year-round flea control.\nCurrent treatment: oclacitinib 0.5 mg/kg twice daily reduced to once daily; medicated antiseptic shampoo twice weekly; ear cleaner.\nPlan: refer for intradermal/serological allergy testing and consideration of immunotherapy; owner seeking steroid-sparing long-term control.",
    },
    guidanceNote:
      "Confirm the diet trial and flea control have already excluded the main differentials; the dermatologist needs that work-up summarised to justify proceeding to allergy testing.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Referral of a canine cataract for ophthalmic surgical assessment",
    prompt:
      "Using the case notes, write a letter to a veterinary ophthalmologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Sofia Mendez, Veterinary Ophthalmology Specialist, Vista Eye Referrals",
      taskInstruction:
        "Refer this dog for assessment of bilateral cataracts and suitability for phacoemulsification surgery.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Tilly', Cocker Spaniel, female neutered, 7 years, 14.5 kg.\nPresenting complaint: progressive vision loss over 3 months; bumping into furniture in dim light; cloudy appearance to both eyes.\nHistory: not diabetic (blood glucose normal); no ocular trauma reported; otherwise healthy.\nExam: bilateral immature to mature cataracts, more advanced in left eye; menace response reduced bilaterally; pupillary light reflexes present; no overt uveitis; intraocular pressures within normal range (left 16, right 18 mmHg).\nDiagnostics: fundic examination obscured by lens opacity; no aqueous flare detected; tear production normal on Schirmer test.\nCurrent treatment: topical anti-inflammatory drops (ketorolac) started to control lens-induced inflammation.\nPlan: refer for electroretinography, ocular ultrasound and assessment for phacoemulsification; owner keen to restore vision if retinal function confirmed.",
    },
    guidanceNote:
      "Mention that diabetes has been ruled out and IOPs are normal; the ophthalmologist needs to know retinal function is still to be assessed before surgery can be offered.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Referral of a pet rabbit with dental malocclusion and molar spurs",
    prompt:
      "Using the case notes, write a letter to an exotic animal veterinary specialist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Emma Coyle, Exotic Animal Veterinary Specialist, Greenway Exotics Practice",
      taskInstruction:
        "Refer this rabbit for advanced imaging and dental treatment of acquired molar malocclusion under specialist care.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Clover', Netherland Dwarf rabbit, female neutered, 3 years, 1.1 kg.\nPresenting complaint: reduced appetite, dropping food (quidding), weight loss and ocular discharge over 2 weeks.\nHistory: predominantly pelleted diet with limited hay; previous incisor trim 6 months ago.\nExam: reduced faecal output, moist dermatitis under chin, watery left eye, palpable jaw irregularity; oral exam with otoscope shows sharp spurs on lower cheek teeth lacerating the tongue.\nDiagnostics: limited conscious oral exam only; suspect elongated tooth roots; no imaging performed in-house.\nCurrent treatment: assist-feeding critical-care formula by syringe; meloxicam 0.5 mg/kg once daily; prokinetic and fluids for gut stasis support.\nPlan: refer for skull radiographs/CT and dental burring under general anaesthesia; ongoing dietary correction advised with unlimited hay.",
    },
    guidanceNote:
      "Keep it clear and factual for the exotics team: stress the gut stasis risk and current supportive feeding, since rabbits decompensate quickly when not eating.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Referral of canine immune-mediated haemolytic anaemia to a transfusion service",
    prompt:
      "Using the case notes, write a letter to a veterinary internal medicine specialist. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Nathan Brooks, Veterinary Internal Medicine Specialist, Hartwell Referral Hospital",
      taskInstruction:
        "Refer this dog for transfusion support and immunosuppressive management of suspected immune-mediated haemolytic anaemia.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Hugo', Springer Spaniel, male entire, 6 years, 19.4 kg.\nPresenting complaint: sudden lethargy, collapse, pale gums and reluctance to exercise over 48 hours.\nHistory: no toxin access reported; no recent travel; vaccinations current; no known onion/garlic ingestion.\nExam: pale to icteric mucous membranes, tachycardia 170 bpm, bounding then weak pulses, splenomegaly on palpation, grade II flow murmur.\nDiagnostics: PCV 14% (regenerative anaemia with marked reticulocytosis), spherocytosis on smear, positive in-saline agglutination test, mild hyperbilirubinaemia; no haemoparasites seen; SNAP tests negative.\nCurrent treatment: prednisolone 2 mg/kg/day started; gastroprotectant; IV crystalloids; clopidogrel for thromboprophylaxis.\nPlan: refer urgently for blood typing and packed red cell transfusion, and consideration of second-line immunosuppression; owner aware of guarded prognosis.",
    },
    guidanceNote:
      "Include the agglutination and spherocyte findings that support the immune-mediated diagnosis, plus the current PCV, so the team can prioritise cross-matching and transfusion.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Discharge of a canine pyometra patient following ovariohysterectomy",
    prompt:
      "Using the case notes, write a letter to the referring primary care veterinarian. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Olivia Hart, primary care veterinarian, Meadowbank Veterinary Surgery",
      taskInstruction:
        "Provide a discharge summary and ongoing care instructions following emergency surgery for pyometra.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Nala', Labrador Retriever, female entire (now neutered), 7 years, 28 kg.\nReason for admission: lethargy, anorexia, polydipsia and purulent vulval discharge 5 weeks after last season; diagnosed open pyometra.\nProcedure: emergency ovariohysterectomy performed under general anaesthesia; uneventful recovery; uterus markedly distended, removed intact.\nDiagnostics: pre-op leucocytosis with left shift, mild azotaemia (creatinine 145 umol/L) resolving with fluids; ultrasound confirmed fluid-filled uterus.\nPost-op course: 48 hours hospitalised on IV fluids and analgesia; eating and drinking normally before discharge; urinating freely.\nMedication on discharge: amoxicillin-clavulanate 12.5 mg/kg twice daily for 7 days; meloxicam 0.1 mg/kg once daily for 5 days; buprenorphine for first 24 hours.\nPlan: lead exercise and buster collar for 10 days; suture check in 3 days; suture removal day 10; recheck renal values in 2 weeks.",
    },
    guidanceNote:
      "Give the primary vet the practical handover: medication course, wound care timeline and the renal recheck, since the azotaemia needs confirming it has resolved.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Discharge and home management of a canine elbow arthroscopy patient",
    prompt:
      "Using the case notes, write a letter to the referring primary care veterinarian. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr James Okonkwo, primary care veterinarian, Fielding Road Veterinary Clinic",
      taskInstruction:
        "Summarise the arthroscopic procedure and outline the rehabilitation plan after surgery for elbow dysplasia.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Diesel', Bernese Mountain Dog, male neutered, 14 months, 39 kg.\nReason for referral: chronic intermittent left forelimb lameness, worse after exercise; diagnosed medial coronoid process disease.\nProcedure: arthroscopy of left elbow; fragmented medial coronoid process removed; cartilage assessed as modified Outerbridge grade 2; joint lavaged.\nPost-op: recovered well; weight-bearing on the limb within hours; discharged same day.\nMedication on discharge: meloxicam 0.1 mg/kg once daily for 10 days; paracetamol-free analgesia; a joint supplement (omega-3 and glucosamine) recommended long term.\nPlan: strict lead-only exercise for 2 weeks then graduated increase; controlled physiotherapy and hydrotherapy from week 3; weight management target body condition score 4-5/9; recheck at 6 weeks; long-term monitoring for osteoarthritis.",
    },
    guidanceNote:
      "Focus on the staged rehabilitation and weight control rather than the surgical detail; the primary vet will be managing the long-term osteoarthritis risk.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Advice letter on home care for a diabetic cat newly started on insulin",
    prompt:
      "Using the case notes, write a letter to the owner. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Mrs Karen Doyle, owner of 'Smokey'",
      taskInstruction:
        "Write to the owner explaining home management, monitoring and warning signs for their newly diagnosed diabetic cat.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Smokey', British Shorthair cat, male neutered, 9 years, 7.2 kg (overweight).\nDiagnosis: newly diagnosed diabetes mellitus confirmed on persistent hyperglycaemia and elevated fructosamine; no ketones detected.\nHistory: increased thirst, frequent urination and weight loss over 6 weeks; previously free-fed dry food.\nTreatment started: glargine insulin 1 unit twice daily by subcutaneous injection 12 hours apart, given after meals; demonstration of injection technique given in clinic.\nDiet: transition to a low-carbohydrate high-protein diabetic diet; controlled portions; gradual weight loss target.\nMonitoring: owner shown how to recognise hypoglycaemia (wobbliness, weakness, disorientation) and to offer honey/glucose syrup and contact the clinic immediately; never give a dose if the cat is unwell or not eating.\nPlan: blood glucose curve and weight recheck in 7-10 days; store insulin in the fridge, roll gently, do not shake; keep an injection log.",
    },
    guidanceNote:
      "Use plain, supportive language for the owner and prioritise the safety points: do not inject if the cat is not eating, and recognise hypoglycaemia.",
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Referral of an equine recurrent colic case for surgical evaluation",
    prompt:
      "Using the case notes, write a letter to the equine surgical team. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "the duty surgeon, Ashdown Equine Hospital Surgical Unit",
      taskInstruction:
        "Refer this horse urgently for surgical evaluation of recurrent colic unresponsive to medical management.",
      wordMin: 180,
      wordMax: 200,
      caseNotes:
        "Animal: 'Comet', Warmblood gelding, 12 years, approximately 560 kg.\nPresenting complaint: third colic episode in 36 hours; pawing, flank-watching, rolling and reduced faecal output.\nHistory: recent change of forage; previous mild spasmodic colics resolved with antispasmodics; up to date with dental and worming.\nExam: heart rate 64 bpm, congested mucous membranes, capillary refill 3 seconds, reduced gut sounds in all quadrants, mild abdominal distension.\nDiagnostics: rectal exam reveals distended large colon with a gas-filled viscus, suspected displacement; nasogastric intubation produced moderate reflux; peritoneal tap mildly elevated protein, normal lactate so far.\nCurrent treatment: IV flunixin given (note this may mask deterioration), buscopan, IV fluids running; stomach decompressed via nasogastric tube; pain has recurred despite analgesia.\nPlan: refer for surgical assessment and possible exploratory laparotomy; transport arranged; owner consented to surgery if required.",
    },
    guidanceNote:
      "Flag that flunixin has been given because it can mask cardiovascular deterioration; the surgeon needs the timeline of analgesia, the reflux and the recurring pain to judge urgency.",
  },
];
