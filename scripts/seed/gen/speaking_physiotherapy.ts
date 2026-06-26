import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Encouraging adherence to a knee replacement rehab programme",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "outpatient physiotherapy clinic",
      candidateRole: "You are the physiotherapist seeing a patient three weeks after a total knee replacement.",
      patientRole: "The patient is a retired teacher who has stopped doing the prescribed home exercises because they cause discomfort.",
      candidateCard: "Find out why the patient has stopped the home exercises. Explain why consistent rehab matters for regaining knee range and strength. Reassure them that some discomfort during exercise is expected and is not causing harm. Agree a realistic daily routine they feel able to follow.",
      patientConcern: "The patient secretly fears that the pain means the new joint is being damaged and that exercising will 'loosen' it.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Name the fear of joint damage early and explain the difference between expected exercise soreness and harmful pain before negotiating the routine."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Addressing fear of movement after a disc-related back episode",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "community musculoskeletal physiotherapy clinic",
      candidateRole: "You are the physiotherapist reviewing a patient six weeks after an acute episode of back and leg pain that has now settled.",
      patientRole: "The patient is a warehouse worker who has been avoiding bending and lifting entirely for fear of 'slipping the disc again'.",
      candidateCard: "Acknowledge how frightening the original episode was. Explain that prolonged avoidance of movement can slow recovery and weaken supporting muscles. Gently challenge the belief that the spine is fragile. Agree a graded plan to reintroduce bending and light lifting.",
      patientConcern: "The patient believes their spine is permanently damaged and that one wrong movement could put them in a wheelchair.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Validate the fear without reinforcing the catastrophic belief; reframe the spine as strong and adaptable while keeping the graded plan concrete and small."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Guiding a recreational runner back to sport after a hamstring strain",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "sports physiotherapy clinic",
      candidateRole: "You are the physiotherapist seeing an amateur runner four weeks after a grade two hamstring strain.",
      patientRole: "The patient is keen to enter a half-marathon in two weeks and wants to resume full training immediately.",
      candidateCard: "Recognise the patient's motivation and the importance of the event. Explain why returning to full running too soon risks re-injury. Outline the criteria the hamstring needs to meet before full loading. Negotiate a staged return and discuss realistic expectations for the upcoming race.",
      patientConcern: "The patient fears that missing this race means losing their place in a running group and being seen by friends as having 'given up'.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Surface the social pressure behind the rush; tie the return-to-sport criteria to the patient's own goal of running pain-free for the season, not just this race."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Teaching pacing to a patient with persistent widespread pain",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "persistent pain management physiotherapy service",
      candidateRole: "You are the physiotherapist working with a patient who has had widespread pain for over two years.",
      patientRole: "The patient swings between overdoing activity on good days and resting completely on bad days, leaving them exhausted.",
      candidateCard: "Explore the patient's current boom-and-bust activity pattern. Explain the principle of pacing and activity baselines in plain terms. Help the patient see how steady, planned activity can reduce flare-ups over time. Agree one activity to begin pacing this week.",
      patientConcern: "The patient is worried that pacing means accepting they will never improve and giving up the active life they used to have.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Frame pacing as a route back towards valued activities rather than a limitation; pick one concrete, meaningful task to baseline so the concept stays tangible."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Reassuring an older patient after a fall while improving balance",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "community falls-prevention physiotherapy clinic",
      candidateRole: "You are the physiotherapist seeing an older adult who fell at home last month but was not seriously injured.",
      patientRole: "The patient has since become very cautious, rarely leaving their chair, and has cancelled social outings.",
      candidateCard: "Find out how the fall has affected the patient's confidence and daily life. Explain that reducing activity can actually increase fall risk by weakening the legs. Introduce the idea of supervised balance and strength exercises. Agree a small first step to rebuild confidence safely.",
      patientConcern: "The patient is afraid that another fall could mean losing their independence and being moved into residential care.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Connect the exercise plan directly to the patient's wish to stay independent; keep the first step small enough to feel safe and achievable at home."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Motivating a stroke survivor during arm recovery",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "community stroke rehabilitation team",
      candidateRole: "You are the physiotherapist visiting a patient recovering from a stroke that has weakened their left arm.",
      patientRole: "The patient has become discouraged because progress feels slow and they have started leaving the affected arm out of daily tasks.",
      candidateCard: "Acknowledge the patient's frustration with the pace of recovery. Explain why regularly using the affected arm, even in small ways, supports recovery. Encourage them to include the arm in everyday activities. Agree a few practical tasks to practise before your next visit.",
      patientConcern: "The patient has quietly concluded that the arm will never be useful again and that the exercises are a waste of effort.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Draw out the hidden belief that recovery has stalled; offer honest, encouraging information about ongoing potential and anchor it to small, real daily tasks."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Planning a graded return to manual work after a shoulder injury",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "occupational physiotherapy clinic",
      candidateRole: "You are the physiotherapist seeing a patient recovering from a rotator cuff injury sustained at work.",
      patientRole: "The patient is a scaffolder who wants to go straight back to full overhead lifting because they are worried about their income.",
      candidateCard: "Explore the patient's financial and work pressures. Explain why a graded return protects the healing shoulder and reduces the risk of further time off. Discuss modified duties as a bridge back to full work. Agree a staged plan and what to do if symptoms flare.",
      patientConcern: "The patient fears that asking for modified duties will make them look unreliable and put their job at risk.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Treat the income and job-security worry as central; position modified duties as the faster, safer route to keeping the job rather than a sign of weakness."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Supporting a parent of a child with a wrist fracture in a cast",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "paediatric physiotherapy outpatient clinic",
      candidateRole: "You are the physiotherapist seeing the parent of an eight-year-old whose wrist cast has just been removed after a fracture.",
      patientRole: "The parent is anxious about letting the child move the wrist and wants to keep it protected for several more weeks.",
      candidateCard: "Acknowledge the parent's wish to protect their child. Explain why gentle movement now helps the wrist regain its normal function. Reassure them that the bone has healed and the planned exercises are safe. Show simple activities the child can do at home and agree how to encourage them.",
      patientConcern: "The parent is frightened that any movement will re-break the wrist and that they will be blamed for pushing the child too hard.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Speak to the parent's protectiveness, not past it; make the exercises playful and child-led so the parent feels they are helping rather than risking harm."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Persuading a reluctant patient to begin exercise for type 2 diabetes",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "primary care physiotherapy clinic",
      candidateRole: "You are the physiotherapist seeing a patient referred for an activity programme to help manage type 2 diabetes.",
      patientRole: "The patient says they are too busy and too tired to exercise and is sceptical that it will make any difference.",
      candidateCard: "Explore the patient's daily routine and the barriers they describe. Explain in simple terms how regular activity can help blood sugar control and energy levels. Find a type of activity that fits the patient's life. Agree one small, realistic change to start with.",
      patientConcern: "The patient feels judged about their lifestyle and assumes any plan will be unrealistic, so has decided in advance that it will fail.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Avoid lecturing; show genuine curiosity about the patient's day and build the plan from something they already do so it does not feel imposed."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Reassuring a patient anxious about post-operative chest physiotherapy",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "surgical ward, acute hospital",
      candidateRole: "You are the physiotherapist visiting a patient on the day after abdominal surgery to start breathing and mobility exercises.",
      patientRole: "The patient is reluctant to take deep breaths or sit up because of pain around the wound.",
      candidateCard: "Acknowledge the patient's pain and worry. Explain why deep breathing and early movement help prevent chest complications after surgery. Show how to support the wound while breathing and coughing. Agree to start with a few gentle exercises now.",
      patientConcern: "The patient is afraid that coughing or moving will cause the surgical wound to split open.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Address the fear of the wound splitting directly; demonstrating wound support while breathing turns an abstract reassurance into something the patient can feel works."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Negotiating exercise expectations with a patient with severe COPD",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "pulmonary rehabilitation physiotherapy clinic",
      candidateRole: "You are the physiotherapist enrolling a patient with severe COPD into a pulmonary rehabilitation programme.",
      patientRole: "The patient stops any activity the moment they feel breathless and believes exertion is dangerous for their lungs.",
      candidateCard: "Explore how breathlessness currently limits the patient's daily life. Explain that becoming breathless during controlled exercise is expected and not harmful. Introduce breathing techniques to manage the sensation. Agree a manageable starting level of activity for the programme.",
      patientConcern: "The patient believes that pushing into breathlessness could trigger a respiratory collapse, so avoids all exertion.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Distinguish safe, controlled breathlessness from a genuine emergency; pairing exercise with a breathing-control technique gives the patient a sense of safety they can practise."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Managing pain medication expectations during shoulder rehabilitation",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "outpatient physiotherapy clinic",
      candidateRole: "You are the physiotherapist treating a patient with a frozen shoulder who is partway through a rehabilitation programme.",
      patientRole: "The patient wants you to recommend stronger painkillers so they can avoid the discomfort of the stretching exercises.",
      candidateCard: "Acknowledge the patient's discomfort and frustration. Explain your role and why prescribing medication is the doctor's decision, not yours. Discuss how the exercises and other strategies can help manage pain during recovery. Agree how to make the exercises more tolerable.",
      patientConcern: "The patient is frustrated that recovery is slow and hopes stronger medication will let them skip the painful stretching altogether.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Be honest about the limits of your role on medication without sounding dismissive; redirect to practical ways of making the stretches more bearable."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Encouraging a new mother to restart pelvic floor rehabilitation",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "women's health physiotherapy clinic",
      candidateRole: "You are the physiotherapist reviewing a patient several weeks after childbirth who was started on pelvic floor exercises.",
      patientRole: "The patient has stopped the exercises because she is exhausted caring for a newborn and feels embarrassed discussing the symptoms.",
      candidateCard: "Acknowledge how demanding caring for a newborn is. Gently explore the symptoms and the embarrassment the patient feels. Explain why continuing the pelvic floor exercises now supports long-term recovery. Agree a simple routine she can fit around caring for the baby.",
      patientConcern: "The patient is embarrassed about ongoing leaking and assumes it is a normal, permanent part of having had a baby that cannot be helped.",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Normalise the symptoms warmly to reduce embarrassment, then correct the belief that it is untreatable; tie the routine to existing moments in the baby's day."
  }
];
