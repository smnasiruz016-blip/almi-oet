import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Chest pain assessment",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "CORE",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: Can you describe the chest pain for me? Patient: It feels like a tight pressure right in the centre, and it started about two hours ago while I was climbing the stairs. Clinician: Does it move anywhere? Patient: Yes, it spreads down my left arm and up into my jaw. Clinician: Any other symptoms? Patient: I've been feeling quite breathless and a bit sweaty. Clinician: Have you had anything like this before? Patient: Never this bad, no.",
      speakers: [
        { role: "Clinician", voice: "alloy" },
        { role: "Patient", voice: "verse" },
      ],
      gaps: [
        { id: "g1", label: "Character of pain", answer: "tight pressure" },
        { id: "g2", label: "Location", answer: "centre" },
        { id: "g3", label: "Onset trigger", answer: "climbing the stairs" },
        { id: "g4", label: "Radiates to", answer: "left arm" },
        { id: "g5", label: "Associated symptom", answer: "breathless" },
      ],
    },
    guidanceNote:
      "Listen for the patient's own words describing where pain spreads; radiation details often come straight after the word 'yes'.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Migraine review",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "FOUNDATION",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: How often are you getting these headaches now? Patient: About three times a week, usually in the afternoon. Clinician: Where exactly do you feel them? Patient: Mostly behind my right eye, and it throbs. Clinician: Anything make it worse? Patient: Bright light makes it much worse, so I have to lie down in a dark room. Clinician: And do you get any warning before one starts? Patient: Yes, I sometimes see flashing lines about ten minutes beforehand.",
      speakers: [
        { role: "Clinician", voice: "echo" },
        { role: "Patient", voice: "aria" },
      ],
      gaps: [
        { id: "g1", label: "Frequency", answer: "three times a week" },
        { id: "g2", label: "Location", answer: "behind my right eye" },
        { id: "g3", label: "Quality", answer: "throbs" },
        { id: "g4", label: "Aggravating factor", answer: "Bright light" },
        { id: "g5", label: "Warning sign", answer: "flashing lines" },
      ],
    },
    guidanceNote:
      "Frequency answers are often a number plus a time unit; write the full phrase rather than just the number.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Diabetes annual check",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "CORE",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: How have your blood sugar readings been at home? Patient: They've been running high in the mornings, around twelve. Clinician: Are you checking your feet regularly? Patient: I try to, but I've noticed some numbness in my toes lately. Clinician: How is your weight? Patient: I've actually lost about four kilos without trying. Clinician: And are you drinking more than usual? Patient: Yes, I'm always thirsty and getting up at night to pass urine.",
      speakers: [
        { role: "Clinician", voice: "alloy" },
        { role: "Patient", voice: "echo" },
      ],
      gaps: [
        { id: "g1", label: "Morning readings", answer: "high" },
        { id: "g2", label: "Foot symptom", answer: "numbness" },
        { id: "g3", label: "Weight change", answer: "lost about four kilos" },
        { id: "g4", label: "Fluid symptom", answer: "thirsty" },
        { id: "g5", label: "Night symptom", answer: "pass urine" },
      ],
    },
    guidanceNote:
      "Numbers spoken aloud can be tricky; jot the figure as you hear it and check the unit the speaker uses.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Child with fever",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "FOUNDATION",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: When did your daughter's fever start? Patient: It came on yesterday evening, quite suddenly. Clinician: Have you measured her temperature? Patient: Yes, it was thirty-nine degrees this morning. Clinician: Is she eating and drinking? Patient: She's refusing food but still taking some water. Clinician: Any rash or other symptoms? Patient: She's pulling at her right ear and seems very irritable.",
      speakers: [
        { role: "Clinician", voice: "aria" },
        { role: "Patient", voice: "verse" },
      ],
      gaps: [
        { id: "g1", label: "Onset", answer: "yesterday evening" },
        { id: "g2", label: "Temperature", answer: "thirty-nine degrees" },
        { id: "g3", label: "Feeding", answer: "refusing food" },
        { id: "g4", label: "Ear sign", answer: "pulling at her right ear" },
        { id: "g5", label: "Behaviour", answer: "irritable" },
      ],
    },
    guidanceNote:
      "Carers often answer two questions in one sentence; keep listening to the end before choosing your note.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Lower back pain",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "CORE",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: How did the back pain begin? Patient: I was lifting a heavy box at work and felt a sudden pull. Clinician: That was when? Patient: Four days ago. Clinician: Does the pain travel anywhere? Patient: Yes, it shoots down the back of my left leg to the knee. Clinician: Any numbness or weakness? Patient: My foot feels a bit tingly. Clinician: What helps? Patient: Lying flat eases it a little.",
      speakers: [
        { role: "Clinician", voice: "echo" },
        { role: "Patient", voice: "alloy" },
      ],
      gaps: [
        { id: "g1", label: "Mechanism", answer: "lifting a heavy box" },
        { id: "g2", label: "Duration", answer: "Four days ago" },
        { id: "g3", label: "Radiation", answer: "back of my left leg" },
        { id: "g4", label: "Sensory symptom", answer: "tingly" },
        { id: "g5", label: "Relieving factor", answer: "Lying flat" },
      ],
    },
    guidanceNote:
      "Onset questions often get a 'how' answer and a 'when' answer separately; capture each in its own gap.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — New skin rash",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "FOUNDATION",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: Tell me about the rash. Patient: It appeared on my forearms three days ago. Clinician: What does it look like? Patient: Small red bumps that are very itchy. Clinician: Have you used anything new recently? Patient: I started a new laundry detergent last week. Clinician: Is it spreading? Patient: Yes, it's now reaching my neck.",
      speakers: [
        { role: "Clinician", voice: "verse" },
        { role: "Patient", voice: "aria" },
      ],
      gaps: [
        { id: "g1", label: "Site", answer: "forearms" },
        { id: "g2", label: "Onset", answer: "three days ago" },
        { id: "g3", label: "Appearance", answer: "Small red bumps" },
        { id: "g4", label: "Possible trigger", answer: "laundry detergent" },
        { id: "g5", label: "Spread", answer: "neck" },
      ],
    },
    guidanceNote:
      "Descriptions of appearance often use two adjectives; write the short phrase exactly as spoken.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Medication side-effect",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "STRETCH",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: You mentioned a problem since starting the new tablets. Patient: Yes, since the blood pressure medication I've had a dry cough. Clinician: When does it bother you most? Patient: It's worse at night and keeps me awake. Clinician: Any swelling? Patient: My ankles have looked a little puffy. Clinician: How long have you been taking it? Patient: About three weeks now. Clinician: Have you stopped it at all? Patient: No, I've kept taking it as prescribed.",
      speakers: [
        { role: "Clinician", voice: "alloy" },
        { role: "Patient", voice: "echo" },
      ],
      gaps: [
        { id: "g1", label: "Suspected cause", answer: "blood pressure medication" },
        { id: "g2", label: "Main side-effect", answer: "dry cough" },
        { id: "g3", label: "Worse timing", answer: "at night" },
        { id: "g4", label: "Other sign", answer: "puffy" },
        { id: "g5", label: "Duration on drug", answer: "three weeks" },
      ],
    },
    guidanceNote:
      "When a symptom is linked to a drug, listen for the medication name spoken just before the complaint.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Post-operative wound check",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "CORE",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: How is the wound healing since your operation? Patient: The edges look red and it feels warm around the stitches. Clinician: Any discharge? Patient: There's a little yellow fluid coming out. Clinician: Is it painful? Patient: The pain has actually got worse over the last two days. Clinician: Have you had a temperature? Patient: I felt feverish last night.",
      speakers: [
        { role: "Clinician", voice: "aria" },
        { role: "Patient", voice: "verse" },
      ],
      gaps: [
        { id: "g1", label: "Wound colour", answer: "red" },
        { id: "g2", label: "Local sign", answer: "warm" },
        { id: "g3", label: "Discharge", answer: "yellow fluid" },
        { id: "g4", label: "Pain trend", answer: "worse" },
        { id: "g5", label: "Systemic sign", answer: "feverish" },
      ],
    },
    guidanceNote:
      "Signs of infection are usually listed one after another; keep your pen moving so you don't miss the next one.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Antenatal visit",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "CORE",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: How many weeks pregnant are you now? Patient: I'm twenty-eight weeks. Clinician: Are you feeling the baby move? Patient: Yes, lots of movements, especially in the evening. Clinician: Any swelling in your hands or face? Patient: My fingers have been swelling a bit. Clinician: How about headaches? Patient: I've had a few headaches this week. Clinician: And your blood pressure today is slightly raised.",
      speakers: [
        { role: "Clinician", voice: "echo" },
        { role: "Patient", voice: "alloy" },
      ],
      gaps: [
        { id: "g1", label: "Gestation", answer: "twenty-eight weeks" },
        { id: "g2", label: "Fetal movements", answer: "lots of movements" },
        { id: "g3", label: "Movement timing", answer: "in the evening" },
        { id: "g4", label: "Swelling site", answer: "fingers" },
        { id: "g5", label: "Other symptom", answer: "headaches" },
      ],
    },
    guidanceNote:
      "Gestation is given in weeks; write the number-plus-weeks phrase rather than guessing a month.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Mental-health check-in",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "STRETCH",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: How has your mood been over the past few weeks? Patient: Quite low, honestly, and I've lost interest in things I used to enjoy. Clinician: How is your sleep? Patient: I wake very early, around four, and can't get back to sleep. Clinician: And your appetite? Patient: I'm barely eating, food just doesn't appeal. Clinician: How is your energy and concentration? Patient: I feel exhausted and I can't focus at work.",
      speakers: [
        { role: "Clinician", voice: "alloy" },
        { role: "Patient", voice: "aria" },
      ],
      gaps: [
        { id: "g1", label: "Mood", answer: "low" },
        { id: "g2", label: "Loss of", answer: "interest" },
        { id: "g3", label: "Sleep pattern", answer: "wake very early" },
        { id: "g4", label: "Appetite", answer: "barely eating" },
        { id: "g5", label: "Concentration", answer: "can't focus" },
      ],
    },
    guidanceNote:
      "Patients may speak softly about low mood; focus on the single descriptive word that fits each note field.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Asthma flare-up",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "CORE",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: What's been happening with your breathing? Patient: I've been wheezing a lot, especially at night. Clinician: How often are you using your reliever inhaler? Patient: About six times a day this week. Clinician: Has anything set it off? Patient: I think it's the cold weather. Clinician: Can you speak in full sentences when it's bad? Patient: No, I have to stop for breath. Clinician: Any cough? Patient: A dry cough that won't settle.",
      speakers: [
        { role: "Clinician", voice: "verse" },
        { role: "Patient", voice: "echo" },
      ],
      gaps: [
        { id: "g1", label: "Main symptom", answer: "wheezing" },
        { id: "g2", label: "Worse timing", answer: "at night" },
        { id: "g3", label: "Reliever use", answer: "six times a day" },
        { id: "g4", label: "Trigger", answer: "cold weather" },
        { id: "g5", label: "Cough type", answer: "dry cough" },
      ],
    },
    guidanceNote:
      "Inhaler frequency is a key figure; write the exact number of times the patient says.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Suspected urinary infection",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "FOUNDATION",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: What's been troubling you? Patient: It stings when I pass urine, and it started two days ago. Clinician: Are you going more often? Patient: Yes, I'm rushing to the toilet all the time. Clinician: Have you noticed the urine itself? Patient: It looks cloudy and smells strong. Clinician: Any pain elsewhere? Patient: A dull ache low in my tummy. Clinician: Any fever? Patient: No, I don't think so.",
      speakers: [
        { role: "Clinician", voice: "aria" },
        { role: "Patient", voice: "alloy" },
      ],
      gaps: [
        { id: "g1", label: "Pain on voiding", answer: "stings" },
        { id: "g2", label: "Onset", answer: "two days ago" },
        { id: "g3", label: "Frequency", answer: "all the time" },
        { id: "g4", label: "Urine appearance", answer: "cloudy" },
        { id: "g5", label: "Pain site", answer: "low in my tummy" },
      ],
    },
    guidanceNote:
      "Everyday words like 'stings' often stand in for clinical terms; record the patient's actual word.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_A",
    profession: null,
    title: "Part A — Ongoing sleep problem",
    prompt:
      "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    difficulty: "STRETCH",
    topicTag: "consultation",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Clinician: Tell me about your sleep difficulty. Patient: I lie awake for at least an hour before falling asleep. Clinician: How long has this gone on? Patient: For about three months now. Clinician: What's on your mind at night? Patient: I keep worrying about money. Clinician: How do you feel during the day? Patient: I'm drowsy and I nap in the afternoon. Clinician: Any caffeine in the evening? Patient: I usually have coffee after dinner.",
      speakers: [
        { role: "Clinician", voice: "echo" },
        { role: "Patient", voice: "verse" },
      ],
      gaps: [
        { id: "g1", label: "Time to fall asleep", answer: "at least an hour" },
        { id: "g2", label: "Duration", answer: "three months" },
        { id: "g3", label: "Night worry", answer: "money" },
        { id: "g4", label: "Daytime effect", answer: "drowsy" },
        { id: "g5", label: "Evening habit", answer: "coffee" },
      ],
    },
    guidanceNote:
      "Listen for the duration phrase that answers 'how long'; it is usually a number plus weeks or months.",
  },
];
