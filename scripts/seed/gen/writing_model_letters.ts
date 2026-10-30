// GENERATED — DO NOT HAND-EDIT.
//
// Sources: scripts/content/b2-model-letters-2026-10-30.json sha256(first 16) = 1d8ece0ff6a8d6c5
//          scripts/content/b4-model-letters-2026-10-30.json sha256(first 16) = fc7962f3a6fb3d95
//          scripts/content/b5-model-letters-2026-10-31.json sha256(first 16) = eec9f30c8b17999b
// Built by scripts/seed/gen/_build_model_letters.mts, which checks every letter against the seed before writing
// (scripts/seed/gen/model-letters-check.ts — the same check scripts/gates/model-letters.ts runs). 150 model letter(s).
import type { ModelLetter } from "../../../src/lib/oet/tasks/writing-letter";

export const MODEL_LETTERS: Record<string, ModelLetter> = {
  "wri-nursing-referral-to-the-alcohol-liaison-service-repeated-admissions-with-withdrawal": {
    "header": [
      "Mr Callum Reith",
      "Alcohol Liaison Nurse Specialist",
      "Bellhaven Hospital",
      "21 February 2025"
    ],
    "salutation": "Dear Mr Reith,",
    "re": "Re: Mr Gary Standish, aged 47",
    "body": [
      "I am writing to request your assessment of Mr Standish, admitted on 18 February 2025 after an alcohol withdrawal seizure. Discharge is expected on the morning of 23 February 2025, and he is likely to leave then whether or not he has been seen.",
      "His seizure occurred approximately 30 hours after his last drink, with no history of epilepsy. This is his fourth attendance in nine months; twice before, he self-discharged on the second day, before your service saw him. He drinks 8 to 10 cans of strong lager daily and has twice stopped suddenly without medical support, unaware that this could cause a seizure.",
      "He received chlordiazepoxide until 20 February, and his withdrawal scores have been zero for 24 hours. He now takes thiamine 100 mg three times daily.",
      "He reports low mood and has thought about ending his life during bad weeks, but has no current plan or intention, and agreed to this being shared.",
      "He is more willing to be seen than on any previous admission. I would be grateful if you could assess him and advise on community treatment without residential admission, as he fears losing his flat, and on supported withdrawal at home if appropriate."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Acute Medical Unit"
    ],
    "bodyWords": 200,
    "commentary": {
      "opening": "The purpose and the deadline come first: the reader must know at once that the patient may leave on the morning of 23 February, because twice before he left before this service saw him.",
      "selection": "Drinking pattern, the withdrawal seizure, treatment and suicide risk are kept. Blood and scan details, dentition, skin, smoking, the daughter and the rent arrears are left out as not needed for this assessment.",
      "organisation": "Purpose, then history and pattern, then hospital treatment, then mood and risk, then the specific request.",
      "tone": "Collegial and factual between nurses, urgent without alarm."
    },
    "notesUsed": [
      "seizure about 30 hours after last drink, no epilepsy",
      "fourth attendance in nine months; self-discharged twice on day two",
      "8 to 10 cans of strong lager daily",
      "stopped twice without support, unaware of seizure risk",
      "chlordiazepoxide, last dose 20 February; scores zero 24 hours",
      "thiamine 100 mg three times daily",
      "low mood; thoughts of ending life, no plan, consented to share",
      "expected discharge 23 February; likely to leave on the morning of 23 February",
      "more willing than before",
      "wants community treatment, not residential (flat); home withdrawal advice"
    ],
    "notesLeftOut": [
      "full blood results, CT head, liver ultrasound, hepatitis screen - medical team's concern, not needed for the liaison assessment",
      "years of drinking, morning shaking - he can give the history at assessment",
      "nutrition, dentition, skin - not needed for alcohol assessment",
      "rent arrears, daughter, work history - social detail he can give at assessment",
      "smoking - not the purpose of this referral",
      "observations on arrival - superseded by current state"
    ],
    "safety": [
      {
        "point": "Risk of seizure when stopping suddenly without medical support",
        "where": "paragraph 2"
      },
      {
        "point": "Thoughts of ending his life in bad weeks, no current plan or intention",
        "where": "paragraph 4"
      },
      {
        "point": "Likely to leave before being seen (history of self-discharge)",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Thiamine continuing",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-nursing-discharge-to-the-community-midwife-wound-infection-after-caesarean-section": {
    "header": [
      "Ms Priyanka Mistry",
      "Community Midwifery Team Leader",
      "Ravensworth",
      "16 April 2025"
    ],
    "salutation": "Dear Ms Mistry,",
    "re": "Re: Mrs Aisha Rahman, aged 31, and baby Zayn",
    "body": [
      "I am writing to inform you that Mrs Rahman, readmitted on 12 April 2025 with an infected caesarean section wound, was discharged today and needs daily wound care visits.",
      "The swab grew Staphylococcus aureus sensitive to her antibiotic. Her oral antibiotic course finishes on 20 April, and eight tablets remain. She also takes ferrous sulfate 200 mg twice daily.",
      "Please clean the wound daily with saline and pack it lightly with an alginate ribbon under a foam dressing; it must not be packed tightly. The cavity measured 3 cm by 1 cm by 1 cm today and should be measured twice weekly. Once closed, alternate-day dressings will suffice. Please escalate increasing pain, spreading redness, fever, offensive discharge or separation of the deeper layer, and arrange a practice nurse or general practitioner review if it is not closing by 26 April.",
      "Zayn is now above his birth weight. Please weigh him on 19 April and 23 April and support her wish to reduce his two daily formula top-ups.",
      "I would be grateful for an unhurried visit, as she has had a difficult fortnight and her husband returns to work on 20 April. She would also like to discuss contraception at home."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Postnatal Ward"
    ],
    "bodyWords": 200,
    "commentary": {
      "opening": "It states at once what the reader must provide: daily wound visits starting now.",
      "selection": "Wound care, the antibiotic course, escalation signs, feeding and weighing dates are kept. Admission bloods, observations, labour details and anticoagulant history (completed) are left out as no longer needed by the midwife.",
      "organisation": "Purpose, infection and treatment, wound instructions with escalation, baby and feeding, then the request for a supportive visit.",
      "tone": "Professional and practical for a midwifery colleague, with a sensitive note on mood."
    },
    "notesUsed": [
      "readmitted 12 April with wound infection",
      "Staphylococcus aureus, sensitive",
      "oral antibiotic to 20 April, eight tablets left",
      "ferrous sulfate 200 mg twice daily",
      "saline, alginate ribbon, foam; do not pack tightly",
      "cavity 3 x 1 x 1 cm; measure twice weekly",
      "escalation signs",
      "review by 26 April if not closing",
      "Zayn above birth weight; top-ups to reduce; weigh 19 and 23 April",
      "difficult fortnight; husband back at work 20 April",
      "contraception at a home visit"
    ],
    "notesLeftOut": [
      "temperatures, bloods, earlier wound sizes - superseded by today's measurements",
      "full weight history - current status is enough",
      "prophylactic anticoagulant - course completed 13 April",
      "birth reflections appointment - already arranged, form sent",
      "driving and lifting advice - already given to her"
    ],
    "safety": [
      {
        "point": "Do not pack the wound tightly",
        "where": "paragraph 3"
      },
      {
        "point": "Escalation signs: increasing pain, spreading redness, fever, offensive discharge, separation of deeper layer",
        "where": "paragraph 3"
      },
      {
        "point": "Complete the antibiotic course to 20 April (eight tablets)",
        "where": "paragraph 2"
      },
      {
        "point": "Review if not closing by 26 April",
        "where": "paragraph 3"
      },
      {
        "point": "Mood: difficult fortnight",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-nursing-referral-to-the-falls-service-recurrent-falls-with-dizziness-on-standing": {
    "header": [
      "Ms Bridget Nwankwo",
      "Falls Prevention Service",
      "Croftbank Community Hospital",
      "9 October 2026"
    ],
    "salutation": "Dear Ms Nwankwo,",
    "re": "Re: Mrs Elsie Hargreaves, aged 86",
    "body": [
      "I am writing to refer Mrs Hargreaves for a multifactorial falls assessment. She has fallen four times in five months, twice in the last three weeks, and has a marked postural blood pressure drop.",
      "Three falls followed standing and feeling light-headed or faint, two of them at night going to the toilet. On 21 September she lay on the floor for about twenty minutes. There was no loss of consciousness. Today her systolic pressure fell by 42 mmHg on standing, with symptoms. An electrocardiogram on 6 October showed sinus rhythm; a copy is enclosed.",
      "She takes amlodipine, bendroflumethiazide and ramipril, with zopiclone 7.5 mg nightly for about four years and amitriptyline 25 mg, unreviewed since 2019. She had a wrist fracture in 2021. Her eye test is over three years old, she wears backless slippers, and her home has loose rugs and no toilet rail.",
      "Fear of falling has stopped her going out alone or attending church.",
      "I would be grateful for a medication review, a home hazard assessment, strength and balance work, and footwear advice. Podiatry has been referred. She would like her daughter present, and prefers mornings after ten o'clock but no Thursday visits."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Nurse, Croftbank Community Nursing Team"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The request and its two main reasons, frequent recent falls and a postural drop, are stated together so the service can prioritise.",
      "selection": "Fall pattern, the blood pressure drop, sedating and blood-pressure medicines, fracture history, vision, footwear and hazards are kept. Individual blood results, weight, alcohol and the full list of each hazard are left out as less relevant.",
      "organisation": "Purpose, falls and blood pressure, medicines and risk factors, impact on her life, then the request and visit preferences.",
      "tone": "Concise and clinical, written for a specialist colleague."
    },
    "notesUsed": [
      "four falls in five months, two in three weeks",
      "light-headed on standing; two falls at night to the toilet",
      "21 September: about twenty minutes on floor",
      "no loss of consciousness",
      "42 mmHg systolic drop with symptoms",
      "ECG 6 October sinus rhythm, copy enclosed",
      "amlodipine, bendroflumethiazide, ramipril, zopiclone 7.5 mg, amitriptyline 25 mg unreviewed since 2019",
      "wrist fracture 2021",
      "eye test over three years, backless slippers, loose rugs, no toilet rail",
      "stopped going out alone and church",
      "podiatry referred",
      "daughter present, after ten, not Thursday"
    ],
    "notesLeftOut": [
      "nocturia count, bruising sites - the night pattern and long lie carry the point",
      "alendronic acid and other routine medicines - the medication review will cover the full list",
      "bedside light switch - the home hazard assessment will find it",
      "May rug trip details - covered by hazards",
      "exact blood values (sodium 133, potassium 3.4) - the service will review bloods",
      "weight, alcohol, cognition - stable or no concern",
      "bath, outdoor step, lamp flex - assessment will identify",
      "daughter does shopping - minor social detail"
    ],
    "safety": [
      {
        "point": "Postural drop of 42 mmHg with symptoms",
        "where": "paragraph 2"
      },
      {
        "point": "Night sedation and amitriptyline unreviewed; antihypertensives",
        "where": "paragraph 3"
      },
      {
        "point": "Long lie of about twenty minutes",
        "where": "paragraph 2"
      },
      {
        "point": "Previous wrist fracture after a fall",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-nursing-discharge-to-the-district-nurse-heart-failure-with-fluid-overload": {
    "header": [
      "Ms Ruth Ademola",
      "District Nursing Sister",
      "Fairwater Community Nursing Team",
      "24 August 2026"
    ],
    "salutation": "Dear Ms Ademola,",
    "re": "Re: Mrs Dorothy Ellwood, aged 81, 14 Hollybush Court, Fairwater",
    "body": [
      "I am writing to hand over the care of Mrs Ellwood, discharged home today after treatment for heart failure with fluid overload. She will need two visits in the first week.",
      "After intravenous furosemide and fluid restriction, her weight has fallen from 78.4 kg to 71.6 kg and only mild ankle oedema remains. Her creatinine rose to 172 and settled at 151.",
      "She is discharged on furosemide 40 mg each morning, bisoprolol 5 mg daily, ramipril 2.5 mg daily, apixaban 2.5 mg twice daily and atorvastatin. Please note her recorded penicillin allergy.",
      "Please weigh her daily before breakfast on the same scales and contact her general practitioner if she gains more than two kilograms over three days or her breathlessness or sleeping position changes. Kidney function and potassium are due in one week; the form is in her folder. Her sacral area becomes red by the end of the day, so please inspect it each visit and prompt her to use her cushion. Please reinforce the 1.5 litre fluid restriction and low-salt advice.",
      "A heart failure nurse telephone review is booked for 3 September. I would be grateful if you could review the visit frequency after the first week."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Ward 12"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "It names the handover and the visiting commitment, so the sister can plan immediately.",
      "selection": "Weight trend, kidney function, discharge medicines including the anticoagulant, the allergy, monitoring triggers and skin care are kept. Day-by-day ward progress, catheter, physiotherapy distances, hearing aid and old surgery are left out as not affecting home care.",
      "organisation": "Purpose, admission and response, medicines and allergy, then the tasks for the team in a logical visit order, then follow-up.",
      "tone": "Clear and instructional, collegial between nurses."
    },
    "notesUsed": [
      "fluid overload, heart failure",
      "weight 78.4 to 71.6 kg",
      "creatinine 172 then 151",
      "discharge medicines incl. apixaban 2.5 mg twice daily",
      "penicillin allergy",
      "daily weights, gain over two kilograms in three days",
      "bloods in one week, form in folder",
      "sacral redness, cushion, prompting",
      "1.5 litre restriction, low salt",
      "two visits first week then review",
      "heart failure nurse 3 September"
    ],
    "notesLeftOut": [
      "daily ward chronology - outcome matters, not each day",
      "catheter and continence episode - resolved",
      "hearing aid, cataract surgery - not relevant to the plan",
      "bowling club, meals - social detail not needed",
      "admission observations - superseded by discharge state"
    ],
    "safety": [
      {
        "point": "Penicillin allergy",
        "where": "paragraph 3"
      },
      {
        "point": "Apixaban (anticoagulant) in discharge medicines",
        "where": "paragraph 3"
      },
      {
        "point": "Contact GP if weight gain over two kilograms in three days or symptoms change",
        "where": "paragraph 4"
      },
      {
        "point": "Kidney function rose; bloods due in one week",
        "where": "paragraphs 2, 4"
      },
      {
        "point": "Sacral redness - pressure risk",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-nursing-referral-to-the-community-mental-health-team-low-mood-after-childbirth": {
    "header": [
      "Dr Amara Nwosu",
      "Consultant Psychiatrist",
      "Perinatal Mental Health Team",
      "19 August 2026"
    ],
    "salutation": "Dear Dr Nwosu,",
    "re": "Re: Mrs Lucy Farrant, aged 29",
    "body": [
      "I am writing to request an urgent assessment of Mrs Farrant, whose mood has been increasingly low since about day six after the birth of her first baby on 2 August 2026.",
      "At home on 18 August, she cried for most of my visit. She has woken at 4 am daily for a week, eats one meal a day and has not left the flat since day nine. She feels \"nothing at all\" towards her baby, Isla, who is well cared for and gaining weight. Mrs Farrant has no psychiatric history; thyroid function is normal.",
      "When asked directly, she said she has thought the baby \"would be better with someone else\" and has imagined leaving. She denied thoughts of ending her life or of harming the baby, with no evidence of intent or plan.",
      "Her partner works away four nights a week but is changing his shifts from 25 August. Both have out-of-hours numbers, and her general practitioner is reviewing her on 20 August.",
      "She has agreed to be seen and, having no transport, would prefer a home visit. Her main worry is whether treatment would mean stopping breastfeeding; I would be grateful if you could address this."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Midwife"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The word urgent and the timeline from day six tell the psychiatrist how quickly to act and why.",
      "selection": "Mood symptoms, the baby's wellbeing, risk answers, physical causes excluded and the safety net are kept. Delivery details, blood loss, perineal healing and the latch problem are left out because they do not change a psychiatric assessment.",
      "organisation": "Purpose, presentation, risk, support already in place, then her consent, access needs and main question.",
      "tone": "Precise and respectful, quoting her own words where they carry meaning."
    },
    "notesUsed": [
      "low mood since day six",
      "first baby, Isla, 2 August",
      "tearful, early waking 4 am, one meal a day, not out since day nine",
      "\"nothing at all\", failing the baby",
      "baby well, gaining",
      "no psychiatric history, thyroid normal",
      "baby better with someone else, imagined leaving; denies suicide and harm",
      "partner away four nights, shifts from 25 August",
      "out-of-hours numbers, GP 20 August",
      "consents, no transport, home visit",
      "breastfeeding worry"
    ],
    "notesLeftOut": [
      "delivery and perineal tear - healed, not relevant",
      "observations at visit - normal",
      "feeding pain and nipple findings - infant feeding team is addressing",
      "mother in Ireland - minor social detail",
      "friends not answered - covered by not leaving the flat",
      "haemoglobin values, other visits arranged - the general practitioner and midwives are handling these"
    ],
    "safety": [
      {
        "point": "Thought baby better with someone else; imagined leaving",
        "where": "paragraph 3"
      },
      {
        "point": "Denied suicidal thoughts and thoughts of harming the baby; no intent or plan",
        "where": "paragraph 3"
      },
      {
        "point": "Out-of-hours numbers given; GP review 20 August",
        "where": "paragraph 4"
      },
      {
        "point": "Partner away four nights",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-nursing-transfer-to-the-rehabilitation-ward-hip-fracture-with-delirium": {
    "header": [
      "Sister Marta Kowalczyk",
      "Ward 4",
      "Brackenhill Rehabilitation Unit",
      "15 September 2026"
    ],
    "salutation": "Dear Sister Kowalczyk,",
    "re": "Re: Mr Alan Prendergast, aged 84",
    "body": [
      "I am writing to transfer Mr Prendergast for rehabilitation after a right hemiarthroplasty for a fractured neck of femur on 4 September 2026.",
      "He is full weight bearing on the right, with no hip precautions. He walks fifteen metres with a frame and one assistant; the aim is independent transfers and the two steps at his front door.",
      "He developed delirium after surgery. He is orientated by day but muddled at night, and settles with his glasses on, a light on, familiar objects and staying in the same bay. No antipsychotic medication or sedation has been given.",
      "He takes regular paracetamol, with oral morphine 2.5 mg as required, to be given before physiotherapy. Codeine is poorly tolerated. He takes apixaban 2.5 mg twice daily until 15 October. His grade 1 right heel pressure area needs offloading and daily checks. Bloods are due on 17 September.",
      "He is hard of hearing on the left, so please speak on his right side without raising your voice. His wife, who cannot take his weight, would like to attend the home assessment, be telephoned before any ward move, and be told honestly whether he is likely to walk to the toilet independently."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Staff Nurse, Trauma Ward 9"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "It states the transfer, the operation and its date, giving the rehabilitation sister immediate context.",
      "selection": "Weight bearing, delirium measures, analgesia timing, the anticoagulant end date, codeine intolerance, heel care, communication and the wife's concerns are kept. The fall story, blood transfusion, daily chronology, nutrition figures and the full medication list are left out as the chart travels with him.",
      "organisation": "Purpose, mobility goals, delirium care, medicines and skin, then communication and family.",
      "tone": "Practical and person-centred, nurse to nurse."
    },
    "notesUsed": [
      "hemiarthroplasty 4 September",
      "full weight bearing, no hip precautions",
      "fifteen metres with frame and one assistant",
      "two steps at front door",
      "post-operative delirium",
      "night precautions: glasses, light, familiar objects, same bay",
      "no antipsychotic, no sedation",
      "morphine 2.5 mg before physiotherapy",
      "codeine poorly tolerated",
      "apixaban until 15 October",
      "grade 1 heel, offload, daily checks",
      "bloods 17 September",
      "hard of hearing left; speak on right, no shouting",
      "wife: frozen shoulder, home assessment, phone before move, honest answer"
    ],
    "notesLeftOut": [
      "details of the fall and X-ray - background",
      "causes of the delirium (retention, constipation, low haemoglobin, pain) - treated; the current precautions are what the ward needs",
      "transfusion and haemoglobin values - bloods are scheduled",
      "nutrition and weight - supplements taken well; space",
      "continence at night - improving, on chart",
      "remaining routine medicines - on the drug chart"
    ],
    "safety": [
      {
        "point": "Codeine poorly tolerated",
        "where": "paragraph 4"
      },
      {
        "point": "Apixaban until 15 October",
        "where": "paragraph 4"
      },
      {
        "point": "No antipsychotic or sedation given; delirium precautions",
        "where": "paragraph 3"
      },
      {
        "point": "Grade 1 heel pressure damage",
        "where": "paragraph 4"
      },
      {
        "point": "Full weight bearing, no hip precautions",
        "where": "paragraph 2"
      }
    ]
  },
  "wri-nursing-advice-letter-to-a-relative-living-with-a-new-diagnosis-of-dementia": {
    "header": [
      "Mrs Priya Raman",
      "8 August 2026"
    ],
    "salutation": "Dear Mrs Raman,",
    "re": "Re: Mr Vikram Raman, aged 78",
    "body": [
      "As you requested, I am writing to give you written advice on supporting your father at home following his diagnosis of Alzheimer's disease.",
      "A steady daily routine with fewer choices will help him, as will labels or photographs on doors, a large kitchen clock and calendar, and clothes laid out in order. Keep the hall and stairs clear and well lit, and remove loose rugs.",
      "You asked what to do when he asks for his wife. On the ward, arguing upset him for a long time, whereas sitting with him, talking about her and offering tea settled him within minutes.",
      "He needs a prompt to take his medicines from the dosette box. His new tablet, donepezil, may cause nausea, loose stools, vivid dreams or a slower pulse at first, and the practice nurse will check his pulse in two weeks. He must not drive until the licensing authority decides, so please keep the car keys. Please keep using the cooker isolation switch and key safe, and watch for doorstep callers.",
      "If he suddenly becomes more confused over a day or two, please contact the memory nurse rather than waiting for the clinic, as this usually means a new illness."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Staff Nurse, Ward 7"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "It answers her own request for something in writing, which shows the letter is for her to keep and use.",
      "selection": "Practical daily advice, her question about his wife, medicine side effects, driving and home safety are kept. Test results, the CT scan, how the diagnosis was made and the history of his decline are left out because she already knows them.",
      "organisation": "Purpose, daily routine, her specific question, medicines and safety, then when to seek help.",
      "tone": "Warm, plain English without jargon, reassuring for a frightened relative."
    },
    "notesUsed": [
      "Alzheimer's disease diagnosis",
      "steady routine, fewer choices",
      "labels, clock, calendar, clothes in order",
      "hall and stairs clear, no rugs",
      "answer the feeling when he asks for his wife",
      "dosette box with prompt",
      "donepezil side effects",
      "pulse check in two weeks",
      "must not drive; daughter has keys",
      "cooker isolation switch, key safe, pendant",
      "doorstep callers",
      "sudden confusion: contact memory nurse"
    ],
    "notesLeftOut": [
      "cognitive test results and CT - she was present for the diagnosis",
      "admission circumstances - she knows them",
      "other medicines and doses - in the dosette box",
      "memory clinic, day centre, carers' referral - already arranged and told; space",
      "power of attorney - family already arranging"
    ],
    "safety": [
      {
        "point": "Must not drive until the licensing authority decides",
        "where": "paragraph 4"
      },
      {
        "point": "Cooker (isolation switch), leaving the house at night (key safe, pendant)",
        "where": "paragraph 4"
      },
      {
        "point": "Doorstep callers",
        "where": "paragraph 4"
      },
      {
        "point": "Donepezil side effects incl. slower pulse; practice nurse pulse check",
        "where": "paragraph 4"
      },
      {
        "point": "Sudden confusion means new illness - contact memory nurse",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-nursing-referral-to-the-leg-ulcer-clinic-venous-ulceration": {
    "header": [
      "Sister Eileen Cathcart",
      "Leg Ulcer Clinic",
      "Kingsmere Health Centre",
      "27 August 2026"
    ],
    "salutation": "Dear Sister Cathcart,",
    "re": "Re: Mr Terence Boothroyd, aged 72",
    "body": [
      "I am writing to refer Mr Boothroyd for assessment and ongoing management of a venous leg ulcer on his left medial gaiter area, which has not reduced in size for six weeks.",
      "The ulcer developed from a graze in April. Today it measures 3.1 cm by 2.6 cm, with 70% granulation and 30% slough, moderate exudate and maceration at the lower edge, but no infection. His left ankle brachial pressure index was 0.92 on 20 August, with palpable pedal pulses.",
      "Compression failed twice in June. He removed the first bandage after three days because it was painful and nobody had warned him, and stopped the lighter system after nine days because he could not wear a shoe over it. He cannot reapply bandages himself and lives alone.",
      "He has type 2 diabetes. Please note he is allergic to adhesive tape but tolerates silicone. He sits with his legs down most afternoons.",
      "I would be grateful if you could assess him for compression he can tolerate, advise on footwear and consider a vascular referral if the ulcer does not reduce. He is willing to try again if it fits inside a shoe and the first two nights are explained beforehand."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Nurse, Kingsmere Community Nursing Service"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "It names the request and the reason for referral now: an ulcer that has stopped improving.",
      "selection": "Wound measurements, vascular readings, why compression failed, the adhesive allergy and diabetes are kept. Full medication list, body mass index, past surgery and dog-walking detail are left out as not changing compression choices.",
      "organisation": "Purpose, wound and vascular status, treatment history and barriers, risk factors, then the request and his conditions.",
      "tone": "Objective and specialist, while presenting his reasons sympathetically."
    },
    "notesUsed": [
      "left medial gaiter, not reducing for six weeks",
      "graze in April",
      "3.1 x 2.6 cm, 70% granulation, 30% slough",
      "moderate exudate, maceration, no infection",
      "left ABPI 0.92 on 20 August, pulses palpable",
      "compression removed after three days and nine days",
      "pain not explained; shoe would not fit",
      "cannot reapply, lives alone",
      "type 2 diabetes",
      "adhesive tape allergy, silicone tolerated",
      "legs down in afternoons",
      "request: tolerable compression, footwear, vascular referral"
    ],
    "notesLeftOut": [
      "May measurements and early dressings - superseded",
      "medication doses and HbA1c - not needed for compression",
      "appendicectomy, ex-smoker - irrelevant",
      "dog and neighbour, plastic bag in shower - minor detail",
      "skin staining - typical venous change, wound findings sufficient",
      "pain score - the clinic will assess pain; the bandage pain that made him stop is stated"
    ],
    "safety": [
      {
        "point": "Adhesive tape allergy; silicone tolerated",
        "where": "paragraph 4"
      },
      {
        "point": "Diabetes",
        "where": "paragraph 4"
      },
      {
        "point": "ABPI 0.92 and palpable pulses (vascular status before compression)",
        "where": "paragraph 2"
      },
      {
        "point": "Vascular referral if no reduction",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-nursing-transfer-to-the-coronary-care-unit-chest-pain-in-the-emergency-department": {
    "header": [
      "Nurse in Charge",
      "Coronary Care Unit",
      "St Aidan's Hospital",
      "15 October 2026"
    ],
    "salutation": "Dear Nurse in Charge,",
    "re": "Re: Mr Desmond Achterberg, aged 61",
    "body": [
      "I am writing to hand over the care of Mr Achterberg, who is transferring to your unit at 01:40 with a non-ST-elevation myocardial infarction.",
      "Please note that he has a true ibuprofen allergy, which caused facial swelling and wheeze in 2015. Aspirin and all other non-steroidal anti-inflammatory drugs must be avoided, so no aspirin has been given, and the cardiology registrar is aware.",
      "His chest pain began at 20:30. His ECG showed anterolateral ST depression and his first troponin was markedly raised. He received glyceryl trinitrate, morphine 5 mg, an antiemetic, a ticagrelor loading dose, fondaparinux and bisoprolol 2.5 mg, and has been pain free since 23:40. At 01:35 his blood pressure was 118/72, pulse 74 in sinus rhythm and oxygen saturation 97% on air.",
      "He requires continuous cardiac monitoring, a repeat troponin at 03:00 and a repeat ECG. He is awaiting coronary angiography and is nil by mouth from 06:00. He has twice left his bed against advice and responds better to being told why bed rest is needed.",
      "He is frightened and settles when questions are answered directly. His wife does not drive and should be telephoned rather than expected to wait."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Staff Nurse, Emergency Department"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "The transfer time and diagnosis come first, as the nurse in charge needs these to receive him.",
      "selection": "The allergy and aspirin avoidance, treatment given, current observations and the overnight plan are kept. Detailed history, cholesterol, family history, employment, property and cannula siting time are left out as recorded elsewhere or not urgent.",
      "organisation": "The allergy is placed second because it is the main safety risk; then events and treatment, the plan, then emotional and family needs.",
      "tone": "Brief, precise and clinical, suitable for an acute handover."
    },
    "notesUsed": [
      "NSTEMI, transfer 01:40",
      "true ibuprofen allergy, facial swelling and wheeze 2015",
      "avoid aspirin and all NSAIDs; no aspirin given; registrar aware",
      "pain from 20:30",
      "anterolateral ST depression; troponin raised",
      "GTN, morphine 5 mg, antiemetic, ticagrelor, fondaparinux, bisoprolol 2.5 mg",
      "pain free since 23:40",
      "01:35 observations",
      "monitoring, troponin 03:00, ECG",
      "angiography; nil by mouth from 06:00",
      "out of bed twice; explain why",
      "frightened; direct answers",
      "wife does not drive; telephone"
    ],
    "notesLeftOut": [
      "full timeline of calls and ambulance - not needed on the unit",
      "blood values other than troponin - in the notes",
      "medical and family history, smoking - documented; smoking referral made",
      "cannula details, property list - recorded and signed",
      "language and employment - no communication barrier",
      "pain character and radiation - the diagnosis is made; the unit needs current status"
    ],
    "safety": [
      {
        "point": "Ibuprofen allergy - avoid aspirin and all NSAIDs",
        "where": "paragraph 2"
      },
      {
        "point": "Nil by mouth from 06:00",
        "where": "paragraph 4"
      },
      {
        "point": "Repeat troponin 03:00 and ECG; continuous monitoring",
        "where": "paragraph 4"
      },
      {
        "point": "Leaving bed against advice",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-nursing-discharge-to-the-general-practitioner-pneumonia-in-a-patient-with-copd": {
    "header": [
      "Dr Helena Frost",
      "The Millgate Practice",
      "12 November 2026"
    ],
    "salutation": "Dear Dr Frost,",
    "re": "Re: Miss Bernadette Okonjo, aged 68",
    "body": [
      "I am writing to inform you that Miss Okonjo has been discharged today after treatment for right lower lobe pneumonia with COPD, and to ask the practice to arrange her follow-up.",
      "She was admitted on 2 November 2026. Because she retains carbon dioxide, her target saturation is 88–92%. She needed controlled oxygen for six days and has been on air since 8 November at her baseline of 90–92%; no home oxygen is required. Her antibiotics and prednisolone have been completed.",
      "Carbocisteine 750 mg three times daily has been started for two weeks, and she now uses her salbutamol with a spacer. She has not smoked since admission and has agreed to a stop smoking referral, preferably by telephone. The final blood culture report is still to follow.",
      "A repeat chest x-ray is needed in six weeks to confirm resolution, given her smoking history, and this has not been requested.",
      "I would be grateful if you could arrange the chest x-ray, influenza and pneumococcal vaccinations, a carbocisteine review in two weeks and spirometry once she has recovered. Please also consider a rescue pack and a written action plan, which she has asked for."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Respiratory Ward 6"
    ],
    "bodyWords": 192,
    "commentary": {
      "opening": "It combines the discharge with a request, because the practice must act on several outstanding items.",
      "selection": "The oxygen target, treatment completed, new medicine, smoking status, outstanding results and the unrequested x-ray are kept. Admission bloods, ward progress, physiotherapy distances, routine medicines and social detail are left out as not needed by the GP.",
      "organisation": "Purpose, admission and oxygen, medicine and outstanding results, the x-ray as a separate paragraph for emphasis, then the list of requests.",
      "tone": "Formal and concise for a doctor."
    },
    "notesUsed": [
      "right lower lobe pneumonia, COPD",
      "admitted 2 November",
      "carbon dioxide retainer, target 88–92%",
      "oxygen six days, on air since 8 November at 90–92%; no home oxygen",
      "antibiotics and prednisolone completed",
      "carbocisteine 750 mg three times daily for two weeks",
      "salbutamol via spacer",
      "not smoked; stop smoking referral by telephone",
      "blood culture final report pending",
      "repeat chest x-ray in six weeks NOT requested",
      "vaccinations, spirometry, rescue pack and plan"
    ],
    "notesLeftOut": [
      "admission observations and bloods, including C-reactive protein - acute, now resolved",
      "nicotine patches - the stop smoking service will manage",
      "daily progress and walking distances - outcome is enough",
      "nebuliser regimen - stepped down",
      "routine continued medicines - unchanged",
      "weight, supplements, dietitian - referral already made; space",
      "social circumstances - independent, no needs"
    ],
    "safety": [
      {
        "point": "Carbon dioxide retainer: target saturation 88–92%",
        "where": "paragraph 2"
      },
      {
        "point": "No home oxygen required",
        "where": "paragraph 2"
      },
      {
        "point": "Repeat chest x-ray in six weeks not yet requested",
        "where": "paragraphs 4, 5"
      },
      {
        "point": "Blood culture final report outstanding",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-nursing-referral-to-the-diabetes-specialist-nurse-newly-diagnosed-type-2-diabetes-with-a-foot-at-risk": {
    "header": [
      "Ms Grace Ilunga",
      "Diabetes Specialist Nurse",
      "Whitcombe Health Centre",
      "16 September 2026"
    ],
    "salutation": "Dear Ms Ilunga,",
    "re": "Re: Mr Emmanuel Adeyemi, aged 54",
    "body": [
      "I am writing to refer Mr Adeyemi, with newly diagnosed type 2 diabetes and a foot at high risk of ulceration, for structured education and review.",
      "Today, monofilament testing showed absent sensation at four of ten sites on his right foot and three on the left. He had not felt a drawing pin in his slipper and has a healed puncture mark on his right sole. He has thick callus, fissured heels and long nails, which he cuts with scissors although he cannot see his right foot easily. Podiatry has been referred today, copied to you.",
      "He takes metformin 500 mg once daily and has started ramipril and atorvastatin. Retinal screening is booked for 3 October.",
      "He believes his diabetes is temporary, has asked when he can stop his tablets and would like a meter. He was shaken by the foot findings, as his father lost a leg to diabetes.",
      "He works twelve-hour night shifts, eating takeaway food at three in the morning. I would be grateful if you could offer an appointment after two in the afternoon, simple written information, dietary advice suited to night shifts and answers to his questions. He would like his wife to attend."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Practice Nurse"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The diagnosis and the at-risk foot are named together because the foot makes the referral urgent.",
      "selection": "Foot findings, current medicines, his misunderstandings, shift pattern and reading preference are kept. Weight, waist, cholesterol, kidney function and urine results are left out because the practice is monitoring them.",
      "organisation": "Purpose, diagnosis and foot risk, medicines and screening, his beliefs and fears, then practical needs and requests.",
      "tone": "Collegial and empathetic, recognising his fear and practical difficulties."
    },
    "notesUsed": [
      "new type 2 diabetes, high-risk foot",
      "monofilament absent four of ten right, three left",
      "drawing pin unnoticed, healed puncture",
      "callus, fissures, nails cut with scissors, cannot see right foot",
      "podiatry referral copied",
      "metformin 500 mg once daily",
      "ramipril and atorvastatin started",
      "retinal screening 3 October",
      "believes temporary; stop tablets; meter",
      "father lost a leg",
      "night shifts, takeaway at three am",
      "after two pm, simple written information",
      "wife to attend"
    ],
    "notesLeftOut": [
      "presenting symptoms, random glucose and HbA1c values - diagnosis already confirmed; the specialist nurse can see results",
      "planned metformin increase - already in the practice plan",
      "weight, BMI, blood pressure, bloods - being managed by the practice",
      "urine albumin repeat - practice is repeating it",
      "language - fluent; the simple-information request covers it",
      "non-smoker, no alcohol - no action needed"
    ],
    "safety": [
      {
        "point": "Loss of protective sensation; unnoticed drawing pin injury",
        "where": "paragraph 2"
      },
      {
        "point": "Cuts own nails with scissors but cannot see right foot",
        "where": "paragraph 2"
      },
      {
        "point": "Podiatry referral made",
        "where": "paragraph 2"
      },
      {
        "point": "Retinal screening not yet attended (3 October)",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-nursing-discharge-to-the-community-stroke-team-swallowing-and-speech-after-a-stroke": {
    "header": [
      "Ms Rowan Dalgleish",
      "Community Stroke Team Coordinator",
      "Northgate",
      "22 January 2025"
    ],
    "salutation": "Dear Ms Dalgleish,",
    "re": "Re: Mr Colin Whitehouse, aged 69",
    "body": [
      "I am writing to hand over the care of Mr Whitehouse, who has been discharged home today after a left middle cerebral artery stroke on 5 January 2025, caused by newly diagnosed atrial fibrillation.",
      "He must continue soft, bite-sized food with normal fluids, sit fully upright for meals and for 30 minutes afterwards, and avoid straws. Tablets must be given whole with a spoon of yoghurt; none is to be crushed. Please watch for coughing at meals, a wet voice after drinking, chest infection or weight loss. Speech and language therapy is booked for 3 February.",
      "He takes apixaban 5 mg twice daily; aspirin has been stopped and must not be restarted. Please check his blood pressure in two weeks and at six weeks.",
      "He understands everything said to him, but has expressive dysphasia. Please give him time, ask one question at a time and do not finish his sentences. His mood has been low; he declined medication but agreed to a review at four weeks. He must not drive for at least one month.",
      "I would be grateful if your team could continue physiotherapy for his right arm and outdoor walking. His stroke clinic appointment is on 5 March."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Acute Stroke Unit"
    ],
    "bodyWords": 200,
    "commentary": {
      "opening": "It names the handover, the stroke and its cause in one sentence so the coordinator understands his risks.",
      "selection": "Swallow guidance, warning signs, the anticoagulant and aspirin instruction, communication advice, mood and therapy needs are kept. Thrombolysis timings, imaging, tube feeding history and day-by-day progress are left out as finished events.",
      "organisation": "Purpose, swallowing safety first, then medicines, communication and mood, then mobility and appointments.",
      "tone": "Clear and instructional for a community team coordinator."
    },
    "notesUsed": [
      "left MCA stroke 5 January, AF cause",
      "soft bite-sized, normal fluids, upright 30 minutes, no straws",
      "tablets whole with yoghurt, none crushed",
      "warning signs",
      "SLT 3 February",
      "apixaban 5 mg twice daily; aspirin stopped, not to restart",
      "BP check two and six weeks",
      "expressive dysphasia; time, one question, don't finish sentences",
      "low mood, declined medication, review at four weeks",
      "no driving at least one month",
      "physiotherapy arm and outdoor walking",
      "stroke clinic 5 March"
    ],
    "notesLeftOut": [
      "thrombolysis and imaging - acute phase finished",
      "nasogastric tube - removed",
      "power grades - progress described functionally",
      "weight and supplements - dietitian referral already made; space",
      "home adaptations - completed by occupational therapy",
      "daughters, carers' number - wife manages",
      "other medicines (atorvastatin, ramipril, bisoprolol), current walking ability - on the discharge medication list; physiotherapy will assess"
    ],
    "safety": [
      {
        "point": "Apixaban; aspirin stopped and must not be restarted",
        "where": "paragraph 3"
      },
      {
        "point": "Swallow: modified diet, upright, no straws, tablets whole, none crushed",
        "where": "paragraph 2"
      },
      {
        "point": "Aspiration warning signs",
        "where": "paragraph 2"
      },
      {
        "point": "Must not drive for at least one month",
        "where": "paragraph 4"
      },
      {
        "point": "Low mood",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-nursing-referral-to-the-community-palliative-care-team-symptom-control-at-home": {
    "header": [
      "Sister Naomi Ferreira",
      "Community Palliative Care Team",
      "Ashbourne Hospice",
      "4 December 2026"
    ],
    "salutation": "Dear Sister Ferreira,",
    "re": "Re: Mrs Winifred Stanislaus, aged 76",
    "body": [
      "I am writing to refer Mrs Stanislaus, who has lung cancer with spinal and rib metastases, for symptom control and support at home. Oncology advised on 26 November that no further active treatment is appropriate, and she wishes to stay at home without readmission.",
      "Her mid-back pain is 5 out of 10 at rest and 8 on movement, and wakes her at night; she also has a burning left chest wall pain. Increasing her modified-release morphine to 30 mg twice daily helped only at rest, and no adjuvant has been tried. She is saving her immediate-release morphine for when things are worse.",
      "She has morning nausea, worse since the increase, and constipation with faecal loading, with no regular laxative established. Her dexamethasone 4 mg has no review date, and no anticipatory medicines are in the house.",
      "Her son wishes to discuss what will happen at the end away from his mother. She has asked that nobody uses the word \"terminal\" in front of her grandchildren.",
      "I would be grateful if you could review her analgesia, nausea, constipation and dexamethasone, provide anticipatory medicines with district nurse authorisation, and support her son. She prefers a morning visit."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "District Nurse, Ashbourne Community Nursing Service"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "Purpose, prognosis and her wish to stay at home are given together, as they set the goal of care.",
      "selection": "Pain, medicines and gaps in treatment, nausea, constipation, steroids, missing anticipatory medicines and family wishes are kept. Observations, routine medicines, care package details and earlier radiotherapy are left out as less useful to the specialist.",
      "organisation": "Purpose and wishes, pain, other symptoms and medicine gaps, family communication, then specific requests.",
      "tone": "Compassionate yet clinical, respecting her stated wishes."
    },
    "notesUsed": [
      "lung cancer, spine and rib metastases",
      "no further active treatment 26 November",
      "wishes to stay home, not readmitted",
      "pain 5 at rest, 8 on movement, worse at night",
      "burning chest wall pain",
      "morphine MR 30 mg twice daily, benefit at rest only",
      "no adjuvant",
      "saving immediate-release morphine",
      "nausea worse since increase",
      "constipation, faecal loading, no regular laxative",
      "dexamethasone 4 mg, no review date",
      "no anticipatory medicines",
      "son wants separate conversation",
      "no 'terminal' before grandchildren",
      "morning visit"
    ],
    "notesLeftOut": [
      "radiotherapy and diagnosis dates - background",
      "breathlessness, sleep, fatigue, weight loss - space; pain and the unmet treatment gaps take priority",
      "observations and chest findings - stable",
      "amlodipine, levothyroxine - not symptom related",
      "care package and family duties - support in place",
      "mouth care - lower priority for referral (space)"
    ],
    "safety": [
      {
        "point": "No anticipatory medicines in the home",
        "where": "paragraph 3"
      },
      {
        "point": "Constipation with opioid, no regular laxative",
        "where": "paragraph 3"
      },
      {
        "point": "Dexamethasone without review date",
        "where": "paragraph 3"
      },
      {
        "point": "Underuse of breakthrough morphine",
        "where": "paragraph 2"
      },
      {
        "point": "Wishes not to be admitted; avoid 'terminal' in front of grandchildren",
        "where": "paragraphs 1, 4"
      }
    ]
  },
  "wri-nursing-transfer-to-a-nursing-home-enteral-feeding-after-a-severe-stroke": {
    "header": [
      "Ms Adaeze Obi",
      "Registered Manager",
      "Larkfield Nursing Home",
      "30 August 2026"
    ],
    "salutation": "Dear Ms Obi,",
    "re": "Re: Mrs Constance Oyelaran, aged 83",
    "body": [
      "I am transferring Mrs Oyelaran to your care. After a stroke on 14 June 2026, she has a dense left hemiplegia and an unsafe swallow, and is fed by gastrostomy.",
      "She is nil by mouth for nutrition. Her feed runs by pump from 18:00 to 10:00, with 60 ml water flushes before and after, and four times by day. Record the 4 cm external marker at every feed, and do not use the tube if it has moved. Keep the bed head raised to at least 30 degrees during the feed and for one hour afterwards, as both chest infections followed lying flat. Medicines go via the tube as liquids; nothing is to be crushed without checking the enclosed list.",
      "Please continue the air mattress and repositioning, as her pressure risk is high. She needs two carers and a hoist for transfers.",
      "She has no speech; approach from her right, where she understands short sentences. She squeezes with her right hand for yes and turns away for no. Warn her before touching her.",
      "Her treatment escalation plan states she is not for cardiopulmonary resuscitation. Her son holds power of attorney and asks to be telephoned about changes."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Stroke Rehabilitation Ward"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "It states the transfer and why she needs nursing-home care: no safe swallow and tube feeding.",
      "selection": "Feed times, flushes, tube safety, positioning, medicines via the tube, pressure care, communication, resuscitation status and the son's wishes are kept. Swallow assessment dates, the best interests meeting, bloods and observations are left out as recorded in the notes.",
      "organisation": "Purpose, feeding safety first, then skin and moving, communication, then legal and family matters.",
      "tone": "Formal and precise, with clear instructions for a care home manager."
    },
    "notesUsed": [
      "stroke 14 June",
      "left hemiplegia, unsafe swallow, gastrostomy",
      "nil by mouth for nutrition",
      "feed 18:00 to 10:00 by pump",
      "60 ml flushes before and after feed and four times by day",
      "record marker 4 cm every feed, do not use if moved",
      "head of bed 30 degrees during feed and one hour after",
      "chest infections when bed flat",
      "medicines liquid via tube; nothing crushed without checking list",
      "high-risk, air mattress, repositioning",
      "two carers, hoist",
      "no speech; right side; yes squeeze, no turn head",
      "tell her before touching",
      "not for CPR",
      "son, power of attorney, telephone about change"
    ],
    "notesLeftOut": [
      "swallow assessment dates and best interests meeting - recorded in notes",
      "feed volume and formula, 30 ml flush between medicines, fluid total - space; the enclosed pharmacy list covers medicines",
      "right hemisphere site, left visual inattention - covered by 'approach from her right'",
      "two-hourly and four-hourly repositioning intervals - space",
      "bloods, weight, observations - stable",
      "healed heel ulcer - healed",
      "continence and stoma routine - on enclosed charts (space)",
      "hymns, visiting days - helpful but lower priority"
    ],
    "safety": [
      {
        "point": "Nil by mouth for nutrition",
        "where": "paragraph 2"
      },
      {
        "point": "Record marker at 4 cm every feed; do not use tube if moved",
        "where": "paragraph 2"
      },
      {
        "point": "Head of bed at least 30 degrees; aspiration history",
        "where": "paragraph 2"
      },
      {
        "point": "Nothing crushed without checking the enclosed list",
        "where": "paragraph 2"
      },
      {
        "point": "Not for cardiopulmonary resuscitation (treatment escalation plan)",
        "where": "paragraph 5"
      },
      {
        "point": "Approach from the right; tell her before touching",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-nursing-advice-letter-to-parents-after-a-child-s-admission-with-asthma": {
    "header": [
      "Mr and Mrs Petrov",
      "14 March 2025"
    ],
    "salutation": "Dear Mr and Mrs Petrov,",
    "re": "Re: Milena Petrova, aged 7",
    "body": [
      "I am writing with advice on managing Milena's asthma at home.",
      "Milena must take her brown preventer inhaler, one puff twice daily, every day, even when well, then rinse her mouth with water. Linking it to breakfast and bedtime toothbrushing helps. Give prednisolone for three more mornings, then stop.",
      "Her blue inhaler, 2 to 4 puffs when needed, must always be used with the spacer: one puff at a time, five breaths for each puff. Take the spacer wherever she goes, and wash it weekly in warm soapy water, leaving it to drip dry.",
      "If she needs the blue inhaler more than three times a week, telephone the practice that week. If she is breathless, cannot speak in full sentences, or the blue inhaler is not lasting four hours, give 10 puffs through the spacer, one at a time, and call an ambulance.",
      "Please do not smoke indoors or in the car, even at the open back door. Keep the kitten out of her bedroom and the door closed, and wash her bedding weekly at a high temperature.",
      "Her practice nurse review is on 21 March. Please send a spare blue inhaler and spacer to school."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Staff Nurse, Paediatric Ward 2"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "A simple purpose sentence suits parents, one of whom has limited English.",
      "selection": "Daily preventer use, correct spacer technique, the action plan steps, smoke and kitten advice and follow-up are kept. Admission observations, hospital treatment and peak flow numbers are left out because they do not help the parents at home.",
      "organisation": "Daily medicine first, then the reliever, then when to get help, then triggers, then appointments.",
      "tone": "Plain, short sentences, kind but firm on safety."
    },
    "notesUsed": [
      "preventer one puff twice daily every day, rinse mouth",
      "breakfast, toothbrushing, fridge chart",
      "prednisolone three more mornings",
      "blue inhaler 2 to 4 puffs with spacer, one at a time, five breaths",
      "take spacer everywhere; wash weekly, drip dry",
      "amber: more than three times a week, phone practice",
      "red: 10 puffs, call ambulance",
      "no smoking indoors, car or back door",
      "kitten out of bedroom, door closed, bedding hot wash",
      "practice nurse 21 March",
      "spare inhaler and spacer for school"
    ],
    "notesLeftOut": [
      "admission observations and hospital treatment - not useful for home care",
      "peak flow results - not monitored at home in the plan",
      "how the technique was wrong - corrected; focus on what to do",
      "father's smoking referral - already agreed",
      "possible rehoming of the kitten - conversation started gently, not settled",
      "paediatric clinic in eight weeks - space; the practice nurse review is the nearer appointment"
    ],
    "safety": [
      {
        "point": "Red zone: 10 puffs through spacer and call an ambulance",
        "where": "paragraph 4"
      },
      {
        "point": "Preventer every day, well or unwell",
        "where": "paragraph 2"
      },
      {
        "point": "Always use spacer with blue inhaler",
        "where": "paragraph 3"
      },
      {
        "point": "No smoking in house, car or at back door",
        "where": "paragraph 5"
      },
      {
        "point": "Kitten kept out of bedroom",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-medicine-referral-to-the-renal-service-declining-kidney-function": {
    "header": [
      "Dr Halim Rachid",
      "Consultant Nephrologist",
      "Low Clearance Clinic",
      "Wexford Hospital",
      "30 April 2025"
    ],
    "salutation": "Dear Dr Rachid,",
    "re": "Re: Mr Ibrahim Chaudhry-Lyons, aged 69",
    "body": [
      "I am writing to refer Mr Chaudhry-Lyons, aged 69, for assessment of chronic kidney disease with a falling filtration rate and significant proteinuria.",
      "His filtration rate has fallen from 72 in May 2021 to 33 on 30 April 2025, a drop of 11 in the last seven months, with creatinine 192. His albumin to creatinine ratio is 74 mg/mmol, without haematuria. Ultrasound showed small echogenic kidneys, and myeloma and autoimmune screens were negative. He also has anaemia, with haemoglobin 108, a raised parathyroid hormone, bicarbonate 19 and potassium 5.1.",
      "He has had type 2 diabetes for 16 years, hypertension above target and a myocardial infarction in 2017. On 14 April I started indapamide and empagliflozin, stopped the naproxen he had been buying, and reduced metformin to 500 mg twice daily, to be stopped if the filtration rate falls below 30. Ramipril continues with potassium monitoring, and sodium bicarbonate was started on 30 April. He has written sick day rules and avoids anti-inflammatory painkillers; low-dose aspirin continues.",
      "I would value your view on a possible biopsy, the anaemia and bone chemistry, and preparing him for the future. He has asked whether he will need dialysis.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The first sentence names the patient, the condition and the purpose: a low clearance assessment for a falling filtration rate and proteinuria.",
      "selection": "The trend is given as first value, latest value and the recent drop rather than all six results. Normal screens are summarised; gout, prostate score, virology and weight are left out; the medication changes the nephrologist must know are kept.",
      "organisation": "Kidney evidence first, then background and treatment, then the GP's three questions and the patient's own question.",
      "tone": "Collegial and precise; the request is phrased as seeking an opinion, not giving instructions."
    },
    "notesUsed": [
      "filtration rate 72 (May 2021) to 33 (30 April 2025); drop of 11 in seven months",
      "creatinine 192",
      "ACR 74 mg/mmol, no haematuria",
      "ultrasound small echogenic kidneys",
      "myeloma and autoimmune screens negative",
      "Hb 108, raised PTH, bicarbonate 19, potassium 5.1",
      "diabetes 16 years, hypertension above target, MI 2017",
      "indapamide and empagliflozin started 14 April",
      "naproxen stopped",
      "metformin 500 mg twice daily, stop below 30",
      "ramipril continued with potassium monitoring",
      "sodium bicarbonate started 30 April",
      "sick day rules and NSAID avoidance",
      "request: biopsy, anaemia, bone chemistry, preparation",
      "asked about dialysis"
    ],
    "notesLeftOut": [
      "intermediate creatinine/eGFR values 2022-2024 and the four-year drop - the trend is summarised",
      "ferritin and transferrin saturation - the anaemia is flagged for the clinic to assess",
      "retinopathy, no hydronephrosis, microscopy - supporting detail cut for length",
      "hepatitis and HIV serology - taken for future access planning, not needed for the referral decision",
      "calcium, phosphate, vitamin D, HbA1c, cholesterol values - detail the clinic will re-measure",
      "kidney sizes in cm - \"small\" conveys the finding",
      "gout, prostate score, post-void residual - not relevant to the question",
      "exact BP readings - \"above target\" is enough",
      "full list of unchanged drugs (atorvastatin, aspirin, bisoprolol, amlodipine) - unchanged",
      "occupation, BMI, dietitian referral - low relevance to the specialist decision"
    ],
    "safety": [
      {
        "point": "Naproxen stopped; avoid anti-inflammatory painkillers (low-dose aspirin continues)",
        "where": "paragraph 3"
      },
      {
        "point": "Metformin reduced, to be stopped if filtration rate below 30",
        "where": "paragraph 3"
      },
      {
        "point": "Ramipril continued with potassium monitored (potassium 5.1)",
        "where": "paragraphs 2 and 3"
      },
      {
        "point": "Sick day rules given",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-medicine-referral-to-the-memory-service-cognitive-decline": {
    "header": [
      "Dr Iona Blackwood",
      "Consultant Old Age Psychiatrist",
      "Memory Assessment Service",
      "Fairlop",
      "24 August 2025"
    ],
    "salutation": "Dear Dr Blackwood,",
    "re": "Re: Mr Gordon Ferreira-Mbeki, aged 79",
    "body": [
      "I am writing to refer Mr Ferreira-Mbeki, aged 79, with a two-year progressive cognitive decline. He has agreed to the referral, and I judged him to have capacity to do so.",
      "His wife reports repetitive questioning, word-finding difficulty and inability to manage finances. In June he became lost driving a familiar route, and he has twice left a pan on the hob. The decline has been gradual, without fluctuation, hallucinations or parkinsonian features. He scored 21 out of 30 on cognitive screening on 3 August and 20 out of 30 on 24 August, with an abnormal clock drawing; his hearing aids were working during testing. Blood tests and depression screening were normal.",
      "Driving is now the most pressing risk. He still drives daily and has not informed the licensing authority, and his wife no longer feels safe in the car. She now supervises his cooking and manages his medication and finances. She is 76 and provides all his care.",
      "I would be grateful for your assessment, including imaging as you see fit, and particularly your view on his driving, on which his wife would welcome support. He has asked whether any treatment is available.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "States the purpose, the two-year course and that he consented with capacity, which the service needs before it can proceed.",
      "selection": "Keeps the features that point to a cause (gradual, non-fluctuating, no parkinsonism), the scores and the risks. Detailed normal blood values, examination findings and full function list are compressed or omitted.",
      "organisation": "Clinical picture, then risk with driving first because it is the most urgent, then the specific requests.",
      "tone": "Factual and sensitive; the patient's anger and denial are not dramatised, and the wife's concern is reported fairly."
    },
    "notesUsed": [
      "two-year progressive decline",
      "capacity to agree to referral",
      "repetition, word-finding, accounts",
      "lost driving in June",
      "pan left on hob twice",
      "gradual, no fluctuation, no hallucinations or parkinsonism",
      "scores 21/30 (3 August) and 20/30 (24 August)",
      "abnormal clock drawing",
      "hearing aids working during testing",
      "normal bloods and depression screen",
      "still drives, has not informed licensing authority, wife feels unsafe",
      "wife supervises cooking, medication, money",
      "wife 76 provides all care",
      "request: assessment, imaging, view on driving",
      "asked about treatment"
    ],
    "notesLeftOut": [
      "individual blood values (B12 342, glucose, HbA1c, CRP) - \"normal\" suffices",
      "amlodipine and atorvastatin, no anticholinergic burden - no medication contributes; cut for length",
      "no falls, no wandering - negatives",
      "carers' service mentioned but not accepted - cut for length; the support need is clear from the wife doing everything",
      "blood pressure and pulse - normal, not decision-relevant",
      "bowls club withdrawal - minor",
      "his anger at the driving advice - not needed by the reader",
      "daughter's location and job - peripheral",
      "detailed ADL list, weight - function summarised through risk"
    ],
    "safety": [
      {
        "point": "Driving risk: still driving, not informed the licensing authority",
        "where": "paragraph 3"
      },
      {
        "point": "Cooking incidents (pan left on hob); now supervised",
        "where": "paragraphs 2 and 3"
      },
      {
        "point": "Medication now managed by wife",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-medicine-discharge-to-the-general-practitioner-upper-gastrointestinal-bleeding": {
    "header": [
      "Dr Rachel Osunde",
      "The Kingsfold Practice",
      "24 September 2025"
    ],
    "salutation": "Dear Dr Osunde,",
    "re": "Re: Mr Raymond Dunwoody-Kaur, aged 71",
    "body": [
      "I am writing about Mr Dunwoody-Kaur, admitted on 19 September 2025 with an upper gastrointestinal bleed and discharged today, as several changes require your action.",
      "He presented with haematemesis and melaena, haemoglobin 74. Endoscopy on 20 September showed a benign 12 mm gastric ulcer, treated successfully, and Helicobacter pylori was identified. His haemoglobin was 104 at discharge.",
      "The likely cause was diclofenac and bought ibuprofen. Both have been stopped permanently, and he must not be prescribed any other non-steroidal anti-inflammatory drug; low-dose aspirin continues on cardiology advice, having been restarted on 22 September. Please add this drug caution to his record. Omeprazole 40 mg daily continues until about 18 November, is stopped for two weeks before the breath test, then resumes at 20 mg daily long term while on aspirin. Gastroenterology will advise on stomach protection during those two weeks. Eradication therapy completes on 28 September.",
      "Please arrange a full blood count in two weeks and at six weeks, and continue iron until haemoglobin and ferritin normalise, then for a further three months. Please arrange a urea breath test in the first week of December, and review his back pain without reintroducing anti-inflammatory drugs.",
      "Thank you for your continued care."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Foundation Doctor"
    ],
    "bodyWords": 200,
    "commentary": {
      "opening": "Gives the admission, the diagnosis and the discharge in one sentence, and warns the GP at once that action is needed.",
      "selection": "Admission observations, scores, resuscitation detail and endoscopic technique are left out; the GP needs the cause, the drug decisions and the dates. The omeprazole sequence is given exactly, including the two weeks off before the breath test.",
      "organisation": "Brief summary, then medication decisions grouped together, then a final paragraph of requests in time order.",
      "tone": "Firm on the drug caution (\"must not\"), courteous in the requests (\"Please arrange\")."
    },
    "notesUsed": [
      "admitted 19 September, discharged 24 September",
      "haematemesis and melaena, Hb 74",
      "endoscopy 20 September: 12 mm benign gastric ulcer, treated",
      "H. pylori",
      "Hb 104 at discharge",
      "diclofenac and bought ibuprofen stopped; no NSAIDs; drug caution",
      "aspirin restarted 22 September, continue",
      "omeprazole 40 mg to about 18 November, stop two weeks, then 20 mg long term",
      "gastroenterology advice during the two weeks off",
      "eradication completes 28 September",
      "FBC at two and six weeks; iron until normal plus three months",
      "urea breath test first week of December",
      "review back pain, no NSAIDs"
    ],
    "notesLeftOut": [
      "admission observations, postural drop, urea, Blatchford score - acute detail, resolved",
      "transfusion (three units in total) and time of endoscopy, Forrest class, clips - procedural detail",
      "IV PPI infusion and nil by mouth - inpatient only",
      "codeine, paracetamol, laxative and physiotherapy - on the discharge prescription, not an action",
      "unchanged bisoprolol, ramipril, atorvastatin - unchanged",
      "social history - not relevant"
    ],
    "safety": [
      {
        "point": "No NSAIDs ever; drug caution to be added to record",
        "where": "paragraph 3"
      },
      {
        "point": "No other non-steroidal anti-inflammatory drug; low-dose aspirin restarted and continues on cardiology advice",
        "where": "paragraph 3"
      },
      {
        "point": "Omeprazole plan: 40 mg to about 18 November, two weeks off before breath test, then 20 mg long term on aspirin",
        "where": "paragraph 3"
      },
      {
        "point": "Gastroenterology to advise on stomach protection during the two weeks off omeprazole",
        "where": "paragraph 3"
      },
      {
        "point": "Breath test in the first week of December",
        "where": "paragraph 4"
      },
      {
        "point": "Full blood count at two and six weeks; iron continuation",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-referral-to-the-rapid-access-chest-pain-clinic-exertional-chest-pain": {
    "header": [
      "Dr Nicholas Ayodeji",
      "Rapid Access Chest Pain Clinic",
      "Stanmoor Hospital",
      "13 December 2025"
    ],
    "salutation": "Dear Dr Ayodeji,",
    "re": "Re: Mrs Geraldine Achterberg-Owusu, aged 63",
    "body": [
      "I am writing to refer Mrs Achterberg-Owusu, aged 63, with six weeks of typical exertional chest pain, for assessment within two weeks, as this cannot wait for a routine appointment.",
      "She describes central chest tightness after about 150 metres uphill, relieved by rest within two to three minutes. The pattern is stable, with no pain at rest, and glyceryl trinitrate spray has relieved it within two minutes.",
      "Her risk factors include type 2 diabetes, hypertension, cholesterol 6.4, current smoking of fifteen a day, and a strong family history: her father died suddenly aged 54 and her brother had bypass surgery aged 58. Her resting ECG and chest x-ray were normal.",
      "On 6 December I started aspirin 75 mg, atorvastatin 80 mg and bisoprolol, increased to 5 mg on 13 December. She knows to call an ambulance if pain persists five minutes after a second spray dose, and to stop driving and inform the licensing authority if her symptoms change. She has accepted a smoking cessation referral.",
      "I would be grateful for your assessment, with CT coronary angiography or your preferred investigation. She is available any weekday on her mobile telephone.",
      "Thank you for seeing her."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "Purpose, diagnosis and the requested time frame appear together, with the reason the GP feels it cannot be routine.",
      "selection": "The three typical features, the risk factors and the GTN response are kept; normal examination detail, unrelated history (hypothyroidism, pregnancies, cholecystectomy) and exact blood values are left out.",
      "organisation": "Symptoms, then risk, then treatment and safety advice already given, then the request and practical contact details.",
      "tone": "Clear and persuasive without exaggeration; urgency is justified by facts."
    },
    "notesUsed": [
      "six weeks typical exertional pain",
      "within two weeks, not routine",
      "about 150 m uphill",
      "relieved by rest in two to three minutes",
      "stable, none at rest",
      "GTN relief within two minutes",
      "type 2 diabetes, hypertension, cholesterol 6.4, smoker fifteen a day",
      "father died suddenly aged 54, brother bypass aged 58",
      "normal resting ECG and chest x-ray",
      "aspirin 75 mg, atorvastatin 80 mg, bisoprolol increased to 5 mg on 13 December",
      "ambulance rule",
      "driving advice",
      "smoking cessation referral accepted",
      "CT coronary angiography request; contact availability"
    ],
    "notesLeftOut": [
      "400 m on the flat, radiation to arm and jaw, cold and meals as triggers - the uphill threshold and rest relief already establish typicality",
      "HbA1c 61 and forty-year smoking duration - risk factors named without every figure",
      "quit date 1 January - the referral is the relevant fact",
      "blood pressure and examination findings - normal or not decision-relevant",
      "detailed bloods (haemoglobin, potassium, thyroid) - normal",
      "troponin not measured - expected for stable pain",
      "hypothyroidism, osteoarthritis, pregnancies, menopause, cholecystectomy - unrelated",
      "ramipril and metformin unchanged - continuing",
      "occupation, BMI - low relevance"
    ],
    "safety": [
      {
        "point": "GTN/ambulance rule",
        "where": "paragraph 4"
      },
      {
        "point": "Driving: stop and inform licensing authority if pain changes",
        "where": "paragraph 4"
      },
      {
        "point": "Assessment within two weeks",
        "where": "paragraph 1"
      }
    ]
  },
  "wri-medicine-urgent-referral-to-the-lung-cancer-service-persistent-cough-and-haemoptysis": {
    "header": [
      "Dr Sunita Ramgoolam",
      "Lung Cancer Multidisciplinary Team",
      "Ardley General Hospital",
      "19 February 2025"
    ],
    "salutation": "Dear Dr Ramgoolam,",
    "re": "Re: Mr Douglas Ferrant-Nwachukwu, aged 66",
    "body": [
      "I am writing to refer Mr Ferrant-Nwachukwu, a 66-year-old former smoker, urgently on the suspected cancer pathway with haemoptysis, weight loss and an apical lung mass.",
      "He has had a cough for nine weeks despite antibiotics, blood-streaked sputum on five occasions, new breathlessness, right-sided chest ache and hoarseness for ten days. He has lost ten kilograms unintentionally in seven months. Examination showed right apical dullness, clubbing and a firm 1.5 cm right supraclavicular node. His performance status is 1.",
      "His chest x-ray on 12 February showed a 4 cm right apical mass with right hilar enlargement. Of particular concern, his sodium was 128, falling to 126 on repeat, and his corrected calcium was 2.68, rising to 2.71.",
      "He smoked approximately 55 pack-years until six years ago and reports possible asbestos exposure as a plumber. He has mild COPD and no known allergies.",
      "I would be grateful for urgent assessment, with CT of the chest, abdomen and pelvis and consideration of biopsy, possibly of the supraclavicular node. He knows that cancer is a possibility, can attend at any time, and has asked that his daughter may telephone your team once he has been seen.",
      "Thank you for your help."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "States the pathway, the urgency and the three findings that justify it.",
      "selection": "Keeps the red flags, the node as a biopsy target, and the confirmed sodium and calcium the GP specifically flags. Normal observations, unrelated history and most negative systems enquiry are left out.",
      "organisation": "Symptoms and signs, then results, then exposure history, then the request with practical details.",
      "tone": "Direct and urgent but measured; \"cancer is a possibility\" mirrors what the patient was told."
    },
    "notesUsed": [
      "urgent suspected cancer pathway",
      "cough nine weeks despite antibiotics",
      "haemoptysis on five occasions",
      "new breathlessness, right chest ache, hoarseness ten days",
      "ten kg weight loss in seven months",
      "right apical dullness, clubbing, 1.5 cm supraclavicular node",
      "performance status 1",
      "x-ray 12 February: 4 cm right apical mass, hilar enlargement",
      "sodium 128 then 126; calcium 2.68 then 2.71",
      "55 pack-years, stopped six years ago",
      "possible asbestos exposure",
      "mild COPD; no known allergies",
      "CT chest/abdomen/pelvis, biopsy, node",
      "told cancer possible",
      "can attend any time; daughter may phone"
    ],
    "notesLeftOut": [
      "clubbing possibly long-standing, daughter is a nurse - cut for length",
      "observations and oxygen saturation - stable",
      "haemoglobin, ALP, CRP, albumin - secondary to the flagged sodium and calcium",
      "absence of SVC obstruction signs - negative findings",
      "hypertension, knee osteoarthritis, medication list - not relevant to the pathway",
      "wife's observations of afternoon sleeping - captured by performance status"
    ],
    "safety": [
      {
        "point": "Confirmed hyponatraemia and hypercalcaemia flagged",
        "where": "paragraph 3"
      },
      {
        "point": "Hoarseness of ten days flagged",
        "where": "paragraph 2"
      },
      {
        "point": "Allergies: none known",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-referral-to-endocrinology-thyrotoxicosis-in-a-young-woman": {
    "header": [
      "Dr Elias Mwangi",
      "Consultant Endocrinologist",
      "Thyroid Clinic",
      "Barrowmere Hospital",
      "21 March 2025"
    ],
    "salutation": "Dear Dr Mwangi,",
    "re": "Re: Miss Tanya Oduya-Whitfield, aged 31",
    "body": [
      "I am writing to refer Miss Oduya-Whitfield, aged 31, with newly diagnosed thyrotoxicosis consistent with Graves' disease, for your advice on treatment and on the timing of a planned pregnancy.",
      "She has lost weight from 66 kg to 58 kg over four months, with palpitations and tremor. She has lid retraction and mild proptosis, but full eye movements, no diplopia and normal acuity. Her TSH was less than 0.01 and free T4 39, and TSH receptor antibodies were strongly positive.",
      "Propranolol was started on 7 March, and her pulse is now 84. Carbimazole 20 mg daily was started today after baseline blood tests. She has a written warning about agranulocytosis and knows to stop carbimazole and seek an urgent full blood count if she develops a sore throat, mouth ulcers, fever or unexplained illness.",
      "Today's pregnancy test was negative, and she has reluctantly agreed to use reliable contraception until a plan is agreed. She smokes and has accepted a cessation referral.",
      "I would also value your view on whether an ophthalmology opinion is needed. She is a paramedic, asks whether she should be working, and can attend weekday mornings.",
      "Thank you for seeing her."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "Names the diagnosis and the two questions, treatment and pregnancy timing, that make the referral urgent.",
      "selection": "Eye findings are kept because the clinic must decide on ophthalmology; the carbimazole warning and contraception advice are kept for safety. The fuller symptom list, family history and first set of results are left out.",
      "organisation": "Diagnosis evidence, treatment and its safety advice, pregnancy, then the request and her work question.",
      "tone": "Professional and empathetic; her reluctance is acknowledged in one word."
    },
    "notesUsed": [
      "thyrotoxicosis consistent with Graves'",
      "planning pregnancy",
      "weight 66 to 58 kg over four months",
      "palpitations, tremor",
      "lid retraction, mild proptosis; full movements, no diplopia, normal acuity",
      "TSH <0.01, free T4 39 (repeat); TRAb strongly positive",
      "propranolol from 7 March, pulse 84",
      "carbimazole 20 mg started today after baseline bloods",
      "agranulocytosis warning",
      "negative pregnancy test; contraception until plan",
      "smoker; cessation referral",
      "ophthalmology question",
      "paramedic, work question, weekday mornings"
    ],
    "notesLeftOut": [
      "heat intolerance, menstrual change, goitre with bruit, lid lag, colour vision - supporting signs cut for length; diagnosis is already secure",
      "propranolol dose, cigarettes per day - not needed by the specialist",
      "four months trying to conceive - \"planned pregnancy\" conveys it",
      "first set of thyroid results - repeat confirms",
      "free T3 - free T4 conveys severity",
      "ECG and initial pulse 116 - current pulse more useful",
      "loose stools, irritability, fatigue - not decision-relevant",
      "family history - not needed for management",
      "last period date - negative test suffices",
      "normal FBC, LFT - baseline taken"
    ],
    "safety": [
      {
        "point": "Agranulocytosis warning on carbimazole",
        "where": "paragraph 3"
      },
      {
        "point": "Reliable contraception until plan agreed (carbimazole and pregnancy risk)",
        "where": "paragraph 4"
      },
      {
        "point": "Eye signs - ophthalmology question",
        "where": "paragraph 5"
      },
      {
        "point": "Baseline full blood count before carbimazole",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-medicine-referral-to-cardiology-newly-diagnosed-atrial-fibrillation": {
    "header": [
      "Dr Marcus Vaillancourt",
      "Consultant Cardiologist",
      "Ashworth General Hospital",
      "17 March 2025"
    ],
    "salutation": "Dear Dr Vaillancourt,",
    "re": "Re: Mr Roland Achebe-Marsh, aged 64",
    "body": [
      "I am writing to refer Mr Achebe-Marsh, aged 64, with symptomatic atrial fibrillation persisting despite rate control, for consideration of rhythm control.",
      "He presented on 3 March with four months of palpitations, now daily. His ECG confirmed atrial fibrillation at 116 beats per minute. Repeat thyroid function showed TSH 0.02 and free T4 26, consistent with untreated thyrotoxicosis, and an urgent endocrinology referral was made on 10 March. An echocardiogram is booked for 2 April.",
      "He had a transient ischaemic attack in 2019 and has hypertension, giving a stroke risk score of 3 and a bleeding risk score of 1. Apixaban 5 mg twice daily was started on 4 March. Bisoprolol was increased to 5 mg on 10 March, but his pulse remains irregular at 88. He reported drinking approximately 40 units weekly and has reduced this to about 15.",
      "I would value your opinion on the sequence of treatment, particularly whether his thyroid should be treated first and whether cardioversion or ablation should follow once he is euthyroid. He drives for work and has asked whether he can continue driving, whether anticoagulation is lifelong, and whether stopping alcohol would avoid treatment.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "Defines the problem and the specific purpose, rhythm control, in one sentence.",
      "selection": "Keeps the thyroid result, anticoagulation and its risk scores, alcohol intake and pending tests; omits routine bloods, examination detail, ambulatory BP readings and family history.",
      "organisation": "Presentation and key results, then risk and treatment, then the GP's question and the patient's three questions.",
      "tone": "Concise and collegial; the clinical question is framed so the cardiologist can answer it directly."
    },
    "notesUsed": [
      "symptomatic AF despite rate control; rhythm control",
      "presented 3 March, palpitations four months, now daily",
      "ECG AF rate 116",
      "TSH 0.02, free T4 26 on repeat",
      "endocrinology referral 10 March",
      "echo 2 April",
      "TIA 2019, hypertension; stroke score 3, bleeding score 1",
      "apixaban 5 mg bd from 4 March",
      "bisoprolol 5 mg from 10 March",
      "pulse 88 irregular today",
      "alcohol about 40 units, reduced to about 15",
      "thyroid first? cardioversion/ablation?",
      "drives for work; three questions"
    ],
    "notesLeftOut": [
      "breathlessness and one dizzy episode - symptoms summarised as \"symptomatic\"",
      "mileage of 20,000 a year - \"drives for work\" suffices",
      "tolerating apixaban - cut for length",
      "blood pressure readings and ambulatory monitoring - hypertension already stated",
      "routine bloods, chest x-ray - normal",
      "amlodipine, atorvastatin, ramipril - not central to the question",
      "thyroid antibodies pending - endocrinology will follow",
      "family history - low relevance",
      "occupation detail beyond driving"
    ],
    "safety": [
      {
        "point": "Anticoagulated with apixaban (previous TIA, stroke score 3)",
        "where": "paragraph 3"
      },
      {
        "point": "Untreated thyrotoxicosis with endocrinology referral pending",
        "where": "paragraph 2"
      },
      {
        "point": "Driving question (drives for work)",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-discharge-to-the-general-practitioner-diabetic-ketoacidosis-at-first-presentation": {
    "header": [
      "Dr Susan Pargeter",
      "The Broadmead Surgery",
      "13 May 2024"
    ],
    "salutation": "Dear Dr Pargeter,",
    "re": "Re: Miss Yusra Al-Habib, aged 19",
    "body": [
      "I am writing to inform you that Miss Al-Habib, aged 19, was admitted on 8 May 2024 with diabetic ketoacidosis at first presentation of type 1 diabetes and was discharged today.",
      "Her pH was 7.09 and ketones 5.8 mmol/L; ketosis resolved on 9 May without complications. GAD antibodies were positive and her HbA1c was 108 mmol/mol.",
      "She takes insulin degludec 14 units at 22:00 and insulin aspart with meals at 1 unit per 10 grams of carbohydrate, with a correction of 1 unit per 3 mmol/L above 8. She self-injects, uses a flash sensor and has a ketone meter and hypoglycaemia kit. She has written sick day rules, including never omitting basal insulin, and her flatmate can use the glucagon kit. She must inform the licensing authority before she starts driving.",
      "Follow-up includes a nurse telephone review on 15 May and clinic on 6 June. Please add her to the diabetes register, issue repeat prescriptions for insulin, needles, sensors, strips and glucagon, and arrange retinal and foot screening within three months.",
      "She declined psychology support, which clinic will offer again. She has asked that no letter be sent to her home address.",
      "Thank you for your care."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Foundation Doctor"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "Admission, diagnosis and discharge are given together so the GP knows at once that this is a new type 1 diagnosis.",
      "selection": "The insulin regimen, safety education, follow-up and the practice's tasks are kept. Hour-by-hour treatment, admission observations and the ward diary are left out as they are complete.",
      "organisation": "Diagnosis, then current regimen and safety, then follow-up and requests, then her emotional state and the privacy request.",
      "tone": "Supportive and respectful; her wish about letters is stated plainly so it is honoured."
    },
    "notesUsed": [
      "admitted 8 May 2024, discharged today (13 May)",
      "DKA, first presentation type 1",
      "pH 7.09, ketones 5.8",
      "resolved 9 May, no complications",
      "GAD positive, HbA1c 108",
      "degludec 14 units at 22:00; aspart 1 unit/10 g; correction 1 unit/3 mmol above 8",
      "self-injects, flash sensor, ketone meter, hypo kit",
      "sick day rules, never omit basal",
      "flatmate trained in glucagon",
      "licensing authority before driving",
      "follow-up 15 May, 6 June",
      "register, repeat prescriptions, screening in three months",
      "declined psychology, to be offered again",
      "no letter to home address"
    ],
    "notesLeftOut": [
      "presenting symptoms and no precipitant - resolved; the diagnosis is the key fact",
      "structured education in September, meters in the prescription list - cut for length; arranged by the hospital",
      "tearfulness - the psychology offer carries the point",
      "admission observations and full gas - acute, resolved",
      "infusion times and potassium schedule - inpatient detail",
      "creatinine recovery, C-peptide, coeliac and thyroid - normal or confirmatory",
      "ward progress diary - completed",
      "canteen eating, bar work, alcohol on Fridays - covered by education",
      "annual review and influenza vaccine - routine; omitted for length",
      "parents abroad - private, beyond the address request"
    ],
    "safety": [
      {
        "point": "Sick day rules - never omit basal insulin",
        "where": "paragraph 3"
      },
      {
        "point": "Hypoglycaemia kit; flatmate trained with glucagon",
        "where": "paragraph 3"
      },
      {
        "point": "Inform licensing authority before driving",
        "where": "paragraph 3"
      },
      {
        "point": "Repeat prescriptions and screening within three months",
        "where": "paragraph 4"
      },
      {
        "point": "No letter to home address",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-medicine-referral-to-gastroenterology-iron-deficiency-anaemia-in-an-older-man": {
    "header": [
      "Dr Ingrid Halvorsen",
      "Consultant Gastroenterologist",
      "Marlowe Hospital",
      "16 June 2025"
    ],
    "salutation": "Dear Dr Halvorsen,",
    "re": "Re: Mr Frederick Osei-Bonsu, aged 76",
    "body": [
      "I am writing to request urgent bidirectional endoscopy for Mr Osei-Bonsu, a 76-year-old man with unexplained iron deficiency anaemia.",
      "He reports six weeks of tiredness and breathlessness, with no overt bleeding or change in bowel habit, and he has lost five kilograms over eight months. Examination, including rectal examination, was normal. His haemoglobin was 88, with a mean cell volume of 71 and ferritin 6, and it fell to 86 despite two weeks of oral iron. His faecal immunochemical test was strongly positive at 84 µg Hb/g, and coeliac serology was negative.",
      "He takes rivaroxaban 20 mg daily for atrial fibrillation and has coronary stents. Today I stopped aspirin, which he had been taking unintentionally alongside the rivaroxaban, and over-the-counter naproxen, and started lansoprazole 30 mg daily. Naproxen may have contributed but does not explain the overall picture. I would be grateful for your instructions on when to stop the rivaroxaban before the procedure.",
      "He lives alone and will need transport. He knows that cancer is a possibility and has asked to be seen at Marlowe, as his niece can drive him there.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 188,
    "commentary": {
      "opening": "The procedure requested, its urgency and the indication are stated in the first sentence.",
      "selection": "Red flags (positive FIT, weight loss, no iron response) and the anticoagulant question are kept. Normal tests, unrelated history and detailed frailty information are reduced to what affects the procedure.",
      "organisation": "Evidence for urgency, then medication and the rivaroxaban question, then practical and patient factors.",
      "tone": "Polite and precise; the GP's caution about the anticoagulant is expressed as a request for guidance."
    },
    "notesUsed": [
      "urgent bidirectional endoscopy",
      "unexplained IDA, age 76",
      "six weeks tiredness and breathlessness",
      "no overt bleeding, bowels unchanged",
      "five kg loss in eight months",
      "normal examination including rectal",
      "Hb 88, MCV 71, ferritin 6; Hb 86 after two weeks iron",
      "FIT 84 µg Hb/g",
      "coeliac negative",
      "rivaroxaban 20 mg for AF; stents",
      "aspirin and naproxen stopped today; lansoprazole 30 mg",
      "naproxen not sufficient explanation",
      "instructions on stopping rivaroxaban",
      "lives alone, needs transport",
      "told cancer possible",
      "wishes to be seen at Marlowe; niece drives"
    ],
    "notesLeftOut": [
      "walking stick, independence detail - transport need is the procedural point",
      "agreed to referral - implied",
      "observations and normal chest/lymph exam - non-contributory",
      "normal renal, liver, thyroid, B12 tests - not decision-relevant",
      "hip osteoarthritis, diabetes - minor for the procedure",
      "unchanged bisoprolol, atorvastatin, ramipril and ferrous fumarate dose",
      "no previous surgery or endoscopy, family history negative - negatives"
    ],
    "safety": [
      {
        "point": "Anticoagulated with rivaroxaban - needs specialist instruction before stopping",
        "where": "paragraph 3"
      },
      {
        "point": "Aspirin and naproxen stopped; PPI started",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-medicine-referral-to-neurology-a-first-seizure-in-an-adult": {
    "header": [
      "Dr Yannick Obeng",
      "Consultant Neurologist",
      "First Seizure Clinic",
      "Halewood Hospital",
      "21 September 2025"
    ],
    "salutation": "Dear Dr Obeng,",
    "re": "Re: Mr Dominic Whitlock-Ijeoma, aged 28",
    "body": [
      "I am writing to refer Mr Whitlock-Ijeoma, a 28-year-old scaffolder who had a first generalised tonic-clonic seizure on 20 September, for assessment.",
      "His partner saw him stare, fall from his chair and shake rhythmically for one to two minutes, with cyanosis, incontinence and a lateral tongue bite, followed by twenty-five minutes of confusion. He had slept only four hours. Over the past year, he has had three or four brief episodes of a sense of having lived the moment before, with a rising stomach sensation, suggesting focal onset with retained awareness.",
      "Examination and ECG were normal, with a corrected QT interval of 412 ms. Bloods were normal apart from an ALT of 62; a drug screen was negative.",
      "He has been told not to drive until the licensing authority permits it, and not to work at height until assessed. Home safety advice included not carrying his daughter on the stairs, and his partner knows what to do if it recurs.",
      "I would value your assessment, with EEG and imaging as you see fit, and advice on whether treatment is indicated. He is worried about his job and has asked to be seen soon.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "Names the event, its date and the clinic's role, with his job signalling the stakes.",
      "selection": "The witness account, possible focal aura, provoking factor and ECG are kept because they shape diagnosis and treatment. Full normal neurological detail and minor history are condensed.",
      "organisation": "The event, then investigations, then safety advice already given, then the questions.",
      "tone": "Objective and reassuring; his worry is reported without overstatement."
    },
    "notesUsed": [
      "first GTCS 20 September",
      "scaffolder, age 28",
      "witnessed stare, fall, one to two minutes shaking, cyanosis, incontinence, tongue bite",
      "twenty-five minutes confusion",
      "four hours sleep",
      "three or four episodes of having lived the moment before, rising stomach sensation",
      "focal onset with retained awareness",
      "normal exam and ECG, QTc 412 ms",
      "ALT 62, drug screen negative",
      "driving, work at height, home safety, partner advice",
      "EEG, imaging, treatment question",
      "worried about job, wants to be seen soon"
    ],
    "notesLeftOut": [
      "maternal cousin with epilepsy - weak family history, cut for length",
      "ECG detail (no pre-excitation, no Brugada) - summarised as normal",
      "no imaging arranged - the request for imaging makes this clear",
      "telling his employer, informing the authority himself - cut for length",
      "exact time 06:40 and post-ictal sleep - not needed",
      "alcohol at a party two nights earlier - minor; sleep deprivation is the main provocation",
      "normal individual blood values - \"normal\" suffices",
      "detailed home safety list - summarised",
      "partner and child living arrangements beyond the stair advice"
    ],
    "safety": [
      {
        "point": "No driving until licensing authority permits; inform them himself",
        "where": "paragraph 4"
      },
      {
        "point": "No work at height",
        "where": "paragraph 4"
      },
      {
        "point": "Home safety (not carrying daughter on stairs); partner knows what to do",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-referral-to-dermatology-a-changing-pigmented-lesion": {
    "header": [
      "Dr Priya Selvarajah",
      "Consultant Dermatologist",
      "Pigmented Lesion Clinic",
      "Fenwick Hospital",
      "4 July 2025"
    ],
    "salutation": "Dear Dr Selvarajah,",
    "re": "Re: Mrs Deborah Kilbride-Ansah, aged 47",
    "body": [
      "I am writing to refer Mrs Kilbride-Ansah, a 47-year-old woman, urgently with a changing pigmented lesion on her left calf which I suspect may be a melanoma.",
      "This long-standing mole has darkened and grown over five months, as her enclosed February photographs confirm. It has recently bled, once without trauma, and itches intermittently. It measures 11 mm, is asymmetrical with an irregular, notched border, and has a slightly raised 3 mm black area. Dermatoscopy showed an atypical peripheral network and irregular dots and globules, with a seven-point checklist score of 5. There is no lymphadenopathy.",
      "Her risk factors include skin type 2, previous sunbed use, blistering sunburn before the age of eighteen and a father who had a melanoma. She has treated hypothyroidism, takes no anticoagulant and is allergic to penicillin, which causes a rash.",
      "She knows that melanoma is a possibility and has agreed not to use sunbeds. She has asked whether her daughter should be checked, which I have left for your team.",
      "I would be grateful for urgent assessment and excision biopsy as indicated. Photographs and the dermatoscopic image are attached, and she can attend at short notice.",
      "Thank you for seeing her."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "Purpose, site and the suspected diagnosis are stated in one sentence, matching the urgent pathway.",
      "selection": "Change over time, the ABCD and dermatoscopic features, risk factors and the procedure-relevant facts (no anticoagulant, penicillin allergy) are kept. Occupation, social details and negative systems enquiry are left out.",
      "organisation": "Lesion history and examination, then risk and background, then what she knows, then the request.",
      "tone": "Clear and urgent but calm, using the same wording she was given."
    },
    "notesUsed": [
      "changing lesion left calf, urgent",
      "darker and larger over five months",
      "February photographs enclosed",
      "bled, once without trauma; itches",
      "11 mm, asymmetrical, notched border, 3 mm raised black area",
      "dermatoscopy findings, seven-point score 5",
      "no lymphadenopathy",
      "skin type 2, sunbeds, blistering sunburn before eighteen, father with melanoma",
      "hypothyroidism treated",
      "no anticoagulant",
      "penicillin allergy - rash",
      "told melanoma possible; agreed no sunbeds",
      "daughter question",
      "excision biopsy request; photos attached; short notice"
    ],
    "notesLeftOut": [
      "three other atypical naevi with sites and sizes - photographed and documented for baseline; not the reason for referral",
      "the patient's question about her other moles - left to the clinic",
      "outdoor work in her twenties - minor",
      "migraine - not relevant",
      "levothyroxine dose - not needed",
      "systemic enquiry and weight - negative",
      "family and job details - not relevant"
    ],
    "safety": [
      {
        "point": "Penicillin allergy (rash)",
        "where": "paragraph 3"
      },
      {
        "point": "No anticoagulant (relevant to excision)",
        "where": "paragraph 3"
      },
      {
        "point": "Advised not to use sunbeds",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-transfer-to-the-high-dependency-unit-severe-community-acquired-pneumonia": {
    "header": [
      "Dr Anwar Faisal",
      "Consultant in Intensive Care Medicine",
      "High Dependency Unit",
      "Kelvinside Hospital",
      "12 January 2025"
    ],
    "salutation": "Dear Dr Faisal,",
    "re": "Re: Mr Alasdair MacQuarrie, aged 68",
    "body": [
      "I am writing to transfer Mr MacQuarrie, aged 68, with severe community-acquired pneumonia and type 1 respiratory failure, for organ support and consideration of non-invasive respiratory support.",
      "His severity score on admission on 11 January was 5 out of 5, and at 04:00 today his pO2 was 7.6 on high-flow oxygen. A repeat chest x-ray shows spreading right-sided consolidation and a new area at the left base. His creatinine has risen to 178 from a baseline of 88, and his platelets have fallen to 92.",
      "At transfer, his respiratory rate is 32, saturations 91% on 15 litres, pulse 112 and blood pressure 100/60. Urine output is 25 ml/hour on hourly monitoring. Antibiotics were escalated to piperacillin-tazobactam with clarithromycin at 08:00. Cultures and urinary antigens are pending, and a repeat lactate and gas are due at 10:00.",
      "Please note that metformin remains withheld, his thromboprophylaxis dose was reduced today, and he has been nil by mouth since 04:00. He has COPD without carbon dioxide retention and no known allergies. He wishes to receive all treatment, including ventilation if likely to help.",
      "His wife is on the ward and would like to speak to your team.",
      "Thank you for accepting him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Foundation Doctor"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "States the diagnosis, the failure being treated and exactly what the unit is being asked to provide.",
      "selection": "Current physiology, the trajectory, pending results and safety items (metformin, reduced prophylaxis, nil by mouth, escalation wishes) are kept. The full timeline of the first hours and admission bloods are left out.",
      "organisation": "Deterioration, then current state and treatment, then safety notes and wishes, then the family request.",
      "tone": "Concise and factual, suited to an urgent handover."
    },
    "notesUsed": [
      "severe CAP, type 1 respiratory failure",
      "organ support, NIV consideration",
      "severity score 5/5 on admission 11 January",
      "pO2 7.6 at 04:00 on high flow",
      "repeat x-ray: extension and new left base area",
      "creatinine 178 (baseline 88); platelets 92",
      "RR 32, sats 91% on 15 L, pulse 112, BP 100/60",
      "urine 25 ml/hour, hourly",
      "piperacillin-tazobactam with clarithromycin at 08:00",
      "cultures and antigens pending; lactate and gas at 10:00",
      "metformin withheld",
      "VTE prophylaxis reduced",
      "nil by mouth since 04:00",
      "COPD without CO2 retention; no allergies",
      "wishes full treatment including ventilation",
      "wife wishes to speak to team"
    ],
    "notesLeftOut": [
      "timed admission treatment log - completed",
      "admission observations and bloods - superseded by current values",
      "cannula sites - visible on arrival",
      "glucose range - noted in chart; omitted for length",
      "baseline function details - escalation wish covers the decision",
      "wife has no formal authority - not needed while he has capacity"
    ],
    "safety": [
      {
        "point": "Metformin withheld with rising creatinine",
        "where": "paragraphs 2 and 4"
      },
      {
        "point": "VTE prophylaxis dose reduced (falling platelets, rising creatinine)",
        "where": "paragraphs 2 and 4"
      },
      {
        "point": "Nil by mouth since 04:00",
        "where": "paragraph 4"
      },
      {
        "point": "Escalation wishes: all treatment including ventilation",
        "where": "paragraph 4"
      },
      {
        "point": "No CO2 retention (oxygen targets)",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-referral-to-the-early-intervention-service-a-first-episode-of-psychosis": {
    "header": [
      "Dr Leila Farhadi",
      "Consultant Psychiatrist",
      "Early Intervention in Psychosis Service",
      "Beckworth",
      "15 October 2025"
    ],
    "salutation": "Dear Dr Farhadi,",
    "re": "Re: Mr Nathaniel Obi-Sørensen, aged 22",
    "body": [
      "I am writing to refer Mr Obi-Sørensen, aged 22, with a probable first episode of psychosis, for urgent assessment, at home if possible, as he is unlikely to attend a clinic.",
      "His mother dates the change to May. He has heard two commenting voices most days for four months and holds persecutory and referential beliefs with full conviction, believing he is being followed and that a television programme contained a message for him. He has left his flat only at night for six weeks, and his insight is partial.",
      "He denies thoughts of harming himself or others, with no history of self-harm or violence. However, self-neglect is significant: he lives alone, eats once a day and has lost 13 kg since March. Physical examination and blood tests were normal, and a urine drug screen was negative. He used cannabis until a year ago, and a maternal uncle has schizophrenia.",
      "I have not started an antipsychotic, preferring your team to assess him first. He has agreed to the referral. His mother visits daily, is willing to stay with him, and has the crisis team number.",
      "He is at home most days after midday.",
      "Thank you for your help."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "Purpose, urgency and the request for a home visit are combined, because the setting is the key practical point.",
      "selection": "Psychotic symptoms, duration, risk, self-neglect, exclusions and what has not been done are kept. Mental state detail, individual blood tests and the full employment story are condensed.",
      "organisation": "Symptoms, then risk and physical findings, then current plan and support, then access details.",
      "tone": "Respectful and non-stigmatising; beliefs are described, not judged."
    },
    "notesUsed": [
      "probable first episode psychosis, age 22",
      "urgent, home assessment, unlikely to attend clinic",
      "change since May",
      "two commenting voices four months",
      "persecutory and referential beliefs, full conviction",
      "only out at night six weeks",
      "partial insight",
      "no harm ideation; no self-harm or violence",
      "self-neglect: lives alone, eats once daily, 13 kg loss since March",
      "normal exam, bloods, drug screen",
      "cannabis stopped a year ago; uncle with schizophrenia",
      "no antipsychotic started",
      "agreed to referral",
      "mother visits daily, will stay, has crisis number",
      "home after midday"
    ],
    "notesLeftOut": [
      "smoke alarm taped over, curtains closed - illustrative; the conviction and withdrawal are already stated",
      "job loss in August - functional decline shown by self-neglect",
      "individual blood results and HIV/syphilis - normal",
      "sleep reversal detail - covered by night-only going out",
      "mental state detail (speech, mood) - summarised by insight and conviction",
      "no firearms, fourth floor - low relevance given no harm ideation",
      "hospital question - answered; not needed"
    ],
    "safety": [
      {
        "point": "Risk: no harm to self or others",
        "where": "paragraph 3"
      },
      {
        "point": "Significant self-neglect: 13 kg loss, lives alone",
        "where": "paragraph 3"
      },
      {
        "point": "No antipsychotic started",
        "where": "paragraph 4"
      },
      {
        "point": "Mother has crisis team number",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-discharge-to-the-general-practitioner-pulmonary-embolism": {
    "header": [
      "Dr Owen Castellanos",
      "The Thornbury Practice",
      "5 February 2025"
    ],
    "salutation": "Dear Dr Castellanos,",
    "re": "Re: Miss Charlotte Nkemdirim, aged 34",
    "body": [
      "I am writing about Miss Nkemdirim, aged 34, admitted on 2 February 2025 with pulmonary emboli and a left popliteal deep vein thrombosis and discharged today, as some actions are required.",
      "The provoking factors were a long-haul flight and the combined oral contraceptive pill. She was low risk and did not require thrombolysis.",
      "She started apixaban 10 mg twice daily on 2 February, stepping down to 5 mg twice daily on 9 February. Please issue the continuing prescription from 9 February and check her renal function at three months. She has an alert card and knows to seek urgent help for severe or unusual bleeding, or new breathlessness or chest pain.",
      "The combined pill has been stopped and must never be restarted. She is using condoms and would like to discuss alternative contraception at the practice; please arrange this. Thrombophilia screening should not be requested now, and antiphospholipid testing will be done at the twelve-week review.",
      "Anticoagulation clinic reviews are at six and twelve weeks, when the duration of treatment will be decided. As a flight attendant, she has been advised not to fly before the six-week review.",
      "Thank you for your continued care."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Foundation Doctor"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "Diagnosis, dates and a signal that the practice has tasks, so the GP reads on for actions.",
      "selection": "Anticoagulant plan, bleeding advice, the permanent pill ban, testing instructions and follow-up are kept. Admission observations, imaging detail and ward progress are left out as they do not change GP care.",
      "organisation": "Summary, anticoagulation, contraception and testing, then follow-up and fitness to fly.",
      "tone": "Clear and directive where safety demands (\"must never\"), courteous in requests."
    },
    "notesUsed": [
      "admitted 2 February 2025, discharged 5 February",
      "PE and left popliteal DVT",
      "provoking factors: long-haul flight, combined pill",
      "low risk, no thrombolysis",
      "apixaban 10 mg bd from 2 February, 5 mg bd from 9 February",
      "prescription from 9 February; renal function at three months",
      "alert card and bleeding/symptom advice",
      "combined pill stopped permanently",
      "condoms; contraception at practice",
      "no thrombophilia screen now; antiphospholipid at twelve weeks",
      "reviews six and twelve weeks; duration decision",
      "flight attendant; no flying before six weeks"
    ],
    "notesLeftOut": [
      "presenting symptoms and haemodynamic stability - resolved; cut for length",
      "admission observations, Wells score, CTPA and Doppler detail - diagnosis confirmed",
      "normal cause screen (bloods, breast exam) - completed",
      "ward progress and anxiety - resolved",
      "list of alternative contraceptive methods - for the practice discussion",
      "pain relief with paracetamol - simple"
    ],
    "safety": [
      {
        "point": "Apixaban step-down on 9 February; prescription from 9 February",
        "where": "paragraph 3"
      },
      {
        "point": "Bleeding and symptom advice; alert card",
        "where": "paragraph 3"
      },
      {
        "point": "Combined pill must never be restarted; contraception to be arranged",
        "where": "paragraph 4"
      },
      {
        "point": "Thrombophilia screen not to be requested now",
        "where": "paragraph 4"
      },
      {
        "point": "Renal function at three months",
        "where": "paragraph 3"
      },
      {
        "point": "No flying before six-week review",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-medicine-referral-to-rheumatology-suspected-giant-cell-arteritis": {
    "header": [
      "Dr Miriam Szabo",
      "Consultant Rheumatologist",
      "Rapid Access Vasculitis Clinic",
      "Ellerby Hospital",
      "8 November 2025"
    ],
    "salutation": "Dear Dr Szabo,",
    "re": "Re: Mrs Vera Konstantopoulou, aged 74",
    "body": [
      "I am writing to refer Mrs Konstantopoulou, aged 74, with suspected giant cell arteritis, for assessment today or tomorrow. I started high-dose prednisolone this morning because of transient visual loss.",
      "She has had three weeks of new right temporal headache with scalp tenderness, ten days of jaw claudication and six weeks of girdle stiffness. Four days ago she had painless right visual loss lasting about five minutes, with full recovery. Her right temporal artery is thickened, nodular and tender, with reduced pulsation. Visual acuity is 6/9 in both eyes, with no relative afferent pupillary defect, and her optic discs appear normal.",
      "Inflammatory markers were taken at 09:40, before treatment, and are awaited; her C-reactive protein on 20 October was 62. Prednisolone 60 mg was given at 09:55, with omeprazole, aspirin and bone protection for her osteopenia.",
      "She knows not to stop or reduce the steroid herself and to attend the emergency department immediately if she loses vision in either eye.",
      "I would be grateful for temporal artery biopsy or vascular ultrasound, as you prefer. I will send the results when reported. Her daughter can bring her this afternoon.",
      "Thank you for seeing her urgently."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "Gives the suspected diagnosis, the time frame and the fact that steroids are already started, which affects biopsy timing.",
      "selection": "Cranial symptoms, the visual episode, artery findings, eye examination and the timing of bloods and steroids are kept. Normal systemic examination and unrelated history are left out.",
      "organisation": "Symptoms and signs, then investigations and treatment, then safety advice given, then the request and transport.",
      "tone": "Urgent and precise, with exact times because they matter to interpretation."
    },
    "notesUsed": [
      "suspected GCA, age 74",
      "today or tomorrow",
      "prednisolone started because of visual loss",
      "three weeks right temporal headache, scalp tenderness",
      "ten days jaw claudication",
      "six weeks girdle stiffness",
      "transient right visual loss four days ago, five minutes",
      "right temporal artery thickened, nodular, tender, reduced pulse",
      "acuity 6/9 both, no RAPD, discs appear normal",
      "inflammatory markers at 09:40 before steroid, awaited",
      "CRP 62 on 20 October",
      "prednisolone 60 mg at 09:55; omeprazole, aspirin, bone protection",
      "osteopenia",
      "do not stop steroid; ED if vision lost",
      "biopsy or ultrasound; results to follow; daughter can bring her this afternoon"
    ],
    "notesLeftOut": [
      "weight loss, night sweats - systemic features cut for length; cranial features carry the diagnosis",
      "platelets 466 on 20 October - CRP conveys the inflammation",
      "names of the bone-protection drugs - \"bone protection\" suffices for the reader",
      "limits of direct fundoscopy - cut for length",
      "observations and normal cardiovascular exam - non-contributory",
      "haemoglobin 106 - less important than CRP and platelets",
      "other bloods sent - awaited",
      "drug doses for bone and gastric protection - not needed by the rheumatologist",
      "hypertension on amlodipine, osteoarthritis - unrelated",
      "lives alone, does not drive - transport covered by daughter"
    ],
    "safety": [
      {
        "point": "Steroid started before biopsy; bloods taken before first dose",
        "where": "paragraph 3"
      },
      {
        "point": "Must not stop or reduce steroid herself",
        "where": "paragraph 4"
      },
      {
        "point": "Attend emergency department immediately if vision lost",
        "where": "paragraph 4"
      },
      {
        "point": "Bone and gastric protection with osteopenia",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-nursing-advice-letter-to-carer-following-copd-exacerbation-discharge": {
    "header": [
      "Mr Joseph Mensah",
      "Son and main carer of Mr Kofi Mensah",
      "26 June 2026"
    ],
    "salutation": "Dear Mr Mensah,",
    "re": "Re: Your father, Mr Kofi Mensah, aged 75",
    "body": [
      "I am writing to advise you on caring for your father at home following his discharge today, 26 June 2026. He was admitted on 18 June 2026 with a flare-up of his lung condition caused by a chest infection, his third admission this year.",
      "His breathing had returned to his usual level by day six, and he is eating well again. Please make sure that he takes the remaining two doses of prednisolone, a steroid tablet, and the final three days of his antibiotic. He should continue his inhalers, using the technique you practised on the ward, and his furosemide each morning.",
      "He will now use home oxygen at 1 litre overnight. Nobody should smoke near the equipment, and naked flames, candles and paraffin-based creams must be avoided. The fire service has been informed.",
      "Please contact his GP the same day if he becomes more breathless at rest, if his sputum changes in colour or amount, or if he develops a fever or new confusion.",
      "He should see his GP in one week, and a referral to pulmonary rehabilitation, an exercise and breathing programme, is pending.",
      "Please contact the ward if you have any questions."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Respiratory Ward"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The purpose comes first, followed by why he was in hospital, explained in plain words for a carer rather than a clinician.",
      "selection": "Only what the son must do or watch for is kept; admission results, past history and unrelated requests are left out.",
      "organisation": "Purpose, then progress and medicines, then oxygen safety, then warning signs, then follow-up.",
      "tone": "Warm but clear; medical terms such as prednisolone and pulmonary rehabilitation are briefly explained."
    },
    "notesUsed": [
      "admitted 18 June, discharged 26 June 2026; chest infection; third admission this year",
      "breathing back to baseline by day six; eating well",
      "prednisolone two doses and antibiotic three days remaining",
      "inhalers continued; technique reinforced with the son; furosemide each morning",
      "home oxygen 1 litre overnight; no smoking, naked flames, candles or paraffin-based creams; fire service notified",
      "warning signs needing same-day contact",
      "GP review in one week; pulmonary rehabilitation referral pending"
    ],
    "notesLeftOut": [
      "admission observations, chest X-ray and CRP - hospital detail the carer does not need to act on",
      "current saturation range - normal for him, nothing for the carer to act on",
      "inpatient treatment detail (nebulisers, controlled oxygen targets, physiotherapy) - completed",
      "past history (diagnosis 2013, ex-smoker, heart failure, knee osteoarthritis) - known to the family",
      "furosemide dose, exact inhaler names - on the discharge medication list; the letter stresses continuing them",
      "social detail (flat, perching stool, radio) - the son already knows it",
      "bus pass and dental appointment - not relevant to his care plan"
    ],
    "safety": [
      {
        "point": "Oxygen fire safety: no smoking, naked flames, candles or paraffin-based creams near the oxygen",
        "where": "paragraph 3"
      },
      {
        "point": "Warning signs needing same-day contact: breathlessness at rest, sputum change, fever, new confusion",
        "where": "paragraph 4"
      },
      {
        "point": "Complete the remaining prednisolone and antibiotic courses",
        "where": "paragraph 2"
      }
    ]
  },
  "wri-nursing-discharge-advice-for-new-mother-and-newborn-postnatal-ward": {
    "header": [
      "Ms Fiona Doyle",
      "Community Midwife",
      "26 June 2026"
    ],
    "salutation": "Dear Ms Doyle,",
    "re": "Re: Mrs Amina Yusuf, aged 29, and her baby daughter",
    "body": [
      "I am writing to request a home visit within 48 hours for Mrs Yusuf and her daughter, who are being discharged today, 26 June 2026. She had a normal vaginal birth on 24 June 2026 at 39 weeks and 2 days. This is her first baby.",
      "Mrs Yusuf has a first-degree perineal tear, unsutured and healing well. Her after-pains are controlled with paracetamol and her observations are stable. She takes ferrous sulphate 200 mg daily, as her booking haemoglobin was 108. She was slightly tearful on day two, which she attributes to tiredness, but she is bonding well. I would be grateful if you could review her mood and perineal healing.",
      "Breastfeeding is established, with a good latch and eight to ten feeds in 24 hours. The baby developed mild physiological jaundice on day two; her bilirubin was below the treatment line and phototherapy was not required. She weighed 3.42 kg today, back to her birth weight of 3.4 kg. Please monitor her jaundice and feeding, and weigh her at your visit.",
      "Newborn screening was completed on 26 June, and vitamin K was given at birth.",
      "Thank you for your continued care of Mrs Yusuf and her baby."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Midwife, Postnatal Ward"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The request and its timing, a home visit within 48 hours, open the letter, followed by the essential birth details.",
      "selection": "Points the midwife must check are kept; delivery details that change nothing and personal enquiries are left out.",
      "organisation": "Request, then the mother, then the baby, then screening already done, so that each check sits with its findings.",
      "tone": "Collegial and concise, as between midwives."
    },
    "notesUsed": [
      "discharged 26 June; normal vaginal birth 24 June at 39 weeks and 2 days; first baby",
      "first-degree tear, unsutured, healing well",
      "after-pains controlled with paracetamol; observations stable",
      "ferrous sulphate 200 mg daily; booking haemoglobin 108",
      "tearful on day two, bonding well; mood to be reviewed at home visit",
      "breastfeeding established, good latch, eight to ten feeds in 24 hours",
      "mild physiological jaundice, below treatment line, no phototherapy",
      "weight 3.42 kg today, back to birth weight of 3.4 kg",
      "newborn screening completed 26 June; vitamin K given",
      "plan: home visit within 48 hours; monitor jaundice, feeding, weight, mood, perineum"
    ],
    "notesLeftOut": [
      "second stage duration and blood loss of 250 ml - normal, no action needed",
      "individual observation values, bladder and bowel function - normal; summarised as stable",
      "glucose tolerance test - normal, no bearing on postnatal care",
      "meconium and urine times - normal and already passed",
      "Edinburgh score not indicated - covered by the request to review mood",
      "language (English good), former job - no interpreter needed, not relevant",
      "birth registration and baby massage - she can raise these at the visit"
    ],
    "safety": [
      {
        "point": "Neonatal jaundice to be monitored",
        "where": "paragraph 3"
      },
      {
        "point": "Baby weighed 3.42 kg today, back to birth weight of 3.4 kg - weigh again at visit",
        "where": "paragraph 3"
      },
      {
        "point": "Maternal mood to be reviewed (tearful on day two)",
        "where": "paragraph 2"
      },
      {
        "point": "Home visit within 48 hours",
        "where": "paragraph 1"
      }
    ]
  },
  "wri-nursing-discharge-advice-to-parents-of-an-asthmatic-child-paediatric-ward": {
    "header": [
      "Mr and Mrs Tran",
      "Parents of Lily Tran",
      "26 June 2026"
    ],
    "salutation": "Dear Mr and Mrs Tran,",
    "re": "Re: Lily Tran, aged 6 years",
    "body": [
      "I am writing to advise you on caring for Lily at home following her discharge today, 26 June 2026. She was admitted on 23 June 2026 with an asthma attack brought on by a chest infection.",
      "Lily responded well to treatment and is now breathing comfortably, eating and playing normally. Please give her the remaining two doses of prednisolone, her steroid medicine, so that she completes the course.",
      "She must take her beclometasone preventer inhaler twice every day, even when she seems well, as it reduces the risk of further attacks. Her salbutamol reliever inhaler should be used when needed, always with the new spacer and mask, using the technique you practised with us. Please follow the written asthma plan you have been given.",
      "Please make an emergency call immediately, rather than booking an appointment, if her breathing gets worse instead of better, if her lips or face turn blue, if she is too breathless to talk or eat, or if she needs her reliever more often than every four hours.",
      "Lily should see her GP for a review in one week.",
      "Please contact the ward if you have any questions."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Paediatric Ward"
    ],
    "bodyWords": 191,
    "commentary": {
      "opening": "The purpose comes first, with a plain explanation of why Lily was admitted.",
      "selection": "Medicines, inhaler use, emergency signs and follow-up are kept; hospital readings and unrelated questions are left out.",
      "organisation": "Purpose, then progress and the steroid course, then daily inhalers, then emergency signs, then follow-up.",
      "tone": "Reassuring yet firm for parents, with plain words and a clear instruction on when to call for help."
    },
    "notesUsed": [
      "admitted 23 June, discharged 26 June 2026; asthma exacerbation triggered by chest infection",
      "responded well; playing and eating normally",
      "prednisolone two doses remaining",
      "beclometasone preventer twice daily, including when well",
      "salbutamol with spacer as required; new spacer and mask supplied; technique demonstrated",
      "written asthma plan given",
      "warning signs meaning an emergency call",
      "GP review in one week"
    ],
    "notesLeftOut": [
      "admission observations and inpatient treatment - completed hospital detail parents do not need to act on",
      "past history (diagnosed at four, previous emergency visits, infant eczema) - known to the parents",
      "school absence and sibling - not needed for home management",
      "pet cat in her room - not identified as a trigger in the notes; the GP may explore it",
      "swimming and eye test - not relevant to the asthma plan"
    ],
    "safety": [
      {
        "point": "Emergency call (not an appointment) if breathing worsens, lips or face turn blue, too breathless to talk or eat, or reliever needed more often than every four hours",
        "where": "paragraph 4"
      },
      {
        "point": "Preventer inhaler every day, even when well",
        "where": "paragraph 3"
      },
      {
        "point": "Reliever always with spacer and mask",
        "where": "paragraph 3"
      },
      {
        "point": "Complete the prednisolone course",
        "where": "paragraph 2"
      }
    ]
  },
  "wri-nursing-discharge-to-community-nurse-leg-ulcer": {
    "header": [
      "Ms R. Okafor",
      "Community Nursing Team",
      "Riverside Health Centre",
      "26 June 2026"
    ],
    "salutation": "Dear Ms Okafor,",
    "re": "Re: Mr George Hill, aged 74",
    "body": [
      "I am writing to hand over the wound care of Mr Hill, discharged today, 26 June 2026, after cellulitis of the left lower leg over a venous ulcer of around eight months. He is allergic to penicillin, which causes a rash.",
      "After four days of intravenous antibiotics, he should complete the remaining five days of oral doxycycline 100 mg once daily, chosen because of his penicillin allergy. He has been afebrile for 72 hours, his C-reactive protein is 24, and the erythema has receded by around 5 cm.",
      "The ulcer, on the medial gaiter area, is approximately 3 cm across, clean and granulating, with moderate exudate and no slough or necrotic tissue. The surrounding skin is dry; he uses emollient twice daily.",
      "Please redress the wound with a foam dressing every 48 hours and maintain compression, resumed on 24 June; his ankle-brachial pressure index was 1.0 on 20 June. If the ulcer has not reduced within four weeks, he should be referred to tissue viability.",
      "He has diet-controlled type 2 diabetes, walks independently with a stick and lives alone; his daughter visits daily. His GP will review him in two weeks.",
      "Thank you for your help."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Ward 4"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The purpose and the penicillin allergy come first, as the allergy matters for any further antibiotic.",
      "selection": "Wound description, dressing and compression plan, the named antibiotic and its remaining course, and the index result that supports compression are kept; admission figures and unrelated requests are left out.",
      "organisation": "Purpose and allergy, then infection progress, then the wound, then the actions requested, then background.",
      "tone": "Precise and collegial, using wound terms a community nurse knows."
    },
    "notesUsed": [
      "cellulitis left lower leg over venous ulcer of around eight months",
      "penicillin allergy - rash",
      "intravenous antibiotics four days; oral doxycycline 100 mg once daily, five days remaining, chosen because of the penicillin allergy",
      "afebrile 72 hours; CRP 24; erythema receded around 5 cm",
      "ulcer medial gaiter, around 3 cm, clean, granulating, moderate exudate, no slough or necrosis; dry skin; emollient twice daily",
      "redress every 48 hours; foam dressing; compression resumed 24 June, maintain",
      "ABPI 1.0 on 20 June, compression appropriate",
      "tissue viability referral if not smaller within four weeks",
      "diet-controlled type 2 diabetes; independent with stick; lives alone; daughter daily",
      "GP review in two weeks"
    ],
    "notesLeftOut": [
      "admission observations, CRP 112 and white cell count - superseded by current improvement",
      "leg elevation in hospital - inpatient detail",
      "pedal pulses - covered by the index result supporting compression",
      "stairs, varicose veins, venous insufficiency - implied by the venous ulcer; not needed for the plan",
      "amlodipine and hypertension - no bearing on wound care",
      "stairlift and poor sleep on the ward - not part of this handover"
    ],
    "safety": [
      {
        "point": "Penicillin allergy (rash)",
        "where": "paragraph 1"
      },
      {
        "point": "Complete the five remaining days of oral doxycycline 100 mg once daily (chosen because of the penicillin allergy)",
        "where": "paragraph 2"
      },
      {
        "point": "Compression appropriate: ankle-brachial pressure index 1.0",
        "where": "paragraph 4"
      },
      {
        "point": "Refer to tissue viability if the ulcer has not reduced within four weeks",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-nursing-discharge-to-community-nurse-following-cellulitis-treatment": {
    "header": [
      "Ms Rachel Obi",
      "Community Nursing Team",
      "26 June 2026"
    ],
    "salutation": "Dear Ms Obi,",
    "re": "Re: Mrs Beverley Hartley, aged 66",
    "body": [
      "I am writing to request your care of Mrs Hartley, discharged today, 26 June 2026, after treatment for cellulitis of the right lower leg. I would be grateful if you could administer her intravenous flucloxacillin four times daily at home for the remaining five days and monitor the affected area.",
      "The cellulitis followed an insect bite while gardening on 19 June. She was admitted on 22 June with fever and erythema from the ankle to below the knee; ultrasound showed no abscess.",
      "She has responded well. She has been afebrile for 48 hours and her C-reactive protein has fallen from 96 to 31. Her right calf remains mildly warm and pink, but the redness is within the original pen marking, redrawn today for comparison. There is no blistering or skin breakdown.",
      "Please note that a penicillin allergy queried previously has been formally excluded; she tolerates flucloxacillin well and her record has been corrected.",
      "Please encourage her to elevate her leg for at least two hours each afternoon. She has well-controlled type 2 diabetes and takes metformin. If her fever returns or the redness extends beyond the line, she needs urgent medical review.",
      "Thank you for your help."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Ward 7"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The two requests, completing the intravenous antibiotic at home and monitoring the leg, are stated in the first paragraph.",
      "selection": "The marking, current findings and the corrected allergy record are kept; past surgery, unrelated medicines and personal questions are left out.",
      "organisation": "Request, then the cause and admission, then progress, then the allergy, then the plan with the red flags.",
      "tone": "Collegial and clear, with the urgent signs stated firmly."
    },
    "notesUsed": [
      "discharged 26 June 2026; cellulitis right lower leg",
      "intravenous flucloxacillin four times daily, five days remaining, given by the community nurse",
      "insect bite while gardening on 19 June; admitted 22 June; ankle to below knee; no abscess",
      "afebrile 48 hours; CRP 96 to 31",
      "calf mildly warm and pink, within marking redrawn today; no blistering or skin breakdown",
      "penicillin allergy formally excluded; tolerates flucloxacillin; record corrected",
      "elevate leg at least two hours in the afternoon",
      "type 2 diabetes, well controlled, metformin",
      "urgent review if fever returns or redness spreads beyond the line"
    ],
    "notesLeftOut": [
      "admission pulse, temperature and white cell count - superseded by current improvement",
      "HbA1c value and metformin dose - control is stated as good; dose is on the medication list",
      "varicose veins, hypertension, amlodipine, hysterectomy - no bearing on this episode",
      "mobile with one stick, family details - not needed for the antibiotic and monitoring plan",
      "insect repellent and mammogram - not relevant to this handover"
    ],
    "safety": [
      {
        "point": "Penicillin allergy formally excluded; tolerates flucloxacillin (old record may still alarm the reader)",
        "where": "paragraph 4"
      },
      {
        "point": "Urgent review if fever returns or redness extends beyond the marking",
        "where": "paragraph 5"
      },
      {
        "point": "Intravenous flucloxacillin four times daily for the remaining five days",
        "where": "paragraph 1"
      },
      {
        "point": "Marking redrawn today for comparison",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-nursing-discharge-to-district-nurse-following-heart-failure-admission": {
    "header": [
      "Ms Carol Underwood",
      "District Nursing Service",
      "26 June 2026"
    ],
    "salutation": "Dear Ms Underwood,",
    "re": "Re: Mr Albert Finch, aged 79",
    "body": [
      "I am writing to request home monitoring of fluid status, weight and medication titration for Mr Finch, discharged today, 26 June 2026, following admission on 17 June with decompensated chronic heart failure.",
      "After five days of intravenous furosemide, now oral, he lost 4 kg of fluid. Oedema is now limited to his ankles, and he breathes comfortably at rest. His discharge weight, 78 kg, is his target weight. Renal function is stable.",
      "He takes furosemide 40 mg twice daily, bisoprolol 5 mg daily, ramipril 2.5 mg daily and atorvastatin 20 mg at night. He also takes apixaban 5 mg twice daily for atrial fibrillation.",
      "I would be grateful if you could monitor his weight each morning at the same time, recorded on the chart supplied. A gain of more than 2 kg over three days, or increasing oedema or breathlessness, should be reported promptly, as his diuretic dose may need adjusting. Renal blood tests are due in one week. Please reinforce his 1.5-litre daily fluid restriction, which he finds difficult.",
      "He lives alone, uses a frame and is anxious about coping. His daughter visits weekly, and meals-on-wheels begin on 27 June.",
      "Thank you for your help."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Cardiology Ward"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The request is in the first sentence, with the discharge date and diagnosis, so the district nurse knows at once what is being asked.",
      "selection": "Weight target, diuretic response, medications and the report threshold are kept; admission findings and incidental requests are not needed at home.",
      "organisation": "Background and progress, medications, the specific monitoring actions, then social circumstances.",
      "tone": "Collegial and practical, with clear actions rather than instructions."
    },
    "notesUsed": [
      "admitted 17 June, discharged 26 June 2026, decompensated heart failure",
      "intravenous furosemide five days, then oral; lost 4 kg",
      "oedema to ankles only, comfortable at rest",
      "target weight 78 kg",
      "renal function stable four days; bloods in one week",
      "full medication list, including apixaban",
      "daily morning weight on chart; report gain over 2 kg in three days, oedema, breathlessness",
      "1.5-litre fluid restriction, finds it difficult",
      "lives alone, frame, daughter weekly, meals-on-wheels from 27 June"
    ],
    "notesLeftOut": [
      "admission observations, chest X-ray and NT-proBNP - superseded by discharge status",
      "discharge blood pressure, saturation and creatinine values - stable and need no action; 'stable renal function' is enough",
      "ejection fraction and chronic kidney disease stage - background the nurse does not act on",
      "cataract surgery 2022 - irrelevant",
      "blue badge and crosswords - not part of the clinical handover"
    ],
    "safety": [
      {
        "point": "Report a weight gain of more than 2 kg over three days, or increasing oedema or breathlessness",
        "where": "paragraph 4"
      },
      {
        "point": "Anticoagulated with apixaban",
        "where": "paragraph 3"
      },
      {
        "point": "Renal function blood tests due in one week",
        "where": "paragraph 4"
      },
      {
        "point": "Fluid restriction of 1.5 litres a day, which he finds difficult",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-nursing-referral-to-community-drug-and-alcohol-service-alcohol-withdrawal": {
    "header": [
      "Mr Sean Gallagher",
      "Community Drug and Alcohol Service",
      "26 June 2026"
    ],
    "salutation": "Dear Mr Gallagher,",
    "re": "Re: Mr Wayne Fletcher, aged 47",
    "body": [
      "I am writing to refer Mr Fletcher for ongoing community support following a medically managed alcohol detoxification. He was admitted on 20 June and discharged today, 26 June 2026.",
      "He had drunk around 100 units a week for three years. He completed a five-day reducing chlordiazepoxide regimen without seizures or delirium tremens and has been medication-free for 24 hours. He is now stable and motivated to remain abstinent.",
      "He has mild, compensated alcohol-related liver disease without cirrhosis, with improving liver function, and depression, diagnosed in 2023 and not yet in remission. He relapsed in 2025 after a previous community programme.",
      "He takes acamprosate 666 mg three times daily, started on 24 June to support abstinence, thiamine 100 mg three times daily, vitamin B compound strong once daily and sertraline 50 mg daily.",
      "I would be grateful if you could provide relapse prevention and psychological support, and monitor his mood. He identifies social isolation and stress as his main triggers: he recently separated from his partner, is unemployed and lives alone in a bedsit with limited support. He hopes to rebuild his relationship with his two children, with whom contact is currently supervised.",
      "Thank you for your support."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Ward 2"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The purpose and the admission dates open the letter, so the reader knows immediately that this is a post-detoxification referral.",
      "selection": "Drinking history, a safe detoxification, relapse history, untreated depression and triggers are kept; individual blood values and unrelated history are omitted.",
      "organisation": "Purpose, detoxification, relevant history, medications, then the request linked to his social risks.",
      "tone": "Respectful and factual, presenting his motivation without judgement."
    },
    "notesUsed": [
      "admitted 20 June, discharged 26 June 2026",
      "around 100 units a week for three years",
      "five-day chlordiazepoxide, no seizures or delirium tremens, medication-free 24 hours",
      "stable, motivated to remain abstinent",
      "compensated liver disease without cirrhosis, improving",
      "depression since 2023, not in remission",
      "relapse in 2025 after a community programme",
      "discharge medications",
      "triggers: isolation and stress; separation, unemployed, bedsit, supervised contact with children"
    ],
    "notesLeftOut": [
      "ALT and GGT values - 'improving' is enough for a community alcohol worker",
      "full blood count, B12 and folate - normal, change nothing",
      "peak withdrawal score on day two - detoxification is complete",
      "wrist fracture 2018 and back pain - not relevant to this referral",
      "housing application request - a practical matter he can raise directly with the service"
    ],
    "safety": [
      {
        "point": "Previous relapse after a community programme",
        "where": "paragraph 3"
      },
      {
        "point": "Depression not yet in remission; mood to be monitored",
        "where": "paragraphs 3, 5"
      },
      {
        "point": "Continue acamprosate and thiamine",
        "where": "paragraph 4"
      },
      {
        "point": "Social isolation and stress as relapse triggers",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-nursing-referral-to-community-mental-health-team-post-discharge-depression": {
    "header": [
      "Ms Hannah Pereira",
      "Community Mental Health Nurse",
      "Riverside Wellbeing Team",
      "26 June 2026"
    ],
    "salutation": "Dear Ms Pereira,",
    "re": "Re: Mr Daniel Okoro, aged 34",
    "body": [
      "I am writing to request community follow-up for Mr Okoro within one week of his discharge today, 26 June 2026, to monitor his mood, medication adherence and suicide risk.",
      "He was admitted voluntarily on 12 June 2026 with a moderate depressive episode, his first, after losing his job in April 2026. On admission he had passive suicidal ideation, without a plan or intent. He has no history of self-harm or substance misuse.",
      "He started sertraline 50 mg each morning on 13 June and attended every group therapy session. His mood has improved steadily, and his Patient Health Questionnaire (PHQ-9) score fell from 21 to 11. He now denies suicidal thoughts, discusses them openly, and has a written safety plan and crisis numbers.",
      "His risk is assessed as low but not absent. Concerns are that he lives alone, is estranged from his mother and may face further job rejections in the coming weeks. He has one supportive friend nearby.",
      "I would be grateful if you could reassess his suicide risk at each contact and consider a dose increase if his response plateaus. His GP will continue prescribing after your first review.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Acute Mental Health Unit"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The first sentence states the request, the one-week timeframe and the three things to monitor, matching the task exactly.",
      "selection": "Suicidal ideation history, treatment response, safety plan and risk factors are kept; smoking, family cardiac history and leisure details are omitted.",
      "organisation": "Request, admission, progress, current risk, then specific actions and prescribing responsibility.",
      "tone": "Calm and precise about risk, neither alarming nor minimising it."
    },
    "notesUsed": [
      "admitted voluntarily 12 June, discharged 26 June 2026",
      "first moderate depressive episode after job loss in April 2026",
      "passive suicidal ideation, no plan or intent; no self-harm or substance misuse",
      "sertraline 50 mg from 13 June, each morning",
      "full group therapy attendance; PHQ-9 21 to 11",
      "denies suicidal thoughts, safety plan, crisis numbers",
      "risk low but not absent; lives alone, estranged mother, job rejections",
      "one supportive friend",
      "follow-up within one week; reassess risk; GP prescribing; consider dose increase"
    ],
    "notesLeftOut": [
      "sleep, appetite and 2 kg weight regain - covered by 'mood improved steadily'",
      "smoking and father's myocardial infarction - not relevant to mental health follow-up",
      "presenting himself to the emergency department - background only",
      "cycling and bus pass - not needed for the referral"
    ],
    "safety": [
      {
        "point": "Suicide risk low but not absent; reassess at each contact",
        "where": "paragraphs 4, 5"
      },
      {
        "point": "Previous passive suicidal ideation",
        "where": "paragraph 2"
      },
      {
        "point": "Written safety plan and crisis numbers in place",
        "where": "paragraph 3"
      },
      {
        "point": "Follow-up within one week",
        "where": "paragraph 1"
      }
    ]
  },
  "wri-nursing-referral-to-diabetes-specialist-nurse-newly-diagnosed-type-1": {
    "header": [
      "Ms Lauren Hayes",
      "Diabetes Specialist Nurse",
      "26 June 2026"
    ],
    "salutation": "Dear Ms Hayes,",
    "re": "Re: Miss Chloe Adeyemi, aged 19",
    "body": [
      "I am writing to refer Miss Adeyemi, discharged today, 26 June 2026, for education and ongoing support following a new diagnosis of type 1 diabetes, which presented as diabetic ketoacidosis. Early contact would help, as her university term starts in three weeks.",
      "Her ketoacidosis resolved within 18 hours, and she converted to subcutaneous insulin on 22 June. She takes insulin glargine 14 units at night and fixed doses of insulin aspart with meals. Her blood glucose has been 7 to 11 mmol/L for 48 hours.",
      "On the ward she learned injection technique, blood glucose monitoring and the signs of hypoglycaemia. She can demonstrate injecting but lacks confidence, has needed prompting each time and became tearful during teaching.",
      "I would be grateful if you could provide education on carbohydrate counting, dose adjustment, sick-day rules, alcohol, exercise and driving, none of which has yet been covered, and on managing hypoglycaemia. She would also benefit from psychological support with adjustment, and structured follow-up.",
      "She lives in halls with a shared kitchen, has a busy social life and plays netball twice a week. She is worried about managing at university and telling her friends.",
      "Thank you for your help."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Ward 9"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "Purpose, diagnosis and urgency appear together, so the specialist nurse sees why early contact matters before term begins.",
      "selection": "Insulin regimen, recent glucose range, what has and has not been taught, and her anxiety are kept; admission blood values and unrelated history are left out.",
      "organisation": "Request and urgency, treatment, ward education, outstanding education, then lifestyle.",
      "tone": "Supportive and specific, recognising her anxiety."
    },
    "notesUsed": [
      "new type 1 diabetes presenting as ketoacidosis",
      "discharged 26 June 2026; term begins in three weeks",
      "resolved within 18 hours; subcutaneous insulin from 22 June",
      "glargine 14 units at night; aspart fixed doses with meals",
      "glucose 7 to 11 mmol/L over 48 hours",
      "taught injection, monitoring, hypoglycaemia signs; lacks confidence, tearful",
      "not yet covered: carbohydrate counting, dose adjustment, sick-day rules, alcohol, exercise, driving",
      "psychological support, structured follow-up",
      "halls, shared kitchen, social life, netball twice a week, worries"
    ],
    "notesLeftOut": [
      "admission glucose, ketones, pH and bicarbonate - resolved, change nothing now",
      "presenting symptoms and weight loss - diagnosis is established",
      "tonsillectomy and immunisations - irrelevant",
      "family thyroid disease - not relevant to this education referral",
      "medical alert bracelet and dental check - minor, can be raised at review"
    ],
    "safety": [
      {
        "point": "Lacks confidence injecting and needs prompting",
        "where": "paragraph 3"
      },
      {
        "point": "Sick-day rules and hypoglycaemia management not yet taught",
        "where": "paragraph 4"
      },
      {
        "point": "Current insulin regimen",
        "where": "paragraph 2"
      },
      {
        "point": "Early contact needed before term in three weeks",
        "where": "paragraph 1"
      }
    ]
  },
  "wri-nursing-referral-to-falls-prevention-service-from-aged-care-facility": {
    "header": [
      "Mr Thomas Reilly",
      "Falls Prevention Coordinator",
      "Aged Care Outreach Service",
      "26 June 2026"
    ],
    "salutation": "Dear Mr Reilly,",
    "re": "Re: Mrs Doris Whitfield, aged 84",
    "body": [
      "I am writing to request a multidisciplinary falls assessment for Mrs Whitfield, who has fallen three times in six weeks.",
      "On 14 May and 24 June 2026 she fell at night in her room going to the toilet; the second caused a healing left forearm skin tear. On 2 June she fell in the corridor, saying her feet stuck to the floor.",
      "She has Parkinson's disease, osteoporosis and a previous right hip fracture in 2023, raising her fracture risk. She also has mild cognitive impairment and macular degeneration. She walks with a wheeled frame but freezes in doorways and when turning, and has twice been found without it.",
      "On 23 June her blood pressure fell from 130/80 lying to 105/65 standing, with dizziness. She takes levodopa with carbidopa three times daily, alendronate 70 mg weekly, bisoprolol 2.5 mg daily and zopiclone 3.75 mg on two or three nights a week. She is allergic to sulfa drugs.",
      "Other factors are poor night lighting, nocturnal urinary urgency and backless slippers. I would be grateful if your review could address her postural blood pressure, night sedation, environment and continence, with physiotherapy for gait and freezing.",
      "Thank you for your help."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Willowbank Residential Care"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The request and the frequency of falls come first, establishing why a multidisciplinary assessment is needed.",
      "selection": "Fall pattern, fracture risk, freezing, postural drop, sedation and environmental factors are kept; leisure and minor requests are omitted.",
      "organisation": "Request, the falls, risk factors, observations and medications, then contributing factors and the specific review areas.",
      "tone": "Clear and objective, giving the coordinator a ready-made assessment agenda."
    },
    "notesUsed": [
      "three falls in six weeks: 14 May, 2 June, 24 June 2026",
      "night falls heading to the toilet; skin tear left forearm",
      "Parkinson's disease, osteoporosis, right hip fracture 2023",
      "mild cognitive impairment, macular degeneration",
      "wheeled frame, freezing, found without frame",
      "postural drop 130/80 to 105/65 with dizziness on 23 June",
      "medications including zopiclone two or three nights a week",
      "sulfa drug allergy",
      "night lighting, urgency, backless slippers",
      "requested review areas"
    ],
    "notesLeftOut": [
      "pulse and stable weight - normal, change nothing",
      "date of Parkinson's diagnosis and last eye review - not needed",
      "light switch position detail - summarised as poor night lighting",
      "son's visits, knitting and choir - not relevant to the assessment",
      "hairdresser and annual eye review - minor, not for this service"
    ],
    "safety": [
      {
        "point": "Postural hypotension with dizziness",
        "where": "paragraph 4"
      },
      {
        "point": "Osteoporosis and previous hip fracture: high fracture risk",
        "where": "paragraph 3"
      },
      {
        "point": "Night sedation with zopiclone",
        "where": "paragraphs 4, 5"
      },
      {
        "point": "Allergy to sulfa drugs",
        "where": "paragraph 4"
      },
      {
        "point": "Found twice without her frame",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-nursing-referral-to-wound-care-clinic-post-operative-surgical-wound-dehiscence": {
    "header": [
      "Ms Priya Naidoo",
      "Clinical Nurse Specialist",
      "Outpatient Wound Care Clinic",
      "26 June 2026"
    ],
    "salutation": "Dear Ms Naidoo,",
    "re": "Re: Mr Gregor Bauer, aged 58",
    "body": [
      "I am writing to refer Mr Bauer, discharged today after an emergency laparotomy and Hartmann's procedure for perforated diverticulitis on 10 June 2026. I would be grateful for your ongoing assessment and dressing management of his partially dehisced midline wound, healing by secondary intention.",
      "The wound became infected on day six, and its lower third dehisced the next day; deep dehiscence has been excluded. He has five days of oral co-amoxiclav remaining. He has been afebrile for six days, and his CRP has fallen from 180 to 18.",
      "The cavity measures 4 cm by 2 cm, 1.5 cm deep, with moderate exudate and a granulating base without slough or necrosis. The surrounding skin is healthy. It is dressed with an alginate rope and secondary absorbent dressing on alternate days; a photograph from 25 June is in his record.",
      "Please change his dressings twice weekly, measure the wound weekly and monitor for re-infection. His diabetes may delay healing: his HbA1c was 62 in May and his glucose remains 8 to 10 mmol/L, so his practice is arranging a diabetes review. He has no known allergies.",
      "He has asked about lifting restrictions.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Surgical Ward"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The first paragraph names the operation, the discharge and the exact request, so the specialist knows at once what is being asked.",
      "selection": "Infection, antibiotics, wound measurements, the current dressing and poor glycaemic control are kept because they shape wound care. Blood pressure treatment, smoking history and work plans are left out.",
      "organisation": "Request, then the infection and dehiscence, then the wound today, then the plan and healing risks.",
      "tone": "Precise and collegial, as one nurse to a specialist."
    },
    "notesUsed": [
      "emergency laparotomy and Hartmann's procedure, 10 June 2026; discharged 26 June 2026",
      "infection day six; partial dehiscence lower third day seven; deep dehiscence excluded",
      "oral co-amoxiclav, five days remaining",
      "afebrile six days; CRP 18, down from 180",
      "cavity 4 cm by 2 cm, depth 1.5 cm; moderate exudate; granulating, no slough or necrosis; healthy skin",
      "alginate rope and secondary absorbent dressing, alternate days; photograph 25 June",
      "plan: twice-weekly dressings, weekly measurement, watch for re-infection",
      "type 2 diabetes on metformin, HbA1c 62, glucose 8 to 10 mmol/L; diabetes review requested",
      "no known allergies; asked about lifting restrictions"
    ],
    "notesLeftOut": [
      "intravenous antibiotics, purulent discharge, swab result - the infection is treated; only the oral remainder matters now",
      "hypertension, amlodipine, paracetamol - do not change wound management",
      "BMI 34, ex-smoker - background; glycaemic control is the healing risk the plan acts on",
      "eating well, mobile independently - no action needed",
      "wife, accountant, return to work in three weeks - social detail he can give himself",
      "stoma nurse appointment on 30 June - managed by another service",
      "metformin dose - prescribing is the practice concern, not the wound clinic"
    ],
    "safety": [
      {
        "point": "Monitor for re-infection after a recent wound infection",
        "where": "paragraph 4"
      },
      {
        "point": "Co-amoxiclav course still running, five days remaining",
        "where": "paragraph 2"
      },
      {
        "point": "Suboptimal glycaemic control may delay healing; diabetes review requested",
        "where": "paragraph 4"
      },
      {
        "point": "Deep dehiscence excluded by the surgical team",
        "where": "paragraph 2"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-nursing-transfer-to-coronary-care-unit-from-emergency-department-chest-pain": {
    "header": [
      "The Charge Nurse",
      "Coronary Care Unit",
      "26 June 2026"
    ],
    "salutation": "Dear Charge Nurse,",
    "re": "Re: Mr Raymond Bellini, aged 62",
    "body": [
      "I am writing to hand over Mr Bellini, transferring to your unit at 17:40 today with a confirmed non-ST-elevation myocardial infarction. I would be grateful if you could continue cardiac monitoring pending cardiology review for consideration of angiography.",
      "He presented at 14:20 with two hours of central crushing chest pain at rest, radiating to the left arm, with sweating and nausea. His ECG showed lateral ST depression, unchanged at 16:00; troponin rose from 480 ng/L to 910 ng/L at three hours. His GRACE score is intermediate to high.",
      "He received aspirin 300 mg, ticagrelor 180 mg, fondaparinux and morphine 5 mg with an antiemetic. A glyceryl trinitrate infusion is running at 2 mg per hour, titrated to pain and blood pressure, via his left forearm cannula. At 16:45 his pain was 1/10, blood pressure 138/82, pulse 76 regular, and oxygen saturation 97% on 2 litres.",
      "Please maintain bed rest, observe for further chest pain or arrhythmia, and repeat troponin and ECG in the morning. He has no known allergies and has not eaten since breakfast.",
      "He is anxious about returning to work as a taxi driver; his wife is on her way.",
      "Thank you for your care."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Emergency Department"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The diagnosis, transfer time and the request come first, because the receiving nurse needs to prepare monitoring and the cardiology review.",
      "selection": "Serial ECGs and troponins, the drugs given, the running infusion and the latest observations are kept. Normal chest X-ray and bloods, surgical history and his glasses are left out.",
      "organisation": "Purpose, presentation and results, treatment and current state, ongoing plan, then his anxiety.",
      "tone": "Concise and factual, as suits an urgent handover."
    },
    "notesUsed": [
      "confirmed NSTEMI; arrived 14:20, transferred 17:40",
      "central crushing pain two hours, at rest, left arm, sweating, nausea",
      "ECG lateral ST depression, no elevation, unchanged at 16:00",
      "troponin 480 rising to 910 ng/L at three hours; GRACE intermediate to high",
      "aspirin 300 mg, ticagrelor 180 mg, fondaparinux, morphine 5 mg with antiemetic, oxygen",
      "glyceryl trinitrate infusion 2 mg per hour, titrated; cannula left forearm patent",
      "observations at 16:45; pain 1/10",
      "plan: monitoring, cardiology review for angiography, bed rest, repeat troponin and ECG, observe for pain or arrhythmia",
      "no known allergies; not eaten since breakfast; anxious about work; wife on her way"
    ],
    "notesLeftOut": [
      "chest X-ray, potassium, creatinine - normal and change nothing for the unit",
      "pain 8/10 on arrival - superseded by current score",
      "respiratory rate, temperature - normal",
      "cannula siting time - patency is what matters",
      "hypertension, hyperlipidaemia, smoking, family history - risk factors for later secondary prevention, not for this handover",
      "amlodipine, atorvastatin - home medicines the cardiology team will review",
      "appendicectomy, glasses - irrelevant"
    ],
    "safety": [
      {
        "point": "Glyceryl trinitrate infusion running at 2 mg per hour, titrated to pain and blood pressure",
        "where": "paragraph 3"
      },
      {
        "point": "Dual antiplatelet therapy and fondaparinux given (bleeding risk)",
        "where": "paragraph 3"
      },
      {
        "point": "Observe for further chest pain or arrhythmia; continue cardiac monitoring",
        "where": "paragraphs 1, 4"
      },
      {
        "point": "Not eaten since breakfast (relevant to possible angiography)",
        "where": "paragraph 4"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-nursing-transfer-to-palliative-care-unit-advanced-pancreatic-cancer": {
    "header": [
      "Sister Mary Quinn",
      "Palliative Care Unit",
      "St Anne's Hospice",
      "26 June 2026"
    ],
    "salutation": "Dear Sister Quinn,",
    "re": "Re: Mrs Eleanor Castle, aged 71",
    "body": [
      "I am writing to transfer Mrs Castle, who has advanced pancreatic cancer with liver metastases, to your unit today, and would be grateful if you could continue her comfort-focused end-of-life care. Active treatment ceased on 20 June, when she and her daughters were told her prognosis is likely days to a small number of weeks. She has discussed this calmly since.",
      "She has been bedbound since 22 June. Her pain and nausea are controlled by a syringe driver delivering morphine 30 mg and metoclopramide 30 mg over 24 hours. As-required midazolam has been used twice for agitation; hyoscine butylbromide is also prescribed. Two episodes of mild night-time confusion settled with reorientation.",
      "She takes only sips and some yoghurt, with four-hourly mouth care. Her sacrum is intact, with a Waterlow score of 18, and she is repositioned two-hourly. She is allergic to penicillin.",
      "A DNACPR decision was signed on 20 June, and her family is aware. She wishes to die peacefully, without further investigations. She is Catholic and values chaplain visits, and her daughters, present daily, wish to be fully involved.",
      "Please review the syringe driver as required and continue spiritual support.",
      "Thank you for caring for her."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Oncology Ward"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The purpose, the request and what the patient and family understand come first, since the hospice team must speak with them from the start.",
      "selection": "Symptom control, intake, skin, the DNACPR decision, her wishes and her faith are kept. Her surgical history, stopped antihypertensives and the grandson are left out.",
      "organisation": "Purpose and understanding, symptom control, nursing care, wishes, then the remaining actions.",
      "tone": "Warm but professional, fitting end-of-life care."
    },
    "notesUsed": [
      "advanced pancreatic cancer with liver metastases; end-of-life care",
      "active treatment ceased 20 June; prognosis discussed with patient and daughters; spoken about it without distress",
      "bedbound since 22 June",
      "syringe driver: morphine 30 mg and metoclopramide 30 mg over 24 hours; pain and nausea controlled",
      "midazolam as required, used twice; hyoscine butylbromide prescribed as required",
      "mild night confusion twice, settled with reorientation",
      "sips and yoghurt; mouth care four-hourly; two-hourly pressure care, sacrum intact, Waterlow 18",
      "penicillin allergy",
      "DNACPR 20 June, family aware; peaceful death, no investigations; Catholic, chaplain visits",
      "daughters present daily, full involvement"
    ],
    "notesLeftOut": [
      "diet-controlled diabetes, glucose monitoring stopped 23 June - nothing for the hospice to do",
      "window open, no television - small preferences the family will share; kept out for length",
      "site of pain (epigastrium and back) - controlled; the regimen is what the reader acts on",
      "admission date 18 June - the transfer and its reasons matter more",
      "hypertension, antihypertensives stopped - nothing for the hospice to act on",
      "cholecystectomy 2009 - irrelevant",
      "the hospital chaplain visited twice - the hospice will arrange its own chaplain",
      "widow, grandson at weekends - minor social detail",
      "reaction to penicillin (rash) - the allergy itself is stated"
    ],
    "safety": [
      {
        "point": "Penicillin allergy",
        "where": "paragraph 3"
      },
      {
        "point": "DNACPR in place, family aware; no further investigations",
        "where": "paragraph 4"
      },
      {
        "point": "Syringe driver: morphine 30 mg and metoclopramide 30 mg over 24 hours, to be reviewed",
        "where": "paragraphs 2, 5"
      },
      {
        "point": "As-required midazolam for agitation, used twice; night confusion",
        "where": "paragraph 2"
      },
      {
        "point": "Pressure risk, Waterlow 18, two-hourly repositioning",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-nursing-transfer-to-rehabilitation-unit-post-hip-fracture": {
    "header": [
      "Ms Carla Devine",
      "Charge Nurse",
      "Riverside Rehabilitation Unit",
      "26 June 2026"
    ],
    "salutation": "Dear Ms Devine,",
    "re": "Re: Mrs Aurora Pereira, aged 78",
    "body": [
      "I am writing to transfer Mrs Pereira to your unit today for rehabilitation after a right hemiarthroplasty on 5 June 2026 following a fall at home. I would be grateful if you could continue her physiotherapy and occupational therapy to restore her independence, and arrange a home assessment before discharge.",
      "Her wound has healed since staple removal on 19 June. She walks 10 metres with a frame and one assistant, weight-bearing as tolerated. Her pain scores 3 out of 10 on movement and 0 at rest.",
      "She receives enoxaparin 40 mg subcutaneously daily, which should continue until 3 July, 28 days post-operatively. She is allergic to penicillin, which causes a rash. Her haemoglobin was 104 on 20 June, down from 128 before surgery, and no transfusion was needed.",
      "She takes metformin 500 mg twice daily for type 2 diabetes, with blood glucose of 6 to 8 mmol/L. She needs help with washing and dressing, is continent, and her pressure areas are intact, with a Waterlow score of 12.",
      "Previously independent, she lived alone in a ground-floor flat, with her daughter nearby. She is anxious about returning home.",
      "Thank you for your care of her."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Orthopaedic Ward"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "The operation, the purpose of the transfer and the request for therapy and a home assessment come first.",
      "selection": "Mobility, pain, anticoagulation, the allergy, haemoglobin, diabetes and her care needs are kept. Her knees, cataracts, hobbies and fall details beyond the cause are left out.",
      "organisation": "Purpose, recovery, medication safety, daily care needs, then home circumstances.",
      "tone": "Clear and collegial; the anticoagulation end date is stated plainly so the unit can continue it."
    },
    "notesUsed": [
      "right hemiarthroplasty 5 June 2026 after a fall at home",
      "staples removed 19 June, wound healed",
      "10 metres with frame and one assistant; weight-bearing as tolerated",
      "pain 3 out of 10 on movement, 0 at rest",
      "enoxaparin 40 mg daily, continue until 3 July, 28 days post-operatively",
      "penicillin allergy (rash); haemoglobin 104 on 20 June, from 128, no transfusion",
      "metformin 500 mg twice daily; glucose 6 to 8 mmol/L",
      "help with washing and dressing; continent; pressure areas intact, Waterlow 12",
      "plan: physiotherapy, occupational therapy, pre-discharge home assessment",
      "previously independent, lived alone in ground-floor flat, daughter nearby, anxious about going home"
    ],
    "notesLeftOut": [
      "rug, no head injury, X-ray - cause and diagnosis are settled",
      "spinal anaesthetic, blood loss 300 ml - no effect on rehabilitation; the haemoglobin is given instead",
      "afebrile - normal",
      "constipation from day four, now resolved with lactulose - settled",
      "uncomplicated surgery - implied by the healed wound and current progress",
      "amlodipine, paracetamol, hypertension - routine, on the drug chart",
      "osteoarthritis of knees, cataract surgery - not relevant to the plan",
      "retired seamstress, sewing machine, afternoon tea - personal detail the team will learn"
    ],
    "safety": [
      {
        "point": "Enoxaparin 40 mg daily to continue until 3 July, 28 days post-operatively",
        "where": "paragraph 3"
      },
      {
        "point": "Penicillin allergy (rash)",
        "where": "paragraph 3"
      },
      {
        "point": "Haemoglobin 104, reduced from 128",
        "where": "paragraph 3"
      },
      {
        "point": "Mobilises only with a frame and one assistant (fall risk)",
        "where": "paragraph 2"
      },
      {
        "point": "Pre-discharge home assessment required",
        "where": "paragraph 1"
      }
    ]
  },
  "wri-nursing-transfer-to-stroke-rehabilitation-ward-acute-ischaemic-stroke": {
    "header": [
      "The Nurse in Charge",
      "Stroke Rehabilitation Ward",
      "26 June 2026"
    ],
    "salutation": "Dear Nurse in Charge,",
    "re": "Re: Mr Ivan Petrov, aged 68",
    "body": [
      "I am writing to transfer Mr Petrov to your ward today for rehabilitation after a right middle cerebral artery ischaemic stroke on 19 June 2026. I would be grateful if you could continue his physiotherapy, occupational therapy and speech and language therapy, and agree mobility goals with him.",
      "He was thrombolysed, and imaging at 24 hours showed no haemorrhagic transformation. His left arm power is 2/5 and left leg 3/5. His speech is intelligible with occasional slurring, and comprehension is intact. He needs two people to transfer.",
      "He takes a soft diet with level 2 thickened fluids, supervised at meals, and these precautions must continue until speech and language therapy reassesses him.",
      "He has atrial fibrillation and now takes apixaban 5 mg twice daily, having previously taken only aspirin. Codeine causes nausea; this is an intolerance, not an allergy.",
      "With a Waterlow score of 16, he needs two-hourly pressure care on a pressure-redistributing mattress. He has occasional urinary incontinence, managed with aids, and requires a continence assessment.",
      "He is highly motivated to walk again. He lives with his wife in a two-storey house with an upstairs bathroom, and wears a right hearing aid.",
      "Thank you for your care."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Registered Nurse, Acute Stroke Unit"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The stroke, the purpose of the transfer and the rehabilitation request come first.",
      "selection": "Deficits, swallow precautions, new anticoagulation, the codeine intolerance, skin and continence are kept. Onset time, scan details and his hernia repair are left out.",
      "organisation": "Purpose, current deficits, swallow safety, medication, nursing care, then home and motivation for goal setting.",
      "tone": "Factual and collegial between nursing teams."
    },
    "notesUsed": [
      "right middle cerebral artery ischaemic stroke, 19 June 2026",
      "thrombolysed; no haemorrhagic transformation at 24 hours",
      "left arm 2/5, left leg 3/5; speech intelligible, occasional slurring; comprehension intact",
      "two to transfer",
      "soft diet, thickened fluids level 2, supervision; precautions until reassessed",
      "atrial fibrillation, apixaban 5 mg twice daily, previously aspirin only",
      "codeine intolerance (nausea), not an allergy",
      "Waterlow 16, two-hourly pressure care, pressure-redistributing mattress",
      "occasional urinary incontinence, aids; continence assessment",
      "motivated to walk; two-storey house, bathroom upstairs; right hearing aid"
    ],
    "notesLeftOut": [
      "onset time 08:10, thrombolysis time 09:40, witnessed by wife, CT - acute details superseded by current status",
      "sitting out two hours twice a day - the therapists will set the new routine",
      "facial droop improving - minor and improving",
      "swallow assessment dates, no coughing on current consistency - the current precautions are what matter",
      "bowels open with lactulose - settled, on the drug chart",
      "amlodipine, metformin, atorvastatin - unchanged routine medicines on the drug chart; apixaban given as it is new and high-risk",
      "hypertension, diabetes, hernia repair 2015 - managed routinely or irrelevant",
      "retired carpenter, own pyjamas - personal detail"
    ],
    "safety": [
      {
        "point": "Swallow precautions: soft diet, level 2 thickened fluids, supervision at meals until reassessed",
        "where": "paragraph 3"
      },
      {
        "point": "Newly anticoagulated with apixaban 5 mg twice daily after thrombolysis",
        "where": "paragraphs 2, 4"
      },
      {
        "point": "Codeine intolerance (nausea), not an allergy",
        "where": "paragraph 4"
      },
      {
        "point": "Pressure risk, Waterlow 16, two-hourly care",
        "where": "paragraph 5"
      },
      {
        "point": "Two-person transfers (fall risk)",
        "where": "paragraph 2"
      },
      {
        "point": "Hearing aid on the right (communication)",
        "where": "paragraph 6"
      }
    ]
  },
  "wri-medicine-advice-letter-to-gp-on-warfarin-to-doac-switch": {
    "header": [
      "Dr Imran Saleh",
      "General Practitioner",
      "Brookside Surgery",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Saleh,",
    "re": "Re: Mrs Glenda Pruitt, aged 78",
    "body": [
      "I am writing to advise switching Mrs Pruitt from warfarin to apixaban. She has taken warfarin for atrial fibrillation for four years, with unstable control.",
      "Her time in the therapeutic range was 48% over the past twelve months, and recent INR readings varied between 1.4 and 3.8, requiring frequent dose changes. She has also missed four appointments this year.",
      "She has had no bleeding on warfarin and has no mechanical valve; her HAS-BLED score is 2. Her eGFR is stable at 44 and she weighs 62 kg. The reduced dose of 2.5 mg twice daily applies only when two of three criteria are met: age 80 or over, weight 60 kg or less, and creatinine 133 or above. As she meets one only, I recommend apixaban 5 mg twice daily.",
      "I would be grateful if you could stop warfarin and start apixaban according to local changeover guidance, then check her renal function after one month, at least annually thereafter, and sooner during any intercurrent illness. Routine INR monitoring will no longer be needed, and she need not avoid green vegetables. Please involve her daughter, who manages her tablets. She is allergic to sulfonamides.",
      "Thank you for your help."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Specialist Practitioner, Anticoagulation Clinic"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The first sentence states the advice itself, a switch from warfarin to apixaban, so the GP knows at once what action is being recommended.",
      "selection": "Only facts that justify the switch and the dose are kept: unstable control, missed appointments, renal function, weight and the dose criteria. Unrelated questions are dropped.",
      "organisation": "Purpose, then why warfarin is failing, then the dose reasoning, then the actions and monitoring the GP must take.",
      "tone": "Collegial and advisory; the request is polite but explicit."
    },
    "notesUsed": [
      "four years on warfarin, unstable control",
      "time in range 48%",
      "INR 1.4 to 3.8, frequent dose changes",
      "four missed appointments",
      "no bleeding, no mechanical valve, HAS-BLED 2",
      "eGFR 44 stable, weight 62 kg",
      "dose-reduction criteria; meets one only",
      "apixaban 5 mg twice daily",
      "renal function at one month, annually, sooner if unwell; no INR",
      "daughter manages tablets",
      "sulfonamide allergy",
      "question about green vegetables"
    ],
    "notesLeftOut": [
      "individual INR dates and the current warfarin dose - the range makes the point",
      "bisoprolol, furosemide, atorvastatin - unchanged and already on the GP record",
      "blood pressure and pulse - normal, change nothing",
      "past history of heart failure and osteoarthritis - GP knows it",
      "flu vaccination and hearing loss - not part of this advice",
      "does not drive - not relevant",
      "reason for missed appointments - the number of missed visits makes the point"
    ],
    "safety": [
      {
        "point": "Apixaban dose 5 mg twice daily with the reasoning against dose reduction",
        "where": "paragraph 3"
      },
      {
        "point": "Stop warfarin when apixaban starts, per local changeover guidance (avoid double anticoagulation)",
        "where": "paragraph 4"
      },
      {
        "point": "Renal monitoring at one month, annually, and sooner in intercurrent illness",
        "where": "paragraph 4"
      },
      {
        "point": "Daughter manages tablets and must know of the change",
        "where": "paragraph 4"
      },
      {
        "point": "Sulfonamide allergy",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-cardiology-referral-for-new-atrial-fibrillation": {
    "header": [
      "Dr Helena Frost",
      "Consultant Cardiologist",
      "Riverside Hospital Cardiology Clinic",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Frost,",
    "re": "Re: Mr Trevor Hale, aged 68",
    "body": [
      "I would be grateful if you could assess Mr Hale, who has newly diagnosed atrial fibrillation, and review the anticoagulation I started today.",
      "He reports a two-week history of palpitations, lasting up to an hour, with new breathlessness on climbing stairs. On 30 August he had one episode of light-headedness while gardening, without loss of consciousness or a fall. He has had no chest pain.",
      "Today his pulse was 112 and irregularly irregular, and his blood pressure 138/86. An ECG confirmed atrial fibrillation at 110 with no ischaemic changes. Blood tests on 2 September, including thyroid function, were normal. An echocardiogram is booked for 18 September.",
      "His CHA2DS2-VASc score is 4, reflecting his age, hypertension and a transient ischaemic attack in 2021; he takes no antiplatelet. He also takes amlodipine 5 mg daily and atorvastatin 20 mg at night. He is allergic to penicillin.",
      "Today I started bisoprolol 2.5 mg daily for rate control and, after discussing bleeding risk, apixaban at the standard dose; no contraindication was identified. He has written information and was advised to seek immediate help if he develops chest pain, severe breathlessness or any blackout. He drives.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner, Riverside Surgery"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The request comes first and names both tasks: assessment of the new arrhythmia and review of the anticoagulation already started.",
      "selection": "Symptoms, the presyncopal episode, the ECG, the stroke-risk score and the start of apixaban after a bleeding-risk discussion are kept. Hip pain and heartburn are dropped.",
      "organisation": "Request, history, findings and tests, risk and medicines, then what has been started and what he has been told.",
      "tone": "Concise and collegial, letting the facts carry the urgency."
    },
    "notesUsed": [
      "two-week palpitations, up to an hour",
      "new breathlessness on stairs",
      "light-headedness 30 August, no loss of consciousness",
      "pulse 112 irregularly irregular, BP 138/86",
      "ECG atrial fibrillation at 110, no ischaemia",
      "bloods 2 September normal",
      "echocardiogram 18 September",
      "CHA2DS2-VASc 4; TIA 2021, no antiplatelet",
      "amlodipine, atorvastatin",
      "penicillin allergy",
      "bisoprolol 2.5 mg started; apixaban started today at standard dose after bleeding-risk discussion; no contraindication",
      "written information; seek immediate help for chest pain, severe breathlessness or any blackout",
      "drives"
    ],
    "notesLeftOut": [
      "no orthopnoea, oedema, murmur; chest clear - negatives the cardiologist will confirm",
      "weight and BMI - not needed for this decision",
      "no 24-hour tape - rhythm already documented",
      "alcohol and smoking - minor, can be taken at assessment",
      "hip injection and heartburn - unrelated to the referral"
    ],
    "safety": [
      {
        "point": "Apixaban started today at the standard dose after discussing bleeding risk; previous transient ischaemic attack, CHA2DS2-VASc 4",
        "where": "paragraphs 1, 4, 5"
      },
      {
        "point": "Penicillin allergy",
        "where": "paragraph 4"
      },
      {
        "point": "Advised to seek immediate help for chest pain, severe breathlessness or any blackout",
        "where": "paragraph 5"
      },
      {
        "point": "Presyncopal episode and he drives",
        "where": "paragraphs 2, 5"
      }
    ]
  },
  "wri-medicine-community-mental-health-referral-for-first-episode-depression": {
    "header": [
      "Dr Yusuf Karim",
      "Consultant Psychiatrist",
      "Westbrook Community Mental Health Team",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Karim,",
    "re": "Re: Ms Rebecca Lyall, aged 34",
    "body": [
      "I am writing to refer Ms Lyall for specialist assessment and psychological therapy for moderate to severe depression with only a partial response to her first antidepressant.",
      "She describes four months of persistent low mood, worse in the mornings, with early waking, poor appetite and a weight loss of five kilograms. She has withdrawn socially and struggles to concentrate. This followed her mother's death in March 2026 and a relationship breakdown in April 2026. Her PHQ-9 score today was 18 and GAD-7 11. There were no psychotic features.",
      "She reports fleeting, unwelcome thoughts of not wanting to be here, but has no plan, intent or preparatory acts, and no history of self-harm. She identifies her four-year-old daughter as her reason not to act. We agreed a safety plan and gave written crisis contacts.",
      "Sertraline 50 mg daily was started on 21 August 2026 and is well tolerated. In June 2026 she stopped online therapy after two sessions, as she could not concentrate on the written exercises. She is a single parent with little local support, off work for three weeks.",
      "I would be grateful for your advice on further treatment.",
      "Thank you for seeing her."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner, Westbrook Surgery"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The opening states the referral, the diagnosis and its severity, and why specialist input is needed: only a partial response to treatment.",
      "selection": "Core symptoms, scores, precipitants and the full risk assessment are kept, with the failed online therapy. Migraine and the sick note are omitted.",
      "organisation": "Purpose, symptoms and context, risk, treatment so far and social situation, then the request.",
      "tone": "Factual and compassionate; risk is reported precisely, neither minimised nor dramatised."
    },
    "notesUsed": [
      "four months low mood, diurnal variation",
      "early waking, appetite, weight loss 5 kg",
      "anhedonia, withdrawal, poor concentration",
      "bereavement March 2026, breakup April 2026",
      "PHQ-9 18, GAD-7 11",
      "no psychotic features",
      "passive thoughts, no plan or intent, no self-harm",
      "daughter protective; safety plan and crisis contacts",
      "sertraline 50 mg from 21 August 2026",
      "online therapy two sessions, stopped",
      "single parent, little support, off work three weeks"
    ],
    "notesLeftOut": [
      "appearance and reactive affect - covered by 'no psychotic features' and the specialist's own examination",
      "no previous psychiatric contact, alcohol rarely - can be given at assessment",
      "occupation and sister abroad - the key point, limited support, is kept",
      "sleeping tablets not prescribed - changes nothing for the reader",
      "sick note and migraines - unrelated to the referral"
    ],
    "safety": [
      {
        "point": "Fleeting thoughts of not wanting to be here; no plan, intent or self-harm",
        "where": "paragraph 3"
      },
      {
        "point": "Safety plan agreed and crisis contacts given in writing",
        "where": "paragraph 3"
      },
      {
        "point": "Dependent child; single parent with limited support",
        "where": "paragraphs 3, 4"
      }
    ]
  },
  "wri-medicine-discharge-after-community-acquired-pneumonia": {
    "header": [
      "Dr Amara Okoye",
      "General Practitioner",
      "Lakeside Medical Centre",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Okoye,",
    "re": "Re: Mrs Doreen Whitfield, aged 74",
    "body": [
      "I am writing to inform you that Mrs Whitfield was discharged today, following admission on 30 August 2026 with right lower lobe community-acquired pneumonia, and to request your follow-up.",
      "She presented with four days of productive cough, fever and increasing breathlessness, and was briefly confused. On arrival her saturation was 89% on air and CURB-65 score 2. Her CRP of 186 fell to 42 by 3 September.",
      "She received intravenous co-amoxiclav, changed to oral after 48 hours, and oxygen until day three. At discharge she had been afebrile for 48 hours, her saturation was 95% on air and she was mobilising independently.",
      "She should complete the remaining three days of oral co-amoxiclav, finishing a seven-day course. Her tiotropium and salbutamol inhalers and metformin 1 g twice daily are unchanged.",
      "I would be grateful if you could arrange a repeat chest X-ray in six weeks to confirm resolution, support her to remain smoke-free, having stopped four months ago, and offer pneumococcal vaccination if due. She lives alone, but a neighbour visits daily. She has been advised to seek help if her breathlessness or fever returns, and may contact the ward for 48 hours.",
      "Thank you for your continued care."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Doctor, Medical Ward, Riverside Hospital"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The first sentence gives the diagnosis, the admission and discharge, and the purpose: follow-up by the GP.",
      "selection": "Severity, treatment response, the remaining antibiotics and the three follow-up actions are kept. Negative cultures, fluids and hand osteoarthritis are left out.",
      "organisation": "Purpose, presentation, treatment and progress, medication, then the actions requested and the safety-net advice.",
      "tone": "Clear and collegial; the requests are direct and grouped in one paragraph."
    },
    "notesUsed": [
      "admitted 30 August, discharged today",
      "right lower lobe pneumonia",
      "four-day cough, fever, breathlessness, brief confusion",
      "saturation 89%, CURB-65 2",
      "CRP 186 falling to 42",
      "IV co-amoxiclav to oral after 48 hours; oxygen weaned day three",
      "afebrile 48 hours, saturation 95%, mobile",
      "oral co-amoxiclav to complete seven days, three days remaining",
      "inhalers and metformin unchanged",
      "X-ray six weeks, support to remain smoke-free, pneumococcal vaccine",
      "lives alone, neighbour daily",
      "safety-net advice, ward number 48 hours"
    ],
    "notesLeftOut": [
      "full admission observations and white cell count - CURB-65 and saturation convey severity",
      "urea, cultures with no growth - change nothing for the GP",
      "intravenous fluids - completed in hospital",
      "past history dates - known to the GP",
      "hospital transport and hand osteoarthritis - not relevant to follow-up"
    ],
    "safety": [
      {
        "point": "Complete the remaining three days of oral co-amoxiclav (seven-day course)",
        "where": "paragraph 4"
      },
      {
        "point": "Repeat chest X-ray in six weeks to confirm resolution",
        "where": "paragraph 5"
      },
      {
        "point": "Lives alone; neighbour checks daily",
        "where": "paragraph 5"
      },
      {
        "point": "Told to seek help if breathlessness or fever returns; ward contact for 48 hours",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-medicine-discharge-after-paediatric-asthma-admission": {
    "header": [
      "Dr Priya Nair",
      "General Practitioner",
      "Elmwood Family Surgery",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Nair,",
    "re": "Re: Mia Holloway, aged 7 years",
    "body": [
      "I am writing to hand over the care of Mia, who was discharged today after admission on 31 August 2026 with an acute moderate to severe asthma exacerbation triggered by a viral infection. I would be grateful if you could review her at the practice within 48 hours.",
      "On admission her respiratory rate was 38, her oxygen saturation 90% on room air and her peak flow 55% of predicted. She needed oxygen, back-to-back salbutamol nebulisers, ipratropium for 24 hours and a three-day course of oral prednisolone, completed today. At discharge her saturation was 98% on room air and peak flow 85% of predicted.",
      "She goes home on beclometasone 100 mcg twice daily as a preventer and salbutamol 100 mcg as required via a spacer, now supplied. Her mother demonstrated correct spacer technique, and a written asthma action plan has been explained.",
      "Importantly, the family has been using the preventer only when symptoms occur, so adherence needs reinforcing. This is her second similar admission, the previous one 18 months ago, so routine asthma clinic review would be valuable. Her father smokes outdoors, and smoking cessation advice has been offered.",
      "Thank you for your ongoing care of Mia."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Paediatric Doctor, Paediatric Ward, Riverside Hospital"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The purpose and the time-critical request, review within 48 hours, are both in the first paragraph.",
      "selection": "Severity, treatment, discharge inhalers, the spacer and the action plan are kept, with the adherence problem and the previous admission. Eczema, swimming and dental questions are left out.",
      "organisation": "Purpose and request, admission and progress, discharge medication and education, then the risks the GP should address.",
      "tone": "Collegial and direct, with 'importantly' marking the key concern."
    },
    "notesUsed": [
      "admitted 31 August, discharged today",
      "viral trigger, moderate to severe",
      "respiratory rate 38, saturation 90%, peak flow 55%",
      "oxygen, salbutamol, ipratropium, prednisolone completed",
      "saturation 98%, peak flow 85%",
      "beclometasone 100 mcg twice daily, salbutamol 100 mcg via spacer",
      "spacer supplied, technique checked",
      "written action plan",
      "review within 48 hours",
      "preventer used only with symptoms",
      "previous admission 18 months ago",
      "asthma clinic review",
      "father smokes; cessation advice offered"
    ],
    "notesLeftOut": [
      "accessory muscles, wheeze - severity already clear",
      "eczema and emollient - unchanged, mild",
      "age at diagnosis - known to the GP",
      "no allergies, afebrile - change nothing",
      "school days missed - not needed for follow-up",
      "swimming and dental check - unrelated"
    ],
    "safety": [
      {
        "point": "Review at the practice within 48 hours",
        "where": "paragraph 1"
      },
      {
        "point": "Preventer used only when symptomatic; adherence needs reinforcing",
        "where": "paragraph 4"
      },
      {
        "point": "Second similar admission (previous 18 months ago)",
        "where": "paragraph 4"
      },
      {
        "point": "Spacer and written action plan supplied",
        "where": "paragraph 3"
      },
      {
        "point": "Household smoking exposure",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-emergency-department-letter-for-acute-coronary-syndrome": {
    "header": [
      "Dr Ravi Chandran",
      "On-call Cardiology Registrar",
      "Coronary Care Unit",
      "Harbourview Hospital",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Chandran,",
    "re": "Re: Mr Patrick O'Donnell, aged 59",
    "body": [
      "I am writing to refer Mr O'Donnell urgently for admission with a non-ST-elevation myocardial infarction, and would be grateful if you would consider inpatient angiography.",
      "He presented with a three-hour history of central crushing chest pain at rest, radiating to the left arm and jaw, with sweating and nausea. Sublingual glyceryl trinitrate reduced the pain from 9/10 to 6/10. His ECG shows T-wave inversion in V4 to V6 without ST elevation, unchanged at one hour, and troponin has risen from 320 ng/L on arrival to 640 ng/L at three hours. There are no signs of heart failure.",
      "In the department he has received aspirin 300 mg, ticagrelor 180 mg, fondaparinux, glyceryl trinitrate, and morphine 5 mg with an antiemetic. He is on cardiac monitoring. Haemoglobin and renal function are normal.",
      "Risk factors include type 2 diabetes, with an HbA1c of 68 mmol/mol, hyperlipidaemia, smoking 20 a day for 40 years, and his father's myocardial infarction at 55. He has no known allergies.",
      "He is a long-distance lorry driver, so his fitness to drive must be addressed before discharge. He has asked whether his employer will be informed.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Emergency Department Doctor, Harbourview Hospital"
    ],
    "bodyWords": 192,
    "commentary": {
      "opening": "The first sentence states the diagnosis, the urgency and both requests: admission and consideration of angiography.",
      "selection": "The rising troponin, ECG changes and all antithrombotic treatment are kept because the cardiologist acts on them. Normal examination findings, the chest X-ray and back pain are left out.",
      "organisation": "Request, then presentation and results, then treatment given, then risk factors, then the driving issue for discharge planning.",
      "tone": "Brief and factual, as suits an urgent hand-over between doctors."
    },
    "notesUsed": [
      "NSTEMI; urgent admission and angiography consideration",
      "three-hour central crushing pain at rest, radiation, sweating, nausea",
      "GTN eased pain 9/10 to 6/10",
      "T-wave inversion V4 to V6, no ST elevation, unchanged at one hour",
      "troponin 320 rising to 640 ng/L",
      "no heart failure signs",
      "aspirin 300 mg, ticagrelor 180 mg, fondaparinux, GTN, morphine 5 mg with antiemetic",
      "on cardiac monitoring",
      "haemoglobin and creatinine normal (stated without figures)",
      "diabetes, HbA1c 68, hyperlipidaemia, smoking 20 a day for 40 years, father MI at 55",
      "no known allergies",
      "lorry driver: fitness to drive before discharge; asked about employer"
    ],
    "notesLeftOut": [
      "full observations - stable and recorded on the chart; not needed to accept the patient",
      "normal heart sounds, clear chest, no raised JVP - summarised as no signs of heart failure",
      "chest X-ray normal and potassium normal - change nothing",
      "glucose 11.4 and cannulation - HbA1c already shows control; cannula is routine",
      "exact haemoglobin and creatinine figures - summarised as normal",
      "year of diabetes diagnosis, lives with partner - not needed for acute care",
      "lower back pain - unrelated to this admission"
    ],
    "safety": [
      {
        "point": "Dual antiplatelet therapy and fondaparinux already given, so doses must not be duplicated",
        "where": "paragraph 3"
      },
      {
        "point": "Rising troponin confirming ongoing myocardial injury",
        "where": "paragraph 2"
      },
      {
        "point": "Fitness to drive as a lorry driver must be addressed before discharge",
        "where": "paragraph 5"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-endocrine-referral-for-poorly-controlled-type-2-diabetes": {
    "header": [
      "Dr Priya Nair",
      "Consultant Endocrinologist",
      "Greenfield Diabetes Centre",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Nair,",
    "re": "Re: Mrs Felicity Boateng, aged 56",
    "body": [
      "I would be grateful for your guidance on optimising treatment for Mrs Boateng, who has type 2 diabetes with persistent hyperglycaemia despite maximal oral therapy and mildly impaired renal function.",
      "Her control has worsened steadily: her HbA1c was 64 mmol/mol in September 2025, 72 in March 2026 and 86 on 21 August 2026. Home readings are mostly 12 to 16 mmol/L before meals. Over the past two months she has developed polyuria, nocturia three times a night and fatigue.",
      "She currently takes metformin 1 g twice daily, now tolerated as modified release, gliclazide 80 mg twice daily, atorvastatin 20 mg at night and ramipril 5 mg daily. She collects her prescriptions regularly and reports full adherence.",
      "Her eGFR is stable at 58, with a mildly raised urine albumin-creatinine ratio of 4.5. Her BMI is 34 and her blood pressure 142/88. Her feet were normal today, and her retinal screening is due.",
      "I am considering a GLP-1 receptor agonist or an SGLT2 inhibitor and would value your advice on the most suitable agent, given her renal function and current sulfonylurea. She is a full-time schoolteacher and finds dieting difficult during term.",
      "Thank you for seeing her."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner, Greenfield Surgery"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The opening names the request at once: specialist guidance on the next agent for poorly controlled diabetes with impaired renal function.",
      "selection": "The rising HbA1c, medication, adherence and renal results are kept because they decide the choice of agent. Normal liver function, foot detail, dry eyes and the podiatry question are left out.",
      "organisation": "Request, then the trend in control, then medication and adherence, then renal and other findings, then the specific question.",
      "tone": "Collegial and precise, inviting the specialist's judgement."
    },
    "notesUsed": [
      "persistent hyperglycaemia despite maximal oral therapy, impaired renal function",
      "HbA1c 64 (September 2025), 72 (March 2026), 86 (21 August 2026)",
      "home readings 12 to 16 mmol/L",
      "polyuria, nocturia three times, fatigue for two months",
      "metformin 1 g twice daily (modified release, tolerated), gliclazide 80 mg twice daily, atorvastatin 20 mg, ramipril 5 mg",
      "good adherence",
      "eGFR 58 stable, ACR 4.5 mildly raised",
      "BMI 34, BP 142/88",
      "feet normal; retinal screening due",
      "considering GLP-1 receptor agonist or SGLT2 inhibitor; advice given renal function and sulfonylurea",
      "full-time schoolteacher, diet difficult in term"
    ],
    "notesLeftOut": [
      "weight 92 kg - BMI already given",
      "detailed foot findings - normal; summarised",
      "background retinopathy detail - screening is due and will update it",
      "liver function normal, cholesterol 5.1 - do not change the choice of agent",
      "non-smoker, minimal alcohol, lives with husband - not needed for this decision",
      "podiatry question, dry eyes - can be handled in primary care"
    ],
    "safety": [
      {
        "point": "Impaired renal function (eGFR 58, raised albumin-creatinine ratio) affecting the choice of agent",
        "where": "paragraph 4"
      },
      {
        "point": "Current sulfonylurea, relevant to hypoglycaemia risk if another agent is added",
        "where": "paragraphs 3, 5"
      },
      {
        "point": "Retinal screening due",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-gp-referral-for-suspected-dvt": {
    "header": [
      "Dr Helena Cardoso",
      "On-call Medical Registrar",
      "Emergency Assessment Unit",
      "Riverside Hospital",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Cardoso,",
    "re": "Re: Mr Daniel Ortega, aged 58",
    "body": [
      "I am writing to refer Mr Ortega for urgent assessment and imaging today for a suspected right-sided deep vein thrombosis and possible pulmonary embolism.",
      "He has a three-day history of progressive swelling, warmth and aching of the right calf. Since this morning he has had sharp right-sided chest discomfort on deep inspiration, without cough, haemoptysis or syncope. He returned five days ago from a thirteen-hour flight and has been less mobile for a week.",
      "His right calf is tender, warm and swollen, four centimetres larger than the left, with prominent superficial veins. His two-level Wells score indicates that a deep vein thrombosis is likely. His pulse is 96, blood pressure 138/84 and oxygen saturation 96% on room air. His chest is clear.",
      "I would be grateful if you would arrange a proximal leg vein ultrasound within 4 hours. If this cannot be done, please take a D-dimer and start interim therapeutic anticoagulation until the scan. A CT pulmonary angiogram should also be considered.",
      "He has well-controlled type 2 diabetes and takes metformin 1 g twice daily, which may be relevant if contrast is given. He is allergic to penicillin, which causes a rash.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The purpose, the urgency (today) and both suspected diagnoses appear in the first two sentences.",
      "selection": "Risk factors, signs, observations, the Wells result and the imaging and anticoagulation plan are kept. Old surgery, knee osteoarthritis, eczema and the insurance question are left out.",
      "organisation": "Request, then history and risk factors, then examination, then the time-bound imaging plan with its fallback, then medication and allergy.",
      "tone": "Direct and urgent but calm, as one doctor to another."
    },
    "notesUsed": [
      "suspected DVT with pleuritic chest discomfort; urgent assessment and imaging today",
      "three-day calf swelling, warmth, aching",
      "pleuritic chest pain since this morning; no cough, haemoptysis, syncope",
      "thirteen-hour flight five days ago; reduced mobility for a week",
      "calf tender, warm, oedematous, four centimetres larger, superficial veins",
      "two-level Wells score: DVT likely",
      "pulse 96, BP 138/84, saturation 96% on room air; chest clear",
      "proximal leg vein ultrasound within 4 hours",
      "if not possible within 4 hours: D-dimer and interim therapeutic anticoagulation until the scan",
      "consider CT pulmonary angiogram",
      "diabetes on metformin 1 g twice daily",
      "penicillin allergy - rash"
    ],
    "notesLeftOut": [
      "no surgery, malignancy, previous clot or family history - negatives the registrar will confirm",
      "measurement site, respiratory rate, temperature - detail beyond what is needed",
      "HbA1c 48 - diabetes summarised as well controlled",
      "knee osteoarthritis, appendicectomy, eczema - not relevant",
      "paracetamol as required, analgesia continued - minor",
      "travel insurance question, job, ex-smoker, social details - not needed for acute assessment"
    ],
    "safety": [
      {
        "point": "Possible pulmonary embolism with new pleuritic chest pain",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Proximal leg vein ultrasound within 4 hours",
        "where": "paragraph 4"
      },
      {
        "point": "If the scan cannot be done within 4 hours: D-dimer and interim therapeutic anticoagulation until the scan",
        "where": "paragraph 4"
      },
      {
        "point": "CT pulmonary angiogram to be considered",
        "where": "paragraph 4"
      },
      {
        "point": "Penicillin allergy (rash)",
        "where": "paragraph 5"
      },
      {
        "point": "Metformin, relevant to contrast for CT pulmonary angiography",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-medicine-gastroenterology-referral-for-iron-deficiency-anaemia": {
    "header": [
      "Dr Sanjay Mehta",
      "Consultant Gastroenterologist",
      "St Aiden's Hospital",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Mehta,",
    "re": "Re: Mr Colin Radley, aged 61",
    "body": [
      "I am writing to refer Mr Radley on the two-week-wait pathway for urgent upper gastrointestinal endoscopy and colonoscopy to investigate unexplained iron-deficiency anaemia with a positive faecal immunochemical test and weight loss.",
      "He has a three-month history of progressive fatigue and breathlessness on climbing stairs, with looser stools over the same period. He has had no rectal bleeding, abdominal pain or dysphagia. He has unintentionally lost four kilograms, from 82 kg to 78 kg, despite a normal appetite.",
      "On 28 August 2026 his haemoglobin was 88 g/L, with an MCV of 71 and a ferritin of 6, compared with 134 g/L in March 2026. Coeliac serology was negative. His faecal immunochemical test on 30 August 2026 was positive. He was pale, but abdominal and rectal examinations were unremarkable.",
      "His father was diagnosed with bowel cancer at 70. He has never had an endoscopy. He takes lansoprazole 30 mg daily for long-standing reflux and ramipril 5 mg daily.",
      "Please note that he is allergic to aspirin, which causes wheeze. I started ferrous fumarate 210 mg twice daily on 30 August 2026 and have warned him that it may darken his stool.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The first sentence gives the pathway, both procedures requested and the three findings that make the referral urgent.",
      "selection": "The fall in haemoglobin, iron studies, the positive test, weight loss and family history are kept. Normal liver and kidney results, alcohol, the vaccine question and knee pain are left out.",
      "organisation": "Request, then symptoms, then results, then background, then allergy and the new iron treatment.",
      "tone": "Concise and clinical, urgent without speculating about the cause."
    },
    "notesUsed": [
      "two-week-wait for gastroscopy and colonoscopy",
      "fatigue, breathlessness on stairs, looser stools for three months",
      "no rectal bleeding, pain or dysphagia",
      "weight loss 82 kg to 78 kg, normal appetite",
      "Hb 88 g/L, MCV 71, ferritin 6 on 28 August 2026; Hb 134 g/L in March 2026",
      "coeliac serology negative",
      "FIT positive 30 August 2026",
      "pale; abdominal and rectal examination normal",
      "father bowel cancer at 70; no previous endoscopy",
      "lansoprazole 30 mg, ramipril 5 mg",
      "aspirin allergy - wheeze",
      "ferrous fumarate 210 mg twice daily from 30 August 2026; warned of dark stools"
    ],
    "notesLeftOut": [
      "B12, folate, liver function, urea and electrolytes normal - do not change the plan",
      "pulse and blood pressure - stable, not needed",
      "hypertension year of onset - not relevant",
      "no mucus, no vomiting - minor negatives",
      "job, non-smoker, alcohol ten units, lives with wife - not needed for endoscopy",
      "shingles vaccine question, knee pain - unrelated"
    ],
    "safety": [
      {
        "point": "Aspirin allergy (wheeze)",
        "where": "paragraph 5"
      },
      {
        "point": "Oral iron started, which darkens the stool and may affect bowel preparation and interpretation of melaena",
        "where": "paragraph 5"
      },
      {
        "point": "Long-term lansoprazole, relevant to upper gastrointestinal findings",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-geriatric-referral-after-recurrent-falls": {
    "header": [
      "Dr Harriet Cole",
      "Consultant Geriatrician",
      "Falls and Syncope Service",
      "Elmwood Hospital",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Cole,",
    "re": "Re: Mrs Edith Marlow, aged 83",
    "body": [
      "I would be grateful if you would see Mrs Marlow for a multifactorial falls assessment, as she has fallen three times in two months.",
      "On 12 July 2026 she tripped on a rug indoors. On 9 August 2026 she felt dizzy on standing from a chair and fell, fracturing her left wrist, now healed. On 30 August 2026 she fell outdoors without warning. She has never lost consciousness.",
      "Her blood pressure falls from 138/80 lying to 112/68 at one minute standing, with light-headedness. Her gait is unsteady with a stick, leg power is 4/5, and her timed up-and-go is 18 seconds. She has bilateral cataracts and osteoporosis, and her Abbreviated Mental Test Score is 8 out of 10.",
      "She takes amlodipine 10 mg and bendroflumethiazide 2.5 mg daily, and has taken zopiclone 7.5 mg at night for three years. I would value a review of these, with gait and balance assessment and falls-prevention advice. Her vitamin D was low at 28 nmol/L; I started replacement today. Codeine causes nausea, an intolerance rather than an allergy.",
      "She lives alone without a care package and does not wear her personal alarm; her daughter visits daily.",
      "Thank you for seeing her."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner, Elmwood Surgery"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The opening states the request and the reason in one sentence: three falls in two months.",
      "selection": "The falls, postural drop, mobility, cognition, medicines that raise falls risk and the home situation are kept. Normal blood results, the hearing test question and the lunch club are left out.",
      "organisation": "Request, then the falls in date order, then findings, then medicines with the specific review requested, then home risk.",
      "tone": "Respectful and factual, collegial between doctors."
    },
    "notesUsed": [
      "three falls in two months; multifactorial assessment",
      "12 July 2026 trip; 9 August 2026 dizzy on standing, wrist fracture healed; 30 August 2026 outdoors, no warning",
      "no loss of consciousness",
      "lying 138/80, standing 112/68 at one minute, light-headed",
      "unsteady gait with stick, power 4/5, timed up-and-go 18 seconds",
      "cataracts, osteoporosis, AMTS 8 out of 10",
      "amlodipine 10 mg, bendroflumethiazide 2.5 mg, zopiclone 7.5 mg for three years",
      "medication review, gait and balance, falls prevention",
      "vitamin D 28 nmol/L, replacement started",
      "codeine intolerance (nausea), not an allergy",
      "lives alone, no care package, alarm not worn, daughter visits daily"
    ],
    "notesLeftOut": [
      "pulse 72 regular, no palpitations - normal findings",
      "got up unaided twice - minor detail",
      "full blood count, kidney, thyroid and calcium normal - change nothing",
      "points lost on date and recall - the score is enough for referral",
      "paracetamol as required - minor",
      "hearing test question, lunch club, widowed - not needed for this assessment"
    ],
    "safety": [
      {
        "point": "Postural drop in blood pressure with symptoms, on two antihypertensives",
        "where": "paragraphs 3, 4"
      },
      {
        "point": "Long-term hypnotic (zopiclone) increasing falls risk",
        "where": "paragraph 4"
      },
      {
        "point": "Osteoporosis with a previous fall-related fracture",
        "where": "paragraphs 2, 3"
      },
      {
        "point": "Lives alone and does not wear her personal alarm",
        "where": "paragraph 5"
      },
      {
        "point": "Codeine intolerance (nausea), not an allergy",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-neurology-referral-for-first-unprovoked-seizure": {
    "header": [
      "Dr Marcus Lindqvist",
      "Consultant Neurologist",
      "Central First-Seizure Clinic",
      "Central",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Lindqvist,",
    "re": "Re: Miss Olivia Pearson, aged 24",
    "body": [
      "I am writing to request urgent assessment of Miss Pearson, who had a first unprovoked generalised tonic-clonic seizure at work on 3 September 2026.",
      "The event, witnessed by a colleague at approximately 11:15, lasted around ninety seconds, with left-sided tongue-biting and brief urinary incontinence. She recalls no warning and was confused for twenty minutes before recovering fully. She had slept only about four hours nightly for three nights because of a work deadline. There was no alcohol, drug use, new medication, fever or head injury.",
      "Today, neurological and cardiovascular examinations were normal. Her CT head, blood tests and ECG were normal, and a pregnancy test was negative. There is no relevant personal or family history.",
      "She takes the combined oral contraceptive pill and is allergic to latex. No anticonvulsant has been started, and an outpatient EEG and MRI are awaited.",
      "She has been advised in writing not to drive and to inform the licensing authority, and to avoid swimming alone, baths and working at height until reviewed. I would be grateful if you could see her urgently to confirm the diagnosis and advise on further management, including her return to work.",
      "Thank you for seeing her."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner, Central Surgery"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The first sentence states the urgent request and the event, so the neurologist knows at once why she is being seen.",
      "selection": "The seizure description, sleep deprivation, normal investigations, the pill, the latex allergy and the driving advice are kept; routine social and minor details are left out.",
      "organisation": "Request, then the event and triggers, then findings, then medication and plan, then advice given and the specific request.",
      "tone": "Formal and collegial, urgent without alarm."
    },
    "notesUsed": [
      "first generalised tonic-clonic seizure at work on 3 September 2026, about 11:15, witnessed",
      "ninety seconds, left tongue-biting, brief incontinence, twenty minutes post-ictal confusion, no aura",
      "about four hours' sleep a night for three nights",
      "no alcohol, drugs, new medication, fever or head injury",
      "normal neurological and cardiovascular examination; normal CT head, bloods, ECG; pregnancy test negative",
      "no personal or family history",
      "combined oral contraceptive pill; latex allergy",
      "no anticonvulsant; EEG and MRI awaited",
      "written driving advice; avoid swimming alone, baths, heights",
      "return to work question"
    ],
    "notesLeftOut": [
      "blood pressure 118/72 and individual normal blood results - normal and change nothing",
      "corrected QT detail - covered by 'ECG normal'",
      "no febrile convulsions in childhood - covered by 'no relevant personal history'",
      "lives with partner, non-smoker - not needed for the assessment",
      "tension headaches - minor and unrelated",
      "screen work question and the answer given - already answered; the neurologist can discuss it if she asks"
    ],
    "safety": [
      {
        "point": "Advised in writing not to drive and to inform the licensing authority",
        "where": "paragraph 5"
      },
      {
        "point": "Advised to avoid swimming alone, baths and working at height",
        "where": "paragraph 5"
      },
      {
        "point": "Latex allergy",
        "where": "paragraph 4"
      },
      {
        "point": "Takes the combined oral contraceptive pill (relevant to any future anticonvulsant choice)",
        "where": "paragraph 4"
      },
      {
        "point": "No anticonvulsant started",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-paediatric-referral-for-faltering-growth": {
    "header": [
      "Dr Eleanor Vasquez",
      "Consultant Paediatrician",
      "Children's Outpatient Department",
      "Northgate Hospital",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Vasquez,",
    "re": "Re: Lucas Bramley, aged 18 months",
    "body": [
      "I am writing to refer Lucas for assessment of faltering growth and recurrent loose stools, with strongly positive coeliac serology. I would be grateful if you could confirm the diagnosis and arrange dietetic input.",
      "His weight has fallen from the 50th centile at 12 months to the 9th today, at 10.1 kg, while length and head circumference remain on the 50th centile. For around four months he has passed three to four loose, pale and offensive stools a day, with irritability, reduced appetite and abdominal distension. He was thin, with reduced buttock fat and a mildly distended, soft abdomen without organomegaly. His development is normal.",
      "Bloods on 28 August 2026 showed a strongly positive anti-tissue transglutaminase antibody with normal total IgA, and mild iron-deficiency anaemia, with haemoglobin 98 g/L and ferritin 8. His maternal aunt has coeliac disease.",
      "His diet includes bread, pasta and cereal; he takes daily vitamin D drops and has no known allergies.",
      "Importantly, the family has been advised not to remove gluten from his diet before your review, as this would affect the results. I would also welcome your advice on managing his iron deficiency.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner, Northgate Surgery"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "The purpose and both requests, confirmation and dietetic input, are stated in the first paragraph.",
      "selection": "Growth figures, symptoms, the positive serology with normal IgA, anaemia and family history are kept; birth, immunisation and nursery details are omitted.",
      "organisation": "Request, then growth and clinical picture, then results and family history, then diet, then the gluten instruction.",
      "tone": "Clear and collegial, with the gluten advice signalled as important."
    },
    "notesUsed": [
      "weight 50th centile at 12 months to 9th today, 10.1 kg; length and head on 50th",
      "loose, pale, offensive stools three to four a day for about four months",
      "irritability, reduced appetite, distension",
      "thin, reduced buttock fat, mildly distended soft abdomen, no organomegaly",
      "development normal",
      "28 August 2026: anti-tissue transglutaminase strongly positive, IgA normal, haemoglobin 98 g/L, ferritin 8",
      "maternal aunt with coeliac disease",
      "diet includes gluten; vitamin D drops; no known allergies",
      "advised not to remove gluten before review"
    ],
    "notesLeftOut": [
      "earlier weights 9.8 kg and 9.9 kg - the centile fall already shows the trend",
      "MCV 68 - adds little beside ferritin",
      "milestone details, hearing screen - summarised as normal development",
      "birth history, immunisations - normal and not relevant",
      "cow's milk 400 ml - not essential to this referral",
      "social details, nursery form, 18-month review - for the practice, not the paediatrician"
    ],
    "safety": [
      {
        "point": "Family told NOT to remove gluten before specialist review",
        "where": "paragraph 5"
      },
      {
        "point": "Iron-deficiency anaemia needing management",
        "where": "paragraphs 3 and 5"
      }
    ]
  },
  "wri-medicine-respiratory-referral-for-suspected-lung-malignancy": {
    "header": [
      "Dr Wendy Acheampong",
      "Consultant Respiratory Physician",
      "Rapid-Access Lung Clinic",
      "Stonebridge Hospital",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Acheampong,",
    "re": "Re: Mr Albert Finch, aged 66",
    "body": [
      "I am writing to refer Mr Finch urgently under the two-week-wait pathway for investigation of a 3 cm right upper lobe mass on his chest X-ray of 1 September 2026.",
      "His cough changed in character about six weeks ago, unlike his usual COPD cough, and has not responded to two antibiotic courses. He has had two episodes of blood-streaked sputum, on 22 and 28 August 2026, and a continuous hoarse voice for three weeks. He has lost 5 kg unintentionally over two months, from 74 kg to 69 kg, with new fatigue and poor appetite.",
      "Today there was reduced air entry in the right upper zone, and oxygen saturation was 94 per cent on air at rest. There was no clubbing or palpable lymphadenopathy. Bloods showed mild anaemia, haemoglobin 112 g/L, with normal calcium, sodium and liver function.",
      "He is a 40 pack-year ex-smoker who stopped four years ago, and was exposed to asbestos as a welder between 1979 and 1994. He uses tiotropium and salbutamol inhalers and has no known allergies.",
      "A CT of the chest and abdomen has been arranged before clinic. I would be grateful for your urgent assessment.",
      "Thank you for seeing him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner, Stonebridge Surgery"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The pathway, the urgency and the imaging finding are given in one opening sentence.",
      "selection": "Red-flag symptoms with their timing, the examination, relevant bloods, smoking and asbestos exposure are kept; hearing loss and the emollient request are omitted.",
      "organisation": "Request, then symptoms, then examination and results, then risk factors and medication, then the arranged scan and the request.",
      "tone": "Concise and urgent, as suits a suspected cancer referral."
    },
    "notesUsed": [
      "3 cm right upper lobe mass on chest X-ray 1 September 2026",
      "cough changed in character about six weeks ago, unresponsive to two antibiotic courses",
      "blood-streaked sputum 22 and 28 August 2026",
      "hoarse voice three weeks",
      "weight down 5 kg over two months, 74 kg to 69 kg; fatigue; reduced appetite",
      "reduced air entry in the right upper zone; saturation 94 per cent on air",
      "no clubbing or lymphadenopathy",
      "haemoglobin 112 g/L; calcium, sodium, liver function normal",
      "40 pack-years, stopped four years ago; asbestos 1979 to 1994",
      "tiotropium, salbutamol; no known allergies",
      "CT chest and abdomen arranged"
    ],
    "notesLeftOut": [
      "corrected calcium value 2.38 - stated as normal instead",
      "no night sweats, bone pain or headache, no vena caval obstruction - negatives summarised by the examination findings",
      "COPD diagnosis year - not needed",
      "lives with wife, drives - not needed for this referral",
      "emollient request, occupational hearing loss - unrelated"
    ],
    "safety": [
      {
        "point": "Haemoptysis and hoarseness (red flags)",
        "where": "paragraph 2"
      },
      {
        "point": "Oxygen saturation 94 per cent on air with reduced air entry in the right upper zone",
        "where": "paragraph 3"
      },
      {
        "point": "Asbestos exposure",
        "where": "paragraph 4"
      },
      {
        "point": "CT chest and abdomen already arranged before clinic",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-medicine-surgical-referral-for-symptomatic-gallstones": {
    "header": [
      "Mr David Ashworth",
      "Consultant General Surgeon",
      "Upper GI Surgery",
      "Fairmont Hospital",
      "4 September 2026"
    ],
    "salutation": "Dear Mr Ashworth,",
    "re": "Re: Mrs Anita Sharma, aged 45",
    "body": [
      "I am writing to refer Mrs Sharma for surgical assessment of symptomatic gallstones and consideration of elective laparoscopic cholecystectomy.",
      "For three months she has had recurrent colicky right upper quadrant pain, radiating to the right shoulder blade, within an hour of fatty meals and lasting thirty minutes to several hours. Two severe episodes, on 8 and 27 August 2026, lasted around four hours with nausea and vomiting. There has been no jaundice or fever; she is well between attacks.",
      "Today she had mild right upper quadrant tenderness and a negative Murphy's sign. Ultrasound on 26 August 2026 showed multiple gallstones, the largest 12 mm, a normal gallbladder wall and an undilated 4 mm common bile duct. Liver function, amylase, full blood count and C-reactive protein were normal.",
      "She takes the combined oral contraceptive pill, relevant to perioperative planning, and occasional ibuprofen. She has no known allergies; her body mass index is 29.",
      "The attacks have cost her four days off work in three months. She has been advised on a low-fat diet and to attend urgently if pain occurs with fever, jaundice or persistent vomiting. I would be grateful for your surgical opinion.",
      "Thank you for seeing her."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Practitioner, Fairmont Surgery"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The opening names the condition and the procedure being considered, matching the task.",
      "selection": "Pain pattern, severe episodes, absent complications, ultrasound and bloods, the pill and the safety-net advice are kept; back pain and pregnancy history are omitted.",
      "organisation": "Request, history, findings and results, medication, then impact, advice and the request.",
      "tone": "Formal and factual, suited to an elective referral."
    },
    "notesUsed": [
      "three months of colicky right upper quadrant pain after fatty meals, radiating to shoulder blade",
      "severe episodes 8 and 27 August 2026, about four hours, nausea and vomiting",
      "no jaundice or fever; well between attacks",
      "mild tenderness, Murphy's negative",
      "ultrasound 26 August 2026: multiple stones, largest 12 mm, normal wall, duct 4 mm",
      "normal liver function, amylase, blood count; CRP 4",
      "combined pill, occasional ibuprofen, no known allergies, BMI 29",
      "four days off in three months",
      "low-fat diet and urgent attendance advice"
    ],
    "notesLeftOut": [
      "temperature 36.8, pulse 76, no mass, stool and urine colour normal, liver and pancreas normal on ultrasound - normal findings that change nothing",
      "two previous pregnancies - not relevant",
      "non-smoker, alcohol four units - not needed",
      "family details - not needed",
      "night-shift detail - summarised as impact on work",
      "occupational health clearance and back pain - for later or unrelated"
    ],
    "safety": [
      {
        "point": "Told to attend urgently with pain plus fever, jaundice or persistent vomiting",
        "where": "paragraph 5"
      },
      {
        "point": "Combined oral contraceptive pill (venous thromboembolism risk around surgery)",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-medicine-transfer-of-stroke-patient-to-rehabilitation-unit": {
    "header": [
      "Dr Ngozi Adeyemi",
      "Consultant in Rehabilitation Medicine",
      "Maple Ward",
      "Brookhaven Rehabilitation Unit",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Adeyemi,",
    "re": "Re: Mr Gerald Thompson, aged 71",
    "body": [
      "I am writing to request inpatient neurorehabilitation for Mr Thompson, who transfers to you today, 4 September 2026, following a left middle cerebral artery ischaemic stroke on 23 August 2026.",
      "He presented with sudden right-sided weakness, facial droop and speech difficulty, witnessed at 07:40, and was thrombolysed at 09:25. Imaging at 24 hours showed no haemorrhagic transformation, and antiplatelet therapy was started. Atrial fibrillation was excluded on prolonged monitoring.",
      "Right arm power is 3/5 and right leg 4/5. His expressive dysphasia is improving, with intact comprehension. His swallow, reassessed on 1 September, is safe for a normal diet and thin fluids. He transfers with one assistant and walks short distances with a frame and one person, but has not attempted stairs. He has occasional urgency but is continent with prompting.",
      "His medications are clopidogrel 75 mg daily, atorvastatin 80 mg at night, ramipril 2.5 mg daily and paracetamol as required. He has hypertension and no known allergies.",
      "I would be grateful if you could continue his multidisciplinary rehabilitation towards his agreed goals of independent transfers and discharge home. As his only bathroom is upstairs, stairs are the main discharge concern.",
      "Thank you for your help."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Doctor, Stroke Team, Brookhaven"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The request and the diagnosis with its date come first, so the unit knows what it is taking on.",
      "selection": "Acute treatment, current function, swallow status, full medication and the stairs concern are kept; driving and glasses are left for later.",
      "organisation": "Request, acute course, current status, medication, then goals and the discharge issue.",
      "tone": "Collegial handover between doctors, precise about doses."
    },
    "notesUsed": [
      "left middle cerebral artery ischaemic stroke 23 August 2026; transfer 4 September 2026",
      "onset witnessed 07:40; thrombolysed 09:25",
      "no haemorrhagic transformation at 24 hours; antiplatelet then started",
      "atrial fibrillation excluded",
      "arm 3/5, leg 4/5; improving expressive dysphasia, comprehension intact",
      "swallow safe on 1 September: normal diet, thin fluids",
      "transfers with one; frame and one person; no stairs yet",
      "urgency, continent with prompting",
      "clopidogrel 75 mg, atorvastatin 80 mg, ramipril 2.5 mg, paracetamol",
      "hypertension; no known allergies",
      "goals: independent transfers, discharge home; bathroom upstairs"
    ],
    "notesLeftOut": [
      "first swallow assessment on 25 August - superseded by 1 September",
      "bowels regular - normal",
      "therapy already given on the ward - covered by the request to continue rehabilitation",
      "ex-smoker since 2005, hypertension since 2012 - dates not needed",
      "retired postman, children nearby - social detail the unit will collect",
      "driving question, reading glasses - not urgent; can be addressed during rehabilitation"
    ],
    "safety": [
      {
        "point": "Thrombolysed; no haemorrhagic transformation; on clopidogrel 75 mg daily",
        "where": "paragraphs 2 and 4"
      },
      {
        "point": "Swallow safe for normal diet and thin fluids (latest assessment 1 September)",
        "where": "paragraph 3"
      },
      {
        "point": "Needs one person to transfer and walk; has not attempted stairs (falls risk)",
        "where": "paragraph 3"
      },
      {
        "point": "No known allergies; full medication with doses",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-letter-to-the-specialist-team-a-woman-of-childbearing-age-taking-valproate": {
    "header": [
      "Dr Ingrid Baptiste",
      "Consultant Neurologist, Epilepsy Service",
      "Thornfield Hospital",
      "6 December 2025"
    ],
    "salutation": "Dear Dr Baptiste,",
    "re": "Re: Miss Bethan Okorafor-Lisle, aged 27, sodium valproate and trying to conceive",
    "body": [
      "I am writing to request an urgent review of Miss Okorafor-Lisle, who takes sodium valproate 1 g twice daily for generalised tonic-clonic epilepsy and is actively trying to conceive without contraception. I would be grateful if your service could consider and supervise a change to a lower-risk medicine, and document her annual risk acknowledgement.",
      "She stopped her combined oral contraceptive in September 2025 and has had unprotected intercourse since. Today's pharmacy pregnancy test was negative but cannot exclude recent conception; I advised repeating it in three weeks or if a period is missed. She was unaware of the risk of physical abnormalities and developmental problems, and has not been reviewed by your service since 2020.",
      "Today I gave her the patient guide and card, supplied folic acid 5 mg daily and advised highly effective contraception, which she will arrange with the practice nurse on 8 December. Her first instinct was to stop valproate immediately; I explained she must not, and she agreed to continue until reviewed.",
      "She has been seizure free since October 2019 and fears a change could cost her licence and job. She has no known allergies. Her partner is supportive and would like to attend."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Thornfield Pharmacy"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The request and the reason it is urgent come in the first two sentences: she is trying to conceive now, without contraception, while taking valproate, so the neurologist must see at once why this cannot wait for a routine appointment.",
      "selection": "Pregnancy risk, contraception, the negative test and its limits, folic acid and the instruction not to stop the medicine are kept. Her weight, smoking, alcohol, the telephone call to the service and the pack-label check are left out because they do not change the specialist's decision.",
      "organisation": "Request, then the contraception and pregnancy position, then what the pharmacist has already done, then her concerns and the practical point that her partner wants to attend.",
      "tone": "Professional and direct between colleagues; the urgency is stated plainly without criticising earlier care."
    },
    "notesUsed": [
      "sodium valproate 1 g twice daily, generalised tonic-clonic epilepsy",
      "trying to conceive; COC stopped September 2025; unprotected intercourse",
      "pregnancy test negative today; repeat in three weeks or if period missed",
      "unaware of risk of physical abnormalities and developmental problems",
      "not reviewed by epilepsy service since 2020",
      "patient guide and card given; folic acid 5 mg supplied",
      "highly effective contraception; practice nurse 8 December",
      "wanted to stop valproate; agreed to continue until review",
      "seizure free since October 2019; fears for licence and job",
      "no known allergies; partner supportive, wants to attend",
      "request: urgent review, change of medicine by specialist service, annual risk acknowledgement"
    ],
    "notesLeftOut": [
      "age at onset, start date 2012, dispensed since 2016 - background the clinic already holds",
      "telephone nurse appointments, last March 2024 - summarised as no specialist review since 2020",
      "the card and the form she half-remembers - covered by 'no documented risk acknowledgement' request",
      "last menstrual period 24 November and regular cycle - the repeat-test advice carries the safety point",
      "pack label and leaflet checked, record made - pharmacy housekeeping",
      "telephone call to the service - the reason for writing, not needed in the body",
      "weight 64 kg, non-smoker, alcohol rarely, no other history or medication - not relevant to the decision",
      "her distressed words and the question about choosing children - sensitive detail for the clinic to explore"
    ],
    "safety": [
      {
        "point": "Actively trying to conceive on valproate with no contraception",
        "where": "paragraph 1"
      },
      {
        "point": "Negative test cannot exclude recent conception; repeat in three weeks or if a period is missed",
        "where": "paragraph 2"
      },
      {
        "point": "Must not stop valproate suddenly; agreed to continue until reviewed",
        "where": "paragraph 3"
      },
      {
        "point": "Folic acid 5 mg daily supplied",
        "where": "paragraph 3"
      },
      {
        "point": "Highly effective contraception to be arranged with practice nurse on 8 December",
        "where": "paragraph 3"
      },
      {
        "point": "Change of medicine to be undertaken and monitored by the specialist service",
        "where": "paragraph 1"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-advice-letter-to-a-carer-giving-medicines-through-a-feeding-tube": {
    "header": [
      "Mrs Philippa Anand-Rourke",
      "Wife and main carer of Mr Desmond Rourke",
      "Home address",
      "19 January 2025"
    ],
    "salutation": "Dear Mrs Anand-Rourke,",
    "re": "Re: Mr Desmond Rourke, aged 66, giving medicines through his feeding tube",
    "body": [
      "I am writing to explain how to give Desmond's medicines through his tube safely, as some of the routine needs to change. Most importantly, please never crush any tablet without checking with the pharmacy first, and if a supply looks unfamiliar, telephone us before giving it.",
      "Omeprazole capsules must not be crushed. Liquid riluzole and dispersible omeprazole should arrive on 22 January; until then, crush and disperse each riluzole tablet on its own. His other medicines stay the same.",
      "For every dose, keep Desmond upright for at least 30 minutes and stop the feed around his medicines as the dietitian advised. Flush the tube with 30 ml of cooled boiled water first, then give each medicine separately, never mixed together, flushing with 10 ml between each one and 30 ml after the last. Please use the purple syringes rather than a spoon.",
      "You cleared both blockages correctly with warm water, and they are unlikely to have caused harm; please report any future blockage to the nutrition nurse. At the weekend, flush gently with warm water without force; if it does not clear, ring the out-of-hours nursing number on the chart or NHS 111. I will telephone on 26 January."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Bracken Row Pharmacy"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The letter says at once why it is written and puts the single most important rule, never crush without checking, in the first paragraph so she cannot miss it.",
      "selection": "Only the medicines that change and the flushing routine are given in detail, with the interim plan for riluzole so that no dose is missed before the liquid arrives. The medicines that stay the same, her sleep, the daughter and the carer assessment are left out or summarised, because they do not alter how she gives each dose.",
      "organisation": "Purpose and main rule, then the medicines that change, then the step-by-step routine for every dose, then her questions about the blockages, with the follow-up call last.",
      "tone": "Plain, warm English for a carer, with no jargon; reassuring about what she has done while being firm about what must change."
    },
    "notesUsed": [
      "never crush anything without checking; telephone before giving an unfamiliar supply",
      "omeprazole must not be crushed; riluzole tablets crushed and dispersed separately until the liquid arrives",
      "liquid riluzole and dispersible omeprazole ordered, expected 22 January",
      "upright for at least 30 minutes",
      "stop the feed around medicines as dietitian instructed",
      "30 ml cooled boiled water before; each medicine separately; 10 ml between; 30 ml after",
      "purple syringes, not a kitchen spoon",
      "blockages cleared correctly with warm water; unlikely to have caused harm; report future blockages to the nutrition nurse",
      "her questions: harm from blockages; weekend blockage: warm water, no force, out-of-hours nursing number or NHS 111",
      "contact numbers on the chart",
      "follow-up call 26 January"
    ],
    "notesLeftOut": [
      "doses of each medicine - not needed to explain how to give them, and on the chart",
      "baclofen, senna, macrogol, glycopyrronium, paracetamol, morphine - no change, summarised in one sentence",
      "diagnosis date and tube placement October 2024 - she knows this",
      "medicine times and her work routine - she already manages these",
      "sleep, tearfulness, carer assessment referral accepted - already arranged face to face; omitted to keep the letter focused",
      "daughter to be taught the routine - already agreed at the visit",
      "whether she has been doing it wrong - answered by the reassurance that she cleared the blockages correctly and the changes are explained"
    ],
    "safety": [
      {
        "point": "Never crush any tablet without checking with the pharmacy; telephone before giving an unfamiliar supply",
        "where": "paragraph 1"
      },
      {
        "point": "Omeprazole must not be crushed; riluzole crushed and dispersed on its own only until the liquid arrives",
        "where": "paragraph 2"
      },
      {
        "point": "Give each medicine separately, never mixed, with flushes before, between and after",
        "where": "paragraph 3"
      },
      {
        "point": "Keep him upright for at least 30 minutes",
        "where": "paragraph 3"
      },
      {
        "point": "Stop the feed around the medicines",
        "where": "paragraph 3"
      },
      {
        "point": "Use the purple syringes only",
        "where": "paragraph 3"
      },
      {
        "point": "Weekend blockage: warm water, never force, out-of-hours nursing number or NHS 111",
        "where": "paragraph 4"
      },
      {
        "point": "Follow-up telephone call 26 January",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-letter-to-the-care-home-medicines-for-a-new-resident": {
    "header": [
      "Ms Charmaine Oduya-Blackwell",
      "Registered Manager",
      "Willowmead Care Home",
      "4 February 2025"
    ],
    "salutation": "Dear Ms Oduya-Blackwell,",
    "re": "Re: Mrs Marguerite Okonkwo-Sayers, aged 88, medicines on admission",
    "body": [
      "I am writing about the medicines for Mrs Okonkwo-Sayers, admitted today, and the instructions the home must follow. The most important, her Parkinson's medicine timing, should appear on the front of her medicines administration record.",
      "Co-careldopa 25/100 is time-critical: one tablet at 06:00, 10:00, 14:00, 18:00 and 22:00, separate from the medicine rounds. A delay of over thirty minutes can leave her unable to move or swallow safely. It may be dispersed in a little water.",
      "Alendronic acid 70 mg is due each Monday, whole, with a full glass of plain water, 30 minutes before food or other medicines, and she must remain upright afterwards; it must never be crushed. Remove the old rivastigmine patch before applying the new one, and record the site. Metoclopramide and prochlorperazine must not be given.",
      "There is no covert administration authorisation. If she refuses, record it, offer again later and contact the practice if she refuses two consecutive co-careldopa doses. Her son suggests a cup of tea alongside her tablets.",
      "Please record her weight and lying and standing blood pressure monthly, bowels daily and any falls, and report new hallucinations. Training is booked for 11 February, and I will visit on 18 February."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Pharmacist, Care Home Service",
      "Willowmead Pharmacy"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The purpose is stated and the single most dangerous point, the co-careldopa timing, is flagged in the first paragraph with a clear action: put it on the front of the record.",
      "selection": "Only medicines needing special handling are detailed: co-careldopa, alendronic acid, the rivastigmine patch and the two drugs to avoid. Routine medicines such as amlodipine, calcium and paracetamol are left on the chart, and the hospital story is reduced to the safety lesson it taught.",
      "organisation": "Purpose, then time-critical medicine, then administration rules for other high-risk medicines, then refusal and covert administration, then monitoring and support.",
      "tone": "Clear and instructional for a care home manager, firm on the safety points but practical and courteous."
    },
    "notesUsed": [
      "co-careldopa 25/100 five times daily at fixed times, separate from rounds",
      "delay of more than thirty minutes: unable to move, swallow, distressed",
      "instruction on front of MAR",
      "co-careldopa may be dispersed",
      "alendronic acid 70 mg Mondays, whole, upright, water, 30 minutes before food; not crushed",
      "rivastigmine patch: remove old, record site",
      "metoclopramide and prochlorperazine must not be used",
      "no covert administration authorisation; refusal plan; contact practice after two consecutive refused doses",
      "son: cup of tea alongside tablets",
      "monitoring: weight, bowels, falls, lying and standing BP, hallucinations",
      "training 11 February; visit 18 February"
    ],
    "notesLeftOut": [
      "diagnoses and reason for moving - the home's admission records hold these",
      "details of the December hospital admission - the lesson is carried by the timing instruction",
      "home round times - implied by 'separately from the medicine rounds'",
      "level 6 soft diet, level 0 fluids - already recorded by speech and language therapy",
      "amlodipine, colecalciferol and calcium, macrogol, paracetamol - routine, on the dispensed chart; her admission weight of 56 kg supports the full paracetamol dose",
      "son's lasting power of attorney and wish to be involved - relevant only if a best interests meeting is needed",
      "out-of-hours number - on the medicines folder",
      "allergies none known - no action needed"
    ],
    "safety": [
      {
        "point": "Co-careldopa at her own five fixed times, not with the rounds; delay over thirty minutes is harmful",
        "where": "paragraph 2"
      },
      {
        "point": "Timing instruction on the front of the administration record",
        "where": "paragraph 1"
      },
      {
        "point": "Alendronic acid whole, upright, with water, never crushed",
        "where": "paragraph 3"
      },
      {
        "point": "Remove old rivastigmine patch before applying a new one",
        "where": "paragraph 3"
      },
      {
        "point": "Metoclopramide and prochlorperazine must not be given",
        "where": "paragraph 3"
      },
      {
        "point": "No covert administration; refusal plan and contact practice after two refused co-careldopa doses",
        "where": "paragraph 4"
      },
      {
        "point": "Monitoring including postural blood pressure, falls and hallucinations",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-pharmacy-letter-to-the-general-practitioner-nephrotoxic-combination-in-chronic-kidney-disease": {
    "header": [
      "Dr Katrina Bellweather",
      "General Practitioner",
      "The Hollowfield Practice",
      "24 May 2025"
    ],
    "salutation": "Dear Dr Bellweather,",
    "re": "Re: Mr Ranjit Oyelaran-Whitcombe, aged 73, worsening kidney function and medication review",
    "body": [
      "I am writing to request a review of Mr Oyelaran-Whitcombe's medicines, with repeat kidney function, potassium and ketones within 48 hours, and your decision on whether and when each of the five medicines I advised him to stop should be restarted.",
      "He developed diarrhoea and vomiting on 19 May but continued ramipril 10 mg, indapamide 2.5 mg, naproxen 500 mg twice daily, empagliflozin 10 mg and metformin 1 g twice daily. On 22 May he was dehydrated, with pulse 104 and blood pressure 104/62 sitting, 88/54 standing. I advised stopping all five and supplied rehydration sachets and a sick day rules card.",
      "Bloods on 23 May showed creatinine 218, estimated filtration rate 24, down from 42 in February, and potassium 5.6; ketones were not checked despite empagliflozin.",
      "By 24 May he was improving, drinking about two litres, and had restarted none of them. Please consider holding bisoprolol until his blood pressure recovers. Metformin should not restart while his filtration rate is below 30, and I question whether naproxen, on repeat for three years without review, should continue at all.",
      "He does not know he has chronic kidney disease; an explanation would help him follow sick day rules."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Hollowfield Pharmacy"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The first paragraph states exactly what is wanted: repeat bloods and a decision on restarting the five stopped medicines, which are named in the next paragraph, so the GP knows the task before reading the history.",
      "selection": "The five stopped medicines, the signs of dehydration, the key results and his current state are kept. Family illness, the refused antidiarrhoeal, urea, sodium and the November result are left out because the February comparison and potassium make the point.",
      "organisation": "Request, then the illness and what the pharmacist did, then the results, then the current position with specific concerns, and finally his understanding of his condition.",
      "tone": "Concise and collegial; the pharmacist raises the naproxen concern as a question for the GP's judgement rather than an instruction."
    },
    "notesUsed": [
      "diarrhoea and vomiting from 19 May; continued all medicines",
      "ramipril 10 mg, indapamide 2.5 mg, naproxen 500 mg twice daily, empagliflozin 10 mg, metformin 1 g twice daily",
      "pulse 104, BP 104/62 sitting, 88/54 standing",
      "advised to stop all five; rehydration sachets; sick day rules card",
      "23 May: creatinine 218, eGFR 24, potassium 5.6; February eGFR 42",
      "24 May improving, about two litres; not restarted",
      "metformin not to restart while eGFR below 30",
      "naproxen on repeat three years without review",
      "unaware of CKD; explanation suggested",
      "ketones not checked although empagliflozin taken while vomiting; repeat bloods with ketones within 48 hours",
      "bisoprolol continued despite postural drop; consider holding it"
    ],
    "notesLeftOut": [
      "family meal and relatives unwell - cause not needed for the medication decision",
      "antidiarrhoeal not sold - pharmacy decision, no action for the GP",
      "dry mouth, skin turgor, dark urine - summarised as dehydrated",
      "November 2024 result, urea 19.4, sodium 133 - the February comparison and potassium carry the point",
      "atorvastatin continued - no change requested",
      "telephone call to the practice and its time - the GP arranged the bloods, so knows",
      "his question about restarting - covered by the request",
      "passing more urine and lighter colour - improvement is shown by his fluid intake",
      "at home all week; daughter can bring him - practical detail cut for length"
    ],
    "safety": [
      {
        "point": "Five medicines stopped pending GP decision on restarting",
        "where": "paragraphs 1, 2, 4"
      },
      {
        "point": "Potassium 5.6 and fall in filtration rate to 24; repeat bloods requested",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Metformin must not restart while filtration rate below 30",
        "where": "paragraph 4"
      },
      {
        "point": "Naproxen may not be appropriate to restart",
        "where": "paragraph 4"
      },
      {
        "point": "Postural hypotension and dehydration at presentation",
        "where": "paragraph 2"
      },
      {
        "point": "Sick day rules card given; patient unaware of his kidney disease",
        "where": "paragraphs 2, 5"
      },
      {
        "point": "Repeat bloods within 48 hours, including ketones after empagliflozin during vomiting",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Bisoprolol continued despite postural hypotension; consider holding",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-letter-to-the-general-practitioner-recurrent-falls-and-a-sedating-combination": {
    "header": [
      "Dr Owen Farrelly-Nkemdi",
      "General Practitioner",
      "The Ashgrove Practice",
      "21 August 2025"
    ],
    "salutation": "Dear Dr Farrelly-Nkemdi,",
    "re": "Re: Mrs Winnifred Adjei-Lomax, aged 86, recurrent falls and medicines review",
    "body": [
      "I am writing to request a review of Mrs Adjei-Lomax's medicines following my home visits, as she has fallen three times in five months while taking medicines that contribute to falls.",
      "On 5 August she attended the emergency department with a head injury; her CT was normal. I measured a symptomatic postural drop at both visits, of 48 mmHg and 36 mmHg, and she reports light-headedness on standing most days.",
      "On 7 August I found that, on three or four nights a week, she had been taking an extra 25 mg amitriptyline tablet from an old supply as well as 50 mg from her dosette box. The old supply has been removed.",
      "For your consideration: a stepped withdrawal of amitriptyline with a sleep plan; reducing zopiclone 7.5 mg to 3.75 mg before a slow taper; reviewing her three blood pressure medicines, perhaps stopping doxazosin first; reviewing furosemide, as her ankles are not swollen and she also takes bendroflumethiazide; and correcting or reconsidering alendronic acid, taken in bed.",
      "I have advised her to sit before standing and arranged large-print labels, a bedside light and an alarm. She welcomes fewer tablets if changes are slow and her supportive daughter is informed."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Pharmacist, Domiciliary Medicines Review",
      "Ashgrove Pharmacy"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The request and its reason, three falls in five months on falls-risk medicines, are given in one sentence so the GP knows the purpose immediately.",
      "selection": "The head injury, the measured postural drop, the amitriptyline double-dosing and the specific proposals are kept. Individual fall descriptions, the full medicine list and exact lying and standing readings are left out because the drop figures and the proposals carry the clinical point.",
      "organisation": "Request, then evidence of risk, then the dosing error, then the proposals grouped in one paragraph, then actions taken and her wishes.",
      "tone": "Collegial and tentative where it is the GP's decision ('for your consideration', 'perhaps'), and factual about the findings."
    },
    "notesUsed": [
      "three falls in five months",
      "5 August emergency department, head injury, CT normal",
      "postural drop 48 mmHg and 36 mmHg, symptomatic; light-headed most days",
      "7 August: extra 25 mg amitriptyline from old supply, three or four nights a week, plus 50 mg; old supply removed",
      "proposals: amitriptyline withdrawal, zopiclone 7.5 mg to 3.75 mg then taper, review three BP medicines starting with doxazosin, furosemide (indication resolved; second diuretic with bendroflumethiazide), alendronic acid",
      "alendronic acid taken in bed with other tablets",
      "sit before standing; large-print labels; bedside light and alarm",
      "wants fewer tablets, slowly, daughter informed and supportive"
    ],
    "notesLeftOut": [
      "details of the March and June falls - summarised as three falls",
      "exact lying and standing readings - the drop values carry the point",
      "start dates and original indications - available on the GP record",
      "amlodipine, atorvastatin, levothyroxine, lansoprazole, colecalciferol, paracetamol - not part of the proposals",
      "cannot read labels; tea in bed then stands - addressed by large-print labels and sitting advice",
      "falls service referral - left for the GP's review, omitted for length",
      "attachment to zopiclone; water tablet makes her rush to the toilet - useful but not essential to the request"
    ],
    "safety": [
      {
        "point": "Recurrent falls including head injury",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Symptomatic postural drop of 48 mmHg and 36 mmHg",
        "where": "paragraph 2"
      },
      {
        "point": "Amitriptyline double-dosing; duplicate supply removed",
        "where": "paragraph 3"
      },
      {
        "point": "Zopiclone above the dose for older people; slow taper after long use",
        "where": "paragraph 4"
      },
      {
        "point": "Alendronic acid taken incorrectly",
        "where": "paragraph 4"
      },
      {
        "point": "Advice to sit before standing; bedside light and alarm arranged",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-pharmacy-letter-to-the-general-practitioner-a-child-s-antibiotic-dose-and-a-formulation-problem": {
    "header": [
      "Dr Naomi Farrant-Oduya",
      "General Practitioner",
      "The Brookvale Surgery",
      "12 October 2025"
    ],
    "salutation": "Dear Dr Farrant-Oduya,",
    "re": "Re: Amara Nwachukwu-Bright, aged 3 years, amoxicillin dose and formulation",
    "body": [
      "I am writing about today's amoxicillin prescription for Amara's chest infection. Before any dose was given, I found that the dose is below that recommended for her age and that she is unlikely to take this formulation. I would be grateful for a revised prescription today.",
      "The prescription is 125 mg in 5 ml, 5 ml three times daily for five days. The BNFC age-band dose for 1 to 4 years is 250 mg three times daily, twice the prescribed dose. She weighed 15.0 kg today, against 12.1 kg recorded in March 2024, which needs updating. I have not altered the prescription.",
      "In June she spat out every dose of the same suspension because of the taste. The 250 mg in 5 ml strength would halve the volume, and another manufacturer offers a different flavour. If neither is acceptable, please consider an alternative agent.",
      "Today she was alert and drinking, with temperature 38.1, respiratory rate 28 and no respiratory distress. She has no known allergies. I have explained safe paracetamol and ibuprofen dosing, removed an unsuitable cough medicine, and given written advice on when to return urgently.",
      "Her mother would prefer a telephone call, having two younger children with her."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Brookvale Pharmacy"
    ],
    "bodyWords": 200,
    "commentary": {
      "opening": "It states the two problems and the request for a revised prescription today in the first paragraph, and makes clear no dose has yet been given.",
      "selection": "The prescribed and recommended doses, the weight discrepancy, the taste problem, the options and her current condition are kept. Immunisation, birth history and the full story of the cough medicine and alternating analgesics are reduced or left out because they are already dealt with.",
      "organisation": "Purpose and request, then the dose problem, then the formulation problem with options, then her clinical state and safety advice, then how to contact the mother.",
      "tone": "Courteous and precise, presenting the dose discrepancy as a matter of fact for the prescriber to decide rather than a criticism."
    },
    "notesUsed": [
      "amoxicillin 125 mg in 5 ml, 5 ml three times daily for five days; chest infection",
      "BNFC 1 to 4 years: 250 mg three times daily; twice the prescribed dose",
      "weight 15.0 kg today; 12.1 kg March 2024",
      "prescription not altered; no dose given",
      "spat out every dose in June because of taste",
      "250 mg in 5 ml halves volume; different flavour from another manufacturer; alternative agent",
      "alert, drinking, temperature 38.1, respiratory rate 28, no recession, grunting or flaring",
      "no known allergies",
      "paracetamol and ibuprofen dosing explained; cough medicine surrendered; safety-netting written",
      "mother prefers telephone call; two younger children"
    ],
    "notesLeftOut": [
      "previous amoxicillin without reaction - covered by 'no known allergies'",
      "immunised, born at term, no admissions, no other medication - not relevant to the request",
      "rash absent, capillary refill under two seconds - summarised as no distress",
      "cough for five days, fever since yesterday - the GP made the diagnosis this morning",
      "mother's quote about the bottle - the taste problem is stated directly",
      "reassurance given to the mother - not needed by the GP"
    ],
    "safety": [
      {
        "point": "Prescribed dose below the BNFC age-band dose; no dose given yet",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Weight on record outdated; current weight 15.0 kg",
        "where": "paragraph 2"
      },
      {
        "point": "Previous refusal means the course may fail; options given",
        "where": "paragraph 3"
      },
      {
        "point": "Fever 38.1 and observations; written advice on when to return urgently",
        "where": "paragraph 4"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 4"
      },
      {
        "point": "Unsuitable cough medicine removed; analgesic dosing corrected",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-letter-to-the-general-practitioner-discrepancies-found-after-a-hospital-discharge": {
    "header": [
      "Dr Fiona Arkwright",
      "General Practitioner",
      "The Selby Road Practice",
      "25 October 2025"
    ],
    "salutation": "Dear Dr Arkwright,",
    "re": "Re: Mrs Norah Kilfeather-Duru, aged 79, discrepancies after hospital discharge",
    "body": [
      "I am writing to ask you to amend Mrs Kilfeather-Duru's repeat list and review her medicines, as I have found four discrepancies since her discharge from Selby General Hospital on 12 October.",
      "First, amitriptyline 25 mg at night was stopped in hospital because it contributed to her fall, but it remains on her repeat list and she was still taking it on 25 October. I have removed it from her dosette box and retained her supply.",
      "Second, furosemide was reduced to 20 mg each morning, but she has taken 40 mg for thirteen days. Until the prescription is amended, she is taking half a 40 mg tablet. Her sitting blood pressure was 108/62, she feels dizzy on standing, had a near-fall on 21 October, and drinks about a litre daily. Please review her kidney function (creatinine 128 at discharge) and check a lying and standing blood pressure.",
      "Third, trimethoprim 100 mg at night as prophylaxis was never added or started; please add it once her kidney function is rechecked, or confirm it is no longer intended. Fourth, she has taken alendronic acid incorrectly since 2021 and reports heartburn. Please also review her regular paracetamol, 1 g four times daily."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist, Medicines Reconciliation Service",
      "Bridgewater Community Pharmacy"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The request to amend the repeat list and the number of discrepancies are given at once, so the GP knows how the letter will be structured.",
      "selection": "Each discrepancy is kept with the action needed, together with the symptoms and results that make the furosemide error urgent. The nitrofurantoin course, the timeline of telephone calls and the dispensing incident record are left out as they need no action from the GP.",
      "organisation": "Request, then the discrepancies in numbered order ('First', 'Second'), with the most clinically urgent, furosemide, given most space, then the remaining reviews.",
      "tone": "Factual and constructive between professionals, focused on correction rather than blame."
    },
    "notesUsed": [
      "discharged 12 October; four discrepancies",
      "amitriptyline 25 mg stopped in hospital, still on repeat, still taken 25 October; removed and supply retained",
      "furosemide 20 mg intended, 40 mg taken thirteen days; half a 40 mg tablet until amended",
      "BP 108/62 sitting, dizzy on standing, near-fall 21 October, drinking about one litre",
      "creatinine 128 at discharge; review kidney function; lying and standing BP not yet measured",
      "trimethoprim 100 mg at night prophylaxis never started; add after kidney function recheck, or confirm",
      "alendronic acid taken incorrectly since 2021; heartburn",
      "paracetamol 1 g four times daily; review requested"
    ],
    "notesLeftOut": [
      "length of admission and reason - the GP has the discharge summary",
      "nitrofurantoin course completed - no action needed",
      "dates the summary arrived and the repeat was issued - background to the error, not needed for the request",
      "dates of telephone calls and hospital confirmation 24 October - process detail",
      "dispensing incident recorded - internal pharmacy matter",
      "amlodipine, colecalciferol, atorvastatin as intended - no change",
      "antacid bought over the counter - linked to the alendronic acid problem, summarised as heartburn",
      "three-month duration of trimethoprim - omitted for length; in the discharge summary",
      "daughter informed - consent detail, not needed",
      "offer to send the discharge summary securely - not needed",
      "weight 61 kg - supports the paracetamol dose; the review request stands because the use is regular"
    ],
    "safety": [
      {
        "point": "Amitriptyline stopped in hospital (fall risk) but still supplied; now removed",
        "where": "paragraph 2"
      },
      {
        "point": "Furosemide at twice the intended dose for thirteen days; interim half tablet",
        "where": "paragraph 3"
      },
      {
        "point": "Low blood pressure, dizziness, near-fall and low fluid intake; kidney function review",
        "where": "paragraph 3"
      },
      {
        "point": "Prophylactic trimethoprim never started",
        "where": "paragraph 4"
      },
      {
        "point": "Alendronic acid taken incorrectly with heartburn",
        "where": "paragraph 4"
      },
      {
        "point": "Regular paracetamol 1 g four times daily in a 79-year-old",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-referral-to-the-general-practitioner-over-reliance-on-a-reliever-inhaler": {
    "header": [
      "Dr Peter Nwaobi",
      "General Practitioner",
      "The Highfield Surgery",
      "2 November 2025"
    ],
    "salutation": "Dear Dr Nwaobi,",
    "re": "Re: Mr Jaden Okoye-Marchetti, aged 24, poorly controlled asthma",
    "body": [
      "I am writing to request an urgent asthma review for Mr Okoye-Marchetti, including preventer treatment in line with current guidance, such as an inhaled corticosteroid with formoterol as maintenance and reliever therapy, and a written asthma action plan.",
      "He has collected 14 salbutamol inhalers in 12 months, 5 of them in the last 8 weeks, and uses his reliever eight to ten times daily. His beclometasone was last dispensed on 3 March 2025. He wakes with cough or wheeze three or four nights a week and has stopped football because of breathlessness. His peak flow today was 380 litres per minute, against a predicted 630, even forty minutes after his reliever.",
      "He stopped the preventer believing it was only for bad episodes, and because of hoarseness and an unpleasant taste. His technique was poor; I corrected it, supplied a spacer and advised mouth rinsing. I supplied one reliever and declined a second pending your review.",
      "Possible triggers include daily vaping, bedroom damp and mould, and a cat sleeping on his bed. He has no known allergies or admissions. I have given him written advice on when to seek immediate help. He finishes work at two o'clock on Tuesdays and Thursdays."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Highfield Pharmacy"
    ],
    "bodyWords": 200,
    "commentary": {
      "opening": "The urgent request and what the review should include, with preventer treatment framed by current guidance, are stated first, so the GP can triage the letter immediately.",
      "selection": "Reliever use, the gap in preventer collection, night symptoms, peak flow, the reasons he stopped and the possible triggers are kept. His job, the absence of other symptoms and his beliefs about outgrowing asthma are left out or summarised because they add little to the clinical decision.",
      "organisation": "Request, then evidence of poor control, then the reasons and the pharmacist's actions, then triggers, safety-netting and availability.",
      "tone": "Professional and concise, with a clear sense of urgency appropriate to a referral from pharmacist to GP."
    },
    "notesUsed": [
      "14 salbutamol inhalers in 12 months, 5 in last 8 weeks",
      "reliever eight to ten times a day",
      "beclometasone last dispensed 3 March 2025",
      "night waking three or four nights a week; stopped football",
      "peak flow 380, predicted about 630, forty minutes after reliever (may overestimate)",
      "stopped preventer: misunderstanding, taste and hoarseness",
      "technique corrected, spacer supplied, mouth rinsing advised",
      "one reliever supplied, second declined pending review",
      "vaping, damp and mould, cat on bed",
      "no known allergies, no admissions",
      "written advice on emergency signs",
      "finishes at two o'clock Tuesdays and Thursdays",
      "request: urgent review, preventer in line with current guidance (e.g. ICS/formoterol maintenance and reliever), action plan, exposure assessment"
    ],
    "notesLeftOut": [
      "no oral corticosteroids in 12 months - not essential for the referral",
      "details of the technique errors - corrected already",
      "no fever, sputum, chest pain or weight loss - negatives omitted for length",
      "warehouse job with no occupational exposure - not relevant",
      "belief that asthma is outgrown; surprise at dispensing record - for the GP to explore at review",
      "his question about harm from inhalers - better answered at review"
    ],
    "safety": [
      {
        "point": "Excessive reliever use and no preventer for eight months: poorly controlled asthma",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Night symptoms and reduced peak flow",
        "where": "paragraph 2"
      },
      {
        "point": "Second reliever declined pending urgent review",
        "where": "paragraph 3"
      },
      {
        "point": "Written advice on when to seek immediate help",
        "where": "paragraph 4"
      },
      {
        "point": "Possible triggers: vaping, damp and mould, cat",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-letter-to-the-anticoagulation-clinic-a-suspected-interaction": {
    "header": [
      "Ms Harriet Oyelowo",
      "Lead Pharmacist, Anticoagulation Clinic",
      "Cranmore Hospital",
      "16 January 2025"
    ],
    "salutation": "Dear Ms Oyelowo,",
    "re": "Re: Mr Wilfred Sanderson-Achike, aged 77, unstable INR on warfarin",
    "body": [
      "I am writing to request an earlier review for Mr Sanderson-Achike, who takes warfarin for atrial fibrillation, than his appointment on 6 February, after four out-of-range INR results in ten days, caused by interactions identified only this week.",
      "Previously stable, he was prescribed clarithromycin on 2 January. His INR was 4.8 on 6 January and 3.9 on 13 January, and his dose was reduced to 2 mg daily. On 14 January I noticed extensive bruising on his forearms and thigh, with oral blood blisters. He disclosed taking a herbal cough remedy containing cranberry extract since 4 January, and ibuprofen 400 mg two or three times a day for a week.",
      "His INR that afternoon was 5.6. The practice withheld warfarin and gave vitamin K. Today his INR is 3.4 and warfarin has restarted at 2 mg daily. There are no new lesions or signs of major bleeding.",
      "Both products have been stopped and recorded as cautions, and I have counselled him that anything bought in a shop is a medicine.",
      "I would also value your advice on whether an alternative to warfarin would be safer. His wife can bring him on any weekday."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Cranmore Street Pharmacy"
    ],
    "bodyWords": 193,
    "commentary": {
      "opening": "The request for an earlier review than 6 February comes first, with the reason in one clause, so the clinic knows at once why the letter cannot wait three weeks.",
      "selection": "The INR sequence, the three interacting medicines, the bleeding signs and the vitamin K are kept because they explain the instability. His other cardiovascular medicines, the historical INR values and the dose schedule before January are left out as not needed for the decision.",
      "organisation": "Request, then the timeline of the interactions in date order, then the current position, then the actions taken, and finally the second question about an alternative anticoagulant.",
      "tone": "Collegial pharmacist-to-pharmacist, precise about values and dates, concerned but not alarmist."
    },
    "notesUsed": [
      "warfarin for AF, historically stable",
      "clarithromycin prescribed 2 January",
      "INR 4.8 on 6 January, 3.9 on 13 January; dose 2 mg daily",
      "bruising forearms and left thigh, oral blood blisters, 14 January",
      "herbal remedy with cranberry since 4 January; ibuprofen 400 mg two or three times a day",
      "INR 5.6; warfarin withheld; vitamin K",
      "INR 3.4 on 16 January; restarted 2 mg daily; bruising unchanged",
      "both products stopped, surrendered, recorded as cautions; counselled",
      "clinic appointment 6 February; four out-of-range results in ten days",
      "advice on remaining on warfarin or an alternative",
      "wife can bring him; available any weekday"
    ],
    "notesLeftOut": [
      "last six INR values and the 24 mg weekly schedule — 'historically stable' is enough",
      "call to the urgent care centre on 3 January — background, not needed for the review",
      "negative bleeding screen in detail (no melaena, haematuria, headache) — summarised as no signs of major bleeding",
      "pulse and blood pressure — normal and not needed for the anticoagulation decision",
      "other medication (bisoprolol, ramipril, atorvastatin, furosemide, omeprazole) — no new interaction; the clinic holds the list",
      "mouth ulcer presenting complaint — superseded by the blood blisters",
      "target range 2.0 to 3.0 and the dosette box — known to the clinic"
    ],
    "safety": [
      {
        "point": "Raised INR (peak 5.6) with minor bleeding: bruising and oral blood blisters",
        "where": "paragraphs 2, 3"
      },
      {
        "point": "Interacting medicines: clarithromycin, cranberry herbal product, ibuprofen",
        "where": "paragraph 2"
      },
      {
        "point": "Ibuprofen and herbal product stopped and recorded as cautions",
        "where": "paragraph 4"
      },
      {
        "point": "Current warfarin dose 2 mg daily after vitamin K; INR 3.4",
        "where": "paragraph 3"
      },
      {
        "point": "Earlier review needed before 6 February; consider alternative anticoagulant",
        "where": "paragraphs 1, 5"
      }
    ]
  },
  "wri-pharmacy-referral-to-the-general-practitioner-a-suspected-adverse-drug-reaction": {
    "header": [
      "The Duty Doctor",
      "Emergency Department",
      "Larkspur General Hospital",
      "5 March 2025"
    ],
    "salutation": "Dear Doctor,",
    "re": "Re: Mr Cyril Adebanjo-Reeves, aged 68, suspected angioedema with ramipril",
    "body": [
      "I am referring Mr Adebanjo-Reeves, arriving by ambulance with his wife, for urgent assessment and airway observation. I suspect angioedema associated with ramipril, and he takes apixaban 5 mg twice daily.",
      "Since approximately four o'clock this morning he has had increasing swelling of the lower lip and the left side of the tongue, firm and non-itchy, with no urticaria. At present he has no difficulty breathing or swallowing, no stridor and a normal voice. His oxygen saturation is 97% on air and he speaks in full sentences.",
      "A similar episode of tongue and floor-of-mouth swelling occurred on 14 July 2024, nine weeks after starting ramipril; antihistamines helped little, and it was recorded as a food reaction. Today's swelling began nine weeks after his dose was increased to 10 mg daily on 3 January 2025.",
      "I have not given an antihistamine and have advised him to take no further ramipril. His wife has the pack and written warning symptoms.",
      "Please record this drug class as a caution on his discharge summary and correct the July entry. Apixaban matters if any airway procedure is needed, and an angiotensin receptor blocker would also need caution. A copy goes to his general practitioner."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Larkspur Road Pharmacy"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The letter states at once that he is arriving by ambulance for urgent assessment and airway observation, names the suspected cause and flags the anticoagulant, so the emergency doctor knows the risk before reading on.",
      "selection": "The swelling, the airway status, the earlier episode and the timing against the ramipril start and dose increase are kept because they support the diagnosis. Full observations, the negative trigger history and his other routine medicines are left out, apart from apixaban, which matters for any airway procedure and the choice of alternative.",
      "organisation": "Purpose and urgency, then today's presentation and airway status, then the pattern linking both episodes to ramipril, then what the pharmacist has done, then the requests for his record and the copy to the GP.",
      "tone": "Urgent and clinical, with the pharmacist's reasoning given as evidence rather than as a diagnosis."
    },
    "notesUsed": [
      "increasing tongue swelling on an anticoagulant treated as an emergency; 999 called; ambulance to the emergency department with his wife",
      "swelling of lower lip and left side of tongue, non-itchy, firm, no urticaria",
      "began about four o'clock, increasing",
      "no breathing difficulty, no stridor, voice normal, swallowing",
      "oxygen saturation 97% on air; full sentences",
      "earlier episode 14 July 2024, antihistamines of limited benefit, recorded as a food reaction",
      "ramipril started May 2024, increased to 10 mg daily 3 January 2025; nine weeks each time",
      "no further ramipril; no antihistamine sold",
      "warning symptoms written down for his wife",
      "record class as caution; correct July entry; apixaban relevant to airway procedures; ARB caution",
      "copy to his general practitioner"
    ],
    "notesLeftOut": [
      "respiratory rate, pulse and blood pressure — saturation and full sentences already show airway status, and the department will repeat them",
      "negative triggers (food, sting, soap, fever, dental work) — supports the reasoning but not needed in detail",
      "treatment in July with chlorphenamine and prednisolone — the doctor needs the episode, not its treatment",
      "bisoprolol, atorvastatin, metformin — not relevant to the reaction",
      "penicillin tolerance — no bearing on this reaction",
      "times of the 999 call and the call to the practice — the doctor needs the patient, not the timeline",
      "advice not to drive — he is travelling by ambulance"
    ],
    "safety": [
      {
        "point": "Suspected ACE inhibitor angioedema, swelling increasing; sent by ambulance for airway observation",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Anticoagulated with apixaban, relevant to any airway procedure",
        "where": "paragraphs 1, 5"
      },
      {
        "point": "Ramipril not to be taken again",
        "where": "paragraph 4"
      },
      {
        "point": "Antihistamines likely to help little; none given",
        "where": "paragraphs 3, 4"
      },
      {
        "point": "Record class as caution; correct the July food-reaction entry",
        "where": "paragraph 5"
      },
      {
        "point": "ARB would also need caution after ACE inhibitor angioedema",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-pharmacy-advice-letter-to-a-patient-starting-methotrexate": {
    "header": [
      "Mrs Aileen Broadhurst-Nyame",
      "20 April 2025"
    ],
    "salutation": "Dear Mrs Broadhurst-Nyame,",
    "re": "Re: Taking your new medicine, methotrexate, safely",
    "body": [
      "Following our conversation today, here is how to take methotrexate safely. Most importantly, take it only once a week, on Fridays, and never every day.",
      "Your dose is 10 mg, four 2.5 mg tablets together. If you miss a dose, you may take it up to two days late; after that, skip it and take the next one as normal. Never take two doses to catch up. Take your folic acid 5 mg on Tuesdays, never on the same day as methotrexate, as it reduces side effects.",
      "Please cut down your alcohol substantially, as together they can harm your liver. Do not take ibuprofen or other anti-inflammatory painkillers from shops, trimethoprim or live vaccines, and tell any pharmacist or dentist that you take methotrexate. Keep it out of reach of your grandchildren.",
      "Stop methotrexate and get medical advice the same day if you have a sore throat, fever, mouth ulcers or unexplained bruising or bleeding. Seek advice urgently for breathlessness or a new dry cough, and report yellow skin or eyes, dark urine or persistent sickness.",
      "Your first blood test is on 4 May. Please take your booklet to every appointment. I will see you again on 11 May."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Pharmacist",
      "Westbrook Pharmacy"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The once-weekly rule comes in the first paragraph because she had planned to take it daily, which is the most dangerous mistake she could make.",
      "selection": "Dosing, missed doses, folic acid, what to avoid, warning signs and the first blood test are kept. The full monitoring schedule, the cancer question, how long treatment lasts and her other medicines are left out, as she has the booklet and the clinic will cover them.",
      "organisation": "It follows the grouping she found helpful in the consultation: what she must do, what she must avoid, and what she must report, followed by the next dates.",
      "tone": "Plain, warm English for a patient, with short sentences and direct instructions but no medical jargon."
    },
    "notesUsed": [
      "methotrexate 10 mg, four 2.5 mg tablets, once a week on Fridays, never daily",
      "missed dose up to two days late, then skip; never double",
      "folic acid 5 mg on Tuesdays, not the same day",
      "reduce alcohol; liver",
      "no over-the-counter anti-inflammatories; tell pharmacist or dentist",
      "avoid trimethoprim and live vaccines",
      "storage; grandchildren visit",
      "warning signs: sore throat, fever, mouth ulcers, bruising, bleeding — stop, same day",
      "breathlessness or dry cough — urgent; jaundice, dark urine, persistent nausea",
      "first blood test 4 May; booklet to every appointment",
      "second NMS appointment 11 May"
    ],
    "notesLeftOut": [
      "full blood test schedule — written in her booklet",
      "influenza and pneumococcal vaccines recommended — useful but not a safety risk to omit",
      "pregnancy warning — she is postmenopausal and no one of childbearing age lives with her",
      "the cancer question, length of treatment and time to benefit — already answered in person",
      "amlodipine, naproxen and omeprazole — unchanged, prescribed by the clinic; the naproxen combination is known to the clinic and covered by the blood monitoring",
      "rheumatology review 3 June — clinic will send its own appointment",
      "diagnosis history — she already knows it",
      "baseline blood tests and chest X-ray in March — already done and satisfactory"
    ],
    "safety": [
      {
        "point": "Methotrexate once weekly on Fridays, never daily",
        "where": "paragraph 1"
      },
      {
        "point": "Missed dose rule; never take two doses",
        "where": "paragraph 2"
      },
      {
        "point": "Folic acid on Tuesdays, not the methotrexate day",
        "where": "paragraph 2"
      },
      {
        "point": "Avoid over-the-counter anti-inflammatories, trimethoprim, live vaccines; reduce alcohol",
        "where": "paragraph 3"
      },
      {
        "point": "Warning signs needing same-day or urgent advice",
        "where": "paragraph 4"
      },
      {
        "point": "Blood monitoring, first test 4 May",
        "where": "paragraph 5"
      },
      {
        "point": "Store out of reach of visiting grandchildren",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-pharmacy-letter-to-the-general-practitioner-a-high-risk-combination-in-an-older-patient": {
    "header": [
      "Dr Stephen Iwuchukwu",
      "General Practitioner",
      "The Marsh Lane Practice",
      "22 June 2025"
    ],
    "salutation": "Dear Dr Iwuchukwu,",
    "re": "Re: Mrs Josephine Ekwueme-Halloran, aged 84, request for structured medication review",
    "body": [
      "I am writing to request a structured medication review, ideally at home, for Mrs Ekwueme-Halloran, whom I reviewed on 8 and 22 June 2025. I identified three medicines-related risks: bleeding, anticholinergic burden and falls.",
      "She takes apixaban, aspirin 75 mg, naproxen and sertraline together without gastric protection. She reports easy bruising, two nosebleeds in the last month and black stools once or twice, and her haemoglobin was 104 on 2 June, against 128 in 2023. Your duty doctor saw her on 22 June, found no active bleeding and took a full blood count and ferritin. I advised her to stop the naproxen and to call 999 if black stools recur or she feels faint. I suggest stopping the aspirin, urgent review of those results, and gastric protection.",
      "Amitriptyline and oxybutynin are likely causing her dry mouth, constipation, blurred vision and drowsiness, and the oxybutynin appears ineffective. I suggest reviewing it and reducing the amitriptyline gradually, as she fears losing sleep. A cognitive assessment may be more informative afterwards.",
      "She has fallen twice in four months, and her blood pressure fell from 138/76 lying to 106/62 standing, so her antihypertensives need review.",
      "She and her daughter agree to the review."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Pharmacist, Structured Medication Review Service",
      "Marsh Lane Pharmacy"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The request and the three risks are named in the opening, so the doctor has a framework for everything that follows.",
      "selection": "The bleeding evidence, the anticholinergic symptoms, the postural drop and the proposed changes are kept. The full list of unrelated medicines, the expired boxes and the dosette details are left out as not needed for the decisions.",
      "organisation": "One paragraph per risk in order of urgency, bleeding first because of the black stools and falling haemoglobin, each ending with the proposal, then her agreement.",
      "tone": "Professional and evidence-based, with proposals offered for the doctor's consideration rather than as instructions."
    },
    "notesUsed": [
      "reviewed 8 and 22 June 2025",
      "apixaban, aspirin 75 mg, naproxen, sertraline; no gastric protection",
      "bruising, two nosebleeds, black stools once or twice",
      "haemoglobin 104 on 2 June, 128 in 2023",
      "black stools first reported 22 June; same-day assessment by duty doctor, no active bleeding, FBC and ferritin taken; naproxen stopped; 999 advice",
      "stop aspirin; urgent review of FBC and ferritin; gastric protection",
      "amitriptyline and oxybutynin: dry mouth, constipation, blurred vision, drowsiness",
      "oxybutynin ineffective; slow amitriptyline reduction; anxious about sleep",
      "cognitive assessment after burden reduced",
      "two falls in four months; 138/76 lying, 106/62 standing",
      "she and daughter agree; home visit preferred"
    ],
    "notesLeftOut": [
      "amlodipine, ramipril, furosemide named individually — 'antihypertensives' covers them for the review",
      "atorvastatin, levothyroxine, colecalciferol, paracetamol — no risk identified",
      "dosette box and medicines kept separately — practical detail the review will cover",
      "expired antihypertensive boxes — already removed",
      "head injury at emergency department on 2 June — the haemoglobin from that visit is what matters here",
      "forgetfulness reported by daughter — reflected in the cognitive assessment proposal",
      "her own choice of tablets to stop — supports the proposals but not essential",
      "weight 63 kg and creatinine 96 — confirm the apixaban and paracetamol doses are appropriate, so no change is requested"
    ],
    "safety": [
      {
        "point": "Possible gastrointestinal bleeding: black stools, haemoglobin 104 from 128",
        "where": "paragraph 2"
      },
      {
        "point": "Same-day assessment done on 22 June; 999 if black stools recur or faint",
        "where": "paragraph 2"
      },
      {
        "point": "Naproxen stopped; stop aspirin; urgent review of FBC and ferritin; gastric protection",
        "where": "paragraph 2"
      },
      {
        "point": "Anticholinergic burden; slow amitriptyline reduction",
        "where": "paragraph 3"
      },
      {
        "point": "Falls with postural drop; review antihypertensives",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-referral-to-the-general-practitioner-suspected-lithium-toxicity": {
    "header": [
      "Dr Adaora Whitfield",
      "General Practitioner",
      "The Coppice Surgery",
      "11 July 2025"
    ],
    "salutation": "Dear Dr Whitfield,",
    "re": "Re: Miss Rosalind Ekpo-Danvers, aged 46, suspected lithium toxicity",
    "body": [
      "I am writing, as agreed by telephone at 14:10, to refer Miss Ekpo-Danvers urgently with suspected lithium toxicity. She has gone to the emergency department today with her flatmate and a copy of this letter, for an immediate lithium level, urea and electrolytes, creatinine and thyroid function.",
      "She takes lithium carbonate 800 mg at night for bipolar affective disorder. She has a new coarse tremor, slurred speech, unsteady gait, drowsiness, vomiting and four days of diarrhoea, with increased thirst and urine. Her pulse was 96 and blood pressure 106/64, and she was fully orientated.",
      "Likely precipitants are lisinopril 10 mg daily, started on 26 June, over-the-counter ibuprofen 400 mg three times daily for two weeks, dehydration and hot weather. No level was taken after lisinopril started; her last was 0.72 mmol/L on 4 January 2025, and she is not on any recall.",
      "I have advised her to withhold lithium until a level is available, stopped the ibuprofen and given oral rehydration. She must call 999 if she becomes more drowsy or confused, twitches or fits. She will not drive.",
      "Please follow up her results and ongoing monitoring, review the lisinopril and add a caution regarding anti-inflammatory drugs to her record."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Coppice Pharmacy"
    ],
    "bodyWords": 200,
    "commentary": {
      "opening": "The first paragraph gives the urgency, the suspected diagnosis, where she is now and the tests needed, because the emergency department will read the same copy.",
      "selection": "Toxicity features, observations, the four precipitants and the last level are kept. Her mood history, the internal incident report and routine details such as coffee and her workplace are left out or compressed into 'hot weather'.",
      "organisation": "Request and destination, then clinical picture, then causes and monitoring gap, then actions taken, then follow-up requests for the GP.",
      "tone": "Urgent, concise and clinical, suitable for both the GP and the emergency team."
    },
    "notesUsed": [
      "telephoned practice 14:10; sent to emergency department with flatmate; copy of letter",
      "immediate lithium level, U&E, creatinine, thyroid function",
      "lithium carbonate 800 mg at night, bipolar affective disorder",
      "coarse tremor, slurred speech, unsteady gait, drowsiness, vomiting, diarrhoea four days, thirst and polyuria",
      "pulse 96, BP 106/64, fully orientated",
      "lisinopril 10 mg started 26 June; ibuprofen 400 mg three times daily two weeks; dehydration; hot weather",
      "no level after lisinopril started (main gap); last level 0.72 mmol/L, 4 January 2025; no recall",
      "omit lithium; ibuprofen stopped; oral rehydration",
      "999 if more drowsy, confused, twitching or fitting; not to drive",
      "follow up results and monitoring; review lisinopril; NSAID caution"
    ],
    "notesLeftOut": [
      "temperature and negative findings (no fever, no abdominal pain, no blood in stool) — not needed for the diagnosis",
      "incident raised internally about the missed interaction — a pharmacy governance matter",
      "January creatinine 78 and thyroid normal — the new results will supersede them",
      "quetiapine and sertraline — unchanged, the GP holds the list",
      "levels never above 0.9 and good adherence — background only",
      "warehouse, coffee and sweating detail — summarised as hot weather and dehydration"
    ],
    "safety": [
      {
        "point": "Suspected lithium toxicity needing urgent level and renal function",
        "where": "paragraph 1"
      },
      {
        "point": "Lithium withheld until level available",
        "where": "paragraph 4"
      },
      {
        "point": "Interacting medicines: lisinopril and ibuprofen; ibuprofen stopped permanently",
        "where": "paragraphs 3, 4"
      },
      {
        "point": "999 if more drowsy, confused, twitching or fitting",
        "where": "paragraph 4"
      },
      {
        "point": "No lithium level after lisinopril was started; no recall",
        "where": "paragraph 3"
      },
      {
        "point": "Not to drive",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-letter-to-the-district-nursing-team-insulin-administration-at-home": {
    "header": [
      "Sister Bernadette Achike-Lowry",
      "District Nursing Sister",
      "District Nursing Team, Ferndale",
      "10 September 2025"
    ],
    "salutation": "Dear Sister Achike-Lowry,",
    "re": "Re: Mr Hubert Nkemelu-Carstairs, aged 81, insulin administration at home",
    "body": [
      "I am writing to request an assessment of whether Mr Nkemelu-Carstairs, who lives alone, can continue to give his own insulin safely and, if not, a district nursing visit for at least his bedtime dose.",
      "He takes glargine 24 units at bedtime and aspart 8 units with each main meal, from similar pre-filled pens. He is partially sighted, has a marked tremor and sets doses by counting clicks. He identified the pens on only one of four attempts, and pen usage suggests confusion.",
      "His diary shows 3.1, 3.4 and 2.9 late in the evening, treated with biscuits but unreported, and 18 to 22 before breakfast. His son witnessed two night-time episodes of sweating and confusion.",
      "He injects into a 6 cm area of lipohypertrophy on the left abdomen, reuses needles and does not prime the pen. I have relabelled the pens, with a textured band on the bedtime pen, supplied new needles and explained site rotation. No dose has been changed.",
      "Please examine the lipohypertrophy and report the hypoglycaemia to his diabetes team, asking for his aspart to be reviewed, as he eats one cooked meal and toast. His son will attend teaching. He prefers visits before midday."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Ferndale Pharmacy"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The opening states the assessment requested and the minimum fallback, a visit for the bedtime dose, so the nursing team can prioritise at once.",
      "selection": "The two insulins and doses, his visual and manual limits, the evidence of confusion, the hypoglycaemia, the injection technique and the mismatch between his mealtime dose and what he eats are kept. His other medicines and kidney function are left out as matters for the prescriber.",
      "organisation": "Request, then why self-administration is unsafe, then the glucose evidence, then technique and pharmacy actions, then specific tasks and visit timing.",
      "tone": "Practical and collegial for a nursing colleague, factual about risk without blaming the patient."
    },
    "notesUsed": [
      "lives alone; no care package",
      "glargine 24 units at bedtime; aspart 8 units with each main meal; similar pens",
      "partially sighted; tremor; sets dose by counting clicks",
      "identified pens on one of four attempts; pen usage suggests confusion",
      "readings 3.1, 3.4, 2.9 late evening, treated with biscuits, unreported; 18 to 22 before breakfast",
      "two night episodes of sweating and confusion witnessed by son",
      "6 cm lipohypertrophy left abdomen; reuses needles; no priming",
      "pens relabelled; textured band on bedtime pen; new needles; site rotation",
      "no dose changed",
      "examine lipohypertrophy; report hypoglycaemia to diabetes team with a request to review the aspart dose",
      "one cooked meal and evening toast; son willing to attend teaching; visits before midday"
    ],
    "notesLeftOut": [
      "metformin, ramipril, atorvastatin, aspirin, furosemide — not relevant to the nursing assessment",
      "chronic kidney disease, creatinine 132, filtration rate 47 and the metformin dose — for the prescriber",
      "unused magnifier — detail for the assessment visit",
      "pen and box counts in detail — summarised as pen usage suggesting confusion",
      "duration of diabetes and insulin — background only"
    ],
    "safety": [
      {
        "point": "Nocturnal hypoglycaemia (2.9 to 3.4) unreported, with night-time confusion",
        "where": "paragraph 3"
      },
      {
        "point": "Confusing rapid-acting and long-acting pens",
        "where": "paragraph 2"
      },
      {
        "point": "Bedtime dose visit if he cannot self-administer",
        "where": "paragraph 1"
      },
      {
        "point": "Lipohypertrophy, needle reuse, no priming",
        "where": "paragraph 4"
      },
      {
        "point": "No dose changed; report hypoglycaemia to diabetes team and ask for the aspart dose to be reviewed",
        "where": "paragraphs 4, 5"
      }
    ]
  },
  "wri-pharmacy-letter-to-the-general-practitioner-long-term-codeine-use": {
    "header": [
      "Dr Malachy Owusu-Fenwick",
      "General Practitioner",
      "The Old Vicarage Surgery",
      "28 November 2025"
    ],
    "salutation": "Dear Dr Owusu-Fenwick,",
    "re": "Re: Mr Lionel Ferrant-Adeyemo, aged 52, long-term opioid use",
    "body": [
      "I am writing, with his consent, to request a review of Mr Ferrant-Adeyemo with a view to a planned, gradual opioid reduction, and referral to the pain and substance misuse services if appropriate.",
      "He takes co-codamol 30/500 eight tablets daily and modified-release tramadol 200 mg twice daily, approximately 76 mg oral morphine equivalent, with eleven early requests in the last twelve months. Tramadol with his amitriptyline also raises seizure and serotonin risk. He has also disclosed buying codeine-containing tablets weekly from three other pharmacies for at least eighteen months. As the prescribed co-codamol alone supplies 4 g paracetamol daily, his liver function needs urgent checking.",
      "He reports morning headaches suggesting medication-overuse headache, constipation with three impactions in 2025, daytime drowsiness, withdrawal symptoms when late with a dose, low mood and weight loss from 92 kg to 84 kg, which needs investigating in its own right. His pain is unchanged although his dose has roughly doubled since 2021.",
      "He wants help to stop but fears withdrawal. I have changed nothing and explained that any reduction would be slow and agreed.",
      "He would like a longer Monday or Friday appointment with his partner present, and asks that his employer is not told."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Old Vicarage Pharmacy"
    ],
    "bodyWords": 200,
    "commentary": {
      "opening": "The request comes first, framed as a planned reduction with his consent, so the doctor sees a cooperative patient rather than a complaint about misuse.",
      "selection": "Current doses, the morphine equivalent, the undisclosed purchases, the paracetamol risk and the harms are kept. The year-by-year history, alcohol and his other medicines are left out as background the practice already holds.",
      "organisation": "Request, then the scale of use and the urgent liver concern, then the harms, then his wishes and what the pharmacy has done, then practical arrangements.",
      "tone": "Factual and non-judgemental, protective of the patient's trust while making the risks clear."
    },
    "notesUsed": [
      "consent; planned gradual reduction; pain service and substance misuse service",
      "co-codamol 30/500 eight daily; tramadol MR 200 mg twice daily",
      "approximately 76 mg oral morphine equivalent",
      "eleven early requests in the last twelve months",
      "OTC codeine weekly from three pharmacies for eighteen months, disclosed on the letter date",
      "4 g paracetamol daily from co-codamol; check liver function urgently",
      "morning headache, medication-overuse headache",
      "constipation, three impactions in 2025; drowsiness; withdrawal symptoms; low mood; 92 kg to 84 kg",
      "pain unchanged despite the opioid dose roughly doubling since 2021",
      "wants help, fears withdrawal; no change made; slow agreed reduction",
      "longer appointment Mondays or Fridays; partner; employer not to be told",
      "tramadol with amitriptyline: seizure and serotonin risk",
      "weight loss to be investigated in its own right"
    ],
    "notesLeftOut": [
      "year-by-year dispensing history — summarised by current doses and early requests",
      "morphine equivalent calculation working and the 0.2 tramadol factor (about 116 mg) — the UK Opioids Aware total is enough",
      "disc prolapse 2017 and limited physiotherapy — the pain service will take the history",
      "stopped driving after near miss — he has already acted on it",
      "reduced libido and fatigue — sensitive detail he can raise himself",
      "omeprazole, laxatives, alcohol — not changed by the request",
      "OTC purchases entered on his record — internal pharmacy action"
    ],
    "safety": [
      {
        "point": "Possible paracetamol overdose from prescribed plus purchased products; urgent liver function",
        "where": "paragraph 2"
      },
      {
        "point": "Undisclosed over-the-counter codeine from three pharmacies",
        "where": "paragraph 2"
      },
      {
        "point": "Tramadol at maximum dose; drowsiness; withdrawal symptoms",
        "where": "paragraphs 2, 3"
      },
      {
        "point": "Do not stop abruptly; slow, agreed reduction",
        "where": "paragraph 4"
      },
      {
        "point": "Weight loss and repeated impaction",
        "where": "paragraph 3"
      },
      {
        "point": "Tramadol with amitriptyline: seizure and serotonin syndrome risk",
        "where": "paragraph 2"
      }
    ]
  },
  "wri-pharmacy-ace-inhibitor-and-potassium-supplement-hyperkalaemia-risk": {
    "header": [
      "Dr Tomas Vega",
      "General Practitioner",
      "Brookside Health Centre",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Vega,",
    "re": "Re: Mr Harold Pinto, aged 70, risk of hyperkalaemia",
    "body": [
      "I am writing to advise you that Mr Pinto's current medicines place him at significant risk of hyperkalaemia, and to recommend regular electrolyte monitoring, beginning with the test arranged for 3.30 pm today.",
      "He has stable heart failure and takes ramipril 10 mg daily, increased in March 2026, and spironolactone 25 mg daily, added by cardiology in April 2026. He also continues Sando-K, two tablets daily, started in 2019 when his potassium was 3.1 mmol/L on furosemide alone. All three raise serum potassium, and the supplement may no longer be needed.",
      "His last potassium, in March 2026, was borderline at 5.1 mmol/L, and no repeat has been taken since the spironolactone was added. Today he reported occasional leg weakness over the past three weeks, without palpitations or nausea; his pulse was 72 and regular.",
      "As agreed with the practice, he will withhold Sando-K until the result is reviewed, continuing spironolactone and ramipril unless advised otherwise. The tablets have been removed from his weekly tray.",
      "I would be grateful if you could review the result, consider stopping the supplement permanently and arrange ongoing electrolyte monitoring. I will telephone him tomorrow to confirm the test was taken."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Pharmacist",
      "Brookside Pharmacy"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The first paragraph names the risk and the action wanted from the GP, and points to the blood test already booked for today, so the reader knows at once that a result is coming.",
      "selection": "The three potassium-raising medicines, the old and recent potassium results, the missing repeat test and the new leg weakness are kept because they make the case. The hernia, cataract, choir, grandchildren, flu vaccine, eczema and parking queries are left out as irrelevant to the request.",
      "organisation": "Purpose, then the medicines and why they interact, then the blood results and today's symptoms, then the action already taken, and finally the request and follow-up.",
      "tone": "Professional and collegial from pharmacist to GP: the pharmacist recommends and suggests rather than instructs, while making the urgency clear."
    },
    "notesUsed": [
      "ramipril 10 mg daily, increased March 2026",
      "spironolactone 25 mg daily, added April 2026 by cardiology",
      "Sando-K (potassium bicarbonate and potassium chloride) two tablets daily, started 2019; potassium 3.1 mmol/L then",
      "all three raise serum potassium; supplement may no longer be required",
      "potassium 5.1 mmol/L March 2026, borderline; no repeat since spironolactone",
      "leg muscle weakness for three weeks; no palpitations or nausea; pulse 72 regular",
      "practice telephoned; Sando-K withheld; spironolactone and ramipril continue unless advised",
      "blood test at 3.30 pm today",
      "Sando-K removed from tray; advice repeated back correctly",
      "pharmacy to telephone tomorrow"
    ],
    "notesLeftOut": [
      "atorvastatin and raised cholesterol — not part of the interaction",
      "creatinine and eGFR stable in March — no change to report; the new test will update them",
      "blood pressure, ankles, weight, fluid intake — stable and not needed for the request",
      "hernia repair, cataract surgery, bowel screening — unrelated history",
      "flu vaccine, eczema, joint stiffness supplement — separate minor matters handled at the pharmacy",
      "teaching career, dog, choir, grandchildren, parking, delivery, monitor batteries — social detail with no bearing on the request",
      "heart failure nurse review in June — no change to medicines, adds nothing"
    ],
    "safety": [
      {
        "point": "Combination of ramipril, spironolactone and potassium supplement with risk of severe hyperkalaemia",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Borderline potassium 5.1 mmol/L and no repeat since spironolactone added",
        "where": "paragraph 3"
      },
      {
        "point": "New leg muscle weakness, possibly related to raised potassium",
        "where": "paragraph 3"
      },
      {
        "point": "Sando-K withheld; spironolactone and ramipril continue unless advised",
        "where": "paragraph 4"
      },
      {
        "point": "Same-day blood test at 3.30 pm and ongoing electrolyte monitoring",
        "where": "paragraphs 1, 5"
      },
      {
        "point": "Pharmacy follow-up call tomorrow",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-pharmacy-clopidogrel-and-omeprazole-interaction-concern": {
    "header": [
      "Dr Helen Carter",
      "General Practitioner",
      "Riverside Medical Centre",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Carter,",
    "re": "Re: Mr Daniel Osei, aged 64, clopidogrel and omeprazole interaction",
    "body": [
      "I am writing to recommend that you review the choice of proton pump inhibitor for Mr Osei, as his omeprazole may reduce the effectiveness of his clopidogrel during the highest-risk period after coronary stenting.",
      "Mr Osei had a drug-eluting stent inserted on 24 July 2026 and was started on clopidogrel 75 mg and aspirin 75 mg daily, with dual antiplatelet therapy planned for twelve months. Cardiology confirmed on 21 August 2026 that this must continue uninterrupted. Omeprazole 20 mg daily was started by the practice on 26 July 2026 for reflux.",
      "Omeprazole inhibits CYP2C19, the enzyme that converts clopidogrel to its active form, and co-prescription is not recommended where an alternative exists. As he still needs acid suppression, I would suggest an alternative with less effect on this enzyme, such as pantoprazole.",
      "He still has dyspepsia most evenings. He has no black stools, vomiting of blood or bruising, and no history of gastrointestinal bleeding or ulcer. He has had no chest pain since the procedure.",
      "He understands that he must not stop either antiplatelet medicine and is happy to change his stomach medicine if you agree. I would be grateful to hear your decision."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Pharmacist",
      "Riverside Pharmacy"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "The letter opens with the recommendation and the reason in one sentence, so the GP knows immediately what is being asked and why it matters now.",
      "selection": "The stent date, the antiplatelet regimen and its planned length, the date omeprazole was started, the mechanism and the absence of bleeding signs are kept. Rehabilitation, family history, hay fever, the wedding, cycling, the shed and housekeeping queries are left out because they do not affect the prescribing decision.",
      "organisation": "Recommendation first, then the relevant medicines and dates, then the interaction and a suggested alternative, then current symptoms and bleeding signs, and finally the patient's agreement and the request for a reply.",
      "tone": "Courteous and evidence-based; the pharmacist suggests an alternative while leaving the decision with the prescriber."
    },
    "notesUsed": [
      "drug-eluting stent 24 July 2026",
      "clopidogrel 75 mg and aspirin 75 mg daily; dual therapy for twelve months",
      "cardiology 21 August 2026: continue without interruption",
      "omeprazole 20 mg daily started 26 July 2026 for reflux",
      "omeprazole inhibits CYP2C19; co-prescription not recommended where alternative exists",
      "highest-risk period after stent",
      "dyspepsia most evenings, partially relieved",
      "no black stools, haematemesis or bruising; no previous bleed or ulcer",
      "no chest pain since procedure",
      "must not stop either antiplatelet; happy to change if GP agrees"
    ],
    "notesLeftOut": [
      "atorvastatin, ramipril, GTN spray — not part of the interaction",
      "hypertension, cholesterol, home blood pressure readings — stable and not relevant",
      "cardiac rehabilitation, diet, coffee, extra pillow — lifestyle detail the GP does not need for this decision",
      "appendicectomy, ankle sprain, hearing loss, dental check, eye test — unrelated history",
      "family history, mother in Kumasi, wedding, shed, cycling, cooking — social detail",
      "prepayment certificate, blood pressure cuff, parking, NHS App, heavy door — pharmacy housekeeping",
      "next cardiology review January 2027 — not needed for the request"
    ],
    "safety": [
      {
        "point": "Omeprazole may reduce the antiplatelet effect of clopidogrel in the highest-risk period after stenting",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Dual antiplatelet therapy must continue without interruption for twelve months",
        "where": "paragraphs 2, 5"
      },
      {
        "point": "Ongoing need for gastric protection; suggested alternative proton pump inhibitor",
        "where": "paragraph 3"
      },
      {
        "point": "No signs of gastrointestinal bleeding",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-discharge-medicines-reconciliation-to-gp": {
    "header": [
      "Dr Sara Mahmood",
      "General Practitioner",
      "Oakfield Surgery",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Mahmood,",
    "re": "Re: Mrs Eleanor Fitch, aged 79, medicine changes after acute kidney injury",
    "body": [
      "I am writing to inform you of medication changes made during Mrs Fitch's admission and to request continued monitoring of her renal function and blood pressure, including repeat urea and electrolytes within seven days of her discharge from Ward 6 today.",
      "She was admitted on 28 August 2026 with acute kidney injury secondary to dehydration after a diarrhoeal illness. Her eGFR was 31 on admission and 48 on discharge, against a baseline of 62.",
      "On admission, ramipril 10 mg daily, metformin 1 g twice daily and furosemide 40 mg daily were suspended. The consultant advises that ramipril and furosemide should be restarted only after her renal function and blood pressure have been reviewed in primary care, and that metformin should remain suspended pending a repeat eGFR. Amlodipine, atorvastatin and lansoprazole are unchanged; nothing new was started.",
      "Her discharge blood pressure was 138/82 sitting and 130/76 standing. Her ward glucose ranged between 6 and 9 mmol/L without metformin.",
      "She and her daughter, who fills her weekly dosette box, have a written list of the changes and understand that the paused tablets must not be restarted without your advice. Her daughter has removed them and holds the blood test form."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Clinical Pharmacist",
      "Hospital Pharmacy Department"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The opening states both purposes from the task, informing the GP of the changes and requesting monitoring, and gives the seven-day deadline for the repeat blood test.",
      "selection": "The three suspended medicines with their conditions for restarting, the renal trend, the discharge blood pressure and the glucose off metformin are kept because the GP must act on them. The library books, cat, television charge, chiropody and parking badge are left out as irrelevant.",
      "organisation": "Purpose and deadline, then the reason for admission and renal trend, then the medicine changes, then observations relevant to restarting, and finally how the family is managing the changes.",
      "tone": "Clear and factual hospital-to-primary-care handover, with the consultant's plan reported accurately so responsibility is unambiguous."
    },
    "notesUsed": [
      "admitted 28 August 2026, AKI from dehydration after diarrhoea",
      "eGFR 31 on admission, 48 on discharge, baseline 62",
      "ramipril 10 mg, metformin 1 g twice daily, furosemide 40 mg suspended",
      "restart ramipril and furosemide only after primary care review",
      "metformin suspended pending repeat eGFR",
      "repeat U&E within seven days of discharge",
      "amlodipine, atorvastatin, lansoprazole unchanged; no new medicines",
      "blood pressure 138/82 sitting, 130/76 standing",
      "ward glucose between 6 and 9 mmol/L without metformin",
      "daughter fills dosette box, removed paused tablets, holds blood form; written list given"
    ],
    "notesLeftOut": [
      "creatinine values — eGFR already shows the trend",
      "intravenous fluids, stool sample, urine output, potassium normal — inpatient detail that is complete",
      "doses of the continued medicines — unchanged, so the GP already holds them",
      "weight 61 kg, pulse, physiotherapy and stairs assessment — not needed for the medicines decisions",
      "osteoarthritis, cataract, previous urinary infection — unrelated history",
      "library books, cat, glasses, television charge, walking frame, parking badge, chiropody, knitting — social and housekeeping detail",
      "two-week supply of own medicines — practical detail the GP does not need to act on"
    ],
    "safety": [
      {
        "point": "Ramipril, metformin and furosemide suspended; not to be restarted without review",
        "where": "paragraphs 3, 5"
      },
      {
        "point": "Restart ramipril and furosemide only after renal function and blood pressure review",
        "where": "paragraph 3"
      },
      {
        "point": "Metformin to remain suspended pending repeat eGFR",
        "where": "paragraph 3"
      },
      {
        "point": "Repeat urea and electrolytes within seven days of discharge",
        "where": "paragraph 1"
      },
      {
        "point": "Renal function improving but below baseline",
        "where": "paragraph 2"
      }
    ]
  },
  "wri-pharmacy-gentamicin-level-handover-at-hospital-discharge": {
    "header": [
      "Dr Raymond Ellis",
      "General Practitioner",
      "Southfield Surgery",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Ellis,",
    "re": "Re: Mr Victor Adeyemi, aged 59, home gentamicin monitoring",
    "body": [
      "I am writing to hand over Mr Adeyemi, discharged today to complete intravenous gentamicin at home, given by the community OPAT nursing team. A pre-dose gentamicin level and renal function are needed before each remaining dose, and I would be grateful if you could review each result on the day it reaches the surgery.",
      "He was admitted on 30 August 2026 with cellulitis of the right lower leg and Gram-negative bacteraemia. He has been afebrile for four days, the erythema is receding, his creatinine has remained stable at 96 and yesterday's level was within range.",
      "Three further once-daily doses of gentamicin 560 mg (7 mg/kg) are planned via a midline; on microbiology advice these complete treatment of the bacteraemia. The pre-dose level must be below 1 mg/L. The dose must be withheld and advice sought if the level is 1 mg/L or above, if renal function deteriorates, or if he reports new tinnitus, worse hearing or dizziness, as he already wears a hearing aid.",
      "He also takes oral flucloxacillin 1 g four times daily for the cellulitis, with seven days remaining. His baseline eGFR was 68, and the midline is due for review on 8 September."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Clinical Pharmacist",
      "Hospital Pharmacy Department"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The opening says what is being handed over, who will give the doses, and what the GP is asked to do with every result, because a missed or unread level is the main danger.",
      "selection": "The dose, the level target, the withholding rules including hearing symptoms, renal results, the microbiology plan, the midline review date and the oral antibiotic are kept. The allotment, lift, parking, emollient and housekeeping matters are left out as they do not affect safe monitoring.",
      "organisation": "Purpose and request, then the reason for treatment and progress, then the gentamicin regimen and stopping rules, and finally the other antibiotic and practical dates.",
      "tone": "Precise and directive where safety requires it, as a hospital colleague handing over shared care."
    },
    "notesUsed": [
      "discharged today to complete IV gentamicin at home, given by the community OPAT nursing team",
      "pre-dose level and renal function before each dose; surgery to review each result on the day",
      "admitted 30 August 2026, right leg cellulitis, Gram-negative bacteraemia",
      "afebrile four days, erythema receding",
      "creatinine stable at 96; yesterday's level within range",
      "gentamicin 560 mg (7 mg/kg) once daily via midline, three further doses; microbiology: these complete treatment of the bacteraemia",
      "target below 1 mg/L; withhold if 1 mg/L or above or renal function worse",
      "hearing aid; withhold and seek advice if new tinnitus, worse hearing or dizziness",
      "flucloxacillin 1 g four times daily for the cellulitis, seven days remaining",
      "baseline eGFR 68",
      "midline review 8 September"
    ],
    "notesLeftOut": [
      "weight 80 kg — the mg/kg dose already shows the calculation",
      "metformin and ramipril — unchanged regular medicines the GP already prescribes",
      "organism sensitive to gentamicin — implied by the microbiology plan",
      "HbA1c and ward glucose — diabetes stable, not the purpose of the handover",
      "timing of ward doses, temperature, walking, leg elevation, pain — inpatient progress detail",
      "supplies, sharps container, flushes, ward pharmacy number — practical detail already given to the patient and nurses",
      "patient understanding of the blood tests — the nurses will check before each dose",
      "gardening cut, previous knee surgery, nail infection, wisdom teeth — unrelated history",
      "ex-smoker, emollient, eye screening, flu vaccine, fit note — not needed for this handover",
      "work, daughter, nephew, allotment, lift, parking — social and housekeeping detail"
    ],
    "safety": [
      {
        "point": "Pre-dose gentamicin level and renal function before every remaining dose; GP to review each result on the day",
        "where": "paragraph 1"
      },
      {
        "point": "Withhold dose and seek advice if level 1 mg/L or above or renal function deteriorates",
        "where": "paragraph 3"
      },
      {
        "point": "Ototoxicity check before each dose in a patient with a hearing aid",
        "where": "paragraph 3"
      },
      {
        "point": "Remaining gentamicin completes treatment of the Gram-negative bacteraemia; flucloxacillin for the cellulitis",
        "where": "paragraphs 3, 4"
      },
      {
        "point": "Midline review due 8 September",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-insulin-regimen-confusion-and-recurrent-hypoglycaemia": {
    "header": [
      "Dr Felix Conway",
      "General Practitioner",
      "Harborne Family Practice",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Conway,",
    "re": "Re: Mr Samuel Knox, aged 54, recurrent hypoglycaemia",
    "body": [
      "I am writing to request an urgent diabetes review for Mr Knox, who attended distressed by recurrent hypoglycaemia and unable to tell his two insulin pens apart.",
      "He takes insulin glargine 24 units at night and insulin aspart with meals, at a variable, unrecorded dose, together with gliclazide 80 mg twice daily and metformin 1 g twice daily. The pens look similar, with worn labels. With no written regimen and a sulfonylurea alongside insulin, this probably explains his symptoms.",
      "This week he had three episodes of shaking, sweating and confusion, all in the late morning. On one occasion his neighbour found him unwell and gave him a sugary drink. His meter shows several readings below 4 mmol/L, the lowest 2.8 mmol/L on 1 September. He lives alone and eats irregularly.",
      "Today his glucose was 5.4 mmol/L and he was alert. He holds a car licence, and I have advised him not to drive until he has been reviewed.",
      "I would be grateful if you could review his regimen, including the gliclazide, provide a written chart showing which pen to use and when, and advise whether the episode needing help must be reported to the licensing authority."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Pharmacist",
      "Harborne Pharmacy"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The first sentence makes the request (an urgent review) and gives the two reasons, the hypoglycaemia and the confusion over the pens.",
      "selection": "The full diabetes regimen, the causes of risk, the pattern and severity of the lows, including the episode needing a neighbour's help, his living alone and the driving advice are kept. Fishing, rugby, the food bank, back pain, sweets, redecorating and parking are left out as irrelevant.",
      "organisation": "Request, then the medicines and why they cause risk, then the episodes and readings, then his state today and the driving advice, and finally the specific actions requested.",
      "tone": "Concerned but measured, giving the GP the facts needed to prioritise the review without sounding alarmist."
    },
    "notesUsed": [
      "attended distressed, could not tell pens apart",
      "glargine 24 units at night; aspart with meals, dose not written down",
      "gliclazide 80 mg twice daily; metformin 1 g twice daily",
      "pens similar, labels worn; no written regimen; sulfonylurea with insulin",
      "three episodes late morning; neighbour gave sugary drink",
      "readings below 4 mmol/L, lowest 2.8 mmol/L on 1 September",
      "lives alone, meals irregular",
      "glucose 5.4 mmol/L today, alert",
      "holds a car licence; advised not to drive until reviewed; episode needing help may need reporting",
      "wants a written chart"
    ],
    "notesLeftOut": [
      "atorvastatin, ramipril, hypertension — not related to the hypoglycaemia",
      "HbA1c, eye and foot screening, evening and fasting readings — not needed to justify the review",
      "insulin start date and lost education leaflets — background the review will cover",
      "back pain, sweets, testing strips, pen disposal, parking — separate minor queries",
      "wrist fracture, shingles, brother, fishing, rugby, food bank, redecorating — unrelated detail",
      "recognises lows, carries glucose tablets, will call on Monday — reassuring but not needed for the request",
      "licence held for a car only, former lorry driver — the driving advice covers what the GP needs"
    ],
    "safety": [
      {
        "point": "Recurrent hypoglycaemia, one episode needing third-party help, lowest 2.8 mmol/L",
        "where": "paragraph 3"
      },
      {
        "point": "Confusion between two similar insulin pens; no written regimen",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Gliclazide alongside insulin increases hypoglycaemia risk; review requested",
        "where": "paragraphs 2, 5"
      },
      {
        "point": "Lives alone with irregular meals",
        "where": "paragraph 3"
      },
      {
        "point": "Advised not to drive until reviewed; reporting to the licensing authority to be advised",
        "where": "paragraphs 4, 5"
      },
      {
        "point": "Urgent diabetes review and written pen chart",
        "where": "paragraphs 1, 5"
      }
    ]
  },
  "wri-pharmacy-levothyroxine-and-calcium-timing-affecting-control": {
    "header": [
      "Dr Maria Costa",
      "General Practitioner",
      "Lakeside Medical Group",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Costa,",
    "re": "Re: Mrs Joan Pemberton, aged 62, levothyroxine absorption",
    "body": [
      "I am writing to advise you of a likely interaction affecting Mrs Pemberton's thyroid control, and to request a review of her recent thyroid function results. On 12 August 2026 her TSH was 7.8 mU/L, with free T4 within range.",
      "She has taken levothyroxine 100 mcg since 2018, and for at least the past year has taken it at breakfast with tea, her morning calcium and vitamin D tablet and lansoprazole 30 mg. Calcium markedly reduces the absorption of levothyroxine, and the two should be separated by at least four hours. Lansoprazole may also reduce absorption.",
      "Over the past two months she has developed fatigue, cold intolerance, constipation, drier hair and weight gain of about three kilograms. She was told that her result was abnormal, but no change was made.",
      "I would suggest that she takes levothyroxine on waking with water, moving her morning calcium tablet to at least four hours later, with thyroid function rechecked before any dose change. As she takes alendronic acid 70 mg on Sunday mornings, your advice on timing for that day would help.",
      "She is keen to follow a new routine. I will review her again after your reply."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Pharmacist",
      "Lakeside Pharmacy"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The opening states the problem as a likely interaction and asks for the result review the task requires, so the GP sees both the cause and the request together.",
      "selection": "The TSH result, how and when she takes her tablets, the unchanged dose, the hypothyroid symptoms and the unactioned result are kept. The holiday, book club, cod liver oil, hearing aid, waiting-room chairs and past surgery are left out as irrelevant.",
      "organisation": "Purpose, then the medicines and the mechanism, then symptoms and the earlier result, then a practical suggestion with an open question, and finally follow-up.",
      "tone": "Helpful and tactful; the earlier unactioned result is reported factually without criticism of the practice."
    },
    "notesUsed": [
      "TSH 7.8 mU/L on 12 August 2026, free T4 within range",
      "levothyroxine 100 mcg, same dose since 2018",
      "taken with the morning calcium and vitamin D tablet and tea at breakfast for at least a year",
      "lansoprazole 30 mg at the same breakfast; may reduce absorption",
      "separate calcium by at least four hours",
      "fatigue, cold intolerance, constipation, drier hair, weight gain about three kilograms over two months",
      "told abnormal, no change made",
      "alendronic acid 70 mg Sunday mornings",
      "willing to change routine; pharmacy to review after GP reply"
    ],
    "notesLeftOut": [
      "TSH reference range — the GP's laboratory range is known to her",
      "calcium dose and evening tablet — only the morning tablet clashes with the levothyroxine",
      "brand unchanged — rules out a brand switch but adds little once the timing is explained",
      "atorvastatin — not involved in the interaction",
      "osteoporosis and wrist fracture history — reason for calcium, which the GP knows",
      "sleep, mood, swimming, housework — do not change the request",
      "hysterectomy, varicose veins, gallstones, family history — unrelated history",
      "cod liver oil, vitamin D query (already in her calcium tablets), hearing aid, heartburn — separate minor matters",
      "husband, holiday, book club, son, granddaughter, chairs, parking, texts, large-print labels — social and housekeeping detail"
    ],
    "safety": [
      {
        "point": "Calcium (and possibly lansoprazole) reducing levothyroxine absorption",
        "where": "paragraph 2"
      },
      {
        "point": "Elevated TSH 7.8 mU/L not yet acted on; symptoms of under-replacement",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Recheck thyroid function after correcting timing before any dose change",
        "where": "paragraph 4"
      },
      {
        "point": "Alendronic acid timing on Sundays to be considered",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-lithium-monitoring-overdue-advice-to-gp": {
    "header": [
      "Dr Owen Pratt",
      "General Practitioner",
      "Castlegate Practice",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Pratt,",
    "re": "Re: Ms Rebecca Lyne, aged 45, overdue lithium monitoring",
    "body": [
      "I am writing to advise you that Ms Lyne's lithium monitoring appears overdue, and to request that you arrange a serum lithium level with renal and thyroid function soon, as she has new symptoms that may indicate a rising level.",
      "She takes lithium carbonate 400 mg at night. Her monitoring book records her last lithium level and renal and thyroid function on 8 February 2026, seven months ago. Since then, bendroflumethiazide 2.5 mg daily has been started, and for two weeks she has taken over-the-counter ibuprofen most days for a sore shoulder. Both reduce lithium clearance.",
      "Over the past month she has developed a mild hand tremor and increased thirst. She has no vomiting, diarrhoea, unsteadiness or slurred speech.",
      "Today I advised her to stop the ibuprofen and use paracetamol instead, and to seek urgent help through NHS 111 or the emergency department if any of those symptoms or confusion develop. I would also recommend that her antihypertensive is reviewed.",
      "She can attend early in the morning, allowing sampling about twelve hours after her evening dose, as before, and prefers contact by mobile telephone."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Pharmacist",
      "Castlegate Pharmacy"
    ],
    "bodyWords": 184,
    "commentary": {
      "opening": "The first paragraph combines the finding (monitoring overdue) with the request for bloods and the reason for urgency, the new symptoms.",
      "selection": "The lithium dose, the date of the last tests, the two interacting medicines and the symptoms, both present and absent, are kept. Hay fever, foot cream, the holiday, the sister's baby, the house move and parking are left out because they have no bearing on lithium safety.",
      "organisation": "Request, then the monitoring gap and interacting medicines, then the symptoms, then the advice given today with safety-netting and the recommendation, and finally practical sampling detail.",
      "tone": "Clear and appropriately urgent, from one professional to another, recommending action without overstating the risk."
    },
    "notesUsed": [
      "lithium carbonate 400 mg at night",
      "last level, renal and thyroid tests 8 February 2026, seven months ago",
      "bendroflumethiazide 2.5 mg daily started February 2026",
      "over-the-counter ibuprofen most days for two weeks, sore shoulder",
      "both reduce lithium clearance",
      "new hand tremor over a month; increased thirst",
      "no vomiting, diarrhoea, unsteadiness or slurred speech",
      "advised to stop ibuprofen, paracetamol instead; NHS 111 or emergency department if toxicity symptoms",
      "can attend early before work; samples previously about twelve hours after dose",
      "prefers mobile contact"
    ],
    "notesLeftOut": [
      "sertraline 100 mg — unchanged, not part of the interaction",
      "recommended monitoring interval — the GP knows it",
      "bipolar history, mental health reviews, peer support — stable and not needed for the request",
      "previous tremor in 2019 — settled years ago; the current tremor is new",
      "gym attendance — background to the shoulder pain only",
      "hay fever, foot cream, cervical screening, appendix, toe, contact lenses — unrelated",
      "partner, sister, holidays, house move, collection days, charity walk — social and housekeeping detail",
      "unaware of the interactions — the advice given today covers this"
    ],
    "safety": [
      {
        "point": "Lithium level, renal and thyroid function overdue; bloods requested",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Bendroflumethiazide and ibuprofen both raise lithium levels",
        "where": "paragraph 2"
      },
      {
        "point": "New tremor and thirst possibly indicating rising level",
        "where": "paragraph 3"
      },
      {
        "point": "Ibuprofen stopped today; paracetamol instead",
        "where": "paragraph 4"
      },
      {
        "point": "Urgent help via NHS 111 or emergency department if vomiting, diarrhoea, unsteadiness, slurred speech or confusion",
        "where": "paragraph 4"
      },
      {
        "point": "Review antihypertensive",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-methotrexate-dosing-error-identified-at-dispensing": {
    "header": [
      "Dr Sandra Klein",
      "Prescriber",
      "Hillcrest Rheumatology Clinic",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Klein,",
    "re": "Re: Mr George Hardy, aged 71, methotrexate prescription dated 3 September 2026",
    "body": [
      "I am writing to seek urgent clarification of a methotrexate prescription for Mr Hardy, dated 3 September 2026, which states a daily rather than a weekly dose. I have withheld supply until I hear from you.",
      "The prescription reads methotrexate 2.5 mg tablets, 10 mg (four tablets) ONCE DAILY, quantity 16 tablets. He has taken 10 mg once weekly on Mondays for eighteen months, with folic acid 5 mg weekly on Thursdays, and his rheumatoid arthritis is well controlled. Daily dosing risks severe and potentially fatal toxicity, including bone marrow suppression, mucositis and liver injury.",
      "The quantity matches four weeks at his usual weekly dose, and no reason for a change is recorded, so I suspect a transcription error. I telephoned the clinic at 11.20 am and left a message with your secretary.",
      "Mr Hardy is well, with no mouth ulcers, sore throat, rash or breathlessness. His last blood tests, six weeks ago, were within range. His four remaining tablets cover his next Monday dose, which he will take as usual.",
      "I would be grateful if you could confirm the intended dose and, if appropriate, issue a corrected weekly prescription. He is happy for you to telephone him directly."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Pharmacist",
      "Hillcrest Pharmacy"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The letter opens with the problem, the request for urgent clarification and the fact that supply has been withheld, so the prescriber understands the urgency and the current position at once.",
      "selection": "The exact wording of the prescription, the established weekly regimen, the toxicity risk, the patient's current wellbeing and his remaining supply are kept. Bowls, travel vaccines, his car, the anniversary and the raised toilet seat are left out as irrelevant to the error.",
      "organisation": "Problem and action taken, then the prescription compared with the usual regimen and the risk, then why an error is suspected, then the patient's current state, and finally the request.",
      "tone": "Firm and precise because of the potential for serious harm, yet courteous and non-accusatory towards the prescriber."
    },
    "notesUsed": [
      "prescription dated 3 September 2026: methotrexate 2.5 mg tablets, 10 mg (four tablets) ONCE DAILY, 16 tablets",
      "supply withheld pending clarification",
      "usual regimen 10 mg once weekly on Mondays for eighteen months",
      "folic acid 5 mg weekly on Thursdays",
      "rheumatoid arthritis well controlled",
      "risk of severe, potentially fatal toxicity: marrow suppression, mucositis, hepatic injury",
      "16 tablets match four weeks at the weekly dose; no rationale recorded; transcription error suspected",
      "clinic telephoned 11.20 am, message with secretary",
      "well: no mouth ulcers, sore throat, rash or breathlessness",
      "bloods six weeks ago stable",
      "four tablets at home, enough for next Monday dose",
      "happy for clinic to telephone him"
    ],
    "notesLeftOut": [
      "naproxen and omeprazole — unchanged and not part of the error",
      "quantity lasting only four days at the daily dose — the four-week weekly match makes the point",
      "osteoarthritis, gallbladder, hernia, mole, colour blindness — unrelated history",
      "next blood test mid-September — routine and already booked",
      "travel vaccines, painkiller, hearing, glasses — separate matters for another time",
      "wife, bowls, son abroad, grandson, car, anniversary, parking, toilet seat, deliveries — social and housekeeping detail",
      "patient told nothing of a change — covered by no rationale being recorded"
    ],
    "safety": [
      {
        "point": "Prescription written as daily methotrexate instead of weekly; supply withheld",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Risk of severe, potentially fatal toxicity with daily dosing",
        "where": "paragraph 2"
      },
      {
        "point": "Patient currently well with no signs of toxicity",
        "where": "paragraph 4"
      },
      {
        "point": "Patient continuing his weekly supply for next Monday",
        "where": "paragraph 4"
      },
      {
        "point": "Corrected weekly prescription requested urgently",
        "where": "paragraphs 1, 5"
      }
    ]
  },
  "wri-pharmacy-new-prescription-duplication-of-two-ssris": {
    "header": [
      "Dr Claire Mensah",
      "Prescriber",
      "Northbridge Mental Health Team",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Mensah,",
    "re": "Re: Ms Tanya Brooks, aged 34, sertraline and citalopram prescribed together",
    "body": [
      "I am writing to ask you to confirm whether Ms Brooks should take sertraline or citalopram. Today she presented your discharge prescription for sertraline 50 mg daily, dated 3 September 2026, while citalopram 20 mg daily remains on her repeat list. I have held the sertraline, unsupplied, until you reply.",
      "Ms Brooks has taken citalopram 20 mg for generalised anxiety disorder since 2023, and has about two weeks' supply at home. Nothing on the prescription indicates a switch and she has no discharge summary, although she was told on the ward that her tablets were changing. Taking both together would carry a risk of serotonergic toxicity.",
      "Today she had no tremor, sweating, agitation or confusion, and her pulse was 78 and regular. She has not taken either medicine today. She has no known drug allergies.",
      "Until the plan is confirmed, I have advised her in writing to continue citalopram 20 mg, not to start the sertraline, and to ring NHS 111 out of hours if unwell. I telephoned the hospital pharmacy at 10.40 am but have had no reply. I would be grateful if you could state in writing whether citalopram should be stopped, cross-tapered or continued."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Northbridge Pharmacy"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The first sentence asks the prescriber the one question that must be answered, and the paragraph then explains that supply is on hold, so the reader knows at once that a reply is needed before the patient can be treated.",
      "selection": "The two prescriptions, the toxicity risk, the supply at home, today's absence of toxic features and the interim advice are kept. Propranolol, the contraceptive pill, old injuries, screening and counter requests are left out because they do not affect which antidepressant she should take.",
      "organisation": "Request and the conflict first, then background and risk, then today's assessment, and finally the interim advice and the specific decision requested.",
      "tone": "Courteous and precise between professionals; the problem is presented as a query for clarification, not a criticism of the discharge team."
    },
    "notesUsed": [
      "sertraline 50 mg daily, dated 3 September 2026, discharge",
      "citalopram 20 mg daily on repeat since 2023",
      "about two weeks' supply of citalopram at home",
      "nothing indicates a switch; no discharge summary; told tablets were being changed",
      "risk of serotonergic toxicity",
      "no tremor, sweating, agitation or confusion; pulse 78 regular",
      "not taken either medicine today",
      "no known drug allergies",
      "advised in writing to continue citalopram, not start sertraline; NHS 111 out of hours if unwell",
      "hospital pharmacy telephoned 10.40 am, no reply",
      "stopped, cross-tapered or continued",
      "sertraline held unsupplied",
      "wants one clear written instruction (request is for a written plan)"
    ],
    "notesLeftOut": [
      "propranolol 10 mg up to three times daily when required, and combined oral contraceptive — not relevant to the SSRI decision",
      "poor sleep and the ward doctor's comment about a medicine for sleep — too vague to act on; she can tell the team herself",
      "temperature, eye contact, speech — pulse and absence of toxic features are enough",
      "wrist fracture, wisdom tooth, cervical screening — irrelevant history",
      "work, flatmate, mother, alcohol — social detail not needed for the decision",
      "travel sickness, hay-fever tablet, delivery, opening hours, sun cream — counter requests handled by the pharmacy",
      "mild nausea when citalopram was started in 2023 — settled, no bearing on the query",
      "collected every four weeks; wish to be telephoned on her mobile — pharmacy will handle contact",
      "999 advice for shaking, sweating, high temperature or confusion — given to the patient in writing; NHS 111 is mentioned"
    ],
    "safety": [
      {
        "point": "Risk of serotonergic toxicity if both SSRIs are taken together",
        "where": "paragraph 2"
      },
      {
        "point": "Sertraline held, unsupplied, until the prescriber replies",
        "where": "paragraph 1"
      },
      {
        "point": "Interim advice: continue citalopram 20 mg, do not start sertraline; NHS 111 out of hours if unwell",
        "where": "paragraph 4"
      },
      {
        "point": "No features of toxicity today",
        "where": "paragraph 3"
      },
      {
        "point": "No known drug allergies",
        "where": "paragraph 3"
      },
      {
        "point": "Clear written plan needed (stop, cross-taper or continue citalopram)",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-otc-ibuprofen-request-unsuitable-for-patient-on-anticoagulant": {
    "header": [
      "Dr Aisha Rahman",
      "General Practitioner",
      "Parkview Surgery",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Rahman,",
    "re": "Re: Mr Frank Bauer, aged 68, uncontrolled knee pain; ibuprofen sale declined",
    "body": [
      "I am writing to ask you to review the pain management of Mr Bauer, whose knee pain is not controlled on regular paracetamol. Today I declined his request to buy ibuprofen 400 mg, and asked him to book with you this week.",
      "Mr Bauer takes apixaban 5 mg twice daily for atrial fibrillation. An anti-inflammatory taken with a direct oral anticoagulant substantially increases bleeding risk, which is higher still because of his gastric ulcer in 2017, and he has no gastroprotection. He now understands he must not buy anti-inflammatories elsewhere. He had no bruising, black stools or bleeding gums today.",
      "He has osteoarthritis of both knees, worse on the right. Despite paracetamol 1 g four times daily for at least three months, he rates the pain 7 out of 10 on stairs, it wakes him most nights and he has stopped walking to the shops. Physiotherapy in 2019 helped for about a year. He has never had a joint injection, and his last X-ray was at diagnosis.",
      "He would accept whatever you consider safe, including further physiotherapy. His other medicines are bisoprolol 2.5 mg and atorvastatin 20 mg, and he has no known drug allergies."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Parkview Pharmacy"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The letter opens with the request for a pain review and immediately states that the sale was declined, so the GP understands both what happened and what is wanted.",
      "selection": "The anticoagulant, the ulcer history, the lack of gastroprotection, the absence of bleeding signs and the failure of paracetamol are kept because they justify the decision and the review. Hearing loss, screening, family details and shop enquiries are left out.",
      "organisation": "Request, then the safety reason for declining the sale, then the extent of the uncontrolled pain and previous treatment, then his wishes and remaining medicines.",
      "tone": "Factual and collaborative; the pharmacist explains the decision without telling the GP what to prescribe."
    },
    "notesUsed": [
      "requested ibuprofen 400 mg; sale declined",
      "apixaban 5 mg twice daily, atrial fibrillation",
      "NSAID with DOAC increases bleeding risk; previous ulcer 2017; no gastroprotection",
      "should not buy anti-inflammatories elsewhere, including supermarket",
      "no bruising, black stools, bleeding gums",
      "osteoarthritis both knees, worse on right",
      "paracetamol 1 g four times daily, at least three months",
      "pain 7 out of 10 on stairs; wakes him most nights; stopped walking to shops",
      "physiotherapy 2019 helped about a year; no injection; X-ray at diagnosis",
      "would accept whatever the doctor thinks safe, including physiotherapy",
      "book with the practice this week",
      "bisoprolol 2.5 mg, atorvastatin 20 mg; no known drug allergies"
    ],
    "notesLeftOut": [
      "blood pressure 136/80, pulse 72 — normal, not needed for the pain review",
      "weight gain, allotment, gardening, kneeling — detail he can give at the appointment",
      "hot water bottle, no walking stick, no topical treatment, no orthopaedic referral — options for the GP to explore at review",
      "cataract surgery, heart rhythm review March 2026 — not relevant",
      "wife's arthritis, sons, football, smoking history — social detail",
      "glucosamine, knee support, hearing loss, bowel screening, parking, crossword books — counter enquiries"
    ],
    "safety": [
      {
        "point": "NSAID with apixaban increases bleeding risk; previous gastric ulcer and no gastroprotection",
        "where": "paragraph 2"
      },
      {
        "point": "Patient advised not to buy anti-inflammatories elsewhere",
        "where": "paragraph 2"
      },
      {
        "point": "No signs of bleeding today",
        "where": "paragraph 2"
      },
      {
        "point": "Follow-up: appointment with GP this week",
        "where": "paragraph 1"
      },
      {
        "point": "No known drug allergies",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-polypharmacy-deprescribing-review-for-elderly-patient": {
    "header": [
      "Dr Nina Foster",
      "General Practitioner",
      "Elmwood Medical Practice",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Foster,",
    "re": "Re: Mrs Edith Crane, aged 83, falls and sedative medicines",
    "body": [
      "I am writing to recommend a structured medication review for Mrs Crane, with a view to deprescribing, after two falls in the past two months.",
      "Three of her medicines are sedative: amitriptyline 25 mg at night, started in 2019 for insomnia; zopiclone 7.5 mg at night since 2022, above the 3.75 mg recommended in older people; and oxybutynin 5 mg twice daily since 2021. Amitriptyline and oxybutynin are also strongly anticholinergic. None has been reviewed; together they are linked to falls, drowsiness and cognitive impairment.",
      "Her daughter reports new afternoon drowsiness, repeated questions over three months, dry mouth and constipation. Today her blood pressure was 142/78 sitting and 118/70 after one minute standing, with light-headedness on standing, and her second fall followed standing up quickly. She also takes furosemide 40 mg and ramipril 10 mg.",
      "As a first step, I would suggest reducing zopiclone to 3.75 mg as part of a planned taper. Mrs Crane is willing to try this if you agree, though she fears poor sleep. I would also be grateful if you could consider a falls referral, as none has been made. She has no known drug allergies and is happy for her daughter to attend."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Elmwood Pharmacy"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The recommendation and its trigger, two recent falls, are stated in the first sentence so the GP sees the purpose and the urgency together.",
      "selection": "The three sedative medicines, the zopiclone dose, the anticholinergic symptoms, the postural blood pressure drop and the diuretic and antihypertensive are kept because they explain the falls risk. Old surgery, the budgie, the hairdresser and counter requests are left out.",
      "organisation": "Recommendation, the problem medicines, the evidence of harm, then a concrete first step and the patient's view.",
      "tone": "Respectful and evidence-based; the pharmacist suggests changes and leaves the decision to the GP, as the patient was told."
    },
    "notesUsed": [
      "two falls in the past two months",
      "amitriptyline 25 mg since 2019 for insomnia, never reviewed",
      "zopiclone 7.5 mg since 2022, above 3.75 mg recommended in older people",
      "oxybutynin 5 mg twice daily since 2021",
      "two strongly anticholinergic; falls, drowsiness, cognitive impairment",
      "afternoon drowsiness, repeating questions over three months, dry mouth, constipation",
      "BP 142/78 sitting, 118/70 after one minute standing; light-headed on standing",
      "second fall after standing up quickly",
      "furosemide 40 mg, ramipril 10 mg",
      "not referred to falls service",
      "reduce zopiclone to 3.75 mg as first step of a planned taper",
      "willing to try if doctor agrees; worried about poor sleep",
      "no known drug allergies; happy for daughter to be present"
    ],
    "notesLeftOut": [
      "atorvastatin — not implicated in falls or sedation",
      "details of each fall (emergency department, bruising, no loss of consciousness) — no fracture; summary of two falls is enough",
      "stick outdoors, grab rail, landing light, pendant alarm — for the falls service to assess",
      "kidney function normal in June 2026, weekly box, no doubled doses — no action needed",
      "hip replacement, cataracts, shingles, breast screening — past history not relevant",
      "bereavement, knitting, budgie, son in Scotland, hairdresser — social detail",
      "vitamin, large-print labels, Friday delivery, parking, magnifying glass — pharmacy matters"
    ],
    "safety": [
      {
        "point": "Sedative and anticholinergic burden linked to falls and cognitive impairment",
        "where": "paragraph 2"
      },
      {
        "point": "Zopiclone 7.5 mg above the 3.75 mg recommended in older people",
        "where": "paragraph 2"
      },
      {
        "point": "Postural blood pressure drop with light-headedness; on furosemide and ramipril",
        "where": "paragraph 3"
      },
      {
        "point": "Not referred to falls service",
        "where": "paragraphs 3, 4"
      },
      {
        "point": "Suggested first step: planned zopiclone taper to 3.75 mg",
        "where": "paragraph 4"
      },
      {
        "point": "No known drug allergies",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-poor-inhaler-adherence-and-technique-referral": {
    "header": [
      "Dr Marcus Bell",
      "General Practitioner",
      "Greenway Health Centre",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Bell,",
    "re": "Re: Mr Liam Doyle, aged 27, reliever overuse and poor inhaler technique",
    "body": [
      "I am writing to request an asthma review for Mr Doyle, who is overusing his reliever and has poor technique. He would prefer an evening appointment.",
      "He has collected three salbutamol 100 mcg inhalers in six weeks, on 26 July, 14 August and 4 September 2026, against roughly one every three months in 2025. His beclometasone 200 mcg inhaler, two puffs twice daily, was last collected on 8 May 2026; he stopped it in the spring, unaware it was needed daily. He wakes with cough or wheeze twice weekly and uses his reliever three or four times most days.",
      "Today he had a mild wheeze but spoke in full sentences. Last winter he needed oral steroids after an emergency attendance; he has no asthma action plan and no review for over two years.",
      "His technique was poor: he actuated before breathing in, inhaled quickly and did not hold his breath. He has never had a spacer, and slipped back after one correct attempt. He has agreed to restart his preventer. These are markers of poor control and increased risk of a severe attack, so please review his treatment, provide an action plan and consider a spacer."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Greenway Pharmacy"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The review request and the two problems it addresses are given in the first sentence, followed by his agreement and preferred appointment time.",
      "selection": "Collection dates, the stopped preventer, current symptoms, the emergency attendance and the technique errors are kept because they show poor control and risk. The cat, acne cream, dental check-up and shop enquiries are left out.",
      "organisation": "Request, then the evidence of overuse and non-adherence, then today's findings and risk history, then technique and the specific actions requested.",
      "tone": "Clear and concerned but not alarmist, appropriate between a pharmacist and a GP."
    },
    "notesUsed": [
      "salbutamol 100 mcg collected 26 July, 14 August, 4 September 2026",
      "roughly every three months in 2025",
      "beclometasone 200 mcg two puffs twice daily, last collected 8 May 2026",
      "stopped in spring; did not know to use daily",
      "wakes with cough or wheeze twice a week; reliever three or four times most days",
      "mild expiratory wheeze; full sentences",
      "emergency department last winter, oral steroids; no action plan; review over two years ago",
      "actuated before breathing in, quick inhalation, no breath-hold, no spacer",
      "slipped back after one correct attempt",
      "agreed to restart preventer; evening appointment",
      "markers of poorly controlled asthma and risk of severe attack"
    ],
    "notesLeftOut": [
      "cetirizine and hay fever — not central to asthma control",
      "pulse 84, respiratory rate 16, colour normal — he was stable; wheeze and speech summarise today",
      "triggers (cold air, dusty warehouse, football) — he can describe them at review",
      "peak flow meter lost, no missed follow-up detail — minor",
      "childhood eczema, collarbone, no admissions — background not needed",
      "partner, cat, job, mother's asthma, alcohol — social detail",
      "acne cream, texts, inhaler disposal, opening hours, dental check — pharmacy matters"
    ],
    "safety": [
      {
        "point": "Reliever overuse: three salbutamol inhalers in six weeks",
        "where": "paragraph 2"
      },
      {
        "point": "Preventer not taken since spring",
        "where": "paragraph 2"
      },
      {
        "point": "Previous emergency attendance needing oral steroids; no action plan",
        "where": "paragraph 3"
      },
      {
        "point": "Increased risk of a severe attack",
        "where": "paragraph 4"
      },
      {
        "point": "Poor technique and no spacer",
        "where": "paragraph 4"
      },
      {
        "point": "Follow-up: asthma review",
        "where": "paragraph 1"
      }
    ]
  },
  "wri-pharmacy-suspected-adverse-skin-reaction-to-lamotrigine": {
    "header": [
      "Dr Stephen Hollis",
      "Prescriber",
      "Meadow Neurology Service",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Hollis,",
    "re": "Re: Miss Hannah Reid, aged 22, new rash during lamotrigine titration",
    "body": [
      "I am writing to request a same-day review of Miss Reid, who has developed a new, spreading rash during lamotrigine titration. I left a message with your secretary at 9.45 am.",
      "Her lamotrigine was increased from 25 mg to 50 mg daily on 27 August 2026, eight days ago. She also takes sodium valproate 500 mg twice daily, which raises lamotrigine levels and increases the risk of serious skin reactions. She has followed the schedule exactly.",
      "The rash appeared yesterday morning on her trunk and has spread noticeably to both upper arms and the chest. It is red, slightly raised and itchy. There is no mouth, eye or genital involvement, blistering, facial swelling, fever or sore throat, and she feels well.",
      "I have advised her not to take a further dose until she has been assessed, and to attend the emergency department immediately if she develops mouth or eye involvement, fever, blistering or facial swelling. She will telephone us if your clinic has not contacted her by 4 pm today.",
      "Separately, we hold no annual valproate risk acknowledgement form, and her combined pill interacts with lamotrigine, so contraception may need review. She has no known drug allergies."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Meadow Pharmacy"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The urgency, same-day review, comes first, together with the reason, so the prescriber cannot mistake this for a routine letter.",
      "selection": "The dose change and date, the valproate interaction, the description and spread of the rash, the absence of serious features and the advice given are all kept. Course details, exams, the charity run and shop enquiries are left out as irrelevant to the reaction.",
      "organisation": "Urgent request, then the medicines and why they matter, then the rash, then the safety-netting advice, and finally the separate valproate and contraception concern.",
      "tone": "Urgent and precise but calm; the separate concern is clearly marked so it does not distract from the main request."
    },
    "notesUsed": [
      "same-day assessment needed; spreading rash during titration",
      "message left with secretary at 9.45 am",
      "increased from 25 mg to 50 mg daily on 27 August 2026, eight days ago",
      "sodium valproate 500 mg twice daily raises lamotrigine levels; serious cutaneous reaction risk",
      "followed schedule exactly; no new products",
      "rash yesterday morning on trunk; now both upper arms and front of chest; red, slightly raised, itchy",
      "no mouth, eye or genital involvement; no blistering, facial swelling, fever or sore throat; feels well",
      "rash spreading since yesterday",
      "no further dose until assessed; emergency department if red flags",
      "will telephone if not heard by 4 pm",
      "no annual risk acknowledgement form; combined pill interacts with lamotrigine",
      "no known drug allergies"
    ],
    "notesLeftOut": [
      "earlier titration steps (30 July and 13 August 2026) — the current step is what matters",
      "paracetamol as required — not relevant",
      "itch worse in the evening, disturbed sleep — minor detail",
      "epilepsy history, seizure diary, last seizure four months ago — known to the neurology service",
      "chickenpox, appendicectomy, hay fever, migraines — not relevant",
      "friend, parents, accommodation, course, café job, charity run — social detail (friend staying is reassuring but not needed)",
      "student discount, quiet waiting area, ear piercing, exam stress — pharmacy matters",
      "photographs of the spread, no new products — she can show the photographs at assessment"
    ],
    "safety": [
      {
        "point": "Same-day review requested for spreading rash during lamotrigine titration",
        "where": "paragraph 1"
      },
      {
        "point": "Valproate raises lamotrigine levels and the risk of serious skin reaction",
        "where": "paragraph 2"
      },
      {
        "point": "No further lamotrigine dose until assessed",
        "where": "paragraph 4"
      },
      {
        "point": "Red flags: attend emergency department for mouth or eye involvement, fever, blistering or facial swelling",
        "where": "paragraph 4"
      },
      {
        "point": "Follow-up call if no contact by 4 pm",
        "where": "paragraph 4"
      },
      {
        "point": "Valproate Pregnancy Prevention Programme form not seen; contraception review",
        "where": "paragraph 5"
      },
      {
        "point": "No known drug allergies",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-pharmacy-suspected-statin-induced-myalgia-review": {
    "header": [
      "Dr Priya Nair",
      "General Practitioner",
      "Oakfield Surgery",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Nair,",
    "re": "Re: Mrs Carol Whitfield, aged 58, possible statin-associated muscle symptoms",
    "body": [
      "I am writing to request a clinical review of Mrs Whitfield, who has developed muscle pain since her atorvastatin was increased from 20 mg to 40 mg at night on 31 July 2026. I would be grateful if creatine kinase could be measured.",
      "For three weeks she has had a worsening, symmetrical deep ache in both thighs and shoulders, present at rest, worse in the evenings and rated 5 out of 10. It disturbs her sleep most nights and has stopped her weekly exercise class. She reports no weakness, dark urine or fever, and today she rose from a chair without using her arms.",
      "There is no other obvious cause, such as unaccustomed exercise, illness or a new medicine. She took 20 mg from 2021 without difficulty. Her thyroid function was normal in May 2026. She also takes amlodipine, metformin and levothyroxine.",
      "The statin is for primary prevention, raised because her non-HDL cholesterol, 4.5 mmol/L in June 2026, had fallen by less than 40%. She hopes to remain on treatment, has not changed the dose herself and can attend for bloods any morning this week. She fears lasting muscle damage and wants reassurance. She is allergic to penicillin."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Oakfield Pharmacy"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The opening links the new symptom directly to the dose increase and asks for a specific test, so the GP immediately sees the suspected cause and the action requested.",
      "selection": "Timing, pattern, absence of weakness and dark urine, exclusion of other causes, thyroid status and the reason for the statin are kept. Weight, grandchild, holiday plans, vaccination and shop enquiries are left out.",
      "organisation": "Request, symptom description with red-flag checks, other causes excluded, then the treatment background and patient's wishes.",
      "tone": "Objective and reassuring; the link is described as possible rather than certain, leaving diagnosis to the GP."
    },
    "notesUsed": [
      "atorvastatin increased from 20 mg to 40 mg on 31 July 2026",
      "review and creatine kinase measurement",
      "three weeks, worsening, symmetrical, thighs and shoulders, deep ache, at rest, worse evenings",
      "rated 5 out of 10; sleep disturbed; stopped exercise class",
      "no weakness; no dark urine; no fever; rose without using arms",
      "no unaccustomed exercise, illness or new medicine",
      "20 mg since 2021 without difficulty",
      "thyroid function normal May 2026",
      "amlodipine, metformin, levothyroxine",
      "primary prevention; non-HDL 4.5 mmol/L June 2026, reduction less than 40%",
      "wants to stay on cholesterol treatment; not changed dose; blood test mornings this week",
      "worried about lasting damage",
      "penicillin allergy"
    ],
    "notesLeftOut": [
      "doses of amlodipine, metformin and levothyroxine — unchanged and not implicated",
      "eGFR normal four months ago, diabetes and eye screening — stable background",
      "blood pressure, pulse, weight 82 kg — normal and unchanged",
      "gall bladder, bunion surgery, pregnancies — not relevant",
      "husband, dog walking, grandchild, holiday, office work — social detail",
      "meal replacements, vitamin D, cat allergy, flu vaccine, car park, weight service, dental check — not relevant to this review",
      "total cholesterol 5.8, pre-treatment non-HDL 5.6 and previous lipid result — the reduction below 40% shows the reason for the dose change"
    ],
    "safety": [
      {
        "point": "Possible statin-associated muscle symptoms after dose increase; creatine kinase requested",
        "where": "paragraph 1"
      },
      {
        "point": "No weakness, dark urine or fever (no features of rhabdomyolysis)",
        "where": "paragraph 2"
      },
      {
        "point": "Patient has not changed the dose herself",
        "where": "paragraph 4"
      },
      {
        "point": "Allergy: penicillin",
        "where": "paragraph 4"
      },
      {
        "point": "Follow-up: blood test this week",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-pharmacy-warfarin-antibiotic-interaction-referral": {
    "header": [
      "Dr Helen Pryce",
      "General Practitioner",
      "Riverside Medical Centre",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Pryce,",
    "re": "Re: Mr Colin Davies, aged 68, warfarin and clarithromycin interaction",
    "body": [
      "I am writing to refer Mr Davies for review of his warfarin dose and an INR check within three to five days, as he has started clarithromycin, which interacts significantly with warfarin. He would prefer a morning appointment.",
      "The out-of-hours service prescribed clarithromycin 500 mg twice daily for seven days on 3 September 2026 for a chest infection. He is allergic to penicillin, with a rash to amoxicillin. When I telephoned today, the duty doctor confirmed clarithromycin and asked for this earlier INR, and I supplied it. Clarithromycin markedly potentiates warfarin, and the INR typically rises within a few days, so the bleeding risk over the course is significant.",
      "He takes warfarin 4 mg daily for atrial fibrillation, target INR 2.0 to 3.0. His last INR was 2.6 on 14 August 2026, stable for six months. His eGFR was 58 in May 2026. Today he had no bruising or bleeding, a temperature of 37.8 degrees and a productive cough.",
      "Clarithromycin also interacts with atorvastatin 40 mg, so I would suggest withholding it for the seven-day course. He will report any bleeding, dark stools or unusual bruising."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Pharmacist",
      "Riverside Pharmacy"
    ],
    "bodyWords": 186,
    "commentary": {
      "opening": "Both requests, a dose review and an earlier INR, are stated with their reason in the first sentence, so the GP knows exactly what to arrange.",
      "selection": "The antibiotic, the duty doctor's confirmation and the supply, the interaction and its timing, the penicillin allergy, the INR history, renal function, today's absence of bleeding and the statin interaction are kept. Gout, hernia repair, hearing aids, bowls and shop enquiries are left out.",
      "organisation": "Request, then the new prescription and the interaction, then anticoagulation details and today's findings, then the second interaction and safety-netting.",
      "tone": "Professional and direct, conveying clinical significance without criticising the out-of-hours prescriber."
    },
    "notesUsed": [
      "clarithromycin 500 mg twice daily, seven days, 3 September 2026, out-of-hours, chest infection",
      "penicillin allergy, rash with amoxicillin",
      "duty doctor telephoned, confirmed clarithromycin, asked for INR within three to five days; supplied today",
      "markedly potentiates warfarin; INR rise within a few days; bleeding risk",
      "warfarin 4 mg daily, atrial fibrillation, target 2.0 to 3.0",
      "INR 2.6 on 14 August 2026; stable six months",
      "eGFR 58 in May 2026",
      "no bruising or bleeding; temperature 37.8; productive cough",
      "withhold atorvastatin for the seven-day course",
      "will report bleeding, dark stools, unusual bruising",
      "prefers a morning appointment"
    ],
    "notesLeftOut": [
      "bisoprolol and omeprazole — no interaction with clarithromycin of concern here",
      "tablet strengths making up the warfarin dose, pill organiser — routine detail",
      "INR range 2.2 to 2.9, clinic days, record book — stable control already stated",
      "blood pressure, pulse, sputum colour — not needed for the request",
      "hernia, cataract, gout, appendix, flu vaccine, previous chest infection — not relevant",
      "daughter, neighbour, bowls, garden, alcohol — social detail",
      "cough medicine, pneumococcal vaccine, delivery, opening hours, hearing aids, recycling — pharmacy matters",
      "year of the amoxicillin rash (2005) — the allergy and reaction are stated",
      "call time 9.30 am, first dose at lunchtime, not told of the interaction, keen to start — detail behind the supply decision"
    ],
    "safety": [
      {
        "point": "Clarithromycin potentiates warfarin; INR rise within a few days; bleeding risk",
        "where": "paragraph 2"
      },
      {
        "point": "INR within three to five days and warfarin dose review needed",
        "where": "paragraph 1"
      },
      {
        "point": "Allergy: penicillin (rash with amoxicillin)",
        "where": "paragraph 2"
      },
      {
        "point": "Withhold atorvastatin during clarithromycin course",
        "where": "paragraph 4"
      },
      {
        "point": "Patient to report bleeding, dark stools or unusual bruising",
        "where": "paragraph 4"
      },
      {
        "point": "Mild renal impairment, eGFR 58",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-physiotherapy-referral-to-the-neurologist-new-signs-found-during-treatment": {
    "header": [
      "Dr Cassandra Ibeh-Waterstone",
      "Consultant Neurologist",
      "Fernhurst Hospital",
      "6 May 2025"
    ],
    "salutation": "Dear Dr Ibeh-Waterstone,",
    "re": "Re: Mr Aurelio Bassingthwaighte-Nkomo, aged 61, progressive painless weakness of the right hand",
    "body": [
      "I am writing to request urgent neurological assessment of Mr Bassingthwaighte-Nkomo, whom I have treated since 11 March 2025. He was referred with presumed cervical radiculopathy, which his findings do not support, and I stopped physiotherapy today to avoid delay.",
      "He has six months of painless, progressive right hand weakness; he cannot turn a key or fasten buttons. Over eight weeks, right grip fell from 18 kg to 12 kg and left grip from 34 kg to 31 kg. Power in the right first dorsal interosseous and abductor pollicis brevis fell from 3 to 2 out of 5, and the left first dorsal interosseous is now 4+.",
      "Today I observed right first dorsal interosseous and thenar wasting, and fasciculations in the right deltoid and both forearms. Reflexes are brisk throughout, and the right plantar response is equivocal. Sensation is normal, and neck movement is full.",
      "His wife reports recent coughing on thin drinks and his voice weakening by evening. He has been advised to report choking or chest infection at once, and his general practitioner will arrange a swallow assessment.",
      "He takes amlodipine 5 mg daily and has no known allergies. Comparison photographs are enclosed."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Fernhurst Musculoskeletal Physiotherapy"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The letter states the urgent request at once and explains in the same paragraph why the original reason for referral no longer fits, so the neurologist understands immediately that this is not a routine musculoskeletal case.",
      "selection": "The objective, repeated measurements, the wasting, fasciculations, brisk reflexes and normal sensation are kept because together they make the case for urgency. Lifestyle, occupation, the full list of unchanged muscle groups and the conversation about diagnosis are left out or reduced, as the neurologist will take the history herself.",
      "organisation": "Request and context, then the measured decline, then today's examination, then the swallowing risk and actions taken, then medication and enclosures.",
      "tone": "Precise and factual between professionals; the writer reports findings without naming a diagnosis, which is outside a physiotherapist's role."
    },
    "notesUsed": [
      "referred for likely cervical radiculopathy",
      "five sessions from 11 March; treatment stopped today",
      "weakness not pain; cannot turn a key or fasten buttons; progressive over six months",
      "grip right 18 to 12 kg, left 34 to 31 kg, same equipment, eight weeks",
      "first dorsal interosseous and abductor pollicis brevis 3 to 2; left first dorsal interosseous 4+",
      "wasting of first dorsal interosseous and thenar eminence; fasciculations right deltoid and both forearms",
      "reflexes brisk; right plantar equivocal; sensation normal; neck movement full",
      "coughing on thin drinks, voice goes by evening",
      "advised to report choking or chest infection; GP informed and asked for swallow assessment",
      "amlodipine 5 mg daily; no known allergies",
      "photographs enclosed"
    ],
    "notesLeftOut": [
      "pain score 2 out of 10 and absence of pins and needles - summarised as painless with normal sensation",
      "finger extension and unchanged elbow, shoulder and lower limb power - detail the neurologist will re-examine",
      "no Horner sign, no neck stiffness - negative findings not central to the request",
      "medical, family and social history (carpenter, non-smoker) - she can take this at assessment",
      "telephone call to the service - already known to the reader",
      "what he and his wife were told - not needed for the clinical decision"
    ],
    "safety": [
      {
        "point": "Progressive weakness with wasting, fasciculations and brisk reflexes needing urgent specialist assessment",
        "where": "paragraphs 1, 2, 3"
      },
      {
        "point": "Coughing on thin drinks: possible swallowing difficulty; report choking or chest infection at once",
        "where": "paragraph 4"
      },
      {
        "point": "GP to arrange speech and language therapy swallow assessment",
        "where": "paragraph 4"
      },
      {
        "point": "Physiotherapy stopped to avoid delay",
        "where": "paragraph 1"
      },
      {
        "point": "Medication and no known allergies",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-referral-to-cardiac-rehabilitation": {
    "header": [
      "Ms Genevieve Okoro-Lamplugh",
      "Cardiac Rehabilitation Coordinator",
      "Southwold Hospital",
      "6 September 2025"
    ],
    "salutation": "Dear Ms Okoro-Lamplugh,",
    "re": "Re: Mr Nathaniel Ferrers-Adeyemi, aged 63, cardiac rehabilitation after myocardial infarction",
    "body": [
      "I am writing to refer Mr Ferrers-Adeyemi for cardiac rehabilitation and to ask you to consider a home-based or telephone-supported programme, or an evening group, as he is unlikely to attend a conventional weekday class.",
      "He was admitted on 2 September 2025 with an anterior ST-elevation myocardial infarction and received two stents to the left anterior descending artery. His ejection fraction is 42%, with no arrhythmia or heart failure. On the ward he walked 150 metres and climbed twelve stairs without symptoms. I would place him at low to moderate risk, subject to your confirmation.",
      "He was previously sedentary, has a body mass index of 31.7, and smoked twenty a day until admission; he is using nicotine replacement and intends to stop. He stopped a statin in 2016 because of aches without telling anyone, so tolerance of atorvastatin 80 mg should not be assumed. He also takes aspirin, ticagrelor, bisoprolol, ramipril and glyceryl trinitrate spray, and has no known allergies.",
      "Attendance is the main concern. He is a self-employed plasterer without sick pay, lives 14 miles away with no direct bus, cares for his wife in the mornings, and believes classes are not for him."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist, Cardiac Ward",
      "Southwold Hospital"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The referral and the specific request for a flexible format come first, because the writer's main concern is that a standard programme will fail this patient.",
      "selection": "The event, ejection fraction, exercise tolerance, risk level, smoking, the past statin intolerance and the barriers are kept. Ward-day details, blood pressure readings, the education topics and the family history are left out because the coordinator will reassess and does not need them to choose a programme.",
      "organisation": "Request, then the cardiac event and exercise findings, then risk factors and medication, then the barriers that justify the request.",
      "tone": "Collegial and persuasive, advocating for the patient while leaving the risk judgement to the specialist."
    },
    "notesUsed": [
      "admitted 2 September with anterior STEMI; two drug-eluting stents to LAD",
      "ejection fraction 42%; no arrhythmia; no heart failure",
      "walked 150 metres and twelve stairs, no symptoms",
      "low to moderate risk, for you to confirm",
      "sedentary; BMI 31.7; twenty a day, nicotine replacement, intends to stop",
      "stopped a statin in 2016 without telling anybody; atorvastatin 80 mg",
      "aspirin, ticagrelor, bisoprolol, ramipril, GTN spray; no known allergies",
      "self-employed plasterer, no sick pay; 14 miles, no direct bus; cares for wife in mornings; classes not for people like me",
      "home-based, telephone-supported or evening group"
    ],
    "notesLeftOut": [
      "drug doses other than atorvastatin - on the discharge summary; atorvastatin dose kept because of the intolerance history",
      "day-by-day ward progress, heart rates and blood pressures - summarised as the best tolerance achieved",
      "echocardiogram detail (hypokinesia, valves, thrombus), femoral site - not needed to plan rehabilitation",
      "driving, sexual activity and lifting advice - already given on the ward",
      "family history, hypertension and HbA1c 41 - risk factors the programme will review",
      "his beliefs about stents and the wife's question about stairs - can be addressed in education sessions",
      "Borg scores and return to work deferred to the coordinator - she will assess exertion and work herself"
    ],
    "safety": [
      {
        "point": "Previous unreported statin stopping because of aches; atorvastatin tolerance not to be assumed",
        "where": "paragraph 3"
      },
      {
        "point": "Dual antiplatelet therapy and GTN spray on discharge; no known allergies",
        "where": "paragraph 3"
      },
      {
        "point": "Exercise risk provisionally low to moderate, for the coordinator to confirm",
        "where": "paragraph 2"
      },
      {
        "point": "High risk of non-attendance at a conventional class",
        "where": "paragraphs 1, 4"
      }
    ]
  },
  "wri-physiotherapy-referral-to-the-community-team-a-woman-with-multiple-sclerosis": {
    "header": [
      "Ms Harriet Nwosu-Delacroix",
      "Team Lead, Community Neurological Rehabilitation Service",
      "Ardenmoor",
      "11 June 2025"
    ],
    "salutation": "Dear Ms Nwosu-Delacroix,",
    "re": "Re: Mrs Delphine Okonjo-Rathbone, aged 47, relapsing-remitting multiple sclerosis",
    "body": [
      "I am writing to refer Mrs Okonjo-Rathbone for community neurological rehabilitation, including a late-afternoon home assessment, occupational therapy, orthotic assessment for the right ankle and fatigue management.",
      "She has relapsing-remitting multiple sclerosis, last relapsing in January 2025. Despite six sessions, her walking has declined, and she has fallen three times since 2 April, without injury, all later in the day.",
      "Fatigue and heat worsen her function markedly. On 21 May her ten-metre walk took 15 seconds in the morning but 21 seconds in the afternoon, with a clear right foot drop. A trial ankle support improved her fatigued time to 17 seconds, and she would like one.",
      "Her bathroom is upstairs, and her fourteen stairs have a rail on one side only; she has begun washing at the kitchen sink in the evenings. She has never seen an occupational therapist.",
      "She has been missing the lunchtime dose of baclofen 10 mg three times daily because it makes her legs feel heavy, which may need review. She has no known allergies. Neurology, who have a copy of this letter, will review her on 3 September. She can be seen any afternoon except between three and four."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Ardenmoor Neurology Outpatient Physiotherapy"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "All four parts of the request are named in the first sentence, including the unusual timing, because the late-afternoon visit is the key to capturing her problem.",
      "selection": "The falls, the morning-to-afternoon difference, the ankle support trial, the stairs and washing, and the missed baclofen doses are kept. Full examination findings, balance times, the tremor, the children and the stick height are left out because the community team will reassess and they do not change the request.",
      "organisation": "Request, then background and decline, then the fatigue pattern, then the home, then medication, follow-up and practical visit times.",
      "tone": "Clear and collegial, explaining why outpatient care has reached its limit without overstating the decline."
    },
    "notesUsed": [
      "relapsing-remitting MS; last relapse January 2025",
      "six sessions; small decline",
      "three falls since 2 April, no injury, all second half of the day",
      "21 May: 15 seconds morning, 21 seconds afternoon, right foot drop; heat worse",
      "ankle support trial 21 to 17 seconds; she wants one",
      "bathroom upstairs; fourteen stairs, rail one side; washing at kitchen sink",
      "no occupational therapy assessment ever",
      "baclofen 10 mg three times daily; missing lunchtime dose; legs heavy",
      "no known allergies",
      "neurology 3 September, copied",
      "any afternoon, not between three and four"
    ],
    "notesLeftOut": [
      "walking distance and timed up-and-go figures - the decline is summarised",
      "tone, clonus, proprioception, hip flexion and balance findings - the team will reassess",
      "no signs of relapse - already flagged to neurology",
      "upper limb tremor - unchanged and not part of the request",
      "stick height corrected - already dealt with",
      "children, part-time work from home - not needed beyond the visit time",
      "amitriptyline, vitamin D and disease-modifying treatment - not changed by this referral",
      "dorsiflexion power falling from 3 to 2 out of 5 after walking - the timed walks already show the fatigue effect"
    ],
    "safety": [
      {
        "point": "Three falls, all later in the day; right foot drop when fatigued",
        "where": "paragraphs 2, 3"
      },
      {
        "point": "Stairs with a single rail; avoiding the upstairs bathroom",
        "where": "paragraph 4"
      },
      {
        "point": "Missed lunchtime baclofen doses needing review",
        "where": "paragraph 5"
      },
      {
        "point": "Neurology follow-up booked and copied",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-referral-to-the-paediatric-physiotherapy-service": {
    "header": [
      "Ms Rosalind Chukwuemeka-Barr",
      "Team Lead, Paediatric Physiotherapy",
      "Thornhill Child Development Centre",
      "18 September 2025"
    ],
    "salutation": "Dear Ms Chukwuemeka-Barr,",
    "re": "Re: Master Idris Vandersteen-Achike, aged 14 months, delayed motor development",
    "body": [
      "I am writing to request a paediatric physiotherapy assessment for Idris, aged 14 months, who is not pulling to stand or cruising. His mother, concerned for three months, brought him to our adult clinic today.",
      "Since 10 months he has commando-crawled with both legs trailing and little active hip or knee movement. He sits well but cannot get into sitting from lying. His communication and hand function appear age-appropriate.",
      "In supported standing he stood on his toes. Tone was increased in both calves, more on the right, and ankle dorsiflexion was minus 5 degrees right and 0 degrees left. Ankle clonus was two to three beats on the right and one on the left, with brisk knee reflexes. Hips were normal.",
      "He was born at 34 weeks, weighing 2.1 kg, and spent five days in a neonatal unit; his scan was reportedly normal. He takes no medication and has no allergies.",
      "I have not treated him or offered a diagnosis, and have asked his general practitioner for a parallel paediatric medical referral. His mother has raised this three times since June and was reassured each time; her account was accurate. She is available any weekday."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist, Adult Service",
      "Thornhill Community Physiotherapy"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The request and the key concern (no pulling to stand at 14 months) open the letter, with a brief explanation of why an adult service is writing.",
      "selection": "The movement pattern, the tone, clonus and reflex findings, the preterm birth and the parallel medical referral are kept because they shape the urgency. Early milestones, nursery comments, siblings and the detailed neonatal account are reduced or left out as the team will take a full history.",
      "organisation": "Request and context, then the motor pattern, then examination, then birth history, then actions taken and the mother's account.",
      "tone": "Objective and careful; the writer stays within the scope of an adult physiotherapist while supporting the mother's concern."
    },
    "notesUsed": [
      "14 months; not pulling to stand or cruising",
      "seen at adult walk-in clinic; worried for three months",
      "commando crawling from 10 months, legs trailing, little active hip or knee movement",
      "sits well; cannot get into sitting from lying",
      "communication and hand function age-appropriate",
      "toe standing; increased calf tone, right more; dorsiflexion minus 5 right, 0 left",
      "clonus two to three beats right, one left; brisk knee reflexes; hips normal",
      "34 weeks, 2.1 kg, five days neonatal unit, scan normal",
      "no medication, no allergies",
      "not treated, no diagnosis offered; GP asked for paediatric medical referral",
      "raised three times since June; account accurate",
      "available any weekday"
    ],
    "notesLeftOut": [
      "head control, sitting age, rolling, words and fine motor detail - summarised as age-appropriate",
      "nursery comments - explain the delay but do not affect the assessment",
      "emergency caesarean, breathing support and tube feeding - the team will take the full neonatal history",
      "siblings' walking ages, no family history, immunisations - routine history",
      "mother's question about making a fuss - personal reassurance already given",
      "has transport - not needed for booking"
    ],
    "safety": [
      {
        "point": "Increased calf tone with clonus and brisk reflexes in a preterm infant: needs specialist assessment",
        "where": "paragraph 3"
      },
      {
        "point": "Parallel paediatric medical referral requested from the GP",
        "where": "paragraph 5"
      },
      {
        "point": "No treatment given; no medication or allergies",
        "where": "paragraphs 4, 5"
      }
    ]
  },
  "wri-physiotherapy-letter-to-the-general-practitioner-hypermobility-and-recurrent-injury": {
    "header": [
      "Dr Portia Nkemefuna-Aldridge",
      "General Practitioner",
      "The Wellhouse Practice",
      "3 October 2025"
    ],
    "salutation": "Dear Dr Nkemefuna-Aldridge,",
    "re": "Re: Miss Beatrix Oyelowo-Sandringham, aged 22, recurrent joint injuries and generalised hypermobility",
    "body": [
      "I am writing to request a medical review of Miss Oyelowo-Sandringham's presentation, as I believe her four physiotherapy referrals since 2023 reflect one condition, and to ask you to consider rheumatology referral for a hypermobility spectrum disorder or hypermobile Ehlers-Danlos syndrome.",
      "Her referrals were for two right shoulder subluxations, a third left ankle sprain and bilateral knee pain. Today her Beighton score was 9 out of 9, with multidirectional shoulder laxity.",
      "On direct questioning, she reported constant fatigue, easy bruising, stretchy skin, atrophic scars, and longstanding bloating, alternating bowel habit and reflux, which have never been investigated. She also has daily dizziness on standing and fainted in July. Her blood pressure was 118/72 lying and 96/60 standing, with heart rate rising from 74 to 108, so an autonomic assessment may be warranted.",
      "Her mother is hypermobile with two shoulder dislocations, but there is no family history of aortic disease or sudden death.",
      "She takes sertraline 50 mg daily, the combined oral contraceptive, and paracetamol and ibuprofen most days; please review the ibuprofen, given sertraline and her reflux. She has no known allergies. I have started a proprioception programme and advised against end-range yoga. She has read this letter."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Wellhouse Musculoskeletal Physiotherapy"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The letter opens with its central argument, that four episodes are one condition, and the main requests, so the GP reads the rest as evidence for them.",
      "selection": "The Beighton score, the symptoms beyond the joints, the postural readings, the relevant family history and the near-daily ibuprofen with sertraline are kept. Individual joint test results, referral dates and much of her personal account are left out because they would make the letter long without changing the requests.",
      "organisation": "Requests, then joint history and findings, then wider symptoms and postural readings, then family history, then medication with the ibuprofen review, treatment and consent.",
      "tone": "Measured and professional; postural readings are given as observations, and diagnoses are suggested for consideration rather than stated."
    },
    "notesUsed": [
      "four referrals 2023 to 2025; one condition rather than four",
      "rheumatology referral for hypermobility spectrum disorder or hEDS",
      "shoulder subluxations twice, third ankle sprain, bilateral knee pain",
      "Beighton 9 out of 9; multidirectional shoulder laxity",
      "fatigue, bruising, stretchy skin, atrophic scars; GI symptoms never investigated",
      "dizziness on standing; faint in July",
      "BP 118/72 lying, 96/60 standing; HR 74 to 108; autonomic assessment",
      "mother double-jointed with two dislocations; no aortic disease or sudden death",
      "sertraline 50 mg, combined oral contraceptive, paracetamol and ibuprofen most days; no known allergies",
      "review of near-daily ibuprofen given sertraline and reflux",
      "proprioception programme; avoid end-range yoga",
      "has read the letter"
    ],
    "notesLeftOut": [
      "exact referral months and session counts - summarised",
      "individual Beighton components, knee hyperextension angle, proprioception times - detail behind the score",
      "anxiety, poor sleep, clumsiness, stopped university module - context the GP can explore at review",
      "mother's bowel symptoms and fainting, maternal aunt - supportive but not essential",
      "pacing advice and explanation given - part of physiotherapy management",
      "non-smoker, minimal alcohol - not relevant to the requests",
      "poor end-range control and being called attention-seeking - relevant to management and rapport, but cut for length; the GP can explore them at review"
    ],
    "safety": [
      {
        "point": "Fall in blood pressure and rise in heart rate on standing with a faint in July: autonomic assessment to consider",
        "where": "paragraph 3"
      },
      {
        "point": "Uninvestigated gastrointestinal symptoms",
        "where": "paragraph 3"
      },
      {
        "point": "No family history of aortic disease or sudden death",
        "where": "paragraph 4"
      },
      {
        "point": "Near-daily ibuprofen with sertraline and reflux: bleeding risk, review requested",
        "where": "paragraph 5"
      },
      {
        "point": "Advised against end-range stretching such as yoga",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-discharge-to-the-community-stroke-team-upper-limb-rehabilitation": {
    "header": [
      "Ms Adaeze Fairweather-Onyekwere",
      "Community Stroke Rehabilitation Team",
      "Barrowfield",
      "25 September 2025"
    ],
    "salutation": "Dear Ms Fairweather-Onyekwere,",
    "re": "Re: Mr Everard Nwachukwu-Trelawney, aged 64, left upper limb rehabilitation after stroke",
    "body": [
      "I am writing to request community upper limb rehabilitation for Mr Nwachukwu-Trelawney, who will be discharged home on 26 September 2025, and an occupational therapy assessment regarding his return to work as an electrician.",
      "He had a right middle cerebral artery infarct on 4 August, treated with thrombectomy, leaving a left hemiparesis and left visual inattention. He now walks independently, although he is less steady on uneven ground and in the dark.",
      "His non-dominant left arm is still improving: grip has risen from 4 kg to 9 kg over four weeks, and active wrist extension appeared only this month. Finger movement and grip release are slow, and reduced hand sensation troubles him most. I recommend task-specific practice at home, with consideration of electrical stimulation to the wrist extensors.",
      "A small shoulder subluxation remains, currently pain free. Please ensure nobody pulls on his left arm, it is supported when sitting, and overhead pulleys are avoided. His inattention worsens when tired, which affects road crossing, and he is not driving.",
      "His wife supervises his daily 30-minute programme. His mood was low earlier and should be re-checked. He takes clopidogrel 75 mg daily and has no known allergies."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist, Stroke Unit",
      "Barrowfield Hospital"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The opening gives the discharge date and both requests, so the team knows immediately what continuing care is needed and when it starts.",
      "selection": "The measured improvement in the hand, the shoulder handling precautions, the inattention and his mood are kept. Walking test figures, falls before September, the full drug list, his personal goals and most of the detailed hand measurements are left out because the team will reassess and they do not alter the plan.",
      "organisation": "Request, then the stroke and mobility, then the upper limb progress and plan, then precautions, then support, mood, medication and goals.",
      "tone": "Collegial and encouraging, making the case that recovery has not plateaued while giving clear instructions to protect the shoulder."
    },
    "notesUsed": [
      "discharge 26 September; community upper limb rehabilitation and OT for return to work",
      "electrician, return to work",
      "right MCA infarct 4 August, thrombectomy; left hemiparesis and visual inattention",
      "walking independently; less steady on uneven ground and in the dark",
      "non-dominant side; grip 4 kg to 9 kg over four weeks; wrist extension appeared in September",
      "slow finger movement and release; reduced sensation bothers him most",
      "task-specific practice; consider electrical stimulation to wrist extensors",
      "subluxation reduced, no pain; no pulling, support arm, no overhead pulleys",
      "inattention worse when tired; road crossing; not driving",
      "wife supervises; 30-minute daily programme",
      "low mood in week three, re-check",
      "clopidogrel 75 mg; no known allergies"
    ],
    "notesLeftOut": [
      "ten-metre walk, six-minute walk, stairs and early falls - mobility now largely resolved",
      "shoulder and elbow range, nine-hole peg, tone grading - detail the team will measure",
      "constraint-based therapy threshold - can follow once wrist extension improves",
      "atorvastatin, ramipril, amlodipine, metformin, diabetes, ex-smoker - on the discharge summary",
      "home access (two steps with rail) - not a barrier",
      "screwdriver goal and what he has been told about recovery - partly reflected in the OT request",
      "his own goals (buttons, carrying a plate) - the community team will set goals with him at assessment"
    ],
    "safety": [
      {
        "point": "Shoulder subluxation: no pulling on the arm, support when sitting, no overhead pulleys",
        "where": "paragraph 4"
      },
      {
        "point": "Visual inattention worse when tired; road safety; not driving",
        "where": "paragraph 4"
      },
      {
        "point": "Low mood earlier in admission, to be re-checked",
        "where": "paragraph 5"
      },
      {
        "point": "Antiplatelet medication and no known allergies",
        "where": "paragraph 5"
      },
      {
        "point": "Reduced balance on uneven ground and in the dark",
        "where": "paragraph 2"
      }
    ]
  },
  "wri-physiotherapy-urgent-referral-new-neurological-signs-in-a-patient-with-back-pain": {
    "header": [
      "Dr Marianne Oduya-Ferrers",
      "General Practitioner",
      "The Kingsbridge Practice",
      "24 October 2025"
    ],
    "salutation": "Dear Dr Oduya-Ferrers,",
    "re": "Re: Mr Gideon Achebe-Wallis, aged 44, progressive left foot drop",
    "body": [
      "I am writing to request urgent assessment today of Mr Achebe-Wallis, and consideration of urgent imaging, because of progressive left foot weakness. Your duty doctor, whom I telephoned at 11:20, expects him at 15:00.",
      "He has been treated since 3 October 2025 for back and left leg pain, with normal neurology then. Over three days he has developed constant numbness over the top of the foot and big toe, and catches his toe on stairs. His pain has reduced meanwhile, which is not improvement.",
      "Today he had a left foot drop. Left ankle dorsiflexion was 3 out of 5 and extensor hallucis longus 2 out of 5, both previously 5 out of 5. Sensation was reduced over the dorsum of the foot, and reflexes were equal.",
      "He has no bladder, bowel or saddle symptoms, so cauda equina syndrome is not suggested. Perianal sensation was not tested; please examine it. If confirmed, please consider same-day referral to the on-call spinal team for emergency MRI.",
      "I have stopped his exercises and advised him in writing to attend emergency services if he develops urinary difficulty, incontinence, saddle numbness, or symptoms in the other leg. He should not drive or work until reviewed."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Kingsbridge Musculoskeletal Physiotherapy Service"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The urgent request and the arranged appointment time come first, because the doctor reading this needs to act today.",
      "selection": "The normal baseline, the three-day progression, the measured power loss, the sensory change, the absent cauda equina features, the untested perianal sensation and the safety-netting are kept. Detailed straight leg raise readings, work history and the October progress note are left out because they do not change the urgent decision.",
      "organisation": "Urgent request and timing, then history and change, then examination, then the cauda equina screen with the perianal examination and onward request, then actions and advice.",
      "tone": "Direct and clear, stating the concern plainly without exaggeration and documenting the negative red flags."
    },
    "notesUsed": [
      "duty doctor at 11:20; expected at 15:00",
      "treated since 3 October; normal neurology then",
      "three days: constant numbness top of foot and big toe; catching toe on stairs",
      "pain reduced; not improvement",
      "foot drop; dorsiflexion 3 out of 5, EHL 2 out of 5, from 5 out of 5",
      "reduced sensation over the dorsum of the foot; reflexes equal",
      "no bladder, bowel or saddle symptoms",
      "perianal sensation not tested; examination requested today",
      "same-day referral to on-call spinal team for emergency MRI if confirmed",
      "exercises stopped; written emergency advice",
      "not to drive or work until reviewed"
    ],
    "notesLeftOut": [
      "straight leg raise angles at each visit - not needed to judge the motor deficit",
      "eversion and plantarflexion power, right leg normal - summarised by the key muscles",
      "original red flag screen details (weight loss, cancer, steroids) - normal neurology at baseline covers the comparison",
      "warehouse work and modified duties - covered by advice not to work",
      "wife collecting him and his anxiety about recovery - not needed for the medical decision"
    ],
    "safety": [
      {
        "point": "Progressive motor deficit over three days despite reducing pain",
        "where": "paragraphs 1, 2, 3"
      },
      {
        "point": "Perianal sensation not tested; GP asked to examine it today",
        "where": "paragraph 4"
      },
      {
        "point": "Same-day spinal referral for emergency MRI if deficit confirmed",
        "where": "paragraph 4"
      },
      {
        "point": "Cauda equina symptoms absent today",
        "where": "paragraph 4"
      },
      {
        "point": "Written advice to attend emergency services for bladder, bowel, saddle or other-leg symptoms",
        "where": "paragraph 5"
      },
      {
        "point": "Not to drive or work until reviewed",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-discharge-to-the-general-practitioner-after-knee-replacement": {
    "header": [
      "Dr Selina Marchetti-Nwoye",
      "General Practitioner",
      "The Broadfield Surgery",
      "20 May 2025"
    ],
    "salutation": "Dear Dr Marchetti-Nwoye,",
    "re": "Re: Mrs Henrietta Kaczmarek-Obi, aged 71, discharge after right total knee replacement",
    "body": [
      "I am writing to inform you that Mrs Kaczmarek-Obi has been discharged from physiotherapy following her right total knee replacement on 4 February 2025, and to ask you to review her left knee, which is now symptomatic.",
      "After 12 sessions, her knee range is 0 to 112 degrees and quadriceps power is 5 out of 5. She walks 800 metres without a stick and manages stairs normally. Her pain is minimal on prolonged walking and nil at rest. She is independent and has resumed driving and swimming. There were no wound problems, infection or thromboembolic events.",
      "Her left knee osteoarthritis now limits her, with pain of 4 out of 10 on walking, and she has asked whether it will need replacing.",
      "I would be grateful if you would encourage her to continue her strengthening programme beyond three months, as strength improves for at least twelve months.",
      "A numb area beside the scar is unchanged since February. I have explained the likely cause, but she would value her surgeon's view at her orthopaedic follow-up on 4 August. She stopped her codeine in March and has no known allergies. She may self-refer if she deteriorates."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Broadfield Outpatient Physiotherapy"
    ],
    "bodyWords": 193,
    "commentary": {
      "opening": "The letter opens with the discharge and the one action requested of the GP, the left knee review, so the reader knows the purpose immediately.",
      "selection": "Final outcome measures, the absence of complications, the left knee symptoms, the exercise plan, the numbness and the stopped codeine are kept. The starting measurements, month-by-month progress and her reflections are left out because the GP needs the outcome rather than the journey.",
      "organisation": "Discharge and request, then outcome, then the left knee, then the ongoing programme, then the remaining issue, medication and self-referral.",
      "tone": "Positive and concise, as suits a successful discharge, with clear requests."
    },
    "notesUsed": [
      "right TKR 4 February; discharged 20 May; 12 sessions",
      "range 0 to 112; quadriceps 5 out of 5; 800 metres without a stick; stairs in both directions",
      "pain minimal on prolonged walking, nil at rest",
      "independent; driving; swimming",
      "no wound problem, infection or thromboembolic event",
      "left knee OA, pain 4 out of 10, asking about replacement",
      "continue strengthening beyond three months; improvement for twelve months",
      "numbness beside scar since February; raise at follow-up 4 August",
      "stopped codeine in March; no known allergies",
      "self-refer if deteriorates"
    ],
    "notesLeftOut": [
      "starting range, swelling and walking on 18 February - superseded by discharge measures",
      "monthly progress figures - only the outcome is needed",
      "size of numb area and full explanation given - already explained to her",
      "diabetes, HbA1c 51, hypertension, BMI - known to the practice",
      "metformin, ramipril, atorvastatin, paracetamol - unchanged",
      "getting on and off the floor, her reflections on the operation - not needed for the GP's actions",
      "details of the home programme and no falls - the programme sheet is with her; not needed for the GP's actions"
    ],
    "safety": [
      {
        "point": "Codeine stopped by patient in March",
        "where": "paragraph 5"
      },
      {
        "point": "No thromboembolic event, infection or wound problem",
        "where": "paragraph 2"
      },
      {
        "point": "Left knee symptomatic, needs review",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Orthopaedic follow-up on 4 August; self-referral route",
        "where": "paragraph 5"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-referral-to-rheumatology-suspected-inflammatory-back-pain": {
    "header": [
      "Dr Yolanda Prescott-Ibeh",
      "Consultant Rheumatologist",
      "Fairholme Hospital",
      "29 April 2025"
    ],
    "salutation": "Dear Dr Prescott-Ibeh,",
    "re": "Re: Mr Tobias Nwankwo-Hargreave, aged 26, suspected inflammatory back pain",
    "body": [
      "I am writing to request your assessment of Mr Nwankwo-Hargreave for suspected axial spondyloarthritis, including your usual investigations. He is 26 and has had back pain for fourteen months without a diagnosis.",
      "His general practitioner referred him with mechanical low back pain. However, the onset was gradual, without injury, and the pain is continuous, worse with rest and better with movement. He has two to three hours of morning stiffness, night waking at three or four, and alternating buttock pain. Anti-inflammatory tablets help substantially, but the pain returns within a day of stopping them.",
      "On 29 April, his modified Schober test and chest expansion were both reduced at 3.5 cm. Sacroiliac provocation tests were positive bilaterally, and neurological examination was normal. He reports morning heel pain, but I found no enthesitis or peripheral joint swelling.",
      "Importantly, he had iritis in 2023, and his father has ankylosing spondylitis. He has no bowel symptoms or psoriasis.",
      "I have stopped core stability work, which would only delay this referral, but he continues a mobility programme. He is a delivery driver and has taken eleven days off in six months. He can attend at any time and wishes to be seen soon."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Fairholme Musculoskeletal Physiotherapy"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The request and the suspected condition come first, followed by the fact that matters most to a rheumatologist: a young man with fourteen months of symptoms and no diagnosis.",
      "selection": "The inflammatory features, the key examination findings, the iritis and the family history are kept because they support the referral. Individual side flexion measurements, straight leg raise detail and the full list of negative questions are left out as they add little to the decision.",
      "organisation": "Request, then the history that argues against a mechanical cause, then examination, then relevant background, then current management, work impact and availability.",
      "tone": "Professional and confident, presenting the physiotherapist's reasoning while leaving the diagnosis to the consultant."
    },
    "notesUsed": [
      "age 26, fourteen months of symptoms, no diagnosis",
      "referred by GP as mechanical low back pain",
      "gradual onset, no injury, continuous",
      "worse with rest, better with movement",
      "morning stiffness two to three hours",
      "night pain waking at three or four",
      "alternating buttock pain",
      "substantial response to anti-inflammatories, returns within a day",
      "modified Schober 3.5 cm reduced; chest expansion 3.5 cm reduced",
      "sacroiliac provocation positive bilaterally",
      "normal neurological examination",
      "morning heel pain; no enthesitis, no peripheral joint swelling",
      "iritis 2023",
      "father has ankylosing spondylitis",
      "no psoriasis, no bowel symptoms",
      "core stability stopped; mobility programme continues",
      "delivery driver, eleven days off in six months",
      "can attend any time, wants to be seen soon"
    ],
    "notesLeftOut": [
      "side flexion finger-to-floor measurements, occiput to wall, straight leg raise — supportive or normal detail the rheumatologist will re-examine",
      "paternal aunt with psoriasis — less relevant than the father's diagnosis; kept the letter within length",
      "no urethral symptoms, no recent infection — negative findings not needed for the request",
      "what he has been told — he understands the diagnosis is made by the rheumatology service",
      "worse with long sitting and driving — covered by work impact"
    ],
    "safety": [
      {
        "point": "Previous iritis (2023), relevant to the suspected diagnosis",
        "where": "paragraph 4"
      },
      {
        "point": "Neurological examination normal (no neurological red flags)",
        "where": "paragraph 3"
      },
      {
        "point": "Core stability stopped; mobility programme to continue",
        "where": "paragraph 5"
      },
      {
        "point": "Fourteen months undiagnosed; to be seen as soon as possible",
        "where": "paragraphs 1, 5"
      }
    ]
  },
  "wri-physiotherapy-letter-to-occupational-health-a-phased-return-to-work": {
    "header": [
      "Ms Anneke Villiers-Oduya",
      "Occupational Health Adviser",
      "Marchmont Logistics",
      "13 May 2025"
    ],
    "salutation": "Dear Ms Villiers-Oduya,",
    "re": "Re: Mr Solomon Okereke-Blunt, aged 51, phased return to work",
    "body": [
      "With Mr Okereke-Blunt's written consent, I recommend a six-week phased return to work from 27 May. He has asked that his diagnosis and symptoms not reach his line manager.",
      "He can sit for 45 minutes, stand for 40 minutes and walk 2 kilometres. He can lift 15 kg repeatedly from waist height and 10 kg from the floor. He cannot yet lift above 15 kg, bend forward for over five minutes, or lift repeatedly from the floor at speed.",
      "I suggest four hours a day, four days a week, for weeks 1 and 2, on supervision, scanning and stock checking, with no lifting above 10 kg or from the floor. Weeks 3 and 4 would be six hours a day, four days a week, lifting up to 15 kg from waist height and occasionally 10 kg from the floor. Weeks 5 and 6 return him to full hours and duties, adding floor lifting last. Please review him after weeks 3 and 6.",
      "I also recommend a manual handling assessment of the cage-pulling task, a sit-stand option for scanning, and a named contact for increased symptoms that does not count as absence. He is motivated but anxious about appearing unreliable."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Marchmont Occupational Physiotherapy Service"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The letter opens with consent and the recommendation itself, then states the limit on disclosure at once, because the adviser must know what may be passed to the line manager.",
      "selection": "Only measured current capability, the remaining limitations, the phased plan and the workplace adjustments are included. The starting measurements, the diagnosis details and the content of the education sessions are left out, as the employer needs function, not history.",
      "organisation": "Request and consent, then what he can and cannot do, then the week-by-week plan, then adjustments and a note on his concerns.",
      "tone": "Formal and precise, as it may inform employment decisions, and careful to respect his confidentiality."
    },
    "notesUsed": [
      "written consent; diagnosis and symptoms not to line manager",
      "phased return over six weeks from 27 May",
      "sitting 45 minutes, standing 40 minutes, walking 2 km",
      "lifting 15 kg from waist repeatedly, 10 kg from floor",
      "cannot lift above 15 kg, sustained bending over five minutes, repeated floor lifting at speed",
      "weeks 1–2, 3–4, 5–6 plan",
      "review end of week 3 and week 6",
      "manual handling assessment of the cage-pulling task",
      "sit-stand position for scanning",
      "named person for increased symptoms",
      "motivated, anxious about being seen as unreliable"
    ],
    "notesLeftOut": [
      "diagnosis, mechanism and previous 2022 episode — he asked that diagnosis and symptoms not be disclosed; function is what the employer needs",
      "measurements on 4 March — superseded by current capability",
      "pain scores and sleep — symptom detail he asked not to be shared",
      "overhead reaching and trolley pushing results — within his plan and not limiting",
      "education about discomfort and bending — part of treatment, not needed for planning",
      "home programme, gym referral, walking group, self-referral — not needed by the employer",
      "absence since 22 January 2025 and driving 45 minutes — known to the employer or not needed for planning his duties"
    ],
    "safety": [
      {
        "point": "No lifting above 10 kg and no floor-level lifting in weeks 1 and 2",
        "where": "paragraph 3"
      },
      {
        "point": "Current limits: nothing above 15 kg, no sustained bending, no fast repeated floor lifting",
        "where": "paragraph 2"
      },
      {
        "point": "Review at the end of weeks 3 and 6",
        "where": "paragraph 3"
      },
      {
        "point": "Manual handling assessment of the cage-pulling task that caused the injury",
        "where": "paragraph 4"
      },
      {
        "point": "Confidentiality: diagnosis and symptoms not to the line manager",
        "where": "paragraph 1"
      }
    ]
  },
  "wri-physiotherapy-referral-to-the-community-respiratory-team": {
    "header": [
      "Ms Bethan Iwuchukwu-Sharpe",
      "Team Lead, Community Respiratory Service",
      "Ashbourne",
      "11 June 2025"
    ],
    "salutation": "Dear Ms Iwuchukwu-Sharpe,",
    "re": "Re: Mrs Philippa Onyeka-Grieve, aged 74, sputum clearance and pulmonary rehabilitation",
    "body": [
      "I am writing to refer Mrs Onyeka-Grieve, who has severe COPD and bronchiectasis, for community physiotherapy for sputum clearance, pulmonary rehabilitation and completion of her self-management plan. She will be discharged on 12 June 2025 after her third admission in eight months.",
      "This admission, her sputum grew Pseudomonas aeruginosa, treated with a two-week course, and carbocisteine 750 mg three times daily was started. Never previously taught a clearance technique, she has learnt the active cycle of breathing technique but needs her written card, and uses a positive expiratory pressure device twice daily. Two to three visits would consolidate these.",
      "Her six-minute walk test on 11 June was 142 metres with two stops, with saturations falling to 88% against a resting baseline of 91 to 93% on air, so please arrange an ambulatory oxygen assessment. She previously missed pulmonary rehabilitation because the venue required two buses, so please discuss transport at the outset.",
      "She has a rescue pack but took the antibiotics for a cold in March, so please clarify its use. A previous vertebral fracture limits her forward bending, which affects positioning for clearance. She has no known allergies.",
      "She lives alone, is highly motivated and prefers morning visits."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist, Inpatient Physiotherapy",
      "Ashbourne Hospital"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The three main requests are stated in the first sentence, with the discharge date and the pattern of repeated admissions that make the referral pressing.",
      "selection": "Clearance needs, exercise capacity with the exertional desaturation and the oxygen assessment it calls for, the barrier to attending rehabilitation, rescue pack misuse and the fracture that affects positioning are kept. Smoking history, home equipment, inhaler technique already corrected and the dietitian referral are left out as already dealt with or not needed by this team.",
      "organisation": "Request, then sputum clearance as the main need, then exercise capacity, oxygen and rehabilitation, then self-management and safety points, then practical arrangements.",
      "tone": "Collegial and practical, between respiratory professionals, with clear requests rather than instructions."
    },
    "notesUsed": [
      "severe COPD and bronchiectasis",
      "discharge 12 June 2025; third admission in eight months",
      "Pseudomonas aeruginosa, two-week course",
      "carbocisteine 750 mg three times daily started",
      "never taught clearance; ACBT learnt but needs card",
      "PEP device twice daily",
      "two to three visits suggested",
      "6MWT 11 June: 142 metres, two stops, lowest 88%",
      "baseline 91 to 93% on air",
      "ambulatory oxygen assessment requested",
      "missed pulmonary rehab in 2023 because of two buses; discuss venue and transport",
      "rescue pack used for a cold in March",
      "vertebral fracture limits forward bending, relevant to positioning",
      "no known allergies",
      "lives alone; motivated; prefers morning visits"
    ],
    "notesLeftOut": [
      "admission saturations and walking distance — superseded by discharge test",
      "sputum volume and colour — current state is mucoid; team will assess",
      "inhaler technique — corrected and rechecked on 9 June",
      "smoking history — stopped 2014, not affecting this referral",
      "BMI and weight loss — already referred to the dietitian on the ward",
      "home equipment and daily function — independent, no care needs",
      "her question about why nobody showed her the device — not for this letter"
    ],
    "safety": [
      {
        "point": "Pseudomonas aeruginosa in sputum, treated",
        "where": "paragraph 2"
      },
      {
        "point": "Desaturation to 88% on exertion; resting baseline 91 to 93% on air; ambulatory oxygen assessment requested",
        "where": "paragraph 3"
      },
      {
        "point": "Rescue pack used incorrectly; needs clear guidance",
        "where": "paragraph 4"
      },
      {
        "point": "Vertebral fracture: limit forward bending when positioning for clearance",
        "where": "paragraph 4"
      },
      {
        "point": "Carbocisteine newly started",
        "where": "paragraph 2"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 4"
      },
      {
        "point": "Risk of non-attendance at rehabilitation because of transport",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-physiotherapy-referral-to-orthopaedics-a-shoulder-that-has-not-responded": {
    "header": [
      "Mr Douglas Ferreira-Nkemdi",
      "Consultant Orthopaedic Surgeon, Shoulder Service",
      "Weybourne Hospital",
      "6 May 2025"
    ],
    "salutation": "Dear Mr Ferreira-Nkemdi,",
    "re": "Re: Mrs Constance Adeyemi-Locke, aged 58, right full-thickness supraspinatus tear",
    "body": [
      "I am writing to request your opinion on Mrs Adeyemi-Locke's right shoulder, which has not responded to sixteen weeks of physiotherapy. Ultrasound on 24 March showed a full-thickness supraspinatus tear of approximately 14 mm with retraction.",
      "Her symptoms began in October 2024, first described as gradual, but on direct questioning she recalled a tearing sensation when reaching into the back seat of a car, suggesting a traumatic onset. She has constant night pain.",
      "Today, active abduction is 95 degrees against passive 150, with an unchanged painful arc. External rotation strength remains 3 out of 5, with a persistent lag sign of 20 degrees, despite progressive loading and reliable home exercise. This lag seems more than an intact infraspinatus explains, so the imaging may merit review. A subacromial injection on 3 March gave only about ten days' relief. A cervical cause has been excluded.",
      "Her type 2 diabetes (HbA1c 54 mmol/mol in February) is relevant to healing and any further injection. She has no known allergies.",
      "She is a hairdresser, now working three days weekly. She knows surgery is possible and would value a direct answer about the alternative. She will continue her exercises and can attend any time."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Weybourne Musculoskeletal Physiotherapy"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The request and the imaging result open the letter, because a confirmed full-thickness tear that has failed physiotherapy is exactly what a shoulder surgeon needs to know first.",
      "selection": "The possible traumatic onset, the active-passive difference, the unchanged strength and lag sign with the imaging question it raises, adherence, the injection response and diabetes are kept as they shape the surgical decision. The week-by-week treatment detail, radiograph findings and the other intact tendons are left out, as the report is enclosed.",
      "organisation": "Request with imaging, then history, then objective findings showing no change and the imaging question, then medical background, then work impact and her questions.",
      "tone": "Concise and evidence-based for a consultant colleague, while passing on the patient's question respectfully."
    },
    "notesUsed": [
      "ultrasound 24 March: full-thickness supraspinatus tear about 14 mm with retraction",
      "sixteen weeks of structured physiotherapy, no response",
      "onset October 2024, first described as gradual; tearing sensation recalled on direct questioning, possibly traumatic",
      "constant night pain",
      "active abduction 95, passive 150, painful arc unchanged",
      "external rotation strength 3 out of 5, lag sign 20 degrees, unchanged",
      "home programme completed reliably",
      "lag more than expected with intact infraspinatus; imaging review requested",
      "subacromial injection 3 March, about ten days of relief",
      "no cervical component",
      "type 2 diabetes, HbA1c 54 mmol/mol",
      "no known allergies",
      "hairdresser, reduced to three days",
      "aware of surgery, wants the alternative answered",
      "continuing exercises; can attend any time"
    ],
    "notesLeftOut": [
      "findings on 14 January — included only where unchanged",
      "week-by-week treatment content — summarised as progressive loading",
      "radiograph findings and acromiohumeral distance — available in the imaging reports",
      "subscapularis and biceps intact — in the enclosed ultrasound report",
      "unable to lie on the right side — summarised as constant night pain",
      "hypertension, BMI, non-smoker, medication list — not central to the referral",
      "difficulty with dressing, hair drying and night driving — function summarised through work impact",
      "number of sessions (ten) — the sixteen-week duration and adherence are what show an adequate trial"
    ],
    "safety": [
      {
        "point": "Full-thickness supraspinatus tear with retraction",
        "where": "paragraph 1"
      },
      {
        "point": "Possible traumatic onset in October 2024, relevant to surgical timing",
        "where": "paragraph 2"
      },
      {
        "point": "Persistent external rotation lag sign and unchanged weakness; imaging review requested",
        "where": "paragraph 3"
      },
      {
        "point": "Type 2 diabetes (HbA1c 54 mmol/mol) relevant to healing and further injection",
        "where": "paragraph 4"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 4"
      },
      {
        "point": "Exercises safe to continue while waiting",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-referral-to-the-pain-service-persistent-low-back-pain": {
    "header": [
      "Dr Katarzyna Obi-Fennimore",
      "Consultant in Pain Medicine",
      "Ravensmoor Pain Service",
      "22 June 2025"
    ],
    "salutation": "Dear Dr Obi-Fennimore,",
    "re": "Re: Miss Rosalind Ekechukwu-Vance, aged 39, persistent low back pain",
    "body": [
      "I am writing to refer Miss Ekechukwu-Vance for assessment, a medication review and consideration of a pain management programme. She has had constant low back pain for five years since a fall from a horse in 2020.",
      "Her 2021 MRI showed only age-appropriate changes, and she has no radicular symptoms, neurological deficit or red flags. Three physiotherapy episodes, acupuncture, oral steroids and a facet joint injection in November 2024 gave only short-term relief.",
      "My main concern is her medication. She takes codeine 30 mg four times daily, increasing to six doses on bad weeks, and naproxen 500 mg twice daily with omeprazole, continuously since 2021. She also takes amitriptyline 50 mg at night and paracetamol 1 g four times daily.",
      "She believes her spine is crumbling, scores 22 out of 24 on the fear-avoidance physical activity subscale, and has stopped most activity. Her mood is low and she has withdrawn from friends, but she has no thoughts of self-harm; I informed her general practitioner today. Further reduced hours would put her job at risk.",
      "She has agreed to this referral but fears being told the pain is imaginary, so please address this early."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Ravensmoor Musculoskeletal Physiotherapy"
    ],
    "bodyWords": 193,
    "commentary": {
      "opening": "The three parts of the request open the letter, with a one-line summary of a five-year problem so the consultant knows immediately why a pain service is the right place.",
      "selection": "The absence of red flags, the failed treatments, the full medication picture, the fear-avoidance beliefs and her mood are kept as they are the maintaining factors. Detailed examination findings and the dates of each physiotherapy episode are left out as they do not change the request.",
      "organisation": "Request, then investigations and treatments tried, then medication concerns, then beliefs, mood and work, then the patient's worry.",
      "tone": "Respectful and non-judgemental, describing her beliefs and medication use factually and advocating for her concern to be addressed."
    },
    "notesUsed": [
      "constant low back pain five years, fall from a horse 2020",
      "MRI 2021: age-appropriate changes",
      "no radicular symptoms, normal neurology, no red flags",
      "three physiotherapy episodes, acupuncture, oral steroids, facet injection November 2024 — short-term relief only",
      "codeine 30 mg four times daily, up to six doses",
      "naproxen 500 mg twice daily continuous since 2021, with omeprazole",
      "amitriptyline 50 mg at night; paracetamol 1 g four times daily",
      "believes spine is crumbling; fear-avoidance 22 out of 24",
      "stopped most activity",
      "low mood, stopped seeing friends, no thoughts of self-harm, GP told",
      "job at risk with further reduction",
      "agreed to referral; fears being told pain is imaginary"
    ],
    "notesLeftOut": [
      "pain scores — constant pain conveyed; scores the service will measure",
      "orthopaedic discharge in 2022 — implied by no structural cause",
      "Pilates history — part of the pattern of short-lived treatments",
      "detailed examination, sitting tolerance — normal neurology is the key finding",
      "sleep detail — included in the overall picture the service will assess",
      "reasoning for not offering a fourth episode — implied by short-term relief only"
    ],
    "safety": [
      {
        "point": "Codeine use above prescribed frequency (up to six doses)",
        "where": "paragraph 3"
      },
      {
        "point": "Continuous naproxen since 2021 with omeprazole",
        "where": "paragraph 3"
      },
      {
        "point": "Low mood; no thoughts of self-harm; GP informed",
        "where": "paragraph 4"
      },
      {
        "point": "No red flags, normal neurology",
        "where": "paragraph 2"
      }
    ]
  },
  "wri-physiotherapy-letter-to-the-care-home-a-mobility-plan-for-a-resident": {
    "header": [
      "Mr Emeka Wallenberg-Osei",
      "Registered Manager",
      "Larch House Care Home",
      "31 July 2025"
    ],
    "salutation": "Dear Mr Wallenberg-Osei,",
    "re": "Re: Mrs Ottilie Nwankwo-Grieve, aged 88, mobility plan",
    "body": [
      "Please ensure that staff follow Mrs Nwankwo-Grieve's mobility plan below exactly as written. She does not need a hoist.",
      "She should stand from a chair of at least 45 cm with arms, using her frame, supervised by one person who never lifts her or helps under the arms. Prompt her: \"hands on the arms of the chair, nose over toes, push up on three\". She needs time and one instruction at a time. As her blood pressure drops on standing, she should stand still for a count of ten before walking, sitting down if dizzy. She walks 12 metres with her wheeled frame, one person beside and slightly behind her.",
      "Until the new lounge chair arrives, she must use the chair by the window. Her frame must not be adjusted and, like her call bell, must stay within reach. She needs her glasses and hearing aid before walking. Please change the bathroom light timer.",
      "Please support five minutes of exercise twice daily and record whether it is done.",
      "I will review her on 28 August. Please contact me sooner if she falls, cannot stand from her own chair, or staff think a hoist is needed, rather than starting one."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Community Physiotherapist",
      "Larch House domiciliary service"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The letter opens with the request that staff follow the plan exactly and with the most important instruction, that no hoist is needed; when to call instead of starting one is repeated at the end.",
      "selection": "The transfer technique, the prompt, the dizziness precaution, walking support, falls prevention and the exercise record are kept, as these are what staff must do. The history of how the falls happened and the detailed exercise list are left out to keep the plan clear.",
      "organisation": "Purpose and key instruction, then transfers and walking, then environment and falls prevention, then exercise, then review and when to call.",
      "tone": "Clear and directive but courteous, in plain professional English that care staff can follow."
    },
    "notesUsed": [
      "not a hoist transfer; contact me rather than starting one",
      "chair at least 45 cm with arms, frame, one person supervising, never under the arms",
      "verbal prompt",
      "needs time, one instruction at a time",
      "stand still for a count of ten, sit if dizzy",
      "postural drop recorded by GP",
      "wheeled frame, 12 metres, one person beside and slightly behind",
      "use chair by the window until new chair arrives",
      "frame not to be adjusted by anyone else",
      "frame and call bell within reach; glasses and hearing aid",
      "bathroom light timer to be changed",
      "five minutes of exercise twice daily; record whether done",
      "review 28 August; contact sooner if falls, cannot stand, or hoist considered"
    ],
    "notesLeftOut": [
      "circumstances of the two falls and the low lounge chairs — the plan already addresses them",
      "staff assisting under the arms recorded as refusing — addressed by the transfer instruction",
      "toilet and commode arrangements — already in place and managed",
      "pressure cushion, non-slip slippers — equipment already supplied",
      "individual exercises — demonstrated to staff and too detailed for the word limit",
      "osteoarthritis, hip fracture, blood pressure values, furosemide and amlodipine under GP review — medical detail managed by the practice"
    ],
    "safety": [
      {
        "point": "No hoist; contact physiotherapist rather than starting one",
        "where": "paragraphs 1, 5"
      },
      {
        "point": "Never lift or assist under the arms; one person supervising",
        "where": "paragraph 2"
      },
      {
        "point": "Postural drop: stand still for a count of ten, sit if dizzy",
        "where": "paragraph 2"
      },
      {
        "point": "Only use the chair by the window in the lounge (correct height)",
        "where": "paragraph 3"
      },
      {
        "point": "Frame and call bell within reach; glasses and hearing aid on",
        "where": "paragraph 3"
      },
      {
        "point": "Contact sooner if she falls or cannot stand",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-advice-letter-to-a-patient-rehabilitation-at-home-after-achilles-rupture": {
    "header": [
      "Mr Fabian Oyelaran-Whitcombe",
      "[Address]",
      "[Town and postcode]",
      "20 August 2025"
    ],
    "salutation": "Dear Mr Oyelaran-Whitcombe,",
    "re": "Re: Mr Fabian Oyelaran-Whitcombe, aged 42, home rehabilitation after Achilles rupture",
    "body": [
      "Here are your rules while your tendon heals without an operation.",
      "Keep your boot on at all times, including in bed. Remove it only to wash your leg, seated, with your foot pointed down. The boot holds the tendon ends together; bending your ankle up separates them. You may now put full weight on the boot, using crutches only on stairs or uneven ground. Wedges come out at 4, 6, 8 and 10 weeks.",
      "Do your hip, knee and toe exercises, but do not move your ankle, stretch, swim or bathe. Do not drive until you are out of the boot and can do an emergency stop, not before about 12 weeks; check with your insurer.",
      "Continue your blood-thinning injections while in the boot. Get same-day medical help for calf pain, swelling, warmth or redness, breathlessness or chest pain, which may signal a clot. Contact us about sudden give way, a gap behind your ankle, numbness, colour change or sore skin, and check your heel and shin daily.",
      "Because you were out of the boot, the orthopaedic team will recheck your tendon by scan on 22 August, then on 17 September. We will see you on 27 August."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Whitcombe Outpatient Physiotherapy"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The letter introduces 'your rules' at once, signalling that these are rules, not suggestions, because he had been removing the boot.",
      "selection": "The boot rules, weight bearing, wedge schedule, forbidden activities, driving, the clot warning signs, the early tendon recheck and appointments are kept. The injury story and the long-term timescale for sport are left out, as he needs to know what to do now.",
      "organisation": "Purpose, then the boot and weight bearing, then exercise and driving, then warning signs, then the recheck and appointments.",
      "tone": "Plain, warm and direct English for a patient, explaining why each rule matters without blaming him for earlier mistakes."
    },
    "notesUsed": [
      "non-operative management in a boot",
      "boot on at all times including in bed",
      "only exception: washing seated, foot pointed down",
      "tendon has not healed; boot holds the ends together",
      "full weight bearing through the boot; crutches for balance only",
      "wedges removed at 4, 6, 8 and 10 weeks",
      "hip, knee and toe exercises; no ankle movement, stretching, swimming, bath or driving",
      "no driving until out of boot and can do an emergency stop, not before about 12 weeks; check insurer",
      "blood-thinning injections while in the boot",
      "clot warning signs: urgent same-day assessment",
      "give way, gap, numbness, colour change, pressure sores; check heel and shin daily",
      "orthopaedic ultrasound recheck of the gap on 22 August because he was out of the boot",
      "appointment 27 August; orthopaedic review 17 September"
    ],
    "notesLeftOut": [
      "how the injury happened and ultrasound findings — he knows this",
      "detail of sleeping and walking without the boot — already corrected today; the letter gives only the recheck it led to",
      "leaflet for a different injury — not his concern now",
      "long-term timescale for running and badminton — to be discussed at later appointments",
      "hand cycle and seated weights — optional extras",
      "specific exercise repetitions — written on his programme sheet"
    ],
    "safety": [
      {
        "point": "Boot on at all times, including at night",
        "where": "paragraph 2"
      },
      {
        "point": "No ankle movement, stretching, swimming, bath or driving",
        "where": "paragraph 3"
      },
      {
        "point": "No driving before about 12 weeks; check insurer",
        "where": "paragraph 3"
      },
      {
        "point": "Continue blood-thinning injections while in the boot",
        "where": "paragraph 4"
      },
      {
        "point": "Clot warning signs need same-day assessment",
        "where": "paragraph 4"
      },
      {
        "point": "Re-rupture signs, numbness, colour change, pressure sores; check skin daily",
        "where": "paragraph 4"
      },
      {
        "point": "Tendon gap rechecked by ultrasound on 22 August after time out of the boot",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-discharge-advice-to-gp-following-women-s-health-continence-programme": {
    "header": [
      "Dr Sandra Whitlock",
      "General Practitioner",
      "Bramley Lane Practice",
      "28 August 2026"
    ],
    "salutation": "Dear Dr Whitlock,",
    "re": "Re: Mrs Emily Hartnett, aged 35, discharge after pelvic floor rehabilitation",
    "body": [
      "I am writing to update you on Mrs Hartnett, referred on 3 March 2026 with stress urinary incontinence and discharged today. I would be grateful if you could review her should her symptoms recur or change.",
      "Her incontinence began after the vaginal delivery of her second child in December 2025, with a repaired second-degree perineal tear. Initially, she leaked on coughing, sneezing and exercise, used two pads daily, and had pelvic floor strength of grade 2 out of 5, with a high fluid and caffeine intake.",
      "She received six sessions of supervised pelvic floor training with biofeedback, bladder retraining, fluid advice and graded exercise. Her strength is now 4 out of 5, she no longer needs pads, and leakage during daily activities has resolved. Minor leakage persists only after about twenty minutes of high-impact running.",
      "She will continue a maintenance programme of three sets daily for life and increase her running distance by no more than ten per cent weekly.",
      "Please review her if her symptoms recur, or if urgency, nocturia, a sensation of prolapse or any bowel symptom develops, as these would need reassessment rather than repeat treatment. She may self-refer within twelve months."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist, Women's Health",
      "Physiotherapy Department"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The letter states the purpose and the one thing the GP may need to do, review if symptoms recur or change, in the first paragraph, so the reader knows at once why it matters to her.",
      "selection": "Only the starting picture, the treatment, the outcome, the residual running leakage and the review triggers are kept. Her children's ages, hobbies, parking, the reminder app and resolved history such as childhood asthma are left out because they do not affect the GP's care.",
      "organisation": "Purpose and request, then the presenting problem, then treatment and outcome, then the maintenance plan, and finally the expanded review advice.",
      "tone": "Concise and collegial between health professionals, reporting outcomes factually and making the request politely."
    },
    "notesUsed": [
      "referred 3 March 2026; discharged 28 August 2026",
      "stress urinary incontinence since vaginal delivery December 2025; second-degree tear repaired",
      "leakage on coughing, sneezing, exercise; two pads daily",
      "pelvic floor grade 2 out of 5",
      "high fluid intake with caffeine; frequent voiding",
      "six sessions: supervised training, biofeedback, bladder retraining, fluid advice, graded exercise",
      "strength now 4 out of 5; pads stopped; daily leakage resolved",
      "minor leakage with high-impact running after about twenty minutes",
      "maintenance three sets daily for life; running increase no more than ten per cent weekly",
      "review if recurrence, urgency, nocturia, prolapse sensation, bowel symptom",
      "may self-refer within twelve months"
    ],
    "notesLeftOut": [
      "children's ages, first delivery in 2020 — background with no bearing on future care",
      "childhood asthma, appendicectomy, cervical screening, resolved back ache — irrelevant to continence follow-up",
      "detailed bladder diary figures and endurance measures — the summary is enough for the GP",
      "missed appointment, telephone check-in, reminder app, parking — administrative detail",
      "work, childcare, book club, baking, thanks to reception — social detail not needed by the GP",
      "half marathon and parkrun plans — covered by the running advice",
      "no medication, no known allergies — nothing to act on"
    ],
    "safety": [
      {
        "point": "Review if urgency, nocturia, sensation of prolapse or any bowel symptom develops (needs reassessment, not a repeat programme)",
        "where": "paragraph 5"
      },
      {
        "point": "Review if symptoms recur",
        "where": "paragraphs 1, 5"
      },
      {
        "point": "Residual leakage with high-impact running; increase distance by no more than ten per cent weekly",
        "where": "paragraphs 3, 4"
      },
      {
        "point": "Maintenance programme to continue for life",
        "where": "paragraph 4"
      },
      {
        "point": "Self-referral available within twelve months",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-discharge-to-gp-after-lateral-ankle-sprain-rehabilitation": {
    "header": [
      "Dr Priya Nair",
      "General Practitioner",
      "Oakfield Surgery",
      "1 September 2026"
    ],
    "salutation": "Dear Dr Nair,",
    "re": "Re: Ms Aoife Brennan, aged 24, discharge after right ankle sprain rehabilitation",
    "body": [
      "I am writing to inform you that Ms Brennan, first seen on 14 July 2026 following a right ankle sprain, has completed her rehabilitation and was discharged today. She will follow a self-managed maintenance plan, and no action is needed unless the problems outlined below develop.",
      "She sustained a grade II inversion sprain of the anterior talofibular and calcaneofibular ligaments while landing from a jump during netball on 12 July. The Ottawa ankle rules were negative, so no radiograph was required, and syndesmotic injury was excluded.",
      "Over six sessions, she received controlled loading, balance retraining, calf and peroneal strengthening and sport-specific drills. She now has full pain-free movement, symmetrical balance and hop tests, full strength and no swelling. She returned to light training two weeks ago and has had no episodes of giving way.",
      "She will continue home balance and strengthening exercises three times weekly for a further three months, as recurrence risk is highest in the first year. She should wear her lace-up brace or use taping for her first competitive matches in late September.",
      "I would be grateful if you could review her only if recurrent giving way or persistent swelling develops."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Outpatient Physiotherapy Department"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "The first paragraph tells the GP that treatment is complete and that she need do nothing unless specific problems arise, which is the core message of a discharge letter.",
      "selection": "The diagnosis, the exclusion of fracture and syndesmotic injury, the outcome and the maintenance plan are kept. Work, her partner, holidays, parking, dental history and the many individual test scores are left out because they do not change what the GP needs to know.",
      "organisation": "Purpose, then the injury, then treatment and outcome, then the self-managed plan, and finally the review triggers.",
      "tone": "Brief and reassuring but precise, as befits a straightforward discharge between professionals."
    },
    "notesUsed": [
      "first seen 14 July 2026; discharged 1 September 2026",
      "grade II inversion sprain, ATFL and CFL, 12 July, landing from a jump",
      "Ottawa rules negative, no radiograph; squeeze and external rotation tests negative",
      "six sessions: loading, proprioceptive retraining, calf and peroneal strengthening, sport drills",
      "full range, balance and hop tests symmetrical, strength 5 out of 5, swelling resolved",
      "light training two weeks ago, no swelling; no giving way",
      "home programme three times weekly for three months; recurrence risk highest in first year",
      "brace or taping for first competitive matches; owns lace-up brace",
      "first match late September",
      "GP review only if recurrent giving way or persistent swelling"
    ],
    "notesLeftOut": [
      "initial assessment measurements and pain scores — superseded by discharge findings",
      "individual test results (hop percentages, calf raise count, star excursion) — summarised as symmetrical",
      "hamstring strain, eczema, wisdom tooth, cold — unrelated history",
      "ibuprofen for four days, no current medication, no known allergies — nothing to act on",
      "job, partner, brother, coach, club physiotherapist — social detail",
      "swimming, Cornwall holiday, morning stiffness advice, court shoes, parking permit — advice already given to her or administrative",
      "self-taping skill and light-training swelling details — not needed by the GP",
      "anterior drawer laxity with a firm end feel — in keeping with the grade II sprain already stated; not needed by the GP"
    ],
    "safety": [
      {
        "point": "GP review if recurrent giving way or persistent swelling",
        "where": "paragraph 5"
      },
      {
        "point": "Recurrence risk highest in first year; continue home programme three months",
        "where": "paragraph 4"
      },
      {
        "point": "Brace or taping for first competitive matches",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-physiotherapy-discharge-to-gp-after-post-stroke-rehabilitation": {
    "header": [
      "Dr Amara Singh",
      "General Practitioner",
      "Eastgate Medical Centre",
      "31 August 2026"
    ],
    "salutation": "Dear Dr Singh,",
    "re": "Re: Mr George Whitlock, aged 71, discharge from community stroke physiotherapy",
    "body": [
      "I am writing to inform you that Mr Whitlock was discharged from community physiotherapy today, having met his goals following a left middle cerebral artery ischaemic stroke on 24 March 2026. I would be grateful if you could monitor his blood pressure and falls risk, and consider a review of his low mood.",
      "After nineteen weeks of community physiotherapy, he is independent in personal care and all transfers, including from the floor. He walks indoors with a stick and 150 metres outdoors with supervision. His Berg Balance Score has improved from 28 to 44 out of 56. A mild right foot drop is managed with an ankle-foot orthosis.",
      "He fell once in June while reaching into a high cupboard. Although uninjured, this fall is the main concern, particularly as he takes apixaban 5 mg twice daily for atrial fibrillation. He also takes amlodipine 10 mg daily for hypertension.",
      "He has felt low, especially about no longer driving, but no formal mood screening has been done.",
      "He will continue his home exercises five days a week. The orthosis fit should be reviewed in six months, or sooner if it rubs. He is awaiting licensing authority guidance before resuming driving."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Community Stroke Rehabilitation Team"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The opening gives the discharge and the three things asked of the GP together, so the requests are not buried beneath the rehabilitation detail.",
      "selection": "Function, the June fall, anticoagulation, blood pressure treatment, mood and the orthosis review are kept because they shape ongoing care. Hobbies, the television question, parking, dental and eye appointments and resolved early problems such as word-finding difficulty are left out.",
      "organisation": "Purpose and requests, then current function, then the falls concern, then mood, and finally the ongoing plan.",
      "tone": "Professional and measured, highlighting risks clearly without overstating them."
    },
    "notesUsed": [
      "discharged 31 August 2026; goals met",
      "left MCA ischaemic stroke 24 March 2026",
      "nineteen weeks community physiotherapy",
      "independent transfers including floor; independent personal care",
      "single-point stick indoors; 150 metres outdoors with supervision, limited by fatigue",
      "Berg 44 out of 56 from 28",
      "right foot drop; ankle-foot orthosis",
      "one fall in June reaching into high cupboard; uninjured",
      "apixaban 5 mg twice daily; atrial fibrillation",
      "hypertension; amlodipine 10 mg daily",
      "low mood about driving; no formal screening",
      "home exercise five days a week; orthosis review six months or sooner if rubbing",
      "awaiting licensing authority guidance on driving",
      "monitor blood pressure and falls risk; consider mood review"
    ],
    "notesLeftOut": [
      "thrombolysis, swallow screen, MoCA, early word-finding difficulty — acute-phase detail now resolved",
      "metformin, atorvastatin, type 2 diabetes — known to the GP and not affected by discharge",
      "upper limb and hand detail, ten-metre walk and sit-to-stand times — function summarised",
      "hernia repair, cataracts, hearing aids, eye screening, flu vaccine, dental appointment — unrelated to the discharge",
      "wife's health, sons, grab rail, shower help — context not needed for the requests",
      "allotment visits, cricket, television, bowls, model railway, parking — social detail",
      "four weeks on the stroke unit, allotment loss, cupboard reorganised — trimmed for length; not needed for the requests",
      "anticoagulation offered in 2019 and declined — history known to the GP; current apixaban is stated"
    ],
    "safety": [
      {
        "point": "Fall in June is the main flag; monitor falls risk",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Anticoagulated with apixaban 5 mg twice daily (bleeding risk if he falls)",
        "where": "paragraph 3"
      },
      {
        "point": "Monitor blood pressure (hypertension on amlodipine)",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Low mood, no formal screening; consider review",
        "where": "paragraphs 1, 4"
      },
      {
        "point": "Ankle-foot orthosis review in six months or sooner if it rubs",
        "where": "paragraph 5"
      },
      {
        "point": "Not driving; awaiting licensing authority guidance",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-discharge-to-gp-after-total-hip-replacement-rehabilitation": {
    "header": [
      "Dr Iain MacLeod",
      "General Practitioner",
      "Glenmore Health Centre",
      "27 August 2026"
    ],
    "salutation": "Dear Dr MacLeod,",
    "re": "Re: Mrs Patricia Donnelly, aged 69, discharge after left total hip replacement",
    "body": [
      "I am writing to inform you that Mrs Donnelly, who underwent a left total hip replacement by a posterior approach on 2 July 2026, has completed her rehabilitation and was discharged today. I would be grateful if you could note her maintenance plan and the safety advice she has been given.",
      "Following seven sessions of strengthening, gait re-education and stair practice, she walks independently without an aid, manages stairs and walks a mile to the shops. Her wound has healed, her calves are soft and non-tender, and she is pain-free on walking. Her Oxford Hip Score has improved from 14 to 41.",
      "She will continue her home strengthening programme daily for at least three further months. As instructed by the surgical team, she must maintain posterior hip precautions until 24 September, and she understands them well.",
      "She has been advised to attend the emergency department if dislocation is suspected, for example sudden pain, a shortened or rotated leg, or inability to bear weight, and to contact the orthopaedic team the same day about wound redness, discharge, fever or increasing pain.",
      "She lives alone, but her daughter and a neighbour visit regularly. Her routine orthopaedic follow-up is in December."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Outpatient Physiotherapy Department"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The first paragraph names the operation and date, states that rehabilitation is complete, and tells the GP what to take from the letter.",
      "selection": "Functional outcome, wound and calf status, the precaution end date and the safety-netting advice are kept because they protect the patient over the next weeks. Range-of-movement figures, her past history, pets, the book group and travel plans are left out as not useful to the GP.",
      "organisation": "Purpose, then outcome, then the maintenance plan and precautions, then the safety-netting, and finally social support and follow-up.",
      "tone": "Clear and factual, with the safety advice stated plainly so it cannot be missed."
    },
    "notesUsed": [
      "left THR, posterior approach, 2 July 2026; discharged 27 August 2026",
      "seven sessions: strengthening, gait re-education, stairs",
      "walks independently without aid; stairs; a mile to the shops",
      "wound healed; calves soft and non-tender",
      "pain-free on walking",
      "Oxford Hip Score 14 to 41",
      "home programme daily for at least three months",
      "precautions until 24 September; understands them",
      "dislocation signs: emergency department",
      "wound redness, discharge, fever, increasing pain: same-day orthopaedic contact",
      "lives alone; daughter and neighbour visit",
      "orthopaedic follow-up December"
    ],
    "notesLeftOut": [
      "detailed range and strength figures, Trendelenburg, gait description — summarised as independent walking",
      "inpatient stay, prosthesis type, joint school — surgical detail already known",
      "paracetamol twice weekly, alendronic acid, osteoporosis — known to the GP, unchanged",
      "cataracts, hay fever, wrist sprain, screening — unrelated history",
      "equipment return, walking frame collection, cat, grandson, book group, Edinburgh trip, thanks — administrative or social",
      "gardening with a kneeler after twelve weeks — advice already given to her",
      "no opioid since week three — analgesia minimal and known to the GP"
    ],
    "safety": [
      {
        "point": "Suspected dislocation (sudden pain, shortened or rotated leg, unable to bear weight): emergency department",
        "where": "paragraph 4"
      },
      {
        "point": "Wound redness, discharge, fever or increasing pain: same-day orthopaedic contact",
        "where": "paragraph 4"
      },
      {
        "point": "Posterior hip precautions until 24 September",
        "where": "paragraph 3"
      },
      {
        "point": "Lives alone",
        "where": "paragraph 5"
      },
      {
        "point": "Orthopaedic follow-up in December",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-referral-to-gp-for-suspected-lumbar-radiculopathy": {
    "header": [
      "Dr Helen Carter",
      "General Practitioner",
      "Riverside Medical Centre",
      "31 August 2026"
    ],
    "salutation": "Dear Dr Carter,",
    "re": "Re: Mr Daniel Whitford, aged 47, same-day spinal referral for progressive leg weakness",
    "body": [
      "I am writing to inform you that today I referred Mr Whitford to the on-call spinal team for same-day assessment, including consideration of an urgent lumbar MRI, because of a progressive motor deficit in his right leg. Please follow him up after the spinal review.",
      "He self-referred on 28 July 2026 with right-sided low back pain radiating into the posterior thigh and lateral calf. Despite five sessions of neural mobilisation, extension and stabilisation exercises, his pain is unchanged.",
      "Today, his right ankle reflex is absent, having been present in July, and calf and dorsiflexion strength has fallen from 4 to 3 out of 5. Sensory loss now extends into the fourth and fifth toes, and he has tripped twice in the past ten days.",
      "Cauda equina red flags remain negative. He has written safety-netting advice and knows to attend the emergency department immediately if such symptoms appear. He must avoid lifting and warehouse duties until reviewed; his employer has been informed with consent.",
      "He takes ibuprofen 400 mg most days without gastroprotection, which you may wish to review, and paracetamol 1 g four times daily. He is allergic to penicillin and worried about his job."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Musculoskeletal Physiotherapy Department"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The urgent action already taken and the reason for it come first, followed by the request for follow-up, because the GP must know immediately that the patient is being seen by the spinal team today.",
      "selection": "The change in neurological signs, the trips, the negative red flags, the safety-netting, medication with the gastroprotection request, and the allergy are kept. Hobbies, past knee surgery, the health check, parking and the football match are left out as irrelevant to this referral.",
      "organisation": "Action and request, then the background and failed treatment, then the new findings that prompted referral, then safety advice and work, and finally medication and concerns.",
      "tone": "Clear and urgent but calm, presenting the deterioration objectively between professionals."
    },
    "notesUsed": [
      "reviewed 31 August 2026; same-day referral to on-call spinal team; urgent MRI considered",
      "progressive motor deficit is the concern",
      "self-referred 28 July 2026; back pain into posterior thigh and lateral calf",
      "five sessions: neural mobilisation, McKenzie extension, core stabilisation",
      "pain unchanged",
      "right ankle reflex now absent, present in July",
      "calf and dorsiflexion strength 4 to 3 out of 5",
      "sensory loss into fourth and fifth toes; tripped twice in ten days",
      "red flags negative; written cauda equina safety-netting; ED immediately",
      "no lifting or warehouse duties; employer informed with consent",
      "ibuprofen 400 mg most days, no gastroprotection, GP to review; paracetamol 1 g four times daily",
      "penicillin allergy",
      "worried about job and pay"
    ],
    "notesLeftOut": [
      "full initial assessment figures (flexion, straight leg raise, pain scores) — the change in signs is what matters",
      "normal left leg, knee reflex, pulses and hip tests — implied by focusing on the right-sided deficit",
      "2019 back pain episode, knee arthroscopy, chest infection, health check, cholesterol, glasses — unrelated history",
      "sick pay detail, family, darts, fishing, partner's work — social detail beyond his main worry",
      "car park, football match, copy of findings, taking medicines to the unit — administrative, already arranged with him",
      "six-week history, good adherence, light duties, catching foot on kerbs — trimmed for length; the change in signs carries the referral"
    ],
    "safety": [
      {
        "point": "Progressive motor deficit: same-day spinal team assessment and possible urgent MRI",
        "where": "paragraph 1"
      },
      {
        "point": "Absent right ankle reflex, strength fallen to 3 out of 5, trips",
        "where": "paragraph 3"
      },
      {
        "point": "Cauda equina safety-netting: emergency department immediately if symptoms appear",
        "where": "paragraph 4"
      },
      {
        "point": "No lifting or warehouse duties until reviewed",
        "where": "paragraph 4"
      },
      {
        "point": "Penicillin allergy",
        "where": "paragraph 5"
      },
      {
        "point": "Ibuprofen most days without gastroprotection; GP asked to review",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-referral-to-falls-clinic-for-recurrent-geriatric-falls": {
    "header": [
      "The Falls Clinic Coordinator",
      "Falls Clinic",
      "Meadowbank Community Hospital",
      "29 August 2026"
    ],
    "salutation": "Dear Falls Clinic Coordinator,",
    "re": "Re: Mrs Doreen Pelletier, aged 82, recurrent falls",
    "body": [
      "I am writing to refer Mrs Pelletier for a multifactorial falls assessment following three falls in the past two months, one of which caused a right wrist fracture. In particular, I would be grateful for a medication review, lying and standing blood pressure monitoring over a longer period, a bone health assessment and expediting of her cataract surgery.",
      "All three falls occurred indoors, two on turning and one getting out of bed at night, without loss of consciousness. She reports dizziness on standing, and her blood pressure fell from 148/82 to 118/70 with symptoms. Amlodipine 10 mg and bendroflumethiazide 2.5 mg may contribute, and zopiclone 3.75 mg may cause night-time sedation.",
      "Her Timed Up and Go was 22 seconds with a stick, her hip and ankle strength is reduced, and cataracts impair her vision.",
      "After four sessions of strength and balance training, she uses a wheeled frame indoors, but postural dizziness and unsteadiness on turning persist. Physiotherapy will continue in parallel.",
      "She lives alone in a first-floor flat without a lift and has no care package. A personal alarm and occupational therapy home assessment have been requested. She would appreciate transport and a late-morning appointment."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Community Physiotherapy Team"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The referral and the four specific requests are given in the first paragraph, so the clinic knows exactly what is being asked before reading the evidence.",
      "selection": "The fall pattern, the postural blood pressure drop, the three contributing medicines, mobility findings, cataracts and her living situation are kept because each is a modifiable risk factor. Her budgie, hobbies, the television and the past hysterectomy are left out.",
      "organisation": "Purpose and requests, then falls and medication, then physical findings, then progress with treatment, and finally her social situation and practical needs.",
      "tone": "Professional and persuasive, linking each finding to a request without speculating beyond the notes."
    },
    "notesUsed": [
      "seen 29 August 2026; aged 82",
      "three falls in two months; July fall caused right wrist fracture",
      "indoors, two on turning, one getting out of bed at night; no loss of consciousness",
      "postural dizziness; 148/82 to 118/70 with symptoms",
      "amlodipine 10 mg, bendroflumethiazide 2.5 mg, zopiclone 3.75 mg",
      "requests: medication review, prolonged lying and standing BP, bone health, expedite cataract surgery",
      "TUG 22 seconds with stick; reduced hip and ankle strength",
      "bilateral cataracts",
      "four sessions; wheeled frame indoors; dizziness and turning unsteadiness persist",
      "physiotherapy continues in parallel",
      "lives alone, first-floor flat, no lift; no care package",
      "OT home assessment and personal alarm requested",
      "transport and late-morning appointment preferred"
    ],
    "notesLeftOut": [
      "exact sit-to-stand counts and strength grades — summarised",
      "fear of falling and stopping the day centre — relevant but omitted for length; the clinic will assess",
      "home clutter, loose rugs, no handrail on the communal stairs — covered by the OT home hazard request",
      "hypertension, hysterectomy, vaccines, chest infection — background not needed for the referral",
      "family contacts, neighbour's key, shopping, crosswords, budgie, television, telephone — social or administrative",
      "daughter wishes to attend — practical detail the clinic can arrange on contact",
      "six steps to turn, modest sit-to-stand gains, night-time fall pattern advice — trimmed for length; the clinic will reassess"
    ],
    "safety": [
      {
        "point": "Postural hypotension with symptoms (148/82 to 118/70)",
        "where": "paragraph 2"
      },
      {
        "point": "Medication review: amlodipine and bendroflumethiazide (postural hypotension), zopiclone (sedation)",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Bone health assessment after fragility fracture",
        "where": "paragraph 1"
      },
      {
        "point": "Lives alone with no care package; personal alarm requested",
        "where": "paragraph 5"
      },
      {
        "point": "Impaired vision; expedite cataract surgery",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Persistent unsteadiness on turning",
        "where": "paragraphs 3, 4"
      }
    ]
  },
  "wri-physiotherapy-referral-to-hand-therapy-after-complex-distal-radius-fracture": {
    "header": [
      "Hand Therapist",
      "Specialist Hand Therapy Service, Upper Limb Unit",
      "Croftwell Hospital",
      "30 August 2026"
    ],
    "salutation": "Dear Colleague,",
    "re": "Re: Ms Bridget Lawson, aged 52, suspected complex regional pain syndrome, right wrist",
    "body": [
      "I am writing to refer Ms Lawson, a right-hand-dominant seamstress, for intensive specialist hand therapy because of marked stiffness and suspected complex regional pain syndrome, as early intervention improves outcome. Please note that she is allergic to latex, so latex-free gloves and splinting materials must be used.",
      "She underwent volar plate fixation of a comminuted right distal radius fracture following a fall on 12 July 2026, with a removable splint from two weeks post-operatively. The plate is well positioned.",
      "She has burning pain disproportionate to healing, at 7 out of 10 at rest, with whole-hand swelling, shiny mottled skin, sweating, warmth, touch hypersensitivity, and nail and hair changes, meeting the Budapest criteria. Wrist extension is 15 degrees, flexion 20 degrees, and grip strength 6 kg against 24 kg on the left.",
      "Despite three sessions of gentle movement, oedema management, desensitisation and a night splint, her pain and trophic changes are unchanged or slightly worse. Mirror therapy and graded motor imagery are likely to be indicated; desensitisation continues here meanwhile. She takes amitriptyline 10 mg at night, and her GP has been copied in regarding analgesia.",
      "She is anxious about her income and prefers telephone contact on weekday mornings."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Outpatient Physiotherapy Department"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The referral, its urgency and the latex allergy all appear in the first paragraph, because the allergy affects the very first contact with the hand therapy team.",
      "selection": "The surgery, the features that meet the Budapest criteria, key range and grip figures, the lack of response to treatment and the medication are kept. Her choir, dog, dental check and parking question are left out as irrelevant.",
      "organisation": "Request and allergy, then the injury and surgery, then the clinical features, then treatment so far and the plan, and finally her concerns and contact preference.",
      "tone": "Collegial and specific, using precise clinical terms appropriate for a specialist therapist."
    },
    "notesUsed": [
      "seen 30 August 2026; aged 52; seamstress; right-hand dominant",
      "ORIF volar plate, comminuted right distal radius fracture, fall 12 July 2026",
      "removable splint from about two weeks after surgery; plate in good position",
      "burning disproportionate pain, 7 out of 10 at rest",
      "whole-hand swelling, shiny mottled skin, sweating, warmth, hypersensitivity, nail and hair changes",
      "Budapest criteria met",
      "wrist extension 15, flexion 20 degrees; grip 6 kg versus 24 kg",
      "three sessions; night splint only; pain and trophic changes unchanged or worse",
      "mirror therapy and graded motor imagery likely indicated",
      "desensitisation continues here",
      "amitriptyline 10 mg at night; GP copied regarding analgesia",
      "latex allergy: latex-free gloves and splinting materials",
      "anxious about income; telephone weekday mornings"
    ],
    "notesLeftOut": [
      "finger flexion, forearm rotation, thumb opposition, pulses, sensation — key range and grip figures are enough for referral",
      "paracetamol 1 g four times daily — routine analgesia; GP copied in",
      "fall mechanism, dog, wound healing, suture removal — not needed by the hand therapist",
      "carpal tunnel decompression, screening, dental check, flu vaccine — unrelated history",
      "husband, daughters, choir, holiday, preferred hospital site, parking — social or administrative",
      "self-employed workshop detail — summarised as anxiety about income"
    ],
    "safety": [
      {
        "point": "Latex allergy: use latex-free gloves and splinting materials",
        "where": "paragraph 1"
      },
      {
        "point": "Suspected CRPS meeting Budapest criteria; early intervention needed",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Pain and trophic changes worsening despite treatment",
        "where": "paragraph 4"
      },
      {
        "point": "Amitriptyline 10 mg at night; GP copied about analgesia",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-physiotherapy-referral-to-orthopaedic-surgeon-for-non-improving-knee": {
    "header": [
      "Mr Daniel Okafor",
      "Orthopaedic Surgeon",
      "Riverside General Hospital",
      "31 August 2026"
    ],
    "salutation": "Dear Mr Okafor,",
    "re": "Re: Ms Hannah Pierce, aged 34, suspected medial meniscal tear, right knee",
    "body": [
      "I am writing to ask that you see Ms Pierce promptly regarding a suspected medial meniscal tear of her right knee. I first referred her for MRI and orthopaedic review on 15 June 2026, but neither has yet taken place, and her symptoms have not responded to conservative management.",
      "She twisted her knee while pivoting at netball on 2 May 2026, felt a pop and developed swelling within two hours. On assessment, she had medial joint line tenderness, a positive McMurray test with a palpable click, and loss of terminal extension. Cruciate and collateral ligament tests were negative.",
      "After twelve sessions of rehabilitation, her range is now 0 to 130 degrees. However, her knee still locks two or three times weekly, needing manipulation to unlock. She also has recurrent effusion after any activity beyond walking and catching on descending stairs. Progress has plateaued over the last four weeks.",
      "These persistent mechanical symptoms raise concern for a displaced bucket-handle fragment, and as the early swelling suggests haemarthrosis, MRI should also exclude cruciate or osteochondral injury. Strengthening continues meanwhile to prepare her for possible surgery.",
      "She is allergic to penicillin. She can attend at short notice."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Musculoskeletal Physiotherapy Department"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "The request to expedite and the reason for urgency, an earlier referral that has not been acted on, are stated at once so the surgeon understands why a second letter is being sent.",
      "selection": "The mechanism, positive examination findings, persistent locking and effusion, the plateau, the possible haemarthrosis and the penicillin allergy are kept as they support surgical decision-making. Unrelated history, her house move, school duties and swimming advice are left out.",
      "organisation": "Request, then mechanism and initial findings, then response to treatment and ongoing symptoms, then the clinical concern and plan, and finally the allergy and availability.",
      "tone": "Courteous and firm, conveying urgency without criticising the delay."
    },
    "notesUsed": [
      "reviewed 31 August 2026; aged 34",
      "first referred 15 June 2026 for MRI and orthopaedic review; neither yet done",
      "twisting injury pivoting at netball 2 May 2026; pop; swelling within two hours",
      "medial joint line tenderness; McMurray positive with click; lacked terminal extension",
      "cruciates and collaterals intact",
      "twelve sessions of rehabilitation",
      "range 0 to 130 degrees",
      "locking two or three times weekly, manipulates to unlock",
      "recurrent effusion beyond walking; catching on stairs",
      "plateaued last four weeks",
      "possible displaced bucket-handle fragment; early swelling suggests haemarthrosis, MRI to exclude cruciate or osteochondral injury",
      "strengthening continues to prepare for possible surgery",
      "penicillin allergy",
      "can attend at short notice"
    ],
    "notesLeftOut": [
      "initial range, strength and pain scores — superseded by current findings",
      "urgent treatment centre visit, crutches, ice — early care with no ongoing relevance",
      "asthma, ankle sprain, tonsillectomy, mother's meniscal surgery, screening — unrelated history",
      "ibuprofen and paracetamol as required — routine analgesia",
      "treatment components and inability to return to sport — trimmed for length; the plateau and locking carry the request",
      "modified duties, house move, partner, school copy, email copy, swimming advice, leaflet — social or administrative"
    ],
    "safety": [
      {
        "point": "Persistent mechanical locking; possible displaced bucket-handle tear — prompt review requested",
        "where": "paragraphs 1, 3, 4"
      },
      {
        "point": "Earlier referral of 15 June not yet acted on",
        "where": "paragraph 1"
      },
      {
        "point": "Penicillin allergy",
        "where": "paragraph 5"
      },
      {
        "point": "Early swelling suggests haemarthrosis; MRI to exclude cruciate or osteochondral injury",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-physiotherapy-referral-to-orthopaedic-team-for-suspected-rotator-cuff-tear": {
    "header": [
      "Mr Stephen Locke",
      "Consultant Orthopaedic Surgeon",
      "Shoulder Clinic, Eastvale Hospital",
      "28 August 2026"
    ],
    "salutation": "Dear Mr Locke,",
    "re": "Re: Mr Raymond Fletcher, 58, suspected right rotator cuff tear",
    "body": [
      "I am writing to ask that Mr Fletcher, whom I referred urgently to your service on 7 July 2026, be seen as a priority for imaging and a surgical opinion. No appointment has yet been received.",
      "He fell onto his outstretched right, dominant arm on 20 June 2026. A radiograph that day showed no fracture or dislocation, and no further imaging has been performed. At review today, active abduction remained limited to 70 degrees with a painful arc, although passive range was near full. The empty can test was positive and weak, there was an external rotation lag of about 30 degrees, and supraspinatus and infraspinatus fossa wasting was visible. Night pain wakes him three or four times.",
      "After six sessions over seven weeks, rest pain has eased slightly, but the weakness and lag are unchanged, which suggests a full-thickness tear. As outcomes of repair are time-dependent, further delay may limit his options.",
      "Please note that aspirin causes him wheeze, so all NSAIDs, oral and topical, must be avoided. He takes paracetamol 1 g four times daily.",
      "He is self-employed without sick pay and has not worked for ten weeks. I will continue his exercises pending your review."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Physiotherapy Department"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "This is a follow-up to an urgent referral that has had no reply, so the first paragraph names the earlier referral date and asks directly for priority review, giving the reason in one clause.",
      "selection": "Only the findings that point to a full-thickness tear are kept: the lag sign, weakness, wasting, the lack of change after appropriate loading, and the negative radiograph. The normal neck, elbow and hand checks, the pain scores, the hobbies, the parking and insurance questions and the old ankle and hernia history are left out because they do not change the surgeon's decision.",
      "organisation": "Request first, then mechanism and examination, then response to treatment and why time matters, then the allergy and medication, and finally the work impact and the interim plan.",
      "tone": "Courteous but firm, professional to a consultant; the urgency is supported with clinical reasons rather than emotional language."
    },
    "notesUsed": [
      "urgent referral 7 July; no appointment received; seen as a priority",
      "fall onto outstretched arm 20 June 2026; right-hand dominant",
      "radiograph no fracture or dislocation; no other imaging",
      "active abduction 70 degrees, painful arc; passive near full",
      "empty can positive and weak; external rotation lag about 30 degrees",
      "supraspinatus and infraspinatus fossa wasting",
      "night pain waking three or four times",
      "six sessions over seven weeks; rest pain slightly better; weakness and lag unchanged",
      "full-thickness tear; repair outcomes time-dependent",
      "aspirin wheeze; avoid all NSAIDs oral and topical",
      "paracetamol 1 g four times daily",
      "self-employed, no sick pay, not worked for ten weeks",
      "exercises continue pending review"
    ],
    "notesLeftOut": [
      "belly press, normal deltoid bulk, cervical and axillary nerve screens, elbow/wrist/hand findings — normal, do not change the decision",
      "SPADI and pain scores — the unchanged weakness is the key finding",
      "session length, home sheet, rearranged session for a wedding — administrative detail",
      "ankle fracture 2009, hernia repair 2017, bowel screening — unrelated history",
      "wife drives him, son finishing jobs, sea fishing, alcohol — not needed by the surgeon",
      "income protection letter and parking questions — already dealt with"
    ],
    "safety": [
      {
        "point": "Aspirin causes wheeze; avoid all NSAIDs, oral and topical",
        "where": "paragraph 4"
      },
      {
        "point": "Paracetamol 1 g four times daily continues",
        "where": "paragraph 4"
      },
      {
        "point": "Probable full-thickness tear with time-dependent repair outcome; priority review needed",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Exercises continue while awaiting review (follow-up)",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-physiotherapy-referral-to-paediatric-service-for-developmental-motor-delay": {
    "header": [
      "Paediatric Physiotherapy Service",
      "Children's Development Centre",
      "Linfield",
      "25 August 2026"
    ],
    "salutation": "Dear Colleague,",
    "re": "Re: Master Leo Sutcliffe, 18 months, gross motor delay",
    "body": [
      "I am writing to refer Leo, aged 18 months, for specialist developmental assessment and ongoing physiotherapy for gross motor delay first raised by his health visitor at twelve months.",
      "Leo sat independently at nine months and has bottom-shuffled since ten months, but he is not yet pulling to stand or cruising. On assessment, he has low central tone, delayed protective reactions with no forward parachute, persistent W-sitting and reduced weight-bearing in supported standing. His ankles are held in slight plantarflexion and his knees are mildly hypermobile. His hips, spine, fine motor and social skills are normal, and growth is on the 50th centile. There has been no regression.",
      "After two sessions of positioning advice and a home programme, he now bears weight for about twenty seconds. However, this pattern of delay needs specialist monitoring, and he may need an orthotic review. In my view, a paediatrician's opinion on the cause of his low tone is indicated, so his GP has been asked to arrange this and to check his creatine kinase.",
      "His mother is anxious and has asked whether this is cerebral palsy; I have explained that this requires specialist assessment. She has agreed to this referral."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Community Physiotherapy"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The first sentence states who is referred, for what and why, so the receiving team can triage the letter at once.",
      "selection": "The milestones, tone, protective reactions, lower-limb loading and ankle position are kept because they show why specialist input is needed; normal hips, spine, growth and fine motor skills are kept briefly as relevant negatives. Pets, shoes, parking, nursery activities, eczema and the grandmother's diabetes are left out as irrelevant to the assessment.",
      "organisation": "Request, then history and examination findings, then response to treatment with the further steps already suggested or taken, and finally the mother's concern and consent.",
      "tone": "Professional and objective between physiotherapists, with a careful, non-diagnostic description of the mother's worry about cerebral palsy."
    },
    "notesUsed": [
      "18 months; gross motor delay raised by health visitor at twelve months",
      "sits since nine months; bottom-shuffles since ten months; not pulling to stand or cruising",
      "low central tone; no forward parachute; W-sitting; reduced weight-bearing",
      "slight plantarflexion at ankles; mild knee hypermobility",
      "hips and spine normal; fine motor and social skills age-appropriate; 50th centile",
      "no regression",
      "two sessions; home programme; weight-bearing about twenty seconds",
      "specialist monitoring; orthotic review; paediatrician opinion on low tone",
      "GP to check creatine kinase and refer to a community paediatrician",
      "mother asked about cerebral palsy; told it needs specialist assessment; agreed to referral"
    ],
    "notesLeftOut": [
      "rolling, smiling and head control ages — early milestones were normal and are in the red book",
      "birth weight, newborn checks, immunisations, bronchiolitis, eczema — unremarkable history",
      "sister and father walking late, grandmother's diabetes — sister's walking age noted in notes but not decisive; the team can take a full family history",
      "dog, shoes, parking, nursery, flat with garden, father's shifts — social detail not needed",
      "session length and specific play activities — the receiving team will set their own programme",
      "no interpreter needed — not a barrier, so not mentioned",
      "mother following the programme consistently — trimmed for length"
    ],
    "safety": [
      {
        "point": "Creatine kinase requested via GP (boy not walking at 18 months)",
        "where": "paragraph 3"
      },
      {
        "point": "Possible orthotic need for ankle plantarflexion",
        "where": "paragraph 3"
      },
      {
        "point": "Paediatrician opinion on cause of low tone; GP asked to refer, so the medical referral is not lost",
        "where": "paragraph 3"
      },
      {
        "point": "No regression of skills",
        "where": "paragraph 2"
      },
      {
        "point": "Mother's concern about cerebral palsy; not yet addressed by a specialist",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-physiotherapy-referral-to-rheumatologist-for-suspected-inflammatory-arthritis": {
    "header": [
      "Dr Marcus Hale",
      "Consultant Rheumatologist",
      "City General Hospital",
      "30 August 2026"
    ],
    "salutation": "Dear Dr Hale,",
    "re": "Re: Mrs Lillian Osei, 38, suspected inflammatory arthritis",
    "body": [
      "I am writing to request an urgent rheumatology assessment for Mrs Osei, as her presentation suggests inflammatory arthritis rather than the overuse condition for which she was referred. In line with NICE NG100, I would be grateful if she could be seen within three weeks.",
      "She has symmetrical swelling of the second and third metacarpophalangeal joints and several proximal interphalangeal joints in both hands, sparing the distal joints, and both wrists are swollen and warm. The squeeze test is positive bilaterally, and grip strength is 9 kg right and 8 kg left. Morning stiffness lasts over ninety minutes daily. She also reports four months of marked fatigue and two episodes of left knee swelling in three months.",
      "Despite three sessions of joint protection, night splints and graded exercise, the response has been minimal. She takes paracetamol 1 g four times daily and naproxen 250 mg twice daily, with limited benefit, and has had no corticosteroid or disease-modifying treatment. Her GP has been asked to review gastroprotection. She has no known allergies; codeine causes nausea.",
      "She struggles with buttons, jars and writing, but still works full time. I would welcome serology and imaging, and will continue splinting meanwhile."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Physiotherapy Department"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The writer states the request and the reason for urgency together, and names the guideline and target time, because the reader must reclassify a case referred as overuse.",
      "selection": "The features that point to synovitis are kept: symmetrical small-joint swelling, warm wrists, a positive squeeze test, prolonged morning stiffness, fatigue and knee swelling, with the lack of response and current drugs. Normal large joints, the list of absent symptoms, camping, choir, baking and old injuries are left out.",
      "organisation": "Request and urgency, then the inflammatory findings, then treatment and medication, then functional impact and the specific investigations requested.",
      "tone": "Formal and concise, clinically reasoned for a consultant, without overstating a diagnosis the physiotherapist cannot make."
    },
    "notesUsed": [
      "referred as overuse; pattern suggests inflammation",
      "NICE NG100 urgent referral; seen within three weeks",
      "symmetrical MCP 2 and 3 and PIP swelling; DIP spared; wrists swollen and warm",
      "squeeze test positive; grip 9 kg right, 8 kg left",
      "morning stiffness over ninety minutes, easing with movement",
      "fatigue four months; left knee swelling twice in three months",
      "three sessions; minimal response",
      "paracetamol 1 g four times daily; naproxen 250 mg twice daily, limited benefit",
      "no corticosteroid or DMARD; GP asked to review gastroprotection",
      "no known allergies; codeine intolerance",
      "buttons, jars, writing; still working full time",
      "serology and imaging; splinting continues"
    ],
    "notesLeftOut": [
      "no nodules, nail changes, psoriasis, Raynaud, systemic or sicca symptoms — negatives the consultant will re-check",
      "elbows, shoulders, hips, ankles, cervical spine normal — not affecting the decision",
      "pain scores and wrist range — grip and stiffness already show severity",
      "pregnancies, appendicectomy, ankle sprain, hay fever, mother's thyroid — unrelated history",
      "camping, choir, baking, children, husband, parking, eye test — social detail not needed",
      "named antibody tests — left to the rheumatologist's judgement in the letter",
      "first session date, 24 July — trimmed for length"
    ],
    "safety": [
      {
        "point": "Urgent referral: persistent small-joint synovitis, seen within three weeks",
        "where": "paragraph 1"
      },
      {
        "point": "Current medication: paracetamol and naproxen; no corticosteroid or DMARD; GP reviewing gastroprotection",
        "where": "paragraph 3"
      },
      {
        "point": "Codeine intolerance (nausea); no known allergies",
        "where": "paragraph 3"
      },
      {
        "point": "Splinting continues pending review (follow-up)",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-physiotherapy-referral-to-sports-medicine-for-suspected-acl-deficiency": {
    "header": [
      "Dr Naomi Forsythe",
      "Consultant in Sport and Exercise Medicine",
      "Pinehurst Clinic",
      "29 August 2026"
    ],
    "salutation": "Dear Dr Forsythe,",
    "re": "Re: Mr Callum Reyes, 21, suspected anterior cruciate ligament deficiency, right knee",
    "body": [
      "I am writing to refer Mr Reyes, a semi-professional footballer, for an MRI of his right knee and a surgical opinion regarding anterior cruciate ligament reconstruction, as he has persistent rotational instability.",
      "On 28 June 2026, he injured the knee in a non-contact pivot, with an audible pop and swelling within one hour, suggesting haemarthrosis. On review today, the Lachman test is positive, grade 2, with a soft end feel, the anterior drawer test is positive, and the pivot shift causes marked apprehension. McMurray's test is negative, but a meniscal tear cannot be excluded clinically.",
      "Following eight sessions of strengthening and proprioceptive training, his range is full and quadriceps wasting has reduced to 2 cm. His single hop for distance has improved to 82 per cent of the left side, which remains below the 90 per cent threshold. However, the knee has given way five times on cutting and rotation, and each episode risks further meniscal and chondral damage.",
      "He has been advised to avoid all pivoting sport, and I will continue prehabilitation, since preoperative quadriceps strength predicts the outcome. His club has asked for a timeline, and he would like full information before deciding on surgery."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Physiotherapy Clinic"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The opening names the patient's sport, the two things requested (MRI and surgical opinion) and the reason, so the consultant knows the question immediately.",
      "selection": "The mechanism, haemarthrosis, positive laxity tests, the possible meniscal tear, the hop deficit and the giving-way episodes are kept as the case for reconstruction. Normal collateral, patellofemoral and neurovascular findings, the old ankle sprain, pets, golf, the season ticket and the parking question are left out.",
      "organisation": "Request, then injury and examination, then rehabilitation progress contrasted with continuing instability, then interim advice and the patient's wishes.",
      "tone": "Professional and evidence-based for a sports physician, noting the club's request neutrally without sharing anything beyond the patient's own wishes."
    },
    "notesUsed": [
      "semi-professional footballer; MRI and surgical opinion on ACL reconstruction",
      "28 June 2026 non-contact pivot; pop; swelling within one hour; haemarthrosis",
      "Lachman positive grade 2, soft end feel; anterior drawer positive; pivot shift apprehension",
      "McMurray negative but meniscal tear not excluded",
      "eight sessions; full range; quadriceps wasting now 2 cm",
      "single hop 82 per cent, below 90 per cent threshold",
      "five giving-way episodes on cutting and rotation; risk of meniscal and chondral damage",
      "avoid pivoting sport; prehabilitation continues; quadriceps strength predicts outcome",
      "club asked for timeline; wants full information before surgery"
    ],
    "notesLeftOut": [
      "collateral ligaments, joint lines, patellofemoral joint, neurovascular status, left knee — normal, not changing the referral",
      "balance times, single-leg squat, LEFS scores, earlier hop and wasting values — the current values are enough",
      "crutches, pitch-side treatment, earlier effusion grade — superseded by current state",
      "left ankle sprain 2023, chickenpox, dental check — unrelated",
      "delivery work, coaching course, golf, parents, girlfriend, cat, season ticket, alcohol — social detail not needed",
      "club manager's telephone call — confidential; nothing shared without consent",
      "parking question — administrative"
    ],
    "safety": [
      {
        "point": "Avoid all pivoting sport until reviewed",
        "where": "paragraph 4"
      },
      {
        "point": "Possible meniscal tear not excluded clinically",
        "where": "paragraph 2"
      },
      {
        "point": "Each giving-way episode risks secondary meniscal and chondral damage",
        "where": "paragraph 3"
      },
      {
        "point": "Prehabilitation continues pending review (follow-up)",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-physiotherapy-transfer-to-cardiac-rehabilitation-after-coronary-bypass-surgery": {
    "header": [
      "Cardiac Rehabilitation Team",
      "Phase III Programme",
      "Harborough Hospital",
      "31 August 2026"
    ],
    "salutation": "Dear Colleagues,",
    "re": "Re: Mr Tomasz Wójcik, 64, coronary artery bypass graft on 25 August 2026",
    "body": [
      "I am writing to hand over Mr Wójcik, who underwent elective triple-vessel coronary artery bypass grafting on 25 August 2026, requesting enrolment in your programme for graded aerobic conditioning, education and risk-factor management.",
      "Recovery was straightforward apart from a brief, self-terminating episode of atrial fibrillation on day two, which has not recurred. His sternotomy is healing well and is stable, his chest is clear, and he coughs effectively with a sternal support cushion. He now walks 100 metres independently and climbs one flight of stairs, with his heart rate rising from 78 to 96 and recovering within three minutes, and oxygen saturation of 94 per cent on exertion, without chest pain or dizziness. His vein harvest site is slightly swollen; elevation is advised.",
      "He takes aspirin 75 mg, bisoprolol 2.5 mg and ramipril 2.5 mg daily, and atorvastatin 80 mg at night. Preoperative ejection fraction was 52 per cent.",
      "Sternal precautions continue for a further six weeks: no lifting over 5 kg, no pushing or pulling and no driving until reviewed. He has a home walking programme starting at ten minutes twice daily. An ex-smoker, he is keen to return to gardening and his walking group."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Cardiothoracic Ward"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The handover opens with the operation, its date and exactly what the programme is asked to provide.",
      "selection": "Exercise response, rhythm history, wound status, medication affecting heart-rate response, ejection fraction and sternal precautions are kept because the rehabilitation team must prescribe exercise safely. Old operations, the grandchildren, speedway, the newspaper and the television request are left out.",
      "organisation": "Request, then inpatient course and current exercise tolerance, then medication and cardiac function, then precautions, the interim plan and motivation.",
      "tone": "Clear and factual, colleague to colleague, with precautions stated as firm instructions."
    },
    "notesUsed": [
      "elective triple-vessel CABG 25 August 2026",
      "phase III: graded aerobic conditioning, education, risk-factor management",
      "self-terminating AF day two, not recurred",
      "sternotomy healing, stable; chest clear; effective cough with cushion",
      "100 metres and one flight; HR 78 to 96, back within three minutes; SpO2 94 per cent on exertion",
      "no chest pain or dizziness",
      "vein harvest site slightly swollen; elevation advised",
      "aspirin 75 mg, bisoprolol 2.5 mg, ramipril 2.5 mg daily; atorvastatin 80 mg at night",
      "ejection fraction 52 per cent",
      "sternal precautions six weeks; no lifting over 5 kg; no pushing or pulling; no driving until reviewed",
      "home walking ten minutes twice daily",
      "ex-smoker; gardening; walking group"
    ],
    "notesLeftOut": [
      "graft details, drain and pacing-wire removal, ICU stay — surgical course already complete",
      "blood pressures, Borg, pain scores, spirometry volumes — normal responses summarised by heart rate and saturation",
      "hernia, cataract, tonsillectomy, wrist fracture, bowel screening — unrelated",
      "Polish background, no interpreter needed — not a barrier",
      "grandchildren, christening, speedway, newspaper, greenhouse, dog — social detail not needed",
      "operation note and television requests — handled by the ward"
    ],
    "safety": [
      {
        "point": "Sternal precautions for six more weeks: no lifting over 5 kg, no pushing or pulling, no driving until reviewed",
        "where": "paragraph 4"
      },
      {
        "point": "Self-terminating atrial fibrillation on day two",
        "where": "paragraph 2"
      },
      {
        "point": "Bisoprolol blunts heart-rate response; full medication list",
        "where": "paragraph 3"
      },
      {
        "point": "Swollen vein harvest site; elevation advised",
        "where": "paragraph 2"
      },
      {
        "point": "Home walking programme in the interim",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-physiotherapy-transfer-to-community-respiratory-team-after-copd-exacerbation": {
    "header": [
      "Community Respiratory Physiotherapy Team",
      "Respiratory Physiotherapy",
      "Northgate Health Centre",
      "1 September 2026"
    ],
    "salutation": "Dear Colleagues,",
    "re": "Re: Mr George Adeyemi, 71, discharge after an exacerbation of COPD",
    "body": [
      "I am writing to hand over Mr Adeyemi, who is being discharged on 1 September 2026 after an infective exacerbation of chronic obstructive pulmonary disease, and to request home-based pulmonary rehabilitation to return him to his baseline.",
      "This was his second admission in twelve months, and his FEV1 is 48 per cent predicted. On admission he had right basal consolidation and needed oxygen. His chest is now much clearer, with scant mucoid sputum, and he performs the active cycle of breathing technique independently. On air, his saturation is 93 per cent at rest, dropping to 89 per cent on walking and recovering within two minutes.",
      "He walks 30 metres with a wheeled frame and one rest, compared with about 200 metres independently before admission. He rests halfway up his eight stairs at home, and his bedroom and bathroom are upstairs.",
      "He uses tiotropium once daily and salbutamol as required, with corrected inhaler technique. He is completing oral amoxicillin, with two days remaining. He has no home oxygen.",
      "He has no rescue pack or action plan, so please arrange these and check his vaccination status. His wife can prompt his breathing technique."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Respiratory Ward"
    ],
    "bodyWords": 191,
    "commentary": {
      "opening": "The first paragraph gives the discharge date, the diagnosis and the service requested, so the team knows when and why to visit.",
      "selection": "Disease severity, readmission, current chest status, exertional desaturation, the gap between current and baseline mobility, stairs, medication and the missing rescue pack are kept. The choir, crosswords, coach holiday, television rental, old knee replacement and gout are left out.",
      "organisation": "Request, then respiratory status, then mobility and the home environment, then medication, and finally the self-management gaps and family support.",
      "tone": "Practical and professional between physiotherapists, ending with clear, polite requests."
    },
    "notesUsed": [
      "discharge 1 September 2026; infective exacerbation of COPD",
      "second admission in twelve months; FEV1 48 per cent predicted",
      "right basal consolidation; oxygen on admission",
      "sputum now scant and mucoid; ACBT independent",
      "SpO2 93 per cent at rest on air, 89 per cent on walking, recovers within two minutes",
      "30 metres with wheeled frame, one rest; baseline about 200 metres",
      "eight stairs, rest halfway; bedroom and bathroom upstairs",
      "tiotropium once daily; salbutamol as required; technique corrected",
      "amoxicillin, two days remaining; no home oxygen",
      "no rescue pack or action plan; vaccination status to check",
      "wife supports him and knows ACBT"
    ],
    "notesLeftOut": [
      "admission respiratory rate, heart rate, temperature, baseline MRC grade 3 — superseded by current status and the baseline walking distance",
      "previous admission in January and pulmonary rehabilitation in 2019 — readmission count is enough",
      "smoking history — stopped in 2015, no current action",
      "knee replacement, gout, cataracts, hearing aid, bowel screening — not affecting rehabilitation",
      "daughter, grandchildren, choir, crosswords, allotment, bus career — social detail not needed",
      "coach holiday, television rental, evening visiting — already answered or administrative"
    ],
    "safety": [
      {
        "point": "Desaturates to 89 per cent on walking, recovering in two minutes; no home oxygen",
        "where": "paragraph 2"
      },
      {
        "point": "Complete amoxicillin course, two days remaining",
        "where": "paragraph 4"
      },
      {
        "point": "Continue tiotropium and salbutamol with corrected technique",
        "where": "paragraph 4"
      },
      {
        "point": "No rescue pack or action plan; vaccination status to check",
        "where": "paragraph 5"
      },
      {
        "point": "Stairs to bedroom and bathroom need a rest halfway (falls and breathlessness risk)",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-physiotherapy-transfer-to-neuro-rehabilitation-unit-after-guillain-barre-syndrome": {
    "header": [
      "Senior Physiotherapist",
      "Regional Neuro-rehabilitation Unit",
      "Westbrook Hospital",
      "31 August 2026"
    ],
    "salutation": "Dear Colleague,",
    "re": "Re: Ms Hannah Choi, 33, Guillain-Barré syndrome",
    "body": [
      "I am writing to hand over Ms Choi, who is in the early recovery phase of Guillain-Barré syndrome, for intensive multidisciplinary rehabilitation: strengthening, standing practice, gait re-education and fatigue management.",
      "She was admitted on 10 August 2026, ventilated for respiratory muscle weakness, treated with intravenous immunoglobulin and extubated on 23 August. Her vital capacity is now 2.6 litres and stable, she has no bulbar weakness, and her swallow is normal.",
      "Lower-limb power is 2 out of 5 distally and 3 out of 5 proximally, and her upper limbs are 3 to 4 out of 5. She sits unsupported for ten minutes with supervision, stands for thirty seconds with two assistants and a frame, and transfers by slide board with two assistants. She fatigues rapidly, so sessions are limited to fifteen minutes, and pacing is essential because overactivity may be counterproductive.",
      "Night ankle splints prevent contracture, but neuropathic foot pain limits her to about six hours; gabapentin is being titrated. She also takes prophylactic enoxaparin.",
      "Her mood is low; she wishes to help set her goals. She lives alone in a first-floor flat without a lift, so an occupational therapy home assessment will be needed."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Physiotherapist",
      "Neurology Ward"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "The writer states the diagnosis, the recovery phase and the specific rehabilitation requested in one opening sentence.",
      "selection": "Respiratory and bulbar status, power, balance, transfers, fatigue, the pacing warning, splints, pain, medication, mood and the home barrier are kept because they shape the rehabilitation plan. The cat, balcony, laptop, visiting hours, old wrist fracture and wisdom teeth are left out.",
      "organisation": "Request, then the acute course and current respiratory safety, then function and pacing, then splinting and medication, and finally mood, goals and discharge planning.",
      "tone": "Professional and collegial between physiotherapists, with a sensitive reference to her low mood and wish to be involved."
    },
    "notesUsed": [
      "early recovery GBS; strengthening, standing, gait re-education, fatigue management",
      "admitted 10 August 2026; ventilated; IV immunoglobulin; extubated 23 August",
      "vital capacity 2.6 litres, stable; no bulbar weakness; normal swallow",
      "lower limb 2 out of 5 distal, 3 out of 5 proximal; upper limbs 3 to 4 out of 5",
      "sitting ten minutes with supervision; standing thirty seconds with two and a frame; slide-board transfers with two",
      "fatigue; fifteen-minute sessions; pacing; overactivity counterproductive",
      "night ankle splints; foot pain limits to about six hours; gabapentin titrated",
      "prophylactic enoxaparin",
      "low mood; wants to set goals",
      "lives alone, first-floor flat, no lift; OT home assessment"
    ],
    "notesLeftOut": [
      "diarrhoeal illness, nerve conduction date, immunoglobulin duration — diagnosis already established",
      "reflexes, sensory level, grip strength, facial strength — power and function summarise her deficit",
      "catheter removal and chest physiotherapy stopped — resolved issues",
      "wrist fracture, wisdom teeth, cervical screening — unrelated",
      "parents, sister, neighbour, cat, balcony, painting, laptop, running — social detail not needed now",
      "visiting hours and parents' wish to meet the team — administrative; can be arranged on arrival",
      "skin intact, pressure care — no current problem"
    ],
    "safety": [
      {
        "point": "Respiratory status: vital capacity 2.6 litres stable; no bulbar weakness",
        "where": "paragraph 2"
      },
      {
        "point": "Rapid fatigue; avoid overactivity, build pacing into programme",
        "where": "paragraph 3"
      },
      {
        "point": "Transfers need two assistants",
        "where": "paragraph 3"
      },
      {
        "point": "Night splints to prevent contracture; neuropathic pain limits tolerance",
        "where": "paragraph 4"
      },
      {
        "point": "Prophylactic enoxaparin and gabapentin titration continue",
        "where": "paragraph 4"
      },
      {
        "point": "Low mood",
        "where": "paragraph 5"
      },
      {
        "point": "Home access barrier: OT home assessment needed before discharge",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-dentistry-referral-to-oral-surgery-recurrent-pericoronitis": {
    "header": [
      "Ms Delphine Achterberg-Nwokedi",
      "Consultant Oral Surgeon",
      "Kelbury Dental Hospital",
      "14 April 2025"
    ],
    "salutation": "Dear Ms Achterberg-Nwokedi,",
    "re": "Re: Mr Joaquin Fenwick-Adeyemi, aged 24, recurrent pericoronitis of the lower right third molar",
    "body": [
      "I am writing to request your assessment and management of Mr Fenwick-Adeyemi's lower right third molar, which has caused four episodes of pericoronitis in seven months. He can attend at short notice, including for a cancellation.",
      "Today's episode is the most severe: mouth opening is 22 mm, temperature 37.9, and there is a tender submandibular node with pus beneath the operculum. He has not managed solid food for three days. There is no floor-of-mouth swelling, dysphagia or breathing difficulty. I irrigated with chlorhexidine and prescribed metronidazole 400 mg three times daily for three days. He knows to seek emergency care at once if any of these develop or he cannot open his mouth more than a finger's width.",
      "The enclosed orthopantomogram shows a distoangular impaction, with the inferior dental canal crossing the apical third of the roots, loss of its white line and root darkening, which is why I am referring rather than treating here. He understands the risk of nerve injury and that a coronectomy may be advised.",
      "I would also value your view on the upper right third molar, which traumatises the operculum. He is fit and well, with no medication or known allergies."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Dental Practitioner",
      "Kelbury Dental Practice"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The request and its urgency come first: the surgeon learns at once what is wanted, why (four episodes in seven months) and that the patient can take a cancellation.",
      "selection": "Today's severity, the airway red flags and the emergency advice, the current antibiotic and the radiographic signs of nerve proximity are kept. The detail of each earlier episode, the plaque score and the left third molars are left out because they do not change the surgeon's decision.",
      "organisation": "Request, then today's episode and treatment with safety-netting, then the radiograph that explains the referral, then the second question and the medical history.",
      "tone": "Concise and collegial between dental professionals, with the clinical signs stated plainly so that the surgeon can triage."
    },
    "notesUsed": [
      "four episodes in seven months",
      "earliest appointment; short notice; cancellation",
      "mouth opening 22 mm, temperature 37.9, tender node, pus under operculum",
      "no solid food for three days",
      "no floor-of-mouth swelling, no dysphagia, no breathing difficulty",
      "chlorhexidine irrigation; metronidazole 400 mg three times daily for three days",
      "emergency advice: swelling under tongue, swallowing, breathing, opening less than a finger's width",
      "OPG: distoangular, IDC crosses apical third, loss of white line, root darkening",
      "nerve risk and possible coronectomy discussed",
      "upper right third molar traumatising operculum",
      "fit and well, no medication, no known allergies"
    ],
    "notesLeftOut": [
      "details of the first three episodes, their mouth openings and the earlier antibiotic — the trend is summarised as four episodes; today's findings matter most",
      "extra-oral swelling without fluctuance — covered by the absence of spreading-infection signs",
      "lower left and upper left third molars — asymptomatic; the patient's question about the left is for the clinic to answer",
      "plaque score 14% and good oral hygiene — not relevant to the decision to remove",
      "no previous general anaesthetic, no family history — the surgeon will take this at assessment",
      "work and study, recovery time question — social detail he can raise himself",
      "sound distal surface of the second molar, no cyst — negative findings visible on the enclosed film"
    ],
    "safety": [
      {
        "point": "Signs of severe infection today: trismus to 22 mm, temperature 37.9, tender node, pus",
        "where": "paragraph 2"
      },
      {
        "point": "No airway or spreading-infection signs at present; emergency advice given if they develop",
        "where": "paragraph 2"
      },
      {
        "point": "Currently taking metronidazole 400 mg three times daily for three days",
        "where": "paragraph 2"
      },
      {
        "point": "Close relationship of the inferior dental canal to the roots; nerve injury risk discussed",
        "where": "paragraph 3"
      },
      {
        "point": "No known allergies, no medication",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-dentistry-advice-letter-to-a-patient-living-with-new-complete-dentures": {
    "header": [
      "Mr Cornelius Baptiste-Oyelowo",
      "Patient",
      "Oakmere",
      "22 May 2024"
    ],
    "salutation": "Dear Mr Baptiste-Oyelowo,",
    "re": "Re: Your new complete dentures, fitted on 22 May 2024",
    "body": [
      "I am writing to explain what to expect from your new dentures and how to care for them. Most importantly, please contact us straight away if anything rubs, rather than waiting for your next appointment.",
      "At first you may have extra saliva and your mouth may feel full. A slight lisp is normal and usually settles within one to two weeks; reading aloud at home helps. Sore spots are likely in the first fortnight, but please never adjust the dentures yourself. Wear them for a few hours before an easing appointment so we can see the sore. Your lower denture will never feel as firm as the upper because of your gum shape, not a fault. A little fixative may help.",
      "Start with soft food cut small, chewing at the back on both sides together, never with your front teeth. Apples are fine cut into pieces. Always test hot drinks first, as you will feel the heat less.",
      "Clean the dentures after meals over a bowl of water, using your large-handled brush and soap rather than toothpaste. Leave them out overnight in water to rest your gums and prevent infection.",
      "Your next appointments are 29 May and 19 June."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Oakmere Dental Practice"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The letter is to the patient, so it opens by saying simply what it is for and gives the single most important instruction — report rubbing at once — in the first paragraph.",
      "selection": "Only what he must do or expect at home is kept: early sensations, sore spots and not adjusting the denture, eating technique, hot drinks, cleaning and leaving the dentures out at night. Clinical findings at the fit and the treatment history are left out because he does not need them to manage.",
      "organisation": "Purpose, then what to expect in the first weeks, then eating, then cleaning and night-time care, then the appointments.",
      "tone": "Warm, reassuring plain English, with no clinical terms, addressing him directly as 'you'."
    },
    "notesUsed": [
      "contact at once if something rubs",
      "extra saliva, fullness for the first days",
      "lisp settles in one to two weeks; reading aloud helps",
      "sore spots in the first fortnight; do not adjust; wear before easing appointment",
      "lower will never feel as firm as the upper; ridge shape; fixative may help",
      "soft food cut small; chew at back on both sides; do not bite with the front",
      "apple cut into pieces",
      "test hot drinks",
      "clean after meals over water; soap not toothpaste; large-handled brush",
      "out overnight in water; reduces fungal infection",
      "appointments 29 May and 19 June"
    ],
    "notesLeftOut": [
      "extraction date and fourteen weeks without lower teeth — history he already knows",
      "five appointments and the difficult lower impression — not needed for home care",
      "detailed fit assessment (retention, border extensions, palatal seal) — clinical detail for the record",
      "daily soaking solution and brushing gums each morning — already demonstrated; omitted to keep the letter focused",
      "annual review and future replacement — discussed at the fit; can follow at the review",
      "wearing them on the night his grandchildren stay — answered in person; the general rule is stated",
      "hospital appointment on 5 June — advice already given in person"
    ],
    "safety": [
      {
        "point": "Contact the practice at once if anything rubs",
        "where": "paragraph 1"
      },
      {
        "point": "Never adjust the dentures himself",
        "where": "paragraph 2"
      },
      {
        "point": "Test hot drinks before drinking (reduced heat sensation)",
        "where": "paragraph 3"
      },
      {
        "point": "Leave dentures out overnight in water to prevent infection",
        "where": "paragraph 4"
      },
      {
        "point": "Follow-up appointments 29 May and 19 June",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-dentistry-referral-to-the-endodontist-a-failed-root-canal-treatment": {
    "header": [
      "Dr Marisol Nkemdirim-Hartley",
      "Specialist in Endodontics",
      "The Ashcombe Clinic",
      "4 April 2025"
    ],
    "salutation": "Dear Dr Nkemdirim-Hartley,",
    "re": "Re: Mrs Verity Oyelaran-Standish, aged 41, persistent periapical infection of the upper right first molar",
    "body": [
      "I am writing to request your assessment of Mrs Oyelaran-Standish for non-surgical retreatment of her upper right first molar, including an untreated second mesiobuccal canal, and your advice on timing, as she is 14 weeks pregnant.",
      "The tooth was root-treated and crowned elsewhere in 2022 and has been tender to biting since August 2024. An intermittent buccal swelling discharges with a bad taste. There is no facial swelling or fever, and she has taken no antibiotics.",
      "Today the tooth was tender to percussion, with 2 to 3 mm probing depths and no mobility. A patent buccal sinus tract was traced with gutta-percha to the mesiobuccal apex. The enclosed periapical shows the mesiobuccal filling approximately 4 mm short with voids, and a 7 mm radiolucency, increased from approximately 4 mm in January. The other canals appear adequate, with no fracture, perforation or post.",
      "The crown is sound, and she accepts the risk of access through it. Surgery and extraction were discussed, but she is strongly motivated to save the tooth, understanding that success is not guaranteed.",
      "She is otherwise fit and well, with no medication or known allergies, and can attend on Mondays and Thursdays."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Dental Practitioner",
      "Ashcombe Dental Practice"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "The first sentence names the treatment wanted, the specific canal, and the pregnancy question, so the specialist knows both requests before reading the evidence.",
      "selection": "The history of failure, the sinus tract traced to the mesiobuccal root, the short filling, the enlarging lesion and restorability are kept because they justify retreatment. The other two root-treated teeth, her attendance record and the question of whether the first treatment was poor are left out as outside the referral.",
      "organisation": "Request, then history and symptoms, then examination and radiographs, then restorability and her wishes, then medical history and availability.",
      "tone": "Precise and professional between dentists, neutral about the previous practitioner's work."
    },
    "notesUsed": [
      "non-surgical retreatment; untreated MB2; advice on timing",
      "14 weeks pregnant; asked whether to wait",
      "root-treated and crowned elsewhere in 2022; tender since August 2024",
      "intermittent swelling with bad taste; no facial swelling, fever; no antibiotics",
      "TTP, probing 2 to 3 mm, no mobility",
      "sinus tract traced to MB apex",
      "MB filling approx. 4 mm short with voids; radiolucency 7 mm from approx. 4 mm",
      "other canals adequate; no fracture, perforation, post",
      "crown sound; accepts risk to crown",
      "surgery and extraction discussed; wants to save tooth; no guarantee",
      "fit and well, no medication, no allergies",
      "Mondays and Thursdays"
    ],
    "notesLeftOut": [
      "the two other root-treated teeth — asymptomatic and explicitly not part of the referral",
      "regular attendance since 2014, plaque score 8%, no caries — good prognosis indicators but not needed for the decision",
      "whether the 2022 treatment was done badly — a separate question, already answered with her",
      "adjacent teeth responsive to sensibility testing — supports the diagnosis but is a routine negative",
      "costs of an implant or bridge — not relevant to a retreatment referral",
      "no parafunction or cracked teeth — negative findings"
    ],
    "safety": [
      {
        "point": "14 weeks pregnant — relevant to radiographs and timing",
        "where": "paragraph 1"
      },
      {
        "point": "Enlarging periapical lesion with an active sinus tract",
        "where": "paragraph 3"
      },
      {
        "point": "No facial swelling or fever; no antibiotics taken",
        "where": "paragraph 2"
      },
      {
        "point": "No known allergies, no medication",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-dentistry-letter-to-the-general-practitioner-suspected-obstructive-sleep-apnoea": {
    "header": [
      "Dr Marcus Ferreira-Lindqvist",
      "General Practitioner",
      "The Coldharbour Practice",
      "25 June 2025"
    ],
    "salutation": "Dear Dr Ferreira-Lindqvist,",
    "re": "Re: Mr Reuben Oyelowo-Kaczmarek, aged 46, suspected obstructive sleep apnoea",
    "body": [
      "I am writing to request your assessment of Mr Oyelowo-Kaczmarek for suspected obstructive sleep apnoea, with referral to the sleep service as you think appropriate. As he is a long-distance heavy goods vehicle driver, I would also value your view on whether he should notify the DVLA now.",
      "Routine examination showed moderate to severe tooth wear, clenching signs and tender, enlarged masseters. His partner has witnessed breathing pauses followed by gasping, and reports loud nightly snoring. He wakes unrefreshed with morning headaches, and his Epworth score is 16 out of 24. He has dozed at traffic lights twice in three months, though not while moving.",
      "His reported body mass index is about 38, and his blood pressure was 152/94, then 148/92 on repeat. He drinks four or five pints on three evenings a week and has used a decongestant spray daily for over a year.",
      "I have advised him not to drive, including at work, until he has been assessed, and have recorded this. I have not made a mandibular advancement device or a protective upper splint, but would gladly make the former if the sleep service considers it suitable. He is home on Wednesdays and at weekends."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Dental Practitioner",
      "Coldharbour Dental Practice"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The request and the driving question come first, because a sleepy professional driver is the safety issue that makes this letter urgent.",
      "selection": "The witnessed apnoeas, the Epworth score, dozing at the wheel, body mass index, blood pressure, alcohol and decongestant use are kept as the GP needs them. The detailed dental wear findings and joint examination are reduced to one line because they matter to the dentist, not the doctor.",
      "organisation": "Request, then the dental clue and the sleep history, then medical risk factors, then the advice given and the plan for any oral device.",
      "tone": "Clear and collaborative, deferring the diagnosis and the licensing question to the doctor."
    },
    "notesUsed": [
      "assessment for OSA, sleep service referral",
      "HGV driver; DVLA question",
      "tooth wear, clenching, tender hypertrophied masseters",
      "witnessed apnoeas with gasp; loud nightly snoring",
      "unrefreshed, morning headaches; Epworth 16 out of 24",
      "dozed at traffic lights twice in three months; not while moving",
      "BMI about 38; BP 152/94 and 148/92",
      "alcohol on three evenings a week; daily decongestant over a year",
      "advised not to drive, recorded",
      "no MAD made; protective splint deferred; MAD later if sleep service agrees",
      "home Wednesdays and weekends"
    ],
    "notesLeftOut": [
      "detailed wear pattern, dentine exposure, vertical dimension, fractured crowns — dental detail not needed by the GP",
      "TMJ findings and mouth opening — normal, not relevant",
      "nocturia twice a night — omitted for length; the GP will take a full history",
      "collar size 18 inches — self-reported; BMI conveys the risk",
      "weight-loss question — he can raise it with the GP directly",
      "no smoking, no medication, no allergies — negative findings omitted for length",
      "the DVLA notification rule he was given — the GP's view on notifying now is requested instead"
    ],
    "safety": [
      {
        "point": "Professional driver who has dozed at the wheel; advised not to drive until assessed",
        "where": "paragraphs 2, 4"
      },
      {
        "point": "DVLA notification question for the GP",
        "where": "paragraph 1"
      },
      {
        "point": "Raised blood pressure 152/94 and 148/92",
        "where": "paragraph 3"
      },
      {
        "point": "No oral appliance made before diagnosis; upper splint deferred (may worsen OSA)",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-dentistry-referral-to-the-restorative-consultant-hypodontia-in-a-teenager": {
    "header": [
      "Dr Anneliese Prendergast-Obi",
      "Consultant in Restorative Dentistry",
      "Whitmoor Dental Hospital",
      "12 July 2025"
    ],
    "salutation": "Dear Dr Prendergast-Obi,",
    "re": "Re: Miss Ottoline Nwachukwu-Bergstrom, aged 16 years and 7 months, hypodontia",
    "body": [
      "I am writing to request a multidisciplinary restorative opinion for Miss Nwachukwu-Bergstrom on her upper lateral incisor spaces and retained lower deciduous molars, including the timing of any implants relative to her growth and the alternatives if implants are unsuitable. Advice on interim retention would also be welcome.",
      "Both upper lateral incisors and both lower second premolars are developmentally absent, with no other ectodermal features. Following fixed appliance treatment, the lateral spaces were opened to 6.5 mm on the right and 6.2 mm on the left, and her appliances were removed on 3 July 2025. The spaces are held only by full-time vacuum-formed retainers, with two prosthetic teeth on the upper.",
      "Oral hygiene is excellent, with no caries. The lateral incisor sites are narrow buccopalatally, especially on the left, and her smile line is high. The retained deciduous molars are infra-occluded by approximately 1.5 mm and 2 mm, with the right roots about one third resorbed. Her height has not changed for about eighteen months.",
      "She does not want a long-term removable appliance and understands that implants must await completed growth. Her mother has asked about funding. They prefer Thursdays in term time. Records are enclosed."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Dental Practitioner",
      "Whitmoor Dental Practice"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The opening sets out exactly which opinions are needed, because the request has several parts: the upper spaces, the deciduous molars, implant timing, alternatives and interim retention.",
      "selection": "The missing teeth, the space measurements, the fragile interim retention, the site and smile-line findings, the infra-occlusion and the growth history are kept because they shape the restorative plan. Occlusal measurements, the full list of enclosed records and the veneer question are left out or summarised.",
      "organisation": "Request, then diagnosis and orthodontic outcome, then current findings, then her wishes and practical arrangements.",
      "tone": "Professional and specific, while reflecting that the patient's own view matters."
    },
    "notesUsed": [
      "multidisciplinary opinion: lateral spaces, deciduous molars, implant timing, alternatives",
      "advice on retention",
      "upper laterals and lower second premolars absent; no ectodermal features",
      "spaces 6.5 mm right, 6.2 mm left",
      "debond 3 July 2025; vacuum-formed retainers full time with two prosthetic teeth",
      "excellent hygiene, no caries",
      "narrow sites, more so on left; high smile line",
      "infra-occlusion approx. 1.5 mm and 2 mm; right roots one third resorbed",
      "no height change for about eighteen months",
      "no long-term removable appliance; understands growth must finish",
      "mother asked about funding",
      "Thursdays in term time; records enclosed"
    ],
    "notesLeftOut": [
      "incisor relationship, overjet, overbite, midlines — satisfactory and in the enclosed orthodontic records",
      "no family history — does not change management",
      "options already discussed (resin-bonded bridge, implant later) — the consultant will advise on these",
      "veneers question — answered: no irreversible cosmetic treatment now",
      "holiday availability on any weekday — Thursdays given as the preference",
      "list of enclosed photographs, films and models — summarised as 'records are enclosed'"
    ],
    "safety": [
      {
        "point": "Spaces held only by an interim retainer — risk of relapse; retention advice requested",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Implants must await completed growth",
        "where": "paragraph 4"
      },
      {
        "point": "Progressive infra-occlusion and root resorption of the retained deciduous molars",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-dentistry-letter-to-the-community-dental-service-a-resident-who-cannot-attend-the-practice": {
    "header": [
      "Ms Kirsten Adeyemi-Halloran",
      "Team Lead, Community Dental Service",
      "Ravensbourne",
      "16 September 2025"
    ],
    "salutation": "Dear Ms Adeyemi-Halloran,",
    "re": "Re: Mrs Cecelia Mbatha-Fairclough, aged 86, Beechcroft Care Home",
    "body": [
      "I am writing to request a domiciliary assessment and treatment plan for Mrs Mbatha-Fairclough, with a best interests decision with her son, as she has pain and difficulty eating but cannot reach our first-floor practice. The priority is the retained root and the source of her pain.",
      "After a stroke in December 2024 she has dense right hemiplegia, needing a hoist, and her general practitioner judges her unfit for hospital transport. The enclosed photographs show heavy calculus, gingival inflammation and an apparently fractured upper left canine, leaving a retained root. She holds the left side of her face, resists mouth care and has not worn her upper denture since March. Weight has fallen from 58 kg to 51 kg. She had amoxicillin in July for facial swelling; I have not prescribed another without examination.",
      "She lacks capacity for dental decisions but signals yes and no by squeezing a hand. Her son holds lasting power of attorney and wishes to avoid a general anaesthetic unless unavoidable.",
      "She takes apixaban 2.5 mg twice daily, has dysphagia requiring an upright position, and has no known allergies. Any weekday morning suits the home; her son can attend on Wednesdays."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Dental Practitioner",
      "Ravensbourne Dental Practice"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The opening gives the request, the reason it must be domiciliary (access, not behaviour) and the clinical priority, so the team lead can triage at once.",
      "selection": "Mobility, the photographic findings, signs of pain, weight loss, the earlier antibiotic, capacity, the attorney's wishes, the anticoagulant and dysphagia are kept. The 2023 examination, the full medication list and the mouth-care advice already given are left out as less relevant to planning a visit.",
      "organisation": "Request and priority, then why she cannot attend and what has been seen, then capacity and consent, then medical risks and practical arrangements.",
      "tone": "Respectful and factual, conveying her distress without exaggeration."
    },
    "notesUsed": [
      "domiciliary assessment, best interests decision with son",
      "first-floor practice, no lift",
      "retained root and pain the priority",
      "stroke December 2024; dense right hemiplegia; hoist",
      "GP: unfit for hospital transport",
      "photographs: calculus, inflammation, fractured upper left canine, retained root",
      "holds left side of face; resists mouth care; denture not worn since March",
      "weight 58 kg to 51 kg",
      "amoxicillin in July; no further antibiotic without examination",
      "lacks capacity; yes/no by hand squeeze",
      "son holds LPA; avoid GA unless no alternative",
      "apixaban 2.5 mg twice daily; dysphagia, upright for oral care",
      "no known allergies",
      "weekday mornings; son on Wednesdays"
    ],
    "notesLeftOut": [
      "2023 findings (16 teeth, two restorations) — superseded by the 2025 photographs",
      "other medication (bisoprolol, ramipril, metformin, atorvastatin, laxatives) — apixaban is the one that alters dental treatment; full list available on request",
      "atrial fibrillation, diabetes, hypertension — implied by the medication and available in her records",
      "mouth care advice, high-fluoride toothpaste, non-foaming gel, refusal log — already in place at the home",
      "bad odour from the mouth — consistent with the findings already given",
      "soft diet since May — covered by difficulty eating and weight loss"
    ],
    "safety": [
      {
        "point": "Takes apixaban 2.5 mg twice daily — bleeding risk for extraction",
        "where": "paragraph 4"
      },
      {
        "point": "Dysphagia — must be upright for oral care",
        "where": "paragraph 4"
      },
      {
        "point": "Weight loss from 58 kg to 51 kg with pain on eating",
        "where": "paragraph 2"
      },
      {
        "point": "Lacks capacity; LPA holder's wish to avoid general anaesthetic",
        "where": "paragraph 3"
      },
      {
        "point": "Previous facial swelling treated with amoxicillin; no further antibiotic without examination",
        "where": "paragraph 2"
      }
    ]
  },
  "wri-dentistry-referral-to-oral-and-maxillofacial-surgery-a-non-healing-ulcer": {
    "header": [
      "Mr Callum Adeyemi-Rooke",
      "Consultant Oral and Maxillofacial Surgeon",
      "Barnhurst Hospital",
      "28 June 2025"
    ],
    "salutation": "Dear Mr Adeyemi-Rooke,",
    "re": "Re: Mr Gerald Nkemefuna-Weeks, aged 63, non-healing tongue ulcer — urgent suspected cancer referral",
    "body": [
      "I am writing to request urgent assessment and biopsy of Mr Nkemefuna-Weeks under the suspected cancer pathway, for a non-healing ulcer on the left lateral border of his tongue, present for twelve weeks, with a new neck node.",
      "The ulcer was initially attributed to a sharp edge on the lower left second molar, which I smoothed on 14 June. At review today it had not healed but had enlarged from 14 mm by 9 mm to 18 mm by 11 mm. It has rolled, everted margins, an indurated base and a surrounding red area, and does not move with the surrounding mucosa. A firm, mobile, non-tender left submandibular node of approximately 1.5 cm has appeared since 14 June. He has lost approximately five kilograms since Easter.",
      "He smokes twenty a day, approximately 45 pack-years, drinks approximately 60 units weekly, and his brother was treated for laryngeal cancer. He has type 2 diabetes and hypertension, takes no anticoagulant or antiplatelet, and has no known allergies.",
      "He has been told that cancer is one possibility and expects to be contacted within two weeks. Dated photographs with a probe for scale are enclosed. He can attend at any time."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Dental Practitioner",
      "Barnhurst Dental Practice"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The first sentence states the pathway, the action wanted and the two red flags (a long-standing ulcer and a new node), so the letter is triaged correctly.",
      "selection": "The failed trial of removing the irritant, the measured enlargement, the suspicious features, the new node, weight loss and risk factors are kept. Negative symptoms, dental and denture history and the smoking-cessation conversation are left out because they do not alter the urgency.",
      "organisation": "Request, then the history and clinical change over two weeks, then risk factors and medical history, then what he knows and the enclosures.",
      "tone": "Direct and factual, conveying urgency through evidence rather than emotive language."
    },
    "notesUsed": [
      "urgent suspected cancer pathway; assessment and biopsy",
      "left lateral border of tongue, twelve weeks",
      "sharp edge smoothed 14 June; not healed; enlarged",
      "14 mm by 9 mm to 18 mm by 11 mm",
      "rolled everted margins, indurated base, red change, fixed",
      "new 1.5 cm firm mobile non-tender left submandibular node",
      "five kilograms weight loss since Easter",
      "twenty a day, 45 pack-years; about 60 units weekly",
      "brother with laryngeal cancer",
      "type 2 diabetes, hypertension; no anticoagulant or antiplatelet; no allergies",
      "told cancer possible; contact within two weeks",
      "photographs with probe for scale; can attend any time"
    ],
    "notesLeftOut": [
      "pain 3 out of 10 and negative symptoms (no bleeding, numbness, dysphagia) — the surgeon will take a full history; they do not lower the urgency",
      "rest of the mucosal examination normal and mouth opening 42 mm — routine negatives",
      "dental history, denture, periodontal status — not relevant to the ulcer",
      "medication doses — no anticoagulant is the point that matters for biopsy",
      "smoking cessation advice and his question about stopping — already addressed",
      "wife present — not needed by the surgeon"
    ],
    "safety": [
      {
        "point": "Suspicious ulcer enlarging after the irritant was removed",
        "where": "paragraph 2"
      },
      {
        "point": "New left submandibular node since 14 June",
        "where": "paragraph 2"
      },
      {
        "point": "Weight loss of approximately five kilograms",
        "where": "paragraph 2"
      },
      {
        "point": "No anticoagulant or antiplatelet; no known allergies (relevant to biopsy)",
        "where": "paragraph 3"
      },
      {
        "point": "Patient aware cancer is possible and expects contact within two weeks",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-dentistry-referral-to-the-special-care-dental-service-a-patient-with-dementia": {
    "header": [
      "Dr Priyanka Achebe-Lomax",
      "Consultant in Special Care Dentistry",
      "Fernbrook Dental Hospital",
      "17 September 2025"
    ],
    "salutation": "Dear Dr Achebe-Lomax,",
    "re": "Re: Mrs Doreen Iwuchukwu-Barrett, aged 82, multiple carious teeth with probable infection",
    "body": [
      "I am writing to request assessment of Mrs Iwuchukwu-Barrett for dental treatment under sedation or general anaesthesia, as your service judges appropriate, with radiographs in the same episode and a best interests decision made with her son. She has moderate to severe Alzheimer's disease and could not accept treatment here.",
      "The upper right first molar has retained roots, is tender to percussion and has an 8 mm buccal swelling. The upper left second premolar has caries into the pulp chamber, and the lower left first molar a large cavity. She now eats only soft food, has lost 4 kg in three months and holds the right side of her face. Metronidazole from 8 September reduced the swelling, but her symptoms have returned. On 17 September she became frightened as the syringe approached, so treatment was stopped.",
      "She lacks capacity for this decision. Her son holds lasting power of attorney and is anxious about a general anaesthetic.",
      "Please note she takes apixaban 2.5 mg twice daily and has taken alendronic acid since 2016, which places her at higher risk of jaw osteonecrosis. She is allergic to penicillin. She is calmest before midday, and her son requests a morning appointment."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "General Dental Practitioner",
      "Fernbrook Dental Practice"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The opening states the treatment setting wanted, the radiographs and the best interests process, then explains in one sentence why general practice cannot proceed.",
      "selection": "The infected molar, the other carious teeth, weight loss, the antibiotic response, the failed attempt, capacity and the three drug issues (apixaban, alendronic acid, penicillin allergy) are kept. The detailed behaviour strategies and other medication are left out or shortened.",
      "organisation": "Request and reason, then dental findings and symptoms, then capacity and consent, then medical risks and the appointment preference.",
      "tone": "Compassionate yet clinical, describing her distress as fear rather than aggression."
    },
    "notesUsed": [
      "assessment for sedation or GA; radiographs same episode; best interests with son",
      "moderate to severe Alzheimer's; could not accept treatment",
      "upper right first molar: retained roots, TTP, 8 mm buccal swelling",
      "upper left second premolar into pulp; lower left first molar large cavity",
      "soft food only; 4 kg loss in three months; holding right side of face",
      "metronidazole 8 September; partial response; symptoms returned",
      "attempted LA 17 September stopped",
      "lacks capacity; son LPA; anxious about GA",
      "apixaban 2.5 mg twice daily; alendronic acid since 2016, higher MRONJ risk",
      "penicillin allergy",
      "better before midday; morning appointment"
    ],
    "notesLeftOut": [
      "calm room, one instruction at a time, distress at suction and light — useful but omitted for length; the service will assess her",
      "generalised plaque, calculus, grade 1 mobility, 18 teeth — background findings",
      "donepezil, bisoprolol, amlodipine doses — not directly relevant to dental planning",
      "atrial fibrillation, hypertension, osteoporosis — implied by the apixaban and alendronic acid",
      "pain relief question referred to the GP — already handled",
      "evening agitation attributed to dementia — covered by signs of facial pain"
    ],
    "safety": [
      {
        "point": "Apixaban 2.5 mg twice daily — bleeding risk at extraction",
        "where": "paragraph 4"
      },
      {
        "point": "Alendronic acid since 2016, over five years — higher risk of medication-related osteonecrosis of the jaw",
        "where": "paragraph 4"
      },
      {
        "point": "Penicillin allergy (rash)",
        "where": "paragraph 4"
      },
      {
        "point": "Recurrent infection after an antibiotic course, with weight loss",
        "where": "paragraph 2"
      },
      {
        "point": "Lacks capacity; LPA holder anxious about GA",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-dentistry-advice-letter-to-a-parent-after-a-child-s-dental-trauma": {
    "header": [
      "Mrs Anneke Van Rooyen-Obi",
      "Mother of Thomas Van Rooyen-Obi",
      "[Address]",
      "4 March 2024"
    ],
    "salutation": "Dear Mrs Van Rooyen-Obi,",
    "re": "Re: Thomas Van Rooyen-Obi, aged 9, aftercare after his fall today",
    "body": [
      "I am writing to explain Thomas's aftercare following his fall today, and when to contact us.",
      "One front tooth, pushed backwards, has been put back and held with a splint that must stay on for four weeks. The broken piece of the other tooth was reattached.",
      "For two weeks, give him soft food chewed with his back teeth, nothing bitten with the front teeth, like apples. Brush gently around the splint after every meal, and twice daily apply the chlorhexidine rinse along the gum with a cotton bud; he should not swish or swallow it. Paracetamol or ibuprofen may be given. Stop him biting his lip while it is numb. No sport, scooter or bicycle until the splint is removed and he has been checked.",
      "Please contact us if the tooth darkens, aches by itself, becomes loose or the splint comes away, or if he develops a gum spot, facial swelling or fever.",
      "We will see him on 18 March and 1 April to remove the splint. Checks continue for at least five years, as the nerve can still die later; this would not mean any mistake. A mouthguard is advised for contact sport."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Westergate Dental Practice"
    ],
    "bodyWords": 194,
    "commentary": {
      "opening": "The letter tells the mother at once why she is receiving it: how to care for the teeth and when to call. A parent reading at home needs the purpose before the detail.",
      "selection": "The aftercare she must carry out, the warning signs and the next two dates are kept. Measurements, radiograph results, sensibility testing and tetanus status are left out because they do not change what she does at home.",
      "organisation": "Purpose, a short plain account of what was done, the daily aftercare, the signs to report, then the follow-up plan and the reassurance about long-term reviews.",
      "tone": "Plain, warm English for a parent, with no technical terms such as luxation or pulp; instructions are direct so they are easy to follow."
    },
    "notesUsed": [
      "upper right central incisor displaced, repositioned, flexible splint for four weeks",
      "fractured piece reattached",
      "soft diet two weeks; nothing bitten with front teeth (apples, crusty bread)",
      "soft brush around splint after every meal",
      "chlorhexidine on a cotton bud along the gumline twice daily; do not swish and swallow",
      "paracetamol at written dose; ibuprofen may be used",
      "avoid biting numb lip",
      "no sport, scooter or bicycle until splint removed and reviewed",
      "watch for: darker tooth, spontaneous pain, gum spot or swelling, loosening or splint coming away, facial swelling, fever",
      "18 March check; 1 April splint removal",
      "reviews for at least five years; nerve may still be lost, not a sign of wrongdoing",
      "mouthguard advised for contact sport; practice can make one"
    ],
    "notesLeftOut": [
      "exact measurements of displacement, fracture and lip laceration - not needed by the parent for aftercare",
      "radiograph and sensibility test results - clinical baseline for the dentist, already explained in person",
      "head injury findings - written head injury advice given separately",
      "tetanus status - checked and up to date, no action needed",
      "later review dates (29 April to 4 March 2025) - already booked; the letter gives the next two and the five-year plan",
      "the reattached piece may need a filling later, and appearance question - already discussed today; kept out for word limit",
      "corn on the cob example and chlorhexidine strength - detail beyond what she needs; the rinse was supplied"
    ],
    "safety": [
      {
        "point": "Splint must stay in place for four weeks; report if it comes away",
        "where": "paragraphs 2, 4"
      },
      {
        "point": "Soft diet, nothing bitten with the front teeth, for two weeks",
        "where": "paragraph 3"
      },
      {
        "point": "Chlorhexidine applied with a cotton bud; not to be swished or swallowed",
        "where": "paragraph 3"
      },
      {
        "point": "Avoid biting the numb lip (commonest second injury)",
        "where": "paragraph 3"
      },
      {
        "point": "No sport, scooter or bicycle until splint removed and reviewed",
        "where": "paragraph 3"
      },
      {
        "point": "Warning signs to report: darkening, spontaneous pain, gum spot or swelling, loosening, facial swelling, fever",
        "where": "paragraph 4"
      },
      {
        "point": "Follow-up on 18 March and 1 April, reviews for at least five years",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-dentistry-referral-to-the-general-practitioner-a-patient-found-to-have-very-high-blood-pressure": {
    "header": [
      "Dr Bernadette Achterberg",
      "General Practitioner",
      "The Silverdale Practice",
      "21 May 2025"
    ],
    "salutation": "Dear Dr Achterberg,",
    "re": "Re: Mr Marcus Oyelaran-Bird, aged 54, severely raised blood pressure with symptoms",
    "body": [
      "I am writing to refer Mr Oyelaran-Bird for assessment this afternoon at 15:40, following three severely raised blood pressure readings. I would also value your advice on when his extraction may proceed.",
      "Before a planned extraction, I recorded 202/122, then 196/118 after fifteen minutes' rest, and 194/116 on the left arm. He reports morning headaches for six months, occasional nosebleeds, brief blurred vision on standing and new breathlessness on stairs, but no chest pain, weakness or visual loss.",
      "He has no known diagnosis of hypertension and takes no medication. He was told in 2014 his pressure was raised but never returned. He smokes fifteen a day, drinks approximately 30 units weekly and is a long-distance lorry driver. His father died of a stroke at 58. He has no known allergies.",
      "I did not extract the tooth or give any medication. He has been told to call an ambulance if chest pain, sudden severe headache, visual loss, weakness or speech difficulty develops, and not to drive or work today.",
      "The tooth is not acutely infected, so two to three weeks' delay is acceptable. Please advise on any restriction on adrenaline-containing local anaesthetic, and on his vocational driving licence."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Silverdale Dental Practice"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The first sentence gives the reason and the appointment time already booked, so the doctor knows the urgency at once; the second states the request about the extraction.",
      "selection": "The three readings, the symptoms suggesting end-organ effects, the risk factors and the safety-netting are kept. Detailed dental findings, his own estimate of weight and the examination limits are left out as not needed by the doctor.",
      "organisation": "Purpose and request, readings and symptoms, background and risk factors, what was done and advised, then the dental timing and the anaesthetic question.",
      "tone": "Concise and collegial, urgent without being alarmist; it stays within dental scope and leaves the medical assessment to the doctor."
    },
    "notesUsed": [
      "appointment 15:40 today, arranged by telephone",
      "readings 202/122, 196/118 after fifteen minutes, 194/116 left arm",
      "morning headaches six months, nosebleeds, blurred vision on standing, new breathlessness on stairs",
      "no chest pain, weakness, speech disturbance or visual loss",
      "no diagnosis or medication; told pressure raised in 2014, did not return",
      "smoker fifteen a day, approximately 30 units weekly, lorry driver",
      "father died of a stroke at 58",
      "allergies none known",
      "extraction not done, no medication given",
      "ambulance advice for red-flag symptoms; not to drive or work today",
      "tooth not acutely infected; delay of two to three weeks acceptable",
      "request: when safe to extract, any anaesthetic restriction",
      "request: advice on his vocational driving licence"
    ],
    "notesLeftOut": [
      "pulse rates and timing of each reading - the readings themselves carry the message",
      "practice policy on recording blood pressure - background only",
      "examination findings within dental scope - normal and limited",
      "self-reported weight 108 kg, mother's hypertension - less important than the father's stroke; can be taken at assessment",
      "dental details of the caries and periapical lesion - not needed by the doctor beyond 'not acutely infected'",
      "his brother collecting him - practical detail the doctor does not need",
      "validated device and large cuff - technique detail; omitted for word limit"
    ],
    "safety": [
      {
        "point": "Same-day assessment at 15:40 for severely raised blood pressure with symptoms",
        "where": "paragraph 1"
      },
      {
        "point": "Red-flag symptoms: call an ambulance rather than wait",
        "where": "paragraph 4"
      },
      {
        "point": "Extraction not performed; no medication given",
        "where": "paragraph 4"
      },
      {
        "point": "Advised not to drive or work today (lorry driver); vocational licence question for the GP",
        "where": "paragraphs 3, 4, 5"
      },
      {
        "point": "Advice needed on adrenaline-containing anaesthetic before extraction",
        "where": "paragraph 5"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-dentistry-referral-to-the-periodontal-specialist-rapidly-progressing-disease": {
    "header": [
      "Dr Ingrid Fenwick-Achebe",
      "Specialist in Periodontics",
      "The Hollowmere Clinic",
      "8 May 2025"
    ],
    "salutation": "Dear Dr Fenwick-Achebe,",
    "re": "Re: Miss Adaeze Marchetti-Nkomo, aged 34, progressing periodontitis",
    "body": [
      "I am writing to refer Miss Marchetti-Nkomo for management of generalised periodontitis, stage III grade C, which has progressed despite non-surgical therapy. I would value your view on surgical treatment at the deepest sites and on the prognosis of her upper central incisors.",
      "In November 2024, bleeding on probing was 68% and probing depths were 5 to 7 mm, reaching 9 mm at the upper right first molar mesial and lower left first molar distal. Radiographs showed 40 to 50% horizontal bone loss, with vertical defects at both molars.",
      "After hygiene instruction and instrumentation, her plaque score fell from 54% to 18%, so this is not a compliance problem. However, 14 sites remain at 6 to 8 mm, the upper right first molar mesial has deepened to 10 mm, three sites suppurate, and the upper central incisors are grade 2 to 3 mobile.",
      "She has type 1 diabetes, with HbA1c 71 mmol/mol in April 2025, and has reduced smoking from 15 to 5 a day, with a cessation appointment on 22 May. She takes only insulin and has no known allergies.",
      "She would welcome an honest answer about her front teeth and can attend on Tuesdays and Wednesdays."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Hollowmere Dental Practice"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The diagnosis, the reason for referral and both specific questions appear in the first paragraph, so the specialist knows exactly what is being asked.",
      "selection": "Baseline and current periodontal figures are kept to show progression, together with the risk factors that drive grade C. Restorative, occlusal and family-examination details are left out as they do not affect the specialist's decision.",
      "organisation": "Request, baseline findings, treatment response and current progression, risk factors and medical history, then her wishes and availability.",
      "tone": "Precise and clinical between dental colleagues, using standard periodontal terms, while fairly recording her own effort."
    },
    "notesUsed": [
      "stage III grade C, progressing despite non-surgical therapy",
      "request: surgical treatment at deepest sites, prognosis of upper central incisors",
      "November 2024: bleeding 68%, probing 5 to 7 mm, 9 mm at two molar sites",
      "bone loss 40 to 50%, vertical defects at both molars",
      "plaque score 54% to 18%, not a compliance problem",
      "14 sites 6 to 8 mm; upper right first molar mesial 10 mm",
      "suppuration at three sites; incisors grade 2 to 3",
      "type 1 diabetes, HbA1c 71 mmol/mol April 2025",
      "smoking 15 to 5 a day, cessation appointment 22 May",
      "insulin only; allergies none known",
      "wants honest answer; Tuesdays and Wednesdays"
    ],
    "notesLeftOut": [
      "February review figures - intermediate; baseline and today show the trend",
      "recession and lower molar mobility - lesser detail for word limit",
      "earlier HbA1c 78 mmol/mol - the latest value is the relevant one",
      "caries-free, restorations, occlusion, no parafunction - not relevant to periodontal management",
      "furcation grade I at upper right first molar - will be charted at assessment",
      "implant question - not appropriate until disease is stable",
      "children booked for examination - handled at this practice",
      "not pregnant - no bearing on the request",
      "mother edentulous by 45 - family history; omitted for word limit",
      "anterior gap widened by approximately 1 mm - the mobility increase conveys the change"
    ],
    "safety": [
      {
        "point": "Disease progressing (10 mm site, new suppuration, increasing incisor mobility)",
        "where": "paragraph 3"
      },
      {
        "point": "Type 1 diabetes, HbA1c 71 mmol/mol",
        "where": "paragraph 4"
      },
      {
        "point": "Smoker, reducing, cessation appointment 22 May",
        "where": "paragraph 4"
      },
      {
        "point": "Medication insulin only; no known allergies",
        "where": "paragraph 4"
      },
      {
        "point": "Prognosis of upper central incisors requested",
        "where": "paragraphs 1, 5"
      }
    ]
  },
  "wri-dentistry-referral-to-the-orthodontic-service-a-child-with-an-unerupted-incisor": {
    "header": [
      "Mr Hugo Baptiste-Nwankwo",
      "Consultant Orthodontist",
      "Ravensfield Dental Hospital",
      "9 April 2025"
    ],
    "salutation": "Dear Mr Baptiste-Nwankwo,",
    "re": "Re: Miss Elodie Chukwuma-Sandoval, aged 9 years and 4 months, unerupted upper left central incisor",
    "body": [
      "I am writing to refer Elodie for assessment with a view to removal of a supernumerary tooth and exposure of her unerupted upper left permanent central incisor. I would also value your advice on whether space maintenance should begin in the meantime.",
      "The upper right central incisor erupted in March 2024, and the upper left deciduous incisor exfoliated in February 2024, but its successor has not appeared. There is a firm palatal fullness, and the space measures 8 mm against a contralateral incisor of 9 mm, so it is beginning to close.",
      "Radiographs show the incisor lying horizontally, with its crown angled palatally and root formation about two-thirds complete. A radiopacity consistent with a supernumerary lies between the crown and the alveolar crest. No root resorption or cyst was seen, although plain films are limited; three-dimensional imaging of your choice would be welcome.",
      "Referral was already indicated in January 2025; this letter corrects that delay. She is fit and well, takes no medication, has no allergies and was cooperative throughout. She has begun covering her mouth when smiling.",
      "Photographs and space measurements from both visits are enclosed. Her father can bring her at any time."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Ravensfield Dental Practice"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The planned treatment and the question about space maintenance come first, because the consultant must know both what is proposed and what needs deciding now.",
      "selection": "Eruption history, the closing space, the radiographic position and the probable obstruction are kept. Normal occlusal findings, the sibling's treatment and the parents' questions are left out as not affecting the plan.",
      "organisation": "Request, history and clinical findings, radiographs, honest acknowledgement of delay with medical history and impact, then enclosures and availability.",
      "tone": "Professional and transparent; the delay is acknowledged plainly, which a specialist will respect."
    },
    "notesUsed": [
      "request: removal of supernumerary, exposure of incisor, imaging of choice",
      "advice on space maintenance",
      "upper right incisor erupted March 2024; deciduous lost February 2024",
      "firm palatal fullness",
      "space 8 mm vs contralateral 9 mm, closing",
      "horizontal, crown palatal, root two-thirds formed",
      "radiopacity consistent with supernumerary between crown and crest",
      "no resorption or cyst on plain films; limits recognised",
      "referral indicated in January 2025; delay corrected",
      "fit and well, no medication or allergies, cooperative",
      "covering her mouth when smiling",
      "photographs and measurements enclosed; father available any time"
    ],
    "notesLeftOut": [
      "extra-oral findings, overjet, overbite, incisor relationship, midline - normal or minor, recorded at assessment",
      "fall at age four - plausible history but does not change management",
      "brother in fixed appliances, parents' orthodontic history - not relevant",
      "father's questions about waiting and alternatives - already answered",
      "school comments - impact summarised by her covering her mouth",
      "oral hygiene and caries status - good, no bearing on the request"
    ],
    "safety": [
      {
        "point": "Space already closing (8 mm vs 9 mm) - advice on space maintenance needed",
        "where": "paragraphs 1, 2"
      },
      {
        "point": "Probable obstruction by supernumerary",
        "where": "paragraph 3"
      },
      {
        "point": "Resorption of adjacent roots not excluded on plain films; three-dimensional imaging needed",
        "where": "paragraph 3"
      },
      {
        "point": "Earlier delay in referral acknowledged",
        "where": "paragraph 4"
      },
      {
        "point": "No medication, no allergies",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-dentistry-referral-to-the-general-practitioner-oral-thrush-and-possible-undiagnosed-diabetes": {
    "header": [
      "Dr Elspeth Nwokolo-Cardew",
      "General Practitioner",
      "The Bramblewood Practice",
      "16 October 2025"
    ],
    "salutation": "Dear Dr Nwokolo-Cardew,",
    "re": "Re: Mrs Yvette Osei-Kilbride, aged 49, recurrent oral candidiasis and possible diabetes",
    "body": [
      "I am writing to refer Mrs Osei-Kilbride, who will see you on 18 October, for assessment for diabetes, including HbA1c and a glucose measurement, because she has recurrent oral candidiasis and symptoms suggesting undiagnosed diabetes.",
      "This is her third episode of pseudomembranous candidiasis in eight months, with angular cheilitis and a dry mouth. Topical antifungals have helped only temporarily, and palatal plaques persist after miconazole gel from 2 October. She has no denture, steroid inhaler or recent antibiotic, and does not smoke.",
      "She reports thirst, passing urine three or four times nightly for four months, six kilograms' weight loss over six months, tiredness, blurred vision, recurrent thrush elsewhere and slow wound healing. Her mother has type 2 diabetes. Her blood pressure today was 148/88 and 146/86. She takes no medication and has no known allergies.",
      "I have not prescribed a further antifungal course. She has been advised to seek urgent same-day help if she becomes very thirsty, drowsy, vomits or becomes breathless.",
      "If her results are normal, please consider other causes of recurrent candidiasis. I would be grateful if the thrush could be treated systemically once the cause is understood, and I am happy to review her mouth afterwards."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Bramblewood Dental Practice"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The appointment date, the tests requested and the reason are given in one sentence, so the doctor sees the specific request before the evidence.",
      "selection": "The recurrence pattern, the absence of local causes, the systemic symptoms, family history and blood pressure are kept because together they build the case for diabetes. Detailed mucosal descriptions and dietary changes are left out.",
      "organisation": "Request, oral picture and treatment history, systemic symptoms and background, safety advice given, then secondary requests and her availability.",
      "tone": "Collegial and reasoned; the dentist explains the clinical logic without overstepping into diagnosis."
    },
    "notesUsed": [
      "appointment 18 October",
      "request: HbA1c and glucose; other causes if normal",
      "third episode in eight months; angular cheilitis; dry mouth",
      "topical antifungal with temporary improvement; miconazole oral gel 2 October; palatal plaques persist",
      "no denture, steroid inhaler, antibiotic; non-smoker",
      "thirst, nocturia three or four times for four months, six kilograms weight loss over six months",
      "tiredness, blurred vision, recurrent thrush elsewhere, slow healing",
      "mother type 2 diabetes",
      "blood pressure 148/88 and 146/86",
      "no medication; allergies none known",
      "no further course prescribed",
      "urgent same-day help if very thirsty, drowsy, vomiting or breathless",
      "systemic treatment once cause known; happy to review"
    ],
    "notesLeftOut": [
      "detailed description of plaques, taste change and acidic food avoidance - oral detail not needed by the GP",
      "stopped the gel early - minor; the key point is recurrence despite treatment",
      "father's heart attack, self-reported weight and height - can be taken at assessment",
      "not seen a doctor since 2017, eye test booked - background",
      "no fever, night sweats, lumps or cough - negatives omitted for word limit",
      "her question about whether the mouth will settle - already answered",
      "wish for an early appointment (works from ten) - appointment already booked; omitted for word limit"
    ],
    "safety": [
      {
        "point": "Symptoms suggesting undiagnosed diabetes; HbA1c and glucose requested",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Urgent same-day help if very thirsty, drowsy, vomiting or breathless",
        "where": "paragraph 4"
      },
      {
        "point": "No further antifungal prescribed by the dentist",
        "where": "paragraph 4"
      },
      {
        "point": "Raised blood pressure 148/88 and 146/86",
        "where": "paragraph 3"
      },
      {
        "point": "No medication; no known allergies",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-dentistry-referral-to-the-oral-surgery-department-extraction-in-a-patient-at-risk-of-jaw-necrosis": {
    "header": [
      "Ms Farida Achike-Longstaff",
      "Consultant Oral Surgeon",
      "Wexley Dental Hospital",
      "19 July 2025"
    ],
    "salutation": "Dear Ms Achike-Longstaff,",
    "re": "Re: Mr Aleksander Nwosu-Fairbairn, aged 71, extraction with risk of jaw osteonecrosis",
    "body": [
      "I am writing to refer Mr Nwosu-Fairbairn for extraction of his lower right first molar, as he is at elevated risk of medication-related osteonecrosis of the jaw and is anticoagulated.",
      "The tooth is unrestorable, with subgingival caries, a 6 mm periapical radiolucency, grade III furcation involvement and 9 mm probing with suppuration. He has had three episodes of pain and swelling in eight months, most recently on 30 June, but there is no acute infection today.",
      "He receives intravenous zoledronic acid every four weeks for metastatic prostate cancer, most recently on 10 July 2025, and previously had denosumab for eleven months in 2021. His oncology team advise it must not be interrupted and ask to be informed of any surgery; their reply is enclosed. He takes apixaban 5 mg twice daily for atrial fibrillation, not to be stopped without advice, and has type 2 diabetes. He has no known allergies.",
      "Preventive measures, including high-fluoride toothpaste and three-monthly recall, are in place. An orthopantomogram and periapical radiograph are enclosed.",
      "Please also assess the lower left second molar and upper right second premolar, asymptomatic but of questionable prognosis, at the same visit. He fears jaw complications and can attend any time."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Wexley Dental Practice"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The procedure requested and the two reasons it is being referred - jaw necrosis risk and anticoagulation - are stated first, followed by the secondary request.",
      "selection": "Why the tooth cannot be saved, the antiresorptive history, the oncology position and the anticoagulant are kept. Other medications, radiotherapy history and his account of pain are left out as less relevant to the surgeon's plan.",
      "organisation": "Request, the tooth, the drug history and medical risks, preventive measures and enclosures, then the other teeth and his concerns.",
      "tone": "Precise and professional for a consultant colleague, with the high-risk medication details stated clearly and without hedging."
    },
    "notesUsed": [
      "extraction of lower right first molar; elevated MRONJ risk; anticoagulated",
      "assessment of two questionable teeth same visit",
      "subgingival caries, 6 mm radiolucency, grade III furcation, 9 mm probing with suppuration",
      "three episodes in eight months, latest 30 June; no acute infection",
      "zoledronic acid every four weeks, most recent 10 July 2025; denosumab eleven months in 2021",
      "oncology: do not interrupt, inform of surgery, reply enclosed",
      "apixaban 5 mg twice daily, not to be stopped without advice",
      "type 2 diabetes; allergies none known",
      "high-fluoride toothpaste, three-monthly recall",
      "orthopantomogram and periapical enclosed",
      "lower left second molar, upper right second premolar questionable",
      "frightened of the jaw problem; can attend any time"
    ],
    "notesLeftOut": [
      "HbA1c value, other medications (bicalutamide, metformin, ramipril, atorvastatin) - full list can be confirmed at assessment; apixaban is the one that changes management",
      "pelvic radiotherapy 2020 - no head or neck radiotherapy, so not relevant to jaw risk",
      "oral hygiene detail, chlorhexidine before surgery, advice against extraction abroad - preventive detail summarised",
      "explanations given to him - already discussed with the patient",
      "paracetamol most days, nature of pain - not needed by the surgeon",
      "22 remaining teeth, no exposed bone - helpful but omitted for word limit"
    ],
    "safety": [
      {
        "point": "Elevated MRONJ risk: zoledronic acid every four weeks (most recent 10 July 2025) and previous denosumab",
        "where": "paragraphs 1, 3"
      },
      {
        "point": "Zoledronic acid not to be interrupted; oncology to be informed of surgery",
        "where": "paragraph 3"
      },
      {
        "point": "Apixaban 5 mg twice daily, not to be stopped without advice",
        "where": "paragraph 3"
      },
      {
        "point": "Type 2 diabetes",
        "where": "paragraph 3"
      },
      {
        "point": "Recurrent infection; tooth cannot be left",
        "where": "paragraph 2"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-dentistry-referral-to-the-paediatric-dental-service-early-childhood-caries": {
    "header": [
      "Dr Rosalind Ekwueme-Harker",
      "Consultant in Paediatric Dentistry",
      "Thornaby Dental Hospital",
      "13 March 2025"
    ],
    "salutation": "Dear Dr Ekwueme-Harker,",
    "re": "Re: Master Kai Oduya-Prentice, aged 4 years and 2 months, early childhood caries",
    "body": [
      "I am writing to refer Kai for assessment for comprehensive dental treatment under general anaesthesia, including extraction of unrestorable teeth, in a single episode. He has extensive early childhood caries and cannot accept treatment in the dental chair.",
      "Eight teeth are affected. Both upper first primary molars are pulpally involved, the right with a buccal sinus, and all four upper incisors have gross caries. There has been no facial swelling or fever. He wakes in pain three or four nights a week, eats only soft food, has had two courses of antibiotics and has missed nine days of nursery.",
      "An attempted dressing on 20 February was abandoned when he became very distressed, and no restraint was used. Only fluoride varnish has been possible.",
      "His bedtime fruit drink has been changed to water, and 1450 parts per million toothpaste supplied. Dental neglect was considered and discussed with our safeguarding lead; I judge that the family lacked information rather than withheld care, and the health visitor has been informed with consent. He is fit and well, with no allergies or previous anaesthetic.",
      "His mother is available any day and knows to attend the emergency department if his face swells."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Thornaby Dental Practice"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The exact request - treatment under general anaesthesia in one episode - and the reason it cannot be done in the chair are given at once.",
      "selection": "The affected teeth, signs of infection, impact on the child and the failed attempts justify the anaesthetic. The safeguarding judgement is included because the consultant must know it; minor dietary and attendance details are left out.",
      "organisation": "Request, dental findings and impact, attempts at treatment, prevention, safeguarding and medical history, then availability and the safety-net.",
      "tone": "Professional and fair; the safeguarding position is stated plainly without judging the mother."
    },
    "notesUsed": [
      "general anaesthesia, extractions, single episode",
      "cannot accept treatment in the chair",
      "eight teeth affected; both upper first primary molars pulpally involved, buccal sinus on right",
      "upper incisors gross caries",
      "no facial swelling, no fever",
      "night waking three or four nights a week; soft food only",
      "two courses of antibiotics; nine days of nursery missed",
      "20 February dressing abandoned; no restraint",
      "fluoride varnish only",
      "bedtime drink changed to water; 1450 parts per million paste",
      "neglect considered; safeguarding lead; health visitor informed with consent",
      "fit and well, no allergies, no previous anaesthetic",
      "mother available; emergency department if face swells"
    ],
    "notesLeftOut": [
      "lower first primary molar dentine caries, lower incisors sound - covered by the total of eight teeth",
      "daily paracetamol since Christmas - pain already conveyed",
      "six sugary snacks a day - diet advice already given",
      "no social care referral, siblings caries-free - supports the safeguarding judgement but omitted for word limit",
      "born at term, immunised, no family anaesthetic problems - routine; anaesthetic team will confirm",
      "waiting time question - for the hospital to answer"
    ],
    "safety": [
      {
        "point": "Upper right first primary molar with a buccal sinus; both upper first primary molars pulpally involved",
        "where": "paragraph 2"
      },
      {
        "point": "Repeated antibiotics and ongoing pain",
        "where": "paragraph 2"
      },
      {
        "point": "Safeguarding considered; health visitor informed with consent",
        "where": "paragraph 4"
      },
      {
        "point": "No allergies, no previous general anaesthetic",
        "where": "paragraph 4"
      },
      {
        "point": "Emergency department if facial swelling develops before treatment",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-dentistry-advice-letter-to-gp-on-dental-focus-before-cardiac-surgery": {
    "header": [
      "Dr Sandra Phillips",
      "General Practitioner",
      "[Practice address]",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Phillips,",
    "re": "Re: Mr Edward Hammond, aged 64, dental clearance before aortic valve replacement",
    "body": [
      "I am writing to advise you of the dental clearance findings for Mr Hammond, who is awaiting aortic valve replacement, and to ask you to forward this letter to his cardiology team to obtain the anticipated surgical date.",
      "I assessed him on 12 August 2026 and 4 September 2026 at cardiology's request. Tooth 47 is unrestorable, with a periapical radiolucency and discharging sinus, and teeth 16 and 26 have 8 mm probing depths, grade II mobility and bone loss exceeding half the root length. These three teeth are infective foci and should be extracted before surgery to reduce the risk of infective endocarditis. No other teeth are a source of infection.",
      "He takes apixaban 5 mg twice daily for atrial fibrillation, with bisoprolol and atorvastatin, and has no known allergies. Apixaban must not be stopped without cardiology advice, and I would be grateful for their guidance on managing it around the extractions. Socket packing and sutures are planned.",
      "The extractions will be done at one morning appointment once this advice is received, with a review two weeks later to confirm healing before surgery is scheduled. His oral hygiene has improved, with bleeding on probing down to 25% of sites."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Kelbury Dental Practice"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The first paragraph gives both purposes at once: the clearance findings, and the request to pass the letter to cardiology and obtain the surgical date, which the dental plan depends on.",
      "selection": "The three infective foci, the endocarditis risk, apixaban and the need for cardiology advice, and the healing review are kept. His surgical, gout and social history, the stained and worn front teeth and his questions about parking and dentures are left out because they do not affect clearance before surgery.",
      "organisation": "Purpose and request, then findings and why the teeth must go, then anticoagulation and safety, then the treatment timeline that depends on the surgical date.",
      "tone": "Professional and concise between clinicians, with polite requests rather than instructions to the GP and the cardiology team."
    },
    "notesUsed": [
      "pre-operative assessment requested by cardiology before valve replacement",
      "seen 12 August 2026 and 4 September 2026; no dental pain",
      "47 unrestorable, periapical radiolucency, discharging sinus",
      "16 and 26: 8 mm probing depths, grade II mobility, bone loss over half the root",
      "three infective foci; extract before surgery to reduce endocarditis risk",
      "no other teeth a source of infection",
      "apixaban 5 mg twice daily; not to be stopped without cardiology advice",
      "bisoprolol, atorvastatin; no known allergies",
      "socket packing and sutures",
      "one morning appointment once advice received; review two weeks after",
      "bleeding on probing down to 25%",
      "request: forward to cardiology for the anticipated surgical date"
    ],
    "notesLeftOut": [
      "full dental history, old restorations, earlier extractions — background not needed for clearance",
      "knee arthroscopy, gout, bowel screening — unrelated to the dental clearance",
      "blood pressure and pulse at the first visit — cardiology already manage his heart condition",
      "worn composites and tea staining — no treatment needed before surgery",
      "denture options, dry mouth advice — to be addressed after the extractions",
      "social details, parking, wife in the surgery, grandson — not clinically relevant to the GP"
    ],
    "safety": [
      {
        "point": "Three infective foci (47, 16, 26) to be extracted before valve surgery to reduce the risk of infective endocarditis",
        "where": "paragraph 2"
      },
      {
        "point": "Apixaban 5 mg twice daily must not be stopped without cardiology advice; advice requested",
        "where": "paragraph 3"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 3"
      },
      {
        "point": "Local haemostatic measures planned",
        "where": "paragraph 3"
      },
      {
        "point": "Review two weeks after extractions to confirm healing before surgery is scheduled",
        "where": "paragraph 4"
      },
      {
        "point": "Surgical date needed so that healing time is adequate",
        "where": "paragraph 1"
      }
    ]
  },
  "wri-dentistry-discharge-of-implant-patient-to-referring-dentist": {
    "header": [
      "Dr Imran Qureshi",
      "Referring General Dental Practitioner",
      "[Practice address]",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Qureshi,",
    "re": "Re: Mrs Yvonne Carter, aged 60, single implant at the 46 site",
    "body": [
      "I am writing to discharge Mrs Carter back to your care after successful placement and restoration of a single implant at the 46 site, and to ask you to take over its maintenance.",
      "A titanium implant was placed under local anaesthetic on 14 April 2026, with good primary stability, and a screw-retained crown was fitted on 21 August 2026 after uneventful healing. At today's review on 4 September 2026, the peri-implant tissues were healthy, with 3 mm probing depths, no bleeding on probing and stable crestal bone radiographically. She is chewing comfortably, with no occlusal interferences.",
      "I would be grateful if you could provide three-monthly hygiene appointments for the first year, the first due in early December 2026, then six-monthly if the tissues remain stable. Please record peri-implant probing at each visit and take an annual radiograph.",
      "She uses a single-tufted brush around the implant and understands that poor cleaning, smoking or missed reviews increase the risk of peri-implant disease. She stopped smoking three years ago; continued abstinence should be encouraged. Her hypertension is controlled on ramipril, and she has no known allergies.",
      "Component details and screw torque are recorded here should retrieval be needed."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Oakfield Implant Clinic"
    ],
    "bodyWords": 195,
    "commentary": {
      "opening": "The letter opens by stating the discharge and what the referring dentist is now asked to do: take over implant maintenance.",
      "selection": "The treatment summary, today's healthy findings, the maintenance schedule and the risk factors for peri-implant disease are kept. The consultation options, healing review details, invoice, family and hobbies are left out because the dentist does not need them to maintain the implant.",
      "organisation": "Purpose, then a brief treatment history and current status, then the maintenance request, then risk factors and medical points, then where records are held.",
      "tone": "Collegial and appreciative between dentists, with clear and specific maintenance requests."
    },
    "notesUsed": [
      "single titanium implant at 46 site, 14 April 2026, local anaesthetic, good stability, no graft",
      "healing uneventful; screw-retained crown fitted 21 August 2026",
      "review 4 September 2026: healthy tissues, no bleeding on probing, 3 mm probing, stable crestal bone",
      "no occlusal interferences; chewing comfortably",
      "three-monthly hygiene for first year then six-monthly; first visit early December 2026",
      "peri-implant probing each visit; annual radiograph",
      "single-tufted brush; risks of poor cleaning, smoking, missed reviews",
      "former smoker, stopped three years ago",
      "hypertension on ramipril; no known allergies",
      "component details and screw torque held in records"
    ],
    "notesLeftOut": [
      "treatment options discussed and cone beam findings — decision already made and completed",
      "reason for tooth loss and earlier dental history — known to the referring practice",
      "insertion torque, two-week and eight-week reviews, impression date — detail of completed treatment",
      "hysterectomy, ankle sprain, hay fever — not relevant to implant maintenance",
      "patient satisfaction rating, invoice, parking — not clinically relevant",
      "whitening and husband's consultation — separate matters she can raise herself",
      "social and family details — not relevant"
    ],
    "safety": [
      {
        "point": "Three-monthly hygiene for the first year, first due early December 2026, then six-monthly if stable",
        "where": "paragraph 3"
      },
      {
        "point": "Peri-implant probing at each visit and an annual radiograph",
        "where": "paragraph 3"
      },
      {
        "point": "Risk of peri-implant disease with poor cleaning, smoking or missed reviews; encourage continued abstinence from smoking",
        "where": "paragraph 4"
      },
      {
        "point": "No known allergies; hypertension on ramipril",
        "where": "paragraph 4"
      },
      {
        "point": "Component and torque records held at the clinic for retrieval",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-dentistry-discharge-to-gp-after-dental-abscess-management": {
    "header": [
      "Dr Owen Bradley",
      "General Practitioner",
      "[Practice address]",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Bradley,",
    "re": "Re: Mrs Fatima Yusuf, aged 49, acute dental abscess",
    "body": [
      "I am writing to inform you of Mrs Yusuf's treatment for an acute dental abscess and to request that you monitor her glycaemic control, which the infection is likely to have disturbed.",
      "She attended as an emergency on 28 August 2026 with severe pain, left facial swelling and two days of fever. Tooth 36 was grossly carious, with a temperature of 38.1°C, regional lymphadenopathy and mild trismus, but no airway compromise, floor-of-mouth swelling or difficulty swallowing. Following incision and drainage under local anaesthetic, 36 was extracted. Because of her penicillin allergy, metronidazole 400 mg three times daily for five days was prescribed, avoiding clarithromycin because of its hypoglycaemia risk with gliclazide. She completed it without side effects.",
      "At review today, 4 September 2026, she was afebrile, the swelling had largely resolved and the socket was healing well. She is discharged with a six-month recall and high-fluoride toothpaste.",
      "Her HbA1c had risen to 78 mmol/mol in July 2026, and home readings of 12 to 15 mmol/L during the infection are now settling at 8 to 10 mmol/L. She takes metformin and gliclazide and plans a diabetes review. Please also review her if the swelling recurs or systemic symptoms develop."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Brookside Dental Practice"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The opening combines the two purposes from the task: informing the GP of the abscess treatment and asking for glucose monitoring.",
      "selection": "The severity of the infection, the airway assessment, the treatment, the antibiotic chosen because of the penicillin allergy and the gliclazide interaction, and the glucose figures are kept. Her dental history, previous operations, social life and requests about appointments and parking are left out as they do not help the GP.",
      "organisation": "Purpose, then presentation and treatment, then the outcome at review and discharge, then the diabetes picture and the specific requests.",
      "tone": "Professional and factual between clinicians, with a courteous request at the end."
    },
    "notesUsed": [
      "emergency 28 August 2026; severe pain, left facial swelling, fever two days",
      "36 grossly carious; temperature 38.1°C; lymphadenopathy; mild trismus",
      "airway not compromised; no floor-of-mouth swelling, no difficulty swallowing",
      "incision and drainage under local anaesthetic; 36 extracted",
      "penicillin allergy; metronidazole 400 mg three times daily five days, completed, no side effects; clarithromycin avoided (hypoglycaemia risk with gliclazide)",
      "review 4 September 2026: afebrile, swelling largely resolved, socket healing",
      "discharged; six-month recall; high-fluoride toothpaste",
      "HbA1c 78 mmol/mol July 2026; readings 12 to 15, now 8 to 10 mmol/L",
      "metformin, gliclazide; plans diabetes review",
      "request: monitor glycaemic control; review if swelling recurs or systemic symptoms"
    ],
    "notesLeftOut": [
      "previous HbA1c of 61 and BMI — the GP holds these records",
      "pulse, blood pressure, mouth opening measurement — superseded by recovery",
      "dental attendance history, anxiety, snacking — dental matters handled by the practice",
      "appendicectomy, carpal tunnel release, knee pain — not relevant",
      "pus sample not sent — no impact on further management",
      "replacing the tooth, heartburn, screening results — not part of this request",
      "work, family and social details, employer note, parking — not clinically relevant"
    ],
    "safety": [
      {
        "point": "Penicillin allergy (rash); metronidazole used, clarithromycin avoided because of hypoglycaemia risk with gliclazide",
        "where": "paragraph 2"
      },
      {
        "point": "Airway assessed and not compromised",
        "where": "paragraph 2"
      },
      {
        "point": "Raised HbA1c and glucose disturbed by infection; monitoring requested",
        "where": "paragraphs 1, 4"
      },
      {
        "point": "Review if swelling recurs or systemic symptoms develop",
        "where": "paragraph 4"
      },
      {
        "point": "Current diabetes medication: metformin and gliclazide",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-dentistry-discharge-to-gp-after-suspicious-lesion-biopsy": {
    "header": [
      "Dr Priya Venkataraman",
      "General Practitioner",
      "Eastgate Medical Centre",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Venkataraman,",
    "re": "Re: Mr George Halloran, aged 58, tongue biopsy showing mild dysplasia",
    "body": [
      "I am writing to inform you that Mr Halloran's tongue biopsy showed mild epithelial dysplasia and that he is under oral medicine/OMFS follow-up, and to request your support with a smoking cessation referral and a diabetes review.",
      "At a routine check-up on 24 July 2026, I noted a painless 15 mm homogeneous white patch on the left lateral tongue, with no induration, ulceration or cervical lymphadenopathy, and no denture trauma. After my urgent referral, the OMFS team performed an incisional biopsy on 7 August 2026. Histopathology, reported on 28 August 2026, showed hyperkeratosis with mild epithelial dysplasia, a potentially malignant change, but no malignancy.",
      "The OMFS team will provide long-term surveillance; his first review date is not yet known, and he has agreed to attend. Dental recall with soft-tissue checks continues here, and any change in size, colour or texture, ulceration or induration will be reported urgently to OMFS.",
      "He smokes 20 cigarettes a day and drinks approximately 30 units of alcohol weekly. He has received cessation advice and stop smoking service details, and prefers face-to-face support. His HbA1c has risen from 52 mmol/mol in June 2025 to 64 mmol/mol in June 2026. He takes metformin and amlodipine."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Eastgate Dental Practice"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The first paragraph states the result, the specialist follow-up already in place and the two requests, so the GP knows at once what has happened and what is asked of them.",
      "selection": "The lesion description, the urgent referral and specialist biopsy, the result, the warning signs and his smoking, alcohol and diabetes figures are kept. His denture problems, previous operations, hobbies, family news and questions about parking are left out as irrelevant to the GP's role.",
      "organisation": "Purpose and requests, then findings and histology, then the specialist follow-up and monitoring, then the risk factors behind the requests.",
      "tone": "Clear and professional, conveying a potentially malignant change without alarm."
    },
    "notesUsed": [
      "white patch found at routine check-up 24 July 2026, painless",
      "15 mm homogeneous, non-wipeable, left lateral tongue; no induration, ulceration or lymphadenopathy",
      "no rubbing from denture or teeth",
      "urgent referral to oral medicine/OMFS; incisional biopsy by OMFS 7 August 2026",
      "histopathology 28 August 2026: hyperkeratosis, mild dysplasia, no malignancy",
      "long-term surveillance by OMFS; first review date not known; agreed to attend",
      "dental recall continues; change in size, colour, texture, ulceration or induration reported urgently",
      "smokes 20 a day; about 30 units weekly",
      "cessation advice; stop smoking service; prefers face-to-face",
      "HbA1c 52 mmol/mol June 2025 to 64 mmol/mol June 2026; control drifted",
      "metformin, amlodipine"
    ],
    "notesLeftOut": [
      "suture removal, healing and post-operative discomfort — minor and resolved",
      "drug doses and no known allergies — the GP holds the prescribing record",
      "denture looseness and planned reline — separate dental matter",
      "hernia repair, tonsillectomy, blood pressure — not relevant to the requests",
      "alcohol advice detail, smoking history and motivation score — the cessation service will assess this",
      "wife's smoking and request for support — she can approach the practice herself",
      "hobbies, family news, parking, MOT — not clinically relevant"
    ],
    "safety": [
      {
        "point": "Mild epithelial dysplasia, a potentially malignant change; no malignancy",
        "where": "paragraph 2"
      },
      {
        "point": "Under OMFS long-term surveillance; first review date pending",
        "where": "paragraph 3"
      },
      {
        "point": "Any change in size, colour, texture, ulceration or induration to be reported urgently",
        "where": "paragraph 3"
      },
      {
        "point": "Heavy smoking and alcohol use as oral cancer risk factors; cessation referral requested",
        "where": "paragraphs 1, 4"
      },
      {
        "point": "HbA1c rising (52 to 64 mmol/mol); diabetes review requested",
        "where": "paragraphs 1, 4"
      }
    ]
  },
  "wri-dentistry-endodontic-referral-for-calcified-canal": {
    "header": [
      "Dr Priya Nair",
      "Specialist Endodontist",
      "[Practice address]",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Nair,",
    "re": "Re: Ms Carol Whitfield, aged 45, calcified upper left first molar (26)",
    "body": [
      "I would be grateful if you could see Ms Whitfield for root canal treatment of 26, a heavily calcified upper left first molar that could not be negotiated in general practice.",
      "She reports a six-week history of worsening ache and heat sensitivity lingering around 30 seconds, and night pain this week. Tooth 26 is heavily restored, with a large amalgam and a cuspal repair in 2021. It is tender to percussion, with a delayed, reduced response to cold and lingering pain to heat, but no swelling, sinus tract, mobility or deep probing.",
      "A periapical radiograph shows an approximately 4 mm radiolucency at the mesiobuccal root and sclerosed, heavily calcified canals, particularly mesially, with no separated instrument.",
      "On 21 August 2026, under rubber dam, I located the palatal canal, but not the mesiobuccal or distobuccal canals after 40 minutes. The conservative access was dressed with calcium hydroxide under a temporary restoration. On 4 September 2026, she was comfortable and the restoration intact.",
      "She wishes to keep the tooth, understands that extraction is the alternative and has agreed to proceed privately. She has well-controlled asthma, uses salbutamol and has no known allergies. Radiographs and photographs are sent electronically."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Lakeside Dental Practice"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The referral request, the tooth and the reason it cannot be treated in practice are all given in the first sentence.",
      "selection": "Symptoms, test results, radiographic findings, exactly what was attempted and how the tooth was left are kept, because the endodontist needs them to plan. Her old wrist fracture, hay fever, hobbies, family events and questions about buses and whitening are left out.",
      "organisation": "Request, then history and examination, then the radiograph, then the attempted treatment, then her wishes, medical points and enclosures.",
      "tone": "Collegial and precise, as from a general dentist to a specialist."
    },
    "notesUsed": [
      "calcified 26 could not be negotiated in general practice",
      "six weeks of worsening ache, heat sensitivity lingering around 30 seconds; night pain past week",
      "heavily restored; large amalgam; cuspal fracture repaired 2021",
      "tender to percussion; delayed reduced response to cold; lingering pain to heat",
      "no swelling, sinus or mobility; normal probing",
      "radiolucency about 4 mm at mesiobuccal root; sclerosed calcified canals; no separated instrument",
      "21 August 2026: rubber dam, palatal canal found, MB and DB not after 40 minutes; calcium hydroxide, temporary",
      "4 September 2026: comfortable, temporary intact",
      "wishes to keep tooth; extraction the alternative; proceeding privately",
      "asthma, salbutamol; no known allergies",
      "radiographs and photographs sent electronically"
    ],
    "notesLeftOut": [
      "pain score and pattern details — the key symptoms are already given",
      "other restorations, previous root canal on the upper right, wisdom teeth — not relevant to 26",
      "electric pulp test and probing values — summarised as reduced response and normal probing",
      "no operating microscope at the practice — implied by the referral",
      "anxiety, time off work, contact preferences — she can arrange these with the specialist",
      "fractured wrist, hay fever, hobbies, family, pet, travel — not relevant"
    ],
    "safety": [
      {
        "point": "No known allergies; asthma treated with salbutamol",
        "where": "paragraph 5"
      },
      {
        "point": "Tooth currently dressed with calcium hydroxide under a temporary restoration",
        "where": "paragraph 4"
      },
      {
        "point": "Periapical radiolucency at the mesiobuccal root",
        "where": "paragraph 3"
      },
      {
        "point": "Tooth may not be restorable; extraction is the alternative",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-dentistry-impacted-lower-third-molar-referral": {
    "header": [
      "Mr Daniel Okafor",
      "Oral and Maxillofacial Surgeon",
      "Riverside Dental Hospital",
      "4 September 2026"
    ],
    "salutation": "Dear Mr Okafor,",
    "re": "Re: Ms Hannah Whitlock, aged 27, recurrent pericoronitis of 38",
    "body": [
      "I would be grateful if you could assess Ms Whitlock for surgical removal of her partially erupted lower left third molar, 38, which has caused recurrent pericoronitis.",
      "This is her third episode in eight months, after January 2026 and May 2026, when metronidazole was given. Pain and swelling have lasted three weeks, with limited opening for four days. Today, the operculum was inflamed and tender with slight pus on pressure, and opening was approximately 30 mm. She was afebrile, without facial swelling, lymphadenopathy, floor-of-mouth swelling or dysphagia.",
      "The panoramic radiograph shows mesioangular impaction, with the roots close to, and possibly superimposed over, the inferior dental canal, so a cone beam scan may be indicated. She has been warned of the nerve risk.",
      "Today I irrigated under the operculum and advised chlorhexidine mouthwash and analgesia. Given her penicillin allergy, metronidazole 400 mg three times daily for three days will be prescribed only if systemic signs develop, and she will contact us the same day if fever, facial swelling or difficulty swallowing occurs.",
      "She has mild asthma, using salbutamol, and takes the combined oral contraceptive pill. She prefers local anaesthetic, is open to sedation advice and can attend at short notice."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Riverside Dental Practice"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The request for surgical assessment, the tooth and the reason are stated in one opening sentence.",
      "selection": "The recurrence, today's findings, the nerve proximity, the penicillin allergy and the safety-netting advice are kept because they shape the surgical decision. Her hobbies, family, earlier dental work and questions about parking and whitening are left out.",
      "organisation": "Request, then history and examination, then radiographic risk, then current management and safety-netting, then medical points and her preferences.",
      "tone": "Professional and concise, giving the surgeon the facts needed to prioritise and plan."
    },
    "notesUsed": [
      "recurrent pericoronitis, partially erupted 38, mesioangular impaction",
      "third episode in eight months; January 2026 and May 2026 (metronidazole)",
      "three weeks of pain and swelling; limited opening four days",
      "operculum inflamed, tender, slight pus; opening about 30 mm",
      "afebrile; no facial swelling, lymphadenopathy, floor-of-mouth swelling or dysphagia",
      "roots close to and possibly over the inferior dental canal; cone beam scan may be indicated",
      "warned of nerve risk",
      "irrigation, chlorhexidine, analgesia; no antibiotic now",
      "penicillin allergy; metronidazole 400 mg three times daily three days only if systemic signs",
      "contact same day if fever, facial swelling or difficulty swallowing",
      "mild asthma, salbutamol, combined oral contraceptive pill",
      "prefers local anaesthetic; open to sedation; short notice"
    ],
    "notesLeftOut": [
      "temperature and pulse values — summarised as afebrile",
      "other teeth, orthodontic history, hygiene routine — not relevant to the surgery",
      "37 sound with no distal caries — no additional treatment needed",
      "glandular fever, previous anaesthetic history — not relevant",
      "salt water rinses, information sheet — routine advice already given",
      "work, hobbies, family, parking, whitening, driving question — not clinically relevant"
    ],
    "safety": [
      {
        "point": "Penicillin allergy (rash)",
        "where": "paragraph 4"
      },
      {
        "point": "Roots close to the inferior dental canal; nerve risk explained; cone beam scan may be indicated",
        "where": "paragraph 3"
      },
      {
        "point": "Metronidazole only if systemic signs develop",
        "where": "paragraph 4"
      },
      {
        "point": "Same-day contact if fever, facial swelling or difficulty swallowing",
        "where": "paragraph 4"
      },
      {
        "point": "Limited mouth opening of approximately 30 mm",
        "where": "paragraph 2"
      },
      {
        "point": "Medications: salbutamol and combined oral contraceptive pill",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-dentistry-orthodontic-referral-for-crowding-and-impacted-canine": {
    "header": [
      "Dr Samuel Reece",
      "Specialist Orthodontist",
      "[Practice address]",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Reece,",
    "re": "Re: Miss Aisha Rahman, aged 13, crowding and palatally displaced 23",
    "body": [
      "I would be grateful if you could assess Aisha, aged 13, for treatment of dental crowding and a palatally displaced upper left permanent canine, including possible surgical exposure of 23.",
      "She has a Class II division 1 incisor relationship, an overjet of 6 mm and an increased, incomplete overbite. Crowding is moderate, around 6 mm upper and 4 mm lower. The deciduous canine 63 is retained and firm, and 23 is not palpable buccally, with a slight palatal bulge.",
      "A panoramic radiograph taken on 4 September 2026 shows 23 palatally positioned, overlapping the lateral incisor root by more than half its width. No resorption is evident at present, and root development of 23 is approximately three-quarters complete. As resorption can develop, the roots of 22 should be monitored radiographically meanwhile.",
      "She is caries free, with good oral hygiene, and has no medical history, medications or allergies. She is self-conscious about her smile and keen to wear braces, and her mother is keen for treatment to proceed. Both understand that treatment may take two years or more and depends on excellent oral hygiene. Clinical photographs have been taken, and both are happy for records to be shared."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Elmwood Dental Practice"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The opening sentence names the patient, the two problems and the possible need for surgical exposure, so the orthodontist knows exactly what is requested.",
      "selection": "The occlusal measurements, the retained deciduous canine, the radiographic position of 23 and the root resorption risk are kept. Her eczema, broken arm, music, family holidays and questions about NHS funding and coloured bands are left out, as she can raise these at the assessment.",
      "organisation": "Request, then clinical findings, then radiographic findings with the monitoring risk, then her suitability for treatment and consent.",
      "tone": "Professional between dental colleagues, with a sensitive note on the patient's concerns about her appearance."
    },
    "notesUsed": [
      "crowding with palatally displaced 23; possible surgical exposure",
      "Class II division 1; overjet 6 mm; overbite increased, incomplete",
      "crowding about 6 mm upper, 4 mm lower",
      "63 retained, firm; 23 not palpable buccally; slight palatal bulge",
      "radiograph 4 September 2026: 23 palatal, overlapping lateral incisor root by more than half",
      "no resorption yet; root of 23 about three-quarters formed",
      "monitor 22 roots radiographically",
      "caries free, good hygiene; no medical history, medications or allergies",
      "self-conscious; keen for braces; mother supports",
      "two years or more; depends on excellent hygiene",
      "photographs taken; happy to share records"
    ],
    "notesLeftOut": [
      "molar relationship, centrelines, lip competence, profile — the orthodontist will record full measurements",
      "fissure sealants and fluoride varnish — routine preventive care",
      "eczema, fractured arm, vaccinations — not relevant",
      "brother's treatment, father's support — not essential",
      "school, clarinet, swimming, holidays — not clinically relevant",
      "questions about holidays, NHS funding and coloured bands — for the orthodontist to answer at assessment"
    ],
    "safety": [
      {
        "point": "Risk of root resorption of 22; monitor radiographically in the interim",
        "where": "paragraph 3"
      },
      {
        "point": "No medications or allergies",
        "where": "paragraph 4"
      },
      {
        "point": "Treatment depends on excellent oral hygiene",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-dentistry-periodontal-referral-for-advanced-bone-loss": {
    "header": [
      "Dr Helena Marsh",
      "Specialist Periodontist",
      "[Practice address]",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Marsh,",
    "re": "Re: Mr David Okoro, aged 52, generalised stage III, grade C periodontitis",
    "body": [
      "I would be grateful if you could see Mr Okoro for specialist management, including consideration of surgery, of generalised stage III, grade C periodontitis unresponsive to non-surgical therapy.",
      "He presented with bleeding gums, loose lower incisors and halitosis for eight months. Full-mouth debridement and oral hygiene instruction were completed on 8 May 2026, but re-evaluation on 10 July showed minimal improvement. Although his plaque score fell from 85% to 45%, control remains suboptimal posteriorly.",
      "Today, generalised probing depths were 6 to 8 mm, with bleeding at 70% of sites and suppuration from two lower anterior sites. Teeth 31 and 41 have grade II mobility, and 16 and 46 have grade II furcation involvement. Radiographs show generalised horizontal bone loss, with vertical defects at 16, 26 and 36.",
      "Two risk factors are significant. He has type 2 diabetes, with an HbA1c of 68 mmol/mol in June 2026, and he smokes 15 cigarettes a day, having declined cessation support twice. Both were reinforced today, and he understands that treatment is unlikely to succeed without addressing them.",
      "He is allergic to penicillin (urticarial rash) and takes metformin and amlodipine. Supportive cleaning continues here every three months, and charting and radiographs are enclosed."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Northgate Dental Practice"
    ],
    "bodyWords": 199,
    "commentary": {
      "opening": "The first sentence makes the request, names the diagnosis and explains why specialist care is needed: non-surgical therapy has failed.",
      "selection": "The treatment already given, the response, current clinical and radiographic findings and the two major risk factors are kept. His shoulder strain, house move, football, holidays and questions about parking and Saturday appointments are left out.",
      "organisation": "Request, then history and treatment to date, then today's findings, then risk factors, then allergy, medication and interim care.",
      "tone": "Professional and objective, stating the risk factors frankly but without judgement."
    },
    "notesUsed": [
      "generalised stage III, grade C periodontitis unresponsive to non-surgical therapy; consider surgery",
      "bleeding gums, loose lower incisors, halitosis for eight months",
      "debridement 8 May 2026; re-evaluation 10 July minimal improvement",
      "plaque score 85% to 45%; suboptimal posteriorly",
      "probing 6 to 8 mm; bleeding 70%; suppuration two lower anterior sites",
      "31 and 41 grade II mobility; furcation grade II at 16 and 46",
      "horizontal bone loss; vertical defects at 16, 26, 36",
      "HbA1c 68 mmol/mol June 2026",
      "smokes 15 a day; declined cessation support twice",
      "risk factors reinforced; treatment unlikely to succeed without them",
      "penicillin allergy, urticarial rash",
      "metformin, amlodipine",
      "supportive cleaning every three months; charting and radiographs enclosed"
    ],
    "notesLeftOut": [
      "earlier attendance history and previous scale and polish — background only",
      "recession, calculus, plaque at the margins — covered by the main findings",
      "previous HbA1c and blood pressure — not needed for the referral",
      "shoulder strain — not relevant",
      "dry mouth, tooth replacement questions — can be discussed at the specialist visit",
      "work, appointment and parking preferences, family, house move, holidays — not clinically relevant"
    ],
    "safety": [
      {
        "point": "Penicillin allergy (urticarial rash)",
        "where": "paragraph 5"
      },
      {
        "point": "Diabetes (HbA1c 68 mmol/mol) and smoking materially affect outcome",
        "where": "paragraph 4"
      },
      {
        "point": "Suppuration and grade II mobility of lower incisors; risk of tooth loss",
        "where": "paragraph 3"
      },
      {
        "point": "Supportive cleaning continues every three months until seen",
        "where": "paragraph 5"
      },
      {
        "point": "Medications: metformin and amlodipine",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-dentistry-referral-to-gp-for-suspected-oral-candidiasis-and-dry-mouth": {
    "header": [
      "Dr Naomi Clarke",
      "General Practitioner",
      "General Practice Surgery",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Clarke,",
    "re": "Re: Mr Albert Siu, aged 71, recurrent oral candidiasis and xerostomia",
    "body": [
      "I am writing to ask you to review Mr Siu's medications and investigate possible underlying causes of his recurrent oral candidiasis and marked xerostomia.",
      "He has had a sore, burning mouth and difficulty wearing his upper denture for six weeks. Examination showed denture-shaped palatal erythema, bilateral angular cheilitis, removable white plaques on the tongue and markedly reduced saliva. There was no induration, ulceration or cervical lymphadenopathy. A similar episode in 2023 settled with a topical antifungal.",
      "For COPD, he uses a fluticasone/salmeterol inhaler twice daily without a spacer and does not rinse afterwards; the corticosteroid is probably a major contributor. He also takes sertraline 100 mg daily and tamsulosin 400 mcg daily, both of which may reduce saliva, although his depression is currently stable. He has no known allergies.",
      "I would be grateful if you could review his inhaler technique, including spacer use and rinsing, review the medications contributing to his dry mouth, and screen him for undiagnosed diabetes.",
      "Today I prescribed a topical antifungal, recommended a saliva substitute and advised overnight denture removal and soaking in chlorhexidine. I will review him in three weeks. With his permission, I will contact his daughter if he does not attend."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Parkview Dental Practice"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The first sentence names the two things the GP is asked to do, review the medicines and look for underlying causes, so the purpose is clear before any history.",
      "selection": "The oral findings, the inhaler habits, the two drying medicines and the three specific requests are kept, because they are what the GP can act on. Hobbies, car park, hearing aid, cataract surgery and bowel screening are left out as irrelevant to candidiasis.",
      "organisation": "Purpose, then symptoms and findings, then the likely causes in his medicines, then the explicit requests, then what the dentist has done and will do next.",
      "tone": "Collegial and concise between clinicians; the dentist suggests causes politely and leaves medication decisions to the GP."
    },
    "notesUsed": [
      "sore, burning mouth, denture difficulty for six weeks",
      "palatal erythema to denture outline, angular cheilitis, removable plaques, reduced saliva",
      "no induration, ulceration or lymphadenopathy",
      "similar episode 2023 settled with topical antifungal",
      "fluticasone/salmeterol twice daily, no spacer, no rinsing",
      "sertraline 100 mg daily, tamsulosin 400 mcg daily",
      "depression stable",
      "no known allergies",
      "requests: inhaler technique/spacer/rinsing, xerostomic medicines, diabetes screen",
      "topical antifungal, saliva substitute, denture removal overnight and chlorhexidine soak",
      "review in three weeks; contact daughter if he does not attend; lives alone"
    ],
    "notesLeftOut": [
      "salbutamol use about twice a week - not contributing to the request",
      "denture age, adjustments and fit details - managed by the dental practice",
      "cataract surgery, bowel screening, BPH detail - not relevant to the candidiasis",
      "alcohol, ex-smoking, gardening, bowls, driving - not needed for this referral",
      "hearing aid batteries, denture adhesive, home visits, car park, flu vaccination - unrelated requests",
      "no weight loss, eating three meals - reassuring but not needed by the GP",
      "denture reline plan - a dental matter"
    ],
    "safety": [
      {
        "point": "Inhaled corticosteroid used without spacer or rinsing, likely major contributor",
        "where": "paragraph 3"
      },
      {
        "point": "Sertraline and tamsulosin may cause dry mouth; depression currently stable",
        "where": "paragraph 3"
      },
      {
        "point": "Screen for undiagnosed diabetes",
        "where": "paragraph 4"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 3"
      },
      {
        "point": "No induration, ulceration or lymphadenopathy (no suspicious features)",
        "where": "paragraph 2"
      },
      {
        "point": "Review in three weeks; daughter contacted if he does not attend",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-dentistry-referral-to-oral-medicine-for-chronic-mucosal-lesion": {
    "header": [
      "Dr Lillian Hart",
      "Consultant in Oral Medicine",
      "Oral Medicine Department",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Hart,",
    "re": "Re: Mrs Theresa Knowles, aged 58, suspected oral lichen planus",
    "body": [
      "I would be grateful if you could assess Mrs Knowles and arrange a biopsy of bilateral white striations with erosive areas suggestive of oral lichen planus, to confirm the diagnosis and exclude dysplasia.",
      "She has had soreness of the inner cheeks and gums for five months, worsening and aggravated by spicy and acidic food. She has no skin, nail or genital symptoms.",
      "Examination showed symmetrical, wipe-resistant lacy white striations on both buccal mucosae, with erythematous erosive patches of approximately 10 mm on the left, and desquamative gingivitis of the lower labial gingiva. There was no indurated mass, no ulceration with rolled margins and no cervical lymphadenopathy. Her denture framework does not touch the affected areas.",
      "She has hypothyroidism, hypertension and hepatitis C, treated and cleared in 2019. She takes levothyroxine 75 mcg each morning and amlodipine 5 mg daily. As the amlodipine was started in October 2025, before the lesions appeared, a lichenoid drug reaction is possible. She has no known allergies.",
      "Meanwhile, I have advised her to avoid sodium lauryl sulphate toothpaste and spicy foods, and reinforced gentle oral hygiene. I would welcome your advice on topical corticosteroid treatment. She is willing to have a biopsy."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Stonebridge Dental Practice"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The request, assessment and biopsy, and its two aims, confirmation and exclusion of dysplasia, come first so the consultant can prioritise the referral.",
      "selection": "Lesion description, the absence of suspicious features, hepatitis C and the timing of amlodipine are kept because they bear on diagnosis. Hobbies, travel plans, the waiting room television and screening history are left out.",
      "organisation": "Request, then symptoms, then examination findings, then medical history and medicines, then interim advice and her willingness to proceed.",
      "tone": "Formal and precise, as suits a consultant; the possible drug reaction is raised tentatively rather than asserted."
    },
    "notesUsed": [
      "bilateral white striations with erosive areas, suggestive of lichen planus; biopsy to confirm and exclude dysplasia",
      "soreness five months, worsening, worse with spicy/acidic food",
      "no skin, nail or genital symptoms",
      "symmetrical lacy striations, erosive patches approximately 10 mm left, desquamative gingivitis",
      "wipe-resistant; no indurated mass, no rolled margins, no lymphadenopathy",
      "denture framework does not contact the areas",
      "hypothyroidism, hypertension, hepatitis C cleared 2019",
      "levothyroxine 75 mcg, amlodipine 5 mg started October 2025; lichenoid reaction to amlodipine a differential",
      "no known allergies",
      "SLS-free toothpaste, avoid spicy food, gentle hygiene; topical steroid for specialist",
      "willing to have biopsy"
    ],
    "notesLeftOut": [
      "hepatitis C transmission route and treatment clinic - the cleared status is what matters",
      "past radiographs, amalgam absence, denture fit details - not needed beyond framework not contacting lesions",
      "single ulcer in 2023 - healed, not related",
      "librarian career, book group, trip to Scotland, waiting room television - irrelevant",
      "husband attending, Thursday mornings, contact by mobile, copy of letter - administrative detail for booking",
      "breast and cervical screening - unrelated",
      "numbing gel - stopped, short relief only",
      "photographs taken today - available on request; omitted for word count"
    ],
    "safety": [
      {
        "point": "Biopsy needed to confirm diagnosis and exclude dysplasia",
        "where": "paragraph 1"
      },
      {
        "point": "No suspicious features: no induration, no rolled margins, no lymphadenopathy",
        "where": "paragraph 3"
      },
      {
        "point": "Possible lichenoid reaction to amlodipine started October 2025",
        "where": "paragraph 4"
      },
      {
        "point": "Hepatitis C history, cleared 2019",
        "where": "paragraph 4"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-dentistry-referral-to-oral-surgeon-after-dental-trauma": {
    "header": [
      "Ms Rebecca Lyons",
      "Oral and Maxillofacial Surgery Registrar",
      "Oral and Maxillofacial Surgery Department",
      "4 September 2026"
    ],
    "salutation": "Dear Ms Lyons,",
    "re": "Re: Mr Thomas Bell, aged 19, suspected root fracture of 21 after sporting injury",
    "body": [
      "I am writing to request urgent review of Mr Bell, who sustained a suspected mid-third root fracture with displacement of his upper left central incisor during a rugby match at approximately 14:00 today, 4 September 2026.",
      "He was struck by another player's shoulder and wore no mouthguard. There was no loss of consciousness, vomiting, headache or visual disturbance, and his facial skeleton is non-tender. His tetanus immunisation is up to date.",
      "On examination, tooth 21 was displaced palatally, extruded by 3 mm and grade II mobile, while 11 was tender to percussion but stable. Periapical and occlusal radiographs suggest a mid-third root fracture of 21, with no alveolar fracture. A lip laceration of approximately 8 mm was cleaned; no foreign body was felt and a soft-tissue radiograph showed no embedded fragments.",
      "Under local anaesthetic, I repositioned 21 and applied a flexible splint from 12 to 22. I prescribed chlorhexidine mouthwash and advised analgesia, a soft diet and no contact sport until your team reviews him.",
      "Please monitor the splint and assess pulp vitality. He knows the tooth may lose vitality and need root treatment. He takes no medication and has no known allergies."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Harbourview Dental Practice"
    ],
    "bodyWords": 193,
    "commentary": {
      "opening": "The urgent request and the injury come first, with the time of injury, because the registrar needs to judge how quickly to see him.",
      "selection": "Head injury screening, tetanus status, clinical and radiographic findings and the treatment given are kept. His studies, match fees, student card photograph, birthday dinner and earlier wrist fracture are left out.",
      "organisation": "Request, mechanism and safety screening, findings, treatment already given, then the specific follow-up needed and his background.",
      "tone": "Brisk and clinical, as between dental and surgical colleagues dealing with acute trauma."
    },
    "notesUsed": [
      "suspected mid-third root fracture of 21 with displacement",
      "rugby match approximately 14:00 today, no mouthguard, shoulder strike",
      "no loss of consciousness, vomiting, headache or visual disturbance; facial skeleton non-tender",
      "tetanus up to date",
      "21 palatal, extruded 3 mm, grade II mobile; 11 tender but stable",
      "periapical and occlusal views; no alveolar fracture",
      "lip laceration approximately 8 mm cleaned, no foreign body felt; soft-tissue radiograph clear",
      "repositioned under LA, flexible splint 12 to 22, occlusion checked",
      "chlorhexidine, analgesia, soft diet, no contact sport",
      "monitor splint, assess vitality; warned of root treatment",
      "fit and well, no medication, no known allergies"
    ],
    "notesLeftOut": [
      "pain score, ice pack, bleeding settled - acute details now resolved",
      "orthodontic history and previous chipped lower incisor - not relevant to this injury",
      "hay fever and wrist fracture - no bearing on treatment",
      "university course, accommodation, parents, alcohol - social detail not needed",
      "mouthguard enquiry, return to play, match fee, student card, birthday dinner, whitening toothpaste - patient questions for later",
      "contact preferences, availability - noted only as 'can attend at short notice'"
    ],
    "safety": [
      {
        "point": "No loss of consciousness, vomiting, headache or visual disturbance (head injury screen)",
        "where": "paragraph 2"
      },
      {
        "point": "Tetanus immunisation up to date",
        "where": "paragraph 2"
      },
      {
        "point": "Lip laceration cleaned; no foreign body felt and soft-tissue radiograph showed no embedded fragments",
        "where": "paragraph 3"
      },
      {
        "point": "No contact sport until reviewed",
        "where": "paragraph 4"
      },
      {
        "point": "Risk of loss of vitality and need for root treatment",
        "where": "paragraph 5"
      },
      {
        "point": "No known allergies, no medication",
        "where": "paragraph 5"
      }
    ]
  },
  "wri-dentistry-referral-to-oral-surgeon-for-dentigerous-cyst": {
    "header": [
      "Mr Jonathan Pryce",
      "Consultant Oral and Maxillofacial Surgeon",
      "Oral and Maxillofacial Surgery Department",
      "4 September 2026"
    ],
    "salutation": "Dear Mr Pryce,",
    "re": "Re: Mr Liam Foster, aged 27, radiolucency associated with unerupted 38",
    "body": [
      "I would be grateful if you could see Mr Foster for surgical exploration, enucleation and histopathology of a well-defined radiolucency associated with his unerupted lower left third molar, 38.",
      "A routine panoramic radiograph on 21 August 2026 revealed the lesion. It is a well-corticated unilocular radiolucency of approximately 3 cm, attached at the cemento-enamel junction of 38 and displacing it inferiorly towards the lower border. The inferior dental canal lies close to its inferior margin. There is no root resorption of 37; a 2019 panoramic view showed a normal follicular space.",
      "He reports dull pressure and intermittent swelling of the left lower jaw for four months, without pain or discharge. On examination, there was mild buccal expansion of the left posterior mandible with intact, non-tender mucosa. Tooth 37 is vital and not mobile. He specifically denies lip or chin paraesthesia, and there is no lymphadenopathy.",
      "He has been warned about possible altered sensation from the inferior dental nerve and the risk of jaw fracture. He is fit and well, takes no medication and has no known allergies.",
      "He wishes to proceed and would prefer a general anaesthetic, but will follow your advice. Digital images are enclosed."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Fairmont Dental Practice"
    ],
    "bodyWords": 196,
    "commentary": {
      "opening": "The letter opens with the exact procedure requested, so the surgeon knows immediately what is being asked and why.",
      "selection": "Radiographic features, the nerve relation, baseline sensation and the warnings already given are kept, as they matter for surgical planning. Gym membership, his sister's pregnancy, the holiday and parking questions are left out.",
      "organisation": "Request, then radiographic findings, then symptoms and examination, then consent warnings and medical status, then his preferences.",
      "tone": "Formal and factual for a consultant surgeon, with no speculation beyond the notes."
    },
    "notesUsed": [
      "well-defined radiolucency with unerupted 38; exploration, enucleation, histopathology",
      "panoramic radiograph 21 August 2026",
      "well-corticated unilocular approximately 3 cm, attached at CEJ, displacing 38 inferiorly",
      "IDC close to inferior margin; no root resorption of 37",
      "2019 panoramic view normal follicular space",
      "pressure and intermittent swelling four months, no pain or discharge",
      "mild buccal expansion, mucosa intact and non-tender",
      "37 vital, not mobile; no paraesthesia; no lymphadenopathy",
      "warned about nerve and fracture risk",
      "fit and well, no medication, no known allergies",
      "prefers general anaesthetic, will follow advice; images sent"
    ],
    "notesLeftOut": [
      "teeth grinding and wear facets - not relevant to the cyst surgery",
      "childhood asthma, collarbone fracture - no bearing on the procedure",
      "mouth opening, TMJ findings - normal, not needed",
      "work, partner, alcohol, hobbies, holiday, gym, sister's baby - social detail",
      "fit note, time off work, keeping the tooth, parking, hygiene appointment - questions for the treating team",
      "gum soreness in 2022 - resolved"
    ],
    "safety": [
      {
        "point": "Inferior dental canal close to the lesion; risk of altered sensation warned",
        "where": "paragraphs 2, 4"
      },
      {
        "point": "Risk of jaw fracture given lesion size warned",
        "where": "paragraph 4"
      },
      {
        "point": "Baseline: no lip or chin paraesthesia",
        "where": "paragraph 3"
      },
      {
        "point": "Histopathology required to confirm diagnosis",
        "where": "paragraph 1"
      },
      {
        "point": "No known allergies, no medication",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-dentistry-referral-to-prosthodontist-for-full-mouth-rehabilitation": {
    "header": [
      "Dr Henry Voss",
      "Specialist Prosthodontist",
      "Prosthodontic Department",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Voss,",
    "re": "Re: Mr Graham Pollard, aged 56, severe tooth surface loss",
    "body": [
      "I would be grateful if you could assess Mr Pollard for complex prosthodontic management of severe tooth surface loss with reduced occlusal vertical dimension, including possible occlusal rehabilitation, increased vertical dimension and indirect restorations.",
      "He reports worn, sensitive teeth and a collapsing bite developing over several years and accelerating recently, and dislikes his short-looking upper anterior teeth. He is a heavy bruxist but wears his stabilisation splint only about two nights a week, and three cracked restorations have been replaced in the past eighteen months.",
      "Examination showed generalised tooth surface loss with exposed dentine on all posterior occlusal surfaces, cupping of the lower molars and a loss of vertical dimension of approximately 4 mm. The palatal surfaces of the upper anterior teeth suggest erosion. There is no active caries, and the periodontium is stable.",
      "Erosion is probably linked to gastro-oesophageal reflux, with breakthrough symptoms despite omeprazole 20 mg daily, and to previous high cola intake, now reduced. I have written separately to his general practitioner about optimising reflux control. He takes diazepam 2 mg occasionally and has no known allergies.",
      "I have reinforced splint wear. He understands treatment will be lengthy and staged, and is motivated to proceed."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Greenway Dental Practice"
    ],
    "bodyWords": 198,
    "commentary": {
      "opening": "The opening states the referral request in full, naming the kinds of treatment to be considered, so the specialist can see the scope at once.",
      "selection": "Causes of wear (bruxism, reflux, diet), the clinical findings and the measured loss of vertical dimension are kept. Golf, his son's wedding, the optician and cost questions are left out.",
      "organisation": "Request, then history and causes, then examination, then medical factors that must be controlled, then his motivation.",
      "tone": "Professional and measured, presenting likely causes without overstating them."
    },
    "notesUsed": [
      "severe tooth surface loss, reduced OVD; rehabilitation, increased vertical dimension, indirect restorations",
      "worn sensitive teeth, collapsing bite, short upper anterior teeth",
      "heavy bruxist, splint worn about two nights a week",
      "three cracked restorations replaced in eighteen months",
      "exposed dentine posteriorly, cupping, loss approximately 4 mm",
      "palatal erosion of upper anteriors; no caries; periodontium stable",
      "GORD with breakthrough on omeprazole 20 mg",
      "previous cola, now reduced",
      "GP letter sent about reflux",
      "diazepam 2 mg occasionally; no known allergies",
      "splint reinforced; lengthy and staged; motivated"
    ],
    "notesLeftOut": [
      "root-treated lower molar, wisdom teeth removed, soft splint history - not essential",
      "endoscopy detail, knee arthroscopy, bowel screening - not relevant",
      "TMJ and soft tissue findings - normal",
      "golf, son's wedding, family - social detail",
      "cost, whitening, electric toothbrush, optician, old splint, nearest clinic - questions to answer elsewhere",
      "travel for work, morning appointments, insurance - booking detail",
      "study models and photographs - available but omitted to keep within the word limit"
    ],
    "safety": [
      {
        "point": "Reflux poorly controlled; must be optimised before treatment (GP letter sent)",
        "where": "paragraph 4"
      },
      {
        "point": "Poor splint compliance threatens new restorations",
        "where": "paragraphs 2, 5"
      },
      {
        "point": "Medicines: omeprazole 20 mg daily, diazepam 2 mg occasionally",
        "where": "paragraph 4"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 4"
      }
    ]
  },
  "wri-dentistry-referral-to-special-care-dentistry-for-anxious-patient": {
    "header": [
      "Dr Claire Donovan",
      "Special Care Dentistry Lead",
      "Special Care Dental Service",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Donovan,",
    "re": "Re: Mr Ryan Doyle, aged 34, toothache and broken tooth",
    "body": [
      "I would be grateful if you could assess Mr Doyle, who has a moderate learning disability and severe dental anxiety, for dental treatment with additional support, likely under intravenous sedation, as he cannot tolerate examination in general practice.",
      "His key worker reports three weeks of lower right pain; he holds his face and refuses hard food, but eats soft food and drinks well. Brief examination showed a broken-down carious tooth in the lower right quadrant, most likely 46, with generalised plaque and gingival inflammation. He was afebrile, with no facial swelling or lymphadenopathy. Charting and radiographs were not possible.",
      "He has well-controlled epilepsy, seizure-free for over two years, and takes sodium valproate 600 mg twice daily. As valproate can affect platelets, a full blood count is needed before any extraction. He has no known allergies.",
      "He was assessed as lacking capacity to consent to treatment, so a best-interests process involving his key worker, his sister as next of kin and the supported living team will be needed. Documentation is enclosed.",
      "I have prescribed high-fluoride toothpaste and advised supervised brushing. He copes best with early morning appointments and a quiet waiting area, and staff need a week's notice."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Willowbank Dental Practice"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The opening combines the request with the reason general practice cannot manage him, which justifies a specialist referral.",
      "selection": "The limited findings, epilepsy and valproate, capacity and best-interests arrangements, and practical needs are kept. His hobbies, room redecoration, flu vaccination and parking are left out.",
      "organisation": "Request, then symptoms and limited findings, then medical history, then consent, then prevention and practical arrangements.",
      "tone": "Respectful and person-centred, while remaining clinical for a specialist colleague."
    },
    "notesUsed": [
      "moderate learning disability, severe anxiety, cannot tolerate examination",
      "likely IV sedation with additional support",
      "lower right pain about three weeks, holding face, refusing hard food",
      "eating soft food, drinking well",
      "broken-down carious tooth, likely 46; plaque and gingivitis",
      "no swelling, no lymphadenopathy, afebrile; no charting or radiographs",
      "epilepsy controlled, no seizure over two years; sodium valproate 600 mg twice daily; no platelet count on record, full blood count needed before extraction",
      "no known allergies",
      "lacks capacity; best interests with key worker, sister, supported living team; documentation enclosed",
      "high-fluoride toothpaste, supervised brushing",
      "early morning, quiet area, a week's notice"
    ],
    "notesLeftOut": [
      "communication style and electric toothbrush - helpful but not essential here",
      "childhood general anaesthetic, last dental visit five years ago - covered by 'cannot tolerate examination'",
      "hearing, vision, weight - normal",
      "day centre, music, swimming, art - social detail",
      "sugar-free drinks, parking, room redecoration, flu vaccination, health check - unrelated",
      "transport, booking contact, hospital passport, letters to sister - administrative detail for the service to obtain",
      "sore upper tooth in 2023 - resolved",
      "withdrawn at mealtimes, sister wishing to attend the meeting — detail the service will gather at the best-interests stage"
    ],
    "safety": [
      {
        "point": "Lacks capacity; best-interests process required",
        "where": "paragraph 4"
      },
      {
        "point": "Epilepsy on sodium valproate 600 mg twice daily (relevant to sedation)",
        "where": "paragraph 3"
      },
      {
        "point": "No facial swelling, afebrile (no current spreading infection)",
        "where": "paragraph 2"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 3"
      },
      {
        "point": "Eating soft food and drinking well",
        "where": "paragraph 2"
      },
      {
        "point": "Sodium valproate may lower platelets and impair function; full blood count needed before any extraction",
        "where": "paragraph 3"
      }
    ]
  },
  "wri-dentistry-transfer-of-paediatric-patient-for-hospital-extractions": {
    "header": [
      "Dr Megan Aldridge",
      "Consultant in Paediatric Dentistry",
      "Paediatric Dentistry Department",
      "4 September 2026"
    ],
    "salutation": "Dear Dr Aldridge,",
    "re": "Re: Master Kofi Mensah, aged 5, multiple carious primary teeth",
    "body": [
      "I am writing to transfer Kofi to your care for extraction of multiple carious primary teeth under general anaesthesia, and to ask you to liaise with his paediatrician about his asthma.",
      "Over the past three months, he has had night-time toothache and two episodes of facial swelling, the most recent in August 2026, treated with antibiotics by his general practitioner. His sleep is disturbed and he missed nursery. Three in-chair attempts have failed: two under local anaesthesia were abandoned, and inhalation sedation in June 2026 was not tolerated.",
      "Examination today showed gross caries with pulpal involvement at 54, 55, 64, 74, 75, 84 and 85, and a sinus tract adjacent to 74, but no facial swelling. The erupting permanent first molars are sound. Radiographs were not possible.",
      "He has moderate persistent asthma with frequent hospital admissions, most recently in May 2026, and has never had a general anaesthetic. He takes an inhaled corticosteroid twice daily, montelukast 4 mg at night and salbutamol as required. He has no known allergies.",
      "Fluoride varnish was applied and preventive advice given to his mother. She consents to treatment and would like it soon. She does not drive and prefers telephone contact."
    ],
    "valediction": "Yours sincerely,",
    "signoff": [
      "[Name]",
      "Dentist",
      "Meadow Dental Practice"
    ],
    "bodyWords": 197,
    "commentary": {
      "opening": "The transfer and the procedure are stated first, together with the second request about asthma, so the consultant knows both tasks from the start.",
      "selection": "Symptoms, failed behaviour management, the affected teeth and the asthma history are kept because they justify and shape treatment under general anaesthesia. Siblings, school letters, toys and the car park are left out.",
      "organisation": "Purpose, then history and failed management, then findings, then anaesthetic risk and medicines, then prevention and family arrangements.",
      "tone": "Professional and clear for a consultant, with the anaesthetic risk flagged firmly."
    },
    "notesUsed": [
      "extraction of multiple carious primary teeth under GA; comprehensive rehabilitation",
      "liaison with paediatrician about asthma and fitness for GA",
      "night-time toothache, two swellings in three months, latest August 2026 with antibiotics",
      "disturbed sleep, missed nursery",
      "three failed in-chair attempts: two under LA abandoned, inhalation sedation June 2026 not tolerated",
      "gross caries 54, 55, 64, 74, 75, 84, 85; sinus at 74",
      "permanent first molars sound; no radiographs; no swelling today",
      "moderate persistent asthma, frequent admissions, latest May 2026; no previous GA",
      "inhaled corticosteroid, montelukast 4 mg, salbutamol",
      "no known allergies",
      "fluoride varnish applied, advice to mother; mother consents, wants it soon; no car; telephone"
    ],
    "notesLeftOut": [
      "bedtime juice and fluoride toothpaste detail - prevention already started; summarised as preventive advice",
      "birth history, ear infection, chipped tooth from fall - not relevant",
      "spacer technique - asthma care for the paediatrician",
      "siblings, school, football, drawing, reading book - social detail",
      "free treatment, school letter, toy, reminder texts, car park, preschool booster - administrative or unrelated",
      "morning appointments, part-time work - booking detail"
    ],
    "safety": [
      {
        "point": "Moderate persistent asthma with frequent admissions; fitness for GA to be checked with paediatrician",
        "where": "paragraphs 1, 4"
      },
      {
        "point": "No previous general anaesthetic",
        "where": "paragraph 4"
      },
      {
        "point": "Recurrent facial swelling; sinus tract at 74 (active infection)",
        "where": "paragraphs 2, 3"
      },
      {
        "point": "Asthma medicines to continue: inhaled corticosteroid, montelukast 4 mg, salbutamol",
        "where": "paragraph 4"
      },
      {
        "point": "No known allergies",
        "where": "paragraph 4"
      }
    ]
  }
};
