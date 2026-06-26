import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Morning team brief on bed pressures",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "FOUNDATION",
    topicTag: "team-brief",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Good morning, everyone. Before we start the shift, I want to flag that we're running at full capacity again today, with two patients waiting in the corridor for beds. Please prioritise reviewing anyone who might be fit for discharge before the post-take round, so we can free up space as early as possible.",
      speakers: [{ role: "Ward Manager", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What does the ward manager ask the team to do first?",
          options: [
            { id: "a", text: "Identify patients who may be ready to go home" },
            { id: "b", text: "Move corridor patients into side rooms" },
            { id: "c", text: "Delay the post-take round until midday" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Listen for the action verb tied to a reason; 'prioritise reviewing anyone who might be fit for discharge' signals the requested first task.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Verbal handover for a post-operative patient",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "CORE",
    topicTag: "handover",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Mr Okafor came back from theatre at two o'clock after a hip replacement. His observations have been stable, but he's reported his pain creeping up to seven out of ten in the last hour, so he's due for his next analgesia now rather than later. Everything else, including his wound site, looks fine.",
      speakers: [{ role: "Recovery Nurse", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What is the nurse most concerned about during this handover?",
          options: [
            { id: "a", text: "The patient's rising pain score" },
            { id: "b", text: "The appearance of the wound site" },
            { id: "c", text: "Instability in the patient's observations" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Contrast words like 'but' often introduce the real issue; here the stable observations are set against pain 'creeping up'.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Switching to a new infusion pump model",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "CORE",
    topicTag: "equipment-change",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "From next Monday we're replacing all the old volumetric pumps with the new touchscreen model. The clinical difference you'll notice most is that the new pumps lock the rate once you confirm it, so you'll have to press the unlock key before any adjustment. Please don't try to force the dial as there isn't one anymore.",
      speakers: [{ role: "Practice Educator", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What is the main practical change with the new pumps?",
          options: [
            { id: "a", text: "The rate must be unlocked before it can be changed" },
            { id: "b", text: "The pumps no longer record the infusion rate" },
            { id: "c", text: "The dial has been made larger for easier use" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Focus on the speaker's emphasised 'difference you'll notice most'; the locking behaviour is the key change, not the removed dial.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Revised visiting hours policy",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "FOUNDATION",
    topicTag: "policy",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Just a quick note on the updated visiting policy that starts this week. We're extending afternoon visiting by an hour, so it now runs until five, but we're keeping the limit of two visitors per bed. If families ask, the easiest thing is to point them to the new poster by the entrance.",
      speakers: [{ role: "Charge Nurse", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What has actually changed in the visiting policy?",
          options: [
            { id: "a", text: "Afternoon visiting now finishes later" },
            { id: "b", text: "More visitors are allowed at each bed" },
            { id: "c", text: "Posters have been removed from the entrance" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Separate what changed from what stayed the same; the two-visitor limit is explicitly being 'kept', so it is not the change.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Reminder about timing of antibiotics",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "CORE",
    topicTag: "medication",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "A reminder for the team about the IV antibiotics this week. Pharmacy has asked us to give the first dose strictly within an hour of it being prescribed for our sepsis patients, and to document the exact time given. It's the documentation of timing, not the choice of drug, that we keep getting flagged on at audit.",
      speakers: [{ role: "Senior Nurse", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What does the speaker say the team keeps being criticised for?",
          options: [
            { id: "a", text: "Failing to record exactly when the dose was given" },
            { id: "b", text: "Choosing the wrong antibiotic for sepsis" },
            { id: "c", text: "Giving the first dose too early" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "When a speaker uses 'not X, but Y', the audit problem is Y; here it is the documentation of timing rather than drug choice.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Changes to the weekend roster",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "FOUNDATION",
    topicTag: "rostering",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "I've had to adjust the weekend rota because two people are off sick. The long days are all still covered, but I'm now short one person on the Sunday night shift. If anyone can pick that up, please let me know by Friday lunchtime so I can confirm before the weekend.",
      speakers: [{ role: "Shift Coordinator", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Which shift still needs to be filled?",
          options: [
            { id: "a", text: "The Sunday night shift" },
            { id: "b", text: "All of the weekend long days" },
            { id: "c", text: "The Friday lunchtime shift" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Don't be misled by a time mentioned for a deadline; Friday lunchtime is when to reply, not a gap in the rota.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Following up a patient complaint",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "STRETCH",
    topicTag: "complaint-follow-up",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "We've had a complaint from a relative who felt they weren't kept informed after their mother's fall. Having looked into it, the care itself was appropriate and well documented, so this isn't a clinical concern. What we do need to improve is how consistently we update families when something unexpected happens.",
      speakers: [{ role: "Matron", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What does the matron conclude is the real issue behind the complaint?",
          options: [
            { id: "a", text: "Communication with the patient's family" },
            { id: "b", text: "The standard of clinical care given" },
            { id: "c", text: "The quality of the documentation" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "The speaker rules out two areas ('appropriate', 'well documented') to leave the genuine issue, which is keeping families informed.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Note on mandatory manual handling training",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "FOUNDATION",
    topicTag: "training",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Quick reminder that your annual manual handling update is due this month. It's moved online this year, so you can complete it from any computer rather than booking a classroom slot. You'll still need to do the practical hoist assessment in person, though, and that hasn't changed.",
      speakers: [{ role: "Ward Sister", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What is new about this year's training?",
          options: [
            { id: "a", text: "The theory part can be done online" },
            { id: "b", text: "The hoist assessment is no longer required" },
            { id: "c", text: "Classroom sessions have been made longer" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Identify what 'hasn't changed' to eliminate distractors; the practical hoist assessment is unchanged, so the online theory is the new element.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Feedback from a hand hygiene audit",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "CORE",
    topicTag: "audit",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "I've got the results of last week's hand hygiene audit. Our overall score was good at ninety per cent, which is up from last time. The one moment we consistently missed, though, was cleaning our hands before touching a patient, so that's the step to focus on this month.",
      speakers: [{ role: "Infection Control Lead", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Which hand hygiene moment does the team most need to improve?",
          options: [
            { id: "a", text: "Before contact with the patient" },
            { id: "b", text: "After contact with the patient" },
            { id: "c", text: "After removing gloves" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "A high overall score can distract from the specific weakness; listen for 'the one moment we consistently missed' to find the answer.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Safeguarding reminder for new admissions",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "STRETCH",
    topicTag: "safeguarding",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "A safeguarding point for everyone clerking admissions today. If a patient discloses something that worries you, your job isn't to investigate it yourself or decide whether it's true. What you must do is record exactly what was said in their own words and escalate it to the safeguarding lead the same shift.",
      speakers: [{ role: "Safeguarding Nurse", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What does the speaker say staff should do if a patient discloses a concern?",
          options: [
            { id: "a", text: "Document it verbatim and escalate it promptly" },
            { id: "b", text: "Investigate the concern before reporting it" },
            { id: "c", text: "Decide whether the concern is credible first" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "The two things ruled out ('isn't to investigate', 'decide whether it's true') are distractors; the instruction is to record and escalate.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Arranging a complex discharge",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "STRETCH",
    topicTag: "discharge-planning",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Mrs Patel is medically fit to leave, but her discharge is being held up. It's not the transport or her medication, both of which are sorted; we're waiting on the care agency to confirm her first home visit. Until that package is in place, it isn't safe to send her home.",
      speakers: [{ role: "Discharge Coordinator", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What is delaying the patient's discharge?",
          options: [
            { id: "a", text: "Confirmation of her home care package" },
            { id: "b", text: "Arranging her transport home" },
            { id: "c", text: "Dispensing her discharge medication" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "When several factors are listed, note which are 'sorted'; transport and medication are done, so the care agency is the hold-up.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Alert about a norovirus outbreak",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "CORE",
    topicTag: "infection-control",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "We've confirmed two cases of norovirus on the bay, so we're closing it to new admissions from now. The key thing to remember with norovirus is that alcohol gel isn't enough; you must wash your hands with soap and water after every contact in that bay. Please brief any agency staff arriving today.",
      speakers: [{ role: "Infection Prevention Nurse", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What does the speaker stress about hand hygiene during this outbreak?",
          options: [
            { id: "a", text: "Soap and water must be used, not gel alone" },
            { id: "b", text: "Alcohol gel is sufficient on its own" },
            { id: "c", text: "Hand hygiene is only needed when leaving the bay" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Outbreak-specific rules often override usual practice; 'alcohol gel isn't enough' points to soap and water as the required method.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_B",
    profession: null,
    title: "Part B — Shortage of a wound dressing size",
    prompt:
      "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "FOUNDATION",
    topicTag: "supply-issue",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Just to flag a supply problem on the unit. We've run out of the large foam dressings, and the next delivery isn't until Thursday. The small and medium sizes are well stocked, so for now please use two mediums where you'd normally reach for a large, rather than ordering extra from another ward.",
      speakers: [{ role: "Stock Coordinator", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "What does the speaker ask staff to do about the shortage?",
          options: [
            { id: "a", text: "Use two medium dressings instead of a large one" },
            { id: "b", text: "Borrow large dressings from another ward" },
            { id: "c", text: "Wait until Thursday before dressing any wounds" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Listen past the problem to the instruction; 'rather than ordering extra from another ward' rejects one distractor and points to the medium-dressing workaround.",
  },
];
