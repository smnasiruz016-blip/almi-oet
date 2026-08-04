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
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Ankle injury after a fall",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Activity at time of injury",
          "answer": "playing football"
        },
        {
          "id": "g2",
          "label": "Time since injury",
          "answer": "three days ago"
        },
        {
          "id": "g3",
          "label": "Current pain score (0–10)",
          "answer": "seven out of ten"
        },
        {
          "id": "g4",
          "label": "Pain relief taken",
          "answer": "ibuprofen"
        },
        {
          "id": "g5",
          "label": "Site of worst swelling",
          "answer": "outer ankle"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: Good morning. Can you tell me what happened to your ankle? Patient: I twisted it while I was playing football, and it gave way underneath me. Clinician: I see. And when did this happen? Patient: It was three days ago, on Saturday afternoon. Clinician: How would you rate the pain right now, on a scale of zero to ten? Patient: I'd say it's about seven out of ten, especially when I put weight on it. Clinician: Have you taken anything for it? Patient: Just ibuprofen, two tablets in the morning and two at night. Clinician: And where exactly is the swelling worst? Patient: It's mainly on the outer ankle, just below the bone."
    },
    "guidanceNote": "Listen for the patient's exact words about timing and pain — they often paraphrase the note label, so write what you hear, not a rephrasing."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Antenatal visit",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Gestation",
          "answer": "twenty-eight weeks"
        },
        {
          "id": "g2",
          "label": "Fetal movements",
          "answer": "lots of movements"
        },
        {
          "id": "g3",
          "label": "Movement timing",
          "answer": "in the evening"
        },
        {
          "id": "g4",
          "label": "Swelling site",
          "answer": "fingers"
        },
        {
          "id": "g5",
          "label": "Other symptom",
          "answer": "headaches"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "echo"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "audioScript": "Clinician: How many weeks pregnant are you now? Patient: I'm twenty-eight weeks. Clinician: Are you feeling the baby move? Patient: Yes, lots of movements, especially in the evening. Clinician: Any swelling in your hands or face? Patient: My fingers have been swelling a bit. Clinician: How about headaches? Patient: I've had a few headaches this week. Clinician: And your blood pressure today is slightly raised."
    },
    "guidanceNote": "Gestation is given in weeks; write the number-plus-weeks phrase rather than guessing a month."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Asthma flare-up",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Main symptom",
          "answer": "wheezing"
        },
        {
          "id": "g2",
          "label": "Worse timing",
          "answer": "at night"
        },
        {
          "id": "g3",
          "label": "Reliever use",
          "answer": "six times a day"
        },
        {
          "id": "g4",
          "label": "Trigger",
          "answer": "cold weather"
        },
        {
          "id": "g5",
          "label": "Cough type",
          "answer": "dry cough"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "verse"
        },
        {
          "role": "Patient",
          "voice": "echo"
        }
      ],
      "audioScript": "Clinician: What's been happening with your breathing? Patient: I've been wheezing a lot, especially at night. Clinician: How often are you using your reliever inhaler? Patient: About six times a day this week. Clinician: Has anything set it off? Patient: I think it's the cold weather. Clinician: Can you speak in full sentences when it's bad? Patient: No, I have to stop for breath. Clinician: Any cough? Patient: A dry cough that won't settle."
    },
    "guidanceNote": "Inhaler frequency is a key figure; write the exact number of times the patient says."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Chest pain assessment",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Character of pain",
          "answer": "tight pressure"
        },
        {
          "id": "g2",
          "label": "Location",
          "answer": "centre"
        },
        {
          "id": "g3",
          "label": "Onset trigger",
          "answer": "climbing the stairs"
        },
        {
          "id": "g4",
          "label": "Radiates to",
          "answer": "left arm"
        },
        {
          "id": "g5",
          "label": "Associated symptom",
          "answer": "breathless"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: Can you describe the chest pain for me? Patient: It feels like a tight pressure right in the centre, and it started about two hours ago while I was climbing the stairs. Clinician: Does it move anywhere? Patient: Yes, it spreads down my left arm and up into my jaw. Clinician: Any other symptoms? Patient: I've been feeling quite breathless and a bit sweaty. Clinician: Have you had anything like this before? Patient: Never this bad, no."
    },
    "guidanceNote": "Listen for the patient's own words describing where pain spreads; radiation details often come straight after the word 'yes'."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Child with fever",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Onset",
          "answer": "yesterday evening"
        },
        {
          "id": "g2",
          "label": "Temperature",
          "answer": "thirty-nine degrees"
        },
        {
          "id": "g3",
          "label": "Feeding",
          "answer": "refusing food"
        },
        {
          "id": "g4",
          "label": "Ear sign",
          "answer": "pulling at her right ear"
        },
        {
          "id": "g5",
          "label": "Behaviour",
          "answer": "irritable"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "aria"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: When did your daughter's fever start? Patient: It came on yesterday evening, quite suddenly. Clinician: Have you measured her temperature? Patient: Yes, it was thirty-nine degrees this morning. Clinician: Is she eating and drinking? Patient: She's refusing food but still taking some water. Clinician: Any rash or other symptoms? Patient: She's pulling at her right ear and seems very irritable."
    },
    "guidanceNote": "Carers often answer two questions in one sentence; keep listening to the end before choosing your note."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Diabetes annual check",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Morning readings",
          "answer": "high"
        },
        {
          "id": "g2",
          "label": "Foot symptom",
          "answer": "numbness"
        },
        {
          "id": "g3",
          "label": "Weight change",
          "answer": "lost about four kilos"
        },
        {
          "id": "g4",
          "label": "Fluid symptom",
          "answer": "thirsty"
        },
        {
          "id": "g5",
          "label": "Night symptom",
          "answer": "pass urine"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "echo"
        }
      ],
      "audioScript": "Clinician: How have your blood sugar readings been at home? Patient: They've been running high in the mornings, around twelve. Clinician: Are you checking your feet regularly? Patient: I try to, but I've noticed some numbness in my toes lately. Clinician: How is your weight? Patient: I've actually lost about four kilos without trying. Clinician: And are you drinking more than usual? Patient: Yes, I'm always thirsty and getting up at night to pass urine."
    },
    "guidanceNote": "Numbers spoken aloud can be tricky; jot the figure as you hear it and check the unit the speaker uses."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Knee pain consultation",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Affected joint",
          "answer": "right knee"
        },
        {
          "id": "g2",
          "label": "Duration of symptoms",
          "answer": "three weeks"
        },
        {
          "id": "g3",
          "label": "Pain worsens when",
          "answer": "climbing stairs"
        },
        {
          "id": "g4",
          "label": "Current medication",
          "answer": "paracetamol"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: Good morning, what's brought you in today? Patient: It's my right knee. It's been aching for about three weeks now, especially when I climb stairs. Clinician: And is there any swelling? Patient: A little, mostly in the evenings. I've been taking paracetamol but it only helps a bit."
    },
    "guidanceNote": "Write only what you hear. Spelling and exact detail matter — note key clinical facts as they are said."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Lower back pain",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Mechanism",
          "answer": "lifting a heavy box"
        },
        {
          "id": "g2",
          "label": "Duration",
          "answer": "Four days ago"
        },
        {
          "id": "g3",
          "label": "Radiation",
          "answer": "back of my left leg"
        },
        {
          "id": "g4",
          "label": "Sensory symptom",
          "answer": "tingly"
        },
        {
          "id": "g5",
          "label": "Relieving factor",
          "answer": "Lying flat"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "echo"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "audioScript": "Clinician: How did the back pain begin? Patient: I was lifting a heavy box at work and felt a sudden pull. Clinician: That was when? Patient: Four days ago. Clinician: Does the pain travel anywhere? Patient: Yes, it shoots down the back of my left leg to the knee. Clinician: Any numbness or weakness? Patient: My foot feels a bit tingly. Clinician: What helps? Patient: Lying flat eases it a little."
    },
    "guidanceNote": "Onset questions often get a 'how' answer and a 'when' answer separately; capture each in its own gap."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Medication side-effect",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "STRETCH",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Suspected cause",
          "answer": "blood pressure medication"
        },
        {
          "id": "g2",
          "label": "Main side-effect",
          "answer": "dry cough"
        },
        {
          "id": "g3",
          "label": "Worse timing",
          "answer": "at night"
        },
        {
          "id": "g4",
          "label": "Other sign",
          "answer": "puffy"
        },
        {
          "id": "g5",
          "label": "Duration on drug",
          "answer": "three weeks"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "echo"
        }
      ],
      "audioScript": "Clinician: You mentioned a problem since starting the new tablets. Patient: Yes, since the blood pressure medication I've had a dry cough. Clinician: When does it bother you most? Patient: It's worse at night and keeps me awake. Clinician: Any swelling? Patient: My ankles have looked a little puffy. Clinician: How long have you been taking it? Patient: About three weeks now. Clinician: Have you stopped it at all? Patient: No, I've kept taking it as prescribed."
    },
    "guidanceNote": "When a symptom is linked to a drug, listen for the medication name spoken just before the complaint."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Mental-health check-in",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "STRETCH",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Mood",
          "answer": "low"
        },
        {
          "id": "g2",
          "label": "Loss of",
          "answer": "interest"
        },
        {
          "id": "g3",
          "label": "Sleep pattern",
          "answer": "wake very early"
        },
        {
          "id": "g4",
          "label": "Appetite",
          "answer": "barely eating"
        },
        {
          "id": "g5",
          "label": "Concentration",
          "answer": "can't focus"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "aria"
        }
      ],
      "audioScript": "Clinician: How has your mood been over the past few weeks? Patient: Quite low, honestly, and I've lost interest in things I used to enjoy. Clinician: How is your sleep? Patient: I wake very early, around four, and can't get back to sleep. Clinician: And your appetite? Patient: I'm barely eating, food just doesn't appeal. Clinician: How is your energy and concentration? Patient: I feel exhausted and I can't focus at work."
    },
    "guidanceNote": "Patients may speak softly about low mood; focus on the single descriptive word that fits each note field."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Migraine review",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Frequency",
          "answer": "three times a week"
        },
        {
          "id": "g2",
          "label": "Location",
          "answer": "behind my right eye"
        },
        {
          "id": "g3",
          "label": "Quality",
          "answer": "throbs"
        },
        {
          "id": "g4",
          "label": "Aggravating factor",
          "answer": "Bright light"
        },
        {
          "id": "g5",
          "label": "Warning sign",
          "answer": "flashing lines"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "echo"
        },
        {
          "role": "Patient",
          "voice": "aria"
        }
      ],
      "audioScript": "Clinician: How often are you getting these headaches now? Patient: About three times a week, usually in the afternoon. Clinician: Where exactly do you feel them? Patient: Mostly behind my right eye, and it throbs. Clinician: Anything make it worse? Patient: Bright light makes it much worse, so I have to lie down in a dark room. Clinician: And do you get any warning before one starts? Patient: Yes, I sometimes see flashing lines about ten minutes beforehand."
    },
    "guidanceNote": "Frequency answers are often a number plus a time unit; write the full phrase rather than just the number."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — New skin rash",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Site",
          "answer": "forearms"
        },
        {
          "id": "g2",
          "label": "Onset",
          "answer": "three days ago"
        },
        {
          "id": "g3",
          "label": "Appearance",
          "answer": "Small red bumps"
        },
        {
          "id": "g4",
          "label": "Possible trigger",
          "answer": "laundry detergent"
        },
        {
          "id": "g5",
          "label": "Spread",
          "answer": "neck"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "verse"
        },
        {
          "role": "Patient",
          "voice": "aria"
        }
      ],
      "audioScript": "Clinician: Tell me about the rash. Patient: It appeared on my forearms three days ago. Clinician: What does it look like? Patient: Small red bumps that are very itchy. Clinician: Have you used anything new recently? Patient: I started a new laundry detergent last week. Clinician: Is it spreading? Patient: Yes, it's now reaching my neck."
    },
    "guidanceNote": "Descriptions of appearance often use two adjectives; write the short phrase exactly as spoken."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Ongoing sleep problem",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "STRETCH",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Time to fall asleep",
          "answer": "at least an hour"
        },
        {
          "id": "g2",
          "label": "Duration",
          "answer": "three months"
        },
        {
          "id": "g3",
          "label": "Night worry",
          "answer": "money"
        },
        {
          "id": "g4",
          "label": "Daytime effect",
          "answer": "drowsy"
        },
        {
          "id": "g5",
          "label": "Evening habit",
          "answer": "coffee"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "echo"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: Tell me about your sleep difficulty. Patient: I lie awake for at least an hour before falling asleep. Clinician: How long has this gone on? Patient: For about three months now. Clinician: What's on your mind at night? Patient: I keep worrying about money. Clinician: How do you feel during the day? Patient: I'm drowsy and I nap in the afternoon. Clinician: Any caffeine in the evening? Patient: I usually have coffee after dinner."
    },
    "guidanceNote": "Listen for the duration phrase that answers 'how long'; it is usually a number plus weeks or months."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Post-operative wound check",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Wound colour",
          "answer": "red"
        },
        {
          "id": "g2",
          "label": "Local sign",
          "answer": "warm"
        },
        {
          "id": "g3",
          "label": "Discharge",
          "answer": "yellow fluid"
        },
        {
          "id": "g4",
          "label": "Pain trend",
          "answer": "worse"
        },
        {
          "id": "g5",
          "label": "Systemic sign",
          "answer": "feverish"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "aria"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: How is the wound healing since your operation? Patient: The edges look red and it feels warm around the stitches. Clinician: Any discharge? Patient: There's a little yellow fluid coming out. Clinician: Is it painful? Patient: The pain has actually got worse over the last two days. Clinician: Have you had a temperature? Patient: I felt feverish last night."
    },
    "guidanceNote": "Signs of infection are usually listed one after another; keep your pen moving so you don't miss the next one."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "Part A — Suspected urinary infection",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "gaps": [
        {
          "id": "g1",
          "label": "Pain on voiding",
          "answer": "stings"
        },
        {
          "id": "g2",
          "label": "Onset",
          "answer": "two days ago"
        },
        {
          "id": "g3",
          "label": "Frequency",
          "answer": "all the time"
        },
        {
          "id": "g4",
          "label": "Urine appearance",
          "answer": "cloudy"
        },
        {
          "id": "g5",
          "label": "Pain site",
          "answer": "low in my tummy"
        }
      ],
      "speakers": [
        {
          "role": "Clinician",
          "voice": "aria"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "audioScript": "Clinician: What's been troubling you? Patient: It stings when I pass urine, and it started two days ago. Clinician: Are you going more often? Patient: Yes, I'm rushing to the toilet all the time. Clinician: Have you noticed the urine itself? Patient: It looks cloudy and smells strong. Clinician: Any pain elsewhere? Patient: A dull ache low in my tummy. Clinician: Any fever? Patient: No, I don't think so."
    },
    "guidanceNote": "Everyday words like 'stings' often stand in for clinical terms; record the patient's actual word."
  },

  // ── OET Form 1 (canonical ingest 2026-08-04) ──
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "OET Form 1 · Listening Part A — Physiotherapy consultation (lower back pain)",
    "prompt": "You will hear a physiotherapist speaking to a patient. For questions 1-12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Physiotherapist",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "audioScript": "Physiotherapist: Good morning, Mr Okafor. I'm Sarah, one of the physiotherapists. What's brought you in today? Patient: Morning. It's my lower back - it's been playing up for about three weeks now. Physiotherapist: And can you remember how it started? Patient: I was moving some boxes at work - I lift deliveries - and I felt a sharp twinge on the left side. Physiotherapist: A sharp twinge on the left. How would you describe the pain now? Patient: It's more of a dull ache most of the time, but it becomes sharp when I bend forward. Physiotherapist: Does it travel anywhere - down into your leg? Patient: A little into my left buttock, but not past the knee. Physiotherapist: Not below the knee. On a scale of nought to ten, how bad is it at its worst? Patient: Probably a seven, first thing in the morning. Physiotherapist: Is there anything that eases it? Patient: A hot water bottle helps, and the ibuprofen I bought. Physiotherapist: How often are you taking that? Patient: Twice a day, after meals. Physiotherapist: Any numbness, pins and needles, or trouble with your bladder or bowels? Patient: No, nothing like that. Physiotherapist: That's reassuring. How's it affecting your sleep? Patient: I'm waking two or three times a night because I can't get comfortable. Physiotherapist: And work? Patient: I've been on light duties, no heavy lifting, for the last week.",
      "gaps": [
        {
          "id": "g1",
          "label": "Complaint has lasted for",
          "answer": "three weeks"
        },
        {
          "id": "g2",
          "label": "Activity when it started",
          "answer": "moving boxes",
          "variants": [
            "lifting boxes",
            "moving some boxes"
          ]
        },
        {
          "id": "g3",
          "label": "Felt a sharp ___ on the left",
          "answer": "twinge"
        },
        {
          "id": "g4",
          "label": "Usual pain is a dull ___",
          "answer": "ache"
        },
        {
          "id": "g5",
          "label": "Becomes sharp when he ___",
          "answer": "bends forward",
          "variants": [
            "bending forward"
          ]
        },
        {
          "id": "g6",
          "label": "Pain radiates into the left ___",
          "answer": "buttock"
        },
        {
          "id": "g7",
          "label": "Pain does not go past the ___",
          "answer": "knee"
        },
        {
          "id": "g8",
          "label": "Severity out of ten (worst)",
          "answer": "seven",
          "variants": [
            "7"
          ]
        },
        {
          "id": "g9",
          "label": "Relieving factor (heat source)",
          "answer": "hot water bottle"
        },
        {
          "id": "g10",
          "label": "Medication taken",
          "answer": "ibuprofen"
        },
        {
          "id": "g11",
          "label": "No bladder or ___ problems",
          "answer": "bowel",
          "variants": [
            "bowels"
          ]
        },
        {
          "id": "g12",
          "label": "Wakes this many times a night",
          "answer": "two or three times",
          "variants": [
            "2 or 3 times",
            "two to three times"
          ]
        }
      ]
    },
    "guidanceNote": "Answers are the exact words spoken; note-completion accepts minor spelling/spacing variation."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "title": "OET Form 1 · Listening Part A — Dietitian consultation (type 2 diabetes)",
    "prompt": "You will hear a dietitian speaking to a patient. For questions 1-12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Dietitian",
          "voice": "onyx"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "audioScript": "Dietitian: Hello, Mrs Petrova, I'm Tom, the dietitian. Dr Ellis asked me to go through your eating with you - is that alright? Patient: Yes, of course. Dietitian: Your recent blood test showed your HbA1c was a little high - that's your average blood sugar over a few months. Talk me through a typical day. Patient: For breakfast, two slices of white toast with jam, and a coffee with sugar. Dietitian: How many sugars? Patient: Two. Dietitian: And lunch? Patient: Usually a cheese sandwich and a packet of crisps, sometimes a fizzy drink. Dietitian: Evening meal? Patient: My husband cooks - rice or pasta with a sauce, and we quite often have a dessert. Dietitian: Do you snack between meals? Patient: Biscuits with my afternoon tea - two or three. Dietitian: How much water in a day? Patient: Not much - maybe two glasses. Dietitian: And activity? Patient: I walk the dog for about twenty minutes in the evening. Dietitian: That's a good start. Let's not change everything at once. First, swap the white toast for wholegrain, and bring the sugar in your coffee down gradually. And replace that lunchtime fizzy drink with water. Patient: That sounds manageable.",
      "gaps": [
        {
          "id": "g1",
          "label": "Referred because this was high",
          "answer": "HbA1c"
        },
        {
          "id": "g2",
          "label": "Breakfast: two slices of ___",
          "answer": "white toast"
        },
        {
          "id": "g3",
          "label": "Coffee taken with",
          "answer": "two sugars",
          "variants": [
            "2 sugars"
          ]
        },
        {
          "id": "g4",
          "label": "Lunch includes a packet of ___",
          "answer": "crisps"
        },
        {
          "id": "g5",
          "label": "Lunch sometimes with a ___",
          "answer": "fizzy drink"
        },
        {
          "id": "g6",
          "label": "Evening meal often followed by a ___",
          "answer": "dessert"
        },
        {
          "id": "g7",
          "label": "Afternoon snack (two or three)",
          "answer": "biscuits"
        },
        {
          "id": "g8",
          "label": "Water intake per day",
          "answer": "two glasses",
          "variants": [
            "2 glasses"
          ]
        },
        {
          "id": "g9",
          "label": "Evening activity: walks the ___",
          "answer": "dog"
        },
        {
          "id": "g10",
          "label": "Change: swap white toast for ___",
          "answer": "wholegrain"
        },
        {
          "id": "g11",
          "label": "Reduce this in coffee gradually",
          "answer": "sugar"
        },
        {
          "id": "g12",
          "label": "Replace fizzy drink with ___",
          "answer": "water"
        }
      ]
    }
  }
];
