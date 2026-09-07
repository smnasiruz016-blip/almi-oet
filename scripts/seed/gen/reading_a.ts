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
    "slug": "rea-a-aseptic-non-touch-technique",
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
          "heading": "Key principle",
          "body": "Aseptic non-touch technique protects key parts and key sites from contamination. The central rule is that key parts must not be touched directly. A key part is any component of the equipment that will come into contact with the liquid infusing into the patient or with the key site itself: the syringe tip, the needle hub, the exposed lumen of a connector. A key site is the point at which the patient is vulnerable, such as an insertion point or an open wound. Identifying both before the procedure begins is the step most often skipped, and once the procedure is under way there is no opportunity to correct it. The technique does not aim to sterilise the environment. It aims to keep a small number of surfaces uncontaminated for a short period, which is achievable in a ward side room and is not achieved by additional equipment. Where a key part cannot be protected by design, it must be protected by sequence: prepare it last and use it immediately."
        },
        {
          "id": "B",
          "heading": "Hand preparation",
          "body": "Decontaminate hands with alcohol gel or soap and water before assembling equipment. Repeat hand hygiene immediately before contact with the key site. Two separate moments are involved and the second is the one commonly omitted, because the hands are believed to be still clean from the first. Anything touched in between — a trolley handle, a curtain, a patient's bedding — returns them to the state they were in before. Hands must be dry before gloves are applied, since damp hands both tear gloves and encourage organisms to multiply inside them. Sleeves are rolled above the elbow, wristwatches and stoned rings are removed, and nails are kept short and unvarnished. Where an alcohol gel is used, enough product must be taken to keep the hands wet for the whole of the rub; a quantity that dries in ten seconds has not been effective. Hand hygiene is repeated after the procedure and after gloves are removed."
        },
        {
          "id": "C",
          "heading": "Field management",
          "body": "Use a clean or sterile field appropriate to the procedure. A clean field is sufficient for most ward procedures; a sterile field is required where key parts will be exposed for a prolonged period or handled directly. Keep the field within view and do not reach across it once it is prepared. Reaching across is the commonest breach observed in audit, and it happens most often when an item has been forgotten and is fetched mid-procedure — which is why the whole of the equipment is assembled before anything is opened. Place the field on a surface that has been cleaned and allowed to dry, and never on a bed or on the floor. If the field is touched by clothing, by a sleeve, or by anything not part of the procedure, it is no longer a field and must be replaced. A field is not made safe by being covered; once its status is uncertain, it is contaminated."
        },
        {
          "id": "D",
          "heading": "Glove use",
          "body": "Gloves complement but never replace hand hygiene. Apply non-sterile gloves for simple procedures and sterile gloves where direct handling of a key part is unavoidable. The choice is determined by what will be touched rather than by how invasive the procedure feels: a short peripheral cannulation in which no key part is handled requires non-sterile gloves, while a longer procedure with exposed connectors requires sterile ones. Gloves are put on immediately before the procedure and removed immediately after, at the bedside, and never worn between patients or while writing in the notes. They fail more often than staff expect, with unnoticed perforations in a measurable proportion of pairs by the end of a procedure, which is why hands are cleaned again after removal. Gloves must be changed if they are torn, if they are contaminated with blood, or if the procedure moves from a dirty site to a clean one."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the fact that gloves do not replace hand hygiene?",
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
          "stem": "In which text can you find information about the central rule of the technique?",
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
          "stem": "In which text can you find information about not reaching across the prepared area?",
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
          "stem": "In which text can you find information about the moment of hand hygiene that is most often omitted?",
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
          "stem": "In which text can you find information about what a key site is?",
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
          "stem": "In which text can you find information about when a sterile field rather than a clean one is needed?",
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
          "stem": "In which text can you find information about when gloves must be changed during a procedure?",
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
          "stem": "The central rule is that ______ must not be touched directly.",
          "answer": "key parts"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "A key site is a point at which the patient is ______.",
          "answer": "vulnerable"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Where a key part cannot be protected by design, protect it by ______.",
          "answer": "sequence"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Hands must be ______ before gloves are applied.",
          "answer": "dry"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Damp hands both tear gloves and let organisms ______ inside them.",
          "answer": "multiply"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Take enough gel to keep the hands ______ for the whole rub.",
          "answer": "wet"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "A ______ field is sufficient for most ward procedures.",
          "answer": "clean"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "The commonest breach seen in audit is ______ the field.",
          "answer": "reaching across",
          "acceptExhaustive": true
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Never place the field on a bed or on the ______.",
          "answer": "floor"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Gloves are removed immediately after the procedure, at the ______.",
          "answer": "bedside"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Gloves are never worn between ______.",
          "answer": "patients"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Change gloves if they are ______ or contaminated with blood.",
          "answer": "torn"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Assemble all the equipment before anything is ______.",
          "answer": "opened"
        }
      ]
    },
    "guidanceNote": "Gap answers must be copied exactly as written — here the text says 'key parts', not 'the key part'."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-discharge-planning-checklist",
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
          "heading": "Early planning",
          "body": "Begin discharge planning at the point of admission by setting an expected date of discharge. Review this date daily against the patient's progress, and record any change together with the reason for it. The date is a working assumption rather than a promise, and it is useful precisely because it can be wrong: a date that has slipped three times without explanation is a signal that something in the plan is not being addressed. Identify on the first day anything that will take longer than the admission itself to arrange — a package of care, a housing assessment, equipment that must be ordered — because these, rather than the clinical recovery, are what most often delay a discharge. Involve the patient and, with their agreement, whoever will be at home with them, from the beginning rather than on the final morning. A patient who has known the plan for a week arrives at discharge prepared; one told on the day arrives at it surprised."
        },
        {
          "id": "B",
          "heading": "Medicines reconciliation",
          "body": "Reconcile the discharge medicines against the admission list. Provide a written summary explaining any changes for the patient and the general practitioner, stating for each change what was altered and why. A list that shows only the new regimen tells the receiving clinician nothing about what was stopped, and a drug omitted in error looks identical to a drug stopped deliberately. Note explicitly where a medicine has been suspended rather than discontinued, and give the date on which it should be reviewed. Check that the patient can physically manage the medicines they are being sent home with, including opening the containers, and arrange a monitored dosage system where they cannot. Ensure that any medicine requiring monitoring has a blood test booked before the next dose is due. Where a controlled drug is supplied, confirm that the quantity and the arrangements for further supply are recorded in the discharge letter."
        },
        {
          "id": "C",
          "heading": "Home readiness",
          "body": "Confirm that the home environment is safe and that any equipment, such as a commode or grab rail, is in place before the patient leaves. Delivery being arranged is not the same as delivery having happened, and a discharge that depends on an item arriving that afternoon should not proceed until it has. Check that there is heating, that there is food in the house, and that somebody can let the patient in — three questions that sound trivial and account for a substantial share of readmissions within forty-eight hours. Where a home visit has identified hazards, confirm that they have been removed rather than reported. Consider the route the patient will take from the front door to the bed and to the bathroom, since it is the route rather than the room that determines whether they can manage. For a patient living alone, agree who will check on them in the first twenty-four hours."
        },
        {
          "id": "D",
          "heading": "Follow-up arrangements",
          "body": "Book any outpatient or community follow-up before discharge and give the patient written details of who to contact if symptoms worsen. Verbal instructions are forgotten within hours, and the patient's own account of what to look out for should be heard rather than assumed. Name the specific symptoms that should prompt contact, and give a route for each: some warrant a call to the ward, some to the general practice, and a small number warrant an ambulance. State the timescale as well as the symptom, since worse is a comparison the patient cannot make without knowing what to expect. Send the discharge summary on the day of discharge rather than within the permitted period, because the risk sits in the gap between the patient arriving home and the summary arriving at the practice. Where a district nurse or therapist is to visit, confirm that the referral has been accepted rather than merely sent."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about checking that equipment is in place at home?",
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
          "stem": "In which text can you find information about explaining medicine changes to the general practitioner?",
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
          "stem": "In which text can you find information about setting a discharge date at admission?",
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
          "stem": "In which text can you find information about naming the symptoms that should prompt contact?",
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
          "stem": "In which text can you find information about what most often delays a discharge?",
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
          "stem": "In which text can you find information about a patient who cannot open their own containers?",
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
          "stem": "In which text can you find information about the questions that account for early readmissions?",
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
          "stem": "Begin discharge planning by setting an expected ______ of discharge.",
          "answer": "date"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Review the expected date ______ against the patient's progress.",
          "answer": "daily"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "A date that has slipped three times without explanation is a ______.",
          "answer": "signal"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "For each medicine change, state what was altered and ______.",
          "answer": "why"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Note where a medicine has been ______ rather than discontinued.",
          "answer": "suspended"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Arrange a ______ dosage system where the patient cannot manage.",
          "answer": "monitored"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Delivery being arranged is not the same as delivery having ______.",
          "answer": "happened"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Confirm that identified hazards have been ______ rather than reported.",
          "answer": "removed"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "It is the ______ rather than the room that determines whether they can manage.",
          "answer": "route"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "______ instructions are forgotten within hours.",
          "answer": "verbal"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "State the ______ as well as the symptom.",
          "answer": "timescale"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Send the discharge summary on the ______ of discharge.",
          "answer": "day"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Confirm that a community referral has been ______ rather than merely sent.",
          "answer": "accepted"
        }
      ]
    },
    "guidanceNote": "Beware near-duplicate clues — 'date of discharge' and 'follow-up' both involve timing, but only one is about the discharge date itself."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-falls-risk-assessment",
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
          "heading": "Screening on admission",
          "body": "Every patient should be screened for falls risk within six hours of admission. The screen records history of previous falls, mobility status and current medicines. A fall in the previous twelve months is the strongest single predictor of a further fall, and it must be asked about directly, since patients frequently do not volunteer it — many attribute a fall to carelessness, and some fear that reporting it will lead to a loss of independence. Ask how the fall happened and at what time of day, because falls clustering at one hour of the day usually have one cause. The screen is repeated whenever the patient's condition changes, after any transfer between wards, and after any fall. A screen completed once on admission describes the patient who arrived rather than the patient now in the bed, and a period of illness, a new medicine or a catheter can change the risk within a day."
        },
        {
          "id": "B",
          "heading": "Environmental measures",
          "body": "Ensure the call bell is within reach, the bed is at its lowest setting and the floor is free of clutter. Adequate lighting at night reduces disorientation, and a low-level light left on is more useful than a bright one switched on suddenly, which dazzles a patient who is already unsteady. Check that the patient's footwear is well fitting and enclosed; slippers with no back are a frequent contributor and are worn by a large proportion of inpatients. Ensure that spectacles, hearing aids and a walking aid are within reach rather than in a locker, and that the walking aid is the one the patient actually uses at home. Wipe spills immediately rather than marking them, and keep the route between the bed and the bathroom clear at all times, since that route is where the majority of inpatient falls occur, most of them at night."
        },
        {
          "id": "C",
          "heading": "Medication review",
          "body": "Sedatives, antihypertensives and diuretics all increase falls risk. A pharmacist review is advised for any patient taking four or more regular medicines. The risk rises with the number of medicines rather than with any single drug, and the combination is frequently more important than any item on the list. Night sedation deserves particular attention because its effects persist into the hours when patients get up to use the bathroom. Postural blood pressure should be measured lying and then standing, at one minute and again at three, since a delayed drop is missed by a single reading. Where a medicine is identified as a contributor, reduce it gradually with a review date rather than stopping it abruptly. Record the discussion with the patient: a person who understands why a tablet is being reduced is considerably more likely to remain off it than one who simply finds it missing from the packet."
        },
        {
          "id": "D",
          "heading": "Post-fall protocol",
          "body": "After a fall, do not move the patient until neurological observations and a check for injury are complete. Document the event and notify the medical team. Ask the patient what they were trying to do, and record the answer in their own words, because the answer is almost always actionable — I wanted the light on, I could not reach my water, I did not want to press the buzzer again. Check specifically for a head injury in anyone taking an anticoagulant, and record the time of the fall as well as the time of discovery, which are frequently not the same. Examine for hip and wrist injury even where the patient reports no pain, since pain may be masked. Repeat the falls screen, review the environment at that bed space, and inform the family the same day. A fall that is documented but not followed by a change is a fall that will be repeated."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about a pharmacist review for patients on several medicines?",
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
          "stem": "In which text can you find information about when an initial falls screen should be completed?",
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
          "stem": "In which text can you find information about what to do immediately after a patient has fallen?",
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
          "stem": "In which text can you find information about the type of footwear that contributes to falls?",
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
          "stem": "In which text can you find information about why patients may not report an earlier fall?",
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
          "stem": "In which text can you find information about where most inpatient falls happen?",
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
          "stem": "In which text can you find information about checking for injury where the patient reports no pain?",
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
          "stem": "Every patient should be screened for falls risk within ______ of admission.",
          "answer": "six hours"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "The strongest single predictor is a fall in the previous ______.",
          "answer": "twelve months"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Falls clustering at one hour of the day usually have one ______.",
          "answer": "cause"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "The bed should be at its ______ setting.",
          "answer": "lowest"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "A ______ light left on is more useful than a bright one switched on suddenly.",
          "answer": "low-level"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "______ spills immediately rather than marking them.",
          "answer": "wipe"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Risk rises with the ______ of medicines rather than any single drug.",
          "answer": "number"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Measure postural blood pressure lying and then ______.",
          "answer": "standing"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "A contributing medicine should be reduced ______ with a review date.",
          "answer": "gradually"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Record what the patient was trying to do in their own ______.",
          "answer": "words"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Check specifically for head injury in anyone taking an ______.",
          "answer": "anticoagulant"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Record the time of the fall as well as the time of ______.",
          "answer": "discovery"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Inform the ______ on the same day.",
          "answer": "family"
        }
      ]
    },
    "guidanceNote": "Numbers and time limits in the text are common gap answers — underline them as you skim."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-hand-hygiene-texts",
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
          "heading": "When to clean hands",
          "body": "Clean hands before touching a patient and before a clean or aseptic procedure. Clean them again after any exposure to body fluids, after touching a patient, and after touching the patient's immediate surroundings, even where the patient themselves was not touched. The bed rail, the table and the notes trolley at the bedside all count as the patient's surroundings, and the moment after touching them is the one most often missed in observational audit. The five moments apply to every member of staff who enters the bed space, including those who have touched nothing they consider clinical. Hand hygiene is performed at the point of care rather than on the way to it, because hands cleaned at the door and then used to move a curtain are no longer clean. Where a patient is in isolation, hands are cleaned on entering and again on leaving, and the second is not optional because gloves were worn."
        },
        {
          "id": "B",
          "heading": "Technique",
          "body": "Alcohol hand rub should be applied to dry hands and rubbed until fully evaporated, covering all surfaces. The full procedure takes between twenty and thirty seconds, which is considerably longer than most staff spend, and the areas missed are consistent: the thumbs, the fingertips, and the skin between the fingers. Fingertips deserve particular attention because they make most of the contact with the patient. Take enough product to keep the hands wet for the whole of the rub; if the hands are dry after ten seconds, too little was used. Do not wave the hands or use a towel to speed up drying, since the rub works while it is in contact with the skin. When washing rather than rubbing, wet the hands before applying soap, wash for the same length of time, rinse thoroughly and dry completely with paper towels, since organisms transfer far more readily from damp skin."
        },
        {
          "id": "C",
          "heading": "When soap is required",
          "body": "Use soap and water rather than alcohol rub when hands are visibly soiled or after caring for a patient with diarrhoea. Alcohol is not effective against spores, so in any patient with suspected or confirmed Clostridioides difficile, washing is required rather than preferred: the physical action of washing and drying removes what the rub cannot kill. The same applies after contact with a patient who has vomiting of uncertain cause. Rub also performs poorly on hands that are visibly soiled, since the product cannot reach the skin beneath; wash first, and rub afterwards if you wish. Soap and water are also used after using the toilet and before handling food, and at the start and end of a shift. In all other circumstances rub is preferred, as it is quicker, more accessible at the bedside and less damaging to the skin than repeated washing."
        },
        {
          "id": "D",
          "heading": "Skin care",
          "body": "Apply emollient regularly to reduce the skin damage that repeated cleaning can cause. Damaged skin matters clinically rather than cosmetically: broken or eczematous skin carries a higher bacterial load, is harder to decontaminate, and is painful enough that staff begin to avoid cleaning their hands altogether, which is the outcome that concerns us most. Use the emollient supplied rather than a personal product, because some hand creams are incompatible with the rub and reduce its activity. Apply it at breaks and at the end of a shift rather than immediately before patient contact. Report skin problems early to occupational health rather than treating them alone; most respond quickly if they are seen before the skin has broken down. Staff with a diagnosed skin condition should not be discouraged from clinical work, but should have a documented plan agreed with occupational health. A dispenser that is empty is a barrier to hand hygiene rather than an inconvenience, so report empty wall units and empty emollient dispensers to housekeeping rather than walking past them."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about when alcohol rub is not appropriate?",
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
          "stem": "In which text can you find information about the correct technique for rubbing the hands?",
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
          "stem": "In which text can you find information about cleaning hands after touching the patient's surroundings?",
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
          "stem": "In which text can you find information about why damaged skin matters clinically?",
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
          "stem": "In which text can you find information about which hand cream should be used?",
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
          "stem": "In which text can you find information about what counts as the patient's immediate surroundings?",
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
          "stem": "In which text can you find information about the length of time the full procedure takes?",
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
          "stem": "Alcohol rub should be applied to ______ hands.",
          "answer": "dry"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "The full rub takes between twenty and ______ seconds.",
          "answer": "thirty"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "The areas most often missed are the thumbs, the fingertips and the skin between the ______.",
          "answer": "fingers"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Hand hygiene is performed at the ______ of care.",
          "answer": "point"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "In isolation, hands are cleaned on entering and again on ______.",
          "answer": "leaving"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Alcohol is not effective against ______.",
          "answer": "spores"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Where hands are visibly ______, wash first.",
          "answer": "soiled"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Rub is preferred elsewhere because it is quicker and less ______ to the skin.",
          "answer": "damaging"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Damaged skin carries a higher bacterial ______.",
          "answer": "load"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Use the emollient ______ rather than a personal product.",
          "answer": "supplied"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Some hand creams are ______ with the rub.",
          "answer": "incompatible"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Report skin problems early to ______ health.",
          "answer": "occupational"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Dry the hands completely with paper ______.",
          "answer": "towels"
        }
      ]
    },
    "guidanceNote": "Scan for the keyword in the question — you don't need to read every word to match a text."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-informed-consent-essentials",
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
          "heading": "Capacity",
          "body": "Consent is valid only if the patient has the capacity to understand, retain and weigh the relevant information and can communicate a decision. Capacity is assumed in every adult unless the opposite is demonstrated, and it is assessed for the specific decision in front of the patient rather than in general. A person may have capacity to consent to a dressing change on the same afternoon that they lack it for a major operation, and a person whose capacity fluctuates should be assessed at the time they are best able to engage. An unwise decision is not evidence of incapacity, and this is the point most often misapplied: a patient who declines a treatment the team believes is clearly in their interest is exercising a right rather than demonstrating a deficit. Where capacity is in doubt, record the four elements separately and note what was done to support the person — an interpreter, a quieter room, a return visit. Where a person lacks capacity, a decision is made in their best interests, taking account of any advance decision, any lasting power of attorney, and the views of those close to them."
        },
        {
          "id": "B",
          "heading": "Voluntariness",
          "body": "The decision must be made freely, without pressure from staff, family or any other party. Coerced agreement is not valid consent, and coercion in a clinical setting is rarely overt. It appears as a relative answering on the patient's behalf, as a form presented on the morning of a procedure when everything else has been arranged, or as a clinician's evident disappointment at a refusal. The imbalance of authority is itself a pressure, so the absence of an explicit threat does not establish that the choice was free. Where a family member is present at every discussion and the patient has not been seen alone, arrange to see them alone at least once. Consent may be withdrawn at any time and for any reason, including after the form has been signed and the patient has arrived in the anaesthetic room, and staff should say so plainly rather than assume it is understood. Where an interpreter is needed, use a professional one rather than a relative, since a family member may soften what is said or answer on the patient's behalf without intending to."
        },
        {
          "id": "C",
          "heading": "Information shared",
          "body": "Explain the proposed procedure, its benefits, the material risks and any reasonable alternatives, including the option of no treatment. A material risk is one to which this particular patient would attach significance, which is not the same as one the profession regards as important, and the only way to establish it is to ask what matters to them. Serious but rare risks are disclosed alongside common minor ones, and both are given in a form the person can use — natural frequencies rather than percentages, and over a stated period. Avoid the word routine, which patients hear as without risk. Check understanding by asking the patient to describe in their own words what will happen, and record any question they asked, since the questions show what they were actually weighing. Where a patient declines information, record that they were offered it and chose not to receive it, and offer again at a later point rather than treating the refusal as permanent."
        },
        {
          "id": "D",
          "heading": "Recording consent",
          "body": "Document the discussion, not just the signature. A signed form alone does not prove that valid consent was obtained, and a form with no accompanying note is evidence only that a form was signed. The entry should state what was explained, which risks were named, what alternatives were offered, what the patient asked and what they decided. Where consent is taken by one clinician and the procedure performed by another, the second must satisfy themselves that the discussion took place and is still current. Consent obtained weeks earlier should be confirmed on the day, particularly where the patient's condition or the plan has changed since. For a procedure carrying significant risk, record that the patient was given time to consider rather than asked to decide immediately. Where consent is given verbally for a minor procedure, the entry in the notes is the record and should contain the same elements as a form would."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the fact that a signed form alone is not enough?",
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
          "stem": "In which text can you find information about what information must be shared with the patient?",
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
          "stem": "In which text can you find information about the decision having to be free of pressure?",
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
          "stem": "In which text can you find information about a decision the team believes is unwise?",
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
          "stem": "In which text can you find information about a word that patients hear as meaning no risk?",
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
          "stem": "In which text can you find information about seeing a patient without a relative present?",
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
          "stem": "In which text can you find information about consent taken by one clinician for another to act on?",
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
          "stem": "Consent is valid only if the patient has the ______ to weigh the information.",
          "answer": "capacity"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Capacity is ______ in every adult unless the opposite is shown.",
          "answer": "assumed"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "An ______ decision is not evidence of incapacity.",
          "answer": "unwise"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "______ agreement is not valid consent.",
          "answer": "coerced"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "The imbalance of ______ is itself a form of pressure.",
          "answer": "authority"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Consent may be ______ at any time and for any reason.",
          "answer": "withdrawn"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "A ______ risk is one this particular patient would attach significance to.",
          "answer": "material"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Give risks as natural ______ rather than percentages.",
          "answer": "frequencies"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Avoid the word ______, which patients hear as meaning without risk.",
          "answer": "routine"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Document the ______, not just the signature.",
          "answer": "discussion"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Consent obtained weeks earlier should be ______ on the day.",
          "answer": "confirmed"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Record that the patient was given ______ to consider.",
          "answer": "time"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Record any ______ the patient asked, as these show what was being weighed.",
          "answer": "question"
        }
      ]
    },
    "guidanceNote": "Consent has four pillars — capacity, voluntariness, information, recording. Label each text with its pillar to match fast."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-insulin-storage-and-handling",
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
          "heading": "Unopened supplies",
          "body": "Store unopened insulin vials and pens in a refrigerator between 2 and 8 degrees Celsius. Do not allow the product to freeze, as freezing destroys its activity, and a pen that has frozen must not be used even after it has thawed and appears normal. Keep stock away from the back wall and the cooling element of the fridge, where the temperature is lowest and freezing most often occurs unnoticed. Record the maximum and minimum temperature twice daily and reset the thermometer after each reading. Rotate stock so that the earliest expiry is used first, and do not store insulin in a fridge that also holds food or specimens. If the fridge has been out of range, quarantine the stock, label it clearly and seek advice rather than discarding or using it, since some products tolerate a brief excursion and others do not. Fridges holding insulin are checked for a working plug and a socket that cannot be switched off accidentally, since an unnoticed disconnection over a weekend wastes an entire stock."
        },
        {
          "id": "B",
          "heading": "In-use product",
          "body": "An insulin pen in current use may be kept at room temperature for up to 28 days. Keep it away from direct heat and sunlight, from a radiator, a windowsill or a parked car, all of which reach temperatures far higher than people assume. Write the date of first use on the pen itself rather than relying on memory, since the count begins at first use and not at the date of dispensing. After 28 days the pen is discarded whatever remains in it. Do not return an in-use pen to the refrigerator, as repeated warming and cooling degrades the product and cold insulin is more painful to inject. Store the pen without a needle attached, because a needle left in place allows air to enter the cartridge and insulin to leak out, so that the dose delivered is no longer the dose dialled. Where a patient uses more than one insulin, store the pens so that they cannot be confused by touch alone, since many are similar in shape and the consequences of the wrong one are serious."
        },
        {
          "id": "C",
          "heading": "Inspection before use",
          "body": "Check the appearance before each dose. Discard the product if it looks cloudy when it should be clear, or if particles are visible, and do the same where a cloudy suspension will not mix evenly or has clumps adhering to the side of the cartridge. Cloudy insulins are resuspended by rolling the pen gently between the palms and inverting it several times rather than shaking it, which produces bubbles and an inaccurate dose. Prime the pen before every injection by dialling two units and expelling them with the needle pointing upward, and repeat until a drop appears at the tip. If no drop appears after several attempts, change the needle and try again. A pen that will not prime should be replaced rather than used, and the batch number recorded before it is discarded. Check the label and the strength at every dose, not only the appearance, because concentrated preparations exist and look identical to the standard strength in the pen."
        },
        {
          "id": "D",
          "heading": "Transport advice",
          "body": "Advise patients travelling to carry insulin in hand luggage, never in the aircraft hold, where temperatures may drop below freezing and where the baggage may not arrive with them. Advise them to take at least twice the quantity they expect to need, divided between two bags, and to carry a letter from the prescriber describing the condition and the equipment. Insulin does not require refrigeration for a journey of a few days provided it is kept below 25 degrees, but a cool bag without a freezer block is a sensible precaution in hot climates; a frozen block placed in direct contact with a pen will ruin it. Remind patients crossing time zones to seek advice before travelling, since the timing rather than the storage is what most often goes wrong on a long flight. Advise patients to keep insulin with them rather than in a hotel fridge, which is often colder than stated and has frozen more supplies than heat has ever spoiled."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about checking the product's appearance before each dose?",
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
          "stem": "In which text can you find information about advice for patients who are travelling?",
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
          "stem": "In which text can you find information about the refrigerator temperature range for unopened supplies?",
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
          "stem": "In which text can you find information about why a needle should not be left attached?",
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
          "stem": "In which text can you find information about what to do if the fridge temperature has gone out of range?",
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
          "stem": "In which text can you find information about how a cloudy insulin should be mixed?",
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
          "stem": "In which text can you find information about how much insulin a patient should take on a journey?",
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
          "stem": "An in-use pen may be kept at room temperature for up to ______ days.",
          "answer": "28"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Write the date of first ______ on the pen itself.",
          "answer": "use"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Do not return an in-use pen to the ______.",
          "answer": "refrigerator"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Store unopened insulin between 2 and ______ degrees Celsius.",
          "answer": "8"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Freezing ______ the activity of the product.",
          "answer": "destroys"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Rotate stock so that the earliest ______ is used first.",
          "answer": "expiry"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Discard the product if particles are ______.",
          "answer": "visible"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Resuspend a cloudy insulin by ______ the pen between the palms.",
          "answer": "rolling"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "______ produces bubbles and an inaccurate dose.",
          "answer": "shaking"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Prime the pen by dialling ______ units before each injection.",
          "answer": "two"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Carry insulin in hand ______, never in the aircraft hold.",
          "answer": "luggage"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Take at least ______ the quantity expected to be needed.",
          "answer": "twice"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "For a short journey, keep insulin below ______ degrees.",
          "answer": "25"
        }
      ]
    },
    "guidanceNote": "When two texts mention temperature, separate them by purpose — 'unopened' versus 'in use' — before deciding."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-malnutrition-screening",
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
          "heading": "Screening tool",
          "body": "Use a validated screening tool that combines body mass index, recent unplanned weight loss and the effect of acute illness on intake to give an overall risk score. Each component is scored separately and the three are added, so a patient with a normal body mass index may still score highly on the basis of recent loss alone — which is the situation most often missed, because the person does not look undernourished. Unplanned is the operative word: weight lost deliberately over the same period does not carry the same meaning and should be recorded as such. The acute-illness component applies where a patient has had, or is likely to have, no nutritional intake for more than five days. Do not adapt the tool locally or omit a component that is difficult to obtain, since the score is validated as a whole and a partial score has no established meaning. Where a component genuinely cannot be obtained, record why and score the remainder, stating clearly on the chart that the total is incomplete rather than leaving it to be read as a full score."
        },
        {
          "id": "B",
          "heading": "Timing",
          "body": "Screen on admission and weekly thereafter for inpatients. Rescreen sooner if the clinical condition changes or oral intake falls, and after any procedure that interrupts eating for more than a day. A single score taken on admission describes the patient's life before hospital rather than what is happening now, and intake commonly falls during an admission for reasons unconnected with appetite: meals missed for investigations, packaging that cannot be opened, dentures left at home, a tray placed out of reach. Record the date of each screen and the score, not merely that screening was done. Where a patient is admitted overnight, the screen is completed within the first twenty-four hours rather than deferred to the next working day, and a patient transferred between wards is rescreened on arrival rather than assumed to carry their score with them. Weigh the patient on the same scales, at a similar time of day and in similar clothing, since between-scale differences are large enough to create a change that never happened."
        },
        {
          "id": "C",
          "heading": "Acting on results",
          "body": "A high-risk score should trigger referral to the dietitian and the start of a food and fluid chart to monitor actual intake. The chart is only useful if somebody totals it and acts on the total, and an untotalled chart provides false reassurance rather than information. Set a nutritional goal and a review date at the point of referral. Mealtime assistance should be recorded as a nursing intervention in its own right rather than treated as something done if there is time, since what is not recorded is the first thing lost on a short-staffed shift. Consider protected mealtimes so that non-urgent tasks pause. Oral supplements are prescribed where food alone is insufficient, but they are an addition to meals rather than a replacement for them, and a supplement given instead of assistance costs more and achieves less. Ask the patient what they would actually eat, rather than what they should eat, because a plan built on food the person dislikes will produce a full chart and an empty plate."
        },
        {
          "id": "D",
          "heading": "When weighing is impossible",
          "body": "If the patient cannot be weighed, estimate body mass index from a mid-upper-arm circumference measurement and record the method used. The estimate is less precise than a weight and should be described as an estimate wherever it appears, so that a later reader does not compare it directly with a measured value. Take the measurement on the non-dominant arm, midway between the tip of the shoulder and the point of the elbow, with the arm hanging relaxed. Repeat measurements should be taken by the same method and, where possible, by the same person, since between-observer variation is greater than the change being looked for. Where even this is not possible, record clinical judgement — loose clothing, a ring that no longer fits, a report from a relative that the patient has become thinner — and state plainly what the assessment was based on. Record the arm measurement in centimetres to one decimal place and note which arm was used, so that the next reading is taken in the same place and can be compared."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about what to do when a patient cannot be weighed?",
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
          "stem": "In which text can you find information about the components combined into a risk score?",
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
          "stem": "In which text can you find information about how often inpatients should be screened?",
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
          "stem": "In which text can you find information about the place of oral supplements alongside meals?",
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
          "stem": "In which text can you find information about a patient of normal weight who is still at risk?",
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
          "stem": "In which text can you find information about why intake falls during an admission?",
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
          "stem": "In which text can you find information about who should repeat an arm measurement?",
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
          "stem": "A high-risk score should trigger referral to the ______.",
          "answer": "dietitian"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Start a food and fluid ______ to monitor actual intake.",
          "answer": "chart"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "An untotalled chart provides false ______.",
          "answer": "reassurance"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "The tool combines body mass index, weight loss and acute ______.",
          "answer": "illness"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "______ is the operative word in describing the weight loss.",
          "answer": "unplanned"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Do not ______ the tool locally or omit a component.",
          "answer": "adapt"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Screen on admission and ______ thereafter.",
          "answer": "weekly"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Record the ______ of each screen as well as the score.",
          "answer": "date"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "A patient transferred between wards is ______ on arrival.",
          "answer": "rescreened"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Estimate body mass index from a mid-upper-arm ______ measurement.",
          "answer": "circumference"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Take the measurement on the ______ arm.",
          "answer": "non-dominant"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Between-______ variation is greater than the change looked for.",
          "answer": "observer"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Mealtime ______ should be recorded as a nursing intervention.",
          "answer": "assistance"
        }
      ]
    },
    "guidanceNote": "Role titles such as 'dietitian' are precise gap answers — spell them as the text does, not as a synonym."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-oxygen-cylinder-safety",
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
          "heading": "Fire precautions",
          "body": "Oxygen supports combustion, so keep cylinders away from naked flames and sources of ignition. No smoking is permitted near any oxygen source, and this includes electronic cigarettes, which contain a heating element. Enriched oxygen accumulates in bedding, clothing and hair, where it persists for some time after the supply has been turned off, so a fire started in an enriched atmosphere spreads far faster than staff expect. Do not use paraffin-based emollients on a patient receiving oxygen, since these are readily ignited; a water-based alternative should be prescribed instead. Keep cylinders out of corridors used as escape routes and away from electrical equipment. Where a patient is known to smoke, the risk is documented and discussed rather than assumed to have been resolved by a notice on the door, and the conversation is repeated rather than held once. Where oxygen is used at home, advise the patient to inform their household insurer and the fire service, both of which keep a record of the address."
        },
        {
          "id": "B",
          "heading": "Secure storage",
          "body": "Store cylinders upright and secured with a chain or stand to prevent them toppling. A falling cylinder can shear its valve and become a projectile, and the energy released is sufficient to penetrate a wall. Do not store cylinders on the floor unsecured, in a stairwell, or leaning against a bed. Full and empty cylinders are stored separately and clearly signed, since a search for a full cylinder in an emergency is a poor use of the minute it takes. The store must be well ventilated, kept below 45 degrees, and free of combustible material. Never carry a cylinder by its valve or drag it across the floor; use the trolley provided. A cylinder that has been dropped is taken out of service and returned to the supplier for inspection even where no damage can be seen. Cylinders are moved one at a time, upright on a trolley with the strap fastened, and never left standing unsecured beside a bed even for a few minutes."
        },
        {
          "id": "C",
          "heading": "Avoiding contamination",
          "body": "Never apply oil or grease to valves, regulators or fittings. Even a trace of oil in the presence of oxygen can ignite spontaneously, without any external source of ignition, and hand cream transferred from the fingers is enough. Handle fittings with clean, dry, ungloved hands and do not use petroleum jelly on a patient's lips while oxygen is running. Open the valve slowly rather than sharply, since a rapid opening compresses the gas in the regulator and produces a sudden rise in temperature. Do not attempt to repair a leaking valve or to modify a fitting so that it will connect; the connections are deliberately incompatible between gases. Report a damaged or contaminated fitting and take the cylinder out of use rather than returning it to the store where somebody else will select it. Check the sealing washer each time a regulator is fitted, and replace a perished one rather than tightening the fitting further to stop a leak."
        },
        {
          "id": "D",
          "heading": "Checking contents",
          "body": "Read the contents gauge before each use and label cylinders as full, in use or empty. Order a replacement before a cylinder is exhausted, and never allow a cylinder to run down to nothing on a patient, since the last portion of the contents is delivered at a falling pressure. Calculate the running time from the flow rate and the contents rather than estimating it, and record the figure where the next person will see it. For transfers, take a second cylinder as well as the calculated requirement, and check both before leaving the ward. A cylinder is checked at the start of every shift where one is held for emergency use, and the check is signed for. An empty cylinder left in a resuscitation trolley is a common and entirely preventable finding in audit. Record the cylinder serial number in the notes when oxygen is given during a transfer, so that a fault can be traced afterwards to the cylinder that was in use."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the warning against applying oil to fittings?",
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
          "stem": "In which text can you find information about why cylinders must be secured upright?",
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
          "stem": "In which text can you find information about labelling cylinders by their status?",
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
          "stem": "In which text can you find information about emollients that should not be used during oxygen therapy?",
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
          "stem": "In which text can you find information about what to do with a cylinder that has been dropped?",
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
          "stem": "In which text can you find information about how quickly the valve should be opened?",
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
          "stem": "In which text can you find information about what to take when transferring a patient?",
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
          "stem": "Oxygen supports ______, so keep cylinders away from naked flames.",
          "answer": "combustion"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Enriched oxygen accumulates in bedding, clothing and ______.",
          "answer": "hair"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Do not use ______-based emollients on a patient receiving oxygen.",
          "answer": "paraffin"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Store cylinders ______ and secured with a chain or stand.",
          "answer": "upright"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "A falling cylinder can shear its valve and become a ______.",
          "answer": "projectile"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "The store must be kept below ______ degrees.",
          "answer": "45"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Even a ______ of oil in the presence of oxygen can ignite.",
          "answer": "trace"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Handle fittings with clean, dry, ______ hands.",
          "answer": "ungloved"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Open the valve ______ rather than sharply.",
          "answer": "slowly"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Read the contents ______ before each use.",
          "answer": "gauge"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Calculate the running time from the ______ rate and the contents.",
          "answer": "flow"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "For a transfer, take a ______ cylinder as well as the calculated requirement.",
          "answer": "second"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Connections are deliberately ______ between different gases.",
          "answer": "incompatible"
        }
      ]
    },
    "guidanceNote": "Safety texts cluster around one hazard each — fire, falling, contamination, supply. Tag each text with its hazard as you read."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-pain-assessment-methods",
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
          "heading": "Numerical rating scale",
          "body": "Ask the patient to rate pain from zero, meaning no pain, to ten, meaning the worst pain imaginable. Record the score with each set of observations, and record what the patient was doing at the time, since a score at rest and a score on movement are different measurements and the second is usually the one that matters for function. Ask for the score now rather than in general, because a patient asked how bad it has been will answer about the worst episode. The scale is most useful as a trend within one patient rather than as a comparison between patients: a five from one person is not a five from another, and the change from seven to four after a dose is the informative figure. Record the score before and after any intervention, and note the time of both. Where a patient cannot manage the numbers, a simple verbal scale of none, mild, moderate and severe is acceptable, and should be recorded as the scale that was used."
        },
        {
          "id": "B",
          "heading": "Faces scale",
          "body": "For children and those with limited language, a row of faces from smiling to crying lets the patient point to the image that matches their pain. Explain that the faces show how much something hurts inside rather than how the person's face looks, since a child who is not crying may otherwise choose the smiling face while in considerable pain. Show the whole row at once and let the child point without prompting, and avoid naming the faces yourself. The scale is validated for children from about four years, and it is equally useful for adults with a learning disability, with limited English, or with a communication difficulty after a stroke. Record which version of the scale was used, as several exist with different numbers of faces, and use the same one at each assessment for that patient. Do not use the faces scale with a child who is distressed for another reason without noting it, since fear and pain produce similar answers on this scale."
        },
        {
          "id": "C",
          "heading": "Behavioural observation",
          "body": "When a patient cannot self-report, observe behaviour such as guarding, grimacing and restlessness. These cues suggest pain even when no score is given, and a validated observational tool should be used rather than an informal impression, so that different staff record the same behaviours in the same way. Look also for changes in breathing, for resistance during personal care, for calling out, and for withdrawal from touch. A change from the person's own usual behaviour is more informative than the behaviour itself, so an account from a relative or a regular carer forms part of the assessment. Where behaviour suggests pain, a trial of analgesia with a planned review is appropriate: an improvement supports the assessment, and this is often the only test available. Absence of behavioural signs does not exclude pain in a patient who is exhausted or sedated. Reassess after the trial at the interval appropriate to the drug given, and record the behaviour again rather than recording only that analgesia was administered."
        },
        {
          "id": "D",
          "heading": "Documenting character",
          "body": "Record not only the intensity but also the site, the character and any factors that make the pain better or worse, as these guide treatment. A burning or shooting pain with numbness suggests a different mechanism from a dull ache, and responds to different drugs, so the words the patient uses are recorded rather than translated into a category. Note the timing: constant, intermittent, or worse at a particular hour. Record what the pain prevents the patient from doing, which is frequently more useful than the number and is what treatment is aiming at. Where pain has more than one site, each is described separately, since they may have different causes. Record the patient's own goal for treatment, as complete relief is not always achievable and an agreed target avoids a course of escalating doses towards an impossible aim. Record any pain that wakes the patient at night, as this changes the timing of doses rather than the total daily amount."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about assessing a patient who cannot self-report?",
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
          "stem": "In which text can you find information about a scale designed for young children?",
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
          "stem": "In which text can you find information about details to record beyond the intensity of the pain?",
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
          "stem": "In which text can you find information about the difference between a score at rest and on movement?",
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
          "stem": "In which text can you find information about using the same version of a scale at each assessment?",
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
          "stem": "In which text can you find information about agreeing a treatment goal with the patient?",
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
          "stem": "In which text can you find information about using a trial of analgesia as a test?",
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
          "stem": "On the numerical scale, ten means the worst pain ______.",
          "answer": "imaginable"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Ask for the score ______ rather than in general.",
          "answer": "now"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "The scale is most useful as a ______ within one patient.",
          "answer": "trend"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "The faces scale is validated for children from about ______ years.",
          "answer": "four"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Explain that the faces show how much something ______ inside.",
          "answer": "hurts"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Record which ______ of the scale was used.",
          "answer": "version"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Observe behaviour such as guarding, ______ and restlessness.",
          "answer": "grimacing"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "A change from the person's ______ behaviour is more informative.",
          "answer": "usual"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Absence of behavioural signs does not ______ pain.",
          "answer": "exclude"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Record the site, the ______ and any relieving factors.",
          "answer": "character"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Record the ______ the patient uses rather than a category.",
          "answer": "words"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Record what the pain ______ the patient from doing.",
          "answer": "prevents"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Where pain has more than one site, describe each ______.",
          "answer": "separately"
        }
      ]
    },
    "guidanceNote": "Self-report versus observation is the key split in pain tools — decide which a question needs before scanning."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-preventing-pressure-injuries-in-immobile-patients",
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
          "heading": "Risk screening",
          "body": "All patients should be screened for pressure injury risk within six hours of admission using a validated assessment tool. Re-screening is repeated whenever the patient's condition changes and at least every 48 hours. Reduced mobility, poor nutrition, incontinence and impaired sensation each raise the overall risk score. Events that warrant an immediate re-screen include a return from theatre, a new episode of acute illness, and any transfer between wards. The tool supports judgement rather than replacing it: a patient whose total sits below the threshold may still be at risk where a single domain, such as sensation, is severely impaired, and the clinician's concern overrides the number. Record the score, the date and the plan it produced, so that the next person can see what was decided and why, and start an interim plan where the full assessment must wait. Where the assessment must wait because of an emergency, note the reason and the time, and begin repositioning in the meantime rather than deferring both."
        },
        {
          "id": "B",
          "heading": "Repositioning",
          "body": "Patients identified as at risk should be repositioned at regular intervals, with the timing recorded on the turning chart. A two-hourly schedule is the usual starting point, though the interval is shortened for those with very limited movement. The 30-degree tilt is preferred because it keeps pressure off the bony prominences, and lying directly on the hip concentrates load on a small area. Patients able to move themselves should be prompted and encouraged rather than turned, since independent movement is preserved by using it. Seated patients need equal attention: sitting produces higher pressures over a smaller area than lying, so unbroken chair time is limited. Use slide sheets rather than dragging, because friction and shear injure tissue that pressure alone would not. Where a patient declines to be turned, record the discussion and the alternatives offered rather than only the refusal. Record the position the patient was placed in as well as the time, since a chart showing only a tick gives the next person nothing to work from."
        },
        {
          "id": "C",
          "heading": "Skin inspection",
          "body": "The skin over the heels, sacrum and elbows is inspected at each shift change. Non-blanching redness that persists after pressure is removed is treated as an early-stage injury and reported without delay. Staff should avoid massaging reddened areas, as this can worsen tissue damage. Inspect also under and around every medical device, since tubing behind the ears, a catheter under a thigh and the rim of a mask all cause injury in places nobody routinely looks. On darker skin tones redness may not be visible at all, so warmth, firmness, a boggy texture and the patient's own report of pain in one spot become the more reliable signs. Document any suspicious area with its site, size and appearance, and photograph it only with consent and only into the record. Inspect at every dressing change as well as at each shift change, since a dressing conceals the area beneath it and is often the reason an injury is found late."
        },
        {
          "id": "D",
          "heading": "Support surfaces",
          "body": "Where the risk score is high, a pressure-redistributing mattress is provided in addition to scheduled repositioning. Heel-offloading devices may be added for patients who cannot lift their own legs, and a pillow placed lengthways under the calves achieves the same end where a device is not available. Equipment alone does not remove the need for turning, and all surfaces are checked daily for faults. Check that a powered mattress is set to the patient's weight, since a setting left from a previous occupant is a common and invisible fault. Avoid layering additional sheets or incontinence pads on a redistributing surface, as each layer reduces its effect. A patient sitting out should have an appropriate cushion rather than being placed on the mattress in a chair, and the cushion is checked as often as the mattress is. Deflate a powered mattress before resuscitation, as compressions delivered on an inflated surface are considerably less effective."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the warning against rubbing reddened skin?",
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
          "stem": "In which text can you find information about how soon after admission a patient should be assessed?",
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
          "stem": "In which text can you find information about the fact that special equipment does not replace turning?",
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
          "stem": "In which text can you find information about attention to patients who are sitting in a chair?",
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
          "stem": "In which text can you find information about assessing skin where redness is not visible?",
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
          "stem": "In which text can you find information about a setting left from a previous occupant?",
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
          "stem": "In which text can you find information about a patient whose score is below the threshold?",
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
          "stem": "The preferred position for keeping pressure off the bony prominences is the ______ tilt.",
          "answer": "30-degree"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "A ______ schedule is the usual starting point for repositioning.",
          "answer": "two-hourly"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Use ______ sheets rather than dragging the patient.",
          "answer": "slide"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Screen for risk within ______ of admission.",
          "answer": "six hours"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Re-screen at least every ______ hours.",
          "answer": "48"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Record the score, the date and the ______ it produced.",
          "answer": "plan"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "______ redness that persists is treated as an early-stage injury.",
          "answer": "non-blanching"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Avoid ______ reddened areas, as this can worsen damage.",
          "answer": "massaging"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "On darker skin, warmth, firmness and a ______ texture are more reliable.",
          "answer": "boggy"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "A pressure-______ mattress is provided where the risk is high.",
          "answer": "redistributing"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Check that a powered mattress is set to the patient's ______.",
          "answer": "weight"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Each additional ______ on a redistributing surface reduces its effect.",
          "answer": "layer"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "A patient sitting out should have an appropriate ______.",
          "answer": "cushion"
        }
      ]
    },
    "guidanceNote": "In Part A you do not need to read every word. Match the key idea in the question to the heading first, then confirm in the body — this saves time under the strict clock."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-repositioning-for-skin-protection",
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
          "heading": "Repositioning frequency",
          "body": "Reposition at-risk patients at least every two hours, or more often if the skin shows early signs of damage. Agree and document a personal schedule rather than applying the same interval to everyone, since the right frequency depends on how much the patient moves independently, the surface they are on, and how quickly redness appears and clears. Record the position used as well as the time, because a chart showing only a tick tells the next person nothing they can work from. Patients who can shift their own weight should be prompted and encouraged rather than turned, as independent movement is preserved by being used and lost quickly when it is not. Repositioning at night is not omitted for the sake of sleep; the interval may be extended where the surface allows it, but the decision is recorded rather than left to whoever is on duty. Where a patient declines to be turned, record the discussion and the alternatives offered rather than the refusal alone, and revisit it later in the day rather than treating one refusal as a standing answer."
        },
        {
          "id": "B",
          "heading": "The 30-degree tilt",
          "body": "Use a 30-degree side-lying tilt rather than turning the patient fully onto the hip. This spreads pressure away from the bony point of the hip, which carries a small area and a high load when the patient lies directly on it. Support the tilt with pillows behind the back and between the knees so that the position holds without the patient sliding back, and check it after twenty minutes, since an unsupported tilt commonly collapses within that time. Avoid raising the head of the bed above 30 degrees where it can be avoided, as a steeper angle causes the patient to slide down and generates shear at the sacrum. Where the head must be raised for feeding or breathing, lower it again afterwards rather than leaving it up for convenience. Where the patient has an existing injury, avoid positioning them on it at all and record the positions that must be excluded on the turning chart."
        },
        {
          "id": "C",
          "heading": "Heel care",
          "body": "Offload the heels completely by raising the lower legs on a pillow so that the heels float clear of the mattress surface. Place the pillow lengthways under the calves rather than under the ankles, and leave the knees slightly bent, since a fully extended leg puts pressure on the popliteal vessels. Check that the heel is genuinely clear by passing a hand beneath it. Purpose-made offloading boots may be used for patients who cannot keep the position, but they are removed and the skin checked at least daily, as the boot itself can cause injury at the front of the ankle. Heels are the second commonest site of pressure injury after the sacrum and are the easiest to protect, which is why they are the site most often missed. Remove compression hosiery daily to inspect the heel beneath it, since the skin under a stocking is not visible during routine care."
        },
        {
          "id": "D",
          "heading": "Skin inspection",
          "body": "Inspect the skin at each reposition, paying attention to areas over bone. Redness that does not blanch under light pressure is an early warning sign and is reported the same shift rather than watched for a day. Press gently with a finger for a few seconds and observe whether the colour returns; where it does not, the area is treated as an injury even though the skin is unbroken. On darker skin tones colour change may not be visible, so warmth, firmness, a boggy or spongy texture and the patient's own report of pain in one place are more reliable indicators. Document the site, the size and the appearance, and mark the area on a body map so that a later reader can tell whether it has grown. Photograph only with consent and only into the clinical record. Ask the patient where they feel sore before you look, as a report of pain in one area frequently precedes any visible change in the skin."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about keeping the heels off the mattress?",
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
          "stem": "In which text can you find information about a sign found when inspecting the skin?",
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
          "stem": "In which text can you find information about a side-lying tilt instead of a full turn?",
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
          "stem": "In which text can you find information about recording the position as well as the time?",
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
          "stem": "In which text can you find information about how to assess skin where colour change is not visible?",
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
          "stem": "In which text can you find information about the angle at which the head of the bed causes sliding?",
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
          "stem": "In which text can you find information about repositioning during the night?",
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
          "stem": "Reposition at-risk patients at least every ______ hours.",
          "answer": "two"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Agree and document a ______ schedule for each patient.",
          "answer": "personal"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Independent movement is preserved by being ______.",
          "answer": "used"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Use a ______ side-lying tilt rather than a full turn.",
          "answer": "30-degree"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Support the tilt with pillows behind the back and between the ______.",
          "answer": "knees"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "A steeper head angle generates ______ at the sacrum.",
          "answer": "shear"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Place the pillow lengthways under the ______.",
          "answer": "calves"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Leave the knees slightly ______ when offloading the heels.",
          "answer": "bent"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Heels are the second commonest site after the ______.",
          "answer": "sacrum"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Redness that does not ______ under light pressure is an early sign.",
          "answer": "blanch"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Mark the area on a body ______ so growth can be judged.",
          "answer": "map"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "On darker skin, a boggy or ______ texture is a more reliable sign.",
          "answer": "spongy"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "An offloading boot can itself injure the front of the ______.",
          "answer": "ankle"
        }
      ]
    },
    "guidanceNote": "Number words may be written as words, not digits — the text says 'two', so the gap answer is 'two', not '2'."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-safe-patient-transfers",
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
          "heading": "Assess first",
          "body": "Carry out a moving and handling assessment before any transfer, identifying the patient's weight-bearing ability and the equipment required. The assessment covers what the patient can do rather than what they could do yesterday, since ability varies through the day and after a period in bed. Record how many staff are needed and which equipment, and repeat the assessment after any change in condition, after a fall, and on transfer between wards. Ask the patient what usually works for them, as many have a method they have used for years and are the best source of that information. Where the assessment shows that a transfer cannot be done safely with the staff available, the transfer waits; proceeding with fewer people than the plan requires is the commonest circumstance in which both patient and staff are injured. Where a patient has fallen, do not attempt to lift them from the floor until an assessment for injury is complete and the appropriate equipment is present."
        },
        {
          "id": "B",
          "heading": "Use equipment",
          "body": "Use a hoist or slide sheet rather than lifting manually wherever possible. Manual lifting of a full patient load is no longer acceptable practice, and the arguments that it is quicker or kinder do not survive examination: a drag lift under the arms is a recognised cause of shoulder injury in patients. Check that the sling is the correct size and type for the individual and that its loops are attached as the manufacturer specifies. Inspect equipment before use and take anything damaged out of service rather than leaving it for somebody else to notice. A hoist is not used by one person unless it is designed for single-handed use and the assessment says so. Battery charge is checked at the start of each shift, since a hoist that stops mid-transfer leaves a patient suspended. Slide sheets are removed after the transfer rather than left beneath the patient, since a sheet left in place lets the patient slide down the bed and generates shear."
        },
        {
          "id": "C",
          "heading": "Posture",
          "body": "Keep your back straight, bend at the knees and hold the load close to your body. Avoid twisting while supporting any weight, and move your feet to turn instead, since twisting under load is the mechanism behind most handling injuries among staff. Stand with the feet apart to give a stable base, one foot slightly forward, and keep the movement smooth rather than sudden. Adjust the bed to a height that avoids stooping before you begin, and lower it again afterwards for the patient. Where two people are working, they should be of broadly similar height for the same task. Take your own physical condition into account: staff returning from a back injury should be working to a documented plan rather than deciding for themselves what they can manage. Wear footwear that is enclosed and provides grip, since a foot that slips during a transfer converts a controlled movement into an uncontrolled one."
        },
        {
          "id": "D",
          "heading": "Communication",
          "body": "Agree a clear command before moving so that everyone, including the patient, acts together. Nominate one person to lead each transfer, and that person is normally the one at the patient's head. Use a form of words the team has agreed in advance and say it the same way each time — ready, steady, move — since ambiguity about whether the movement begins on steady or on move is a genuine and common cause of injury. Explain to the patient what will happen and what you need them to do, in short sentences and before the equipment is in place rather than while it is being applied. Check that everybody is ready and give anyone the ability to stop the transfer at any point, whatever their grade. Pause and reset rather than continuing a movement that has begun badly. Where the patient is confused, keep the explanation short and repeat it immediately before the movement rather than several minutes in advance."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about nominating one person to lead the transfer?",
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
          "stem": "In which text can you find information about correct posture when handling a load?",
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
          "stem": "In which text can you find information about an assessment before any transfer takes place?",
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
          "stem": "In which text can you find information about checking that a sling is the right size?",
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
          "stem": "In which text can you find information about asking the patient what usually works for them?",
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
          "stem": "In which text can you find information about the words used to begin a movement?",
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
          "stem": "In which text can you find information about staff returning to work after a back injury?",
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
          "stem": "Keep your back straight and hold the load close to your ______.",
          "answer": "body"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Move your ______ to turn rather than twisting.",
          "answer": "feet"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Adjust the ______ to a height that avoids stooping.",
          "answer": "bed"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "The assessment identifies the patient's ______ ability.",
          "answer": "weight-bearing"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Repeat the assessment after any change in ______.",
          "answer": "condition"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "If the transfer cannot be done safely, it ______.",
          "answer": "waits"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Use a hoist or ______ sheet rather than lifting manually.",
          "answer": "slide"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "A drag lift under the arms causes ______ injury in patients.",
          "answer": "shoulder"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Check the sling's ______ are attached as the manufacturer specifies.",
          "answer": "loops"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Check the ______ charge at the start of each shift.",
          "answer": "battery"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Nominate one person to ______ each transfer.",
          "answer": "lead"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "The leader is normally the person at the patient's ______.",
          "answer": "head"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Anyone may ______ the transfer at any point, whatever their grade.",
          "answer": "stop"
        }
      ]
    },
    "guidanceNote": "Action verbs at the start of each text (assess, use, keep, agree) signal the topic — scan those first."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-source-isolation-precautions",
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
          "heading": "Room allocation",
          "body": "Place the patient in a single room with the door kept closed where possible. Display the appropriate isolation sign at the entrance, and make sure it states what is required rather than only naming the organism, since a sign that gives a name alone is read differently by every person who passes it. Where single rooms are limited, prioritise patients with diarrhoea, with a respiratory infection producing a cough, and those known to carry a resistant organism. Where cohorting is unavoidable, group patients with the same confirmed organism and never on the basis of a suspicion. Keep the room's equipment inside it and dedicate what can be dedicated — a thermometer, a blood-pressure cuff, a hoist sling. Record the reason for isolation and the plan for stepping it down, as isolation continued without review restricts the patient long after the need has gone. Explain to the patient and the family why isolation is needed and how long it is expected to last, as isolation without explanation is experienced as a punishment."
        },
        {
          "id": "B",
          "heading": "Protective equipment",
          "body": "Put on an apron and gloves before entering. Add a fluid-resistant mask and eye protection when there is a risk of splashing, and note that a procedure generating aerosols requires a higher level of respiratory protection that must be fit-tested to the individual wearer. Equipment is put on outside the room and in the correct sequence, and hands are cleaned before the first item. Long sleeves are rolled above the elbow first, since an apron does not cover a cuff. Do not wear the same apron for two patients even where both are isolated for the same reason. Take into the room only what is needed, because anything carried in is treated as contaminated on the way out — including a pen, a phone and a set of notes. Where a visitor is to enter, show them what to put on and check it, rather than leaving a box of aprons by the door and assuming."
        },
        {
          "id": "C",
          "heading": "Order of removal",
          "body": "Remove protective equipment in the correct order before leaving, ending with hand hygiene. Gloves are removed first as they are the most contaminated item, and they are removed by peeling one over the other without touching the outer surface with bare skin. The apron follows, broken at the neck and rolled inwards so the outer surface is contained. Eye protection and mask are removed last and by their straps rather than by the front, and the mask is not lowered to the neck and re-used. Dispose of each item inside the room, and clean hands immediately on the other side of the door as well. Practise the sequence rather than reading it, since the point at which contamination transfers is nearly always removal and nearly always in a hurry. Where a full-length gown has been worn, it is removed by unfastening at the neck and waist and rolling it away from the body without shaking."
        },
        {
          "id": "D",
          "heading": "Waste and linen",
          "body": "Treat all waste from the room as clinical waste and place used linen in a water-soluble alginate bag before the outer laundry bag. The inner bag is sealed inside the room and is not opened again by anybody, which is what protects the laundry staff. Do not overfill bags; a bag filled beyond three-quarters cannot be closed safely and is the point at which contents escape. Handle linen gently and do not shake it, as shaking disperses organisms into the air of the room and beyond it. Bags leave the room once, tied and labelled, rather than being accumulated by the door. Crockery may be washed normally in a dishwasher and does not require disposable alternatives, which are frequently supplied out of caution and add nothing but waste. Clean the room daily with the agreed product and give particular attention to the surfaces that hands touch most often, which are the bed rails, the table and the door handle."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the order for removing protective equipment?",
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
          "stem": "In which text can you find information about the handling of used linen?",
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
          "stem": "In which text can you find information about where the patient should be placed?",
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
          "stem": "In which text can you find information about protection needed for a procedure that generates aerosols?",
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
          "stem": "In which text can you find information about grouping patients together when single rooms run out?",
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
          "stem": "In which text can you find information about why bags should not be overfilled?",
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
          "stem": "In which text can you find information about what may be taken into the room?",
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
          "stem": "When removing protective equipment, ______ are removed first.",
          "answer": "gloves"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "The apron is broken at the ______ and rolled inwards.",
          "answer": "neck"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "A mask is removed by its ______ rather than by the front.",
          "answer": "straps"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Display the appropriate isolation ______ at the entrance.",
          "answer": "sign"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Record the reason for isolation and the plan for stepping it ______.",
          "answer": "down"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Cohort patients only with the same ______ organism.",
          "answer": "confirmed"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Put on an ______ and gloves before entering the room.",
          "answer": "apron"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Respiratory protection for aerosol procedures must be ______ to the wearer.",
          "answer": "fit-tested"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Roll long ______ above the elbow before putting on the apron.",
          "answer": "sleeves"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Place used linen in a water-soluble ______ bag.",
          "answer": "alginate"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "A bag filled beyond ______ cannot be closed safely.",
          "answer": "three-quarters"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Do not ______ linen, as this disperses organisms into the air.",
          "answer": "shake"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Crockery may be washed normally in a ______.",
          "answer": "dishwasher"
        }
      ]
    },
    "guidanceNote": "If the gap sits at the start of a sentence, match the text's capitalisation — 'Gloves' here, not 'gloves'."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-urinary-catheter-care",
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
          "heading": "Drainage position",
          "body": "Keep the drainage bag below the level of the bladder at all times to allow gravity drainage and prevent backflow of urine into the bladder. Do not rest the bag on the floor, where the outlet becomes contaminated, and use the stand or hanger provided rather than the bed frame, which places the tap where it can be knocked. Keep the tubing free of kinks and loops and secure it so that it does not drag on the catheter, since traction at the meatus causes pain and tissue damage over time. During any transfer, lift the bag below the bladder rather than resting it on the patient's abdomen, and empty it before moving them. Empty the bag when it is around three-quarters full using a clean container for each patient, and clean the outlet before and after emptying. Position the bag on the side of the bed the patient does not use to get out, so that the tubing is not stretched or stood on when they move."
        },
        {
          "id": "B",
          "heading": "Closed system",
          "body": "Maintain a closed drainage system. Break the connection only when clinically necessary, as each disconnection raises the risk of introducing infection, and a system disconnected once is no longer the system it was. Where a sample is needed, take it from the designated sampling port after cleaning it rather than from the drainage tap or by disconnecting the tubing. Do not perform routine bladder washouts, which are not recommended and which require breaking the system. Change the drainage bag according to the manufacturer's guidance or when it is soiled or damaged, and not to a fixed local routine that has no basis. Record every occasion on which the system is opened and the reason, so that a later infection can be considered against what actually happened rather than against what is assumed to have happened. Where the system must be opened, clean the connection before and after and use a new sterile bag rather than reconnecting the one that was removed."
        },
        {
          "id": "C",
          "heading": "Daily hygiene",
          "body": "Clean the meatal area daily with soap and water during routine washing. Antiseptic cleansing offers no added benefit and is not recommended, and repeated use of antiseptics may irritate the skin without reducing infection. Clean from the meatus outwards, and in an uncircumcised male replace the foreskin afterwards, since leaving it retracted can cause swelling that becomes an emergency. Wash hands and wear gloves for the procedure and clean hands again afterwards. Encourage the patient to maintain a good fluid intake unless it is restricted for another reason. Do not apply creams or powders around the catheter, and inspect the area while cleaning for discharge, soreness or bleeding, any of which is reported rather than noted and left. In a female patient, clean the perineum from front to back, and use a separate section of the cloth for each stroke."
        },
        {
          "id": "D",
          "heading": "Reviewing need",
          "body": "Review the ongoing need for the catheter each day. Early removal once the indication has passed is the most effective way to reduce infection, and no other measure comes close to it; the risk rises with every day the catheter remains. Record the indication and the intended removal date at the time of insertion, since a catheter with no recorded reason tends to stay. Ask at every ward round whether it is still needed rather than waiting to be told, and consider alternatives — a sheath, timed toileting, intermittent catheterisation — before continuing. Where a catheter is required long term, plan the changes and the community follow-up in advance. On discharge, state the indication, the change date and who is responsible, as a catheter that leaves hospital without a plan can remain in place for months. Where the catheter was inserted for retention, arrange a trial without catheter rather than allowing it to continue by default until an outpatient appointment."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about antiseptic cleansing giving no added benefit?",
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
          "stem": "In which text can you find information about early removal as the most effective measure?",
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
          "stem": "In which text can you find information about the correct position of the drainage bag?",
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
          "stem": "In which text can you find information about where a urine sample should be taken from?",
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
          "stem": "In which text can you find information about replacing the foreskin after cleaning?",
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
          "stem": "In which text can you find information about what should be recorded at the time of insertion?",
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
          "stem": "In which text can you find information about emptying the bag safely?",
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
          "stem": "Keep the drainage bag below the level of the ______.",
          "answer": "bladder"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "Do not rest the bag on the ______.",
          "answer": "floor"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Empty the bag when it is around ______ full.",
          "answer": "three-quarters"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Maintain a ______ drainage system.",
          "answer": "closed"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "Take a sample from the designated sampling ______.",
          "answer": "port"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Do not perform routine bladder ______.",
          "answer": "washouts"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Clean the meatal area daily with ______ and water.",
          "answer": "soap"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Clean from the meatus ______.",
          "answer": "outwards"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "In an uncircumcised male, replace the ______ afterwards.",
          "answer": "foreskin"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Review the ongoing ______ for the catheter each day.",
          "answer": "need"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Record the indication and the intended ______ date at insertion.",
          "answer": "removal"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Consider alternatives such as a ______ or timed toileting.",
          "answer": "sheath"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Record every occasion on which the system is ______.",
          "answer": "opened"
        }
      ]
    },
    "guidanceNote": "Two texts here both mention infection — distinguish by mechanism (closed system versus prompt removal) before answering."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_A",
    "profession": null,
    "slug": "rea-a-wound-dressing-selection",
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
          "heading": "Hydrocolloid dressings",
          "body": "Hydrocolloid dressings form a gel as they absorb exudate and suit lightly to moderately exuding wounds. They support autolytic debridement of sloughy tissue and can stay in place for up to seven days, which reduces disturbance of the wound bed and is the main reason for choosing them. Warn the patient and the staff that the gel produced has an odour and an appearance that is commonly mistaken for infection, since an unnecessary course of antibiotics frequently follows a first dressing change. They are not used on infected wounds, on wounds with heavy exudate, or where the surrounding skin is fragile, as the adhesive can strip it on removal. Press the dressing in place with the hand for a few seconds after application, because the adhesive is activated by warmth and a dressing applied cold lifts at the edges within a day. Warm the dressing briefly in the hand before applying it in a cold room, and avoid applying it immediately after cleansing while the surrounding skin is still damp."
        },
        {
          "id": "B",
          "heading": "Alginate dressings",
          "body": "Alginate dressings are derived from seaweed and handle heavy exudate well, converting to a gel as they absorb. They are not suitable for dry wounds, where they may adhere and cause trauma on removal, and a dressing that has dried onto a wound is soaked off with saline rather than pulled. They also have a haemostatic effect and are useful in a wound that oozes after debridement. Cut or fold the dressing to the shape of the wound rather than overlapping the surrounding skin, which macerates it, and pack a cavity loosely rather than tightly, recording the number of pieces used so that none is left behind. A secondary dressing is required to hold an alginate in place, and the change frequency is determined by the exudate rather than by a fixed interval. Do not use an alginate on a wound with exposed bone or tendon without specialist advice, since the wound bed there needs a different approach."
        },
        {
          "id": "C",
          "heading": "Film dressings",
          "body": "Transparent film dressings are waterproof and allow the wound to be inspected without removal. They are intended for superficial wounds with minimal exudate only, and they have no absorbency of their own: fluid that collects beneath a film macerates the wound edge and lifts the dressing. They are useful as a secondary dressing over an absorbent primary layer, and as a protective cover over intact skin at risk of friction. Apply to dry skin without stretching the film, as tension causes blistering, and remove by stretching it parallel to the skin rather than lifting it upwards. They are not used on infected wounds, on fragile skin, or where the exudate level is unknown, and a film placed over a wound whose exudate has not yet been assessed is a common early error. Films are also used to secure a cannula, and the same rules apply: dry skin, no tension, and removal parallel to the surface."
        },
        {
          "id": "D",
          "heading": "Foam dressings",
          "body": "Foam dressings provide cushioning over bony prominences and manage moderate to heavy exudate. The wound bed should be reassessed at each dressing change, and the dressing chosen again rather than repeated by habit, since the correct product for a wound changes as the wound does. Foams are available with and without an adhesive border; the non-adhesive version is preferred where the surrounding skin is fragile and is secured with a bandage or a retention sheet. They may be left for several days where exudate allows, and a foam changed daily is usually a sign that the wrong absorbency was chosen. Select a size that extends beyond the wound margin by a margin of two centimetres, and record the size used so that a change in the wound can be judged against it. Where a foam is used under compression, check that its thickness does not distort the bandage, as a bulky dressing creates a point of high pressure of its own."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about a dressing that allows inspection without removal?",
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
          "stem": "In which text can you find information about a dressing made from seaweed?",
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
          "stem": "In which text can you find information about a dressing that cushions bony prominences?",
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
          "stem": "In which text can you find information about a gel whose smell is often mistaken for infection?",
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
          "stem": "In which text can you find information about packing a cavity and counting the pieces used?",
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
          "stem": "In which text can you find information about choosing between an adhesive and a non-adhesive version?",
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
          "stem": "In which text can you find information about how a dressing should be removed from the skin?",
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
          "stem": "A hydrocolloid dressing supports ______ debridement of sloughy tissue.",
          "answer": "autolytic"
        },
        {
          "id": "q9",
          "kind": "gap",
          "stem": "A hydrocolloid may stay in place for up to ______ days.",
          "answer": "seven"
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "The adhesive is activated by ______, so press the dressing in place.",
          "answer": "warmth"
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "Alginate dressings are derived from ______.",
          "answer": "seaweed"
        },
        {
          "id": "q12",
          "kind": "gap",
          "stem": "An alginate dried onto a wound is ______ off with saline.",
          "answer": "soaked"
        },
        {
          "id": "q13",
          "kind": "gap",
          "stem": "Pack a cavity ______ rather than tightly.",
          "answer": "loosely"
        },
        {
          "id": "q14",
          "kind": "gap",
          "stem": "Film dressings have no ______ of their own.",
          "answer": "absorbency"
        },
        {
          "id": "q15",
          "kind": "gap",
          "stem": "Apply a film without ______ it, as tension causes blistering.",
          "answer": "stretching"
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Remove a film by stretching it ______ to the skin.",
          "answer": "parallel"
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Foam dressings provide ______ over bony prominences.",
          "answer": "cushioning"
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "The ______ version is preferred where the surrounding skin is fragile.",
          "answer": "non-adhesive"
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "Select a foam that extends beyond the wound margin by ______ centimetres.",
          "answer": "two"
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "A ______ dressing is required to hold an alginate in place.",
          "answer": "secondary"
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
    "slug": "rea-a-f1-preventing-pressure-injuries",
    "form": "form-1",
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
          "body": "Pressure injuries develop where soft tissue is compressed between bone and a surface. Structured risk assessment on admission is the foundation of prevention. The Braden Scale rates six areas — sensory perception, moisture, activity, mobility, nutrition and friction/shear — with lower total scores meaning higher risk. A score of 18 or below prompts a prevention plan. Risk should be reassessed whenever the patient's condition changes, not only on admission. Events that warrant reassessment include a return from theatre, a new episode of illness, a change in continence, and any transfer between wards or departments. The tool is a prompt for judgement rather than a substitute for it: a patient whose total score sits above the threshold may still be at risk if a single area, such as sensory perception, is severely impaired. Record the score, the date and the plan it produced, so that the next clinician can see what was decided and why. Where a patient is admitted overnight or in an emergency, the assessment should still be completed within six hours of arrival, and an interim plan started in the meantime rather than deferred to the morning round."
        },
        {
          "id": "B",
          "heading": "Repositioning",
          "body": "Repositioning redistributes pressure and is advised at least every four hours for at-risk patients on a pressure-redistributing mattress, and more often on a standard mattress. The 30-degree tilt is preferred over lying directly on the hip, which concentrates pressure on the bony prominence. Heels should be offloaded entirely, ideally floating on a pillow placed under the calves. A repositioning schedule should be documented and visible at the bedside. Patients who can move themselves should be encouraged and reminded to do so rather than turned, and those seated in a chair need attention too — sitting produces higher pressures over a smaller area than lying, so unbroken chair time should be limited. Use slide sheets rather than dragging, since friction and shear damage tissue that pressure alone would not. Where a patient declines to be turned, record the discussion and the alternatives offered rather than simply the refusal."
        },
        {
          "id": "C",
          "heading": "Skin and moisture",
          "body": "Skin should be inspected at each repositioning, with particular attention to the sacrum, heels and any medical-device sites. Non-blanching redness is an early warning sign. Excess moisture from perspiration or incontinence weakens the skin barrier; a barrier cream protects intact skin, but massage over bony prominences is contraindicated, as it can damage fragile tissue. Device-related injury is easily missed: oxygen tubing behind the ears, catheter tubing under a thigh, and the rims of masks all cause damage in places nobody routinely looks. Inspect under and around every device at least daily and move it slightly where the design allows. On darker skin tones redness may not be visible at all, so warmth, firmness, boggy texture and the patient's own report of pain in one spot become the more reliable signs. Any suspicious area should be documented with its site, size and appearance."
        },
        {
          "id": "D",
          "heading": "Nutrition",
          "body": "Undernutrition impairs healing and raises risk. Patients should be screened with a validated tool such as MUST. Adequate protein and energy support tissue integrity; where oral intake is poor, referral to the dietitian is indicated. Hydration matters too — dehydrated skin is less resilient. Screening should be repeated weekly for inpatients rather than performed once, because intake often falls during an admission for reasons that have nothing to do with appetite: missed meals around investigations, unopened packaging, dentures left at home, or a tray placed out of reach. Food charts are worth keeping only if somebody reads them. Small, frequent, energy-dense options are usually better tolerated than large plated meals, and mealtime assistance should be recorded as a nursing intervention in its own right. Supplements are useful where food alone is insufficient, but they are an addition to meals rather than a replacement for them."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about how often to reposition an at-risk patient?",
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
          "stem": "In which text can you find information about a validated tool for nutritional screening?",
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
          "stem": "In which text can you find information about the earliest visible warning sign?",
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
          "stem": "In which text can you find information about the score that triggers a prevention plan?",
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
          "stem": "In which text can you find information about how to protect the heels?",
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
          "stem": "In which text can you find information about when risk should be reassessed?",
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
          "stem": "In which text can you find information about a practice that is contraindicated?",
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
    "slug": "rea-a-f2-preventing-falls-in-older-adults",
    "form": "form-2",
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
          "body": "Falls in older adults are rarely due to a single cause. Contributors include muscle weakness, poor balance, visual impairment, certain medicines (particularly sedatives and some blood-pressure drugs) and environmental hazards. A history of a previous fall is the strongest single predictor of a future one. A multifactorial assessment is recommended for anyone who has fallen or reports unsteadiness. Asking the question matters, because many older people do not report falls unless asked directly — they may attribute a fall to carelessness, or fear that reporting it will lead to a loss of independence. The assessment should cover gait and balance, cognition, continence, feet and footwear, and any fear of falling, which is itself a risk factor because it leads to reduced activity and further weakness. Frequency and circumstances are worth recording: falls that occur at a particular time of day often have a particular cause. Where an assessment identifies several contributors, address them together rather than one at a time, since single-factor interventions have repeatedly been shown to achieve very little on their own."
        },
        {
          "id": "B",
          "heading": "Medication review",
          "body": "Medicines are a modifiable risk. Sedatives, antipsychotics and drugs that lower blood pressure all increase risk, which rises with the number of medicines taken. A structured medication review — deprescribing where possible — is core to prevention. Postural blood pressure should be checked, as a drop on standing is a common, treatable contributor. Measure lying and then standing, at one minute and again at three, since a delayed drop is easily missed by a single reading. Where a culprit medicine is identified, reduce it gradually and arrange a review date rather than stopping abruptly and hoping. Night sedation deserves particular attention, because its effects persist into the hours when people get up to use the bathroom. Involve the patient in the decision: a person who understands why a tablet is being reduced is far more likely to stay off it than one who simply finds it missing."
        },
        {
          "id": "C",
          "heading": "Strength and balance",
          "body": "Exercise that challenges balance and builds lower-limb strength reduces falls in community-dwelling older people. To work it must be of sufficient dose — generally at least 50 hours over the programme — and progressive. Walking alone is not enough; the balance component makes the difference. Tai chi has good evidence. Progression is the part most often lost in practice: an exercise that was challenging in week one is no longer challenging in week six, and a programme that never gets harder stops working. Programmes should be continued indefinitely, since the benefit fades within months of stopping, so the choice of activity has to be one the person will actually keep doing. Group classes suit some people and home programmes suit others; adherence, not format, predicts benefit. Those who are very frail should be assessed before starting rather than excluded, as they often have the most to gain."
        },
        {
          "id": "D",
          "heading": "Environment and footwear",
          "body": "Home hazards such as loose rugs, poor lighting and absent grab rails contribute to falls; an occupational-therapy home assessment can identify and remove them. Footwear matters: well-fitting shoes with a low heel and firm sole are safer than slippers or bare feet. Vision should be checked, but be cautious with new bifocals, which can affect depth perception on stairs. Assessment carried out in the person's own home is considerably more useful than a checklist completed in a clinic, because the hazards that matter are the ones on the route actually taken — from bed to bathroom at night, or up a step nobody mentioned. Lighting on stairs and a working light within reach of the bed are worth more than most equipment. Recommendations are only effective if the changes are made, so agreeing who will do the work, and by when, is part of the assessment rather than an afterthought."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the strongest single predictor of a future fall?",
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
          "stem": "In which text can you find information about why the balance component of exercise matters?",
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
          "stem": "In which text can you find information about a caution about new glasses?",
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
          "stem": "In which text can you find information about how the number of medicines affects risk?",
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
          "stem": "In which text can you find information about an exercise with good evidence?",
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
          "stem": "In which text can you find information about safe footwear features?",
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
          "stem": "In which text can you find information about who a multifactorial assessment is recommended for?",
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
            "a drop on standing"
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
    "slug": "rea-a-f3-delirium-in-hospital",
    "form": "form-3",
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
          "body": "Delirium is a sudden change in mental state — confusion, disorientation, altered awareness — that develops over hours or days, and it is often missed. Unlike dementia, which comes on slowly, delirium is acute and fluctuates through the day, sometimes worse at night. The quiet, withdrawn 'hypoactive' form is easily overlooked and carries the worst outcomes. A simple screening tool such as the 4AT can help detect it. The fluctuation itself causes difficulty: a patient assessed during a lucid interval may appear entirely well, so an account from somebody who knows them is essential. Ask specifically whether this is a change from how the person usually is, rather than whether they seem confused now. Delirium and dementia frequently occur together, and the presence of one does not exclude the other; a person with dementia who becomes acutely worse should be treated as having delirium until proven otherwise. Screening on admission and again whenever a patient's behaviour changes is more reliable than screening only those who appear agitated, since the agitated ones were never the group being missed."
        },
        {
          "id": "B",
          "heading": "Common causes",
          "body": "Delirium usually has a trigger, often more than one. Frequent causes include infection (especially urinary and chest), dehydration, constipation, pain, and medicines — particularly sedatives and strong painkillers. Because the causes are treatable, delirium should prompt a search for the underlying problem rather than simply sedation of the patient. Untreated pain is as capable of producing it as the drugs used to relieve pain, and in a person who cannot report discomfort this is easily overlooked. Urinary retention and a full rectum are both common and both easily checked. Withdrawal from alcohol or from a regular sedative should be considered in anyone admitted acutely, and a recent change to any prescription is worth examining even where the drug is not an obvious candidate. Several small contributors more often act together than one large one, so finding a cause is not a reason to stop looking."
        },
        {
          "id": "C",
          "heading": "Prevention",
          "body": "Much delirium is preventable. Keeping patients hydrated, mobile and oriented — with clocks, daylight, and their own glasses and hearing aids — reduces risk. Uninterrupted sleep matters, so avoid waking patients for non-urgent observations at night. Familiar faces help, so involving family is protective, not a distraction. Multi-component programmes of this kind reduce incidence by around a third, and no single element accounts for the effect; it is the combination applied consistently that works. Ward moves are worth avoiding where they can be, since each one removes the orientation a patient has assembled. Small things carry weight: a named nurse across a shift, a jug within reach, a window seat, a hearing aid with a working battery. Where equipment has been left at home, asking a relative to bring it in is one of the more effective interventions available on a ward."
        },
        {
          "id": "D",
          "heading": "Management",
          "body": "When delirium occurs, treat the cause and support the person. A calm, well-lit environment and consistent staff reduce distress. Medication to sedate should be a last resort, reserved for severe agitation that risks safety, and used at the lowest dose, as it can prolong the delirium it is meant to treat. Try non-drug approaches first and give them time: reassurance in short, simple sentences, one person speaking rather than several, and where possible allowing the person to walk with a companion rather than being asked repeatedly to sit down. Arguing with a mistaken belief tends to escalate distress without correcting it. Where medication is used, the reason, the dose and the intended review point should be documented and the need re-examined daily. Recovery is often slow and incomplete, and families should be told this at the outset rather than at discharge."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about how delirium differs from dementia?",
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
          "stem": "In which text can you find information about which form of delirium has the worst outcomes?",
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
          "stem": "In which text can you find information about why sedating medication should be a last resort?",
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
          "stem": "In which text can you find information about the protective role of family?",
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
          "stem": "In which text can you find information about common infective triggers?",
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
          "stem": "In which text can you find information about a named screening tool?",
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
          "stem": "In which text can you find information about advice about night-time observations?",
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
    "slug": "rea-a-anaphylaxis",
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
          "body": "Anaphylaxis is likely when all three of the following are present:\n\n- sudden onset and rapid progression of symptoms\n- life-threatening airway, breathing or circulation problems\n- skin or mucosal changes — flushing, urticaria, angioedema\n\nSkin changes alone are not anaphylaxis. They are present in about 80 per cent of reactions, so in roughly one in five there are none, and their absence must never delay treatment where airway, breathing or circulation are compromised.\n\nExposure to a known allergen supports the diagnosis but is not required. In a substantial minority no trigger is ever identified.\n\nConsider the alternatives: a severe asthma attack, a vasovagal episode (a faint), a panic attack, and, in young children, breath-holding. A faint is distinguished by bradycardia and by rapid recovery when the patient is laid flat. Anaphylaxis does not recover in that way.\n\nThe picture is not always dramatic at the start. A patient who says only that their tongue feels odd, or who scratches at their neck without complaining, has begun the same process as the one visibly struggling, and the interval between those states can be very short."
        },
        {
          "id": "B",
          "heading": "Immediate management",
          "body": "Position first. Lie the patient flat with the legs raised if breathing allows; sit them up if breathing is difficult; use the recovery position if unconscious. Do not stand or walk the patient — sudden standing during a reaction has caused cardiac arrest.\n\nAdrenaline 1 mg/mL (1:1000), intramuscular, into the anterolateral thigh:\n\nAdrenaline dose by age, with the volume to draw up: Adult and child over 12 years — 500 micrograms, 0.5 mL. Child 6–12 years — 300 micrograms, 0.3 mL. Child 6 months to 6 years — 150 micrograms, 0.15 mL. Child under 6 months — 100–150 micrograms, 0.1–0.15 mL.\n\nRepeat after 5 minutes if there is no improvement.\n\nEstablish the airway, give high-flow oxygen, and give an intravenous fluid bolus. Antihistamines and corticosteroids are not first-line treatment and must never delay adrenaline.\n\nWhere more than two doses are needed, or the reaction does not settle, seek critical care help early rather than repeating intramuscular doses indefinitely.\n\nDo not leave the patient to fetch anything. Send somebody else, stay where you are, and keep talking to them. A person left alone in a cubicle for two minutes has been left alone for exactly the two minutes that mattered."
        },
        {
          "id": "C",
          "heading": "After the reaction",
          "body": "Mast cell tryptase. Take the first sample as soon as feasible once treatment has started — do not delay resuscitation to take it. Take a second at 1 to 2 hours and a third at 24 hours or follow-up, the last as the patient's own baseline.\n\nBiphasic reactions occur in up to 20 per cent of cases, usually within 12 hours of the first.\n\nObservation period after treatment:\n\nHow long to observe, and when: Observe 2 hours — good response to a single dose given within 30 minutes of onset, complete resolution. Observe 6 hours — two doses required, or a previous biphasic reaction. Observe 12 hours or overnight — more than two doses, severe asthma, ongoing reaction, late-night presentation, or no access to emergency care.\n\nBefore discharge: two adrenaline auto-injectors, training in their use, a written emergency plan, and referral to a specialist allergy service.\n\nWrite down the time of each thing given and the response to it. The account written afterwards is what the next team works from, and the one detail nobody can reconstruct later is how quickly the patient answered the first treatment."
        },
        {
          "id": "D",
          "heading": "Triggers and risk",
          "body": "Commonest triggers. Food, especially in children — peanut, tree nut, milk, egg, shellfish. Drugs — antibiotics, neuromuscular blocking agents, non-steroidal anti-inflammatory drugs, contrast media. Stings — wasp and bee.\n\nCo-factors lower the threshold at which a reaction occurs: exercise, alcohol, acute infection, non-steroidal anti-inflammatory drugs and, in women, the pre-menstrual period. A patient may tolerate a food repeatedly, then react when one of these is present.\n\nRisk factors for a fatal outcome: co-existing asthma, particularly when poorly controlled; delayed adrenaline; upright posture during the reaction; and adolescence, in which risk-taking and reluctance to carry an auto-injector combine. Nut allergy in adolescents is the pattern most often associated with fatal food anaphylaxis.\n\nPatients taking beta-blockers may respond poorly to adrenaline, and glucagon may be required.\n\nIdiopathic anaphylaxis — where no trigger is found despite full investigation — accounts for a significant minority of adult cases. These patients carry auto-injectors indefinitely, because there is nothing to avoid.\n\nAsk what the patient believes caused it and write their answer in their own words. They have usually thought about it longer than anybody else in the room, and the thing they name is worth investigating even when it proves not to be the cause."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the dose of adrenaline for a child of eight?",
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
          "stem": "In which text can you find information about how long a patient should be watched after treatment?",
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
          "stem": "In which text can you find information about the conditions that may be mistaken for anaphylaxis?",
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
          "stem": "In which text can you find information about things that make a reaction more likely on a particular day?",
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
          "stem": "In which text can you find information about the position in which the patient should be placed?",
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
          "stem": "In which text can you find information about the three features that together indicate anaphylaxis?",
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
          "stem": "In which text can you find information about the classes of drug most often responsible?",
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
            "tryptase"
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
            "20%"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "A faint can be told apart from anaphylaxis by the presence of ______________.",
          "answer": "bradycardia",
          "variants": []
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
    "slug": "rea-a-sepsis",
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
          "body": "Sepsis is life-threatening organ dysfunction caused by a dysregulated response to infection. It is not a diagnosis made from a temperature. A patient may have sepsis with an entirely normal temperature, and the very young, the very old and the immunosuppressed frequently do.\n\nScreen any patient with suspected infection using the national early warning score. A score of 5 or more, or 3 in any single parameter, triggers senior review.\n\nRed flag findings — any one of which requires immediate action:\n\n- responds only to voice or to pain, or is unresponsive\n- systolic blood pressure 90 mmHg or below, or more than 40 below the patient's normal\n- heart rate above 130 per minute\n- respiratory rate 25 per minute or above\n- needs oxygen to keep saturation above 92 per cent\n- non-blanching rash, or mottled or ashen skin\n- has not passed urine in 18 hours\n- lactate 2 mmol/L or above\n- recent chemotherapy\n\nSepsis with no identified source is common. Do not delay treatment while the source is being sought.\n\nSay the word out loud when you think it. A concern that is described as 'not quite right' is passed on as nothing at all, while the same concern named as possible sepsis brings somebody to the bedside."
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
          "stem": "In which text can you find information about the six actions that must be completed within an hour?",
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
          "stem": "In which text can you find information about the score that triggers a senior review?",
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
          "stem": "In which text can you find information about how sepsis presents in a child?",
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
          "stem": "In which text can you find information about reviewing the antibiotic after two or three days?",
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
          "stem": "In which text can you find information about the oxygen saturation to aim for?",
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
          "stem": "In which text can you find information about effects that survivors may still have months later?",
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
          "stem": "In which text can you find information about why the usual thresholds are less reliable in pregnancy?",
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
          "variants": [
            "BP"
          ]
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
    "slug": "rea-a-pressure-ulcer-prevention",
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
          "stem": "In which text can you find information about how often a patient on a foam mattress is turned?",
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
          "stem": "In which text can you find information about what is seen in category 4 damage?",
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
          "stem": "In which text can you find information about how to tell moisture damage from pressure damage?",
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
          "stem": "In which text can you find information about what to look for when the skin is dark?",
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
          "stem": "In which text can you find information about why the heel should float clear of the bed?",
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
          "stem": "In which text can you find information about when the skin should be inspected?",
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
          "stem": "In which text can you find information about whether eschar on a heel should be removed?",
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
            "every week"
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
    "slug": "rea-a-hypoglycaemia",
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
          "body": "Hypoglycaemia is a blood glucose below 4.0 mmol/L. The phrase used on the wards is \"four is the floor\", and the number matters because treatment should not wait for a patient to look unwell.\n\nThe early warning symptoms are autonomic: sweating, trembling, palpitations, hunger and a sudden anxiety the patient often cannot explain. These are the body's alarm and they appear first.\n\nIf the glucose falls further, the brain itself runs short of fuel. This produces confusion, drowsiness, slurred speech, difficulty concentrating and behaviour that is out of character. Staff who do not know the patient may read these as intoxication, a stroke or simple awkwardness.\n\nThe change is often noticed by somebody else before the patient notices it — a colleague, a relative, or the person in the next bed. A patient who is normally careful and becomes irritable over something small should have a glucose measured before anybody decides what sort of behaviour they are looking at.\n\nSome patients lose the early alarm altogether after years of repeated episodes. In impaired awareness of hypoglycaemia the first sign is confusion, with no warning stage at all.\n\nAsk anybody who knows the patient whether this is how they behave when their glucose falls. Families and regular staff recognise the change long before a stranger does, and their description is often more precise than anything the patient can offer at the time."
        },
        {
          "id": "B",
          "heading": "Immediate treatment",
          "body": "Treat first and document afterwards. Never send a symptomatic patient for a laboratory result before treating.\n\nConscious, able to swallow — 15–20 g fast-acting carbohydrate: 4–5 glucose tablets, or 150–200 mL of pure fruit juice. Conscious but uncooperative — glucose gel squeezed between the gum and the cheek. Unconscious or unable to swallow — nothing by mouth; 1 mg glucagon by intramuscular injection, or intravenous glucose.\n\nDo not reach for a chocolate bar or a biscuit as the first treatment. The fat in them slows absorption, and a patient who needs sugar within minutes does not have those minutes to spare. The same applies to a fizzy drink from which the sugar has been removed.\n\nRecheck the glucose after 15 minutes. If it is still below 4.0 mmol/L, repeat the fast-acting carbohydrate. Once the level is above 4.0, give a portion of long-acting carbohydrate such as toast or a sandwich, or the next meal if it is due.\n\nStay with the patient until they have swallowed it. A treatment left on the table beside somebody who is confused has not been given, and the chart will nonetheless record that it was."
        },
        {
          "id": "C",
          "heading": "After the episode",
          "body": "Do not leave the patient alone until they have eaten the long-acting carbohydrate and their glucose is stable.\n\nRecord the reading, the treatment given, the time and the response. An episode that is treated and never written down cannot be prevented.\n\nDo not omit the next dose of insulin without a medical review. Stopping insulin after a hypoglycaemic episode is a common reaction and produces a dangerous rise later the same day.\n\nAsk the patient what they noticed first, and write down the words they use. Their own description is the best guide there is to whether their warning symptoms are still working, and it is a question almost nobody thinks to ask.\n\nEvery episode should prompt the question of why it happened. Review the timing of medication against meals, recent weight loss, kidney function and alcohol.\n\nAsk what the patient was doing in the hours beforehand, and write it down. The answer is very often a missed meal, unusual walking, or a dose taken at a different time, and none of those appear anywhere in the notes unless somebody asks."
        },
        {
          "id": "D",
          "heading": "Who is at risk",
          "body": "Insulin and the sulfonylurea tablets are the two treatments that cause hypoglycaemia. Metformin alone does not.\n\nHypoglycaemia caused by a sulfonylurea can last many hours and may return after apparent recovery. These patients require admission and observation, not simply a sandwich and discharge.\n\nAlcohol blocks the liver's production of glucose. The resulting episode is often delayed, occurring during the night after drinking, and is easily mistaken for drunkenness by everyone present.\n\nKidney function matters because insulin and several of the tablets are cleared by the kidneys. As that clearance falls, a dose safe for years begins to build up in a patient who has changed nothing at all about what they take.\n\nOther risks include a missed or delayed meal, unusual exercise, vomiting, declining kidney function and increasing age.\n\nCheck what the patient actually takes rather than what is written on the list. A tablet stopped by one clinician and continued by the patient is a common and entirely invisible cause, found only by asking."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the treatment for a patient who cannot swallow?",
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
          "stem": "In which text can you find information about the reason an episode may return hours later?",
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
          "stem": "In which text can you find information about the symptoms that appear before the brain is affected?",
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
          "stem": "In which text can you find information about what must be eaten once the glucose is above four?",
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
          "stem": "In which text can you find information about what should be reviewed to find the cause?",
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
          "stem": "In which text can you find information about the drug that does not cause low glucose on its own?",
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
          "stem": "In which text can you find information about the condition in which the warning symptoms are absent?",
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
            "in the cheek"
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
            "a stroke"
          ]
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "An unconscious patient must be given ______________ by mouth.",
          "answer": "nothing",
          "variants": [
            "nothing at all"
          ]
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "After the level rises above four, the patient needs a portion of ______________ carbohydrate.",
          "answer": "long-acting",
          "variants": [
            "long acting",
            "slow-acting"
          ]
        },
        {
          "id": "q18",
          "kind": "gap",
          "stem": "Insulin should not be omitted afterwards without a ______________.",
          "answer": "medical review",
          "variants": [
            "a review"
          ]
        },
        {
          "id": "q19",
          "kind": "gap",
          "stem": "An episode caused by a sulfonylurea requires ______________ rather than discharge.",
          "answer": "admission",
          "variants": [
            "admission and observation",
            "observation"
          ]
        },
        {
          "id": "q20",
          "kind": "gap",
          "stem": "Hypoglycaemia after alcohol typically occurs during the ______________.",
          "answer": "night",
          "variants": [
            "the night",
            "at night"
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
    "slug": "rea-a-acute-stroke",
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
          "body": "The four letters of FAST are Face, Arms, Speech and Time. Ask the person to smile and look for one side of the face drooping. Ask them to raise both arms and watch for one drifting down. Listen for speech that is slurred, or for words that come out in the wrong order.\n\nNot every stroke fits those three. Sudden loss of vision in one eye, sudden severe dizziness with unsteadiness, or a sudden headache unlike any the person has had before are all recognised presentations, and all are missed more often than the classic picture.\n\nThe person is often the last to know. Weakness down one side can go unremarked by the patient while everybody else in the room can see it, and a stroke that takes speech may leave them unable to tell anyone anything is wrong at all. For that reason the account of somebody who was present matters as much as the patient's own.\n\nThe symptoms are almost always painless and begin abruptly. A patient who says the weakness \"came on over a week\" is describing something else, and that difference is worth asking about directly rather than assuming.\n\nBelieve the person who saw it happen. A relative who says the face was not like that an hour ago has given you the single most useful piece of information available, worth more than a normal examination in front of you now."
        },
        {
          "id": "B",
          "heading": "What to do first",
          "body": "Call the emergency services immediately. Do not wait to see whether the symptoms settle, and do not arrange transport yourself.\n\nRecord the time the person was last known to be well. If they woke with the symptoms, the last known well time is when they went to bed. This single fact decides which treatments are open to them, and is the one thing nobody else can supply later.\n\nCheck the blood glucose. Hypoglycaemia produces one-sided weakness and confused speech and is treated in minutes; it is the most important condition that copies a stroke.\n\nGive nothing by mouth — no food, no drink, and no tablets — until swallowing has been assessed.\n\nDo not give aspirin. It is a reasonable instinct and it is wrong here: a bleed and a clot look identical at the bedside.\n\nDo not make an exception for the tablets that are due. A drink offered kindly in the first hour is one of the commonest avoidable harms on any stroke pathway."
        },
        {
          "id": "C",
          "heading": "In the first hours",
          "body": "A brain scan is needed urgently, and its first purpose is to separate a bleed from a clot. Nothing that thins the blood may be given until that question is answered.\n\nWhere the cause is a clot, clot-busting treatment can be given within 4.5 hours of the onset of symptoms. The benefit falls with every minute of delay, which is why the time of onset governs everything.\n\nFor a clot in one of the large vessels, mechanical removal may be offered, and in carefully selected patients remains possible up to 24 hours.\n\nBefore any food, drink or oral medicine, a trained member of staff screens the swallow. Half of patients have an unsafe swallow in the first days, and pneumonia from aspiration is a leading cause of death after stroke.\n\nExplain what is happening to the patient even when they cannot answer. Understanding is often intact when speech is not, and a person who can hear the room discussing them as though they were absent will remember it."
        },
        {
          "id": "D",
          "heading": "Afterwards",
          "body": "Blood pressure is usually high in the first hours and is not routinely lowered, because the injured brain depends on that pressure to keep the surrounding tissue alive.\n\nAn irregular pulse should be investigated. Atrial fibrillation allows clots to form in the heart and travel to the brain, and is treatable once found.\n\nRehabilitation begins within days, not weeks. Early sitting, swallowing work and speech therapy change the outcome more than anything offered later.\n\nThe other risk factors are the familiar ones: high blood pressure, smoking, diabetes and raised cholesterol. Each is worth addressing, and each is a reason this patient's family should be asked about their own.\n\nNobody should be told a stroke is simply part of growing older. Most of what causes one can be treated, and the conversation that follows an admission is often the most useful thing a family will ever be given.\n\nAsk what the patient wants to be able to do again, and write it in their own words. The answer is rarely the thing on the standard list, and every plan that follows works better when aimed at something the patient actually wants."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the reason blood pressure is left alone at first?",
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
          "stem": "In which text can you find information about the condition that most often imitates a stroke?",
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
          "stem": "In which text can you find information about the presentations that do not fit the usual three?",
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
          "stem": "In which text can you find information about how long after onset a clot may be removed mechanically?",
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
          "stem": "In which text can you find information about what to record if the person woke with symptoms?",
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
          "stem": "In which text can you find information about the heart rhythm that sends clots to the brain?",
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
          "stem": "In which text can you find information about why nothing that thins the blood is given first?",
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
            "last known well"
          ]
        },
        {
          "id": "q10",
          "kind": "gap",
          "stem": "Which condition copies a stroke and must be checked immediately?",
          "answer": "hypoglycaemia",
          "variants": [
            "hypoglycemia"
          ]
        },
        {
          "id": "q11",
          "kind": "gap",
          "stem": "What must a brain scan separate a clot from?",
          "answer": "a bleed",
          "variants": [
            "bleed",
            "a bleeding"
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
          "variants": []
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
          "variants": []
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
    "slug": "rea-a-preventing-blood-clots-in-hospital",
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
          "body": "Every patient is assessed for the risk of a blood clot within 24 hours of admission, and again if their condition changes. The assessment is not a formality: a clot in the lung remains one of the commonest preventable causes of death in hospital.\n\nThe things that raise the risk are ordinary. Being unable to move about is the largest, produced as easily by a long wait on a trolley as by an operation. Surgery lasting more than ninety minutes, cancer, a previous clot, pregnancy and the six weeks after it, dehydration, obesity and age over sixty all add to the total.\n\nNone is remarkable on its own, and that is the difficulty. A clot rarely follows one dramatic event; it follows an ordinary week in which nobody added the small things together.\n\nAssess the risk of bleeding at the same time and on the same page. Active bleeding, a low platelet count, a recent stroke, uncontrolled blood pressure and a lumbar puncture within the last four hours each change what can safely be offered.\n\nDo the assessment again when the patient's situation changes, not only on the day they arrive. Somebody admitted able to walk, who has since spent two days in bed, is not the patient assessed on the first afternoon."
        },
        {
          "id": "B",
          "heading": "What is offered",
          "body": "Keeping the patient hydrated and moving early are the two measures that cost nothing and are forgotten most often. Neither replaces the rest, and neither is optional.\n\nAnti-embolism stockings squeeze the leg from the ankle upwards and are measured for each patient before fitting. They must not be used where there is peripheral arterial disease, severe swelling of the legs, or a local skin condition, and a stocking applied to a leg with poor circulation can cause an ulcer in days.\n\nA stocking rolled down, folded over at the top, or left on a leg it was never measured for is worse than no stocking at all, because everybody in the room believes the patient is protected.\n\nIntermittent pneumatic compression sleeves inflate and deflate around the calf and suit patients who cannot have stockings.\n\nWhere the bleeding risk allows, an injected anticoagulant is prescribed. This is the measure with the strongest evidence, and the one most often omitted because somebody was uncertain.\n\nExplain what is being offered and why before it is started. A patient who understands what the injection is for accepts it far more readily than one simply presented with it each evening, and refusals almost always follow an explanation never given."
        },
        {
          "id": "C",
          "heading": "What to watch for",
          "body": "A clot in a leg usually announces itself on one side only. Look for swelling of one calf, warmth, tenderness along the vein and a change in colour. Comparing the two legs is worth more than examining one.\n\nA clot that reaches the lung presents differently. Sudden breathlessness, chest pain worse on breathing in, coughing up blood, or a collapse are all recognised, and any of them in a patient who has been immobile deserves immediate senior review.\n\nDo not wait for all of the signs. One of them, in a patient who has spent a week in a chair, is enough to ask somebody senior to look.\n\nInspect the skin under stockings daily, and remove them for a short time to do it. Pressure damage under a stocking is caused by the treatment meant to help.\n\nAsk the patient about any new pain rather than waiting to be told. Somebody in hospital for a week will often put a sore calf down to lying still, and will mention it only if asked directly."
        },
        {
          "id": "D",
          "heading": "Before the patient goes home",
          "body": "Explain how long any anticoagulant is to continue and what happens if a dose is missed. A patient who stops early because the box ran out has been failed by the discharge, not by themselves.\n\nExplain that the risk does not end at the door. It stays raised for weeks after an operation or a period in bed, and most clots following an admission appear after the patient has gone home.\n\nGive the signs to report, in writing, and say plainly who to telephone and when. A patient told to \"keep an eye out\" has been told nothing at all, and will decide at two in the morning that they do not want to be a nuisance.\n\nWrite the stop date in the family doctor's letter and on the patient's own copy, and name who reviews it. If either copy leaves without a date, ask before the patient does, because protection two people each assume the other is holding ends the week one of them is on leave."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the sleeves used when stockings cannot be worn?",
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
          "stem": "In which text can you find information about how long the raised risk lasts once the patient is home?",
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
          "stem": "In which text can you find information about the length of operation that adds to the risk?",
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
          "stem": "In which text can you find information about the difference between the two legs?",
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
          "stem": "In which text can you find information about what to tell a patient about a missed dose?",
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
          "stem": "In which text can you find information about the conditions that change what can safely be given?",
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
          "stem": "In which text can you find information about the damage the treatment itself can cause?",
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
            "being immobile"
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
            "swollen"
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
          "variants": []
        },
        {
          "id": "q16",
          "kind": "gap",
          "stem": "Stockings are ______________ for each patient before they are fitted.",
          "answer": "measured",
          "variants": []
        },
        {
          "id": "q17",
          "kind": "gap",
          "stem": "Chest pain from a clot in the lung is worse on ______________.",
          "answer": "breathing in",
          "variants": [
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
    "slug": "rea-a-high-risk-medicines",
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
          "body": "A small group of medicines causes most of the serious harm from medication. They are not unusual drugs; they are given every day on every ward.\n\nInsulin, the anticoagulants, the strong opioids, concentrated potassium and methotrexate appear on every list of this kind, in every country that has looked. What they share is a narrow margin: the dose that treats and the dose that harms are close together, and the harm is severe.\n\nThe list is short on purpose. A ward cannot treat five hundred medicines as though each could kill; pretending otherwise spreads attention so thinly that nothing is watched properly. Naming a small group is what makes the extra checks real.\n\nErrors with these medicines are rarely the work of a careless person. They follow from a name that resembles another, a chart copied at speed, an abbreviation read as written rather than as meant, and a ward where interruption is normal.\n\nFamiliarity is what makes these medicines dangerous. They are handled every day by people competent with them, and the error, when it comes, is almost never made by somebody who did not know what they were doing."
        },
        {
          "id": "B",
          "heading": "Before it is given",
          "body": "Check the patient, the medicine, the dose, the route and the time, and check them against the chart, not against what somebody has told you.\n\nWrite \"units\" in full. The letter U beside a number is read as a nought by somebody who did not write it, and ten becomes a hundred in one character.\n\nA high-risk medicine needs an independent double check. Independent means the second person works from the chart and reaches their own answer. If they were shown the syringe and asked whether it looked right, the check did not happen.\n\nNone of this is about distrusting the person who prescribed. It is that a number written by one tired person at midnight is read by another at six, and neither can see what the other meant.\n\nMethotrexate is taken weekly, not daily. The day of the week belongs on the label and the patient should be able to say which day it is.\n\nSay the check out loud with the second person rather than nodding along beside them. A silent second check is one person's work counted twice, and it has been the finding of more reviews than any other single practice."
        },
        {
          "id": "C",
          "heading": "Storage and preparation",
          "body": "Concentrated potassium is not kept on general wards. Where it is stocked at all it is separated, marked and counted, because a concentrated solution given quickly stops the heart.\n\nMedicines whose names or packaging resemble one another are stored apart, not side by side. A notice asking staff to take more care works until the week it matters; moving one of the boxes works every week.\n\nThe same reasoning applies to strengths of the same drug kept in one drawer. Two boxes differing only in a number will be confused, however experienced the hand reaching for them.\n\nLabel a syringe the moment it is drawn up, and never accept an unlabelled one from another person. A clear liquid in a plastic barrel carries no information about what it is.\n\nKeep the preparation area clear of everything that does not belong to the task in hand. Most errors that reach a patient begin with two things standing next to each other that should never have shared a surface."
        },
        {
          "id": "D",
          "heading": "When something goes wrong",
          "body": "Tell the patient. An error that reached them is theirs to know about, and a service that hides small errors will not hear about the large ones.\n\nReport it, promptly and in full, including the errors that harmed nobody. Those are the cheapest information a hospital gets, because the same hole waits for somebody else.\n\nThe staff member involved is sometimes called the second victim, and the phrase is not sentimental. People leave the profession over an error that a better system would have caught.\n\nAsking who did it produces one careful person and a ward that has learned to say nothing. Asking how it happened produces a change that protects everybody, including those who have not made the mistake yet.\n\nFix the system, not the person. Ask what made this possible at three in the morning on a short-staffed ward, and change that.\n\nTell the patient what happened, in plain words and on the same day. A person who learns later, from a letter or somebody else, loses trust in everything else that was done for them, including the parts that went right."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about why a notice asking for more care is not enough?",
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
          "stem": "In which text can you find information about what independence means in a second check?",
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
          "stem": "In which text can you find information about the value of reporting errors that harmed nobody?",
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
          "stem": "In which text can you find information about what these medicines have in common?",
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
          "stem": "In which text can you find information about the effect of giving a concentrated solution quickly?",
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
          "stem": "In which text can you find information about the conditions that produce errors rather than carelessness?",
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
          "stem": "In which text can you find information about what a patient should be able to say about a weekly medicine?",
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
            "label the syringe"
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
    "slug": "rea-a-wound-infection-and-antibiotics",
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
          "body": "A wound healing normally is warm, a little red at its edges and mildly uncomfortable in the first days. Those three findings alone are not an infection, and treating them as one is how many unnecessary courses of antibiotics begin.\n\nWhat distinguishes infection is the direction of travel. Redness spreading outwards beyond the wound margin, pain increasing rather than settling, discharge that has become thick and coloured, a smell that was not there before, and a wound that has stopped closing when it had begun to — these are the changes that matter, and each is a comparison with yesterday rather than a single observation today.\n\nNone of that requires a laboratory. It requires somebody who saw the same wound the day before, or a note good enough to stand for one.\n\nSystemic signs carry more weight than any local one. A patient who becomes feverish, confused or unlike themselves has told you more than the wound has, and in an older patient that change may be the only thing you get.\n\nAsk the patient whether the wound feels different rather than only looking at it. Increasing pain in a wound that was settling is one of the earliest signs there is, and appears before anything is visible to somebody standing over it."
        },
        {
          "id": "B",
          "heading": "Taking a swab",
          "body": "Do not swab a wound routinely. Every wound open for more than a few hours carries bacteria, and a swab from a wound that is not infected produces a result somebody will feel obliged to treat.\n\nSwab only where the wound is clinically infected on the findings above.\n\nCleanse the wound first. A swab rolled across surface debris reports the debris. Take the sample from the deepest viable tissue you can reach, with enough pressure to express fluid rather than skim it.\n\nA result that arrives without any of this is worse than no result. It names an organism, somebody reads the name, and a decision gets made about a wound nobody has looked at since.\n\nWrite on the form which antibiotic has already been started, and at what time. A laboratory that does not know this cannot tell you why nothing grew.\n\nSend the sample with the story attached. A laboratory told how long the wound has been there and what has already been given can interpret what grows; one receiving a bare tube can only report what it found."
        },
        {
          "id": "C",
          "heading": "Prescribing and reviewing",
          "body": "Record the indication on the chart beside the drug, the dose and the route. An antibiotic with no written reason is one nobody can safely stop: nobody afterwards knows what it was for.\n\nSet a review date or a stop date at the moment of prescribing, not later.\n\nReview every antibiotic at 48 to 72 hours, when the cultures and the patient's response are both available. The decision at that point is to stop, to narrow, to continue, or to change the route — and \"continue\" is a decision that must be made rather than a thing that happens by default.\n\nNarrowing is the step most often skipped. A broad agent started before anything was known should not survive a result that tells you what you are treating.\n\nSwitch from the drip to tablets once the patient is stable and absorbing. A cannula that stays in because nobody revisited the route is itself a source of infection.\n\nWrite the stop date on the chart at the moment the drug is started. A date decided at the beginning is kept far more often than one somebody is expected to decide later, when they will be busy and will not know why it began."
        },
        {
          "id": "D",
          "heading": "Why the short course matters",
          "body": "Every course changes the bacteria a patient carries, and the change outlasts the illness. The organisms that survive are those the next course must defeat.\n\nDisturbed gut flora allows Clostridioides difficile to flourish, and that infection is often more dangerous than the one the antibiotic was given for.\n\nThe aim is the shortest effective course, decided in advance rather than extended out of caution. A day added because a patient still looks tired is a day given to every organism that survived the first seven.\n\nTell the patient to take the course exactly as prescribed, and not to stop when they feel better or keep what is left for next time. Leftover antibiotics are taken later, by the wrong person, for the wrong thing, in the wrong amount.\n\nTell the patient why the course is short, or they will assume it was cut off to save money. A person who believes they were undertreated keeps the remaining tablets, exactly the behaviour the short course exists to prevent."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the reason a laboratory needs to know about treatment already given?",
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
          "stem": "In which text can you find information about what \"continue\" must be rather than be allowed to happen?",
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
          "stem": "In which text can you find information about the finding that carries more weight than any local sign?",
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
          "stem": "In which text can you find information about what happens to the bacteria a patient carries?",
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
          "stem": "In which text can you find information about why a routine swab causes a problem?",
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
          "stem": "In which text can you find information about the risk created by a cannula nobody revisited?",
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
          "stem": "In which text can you find information about why the changes must be compared with yesterday?",
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
            "only when infected"
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
          "variants": []
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
    "slug": "rea-a-oxygen-therapy",
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
          "body": "Oxygen is prescribed, and what is prescribed is a target range of saturation, not a flow rate. The staff member at the bedside then chooses the device and flow that keep the patient inside that range.\n\nFor most patients the target is 94 to 98 per cent. For a patient at risk of retaining carbon dioxide — long-standing lung disease, severe chest wall deformity, some neuromuscular conditions — the target is 88 to 92 per cent, and it is written on the chart before there is an emergency, not during one.\n\nThe reason for the lower target is that in these patients high concentrations of oxygen worsen the retention of carbon dioxide, and the patient grows drowsy while the monitor looks excellent.\n\nWriting the range rather than the flow also settles an argument before it starts. Two people who disagree about how much a patient needs can both be right about the number in front of them and still be treating different things; a range on the chart gives them the same question to answer.\n\nMore is not better. Above the target range there is no benefit to be had, only harm.\n\nTreat the prescription as you would any other. An entry saying only that oxygen was given, with no target and no signature, would not be accepted for any tablet on the same chart, and there is no reason it should be accepted here."
        },
        {
          "id": "B",
          "heading": "Choosing the device",
          "body": "Nasal cannulae are comfortable, allow eating and speech, and run at one to four litres a minute. The concentration they deliver varies with how the patient is breathing.\n\nA simple face mask runs at five to ten litres a minute and must never be run below five, because below that the patient rebreathes their own exhaled carbon dioxide from inside the mask.\n\nA Venturi mask draws in a fixed proportion of room air and delivers a set percentage whatever the patient's breathing does. That predictability is why it is chosen where the target is the lower one.\n\nComfort is not a small consideration either. A mask that a breathless patient keeps pulling off delivers nothing, and the device that stays on the face is often worth more than the one that looks better on paper.\n\nA reservoir mask at fifteen litres a minute is for emergencies, while somebody works out what is wrong.\n\nCheck what the patient is actually wearing, not what is written down. Devices are swapped during the night, at handover and on the way back from a scan, and the chart very often describes the one chosen rather than the one in place."
        },
        {
          "id": "C",
          "heading": "Watching the patient, not the number",
          "body": "A pulse oximeter needs a warm, well-perfused finger. Cold hands, poor circulation, shivering and dark nail varnish all produce readings that are wrong rather than absent — the dangerous kind.\n\nThe oximeter reports oxygen and nothing else. It says nothing about carbon dioxide, and a patient can be retaining a great deal while the display reads ninety-six.\n\nA patient who becomes drowsy on oxygen needs a blood gas, not more oxygen. That drowsiness is the one presentation where the instinct to turn the flow up is exactly wrong.\n\nLook at the patient before the monitor. Somebody working hard to breathe is telling you something the display is not, and somebody peaceful with an alarming number usually has a probe that has slipped.\n\nRecord the reading, the device and the flow together. A saturation written without the oxygen beside it means nothing a week later.\n\nA rising oxygen requirement matters more than any single reading. A patient sitting forward and answering in single words, who needed two litres yesterday and six today, has deteriorated whatever the saturation says, and that is a reason to escalate before the number ever falls."
        },
        {
          "id": "D",
          "heading": "Coming off it",
          "body": "Wean by reducing the flow while keeping the patient inside the target range, and record each reduction so the next person knows the direction of travel.\n\nA patient stable in the target range on air does not need the cannulae left in place \"just in case\". Equipment that stays because nobody removed it is how a short admission becomes a long one.\n\nOxygen is never left running by a naked flame, and no oil or grease goes near valves or fittings.\n\nHome oxygen requires a formal assessment, not a cylinder left over from the ward. The assessment establishes whether the patient benefits at all, and a great many do not.\n\nWrite down who decided to reduce it and what happened afterwards. Coming off oxygen is a treatment decision like any other, and the one most often made quietly by whoever was passing at the time."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the device chosen for its predictability?",
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
          "stem": "In which text can you find information about the readings that are wrong rather than absent?",
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
          "stem": "In which text can you find information about when the target range is written down?",
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
          "stem": "In which text can you find information about what a saturation means without the oxygen recorded beside it?",
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
          "stem": "In which text can you find information about why equipment is not left in place \"just in case\"?",
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
          "stem": "In which text can you find information about what happens above the target range?",
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
          "stem": "In which text can you find information about what a patient rebreathes from inside a mask?",
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
            "turning down"
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
    "slug": "rea-a-acute-kidney-injury",
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
          "body": "Acute kidney injury is a sudden fall in kidney function, not a disease in itself. It is defined by a rise in serum creatinine of 26 micromol/L or more within 48 hours, a rise to one and a half times the baseline within seven days, or a urine output below 0.5 mL/kg/hour for more than six hours.\n\nThe commonest cause on a general ward is dehydration. A patient who has been vomiting, one kept nil by mouth for a procedure that was then delayed, and one given a diuretic in hot weather arrive at the same place by three different roads.\n\nMost cases are found on a blood result rather than at the bedside, which is exactly why the fluid chart matters. A patient whose urine output is falling has told you something before the laboratory does.\n\nThe rise is missed more often than it should be: a creatinine can double while still inside the laboratory's printed normal range. A young muscular patient and a frail thin one do not start from the same place, and the number that decides anything is the change from that patient's own baseline."
        },
        {
          "id": "B",
          "heading": "The first response",
          "body": "Stop the drugs that make it worse. The list is short enough to remember: nonsteroidal anti-inflammatory drugs, angiotensin-converting enzyme inhibitors, angiotensin receptor blockers and diuretics. Metformin does not damage the kidney, but it accumulates when the kidney fails, so it is held as well.\n\nAssess the fluid state before giving fluid. A patient who is dry needs a fluid challenge; a patient who is overloaded will drown in one. Look at the jugular venous pressure, the lung bases and the weight chart, not the creatinine alone.\n\nExclude obstruction. A bladder scan takes two minutes, and a blocked catheter is the easiest cause there is to fix.\n\nSend a urine dipstick. Blood and protein together, in a patient who is not catheterised, point away from dehydration and towards the kidney itself. That patient needs a specialist opinion the same day.\n\nWrite down what you found and not only what you did. An assessment made but never recorded is made again by the next person, and a patient who has already been given a litre can be given a second by somebody acting entirely in good faith."
        },
        {
          "id": "C",
          "heading": "Monitoring",
          "body": "Once acute kidney injury is recognised, the observations change. Record fluid in and fluid out on the same chart and total it every twelve hours; two charts kept by two people prove nothing.\n\nWeigh the patient daily, at the same time, on the same scales. A kilogram is a litre, and the weight chart will show a change before the creatinine does.\n\nRepeat the creatinine and the potassium at least daily. Potassium is the number that kills first: above 6.5 mmol/L it is an emergency whatever the patient looks like, and an electrocardiogram is part of that assessment, not an optional extra.\n\nAgree who totals the chart and write that person's name on it. A column everyone assumes somebody else has added up is a column nobody adds up at all.\n\nAsk for the potassium to be telephoned through rather than left to appear on a screen. A result arriving at nine in the evening and first read at seven the next morning has spent the whole night doing nothing for the patient it belongs to.\n\nAsk for renal replacement therapy when the potassium, the acidosis, the fluid overload or the uraemia cannot be controlled by any other means."
        },
        {
          "id": "D",
          "heading": "Preventing the next one",
          "body": "An episode of acute kidney injury is not a closed event. A patient who has had one is at higher risk of another, and at higher risk of chronic kidney disease years later.\n\nGive every patient sick day rules in writing before they go home: which medicines to stop during vomiting, diarrhoea or fever, and when to start them again. Advice given aloud on a ward round is forgotten by the car park.\n\nRestart held medicines deliberately, with a named person and a date, and write both in the discharge letter. Medicines held and never restarted are a recognised harm.\n\nArrange a repeat blood test in the community. A creatinine that has not returned to baseline by three months is chronic kidney disease, and needs a different plan.\n\nSay plainly to the patient, in words they can repeat at home, that a kidney which has recovered is not the same as one never injured at all.\n\nUse the name of the condition with them, and write that name in the letter as well. A patient never told what happened cannot mention it to the next clinician, and that clinician will prescribe as though the episode had never taken place.\n\n---"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the drugs that should be held immediately?",
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
          "stem": "In which text can you find information about the numbers that define the condition?",
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
          "stem": "In which text can you find information about how often the patient should be weighed?",
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
          "stem": "In which text can you find information about what should be written in the discharge letter?",
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
          "stem": "In which text can you find information about the commonest cause seen on a general ward?",
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
          "stem": "In which text can you find information about the scan that rules out a blocked bladder?",
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
          "stem": "In which text can you find information about the potassium level that is an emergency?",
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
    "slug": "rea-a-blood-transfusion-safety",
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
          "body": "A transfusion begins with a decision, not with a bag. Record why the patient needs blood, what the alternative was, and what the patient was told. Consent is a conversation, and belongs in the notes.\n\nThe sample for grouping is taken and labelled at the bedside, by the same person, in one unbroken action. Labels written in advance, or at the desk, are the two commonest routes to giving the wrong blood to the wrong patient.\n\nAsk the patient to state their full name and date of birth. Do not read the details out and wait to be agreed with; a frightened or drowsy patient will agree with almost anything.\n\nThe request form and the sample must carry the same details, written by the same hand at the same moment. A form completed by one person for a sample taken by another breaks the only link the laboratory has.\n\nTwo samples taken at different times are required before a first transfusion, so one mislabelled tube cannot decide a blood group on its own.\n\nAsk the question open and let the patient answer. Agreement with a name read out is not identification. Where the patient cannot answer at all, say so on the form rather than leaving the space to be read later as a check that was made."
        },
        {
          "id": "B",
          "heading": "Checking the unit",
          "body": "The final check happens at the bedside, with the patient, immediately before the transfusion starts. It cannot be done at the desk and it cannot be done in advance.\n\nCheck the identity band against the compatibility label on the bag: family name, first name, date of birth and the identification number. Check the donation number and the blood group on the bag against the label. Check the expiry date. Then look at the bag itself, for leaks, clumps or an unusual colour.\n\nOne trained person may perform this check alone, but may not be interrupted while doing it.\n\nIf anything at all does not match, stop, and return the unit to the laboratory. Do not correct a label.\n\nBlood given to the wrong patient is almost never a laboratory error. It is a bedside error, and this check is the last place it can still be caught.\n\nThat is the whole reason the check may not be interrupted. A person halfway through it who is called away comes back believing they finished, and nothing on the bag or the band shows where they stopped. If you are interrupted, begin the check again from the start."
        },
        {
          "id": "C",
          "heading": "During the transfusion",
          "body": "Take a full set of observations before the unit is started, again at fifteen minutes, and again when it is finished. The fifteen-minute set matters most: severe reactions declare themselves early, and a patient who deteriorates usually does so inside that window.\n\nWrite the donation number on the observation chart as the unit is started, so a reaction can later be traced to the exact bag.\n\nTell the patient what to report, in their own words and before the unit runs. Shivering, itching, a pain in the back, or simply a feeling that something is wrong are all reasons to call somebody, and a patient told this will call far sooner than one waiting to be asked.\n\nKeep the patient where they can be seen. A transfusion running in a side room with the door closed is a transfusion nobody is watching.\n\nOne unit must be completed within four hours of leaving the controlled fridge. Blood that has been out longer than that is returned, not hurried.\n\nStop at the first sign of fever, rigors, breathlessness, low blood pressure, pain in the loin or the chest, or a rash — and keep the giving set."
        },
        {
          "id": "D",
          "heading": "When something goes wrong",
          "body": "Stop the transfusion, keep the intravenous line open with sodium chloride, and re-check the identity of the patient against the unit. Most severe reactions turn out to be a failure of identification somewhere earlier in the chain.\n\nTell the laboratory at once, and send back the unit, the giving set and fresh samples. The laboratory cannot investigate what it does not receive.\n\nRecord what happened and report it through the national haemovigilance scheme. Reporting is not an admission of blame; it is how the next patient is protected.\n\nA fever of one degree with no other feature may allow the transfusion to continue more slowly, but that decision belongs to a doctor who has seen the patient, not to the person who started the unit.\n\nWrite the account of what happened while it is still fresh, and record the times as clocks showed them, not as remembered afterwards. An investigation beginning a week later depends entirely on what was written on the day, and a gap in the timing is the one thing nobody can fill in later.\n\n---"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about what to do when a label does not match?",
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
          "stem": "In which text can you find information about how many samples are needed before a first transfusion?",
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
          "stem": "In which text can you find information about when the observations must be repeated?",
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
          "stem": "In which text can you find information about who must be told first when a reaction occurs?",
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
          "stem": "In which text can you find information about where the grouping sample must be labelled?",
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
          "stem": "In which text can you find information about what to look for on the bag itself?",
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
          "stem": "In which text can you find information about the time limit for completing one unit?",
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
    "slug": "rea-a-chest-pain-and-acute-coronary-syndrome",
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
          "body": "Chest pain that may be cardiac is a time-critical presentation. Record an electrocardiogram within ten minutes of the patient's arrival, and have somebody competent read it straight away. A tracing lying in a tray is not a test.\n\nGive aspirin 300 mg to chew, unless the patient has already taken it or is allergic to it. Chewing matters: it is absorbed faster that way than as a tablet swallowed whole.\n\nAsk when the pain began. The clock that governs treatment starts at the onset of pain, not when the patient reached the department, and a delay at home counts as much as a delay on the ward.\n\nPain spreading to the jaw or the left arm, with sweating and nausea, is the classic picture. Older patients, women, and patients with diabetes are more likely to present without it, and they are most often sent home.\n\nBreathlessness alone, sudden exhaustion, or a vague sickness with no pain can be the whole presentation in those groups. Ask what the person was doing when it began and whether it has happened before in a smaller way: a story of the same feeling on the stairs last week carries more weight than any description of the pain itself."
        },
        {
          "id": "B",
          "heading": "Reading the tracing",
          "body": "ST elevation in two leads looking at the same territory, or a new left bundle branch block, is treated as a blocked artery until proved otherwise. That patient needs the catheter laboratory, not a ward bed.\n\nWhere there is no ST elevation, the diagnosis rests on the troponin. A single normal troponin taken early excludes nothing; it is the second sample, taken after the interval the local laboratory specifies, that excludes it.\n\nA completely normal tracing does not exclude a heart attack either. Between a quarter and a third of tracings are normal at first presentation, and the tracing is repeated whenever the pain continues or changes.\n\nCompare with an old tracing wherever one exists. A change is worth far more than a snapshot, and the old tracing is usually in the notes of somebody who has thought about this patient before.\n\nWrite the time on every tracing as it is taken, and keep them in order. A series of three that cannot be put in sequence is worth less than one that can, and the question asked of them is almost always what changed between them rather than what any one shows."
        },
        {
          "id": "C",
          "heading": "Oxygen, opiates, and what not to give",
          "body": "Oxygen is given only when the saturation is below 94 per cent. Given routinely to a patient who is not hypoxic it does not help, and it may do harm.\n\nMorphine relieves pain and reduces the work of the heart, but it slows the absorption of the antiplatelet drugs given alongside it, so it is kept for pain that has not settled with a nitrate.\n\nDo not give a nitrate to a patient who has taken a drug for erectile dysfunction within the previous twenty-four hours, and allow longer for the longer-acting drugs of that group. The fall in blood pressure can be profound, and the patient will often not volunteer this unless asked directly and in private.\n\nReassurance is part of the treatment, not a substitute for it. A frightened patient has a faster heart rate and a heart working harder, and both make the injury worse.\n\nSay what is being done and why, in short sentences, and say it again after each thing that happens. A person in this position remembers little of what is said once, and the silence between one procedure and the next fills with whatever they imagine.\n\nDo not give an intramuscular injection of anything at all. It raises the enzymes used to interpret the blood tests and makes clot-busting treatment more dangerous."
        },
        {
          "id": "D",
          "heading": "After the immediate phase",
          "body": "Every patient leaves with a plan they can say out loud: which medicines, what each one is for, and exactly what to do if the pain comes back. A plan the patient cannot repeat is a plan that stayed in the hospital.\n\nCardiac rehabilitation reduces death and readmission more reliably than most drugs, and remains the part of the plan most often left out of the discharge letter.\n\nAsk about mood before discharge. Low mood after a heart attack is common, and it is the strongest single predictor of whether the patient takes the medicines at all.\n\nSmoking is the modifiable factor with the largest and fastest effect. A brief, specific offer of help at the bedside works better than general advice on the day of discharge.\n\nName the person who will follow this up and the week it will happen. A plan that belongs to nobody in particular belongs to the patient alone, and they have just had the worst week of their year.\n\n---"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about the time limit for recording the tracing?",
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
          "stem": "In which text can you find information about the drug that must not follow a treatment for erectile dysfunction?",
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
          "stem": "In which text can you find information about what makes a second blood sample necessary?",
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
          "stem": "In which text can you find information about what is most often missing from the discharge letter?",
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
          "stem": "In which text can you find information about how the first tablet should be taken?",
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
          "stem": "In which text can you find information about why an old tracing is useful?",
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
          "stem": "In which text can you find information about why injections into muscle are avoided?",
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
    "slug": "rea-a-an-asthma-attack-in-adults",
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
          "body": "Assess the severity before treating, and write the numbers down. A patient who cannot complete a sentence in one breath, whose peak flow is between 33 and 50 per cent of best or predicted, whose respiratory rate is 25 or more, or whose heart rate is 110 or more, is having an acute severe attack.\n\nThe life-threatening features differ in kind, not merely in degree: a silent chest, exhaustion, confusion, a saturation below 92 per cent, or a peak flow below 33 per cent. A normal carbon dioxide level in a patient this unwell is not reassuring. It means the patient is tiring.\n\nAsk about the last attack, courses of steroid in the past year, and any admission to intensive care. A previous near-fatal attack is the strongest single predictor of another.\n\nDo not judge the severity by how calm the patient appears. Some of the sickest are quiet because they no longer have breath to be anything else.\n\nWatch how the patient is sitting and what their hands are doing. A person leaning forward with arms braced against the bed is working to breathe, whatever the numbers say, and a person who has stopped answering to save the breath has told you more than any single reading will."
        },
        {
          "id": "B",
          "heading": "Treatment",
          "body": "Give oxygen to hold the saturation between 94 and 98 per cent, and do not wait for a blood gas before giving it.\n\nSalbutamol is given through an oxygen-driven nebuliser in an acute severe or life-threatening attack. A spacer is enough for milder attacks and, used properly, works just as well.\n\nGive prednisolone by mouth, or hydrocortisone if the patient cannot swallow, and give it early. Steroid given in the first hour changes the outcome; steroid given at the end of the shift changes the paperwork.\n\nAdd ipratropium in a severe or life-threatening attack, or where the response to salbutamol has been poor.\n\nMagnesium sulfate is given as a single intravenous dose, and is a decision for a senior doctor.\n\nWrite on the chart the time each treatment was actually given, not when it was prescribed. The gap between those times is where most of the delay in an attack hides.\n\nAntibiotics are not given routinely. Most attacks are triggered by a virus, and a wheeze on its own is not evidence of infection.\n\nGive the treatments in the order above rather than waiting to see how one works before starting the next. An attack treated in sequence over an hour has been given an hour in which to worsen, and the treatments do not compete."
        },
        {
          "id": "C",
          "heading": "Watching the response",
          "body": "Repeat the peak flow fifteen to thirty minutes after treatment begins, and again before any decision to discharge. The measurement is only as good as the effort behind it, so watch it being done.\n\nMonitor saturation continuously while nebulisers run, and record the heart rate. Salbutamol raises it, and a rising rate is not on its own a reason to stop.\n\nCheck the potassium. Repeated salbutamol drives it down, and low potassium in a tiring patient is a dangerous combination.\n\nA patient who has improved is not yet a patient who is well. Deterioration after apparent improvement is common in the hours that follow, and is why the observation period is not negotiable.\n\nRecord the readings on one chart in one place, so the shape of the last few hours can be seen at a glance. Three numbers written in three different notes describe an improving patient and a tiring patient equally well, and the difference between them is the whole assessment."
        },
        {
          "id": "D",
          "heading": "Before they go home",
          "body": "Nobody is discharged on a peak flow below 75 per cent of best or predicted, or while the reading still swings widely between morning and evening.\n\nEvery patient goes home on a course of steroid tablets, with a written action plan, and with inhaler technique checked in front of somebody. Technique is checked, never asked about: most patients say theirs is fine, and most are wrong.\n\nArrange review by the general practitioner within two working days, and a specialist clinic within four weeks of an admission.\n\nGive the plan to somebody who lives with the patient too. A person breathless and frightened at three in the morning is not best placed to read it for the first time.\n\nWrite on the plan what counts as bad enough to call for help, in numbers and in plain words. A patient told to come back if they feel worse will judge that against the worst night they remember.\n\nAsk what the patient believes caused this attack. The answer often names the missed preventer, the new cat, or the month the prescription quietly ran out.\n\n---"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about which steroid is swallowed and which is not?",
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
          "stem": "In which text can you find information about the features that make an attack life-threatening?",
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
          "stem": "In which text can you find information about how soon the peak flow is repeated?",
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
          "stem": "In which text can you find information about how soon the family doctor should see the patient?",
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
          "stem": "In which text can you find information about the strongest predictor of a further attack?",
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
          "stem": "In which text can you find information about when magnesium is considered?",
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
          "stem": "In which text can you find information about the blood result that falls with repeated treatment?",
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
    "slug": "rea-a-venepuncture-and-handling-the-sample",
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
          "stem": "In which text can you find information about what must be written on the tube?",
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
          "stem": "In which text can you find information about how long the tourniquet may stay on?",
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
          "stem": "In which text can you find information about which arms should be avoided?",
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
          "stem": "In which text can you find information about how the needle should be disposed of?",
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
          "stem": "In which text can you find information about what to ask a patient who has fainted before?",
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
          "stem": "In which text can you find information about why the tubes are filled in a set order?",
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
          "stem": "In which text can you find information about which sample must not be refrigerated?",
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
    "slug": "rea-a-sharps-injury-and-exposure-to-blood",
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
          "body": "Stop what you are doing. Encourage the wound to bleed gently under running water, but do not scrub it and do not suck it. Wash it with soap and water, and then cover it.\n\nA splash to the eye or the mouth is washed out with plenty of water. Contact lenses are taken out and washed separately, and the eye irrigated again once they are out.\n\nReport the injury at once to the person in charge, however small it looks and however busy the ward is. The clock that matters starts now: preventive treatment against HIV works best within a few hours, and its value falls with every hour that passes.\n\nDo not decide for yourself that the source patient is low risk. That judgement belongs to the occupational health service, which holds information about the source that you do not have and should not have.\n\nThe commonest reason an injury is never reported is that the person judged it too small to matter while still standing at the bedside. That judgement is made in the worst possible minute, by the person least able to make it, and is why the rule says report first and assess afterwards."
        },
        {
          "id": "B",
          "heading": "The risk assessment",
          "body": "The assessment weighs three things: the device, the injury, and the source. A hollow needle that has been sitting in a vein carries far more risk than a solid suture needle, and a deep injury more than a scratch.\n\nBlood carries the highest risk. Saliva, urine, vomit and faeces carry none at all unless they are visibly bloodstained.\n\nThe three viruses considered are hepatitis B, hepatitis C and HIV. They are considered together because one injury exposes a person to all three at once, and because the actions taken about each are different and cannot wait for one another.\n\nConsent for testing is asked of the source patient by somebody who is not the injured member of staff. A patient may refuse, and a refusal is not evidence of infection.\n\nThe injured person's own hepatitis B status is checked at the same time. A booster is often all that is needed, and the record of the last one is usually the piece nobody can find.\n\nAsk how the injury actually happened, and write the answer as given. The device, the depth and the moment are what the assessment turns on, and a description written a day later is shaped by what the person has since decided about how careless they were."
        },
        {
          "id": "C",
          "heading": "What may be offered",
          "body": "Preventive treatment against HIV is a course of tablets, begun as soon as possible and continued for four weeks. It causes nausea in many who take it, and courses are stopped early because of the side effects far more often than because the risk has been revised.\n\nThere is no vaccine and no preventive treatment for hepatitis C. Instead the person is tested at intervals, and treatment now cures the great majority of those found infected.\n\nFor hepatitis B a vaccine exists, and immunoglobulin may be added for somebody who is not immune. Somebody who was vaccinated years ago and has never had the response measured counts as unknown rather than immune, and unknown is treated as not immune until the laboratory says otherwise.\n\nFollow-up blood tests are arranged over the months that follow, and are the part most often missed once the fright has worn off.\n\nGive the dates in writing before the person leaves, and give them to somebody who will still be in that post in six months. An appointment held only in the memory of a member of staff about to rotate is an appointment that will not happen."
        },
        {
          "id": "D",
          "heading": "Preventing the next one",
          "body": "Most injuries happen at two moments: while a needle is being resheathed, and while an already overfull container is being used. Neither of those is bad luck.\n\nFill a container to the line and no further, close it when it reaches the line, and label it with the ward and the date.\n\nTake the container to the patient rather than carrying an unprotected needle across a room. The distance between the bedside and the container is where many injuries are waiting.\n\nUse a safety device wherever one is provided, and activate it before the needle is put down. A guard that was never engaged protects nobody.\n\nReport every injury, even where no treatment follows. The pattern of injuries on a ward is the only evidence anybody has for changing the way that ward works.\n\nA ward that reports twenty and a ward that reports two are rarely different in what happens on them. They differ in what gets written down, and the quieter of the two is where nothing will ever be bought, moved or redesigned.\n\n---"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": "match",
          "stem": "In which text can you find information about how a container should be filled?",
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
          "stem": "In which text can you find information about what to do with contact lenses?",
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
          "stem": "In which text can you find information about which fluids carry no risk unless bloodstained?",
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
          "stem": "In which text can you find information about how long the course of tablets lasts?",
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
          "stem": "In which text can you find information about who decides whether the source is low risk?",
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
          "stem": "In which text can you find information about who asks the source patient for consent?",
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
          "stem": "In which text can you find information about which infection has no vaccine?",
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
          "variants": [
            "hep B"
          ]
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
