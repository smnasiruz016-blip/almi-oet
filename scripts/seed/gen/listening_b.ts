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
      "audioScript": "We've confirmed two cases of norovirus on the bay, so we're closing it to new admissions from now. The key thing to remember with norovirus is that alcohol gel isn't enough; you must wash your hands with soap and water after every contact in that bay. Please brief any agency staff arriving today. The reason is worth knowing rather than just obeying: this virus has no outer coat for the alcohol to break, so gel runs over it and leaves it where it was. Soap and running water lift it off physically, and thirty seconds of that does what a litre of gel will not. And it applies on the way in as much as on the way out. People remember to wash when they leave and forget when they arrive, and that is how it travels from this bay to the rest of the ward on the next pair of hands."
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
      "audioScript": "Mrs Patel is medically fit to leave, but her discharge is being held up. It's not the transport or her medication, both of which are sorted; we're waiting on the care agency to confirm her first home visit. Until that package is in place, it isn't safe to send her home. I've chased them twice this morning. The assessment is done, but the first visit can't be booked until their coordinator is back after two, so the honest position is that she is unlikely to move today — and I would rather say that now than let the bed be counted as free on the board. Two things I'd ask. Don't give her family a time until I have one in writing, because they were told Tuesday and it didn't happen. And keep her sitting out and walking to the bathroom rather than back in bed. Three days of waiting is enough to undo what she came in with."
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
      "audioScript": "I've had to adjust the weekend rota because two people are off sick. The long days are all still covered, but I'm now short one person on the Sunday night shift. If anyone can pick that up, please let me know by Friday lunchtime so I can confirm before the weekend. To be clear about what is and isn't covered: Saturday is full, the Sunday day shift is full, and Friday night is covered by an agency booking that's already confirmed. It is the Sunday night, and only that one, that has a gap. If you take it you'd be the second nurse with Priya, who knows the bay, so it isn't a shift where you would be carrying it on your own. And if nobody can, tell me anyway. I would rather book agency on Friday afternoon at the normal rate than at eight on Sunday evening at the panic rate, and that difference comes out of our own budget."
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
      "audioScript": "I've got the results of last week's hand hygiene audit. Our overall score was good at ninety per cent, which is up from last time. The one moment we consistently missed, though, was cleaning our hands before touching a patient, so that's the step to focus on this month. The other two moments were both above ninety per cent, which is a change from last year and worth saying out loud. It is the first one, before you touch anybody, where we fall down. Watching the observations back, the pattern is identical: somebody gels at the bay entrance, then straightens a pillow, then moves a locker, and then touches the patient. The gel was real, but it was three actions too early. So the thing to change isn't how often you clean your hands. It is when. The last thing you touch before the patient should be the gel. We re-audit at the end of the month."
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
      "audioScript": "We've had a complaint from a relative who felt they weren't kept informed after their mother's fall. Having looked into it, the care itself was appropriate and well documented, so this isn't a clinical concern. What we do need to improve is how consistently we update families when something unexpected happens. What happened is that she was found on the floor at ten past four, examined, X-rayed, and nothing was broken — and the family were told at nine the next morning, by somebody who assumed the night staff had already rung. Nobody did anything wrong in isolation. The gap is between people, which is the hardest kind to find and the easiest kind to repeat. So from today, when a patient falls, the person who finds them owns the phone call; and if the hour is unreasonable, they write down that it will be made at eight and who is making it. Say it at handover too. An unmade call is invisible until somebody complains."
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
      "audioScript": "Nurse A: Before you take over, bed four is nil by mouth from midnight for theatre tomorrow. The consent form is signed but the pre-op bloods are still pending. Can you chase them on the next round? The bloods are the one thing that could stop it — group and save and a clotting screen, requested at four and not back, and theatre won't send for her without them. Ring the lab rather than waiting for the result to appear, because the sample may not have gone at all; that has happened twice this month and both times the form was still sitting in the tray. Consent is done and signed, so that isn't a job. The nil by mouth is already up on the board and her family know. It really is just the bloods. If they're not back by ten, tell the night coordinator, so theatre can be warned early rather than at seven in the morning."
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
      "audioScript": "Good morning, everyone. Before we start the shift, I want to flag that we're running at full capacity again today, with two patients waiting in the corridor for beds. Please prioritise reviewing anyone who might be fit for discharge before the post-take round, so we can free up space as early as possible. I'm not asking anyone to send a patient home who isn't ready, and I want that said plainly, because pressure like this is exactly how that happens. What I am asking is that we know by nine which patients are close, so the round can confirm rather than start from nothing. Look for the ones waiting on a single thing — a set of bloods, a piece of equipment, a phone call to a daughter — because those are the ones where an hour of attention this morning is a bed this afternoon. Bring me the name and the one thing. And the post-take round starts on time; it is not being moved."
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
      "audioScript": "Quick reminder that your annual manual handling update is due this month. It's moved online this year, so you can complete it from any computer rather than booking a classroom slot. You'll still need to do the practical hoist assessment in person, though, and that hasn't changed. The online part takes about forty minutes and it saves as you go, so you can do it in two halves. The practical is the bit people put off and it is the bit that actually expires — if it lapses you come off the manual handling rota, which affects the rest of the team more than it affects you. Hoist slots are on the intranet and there are fewer than usual this month, because the training room is being used for the pump rollout. Book it now rather than in the last week. And if your record says you are up to date and you don't think you are, check it anyway."
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
      "audioScript": "A reminder for the team about the IV antibiotics this week. Pharmacy has asked us to give the first dose strictly within an hour of it being prescribed for our sepsis patients, and to document the exact time given. It's the documentation of timing, not the choice of drug, that we keep getting flagged on at audit. The drug choice was right in every case they looked at, and nobody has given anything early — neither of those is the finding. What the audit cannot see is the time, because 'evening' and 'given' are not times, and a blank is read as never. So write the clock time on the chart as you hang it, not afterwards from memory. It matters beyond the audit: the next person needs to know when the clock started, and in sepsis the whole thing is a clock. If the first dose is late, write down why. A stated reason is not a failure. A blank is."
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
      "audioScript": "Just a quick note on the updated visiting policy that starts this week. We're extending afternoon visiting by an hour, so it now runs until five, but we're keeping the limit of two visitors per bed. If families ask, the easiest thing is to point them to the new poster by the entrance. To be exact, it was two until four and it is now two until five. Nothing else has moved. It is still two at the bed, and still the same two rather than a rotation through the afternoon, which is the part that causes most of the argument at the door. The poster by the entrance carries the new times, and a second one goes up by the lift this afternoon, so nobody has to take our word for it. If a family needs longer because they have travelled, ask me rather than saying no. We can nearly always arrange something, and it is easier to grant than to un-refuse."
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
      "audioScript": "A safeguarding point for everyone clerking admissions today. If a patient discloses something that worries you, your job isn't to investigate it yourself or decide whether it's true. What you must do is record exactly what was said in their own words and escalate it to the safeguarding lead the same shift. Their own words matter more than you might think. If you write that a patient seemed frightened of her son, that is your interpretation and it can be argued with later. If you write what she actually said, in the words she used, in quotation marks, that stands. Write it at the time rather than at the end of the shift, and write it even if you are not sure it means anything — you are not the person who has to decide. Escalate the same shift, and if the safeguarding lead has gone home there is an on-call number on the back of your badge."
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
      "audioScript": "Just to flag a supply problem on the unit. We've run out of the large foam dressings, and the next delivery isn't until Thursday. The small and medium sizes are well stocked, so for now please use two mediums where you'd normally reach for a large, rather than ordering extra from another ward. Two mediums with a good overlap will do the same job on most of what we are dressing this week, and if you aren't sure it will, come and look at it with me rather than leaving it. Nobody delays a dressing over this — a wound that needs doing gets done today, with what we have. And please don't ring round the other wards. They are short too, we would be moving the problem rather than solving it, and it makes the real figure invisible to procurement. I have reported this morning's actual usage and Thursday's order has been increased to match it."
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
      "audioScript": "From next Monday we're replacing all the old volumetric pumps with the new touchscreen model. The clinical difference you'll notice most is that the new pumps lock the rate once you confirm it, so you'll have to press the unlock key before any adjustment. Please don't try to force the dial as there isn't one anymore. It records everything the old one did and rather more — the rate, every change to it, and who was logged in when it happened, all retrievable for forty-eight hours. So the lock isn't there to slow you down. It is there because the commonest error on the old pumps was a rate nudged by a sleeve or a bedrail with nobody knowing. The unlock key is the one at the bottom right, held for two seconds, and it times out again after thirty. Practise it before you need it at three in the morning with a family watching."
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
      "audioScript": "Before you start your shift, a quick reminder about the new dressing trolley protocol. From this week, all trolleys must be wiped down with the chlorine-based solution both before and after each procedure, not just at the end of the day. The alcohol wipes we used previously are now only for the patient's skin, not for the trolley surfaces. If you can't find the chlorine wipes, they're being stored in the locked cupboard by the sluice room, and the code is on the whiteboard. Before as well as after is the part people forget, and it is the one that matters most: what is on that trolley now is not what you left on it. Chlorine needs contact time as well, so wipe it and let it dry rather than wiping and loading straight away. It is about a minute. If the cupboard is empty, tell me the same shift rather than falling back on the alcohol wipes."
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
      "audioScript": "Mr Okafor came back from theatre at two o'clock after a hip replacement. His observations have been stable, but he's reported his pain creeping up to seven out of ten in the last hour, so he's due for his next analgesia now rather than later. Everything else, including his wound site, looks fine. It is the direction that concerns me rather than the number. It was three at three o'clock, five at four and seven now, on the same regime, and a score climbing like that after a hip is worth a proper look rather than only the next dose. His observations have been rock steady throughout and I have no concerns there, and the wound is dry with nothing through the dressing. Give the analgesia now, and if he isn't down to a four within the hour, that is the point to ask somebody to see him rather than waiting for the next round."
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
      "audioScript": "Manager: One thing before you go. From Monday the new hand-hygiene audit starts, and you'll see people on the ward with tablets at odd times of day. I want to be clear about what it is and what it isn't. It is not about catching anyone out, and nobody's name goes on anything. What we're doing is gathering baseline data — how we're actually performing now, across all five moments, before we roll out the new sanitiser stations next quarter. Without a proper before, we'll have no way of knowing whether the stations made any difference at all, and we'll have spent the money on a guess. So carry on exactly as you normally would. If you have a bad shift, I'd rather see it in the numbers than not. In three months we'll run it again, and the two sets of numbers together are the only thing that will tell us anything.",
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
      "audioScript": "Doctor: Right, I've had a look at the X-ray with the radiologist, and I can tell you there's no fracture. Nothing broken, nothing cracked, and the joint's in the right place — so that's the good news and I know it's what you were worried about. What I can see, though, is quite a lot of swelling around the outside of the ankle, more than I'd expect from a simple twist, and that suggests she's done significant damage to the soft tissue — the ligaments, essentially. That takes longer to settle than people expect and it doesn't show on the film. So I'd still like her to rest it properly, keep it elevated when she's sitting, and I want to see her again in a week. If the swelling hasn't started to come down by then, or she still can't put weight through it, ring us before the week is out rather than waiting for the appointment.",
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
      "audioScript": "Physiotherapist: Before you go, can I say something about the exercises? Because this is the part people tend to skip, and it's the part that actually works. The exercises matter more than the appointments themselves. What we do in this room is check your technique and move you on when you're ready — but the strength doesn't build in here, it builds in between. If you only do them when you're here, once a week, you won't progress, and in six weeks we'll both be sitting here wondering why. Ten minutes, twice a day, at home. That's the key. Put them somewhere you'll trip over them — after breakfast, before the television goes on. It doesn't matter when, as long as it's most days. And if you miss a day, don't try to make it up by doing double the next — just start again. The people who do well here are not the keen ones, they're the consistent ones.",
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
      "audioScript": "Nurse educator: Right, everyone. Today's session is on the new infusion pumps, and I want to explain why we've focused it the way we have. When we looked at the incidents from the first three months, the commonest error wasn't the programming. Staff are good at that — the interface is clearer than the old one and the rate errors have actually fallen. What's come up again and again is people forgetting to check the line for air before starting, particularly on a busy shift when the pump's been primed by somebody else and you're taking over halfway through. That's the gap. So that's what today covers: priming, checking, and what to do when you didn't prime it yourself. We'll do the programming refresher at the end if there's time. If you take over a running pump and you didn't prime it, treat it as yours from that moment and check it anyway.",
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
      "audioScript": "Receptionist: The other thing to know, and this comes up most days, is what to do when a patient rings about results. Don't read anything out. Not the figure, not the comment, not even that it says normal — and I know that feels unhelpful when someone's clearly anxious on the phone. But it isn't our place, and normal still sometimes needs explaining. A result can sit inside the reference range and still mean something the doctor wants to talk about, and once you've said the word normal, that conversation is much harder to have. So what you do is book them a call with the nurse. Same day if there's a slot, next day if there isn't. If it's flagged urgent, put it through to the duty nurse straight away. Book the call even when they tell you they only want the number. Especially then.",
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
      "audioScript": "Doctor: Can I flag Mrs Cole before you start the round? Her sodium's come back low at 128, down from 134 last week. Now, before anything else — before we do anything about fluids — I want somebody to go through her drug chart properly and check whether she's on a diuretic or an SSRI, because both of those can do this, and she's been started on something new since her last bloods. Nine times out of ten on this ward it's the medication. And please don't restrict her fluids until we've reviewed the chart. If it turns out to be a drug cause, restricting her is the wrong treatment and she'll feel dreadful for no reason. Bring the chart to me once you've been through it and we'll decide together. And note the date anything new was started against the date her sodium moved. If those two line up, we have our answer.",
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
      "audioScript": "Infection-control lead: The message I want you to take from this morning is a simple one. Gloves are not a substitute for hand hygiene. Clean your hands before you put them on, and clean them again after you take them off — every time, both times. And I know the second one feels unnecessary, because the whole point of the gloves was that your hands stayed clean. They didn't. Gloves fail, they tear where you can't see it, and your hands get contaminated as you pull them off. There's a further problem, which is the one that really worries me: glove use has actually been shown to reduce hand-washing rather than add to it. People wear them and then skip the rub. That's the opposite of what we want. So the gloves are for what's on the patient. The hand rub is for what's on you. Both, every time, in that order.",
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
      "audioScript": "Nurse: Quick one before you take over. Bed 4 — Mrs Doherty — is nil by mouth for theatre this afternoon. She's second on the list, so realistically about two o'clock, but they've been known to move things forward. Can you make sure the sign is up above the bed and that the water jug's been taken away, because it was still there at eight this morning and she'd been told she could have a drink by somebody. Her daughter's coming in at eleven as well, so it's worth mentioning it to her when she arrives. We don't want the list cancelled because somebody gave her a cup of tea out of kindness. It's happened twice on this ward this month. And if anything changes on the list and she comes off it, tell me before you give her anything by mouth, because the sign comes down first and the water goes back after, not the other way round.",
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
      "audioScript": "Pharmacist: There's a change to the ward's paracetamol order that I want to explain, because on paper it looks like nothing at all. We're changing it from 'four times a day' to 'a maximum of four times a day'. That's it — one word. But the standing 'four times' was being read as an instruction rather than a ceiling, so it was going round with the drug trolley regardless, and for our frailer patients, the ones under fifty kilos, that adds up to a dose that's too high for their weight. Two of them had abnormal liver function last month and this is the likeliest explanation. So from today it's a maximum, and for anyone under fifty kilos please check the weight-adjusted dose on the chart. Nothing about the supply has changed and nobody asked for tidier wording. One word was doing harm, so one word moves.",
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
      "audioScript": "Nurse educator: The last thing, and it's the one I'd most like you to remember. When you escalate a deteriorating patient, don't just read the numbers down the phone. I know that feels safest, because the numbers are objective and nobody can argue with them, and if you're junior it's tempting to let them speak for themselves. But a list of figures puts the whole job of interpretation onto somebody who can't see the patient. Say what you think is wrong and say what you want. 'I'm worried about sepsis, I need a doctor now' will get you a faster response than a set of observations read out in order. And if you're wrong about the sepsis, that is completely fine. Being wrong out loud is not the problem here. Say the worry first, then the number that made you worry. That order, not the other one.",
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
      "audioScript": "Receptionist: This is the one thing from today I really need you to remember, because it will happen and it usually happens when the desk is busiest. If someone comes up and says they think they're having a heart attack, or they've got a crushing pain in the chest, or they just look grey and can't finish a sentence — do not book them in and ask them to take a seat. Don't take their details, don't look for their record, don't ask whether they're registered here. Call the emergency buzzer straight away, and then stay with them until somebody clinical arrives. Chest pain is never put in a queue. Nobody has ever been criticised here for pressing that buzzer and being wrong. And press it from where you are. Don't walk down the corridor to find somebody, because the moment you leave that desk nobody is with them.",
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
      "audioScript": "Ward manager: Two things about sharps, and then I'll let you go. Never resheath a used needle — not to make it safer to carry, not for any reason, and if the bin isn't within reach then take the bin to the patient rather than carrying the needle across the room. Second, never overfill the bin. Once it reaches the fill line, seal it and replace it, and don't push things down to make room, which is exactly what people do at four in the morning when the store cupboard is at the other end. I've looked back at the needlestick injuries on this ward over the past two years, and most of them have come from bins that were too full to close properly. Not one of them was a resheathing injury. Every one was somebody pushing a hand into a bin that should have been sealed two days earlier.",
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
      "audioScript": "Charge nurse: I want to go over the bedside check before a transfusion, because I saw it done badly on Tuesday and I don't want to see it again. The check on this ward must be done by two staff, together, at the patient's side. Both of you there, both of you looking at the unit and at the wristband, at the same time. What I saw was one person reading it out in the bay and the second signing the form ten minutes later at the desk, and that is not a check — that's two people agreeing with each other. This is the final barrier between a mistake made anywhere upstream and the wrong blood going into a patient, and it only works if you both actually look. Two people at the bedside, at the same moment, or it hasn't happened. That is how it is written here and that is how we do it.",
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
      "audioScript": "Clinical educator: One thing I'd add about documentation, and it's the habit that will serve you best over a career. Write your notes as soon as you can after the event, not hours later at the end of the shift when you're trying to get away. I know why it gets left — there's always something more urgent than writing, and the writing feels like the part that can wait. Two things happen when it waits. Memory fades, and it fades in a particular direction: you remember what you concluded and lose what you actually saw. And a record made at the time carries far more weight if a case is ever reviewed. Contemporaneous is the word that matters there, and it isn't only about protecting yourself. It is not about being quick and it is not about getting off on time. It is about the note being true.",
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
      "audioScript": "Respiratory nurse: The thing I want to leave you with is this. Oxygen is a drug. It has a dose, it has side effects, and it must be prescribed with a target saturation range on the chart, exactly like anything else you'd give. It isn't a comfort measure and it isn't something you adjust on your own judgement because a patient looks a bit unwell. In some patients with chronic lung disease, high-flow oxygen can actually be dangerous — you can push somebody into retaining carbon dioxide, and by the time you notice, they're drowsy and much harder to help. So find the target range on the chart before you touch the dial. If there isn't one written up, that's the thing to escalate. And write the range down when you set it, not afterwards from memory, because the next person coming on shift has nothing else to work from.",
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
      "audioScript": "Practice manager: A reminder about interpreting, because we had a complaint about this last month. When a patient doesn't speak much English, book a professional interpreter. Don't rely on their child, and don't rely on an adult relative either, however willing they are and however much easier it makes the appointment. There are three problems with it. Family members soften bad news — they do it kindly and they do it without noticing. They miss detail, particularly around medication and doses. And the patient may simply not want that person to know everything about them, which they will never say in front of them. Booking takes two minutes on the system and there's a telephone service if nobody can attend. None of that is about anybody's honesty. It's about what a person can carry when the news is bad and they love the patient, which is exactly when the detail matters most.",
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
      "audioScript": "Nurse: Just so you know how the wristbands work here, because it varies between trusts. If a patient has a known allergy, they wear a red band rather than a white one, and what's on that band should match what's documented in the allergy section of the chart. The two should always agree. Now — if you see a red band and there's nothing recorded, stop. Don't assume somebody put it on by mistake, and don't assume it's left over from a previous admission. Stop and check before giving anything at all, including the simple things people don't think of as drugs. An unexplained band is a red flag, not a decoration, and the commonest reason for one is that the documenting never got finished. Check with the patient first if they can tell you, then the notes, then whoever admitted them. It takes a couple of minutes and it is the last chance anyone gets.",
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
