import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — Type 2 diabetes carbohydrate management for a shift worker",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "An outpatient diabetes clinic in a community health centre.",
      candidateRole: "You are the dietitian seeing a 48-year-old factory worker whose recent HbA1c has risen. They rotate between day and night shifts and tend to eat from vending machines and a late-night canteen.",
      patientRole: "The patient is a rotating-shift factory worker who feels their irregular hours make any diet plan impossible and is frustrated that previous advice assumed three regular meals a day.",
      candidateCard: "Find out how shift patterns affect the patient's eating and snacking; explain in plain terms how carbohydrate spacing and portion choices affect blood glucose; work with the patient to agree two or three realistic changes that fit night shifts rather than prescribing a fixed meal timetable.",
      patientConcern: "They are worried that 'eating properly' is incompatible with night shifts and fear being told to do something unworkable, so they need flexible, shift-aware options and to feel their constraints are taken seriously.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Acknowledge the shift-work reality before giving advice; offer adaptable swaps the patient chooses rather than a rigid meal schedule."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — Weight management after a plateau in a motivated patient",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A weight-management clinic follow-up appointment.",
      candidateRole: "You are the dietitian reviewing a 35-year-old who has lost weight steadily for four months but whose weight has not changed in the last six weeks despite continuing their efforts.",
      patientRole: "The patient is discouraged by the plateau and is starting to wonder whether to give up or try a very restrictive crash diet they read about online.",
      candidateCard: "Reassure the patient that a plateau is a normal stage; explore their current intake and activity briefly; explain in simple terms why progress slows; agree one or two adjustments and discourage the crash diet without dismissing their frustration.",
      patientConcern: "They feel their effort is no longer 'working' and are tempted by an extreme online diet; they need encouragement and a credible reason to stay with a sustainable approach.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Normalise the plateau and protect the patient's motivation; redirect away from the crash diet by explaining risks calmly rather than lecturing."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — Faltering growth in a toddler with a worried parent",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A paediatric dietetics clinic in a children's outpatient department.",
      candidateRole: "You are the dietitian seeing the parent of an 18-month-old whose weight has dropped across two centile lines. The child is otherwise active and meeting milestones, but mealtimes have become tense.",
      patientRole: "The patient is the parent of the toddler. They feel judged about their child's weight, are anxious that they are doing something wrong, and admit mealtimes now involve a lot of coaxing and stress.",
      candidateCard: "Take a brief feeding and mealtime history; explain energy-dense food-first strategies for a small child in reassuring terms; advise on reducing mealtime pressure and responsive feeding; agree a simple plan and arrange follow-up without alarming the parent.",
      patientConcern: "The parent fears they are failing their child and being blamed; they need practical food-first strategies and reassurance that calmer, pressure-free mealtimes are part of the solution.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Lead with reassurance and avoid any tone of blame; combine energy-dense food advice with reducing mealtime pressure, and confirm follow-up."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — IBS and a self-started elimination diet",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A gastroenterology dietetics outpatient clinic.",
      candidateRole: "You are the dietitian seeing a 29-year-old with confirmed irritable bowel syndrome who has already cut out gluten, dairy and several vegetables on their own, with limited improvement and a narrowing diet.",
      patientRole: "The patient is convinced multiple foods are 'toxic' for them and is reluctant to reintroduce anything, fearing symptoms will return, even though their diet is becoming very restricted.",
      candidateCard: "Explore which foods have been removed and the effect on symptoms and nutrition; explain the principle of a structured, supervised approach such as a staged low-FODMAP plan with reintroduction; address the risks of an over-restricted diet; agree a first step toward a more guided plan.",
      patientConcern: "They are frightened of triggering symptoms and have built a sense of safety around restriction; they need a credible structured alternative and reassurance that reintroduction is done carefully, not recklessly.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Validate the patient's symptom experience before challenging the self-restriction; frame a supervised staged plan as safer than open-ended elimination."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — Peanut allergy anxiety and dietary over-restriction",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "An allergy clinic dietetics appointment.",
      candidateRole: "You are the dietitian seeing a 26-year-old with a confirmed peanut allergy who, out of fear, now avoids all nuts, many packaged foods and eating out entirely, and has lost weight and social confidence.",
      patientRole: "The patient is highly anxious after a past reaction and avoids far more than peanuts, reading 'may contain' as an absolute ban and skipping meals when unsure.",
      candidateCard: "Acknowledge the seriousness of the allergy and past reaction; clarify what genuinely needs avoiding versus over-cautious avoidance; explain how to read labels and interpret precautionary statements proportionately; support a more varied, nutritionally adequate diet while keeping the patient safe.",
      patientConcern: "They are terrified of another reaction and have generalised the fear far beyond peanuts; they need their allergy taken seriously while being helped to safely widen an unnecessarily narrow diet.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Never minimise the allergy; separate evidence-based avoidance from anxiety-driven restriction and give concrete label-reading guidance."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — Setting up home enteral tube feeding for a carer",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A home enteral nutrition clinic before discharge.",
      candidateRole: "You are the dietitian preparing the spouse of a 70-year-old patient with swallowing difficulty after a stroke for home feeding via a PEG tube. The patient will be discharged in two days.",
      patientRole: "The patient is the spouse and main carer, who feels overwhelmed by the idea of managing the feed, pump and tube at home and is afraid of making a mistake that harms their partner.",
      candidateCard: "Explain the feeding regimen and how the feed and flushes fit into the day; address practical worries about the pump, blockages and hygiene at a manageable pace; check understanding and confirm who to contact with problems; agree what the carer will practise before discharge.",
      patientConcern: "The carer is frightened of causing harm and being left to cope alone; they need clear, paced practical instruction and reassurance that support and contact numbers are in place.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Pace the information and check understanding in steps; emphasise the support network and safety-net contacts so the carer does not feel abandoned."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — Heart-healthy eating after a first heart attack",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A cardiac rehabilitation clinic.",
      candidateRole: "You are the dietitian seeing a 58-year-old who had a heart attack six weeks ago and has been told to 'change their diet' but has received little specific guidance. They enjoy cooking and eat out often.",
      patientRole: "The patient is motivated after the scare but confused by conflicting media advice and worried that heart-healthy eating means bland, joyless food and giving up everything they enjoy.",
      candidateCard: "Explore the patient's usual diet and cooking habits; explain the key heart-healthy principles such as fats, salt and fibre in plain language; suggest realistic swaps that keep food enjoyable; agree a few priority changes and address the fear of a restrictive, tasteless diet.",
      patientConcern: "They fear heart-healthy eating means permanent deprivation and bland meals; they need to see it can be flavourful and sustainable so they actually keep it up.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Build on the patient's enjoyment of food rather than imposing restriction; prioritise a few high-impact changes instead of a total overhaul."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — Sensitive nutrition support in suspected disordered eating",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A general dietetics clinic, with the patient referred for low body weight.",
      candidateRole: "You are the dietitian seeing a 22-year-old referred for unexplained low weight. During the conversation it becomes clear they count calories rigidly, fear weight gain and exercise heavily, though they have not been given any formal diagnosis.",
      patientRole: "The patient insists they 'eat enough' and are just naturally slim, is uneasy talking about weight and food rules, and may become defensive if they feel judged or pushed.",
      candidateCard: "Build rapport and explore eating patterns gently without confrontation; avoid focusing on numbers or weight targets; express concern in a caring, non-judgemental way; explain the value of further support and, with sensitivity, suggest involving the wider team rather than pressing for immediate dietary change.",
      patientConcern: "They are anxious about losing control over food and being made to gain weight, and may withdraw if confronted; they need to feel safe, unjudged, and gently guided toward appropriate support.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Prioritise trust and a non-judgemental tone over dietary instruction; avoid weight and calorie numbers and move carefully toward multidisciplinary support."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — Reluctance to take prescribed oral nutritional supplements",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A community dietetics home visit.",
      candidateRole: "You are the dietitian visiting an 82-year-old recovering from pneumonia who has been prescribed oral nutritional supplement drinks but is leaving most of them untouched and continuing to lose weight.",
      patientRole: "The patient finds the supplement drinks too sweet and filling, feels they are 'for sick people', and would rather just eat normal food, but has a poor appetite and small portions.",
      candidateCard: "Find out why the supplements are not being taken; acknowledge the patient's preferences; explain why extra nourishment matters during recovery; offer practical options such as flavour changes, smaller amounts, food-based fortification or different timing; agree a plan the patient is willing to follow.",
      patientConcern: "They dislike the drinks and resent feeling labelled as ill; they need their preferences respected and realistic alternatives so that getting enough nourishment feels acceptable.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Explore the reasons for non-adherence before problem-solving; offer choices including food-first fortification rather than insisting on the prescribed drinks."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — Gestational diabetes diet for an anxious expectant mother",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "An antenatal dietetics clinic.",
      candidateRole: "You are the dietitian seeing a 31-year-old at 28 weeks pregnant who has just been diagnosed with gestational diabetes and is frightened about the effect on her baby.",
      patientRole: "The patient is shocked by the diagnosis, worried she has harmed her baby, and confused about what she can and cannot eat for the rest of the pregnancy.",
      candidateCard: "Acknowledge the patient's worry and explain the condition reassuringly; explain how balanced carbohydrate choices and regular meals help blood glucose; outline practical food choices and the role of monitoring; agree a manageable first set of changes and confirm follow-up.",
      patientConcern: "She fears she has already damaged her baby and that the diagnosis means a frightening, highly restricted diet; she needs reassurance plus clear, doable dietary steps for the remaining weeks.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Address the fear for the baby first; keep dietary advice concrete and achievable for the remaining pregnancy rather than overwhelming her at once."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — Transition to a balanced plant-based diet without deficiency",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A general nutrition advice clinic.",
      candidateRole: "You are the dietitian seeing a 24-year-old who has recently switched to a fully plant-based diet for ethical reasons but has been feeling tired and is unsure whether they are eating enough of the right things.",
      patientRole: "The patient is committed to their plant-based choice and does not want to be talked out of it, but is worried their tiredness means the diet is unhealthy.",
      candidateCard: "Respect the patient's decision; explore their current intake briefly; explain which nutrients need attention on a plant-based diet, such as protein sources, iron, B12 and energy balance; suggest practical food choices and supplementation where appropriate; agree simple changes to address the tiredness.",
      patientConcern: "They want support to make the plant-based diet work well, not pressure to abandon it; they need practical guidance on covering key nutrients so they feel better.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Affirm the patient's dietary choice and work within it; focus on positive, practical ways to cover key nutrients rather than warning them off."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — Dysphagia texture-modified diet advice for a carer",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A community clinic appointment with the carer of an older patient.",
      candidateRole: "You are the dietitian seeing the daughter of a 79-year-old with advancing dementia and swallowing difficulties who has been advised to follow a texture-modified diet after a choking episode.",
      patientRole: "The patient is the daughter and main carer, who is upset that her father can no longer eat his favourite foods normally and is unsure how to prepare safe meals without making them unappetising.",
      candidateCard: "Acknowledge how distressing the change is; explain why modified textures reduce the choking risk; give practical guidance on preparing safe, appealing meals and safe drinks; check understanding and signpost further support; agree what the carer will try and confirm follow-up.",
      patientConcern: "She is grieving the loss of normal mealtimes for her father and fears either causing him to choke or serving him unappetising food; she needs both emotional acknowledgement and concrete preparation advice.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Acknowledge the emotional weight of the change before practical detail; give specific, appetising preparation ideas and confirm safety guidance is understood."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DIETETICS",
    title: "Dietetics — High-cholesterol patient resistant to dietary change",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A primary care dietetics clinic.",
      candidateRole: "You are the dietitian seeing a 52-year-old with raised cholesterol whose GP has recommended dietary changes before considering medication. The patient is sceptical that food makes much difference and reluctant to change habits.",
      patientRole: "The patient believes high cholesterol 'runs in the family' and is mostly down to genes, doubts that changing their diet will help much, and would rather just take a tablet.",
      candidateCard: "Explore the patient's current eating and their beliefs about cholesterol; explain in plain terms how dietary fats and fibre can influence cholesterol alongside any other factors; respond to their scepticism without dismissing it; agree one or two changes the patient is willing to trial before review.",
      patientConcern: "They feel dietary change is pointless given a family history and would prefer medication; they need their scepticism engaged with honestly and a low-effort first step that feels worth trying.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Engage the patient's beliefs rather than arguing past them; agree a small, concrete trial change instead of demanding wholesale commitment up front."
  }
];
