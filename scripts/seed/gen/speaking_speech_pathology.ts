import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Reluctance to accept thickened fluids after dysphagia assessment",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "An acute medical ward in a public hospital",
      candidateRole: "You are the speech pathologist who has just completed a bedside swallowing assessment for an inpatient recovering from pneumonia.",
      patientRole: "The patient is an older adult who has been told they need mildly thickened fluids and finds the texture unpleasant.",
      candidateCard: "Explain why thickened fluids have been recommended after the assessment. Acknowledge how unpleasant the texture is, describe the aspiration risk in plain language, and agree a short trial period with a review date rather than presenting it as permanent.",
      patientConcern: "The patient feels the thickened fluid is degrading and humiliating, fears it will be forced on them forever, and is quietly worried it signals they are getting worse.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Validate the unpleasant texture honestly before persuading. Offering a defined trial with a review date earns more cooperation than insisting the change is permanent."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Spouse of a man with non-fluent aphasia after stroke",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A stroke rehabilitation unit interview room",
      candidateRole: "You are the speech pathologist meeting the wife of a man who developed non-fluent aphasia two weeks after a left-hemisphere stroke.",
      patientRole: "The patient is the wife, who keeps finishing her husband's sentences and is exhausted and frightened by the change in him.",
      candidateCard: "Explain what non-fluent aphasia is and that it is a language problem, not a loss of intelligence. Coach her on supportive communication strategies, and gently address the habit of answering for him without making her feel criticised.",
      patientConcern: "The wife fears her husband's mind is gone and that he will never speak normally again, and she feels guilty that helping him quickly may be holding him back.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Separate language from intellect early to reduce her fear. Reframe finishing his sentences as understandable love, then offer one or two concrete techniques rather than a long list."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Parent anxious about a late-talking two-year-old",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A community child development centre",
      candidateRole: "You are the speech pathologist seeing a parent whose two-year-old uses only a handful of single words.",
      patientRole: "The patient is the parent, who has been comparing their child to a cousin of the same age who speaks in sentences.",
      candidateCard: "Reassure the parent about the wide range of normal early language while taking their concern seriously. Explain what you observed today and suggest simple everyday strategies to encourage talking, and agree a follow-up review.",
      patientConcern: "The parent is secretly worried the child is autistic and that they have caused the delay by using too much screen time at home.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Take the worry seriously without over-promising. Naming the unspoken fears about autism and screen time, only if the parent raises them, lets you answer honestly rather than dismissively."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Call-centre worker with vocal fatigue and hoarseness",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "An outpatient voice clinic",
      candidateRole: "You are the speech pathologist seeing an adult whose voice becomes hoarse and tired by the end of each shift on the phones.",
      patientRole: "The patient is a call-centre worker who relies on their voice all day and cannot easily take time off.",
      candidateCard: "Explain the likely link between heavy voice use, dehydration and throat clearing. Recommend practical vocal hygiene steps, discuss hydration and rest breaks, and explain why you also want to confirm there is no underlying issue with the larynx.",
      patientConcern: "The patient is worried the hoarseness could be a sign of cancer and is anxious that taking voice rest could put their job and income at risk.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Give concrete vocal hygiene advice the patient can use mid-shift. Acknowledge the job pressure rather than simply telling them to rest, and explain medical review reassuringly, not alarmingly."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Adult who stammers asking about job-interview speaking",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "An outpatient speech pathology clinic",
      candidateRole: "You are the speech pathologist seeing an adult who stammers and has an important job interview coming up.",
      patientRole: "The patient is a graduate who has been avoiding phone calls and interviews because of their stammer.",
      candidateCard: "Discuss realistic goals for managing the stammer rather than eliminating it. Introduce techniques and the idea of voluntary disclosure, and support the patient in deciding whether and how to mention their stammer to an interviewer.",
      patientConcern: "The patient believes any visible stammering will cost them the job and feels deep shame, hoping you can promise to make them sound completely fluent in time.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Resist promising fluency. Shifting the goal toward confident, effective communication and exploring disclosure honours the patient's autonomy and is more truthful than a cure narrative."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Daughter of a parent with dementia struggling to converse",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A memory clinic consulting room",
      candidateRole: "You are the speech pathologist advising the daughter of a parent in the moderate stages of dementia.",
      patientRole: "The patient is the daughter, who finds conversations with her parent increasingly upsetting and confusing.",
      candidateCard: "Explain how dementia affects communication and word-finding. Offer practical strategies such as simple sentences, allowing time and avoiding quizzing, and address her distress when her parent repeats questions or forgets the conversation.",
      patientConcern: "The daughter feels grief that her parent no longer seems to know her and feels guilty for becoming impatient during repetitive conversations.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Acknowledge the ongoing grief, not just the techniques. Advising her to avoid quizzing or correcting reduces conflict, and naming her guilt lets her hear that impatience is human."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Patient facing swallowing changes before head and neck cancer treatment",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A head and neck cancer pre-treatment clinic",
      candidateRole: "You are the speech pathologist meeting a patient before they begin chemoradiotherapy for a throat cancer.",
      patientRole: "The patient has been told their swallowing and voice may change during and after treatment.",
      candidateCard: "Explain why you want to start swallowing exercises before treatment begins and what changes to expect. Introduce the idea of prophylactic exercises and ongoing monitoring, and respond honestly to questions about eating and speaking afterwards.",
      patientConcern: "The patient is frightened they will permanently lose the ability to eat normally and speak, and is overwhelmed by adding speech therapy to an already heavy cancer treatment plan.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Be honest about likely changes while explaining why early exercises help preserve function. Pace the information and check what the patient most wants to know rather than delivering everything at once."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Introducing a communication device to a teenager with cerebral palsy",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A paediatric rehabilitation outpatient service",
      candidateRole: "You are the speech pathologist introducing an augmentative and alternative communication device to a teenager with cerebral palsy and unclear speech.",
      patientRole: "The patient is the teenager, who is self-conscious about looking different in front of school friends.",
      candidateCard: "Explain how the AAC device can support being understood without replacing their own voice. Address worries about standing out at school, and involve the teenager in choosing how and when they would use it.",
      patientConcern: "The teenager fears the device will make them look disabled to peers and worries that using it means people have given up on their natural speech.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Frame AAC as adding a tool, not replacing the voice. Centring the teenager's choices about when to use it respects autonomy and reduces the fear of standing out."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Parent worried about unclear speech in a four-year-old",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A community paediatric clinic",
      candidateRole: "You are the speech pathologist seeing a four-year-old whose speech sounds are difficult for people outside the family to understand.",
      patientRole: "The patient is the parent, who has been told by the preschool that other children cannot understand their child.",
      candidateCard: "Explain in plain terms which sounds the child is finding tricky and that some errors are still age-appropriate. Outline a simple plan with home practice and a review, and reassure the parent without dismissing the preschool's feedback.",
      patientConcern: "The parent feels embarrassed and judged by the preschool and is worried their child will be bullied or left behind when starting school.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Separate age-appropriate errors from those needing work so the parent is not over-alarmed. Give one or two simple home activities rather than a complex program."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Resistance to a softer diet texture in a residential care home",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A residential aged care facility",
      candidateRole: "You are the speech pathologist reviewing a resident who has been coughing during meals.",
      patientRole: "The patient is the resident, who loves their normal meals and resents being told to move to a softer, minced and moist texture.",
      candidateCard: "Explain what the coughing during meals suggests and why a softer texture is being recommended. Discuss how to keep meals enjoyable, respect the resident's right to be involved in decisions, and agree on a plan and review.",
      patientConcern: "The resident feels that changing their food removes one of the few pleasures they have left and fears it is the start of losing all independence.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Honour the resident's right to choose, including informed risk. Linking the change to keeping mealtimes enjoyable and safe, with their input, works better than imposing a rule."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Teenager whose unclear speech is linked to undiagnosed hearing loss",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A school-based therapy service interview room",
      candidateRole: "You are the speech pathologist who suspects a teenager's unclear speech and missed sounds may be related to a previously undetected hearing problem.",
      patientRole: "The patient is the teenager's mother, who assumed the issue was laziness or a habit that would be outgrown.",
      candidateCard: "Explain why certain speech sounds may be affected by hearing, and recommend an audiology referral before further speech therapy. Address the mother's surprise sensitively and outline how hearing and speech work would fit together.",
      patientConcern: "The mother feels she should have noticed a hearing problem years ago and is worried that a referral means something serious has been missed all this time.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Explain the hearing-speech link clearly and frame the audiology referral as a sensible next step, not a failure. Address the mother's guilt so it does not block her from following up."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Young man with a mild brain injury frustrated by word-finding problems",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A community rehabilitation clinic",
      candidateRole: "You are the speech pathologist seeing a young man who has word-finding difficulties and slower thinking after a mild traumatic brain injury.",
      patientRole: "The patient is the young man, who is keen to return to study and is frustrated when words will not come.",
      candidateCard: "Explain why word-finding and processing can be affected after a brain injury and that improvement often continues over time. Teach compensatory strategies, discuss managing fatigue, and set realistic expectations about returning to study.",
      patientConcern: "The patient fears he is permanently less capable than before and that returning to study too slowly will mean falling behind his peers for good.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Validate the frustration and offer practical word-finding strategies. Be honest about a realistic, gradual return to study while protecting hope, and link fatigue management to his goals."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "SPEECH_PATHOLOGY",
    title: "Speech Pathology — Parent declining recommended therapy for a child with a lisp",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A community child health clinic",
      candidateRole: "You are the speech pathologist seeing a seven-year-old with a persistent lisp affecting the s and z sounds.",
      patientRole: "The patient is the parent, who thinks the lisp is cute, will sort itself out, and is reluctant to commit to regular appointments.",
      candidateCard: "Explain why this lisp is unlikely to resolve on its own at this age and how short, focused therapy can help. Respect the parent's view, outline what attending would involve, and agree on a manageable next step.",
      patientConcern: "The parent is busy and stretched, worries about the cost and time of appointments, and does not want their child to feel there is something wrong with them.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Respect the parent's choice while being clear that this lisp is unlikely to self-correct. Offering a small, low-burden first step is more persuasive than pressing for a full course of therapy."
  }
];
