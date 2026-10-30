// 85 new Reading items of 1 November 2026: 72 Part B + 13 Part C, so Reading reaches 20 full tests
// (Part B 120 = 20 × 6, Part C 40 = 20 × 2). Original texts written for AlmiOET; checked by beta-g.
//
// A separate module, like reading_a_sets/reading_b_sets: reading_b/reading_c were generated FROM PRODUCTION and
// must keep describing the rows already there. Every item carries its explanations (payload.explanations, the B1
// format read by src/lib/oet/review.ts). Source: Desktop\oet test\AlmiOET_READ_BC_new_source_v1.json.
//
// New rows reach production through scripts/seed/append.ts (insert-only, dedupes on taskType + profession + title).
import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-cleaning-a-commode-between-patients",
    "title": "Part B — Notice: cleaning a commode between patients",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "commode-cleaning",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The notice says an unlabelled commode counts as dirty even when it appears clean, so staff must not rely on how it looks.",
          "evidence": "A commode without a label must be treated as dirty, even if it looks clean.",
          "wrong": {
            "b": "This is the opposite: appearance is not enough, because an unlabelled commode is treated as dirty.",
            "c": "Staying in the room applies to commodes used by patients with infection, not to commodes without labels."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Commodes on this ward are shared equipment, so each one must be cleaned after every use, not only at the end of a shift. After use, take the commode to the sluice, remove the pan and dispose of the contents in the macerator. Wearing gloves and an apron, wipe the whole frame with a detergent and disinfectant wipe, working from the cleaner parts, such as the arms and backrest, towards the seat and finally the wheels. Pay particular attention to the hinges and the underside of the seat, where soiling is often missed. Allow all surfaces to dry before attaching a green 'I am clean' label, signed and dated. A commode without a label must be treated as dirty, even if it looks clean. If a patient has a known or suspected infection, their commode stays in their room and is cleaned with the chlorine-based product kept in the sluice."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about a commode that has no label?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Staff should assume it has not been cleaned, whatever it looks like."
            },
            {
              "id": "b",
              "text": "It may be used again if there is no visible soiling on it."
            },
            {
              "id": "c",
              "text": "It should stay in the room of a patient who has an infection."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-the-daily-resuscitation-trolley-check",
    "title": "Part B — Policy extract: the daily resuscitation trolley check",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "resus-trolley-check",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "A broken tag means the trolley may have been opened, and the policy then requires a full check of the contents against the list, with restocking and a new tag.",
          "evidence": "once a week, or whenever the tag is broken, the full contents are checked against the list, restocked and a new tag fitted",
          "wrong": {
            "a": "The policy says the drawers do not need opening at the daily check if the tag is intact.",
            "c": "The checker on the rota signs the trolley; the nurse in charge is told only about defibrillator faults."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "The resuscitation trolley in each clinical area is checked every day by a registered nurse or a trained healthcare assistant named on the daily rota. The check has two parts. First, confirm that the tamper-evident tag on the trolley is intact and that its number matches the one written in the checklist folder. If the tag is intact, the drawers do not need to be opened; check only the defibrillator self-test result, the suction unit, the oxygen cylinder level and the earliest expiry date recorded on the tag. Second, once a week, or whenever the tag is broken, the full contents are checked against the list, restocked and a new tag fitted. Any missing or expired item must be replaced before the trolley is signed as ready. Record each check on the sheet attached to the trolley, and report any fault with the defibrillator to the nurse in charge immediately."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, staff must",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "open every drawer and count all the contents at each daily trolley check."
            },
            {
              "id": "b",
              "text": "check all the contents when they find the tag has been broken."
            },
            {
              "id": "c",
              "text": "ask the nurse in charge to sign the trolley as ready each day."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-storing-expressed-breast-milk-on-the-ward",
    "title": "Part B — Guideline: storing expressed breast milk on the ward",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "breast-milk-storage",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The guideline requires two checkers before a feed, one of whom must be a nurse, and it states that a parent is allowed to be the second.",
          "evidence": "two people, one of whom must be a nurse, check the label against the child's wristband; a parent may act as the second checker",
          "wrong": {
            "a": "Warmed milk that is not used is thrown away, not put back in the fridge.",
            "b": "Only the nurse in charge decides whether milk can still be used after a temperature problem."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Parents who express breast milk for their child on the ward are asked to label each container with the child's name, hospital number and the date and time of expressing.Fresh milk is placed straight into the dedicated breast milk fridge, never in the staff or ward food fridge. Each child has a named basket, and containers belonging to different children must not share a basket. Before any feed, two people, one of whom must be a nurse, check the label against the child's wristband; a parent may act as the second checker. Milk that has been warmed and not used is discarded, not returned to the fridge. The fridge temperature is checked and recorded twice a day by the nurse allocated to the milk kitchen. If the reading is outside the marked range, inform the nurse in charge, who decides whether the stored milk can still be used."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "milk warmed for a feed may go back in the fridge if unused."
            },
            {
              "id": "b",
              "text": "any member of staff can decide if milk is usable after a fault."
            },
            {
              "id": "c",
              "text": "a parent can be one of the two people who check the milk."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-using-the-mobile-hoist",
    "title": "Part B — Memo: using the mobile hoist",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "hoist-two-staff",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The manager writes after a near miss to remind staff of rules already in place, such as two trained operators and checking the plan for the sling.",
          "evidence": "Following a recent near miss, I would like to remind everyone that the mobile hoist must always be operated by two members of staff",
          "wrong": {
            "b": "Training is mentioned only as a requirement already completed by operators; no new training is announced.",
            "c": "The memo says the opposite: staff must not choose a sling by eye but follow the plan."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "To: All ward staff\nFrom: Ward Manager\nSubject: Using the mobile hoist\n\nFollowing a recent near miss, I would like to remind everyone that the mobile hoist must always be operated by two members of staff who have completed the trust's moving and handling training. One person controls the hoist while the other guides and reassures the patient. Before each use, check the patient's moving and handling plan, which states the sling type and size; do not choose a sling by eye. Inspect the sling for fraying and make sure its label is legible. Slings are for single-patient use and are stored in the patient's locker, not on the hoist. If only one trained colleague is available, wait until a second arrives rather than starting alone, and tell the nurse in charge if the delay affects the patient's care. Please also return the hoist to its charging point after use."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The purpose of this memo is to",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "reinforce the existing rules for safe hoist use after an incident."
            },
            {
              "id": "b",
              "text": "announce new moving and handling training sessions for staff on the ward."
            },
            {
              "id": "c",
              "text": "explain how to choose a sling size by looking at the patient."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-an-oral-care-plan-for-dependent-patients",
    "title": "Part B — Guideline: an oral care plan for dependent patients",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "oral-care-plan",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Foam sticks are allowed for moistening, but the guideline says they cannot take the place of a toothbrush because they leave plaque behind.",
          "evidence": "Foam sticks may be used to moisten the mouth but must not replace brushing, because they do not remove plaque.",
          "wrong": {
            "a": "Ulcers and a sore mouth are to be reported to the nurse in charge; foam sticks are not linked to them.",
            "c": "The guideline says foam sticks do not remove plaque at all."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Patients who cannot clean their own teeth should have an oral care plan completed on admission by the registered nurse admitting them. The plan records whether the patient has natural teeth, dentures or both, any problems seen in the mouth, and how often care is needed. For most dependent patients, teeth are brushed at least twice a day with a small, soft toothbrush and the patient's own toothpaste. Dentures are removed, brushed over a bowl of water and kept overnight in a labelled denture pot, as the plan directs. Foam sticks may be used to moisten the mouth but must not replace brushing, because they do not remove plaque. Care given is recorded on the oral care chart at the bedside. Staff who notice ulcers, bleeding or a sore mouth should report this to the nurse in charge, who may ask for a referral to the dental team."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the guideline say about foam sticks?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They should be kept for patients who have ulcers or a sore mouth."
            },
            {
              "id": "b",
              "text": "They can moisten the mouth but should not be used instead of brushing."
            },
            {
              "id": "c",
              "text": "They remove plaque more gently than a soft toothbrush does."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-medicines-brought-in-from-home",
    "title": "Part B — Policy extract: medicines brought in from home",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "patients-own-medicines",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Once pharmacy staff have judged a medicine suitable, it goes in the patient's own locker and may be given only to that patient.",
          "evidence": "Medicines judged suitable are stored in the patient's bedside locker and used for that patient only.",
          "wrong": {
            "a": "The admitting nurse records the medicines; pharmacy staff assess whether they are suitable.",
            "b": "Stopped medicines are sent for destruction only with the patient's agreement."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Patients are encouraged to bring their own medicines into hospital, as these help staff confirm what the patient was taking before admission. On arrival, the admitting nurse records the medicines brought in and asks for the patient's consent to use them on the ward. A pharmacist or pharmacy technician then assesses each item for suitability, checking that it is clearly labelled, in date and in its original container. Medicines judged suitable are stored in the patient's bedside locker and used for that patient only. Unsuitable items, or those the prescriber has stopped, must not be used; with the patient's agreement, they are sent to pharmacy for destruction or taken home by a relative. Controlled drugs brought from home are recorded in the ward's patients' own controlled drugs register and kept in the controlled drugs cupboard. On discharge, any of the patient's own medicines that are still prescribed are returned to them."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, staff must",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "ask a pharmacist to record which medicines the patient has brought in."
            },
            {
              "id": "b",
              "text": "send stopped medicines for destruction, whether or not the patient agrees."
            },
            {
              "id": "c",
              "text": "keep a patient's suitable medicines for use by that patient alone."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-joining-the-self-administration-scheme",
    "title": "Part B — Email: joining the self-administration scheme",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "self-administration",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The email explains that a patient may be returned to a lower level whenever their state changes, giving sedation and confusion as examples.",
          "evidence": "A patient can be moved down a level at any time, for example after sedation or if they become confused, and this must be documented.",
          "wrong": {
            "b": "The email says patients are not enrolled automatically; the named nurse assesses them first.",
            "c": "At level three the nurse still checks and signs the chart every day."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Subject: Self-administration scheme on Larch Ward\n\nDear colleagues,\n\nFrom next month, Larch Ward will join the self-administration of medicines scheme already running on the surgical wards. Patients will not be enrolled automatically. The named nurse first completes an assessment with the patient, which considers their understanding of each medicine, their ability to open containers and read labels, and their wish to take part. There are three levels: at level one, the nurse gives the medicine and explains it; at level two, the patient takes it under supervision; at level three, the patient manages their own supply from a locked bedside drawer, and the nurse checks and signs the chart daily. A patient can be moved down a level at any time, for example after sedation or if they become confused, and this must be documented. Dates for training sessions are on the ward noticeboard.\n\nBest wishes,\nPriya Shah, Clinical Lead"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "This email informs staff that",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "a patient's level in the scheme can be lowered if their condition changes."
            },
            {
              "id": "b",
              "text": "patients on Larch Ward will join the scheme automatically as soon as they are admitted."
            },
            {
              "id": "c",
              "text": "nurses will no longer sign the chart for patients at the highest level."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-checking-a-pca-pump-at-handover",
    "title": "Part B — Guideline: checking a PCA pump at handover",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "pca-handover-check",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Many unsuccessful presses can be a sign that the patient's pain relief is not adequate, and the guideline says this is a matter for the acute pain team.",
          "evidence": "A large number of unsuccessful demands may mean that pain is poorly controlled and should be discussed with the acute pain team",
          "wrong": {
            "a": "Ward nurses must never alter the settings; the problem is discussed with the acute pain team.",
            "c": "Both nurses carry out the check together and record the figures on the chart."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "At every handover, the outgoing and incoming nurses check a patient-controlled analgesia (PCA) pump together at the bedside. They confirm the patient's identity against the wristband and the prescription, then compare the drug, concentration and pump programme with what is prescribed. They also read the total volume given since the last check and the number of successful and unsuccessful demands, and record these on the PCA chart. A large number of unsuccessful demands may mean that pain is poorly controlled and should be discussed with the acute pain team; ward nurses must never alter the pump settings. Both nurses check the patient's sedation score, respiratory rate and pain score at the same time. The line is traced from the pump to the patient to make sure it is connected and that the anti-siphon valve is in place. Only the patient may press the demand button, and relatives should be reminded of this."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the guideline say about unsuccessful demands?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Ward nurses should change the pump settings if there are many."
            },
            {
              "id": "b",
              "text": "A high number may suggest the patient's pain is not well controlled."
            },
            {
              "id": "c",
              "text": "Only the incoming nurse records them on the PCA chart."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-syringe-driver-checks-at-each-shift",
    "title": "Part B — Instructions: syringe driver checks at each shift",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "syringe-driver-check",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "An unexpected volume may mean the driver is faulty, so the instructions say not to restart it and to ask the palliative care team or on-call doctor.",
          "evidence": "A difference larger than expected may indicate a fault and the driver should not simply be restarted",
          "wrong": {
            "a": "Changing the site and telling the nurse in charge is the action for a problem at the infusion site.",
            "b": "The battery is replaced when its charge is too low, not when the volume is wrong."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Syringe driver checks: each shift\n\n1. Check the patient's identity and the prescription, and confirm that the drugs and diluent match the syringe label.\n2. Look at the infusion site for redness, swelling, leakage or hardness. If any of these is present, the site should be changed and the nurse in charge informed.\n3. Check that the line is free of kinks and that the syringe is firmly seated in the driver.\n4. Compare the volume remaining in the syringe with the volume expected at this point in the infusion. A difference larger than expected may indicate a fault and the driver should not simply be restarted; contact the palliative care team or the on-call doctor for advice.\n5. Confirm that the battery has enough charge for the rest of the infusion, and replace it if not.\n6. Record all findings on the syringe driver monitoring chart."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the instructions, if the volume left in the syringe is not as expected, the nurse should",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "change the infusion site and let the nurse in charge know about it."
            },
            {
              "id": "b",
              "text": "replace the battery and write the finding on the chart."
            },
            {
              "id": "c",
              "text": "seek advice rather than just setting the driver going again."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-restocking-the-hypoglycaemia-box",
    "title": "Part B — Notice: restocking the hypoglycaemia box",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "hypo-box-restock",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The notice makes the nurse who opened the box responsible for refilling it promptly, without waiting for the weekly check.",
          "evidence": "As soon as possible after a box has been used, the nurse who used it must restock it from the spares in the pharmacy cupboard",
          "wrong": {
            "b": "The Monday nurse checks expiry dates; staff are told not to wait for that check to restock.",
            "c": "Pharmacy is involved only when a spare item is unavailable and the nurse in charge orders it."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Hypoglycaemia boxes: restocking after use\n\nEvery ward has a red hypoglycaemia box kept in the treatment room, and its location is marked on the emergency equipment map. The box contains the items needed to treat a low blood glucose, together with a copy of the trust's hypoglycaemia guideline. As soon as possible after a box has been used, the nurse who used it must restock it from the spares in the pharmacy cupboard and complete the restocking slip inside the lid. Do not wait for the weekly check. If a spare item is not available, tell the nurse in charge, who will order it from pharmacy and attach a note to the box saying what is missing. The weekly check is carried out every Monday by the nurse allocated on the rota, who checks expiry dates and signs the record. Please do not remove items from the box for any other purpose."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about restocking the box after it has been used?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It is the job of the nurse who used the box, soon afterwards."
            },
            {
              "id": "b",
              "text": "It is done by the nurse doing the weekly Monday check."
            },
            {
              "id": "c",
              "text": "It is arranged by pharmacy once the nurse in charge has been told."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-skin-preparation-for-blood-cultures",
    "title": "Part B — Policy extract: skin preparation for blood cultures",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "blood-culture-skin-prep",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Touching the cleaned site undoes the preparation, so if the nurse or doctor has to feel for the vein again, the policy requires the skin to be prepared a second time.",
          "evidence": "if you need to feel for the vein again, the skin must be cleaned once more",
          "wrong": {
            "a": "An existing cannula is used only when a doctor asks, to look for a line infection, not for convenience.",
            "c": "The bottle tops are cleaned with a separate alcohol wipe, not the skin applicator."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Contaminated blood cultures can lead to unnecessary antibiotics and longer stays, so skin preparation must follow this procedure. Before starting, check the patient's identity and clean your hands. Choose a fresh venepuncture site; blood cultures should not be taken from an existing cannula unless a doctor has asked for this to look for a line infection. Clean the skin with a 2% chlorhexidine in 70% alcohol applicator, using back-and-forth strokes for the time stated by the manufacturer, and then allow the skin to dry completely. Do not touch the site again after cleaning; if you need to feel for the vein again, the skin must be cleaned once more. Remove the caps from the culture bottles and clean the tops with a separate alcohol wipe, letting them dry. Fill the aerobic bottle first when using a winged collection set. Label the bottles at the bedside and record the site used."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The policy makes it clear that",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "cultures may be taken from an existing cannula if it is more convenient."
            },
            {
              "id": "b",
              "text": "the skin needs cleaning again if the vein is felt after preparation."
            },
            {
              "id": "c",
              "text": "the bottle tops may be cleaned with the skin applicator."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-the-daily-catheter-review",
    "title": "Part B — Memo: the daily catheter review",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "catheter-daily-review",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The memo's main point is a new routine: from Monday, whether each catheter is still justified will be reviewed at the morning huddle every day.",
          "evidence": "From Monday, the daily catheter review will become part of the morning safety huddle.",
          "wrong": {
            "a": "Too strong: nurses may remove a catheter only if the patient has none of the listed exclusions.",
            "b": "The audit is mentioned only as the reason for the change; staff are not asked to comment."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "To: Registered nurses and doctors, Medical Unit\nFrom: Infection Prevention Lead\nSubject: Daily catheter review\n\nEvery day a urinary catheter remains in place adds to the risk of infection, yet our recent audit found catheters left in for days after the original reason had passed. From Monday, the daily catheter review will become part of the morning safety huddle. For each catheterised patient, the nurse looking after them will confirm whether the reason recorded at insertion still applies. If it no longer does, the nurse may remove the catheter under the nurse-led removal guideline, provided the patient has none of the listed exclusions, such as recent urological surgery; otherwise the medical team must be asked to review it the same day. The outcome is recorded on the catheter care bundle each time, including when the catheter is kept. Patients and families should be told why a catheter is still needed."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The purpose of this memo is to",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "allow nurses to remove any catheter once its reason has passed."
            },
            {
              "id": "b",
              "text": "share the findings of a recent audit and ask staff to comment on them."
            },
            {
              "id": "c",
              "text": "build a check on each catheter's continued need into a morning meeting."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-labelling-a-peripheral-cannula",
    "title": "Part B — Policy extract: labelling a peripheral cannula",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "cannula-labelling",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The policy says that when a cannula has no label and no insertion record exists, it is regarded as overdue for review and the medical team is told.",
          "evidence": "if no insertion record can be found, the cannula is treated as overdue for review",
          "wrong": {
            "b": "The label goes on the edge of the dressing, not on the skin or the cannula hub.",
            "c": "The policy forbids writing labels later to fill a gap in the record."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Peripheral cannula labelling\n\nAll peripheral cannulas inserted in this trust must be labelled at the time of insertion. The person who inserts the device writes the date and time of insertion on the label supplied with the dressing pack and attaches it to the edge of the dressing, not to the skin or the cannula hub. The same details, together with the site and size of the cannula, are entered in the electronic device record before the end of the shift. A cannula found without a label should not be assumed to be recent. The nurse responsible for the patient checks the device record; if no insertion record can be found, the cannula is treated as overdue for review and the medical team is informed so that a decision about removal or resiting can be made. Labels must not be written later to fill a gap in the record."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, staff must",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "treat an unlabelled cannula with no record as needing review."
            },
            {
              "id": "b",
              "text": "attach the insertion label directly to the hub of the cannula."
            },
            {
              "id": "c",
              "text": "add a missing label later, using the best available estimate of the time."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-changing-a-central-line-dressing",
    "title": "Part B — Guideline: changing a central line dressing",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "central-line-dressing",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "A transparent dressing has a planned change date, but the guideline says it is changed earlier if it comes loose, becomes damp or is soiled.",
          "evidence": "A transparent dressing is changed on the date shown on its label, or sooner if it becomes loose, damp or visibly soiled.",
          "wrong": {
            "a": "Staff who are not signed off may only assist and must not perform the change themselves.",
            "c": "Gauze dressings need changing more often and are checked every shift; the label date applies to transparent dressings."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Central venous catheter dressings: ward guidance\n\nDressing changes on central lines are carried out only by nurses who have completed the trust's central access competency. Staff who have not yet been signed off may assist, but must not perform the change themselves. A transparent dressing is changed on the date shown on its label, or sooner if it becomes loose, damp or visibly soiled. Gauze dressings, which are sometimes used where the site is oozing, need changing more often and are checked at every shift. The procedure uses an aseptic non-touch technique, and the skin is cleaned and allowed to dry completely before the new dressing is applied. Each change is documented on the line care chart, including the condition of the insertion site. Any redness, swelling or discharge at the site is reported to the nurse in charge, recorded on the chart and reviewed by the medical team."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "nurses not yet signed off may change a dressing if supervised."
            },
            {
              "id": "b",
              "text": "a dressing that lifts or gets wet is replaced before its due date."
            },
            {
              "id": "c",
              "text": "gauze dressings are changed only on the date shown on the label."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-consent-for-wound-photographs",
    "title": "Part B — Notice: consent for wound photographs",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "wound-photography",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The notice accepts spoken consent for care-only images, but requires the trust's written form whenever a photograph could later be used for teaching or publication.",
          "evidence": "Written consent on the trust form is required if an image might later be used for teaching or publication.",
          "wrong": {
            "a": "Verbal consent is acceptable when the photograph is used only for the patient's care.",
            "b": "Verbal consent is acceptable only if it is recorded in the notes at the time."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Wound photography: consent and storage\n\nPhotographs of wounds are a valuable part of the clinical record, but they may only be taken with the patient's consent. Verbal consent is acceptable for photographs used solely for the patient's care, provided it is recorded in the notes at the time. Written consent on the trust form is required if an image might later be used for teaching or publication. Where a patient lacks the capacity to consent, the decision is made under the trust's best-interests procedure and recorded. Images must be taken on a trust-issued device using the approved clinical photography app, which uploads them directly to the patient's electronic record. They must not be saved, forwarded or kept anywhere else. Each image should include a measuring scale and should avoid identifying features such as the face or tattoos, unless these are clinically relevant."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about consent?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Written consent is needed for every photograph of a wound."
            },
            {
              "id": "b",
              "text": "Verbal consent need not be recorded if the image is only for care."
            },
            {
              "id": "c",
              "text": "Written consent is needed if an image may be used for teaching."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-personal-phones-and-clinical-images",
    "title": "Part B — Memo: personal phones and clinical images",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "personal-phone-photos",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The memo tells staff to stop using their own phones immediately and sets out what to do with any images they already hold: contact governance so they can be transferred before removal.",
          "evidence": "I need to be clear that this practice must stop with immediate effect.",
          "wrong": {
            "b": "Staff are told not to simply delete existing images but to contact the governance team first.",
            "c": "Showing a tissue viability nurse is given as a well-meant reason, but the practice must still stop."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "To: all community and ward nursing staff\nFrom: Information Governance Lead\nSubject: personal phones and clinical images\n\nIt has come to our attention that some staff have been photographing wounds and skin conditions on their own mobile phones, usually with good intentions, such as showing a tissue viability nurse a change in a pressure ulcer. I need to be clear that this practice must stop with immediate effect. Images on a personal device can be backed up automatically to private cloud accounts, and the trust has no way of controlling or deleting them. If you already hold clinical images on a personal phone, please do not simply delete them. Contact the governance team, who will arrange for any images needed for the record to be transferred safely before they are removed. Trust devices with the approved app are kept at each team base and can be booked through your team leader."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The purpose of this memo is to",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "end a practice and explain how images already taken will be handled."
            },
            {
              "id": "b",
              "text": "ask staff to delete clinical images from their own phones at once."
            },
            {
              "id": "c",
              "text": "allow personal phones when a specialist nurse needs to see a wound."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-sending-patient-information-by-email",
    "title": "Part B — Email: sending patient information by email",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "email-patient-data",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "For recipients outside the approved list, messages are encrypted and the password is passed on by telephone rather than in another email.",
          "evidence": "the password must be shared by telephone, never in a second email",
          "wrong": {
            "a": "GP practices are on the approved secure list, so encryption is required only for recipients not on it.",
            "c": "The email says no patient details should be put in the subject line at all."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Subject: Emailing patient-identifiable information\n\nDear colleagues,\n\nFollowing a recent incident in which a referral was sent to the wrong external address, I would like to remind everyone how patient information should be emailed. Patient-identifiable details may only be sent from your trust account to recipients on the approved secure list, which includes GP practices and partner hospitals. If the recipient is not on that list, the message must be sent using the encryption option, and the password must be shared by telephone, never in a second email. Before pressing send, check the full address rather than relying on the auto-complete suggestion, as this caused the recent error. Include only the information the recipient needs, and put no patient details in the subject line. If you send a message to the wrong person, report it the same day through the incident system and tell your line manager.\n\nKind regards,\nClinical Systems Team"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "This email informs staff that",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "emails to GP practices must always be sent with encryption."
            },
            {
              "id": "b",
              "text": "the password for an encrypted message should be given by phone."
            },
            {
              "id": "c",
              "text": "patient details may go in the subject line of an encrypted email."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-staff-use-of-social-media",
    "title": "Part B — Policy extract: staff use of social media",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "social-media",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The policy says staff should refuse friend or follow requests from patients currently in their care, or from relatives, and that a polite refusal is the right response.",
          "evidence": "Staff should not accept friend or follow requests from current patients or their relatives; a polite refusal referring to this policy is appropriate.",
          "wrong": {
            "a": "The trust does not wish to discourage private use; it only says professional codes still apply.",
            "b": "Staff should report a worrying post to their manager rather than respond to it themselves."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Staff use of social media\n\nThe trust recognises that many staff use social media in their private lives and does not wish to discourage this. However, staff remain bound by their professional codes when posting online, even on personal accounts and outside working hours. Nothing should be posted that could identify a patient, including photographs taken on wards in which a patient, a whiteboard or a screen might be visible in the background. Staff should not accept friend or follow requests from current patients or their relatives; a polite refusal referring to this policy is appropriate. Concerns about colleagues or about the trust's services should be raised through the proper channels rather than online. Staff who see a post that worries them, whether written by a colleague or a member of the public, should report it to their manager rather than responding to it themselves."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, staff must",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "stop using personal social media accounts in their own time."
            },
            {
              "id": "b",
              "text": "reply directly to any public post that criticises the trust."
            },
            {
              "id": "c",
              "text": "politely decline online contact requests from current patients."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-lone-working-in-the-community",
    "title": "Part B — Policy extract: lone working in the community",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "lone-working",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "It is the staff member's job to let the coordinator know, by phone or text, that the final visit of the day is over.",
          "evidence": "each staff member confirms to the team coordinator, by telephone or text, that they have finished their final visit",
          "wrong": {
            "b": "The coordinator only tries to make contact if confirmation has not arrived within an hour.",
            "c": "Missing confirmation leads first to contact attempts; the police may be involved only through escalation."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Lone working: community teams\n\nBefore starting each shift, community staff record their planned visits in the team's electronic diary, including the address and expected time of each visit. Any change to the plan, such as an added or cancelled visit, must be entered in the diary as soon as it is safe to do so. Staff carry the trust-issued lone worker device at all times and check that it is charged before leaving the base. At the end of the working day, each staff member confirms to the team coordinator, by telephone or text, that they have finished their final visit. If this confirmation has not arrived within an hour of the expected finishing time, the coordinator tries to contact the staff member and, if unsuccessful, follows the escalation procedure, which may include contacting the police. Staff who feel unsafe at any point should leave the premises."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the policy say about the end of the working day?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Staff tell the coordinator once they have completed their last visit."
            },
            {
              "id": "b",
              "text": "The coordinator rings each staff member as soon as their last visit ends."
            },
            {
              "id": "c",
              "text": "The police are called if a staff member finishes an hour late."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-animals-at-home-visits",
    "title": "Part B — Notice: animals at home visits",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "pets-home-visits",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The notice gives staff the right to request that animals are put in a different room for the length of the visit.",
          "evidence": "staff are entitled to ask for animals to be kept in another room during a visit",
          "wrong": {
            "a": "Scratches and threatening behaviour must be reported as well as bites.",
            "c": "If staff do not feel safe, the visit may be ended and rearranged."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Animals at home visits\n\nMost patients' pets cause no difficulty, but staff are entitled to ask for animals to be kept in another room during a visit. This request should be made politely, ideally when the visit is booked, so that the household can prepare. If a patient refuses and the staff member does not feel safe, the visit may be ended and rearranged; staff must not carry on simply to avoid disappointing the family. Any incident involving an animal, including a bite, a scratch or threatening behaviour, must be reported through the incident system, and a bite should also be assessed by a clinician the same day. Information about animals at an address is added to the patient's record as an alert, so that colleagues visiting later are aware. Staff with an allergy to animals, or a fear of them, should discuss this with their team leader in advance."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about animals?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Only bites need to be reported through the trust's incident system."
            },
            {
              "id": "b",
              "text": "Staff can ask for a pet to be kept elsewhere while they visit."
            },
            {
              "id": "c",
              "text": "Staff should continue a visit even if the family will not move a pet."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-key-safe-codes",
    "title": "Part B — Instructions: key-safe codes",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "key-safe-codes",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "After the key has been returned and the safe shut, staff are told to scramble the code so that it cannot be read before they go.",
          "evidence": "After using the key, return it to the safe, close the safe and scramble the code before leaving.",
          "wrong": {
            "a": "The code must never be written on the visit schedule; it is looked up in the record.",
            "b": "The code is shared with relatives only if the patient has agreed."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Key-safe codes: instructions for community staff\n\nSome patients who cannot answer the door have a key safe fitted outside their home. The code for each key safe is held only in the restricted section of the patient's electronic record, and it must never be written in paper notes, diaries or text messages, or on the visit schedule. Look up the code immediately before the visit and do not share it with anyone outside the care team, including relatives, unless the patient has agreed. After using the key, return it to the safe, close the safe and scramble the code before leaving. If the key is missing or the safe appears damaged, do not leave the property unsecured; contact the coordinator for advice. Patients are encouraged to change their codes regularly, and any new code given to staff must be updated in the record the same day."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the instructions, staff must",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "note the code on the visit schedule before setting out each day."
            },
            {
              "id": "b",
              "text": "give the code to any relatives who ask for it at the front door."
            },
            {
              "id": "c",
              "text": "mix up the code numbers once the key is back in the safe."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-the-medicines-fridge-alarm",
    "title": "Part B — Memo: the medicines fridge alarm",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "fridge-temperature",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The memo sets out the steps after an out-of-range reading: the stock is labelled and kept cold, and the duty pharmacist decides whether it can still be used.",
          "evidence": "It is the pharmacist, not the person who found the problem, who decides whether the stock can be used",
          "wrong": {
            "b": "Staff must not discard the stock; it is kept refrigerated until the pharmacist decides.",
            "c": "The thermometer is reset only after the readings have been recorded, so the evidence is kept."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "To: all dispensary staff\nFrom: Pharmacy Manager\n\nFollowing last week's alarm on the dispensary fridge, I want to clarify what happens when a reading falls outside the permitted range. The member of staff who notices the reading must not discard the stock, and must not continue to supply from the fridge. Instead, the contents are labelled 'do not use' and kept refrigerated, either in the same fridge if it is working or in the back-up unit. The current, minimum and maximum readings are recorded on the log sheet, with the time the problem was found, and the duty pharmacist is informed straight away. It is the pharmacist, not the person who found the problem, who decides whether the stock can be used, often after advice from the manufacturer. Please reset the thermometer only after the readings have been recorded; otherwise the evidence needed for that decision is lost."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The purpose of this memo is to",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "explain who decides about affected stock and how it is kept meanwhile."
            },
            {
              "id": "b",
              "text": "tell staff to dispose of all affected stock after any out-of-range reading."
            },
            {
              "id": "c",
              "text": "ask staff to reset the thermometer as soon as an alarm sounds."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-quarantining-a-recalled-batch",
    "title": "Part B — Notice: quarantining a recalled batch",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "medicine-recall",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The response form is returned in every case: it either gives the quantity found or confirms that the area held none.",
          "evidence": "stating the quantity found or confirming that none was held, and returns it to pharmacy by the end of the shift",
          "wrong": {
            "a": "Only the named batch is removed; other batches of the same medicine may still be used.",
            "c": "Recalled stock must not be sent through the normal returns system; pharmacy staff collect it."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Medicine recall: action for wards and departments\n\nWhen the pharmacy receives a recall notice for a batch of a medicine, it sends an alert to every area that may hold stock. On receiving the alert, the nurse in charge checks all places where the product might be kept, including the drug trolley, the controlled drug cupboard where relevant, and any supplies of patients' own medicines. Any stock from the named batch is removed from use, placed in a sealed bag clearly marked as recalled, and kept separately until collected by pharmacy staff. It must not be thrown away or sent back through the normal returns system. Stock from other batches of the same medicine may continue to be used. The nurse in charge then completes the response form attached to the alert, stating the quantity found or confirming that none was held, and returns it to pharmacy by the end of the shift."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about a recall?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "All stock of the medicine is removed, whatever its batch number."
            },
            {
              "id": "b",
              "text": "Wards must reply to pharmacy even when they hold none of the batch."
            },
            {
              "id": "c",
              "text": "Recalled items go back to pharmacy through the usual ward returns route."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-prescribing-an-unlicensed-medicine",
    "title": "Part B — Guideline: prescribing an unlicensed medicine",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "unlicensed-medicines",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The prescriber must explain the unlicensed status to the patient, or to whoever may act for them, and make a record that the discussion happened.",
          "evidence": "The prescriber is expected to explain to the patient, or to those entitled to act on their behalf, that the medicine is unlicensed and what this means, and to record that this conversation took place.",
          "wrong": {
            "a": "The pharmacist checks alternatives and arranges supply; the prescriber carries greater personal responsibility.",
            "b": "The discharge letter lets the GP decide whether to take on prescribing; it is not required."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Prescribing unlicensed medicines\n\nAn unlicensed medicine should be prescribed only when no suitable licensed product can meet the patient's clinical need. Before the first prescription, the prescriber must discuss the request with the medicines information pharmacist, who confirms whether a licensed alternative exists and arranges supply. The prescriber is expected to explain to the patient, or to those entitled to act on their behalf, that the medicine is unlicensed and what this means, and to record that this conversation took place. Because the product has not been through the licensing process for this use, the prescriber carries greater personal responsibility for the decision. Where treatment is to continue after discharge, the discharge letter must state clearly that the medicine is unlicensed, so that the GP can decide whether to take on prescribing. Nursing staff should query any unlicensed prescription that has no documented discussion."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "the pharmacist takes responsibility for an unlicensed prescription."
            },
            {
              "id": "b",
              "text": "the GP must continue the medicine after the patient is discharged."
            },
            {
              "id": "c",
              "text": "patients should be told the medicine is unlicensed, and this recorded."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-crushing-tablets-for-swallowing-difficulty",
    "title": "Part B — Memo: crushing tablets for swallowing difficulty",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "crushing-tablets",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The memo says no tablet may be crushed or capsule opened until the pharmacist has been asked, because some products can become harmful or ineffective when altered.",
          "evidence": "no tablet should be crushed, and no capsule opened, until the ward pharmacist has been consulted",
          "wrong": {
            "a": "The memo gives no list of safe tablets; it tells staff to consult the pharmacist each time.",
            "c": "A liquid version is only one option the pharmacist may suggest, not a rule for all tablets."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "To: All ward nursing staff\nFrom: Medicines Safety Group\nSubject: Crushing tablets and opening capsules\n\nWe have seen an increase in reports of tablets being crushed for patients who have difficulty swallowing. Please remember that no tablet should be crushed, and no capsule opened, until the ward pharmacist has been consulted. Some products are designed to release their medicine slowly or to protect the stomach lining, and altering them can lead to a sudden high dose or a loss of effect. The pharmacist may recommend a liquid version, a dispersible tablet or a different route altogether. Any agreed change must be written on the drug chart by the prescriber before the next dose is given. Outside pharmacy hours, the on-call pharmacist can be reached through switchboard. Where swallowing problems are new, a referral to speech and language therapy should also be considered. Thank you for your continued care."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The purpose of this memo is to",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "tell nurses which tablets are safe to crush on the ward"
            },
            {
              "id": "b",
              "text": "remind staff to ask a pharmacist before changing how a tablet is given"
            },
            {
              "id": "c",
              "text": "ask prescribers to switch all tablets to liquid forms of the medicine"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-thickened-fluids-on-the-drug-chart",
    "title": "Part B — Guideline: thickened fluids on the drug chart",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "thickened-fluids",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The powder has to be prescribed on the drug chart, and the prescription must give the same consistency level as the therapist's plan.",
          "evidence": "The prescription should state the consistency level exactly as it appears in the therapist's swallowing plan.",
          "wrong": {
            "b": "Only the speech and language therapist may change the level; nurses check the chart and plan.",
            "c": "The text says the opposite: tins are kept in a locked cupboard, never on bedside lockers."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "When a speech and language therapist recommends thickened fluids, the thickening powder must be prescribed on the drug chart like any other product. The prescription should state the consistency level exactly as it appears in the therapist's swallowing plan. Before giving any drink, nurses should check both the chart and the swallowing plan kept at the bedside. Some liquid medicines may also need thickening, and the pharmacist should be asked whether a particular medicine can safely be mixed with the powder. Tins of thickener must be stored in the locked cupboard on the ward and never left on bedside lockers, as the dry powder is a choking risk if swallowed. Only the speech and language therapist may change the recommended level; the prescriber then amends the chart and the old entry is crossed through. Relatives who bring in drinks should be shown how to prepare them correctly."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "the thickener and the consistency level must both be on the prescription"
            },
            {
              "id": "b",
              "text": "nurses may change the consistency level if the patient finds drinking hard"
            },
            {
              "id": "c",
              "text": "tins of thickener should stay by the bed so drinks can be made quickly"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-fasting-before-surgery",
    "title": "Part B — Notice: fasting before surgery",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "pre-operative-fasting",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The notice says instructions are on each patient's pre-operative assessment sheet and may vary between patients, so staff must not rely on memory or a general rule.",
          "evidence": "Each patient's instructions are written on the pre-operative assessment sheet completed by the anaesthetic team, and they can differ from one patient to the next",
          "wrong": {
            "a": "The notice says instructions can differ from one patient to the next.",
            "b": "When a list changes, the nurse in charge checks with the anaesthetist rather than deciding alone."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "FASTING BEFORE SURGERY: PLEASE READ\n\nStaff on this ward should not give patients fasting times from memory or by following a general rule. Each patient's instructions are written on the pre-operative assessment sheet completed by the anaesthetic team, and they can differ from one patient to the next, for example for people with diabetes. If the sheet is missing or the instructions are unclear, contact the anaesthetist for that list before advising the patient. When the order of a theatre list changes, the theatre coordinator will inform the ward, and the nurse in charge should check with the anaesthetist whether any patient's instructions need to change. Regular medicines must not be withheld unless the sheet says so. Please record on the fasting chart when the patient last ate and drank, and tell the patient clearly what they may and may not have."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about fasting instructions?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They are the same for every patient on a morning theatre list."
            },
            {
              "id": "b",
              "text": "The ward nurse may change them if the theatre list is delayed or reordered."
            },
            {
              "id": "c",
              "text": "Staff should take them from each patient's own pre-operative sheet."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-jewellery-and-piercings-before-theatre",
    "title": "Part B — Policy extract: jewellery and piercings before theatre",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "theatre-jewellery",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Any ring or piercing left in place must be reported to the theatre team at handover, because metal can cause burns during surgery.",
          "evidence": "In every such case, the ward nurse must tell the theatre team at handover",
          "wrong": {
            "b": "Rings are cut off only with the patient's agreement or in an emergency; otherwise they are taped.",
            "c": "Staff should discuss religious items and respect the patient's wishes where it is safe."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "4.2 Jewellery and piercings\n\nBefore transfer to theatre, patients should be asked to remove all jewellery and piercings, including wedding rings. Removed items are listed on the property record, which is signed by the patient and the nurse, and stored in line with the trust's property procedure. If a ring cannot be removed, it should be covered with tape and noted on the theatre checklist. The same applies to any piercing that the patient is unable to take out. In every such case, the ward nurse must tell the theatre team at handover, because metal close to the operating site can cause burns when surgical equipment is used. A ring should never be cut off without the patient's agreement, except in an emergency. Where a patient wishes to keep a religious item, staff should discuss this with them, respect their wishes where it is safe to do so, and record the outcome."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, staff must",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "inform the theatre team about any item that could not be taken off"
            },
            {
              "id": "b",
              "text": "cut off a ring whenever a patient is unable to remove it easily"
            },
            {
              "id": "c",
              "text": "remove religious items before transfer to theatre even if the patient objects"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-marking-the-surgical-site",
    "title": "Part B — Guideline: marking the surgical site",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "site-marking",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Only the operating surgeon or a surgical team member present at the operation may make the mark; ward nurses only confirm it is there.",
          "evidence": "The mark is made by the operating surgeon or by a member of the surgical team who will be present during the operation.",
          "wrong": {
            "a": "Ward nurses check that the mark is present but must not make it themselves.",
            "c": "The guideline says an arrow is used; a cross should not be, as it may mean 'not here'."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Marking the operation site\n\nWhere a procedure involves a side, a level or more than one possible site, the site must be marked before the patient leaves the ward. The mark is made by the operating surgeon or by a member of the surgical team who will be present during the operation. Marking should take place with the patient awake and involved wherever possible, and the site should be checked against the consent form and any imaging. Use the approved skin marker and draw an arrow pointing to the site; a cross should not be used, as it may be read as 'not here'. The mark must remain visible after skin preparation and draping. If a site cannot be marked, or the patient declines, the reason and the alternative used are recorded on the safety checklist. Ward nurses confirm that the mark is present during the pre-operative check but must not make it themselves."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the ward nurse should mark the site when the surgeon is unavailable"
            },
            {
              "id": "b",
              "text": "the mark should be made by someone who will be in the operation"
            },
            {
              "id": "c",
              "text": "a cross is the clearest symbol for showing where the site is"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-the-swab-and-instrument-count",
    "title": "Part B — Instructions extract: the swab and instrument count",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "surgical-count",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "A mismatch is reported to the surgeon straight away and closure is paused while the team searches for the missing item.",
          "evidence": "If a count does not match, the surgeon must be told immediately and closure is paused while the team searches the operating field, the floor and the waste.",
          "wrong": {
            "a": "The surgeon is told immediately; an incident report comes later if the item is still missing.",
            "b": "Imaging is not automatic: the surgeon decides whether it is needed if the item is not found."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Section 6: Counting swabs, sharps and instruments\n\nThe count is carried out aloud by two members of staff, one of whom must be the registered scrub practitioner. It takes place before the procedure starts, before any cavity is closed and again at skin closure, and each count is recorded on the count board and in the perioperative record. Items added during the procedure are counted in and recorded as they arrive. If a count does not match, the surgeon must be told immediately and closure is paused while the team searches the operating field, the floor and the waste. If the item is still missing, the surgeon decides whether imaging is needed before the patient leaves theatre, and an incident report is completed. When a scrub practitioner hands over during a case, a full count is done jointly before the outgoing practitioner leaves. Swabs must never be cut or altered."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What do the instructions say about a count that does not match?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "The scrub practitioner must file an incident report before informing anyone."
            },
            {
              "id": "b",
              "text": "An X-ray is always taken before the patient is allowed to leave theatre."
            },
            {
              "id": "c",
              "text": "The surgeon must be told at once, and closing the wound should stop."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-discharge-from-the-recovery-area",
    "title": "Part B — Policy extract: discharge from the recovery area",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "recovery-discharge",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "If a patient falls short of any discharge criterion, the anaesthetist must review them and record the decision before transfer goes ahead.",
          "evidence": "If any criterion is not fully met but transfer is still felt to be appropriate, the anaesthetist must review the patient and record the decision in the anaesthetic notes.",
          "wrong": {
            "b": "Transfer by a porter alone is not accepted; a registered ward nurse must go with the patient.",
            "c": "The chart travels with the patient and must not be sent on later."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "7.1 Discharge from the recovery area\n\nA patient may leave the recovery area only when the recovery practitioner caring for them is satisfied that the discharge criteria in the recovery handbook have been met. If any criterion is not fully met but transfer is still felt to be appropriate, the anaesthetist must review the patient and record the decision in the anaesthetic notes. Handover to the ward nurse is given in person and covers the procedure, observations, pain relief given, drains or wounds, and any instructions from the anaesthetist. A registered nurse from the ward accompanies the patient back; transfer by a porter alone is not accepted. The recovery chart travels with the patient and must not be sent on later. If a patient's condition gives concern shortly after reaching the ward, staff should contact the anaesthetist responsible, who remains available for advice until the end of the list."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, staff must",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "involve the anaesthetist when a patient does not fully meet the criteria"
            },
            {
              "id": "b",
              "text": "allow a porter to take a stable patient back to the ward alone"
            },
            {
              "id": "c",
              "text": "send the recovery chart to the ward once the patient has settled"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-monitoring-during-procedural-sedation",
    "title": "Part B — Guideline: monitoring during procedural sedation",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "procedural-sedation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "A named person must be present whose sole job is monitoring, and they must not help with the procedure.",
          "evidence": "a named member of staff must be present whose only role is to monitor the patient",
          "wrong": {
            "a": "Monitoring continues after the procedure until the patient meets the recovery criteria.",
            "c": "The monitoring person must not assist the operator with the procedure itself."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Monitoring patients under procedural sedation\n\nWhen sedation is given for a procedure outside the main theatres, such as an endoscopy, a named member of staff must be present whose only role is to monitor the patient. This person must not assist the operator with the procedure itself. Oxygen saturation, heart rate, blood pressure and level of consciousness are observed throughout and recorded on the sedation chart at the intervals the chart specifies. Where capnography is available, it should be used. Before the procedure starts, resuscitation equipment and reversal medicines must be checked and their location confirmed with the team. Monitoring does not end when the procedure is finished: it continues until the patient meets the recovery criteria on the sedation chart. Any concern about breathing, colour or responsiveness must be reported immediately to the clinician leading the sedation."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "monitoring may stop as soon as the procedure itself has been fully completed"
            },
            {
              "id": "b",
              "text": "the person monitoring the patient should have no other duty at the time"
            },
            {
              "id": "c",
              "text": "the monitoring nurse may help the operator if the list is running late"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-the-pregnancy-check-before-an-x-ray",
    "title": "Part B — Email: the pregnancy check before an X-ray",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "pregnancy-check",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Requests that arrive without the pregnancy answer will be returned to whoever made them, which may delay the examination.",
          "evidence": "requests without this information will be returned to the referrer, which is likely to delay the examination",
          "wrong": {
            "a": "The radiographer asks again, but the email says this does not replace the referrer's check.",
            "b": "A professional interpreter should be used rather than a family member, and the question asked privately."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Subject: Pregnancy status on imaging requests\n\nDear colleagues,\n\nA number of X-ray requests have recently reached us without a pregnancy status. For patients who could be pregnant and fall within the age range in our local procedure, the person making the request must ask about possible pregnancy and record the answer on the request form before sending it. From next month, requests without this information will be returned to the referrer, which is likely to delay the examination. Our radiographers will still ask the patient again on arrival, but this second check does not replace yours. If a patient is unsure or may be pregnant, please discuss with the duty radiologist whether the examination is still justified. The question should be asked in private, and where an interpreter is needed, a professional interpreter should be used rather than a family member.\n\nWith thanks,\nRadiology Services Manager"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "This email informs staff that",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "the radiographer's question on arrival makes the ward check unnecessary"
            },
            {
              "id": "b",
              "text": "a relative may answer the pregnancy question for the patient if needed"
            },
            {
              "id": "c",
              "text": "requests with no recorded pregnancy status will be sent back to them"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-kidney-function-before-a-contrast-scan",
    "title": "Part B — Memo: kidney function before a contrast scan",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "contrast-kidney-function",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The memo stresses that supplying a recent kidney function result is the referring team's job, and explains what referrers should do before sending a request.",
          "evidence": "Please note that this is the referring team's responsibility, not that of the radiology department.",
          "wrong": {
            "b": "Too strong: in an emergency the radiologist may proceed without a result.",
            "c": "The memo places the responsibility on referring teams, not on radiology staff."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "To: Medical and surgical teams\nFrom: Lead Radiographer, CT\nRe: Kidney function results for contrast scans\n\nWe are receiving CT requests involving contrast where the risk questions on the electronic form show that a recent kidney function result is needed, but none has been provided. Please note that this is the referring team's responsibility, not that of the radiology department. Before submitting the request, the referrer should check that a result is available within the period set out in the radiology protocol and enter it on the form. Where no result is given, the scan may be postponed while the radiologist reviews the case. For patients with reduced kidney function, the radiologist will advise on precautions, which the referring team is then expected to arrange. In an emergency, the radiologist may decide to go ahead without a result if the benefit clearly outweighs the risk."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The purpose of this memo is to",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "make clear who should provide kidney results for contrast scan requests"
            },
            {
              "id": "b",
              "text": "state that no contrast scan can ever go ahead without a recent result"
            },
            {
              "id": "c",
              "text": "ask radiographers to take blood samples from patients before scanning"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-the-mri-safety-screening-form",
    "title": "Part B — Notice: the MRI safety screening form",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "mri-screening",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Ward staff should collect what they can and inform the MRI department, where the radiographer and radiologist decide whether scanning is safe.",
          "evidence": "let the MRI department know before the patient is sent, so that the radiographer and radiologist can decide whether scanning is safe",
          "wrong": {
            "a": "The notice says staff must not guess; the decision rests with the MRI team.",
            "b": "Relatives may give information, but nothing says they sign the form or give approval."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "MRI SAFETY SCREENING: INFORMATION FOR WARD STAFF\n\nNo patient may enter the MRI scanner room until a safety screening form has been completed. Ward staff should fill in the first section with the patient wherever possible, asking about pacemakers, implants, metal fragments and previous operations. If the patient is unable to answer, for example because they are unconscious or confused, do not guess or leave questions blank. Gather what information you can from the notes and from relatives, and let the MRI department know before the patient is sent, so that the radiographer and radiologist can decide whether scanning is safe. On arrival, the MRI radiographer will go through the form again with the patient and sign it. Any member of staff escorting a patient into the scanner room must also complete a staff screening form. The original form must travel with the patient."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about patients who cannot answer the questions?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "The ward nurse should complete the form using their own judgement."
            },
            {
              "id": "b",
              "text": "They may be scanned only after a relative has signed the form for them."
            },
            {
              "id": "c",
              "text": "The MRI team must be told so that they can decide about scanning."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-storing-and-checking-lead-aprons",
    "title": "Part B — Policy extract: storing and checking lead aprons",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "lead-aprons",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "A damaged apron has to be removed from use at once, labelled and reported to the radiology superintendent.",
          "evidence": "Any apron found to be damaged must be taken out of use straight away, labelled as faulty and reported to the radiology superintendent.",
          "wrong": {
            "a": "Aprons must never be folded or draped over trolleys, because creasing can crack them.",
            "c": "Staff only look aprons over; X-ray screening is done by the radiation protection team."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "5.3 Care of protective aprons\n\nLead aprons must be hung on the designated racks after use and never folded, draped over trolleys or left on the floor, as creasing can crack the protective layer without any visible sign. Each apron carries an identification number. Before every use, staff should look over the apron for tears, worn seams or damaged fastenings. Any apron found to be damaged must be taken out of use straight away, labelled as faulty and reported to the radiology superintendent. Aprons are also screened under X-ray by the radiation protection team at the intervals set out in the radiation protection schedule, and the results are entered in the apron register. Aprons should be cleaned with the approved wipes according to the manufacturer's instructions. Staff who are unsure whether an apron is fit for use should not wear it and should ask for advice."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, staff must",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "fold aprons neatly and store them on trolleys when the racks are full"
            },
            {
              "id": "b",
              "text": "withdraw a damaged apron immediately and report it to the superintendent"
            },
            {
              "id": "c",
              "text": "screen each apron under X-ray themselves before they put it on"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-memo-physiotherapy-referrals-after-surgery",
    "title": "Part B — Memo: physiotherapy referrals after surgery",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "early-mobilisation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The memo announces that referrals will now go through an electronic form, not by phone, and should be sent on the day the patient comes back from theatre.",
          "evidence": "referrals to the ward physiotherapy team for patients who have had surgery should be made through the electronic referral form rather than by telephone",
          "wrong": {
            "a": "The memo says the opposite: nurses do not need to wait for a physiotherapy assessment.",
            "c": "It is the physiotherapy team, not the nurses, who will contact the surgical team about unclear restrictions."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "To: Nursing staff, surgical wards\nFrom: Lead physiotherapist\nSubject: Referrals for early mobilisation after surgery\n\nFrom next Monday, referrals to the ward physiotherapy team for patients who have had surgery should be made through the electronic referral form rather than by telephone. Please send the referral on the day the patient returns from theatre, even if the surgeon has not yet written a mobilisation plan. Our team will check the operation note and contact the surgical team if any restrictions are unclear. Nursing staff should continue to help patients sit out of bed when the post-operative instructions allow it; you do not need to wait for a physiotherapy assessment before doing so. If a patient becomes dizzy, breathless or unusually drowsy when sitting up, return them to bed, record the episode in the nursing notes and inform the nurse in charge. Telephone calls to the team should now be kept for urgent concerns only."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The purpose of this memo is to",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "ask nurses to wait for a physiotherapy assessment before sitting patients out."
            },
            {
              "id": "b",
              "text": "explain a change in how and when physiotherapy referrals should be sent."
            },
            {
              "id": "c",
              "text": "tell nurses to contact the surgical team when restrictions are unclear."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-instructions-issuing-a-walking-aid",
    "title": "Part B — Instructions: issuing a walking aid",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "walking-aids",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The therapist has to watch the patient walk a short distance with the aid before the patient leaves with it.",
          "evidence": "then watch them walk a short distance before they take the aid away",
          "wrong": {
            "a": "The height is set with the patient standing in their usual footwear, not sitting.",
            "b": "Carers are shown how to check ferrules and report damage, not to repair or replace them at home."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Issuing a walking aid: instructions for therapy staff\n\nBefore a walking frame or stick is given to a patient, the issuing therapist must check that the rubber ferrules are present, not worn smooth and free from splits. Frames should be inspected for loose joints, and the push buttons on adjustable legs must click fully into place. Set the height with the patient standing in their usual footwear, then watch them walk a short distance before they take the aid away. Record the type of aid, its height setting and the date of issue on the equipment record. Patients and carers should be shown how to look at the ferrules themselves and told to report any damage to the department rather than repair it at home. Any aid returned to the department must be cleaned and checked before it is issued again; aids with damaged frames are taken out of use and labelled for disposal."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the instructions, staff must",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "set the height of the aid while the patient is sitting down."
            },
            {
              "id": "b",
              "text": "show carers how to replace worn ferrules on the aid at home."
            },
            {
              "id": "c",
              "text": "see the patient walking with the aid before it is taken away."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-guideline-referring-to-the-dietitian-after-screening",
    "title": "Part B — Guideline: referring to the dietitian after screening",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "nutrition-screening",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Medium-risk patients are not referred automatically, but the nurse should still refer one when there is a specific concern, such as swallowing problems.",
          "evidence": "A referral should still be made for a medium-risk patient if the nurse has a specific concern",
          "wrong": {
            "b": "Same-day referral applies to high-risk patients; medium-risk patients do not need an automatic referral.",
            "c": "The nurse who completes the screening begins the food and fluid chart, not the dietitian."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Nutrition screening: referral to the dietitian\n\nAll adult inpatients are screened with the trust's nutrition screening tool as part of the admission assessment, and again every week while they remain on the ward. Where the tool places a patient in the high-risk category, the nurse completing it should send a referral to the dietetic team the same day and begin a food and fluid chart. Patients in the medium-risk category do not need an automatic referral; instead, the ward should offer snacks between meals, record intake and repeat the screen sooner than usual. A referral should still be made for a medium-risk patient if the nurse has a specific concern, such as difficulty swallowing or a wound that is slow to heal. Screening results and any referral must be documented in the nutrition section of the electronic record so that the team can see them before the ward round."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "a medium-risk result can still lead to a referral if there is a particular worry."
            },
            {
              "id": "b",
              "text": "every patient with a medium-risk result should be referred to the dietitian that day."
            },
            {
              "id": "c",
              "text": "the dietitian is responsible for starting the food and fluid chart for high-risk patients."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-notice-allergy-codes-on-the-ward-menu",
    "title": "Part B — Notice: allergy codes on the ward menu",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "food-allergy-menu",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Whoever serves the meal has to compare the named meal label with the patient's wristband before giving it to them.",
          "evidence": "the member of staff serving the meal must match the label to the patient's wristband before handing it over",
          "wrong": {
            "a": "Staff are told not to remove ingredients from a standard dish but to order a prepared allergy meal.",
            "c": "The nurse must check the allergy on the record rather than rely on the patient's memory."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Notice to ward staff: allergy codes on the patient menu\n\nThe catering department has introduced a new set of symbols on the ward menu card. Each dish now carries a code showing which of the common allergens it contains, and a separate symbol marks dishes prepared in an area where cross-contact cannot be ruled out. When a patient has a recorded food allergy, the nurse taking the meal order must check the codes against the allergy listed on the patient's record, not rely on the patient's memory of what they can eat. If no suitable dish is shown, contact the catering hotline and ask for a prepared allergy meal; do not remove ingredients from a standard dish. Patients with allergies are given a red tray and a named meal label, and the member of staff serving the meal must match the label to the patient's wristband before handing it over."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about meals for patients with food allergies?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Any standard dish may be chosen once the allergen has been taken out of it."
            },
            {
              "id": "b",
              "text": "Each meal must be checked against the patient's identity before serving."
            },
            {
              "id": "c",
              "text": "The patient's own account of what they can eat guides the order."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-policy-extract-hanging-an-enteral-feed",
    "title": "Part B — Policy extract: hanging an enteral feed",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "enteral-feeding",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The policy tells staff to follow the manufacturer's label on how long an opened container may be used, and to change it at that point even if feed is left.",
          "evidence": "staff must follow that label and replace the container when that time is reached, even if feed remains",
          "wrong": {
            "a": "The dietitian's plan is checked for feed, rate and start time; it does not set when the container is changed.",
            "b": "No shift-based change is mentioned; staff must follow the manufacturer's label."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Policy extract: hanging an enteral feed\n\nBefore connecting a feed, the nurse must confirm the patient's identity and check that the feed, its rate and its start time match the current feeding plan written by the dietitian. The tube position must be confirmed according to the trust's tube position procedure before any feed is started and whenever there is reason to think the tube may have moved, and the result recorded. Feeds should be connected only with equipment designed for enteral use, which cannot be joined to intravenous lines. Each container must be labelled with the patient's name, the date and time it was hung and the initials of the nurse who hung it. The manufacturer's label states how long a container may stay in use once opened; staff must follow that label and replace the container when that time is reached, even if feed remains."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, a feed container should be replaced",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "whenever the dietitian next reviews and updates the patient's written feeding plan."
            },
            {
              "id": "b",
              "text": "at the start of each nursing shift, whatever its label says."
            },
            {
              "id": "c",
              "text": "once the period stated by the manufacturer has run out, even if not empty."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-email-foot-checks-in-the-diabetes-clinic",
    "title": "Part B — Email: foot checks in the diabetes clinic",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "diabetes-foot-podiatry",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Patients with warning signs such as an open wound cannot wait for routine care; staff must ring the rapid-access podiatry line on the same day.",
          "evidence": "phone the podiatry rapid-access line that day and tell the duty GP",
          "wrong": {
            "b": "Low-risk patients get a leaflet and annual review; the electronic referral is for moderate or high risk.",
            "c": "The duty GP is told about urgent cases only; the email does not say the GP examines every patient."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Subject: Foot checks in the diabetes clinic\n\nDear colleagues,\n\nFollowing the recent audit, here is a reminder about foot assessment for patients with diabetes. Every patient should have both feet examined at their annual review, with shoes and socks removed, and the risk category recorded in the diabetes template. Patients assessed as low risk can be given the practice leaflet on daily foot care and reviewed at their next annual check. Those at moderate or high risk should be referred to the community podiatry service using the electronic form. However, any patient with an open wound, a new area of redness or swelling, or a foot that is hot to the touch must not wait for a routine appointment: phone the podiatry rapid-access line that day and tell the duty GP. Please also remind patients to check their own feet every day and to contact us promptly if they notice a change.\n\nThanks,\nClinical lead"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "This email informs staff that",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "a patient with a new foot wound needs same-day contact with podiatry."
            },
            {
              "id": "b",
              "text": "low-risk patients should be referred to podiatry using the electronic form."
            },
            {
              "id": "c",
              "text": "the duty GP should examine every patient's feet at the annual review."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-guideline-advice-after-dilating-eye-drops",
    "title": "Part B — Guideline: advice after dilating eye drops",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "dilating-drops-driving",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Patients must be advised to avoid driving until their sight has recovered and they feel sure it is safe.",
          "evidence": "Patients should be told not to drive until their vision has returned to normal",
          "wrong": {
            "a": "Sunglasses may ease glare, but the guideline says they do not make driving safe.",
            "b": "Eye pain after leaving needs urgent advice, not waiting for the drops to wear off."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Guideline for optometrists: advice after dilating drops\n\nBefore instilling dilating drops, ask the patient how they travelled to the practice and whether they intend to drive afterwards. Explain that the drops widen the pupils, which can make close work difficult and bright light uncomfortable, and that these effects usually last for some hours. Patients should be told not to drive until their vision has returned to normal and they feel confident that it is safe; if they have driven to the appointment, offer to rebook or suggest they arrange other transport. Sunglasses may make glare more comfortable but do not make driving safe. Any patient who develops eye pain, redness or haloes around lights after leaving should be told to seek urgent advice rather than waiting for the drops to wear off. Record in the clinical notes that the advice was given and that the patient understood it."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that patients who have had dilating drops",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "can drive home safely provided they wear sunglasses for the journey."
            },
            {
              "id": "b",
              "text": "should wait for any eye pain to settle as the drops wear off."
            },
            {
              "id": "c",
              "text": "should not drive again until their eyesight is back to normal."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-policy-extract-cleaning-after-aerosol-procedures",
    "title": "Part B — Policy extract: cleaning after aerosol procedures",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "dental-aerosol-downtime",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Each room shows its own downtime, because ventilation differs from one surgery to another, so the wait is not fixed for the whole practice.",
          "evidence": "this period differs between rooms because the air-change rate is not the same in each",
          "wrong": {
            "a": "The policy says the period differs between rooms, so it is not the same everywhere.",
            "c": "Cleaning happens after the downtime has passed, so the wait comes before cleaning, not after it."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Policy extract: cleaning the surgery after aerosol-generating procedures\n\nProcedures that produce aerosols, such as those using high-speed handpieces or ultrasonic scalers, leave droplets in the air that settle on nearby surfaces. When such a procedure ends, the door must be kept closed and the surgery left empty for the downtime displayed on the ventilation notice beside the door; this period differs between rooms because the air-change rate is not the same in each. The dental nurse records the finishing time on the room log so that colleagues know when the room may be entered. Once the downtime has passed, staff wearing the specified personal protective equipment clean the dental chair, work surfaces and anything within the splatter zone, working from clean to dirty areas. The next patient may be called only after cleaning is complete and the room log has been signed. Rooms with no displayed downtime must not be used for these procedures."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the policy say about the waiting period after an aerosol-generating procedure?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It lasts the same length of time in every surgery in the practice."
            },
            {
              "id": "b",
              "text": "Its length depends on the particular room where the work took place."
            },
            {
              "id": "c",
              "text": "It begins once all the surfaces in the room have been cleaned."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-memo-anticoagulants-before-an-extraction",
    "title": "Part B — Memo: anticoagulants before an extraction",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "dental-anticoagulation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "When in doubt, the dentist is to contact whoever is responsible for the anticoagulant treatment and rebook if needed.",
          "evidence": "they should contact the clinician who manages the anticoagulation and, where necessary, rebook",
          "wrong": {
            "b": "The memo says the practice must not tell patients to stop or alter their anticoagulant.",
            "c": "Reception adds the alert at booking; this is not what the dentist does when unsure on the day."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Memo to clinicians and reception staff\nSubject: Patients taking anticoagulants who are booked for extractions\n\nWhen a patient on any anticoagulant is booked for an extraction, reception should add an alert to the appointment and ask the patient to bring their anticoagulant record or a list of current medicines. On the day, the dentist must review the record and the medical history before starting, and confirm with the patient which medicine they take and whether their monitoring or treatment has changed recently. Patients should not be told by the practice to stop or alter their anticoagulant; if the dentist has any doubt about whether treatment should go ahead, they should contact the clinician who manages the anticoagulation and, where necessary, rebook. The review, and any advice given to the patient after the extraction, must be written in the clinical notes. Local measures to control bleeding should be ready in the surgery before treatment begins."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the memo, a dentist who is unsure whether to go ahead should",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "seek advice from the clinician who manages the patient's anticoagulation."
            },
            {
              "id": "b",
              "text": "tell the patient to stop the anticoagulant before a later appointment."
            },
            {
              "id": "c",
              "text": "ask reception to add an alert and check the patient's medicines list."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-guideline-handling-animals-that-may-bite",
    "title": "Part B — Guideline: handling animals that may bite",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "veterinary-bite-risk",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "A flagged animal must not be restrained by a single person; another trained colleague has to be there.",
          "evidence": "Staff must never restrain a flagged animal alone: a second trained member of staff should be present.",
          "wrong": {
            "a": "The guideline says any animal can bite, not only those already known to be difficult.",
            "b": "Owners should not be asked to hold animals during procedures, as they may be hurt."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Guideline: handling animals that may bite\n\nAny animal can bite when it is frightened or in pain, so staff should handle every patient with care, not only those already known to be difficult. When booking, reception should ask owners whether their animal has shown aggression at previous visits and add a caution flag to the record if so. Flagged animals should be seen in a quiet room, and owners who can do so safely may be asked to fit a muzzle beforehand. Staff must never restrain a flagged animal alone: a second trained member of staff should be present. Owners should not be asked to hold their animal during procedures, because they can be injured and may be unable to keep it still. If a bite occurs, wash the wound at once, seek medical advice, tell the duty vet and complete an incident form before the end of the shift."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "only animals carrying a caution flag on their record are likely to bite."
            },
            {
              "id": "b",
              "text": "owners are the best people to hold their own animal during procedures."
            },
            {
              "id": "c",
              "text": "one member of staff should not restrain a flagged animal without help."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-notice-suspected-ringworm-cases",
    "title": "Part B — Notice: suspected ringworm cases",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "veterinary-ringworm",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Staff must wash with soap and water after taking off gloves, because gel on its own is not considered sufficient for these cases.",
          "evidence": "hand gel alone is not enough after contact with these patients",
          "wrong": {
            "b": "Staff must wash their hands with soap and water after removing gloves.",
            "c": "Owners are advised to wash their hands after touching their pet; hand gel is not mentioned for them."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Notice: suspected ringworm cases\n\nRingworm is a fungal skin infection that can pass from animals to people and between animals. Its spores can survive on surfaces and equipment for a long time, so cases need careful handling. Any animal suspected of having ringworm should be taken straight to the isolation room rather than waiting in reception. Staff must wear disposable gloves and an apron when handling the animal, and these should be removed and discarded before leaving the room. Wash your hands with soap and water after removing gloves; hand gel alone is not enough after contact with these patients. Clippers, brushes and blankets used on the animal must be bagged and cleaned according to the isolation protocol, not returned to the general stores. Owners should be advised to wash their hands after touching their pet and to see their own doctor if they notice a skin rash."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about hand hygiene after handling a suspected case?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Hand gel should not be used instead of washing with soap and water."
            },
            {
              "id": "b",
              "text": "Hand washing is not needed if gloves are removed with care."
            },
            {
              "id": "c",
              "text": "Owners should use hand gel before and after touching their pet."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-guideline-using-a-communication-passport",
    "title": "Part B — Guideline: using a communication passport",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "communication-passport",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Staff are not allowed to edit the passport; instead they talk to the patient and family or refer to the speech and language therapy team.",
          "evidence": "if new information would help, discuss it with the patient and their family or refer to the speech and language therapy team",
          "wrong": {
            "a": "Staff are told not to change the passport themselves.",
            "c": "The passport stays with the patient, not in the notes trolley, because it belongs to them."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Guideline: using a communication passport\n\nSome patients with a speech or language difficulty, for example after a stroke or because of a learning disability, carry a communication passport. This is a short booklet, usually written with the patient and their family or speech and language therapist, which explains how the person communicates best, what helps them understand, and how they show pain, agreement or distress. On admission, ask whether the patient has a passport and, if so, read it before carrying out any assessment. Record in the nursing notes that a passport is in use, and keep it with the patient rather than in the notes trolley, as it belongs to them. Staff should not change the passport themselves; if new information would help, discuss it with the patient and their family or refer to the speech and language therapy team. On transfer, the passport must travel with the patient."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the guideline, staff who think a passport needs updating should",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "add the new details themselves and record this in the nursing notes."
            },
            {
              "id": "b",
              "text": "raise it with the patient and family or with speech and language therapy."
            },
            {
              "id": "c",
              "text": "keep the passport in the ward notes trolley until the changes have been agreed."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-equipment-before-discharge",
    "title": "Part B — Memo: equipment before discharge",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "discharge-equipment",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The memo introduces a new rule: equipment must be delivered and fitted before the patient leaves, and nurses must not confirm a discharge time until this is confirmed.",
          "evidence": "must be delivered and fitted before the patient leaves the ward",
          "wrong": {
            "a": "The occupational therapist, not the nurse, places the order after the home assessment.",
            "c": "Items following after discharge is the old practice that the memo is ending."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "To: Ward managers, Elm and Willow wards\nFrom: Occupational therapy lead\nSubject: Equipment for patients going home\n\nFrom next Monday, any equipment that a patient needs at home, such as a raised toilet seat, a perching stool or a bed lever, must be delivered and fitted before the patient leaves the ward. In the past, several patients were discharged on the understanding that items would follow, and some spent their first nights without them. The occupational therapist will place the order as soon as the home assessment is complete and will record the expected delivery date in the discharge plan. Nurses should not confirm a discharge time with the family until the community equipment service has telephoned to say the items are in place. If delivery is delayed, the therapist will tell the nurse in charge, who will decide with the medical team whether discharge should be postponed."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The purpose of this memo is to",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "ask nurses to order home equipment once the home assessment is complete"
            },
            {
              "id": "b",
              "text": "explain that a discharge should wait until home equipment has been fitted"
            },
            {
              "id": "c",
              "text": "tell families that equipment will follow within a few days of discharge"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-levels-of-observation",
    "title": "Part B — Guideline: levels of observation",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "observation-levels",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "A single member of the nursing team can raise the level when worried, but the level can only be reduced once the team has reviewed it.",
          "evidence": "Any member of the nursing team may raise the level if concerned, but it may only be lowered after a team review.",
          "wrong": {
            "b": "The intervals should be varied slightly so the checks do not become predictable.",
            "c": "The level must be reviewed at least once every day, not weekly."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Levels of observation: guidance for ward staff\n\nThe level of observation for each patient is set by the multidisciplinary team after a risk assessment, and it must be reviewed at least once every day. It is recorded on the observation chart and in the care plan. General observation means that staff know where the patient is at all times. Intermittent observation involves checks at intervals written on the chart, which should be varied slightly so that they do not become predictable. Within-eyesight and within-arm's-length observation are used when risk is high, and the staff member must stay with the patient at all times, including during personal care, while respecting dignity as far as possible. Observation is a therapeutic task: staff should engage with the patient rather than simply watch. Any member of the nursing team may raise the level if concerned, but it may only be lowered after a team review."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "any nurse may increase the level, but lowering it requires a team decision"
            },
            {
              "id": "b",
              "text": "checks during intermittent observation should happen at fixed, regular times"
            },
            {
              "id": "c",
              "text": "the level of observation is reviewed by the team once in each week"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-an-informal-patient-who-asks-to-leave",
    "title": "Part B — Policy extract: an informal patient who asks to leave",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "informal-patient-leaving",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The policy requires the nurse in charge to be told immediately, and it requires the conversation and advice given to be recorded in the notes.",
          "evidence": "The nurse in charge must be told straight away",
          "wrong": {
            "a": "Staff must not stop the patient; a doctor review happens only where possible.",
            "b": "A relative is told only with the patient's consent."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Informal patients who ask to leave\n\nAn informal patient has agreed to admission and is free to leave the ward. Staff must not use locked doors, persuasion that amounts to pressure, or any other means to stop them. When an informal patient says that they wish to go, the nurse should first try to understand the reason and offer to talk the decision through. The nurse in charge must be told straight away, and the duty doctor should be asked to review the patient before departure where possible. If the patient chooses to leave, staff should agree how they will travel, check that they have any medication and contact details they need, and, with consent, let a relative know. The conversation, the patient's mental state and the advice given must be recorded in the notes. If staff have serious concerns about the person's safety, the nurse in charge should seek urgent senior advice."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, when an informal patient asks to leave, staff must",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "keep the patient on the ward until the duty doctor has reviewed them"
            },
            {
              "id": "b",
              "text": "contact a relative before the patient goes, whether or not they agree"
            },
            {
              "id": "c",
              "text": "inform the nurse in charge at once and write up the discussion"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-recording-physical-restraint",
    "title": "Part B — Notice: recording physical restraint",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "restraint-recording",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The record has to be entered on the incident system before the shift in which the restraint took place has ended.",
          "evidence": "must be recorded on the incident system before the end of the shift in which it happened",
          "wrong": {
            "b": "Any staff member involved may write it; the nurse in charge ensures it is done.",
            "c": "Records are reviewed monthly by the safety group, not at the debrief."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Recording physical restraint\n\nEvery use of physical restraint, however brief, must be recorded on the incident system before the end of the shift in which it happened. The record should name each member of staff involved, the holds used, how long the restraint lasted and the reason it was needed. The nurse in charge is responsible for making sure the entry is completed, although any staff member involved may write it. Staff must also describe what was tried first to calm the situation, and record the physical checks carried out on the patient afterwards. The patient should be offered the chance to talk about what happened once they are settled, and their account, if they give one, should be added to the notes. A debrief for staff will be arranged by the ward manager within the week. Restraint records are reviewed each month by the safety group."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about the restraint record?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It must be completed during the same shift as the restraint."
            },
            {
              "id": "b",
              "text": "Only the nurse in charge is permitted to write the record entry."
            },
            {
              "id": "c",
              "text": "It is checked by the ward manager at the weekly staff debrief."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-reasonable-adjustments-for-a-learning-disability",
    "title": "Part B — Email: reasonable adjustments for a learning disability",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "learning-disability-adjustments",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Adjustments that have been agreed are to be written into the care plan, so that staff on the following shift know about them and continue them.",
          "evidence": "Any adjustments agreed should be written in the care plan so that the next shift can continue them.",
          "wrong": {
            "a": "The passport should be kept with the bedside notes, not filed away.",
            "b": "Staff must not assume the carer can consent; capacity is considered for each decision."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Subject: Supporting patients with a learning disability\n\nDear colleagues,\n\nWhen a patient with a learning disability is admitted, please check whether they have a hospital passport. This document, usually completed by the person and their carers, explains how they communicate, what upsets them and what helps. It should be kept with the bedside notes, not filed away. Reasonable adjustments might include a quieter bay, a longer appointment, easy-read information or allowing a familiar carer to stay outside normal visiting hours. Please do not assume that the carer can consent on the patient's behalf; capacity must be considered for each decision. If you need advice, the learning disability liaison nurse can be contacted through switchboard on weekdays and will visit the ward where needed. Any adjustments agreed should be written in the care plan so that the next shift can continue them.\n\nBest wishes,\nMaya Osei, Patient Experience Lead"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "This email informs staff that",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "the hospital passport should be stored away in the patient's main medical record"
            },
            {
              "id": "b",
              "text": "a familiar carer is able to give consent for the patient's treatment"
            },
            {
              "id": "c",
              "text": "agreed adjustments must be documented so later shifts can keep them up"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-replacing-a-lost-identity-band",
    "title": "Part B — Instructions: replacing a lost identity band",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "identity-wristband",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Staff must ask the patient to give their full name and date of birth and compare these with the electronic record before the new band is printed.",
          "evidence": "ask the patient to state their full name and date of birth, and check these against the electronic record before printing",
          "wrong": {
            "a": "Copying details from the bed board is specifically forbidden.",
            "c": "The nurse in charge helps only if the patient cannot answer; no written authorisation is mentioned."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Replacing a missing identity band\n\nIf a patient's identity band is lost, damaged or unreadable, a new one must be printed and fitted straight away. No medicines, blood tests or procedures should go ahead until it has been replaced. Do not reprint a band from a label sheet or copy details from the bed board. Instead, ask the patient to state their full name and date of birth, and check these against the electronic record before printing. If the patient cannot answer, confirm their identity with the nurse in charge using the admission documents. The band is printed from the ward printer by selecting 'Reprint ID' on the patient's record; the system logs who printed it. Fit it to the same limb as before unless this is not possible, and note the change in the nursing record. The old band, if found, must be cut off and disposed of as confidential waste."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the instructions, before a replacement band is printed, staff should",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "copy the patient's details from the board displayed above the bed"
            },
            {
              "id": "b",
              "text": "ask the patient for their details and check them on the computer"
            },
            {
              "id": "c",
              "text": "ask the nurse in charge to authorise the reprint in writing"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-a-child-who-was-not-brought",
    "title": "Part B — Policy extract: a child who was not brought",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "was-not-brought",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The clinician who should have seen the child has to read the notes on the day of the missed appointment and decide whether the absence is a cause for concern.",
          "evidence": "must read the notes on the same day and decide whether the absence raises any concern",
          "wrong": {
            "a": "Safeguarding is consulted only if the clinician is worried about the child's welfare.",
            "c": "The notes are reviewed first; the family is contacted after that."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Children not brought to appointments\n\nThe clinic uses the term 'was not brought' rather than 'did not attend' for children, because a child depends on adults to get them to an appointment. A missed appointment should never simply be closed or the child discharged back to the GP without review. The clinician who was due to see the child must read the notes on the same day and decide whether the absence raises any concern, taking into account the reason for referral and any previous missed appointments. The family should then be contacted to find out what happened and to offer a new date. If the clinician is worried about the child's welfare, they should discuss the case with the safeguarding team before the end of the next working day. The decision and the reasons for it must be recorded, and the GP and health visitor or school nurse informed."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The policy makes it clear that, after a missed appointment, the clinician",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "should refer every child who was not brought to the safeguarding team"
            },
            {
              "id": "b",
              "text": "must review the child's records that day to judge whether there is a risk"
            },
            {
              "id": "c",
              "text": "should telephone the family first, before looking through the notes"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-copying-clinic-letters-to-patients",
    "title": "Part B — Memo: copying clinic letters to patients",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "clinic-letter-copies",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The memo sets out a change starting next month: patients will receive copies of letters sent to their GP, and it describes how clinicians and secretaries should manage this.",
          "evidence": "the clinic will send patients a copy of every letter written to their GP after an outpatient appointment",
          "wrong": {
            "a": "Patients state their own preference; secretaries only check the outcome form.",
            "b": "Letters are still written to the GP, with a copy sent to the patient."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "To: All outpatient consultants and secretaries\nSubject: Copying clinic letters to patients\n\nFrom the start of next month, the clinic will send patients a copy of every letter written to their GP after an outpatient appointment, unless the patient has asked not to receive one. At the end of each consultation, clinicians should ask the patient whether they would like a copy and where it should be sent, and record their answer on the clinic outcome form. Letters should be written so that the patient can follow them: explain abbreviations, avoid judgemental language and make clear what will happen next and who is responsible. Where a letter contains information that the patient has not yet been told, such as a new diagnosis, it must not be sent until the clinician has discussed it with them. Secretaries will check the outcome form before posting and will hold any letter where the patient's preference is not recorded."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The purpose of this memo is to",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "ask secretaries to decide which patients should receive a letter copy"
            },
            {
              "id": "b",
              "text": "tell clinicians to write to patients directly instead of writing to their GP"
            },
            {
              "id": "c",
              "text": "explain new arrangements for giving patients copies of their GP letters"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-acknowledging-test-results",
    "title": "Part B — Guideline: acknowledging test results",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "result-acknowledgement",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Acknowledgement is not just marking a result as seen: the clinician must also record any action required and who is responsible for carrying it out.",
          "evidence": "The clinician should record what action, if any, the result requires and who will carry it out.",
          "wrong": {
            "b": "The requesting clinician is responsible; the lead only reviews the report of unacknowledged results.",
            "c": "Results must never be left unacknowledged because a colleague may have looked at them."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Acknowledging test results\n\nAll results returned to the electronic system must be acknowledged by a clinician. For inpatients, the doctor who requested the test is responsible; if they are not on duty, the result passes to the team's on-call doctor. In outpatient clinics, responsibility stays with the requesting clinician even after the patient has gone home. Acknowledging a result means more than clicking 'seen'. The clinician should record what action, if any, the result requires and who will carry it out. Where a result is abnormal but not urgent, the plan must be documented in the notes and the patient told how and when they will hear more. Results should never be left unacknowledged because another member of the team may have looked at them. Unacknowledged results are listed on a daily report, which the clinical lead for each specialty reviews."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that acknowledging a result",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "includes noting the action needed and the person who will take it"
            },
            {
              "id": "b",
              "text": "is the duty of the clinical lead who reviews the daily report"
            },
            {
              "id": "c",
              "text": "is not necessary if a colleague on the team has already seen it"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-critical-results-by-telephone",
    "title": "Part B — Notice: critical results by telephone",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "critical-result-call",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Ward clerks and healthcare assistants are not allowed to accept a critical result; they must find a registered colleague to take the call.",
          "evidence": "healthcare assistants and ward clerks should not accept these results but should find a registered colleague",
          "wrong": {
            "a": "Only a registered nurse or doctor may take down and read back the result.",
            "b": "The laboratory contacts the on-call doctor itself only after repeated failed attempts."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Telephoned critical results\n\nWhen the laboratory finds a result that needs urgent action, a biomedical scientist will telephone the ward directly. The call must be taken by a registered nurse or doctor; healthcare assistants and ward clerks should not accept these results but should find a registered colleague. The person receiving the call must write the result down, read it back to the caller together with the patient's name and hospital number, and note the time and the caller's name. The result must then be passed straight away to the doctor responsible for the patient, or to the on-call doctor out of hours, and this hand-over recorded in the notes. If no registered staff member can come to the phone, the laboratory will try again, and after repeated failed attempts it will contact the on-call doctor itself. Results must never be left as a message."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about a ward clerk who answers a call about a critical result?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They may write down the result as long as they read it back."
            },
            {
              "id": "b",
              "text": "They should ask the laboratory to ring the on-call doctor for them instead."
            },
            {
              "id": "c",
              "text": "They should fetch a registered nurse or doctor to take the result."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-access-to-point-of-care-devices",
    "title": "Part B — Policy extract: access to point-of-care devices",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "poct-lockout",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "An individual barcode is blocked automatically when the operator fails to renew the annual certificate in time, and it stays blocked until training is done.",
          "evidence": "If the certificate is not renewed in time, the device will automatically refuse that operator's barcode until training is completed.",
          "wrong": {
            "b": "The reminder comes a month before expiry; the certificate is still valid then.",
            "c": "Sharing a barcode is treated as a disciplinary matter, not an automatic lock-out."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Point-of-care testing: operator access\n\nBlood glucose meters and blood gas analysers on the wards can only be used by staff who hold a current operator certificate. Each user has a personal barcode that must be scanned before every test; sharing barcodes or using someone else's is a disciplinary matter. Certification is gained by completing the online module and a practical assessment with a ward trainer. It lasts for one year, and a reminder is sent by email a month before it runs out. If the certificate is not renewed in time, the device will automatically refuse that operator's barcode until training is completed. A device will also lock for all users if its daily quality control check has not been performed or has failed. In that case, staff should use another device and inform the point-of-care team, who will investigate and restore access."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, a device will refuse an individual operator's barcode when that person",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "has let their yearly certificate run out without completing renewal"
            },
            {
              "id": "b",
              "text": "has not yet opened the reminder email about renewing their training"
            },
            {
              "id": "c",
              "text": "has been found sharing their personal barcode with a colleague"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-rejected-blood-samples",
    "title": "Part B — Email: rejected blood samples",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "rejected-sample",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Labels cannot be changed and corrected tubes are not accepted, so the ward has to collect the sample again.",
          "evidence": "The laboratory cannot amend labels or accept a corrected tube, so any rejected sample must be taken again.",
          "wrong": {
            "a": "The laboratory cannot amend labels under any circumstances.",
            "c": "The laboratory adds a comment to the electronic record; the ward tells the patient."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Subject: Rejected blood samples\n\nDear ward teams,\n\nThe laboratory has recently rejected a growing number of samples from the surgical wards. Most were rejected because the label on the tube did not match the request form, or because the tube had been labelled away from the bedside. A smaller number were haemolysed, often after being drawn through a narrow cannula or shaken hard. The laboratory cannot amend labels or accept a corrected tube, so any rejected sample must be taken again. When this happens, the laboratory will add a comment to the electronic record, and the ward is expected to arrange a repeat sample promptly and explain the delay to the patient. Please label every tube at the bedside, immediately after taking it, after checking the patient's identity band. Mix tubes gently by inversion. Any rejection should also be reported on the incident system.\n\nKind regards,\nTom Hale, Laboratory Quality Manager"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "This email informs staff that when a sample is rejected",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the laboratory will relabel the tube if the request form is correct"
            },
            {
              "id": "b",
              "text": "a new sample must be taken, because the first cannot be corrected"
            },
            {
              "id": "c",
              "text": "the laboratory will telephone the ward so the patient can be told"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-horizontal-evacuation-in-a-fire",
    "title": "Part B — Policy extract: horizontal evacuation in a fire",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "fire-evacuation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Notes and charts go with patients only if this is safe; the policy says the move itself must not be held up to collect them, so moving people comes first.",
          "evidence": "staff must not delay the move to collect them",
          "wrong": {
            "a": "The order is the opposite: bed-bound patients are moved last because they need the most staff.",
            "c": "Patients stay on the same floor, and lifts are not used unless the fire service authorises an evacuation lift."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "In the event of a fire on a ward, this trust's first response is horizontal evacuation rather than immediate removal from the building. Patients are moved through at least one set of fire doors into the adjoining compartment on the same floor, where they remain under the care of ward staff. Lifts must not be used unless the fire service has authorised a designated evacuation lift. The nurse in charge decides the order of movement: patients who can walk are guided first, followed by those in wheelchairs, and bed-bound patients last, as they require the most staff. Each patient's notes and medication chart should travel with them where this can be done safely, but staff must not delay the move to collect them. Once the area is clear, the nurse in charge confirms the headcount with the fire response team at the agreed point on that floor."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, staff must",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "take bed-bound patients through the fire doors before anyone else."
            },
            {
              "id": "b",
              "text": "put moving patients ahead of collecting their notes and charts."
            },
            {
              "id": "c",
              "text": "use the lifts to take patients down to the ground floor."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-storing-oxygen-cylinders-on-the-ward",
    "title": "Part B — Notice: storing oxygen cylinders on the ward",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "oxygen-storage",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Empty cylinders are labelled and put in their own collection rack, which stops staff grabbing one by accident in an emergency.",
          "evidence": "placed in the separate rack marked for collection, so that they cannot be picked up by mistake in an emergency",
          "wrong": {
            "a": "It is extra cylinders above the stock level that go back to the store, not empty ones.",
            "b": "Porters do collect empties, but every weekday morning, not at the end of the day."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Following a recent environmental audit, staff are reminded of the arrangements for storing oxygen cylinders in clinical areas. Full cylinders must be kept upright in the designated wall-mounted rack or cylinder trolley in the clean utility room, never free-standing or lying on the floor. Empty cylinders should be labelled as empty and placed in the separate rack marked for collection, so that they cannot be picked up by mistake in an emergency. Cylinders must not be stored next to heat sources, in corridors or on fire escape routes. The number held on each ward should not exceed the agreed stock level shown on the rack; any extra cylinders are to be returned to the medical gases store. Porters collect empty cylinders every weekday morning. Any damaged cylinder should be taken out of use immediately and reported to the estates helpdesk."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about empty cylinders?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Ward staff should take them back to the medical gases store."
            },
            {
              "id": "b",
              "text": "Porters collect them from the ward at the end of each weekday."
            },
            {
              "id": "c",
              "text": "They are kept apart so that nobody mistakes them for full ones."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-moving-and-handling-medical-gas-cylinders",
    "title": "Part B — Guideline: moving and handling medical gas cylinders",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "gas-cylinder-handling",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "During a transfer with oxygen running, the cylinder has to be placed in the holder on the bed or wheelchair rather than resting loose on the mattress or the patient.",
          "evidence": "the cylinder must sit in the holder fitted to the bed or wheelchair, not on the mattress or the patient's lap",
          "wrong": {
            "b": "Too strong: the regulator stays attached when the cylinder is in use with a patient during a transfer.",
            "c": "Staff may lift cylinders; they should ask a colleague or a porter only if unsure of the weight."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "This guideline applies to all staff who move medical gas cylinders within the hospital. Cylinders larger than the small portable size must always be moved on a purpose-designed trolley; they must never be rolled along the floor, carried by the valve or dragged. Before moving a cylinder, check that the valve is closed and that any regulator or tubing has been detached, unless the cylinder is in use with a patient during a transfer. Staff should not try to lift a cylinder onto a trolley alone if they have any doubt about its weight; ask a colleague or request a porter. When a patient is transferred with oxygen running, the cylinder must sit in the holder fitted to the bed or wheelchair, not on the mattress or the patient's lap. All staff who handle cylinders must complete the trust's medical gases e-learning module."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline makes it clear that",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "oxygen used in a patient transfer needs a securely held cylinder."
            },
            {
              "id": "b",
              "text": "the regulator must always be removed before any cylinder is moved."
            },
            {
              "id": "c",
              "text": "only porters are permitted to lift a full cylinder onto a trolley."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-the-electrical-safety-test-label",
    "title": "Part B — Instructions: the electrical safety test label",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "equipment-safety-label",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "An expired label means the device cannot be used on patients; staff tag it, move it to the dirty utility room and log a request with clinical engineering.",
          "evidence": "If the label is missing, illegible or out of date, the device must not be used on a patient.",
          "wrong": {
            "a": "Staff are told not to re-label equipment themselves.",
            "c": "A readable asset number only matters for a worn label or for the request; an expired label stops use."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Every item of mains-powered medical equipment in this trust carries an electrical safety test label applied by the clinical engineering department. The label shows the asset number, the date of the last test and the date by which the next test is due. Before using a device, staff should check that the label is present and that the next test date has not passed. If the label is missing, illegible or out of date, the device must not be used on a patient. Attach a red 'Do not use' tag, move the device to the dirty utility room and log a request on the clinical engineering portal, quoting the asset number if it can be read. Do not attempt to re-label equipment yourself, and do not remove a device from service simply because its label is worn, provided all the details remain clearly readable."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What do the instructions say about a device whose label is out of date?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Ward staff may fit a new label once they have checked it."
            },
            {
              "id": "b",
              "text": "It should be withdrawn from use and reported to clinical engineering."
            },
            {
              "id": "c",
              "text": "It may still be used as long as the asset number is readable."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-moving-patients-between-wards-at-night",
    "title": "Part B — Memo: moving patients between wards at night",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "night-transfers",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Night transfers are not banned; they are now allowed only for a clinical reason or with site manager approval, while purely administrative moves wait for the morning.",
          "evidence": "transfers between 22:00 and 07:00 should take place only when there is a clinical reason",
          "wrong": {
            "a": "Too strong: night moves still happen for clinical reasons or with site manager approval.",
            "b": "The handover is given by the sending nurse to the receiving nurse; the manager only approves."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "To: Ward managers and site team\nFrom: Head of Patient Flow\nRe: Night-time ward transfers\n\nConcerns have been raised by patients and staff about the number of patients being moved between wards late at night. With immediate effect, transfers between 22:00 and 07:00 should take place only when there is a clinical reason, such as a need for a higher level of care, or when the site manager has approved the move to free a bed for an emergency admission. Moves made purely to tidy bed allocations should wait until the morning. Where a night transfer does go ahead, the sending nurse must give a verbal handover to the receiving nurse, and the reason for the move and the name of the approving manager must be recorded in the notes. Patients who are confused or at risk of falls should not be moved at night without a documented risk discussion."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The purpose of this memo is to",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "stop every transfer of patients between wards during the night."
            },
            {
              "id": "b",
              "text": "require the site manager to give handover for each night transfer."
            },
            {
              "id": "c",
              "text": "limit overnight moves to those that are clinically needed or approved."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-escorting-a-patient-to-a-scan",
    "title": "Part B — Policy extract: escorting a patient to a scan",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "patient-escort",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "If there is a delay, the escort may only leave the patient once the radiology nurse in charge has agreed to it.",
          "evidence": "the escort must not leave the patient unattended in the department without first agreeing this with the radiology nurse in charge",
          "wrong": {
            "b": "A confused but otherwise stable patient may be escorted by a healthcare assistant.",
            "c": "On arrival the handover goes to the radiographer; the radiology nurse in charge is involved only in delays."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Before a patient leaves the ward for imaging, the nurse caring for the patient must decide what level of escort is needed, using the trust's escort assessment form. Patients who are stable, alert and independent may be taken to the department by a porter alone. A registered nurse must accompany any patient who has an infusion that cannot be paused, needs continuous monitoring, or whose early warning score has risen during the shift. A healthcare assistant may escort a patient who is confused or anxious but otherwise stable. Whoever escorts the patient should take the notes, the drug chart and the completed form, and should hand over to the radiographer on arrival. If the scan is delayed, the escort must not leave the patient unattended in the department without first agreeing this with the radiology nurse in charge."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, an escort must",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "agree with radiology staff before leaving a waiting patient."
            },
            {
              "id": "b",
              "text": "be a registered nurse whenever the patient is confused or anxious."
            },
            {
              "id": "c",
              "text": "hand over to the radiology nurse in charge as soon as they arrive."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-the-isolation-sign-on-a-side-room-door",
    "title": "Part B — Notice: the isolation sign on a side-room door",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "isolation-visitors",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Visitors are asked to speak to the nurse in charge first, who decides which protective items, if any, are needed and shows how to wear them.",
          "evidence": "Before you go in, please speak to the nurse in charge, who will tell you whether you need to wear an apron, gloves or a mask",
          "wrong": {
            "b": "Too strong: the nurse decides whether any of these items are needed for that patient.",
            "c": "Visitors should wash with soap and water on leaving, because the gel does not work against every infection."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Information for visitors\n\nA yellow isolation sign on the door of a side room means the patient inside is being cared for in a way that reduces the spread of infection. This does not mean you cannot visit. Before you go in, please speak to the nurse in charge, who will tell you whether you need to wear an apron, gloves or a mask, and will show you how to put them on. Please do not enter if you are feeling unwell, particularly with a cough, fever, diarrhoea or vomiting. Keep the door closed at all times, and do not sit on the bed or take items from the room to share with other patients. Always wash your hands with soap and water when you leave; the hand gel at the door is not effective against every infection. Children may visit only with the agreement of the nurse in charge."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the notice say about visiting a patient in a side room?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Visitors should ask a nurse what protection they need before entering."
            },
            {
              "id": "b",
              "text": "Visitors must wear an apron, gloves and a mask each time they visit the room."
            },
            {
              "id": "c",
              "text": "Visitors should use the hand gel by the door as they leave."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-closing-a-bay-during-a-diarrhoea-and-vomiting-outbreak",
    "title": "Part B — Email: closing a bay during a diarrhoea and vomiting outbreak",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "outbreak-bay-closure",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Current patients are not to be moved out of the bay unless their clinical needs change, because moving them could spread the infection.",
          "evidence": "Patients already in the bay will stay there unless their clinical needs change",
          "wrong": {
            "a": "Reopening depends on confirmation from the infection prevention team, not the ward manager's decision.",
            "c": "Too strong: this applies only where staffing allows."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Subject: Bay C closed to admissions\n\nDear colleagues,\n\nAfter three patients in Bay C developed diarrhoea and vomiting over two days, the infection prevention team has agreed with me that the bay should close to new admissions from today. Patients already in the bay will stay there unless their clinical needs change; please do not move them to other bays or wards, as this risks spreading the infection. Stool samples should be sent promptly from anyone with symptoms. The bay doors are to remain closed, and a dedicated commode and equipment will be kept inside. Where staffing allows, staff working in the bay should not also care for patients elsewhere on the ward during the same shift. The bay will be reviewed daily, and will reopen only once the infection prevention team confirms that there have been no new cases for an agreed period and a deep clean has been completed.\n\nWard Manager"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "This email informs staff that",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the bay will reopen as soon as the ward manager decides it is safe to do so."
            },
            {
              "id": "b",
              "text": "patients in the bay should generally remain where they are for now."
            },
            {
              "id": "c",
              "text": "staff in the bay must never care for other patients on the ward."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-staff-who-decline-the-flu-vaccination",
    "title": "Part B — Policy extract: staff who decline the flu vaccination",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "flu-vaccination",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Staff who decline fill in an online form, and the policy says a reason is given only if they want to give one.",
          "evidence": "staff who choose not to be vaccinated are asked to complete a short online declination form, giving their reason if they wish to",
          "wrong": {
            "a": "A reason is optional, and the information is not shared with line managers in an identifying way.",
            "b": "Staff may change their minds at any point during the season and will still be offered it."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "This trust strongly encourages all staff with patient contact to accept the seasonal influenza vaccine, which is offered free of charge through occupational health and through peer vaccinators on each site. Vaccination is not a condition of employment, and no member of staff will be disciplined for declining it. However, staff who choose not to be vaccinated are asked to complete a short online declination form, giving their reason if they wish to. This information is used only to plan the following year's campaign and is not shared with line managers in a way that identifies individuals. Staff who decline may change their minds at any point during the season and will still be offered the vaccine. Regardless of vaccination status, any member of staff who develops flu-like symptoms should not attend work and must report their absence in the usual way."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, staff who decline the vaccine",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "must explain their reason for declining to their line manager."
            },
            {
              "id": "b",
              "text": "cannot be offered the vaccine again until the following season."
            },
            {
              "id": "c",
              "text": "are asked to record their decision, though giving a reason is optional."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-referral-to-occupational-health",
    "title": "Part B — Guideline: referral to occupational health",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "occupational-health-referral",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The manager has to talk to the employee first, giving the reason for the referral and showing the questions, before the referral goes off.",
          "evidence": "Before submitting the referral, the manager must discuss it with the employee, explain why it is being made",
          "wrong": {
            "b": "Occupational health shares only advice on fitness and adjustments, not clinical details.",
            "c": "Too strong: managers decide whether the suggested adjustments can be made."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Managers should consider a referral to occupational health when a member of staff has been absent for an extended period, has had repeated short absences that suggest an underlying health problem, or is returning to work with a condition that may affect their duties. A referral is intended to obtain advice about fitness for work and any reasonable adjustments; it is not a disciplinary step. Before submitting the referral, the manager must discuss it with the employee, explain why it is being made and show them the questions that will be asked. The employee's consent is required before the occupational health report is released to the manager. Occupational health will not share clinical details, only advice on what the employee can do and any recommended changes. Managers remain responsible for deciding whether the suggested adjustments can be put in place."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline states that managers",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "should explain the referral to the employee before it is sent."
            },
            {
              "id": "b",
              "text": "will be sent details of the employee's diagnosis in the report."
            },
            {
              "id": "c",
              "text": "are required to put in place every adjustment that is recommended."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-deadlines-for-annual-leave-requests",
    "title": "Part B — Memo: deadlines for annual leave requests",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "annual-leave",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "A late request is not automatically turned down; it can still be approved, but only when the shift can be filled without bringing in agency staff.",
          "evidence": "Requests received after this date will still be considered, but only if the rota can cover the shift without using agency staff.",
          "wrong": {
            "a": "Late requests are still considered; the memo does not mention refusal once the rota is published.",
            "c": "The deputy ward manager answers questions; the memo does not say they handle late requests."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "To: All nursing staff, Ward 7\nFrom: Ward Manager\nRe: Annual leave requests\n\nTo allow the rota to be published six weeks in advance, all annual leave requests must now be submitted through the e-rostering system by the first day of the month, two months before the leave is to be taken. For example, leave wanted in any part of June should be requested by the first of April. Requests received after this date will still be considered, but only if the rota can cover the shift without using agency staff. Leave during school holidays and over Christmas is in high demand and will be shared fairly across the team, taking into account who had leave in the same period last year. Please do not book travel until your leave has been approved on the system. Any questions should be raised with the deputy ward manager."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the memo say about late leave requests?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They will be refused if the rota has already been published by then."
            },
            {
              "id": "b",
              "text": "They may be approved if no agency staff are needed to cover."
            },
            {
              "id": "c",
              "text": "They are dealt with by the deputy ward manager instead."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-a-reminder-about-mandatory-training",
    "title": "Part B — Email: a reminder about mandatory training",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "mandatory-training",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "If a completed module shows as expired, staff should send their certificate to the training team instead of doing the course again.",
          "evidence": "send your certificate to the training team rather than repeating the course",
          "wrong": {
            "a": "The email says the opposite: staff should not repeat the course.",
            "b": "One-to-one meetings are where managers review compliance, not where record errors are corrected."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Subject: Mandatory training – action needed\n\nDear all,\n\nThe latest compliance report shows that several staff in the department have mandatory training modules that have expired or will expire within the next month. Please log in to the learning portal, where your personal record shows each module in green, amber or red. Red modules must be completed before your next rostered shift; amber modules should be booked or completed within the coming month. Most modules are available as e-learning, and you may complete them during work time with your line manager's agreement. Face-to-face sessions, such as basic life support, fill quickly, so please book early. If a module appears as expired but you believe you have completed it, send your certificate to the training team rather than repeating the course. Line managers will review compliance at each one-to-one meeting.\n\nEducation Lead"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The email advises staff who think their training record is wrong to",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "repeat the module at the next available session."
            },
            {
              "id": "b",
              "text": "raise the problem at their next one-to-one meeting."
            },
            {
              "id": "c",
              "text": "provide proof of completion to the training team."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-come-back-in-six-months",
    "title": "Part C — Come back in six months",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "follow-up-appointments",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The writer admits there was no good answer to what the next visit was for, and says the bookings were made from habit, not because anyone needed them.",
          "evidence": "I had been booking appointments the way some people set an alarm: out of habit, not because anyone needed waking.",
          "wrong": {
            "a": "Inhalers are reviewed at visits, but the alarm image is about habit, not reminding patients.",
            "c": "Nothing in the paragraph links the bookings to patients' work.",
            "d": "The writer never says patients struggled to attend; the point is that visits had no clear purpose."
          }
        },
        "q2": {
          "why": "The writer accepts that a planned visit lets a clinician who knew the patient earlier notice a decline the patient has grown used to.",
          "evidence": "a scheduled visit can catch a slow decline that the patient has quietly adapted to",
          "wrong": {
            "a": "The writer mentions one patient who left with an urgent referral; follow-up found the problem rather than preventing referrals.",
            "b": "Patients accept the decline on their own; follow-up is what notices it.",
            "c": "This is the opposite: the writer warns against abolishing review entirely."
          }
        },
        "q3": {
          "why": "The writer explains that once figures are monitored they change behaviour, so a full slot is treated as care whether or not it helps.",
          "evidence": "The difficulty is that once a figure is watched, it begins to shape behaviour.",
          "wrong": {
            "b": "The measures reward full slots, which tends to increase appointments, not reduce them.",
            "c": "The writer says they were introduced with good intentions.",
            "d": "The writer argues the opposite: a full slot looks like care whether or not it helps."
          }
        },
        "q4": {
          "why": "The paragraph is about costs falling on patients; the daughter loses half a day's work every time she drives her father in.",
          "evidence": "relies on his daughter to drive him to the hospital, which means she loses half a day's work each time",
          "wrong": {
            "a": "She drives him because he relies on her, not because she insists on coming.",
            "b": "The afternoon is mentioned only for its infection risk, not as a preference.",
            "d": "Infection risk is a separate cost in the paragraph, not the point of mentioning the daughter."
          }
        },
        "q5": {
          "why": "The sentence before reports Mr Okafor saying he liked seeing the writer; that remark is what is pleasant to hear but is not a clinical reason.",
          "evidence": "he said, kindly, that he liked seeing me. That is pleasant to hear, but it is not a clinical reason",
          "wrong": {
            "a": "The waiting-area risk is a cost, not something pleasant to hear.",
            "b": "Expensive parking is a cost, and it comes earlier in the paragraph.",
            "d": "The question is the writer's own; what is pleasant is Mr Okafor's answer."
          }
        },
        "q6": {
          "why": "The writer has come to see that slots used by stable patients are not free for new ones, so the clinic has helped create its own list.",
          "evidence": "Our waiting list for new patients has grown steadily, and I have come to see that this is partly our own doing.",
          "wrong": {
            "b": "The writer gives no evidence of more diagnoses; the cause named is the clinic's own practice.",
            "c": "Phone calls are suggested only for stable patients, not for every visit.",
            "d": "The writer says nobody in the clinic actually looks at the spreadsheet."
          }
        },
        "q7": {
          "why": "The writer calls it sensible but says it works only when patients leave with clear guidance, a phone line that is answered and confidence to call.",
          "evidence": "I think this is a sensible approach, but only if it is done properly.",
          "wrong": {
            "a": "Only some colleagues favour it; nothing says most prefer it to everything else.",
            "b": "It is described for stable patients discharged from routine review, not new ones.",
            "c": "The writer sees this risk but believes it can be managed with proper guidance."
          }
        },
        "q8": {
          "why": "Mr Okafor is better served with a plan and a direct number, and the writer calls this better care even though the old figures show less activity.",
          "evidence": "I count that as better care, even though, by the old measures, it looks like less.",
          "wrong": {
            "a": "The writer wants managers to ask a different question, not keep the old measures.",
            "c": "The writer does not say when he should have been discharged.",
            "d": "The writer hopes managers will change; there is no claim that they refuse."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Every Thursday afternoon I see a clinic list of about a dozen people, most of whom I have seen before and many of whom I will see again. For years I took this rhythm for granted. A patient came, we checked their breathing, reviewed their inhalers and agreed that things were stable, and before they left I would ask the receptionist to book them in again. It was only when a retired engineer called Mr Okafor asked me, quite politely, what exactly the next visit was for that I realised I had no good answer. I had been booking appointments the way some people set an alarm: out of habit, not because anyone needed waking.\n\nI do not want to pretend that routine follow-up is worthless. For some patients it is the only point of contact they have with anyone who understands their condition, and a scheduled visit can catch a slow decline that the patient has quietly adapted to. People are remarkably good at living with less breath than they used to have and calling it normal. A clinician who knew them a year ago can notice what they cannot. So the case for regular review is real, and anyone who argues for abolishing it entirely has, I suspect, not met the patient who turned up for a 'pointless' check and left with an urgent referral.\n\nYet the honest question is who most of these appointments are really for. Over time our service has been asked to demonstrate activity: numbers of patients reviewed, waiting times met, the proportion of people seen within a set interval. These measures were introduced with good intentions, and they are not foolish in themselves. The difficulty is that once a figure is watched, it begins to shape behaviour. An empty follow-up slot looks like lost productivity, while a full one looks like care, whether or not anything useful happens in it. We have, without anyone deciding it, built a system that rewards us for seeing people rather than for helping them.\n\nThe costs of this are easy to overlook because they fall mostly on patients. Mr Okafor, for instance, relies on his daughter to drive him to the hospital, which means she loses half a day's work each time. Parking is expensive, the waiting area is crowded, and for someone with fragile lungs a winter afternoon among coughing strangers is not without risk. When I asked him what he gained from our meetings, he said, kindly, that he liked seeing me. That is pleasant to hear, but it is not a clinical reason, and I am not sure it justifies what the journey takes out of him and his family.\n\nThere is also a cost to the patients we do not see. Every slot filled by a stable person who would be just as well served by a phone call is a slot not available to someone newly diagnosed, frightened and waiting weeks for a first appointment. Our waiting list for new patients has grown steadily, and I have come to see that this is partly our own doing. We protect the familiar faces because they are in front of us, while the people who most need our attention remain an anonymous number on a spreadsheet that nobody in the clinic actually looks at.\n\nWhat, then, should change? Some colleagues favour patient-initiated follow-up, in which a stable patient is discharged from routine review but given a direct route back if their symptoms worsen. I think this is a sensible approach, but only if it is done properly. A patient told simply to 'get in touch if anything changes' may not know what counts as a change, or may be reluctant to bother us. The arrangement works when the patient leaves with clear written guidance on which signs matter, a telephone number that is actually answered, and the confidence that calling will not be treated as a nuisance.\n\nNone of this will happen while success is measured only by how many people pass through the door. I would like our managers to ask a different question: not how many follow-ups we completed, but how many patients knew what to do when things went wrong, and how quickly the new ones were seen. Mr Okafor now has a written plan and my direct number. He has rung once in eight months, and the call was useful to both of us. His daughter has her Thursdays back. I count that as better care, even though, by the old measures, it looks like less."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, the writer's comparison with setting an alarm suggests that the appointments were",
          "answer": "b",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "arranged so that patients would not forget to use their inhalers"
            },
            {
              "id": "b",
              "text": "booked out of routine rather than because any patient needed one"
            },
            {
              "id": "c",
              "text": "timed to fit around the working commitments of the patients"
            },
            {
              "id": "d",
              "text": "scheduled more often than most patients were able to attend"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, the writer concedes that routine follow-up can",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "prevent most stable patients from ever needing an urgent referral"
            },
            {
              "id": "b",
              "text": "persuade patients to accept a gradual decline in their breathing"
            },
            {
              "id": "c",
              "text": "be safely abolished for the large majority of stable patients"
            },
            {
              "id": "d",
              "text": "reveal a slow deterioration that patients themselves have missed"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "In the third paragraph, what does the writer say about the activity measures?",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "They have come to influence what staff in the clinic actually do."
            },
            {
              "id": "b",
              "text": "They were designed in order to reduce the number of appointments."
            },
            {
              "id": "c",
              "text": "They were introduced without any clear purpose behind them."
            },
            {
              "id": "d",
              "text": "They give an accurate picture of the quality of care being provided."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "In the fourth paragraph, the writer mentions Mr Okafor's daughter to illustrate",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "how often family members insist on coming to clinic visits"
            },
            {
              "id": "b",
              "text": "why many patients prefer appointments in the afternoon"
            },
            {
              "id": "c",
              "text": "the burden that routine visits place on people outside the clinic"
            },
            {
              "id": "d",
              "text": "the risk of infection for patients sitting in a crowded waiting area"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "In the fourth paragraph, the word \"That\" in \"That is pleasant to hear\" refers to",
          "answer": "c",
          "kind": [
            "reference"
          ],
          "options": [
            {
              "id": "a",
              "text": "the risk of spending an afternoon in the waiting area"
            },
            {
              "id": "b",
              "text": "the high cost of parking at the hospital"
            },
            {
              "id": "c",
              "text": "Mr Okafor's remark that he liked seeing the writer"
            },
            {
              "id": "d",
              "text": "the writer's question about what the visits gave him"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "In the fifth paragraph, what does the writer suggest about the growing waiting list?",
          "answer": "a",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "It is partly a result of the clinic's own booking habits."
            },
            {
              "id": "b",
              "text": "It mainly reflects a rise in the number of new diagnoses."
            },
            {
              "id": "c",
              "text": "It could be removed by replacing every visit with a phone call."
            },
            {
              "id": "d",
              "text": "It is closely monitored by the staff who work in the clinic."
            }
          ]
        },
        {
          "id": "q7",
          "stem": "In the sixth paragraph, the writer's view of patient-initiated follow-up is that it",
          "answer": "d",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "is preferred by most colleagues to every other possible approach"
            },
            {
              "id": "b",
              "text": "should be kept for patients who have only recently been diagnosed"
            },
            {
              "id": "c",
              "text": "places too much responsibility on patients to work well in practice"
            },
            {
              "id": "d",
              "text": "is worthwhile provided that patients are properly prepared for it"
            }
          ]
        },
        {
          "id": "q8",
          "stem": "In the final paragraph, the writer concludes that",
          "answer": "b",
          "kind": [
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "the old measures should be kept alongside any new ones introduced"
            },
            {
              "id": "b",
              "text": "better care may look like less activity under current measures"
            },
            {
              "id": "c",
              "text": "Mr Okafor ought to have been discharged from the clinic sooner"
            },
            {
              "id": "d",
              "text": "managers are unwilling to change the way success is measured"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-the-letter-that-arrived-first",
    "title": "Part C — The letter that arrived first",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "online-patient-records",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The writer explains that she kept silent because she could not tell whether she was supposed to have read the letter at all.",
          "evidence": "told no one, because she did not know whether what she had read was even meant for her",
          "wrong": {
            "a": "No request for privacy is mentioned; nobody had told her the letter was there.",
            "b": "Searching the internet made her imagine the worst, not feel reassured.",
            "c": "The appointment was with the specialist, and the GP had not yet seen the letter."
          }
        },
        "q2": {
          "why": "Documents list possibilities later ruled out, so a cautious phrase can sound like a verdict to a patient reading alone.",
          "evidence": "sounds like a verdict when it is often nothing more than a careful clinician covering every base",
          "wrong": {
            "b": "The writer calls the language shorthand and careful, not deliberately evasive.",
            "c": "Errors in records are discussed in the third paragraph, as something patients help to find.",
            "d": "The opposite: the documents are written by professionals for other professionals."
          }
        },
        "q3": {
          "why": "He noticed that his record still called him a smoker long after he stopped, an example of the benefit of patients reading their notes.",
          "evidence": "One elderly man pointed out that his record still described him as a smoker twenty years after he had stopped.",
          "wrong": {
            "a": "He used the record successfully; nothing suggests difficulty because of his age.",
            "b": "He understood his notes well enough to find a mistake.",
            "d": "His smoking history was present but out of date, not missing."
          }
        },
        "q4": {
          "why": "The previous sentence describes results released automatically, reaching the patient before anyone able to interpret them has looked; the writer calls this abandonment.",
          "evidence": "the patient may meet it before anyone with the knowledge to interpret it has had a chance to look. That is not openness",
          "wrong": {
            "a": "The patient reading at night is the result, not what the writer calls abandonment.",
            "c": "The letter is filed and released automatically; the text does not blame the clinician who filed it.",
            "d": "Knowledge is needed to interpret results; it is not what the writer criticises."
          }
        },
        "q5": {
          "why": "The writer separates access from timing: she suffered because she read the letter on a Sunday night with nobody to explain it.",
          "evidence": "She suffered because she read it on a Sunday night, with no way of reaching anyone who could tell her what it meant.",
          "wrong": {
            "b": "The writer says directly that she did not suffer because she was allowed to read it.",
            "c": "The appointment was already planned for later that week; no postponement is mentioned.",
            "d": "The language is discussed in the second paragraph; here the writer blames timing."
          }
        },
        "q6": {
          "why": "The writer calls it a possibly dangerous mistake, because the record exists to tell the next clinician what the last one thought.",
          "evidence": "we risk losing exactly the information that keeps patients safe",
          "wrong": {
            "a": "The writer calls it a mistake, not a temporary compromise.",
            "b": "The writer does not accept it as a good way to reduce anxiety; the delivery should change instead.",
            "c": "The paragraph says some colleagues already do it; it does not say how many."
          }
        },
        "q7": {
          "why": "The writer admits none is perfect and all need staff time, but each makes the moment of reading part of care.",
          "evidence": "None of these is perfect, and each requires staff time that we do not have in abundance, but each treats the moment of reading as part of care",
          "wrong": {
            "a": "One step actually invites patients to book a call if anything worries them.",
            "c": "Serious results would be held while routine results are released as normal.",
            "d": "The writer says each step needs staff time that is in short supply."
          }
        },
        "q8": {
          "why": "Against the writer's expectation, she wanted to go on reading her record, but wished someone had been with her when she read the letter.",
          "evidence": "she said she wanted to keep reading it, but that she wished someone had been there when she did",
          "wrong": {
            "a": "This is what the writer expected her to say, but she said the opposite.",
            "b": "She says nothing about how the hospital should have contacted her.",
            "d": "She does not blame the writer, who had not yet seen the letter."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Last spring a woman I will call Mrs Reyes rang the surgery in tears. She had logged into her online record on a Sunday evening, as she often did, and found a letter from the hospital that mentioned a 'suspicious lesion' on a recent scan. Nobody had told her it was there. The specialist intended to discuss it with her at an appointment later that week, and I had not yet seen the letter myself. For three nights she searched the internet, imagined the worst and told no one, because she did not know whether what she had read was even meant for her.\n\nI start with her story because it is the kind that gets told when people argue that patients should not see their records until a clinician has explained them. I understand the instinct. Clinical documents are written by professionals for other professionals; they use shorthand, list possibilities that are later ruled out and record worries that turn out to be unfounded. Read cold, at home, without anyone to ask, a phrase such as 'cannot exclude malignancy' sounds like a verdict when it is often nothing more than a careful clinician covering every base.\n\nAnd yet I find I cannot agree with those who want to return to the old arrangement, in which the record belonged, in practice, to us. Most of my patients who read their notes tell me they find it useful. They remember what was said in a consultation more accurately, they notice mistakes in their medication lists, and they arrive at appointments with better questions. One elderly man pointed out that his record still described him as a smoker twenty years after he had stopped. These are not small benefits, and they come from treating patients as people entitled to know what is written about them.\n\nThe real problem, it seems to me, is not access but timing. When a result or letter is released automatically the moment it is filed, the patient may meet it before anyone with the knowledge to interpret it has had a chance to look. That is not openness so much as abandonment: we hand people information and then leave them alone with it. Mrs Reyes did not suffer because she was allowed to read her letter. She suffered because she read it on a Sunday night, with no way of reaching anyone who could tell her what it meant.\n\nSome colleagues have responded by writing more defensively, softening their language or leaving sensitive concerns out of the record altogether. I think this is a mistake, and potentially a dangerous one. The record exists, above all, so that the next clinician knows what the last one was thinking. If we begin to write for an imagined anxious reader rather than for an accurate account, we risk losing exactly the information that keeps patients safe. Clear, honest notes should not be sacrificed to spare feelings; it is the way they reach the patient that needs attention.\n\nThere are practical steps we could take. Results that carry serious implications could be held for a short, agreed period so that a clinician can make contact first, while routine results are released as normal. Letters could open with a brief plain-language summary. Our practice has started adding a note to the online record explaining that some documents use technical terms and inviting patients to book a call if anything worries them. None of these is perfect, and each requires staff time that we do not have in abundance, but each treats the moment of reading as part of care rather than an afterthought.\n\nMrs Reyes's lesion turned out to be benign. When she came to see me afterwards, I expected her to say that she wished she had never been able to read her record. Instead, she said she wanted to keep reading it, but that she wished someone had been there when she did. I have thought about that sentence many times since. It seems to me to describe exactly what we owe patients: not protection from the truth about their own bodies, but company when they first encounter it."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, why did Mrs Reyes not tell anyone what she had read?",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "The hospital had asked her to keep the letter private."
            },
            {
              "id": "b",
              "text": "She had already found reassurance on the internet."
            },
            {
              "id": "c",
              "text": "She expected her GP to call her before the specialist appointment."
            },
            {
              "id": "d",
              "text": "She was unsure whether the letter was meant for her to see."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, the writer suggests that clinical documents can alarm patients because they",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "include possibilities that a clinician records only to be thorough"
            },
            {
              "id": "b",
              "text": "are usually written in a deliberately vague and evasive style"
            },
            {
              "id": "c",
              "text": "contain errors that professionals have not taken the time to correct"
            },
            {
              "id": "d",
              "text": "are written for the patient to read rather than for colleagues"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "In the third paragraph, the writer mentions the elderly man in order to show that",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "older patients find online records harder to use than others"
            },
            {
              "id": "b",
              "text": "many patients misunderstand the shorthand used in their notes"
            },
            {
              "id": "c",
              "text": "patients who read their records can spot inaccurate information"
            },
            {
              "id": "d",
              "text": "smoking history is often left out of patients' records"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "In the fourth paragraph, the word \"That\" in \"That is not openness\" refers to",
          "answer": "b",
          "kind": [
            "reference"
          ],
          "options": [
            {
              "id": "a",
              "text": "a patient choosing to read a letter late at night"
            },
            {
              "id": "b",
              "text": "information released before anyone has interpreted it"
            },
            {
              "id": "c",
              "text": "a clinician filing a letter without reading it carefully first"
            },
            {
              "id": "d",
              "text": "the knowledge needed to understand a test result"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "In the fourth paragraph, what does the writer believe caused Mrs Reyes's distress?",
          "answer": "a",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "the circumstances in which she first came across the letter"
            },
            {
              "id": "b",
              "text": "the plain fact that she was permitted any access to her record"
            },
            {
              "id": "c",
              "text": "the specialist's decision to put off her appointment"
            },
            {
              "id": "d",
              "text": "the frightening language that the letter itself used"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "In the fifth paragraph, the writer argues that softening the language of records",
          "answer": "d",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "is an acceptable compromise until better systems are in place"
            },
            {
              "id": "b",
              "text": "is the most effective way of reducing patients' anxiety"
            },
            {
              "id": "c",
              "text": "is something few clinicians are actually prepared to do"
            },
            {
              "id": "d",
              "text": "could deprive later clinicians of information they need"
            }
          ]
        },
        {
          "id": "q7",
          "stem": "In the sixth paragraph, what does the writer say about the suggested practical steps?",
          "answer": "b",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "They would remove any need for patients to contact the practice."
            },
            {
              "id": "b",
              "text": "They have limitations but improve how patients receive information."
            },
            {
              "id": "c",
              "text": "They should be applied in the same way to all kinds of result."
            },
            {
              "id": "d",
              "text": "They could be introduced without placing extra demands on staff."
            }
          ]
        },
        {
          "id": "q8",
          "stem": "In the final paragraph, what did Mrs Reyes tell the writer?",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "She regretted ever having been able to read her record online."
            },
            {
              "id": "b",
              "text": "She would have preferred the hospital to write to her directly."
            },
            {
              "id": "c",
              "text": "She would keep reading her record but wished she had had support."
            },
            {
              "id": "d",
              "text": "She felt the writer should have warned her about the lesion."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-the-beep-nobody-answers",
    "title": "Part C — The beep nobody answers",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "STRETCH",
    "topicTag": "alarm-fatigue",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The writer believes the change is not simply personal but what happens to almost anyone working where alarms rarely signal real danger.",
          "evidence": "it is what happens to almost anyone who works in an environment where the alarms rarely mean what they say",
          "wrong": {
            "b": "The writer says plainly, I am not proud of that.",
            "c": "As a new nurse every alarm made the writer's heart race; the change came over years.",
            "d": "The writer says it is not simply a personal failing, and experience produced it."
          }
        },
        "q2": {
          "why": "The comparison presents ignoring frequent, uninformative noise as an ordinary human reaction rather than laziness.",
          "evidence": "It is a perfectly ordinary human response to noise that carries little information",
          "wrong": {
            "a": "The image is about how people adapt to noise, not about how loud wards are.",
            "b": "The writer says staff learn this without deciding to, and not out of laziness.",
            "d": "Silencing is mentioned, but never as a way to help patients sleep."
          }
        },
        "q3": {
          "why": "The colleague heard the oxygen alarm again at midnight and took it to be caused by the same poorly fitting probe as before.",
          "evidence": "When it sounded again around midnight, a colleague glanced at the screen from the desk, assumed it was the same problem",
          "wrong": {
            "a": "The colleague glanced at the screen; it was the alarm she assumed was the same problem.",
            "c": "His recovery is mentioned later and was not something she misjudged.",
            "d": "She returned to her notes after making the assumption about the alarm."
          }
        },
        "q4": {
          "why": "The patient was treated quickly and recovered fully, yet the writer stresses that even a short delay was unacceptable.",
          "evidence": "the delay, though short, was one that should never have happened",
          "wrong": {
            "a": "The opposite: he was quickly treated and recovered fully.",
            "b": "She glanced at the screen from the desk before carrying on.",
            "c": "Nothing says the probe was replaced; this time the cause simply was not the probe."
          }
        },
        "q5": {
          "why": "The writer disagrees with managers, saying this leaves alarm numbers unchanged and loads the whole burden onto individuals.",
          "evidence": "places the whole burden on individuals and ignores the conditions that produced the problem",
          "wrong": {
            "a": "The writer says blaming staff might feel like accountability but would change nothing.",
            "c": "The writer disagrees with the request, pointing out that staff are exhausted.",
            "d": "No improvement from vigilance is reported; the change came from reviewing alarm settings."
          }
        },
        "q6": {
          "why": "Limits are left at standard settings and not adjusted to the person, so a well patient with an unusual normal heart rate keeps triggering alerts.",
          "evidence": "Many of the limits on our monitors are left at the standard settings when a patient arrives and are never adjusted to the individual.",
          "wrong": {
            "a": "The age of the monitors is never mentioned; the limits could be adjusted but are not.",
            "b": "The example is a patient whose usual heart rate sits outside the range, not one that changes.",
            "d": "The writer recommends replacing probes when they fail, not changing them less."
          }
        },
        "q7": {
          "why": "The writer grants that an adjustment correct on one day may be wrong a few days later if the patient's condition alters.",
          "evidence": "an adjustment made for good reasons on Monday may be wrong by Wednesday if the patient's condition changes",
          "wrong": {
            "b": "The concern is the opposite: a tired nurse quietly switching alerts off to get some peace.",
            "c": "Time spent on reviews is not raised as a worry in this paragraph.",
            "d": "The writer wants a quieter unit so that sounds mean something again."
          }
        },
        "q8": {
          "why": "The writer hopes they keep it and says this depends on the unit continuing to protect their attention from meaningless noise.",
          "evidence": "That will depend less on their character than on whether we continue to build a place where their attention is not worn away",
          "wrong": {
            "a": "The writer believes the unit's changes can protect it, not that it will fade anyway.",
            "b": "Handover is when settings are reviewed; no link to new nurses attending is made.",
            "c": "The writer says it depends less on their character than on the environment."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "On my first night shift as a newly qualified nurse, every alarm made my heart race. I would hurry to the bedside convinced that something terrible was happening, and almost always find that a patient had moved an arm, a probe had slipped off a finger or a cable had been tugged loose. Fifteen years later, I notice that I barely hear most of them. I am not proud of that. But I have come to believe that the change in me is not simply a personal failing; it is what happens to almost anyone who works in an environment where the alarms rarely mean what they say.\n\nThe term usually given to this is alarm fatigue, and it describes something every ward nurse will recognise. When a monitor sounds again and again during a shift and nearly every alert turns out to be harmless, staff gradually learn, without deciding to, that the sound can wait. Response times lengthen. Volumes are turned down. Occasionally, alarms are silenced altogether. Nobody does this out of laziness. It is a perfectly ordinary human response to noise that carries little information, in the same way that people living beside a railway eventually stop hearing the trains.\n\nThe danger, of course, is that the one alarm that matters sounds exactly like the hundred that did not. I remember a patient on our unit, a man recovering from abdominal surgery, whose oxygen saturation alarm had been sounding on and off all evening because of a poorly fitting probe. When it sounded again around midnight, a colleague glanced at the screen from the desk, assumed it was the same problem and carried on with her notes. This time it was not the probe. He was quickly treated and recovered fully, but the delay, though short, was one that should never have happened.\n\nIt would be easy to conclude that the answer is simply greater vigilance, and I have heard managers say as much. I disagree. Telling exhausted staff to respond more quickly to every alarm, while leaving the number of alarms unchanged, places the whole burden on individuals and ignores the conditions that produced the problem. My colleague that night was not careless; she had learned exactly what the environment had taught her. Blaming her might feel like accountability, but it would do nothing to stop the same thing happening on the next shift.\n\nWhat would help is fewer, better alarms. Many of the limits on our monitors are left at the standard settings when a patient arrives and are never adjusted to the individual. A patient whose heart rate normally sits a little outside the standard range will trigger an alert repeatedly while being perfectly well. Reviewing limits as part of the daily plan, with the decision recorded and the reasoning clear, would remove a large share of meaningless noise. So would something as simple as checking that probes and electrodes are correctly placed, and replacing them when they stop working properly.\n\nI should acknowledge that this approach makes some colleagues uneasy, and their concern is not unreasonable. Widening alarm limits, or switching off alerts judged unnecessary, carries its own risk: an adjustment made for good reasons on Monday may be wrong by Wednesday if the patient's condition changes. Any change, therefore, has to be a clinical decision, reviewed regularly and visible to everyone caring for that patient, not a quiet act by a tired nurse trying to get some peace. The aim is not silence; it is a unit where a sound still means something.\n\nSince our unit began reviewing alarm settings at each morning handover, the atmosphere has changed in a way that is hard to measure but easy to feel. The bays are quieter. When a monitor does sound, people look up. I have watched newly qualified nurses respond to alarms with the urgency I once had, and I hope they keep it. That will depend less on their character than on whether we continue to build a place where their attention is not worn away by noise that tells them nothing."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, what does the writer suggest about no longer noticing most alarms?",
          "answer": "a",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "It commonly happens to staff where most alarms mean very little."
            },
            {
              "id": "b",
              "text": "It is something the writer is comfortable admitting to colleagues."
            },
            {
              "id": "c",
              "text": "It started as soon as the writer had qualified as a nurse."
            },
            {
              "id": "d",
              "text": "It is a personal weakness that further experience will correct."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, the writer mentions people living beside a railway in order to show that",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "hospital wards are much noisier than they ought to be"
            },
            {
              "id": "b",
              "text": "staff choose to ignore the alarms they find most irritating"
            },
            {
              "id": "c",
              "text": "people naturally stop reacting to sounds that seldom matter"
            },
            {
              "id": "d",
              "text": "alarms are often silenced so that patients can sleep"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "In the third paragraph, the word \"it\" in \"assumed it was the same problem\" refers to",
          "answer": "b",
          "kind": [
            "reference"
          ],
          "options": [
            {
              "id": "a",
              "text": "the screen at the nurses' desk"
            },
            {
              "id": "b",
              "text": "the alarm that sounded around midnight"
            },
            {
              "id": "c",
              "text": "the patient's recovery from his operation"
            },
            {
              "id": "d",
              "text": "the notes the colleague was writing"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "In the third paragraph, what does the writer say about the incident?",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "The patient suffered lasting harm because of the delay."
            },
            {
              "id": "b",
              "text": "The colleague did not look at the monitor at any point."
            },
            {
              "id": "c",
              "text": "The faulty probe had been replaced shortly before midnight."
            },
            {
              "id": "d",
              "text": "The delay was brief but should never have occurred."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "In the fourth paragraph, the writer argues that asking staff for greater vigilance",
          "answer": "b",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "would work well if it were combined with clearer accountability"
            },
            {
              "id": "b",
              "text": "ignores the conditions in which the problem actually arises"
            },
            {
              "id": "c",
              "text": "is a fair request to make of a tired and stretched workforce"
            },
            {
              "id": "d",
              "text": "has already shortened response times across the whole unit"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "In the fifth paragraph, the writer identifies one cause of unnecessary alarms as",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "monitors too old to be adjusted with any accuracy"
            },
            {
              "id": "b",
              "text": "patients whose heart rates change suddenly during the day"
            },
            {
              "id": "c",
              "text": "limits that stay at standard settings for every patient"
            },
            {
              "id": "d",
              "text": "staff who change probes and electrodes too often"
            }
          ]
        },
        {
          "id": "q7",
          "stem": "In the sixth paragraph, the writer accepts that colleagues are right to worry that",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "a suitable alarm setting may become unsafe as a patient changes"
            },
            {
              "id": "b",
              "text": "tired nurses will refuse to switch off any of the unnecessary alerts"
            },
            {
              "id": "c",
              "text": "reviewing the alarm limits will take nurses away from patients"
            },
            {
              "id": "d",
              "text": "a quieter unit will make staff less attentive to their patients"
            }
          ]
        },
        {
          "id": "q8",
          "stem": "In the final paragraph, the writer suggests that new nurses' sense of urgency",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "is likely to fade whatever changes the unit decides to make"
            },
            {
              "id": "b",
              "text": "has grown since they began attending the morning handover"
            },
            {
              "id": "c",
              "text": "depends mainly on their individual character and training"
            },
            {
              "id": "d",
              "text": "will last only if their working environment continues to support it"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-the-tablet-nobody-remembers-starting",
    "title": "Part C — The tablet nobody remembers starting",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "deprescribing",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The writer expected technical checks but had not expected to find so many medicines that neither the patient nor the record could explain.",
          "evidence": "What I had not expected was how often I would come across a medicine that nobody could explain.",
          "wrong": {
            "a": "The patient in the example took the medicine faithfully.",
            "b": "Adjusting for kidney function was part of the expected technical work, not a surprise.",
            "d": "The writer expected the work to be technical; that was not the surprise."
          }
        },
        "q2": {
          "why": "Stopping needs someone to decide, and successive clinicians reasonably trust that whoever started a tablet had a reason.",
          "evidence": "each of whom reasonably assumes that a colleague had a reason for the tablets already listed",
          "wrong": {
            "a": "The writer says it is not, in most cases, the result of poor prescribing.",
            "c": "Patients' requests are not given as the reason in this paragraph.",
            "d": "A hospital admission is mentioned only as a moment when a medicine may be started."
          }
        },
        "q3": {
          "why": "It was started to protect her stomach while she took another drug, and continued after that drug had been stopped.",
          "evidence": "The original reason had long since gone, yet the protection had continued.",
          "wrong": {
            "a": "The dizziness was thought to be linked to a blood pressure medicine.",
            "b": "It was started for a reason at the time; the reason later disappeared.",
            "c": "No replacement is discussed; the tablet was simply no longer needed."
          }
        },
        "q4": {
          "why": "The writer rejects the idea, stated just before, that stopping medicines is always a good thing in itself.",
          "evidence": "as though stopping medicines were always a good thing in itself. It is not.",
          "wrong": {
            "b": "Careful prescribing is not mentioned before the phrase.",
            "c": "Medicines that look unnecessary come after the phrase, as a reason for it.",
            "d": "The patient's feelings come later in the paragraph."
          }
        },
        "q5": {
          "why": "The writer stresses that stopping carelessly can be as harmful as starting carelessly, giving examples such as sudden withdrawal and lost trust.",
          "evidence": "A careless approach to stopping medicines can do as much harm as a careless approach to starting them.",
          "wrong": {
            "a": "Long-term tablets need explanation before withdrawal, not avoidance of review.",
            "b": "The writer says only that some medicines which look unnecessary may be preventing something serious.",
            "c": "The writer says patients may have strong feelings, not that they usually welcome it."
          }
        },
        "q6": {
          "why": "Her wish to stay steady and keep living at home gave both of them the same goal for deciding what to change.",
          "evidence": "That answer gave us a shared purpose.",
          "wrong": {
            "a": "One medicine was reduced gradually and one stopped, not several at once.",
            "c": "The writer says there was no list of things to cut.",
            "d": "The plan told her when to get in touch, so contact was still expected."
          }
        },
        "q7": {
          "why": "The writer thinks none of the obstacles is insurmountable, but they will remain unless medicine review is seen as real clinical work.",
          "evidence": "I do not think any of these obstacles is insurmountable, but none of them will disappear unless reviewing medicines is treated as proper clinical work",
          "wrong": {
            "a": "Patient reluctance is one obstacle among several, not the main one.",
            "b": "The writer says none will disappear on its own; longer appointments are not predicted.",
            "d": "The writer says the obstacles are not insurmountable."
          }
        },
        "q8": {
          "why": "Although pleased with the outcome, the writer avoids overstating one case and admits things do not always go so smoothly.",
          "evidence": "I do not want to overstate one case, and things do not always go so smoothly.",
          "wrong": {
            "b": "The writer says things do not always go so smoothly.",
            "c": "No disappointment is expressed; she returned some weeks later improved.",
            "d": "The changes were agreed with her GP, as the fifth paragraph says."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "When I first joined a general practice as a clinical pharmacist, one of my tasks was to review the medicines of older patients taking many different tablets. I expected the work to be largely technical: checking for interactions, adjusting for kidney function, spotting duplicates. What I had not expected was how often I would come across a medicine that nobody could explain. It appeared on the repeat list, it was dispensed every month, and the patient took it faithfully, but when I asked why, neither the patient nor the record could tell me. Somewhere along the way, the reason had simply been lost.\n\nThis is not, in most cases, the result of poor prescribing. A medicine is usually started for a sound reason at a particular moment: after a hospital admission, during a difficult winter, when a symptom was troubling. The problem is that starting a medicine is an event, whereas stopping it requires a decision, and decisions need someone to make them. Over the years, a patient may see many clinicians, each of whom reasonably assumes that a colleague had a reason for the tablets already listed. The list grows, and nobody feels entitled to shorten it.\n\nConsider a woman I saw recently, whom I will call Mrs Allen. She was in her eighties and taking more than a dozen medicines. Among them was a tablet for stomach protection that had been started during a hospital stay several years earlier, when she had been given another drug that is no longer on her list. The original reason had long since gone, yet the protection had continued. She also reported feeling dizzy when she stood up, which, after some discussion with her GP, we thought might be linked to one of her blood pressure medicines.\n\nI want to be careful here, because deprescribing is sometimes presented as though stopping medicines were always a good thing in itself. It is not. Some medicines cannot be stopped suddenly without harm, and some that look unnecessary on paper are quietly preventing something serious. A patient may also have strong feelings about a tablet they have taken for years; to them it may represent safety, and withdrawing it without explanation can damage their trust. A careless approach to stopping medicines can do as much harm as a careless approach to starting them.\n\nWhat it requires, instead, is a conversation. With Mrs Allen, I did not arrive with a list of things to cut. I asked what mattered most to her, and she said she wanted to stay steady on her feet so that she could keep living in her own home. That answer gave us a shared purpose. We agreed, with her GP, to reduce one medicine gradually and to stop the stomach tablet, with a plan for what to watch for and when to get in touch. Each change was written down, along with the reason for it, so that the next clinician would not be left guessing.\n\nThe obstacles to doing this more widely are real. Reviews of this kind take time, and appointments are short. Hospital teams may hesitate to stop a medicine started by a colleague in the community, and community clinicians may hesitate to stop one started in hospital. Patients themselves are sometimes reluctant, and there is a lingering sense among some professionals that stopping a medicine is a form of withdrawing care. I do not think any of these obstacles is insurmountable, but none of them will disappear unless reviewing medicines is treated as proper clinical work rather than an administrative tidy-up.\n\nMrs Allen came back to see me some weeks later. The dizziness had eased, she had had no stomach trouble, and she told me, with some satisfaction, that her pill organiser was less crowded. I do not want to overstate one case, and things do not always go so smoothly. But her story illustrates something I now believe firmly: every medicine on a list should have a reason that someone can state, and if no one can, that is not a reason to carry on. It is a reason to start a careful conversation."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, what surprised the writer about reviewing patients' medicines?",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "how many patients had quietly stopped taking their tablets"
            },
            {
              "id": "b",
              "text": "how often kidney function had been left out of account"
            },
            {
              "id": "c",
              "text": "how frequently nobody could give a reason for a medicine"
            },
            {
              "id": "d",
              "text": "how technical the work of checking interactions turned out to be"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, the writer explains that medicines stay on a patient's list because",
          "answer": "b",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "clinicians are usually careless when they first prescribe them"
            },
            {
              "id": "b",
              "text": "each clinician assumes another had good grounds for prescribing them"
            },
            {
              "id": "c",
              "text": "patients generally ask for their repeat prescriptions to continue"
            },
            {
              "id": "d",
              "text": "hospital admissions make it impossible to review older medicines"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "In the third paragraph, the stomach tablet is given as an example of a medicine that",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "was making Mrs Allen feel dizzy whenever she stood up"
            },
            {
              "id": "b",
              "text": "had been prescribed by mistake during a hospital stay"
            },
            {
              "id": "c",
              "text": "needed to be replaced with a more effective alternative"
            },
            {
              "id": "d",
              "text": "had outlasted the circumstances that had once justified it"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "In the fourth paragraph, the word \"It\" in \"It is not.\" refers to",
          "answer": "a",
          "kind": [
            "reference"
          ],
          "options": [
            {
              "id": "a",
              "text": "stopping medicines as always good in itself"
            },
            {
              "id": "b",
              "text": "the practice of prescribing medicines carefully"
            },
            {
              "id": "c",
              "text": "a medicine that looks unnecessary on paper"
            },
            {
              "id": "d",
              "text": "a patient's feeling of safety about a tablet"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "In the fourth paragraph, the writer warns that deprescribing",
          "answer": "d",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "should be avoided for patients who have taken a tablet for years"
            },
            {
              "id": "b",
              "text": "is rarely appropriate for medicines that prevent serious illness"
            },
            {
              "id": "c",
              "text": "is usually welcomed by patients once it has been explained to them"
            },
            {
              "id": "d",
              "text": "can cause harm when it is approached without enough care"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "In the fifth paragraph, asking Mrs Allen what mattered most to her helped because it",
          "answer": "b",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "allowed the writer to remove several medicines at one time"
            },
            {
              "id": "b",
              "text": "gave the writer and Mrs Allen a common aim for change"
            },
            {
              "id": "c",
              "text": "persuaded her GP to accept the writer's original list of cuts"
            },
            {
              "id": "d",
              "text": "meant that she no longer needed to contact the practice"
            }
          ]
        },
        {
          "id": "q7",
          "stem": "In the sixth paragraph, the writer believes the obstacles to wider deprescribing",
          "answer": "c",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "are caused mainly by patients' unwillingness to change"
            },
            {
              "id": "b",
              "text": "will resolve themselves as appointments become longer"
            },
            {
              "id": "c",
              "text": "can be overcome if reviewing medicines is valued as clinical work"
            },
            {
              "id": "d",
              "text": "are too deeply rooted in professional culture to be removed"
            }
          ]
        },
        {
          "id": "q8",
          "stem": "In the final paragraph, the writer's attitude to Mrs Allen's case is",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "cautious about how far the case can be generalised"
            },
            {
              "id": "b",
              "text": "confident that it proves deprescribing always succeeds"
            },
            {
              "id": "c",
              "text": "disappointed that her improvement took so many weeks"
            },
            {
              "id": "d",
              "text": "concerned that her GP had not been properly involved"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-two-words-in-the-notes",
    "title": "Part C — Two words in the notes",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "patient-engagement-labels",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The writer compares the phrase to recording the weather and calls it a neutral observation, so it seemed an ordinary factual note.",
          "evidence": "For years I treated it as a neutral observation, the clinical equivalent of recording the weather.",
          "wrong": {
            "b": "Nothing suggests the phrase prompted urgent review; it ended the entry.",
            "c": "The writer only suspects colleagues use it too, not that they use it more.",
            "d": "The writer admits writing it often, so it was not avoided."
          }
        },
        "q2": {
          "why": "Staff read the label before meeting him, so they came to the bedside anticipating a refusal.",
          "evidence": "Each new member of staff read it before meeting him and arrived at his bedside half expecting a refusal",
          "wrong": {
            "a": "His fear was discovered by a student nurse, not reported by family.",
            "b": "The staff read the notes; the problem was what the notes said.",
            "d": "Time pressure is raised later, in the fourth paragraph, not here."
          }
        },
        "q3": {
          "why": "The previous sentence lists what was offered, when, how and in which language; those missing details are what disappears.",
          "evidence": "we rarely write down what we offered, at what time, in what manner or in which language",
          "wrong": {
            "a": "The patient's reasons are not what the sentence lists as unrecorded.",
            "c": "The writer rejects the idea of engagement as a personal quality.",
            "d": "The next reader's judgement is what becomes impossible, not what disappears."
          }
        },
        "q4": {
          "why": "The writer concedes that wards are short of staff and that a quick note is sometimes all that can be managed.",
          "evidence": "Shifts are short of staff, and a quick note is sometimes all that can be managed before the next call.",
          "wrong": {
            "a": "The writer says recording refusals is essential, with no long discussion required.",
            "b": "The writer says some patients decline with full understanding.",
            "c": "The writer defends colleagues and admits using the phrase on busy days."
          }
        },
        "q5": {
          "why": "The writer says the refusal belongs to the patient, while the label is a judgement belonging to staff.",
          "evidence": "A refusal is a decision that belongs to the patient: it can be discussed, respected and revisited. \"Not engaging\" is a judgement that belongs to us",
          "wrong": {
            "a": "No distinction is drawn between professions.",
            "c": "The opposite: a refusal can be revisited, while the label outlives its moment.",
            "d": "It is the label that is copied into referral letters."
          }
        },
        "q6": {
          "why": "The writer lists four things now written down: the offer, the response, what got in the way and the next step.",
          "evidence": "I write what was offered, how the patient responded, what might have got in the way and what we intend to try next",
          "wrong": {
            "b": "The writer records more than the patient's words, including the plan.",
            "c": "Staff names are not mentioned as part of the record.",
            "d": "Discharge is mentioned in the fifth paragraph, about the label spreading."
          }
        },
        "q7": {
          "why": "The writer says the changes needed no extra staff, only curiosity at the right moment, so asking led to simple fixes.",
          "evidence": "None of this required extra staff, only a little curiosity applied at the right moment.",
          "wrong": {
            "a": "His daughter was present, but she is not compared with staff.",
            "b": "Only the timing changed, not the prescription itself.",
            "c": "The writer says that no extra staff were needed."
          }
        },
        "q8": {
          "why": "The writer wants the phrase to open a question rather than end an entry, so it should lead to further enquiry.",
          "evidence": "I am asking that we treat \"not engaging\" as the opening of a question rather than the end of an entry",
          "wrong": {
            "a": "The writer says plainly that banning or replacing the words is not the aim.",
            "b": "Mr Reid's final entry is an example, not an instruction to delete.",
            "d": "The writer asks for good description, not one fixed way of recording."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "There is a phrase I have written in patients' notes more often than I would like to admit, and I suspect many colleagues have too: \"not engaging\". It sits tidily at the end of an entry, a full stop after a conversation that went nowhere. For years I treated it as a neutral observation, the clinical equivalent of recording the weather. I had offered the leaflet, explained the exercises and asked whether there were any questions, and I had received a shrug or a face turned to the wall. What else was there to write? It was only when I saw those two words in my own handwriting, about a man I had come to know well, that I began to wonder what they actually described.\n\nMr Reid was in his eighties and recovering from surgery after a fall. For most of his first week, the physiotherapy entries said the same thing: declined to mobilise, not engaging. By the time I joined his care, the phrase had travelled further than he had. Each new member of staff read it before meeting him and arrived at his bedside half expecting a refusal, which is a poor way to begin any conversation. It took a student nurse, who had not yet read the notes, to discover that his sessions were booked for the hour when his pain was at its worst, that his hearing aid batteries had run flat, and that he was terrified of falling again.\n\nNone of those things was hidden. They were simply never asked about, because the label had already provided an explanation. That is my central worry about the phrase. It places the whole difficulty inside the patient, as if engagement were a personal quality that some people possess and others lack. In reality, engagement is something that happens, or fails to happen, between people. Yet when we write that a patient is not engaging, we rarely write down what we offered, at what time, in what manner or in which language. This is the part of the story that disappears, and without it the next reader cannot judge whether the patient refused care or whether the care was never truly within reach.\n\nI should be fair to the phrase, and to the colleagues who use it. Some patients do decline what we offer, clearly and with full understanding, and they are entitled to do so. Recording that is not only acceptable but essential; I would be alarmed if this article persuaded anyone to stop documenting refusals. Nor do I pretend that every nurse or therapist has time for a long, patient exploration with every person on a busy ward. Shifts are short of staff, and a quick note is sometimes all that can be managed before the next call. I recognise that pressure because I work under it too, and I have written the phrase on exactly those days.\n\nBut a refusal and a label are different things. A refusal is a decision that belongs to the patient: it can be discussed, respected and revisited. \"Not engaging\" is a judgement that belongs to us, and it has a habit of outliving the moment that produced it. I have seen it copied into discharge summaries, repeated in referral letters and quoted back at the start of a later admission, by which time nobody can remember what it first referred to. A patient who has been described in this way may be offered less, or offered it with less conviction, and the description quietly comes true.\n\nWhat I try to do now is modest. When an offer is not taken up, I write what was offered, how the patient responded, what might have got in the way and what we intend to try next. I also ask the patient directly what would make things easier, a question that sounds obvious but that I had seldom put into words. The answers are often practical. For Mr Reid, it meant asking for his regular pain relief to be given before physiotherapy rather than after it, fetching new batteries and letting his daughter be present for the first attempt. None of this required extra staff, only a little curiosity applied at the right moment.\n\nI am not calling for the phrase to be banned. Banning words tends only to produce new ones that do the same work less honestly. I am asking that we treat \"not engaging\" as the opening of a question rather than the end of an entry, and that we hold ourselves to the same standard of description that we would expect for any other clinical finding. Mr Reid left the ward walking with a frame. When I last looked, the final entry in his notes said nothing about engagement at all; it simply recorded how far he had walked that morning, and with whom."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, the writer says that for many years the phrase \"not engaging\" seemed",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "a plain factual record that needed no further thought"
            },
            {
              "id": "b",
              "text": "a warning sign that the patient needed an urgent review"
            },
            {
              "id": "c",
              "text": "a phrase that colleagues used far more often than the writer"
            },
            {
              "id": "d",
              "text": "an unkind remark the writer generally avoided in written notes"
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, what does the writer suggest about the staff who met Mr Reid?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They had been told by his family that he was frightened."
            },
            {
              "id": "b",
              "text": "They found his notes difficult to read and understand."
            },
            {
              "id": "c",
              "text": "They approached him already expecting him to say no."
            },
            {
              "id": "d",
              "text": "They had too little time to begin his physiotherapy."
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q3",
          "stem": "In the third paragraph, the word \"This\" (in \"This is the part of the story that disappears\") refers to",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the patient's own reasons for refusing care"
            },
            {
              "id": "b",
              "text": "the details of what was offered and how"
            },
            {
              "id": "c",
              "text": "the personal quality of being engaged"
            },
            {
              "id": "d",
              "text": "the next reader's judgement of the patient"
            }
          ],
          "kind": [
            "reference"
          ]
        },
        {
          "id": "q4",
          "stem": "In the fourth paragraph, the writer accepts that",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "a refusal should only be recorded after a long discussion"
            },
            {
              "id": "b",
              "text": "most patients who decline care do not fully understand it"
            },
            {
              "id": "c",
              "text": "colleagues who use the phrase are usually being careless"
            },
            {
              "id": "d",
              "text": "staffing pressures sometimes leave room for only a brief note"
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q5",
          "stem": "In the fifth paragraph, the writer argues that a refusal differs from the label because",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "a refusal is recorded only by doctors, and the label by nurses"
            },
            {
              "id": "b",
              "text": "a refusal is the patient's choice, while the label is staff opinion"
            },
            {
              "id": "c",
              "text": "a refusal cannot be changed, while the label can easily be removed"
            },
            {
              "id": "d",
              "text": "a refusal appears in referral letters, while the label stays on the ward"
            }
          ],
          "kind": [
            "paragraph",
            "writer"
          ]
        },
        {
          "id": "q6",
          "stem": "According to the sixth paragraph, when a patient does not take up an offer, the writer now records",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "what was offered, the response, possible obstacles and the next plan"
            },
            {
              "id": "b",
              "text": "only the patient's exact words, so that later readers can decide"
            },
            {
              "id": "c",
              "text": "the name of every member of staff who was present at the time"
            },
            {
              "id": "d",
              "text": "whether the patient has been told about the effect on discharge"
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q7",
          "stem": "In the sixth paragraph, the changes made for Mr Reid are used to show that",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "his daughter was better at encouraging him than the staff were"
            },
            {
              "id": "b",
              "text": "his pain relief had been prescribed incorrectly from the start"
            },
            {
              "id": "c",
              "text": "the ward needed extra physiotherapy staff to support him"
            },
            {
              "id": "d",
              "text": "small practical steps can follow from simply asking questions"
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q8",
          "stem": "In the final paragraph, the writer's main recommendation is that staff should",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "stop using the phrase and choose a more accurate word"
            },
            {
              "id": "b",
              "text": "remove the phrase from notes once a patient improves"
            },
            {
              "id": "c",
              "text": "treat the phrase as the start of further enquiry"
            },
            {
              "id": "d",
              "text": "record engagement in the same way at every admission"
            }
          ],
          "kind": [
            "paragraph",
            "writer"
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-whatever-helps-you-love",
    "title": "Part C — Whatever helps you, love",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "STRETCH",
    "topicTag": "bedside-research-consent",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The writer realised Mrs Haddad had agreed because she liked the nurse, not because she had chosen the study.",
          "evidence": "She had not agreed to the study. She had agreed to me, a nurse she liked",
          "wrong": {
            "a": "The writer says the paperwork was complete.",
            "b": "She never asked to withdraw; in the sixth paragraph she chose to stay in.",
            "d": "The writer says nothing wrong was done by the usual standards."
          }
        },
        "q2": {
          "why": "The writer says asking patients at the bedside is part of how medicine improves and nurses should be proud of it.",
          "evidence": "Asking patients at the bedside is part of how medicine improves, and I believe nurses should be proud to do it.",
          "wrong": {
            "b": "The writer says nurses, not only doctors, should be proud to ask.",
            "c": "No restriction to patients going home is suggested.",
            "d": "Projects with sound questions fail because recruitment falters, not because of poor design."
          }
        },
        "q3": {
          "why": "The writer says staff rarely intend pressure, but a patient can still feel it.",
          "evidence": "But pressure does not need to be intended to be felt",
          "wrong": {
            "a": "The writer says it is rarely deliberate and staff would be horrified.",
            "b": "Families are mentioned only in the fifth paragraph, as possible helpers.",
            "c": "Pain relief is one of the patient's dependencies, not a solution to pressure."
          }
        },
        "q4": {
          "why": "The pronoun points back to the colleagues' conclusion that acutely unwell patients should not be approached.",
          "evidence": "Some colleagues conclude from this that acutely unwell patients should not be approached at all.",
          "wrong": {
            "a": "The writer's concern is that the sickest are excluded, not that only they are asked.",
            "c": "Explaining a study is discussed in the fifth paragraph.",
            "d": "Helplessness is what patients felt, not what the pronoun refers to."
          }
        },
        "q5": {
          "why": "If the sickest are left out, research describes those well enough to be invited rather than those who most need answers.",
          "evidence": "research ends up describing those who were well enough to be invited, rather than those who most need the answers",
          "wrong": {
            "a": "Slower recruitment is not the problem named here.",
            "b": "Families are not mentioned in this paragraph.",
            "c": "The number of patients for research nurses is not discussed."
          }
        },
        "q6": {
          "why": "The information sheet is left with the patient and someone comes back later, so there is time to think.",
          "evidence": "The information sheet is left with the patient rather than signed on the spot, and someone returns later",
          "wrong": {
            "a": "The opposite: forms are not signed on the spot.",
            "b": "Family involvement is optional, only if the family wishes.",
            "d": "The first approach is made by a research nurse, not the caring nurse."
          }
        },
        "q7": {
          "why": "Her new questions showed real understanding, and the writer was confident the decision was finally hers.",
          "evidence": "because I was finally confident that the decision was hers",
          "wrong": {
            "b": "Blood tests were one of her questions, not something she agreed to.",
            "c": "She asked whether her consultant would know; no agreement is mentioned.",
            "d": "The text says she signed nothing new."
          }
        },
        "q8": {
          "why": "The writer prefers to count whether each participant could explain, in their own words, why they chose to join.",
          "evidence": "whether each person who joined a study could explain, in their own words, why they had chosen to do so",
          "wrong": {
            "a": "The writer warns against measuring success purely by numbers.",
            "c": "Speed is not offered as a measure; the quick yes is criticised.",
            "d": "Withdrawal rates are not mentioned as a measure."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "On her second morning after surgery, Mrs Haddad signed the consent form for a study I was helping to recruit for before I had finished explaining it. \"Whatever helps you, love,\" she said, and handed back the pen. I remember feeling pleased, and then, on the walk back to the nurses' station, uneasy. She had not agreed to the study. She had agreed to me, a nurse she liked, who had brought her tea and helped her wash the evening before. I had done nothing wrong by the usual standards, and the paperwork was complete. Yet I could not shake the sense that something important had been missed in the exchange.\n\nI want to be clear about where I stand, because what follows could be mistaken for an argument against research on the ward. It is not. Studies that would improve the care of people like Mrs Haddad cannot be completed without people like Mrs Haddad agreeing to take part, and the ward is where most of the patients who could join them actually are. Projects with sound questions are abandoned when recruitment falters, and the patients who would have benefited never hear about what might have been learned. Asking patients at the bedside is part of how medicine improves, and I believe nurses should be proud to do it.\n\nThe difficulty lies in the bedside itself. A patient lying in a gown, dependent on staff for pain relief, meals and help to the bathroom, is not in an equal conversation with the person standing over them. When the same nurse who brings their medicines asks them a favour, saying no can feel ungracious or even risky. This is rarely pressure in any deliberate sense; most of us would be horrified to think we were leaning on anyone. But pressure does not need to be intended to be felt, and a patient who wants to stay on good terms with the people caring for them may say yes for reasons that have nothing to do with the study.\n\nSome colleagues conclude from this that acutely unwell patients should not be approached at all. I understand the instinct, but I think it leads to a different wrong. It means deciding on patients' behalf that they are incapable of making a choice, which is precisely the kind of decision that consent is supposed to prevent. Many patients have told me they were glad to be asked, and that being treated as someone who could still contribute mattered to them at a time when they felt otherwise helpless. Excluding the sickest people also means that research ends up describing those who were well enough to be invited, rather than those who most need the answers.\n\nSo the question is not whether to ask but how. Where possible, the person who invites a patient should not be the one providing their care that shift; on our ward, a research nurse now makes the first approach. The information sheet is left with the patient rather than signed on the spot, and someone returns later, after visiting time if the family wishes to be involved. We say, in plain words, that declining will make no difference to the care they receive. And before any form is signed, we ask patients to tell us in their own words what the study involves and what they would be agreeing to.\n\nI went back to Mrs Haddad the following afternoon. I told her that she was free to withdraw, that nobody would think less of her, and that I wanted to go through the study again properly. This time she asked questions she had not thought of before: whether she would need extra blood tests, whether her own consultant would know, what would happen to her information afterwards. She decided to stay in the study. She signed nothing new, but it meant more to me than the first signature had, because I was finally confident that the decision was hers.\n\nConsent is often described as a form, but the form is only the record of a conversation, and it can only be as good as that conversation was. If we measure our success in recruitment purely by numbers, we will keep rewarding the quick yes at the bedside and overlooking the patient who agreed in order to please. I would rather we counted something harder to measure: whether each person who joined a study could explain, in their own words, why they had chosen to do so. That, in my view, is a standard worth recruiting to."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, why did the writer feel uneasy after Mrs Haddad signed the form?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "The paperwork for the study had been left incomplete."
            },
            {
              "id": "b",
              "text": "Mrs Haddad had asked straight away to withdraw from the study."
            },
            {
              "id": "c",
              "text": "Mrs Haddad seemed to be agreeing out of goodwill to the writer."
            },
            {
              "id": "d",
              "text": "The writer had broken the usual rules for recruiting patients."
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, the writer's view of recruiting patients on the ward is that it",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "is a worthwhile part of improving care that nurses should value"
            },
            {
              "id": "b",
              "text": "should be left to doctors who lead the research projects"
            },
            {
              "id": "c",
              "text": "is acceptable only for patients who are about to go home"
            },
            {
              "id": "d",
              "text": "often fails because the research questions behind it are poorly designed"
            }
          ],
          "kind": [
            "paragraph",
            "writer"
          ]
        },
        {
          "id": "q3",
          "stem": "In the third paragraph, the writer suggests that pressure on patients at the bedside",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "is usually applied on purpose by staff who want results"
            },
            {
              "id": "b",
              "text": "comes mainly from the families who visit the patient"
            },
            {
              "id": "c",
              "text": "disappears once the patient's pain is properly controlled"
            },
            {
              "id": "d",
              "text": "can be experienced even when nobody means to apply it"
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q4",
          "stem": "In the fourth paragraph, the word \"It\" (in \"It means deciding on patients' behalf\") refers to",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the habit of asking only the most unwell patients"
            },
            {
              "id": "b",
              "text": "the view that very unwell patients should never be asked"
            },
            {
              "id": "c",
              "text": "the process of explaining a study to a patient"
            },
            {
              "id": "d",
              "text": "the feeling of being helpless while in hospital"
            }
          ],
          "kind": [
            "reference"
          ]
        },
        {
          "id": "q5",
          "stem": "In the fourth paragraph, what problem does the writer see in excluding the sickest patients?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "Recruitment targets would take much longer to reach."
            },
            {
              "id": "b",
              "text": "Their families would complain about not being consulted."
            },
            {
              "id": "c",
              "text": "Research nurses would have fewer patients to approach."
            },
            {
              "id": "d",
              "text": "Findings would reflect patients who were less unwell."
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q6",
          "stem": "According to the fifth paragraph, on the writer's ward patients are now",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "asked to sign the form while the nurse is still present"
            },
            {
              "id": "b",
              "text": "approached only when a relative is there to support them"
            },
            {
              "id": "c",
              "text": "given time with the information before anyone returns"
            },
            {
              "id": "d",
              "text": "invited to join by the nurse caring for them that shift"
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q7",
          "stem": "In the sixth paragraph, the writer says the second conversation with Mrs Haddad mattered because",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "she now understood the study well enough to make her own choice"
            },
            {
              "id": "b",
              "text": "she agreed to give extra blood samples for the research team"
            },
            {
              "id": "c",
              "text": "her consultant had finally agreed that she could take part"
            },
            {
              "id": "d",
              "text": "she chose to sign a new form with more detailed information"
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q8",
          "stem": "In the final paragraph, the writer believes that success in recruitment should be judged by",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the total number of patients who agree to join studies each month"
            },
            {
              "id": "b",
              "text": "whether participants can explain their own reasons for joining"
            },
            {
              "id": "c",
              "text": "how quickly a study reaches the patients it needs"
            },
            {
              "id": "d",
              "text": "how few patients later decide to withdraw from a study"
            }
          ],
          "kind": [
            "paragraph",
            "writer"
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-the-list-at-four-o-clock",
    "title": "Part C — The list at four o'clock",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "rationing-moral-strain",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Although others take part, it is the writer who telephones the department to say which patient comes up.",
          "evidence": "I am the one who makes the telephone call that tells the department which",
          "wrong": {
            "a": "The writer decides with the doctors and site team, not leaving it to doctors.",
            "c": "The writer uses tools but says a person still makes the choice.",
            "d": "No review the next morning is mentioned."
          }
        },
        "q2": {
          "why": "The writer says the belief that tools or shortage decided was comforting but untrue.",
          "evidence": "That way of thinking was comforting, and it was also untrue.",
          "wrong": {
            "a": "Families are mentioned as needs to weigh, not as people decisions are explained to.",
            "b": "Only the writer's own belief is described.",
            "c": "The tools are still in use; nothing says they were replaced."
          }
        },
        "q3": {
          "why": "The phrase points back to details such as a husband with dementia at home or a night on a trolley, which the tools cannot show.",
          "evidence": "the tools cannot tell me that one of them has a husband with dementia waiting alone at home",
          "wrong": {
            "b": "The scores are similar; the point is what lies beyond them.",
            "c": "The shortage is part of the earlier excuse, not what is weighed.",
            "d": "Passing on results was the writer's old self-description."
          }
        },
        "q4": {
          "why": "The writer says what unites them is carrying a public problem as a private failure.",
          "evidence": "What they share is the sense of carrying, as a private failure, a problem that is not private at all.",
          "wrong": {
            "a": "Only some become brisk; others react differently.",
            "b": "Only a few leave, according to the writer.",
            "d": "The writer, not colleagues, prefers ordinary words to the technical name."
          }
        },
        "q5": {
          "why": "The writer concedes that criteria protect patients from inconsistency and staff from charges of favouritism.",
          "evidence": "They protect patients from inconsistency and staff from the charge of favouritism",
          "wrong": {
            "b": "The fifth paragraph says protocols only hide the moral weight.",
            "c": "The writer links calm to experienced bed managers, not new staff.",
            "d": "No such rule about overriding clinical judgement is stated."
          }
        },
        "q6": {
          "why": "When a choice is called technical, the decision-maker loses permission to find it hard and the strain goes underground.",
          "evidence": "the person who makes it is left without permission to find it hard, and the difficulty goes underground",
          "wrong": {
            "a": "Healthy distance is the fourth paragraph's concession, not the effect described here.",
            "c": "Fairness is not claimed for the technical framing here.",
            "d": "The writer wants values admitted alongside scores, not replacing them."
          }
        },
        "q7": {
          "why": "Staff can bring a case still on their mind, and the aim is to talk it through, not to judge it.",
          "evidence": "anyone who has been involved can bring a case they are still thinking about to a short meeting",
          "wrong": {
            "a": "The aim is explicitly not to judge the decision.",
            "b": "What goes upwards is the shortage pattern, not named nurses.",
            "d": "The meeting looks back at cases, not forward at admissions."
          }
        },
        "q8": {
          "why": "The writer says the difference of deciding in company may allow good nurses to keep making these decisions for years.",
          "evidence": "It may be what allows good nurses to keep making these decisions for years",
          "wrong": {
            "a": "The writer says the list will still be too long.",
            "b": "The writer says the difference is not a luxury.",
            "c": "The writer does not rank it below beds; it is a separate need."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "At about four o'clock on most afternoons, I am handed a list. It contains the names of patients waiting in the emergency department for a bed on the medical unit I help to run, and it is almost always longer than the number of beds I can offer. My task is to decide, with the doctors and the site team, who comes up first. There are tools to help with this, and I use them. But at the end of the conversation a person's name moves up the list and another's does not, and I am the one who makes the telephone call that tells the department which. Behind each name is a person on a trolley, a relative in a plastic chair and a nurse downstairs who has been caring for them for hours.\n\nFor a long time I told myself that these were not really choices. The scoring systems decided, or the clinical picture decided, or the shortage decided; I merely passed on the result. That way of thinking was comforting, and it was also untrue. Two patients with similar scores can have very different needs, and the tools cannot tell me that one of them has a husband with dementia waiting alone at home, or that another has already spent a night on a trolley. Somebody has to weigh those things, and on most afternoons that somebody is me. Calling the outcome inevitable did not make it any less mine; it only made it harder to talk about.\n\nThe strain this produces has a name in the literature on ethics, but I find the ordinary words more accurate. It is the feeling of knowing what a patient ought to have and being unable to give it, then going home and replaying the decision in the car. It is not the same as being tired, although tiredness makes it worse. Colleagues describe it in different ways: some become brisk and guarded, some find it hard to look at the list at all, and a few simply leave. What they share is the sense of carrying, as a private failure, a problem that is not private at all.\n\nI can already hear one objection, because I have made it myself. Surely the answer is better protocols and less emotion? Clear criteria do matter. They protect patients from inconsistency and staff from the charge of favouritism, and I would not want to work without them. A nurse who agonised equally over every decision would soon be unable to make any. Some distance is necessary in order to keep functioning, and the most experienced bed managers I know are calm precisely because they have learned where that distance should lie.\n\nBut a protocol cannot remove the moral weight of a decision; it can only hide it. When a choice is presented as purely technical, the person who makes it is left without permission to find it hard, and the difficulty goes underground. It reappears as sickness, as cynicism, as people who stop caring because caring has become too expensive. I would rather we admitted openly that rationing involves values as well as scores, and then built ways to share the load instead of pretending that there is none to carry.\n\nOn our unit we have made a few small changes. Decisions about the list are now made by at least two people together, rather than by whoever happens to hold the telephone. Once a week, anyone who has been involved can bring a case they are still thinking about to a short meeting, where the aim is not to judge the decision but to talk it through. And when the shortage itself is the problem, we write that down and send it upwards, so that the organisation sees the pattern rather than a series of individual nurses quietly coping. None of these changes was expensive, and none of them took more than a few minutes of anyone's shift.\n\nNone of this creates a single extra bed. The list will still arrive at four o'clock, and it will still be too long. But there is a difference between a hard decision made alone and the same decision made in company, by people who are allowed to say that it was hard. I have come to believe that this difference is not a luxury. It may be what allows good nurses to keep making these decisions for years, rather than leaving because they have mistaken a shortage of beds for a shortage in themselves."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, the writer explains that the final decision about the list",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "is made entirely by the doctors in the emergency department"
            },
            {
              "id": "b",
              "text": "is passed on to the department by the writer personally"
            },
            {
              "id": "c",
              "text": "depends only on the scoring tools that the unit uses"
            },
            {
              "id": "d",
              "text": "is reviewed by the site team on the following morning"
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, the writer admits that the earlier belief about these choices was",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "useful for explaining decisions to patients' families"
            },
            {
              "id": "b",
              "text": "shared by the doctors and the site team at the time"
            },
            {
              "id": "c",
              "text": "based on scoring tools that were later replaced"
            },
            {
              "id": "d",
              "text": "reassuring to hold but not actually correct"
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q3",
          "stem": "In the second paragraph, the phrase \"those things\" refers to",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "personal circumstances that scoring tools cannot show"
            },
            {
              "id": "b",
              "text": "the scores that two similar patients have been given"
            },
            {
              "id": "c",
              "text": "the shortage of beds on the medical unit that day"
            },
            {
              "id": "d",
              "text": "the results that the writer passes on to the emergency department"
            }
          ],
          "kind": [
            "reference"
          ]
        },
        {
          "id": "q4",
          "stem": "In the third paragraph, what do colleagues who feel this strain have in common?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They all become brisk and guarded with their patients."
            },
            {
              "id": "b",
              "text": "They mostly decide to leave the unit before long."
            },
            {
              "id": "c",
              "text": "They treat a shared problem as though it were their own fault."
            },
            {
              "id": "d",
              "text": "They prefer the technical words used in the ethics literature."
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q5",
          "stem": "In the fourth paragraph, the writer accepts that clear criteria",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "help keep decisions consistent and protect staff from accusations"
            },
            {
              "id": "b",
              "text": "make the emotional strain of rationing disappear in time"
            },
            {
              "id": "c",
              "text": "are mainly useful for staff who are new to the role"
            },
            {
              "id": "d",
              "text": "should be followed even when they conflict with clinical judgement"
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q6",
          "stem": "In the fifth paragraph, the writer argues that presenting rationing as purely technical",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "helps staff to keep a healthy distance from their patients"
            },
            {
              "id": "b",
              "text": "leaves staff unable to admit that the decisions are difficult"
            },
            {
              "id": "c",
              "text": "is fair to patients because it treats everyone the same way"
            },
            {
              "id": "d",
              "text": "should be replaced by decisions based mainly on personal values"
            }
          ],
          "kind": [
            "paragraph",
            "writer"
          ]
        },
        {
          "id": "q7",
          "stem": "According to the sixth paragraph, the purpose of the weekly meeting is to",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "decide whether a past decision about the list was correct"
            },
            {
              "id": "b",
              "text": "report individual nurses who are struggling to cope"
            },
            {
              "id": "c",
              "text": "allow staff to discuss a case that still troubles them"
            },
            {
              "id": "d",
              "text": "plan which patients will be admitted the following week"
            }
          ],
          "kind": [
            "paragraph"
          ]
        },
        {
          "id": "q8",
          "stem": "In the final paragraph, the writer suggests that sharing these decisions",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "will eventually reduce the number of patients on the list"
            },
            {
              "id": "b",
              "text": "is a pleasant extra that units can offer when time allows"
            },
            {
              "id": "c",
              "text": "matters less than providing more beds on the medical unit"
            },
            {
              "id": "d",
              "text": "may help good nurses to keep doing this work for longer"
            }
          ],
          "kind": [
            "paragraph",
            "writer"
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-a-voice-without-a-face",
    "title": "Part C — A voice without a face",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "telephone-bad-news",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The writer had followed the rule against telephone news for years, and that night caused the writer to doubt the rule, not merely the instinct behind it.",
          "evidence": "Yet one night on a medical ward made me doubt the rule itself.",
          "wrong": {
            "b": "The opposite: the night made the writer doubt the rule, although the instinct behind it still seems sound.",
            "c": "The paragraph says nothing about this being the first time or about working alone.",
            "d": "She understood correctly that she was being kept from the truth; she had been managed, not misinformed."
          }
        },
        "q2": {
          "why": "The writer argues that relatives who have not been told are not calmly waiting; they are guessing, and what they imagine alone may be worse than the truth.",
          "evidence": "They are guessing, and their guesses, alone in a car or a kitchen, may be far darker and lonelier than anything a clinician would say.",
          "wrong": {
            "a": "Seniority of the speaker is not discussed in this paragraph.",
            "b": "The drive was the worst part emotionally, because of not knowing; physical danger is not the point.",
            "d": "The writer did know the answer but chose not to give it by phone."
          }
        },
        "q3": {
          "why": "The phrase sums up what is lost on the phone: seeing the face, noticing who is present, and being able to read a silence.",
          "evidence": "you cannot see whether the person has gone pale, whether someone is beside them, whether they have stopped listening",
          "wrong": {
            "a": "Stopping listening is one thing the caller cannot see; the losses are the caller's missing view, not the relatives.",
            "c": "A dropped call is only one possible meaning of an ambiguous silence.",
            "d": "Deaths before relatives arrive are not mentioned in this paragraph."
          }
        },
        "q4": {
          "why": "The writer suspects that such insistence can hold difficult information at a distance, and that this is sometimes more convenient for staff than helpful to families.",
          "evidence": "I suspect that, at times, this suits us more than it suits them",
          "wrong": {
            "a": "Accuracy of information is not the issue raised; the issue is whose needs the meeting serves.",
            "b": "The opposite: many relatives say they would rather hear the truth by phone tonight.",
            "c": "The meeting gives the clinician time to prepare, not the family."
          }
        },
        "q5": {
          "why": "The writer first confirms the person's identity and that the patient has agreed they may be told, then checks the timing and that they are in a safe place to talk.",
          "evidence": "I confirm who I am speaking to and that they are someone the patient has agreed may be told. I ask whether this is a good moment and whether they are somewhere they can talk",
          "wrong": {
            "a": "This paragraph is about giving the news on the call itself, not inviting the relative in.",
            "c": "The writer gives a warning and then says the key point plainly; no full history is given first.",
            "d": "No second colleague on the call is mentioned."
          }
        },
        "q6": {
          "why": "The record of what was said, to whom, and what was promised lets the next colleague avoid contradicting the earlier conversation without realising it.",
          "evidence": "so that the next colleague does not unknowingly contradict me",
          "wrong": {
            "b": "The notes are for colleagues; sending anything to the family is not mentioned.",
            "c": "Self-review is not given as a reason for the record.",
            "d": "Managers and policy checks are not mentioned."
          }
        },
        "q7": {
          "why": "The writer keeps the meeting room where it is possible and wanted, but asks colleagues to see the telephone as a hard route that deserves teaching and practice.",
          "evidence": "start treating it as a demanding one, worth teaching and practising",
          "wrong": {
            "a": "Distance is not used as the rule; the test is harmful delay and the family's wishes.",
            "b": "The writer says face-to-face remains the better choice where possible.",
            "c": "Too strong: the writer wants decisions made with families, not left wholly to them."
          }
        },
        "q8": {
          "why": "The writer says families can tell being spared from being shut out, and the clinician's task is to avoid the second, whatever the medium.",
          "evidence": "Most families, in my experience, can tell the difference between being spared and being shut out.",
          "wrong": {
            "a": "The opposite: families can tell the difference in how they are treated.",
            "b": "Too strong: being spared is not condemned; being shut out is.",
            "d": "The writer says \"whatever the medium\", so the problem is not the telephone itself."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "When I was a junior doctor, I was taught a rule that sounded like wisdom: bad news is never given over the telephone. You invite the family in, you find a quiet room, you sit down, and you say it face to face. I followed that rule for years, and I still believe the instinct behind it is sound. Yet one night on a medical ward made me doubt the rule itself. A woman whose father was deteriorating rang to ask how he was. I told her, carefully and truthfully, that she should come in. She asked me directly whether he was dying. I hesitated, said it would be better to talk in person, and she drove through the dark believing she had been lied to.\n\nShe had not been lied to, of course, but she had been managed, and she knew it. When she arrived, she told me that the drive had been the worst part of the whole night, worse than what came after. I have thought about that remark many times since. The rule against telephone news assumes that delay is neutral, that a family who does not yet know is simply waiting. Often they are not waiting at all. They are guessing, and their guesses, alone in a car or a kitchen, may be far darker and lonelier than anything a clinician would say. Protecting someone from a hard sentence can leave them with something harder.\n\nNone of this means the telephone is as good as a conversation in a room. It is not, and I would be suspicious of anyone who claimed otherwise. On the phone you lose the face in front of you: you cannot see whether the person has gone pale, whether someone is beside them, whether they have stopped listening. Silence, which in a room can be companionable, becomes ambiguous on a line. Has the call dropped? Are they crying? Do they want you to go on? These losses are real, and they are the reason the old rule was written. My argument is not that the rule was foolish, but that it was written as if the alternative were always available.\n\nIncreasingly it is not. Relatives live far away, work shifts, care for children or are unwell themselves. Some cannot come in before the situation changes again. For them, an insistence on a face-to-face meeting can quietly become a way of keeping difficult information at arm's length, and I suspect that, at times, this suits us more than it suits them. A meeting gives the clinician time to prepare and a setting that feels controlled. That is not nothing, but it should not be confused with kindness to the family. When I ask relatives now, many tell me they would rather hear the truth from a calm voice tonight than be summoned and left to wonder.\n\nIf we are going to give difficult news by telephone, then we owe it to families to do it well, and doing it well is a skill rather than a matter of temperament. Before I say anything of substance, I confirm who I am speaking to and that they are someone the patient has agreed may be told. I ask whether this is a good moment and whether they are somewhere they can talk; if they are driving, I ask them to stop safely or to call me back. I give a gentle warning that I have something serious to share. Then I say the important thing plainly, in ordinary words, and I stop.\n\nStopping is the hardest part. On the telephone, the urge to fill the silence is overwhelming, because silence feels like failure. I have learnt to wait, longer than feels comfortable, and to say, after a while, something as simple as \"I'm still here.\" Only then do I offer information about what happens next: when they can visit, who they will meet and what they might want to ask. Before the call ends, I check whether anyone is with them, and I agree when we will speak again. Afterwards I write in the notes what was said, to whom, and what was promised, so that the next colleague does not unknowingly contradict me.\n\nI am not asking colleagues to abandon the meeting room. Where a family can come in without harmful delay, and wants to, a face-to-face conversation remains the better choice, and nothing I have described replaces it. What I am asking is that we stop treating the telephone as a forbidden route and start treating it as a demanding one, worth teaching and practising. The daughter who drove through the dark deserved a decision made with her rather than for her. Most families, in my experience, can tell the difference between being spared and being shut out. Our task is to make sure that, whatever the medium, they never feel the second."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, what does the writer say about the night on the medical ward?",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "It made the writer question a rule the writer had long followed."
            },
            {
              "id": "b",
              "text": "It confirmed the writer's belief that news must be given in person."
            },
            {
              "id": "c",
              "text": "It was the first time the writer had given bad news alone."
            },
            {
              "id": "d",
              "text": "It showed that the daughter had misunderstood what she was told."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, why does the writer think the rule's assumption about delay is mistaken?",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "Families usually prefer to hear news from a senior doctor."
            },
            {
              "id": "b",
              "text": "The drive to hospital is often physically dangerous for relatives."
            },
            {
              "id": "c",
              "text": "Families left uninformed may imagine something worse on their own."
            },
            {
              "id": "d",
              "text": "Clinicians rarely know enough to answer relatives' questions directly."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "In the third paragraph, the phrase \"These losses\" refers to",
          "answer": "b",
          "kind": [
            "reference"
          ],
          "options": [
            {
              "id": "a",
              "text": "relatives who stop listening part of the way through a call."
            },
            {
              "id": "b",
              "text": "the signs of a listener's reaction that a caller cannot see."
            },
            {
              "id": "c",
              "text": "telephone calls that are cut off before the news is given."
            },
            {
              "id": "d",
              "text": "patients who die before their relatives are able to arrive."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What does the writer suspect about insisting on a face-to-face meeting?",
          "answer": "d",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "It is the only reliable way to keep the information accurate."
            },
            {
              "id": "b",
              "text": "It is the approach that most relatives now actively request."
            },
            {
              "id": "c",
              "text": "It gives families useful extra time to prepare their own questions."
            },
            {
              "id": "d",
              "text": "It can serve clinicians' comfort more than families' real needs."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "According to the fifth paragraph, before giving the news the writer",
          "answer": "b",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "asks the relative to come in to the hospital if they can."
            },
            {
              "id": "b",
              "text": "checks the listener may be told and is able to talk safely."
            },
            {
              "id": "c",
              "text": "explains the patient's full history to give the news context."
            },
            {
              "id": "d",
              "text": "arranges for a second colleague to listen in on the call."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "In the sixth paragraph, why does the writer record the details of the call in the notes?",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "So later colleagues stay consistent with what was said."
            },
            {
              "id": "b",
              "text": "So that the family can be sent a written copy of the news."
            },
            {
              "id": "c",
              "text": "So that the writer can review their own technique afterwards."
            },
            {
              "id": "d",
              "text": "So that managers can check that the policy was followed."
            }
          ]
        },
        {
          "id": "q7",
          "stem": "What is the writer's main recommendation in the final paragraph?",
          "answer": "d",
          "kind": [
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "Meeting rooms should be kept for families who live close by."
            },
            {
              "id": "b",
              "text": "Telephone calls should replace most face-to-face conversations."
            },
            {
              "id": "c",
              "text": "Families should always choose how they receive bad news."
            },
            {
              "id": "d",
              "text": "Phone news should be taught as a demanding skill."
            }
          ]
        },
        {
          "id": "q8",
          "stem": "In the final paragraph, what does the writer suggest about families?",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "They rarely notice the way in which bad news is delivered."
            },
            {
              "id": "b",
              "text": "Protecting them from bad news is always a serious mistake."
            },
            {
              "id": "c",
              "text": "They can sense whether they are being included or excluded."
            },
            {
              "id": "d",
              "text": "The telephone itself tends to make them feel shut out."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-rehearsing-the-worst-day",
    "title": "Part C — Rehearsing the worst day",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "STRETCH",
    "topicTag": "simulation-training",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Despite the obviously artificial set-up, the exercise showed the writer did not know where a key piece of emergency equipment was kept on the writer's own unit.",
          "evidence": "having discovered that I did not know where the difficult airway trolley was kept on my own unit",
          "wrong": {
            "a": "The facilitator controlled the scenario, but the writer does not say it was too hard.",
            "b": "The opposite: the set-up was plainly unrealistic, and it did not need to be real.",
            "c": "No comparison of ease between real and simulated emergencies is made."
          }
        },
        "q2": {
          "why": "Sceptics measure simulation by how realistic it is, but the writer says its real purpose is to rehearse teamwork, not to imitate a patient perfectly.",
          "evidence": "We judge it by its realism and find it wanting, because no plastic patient sweats, vomits or grips your hand.",
          "wrong": {
            "a": "The opposite: the writer says failures in a crisis are seldom failures of knowledge.",
            "c": "The sceptics' own experience of emergencies is not discussed.",
            "d": "A junior who cannot speak up is an example of teamwork failure, not a description of sceptics."
          }
        },
        "q3": {
          "why": "The writer warns that poor sessions can teach the wrong lesson: that looking competent is the goal, rather than safety.",
          "evidence": "A badly run session can teach people the wrong lesson entirely, which is that the aim is to look competent rather than to be safe.",
          "wrong": {
            "b": "\"Three in the morning\" shows false confidence in a session, not lost ability to work nights.",
            "c": "Time away is a cost of all simulation, and \"unsafe\" goes beyond what is said.",
            "d": "The writer says simulation is artificial; nobody is said to think it always realistic."
          }
        },
        "q4": {
          "why": "The writer believes the debrief matters more than the scenario because it converts what happened into understanding.",
          "evidence": "The scenario creates the experience; the debrief turns it into learning.",
          "wrong": {
            "a": "The opposite: the team reconstructs events not to award marks.",
            "b": "The opposite: the debrief matters more than the scenario.",
            "d": "Senior leadership of the debrief is not suggested; in the next paragraph a senior colleague spoils one."
          }
        },
        "q5": {
          "why": "The phrase points back to the examples of the healthcare assistant and the registrar each owning up to something they did or did not do.",
          "evidence": "The healthcare assistant explains that she saw the oxygen tubing had come loose but assumed someone senior had noticed.",
          "wrong": {
            "b": "Marks are explicitly not the aim of the debrief.",
            "c": "The registrar admits a failure to say who led; decisions in general are not the admissions.",
            "d": "The team members make these admissions themselves, not the facilitator."
          }
        },
        "q6": {
          "why": "A senior colleague, though meaning well, turned the debrief into an assessment, and a team that had been open became silent.",
          "evidence": "I have seen sessions fail because a well-meaning senior colleague turned the debrief into an assessment",
          "wrong": {
            "a": "Lecturing is something the facilitator should resist, and it is not linked to the senior colleague.",
            "b": "Staff room stories are a general risk, not what the senior colleague did.",
            "c": "Curious questions are what a good facilitator asks; the colleague did the opposite."
          }
        },
        "q7": {
          "why": "On the ward, practical faults such as a locked cupboard or an inaudible bell come to light and can be fixed before a real emergency.",
          "evidence": "In-situ simulation exposes the problems that a training centre hides",
          "wrong": {
            "a": "Rare and complex scenarios are given as the strength of a dedicated centre.",
            "c": "Cost is not given as a reason for choosing the ward.",
            "d": "The point is the team's own familiar environment, not new equipment."
          }
        },
        "q8": {
          "why": "The writer sees simulation's modest but real value in letting teams make mistakes safely and find gaps before a patient does.",
          "evidence": "the chance to make our mistakes where they cost nothing, and to discover together the gaps that would otherwise be found by a patient",
          "wrong": {
            "a": "The opposite: the writer says simulation does not make anyone ready for their worst day.",
            "b": "Treating it as a performance to be judged would waste it.",
            "d": "The writer wants it open to the whole team, not mainly inexperienced staff."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "The first time I took part in a simulation, I was annoyed. The manikin's chest rose with a mechanical sigh, the \"monitor\" was a laptop balanced on a trolley, and a facilitator behind a glass screen was apparently deciding how unwell my patient would become. I remember thinking that real emergencies did not come with a script and a debrief. Twenty minutes later I was standing in a corridor, slightly shaken, having discovered that I did not know where the difficult airway trolley was kept on my own unit. Nobody had pretended that the manikin was real. It had not needed to be.\n\nThat is the point that sceptics of simulation, and I was one, tend to miss. We judge it by its realism and find it wanting, because no plastic patient sweats, vomits or grips your hand. But in my experience, the failures that harm patients in a crisis are seldom failures of clinical knowledge. Most of us know the steps we are meant to follow. What goes wrong is everything around the steps: two people doing the same task while a third task is forgotten, an instruction shouted to nobody in particular, a junior who has noticed something important but does not feel able to say so. Simulation is not mainly a test of what we know. It is a rehearsal of how we work together.\n\nI should be honest about its limitations. Simulation is expensive, not so much in equipment as in time: every hour spent in a scenario is an hour in which staff are not on the ward, and on a short-staffed shift that cost is felt by colleagues and patients alike. It is also artificial in ways that can mislead. People behave differently when they know they are being watched; some become cautious and slow, while others perform a confidence they would not feel at three in the morning. A badly run session can teach people the wrong lesson entirely, which is that the aim is to look competent rather than to be safe.\n\nThis is why I have come to believe that the debrief matters more than the scenario. The scenario creates the experience; the debrief turns it into learning. When it goes well, a team sits together afterwards and reconstructs what happened, not to award marks but to understand why decisions were made. The healthcare assistant explains that she saw the oxygen tubing had come loose but assumed someone senior had noticed. The registrar admits that he never actually said who was leading. These are small admissions, but they are the ones that change practice, and they only happen if people trust that what they say will not be used against them.\n\nCreating that trust is the facilitator's real job. It means making clear at the start that mistakes in the room are expected, and are the reason we are there. It means asking curious questions rather than leading ones, and resisting the temptation to deliver a lecture on what should have happened. It also means keeping the debrief confidential to the group, so that a hesitant moment in a scenario does not become a story told in the staff room. I have seen sessions fail because a well-meaning senior colleague turned the debrief into an assessment, and I have watched a team that had been open five minutes earlier fall completely silent.\n\nWhere simulation is held matters too. Sessions in a dedicated centre have their place, particularly for rare and complex scenarios, but some of the most useful exercises I have run took place on the ward itself, with the team who were actually on shift. In-situ simulation exposes the problems that a training centre hides: the cupboard that is locked, the phone extension nobody can remember, the emergency bell that cannot be heard from the side room. Each of these, once found, can be fixed before it matters. A centre teaches people to manage an emergency; the ward teaches the ward how to have one.\n\nI am not claiming that simulation makes anyone ready for their worst day. Nothing does, entirely, and those who have lived through a real crisis know how little it resembles a rehearsal. What simulation offers is more modest and, I think, more valuable: the chance to make our mistakes where they cost nothing, and to discover together the gaps that would otherwise be found by a patient. If we treat it as a performance to be judged, we will waste it. If we treat it as practice, honestly debriefed and open to the whole team, it may be the most useful hour in the working month."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, what did the writer discover during the first simulation?",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "The facilitator had made the scenario far too hard for anyone to manage."
            },
            {
              "id": "b",
              "text": "The manikin was more realistic than the writer had expected."
            },
            {
              "id": "c",
              "text": "Real emergencies were easier to handle than simulated ones."
            },
            {
              "id": "d",
              "text": "There was a practical gap in the writer's knowledge of the unit."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, the writer argues that sceptics of simulation",
          "answer": "b",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "are right that clinical knowledge is the main weakness in a crisis."
            },
            {
              "id": "b",
              "text": "judge it by a standard that misses what it is really for."
            },
            {
              "id": "c",
              "text": "have rarely been involved in a real emergency themselves."
            },
            {
              "id": "d",
              "text": "are mainly junior staff who lack confidence to speak up."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "According to the third paragraph, one risk of a badly run session is that staff",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "learn that appearing capable matters more than being safe."
            },
            {
              "id": "b",
              "text": "lose confidence and feel unable to work on night shifts."
            },
            {
              "id": "c",
              "text": "spend so long away that their wards are left unsafe."
            },
            {
              "id": "d",
              "text": "come to believe that simulations are always realistic."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "In the fourth paragraph, what is the writer's view of the debrief?",
          "answer": "c",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "It should mainly be used to award marks to each team."
            },
            {
              "id": "b",
              "text": "It matters less than having a realistic and well-designed scenario."
            },
            {
              "id": "c",
              "text": "It is where the experience of a scenario turns into learning."
            },
            {
              "id": "d",
              "text": "It works best when the senior staff lead the discussion."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "In the fourth paragraph, the phrase \"small admissions\" refers to",
          "answer": "a",
          "kind": [
            "reference"
          ],
          "options": [
            {
              "id": "a",
              "text": "team members saying what they noticed or failed to do."
            },
            {
              "id": "b",
              "text": "the marks given to each team at the end of a scenario."
            },
            {
              "id": "c",
              "text": "the decisions that senior staff make during a crisis."
            },
            {
              "id": "d",
              "text": "the mistakes that the facilitator points out afterwards."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What does the writer say about a senior colleague in the fifth paragraph?",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "Giving a short lecture helped the team see what had gone wrong."
            },
            {
              "id": "b",
              "text": "Telling stories in the staff room broke the group's confidentiality."
            },
            {
              "id": "c",
              "text": "Asking curious questions encouraged the team to be more open."
            },
            {
              "id": "d",
              "text": "Treating the debrief as an assessment made the team stop talking."
            }
          ]
        },
        {
          "id": "q7",
          "stem": "According to the sixth paragraph, the main advantage of running a simulation on the ward is that it",
          "answer": "b",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "allows rare and complex scenarios to be practised in safety."
            },
            {
              "id": "b",
              "text": "reveals local problems that can be put right in advance."
            },
            {
              "id": "c",
              "text": "avoids the cost of sending staff away to a training centre."
            },
            {
              "id": "d",
              "text": "lets staff practise with equipment they have never seen."
            }
          ]
        },
        {
          "id": "q8",
          "stem": "What is the writer's overall view of simulation in the final paragraph?",
          "answer": "c",
          "kind": [
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "It prepares clinicians fully for the reality of a crisis."
            },
            {
              "id": "b",
              "text": "It should be judged as a performance by senior colleagues."
            },
            {
              "id": "c",
              "text": "It lets teams make harmless mistakes and find gaps together."
            },
            {
              "id": "d",
              "text": "It is mostly useful for staff who lack real experience."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-the-person-with-time-to-sit",
    "title": "Part C — The person with time to sit",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "ward-volunteers",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The writer's mind was changed by a complaint letter from a patient's son, which ended by naming the volunteer as the only person who had really talked to his father.",
          "evidence": "It took a complaint, of all things, to change my mind.",
          "wrong": {
            "a": "No colleague or ward meeting is mentioned; the change came from a family member's letter.",
            "c": "She came on the same two mornings; no change in days is described.",
            "d": "The patient did not ask for anything; his son wrote the letter."
          }
        },
        "q2": {
          "why": "After rereading the letter, the writer admits that staff talk to patients mainly to gather or give information, often thinking of the next job.",
          "evidence": "Almost all of our conversations with patients have a purpose.",
          "wrong": {
            "a": "Nurses do reassure people; length of conversation is not the writer's point.",
            "b": "The opposite: nurses explain procedures and reassure people before tests.",
            "c": "No such comparison between patients and relatives is made."
          }
        },
        "q3": {
          "why": "Of the worries listed, the writer agrees only with the last: that volunteers could become a cheap substitute for staff who should be paid.",
          "evidence": "that volunteers are a cheap way of filling gaps that should be filled by paid staff. I share that last concern.",
          "wrong": {
            "a": "Confidentiality is a colleague's worry the writer reports, not the one the writer shares.",
            "b": "Training is listed among colleagues' worries, not the shared concern.",
            "d": "Supervision is a colleague's worry; the writer shares only the last one."
          }
        },
        "q4": {
          "why": "The phrase points back to the end of the third paragraph, where a volunteer is asked to do a healthcare assistant's work because the rota is short.",
          "evidence": "If a volunteer is ever asked to do the work of a healthcare assistant because the rota is short",
          "wrong": {
            "b": "Infection control is part of training, not the risk referred to.",
            "c": "Such requests are handled by finding staff; they are not \"that risk\".",
            "d": "Suspicion is the response the writer rejects, not the risk itself."
          }
        },
        "q5": {
          "why": "The writer argues that the boundaries keep the role safe and also make it valuable, because a volunteer without tasks can give full attention.",
          "evidence": "A volunteer who is not allowed to be busy is free to be present.",
          "wrong": {
            "a": "The role is set in a written description the whole team can see, not decided daily.",
            "b": "The opposite: volunteers do not move patients.",
            "d": "The role sounds restrictive, but the writer says the limits make it valuable."
          }
        },
        "q6": {
          "why": "What she observes, such as an untouched tray, is passed to nurses, and these small things have changed what the team did.",
          "evidence": "None of this appears on any chart, yet each of these small things has, at one time or another, changed what my team did next.",
          "wrong": {
            "a": "The opposite: none of this appears on any chart.",
            "c": "She chats while patients eat and tells a nurse about concerns; help from staff continues.",
            "d": "She plays cards with the woman; the nurses still care for her."
          }
        },
        "q7": {
          "why": "Coming in with fresh eyes, she pointed out faults the busy team had walked past, and they were quickly fixed.",
          "evidence": "Someone who arrives twice a week, with fresh eyes and no stake in our routines, can show us what we have stopped seeing.",
          "wrong": {
            "b": "Her questions were not complaints, though they had their force.",
            "c": "Staff had walked past the faults for weeks, but fixed them within a day.",
            "d": "Pressure explains why staff stopped noticing; no annoyance is described."
          }
        },
        "q8": {
          "why": "The writer accepts that support is needed, but argues that, done well, volunteering gives patients companionship that no staffing model provides.",
          "evidence": "we gain something no staffing model can provide: a person on the ward whose only job is to treat patients as company rather than as cases",
          "wrong": {
            "a": "The opposite: not every volunteer is a Margaret.",
            "b": "Too strong: only a poorly supported programme may create more work.",
            "c": "The writer values the non-clinical role and never proposes widening it."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "For the first few months that Margaret volunteered on our ward, I am ashamed to say that I barely noticed her. She arrived on Tuesday and Thursday mornings in a pale green tabard, signed the book at the nurses' station and disappeared into the bays. I assumed, without really thinking about it, that she was doing something pleasant but marginal, the hospital equivalent of arranging flowers. It took a complaint, of all things, to change my mind. A patient's son wrote to us, unhappy about almost every aspect of his father's stay, and ended his letter by saying that the only person who had really talked to his father was \"the lady in green\".\n\nI was stung by that letter, and my first reaction was defensive. My nurses talk to patients all day. They explain procedures, ask about pain, check identity bands and reassure people before tests. But when I read the letter again, I had to admit that he had seen something real. Almost all of our conversations with patients have a purpose. We are gathering information or giving it, and we are usually doing so with one eye on the next task. What Margaret offered was conversation with no purpose at all beyond the conversation itself. She had time to sit, and for an older man far from home, that was what mattered.\n\nI know that some colleagues are uneasy about volunteers, and their concerns deserve a fair hearing. There are worries about confidentiality, about people without clinical training being near unwell patients, and about who supervises them on a busy shift. There is also a deeper and more political worry: that volunteers are a cheap way of filling gaps that should be filled by paid staff. I share that last concern. If a volunteer is ever asked to do the work of a healthcare assistant because the rota is short, then something has gone badly wrong, and it is the patients and the volunteer who are put at risk.\n\nBut the answer to that risk is clarity, not suspicion. On our ward, volunteers are recruited and checked through the hospital's volunteer service, complete training on confidentiality and infection control, and work to a written role description that the whole team can see. They do not give personal care, move patients or handle anything clinical. If a patient asks them for help with something outside their role, they find a member of staff. This sounds restrictive, and in a sense it is, but the boundaries are what make the role safe and, I would argue, what make it valuable. A volunteer who is not allowed to be busy is free to be present.\n\nAnd presence turns out to do more than I expected. Volunteers sit with patients at lunchtime and chat while they eat, and more than once Margaret has quietly told a nurse that someone had barely touched their tray for the second day running. She plays cards with a woman who has dementia and often becomes distressed in the late morning, and the nurses have noticed that those mornings are calmer. She reads the newspaper aloud to a man whose eyesight is failing. None of this appears on any chart, yet each of these small things has, at one time or another, changed what my team did next.\n\nThere is a benefit to the staff, too, which I did not anticipate. Volunteers see our ward as an outsider would. Margaret once asked, quite innocently, why the clock in one bay was an hour wrong, and why the call bell in another was always out of reach. We had walked past both for weeks. Her questions were not complaints, but they had the force of them, and we fixed both within a day. A team that works under pressure stops seeing its own environment. Someone who arrives twice a week, with fresh eyes and no stake in our routines, can show us what we have stopped seeing.\n\nI do not want to romanticise volunteering. Not every volunteer is a Margaret, and a poorly supported programme can create more work than it saves. Volunteers need a named person to go to, a proper welcome and, occasionally, a frank conversation when something is not working. But if we get those things right, we gain something no staffing model can provide: a person on the ward whose only job is to treat patients as company rather than as cases. I wish I had noticed that sooner. When I finally told Margaret about the letter, she simply asked whether the man's father had got home safely."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, what changed the writer's view of the volunteer?",
          "answer": "b",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "A colleague praised her quiet work at a ward meeting."
            },
            {
              "id": "b",
              "text": "A relative's letter singled her out for praise."
            },
            {
              "id": "c",
              "text": "She began coming to the ward on more days."
            },
            {
              "id": "d",
              "text": "A patient asked to see her more often."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, the writer accepts that nurses' conversations with patients",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "are often too brief to reassure patients properly."
            },
            {
              "id": "b",
              "text": "rarely include explanations of tests and procedures."
            },
            {
              "id": "c",
              "text": "are valued less by patients than by their relatives."
            },
            {
              "id": "d",
              "text": "are nearly always tied to some task or purpose."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "In the third paragraph, which concern about volunteers does the writer share?",
          "answer": "c",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "That they may breach patients' confidentiality."
            },
            {
              "id": "b",
              "text": "That they lack the training to be near patients."
            },
            {
              "id": "c",
              "text": "That they could be used in place of paid staff."
            },
            {
              "id": "d",
              "text": "That nobody has time to supervise them on shift."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "In the fourth paragraph, the phrase \"that risk\" refers to",
          "answer": "a",
          "kind": [
            "reference"
          ],
          "options": [
            {
              "id": "a",
              "text": "volunteers asked to cover for missing staff."
            },
            {
              "id": "b",
              "text": "volunteers breaking the rules on infection control."
            },
            {
              "id": "c",
              "text": "patients asking volunteers to give personal care."
            },
            {
              "id": "d",
              "text": "staff growing suspicious of the volunteer service."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "According to the fourth paragraph, the limits on the volunteer role",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "are agreed by each nurse at the start of a shift."
            },
            {
              "id": "b",
              "text": "still allow volunteers to help move patients."
            },
            {
              "id": "c",
              "text": "are what free volunteers simply to be with patients."
            },
            {
              "id": "d",
              "text": "make the role far less useful than it could be."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What does the fifth paragraph show about the volunteer's presence?",
          "answer": "b",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "It is recorded carefully on each patient's chart."
            },
            {
              "id": "b",
              "text": "It sometimes leads staff to act on what she notices."
            },
            {
              "id": "c",
              "text": "It means patients no longer need help at mealtimes."
            },
            {
              "id": "d",
              "text": "It has replaced nursing care for a woman with dementia."
            }
          ]
        },
        {
          "id": "q7",
          "stem": "In the sixth paragraph, the writer suggests that the volunteer's questions",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "drew attention to problems the staff had stopped seeing."
            },
            {
              "id": "b",
              "text": "were intended as formal complaints about the ward."
            },
            {
              "id": "c",
              "text": "took several weeks to bring about any real change."
            },
            {
              "id": "d",
              "text": "annoyed staff on the ward who were already under heavy pressure."
            }
          ]
        },
        {
          "id": "q8",
          "stem": "What is the writer's overall view of volunteers in the final paragraph?",
          "answer": "d",
          "kind": [
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "Every volunteer brings the same qualities as Margaret."
            },
            {
              "id": "b",
              "text": "Volunteer programmes usually create more work than they save."
            },
            {
              "id": "c",
              "text": "Volunteers should be given a much wider clinical role on the wards."
            },
            {
              "id": "d",
              "text": "Well-supported volunteers offer a kind of company staffing cannot."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-the-daughter-who-answered-for-her-mother",
    "title": "Part C — The daughter who answered for her mother",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "family-interpreter",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "The ward was busy and the interpreting line can be slow, so a devoted daughter who spoke excellent English seemed to solve the problem of communicating.",
          "evidence": "The ward was busy, the telephone line can be slow to connect, and here was someone fluent, willing and plainly devoted.",
          "wrong": {
            "a": "Leyla said there was no need for an interpreter, so none was booked.",
            "c": "Nothing is said about the breathlessness improving on the first day.",
            "d": "Leyla remembered the dates herself; the writer says staff would have needed an hour to find them."
          }
        },
        "q2": {
          "why": "When asked about pain, Leyla replied with her own reassuring view of her mother instead of interpreting the question, though the writer believes she did not intend to mislead.",
          "evidence": "Leyla had answered rather than translated",
          "wrong": {
            "a": "The writer says plainly that Leyla did not mean to mislead anyone.",
            "b": "The first paragraph says Leyla spoke excellent English.",
            "c": "Leyla had gone home; a colleague called the service and the patient spoke through it."
          }
        },
        "q3": {
          "why": "The writer concedes that relatives are present when interpreters are not and bring trust and a knowledge of history and culture that a stranger cannot match.",
          "evidence": "A relative is there when an interpreter is not, particularly at night or in an emergency.",
          "wrong": {
            "b": "Too strong: only some patients say they prefer a relative.",
            "c": "The writer says interpreted conversations can be slow, but not that relatives are quicker than guidance allows.",
            "d": "Too strong: the writer notes relatives are available at night but never says they should replace the service."
          }
        },
        "q4": {
          "why": "The sentence before describes patients keeping worries about continence, mood, money or home to themselves when a relative interprets; the writer calls this a consequence of love.",
          "evidence": "Patients, for their part, may hold back what they would tell a stranger",
          "wrong": {
            "a": "The stranger is mentioned, but \"This\" refers to the patient's behaviour, not to a person.",
            "b": "Guidance is mentioned in the third paragraph, not here.",
            "d": "The blood pressure example comes after \"This\" and is a comparison, not what it refers to."
          }
        },
        "q5": {
          "why": "Consent rests on what the patient understood, and a nod after a translation that staff cannot verify does not show that understanding.",
          "evidence": "the question is not whether the relative understood the procedure but whether the patient did",
          "wrong": {
            "a": "The opposite: the relative's understanding is said not to be the question.",
            "b": "The writer says children should never be asked to interpret.",
            "d": "Nothing suggests consent is rarely needed; the point is how it is obtained."
          }
        },
        "q6": {
          "why": "The writer respects the patient's wish and documents it, but returns to the question before conversations about diagnosis or consent.",
          "evidence": "I respect that, record the decision and revisit it whenever a conversation about diagnosis or consent is coming up",
          "wrong": {
            "b": "The writer revisits the choice but does not say it is overruled.",
            "c": "Only the writer records the decision; no signature from the relative is mentioned.",
            "d": "Delaying conversations is not mentioned; the writer only says the approach is slower."
          }
        },
        "q7": {
          "why": "The writer tells relatives that interpreters handle clinical talk so that they can simply be family members at the bedside.",
          "evidence": "so that they can be a daughter or a husband rather than a translator",
          "wrong": {
            "a": "Visiting time is not discussed; relatives remain welcome.",
            "b": "The opposite: relatives remain welcome for everyday conversation.",
            "c": "The writer does not claim relatives will understand the diagnosis better."
          }
        },
        "q8": {
          "why": "The writer insists families should be present and welcomed, while the task of interpreting belongs to professionals rather than relatives.",
          "evidence": "Families should be welcomed as companions, not used as instruments.",
          "wrong": {
            "a": "The writer says this is not an argument for keeping families at a distance.",
            "c": "Booking an interpreter is said to take only a few minutes; speed is not the condition.",
            "d": "Leyla was right to be there; the mistake was giving her the interpreting job."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "When Mrs Barzani was admitted to our ward with breathlessness, her daughter Leyla came with her and stayed for most of the first day. Leyla spoke excellent English, knew every tablet in her mother's bag and could recall the dates of previous admissions that we would have spent an hour finding. When I asked whether we should book an interpreter, she laughed and said there was no need, because she had been translating for her mother since she was a schoolgirl. I was relieved. The ward was busy, the telephone line can be slow to connect, and here was someone fluent, willing and plainly devoted. It took me three days to understand what that convenience had cost.\n\nOn the third evening, Leyla had gone home and her mother seemed restless, so a colleague called the telephone interpreting service. Within ten minutes we learned that Mrs Barzani had been in considerable pain in her side since admission, that she had not been sleeping, and that she was frightened of becoming a burden on her family. None of this had reached us. Looking back through my notes, I could see that each time I had asked about pain, Leyla had answered rather than translated: her mother was fine, she never complained, she just wanted to go home. I do not believe Leyla meant to mislead anyone. She was answering the question she thought mattered, which was whether her mother was coping.\n\nI want to be fair to the case for family interpreters, because it is stronger than some guidance suggests. A relative is there when an interpreter is not, particularly at night or in an emergency. They bring trust, and often a knowledge of the patient's history and culture that no stranger on a telephone line can match. Some patients say plainly that they prefer a son or a niece to a voice they cannot see, and their preference deserves respect. I have also sat through interpreted conversations that felt stilted and slow, with the patient looking at the speakerphone rather than at me. Nobody should pretend that the professional option is always the warmer one.\n\nYet warmth is not the same as accuracy. Relatives edit, often without noticing. They soften bad news, leave out a question they find embarrassing and add reassurance of their own. Patients, for their part, may hold back what they would tell a stranger: worries about continence, low mood, money or what happens at home. This is not a failure of love but a consequence of it. The closer the relationship, the more there is to protect, and protection is exactly what gets in the way of a full history. We would never ask a relative to take a patient's blood pressure and pass on whatever figure they thought best; we should not ask them to do the equivalent with words.\n\nThere is a harder point too. Sometimes the person interpreting is the very person the patient needs to talk about. A patient who is being controlled or harmed at home cannot disclose it through the mouth of the person responsible. We may never know that this is happening, which is precisely why we cannot rely on spotting it. And when consent is needed, the question is not whether the relative understood the procedure but whether the patient did. A nod in response to a translation we cannot check is not informed consent. Children should never be asked to interpret, however capable they seem, and I now treat that as a rule rather than a judgement.\n\nWhat I do differently is modest. I record the patient's preferred language at admission and offer a professional interpreter as a matter of routine, not as a favour. I explain to relatives, kindly, that we use interpreters for clinical conversations so that they can be a daughter or a husband rather than a translator. Relatives remain welcome for everyday conversation, comfort and practical arrangements. If a patient who has capacity still insists on a family member, I respect that, record the decision and revisit it whenever a conversation about diagnosis or consent is coming up. It is slower. It is also the only way I can be confident that the patient, not the relative, has been heard.\n\nNone of this is an argument for keeping families at a distance. Leyla was the person her mother most wanted beside her, and she was right to be there. My mistake was to give her a job that was not hers to do, and to be grateful for the time it saved me. Families should be welcomed as companions, not used as instruments. Booking an interpreter takes a few minutes and occasionally a little patience. Missing a patient's pain for three days took something from her that was far harder to give back."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, why did the writer initially feel relieved?",
          "answer": "b",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "Leyla had already booked a telephone interpreter for the ward."
            },
            {
              "id": "b",
              "text": "A fluent, willing relative seemed to remove a practical difficulty."
            },
            {
              "id": "c",
              "text": "Mrs Barzani's breathlessness had improved by the end of the first day."
            },
            {
              "id": "d",
              "text": "Leyla had quickly found the records of earlier admissions."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, what does the writer suggest about Leyla?",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "She deliberately hid her mother's pain from the nursing staff."
            },
            {
              "id": "b",
              "text": "She misunderstood the questions because her English was limited."
            },
            {
              "id": "c",
              "text": "She had told the interpreting service about the pain herself."
            },
            {
              "id": "d",
              "text": "She gave her own answers instead of passing the questions on."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "In the third paragraph, the writer accepts that family interpreters",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "can offer availability and background knowledge that strangers lack."
            },
            {
              "id": "b",
              "text": "are always preferred by patients to professional interpreters."
            },
            {
              "id": "c",
              "text": "make conversations quicker than most guidance would allow."
            },
            {
              "id": "d",
              "text": "should replace the telephone interpreting service at night and in emergencies."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "In the fourth paragraph, the word \"This\" in \"This is not a failure of love\" refers to",
          "answer": "c",
          "kind": [
            "reference"
          ],
          "options": [
            {
              "id": "a",
              "text": "the stranger a patient might speak to more openly."
            },
            {
              "id": "b",
              "text": "the guidance that discourages hospitals from using relatives at all."
            },
            {
              "id": "c",
              "text": "patients holding back sensitive concerns in front of family."
            },
            {
              "id": "d",
              "text": "the blood pressure figure a relative might pass on."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "In the fifth paragraph, what does the writer argue about consent?",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "It can be assumed once a relative fully understands the procedure."
            },
            {
              "id": "b",
              "text": "It may be obtained through children if they translate capably."
            },
            {
              "id": "c",
              "text": "It depends on the patient's understanding, which nobody can check here."
            },
            {
              "id": "d",
              "text": "It is rarely needed for conversations that are held through an interpreter."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "In the sixth paragraph, what does the writer do when a patient with capacity insists on a relative?",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "respects it, records it and returns to it before key conversations"
            },
            {
              "id": "b",
              "text": "overrules the choice whenever a diagnosis needs to be discussed with them"
            },
            {
              "id": "c",
              "text": "asks the relative to sign a record of everything that was translated"
            },
            {
              "id": "d",
              "text": "delays every conversation until a telephone interpreter is free"
            }
          ]
        },
        {
          "id": "q7",
          "stem": "In the sixth paragraph, what does the writer believe professional interpreters allow relatives to do?",
          "answer": "d",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "spend less of their own time visiting the patient on the ward"
            },
            {
              "id": "b",
              "text": "stay out of everyday conversations on the ward"
            },
            {
              "id": "c",
              "text": "understand the diagnosis more clearly than before"
            },
            {
              "id": "d",
              "text": "keep their family role instead of acting as translators"
            }
          ]
        },
        {
          "id": "q8",
          "stem": "What is the writer's main conclusion in the final paragraph?",
          "answer": "b",
          "kind": [
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "Relatives should be asked to leave during all clinical conversations."
            },
            {
              "id": "b",
              "text": "Families belong at the bedside, but not as the patient's interpreter."
            },
            {
              "id": "c",
              "text": "Interpreting services must become quicker before nurses can rely on them."
            },
            {
              "id": "d",
              "text": "Leyla should have been told sooner that her help was unwelcome."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-the-ward-with-no-corridors",
    "title": "Part C — The ward with no corridors",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "hospital-at-home",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "Seeing Mr Pryce recover at home made the writer recognise that a firm belief in ward care owed something to custom, not only to evidence.",
          "evidence": "my certainty had been built on habit as much as evidence",
          "wrong": {
            "a": "The writer stresses that he recovered at home without becoming confused; no faster ward recovery is claimed.",
            "b": "The writer still believes many acutely unwell people belong where the doctors and nurses are.",
            "d": "Evidence is mentioned only about the writer's own certainty, not the proposal."
          }
        },
        "q2": {
          "why": "At home staff can see the stairs, the food supply and how medicines are kept, which tells them how well a patient is likely to manage.",
          "evidence": "the team sees what a ward never shows: the steep stairs, the empty fridge, the medicines kept in three different cupboards",
          "wrong": {
            "b": "Poor sleep is described as a problem of hospital beds, not something a home visit reveals.",
            "c": "The paragraph does not compare how quickly illnesses are treated.",
            "d": "Loss of strength in hospital is stated as a known problem, not something home visits uncover."
          }
        },
        "q3": {
          "why": "The fair answer is a set of safeguards: clear criteria for choosing patients, senior review for each, a phone line staffed at all hours and an agreed route into hospital.",
          "evidence": "Patients are chosen against clear criteria, every one has a senior review, and families are given a single number that is answered day and night",
          "wrong": {
            "a": "No overnight nurse at home is mentioned; the night-time cover is a phone line.",
            "b": "Breathing changes are an example of the risk, not a reason for exclusion.",
            "c": "Families are given a number to call, not a schedule of observations."
          }
        },
        "q4": {
          "why": "The previous sentence explains that, at home, the night-time care falls on spouses, daughters or neighbours; \"this\" points back to that arrangement.",
          "evidence": "At home, the night staff is often a tired spouse, a daughter who has taken leave from work, or a neighbour who agreed to look in.",
          "wrong": {
            "a": "The planning papers are where the cost fails to appear, not what is described as involvement.",
            "c": "The ward has night staff; the point is that home does not.",
            "d": "Consent comes later in the paragraph and is not what \"this\" refers to."
          }
        },
        "q5": {
          "why": "Because relatives may carry a heavy unpaid burden, the writer makes sure they take part in the consent discussion as well as the patient.",
          "evidence": "I now insist that the conversation about consent includes the people who will be in the house, not only the patient.",
          "wrong": {
            "b": "The shift is described as unpaid, but payment is not proposed.",
            "c": "A daughter taking leave is an example of the burden, not a reason to refuse.",
            "d": "Neighbours looking in are mentioned, but no record of visits is required."
          }
        },
        "q6": {
          "why": "The writer fears that a service measured by occupancy will accept patients at the margin, such as those who live alone and are newly confused.",
          "evidence": "a service judged by how many places it fills will feel pressure to fill them",
          "wrong": {
            "a": "The opposite: the writer says most clinicians can tell the difference.",
            "b": "Too strong: only some people living alone may be better off on a ward, for a while.",
            "c": "The writer worries about freeing a bed, not about keeping wards empty."
          }
        },
        "q7": {
          "why": "The writer wants to know if people would choose the same care a month later and whether hospital admissions happened at the right time.",
          "evidence": "I would rather know whether patients and their families, asked a month later, would choose the same care again",
          "wrong": {
            "a": "This is the beds-saved count the writer is uneasy about.",
            "c": "Speed of discharge is never proposed as a measure.",
            "d": "Easy understanding is why managers like counting beds, which the writer questions."
          }
        },
        "q8": {
          "why": "The writer concludes that care at home needs handovers, senior oversight, matched staffing and the freedom to refuse unsuitable patients, just like a ward.",
          "evidence": "a virtual ward is a real ward and deserves the same discipline",
          "wrong": {
            "a": "The writer says the conclusion is not that it should replace the hospital.",
            "b": "The writer rejects the idea that it is a fashionable experiment to be tolerated until budgets change.",
            "d": "Using it as an overflow for the main building is what the writer warns will fail patients."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Mr Pryce was eighty-four, had a chest infection and, a few years ago, would certainly have spent a week on my ward. Instead, he spent it in his own armchair, with his dog asleep on his feet, while our hospital-at-home team visited each day, reviewed him, adjusted his treatment and took his blood samples at the kitchen table. I had been one of the doubters when the service was proposed. I had spent my career believing that acutely unwell people belong where the doctors and nurses are, and I still believe that for many patients. But watching Mr Pryce recover without once becoming confused, I had to admit that my certainty had been built on habit as much as evidence.\n\nThe case for treating people at home is familiar to anyone who works with older patients. A hospital bed is not a neutral place. Patients sleep badly, eat at odd hours, lose strength from lying still and become disorientated in surroundings that never go fully dark or quiet. Some leave weaker than they arrived, even when the illness that brought them in has been treated successfully. At home, by contrast, the team sees what a ward never shows: the steep stairs, the empty fridge, the medicines kept in three different cupboards. I have learned more about a patient's chances of managing in a single home visit than in several days of ward rounds.\n\nMy early fear, shared by many colleagues, was about the hours between visits. On a ward, a nurse notices when a patient's breathing changes at three in the morning. At home, who notices? It is a fair question, and the service only works because it has a fair answer. Patients are chosen against clear criteria, every one has a senior review, and families are given a single number that is answered day and night by someone who can see the patient's plan. When someone deteriorates, the route for bringing them into hospital has already been agreed. I would not support a service that offered less, and I do not think anyone should.\n\nWhat worried me more, once I had seen the service working, was a cost that rarely appears in the planning papers. A ward has night staff. At home, the night staff is often a tired spouse, a daughter who has taken leave from work, or a neighbour who agreed to look in. It is easy to describe this as the family being involved, as though involvement were simply a benefit. Sometimes it is. But it can also be a heavy and unpaid shift, accepted because nobody felt able to say no. I now insist that the conversation about consent includes the people who will be in the house, not only the patient.\n\nNor is the service right for everyone. A person who lives alone and is newly confused, or whose home is cold and unsafe, may be better off on a ward, at least for a while. The danger is not that clinicians cannot tell the difference; most can. It is that a service judged by how many places it fills will feel pressure to fill them, and the patients at the margin will be the first to be squeezed in. I have seen referrals that read less like clinical decisions and more like attempts to free a bed before the evening rush.\n\nThis is why I am uneasy about how such services are often measured. Counting the beds saved is tempting, because the number is simple and managers understand it at a glance. Yet a bed saved is not the same as a patient helped. I would rather know whether patients and their families, asked a month later, would choose the same care again, and whether those who were brought into hospital were brought in at the right moment rather than too late. Those questions are harder to answer, but they are the ones that tell us whether we are running a ward or simply moving a queue from one place to another.\n\nMy conclusion is not that hospital at home should replace the hospital, nor that it is a fashionable experiment to be tolerated until budgets change. It is that a virtual ward is a real ward and deserves the same discipline: proper handovers, senior oversight, staffing that matches the number of patients, and the freedom to say that a particular patient should not be there. Treated in that way, it can offer some people the best of both worlds. Treated as an overflow car park for the main building, it will eventually fail the very patients it was designed to protect."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, the writer admits that",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "Mr Pryce would have recovered more quickly on the ward."
            },
            {
              "id": "b",
              "text": "most acutely unwell patients should now be treated at home."
            },
            {
              "id": "c",
              "text": "earlier doubts had rested partly on familiar routine."
            },
            {
              "id": "d",
              "text": "the service had been proposed without any supporting evidence."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, what does the writer say a home visit reveals?",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "practical details of daily life that a ward cannot show"
            },
            {
              "id": "b",
              "text": "how well patients sleep once they have gone back to their own homes"
            },
            {
              "id": "c",
              "text": "which illnesses can be treated more quickly at home"
            },
            {
              "id": "d",
              "text": "why older patients lose strength while in hospital"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "In the third paragraph, how does the service answer the writer's fear about the hours between visits?",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "by placing a nurse in each patient's home overnight"
            },
            {
              "id": "b",
              "text": "by accepting only those patients who have no problems with their breathing"
            },
            {
              "id": "c",
              "text": "by asking families to take observations every few hours"
            },
            {
              "id": "d",
              "text": "through careful selection, senior review and a contact number"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "In the fourth paragraph, the word \"this\" in \"describe this as the family being involved\" refers to",
          "answer": "b",
          "kind": [
            "reference"
          ],
          "options": [
            {
              "id": "a",
              "text": "the planning papers that set out the service's costs"
            },
            {
              "id": "b",
              "text": "relatives and neighbours providing the care at night"
            },
            {
              "id": "c",
              "text": "the ward night staff who visit patients at home"
            },
            {
              "id": "d",
              "text": "the patient's agreement to be treated at home"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "In the fourth paragraph, what does the writer now insist on?",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "including the household in the decision about care at home"
            },
            {
              "id": "b",
              "text": "paying relatives who provide care during the night"
            },
            {
              "id": "c",
              "text": "refusing the service when family members are working"
            },
            {
              "id": "d",
              "text": "asking neighbours to keep a written record of each of their visits"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "In the fifth paragraph, what is the writer's main concern?",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "Clinicians are generally unable to judge who is suitable."
            },
            {
              "id": "b",
              "text": "Patients who live alone should never be treated at home."
            },
            {
              "id": "c",
              "text": "Wards are too often kept empty for evening admissions."
            },
            {
              "id": "d",
              "text": "Pressure to fill places may bring in unsuitable patients."
            }
          ]
        },
        {
          "id": "q7",
          "stem": "In the sixth paragraph, which measure does the writer prefer to counting beds saved?",
          "answer": "b",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "the number of hospital beds released each month"
            },
            {
              "id": "b",
              "text": "whether patients and families would choose it again"
            },
            {
              "id": "c",
              "text": "how quickly patients are discharged from the service"
            },
            {
              "id": "d",
              "text": "how easily managers can understand the results"
            }
          ]
        },
        {
          "id": "q8",
          "stem": "What is the writer's overall view of hospital at home?",
          "answer": "c",
          "kind": [
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "It should eventually replace most care given in hospital."
            },
            {
              "id": "b",
              "text": "It is a passing trend that tighter budgets will bring to an end."
            },
            {
              "id": "c",
              "text": "It must be run with the same rigour as any ward."
            },
            {
              "id": "d",
              "text": "It works best for patients who are waiting for a hospital bed."
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "slug": "rea-c-the-badge-nobody-could-read",
    "title": "Part C — The badge nobody could read",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "STRETCH",
    "topicTag": "skill-mix",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "With no explanation of the new role, each nurse guessed what Joel could do, so he was treated in three different ways.",
          "evidence": "They had been given a new colleague and no explanation, and they filled the gap with guesses.",
          "wrong": {
            "a": "Nobody had read his training record, so no one could disapprove of it.",
            "b": "He declined one request outside his training; that was a result of the guessing, not its cause.",
            "c": "Busyness is not given as the reason; the writer says the gap was a lack of explanation."
          }
        },
        "q2": {
          "why": "Overreach was dangerous because Joel had to say no in front of busy colleagues, something not every newcomer would feel able to do.",
          "evidence": "he had to decline in front of a busy colleague, which takes a confidence that not every new member of staff possesses",
          "wrong": {
            "a": "The text says he had to decline such requests, not agree to them.",
            "b": "Wasted skill is the effect of underuse, a different problem in the paragraph.",
            "d": "The writer never compares how often each problem happened."
          }
        },
        "q3": {
          "why": "The writer concedes some truth in the managers' reply: curiosity is a professional duty, and no one on the ward asked Joel what he could do.",
          "evidence": "nobody on my ward asked Joel directly what he had been trained to do",
          "wrong": {
            "a": "The writer criticises relying on the document alone, not circulating it.",
            "c": "Nothing suggests managers hid information; their response is called reasonable.",
            "d": "The writer says nurses do not go looking for policy at the start of a shift, and accepts this."
          }
        },
        "q4": {
          "why": "The suspicion is the experienced nurses' fear that the post existed to save money and that such roles would replace registered staff.",
          "evidence": "Several experienced nurses suspected that Joel's post had been created to save money",
          "wrong": {
            "b": "Joel's own feelings are described in the second paragraph, not here.",
            "c": "Managers' worries are never mentioned in this paragraph.",
            "d": "The writer is unsure whether the fear is justified, but that is not the suspicion meant."
          }
        },
        "q5": {
          "why": "Without an explanation, staff invent their own, and the version they invent tends to be the most alarming one, so silence strengthened the fear.",
          "evidence": "When a change in skill mix arrives without explanation, people supply their own, and the explanation they supply is usually the most threatening one available.",
          "wrong": {
            "a": "Silence did not protect staff; it fed their fear.",
            "c": "The writer does not say managers lacked a plan.",
            "d": "The writer says it is impossible to tell whether the fear is justified."
          }
        },
        "q6": {
          "why": "A brief huddle where Joel explained his training, plus a summary page, a named supervisor and a place on the allocation board, ended the confusion.",
          "evidence": "At a fifteen-minute huddle, Joel described his training",
          "wrong": {
            "a": "The change happened on the ward in fifteen minutes, not through a course.",
            "b": "A job description had already been circulated without effect; the new page was put in the staff room.",
            "d": "The opposite: colleagues began asking him for help with tasks they had kept from him."
          }
        },
        "q7": {
          "why": "Patients were confused about who Joel was; some took him for a doctor, and one was puzzled when he passed her question on.",
          "evidence": "Several had assumed Joel was a doctor because he did not wear the same uniform as the healthcare assistants",
          "wrong": {
            "b": "His uniform caused a mistaken assumption, not a formal complaint.",
            "c": "One patient asked Joel, thinking he was a doctor; no preference is described.",
            "d": "The writer admits staff had not thought to ask or inform patients."
          }
        },
        "q8": {
          "why": "The writer supports new roles but places the duty to explain them on the people who design and introduce them.",
          "evidence": "Those who design and introduce such posts owe the existing team a clear account of what has changed and why.",
          "wrong": {
            "a": "Staff shortages are not given as the condition for new roles.",
            "b": "The writer says the responsibility cannot rest with the person who holds the role.",
            "c": "The opposite: Joel has made the ward safer, not less safe."
          }
        }
      },
      "passages": [
        {
          "id": "p1",
          "body": "Joel joined our surgical ward on a Monday with a new badge that said 'assistant practitioner' and a training record that nobody had read. By the end of his first week he had been treated as three different people. One nurse gave him nothing but beds to make and drinks to hand out. Another asked him to act as second checker for a patient's medicine, which he politely explained his training did not cover. A third simply avoided him, unsure whether to treat him as a student, a healthcare assistant or a junior nurse. None of my colleagues was being unkind. They had been given a new colleague and no explanation, and they filled the gap with guesses.\n\nThe effects of those guesses were not trivial. Underuse wasted what Joel had spent two years learning: he could carry out tasks that would have freed the registered nurses for work only they could do, yet on some shifts he did less than he had done in his previous post. Overreach was more dangerous. Each time he was asked to do something outside his role, he had to decline in front of a busy colleague, which takes a confidence that not every new member of staff possesses. Joel told me later that he had felt at once wasted and exposed, and that he had considered leaving before his first month was out.\n\nWhen I raised this with our managers, the response was reasonable. New roles take time to settle, they said, and a job description had been circulated. Staff who were unsure could always ask. There is some truth in this, and I do not want to excuse my own team. Curiosity about the people we work beside is part of being a professional, and nobody on my ward asked Joel directly what he had been trained to do. But a document saved in a shared folder is not a briefing. Nurses at the start of a twelve-hour shift do not go looking for policy; they work with what they have been told, and they had been told nothing.\n\nUnderneath the confusion lay something less comfortable. Several experienced nurses suspected that Joel's post had been created to save money, and that roles like his would gradually take the place of registered staff. I cannot say whether that fear is justified across the service, but I can say that silence fed it. When a change in skill mix arrives without explanation, people supply their own, and the explanation they supply is usually the most threatening one available. This suspicion, more than any lack of goodwill, was what kept Joel at arm's length during those first weeks.\n\nWhat changed things was almost embarrassingly simple. At a fifteen-minute huddle, Joel described his training, the tasks he had been assessed as competent to carry out and the ones he had not. We put a single page summarising his role in the staff room, named a registered nurse to supervise him on each shift, and added his role to the allocation board so that whoever was in charge could plan around it. Within a fortnight, the questions had stopped, and so, as far as I could tell, had the suspicion. Colleagues began asking him for help with the very tasks they had previously kept from him.\n\nPatients had been confused too, and we had not thought to ask them. Several had assumed Joel was a doctor because he did not wear the same uniform as the healthcare assistants; one had asked him about her operation and been puzzled when he referred her to the nurse in charge. People in hospital are entitled to know who is caring for them and what that person can and cannot do. We now introduce every member of the team by role as well as by name, and Joel does so himself, with a short explanation that he has become rather good at giving.\n\nI am not against new roles. A team with a thoughtful mix of skills can give better care than one in which registered staff try to do everything themselves, and Joel has made our ward safer, not less safe. But the responsibility for making a new role work cannot rest with the person who holds it. Those who design and introduce such posts owe the existing team a clear account of what has changed and why. That is a matter of safety as much as courtesy. Without that, even a well-trained colleague becomes a badge that nobody can read."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "In the first paragraph, the writer suggests that colleagues treated Joel differently because",
          "answer": "d",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "they disapproved of the training he had received."
            },
            {
              "id": "b",
              "text": "he had refused several of the tasks they gave him."
            },
            {
              "id": "c",
              "text": "they were too busy to work alongside a newcomer."
            },
            {
              "id": "d",
              "text": "nobody had told them what his role actually involved."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "In the second paragraph, what does the writer say about being asked to work outside one's role?",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "Joel agreed to such requests to avoid upsetting colleagues."
            },
            {
              "id": "b",
              "text": "It wasted the skills Joel had spent two years gaining."
            },
            {
              "id": "c",
              "text": "Refusing such requests takes confidence that new staff may lack."
            },
            {
              "id": "d",
              "text": "It happened less often to Joel than being given too little."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "In the third paragraph, the writer accepts that",
          "answer": "b",
          "kind": [
            "paragraph",
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "the job description should never have been circulated."
            },
            {
              "id": "b",
              "text": "the team could have asked Joel about his own training."
            },
            {
              "id": "c",
              "text": "managers had deliberately kept information from the ward."
            },
            {
              "id": "d",
              "text": "nurses ought to read new policies before each shift."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "In the fourth paragraph, the phrase \"This suspicion\" refers to",
          "answer": "a",
          "kind": [
            "reference"
          ],
          "options": [
            {
              "id": "a",
              "text": "the belief that Joel's post was a way of cutting costs"
            },
            {
              "id": "b",
              "text": "Joel's doubt about whether his colleagues welcomed him"
            },
            {
              "id": "c",
              "text": "managers' worry that registered nurses would resign"
            },
            {
              "id": "d",
              "text": "the writer's uncertainty about the service as a whole"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "In the fourth paragraph, what point does the writer make about silence?",
          "answer": "b",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "It protected staff from news about possible job losses."
            },
            {
              "id": "b",
              "text": "It led staff to assume the worst about the change."
            },
            {
              "id": "c",
              "text": "It showed that managers had no clear plan for the ward."
            },
            {
              "id": "d",
              "text": "It proved that the fear about registered staff was justified."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "In the fifth paragraph, what made the difference to Joel's position?",
          "answer": "c",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "a longer induction course that Joel attended away from the ward"
            },
            {
              "id": "b",
              "text": "a revised job description sent to every member of staff"
            },
            {
              "id": "c",
              "text": "a short team meeting and practical steps making his role visible"
            },
            {
              "id": "d",
              "text": "a decision to limit Joel to tasks colleagues already trusted"
            }
          ]
        },
        {
          "id": "q7",
          "stem": "In the sixth paragraph, the writer suggests that patients",
          "answer": "a",
          "kind": [
            "paragraph"
          ],
          "options": [
            {
              "id": "a",
              "text": "had been left unsure about Joel's place in the team."
            },
            {
              "id": "b",
              "text": "had complained formally about the uniform Joel wore."
            },
            {
              "id": "c",
              "text": "preferred to ask doctors rather than nurses about operations."
            },
            {
              "id": "d",
              "text": "were told about Joel's role before he joined the ward."
            }
          ]
        },
        {
          "id": "q8",
          "stem": "What does the writer conclude in the final paragraph?",
          "answer": "d",
          "kind": [
            "writer"
          ],
          "options": [
            {
              "id": "a",
              "text": "New roles should be introduced only when registered staff are short."
            },
            {
              "id": "b",
              "text": "New colleagues should explain their own roles to the existing team."
            },
            {
              "id": "c",
              "text": "A wider mix of skills tends to make wards less safe than before."
            },
            {
              "id": "d",
              "text": "Those who create new roles must explain them clearly to teams."
            }
          ]
        }
      ]
    }
  }
];
