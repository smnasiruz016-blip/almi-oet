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
          "body": "Anaphylaxis is likely when all three of the following are present:\n\n- sudden onset and rapid progression of symptoms\n- life-threatening airway, breathing or circulation problems\n- skin or mucosal changes — flushing, urticaria, angioedema\n\nSkin changes alone are not anaphylaxis. They are present in about 80 per cent of reactions, which\nmeans that in roughly one in five there are none, and their absence must never delay treatment where\nairway, breathing or circulation are compromised.\n\nExposure to a known allergen supports the diagnosis but is not required. In a substantial minority of\ncases no trigger is ever identified.\n\nConsider the alternatives: a severe asthma attack, a vasovagal episode (a faint), a panic attack, and,\nin young children, breath-holding. A faint is distinguished by bradycardia and by rapid recovery\nwhen the patient is laid flat. Anaphylaxis does not recover in that way."
        },
        {
          "id": "B",
          "heading": "Immediate management",
          "body": "Position first. Lie the patient flat with the legs raised if breathing allows; sit them up if\nbreathing is difficult; use the recovery position if unconscious. Do not stand or walk the\npatient — sudden standing during a reaction has caused cardiac arrest.\n\nAdrenaline 1 mg/mL (1:1000), intramuscular, into the anterolateral thigh:\n\nAdrenaline dose by age, with the volume to draw up:\nAdult and child over 12 years — 500 micrograms, 0.5 mL.\nChild 6–12 years — 300 micrograms, 0.3 mL.\nChild 6 months to 6 years — 150 micrograms, 0.15 mL.\nChild under 6 months — 100–150 micrograms, 0.1–0.15 mL.\n\nRepeat after 5 minutes if there is no improvement.\n\nEstablish the airway, give high-flow oxygen, and give an intravenous fluid bolus. Antihistamines and\ncorticosteroids are not first-line treatment and must never delay adrenaline.\n\nWhere more than two doses are needed, or where the reaction does not settle, seek critical care help\nearly rather than repeating intramuscular doses indefinitely."
        },
        {
          "id": "C",
          "heading": "After the reaction",
          "body": "Mast cell tryptase. Take the first sample as soon as feasible once treatment has started — do not\ndelay resuscitation to take it. Take a second at 1 to 2 hours and a third at 24 hours or at follow-up,\nthe last serving as the patient's own baseline.\n\nBiphasic reactions occur in up to 20 per cent of cases, usually within 12 hours of the first.\n\nObservation period after treatment:\n\nHow long to observe, and when:\nObserve 2 hours — good response to a single dose given within 30 minutes of onset, complete resolution.\nObserve 6 hours — two doses required, or a previous biphasic reaction.\nObserve 12 hours or overnight — more than two doses, severe asthma, ongoing reaction, late-night presentation, or no access to emergency care.\n\nBefore discharge: two adrenaline auto-injectors, training in their use, a written emergency plan,\nand referral to a specialist allergy service."
        },
        {
          "id": "D",
          "heading": "Triggers and risk",
          "body": "Commonest triggers. Food, especially in children — peanut, tree nut, milk, egg, shellfish. Drugs —\nantibiotics, neuromuscular blocking agents, non-steroidal anti-inflammatory drugs, contrast media.\nStings — wasp and bee.\n\nCo-factors lower the threshold at which a reaction occurs: exercise, alcohol, acute infection,\nnon-steroidal anti-inflammatory drugs and, in women, the pre-menstrual period. A patient may tolerate\na food repeatedly and then react to it when one of these is present.\n\nRisk factors for a fatal outcome: co-existing asthma, particularly when poorly controlled; delayed\nadrenaline; upright posture during the reaction; and adolescence, in which risk-taking and\nreluctance to carry an auto-injector combine. Nut allergy in adolescents is the pattern most often\nassociated with fatal food anaphylaxis.\n\nPatients taking beta-blockers may respond poorly to adrenaline, and glucagon may be required.\n\nIdiopathic anaphylaxis — where no trigger is found despite full investigation — accounts for a\nsignificant minority of adult cases. These patients carry auto-injectors indefinitely, because there\nis nothing for them to avoid."
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
          "body": "Sepsis is life-threatening organ dysfunction caused by a dysregulated response to infection. It is not\na diagnosis made from a temperature. A patient may have sepsis with an entirely normal temperature,\nand the very young, the very old and the immunosuppressed frequently do.\n\nScreen any patient with suspected infection using the national early warning score. A score of 5 or\nmore, or 3 in any single parameter, triggers senior review.\n\nRed flag findings — any one of which requires immediate action:\n\n- responds only to voice or to pain, or is unresponsive\n- systolic blood pressure 90 mmHg or below, or more than 40 below the patient's normal\n- heart rate above 130 per minute\n- respiratory rate 25 per minute or above\n- needs oxygen to keep saturation above 92 per cent\n- non-blanching rash, or mottled or ashen skin\n- has not passed urine in 18 hours\n- lactate 2 mmol/L or above\n- recent chemotherapy\n\nSepsis with no identified source is common. Do not delay treatment while the source is being sought."
        },
        {
          "id": "B",
          "heading": "The first hour",
          "body": "Where sepsis is suspected with any red flag, complete all six actions within one hour. Recognition,\nnot arrival, starts the clock.\n\nThe six actions, in order:\n1. Give high-flow oxygen, targeting 94–98 per cent (88–92 per cent if at risk of hypercapnia).\n2. Take blood cultures, and consider source control.\n3. Give intravenous antimicrobials — do not wait for cultures if taking them will delay treatment.\n4. Give intravenous fluid: 500 mL crystalloid in under 15 minutes, reassess, repeat to 30 mL/kg.\n5. Measure serum lactate.\n6. Measure hourly urine output.\n\nEscalate to critical care if the lactate remains above 2 mmol/L after fluid, or if vasopressors are\nneeded to maintain a mean arterial pressure of 65 mmHg."
        },
        {
          "id": "C",
          "heading": "Groups needing extra caution",
          "body": "Pregnancy and the six weeks after delivery. Physiological change masks deterioration: tachycardia\nand a lower blood pressure are normal, so the usual score thresholds are less reliable. Any pregnant\nwoman with suspected infection is seen by a senior obstetrician.\n\nNeutropenia. Recent chemotherapy is itself a red flag. Antimicrobials are given within one hour of\narrival, before the neutrophil count is known. Do not wait for the result.\n\nThe elderly. Confusion or a fall may be the only presentation, and fever is frequently absent. New\nconfusion in an older patient is treated as possible sepsis until it is shown not to be.\n\nChildren. Grunting, an inability to feed, and a dry nappy carry the weight that blood pressure\ncarries in adults. Hypotension in a child is a late and pre-terminal sign.\n\nAny woman who has had a caesarean section within the last six weeks belongs in the obstetric group."
        },
        {
          "id": "D",
          "heading": "After the first hour",
          "body": "Source control is the step most often delayed and the one that most often decides the outcome:\ndrainage of an abscess, removal of an infected line, debridement, or delivery in obstetric sepsis.\nAntimicrobials cannot sterilise an undrained collection.\n\nReview the antimicrobial at 48 to 72 hours against the culture result, and narrow it. Continuing\nbroad-spectrum cover because the patient improved is the commonest reason a course ends up too broad\nand too long.\n\nPost-sepsis syndrome affects a substantial proportion of survivors: fatigue, poor concentration,\nmuscle weakness, low mood and repeated infections, lasting months. Patients are rarely warned about\nit, and the commonest thing they report afterwards is being told they were lucky and then feeling\nunwell for a year with no explanation offered.\n\nDebrief the patient before discharge. Being told what actually happened, in plain words, is the single\nrequest that survivors make most often."
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
          "body": "Assess risk within six hours of admission and at every change in condition, using a validated tool and\nclinical judgement together. A tool is a prompt and not a decision: a patient the tool scores as low\nrisk, who has a heel nobody has looked at, is a high-risk patient.\n\nInspect the skin at every repositioning. Look at the sacrum, the heels, the ischial tuberosities, the\ngreater trochanters, the elbows, the occiput in children and in anyone lying flat, and under and\naround every device.\n\nNon-blanching erythema is the earliest visible sign, and it is category 1 damage rather than a warning\nof it. Press the area with a finger for three seconds; if the redness does not go white, damage has\nalready occurred.\n\nIn darker skin, colour change may not be visible at all. Use temperature, firmness, a boggy or\noedematous texture, and the patient's report of pain, which frequently precedes any visible sign.\n\nRecord what was seen and not that an inspection took place. \"Skin intact\", on a chart that names no\nsite, is not a record of anything."
        },
        {
          "id": "B",
          "heading": "Categories of damage",
          "body": "Category 1 — intact skin with non-blanching redness.\nCategory 2 — partial-thickness loss of dermis: a shallow open ulcer, or an intact or ruptured blister.\nCategory 3 — full-thickness loss; subcutaneous fat may be visible; bone, tendon and muscle are not exposed.\nCategory 4 — full-thickness loss with exposed bone, tendon or muscle.\nUnstageable — base covered by slough or eschar, so the depth cannot be determined.\nDeep tissue injury — purple or maroon intact skin, or a blood-filled blister.\n\nDo not reverse-grade. An ulcer that is healing is recorded as a healing category 3, never as a\ncategory 2.\n\nStable dry eschar on the heel is not debrided. It acts as a natural cover and is left intact unless\nthere is redness, fluctuance or drainage."
        },
        {
          "id": "C",
          "heading": "Repositioning and support surfaces",
          "body": "Reposition at least four-hourly on a high-specification foam mattress, and at least two-hourly if the\npatient is not on one. The frequency increases wherever the skin shows early change, whatever the\nsurface underneath.\n\nUse the 30-degree tilt rather than a 90-degree side-lying position, which loads the greater trochanter\ndirectly. Do not raise the head of the bed above 30 degrees for longer than is necessary, because\nsliding down the bed generates shear.\n\nHeels are offloaded, not cushioned. A pillow placed lengthwise under the calf, so that the heel floats\nclear of the bed, is more effective than any heel pad and costs nothing.\n\nNever drag a patient up the bed. Use the slide sheet and remove it afterwards: a slide sheet left in\nplace defeats a pressure-relieving mattress.\n\nSitting out in a chair is not rest from pressure. An unrelieved sitting period concentrates load on\nthe ischial tuberosities and is limited to two hours."
        },
        {
          "id": "D",
          "heading": "Nutrition, moisture and devices",
          "body": "Screen nutrition on admission and weekly thereafter. Protein and energy deficit slows healing, and\nthin subcutaneous tissue offers less protection — but there is no evidence for routinely supplementing\na patient who is not malnourished.\n\nMoisture-associated damage is not pressure damage, and the two are treated differently. Moisture\ndamage is diffuse, has irregular edges and spreads across skin folds; pressure damage is localised\nover a bony prominence and has a defined edge. A barrier product treats the first and does nothing\nwhatever for the second.\n\nDevice-related damage now accounts for a substantial proportion of hospital-acquired ulcers:\noxygen tubing behind the ear, a nasogastric tube against the nostril, a saturation probe, an\nanti-embolism stocking with a wrinkle in it. Inspect under every device at least twice a day, and\nreposition the device itself and not only the patient."
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
          "body": "Hypoglycaemia is a blood glucose below 4.0 mmol/L. The phrase used on the wards is \"four is the floor\",\nand the number matters because treatment should not wait for a patient to look unwell.\n\nThe early warning symptoms are autonomic: sweating, trembling, palpitations, hunger and a sudden\nanxiety the patient often cannot explain. These are the body's alarm and they appear first.\n\nIf the glucose falls further, the brain itself runs short of fuel. This produces confusion, drowsiness,\nslurred speech, difficulty concentrating and behaviour that is out of character. Staff who do not know\nthe patient may read these as intoxication, a stroke or simple awkwardness.\n\nThe change is very often noticed by somebody else before the patient notices it in themselves — a\ncolleague, a relative, or the person in the next bed. A patient who is normally careful and becomes\nirritable over something small should have a glucose measured before anybody decides what sort of\nbehaviour they are looking at.\n\nSome patients lose the early alarm altogether after years of repeated episodes. In impaired awareness\nof hypoglycaemia the first sign is confusion, with no warning stage at all."
        },
        {
          "id": "B",
          "heading": "Immediate treatment",
          "body": "Treat first and document afterwards. Never send a symptomatic patient for a laboratory result before\ntreating.\n\nConscious, able to swallow — 15–20 g fast-acting carbohydrate: 4–5 glucose tablets, or 150–200 mL of pure fruit juice.\nConscious but uncooperative — glucose gel squeezed between the gum and the cheek.\nUnconscious or unable to swallow — nothing by mouth; 1 mg glucagon by intramuscular injection, or intravenous glucose.\n\nDo not reach for a chocolate bar or a biscuit as the first treatment. The fat in them slows absorption\ndown, and a patient who needs sugar within minutes does not have those minutes to spare. The same\napplies to a fizzy drink from which the sugar has been removed.\n\nRecheck the glucose after 15 minutes. If it is still below 4.0 mmol/L, repeat the fast-acting\ncarbohydrate. Once the level is above 4.0, give a portion of long-acting carbohydrate such as toast or\na sandwich, or the next meal if it is due."
        },
        {
          "id": "C",
          "heading": "After the episode",
          "body": "Do not leave the patient alone until they have eaten the long-acting carbohydrate and their glucose is\nstable.\n\nRecord the reading, the treatment given, the time and the response. An episode that is treated and\nnever written down cannot be prevented.\n\nDo not omit the next dose of insulin without a medical review. Stopping insulin after a hypoglycaemic\nepisode is a common reaction and it produces a dangerous rise later the same day.\n\nAsk the patient what they noticed first, and write down the words they use. Their own description is\nthe best guide there is to whether their warning symptoms are still working, and it is a question\nalmost nobody thinks to ask.\n\nEvery episode should prompt the question of why it happened. Review the timing of medication against\nmeals, recent weight loss, kidney function and alcohol."
        },
        {
          "id": "D",
          "heading": "Who is at risk",
          "body": "Insulin and the sulfonylurea tablets are the two treatments that cause hypoglycaemia. Metformin alone\ndoes not.\n\nHypoglycaemia caused by a sulfonylurea can last many hours and may return after apparent recovery.\nThese patients require admission and observation, not simply a sandwich and discharge.\n\nAlcohol blocks the liver's production of glucose. The resulting episode is often delayed, occurring\nduring the night after drinking, and is easily mistaken for drunkenness by everyone present.\n\nKidney function matters because insulin and several of the tablets are cleared by the kidneys. As that\nclearance falls, a dose which has been safe for years begins to build up in a patient who has changed\nnothing at all about what they take.\n\nOther risks include a missed or delayed meal, unusual exercise, vomiting, declining kidney function and\nincreasing age."
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
          "body": "The four letters of FAST are Face, Arms, Speech and Time. Ask the person to smile and look for one\nside of the face drooping. Ask them to raise both arms and watch for one drifting down. Listen for\nspeech that is slurred, or for words that come out in the wrong order.\n\nNot every stroke fits those three. Sudden loss of vision in one eye, sudden severe dizziness with\nunsteadiness, or a sudden headache unlike any the person has had before are all recognised\npresentations, and all of them are missed more often than the classic picture.\n\nThe person themselves is often the last to know. Weakness down one side can go entirely unremarked by\nthe patient while everybody else in the room can see it, and a stroke that takes speech may leave them\nunable to tell anyone that anything is wrong at all. For that reason the account of somebody who was\npresent matters as much as the patient's own.\n\nThe symptoms are almost always painless and they begin abruptly. A patient who says the weakness\n\"came on over a week\" is describing something else, and that difference is worth asking about\ndirectly rather than assuming."
        },
        {
          "id": "B",
          "heading": "What to do first",
          "body": "Call the emergency services immediately. Do not wait to see whether the symptoms settle, and do not\narrange transport yourself.\n\nRecord the time the person was last known to be well. If they woke with the symptoms, the last\nknown well time is when they went to bed. This single fact decides which treatments are open to them\nand it is the one thing nobody else can supply later.\n\nCheck the blood glucose. Hypoglycaemia produces one-sided weakness and confused speech and is treated\nin minutes; it is the most important condition that copies a stroke.\n\nGive nothing by mouth — no food, no drink, and no tablets — until swallowing has been assessed.\n\nDo not give aspirin. It is a reasonable instinct and it is wrong here, because a bleed and a clot look\nidentical at the bedside."
        },
        {
          "id": "C",
          "heading": "In the first hours",
          "body": "A brain scan is needed urgently, and its first purpose is to separate a bleed from a clot. Nothing\nthat thins the blood may be given until that question is answered.\n\nWhere the cause is a clot, clot-busting treatment can be given within 4.5 hours of the onset of\nsymptoms. The benefit falls with every minute of delay, which is why the time of onset governs\neverything.\n\nFor a clot in one of the large vessels, mechanical removal may be offered, and in carefully selected\npatients this remains possible up to 24 hours.\n\nBefore any food, drink or oral medicine, a trained member of staff screens the swallow. Half of\npatients have an unsafe swallow in the first days, and pneumonia from aspiration is a leading cause of\ndeath after stroke."
        },
        {
          "id": "D",
          "heading": "Afterwards",
          "body": "Blood pressure is usually high in the first hours and is not routinely lowered, because the injured\nbrain depends on that pressure to keep the surrounding tissue alive.\n\nAn irregular pulse should be investigated. Atrial fibrillation allows clots to form in the heart and\ntravel to the brain, and it is treatable once it is found.\n\nRehabilitation begins within days, not weeks. Early sitting, swallowing work and speech therapy change\nthe outcome more than anything offered later.\n\nThe other risk factors are the familiar ones: high blood pressure, smoking, diabetes and raised\ncholesterol. Each is worth addressing, and each is a reason this patient's family should be asked\nabout their own.\n\nNobody should be told that a stroke is simply part of growing older. Most of what causes one can be\ntreated, and the conversation that follows an admission is often the most useful thing a family will\never be given."
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
          "body": "Every patient is assessed for the risk of a blood clot within 24 hours of admission, and again if\ntheir condition changes. The assessment is not a formality: a clot in the lung remains one of the most\ncommon preventable causes of death in hospital.\n\nThe things that raise the risk are ordinary. Being unable to move about is the largest of them, and it\nis produced as easily by a long wait on a trolley as by an operation. Surgery lasting more than ninety\nminutes, cancer, a clot in the past, pregnancy and the six weeks after it, dehydration, obesity and\nage over sixty all add to the total.\n\nNone of these is remarkable on its own, and that is the difficulty. A clot rarely follows one dramatic\nevent; it follows an ordinary week in which nobody added the small things together.\n\nAssess the risk of bleeding at the same time and on the same page. Active bleeding, a low platelet\ncount, a recent stroke, uncontrolled blood pressure and a lumbar puncture within the last four hours\neach change what can safely be offered."
        },
        {
          "id": "B",
          "heading": "What is offered",
          "body": "Keeping the patient hydrated and getting them moving early are the two measures that cost nothing and\nare forgotten most often. Neither replaces the rest, and neither is optional.\n\nAnti-embolism stockings squeeze the leg from the ankle upwards and are measured for each patient\nbefore they are fitted. They must not be used where there is peripheral arterial disease, severe\nswelling of the legs, or a local skin condition, and a stocking applied to a leg with poor circulation\ncan cause an ulcer in days.\n\nA stocking that has rolled down, been folded over at the top, or been left on a leg it was never\nmeasured for is worse than no stocking at all, because everybody in the room believes the patient is\nprotected.\n\nIntermittent pneumatic compression sleeves inflate and deflate around the calf and suit patients who\ncannot have stockings.\n\nWhere the bleeding risk allows, an injected anticoagulant is prescribed. This is the measure with the\nstrongest evidence behind it, and the one most often omitted because somebody was uncertain."
        },
        {
          "id": "C",
          "heading": "What to watch for",
          "body": "A clot in a leg usually announces itself on one side only. Look for swelling of one calf, warmth,\ntenderness along the vein and a change in colour. Comparing the two legs is worth more than examining\none.\n\nA clot that reaches the lung presents differently. Sudden breathlessness, chest pain that is worse on\nbreathing in, coughing up blood, or a collapse are all recognised, and any of them in a patient who\nhas been immobile deserves an immediate senior review.\n\nDo not wait for all of the signs. One of them, in a patient who has spent a week in a chair, is enough\nto ask somebody senior to look.\n\nInspect the skin under stockings daily, and remove them for a short time to do it. Pressure damage\nunder a stocking is caused by the very treatment that was meant to help."
        },
        {
          "id": "D",
          "heading": "Before the patient goes home",
          "body": "Explain how long any anticoagulant is to continue and what happens if a dose is missed. A patient who\nstops early because the box has run out has been failed by the discharge, not by themselves.\n\nExplain that the risk does not end at the door. It stays raised for weeks after an operation or a\nperiod in bed, and most clots that follow an admission appear after the patient has gone home.\n\nGive the signs to report, in writing, and say plainly who to telephone and when. A patient who has\nbeen told to \"keep an eye out\" has been told nothing at all, and will decide at two in the morning that\nthey do not want to be a nuisance."
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
          "body": "A small group of medicines is responsible for most of the serious harm that comes from medication.\nThey are not unusual drugs; they are the ones given every day on every ward.\n\nInsulin, the anticoagulants, the strong opioids, concentrated potassium and methotrexate appear on\nevery list of this kind, in every country that has looked. What they share is a narrow margin: the\ndose that treats and the dose that harms are close together, and the harm is severe when it happens.\n\nThe list is short on purpose. A ward cannot treat five hundred medicines as though each one could kill,\nand pretending otherwise spreads attention so thinly that nothing is watched properly. Naming a small\ngroup is what allows the extra checks to be real ones.\n\nErrors with these medicines are rarely the work of a careless person. They follow from a name that\nresembles another name, a chart copied at speed, an abbreviation read the way it was written rather\nthan the way it was meant, and a ward where interruption is normal."
        },
        {
          "id": "B",
          "heading": "Before it is given",
          "body": "Check the patient, the medicine, the dose, the route and the time, and check them against the chart\nrather than against what somebody has told you.\n\nWrite \"units\" in full. The letter U written beside a number is read as a nought by somebody who\ndid not write it, and ten becomes a hundred in the space of one character.\n\nA high-risk medicine needs an independent double check. Independent means the second person works from\nthe chart and reaches their own answer. If they were shown the syringe and asked whether it looked\nright, the check did not happen.\n\nNone of this is about distrusting the person who prescribed. It is about the fact that a number written\nby one tired person at midnight is read by another tired person at six, and neither of them can see\nwhat the other meant.\n\nMethotrexate is taken weekly, not daily. The day of the week belongs on the label and the patient\nshould be able to say which day it is."
        },
        {
          "id": "C",
          "heading": "Storage and preparation",
          "body": "Concentrated potassium is not kept on general wards. Where it is stocked at all it is separated, marked\nand counted, because a concentrated solution given quickly stops the heart.\n\nMedicines whose names or packaging resemble one another are stored apart rather than side by side. A\nnotice asking staff to take more care works until the week it matters; moving one of the two boxes\nworks every week.\n\nThe same reasoning applies to strengths of the same drug kept in one drawer. Two boxes that differ only\nin a number are two boxes that will be confused, however experienced the hand reaching for them.\n\nLabel a syringe the moment it is drawn up, and never accept an unlabelled one from another person. A\nclear liquid in a plastic barrel carries no information at all about what it is."
        },
        {
          "id": "D",
          "heading": "When something goes wrong",
          "body": "Tell the patient. An error that reached them is theirs to know about, and a service that hides small\nerrors will not hear about the large ones.\n\nReport it, promptly and in full, including the errors that harmed nobody. Those are the cheapest\ninformation a hospital ever gets, because the same hole is waiting for somebody else.\n\nThe staff member involved is sometimes called the second victim, and the phrase is not sentimental.\nPeople leave the profession over an error that a better system would have caught.\n\nAsking who did it produces one careful person and a ward that has learned to say nothing. Asking how it\nhappened produces a change that protects everybody, including the people who have not made the mistake\nyet.\n\nFix the system, not the person. Ask what made this possible at three in the morning on a short-staffed\nward, and change that."
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
          "body": "A wound that is healing normally is warm, a little red at its edges and mildly uncomfortable in the\nfirst days. Those three findings on their own are not an infection, and treating them as one is how a\ngreat many unnecessary courses of antibiotics begin.\n\nWhat distinguishes infection is the direction of travel. Redness that spreads outwards beyond the\nwound margin, pain that is increasing rather than settling, discharge that has become thick and\ncoloured, a smell that was not there before, and a wound that has stopped closing when it had begun\nto — these are the changes that matter, and each of them is a comparison with yesterday rather than a\nsingle observation today.\n\nNone of that requires a laboratory. It requires somebody who saw the same wound the day before, or a\nnote good enough to stand in for one.\n\nSystemic signs carry more weight than any local one. A patient who becomes feverish, confused or\nsimply unlike themselves has told you more than the wound has, and in an older patient that change may\nbe the only thing you get."
        },
        {
          "id": "B",
          "heading": "Taking a swab",
          "body": "Do not swab a wound routinely. Every wound that has been open for more than a few hours carries\nbacteria, and a swab taken from a wound that is not infected produces a result somebody will feel\nobliged to treat.\n\nSwab only where the wound is clinically infected on the findings above.\n\nCleanse the wound first. A swab rolled across surface debris reports the debris. Take the sample from\nthe deepest viable tissue you can reach, with enough pressure to express fluid rather than skim it.\n\nA result that arrives without any of this is worse than no result. It names an organism, somebody reads\nthe name, and a decision gets made about a wound nobody has looked at since.\n\nWrite on the form which antibiotic has already been started, and at what time. A laboratory that does\nnot know this cannot tell you why nothing grew."
        },
        {
          "id": "C",
          "heading": "Prescribing and reviewing",
          "body": "Record the indication on the chart beside the drug, the dose and the route. An antibiotic with no\nwritten reason is one nobody can safely stop, because nobody afterwards knows what it was for.\n\nSet a review date or a stop date at the moment of prescribing, not later.\n\nReview every antibiotic at 48 to 72 hours, when the cultures and the patient's response are both\navailable. The decision at that point is to stop, to narrow, to continue, or to change the route — and\n\"continue\" is a decision that must be made rather than a thing that happens by default.\n\nNarrowing is the step most often skipped. A broad agent started before anything was known should not\nsurvive the arrival of a result that tells you what you are treating.\n\nSwitch from the drip to tablets once the patient is stable and absorbing. A cannula that stays in\nbecause nobody revisited the route is itself a source of infection."
        },
        {
          "id": "D",
          "heading": "Why the short course matters",
          "body": "Every course changes the bacteria a patient carries, and the change outlasts the illness. The organisms\nthat survive are the ones the next course will have to defeat.\n\nDisturbed gut flora is what allows Clostridioides difficile to flourish, and that infection is\nfrequently more dangerous than the one the antibiotic was given for.\n\nThe aim is the shortest effective course, decided in advance rather than extended out of caution. A day\nadded because a patient still looks tired is a day given to every organism that survived the first\nseven.\n\nTell the patient to take the course exactly as prescribed, and not to stop when they feel better or\nkeep what is left for next time. Leftover antibiotics are taken later, by the wrong person, for the\nwrong thing, in the wrong amount."
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
          "body": "Oxygen is prescribed, and what is prescribed is a target range of saturation, not a flow rate. The\nstaff member at the bedside then chooses the device and the flow that keep the patient inside that\nrange.\n\nFor most patients the target is 94 to 98 per cent. For a patient at risk of retaining carbon dioxide —\nlong-standing lung disease, severe chest wall deformity, some neuromuscular conditions — the target is\n88 to 92 per cent, and it is written on the chart before there is an emergency, not during one.\n\nThe reason for the lower target is that in these patients high concentrations of oxygen can worsen the\nretention of carbon dioxide, and the patient grows drowsy while the number on the monitor looks\nexcellent.\n\nWriting the range rather than the flow also settles an argument before it starts. Two people who\ndisagree about how much a patient needs can both be right about the number in front of them and still\nbe treating different things; a range written on the chart gives them the same question to answer.\n\nMore is not better. Above the target range there is no benefit to be had, and there is harm available."
        },
        {
          "id": "B",
          "heading": "Choosing the device",
          "body": "Nasal cannulae are comfortable, allow eating and speech, and run at one to four litres a minute. The\nconcentration they deliver varies with how the patient is breathing.\n\nA simple face mask runs at five to ten litres a minute and must never be run below five, because\nbelow that the patient rebreathes their own exhaled carbon dioxide from inside the mask.\n\nA Venturi mask draws in a fixed proportion of room air and delivers a set percentage whatever the\npatient's breathing is doing. That predictability is why it is chosen where the target is the lower\none.\n\nComfort is not a small consideration either. A mask that a breathless patient keeps pulling off\ndelivers nothing at all, and the device that stays on the face is often worth more than the device that\nlooks better on paper.\n\nA reservoir mask at fifteen litres a minute is for emergencies, while somebody works out what is\nwrong."
        },
        {
          "id": "C",
          "heading": "Watching the patient, not the number",
          "body": "A pulse oximeter needs a warm, well-perfused finger. Cold hands, poor circulation, shivering and dark\nnail varnish all produce readings that are wrong rather than absent, which is the dangerous kind.\n\nThe oximeter reports oxygen and nothing else. It says nothing whatever about carbon dioxide, and a\npatient can be retaining a great deal of it while the display reads ninety-six.\n\nA patient who becomes drowsy on oxygen needs a blood gas, not more oxygen. That drowsiness is the\none presentation where the instinct to turn the flow up is exactly wrong.\n\nLook at the patient before the monitor. Somebody working hard to breathe is telling you something the\ndisplay is not, and somebody peaceful with an alarming number on the screen usually has a probe that\nhas slipped.\n\nRecord the reading, the device and the flow together. A saturation written without the oxygen beside\nit means nothing a week later."
        },
        {
          "id": "D",
          "heading": "Coming off it",
          "body": "Wean by reducing the flow while keeping the patient inside the target range, and record each reduction\nso that the next person knows the direction of travel.\n\nA patient who has been stable in the target range on air does not need the cannulae left in place\n\"just in case\". Equipment that stays because nobody removed it is how a short admission becomes a long\none.\n\nOxygen is never left running by a naked flame, and no oil or grease goes near valves or fittings.\n\nHome oxygen requires a formal assessment, not a cylinder that was left over from the ward. The\nassessment establishes whether the patient benefits at all, and a great many do not."
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
  }
];
