import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Chronic kidney disease stage 4 dietary management referral",
    prompt: "Using the case notes, write a letter to the renal dietitian at the regional kidney unit. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Hannah Okafor, Specialist Renal Dietitian, Riverside Kidney Unit",
      taskInstruction: "Refer this patient for specialist renal dietary management as eGFR continues to decline.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Derek Halloran, 67, male.\nDiagnosis: CKD stage 4, eGFR 22 mL/min/1.73m2 (was 28 six months ago); type 2 diabetes 14 years; hypertension.\nAnthropometry: weight 71 kg (down from 78 kg over 4 months), height 1.74 m, BMI 23.5, unintentional loss.\nBiochemistry: potassium 5.8 mmol/L, phosphate 1.9 mmol/L, albumin 32 g/L, HbA1c 58 mmol/mol, bicarbonate 19 mmol/L.\nIntake history: poor appetite, skips lunch, high intake of bananas, oranges, processed meats; fluid 2.5 L/day.\nMeds: metformin, ramipril, calcium acetate, insulin glargine.\nAllergies: none.\nPlan: needs individualised low-potassium, phosphate-aware plan; review protein intake (0.8 g/kg target); monitor for malnutrition; pre-dialysis education."
    },
    guidanceNote: "Prioritise the falling eGFR, hyperkalaemia and unintentional weight loss; do not list every biochemistry value indiscriminately."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Newly diagnosed coeliac disease advice to patient",
    prompt: "Using the case notes, write a letter to the patient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Mrs Priya Sharma, patient",
      taskInstruction: "Provide written dietary advice following confirmed coeliac disease diagnosis and clinic consultation.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mrs Priya Sharma, 34, female.\nDiagnosis: coeliac disease confirmed by duodenal biopsy; positive tTG-IgA.\nSymptoms (pre-diagnosis): bloating, diarrhoea, fatigue, 5 kg unintentional weight loss over 6 months.\nAnthropometry: weight 54 kg, height 1.62 m, BMI 20.6.\nBiochemistry: ferritin 9 ug/L (low), folate low-normal, vitamin D 38 nmol/L.\nIntake history: bread, pasta, breakfast cereals daily; limited gluten-free knowledge.\nMeds: ferrous fumarate commenced.\nAllergies: none.\nDiscussed in clinic: strict lifelong gluten-free diet; avoid wheat, barley, rye; check labels; cross-contamination risk; naturally gluten-free foods; prescribable GF staples; coeliac society membership.\nPlan: dietitian follow-up in 8 weeks; repeat bloods at 3 months."
    },
    guidanceNote: "Write in plain, encouraging language the patient can act on; explain why strict avoidance matters without using clinical jargon."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Paediatric faltering growth referral to community paediatric team",
    prompt: "Using the case notes, write a letter to the community paediatric dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Laura Bennett, Community Paediatric Dietitian, Northgate Child Health Centre",
      taskInstruction: "Refer this child for ongoing community management of faltering growth and feeding difficulties.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Ethan Doyle, 18 months, male.\nDiagnosis: faltering growth; ?cow's milk protein intolerance.\nAnthropometry: weight 8.4 kg (dropped from 9th to below 2nd centile over 4 months); length on 9th centile.\nFeeding history: fussy eater; refuses lumpy textures; drinks 800 mL cow's milk daily; limited solids; frequent loose stools.\nBiochemistry: not done; FBC normal.\nDevelopment: walking, otherwise age-appropriate.\nMeds: none.\nAllergies: ?dairy (unconfirmed).\nSocial: first child; mother anxious about mealtimes.\nPlan: trial reduced milk volume; increase energy-dense solids; consider hypoallergenic formula; food and feeding diary; multidisciplinary input; regular weight monitoring."
    },
    guidanceNote: "Emphasise the centile crossing and feeding pattern; flag parental anxiety as relevant to the management plan."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Home enteral PEG feeding handover to community team",
    prompt: "Using the case notes, write a letter to the community enteral feeding dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Mr Samuel Adeyemi, Home Enteral Feeding Dietitian, Community Nutrition Service",
      taskInstruction: "Transfer this patient to the community home enteral feeding team following PEG insertion and discharge.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr George Whitcombe, 72, male.\nDiagnosis: head and neck cancer post-chemoradiotherapy; severe dysphagia; PEG inserted 10 days ago.\nAnthropometry: weight 58 kg, height 1.76 m, BMI 18.7; lost 11 kg over 3 months.\nBiochemistry: albumin 30 g/L; refeeding risk resolved; electrolytes stable.\nFeeding regimen: standard 1.5 kcal/mL feed, 1500 mL over 18 hours via pump overnight; 30 mL water flushes pre/post and every 4 hours; total 2250 kcal, 90 g protein.\nIntake: nil by mouth currently; speech therapy assessing swallow.\nMeds: via PEG, crushed/liquid; analgesia.\nAllergies: penicillin.\nPlan: monitor weight weekly; review tolerance; pump and feed delivery arranged; carer trained; aim gradual oral reintroduction per SALT."
    },
    guidanceNote: "Include the full feeding regimen and flush schedule precisely; community staff need exact figures to continue the feed safely."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Gestational diabetes nutrition referral to maternity clinic",
    prompt: "Using the case notes, write a letter to the antenatal dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Catherine Lowe, Antenatal Dietitian, Maternity Outpatient Clinic",
      taskInstruction: "Refer this pregnant patient for dietary management of newly diagnosed gestational diabetes.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mrs Aisha Rahman, 31, female.\nDiagnosis: gestational diabetes, 28 weeks gestation; OGTT fasting 5.9 mmol/L, 2-hour 9.4 mmol/L.\nAnthropometry: pre-pregnancy weight 82 kg, height 1.60 m, BMI 32; gained 9 kg this pregnancy.\nBiochemistry: HbA1c 41 mmol/mol; otherwise normal.\nIntake history: irregular meals; sweetened drinks; large evening portions; low fibre.\nObstetric: G2P1; previous baby 4.3 kg; family history type 2 diabetes.\nMeds: pregnancy multivitamin; folic acid.\nAllergies: none.\nPlan: carbohydrate awareness, portion and glycaemic guidance; home glucose monitoring commenced; review in 2 weeks; consider metformin if targets not met."
    },
    guidanceNote: "Highlight the OGTT results, BMI and previous large infant; these justify prompt dietary input over routine antenatal care."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Ulcerative colitis flare nutrition support referral",
    prompt: "Using the case notes, write a letter to the gastroenterology dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Dr Fiona Marsh, Gastroenterology Specialist Dietitian, Digestive Diseases Unit",
      taskInstruction: "Refer this patient for nutritional support during an acute ulcerative colitis flare.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Thomas Greer, 29, male.\nDiagnosis: ulcerative colitis, acute flare; 8-10 bloody stools daily for 2 weeks.\nAnthropometry: weight 64 kg (was 70 kg three weeks ago), height 1.80 m, BMI 19.8; rapid loss.\nBiochemistry: CRP 78 mg/L, albumin 28 g/L, haemoglobin 105 g/L, ferritin low.\nIntake history: poor appetite; avoiding food due to pain; intake under 1000 kcal/day.\nMeds: IV corticosteroids; planned biologic; iron infusion.\nAllergies: none.\nPlan: assess for malnutrition; consider oral nutritional supplements; encourage small frequent energy-dense meals; monitor for need of parenteral support if intake stays poor; weekly review."
    },
    guidanceNote: "Stress the rapid weight loss, low albumin and poor intake; these signal nutritional risk needing prompt specialist review."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Dysphagia texture-modified diet discharge to care home",
    prompt: "Using the case notes, write a letter to the senior nurse at the residential care home. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Sister Margaret Coyle, Senior Nurse, Beechwood Residential Care Home",
      taskInstruction: "Hand over this resident's texture-modified diet and fluid requirements on discharge from hospital.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mrs Edith Pollard, 84, female.\nDiagnosis: post-stroke dysphagia; aspiration pneumonia (treated).\nSALT assessment: IDDSI Level 5 minced and moist diet; Level 2 mildly thick fluids.\nAnthropometry: weight 49 kg, height 1.55 m, BMI 20.4; lost 3 kg during admission.\nBiochemistry: albumin 33 g/L; otherwise stable.\nIntake history: eating 50-60% of modified meals; needs encouragement and supervision.\nMeds: review for liquid/crushable forms; thickener prescribed.\nAllergies: none.\nPlan: continue Level 5 diet and Level 2 fluids; fortify meals; one oral nutritional supplement daily; upright positioning when eating; supervise meals; weigh weekly; SALT review in 6 weeks."
    },
    guidanceNote: "State the IDDSI levels explicitly and the supervision needs; care home staff rely on exact texture guidance to prevent aspiration."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Refeeding syndrome risk handover from eating disorder unit",
    prompt: "Using the case notes, write a letter to the GP. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "discharge",
      recipient: "Dr Andrew Nesbitt, General Practitioner",
      taskInstruction: "Provide a discharge summary and ongoing nutritional plan following inpatient eating disorder treatment.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Miss Hannah Croft, 22, female.\nDiagnosis: anorexia nervosa, restrictive subtype; admitted at high refeeding risk.\nAnthropometry: admission weight 41 kg, height 1.66 m, BMI 14.9; discharge weight 46 kg, BMI 16.7.\nBiochemistry: phosphate, potassium, magnesium normalised; refeeding period complete; monitored daily during reintroduction.\nIntake history: now meeting structured meal plan, 2200 kcal/day, three meals plus three snacks.\nMeds: thiamine, multivitamin, phosphate supplement (discontinued).\nAllergies: none.\nPlan: continue meal plan; gradual weight restoration to BMI 19; outpatient dietetic and psychology follow-up; GP to monitor weight fortnightly and bloods monthly; readmit if rapid decline."
    },
    guidanceNote: "Make the ongoing monitoring schedule clear; the GP needs to know weight and biochemistry targets to manage relapse risk."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Bariatric pre-surgery liver-shrinking diet advice",
    prompt: "Using the case notes, write a letter to the patient. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "advice",
      recipient: "Mr Paul Hendricks, patient",
      taskInstruction: "Provide written dietary advice for the pre-operative liver-shrinking diet before bariatric surgery.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Paul Hendricks, 45, male.\nDiagnosis: severe obesity; listed for sleeve gastrectomy in 3 weeks.\nAnthropometry: weight 142 kg, height 1.78 m, BMI 44.8.\nComorbidities: type 2 diabetes, obstructive sleep apnoea, hypertension.\nBiochemistry: HbA1c 64 mmol/mol; liver enzymes mildly raised; fatty liver on imaging.\nIntake history: high intake of fried foods, sugary drinks, takeaways; large portions.\nMeds: metformin, gliclazide, ramipril.\nAllergies: none.\nDiscussed: 2-week low-calorie milk-based liver-shrinking diet; reduces liver size for safer surgery; 800-1000 kcal/day; meal replacements plus low-starch vegetables; stay well hydrated; monitor glucose as diabetes meds may need adjusting.\nPlan: dietitian phone check at 1 week; surgical pre-assessment."
    },
    guidanceNote: "Explain the purpose of the liver-shrinking diet in patient-friendly terms and flag the need to watch blood glucose while on it."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Community-acquired malnutrition referral from GP practice",
    prompt: "Using the case notes, write a letter to the community dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Rebecca Aldous, Community Dietitian, Primary Care Nutrition Team",
      taskInstruction: "Refer this elderly patient for community management of malnutrition identified at a routine review.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Walter Briggs, 79, male.\nDiagnosis: malnutrition; recent bereavement; social isolation.\nAnthropometry: weight 56 kg (was 64 kg six months ago), height 1.72 m, BMI 18.9; MUST score 2 (high risk).\nBiochemistry: albumin 34 g/L; otherwise unremarkable.\nIntake history: skipping meals; lives alone since wife's death; limited cooking ability; relies on tea and toast.\nMobility: independent but reduced energy.\nMeds: amlodipine; no appetite stimulants.\nAllergies: none.\nPlan: dietary fortification advice; consider oral nutritional supplements; meals-on-wheels referral; involve family; address social factors; reweigh monthly; aim to halt weight loss and restore intake."
    },
    guidanceNote: "Convey both the nutritional risk (MUST score, weight loss) and the social context, which is central to the management plan."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Type 1 diabetes carbohydrate counting referral for adolescent",
    prompt: "Using the case notes, write a letter to the paediatric diabetes dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "CORE",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Ms Olivia Trent, Paediatric Diabetes Dietitian, Children's Diabetes Service",
      taskInstruction: "Refer this adolescent for carbohydrate counting education to improve glycaemic control.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Miss Chloe Maddox, 14, female.\nDiagnosis: type 1 diabetes, diagnosed 3 years ago; on basal-bolus insulin.\nAnthropometry: weight 52 kg, height 1.61 m, BMI 20.1; growth appropriate.\nBiochemistry: HbA1c 79 mmol/mol (rising from 64); frequent post-meal hyperglycaemia.\nIntake history: irregular school meals; snacking; estimates carbs roughly; misses some mealtime insulin.\nMeds: insulin aspart and glargine.\nAllergies: none.\nSocial: managing injections independently; parents request support.\nPlan: structured carbohydrate counting education; insulin-to-carb ratio review with diabetes team; address missed doses; involve school; review HbA1c in 3 months; consider pump if control remains poor."
    },
    guidanceNote: "Foreground the rising HbA1c and inaccurate carb estimation; these are the reasons specialist education is needed now."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Oncology cachexia nutritional support transfer to palliative team",
    prompt: "Using the case notes, write a letter to the palliative care dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "STRETCH",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "transfer",
      recipient: "Ms Diane Foster, Palliative Care Dietitian, Community Hospice Service",
      taskInstruction: "Transfer this patient with cancer cachexia to the palliative team for comfort-focused nutritional support.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mr Raymond Clarke, 68, male.\nDiagnosis: metastatic pancreatic cancer; cancer cachexia; treatment now palliative.\nAnthropometry: weight 52 kg (was 70 kg over 5 months), height 1.75 m, BMI 17.0; severe muscle wasting.\nBiochemistry: albumin 26 g/L; CRP elevated.\nIntake history: early satiety; nausea; appetite minimal; small intake of soft foods.\nMeds: analgesia, antiemetics, pancreatic enzyme replacement.\nAllergies: none.\nGoals: comfort and quality of life; not aggressive weight gain.\nPlan: small appealing portions; food fortification per tolerance; manage nausea before meals; oral supplements if wanted; family education on realistic goals; avoid pressuring intake; review per patient wishes."
    },
    guidanceNote: "Frame goals around comfort and quality of life rather than weight gain; palliative care priorities differ from active treatment."
  },
  {
    subTest: "WRITING",
    taskType: "WRITING_LETTER",
    profession: "DIETETICS",
    title: "Dietetics — Weight management programme referral for metabolic syndrome",
    prompt: "Using the case notes, write a letter to the weight management dietitian. Write 180–200 words. Select only the information relevant to ongoing care.",
    difficulty: "FOUNDATION",
    topicTag: "referral",
    timeLimitSeconds: 2700,
    payload: {
      letterType: "referral",
      recipient: "Mr Joseph Lin, Weight Management Dietitian, Healthy Living Service",
      taskInstruction: "Refer this patient to the tier 2 weight management programme for lifestyle and dietary support.",
      wordMin: 180,
      wordMax: 200,
      caseNotes: "Patient: Mrs Sandra Whitfield, 52, female.\nDiagnosis: metabolic syndrome; central obesity; impaired fasting glucose.\nAnthropometry: weight 96 kg, height 1.63 m, BMI 36.1; waist 108 cm.\nBiochemistry: fasting glucose 6.4 mmol/L, triglycerides raised, HDL low, blood pressure 148/92.\nIntake history: frequent takeaways; sugary drinks; little physical activity; grazes in evenings.\nMeds: none currently.\nAllergies: none.\nMotivation: keen to make changes; concerned about diabetes risk.\nPlan: structured 12-week programme; dietary modification; portion control; increase activity; behaviour change support; aim 5-10% weight loss; monitor waist, weight and glucose; GP review in 3 months."
    },
    guidanceNote: "A straightforward referral; note the patient's motivation and diabetes risk as these support placement in the programme."
  },
];
