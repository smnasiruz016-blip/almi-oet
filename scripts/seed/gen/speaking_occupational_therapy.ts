import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Upper-limb retraining after stroke",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A stroke rehabilitation ward. The patient is three weeks post left-hemisphere stroke with a weak right (dominant) arm.",
      candidateRole:
        "You are the occupational therapist. You want to introduce a daily upper-limb retraining programme using the affected right arm in real tasks (washing, dressing, holding a cup) rather than relying only on the left hand.",
      patientRole:
        "The patient is a 64-year-old right-handed former carpenter whose right arm is weak and clumsy, and who has started doing everything one-handed with the left.",
      candidateCard:
        "Find out how the patient is currently managing daily tasks and what they have stopped doing. Explain why using the affected arm in everyday activities aids recovery and why over-relying on the good arm can slow progress. Agree two or three specific tasks to practise with the right arm this week and arrange review.",
      patientConcern:
        "The patient has privately decided the right arm is 'finished' and that practising with it is a waste of effort that only reminds them of what they have lost; they fear they will never work with their hands again.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Draw out the belief that the arm is beyond recovery before prescribing tasks. Frame everyday use as the therapy itself, set genuinely small first goals, and acknowledge the grief about the carpentry rather than glossing over it.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Joint protection in early rheumatoid hand arthritis",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A hand therapy outpatient clinic at a rheumatology unit.",
      candidateRole:
        "You are the occupational therapist. The patient has early rheumatoid arthritis affecting the small joints of both hands. You want to teach joint-protection principles and introduce simple adaptive techniques and a resting splint for night use.",
      patientRole:
        "The patient is a 38-year-old hairdresser with painful, stiff finger joints, especially in the morning, who is anxious about keeping up at work.",
      candidateCard:
        "Find out which daily and work tasks are most painful. Explain joint-protection principles in plain terms (spreading load, using larger joints, pacing, built-up grips). Introduce a night resting splint and a few practical changes. Agree one or two adjustments to try and arrange follow-up.",
      patientConcern:
        "The patient secretly fears that being told to 'protect' the joints means they will have to give up hairdressing, the work they love and rely on financially.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Keep the advice concrete and few in number for a first session. Surface the fear about losing the job early — frame joint protection as a way to keep working, not a step toward stopping.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Supporting a carer of a person with dementia",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A memory clinic appointment; the OT is meeting the spouse of a person with moderate dementia.",
      candidateRole:
        "You are the occupational therapist. You want to discuss strategies to support meaningful daily activity and reduce distress for a person with moderate dementia, and to help the spouse structure the day and use simple environmental cues.",
      patientRole:
        "The patient is the 70-year-old spouse and main carer, exhausted and tearful, who does everything for their partner because it is 'quicker' and gets upset when their partner becomes agitated in the afternoons.",
      candidateCard:
        "Find out how the days are currently structured and where the difficulties are. Explain how routine, simplified tasks and familiar cues can reduce agitation and preserve the partner's abilities. Suggest letting the partner do parts of tasks. Agree a small number of practical changes and check on the carer's own wellbeing.",
      patientConcern:
        "The carer feels guilty admitting they are struggling and secretly fears that asking for help, or letting their partner attempt things, means they are failing as a husband or wife.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Address the carer's exhaustion and guilt before offering techniques — an overwhelmed carer cannot absorb a long strategy list. Reframe enabling the partner as good care, not neglect, and validate how hard the afternoons are.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Falls-prevention routine after a hip fracture",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A rehabilitation unit, planning discharge after surgery for a fractured hip.",
      candidateRole:
        "You are the occupational therapist. The patient is recovering well from hip-fracture surgery and is due home soon. You want to agree a falls-prevention routine covering safe transfers, footwear, lighting, removing trip hazards and using the walking aid indoors.",
      patientRole:
        "The patient is an 82-year-old who lives alone and is impatient to get home and 'back to normal', and tends to rush when getting up.",
      candidateCard:
        "Find out how the patient expects to manage at home and what the home is like. Explain why the first weeks carry a higher fall risk and agree practical measures (using the frame indoors, taking time to stand, clearing rugs and cords, good lighting, suitable footwear). Agree which changes the patient will make and arrange follow-up support.",
      patientConcern:
        "The patient is afraid that admitting any difficulty or accepting 'fuss' about safety will give the family an excuse to stop them living independently at home.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Position the routine as the thing that protects independent living, which is what the patient most wants. Draw out the unspoken fear about the family before pushing measures, and negotiate changes rather than dictating them.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Graded return to work after a back injury",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "An occupational health and vocational rehabilitation clinic.",
      candidateRole:
        "You are the occupational therapist. The patient has been off work for ten weeks after a lifting injury, with no red flags, and is medically cleared for graded return. You want to plan a phased return with modified duties, pacing and ergonomic adjustments.",
      patientRole:
        "The patient is a 47-year-old warehouse supervisor who is keen to return for financial reasons but is nervous about whether their back can cope with the work.",
      candidateCard:
        "Find out the patient's normal duties and their worries about returning. Explain the rationale for a graded, modified return rather than full duties straight away or further waiting. Discuss pacing, lifting technique, reasonable adjustments and liaison with the employer. Agree a phased plan and review point.",
      patientConcern:
        "The patient fears that returning before being completely pain-free will cause a serious re-injury that leaves them permanently disabled and unable to provide for their family.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Acknowledge the re-injury fear and the financial pressure rather than dismissing either. Explain that graded activity is protective and that some discomfort is expected and safe, then co-design the phased plan with the patient.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Anxiety management and graded exposure for activity avoidance",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A community mental-health occupational therapy clinic.",
      candidateRole:
        "You are the occupational therapist. The patient has anxiety with panic symptoms and has gradually stopped going to shops and using public transport. You want to introduce graded exposure and anxiety-management strategies to rebuild access to valued community activities.",
      patientRole:
        "The patient is a 31-year-old who now relies on online deliveries and lifts from family, and has not taken a bus or entered a supermarket for several months.",
      candidateCard:
        "Find out which activities the patient most wants to regain and what currently happens when they try. Explain how graded exposure and simple coping techniques can gradually reduce avoidance. Together build a small first step on an activity ladder and agree how to practise it before the next session.",
      patientConcern:
        "The patient is afraid that confronting these situations will trigger a panic attack in public where they will lose control and be humiliated, so avoidance feels safer than trying.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Keep the first exposure step genuinely small and patient-chosen; the therapeutic value is in achievable graded steps. Validate that panic feels frightening and explain coping tools, rather than pushing the patient toward a step that feels overwhelming.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Sensory strategies for a child struggling at school",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A paediatric occupational therapy clinic; the OT is meeting a parent.",
      candidateRole:
        "You are the occupational therapist. You have assessed a 7-year-old with sensory processing difficulties who becomes overwhelmed in the busy, noisy classroom. You want to share practical sensory strategies for home and school and agree a plan with the parent.",
      patientRole:
        "The parent is worried and a little defensive after repeated calls from the school describing their child as 'disruptive' and 'not listening'.",
      candidateCard:
        "Find out what the parent is seeing at home and how they understand the school's concerns. Explain sensory overload in plain terms and suggest practical strategies (movement breaks, a quiet space, ear defenders, predictable routines). Agree a small number of strategies to try and how you will support the school.",
      patientConcern:
        "The parent privately fears that the difficulties are their fault as a parent, or that their child is being labelled as 'naughty' or 'a problem' rather than understood.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Reframe the behaviour as a response to sensory overload, not naughtiness or poor parenting, early in the conversation. Give a few concrete strategies rather than many, and make the parent a partner in supporting the school.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Wheelchair and pressure-care advice after spinal cord injury",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A spinal rehabilitation unit, seating and pressure-care review.",
      candidateRole:
        "You are the occupational therapist. The patient has a thoracic spinal cord injury and uses a manual wheelchair. You want to explain the importance of pressure-relief routines, regular weight shifts and skin checks to prevent pressure injuries, and review their cushion and seating.",
      patientRole:
        "The patient is a 26-year-old, recently injured and still adjusting, who finds the pressure-relief routine tedious and often forgets or skips it when busy or out with friends.",
      candidateCard:
        "Find out how the patient is managing weight shifts, skin checks and cushion use day to day. Explain in plain terms how pressure injuries develop and how the routine prevents them. Problem-solve ways to fit pressure relief into a busy social life. Agree a realistic routine and arrange skin and seating review.",
      patientConcern:
        "The patient does not want to be defined by their injury and feels that constant skin checks and weight shifts in front of friends mark them out as 'disabled', so they downplay the risk to feel normal.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Acknowledge the wish to feel normal and the social cost of the routine rather than lecturing about consequences. Problem-solve discreet ways to do weight shifts so the routine fits the patient's life instead of fighting it.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Fatigue management in multiple sclerosis",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A community neurology occupational therapy clinic.",
      candidateRole:
        "You are the occupational therapist. The patient has relapsing multiple sclerosis and severe fatigue that disrupts work and family life. You want to introduce energy-conservation and pacing principles (the '3 Ps': planning, prioritising, pacing) and help the patient redistribute activity across the week.",
      patientRole:
        "The patient is a 39-year-old parent of two who pushes through on good days to get everything done, then crashes for the next two days.",
      candidateCard:
        "Find out what a typical week looks like and how the patient currently uses their energy. Explain the boom-and-bust pattern and the principles of pacing, planning and prioritising. Work with the patient to redistribute some tasks and build in rest. Agree two or three changes to try and arrange review.",
      patientConcern:
        "The patient fears that slowing down and asking for help means giving in to the illness and being seen by their family as a lazy or inadequate parent.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Name the boom-and-bust cycle the patient will recognise, and reframe pacing as staying in control of the illness rather than surrendering to it. Address the fear of seeming lazy before agreeing concrete changes.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Cognitive strategies after mild traumatic brain injury",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A community brain-injury rehabilitation clinic.",
      candidateRole:
        "You are the occupational therapist. The patient is recovering from a mild traumatic brain injury after a road accident and reports poor memory and concentration. You want to introduce compensatory cognitive strategies (a diary or phone reminders, checklists, reducing distractions, one task at a time) and a graded return to daily routines.",
      patientRole:
        "The patient is a 34-year-old office worker who keeps forgetting appointments and losing track mid-task, and is frustrated and frightened by the changes.",
      candidateCard:
        "Find out which everyday tasks are most affected and how the patient is coping. Explain that compensatory strategies and graded activity support recovery. Introduce practical memory and attention aids and a structured routine. Agree a few strategies to trial and arrange review.",
      patientConcern:
        "The patient is secretly terrified that the memory problems are permanent, that they are 'losing their mind', and that they will not be able to keep their job.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Acknowledge how frightening the cognitive changes feel and give realistic, honest reassurance about recovery without over-promising. Present the strategies as practical tools that help now, and start with a small, manageable set.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Adaptive feeding and dressing after hand burns",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "A burns rehabilitation outpatient clinic.",
      candidateRole:
        "You are the occupational therapist. The patient has healing burns and stiffness across both hands. You want to introduce adaptive equipment and techniques for self-feeding, dressing and washing so the patient can manage more independently while the hands recover.",
      patientRole:
        "The patient is a 52-year-old who currently relies on a partner for most personal tasks and feels low about the loss of independence.",
      candidateCard:
        "Find out which daily tasks the patient most wants to do for themselves. Demonstrate and explain adaptive aids and techniques (built-up cutlery, dressing aids, easier fastenings) and how they help during recovery. Agree one or two tasks to start with and arrange follow-up.",
      patientConcern:
        "The patient feels humiliated needing their partner's help with intimate personal care and quietly fears the dependence is permanent.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Lead with the patient's own priorities for independence and treat the dignity issue gently. Frame the aids as temporary support during recovery, and pick a first task likely to give an early, motivating success.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Driving cessation conversation with an older adult",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A community occupational therapy clinic, following a driving and cognition assessment.",
      candidateRole:
        "You are the occupational therapist. Your assessment of a 79-year-old with early cognitive decline raises significant concerns about safe driving. You need to discuss the findings honestly, explain the recommendation to stop driving and to notify the licensing authority, and help the patient plan alternative ways to stay connected and mobile.",
      patientRole:
        "The patient is a 79-year-old who lives in a rural area, drives to see grandchildren and to shop, and equates driving with their freedom and identity.",
      candidateCard:
        "Sensitively explain the assessment findings and the recommendation to stop driving. Acknowledge what the loss means. Explain the duty to inform the licensing authority. Explore practical alternatives for shopping, appointments and seeing family. Agree some concrete next steps and offer ongoing support.",
      patientConcern:
        "The patient's deepest fear is becoming isolated and a burden, cut off from grandchildren and unable to manage in a rural area without a car, so they may become angry or plead to keep driving.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Be honest about the recommendation and the legal duty without softening it into ambiguity, but lead with empathy for what driving means. Spend real time on practical alternatives — addressing the isolation fear is what makes the message bearable.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "OCCUPATIONAL_THERAPY",
    title: "Occupational Therapy — Splinting and scar management after hand tendon repair",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A hand therapy clinic, early review after flexor tendon repair surgery.",
      candidateRole:
        "You are the occupational therapist. The patient has had a flexor tendon repaired in the hand and needs to wear a protective splint, follow a controlled exercise protocol and begin scar management. You want to explain the regime and the importance of adhering to the restrictions.",
      patientRole:
        "The patient is a 29-year-old keyboard musician, impatient to use the hand fully and tempted to remove the splint and test their grip.",
      candidateCard:
        "Find out how the patient is managing with the splint and the restrictions. Explain why the splint and the careful, staged exercises protect the healing tendon and why doing too much too soon risks rupture. Explain scar management. Agree the wearing and exercise plan and arrange close review.",
      patientConcern:
        "The patient is afraid that strictly following the slow protocol will leave the hand stiff and end their ability to play music, so they are tempted to push harder and faster than advised.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Explain clearly that following the protocol is what protects the future of playing, and that pushing early risks a rupture that would set recovery back much further. Acknowledge the impatience and the fear about the hand rather than simply issuing rules.",
  },
];
