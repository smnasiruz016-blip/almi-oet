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
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-adult-who-stammers-asking-about-job-interview-speaking",
    "title": "Speech Pathology — Adult who stammers asking about job-interview speaking",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Outpatient speech and language therapy clinic, a self-referred appointment booked three weeks before an interview. The interview is for a graduate trainee post at a regional engineering firm, and the patient found this clinic through a self-help group for adults who stammer.",
      "candidateRole": "You are the speech and language therapist seeing an adult who stammers and has an important job interview in three weeks.",
      "patientRole": "A 26-year-old graduate who has withdrawn from two previous interviews, avoids telephone calls, and has asked whether you can make them fluent in time. They work part-time in a bookshop, where face-to-face conversation with regular customers feels manageable. Outside work they play five-a-side football on Thursday evenings, and they mention that the car park was full this morning, so they arrived flustered after parking on a side street.",
      "patientConcern": "The patient believes any visible stammering will cost them the job, feels deep shame about it, and is hoping for a promise of fluency.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the stammer: when it is worst, what situations they avoid, and what has helped before.\n\nAsk what happened at the previous interviews and what they were most afraid of.\n\nAsk what they are hoping for from these three weeks, and let the hope of complete fluency be stated.\n\nAcknowledge how much the interview matters before addressing what is realistic.\n\nExplain honestly that the goal is managing the stammer rather than eliminating it, and why.\n\nExplain what three weeks can genuinely achieve, and what a longer course of therapy could offer afterwards.\n\nIntroduce two or three techniques they could use under pressure, and practise one now.\n\nIntroduce the idea of voluntary disclosure: what it is, what it typically does to the listener, and what it does to their own tension.\n\nExplore whether and how they would want to mention it, and let them reach their own decision.\n\nDiscuss practical interview preparation: pacing, pauses, and what to do if a block happens mid-answer.\n\nAgree what they will practise, arrange a session before the interview, and offer one afterwards."
    },
    "guidanceNote": "Resist promising fluency. Shifting the goal toward confident, effective communication and exploring disclosure honours the patient's autonomy and is more truthful than a cure narrative."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-call-centre-worker-with-vocal-fatigue-and-hoarseness",
    "title": "Speech Pathology — Call-centre worker with vocal fatigue and hoarseness",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Outpatient voice clinic, a first appointment following GP referral. The patient has come straight from an early shift and is still wearing a work lanyard.",
      "candidateRole": "You are the speech and language therapist seeing an adult whose voice becomes hoarse and tired by the end of each shift. This is your first meeting with them.",
      "patientRole": "A 34-year-old call centre worker, hoarse for about two months, on the phones for seven hours a day, who drinks four coffees and little water, clears the throat constantly, and cannot afford time off. They work in the customer complaints team, where calls are often long and tense, and they do not smoke. They spent last weekend helping a sister move house and joke that carrying boxes was easier than talking. They are keen to finish in time to collect a child from a swimming lesson.",
      "patientConcern": "The patient is worried the hoarseness could be cancer and is equally anxious that voice rest would cost them their job and income.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask about the voice: when it started, how it changes through the shift, and whether it recovers overnight.\n\nAsk about the working day: hours on the phone, breaks, background noise and headset use.\n\nAsk about fluids, caffeine, throat clearing, smoking and reflux symptoms.\n\nAsk what worries them, and give room for the cancer question to be asked.\n\nAddress that fear directly and honestly, and explain what the examination will and will not settle.\n\nExplain what you have heard in the voice and how heavy use, dehydration and throat clearing produce it.\n\nExplain what throat clearing does to the vocal folds and offer a specific alternative to it.\n\nRecommend practical vocal hygiene: water within reach, caffeine reduction, and voice rest built into existing breaks.\n\nAddress the job worry directly: explain that voice rest here means short planned breaks rather than time off.\n\nExplain why hoarseness lasting more than three weeks needs laryngoscopy before voice therapy starts, and what it involves.\n\nAgree two or three changes for this week, arrange the laryngoscopy referral today, and set the review for after the examination."
    },
    "guidanceNote": "Give concrete vocal hygiene advice the patient can use mid-shift. Acknowledge the job pressure rather than simply telling them to rest, and explain medical review reassuringly, not alarmingly."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-daughter-of-a-parent-with-dementia-struggling-to-converse",
    "title": "Speech Pathology — Daughter of a parent with dementia struggling to converse",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Memory clinic consulting room, an appointment with the daughter alone at her request. She arranged the appointment herself after a nurse in the memory clinic suggested it, and has taken the afternoon off work to attend.",
      "candidateRole": "You are the speech and language therapist advising the daughter of a parent in the moderate stages of dementia.",
      "patientRole": "The daughter of a 78-year-old with Alzheimer's disease, visiting three times a week, who finds the same questions repeated within minutes and leaves each visit in tears. She is an only child, works as a school administrator, and usually visits in the late afternoon. Her mother was a primary school teacher who loved choral singing. She mentions that her own teenage son has just started driving lessons, and that she nearly missed today because of roadworks on the ring road.",
      "patientConcern": "She is grieving that her mother no longer seems to know her and feels guilty for the impatience she hears in her own voice.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what conversations are like now and what has changed over the past year.\n\nAsk what she finds hardest, and let the grief and the guilt both be spoken.\n\nAcknowledge that what she is describing is a loss, and do not move immediately to strategies.\n\nExplain how dementia affects language: word-finding, comprehension, and holding a thread.\n\nExplain why the same question is repeated and what that tells you about memory rather than about interest.\n\nExplain why correcting or quizzing usually increases distress, and what to do instead.\n\nOffer practical strategies: short sentences, one idea at a time, allowing time, and using the environment.\n\nExplain the value of tone, touch and familiar music, since these often outlast words.\n\nAddress the impatience directly and normalise it, without excusing her from the strategies.\n\nSuggest activities that do not depend on conversation, so visits have another shape.\n\nExplain what to expect as the dementia progresses, so the next change is not another shock.\n\nAgree what she will try, signpost carer support, and arrange to speak again."
    },
    "guidanceNote": "Acknowledge the ongoing grief, not just the techniques. Advising her to avoid quizzing or correcting reduces conflict, and naming her guilt lets her hear that impatience is human."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-introducing-a-communication-device-to-a-teenager-with-cerebral-palsy",
    "title": "Speech Pathology — Introducing a communication device to a teenager with cerebral palsy",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Paediatric rehabilitation outpatient service, a review appointment, the parent waiting outside at the patient's request. A loan device from the service equipment library is on the table, charged and ready to demonstrate.",
      "candidateRole": "You are the speech and language therapist introducing an augmentative and alternative communication device to a teenager with cerebral palsy and dysarthria. You have met them once before, at the initial assessment.",
      "patientRole": "A 15-year-old whose speech is understood by family but not by teachers or peers, who is doing well academically and has recently started a new school. They type quickly on a phone, mostly to message friends from their old school, and their favourite subjects are maths and history. They support a local football team and mention, with some irritation, that the school taxi was late twice last week.",
      "patientConcern": "The teenager fears the device will mark them out as disabled at school, and worries that using it means people have given up on their own voice.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Speak to the teenager directly and ask how communication is going at the new school.\n\nAsk where they are understood and where they are not, and what happens when they are not.\n\nAsk what they think a device would mean, and let the fear about how it looks be said.\n\nAddress the second worry directly: explain that the device supplements speech rather than replacing it.\n\nExplain what the device can do and show it rather than describing it.\n\nExplain how other young people use one: for some situations and not others, and how that choice is theirs.\n\nAsk where they would and would not want to use it, and take that answer as the plan.\n\nDiscuss how it looks and sounds, including voice choice, and what can be customised.\n\nDiscuss the school: who would need to know, what would be said, and who would say it.\n\nExplain the trial period, and that nothing is being decided permanently today.\n\nAgree a next step chosen by them, and agree what will be said to their parent."
    },
    "guidanceNote": "Frame AAC as adding a tool, not replacing the voice. Centring the teenager's choices about when to use it respects autonomy and reduces the fear of standing out."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-parent-anxious-about-a-late-talking-two-year-old",
    "title": "Speech Pathology — Parent anxious about a late-talking two-year-old",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community child development centre, a first assessment appointment, the child playing during the session. The room has a box of toy cars, a farm set and some picture books on a low shelf.",
      "candidateRole": "You are the speech and language therapist assessing a two-year-old who uses around ten single words.",
      "patientRole": "The parent of the two-year-old, comparing him constantly with a cousin of the same age who speaks in sentences, and asking whether screen time is to blame. The parent works part-time from home, and he spends two mornings a week with a childminder, who has not raised any concerns. He is their first child and his newborn hearing screen was clear. The parent mentions that the family has just returned from a week at the seaside.",
      "patientConcern": "The parent is secretly worried the child is autistic and that they have caused the delay through screen time at home.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the child does communicate: words, sounds, pointing, gesture and eye contact.\n\nAsk about understanding, since comprehension matters more at this age than expression.\n\nAsk about play, social interest, and how he responds to his name.\n\nAsk what the parent is most worried about, and give room for the autism question rather than waiting to be asked.\n\nExplain what you observed today, specifically, so the discussion rests on this child rather than on averages.\n\nExplain the wide range of normal early language while taking the concern seriously.\n\nAddress the screen time question honestly: what it does and does not do, and why the guilt is misplaced.\n\nAddress the autism question directly, saying what today shows and what it cannot yet rule in or out.\n\nSuggest simple everyday strategies: commenting rather than questioning, waiting, and following the child's lead.\n\nExplain what would prompt referral for a wider developmental assessment.\n\nExplain what would prompt an earlier appointment, such as loss of a word he already had.\n\nAgree the strategies for the coming weeks and arrange a review with a date."
    },
    "guidanceNote": "Take the worry seriously without over-promising. Naming the unspoken fears about autism and screen time, only if the parent raises them, lets you answer honestly rather than dismissively."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-parent-declining-recommended-therapy-for-a-child-with-a-lisp",
    "title": "Speech Pathology — Parent declining recommended therapy for a child with a lisp",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community child health clinic, a review appointment following school referral. The school letter describes a friendly, confident child, and the parent has arrived with the two younger children in a double pushchair.",
      "candidateRole": "You are the speech and language therapist. A seven-year-old has a persistent interdental lisp affecting the s and z sounds. You assessed the child at the previous appointment and recommended a short block of therapy.",
      "patientRole": "The parent of the seven-year-old, who works shifts, has two younger children, thinks the lisp is endearing and expects it to sort itself out. They work rotating shifts at a distribution warehouse, and their partner works long daytime hours, so childcare is tight. The child loves dinosaurs and swimming. The parent remembers having a lisp themselves as a child and says it vanished without any help.",
      "patientConcern": "The parent is stretched, worries about the time and travel that appointments would take, and does not want the child to feel there is something wrong with them.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the parent has noticed and whether the child or anyone else has commented on it.\n\nAsk what the school said and what prompted the referral.\n\nAsk what would make attending difficult, practically, and listen to the whole answer.\n\nAcknowledge that the lisp is not causing harm today and that the parent's instinct is understandable.\n\nExplain why this particular pattern is unlikely to resolve on its own at seven, and what the evidence shows.\n\nExplain what it could mean later, mainly for confidence and how other children respond in secondary school, and that any link with spelling is modest.\n\nExplain what therapy would actually involve: how many sessions, how long each, and how much home practice.\n\nAddress the concern about labelling directly, and explain how therapy is presented to a child of this age.\n\nDiscuss the practical options: after-school appointments, school-based sessions, or a parent-delivered programme.\n\nRespect that the decision is the parent's and say so plainly, without withdrawing the recommendation.\n\nAgree a manageable next step, even if that is one appointment, and agree how to come back later."
    },
    "guidanceNote": "Respect the parent's choice while being clear that this lisp is unlikely to self-correct. Offering a small, low-burden first step is more persuasive than pressing for a full course of therapy."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-parent-of-a-child-who-stammers",
    "title": "Speech Pathology — Parent of a child who stammers",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Paediatric speech and language clinic, a first appointment following a health visitor referral. The health visitor noted that the child's language is otherwise developing well, and the appointment was moved to the morning because of a staff training session.",
      "candidateRole": "You are the speech and language therapist meeting the parent of a four-year-old who has stammered for five months.",
      "patientRole": "The parent of a four-year-old with word and sound repetitions, occasional blocks and some facial tension, who has been correcting the child and finishing sentences. The child attends nursery three days a week, has an older sister, and the grandparents help with pick-ups. The parent works as a dental receptionist. They mention that the family dog has just had puppies, which the child talks about constantly.",
      "patientConcern": "The parent feels overwhelming guilt that their own correcting caused the stammer, and will not absorb any advice until that is addressed warmly and directly.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the parent has noticed, when it started, and whether it varies from day to day.\n\nAsk what they have tried and what they were told to do by others.\n\nAsk what they think caused it, and let the guilt be spoken rather than inferred.\n\nAddress the guilt directly and warmly: explain that parents do not cause stammering, and say it plainly.\n\nExplain what is known about why stammering starts at this age, and about natural recovery.\n\nExplain why monitoring matters despite the good odds, and what raises or lowers those odds.\n\nGive two or three interaction strategies: slowing your own speech, pausing before replying, and reducing questions.\n\nExplain clearly what not to do: finishing sentences, telling the child to slow down or take a breath.\n\nAnswer the question about lifelong stammering honestly rather than reassuringly.\n\nExplain when therapy would step up and what that would involve.\n\nExplain what to do when the child becomes frustrated or comments on their own speech.\n\nAgree a review in a set timeframe, and give safety-net advice about what would prompt earlier contact."
    },
    "guidanceNote": "The single highest-impact move is to name and lift the parent's guilt early — stammering is neurological/developmental, not caused by correction. Give only a few concrete strategies; overloading an anxious parent reduces what they retain."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-parent-worried-about-unclear-speech-in-a-four-year-old",
    "title": "Speech Pathology — Parent worried about unclear speech in a four-year-old",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community paediatric clinic, a first assessment following a preschool referral. The preschool letter describes him as bright and well settled, and he spent several minutes watching the waiting-room fish tank before coming in.",
      "candidateRole": "You are the speech and language therapist assessing a four-year-old whose speech is difficult for unfamiliar listeners to understand. You have completed a speech sound assessment with him during this session.",
      "patientRole": "The parent of the four-year-old, told by the preschool that other children cannot understand him, who understands him perfectly herself and feels the preschool is exaggerating. She works as a hairdresser and he is her only child. He loves trains and chatters constantly at home, and his grandmother, who sees him every weekend, also understands him easily. She mentions that she has recently started evening classes in bookkeeping.",
      "patientConcern": "The parent feels embarrassed and judged by the preschool and is worried the child will be bullied or left behind when he starts school.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the parent has noticed at home and whether unfamiliar people ask her to interpret.\n\nAsk exactly what the preschool said and how it was said.\n\nAsk about hearing, ear infections and whether hearing has ever been tested.\n\nAcknowledge that hearing this from the preschool was hard, and take her view seriously as well as theirs.\n\nExplain what you found today: which sounds are difficult and which errors are still normal at four.\n\nExplain the difference between a delay and a disorder in terms she can act on.\n\nExplain how intelligibility is measured and what a realistic target is by school entry.\n\nAddress the bullying and school worry directly rather than leaving it unspoken.\n\nOutline the plan: a hearing test first, a small number of sessions, a home practice programme, and a review.\n\nExplain what she can do at home, with a demonstration rather than an instruction.\n\nExplain why his hearing is tested now, before therapy, and what signs at home should make her tell you sooner.\n\nAgree what will be shared with the preschool, with her consent, and set the review date."
    },
    "guidanceNote": "Separate age-appropriate errors from those needing work so the parent is not over-alarmed. Give one or two simple home activities rather than a complex program."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-patient-facing-swallowing-changes-before-head-and-neck-cancer-treatment",
    "title": "Speech Pathology — Patient facing swallowing changes before head and neck cancer treatment",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Head and neck cancer pre-treatment clinic, a first appointment two weeks before chemoradiotherapy begins. The clinic is in the same outpatient wing as radiotherapy planning, and the patient's partner has come with them, holding a folder of leaflets.",
      "candidateRole": "You are the speech and language therapist meeting a patient before chemoradiotherapy for an oropharyngeal cancer. You work alongside the dietitian in this clinic.",
      "patientRole": "A 57-year-old who has had four appointments this week already, has been told the swallow and voice may change, and is struggling to take in any more information. They run a small removals business with a brother and say they are eating and speaking normally at the moment. They are a keen cook who makes curries for friends at weekends, and mention that a hip operation some years ago went smoothly.",
      "patientConcern": "The patient is frightened of permanently losing the ability to eat and speak normally, and is overwhelmed at adding speech therapy to an already heavy treatment plan.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have already been told about the treatment and its effects.\n\nAsk how they are managing with the number of appointments, and acknowledge it before adding another.\n\nAsk about swallowing and voice now, so that a baseline exists before treatment starts.\n\nExplain what typically happens to swallowing during chemoradiotherapy and over what timescale.\n\nExplain why exercises started before treatment matter, in terms of the muscles that stop being used.\n\nBe honest about what is and is not known about recovery, rather than offering blanket reassurance.\n\nAnswer the eating question directly, including the possibility of a feeding tube and what that would mean.\n\nExplain the monitoring during treatment and who they will see each week.\n\nTeach one or two exercises now and have them do each with you.\n\nExplain what to expect in the worst weeks, so the low point is anticipated rather than a shock.\n\nExplain who to contact during treatment if swallowing or the voice changes suddenly.\n\nAgree a manageable routine, give written instructions, and arrange the next contact."
    },
    "guidanceNote": "Be honest about likely changes while explaining why early exercises help preserve function. Pace the information and check what the patient most wants to know rather than delivering everything at once."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-reluctance-to-accept-thickened-fluids-after-dysphagia-assessment",
    "title": "Speech Pathology — Reluctance to accept thickened fluids after dysphagia assessment",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Acute medical ward, at the bedside, immediately after a bedside swallowing assessment. A healthcare assistant has just brought the drinks trolley round, and the curtains are partly drawn.",
      "candidateRole": "You are the speech and language therapist. The assessment shows coughing on thin fluids and you are recommending mildly thickened fluids. The ward doctors asked for the assessment once the pneumonia began to settle.",
      "patientRole": "An 82-year-old recovering from aspiration pneumonia and now medically improving, who has tasted the thickened water, pushed the beaker away, and asked to be left alone. They worked as a postman for forty years and still do the crossword every morning. They have always drunk strong tea and say a cup of tea is their main pleasure on the ward. Their daughter visits most evenings, and they mention that a cataract operation last year went well.",
      "patientConcern": "The patient finds the thickened fluid degrading, fears it will be imposed forever, and is quietly worried it signals that they are getting worse.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they thought of it and let them say plainly how unpleasant it was.\n\nAsk what they understood about why the assessment was done.\n\nAcknowledge how unpleasant the texture is and do not pretend they will get used to it.\n\nExplain what you observed during the assessment, specifically, so the recommendation has visible grounds.\n\nExplain aspiration in plain language and link it to the pneumonia that brought them in.\n\nAddress the fear about deterioration directly: explain what this does and does not mean about their recovery.\n\nExplain that this is a trial with a review date rather than a permanent decision.\n\nDiscuss what can be improved: the type of drink thickened, the temperature, and which fluids taste least affected.\n\nExplain what else can be done, including whether a free water protocol could be considered once the team agree the chest has settled, and the risks of each.\n\nRespect their right to decline, explain what informed risk-taking would mean, and involve the team if they choose it.\n\nAgree a short trial with a specific review date, and record what has been agreed."
    },
    "guidanceNote": "Validate the unpleasant texture honestly before persuading. Offering a defined trial with a review date earns more cooperation than insisting the change is permanent."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-resistance-to-a-softer-diet-texture-in-a-residential-care-home",
    "title": "Speech Pathology — Resistance to a softer diet texture in a residential care home",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Residential care home, in the resident's own room after two observed meals. The room overlooks the garden, and a carer who knows the resident well has stayed at their request.",
      "candidateRole": "You are the speech and language therapist reviewing a resident who has been coughing during meals and recommending a minced and moist texture.",
      "patientRole": "An 86-year-old who has coughed at most meals for a fortnight, eats every meal in the dining room, and says the food is the best part of the day. They were a baker for most of their working life and still talk about bread with real authority. Their son visits on Sundays, usually with a cake from a favourite shop, and they enjoy the quiz on Wednesday afternoons.",
      "patientConcern": "The resident feels that changing the food removes one of the few pleasures left and fears it is the start of losing everything else.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what mealtimes are like and whether they have noticed the coughing themselves.\n\nAsk what they most enjoy eating and what they would not want to lose.\n\nAcknowledge how much mealtimes matter, and say it before making any recommendation.\n\nExplain what the coughing suggests and what you observed at the two meals.\n\nExplain the risk in plain language, including what a chest infection at their age would mean.\n\nExplain what the recommended texture actually is, since most people imagine something worse.\n\nDiscuss how meals can still be enjoyable at that texture: separate flavours, presentation and seasoning.\n\nAddress the fear about independence directly, and be clear about what is and is not being changed.\n\nExplain their right to decline and what an informed decision to continue would involve.\n\nInvolve them in the decision rather than presenting it as settled.\n\nExplain what the care staff will be asked to watch for and record at each meal.\n\nExplain how the texture could be upgraded again if the coughing settles.\n\nAgree a plan and a review date, and agree what would be said to their family."
    },
    "guidanceNote": "Honour the resident's right to choose, including informed risk. Linking the change to keeping mealtimes enjoyable and safe, with their input, works better than imposing a rule."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-spouse-of-a-man-with-non-fluent-aphasia-after-stroke",
    "title": "Speech Pathology — Spouse of a man with non-fluent aphasia after stroke",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Stroke rehabilitation unit interview room, two weeks after the stroke, the patient on the ward. She has come straight from his bedside, where she spent the morning.",
      "candidateRole": "You are the speech and language therapist meeting the wife of a man with non-fluent aphasia after a left-hemisphere stroke.",
      "patientRole": "The wife of a 70-year-old, married for forty-five years, who answers every question for him, is exhausted, and has stopped bringing their grandchildren in. Her husband was a carpenter who later ran a woodworking class at the local community centre. Their two adult children live some distance away and phone most evenings. She is a keen gardener, mentions that a late frost ruined her tomatoes, and finds the parking at the unit expensive.",
      "patientConcern": "She fears her husband's mind is gone and that he will never speak normally again, and feels guilty that helping him quickly may be holding him back.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the past two weeks have been for her, before discussing him at all.\n\nAsk what she has noticed about his communication and what worries her most.\n\nExplain what non-fluent aphasia is, and say plainly that it is a language problem and not a loss of intelligence.\n\nGive an example of what he understands and can do, so the reassurance is evidenced rather than asserted.\n\nExplain what recovery typically looks like over months, honestly, without promising a full return.\n\nAddress the habit of answering for him gently, framing it as care rather than as a mistake.\n\nExplain what supported conversation means and demonstrate one technique with her.\n\nGive her practical tools: writing key words, drawing, yes and no questions, and allowing silence.\n\nDiscuss the grandchildren and why bringing them back matters for both of them.\n\nAsk what she needs herself, and signpost stroke association and carer support.\n\nExplain what the therapy programme on the ward involves, so she can see what is being worked on.\n\nAgree what she will try this week and invite her to the next therapy session."
    },
    "guidanceNote": "Separate language from intellect early to reduce her fear. Reframe finishing his sentences as understandable love, then offer one or two concrete techniques rather than a long list."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-teenager-whose-unclear-speech-is-linked-to-undiagnosed-hearing-loss",
    "title": "Speech Pathology — Teenager whose unclear speech is linked to undiagnosed hearing loss",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "School-based therapy service interview room, a first appointment following a teacher's referral. The room is next to the school library and is quiet during lessons, and the appointment was set for early morning so she could come before work.",
      "candidateRole": "You are the speech and language therapist. A teenager's speech sound errors and missed word endings suggest a possible undetected hearing problem.",
      "patientRole": "The mother of a 14-year-old, who assumed the unclear speech was laziness or a habit he would grow out of, and who has always found him inattentive at home. She works as a nurse, often on night shifts, and has two younger daughters. Her son likes art and cycling and has never complained about his hearing. She mentions that her car failed its MOT this week.",
      "patientConcern": "The mother feels she should have noticed a hearing problem years ago and fears the referral means something serious has been missed all this time.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what she has noticed about his speech and about how he responds at home.\n\nAsk about the school reports and what teachers have said about attention.\n\nAsk about ear infections, glue ear, head injury, loud noise exposure and any family history.\n\nExplain the pattern you have found: which sounds are affected and why that pattern points towards hearing.\n\nExplain how high-frequency sounds are lost first and why that produces exactly these errors.\n\nAddress her surprise sensitively, and explain why this is commonly missed rather than negligent.\n\nAddress the guilt directly: explain that a mild or high-frequency loss is easy to mistake for inattention.\n\nExplain what an audiology assessment involves and how soon it can be arranged.\n\nExplain why hearing must be assessed before further speech therapy, and what would follow each result.\n\nExplain what could be done at school in the meantime: seating, the teacher facing him, and repeating instructions.\n\nAgree the referral and how quickly it can be arranged.\n\nAgree what will be said to him about it, and arrange to review after the audiology result."
    },
    "guidanceNote": "Explain the hearing-speech link clearly and frame the audiology referral as a sensible next step, not a failure. Address the mother's guilt so it does not block her from following up."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-voice-disorder-in-a-teacher",
    "title": "Speech Pathology — Voice disorder in a teacher",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Outpatient voice clinic at a community health centre, following laryngoscopy by the ENT team. The ENT letter arrived before the appointment, and the patient has a printed copy in hand.",
      "candidateRole": "You are the speech and language therapist. Laryngoscopy showed bilateral vocal fold nodules with no sinister features, and you are explaining the diagnosis and starting therapy.",
      "patientRole": "A 41-year-old full-time secondary school teacher whose voice has been rough and tired for four months, worse by the afternoon, who drinks a lot of coffee and shouts over noisy classes. They teach geography, run a lunchtime chess club, and hope to lead a field trip next term. They have no children of their own but joke that they have two hundred. They mention that an ankle sprained while hiking in the spring has fully healed.",
      "patientConcern": "The patient is terrified the diagnosis means cancer and that they may have to give up teaching, and cannot engage with advice until both are addressed.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what they have been told so far and what they understood from the ENT appointment.\n\nAsk what they are most worried about, and let the cancer fear be named.\n\nSay clearly and early that the nodules are benign and that nothing sinister was seen.\n\nAddress the teaching question directly and explain that giving up the job is not the recommendation.\n\nExplain what nodules are, how they form, and why they are common in people who use their voice heavily.\n\nConnect them to the specific habits described: shouting over noise, throat clearing and low fluid intake.\n\nExplain that voice therapy resolves most nodules without surgery, and how long that typically takes.\n\nNegotiate two or three practical changes: hydration, an alternative to throat clearing, and gaining attention without shouting.\n\nDiscuss classroom amplification and what occupational health could arrange.\n\nTeach one voice technique now and have them try it, so therapy is not only advice.\n\nExplain what would mean returning to ENT rather than continuing with therapy.\n\nCheck understanding, agree the therapy schedule, and set the review point."
    },
    "guidanceNote": "Resist launching straight into vocal hygiene tips. Surface and dismantle the cancer fear and the fear of losing their job first; only then will advice land. Use everyday words, not 'benign mucosal lesions'."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "SPEECH_PATHOLOGY",
    "slug": "spk-speech-pathology-young-man-with-a-mild-brain-injury-frustrated-by-word-finding-problems",
    "title": "Speech Pathology — Young man with a mild brain injury frustrated by word-finding problems",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community rehabilitation clinic, a review appointment ten weeks after the injury. The injury happened in a cycling accident, and his mother drove him here and is waiting in the car park.",
      "candidateRole": "You are the speech and language therapist seeing a young man with word-finding difficulties and slowed processing after a mild traumatic brain injury.",
      "patientRole": "A 21-year-old university student, keen to resume his degree next month, who loses words mid-sentence, is exhausted by lectures, and has stopped going out with friends. He studies history, has one year of the degree left, and shares a flat with two friends. He used to play in a five-a-side team. He mentions that his phone screen cracked last week and he keeps meaning to get it repaired.",
      "patientConcern": "The patient fears he is permanently less capable than before and that a slow return to study will mean falling behind his peers for good.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what he notices: when words go, in what situations, and what he does then.\n\nAsk about fatigue, concentration and how a full day of lectures has felt.\n\nAsk what he is most worried about, and let the fear about permanence be spoken.\n\nExplain why word-finding and processing speed are affected after a brain injury of this kind.\n\nExplain the recovery trajectory honestly: that improvement often continues over months, without promising a specific endpoint.\n\nShow him the change since the first assessment, so progress is measured rather than felt.\n\nTeach compensatory strategies: circumlocution, buying time, and cueing himself.\n\nDiscuss fatigue management, since fatigue makes the word-finding markedly worse.\n\nDiscuss the return to study: reduced load, recording lectures, extra time, and disability support.\n\nAddress the comparison with peers directly, and what a staged return actually costs in time.\n\nExplain what would mean seeking medical review, such as worsening headache or new symptoms.\n\nExplain how progress will be measured, so improvement is visible rather than guessed at.\n\nAgree strategies to practise, agree who at the university will be contacted, and set the review."
    },
    "guidanceNote": "Validate the frustration and offer practical word-finding strategies. Be honest about a realistic, gradual return to study while protecting hope, and link fatigue management to his goals."
  }
];
