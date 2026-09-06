// GENERATED — DO NOT HAND-EDIT.
//
// Source:  C:/Projects/_handoffs/AlmiOET_Listening_PartC_15_items.json
//          sha256(first 16) = fc9e03396598161b
// Built by scripts/seed/gen/_build_listening_sets.mts, which validates every
// payload against the runtime zod schema in src/lib/oet/tasks/listening.ts
// before writing. 15 LISTENING_PART_C item(s).
//
// 15 recordings, 780-880 words, SIX three-option questions each, written to the
// measured law in _handoffs/AlmiOET_likhne_ka_zabta.md §2. The six-question rule
// is enforced by gate:length from 3 September 2026 — nothing checked it before,
// which is the same hole that let a two-question Reading Part C ship.
//
// To change an item, change the source JSON and re-run the builder. Editing
// this file by hand breaks the only proof that it matches what was measured.
import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-1-presentation-the-four-hours-before-an-arrest",
    "title": "Listening Part C · item 1 — PRESENTATION: the four hours before an arrest",
    "prompt": "You will hear part of a presentation by a consultant in acute medicine. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "deterioration",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: (B) is contradicted — \"we measure a great deal\". (C) inverts the finding entirely. · Q2: \"It removes the argument.\" (A) is explicitly denied — \"the nurse detected it\". (C) is not his claim; he values both. · Q3: \"None of them was ignorance\", which rules out (A). (B) is never mentioned. · Q4: (B) reverses him — he defends its lack of a threshold. (C) is never said. · Q5: \"Ordinary medicine delivered at the right moment.\" (A) is what he says we oversell. (C) is one possible outcome, not the usual contribution. · Q6: \"Treat not calling as a decision... two lines.\" (A) is the request he explicitly says he is not making. (C) is never proposed.",
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker say audits of in-hospital arrests show?",
          "options": [
            {
              "id": "a",
              "text": "The warning signs were recorded but ignored."
            },
            {
              "id": "b",
              "text": "Observations were taken too infrequently on the wards."
            },
            {
              "id": "c",
              "text": "The arrests occurred without any warning signs at all."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q2",
          "stem": "What is the speaker's view of early warning scores?",
          "options": [
            {
              "id": "a",
              "text": "They identify deterioration that staff would otherwise miss."
            },
            {
              "id": "b",
              "text": "They settle who may escalate a concern."
            },
            {
              "id": "c",
              "text": "They are less reliable than an experienced nurse's judgement."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q3",
          "stem": "According to the speaker, why are calls for help delayed?",
          "options": [
            {
              "id": "a",
              "text": "Staff do not recognise the significance of the readings."
            },
            {
              "id": "b",
              "text": "The referral process itself takes too long to complete."
            },
            {
              "id": "c",
              "text": "Staff fear being judged for calling unnecessarily."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q4",
          "stem": "What does the speaker say about the \"or if you are worried\" criterion?",
          "options": [
            {
              "id": "a",
              "text": "It performs comparably to a physiological trigger."
            },
            {
              "id": "b",
              "text": "It should be replaced with a measurable threshold."
            },
            {
              "id": "c",
              "text": "It is used mainly by the most experienced staff."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q5",
          "stem": "What does the speaker say the response team usually provides?",
          "options": [
            {
              "id": "a",
              "text": "Treatment that ward staff are not trained to give."
            },
            {
              "id": "b",
              "text": "A judgement made at the right moment."
            },
            {
              "id": "c",
              "text": "Transfer of the patient to intensive care."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q6",
          "stem": "What does the speaker finally ask his audience to do?",
          "options": [
            {
              "id": "a",
              "text": "Call the team whenever the score reaches five."
            },
            {
              "id": "b",
              "text": "Record the reasoning for not calling."
            },
            {
              "id": "c",
              "text": "Review every escalation decision at the next handover."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Presenter: Thank you. I want to talk about the four hours before a cardiac arrest on a general ward, because that is where the work is, and it is almost never where the attention goes. When we audit in-hospital arrests, the same picture comes back. In the large majority, the observations were abnormal for hours beforehand, and they were recorded. Somebody took them, somebody wrote them down, and the chart at the end of the bed tells the story so clearly that a reviewer reading it afterwards can watch the arrest approaching. So this is not a failure of measurement. We measure a great deal. The failure lives in the gap between recording a number and doing something about it, and that gap is what I want to spend the next few minutes on. Let me start with scoring systems, because I think they are widely misunderstood, including by the people who introduce them. An early warning score detects nothing. The nurse detected it. The score is arithmetic performed on what she had already written down. What it does is something else, and I would argue something more useful: it removes the argument. Before we had scores, a nurse who believed a patient was going off had to persuade somebody more senior that her impression deserved a visit, at three in the morning, across a hierarchy, with nothing to offer but her own judgement. A score of seven is not an impression. It is a number sitting on a chart that does not care who wrote it, and it turns a difficult conversation about seniority into a simple one about a threshold. Now, why are calls late? We asked, and the answers were remarkably consistent, and none of them was ignorance. Nobody said they did not know the patient was unwell. What they said was that they did not want to be the person who called the team out for nothing. They described being made to feel foolish once, in front of colleagues, and organising their behaviour around never feeling that again. One registrar told me he would rather be wrong at eight in the morning in front of his own consultant than wrong at midnight in front of somebody else's. That is not a knowledge problem and no amount of teaching will touch it. It is a problem about what happens to you when you call. Which brings me to the criterion I care most about, and the one that gets quietly dropped whenever a trust redesigns its chart. Every good escalation policy has, at the bottom of the list of numbers, a line that says: or if you are worried. It has no threshold. It cannot be audited neatly. And in our data it performs about as well as any single physiological trigger we have, because a nurse who has looked after a man all week is comparing him with himself this morning, and no chart holds that comparison. When somebody tells me a patient does not look right and cannot say why, I have learned to treat that as data rather than as preamble. I should say what the team is for when it arrives, because I think we oversell the drugs and undersell the rest. Occasionally we do something dramatic. Far more often the intervention is a second pair of eyes, an hour of somebody's undivided attention, a decision that this patient needs to be somewhere else, or a conversation that should have happened three days ago about how much of this the patient would actually want. Those are not heroics. They are ordinary medicine delivered at the right moment, and the reason they help is timing, not brilliance. I will finish with the request that I actually want to make, and it is not the one people expect. I am not asking you to call more often, although you will. I am asking you to treat not calling as a decision. At the moment, calling is an act that has to be justified and not calling is simply what happens by default. So write it down. If the score is five and you have decided to reassess in an hour, put in the notes that you saw it, what you thought, and when you will look again. Two lines. The patient gets a plan instead of a gap, the next shift inherits your reasoning instead of guessing at it, and — this is the part that changes behaviour — a decision that has been written down is one that somebody can support you in. And it costs nothing, which matters, because every other thing I have ever been asked to introduce on a busy ward has cost somebody an hour they did not have. That is the whole of my argument. Not more calls. Fewer silent ones."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-2-interview-a-district-nurse-on-pressure-damage",
    "title": "Listening Part C · item 2 — INTERVIEW: a district nurse on pressure damage",
    "prompt": "You will hear an interview with a district nursing sister. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "pressure-ulcers",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: (C) overstates her — she says turning matters. (B) is a different complaint she does not make here. · Q2: \"Looking is the intervention.\" (A) is what the charts already do and what she calls a record of staff movements. · Q3: \"If it needs two people to carry it out, it will not happen.\" (A) misreads her: she describes exhaustion, not unwillingness. · Q4: \"The first gets a performance.\" (B) and (C) are never claimed. · Q5: (C) is what she says she would rather not spend the time on. (A) is not her answer — surfaces alone will not heal a person who is not eating. · Q6: \"By then I am treating a failure.\" (B) and (C) are never proposed.",
    "payload": {
      "speakers": [
        {
          "role": "Interviewer",
          "voice": "onyx"
        },
        {
          "role": "Sister",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the sister's objection to the two-hourly turn?",
          "options": [
            {
              "id": "a",
              "text": "It is applied as a fixed rule regardless of the patient."
            },
            {
              "id": "b",
              "text": "It is rarely carried out as often as the record claims."
            },
            {
              "id": "c",
              "text": "It has never been shown to prevent pressure damage."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q2",
          "stem": "What does she say a repositioning chart should record?",
          "options": [
            {
              "id": "a",
              "text": "The exact times at which each turn was carried out."
            },
            {
              "id": "b",
              "text": "The condition of the skin at each inspection."
            },
            {
              "id": "c",
              "text": "The position the patient was moved into."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q3",
          "stem": "What does she say is the main difficulty with care at home?",
          "options": [
            {
              "id": "a",
              "text": "Families are unwilling to follow the plan given to them."
            },
            {
              "id": "b",
              "text": "Equipment cannot be delivered to a private house."
            },
            {
              "id": "c",
              "text": "A plan may need more help than the household has."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q4",
          "stem": "Why does she ask about the previous night specifically?",
          "options": [
            {
              "id": "a",
              "text": "Because it produces an answer rather than a reassurance."
            },
            {
              "id": "b",
              "text": "Because night-time is when most skin damage occurs."
            },
            {
              "id": "c",
              "text": "Because carers are more truthful when they are tired."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q5",
          "stem": "For a patient who cannot be moved often, what does she prioritise?",
          "options": [
            {
              "id": "a",
              "text": "A more expensive pressure-relieving mattress."
            },
            {
              "id": "b",
              "text": "Nutrition and keeping the skin dry."
            },
            {
              "id": "c",
              "text": "A precise schedule of small position changes."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q6",
          "stem": "What single change to the service does she want?",
          "options": [
            {
              "id": "a",
              "text": "Referral before a wound has developed."
            },
            {
              "id": "b",
              "text": "More nursing visits to each patient."
            },
            {
              "id": "c",
              "text": "Training for carers delivered in hospital."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Interviewer: You have said before that the two-hourly turn is the most quoted instruction in your field and one of the least useful. That is a provocative thing to say. Sister: It is, and I say it carefully. Turning matters. What I object to is the number, because the number has taken on a life of its own. Two hours is not a physiological constant. It was a reasonable rule of thumb that hardened into a rule, and once it was a rule it started doing damage of its own kind — it let people believe that a turn at two, four and six was care, and that a patient turned on the hour could not be developing pressure damage. Some patients cannot tolerate thirty minutes on a heel. Others are safe for four hours. The clock knows none of that, and it tells you nothing about the mattress, the moisture, the nutrition or the shear. Interviewer: So what should be on the chart instead? Sister: What the skin looked like when you moved them, and what you did about what you saw. Repositioning is not the intervention. Looking is the intervention, and repositioning is what makes looking possible. If a chart records twelve turns and never once records a skin inspection, I have no information at all. I have a record of the staff's movements. Interviewer: You do most of your work in people's homes. How different is that from a ward? Sister: Entirely different, and this is the part that never survives the journey out of hospital. On a ward, the equipment arrives, the staff are there and somebody else does the cooking. In a house, the mattress is the one the couple has slept on for twenty years, the carer is a seventy-eight-year-old husband with his own bad back, and the bed is often downstairs in the front room because the stairs became impossible in March. I can write the most immaculate plan in the world and if it needs two people to carry it out, it will not happen, and nobody will tell me it is not happening. They will just say everything is fine when I ring. Interviewer: How do you find out that it is not happening? Sister: I look at the skin, and I look at the house. A carer who is exhausted has a particular way of talking about the night. And I ask a question I was taught late and wish I had been taught early: not \"are you managing\", because everybody says yes to that, but \"what was last night actually like\". The second question gets an answer. The first gets a performance. Interviewer: What about prevention when somebody is simply not going to move much? Sister: Then we stop pretending the problem is only position. The two things I chase hardest in that situation are protein and moisture, and neither of them is glamorous. A person who is not eating will not heal, whatever surface they are lying on, and I would rather spend twenty minutes on the supplement drinks and the eating than another twenty on the exact angle of the tilt. And skin that is wet has lost most of its tolerance before any pressure is applied at all. Interviewer: Can you teach a family to do what you do? Sister: I can teach them to look, which is most of it. I show the husband the two places I would put my own eyes first — the heels and the base of the spine — and I show him what he is looking for, which is not a wound. It is a patch that stays red after the pressure comes off, and it can be very hard to see on darker skin, so I teach him to feel for a warm or a boggy area as well. Then I ask him to tell me on the telephone, not to wait for my visit, because three days is the difference between a conversation and a dressing. Families are extremely good at this once somebody has actually shown them. What they are not good at is guessing what we have never explained. Interviewer: If you could change one thing in how the service is set up, what would it be? Sister: The referral would come earlier and it would come with the carer in it. At the moment I am usually called when there is a wound. By then I am treating a failure. If I saw that gentleman three weeks before, when the daughter first says he is spending most of the day in the chair, the work would be a conversation about a cushion and a routine, and it would cost the service a fraction of what a grade three ulcer costs it, and cost him a great deal less than that."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-3-presentation-how-a-diagnosis-goes-wrong",
    "title": "Listening Part C · item 3 — PRESENTATION: how a diagnosis goes wrong",
    "prompt": "You will hear part of a presentation by a consultant physician on diagnostic error. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "diagnostic-error",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: \"Nobody was negligent, nobody was tired.\" (B) is contradicted. (A) is never described. · Q2: Every \"although\" sentence. (B) is wrong — they are in the notes, softened. · Q3: \"It is how expertise works.\" (A) is what she argues against. · Q4: (C) is the half she says produces a list nobody acts on. (A) is never proposed. · Q5: (B) is exactly what she says we wrongly do. · Q6: \"It was in the wrong room.\" (B) is denied — \"none of them was ignored exactly\".",
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Why has the speaker chosen this particular case?",
          "options": [
            {
              "id": "a",
              "text": "Because the patient came to significant and lasting harm."
            },
            {
              "id": "b",
              "text": "Because the clinicians involved were unusually inexperienced."
            },
            {
              "id": "c",
              "text": "Because no one involved behaved badly."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q2",
          "stem": "What does the speaker say happened to the findings that did not fit?",
          "options": [
            {
              "id": "a",
              "text": "They were explained away one at a time."
            },
            {
              "id": "b",
              "text": "They were not recorded in the patient's notes at all."
            },
            {
              "id": "c",
              "text": "They were referred to a second opinion for review."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q3",
          "stem": "What is the speaker's view of anchoring?",
          "options": [
            {
              "id": "a",
              "text": "It is a habit that better training could remove."
            },
            {
              "id": "b",
              "text": "It occurs mainly when clinicians are under time pressure."
            },
            {
              "id": "c",
              "text": "It is inseparable from clinical expertise."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q4",
          "stem": "What does the speaker recommend instead of a checklist?",
          "options": [
            {
              "id": "a",
              "text": "A second clinician reviewing every admission."
            },
            {
              "id": "b",
              "text": "A question that names what would be expected."
            },
            {
              "id": "c",
              "text": "A written list of the alternative diagnoses to consider."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q5",
          "stem": "What does the speaker say about a patient who fails to improve?",
          "options": [
            {
              "id": "a",
              "text": "It usually reflects a delay in starting the treatment."
            },
            {
              "id": "b",
              "text": "It is a reason to allow more time on the current plan."
            },
            {
              "id": "c",
              "text": "It should send the clinician back to the diagnosis."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q6",
          "stem": "What does the speaker say about the three staff members and the daughter?",
          "options": [
            {
              "id": "a",
              "text": "They had been given the wrong information by the team."
            },
            {
              "id": "b",
              "text": "They raised concerns which were formally overruled."
            },
            {
              "id": "c",
              "text": "Their observations never reached the diagnostic discussion."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Presenter: I am going to describe a case in which nobody was negligent, nobody was tired, nobody was cutting corners, and the diagnosis was wrong for eleven days. I choose that kind of case deliberately, because the cases where somebody behaved badly teach us very little. We already know not to behave badly. A woman of fifty-four arrives with abdominal pain. The referral letter, written by a good general practitioner, says \"query gallstones\", and there is an ultrasound report from two years ago that mentions gallstones. She is examined, she is tender in roughly the right place, the working diagnosis is written at the top of the page, and from that moment forward every piece of information that arrives is sorted into two piles. The things that fit go into the notes. The things that do not fit go into a sentence beginning \"although\". Her amylase is mildly raised — although that happens in biliary disease. Her pain goes through to her back — although some patients describe it that way. She is not improving on day four — although some patients take longer. Each of those sentences is defensible on its own, and I want to be clear that if you handed me that chart on day two I might well have written the same words. The failure is not in any single judgement. It is in the fact that eleven consecutive judgements were all made in the shadow of the first one, and none of them was ever made freshly. That is anchoring, and I want to say something unfashionable about it. Anchoring is not a defect in doctors. It is how expertise works. A consultant who did not narrow the field within ninety seconds would be useless in a clinic; the whole value of experience is that it lets you commit early and be right most of the time. So when people propose that we should simply keep an open mind, they are proposing that we throw away the thing that makes us fast. We cannot fix this by asking clinicians to think less like clinicians. What we can do is build in a moment where the anchor is deliberately lifted, and the evidence on this is more encouraging than the evidence on almost anything else in this field. Not a checklist — I have watched checklists become a signature exercise within a fortnight. A question, asked out loud, at a fixed point: what else could this be, and what would I expect to see if it were? Notice the second half. \"What else could this be\" on its own produces a list nobody acts on. The second half turns it into a test, because now you have said what you would expect, and you can go and look for it. The timing of that question is not arbitrary either. Ask it on admission and it is theatre — you have no information yet. Ask it at forty-eight hours, when the patient has not done what your diagnosis said they would do, and it is a real question. Failure to improve is the most under-used diagnostic sign in hospital medicine. We treat it as a reason to wait longer. It is a reason to go back to the beginning. One more thing, and then I will stop. In the case I described, three people had a piece of information that did not fit. The physiotherapist thought the pain was too positional. The daughter said her mother had lost a stone before any of this started. The night nurse wrote that she looked jaundiced at four in the morning and it had gone by the ward round. None of the three was wrong, none of the three was ignored exactly, and none of them found their way into the diagnostic conversation, because the diagnostic conversation happened in a room they were not in. I am asked fairly often whether the answer is simply more tests, and I want to deal with that honestly, because it is the intuitive answer and it is wrong in a specific way. In this case a scan was requested on day three. It was reported as showing gallstones, which was true, and which had been true for two years, and the report was read as a confirmation rather than as an old finding that had never been the question. A test ordered inside an anchor does not break the anchor. It usually strengthens it, because now the wrong answer has a picture attached. So my three requests are these. Ask the question at forty-eight hours, not at admission. Say what you would expect to see, not merely what else it might be. And treat the observation of the person who spends the most time with the patient as evidence, because in this case, and in most of the cases I review, it was there all along and it was in the wrong room."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-4-interview-a-pharmacist-on-stopping-medicines",
    "title": "Listening Part C · item 4 — INTERVIEW: a pharmacist on stopping medicines",
    "prompt": "You will hear an interview with a consultant pharmacist. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "deprescribing",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: \"Every single item was a reasonable decision on the day.\" (A) is the opposite. · Q2: \"One decision from six years ago, photocopied.\" (C) is never said. · Q3: \"The benefit is in the future and the harm is now.\" (B) she explicitly rejects. · Q4: \"Am I being given up on.\" (B) and (C) are never raised. · Q5: \"Impossible to attribute.\" (C) inverts her — she asks for a review date. · Q6: \"She knows something about her own body that my paper does not.\"",
    "payload": {
      "speakers": [
        {
          "role": "Interviewer",
          "voice": "onyx"
        },
        {
          "role": "Pharmacist",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the pharmacist say about a long medication list?",
          "options": [
            {
              "id": "a",
              "text": "It usually results from poor prescribing decisions."
            },
            {
              "id": "b",
              "text": "It is rarely reviewed by the patient's own doctor."
            },
            {
              "id": "c",
              "text": "It accumulates from individually sensible decisions."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q2",
          "stem": "Why does she say medicines are continued without thought?",
          "options": [
            {
              "id": "a",
              "text": "Because patients ask for their repeat prescriptions."
            },
            {
              "id": "b",
              "text": "Because renewing a prescription is not treated as a decision."
            },
            {
              "id": "c",
              "text": "Because pharmacists are not consulted about any of the repeat prescriptions."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q3",
          "stem": "Which medicines does she consider stopping first?",
          "options": [
            {
              "id": "a",
              "text": "Those the patient has already stopped taking."
            },
            {
              "id": "b",
              "text": "Those with the highest cost to the service."
            },
            {
              "id": "c",
              "text": "Those whose benefit lies far in the future."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q4",
          "stem": "What does she say patients are really asking?",
          "options": [
            {
              "id": "a",
              "text": "Whether they are being written off."
            },
            {
              "id": "b",
              "text": "Whether the decision can be reversed later."
            },
            {
              "id": "c",
              "text": "Whether the medicines were ever necessary."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q5",
          "stem": "What mistake does she describe in the way stopping is carried out?",
          "options": [
            {
              "id": "a",
              "text": "Reducing the dose rather than stopping completely."
            },
            {
              "id": "b",
              "text": "Withdrawing several medicines at the same time."
            },
            {
              "id": "c",
              "text": "Reviewing the change too soon after stopping."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q6",
          "stem": "What does she say when a patient's experience contradicts the evidence?",
          "options": [
            {
              "id": "a",
              "text": "The evidence should be explained again more carefully."
            },
            {
              "id": "b",
              "text": "The patient's account tells her something real."
            },
            {
              "id": "c",
              "text": "The drug should be stopped and then restarted."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Interviewer: You describe your job as taking medicines away. Is that not a strange thing for a pharmacist to be proud of? Pharmacist: It sounds strange for about a week. Then you meet a woman of eighty-six on fourteen medicines, four of which were started for a reason that no longer exists, two of which are treating the side effects of the other two, and one of which she stopped taking in 2019 without telling anyone. Nobody designed that list. It accumulated. Every single item on it was a reasonable decision on the day it was made, and nobody has ever been responsible for the list as a whole. Interviewer: Why does nobody take responsibility for the whole list? Pharmacist: Because starting is an event and continuing is not. A start has a consultation, a conversation, a note. Continuing happens when a repeat prescription is signed, which takes four seconds and involves no thought at all, and the fact that it happens twelve times a year makes it feel like twelve confirmations when it is really one decision from six years ago, photocopied. Interviewer: How do you decide what comes off? Pharmacist: I start with the ones where the benefit is in the future and the harm is now. A statin started at sixty for a twenty-year horizon is a different proposition at eighty-eight when somebody is falling. That is not a judgement about her worth. It is arithmetic about time. Then I look for the treatment cascades — the drug that is treating a symptom the previous drug caused, which is the most common pattern I find and the one that most surprises the people who prescribed it. Interviewer: And how do patients react? Pharmacist: Not the way people assume. The commonest reaction is relief, followed almost immediately by suspicion, and the suspicion is always the same one: am I being given up on. That is the sentence underneath the question, and if you do not answer it, nothing else you say will land. So I answer it first, out loud, before I touch the list. Interviewer: How do you answer it? Pharmacist: By being specific about what we are protecting. I am not stopping her tablets to save money and I am not stopping them because of her age. I am stopping the ones that are making her dizzy so that she can keep going to her Tuesday group, because if she falls she loses that, and losing that will do her far more harm than a slightly higher cholesterol will. When the goal is hers and it is concrete, the conversation stops being about subtraction. Interviewer: What goes wrong when deprescribing is done badly? Pharmacist: Two things, and neither is the one people fear. The first is stopping several medicines on the same day, which makes any change impossible to attribute. One at a time, with a date to review, or you have learned nothing. The second is stopping something and not telling the person who will see her next, so the symptom reappears in a different clinic, and a doctor who does not know we stopped it starts it again. Half of my failures are communication failures, not pharmacology. Interviewer: Who should be doing this work? It cannot all be consultant pharmacists. Pharmacist: It cannot, and it should not be, because the person best placed is usually the one who knows what the patient is trying to do with their week. That is often the general practitioner, and increasingly it is a practice pharmacist, and in a care home it is frequently the senior carer who has noticed that a resident is drowsy every afternoon and has never been asked. My job is to make the review ordinary rather than specialist. The moment it becomes something only a hospital can do, it happens to the few hundred people I see and not to the several thousand who need it. Interviewer: Do you get resistance from the original prescriber? Pharmacist: Far less than you would expect, and almost none when I write to them properly. What causes resistance is a letter that says a drug has been stopped. What removes it is a letter that says what changed in the patient, what I stopped, what I expect to happen, and what I would like them to do if it does not. Prescribers do not object to being disagreed with. They object to being informed after the fact about a patient they still carry. Interviewer: Is there a medicine you never stop? Pharmacist: There is no list like that, and I would distrust anyone who gave you one. But I will say that I am slow with anything where stopping is itself dangerous, and slower still where the person's own experience says the drug is working. If she tells me it helps and the evidence says it should not, the honest position is that she knows something about her own body that my paper does not."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-5-presentation-the-word-confused",
    "title": "Listening Part C · item 5 — PRESENTATION: the word \"confused\"",
    "prompt": "You will hear part of a presentation by a geriatrician. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "delirium",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: (B) and (C) are never claimed. · Q2: \"About eighty per cent... findable and treatable.\" (B) is the opposite. · Q3: The agitated patient \"gets attention within the hour\", ruling out (B). · Q4: \"Is this how she was two weeks ago.\" (A) inverts his point about what the test can tell you. (C) is one of the causes, not the method. · Q5: \"Treats the distress of the people in the room.\" (C) contradicts \"it lengthens it\". · Q6: \"We are treating the last part of it.\" (B) is close but he addresses the patient.",
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the speaker's objection to the word \"confused\"?",
          "options": [
            {
              "id": "a",
              "text": "It records the observer's experience rather than the patient's state."
            },
            {
              "id": "b",
              "text": "It is used by nursing staff far more often than it is by doctors."
            },
            {
              "id": "c",
              "text": "It has no agreed meaning anywhere in the medical literature at all."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q2",
          "stem": "Why does the speaker say delirium is an emergency?",
          "options": [
            {
              "id": "a",
              "text": "Because it is far more common than dementia in hospital."
            },
            {
              "id": "b",
              "text": "Because it cannot be reversed once it is established."
            },
            {
              "id": "c",
              "text": "Because a recent change usually has a treatable cause."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q3",
          "stem": "Which patients does the speaker say are most often missed?",
          "options": [
            {
              "id": "a",
              "text": "Those who are quiet and make no demands."
            },
            {
              "id": "b",
              "text": "Those who become agitated during the night."
            },
            {
              "id": "c",
              "text": "Those who already have a diagnosis of dementia."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q4",
          "stem": "What does the speaker say is the fastest way to distinguish delirium?",
          "options": [
            {
              "id": "a",
              "text": "Repeating a formal screening test the following day."
            },
            {
              "id": "b",
              "text": "Asking someone who knew the patient beforehand."
            },
            {
              "id": "c",
              "text": "Reviewing the medication chart for recent additions."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q5",
          "stem": "What does the speaker say about sedation?",
          "options": [
            {
              "id": "a",
              "text": "It relieves the staff rather than the patient."
            },
            {
              "id": "b",
              "text": "It should be reserved for the most agitated patients."
            },
            {
              "id": "c",
              "text": "It is effective but is prescribed too readily."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q6",
          "stem": "Why does the speaker want the episode explained to the patient afterwards?",
          "options": [
            {
              "id": "a",
              "text": "To ensure the diagnosis is recorded in the discharge letter."
            },
            {
              "id": "b",
              "text": "To help the family understand what they witnessed."
            },
            {
              "id": "c",
              "text": "Because the memory of it is part of the illness."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Presenter: I want to talk about a single word that appears in nursing notes across this hospital about two hundred times a day, and about what it costs us. The word is \"confused\". Here is what is wrong with it. It is a description of the observer's experience, not the patient's condition. It tells me that a conversation did not go the way the writer expected. It does not tell me whether the patient was drowsy or agitated, whether this began this afternoon or three years ago, whether attention could be held for ten seconds, or whether anything at all has changed since breakfast. Every one of those distinctions changes what I do next, and none of them survives inside that word. The distinction that matters most is the one between something that arrived and something that has been there. Dementia arrives over years. Delirium arrives over hours or days, and it is the arriving that makes it an emergency, because something caused it — and in about eighty per cent of the cases we review, that something is findable and treatable. Infection, retention, constipation, pain that nobody has asked about, a drug started on Tuesday, alcohol that stopped on admission because nobody knew about it. The list is not exotic. It is mostly the list of things a careful person would find in twenty minutes if they were looking. Now, the part that surprises people. When we audit missed delirium, the cases we miss are not the noisy ones. A man climbing out of bed at two in the morning and pulling at a cannula gets attention within the hour, and whatever else happens to him, he is not overlooked. The patients we miss are the quiet ones — the woman who lies still, does not ring the bell, eats a little of what is put in front of her, and is described on the handover as settled. Hypoactive delirium is the commoner form, it carries the worse outcome, and it is nearly invisible on a busy ward because it makes no demands. Being no trouble is, on our wards, a way of becoming unseen. So what do I want instead of the word? I want the answer to one question, asked of somebody who knew the patient before: is this how she was two weeks ago? That single question, put to a daughter or a warden or a home carer, separates delirium from dementia faster than any tool on the trolley, and it takes a telephone call. Where there is a formal screening test, use it, and I would rather you used it badly than not at all. But the test tells you there is a change. The telephone call tells you the change is new. I should say something about what we do once we have found it, because we are, as a profession, oddly drawn to the least useful intervention. There is a reflex to sedate. Sedation treats the distress of the people in the room. It does not treat the delirium, it lengthens it in most series, and it makes the falls worse. What does work is unglamorous to the point of embarrassment: the patient's own glasses on her face, her hearing aid in and working, the light on during the day and off at night, somebody saying her name and the day and the reason she is here, water within reach, and the bladder and the bowels attended to before anything else at all. That is not comfort care standing in for medicine. In the trials, it is the intervention with the effect. Before I leave the treatment, I should say a word about prevention, because the same measures that treat delirium prevent it, and prevention is where the numbers are largest. The wards that have reduced their rates have not bought anything. They have identified the patients at risk on the day of admission — age, a sensory impairment, a previous episode, an operation coming — and then they have done six ordinary things reliably for those patients rather than twenty ambitious things occasionally. Reliability is the active ingredient. A hearing aid that is in for four days out of seven is not a treatment; it is a coincidence. And one last point that I would put above the others if I could only keep one. Delirium is frightening, and it is remembered. Patients describe it afterwards in the language of nightmares — being held down, being deceived, being in danger — and a proportion carry that memory for months. So when we tell somebody afterwards what happened to them, and we say it plainly, that the confusion was caused by an infection and it was not madness and it is over, we are not being kind at the end of the episode. We are treating the last part of it."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-6-interview-eating-when-swallowing-is-unsafe",
    "title": "Listening Part C · item 6 — INTERVIEW: eating when swallowing is unsafe",
    "prompt": "You will hear an interview with a speech and language therapist. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "dysphagia",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: (B) is never mentioned. (C) is close but the misunderstanding he names is permission. · Q2: \"They may aspirate anyway, on their own saliva.\" (C) is never his argument. · Q3: \"Never as safe against unsafe\" rules out (C). · Q4: \"If it is not achievable at half past six it is not a plan.\" · Q5: \"That phrase covers two completely different positions.\" (B) is one branch, not his first step. · Q6: \"Bad news with nothing offered after it.\" (C) inverts him — he repeats deliberately.",
    "payload": {
      "speakers": [
        {
          "role": "Interviewer",
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
          "stem": "What misunderstanding does the therapist describe about his role?",
          "options": [
            {
              "id": "a",
              "text": "That he decides whether a patient may eat."
            },
            {
              "id": "b",
              "text": "That he provides therapy to restore normal swallowing."
            },
            {
              "id": "c",
              "text": "That he is responsible for what the patient is given."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q2",
          "stem": "What does he say about being nil by mouth?",
          "options": [
            {
              "id": "a",
              "text": "It is justified whenever aspiration has been observed."
            },
            {
              "id": "b",
              "text": "It carries risks of its own, including aspiration."
            },
            {
              "id": "c",
              "text": "It should only ever be a short-term measure."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q3",
          "stem": "How does he say the options should be presented?",
          "options": [
            {
              "id": "a",
              "text": "As two courses that each carry a risk."
            },
            {
              "id": "b",
              "text": "As a clinical recommendation with reasons attached."
            },
            {
              "id": "c",
              "text": "As a choice between what is safe and what is not."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q4",
          "stem": "Why does he insist the person who feeds the patient is present?",
          "options": [
            {
              "id": "a",
              "text": "Because they will be asked to sign the plan."
            },
            {
              "id": "b",
              "text": "Because they know the patient's preferences best."
            },
            {
              "id": "c",
              "text": "Because the plan must work at a busy mealtime."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q5",
          "stem": "What does he do when a family asks for everything to be done?",
          "options": [
            {
              "id": "a",
              "text": "He establishes what they mean by it."
            },
            {
              "id": "b",
              "text": "He explains the evidence about tube feeding first."
            },
            {
              "id": "c",
              "text": "He arranges a second opinion for the family."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q6",
          "stem": "When does honesty damage a family's trust, in his experience?",
          "options": [
            {
              "id": "a",
              "text": "When it is given too early in the illness."
            },
            {
              "id": "b",
              "text": "When nothing is offered alongside it."
            },
            {
              "id": "c",
              "text": "When it is repeated more than once."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Interviewer: Most people assume your job is to decide whether somebody is allowed to eat. Therapist: That is the assumption, and it is the one I spend most of my time dismantling. I do not give permission. I describe what happens when this person swallows, I say what I think the consequences are likely to be, and then the decision belongs to the patient, or, if they cannot make it, to the people responsible for deciding in their interests. The moment a therapist starts saying \"I have made him nil by mouth\", something has gone wrong, and usually what has gone wrong is that nobody wanted to own a difficult decision so it was quietly handed to the person with the assessment form. Interviewer: But surely if food is going into the lungs, that is not a matter of preference. Therapist: It is not a matter of preference; it is a matter of weighing. Aspiration is a risk, not an event that is certain to happen, and stopping oral intake is also a risk, and we are extremely bad at putting the second one on the scales. Somebody who is nil by mouth is not safe. They are hungry, they are dry, their mouth is filthy within a day unless somebody works at it, they are cut off from the one social act that still structures the afternoon, and — this is the part clinicians most often do not know — they may aspirate anyway, on their own saliva, which they cannot be made nil by mouth from. Interviewer: So how do you frame the conversation? Therapist: With the actual alternatives, described honestly, and never as safe against unsafe. It is: this way, there is a risk of a chest infection, and we will reduce it as far as we can with posture and consistency and mouth care. That way, there is a risk of a chest infection too, and a certainty of losing something she values. Then I stop talking, because the weighing is not mine to do. Interviewer: Who is in the room when that happens? Therapist: As many of the right people as I can get, and that always includes whoever actually feeds her. The plan is not written for the notes. It is written for a healthcare assistant at half past six in the evening who has eleven other people to help, and if it is not achievable at half past six it is not a plan, it is a wish. I have written beautiful, unachievable plans. They came back to me as an infection. Interviewer: Do the practical measures make much difference, or are they a way of being seen to do something? Therapist: They make a great deal of difference, and I would put mouth care at the top, which surprises people who expect me to say thickener. The bacteria that cause an aspiration pneumonia mostly come from the mouth, so a person with a neglected mouth who aspirates a little is in real trouble, and a person with a clean mouth who aspirates the same amount very often is not. Sitting upright and staying upright afterwards is the second. Thickened fluids are the intervention with the most reputation and the least evidence behind it, and they are also the one patients hate most, so I am careful about how readily I reach for them. Interviewer: What do you say to a family who want everything done? Therapist: I try to find out what they mean, because that phrase covers two completely different positions. Sometimes it means they cannot bear to think of her going without food, and that is about food as love, and we can nearly always meet it — tastes, small amounts, something on the tongue that she recognises. Sometimes it means they believe a tube will make her better, and then my job is to be honest that in advanced dementia the evidence does not support that, and to be honest gently and more than once, because nobody takes that in the first time. Interviewer: And if the family and the patient want different things? Therapist: Then the patient's own view decides, if she has one, and a great deal of my work is finding out whether she has one when she cannot say it in a sentence. Somebody who turns her head away from a spoon every single time is telling me something. Somebody who opens her mouth for a spoonful of the trifle and not for the soup is telling me something else. Interviewer: Does that honesty ever cost you the family's trust? Therapist: Only when I deliver it as a verdict. If I say the tube will not help and leave, I have taken something away. If I say what will help — that she can still have the thing she likes, that somebody will sit with her, that we will keep her mouth comfortable — then I have described a plan rather than a refusal, and families almost always come with me. What breaks trust is not bad news. It is bad news with nothing offered after it."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-7-presentation-the-ward-round-as-a-procedure",
    "title": "Listening Part C · item 7 — PRESENTATION: the ward round as a procedure",
    "prompt": "You will hear part of a presentation on improving the hospital ward round. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "ward-round",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: (C) is never claimed; nothing is said about how supervision has changed. · Q2: \"That decline is not fatigue\" rules out (A). · Q3: \"Two thirds could not say.\" · Q4: (B) is contradicted later — about one genuine call a week. · Q5: \"At the desk, in one handwriting, for eleven patients at a time.\" · Q6: (A) \"moved a little\" but is explicitly not the result she cares about most.",
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What comparison does the speaker draw at the start?",
          "options": [
            {
              "id": "a",
              "text": "Ward rounds take longer than most clinical procedures do."
            },
            {
              "id": "b",
              "text": "Ward rounds are not taught in the way procedures are."
            },
            {
              "id": "c",
              "text": "Ward rounds are supervised less closely than they once were."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q2",
          "stem": "Why does bedside time fall during the round?",
          "options": [
            {
              "id": "a",
              "text": "Because the team becomes tired as the morning goes on."
            },
            {
              "id": "b",
              "text": "Because the later patients are generally less unwell."
            },
            {
              "id": "c",
              "text": "Because the round must finish at a fixed time."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q3",
          "stem": "What did the speaker's team find when they asked patients about the plan?",
          "options": [
            {
              "id": "a",
              "text": "Patients recalled the plan but disagreed with parts of it."
            },
            {
              "id": "b",
              "text": "Most patients could not say what had been decided."
            },
            {
              "id": "c",
              "text": "Patients understood the plan but not the reasons for it."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q4",
          "stem": "What does the speaker say about interruptions?",
          "options": [
            {
              "id": "a",
              "text": "They occurred more often than the team had predicted."
            },
            {
              "id": "b",
              "text": "They were mostly urgent and could not have been delayed."
            },
            {
              "id": "c",
              "text": "They fell most heavily on the sickest patients."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q5",
          "stem": "Why did the checklist fail?",
          "options": [
            {
              "id": "a",
              "text": "It could be completed away from the bedside."
            },
            {
              "id": "b",
              "text": "It contained too many items to be remembered."
            },
            {
              "id": "c",
              "text": "It duplicated information already in the notes."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q6",
          "stem": "What does the speaker say was the most important result?",
          "options": [
            {
              "id": "a",
              "text": "A reduction in the average length of stay."
            },
            {
              "id": "b",
              "text": "Fewer complaints and fewer avoidable readmissions."
            },
            {
              "id": "c",
              "text": "Greater satisfaction among the junior members of staff."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Presenter: We teach lumbar puncture. We assess people on it, we watch them do it, and nobody would dream of letting a trainee do one unsupervised on the first day. We do not teach the ward round, and the ward round is the intervention every single inpatient receives every single day. If you want to know why hospitals are the way they are, that gap is a reasonable place to start. Let me give you the numbers we collected, because they were not what we expected. We followed eighty-one rounds. The median time at the bedside was eight minutes for the first patient of the morning and just under three for the last. That decline is not fatigue. It is arithmetic: the round has a fixed end, imposed by theatre lists and clinics, and a variable beginning, so every minute spent early is taken from somebody at the far end of the ward. The patients at the end of the corridor are systematically getting a different round from the patients at the beginning, and no one has ever decided that. It is simply what a queue does when the finish is fixed. Second finding, and this is the one that changed our practice. We recorded how often the plan was stated out loud in a form the patient could repeat afterwards. Nineteen per cent. And then we asked the patients, within twenty minutes, what had been decided. Two thirds could not say. That is not a memory problem and it is not about intelligence — one of the patients who could not tell us was a retired head teacher. It is that the plan was discussed in the third person, at the end of the bed, between colleagues, in a technical register, while the patient waited politely for somebody to speak to her. Third, interruptions. A median of six per round, and the striking thing was where they landed. They did not distribute evenly. They clustered on the sickest patients, because that is where the phone rings about. So the patient who most needed continuous thought received the most fragmented attention of anyone on the ward. Now, what did we do, and what did not work. We tried a checklist first. It was thorough, it had fourteen items, and within three weeks it was being completed after the round, at the desk, in one handwriting, for eleven patients at a time. That failure was instructive rather than embarrassing: a form that can be completed away from the bedside will be, and no amount of insistence changes that, because the pressure that produced the shortcut has not moved. What worked had three parts and none of them was a form. First, we reversed the order every other day. That single change equalised bedside time across the ward better than any exhortation, and it cost nothing to implement. Second, we gave the round a spoken ending: before we move away from this bed, the plan, said to the patient, in the second person, in one sentence — \"you are staying today, we are waiting for the scan tomorrow, and you can eat\". Nurses started prompting for it within a fortnight, which is how you know a change has taken. Third, we protected the round from bleeps by having them held, not diverted to somebody else, for a defined hour, and the number of genuinely urgent calls that could not wait an hour turned out to be about one a week. The result I care about most is not the length of stay, although that moved a little. It is that complaints about communication fell by more than half over the following year, and the readmissions that came from a patient not understanding their discharge instructions fell with them. Those two things are the same thing, seen from two ends. I should add what we did not change, because a talk that reports only successes is not a report. We did not shorten the round, and I no longer think that was the target. A round that is twenty minutes shorter and leaves the same two thirds of patients unable to say what was decided has saved the team time and cost the ward everything it was for. I will finish with the argument I actually want you to take away, which is about status. The ward round is treated as an administrative event that clinical work happens around. It is not. It is the procedure with the widest indication in the whole hospital, it has a technique that can be described, it has complications when done badly, and it can be taught. Until we treat it that way, we will keep improving the rare things we respect and neglecting the daily thing that touches everyone."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-8-interview-the-finding-nobody-was-looking-for",
    "title": "Listening Part C · item 8 — INTERVIEW: the finding nobody was looking for",
    "prompt": "You will hear an interview with a consultant radiographer. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "incidental-findings",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: \"We have found the same bodies at a higher resolution.\" · Q2: \"The one we measure least and I think matters most.\" · Q3: \"Transfers the whole problem to a general practitioner.\" · Q4: (C) is the phrase she calls a shrug. · Q5: (A) is what we already consent for, which is her contrast. · Q6: \"That is not a training problem\", which rules out (A).",
    "payload": {
      "speakers": [
        {
          "role": "Interviewer",
          "voice": "onyx"
        },
        {
          "role": "Radiographer",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Why does the radiographer say incidental findings are increasing?",
          "options": [
            {
              "id": "a",
              "text": "More scans are being requested by general practitioners."
            },
            {
              "id": "b",
              "text": "Patients are presenting at an older age than before."
            },
            {
              "id": "c",
              "text": "Scanners now detect much smaller abnormalities."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q2",
          "stem": "Which harm does she say is least often measured?",
          "options": [
            {
              "id": "a",
              "text": "The complications that arise from an unnecessary biopsy."
            },
            {
              "id": "b",
              "text": "The lasting anxiety created in the patient."
            },
            {
              "id": "c",
              "text": "The cost of the additional investigations."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q3",
          "stem": "What does she say is wrong with the phrase \"suggest further imaging\"?",
          "options": [
            {
              "id": "a",
              "text": "It is written without access to the patient's history."
            },
            {
              "id": "b",
              "text": "It commits the department to a follow-up appointment."
            },
            {
              "id": "c",
              "text": "It passes the difficulty to somebody else."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q4",
          "stem": "What does she say a report should include?",
          "options": [
            {
              "id": "a",
              "text": "A statement that no follow-up is needed."
            },
            {
              "id": "b",
              "text": "A numerical probability that the finding is benign."
            },
            {
              "id": "c",
              "text": "A recommendation to correlate the finding clinically."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q5",
          "stem": "What does she want patients told before a scan?",
          "options": [
            {
              "id": "a",
              "text": "The likelihood of a reaction to the contrast."
            },
            {
              "id": "b",
              "text": "The reason the scan has been requested."
            },
            {
              "id": "c",
              "text": "That unrelated findings are sometimes seen."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q6",
          "stem": "What change would she make first?",
          "options": [
            {
              "id": "a",
              "text": "Additional training for reporting staff."
            },
            {
              "id": "b",
              "text": "Guidance built into the reporting system."
            },
            {
              "id": "c",
              "text": "A second reader for indeterminate findings."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Interviewer: You have called incidental findings the fastest-growing problem in your department. That is a strong claim about something that sounds, on the face of it, like good news. Radiographer: It sounds like good news because of the cases where it is. Somebody comes in with a sprained back, we see a small kidney tumour, it is removed, and that person is alive because of an accident. Those cases are real and I never dismiss them. But they are the visible end of something much larger, and the larger part is a great many people carrying a piece of information that will never do them any good and may do them harm. Interviewer: How large is the problem? Radiographer: On modern CT of the abdomen we find something unexpected in a substantial minority of scans, and the proportion has climbed steadily, not because people have changed but because the scanners have. A machine that resolves a three-millimetre nodule will report three-millimetre nodules, and thirty years of lungs that were quietly full of them are now visible. We have not found new disease. We have found the same bodies at a higher resolution. Interviewer: And the harm is what, exactly? Radiographer: It comes in three shapes. The first is the further test, and everything that follows from it — the biopsy of a lesion that was never going to matter, and the small but real chance of a complication from that biopsy. The second is the money and the appointment, which are taken from somebody else who is waiting. The third is the one we measure least and I think matters most: the person now knows. Anxiety after an incidental finding is measurable months later, in people whose lesion has been reported as almost certainly benign, and no amount of \"almost certainly\" makes it go away, because the sentence they carry is not the probability, it is the fact that something was found. Interviewer: Should you not report what you see? Radiographer: Of course we report it. The question is not whether to say it, it is what to say after it. A report that reads \"indeterminate lesion, suggest further imaging\" transfers the whole problem to a general practitioner who did not ask for this scan and now cannot ignore the sentence. A report that says what this is, what the published follow-up guidance actually recommends for this size in this age group, and — where it is true — that no follow-up is required, ends the matter. Naming the endpoint is the useful part. Saying \"correlate clinically\" is not advice. It is a shrug in a formal register. Interviewer: Does the patient get told before the scan that this might happen? Radiographer: Almost never, and I think that is the real gap. We consent people for contrast reactions, which are rare, and we say nothing about the far commoner event of finding something we were not looking for. It need not be a lecture. One sentence when the scan is booked, saying that we sometimes see things unrelated to the reason for the scan, most of which turn out to be unimportant, changes how the news lands three weeks later. People manage news they were warned about far better than news that arrives from nowhere. Interviewer: Is there a risk that this argument is heard as a reason to scan less? Radiographer: There is, and I want to be careful, because that is not what I am saying. The scan that was indicated should happen, and happen quickly. My argument is about the scan that was ordered because it was easier than examining somebody, or because a form had a box on it, or because everyone felt something ought to be done. Those scans produce the same rate of incidental findings as the indicated ones, and none of the benefit, and they are the ones I would like us to think about at the point of request rather than at the point of report. Interviewer: And when a colleague asks you informally to \"just look at\" something? Radiographer: I say yes and then I insist on a request, which sounds bureaucratic and is not. An informal look has no record, so if I see something and mention it in a corridor, nobody owns the follow-up. The request form is not paperwork. It is the thing that makes somebody responsible for the answer. Interviewer: What would you change first? Radiographer: I would make the guidance available inside the reporting screen rather than in a document somebody has to go and find, because a recommendation that takes four minutes to look up gets replaced by a vague sentence at four in the afternoon. Put it where the report is written and the reports change within a month. That is not a training problem. It is a design problem, and design problems are the ones we can actually solve."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-9-presentation-what-handover-is-actually-for",
    "title": "Listening Part C · item 9 — PRESENTATION: what handover is actually for",
    "prompt": "You will hear part of a presentation on clinical handover. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "handover",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: \"The tool is not the problem\" rules out (B). · Q2: \"Attention is the scarce resource, not data.\" · Q3: \"Our tool had a box for observations and no box for doubt.\" · Q4: \"Which I now think was wrong... the problem was never that people spoke.\" · Q5: \"The rest are a written list with a named person to ask.\" · Q6: (A) is the number he calls always high and always meaningless.",
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Why does the speaker say structured handover tools disappoint?",
          "options": [
            {
              "id": "a",
              "text": "Because handover is misunderstood as passing on information."
            },
            {
              "id": "b",
              "text": "Because the tools are too complicated for daily use."
            },
            {
              "id": "c",
              "text": "Because staff have never been trained to use them properly."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q2",
          "stem": "What does the speaker say happens when more information is added?",
          "options": [
            {
              "id": "a",
              "text": "Handover takes longer but becomes more accurate."
            },
            {
              "id": "b",
              "text": "Less is actually handed over than before."
            },
            {
              "id": "c",
              "text": "Junior staff rely on the written list instead."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q3",
          "stem": "What was missing from the handovers his team recorded?",
          "options": [
            {
              "id": "a",
              "text": "The uncertainty that the departing staff felt."
            },
            {
              "id": "b",
              "text": "The details of each patient's current treatment."
            },
            {
              "id": "c",
              "text": "The name of the person to contact overnight."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q4",
          "stem": "What does the speaker now think about banning interruptions?",
          "options": [
            {
              "id": "a",
              "text": "It shortened handover without any loss of content."
            },
            {
              "id": "b",
              "text": "It was necessary but difficult to enforce in practice."
            },
            {
              "id": "c",
              "text": "It was the wrong target."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q5",
          "stem": "What is the speaker's approach to a large ward?",
          "options": [
            {
              "id": "a",
              "text": "Only the patients who matter that night."
            },
            {
              "id": "b",
              "text": "Handover is divided between two shorter meetings."
            },
            {
              "id": "c",
              "text": "Each nurse hands over her own patients separately."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q6",
          "stem": "What does the speaker say should be measured?",
          "options": [
            {
              "id": "a",
              "text": "How consistently the handover tool is completed."
            },
            {
              "id": "b",
              "text": "What the receiving clinician takes away."
            },
            {
              "id": "c",
              "text": "How long the handover meeting lasts."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Presenter: Almost every organisation represented in this room has adopted a structured handover tool in the last ten years, and almost every one of them has been disappointed. I want to talk about why, because the disappointment is instructive and the tool is not the problem. Start with what handover is. We describe it as passing on information, and that description is what does the damage, because if handover is a transfer of information then the obvious improvement is to transfer more of it. That is how a five-minute handover becomes a twenty-five-minute recitation of every patient's potassium, delivered to a room of people whose attention left at patient four. Adding information to a handover reduces what is actually handed over. Attention is the scarce resource, not data. Handover is a transfer of responsibility. The question it must answer is not \"what do you know about these patients\" but \"what are you now responsible for\". Those are different lists, and the second one is short. A patient who is stable and whose plan is written does not need a paragraph; they need a sentence. The patient who needs four minutes is the one where somebody is uncertain, and uncertainty is exactly what our formats are worst at carrying. Which brings me to the finding that changed how I teach this. We recorded handovers and then, an hour later, asked the receiving doctor what they were worried about. The worries were nearly always accurate — and nearly always absent from the handover itself. What people said in the room was observable fact. What they carried away was a feeling that something about bed nine was not right, and that feeling was correct far more often than chance, and there was nowhere in the structure to put it. Our tool had a box for observations and no box for doubt. So the first thing we changed was to add one question at the end of every patient, asked out loud: what would worry you about this one? Not \"any concerns\", which produces \"no\", but that specific question, which produces an answer. It added about forty seconds per handover and it is the single most useful thing we have done. The second change was about interruption, and here I have to admit an error of my own. We banned interruptions during handover, which was popular with everybody handing over and which I now think was wrong. Some interruptions are the ward telling you something you need. What we should have banned, and eventually did, was the handover being conducted while people did other things — checking a phone, writing a list for later, standing in a doorway. The problem was never that people spoke. It was that nobody was listening with their whole attention. Third, and this is the least popular, we stopped doing handover for every patient. A ward of twenty-eight cannot be handed over meaningfully in fifteen minutes and pretending otherwise produces a ritual. We hand over the six that matter tonight, properly, and the rest are a written list with a named person to ask. Colleagues hated this for about a month, and then somebody pointed out that we had simply made explicit what the twenty-five-minute version was doing implicitly and badly. There is one more thing I want to say about who is in the room, because it is where most of our remaining incidents come from. For years our medical handover and our nursing handover happened eleven minutes apart, in two rooms, about the same twenty-eight people, and each was confident it had handed over. The patient who deteriorates at four in the morning is very often a patient about whom one profession knew something the other did not. We now hand over the six that matter together, once, and the objection I expected — that it would take longer — turned out to be wrong, because most of the length in either meeting was one profession telling itself things it already knew. I should also say what we do about the person who arrives late. They used to be caught up individually afterwards, which meant the handover happened twice and the second version was worse. Now they read the written list and ask, and the difference sounds trivial until you notice that it moves the burden from the person who is leaving to the person who is staying, which is the right way round. Let me close with the measure. We did not measure whether the tool was used; that number is always high and always meaningless, because a form gets completed whether or not anybody thinks. We measured something harder: whether the person receiving handover could, an hour later, say what they were most worried about and why. That went from about a third to about four fifths, and the incidents that happen overnight fell with it. If you take one thing from this, take that: measure what the receiver carries, not what the giver said."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-10-interview-knowing-the-woman",
    "title": "Listening Part C · item 10 — INTERVIEW: knowing the woman",
    "prompt": "You will hear an interview with a consultant midwife about continuity of care. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "maternity",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: \"It is not a policy, it is a rota.\" · Q2: \"She can spend labour labouring instead of explaining.\" · Q3: \"Her observations were entirely normal, because she was not herself.\" · Q4: \"Safeguarding is the obvious example.\" · Q5: \"Continuity is offered, not imposed.\" · Q6: \"Not the same as the ones who ask most confidently\", which rules out (A).",
    "payload": {
      "speakers": [
        {
          "role": "Interviewer",
          "voice": "onyx"
        },
        {
          "role": "Midwife",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Why does the midwife say continuity is hard to deliver?",
          "options": [
            {
              "id": "a",
              "text": "Because it depends on the working pattern."
            },
            {
              "id": "b",
              "text": "Because it is opposed by many senior clinicians."
            },
            {
              "id": "c",
              "text": "Because women's preferences change during pregnancy."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q2",
          "stem": "What does she identify as the first benefit for the woman?",
          "options": [
            {
              "id": "a",
              "text": "A shorter and less complicated labour."
            },
            {
              "id": "b",
              "text": "Better access to specialist opinion when needed."
            },
            {
              "id": "c",
              "text": "Not having to repeat her story."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q3",
          "stem": "What does she say knowing a woman allows her to do?",
          "options": [
            {
              "id": "a",
              "text": "Notice a change that measurements miss."
            },
            {
              "id": "b",
              "text": "Predict when labour is likely to begin."
            },
            {
              "id": "c",
              "text": "Persuade her to accept recommended care."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q4",
          "stem": "What risk does she acknowledge in a close relationship?",
          "options": [
            {
              "id": "a",
              "text": "That the midwife will be contacted outside working hours."
            },
            {
              "id": "b",
              "text": "That a difficult subject may be raised too slowly."
            },
            {
              "id": "c",
              "text": "That the woman becomes dependent on one person."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q5",
          "stem": "What does she say should be offered to women who prefer not to have one midwife?",
          "options": [
            {
              "id": "a",
              "text": "The choice to decline it."
            },
            {
              "id": "b",
              "text": "A named midwife for antenatal care only."
            },
            {
              "id": "c",
              "text": "An explanation of the benefits they would lose."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q6",
          "stem": "Who does she say should be given continuity first?",
          "options": [
            {
              "id": "a",
              "text": "Women who request it during the booking appointment."
            },
            {
              "id": "b",
              "text": "Women expecting their first baby."
            },
            {
              "id": "c",
              "text": "Women the service currently serves least well."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Interviewer: Continuity of carer has been described as the most evidenced change in maternity care and also one of the hardest to deliver. Why is it so difficult? Midwife: Because it is not a policy, it is a rota. Everybody agrees with continuity in a meeting. The difficulty appears at half past two on a Wednesday when the woman you have looked after for eight months goes into labour and you are already at the end of a long day. Continuity means somebody's working life is arranged around unpredictable events, and if you design it badly you get continuity for the women and burnout for the midwives, and then you get neither, because the midwives leave. Interviewer: What does it actually change for the woman? Midwife: The thing I would point to first is not an outcome on a graph. It is that she does not have to tell her story again. If you have said out loud, at booking, something difficult — that you lost a baby before, that you are frightened of needles because of what happened when you were nineteen, that the man in the waiting room is not safe — then telling it to a stranger in labour is a second injury. Continuity means it is already known, and she can spend labour labouring instead of explaining. Interviewer: And the clinical outcomes? Midwife: They are real and they are, I think, downstream of that. When you know a woman, you notice change, which is the whole of clinical judgement in one sentence. I have rung an obstetrician about someone whose observations were entirely normal, because she was not herself, and I was right often enough that I no longer apologise when I do it. A midwife meeting her for the first time cannot do that, however good she is. She has nothing to compare with. Interviewer: Is there a risk in that closeness? Midwife: Yes, and I would be a poor advocate if I pretended otherwise. You can lose your perspective on somebody you are fond of. You can be slower to raise something difficult because you value the relationship — safeguarding is the obvious example, and it is the one where I have seen continuity work badly. So the teams that do this well have something formal that opens the difficult question: a supervision session where you talk about the women you are worried about, and somebody outside the relationship asks you what you might not be seeing. Closeness needs a colleague, not a policy document. Interviewer: What about women who do not want the same midwife? Midwife: Then they should not have to have one, and that has to be said more loudly than it usually is. Continuity is offered, not imposed. Some women want the anonymity of a service; some do not want the person who knows about the difficult year to be the person at the birth. A model that cannot accommodate that is not woman-centred, whatever it calls itself. Interviewer: How do you protect the midwives themselves? Midwife: By being honest that this only works if the team is small enough to be real. Four to six midwives who genuinely cover for one another, who know each other's women, and who can say \"I am not doing tonight\" without it becoming a crisis. Beyond about eight, continuity becomes a name on a form, because no one can hold that many relationships. And the rota has to protect sleep as fiercely as it protects continuity. A midwife who has been up all night is not a safe pair of hands the following afternoon, however much she cares about the woman on her list, and services that pretend otherwise are spending goodwill they cannot replace. Interviewer: Does the model cost more? Midwife: Not in the way people assume, and I am careful here because the economics are often oversold. The staffing number is broadly similar; what changes is how the hours fall. The savings, if they come, come from fewer admissions in pregnancy, less intervention in labour and shorter stays afterwards, and those are real but they arrive later and in somebody else's budget, which is precisely why a finance director can look at the same evidence I do and reach a different conclusion. Interviewer: If a service can only do this for some women, who should it be? Midwife: The ones for whom the system currently works least well, which is not the same as the ones who ask most confidently. If you offer continuity by request, you will deliver it to articulate women with flexible jobs, and the gap you were trying to close will widen. The women who benefit most are the ones who are hardest to reach, who miss appointments, who do not ring, whose English is not first, who have every reason not to trust a service. Continuity is the only intervention I know that works precisely by being difficult to opt out of by accident, and that is exactly why it should start where the need is greatest rather than where the demand is loudest."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-11-presentation-the-consultation-that-never-happened",
    "title": "Listening Part C · item 11 — PRESENTATION: the consultation that never happened",
    "prompt": "You will hear part of a presentation on the use of interpreters in clinical care. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "interpreters",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: (B) is contradicted — nobody writes it down. · Q2: \"That flatness is the fingerprint.\" · Q3: \"None of that is dishonesty\", which rules out (A). · Q4: \"We have chosen who is allowed to be in the room.\" · Q5: (C) is the opposite — she concedes it takes longer. · Q6: \"'Do you understand' has one answer in every language.\"",
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker say about language in serious incidents?",
          "options": [
            {
              "id": "a",
              "text": "It appears more often than the group's size predicts."
            },
            {
              "id": "b",
              "text": "It is recorded accurately in most incident reports."
            },
            {
              "id": "c",
              "text": "It is most often a problem in emergency departments."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q2",
          "stem": "What does the speaker say is characteristic of these consultations in the notes?",
          "options": [
            {
              "id": "a",
              "text": "They contain nothing the clinician did not expect."
            },
            {
              "id": "b",
              "text": "They are noticeably shorter than other consultations."
            },
            {
              "id": "c",
              "text": "They frequently omit an examination of the patient altogether."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q3",
          "stem": "What does she say about a family member who translates?",
          "options": [
            {
              "id": "a",
              "text": "He deliberately withholds information from the clinician."
            },
            {
              "id": "b",
              "text": "He is doing several things at once, invisibly."
            },
            {
              "id": "c",
              "text": "He is usually unable to translate medical terms."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q4",
          "stem": "What does she say is decided when a relative is used?",
          "options": [
            {
              "id": "a",
              "text": "Who else is permitted to be present."
            },
            {
              "id": "b",
              "text": "How long the appointment will need to take."
            },
            {
              "id": "c",
              "text": "Which language the consultation uses."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q5",
          "stem": "What is the speaker's argument about the time an interpreter takes?",
          "options": [
            {
              "id": "a",
              "text": "It is recovered later in avoided harm."
            },
            {
              "id": "b",
              "text": "It can be reduced by booking telephone interpreters."
            },
            {
              "id": "c",
              "text": "It is shorter than clinicians generally assume."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q6",
          "stem": "How does she suggest understanding is checked?",
          "options": [
            {
              "id": "a",
              "text": "By asking the interpreter to confirm that she understood."
            },
            {
              "id": "b",
              "text": "By asking whether the patient has understood."
            },
            {
              "id": "c",
              "text": "By asking the patient to state the plan."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Presenter: I want to begin with a number that I think ought to be better known. When we reviewed serious incidents in our trust over three years and asked a simple question — was language a factor — the answer was yes in a proportion far higher than the proportion of our patients who need an interpreter. Language is not a minor administrative inconvenience at the edge of care. It is a patient safety issue with its own signature, it is measurable, and it hides very effectively, because nobody writes \"we did not understand each other\" in an incident form. Let me describe the signature, because once you have seen it you find it everywhere. The consultation appears in the notes as normal. There is a history, an examination, a plan. What is missing is anything the patient said that the clinician did not expect. Read a hundred consultations conducted through a relative and you will notice that the patients never say anything surprising, never digress, never mention the thing that turns out to matter. That flatness is the fingerprint. A real consultation contains something the doctor was not looking for. Now, the relative. I want to be careful here, because the family are not villains and it is important that we do not talk about them as though they are. A son who translates for his mother is trying to help, and he is also doing three things at once that nobody could do well. He is hearing the news himself, often for the first time, before he speaks it. He is deciding, second by second, how much of it his mother can bear. And he is editing her answers in the direction of not worrying the doctor, because that is what a devoted child does. None of that is dishonesty. All of it is invisible to us. There is also the question we forget to ask, which is what the patient wants. A woman may not wish to discuss incontinence, or a pregnancy, or the reason for a bruise, in front of her adult son. She has no way to say so, because the person she would have to say it to is the person who is translating. When we use a family member we have not only chosen a method of translation, we have chosen who is allowed to be in the room, and we have done it without asking her. I will say something briefly about children, and I will be blunt. A child should not interpret in a clinical setting. Not for convenience, not for a quick question, not because it is only the appointment time. The reasons are obvious when stated and are routinely overridden when the corridor is busy. What about the practicalities, because I know that is where the resistance lives. Yes, a professional interpreter takes longer to arrange, and yes, the appointment itself takes longer, and the honest comparison is not with a fifteen-minute consultation. It is with the second consultation, the missed diagnosis, the medicine taken twice a day instead of twice a week, and the admission that follows. On that comparison the interpreted consultation is the cheap option, and I have never seen a service that measured it and then went back. One objection I hear often enough that it deserves an answer: what about the patient who says she does not want an interpreter, that her daughter is fine. That is a real preference and it should be respected — but ask her once, alone, with a telephone interpreter, whether that is what she wants. Almost every time I have seen that done properly, the answer has been yes and the consultation proceeded with the daughter, and the small number of times the answer was no have been among the most important conversations I have ever been part of. The point is not to overrule her. It is that she has never been asked in a room where she could answer freely. A few things that make the interpreted consultation work, and they are learnable. Speak to the patient, not to the interpreter, and use the second person — \"how long have you had the pain\", not \"ask her how long\". Short units of speech, and then stop, because everything you say in a paragraph arrives as a summary. Brief the interpreter for thirty seconds beforehand about what the conversation is going to contain, particularly if it contains bad news; they are a colleague walking into a room, not a device. And check understanding by asking the patient to tell you the plan back, not by asking whether she has understood, because \"do you understand\" has one answer in every language in the world."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-12-interview-what-frailty-looks-like-in-a-house",
    "title": "Listening Part C · item 12 — INTERVIEW: what frailty looks like in a house",
    "prompt": "You will hear an interview with a community physiotherapist. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "frailty",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: \"Furniture is a record of adaptation.\" · Q2: \"Comparison is where their value is.\" (C) overstates — she still uses them. · Q3: The step is second on her list; medication is not mentioned. · Q4: \"An aid that arrives as an instruction lives in the cupboard.\" · Q5: \"Nobody over eighty has ever been persuaded by the word exercise.\" · Q6: \"Ten days in a hospital bed can undo a year.\"",
    "payload": {
      "speakers": [
        {
          "role": "Interviewer",
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
          "stem": "Why does the physiotherapist look at the furniture in a house?",
          "options": [
            {
              "id": "a",
              "text": "It shows how the person has adapted over time."
            },
            {
              "id": "b",
              "text": "It reveals whether the family are managing the cleaning."
            },
            {
              "id": "c",
              "text": "It indicates which equipment has already been supplied."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q2",
          "stem": "What does she say about standard walking tests?",
          "options": [
            {
              "id": "a",
              "text": "They are unreliable when carried out at home."
            },
            {
              "id": "b",
              "text": "They are useful mainly for comparison over time."
            },
            {
              "id": "c",
              "text": "They should be replaced by observation in the home."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q3",
          "stem": "What does she say is the commonest cause of falls in her caseload?",
          "options": [
            {
              "id": "a",
              "text": "An unfamiliar step outside the house."
            },
            {
              "id": "b",
              "text": "Medication taken late in the evening."
            },
            {
              "id": "c",
              "text": "Getting up during the night."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q4",
          "stem": "Why does she offer a choice of slippers?",
          "options": [
            {
              "id": "a",
              "text": "Because a chosen aid gets used."
            },
            {
              "id": "b",
              "text": "Because the correct size is difficult to judge."
            },
            {
              "id": "c",
              "text": "Because the service cannot supply a single type."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q5",
          "stem": "How does she approach a patient who refuses exercise?",
          "options": [
            {
              "id": "a",
              "text": "She arranges a group session instead."
            },
            {
              "id": "b",
              "text": "She works towards what the patient wants."
            },
            {
              "id": "c",
              "text": "She explains the risks of losing strength."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q6",
          "stem": "What does she want other professions to understand?",
          "options": [
            {
              "id": "a",
              "text": "That strength is lost very quickly in hospital."
            },
            {
              "id": "b",
              "text": "That her service is unable to accept urgent referrals."
            },
            {
              "id": "c",
              "text": "That equipment should be ordered before discharge."
            }
          ],
          "answer": "a"
        }
      ],
      "audioScript": "Interviewer: You have said that you can tell more from a person's hallway than from most of the assessments you were trained in. Is that not a little romantic? Physiotherapist: It would be if I meant intuition, and I do not. I mean evidence that is sitting in plain view. A chair with its arms worn shiny at the front edge tells me how she gets up. A kettle moved to the front of the worktop tells me she cannot reach across. A commode in the front room tells me the stairs stopped being possible some time ago and nobody has recorded it. Furniture is a record of adaptation, and unlike an assessment it was not produced for my benefit. Interviewer: Do the standard tests not tell you the same thing? Physiotherapist: They tell me something narrower, and they tell it in a corridor. Somebody can pass a timed walking test in a clinic with a smooth floor and good light and no cat, and be unable to cross her own kitchen at night. I use the tests, because they give me a number I can repeat in six weeks and compare, and comparison is where their value is. But a number is not a life, and the thing that puts a person on the floor is almost never the thing the test measured. Interviewer: What does put them on the floor? Physiotherapist: In my caseload, in order: getting up in the night, which combines darkness, urgency and a blood pressure that has not caught up; the small step nobody thinks of as a step, usually into a conservatory or out to a bin; and shoes. Slippers, mostly. Backless slippers have put more people in my clinic than any diagnosis. Interviewer: So do you take the slippers away? Physiotherapist: No, and this is the lesson that took me longest. If I remove the thing somebody relies on and do not replace it with something they will actually accept, they simply do without both. I bring two pairs of proper slippers with backs, in the size I checked on the last visit, and I let her choose. The choice is not a courtesy. An aid that arrives as an instruction lives in the cupboard; an aid somebody chose lives on the feet. Interviewer: How do you handle someone who says they do not want to exercise? Physiotherapist: I stop using the word. Nobody over eighty in my experience has ever been persuaded by the word exercise, and nearly everybody is interested in getting to the toilet in time, or being able to carry a cup of tea without spilling it, or hanging out washing again. So we work on that. It happens to be the same strength work, done in sets of a few, several times a day, attached to something she already does — five sit-to-stands before the kettle boils. Attaching the work to an existing habit is worth more than any leaflet, because the habit does the remembering. Interviewer: How do you decide when someone needs equipment rather than practice? Physiotherapist: By asking what is likely to happen next. If the loss is recent and there is a reason for it — a chest infection, a fortnight in bed, a change of tablets — then the answer is almost always practice, because the strength is recoverable and a rail installed today becomes a habit by Friday. If the loss has been coming for two years and is going to keep coming, then the equipment is not a defeat, it is a sensible piece of engineering, and delaying it out of some idea of independence just means she does the same task badly for another six months. Interviewer: Do families ever make it harder? Physiotherapist: Families make it possible, mostly. Where it goes wrong is kindness — a son who carries everything, opens every door, brings every cup of tea. Within a month his mother cannot do those things, and it was not the illness that took them. So I give the family a job that is the opposite of helping: your job is to stand near her while she does it herself, and to be slower than you want to be. Interviewer: Is there anything you wish other professions understood about your part of this? Physiotherapist: That deconditioning is fast and quiet. Ten days in a hospital bed can undo a year of what I do, and it does not announce itself — nobody writes \"lost the ability to stand\" in a discharge summary. So when a ward tells me a patient is medically fit, I want to know what she has been allowed to do since Tuesday, not only what her bloods are. Every day that somebody is helped into a chair rather than helped to walk to it is a day spent on the wrong side of a ledger, and it is my patients who pay it back."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-13-presentation-pain-in-people-who-cannot-tell-you",
    "title": "Listening Part C · item 13 — PRESENTATION: pain in people who cannot tell you",
    "prompt": "You will hear part of a presentation on assessing pain in patients who cannot report it. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "pain-assessment",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: \"After the same operations.\" · Q2: \"Not as a wince, most of the time. It presents as change.\" · Q3: \"Not which drug\", which rules out (C). · Q4: (A) is contradicted — \"they are validated\". · Q5: \"We ask both far too late.\" (A) overstates — he calls it a comparison no tool can make, not a more accurate score. · Q6: (A) inverts him — regularly, not as required.",
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "onyx"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker say his audits show?",
          "options": [
            {
              "id": "a",
              "text": "Pain is assessed too infrequently in intensive care units."
            },
            {
              "id": "b",
              "text": "Patients who cannot speak receive less pain relief."
            },
            {
              "id": "c",
              "text": "Observational tools are used incorrectly on many wards."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q2",
          "stem": "How does he say pain usually presents in these patients?",
          "options": [
            {
              "id": "a",
              "text": "As facial expressions that staff learn to recognise over time."
            },
            {
              "id": "b",
              "text": "As physiological signs recorded in the observations."
            },
            {
              "id": "c",
              "text": "As a change in what the person usually does."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q3",
          "stem": "What does he want asked before prescribing for agitation?",
          "options": [
            {
              "id": "a",
              "text": "Whether the family agree with the prescription."
            },
            {
              "id": "b",
              "text": "Whether pain has been ruled out."
            },
            {
              "id": "c",
              "text": "Which drug carries the fewest side effects."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q4",
          "stem": "What is his caveat about observational pain tools?",
          "options": [
            {
              "id": "a",
              "text": "They have not been validated in patients with dementia."
            },
            {
              "id": "b",
              "text": "They take too long to complete on a busy ward."
            },
            {
              "id": "c",
              "text": "A high score shows distress rather than pain."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q5",
          "stem": "What does he say about the family's account?",
          "options": [
            {
              "id": "a",
              "text": "It is more accurate than the assessment tools."
            },
            {
              "id": "b",
              "text": "It is sought later than it should be."
            },
            {
              "id": "c",
              "text": "It is unreliable when the family are distressed."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q6",
          "stem": "What does he say an analgesic trial must include?",
          "options": [
            {
              "id": "a",
              "text": "A dose given only when the patient appears distressed."
            },
            {
              "id": "b",
              "text": "An opioid rather than a simple analgesic."
            },
            {
              "id": "c",
              "text": "A stated endpoint and a named observer."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Presenter: Pain is what the patient says it is. That definition has done a great deal of good and it contains a trap, and the trap is the subject of this talk: what happens to the patient who cannot say anything. Consider who that is on any given day in a hospital. The woman with advanced dementia. The man intubated in intensive care. The adult with a profound learning disability. The person three days after a stroke that took his speech. The very old and very deaf gentleman whom nobody has thought to give his hearing aid. On our audits, these groups receive markedly less analgesia than patients with the same conditions who can speak, and after the same operations. That is the finding I would like to sit with for a moment, because there is no version of it that is comfortable. Two people have the same fractured hip. One of them can ask. She is treated. The other cannot, and is described as settled. So how does pain present when it cannot be spoken? Not as a wince, most of the time. It presents as change. A man who has always let you wash him now pushes your hand away. A woman who was calm at four o'clock is calling out at six, every evening, and it is written down as sundowning. Someone stops eating. Someone will not lie on that side. Someone's heart rate is up and nobody can say why. Almost all of these get interpreted as behaviour, and once something is called behaviour it acquires a management plan rather than a diagnosis. I would like to challenge one habit in particular. When an agitated patient with dementia is prescribed something, the question I want asked first is not which drug. It is: have we excluded pain, and how? Because in the series I trust most, a substantial proportion of agitation in advanced dementia responds to regular simple analgesia, and the people it works for are indistinguishable beforehand from the people it does not work for. Which means the only way to find them is to try. Now, observational tools. They exist, they are validated, and I recommend them, with one strong caveat that is routinely ignored. These tools do not measure pain. They measure distress, and distress has other causes: a full bladder, fear, constipation, being cold, being alone. So a high score is not a diagnosis of pain. It is an instruction to look for a cause, and pain is one item on that list. The harm from misunderstanding this is real: a service that treats every high score with an opioid will sedate a proportion of people whose actual problem was that they needed the lavatory. The most useful thing in the whole assessment is not a tool at all. It is the person who knows them. A daughter who says \"he does that when he is hurting\" is offering a comparison that no instrument can make, and in our experience she is right much more often than she is wrong. The same is true of a care assistant who has washed somebody every morning for two years. We ask both far too late. Before I come to treatment, a word about the mouth, because it is the single commonest source of pain that we miss entirely in people who cannot report it. A broken tooth, an ulcer under a denture, a fungal infection on a tongue nobody has looked at for a fortnight — these are not rare, they hurt constantly, they make eating impossible, and they are invisible unless somebody deliberately looks with a light. In one review of care home residents with unexplained agitation, oral disease was found in a striking proportion of those examined properly, and almost none of it had been recorded before the examination. If you take one practical habit from this talk, make it that one: look in the mouth, with a torch, before you conclude that a person is simply distressed. Finally, the analgesic trial, because this is where the practical decision usually lands. If you suspect pain and cannot confirm it, treat and observe — regularly, not as required, because a patient who cannot ask cannot ask for a dose. Choose a small dose of something simple, set a defined period, and — this is the step that is nearly always missed — decide in advance what you expect to change and who will look. If nothing changes, stop it. An analgesic trial with no endpoint becomes a repeat prescription, and the ward has learned nothing. And write in the notes what you were treating and what you expected, because the next clinician will otherwise see only a drug on a chart with no reason attached, and will either continue it forever or stop it without knowing what it was for. Both of those are worse than either decision made deliberately."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-14-interview-a-dietitian-on-a-child-who-is-not-growing",
    "title": "Listening Part C · item 14 — INTERVIEW: a dietitian on a child who is not growing",
    "prompt": "You will hear an interview with a paediatric dietitian. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "paediatric-nutrition",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: \"Shame is the thing I have to deal with before anything else.\" · Q2: \"The parts people leave out of a diary.\" · Q3: \"Settling onto his own line.\" · Q4: \"Almost always the structure rather than the food.\" · Q5: \"I am asking you to stop trying to make him eat.\" · Q6: \"When the picture does not fit the story.\"",
    "payload": {
      "speakers": [
        {
          "role": "Interviewer",
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
          "stem": "What does the dietitian address before anything else?",
          "options": [
            {
              "id": "a",
              "text": "The accuracy of the measurements taken."
            },
            {
              "id": "b",
              "text": "The parents' concern about being blamed."
            },
            {
              "id": "c",
              "text": "The family's understanding of the growth chart."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q2",
          "stem": "Why does he ask about the whole day rather than the diet?",
          "options": [
            {
              "id": "a",
              "text": "Because it reveals what a food diary leaves out."
            },
            {
              "id": "b",
              "text": "Because parents forget individual meals."
            },
            {
              "id": "c",
              "text": "Because the timing of meals is what matters most."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q3",
          "stem": "What does he say is the commonest picture in his clinic?",
          "options": [
            {
              "id": "a",
              "text": "A child whose intake is genuinely inadequate."
            },
            {
              "id": "b",
              "text": "A child whose mealtimes have become a struggle."
            },
            {
              "id": "c",
              "text": "A healthy child whose chart is being misread."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q4",
          "stem": "What does he usually change first?",
          "options": [
            {
              "id": "a",
              "text": "The pattern of meals and drinks."
            },
            {
              "id": "b",
              "text": "The energy content of the food."
            },
            {
              "id": "c",
              "text": "The place where the child is fed."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q5",
          "stem": "What does he ask families to stop doing?",
          "options": [
            {
              "id": "a",
              "text": "Offering food between the planned mealtimes."
            },
            {
              "id": "b",
              "text": "Weighing the child at home between appointments."
            },
            {
              "id": "c",
              "text": "Pressing the child to eat."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q6",
          "stem": "When does he refer the child back to the doctor?",
          "options": [
            {
              "id": "a",
              "text": "When the parents are unable to follow the plan."
            },
            {
              "id": "b",
              "text": "When the pattern does not match the account given."
            },
            {
              "id": "c",
              "text": "When the child has not gained weight in three weeks."
            }
          ],
          "answer": "b"
        }
      ],
      "audioScript": "Interviewer: Parents arriving in your clinic must be frightened. Dietitian: Frightened, and quite often ashamed, and the shame is the thing I have to deal with before anything else, because a parent who believes I have come to judge their feeding will not tell me what actually happens at teatime. So the first thing I say, before I look at a chart, is that most children who are referred to me are not being neglected and most parents in this position have been trying extremely hard for months. That is true, and saying it out loud changes the next forty minutes. Interviewer: How do you work out what is going on? Dietitian: By asking about the day rather than about the diet. Not \"what does he eat\", which produces a list that no child has ever actually eaten, but \"tell me about yesterday from waking up\". That gets me the grazing, the six cups of milk, the meal that lasted fifty minutes and ended in tears, the biscuit given in the car at half past four because the parent was desperate. None of that appears in a food diary, because the parts people leave out of a diary are the parts they feel bad about. Interviewer: And is it usually about the amount of food? Dietitian: Far less often than you would think. In an ordinary clinic list, the commonest picture is a well child whose growth is being read wrongly — a baby who was born large and is settling onto his own line, which is normal and looks alarming on a chart. The second commonest is a child who is drinking his calories: enough milk to take the edge off every appetite, so he is never hungry at the table and everyone concludes he does not like food. The third is a feeding relationship that has gone wrong, where mealtimes have become a contest, and the way to lose that contest is to keep pushing. Interviewer: So what do you change first? Dietitian: Almost always the structure rather than the food. Meals and snacks at predictable times, water between them rather than milk or juice, everybody sitting down together where that is possible, and a firm limit on how long a meal lasts — twenty to thirty minutes, and then it ends without comment. Parents expect me to hand them a list of high-calorie foods, and sometimes I do, but a fortified milkshake given to a child who is grazing all day is money poured into an existing problem. Interviewer: What about pressure at the table? Dietitian: It is the one thing I ask families to give up, and it is the hardest, because it is counter-intuitive: your child is not growing and I am asking you to stop trying to make him eat. The division of responsibility is the sentence that helps most — the parent decides what is offered, when and where; the child decides whether and how much. When a parent can hold to that for three weeks the change is often remarkable, and it costs nothing. Interviewer: How long does that take to work? Dietitian: Longer than parents expect and shorter than they fear. The mealtime usually settles within two or three weeks, and I tell families to look for that first — a meal that ends calmly — and not to look at the scales, because a child who is eating better still takes months to move a line on a chart. If I let the family measure success by weight, they will conclude in a fortnight that it has failed, and go back to pushing. Interviewer: Do you weigh the child at every visit? Dietitian: Not always, and that surprises people, given that the referral usually arrived because of a weight. If weighing has become the thing the whole household revolves around, taking it out of the room for a month can be more therapeutic than anything I say. I still measure, but I decide when, and I look at the line over months rather than the number on the day. A single weight tells me almost nothing; three tell me a direction, and the direction is the only thing either of us can actually act on. Interviewer: When do you worry that it is something else? Dietitian: When the picture does not fit the story. A child who is losing weight rather than slowing, one who is vomiting or has persistent diarrhoea, one whose height is falling away as well as his weight, or one whose development has slowed. Those go back to the paediatrician quickly, and I would rather refer ten children and be wrong nine times than reassure once and be wrong. Feeding advice is not a substitute for a diagnosis, and my most useful skill is knowing which of the two is in front of me."
    }
  },
  {
    "taskType": "LISTENING_PART_C",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-c-item-15-presentation-the-ordinary-economics-of-a-wound",
    "title": "Listening Part C · item 15 — PRESENTATION: the ordinary economics of a wound",
    "prompt": "You will hear part of a presentation on the organisation of wound care services. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "wound-care",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Q1: \"Nobody had decided it.\" · Q2: \"Every change cools the wound.\" · Q3: \"The entire pathway waits on one measurement.\" · Q4: \"Several times over within the year.\" · Q5: \"All three are solvable.\" · Q6: \"Memory is not evidence.\"",
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "alloy"
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What determines the number of visits, according to the audit?",
          "options": [
            {
              "id": "a",
              "text": "The condition of the wound at each review."
            },
            {
              "id": "b",
              "text": "The distance the nursing team must travel."
            },
            {
              "id": "c",
              "text": "The frequency inherited from the previous week."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q2",
          "stem": "What does she say about changing dressings less often?",
          "options": [
            {
              "id": "a",
              "text": "It saves money but slightly delays healing."
            },
            {
              "id": "b",
              "text": "It heals most wounds more quickly."
            },
            {
              "id": "c",
              "text": "It is appropriate only for smaller wounds."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q3",
          "stem": "What does she say is underfunded?",
          "options": [
            {
              "id": "a",
              "text": "The dressings that the service is able to supply."
            },
            {
              "id": "b",
              "text": "The training of the nurses who visit patients."
            },
            {
              "id": "c",
              "text": "The assessment that must come first."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q4",
          "stem": "What happened when the assessment was done earlier?",
          "options": [
            {
              "id": "a",
              "text": "It repaid its cost within the year."
            },
            {
              "id": "b",
              "text": "It reduced the number of referrals received."
            },
            {
              "id": "c",
              "text": "It required additional nursing staff to deliver."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q5",
          "stem": "What does she say about patients who stop using compression?",
          "options": [
            {
              "id": "a",
              "text": "Their reasons are practical and can be solved."
            },
            {
              "id": "b",
              "text": "They usually accept it if it is explained again."
            },
            {
              "id": "c",
              "text": "They have often been given the wrong size."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q6",
          "stem": "Why does she recommend photographing the wound?",
          "options": [
            {
              "id": "a",
              "text": "Because it is required for the patient's records."
            },
            {
              "id": "b",
              "text": "Because it allows a distant specialist to advise."
            },
            {
              "id": "c",
              "text": "Because gradual change is invisible week by week."
            }
          ],
          "answer": "c"
        }
      ],
      "audioScript": "Presenter: I am going to make an argument about money, and I want to say at the start why a clinician should care about it. Not because budgets are interesting, but because in this particular field the cheapest care and the best care are the same care, and we are currently delivering neither. Here is the shape of the problem. Most of what a service spends on a chronic wound is not spent on the dressing. It is spent on visits — a nurse's time, a car, a journey — and the number of visits is determined mostly by how often the dressing is changed, which is determined mostly by habit. When we audited our own practice, the commonest reason a wound was being dressed three times a week was that it had been dressed three times a week the previous week. Nobody had decided it. It was inherited. Now, the counter-intuitive part, which is well supported and still widely disbelieved: for most wounds, changing the dressing less often heals them faster. Every change cools the wound, disturbs the surface, and removes the environment that healing needs. So the service that visits twice a week rather than four times is not cutting corners. In most cases it is providing better care and spending half as much doing it, and those two facts are the same fact. Where the money actually should go is the part we underfund. Assessment. A leg ulcer that has not been assessed for its blood supply cannot be safely compressed, and compression is the treatment that heals it. So the entire pathway waits on one measurement, and in most services that measurement is rationed because it takes forty minutes and a trained person. We were routinely spending eight months of visits on wounds that were waiting for a forty-minute test. When we moved the test to within a week of referral, healing rates improved, and the visit numbers fell so far that the test paid for itself several times over within the year. I want to add something about what we call non-concordance, because this is where services waste both money and goodwill. When somebody does not tolerate compression, we tend to write that they declined it. In my experience, when you sit down and ask, one of three things is true. It hurt, and nobody told them it would hurt for the first few nights and then settle. They could not get a shoe on, and could not get out of the house, and chose their life over their leg, which is not irrational. Or nobody could take it off and put it back on, so the first practical difficulty ended it. All three are solvable, and none of them is a patient who does not care about their own leg. I should deal with the objection I always get at this point, which is that patients like being visited, and that reducing visits takes something away from people who are often isolated. I take that seriously and I do not think it is an argument against what I have described. It is an argument for being honest about which visit is which. If a person is lonely, a nurse changing a dressing that did not need changing is an expensive and undignified way to provide company, and it is company that arrives only for as long as the wound does. The wound heals, the visits stop, and the loneliness was never addressed by anybody. Name the two needs separately and you can meet both. Blend them and you will meet neither, while telling yourself a comfortable story about holistic care. Two last points. First, the photograph. A wound photographed at each review, to a standard, with a measure in the frame, settles arguments that otherwise consume entire team meetings — is it better than last month, and by how much. Memory is not evidence, and a wound that is slowly deteriorating looks identical each week to the person who sees it each week. One more practical thing while I have you: the dressing cupboard. Most services stock far more products than any clinician can hold in their head, which sounds generous and behaves as a hazard, because choice without a rule produces variation rather than judgement. A short formulary — a handful of products with a written indication for each — improves outcomes not because those products are better but because everybody uses the same ones and can therefore learn from what happens. Second, and this is the argument I would leave you with: a chronic wound is not a nursing task, it is a chronic disease with an acute-looking surface. We manage it as though the surface were the disease, and we organise our services around visiting the surface. The people who do best are the ones whose service treats the underlying problem, measures whether the wound is closing, and stops doing the things that only look like care."
    }
  }
];
