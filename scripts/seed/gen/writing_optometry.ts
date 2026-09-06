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
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-discharge-and-transfer-of-stable-keratoconus-to-specialist-contact-lens-clinic",
    "title": "Optometry — Discharge and transfer of stable keratoconus to specialist contact lens clinic",
    "prompt": "Using the case notes, write a letter to the specialist contact lens optometrist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mr Daniel Brooks, 26, student.\nHistory: Keratoconus diagnosed age 19; corneal cross-linking both eyes age 21, stable since.\nVA: R 6/9 with rigid gas-permeable lens, L 6/12 with RGP; spectacle VA poorer.\nTopography: stable inferior steepening both eyes over 3 years, no progression.\nAnterior: clear corneas, mild Vogt striae left; no scarring affecting axis.\nIOP: R 14 L 14 mmHg.\nCurrent lenses: ageing RGPs, increasingly uncomfortable, needs refit.\nPMH: eczema, history of eye rubbing (advised against).\nMeds: emollients.\nAllergies: none known.\nPlan: transfer for specialist RGP refit and ongoing topographic monitoring; patient reminded not to rub eyes.",
      "recipient": "Ms Aisha Rahman, Specialist Contact Lens Optometrist, Corneal Clinic",
      "letterType": "transfer",
      "taskInstruction": "Transfer this patient's ongoing keratoconus management to the specialist contact lens service."
    },
    "guidanceNote": "Emphasise stability post cross-linking and the practical reason for transfer (lens refit). The eye-rubbing/eczema link is relevant to ongoing care and worth a brief mention."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-discharge-letter-to-gp-following-resolved-corneal-abrasion",
    "title": "Optometry — Discharge letter to GP following resolved corneal abrasion",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mr Kevin O'Sullivan, 38, carpenter.\nInitial presentation 1 week ago: right eye pain, watering and foreign body sensation after a wood splinter; no metallic injury.\nFindings then: small inferior corneal abrasion right eye, no embedded foreign body, no infection; VA R 6/9, L 6/6.\nManagement given: chloramphenicol ointment, lubricants, advised on safety eyewear at work.\nReview today: symptoms resolved, cornea clear with no staining, no infiltrate; VA R 6/6, L 6/6.\nAnterior: quiet, IOP R 16 L 16 mmHg.\nPMH: well.\nMeds: none ongoing.\nAllergies: none known.\nPlan: discharged from optometric care; advised to return if recurrence of pain, redness or discharge; reinforced workplace eye protection.",
      "recipient": "Dr Fiona Campbell, General Practitioner, Riverside Health Centre",
      "letterType": "discharge",
      "taskInstruction": "Inform the GP that the patient's corneal abrasion has healed and is being discharged from optometric care."
    },
    "guidanceNote": "A discharge letter should confirm resolution and state clear safety-netting advice. Keep it brief and avoid implying ongoing treatment is needed."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-emergency-referral-for-acute-retinal-detachment-with-flashes-and-floaters",
    "title": "Optometry — Emergency referral for acute retinal detachment with flashes and floaters",
    "prompt": "Using the case notes, write a letter to the vitreoretinal surgeon. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Miss Priya Nair, 41, graphic designer.\nPresenting: 2-day history of new floaters and flashing lights right eye; since this morning a 'curtain' rising from below; no pain.\nVA: R 6/12, L 6/6.\nDilated fundus R: superior bullous retinal detachment with a horseshoe tear at 11 o'clock; macula appears attached. Fundus L: lattice degeneration, no breaks.\nAnterior: clear, no cells. IOP R 12 L 16 mmHg.\nRefraction: high myope R -8.50 L -8.00.\nPMH: nil significant.\nMeds: none.\nAllergies: none known.\nPlan: emergency referral, patient advised to avoid strenuous activity and lie with head positioned; counselled macula currently on, prompt surgery important.",
      "recipient": "The Vitreoretinal Surgical Team, Regional Eye Unit",
      "letterType": "referral",
      "taskInstruction": "Refer this patient as an emergency for suspected rhegmatogenous retinal detachment."
    },
    "guidanceNote": "The fact the macula is still attached is the single most time-critical detail — make it prominent. High myopia and fellow-eye lattice are relevant context."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-gp-advice-letter-on-severe-dry-eye-disease-and-lid-hygiene-management",
    "title": "Optometry — GP advice letter on severe dry eye disease and lid hygiene management",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mrs Carol Stevens, 58, office administrator.\nPresenting: 6-month history of gritty, burning eyes, worse on screens and in air-conditioning; intermittent blur clearing on blinking.\nVA: R 6/6, L 6/6.\nTear film: rapid break-up time, reduced tear meniscus, inferior corneal punctate staining both eyes.\nLids: blocked meibomian glands, anterior blepharitis.\nAnterior: no infection, IOP R 15 L 16 mmHg.\nSystemic: also reports dry mouth and joint aches.\nPMH: underactive thyroid.\nMeds: levothyroxine, occasional antihistamine.\nAllergies: none known.\nPlan: started warm compresses, lid hygiene and lubricants; GP asked to consider screening for Sjogren's given dry mouth and arthralgia.",
      "recipient": "Dr Lucy Bennett, General Practitioner, Hillside Medical Centre",
      "letterType": "advice",
      "taskInstruction": "Advise the GP of the dry eye diagnosis and request review of a possible contributing systemic cause."
    },
    "guidanceNote": "The dry mouth and joint symptoms are why you are writing — flag the possible systemic link clearly. A foundation task, so keep the optometric management brief."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-gp-letter-on-newly-detected-diabetic-retinopathy",
    "title": "Optometry — GP letter on newly detected diabetic retinopathy",
    "prompt": "Using the case notes, write a letter to the GP. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mr Raymond Whitfield, 58 years.\nRoutine sight test today; attended for new reading glasses.\nSymptoms: occasional blurred vision, worse when blood sugars 'run high'; no floaters or flashes; no pain.\nVA: R 6/9, L 6/12 (improving to 6/9 with pinhole).\nFundus (dilated): both eyes show scattered dot-and-blot haemorrhages, several microaneurysms, and a few hard exudates; no neovascularisation; no exudate within one disc diameter of the fovea.\nImpression: mild-to-moderate non-proliferative diabetic retinopathy, no maculopathy threatening fixation today.\nHistory: type 2 diabetes 9 years; last HbA1c (per patient) 'about 8.5%' six months ago.\nMeds: metformin 1g twice daily; atorvastatin 20mg.\nAllergies: none known.\nLifestyle: smokes 10/day; reports infrequent diabetic eye-screening attendance.\nIOP: R 15, L 16 mmHg.\nPlan: ensure enrolled in diabetic eye-screening programme; optometry review 6 months; advised smoking cessation and importance of glycaemic control.",
      "recipient": "Dr Samuel Okonkwo, General Practitioner, Maple Lane Surgery",
      "letterType": "referral",
      "taskInstruction": "Write a letter informing the GP of newly detected diabetic retinopathy and requesting a review of diabetic control."
    },
    "guidanceNote": "Frame this as informing the GP and asking for a diabetic-control review rather than an emergency. The retinopathy findings, smoking, and reported HbA1c are central; the new reading prescription is not relevant to ongoing medical care."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-gp-letter-on-raised-intraocular-pressure-and-suspected-open-angle-glaucoma",
    "title": "Optometry — GP letter on raised intraocular pressure and suspected open-angle glaucoma",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mr Gerald Hutchinson, 59, accountant.\nPresenting: Routine sight test, no symptoms.\nVA: R 6/6, L 6/6 corrected.\nIOP: R 28 L 30 mmHg (Goldmann), 10am.\nDiscs: cup-disc ratio R 0.7 L 0.75 with inferior neuroretinal rim thinning both eyes.\nVisual fields: early superior arcuate defect left eye, borderline right.\nAnterior chamber: open angles on van Herick.\nPachymetry: pending.\nFamily history: mother had glaucoma.\nPMH: well, mild asthma.\nMeds: salbutamol inhaler PRN.\nAllergies: none known.\nPlan: referred to hospital eye service; GP asked to note diagnosis; patient advised first-degree relatives should be screened.",
      "recipient": "Dr Samuel Okafor, General Practitioner, Brookfield Surgery",
      "letterType": "referral",
      "taskInstruction": "Inform the GP of findings suggesting primary open-angle glaucoma and the onward hospital referral made."
    },
    "guidanceNote": "Mention the asthma history — it is relevant because beta-blocker drops may be considered. Keep the field and disc findings concise rather than listing every measurement."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-gp-referral-for-new-ptosis-and-anisocoria-of-uncertain-cause",
    "title": "Optometry — GP referral for new ptosis and anisocoria of uncertain cause",
    "prompt": "Using the case notes, write a letter to the patient's general practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mrs Helen Archer, 61, bookkeeper.\nPresenting: Noticed drooping of left upper lid over past 3 weeks; partner says left pupil looks smaller; occasional neck ache. No double vision, no pain.\nObservation: mild left upper lid ptosis, left pupil smaller than right, anisocoria greater in dim light; both pupils react to light.\nVA: R 6/6, L 6/6.\nOcular motility: full, no diplopia.\nFundus: healthy both eyes. IOP R 15 L 15 mmHg.\nPMH: ex-smoker 30 pack-years, hypertension.\nMeds: amlodipine.\nAllergies: none known.\nPlan: referred for medical assessment to exclude causes along the sympathetic pathway; smoking history and neck symptoms noted; patient reassured but advised not to ignore.",
      "recipient": "Dr Imran Qureshi, General Practitioner, Maple Lane Surgery",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for medical investigation of new-onset ptosis with a small pupil suggesting a possible Horner's syndrome."
    },
    "guidanceNote": "Describe the anisocoria pattern (worse in dim light) precisely — it points to the sympathetic pathway. The smoking history is relevant to the differential and should be included."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-ophthalmology-referral-for-suspected-wet-age-related-macular-degeneration",
    "title": "Optometry — Ophthalmology referral for suspected wet age-related macular degeneration",
    "prompt": "Using the case notes, write a letter to the consultant ophthalmologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mrs Edith Caldwell, 78, retired teacher.\nPresenting: 5-day history of distorted central vision right eye; straight lines appear wavy; new central grey patch.\nVA: R 6/24 (was 6/9 last year), L 6/9.\nAmsler grid: central metamorphopsia and scotoma right eye.\nFundus R: subretinal fluid, small haemorrhage and drusen at macula; pigmentary changes. Fundus L: scattered drusen, no fluid.\nAnterior segment: clear, IOP R 16 L 15 mmHg.\nPMH: hypertension, osteoarthritis.\nMeds: amlodipine 5 mg, paracetamol PRN.\nAllergies: none known.\nSmoker: ex-smoker, stopped 10 years ago.\nPlan: urgent referral; patient counselled on need for prompt anti-VEGF assessment; Amsler grid given for left eye monitoring.",
      "recipient": "Dr Helen Marsh, Consultant Ophthalmologist, Medical Retina Service",
      "letterType": "referral",
      "taskInstruction": "Refer this patient urgently for assessment of suspected neovascular age-related macular degeneration."
    },
    "guidanceNote": "Convey urgency clearly — emphasise the recent VA drop and metamorphopsia, but avoid copying every drusen detail unrelated to the wet AMD suspicion."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-paediatric-referral-for-unilateral-amblyopia-and-accommodative-esotropia",
    "title": "Optometry — Paediatric referral for unilateral amblyopia and accommodative esotropia",
    "prompt": "Using the case notes, write a letter to the orthoptic and paediatric ophthalmology service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Master Liam Foster, age 4.\nPresenting: Mother noticed left eye turns inward, worse when tired; failed preschool vision screening.\nVA: R 6/6, L 6/24 (matching pictures), reduced and not improving with pinhole.\nCover test: left convergent squint for near and distance, larger for near.\nCycloplegic refraction: R +2.50 DS, L +5.00 DS; significant hypermetropic anisometropia.\nFundus: healthy both eyes, no media opacity.\nStereopsis: reduced.\nBirth/development: normal, term delivery.\nFamily history: father wore glasses as a child.\nAllergies: none known.\nPlan: referred for orthoptic assessment; full hypermetropic correction to be prescribed; likely patching for amblyopia; parents counselled on importance of early treatment.",
      "recipient": "The Orthoptic Department, Children's Eye Clinic",
      "letterType": "referral",
      "taskInstruction": "Refer this child for assessment and management of a convergent squint with associated amblyopia."
    },
    "guidanceNote": "Stress the child's age and that amblyopia treatment is time-sensitive. The anisometropia and accommodative element explain the squint and should be summarised, not transcribed."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-referral-for-proliferative-diabetic-retinopathy-with-new-vessels",
    "title": "Optometry — Referral for proliferative diabetic retinopathy with new vessels",
    "prompt": "Using the case notes, write a letter to the medical retina service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mr Anand Sharma, 52, taxi driver.\nPresenting: Mild blur and occasional floaters right eye for 2 weeks; usually attends screening but missed last two appointments.\nVA: R 6/12, L 6/9.\nFundus R: new vessels at the disc, scattered dot-blot haemorrhages, venous beading, a small preretinal haemorrhage. Fundus L: moderate non-proliferative changes, no new vessels.\nMacula: no obvious oedema clinically, OCT not available.\nAnterior: clear, IOP R 17 L 17 mmHg.\nPMH: type 2 diabetes 14 years, HbA1c last 84 mmol/mol, hypertension.\nMeds: insulin, metformin, ramipril.\nAllergies: none known.\nPlan: urgent referral for likely pan-retinal photocoagulation; patient counselled on glycaemic control and driving implications.",
      "recipient": "The Medical Retina Service, Diabetic Eye Clinic",
      "letterType": "referral",
      "taskInstruction": "Refer this patient urgently for assessment of proliferative diabetic retinopathy requiring laser treatment."
    },
    "guidanceNote": "Disc new vessels make this proliferative and urgent — say so plainly. The driving occupation and poor glycaemic control are relevant to ongoing care and management."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-referral-for-suspected-giant-cell-arteritis-with-transient-visual-loss",
    "title": "Optometry — Referral for suspected giant cell arteritis with transient visual loss",
    "prompt": "Using the case notes, write a letter to the acute medical team. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mrs Margaret Pryce, 74, retired librarian.\nPresenting: Two episodes of transient curtain-like vision loss right eye over 3 days, each lasting minutes; new throbbing right temple headache; jaw aches when chewing; scalp tender to comb.\nVA: R 6/9, L 6/6 today, currently no loss.\nDiscs: no swelling at present.\nPupils: no RAPD currently.\nSystemic: weight loss, shoulder stiffness for weeks.\nPMH: polymyalgia-type symptoms, osteoporosis.\nMeds: alendronic acid, calcium/vitamin D.\nAllergies: none known.\nObservations available to GCA pathway: ESR/CRP not yet done.\nPlan: urgent same-day referral; advised not to delay; clinician to consider high-dose steroids and blood tests.",
      "recipient": "The Acute Medical Take, Royal Infirmary",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for same-day assessment of suspected giant cell arteritis to prevent permanent visual loss."
    },
    "guidanceNote": "This is sight- and life-threatening — make the urgency and classic GCA features (jaw claudication, scalp tenderness, amaurosis fugax) unmistakable. Note bloods are outstanding."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-referral-for-unilateral-painful-red-eye-suggesting-anterior-uveitis",
    "title": "Optometry — Referral for unilateral painful red eye suggesting anterior uveitis",
    "prompt": "Using the case notes, write a letter to the ophthalmology emergency clinic. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mr Thomas Reilly, 34, plumber.\nPresenting: 3-day history of aching red right eye, photophobia, mild blur; no trauma, no discharge.\nVA: R 6/12, L 6/6.\nAnterior R: ciliary flush, anterior chamber cells and flare, small irregular pupil with early posterior synechiae; cornea clear. Left eye normal.\nIOP: R 14 L 15 mmHg.\nFundus: no view problem, retina flat.\nHistory: similar episode 2 years ago, settled with drops; lower back stiffness most mornings.\nPMH: otherwise well.\nMeds: none.\nAllergies: none known.\nPlan: referred for slit-lamp confirmation and topical steroid/cycloplegic treatment; recurrent nature and back symptoms noted for possible HLA-B27 link.",
      "recipient": "The Ophthalmology Emergency Clinic, City Eye Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for prompt assessment of suspected acute anterior uveitis."
    },
    "guidanceNote": "Differentiate this from conjunctivitis by highlighting cells, flare and synechiae. The back stiffness and recurrence point to a systemic association worth flagging."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-referral-for-visually-significant-cataract-affecting-daily-function",
    "title": "Optometry — Referral for visually significant cataract affecting daily function",
    "prompt": "Using the case notes, write a letter to the cataract surgical service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mrs Joan Whitfield, 72, retired seamstress.\nPresenting: 12-month gradual blurring right eye; glare driving at night; difficulty with close needlework and reading.\nVA: R 6/18 improving to 6/12 pinhole, L 6/9.\nLens: R dense nuclear sclerotic cataract, L early nuclear changes.\nFundus: macula and discs healthy both eyes where view allows.\nAnterior: deep chambers, IOP R 15 L 16 mmHg.\nPMH: well-controlled hypertension, hard of hearing.\nMeds: bendroflumethiazide.\nAllergies: none known.\nDriving: still drives, meets standard with current glasses but reports glare.\nPlan: referred for surgery; patient keen; counselled on procedure and that left eye may need attention later.",
      "recipient": "The Cataract Service, Day Surgery Eye Unit",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for consideration of cataract surgery on the right eye."
    },
    "guidanceNote": "Focus on how the cataract affects function (night glare, fine work, driving) since this justifies surgery. A foundation-level letter — keep it clear and uncluttered."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-urgent-referral-for-sudden-painless-vision-loss-suggesting-retinal-vein-occlusion",
    "title": "Optometry — Urgent referral for sudden painless vision loss suggesting retinal vein occlusion",
    "prompt": "Using the case notes, write a letter to the on-call ophthalmologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mr Raymond Doyle, 64, warehouse supervisor.\nPresenting: Woke this morning with sudden painless blurring of left eye; no pain, no flashes.\nVA: R 6/6, L 6/36 not improving with pinhole.\nFundus L: widespread flame haemorrhages in all four quadrants, dilated tortuous veins, cotton wool spots, disc swelling. Fundus R: unremarkable.\nAnterior segment: no rubeosis seen. IOP R 18 L 19 mmHg.\nPupils: relative afferent defect left eye.\nPMH: type 2 diabetes, hypertension, raised cholesterol.\nMeds: metformin, ramipril, atorvastatin.\nAllergies: penicillin (rash).\nBP today: 168/98.\nPlan: same-day referral; advised on systemic risk factor review with GP; patient anxious, reassured.",
      "recipient": "The On-Call Ophthalmologist, Eye Casualty, St Andrew's Hospital",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for same-day assessment of sudden painless visual loss consistent with a central retinal vein occlusion."
    },
    "guidanceNote": "State the same-day timeframe and the RAPD explicitly. The penicillin allergy and raised BP are relevant to the receiving team and worth including."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "OPTOMETRY",
    "slug": "wri-optometry-urgent-referral-for-suspected-acute-angle-closure-glaucoma",
    "title": "Optometry — Urgent referral for suspected acute angle-closure glaucoma",
    "prompt": "Using the case notes, write a letter to the ophthalmologist. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "Patient: Mrs Eileen Doherty, 64 years.\nPresentation today (unscheduled walk-in): 3-hour history of severe right-eye pain, blurred vision with coloured haloes around lights, frontal headache, nausea and one episode of vomiting.\nOnset: came on rapidly while sitting in a dimly lit cinema.\nVA: R 6/36 (reduced from 6/9 last visit), L 6/9.\nRight eye: cornea hazy/cloudy, mid-dilated fixed oval pupil, conjunctival redness, eye feels hard on palpation.\nIOP: R 48 mmHg, L 17 mmHg.\nAnterior chamber: shallow, van Herick grade 1 right.\nHistory: long-sighted (hyperopic), no prior eye surgery.\nMedical: type 2 diabetes (diet-controlled), hypertension.\nMeds: amlodipine 5mg daily. Recently started over-the-counter cold remedy containing an antihistamine/decongestant 2 days ago.\nAllergies: penicillin (rash).\nFamily history: mother had glaucoma.\nPlan: suspect acute angle-closure; advised to attend eye casualty immediately; not driven self.",
      "recipient": "Dr Helena Prasad, Consultant Ophthalmologist, Eye Casualty, Riverside General Hospital",
      "letterType": "referral",
      "taskInstruction": "Write an urgent referral letter requesting same-day ophthalmology assessment."
    },
    "guidanceNote": "This is an urgent referral — open by stating the suspected diagnosis and the same-day request. Include IOP, the mid-dilated fixed pupil and recent decongestant use (a precipitant); the diabetes and amlodipine are background and can be omitted or kept brief."
  }
];
