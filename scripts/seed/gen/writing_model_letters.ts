// GENERATED — DO NOT HAND-EDIT.
//
// Sources: scripts/content/b2-model-letters-2026-10-30.json sha256(first 16) = 1d8ece0ff6a8d6c5
//          scripts/content/b4-model-letters-2026-10-30.json sha256(first 16) = 33a773da17d38df8
// Built by scripts/seed/gen/_build_model_letters.mts, which checks every letter against the seed before writing
// (scripts/seed/gen/model-letters-check.ts — the same check scripts/gates/model-letters.ts runs). 60 model letter(s).
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
      "I am writing to hand over Mr Bellini, transferring to your unit at 17:00 today with a confirmed non-ST-elevation myocardial infarction. I would be grateful if you could continue cardiac monitoring pending cardiology review for consideration of angiography.",
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
      "confirmed NSTEMI; arrived 14:20, transferred 17:00",
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
  }
};
