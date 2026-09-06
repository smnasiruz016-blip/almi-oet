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
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-anxious-patient-facing-a-first-extraction",
    "title": "Dentistry — Anxious patient facing a first extraction",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a general dental surgery",
      "patientRole": "The patient is a 34-year-old who has never had a tooth out, dreads the needle, and is worried about feeling everything and being off work the next day.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out what specifically worries the patient; reassure about local anaesthetic and that they should feel pressure but not pain; explain the brief procedure and aftercare (bite on gauze, avoid rinsing/smoking, painkillers, possible mild swelling); agree on proceeding today or arranging a follow-up if not ready.",
      "candidateRole": "You are the dentist. A patient needs a non-restorable upper molar extracted today and is visibly anxious. Acknowledge the anxiety, explain what the procedure involves, address pain and recovery concerns, and reach agreement on going ahead.",
      "patientConcern": "The patient's real fear is not the tooth but a childhood memory of a painful dental experience, and they secretly worry the anaesthetic 'won't work' on them — they need this named and reassured, not just technical detail."
    },
    "guidanceNote": "Slow down and check feelings before facts — naming the fear ('many people feel nervous before a first extraction') earns the trust that lets your clinical explanation actually land. Let the patient set the pace and confirm consent rather than rushing to the chair."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-parent-declining-fluoride-for-a-child",
    "title": "Dentistry — Parent declining fluoride for a child",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a community dental clinic",
      "patientRole": "The parent is cautious, has read online that fluoride is 'harmful', and prefers 'natural' approaches, but does want to stop the decay getting worse.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Find out what the parent has read and what worries them; explain how fluoride varnish works and that the small applied dose is safe and effective; acknowledge their wish to limit sugar naturally; discuss diet, snacking frequency and brushing; agree a plan the parent is comfortable with, even if that means revisiting varnish next visit.",
      "candidateRole": "You are the dentist. A parent has brought their 6-year-old, who has early decay in two molars. You want to apply fluoride varnish and discuss diet, but the parent is hesitant about fluoride. Explore their concerns, give balanced information, and agree a prevention plan.",
      "patientConcern": "The parent is not truly anti-science but feels judged as a 'bad parent' for the decay and fears being lectured — they need respect and partnership before they will accept the varnish."
    },
    "guidanceNote": "Resist correcting the parent head-on; ask what they've read, validate the underlying goal (a healthy child, less sugar), and offer fluoride as one option within a shared plan. Agreeing to revisit varnish next visit can be a successful patient-centred outcome — pushing for immediate consent is not the goal."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-parent-of-a-toddler-with-multiple-early-cavities",
    "title": "Dentistry — Parent of a toddler with multiple early cavities",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a children's dental clinic",
      "patientRole": "The parent is anxious and feels they have already done their best and may be judged as a bad parent.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain what you have found and the likely contributing factors without blaming the parent. Agree a few practical, realistic changes and outline what treatment the child will need.",
      "candidateRole": "You are the dentist. A three-year-old has several cavities, partly linked to a bedtime bottle of sweetened milk.",
      "patientConcern": "Hidden core concern: the parent is frightened of being judged and may shut down if they feel accused."
    },
    "guidanceNote": "Separate the cause from blame; parents act on advice when they feel supported rather than criticised."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-patient-choosing-between-root-canal-and-extraction",
    "title": "Dentistry — Patient choosing between root canal and extraction",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a dental surgery",
      "patientRole": "The patient just wants the pain gone quickly and is leaning towards extraction because it sounds simpler and cheaper.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Compare the two options fairly, including longer-term consequences of losing the tooth. Respect the patient's right to choose while making sure the decision is properly informed.",
      "candidateRole": "You are the dentist. A patient has a badly infected back tooth that could be saved with root canal treatment or removed by extraction.",
      "patientConcern": "Hidden core concern: the patient has not considered the long-term cost and gap-management implications of extraction and may regret a rushed decision."
    },
    "guidanceNote": "Make the long-term consequences of extraction concrete; an informed patient may still choose it, but should not be surprised later."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-patient-expecting-hollywood-white-veneers",
    "title": "Dentistry — Patient expecting Hollywood-white veneers",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a cosmetic dental practice",
      "patientRole": "The patient is a 27-year-old preparing for their wedding who has fixed ideas about the exact shade and shape they want.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Discuss what is realistically achievable for their teeth and face, explain the irreversible nature of veneers, and manage expectations honestly while keeping the conversation positive.",
      "candidateRole": "You are the dentist. A patient wants very bright, uniform veneers based on photos they have brought in.",
      "patientConcern": "Hidden core concern: the patient may be disappointed if the result looks natural rather than dramatically artificial, and has not grasped that veneers are permanent."
    },
    "guidanceNote": "Be candid about irreversibility and a natural-looking result; managing expectations now prevents dissatisfaction after an irreversible procedure."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-patient-grinding-teeth-blaming-work-stress",
    "title": "Dentistry — Patient grinding teeth blaming work stress",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a dental surgery",
      "patientRole": "The patient is a 41-year-old in a high-pressure job who waves off the problem as just stress that will pass.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain the link between grinding and the damage you can see, discuss protective options such as a night guard, and encourage the patient to take the longer-term damage seriously.",
      "candidateRole": "You are the dentist. A patient has worn, flattened teeth and reports jaw soreness and morning headaches consistent with night-time grinding.",
      "patientConcern": "Hidden core concern: the patient does not connect their jaw pain and worn teeth with grinding and underestimates the cumulative damage."
    },
    "guidanceNote": "Show the patient the visible wear as evidence; concrete signs of damage make an abstract habit feel real."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-patient-who-panics-at-the-sound-of-the-drill",
    "title": "Dentistry — Patient who panics at the sound of the drill",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a community dental clinic",
      "patientRole": "The patient is a 29-year-old who had a frightening dental experience as a child and now avoids treatment.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Acknowledge the patient's fear without dismissing it, explain the practical steps you can take to make the appointment manageable, and agree a signal system so they feel in control during treatment.",
      "candidateRole": "You are the dentist. A patient needs a moderate cavity filled but becomes visibly distressed as soon as equipment is switched on.",
      "patientConcern": "Hidden core concern: the patient is afraid of being trapped and unable to make you stop once treatment begins."
    },
    "guidanceNote": "Offering a concrete stop signal addresses the real fear of losing control far better than general reassurance."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-patient-whose-new-denture-keeps-rubbing",
    "title": "Dentistry — Patient whose new denture keeps rubbing",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a dental surgery",
      "patientRole": "The patient is a 68-year-old who is frustrated, finding it hard to eat, and wondering if the denture was made wrong.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Acknowledge the discomfort, explain why some adjustment is normal for a new denture, describe what you will do today, and set realistic expectations for settling in.",
      "candidateRole": "You are the dentist. A patient has returned because their recently fitted lower denture is rubbing and causing a sore spot.",
      "patientConcern": "Hidden core concern: the patient fears they have wasted their money on a denture they will never be able to wear comfortably."
    },
    "guidanceNote": "Reassure that adjustment appointments are a normal part of the process, not a sign of a faulty denture."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-patient-with-a-tooth-knocked-out-in-a-fall",
    "title": "Dentistry — Patient with a tooth knocked out in a fall",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a dental surgery seeing an emergency walk-in",
      "patientRole": "The patient is shaken, in pain, and worried about how they will look if the tooth cannot be saved.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Calm the patient, explain what you will do now to try to save or replace the tooth, and set out the immediate plan and what to expect over the coming days.",
      "candidateRole": "You are the dentist. A patient has arrived shortly after a front tooth was knocked out in a fall, bringing the tooth with them.",
      "patientConcern": "Hidden core concern: the patient is most distressed about their appearance and needs to know whether the gap will be visible."
    },
    "guidanceNote": "Address the appearance worry directly and early; a distressed patient absorbs the clinical plan better once their main fear is named."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-patient-with-bleeding-gums-dismissing-gum-disease",
    "title": "Dentistry — Patient with bleeding gums dismissing gum disease",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a dental surgery",
      "patientRole": "The patient is a 36-year-old who thinks bleeding when brushing is normal and not worth worrying about.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain in plain terms what the bleeding indicates, why it matters if left untreated, and what daily changes and follow-up will help. Keep the patient engaged rather than lecturing.",
      "candidateRole": "You are the dentist. During a check-up you have found early gum disease with bleeding and inflammation along the gum line.",
      "patientConcern": "Hidden core concern: the patient assumes gum disease only affects people with poor hygiene and is mildly embarrassed to be told otherwise."
    },
    "guidanceNote": "Frame gum disease as common and reversible at this stage; reducing shame makes the patient more likely to act on your advice."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-patient-with-sensitive-teeth-using-a-home-whitening-kit",
    "title": "Dentistry — Patient with sensitive teeth using a home whitening kit",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a dental surgery",
      "patientRole": "The patient is keen to keep whitening for an upcoming event and is reluctant to stop despite the discomfort.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain what is likely causing the sensitivity, advise on safe use of whitening products, and offer a realistic alternative that meets the patient's goal without harming their teeth.",
      "candidateRole": "You are the dentist. A patient has developed marked tooth sensitivity after using a strong whitening kit bought online.",
      "patientConcern": "Hidden core concern: the patient values the cosmetic result over their comfort and may keep using the kit unless offered a workable alternative."
    },
    "guidanceNote": "Offer a safe route to the result they want rather than a flat ban; patients comply more readily when their goal is respected."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-patient-worried-about-the-cost-of-a-crown",
    "title": "Dentistry — Patient worried about the cost of a crown",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a private dental surgery",
      "patientRole": "The patient is a 44-year-old self-employed plumber who has just been told the crown will not be fully covered by their insurance.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain clearly why a crown is the recommended option rather than another large filling. Acknowledge the cost concern, outline the realistic alternatives and their trade-offs, and agree a sensible next step without pressuring the patient.",
      "candidateRole": "You are the dentist. A patient has a heavily filled molar that has cracked, and you have recommended a crown to protect it.",
      "patientConcern": "Hidden core concern: the patient fears being talked into the most expensive option and wants honest reassurance that the crown is genuinely necessary, not upselling."
    },
    "guidanceNote": "Name the cost openly before the patient has to raise it again; honest framing of alternatives builds more trust than a hard sell."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-pregnant-patient-afraid-of-having-a-filling",
    "title": "Dentistry — Pregnant patient afraid of having a filling",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a dental surgery",
      "patientRole": "The patient is hesitant about local anaesthetic and X-rays and is inclined to delay all treatment until after the birth.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Reassure the patient with clear, honest information about what is safe during pregnancy, explain why delaying may not be wise, and agree a comfortable plan.",
      "candidateRole": "You are the dentist. A patient in the second trimester of pregnancy needs a routine filling but is worried treatment could harm the baby.",
      "patientConcern": "Hidden core concern: the patient believes any dental treatment during pregnancy is risky and needs evidence-based reassurance to proceed."
    },
    "guidanceNote": "Be specific about what is safe and why; vague reassurance leaves an anxious patient still inclined to postpone."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-smoker-reluctant-to-act-on-a-suspicious-mouth-patch",
    "title": "Dentistry — Smoker reluctant to act on a suspicious mouth patch",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "a dental surgery",
      "patientRole": "The patient is a 55-year-old heavy smoker who feels fine and is reluctant to be referred for further checks.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain why the patch needs to be looked at by a specialist without causing unnecessary alarm. Discuss smoking honestly and agree a clear referral plan the patient will follow through on.",
      "candidateRole": "You are the dentist. During an examination you have noticed a persistent white patch on the side of the tongue in a long-term smoker.",
      "patientConcern": "Hidden core concern: the patient is frightened of a cancer diagnosis and may avoid the referral to avoid bad news."
    },
    "guidanceNote": "Balance honesty with calm; most such patches are not cancer, but the referral should be framed as a sensible precaution the patient agrees to."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "DENTISTRY",
    "slug": "spk-dentistry-teenager-refusing-to-wear-their-orthodontic-retainer",
    "title": "Dentistry — Teenager refusing to wear their orthodontic retainer",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "an orthodontic clinic",
      "patientRole": "The patient is a 16-year-old who finds the retainer uncomfortable and embarrassing and does not see the point now the braces are off.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Engage the teenager respectfully, explain why the teeth move back without a retainer, and agree a realistic plan they are willing to stick to.",
      "candidateRole": "You are the dentist. A teenager finished brace treatment recently but has stopped wearing their retainer, and their teeth are beginning to shift.",
      "patientConcern": "Hidden core concern: the patient resents being told what to do and will tune out if treated like a child."
    },
    "guidanceNote": "Give the teenager ownership of the plan; involving them in the solution works better than warnings about consequences."
  }
];
