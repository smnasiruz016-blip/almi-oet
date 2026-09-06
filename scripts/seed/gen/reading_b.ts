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
    "slug": "rea-b-allergy-alert-documentation",
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
    "slug": "rea-b-audit-memo-on-documentation-timing",
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
    "slug": "rea-b-clinical-escalation-policy",
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
    "slug": "rea-b-complaints-procedure-acknowledgement",
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
    "slug": "rea-b-consent-policy-for-capacity-assessment",
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
    "slug": "rea-b-controlled-drugs-second-check",
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
    "slug": "rea-b-data-protection-record-access",
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
    "slug": "rea-b-equipment-recall-action-notice",
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
    "slug": "rea-b-incident-reporting-timeframe",
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
    "slug": "rea-b-infection-control-hand-hygiene-memo",
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
    "slug": "rea-b-interpreter-use-during-clinical-consultations",
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
    "slug": "rea-b-medicines-policy-extract",
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
    "slug": "rea-b-sharps-disposal-at-point-of-use",
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
    "slug": "rea-b-staff-rostering-swap-email",
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
    "slug": "rea-b-visiting-policy-on-protected-mealtimes",
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
    "slug": "rea-b-f1-controlled-drugs-policy",
    "form": "form-1",
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
    "slug": "rea-b-f1-sharps-memo",
    "form": "form-1",
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
    "slug": "rea-b-f1-hand-hygiene-guideline",
    "form": "form-1",
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
    "slug": "rea-b-f1-medicine-label",
    "form": "form-1",
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
    "slug": "rea-b-f1-visitor-notice",
    "form": "form-1",
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
    "slug": "rea-b-f1-handover-note",
    "form": "form-1",
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
    "slug": "rea-b-f2-consent",
    "form": "form-2",
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
    "slug": "rea-b-f2-vaccine-fridge-log",
    "form": "form-2",
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
    "slug": "rea-b-f2-terminology-memo",
    "form": "form-2",
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
    "slug": "rea-b-f2-protected-breaks",
    "form": "form-2",
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
    "slug": "rea-b-f2-specimen-labelling",
    "form": "form-2",
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
    "slug": "rea-b-f2-safe-discharge",
    "form": "form-2",
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
    "slug": "rea-b-f3-penicillin-allergy-label",
    "form": "form-3",
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
    "slug": "rea-b-f3-controlled-drugs",
    "form": "form-3",
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
    "slug": "rea-b-f3-early-warning-scores",
    "form": "form-3",
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
    "slug": "rea-b-f3-bare-below-the-elbows",
    "form": "form-3",
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
    "slug": "rea-b-f3-confidentiality-in-public-areas",
    "form": "form-3",
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
    "slug": "rea-b-f3-verbal-orders",
    "form": "form-3",
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
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-missed-doses-on-the-drug-chart",
    "title": "Part B — Missed doses on the drug chart",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "missed-doses-on",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Every dose that is not given must be accounted for on the chart at the time, using the omission code that applies, and never left as an empty box. An empty box records nothing. It cannot be told apart from a dose that was given and not signed for, and the next person to read the chart has no way of deciding which of the two happened. Where a dose is omitted because the medicine was unavailable, the code is entered and the pharmacy team is contacted during that shift, rather than at the next routine round. Where a dose is omitted because the patient declined it, the reason the patient gave is written in the notes and not on the chart. Two consecutive omissions of any critical medicine are escalated to the prescriber before the third dose falls due."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The passage states that an empty box on the chart is unacceptable because",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "a signed dose and an unsigned one look the same."
            },
            {
              "id": "b",
              "text": "the pharmacy team cannot then supply a replacement in time."
            },
            {
              "id": "c",
              "text": "the patient's own reason must be written on the chart."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The passage names the ambiguity itself as the fault; the pharmacy and the patient's reason are separate rules in the same text."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-checking-the-position-of-a-feeding-tube",
    "title": "Part B — Checking the position of a feeding tube",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "checking-the-position",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "The position of a newly placed tube is confirmed before anything at all is passed down it, including water. Aspirate is obtained and tested on pH indicator paper made for human gastric aspirate, and a reading of 5.5 or below allows feeding to begin. Where no aspirate can be obtained, turn the patient onto their side and try again after fifteen to twenty minutes. Advancing or withdrawing the tube by ten centimetres may also help. Air must not be pushed down the tube and listened for with a stethoscope. That test has been withdrawn because it cannot distinguish the stomach from the lung. If the pH is above 5.5, or no aspirate is obtained after two attempts, an X-ray is requested and reported by somebody trained to confirm the position. Record which of these was done and at what time, so that the next person does not begin again from the start."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline says the stethoscope test is no longer used because it",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "needs equipment that is not always available on the ward."
            },
            {
              "id": "b",
              "text": "cannot tell the stomach apart from the lung."
            },
            {
              "id": "c",
              "text": "delays feeding by fifteen to twenty minutes."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The reason given is that the test cannot separate two placements; the delay belongs to the aspirate attempt, not to the withdrawn test."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-memo-totalling-the-fluid-balance-chart",
    "title": "Part B — Memo: totalling the fluid balance chart",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "memo-totalling-the",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "From Monday, fluid balance charts will be totalled at the end of every shift rather than once in twenty-four hours. Write the running total in the box provided and sign it, so that the next shift begins with a figure instead of a column of entries to add up. Please record what was actually taken and not what was offered. A jug left at the bedside is not intake, and a cup half returned is not a full cup. Output includes the losses that are easiest to forget: vomit, drain fluid, stoma output and heavy wound exudate. Where an amount cannot be measured, write what it was and state that it was not measured, rather than leaving the line blank. Totals written in pencil, or written on a scrap of paper to be copied up later, do not count as totals at all."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The memo asks staff to change the way charts are",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "totalled, so that each shift inherits a figure."
            },
            {
              "id": "b",
              "text": "signed, so that every entry can be traced to a person."
            },
            {
              "id": "c",
              "text": "stored, so that the next shift is able to find them quickly."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Signing is mentioned, but as part of the new totalling routine rather than as the change itself; storage is not mentioned at all."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-notice-quality-control-on-blood-glucose-meters",
    "title": "Part B — Notice: quality control on blood glucose meters",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "notice-quality-control",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Every meter on the ward must have its internal quality control run at the start of each day on which it is used, and the result logged. A meter that has not been controlled that day is not used on a patient, whatever the hurry. Control solutions are dated when they are opened and discarded three months later, or at the manufacturer's expiry date if that falls first. A solution kept beyond either date will give a result that looks entirely normal and means nothing. If a control result falls outside the printed range, the meter is taken out of service and labelled. Do not leave it on the trolley for somebody else to find. Report it the same day. Log the result even when it passes. A run with no record is the same as a run that never happened."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The notice instructs that a meter failing its control must be",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "reported to the manufacturer within three months."
            },
            {
              "id": "b",
              "text": "left on the trolley for somebody else to check."
            },
            {
              "id": "c",
              "text": "labelled and removed from service."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The three-month rule belongs to the control solution, not the meter, and leaving it on the trolley is exactly what the notice forbids."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-policy-extract-patients-with-latex-allergy",
    "title": "Part B — Policy extract: patients with latex allergy",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "policy-extract-patients",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A patient with a known or suspected latex allergy is nursed with latex-free equipment from the moment of admission, and the alert is added to the record before any procedure is booked. Latex-free does not mean powder-free. Powdered latex gloves are not used anywhere in this department, because the powder carries latex protein into the air and a patient in an adjoining bay can react without ever having been touched. Theatre is informed at the point of listing and not on the morning of surgery, so that the case can be placed first on the list and the room can be left standing empty overnight. Staff who develop a rash after using gloves report it to occupational health, rather than quietly changing glove brand on their own. Tell the patient what has been arranged for them, and check that they can repeat it back before they go for the procedure."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The policy explains that theatre is told at the point of listing so that the case can be",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "cancelled if latex-free equipment cannot be found."
            },
            {
              "id": "b",
              "text": "placed first, with the room left empty overnight."
            },
            {
              "id": "c",
              "text": "performed by staff who have no history of rash."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The listing rule exists to buy the empty room and the first slot; the rash rule is about staff and is unconnected to the timing of the list."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-a-resuscitation-decision-when-the-patient-moves",
    "title": "Part B — A resuscitation decision when the patient moves",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "a-resuscitation-decision",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A decision not to attempt resuscitation is recorded on the form, and the form travels with the patient. It is not valid on its own once the patient moves into a different service: the receiving team reviews it and either adopts it or replaces it, and records which of the two it did. The decision concerns cardiopulmonary resuscitation and nothing else. It does not limit antibiotics, fluids, pain relief, admission to hospital or any other treatment, and staff who read it as a general ceiling of care have misread it. The conversation with the patient, or with those close to a patient who lacks capacity, is recorded with the date and with who was present. A form that has no conversation behind it will not survive a review. Keep the original in the notes, and do not rely on a photocopy travelling separately in an envelope."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The passage states that a form arriving with a patient from another service",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "also limits antibiotics, fluids and admission to hospital."
            },
            {
              "id": "b",
              "text": "remains valid without any review by the new team."
            },
            {
              "id": "c",
              "text": "must be reviewed, then adopted or replaced."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The text says explicitly that the decision covers resuscitation only, and that validity does not carry across on its own."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-policy-extract-when-to-refer-a-safeguarding-concern",
    "title": "Part B — Policy extract: when to refer a safeguarding concern",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "policy-extract-when",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A concern is referred when you believe that an adult with care and support needs is experiencing, or is at risk of, abuse or neglect, and cannot protect themselves. You do not need proof, and you do not need to have decided that abuse has taken place. That decision belongs to the safeguarding team. Refer the concern; do not investigate it. Asking a series of questions to satisfy yourself first can contaminate an account that may be needed later. Tell the person that you are making a referral, unless telling them would place them or somebody else at greater risk. Where you do not tell them, record the reason. Referrals are made the same working day. A concern held overnight so that it can be raised on the ward round is a concern that has been delayed."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The policy states that a member of staff who has a concern should",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "refer it without first establishing that abuse occurred."
            },
            {
              "id": "b",
              "text": "question the person until the account is clear enough."
            },
            {
              "id": "c",
              "text": "wait for the ward round before making the referral."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Both other options are named in the text as things not to do — questioning contaminates the account, and holding the concern overnight is a delay."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-guideline-offering-a-chaperone",
    "title": "Part B — Guideline: offering a chaperone",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "guideline-offering-a",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A chaperone is offered for every intimate examination, whatever the gender of the patient and of the clinician, and the offer is made before the patient undresses. The chaperone is a trained member of staff. A relative or a friend may stay at the patient's request, but they do not count as the chaperone, and their presence does not remove the need to make the offer. Record the offer, the name and role of the chaperone, and, where the offer was declined, that it was declined. An entry reading only 'chaperone present' names nobody and proves nothing. Where no chaperone is available and the examination can wait, it waits. Offer again if the patient hesitates the first time. Somebody who says no because they feel they are causing trouble has not really been offered anything at all, and the second offer costs nothing to make."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The guideline states that a relative who stays during the examination",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "removes the need to record that an offer was made."
            },
            {
              "id": "b",
              "text": "does not take the place of a trained chaperone."
            },
            {
              "id": "c",
              "text": "must be named in the record as the chaperone."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The relative may stay, but the offer still stands and the recorded chaperone must be the trained member of staff."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-policy-extract-fitting-bed-rails",
    "title": "Part B — Policy extract: fitting bed rails",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "policy-extract-fitting",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Bed rails are not a routine measure, and they are not fitted because a patient is old, confused, or alone in a side room. They are fitted after an individual assessment which records the particular risk they are intended to reduce. Rails do not prevent falls. They prevent a patient rolling out of bed. A patient who is trying to get out of bed will climb over them, and a fall from that height is worse than the fall the rails were fitted to stop. Reassess whenever the patient's condition changes, and at least weekly. Record the reassessment even where nothing has changed, because an unrecorded reassessment cannot be told apart from one that never happened. Involve the patient in the decision wherever they are able to take part, and record what they said about it."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The extract warns that fitting rails for a patient who is trying to get out of bed",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "prevents that patient from rolling out of the bed."
            },
            {
              "id": "b",
              "text": "satisfies the requirement for a weekly reassessment."
            },
            {
              "id": "c",
              "text": "can make the fall worse."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Rolling out of bed is the risk rails do address, which is precisely why they do not help the patient who climbs."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-memo-the-forty-eight-hour-antimicrobial-review",
    "title": "Part B — Memo: the forty-eight hour antimicrobial review",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "memo-the-forty",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Every antimicrobial started in this hospital carries a review point at forty-eight hours, and the review is written on the chart even where the decision is to continue unchanged. Four outcomes are available: stop, switch from the drip to tablets, change the drug, or continue with a stated end date. Continue with no end date is not one of them. A course with no end date is the commonest way in which a three- day treatment becomes a three-week one. The indication is written on the chart when the drug is prescribed, and not added later from memory. A drug with no indication cannot be reviewed by anybody except the person who started it, and that person may be off duty. Name the person responsible for the review on the chart, so that it belongs to somebody rather than to the ward in general."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The memo states that continuing a drug without an end date",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "is how a short course quietly becomes a long one."
            },
            {
              "id": "b",
              "text": "is acceptable where the indication is already on the chart."
            },
            {
              "id": "c",
              "text": "requires the prescriber to be on duty for the review."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The indication rule and the absent prescriber are separate points in the memo, neither of which makes an open-ended course acceptable."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-prescribing-oxygen-on-the-drug-chart",
    "title": "Part B — Prescribing oxygen on the drug chart",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "prescribing-oxygen-on",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Oxygen is a drug and it is prescribed. The prescription states a target saturation range and not a fixed number of litres, because the amount the patient needs changes through the day while the target does not. The usual target is 94 to 98 per cent. For a patient at risk of carbon dioxide retention the target is 88 to 92 per cent, and that range is written on the chart at the moment the risk is identified, rather than after the first blood gas comes back. Record the delivery device and the flow rate at every observation round. A saturation written down without the oxygen beside it can be read a shift later as a patient who was breathing air. Sign the prescription in the same way as any other, and date it. An unsigned entry cannot be acted on safely by anybody else."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The passage explains that a target range is prescribed rather than a flow rate because",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "a blood gas is needed before the range can be chosen."
            },
            {
              "id": "b",
              "text": "what the patient needs changes although the target does not."
            },
            {
              "id": "c",
              "text": "the delivery device is recorded at every observation round."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The blood gas is named as something the range must not wait for, and the device recording is a separate instruction."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-extract-patient-property-and-valuables",
    "title": "Part B — Extract: patient property and valuables",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "extract-patient-property",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Property brought in with a patient is listed on the property form at the point of admission, by two members of staff, and the patient or their relative signs the list wherever they are able to. Valuables are not kept in the bedside locker. They go to the safe and the receipt goes in the notes. A locker key held at the nurses' station is not a safe. Where a patient arrives unconscious and alone, the list is still made by two members of staff and countersigned, and the fact that nobody could confirm it is written on the form. Do not record a yellow metal ring as a gold ring. You are recording what you can see. Give the patient or their relative a copy of the completed list before it goes anywhere else in the notes."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The extract states that a ring should be described by",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "the value that the patient's relative gives for it."
            },
            {
              "id": "b",
              "text": "the metal it is most likely to be made of."
            },
            {
              "id": "c",
              "text": "what can actually be seen."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The closing instruction draws the line between what is observed and what is assumed, whoever the assumption comes from."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-telling-a-patient-when-something-has-gone-wrong",
    "title": "Part B — Telling a patient when something has gone wrong",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "telling-a-patient",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Where a patient has come to moderate harm or worse, they are told. The conversation happens as soon as is practicable and in person, and it is not held back until the investigation has finished. What is known and what is not yet known are both said out loud. An apology is not an admission of liability, and no member of staff should be advised to withhold one. Write down what was said, who said it, who was present, and what the patient asked. Follow it in writing, setting out what will happen next and by when. Where the patient has died, the duty is owed to those who were close to them. Offer to go through it again with them a few days later. Very little of what is said in the first conversation is remembered afterwards."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The passage states that the conversation takes place",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "before the investigation has been completed."
            },
            {
              "id": "b",
              "text": "only once the facts are fully established."
            },
            {
              "id": "c",
              "text": "in writing rather than face to face."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The written follow-up comes after the conversation and does not replace it, and waiting for the full facts is what the passage rules out."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-separating-clinical-waste",
    "title": "Part B — Separating clinical waste",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "separating-clinical-waste",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Waste is separated at the point at which it is produced, and it is never sorted again afterwards. A bag that has been closed is not reopened. Sharps go into the rigid container whether or not they are contaminated, and a sharp found inside a waste bag is treated as an injury waiting to happen rather than as a sorting mistake. Cytotoxic and cytostatic waste has its own container and does not enter the ordinary clinical stream at any point. Bags are filled to three-quarters, closed with the tag, and labelled with the ward. An unlabelled bag cannot be traced back, and every unlabelled bag is a ward that will never be told. Wear the gloves and apron for the task, and take them off before touching anything else, including the door.\n\nA bag that has been left standing in a corridor while somebody goes to find the trolley has already stopped being anybody's responsibility."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The passage states that waste which has been bagged wrongly",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "is emptied out and separated again on the ward."
            },
            {
              "id": "b",
              "text": "stays as it is; the bag is not reopened."
            },
            {
              "id": "c",
              "text": "is labelled with the ward it came from and traced."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Labelling and tracing are how the ward is told afterwards, not a reason to open the bag."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_B",
    "profession": null,
    "slug": "rea-b-supervising-a-student-and-countersigning",
    "title": "Part B — Supervising a student and countersigning",
    "prompt": "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    "difficulty": "CORE",
    "topicTag": "supervising-a-student",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A student may carry out a task only where it is within the level they have reached, and where a registered member of staff has agreed to it beforehand. Agreement afterwards is not supervision. Countersigning means that the registered member of staff was present, or has satisfied themselves by some other means that the entry is accurate. It does not mean that the student is considered reliable in general. Do not countersign an administration you did not witness. A signature saying that a drug was checked when it was not is a false record, whatever was intended by it. A student who is asked to work beyond their level should say so, and should be thanked for saying so. Ask the student what they have already been signed off to do, and check it against the record rather than against their answer alone."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The passage states that countersigning an entry means the staff member",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "considers the student reliable in general."
            },
            {
              "id": "b",
              "text": "has agreed to the task after it was done."
            },
            {
              "id": "c",
              "text": "was present, or has checked the entry another way."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The passage rejects both the general judgement of the student and agreement given after the event."
  }
];
