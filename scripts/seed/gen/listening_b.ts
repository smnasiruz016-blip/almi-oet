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
    "slug": "lis-b-alert-about-a-norovirus-outbreak",
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
    "slug": "lis-b-arranging-a-complex-discharge",
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
    "slug": "lis-b-changes-to-the-weekend-roster",
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
    "slug": "lis-b-feedback-from-a-hand-hygiene-audit",
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
    "slug": "lis-b-following-up-a-patient-complaint",
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
    "slug": "lis-b-handover-extract",
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
    "slug": "lis-b-morning-team-brief-on-bed-pressures",
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
    "slug": "lis-b-note-on-mandatory-manual-handling-training",
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
    "slug": "lis-b-reminder-about-timing-of-antibiotics",
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
              "text": "Choosing the wrong antibiotic for a septic patient"
            },
            {
              "id": "c",
              "text": "Giving the first dose earlier than prescribed"
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
    "slug": "lis-b-revised-visiting-hours-policy",
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
    "slug": "lis-b-safeguarding-reminder-for-new-admissions",
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
    "slug": "lis-b-shortage-of-a-wound-dressing-size",
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
    "slug": "lis-b-switching-to-a-new-infusion-pump-model",
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
    "slug": "lis-b-updated-dressing-trolley-protocol",
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
    "slug": "lis-b-verbal-handover-for-a-post-operative-patient",
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
    "slug": "lis-b-f1-discharge-concern",
    "form": "form-1",
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
      "audioScript": "Nurse 1: Did you manage to speak to the family about Mr Hughes' discharge? Nurse 2: I did, yes. They're keen to have him home, that isn't the problem. What's worrying them is managing his medication — he's on eleven things now and three of them changed while he was in. Nurse 1: That is a lot to take on. Nurse 2: His wife said she'd written it all down but she wasn't sure she'd got the morning and evening doses the right way round, and I could see she was quite upset about it. So I've asked the pharmacist to come up and do a teaching session with both of them before he leaves, with the actual boxes in front of them. Nurse 1: Rather than just the printed list. Nurse 2: Exactly. I think that'll make all the difference.",
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
              "text": "the availability of the ward pharmacist"
            },
            {
              "id": "c",
              "text": "the timing of the planned discharge"
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
    "slug": "lis-b-f1-hand-hygiene-audit",
    "form": "form-1",
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
      "audioScript": "Manager: One thing before you go. From Monday the new hand-hygiene audit starts, and you'll see people on the ward with tablets at odd times of day. I want to be clear about what it is and what it isn't. It is not about catching anyone out, and nobody's name goes on anything. What we're doing is gathering baseline data — how we're actually performing now, across all four moments, before we roll out the new sanitiser stations next quarter. Without a proper before, we'll have no way of knowing whether the stations made any difference at all, and we'll have spent the money on a guess. So carry on exactly as you normally would. If you have a bad shift, I'd rather see it in the numbers than not.",
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
    "slug": "lis-b-f1-x-ray-result",
    "form": "form-1",
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
      "audioScript": "Doctor: Right, I've had a look at the X-ray with the radiologist, and I can tell you there's no fracture. Nothing broken, nothing cracked, and the joint's in the right place — so that's the good news and I know it's what you were worried about. What I can see, though, is quite a lot of swelling around the outside of the ankle, more than I'd expect from a simple twist, and that suggests she's done significant damage to the soft tissue — the ligaments, essentially. That takes longer to settle than people expect and it doesn't show on the film. So I'd still like her to rest it properly, keep it elevated when she's sitting, and I want to see her again in a week.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the doctor conclude from the X-ray?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "there is a small undisplaced fracture"
            },
            {
              "id": "b",
              "text": "no further review of the ankle is needed"
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
    "slug": "lis-b-f1-home-exercises",
    "form": "form-1",
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
      "audioScript": "Physiotherapist: Before you go, can I say something about the exercises? Because this is the part people tend to skip, and it's the part that actually works. The exercises matter more than the appointments themselves. What we do in this room is check your technique and move you on when you're ready — but the strength doesn't build in here, it builds in between. If you only do them when you're here, once a week, you won't progress, and in six weeks we'll both be sitting here wondering why. Ten minutes, twice a day, at home. That's the key. Put them somewhere you'll trip over them — after breakfast, before the television goes on. It doesn't matter when, as long as it's most days.",
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
    "slug": "lis-b-f1-infusion-pump-training",
    "form": "form-1",
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
      "audioScript": "Nurse educator: Right, everyone. Today's session is on the new infusion pumps, and I want to explain why we've focused it the way we have. When we looked at the incidents from the first three months, the commonest error wasn't the programming. Staff are good at that — the interface is clearer than the old one and the rate errors have actually fallen. What's come up again and again is people forgetting to check the line for air before starting, particularly on a busy shift when the pump's been primed by somebody else and you're taking over halfway through. That's the gap. So that's what today covers: priming, checking, and what to do when you didn't prime it yourself. We'll do the programming refresher at the end if there's time.",
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
    "slug": "lis-b-f1-handling-results",
    "form": "form-1",
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
      "audioScript": "Receptionist: The other thing to know, and this comes up most days, is what to do when a patient rings about results. Don't read anything out. Not the figure, not the comment, not even that it says normal — and I know that feels unhelpful when someone's clearly anxious on the phone. But it isn't our place, and normal still sometimes needs explaining. A result can sit inside the reference range and still mean something the doctor wants to talk about, and once you've said the word normal, that conversation is much harder to have. So what you do is book them a call with the nurse. Same day if there's a slot, next day if there isn't. If it's flagged urgent, put it through to the duty nurse straight away.",
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
    "slug": "lis-b-f2-low-sodium",
    "form": "form-2",
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
      "audioScript": "Doctor: Can I flag Mrs Cole before you start the round? Her sodium's come back low at 128, down from 134 last week. Now, before anything else — before we do anything about fluids — I want somebody to go through her drug chart properly and check whether she's on a diuretic or an SSRI, because both of those can do this, and she's been started on something new since her last bloods. Nine times out of ten on this ward it's the medication. And please don't restrict her fluids until we've reviewed the chart. If it turns out to be a drug cause, restricting her is the wrong treatment and she'll feel dreadful for no reason. Bring the chart to me once you've been through it and we'll decide together.",
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
              "text": "restrict her fluid intake now"
            },
            {
              "id": "c",
              "text": "repeat the blood test today"
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
    "slug": "lis-b-f2-gloves-and-hand-hygiene",
    "form": "form-2",
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
      "audioScript": "Infection-control lead: The message I want you to take from this morning is a simple one. Gloves are not a substitute for hand hygiene. Clean your hands before you put them on, and clean them again after you take them off — every time, both times. And I know the second one feels unnecessary, because the whole point of the gloves was that your hands stayed clean. They didn't. Gloves fail, they tear where you can't see it, and your hands get contaminated as you pull them off. There's a further problem, which is the one that really worries me: glove use has actually been shown to reduce hand-washing rather than add to it. People wear them and then skip the rub. That's the opposite of what we want.",
      "questions": [
        {
          "id": "q1",
          "stem": "What is the speaker's main point about gloves?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "they should be worn for all patient contact"
            },
            {
              "id": "b",
              "text": "they replace the need for hand hygiene"
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
    "slug": "lis-b-f2-nil-by-mouth",
    "form": "form-2",
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
      "audioScript": "Nurse: Quick one before you take over. Bed 4 — Mrs Doherty — is nil by mouth for theatre this afternoon. She's second on the list, so realistically about two o'clock, but they've been known to move things forward. Can you make sure the sign is up above the bed and that the water jug's been taken away, because it was still there at eight this morning and she'd been told she could have a drink by somebody. Her daughter's coming in at eleven as well, so it's worth mentioning it to her when she arrives. We don't want the list cancelled because somebody gave her a cup of tea out of kindness. It's happened twice on this ward this month.",
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
              "text": "she does not want anything to drink"
            },
            {
              "id": "c",
              "text": "the jug needs to be cleaned"
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
    "slug": "lis-b-f2-paracetamol-order",
    "form": "form-2",
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
      "audioScript": "Pharmacist: There's a change to the ward's paracetamol order that I want to explain, because on paper it looks like nothing at all. We're changing it from 'four times a day' to 'a maximum of four times a day'. That's it — one word. But the standing 'four times' was being read as an instruction rather than a ceiling, so it was going round with the drug trolley regardless, and for our frailer patients, the ones under fifty kilos, that adds up to a dose that's too high for their weight. Two of them had abnormal liver function last month and this is the likeliest explanation. So from today it's a maximum, and for anyone under fifty kilos please check the weight-adjusted dose on the chart.",
      "questions": [
        {
          "id": "q1",
          "stem": "Why was the wording changed?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the ward's supply was running short"
            },
            {
              "id": "b",
              "text": "the fixed dosing was too high for some patients"
            },
            {
              "id": "c",
              "text": "the nursing staff asked for simpler wording"
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
    "slug": "lis-b-f2-escalating-concern",
    "form": "form-2",
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
      "audioScript": "Nurse educator: The last thing, and it's the one I'd most like you to remember. When you escalate a deteriorating patient, don't just read the numbers down the phone. I know that feels safest, because the numbers are objective and nobody can argue with them, and if you're junior it's tempting to let them speak for themselves. But a list of figures puts the whole job of interpretation onto somebody who can't see the patient. Say what you think is wrong and say what you want. 'I'm worried about sepsis, I need a doctor now' will get you a faster response than a set of observations read out in order. And if you're wrong about the sepsis, that is completely fine. Being wrong out loud is not the problem here.",
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
    "slug": "lis-b-f2-chest-pain-at-reception",
    "form": "form-2",
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
      "audioScript": "Receptionist: This is the one thing from today I really need you to remember, because it will happen and it usually happens when the desk is busiest. If someone comes up and says they think they're having a heart attack, or they've got a crushing pain in the chest, or they just look grey and can't finish a sentence — do not book them in and ask them to take a seat. Don't take their details, don't look for their record, don't ask whether they're registered here. Call the emergency buzzer straight away, and then stay with them until somebody clinical arrives. Chest pain is never put in a queue. Nobody has ever been criticised here for pressing that buzzer and being wrong.",
      "questions": [
        {
          "id": "q1",
          "stem": "What should staff do if someone reports chest pain?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "book them in and ask them to wait"
            },
            {
              "id": "b",
              "text": "take their personal details first"
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
    "slug": "lis-b-f3-sharps-bins",
    "form": "form-3",
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
      "audioScript": "Ward manager: Two things about sharps, and then I'll let you go. Never resheath a used needle — not to make it safer to carry, not for any reason, and if the bin isn't within reach then take the bin to the patient rather than carrying the needle across the room. Second, never overfill the bin. Once it reaches the fill line, seal it and replace it, and don't push things down to make room, which is exactly what people do at four in the morning when the store cupboard is at the other end. I've looked back at the needlestick injuries on this ward over the past two years, and most of them have come from bins that were too full to close properly.",
      "questions": [
        {
          "id": "q1",
          "stem": "What is given as the main cause of needlestick injuries on the ward?",
          "options": [
            {
              "id": "a",
              "text": "sharps bins that were too full"
            },
            {
              "id": "b",
              "text": "needles being resheathed after use"
            },
            {
              "id": "c",
              "text": "staff carrying needles across the room"
            }
          ],
          "answer": "a"
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_B",
    "profession": null,
    "slug": "lis-b-f3-transfusion-check",
    "form": "form-3",
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
      "audioScript": "Charge nurse: I want to go over the bedside check before a transfusion, because I saw it done badly on Tuesday and I don't want to see it again. The check must be done by two staff, together, at the patient's side. Both of you there, both of you looking at the unit and at the wristband, at the same time. What I saw was one person reading it out in the bay and the second signing the form ten minutes later at the desk, and that is not a check — that's two people agreeing with each other. This is the final barrier between a mistake made anywhere upstream and the wrong blood going into a patient, and it only works if you both actually look.",
      "questions": [
        {
          "id": "q1",
          "stem": "What point is made about the pre-transfusion check?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "it can be signed for afterwards at the desk"
            },
            {
              "id": "b",
              "text": "both staff must do it together at the bedside"
            },
            {
              "id": "c",
              "text": "one senior nurse doing it alone is enough"
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
    "slug": "lis-b-f3-timely-notes",
    "form": "form-3",
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
      "audioScript": "Clinical educator: One thing I'd add about documentation, and it's the habit that will serve you best over a career. Write your notes as soon as you can after the event, not hours later at the end of the shift when you're trying to get away. I know why it gets left — there's always something more urgent than writing, and the writing feels like the part that can wait. Two things happen when it waits. Memory fades, and it fades in a particular direction: you remember what you concluded and lose what you actually saw. And a record made at the time carries far more weight if a case is ever reviewed. Contemporaneous is the word that matters there, and it isn't only about protecting yourself.",
      "questions": [
        {
          "id": "q1",
          "stem": "Why should notes be written promptly?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "it is quicker than writing them later"
            },
            {
              "id": "b",
              "text": "so that the shift finishes on time"
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
    "slug": "lis-b-f3-oxygen-as-a-drug",
    "form": "form-3",
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
      "audioScript": "Respiratory nurse: The thing I want to leave you with is this. Oxygen is a drug. It has a dose, it has side effects, and it must be prescribed with a target saturation range on the chart, exactly like anything else you'd give. It isn't a comfort measure and it isn't something you adjust on your own judgement because a patient looks a bit unwell. In some patients with chronic lung disease, high-flow oxygen can actually be dangerous — you can push somebody into retaining carbon dioxide, and by the time you notice, they're drowsy and much harder to help. So find the target range on the chart before you touch the dial. If there isn't one written up, that's the thing to escalate.",
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
    "slug": "lis-b-f3-interpreters",
    "form": "form-3",
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
      "audioScript": "Practice manager: A reminder about interpreting, because we had a complaint about this last month. When a patient doesn't speak much English, book a professional interpreter. Don't rely on their child, and don't rely on an adult relative either, however willing they are and however much easier it makes the appointment. There are three problems with it. Family members soften bad news — they do it kindly and they do it without noticing. They miss detail, particularly around medication and doses. And the patient may simply not want that person to know everything about them, which they will never say in front of them. Booking takes two minutes on the system and there's a telephone service if nobody can attend.",
      "questions": [
        {
          "id": "q1",
          "stem": "Why should family members not be used to interpret?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "it takes longer to arrange"
            },
            {
              "id": "b",
              "text": "they may alter or limit what is said"
            },
            {
              "id": "c",
              "text": "it is against the practice rules"
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
    "slug": "lis-b-f3-red-wristband",
    "form": "form-3",
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
      "audioScript": "Nurse: Just so you know how the wristbands work here, because it varies between trusts. If a patient has a known allergy, they wear a red band rather than a white one, and what's on that band should match what's documented in the allergy section of the chart. The two should always agree. Now — if you see a red band and there's nothing recorded, stop. Don't assume somebody put it on by mistake, and don't assume it's left over from a previous admission. Stop and check before giving anything at all, including the simple things people don't think of as drugs. An unexplained band is a red flag, not a decoration, and the commonest reason for one is that the documenting never got finished.",
      "questions": [
        {
          "id": "q1",
          "stem": "What should you do if a patient has a red wristband but no recorded allergy?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "ignore the band and continue"
            },
            {
              "id": "b",
              "text": "remove the band and carry on"
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
