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
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Alert about a norovirus outbreak",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "infection-control",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Infection Prevention Nurse",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker stress about hand hygiene during this outbreak?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Soap and water must be used, not gel alone"
            },
            {
              "id": "b",
              "text": "Alcohol gel is sufficient on its own"
            },
            {
              "id": "c",
              "text": "Hand hygiene is only needed when leaving the bay"
            }
          ]
        }
      ],
      "audioScript": "We've confirmed two cases of norovirus on the bay, so we're closing it to new admissions from now. The key thing to remember with norovirus is that alcohol gel isn't enough; you must wash your hands with soap and water after every contact in that bay. Please brief any agency staff arriving today."
    },
    "guidanceNote": "Outbreak-specific rules often override usual practice; 'alcohol gel isn't enough' points to soap and water as the required method."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Arranging a complex discharge",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "discharge-planning",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Discharge Coordinator",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is delaying the patient's discharge?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "Arranging her transport home"
            },
            {
              "id": "a",
              "text": "Confirmation of her home care package"
            },
            {
              "id": "c",
              "text": "Dispensing her discharge medication"
            }
          ]
        }
      ],
      "audioScript": "Mrs Patel is medically fit to leave, but her discharge is being held up. It's not the transport or her medication, both of which are sorted; we're waiting on the care agency to confirm her first home visit. Until that package is in place, it isn't safe to send her home."
    },
    "guidanceNote": "When several factors are listed, note which are 'sorted'; transport and medication are done, so the care agency is the hold-up."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Changes to the weekend roster",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "FOUNDATION",
    "topicTag": "rostering",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Shift Coordinator",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Which shift still needs to be filled?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "All of the weekend long days"
            },
            {
              "id": "c",
              "text": "The Friday lunchtime shift"
            },
            {
              "id": "a",
              "text": "The Sunday night shift"
            }
          ]
        }
      ],
      "audioScript": "I've had to adjust the weekend rota because two people are off sick. The long days are all still covered, but I'm now short one person on the Sunday night shift. If anyone can pick that up, please let me know by Friday lunchtime so I can confirm before the weekend."
    },
    "guidanceNote": "Don't be misled by a time mentioned for a deadline; Friday lunchtime is when to reply, not a gap in the rota."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Feedback from a hand hygiene audit",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "audit",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Infection Control Lead",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Which hand hygiene moment does the team most need to improve?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Before contact with the patient"
            },
            {
              "id": "b",
              "text": "After contact with the patient"
            },
            {
              "id": "c",
              "text": "After removing gloves"
            }
          ]
        }
      ],
      "audioScript": "I've got the results of last week's hand hygiene audit. Our overall score was good at ninety per cent, which is up from last time. The one moment we consistently missed, though, was cleaning our hands before touching a patient, so that's the step to focus on this month."
    },
    "guidanceNote": "A high overall score can distract from the specific weakness; listen for 'the one moment we consistently missed' to find the answer."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Following up a patient complaint",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "complaint-follow-up",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Matron",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the matron conclude is the real issue behind the complaint?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "The standard of clinical care given"
            },
            {
              "id": "a",
              "text": "Communication with the patient's family"
            },
            {
              "id": "c",
              "text": "The quality of the documentation"
            }
          ]
        }
      ],
      "audioScript": "We've had a complaint from a relative who felt they weren't kept informed after their mother's fall. Having looked into it, the care itself was appropriate and well documented, so this isn't a clinical concern. What we do need to improve is how consistently we update families when something unexpected happens."
    },
    "guidanceNote": "The speaker rules out two areas ('appropriate', 'well documented') to leave the genuine issue, which is keeping families informed."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Handover extract",
    "prompt": "You will hear a short workplace extract. Choose the answer which best fits what you hear.",
    "difficulty": "CORE",
    "topicTag": "workplace",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the nurse ask the colleague to do?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Obtain consent for theatre"
            },
            {
              "id": "c",
              "text": "Keep the patient nil by mouth from midnight"
            },
            {
              "id": "b",
              "text": "Follow up the pending pre-op bloods"
            }
          ]
        }
      ],
      "audioScript": "Nurse A: Before you take over, bed four is nil by mouth from midnight for theatre tomorrow. The consent form is signed but the pre-op bloods are still pending. Can you chase them on the next round?"
    },
    "guidanceNote": "Listen for the action being requested, not just the facts mentioned."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Morning team brief on bed pressures",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "FOUNDATION",
    "topicTag": "team-brief",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Ward Manager",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the ward manager ask the team to do first?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Identify patients who may be ready to go home"
            },
            {
              "id": "b",
              "text": "Move corridor patients into side rooms"
            },
            {
              "id": "c",
              "text": "Delay the post-take round until midday"
            }
          ]
        }
      ],
      "audioScript": "Good morning, everyone. Before we start the shift, I want to flag that we're running at full capacity again today, with two patients waiting in the corridor for beds. Please prioritise reviewing anyone who might be fit for discharge before the post-take round, so we can free up space as early as possible."
    },
    "guidanceNote": "Listen for the action verb tied to a reason; 'prioritise reviewing anyone who might be fit for discharge' signals the requested first task."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Note on mandatory manual handling training",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "FOUNDATION",
    "topicTag": "training",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Ward Sister",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is new about this year's training?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "The hoist assessment is no longer required"
            },
            {
              "id": "a",
              "text": "The theory part can be done online"
            },
            {
              "id": "c",
              "text": "Classroom sessions have been made longer"
            }
          ]
        }
      ],
      "audioScript": "Quick reminder that your annual manual handling update is due this month. It's moved online this year, so you can complete it from any computer rather than booking a classroom slot. You'll still need to do the practical hoist assessment in person, though, and that hasn't changed."
    },
    "guidanceNote": "Identify what 'hasn't changed' to eliminate distractors; the practical hoist assessment is unchanged, so the online theory is the new element."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Reminder about timing of antibiotics",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "medication",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Senior Nurse",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker say the team keeps being criticised for?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "Choosing the wrong antibiotic for sepsis"
            },
            {
              "id": "c",
              "text": "Giving the first dose too early"
            },
            {
              "id": "a",
              "text": "Failing to record exactly when the dose was given"
            }
          ]
        }
      ],
      "audioScript": "A reminder for the team about the IV antibiotics this week. Pharmacy has asked us to give the first dose strictly within an hour of it being prescribed for our sepsis patients, and to document the exact time given. It's the documentation of timing, not the choice of drug, that we keep getting flagged on at audit."
    },
    "guidanceNote": "When a speaker uses 'not X, but Y', the audit problem is Y; here it is the documentation of timing rather than drug choice."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Revised visiting hours policy",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "FOUNDATION",
    "topicTag": "policy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Charge Nurse",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What has actually changed in the visiting policy?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Afternoon visiting now finishes later"
            },
            {
              "id": "b",
              "text": "More visitors are allowed at each bed"
            },
            {
              "id": "c",
              "text": "Posters have been removed from the entrance"
            }
          ]
        }
      ],
      "audioScript": "Just a quick note on the updated visiting policy that starts this week. We're extending afternoon visiting by an hour, so it now runs until five, but we're keeping the limit of two visitors per bed. If families ask, the easiest thing is to point them to the new poster by the entrance."
    },
    "guidanceNote": "Separate what changed from what stayed the same; the two-visitor limit is explicitly being 'kept', so it is not the change."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Safeguarding reminder for new admissions",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "safeguarding",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Safeguarding Nurse",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker say staff should do if a patient discloses a concern?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "Investigate the concern before reporting it"
            },
            {
              "id": "a",
              "text": "Document it verbatim and escalate it promptly"
            },
            {
              "id": "c",
              "text": "Decide whether the concern is credible first"
            }
          ]
        }
      ],
      "audioScript": "A safeguarding point for everyone clerking admissions today. If a patient discloses something that worries you, your job isn't to investigate it yourself or decide whether it's true. What you must do is record exactly what was said in their own words and escalate it to the safeguarding lead the same shift."
    },
    "guidanceNote": "The two things ruled out ('isn't to investigate', 'decide whether it's true') are distractors; the instruction is to record and escalate."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Shortage of a wound dressing size",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "FOUNDATION",
    "topicTag": "supply-issue",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Stock Coordinator",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker ask staff to do about the shortage?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "Borrow large dressings from another ward"
            },
            {
              "id": "c",
              "text": "Wait until Thursday before dressing any wounds"
            },
            {
              "id": "a",
              "text": "Use two medium dressings instead of a large one"
            }
          ]
        }
      ],
      "audioScript": "Just to flag a supply problem on the unit. We've run out of the large foam dressings, and the next delivery isn't until Thursday. The small and medium sizes are well stocked, so for now please use two mediums where you'd normally reach for a large, rather than ordering extra from another ward."
    },
    "guidanceNote": "Listen past the problem to the instruction; 'rather than ordering extra from another ward' rejects one distractor and points to the medium-dressing workaround."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Switching to a new infusion pump model",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "equipment-change",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Practice Educator",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the main practical change with the new pumps?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "The rate must be unlocked before it can be changed"
            },
            {
              "id": "b",
              "text": "The pumps no longer record the infusion rate"
            },
            {
              "id": "c",
              "text": "The dial has been made larger for easier use"
            }
          ]
        }
      ],
      "audioScript": "From next Monday we're replacing all the old volumetric pumps with the new touchscreen model. The clinical difference you'll notice most is that the new pumps lock the rate once you confirm it, so you'll have to press the unlock key before any adjustment. Please don't try to force the dial as there isn't one anymore."
    },
    "guidanceNote": "Focus on the speaker's emphasised 'difference you'll notice most'; the locking behaviour is the key change, not the removed dial."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Updated dressing trolley protocol",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "infection-control",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Senior Nurse",
          "voice": "aria"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What change to cleaning practice is the speaker describing?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Trolleys should be cleaned only at the end of the day."
            },
            {
              "id": "b",
              "text": "Trolleys must be cleaned before and after every procedure."
            },
            {
              "id": "c",
              "text": "Alcohol wipes should now be used on trolley surfaces."
            }
          ]
        }
      ],
      "audioScript": "Before you start your shift, a quick reminder about the new dressing trolley protocol. From this week, all trolleys must be wiped down with the chlorine-based solution both before and after each procedure, not just at the end of the day. The alcohol wipes we used previously are now only for the patient's skin, not for the trolley surfaces. If you can't find the chlorine wipes, they're being stored in the locked cupboard by the sluice room, and the code is on the whiteboard."
    },
    "guidanceNote": "Watch for the contrast signalled by 'not just' — the speaker contradicts the old routine, so don't pick the option that matches the previous practice."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "Part B — Verbal handover for a post-operative patient",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "handover",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Recovery Nurse",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the nurse most concerned about during this handover?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "The appearance of the wound site"
            },
            {
              "id": "c",
              "text": "Instability in the patient's observations"
            },
            {
              "id": "a",
              "text": "The patient's rising pain score"
            }
          ]
        }
      ],
      "audioScript": "Mr Okafor came back from theatre at two o'clock after a hip replacement. His observations have been stable, but he's reported his pain creeping up to seven out of ten in the last hour, so he's due for his next analgesia now rather than later. Everything else, including his wound site, looks fine."
    },
    "guidanceNote": "Contrast words like 'but' often introduce the real issue; here the stable observations are set against pain 'creeping up'."
  },

  // ── OET Form 1 (canonical ingest 2026-08-04) ──
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 1 · Listening Part B — Discharge concern",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "workplace",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Nurse 1",
          "voice": "alloy"
        },
        {
          "role": "Nurse 2",
          "voice": "onyx"
        }
      ],
      "audioScript": "Nurse 1: Did you manage to speak to the family about Mr Hughes' discharge? Nurse 2: I did, but they're anxious about managing his medication at home. I've asked the pharmacist to do a teaching session before he leaves - I think that'll make all the difference.",
      "questions": [
        {
          "id": "q1",
          "stem": "What is the main concern about Mr Hughes' discharge?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "the family's ability to manage his medication"
            },
            {
              "id": "b",
              "text": "the availability of the pharmacist"
            },
            {
              "id": "c",
              "text": "the timing of the discharge"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 1 · Listening Part B — Hand-hygiene audit",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "workplace",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Manager",
          "voice": "onyx"
        }
      ],
      "audioScript": "Manager: From Monday the new hand-hygiene audit starts. It's not about catching anyone out - it's to give us baseline data before we roll out the new sanitiser stations.",
      "questions": [
        {
          "id": "q1",
          "stem": "What is the purpose of the audit?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "to identify non-compliant staff"
            },
            {
              "id": "b",
              "text": "to gather baseline data before a change"
            },
            {
              "id": "c",
              "text": "to test the new sanitiser stations"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 1 · Listening Part B — X-ray result",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "workplace",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Doctor",
          "voice": "onyx"
        }
      ],
      "audioScript": "Doctor: I've reviewed the X-ray. There's no fracture, which is good news, but the swelling suggests significant soft-tissue damage, so I'd still like her to rest it and come back in a week.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the doctor conclude from the X-ray?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "there is a small fracture"
            },
            {
              "id": "b",
              "text": "no further review is needed"
            },
            {
              "id": "c",
              "text": "there is soft-tissue damage but no fracture"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 1 · Listening Part B — Home exercises",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "patient-education",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Physiotherapist",
          "voice": "alloy"
        }
      ],
      "audioScript": "Physiotherapist: The exercises matter more than the appointments themselves. If you only do them when you're here, you won't progress. Ten minutes, twice a day, at home - that's the key.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the physiotherapist emphasise?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "doing the exercises at home"
            },
            {
              "id": "b",
              "text": "attending every appointment"
            },
            {
              "id": "c",
              "text": "making the sessions longer"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 1 · Listening Part B — Infusion pump training",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "workplace",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Nurse educator",
          "voice": "alloy"
        }
      ],
      "audioScript": "Nurse educator: The commonest error with the new infusion pumps isn't the programming - staff are good at that. It's forgetting to check the line for air before starting. That's what today's session covers.",
      "questions": [
        {
          "id": "q1",
          "stem": "What is the focus of the session?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "programming the pumps"
            },
            {
              "id": "b",
              "text": "reducing the number of pumps"
            },
            {
              "id": "c",
              "text": "checking the line for air"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 1 · Listening Part B — Handling results",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "workplace",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Receptionist",
          "voice": "alloy"
        }
      ],
      "audioScript": "Receptionist: If a patient rings about results, don't read anything out - even if it looks normal. Book them a call with the nurse. It's not our place, and 'normal' still sometimes needs explaining.",
      "questions": [
        {
          "id": "q1",
          "stem": "What is the receptionist's advice?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "read out only the normal results"
            },
            {
              "id": "b",
              "text": "always book a call with the nurse"
            },
            {
              "id": "c",
              "text": "explain the results themselves"
            }
          ]
        }
      ]
    }
  },
  // ── OET Form 2 (canonical ingest 2026-08-04) ──
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 2 · Listening Part B — Low sodium",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "ward-round",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Doctor",
          "voice": "onyx"
        }
      ],
      "audioScript": "Doctor: Mrs Cole's sodium is low at 128. Before anything else, check whether she's on a diuretic or an SSRI - both can cause it. Don't restrict her fluids until we've reviewed the drug chart.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the doctor want done first?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "review her medication for a cause"
            },
            {
              "id": "b",
              "text": "restrict her fluids"
            },
            {
              "id": "c",
              "text": "repeat the blood test"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 2 · Listening Part B — Gloves and hand hygiene",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "infection-control",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Infection-control lead",
          "voice": "alloy"
        }
      ],
      "audioScript": "Infection-control lead: Gloves are not a substitute for hand hygiene. Clean your hands before putting them on and again after - glove use has actually been shown to reduce hand-washing, the opposite of what we want.",
      "questions": [
        {
          "id": "q1",
          "stem": "What is the speaker's main point about gloves?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "they should be worn at all times"
            },
            {
              "id": "b",
              "text": "they replace hand hygiene"
            },
            {
              "id": "c",
              "text": "they do not remove the need to clean hands"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 2 · Listening Part B — Nil by mouth",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "handover",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "audioScript": "Nurse: Bed 4 is nil by mouth for theatre this afternoon - make sure the sign is up and the water jug removed. We don't want the list cancelled because someone gave her a cup of tea.",
      "questions": [
        {
          "id": "q1",
          "stem": "Why must the water jug be removed?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "the patient is nil by mouth for surgery"
            },
            {
              "id": "b",
              "text": "she dislikes tea"
            },
            {
              "id": "c",
              "text": "the jug needs cleaning"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 2 · Listening Part B — Paracetamol order",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "pharmacy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Pharmacist",
          "voice": "alloy"
        }
      ],
      "audioScript": "Pharmacist: We're changing the ward's paracetamol order from 'four times a day' to 'a maximum of four times a day'. A small wording change, but the standing 'four times' was giving frail patients doses too high for their weight.",
      "questions": [
        {
          "id": "q1",
          "stem": "Why was the wording changed?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "supply was short"
            },
            {
              "id": "b",
              "text": "the fixed dosing was too high for some patients"
            },
            {
              "id": "c",
              "text": "nurses wanted it simpler"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 2 · Listening Part B — Escalating concern",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "patient-safety",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Nurse educator",
          "voice": "onyx"
        }
      ],
      "audioScript": "Nurse educator: When you escalate a deteriorating patient, don't just read the numbers. Say what you think is wrong and what you want: 'I'm worried about sepsis, I need a doctor now' gets a faster response than a list of figures.",
      "questions": [
        {
          "id": "q1",
          "stem": "What advice is given?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "always read the full observations"
            },
            {
              "id": "b",
              "text": "state your concern and what you need"
            },
            {
              "id": "c",
              "text": "wait for the next round"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 2 · Listening Part B — Chest pain at reception",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "reception",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Receptionist",
          "voice": "alloy"
        }
      ],
      "audioScript": "Receptionist: If someone at the desk says they think they're having a heart attack, do not book them in and ask them to sit. Call the emergency buzzer straight away - chest pain is never put in a queue.",
      "questions": [
        {
          "id": "q1",
          "stem": "What should staff do if someone reports chest pain?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "book them in and wait"
            },
            {
              "id": "b",
              "text": "take their details first"
            },
            {
              "id": "c",
              "text": "call the emergency buzzer immediately"
            }
          ]
        }
      ]
    }
  },
  // ── OET Form 3 (canonical ingest 2026-08-05) ──
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 3 · Listening Part B — Sharps bins",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "sharps-safety",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Ward manager",
          "voice": "onyx"
        }
      ],
      "audioScript": "Ward manager: Never resheath a used needle, and never overfill the sharps bin - once it reaches the fill line, seal it and replace it. Most of the needlestick injuries on this ward have come from bins that were too full to close properly.",
      "questions": [
        {
          "id": "q1",
          "stem": "What is given as the main cause of needlestick injuries on the ward?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "sharps bins that were too full"
            },
            {
              "id": "b",
              "text": "faulty needles"
            },
            {
              "id": "c",
              "text": "staff working too quickly"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 3 · Listening Part B — Transfusion check",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "transfusion",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Charge nurse",
          "voice": "alloy"
        }
      ],
      "audioScript": "Charge nurse: The bedside check before a transfusion must be done by two staff, together, at the patient's side - not one person reading it out while the other signs later. It's the final barrier against giving the wrong blood, and it only works if you both actually look.",
      "questions": [
        {
          "id": "q1",
          "stem": "What point is made about the pre-transfusion check?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "it can be signed afterwards"
            },
            {
              "id": "b",
              "text": "both staff must do it together at the bedside"
            },
            {
              "id": "c",
              "text": "one senior nurse is enough"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 3 · Listening Part B — Timely notes",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "documentation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinical educator",
          "voice": "onyx"
        }
      ],
      "audioScript": "Clinical educator: Write your notes as soon as you can after the event, not hours later at the end of the shift. Memory fades, and a record made at the time carries far more weight if a case is ever reviewed.",
      "questions": [
        {
          "id": "q1",
          "stem": "Why should notes be written promptly?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "it is quicker overall"
            },
            {
              "id": "b",
              "text": "to finish the shift on time"
            },
            {
              "id": "c",
              "text": "a record made at the time is more reliable"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 3 · Listening Part B — Oxygen as a drug",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "prescribing",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Respiratory nurse",
          "voice": "alloy"
        }
      ],
      "audioScript": "Respiratory nurse: Oxygen is a drug and must be prescribed with a target saturation range, like anything else. In some patients with chronic lung disease, high-flow oxygen can actually be dangerous, so we don't just turn it up because someone looks unwell.",
      "questions": [
        {
          "id": "q1",
          "stem": "What is the speaker's main point about oxygen?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "it must be prescribed with a target range"
            },
            {
              "id": "b",
              "text": "it should always be given at high flow"
            },
            {
              "id": "c",
              "text": "it is completely harmless"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 3 · Listening Part B — Interpreters",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "communication",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Practice manager",
          "voice": "onyx"
        }
      ],
      "audioScript": "Practice manager: When a patient doesn't speak much English, book a professional interpreter - don't rely on their child or a relative. Family members may soften bad news, miss detail, or the patient may not want them to know everything.",
      "questions": [
        {
          "id": "q1",
          "stem": "Why should family members not be used to interpret?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "it takes longer"
            },
            {
              "id": "b",
              "text": "they may alter or limit what is said"
            },
            {
              "id": "c",
              "text": "it is against the law"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "title": "OET Form 3 · Listening Part B — Red wristband",
    "prompt": "You will hear a short workplace extract. Choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "allergy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        }
      ],
      "audioScript": "Nurse: If a patient has a known allergy, they wear a red wristband, and it should match what's documented. If you see a red band but nothing recorded, stop and check before giving anything - an unexplained band is a red flag, not a decoration.",
      "questions": [
        {
          "id": "q1",
          "stem": "What should you do if a patient has a red wristband but no recorded allergy?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "ignore the band"
            },
            {
              "id": "b",
              "text": "remove the band"
            },
            {
              "id": "c",
              "text": "check before giving any medication"
            }
          ]
        }
      ]
    }
  }
];
