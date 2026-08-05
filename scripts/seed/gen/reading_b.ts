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
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Allergy alert documentation",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "allergy-alert",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Every patient must have their allergy status confirmed and recorded at admission, including the specific substance and the nature of the reaction. 'No known allergies' is itself a positive entry and must be selected rather than left blank, since a blank field cannot be distinguished from an omission. Where an allergy is identified, the alert is to be activated in the electronic record so that prescribing of the relevant agent is blocked. A reported intolerance, such as nausea, should be recorded as such and not mislabelled as an allergy."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The passage explains that 'no known allergies' must be actively recorded because",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "a blank field cannot be told apart from a missed entry."
            },
            {
              "id": "b",
              "text": "it automatically blocks prescribing of all medicines."
            },
            {
              "id": "c",
              "text": "intolerances such as nausea should be entered as allergies."
            }
          ]
        }
      ]
    },
    "guidanceNote": "An empty field is ambiguous, so 'no known allergies' must be chosen positively; intolerances are recorded separately, not as allergies."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Audit memo on documentation timing",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "audit-memo",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "The recent notes audit found that entries were generally accurate but frequently made several hours after the care was delivered, with some written retrospectively at the end of a shift. Contemporaneous recording matters because memory fades and because colleagues taking over rely on an up-to-date record. The audit also noted entries that were not timed or signed. From next month, spot checks will focus less on volume of detail and more on whether each entry is timely, timed, and attributable."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The memo suggests that the main concern raised by the audit was that notes were",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "inaccurate in the clinical detail they contained."
            },
            {
              "id": "b",
              "text": "recorded long after care rather than at the time."
            },
            {
              "id": "c",
              "text": "too brief to meet the required volume of detail."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The audit found notes accurate but not contemporaneous; the focus is timeliness and attribution, not volume of detail."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Clinical escalation policy",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "escalation-policy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Where a patient's early warning score reaches the escalation threshold, the bedside nurse must call the responsible doctor and document the time of the call. If there is no review within thirty minutes, the nurse is required to escalate further, to the registrar or the critical care outreach team, without waiting for the first clinician to respond. The policy makes plain that the obligation to escalate rests with the staff member at the bedside and cannot be deferred on the grounds that a call has already been placed."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "If the responsible doctor has not attended within thirty minutes, the nurse should",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "wait longer, since a call has already been made."
            },
            {
              "id": "c",
              "text": "lower the early warning score and continue monitoring."
            },
            {
              "id": "b",
              "text": "escalate further to the registrar or outreach team."
            }
          ]
        }
      ]
    },
    "guidanceNote": "A placed call does not discharge the duty; if there is no timely review, the bedside nurse must escalate further without waiting."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Complaints procedure acknowledgement",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "complaints-procedure",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A formal complaint should be acknowledged in writing within three working days of receipt. The acknowledgement does not need to contain findings; its role is simply to confirm that the concern has been received and to explain how the investigation will proceed. A full written response is expected within twenty-five working days, and if that deadline cannot be met the complainant must be told the reason for the delay. Verbal concerns resolved on the spot to the person's satisfaction need not enter the formal process."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The acknowledgement sent within three working days is intended to",
          "answer": "b",
          "options": [
            {
              "id": "b",
              "text": "confirm receipt and explain how the matter will be handled."
            },
            {
              "id": "a",
              "text": "set out the conclusions of the investigation."
            },
            {
              "id": "c",
              "text": "tell the complainant why the final response is delayed."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The acknowledgement confirms receipt and process only; findings belong in the 25-day response, and delay reasons are given separately when that deadline slips."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Consent policy for capacity assessment",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "consent-policy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Consent for any procedure is valid only when the patient has been given enough information, is free from coercion, and has the capacity to decide. Capacity is presumed in every adult unless an assessment demonstrates otherwise, and it is decision-specific rather than global. A patient who declines a treatment that staff consider advisable has not, by that fact alone, shown a lack of capacity. The assessing clinician must record the reasoning behind any conclusion that capacity is absent."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the policy, a patient refusing recommended treatment",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "should be presumed to lack capacity until reassessed."
            },
            {
              "id": "b",
              "text": "is not, for that reason alone, regarded as lacking capacity."
            },
            {
              "id": "c",
              "text": "may proceed without the clinician recording any reasoning."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Refusal of advisable treatment does not itself prove incapacity; capacity is presumed and decision-specific, and reasoning must always be documented."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Controlled drugs second check",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "controlled-drugs",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Schedule 2 controlled drugs must be administered and witnessed by two registered practitioners, both of whom sign the register at the point of administration. The running balance is to be reconciled against the stock at every shift handover, not only when a discrepancy is suspected. Any difference between the recorded balance and the physical count must be escalated immediately to the senior nurse on duty. Pre-signing the register before the drug is given is strictly prohibited."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The main purpose of this section of the policy is to set out",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "how often new stock of controlled drugs should be ordered."
            },
            {
              "id": "c",
              "text": "which staff are permitted to prescribe Schedule 2 medicines."
            },
            {
              "id": "b",
              "text": "the checking and signing requirements for administering controlled drugs."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The passage is about controls on administration and record-keeping (two witnesses, reconciliation, no pre-signing), not ordering stock or prescribing rights."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Data protection record access",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "data-protection",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Access to a patient's electronic record is permitted only where there is a direct care relationship or another lawful basis. Curiosity, including viewing the record of a colleague, relative, or public figure, is never an acceptable reason, even if no information is shared onward. Every access is logged and audited, and the system flags records opened by staff with no documented involvement in that person's care. Disciplinary action may follow regardless of whether the data was disclosed to anyone else."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The passage stresses that viewing a record out of curiosity is unacceptable because",
          "answer": "b",
          "options": [
            {
              "id": "b",
              "text": "access without a care relationship is prohibited even if nothing is shared."
            },
            {
              "id": "a",
              "text": "it is only an offence when the information is passed to others."
            },
            {
              "id": "c",
              "text": "the system cannot identify who has opened a particular record."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The breach is the access itself without a lawful basis, not whether data was shared; all access is logged and identifiable."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Equipment recall action notice",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "STRETCH",
    "topicTag": "equipment-recall",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Following a manufacturer field safety notice, all infusion pumps with serial numbers beginning FX7 are to be removed from clinical use immediately and quarantined in the equipment store. Units already connected to a patient may complete the current infusion under direct observation, after which they must not be reused. Replacement pumps from the loan pool should be requested through biomedical engineering. Do not return affected pumps to the manufacturer until a collection reference has been issued by the medical devices team."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "An affected pump that is currently running an infusion should be",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "disconnected at once and sent straight back to the manufacturer."
            },
            {
              "id": "b",
              "text": "allowed to finish the infusion under observation, then withdrawn from use."
            },
            {
              "id": "c",
              "text": "kept in service until a loan-pool replacement arrives."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Pumps mid-infusion may finish under observation then be withdrawn; returns wait for a collection reference, and loan replacements are requested separately."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Incident reporting timeframe",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "incident-reporting",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "All clinical incidents, including near misses, must be logged on the electronic reporting system within 24 hours of the event being identified. Where an incident has resulted in moderate or severe harm, the ward manager must also be notified verbally before the end of the shift. Staff should record only the facts observed and avoid attributing blame to individuals. A separate paper form is no longer accepted and will be returned for re-entry."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The notice makes clear that staff reporting a near miss should",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "tell the ward manager verbally before the shift ends."
            },
            {
              "id": "c",
              "text": "submit the older paper form alongside the electronic entry."
            },
            {
              "id": "a",
              "text": "complete the electronic log within one day of identifying it."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The 24-hour electronic log applies to all incidents; verbal notification is only for moderate or severe harm, and the paper form is no longer accepted."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Infection control hand hygiene memo",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "infection-control",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A reminder to all clinical staff: alcohol-based hand rub is effective for most routine contacts, but it does not remove spores. When caring for a patient with suspected or confirmed Clostridioides difficile, you must wash with soap and water rather than relying on gel. Gloves are an addition to hand hygiene, not a substitute for it, and hands must be decontaminated after gloves are removed. Audit results for the past quarter showed gel being used in isolation rooms where washing was required."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "When caring for a patient with C. difficile, staff are told to",
          "answer": "b",
          "options": [
            {
              "id": "b",
              "text": "wash with soap and water rather than rely on gel."
            },
            {
              "id": "a",
              "text": "use alcohol-based hand rub as their main method."
            },
            {
              "id": "c",
              "text": "treat gloves as a replacement for hand decontamination."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Gel does not remove spores, so soap-and-water washing is required for C. difficile; gloves never replace hand hygiene."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Interpreter use during clinical consultations",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "language-access",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Memo to all clinical staff: When a patient has limited proficiency in the language of care, a professional interpreter must be arranged rather than relying on family members or bilingual colleagues. Family members may unintentionally summarise or soften information, and using them can compromise both accuracy and confidentiality. A child should never be asked to interpret. If a professional interpreter is unavailable in person, the approved telephone interpreting line is used. Staff should address and look at the patient throughout, not the interpreter, and should pause regularly to allow accurate relay. The interpreter's involvement is documented in the clinical record."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the memo, the main reason for not using family members as interpreters is that they",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "are usually unwilling to attend appointments at short notice."
            },
            {
              "id": "b",
              "text": "may alter the information and reduce accuracy and confidentiality."
            },
            {
              "id": "c",
              "text": "cannot be documented in the clinical record afterwards."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Part B questions test the gist or purpose of a workplace text. Watch for distractors that mention real details from the text but answer a different question than the one asked."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Medicines policy extract",
    "prompt": "Read the workplace text and choose the answer which best fits the meaning.",
    "difficulty": "CORE",
    "topicTag": "policy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Where a medicine is omitted, the reason must be recorded on the chart using the approved code. An omission without a documented reason is treated as a medication incident and must be reported, even if no harm resulted."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "According to the text, an undocumented omission must be:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "ignored if no harm resulted"
            },
            {
              "id": "c",
              "text": "corrected at the next drug round only"
            },
            {
              "id": "b",
              "text": "reported as a medication incident"
            }
          ]
        }
      ]
    },
    "guidanceNote": "Read to the end — the key condition often sits in the final clause."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Sharps disposal at point of use",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "sharps-disposal",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Sharps must be disposed of by the person who used them, at the point of use, and never passed to another member of staff for disposal. Needles are not to be re-sheathed by hand. Containers should be assembled correctly, dated on opening, and closed and replaced once the fill line is reached rather than overfilled. A container left above the marked line is a hazard and must be sealed immediately, even if the shift's supply of replacements is running low."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The text states that responsibility for disposing of a sharp lies with",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "the person who used it, at the point of use."
            },
            {
              "id": "b",
              "text": "whichever colleague is nearest to the sharps container."
            },
            {
              "id": "c",
              "text": "the member of staff who last replaced the container."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The user disposes of their own sharp at point of use; sharps are never handed on, and containers are sealed at the fill line, not overfilled."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Staff rostering swap email",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "staff-rostering",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Dear team, a reminder about shift swaps for the coming rota period. Any swap must be agreed between two staff of the same band and then submitted on the online roster for approval before it can take effect. Please do not assume a swap is confirmed simply because a colleague has agreed informally. Requests received less than 48 hours before the shift cannot be guaranteed, as cover levels need to be checked first. Annual leave requests follow a separate process and should not be entered as swaps."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The email indicates that a shift swap becomes valid only once it has been",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "agreed informally between the two colleagues involved."
            },
            {
              "id": "b",
              "text": "submitted online and approved by the roster manager."
            },
            {
              "id": "c",
              "text": "entered through the annual leave request process."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Informal agreement is not enough; the swap needs online submission and approval, and leave uses a different process entirely."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "Part B — Visiting policy on protected mealtimes",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "FOUNDATION",
    "topicTag": "visiting-policy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "To support patients to eat well, the ward operates protected mealtimes between 12:00 and 13:00 and again from 17:30 to 18:30. General visiting is suspended during these periods so that staff can give attention to those who need help eating. Relatives who wish to assist their own family member with a meal are welcome and should speak to the nurse in charge on arrival. Outside these hours, visiting is open from 14:00 to 20:00."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "During protected mealtimes, a relative who wants to help their family member eat should",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "wait until general visiting reopens at 14:00."
            },
            {
              "id": "c",
              "text": "assume visiting is fully suspended for everyone without exception."
            },
            {
              "id": "b",
              "text": "speak to the nurse in charge on arrival."
            }
          ]
        }
      ]
    },
    "guidanceNote": "General visiting is paused at mealtimes, but relatives helping their own family member are an explicit exception and should check in with the nurse in charge."
  },

  // ── OET Form 1 (canonical ingest 2026-08-04) ──
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "OET Form 1 · Reading Part B — Controlled-drugs policy",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "policy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "When administering a controlled drug, two registered staff must independently check the drug, dose and patient, and both must sign the register at the time of administration - not before preparing and not afterwards. Any discrepancy in the running balance must be reported to pharmacy immediately, however small."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the policy require about signing the register?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "both staff sign before preparing the drug"
            },
            {
              "id": "b",
              "text": "both staff sign at the time of administration"
            },
            {
              "id": "c",
              "text": "one signs while the other only checks"
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
    "title": "OET Form 1 · Reading Part B — Sharps memo",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "memo",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Following two needlestick incidents this quarter, sharps bins must now be replaced when three-quarters full, not when completely full. Needles must never be resheathed. Report any injury the same day, whether or not the source is known."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the main change introduced by the memo?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "replacing sharps bins earlier, at three-quarters full"
            },
            {
              "id": "b",
              "text": "resheathing needles more carefully"
            },
            {
              "id": "c",
              "text": "reporting injuries only when the source is known"
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
    "title": "OET Form 1 · Reading Part B — Hand-hygiene guideline",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "guideline",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Alcohol hand rub suits most situations but is not effective against spores. Where a patient has diarrhoea that may be due to C. difficile, soap and water must be used, because the physical action removes spores that rub cannot kill."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Why must soap and water be used with suspected C. difficile?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "rub is unavailable on those wards"
            },
            {
              "id": "b",
              "text": "rub takes longer to apply"
            },
            {
              "id": "c",
              "text": "rub does not remove spores"
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
    "title": "OET Form 1 · Reading Part B — Medicine label",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "label",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Store below 25 degrees C. Once opened, use within 28 days and discard any remaining contents, even if the carton's printed expiry date has not passed. Do not freeze."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the label say about the opened medicine?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "discard it 28 days after opening"
            },
            {
              "id": "b",
              "text": "use it until the carton expiry date"
            },
            {
              "id": "c",
              "text": "freeze it to extend its life"
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
    "title": "OET Form 1 · Reading Part B — Visitor notice",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "notice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "To protect patients with weakened immune systems, visitors who have had sickness or diarrhoea should not visit until they have been free of symptoms for 48 hours. Fresh flowers are not permitted on this ward."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "When may a visitor who has had diarrhoea return?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "as soon as they feel better"
            },
            {
              "id": "b",
              "text": "after 48 hours free of symptoms"
            },
            {
              "id": "c",
              "text": "only with staff permission"
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
    "title": "OET Form 1 · Reading Part B — Handover note",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "handover",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Mr Lee is now apyrexial and his CRP is falling, so the team plans to switch his antibiotics from IV to oral today - provided he tolerates breakfast. His cannula is to be removed once the switch is confirmed."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the condition for switching Mr Lee to oral antibiotics?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "his temperature rising again"
            },
            {
              "id": "b",
              "text": "removing his cannula first"
            },
            {
              "id": "c",
              "text": "that he tolerates breakfast"
            }
          ]
        }
      ]
    }
  },
  // ── OET Form 2 (canonical ingest 2026-08-04) ──
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "OET Form 2 · Reading Part B — Consent",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "consent",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A signature on a consent form is not consent in itself; it records that a conversation happened. Valid consent requires capacity, relevant information including material risks, and voluntariness. If any is missing, the signature is worthless."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does a signed form represent?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "consent in itself"
            },
            {
              "id": "b",
              "text": "a record that a discussion took place"
            },
            {
              "id": "c",
              "text": "proof the risks were accepted"
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
    "title": "OET Form 2 · Reading Part B — Vaccine fridge log",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "cold-chain",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Vaccines must be stored between 2 and 8 degrees C. If the fridge has been out of range, do not use or discard the stock - quarantine it, label it 'do not use', and contact the immunisation lead. Some vaccines survive a brief excursion; others do not."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What should staff do if the fridge goes out of range?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "discard them at once"
            },
            {
              "id": "b",
              "text": "keep using them if they look fine"
            },
            {
              "id": "c",
              "text": "quarantine them and seek advice"
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
    "title": "OET Form 2 · Reading Part B — Terminology memo",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "documentation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Please stop using 'bedsore' in notes. Use 'pressure injury' and record the stage. 'Bedsore' implies only bed-bound people are affected, when prolonged sitting is an equally common cause."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Why is the term 'bedsore' discouraged?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "it wrongly implies only bed-bound people are affected"
            },
            {
              "id": "b",
              "text": "it offends patients"
            },
            {
              "id": "c",
              "text": "it is too informal"
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
    "title": "OET Form 2 · Reading Part B — Protected breaks",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "rota",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "From next month the long-day shift includes a protected 30-minute break away from the ward. This is not optional. Fatigue-related error is a patient-safety issue; breaks are part of safe practice, not a perk."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "How are the breaks described?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "an optional benefit"
            },
            {
              "id": "b",
              "text": "part of safe practice"
            },
            {
              "id": "c",
              "text": "a reward"
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
    "title": "OET Form 2 · Reading Part B — Specimen labelling",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "specimen",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Label the sample at the bedside, in front of the patient, immediately after taking it - never in advance, never at the desk. A pre-labelled tube is the commonest cause of wrong-patient results."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "When must the sample be labelled?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "at the bedside, right after collection"
            },
            {
              "id": "b",
              "text": "at the desk afterwards"
            },
            {
              "id": "c",
              "text": "in advance to save time"
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
    "title": "OET Form 2 · Reading Part B — Safe discharge",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "discharge",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Do not discharge Mr Ahmed until pharmacy has delivered his blister pack and the district-nurse referral is confirmed. He lives alone and manages insulin with support; a gap in that support isn't safe."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What must happen before Mr Ahmed is discharged?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "his family must collect him"
            },
            {
              "id": "b",
              "text": "his insulin must be stopped"
            },
            {
              "id": "c",
              "text": "the blister pack and nurse referral must be arranged"
            }
          ]
        }
      ]
    }
  },
  // ── OET Form 3 (canonical ingest 2026-08-05) ──
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "title": "OET Form 3 · Reading Part B — Penicillin allergy label",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "allergy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Many 'penicillin allergies' on our records are not true allergies but old side effects like nausea, or a childhood rash no one can now verify. An inaccurate label matters: it pushes prescribers towards second-choice antibiotics that are often less effective and broader-spectrum. Where the history is doubtful, refer for proper allergy assessment rather than carrying the label for life."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Why does an inaccurate penicillin-allergy label matter?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "it leads to less effective, broader-spectrum antibiotics"
            },
            {
              "id": "b",
              "text": "it upsets patients"
            },
            {
              "id": "c",
              "text": "it is illegal to record"
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
    "title": "OET Form 3 · Reading Part B — Controlled drugs",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "controlled-drugs",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Controlled drugs must be checked and signed by two registered staff at the point of administration, with the stock balance confirmed against the register. If the count does not match, do not proceed - report it immediately. A discrepancy is never something to 'sort out later'."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What should staff do if the controlled-drug count does not match?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "adjust the register to fit"
            },
            {
              "id": "b",
              "text": "stop and report it immediately"
            },
            {
              "id": "c",
              "text": "sort it out at the end of the shift"
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
    "title": "OET Form 3 · Reading Part B — Early warning scores",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "patient-safety",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "The early warning score is only useful if a high score triggers action. A rising score with no documented response is worse than no score at all, because it shows the warning was seen and ignored. Escalate according to the chart - do not wait to see whether the patient improves on their own."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the text say is worse than having no early warning score?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "a consistently low score"
            },
            {
              "id": "b",
              "text": "a score checked twice"
            },
            {
              "id": "c",
              "text": "a rising score with no response"
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
    "title": "OET Form 3 · Reading Part B — Bare below the elbows",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "infection-control",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "From Monday, all clinical staff must be bare below the elbows - no long sleeves, wristwatches, or rings other than a plain band. This is not about appearance: cuffs and jewellery harbour organisms and get in the way of properly washing the wrists and forearms."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Why is the 'bare below the elbows' rule in place?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "cuffs and jewellery harbour organisms and hinder handwashing"
            },
            {
              "id": "b",
              "text": "to look more professional"
            },
            {
              "id": "c",
              "text": "to reduce laundry costs"
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
    "title": "OET Form 3 · Reading Part B — Confidentiality in public areas",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "confidentiality",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A reminder: do not discuss patients in lifts, corridors, or the canteen. It is easy to forget who is standing beside you - a patient's relative, or a colleague of the person you are describing. Confidentiality does not switch off when you leave the ward."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the main point of the reminder?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "simply speak more quietly"
            },
            {
              "id": "b",
              "text": "avoid discussing patients in public areas"
            },
            {
              "id": "c",
              "text": "use only first names"
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
    "title": "OET Form 3 · Reading Part B — Verbal orders",
    "prompt": "Read the text and choose the answer (A, B or C) which fits best.",
    "difficulty": "FOUNDATION",
    "topicTag": "prescribing",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Telephone and verbal medication orders are error-prone and should be avoided where possible. Where unavoidable, write the order down and read it back to the prescriber, including the dose and route, and have it countersigned within 24 hours. 'I thought you said' is not a defence."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What must you do when taking a verbal medication order?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "act on it from memory"
            },
            {
              "id": "b",
              "text": "wait 24 hours before giving it"
            },
            {
              "id": "c",
              "text": "write it down and read it back"
            }
          ]
        }
      ]
    }
  }
];
