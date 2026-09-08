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
    "profession": "DIETETICS",
    "slug": "wri-dietetics-bariatric-pre-surgery-liver-shrinking-diet-advice",
    "title": "Dietetics — Bariatric pre-surgery liver-shrinking diet advice",
    "prompt": "Using the case notes, write a letter to the patient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nRIVERMEAD BARIATRIC SERVICE — DIETETIC CLINIC\n\nPatient:\nMr Paul Hendricks, 45, male. Warehouse supervisor.\nSeen in the pre-surgical dietetic clinic, 24 August 2026.\n\nDiagnosis:\nSevere obesity. Listed for laparoscopic sleeve gastrectomy in three weeks, 14 September 2026.\n\nAnthropometry:\nWeight 142 kg. Height 1.78 m. Body mass index 44.8.\nWeight in March 2026 was 147 kg; a 5 kg loss achieved before listing.\nWaist 141 cm.\n\nComorbidities:\nType 2 diabetes, diagnosed 2018.\nObstructive sleep apnoea, on CPAP nightly, good compliance reported.\nHypertension.\n\nBiochemistry:\nHbA1c 64 mmol/mol, taken 10 August.\nAlanine aminotransferase mildly raised at 68 U/L.\nUltrasound reports moderate hepatic steatosis with an enlarged left lobe.\nVitamin D 41 nmol/L; ferritin and B12 within range.\n\nIntake history:\nFried foods most evenings. Two to three sugary soft drinks daily. Takeaway lunch four days a week.\nPortions described by his wife as double hers. Grazes on crisps late at night.\nBreakfast is usually skipped.\n\nDiscussed today:\nThe two-week milk-based liver-shrinking diet, to start 31 August.\nPurpose explained — it reduces liver volume so the surgeon can retract it safely; it is not a weight-loss diet in itself.\nTarget 800 to 1000 kcal daily: four meal-replacement sachets plus 200 g of low-starch vegetables.\nAt least two litres of sugar-free fluid daily.\nWarned about headache and fatigue in the first three days.\nGlucose to be checked twice daily; gliclazide is likely to be reduced or stopped by the diabetes team once the diet begins, as hypoglycaemia is a real risk. Metformin and ramipril continue for now.\n\nMedication:\nMetformin 1 g twice daily, gliclazide 80 mg twice daily, ramipril 10 mg once daily.\n\nAllergies:\nNone known.\n\nSocial:\nLives with his wife and two teenage children. She has agreed to prepare his vegetables separately.\nHe asked whether he may still drink black coffee.\n\nPlan:\nTelephone review by the dietitian at one week, 7 September.\nSurgical pre-assessment 9 September.\nDiabetes team to be informed today so that his medication can be adjusted before the diet starts.\n",
      "recipient": "Mr Paul Hendricks, patient",
      "letterType": "advice",
      "taskInstruction": "Provide written dietary advice for the pre-operative liver-shrinking diet before bariatric surgery."
    },
    "guidanceNote": "Explain the purpose of the liver-shrinking diet in patient-friendly terms and flag the need to watch blood glucose while on it."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-chronic-kidney-disease-stage-4-dietary-management-referral",
    "title": "Dietetics — Chronic kidney disease stage 4 dietary management referral",
    "prompt": "Using the case notes, write a letter to the renal dietitian at the regional kidney unit. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Derek Halloran, 67, male. Retired bus driver.\nSeen in the renal dietetic clinic, 27 August 2026.\n\nDiagnosis:\nChronic kidney disease stage 4.\neGFR 22 mL/min/1.73m2, having been 28 six months ago.\nType 2 diabetes for fourteen years. Hypertension.\n\nAnthropometry:\nWeight 71 kg, down from 78 kg over four months. The loss is unintentional and he has not been trying to lose weight.\nHeight 1.74 m. Body mass index 23.5.\nMid-arm circumference reduced compared with the January reading. Handgrip strength below the reference range for his age.\n\nBiochemistry:\nPotassium 5.8 mmol/L, up from 5.2 in June.\nPhosphate 1.9 mmol/L.\nAlbumin 32 g/L.\nHbA1c 58 mmol/mol.\nBicarbonate 19 mmol/L.\nHaemoglobin 104 g/L.\n\nIntake history:\nAppetite poor for about three months. Lunch is regularly skipped.\nEats two bananas most days and drinks fresh orange juice with breakfast.\nProcessed meats several times a week — ham, sausages, tinned corned beef.\nFluid intake approximately 2.5 litres daily; he believes this flushes the kidneys.\nProtein sources limited to a small portion of chicken at the evening meal.\n\nMedication:\nMetformin 500 mg twice daily, ramipril 5 mg once daily, calcium acetate with meals, insulin glargine 18 units at night.\n\nAllergies:\nNone known.\n\nSocial:\nLives with his wife, who does the shopping and cooking and attended with him today.\nHe walks the dog twice daily and would like to keep doing so.\n\nConcerns raised:\nHe is frightened by the word dialysis and asked whether diet alone can prevent it.\n\nPlan:\nAn individualised potassium-lowering plan is required, with attention to phosphate additives in processed foods.\nProtein intake should be reviewed against a target of 0.8 g per kilogram; the current intake is well below this and the falling weight and albumin suggest developing malnutrition. Restriction and undernutrition must be balanced carefully.\nPre-dialysis education to be arranged.\nRepeat bloods in four weeks; reweigh at every visit.\n",
      "recipient": "Ms Hannah Okafor, Specialist Renal Dietitian, Riverside Kidney Unit",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for specialist renal dietary management as eGFR continues to decline."
    },
    "guidanceNote": "Prioritise the falling eGFR, hyperkalaemia and unintentional weight loss; do not list every biochemistry value indiscriminately."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-community-acquired-malnutrition-referral-from-gp-practice",
    "title": "Dietetics — Community-acquired malnutrition referral from GP practice",
    "prompt": "Using the case notes, write a letter to the community dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nGREENSIDE MEDICAL PRACTICE\n\nPatient:\nMr Walter Briggs, 79, male.\nSeen at home by the practice nurse on 20 August 2026 and reviewed by the GP on 26 August.\n\nDiagnosis:\nMalnutrition in the community. Recent bereavement. Social isolation.\n\nAnthropometry:\nWeight 56 kg, having been 64 kg six months ago — a loss of 12.5 per cent.\nHeight 1.72 m. Body mass index 18.9.\nMUST score 2, high risk.\nClothes and a wedding ring both reported as loose.\n\nBiochemistry:\nAlbumin 34 g/L.\nFull blood count, renal and liver function otherwise unremarkable.\nVitamin D not checked.\n\nIntake history:\nBreakfast is tea and one slice of toast. Lunch is frequently missed. The evening meal is often a biscuit with tea.\nHe has not cooked a hot meal since his wife died in February; she did all of the cooking in their fifty-one years together.\nHe describes food as tasteless and says eating alone at the table is the hardest part of the day.\nNo alcohol. Fluid intake adequate.\n\nMobility and function:\nIndependent with washing, dressing and stairs. Reports reduced energy and has stopped his weekly walk to the bowls club.\nVision good. No swallowing difficulty. Dentures fit well.\n\nMedication:\nAmlodipine 5 mg once daily. No appetite stimulant prescribed.\n\nAllergies:\nNone known.\n\nSocial:\nLives alone in a first-floor flat. A son visits monthly from Leeds. A neighbour collects his shopping.\nHe has a working freezer and microwave but says he has never used the microwave.\n\nPlan:\nFood fortification advice — full-fat milk, added butter, cheese and milk powder.\nConsider two oral nutritional supplements daily if fortification alone does not halt the loss.\nRefer to meals-on-wheels and to the local befriending scheme.\nInvolve his son, with the patient's agreement.\nReweigh monthly at the surgery. The immediate aim is to stop further loss rather than to regain the eight kilograms.\n",
      "recipient": "Ms Rebecca Aldous, Community Dietitian, Primary Care Nutrition Team",
      "letterType": "referral",
      "taskInstruction": "Refer this elderly patient for community management of malnutrition identified at a routine review."
    },
    "guidanceNote": "Convey both the nutritional risk (MUST score, weight loss) and the social context, which is central to the management plan."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-discharge-malnutrition-enteral-feeding-handover",
    "title": "Dietetics — Discharge: malnutrition & enteral feeding handover",
    "prompt": "Using the case notes, write a letter to the patient's General Practitioner. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "discharge",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nST BRENDAN'S HOSPITAL — NUTRITION AND DIETETICS\n\nPatient:\nMrs Eileen Carmody, 78, widow, lives alone.\nAdmitted 28 May 2026. Discharged 24 June 2026.\n\nReason for admission:\nAspiration pneumonia with significant unintentional weight loss.\n\nNutrition assessment on admission:\nUnintentional loss of 7 kg over three months.\nWeight 47 kg. Height 1.62 m. Body mass index 17.9.\nMUST score 3, high risk.\nPoor appetite, ill-fitting dentures, low mood since her husband's death in January.\nRefeeding risk assessed as moderate; electrolytes monitored daily for the first week.\n\nIntervention during admission:\nNasogastric feeding for eight days during the acute phase, with a standard 1.0 kcal/mL feed built up over 72 hours.\nSpeech and language therapy assessed her on day nine and cleared a soft diet, progressing to a normal diet and thin fluids by day twenty.\nTube removed on day eleven. Transitioned to full oral intake.\nNow taking soft fortified meals plus two oral nutritional supplements daily. Ensure Plus, vanilla and strawberry, prescribed; she dislikes the banana flavour.\n\nDischarge status, 24 June:\nWeight 49 kg, a gain of 2 kg.\nSwallow safe on a normal diet and thin fluids.\nSupplements tolerated well; she takes them between meals rather than with them, as advised.\nMood improved. Eating in the day room with other patients was noted to increase her intake.\n\nMedication:\nOral nutritional supplements as above.\nLansoprazole 30 mg once daily.\nSertraline 50 mg once daily, newly commenced 8 June.\n\nAllergies:\nNone known.\n\nSocial:\nA daughter visits weekly and will do the shopping.\nMeals-on-wheels arranged from 25 June.\nA dental referral for new dentures is pending; the appointment has not yet come through.\n\nPlan for the GP:\nContinue the supplement prescription for at least eight weeks.\nMonitor weight monthly and re-refer to dietetics if weight falls or oral intake drops.\nCommunity dietitian to review in six weeks.\n",
      "recipient": "Dr Anita Verma, General Practitioner, Larchfield Surgery",
      "letterType": "discharge",
      "taskInstruction": "Hand over nutritional care for a patient discharged home on oral nutritional supplements following treatment for malnutrition."
    },
    "guidanceNote": "The GP needs the discharge weight, current oral intake plan and clear monitoring instructions — the NG-feeding episode is resolved, so summarise it briefly rather than detailing the acute course."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-dysphagia-texture-modified-diet-discharge-to-care-home",
    "title": "Dietetics — Dysphagia texture-modified diet discharge to care home",
    "prompt": "Using the case notes, write a letter to the senior nurse at the residential care home. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Edith Pollard, 84, female.\nDischarged from the stroke unit to Fernbank Care Home on 1 September 2026.\n\nDiagnosis:\nLeft middle cerebral artery infarct, 4 August 2026, with resulting dysphagia.\nAspiration pneumonia during week one, treated and resolved.\n\nSpeech and language therapy assessment:\nReviewed 28 August. IDDSI Level 5, minced and moist, for all food.\nIDDSI Level 2, mildly thick, for all drinks. Thickener prescribed and staff shown the scoop measure.\nNo straws. No mixed consistencies such as cereal in milk or soup with pieces.\n\nAnthropometry:\nWeight 49 kg. Height 1.55 m. Body mass index 20.4.\nLost 3 kg during the admission, most of it in the first fortnight.\n\nBiochemistry:\nAlbumin 33 g/L. Sodium, potassium and renal function stable.\nHaemoglobin 118 g/L.\n\nIntake history:\nEating between 50 and 60 per cent of the modified meals offered.\nNeeds verbal encouragement and a member of staff seated beside her.\nFatigues towards the end of the meal; the last third is usually left.\nPrefers savoury food. Dislikes the pureed fruit dessert.\n\nMedication:\nAll medicines to be reviewed for liquid or dispersible forms — several are currently being crushed, and the pharmacist has been asked to confirm which may be.\nThickener prescribed. Aspirin dispersible. Atorvastatin 40 mg at night.\n\nAllergies:\nNone known.\n\nPositioning and supervision:\nUpright at 90 degrees for all meals and for thirty minutes afterwards.\nSmall spoonfuls, unhurried pace, no talking with food in the mouth.\nMouth care after every meal — pocketing on the left has been observed.\n\nSocial:\nA son visits on Sundays and often brings chocolate, which is not currently safe. This has been explained to him.\n\nPlan:\nContinue Level 5 diet and Level 2 fluids.\nFortify all meals with cream, butter and milk powder.\nOne oral nutritional supplement daily, mid-afternoon.\nWeigh weekly and record intake on a food chart for two weeks.\nSpeech and language therapy to review in six weeks with a view to upgrading textures.\n",
      "recipient": "Sister Margaret Coyle, Senior Nurse, Beechwood Residential Care Home",
      "letterType": "discharge",
      "taskInstruction": "Hand over this resident's texture-modified diet and fluid requirements on discharge from hospital."
    },
    "guidanceNote": "State the IDDSI levels explicitly and the supervision needs; care home staff rely on exact texture guidance to prevent aspiration."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-gestational-diabetes-nutrition-referral-to-maternity-clinic",
    "title": "Dietetics — Gestational diabetes nutrition referral to maternity clinic",
    "prompt": "Using the case notes, write a letter to the antenatal dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Aisha Rahman, 31, female. Primary school teacher.\nSeen in the antenatal dietetic clinic, 25 August 2026.\n\nDiagnosis:\nGestational diabetes, diagnosed at 28 weeks gestation.\nOral glucose tolerance test on 18 August: fasting 5.9 mmol/L, two-hour 9.4 mmol/L.\n\nObstetric history:\nG2 P1. Estimated date of delivery 12 November 2026.\nPrevious baby born at 39 weeks weighing 4.3 kg, delivery complicated by shoulder dystocia.\nFamily history of type 2 diabetes in both parents and one sister.\nFundal height currently measuring two weeks ahead; growth scan booked for 8 September.\n\nAnthropometry:\nPre-pregnancy weight 82 kg. Height 1.60 m. Body mass index 32.\nGained 9 kg so far this pregnancy.\n\nBiochemistry:\nHbA1c 41 mmol/mol.\nHaemoglobin 111 g/L. Ferritin low-normal.\nThyroid function and renal function normal.\n\nIntake history:\nMeals irregular because of the school timetable; breakfast often eaten in the car.\nTwo sweetened drinks daily and a large evening meal after 8 pm.\nWhite rice at most evening meals, portion approximately two cupfuls.\nFibre intake low; fruit twice weekly.\nCraving for sweet food reported in the evenings.\n\nMedication:\nPregnancy multivitamin. Folic acid 400 micrograms daily. No insulin or oral agents at present.\n\nAllergies:\nNone known.\n\nDiscussed today:\nCarbohydrate awareness rather than carbohydrate avoidance.\nPortion guidance for rice, bread and chapati, with the plate model demonstrated.\nLower glycaemic index swaps — basmati rather than easy-cook rice, granary in place of white bread.\nEven distribution across three meals and two snacks, with a small bedtime snack to prevent morning ketones.\nHome glucose monitoring commenced today: fasting and one hour after each meal, targets 5.3 and 7.8 mmol/L.\n\nSocial:\nLives with her husband and a four-year-old. Her mother-in-law cooks the evening meal and will attend the next appointment.\n\nPlan:\nReview in two weeks with her glucose diary.\nIf targets are not met on diet alone, metformin is to be considered by the obstetric team.\nPostnatal glucose testing to be arranged at six to thirteen weeks.\n",
      "recipient": "Ms Catherine Lowe, Antenatal Dietitian, Maternity Outpatient Clinic",
      "letterType": "referral",
      "taskInstruction": "Refer this pregnant patient for dietary management of newly diagnosed gestational diabetes."
    },
    "guidanceNote": "Highlight the OGTT results, BMI and previous large infant; these justify prompt dietary input over routine antenatal care."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-home-enteral-peg-feeding-handover-to-community-team",
    "title": "Dietetics — Home enteral PEG feeding handover to community team",
    "prompt": "Using the case notes, write a letter to the community enteral feeding dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr George Whitcombe, 72, male. Retired joiner.\nDischarge date 30 August 2026.\n\nDiagnosis:\nSquamous cell carcinoma of the oropharynx, treated with chemoradiotherapy completed 12 July 2026.\nSevere radiation-induced dysphagia and mucositis.\nPercutaneous endoscopic gastrostomy inserted 20 August 2026.\n\nAnthropometry:\nWeight 58 kg. Height 1.76 m. Body mass index 18.7.\nLost 11 kg over three months, most of it during radiotherapy.\nWeight has been stable for the last eight days.\n\nBiochemistry:\nAlbumin 30 g/L.\nRefeeding risk identified on admission and now resolved; phosphate, potassium and magnesium have been normal for six days.\nRenal function stable. Corrected calcium normal.\n\nFeeding regimen, to continue unchanged:\nStandard 1.5 kcal/mL feed, 1500 mL over 18 hours by pump.\nTotal 2250 kcal and 90 g protein daily.\nWater flushes of 30 mL before and after the feed and every four hours during it.\nExternal marker at 4 cm; position to be checked before every feed.\nHead of the bed raised to 30 degrees during feeding and for one hour afterwards.\n\nOral intake:\nNil by mouth at present. Speech and language therapy is reassessing the swallow, next review 15 September.\nHe is permitted sips of water for comfort only, with therapy supervision.\nMouth care four times daily.\n\nMedication:\nAll medicines given via the tube in liquid or dispersible form, flushing 30 mL between each. Analgesia as charted.\n\nAllergies:\nPenicillin — rash in childhood.\n\nTraining and equipment:\nHis daughter has completed the carer training and demonstrated the pump, the flush technique and stoma care.\nPump, stand, feed and ancillaries delivered to the house on 28 August. Next delivery due 25 September.\n\nPlan:\nWeigh weekly on the home scales provided.\nReview tolerance, stoma site and bowel habit at the first community visit within five working days.\nGradual oral reintroduction to follow speech and language therapy advice; the tube is expected to be temporary.\n",
      "recipient": "Mr Samuel Adeyemi, Home Enteral Feeding Dietitian, Community Nutrition Service",
      "letterType": "transfer",
      "taskInstruction": "Transfer this patient to the community home enteral feeding team following PEG insertion and discharge."
    },
    "guidanceNote": "Include the full feeding regimen and flush schedule precisely; community staff need exact figures to continue the feed safely."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-newly-diagnosed-coeliac-disease-advice-to-patient",
    "title": "Dietetics — Newly diagnosed coeliac disease advice to patient",
    "prompt": "Using the case notes, write a letter to the patient. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Priya Sharma, 34, female. Software developer.\nSeen in the gastroenterology dietetic clinic, 28 August 2026.\n\nDiagnosis:\nCoeliac disease, confirmed on duodenal biopsy taken 11 August 2026 showing subtotal villous atrophy.\nTissue transglutaminase IgA strongly positive. Total IgA normal.\n\nSymptoms before diagnosis:\nBloating and diarrhoea for about a year, worse after bread and pasta.\nPersistent fatigue. Mouth ulcers.\nUnintentional loss of 5 kg over six months.\n\nAnthropometry:\nWeight 54 kg. Height 1.62 m. Body mass index 20.6.\n\nBiochemistry:\nFerritin 9 micrograms/L — low.\nFolate low-normal. Vitamin B12 within range.\nVitamin D 38 nmol/L.\nCalcium normal. A DEXA scan has been requested.\n\nIntake history:\nBread daily, pasta four times a week, wheat-based breakfast cereal every morning.\nChapati with the evening meal.\nNo previous knowledge of gluten-free eating; she had not heard of the condition before the referral.\n\nMedication:\nFerrous fumarate 210 mg twice daily, commenced 14 August. Vitamin D 800 units daily.\n\nAllergies:\nNone known.\n\nDiscussed in clinic today:\nA strict, lifelong gluten-free diet is the only treatment, and it must continue even when she feels well.\nWheat, barley and rye to be avoided, including spelt, semolina and malt extract.\nOats only if labelled gluten-free.\nLabel reading, the crossed-grain symbol, and the meaning of the phrase gluten-free in law.\nCross-contamination at home — a separate toaster or toaster bags, a separate butter dish, and washing surfaces before preparing her food.\nNaturally gluten-free staples: rice, potatoes, maize, lentils, plain meat, fish, eggs, fruit and vegetables.\nPrescribable gluten-free staples and how to request them.\nEating out and questions to ask.\n\nSocial:\nLives with her husband, who eats a shared evening meal. Her mother is anxious that she can no longer eat family food.\nMembership of the coeliac society recommended and the application form given.\n\nPlan:\nDietitian follow-up in eight weeks.\nRepeat antibody levels and full blood count at three months.\nFamily screening to be discussed — first-degree relatives are at raised risk.\n",
      "recipient": "Mrs Priya Sharma, patient",
      "letterType": "advice",
      "taskInstruction": "Provide written dietary advice following confirmed coeliac disease diagnosis and clinic consultation."
    },
    "guidanceNote": "Write in plain, encouraging language the patient can act on; explain why strict avoidance matters without using clinical jargon."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-oncology-cachexia-nutritional-support-transfer-to-palliative-team",
    "title": "Dietetics — Oncology cachexia nutritional support transfer to palliative team",
    "prompt": "Using the case notes, write a letter to the palliative care dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Raymond Clarke, 68, male. Retired postman.\nReviewed on the oncology ward, 29 August 2026, before transfer to the community palliative team.\n\nDiagnosis:\nMetastatic adenocarcinoma of the pancreas with liver metastases.\nCancer cachexia.\nChemotherapy stopped 5 August 2026. Treatment intent is now palliative.\n\nAnthropometry:\nWeight 52 kg, having been 70 kg five months ago.\nHeight 1.75 m. Body mass index 17.0.\nSevere temporal and upper-limb muscle wasting. Ascites present, so the recorded weight understates the tissue loss.\n\nBiochemistry:\nAlbumin 26 g/L.\nC-reactive protein elevated at 96 mg/L.\nBilirubin rising. Renal function stable.\n\nIntake history:\nEarly satiety after three or four mouthfuls.\nNausea most mornings, better after the antiemetic.\nAppetite minimal. Takes small amounts of soft food — ice cream, custard, tinned peaches, thin soup.\nAltered taste; he says everything tastes metallic and has stopped drinking tea, which he previously enjoyed.\nSteatorrhoea improved since the enzyme dose was increased.\n\nMedication:\nAnalgesia as charted. Antiemetic before meals.\nPancreatic enzyme replacement with all food and snacks, dose reviewed 22 August.\n\nAllergies:\nNone known.\n\nGoals of care, agreed with the patient and his wife:\nComfort, enjoyment of food and quality of life.\nNot weight gain, and not aggressive nutritional intervention. Artificial feeding has been discussed and declined.\n\nFamily discussion:\nHis wife has been distressed by his refusal of meals and has been preparing large plates.\nExplained that the weight loss is driven by the disease and by inflammation, not by a lack of effort, and that pressing him to eat is likely to cause distress to them both.\n\nPlan:\nSmall, appealing portions on a small plate, offered often and without pressure.\nFortify what he does accept, as tolerated.\nAntiemetic thirty minutes before food.\nOral nutritional supplements available if he wants them, chilled, but not to be pressed.\nContinue enzymes with every intake.\nReview at the family's request rather than on a fixed schedule.\n",
      "recipient": "Ms Diane Foster, Palliative Care Dietitian, Community Hospice Service",
      "letterType": "transfer",
      "taskInstruction": "Transfer this patient with cancer cachexia to the palliative team for comfort-focused nutritional support."
    },
    "guidanceNote": "Frame goals around comfort and quality of life rather than weight gain; palliative care priorities differ from active treatment."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-paediatric-faltering-growth-referral-to-community-paediatric-team",
    "title": "Dietetics — Paediatric faltering growth referral to community paediatric team",
    "prompt": "Using the case notes, write a letter to the community paediatric dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nEthan Doyle, 18 months, male.\nSeen in the community paediatric dietetic clinic with his mother, 26 August 2026.\n\nReason for referral:\nFaltering growth. Query cow's milk protein intolerance.\n\nGrowth:\nWeight 8.4 kg today. He has dropped from the 9th centile to below the 2nd over the past four months.\nLength remains on the 9th centile. Head circumference on the 25th and tracking.\nBirth weight 3.2 kg at term, no neonatal problems.\n\nFeeding history:\nFussy eater. Refuses all lumpy textures and gags on them; accepts smooth purees and crisps.\nDrinks approximately 800 mL of cow's milk daily, much of it from a bottle, including one at bedtime and one during the night.\nSolids limited to about six accepted foods.\nMealtimes take up to an hour and usually end with him being fed while distracted by a screen.\n\nBowels:\nFrequent loose stools, three to four daily, described as offensive. No blood. No vomiting.\nNappy rash recurs.\n\nInvestigations:\nFull blood count normal. No coeliac screen taken as yet.\nUrine dip negative. No other biochemistry available.\n\nDevelopment:\nWalking independently since fourteen months. Six words. Otherwise age-appropriate. Hearing screen passed.\n\nMedication:\nNone. No vitamin drops given.\n\nAllergies:\nPossible dairy intolerance, unconfirmed. No history of rash, wheeze or lip swelling.\n\nSocial:\nFirst child. Both parents work; he attends nursery three days a week and eats slightly better there.\nHis mother is anxious about mealtimes and became tearful describing them today.\n\nPlan:\nReduce milk to no more than 500 mL daily and move from bottle to open cup; stop the night feed.\nIncrease energy density of accepted foods before increasing variety.\nA four-day food and feeding diary to be completed before the next visit.\nConsider a trial of hypoallergenic formula only if a supervised exclusion is agreed with the paediatrician.\nVitamin drops to be started.\nWeigh fortnightly for six weeks. Joint review with speech and language therapy for the texture refusal.\n",
      "recipient": "Ms Laura Bennett, Community Paediatric Dietitian, Northgate Child Health Centre",
      "letterType": "referral",
      "taskInstruction": "Refer this child for ongoing community management of faltering growth and feeding difficulties."
    },
    "guidanceNote": "Emphasise the centile crossing and feeding pattern; flag parental anxiety as relevant to the management plan."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-refeeding-syndrome-risk-handover-from-eating-disorder-unit",
    "title": "Dietetics — Refeeding syndrome risk handover from eating disorder unit",
    "prompt": "Using the case notes, write a letter to the GP. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMiss Hannah Croft, 22, female. Student.\nAdmitted 6 June 2026. Discharged 28 August 2026.\nHandover from the inpatient unit to the community team.\n\nDiagnosis:\nAnorexia nervosa, restrictive subtype.\nAssessed on admission as at high risk of refeeding syndrome.\n\nAnthropometry:\nOn admission: weight 41 kg, height 1.66 m, body mass index 14.9.\nOn discharge: weight 46 kg, body mass index 16.7.\nAverage gain 0.6 kg per week over the admission.\n\nBiochemistry:\nPhosphate, potassium and magnesium all fell in the first week and were corrected; monitored daily for ten days, then twice weekly.\nAll three have been within range for six weeks.\nLiver enzymes normalised. Full blood count normal at discharge.\nBone density scan on 12 August shows reduced density at the lumbar spine; results discussed with her.\n\nNutritional management:\nFeeding started at 10 kcal per kilogram and increased over seven days under daily biochemical monitoring.\nNow on a structured meal plan of 2200 kcal daily: three meals and three snacks, all supervised initially, latterly unsupervised at breakfast.\nShe has been managing meals in the dining room with staff present for the last four weeks.\n\nMedication:\nThiamine 100 mg three times daily and a B-complex multivitamin, both continuing.\nPhosphate supplement given during the refeeding period and discontinued on 20 June.\n\nAllergies:\nNone known.\n\nPhysical observations:\nPulse 54, blood pressure 102/64 lying, no significant postural drop for the last three weeks.\nTemperature normal. ECG on 24 August showed no QT prolongation.\n\nSocial:\nReturning to her parents' home. Her university course is deferred until January.\nHer mother attended the discharge meeting and has been given the meal-plan guidance.\n\nPlan for the community team:\nContinue the meal plan as written; no changes without dietetic agreement.\nGradual restoration towards a body mass index of 19.\nOutpatient dietetic review fortnightly and psychology weekly.\nGP to weigh fortnightly and check bloods monthly.\nAgreed readmission criteria are documented in the enclosed care plan.\n",
      "recipient": "Dr Andrew Nesbitt, General Practitioner",
      "letterType": "discharge",
      "taskInstruction": "Provide a discharge summary and ongoing nutritional plan following inpatient eating disorder treatment."
    },
    "guidanceNote": "Make the ongoing monitoring schedule clear; the GP needs to know weight and biochemistry targets to manage relapse risk."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-type-1-diabetes-carbohydrate-counting-referral-for-adolescent",
    "title": "Dietetics — Type 1 diabetes carbohydrate counting referral for adolescent",
    "prompt": "Using the case notes, write a letter to the paediatric diabetes dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMiss Chloe Maddox, 14, female.\nSeen in the paediatric diabetes clinic with both parents, 27 August 2026.\n\nDiagnosis:\nType 1 diabetes, diagnosed August 2023.\nBasal-bolus regimen since diagnosis.\n\nAnthropometry:\nWeight 52 kg. Height 1.61 m. Body mass index 20.1.\nGrowth appropriate and tracking along her centile.\n\nBiochemistry:\nHbA1c 79 mmol/mol, having risen from 64 twelve months ago and 71 in March.\nMeter download shows frequent post-meal readings above 14 mmol/L, particularly after lunch.\nNo hypoglycaemia below 3.0 recorded in the last month. No ketones.\nThyroid function and coeliac screen normal at the annual review.\n\nIntake history:\nSchool lunch is irregular; she often buys chips or a baguette from the canteen queue and boluses afterwards, if at all.\nSnacks on cereal bars between lessons.\nEstimates carbohydrate by eye and has not weighed food since the year of diagnosis.\nEvening meal at home is counted more accurately.\n\nMedication:\nInsulin aspart with meals, current ratio 1 unit to 12 g at all meals.\nInsulin glargine 22 units at night.\n\nAdherence:\nMeter download shows six missed mealtime boluses in the past fortnight, five of them at lunchtime.\nShe says she does not want to inject in front of her friends.\n\nAllergies:\nNone known.\n\nSocial:\nLives with both parents and a younger brother.\nManages her own injections and would like to keep doing so; her parents ask to be more involved but she is resistant.\nPlays netball twice weekly and has had no exercise-related hypoglycaemia.\n\nPlan:\nStructured carbohydrate counting education, three sessions, with food photographs and scales for home practice.\nInsulin-to-carbohydrate ratio to be reviewed by the diabetes team; the lunchtime ratio looks too weak on the download.\nAddress the missed lunchtime doses directly with her, exploring discreet options rather than supervision.\nSchool nurse to be contacted with her permission.\nRepeat HbA1c in three months. Continuous glucose monitoring or pump therapy to be considered if control does not improve.\n",
      "recipient": "Ms Olivia Trent, Paediatric Diabetes Dietitian, Children's Diabetes Service",
      "letterType": "referral",
      "taskInstruction": "Refer this adolescent for carbohydrate counting education to improve glycaemic control."
    },
    "guidanceNote": "Foreground the rising HbA1c and inaccurate carb estimation; these are the reasons specialist education is needed now."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-type-2-diabetes-referral-to-community-dietitian",
    "title": "Dietetics — Type 2 diabetes referral to community dietitian",
    "prompt": "Using the case notes, write a letter to the community dietetics service. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "CORE",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nGP-ATTACHED DIABETES CLINIC\n\nPatient:\nMr Daniel Okonkwo, 54, accountant.\nSeen 12 June 2026. Referral written 14 June 2026.\n\nDiagnosis:\nType 2 diabetes, diagnosed 2021.\nHypertension. Mild obesity.\n\nCurrent status:\nHbA1c 9.2 per cent, up from 7.8 per cent six months ago.\nWeight 96 kg, height 1.74 m, body mass index 31.7.\nWaist 108 cm. Blood pressure 142/88.\nTotal cholesterol 5.4 mmol/L. eGFR 78. Urine albumin-creatinine ratio normal.\nRetinal screening in April was clear. Foot check normal, pulses present, sensation intact.\n\nDiet history:\nBreakfast skipped on working days.\nTakeaway lunch four or five days a week, usually fried chicken and rice.\nLarge evening meal after 9 pm.\nTwo to three sugary soft drinks daily.\nBiscuits at the desk through the afternoon.\nVegetables rarely, perhaps twice a week.\n\nMedication:\nMetformin 1 g twice daily.\nRamipril 5 mg once daily.\nAtorvastatin 20 mg at night.\nAll taken as prescribed; he has not missed doses.\n\nAllergies:\nPenicillin — rash.\n\nSocial:\nLives with his wife. Sedentary job with long hours and a car commute.\nWalks very little; no formal exercise.\nReports significant work stress and irregular mealtimes since a promotion in January.\nHis wife cooks at weekends and is willing to attend joint sessions.\n\nMotivation:\nHe was shaken by his father's below-knee amputation in March and is keen to avoid insulin.\nHe has asked directly whether the diabetes can be put into remission.\n\nPrevious input:\nAttended a single group education session in 2021 and did not return, saying the timing clashed with work.\nHe has never seen a dietitian individually.\n\nPlan:\nCarbohydrate-awareness education and a structured meal pattern, with attention to the missed breakfast and the late evening meal.\nWeight-management goals — an initial 5 per cent, which is around 5 kg.\nReinforce physical activity, starting with the commute.\nReview in three months with repeat HbA1c and weight, alongside the GP.\n",
      "recipient": "Ms Helena Brookes, Senior Dietitian, Riverside Community Dietetics Service",
      "letterType": "referral",
      "taskInstruction": "Refer Mr Okonkwo for ongoing dietary management of poorly controlled type 2 diabetes and recent weight gain."
    },
    "guidanceNote": "Lead with why ongoing dietetic input is needed (rising HbA1c, weight gain), then give the diet history and motivators the dietitian will build on. Omit the BP and statin detail unless you can tie it to the dietary plan."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-ulcerative-colitis-flare-nutrition-support-referral",
    "title": "Dietetics — Ulcerative colitis flare nutrition support referral",
    "prompt": "Using the case notes, write a letter to the gastroenterology dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "STRETCH",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMr Thomas Greer, 29, male. Graphic designer.\nSeen on the gastroenterology ward, 30 August 2026, day three of admission.\n\nDiagnosis:\nUlcerative colitis, diagnosed 2022, extensive disease.\nAcute severe flare — eight to ten bloody stools daily for two weeks, including at night.\n\nAnthropometry:\nWeight 64 kg, having been 70 kg three weeks ago.\nHeight 1.80 m. Body mass index 19.8.\nThe loss is rapid and represents 8.6 per cent of body weight.\n\nBiochemistry:\nC-reactive protein 78 mg/L.\nAlbumin 28 g/L.\nHaemoglobin 105 g/L, ferritin low, transferrin saturation 11 per cent.\nPotassium 3.3 mmol/L. Magnesium low-normal.\nStool cultures negative. Clostridioides difficile toxin negative.\n\nIntake history:\nAppetite poor. Actively avoiding food because eating provokes urgency and pain.\nEstimated intake under 1000 kcal daily for the past ten days.\nHas excluded dairy, bread and all vegetables after reading online that they cause flares; this has narrowed his diet considerably without improving symptoms.\nDrinking mainly water and cola.\n\nMedication:\nIntravenous hydrocortisone.\nBiologic therapy planned, decision expected on day five.\nIntravenous iron given yesterday.\n\nAllergies:\nNone known.\n\nSocial:\nLives with a flatmate. Works from home. Has taken three weeks off.\nAnxious about the possibility of surgery, which was mentioned on the ward round.\n\nDiscussed:\nThere is no evidence for a restrictive exclusion diet in an acute flare, and food avoidance is worsening the deficit. Explained this and agreed a gradual reintroduction of dairy and refined carbohydrate.\n\nPlan:\nAssess formally for malnutrition; he meets the criteria on weight loss and low intake.\nTwo oral nutritional supplements daily, sipped slowly, starting today.\nSmall, frequent, energy-dense and low-residue meals while symptoms are acute.\nRecord food and fluid intake on a chart.\nIf intake remains under half of requirements by day six, discuss enteral support with the team; parenteral nutrition only if the gut cannot be used.\nDietetic review twice weekly while an inpatient.\n",
      "recipient": "Dr Fiona Marsh, Gastroenterology Specialist Dietitian, Digestive Diseases Unit",
      "letterType": "referral",
      "taskInstruction": "Refer this patient for nutritional support during an acute ulcerative colitis flare."
    },
    "guidanceNote": "Stress the rapid weight loss, low albumin and poor intake; these signal nutritional risk needing prompt specialist review."
  },
  {
    "subTest": "WRITING",
    "taskType": "WRITING_LETTER",
    "profession": "DIETETICS",
    "slug": "wri-dietetics-weight-management-programme-referral-for-metabolic-syndrome",
    "title": "Dietetics — Weight management programme referral for metabolic syndrome",
    "prompt": "Using the case notes, write a letter to the weight management dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    "difficulty": "FOUNDATION",
    "topicTag": "referral",
    "timeLimitSeconds": 2700,
    "active": true,
    "payload": {
      "wordMax": 200,
      "wordMin": 180,
      "caseNotes": "\nPatient:\nMrs Sandra Whitfield, 52, female. School administrator.\nSeen in the GP practice, 24 August 2026.\n\nDiagnosis:\nMetabolic syndrome — central obesity, impaired fasting glucose, raised triglycerides, low HDL and raised blood pressure.\n\nAnthropometry:\nWeight 96 kg. Height 1.63 m. Body mass index 36.1.\nWaist 108 cm.\nWeight has risen by approximately 14 kg over six years, with most of the gain since the menopause.\n\nBiochemistry:\nFasting glucose 6.4 mmol/L on two occasions.\nHbA1c 44 mmol/mol.\nTriglycerides 2.8 mmol/L. HDL cholesterol 0.9 mmol/L. Total cholesterol 5.6 mmol/L.\nBlood pressure 148/92, confirmed on home readings.\nLiver enzymes mildly raised; ultrasound shows hepatic steatosis.\nThyroid function normal.\n\nIntake history:\nTakeaway meals three evenings a week.\nTwo sugary soft drinks and two sweetened coffees daily.\nGrazes through the evening in front of the television — crisps, chocolate, cheese and crackers.\nBreakfast is usually skipped; lunch is a sandwich meal deal at her desk.\nAlcohol approximately fourteen units weekly, mostly at weekends.\n\nActivity:\nSedentary role. Drives to work. No planned exercise.\nKnee pain on stairs limits her, and she is reluctant to attend a gym.\n\nMedication:\nNone currently. She has declined statin therapy twice and wishes to try lifestyle change first.\n\nAllergies:\nNone known.\n\nSocial:\nLives with her husband and adult son. She does all of the cooking.\nHer mother developed type 2 diabetes at 55 and this worries her.\n\nMotivation:\nKeen and specific — she wants to avoid medication and to walk her daughter's dog without breathlessness.\n\nPlan:\nRefer to the structured twelve-week weight management programme starting 21 September.\nDietary modification with attention to evening grazing and to sugary drinks, which alone account for a substantial daily excess.\nPortion control using the plate model.\nIncrease activity gradually, starting with walking, allowing for the knee.\nBehaviour change support and self-monitoring.\nAim for 5 to 10 per cent weight loss over six months.\nMonitor weight, waist, blood pressure and fasting glucose. GP review in three months.\n",
      "recipient": "Mr Joseph Lin, Weight Management Dietitian, Healthy Living Service",
      "letterType": "referral",
      "taskInstruction": "Refer this patient to the tier 2 weight management programme for lifestyle and dietary support."
    },
    "guidanceNote": "A straightforward referral; note the patient's motivation and diabetes risk as these support placement in the programme."
  }
];
