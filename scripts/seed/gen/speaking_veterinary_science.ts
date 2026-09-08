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
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-addressing-separation-related-behaviour-in-a-rescue-dog",
    "title": "Veterinary Science — Addressing separation-related behaviour in a rescue dog",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room, a booked appointment following two earlier visits for the same problem.",
      "candidateRole": "You are the veterinarian. A physical cause has been excluded and the behaviour is consistent with separation-related distress.",
      "patientRole": "A first-time dog owner in their thirties with a two-year-old crossbreed rescue, adopted four months ago, who barks, chews doorframes and toilets indoors whenever left.",
      "patientConcern": "The owner is quietly considering returning the dog to the shelter and feels like a failure for not coping, and has told nobody.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what is known of the dog's history before the adoption and how the settling-in has gone.\n\nAsk exactly what happens when the dog is left: how soon it starts, how long it lasts, and how it is known.\n\nAsk what has been tried so far and what happened.\n\nAsk how the household is coping, and give room for the thought about returning the dog to be said.\n\nAcknowledge how difficult this is and say plainly that it is not a failure of ownership.\n\nExplain that this is distress rather than deliberate disobedience or spite, and why the distinction matters.\n\nExplain what punishment on returning home does to the problem, since it is a common and worsening mistake.\n\nOutline graduated departure training: what it is, how slowly it goes, and what the first week looks like.\n\nExplain the role of a qualified behaviourist and how a referral works.\n\nDiscuss supportive measures, including environment, enrichment and where medication may have a place.\n\nAgree the first steps, arrange the referral, and agree a follow-up so they are not left alone with it."
    },
    "guidanceNote": "Stress that the behaviour reflects anxiety rather than spite, which lifts the owner's sense of personal failure; offer a concrete, achievable first step and the safety net of a behaviourist referral so returning the dog stops feeling like the only option."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-advanced-dental-disease-in-a-small-breed-dog",
    "title": "Veterinary Science — Advanced dental disease in a small-breed dog",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room, an appointment booked because of halitosis.",
      "candidateRole": "You are the veterinarian. Examination has revealed heavy calculus, gingival recession and several mobile teeth requiring extraction under general anaesthetic.",
      "patientRole": "A retired owner with a nine-year-old Yorkshire terrier who came in only about the smell, has never had a pet anaesthetised, and looks alarmed at the word surgery.",
      "patientConcern": "The owner is frightened that a general anaesthetic could kill their elderly dog and would rather avoid the procedure than risk losing him on the table.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have noticed at home: the smell, eating, dropping food, and whether he has become quieter.\n\nShow them the mouth and explain what you can see, tooth by tooth, rather than describing it in general.\n\nExplain what the loose teeth mean for pain, and that dogs rarely show dental pain in a way owners recognise.\n\nAsk what worries them about the treatment, and let the fear of the anaesthetic be spoken.\n\nAddress that fear with figures rather than reassurance, and be honest that there is a risk.\n\nExplain how the risk is reduced in an older dog: pre-anaesthetic blood tests, intravenous fluids, monitoring and warming.\n\nExplain what the procedure involves, how long he would be in, and when he would go home.\n\nExplain the pain relief afterwards and what the recovery looks like day by day.\n\nExplain what would happen if the teeth were left, including infection and continued pain.\n\nGive an honest cost estimate and explain what the blood test would add.\n\nAgree the plan, book the dental, and agree what to do meanwhile if he stops eating."
    },
    "guidanceNote": "Name the anaesthetic fear directly and explain the safeguards (blood test, monitoring, tailored protocol) honestly; balance the real but small risk against the ongoing pain of infected teeth."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-daily-insulin-and-monitoring-for-a-newly-diagnosed-diabetic-dog",
    "title": "Veterinary Science — Daily insulin and monitoring for a newly diagnosed diabetic dog",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room, a results appointment following blood and urine testing.",
      "candidateRole": "You are the veterinarian. The dog has been diagnosed with diabetes mellitus and needs twice-daily insulin, consistent feeding and home monitoring.",
      "patientRole": "An owner in their sixties who lives alone with an eight-year-old crossbreed bitch, has never given an injection, and often stays overnight with a daughter.",
      "patientConcern": "The owner is overwhelmed and afraid of making a fatal mistake with the injections, and fears the twice-daily routine will end their freedom.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have noticed at home: drinking, urinating, appetite and weight.\n\nExplain the diagnosis in plain terms and what is happening in the body.\n\nAsk what they know about diabetes and what worries them about managing it.\n\nAddress the fear of harming the dog directly, and let them handle a pen and needle before anything else.\n\nDemonstrate the injection technique and have them do it themselves before leaving.\n\nExplain the feeding routine and why the timing matters as much as the food.\n\nExplain hypoglycaemia: what it looks like, what to do immediately, and what to keep in the house.\n\nExplain what to do about a missed or uncertain dose, since guessing is the commonest danger.\n\nAddress the freedom question practically: overnight stays, holidays, and who else could be trained.\n\nExplain the monitoring plan, the glucose curve, and the rechecks over the first months.\n\nExplain how the insulin is stored and handled, and what to do if a pen is dropped or left out.\n\nAgree the starting dose and plan, give written instructions and a number, and arrange the first recheck."
    },
    "guidanceNote": "Break the routine into small, learnable steps and confirm understanding rather than overwhelming with detail; reassure that the practice will support them and that many owners living alone manage diabetic pets successfully."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-deciding-on-neutering-a-young-male-cat",
    "title": "Veterinary Science — Deciding on neutering a young male cat",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room, a second vaccination appointment for a young cat.",
      "candidateRole": "You are the veterinarian. The owner has asked for your view on whether to neuter their six-month-old male cat.",
      "patientRole": "A young adult owner of a six-month-old male tabby who has free outdoor access, has heard conflicting opinions from friends, and has not yet decided.",
      "patientConcern": "The owner feels neutering is unnatural and worries it will change the cat's personality or make him lazy and overweight.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the cat's life is like: indoor, outdoor, other cats nearby, and whether he has started to roam.\n\nAsk what they have heard and what has made them hesitate.\n\nAsk what they most want for the cat, so the discussion is framed around that.\n\nAcknowledge that the question is a reasonable one and do not treat it as an obstacle.\n\nExplain what neutering involves: the procedure, the anaesthetic, the recovery and the cost.\n\nExplain the benefits specifically for an outdoor male: roaming, road traffic, fighting, abscesses and disease transmission.\n\nExplain spraying and territorial marking, and how much harder it is to resolve once established.\n\nAddress the personality concern honestly: what does and does not change.\n\nAddress the weight concern honestly: explain that the requirement falls and how feeding is adjusted.\n\nExplain the unwanted litters question and the local situation.\n\nExplain what would change your advice if the cat were to be kept strictly indoors.\n\nExplain what microchipping and vaccination would add, since these usually go together.\n\nAnswer any remaining questions, agree a decision or a date to book, and confirm the pre-operative instructions."
    },
    "guidanceNote": "Take the 'unnatural' and personality worries seriously rather than dismissing them; explain that temperament stays the same and weight is managed through feeding, so the owner makes an informed, unpressured choice."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-discussing-a-newly-diagnosed-diabetic-cat",
    "title": "Veterinary Science — Discussing a newly diagnosed diabetic cat",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room at a small-animal practice, a results appointment after blood and urine tests.",
      "candidateRole": "You are the veterinarian. You have diagnosed diabetes mellitus in a nine-year-old cat and need to agree home management and monitoring.",
      "patientRole": "The owner of 'Biscuit', a nine-year-old overweight cat, anxious, who has never given an injection and has gone quiet since the word insulin was used.",
      "patientConcern": "The owner is terrified of hurting the cat with the needle and is quietly considering euthanasia because they fear they cannot cope with lifelong injections.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have noticed at home and what they understood from the earlier appointment.\n\nExplain what diabetes means for the cat, in plain terms, and what happens without treatment.\n\nAsk what worries them about managing it at home, and give real space for the answer.\n\nNotice the hesitation and ask gently whether they are wondering if this is treatable at all, so the euthanasia thought can be spoken.\n\nAddress that directly: explain what treatment actually asks of them day to day, and that many cats do well.\n\nExplain the insulin: how small the needle is, and that most cats barely notice it.\n\nDemonstrate the injection and have the owner do one before leaving the room.\n\nExplain the dietary change and why weight loss matters, including the possibility of remission.\n\nExplain the warning signs of low blood glucose and exactly what to do and when to call.\n\nExplain the monitoring plan, including glucose curves and how often rechecks are needed.\n\nAgree a starting plan, arrange a nurse appointment in two days, and give a number for questions."
    },
    "guidanceNote": "Don't rush into the injection technique; check the owner's confidence first and name their fear gently, because an owner who feels incapable may decline treatment that is actually very achievable."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-discussing-quality-of-life-in-a-dog-with-advanced-cancer",
    "title": "Veterinary Science — Discussing quality of life in a dog with advanced cancer",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Quiet veterinary consulting room, a review appointment, the dog lying on a blanket on the floor.",
      "candidateRole": "You are the veterinarian. The tumour has progressed despite treatment and the focus is now comfort and quality of life.",
      "patientRole": "An owner in their fifties with an eleven-year-old golden retriever, who has driven to every appointment for eight months, sleeps downstairs with the dog, and is exhausted.",
      "patientConcern": "The owner is terrified of giving up too soon and feels that agreeing to let the dog go would be a betrayal of a loyal companion.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the past two weeks have been at home, day by day rather than in general.\n\nAsk specifically about appetite, mobility, toileting, sleep, and whether he still enjoys anything.\n\nAsk what a good day and a bad day look like now, and how many of each there are in a week.\n\nAcknowledge everything they have done, specifically, before saying anything about the future.\n\nExplain honestly what the examination and the progression show.\n\nIntroduce a quality-of-life assessment as a tool they can use at home, rather than as a verdict.\n\nExplain what palliative care can still offer: analgesia, appetite support and nursing at home.\n\nAddress the fear of acting too soon directly, and reframe the decision as protecting him rather than giving up.\n\nExplain what waiting too long looks like, honestly, since that is the other risk.\n\nExplain practically what euthanasia involves, including at home, so it is not an unknown.\n\nAsk whether there is anyone else in the family who should be part of the decision.\n\nAgree a follow-up in a few days, agree what would mean calling sooner, and offer support either way."
    },
    "guidanceNote": "Lead with the dog's daily experience rather than a timeline; reassure the owner that choosing comfort is an act of love, not abandonment, and never pressure them toward a single answer."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-heart-murmur-and-lifelong-cardiac-medication-in-a-small-dog",
    "title": "Veterinary Science — Heart murmur and lifelong cardiac medication in a small dog",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room, an appointment booked about an occasional cough.",
      "candidateRole": "You are the veterinarian. You have detected a grade four murmur and the imaging points to degenerative mitral valve disease requiring ongoing medication.",
      "patientRole": "An owner in their fifties with a twelve-year-old Cavalier King Charles spaniel, who came in about a cough after exercise and had no idea anything else was wrong.",
      "patientConcern": "The owner is shocked that a minor cough signals heart disease and is now afraid the dog could collapse and die suddenly at any moment.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the cough: when it happens, how often, and whether anything else has changed.\n\nAsk about exercise tolerance, breathing at rest, and sleeping position, since these matter more than the cough.\n\nExplain what you heard and what the tests showed, in plain language.\n\nExplain what the diagnosis means: a common, progressive condition that is managed over years rather than a sudden threat.\n\nAddress the fear of sudden collapse directly and honestly, rather than leaving it in the room.\n\nExplain what the medication does, why it is started now, and that it is lifelong.\n\nExplain the practical side: how many tablets, when, and what to do about a missed dose.\n\nExplain the sleeping respiratory rate: how to count it at home, what number matters, and why it is the earliest warning.\n\nDiscuss diet and exercise, including what he can still do.\n\nExplain the monitoring plan: rechecks, repeat imaging and blood tests for kidney function.\n\nAgree the medication plan, give a written rate chart, and agree what would mean calling urgently."
    },
    "guidanceNote": "Address the sudden-death fear honestly; explain that medication and home breathing-rate monitoring help keep the disease stable, giving the owner a concrete way to feel in control rather than helplessly waiting for a crisis."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-itchy-skin-and-a-suspected-food-allergy-in-a-young-dog",
    "title": "Veterinary Science — Itchy skin and a suspected food allergy in a young dog",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room, a third appointment for the same problem this year.",
      "candidateRole": "You are the veterinarian. The dog has recurrent pruritus, otitis and pedal erythema, and you are recommending a strict elimination diet trial.",
      "patientRole": "An owner in their thirties with a one-year-old French bulldog, two young children who feed the dog from the table, and a cupboard full of pet shop shampoos.",
      "patientConcern": "The owner is frustrated that there is no quick cure and doubts the whole family can keep to a diet trial with no treats at all.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the history: when the itching started, whether it is seasonal, and which areas are affected.\n\nAsk what has been tried, for how long, and what effect each thing had.\n\nAsk about the household: who feeds the dog, what treats are given, and whether there are other pets.\n\nExplain what you found on examination and why an allergy is suspected rather than a skin infection alone.\n\nExplain that flea control and any current infection must be dealt with first, so the trial is not wasted.\n\nExplain what an elimination diet trial is, why it must run eight weeks, and why it must be absolute.\n\nBe explicit about what absolute means: no treats, no scraps, no flavoured medication, no chews, no licking other bowls.\n\nAddress the children directly as the practical obstacle, and problem-solve rather than instruct.\n\nExplain how flare-ups will be managed during the trial so the dog is not left uncomfortable.\n\nExplain what happens at the end: the challenge, and what a positive or negative result would mean.\n\nAgree the diet, the start date and the household rules, and arrange the review."
    },
    "guidanceNote": "Acknowledge the frustration of slow progress and the practical challenge of a household-wide diet; emphasise that even one slipped treat undoes the trial, and problem-solve with the owner so the whole family can realistically commit."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-long-term-management-of-feline-chronic-kidney-disease",
    "title": "Veterinary Science — Long-term management of feline chronic kidney disease",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room, a results appointment after blood and urine tests.",
      "candidateRole": "You are the veterinarian. Testing confirms early-stage chronic kidney disease in an older cat with polydipsia and mild weight loss.",
      "patientRole": "An owner in their sixties with a thirteen-year-old domestic shorthair, unfamiliar with chronic illness in pets, who expected a course of tablets and a cure.",
      "patientConcern": "The owner fears the cat is dying imminently and is overwhelmed by the prospect of lifelong cost and medicating a famously difficult cat.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have noticed at home: drinking, urinating, appetite, weight and how she is in herself.\n\nExplain in plain terms what chronic kidney disease is and what the test results show.\n\nSay clearly what stage she is at and what that means for time, since the fear of imminent death is the loudest thing in the room.\n\nExplain that this is managed rather than cured, and what management is actually aiming at.\n\nExplain the renal diet: why it is the single most effective step, and how to transition a fussy cat onto it.\n\nDiscuss hydration practically: water placement, fountains, and wet food.\n\nExplain what medication may be needed and when, rather than everything at once.\n\nAddress the medicating difficulty directly and discuss alternatives for a cat who will not take tablets.\n\nDiscuss the cost honestly, including the monitoring, so there are no surprises.\n\nExplain the monitoring schedule: which bloods, how often, and what would change the plan.\n\nAgree the first dietary change and one monitoring date, and keep the plan small enough to follow."
    },
    "guidanceNote": "Separate the word 'chronic' from 'terminal' early; many cats live comfortably for years with diet and monitoring. Offer practical tips for feeding and dosing a reluctant cat to reduce the owner's sense of burden."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-managing-an-overweight-middle-aged-labrador",
    "title": "Veterinary Science — Managing an overweight middle-aged Labrador",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room, a routine annual health check and vaccination.",
      "candidateRole": "You are the veterinarian. The dog weighs 42 kg with a body condition score of 8 out of 9, up 6 kg since the last visit.",
      "patientRole": "A busy professional in their forties with a seven-year-old male Labrador who is fed twice daily plus scraps, gets one twenty-minute walk, and looks fine to them.",
      "patientConcern": "The owner secretly feels guilty and worries that cutting food and treats means taking away the dog's main pleasure, and that they have been a bad owner.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the dog eats: the food, the amount, how it is measured, treats, and who else feeds him.\n\nAsk about exercise: how often, how long, and what he is like on a walk now.\n\nShow them the weight trend and let them feel the ribs, so the finding is not just your opinion.\n\nExplain body condition scoring and what an ideal shape would look like on this dog.\n\nExplain the health consequences specifically: joints, breathing, diabetes risk and shortened lifespan.\n\nAcknowledge the guilt rather than confirming it, and be clear that this is common and reversible.\n\nAddress the belief that food is his main pleasure, and offer alternatives that are not food.\n\nSet a realistic target weight and a rate of loss, so the plan has numbers.\n\nExplain measured feeding, weighing the food, and how to account for treats within the allowance.\n\nDiscuss exercise progression appropriate to a dog carrying this weight.\n\nExplain how the household will need to act together, since one person feeding scraps undoes the plan.\n\nAgree the first step, arrange monthly nurse weigh-ins, and agree how success will be measured."
    },
    "guidanceNote": "Acknowledge that treats are a real bond between owner and dog; reframe the plan around the dog's comfort and years of life rather than blame, so the owner feels supported, not judged."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-post-operative-care-after-orthopaedic-surgery",
    "title": "Veterinary Science — Post-operative care after orthopaedic surgery",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room at discharge, the dog in the kennel next door recovering.",
      "candidateRole": "You are the veterinarian discharging a dog after cranial cruciate ligament surgery, where strict rest and controlled rehabilitation determine the outcome.",
      "patientRole": "An active owner in their forties with a four-year-old Border collie walked for two hours daily, who works from home and has a garden with steps.",
      "patientConcern": "The owner fears that weeks of confinement will make a high-energy dog miserable and unmanageable, and doubts they can keep her still.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Explain what was done in surgery and what is now healing, so the restrictions have a reason.\n\nExplain the confinement: where, how large a space, and for how many weeks.\n\nExplain toilet breaks: on the lead, short, and no free running in the garden.\n\nExplain the specific bans: no stairs, no jumping on or off furniture, no slippery floors, and no play with other dogs.\n\nExplain the wound care, the collar, and what the incision should and should not look like.\n\nExplain the medication: what each is for, how long, and what to do about a missed dose.\n\nAcknowledge that keeping this dog still is the hard part, and treat it as the main clinical problem.\n\nDiscuss mental enrichment that does not involve movement: scent work, food puzzles and training in a lie-down.\n\nExplain the rehabilitation timeline week by week, so there is a visible end to the confinement.\n\nExplain the signs of complication: swelling, discharge, sudden lameness or the dog going off her food.\n\nAgree the plan, arrange the recheck and suture removal, and discuss referral for physiotherapy."
    },
    "guidanceNote": "Validate how hard rest is for an energetic breed and offer practical mental-stimulation ideas (food puzzles, scent games) so the owner sees confinement as achievable rather than cruel, protecting the surgical repair."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-vaccination-hesitancy-in-a-new-puppy",
    "title": "Veterinary Science — Vaccination hesitancy in a new puppy",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room during a first puppy health check.",
      "candidateRole": "You are the veterinarian. The owner is reluctant to start the core vaccination course for a healthy nine-week-old puppy.",
      "patientRole": "The owner of 'Rocket', a nine-week-old crossbreed, who has read online that vaccines cause harm, wants to delay or skip them, and expects an argument.",
      "patientConcern": "The real worry is that a friend's dog became unwell after a vaccination, and the owner feels guilt-tripped by clinics and wants to feel respected and in control.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have read and where, and let them tell you the whole of it.\n\nAsk whether anything has happened to a dog they know, since a personal story usually sits underneath.\n\nAcknowledge that they are asking because they want to protect the puppy, and say so plainly.\n\nExplain which diseases the core vaccines prevent and what those diseases actually do to a puppy.\n\nExplain the real rate of side effects, what a normal reaction looks like, and how rare a serious one is.\n\nAddress the friend's dog honestly rather than dismissing the account.\n\nExplain the socialisation window and why delay creates a different risk, in behaviour as well as infection.\n\nExplain what an unvaccinated puppy cannot safely do, including classes, parks and boarding.\n\nOffer the schedule and explain what each visit covers, so the plan is visible rather than open-ended.\n\nMake clear that the decision is theirs, and that you will continue to care for the puppy either way.\n\nAgree a plan they are comfortable with, even if it is one vaccine today, and arrange the next visit."
    },
    "guidanceNote": "Avoid dismissing the online claims outright; validate the owner's protective intent first, then offer clear evidence, so the conversation stays collaborative rather than confrontational."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-weighing-treatment-options-against-cost-for-a-sick-rabbit",
    "title": "Veterinary Science — Weighing treatment options against cost for a sick rabbit",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room, an emergency appointment at the end of the afternoon.",
      "candidateRole": "You are the veterinarian. The rabbit has gut stasis and you are recommending imaging and supportive hospitalisation, with a more conservative outpatient option available.",
      "patientRole": "A parent on a limited budget whose eight-year-old child owns the three-year-old house rabbit, which has not eaten or passed droppings for eighteen hours.",
      "patientConcern": "The owner is ashamed that money is a factor in their child's pet's care and is afraid you will judge them if they cannot afford the best option.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask when the rabbit last ate, last passed droppings, and what has changed in the household or the diet.\n\nExamine and explain what you find, including why this is urgent in a rabbit rather than a wait-and-see problem.\n\nExplain what gut stasis is and what happens over the next day if it is not treated.\n\nExplain what the imaging would look for and why it changes the treatment.\n\nSet out both options plainly: full hospitalisation with imaging, and a conservative outpatient plan.\n\nGive honest costs for each before they have to ask.\n\nExplain the trade-off in outcome between the two, without overstating either.\n\nRaise the money question yourself, so they do not have to, and make clear that it is a normal part of the conversation.\n\nSay plainly that choosing the outpatient plan is a legitimate decision and not a lesser kind of care.\n\nExplain what the outpatient plan asks of them at home: syringe feeding, medication and monitoring.\n\nAgree a plan together, agree exactly what would mean returning tonight, and arrange the recheck."
    },
    "guidanceNote": "Raise cost matter-of-factly and without judgement; presenting a credible 'good, better, best' range lets the owner make a responsible choice within their means and removes the shame from the conversation."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-wellness-planning-for-a-newly-senior-dog",
    "title": "Veterinary Science — Wellness planning for a newly senior dog",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room, a routine annual vaccination and health check.",
      "candidateRole": "You are the veterinarian recommending a senior wellness approach with six-monthly checks and baseline blood and urine testing.",
      "patientRole": "An owner in their seventies with a ten-year-old miniature schnauzer who seems well, has slowed a little on walks, and thinks the extra tests are fussing over nothing.",
      "patientConcern": "The owner quietly dreads that screening will uncover a serious illness they would rather not know about, and would prefer to let the dog just enjoy life.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have noticed over the past year: energy, walks, drinking, appetite, sleep and lumps.\n\nAsk what they think about the idea of extra tests, and listen to the objection fully.\n\nAcknowledge that the dog does look well and that the question is a fair one.\n\nExplain what changes in dogs of this age and why problems are often silent at the start.\n\nExplain what baseline testing gives you: a comparison for later, rather than only a result today.\n\nAddress the underlying reluctance gently: ask what they would want to do if something were found.\n\nExplain what is commonly found and, importantly, how treatable those things usually are at an early stage.\n\nExplain the practical detail: which tests, how much blood, whether sedation is needed, and the cost.\n\nDiscuss the other senior areas: dental care, weight, mobility, diet and cognitive change.\n\nMake clear that declining the tests is their decision and that the dog will be cared for either way.\n\nAgree a sensible monitoring plan, even if smaller than the full recommendation, and set the next visit."
    },
    "guidanceNote": "Gently name the 'rather not know' fear; frame early detection as a way to keep the dog comfortable and active for longer, not as hunting for bad news, so screening feels like care rather than threat."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "VETERINARY_SCIENCE",
    "slug": "spk-veterinary-science-year-round-parasite-prevention-for-an-outdoor-cat",
    "title": "Veterinary Science — Year-round parasite prevention for an outdoor cat",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Veterinary consulting room, a routine health check and booster appointment.",
      "candidateRole": "You are the veterinarian. A healthy outdoor cat has had no regular flea or worm prevention and you are recommending a year-round plan.",
      "patientRole": "An owner in their fifties with a five-year-old outdoor cat that hunts regularly, sleeps on the beds, and is treated only when fleas are actually seen.",
      "patientConcern": "The owner thinks regular preventatives are an unnecessary expense and a way for the practice to make money when the cat looks perfectly healthy.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the cat's routine: hours outdoors, hunting, contact with other cats, and where he sleeps.\n\nAsk what is currently used, how often, and where it is bought.\n\nAsk what they think about regular treatment, and let the suspicion about cost be voiced.\n\nAcknowledge the concern openly rather than defensively, and address it head on.\n\nExplain the flea life cycle and why seeing a flea means the house is already affected.\n\nExplain what worms this cat is exposed to through hunting, and why hunting cats need a different schedule.\n\nExplain the risk to people in the home, particularly children, in proportionate terms.\n\nExplain why treatment through the winter matters in a heated house.\n\nExplain the difference between what is sold in supermarkets and what you are recommending, and why.\n\nGive the actual cost per month, so the decision is made on a real number.\n\nExplain how the house itself is treated if fleas are already established there.\n\nRecommend a specific product and schedule, and agree a plan the owner will realistically follow."
    },
    "guidanceNote": "Acknowledge the cost-versus-need scepticism honestly; explain prevention in terms of the hidden risks (tapeworm, household exposure, hunting) so the owner sees the value rather than feeling sold to."
  }
];
