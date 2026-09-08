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
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-a-multimodal-approach-to-chronic-pain-management",
    "title": "Part C — A multimodal approach to chronic pain management",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "pain management",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "Chronic pain has taught me more humility than almost any other area of practice, and I want to start by admitting that most of what I was taught about it as a junior was wrong. For a long time the prevailing model treated pain as a simple signal of tissue damage — more damage, more pain — so when a patient reported severe pain we assumed severe damage, and when the scan showed nothing we were left with nowhere to go. From that model came a very logical mistake: if pain is a signal of damage, then blocking the signal harder must be the answer, so we chased a cure by escalating doses of opioids. The results were often disastrous. Dependence rose while function did not improve, and a great many patients ended up with all the side effects of a strong drug and none of the life they had come to us hoping to get back. Modern understanding sees persistent pain as a condition of the nervous system itself, which can remain sensitised long after any injury has healed. The alarm system, if you like, has become oversensitive, and it goes off at a level of input that would once have caused nothing at all. That is not the same as saying the pain is imagined — and I want to be very clear about this, because it is the single most damaging misunderstanding in this field. The pain is entirely real. What has changed is the mechanism, and the mechanism dictates the treatment. That reframing matters for a second reason, which is that it shifts our goal. Instead of eliminating pain entirely, which for most of these patients is not achievable, we aim at helping people live well alongside it — back to work, back to the things they had stopped doing, sleeping properly. I have never yet had a patient object to that goal once it was explained honestly. What people object to, quite rightly, is having it presented as a consolation prize after we have failed. The approaches with the strongest evidence are unglamorous. Graded exercise, which means starting far below what the patient thinks is worth doing and increasing slowly enough that no flare-up follows. Attention to sleep, because poor sleep raises pain sensitivity measurably by the following day, and the two feed each other in a loop that has to be broken somewhere. And psychological support — not because the pain is in the mind, but because living with a persistent symptom is genuinely difficult and the skills for it can be taught. These work best combined rather than used alone, which is what we mean by a multimodal approach, and the effect of the combination is greater than any single element. I am not dismissing medication. There is a place for it, particularly early and particularly for sleep, and there are patients for whom a carefully chosen drug makes the rest of the programme possible. But I now see it as a small part of a much broader plan, and rarely the part that restores someone's life. If I have one practical suggestion for you, it is this: change what you measure. If you ask a patient at every visit to score their pain out of ten, you are telling them, without meaning to, that the number is the point, and you will both be disappointed. Ask instead what they have managed to do this month that they could not do last month. It is a harder question to record and a much more useful one to answer, and in my experience the pain score tends to follow the function rather than the other way round. Let me end with the thing I find hardest to say to colleagues, which is that this work is slow and that the slowness is not a sign of failure. A patient who has had pain for eight years is not going to be transformed in a six-week programme, and promising otherwise sets everybody up. What I aim for in the first three months is a single change the patient chose themselves — walking to the end of the road, sitting through a film, sleeping in their own bed again. One change proves to them that the direction is possible, and after that the work becomes theirs rather than mine. The other thing worth saying is that these patients arrive having been disbelieved, often repeatedly, by people in coats. Several will have been told that the scan was normal in a tone that meant there is nothing wrong with you. Whatever else you do in that first appointment, make it clear that you believe them, because until that is settled nothing else you offer will be heard.",
      "questions": [
        {
          "id": "q1",
          "stem": "How does the speaker say modern understanding views persistent pain?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "As a straightforward signal of ongoing tissue damage."
            },
            {
              "id": "b",
              "text": "As a condition of a sensitised nervous system."
            },
            {
              "id": "c",
              "text": "As a problem best solved by higher opioid doses."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What is the speaker's main point about the goal of treatment?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It should shift toward helping people function despite pain."
            },
            {
              "id": "b",
              "text": "It should focus on completely eliminating the pain itself."
            },
            {
              "id": "c",
              "text": "It should rely chiefly on stronger and better medication."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "What error does the speaker say followed from the old model of pain?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Patients were discharged before they had been assessed."
            },
            {
              "id": "b",
              "text": "Scans were requested far more often than was necessary."
            },
            {
              "id": "c",
              "text": "Blocking the signal harder was assumed to be the answer."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What does the speaker most want to correct about the nervous-system explanation?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "The belief that it applies only to older patients."
            },
            {
              "id": "b",
              "text": "The belief that it means the pain is not real."
            },
            {
              "id": "c",
              "text": "The belief that it rules out any drug treatment."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Why does the speaker say sleep matters in chronic pain?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Poor sleep raises pain sensitivity by the next day."
            },
            {
              "id": "b",
              "text": "Sleeping tablets are the most effective treatment."
            },
            {
              "id": "c",
              "text": "Most patients sleep well once exercise is started."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What practical change does the speaker suggest at each visit?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Recording the dose of every drug the patient takes."
            },
            {
              "id": "b",
              "text": "Repeating the pain score at the start of the visit."
            },
            {
              "id": "c",
              "text": "Asking what the patient can now do that they could not."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Contrasts between an old model and a current one are frequent in Part C. Make sure you attribute each view to the right era before answering."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-antibiotic-stewardship-and-the-48-hour-review",
    "title": "Part C — Antibiotic stewardship and the 48-hour review",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "antibiotic stewardship",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "I'd like to share what our antibiotic stewardship team learned over the past year, and I'll try to be honest about the things that did not work as well as the things that did. Let me deal with the objection first, because it is the one I meet in every department. Clinicians often worry that stewardship means withholding treatment — that somebody in an office is going to stop them giving a sick patient the drug they need. That is a misunderstanding, and it is one we have to answer properly rather than dismiss. Our goal is the right drug, at the right dose, by the right route, for the shortest effective time. Nobody on our team has ever asked a colleague not to treat sepsis. We tried several things over the year. A restricted list needed sign-off from microbiology, which worked in office hours and produced a queue and a good deal of irritation at three in the morning. Posters achieved nothing measurable, and I say that as somebody who spent a weekend designing them. Education sessions produced a change that lasted about six weeks. The intervention that delivered the most benefit was surprisingly simple: a mandatory review at forty-eight hours, when culture results are usually back. At that point the prescriber must decide to stop, to narrow, or to continue, and document the reason for whichever they choose. That last part is the part that does the work. Writing a reason takes ten seconds and it forces the thinking that the ten seconds were never really about. Before this, broad-spectrum antibiotics were routinely left running for a week by default — not through any decision, but because no moment existed at which anybody was obliged to look again. The prescription was written by one team on admission and inherited by another, and nobody felt it was theirs to stop. What the review does is create an owner and a moment. The results after twelve months: broad-spectrum use down by about a fifth, and the average course roughly two days shorter. But the number I care most about is a different one. We did not see any rise in treatment failures after introducing the review, which reassured the sceptics far more than any of the other figures, and I would say to anyone starting a programme that this is the measurement to plan for from day one. If you cannot show that patients did not come to harm, you will lose the argument however good your other numbers look. Two things I would do differently. We should have involved the nursing staff from the start rather than at month four, because in practice it is often the nurse who notices that the forty-eight hours has passed. And we spent too long on the drugs and not enough on the diagnosis — a good proportion of the courses we shortened should never have been started, and stewardship at the point of the decision is harder and more valuable than stewardship two days later. If there is one message to take away, it is that stewardship is about better decisions at the bedside, not about saying no. The moment it is experienced as a restriction imposed from elsewhere, you have lost the people whose behaviour you were trying to change. A word on how you introduce it, because the same intervention succeeds or fails on this. We presented the first version as a compliance requirement, with a monthly league table by consultant, and it went badly — people complied with the form and not with the thinking, and we got a lot of reviews documented as continue with no reason attached. The second version was presented as a prompt, the data was shown by ward rather than by name, and the microbiologist came to the ward round once a week rather than waiting to be telephoned. That last change cost us three hours of consultant time a week and it did more than everything else combined, because the conversation happened where the decision was being made instead of afterwards. If you take one practical thing from this session, take that: put the expertise next to the decision, and stop expecting busy people to go and find it.",
      "questions": [
        {
          "id": "q1",
          "stem": "What was the most effective intervention the team introduced?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Banning broad-spectrum antibiotics across the whole ward."
            },
            {
              "id": "b",
              "text": "A required review of every antibiotic at 48 hours."
            },
            {
              "id": "c",
              "text": "Requiring two prescribers to approve each prescription."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What does the speaker say about treatment failures after the change?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They rose slightly but were considered acceptable."
            },
            {
              "id": "b",
              "text": "They did not increase, easing the doubters' concerns."
            },
            {
              "id": "c",
              "text": "They could not be measured reliably at the time."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "What does the speaker say is the misunderstanding about stewardship?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "That it is concerned only with cost rather than care."
            },
            {
              "id": "b",
              "text": "That it applies to hospital prescribing but not to general practice."
            },
            {
              "id": "c",
              "text": "That it means treatment is being withheld from patients."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "Which part of the 48-hour review does the speaker say does the real work?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Having to write down the reason for the decision."
            },
            {
              "id": "b",
              "text": "Having the culture result available at that point."
            },
            {
              "id": "c",
              "text": "Having a second prescriber present for the review."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Why were broad-spectrum courses previously left running for a week?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Because guidelines at the time recommended seven days."
            },
            {
              "id": "b",
              "text": "Because no moment obliged anyone to look at them again."
            },
            {
              "id": "c",
              "text": "Because shorter courses had produced more readmissions."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What does the speaker say they would do differently?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Involve nursing staff from the start of the work."
            },
            {
              "id": "b",
              "text": "Spend more of the budget on posters and education."
            },
            {
              "id": "c",
              "text": "Restrict a longer list of drugs from the outset."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Listen for the speaker correcting a common misconception early on; that correction is frequently tested. Distinguish what people 'worry' about from what the speaker states is true."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-building-a-culture-of-patient-safety-on-the-ward",
    "title": "Part C — Building a culture of patient safety on the ward",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "FOUNDATION",
    "topicTag": "patient safety",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "Good morning, and thank you for joining this session on patient safety culture. I want to describe what changed our thinking, because it was not a policy or a piece of training — it was a set of numbers that told us we had been asking the wrong question for years. When I first started reviewing incident reports, I assumed most errors came from individual carelessness. That is the intuitive model, and it is the one the newspapers use. If something has gone wrong, somebody was not paying attention. But the data told a very different story. What I found was that nearly all serious events involved a breakdown in communication between staff, rather than a single person's mistake. A result that was seen but not acted on. A concern that was raised quietly and not heard. A handover that happened in a corridor while two people were walking in opposite directions. In almost every case, at least one person had known something that would have prevented the harm, and that piece of information had not travelled. That insight changed how we approach safety entirely. Instead of asking who was to blame, we now ask what in the system allowed the error to reach the patient. And I want to be careful here, because that question is often misunderstood as an argument that nobody is ever responsible for anything. It is not. Individuals remain accountable, and there is a small category of behaviour — reckless conduct, deliberate rule-breaking — that is dealt with quite separately. What changes is the default. The default assumption is now that a competent person did something that seemed reasonable at the time, and our job is to find out why it seemed reasonable. The most powerful change we made was encouraging staff to report near misses without fear of punishment, because those reports reveal weaknesses before harm occurs. A near miss is a free lesson. Somebody nearly gave the wrong drug and caught it; the same conditions are still sitting there waiting for the next person, who may not catch it. Our near-miss reports rose by about four hundred per cent in eighteen months, and I want to be clear that this was a success rather than a deterioration — the ward did not become more dangerous, it became more honest. Two things made that possible. The first was feedback. Nobody reports twice into a system that never tells them what happened to the first one, so we committed to responding to every report within a fortnight, even when the response was that we had looked and could not fix it. The second was seniority. The change began when a consultant reported her own near miss at a departmental meeting, in front of everybody, and nothing bad happened to her. That single act did more than a year of posters. I want to be honest with you: this shift takes years, not weeks, and it depends far more on leadership behaviour than on any new policy document. You can write the policy in an afternoon. What you cannot write is what a senior member of staff does in the thirty seconds after a junior says I think that might be wrong — and that, in the end, is the whole of it. I want to leave you with the measure I now use, because the usual ones are misleading. Counting incidents tells you about reporting, not about safety, and a ward with no reports is far more worrying than a ward with many. Counting policies tells you nothing at all. The measure I trust is a question we put to new staff at three months: have you ever raised a concern here, and what happened? Both halves matter. If they have never raised one, either nothing has been wrong — which is not credible — or they did not feel able to. And if they raised one and cannot tell you what happened next, we have taught them that reporting is a way of transferring a worry rather than solving a problem. When most of your new starters can answer both halves clearly, you have the culture. Until then, you have a policy about the culture, which is not the same thing and never has been.",
      "questions": [
        {
          "id": "q1",
          "stem": "What surprised the speaker when reviewing incident reports?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "The reports were rarely completed by frontline staff at all."
            },
            {
              "id": "b",
              "text": "Most serious events came from poor communication, not carelessness."
            },
            {
              "id": "c",
              "text": "Individual negligence caused the clear majority of the harm."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "According to the speaker, lasting safety improvement depends mainly on",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "introducing detailed new policy documents for the ward."
            },
            {
              "id": "b",
              "text": "dealing firmly with staff who repeatedly make errors."
            },
            {
              "id": "c",
              "text": "the everyday behaviour of those who lead the team."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "What does the speaker say was common to almost every serious event?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Somebody had known something that did not travel."
            },
            {
              "id": "b",
              "text": "The ward had been short of staff on that day."
            },
            {
              "id": "c",
              "text": "A written procedure had not been followed at all."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "How does the speaker answer the criticism that this excuses individuals?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "By saying that blame is never useful in a clinical setting."
            },
            {
              "id": "b",
              "text": "By saying reckless conduct is still handled separately."
            },
            {
              "id": "c",
              "text": "By saying most staff would never behave recklessly anyway."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "How does the speaker interpret the large rise in near-miss reports?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "As evidence that the ward had become less safe."
            },
            {
              "id": "b",
              "text": "As a temporary effect of the training programme."
            },
            {
              "id": "c",
              "text": "As a sign that the ward had become more honest."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What does the speaker say made the change possible?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Feedback on every report, and a senior reporting her own."
            },
            {
              "id": "b",
              "text": "A new electronic system that made reporting much quicker."
            },
            {
              "id": "c",
              "text": "A guarantee that no report would ever be investigated."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Part C distractors often repeat words from the talk. Match the meaning the speaker actually endorses, not just the vocabulary you recognise."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-honest-conversations-at-the-end-of-life",
    "title": "Part C — Honest conversations at the end of life",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "end-of-life communication",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "Talking with patients about dying is, for many clinicians, the hardest conversation in medicine, and I do not think that is a failing on our part. We are trained to intervene, and this is a conversation in which the intervention is largely the conversation itself. Early in my career I believed that protecting hope meant avoiding difficult truths, so I softened prognoses until they became almost meaningless. I would say things like we'll see how you respond, or let's take it week by week, and I would leave the room feeling that I had been kind. Over time I realised that vagueness does not protect patients; it isolates them, and it robs families of the chance to prepare. The patient usually knows. What they lose is permission to say so. I remember a woman who told me, months later, that she had spent her last summer waiting for somebody to tell her it was her last summer, and that she would have spent it differently. That conversation changed my practice more than any teaching I have had. What patients consistently tell me they want is not false reassurance but honesty delivered with warmth, and the room to ask their own questions. Those two things are not in tension, although we often talk as though they were, as though we must choose between being truthful and being kind. The choice is a false one. What makes truth bearable is not vagueness; it is the sense that the person delivering it is not going to leave. I now begin by asking how much someone wishes to know, because people differ enormously, and a few prefer to leave details to relatives. That question is a small one and it changes everything. It puts the pace in the patient's hands, and it means I am never in the position of telling somebody something they had not agreed to hear. Some people want the numbers. Some want the shape of the thing without the arithmetic. A small number will tell you plainly that they would rather their daughter handled it, and that is a legitimate answer rather than denial. A word about hope, because it is the objection I hear most. Being honest does not remove hope; it relocates it. Somebody who understands where they are can hope for things that are actually available — a good week, a wedding attended, a conversation had, dying at home rather than on a ward. Hope aimed at something impossible is a much more fragile thing than we pretend, and patients holding it often know at some level that it is fragile, which is exhausting. The skill is not in finding the perfect words but in being willing to stay in the silence afterwards. I say this to every trainee I work with. You will not find a form of words that makes this land softly, and looking for one is how people end up saying nothing at all. What you can do is say the thing plainly, and then stay. Rushing to fill that silence is, I think, the most common mistake we make. The silence is where the patient does the work of taking it in, and we interrupt it because it is uncomfortable for us — not for them. Two practical points before I finish. First, do not do this standing up, and do not do it in a doorway. Sit down, even if there is nowhere good to sit, because patients consistently report that a clinician who sat spent longer with them than one who stood, regardless of the actual time. Second, write down what you said, in the words you used. The next person who sees this patient needs to know what they have already been told, and a note saying prognosis discussed tells them nothing they can build on. I have seen a great deal of harm done by a second clinician guessing wrongly at what a first one had said. And if you take nothing else from this session, take the question. How much would you like to know? Six words, and it is the difference between a conversation done to somebody and one done with them.",
      "questions": [
        {
          "id": "q1",
          "stem": "What did the speaker come to realise about softening prognoses?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It left patients isolated and families unprepared."
            },
            {
              "id": "b",
              "text": "It successfully preserved most patients' hope."
            },
            {
              "id": "c",
              "text": "It was strongly preferred by the families involved."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What does the speaker identify as the most common mistake?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Asking patients how much they wish to be told."
            },
            {
              "id": "b",
              "text": "Hurrying to speak rather than allowing silence."
            },
            {
              "id": "c",
              "text": "Giving families too much detail all at once."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Why does the speaker mention the woman who spoke to them months later?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "To show that patients rarely remember what was said."
            },
            {
              "id": "b",
              "text": "To illustrate how families disagree about disclosure."
            },
            {
              "id": "c",
              "text": "To show what is lost when nobody names the situation."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What does the speaker say about honesty and kindness?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "They are not opposed; the choice between them is false."
            },
            {
              "id": "b",
              "text": "Kindness must sometimes be preferred to full honesty."
            },
            {
              "id": "c",
              "text": "Honesty matters more than kindness in these talks."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Why does the speaker ask how much a patient wishes to know?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Because it is a requirement of the consent process."
            },
            {
              "id": "b",
              "text": "Because it puts the pace in the patient's own hands."
            },
            {
              "id": "c",
              "text": "Because most patients ask for the numbers in the end."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What is the speaker's view of hope in these conversations?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It is best protected by leaving the prognosis vague."
            },
            {
              "id": "b",
              "text": "It disappears once a prognosis has been given plainly."
            },
            {
              "id": "c",
              "text": "It is relocated rather than removed by being honest."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Reflective talks describe a change of view over time. Track the 'before' and 'after' positions carefully, as questions often test which belief the speaker now holds."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-improving-health-literacy-through-teach-back",
    "title": "Part C — Improving health literacy through teach-back",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "FOUNDATION",
    "topicTag": "health literacy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "Let me start with an uncomfortable fact: studies suggest that patients forget or misunderstand a large share of what we tell them, often within minutes of leaving the room. Not days later, when you might forgive it. Minutes. And the effect is worse the more frightened the person is, which means it is worst precisely in the consultations where the information matters most. I find that figure uncomfortable because it is not really a fact about patients. It is a fact about how we explain things. For years we tried to solve this by handing out more leaflets. It felt like doing something, it was cheap, and it produced a satisfying pile of evidence that information had been given. But a leaflet a patient cannot read or interpret achieves nothing, and a great many of ours were written several reading levels above the people receiving them. The people least able to read them are also the least likely to say so, which is why the problem is invisible from where we stand. I am not against written information. I am against the belief that handing it over completes the job. The technique that changed my practice is called teach-back, where I ask the patient to explain in their own words what they will do when they get home. It sounds almost too simple to be worth a name. Crucially, I frame it as a check on my own clarity, not a test of the patient, so no one feels embarrassed. The wording does most of the work here, and I want to give you the exact form I use, because small differences matter enormously. I do not say tell me what I just told you. I say I want to make sure I have explained this properly — can you tell me how you'll take these at home? The first version puts the patient on trial. The second puts me on trial, which is where the responsibility belonged in the first place. When someone struggles to teach it back, that tells me I have explained it poorly and need to try again differently — and differently is the important word. Repeating the same sentence more slowly and more loudly is not a second attempt; it is the same attempt. What works is changing the frame: drawing it, using the actual boxes, tying it to a fixed point in their day rather than a time of day. It costs almost nothing, yet it consistently catches dangerous misunderstandings about medication before patients leave. The commonest one I meet is a patient taking a preventer inhaler only when breathless, which is the one situation in which it does nothing whatever. Two practical points. It adds about a minute, not the five or ten that people fear, and the minute comes back later in avoided phone calls. And it works badly if you save it for the patients you think need it, partly because we are poor at guessing who those are — some of my worst misunderstandings have been with colleagues — and partly because a technique used selectively starts to feel like a judgement. Use it with everybody, or the people you use it on will notice. Let me deal with two objections. The first is that it is patronising. In eleven years I have had one patient react badly to it, and that was because I used the wrong wording and made it sound like a test — the objection is nearly always to the phrasing rather than to the technique. The second is that there is no time. I would say two things to that. The minute is real and I am not going to pretend it isn't. But the alternative is not a shorter consultation; it is a shorter consultation now and a longer problem later, and the longer problem usually arrives as a phone call to somebody else. The third thing, which nobody objects to but everybody forgets, is that teach-back works just as well through an interpreter, and it is the only reliable way of finding out whether the explanation survived the journey. Ask the patient to tell you back through the interpreter. If it comes back wrong, the fault is almost never the interpreter's — we gave them a sentence that could not be carried.",
      "questions": [
        {
          "id": "q1",
          "stem": "Why does the speaker frame teach-back as a check on their own clarity?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "To satisfy a documentation requirement on the record."
            },
            {
              "id": "b",
              "text": "To bring the consultation to an end more quickly."
            },
            {
              "id": "c",
              "text": "To avoid making the patient feel embarrassed or tested."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What does the speaker say about handing out more leaflets?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It achieved nothing where patients could not read them."
            },
            {
              "id": "b",
              "text": "It was the most effective solution that they found."
            },
            {
              "id": "c",
              "text": "It worked well when appointments were made longer."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Why does the speaker say the forgetting figure is worst where it matters most?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Because the longest consultations are the most complex."
            },
            {
              "id": "b",
              "text": "Because fear reduces how much of an explanation is retained."
            },
            {
              "id": "c",
              "text": "Because serious conditions are explained in more detail."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What does the speaker say about the exact wording used?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "One version puts the patient on trial, the other the clinician."
            },
            {
              "id": "b",
              "text": "The wording matters far less than the tone of voice used."
            },
            {
              "id": "c",
              "text": "A written prompt works better than any spoken version."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "What does the speaker mean by trying again 'differently'?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Arranging a second appointment later in the same week."
            },
            {
              "id": "b",
              "text": "Repeating the explanation more slowly and clearly."
            },
            {
              "id": "c",
              "text": "Changing the frame — drawing it, or using the boxes."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "Why does the speaker say teach-back should be used with everybody?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Because guidance requires it to be recorded each time."
            },
            {
              "id": "b",
              "text": "We guess badly who needs it, and selective use feels like judgement."
            },
            {
              "id": "c",
              "text": "Because it saves more time with confident patients than others."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Note why a speaker does something a particular way, not just what they do. The reasoning behind a technique is a common Part C question."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-making-telehealth-consultations-safe-and-effective",
    "title": "Part C — Making telehealth consultations safe and effective",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "telehealth",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "When telehealth expanded rapidly, many of us assumed it was simply a face-to-face consultation moved onto a screen — same conversation, different medium. Experience has taught me that this assumption is risky, and I want to explain where the risk actually sits, because it is not where people expect. A video call removes the incidental observations we rely on: the way a patient walks into the room, their breathing while they take their coat off, the pause on the stairs, even their smell. None of those is anything we consciously record. That is exactly the problem. They arrive without being asked for, they contribute to the impression we form in the first ten seconds, and when they are absent nothing announces their absence. You do not notice that you have failed to notice. These absences can hide important signs, and the ones I worry about most are the slow ones — the gradual deterioration that a receptionist who has known somebody for years would spot from the doorway. The clinicians who adapt best are those who change their questioning, asking patients to describe and demonstrate things they would normally observe directly. Walk to the window and back and let me watch. Count out loud for as long as you can on one breath. Show me the ankle next to the other one. It feels artificial for the first fortnight and then it becomes ordinary, and it recovers a good deal of what the screen took away. What does not work is conducting the same consultation and hoping. I also insist that we set clear rules for when a remote consultation must be converted to a face-to-face visit, because uncertainty is not a reason to carry on regardless. Our list is short and deliberately blunt: a child under one, any chest pain, any abdominal pain, a rash the parent is worried about, a patient who cannot describe the problem, and — the one I would defend hardest — any consultation where the clinician simply feels uneasy and cannot say why. That last item is not woolly. It is the most reliable instrument in the building, and a system that gives people no permission to act on it will find them ignoring it. There is a second category of problem which is nothing to do with clinical signs, and I do not think we discuss it enough. We do not know who else is in the room. A patient may be answering questions about their mood, or their home, in front of the person the answer is about. In a consulting room that is visible; on a telephone it is invisible; on video it is only slightly less so. So I ask, early and casually, whether the patient is somewhere they can speak freely, and I have had answers that changed the entire consultation. Telehealth has genuinely widened access for people in remote areas, for people who cannot take half a day off work, for people whose condition makes travel exhausting, and I would not want to lose it. It is also, quietly, less equal than it looks: the people who benefit most are often the ones with the best connection and the quietest house. But it is a different skill, and we should train for it as such — properly, with observation and feedback, in the way we train for anything else that can be done well or badly. Let me say something about the telephone, which gets far less attention than video and is what most of us actually use. Everything I have described is worse on the telephone, and yet we treat it as the lesser thing that needs no particular skill. It does. The compensations are different — you listen for the sentence that runs out of breath, for the pause before an answer, for somebody who is speaking more quietly than the last time you rang them. Those are learnable and almost nobody is taught them. Finally, a word about documentation. Write down that the consultation was remote, write down what you could not assess, and write down what you told the patient to do if things changed. The first two protect the next clinician, who will otherwise read your note as though you had examined somebody. The third protects the patient. In every remote consultation I finish the same way — if this gets worse, or if you are not happy, here is exactly who to contact and by when — and I have come to think of that sentence as the examination I could not do.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker say is the main risk of telehealth?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It is too expensive for most patients in remote areas."
            },
            {
              "id": "b",
              "text": "It loses incidental observations that reveal important signs."
            },
            {
              "id": "c",
              "text": "It always takes longer than a face-to-face visit does."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What does the speaker insist clinicians should establish?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "A limit on how many remote consultations they do daily."
            },
            {
              "id": "b",
              "text": "A clear preference for telephone over video calls."
            },
            {
              "id": "c",
              "text": "Clear rules for converting a remote visit to face-to-face."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Why does the speaker say the missing observations are dangerous?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Their absence gives no signal that anything is missing."
            },
            {
              "id": "b",
              "text": "They are the observations most often written in the notes."
            },
            {
              "id": "c",
              "text": "They are the ones patients are least able to describe."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "How do the clinicians who adapt best change their practice?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They keep remote consultations shorter than usual."
            },
            {
              "id": "b",
              "text": "They ask patients to demonstrate what cannot be seen."
            },
            {
              "id": "c",
              "text": "They arrange a follow-up visit for every patient."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Which item on the conversion list does the speaker defend most strongly?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Any patient reporting pain in the chest or abdomen."
            },
            {
              "id": "b",
              "text": "Any child under one year of age at the time."
            },
            {
              "id": "c",
              "text": "Unease the clinician cannot put into words."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What further problem does the speaker say is not discussed enough?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Not knowing who else is present in the patient's room."
            },
            {
              "id": "b",
              "text": "The cost of the equipment for smaller practices."
            },
            {
              "id": "c",
              "text": "The difficulty of recording remote consultations."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Speakers often acknowledge a benefit before stating their main concern. Do not let the positive aside distract you from the central point being tested."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-preventing-inpatient-falls-through-hourly-rounding",
    "title": "Part C — Preventing inpatient falls through hourly rounding",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "FOUNDATION",
    "topicTag": "falls prevention",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "Today I want to talk about how we cut inpatient falls on the medical unit, and I want to begin with the things that did not work, because that is the more useful half of the story. We had tried wristbands, bed alarms, and warning signs above the bed, and honestly none of them made a measurable difference on their own. I should be careful here — none of those is a bad idea, and each has some evidence behind it. But every one of them shares a weakness: they identify a patient as being at risk and then leave the rest to whoever happens to walk past. A wristband is a label, not an intervention. The turning point came when we introduced structured hourly rounding, where a nurse checks each patient against four prompts: pain, position, toileting needs, and whether belongings are within reach. Four prompts, every hour, on every patient, whether or not they have a wristband. It takes about ninety seconds per patient when it is running properly. The third of these, toileting, turned out to be the single biggest factor, because so many falls happened when patients tried to reach the bathroom unaided. When we looked back at two years of incident reports, well over half of our falls had happened on the way to or from the toilet, most of them at night, and a striking number involved a patient who had waited, decided not to trouble anybody, and gone alone. That last detail is the one I would ask you to sit with. Those patients were not confused or reckless. They were being polite. After three months of consistent rounding, our fall rate dropped by almost a third. And consistent is the word that carries the weight. We ran the same programme on a second ward where it was done when time allowed, and the rate there did not move at all — which told us something useful, namely that a partial version is not a smaller benefit but no benefit. If you cannot protect the time, do not start. I should stress that the technology was never the answer; the alarms only told us a patient had already fallen. In fact the alarms did something worse than nothing on the busiest nights, because they went off frequently, most alarms were false, and staff learned to treat the sound as noise rather than as information. What worked was anticipating the need before the patient acted on it. Two practical points if you are considering this. First, do not add rounding to an already full workload and expect it to survive; we removed two pieces of routine paperwork in the same month, and I am convinced that mattered more than the training. Second, the four prompts must be spoken aloud to the patient rather than checked mentally. Asking do you need the toilet before I go? gets a different answer from looking at somebody and deciding they are settled — and the difference between those two, repeated hourly across a ward, is the whole of our improvement. I want to add something about the conversation with families, because it changed after we started this. Relatives frequently ask us to stop their mother getting up, and the honest answer is that we cannot and would not. Immobility is not safety — a patient who does not walk for a fortnight loses the strength to walk at all, and we would have traded a fall today for a nursing home place in six months. What we can offer is that somebody will be with her when she goes. That is a much better conversation than the one about bed rails, and it is one that rounding makes possible rather than aspirational. The last thing I would say is about what happens after a fall. Our old practice was an incident form and a body map. We now also ask a single question at the bedside within the hour: what were you trying to do? The answers are almost never surprising and almost always actionable — I wanted the light on, I couldn't reach my water, I didn't want to press the buzzer again. Every one of those is a prompt on the rounding list, which is where our four came from in the first place.",
      "questions": [
        {
          "id": "q1",
          "stem": "Which factor did the speaker identify as the leading cause of falls?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Bed alarms that had been positioned incorrectly."
            },
            {
              "id": "b",
              "text": "Patients trying to reach the bathroom without help."
            },
            {
              "id": "c",
              "text": "Pain that was not controlled overnight."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What is the speaker's main point about bed alarms?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They prevented most falls once correctly installed."
            },
            {
              "id": "b",
              "text": "They only alerted staff after a fall had happened."
            },
            {
              "id": "c",
              "text": "They worked best when combined with warning signs."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "What weakness does the speaker identify in wristbands and signs?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They are frequently removed or ignored by patients."
            },
            {
              "id": "b",
              "text": "They take too long for busy staff to complete."
            },
            {
              "id": "c",
              "text": "They label the risk but leave the action to chance."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What detail about the patients who fell does the speaker highlight?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Many had gone alone rather than trouble the staff."
            },
            {
              "id": "b",
              "text": "Most had been assessed as low risk on admission."
            },
            {
              "id": "c",
              "text": "Nearly all had fallen during the daytime hours."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "What did the second ward's result show the speaker?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "That the programme works better on smaller wards."
            },
            {
              "id": "b",
              "text": "That a partial version produces no benefit at all."
            },
            {
              "id": "c",
              "text": "That three months is too short to see a change."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "Why does the speaker insist the four prompts are spoken aloud?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Because it provides a record that the check was done."
            },
            {
              "id": "b",
              "text": "Because patients recall spoken advice more reliably."
            },
            {
              "id": "c",
              "text": "Because asking gets a different answer from assuming."
            }
          ]
        }
      ]
    },
    "guidanceNote": "When a speaker lists several measures and then names one as decisive, expect a question on that contrast. Note the word that signals it, such as 'turning point' or 'biggest factor'."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-recognising-and-preventing-clinician-burnout",
    "title": "Part C — Recognising and preventing clinician burnout",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "burnout wellbeing",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "Burnout among health professionals is too often framed as a personal failing, as though those affected simply lack resilience. I want to challenge that framing directly, and I want to do it with evidence rather than with indignation, because indignation has been tried and it has not worked. Let me start with what burnout actually is, since the word has drifted. It is not the same as being tired, and it is not the same as being unhappy at work. As it was originally defined it has three components: emotional exhaustion, a growing detachment from the people you are meant to be caring for, and a sense that what you do is no longer effective. That second component is the one that should frighten us, because a workforce that has stopped feeling anything about its patients is a patient-safety problem long before it is a wellbeing problem. The evidence shows that burnout is driven mainly by the conditions people work in: excessive workload, loss of control over their day, insufficient reward, unfairness, and a sense that their effort goes unrecognised. Those are properties of an organisation. You can measure them, and you can change them. What you cannot do is locate them inside the individual and then treat them there. Telling an exhausted nurse to practise mindfulness, while changing none of those conditions, is at best unhelpful and at worst insulting — and it is heard as insulting, whatever the intention behind it, because the message underneath is that the problem is her. In our service, the measures that actually moved the needle were structural, such as protecting break times and giving teams a real say in rostering. The rostering one surprised me. We had assumed people wanted fewer hours; what they actually wanted, overwhelmingly, was to know their hours far enough in advance to have a life around them. The number of hours barely shifted. Predictability did, and the wellbeing scores moved with it. Individual coping strategies have their place, and I do not want to be heard dismissing them. A clinician who sleeps properly and has support outside work is genuinely better protected, and for some people a course is exactly what they needed. But they cannot compensate for a broken system, and the trouble comes when they are offered instead of change rather than alongside it. There is a further cost to getting this wrong, and it is the one I would leave you with. If exhaustion is framed as a personal shortfall, people stop reporting it, because admitting to it becomes a confession about themselves rather than a report about the work. And an organisation that cannot see strain cannot manage it. The information that would have let you make a small correction early is simply no longer collected, and the first time you learn about the problem is when three people resign in the same week. If managers take one thing from today, let it be that wellbeing is an organisational responsibility first. The workshop can come second. It should not come instead. Let me anticipate the objection from managers in the room, which is entirely fair: most of what I have described costs money that nobody has. Some of it does. But the two changes that produced the largest effect in our service cost nothing at all. The first was publishing the rota six weeks ahead instead of two. The second was a standing item at the team meeting where anything raised had to be answered within a fortnight, even if the answer was no. Neither required a business case. Both required somebody senior to decide that it mattered and then keep doing it when it became inconvenient, which is the part that actually fails. And I would add one caution about measurement. If you survey staff about wellbeing and then do nothing visible, the next survey will score worse than if you had never asked — because you have now demonstrated that asking leads nowhere. Do not start the conversation unless you intend to finish it.",
      "questions": [
        {
          "id": "q1",
          "stem": "What is the speaker's central argument about burnout?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It mainly reflects a lack of personal resilience."
            },
            {
              "id": "b",
              "text": "It can be resolved through mindfulness training."
            },
            {
              "id": "c",
              "text": "It is driven chiefly by the conditions of the work."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "Which measures does the speaker say actually helped?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Protected breaks and a real say in the rota."
            },
            {
              "id": "b",
              "text": "Individual coping courses offered to all staff."
            },
            {
              "id": "c",
              "text": "Encouraging staff to build personal resilience."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Which component of burnout does the speaker say should frighten us?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "The exhaustion that persists after time off."
            },
            {
              "id": "b",
              "text": "The growing detachment from the patients themselves."
            },
            {
              "id": "c",
              "text": "The feeling that the work is no longer effective."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What surprised the speaker about the rostering change?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "That the number of hours worked fell sharply."
            },
            {
              "id": "b",
              "text": "That senior staff resisted it more than juniors."
            },
            {
              "id": "c",
              "text": "That predictability mattered more than fewer hours."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "What is the speaker's position on individual coping strategies?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Useful alongside change, but not offered instead of it."
            },
            {
              "id": "b",
              "text": "Ineffective for everyone and best withdrawn entirely."
            },
            {
              "id": "c",
              "text": "The most reliable protection currently available."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What further cost does the speaker identify at the end?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Wellbeing budgets are spent on the wrong activities."
            },
            {
              "id": "b",
              "text": "Staff stop reporting strain, so it cannot be managed."
            },
            {
              "id": "c",
              "text": "Managers become reluctant to discuss the subject."
            }
          ]
        }
      ]
    },
    "guidanceNote": "When a speaker 'challenges a framing', the wrong options usually restate that framing. Choose the answer that reflects the speaker's counter-position."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-reducing-medication-errors-with-quiet-zones",
    "title": "Part C — Reducing medication errors with quiet zones",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "patient-safety",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "Thank you all for coming. Today I want to focus on one of the most preventable causes of harm in hospitals: medication administration errors. I want to begin by dismantling the assumption most people arrive with, which is that these errors are a knowledge problem. Research consistently shows that the single biggest contributing factor is interruption during the preparation stage, rather than a lack of knowledge on the part of staff. The nurses making these errors could tell you the dose, the route and the contraindications without hesitation. What they could not do was hold the sequence in their head while three people spoke to them. In one study, nurses were interrupted on average ten times during a single drug round, and each interruption raised the likelihood of an error. Ten times. And when the interruptions were categorised, the majority were not emergencies — they were questions that could have waited twenty minutes, a relative asking about visiting hours, a colleague looking for a set of keys, a telephone that somebody else could have answered. I make that point without blame, because everybody interrupting had a perfectly good reason at the time, and none of them could see the sequence being held in somebody else's head. The most promising intervention has not been more training, but the introduction of so-called quiet zones, where staff preparing medications wear a coloured tabard and are not to be disturbed. Where these have been trialled, error rates have fallen by roughly a third. The tabard sounds trivial and I know some of you will find it undignified — that objection came up strongly on our own unit. What it does is make an invisible state visible. Concentration has no outward sign; a tabard does. Interestingly, the effect was strongest not in intensive care, but on general medical wards, where staffing pressures and interruptions are typically highest. That is worth pausing on, because the instinct is always to trial a safety measure in the highest-acuity area first. Intensive care already had a low interruption rate, so there was less to gain. The measure works best where the problem is worst, which sounds obvious and is routinely ignored when pilot sites are chosen. Two conditions decide whether it works. The first is that everybody must know what the tabard means, including the ward clerk, the porters, the domestic staff and the visiting teams — one consultant who ignores it teaches an entire ward that it can be ignored. The second is that there must be an agreed way to break the rule for a genuine emergency, because a rule with no exception gets broken casually rather than deliberately. My recommendation is that we pilot the tabard scheme on two wards before rolling it out more widely. I would choose the two busiest, measure interruptions rather than errors for the first month, because errors are too rare to show a change quickly, and I would ask the ward sisters to design the exception rule themselves rather than having it handed to them. I want to address the objection that this is treating the symptom. It is, and I would defend that. The underlying problem is that a drug round is a task requiring sustained concentration placed in the middle of a ward designed for constant contact, and nobody is going to redesign the ward this year. The tabard is a workaround, and a good workaround that people actually use beats an ideal solution that never arrives. There is one further benefit that we did not predict. Once interruptions became visible, people started to notice how many of them came from a small number of fixable causes — a telephone with no second handset, a drug cupboard on the wrong corridor, a stock item that ran out every Tuesday. We fixed four of those in three months, and each fix removed interruptions permanently rather than deflecting them. So the scheme paid for itself twice: once through the concentration it protected, and once through what it revealed about why the interruptions were happening at all.",
      "questions": [
        {
          "id": "q1",
          "stem": "According to the speaker, the main cause of medication errors is",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "insufficient training among the nursing staff."
            },
            {
              "id": "b",
              "text": "interruption during the preparation of the drugs."
            },
            {
              "id": "c",
              "text": "shortages of medication stock on the ward."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The speaker says the quiet-zone intervention was most effective in",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "intensive care units on the same site."
            },
            {
              "id": "b",
              "text": "outpatient clinics attached to the hospital."
            },
            {
              "id": "c",
              "text": "general medical wards under staffing pressure."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "What does the speaker say about the interruptions that were studied?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Most were not urgent and could have waited."
            },
            {
              "id": "b",
              "text": "Most came from patients rather than from staff."
            },
            {
              "id": "c",
              "text": "Most occurred during the evening drug round."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What does the speaker say the tabard actually achieves?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It reminds the wearer to slow down and check."
            },
            {
              "id": "b",
              "text": "It records who prepared each medication dose."
            },
            {
              "id": "c",
              "text": "It makes an otherwise invisible state visible."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Why was the effect smaller in intensive care?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Staff there had already received extra training."
            },
            {
              "id": "b",
              "text": "Interruption rates there were already low."
            },
            {
              "id": "c",
              "text": "Drug rounds there are prepared by two nurses."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What does the speaker recommend measuring in the first month?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Interruptions, because errors are too rare to show change."
            },
            {
              "id": "b",
              "text": "Errors, because they are what the scheme is aimed at."
            },
            {
              "id": "c",
              "text": "Staff opinion, because acceptance decides the outcome."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The speaker uses 'not... but...' twice to overturn the answer you might expect; track those reversals rather than the first setting or cause mentioned."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-responding-to-agitation-in-dementia-care",
    "title": "Part C — Responding to agitation in dementia care",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "dementia care",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "In my years working with people living with dementia, the question I'm asked most is how to manage agitation. My answer often disappoints people, because they expect a medication recommendation and what I offer instead is a way of looking at the problem. In reality, agitation is almost always a form of communication — an attempt to express an unmet need that the person can no longer put into words. I would ask you to hold on to that sentence, because everything else follows from it. If behaviour is communication, then the question stops being how do we stop this and becomes what is being said. When a resident becomes distressed, I encourage staff to look first for pain, hunger, noise, or a full bladder before reaching for any sedative. Pain is the one that is missed most often, and by a wide margin. A person who cannot say my hip hurts will show you instead, and what you see is somebody resisting being moved, or calling out in the evening, or striking out during personal care. In one home we introduced nothing more sophisticated than a routine pain assessment for anyone whose behaviour had changed, and a third of the cases resolved with regular paracetamol. That is not a clever intervention. It is simply asking a different question first. Noise is the next one, and it is the one staff find hardest to notice, because they have stopped hearing it. Walk into a lounge at four in the afternoon and count the sources: a television nobody is watching, a call bell, two conversations, a trolley. For somebody whose brain can no longer filter, that is not background — it is all foreground, and it is exhausting. We audited one home where antipsychotic use fell sharply once staff were trained to read behaviour as a signal. The fall was about sixty per cent over a year, and falls and hospital admissions came down alongside it, which is what you would expect given what those drugs do to balance. I won't pretend medication has no place. There are people in genuine terror, and there are situations where somebody is at risk of serious harm, and withholding treatment in the name of a principle is its own kind of cruelty. But it should be the last resort, not the first response — and when it is used, at the lowest dose, with a date written down for reviewing whether it is still needed. That review date is the part that most often goes missing, and a drug started for one bad fortnight is still being given three years later. The most skilled carers I know spend their energy on prevention, keeping routines familiar and environments calm. They know which resident needs the radio on and which needs it off, they get people to the toilet before the need becomes urgent, and they do the difficult parts of personal care at the time of day that particular person tolerates best. None of that appears in a care plan as an intervention. All of it is why their residents are calm. I want to say something about staff, because none of this survives on a unit where people are frightened. Being struck or shouted at is genuinely distressing, and a carer who has just been hit is not in a position to think about unmet needs — that is not a failure of attitude, it is how anybody responds. So the culture has to allow the person to step away and someone else to step in, without either of them having to explain themselves. Where that is not possible, the medication conversation starts, and it starts for reasons that have very little to do with the resident. The other thing I would ask you to protect is the handover of what works. The knowledge that Mrs Doyle will accept help with washing from anybody at ten in the morning and nobody at all after four is worth more than any care plan I have read, and it is held almost entirely in the heads of the regular staff. Write it down. When it is lost — and agency staffing loses it in a fortnight — the behaviour returns, and everybody concludes the dementia has progressed.",
      "questions": [
        {
          "id": "q1",
          "stem": "How does the speaker mainly describe agitation in dementia?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "As an attempt to express an unmet need."
            },
            {
              "id": "b",
              "text": "As a side effect of existing medication."
            },
            {
              "id": "c",
              "text": "As an unavoidable stage of the illness."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What is the speaker's view on antipsychotic medication?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It should be the first response to distress."
            },
            {
              "id": "b",
              "text": "It should be used only as a last resort."
            },
            {
              "id": "c",
              "text": "It has no legitimate role in dementia care."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Which unmet need does the speaker say is missed most often?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Hunger, particularly later in the afternoon."
            },
            {
              "id": "b",
              "text": "The need to use the toilet without help."
            },
            {
              "id": "c",
              "text": "Pain, in someone who cannot report it."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What happened in the home that introduced a routine pain assessment?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "A third of the cases settled with regular paracetamol."
            },
            {
              "id": "b",
              "text": "Staff found the assessment too slow to complete."
            },
            {
              "id": "c",
              "text": "Antipsychotic prescribing rose in the first months."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Why does the speaker say staff struggle to notice noise?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Because most of it happens during the night."
            },
            {
              "id": "b",
              "text": "Because they have stopped hearing it themselves."
            },
            {
              "id": "c",
              "text": "Because residents rarely complain about it."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What does the speaker say most often goes missing when a drug is used?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "The consent of the resident's own family."
            },
            {
              "id": "b",
              "text": "The record of which staff member gave it."
            },
            {
              "id": "c",
              "text": "A date for reviewing whether it is still needed."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Beware absolute-sounding options ('no place at all'). Speakers often qualify their view; pick the option that captures the nuance they actually express."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-sustaining-gains-in-quality-improvement-projects",
    "title": "Part C — Sustaining gains in quality improvement projects",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "quality improvement",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "Over the years I have led, and watched, a great many quality improvement projects, and I have become fascinated by why so few of them last. Not why they fail — most of them do not fail. They work, they are written up, somebody presents a poster with a very convincing graph, and then eighteen months later the ward is doing exactly what it did before. That pattern is so common that I have come to think of it as the normal outcome rather than the disappointing one. The launch is usually the easy part. Enthusiasm is high, everyone is watching, there is a project lead whose actual job it is to chase people, and a new thing carries its own energy for a while. None of those conditions is permanent, and none of them is what you are trying to build. The real test comes six months later, once the project team has moved on and attention has drifted elsewhere. That is the point at which you find out whether you changed the work or merely supervised it. What I have learned is that an improvement only endures when it is built into the everyday system, so that doing the right thing becomes the path of least resistance. If the safer option requires an extra trip down the corridor, a form to find, or somebody to remember, it will decay — not through carelessness, but because a busy person under pressure takes the shortest route, and that is true of all of us. So the question I now ask at the design stage is not how do we get people to do this, but what would have to change so that this is the easiest thing to do. Sometimes the answer is where a piece of equipment lives. Sometimes it is a default setting on a form. Those are unglamorous and they outlast every training session. Relying on individual diligence or willpower is a recipe for slow decay, and I want to be careful about how that sounds, because it is not a criticism of anybody. Diligence is finite and it is spent on whatever is most urgent that hour. A system that requires diligence is a system that has quietly transferred its design problem onto the person at the end of it. We also made a deliberate choice to measure outcomes long after the formal project ended, because what you stop measuring, you stop sustaining. We now keep a single indicator running for two years, deliberately just one, because a dashboard of fifteen gets ignored and one number on a wall does not. When it moves in the wrong direction, somebody notices within a month rather than within a year. There is one further thing that decides this and it is rarely written down: who owns the change once the project closes. If the answer is the project team, it will not survive, because the project team will not exist. It has to be handed to a role that will still be there — the ward sister, the department lead — and handed over deliberately, in a conversation, rather than left to evaporate. My advice, if you take one thing from this session, is to plan for the second year from the very first day. Write down who will own it, what will be measured, and what will happen when the number slips. If you cannot answer those three questions at the start, you are not designing an improvement; you are designing a pilot. I will finish with the uncomfortable question, which is what to do when the number does slip. The instinct is to relaunch — new posters, another training session, a reminder email from somebody senior. In my experience that buys about six weeks. The more useful response is to go and watch. Stand on the ward for a morning and see what people actually do, because a decayed improvement almost always has a specific obstacle behind it rather than a general loss of enthusiasm. Twice in my career the answer turned out to be a piece of equipment that had been moved during a refurbishment and never moved back. Neither of those would have been found by any amount of reminding. And if you go and watch and find that people have simply worked out a better way of doing it than the one you designed, adopt theirs. That has happened to me more than once, and the version that survives is nearly always the one the ward invented.",
      "questions": [
        {
          "id": "q1",
          "stem": "According to the speaker, when is the real test of a project?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "During the launch, when enthusiasm is highest."
            },
            {
              "id": "b",
              "text": "Before the project team has been assembled."
            },
            {
              "id": "c",
              "text": "Around six months later, once attention has drifted."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What does the speaker say makes an improvement endure?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Building it in so the right thing is the easiest."
            },
            {
              "id": "b",
              "text": "Relying on the diligence of committed individuals."
            },
            {
              "id": "c",
              "text": "Ending measurement once the project formally closes."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "How does the speaker describe the usual fate of these projects?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They fail early and are quietly abandoned."
            },
            {
              "id": "b",
              "text": "They work, then the ward returns to what it did."
            },
            {
              "id": "c",
              "text": "They succeed but are never written up properly."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What question does the speaker now ask at the design stage?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "How much will this cost over the first two years?"
            },
            {
              "id": "b",
              "text": "How can we persuade staff to take part in it?"
            },
            {
              "id": "c",
              "text": "What would make this the easiest thing to do?"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Why does the speaker keep only one long-term indicator?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "A dashboard of fifteen gets ignored; one number does not."
            },
            {
              "id": "b",
              "text": "Collecting more than one is too expensive to sustain."
            },
            {
              "id": "c",
              "text": "A single figure is more accurate than several together."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What does the speaker say is rarely written down?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "The cost of the improvement in staff time."
            },
            {
              "id": "b",
              "text": "Who owns the change once the project closes."
            },
            {
              "id": "c",
              "text": "The evidence base the project was built on."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Part C often contrasts a system-level solution with reliance on individuals. The speaker's preferred answer is usually the structural one; the distractor restates the weaker approach."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-tackling-malnutrition-risk-in-hospital-patients",
    "title": "Part C — Tackling malnutrition risk in hospital patients",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "FOUNDATION",
    "topicTag": "nutrition",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "Nutrition is one of the most overlooked aspects of hospital care, and yet it influences almost everything else, from wound healing to length of stay, from the risk of infection to whether somebody has the strength to get out of bed for the physiotherapist. It is also, I think, the part of care most likely to be assumed to be somebody else's job. When we audited our wards, we were alarmed to find that a significant number of at-risk patients were missing meals not because of their illness but because of the system around them. That distinction matters enormously, because the two have entirely different remedies. A patient who cannot eat because of nausea needs a clinical answer. A patient who did not eat because the tray was taken away needs an organisational one, and no amount of prescribing will touch it. Trays arrived during ward rounds, or were cleared away before a patient who needed help eating had been assisted. Some patients were away at investigations and came back to nothing. Others could not open the packaging — and I would ask anybody who doubts that to try opening a portion of butter with one working hand. Several had their dentures at home. One had been on the ward for four days without anyone recording that she could not reach the table when the bed was in the position she was nursed in. None of that is a nutritional problem in the way we usually mean the phrase. Our most effective change had nothing to do with supplements; it was introducing protected mealtimes, where non-urgent tasks pause so staff can focus on helping people eat. That is harder than it sounds, because it requires other departments to agree — phlebotomy, pharmacy, the therapy teams, and the medical staff most of all — and the first month is mostly spent explaining to people why they cannot do the thing they came to do. But once it holds, it holds. We also placed a simple screening tool at admission so risk was flagged from day one, and repeated it weekly, because intake commonly falls during an admission for reasons that have nothing to do with the reason for coming in. A score taken once on the day of arrival tells you about the person's life before hospital, not about what is happening now. Two further things we changed and I would recommend. We began recording assistance with eating as a nursing intervention in its own right, rather than as something that happens if there is time, because what is not recorded is not planned for and is the first thing to go on a short-staffed shift. And we asked relatives whether they would like to come in at mealtimes, which several were delighted to do and which nobody had ever thought to offer. The point I want to leave you with is that good nutrition is frequently an organisational issue rather than a clinical one. We spent years asking why patients were not eating enough and looking for the answer in the patient. It was on the ward the whole time — in the timing of the round, the position of the table, and who was free at half past twelve. One last thing, on supplements, because I have been dismissive about them and that is not quite fair. They have a real place where food alone cannot meet the requirement, and for some patients they are the difference between healing and not. What they cannot do is substitute for a meal that somebody was unable to eat, and that is what they are most often used for. Our audit found a striking pattern: the wards prescribing the most supplements were not the wards with the sickest patients. They were the wards with the least mealtime assistance. The supplement was doing the job of a person, and it costs more and works worse. So my order of priority is: get the food to the patient, get somebody to help them eat it, record whether they did, and prescribe a supplement when those three have been done and are not enough. In that order, and not in any other.",
      "questions": [
        {
          "id": "q1",
          "stem": "Why were at-risk patients missing meals, according to the audit?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Because their illness had removed their appetite."
            },
            {
              "id": "b",
              "text": "Because of the way the ward system was organised."
            },
            {
              "id": "c",
              "text": "Because nutritional supplements were unavailable."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What was the most effective change the speaker describes?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Prescribing nutritional supplements far more widely."
            },
            {
              "id": "b",
              "text": "Serving larger portions to every patient on the ward."
            },
            {
              "id": "c",
              "text": "Protected mealtimes, with non-urgent tasks paused."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Why does the speaker stress the distinction between the two causes?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "The two have entirely different remedies."
            },
            {
              "id": "b",
              "text": "Only one of them appears in the audit data."
            },
            {
              "id": "c",
              "text": "One is far more common than the other."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What does the speaker say is hard about protected mealtimes?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Finding staff who are free at that time of day."
            },
            {
              "id": "b",
              "text": "Getting other departments to agree to the pause."
            },
            {
              "id": "c",
              "text": "Persuading patients to eat at a set time."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Why is the screening repeated weekly?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Because the tool becomes more accurate with repetition."
            },
            {
              "id": "b",
              "text": "Because guidance requires a weekly nutritional score."
            },
            {
              "id": "c",
              "text": "Because intake often falls during the admission itself."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "Why did the team start recording assistance with eating?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "What is not recorded is not planned or protected."
            },
            {
              "id": "b",
              "text": "It was required for the ward's staffing return."
            },
            {
              "id": "c",
              "text": "It allowed relatives to be billed for their time."
            }
          ]
        }
      ]
    },
    "guidanceNote": "If a speaker says a problem is 'organisational rather than clinical', expect a question testing that distinction. Listen for the cause they emphasise over the obvious one."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-talk-on-hydration-in-older-adults",
    "title": "Part C — Talk on hydration in older adults",
    "prompt": "You will hear part of a presentation. Choose the answer which best fits what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "presentation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "alloy"
        }
      ],
      "audioScript": "Speaker: Thank you for coming. I want to talk about hydration in older inpatients, which is one of those subjects everybody agrees is important and almost nobody measures. What surprised our team most was not that dehydration was common on the ward, but how often it was missed. We reviewed a hundred consecutive admissions over seventy-five, and in the cases where dehydration was later confirmed on blood testing, it had been suspected on the ward beforehand in fewer than half. That is not because nobody was looking. It is because what we were looking at does not work well in this group. The classic signs we are taught — dry mouth, reduced skin turgor — are far less reliable in older patients. Skin turgor is the clearest example. Skin loses elasticity with age, so a slow pinch tells you the patient is eighty rather than that they are dry, and it will be abnormal in a well-hydrated eighty-year-old and normal in a dehydrated one. Dry mouth is scarcely better, because so many of the drugs our patients take cause it directly, and because a patient breathing through their mouth overnight will have one regardless. Thirst is the one I would warn you about most, because it is the sign people trust instinctively. The sensation of thirst diminishes markedly with age, so an older person can be significantly dehydrated and not feel thirsty at all — which means that offering a drink and being told no thank you is not reassurance. It is very often the problem itself. So what does work? We found a simple daily fluid chart, reviewed at the morning round, caught more cases than any single clinical sign. And I want to be precise about that, because fluid charts have a poor reputation and largely deserve it. A chart that is filled in unreliably and read by nobody is worse than no chart, because it manufactures false reassurance. The two changes that made ours work were, first, that the total was added up and spoken aloud during the round, so that somebody had to say four hundred millilitres in twenty-four hours out loud in front of the team — and second, that jugs were weighed rather than estimated, because estimating what somebody has drunk from a jug is guesswork dressed up as measurement. There is an obvious point that took us far too long to reach, which is that the commonest reason an older patient does not drink is not physiological. It is that the jug is out of reach, or too heavy to lift, or that the patient is deliberately restricting fluids because they are frightened of not reaching the toilet in time and of the indignity that follows. That last reason is rarely volunteered and almost never asked about, and where it is the cause, no chart in the world will fix it. The answer there is a commode and a conversation. My practical recommendation is a modest one. Weigh the jugs, say the total out loud, and ask every patient over seventy-five one direct question: are you drinking less because you are worried about getting to the toilet? In our unit, roughly one in five said yes. I should say a word about intravenous fluids, because the natural conclusion from everything I have said is that we should be more ready to prescribe them, and that is only half right. Fluids given intravenously to an older patient carry their own risks — overload in anybody with a weak heart, and the cannula itself, which tethers a patient to a stand and quietly ends their mobility for the admission. The route we underuse is not intravenous. It is subcutaneous, which almost any ward can run overnight, which does not require a pump, and which very few junior staff have ever been shown. And the route we underuse most of all is the one that involves a jug within reach and somebody with the time to sit down. Every unit I have worked in has been quicker to prescribe a litre of saline than to solve the reason the water was untouched, and I include myself in that.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker emphasise about dehydration on the ward?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It was frequently overlooked by the ward team."
            },
            {
              "id": "b",
              "text": "It was rarer than the team had expected."
            },
            {
              "id": "c",
              "text": "It was easily confirmed by skin turgor."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What did the team find most effective?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Checking skin turgor at every ward round."
            },
            {
              "id": "b",
              "text": "A daily fluid chart reviewed each morning."
            },
            {
              "id": "c",
              "text": "Relying on dry mouth as an early sign."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Why is skin turgor unreliable in older patients?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It is difficult to test on a patient in bed."
            },
            {
              "id": "b",
              "text": "It changes only after several days of illness."
            },
            {
              "id": "c",
              "text": "Skin loses elasticity with age regardless of fluid."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What warning does the speaker give about thirst?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "The sensation fades with age, so refusal reassures wrongly."
            },
            {
              "id": "b",
              "text": "It is the most reliable of the classic clinical signs."
            },
            {
              "id": "c",
              "text": "It is usually reported too late to be of any use."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Which two changes made the fluid chart work?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Charting hourly, and having two staff sign it."
            },
            {
              "id": "b",
              "text": "Saying the total aloud, and weighing the jugs."
            },
            {
              "id": "c",
              "text": "Using an electronic chart, and auditing it weekly."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What reason for not drinking does the speaker say is rarely asked about?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "That the ward water tastes unpleasant to patients."
            },
            {
              "id": "b",
              "text": "That drinking makes existing nausea considerably worse."
            },
            {
              "id": "c",
              "text": "Fear of not reaching the toilet in time."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The answer is about the speaker's main point — listen past the examples to the conclusion."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-the-first-hour-in-recognising-sepsis",
    "title": "Part C — The first hour in recognising sepsis",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "sepsis recognition",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "Sepsis remains one of the great challenges in acute care, largely because its early signs are so easy to dismiss. I have spent a good deal of time reviewing cases where the outcome was poor, and what strikes me almost every time is not that somebody made a dramatic mistake. It is that a series of individually reasonable judgements were made, each of which would have been correct in a patient who did not have sepsis. The patient who is simply not quite right, slightly confused, breathing a little faster than usual, may be in the opening stages of a life-threatening response. Those three findings are the ones I would ask you to take most seriously, and they are precisely the ones least likely to appear in a handover, because none of them sounds like anything. A respiratory rate of twenty-two is written down and passed over. In our reviews it was the earliest abnormal observation in a clear majority of cases, and it is the observation most often estimated rather than counted. What I want to stress today is that the trend matters more than any single reading. A heart rate that is creeping upward over a few hours tells you more than one figure taken in isolation, and a chart that is looked at as a column of numbers hides exactly what a chart drawn as a line would show you. If you take one habit away, take that one: step back and look at the shape of the last twelve hours rather than at the most recent row. The biggest improvement in our outcomes came not from a new drug but from empowering our most junior staff to escalate concerns without waiting for permission, because they are often the first to notice subtle change. They are at the bedside more than anyone else, and they are the group most likely to have seen the patient two hours earlier and to know that something has altered. The barrier was never that they could not tell. It was that escalating felt like a claim they had to justify, and a junior who has been made to feel foolish once will hesitate the next time — and the next time may be the one that matters. So we changed the wording. Nobody now has to say I think this is sepsis. They say I am worried about this patient and I would like someone to see them, and that sentence requires no diagnosis and no defence. We also learned to trust a family member who says their relative is behaving unusually, as that observation has flagged deterioration more reliably than I once expected. I was sceptical about this and the data changed my mind. A relative who has known somebody for forty years detects a change we cannot see, because we have no baseline and they have nothing but baseline. Where a family member says this is not him, our practice now is to treat that as an abnormal observation in its own right — recorded, and escalated in the same way as a number would be. Finally, a word about the hour itself. The point of the first hour is not that a magic threshold is crossed at sixty-one minutes. It is that everything in sepsis is easier earlier, and that the commonest reason for delay in our own cases was not a difficult decision — it was waiting for one more result before acting. Two things we changed that I would recommend to any unit. The first is that our observation charts now plot the last twenty-four hours as a line rather than listing them as rows. It cost nothing beyond redesigning a piece of paper, and the number of escalations for a rising trend roughly doubled in the following quarter. The second is that we stopped using the word sepsis in the escalation criteria altogether, and replaced it with a description of what the caller had seen. Naming a diagnosis invites a debate about the diagnosis; describing an observation does not. And I would add one thing about the reviews themselves. We now include the person who first raised the concern in the discussion afterwards, whatever their grade. It is uncomfortable for everybody the first few times, and it has changed more behaviour than any guideline we have written.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker emphasise about identifying early sepsis?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "A single abnormal reading is the most reliable warning."
            },
            {
              "id": "b",
              "text": "Confusion on its own confirms the diagnosis."
            },
            {
              "id": "c",
              "text": "The trend in a patient's signs matters more."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What brought the biggest improvement in outcomes?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Junior staff escalating without waiting for permission."
            },
            {
              "id": "b",
              "text": "Adding a new antibiotic to the treatment protocol."
            },
            {
              "id": "c",
              "text": "Restricting escalation to the senior clinicians only."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "What strikes the speaker when reviewing cases with poor outcomes?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "One person had usually ignored a clear instruction."
            },
            {
              "id": "b",
              "text": "A series of individually reasonable judgements were made."
            },
            {
              "id": "c",
              "text": "The patients had presented much later than average."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What does the speaker say about the respiratory rate?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It is the least useful of the routine observations."
            },
            {
              "id": "b",
              "text": "It rises only once the patient is clearly unwell."
            },
            {
              "id": "c",
              "text": "It is often the earliest abnormal sign, and estimated."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Why was escalation difficult for junior staff before the change?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It felt like a claim they would have to justify."
            },
            {
              "id": "b",
              "text": "They were not permitted to contact senior staff directly."
            },
            {
              "id": "c",
              "text": "They saw the patients less often than other groups."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "How does the team now treat a relative's concern?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "As a reason to arrange an earlier ward round."
            },
            {
              "id": "b",
              "text": "As an abnormal observation, recorded and escalated."
            },
            {
              "id": "c",
              "text": "As useful background for the medical history."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Phrases like 'the trend matters more than' set up a comparison question. Identify the two things being compared and which the speaker values more."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-understanding-hesitancy-to-improve-vaccination-uptake",
    "title": "Part C — Understanding hesitancy to improve vaccination uptake",
    "prompt": "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "STRETCH",
    "topicTag": "vaccination uptake",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Presenter",
          "voice": "echo"
        }
      ],
      "audioScript": "When uptake of a vaccine is low, the instinctive response is to push more information at people, on the assumption that hesitancy comes from ignorance. It is a comfortable assumption, because it means the solution is something we already know how to make: another leaflet, another campaign, another set of figures. Our community work has taught me that this assumption is usually wrong and sometimes counterproductive. Most hesitant people are not short of information; they are short of trust, often because of past experiences in which the system let them down. And I mean that quite specifically. In one of the areas we worked in, the same institution that was now asking people to attend a clinic had, within living memory, closed their maternity unit, mishandled a complaint, and been the subject of a public inquiry. Nobody had forgotten. Bombarding them with statistics can actually entrench their resistance, because it feels like being lectured rather than heard, and because a person who has been treated as a problem to be corrected will reliably decline to be corrected. There is a well-described effect where a very firm correction leaves people more attached to the original belief than before, and while the size of it is argued over, I have watched it happen in a village hall more than once. What changed minds in our area was not a leaflet campaign but recruiting trusted local voices, including faith leaders, to hold open conversations. Open is the important word. These were not sessions where we presented and then took questions; they were sessions run by somebody the room already trusted, where the awkward questions came first and where we were guests. I was asked things in those rooms that I have never been asked in a clinic, including several questions I could not answer, and saying I don't know but I will find out did more for us than any of the material we had brought. Convenience mattered too, and I would put it almost level with trust. When we brought clinics to workplaces and places of worship, attendance rose noticeably. A great many people who are recorded as hesitant are not hesitant at all — they are working two shifts, or they cannot take a bus with three children, or the clinic is open exactly when they are not. We spent a long time trying to change minds that did not need changing, when what those people needed was a Saturday. I would add one caution about how this is measured. Uptake figures by postcode tell you where the gap is and nothing whatever about why, and the temptation is to treat every low-uptake area as though it had the same cause. Ours had at least three different ones within four miles. The lesson is that uptake is built on relationships and access, not on the volume of facts we broadcast. And relationships take longer than a campaign cycle, which is the real difficulty — because the work that would raise uptake next winter has to be done this summer, by people who will not get the credit for it. I want to end with the part that is hardest to hear, which concerns how we speak about the people who have not come forward. The language used internally travels, always, and a service that talks in its own meetings about hard-to-reach communities will be heard, sooner or later, by the people it is describing. They are not hard to reach. In most cases they are easy to reach and we have been reaching in the wrong direction. I would also say something about expectations, because I have seen good programmes abandoned on the basis of one disappointing quarter. Trust is rebuilt slowly and unevenly, and the first visible result is very often not an increase in uptake at all — it is that people start turning up to argue with you, which is a considerable improvement on not turning up. If your evaluation cannot recognise that as progress, it will tell you the work has failed at precisely the point where it has started to succeed.",
      "questions": [
        {
          "id": "q1",
          "stem": "According to the speaker, hesitancy mainly stems from",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "a straightforward lack of accurate information."
            },
            {
              "id": "b",
              "text": "a lack of trust shaped by past experiences."
            },
            {
              "id": "c",
              "text": "the inconvenience of clinic opening hours alone."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What does the speaker say is the effect of giving hesitant people more statistics?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It reliably persuades the majority over time."
            },
            {
              "id": "b",
              "text": "It has no effect in either direction at all."
            },
            {
              "id": "c",
              "text": "It can deepen resistance by feeling like a lecture."
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Why does the speaker mention the closed maternity unit?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "To show the distrust has specific local causes."
            },
            {
              "id": "b",
              "text": "To argue that services should not have been cut."
            },
            {
              "id": "c",
              "text": "To explain why staff were reluctant to take part."
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What does the speaker say made the community sessions work?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "The quality of the material that was handed out."
            },
            {
              "id": "b",
              "text": "Being guests in a room somebody else already had."
            },
            {
              "id": "c",
              "text": "Answering every question that was put to them."
            }
          ]
        },
        {
          "id": "q5",
          "stem": "What does the speaker say about many people recorded as hesitant?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They change their minds after a second invitation."
            },
            {
              "id": "b",
              "text": "They are more likely to attend a hospital clinic."
            },
            {
              "id": "c",
              "text": "They are not hesitant; they need a different time."
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What caution does the speaker give about uptake figures?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "They show where the gap is but never why."
            },
            {
              "id": "b",
              "text": "They are collected too infrequently to be useful."
            },
            {
              "id": "c",
              "text": "They understate uptake in the poorest areas."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Watch for a speaker calling a common assumption 'wrong' or 'counterproductive'. The tested point is usually the corrected belief, not the original assumption."
  },

  // ── OET Form 1 (canonical ingest 2026-08-04) ──
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-f1-interview-wound-care-nursing",
    "form": "form-1",
    "title": "OET Form 1 · Listening Part C — Interview: wound-care nursing",
    "prompt": "You will hear an interview. For questions 1-6, choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "interview",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Interviewer",
          "voice": "onyx"
        },
        {
          "role": "Lena Fischer",
          "voice": "alloy"
        }
      ],
      "audioScript": "Interviewer: Today I'm speaking with Lena Fischer, a community nurse who specialises in wound care. Lena, many people think of wound care as fairly routine — is that fair? Lena: I understand why, but I'd push back. A wound is rarely just a wound; it's a window into the person's whole health. Poor healing usually points to something else — diabetes, nutrition, circulation, sometimes a medication nobody has reviewed for a year. The dressing is almost the least interesting part of it. Interviewer: Can you give me an example of that? Lena: I saw a gentleman last winter with an ulcer that four different people had dressed beautifully and which had not moved in five months. It turned out he'd been sleeping in a chair since his wife died, because he couldn't manage the stairs. Nothing on the dressing trolley was ever going to fix that. Once we got a bed downstairs and got him lying flat at night, it closed in seven weeks. Interviewer: So the assessment matters more than the product. Lena: Every time. The industry would prefer you believe otherwise, because you can't sell a conversation about a staircase. Interviewer: What drew you to the field in the first place? Lena: It wasn't a grand plan. Early on I was placed with a mentor who treated wound care as detective work — she'd walk into a house and look at the kitchen before she looked at the leg — and that curiosity was infectious. I stayed because you can watch someone heal week by week, which isn't true of every specialty. In a lot of community work you're managing decline. Here you get to see something actually get better, and you get to see it with your own eyes rather than in a blood result. Interviewer: How big a factor is nutrition, really? Lena: Bigger than most people — including quite a few clinicians — appreciate. You can have the perfect dressing regime, faultlessly applied, but without enough protein the body simply has no raw materials to rebuild tissue with. I spend as much time talking about food as about dressings, and I've stopped apologising for it. Interviewer: Is that a hard conversation to have? Lena: It can be, because it sounds like a criticism, and because for some of my patients the barrier isn't willingness, it's a fixed income and a shop that's a bus ride away. So it has to be practical. Not eat more protein, but here are four things you can keep in the cupboard. Interviewer: Is there a myth you'd most like to correct? Lena: That wounds should be kept dry and open to the air. For most wounds the opposite is true — a moist environment under the right dressing heals faster, and the evidence for that has been settled for decades. But that old advice does real harm, and it's stubbornly persistent. It comes from family, from neighbours, sometimes from a scab on a childhood knee that healed fine and taught everyone the wrong lesson. Interviewer: How do you handle it when a patient believes it? Lena: I don't argue. I explain what the dressing is doing and I ask them to give it two weeks. The wound makes the argument better than I can. Interviewer: What's the hardest part of the job? Lena: The emotional side, without question. When a wound won't heal despite everything — and some won't, because the underlying disease is what it is — patients lose hope, and part of my role is holding that hope for them without making promises I can't keep. That's a very narrow line to walk. The clinical skills you can teach in a year. That balance takes years, and I'm not sure anybody ever gets it entirely right. Interviewer: And is the training there for people who want it? Lena: It's better than it was, and there are good courses now, but a lot of what you need is still learned at somebody's kitchen table rather than in a classroom. That's the honest answer. You can be taught tissue viability in a lecture theatre; you can't be taught how to ask a man why he's sleeping in a chair. Interviewer: Finally, advice for a nurse considering the specialty? Lena: Come and shadow someone first. Don't rely on the textbook picture — spend a day in the community, see the homes and the stairs and the conversations, and you'll know quickly whether it's for you.",
      "questions": [
        {
          "id": "q1",
          "stem": "What is Lena's view of the idea that wound care is routine?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "she agrees that most of the work is routine"
            },
            {
              "id": "b",
              "text": "she disagrees - a wound reflects wider health"
            },
            {
              "id": "c",
              "text": "she says it depends on the type of wound"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "Why did she stay in the specialty?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "she had always planned to work in it"
            },
            {
              "id": "b",
              "text": "her mentor encouraged her to stay"
            },
            {
              "id": "c",
              "text": "she could see patients heal over time"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "What does she say about nutrition?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "it matters more than many clinicians realise"
            },
            {
              "id": "b",
              "text": "it matters far less than the dressing used"
            },
            {
              "id": "c",
              "text": "it only affects patients with diabetes"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "The myth she most wants to correct is:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "that nutrition has barely any effect on healing"
            },
            {
              "id": "b",
              "text": "that wounds heal best kept dry and open to the air"
            },
            {
              "id": "c",
              "text": "that the work is emotionally straightforward"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "What does she find hardest?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "keeping her clinical skills up to date and current"
            },
            {
              "id": "b",
              "text": "managing complex dressing regimes correctly"
            },
            {
              "id": "c",
              "text": "supporting patients emotionally when healing is slow"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "Her advice to interested nurses is to:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "read widely first"
            },
            {
              "id": "b",
              "text": "shadow someone and see the reality"
            },
            {
              "id": "c",
              "text": "start in a hospital, not the community"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-f1-presentation-polypharmacy",
    "form": "form-1",
    "title": "OET Form 1 · Listening Part C — Presentation: polypharmacy",
    "prompt": "You will hear a presentation. For questions 1-6, choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "presentation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Dr Amara Singh",
          "voice": "alloy"
        }
      ],
      "audioScript": "Dr Amara Singh: Thank you all for coming, and thank you for giving up a lunchtime. I want to talk about polypharmacy — the use of multiple medicines — because in our older patients it has become one of the biggest, and most preventable, sources of harm we deal with. Let me start with how it happens, because nobody sets out to do it. The instinct, when someone has several conditions, is to add a medicine for each one. Every individual decision is defensible. Each guideline, taken on its own, is being followed correctly. That seems logical, and in a sense it is. But every new drug interacts with the others, and once a patient is on ten or more, the risk of an adverse reaction rises sharply — not gradually, sharply. The curve bends. And nobody owns the total, because each drug was added by a different person for a different good reason, often in a different building. What surprises people is that the single most useful thing we can do is not a new drug at all. It is deprescribing — carefully stopping the ones that are no longer helping. Not stopping everything, and not stopping abruptly; carefully, one at a time, with a plan and a review date. Yet we are strangely reluctant to do it. Part of that is practical. Deprescribing takes a long consultation, and adding takes two minutes. Part of it is that if you stop a drug and the patient deteriorates, it looks like your decision, whereas if you leave it and they deteriorate, it looks like their illness. But most of it is cultural. There is a culture in which adding feels like caring and stopping feels like giving up — and that culture harms people. Let me be concrete, because the abstract version never persuades anybody. I reviewed a patient last month who was on fourteen medicines. She was eighty-one, living alone, and had fallen three times in six weeks. When we went through the list properly, three of them were treating the side effects of the other eleven. A drug for her blood pressure was making her dizzy, so she had something for the dizziness; that made her constipated, so she had something for that. When we unpicked it over about two months, she went home on six. Her falls stopped. Now, here is what I want you to take from that. Everybody who had seen her — and there were a lot of us — had recorded the falls as being related to her age. The falls were the drugs, not her age, and that is the assumption I most want to challenge today. We blame a patient's age for what the prescription is doing, and then we prescribe something for the consequence. Age is not a mechanism. It explains nothing on its own. When something changes in an older patient, the drug chart is the first place to look, not the last. One more thing before I take questions, because I know somebody is thinking it. Is this safe? Are we not just going to destabilise people who were stable? The evidence on planned, monitored deprescribing is reassuring — the great majority of drugs stopped in these reviews are never restarted, and where something does need to come back, it comes back. The risk of stopping carefully is small and it is visible. The risk of continuing indefinitely is larger and it is invisible, which is precisely why we tolerate it. And I'd add that the patient is the one carrying that risk either way; the only difference is whether anybody chose it. So my ask of you is a simple one, and it costs nothing. At every review, don't only ask what to add. Ask what you can safely take away. Write the review date on the chart when you start something, so that somebody knows when to look at it again. And ask the patient — they very often know exactly which tablet makes them feel worse, if only we ask them the question.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does Dr Singh say about adding a medicine for each condition?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "it seems logical, but each new drug interacts and raises risk"
            },
            {
              "id": "b",
              "text": "it is always the wrong choice, whatever the conditions are"
            },
            {
              "id": "c",
              "text": "it is unavoidable whenever a patient has several conditions"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "She says the single most useful intervention is:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "prescribing safer alternatives wherever possible"
            },
            {
              "id": "b",
              "text": "adding another medicine to prevent the falls"
            },
            {
              "id": "c",
              "text": "deprescribing - stopping drugs that no longer help"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Why are clinicians reluctant to deprescribe?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "a culture where adding feels like caring and stopping like giving up"
            },
            {
              "id": "b",
              "text": "a fear of being blamed if the patient deteriorates afterwards"
            },
            {
              "id": "c",
              "text": "a lack of time during a routine review"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "In her example of the patient on fourteen medicines:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "most of the drugs were genuinely essential"
            },
            {
              "id": "b",
              "text": "three were treating side effects of the others"
            },
            {
              "id": "c",
              "text": "the patient refused to stop any of them"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "The assumption she most wants to challenge is that:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "patients dislike taking so many different tablets each day"
            },
            {
              "id": "b",
              "text": "deprescribing is unsafe in older patients"
            },
            {
              "id": "c",
              "text": "a patient's age, not their drugs, causes problems such as falls"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "Her main request to the team is to:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "at every review, ask what can safely be removed"
            },
            {
              "id": "b",
              "text": "always involve a pharmacist in the review"
            },
            {
              "id": "c",
              "text": "reduce every older patient to six medicines"
            }
          ]
        }
      ]
    }
  },
  // ── OET Form 2 (canonical ingest 2026-08-04) ──
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-f2-interview-de-escalation-in-mental-health",
    "form": "form-2",
    "title": "OET Form 2 · Listening Part C — Interview: de-escalation in mental health",
    "prompt": "You will hear an interview. For questions 1-6, choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "interview",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Interviewer",
          "voice": "onyx"
        },
        {
          "role": "Grace Okoye",
          "voice": "alloy"
        }
      ],
      "audioScript": "Interviewer: Grace, when a patient becomes agitated, what's the first thing you do? Grace: Check myself, honestly. My own anxiety is contagious — if I tense up, they feel it before I've said anything, and then we've got two frightened people in the room instead of one. So I slow my breathing before I say a word. Interviewer: That's not what most people expect to hear. Grace: No, and I think that's because people expect a technique. They want a form of words, a phrase they can learn. But de-escalation is about ninety per cent presence and ten per cent script. Tone and space matter far more than the words do — you could say almost the right thing in the wrong voice and it'll go badly, and you can say something quite clumsy warmly and it'll be fine. Interviewer: You mentioned space. Grace: Yes, and this is the part I'd teach first if I could only teach one thing. Never corner someone. I stand at an angle rather than face-on, because face-on is a confrontation posture in almost every culture I've worked in, and I make sure they can see the door. Not that I'm between them and it — that they can see it. A person who feels trapped will fight; a person who feels they could leave rarely needs to. Interviewer: Does that ever feel unsafe for you? Grace: It's the opposite. The times I've felt genuinely unsafe were when somebody had been backed into a corner, usually with the best of intentions, by people trying to keep them in the room. Interviewer: What about talking them round? Grace: I don't try to win an argument, and that took me a long time to learn. If they say something that isn't true — and in my work that happens most days — correcting them just adds fuel. It turns the conversation into a contest they can't afford to lose. So I acknowledge the feeling behind it instead. I can see this has frightened you. Because the feeling is real even when the belief isn't, and the feeling is the thing that's driving the behaviour in front of me. Interviewer: Is there a risk of seeming to agree? Grace: There's a difference between agreeing with the content and recognising the distress. I don't say yes, there are cameras in your flat. I say I can see how frightening that would be. Nobody I've worked with has ever been confused by that distinction. Interviewer: What's a common mistake you see? Grace: Rushing. Silence feels unbearable to staff — thirty seconds of it feels like five minutes — so they fill it with questions, and that pressure escalates things when it was already settling on its own. Comfortable silence is genuinely the hardest thing to teach. New staff will do everything else right and then talk straight through the moment where it was about to be over. Interviewer: Does any of this transfer outside mental health? Grace: All of it. I've taught it to emergency-department staff, to receptionists, to people who work in housing offices, and the principles don't change at all — the person in front of you is frightened, they feel they have no control, and everything you do either gives some of that back or takes more away. The setting changes the details. It doesn't change the person. Interviewer: What about when it doesn't work? Grace: Sometimes it doesn't, and I think it's important to say that out loud, because staff who believe de-escalation always works conclude, when it fails, that they personally got it wrong. Occasionally somebody is too unwell in that moment to be reached by anybody, and the skill then is recognising it early rather than persisting and making it worse. Interviewer: And how do you recover afterwards? Grace: We debrief as a team, ideally the same shift. Not to assign blame, and not as a formal investigation — the moment it becomes that, nobody says anything honest. It's because carrying these moments alone is how people burn out, and because the person who looked calm in the room is often the one who needs it most.",
      "questions": [
        {
          "id": "q1",
          "stem": "Grace's first action when a patient becomes agitated is to:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "check and calm her own state"
            },
            {
              "id": "b",
              "text": "call for assistance"
            },
            {
              "id": "c",
              "text": "use a set form of words"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "In her view, de-escalation is mostly about:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the exact words used"
            },
            {
              "id": "b",
              "text": "presence, tone and space"
            },
            {
              "id": "c",
              "text": "speed of response"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Why does she stand at an angle with the door visible?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "to keep an eye on the other patients"
            },
            {
              "id": "b",
              "text": "so the patient does not feel trapped"
            },
            {
              "id": "c",
              "text": "so that she can leave quickly if needed"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "When a patient says something untrue, she:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "corrects them clearly and calmly"
            },
            {
              "id": "b",
              "text": "ignores the statement completely"
            },
            {
              "id": "c",
              "text": "acknowledges the feeling behind it"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "The common mistake she identifies is:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "rushing and filling silences"
            },
            {
              "id": "b",
              "text": "standing too far away"
            },
            {
              "id": "c",
              "text": "speaking too quietly"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "Why does the team debrief afterwards?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "to establish who was at fault during the shift"
            },
            {
              "id": "b",
              "text": "to stop staff carrying it alone and burning out"
            },
            {
              "id": "c",
              "text": "because hospital policy requires it"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-f2-presentation-antimicrobial-resistance",
    "form": "form-2",
    "title": "OET Form 2 · Listening Part C — Presentation: antimicrobial resistance",
    "prompt": "You will hear a presentation. For questions 1-6, choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "presentation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Dr Rahul Mehta",
          "voice": "onyx"
        }
      ],
      "audioScript": "Dr Rahul Mehta: Antimicrobial resistance is often called a future threat, a problem for the twenty-forties, something for our successors to solve. I want to start by saying plainly that it is already here and it is killing people now, in this hospital, this year. We have patients on this site today for whom the first-line drug does not work, and a smaller number for whom the second-line drug does not work either. That is not a projection. That is the ward round. Here is what makes it a difficult problem to think about. Every unnecessary antibiotic doesn't just fail one patient — it teaches bacteria to survive, on behalf of everyone. The organism that learns in your patient is not confined to your patient. That's the uncomfortable truth of it: the harm is invisible and it is shared, and neither of those things is true of the harms we are trained to notice. If I give the wrong dose of insulin, I see the result within the hour and so does everybody else. If I give an unnecessary antibiotic, nothing happens at all, to anyone, that anyone can see. The cost lands somewhere else, on somebody else's patient, months later. Now, where does it actually come from? The biggest driver isn't the exotic case — it isn't the intensive-care patient on four agents, which is the picture people have in their heads. It's the everyday one. The probably-viral chest infection given an antibiotic just in case, because it's Friday and the patient is worried. The ten-day course when five days would do, because ten was what the last person wrote. The broad-spectrum drug when a narrow one would work perfectly well, because the broad one is what we reach for when we haven't thought about it. None of those feels reckless in the moment. Not one of them would look wrong in a case note. And that is exactly why it is dangerous: a problem made entirely of reasonable decisions is a problem nobody can see themselves causing. Let me deal with the objection I hear most, which is that this is a hospital problem and the real driver is agriculture. There is something in that, and I'd support anybody campaigning on it. But it is also the most comfortable thing a prescriber can believe, because it puts the problem somewhere we have no power. We do have power over the prescription written on this ward this afternoon, and the studies that have looked at hospital stewardship programmes find real, measurable reductions in resistant organisms within two to three years. Not modelled reductions. Counted ones. I want to be clear that my message is not never prescribe. Antibiotics save lives daily and under-treating sepsis kills people faster than resistance does. My message is: prescribe as if the drug were a limited resource that you are rationing for your children's future — because that is precisely what it is. There is no new class coming to rescue us in the next decade; the pipeline is close to empty and has been for years. There is one more thing I would ask you to carry away, and it concerns the conversation rather than the drug. A great deal of unnecessary prescribing happens because we believe the patient expects an antibiotic, and the studies that have asked patients directly find that what they usually want is an explanation and a clear idea of when to come back. We reach for the prescription to end a conversation we think will be difficult, and it is frequently a conversation the patient would have been content with. A delayed prescription works well here — take this only if you are no better in three days — and it halves the number actually taken without any increase in complications. Practically, three things. Take a good culture before you start, not afterwards, because afterwards it tells you very little. Review at forty-eight hours and either stop or narrow — put it in the plan on day one so that somebody is obliged to look. And document why you chose what you chose. That last one gets the most resistance in this room, so let me defend it. The documentation isn't bureaucracy, and it isn't for the auditors. It forces the thinking. In the ten seconds it takes to write why, you will occasionally find that you don't have a reason — and that is the prescription worth stopping.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does he say about antimicrobial resistance?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "it is a distant future problem"
            },
            {
              "id": "b",
              "text": "it is already causing deaths now"
            },
            {
              "id": "c",
              "text": "it affects only rare cases"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "Why is the harm of unnecessary antibiotics shared?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "resistance spreads and affects everyone"
            },
            {
              "id": "b",
              "text": "the cost falls on the hospital budget"
            },
            {
              "id": "c",
              "text": "patients swap drugs between themselves"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "The biggest driver of resistance is:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "rare and unusual infections"
            },
            {
              "id": "b",
              "text": "demand from patients"
            },
            {
              "id": "c",
              "text": "everyday over-prescribing"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "Why are the everyday decisions dangerous?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "they do not feel reckless at the time"
            },
            {
              "id": "b",
              "text": "the drugs themselves are costly"
            },
            {
              "id": "c",
              "text": "patients rarely finish the course"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "His message to prescribers is to:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "never to prescribe an antibiotic at all"
            },
            {
              "id": "b",
              "text": "prescribe as if rationing a limited resource"
            },
            {
              "id": "c",
              "text": "always to use broad-spectrum drugs"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "Why does he say documentation helps?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "it satisfies the annual auditors"
            },
            {
              "id": "b",
              "text": "it forces the prescriber to think"
            },
            {
              "id": "c",
              "text": "it speeds up the prescribing"
            }
          ]
        }
      ]
    }
  },
  // ── OET Form 3 (canonical ingest 2026-08-05) ──
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-f3-interview-living-with-chronic-pain",
    "form": "form-3",
    "title": "OET Form 3 · Listening Part C — Interview: living with chronic pain",
    "prompt": "You will hear an interview. For questions 1-6, choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "interview",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Interviewer",
          "voice": "onyx"
        },
        {
          "role": "Fiona Clark",
          "voice": "alloy"
        }
      ],
      "audioScript": "Interviewer: Fiona, you work with people who've had pain for years. What's the first thing you try to change? Fiona: Their expectation that we'll make it disappear. And I want to be careful how I say that, because it can sound brutal. But for chronic pain — pain that's been there for months or years — chasing a cure often does more harm than the pain itself. Endless appointments, another scan, another opinion, stronger drugs, each one promising an end that doesn't come. Every one of those is a small disappointment, and they stack up. The shift we're trying to make is from getting rid of it to living well alongside it. Interviewer: That sounds, on the face of it, like giving up. Fiona: Patients often hear it that way at first, and I completely understand why. Somebody has just told them the thing they came for isn't available. But it's the opposite of giving up. Accepting that the pain may stay is what frees people to rebuild a life — to go back to work, to see friends, to book a holiday — instead of putting everything on hold in a waiting room, waiting for a fix that the evidence says isn't coming. Interviewer: How long does that shift usually take? Fiona: Months, often. It isn't a conversation, it's a process, and people go back and forth. Someone will be doing well and then read about a new treatment and disappear for six months, and that's fine — they come back, and usually they come back readier. Interviewer: Where do painkillers fit into this? Fiona: They have a place, but a much smaller one than most people expect, and a smaller one than we believed twenty years ago. Strong opioids in particular often lose their effect over time while the side effects stay exactly where they are — the constipation, the fog, the low mood, sometimes an increased sensitivity to pain itself. I've seen patients function better on less medication, not more, and that is deeply counterintuitive to them. It sounds like I'm taking something away. Interviewer: How do you approach that? Fiona: Very slowly, and never as a condition of being helped. If somebody feels their medication is being held hostage, the conversation is over. Interviewer: So what actually helps? Fiona: Movement, mostly. And I know how that sounds. It feels wrong to everybody — if it hurts, surely you should rest? That's what we told people for decades. But muscles that aren't used get weaker, and weaker muscles hurt more, and hurting more leads to less movement. It's a loop, and gentle, graded activity is what breaks it. Graded is the important word. Not a gym membership. Ten minutes, most days, at a level that doesn't cause a flare, and then eleven. Interviewer: And you mentioned mood earlier. Fiona: Yes, and that's the other half. Pain and low mood feed each other in both directions — pain lowers mood, and low mood measurably increases pain. So treating one without the other means fighting with one hand. That isn't saying the pain is in anybody's head. It's saying the two systems share the same wiring. Interviewer: Do families find it as difficult as patients? Fiona: Often harder. A partner who has spent five years driving somebody to appointments has an enormous amount invested in the idea that one of them will work, and being told we're changing direction can feel like being told those five years were wasted. So I try to get families into the room early, because a plan that the household doesn't believe in doesn't survive the first bad week. Interviewer: Is this a hard message to sell? Fiona: Very. People come wanting a stronger tablet and they leave with a walking plan, and I'd be lying if I said nobody was ever angry about that. The trick — and it took me years — is not to dismiss their pain. It's absolutely real, and most of them have spent years being quietly told it isn't. You hold onto that while offering a different kind of hope. The moment they feel doubted, nothing else you say lands.",
      "questions": [
        {
          "id": "q1",
          "stem": "According to Fiona, the first thing she tries to change is the patient's:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "expectation of a cure"
            },
            {
              "id": "b",
              "text": "choice of medication"
            },
            {
              "id": "c",
              "text": "daily routine"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "Why does she say chasing a cure can be harmful?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "it is expensive for the patient and the service"
            },
            {
              "id": "b",
              "text": "it leads to endless appointments and stronger drugs"
            },
            {
              "id": "c",
              "text": "doctors dislike being asked about it"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "When patients first hear her message, they often feel:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "relieved that someone believes them"
            },
            {
              "id": "b",
              "text": "angry with their own GP"
            },
            {
              "id": "c",
              "text": "that they are being told to give up"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What does she say about strong opioids?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "they often lose effect while side effects remain"
            },
            {
              "id": "b",
              "text": "they work better the longer they are taken"
            },
            {
              "id": "c",
              "text": "they should never be used at all"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Why does she recommend movement despite the pain?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "it distracts the patient"
            },
            {
              "id": "b",
              "text": "unused muscles weaken and hurt more"
            },
            {
              "id": "c",
              "text": "it heals the original injury"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What does she call the 'trick' in her work?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "prescribing a stronger tablet at every appointment"
            },
            {
              "id": "b",
              "text": "insisting that the pain is imagined"
            },
            {
              "id": "c",
              "text": "offering different hope without dismissing the pain"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-f3-presentation-health-literacy",
    "form": "form-3",
    "title": "OET Form 3 · Listening Part C — Presentation: health literacy",
    "prompt": "You will hear a presentation. For questions 1-6, choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "presentation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Dr Amara Sithole",
          "voice": "onyx"
        }
      ],
      "audioScript": "Dr Amara Sithole: I want to talk this afternoon about something that costs us a great deal and that almost never appears in an incident report. We tend to blame patients when they don't follow advice. Non-compliant, we call them, or non-adherent if we're being modern about it — as if it were a character flaw, a failure of will. But look closely at any of those cases and you very often find something much simpler: they didn't understand what we told them. Let me give you the figures, because they're worse than people expect. Studies suggest that patients forget up to half of what's said in a consultation within minutes of leaving the room, and misremember a good part of the rest. Not days later. Minutes. And the harder the news, the more is lost, because anxiety takes up the space that memory needs. So the sicker and more frightened the patient, the less of your explanation survives the corridor. Why does that happen? Partly because we speak in a code. Take this on an empty stomach. Watch for adverse effects. Your results were unremarkable. Every one of those feels perfectly plain to us, and every one is genuinely ambiguous to somebody who is frightened, unwell, and hearing it for the first time. I have had a patient tell me she stopped a tablet because it was making her tired, and she had been told to watch for adverse effects, and tired was what she watched. She did exactly what we asked. The instinct at this point is to hand over a leaflet. I want to be careful here, because some leaflets are good. But most patient information is written well above the reading level of the people who most need it, and the ones who need it most are the least likely to say so. A leaflet that isn't read reassures the writer far more than it helps the reader, and it lets us feel that the information was given when it wasn't received. Now, the single most useful technique I know costs nothing and adds about a minute. Ask the patient to tell you, in their own words, what they're going to do. Not do you understand — everybody says yes to that, because saying no feels like admitting something. Instead: just so I know I've explained it clearly, how will you take this at home? Notice where that puts the burden. If they can't say it back, you haven't finished explaining. It reframes the failure as ours rather than theirs, which is where it usually belongs, and it does so without anybody having to be embarrassed. And it takes a minute — far less than the return visit, the wasted medicine, or the harm that a misunderstanding does when it isn't caught. A word about interpreters and about family members, since it comes up whenever I give this talk. Everything I have just described is harder, not easier, through a third person, and teach-back is the only reliable way I know of finding out whether the explanation survived the journey. Ask the patient to tell you back, through the interpreter, what they will do. If it comes back wrong, the fault is almost never the interpreter's — it is that we gave them a sentence that could not be carried. One practical caution about how you phrase it. Do not say tell me what I just said, which turns it into a test of the patient, and do not say repeat that back to me. Put the uncertainty on yourself: I want to be sure I have explained this properly. That single change is the difference between a technique people find patronising and one they barely notice you are using. I have watched both versions in the same clinic on the same afternoon, and the wording is the whole of it. I'll finish with what this is not. The point is not to speak down to people, and it is not to assume that anyone in front of you is slow. Some of the worst misunderstandings I have seen involved colleagues as patients. The point is to check that the bridge we think we've built actually reaches the other side — and the only way to find that out is to ask somebody to walk across it while you're still standing there.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker say about calling patients 'non-compliant'?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "it wrongly blames patients who often didn't understand"
            },
            {
              "id": "b",
              "text": "it accurately describes how these patients behave"
            },
            {
              "id": "c",
              "text": "it is a formal clinical diagnosis"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "How much of a consultation do patients often forget?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "none of it"
            },
            {
              "id": "b",
              "text": "up to half within minutes"
            },
            {
              "id": "c",
              "text": "only the drug names"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "What is the problem with most patient leaflets?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "they are far too short to be useful"
            },
            {
              "id": "b",
              "text": "they are usually out of date"
            },
            {
              "id": "c",
              "text": "they are written above the reader's level"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "Why does the speaker dislike asking 'do you understand?'",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "patients say yes regardless"
            },
            {
              "id": "b",
              "text": "it takes too long to ask"
            },
            {
              "id": "c",
              "text": "it can sound rude"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "What does the teach-back technique reframe?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the cost as something the patient has to bear"
            },
            {
              "id": "b",
              "text": "the failure as the clinician's, not the patient's"
            },
            {
              "id": "c",
              "text": "the diagnosis itself, not the advice"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What is the speaker's main message?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "to explain everything more slowly and simply to everyone"
            },
            {
              "id": "b",
              "text": "to hand out more written leaflets to patients"
            },
            {
              "id": "c",
              "text": "to check that understanding has actually reached the patient"
            }
          ]
        }
      ]
    }
  }
];
