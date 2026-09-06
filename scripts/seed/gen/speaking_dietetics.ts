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
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-dysphagia-texture-modified-diet-advice-for-a-carer",
    "title": "Dietetics — Dysphagia texture-modified diet advice for a carer",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community clinic appointment with the daughter of an older patient, the patient not present.",
      "candidateRole": "You are the dietitian. A 79-year-old with advancing dementia has been placed on a texture-modified diet after a choking episode.",
      "patientRole": "The daughter and main carer, who cooks all her father's meals, was present at the choking episode, and has been serving him only soup since.",
      "patientConcern": "She is grieving the loss of normal mealtimes for her father and fears both causing him to choke and serving him food he will refuse.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what happened at the time of the choking episode and how it has affected her since.\n\nAsk what her father has been eating in the two weeks since, and how much of it he actually takes.\n\nAsk what he used to enjoy eating, since the plan has to be built around that rather than around a leaflet.\n\nAcknowledge how distressing the change is, and name the loss of ordinary mealtimes rather than moving straight to technique.\n\nExplain what the recommended texture level means in practical terms and why it reduces the choking risk.\n\nExplain how to prepare food at that texture without it becoming grey and unappetising: separate items, seasoning, and moulds.\n\nExplain the thickened fluids: how to make them, the common mistakes, and why the consistency matters.\n\nAdvise on positioning, pacing and supervision at meals, and on mouth care afterwards.\n\nExplain the signs of aspiration to watch for and what would mean seeking help.\n\nSignpost the practical support available, including recipes and the speech and language therapy review.\n\nAgree what she will try this week, and arrange the follow-up call."
    },
    "guidanceNote": "Acknowledge the emotional weight of the change before practical detail; give specific, appetising preparation ideas and confirm safety guidance is understood."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-faltering-growth-in-a-toddler-with-a-worried-parent",
    "title": "Dietetics — Faltering growth in a toddler with a worried parent",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Paediatric dietetics clinic in a children's outpatient department, the toddler playing on the floor.",
      "candidateRole": "You are the dietitian. An 18-month-old has dropped across two centile lines but is active, developing normally and clinically well.",
      "patientRole": "The parent of the toddler, who has been coaxing and bargaining at every meal, offers food constantly through the day, and feels judged by the health visitor.",
      "patientConcern": "The parent fears they are failing their child and being blamed, and needs reassurance as much as they need a feeding strategy.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what a typical day of eating looks like, from waking to bedtime, including drinks and snacks.\n\nAsk what mealtimes are actually like: how long they last, who is present, and what happens when food is refused.\n\nAsk what the parent has already tried and what they were told at the last appointment.\n\nAcknowledge how stressful this is and say plainly that the child's activity and development are reassuring.\n\nExplain what the centile chart shows and what it does not, without dismissing the change.\n\nExplain the food-first approach: energy-dense foods a small child will actually eat, and why volume is not the target.\n\nExplain the effect of grazing and of milk or juice between meals on appetite at the table.\n\nExplain responsive feeding: the parent decides what and when, the child decides how much.\n\nAdvise on reducing the pressure at mealtimes and why coaxing usually reduces intake rather than increasing it.\n\nAgree a simple plan with three or four specific changes, and a food diary for a few days.\n\nArrange follow-up with a weight check, and be clear about what would prompt earlier review."
    },
    "guidanceNote": "Lead with reassurance and avoid any tone of blame; combine energy-dense food advice with reducing mealtime pressure, and confirm follow-up."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-gestational-diabetes-diet-for-an-anxious-expectant-mother",
    "title": "Dietetics — Gestational diabetes diet for an anxious expectant mother",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Antenatal dietetics clinic, an urgent appointment two days after the diagnosis.",
      "candidateRole": "You are the dietitian. The patient was diagnosed with gestational diabetes at 28 weeks and has been given a glucose meter but no dietary advice.",
      "patientRole": "A 31-year-old at 28 weeks in her second pregnancy, tearful, who has eaten almost nothing since the diagnosis for fear of harming the baby.",
      "patientConcern": "She believes she has already damaged her baby and that the diagnosis means a frightening and highly restricted diet for the rest of the pregnancy.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what she has been told about the diagnosis and what she has done since.\n\nAsk what she has eaten in the past two days, and let the fact of not eating come out.\n\nAcknowledge the shock and address the guilt directly before giving any dietary advice.\n\nExplain what gestational diabetes is and why it happens in pregnancy, in plain terms.\n\nExplain what the risks actually are and over what timescale, so that the fear is proportionate rather than vague.\n\nExplain that carbohydrate is not being removed but spread and chosen differently, and why not eating is itself harmful.\n\nGive practical guidance: the plate model, the type and portion of carbohydrate, and the pattern of meals and snacks.\n\nExplain the bedtime snack and the reason for it, since morning readings often cause alarm.\n\nExplain how the monitoring readings will be used, and that a high reading is information rather than a failure.\n\nAgree a manageable first set of changes for this week, written down.\n\nArrange the follow-up, explain when medication would be considered, and give a contact number."
    },
    "guidanceNote": "Address the fear for the baby first; keep dietary advice concrete and achievable for the remaining pregnancy rather than overwhelming her at once."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-heart-healthy-eating-after-a-first-heart-attack",
    "title": "Dietetics — Heart-healthy eating after a first heart attack",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Cardiac rehabilitation clinic, a dietetic appointment six weeks after the event.",
      "candidateRole": "You are the dietitian. The patient had a myocardial infarction six weeks ago and has been told to change their diet without any specific guidance.",
      "patientRole": "A 58-year-old who cooks most evenings, eats out twice a week, and has since removed all fat and salt from the house and finds the food inedible.",
      "patientConcern": "The patient fears heart-healthy eating means permanent deprivation and bland meals, and will abandon it entirely if that is confirmed.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they usually cook and eat, including the meals out, before recommending anything.\n\nAsk what they have changed in the past six weeks and how it has gone.\n\nAcknowledge the effort already made, and address the fear that food is now going to be joyless.\n\nExplain the key principles in plain terms: the type of fat rather than all fat, salt, fibre and portion size.\n\nCorrect the assumption that all fat must be removed, and explain which fats matter and why.\n\nExplain the salt question practically: where it actually comes from in their diet, which is rarely the salt cellar.\n\nSuggest realistic swaps within the dishes they already cook, rather than replacing their cooking altogether.\n\nDiscuss eating out: what to look for on a menu and what makes little difference either way.\n\nExplain what the evidence supports overall, including the Mediterranean pattern, so the advice has a shape.\n\nAgree two or three priority changes rather than a full overhaul.\n\nArrange the review, and link the diet to the rest of the rehabilitation programme."
    },
    "guidanceNote": "Build on the patient's enjoyment of food rather than imposing restriction; prioritise a few high-impact changes instead of a total overhaul."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-high-cholesterol-patient-resistant-to-dietary-change",
    "title": "Dietetics — High-cholesterol patient resistant to dietary change",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Primary care dietetics clinic, a referral from the GP before medication is considered.",
      "candidateRole": "You are the dietitian. The patient has raised cholesterol and the GP has recommended a trial of dietary change first.",
      "patientRole": "A 52-year-old whose father and brother both take statins, who believes it is entirely genetic, and who would rather have the tablet than change anything.",
      "patientConcern": "The patient thinks dietary change is pointless given the family history and needs the scepticism engaged with honestly rather than overridden.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they eat on an ordinary day and at the weekend, without commenting as they go.\n\nAsk what they believe causes their cholesterol level and where that belief comes from.\n\nAsk what they think about medication and what they would prefer to happen today.\n\nAcknowledge that the family history is real and that genetics does contribute.\n\nExplain honestly how much diet typically changes the number, using a realistic figure rather than an inflated claim.\n\nExplain which dietary factors matter most: saturated fat, fibre and plant sterols, and how each works.\n\nAddress the scepticism directly, and say plainly that diet and medication are not mutually exclusive.\n\nExplain what else the cholesterol number sits alongside, including blood pressure, smoking and weight.\n\nOffer a defined trial with a repeat blood test, so the effort has a measurable endpoint.\n\nAgree one or two changes the patient is genuinely willing to try, chosen by them.\n\nExplain what else would be checked at the review, including weight and blood pressure.\n\nAgree the review date and be clear that medication remains on the table."
    },
    "guidanceNote": "Engage the patient's beliefs rather than arguing past them; agree a small, concrete trial change instead of demanding wholesale commitment up front."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-ibs-and-a-self-started-elimination-diet",
    "title": "Dietetics — IBS and a self-started elimination diet",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Gastroenterology dietetics outpatient clinic, a first appointment after GP referral.",
      "candidateRole": "You are the dietitian. The patient has confirmed irritable bowel syndrome and has independently excluded gluten, dairy and several vegetables with limited benefit.",
      "patientRole": "A 29-year-old whose diet has narrowed to about twelve foods over eight months, who has lost four kilograms, and who eats nothing outside the house.",
      "patientConcern": "The patient is frightened of triggering symptoms and has built a sense of safety around restriction, so will resist reintroducing anything.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask which foods have been removed, when each was removed, and what happened to the symptoms afterwards.\n\nAsk what a typical day of eating looks like now, and how meals away from home are managed.\n\nAsk what the symptoms are like currently compared with a year ago.\n\nAcknowledge that the restriction came from a reasonable attempt to control real symptoms.\n\nExplain what the current diet risks nutritionally, including the specific nutrients likely to be short.\n\nExplain why unstructured elimination often fails to identify triggers, and why symptoms can persist regardless.\n\nExplain the structured alternative: a supervised low-FODMAP restriction phase followed by systematic reintroduction.\n\nBe clear that reintroduction is planned and monitored, not a matter of simply eating everything again.\n\nExplain the other elements that affect symptoms: regular meals, fibre type, caffeine, alcohol and stress.\n\nAgree a first step, which may be adding one food back rather than starting the full programme.\n\nExplain what would mean stopping the plan and seeking a medical review instead.\n\nArrange close follow-up and explain what support is available between appointments."
    },
    "guidanceNote": "Validate the patient's symptom experience before challenging the self-restriction; frame a supervised staged plan as safer than open-ended elimination."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-newly-diagnosed-coeliac-disease-advice",
    "title": "Dietetics — Newly diagnosed coeliac disease advice",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Outpatient dietetics clinic at a general hospital, the first dietetic appointment after diagnosis.",
      "candidateRole": "You are the dietitian. The patient has biopsy-confirmed coeliac disease and has had no dietary advice so far.",
      "patientRole": "A 29-year-old who cooks for friends most weekends, eats out several times a week, works as a chef in a busy restaurant kitchen, and has had symptoms for two years.",
      "patientConcern": "The patient is privately worried that a gluten-free diet ends their social life and their job, and will only relax if that is addressed rather than the label reading.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they already understand about coeliac disease and about gluten.\n\nAsk what they eat on an ordinary day and what their work involves.\n\nAsk what worries them most about the diagnosis, and give room for the social and work answer.\n\nExplain what coeliac disease does to the bowel and why the diet must be strict and lifelong.\n\nExplain which everyday foods contain gluten, including the ones people do not expect.\n\nExplain cross-contamination in practical terms: the toaster, the chopping board, the pasta water, and the shared butter.\n\nAddress the kitchen at work specifically, since that is a daily exposure risk and a legal matter for the employer.\n\nExplain label reading, the crossed-grain symbol, and what gluten-free means legally.\n\nDiscuss eating out honestly: what is manageable, what to ask, and which situations are genuinely difficult.\n\nExplain the prescribable staples, the coeliac society, and the family screening question.\n\nExplain what improvement to expect and over what period, so the first few weeks are not judged too soon.\n\nAgree one or two manageable changes to start with, and arrange the follow-up and repeat bloods."
    },
    "guidanceNote": "Check understanding before launching into food lists, and draw out the social worry — telling them gluten-free dining is possible, with concrete tactics, matters more than reciting every banned grain."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-peanut-allergy-anxiety-and-dietary-over-restriction",
    "title": "Dietetics — Peanut allergy anxiety and dietary over-restriction",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Allergy clinic dietetics appointment, following an allergy team review.",
      "candidateRole": "You are the dietitian. The patient has a confirmed peanut allergy and has generalised the avoidance far beyond what is required.",
      "patientRole": "A 26-year-old who had an anaphylactic reaction two years ago, now avoids all nuts, most packaged foods and all eating out, and has lost six kilograms.",
      "patientConcern": "The patient is terrified of another reaction and treats every may contain label as an absolute ban, skipping meals whenever there is any doubt.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what happened at the time of the reaction and what has changed since.\n\nAsk what they currently avoid, and let the full extent of the list emerge.\n\nAsk what a typical day of eating looks like and how often meals are skipped.\n\nAcknowledge that the allergy is serious and that the original reaction justified real caution.\n\nExplain the allergy test results and what they do and do not say about other nuts.\n\nExplain how precautionary labelling works, what may contain actually means, and why it is not a legal guarantee either way.\n\nHelp them distinguish what genuinely needs avoiding from what has been added out of fear.\n\nExplain what the current diet is costing nutritionally and in weight, using their own figures.\n\nDiscuss eating out with a plan rather than as an all-or-nothing decision.\n\nCheck the adrenaline auto-injector, that it is carried and in date, and that they know when to use it.\n\nAgree a small, specific widening of the diet this week, and arrange follow-up with the allergy team."
    },
    "guidanceNote": "Never minimise the allergy; separate evidence-based avoidance from anxiety-driven restriction and give concrete label-reading guidance."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-reluctance-to-take-prescribed-oral-nutritional-supplements",
    "title": "Dietetics — Reluctance to take prescribed oral nutritional supplements",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community dietetics home visit, three weeks after discharge following pneumonia.",
      "candidateRole": "You are the dietitian. The patient has been prescribed oral nutritional supplements, is not taking them, and continues to lose weight.",
      "patientRole": "An 82-year-old living alone who has eight untouched bottles in the kitchen, finds them too sweet and filling, and eats two small meals a day.",
      "patientConcern": "The patient dislikes the drinks and resents feeling labelled as ill, and needs their preferences respected rather than the prescription repeated.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how they have been since coming home and what an ordinary day of eating looks like.\n\nAsk directly why the supplements are not being taken, and accept the answer without arguing.\n\nAsk what they do enjoy eating and what they used to cook.\n\nWeigh them and explain what the change since discharge means, in terms of strength and recovery rather than numbers alone.\n\nAcknowledge the dislike of the drinks and the feeling of being labelled, and take both seriously.\n\nExplain why extra nourishment matters specifically during recovery from a chest infection.\n\nOffer the practical alternatives: different flavours, savoury or juice-based versions, smaller amounts more often, or chilling them.\n\nExplain food fortification: full-fat milk, added butter, cheese, cream and milk powder in food they already eat.\n\nDiscuss the practical barriers: shopping, cooking, and whether meals-on-wheels or family help would work.\n\nAgree a plan the patient is genuinely willing to follow, even if it uses fewer supplements.\n\nArrange the next visit with a weight check and agree what would mean contacting you sooner."
    },
    "guidanceNote": "Explore the reasons for non-adherence before problem-solving; offer choices including food-first fortification rather than insisting on the prescribed drinks."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-renal-diet-phosphate-concern-in-ckd",
    "title": "Dietetics — Renal diet & phosphate concern in CKD",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Renal dietetics clinic at a kidney care unit, a routine review after recent blood tests.",
      "candidateRole": "You are the dietitian. The patient has stage 4 chronic kidney disease and a raised serum phosphate on the latest bloods.",
      "patientRole": "A 61-year-old not yet on dialysis who feels entirely well, drinks two litres of cola daily, eats processed meats, and takes the binders only when he remembers.",
      "patientConcern": "The patient feels completely well, believes the diet change is pointless and restrictive, and fears losing every food he enjoys.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what he eats and drinks on an ordinary day, with particular attention to dairy, processed meat, cola and nuts.\n\nAsk what he understands about the blood results and what he has been told before.\n\nAsk how he takes the phosphate binders and when, since timing is usually the problem rather than the dose.\n\nExplain what phosphate is and where it comes from in the diet.\n\nExplain why controlling it matters, in terms of bones and blood vessels over years, rather than symptoms today.\n\nAddress directly the belief that feeling well means nothing is wrong.\n\nExplain the difference between natural phosphate in food and the additives in processed products, which are absorbed far more.\n\nShow him how to spot phosphate additives on a label, using something he actually buys.\n\nSuggest swaps that keep the foods he likes where possible, rather than a list of prohibitions.\n\nExplain how and when the binders must be taken with meals to work at all.\n\nAgree three realistic changes, and arrange the follow-up with repeat bloods."
    },
    "guidanceNote": "Acknowledge that feeling well makes the advice hard to accept, and frame phosphate control as protecting bones and heart for the future — agree just one or two swaps rather than overwhelming the patient with a long forbidden list."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-sensitive-nutrition-support-in-suspected-disordered-eating",
    "title": "Dietetics — Sensitive nutrition support in suspected disordered eating",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General dietetics clinic, a first appointment following referral for unexplained low weight.",
      "candidateRole": "You are the dietitian. During the consultation it becomes clear the patient counts calories rigidly, fears weight gain and exercises heavily; no diagnosis has been made.",
      "patientRole": "A 22-year-old referred by the GP for low weight, who insists they eat enough and are naturally slim, and who becomes uneasy when food rules are mentioned.",
      "patientConcern": "The patient is anxious about losing control over food and being made to gain weight, and may withdraw entirely if they feel judged or pushed.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Begin by asking what they were told about why they were referred and what they think about it.\n\nBuild rapport before asking anything about food, and let them set some of the direction.\n\nAsk gently about a usual day, without asking for amounts or numbers.\n\nAsk how they are feeling generally: energy, sleep, concentration, mood and how they are managing at work or study.\n\nListen for what is not said, and do not challenge or correct the account you are given.\n\nAvoid discussion of weight targets, calories and figures altogether, and say why you are not focusing on them.\n\nExpress your concern once, plainly and with care, in terms of health rather than appearance.\n\nAsk what they would find helpful, and let them have some control over what happens next.\n\nExplain what the wider team can offer and why more than one professional is usually involved.\n\nSuggest involving that team gently, framing it as support rather than escalation.\n\nAgree a next appointment, keep the door clearly open, and make sure they leave with a contact."
    },
    "guidanceNote": "Prioritise trust and a non-judgemental tone over dietary instruction; avoid weight and calorie numbers and move carefully toward multidisciplinary support."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-setting-up-home-enteral-tube-feeding-for-a-carer",
    "title": "Dietetics — Setting up home enteral tube feeding for a carer",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Home enteral nutrition clinic on the ward, two days before discharge.",
      "candidateRole": "You are the dietitian preparing the spouse of a stroke patient for home feeding via a gastrostomy tube.",
      "patientRole": "The 68-year-old spouse and main carer of a 70-year-old with post-stroke dysphagia, who has watched the nurses do the feed twice and has not yet touched the pump.",
      "patientConcern": "The carer is frightened of causing harm and of being left alone with it, and will not say so unless invited to.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have seen and done so far, and what they feel able to manage.\n\nAsk what worries them most about going home, and give room for the fear of causing harm.\n\nAcknowledge that this is a great deal to take on in two days.\n\nExplain the feeding regimen: the feed, the rate, the times, and how it fits into their day.\n\nExplain the water flushes: how much, when, and why they matter as much as the feed.\n\nExplain the medicines through the tube, including flushing between each and never mixing them.\n\nWork through the pump itself at a manageable pace, and have them set it up rather than watch you.\n\nExplain what to do about a blockage, and about the tube coming out, before either happens.\n\nExplain the stoma site care, hygiene, and the signs of infection.\n\nConfirm the contact numbers: the community team, the feed company, and who to call at night.\n\nExplain how the feed and equipment are delivered and reordered, so supplies do not run out.\n\nAgree what they will practise before discharge, and arrange the first home visit."
    },
    "guidanceNote": "Pace the information and check understanding in steps; emphasise the support network and safety-net contacts so the carer does not feel abandoned."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-transition-to-a-balanced-plant-based-diet-without-deficiency",
    "title": "Dietetics — Transition to a balanced plant-based diet without deficiency",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General nutrition advice clinic in a community health centre, a self-referred appointment booked online.",
      "candidateRole": "You are the dietitian. The patient adopted a fully plant-based diet four months ago for ethical reasons and has been feeling increasingly tired.",
      "patientRole": "A 24-year-old student who eats mainly pasta, salad and vegetables, cooks in a shared kitchen, takes no supplements, and fully expects to be told to eat meat again.",
      "patientConcern": "The patient wants help to make the plant-based diet work rather than pressure to abandon it, and will disengage if the advice sounds like disapproval.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "State clearly at the outset that you are not going to ask them to stop, so the conversation can begin properly.\n\nAsk what they eat on an ordinary day, and ask about supplements separately.\n\nAsk about the tiredness: when it started, how it presents, and whether anything else has changed.\n\nAsk about other symptoms and whether blood tests have been done.\n\nExplain which nutrients need active attention on a plant-based diet, and why each one matters.\n\nExplain protein specifically: the sources, the quantity, and how to spread it across the day.\n\nExplain iron: the plant sources, the effect of tea and coffee, and how vitamin C changes absorption.\n\nExplain vitamin B12 plainly, that it cannot be obtained reliably from plants, and that supplementation is not optional.\n\nDiscuss calcium, iodine, omega-3 and total energy, since low intake alone can explain fatigue.\n\nSuggest specific foods and a supplement plan they can act on this week.\n\nExplain what the blood tests would look for and why the results would change the advice.\n\nRecommend blood tests through the GP, and arrange the review."
    },
    "guidanceNote": "Affirm the patient's dietary choice and work within it; focus on positive, practical ways to cover key nutrients rather than warning them off."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-type-2-diabetes-carbohydrate-management-for-a-shift-worker",
    "title": "Dietetics — Type 2 diabetes carbohydrate management for a shift worker",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Outpatient diabetes clinic in a community health centre, a review after a rising HbA1c.",
      "candidateRole": "You are the dietitian. The patient's HbA1c has risen from 58 to 71 mmol/mol and their eating is shaped entirely by a rotating shift pattern.",
      "patientRole": "A 48-year-old factory worker rotating between days and nights, eating from vending machines and the late-night canteen, who has been given advice before that assumed three regular meals.",
      "patientConcern": "The patient believes eating properly is incompatible with night shifts and fears being told to do something unworkable, so has stopped listening.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the shift pattern: how it rotates, the hours, and when the breaks fall.\n\nAsk what they eat on a day shift and on a night shift separately, since they are two different diets.\n\nAsk what is actually available at work at three in the morning.\n\nAcknowledge that previous advice assuming three regular meals was not usable, and say so plainly.\n\nExplain how carbohydrate affects blood glucose, and why the spacing matters as much as the amount.\n\nExplain what happens to glucose control on night shifts, so the difficulty is recognised rather than dismissed.\n\nWork through the vending machine and canteen options with them and identify the better choices that actually exist.\n\nDiscuss what could be brought from home and kept in a locker, given the shift length.\n\nDiscuss drinks, since these often carry more carbohydrate than the food does.\n\nAgree two or three changes that fit the night shift specifically, chosen by them.\n\nArrange the review with a repeat HbA1c and agree what would make the plan fail."
    },
    "guidanceNote": "Acknowledge the shift-work reality before giving advice; offer adaptable swaps the patient chooses rather than a rigid meal schedule."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DIETETICS",
    "slug": "spk-dietetics-weight-management-after-a-plateau-in-a-motivated-patient",
    "title": "Dietetics — Weight management after a plateau in a motivated patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Weight management clinic, a follow-up appointment after four months on the programme.",
      "candidateRole": "You are the dietitian. The patient lost eleven kilograms over four months and the weight has not changed in the last six weeks.",
      "patientRole": "A 35-year-old who has kept to the plan, is exercising four times a week, is discouraged, and has been reading about a very low-calorie diet found online.",
      "patientConcern": "The patient feels the effort has stopped working and is tempted by an extreme online plan, and needs a credible reason to stay with a sustainable approach.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Acknowledge what has already been achieved and be specific about the eleven kilograms.\n\nAsk how the past six weeks have been and what they have been doing differently, if anything.\n\nAsk what a typical day of eating and activity looks like now, in detail.\n\nAsk what they have read about the online diet and what appeals about it.\n\nExplain why weight loss slows, in terms of a smaller body needing less energy, so the plateau has a reason.\n\nExplain what else may be happening, including changes in body composition that the scales do not show.\n\nDiscuss other measures of progress: waist, clothes, fitness, blood pressure and blood results.\n\nAddress the crash diet honestly: what it does, what happens afterwards, and why it usually costs more than it gains.\n\nIdentify one or two specific adjustments to the current plan, based on what they have described.\n\nAgree a realistic expectation for the next three months rather than the next three weeks.\n\nAgree the review date and how progress will be measured between now and then."
    },
    "guidanceNote": "Normalise the plateau and protect the patient's motivation; redirect away from the crash diet by explaining risks calmly rather than lecturing."
  }
];
