import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Wound dressing selection",
    prompt:
      "Skim the four short texts on wound dressing selection. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "FOUNDATION",
    topicTag: "wound-care",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Hydrocolloid dressings",
          body: "Hydrocolloid dressings form a gel as they absorb exudate and suit lightly to moderately exuding wounds. They support autolytic debridement of sloughy tissue and can stay in place for up to seven days.",
        },
        {
          id: "B",
          heading: "Alginate dressings",
          body: "Alginate dressings are derived from seaweed and handle heavy exudate well. They are not suitable for dry wounds, where they may adhere and cause trauma on removal.",
        },
        {
          id: "C",
          heading: "Film dressings",
          body: "Transparent film dressings are waterproof and allow the wound to be inspected without removal. They are intended for superficial wounds with minimal exudate only.",
        },
        {
          id: "D",
          heading: "Foam dressings",
          body: "Foam dressings provide cushioning over bony prominences and manage moderate to heavy exudate. The wound bed should be reassessed at each dressing change.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text describes a dressing that allows inspection without removal?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text mentions a dressing made from seaweed?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "B",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text describes a dressing that provides cushioning over bony prominences?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "A hydrocolloid dressing supports ______ debridement of sloughy tissue.",
          answer: "autolytic",
        },
      ],
    },
    guidanceNote:
      "Match each dressing to its exudate level first — that single clue resolves most Part A wound questions quickly.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Falls risk assessment",
    prompt:
      "Skim the four short texts on falls risk assessment. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "CORE",
    topicTag: "falls-prevention",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Screening on admission",
          body: "Every patient should be screened for falls risk within six hours of admission. The screen records history of previous falls, mobility status and current medicines.",
        },
        {
          id: "B",
          heading: "Environmental measures",
          body: "Ensure the call bell is within reach, the bed is at its lowest setting and the floor is free of clutter. Adequate lighting at night reduces disorientation.",
        },
        {
          id: "C",
          heading: "Medication review",
          body: "Sedatives, antihypertensives and diuretics all increase falls risk. A pharmacist review is advised for any patient taking four or more regular medicines.",
        },
        {
          id: "D",
          heading: "Post-fall protocol",
          body: "After a fall, do not move the patient until neurological observations and a check for injury are complete. Document the event and notify the medical team.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text advises a pharmacist review for patients on multiple medicines?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text states when an initial falls screen should be completed?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "A",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text explains what to do immediately after a patient has fallen?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "Every patient should be screened for falls risk within ______ of admission.",
          answer: "six hours",
        },
      ],
    },
    guidanceNote:
      "Numbers and time limits in the text are common gap answers — underline them as you skim.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Aseptic non-touch technique",
    prompt:
      "Skim the four short texts on aseptic non-touch technique. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "CORE",
    topicTag: "hand-hygiene",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Key principle",
          body: "Aseptic non-touch technique protects key parts and key sites from contamination. The central rule is that key parts must not be touched directly.",
        },
        {
          id: "B",
          heading: "Hand preparation",
          body: "Decontaminate hands with alcohol gel or soap and water before assembling equipment. Repeat hand hygiene immediately before contact with the key site.",
        },
        {
          id: "C",
          heading: "Field management",
          body: "Use a clean or sterile field appropriate to the procedure. Keep the field within view and do not reach across it once it is prepared.",
        },
        {
          id: "D",
          heading: "Glove use",
          body: "Gloves complement but never replace hand hygiene. Apply non-sterile gloves for simple procedures and sterile gloves where direct handling of a key part is unavoidable.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text states that gloves do not replace hand hygiene?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text gives the central rule of the technique?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "A",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text advises against reaching across the prepared area?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "The central rule is that ______ must not be touched directly.",
          answer: "key parts",
        },
      ],
    },
    guidanceNote:
      "Gap answers must be copied exactly as written — here the text says 'key parts', not 'the key part'.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Insulin storage and handling",
    prompt:
      "Skim the four short texts on insulin storage and handling. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "FOUNDATION",
    topicTag: "medication-storage",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Unopened supplies",
          body: "Store unopened insulin vials and pens in a refrigerator between 2 and 8 degrees Celsius. Do not allow the product to freeze, as freezing destroys its activity.",
        },
        {
          id: "B",
          heading: "In-use product",
          body: "An insulin pen in current use may be kept at room temperature for up to 28 days. Keep it away from direct heat and sunlight.",
        },
        {
          id: "C",
          heading: "Inspection before use",
          body: "Check the appearance before each dose. Discard the product if it looks cloudy when it should be clear, or if particles are visible.",
        },
        {
          id: "D",
          heading: "Transport advice",
          body: "Advise patients travelling to carry insulin in hand luggage, never in the aircraft hold, where temperatures may drop below freezing.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text advises checking the product's appearance before each dose?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text gives advice for patients who are travelling?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text states the refrigerator temperature range for unopened supplies?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "A",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "An insulin pen in current use may be kept at room temperature for up to ______ days.",
          answer: "28",
        },
      ],
    },
    guidanceNote:
      "When two texts mention temperature, separate them by purpose — 'unopened' versus 'in use' — before deciding.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Oxygen cylinder safety",
    prompt:
      "Skim the four short texts on oxygen cylinder safety. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "CORE",
    topicTag: "oxygen-safety",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Fire precautions",
          body: "Oxygen supports combustion, so keep cylinders away from naked flames and sources of ignition. No smoking is permitted near any oxygen source.",
        },
        {
          id: "B",
          heading: "Secure storage",
          body: "Store cylinders upright and secured with a chain or stand to prevent them toppling. A falling cylinder can shear its valve and become a projectile.",
        },
        {
          id: "C",
          heading: "Avoiding contamination",
          body: "Never apply oil or grease to valves, regulators or fittings. Even a trace of oil in the presence of oxygen can ignite spontaneously.",
        },
        {
          id: "D",
          heading: "Checking contents",
          body: "Read the contents gauge before each use and label cylinders as full, in use or empty. Order a replacement before a cylinder is exhausted.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text warns against applying oil to fittings?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text explains why cylinders must be secured upright?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "B",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text describes labelling cylinders by their status?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "Oxygen supports ______, so cylinders must be kept away from naked flames.",
          answer: "combustion",
        },
      ],
    },
    guidanceNote:
      "Safety texts cluster around one hazard each — fire, falling, contamination, supply. Tag each text with its hazard as you read.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Urinary catheter care",
    prompt:
      "Skim the four short texts on urinary catheter care. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "STRETCH",
    topicTag: "catheter-care",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Drainage position",
          body: "Keep the drainage bag below the level of the bladder at all times to allow gravity drainage and prevent backflow of urine into the bladder.",
        },
        {
          id: "B",
          heading: "Closed system",
          body: "Maintain a closed drainage system. Break the connection only when clinically necessary, as each disconnection raises the risk of introducing infection.",
        },
        {
          id: "C",
          heading: "Daily hygiene",
          body: "Clean the meatal area daily with soap and water during routine washing. Antiseptic cleansing offers no added benefit and is not recommended.",
        },
        {
          id: "D",
          heading: "Reviewing need",
          body: "Review the ongoing need for the catheter each day. Early removal once the indication has passed is the most effective way to reduce infection.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text states that antiseptic cleansing gives no added benefit?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text identifies early removal as the most effective infection control measure?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text explains the correct position of the drainage bag?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "A",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "Keep the drainage bag below the level of the ______ to prevent backflow.",
          answer: "bladder",
        },
      ],
    },
    guidanceNote:
      "Two texts here both mention infection — distinguish by mechanism (closed system versus prompt removal) before answering.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Malnutrition screening",
    prompt:
      "Skim the four short texts on malnutrition screening. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "CORE",
    topicTag: "nutrition-screening",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Screening tool",
          body: "Use a validated screening tool that combines body mass index, recent unplanned weight loss and the effect of acute illness on intake to give an overall risk score.",
        },
        {
          id: "B",
          heading: "Timing",
          body: "Screen on admission and weekly thereafter for inpatients. Rescreen sooner if the clinical condition changes or oral intake falls.",
        },
        {
          id: "C",
          heading: "Acting on results",
          body: "A high-risk score should trigger referral to the dietitian and the start of a food and fluid chart to monitor actual intake.",
        },
        {
          id: "D",
          heading: "When weighing is impossible",
          body: "If the patient cannot be weighed, estimate body mass index from a mid-upper-arm circumference measurement and record the method used.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text describes what to do when a patient cannot be weighed?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text lists the components combined into a risk score?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "A",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text states how often inpatients should be screened?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "B",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "A high-risk score should trigger referral to the ______.",
          answer: "dietitian",
        },
      ],
    },
    guidanceNote:
      "Role titles such as 'dietitian' are precise gap answers — spell them as the text does, not as a synonym.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Discharge planning checklist",
    prompt:
      "Skim the four short texts on discharge planning. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "STRETCH",
    topicTag: "discharge-planning",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Early planning",
          body: "Begin discharge planning at the point of admission by setting an expected date of discharge. Review this date daily against the patient's progress.",
        },
        {
          id: "B",
          heading: "Medicines reconciliation",
          body: "Reconcile the discharge medicines against the admission list. Provide a written summary explaining any changes for the patient and the general practitioner.",
        },
        {
          id: "C",
          heading: "Home readiness",
          body: "Confirm that the home environment is safe and that any equipment, such as a commode or grab rail, is in place before the patient leaves.",
        },
        {
          id: "D",
          heading: "Follow-up arrangements",
          body: "Book any outpatient or community follow-up before discharge and give the patient written details of who to contact if symptoms worsen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text deals with checking equipment is in place at home?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text advises explaining medicine changes to the general practitioner?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "B",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text recommends setting a discharge date at admission?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "A",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "Begin discharge planning by setting an expected ______ of discharge.",
          answer: "date",
        },
      ],
    },
    guidanceNote:
      "Beware near-duplicate clues — 'date of discharge' and 'follow-up' both involve timing, but only one is about the discharge date itself.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Informed consent essentials",
    prompt:
      "Skim the four short texts on informed consent. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "STRETCH",
    topicTag: "consent",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Capacity",
          body: "Consent is valid only if the patient has the capacity to understand, retain and weigh the relevant information and can communicate a decision.",
        },
        {
          id: "B",
          heading: "Voluntariness",
          body: "The decision must be made freely, without pressure from staff, family or any other party. Coerced agreement is not valid consent.",
        },
        {
          id: "C",
          heading: "Information shared",
          body: "Explain the proposed procedure, its benefits, the material risks and any reasonable alternatives, including the option of no treatment.",
        },
        {
          id: "D",
          heading: "Recording consent",
          body: "Document the discussion, not just the signature. A signed form alone does not prove that valid consent was obtained.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text states that a signed form alone is not enough?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text describes what information must be shared with the patient?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text says the decision must be free of pressure?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "B",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "Consent is valid only if the patient has the ______ to understand and weigh the information.",
          answer: "capacity",
        },
      ],
    },
    guidanceNote:
      "Consent has four pillars — capacity, voluntariness, information, recording. Label each text with its pillar to match fast.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Source isolation precautions",
    prompt:
      "Skim the four short texts on source isolation. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "CORE",
    topicTag: "infection-isolation",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Room allocation",
          body: "Place the patient in a single room with the door kept closed where possible. Display the appropriate isolation sign at the entrance.",
        },
        {
          id: "B",
          heading: "Protective equipment",
          body: "Put on an apron and gloves before entering. Add a fluid-resistant mask and eye protection when there is a risk of splashing.",
        },
        {
          id: "C",
          heading: "Order of removal",
          body: "Remove protective equipment in the correct order before leaving, ending with hand hygiene. Gloves are removed first as they are the most contaminated item.",
        },
        {
          id: "D",
          heading: "Waste and linen",
          body: "Treat all waste from the room as clinical waste and place used linen in a water-soluble alginate bag before the outer laundry bag.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text explains the order for removing protective equipment?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text covers the handling of used linen?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text describes where the patient should be placed?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "A",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "When removing protective equipment, ______ are removed first as they are the most contaminated item.",
          answer: "Gloves",
        },
      ],
    },
    guidanceNote:
      "If the gap sits at the start of a sentence, match the text's capitalisation — 'Gloves' here, not 'gloves'.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Safe patient transfers",
    prompt:
      "Skim the four short texts on safe patient transfers. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "FOUNDATION",
    topicTag: "manual-handling",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Assess first",
          body: "Carry out a moving and handling assessment before any transfer, identifying the patient's weight-bearing ability and the equipment required.",
        },
        {
          id: "B",
          heading: "Use equipment",
          body: "Use a hoist or slide sheet rather than lifting manually wherever possible. Manual lifting of a full patient load is no longer acceptable practice.",
        },
        {
          id: "C",
          heading: "Posture",
          body: "Keep your back straight, bend at the knees and hold the load close to your body. Avoid twisting while supporting any weight.",
        },
        {
          id: "D",
          heading: "Communication",
          body: "Agree a clear command before moving so that everyone, including the patient, acts together. Nominate one person to lead each transfer.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text advises nominating one person to lead the transfer?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text describes correct posture when handling a load?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text says an assessment must happen before any transfer?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "A",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "Keep your back straight and hold the load close to your ______.",
          answer: "body",
        },
      ],
    },
    guidanceNote:
      "Action verbs at the start of each text (assess, use, keep, agree) signal the topic — scan those first.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Pain assessment methods",
    prompt:
      "Skim the four short texts on pain assessment methods. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "STRETCH",
    topicTag: "pain-assessment",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Numerical rating scale",
          body: "Ask the patient to rate pain from zero, meaning no pain, to ten, meaning the worst pain imaginable. Record the score with each set of observations.",
        },
        {
          id: "B",
          heading: "Faces scale",
          body: "For children and those with limited language, a row of faces from smiling to crying lets the patient point to the image that matches their pain.",
        },
        {
          id: "C",
          heading: "Behavioural observation",
          body: "When a patient cannot self-report, observe behaviour such as guarding, grimacing and restlessness. These cues suggest pain even when no score is given.",
        },
        {
          id: "D",
          heading: "Documenting character",
          body: "Record not only the intensity but also the site, the character and any factors that make the pain better or worse, as these guide treatment.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text is most useful for a patient who cannot self-report?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text describes a scale designed for young children?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "B",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text lists details to record beyond intensity?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "On the numerical rating scale, a score of ten means the worst pain ______.",
          answer: "imaginable",
        },
      ],
    },
    guidanceNote:
      "Self-report versus observation is the key split in pain tools — decide which a question needs before scanning.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Repositioning for skin protection",
    prompt:
      "Skim the four short texts on repositioning for skin protection. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "CORE",
    topicTag: "pressure-care",
    payload: {
      texts: [
        {
          id: "A",
          heading: "Repositioning frequency",
          body: "Reposition at-risk patients at least every two hours, or more often if the skin shows early signs of damage. Agree and document a personal schedule.",
        },
        {
          id: "B",
          heading: "The 30-degree tilt",
          body: "Use a 30-degree side-lying tilt rather than turning the patient fully onto the hip. This spreads pressure away from the bony point of the hip.",
        },
        {
          id: "C",
          heading: "Heel care",
          body: "Offload the heels completely by raising the lower legs on a pillow so that the heels float clear of the mattress surface.",
        },
        {
          id: "D",
          heading: "Skin inspection",
          body: "Inspect the skin at each reposition, paying attention to areas over bone. Redness that does not blanch under light pressure is an early warning sign.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Which text explains how to keep the heels off the mattress?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "C",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Which text describes a sign found on inspecting the skin?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "D",
        },
        {
          id: "q3",
          kind: "match",
          stem: "Which text recommends a side-lying tilt instead of a full turn?",
          options: [
            { id: "A", text: "A" },
            { id: "B", text: "B" },
            { id: "C", text: "C" },
            { id: "D", text: "D" },
          ],
          answer: "B",
        },
        {
          id: "q4",
          kind: "gap",
          stem: "Reposition at-risk patients at least every ______ hours.",
          answer: "two",
        },
      ],
    },
    guidanceNote:
      "Number words may be written as words, not digits — the text says 'two', so the gap answer is 'two', not '2'.",
  },
];
