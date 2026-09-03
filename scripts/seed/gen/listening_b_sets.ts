// GENERATED — DO NOT HAND-EDIT.
//
// Source:  C:/Projects/_handoffs/AlmiOET_Listening_PartB_90_items.json
//          sha256(first 16) = 594f9de29efc6ce1
// Built by scripts/seed/gen/_build_listening_sets.mts, which validates every
// payload against the runtime zod schema in src/lib/oet/tasks/listening.ts
// before writing. 90 LISTENING_PART_B item(s).
//
// 15 sets of 6 workplace extracts, 140-165 words, one three-option MCQ each,
// written to the measured law in _handoffs/AlmiOET_likhne_ka_zabta.md §2.
//
// To change an item, change the source JSON and re-run the builder. Editing
// this file by hand breaks the only proof that it matches what was measured.
import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 1 — Two nurses handing over on a medical ward",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(C) is contradicted — physio saw her this morning. (A) is not raised: day four with the temperature settled.",
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
      "questions": [
        {
          "id": "q1",
          "stem": "What is the first nurse's main concern?",
          "options": [
            {
              "id": "a",
              "text": "The antibiotic course has not been completed."
            },
            {
              "id": "b",
              "text": "The discharge plan predates the physiotherapy review."
            },
            {
              "id": "c",
              "text": "The patient has not been assessed by physiotherapy."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Nurse 1: Bay four, bed two — Mrs Achebe, seventy-eight, in on Tuesday with a chest infection. She's on day four of co-amoxiclav and the temperature settled yesterday. Nurse 2: So she's for home? Nurse 1: That's what the plan says, and that's the bit I want to flag. She lives alone, first floor, no lift. Physio saw her this morning and she managed the practice stairs, but she was breathless at the top and she needed two goes at it. Nurse 2: And the plan still says today? Nurse 1: The plan says today because the ward round note was written before physio saw her. I've asked for a review and nobody's been back. If they discharge her on the note as it stands, she's going home to a flight of stairs she can't manage twice. Nurse 2: Right. I'll chase it before the transport is booked. Nurse 1: And put it on the board so the next shift sees it too."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 1 — A pharmacist briefing ward staff",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "\"Not against what the first person says.\" (C) is not addressed and (B) is invented.",
    "payload": {
      "speakers": [
        {
          "role": "Pharmacist",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the pharmacist say about the second check?",
          "options": [
            {
              "id": "a",
              "text": "It must be made against the chart and the pen."
            },
            {
              "id": "b",
              "text": "It is required only for patients on two insulins."
            },
            {
              "id": "c",
              "text": "It may be carried out by any member of staff."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Pharmacist: Two minutes on the new insulin chart, and then I'll leave you alone. The chart is separate from the drug chart, and that is deliberate. Insulin errors in this organisation have overwhelmingly been transcription errors — a dose copied from one chart to another, and the word \"units\" written as a letter U that reads as a nought. So: units is written out in full, every time. No abbreviation is acceptable on this chart, and pharmacy will query any that appears. The second change is the pre-administration check. Two of you sign, and the second person checks the dose against the chart and the type of insulin against the pen — not against what the first person says. If you were told the dose rather than shown it, you have not done the check. And the chart travels with the patient. Three of our incidents last year came from a chart that stayed on the ward."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 1 — A physiotherapist and a student outside a patient's home",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Carrying, steadying, reaching, turning. (A) is never mentioned as a consideration.",
    "payload": {
      "speakers": [
        {
          "role": "Physiotherapist",
          "voice": "alloy"
        },
        {
          "role": "Student",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Why does the physiotherapist suggest the tea-making task?",
          "options": [
            {
              "id": "a",
              "text": "Because it is less tiring than walking the hall."
            },
            {
              "id": "b",
              "text": "Because it shows the patient's confidence at home."
            },
            {
              "id": "c",
              "text": "Because it reveals more than a corridor walk does."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Physiotherapist: Before we go in, one thing. You'll want to assess her walking, and the temptation is to ask her to walk the length of the hall for you. Student: Isn't that what we do in the department? Physiotherapist: It is, and in the department it's the best we can manage. Here you can do better. Ask her to make a cup of tea. Student: Right. Physiotherapist: You'll see the walking, but you'll also see how she carries something while she's walking, whether she uses the worktop to steady herself, whether the kettle is somewhere she can reach, and how she manages the turn between the sink and the table. None of that shows up in a corridor. Student: And if she can't do it? Physiotherapist: Then you've learned that in her kitchen rather than in ours, which is where it matters. Physiotherapist: And say nothing while she does it. The silence is half the assessment."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 1 — A department manager briefing a team",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is the claim he opens by denying.",
    "payload": {
      "speakers": [
        {
          "role": "Manager",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the manager say the new system will achieve?",
          "options": [
            {
              "id": "a",
              "text": "A shorter waiting list within the first year."
            },
            {
              "id": "b",
              "text": "Fewer referrals returned after a month's delay."
            },
            {
              "id": "c",
              "text": "A reduction in the number of referrals made."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Manager: The referral system goes live on the first, and I want to be honest about what it will and will not do. It will not shorten your waiting list. Nobody has claimed that, and if anybody in this room heard that claim, it did not come from me. What it does is put a referral in front of a clinician on the day it arrives, rather than on the day it reaches the top of a pile. Some will come straight back to you with a question, which will feel like extra work, and in the first months it will be extra work. The reason we are doing it is the returns. A third of our referrals currently come back after four weeks because something was missing. Under the new system that question gets asked on day one. The waiting stays the same. The wasted month goes."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 1 — A doctor telephoning a patient's daughter",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "The antibiotic and the oxygen are both mentioned, but neither is what the call is for.",
    "payload": {
      "speakers": [
        {
          "role": "Doctor",
          "voice": "alloy"
        },
        {
          "role": "Relative",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the doctor's purpose in the call?",
          "options": [
            {
              "id": "a",
              "text": "To advise the relative to come today."
            },
            {
              "id": "b",
              "text": "To obtain agreement to a change of antibiotic."
            },
            {
              "id": "c",
              "text": "To explain why the oxygen has been increased."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Doctor: Mrs Reid, thank you for calling back. I wanted to speak to you myself rather than leave a message. Your father had a difficult night. His breathing has got harder and the oxygen he is needing has gone up rather than down. We have started him on a different antibiotic, and I want to be straight with you that I do not think it is going to turn this around. Relative: So what are you saying? Doctor: I am saying that I think he is dying, and that I would rather you heard it from me now than found it out on Friday. I could be wrong. I have been wrong before. But if you were asking me whether to come today or at the weekend, I would come today. Relative: Right. Yes. I'll come. Doctor: I'm here until eight. Ask for me at the desk."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 1 — Two radiographers in a booking office",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "\"Refusing is the last thing, not the first\", which rules out (A).",
    "payload": {
      "speakers": [
        {
          "role": "Radiographer 1",
          "voice": "alloy"
        },
        {
          "role": "Radiographer 2",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the first radiographer advise?",
          "options": [
            {
              "id": "a",
              "text": "Refusing the request until the form is completed."
            },
            {
              "id": "b",
              "text": "Booking the scan and recording the concern."
            },
            {
              "id": "c",
              "text": "Telephoning to ask what is being looked for."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Radiographer 1: Have a look at this one before you book it. Request says CT abdomen, indication \"abdominal pain\". Radiographer 2: That's most of them. Radiographer 1: It is, and normally I would let it go. But look at the age — she's nineteen, there's no pregnancy field completed, and the clinical detail is one word. Radiographer 2: So we phone. Radiographer 1: We phone, and here's the thing — don't phone to say we're refusing it. Phone and ask what they are looking for. Nine times out of ten a question comes out that was never on the form, and half the time the answer is ultrasound rather than us. Radiographer 2: And if they insist? Radiographer 1: Then it's their call and we do it, and we record in the notes that we asked and what they said. Refusing is the last thing, not the first. Radiographer 2: I'll ring now, and I'll write on the request whatever they tell me."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 2 — A dietitian and a staff nurse reviewing a fluid balance chart",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) inverts him — he doubts the totals, he does not endorse them. (C) is never proposed; he asks for the same chart kept properly.",
    "payload": {
      "speakers": [
        {
          "role": "Dietitian",
          "voice": "alloy"
        },
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the dietitian's main point about the chart?",
          "options": [
            {
              "id": "a",
              "text": "Its totals cannot support a decision until recording improves."
            },
            {
              "id": "b",
              "text": "It shows the patient's intake is worse than the ward believes."
            },
            {
              "id": "c",
              "text": "It ought to be replaced by a different form of monitoring."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Dietitian: I've been through Mrs Okonjo's charts for the last four days, and I want to be careful about what we take from them. Nurse: Her intake looks poor. That's certainly what the ward round concluded. Dietitian: It looks poor. Whether it is poor is a separate question. The chart records what is poured and what somebody remembers to document, and on a bay this busy those two things come apart. Her daughter brings in a flask of ginger tea every afternoon and nobody writes it down. The supplement drinks are signed for when they are handed over, not when they are finished, so a good deal of what appears in that column may still be standing in her locker. Nurse: So you don't trust the totals. Dietitian: I don't distrust them. I won't build a nasogastric decision on them. Give me three days of properly witnessed intake and the number will mean something."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 2 — An occupational therapist debriefing two students after a home visit",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(C) is contradicted outright — \"the stairs were never the risk\". (A) is the plan the visit overturned, not its finding.",
    "payload": {
      "speakers": [
        {
          "role": "Therapist",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the therapist say the visit revealed?",
          "options": [
            {
              "id": "a",
              "text": "The patient required more equipment than had been ordered."
            },
            {
              "id": "b",
              "text": "The patient's own routine differed from what she demonstrated."
            },
            {
              "id": "c",
              "text": "The stairs were more hazardous than the department had judged."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Therapist: Before we write this up, I want you to notice what actually changed our plan today. In the department Mrs Ferreira managed the practice stairs, transferred from the plinth, and made a cup of tea at the assessment kitchen without a word of prompting. On that evidence we were ordering a second stair rail and discharging her. In her own kitchen she did none of it the way she showed us. The kettle lives on a shelf above the hob, so she fills it at the sink and carries it full across the room. She has been sleeping in the armchair for a fortnight because the bed is too low, and she had not mentioned it to anybody, because nobody had asked her where she slept. The stairs were never the risk. What she does when nobody is watching is the risk, and we only saw it because we went."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 2 — Two doctors discussing an entry on a handover list",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is never suggested — the record is hers. (B) inverts him: it is the severity, not the drug, that is wrong.",
    "payload": {
      "speakers": [
        {
          "role": "Doctor 1",
          "voice": "alloy"
        },
        {
          "role": "Doctor 2",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the first doctor's concern about the entry?",
          "options": [
            {
              "id": "a",
              "text": "The allergy was recorded against the wrong patient's notes."
            },
            {
              "id": "b",
              "text": "The reaction described does not match the drug that is named."
            },
            {
              "id": "c",
              "text": "An intolerance has been recorded as a true allergy."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Doctor 1: Before you prescribe anything for the chest, look at what's in the allergy box. Doctor 2: Penicillin. That's clear enough, surely. Doctor 1: Read the free text underneath it. Nineteen seventy-eight, as a child, \"came out in a rash and was a bit sick\". No swelling, no wheeze, nothing that sounds like an anaphylactic event, and nobody has revisited it in forty-eight years. That entry has followed her through three hospitals and it has cost her a first-line antibiotic every single admission. Doctor 2: And she's had co-amoxiclav twice this year without incident. Doctor 1: Which is the point. What is written in that box is an intolerance from childhood wearing the word allergy. I'm not going to overrule it at two in the morning on a ward round, but it needs a proper allergy review before the label costs her something serious. Doctor 2: I'll put the referral in this morning and leave the label alone until then."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 2 — A speech and language therapist briefing a healthcare assistant",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is already in place and is explicitly left unchanged. (C) reverses the timing — the watching comes afterwards.",
    "payload": {
      "speakers": [
        {
          "role": "Therapist",
          "voice": "alloy"
        },
        {
          "role": "Assistant",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the therapist ask the assistant to change?",
          "options": [
            {
              "id": "a",
              "text": "To report coughing that begins after the meal ends."
            },
            {
              "id": "b",
              "text": "To thicken all fluids until the next formal review."
            },
            {
              "id": "c",
              "text": "To sit the patient upright for a longer period before eating."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Therapist: Thank you for flagging Mr Bettany. I've reviewed him, and I want to change one thing about what you're reporting, not about what you're doing. Assistant: He didn't cough at all while I fed him this morning. Therapist: I believe you, and that is exactly why I want the change. With a delayed swallow the material sits in the pharynx and is only cleared later, so the cough that matters is often the one that arrives ten or fifteen minutes after the tray has gone. If nobody is still in the bay at that point, it is never recorded, and the notes then say he tolerated the meal. So: stay with the thickened fluids and the upright position, exactly as they are. But sit with him for a quarter of an hour afterwards, and write down anything you hear then. Assistant: Fifteen minutes, and I write down whatever I hear."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 2 — A practice manager talking to a general practitioner about recalls",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is one example she gives, not her point. (C) is not claimed anywhere — she never says how contact is counted.",
    "payload": {
      "speakers": [
        {
          "role": "Manager",
          "voice": "alloy"
        },
        {
          "role": "GP",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the manager say about the recall figures?",
          "options": [
            {
              "id": "a",
              "text": "Letters are going to addresses that are no longer current."
            },
            {
              "id": "b",
              "text": "Those who respond are not the patients most at risk."
            },
            {
              "id": "c",
              "text": "A text message is counted as a completed contact even when it is unread."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Manager: Our diabetic recall figures went to the partners on Monday and they read very well. Seventy-one per cent attended within the quarter. I'd rather you saw what sits underneath that. GP: Go on. Manager: The seventy-one per cent are, overwhelmingly, the patients who were coming anyway. They answer the phone, they read the text, they have a fixed address and they book. The twenty-nine per cent who did not attend include almost everybody the recall was designed for: the two care homes, the patients we send letters to at addresses they left last year, and the men between forty and sixty who have never once responded to a text message. GP: So the number is honest and the conclusion isn't. Manager: The number is fine. It is measuring the wrong people. Our attendance is high because our easiest patients are counted twice a year and our hardest are not counted at all."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 2 — A podiatrist and a diabetes specialist nurse reviewing a footcare pathway",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is never raised — he says the intervals are sound. (B) is close but wrong: the category is acted on, the action simply does not fit the patient.",
    "payload": {
      "speakers": [
        {
          "role": "Podiatrist",
          "voice": "alloy"
        },
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the podiatrist say is wrong with the pathway?",
          "options": [
            {
              "id": "a",
              "text": "Patients are referred later than the national guidance requires."
            },
            {
              "id": "b",
              "text": "The recorded risk category is not translated into any action being taken."
            },
            {
              "id": "c",
              "text": "Those it is meant for are the ones who miss it."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Podiatrist: The pathway itself is sound. I've audited a year of it and I can't fault the categories or the intervals. Nurse: Then why are we still seeing the ulcers? Podiatrist: Because of who the pathway asks to do the work. It assumes a patient who inspects both soles daily, who telephones on the day something changes, and who can get to a Tuesday morning clinic across town. Nearly every ulcer I've admitted this year belonged to somebody who could do none of those three things — poor vision, neuropathy that removes the warning entirely, and no transport. Nurse: They're the high-risk category on paper. The system knows exactly who they are. Podiatrist: The system knows, and then it writes to them. They are marked high-risk and handed a pathway that was designed around somebody low-risk. Until we take the review out to them, the people it exists for are precisely the people it misses."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 3 — A dentist and a dental nurse reviewing a consent form",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(C) is contradicted — she understands the risks. (B) is never suggested; he accepts the signature.",
    "payload": {
      "speakers": [
        {
          "role": "Dentist",
          "voice": "alloy"
        },
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the dentist's concern about the consent?",
          "options": [
            {
              "id": "a",
              "text": "The alternatives were not discussed with the patient."
            },
            {
              "id": "b",
              "text": "The form was signed by the wrong member of staff."
            },
            {
              "id": "c",
              "text": "The patient was not told about the risk of nerve damage."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Dentist: The form is signed, and I still don't want to start. Nurse: It's all filled in. I witnessed it myself this morning. Dentist: I'm not questioning the signature. I'm questioning what she was signing. I've just been through it with her and she believes an extraction is the only thing that can be done for that tooth. Nobody has said the words \"root canal\" to her, and that tooth is perfectly restorable. Nurse: The risks are all written on the form, though. Bleeding, infection, the nerve. Dentist: Risks of the extraction, yes, and she understands those. But consent isn't a list of what a procedure might do to you. It's a choice between the things that could be done, and she has only been shown one of them. I'll see her again after lunch with both options, and if she still wants it out, we take it out."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 3 — A veterinary surgeon debriefing a student after a consultation",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is not raised at all — the diagnosis is settled. (C) sounds reasonable but he never mentions time or questions.",
    "payload": {
      "speakers": [
        {
          "role": "Vet",
          "voice": "alloy"
        },
        {
          "role": "Student",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the vet say the student should have done differently?",
          "options": [
            {
              "id": "a",
              "text": "Waited until all of the test results had come back before saying anything."
            },
            {
              "id": "b",
              "text": "Described what the owner would see rather than giving figures."
            },
            {
              "id": "c",
              "text": "Allowed the owner more time to ask her own questions."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Vet: You were accurate in there. Everything you told Mrs Ansari about the lymphoma was correct, and I don't think she took a single word of it home. Student: I gave her the response rate and the median survival. I thought that was the honest way to do it. Vet: Sixty to seventy per cent and nine to twelve months. Both figures are right, and neither of them tells her what next Tuesday looks like. She is deciding whether to put a fourteen-year-old dog through a course of treatment, and what she actually needs to know is whether he will still want his walk, whether he will be sick after each visit, and how she will be able to tell if it stops being worth it. Student: So describe the weeks, not the statistics. Vet: Give her the numbers if she asks for them. Lead with what she will see."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 3 — An optometrist speaking to a practice receptionist",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) reverses him entirely. (B) is close — she does telephone — but the reason he gives is the symptoms, not confirmation of delivery.",
    "payload": {
      "speakers": [
        {
          "role": "Optometrist",
          "voice": "alloy"
        },
        {
          "role": "Receptionist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the optometrist ask the receptionist to do?",
          "options": [
            {
              "id": "a",
              "text": "Book the patient into the next available routine clinic instead."
            },
            {
              "id": "b",
              "text": "Telephone the hospital to confirm the referral arrived."
            },
            {
              "id": "c",
              "text": "Judge the urgency from the symptoms, not the category."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Optometrist: Mr Duarte's referral is going across as urgent, and I want to explain why, because the letter itself is going to say routine. Receptionist: The template picks that up from the category box, doesn't it? Optometrist: It does, and the category box was filled in before I examined him. Read what he described: a curtain coming across the vision in one eye, three hours ago, painless, and it has not lifted. That is a detached retina until somebody proves otherwise, and the difference between today and next Thursday is whether the macula is still attached when he gets there. Receptionist: So I ring them rather than post it. Optometrist: Ring them, and read them what he said rather than what the form says. If anything on that form ever contradicts the symptoms in front of you, the symptoms win. Receptionist: I'll ring them now and read it out word for word."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 3 — Two theatre nurses at the end of a list",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is not claimed — the totals agree. (C) is never mentioned; the patient is still on the table, which is why she can act.",
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
      "questions": [
        {
          "id": "q1",
          "stem": "What is the second nurse's concern about the count?",
          "options": [
            {
              "id": "a",
              "text": "The same person performed both of the counts."
            },
            {
              "id": "b",
              "text": "One of the swabs was never entered on the board."
            },
            {
              "id": "c",
              "text": "The count was done before the cavity was closed."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Nurse 1: Count's correct. Forty in, forty out, and it's signed. Nurse 2: Who did the second count? Nurse 1: I did. Priya was called out to recovery halfway through and I finished both. Nurse 2: Then it isn't a second count. It's the same count written down twice. The whole reason two people do it is that the second person doesn't already believe the number — and you did, because you'd just said it out loud. Nurse 1: The number is right, though. I'm certain of it. Nurse 2: You may well be. Every retained swab in the literature came out of a theatre where somebody was certain. It costs us four minutes to do it properly with me now, before he leaves the table, and it costs him an operation if we're wrong. Scrub back in and we'll do it together. Nurse 1: All right. I'll scrub, and we will count them again out loud, the two of us together."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 3 — A paediatrician and a practice nurse looking at a growth chart",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is contradicted — he does not doubt today's weight. (C) is never proposed.",
    "payload": {
      "speakers": [
        {
          "role": "Paediatrician",
          "voice": "alloy"
        },
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the paediatrician say about the chart?",
          "options": [
            {
              "id": "a",
              "text": "The measurement taken today is likely to be inaccurate."
            },
            {
              "id": "b",
              "text": "The pattern across visits matters more than today's figure."
            },
            {
              "id": "c",
              "text": "The child should be weighed again before any referral is made."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Paediatrician: Today's weight on its own would not worry anybody. She is on the ninth centile, and plenty of well children sit on the ninth centile all their lives. Nurse: That was rather my reading of it. Paediatrician: Now put your finger on where she was. Fiftieth at eight months, twenty-fifth at fourteen months, ninth today. She has crossed two centile spaces in under a year, and it is that line — the shape of it, not the point at the end of it — that we are meant to be reading. A single measurement is a photograph. The chart is the film. Nurse: So she needs looking into even though the number is within normal limits. Paediatrician: Especially because it is. A child whose weight is obviously low gets seen. This is the pattern that gets missed, because every individual visit looks acceptable. Nurse: Then I'll book her in and bring the line up on the screen for you."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 3 — A community pharmacist briefing a delivery driver",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is contradicted word for word — the daughter is refused. (A) is only what happens if the patient is out, not the instruction.",
    "payload": {
      "speakers": [
        {
          "role": "Pharmacist",
          "voice": "alloy"
        },
        {
          "role": "Driver",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the pharmacist tell the driver?",
          "options": [
            {
              "id": "a",
              "text": "The delivery must be rearranged for a different day entirely."
            },
            {
              "id": "b",
              "text": "A relative may sign for it if they are present in the house."
            },
            {
              "id": "c",
              "text": "It must be signed for by the named patient."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Pharmacist: This one's a controlled drug, so it doesn't travel like the rest of the round. Driver: Same as usual otherwise? If he's out I'll leave it next door, they always take his parcels. Pharmacist: Not this one, and not with a neighbour, and not through the letterbox either. It goes into the hands of Mr Okafor himself, and he signs the register on my form, not the courier app. If his daughter opens the door, it comes back to me. If nobody answers, it comes back to me. Driver: He'll be short over the weekend if I bring it back. Pharmacist: He will, and I'll ring him and we'll arrange a time that works, or he can collect it here. That is a far better problem than a bottle of liquid morphine sitting in a porch because somebody was trying to be helpful. Driver: Understood. Into his hands, or it comes back with me."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 4 — A radiographer telephoning a junior doctor about a request",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(C) inverts it — choosing the projections is her job, once she has the detail. (B) is never raised.",
    "payload": {
      "speakers": [
        {
          "role": "Radiographer",
          "voice": "alloy"
        },
        {
          "role": "Doctor",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the radiographer need from the doctor?",
          "options": [
            {
              "id": "a",
              "text": "The clinical detail that justifies the examination."
            },
            {
              "id": "b",
              "text": "Confirmation that the patient is not pregnant at present."
            },
            {
              "id": "c",
              "text": "A decision about which projections should be taken."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Radiographer: I've got your request for a wrist here and I can't accept it as it stands. Doctor: It says query fracture. What else is there? Radiographer: Query fracture tells me what you are hoping I will find. It doesn't tell me why you think it. Which wrist, what happened to it, where does it hurt when you press, and can she use it — those four things change which projections I take and how I position her. A scaphoid injury and a distal radius injury are photographed differently, and a scaphoid missed today is a wrist that never works properly again. Doctor: She fell onto the outstretched right hand and she's tender in the anatomical snuffbox. Radiographer: Then write exactly that on the card. It is also what justifies the dose, and the person who authorises that dose is me, on the strength of what you have written."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 4 — A speech and language therapist and a ward nurse",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is not mentioned — the board is within reach. (C) is contradicted: he takes about fifteen seconds to find a symbol, so he can use them.",
    "payload": {
      "speakers": [
        {
          "role": "Therapist",
          "voice": "alloy"
        },
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the therapist say is preventing the aid from working?",
          "options": [
            {
              "id": "a",
              "text": "The board has been placed out of the patient's reach."
            },
            {
              "id": "b",
              "text": "Staff are asking questions that need only a yes or no."
            },
            {
              "id": "c",
              "text": "The patient has never been shown how to use the symbols properly."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Therapist: The board is working. It's the conversations around it that aren't. Nurse: He hasn't pointed to a single symbol since Monday. Therapist: I sat at the end of the bay for twenty minutes this morning and I counted. He was asked eleven questions. Every one of them could be answered by a nod. Are you comfortable, do you want the curtain, is that too cold — he never needed the board once, because nobody asked him anything he couldn't finish with his chin. Nurse: We're trying to make it easy for him. Therapist: I know, and that is exactly what closes it down. Ask him where the pain is. Ask him what he wants for lunch. Then wait, and keep waiting past the point where it feels rude, because it takes him about fifteen seconds to find a symbol and most of us give up at four."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 4 — A dietitian and a care home manager",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is never mentioned — cost does not come up. (B) is close but wrong: she objects to the timing, not to the route to prescription.",
    "payload": {
      "speakers": [
        {
          "role": "Manager",
          "voice": "alloy"
        },
        {
          "role": "Dietitian",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the dietitian's main point about the supplements?",
          "options": [
            {
              "id": "a",
              "text": "They cost considerably more than a change to the kitchen menu."
            },
            {
              "id": "b",
              "text": "They should be prescribed only after a formal assessment."
            },
            {
              "id": "c",
              "text": "They are replacing meals rather than adding to them."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Manager: Four of them have lost weight again this month. I'd like them all put on the prescribed drinks. Dietitian: Some of them may well need those. Before that, look at what happened at lunch. Mrs Iyer had a supplement at half past eleven and then ate three mouthfuls of her meal at half past twelve, because she was not hungry. We have moved her calories from a plate she enjoys into a bottle she tolerates, and the total has not gone up at all. Manager: So they're not working. That is not what I was told. Dietitian: They are working exactly as they should, and being used exactly as they should not. They go between meals, or after them — never in the hour before one. Give me a fortnight of that, plus butter and full-fat milk in the kitchen, and then let us count again."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 4 — An occupational therapist and a housing officer",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is not raised — position is never discussed. (C) inverts her point about whose fault the narrow assessment was; funding is not mentioned.",
    "payload": {
      "speakers": [
        {
          "role": "Therapist",
          "voice": "alloy"
        },
        {
          "role": "Officer",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the therapist say about the ramp?",
          "options": [
            {
              "id": "a",
              "text": "It will not help unless the doorway is widened too."
            },
            {
              "id": "b",
              "text": "It has been positioned on the wrong side of the entrance."
            },
            {
              "id": "c",
              "text": "It should be funded by the health service, not housing."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Therapist: I've read the works order and I need it stopped before anybody pours concrete. Officer: It's the ramp your own service asked for. Therapist: It is, and on its own it achieves nothing. I measured the front door yesterday: seven hundred and sixty millimetres of clear opening. Her chair is seven hundred and eighty across the handrims. She can get up to that door beautifully on a new ramp and she still cannot get through it. Officer: Nobody flagged the door. Therapist: Because the referral asked about the step, so the assessment answered about the step. That is my service's fault, not yours. What she needs costed is the whole journey — pavement, ramp, threshold, doorway, and the turn in the hall on the other side. One obstacle removed from a route of five is still a route she cannot use. Officer: I'll hold the order and put the whole route back through costing."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 4 — A physiotherapist speaking to a patient's son by telephone",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is contradicted — he is being asked to exercise daily. (C) invents a timescale; she names a month, and as a condition, not a review date.",
    "payload": {
      "speakers": [
        {
          "role": "Son",
          "voice": "onyx"
        },
        {
          "role": "Physiotherapist",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the physiotherapist explain to the son?",
          "options": [
            {
              "id": "a",
              "text": "His father is not currently well enough for any exercise at all."
            },
            {
              "id": "b",
              "text": "A short daily programme achieves more than a long one."
            },
            {
              "id": "c",
              "text": "The exercises will be reviewed again in about six weeks."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Son: Ten minutes a day seems very little. He was doing an hour in the gym before all this. Physiotherapist: He was, and that is partly why I have written ten. The programme that rebuilds that shoulder is the one he actually does on the fourth Wednesday when it is raining and nothing hurts enough to remind him. Thirty-five minutes looks better on paper and gets abandoned in the second week, and an abandoned programme rebuilds nothing at all. Son: So it's about him keeping it up. Physiotherapist: Entirely. Little and often beats long and occasional, every time, and it is not a compromise — it is the treatment. If he gets to a month of doing it every day, I will happily make it harder. If he tells me he did nothing for three weeks, making it harder would be the worst thing I could do."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 4 — Two nurses handing over at the end of a night shift",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is contradicted — three sets, on time. (B) is contradicted: nobody rang at all.",
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
      "questions": [
        {
          "id": "q1",
          "stem": "What went wrong according to the second nurse?",
          "options": [
            {
              "id": "a",
              "text": "The observations were not repeated often enough overnight."
            },
            {
              "id": "b",
              "text": "The doctor was called but did not attend the ward."
            },
            {
              "id": "c",
              "text": "Each nurse assumed somebody else had made the call."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse 1: Bed nine. His score was six at two o'clock and six again at four. Nurse 2: And who came? Nurse 1: I assumed the ward had already bleeped when it first went up at midnight. Priya thought I had done it at two. Nobody rang. Nurse 2: So the observations were done, on time, three times, and written down correctly, and the one thing they exist for never happened. That is the part I want in the incident form, not the numbers — the numbers are perfect. Nurse 1: It sounds worse said out loud. Nurse 2: It is not about blame. It is that \"somebody has probably already called\" is the sentence that appears in almost every one of these, and the only thing that removes it is saying out loud, at the bedside, who is making the call and at what time. Ring them now, and then we write it up."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 5 — A ward pharmacist and a doctor checking a discharge prescription",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is never raised — no interaction is mentioned. (C) is close, since she does ask for a line of explanation, but the defect is the dose itself.",
    "payload": {
      "speakers": [
        {
          "role": "Pharmacist",
          "voice": "alloy"
        },
        {
          "role": "Doctor",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the pharmacist's concern?",
          "options": [
            {
              "id": "a",
              "text": "The discharge script has restored the pre-admission dose."
            },
            {
              "id": "b",
              "text": "The patient has been given two drugs that interact badly."
            },
            {
              "id": "c",
              "text": "The letter does not say how long the course should last."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Pharmacist: Before this goes to the printer — look at line four. Doctor: Ramipril five milligrams. That's what he came in on. Pharmacist: It is what he came in on, and it is not what he is on now. His creatinine went to a hundred and sixty-eight on day four, ramipril was held, and it was restarted at two and a half on the sixth. He has been on the lower dose for three weeks and his function is stable at that dose. Doctor: The discharge screen pulled his original list. Pharmacist: It always does, and that is the trap. Every reduction we made on this ward disappears the moment somebody accepts what the system offers. His general practitioner will read five milligrams as our considered decision, and nobody will question it, because it came from the hospital. Change it to two and a half, and write one line saying why."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 5 — A physiotherapist telephoning an orthopaedic surgeon",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) and (C) are both reasonable questions that she never asks — she asks only about the amount of weight.",
    "payload": {
      "speakers": [
        {
          "role": "Physiotherapist",
          "voice": "alloy"
        },
        {
          "role": "Surgeon",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the physiotherapist ask the surgeon to specify?",
          "options": [
            {
              "id": "a",
              "text": "Whether the patient may use a stick instead of crutches."
            },
            {
              "id": "b",
              "text": "What \"partial weight bearing\" means in practice."
            },
            {
              "id": "c",
              "text": "How many weeks the restriction is expected to last."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Physiotherapist: I'm ringing about Mrs Halvorsen's post-operative instructions. The note says partial weight bearing and I need you to tell me what you mean by it. Surgeon: The usual — she can put some weight through it. Physiotherapist: That is the difficulty. I have asked four colleagues this month what partial weight bearing means and I have had four different answers: toe-touch, a quarter of body weight, half of it, and as much as comfort allows. Mrs Halvorsen weighs ninety-one kilograms, so half and a quarter are thirty kilograms apart on a fixation you did yesterday. Surgeon: Put her at twenty kilograms through the operated leg. Physiotherapist: Thank you. I will write twenty kilograms in the notes, teach her on the scales so she can feel what twenty is, and everybody after us will read a number instead of a phrase. Surgeon: Do that, and put my name against the number so nobody softens it later."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 5 — A dietitian and a night nurse reviewing an overnight feed",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) inverts her — the rate is correct for an uninterrupted window. (B) is never mentioned; weight does not come up.",
    "payload": {
      "speakers": [
        {
          "role": "Dietitian",
          "voice": "alloy"
        },
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the dietitian say is causing the shortfall?",
          "options": [
            {
              "id": "a",
              "text": "The pump has been running at the wrong rate all week."
            },
            {
              "id": "b",
              "text": "The prescribed volume was calculated for a lighter patient."
            },
            {
              "id": "c",
              "text": "The feed is stopped repeatedly for medications."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Dietitian: He is prescribed fourteen hundred millilitres between eight in the evening and six in the morning, and the chart says he received eight hundred and forty. Nurse: The pump was running whenever I checked it. Dietitian: I am sure it was. Look at when it wasn't. It goes off for the ten o'clock antibiotics, and there is a thirty-minute flush either side of phenytoin, and it comes down again for the morning bloods, and once more when he goes to the bathroom. Each pause is entirely correct on its own and together they take four hours out of a ten-hour window. Nurse: So he can never reach the number. Dietitian: Not at that rate, no. Either the rate accounts for the pauses or the drug times move. What must not happen is another month of a prescription that is arithmetically impossible. Nurse: I'll write the pauses on the chart tonight so you can see them."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 5 — A radiographer and a porter at the department door",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is not the point — the form is already there. (C) shifts the duty away from her, which is the opposite of what she does.",
    "payload": {
      "speakers": [
        {
          "role": "Radiographer",
          "voice": "alloy"
        },
        {
          "role": "Porter",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the radiographer tell the porter?",
          "options": [
            {
              "id": "a",
              "text": "The patient must confirm their own details, not the notes."
            },
            {
              "id": "b",
              "text": "The request form should travel with the patient at all times."
            },
            {
              "id": "c",
              "text": "The ward is responsible for checking before transfer."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Radiographer: Stop there a moment. Who have you brought me? Porter: Mr Patel, bed fourteen. The notes were on the end of the bed and the name matched your list. Radiographer: The notes were on the end of a bed. That is the one thing I can never accept. Beds get swapped at three in the morning, notes get put down on the wrong trolley, and there are two gentlemen called Patel on that ward this week — I checked before you came down. Porter: He's asleep. I didn't want to wake him. Radiographer: Then we wake him gently. He tells me his name, his date of birth and his first line of address, in his own voice, and I match all three against the request. If he cannot tell me, his wristband and a nurse who knows him will do. But not the folder. Porter: Fair enough. I'll wake him and you can ask him yourself."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 5 — An optometrist speaking to a patient's daughter",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is never raised — she does not question the timing. (C) is not mentioned at all.",
    "payload": {
      "speakers": [
        {
          "role": "Daughter",
          "voice": "nova"
        },
        {
          "role": "Optometrist",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the optometrist's main point?",
          "options": [
            {
              "id": "a",
              "text": "The drops are being given at the wrong time of day."
            },
            {
              "id": "b",
              "text": "Most of the dose is not reaching the eye."
            },
            {
              "id": "c",
              "text": "The bottle should be replaced every four weeks."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Daughter: We have not missed a single day. Two drops in each eye, every morning, exactly as it says. Optometrist: I believe you completely, and his pressures tell me almost none of it is getting in. The eye holds about a third of one drop. The second one runs down his cheek — you have been buying twice the medication and using half of it. Daughter: So one drop. Optometrist: One drop, and then the part that matters: close the eye gently and press the inner corner, by the nose, for one full minute. Without that, most of it drains down the tear duct and into his throat within seconds — which is also why he says everything tastes bitter afterwards. Daughter: Nobody has ever told us that. Optometrist: It is rarely written on the box. It is most of the treatment. Daughter: One drop, then a minute on the corner. I'll write it on the bottle."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 5 — A speech and language therapist and a dietitian",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is not suggested — the grade was her own recommendation. (B) names a reason for the low intake that she never gives.",
    "payload": {
      "speakers": [
        {
          "role": "Therapist",
          "voice": "alloy"
        },
        {
          "role": "Dietitian",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the therapist's concern about the thickened fluids?",
          "options": [
            {
              "id": "a",
              "text": "The nursing staff are thickening them to the wrong grade."
            },
            {
              "id": "b",
              "text": "The patient dislikes the taste and refuses them at night."
            },
            {
              "id": "c",
              "text": "They protect one risk and create another."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Therapist: I want to review Mr Sowande's thickened fluids with you, because I think my recommendation is now doing him harm. Dietitian: He is not aspirating, though. That was the whole reason for it. Therapist: He is not, and that part worked. But he was drinking a litre and a half a day before we thickened them and he is drinking six hundred millilitres now. He has had two urinary infections in five weeks and his sodium is climbing. I have protected his chest and I have dried him out. Dietitian: So the safest fluid is one he refuses to drink. Therapist: Exactly. Which is not safe at all — it only looks safe in my notes. Let us try level one instead of level two, with somebody sitting with him, and count what he actually swallows for a week before either of us decides anything."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 6 — Two occupational therapists reviewing a discharge checklist",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) inverts it — the problem is that everything IS ticked. (C) refers to the photograph, not to the checklist itself.",
    "payload": {
      "speakers": [
        {
          "role": "Therapist 1",
          "voice": "alloy"
        },
        {
          "role": "Therapist 2",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the first therapist's concern about the checklist?",
          "options": [
            {
              "id": "a",
              "text": "Every item was confirmed without visiting the home."
            },
            {
              "id": "b",
              "text": "Two items on the list were left blank by the team."
            },
            {
              "id": "c",
              "text": "The checklist is out of date and needs replacing."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Therapist 1: Every box on this is ticked and I am still not signing it. Therapist 2: It went through the multidisciplinary meeting this morning. Nobody raised anything. Therapist 1: Look at where each tick came from. Toilet height — from the son, over the telephone. Bed transfers — from the plinth in our department. Stairs — from what she told us she does. Kitchen access — from a photograph taken four years ago and left in the file. Therapist 2: They are all reasonable sources. Therapist 1: They are all sources about the home rather than from it. A complete checklist and a verified checklist look identical on paper, and only one of them keeps her out of this ward in February. I would rather write \"not assessed\" in four boxes than tick them from a photograph, because \"not assessed\" is at least true and somebody will act on it. Therapist 2: Then we go out to the house tomorrow and tick what we can see."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 6 — A veterinary nurse and a practice receptionist",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is never mentioned. (C) is close but wrong — she asks for a same-day appointment at the practice, not a referral elsewhere.",
    "payload": {
      "speakers": [
        {
          "role": "Receptionist",
          "voice": "alloy"
        },
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the nurse tell the receptionist?",
          "options": [
            {
              "id": "a",
              "text": "The owner should be asked to bring a fresh urine sample with her."
            },
            {
              "id": "b",
              "text": "A rabbit that is not eating must be seen today."
            },
            {
              "id": "c",
              "text": "The appointment should be moved to the emergency service."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Receptionist: I've put Mrs Kearns's rabbit in for Thursday. She said he is just eating a bit less than usual, so it didn't sound urgent. Nurse: Bring that one back to today, please, and ring her now. Receptionist: She really wasn't worried. Nurse: She has no reason to be — it sounds like nothing. A rabbit that goes off its food is not being fussy. Their gut has to keep moving all the time, and when it stops it does not simply wait for Thursday. Twelve hours without eating and we are into gut stasis, and by then we are treating something far more serious than the reason he stopped. Receptionist: So it's different from the dogs and cats. Nurse: Completely. Put a note on the triage sheet: rabbit, guinea pig or any small herbivore not eating is a same-day appointment, whatever the owner says about how mild it seems."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 6 — A podiatrist and a practice nurse looking at a toe",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) reverses him — he asks for them to be stopped. (A) is never raised; dressings are not discussed.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Podiatrist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the podiatrist say about the toe?",
          "options": [
            {
              "id": "a",
              "text": "The wound has been dressed too tightly at each visit."
            },
            {
              "id": "b",
              "text": "The patient needs a longer course of antibiotics."
            },
            {
              "id": "c",
              "text": "The appearance is expected after this procedure."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse: It's red right around the nail fold and there's a discharge, so I've started him on flucloxacillin. Podiatrist: How many days is he post-procedure? Nurse: Nine. Podiatrist: Then stop them, if you are willing to take my word for the toe. That is a phenol reaction, and it is what this operation looks like at nine days on almost everybody. The phenol is applied deliberately, to stop that section of nail ever growing back, and the tissue underneath weeps while it settles. Redness at the fold, a clear or straw-coloured ooze, and it goes on for three to six weeks — I warn every patient before I start, and half of them come to you anyway because it looks alarming. Nurse: What would make you think otherwise? Podiatrist: Spreading redness up the toe, throbbing pain rather than soreness, a smell, or a temperature. He has none of those and he told me it hurts less than last week."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 6 — A doctor and a medical student outside a side room",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is the opposite of what he argues. (C) is never discussed — where they are standing is not his point.",
    "payload": {
      "speakers": [
        {
          "role": "Student",
          "voice": "alloy"
        },
        {
          "role": "Doctor",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the doctor say about waiting for the daughter?",
          "options": [
            {
              "id": "a",
              "text": "Delaying is itself a decision taken for the patient."
            },
            {
              "id": "b",
              "text": "The family should be telephoned and asked to come in first."
            },
            {
              "id": "c",
              "text": "The conversation must always take place in a quiet side room."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Student: Could we not wait until his daughter gets here at six? He shouldn't hear it on his own. Doctor: He asked me directly, ten minutes ago, whether the scan showed what he thought it showed. I said I would come back and tell him properly. Student: Six o'clock is only three hours. Doctor: Three hours in which he lies there certain that we know something and are keeping it from him. That is not protection, it is three hours of the worst kind of guessing. And notice what we would be doing: choosing, on his behalf, that his daughter should hear it with him. He may want that very much. He may not want her in the room at all. Student: So ask him which he wants. Doctor: Ask him. Waiting feels like kindness and it is still a decision somebody made for him. Student: Then I'll come in with you now."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 6 — A staff nurse and a healthcare assistant with a turn chart",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is contradicted — she accepts the chart is accurate. (C) is never mentioned.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Assistant",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the nurse's concern?",
          "options": [
            {
              "id": "a",
              "text": "The turns are being recorded before they are done."
            },
            {
              "id": "b",
              "text": "The patient is being returned to the same side."
            },
            {
              "id": "c",
              "text": "The mattress setting has not been adjusted for his weight."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Nurse: The chart is beautiful. Every two hours, all night, initialled each time. Assistant: We haven't missed one since Friday. Nurse: Read the position column down the page with me. Left, back, left, back, left, back. In fourteen entries he has not once been on his right side, and his left trochanter is the exact spot that has gone red. Assistant: He asks to go back to the left every single time we move him, and he asks straight away. He says lying on the right side pulls on his shoulder. Nurse: Which is a real problem and it needs solving, not working around. Get physiotherapy to look at that shoulder, and in the meantime use the thirty-degree tilt with a pillow so he is off the trochanter without being fully on his right. Turning him on time is only half of it. Turning him somewhere different is the other half."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 6 — A community pharmacist telephoning a general practice",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is contradicted word for word — the strength is right. (B) is never raised.",
    "payload": {
      "speakers": [
        {
          "role": "Pharmacist",
          "voice": "alloy"
        },
        {
          "role": "Receptionist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is wrong with the prescription?",
          "options": [
            {
              "id": "a",
              "text": "The strength of the tablet has been written incorrectly."
            },
            {
              "id": "b",
              "text": "The patient has not had the required blood tests."
            },
            {
              "id": "c",
              "text": "The frequency is daily rather than weekly."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Pharmacist: It's about Mr Ngata's methotrexate. The script has come through as two point five milligrams, four tablets, once daily. Receptionist: I'll bring it up. Is the strength wrong? Pharmacist: The strength is right and the number of tablets is right. It is the word \"daily\". That dose is a weekly dose — ten milligrams once a week, on the same named day, and the patient should be able to tell you which day it is. Written as daily it is seven times what he should have, and this is the error that has killed people. Receptionist: He hasn't collected it yet. Pharmacist: He has not, and he will not until this is reissued. I need it rewritten with the day of the week on the label, and please ask whoever signed it to check that the repeat template says weekly as well, or it will come back to me next month."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 7 — Two nurses at an emergency department triage desk",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is never mentioned — no target is discussed. (C) overstates her: she asks for fifteen minutes, not resuscitation.",
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
      "questions": [
        {
          "id": "q1",
          "stem": "What does the first nurse say about the category?",
          "options": [
            {
              "id": "a",
              "text": "It reflects the complaint, not the observations."
            },
            {
              "id": "b",
              "text": "The waiting time target for this patient has already been breached."
            },
            {
              "id": "c",
              "text": "The patient should be moved to the resuscitation area."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Nurse 1: Cubicle eight has been booked in as a category four. I'm moving her up. Nurse 2: She came in with an ankle, didn't she? Walked in on it. Nurse 1: She walked in on it, and that is what the category was set from. Now read what I wrote underneath: pulse a hundred and twenty-six, respiratory rate twenty-eight, and she is grey. Nobody gets to a hundred and twenty-six from a twisted ankle. Nurse 2: She hasn't complained of anything else. She was chatting to her daughter when I walked past. Nurse 1: She has not, and she is eighty-one, and she will not. That generation apologises for taking up a chair. The complaint is what brings them through the door. The observations are what tell us how ill they are, and when the two disagree the observations win every time. Ankle or no ankle, I want her seen inside fifteen minutes."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 7 — A community nurse telephoning a general practitioner",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is never raised — infection is not mentioned. (C) sounds plausible but she asks for readings, not a clinic appointment.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Doctor",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the nurse ask the doctor to change?",
          "options": [
            {
              "id": "a",
              "text": "To prescribe a stronger antibiotic for the ulcer."
            },
            {
              "id": "b",
              "text": "To review whether compression can be started."
            },
            {
              "id": "c",
              "text": "To arrange for the patient to be seen in clinic."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Nurse: I've been dressing Mrs Aluko's leg three times a week since April and it has not closed a millimetre. I don't think another dressing is the answer. Doctor: What would you like me to do? Nurse: Look at whether she can have compression. Everything I am doing is happening on the surface of a problem that is underneath it — the fluid comes back down her leg every night, and the best dressing in the world cannot argue with gravity. Her ankle pulses feel present to me, but I am not the person who decides that on a feel. Doctor: So the pressure readings first. Nurse: Please. If those are safe, she can be in compression within a fortnight, and then the dressing becomes the small part of it. If they are not, I would rather know why we are not compressing than keep changing gauze until Christmas."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 7 — A dental therapist and a practice receptionist",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) and (B) are both what she refuses — she brings him in today, with a different clinician if necessary.",
    "payload": {
      "speakers": [
        {
          "role": "Receptionist",
          "voice": "alloy"
        },
        {
          "role": "Therapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the therapist tell the receptionist?",
          "options": [
            {
              "id": "a",
              "text": "The patient should take painkillers until Monday."
            },
            {
              "id": "b",
              "text": "The appointment can wait until the usual dentist returns."
            },
            {
              "id": "c",
              "text": "Swelling and difficulty swallowing must be seen now."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Receptionist: Mr Craddock's on the phone about a toothache. Our next slot with his own dentist is Monday morning, so I was going to give him that. Therapist: Ask him two things before you book anything. Is his face swollen, and can he swallow comfortably? Receptionist: He did say the side of his face looks puffy. Therapist: Then he is not a Monday. A swelling that reaches the floor of the mouth or up towards the eye stops being a dental problem and becomes an airway problem, and it can move from puffy to serious inside a day. I would rather see six people who turn out to be fine than post one of them a prescription and find out on Monday. Receptionist: So bring him in today. Therapist: Today, with me if his own dentist is full, and ring him back within the hour if he cannot get here."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 7 — A paediatric dietitian and a mother in clinic",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is what she postpones — \"before we discuss anything else\". (C) is not suggested; she changes the amount and the timing, not the milk.",
    "payload": {
      "speakers": [
        {
          "role": "Mother",
          "voice": "nova"
        },
        {
          "role": "Dietitian",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the dietitian explain?",
          "options": [
            {
              "id": "a",
              "text": "The milk is crowding out iron-rich food."
            },
            {
              "id": "b",
              "text": "The child requires a prescribed vitamin and mineral supplement."
            },
            {
              "id": "c",
              "text": "Cow's milk should be replaced with a formula."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Mother: He is a good drinker. He has his bottle in the morning, one at lunch, one in the afternoon and one at bedtime, so at least I know he is getting something. Dietitian: That is about a litre and a half a day, and it is why he is not hungry at any meal. Milk is not a poor food — it is a very filling one, and it carries almost no iron. Every bottle that goes in before a meal takes the place of the meat, the beans, the eggs and the bread that would. Mother: So he is eating badly because he is drinking well. Dietitian: In effect, yes. Bring it down to about three hundred and fifty millilitres a day, in a cup, and always after food rather than before it. Give that six weeks before we discuss anything else at all."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 7 — A physiotherapist and a ward manager",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) inverts her — the attenders are well. (C) confuses transport, which she mentions, with the room's location, which she does not.",
    "payload": {
      "speakers": [
        {
          "role": "Manager",
          "voice": "alloy"
        },
        {
          "role": "Physiotherapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the physiotherapist's concern about the class?",
          "options": [
            {
              "id": "a",
              "text": "The exercises are too demanding for most attenders."
            },
            {
              "id": "b",
              "text": "Those at highest risk are not the ones attending."
            },
            {
              "id": "c",
              "text": "The class is held too far from the main entrance."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Manager: The falls group is full every Tuesday. Twenty-two last week. I was going to put it in the quarterly report as our success story. Physiotherapist: Please look at who those twenty-two are first. I know most of them by name now. They walk in, several of them drive there, and not one has fallen this year. Manager: They are exactly the people we invited. Nobody has ever struggled with a single movement in there. Physiotherapist: They are the people who can accept an invitation. The four who fell on this ward last month all live alone, none of them can manage the bus, and two of them cannot read the letter we sent, and one has not left her flat since February. A class with twenty-two well people in it is a lovely class. It is not a falls service, and the attendance figure is going to tell the board that it is."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 7 — A radiographer and a radiologist reviewing a report",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) and (B) are both contradicted — the nodule is clearly described and it is in the report.",
    "payload": {
      "speakers": [
        {
          "role": "Radiographer",
          "voice": "alloy"
        },
        {
          "role": "Radiologist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the concern about the finding?",
          "options": [
            {
              "id": "a",
              "text": "The image quality was too poor to be certain."
            },
            {
              "id": "b",
              "text": "The nodule was missed on the original report."
            },
            {
              "id": "c",
              "text": "The report may reach nobody now responsible."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Radiographer: This is the abdominal scan from the eleventh. The nodule is in the report, right at the end, and it is clearly described. Radiologist: Then what is worrying you? Radiographer: Who reads it. It was requested by the surgical team, the patient went home on the fourteenth, and the team discharged him the same day. That report is going to land in a workflow belonging to people who no longer have a patient. Radiologist: His general practitioner gets a copy of every report we issue, automatically. Radiographer: A copy, among about ninety letters that week, with the important line eleven lines down. I am not saying anybody has done anything wrong. I am saying that between us we have written something true and there is no named person whose job it is to act on it in three months. A finding without an owner is a finding that waits for a symptom."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 8 — A pharmacist and a pre-registration student",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is what he defers until after the check. (C) is never suggested — she already knows which is which.",
    "payload": {
      "speakers": [
        {
          "role": "Student",
          "voice": "alloy"
        },
        {
          "role": "Pharmacist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the pharmacist say the student should do?",
          "options": [
            {
              "id": "a",
              "text": "Ask the patient to demonstrate her own technique."
            },
            {
              "id": "b",
              "text": "Refer her back for a higher-strength inhaler."
            },
            {
              "id": "c",
              "text": "Explain the difference between the preventer and the reliever inhaler."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Student: She has been on the brown one twice a day since March and she is still using the blue one most days. Should we be asking for a stronger preventer? Pharmacist: Possibly. Before anybody asks for anything, there is one step, and it is the step almost everybody skips because it feels rude. Student: Which is? Pharmacist: Put the device in her hand and say, \"show me exactly what you do at home.\" Not describe it — do it. Every time I have done that I have learned something the conversation would never have given me. Somebody firing two puffs into the back of the throat in one breath. Somebody who has not breathed out first. Somebody holding it upside down. Student: And if her technique is wrong, the dose was never the problem. Pharmacist: Then a stronger dose is a stronger dose of something that is landing on her tongue."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 8 — Two optometrists discussing a school screening letter",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) inverts the point about his age — being six is an advantage here. (C) is never mentioned.",
    "payload": {
      "speakers": [
        {
          "role": "Optometrist 1",
          "voice": "alloy"
        },
        {
          "role": "Optometrist 2",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the concern about the screening result?",
          "options": [
            {
              "id": "a",
              "text": "The child was too young for the test to be valid."
            },
            {
              "id": "b",
              "text": "The eyes were not tested one at a time."
            },
            {
              "id": "c",
              "text": "The result has been sent to the wrong practice."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Optometrist 1: The mother has brought in the school letter. It says he passed, and she still thinks something is wrong. Optometrist 2: What is she seeing at home? Optometrist 1: He sits about a foot from the television, he closes his left eye when he is concentrating, and he has stopped catching a ball. And the screening was done the way it usually is in a hall of thirty children — both eyes open, one chart at the far end. Optometrist 2: So a good right eye can carry a poor left one straight through it. Optometrist 1: Every time. He reads the chart, he passes, and nobody has ever asked that left eye to work on its own. He is six, which gives us a window that will not be open at nine, so I would rather occlude and test him properly this afternoon than trust that letter. Optometrist 2: Book him this afternoon. I'll cover your four o'clock."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 8 — A staff nurse and a patient's son",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is exactly what she overrules. (B) is never said — she talks about tonight, not about the future.",
    "payload": {
      "speakers": [
        {
          "role": "Son",
          "voice": "onyx"
        },
        {
          "role": "Nurse",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the nurse tell the son?",
          "options": [
            {
              "id": "a",
              "text": "Visiting should be limited so that he can rest."
            },
            {
              "id": "b",
              "text": "The confusion is likely to be permanent from now on."
            },
            {
              "id": "c",
              "text": "A familiar person helps more than quiet does."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Son: I'll go. I know it's past visiting and he's not making much sense tonight anyway. Nurse: Sit down, if you can stay. I would much rather you were here than not. Son: I thought he needed rest and quiet. Nurse: Quiet is the one thing this ward gives him too much of. He is in a room he does not know, with people he has never met, and every hour of that makes the confusion worse, not better. You are the only thing in this bay he recognises. Say his name, tell him where he is and what day it is, put his glasses on him, and talk about ordinary things. Son: He asked me twice who I was. Nurse: He will ask again, and you answer again, and it is still worth it. I will bring you a chair and a blanket. Son: Then I'll stay. Could you leave his glasses on the locker for me?"
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 8 — A veterinary surgeon and a dairy farmer",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) keeps the whole-herd approach he refuses. (C) is contradicted — he treats the four today.",
    "payload": {
      "speakers": [
        {
          "role": "Farmer",
          "voice": "alloy"
        },
        {
          "role": "Vet",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the vet recommend?",
          "options": [
            {
              "id": "a",
              "text": "Treating the ill animals rather than the group."
            },
            {
              "id": "b",
              "text": "Changing to a different antibiotic for the whole herd."
            },
            {
              "id": "c",
              "text": "Waiting for the laboratory results before treating anything."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Farmer: Four of them are coughing now. I'd sooner run the whole shed through it and be done. Vet: I understand why, and I am not going to sign for that. Treat the four that are ill, today, properly, and I will come back on Thursday for anything new. Farmer: It seems half a job. I've the whole shed to think about, not four of them. Vet: It is the job. Every animal you treat that did not need it is a week of that drug working on the bugs in your shed rather than on a sick cow — and the year you do need it for a calf that is really down, it is the shed that decides whether it works. Then look up. Those vents have not been opened since I was last here, the far end is standing in its own moisture, and the air in that shed is doing more damage to their lungs than any bacterium in it."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 8 — A speech and language therapist and a class teacher",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) and (C) are both changes to the classroom that she never proposes — she changes what the teacher does while he is speaking.",
    "payload": {
      "speakers": [
        {
          "role": "Teacher",
          "voice": "alloy"
        },
        {
          "role": "Therapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the therapist ask the teacher to do?",
          "options": [
            {
              "id": "a",
              "text": "Move him to the front of the class for reading."
            },
            {
              "id": "b",
              "text": "Give him time instead of finishing his sentences."
            },
            {
              "id": "c",
              "text": "Excuse him from reading aloud in front of others."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Teacher: I have been telling him to slow down and take a breath, and I finish the word for him when he is really stuck. I thought that was kinder than letting him struggle. Therapist: It is meant kindly and it is making it harder, and almost every adult in his life is doing the same thing. When you finish the word, what he learns is that he ran out of time. Next sentence he starts faster, and speed is where the blocks live. Teacher: So I say nothing and let the silence sit there, with thirty of them waiting. Therapist: Keep looking at him, keep your face where it was, and wait. Four seconds feels like a minute to you and it is nothing to him. And slow your own speech down — he will follow your pace without either of you ever mentioning it, and so will the rest of them."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 8 — An occupational therapist speaking to an employer",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is the employer's plan that she argues against. (B) overstates her — the lifting comes out temporarily, \"until I say otherwise\".",
    "payload": {
      "speakers": [
        {
          "role": "Employer",
          "voice": "alloy"
        },
        {
          "role": "Therapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the therapist recommend to the employer?",
          "options": [
            {
              "id": "a",
              "text": "Keeping the post open until he has fully recovered."
            },
            {
              "id": "b",
              "text": "Reducing his duties permanently from now on."
            },
            {
              "id": "c",
              "text": "A staged return before he is completely well."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Employer: His job is safe. I've told him that. He comes back when he is a hundred per cent and not a day before. Therapist: That is generous, and I would like to talk you out of half of it. The longer he sits at home waiting to be a hundred per cent, the smaller the chance he ever comes back at all — and it has almost nothing to do with the shoulder. Employer: He can hardly lift a box. I've seen him struggle with his own coat. Therapist: Then he does not lift boxes. Two mornings a week on the counter and the ordering, building up over six weeks, with the lifting written out of it until I say otherwise. He keeps his place in the team, his day has a shape, his colleagues see him rather than hear about him, and you get something back on the days he is there."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 9 — A podiatrist and a diabetes specialist nurse",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is never proposed — he asks for a daily check, not new footwear. (C) is not mentioned; the shoes are worn all day either way.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Podiatrist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the podiatrist say about the shoes?",
          "options": [
            {
              "id": "a",
              "text": "A seam inside them is causing the damage."
            },
            {
              "id": "b",
              "text": "They should be replaced with prescribed surgical footwear immediately."
            },
            {
              "id": "c",
              "text": "The patient should wear them for shorter periods each day."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Nurse: Same spot as last time, on the outside of the fifth toe. I cannot work out what keeps doing it. Podiatrist: I can. Put your hand inside his right shoe, up near the little toe, and run your thumb along the lining. Nurse: There's a ridge. A seam, is it? Podiatrist: A seam, and it has worn through the lining so it sits proud of it. On your foot or mine that is an irritation and we would have moved our foot half an hour in. He has no protective sensation past the ankle, so nothing tells him anything at all until it has broken the skin, and by then it is a fortnight old. Nurse: He has worn those shoes for years. Podiatrist: They were fine for years. The shoe changed and he could not feel it change. Hand inside both shoes, every morning, before they go on."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 9 — Two nurses after a morning medication round",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is the suggestion she turns down. (C) is never raised — she does not move anything, she changes what may reach her.",
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
      "questions": [
        {
          "id": "q1",
          "stem": "What does the first nurse suggest?",
          "options": [
            {
              "id": "a",
              "text": "That a second nurse checks every dose given."
            },
            {
              "id": "b",
              "text": "That the round is protected from interruption."
            },
            {
              "id": "c",
              "text": "That the drug trolley is moved to a quieter area."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Nurse 1: That round took me an hour and fifty minutes and I have counted it up. Twelve interruptions. Two bleeps, a relative, the phone twice, a delivery, and somebody wanting the keys. Nurse 2: It is always like that. You get used to it. Nurse 1: That is what worries me. Every one of those pulled me out mid-patient, and when I came back I had to decide where I was — and deciding where you were is exactly where the error goes in. I very nearly gave bed six the eleven o'clock dose twice this morning. Nurse 2: Do we need somebody double-checking behind you? Nurse 1: That is another pair of hands doing the same interrupted job. Give me a tabard nobody speaks to, hold the non-urgent calls for that hour, and let the keys wait. Protect the hour and the checking looks after itself. Nurse 2: I'll take that to the ward meeting on Thursday. Twelve is hard to argue with."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 9 — A nurse and a doctor at the nurses' station",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is not suggested — she accepts the clinical judgement. (B) is never mentioned; the form was completed today.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Doctor",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the nurse's concern about the form?",
          "options": [
            {
              "id": "a",
              "text": "It was signed by somebody too junior to do so."
            },
            {
              "id": "b",
              "text": "It has not been reviewed since his admission."
            },
            {
              "id": "c",
              "text": "The decision was never discussed with him."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse: The resuscitation form for bed twelve is completed and signed, and I want to ask you something about it before it goes in the folder. Doctor: It is the right decision. His heart, his kidneys and that chest — chest compressions would break his ribs and change nothing. Nurse: I am not arguing with a word of that. I am asking who has told him. He talked to me at four o'clock this morning about getting home for his granddaughter's wedding. Doctor: It is a clinical decision. It is not his to make. Nurse: It is not his to make and it is still his to be told. He is fully able to hold a conversation, he has asked me twice what happens if he gets worse, and he is going to find that form in his notes one day. It is far better that he hears it from you this afternoon, sitting down."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 9 — A dietitian and a hospital catering manager",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) and (C) are both plausible catering changes that she never mentions — she changes what is served by default, not the range or the timing.",
    "payload": {
      "speakers": [
        {
          "role": "Dietitian",
          "voice": "alloy"
        },
        {
          "role": "Manager",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the dietitian ask the manager to change?",
          "options": [
            {
              "id": "a",
              "text": "To offer full-fat options as the standard choice."
            },
            {
              "id": "b",
              "text": "To provide considerably more variety across the weekly menu."
            },
            {
              "id": "c",
              "text": "To serve the main meal at a slightly later time."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Dietitian: I have been through this week's menu and I want to change the default, not the choices. Manager: Everything on it meets the healthy eating standard. That took us two years. Dietitian: For your staff canteen it is excellent. On ward nine it is the wrong food for the wrong people. My patients are eating a third of what is on the plate, most of them have lost weight since admission, and the milk that goes on the trolley is skimmed. A man recovering from surgery does not need a low-fat yoghurt. He needs the calories in the smallest volume you can get them into, because four spoonfuls is all he will manage. Manager: So full fat by default, and the lighter options on request? Dietitian: Exactly that way round. Full cream milk, butter on the potato, real custard — and keep everything you have built for the people who want it."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 9 — A physiotherapist and a patient in an outpatient clinic",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is the opposite — she asks for twenty minutes on bad days too. (C) sets a condition about seasons that she never gives.",
    "payload": {
      "speakers": [
        {
          "role": "Patient",
          "voice": "alloy"
        },
        {
          "role": "Physiotherapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the physiotherapist advise?",
          "options": [
            {
              "id": "a",
              "text": "Resting completely until every symptom has settled."
            },
            {
              "id": "b",
              "text": "Doing the same amount on good and bad days."
            },
            {
              "id": "c",
              "text": "Stopping the heavier work in the garden until the spring arrives."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Patient: Saturday was a good day, so I did the whole front garden. Then I could not get out of bed until Wednesday. Physiotherapist: And the Saturday before that? Patient: The shed. And I paid for that one as well. It feels like I am being punished for the good days. Physiotherapist: You are being punished for what you do on them, and I think you already know that, which is why you told me. Here is the difficult part of the plan: I want you to do the same twenty minutes on the day you feel wonderful as on the day you feel dreadful. Twenty minutes on Saturday when you could manage ninety. Patient: That will drive me mad. Physiotherapist: For about three weeks. Then the ceiling starts to lift, and it lifts from a floor you have not fallen through. Big days and lost weeks keep you exactly where you are."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 9 — A pharmacist and a care home nurse",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is refused outright — the daughter cannot consent. (B) is never mentioned; who gives it is not the issue.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Pharmacist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the pharmacist tell the nurse?",
          "options": [
            {
              "id": "a",
              "text": "The tablets may be crushed as long as the family agrees."
            },
            {
              "id": "b",
              "text": "A different member of staff should give the medicine."
            },
            {
              "id": "c",
              "text": "The decision needs a documented best-interests process."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse: She spits them out every morning, so we have started putting them in her yoghurt. She takes it all then, no fuss, and her daughter is perfectly happy with it. Pharmacist: Stop that today, please, and I will help you do it properly. What you are describing is giving medicine without the person knowing, and her daughter cannot consent to it on her behalf. Nurse: We are not hiding anything. It is all written in the notes, and every one of us on the floor does it the same way. Pharmacist: I believe you, and it still needs a proper decision behind it — an assessment that she cannot decide for herself, everyone round a table including me, and a written record of why it is in her best interests. And two of those tablets must never be crushed at all: one of them is modified release, and crushing it delivers twelve hours of the dose in a single spoonful."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 10 — A staff nurse and a phlebotomist on a ward round",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) and (C) are never mentioned — nothing is sent or repeated; only where the label is written changes.",
    "payload": {
      "speakers": [
        {
          "role": "Phlebotomist",
          "voice": "alloy"
        },
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the nurse insist on?",
          "options": [
            {
              "id": "a",
              "text": "Labelling the tubes at the bedside afterwards."
            },
            {
              "id": "b",
              "text": "Sending the samples in a separate transport bag."
            },
            {
              "id": "c",
              "text": "Repeating the test on a fresh sample tomorrow."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Phlebotomist: I label them at the desk before I start. Twelve patients, twelve sets, all written out — it saves me twenty minutes and my handwriting is far better sitting down. Nurse: It saves twenty minutes and it is the one thing I have to ask you to stop doing. Phlebotomist: I have never mixed one up. Nurse: Nor had the person it happened to, until the morning somebody called them into a side room and they put a tube down without thinking. Every tube on that trolley is now a tube that already belongs to somebody. Written at the bedside, the label can only be wrong if you are standing at the wrong bed — and you have just asked that patient their name and date of birth, so you are not. Phlebotomist: It will slow the round down. Nurse: It will. A wrong blood group crossmatched from a right-looking tube slows it down rather more."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 10 — A dietitian and a diabetes specialist nurse",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is contradicted — his counting is described as faultless. (C) is never raised.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Dietitian",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the dietitian identify as the problem?",
          "options": [
            {
              "id": "a",
              "text": "The carbohydrate portions are being underestimated."
            },
            {
              "id": "b",
              "text": "The insulin is being given after the meal."
            },
            {
              "id": "c",
              "text": "The blood glucose meter has not been calibrated recently."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Nurse: His counting is better than mine. He weighs the pasta, he reads every label, and his ratio has not changed in a year. And he is still high two hours after every evening meal. Dietitian: I sat with him on Tuesday while he ate. He counted the plate perfectly — and then he picked up the pen when he put his fork down. Nurse: Afterwards. Dietitian: Every time. The food is up and away before the insulin has begun, so he spends two hours climbing and then it arrives to bring him down again. The arithmetic is faultless and it is happening in the wrong order. Nurse: He has never once mentioned when he injects. Dietitian: Nobody has ever asked him. Fifteen minutes before the first mouthful, same dose, same ratio, and I would expect his evening readings to look like a different person's inside a fortnight."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 10 — A radiographer and a ward nurse in the imaging department",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is never suggested. (B) is the opposite — the examination happens now, differently.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Radiographer",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the radiographer decide?",
          "options": [
            {
              "id": "a",
              "text": "To ask for sedation before the examination can begin."
            },
            {
              "id": "b",
              "text": "To postpone the examination until tomorrow morning."
            },
            {
              "id": "c",
              "text": "To adapt the position rather than force it."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse: He cannot get flat. We tried on the ward and he was fighting for breath within about ten seconds of going back. Radiographer: Then we do not put him flat. Bring the trolley into room two and I will bring the tube to him. Nurse: Will it still be any good? The request asks for a proper series, and the team will want something they can rely on. Radiographer: It asks for a question to be answered. I can answer most of it sitting him upright, and for the rest I can turn him onto his side with the beam horizontal — different projection, same information, and the report will say exactly how it was taken so nobody reads it as something it is not. What I will not do is hold a breathless man down on my table for a tidier picture. That is how people arrest in this department, and it would be my doing."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 10 — An optometrist and a patient at the end of an examination",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is refused explicitly — no driving at all. (C) invents a hospital appointment she never offers.",
    "payload": {
      "speakers": [
        {
          "role": "Patient",
          "voice": "alloy"
        },
        {
          "role": "Optometrist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the optometrist tell the patient?",
          "options": [
            {
              "id": "a",
              "text": "He must inform the licensing authority himself."
            },
            {
              "id": "b",
              "text": "He may continue driving in daylight hours only."
            },
            {
              "id": "c",
              "text": "A further test will be arranged at the hospital next month."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Patient: So it is a bit of a gap at the side. I have driven forty years without an accident and I only go to the shop and back. Optometrist: I know, and I am not going to pretend this is a small conversation. The loss is on both sides in the same place, and that pattern is the one that takes a cyclist out of the left-hand mirror. Patient: Will you be telling them? Optometrist: The law puts that duty on you, not on me, and I am going to give you the form and the address today. What I want you to hear clearly is that it is not a formality you attend to next month. Until they have looked at your fields and written back to you, you should not be driving at all — and I will write that in your record and give you a copy."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 10 — A pharmacist and a ward sister after a near miss",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is the plan she argues against. (C) is not proposed — she changes what the ward does, not what the manufacturer does.",
    "payload": {
      "speakers": [
        {
          "role": "Sister",
          "voice": "nova"
        },
        {
          "role": "Pharmacist",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the pharmacist say must change?",
          "options": [
            {
              "id": "a",
              "text": "Staff should take more care when selecting boxes."
            },
            {
              "id": "b",
              "text": "The two products must be stored apart."
            },
            {
              "id": "c",
              "text": "The supplier should be asked to change the design."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Sister: She had the right box in her hand and the wrong drug in it. I have looked at the two boxes side by side and I could not tell you which was which from a metre away. Pharmacist: Same manufacturer, same green, same size, and the names begin with the same four letters. She is the third person to reach for the wrong one this year. Sister: I was going to put a note on the round telling everybody to look twice before they draw one up. Pharmacist: A note asks a tired person at seven in the morning to be more careful than they were yesterday, and it works until the week it matters. Take one of them off that shelf altogether. It goes in a separate cupboard, on a different floor of the trolley, with a different coloured label from me, and I will come up and move it myself this afternoon."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 10 — A physiotherapist and a nurse beside a post-operative bed",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is true of the plan but is not her argument — she mentions two people in passing. (A) is the delay she is arguing against.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Physiotherapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the physiotherapist say about getting him up today?",
          "options": [
            {
              "id": "a",
              "text": "It should wait until the drain has been removed."
            },
            {
              "id": "b",
              "text": "It requires two members of staff to be safe."
            },
            {
              "id": "c",
              "text": "It lowers the risk of chest complications."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse: He had major surgery yesterday morning. Sitting him out in a chair today feels early to me. Physiotherapist: It feels early and it is the plan he was consented for. Look at what a day in that bed costs him. His chest does not fill properly lying down, so the bases stay closed and that is where a chest infection begins. His legs do nothing, and the blood does nothing with them. Nurse: He is sore, though. He told me twice this morning that he is sore. Physiotherapist: Then let us time his analgesia and come back forty minutes after it, together, with two of us and the frame. I am not asking him to walk the corridor. I am asking for twenty minutes upright in a chair, today, because every day we wait makes the next attempt harder rather than easier, and the day after that harder still."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 11 — A dentist speaking to a parent on the telephone",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is refused — a brief rinse only, never scrubbing. (C) is what the parent has already done and he replaces it with milk.",
    "payload": {
      "speakers": [
        {
          "role": "Parent",
          "voice": "alloy"
        },
        {
          "role": "Dentist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the dentist tell the parent to do?",
          "options": [
            {
              "id": "a",
              "text": "Put the tooth back into the socket straight away."
            },
            {
              "id": "b",
              "text": "Clean the tooth thoroughly before bringing it in."
            },
            {
              "id": "c",
              "text": "Wrap the tooth in a dry tissue for the journey."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Parent: She's come off her bike and a front tooth is out. The whole tooth, root and all. I've got it here in a tissue. Dentist: How old is she? Parent: Eleven. Dentist: Then that is a permanent tooth and we can very often save it, but the next ten minutes matter more than anything I will do when you arrive. Hold it by the white part only — never the root. If there is dirt on it, rinse it for a second or two in milk, and do not scrub it, brush it, or wipe it with anything. Parent: And then just bring it? Dentist: Push it back into the socket the way it came out, and have her bite gently on a clean cloth to hold it. If you cannot face that, put it in a cup of milk. Come straight here — I will be waiting at the door."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 11 — A speech and language therapist and a nurse on a stroke ward",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(C) is contradicted — his hearing is fine. (A) is never mentioned; his wife does not come up.",
    "payload": {
      "speakers": [
        {
          "role": "Therapist",
          "voice": "alloy"
        },
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the therapist ask the staff to change?",
          "options": [
            {
              "id": "a",
              "text": "To involve his wife in every conversation."
            },
            {
              "id": "b",
              "text": "To speak to him at a normal volume."
            },
            {
              "id": "c",
              "text": "To wait for the results of a hearing test."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Therapist: I have been listening from the corridor for twenty minutes and I want to change one thing, and it is not anything you are doing wrong on purpose. Nurse: He does not seem to take much in. Therapist: He takes in almost all of it. Everybody has started speaking to him very loudly and very slowly, with their face about a foot from his, and there is nothing at all wrong with his hearing. What the stroke took was the road out, not the road in — he can follow a whole conversation and cannot find the word \"water\". Nurse: He looked away from me this morning. Therapist: Because being shouted at is unpleasant, and because it tells him you think he is somewhere he is not. Ordinary voice, ordinary sentences, one idea at a time. Give him paper and a pen, and offer him a choice of two rather than an open question."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 11 — A veterinary surgeon and a veterinary nurse",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) inverts him — he is about to give more, not less. (B) is never discussed.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Vet",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the vet say about the cat?",
          "options": [
            {
              "id": "a",
              "text": "The dose of pain relief is too high for her weight."
            },
            {
              "id": "b",
              "text": "She should be discharged home later this afternoon."
            },
            {
              "id": "c",
              "text": "A quiet cat is not necessarily a comfortable one."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse: She has been quiet all night. No crying, no fussing at the wound, and she let me pick her up. I did not want to disturb her with another dose. Vet: Look at her face for me. Ears rotated out and slightly flattened, eyes half closed, muzzle tight, and she is sitting hunched at the back of the kennel facing the wall. Nurse: She always sits at the back. Vet: Today she is sitting at the back the way a painful cat sits at the back. A dog in this much discomfort would have told the whole corridor an hour ago. A cat goes still and small and stops grooming, and every one of those is a survival habit, not contentment. Silence is the least reliable sign we have in this species. Score her properly on the chart, and then we will dose her."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 11 — An occupational therapist and a patient at a home visit",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) confuses the sister who is mentioned in passing with somebody taking the work over. (C) is never proposed — she changes the timing, not the tools.",
    "payload": {
      "speakers": [
        {
          "role": "Patient",
          "voice": "alloy"
        },
        {
          "role": "Therapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the therapist suggest?",
          "options": [
            {
              "id": "a",
              "text": "Spreading the tasks across the whole week."
            },
            {
              "id": "b",
              "text": "Asking her daughter to take over the housework."
            },
            {
              "id": "c",
              "text": "Buying equipment that will do the lifting for her."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Patient: Mondays I do the whole house. Beds stripped, floors, the shopping, the lot. By four o'clock I am finished and I am no use to anybody until Thursday. Therapist: And on Thursday you start again, a day behind, and you push harder to catch up. Patient: You have been talking to my sister. Therapist: I have met a great many Mondays. Take the same jobs and cut them into six days. Beds on Tuesday, one floor on Wednesday, the shopping delivered on Friday — and sit down to do the ones that can be done sitting, because standing is costing you more than the task is. Patient: It will take all week to do what I did in a day. Therapist: It will take all week, and you will have the rest of each of those days, and by the month's end you will have done more, not less."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 11 — A podiatrist and a physiotherapist in a joint clinic",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is contradicted — both agree the correction itself is right. (C) misreads the problem: he cannot get it in the boot at all.",
    "payload": {
      "speakers": [
        {
          "role": "Physiotherapist",
          "voice": "alloy"
        },
        {
          "role": "Podiatrist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the podiatrist's point about the orthotic?",
          "options": [
            {
              "id": "a",
              "text": "It has been made to the wrong prescription entirely."
            },
            {
              "id": "b",
              "text": "It must fit the shoes he actually wears."
            },
            {
              "id": "c",
              "text": "It should be worn for longer each day at first."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Physiotherapist: The orthotic is right. I have watched him walk in it and the heel behaves itself for the first time in a year. Podiatrist: It is right, and he has worn it eleven days out of ninety. Ask him where it lives. Physiotherapist: He said something about weekends. Podiatrist: It goes in his trainers, at weekends, because it will not go into a steel-toecapped boot with a fixed insole, and he is in that boot ten hours a day on concrete. We have corrected the foot he stands on for two days and left the one he works on untouched. Physiotherapist: So it needs remaking for the boot. Podiatrist: Remade thinner, to fit the boot with the original insole out, and I will see the boot before I take the cast. A device that does not go in the shoe somebody actually wears is a device that sits in a cupboard."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 11 — A staff nurse and a doctor on a ward round",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) and (B) are both reasonable next steps that she never asks for — she asks only for the way it is prescribed to change.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Doctor",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the nurse ask the doctor to do?",
          "options": [
            {
              "id": "a",
              "text": "To review whether the diagnosis has been missed."
            },
            {
              "id": "b",
              "text": "To arrange a referral to the pain team today."
            },
            {
              "id": "c",
              "text": "To prescribe the analgesia regularly, not as required."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse: He is written up for morphine as required and he has had two doses in five days. I do not think that means he is comfortable. Doctor: He has not asked. Nurse: He will not ask. He was brought up not to make a fuss, he thinks we are busy, and he told his daughter he did not want to be any trouble. When I sat with him last night and asked him properly, he said it was about seven out of ten — and then apologised for saying so. Doctor: He is eating and he gets to the chair. Nurse: He gets to the chair once a day and grips the arms all the way. As-required medicine depends on somebody being willing to require it. Write it regularly for forty-eight hours, with something extra available on top, and let us see what he is like when he is not deciding whether he has earned it."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 12 — A community pharmacist and a patient at the counter",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is never mentioned — timing does not come up. (C) misreads the existing prescription he already holds as a new one.",
    "payload": {
      "speakers": [
        {
          "role": "Patient",
          "voice": "alloy"
        },
        {
          "role": "Pharmacist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the pharmacist explain?",
          "options": [
            {
              "id": "a",
              "text": "The dose must be reduced gradually, not stopped."
            },
            {
              "id": "b",
              "text": "The tablets should be taken in the evening instead."
            },
            {
              "id": "c",
              "text": "A repeat prescription has already been issued for him."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Patient: I have eleven of these left and I feel completely better, so I thought I would leave them now. I do not like taking things I do not need. Pharmacist: I understand that, and with most tablets I would agree with you. Not with these ones. You have been on a fairly high dose of steroid for six weeks, and while you take it your own glands quietly stop producing what they normally would. They do not switch back on the moment you stop buying tablets. Patient: So I would feel unwell again. Pharmacist: Worse than that, and quite quickly — the sickness and the dizziness of having none at all, on top of whatever the steroid was treating. Your prescription already has the pattern on it: four days at fifteen, four at ten, four at five. Follow the ladder down and you will finish on Saturday week, properly."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 12 — A radiographer and a student in the imaging department",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) and (C) are both good practice she does not raise — her whole point is what happened in the nine seconds she was out of the room.",
    "payload": {
      "speakers": [
        {
          "role": "Radiographer",
          "voice": "alloy"
        },
        {
          "role": "Student",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the radiographer tell the student?",
          "options": [
            {
              "id": "a",
              "text": "To ask for a chaperone to be present in future."
            },
            {
              "id": "b",
              "text": "To cover the patient before leaving the room."
            },
            {
              "id": "c",
              "text": "To explain each step of the procedure before beginning."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Radiographer: Before the next patient, one thing about the last one, and I would rather say it now than in three years when it has become a habit. Student: The images were fine, weren't they? Radiographer: The images were good. You went out to the console for the cassette and you left him lying there uncovered with the door on the corridor half open. It took you nine seconds and there were two porters and a visitor outside. Student: I was only going to be a moment. Radiographer: It is always only a moment. He is seventy-eight, he is on a trolley in a paper gown, and being seen like that by strangers is the thing he will remember about this hospital long after he has forgotten what we were looking for. Sheet over him, door closed, then walk. Every time, whether he is awake or not."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 12 — A dietitian and a community nurse at a care home",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is what has already failed. (A) is never proposed — the food is put in her hand, not into her mouth.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Dietitian",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the dietitian recommend?",
          "options": [
            {
              "id": "a",
              "text": "Feeding her by a member of staff at each meal."
            },
            {
              "id": "b",
              "text": "Prescribing supplement drinks between meals."
            },
            {
              "id": "c",
              "text": "Food she can pick up and eat while walking."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse: She leaves almost everything. We have tried three supplement drinks and she leaves those too. Dietitian: I watched lunch. She is not refusing it — she does not know what to do with it. The plate arrives, she looks at the knife and fork for a while, she stands up, and she walks. Nurse: She never sits for long. Dietitian: Then stop asking her to. She has eaten well every time somebody has put something in her hand — she had most of a sandwich in the corridor on Tuesday. Small things she can hold and eat on the move: sandwich quarters, cheese, sausage, tinned fruit in a cup, and a coloured plate so the food is not white on white. Nurse: So it is not really about appetite. Dietitian: It never was. Give her a fortnight of that and weigh her again. Nurse: I'll tell the kitchen to send it that way from tonight."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 12 — A doctor and a hospital interpreter outside a side room",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(C) has the right shape — the conversation is delayed — but he waits for the interpreter, not for a daughter, who is never mentioned. (B) is not discussed.",
    "payload": {
      "speakers": [
        {
          "role": "Doctor",
          "voice": "alloy"
        },
        {
          "role": "Interpreter",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the doctor decide?",
          "options": [
            {
              "id": "a",
              "text": "To use an interpreter rather than the son."
            },
            {
              "id": "b",
              "text": "To write all of the information down for the family."
            },
            {
              "id": "c",
              "text": "To postpone the conversation until the daughter arrives."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Doctor: His son has been translating for us since Tuesday and he is very willing. I wanted to check with you before we do the results conversation that way. Interpreter: I sat in for ten minutes yesterday. You asked him whether the pain wakes him at night. His father spoke for about twenty seconds. The son said, \"he says he is fine.\" Doctor: So a great deal did not reach me. Interpreter: A son protecting his father is not lying to you. He is deciding, in the moment, what his father would want you to know, and he cannot help it. He also has to hear the answer before he says it out loud. Nobody should have to translate their own father's diagnosis. Doctor: Then we wait for you. Four o'clock? Interpreter: Four o'clock, and let the son sit with him as a son. Doctor: I'll move the family to four and tell them why."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 12 — A staff nurse and a healthcare assistant",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) and (C) are both catheter problems that are not this one — she is told the bag is emptying and she does not question the recording.",
    "payload": {
      "speakers": [
        {
          "role": "Assistant",
          "voice": "alloy"
        },
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the nurse's concern about the catheter?",
          "options": [
            {
              "id": "a",
              "text": "The drainage bag has been positioned above the bladder."
            },
            {
              "id": "b",
              "text": "Nobody has asked whether it can come out."
            },
            {
              "id": "c",
              "text": "The output has not been recorded for two days."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Assistant: His catheter is fine. The bag is emptying, nothing has blocked, and there is no smell at all. Nurse: It went in on the eighth. That is twenty-two days, and I have been through every entry since. Nobody has written down why it is still there. Assistant: He came in retaining, didn't he? Nurse: He did, three weeks ago, and he has been walking to the toilet with his frame since the fifteenth. Every day it stays in is another day of a tube into his bladder that he does not need, and that is where the infections come from. It is not going to fall out on its own, and the round is always about something more interesting. Assistant: So it comes out. Nurse: It goes on the round this morning, with a proper question and a written answer, and if there is a reason I will accept it."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 12 — An occupational therapist and a physiotherapist",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is never proposed — one of them goes first, they do not go together. (B) inverts the nurses' role, which is given as another example of the same problem.",
    "payload": {
      "speakers": [
        {
          "role": "Physiotherapist",
          "voice": "alloy"
        },
        {
          "role": "Therapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What do they agree to change?",
          "options": [
            {
              "id": "a",
              "text": "To hold a joint session with the patient present."
            },
            {
              "id": "b",
              "text": "To hand the assessment over to the ward nurses."
            },
            {
              "id": "c",
              "text": "To do one assessment and share the result."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Physiotherapist: He was short with me this morning, which is not like him, and I worked out why on the way back. I had asked him the same eleven questions you asked him on Monday. Therapist: Bed, chair, toilet, stairs, how he manages at night. Physiotherapist: All of it. And your notes are in the file, and I read them, and I asked anyway — because I wanted my own answers. Therapist: So did I, last week, after the nurses had already asked him. Physiotherapist: Three of us have made a frail man of eighty-four account for his own toilet three times in a fortnight. Therapist: Then whichever of us gets there first does it, writes it where the other one looks, and the second person reads it and asks only what is genuinely missing. I will still watch him transfer. I do not need him to tell me about it again."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 13 — A staff nurse and a doctor at the nurses' station",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(C) is the doctor's position that she answers. (B) is never suggested — there is nobody at home until Friday.",
    "payload": {
      "speakers": [
        {
          "role": "Doctor",
          "voice": "alloy"
        },
        {
          "role": "Nurse",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the nurse say should happen?",
          "options": [
            {
              "id": "a",
              "text": "His decision should be supported and made safer."
            },
            {
              "id": "b",
              "text": "A relative should be asked to talk him round."
            },
            {
              "id": "c",
              "text": "He should be told he cannot leave tonight."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Doctor: He cannot go tonight. The antibiotics have another two days to run and there is nobody at home until Friday. Nurse: All of that is true, and he is still going. He knows what the two days are for, he can tell me back exactly what happens if the chest gets worse, and he has decided that the dog matters more. That is a choice he is entitled to make. Doctor: I am not signing that off as sensible. Nurse: You do not have to think it is sensible. If we spend the next hour arguing, he walks out with nothing. If we spend it differently, he goes with the oral course in his hand, a district nurse booked for Thursday, and a written list of what would bring him back. Same discharge either way — the only thing we are choosing is whether it is a safe one."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 13 — A community pharmacist and a patient",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) moves the meal, which he does not — he moves the tablet before it. (C) is never mentioned.",
    "payload": {
      "speakers": [
        {
          "role": "Patient",
          "voice": "alloy"
        },
        {
          "role": "Pharmacist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the pharmacist tell the patient?",
          "options": [
            {
              "id": "a",
              "text": "The tablet should be taken with her evening meal."
            },
            {
              "id": "b",
              "text": "She must stay upright after taking it."
            },
            {
              "id": "c",
              "text": "The dose needs to be halved for her age."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Patient: I take it with my breakfast, with the tea, so I do not forget it. Then I go back up and read for half an hour. Pharmacist: That is exactly the way to remember a tablet and almost exactly the wrong way to take this one. Two things are working against you. Calcium binds it, so the milk in that tea takes most of it out of play before it ever gets into you. Patient: I did wonder why they said plain water on the box. And the reading — what is wrong with the reading? Pharmacist: Lying down is the other one. This tablet can irritate the gullet badly if it does not go straight through, so it wants you upright for the next half hour — sitting properly, walking about, anything but flat. First thing, with a full glass of plain water, then stay up on your feet, and have the tea and the breakfast half an hour after that."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 13 — A radiographer and a junior doctor",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is never proposed — the same examination, from March. (A) is not discussed at all.",
    "payload": {
      "speakers": [
        {
          "role": "Radiographer",
          "voice": "alloy"
        },
        {
          "role": "Doctor",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the radiographer suggest?",
          "options": [
            {
              "id": "a",
              "text": "That the patient is asked to sign a consent form."
            },
            {
              "id": "b",
              "text": "That a different type of examination is requested."
            },
            {
              "id": "c",
              "text": "That the earlier images are obtained first."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Radiographer: Before I book this, has he had one recently anywhere else? Doctor: He mentioned something at the private place in March. I could not find it on our system so I requested a fresh one. Radiographer: Not on our system is not the same as not done. That was five weeks ago, not five years, and if the images exist then the most useful thing in the world is the pair of them side by side — I can see what has changed, which one scan on its own will never tell me. Doctor: They will take a day or two to come across. Radiographer: They take a phone call and an email, and he is not deteriorating in front of us. He is fifty-one. Every scan he does not need is a dose he keeps, and a comparison beats a repeat almost every time."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 13 — A physiotherapist and a family carer at a home visit",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(C) inverts it — the sling is the alternative she is being offered, not the fault. (B) is never raised.",
    "payload": {
      "speakers": [
        {
          "role": "Carer",
          "voice": "alloy"
        },
        {
          "role": "Physiotherapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the physiotherapist ask the carer to stop doing?",
          "options": [
            {
              "id": "a",
              "text": "Lifting him underneath his arms."
            },
            {
              "id": "b",
              "text": "Moving him without a second person present."
            },
            {
              "id": "c",
              "text": "Using the sling that came with the chair."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Carer: He is only light now. I get my hands under his arms and lift, and he is up in a second. We have done it that way for two years. Physiotherapist: I know you have, and I have to ask you to stop today, for both of you. Under the arms is the one hold that does real damage. There is a bundle of nerves running through there and almost nothing protecting the shoulder joint — I have seen a shoulder come out of its socket doing exactly that, with a daughter half his weight. Carer: The sling takes ten minutes and he hates it. Physiotherapist: Then let me show you the belt instead. It goes round his waist, he pushes up through his own legs, and you steady rather than lift. Two minutes, and your back is still yours in ten years. Carer: Show me now, then, before you go."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 13 — A dietitian and a school nurse",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is contradicted — she calls the policy good. (C) is never mentioned.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Dietitian",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the dietitian's main concern?",
          "options": [
            {
              "id": "a",
              "text": "The child's packed lunch does not meet the school standard."
            },
            {
              "id": "b",
              "text": "There is no adrenaline pen kept at the school."
            },
            {
              "id": "c",
              "text": "The parents have not provided a written care plan."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Nurse: The lunch policy is watertight. No nuts anywhere on the premises, every packed lunch is checked at the door, and we have not had an incident in four years. Dietitian: The policy is good. I want to ask about the ten minutes after the bell. Where is his adrenaline? Nurse: His mother keeps one at home and there is one in his bag, and the bag lives in the cloakroom. Dietitian: In his bag, in a locker, on the far side of a building, while he is on the field. That is the part nobody plans, because the food is what everybody thinks about. He is nine, and nine-year-olds swap things. He will share a biscuit with somebody at some point, whatever the door says, and on that afternoon the only thing that decides how it ends is how many minutes away the pen is, and who can reach it."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 13 — An optometrist and an optical assistant",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is contradicted — he expects the lenses to match the order. (B) is never checked or mentioned.",
    "payload": {
      "speakers": [
        {
          "role": "Assistant",
          "voice": "alloy"
        },
        {
          "role": "Optometrist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the optometrist say about the prescription?",
          "options": [
            {
              "id": "a",
              "text": "The lenses have been made to the wrong axis."
            },
            {
              "id": "b",
              "text": "The frame is sitting too far down her nose."
            },
            {
              "id": "c",
              "text": "The change was too large to give at once."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Assistant: She has brought them back for the third time. She says the floor looks like it is sloping and the doorways are bending. Optometrist: Check the lenses against the order for me, and I expect you will find they are exactly right. Assistant: So why does she feel like that? She was quite upset about it this morning. Optometrist: Because she has worn the same weak correction for eleven years and I have given her all of the change she needs in one afternoon. Her eyes can see through it perfectly well. Her brain has spent eleven years learning to read the old picture, and it is being handed a new one overnight. Assistant: Do we tell her to persevere? Optometrist: No. Remake them at about two-thirds of the change and bring her back in three months for the rest of it. She will not notice the second step at all. Being technically correct and unwearable is not a prescription."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 14 — A dentist and a dental nurse reviewing the day's list",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is the template he is removing. (C) is never mentioned.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Dentist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the dentist say about the radiographs?",
          "options": [
            {
              "id": "a",
              "text": "They must be justified for each patient individually."
            },
            {
              "id": "b",
              "text": "They should be taken for every patient every year."
            },
            {
              "id": "c",
              "text": "The machine is due for its annual service check."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Nurse: I have put the usual two on for everybody at their check-up. That is how the recall template has always been set. Dentist: Take them off the template and put them back one patient at a time. Mrs Vance has not had a filling since 2011, she does not smoke, her gums are healthy and I can see every surface I need to see. There is nothing for that image to answer. Nurse: It has always been done annually. Dentist: It has, and habit is not a justification. The rule is that somebody has to be able to say what question this particular image answers for this particular person, and write it down. For the gentleman at half past two, with four new lesions in two years, the answer is easy and he gets them. For her it is three years, or when something changes."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 14 — A veterinary surgeon and a client",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is never raised — he asks her, not a family. (C) is not offered; he speaks about managing him as they are.",
    "payload": {
      "speakers": [
        {
          "role": "Client",
          "voice": "alloy"
        },
        {
          "role": "Vet",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the vet suggest to the owner?",
          "options": [
            {
              "id": "a",
              "text": "That the decision should be left to the family."
            },
            {
              "id": "b",
              "text": "That she watches the things he still enjoys."
            },
            {
              "id": "c",
              "text": "That another course of treatment should be tried first."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Client: Everybody says I will know. I do not think I will know. I am terrified I will leave it too late, and just as terrified I will do it a month too early. Vet: Then let us make it something you can look at rather than something you have to feel. Tell me three things he has loved all his life. Client: The back door in the morning. His dinner. And sitting on my feet while I read. Vet: Write those three on the calendar and mark each day — yes or no, nothing more. While he has two of the three, we are managing him and we carry on. When he has one for most of a fortnight, ring me and we will talk properly. Client: So I am not deciding on a bad afternoon. Vet: You are not deciding on any single afternoon. That is the whole point of writing it down."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 14 — A staff nurse and a student nurse",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is contradicted — gloves are explicitly not a substitute. (A) is never mentioned; the gel is not criticised.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Student",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the nurse tell the student?",
          "options": [
            {
              "id": "a",
              "text": "To use soap and water rather than the alcohol gel."
            },
            {
              "id": "b",
              "text": "To wear gloves for every patient contact."
            },
            {
              "id": "c",
              "text": "To clean her hands during care as well."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse: Your hands were clean coming into the bay and clean going out, and I want to talk about the eleven minutes in between. Student: I gelled at the door both times. Nurse: You did, and inside you helped him sit forward, then you picked up the notes trolley, then you went straight back to his cannula dressing. The gel at the door protects the corridor. It does nothing at all for what travelled from that trolley to a hole in his arm. Student: So gel again before the dressing. Nurse: Before anything clean, after anything of his, and after gloves come off — gloves are not a substitute, they leak and your hands sweat. Nobody is asking you to be cleaner. They are asking you to be clean at four particular moments, and three of them are inside the curtain. Student: Four moments. I'll put them on the back of my badge."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 14 — A speech and language therapist and a parent",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is the grandmother's advice she sets aside. (C) is never mentioned.",
    "payload": {
      "speakers": [
        {
          "role": "Parent",
          "voice": "alloy"
        },
        {
          "role": "Therapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the therapist advise the parent?",
          "options": [
            {
              "id": "a",
              "text": "To put words to what he reaches for."
            },
            {
              "id": "b",
              "text": "To wait until he is three before worrying."
            },
            {
              "id": "c",
              "text": "To reduce the amount of time he spends watching television."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Parent: He has about six words and he is two and a half. My mother keeps saying his uncle did not speak until three and he was fine. Therapist: He may well be fine, and I am not going to ask you to sit and wait to find out. Look at what he did while we were talking: he brought me the box, he pointed at the lid, he checked my face to see whether I had understood. Everything underneath the words is there. Parent: So what do I actually do? Therapist: When he points at the cup, do not ask him what it is. Say \"cup — you want the cup\", and give it to him. Questions ask him to perform. Saying the word hands it to him. Forty of those a day, and a hearing test booked before we meet again, because I never assume that part."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 14 — A podiatrist and a practice nurse",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is exactly what she stops. (C) is never proposed — she asks to see it, not to treat it.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Podiatrist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the podiatrist say about the nail?",
          "options": [
            {
              "id": "a",
              "text": "The antifungal treatment should be continued for much longer."
            },
            {
              "id": "b",
              "text": "A single dark streak needs a proper look."
            },
            {
              "id": "c",
              "text": "The nail should be removed to relieve the pressure."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Nurse: It is the big toenail, discoloured, and it has not responded to eight months of the antifungal. I was going to ask for a longer course. Podiatrist: Describe the colour for me. Nurse: Brownish. There is a dark line running from the base towards the tip. Podiatrist: Then do not order anything until I have seen it, and I will see it this week. A fungal nail goes thick, crumbly and yellow-brown across the whole plate. A single dark band running the length of it, in one nail, is a different conversation, and it is a conversation you have early or not at all. Nurse: It is probably a knock. He drops things on his feet all day. Podiatrist: It probably is. Most of them are. The reason I want it in front of me this week is the few that are not. Nurse: Thursday morning, then. I'll bring him in myself."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 14 — An occupational therapist and a social worker",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is the assumption she removes. (A) is never mentioned.",
    "payload": {
      "speakers": [
        {
          "role": "Social Worker",
          "voice": "alloy"
        },
        {
          "role": "Therapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the therapist say about capacity?",
          "options": [
            {
              "id": "a",
              "text": "It should be assessed by a psychiatrist first."
            },
            {
              "id": "b",
              "text": "It has already been settled by his diagnosis."
            },
            {
              "id": "c",
              "text": "It must be judged for this decision."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Social Worker: He says he is going home and I do not think he understands what he is going home to. With that diagnosis in his notes I assumed we were past the point of him choosing. Therapist: That is the assumption I want to take out. A diagnosis on its own settles nothing. The question is always this decision, today: can he take in what going home means, hold it long enough to weigh it, and tell us what he has decided. Social Worker: He could not tell me his medications yesterday. Therapist: Which tells us about his medications. He may be quite unable to manage a bank account and perfectly able to decide where he sleeps. We assess him on the decision in front of him, with the information put the way he can take it — and if he can, it is his. Social Worker: Then we sit down with him this afternoon and ask him properly."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 15 — A pharmacist and a prescriber reviewing the system",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is the approach he rejects. (C) is never suggested — the same system, with fewer alerts.",
    "payload": {
      "speakers": [
        {
          "role": "Prescriber",
          "voice": "alloy"
        },
        {
          "role": "Pharmacist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the pharmacist propose?",
          "options": [
            {
              "id": "a",
              "text": "Turning off the alerts that carry no risk."
            },
            {
              "id": "b",
              "text": "Asking every prescriber to read all of the warnings."
            },
            {
              "id": "c",
              "text": "Moving the prescribing system onto a different platform."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Prescriber: You are going to tell me I clicked through fourteen warnings yesterday. Pharmacist: Twenty-two, and I am not here to tell you off for it. I pulled the figures for the whole department. Ninety-six of every hundred warnings this system raises are things nobody would act on — a paracetamol and a vitamin, an interaction that matters in theory and never at these doses. Prescriber: So we stop reading them. That is what you are describing, whether you say it or not. Pharmacist: Everybody stopped reading them about three years ago, and then the one that mattered came up looking exactly like the other ninety-six. The answer is not to ask tired people to read more carefully at midnight. It is to take those ninety-six off the screen altogether, so that when something does appear on it, everybody already knows it is worth the two seconds it takes to stop and look properly."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 15 — A physiotherapist and a ward nurse",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) inverts it — the resting figure is fine. (C) is the opposite of walking him with a measured plan.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Physiotherapist",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the physiotherapist say?",
          "options": [
            {
              "id": "a",
              "text": "The oxygen should be increased while he is resting."
            },
            {
              "id": "b",
              "text": "The reading must be taken while he walks."
            },
            {
              "id": "c",
              "text": "The exercise should be stopped until he is reviewed."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Nurse: His saturations are ninety-four. They have been ninety-four every time I have checked all week, so I did not think he needed anything on the walk. Physiotherapist: Where is he when you check? Nurse: In the chair, usually just after breakfast. Physiotherapist: I took him to the bay door and back this morning with the probe on the whole time. Twenty-two metres and he was at eighty-four before he reached the sink, and he did not say a word about it — he just slowed down and leaned on the rail, which is what they all do. Nurse: So the resting number tells us nothing about the walk. Physiotherapist: It tells us he is comfortable sitting in a chair. Whatever we prescribe for walking has to be measured while he is walking, and I would like that written into the plan, because the next person will check him in the chair too."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 15 — A radiographer and a ward nurse before a scan",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is refused explicitly. (B) is ordinary practice she never raises here.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Radiographer",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the radiographer insist on?",
          "options": [
            {
              "id": "a",
              "text": "That the scan is cancelled because of the device."
            },
            {
              "id": "b",
              "text": "That the patient removes all metal before entering."
            },
            {
              "id": "c",
              "text": "That the device details are checked first."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse: They said on the ward that he has a pacemaker, so I assume the scan is off. Radiographer: Do not assume it either way, and that is the important part. Some of these devices are built to go into the scanner under set conditions, and some must never go anywhere near it. What tells us which is the card in his wallet, or the letter from the clinic, and all three things have to be on it — the model, the manufacturer, and the date it went in. Nurse: His daughter might have the card at home. She was here this morning and she is coming back at six. Radiographer: Then ring her, and I will ring the pacing clinic in parallel. Nobody guesses today. If we cannot establish the model, he does not come through that door — but I am not cancelling a scan his consultant needs on the strength of the word \"pacemaker\" either."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 15 — A dietitian and a doctor on a ward round",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(B) is never proposed — she wants him eating. (C) is not raised; she objects to what the fluids contain, not the rate.",
    "payload": {
      "speakers": [
        {
          "role": "Dietitian",
          "voice": "alloy"
        },
        {
          "role": "Doctor",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the dietitian point out?",
          "options": [
            {
              "id": "a",
              "text": "The order has outlived the procedure it was for."
            },
            {
              "id": "b",
              "text": "The patient should be fed through a tube instead."
            },
            {
              "id": "c",
              "text": "The fluids have been running at too slow a rate."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Dietitian: He has had nothing by mouth since Monday morning. Today is Thursday. Doctor: He was nil by mouth for the camera test. That was written by the team who did it. Dietitian: Which was done on Tuesday at eleven, and he tolerated it perfectly. The sign above the bed is still there, the kitchen has stopped bringing him a tray, and nobody has taken the order off because taking it off was never anybody's particular job. Doctor: He has been on fluids. Dietitian: He has been on water with a little salt in it for three days, and he was thin when he arrived. The instruction was correct on Monday. It stopped being correct at half past eleven on Tuesday and it has been sitting over his head ever since. Whoever writes one of these should write when it ends, in the same sentence, and put their own name beside it."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 15 — A ward sister and a patient's daughter",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is what she deliberately refuses to do. (C) inverts it — she writes it, in the daughter's words, and gives her a copy.",
    "payload": {
      "speakers": [
        {
          "role": "Daughter",
          "voice": "nova"
        },
        {
          "role": "Sister",
          "voice": "nova"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the sister do?",
          "options": [
            {
              "id": "a",
              "text": "She explains that the ward was very short-staffed that night."
            },
            {
              "id": "b",
              "text": "She apologises and explains what happens next."
            },
            {
              "id": "c",
              "text": "She asks the daughter to put it in writing first."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Daughter: Four hours. He rang the bell four times and nobody came, and I want that written down somewhere it cannot be quietly lost. Sister: I am sorry. That should not have happened to him and I am not going to explain it away to you now. Daughter: So what actually happens with it? Sister: It goes in tonight, in your words, not mine, and you get a copy of what I have written before you leave. It goes to the matron in the morning and somebody outside this ward looks at the bell records and the staffing for that night. You will get a name and a telephone number, and a proper answer, in writing. Daughter: And you are not going to tell me you were short-staffed. Sister: Whatever the reason turns out to be, it is our reason. It was not his problem to solve at two in the morning."
    }
  },
  {
    "taskType": "LISTENING_PART_B",
    "subTest": "LISTENING",
    "profession": null,
    "title": "Listening Part B · set 15 — A veterinary surgeon and a nurse discussing a consent form",
    "prompt": "In this part of the test, you'll hear a short extract in a healthcare setting. Choose the answer (A, B or C) which fits best according to what you hear. You'll have time to read the question before you listen. The extract is played once.",
    "difficulty": "CORE",
    "topicTag": "workplace-extract",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "(A) is contradicted — age is not a disease. (B) is close, since bloods are mentioned, but he asks for the risks written into the form, not for the decision to wait.",
    "payload": {
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Vet",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the vet tell the nurse?",
          "options": [
            {
              "id": "a",
              "text": "The procedure is too risky at his age."
            },
            {
              "id": "b",
              "text": "The owner should decide once she has seen the results."
            },
            {
              "id": "c",
              "text": "The consent must set out this dog's own risks."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Nurse: She is worried about the anaesthetic because he is fourteen. I told her age is not a disease. Vet: It is not, and that sentence on its own is not consent. Take the form back and let us put his own numbers on it. His kidney values are mildly up, his heart murmur is a grade three, and he is underweight — those three are what change the risk for him, and none of them appear on a printed sheet about dogs in general. Nurse: And the bloods before the day? Vet: In the form as well, with what each one would change. She has to be able to read it, ask me one question, and say no if she wants to. If she cannot say no to it, she has not consented to it — she has agreed to it, and they are not the same thing."
    }
  }
];
