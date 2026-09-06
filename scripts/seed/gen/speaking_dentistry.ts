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
      "setting": "General dental surgery, a booked appointment on a weekday morning, the patient already in the chair.",
      "candidateRole": "You are the dentist. A non-restorable upper first molar needs extracting today and the patient has never had a tooth out.",
      "patientRole": "A 34-year-old office worker who has never had an extraction, dreads the injection, and is worried about feeling everything and about being unfit for work the next day.",
      "patientConcern": "The real fear is not the tooth but a painful dental experience in childhood, and a private belief that anaesthetic does not work properly on them.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient is expecting to happen today, and let them describe it in their own words before you correct anything.\n\nAsk directly what the worst part of it is for them, and give them room to say something other than pain.\n\nExplain what local anaesthetic does and what it does not do: that they should feel firm pressure and movement, and that pressure is not the same as pain.\n\nExplain what you will do if they do feel pain, and that more anaesthetic can be given at any point.\n\nAgree a stop signal before you start, and tell them you will honour it every time.\n\nDescribe the procedure itself in sequence and in plain language, including roughly how long it takes.\n\nExplain the aftercare: biting on the gauze, no rinsing or smoking for the rest of the day, painkillers taken before the anaesthetic wears off, and mild swelling that peaks on day two.\n\nAnswer the question about work honestly rather than optimistically, including what a desk day would realistically feel like.\n\nCheck what they have understood by asking them to tell you the plan back.\n\nAgree whether you are going ahead today or booking a longer appointment, and make either choice an acceptable one."
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
      "setting": "Community dental clinic, a routine check-up appointment, the child sitting in the chair and the parent alongside.",
      "candidateRole": "You are the dentist. A six-year-old has early decay in two lower molars and you want to apply fluoride varnish and agree a prevention plan.",
      "patientRole": "The parent of a six-year-old, cautious about fluoride, has read online that it is harmful, and prefers natural approaches, but does want the decay stopped.",
      "patientConcern": "The parent is not opposed to evidence so much as afraid of being judged a bad parent for the decay, and will close down if lectured.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask the parent what they have read about fluoride and where, and listen without correcting them mid-sentence.\n\nAsk what specifically worries them about it, so that you answer their concern and not the one you assume.\n\nAcknowledge that they are here, that they brought the child early, and that the decay is not a verdict on them as a parent.\n\nExplain what fluoride varnish is, how much is actually applied, how long it stays on the tooth, and what happens to the rest.\n\nExplain what the varnish is meant to achieve for these two teeth specifically, rather than in general.\n\nAsk about the child's diet and, in particular, about how often rather than how much sugar is eaten.\n\nAsk about brushing: who does it, when, how long, and whether the toothpaste is spat out rather than rinsed away.\n\nAgree the changes that the parent thinks are realistic in their household, and say them back.\n\nOffer the varnish again now that the concern has been heard, and accept a decision to think about it without withdrawing your recommendation.\n\nAgree what happens next and when you will see the child again, whatever they decide today."
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
      "setting": "Children's dental clinic, a first appointment, the child on the parent's lap rather than in the chair.",
      "candidateRole": "You are the dentist. A three-year-old has several cavities in the upper front and back teeth, with a bedtime bottle of sweetened milk a likely contributor.",
      "patientRole": "The parent of a three-year-old, anxious, quiet, feels they have already done their best, and expects to be told off. A grandmother gives the bedtime bottle.",
      "patientConcern": "The parent is frightened of being judged and will stop engaging altogether if the conversation feels like an accusation.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask the parent what they have noticed about the child's teeth and what brought them in today.\n\nExplain what you have found, tooth by tooth, in plain language and without using the word neglect.\n\nExplain how decay of this pattern develops in a young child, framing it as something that happens rather than something that was done.\n\nAsk about the bedtime routine as a routine, not as a fault: who puts the child to bed, what is given, and how long the bottle lasts.\n\nAcknowledge the practical difficulty of changing a habit that another family member manages.\n\nAgree two or three specific changes the parent believes they can actually make, and no more than that.\n\nExplain what treatment the child will need, what it involves at this age, and what will happen if nothing is done.\n\nExplain what you will do at the next visit to build the child's confidence, since these are early experiences that will shape the rest.\n\nOffer fluoride varnish today and explain briefly what it does.\n\nAgree the review interval and reassure the parent that early attendance is what changes the outcome."
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
      "setting": "General dental surgery, a follow-up appointment after an emergency visit two days ago for pain.",
      "candidateRole": "You are the dentist. A lower second molar is badly infected and can either be saved with root canal treatment or removed.",
      "patientRole": "A 46-year-old who wants the pain gone quickly, is leaning towards extraction because it sounds simpler and cheaper, and has already looked up the price of both.",
      "patientConcern": "The patient has not thought past the next fortnight and has not considered what a gap will mean for chewing, for the neighbouring teeth, or for cost in five years.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient is thinking at the moment and what has led them towards extraction.\n\nAsk what matters most to them: speed, cost, avoiding further appointments, or keeping the tooth.\n\nExplain what root canal treatment involves, how many visits, what it feels like, and how likely it is to succeed in this tooth.\n\nExplain what extraction involves and how quickly the pain would settle.\n\nSet out the longer picture for each option: what happens to the space, to the opposing tooth, and to chewing on that side.\n\nExplain the cost of each option honestly, including the cost of replacing the tooth later if they choose extraction now.\n\nCorrect any assumption that the tooth will simply be replaced free of charge or easily.\n\nSay what you would recommend and give your reason, while making clear the decision is theirs.\n\nCheck whether anything is pushing them towards a rushed decision, such as pain or time off work, and offer to relieve the pain today either way.\n\nAgree the next step and give them the option of deciding after the appointment rather than in the chair."
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
      "setting": "Private cosmetic dental practice, a consultation appointment booked for treatment planning.",
      "candidateRole": "You are the dentist. The patient wants very bright, uniform veneers on the upper front teeth, based on photographs they have brought in.",
      "patientRole": "A 27-year-old getting married in four months, with fixed ideas about the exact shade and shape, and photographs of a celebrity smile on their phone.",
      "patientConcern": "The patient has not understood that veneers are irreversible, and would be quietly disappointed by a result that looked natural rather than dramatic.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask the patient to show you the photographs and to say exactly what it is about them that appeals.\n\nAsk what they dislike about their own teeth now, and whether anything has prompted this beyond the wedding.\n\nExplain what preparing a tooth for a veneer involves, and be explicit that enamel is removed and cannot be put back.\n\nExplain what that means for the rest of their life: replacement every ten to fifteen years, and no route back to their own teeth.\n\nExplain honestly what shade is achievable on their teeth and how it will look against their skin and lips in ordinary light.\n\nExplain what other options exist, including whitening and composite bonding, and what each would and would not achieve.\n\nSet out the timescale realistically against a wedding in four months, including the temporary stage.\n\nAsk what they would think if the result looked like very good natural teeth rather than the photograph.\n\nOffer a trial smile or mock-up so that the decision is made on something they can see rather than imagine.\n\nAgree a next step and make clear that taking time to think is a reasonable choice, not a refusal."
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
      "setting": "General dental surgery, a routine six-monthly examination, findings noted during the check-up.",
      "candidateRole": "You are the dentist. The patient has markedly worn, flattened molars and reports jaw soreness and morning headaches consistent with night-time grinding.",
      "patientRole": "A 41-year-old in a demanding job who waves the problem off as stress that will pass, and who has never been told about the wear before.",
      "patientConcern": "The patient does not connect the headaches with the teeth at all, and hears the night guard as an upsell rather than as treatment.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the headaches and the jaw soreness: when in the day they occur, how long they last, and whether anything eases them.\n\nAsk whether a partner has ever mentioned noise at night, and whether the teeth feel tender first thing.\n\nShow the patient the wear you can see and explain what an unworn tooth of that age would look like.\n\nExplain the link between night-time grinding and the pattern of wear, the jaw ache and the morning headache.\n\nExplain what the wear means over the next ten years if it continues at this rate, including sensitivity, cracking and the cost of restoring worn teeth.\n\nExplain what a night guard does and, just as importantly, what it does not do.\n\nAddress the cost and the suspicion of being sold something, directly and without defensiveness.\n\nDiscuss the stress itself briefly, including caffeine, alcohol and screen time before bed, without straying outside your role.\n\nOffer to take photographs or models today so that the wear can be measured rather than argued about at the next visit.\n\nAgree what happens next and set a review point at which you will look again."
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
      "setting": "Community dental clinic, an appointment booked for a filling, the patient in the chair and visibly distressed.",
      "candidateRole": "You are the dentist. The patient needs a moderate cavity filled and becomes distressed as soon as any equipment is switched on.",
      "patientRole": "A 29-year-old who had a frightening dental experience as a child, has avoided dentists for eleven years, and came today only because of pain.",
      "patientConcern": "The underlying fear is of being trapped and unable to make you stop once treatment has begun, rather than of pain itself.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Stop what you are doing, put the equipment down, and let the patient sit up before you say anything else.\n\nAcknowledge the fear plainly and tell them that coming at all took something.\n\nAsk what happens for them when the noise starts, and what they are afraid will happen next.\n\nAsk what has helped before, if anything, and what has made it worse.\n\nExplain what you can change: the order of the appointment, breaks at fixed points, doing only part of the tooth today.\n\nAgree a stop signal, demonstrate it, and test it once before treatment so that they know it works.\n\nExplain what the noise actually is, and offer music or headphones so it is not the loudest thing in the room.\n\nExplain the alternatives if today is not achievable, including a shorter settling appointment or referral for sedation.\n\nAsk what they would like to attempt today, and accept an answer of nothing beyond sitting in the chair.\n\nAgree the plan and book the next appointment before they leave, while the decision is still fresh."
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
      "setting": "General dental surgery, an unscheduled review two weeks after a lower complete denture was fitted.",
      "candidateRole": "You are the dentist. The patient has returned with a sore spot from a recently fitted lower denture that needs adjusting.",
      "patientRole": "A 68-year-old who is frustrated, is finding it hard to eat anything firm, has stopped wearing the denture at home, and wonders whether it was made wrongly.",
      "patientConcern": "The patient fears the money has been wasted on something they will never wear comfortably, and is embarrassed to have taken it out.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask the patient to describe exactly where it rubs and when it is worst, and to point to the spot.\n\nAsk how much they have been wearing it, and make it easy for them to admit they have not.\n\nAcknowledge the frustration and say clearly that a sore spot at two weeks is expected, not a sign of a failed denture.\n\nExplain why a new lower denture almost always needs adjusting, in terms of the gum settling rather than the denture being wrong.\n\nExplain what you will do today: identify the pressure point, relieve it, and check the bite.\n\nExplain that more than one adjustment is normal and roughly how many are usual.\n\nExplain what to do before the next visit, including wearing it for a period beforehand so that the mark shows.\n\nGive practical eating advice for the settling weeks: softer food, smaller pieces, and using both sides.\n\nAddress the money question honestly and say what is included in the fee already paid.\n\nAgree the review appointment and tell them what would justify contacting you sooner."
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
      "setting": "General dental surgery, an emergency walk-in forty minutes after the injury, the patient still holding the tooth in a tissue.",
      "candidateRole": "You are the dentist. An upper central incisor was avulsed in a fall and the patient has brought the tooth with them.",
      "patientRole": "A 26-year-old, shaken and in pain after tripping on steps, holding the tooth wrapped in a dry tissue, and frightened about how they will look.",
      "patientConcern": "The distress is mostly about appearance and about facing work on Monday with a visible gap, more than about the tooth itself.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Calm the patient first, sit them down, and check quickly for any injury beyond the mouth, including a head injury.\n\nAsk how long ago it happened, where the tooth has been since, and whether it has been cleaned or scrubbed.\n\nAsk about tetanus cover and about how the fall happened, in case something else caused it.\n\nExplain what you are going to do in the next few minutes, and do the time-critical part while you talk.\n\nExplain honestly what determines whether the tooth survives, including the time out of the socket and how it was stored.\n\nExplain what replanting and splinting involve and how long the splint stays in.\n\nAnswer the appearance question directly: what the tooth will look like today, and what the options are if it does not survive.\n\nExplain what to expect over the coming days, including discolouration, and what would mean they should return sooner.\n\nGive clear aftercare: soft diet, careful cleaning around the splint, and no biting on the front teeth.\n\nAgree the follow-up appointments and make sure they leave with a written copy and a contact number."
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
      "setting": "General dental surgery, a routine examination, gum findings recorded during the check-up.",
      "candidateRole": "You are the dentist. Charting has shown generalised bleeding on probing, four to five millimetre pockets, and early bone loss.",
      "patientRole": "A 36-year-old accountant who thinks bleeding when brushing is normal, brushes hard twice a day with a medium brush, has never used interdental brushes, and has not seen a hygienist.",
      "patientConcern": "The patient assumes gum disease belongs to people who do not clean their teeth, and is quietly embarrassed to be told they have it.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient has noticed themselves, including bleeding, bad taste or gums shrinking away.\n\nAsk exactly what they do now: brush type, timing, technique, and anything used between the teeth.\n\nExplain what bleeding on brushing actually indicates, and correct the belief that it is normal or a sign of brushing well.\n\nShow them the chart or a mirror so that they can see what you are describing rather than take it on trust.\n\nExplain what the pocket depths and the early bone loss mean, in plain terms, over a timescale of years.\n\nSay clearly that this is common, that it is not a verdict on their hygiene alone, and that risk factors include smoking, diabetes and family history.\n\nExplain what treatment involves and what part of it is yours and what part is theirs.\n\nDemonstrate interdental cleaning and have them try it, rather than describing it.\n\nAgree a small number of specific daily changes rather than a list they will not follow.\n\nAgree the review interval and explain what you will measure next time so that progress is visible."
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
      "setting": "General dental surgery, an appointment requested by the patient because of sensitivity.",
      "candidateRole": "You are the dentist. The patient has marked generalised sensitivity after three weeks of a strong whitening kit bought online.",
      "patientRole": "A 31-year-old with a family event in five weeks who is reluctant to stop whitening despite pain on cold drinks and on breathing in cold air.",
      "patientConcern": "The cosmetic result matters more to the patient than the discomfort, so they will simply continue unless offered something that still gets them a result.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the kit is, how strong it is, how it is applied, and how long each application lasts.\n\nAsk when the sensitivity started, what triggers it, and whether it lingers after the trigger goes.\n\nExamine and explain what you find, including any gum irritation from an ill-fitting tray.\n\nExplain what causes whitening sensitivity and reassure them about what is and is not permanent damage.\n\nExplain the specific risks of an unsupervised high-concentration product, including gum burns and uneven results.\n\nAcknowledge the goal rather than dismissing it, and say plainly that you are not trying to talk them out of whiter teeth.\n\nOffer a workable alternative: a supervised course at a lower concentration, custom trays, and a realistic timescale against their event.\n\nAdvise on managing the sensitivity now, including desensitising toothpaste and a pause of a few days.\n\nAsk what they will actually do between now and the event, and plan around the honest answer.\n\nAgree a review point before the event so that the result can be checked rather than hoped for."
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
      "setting": "Private dental surgery, a treatment planning appointment after a cracked cusp was found last week.",
      "candidateRole": "You are the dentist. A heavily filled lower molar has cracked and you have recommended a crown to protect it.",
      "patientRole": "A 44-year-old self-employed plumber who has just been told the crown is only partly covered by his insurance and who has had large fillings placed before without problems.",
      "patientConcern": "The patient suspects he is being sold the expensive option and wants honest reassurance that the crown is genuinely necessary.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient has been told so far and what his understanding of the problem is.\n\nShow him the crack and explain what has happened to the tooth in plain terms.\n\nExplain why a large filling is not the same proposition in this tooth as in the ones he has had before.\n\nSet out the realistic options: crown, large filling, onlay, and doing nothing for now, with the likely outcome of each.\n\nGive an honest estimate of how long each option would be expected to last in a tooth like this.\n\nExplain what happens if the tooth splits, including the possibility of losing it altogether, without overstating it.\n\nAddress the suspicion of upselling head on, and say what you would do if it were your own tooth.\n\nGive clear figures, including what the insurance covers and what he would pay, and check whether payment over time is possible.\n\nOffer a middle path if there is one, such as a temporary measure now and a decision in a few months.\n\nAgree the next step and make clear that choosing the cheaper option is a legitimate decision you will support."
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
      "setting": "General dental surgery, a routine appointment, the patient at twenty-two weeks of pregnancy.",
      "candidateRole": "You are the dentist. The patient has a moderate cavity in a lower molar that needs restoring and is worried treatment could harm the baby.",
      "patientRole": "A 30-year-old at twenty-two weeks in her first pregnancy, hesitant about local anaesthetic and radiographs, told by a relative to avoid all treatment, and inclined to postpone everything until after the birth.",
      "patientConcern": "The patient believes any dental treatment in pregnancy carries risk, and needs specific evidence rather than general reassurance before she will agree.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what she has been told and by whom, and what specifically she is worried about.\n\nAsk about the pregnancy itself: how many weeks, whether it has been straightforward, and whether she is comfortable lying back.\n\nExplain what is known about dental local anaesthetic in pregnancy, and be specific rather than simply reassuring.\n\nExplain the position on radiographs, including the dose involved, the shielding used, and why one may not be needed today at all.\n\nExplain why the second trimester is the preferred window, and what happens to treatment options if she waits.\n\nExplain what an untreated cavity is likely to do over the next four months, including the risk of pain or infection at a worse time.\n\nAddress gum changes in pregnancy briefly, since she may be noticing bleeding and worrying about it.\n\nOffer practical adjustments: a shorter appointment, a more upright position, and a break whenever she needs one.\n\nAsk whether she would like to discuss it with her midwife first, and offer to put the information in writing.\n\nAgree a plan, and make it a plan she has chosen rather than accepted."
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
      "setting": "General dental surgery, a routine examination, the finding noticed during soft tissue screening.",
      "candidateRole": "You are the dentist. A persistent white patch on the lateral border of the tongue needs urgent specialist referral.",
      "patientRole": "A 55-year-old lorry driver who has smoked for thirty-five years and drinks most evenings, feels perfectly well, has no pain, and does not want a hospital appointment or time off work.",
      "patientConcern": "The patient is frightened of a cancer diagnosis and is more likely to avoid the referral than to attend, so avoidance must be anticipated rather than assumed away.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how long the patch has been there, whether the patient had noticed it, and whether anything has changed.\n\nAsk about pain, difficulty swallowing, hoarseness, lumps in the neck and weight loss.\n\nAsk about smoking and alcohol in a neutral way, without turning the conversation into a lecture.\n\nExplain what you can see and be honest that you cannot tell what it is by looking at it.\n\nExplain why it needs a specialist opinion and what the referral involves, including the likely timescale.\n\nSay plainly what the possibilities are, including that most such patches are not cancer, without offering a reassurance you cannot support.\n\nName the fear directly: that people often avoid these appointments because of what they might be told.\n\nExplain what earlier assessment changes, in terms of treatment and outcome, so that attendance has a reason attached.\n\nDiscuss smoking cessation and offer a concrete route to support rather than advice alone.\n\nAgree how the appointment will be confirmed, ask permission to follow up if it is not attended, and give him a written note of the plan."
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
      "setting": "Orthodontic clinic, a review appointment four months after fixed appliances were removed, the parent waiting outside at the patient's request.",
      "candidateRole": "You are the dentist. The patient's lower incisors have begun to relapse because the retainer has not been worn.",
      "patientRole": "A 16-year-old who finished two years of braces, finds the retainer uncomfortable and embarrassing, and does not see the point now that the braces are off.",
      "patientConcern": "The patient resents being told what to do and will disengage entirely if the conversation is conducted over their head or as a telling-off.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Speak to the patient rather than about them, and ask how they have got on since the braces came off.\n\nAsk what the retainer is actually like to wear: comfort, speech, sport, eating, and being seen in it.\n\nAsk when they last wore it and for how long, and make an honest answer easy to give.\n\nShow them the movement that has already happened, using the models or photographs from debond.\n\nExplain why teeth move back, in terms of the fibres and the bone rather than in terms of obedience.\n\nExplain what the next two years look like with and without the retainer, and be specific about how much more movement to expect.\n\nExplain the options honestly, including a fixed bonded retainer and a different removable design.\n\nAsk what they would be willing to do, rather than telling them what they must do, and negotiate from there.\n\nAgree a plan in their words, including how many nights a week and what happens if they miss.\n\nAgree what will be said to their parent, and how the next review will check the plan rather than their character."
    },
    "guidanceNote": "Give the teenager ownership of the plan; involving them in the solution works better than warnings about consequences."
  }
];
