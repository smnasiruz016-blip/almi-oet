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
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Aseptic non-touch technique",
    "prompt": "Skim the four short texts on aseptic non-touch technique. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "CORE",
    "topicTag": "hand-hygiene",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Aseptic non-touch technique protects key parts and key sites from contamination. The central rule is that key parts must not be touched directly.",
          "heading": "Key principle"
        },
        {
          "id": "B",
          "body": "Decontaminate hands with alcohol gel or soap and water before assembling equipment. Repeat hand hygiene immediately before contact with the key site.",
          "heading": "Hand preparation"
        },
        {
          "id": "C",
          "body": "Use a clean or sterile field appropriate to the procedure. Keep the field within view and do not reach across it once it is prepared.",
          "heading": "Field management"
        },
        {
          "id": "D",
          "body": "Gloves complement but never replace hand hygiene. Apply non-sterile gloves for simple procedures and sterile gloves where direct handling of a key part is unavoidable.",
          "heading": "Glove use"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text states that gloves do not replace hand hygiene?",
          "answer": "D",
          "options": [
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text gives the central rule of the technique?",
          "answer": "A",
          "options": [
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text advises against reaching across the prepared area?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "The central rule is that ______ must not be touched directly.",
          "answer": "key parts"
        }
      ]
    },
    "guidanceNote": "Gap answers must be copied exactly as written — here the text says 'key parts', not 'the key part'."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Discharge planning checklist",
    "prompt": "Skim the four short texts on discharge planning. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "STRETCH",
    "topicTag": "discharge-planning",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Begin discharge planning at the point of admission by setting an expected date of discharge. Review this date daily against the patient's progress.",
          "heading": "Early planning"
        },
        {
          "id": "B",
          "body": "Reconcile the discharge medicines against the admission list. Provide a written summary explaining any changes for the patient and the general practitioner.",
          "heading": "Medicines reconciliation"
        },
        {
          "id": "C",
          "body": "Confirm that the home environment is safe and that any equipment, such as a commode or grab rail, is in place before the patient leaves.",
          "heading": "Home readiness"
        },
        {
          "id": "D",
          "body": "Book any outpatient or community follow-up before discharge and give the patient written details of who to contact if symptoms worsen.",
          "heading": "Follow-up arrangements"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text deals with checking equipment is in place at home?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text advises explaining medicine changes to the general practitioner?",
          "answer": "B",
          "options": [
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text recommends setting a discharge date at admission?",
          "answer": "A",
          "options": [
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "Begin discharge planning by setting an expected ______ of discharge.",
          "answer": "date"
        }
      ]
    },
    "guidanceNote": "Beware near-duplicate clues — 'date of discharge' and 'follow-up' both involve timing, but only one is about the discharge date itself."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Falls risk assessment",
    "prompt": "Skim the four short texts on falls risk assessment. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "CORE",
    "topicTag": "falls-prevention",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Every patient should be screened for falls risk within six hours of admission. The screen records history of previous falls, mobility status and current medicines.",
          "heading": "Screening on admission"
        },
        {
          "id": "B",
          "body": "Ensure the call bell is within reach, the bed is at its lowest setting and the floor is free of clutter. Adequate lighting at night reduces disorientation.",
          "heading": "Environmental measures"
        },
        {
          "id": "C",
          "body": "Sedatives, antihypertensives and diuretics all increase falls risk. A pharmacist review is advised for any patient taking four or more regular medicines.",
          "heading": "Medication review"
        },
        {
          "id": "D",
          "body": "After a fall, do not move the patient until neurological observations and a check for injury are complete. Document the event and notify the medical team.",
          "heading": "Post-fall protocol"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text advises a pharmacist review for patients on multiple medicines?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text states when an initial falls screen should be completed?",
          "answer": "A",
          "options": [
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "A",
              "text": "A"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text explains what to do immediately after a patient has fallen?",
          "answer": "D",
          "options": [
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "Every patient should be screened for falls risk within ______ of admission.",
          "answer": "six hours"
        }
      ]
    },
    "guidanceNote": "Numbers and time limits in the text are common gap answers — underline them as you skim."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Hand hygiene texts",
    "prompt": "Skim the four short texts on hand hygiene. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "CORE",
    "topicTag": "infection-control",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Clean hands before touching a patient and before a clean or aseptic procedure.",
          "heading": "When to clean hands"
        },
        {
          "id": "B",
          "body": "Alcohol hand rub should be applied to dry hands and rubbed until fully evaporated, covering all surfaces.",
          "heading": "Technique"
        },
        {
          "id": "C",
          "body": "Use soap and water rather than alcohol rub when hands are visibly soiled or after caring for a patient with diarrhoea.",
          "heading": "When soap is required"
        },
        {
          "id": "D",
          "body": "Apply emollient regularly to reduce the skin damage that repeated cleaning can cause.",
          "heading": "Skin care"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text says when alcohol rub is not appropriate?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text describes correct rubbing technique?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "gap",
          "stem": "Alcohol rub should be applied to ______ hands.",
          "answer": "dry"
        }
      ]
    },
    "guidanceNote": "Scan for the keyword in the question — you don't need to read every word to match a text."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Informed consent essentials",
    "prompt": "Skim the four short texts on informed consent. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "STRETCH",
    "topicTag": "consent",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Consent is valid only if the patient has the capacity to understand, retain and weigh the relevant information and can communicate a decision.",
          "heading": "Capacity"
        },
        {
          "id": "B",
          "body": "The decision must be made freely, without pressure from staff, family or any other party. Coerced agreement is not valid consent.",
          "heading": "Voluntariness"
        },
        {
          "id": "C",
          "body": "Explain the proposed procedure, its benefits, the material risks and any reasonable alternatives, including the option of no treatment.",
          "heading": "Information shared"
        },
        {
          "id": "D",
          "body": "Document the discussion, not just the signature. A signed form alone does not prove that valid consent was obtained.",
          "heading": "Recording consent"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text states that a signed form alone is not enough?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text describes what information must be shared with the patient?",
          "answer": "C",
          "options": [
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text says the decision must be free of pressure?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "Consent is valid only if the patient has the ______ to understand and weigh the information.",
          "answer": "capacity"
        }
      ]
    },
    "guidanceNote": "Consent has four pillars — capacity, voluntariness, information, recording. Label each text with its pillar to match fast."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Insulin storage and handling",
    "prompt": "Skim the four short texts on insulin storage and handling. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "medication-storage",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Store unopened insulin vials and pens in a refrigerator between 2 and 8 degrees Celsius. Do not allow the product to freeze, as freezing destroys its activity.",
          "heading": "Unopened supplies"
        },
        {
          "id": "B",
          "body": "An insulin pen in current use may be kept at room temperature for up to 28 days. Keep it away from direct heat and sunlight.",
          "heading": "In-use product"
        },
        {
          "id": "C",
          "body": "Check the appearance before each dose. Discard the product if it looks cloudy when it should be clear, or if particles are visible.",
          "heading": "Inspection before use"
        },
        {
          "id": "D",
          "body": "Advise patients travelling to carry insulin in hand luggage, never in the aircraft hold, where temperatures may drop below freezing.",
          "heading": "Transport advice"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text advises checking the product's appearance before each dose?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text gives advice for patients who are travelling?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text states the refrigerator temperature range for unopened supplies?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "An insulin pen in current use may be kept at room temperature for up to ______ days.",
          "answer": "28"
        }
      ]
    },
    "guidanceNote": "When two texts mention temperature, separate them by purpose — 'unopened' versus 'in use' — before deciding."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Malnutrition screening",
    "prompt": "Skim the four short texts on malnutrition screening. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "CORE",
    "topicTag": "nutrition-screening",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Use a validated screening tool that combines body mass index, recent unplanned weight loss and the effect of acute illness on intake to give an overall risk score.",
          "heading": "Screening tool"
        },
        {
          "id": "B",
          "body": "Screen on admission and weekly thereafter for inpatients. Rescreen sooner if the clinical condition changes or oral intake falls.",
          "heading": "Timing"
        },
        {
          "id": "C",
          "body": "A high-risk score should trigger referral to the dietitian and the start of a food and fluid chart to monitor actual intake.",
          "heading": "Acting on results"
        },
        {
          "id": "D",
          "body": "If the patient cannot be weighed, estimate body mass index from a mid-upper-arm circumference measurement and record the method used.",
          "heading": "When weighing is impossible"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text describes what to do when a patient cannot be weighed?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text lists the components combined into a risk score?",
          "answer": "A",
          "options": [
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text states how often inpatients should be screened?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "B",
              "text": "B"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "A high-risk score should trigger referral to the ______.",
          "answer": "dietitian"
        }
      ]
    },
    "guidanceNote": "Role titles such as 'dietitian' are precise gap answers — spell them as the text does, not as a synonym."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Oxygen cylinder safety",
    "prompt": "Skim the four short texts on oxygen cylinder safety. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "CORE",
    "topicTag": "oxygen-safety",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Oxygen supports combustion, so keep cylinders away from naked flames and sources of ignition. No smoking is permitted near any oxygen source.",
          "heading": "Fire precautions"
        },
        {
          "id": "B",
          "body": "Store cylinders upright and secured with a chain or stand to prevent them toppling. A falling cylinder can shear its valve and become a projectile.",
          "heading": "Secure storage"
        },
        {
          "id": "C",
          "body": "Never apply oil or grease to valves, regulators or fittings. Even a trace of oil in the presence of oxygen can ignite spontaneously.",
          "heading": "Avoiding contamination"
        },
        {
          "id": "D",
          "body": "Read the contents gauge before each use and label cylinders as full, in use or empty. Order a replacement before a cylinder is exhausted.",
          "heading": "Checking contents"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text warns against applying oil to fittings?",
          "answer": "C",
          "options": [
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text explains why cylinders must be secured upright?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text describes labelling cylinders by their status?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "Oxygen supports ______, so cylinders must be kept away from naked flames.",
          "answer": "combustion"
        }
      ]
    },
    "guidanceNote": "Safety texts cluster around one hazard each — fire, falling, contamination, supply. Tag each text with its hazard as you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Pain assessment methods",
    "prompt": "Skim the four short texts on pain assessment methods. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "STRETCH",
    "topicTag": "pain-assessment",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Ask the patient to rate pain from zero, meaning no pain, to ten, meaning the worst pain imaginable. Record the score with each set of observations.",
          "heading": "Numerical rating scale"
        },
        {
          "id": "B",
          "body": "For children and those with limited language, a row of faces from smiling to crying lets the patient point to the image that matches their pain.",
          "heading": "Faces scale"
        },
        {
          "id": "C",
          "body": "When a patient cannot self-report, observe behaviour such as guarding, grimacing and restlessness. These cues suggest pain even when no score is given.",
          "heading": "Behavioural observation"
        },
        {
          "id": "D",
          "body": "Record not only the intensity but also the site, the character and any factors that make the pain better or worse, as these guide treatment.",
          "heading": "Documenting character"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text is most useful for a patient who cannot self-report?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text describes a scale designed for young children?",
          "answer": "B",
          "options": [
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text lists details to record beyond intensity?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "On the numerical rating scale, a score of ten means the worst pain ______.",
          "answer": "imaginable"
        }
      ]
    },
    "guidanceNote": "Self-report versus observation is the key split in pain tools — decide which a question needs before scanning."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Preventing pressure injuries in immobile patients",
    "prompt": "Skim the four short texts on preventing pressure injuries in immobile patients. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "pressure-injury-prevention",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "All patients should be screened for pressure injury risk within six hours of admission using a validated assessment tool. Re-screening is repeated whenever the patient's condition changes and at least every 48 hours. Reduced mobility, poor nutrition, incontinence and impaired sensation each raise the overall risk score.",
          "heading": "Risk screening"
        },
        {
          "id": "B",
          "body": "Patients identified as at risk should be repositioned at regular intervals, with the timing recorded on the turning chart. A two-hourly schedule is the usual starting point, though the interval is shortened for those with very limited movement. The 30-degree tilt is preferred because it keeps pressure off the bony prominences.",
          "heading": "Repositioning"
        },
        {
          "id": "C",
          "body": "The skin over the heels, sacrum and elbows is inspected at each shift change. Non-blanching redness that persists after pressure is removed is treated as an early-stage injury and reported without delay. Staff should avoid massaging reddened areas, as this can worsen tissue damage.",
          "heading": "Skin inspection"
        },
        {
          "id": "D",
          "body": "Where the risk score is high, a pressure-redistributing mattress is provided in addition to scheduled repositioning. Heel-offloading devices may be added for patients who cannot lift their own legs. Equipment alone does not remove the need for turning, and all surfaces are checked daily for faults.",
          "heading": "Support surfaces"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text states that reddened skin should not be rubbed?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text explains how soon after admission a patient should be assessed?",
          "answer": "A",
          "options": [
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "A",
              "text": "A"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text makes clear that special equipment does not replace turning?",
          "answer": "D",
          "options": [
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "The preferred position for keeping pressure off the bony prominences is the ______ tilt.",
          "answer": "30-degree"
        }
      ]
    },
    "guidanceNote": "In Part A you do not need to read every word. Match the key idea in the question to the heading first, then confirm in the body — this saves time under the strict clock."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Repositioning for skin protection",
    "prompt": "Skim the four short texts on repositioning for skin protection. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "CORE",
    "topicTag": "pressure-care",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Reposition at-risk patients at least every two hours, or more often if the skin shows early signs of damage. Agree and document a personal schedule.",
          "heading": "Repositioning frequency"
        },
        {
          "id": "B",
          "body": "Use a 30-degree side-lying tilt rather than turning the patient fully onto the hip. This spreads pressure away from the bony point of the hip.",
          "heading": "The 30-degree tilt"
        },
        {
          "id": "C",
          "body": "Offload the heels completely by raising the lower legs on a pillow so that the heels float clear of the mattress surface.",
          "heading": "Heel care"
        },
        {
          "id": "D",
          "body": "Inspect the skin at each reposition, paying attention to areas over bone. Redness that does not blanch under light pressure is an early warning sign.",
          "heading": "Skin inspection"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text explains how to keep the heels off the mattress?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text describes a sign found on inspecting the skin?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text recommends a side-lying tilt instead of a full turn?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "B",
              "text": "B"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "Reposition at-risk patients at least every ______ hours.",
          "answer": "two"
        }
      ]
    },
    "guidanceNote": "Number words may be written as words, not digits — the text says 'two', so the gap answer is 'two', not '2'."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Safe patient transfers",
    "prompt": "Skim the four short texts on safe patient transfers. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "manual-handling",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Carry out a moving and handling assessment before any transfer, identifying the patient's weight-bearing ability and the equipment required.",
          "heading": "Assess first"
        },
        {
          "id": "B",
          "body": "Use a hoist or slide sheet rather than lifting manually wherever possible. Manual lifting of a full patient load is no longer acceptable practice.",
          "heading": "Use equipment"
        },
        {
          "id": "C",
          "body": "Keep your back straight, bend at the knees and hold the load close to your body. Avoid twisting while supporting any weight.",
          "heading": "Posture"
        },
        {
          "id": "D",
          "body": "Agree a clear command before moving so that everyone, including the patient, acts together. Nominate one person to lead each transfer.",
          "heading": "Communication"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text advises nominating one person to lead the transfer?",
          "answer": "D",
          "options": [
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text describes correct posture when handling a load?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text says an assessment must happen before any transfer?",
          "answer": "A",
          "options": [
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "Keep your back straight and hold the load close to your ______.",
          "answer": "body"
        }
      ]
    },
    "guidanceNote": "Action verbs at the start of each text (assess, use, keep, agree) signal the topic — scan those first."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Source isolation precautions",
    "prompt": "Skim the four short texts on source isolation. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "CORE",
    "topicTag": "infection-isolation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Place the patient in a single room with the door kept closed where possible. Display the appropriate isolation sign at the entrance.",
          "heading": "Room allocation"
        },
        {
          "id": "B",
          "body": "Put on an apron and gloves before entering. Add a fluid-resistant mask and eye protection when there is a risk of splashing.",
          "heading": "Protective equipment"
        },
        {
          "id": "C",
          "body": "Remove protective equipment in the correct order before leaving, ending with hand hygiene. Gloves are removed first as they are the most contaminated item.",
          "heading": "Order of removal"
        },
        {
          "id": "D",
          "body": "Treat all waste from the room as clinical waste and place used linen in a water-soluble alginate bag before the outer laundry bag.",
          "heading": "Waste and linen"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text explains the order for removing protective equipment?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text covers the handling of used linen?",
          "answer": "D",
          "options": [
            {
              "id": "D",
              "text": "D"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text describes where the patient should be placed?",
          "answer": "A",
          "options": [
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "When removing protective equipment, ______ are removed first as they are the most contaminated item.",
          "answer": "Gloves"
        }
      ]
    },
    "guidanceNote": "If the gap sits at the start of a sentence, match the text's capitalisation — 'Gloves' here, not 'gloves'."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Urinary catheter care",
    "prompt": "Skim the four short texts on urinary catheter care. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "STRETCH",
    "topicTag": "catheter-care",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Keep the drainage bag below the level of the bladder at all times to allow gravity drainage and prevent backflow of urine into the bladder.",
          "heading": "Drainage position"
        },
        {
          "id": "B",
          "body": "Maintain a closed drainage system. Break the connection only when clinically necessary, as each disconnection raises the risk of introducing infection.",
          "heading": "Closed system"
        },
        {
          "id": "C",
          "body": "Clean the meatal area daily with soap and water during routine washing. Antiseptic cleansing offers no added benefit and is not recommended.",
          "heading": "Daily hygiene"
        },
        {
          "id": "D",
          "body": "Review the ongoing need for the catheter each day. Early removal once the indication has passed is the most effective way to reduce infection.",
          "heading": "Reviewing need"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text states that antiseptic cleansing gives no added benefit?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text identifies early removal as the most effective infection control measure?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text explains the correct position of the drainage bag?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "Keep the drainage bag below the level of the ______ to prevent backflow.",
          "answer": "bladder"
        }
      ]
    },
    "guidanceNote": "Two texts here both mention infection — distinguish by mechanism (closed system versus prompt removal) before answering."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Wound dressing selection",
    "prompt": "Skim the four short texts on wound dressing selection. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "wound-care",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "body": "Hydrocolloid dressings form a gel as they absorb exudate and suit lightly to moderately exuding wounds. They support autolytic debridement of sloughy tissue and can stay in place for up to seven days.",
          "heading": "Hydrocolloid dressings"
        },
        {
          "id": "B",
          "body": "Alginate dressings are derived from seaweed and handle heavy exudate well. They are not suitable for dry wounds, where they may adhere and cause trauma on removal.",
          "heading": "Alginate dressings"
        },
        {
          "id": "C",
          "body": "Transparent film dressings are waterproof and allow the wound to be inspected without removal. They are intended for superficial wounds with minimal exudate only.",
          "heading": "Film dressings"
        },
        {
          "id": "D",
          "body": "Foam dressings provide cushioning over bony prominences and manage moderate to heavy exudate. The wound bed should be reassessed at each dressing change.",
          "heading": "Foam dressings"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "Which text describes a dressing that allows inspection without removal?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "Which text mentions a dressing made from seaweed?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "Which text describes a dressing that provides cushioning over bony prominences?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "gap",
          "stem": "A hydrocolloid dressing supports ______ debridement of sloughy tissue.",
          "answer": "autolytic"
        }
      ]
    },
    "guidanceNote": "Match each dressing to its exudate level first — that single clue resolves most Part A wound questions quickly."
  },

  // ── OET Form 1 (canonical ingest 2026-08-04) ──
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "OET Form 1 · Reading Part A — Preventing pressure injuries",
    "prompt": "Complete the 20 questions using the four texts (A-D). Answer with a word or short phrase, or a text letter for matching questions. You have 15 minutes.",
    "difficulty": "CORE",
    "topicTag": "pressure-injury",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Risk assessment",
          "body": "Pressure injuries develop where soft tissue is compressed between bone and a surface. Structured risk assessment on admission is the foundation of prevention. The Braden Scale rates six areas - sensory perception, moisture, activity, mobility, nutrition and friction/shear - with lower total scores meaning higher risk. A score of 18 or below prompts a prevention plan. Risk should be reassessed whenever the patient's condition changes, not only on admission."
        },
        {
          "id": "B",
          "heading": "Repositioning",
          "body": "Repositioning redistributes pressure and is advised at least every four hours for at-risk patients on a pressure-redistributing mattress, and more often on a standard mattress. The 30-degree tilt is preferred over lying directly on the hip, which concentrates pressure on the bony prominence. Heels should be offloaded entirely, ideally floating on a pillow placed under the calves. A repositioning schedule should be documented and visible at the bedside."
        },
        {
          "id": "C",
          "heading": "Skin and moisture",
          "body": "Skin should be inspected at each repositioning, with particular attention to the sacrum, heels and any medical-device sites. Non-blanching redness is an early warning sign. Excess moisture from perspiration or incontinence weakens the skin barrier; a barrier cream protects intact skin, but massage over bony prominences is contraindicated, as it can damage fragile tissue."
        },
        {
          "id": "D",
          "heading": "Nutrition",
          "body": "Undernutrition impairs healing and raises risk. Patients should be screened with a validated tool such as MUST. Adequate protein and energy support tissue integrity; where oral intake is poor, referral to the dietitian is indicated. Hydration matters too - dehydrated skin is less resilient."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "how often to reposition an at-risk patient",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "a validated tool for nutritional screening",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "the earliest visible warning sign",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "the score that triggers a prevention plan",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "how to protect the heels",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "when risk should be reassessed",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "a practice that is contraindicated",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "Which scale rates six areas of risk?",
          "answer": "the Braden Scale",
          "variants": [
            "Braden Scale",
            "Braden"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "A Braden score of what value or below prompts a prevention plan?",
          "answer": "18",
          "variants": [
            "18 or below"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Which position is preferred over lying directly on the hip?",
          "answer": "the 30-degree tilt",
          "variants": [
            "30-degree tilt",
            "30 degree tilt"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "What early sign appears on the skin?",
          "answer": "non-blanching redness"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Which nutritional screening tool is named?",
          "answer": "MUST"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Who should be referred when oral intake is poor?",
          "answer": "the dietitian",
          "variants": [
            "dietitian"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Pressure injuries develop where soft tissue is compressed between bone and a ___.",
          "answer": "surface"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Risk should be reassessed whenever the patient's ___ changes.",
          "answer": "condition"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Heels should ideally be ___ on a pillow under the calves.",
          "answer": "floating"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "A ___ cream protects intact skin from excess moisture.",
          "answer": "barrier"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "___ over bony prominences is contraindicated.",
          "answer": "massage"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Undernutrition ___ healing and raises risk.",
          "answer": "impairs"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "___ skin is less resilient.",
          "answer": "dehydrated"
        }
      ]
    }
  },
  // ── OET Form 2 (canonical ingest 2026-08-04) ──
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "OET Form 2 · Reading Part A — Preventing falls in older adults",
    "prompt": "Complete the 20 questions using the four texts (A-D). Answer with a word or short phrase, or a text letter for matching questions. You have 15 minutes.",
    "difficulty": "CORE",
    "topicTag": "falls-prevention",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Risk factors",
          "body": "Falls in older adults are rarely due to a single cause. Contributors include muscle weakness, poor balance, visual impairment, certain medicines (particularly sedatives and some blood-pressure drugs) and environmental hazards. A history of a previous fall is the strongest single predictor of a future one. A multifactorial assessment is recommended for anyone who has fallen or reports unsteadiness."
        },
        {
          "id": "B",
          "heading": "Medication review",
          "body": "Medicines are a modifiable risk. Sedatives, antipsychotics and drugs that lower blood pressure all increase risk, which rises with the number of medicines taken. A structured medication review - deprescribing where possible - is core to prevention. Postural blood pressure should be checked, as a drop on standing is a common, treatable contributor."
        },
        {
          "id": "C",
          "heading": "Strength and balance",
          "body": "Exercise that challenges balance and builds lower-limb strength reduces falls in community-dwelling older people. To work it must be of sufficient dose - generally at least 50 hours over the programme - and progressive. Walking alone is not enough; the balance component makes the difference. Tai chi has good evidence."
        },
        {
          "id": "D",
          "heading": "Environment and footwear",
          "body": "Home hazards such as loose rugs, poor lighting and absent grab rails contribute to falls; an occupational-therapy home assessment can identify and remove them. Footwear matters: well-fitting shoes with a low heel and firm sole are safer than slippers or bare feet. Vision should be checked, but be cautious with new bifocals, which can affect depth perception on stairs."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "the strongest single predictor of a future fall",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "why the balance component of exercise matters",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "a caution about new glasses",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "how the number of medicines affects risk",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "an exercise with good evidence",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "safe footwear features",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "who a multifactorial assessment is recommended for",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "What is the strongest single predictor of a future fall?",
          "answer": "a previous fall",
          "variants": [
            "a history of a previous fall",
            "previous fall"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Which blood pressure sign should be checked?",
          "answer": "postural",
          "variants": [
            "postural blood pressure",
            "a drop on standing",
            "postural hypotension"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Roughly how many hours should an effective programme last?",
          "answer": "at least 50 hours",
          "variants": [
            "50 hours"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Which traditional exercise has good evidence?",
          "answer": "tai chi"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Who can assess the home for hazards?",
          "answer": "an occupational therapist",
          "variants": [
            "occupational therapist",
            "OT"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "What kind of heel is safer in footwear?",
          "answer": "a low heel",
          "variants": [
            "low heel"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "A history of a previous fall is the strongest single ___ of a future one.",
          "answer": "predictor"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "A structured medication review is core to falls ___.",
          "answer": "prevention"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Exercise must be of sufficient ___ to work.",
          "answer": "dose"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "___ alone is not enough to prevent falls.",
          "answer": "walking"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "An occupational-therapy home assessment can identify and ___ hazards.",
          "answer": "remove"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "New ___ can affect depth perception on stairs.",
          "answer": "bifocals"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Drugs that lower ___ pressure can increase falls risk.",
          "answer": "blood"
        }
      ]
    }
  },
  // ── OET Form 3 (canonical ingest 2026-08-05) ──
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "OET Form 3 · Reading Part A — Delirium in hospital",
    "prompt": "Complete the 20 questions using the four texts (A-D). Answer with a word or short phrase, or a text letter for matching questions. You have 15 minutes.",
    "difficulty": "CORE",
    "topicTag": "delirium",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Recognising delirium",
          "body": "Delirium is a sudden change in mental state - confusion, disorientation, altered awareness - that develops over hours or days, and it is often missed. Unlike dementia, which comes on slowly, delirium is acute and fluctuates through the day, sometimes worse at night. The quiet, withdrawn 'hypoactive' form is easily overlooked and carries the worst outcomes. A simple screening tool such as the 4AT can help detect it."
        },
        {
          "id": "B",
          "heading": "Common causes",
          "body": "Delirium usually has a trigger, often more than one. Frequent causes include infection (especially urinary and chest), dehydration, constipation, pain, and medicines - particularly sedatives and strong painkillers. Because the causes are treatable, delirium should prompt a search for the underlying problem rather than simply sedation of the patient."
        },
        {
          "id": "C",
          "heading": "Prevention",
          "body": "Much delirium is preventable. Keeping patients hydrated, mobile and oriented - with clocks, daylight, and their own glasses and hearing aids - reduces risk. Uninterrupted sleep matters, so avoid waking patients for non-urgent observations at night. Familiar faces help, so involving family is protective, not a distraction."
        },
        {
          "id": "D",
          "heading": "Management",
          "body": "When delirium occurs, treat the cause and support the person. A calm, well-lit environment and consistent staff reduce distress. Medication to sedate should be a last resort, reserved for severe agitation that risks safety, and used at the lowest dose, as it can prolong the delirium it is meant to treat."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "how delirium differs from dementia",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "which form of delirium has the worst outcomes",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "why sedating medication should be a last resort",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "the protective role of family",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "common infective triggers",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "a named screening tool",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "advice about night-time observations",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "Over what timescale does delirium develop?",
          "answer": "hours or days",
          "variants": [
            "hours to days",
            "over hours or days"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Which screening tool is named?",
          "answer": "the 4AT",
          "variants": [
            "4AT"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Delirium fluctuates and is sometimes worse at what time?",
          "answer": "night",
          "variants": [
            "at night"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Name one site of infection said to 'especially' cause delirium.",
          "answer": "urinary",
          "variants": [
            "chest",
            "urinary tract"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Besides infection, name one treatable cause listed.",
          "answer": "dehydration",
          "variants": [
            "constipation",
            "pain"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Keeping patients hydrated, oriented and ___ reduces risk.",
          "answer": "mobile"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Patients should have their own glasses and ___.",
          "answer": "hearing aids"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Uninterrupted ___ matters for prevention.",
          "answer": "sleep"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "The quiet, withdrawn form is called ___ delirium.",
          "answer": "hypoactive"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Delirium should prompt a search for the underlying ___ rather than sedation.",
          "answer": "problem",
          "variants": [
            "cause"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "In management, sedation should be a ___ resort.",
          "answer": "last"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Sedating medication can ___ the delirium it is meant to treat.",
          "answer": "prolong"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Unlike delirium, ___ comes on slowly.",
          "answer": "dementia"
        }
      ]
    }
  },
  // The nine sets below are the authored source verbatim, with two mechanical changes
  // only: markdown emphasis delimiters removed, and tables rewritten as plain labelled
  // lines — src/components/oet/OetComposer.tsx renders body through whitespace-pre-wrap
  // and parses no markdown.
  //
  // The teacher's pass of 2026-09-02 also corrected two answers that were not findable
  // in their own text (Acute stroke q9, Sepsis q19), withdrew two accepted answers that
  // were different words rather than other forms (Wound infection q15), and added two
  // right answers the texts print (Hypoglycaemia q14, Wound infection q14).
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Anaphylaxis",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "anaphylaxis",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Recognising anaphylaxis",
          "body": "Anaphylaxis is likely when all three of the following are present:\n\n- sudden onset and rapid progression of symptoms - life-threatening airway, breathing or circulation problems - skin or mucosal changes — flushing, urticaria, angioedema\n\nSkin changes alone are not anaphylaxis. They are present in about 80 per cent of reactions, which means that in roughly one in five there are none, and their absence must never delay treatment where airway, breathing or circulation are compromised.\n\nExposure to a known allergen supports the diagnosis but is not required. In a substantial minority of cases no trigger is ever identified.\n\nConsider the alternatives: a severe asthma attack, a vasovagal episode (a faint), a panic attack, and, in young children, breath-holding. A faint is distinguished by bradycardia and by rapid recovery when the patient is laid flat. Anaphylaxis does not recover in that way.\n\nThe picture is not always dramatic at the start. A patient who says only that their tongue feels odd, or who is scratching at their neck without complaining, has begun the same process as the one who is visibly struggling, and the interval between those two states can be very short indeed."
        },
        {
          "id": "B",
          "heading": "Immediate management",
          "body": "Position first. Lie the patient flat with the legs raised if breathing allows; sit them up if breathing is difficult; use the recovery position if unconscious. Do not stand or walk the patient — sudden standing during a reaction has caused cardiac arrest.\n\nAdrenaline 1 mg/mL (1:1000), intramuscular, into the anterolateral thigh:\n\nAdrenaline dose by age, with the volume to draw up: Adult and child over 12 years — 500 micrograms, 0.5 mL. Child 6–12 years — 300 micrograms, 0.3 mL. Child 6 months to 6 years — 150 micrograms, 0.15 mL. Child under 6 months — 100–150 micrograms, 0.1–0.15 mL.\n\nRepeat after 5 minutes if there is no improvement.\n\nEstablish the airway, give high-flow oxygen, and give an intravenous fluid bolus. Antihistamines and corticosteroids are not first-line treatment and must never delay adrenaline.\n\nWhere more than two doses are needed, or where the reaction does not settle, seek critical care help early rather than repeating intramuscular doses indefinitely.\n\nDo not leave the patient to fetch anything. Send somebody else, stay where you are, and keep talking to them. A person in this position who is left alone in a cubicle for two minutes has been left alone for exactly the two minutes that mattered."
        },
        {
          "id": "C",
          "heading": "After the reaction",
          "body": "Mast cell tryptase. Take the first sample as soon as feasible once treatment has started — do not delay resuscitation to take it. Take a second at 1 to 2 hours and a third at 24 hours or at follow-up, the last serving as the patient's own baseline.\n\nBiphasic reactions occur in up to 20 per cent of cases, usually within 12 hours of the first.\n\nObservation period after treatment:\n\nHow long to observe, and when: Observe 2 hours — good response to a single dose given within 30 minutes of onset, complete resolution. Observe 6 hours — two doses required, or a previous biphasic reaction. Observe 12 hours or overnight — more than two doses, severe asthma, ongoing reaction, late-night presentation, or no access to emergency care.\n\nBefore discharge: two adrenaline auto-injectors, training in their use, a written emergency plan, and referral to a specialist allergy service.\n\nWrite down the time of each thing that was given and the response to it. The account written afterwards is what the next team works from, and the one detail nobody can reconstruct later is how quickly the patient answered the first treatment."
        },
        {
          "id": "D",
          "heading": "Triggers and risk",
          "body": "Commonest triggers. Food, especially in children — peanut, tree nut, milk, egg, shellfish. Drugs — antibiotics, neuromuscular blocking agents, non-steroidal anti-inflammatory drugs, contrast media. Stings — wasp and bee.\n\nCo-factors lower the threshold at which a reaction occurs: exercise, alcohol, acute infection, non-steroidal anti-inflammatory drugs and, in women, the pre-menstrual period. A patient may tolerate a food repeatedly and then react to it when one of these is present.\n\nRisk factors for a fatal outcome: co-existing asthma, particularly when poorly controlled; delayed adrenaline; upright posture during the reaction; and adolescence, in which risk-taking and reluctance to carry an auto-injector combine. Nut allergy in adolescents is the pattern most often associated with fatal food anaphylaxis.\n\nPatients taking beta-blockers may respond poorly to adrenaline, and glucagon may be required.\n\nIdiopathic anaphylaxis — where no trigger is found despite full investigation — accounts for a significant minority of adult cases. These patients carry auto-injectors indefinitely, because there is nothing for them to avoid.\n\nAsk what the patient believes caused it and write their answer in their own words. They have usually thought about it for longer than anybody else in the room, and the thing they name is worth investigating even when it turns out not to be the cause."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "the dose of adrenaline for a child of eight?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "how long a patient should be watched after treatment?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "the conditions that may be mistaken for anaphylaxis?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "things that make a reaction more likely on a particular day?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "the position in which the patient should be placed?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "the three features that together indicate anaphylaxis?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "the classes of drug most often responsible?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "Into which part of the body is adrenaline injected?",
          "answer": "anterolateral thigh",
          "variants": [
            "thigh",
            "outer thigh",
            "the thigh"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "After how long is a second dose given if there is no improvement?",
          "answer": "5 minutes",
          "variants": [
            "five minutes",
            "5 mins",
            "after 5 minutes"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Which blood test supports the diagnosis afterwards?",
          "answer": "mast cell tryptase",
          "variants": [
            "tryptase",
            "serum tryptase"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "In approximately what proportion of reactions are skin changes present?",
          "answer": "80 per cent",
          "variants": [
            "80%",
            "eighty per cent",
            "about 80%"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "What may be required in a patient taking beta-blockers?",
          "answer": "glucagon",
          "variants": []
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "How many auto-injectors should the patient have before discharge?",
          "answer": "two",
          "variants": [
            "2",
            "two auto-injectors"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Which group is most often involved in fatal food anaphylaxis?",
          "answer": "adolescents",
          "variants": [
            "teenagers",
            "adolescence"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Skin changes are absent in roughly ______________ of anaphylactic reactions.",
          "answer": "one in five",
          "variants": [
            "20 per cent",
            "20%",
            "a fifth"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "A faint can be told apart from anaphylaxis by the presence of ______________.",
          "answer": "bradycardia",
          "variants": [
            "a slow pulse",
            "a slow heart rate"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Antihistamines and corticosteroids are ______________ and must never delay adrenaline.",
          "answer": "not first-line",
          "variants": [
            "not first line",
            "not first-line treatment"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "A biphasic reaction usually occurs within ______________ of the first.",
          "answer": "12 hours",
          "variants": [
            "twelve hours"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "A patient who needed two doses of adrenaline is observed for ______________.",
          "answer": "6 hours",
          "variants": [
            "six hours"
          ]
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Adrenaline should be given while the patient is lying flat, because ______________ posture during a reaction is a risk factor for death.",
          "answer": "upright",
          "variants": [
            "an upright",
            "standing"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Sepsis",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "sepsis",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Recognising sepsis",
          "body": "Sepsis is life-threatening organ dysfunction caused by a dysregulated response to infection. It is not a diagnosis made from a temperature. A patient may have sepsis with an entirely normal temperature, and the very young, the very old and the immunosuppressed frequently do.\n\nScreen any patient with suspected infection using the national early warning score. A score of 5 or more, or 3 in any single parameter, triggers senior review.\n\nRed flag findings — any one of which requires immediate action:\n\n- responds only to voice or to pain, or is unresponsive - systolic blood pressure 90 mmHg or below, or more than 40 below the patient's normal - heart rate above 130 per minute - respiratory rate 25 per minute or above - needs oxygen to keep saturation above 92 per cent - non-blanching rash, or mottled or ashen skin - has not passed urine in 18 hours - lactate 2 mmol/L or above - recent chemotherapy\n\nSepsis with no identified source is common. Do not delay treatment while the source is being sought.\n\nSay the word out loud when you think it. A concern that is described as 'not quite right' is passed on as nothing at all, while the same concern named as possible sepsis brings somebody to the bedside."
        },
        {
          "id": "B",
          "heading": "The first hour",
          "body": "Where sepsis is suspected with any red flag, complete all six actions within one hour. Recognition, not arrival, starts the clock.\n\nThe six actions, in order: 1. Give high-flow oxygen, targeting 94–98 per cent (88–92 per cent if at risk of hypercapnia). 2. Take blood cultures, and consider source control. 3. Give intravenous antimicrobials — do not wait for cultures if taking them will delay treatment. 4. Give intravenous fluid: 500 mL crystalloid in under 15 minutes, reassess, repeat to 30 mL/kg. 5. Measure serum lactate. 6. Measure hourly urine output.\n\nEscalate to critical care if the lactate remains above 2 mmol/L after fluid, or if vasopressors are needed to maintain a mean arterial pressure of 65 mmHg.\n\nStart the treatments together rather than one after another. Each of them is quick on its own, and the hour is lost in the gaps between them rather than in any single step."
        },
        {
          "id": "C",
          "heading": "Groups needing extra caution",
          "body": "Pregnancy and the six weeks after delivery. Physiological change masks deterioration: tachycardia and a lower blood pressure are normal, so the usual score thresholds are less reliable. Any pregnant woman with suspected infection is seen by a senior obstetrician.\n\nNeutropenia. Recent chemotherapy is itself a red flag. Antimicrobials are given within one hour of arrival, before the neutrophil count is known. Do not wait for the result.\n\nThe elderly. Confusion or a fall may be the only presentation, and fever is frequently absent. New confusion in an older patient is treated as possible sepsis until it is shown not to be.\n\nChildren. Grunting, an inability to feed, and a dry nappy carry the weight that blood pressure carries in adults. Hypotension in a child is a late and pre-terminal sign.\n\nAny woman who has had a caesarean section within the last six weeks belongs in the obstetric group.\n\nAsk what the person is normally like before deciding what this observation means. A reading that is unremarkable on the chart can be far from that patient's own usual, and only somebody who knows them can say so."
        },
        {
          "id": "D",
          "heading": "After the first hour",
          "body": "Source control is the step most often delayed and the one that most often decides the outcome: drainage of an abscess, removal of an infected line, debridement, or delivery in obstetric sepsis. Antimicrobials cannot sterilise an undrained collection.\n\nReview the antimicrobial at 48 to 72 hours against the culture result, and narrow it. Continuing broad-spectrum cover because the patient improved is the commonest reason a course ends up too broad and too long.\n\nPost-sepsis syndrome affects a substantial proportion of survivors: fatigue, poor concentration, muscle weakness, low mood and repeated infections, lasting months. Patients are rarely warned about it, and the commonest thing they report afterwards is being told they were lucky and then feeling unwell for a year with no explanation offered.\n\nDebrief the patient before discharge. Being told what actually happened, in plain words, is the single request that survivors make most often.\n\nHand over the concern by name at every change of shift until it is resolved. A worry that was raised at two in the afternoon and never repeated has been withdrawn, whatever the person raising it intended."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "the six actions that must be completed within an hour?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "the score that triggers a senior review?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "how sepsis presents in a child?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "reviewing the antibiotic after two or three days?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "the oxygen saturation to aim for?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "effects that survivors may still have months later?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "why the usual thresholds are less reliable in pregnancy?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "Within what time must the six actions be completed?",
          "answer": "one hour",
          "variants": [
            "1 hour",
            "within one hour",
            "an hour"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "At what lactate level does a red flag apply?",
          "answer": "2 mmol/L",
          "variants": [
            "2 mmol/L or above",
            "2 millimoles",
            "two"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "What total volume of fluid is worked up to?",
          "answer": "30 mL/kg",
          "variants": [
            "30 ml per kg",
            "30ml/kg"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Which finding in a child is described as late?",
          "answer": "hypotension",
          "variants": [
            "low blood pressure",
            "a low blood pressure"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "What must not be waited for before treating a neutropenic patient?",
          "answer": "the neutrophil count",
          "variants": [
            "neutrophil count",
            "the count",
            "the blood result"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Which step is described as most often delayed?",
          "answer": "source control",
          "variants": []
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Which new finding in an older patient is treated as possible sepsis?",
          "answer": "confusion",
          "variants": [
            "new confusion"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Recognition, and not ______________, starts the one-hour clock.",
          "answer": "arrival",
          "variants": [
            "the patient's arrival"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "A score of ______________ in any single parameter triggers senior review.",
          "answer": "3",
          "variants": [
            "three"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Antimicrobials cannot sterilise ______________.",
          "answer": "an undrained collection",
          "variants": [
            "undrained collection"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Vasopressors are needed to hold a mean arterial pressure of ______________.",
          "answer": "65 mmHg",
          "variants": [
            "65",
            "sixty-five mmHg"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "In a child, a dry nappy carries the weight that ______________ carries in adults.",
          "answer": "blood pressure",
          "variants": []
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "A course that is continued because the patient improved ends up too broad and ______________.",
          "answer": "too long",
          "variants": [
            "long"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Pressure ulcer prevention",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "pressure-ulcer-prevention",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Risk assessment and skin inspection",
          "body": "Assess risk within six hours of admission and at every change in condition, using a validated tool and clinical judgement together. A tool is a prompt and not a decision: a patient the tool scores as low risk, who has a heel nobody has looked at, is a high-risk patient.\n\nInspect the skin at every repositioning. Look at the sacrum, the heels, the ischial tuberosities, the greater trochanters, the elbows, the occiput in children and in anyone lying flat, and under and around every device.\n\nNon-blanching erythema is the earliest visible sign, and it is category 1 damage rather than a warning of it. Press the area with a finger for three seconds; if the redness does not go white, damage has already occurred.\n\nIn darker skin, colour change may not be visible at all. Use temperature, firmness, a boggy or oedematous texture, and the patient's report of pain, which frequently precedes any visible sign.\n\nRecord what was seen and not that an inspection took place. \"Skin intact\", on a chart that names no site, is not a record of anything.\n\nLook at the skin at the first opportunity and not at the first convenient moment. The assessment that is deferred to the morning round is the one that misses the damage done during a long wait on a trolley."
        },
        {
          "id": "B",
          "heading": "Categories of damage",
          "body": "Category 1 — intact skin with non-blanching redness. Category 2 — partial-thickness loss of dermis: a shallow open ulcer, or an intact or ruptured blister. Category 3 — full-thickness loss; subcutaneous fat may be visible; bone, tendon and muscle are not exposed. Category 4 — full-thickness loss with exposed bone, tendon or muscle. Unstageable — base covered by slough or eschar, so the depth cannot be determined. Deep tissue injury — purple or maroon intact skin, or a blood-filled blister.\n\nDo not reverse-grade. An ulcer that is healing is recorded as a healing category 3, never as a category 2.\n\nStable dry eschar on the heel is not debrided. It acts as a natural cover and is left intact unless there is redness, fluctuance or drainage.\n\nDescribe what you can see rather than reaching for a number straight away. A description that records colour, size and whether the redness fades under a finger can be compared next week; a bare category cannot."
        },
        {
          "id": "C",
          "heading": "Repositioning and support surfaces",
          "body": "Reposition at least four-hourly on a high-specification foam mattress, and at least two-hourly if the patient is not on one. The frequency increases wherever the skin shows early change, whatever the surface underneath.\n\nUse the 30-degree tilt rather than a 90-degree side-lying position, which loads the greater trochanter directly. Do not raise the head of the bed above 30 degrees for longer than is necessary, because sliding down the bed generates shear.\n\nHeels are offloaded, not cushioned. A pillow placed lengthwise under the calf, so that the heel floats clear of the bed, is more effective than any heel pad and costs nothing.\n\nNever drag a patient up the bed. Use the slide sheet and remove it afterwards: a slide sheet left in place defeats a pressure-relieving mattress.\n\nSitting out in a chair is not rest from pressure. An unrelieved sitting period concentrates load on the ischial tuberosities and is limited to two hours.\n\nAgree the turning times with the patient rather than announcing them. Somebody who understands why they are being moved at three in the morning cooperates with it, and somebody who does not will simply decline."
        },
        {
          "id": "D",
          "heading": "Nutrition, moisture and devices",
          "body": "Screen nutrition on admission and weekly thereafter. Protein and energy deficit slows healing, and thin subcutaneous tissue offers less protection — but there is no evidence for routinely supplementing a patient who is not malnourished.\n\nMoisture-associated damage is not pressure damage, and the two are treated differently. Moisture damage is diffuse, has irregular edges and spreads across skin folds; pressure damage is localised over a bony prominence and has a defined edge. A barrier product treats the first and does nothing whatever for the second.\n\nDevice-related damage now accounts for a substantial proportion of hospital-acquired ulcers: oxygen tubing behind the ear, a nasogastric tube against the nostril, a saturation probe, an anti-embolism stocking with a wrinkle in it. Inspect under every device at least twice a day, and reposition the device itself and not only the patient.\n\nCheck what the patient is lying or sitting on at each review. Equipment is borrowed, swapped and taken away for cleaning, and the surface named in the notes is very often not the one under the patient today."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "how often a patient on a foam mattress is turned?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "what is seen in category 4 damage?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "how to tell moisture damage from pressure damage?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "what to look for when the skin is dark?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "why the heel should float clear of the bed?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "when the skin should be inspected?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "whether eschar on a heel should be removed?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "Within what time of admission is risk assessed?",
          "answer": "six hours",
          "variants": [
            "6 hours",
            "within six hours"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "For how long is the finger pressed to test blanching?",
          "answer": "three seconds",
          "variants": [
            "3 seconds"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Which tilt position is preferred to side-lying?",
          "answer": "30-degree tilt",
          "variants": [
            "30 degrees",
            "the 30-degree tilt",
            "thirty degrees"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "What is generated when a patient slides down the bed?",
          "answer": "shear",
          "variants": []
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "How often is nutrition screened after admission?",
          "answer": "weekly",
          "variants": [
            "every week",
            "once a week"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Which category is used when the depth cannot be determined?",
          "answer": "unstageable",
          "variants": [
            "unstageable category"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "How often is the skin under a device inspected?",
          "answer": "twice a day",
          "variants": [
            "twice daily",
            "two times a day",
            "at least twice a day"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "An ulcer that is healing is recorded as a ______________, never as a category 2.",
          "answer": "healing category 3",
          "variants": [
            "a healing category 3"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Eschar on the heel is left intact unless there is redness, fluctuance or ______________.",
          "answer": "drainage",
          "variants": []
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Heels are ______________, not cushioned.",
          "answer": "offloaded",
          "variants": [
            "off-loaded"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "A slide sheet left in place ______________ a pressure-relieving mattress.",
          "answer": "defeats",
          "variants": [
            "defeat"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Non-blanching erythema is category 1 damage and not ______________ of it.",
          "answer": "a warning",
          "variants": [
            "warning"
          ]
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Where the skin is dark, the patient's pain frequently precedes any ______________.",
          "answer": "visible sign",
          "variants": [
            "visible change",
            "sign"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Hypoglycaemia",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "hypoglycaemia",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Recognising hypoglycaemia",
          "body": "Hypoglycaemia is a blood glucose below 4.0 mmol/L. The phrase used on the wards is \"four is the floor\", and the number matters because treatment should not wait for a patient to look unwell.\n\nThe early warning symptoms are autonomic: sweating, trembling, palpitations, hunger and a sudden anxiety the patient often cannot explain. These are the body's alarm and they appear first.\n\nIf the glucose falls further, the brain itself runs short of fuel. This produces confusion, drowsiness, slurred speech, difficulty concentrating and behaviour that is out of character. Staff who do not know the patient may read these as intoxication, a stroke or simple awkwardness.\n\nThe change is very often noticed by somebody else before the patient notices it in themselves — a colleague, a relative, or the person in the next bed. A patient who is normally careful and becomes irritable over something small should have a glucose measured before anybody decides what sort of behaviour they are looking at.\n\nSome patients lose the early alarm altogether after years of repeated episodes. In impaired awareness of hypoglycaemia the first sign is confusion, with no warning stage at all.\n\nAsk anybody who knows the patient whether this is how they behave when their glucose falls. Families and regular staff recognise the change long before a stranger does, and their description is often more precise than anything the patient can offer at the time."
        },
        {
          "id": "B",
          "heading": "Immediate treatment",
          "body": "Treat first and document afterwards. Never send a symptomatic patient for a laboratory result before treating.\n\nConscious, able to swallow — 15–20 g fast-acting carbohydrate: 4–5 glucose tablets, or 150–200 mL of pure fruit juice. Conscious but uncooperative — glucose gel squeezed between the gum and the cheek. Unconscious or unable to swallow — nothing by mouth; 1 mg glucagon by intramuscular injection, or intravenous glucose.\n\nDo not reach for a chocolate bar or a biscuit as the first treatment. The fat in them slows absorption down, and a patient who needs sugar within minutes does not have those minutes to spare. The same applies to a fizzy drink from which the sugar has been removed.\n\nRecheck the glucose after 15 minutes. If it is still below 4.0 mmol/L, repeat the fast-acting carbohydrate. Once the level is above 4.0, give a portion of long-acting carbohydrate such as toast or a sandwich, or the next meal if it is due.\n\nStay with the patient until they have swallowed it. A treatment that is left on the table beside somebody who is confused has not been given, and the chart will nonetheless record that it was."
        },
        {
          "id": "C",
          "heading": "After the episode",
          "body": "Do not leave the patient alone until they have eaten the long-acting carbohydrate and their glucose is stable.\n\nRecord the reading, the treatment given, the time and the response. An episode that is treated and never written down cannot be prevented.\n\nDo not omit the next dose of insulin without a medical review. Stopping insulin after a hypoglycaemic episode is a common reaction and it produces a dangerous rise later the same day.\n\nAsk the patient what they noticed first, and write down the words they use. Their own description is the best guide there is to whether their warning symptoms are still working, and it is a question almost nobody thinks to ask.\n\nEvery episode should prompt the question of why it happened. Review the timing of medication against meals, recent weight loss, kidney function and alcohol.\n\nAsk what the patient was doing in the hours beforehand, and write it down. The answer is very often a missed meal, an unusual amount of walking, or a dose taken at a different time, and none of those appear anywhere in the notes unless somebody asks."
        },
        {
          "id": "D",
          "heading": "Who is at risk",
          "body": "Insulin and the sulfonylurea tablets are the two treatments that cause hypoglycaemia. Metformin alone does not.\n\nHypoglycaemia caused by a sulfonylurea can last many hours and may return after apparent recovery. These patients require admission and observation, not simply a sandwich and discharge.\n\nAlcohol blocks the liver's production of glucose. The resulting episode is often delayed, occurring during the night after drinking, and is easily mistaken for drunkenness by everyone present.\n\nKidney function matters because insulin and several of the tablets are cleared by the kidneys. As that clearance falls, a dose which has been safe for years begins to build up in a patient who has changed nothing at all about what they take.\n\nOther risks include a missed or delayed meal, unusual exercise, vomiting, declining kidney function and increasing age.\n\nCheck what the patient actually takes rather than what is written on the list. A tablet that was stopped by one clinician and continued by the patient is a common and entirely invisible cause, and it is found only by asking."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "the treatment for a patient who cannot swallow?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "the reason an episode may return hours later?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "the symptoms that appear before the brain is affected?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "what must be eaten once the glucose is above four?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "what should be reviewed to find the cause?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "the drug that does not cause low glucose on its own?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "the condition in which the warning symptoms are absent?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "Below what value is a blood glucose called hypoglycaemia?",
          "answer": "4.0 mmol/L",
          "variants": [
            "4 mmol/L",
            "four",
            "4.0",
            "below four"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "How much fast-acting carbohydrate should a conscious patient be given?",
          "answer": "15–20 g",
          "variants": [
            "15 to 20 grams",
            "15-20 grams",
            "15g to 20g"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Where is glucose gel placed in an uncooperative patient?",
          "answer": "between the gum and the cheek",
          "variants": [
            "gum and cheek",
            "in the cheek",
            "inside the cheek"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "How long after treatment should the glucose be rechecked?",
          "answer": "15 minutes",
          "variants": [
            "fifteen minutes",
            "after 15 minutes"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Which injection is given to an unconscious patient?",
          "answer": "glucagon",
          "variants": []
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Which organ's glucose production is blocked by alcohol?",
          "answer": "the liver",
          "variants": [
            "liver"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Which two treatments cause hypoglycaemia?",
          "answer": "insulin and sulfonylureas",
          "variants": [
            "insulin and sulfonylurea",
            "insulin and the tablets",
            "insulin and sulfonylurea tablets"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "The confusion of hypoglycaemia may be mistaken by staff for ______________.",
          "answer": "intoxication",
          "variants": [
            "drunkenness",
            "being drunk",
            "a stroke"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "An unconscious patient must be given ______________ by mouth.",
          "answer": "nothing",
          "variants": [
            "nothing at all",
            "no food or drink"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "After the level rises above four, the patient needs a portion of ______________ carbohydrate.",
          "answer": "long-acting",
          "variants": [
            "long acting",
            "slow-acting",
            "slow release"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Insulin should not be omitted afterwards without a ______________.",
          "answer": "medical review",
          "variants": [
            "a review",
            "doctor's review"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "An episode caused by a sulfonylurea requires ______________ rather than discharge.",
          "answer": "admission",
          "variants": [
            "admission and observation",
            "observation",
            "to be admitted"
          ]
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Hypoglycaemia after alcohol typically occurs during the ______________.",
          "answer": "night",
          "variants": [
            "the night",
            "at night",
            "overnight"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Acute stroke",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "acute-stroke",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Recognising a stroke",
          "body": "The four letters of FAST are Face, Arms, Speech and Time. Ask the person to smile and look for one side of the face drooping. Ask them to raise both arms and watch for one drifting down. Listen for speech that is slurred, or for words that come out in the wrong order.\n\nNot every stroke fits those three. Sudden loss of vision in one eye, sudden severe dizziness with unsteadiness, or a sudden headache unlike any the person has had before are all recognised presentations, and all of them are missed more often than the classic picture.\n\nThe person themselves is often the last to know. Weakness down one side can go entirely unremarked by the patient while everybody else in the room can see it, and a stroke that takes speech may leave them unable to tell anyone that anything is wrong at all. For that reason the account of somebody who was present matters as much as the patient's own.\n\nThe symptoms are almost always painless and they begin abruptly. A patient who says the weakness \"came on over a week\" is describing something else, and that difference is worth asking about directly rather than assuming.\n\nBelieve the person who saw it happen. A relative who says the face was not like that an hour ago has given you the single most useful piece of information available, and it is worth more than a normal examination in front of you now."
        },
        {
          "id": "B",
          "heading": "What to do first",
          "body": "Call the emergency services immediately. Do not wait to see whether the symptoms settle, and do not arrange transport yourself.\n\nRecord the time the person was last known to be well. If they woke with the symptoms, the last known well time is when they went to bed. This single fact decides which treatments are open to them and it is the one thing nobody else can supply later.\n\nCheck the blood glucose. Hypoglycaemia produces one-sided weakness and confused speech and is treated in minutes; it is the most important condition that copies a stroke.\n\nGive nothing by mouth — no food, no drink, and no tablets — until swallowing has been assessed.\n\nDo not give aspirin. It is a reasonable instinct and it is wrong here, because a bleed and a clot look identical at the bedside.\n\nDo not give anything by mouth until swallowing has been assessed, including the tablets that are due. A drink offered kindly in the first hour is one of the commonest avoidable harms on any stroke pathway."
        },
        {
          "id": "C",
          "heading": "In the first hours",
          "body": "A brain scan is needed urgently, and its first purpose is to separate a bleed from a clot. Nothing that thins the blood may be given until that question is answered.\n\nWhere the cause is a clot, clot-busting treatment can be given within 4.5 hours of the onset of symptoms. The benefit falls with every minute of delay, which is why the time of onset governs everything.\n\nFor a clot in one of the large vessels, mechanical removal may be offered, and in carefully selected patients this remains possible up to 24 hours.\n\nBefore any food, drink or oral medicine, a trained member of staff screens the swallow. Half of patients have an unsafe swallow in the first days, and pneumonia from aspiration is a leading cause of death after stroke.\n\nExplain what is happening to the patient even when they cannot answer. Understanding is very often intact when speech is not, and a person who can hear the room discussing them as though they were absent will remember it."
        },
        {
          "id": "D",
          "heading": "Afterwards",
          "body": "Blood pressure is usually high in the first hours and is not routinely lowered, because the injured brain depends on that pressure to keep the surrounding tissue alive.\n\nAn irregular pulse should be investigated. Atrial fibrillation allows clots to form in the heart and travel to the brain, and it is treatable once it is found.\n\nRehabilitation begins within days, not weeks. Early sitting, swallowing work and speech therapy change the outcome more than anything offered later.\n\nThe other risk factors are the familiar ones: high blood pressure, smoking, diabetes and raised cholesterol. Each is worth addressing, and each is a reason this patient's family should be asked about their own.\n\nNobody should be told that a stroke is simply part of growing older. Most of what causes one can be treated, and the conversation that follows an admission is often the most useful thing a family will ever be given.\n\nAsk what the patient wants to be able to do again, and write it in their own words. The answer is rarely the thing on the standard list, and every plan that follows works better when it is aimed at something the patient actually wants."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "the reason blood pressure is left alone at first?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "the condition that most often imitates a stroke?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "the presentations that do not fit the usual three?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "how long after onset a clot may be removed mechanically?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "what to record if the person woke with symptoms?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "the heart rhythm that sends clots to the brain?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "why nothing that thins the blood is given first?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "What does the letter F in FAST stand for?",
          "answer": "face",
          "variants": [
            "the face"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Which single fact decides which treatments are available?",
          "answer": "the time of onset",
          "variants": [
            "time of onset",
            "the time last known well",
            "last known well",
            "when the symptoms started",
            "the time it started"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Which condition copies a stroke and must be checked immediately?",
          "answer": "hypoglycaemia",
          "variants": [
            "hypoglycemia",
            "low blood glucose",
            "low blood sugar",
            "low glucose"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "What must a brain scan separate a clot from?",
          "answer": "a bleed",
          "variants": [
            "bleed",
            "a bleeding",
            "haemorrhage",
            "hemorrhage"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Within how long can clot-busting treatment be given?",
          "answer": "4.5 hours",
          "variants": [
            "four and a half hours",
            "4.5",
            "within 4.5 hours"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "What is screened before any food, drink or oral medicine?",
          "answer": "the swallow",
          "variants": [
            "swallow",
            "swallowing"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Which infection following an unsafe swallow is a leading cause of death?",
          "answer": "pneumonia",
          "variants": [
            "aspiration pneumonia"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Aspirin must not be given because a bleed and a clot look ______________ at the bedside.",
          "answer": "identical",
          "variants": [
            "the same",
            "alike"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Mechanical removal of a clot may be possible up to ______________ in selected patients.",
          "answer": "24 hours",
          "variants": [
            "twenty-four hours",
            "24"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "The onset of stroke symptoms is almost always ______________.",
          "answer": "painless",
          "variants": [
            "without pain",
            "not painful"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "The injured brain depends on the raised ______________ to keep surrounding tissue alive.",
          "answer": "pressure",
          "variants": [
            "blood pressure",
            "the pressure"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Rehabilitation should begin within ______________ rather than weeks.",
          "answer": "days",
          "variants": [
            "a few days",
            "the first days"
          ]
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "An ______________ pulse should be investigated after a stroke.",
          "answer": "irregular",
          "variants": [
            "an irregular"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Preventing blood clots in hospital",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "preventing-blood-clots-in-hospital",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Assessing the risk",
          "body": "Every patient is assessed for the risk of a blood clot within 24 hours of admission, and again if their condition changes. The assessment is not a formality: a clot in the lung remains one of the most common preventable causes of death in hospital.\n\nThe things that raise the risk are ordinary. Being unable to move about is the largest of them, and it is produced as easily by a long wait on a trolley as by an operation. Surgery lasting more than ninety minutes, cancer, a clot in the past, pregnancy and the six weeks after it, dehydration, obesity and age over sixty all add to the total.\n\nNone of these is remarkable on its own, and that is the difficulty. A clot rarely follows one dramatic event; it follows an ordinary week in which nobody added the small things together.\n\nAssess the risk of bleeding at the same time and on the same page. Active bleeding, a low platelet count, a recent stroke, uncontrolled blood pressure and a lumbar puncture within the last four hours each change what can safely be offered.\n\nDo the assessment again when the patient's situation changes, not only on the day they arrive. Somebody admitted able to walk, who has since spent two days in bed after a procedure, is not the patient who was assessed on the first afternoon."
        },
        {
          "id": "B",
          "heading": "What is offered",
          "body": "Keeping the patient hydrated and getting them moving early are the two measures that cost nothing and are forgotten most often. Neither replaces the rest, and neither is optional.\n\nAnti-embolism stockings squeeze the leg from the ankle upwards and are measured for each patient before they are fitted. They must not be used where there is peripheral arterial disease, severe swelling of the legs, or a local skin condition, and a stocking applied to a leg with poor circulation can cause an ulcer in days.\n\nA stocking that has rolled down, been folded over at the top, or been left on a leg it was never measured for is worse than no stocking at all, because everybody in the room believes the patient is protected.\n\nIntermittent pneumatic compression sleeves inflate and deflate around the calf and suit patients who cannot have stockings.\n\nWhere the bleeding risk allows, an injected anticoagulant is prescribed. This is the measure with the strongest evidence behind it, and the one most often omitted because somebody was uncertain.\n\nExplain what is being offered and why before it is started. A patient who understands what the injection is for accepts it far more readily than one who is simply presented with it each evening, and refusals almost always follow an explanation that was never given."
        },
        {
          "id": "C",
          "heading": "What to watch for",
          "body": "A clot in a leg usually announces itself on one side only. Look for swelling of one calf, warmth, tenderness along the vein and a change in colour. Comparing the two legs is worth more than examining one.\n\nA clot that reaches the lung presents differently. Sudden breathlessness, chest pain that is worse on breathing in, coughing up blood, or a collapse are all recognised, and any of them in a patient who has been immobile deserves an immediate senior review.\n\nDo not wait for all of the signs. One of them, in a patient who has spent a week in a chair, is enough to ask somebody senior to look.\n\nInspect the skin under stockings daily, and remove them for a short time to do it. Pressure damage under a stocking is caused by the very treatment that was meant to help.\n\nAsk the patient to tell you about any new pain rather than waiting to be told. Somebody who has been in hospital for a week will often put a sore calf down to lying still, and will mention it only if the question is asked directly."
        },
        {
          "id": "D",
          "heading": "Before the patient goes home",
          "body": "Explain how long any anticoagulant is to continue and what happens if a dose is missed. A patient who stops early because the box has run out has been failed by the discharge, not by themselves.\n\nExplain that the risk does not end at the door. It stays raised for weeks after an operation or a period in bed, and most clots that follow an admission appear after the patient has gone home.\n\nGive the signs to report, in writing, and say plainly who to telephone and when. A patient who has been told to \"keep an eye out\" has been told nothing at all, and will decide at two in the morning that they do not want to be a nuisance.\n\nSay how long the treatment continues after discharge and what happens if a dose is missed. A course that stops on the day the box runs out, without anybody having said so, is the commonest way this protection quietly ends early."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "the sleeves used when stockings cannot be worn?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "how long the raised risk lasts once the patient is home?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "the length of operation that adds to the risk?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "the difference between the two legs?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "what to tell a patient about a missed dose?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "the conditions that change what can safely be given?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "the damage the treatment itself can cause?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "Within what time of admission must the risk be assessed?",
          "answer": "24 hours",
          "variants": [
            "twenty-four hours",
            "within 24 hours"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "What must be assessed at the same time as the risk of a clot?",
          "answer": "the risk of bleeding",
          "variants": [
            "bleeding risk",
            "risk of bleeding",
            "bleeding"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "What is the largest single factor raising the risk?",
          "answer": "being unable to move",
          "variants": [
            "immobility",
            "not moving",
            "being immobile",
            "inability to move"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Which measure has the strongest evidence behind it?",
          "answer": "an injected anticoagulant",
          "variants": [
            "anticoagulant",
            "injection",
            "the injection",
            "anticoagulant injection"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Which change in one calf suggests a clot?",
          "answer": "swelling",
          "variants": [
            "swollen",
            "one calf swollen"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "What may a patient cough up when a clot reaches the lung?",
          "answer": "blood",
          "variants": []
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "How often should the skin under stockings be inspected?",
          "answer": "daily",
          "variants": [
            "every day",
            "each day"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "The risk must be assessed again if the patient's ______________ changes.",
          "answer": "condition",
          "variants": [
            "clinical condition"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Stockings are ______________ for each patient before they are fitted.",
          "answer": "measured",
          "variants": [
            "sized"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Chest pain from a clot in the lung is worse on ______________.",
          "answer": "breathing in",
          "variants": [
            "inspiration",
            "inhaling",
            "breathing"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Stockings must not be used where there is peripheral ______________ disease.",
          "answer": "arterial",
          "variants": [
            "artery"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Most clots that follow an admission appear after the patient has gone ______________.",
          "answer": "home",
          "variants": [
            "gone home"
          ]
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "The signs to report should be given to the patient in ______________.",
          "answer": "writing",
          "variants": [
            "written form",
            "written"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — High-risk medicines",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "high-risk-medicines",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "The medicines that cause the most harm",
          "body": "A small group of medicines is responsible for most of the serious harm that comes from medication. They are not unusual drugs; they are the ones given every day on every ward.\n\nInsulin, the anticoagulants, the strong opioids, concentrated potassium and methotrexate appear on every list of this kind, in every country that has looked. What they share is a narrow margin: the dose that treats and the dose that harms are close together, and the harm is severe when it happens.\n\nThe list is short on purpose. A ward cannot treat five hundred medicines as though each one could kill, and pretending otherwise spreads attention so thinly that nothing is watched properly. Naming a small group is what allows the extra checks to be real ones.\n\nErrors with these medicines are rarely the work of a careless person. They follow from a name that resembles another name, a chart copied at speed, an abbreviation read the way it was written rather than the way it was meant, and a ward where interruption is normal.\n\nFamiliarity is what makes these medicines dangerous. They are handled every day by people who are competent with them, and the error, when it comes, is almost never made by somebody who did not know what they were doing."
        },
        {
          "id": "B",
          "heading": "Before it is given",
          "body": "Check the patient, the medicine, the dose, the route and the time, and check them against the chart rather than against what somebody has told you.\n\nWrite \"units\" in full. The letter U written beside a number is read as a nought by somebody who did not write it, and ten becomes a hundred in the space of one character.\n\nA high-risk medicine needs an independent double check. Independent means the second person works from the chart and reaches their own answer. If they were shown the syringe and asked whether it looked right, the check did not happen.\n\nNone of this is about distrusting the person who prescribed. It is about the fact that a number written by one tired person at midnight is read by another tired person at six, and neither of them can see what the other meant.\n\nMethotrexate is taken weekly, not daily. The day of the week belongs on the label and the patient should be able to say which day it is.\n\nSay the check out loud with the second person rather than nodding along beside them. A silent second check is one person's work counted twice, and it has been the finding of more reviews than any other single practice."
        },
        {
          "id": "C",
          "heading": "Storage and preparation",
          "body": "Concentrated potassium is not kept on general wards. Where it is stocked at all it is separated, marked and counted, because a concentrated solution given quickly stops the heart.\n\nMedicines whose names or packaging resemble one another are stored apart rather than side by side. A notice asking staff to take more care works until the week it matters; moving one of the two boxes works every week.\n\nThe same reasoning applies to strengths of the same drug kept in one drawer. Two boxes that differ only in a number are two boxes that will be confused, however experienced the hand reaching for them.\n\nLabel a syringe the moment it is drawn up, and never accept an unlabelled one from another person. A clear liquid in a plastic barrel carries no information at all about what it is.\n\nKeep the preparation area clear of everything that does not belong to the task in hand. Most of the errors that reach a patient begin with two things standing next to each other that should never have been on the same surface."
        },
        {
          "id": "D",
          "heading": "When something goes wrong",
          "body": "Tell the patient. An error that reached them is theirs to know about, and a service that hides small errors will not hear about the large ones.\n\nReport it, promptly and in full, including the errors that harmed nobody. Those are the cheapest information a hospital ever gets, because the same hole is waiting for somebody else.\n\nThe staff member involved is sometimes called the second victim, and the phrase is not sentimental. People leave the profession over an error that a better system would have caught.\n\nAsking who did it produces one careful person and a ward that has learned to say nothing. Asking how it happened produces a change that protects everybody, including the people who have not made the mistake yet.\n\nFix the system, not the person. Ask what made this possible at three in the morning on a short-staffed ward, and change that.\n\nTell the patient what happened, in plain words and on the same day. A person who learns later, from a letter or from somebody else, loses their trust in everything else that was done for them, including the parts that went right."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "why a notice asking for more care is not enough?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "what independence means in a second check?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "the value of reporting errors that harmed nobody?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "what these medicines have in common?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "the effect of giving a concentrated solution quickly?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "the conditions that produce errors rather than carelessness?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "what a patient should be able to say about a weekly medicine?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "Which word must be written out in full beside a number?",
          "answer": "units",
          "variants": [
            "the word units",
            "unit"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Which medicine named here is taken weekly rather than daily?",
          "answer": "methotrexate",
          "variants": []
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Which concentrated solution is not kept on general wards?",
          "answer": "potassium",
          "variants": [
            "concentrated potassium"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "What must be done to a syringe the moment it is drawn up?",
          "answer": "label it",
          "variants": [
            "labelled",
            "labeled",
            "label the syringe",
            "put a label on it"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Who must be told about an error that reached them?",
          "answer": "the patient",
          "variants": [
            "patient"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "What is the staff member involved in an error sometimes called?",
          "answer": "the second victim",
          "variants": [
            "second victim"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Where do medicines with similar names belong in relation to each other?",
          "answer": "apart",
          "variants": [
            "stored apart",
            "separated",
            "not side by side"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "The letter U beside a number is read as a ______________ by somebody who did not write it.",
          "answer": "nought",
          "variants": [
            "zero",
            "naught",
            "a nought"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "The second person must work from the ______________ and reach their own answer.",
          "answer": "chart",
          "variants": [
            "the chart",
            "drug chart"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "The day of the ______________ belongs on a methotrexate label.",
          "answer": "week",
          "variants": [
            "the week"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "These medicines share a narrow ______________ between the treating and the harming dose.",
          "answer": "margin",
          "variants": [
            "a narrow margin"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "A service that hides small errors will not hear about the ______________ ones.",
          "answer": "large",
          "variants": [
            "larger",
            "big",
            "serious"
          ]
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "The response to an error should be to fix the ______________ rather than the person.",
          "answer": "system",
          "variants": [
            "the system"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Wound infection and antibiotics",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "wound-infection-and-antibiotics",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Infection or ordinary healing",
          "body": "A wound that is healing normally is warm, a little red at its edges and mildly uncomfortable in the first days. Those three findings on their own are not an infection, and treating them as one is how a great many unnecessary courses of antibiotics begin.\n\nWhat distinguishes infection is the direction of travel. Redness that spreads outwards beyond the wound margin, pain that is increasing rather than settling, discharge that has become thick and coloured, a smell that was not there before, and a wound that has stopped closing when it had begun to — these are the changes that matter, and each of them is a comparison with yesterday rather than a single observation today.\n\nNone of that requires a laboratory. It requires somebody who saw the same wound the day before, or a note good enough to stand in for one.\n\nSystemic signs carry more weight than any local one. A patient who becomes feverish, confused or simply unlike themselves has told you more than the wound has, and in an older patient that change may be the only thing you get.\n\nAsk the patient whether the wound feels different rather than only looking at it. Increasing pain in a wound that was settling is one of the earliest signs there is, and it appears before anything is visible to somebody standing over it."
        },
        {
          "id": "B",
          "heading": "Taking a swab",
          "body": "Do not swab a wound routinely. Every wound that has been open for more than a few hours carries bacteria, and a swab taken from a wound that is not infected produces a result somebody will feel obliged to treat.\n\nSwab only where the wound is clinically infected on the findings above.\n\nCleanse the wound first. A swab rolled across surface debris reports the debris. Take the sample from the deepest viable tissue you can reach, with enough pressure to express fluid rather than skim it.\n\nA result that arrives without any of this is worse than no result. It names an organism, somebody reads the name, and a decision gets made about a wound nobody has looked at since.\n\nWrite on the form which antibiotic has already been started, and at what time. A laboratory that does not know this cannot tell you why nothing grew.\n\nSend the sample with the story attached. A laboratory that is told how long the wound has been there and what has already been given can interpret what grows; one that receives a bare tube can only report what it found."
        },
        {
          "id": "C",
          "heading": "Prescribing and reviewing",
          "body": "Record the indication on the chart beside the drug, the dose and the route. An antibiotic with no written reason is one nobody can safely stop, because nobody afterwards knows what it was for.\n\nSet a review date or a stop date at the moment of prescribing, not later.\n\nReview every antibiotic at 48 to 72 hours, when the cultures and the patient's response are both available. The decision at that point is to stop, to narrow, to continue, or to change the route — and \"continue\" is a decision that must be made rather than a thing that happens by default.\n\nNarrowing is the step most often skipped. A broad agent started before anything was known should not survive the arrival of a result that tells you what you are treating.\n\nSwitch from the drip to tablets once the patient is stable and absorbing. A cannula that stays in because nobody revisited the route is itself a source of infection.\n\nWrite the stop date on the chart at the moment the drug is started. A date decided at the beginning is kept far more often than one that somebody is expected to decide later, when they will be busy and will not know why it began."
        },
        {
          "id": "D",
          "heading": "Why the short course matters",
          "body": "Every course changes the bacteria a patient carries, and the change outlasts the illness. The organisms that survive are the ones the next course will have to defeat.\n\nDisturbed gut flora is what allows Clostridioides difficile to flourish, and that infection is frequently more dangerous than the one the antibiotic was given for.\n\nThe aim is the shortest effective course, decided in advance rather than extended out of caution. A day added because a patient still looks tired is a day given to every organism that survived the first seven.\n\nTell the patient to take the course exactly as prescribed, and not to stop when they feel better or keep what is left for next time. Leftover antibiotics are taken later, by the wrong person, for the wrong thing, in the wrong amount.\n\nTell the patient why the course is short, or they will assume it was cut off to save money. A person who believes they were undertreated keeps the remaining tablets, and that is exactly the behaviour the short course exists to prevent."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "the reason a laboratory needs to know about treatment already given?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "what \"continue\" must be rather than be allowed to happen?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "the finding that carries more weight than any local sign?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "what happens to the bacteria a patient carries?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "why a routine swab causes a problem?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "the risk created by a cannula nobody revisited?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "why the changes must be compared with yesterday?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "In which direction does redness travel when a wound is infected?",
          "answer": "outwards",
          "variants": [
            "outward",
            "spreading outwards",
            "beyond the margin"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "When should a wound be swabbed?",
          "answer": "when it is clinically infected",
          "variants": [
            "clinically infected",
            "only when infected",
            "if infected"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "From which tissue should the sample be taken?",
          "answer": "the deepest viable tissue",
          "variants": [
            "deepest viable tissue",
            "the deepest tissue",
            "deep tissue"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "What must be recorded on the chart beside the drug?",
          "answer": "the indication",
          "variants": [
            "indication",
            "the reason",
            "reason"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "At what point should every antibiotic be reviewed?",
          "answer": "48 to 72 hours",
          "variants": [
            "48-72 hours",
            "48 hours",
            "forty-eight to seventy-two hours"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Which infection flourishes when the gut flora is disturbed?",
          "answer": "Clostridioides difficile",
          "variants": [
            "C difficile",
            "C. diff",
            "clostridioides",
            "difficile"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "What should a patient not do with what is left of a course?",
          "answer": "keep it",
          "variants": [
            "keep them",
            "save it",
            "keep leftovers",
            "store it",
            "keep what is left"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "A wound must be ______________ before the sample is taken.",
          "answer": "cleansed",
          "variants": []
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Pain that is ______________ rather than settling suggests infection.",
          "answer": "increasing",
          "variants": [
            "getting worse",
            "worsening"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "A stable patient who is absorbing can be switched to ______________.",
          "answer": "tablets",
          "variants": [
            "oral",
            "by mouth",
            "oral tablets"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "A review or ______________ date is set at the moment of prescribing.",
          "answer": "stop",
          "variants": [
            "a stop date",
            "stopping"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "The aim is the shortest ______________ course.",
          "answer": "effective",
          "variants": []
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "In an older patient a change in the person may be the ______________ sign you get.",
          "answer": "only",
          "variants": [
            "the only one"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Oxygen therapy",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "oxygen-therapy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Oxygen is a medicine",
          "body": "Oxygen is prescribed, and what is prescribed is a target range of saturation, not a flow rate. The staff member at the bedside then chooses the device and the flow that keep the patient inside that range.\n\nFor most patients the target is 94 to 98 per cent. For a patient at risk of retaining carbon dioxide — long-standing lung disease, severe chest wall deformity, some neuromuscular conditions — the target is 88 to 92 per cent, and it is written on the chart before there is an emergency, not during one.\n\nThe reason for the lower target is that in these patients high concentrations of oxygen can worsen the retention of carbon dioxide, and the patient grows drowsy while the number on the monitor looks excellent.\n\nWriting the range rather than the flow also settles an argument before it starts. Two people who disagree about how much a patient needs can both be right about the number in front of them and still be treating different things; a range written on the chart gives them the same question to answer.\n\nMore is not better. Above the target range there is no benefit to be had, and there is harm available.\n\nTreat the prescription as you would any other. An entry that says only that oxygen was given, with no target and no signature, would not be accepted for any tablet on the same chart, and there is no reason it should be accepted here."
        },
        {
          "id": "B",
          "heading": "Choosing the device",
          "body": "Nasal cannulae are comfortable, allow eating and speech, and run at one to four litres a minute. The concentration they deliver varies with how the patient is breathing.\n\nA simple face mask runs at five to ten litres a minute and must never be run below five, because below that the patient rebreathes their own exhaled carbon dioxide from inside the mask.\n\nA Venturi mask draws in a fixed proportion of room air and delivers a set percentage whatever the patient's breathing is doing. That predictability is why it is chosen where the target is the lower one.\n\nComfort is not a small consideration either. A mask that a breathless patient keeps pulling off delivers nothing at all, and the device that stays on the face is often worth more than the device that looks better on paper.\n\nA reservoir mask at fifteen litres a minute is for emergencies, while somebody works out what is wrong.\n\nCheck what the patient is actually wearing, not what is written down. Devices are swapped during the night, at handover and on the way back from a scan, and the chart very often describes the one that was chosen rather than the one in place."
        },
        {
          "id": "C",
          "heading": "Watching the patient, not the number",
          "body": "A pulse oximeter needs a warm, well-perfused finger. Cold hands, poor circulation, shivering and dark nail varnish all produce readings that are wrong rather than absent, which is the dangerous kind.\n\nThe oximeter reports oxygen and nothing else. It says nothing whatever about carbon dioxide, and a patient can be retaining a great deal of it while the display reads ninety-six.\n\nA patient who becomes drowsy on oxygen needs a blood gas, not more oxygen. That drowsiness is the one presentation where the instinct to turn the flow up is exactly wrong.\n\nLook at the patient before the monitor. Somebody working hard to breathe is telling you something the display is not, and somebody peaceful with an alarming number on the screen usually has a probe that has slipped.\n\nRecord the reading, the device and the flow together. A saturation written without the oxygen beside it means nothing a week later.\n\nLook at the person before the monitor. A patient who is sitting forward, sweating and answering in single words is deteriorating whatever the number on the finger says, and the number is the last thing to move."
        },
        {
          "id": "D",
          "heading": "Coming off it",
          "body": "Wean by reducing the flow while keeping the patient inside the target range, and record each reduction so that the next person knows the direction of travel.\n\nA patient who has been stable in the target range on air does not need the cannulae left in place \"just in case\". Equipment that stays because nobody removed it is how a short admission becomes a long one.\n\nOxygen is never left running by a naked flame, and no oil or grease goes near valves or fittings.\n\nHome oxygen requires a formal assessment, not a cylinder that was left over from the ward. The assessment establishes whether the patient benefits at all, and a great many do not.\n\nWrite down who decided to reduce it and what happened afterwards. Coming off oxygen is a treatment decision like any other, and it is the one that is most often made quietly by whoever was passing at the time."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "the device chosen for its predictability?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "the readings that are wrong rather than absent?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "when the target range is written down?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "what a saturation means without the oxygen recorded beside it?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "why equipment is not left in place \"just in case\"?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "what happens above the target range?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "what a patient rebreathes from inside a mask?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "What is prescribed instead of a flow rate?",
          "answer": "a target range",
          "variants": [
            "target range",
            "a target saturation range",
            "target saturation"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "What is the target range for most patients?",
          "answer": "94 to 98 per cent",
          "variants": [
            "94-98%",
            "94 to 98%",
            "94-98 per cent",
            "94 to 98"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "What is the target for a patient at risk of retaining carbon dioxide?",
          "answer": "88 to 92 per cent",
          "variants": [
            "88-92%",
            "88 to 92%",
            "88-92 per cent",
            "88 to 92"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Which mask delivers a set percentage whatever the breathing?",
          "answer": "a Venturi mask",
          "variants": [
            "Venturi mask",
            "Venturi"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "What does the oximeter say nothing about?",
          "answer": "carbon dioxide",
          "variants": [
            "CO2",
            "the carbon dioxide"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "What does a patient who becomes drowsy on oxygen need?",
          "answer": "a blood gas",
          "variants": [
            "blood gas",
            "blood gases",
            "a gas"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "What must never go near valves or fittings?",
          "answer": "oil or grease",
          "variants": [
            "oil",
            "grease",
            "oil and grease"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "A simple face mask must never be run below ______________ litres a minute.",
          "answer": "five",
          "variants": [
            "5"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Dark nail ______________ can produce a false reading.",
          "answer": "varnish",
          "variants": [
            "polish",
            "nail varnish"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "A reservoir mask is run at ______________ litres a minute in an emergency.",
          "answer": "fifteen",
          "variants": [
            "15"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Weaning is done by ______________ the flow while staying inside the range.",
          "answer": "reducing",
          "variants": [
            "lowering",
            "turning down",
            "decreasing"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "In these patients high concentrations can worsen the ______________ of carbon dioxide.",
          "answer": "retention",
          "variants": [
            "retaining"
          ]
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Home oxygen requires a formal ______________ rather than a leftover cylinder.",
          "answer": "assessment",
          "variants": [
            "an assessment",
            "formal assessment"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Acute kidney injury",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "acute-kidney-injury",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Recognising acute kidney injury",
          "body": "Acute kidney injury is a sudden fall in kidney function, not a disease in itself. It is defined by a rise in serum creatinine of 26 micromol/L or more within 48 hours, a rise to one and a half times the baseline within seven days, or a urine output below 0.5 mL/kg/hour for more than six hours.\n\nThe commonest cause on a general ward is dehydration. A patient who has been vomiting, a patient who was kept nil by mouth for a procedure that was then delayed, and a patient given a diuretic in hot weather arrive at the same place by three different roads.\n\nMost cases are found on a blood result rather than at the bedside, and that is exactly why the fluid chart matters. A patient whose urine output is falling has told you something before the laboratory does.\n\nThe rise is missed more often than it should be, because a creatinine can double while still sitting inside the laboratory's printed normal range. A young and muscular patient and a frail and thin one do not start from the same place, and the number that decides anything is the change from that patient's own baseline."
        },
        {
          "id": "B",
          "heading": "The first response",
          "body": "Stop the drugs that make it worse. The list is short enough to remember: nonsteroidal anti-inflammatory drugs, angiotensin-converting enzyme inhibitors, angiotensin receptor blockers and diuretics. Metformin does not damage the kidney, but it accumulates when the kidney fails, so it is held as well.\n\nAssess the fluid state before giving fluid. A patient who is dry needs a fluid challenge; a patient who is overloaded will drown in one. Look at the jugular venous pressure, the lung bases and the weight chart, not the creatinine alone.\n\nExclude obstruction. A bladder scan takes two minutes, and a blocked catheter is the easiest cause there is to fix.\n\nSend a urine dipstick. Blood and protein together, in a patient who is not catheterised, point away from dehydration and towards the kidney itself. That patient needs a specialist opinion the same day.\n\nWrite down what you found and not only what you did. An assessment that was made but never recorded is made again by the next person, and a patient who has already been given a litre can be given a second one by somebody acting entirely in good faith."
        },
        {
          "id": "C",
          "heading": "Monitoring",
          "body": "Once acute kidney injury is recognised, the observations change. Record fluid in and fluid out on the same chart and total it every twelve hours; two charts kept by two people prove nothing.\n\nWeigh the patient daily, at the same time, on the same scales. A kilogram is a litre, and the weight chart will show a change before the creatinine does.\n\nRepeat the creatinine and the potassium at least daily. Potassium is the number that kills first: above 6.5 mmol/L it is an emergency whatever the patient looks like, and an electrocardiogram is part of that assessment rather than an optional extra.\n\nAgree who totals the chart and write that person's name on it. A column that everyone assumes somebody else has added up is a column that nobody adds up at all.\n\nAsk for the potassium to be telephoned through rather than left to appear on a screen. A result that arrives at nine in the evening and is first read at seven the next morning has spent the whole night doing nothing for the patient it belongs to.\n\nAsk for renal replacement therapy when the potassium, the acidosis, the fluid overload or the uraemia cannot be controlled by any other means."
        },
        {
          "id": "D",
          "heading": "Preventing the next one",
          "body": "An episode of acute kidney injury is not a closed event. A patient who has had one is at higher risk of another, and at higher risk of chronic kidney disease years later.\n\nGive every patient sick day rules in writing before they go home: which medicines to stop during vomiting, diarrhoea or fever, and when to start them again. Advice given aloud on a ward round is forgotten by the car park.\n\nRestart held medicines deliberately, with a named person and a date, and write both in the discharge letter. Medicines that are held and never restarted are a recognised harm.\n\nArrange a repeat blood test in the community. A creatinine that has not returned to baseline by three months is chronic kidney disease, and it needs a different plan.\n\nSay plainly to the patient, in words they can repeat at home, that a kidney which has recovered is not the same as a kidney that was never injured at all.\n\nUse the name of the condition with them, and write that name in the letter as well. A patient who was never told what happened to them cannot mention it to the next clinician, and that clinician will go on to prescribe as though the episode had never taken place.\n\n---"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "the drugs that should be held immediately?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "the numbers that define the condition?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "how often the patient should be weighed?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "what should be written in the discharge letter?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "the commonest cause seen on a general ward?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "the scan that rules out a blocked bladder?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "the potassium level that is an emergency?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "By how much must serum creatinine rise within 48 hours?",
          "answer": "26 micromol/L",
          "variants": [
            "26 micromol per litre",
            "26"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "What is the commonest cause on a general ward?",
          "answer": "dehydration",
          "variants": []
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Which scan excludes obstruction?",
          "answer": "a bladder scan",
          "variants": [
            "bladder scan"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Which drug is held because it accumulates rather than because it harms the kidney?",
          "answer": "metformin",
          "variants": []
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Which number kills first?",
          "answer": "potassium",
          "variants": []
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "What does one kilogram of body weight represent?",
          "answer": "a litre",
          "variants": [
            "one litre",
            "litre"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "What must every patient be given in writing before going home?",
          "answer": "sick day rules",
          "variants": [
            "the sick day rules"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Nonsteroidal anti-inflammatory drugs, angiotensin-converting enzyme inhibitors, angiotensin receptor blockers and ______________ should all be stopped.",
          "answer": "diuretics",
          "variants": []
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Blood and protein together on the dipstick point towards the ______________ itself.",
          "answer": "kidney",
          "variants": [
            "the kidney"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Fluid in and fluid out should be totalled every ______________.",
          "answer": "twelve hours",
          "variants": [
            "12 hours"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Above 6.5 mmol/L, potassium is an ______________.",
          "answer": "emergency",
          "variants": [
            "an emergency"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "A creatinine that has not returned to baseline by three months is ______________.",
          "answer": "chronic kidney disease",
          "variants": []
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Held medicines must be restarted with a named person and a ______________.",
          "answer": "date",
          "variants": [
            "a date"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Blood transfusion safety",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "blood-transfusion-safety",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Before the transfusion",
          "body": "A transfusion begins with a decision, not with a bag. Record why the patient needs blood, what the alternative was, and what the patient was told. Consent is a conversation, and it belongs in the notes.\n\nThe sample for grouping is taken and labelled at the bedside, by the same person, in one unbroken action. Labels written in advance, and labels written at the desk, are the two commonest routes to giving the wrong blood to the wrong patient.\n\nAsk the patient to state their full name and date of birth. Do not read the details out and wait to be agreed with; a frightened or drowsy patient will agree with almost anything.\n\nThe request form and the sample must carry the same details, written by the same hand at the same moment. A form completed by one person for a sample taken by another breaks the only link the laboratory has.\n\nTwo samples taken at different times are required before a first transfusion, so that one mislabelled tube cannot decide a blood group on its own.\n\nAsk the question open, and let the patient answer it. A frightened or drowsy person will agree with almost any name that is read out to them, and agreement is not identification. Where the patient cannot answer at all, say so on the form rather than leaving the space to be read later as a check that was made."
        },
        {
          "id": "B",
          "heading": "Checking the unit",
          "body": "The final check happens at the bedside, with the patient, immediately before the transfusion starts. It cannot be done at the desk and it cannot be done in advance.\n\nCheck the identity band against the compatibility label on the bag: family name, first name, date of birth and the identification number. Check the donation number and the blood group on the bag against the label. Check the expiry date. Then look at the bag itself, for leaks, clumps or an unusual colour.\n\nOne trained person may perform this check alone, but they may not be interrupted while performing it.\n\nIf anything at all does not match, stop, and return the unit to the laboratory. Do not correct a label.\n\nBlood given to the wrong patient is almost never a laboratory error. It is a bedside error, and this check is the last place at which it can still be caught.\n\nThat is the whole reason the check may not be interrupted. A person who is halfway through it and is called away comes back believing they finished, and there is nothing on the bag or the band that shows where they stopped. If you are interrupted, begin the check again from the start."
        },
        {
          "id": "C",
          "heading": "During the transfusion",
          "body": "Take a full set of observations before the unit is started, again at fifteen minutes, and again when the unit is finished. The fifteen-minute set matters most: severe reactions declare themselves early, and a patient who is going to deteriorate usually does so inside that window.\n\nWrite the donation number on the observation chart as the unit is started, so that a reaction can later be traced back to the exact bag.\n\nTell the patient what to report, in their own words and before the unit runs. Shivering, itching, a pain in the back, or simply a feeling that something is wrong are all reasons to call somebody, and a patient who has been told this will call far sooner than one who is waiting to be asked.\n\nKeep the patient where they can be seen. A transfusion running in a side room with the door closed is a transfusion nobody is watching.\n\nOne unit must be completed within four hours of leaving the controlled fridge. Blood that has been out longer than that is returned, not hurried.\n\nStop at the first sign of fever, rigors, breathlessness, low blood pressure, pain in the loin or the chest, or a rash — and keep the giving set."
        },
        {
          "id": "D",
          "heading": "When something goes wrong",
          "body": "Stop the transfusion, keep the intravenous line open with sodium chloride, and re-check the identity of the patient against the unit. Most severe reactions turn out to be a failure of identification somewhere earlier in the chain.\n\nTell the laboratory at once, and send back the unit, the giving set and fresh samples. The laboratory cannot investigate what it does not receive.\n\nRecord what happened and report it through the national haemovigilance scheme. Reporting is not an admission of blame; it is how the next patient is protected.\n\nA fever of one degree with no other feature may allow the transfusion to continue more slowly, but that decision belongs to a doctor who has seen the patient, and not to the person who started the unit.\n\nWrite the account of what happened while it is still fresh, and record the times as clocks showed them rather than as they are remembered afterwards. An investigation that begins a week later depends entirely on what was written on the day, and a gap in the timing is the one thing nobody can fill in later.\n\n---"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "what to do when a label does not match?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "how many samples are needed before a first transfusion?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "when the observations must be repeated?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "who must be told first when a reaction occurs?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "where the grouping sample must be labelled?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "what to look for on the bag itself?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "the time limit for completing one unit?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "Where is the grouping sample labelled?",
          "answer": "at the bedside",
          "variants": [
            "the bedside",
            "bedside"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "How many samples are required before a first transfusion?",
          "answer": "two samples",
          "variants": [
            "two"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Which set of observations matters most?",
          "answer": "the fifteen-minute set",
          "variants": [
            "fifteen-minute",
            "at fifteen minutes"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Within how long must one unit be completed?",
          "answer": "four hours",
          "variants": [
            "4 hours",
            "within four hours"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "What is kept open with sodium chloride?",
          "answer": "the intravenous line",
          "variants": [
            "intravenous line"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "What must be kept when a transfusion is stopped?",
          "answer": "the giving set",
          "variants": [
            "giving set"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Through which scheme is a reaction reported?",
          "answer": "haemovigilance",
          "variants": [
            "national haemovigilance"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Blood given to the wrong patient is almost never a ______________ error.",
          "answer": "laboratory",
          "variants": [
            "a laboratory error"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "A person performing the final check may not be ______________.",
          "answer": "interrupted",
          "variants": []
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Blood that has been out of the fridge too long is ______________, not hurried.",
          "answer": "returned",
          "variants": []
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Most severe reactions are a failure of ______________.",
          "answer": "identification",
          "variants": []
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "The laboratory cannot investigate what it does not ______________.",
          "answer": "receive",
          "variants": []
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Consent is a conversation and it belongs in the ______________.",
          "answer": "notes",
          "variants": [
            "the notes"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Chest pain and acute coronary syndrome",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "chest-pain-and-acute-coronary-syndrome",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "The first ten minutes",
          "body": "Chest pain that may be cardiac is a time-critical presentation. Record an electrocardiogram within ten minutes of the patient's arrival, and have it read by somebody competent to interpret it straight away. A tracing lying in a tray is not a test.\n\nGive aspirin 300 mg to chew, unless the patient has already taken it or is allergic to it. Chewing matters, because it is absorbed faster that way than as a tablet swallowed whole.\n\nAsk when the pain began. The clock that governs treatment starts at the onset of pain, not at the moment the patient reached the department, and a delay at home counts against the patient just as much as a delay on the ward.\n\nPain spreading to the jaw or the left arm, with sweating and nausea, is the classic picture. Older patients, women, and patients with diabetes are more likely to present without it, and they are the patients most often sent home.\n\nBreathlessness on its own, sudden exhaustion, or a vague sickness with no pain at all can be the whole presentation in those groups. Ask directly about what the person was doing when it began and whether it has happened before in a smaller way, because a story of the same feeling on the stairs last week carries more weight than any single description of the pain itself."
        },
        {
          "id": "B",
          "heading": "Reading the tracing",
          "body": "ST elevation in two leads looking at the same territory, or a new left bundle branch block, is treated as a blocked artery until it is proved otherwise. That patient needs the catheter laboratory, not a ward bed.\n\nWhere there is no ST elevation, the diagnosis rests on the troponin. A single normal troponin taken early excludes nothing; it is the second sample, taken after the interval the local laboratory specifies, that excludes it.\n\nA completely normal tracing does not exclude a heart attack either. Between a quarter and a third of tracings are normal at first presentation, and the tracing is repeated whenever the pain continues or changes in character.\n\nCompare with an old tracing wherever one exists. A change is worth far more than a snapshot, and the old tracing is usually in the notes of somebody who has already thought about this patient once before.\n\nWrite the time on every tracing as it is taken, and keep them in order. A series of three that cannot be put in sequence is worth less than one that can, and the question being asked of them is almost always what changed between them rather than what any single one of them shows."
        },
        {
          "id": "C",
          "heading": "Oxygen, opiates, and what not to give",
          "body": "Oxygen is given only when the saturation is below 94 per cent. Given routinely to a patient who is not hypoxic it does not help, and it may do harm.\n\nMorphine relieves pain and reduces the work of the heart, but it slows the absorption of the antiplatelet drugs given alongside it, so it is kept for pain that has not settled with a nitrate.\n\nDo not give a nitrate to a patient who has taken a drug for erectile dysfunction within the previous twenty-four hours, and allow longer for the longer-acting drugs of that group. The fall in blood pressure can be profound, and the patient will often not volunteer this unless asked directly and in private.\n\nReassurance is part of the treatment and not a substitute for it. A patient who is frightened has a faster heart rate and a heart that is working harder, and both of those make the injury worse.\n\nSay what is being done and why, in short sentences, and say it again after each thing that happens. A person in this position remembers very little of what is said once, and the silence between one procedure and the next fills with whatever they imagine.\n\nDo not give an intramuscular injection of anything at all. It raises the enzymes used to interpret the blood tests, and it makes clot-busting treatment more dangerous."
        },
        {
          "id": "D",
          "heading": "After the immediate phase",
          "body": "Every patient leaves with a plan they can say out loud: which medicines, what each one is for, and exactly what to do if the pain comes back. A plan the patient cannot repeat is a plan that stayed in the hospital.\n\nCardiac rehabilitation reduces death and readmission more reliably than most of the drugs do, and it remains the part of the plan most often left out of the discharge letter.\n\nAsk about mood before discharge. Low mood after a heart attack is common, and it is the strongest single predictor of whether the patient will take the medicines at all.\n\nSmoking is the modifiable factor with the largest and fastest effect. A brief, specific offer of help made at the bedside works better than advice given in general terms on the day of discharge.\n\nName the person who will follow this up and the week in which it will happen. A plan that belongs to nobody in particular belongs to the patient alone, and the patient has just had the worst week of their year.\n\n---"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "the time limit for recording the tracing?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "the drug that must not follow a treatment for erectile dysfunction?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "what makes a second blood sample necessary?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "what is most often missing from the discharge letter?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "how the first tablet should be taken?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "why an old tracing is useful?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "why injections into muscle are avoided?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "Within how long must an electrocardiogram be recorded?",
          "answer": "ten minutes",
          "variants": [
            "10 minutes",
            "within ten minutes"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "How much aspirin is given?",
          "answer": "300 mg",
          "variants": [
            "300 milligrams"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "What must the patient do with the aspirin?",
          "answer": "chew",
          "variants": [
            "chew it"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Which blood test carries the diagnosis when there is no ST elevation?",
          "answer": "the troponin",
          "variants": [
            "troponin"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Below which saturation is oxygen given?",
          "answer": "94 per cent",
          "variants": [
            "94%",
            "below 94 per cent"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Which treatment reduces death and readmission?",
          "answer": "cardiac rehabilitation",
          "variants": [
            "rehabilitation"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Which problem best predicts whether the medicines will be taken?",
          "answer": "low mood",
          "variants": [
            "mood"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "A new left bundle branch block is treated as a ______________ until proved otherwise.",
          "answer": "blocked artery",
          "variants": []
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "The clock that governs treatment starts at the ______________ of pain.",
          "answer": "onset",
          "variants": [
            "the onset"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Morphine slows the absorption of the ______________ drugs.",
          "answer": "antiplatelet",
          "variants": []
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Between a quarter and a third of tracings are ______________ at first presentation.",
          "answer": "normal",
          "variants": [
            "completely normal"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "An intramuscular injection makes clot-busting treatment more ______________.",
          "answer": "dangerous",
          "variants": []
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Smoking is the modifiable factor with the largest and fastest ______________.",
          "answer": "effect",
          "variants": []
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — An asthma attack in adults",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "an-asthma-attack-in-adults",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "How bad is this attack",
          "body": "Assess the severity before treating, and write the numbers down. A patient who cannot complete a sentence in one breath, whose peak flow is between 33 and 50 per cent of best or predicted, whose respiratory rate is 25 or more, or whose heart rate is 110 or more, is having an acute severe attack.\n\nThe life-threatening features differ in kind and not merely in degree: a silent chest, exhaustion, confusion, a saturation below 92 per cent, or a peak flow below 33 per cent. A normal carbon dioxide level in a patient who is this unwell is not reassuring. It means the patient is tiring.\n\nAsk about the last attack, about courses of steroid in the past year, and about any admission to intensive care. A previous near-fatal attack is the strongest single predictor of another one.\n\nDo not judge the severity by how calm the patient appears. Some of the sickest are quiet because they no longer have the breath to be anything else.\n\nWatch how the patient is sitting and what they are doing with their hands. A person leaning forward with their arms braced against the bed is working to breathe, whatever the numbers say, and a person who has stopped answering in order to save the breath has told you more than any single reading will."
        },
        {
          "id": "B",
          "heading": "Treatment",
          "body": "Give oxygen to hold the saturation between 94 and 98 per cent, and do not wait for a blood gas before giving it.\n\nSalbutamol is given through a nebuliser driven by oxygen in an acute severe or life-threatening attack. A spacer is enough for milder attacks, and used properly it works just as well.\n\nGive prednisolone by mouth, or hydrocortisone if the patient cannot swallow, and give it early. Steroid given in the first hour changes the outcome; steroid given at the end of the shift changes the paperwork.\n\nAdd ipratropium in a severe or life-threatening attack, or where the response to salbutamol has been poor.\n\nMagnesium sulfate is given as a single intravenous dose, and it is a decision for a senior doctor.\n\nWrite on the chart the time each treatment was actually given, not the time it was prescribed. The gap between those two times is where most of the delay in an attack hides.\n\nAntibiotics are not given routinely. Most attacks are triggered by a virus, and a wheeze on its own is not evidence of infection.\n\nGive the treatments in the order above rather than waiting to see how one works before starting the next. An attack that is treated in sequence over an hour has been given an hour in which to worsen, and the treatments do not compete with one another."
        },
        {
          "id": "C",
          "heading": "Watching the response",
          "body": "Repeat the peak flow fifteen to thirty minutes after treatment begins, and again before any decision to send the patient home. The measurement is only as good as the effort behind it, so watch it being done.\n\nMonitor the saturation continuously while nebulisers are running, and record the heart rate. Salbutamol raises it, and a rising rate is not on its own a reason to stop.\n\nCheck the potassium. Repeated salbutamol drives it down, and a low potassium in a tiring patient is a dangerous combination.\n\nA patient who has improved is not yet a patient who is well. Deterioration after apparent improvement is common in the hours that follow, and it is why the observation period is not negotiable.\n\nRecord the readings on one chart in one place, so that the shape of the last few hours can be seen at a glance. Three numbers written in three different notes describe a patient who is improving and a patient who is tiring equally well, and the difference between those two is the whole assessment."
        },
        {
          "id": "D",
          "heading": "Before they go home",
          "body": "Nobody is discharged on a peak flow below 75 per cent of best or predicted, or while the reading still swings widely between morning and evening.\n\nEvery patient goes home on a course of steroid tablets, with a written action plan, and with the inhaler technique checked in front of somebody. Technique is checked, never asked about: most patients say theirs is fine, and most of them are wrong.\n\nArrange review by the general practitioner within two working days, and by a specialist clinic within four weeks of an admission.\n\nGive the plan to somebody who lives with the patient as well. A person who is breathless and frightened at three in the morning is not the person best placed to read it for the first time.\n\nWrite on the plan what counts as bad enough to call for help, in numbers and in plain words. A patient told to come back if they feel worse will judge that against the worst night they remember.\n\nAsk the patient what they believe caused this attack. The answer often names the missed preventer, the new cat, or the month the prescription quietly ran out.\n\n---"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "which steroid is swallowed and which is not?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "the features that make an attack life-threatening?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "how soon the peak flow is repeated?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "how soon the family doctor should see the patient?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "the strongest predictor of a further attack?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "when magnesium is considered?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "the blood result that falls with repeated treatment?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "Below which peak flow is an attack life-threatening?",
          "answer": "33 per cent",
          "variants": [
            "33%",
            "below 33 per cent"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Which kind of chest is a life-threatening sign?",
          "answer": "a silent chest",
          "variants": [
            "silent chest",
            "silent"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "What must the nebuliser be driven by?",
          "answer": "oxygen",
          "variants": []
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Which steroid is given by mouth?",
          "answer": "prednisolone",
          "variants": []
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Which drug is added when the response to salbutamol has been poor?",
          "answer": "ipratropium",
          "variants": []
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Which blood result is driven down by repeated salbutamol?",
          "answer": "potassium",
          "variants": [
            "the potassium"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Within how long should the general practitioner review the patient?",
          "answer": "two working days",
          "variants": [
            "2 working days"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "A normal carbon dioxide level in a patient this unwell means the patient is ______________.",
          "answer": "tiring",
          "variants": []
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Oxygen is given to hold the saturation between 94 and ______________ per cent.",
          "answer": "98",
          "variants": [
            "98 per cent"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Antibiotics are not given routinely because most attacks are triggered by a ______________.",
          "answer": "virus",
          "variants": [
            "a virus"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Nobody is discharged on a peak flow below ______________ per cent of best or predicted.",
          "answer": "75",
          "variants": [
            "75 per cent"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Inhaler technique must be ______________ rather than asked about.",
          "answer": "checked",
          "variants": []
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "A specialist clinic should see the patient within ______________ weeks of an admission.",
          "answer": "four",
          "variants": [
            "four weeks"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Venepuncture and handling the sample",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "venepuncture-and-handling-the-sample",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "Before the needle",
          "body": "Identify the patient in their own words before anything is prepared. Ask for the full name and the date of birth, and check both against the request. A patient who is asked to confirm details that have been read out to them will confirm them, and that is exactly the failure the process exists to prevent.\n\nCheck what the request is for, because the order in which the tubes are filled depends on it, and check whether the patient was supposed to be fasting.\n\nAsk about a previous faint. A patient who has fainted before is a patient who will be lying down for this one, and saying so out loud costs nothing.\n\nLook at both arms before choosing. Avoid an arm with a drip running into it, an arm on the side of previous breast surgery, and an arm with a fistula. If the only available site is one of these, ask before proceeding rather than explaining afterwards.\n\nAsk the patient which arm has worked before. Somebody who has been bled fifty times knows more about their own veins than anybody standing over them with a needle, and the answer costs nothing and saves a second attempt more often than not."
        },
        {
          "id": "B",
          "heading": "Taking the sample",
          "body": "Apply the tourniquet no more than one hand's width above the chosen site, and release it as soon as the blood begins to flow. A tourniquet left on for more than a minute changes the potassium and the calcium, and what comes back is then the tourniquet's result rather than the patient's.\n\nLet the alcohol dry completely before the needle goes in. Wet alcohol stings, and it can disturb an alcohol level.\n\nDo not ask the patient to pump their fist. Repeated clenching raises the potassium on its own.\n\nFill the tubes in the order the laboratory specifies, so that an additive from one tube cannot carry over into the next.\n\nChoose the vein by feel and not by sight. A vein that is easy to see and impossible to feel is often a vein that will roll away from the needle, and a second attempt costs the patient more than the first one did.\n\nStop after two attempts and ask somebody else. Persistence past that point is not skill and the patient has already been told, by the first two, everything they need to know about how this is going.\n\nInvert each tube gently, the stated number of times. Shaking breaks the red cells, and a broken sample looks like a sick patient."
        },
        {
          "id": "C",
          "heading": "Labelling and transport",
          "body": "Label every tube at the bedside, in front of the patient, before leaving them. A tube labelled anywhere else is a tube nobody can trust, and the laboratory will reject it.\n\nWrite the name, the date of birth, the identification number, and the date and time the sample was taken. A missing time makes some results impossible to interpret at all.\n\nNever pre-label a tube, and never label from a sticker sheet belonging to another patient.\n\nBlood cultures go to the laboratory straight away and are not refrigerated. A blood gas is analysed within minutes. Most other tubes tolerate a delay, although a delay changes the potassium in any of them.\n\nIf a sample has been delayed, write that on the form instead of hoping that nobody notices. A result interpreted without knowing the delay is worse than no result at all, because somebody will act on it.\n\nSend the tubes as one set with one form. A single tube arriving on its own an hour behind the others is either matched to the wrong request or rejected, and both of those end with the patient being bled again."
        },
        {
          "id": "D",
          "heading": "Afterwards",
          "body": "Press on the site with a clean swab until the bleeding has stopped, and do not let the patient bend the arm instead. Bending traps blood under the skin and makes the bruise the patient will remember you by.\n\nDispose of the needle into the sharps container yourself, at the point of use. Do not resheath it, do not hand it to anybody else, and do not put it down.\n\nAsk the patient to stay seated for a few minutes if they look pale, and stay within sight of them while they do.\n\nRecord in the notes what was taken and when. A repeat sample taken only because nobody wrote down the first one is a second needle the patient never needed.\n\nTell the patient when and how they will hear the result, even if the answer is that somebody else will contact them. A person left without that sentence will spend the week assuming that no news is bad news, or that no news means it was never sent.\n\n---"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "what must be written on the tube?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "how long the tourniquet may stay on?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "which arms should be avoided?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "how the needle should be disposed of?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "what to ask a patient who has fainted before?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "why the tubes are filled in a set order?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "which sample must not be refrigerated?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "How far above the site is the tourniquet applied?",
          "answer": "one hand's width",
          "variants": [
            "a hand's width"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Which result rises if the patient pumps their fist?",
          "answer": "the potassium",
          "variants": [
            "potassium"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "What must dry completely before the needle goes in?",
          "answer": "the alcohol",
          "variants": [
            "alcohol"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Where must every tube be labelled?",
          "answer": "at the bedside",
          "variants": [
            "the bedside",
            "bedside"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Which samples are not refrigerated?",
          "answer": "blood cultures",
          "variants": [
            "cultures"
          ]
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "What must never be done to a used needle?",
          "answer": "resheath",
          "variants": [
            "resheath it"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "What should a pale patient be asked to do?",
          "answer": "stay seated",
          "variants": []
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Shaking a tube breaks the ______________.",
          "answer": "red cells",
          "variants": [
            "the red cells"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "A tube labelled away from the bedside is one the laboratory will ______________.",
          "answer": "reject",
          "variants": [
            "reject it"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "A missing ______________ makes some results impossible to interpret.",
          "answer": "time",
          "variants": [
            "the time"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Press on the site with a clean ______________ until the bleeding has stopped.",
          "answer": "swab",
          "variants": [
            "a clean swab"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "The needle is disposed of at the ______________ of use.",
          "answer": "point",
          "variants": [
            "the point"
          ]
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "A delay must be written on the ______________.",
          "answer": "form",
          "variants": [
            "the form"
          ]
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "title": "Part A — Sharps injury and exposure to blood",
    "prompt": "Read the four texts and answer the twenty questions. Answer questions 1–7 by choosing the text (A–D). Answer questions 8–20 with a word or short phrase taken from the texts.",
    "difficulty": "CORE",
    "topicTag": "sharps-injury-and-exposure-to-blood",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "texts": [
        {
          "id": "A",
          "heading": "The first few minutes",
          "body": "Stop what you are doing. Encourage the wound to bleed gently under running water, but do not scrub it and do not suck it. Wash it with soap and water, and then cover it.\n\nA splash to the eye or the mouth is washed out with plenty of water. Contact lenses are taken out and washed separately, and the eye is irrigated again once they are out.\n\nReport the injury at once to the person in charge, however small it looks and however busy the ward is. The clock that matters starts now: preventive treatment against HIV works best within a few hours, and its value falls with every hour that passes.\n\nDo not decide for yourself that the source patient is low risk. That judgement belongs to the occupational health service, which holds information about the source that you do not have and should not have.\n\nThe commonest reason an injury is never reported is that the person judged it too small to matter while they were still standing at the bedside. That judgement is made in the worst possible minute, by the person least able to make it, and it is the reason the rule says report first and assess afterwards."
        },
        {
          "id": "B",
          "heading": "The risk assessment",
          "body": "The assessment weighs three things: the device, the injury, and the source. A hollow needle that has been sitting in a vein carries far more risk than a solid suture needle, and a deep injury more than a scratch.\n\nBlood carries the highest risk. Saliva, urine, vomit and faeces carry none at all unless they are visibly bloodstained.\n\nThe three viruses considered are hepatitis B, hepatitis C and HIV. They are considered together because one injury exposes a person to all three at once, and because the actions taken about each of them are different and cannot wait for one another.\n\nConsent for testing is asked of the source patient by somebody who is not the injured member of staff. A patient may refuse, and a refusal is not evidence of infection.\n\nThe injured person's own hepatitis B status is checked at the same time. A booster is often all that is needed, and the record of the last one is usually the piece nobody can find.\n\nAsk how the injury actually happened, and write the answer down as it is given. The device, the depth and the moment are what the assessment turns on, and a description written a day later is shaped by what the person has decided since about how careless they were."
        },
        {
          "id": "C",
          "heading": "What may be offered",
          "body": "Preventive treatment against HIV is a course of tablets, begun as soon as possible and continued for four weeks. It causes nausea in many of the people who take it, and courses are stopped early because of the side effects far more often than because the risk has been revised.\n\nThere is no vaccine and no preventive treatment for hepatitis C. Instead the person is tested at intervals, and treatment now cures the great majority of those found to be infected.\n\nFor hepatitis B a vaccine exists, and immunoglobulin may be added for somebody who is not immune. Somebody who was vaccinated years ago and has never had the response measured counts as unknown rather than immune, and unknown is treated as not immune until the laboratory says otherwise.\n\nFollow-up blood tests are arranged over the months that follow, and they are the part most often missed once the fright has worn off.\n\nGive the dates in writing before the person leaves, and give them to somebody who will still be in that post in six months. An appointment held only in the memory of a member of staff who is about to rotate is an appointment that will not happen."
        },
        {
          "id": "D",
          "heading": "Preventing the next one",
          "body": "Most injuries happen at two moments: while a needle is being resheathed, and while a container that is already too full is being used. Neither of those is bad luck.\n\nFill a container to the line and no further, close it when it reaches the line, and label it with the ward and the date.\n\nTake the container to the patient rather than carrying an unprotected needle across a room. The distance between the bedside and the container is where a great many injuries are waiting.\n\nUse a safety device wherever one is provided, and activate it before the needle is put down. A guard that was never engaged protects nobody.\n\nReport every injury, even where no treatment follows. The pattern of injuries on a ward is the only evidence anybody has for changing the way that ward works.\n\nA ward that reports twenty and a ward that reports two are rarely different in what happens on them. They are different in what gets written down, and the quieter of the two is the one where nothing will ever be bought, moved or redesigned.\n\n---"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "how a container should be filled?",
          "answer": "D",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q2",
          "kind": "match",
          "stem": "what to do with contact lenses?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q3",
          "kind": "match",
          "stem": "which fluids carry no risk unless bloodstained?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q4",
          "kind": "match",
          "stem": "how long the course of tablets lasts?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q5",
          "kind": "match",
          "stem": "who decides whether the source is low risk?",
          "answer": "A",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q6",
          "kind": "match",
          "stem": "who asks the source patient for consent?",
          "answer": "B",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q7",
          "kind": "match",
          "stem": "which infection has no vaccine?",
          "answer": "C",
          "options": [
            {
              "id": "A",
              "text": "A"
            },
            {
              "id": "B",
              "text": "B"
            },
            {
              "id": "C",
              "text": "C"
            },
            {
              "id": "D",
              "text": "D"
            }
          ]
        },
        {
          "id": "q8",
          "kind": "gap",
          "stem": "What must not be done to the wound?",
          "answer": "scrub",
          "variants": [
            "scrub it"
          ]
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "What is a splash to the eye washed out with?",
          "answer": "plenty of water",
          "variants": [
            "water"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Which kind of needle carries far more risk?",
          "answer": "a hollow needle",
          "variants": [
            "hollow needle",
            "hollow"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "For how long is the course of tablets continued?",
          "answer": "four weeks",
          "variants": [
            "4 weeks"
          ]
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "What may be added for somebody who is not immune to hepatitis B?",
          "answer": "immunoglobulin",
          "variants": []
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "What is the usual reason a course is stopped early?",
          "answer": "the side effects",
          "variants": [
            "side effects"
          ]
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "What must be activated before the needle is put down?",
          "answer": "a safety device",
          "variants": [
            "safety device"
          ]
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Preventive treatment against HIV works best within a few ______________.",
          "answer": "hours",
          "variants": [
            "a few hours"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "A refusal by the source patient is not evidence of ______________.",
          "answer": "infection",
          "variants": []
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "The injured person's own ______________ status is checked at the same time.",
          "answer": "hepatitis B",
          "variants": []
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Follow-up blood tests are the part most often ______________.",
          "answer": "missed",
          "variants": []
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "A container should be filled to the ______________ and no further.",
          "answer": "line",
          "variants": [
            "the line"
          ]
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Report every injury even where no ______________ follows.",
          "answer": "treatment",
          "variants": []
        }
      ]
    },
    "guidanceNote": "Four texts on one topic: match first, then answer in one to three words taken straight from the text — several wordings are accepted, so write what you read."
  }
];
