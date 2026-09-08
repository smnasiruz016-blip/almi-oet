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
      "caseNotes": "\nPatient:\nMr Daniel Brooks, 26, postgraduate student.\nSeen for annual review, 26 August 2026. Under this practice since 2019.\n\nDiagnosis:\nKeratoconus, both eyes, diagnosed at nineteen.\nCorneal collagen cross-linking performed on both eyes at twenty-one, right eye March 2021 and left eye June 2021.\nClinically and topographically stable since.\n\nVision:\nRight 6/9 with a rigid gas-permeable lens.\nLeft 6/12 with a rigid gas-permeable lens.\nBest spectacle-corrected acuity is markedly poorer at right 6/24 and left 6/36, so he is entirely lens-dependent for study and driving.\n\nTopography:\nInferior steepening both eyes, unchanged across three annual scans.\nMaximum keratometry right 52.4 D and left 54.1 D, both within 0.3 D of the 2023 readings.\nNo progression by any index.\n\nAnterior segment:\nCorneas clear. Mild Vogt striae left eye only.\nNo apical scarring and none on the visual axis.\nLids and conjunctiva quiet.\n\nIntraocular pressure:\nRight 14 mmHg, left 14 mmHg. Note that pressure readings are unreliable in thin, irregular corneas.\n\nCurrent lenses:\nRigid gas-permeable lenses fitted four years ago and now ageing. Surface deposits and edge fretting visible.\nWearing time has fallen from twelve hours to about six because of discomfort by mid-afternoon.\nHe has been over-wearing rather than presenting sooner.\nFluorescein pattern shows excessive apical bearing right eye. A refit is needed.\n\nPast medical history:\nAtopic eczema since childhood.\nA long history of eye rubbing, repeatedly advised against and discussed again today.\n\nMedication:\nEmollient creams. Ocular lubricants used occasionally.\n\nAllergies:\nNone known.\n\nSocial:\nStudying architecture; long hours at a screen and at a drawing board.\nDrives, and meets the visual standard in his lenses only.\n\nPlan:\nTransfer to the specialist contact lens clinic for a rigid gas-permeable refit; scleral lenses may suit him better given the wearing-time problem.\nAnnual topography to continue so that any late progression is detected.\nEye rubbing reinforced again as the single modifiable risk; his eczema control should be optimised for the same reason.\nHe is aware that cross-linking halts progression but does not restore vision.\n",
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
      "caseNotes": "\nPatient:\nMr Kevin O'Sullivan, 38, carpenter.\nFirst seen 24 August 2026. Reviewed and discharged 31 August 2026.\n\nPresenting complaint at first visit:\nRight eye pain, watering and a foreign body sensation, beginning that morning while cutting timber.\nNo safety glasses were worn. No metallic tool or grinding involved, so an intraocular foreign body was considered unlikely.\nNo previous eye injury.\n\nFindings on presentation:\nVision right 6/9, left 6/6.\nA small inferior corneal abrasion, approximately 2 mm, staining with fluorescein.\nNo embedded foreign body on lid eversion of either lid.\nNo infiltrate, no anterior chamber cells, no hypopyon.\nConjunctival injection moderate. Pupil reactive.\nIntraocular pressure right 16, left 16 mmHg.\n\nManagement given:\nChloramphenicol ointment four times daily for five days as prophylaxis.\nPreservative-free lubricants hourly for the first two days.\nAnalgesia advice. No patching.\nWritten safety-net instructions to return the same day if pain, redness or discharge worsened.\nWorkplace eye protection discussed at length.\n\nReview today:\nSymptoms fully resolved by day four, per the patient.\nCornea clear with no staining. No infiltrate and no residual haze on the visual axis.\nVision right 6/6, left 6/6.\nAnterior chamber quiet. Intraocular pressure right 16, left 16 mmHg.\nDilated fundus examination normal both eyes.\n\nPast medical history:\nWell. No diabetes. No previous ocular disease.\n\nMedication:\nNone ongoing; the ointment course is complete.\n\nAllergies:\nNone known.\n\nSocial and occupational:\nSelf-employed. Works alone in a workshop.\nSays he has never routinely worn goggles in fifteen years of work. His employer's liability and his own risk were discussed.\n\nPlan:\nDischarged from optometric care.\nAdvised to return immediately if pain, redness, discharge or blurred vision recur, as recurrent erosion can follow an abrasion of this kind, sometimes months later.\nRoutine sight test in two years unless symptoms occur.\nWorkplace eye protection reinforced in writing and a leaflet provided.\n",
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
      "caseNotes": "\nPatient:\nMiss Priya Nair, 41, graphic designer.\nAttended as an unscheduled emergency appointment, 1 September 2026, 11.20 am.\n\nPresenting complaint:\nA two-day history of new floaters in the right eye, described as a shower of black specks with a larger central strand.\nFlashing lights in the right temporal field, worse in dim conditions.\nSince waking this morning, a dark curtain rising from below and now covering roughly the lower third of the field.\nNo pain. No trauma. No headache.\n\nVision:\nRight 6/12, no improvement with pinhole. Left 6/6.\n\nDilated fundus examination, right eye:\nSuperior bullous retinal detachment with a horseshoe tear at the eleven o'clock position, approximately two disc diameters from the ora.\nPigment cells in the anterior vitreous.\nThe macula appears attached, with the detachment edge approximately one and a half disc diameters superior to the fovea.\n\nDilated fundus examination, left eye:\nLattice degeneration at two clock hours temporally. No breaks, no subretinal fluid.\n\nAnterior segment:\nClear corneas, no cells or flare. No cataract.\nIntraocular pressure right 12, left 16 mmHg — the lower right pressure is consistent with the detachment.\n\nRefraction:\nHigh myopia. Right minus 8.50 DS, left minus 8.00 DS. Axial length not measured here.\n\nPupils:\nNo relative afferent defect detected today.\n\nPast medical history:\nNothing significant. No previous ocular surgery and no family history of detachment.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nAdvice given and counselling:\nExplained that the macula is currently attached and that this is the reason for urgency; visual outcome is substantially better if surgery is performed before the macula detaches.\nAdvised strict bed rest, no strenuous activity, no lifting, and to lie flat with the head positioned so that gravity works against further fluid tracking.\nTold not to drive herself.\n\nPlan:\nEmergency referral to the vitreoretinal service, telephoned at 11.40 am and accepted for review today.\nHer partner is driving her directly.\nThe left eye lattice should also be documented at that visit.\n",
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
      "caseNotes": "\nPatient:\nMrs Carol Stevens, 58, office administrator.\nSeen 27 August 2026, second visit in three months.\n\nPresenting complaint:\nA six-month history of gritty, burning eyes, both sides, worse through the working day.\nMarkedly worse on screens and in air-conditioning.\nIntermittent blur that clears on blinking.\nSymptoms worst on waking and again by late afternoon. Watering in cold wind.\n\nVision:\nRight 6/6, left 6/6 with her current spectacles.\n\nTear film assessment:\nNon-invasive break-up time four seconds right and three seconds left, both well below normal.\nTear meniscus height reduced bilaterally.\nInferior corneal punctate staining with fluorescein, both eyes, graded moderate.\nLissamine green staining of the nasal and temporal conjunctiva.\nSchirmer test not performed today.\n\nLid examination:\nBlocked and capped meibomian gland orifices, both upper and lower lids.\nExpression yields thickened, toothpaste-like secretion.\nAnterior blepharitis with collarettes at the lash bases.\nNo lid malposition. Blink is incomplete on observation at the screen.\n\nAnterior segment:\nNo infection, no infiltrate, no follicles.\nIntraocular pressure right 15, left 16 mmHg.\n\nSystemic symptoms of note:\nShe also reports a persistently dry mouth, needing water to swallow dry food, and aching in the hands and knees for around a year.\nThese were volunteered today and were not mentioned at the previous visit.\n\nPast medical history:\nUnderactive thyroid, diagnosed 2016.\n\nMedication:\nLevothyroxine 100 micrograms daily. Occasional antihistamine for hay fever, which may be contributing.\n\nAllergies:\nNone known.\n\nManagement started here:\nWarm compresses for ten minutes twice daily, followed by lid massage; the technique was demonstrated.\nLid hygiene with a commercial preparation.\nPreservative-free lubricants four times daily and a gel at night.\nScreen breaks and a lower monitor position to reduce exposed surface area.\n\nRequest to the GP:\nGiven the combination of dry eyes, dry mouth and arthralgia, please consider screening for Sjögren's syndrome, including autoantibodies.\nOptometric review in eight weeks.\n",
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
      "caseNotes": "\nPatient:\nMr Raymond Whitfield, 58.\nRoutine sight test, 25 August 2026. He attended wanting new reading glasses.\n\nSymptoms:\nOccasional blurred vision, which he links to periods when his blood sugars run high.\nNo floaters, no flashes, no pain, no field loss.\nReading has become harder over the past year.\n\nVision:\nRight 6/9, left 6/12 improving to 6/9 with pinhole.\nNear vision N8 with current glasses.\nRefraction has shifted 0.75 D more hypermetropic in the right eye since 2024, which may reflect glycaemic variability.\n\nDilated fundus examination:\nBoth eyes show scattered dot-and-blot haemorrhages in all quadrants, several microaneurysms, and a few hard exudates temporal to each macula.\nNo new vessels at the disc or elsewhere.\nNo venous beading, no intraretinal microvascular abnormality.\nNo exudate within one disc diameter of either fovea.\n\nImpression:\nMild-to-moderate non-proliferative diabetic retinopathy, both eyes.\nNo maculopathy threatening fixation today.\nOptical coherence tomography is not available at this practice, so subclinical macular oedema cannot be excluded.\n\nDiabetes history:\nType 2 diabetes for nine years.\nLast HbA1c, as reported by the patient, around 8.5 per cent six months ago; he has not seen the practice nurse since.\n\nMedication:\nMetformin 1 g twice daily.\nAtorvastatin 20 mg at night.\nNo antihypertensive.\n\nAllergies:\nNone known.\n\nLifestyle:\nSmokes ten cigarettes daily, for about forty years.\nWorks as a delivery driver and holds a group one licence.\n\nIntraocular pressure:\nRight 15, left 16 mmHg. Discs healthy, cup-disc ratio 0.3 both eyes.\n\nScreening history:\nHe reports missing his last two diabetic eye screening appointments and is unsure whether he is still on the register.\n\nPlan:\nPlease confirm he is enrolled in the diabetic eye screening programme; this letter is not a substitute for it.\nOptometric review in six months.\nSmoking cessation advised and its specific effect on retinopathy explained.\nGlycaemic and blood pressure control emphasised.\n",
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
      "caseNotes": "\nPatient:\nMr Gerald Hutchinson, 59, accountant.\nRoutine sight test, 28 August 2026, appointment at 10.00 am.\n\nPresenting complaint:\nNone. He attended for a two-yearly check and reports no visual symptoms whatsoever.\nNo haloes, no pain, no field awareness.\n\nVision:\nRight 6/6, left 6/6 with correction.\nRefraction right minus 1.25 DS, left minus 1.50 DS.\n\nIntraocular pressure:\nRight 28 mmHg, left 30 mmHg by Goldmann applanation at 10.00 am.\nRepeated at 10.35 am: right 27, left 29 mmHg.\nNon-contact readings at the previous visit in 2024 were right 24, left 25 mmHg and were not acted upon.\n\nOptic discs:\nCup-disc ratio right 0.7, left 0.75.\nInferior neuroretinal rim thinning both eyes, more marked on the left.\nNo disc haemorrhage seen. Discs are of average size.\n\nVisual fields:\nEarly superior arcuate defect in the left eye, reproducible on repeat.\nRight field borderline, with a cluster of depressed points superonasally.\nReliability indices acceptable for both eyes.\n\nAnterior chamber:\nOpen angles on van Herick assessment, grade 4 both eyes.\nNo pigment dispersion, no pseudoexfoliation.\n\nPachymetry:\nPending; the instrument is being serviced. This is relevant to interpretation of the pressures and to risk.\n\nFamily history:\nMother diagnosed with glaucoma in her sixties and was treated with drops.\n\nPast medical history:\nWell. Mild asthma since childhood.\n\nMedication:\nSalbutamol inhaler as required, used perhaps twice a month.\nNo systemic beta-blocker.\n\nAllergies:\nNone known.\n\nNote for prescribing:\nHis asthma is relevant if topical beta-blocker therapy is considered.\n\nPlan:\nReferred to the hospital eye service under the glaucoma pathway.\nPlease note the suspected diagnosis in his record.\nHe has been advised that first-degree relatives over forty should have regular sight tests, and that these are free of charge for them.\nHe is aware that field loss of this kind is irreversible and that treatment aims to prevent further loss.\n",
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
      "caseNotes": "\nPatient:\nMrs Helen Archer, 61, bookkeeper.\nSeen 1 September 2026.\n\nPresenting complaint:\nDrooping of the left upper lid, noticed by her over the past three weeks and gradually more obvious.\nHer partner has commented that the left pupil looks smaller, particularly in the evenings.\nOccasional aching on the left side of the neck for about a month, which she attributes to her desk.\nNo double vision. No pain in or around the eye. No headache.\n\nObservation:\nMild left upper lid ptosis, margin-to-reflex distance right 4.0 mm, left 2.5 mm.\nLeft palpebral fissure narrower by approximately 1.5 mm.\nPossible slight elevation of the left lower lid.\nLeft pupil smaller than the right. Anisocoria measured 1.0 mm in bright light and 2.0 mm in dim light — greater in the dark, which localises the problem to the smaller pupil.\nBoth pupils react briskly to light and to accommodation. No dilation lag formally timed.\nNo heterochromia. Facial sweating reported as normal by the patient.\n\nVision:\nRight 6/6, left 6/6.\n\nOcular motility:\nFull in all positions. No diplopia on cover testing or on Hess screening.\nLevator function measured at 14 mm left, so the ptosis is not aponeurotic in character.\n\nFundus and pressure:\nDiscs and maculae healthy both eyes.\nIntraocular pressure right 15, left 15 mmHg.\n\nPast medical history:\nEx-smoker, thirty pack-years, stopped four years ago.\nHypertension.\nNo thyroid disease. No previous neck or chest surgery, and no recent trauma.\n\nMedication:\nAmlodipine 5 mg daily.\n\nAllergies:\nNone known.\n\nPlan:\nReferred for medical assessment. The combination of ptosis with a miotic pupil and anisocoria greater in the dark suggests a lesion of the sympathetic pathway, and the smoking history and neck ache make imaging of the neck and chest apex important.\nOnset within three weeks places this in the recently acquired category, which I understand warrants prompt rather than routine investigation.\nShe has been reassured without being given false comfort, and understands why she should not defer the appointment.\n",
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
      "caseNotes": "\nPatient:\nMrs Edith Caldwell, 78, retired teacher.\nAttended as an urgent appointment, 31 August 2026.\n\nPresenting complaint:\nA five-day history of distorted central vision in the right eye.\nStraight lines — door frames and the lines on her knitting pattern — appear wavy.\nA new central grey patch noticed three days ago, now larger.\nNo pain, no redness, no flashes.\nShe noticed it when covering the left eye by chance while cleaning her glasses.\n\nVision:\nRight 6/24, having been 6/9 at her last sight test in July 2025.\nLeft 6/9. No improvement with pinhole on either side.\nNear vision right N18, left N6.\n\nAmsler grid:\nRight eye — metamorphopsia through the central squares and a small absolute scotoma just superior to fixation.\nLeft eye — grid reported as straight and complete.\n\nDilated fundus examination, right eye:\nSubretinal fluid at the macula with a small subretinal haemorrhage inferotemporal to the fovea.\nSoft confluent drusen and pigmentary change.\nNo optical coherence tomography available at this practice.\n\nDilated fundus examination, left eye:\nScattered soft drusen and mild pigmentary change. No fluid, no haemorrhage.\n\nAnterior segment:\nClear corneas. Mild nuclear sclerosis, not accounting for the acuity loss.\nIntraocular pressure right 16, left 15 mmHg.\n\nPast medical history:\nHypertension. Osteoarthritis of both knees.\n\nMedication:\nAmlodipine 5 mg daily. Paracetamol as required.\n\nAllergies:\nNone known.\n\nSmoking:\nEx-smoker, stopped ten years ago after about thirty years.\n\nSocial:\nLives alone. Does not drive. A daughter can bring her to appointments at short notice.\nShe is a keen reader and is frightened of losing that.\n\nPlan:\nUrgent referral under the fast-track macular pathway; she should be assessed within a week for anti-VEGF treatment.\nCounselled that treatment aims to preserve rather than restore vision and that delay costs vision.\nAn Amsler grid given for daily monitoring of the left eye, with instructions to report any change at once.\nDietary and smoking factors discussed. Low-vision support offered but deferred until after assessment.\n",
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
      "caseNotes": "\nPatient:\nMaster Liam Foster, age 4 years 3 months.\nSeen with his mother, 29 August 2026.\n\nReason for attendance:\nFailed the preschool vision screening at nursery in July.\nHis mother has noticed the left eye turning inward for about a year, worse when he is tired or unwell, and worse when he looks at books.\n\nVision:\nRight 6/6 with matching pictures at three metres.\nLeft 6/24, reduced and not improving with pinhole.\nNo crowding bars used; the difference is nonetheless clear and reproducible over two attempts.\n\nCover test:\nLeft convergent squint for near and for distance, larger at near.\nApproximately 25 dioptres at near and 12 at distance by prism cover test.\nNo manifest deviation of the right eye when the left is covered.\n\nCycloplegic refraction, cyclopentolate 1 per cent:\nRight plus 2.50 DS.\nLeft plus 5.00 DS.\nSignificant hypermetropic anisometropia of 2.50 D, which is the likely cause of the amblyopia, with the accommodative element driving the esotropia.\n\nFundus and media:\nHealthy discs and maculae both eyes. Clear media, no cataract, no retinoblastoma signs. Red reflexes equal.\n\nBinocular function:\nStereopsis reduced — 400 seconds of arc on Frisby, no finer level achieved.\nNo suppression testing performed.\n\nBirth and development:\nTerm delivery, normal birth weight, no neonatal problems.\nDevelopment age-appropriate. Speech clear. He is due to start school this September.\n\nFamily history:\nFather wore glasses as a child and had patching treatment.\n\nAllergies:\nNone known.\n\nParental discussion:\nHis mother had assumed the turn would be grown out of and is upset that a year has passed.\nExplained that the treatable window is real but that four is still within it, and that compliance matters more than anything else now.\n\nPlan:\nReferred for orthoptic and paediatric ophthalmology assessment.\nFull hypermetropic correction to be prescribed as the first step; the squint may reduce substantially with glasses alone.\nOcclusion of the right eye is likely once the glasses have been worn for a period.\nParents counselled on the importance of consistent wear and on informing the school.\n",
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
      "caseNotes": "\nPatient:\nMr Anand Sharma, 52, taxi driver.\nSeen 30 August 2026.\n\nPresenting complaint:\nMild blurring of the right eye for about two weeks.\nOccasional floaters in the right eye, described as small dark threads, first noticed four days ago.\nNo pain, no field loss, no flashes.\nHe usually attends screening but has missed the last two appointments because of work.\n\nVision:\nRight 6/12, left 6/9. Pinhole gives no improvement.\n\nDilated fundus examination, right eye:\nNew vessels at the disc, approximately one third of a disc area.\nScattered dot-and-blot haemorrhages in all quadrants.\nVenous beading in two quadrants.\nA small preretinal haemorrhage inferotemporally, which accounts for the floaters.\nNo tractional detachment seen.\n\nDilated fundus examination, left eye:\nModerate non-proliferative changes — haemorrhages, microaneurysms and cotton wool spots.\nNo new vessels.\n\nMacula:\nNo clinically obvious oedema in either eye and no exudate within one disc diameter of fixation.\nOptical coherence tomography not available here, so macular oedema cannot be excluded.\n\nAnterior segment:\nClear. No iris new vessels seen on undilated examination.\nIntraocular pressure right 17, left 17 mmHg. Angles open.\n\nPast medical history:\nType 2 diabetes for fourteen years.\nLast HbA1c 84 mmol/mol.\nHypertension, blood pressure today 156/94.\nRaised cholesterol.\n\nMedication:\nInsulin, twice daily mixed regimen.\nMetformin 1 g twice daily.\nRamipril 10 mg daily.\n\nAllergies:\nNone known.\n\nOccupational and licensing:\nHe drives a taxi and holds a group two licence.\nExplained that pan-retinal photocoagulation can affect the visual field and night vision and that he may have licensing obligations; he was advised to notify the licensing authority and his employer, and this was documented.\nHe was visibly worried about his income and this was discussed openly.\n\nPlan:\nUrgent referral to the medical retina service, expected within two weeks, for likely pan-retinal photocoagulation.\nGlycaemic and blood pressure control emphasised, with a GP review requested.\nAdvised to return immediately if vision drops suddenly, as a vitreous haemorrhage is a real risk.\n",
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
      "caseNotes": "\nPatient:\nMrs Margaret Pryce, 74, retired librarian.\nAttended without appointment, 1 September 2026, 2.15 pm.\n\nPresenting complaint:\nTwo episodes of transient curtain-like loss of vision in the right eye over the past three days.\nEach lasted a few minutes and cleared completely.\nThe second episode was this morning while she was gardening.\nA new throbbing headache over the right temple for about ten days, unlike her usual headaches.\nHer jaw aches after a few minutes of chewing and she has started leaving food.\nThe scalp on the right is tender when she combs her hair.\n\nVision today:\nRight 6/9, left 6/6. No loss at present.\nColour vision full on Ishihara both eyes.\n\nDiscs:\nNo swelling and no pallor at present in either eye.\nCup-disc ratio 0.2 both eyes; small crowded discs.\n\nPupils:\nNo relative afferent pupillary defect currently.\n\nAnterior segment and pressure:\nQuiet. Intraocular pressure right 14, left 15 mmHg.\n\nTemporal arteries:\nRight temporal artery tender and thickened to palpation. Pulsation reduced compared with the left.\n\nSystemic symptoms:\nWeight loss of about 4 kg over two months, unintentional.\nShoulder and hip girdle stiffness for several weeks, worst in the morning and lasting over an hour.\nNight sweats reported.\nLow-grade fever not measured.\n\nPast medical history:\nPolymyalgia-type symptoms, never formally investigated.\nOsteoporosis.\n\nMedication:\nAlendronic acid weekly. Calcium and vitamin D daily.\n\nAllergies:\nNone known.\n\nInvestigations:\nErythrocyte sedimentation rate and C-reactive protein have not been done. No bloods available today.\n\nPlan:\nUrgent same-day referral. I telephoned the eye casualty at 2.40 pm and she is being seen this afternoon.\nExplained that the aim is to prevent permanent loss of vision in either eye and that treatment is usually started before test results return.\nAdvised not to delay for any reason and not to drive herself; a neighbour is taking her.\nThe receiving clinician is asked to consider urgent high-dose corticosteroid therapy alongside inflammatory markers and temporal artery biopsy.\nHer osteoporosis is noted as relevant to steroid treatment.\n",
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
      "caseNotes": "\nPatient:\nMr Thomas Reilly, 34, plumber.\nSeen as an urgent appointment, 28 August 2026.\n\nPresenting complaint:\nA three-day history of a deep aching red right eye.\nMarked photophobia — he has worn sunglasses indoors for two days.\nMild blurring of vision.\nNo discharge, no itch, no trauma, no contact lens wear.\nPain is worse on reading and in bright light, and he describes it as behind the eye rather than on the surface.\n\nVision:\nRight 6/12, left 6/6.\n\nAnterior segment, right eye:\nCiliary flush, circumcorneal, sparing the peripheral conjunctiva.\nAnterior chamber cells graded 2+ with flare.\nSmall irregular pupil with early posterior synechiae at the four and eight o'clock positions, breaking partially on dilation.\nCornea clear with no dendrite and no keratic precipitates of granulomatous type; fine precipitates inferiorly.\nNo hypopyon.\n\nAnterior segment, left eye:\nEntirely normal. Pupil round and reactive.\n\nIntraocular pressure:\nRight 14, left 15 mmHg.\n\nPosterior segment:\nFundus view adequate. Retina flat both eyes, no vitritis seen, maculae healthy.\n\nPrevious history:\nA similar episode in the right eye about two years ago, treated at the eye casualty with drops for several weeks and settled fully.\nHe did not attend the follow-up appointment offered at that time.\n\nSystemic enquiry:\nLower back stiffness most mornings for over a year, lasting about forty minutes and easing with movement.\nNo bowel symptoms, no rash, no joint swelling, no mouth or genital ulceration.\nNo recent infection.\n\nPast medical history:\nOtherwise well. No previous investigation of the back symptoms.\n\nMedication:\nNone.\n\nAllergies:\nNone known.\n\nPlan:\nReferred to the eye casualty today for slit-lamp confirmation and treatment with topical corticosteroid and a cycloplegic; synechiae are already forming, so prompt dilation matters.\nThe recurrent nature and the inflammatory back symptoms are highlighted, as a seronegative spondyloarthropathy and HLA-B27 association should be considered and a rheumatology opinion may be warranted.\nAdvised to attend follow-up on this occasion, and told why.\n",
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
      "caseNotes": "\nPatient:\nMrs Joan Whitfield, 72, retired seamstress.\nSeen 26 August 2026.\n\nPresenting complaint:\nGradual blurring of the right eye over about twelve months.\nMarked glare when driving at night, with haloes around oncoming headlights; she has stopped driving after dark.\nDifficulty with close needlework, which she does daily and describes as the thing she most wants back.\nReading is slower and she needs brighter light.\nNo pain, no floaters, no distortion.\n\nVision:\nRight 6/18, improving to 6/12 with pinhole.\nLeft 6/9.\nNear right N12, left N6.\nGlare testing reduces the right eye to 6/24.\n\nRefraction:\nA myopic shift of 1.25 D in the right eye since 2024, consistent with nuclear sclerosis.\nNew spectacles were dispensed eight months ago and have not helped.\n\nLens:\nRight dense nuclear sclerotic cataract, grade 3, with some posterior subcapsular change.\nLeft early nuclear changes only.\n\nFundus:\nDiscs and maculae healthy in both eyes as far as the view allows.\nThe right view is hazy but no macular pathology is suspected.\n\nAnterior segment:\nDeep anterior chambers, open angles.\nIntraocular pressure right 15, left 16 mmHg.\nNo pseudoexfoliation and no phacodonesis.\n\nPast medical history:\nWell-controlled hypertension.\nHard of hearing; she wears an aid in the left ear, which is relevant to consent and to communication in theatre.\nNo diabetes.\n\nMedication:\nBendroflumethiazide 2.5 mg daily.\nNo alpha-blocker, so intraoperative floppy iris is not anticipated.\n\nAllergies:\nNone known.\n\nDriving:\nShe still drives in daylight and meets the visual standard with her current glasses, but reports glare. This was discussed and documented.\n\nSocial:\nLives alone. A daughter nearby can accompany her and assist with drops afterwards.\n\nPlan:\nReferred for right cataract surgery. She is keen and understands the likely benefit.\nCounselled on the procedure, the local anaesthetic, the drop regimen and the small risk of serious complication.\nAdvised that the left eye may need attention in due course and that a large difference between the eyes after surgery will be discussed at the biometry visit.\n",
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
      "caseNotes": "\nPatient:\nMr Raymond Doyle, 64, warehouse supervisor.\nAttended as an emergency, 31 August 2026, 9.10 am.\n\nPresenting complaint:\nWoke this morning with sudden painless blurring of the left eye.\nHe describes it as looking through dirty water, worst centrally.\nNo pain, no flashes, no floaters, no headache.\nNo preceding transient loss. No weakness or speech disturbance.\n\nVision:\nRight 6/6.\nLeft 6/36, no improvement with pinhole.\nLeft near vision N24.\n\nDilated fundus examination, left eye:\nWidespread flame-shaped haemorrhages in all four quadrants.\nDilated and tortuous veins throughout.\nMultiple cotton wool spots.\nDisc swelling with blurred margins.\nMacular appearance suggests oedema, though this cannot be confirmed without optical coherence tomography.\n\nDilated fundus examination, right eye:\nUnremarkable. No haemorrhage, arteriovenous nipping noted at two crossings.\n\nAnterior segment:\nNo iris new vessels seen on careful examination of the undilated iris and pupil margin.\nAngles open on van Herick.\nIntraocular pressure right 18, left 19 mmHg.\n\nPupils:\nRelative afferent pupillary defect present in the left eye.\n\nPast medical history:\nType 2 diabetes, diagnosed 2014.\nHypertension.\nRaised cholesterol.\nNo known clotting disorder. Non-smoker.\n\nMedication:\nMetformin 1 g twice daily.\nRamipril 10 mg daily.\nAtorvastatin 40 mg at night.\n\nAllergies:\nPenicillin — rash.\n\nBlood pressure today:\n168/98, repeated at 165/96 after ten minutes seated.\n\nPlan:\nSame-day referral to the hospital eye service; telephoned at 9.30 am and accepted.\nPlease also arrange a systemic review — blood pressure, glucose, lipids and full blood count — as the occlusion is a vascular event and the pressure today is well above target.\nCounselled that treatment for macular oedema exists and that follow-up will be needed for neovascular complications over the coming months.\nHe was anxious about his job and driving; both were discussed and he was advised not to drive until reviewed.\n",
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
      "caseNotes": "\nPatient:\nMrs Eileen Doherty, 64.\nUnscheduled walk-in, 1 September 2026, 8.50 pm.\n\nPresenting complaint:\nA three-hour history of severe pain in the right eye, described as boring and radiating to the right forehead.\nBlurred vision with coloured haloes around lights.\nFrontal headache, nausea, and one episode of vomiting in the waiting room.\nOnset was rapid, while she was sitting in a dimly lit cinema.\n\nVision:\nRight 6/36, reduced from 6/9 at her last visit.\nLeft 6/9.\n\nRight eye examination:\nCornea hazy with epithelial oedema, obscuring the view of the iris detail.\nMid-dilated oval pupil, fixed and unreactive to light.\nMarked conjunctival and ciliary injection.\nThe globe feels hard on gentle digital palpation compared with the left.\n\nIntraocular pressure:\nRight 48 mmHg, left 17 mmHg.\n\nAnterior chamber:\nShallow. Van Herick grade 1 on the right, grade 2 on the left, so the fellow eye is also at risk.\n\nRefractive history:\nLong-sighted, plus 3.75 DS right and plus 3.50 DS left.\nNo previous eye surgery and no laser.\n\nPast medical history:\nType 2 diabetes, diet-controlled.\nHypertension.\n\nMedication:\nAmlodipine 5 mg daily.\nAn over-the-counter cold remedy containing an antihistamine and a decongestant, started two days ago — this is likely to be the precipitant and she has been told to stop it.\n\nAllergies:\nPenicillin — rash.\n\nFamily history:\nMother had glaucoma and was told she had the closed-angle type.\n\nPlan:\nSuspected acute angle-closure. Telephoned the eye casualty at 9.05 pm; she is expected there within the hour.\nAdvised to attend immediately and not to drive; her son is taking her.\nExplained that pressure of this level damages the optic nerve within hours and that treatment is urgent.\nThe fellow eye should also be assessed for prophylactic peripheral iridotomy.\nShe has been told to avoid that class of cold remedy in future and to mention the diagnosis to any prescriber.\n",
      "recipient": "Dr Helena Prasad, Consultant Ophthalmologist, Eye Casualty, Riverside General Hospital",
      "letterType": "referral",
      "taskInstruction": "Write an urgent referral letter requesting same-day ophthalmology assessment."
    },
    "guidanceNote": "This is an urgent referral — open by stating the suspected diagnosis and the same-day request. Include IOP, the mid-dilated fixed pupil and recent decongestant use (a precipitant); the diabetes and amlodipine are background and can be omitted or kept brief."
  }
];
