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
    "profession": "OPTOMETRY",
    "title": "Optometry — Advising a new contact lens wearer on hygiene and safe wear",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A contact lens fitting and aftercare clinic.",
      "patientRole": "The patient is a 22-year-old university student, excited about lenses, who admits they sometimes sleep in lenses overnight and have topped up old solution rather than replacing it.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain the key hygiene steps for safe lens wear and why they matter. Address the habits of sleeping in lenses and reusing solution, and agree a simple daily routine the patient can stick to.",
      "candidateRole": "You are the optometrist. A patient has just been fitted with monthly reusable soft contact lenses and is attending a teach-and-aftercare appointment.",
      "patientConcern": "The patient thinks occasional overnight wear and topping up solution are harmless shortcuts everyone takes, and does not realise these raise the risk of serious eye infection."
    },
    "guidanceNote": "Frame hygiene around infection risk in concrete terms rather than rules for their own sake. Keep it practical and non-preachy — a friendly routine the student will actually follow beats an exhaustive list."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Advising a teenager spending long hours on screens about eye comfort",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A high-street optometry practice during a routine sight test.",
      "patientRole": "The patient is a 15-year-old who games and studies on screens for many hours a day and has heard that screens permanently damage your eyes.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Reassure the patient that their eyes are healthy and explain in simple terms why screens cause tired eyes and headaches. Address the belief that screens cause permanent damage, and suggest practical habits such as breaks, lighting and blinking to ease the symptoms.",
      "candidateRole": "You are the optometrist. The young patient has healthy eyes and a small, stable prescription, but reports tired, achy eyes and headaches after long gaming and study sessions.",
      "patientConcern": "The patient is worried that all their screen time is permanently ruining their eyesight, and wants to know whether they have to stop gaming."
    },
    "guidanceNote": "Reassure honestly — screen use causes temporary strain, not permanent damage. Keep advice teenager-friendly and realistic; suggest breaks and good lighting rather than telling them to stop the activity they enjoy."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Breaking news that a patient no longer meets the driving vision standard",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A community optometry practice consulting room.",
      "patientRole": "The patient is a 73-year-old who lives alone in a rural village and relies entirely on their car for shopping, appointments and seeing grandchildren.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Sensitively explain that the patient does not currently meet the vision standard for driving and what this means. Address the impact on their independence, outline the next steps and their responsibilities, and offer support and alternatives.",
      "candidateRole": "You are the optometrist. Testing shows the patient's best corrected vision now falls below the legal standard for driving, and this cannot be improved with new glasses.",
      "patientConcern": "The patient is frightened that losing their licence means losing all independence, and may become angry or plead for you to overlook the result."
    },
    "guidanceNote": "This is emotionally charged — lead with empathy and let the patient react before moving to next steps. Be honest and firm about the legal standard without lecturing, and pivot quickly to practical support and alternatives so they do not leave feeling abandoned."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Discussing a colour vision result affecting a career choice",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "An optometry practice consulting room after a colour vision assessment.",
      "patientRole": "The patient is a 17-year-old hoping to train as a commercial pilot, attending with their growing worry about whether this result ends that ambition.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Sensitively explain the colour vision result and what it does and does not mean for everyday life. Address its possible impact on the patient's career hopes honestly, while avoiding giving false certainty, and signpost where authoritative occupational advice can be obtained.",
      "candidateRole": "You are the optometrist. Testing confirms the patient has a moderate red-green colour vision deficiency that may affect entry to certain occupations.",
      "patientConcern": "The patient fears this single result has destroyed their dream career, and wants you either to fix the deficiency or tell them it will not matter."
    },
    "guidanceNote": "Be honest that the deficiency is lifelong and cannot be corrected, but stay within your scope — final fitness-to-fly decisions rest with aviation medical authorities. Balance honesty with not crushing a young person; signpost rather than pronounce."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Encouraging consistent use of glaucoma drops",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A community optometry practice glaucoma monitoring clinic.",
      "patientRole": "The patient is a 67-year-old retired bus driver who finds the nightly eye-drop routine fiddly and often forgets, especially when staying with family.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain why steady daily use of the drops matters even though the eyes feel completely normal. Explore honestly how often the drops are actually being missed, and work out a practical routine the patient can keep to. Agree a plan to recheck the pressure.",
      "candidateRole": "You are the optometrist seeing a patient with ocular hypertension who was started on latanoprost drops three months ago. The intraocular pressure has not improved as expected.",
      "patientConcern": "The patient assumes that because the eye feels fine and vision seems unchanged, missing drops now and then does no harm, and is slightly embarrassed to admit how many are skipped."
    },
    "guidanceNote": "Glaucoma is symptomless until late — make that the centre of your explanation rather than scolding. Ask about missed doses non-judgementally; patients under-report when they feel blamed."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Explaining a cataract referral to an anxious patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A community optometry practice consulting room, during a routine sight test.",
      "patientRole": "The patient is a 71-year-old who came in thinking they just needed stronger glasses and is alarmed by the word 'surgery'. They are worried the operation will be painful, will require a general anaesthetic, and that they might go blind if it goes wrong. They also care for a housebound spouse and worry about recovery time.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain in plain language why new glasses alone will not fix the problem; outline what cataract surgery involves at a basic level; reassure realistically about the procedure (typically local anaesthetic, day-case, short recovery) without over-promising; and agree a referral plan, checking the patient's understanding and concerns.",
      "candidateRole": "You are the optometrist. You have found a visually significant cataract in the patient's right eye (vision reduced to 6/18, with glare difficulty driving at night) and need to recommend referral for cataract surgery assessment.",
      "patientConcern": "The patient's core hidden fear is losing independence and being unable to care for their spouse during recovery — they will only consent once reassured recovery is usually quick and support can be arranged."
    },
    "guidanceNote": "Avoid jargon like 'phacoemulsification'; check understanding frequently. The hidden concern is the caregiving role, so explore the patient's home situation rather than only the medical facts — addressing it is what unlocks agreement."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Explaining patching treatment for a child with a lazy eye",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A paediatric optometry and orthoptic clinic.",
      "patientRole": "The patient is the parent of the child, who has tried patching for a fortnight but the child cries, peels the patch off, and the parent is ready to give up.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain why patching the stronger eye helps the weaker one develop, and why consistency over the coming weeks matters. Acknowledge how hard the routine is, and work out practical ways to make patching more bearable. Agree a realistic plan and follow-up.",
      "candidateRole": "You are the optometrist. A six-year-old has amblyopia in the right eye and has been prescribed occlusion (patching) of the stronger left eye for two hours daily.",
      "patientConcern": "The parent feels cruel covering the good eye and is losing faith that the treatment works, since the child clearly hates it and there is no visible improvement yet."
    },
    "guidanceNote": "Validate that patching is genuinely difficult before problem-solving. Explain the time-limited window for amblyopia treatment so the parent understands why persistence now matters, and offer concrete tactics like patching during a favourite activity."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Explaining why a child's prescription is changing more than expected",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A family optometry practice paediatric review.",
      "patientRole": "The patient is the parent of the child, alarmed that the prescription has jumped and convinced that watching too much television or wearing glasses has caused it.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain why short-sightedness commonly increases during childhood and address the parent's beliefs about the cause. Discuss what can help slow progression and the value of regular reviews, and agree a sensible follow-up plan.",
      "candidateRole": "You are the optometrist. A nine-year-old's short-sightedness has progressed noticeably since last year and is likely to keep increasing through childhood.",
      "patientConcern": "The parent blames themselves and the child's screen habits for the worsening sight and fears it will keep getting dramatically worse every year."
    },
    "guidanceNote": "Separate fact from myth gently — glasses do not worsen myopia, and the picture is more nuanced than 'too much television'. Offer balanced, evidence-based options for slowing progression without overpromising, and emphasise regular monitoring."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Managing chronic dry eye and setting realistic expectations",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A dry eye assessment clinic within an optometry practice.",
      "patientRole": "The patient is a 45-year-old office worker with gritty, tired, watery eyes who wants a one-off cure and is frustrated that previous drops 'did nothing'.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain in plain terms what is causing the dry eye symptoms and why it tends to be a long-term condition to manage rather than cure. Discuss warm compresses, lid hygiene, screen-break habits and drop use, and agree a realistic management plan.",
      "candidateRole": "You are the optometrist. The patient has evaporative dry eye linked to prolonged screen use and meibomian gland dysfunction.",
      "patientConcern": "The patient expects a quick fix and is sceptical of self-care measures, believing only a stronger prescription drop will help."
    },
    "guidanceNote": "Manage expectations honestly — dry eye is controlled, not cured. Explain why daily self-care like warm compresses tackles the cause while drops only ease symptoms, and check the patient understands the routine before they leave."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Persuading a patient to attend follow-up after a borderline pressure reading",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A community optometry practice consulting room.",
      "patientRole": "The patient is a 49-year-old with no symptoms who feels completely well and is reluctant to come back for what they see as fuss over a borderline number.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain why the borderline pressure reading and family history warrant further checks rather than ignoring them. Address the patient's reluctance to return when they feel fine, and agree a clear plan for the follow-up appointment and tests.",
      "candidateRole": "You are the optometrist. The patient has a borderline raised intraocular pressure and a family history of glaucoma, and you want them to return for repeat measurements and further tests.",
      "patientConcern": "The patient thinks that feeling perfectly well means nothing can be wrong, and views a repeat appointment as unnecessary and inconvenient."
    },
    "guidanceNote": "Use the family history to make the risk personal without frightening the patient. Stress that a single borderline reading needs confirming, not panic — frame follow-up as sensible caution that catches problems while they are still silent and treatable."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Reassuring a patient anxious about new floaters",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "An optometry practice following a dilated fundus examination.",
      "patientRole": "The patient is a 58-year-old who has been alarmed for a week by drifting specks and a few cobweb shapes, and has read worrying things online about going blind.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Reassure the patient that today's examination found no sign of a tear or detachment, and explain in plain terms what floaters are. Explain that they usually settle, and clearly describe the warning signs that mean they must seek urgent help.",
      "candidateRole": "You are the optometrist. After examination, the patient's new floaters are due to an uncomplicated posterior vitreous detachment with no retinal tear or detachment seen.",
      "patientConcern": "The patient is convinced the floaters signal a serious problem leading to blindness, and needs both genuine reassurance and clarity on when to worry."
    },
    "guidanceNote": "Reassurance must be paired with clear safety-netting — name the red flags (a sudden shower of floaters, flashing lights, or a shadow or curtain across vision) and what to do, so the patient leaves calm but not complacent."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Reassuring a patient reluctant about diabetic eye screening",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A high-street optometry practice during a routine sight test.",
      "patientRole": "The patient is a 54-year-old self-employed plumber who feels their sight is perfect and resents taking time off work for an appointment they see as pointless.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain in plain terms why diabetic screening is recommended even when vision is good. Address the patient's worry about time and disruption, and encourage them to attend their next screening. Offer to help arrange a convenient appointment.",
      "candidateRole": "You are the optometrist. The patient has type 2 diabetes and has skipped the last two annual diabetic retinal screening appointments.",
      "patientConcern": "The patient genuinely believes screening is unnecessary while they can read and drive normally, and is frustrated at being chased about an appointment they did not ask for."
    },
    "guidanceNote": "Acknowledge the time pressure of self-employment before persuading. Stress that early diabetic changes are treatable precisely because they appear before symptoms — that is the whole point of screening."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Recommending a cessation of overnight contact lens wear after an infection scare",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "An urgent contact lens aftercare appointment.",
      "patientRole": "The patient is a 29-year-old shift worker who routinely sleeps in lenses for convenience and is reluctant to give up overnight wear despite the current painful episode.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain what the current eye problem is and how overnight wear contributed to it. Convey the seriousness without alarming the patient unduly, agree immediate steps to protect the eye, and negotiate a safer long-term wearing pattern.",
      "candidateRole": "You are the optometrist. The patient has a painful red eye with an early corneal infiltrate linked to sleeping in monthly lenses, and needs prompt management and a change of habits.",
      "patientConcern": "The patient values the convenience of never removing lenses around irregular shifts and hopes to keep wearing them overnight once this episode settles."
    },
    "guidanceNote": "Make the link between the habit and the painful eye explicit so the patient owns the risk. Negotiate rather than dictate — explore daily disposables or a no-overnight rule that fits shift work, since a plan they reject will not be followed."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Sudden visual change and possible retinal detachment",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "An optometry practice; the patient has telephoned and been brought in the same morning as an emergency appointment.",
      "patientRole": "The patient is a 55-year-old, highly short-sighted, who hoped it was 'just tiredness' and wants to go to an important family wedding this afternoon. They are reluctant to spend the day in hospital and keep asking whether it can wait until next week.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Sensitively convey the urgency and why same-day assessment is essential; explain in lay terms what may be happening and what the hospital will do; address the patient's wish to delay; and arrange immediate referral, confirming how the patient will get to the hospital eye service safely.",
      "candidateRole": "You are the optometrist. The patient reports a sudden shower of new floaters and flashing lights in the left eye since yesterday, with a grey 'curtain' now spreading across the lower part of their vision. Your examination raises strong suspicion of a retinal detachment requiring urgent hospital eye-service assessment today.",
      "patientConcern": "The patient's hidden concern is fear of letting their family down at the wedding; they need to hear clearly that delay risks permanent loss of sight in that eye before they will agree to go now."
    },
    "guidanceNote": "Balance honesty about the sight-threatening risk with calm reassurance — do not minimise to placate the patient. Acknowledge the wedding explicitly; naming the genuine trade-off (a few hours now versus permanent vision loss) is usually what secures agreement to attend today."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "OPTOMETRY",
    "title": "Optometry — Supporting a parent whose young child needs glasses full-time",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "A family optometry practice paediatric clinic.",
      "patientRole": "The patient is the parent of the child, who is upset and worried that wearing glasses so young means the eyes are weak or will get worse over time.",
      "prepSeconds": 60,
      "speakSeconds": 300,
      "candidateCard": "Explain why full-time glasses wear is recommended and reassure the parent about the long-term outlook. Address the worry that glasses weaken the eyes, and offer practical tips for helping a young child accept wearing them.",
      "candidateRole": "You are the optometrist. A five-year-old has been found to be moderately long-sighted and needs glasses for all waking hours.",
      "patientConcern": "The parent fears glasses will make their child's eyes dependent and weaker, and is anxious about teasing at school."
    },
    "guidanceNote": "Parents often believe glasses harm developing eyes — gently correct this without dismissing the worry. Keep your language simple and warm; this is a FOUNDATION-level reassurance task, not a technical lecture."
  }
];
