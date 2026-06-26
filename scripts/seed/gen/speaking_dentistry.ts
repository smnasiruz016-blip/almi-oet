import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Patient worried about the cost of a crown",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a private dental surgery",
      candidateRole:
        "You are the dentist. A patient has a heavily filled molar that has cracked, and you have recommended a crown to protect it.",
      patientRole:
        "The patient is a 44-year-old self-employed plumber who has just been told the crown will not be fully covered by their insurance.",
      candidateCard:
        "Explain clearly why a crown is the recommended option rather than another large filling. Acknowledge the cost concern, outline the realistic alternatives and their trade-offs, and agree a sensible next step without pressuring the patient.",
      patientConcern:
        "Hidden core concern: the patient fears being talked into the most expensive option and wants honest reassurance that the crown is genuinely necessary, not upselling.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Name the cost openly before the patient has to raise it again; honest framing of alternatives builds more trust than a hard sell.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Patient who panics at the sound of the drill",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a community dental clinic",
      candidateRole:
        "You are the dentist. A patient needs a moderate cavity filled but becomes visibly distressed as soon as equipment is switched on.",
      patientRole:
        "The patient is a 29-year-old who had a frightening dental experience as a child and now avoids treatment.",
      candidateCard:
        "Acknowledge the patient's fear without dismissing it, explain the practical steps you can take to make the appointment manageable, and agree a signal system so they feel in control during treatment.",
      patientConcern:
        "Hidden core concern: the patient is afraid of being trapped and unable to make you stop once treatment begins.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Offering a concrete stop signal addresses the real fear of losing control far better than general reassurance.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Patient with bleeding gums dismissing gum disease",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "a dental surgery",
      candidateRole:
        "You are the dentist. During a check-up you have found early gum disease with bleeding and inflammation along the gum line.",
      patientRole:
        "The patient is a 36-year-old who thinks bleeding when brushing is normal and not worth worrying about.",
      candidateCard:
        "Explain in plain terms what the bleeding indicates, why it matters if left untreated, and what daily changes and follow-up will help. Keep the patient engaged rather than lecturing.",
      patientConcern:
        "Hidden core concern: the patient assumes gum disease only affects people with poor hygiene and is mildly embarrassed to be told otherwise.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Frame gum disease as common and reversible at this stage; reducing shame makes the patient more likely to act on your advice.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Parent of a toddler with multiple early cavities",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a children's dental clinic",
      candidateRole:
        "You are the dentist. A three-year-old has several cavities, partly linked to a bedtime bottle of sweetened milk.",
      patientRole:
        "The parent is anxious and feels they have already done their best and may be judged as a bad parent.",
      candidateCard:
        "Explain what you have found and the likely contributing factors without blaming the parent. Agree a few practical, realistic changes and outline what treatment the child will need.",
      patientConcern:
        "Hidden core concern: the parent is frightened of being judged and may shut down if they feel accused.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Separate the cause from blame; parents act on advice when they feel supported rather than criticised.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Patient choosing between root canal and extraction",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "a dental surgery",
      candidateRole:
        "You are the dentist. A patient has a badly infected back tooth that could be saved with root canal treatment or removed by extraction.",
      patientRole:
        "The patient just wants the pain gone quickly and is leaning towards extraction because it sounds simpler and cheaper.",
      candidateCard:
        "Compare the two options fairly, including longer-term consequences of losing the tooth. Respect the patient's right to choose while making sure the decision is properly informed.",
      patientConcern:
        "Hidden core concern: the patient has not considered the long-term cost and gap-management implications of extraction and may regret a rushed decision.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Make the long-term consequences of extraction concrete; an informed patient may still choose it, but should not be surprised later.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Patient expecting Hollywood-white veneers",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "a cosmetic dental practice",
      candidateRole:
        "You are the dentist. A patient wants very bright, uniform veneers based on photos they have brought in.",
      patientRole:
        "The patient is a 27-year-old preparing for their wedding who has fixed ideas about the exact shade and shape they want.",
      candidateCard:
        "Discuss what is realistically achievable for their teeth and face, explain the irreversible nature of veneers, and manage expectations honestly while keeping the conversation positive.",
      patientConcern:
        "Hidden core concern: the patient may be disappointed if the result looks natural rather than dramatically artificial, and has not grasped that veneers are permanent.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Be candid about irreversibility and a natural-looking result; managing expectations now prevents dissatisfaction after an irreversible procedure.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Patient with a tooth knocked out in a fall",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a dental surgery seeing an emergency walk-in",
      candidateRole:
        "You are the dentist. A patient has arrived shortly after a front tooth was knocked out in a fall, bringing the tooth with them.",
      patientRole:
        "The patient is shaken, in pain, and worried about how they will look if the tooth cannot be saved.",
      candidateCard:
        "Calm the patient, explain what you will do now to try to save or replace the tooth, and set out the immediate plan and what to expect over the coming days.",
      patientConcern:
        "Hidden core concern: the patient is most distressed about their appearance and needs to know whether the gap will be visible.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Address the appearance worry directly and early; a distressed patient absorbs the clinical plan better once their main fear is named.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Patient whose new denture keeps rubbing",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "a dental surgery",
      candidateRole:
        "You are the dentist. A patient has returned because their recently fitted lower denture is rubbing and causing a sore spot.",
      patientRole:
        "The patient is a 68-year-old who is frustrated, finding it hard to eat, and wondering if the denture was made wrong.",
      candidateCard:
        "Acknowledge the discomfort, explain why some adjustment is normal for a new denture, describe what you will do today, and set realistic expectations for settling in.",
      patientConcern:
        "Hidden core concern: the patient fears they have wasted their money on a denture they will never be able to wear comfortably.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Reassure that adjustment appointments are a normal part of the process, not a sign of a faulty denture.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Smoker reluctant to act on a suspicious mouth patch",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "a dental surgery",
      candidateRole:
        "You are the dentist. During an examination you have noticed a persistent white patch on the side of the tongue in a long-term smoker.",
      patientRole:
        "The patient is a 55-year-old heavy smoker who feels fine and is reluctant to be referred for further checks.",
      candidateCard:
        "Explain why the patch needs to be looked at by a specialist without causing unnecessary alarm. Discuss smoking honestly and agree a clear referral plan the patient will follow through on.",
      patientConcern:
        "Hidden core concern: the patient is frightened of a cancer diagnosis and may avoid the referral to avoid bad news.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Balance honesty with calm; most such patches are not cancer, but the referral should be framed as a sensible precaution the patient agrees to.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Teenager refusing to wear their orthodontic retainer",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "an orthodontic clinic",
      candidateRole:
        "You are the dentist. A teenager finished brace treatment recently but has stopped wearing their retainer, and their teeth are beginning to shift.",
      patientRole:
        "The patient is a 16-year-old who finds the retainer uncomfortable and embarrassing and does not see the point now the braces are off.",
      candidateCard:
        "Engage the teenager respectfully, explain why the teeth move back without a retainer, and agree a realistic plan they are willing to stick to.",
      patientConcern:
        "Hidden core concern: the patient resents being told what to do and will tune out if treated like a child.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Give the teenager ownership of the plan; involving them in the solution works better than warnings about consequences.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Patient grinding teeth blaming work stress",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a dental surgery",
      candidateRole:
        "You are the dentist. A patient has worn, flattened teeth and reports jaw soreness and morning headaches consistent with night-time grinding.",
      patientRole:
        "The patient is a 41-year-old in a high-pressure job who waves off the problem as just stress that will pass.",
      candidateCard:
        "Explain the link between grinding and the damage you can see, discuss protective options such as a night guard, and encourage the patient to take the longer-term damage seriously.",
      patientConcern:
        "Hidden core concern: the patient does not connect their jaw pain and worn teeth with grinding and underestimates the cumulative damage.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Show the patient the visible wear as evidence; concrete signs of damage make an abstract habit feel real.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Pregnant patient afraid of having a filling",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "a dental surgery",
      candidateRole:
        "You are the dentist. A patient in the second trimester of pregnancy needs a routine filling but is worried treatment could harm the baby.",
      patientRole:
        "The patient is hesitant about local anaesthetic and X-rays and is inclined to delay all treatment until after the birth.",
      candidateCard:
        "Reassure the patient with clear, honest information about what is safe during pregnancy, explain why delaying may not be wise, and agree a comfortable plan.",
      patientConcern:
        "Hidden core concern: the patient believes any dental treatment during pregnancy is risky and needs evidence-based reassurance to proceed.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Be specific about what is safe and why; vague reassurance leaves an anxious patient still inclined to postpone.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Patient with sensitive teeth using a home whitening kit",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a dental surgery",
      candidateRole:
        "You are the dentist. A patient has developed marked tooth sensitivity after using a strong whitening kit bought online.",
      patientRole:
        "The patient is keen to keep whitening for an upcoming event and is reluctant to stop despite the discomfort.",
      candidateCard:
        "Explain what is likely causing the sensitivity, advise on safe use of whitening products, and offer a realistic alternative that meets the patient's goal without harming their teeth.",
      patientConcern:
        "Hidden core concern: the patient values the cosmetic result over their comfort and may keep using the kit unless offered a workable alternative.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Offer a safe route to the result they want rather than a flat ban; patients comply more readily when their goal is respected.",
  },
];
