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
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Article on shared decision-making",
    "prompt": "Read the text and choose the answer which best fits the writer's meaning.",
    "difficulty": "STRETCH",
    "topicTag": "communication",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Shared decision-making is often presented as simply offering patients options. In practice, the harder skill is eliciting what matters to the person in front of you — and resisting the pull to steer them toward the choice you would make. The evidence suggests clinicians consistently overestimate how well they already do this."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the writer suggest is the harder part of shared decision-making?",
          "answer": "b",
          "options": [
            {
              "id": "b",
              "text": "Drawing out and respecting the patient's own priorities"
            },
            {
              "id": "a",
              "text": "Listing the available options"
            },
            {
              "id": "c",
              "text": "Recommending the clinician's preferred choice"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "What does the writer imply about clinicians' self-assessment?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "They generally judge it accurately"
            },
            {
              "id": "a",
              "text": "They tend to overrate their own skill at it"
            },
            {
              "id": "c",
              "text": "They underrate their ability"
            }
          ]
        }
      ]
    },
    "guidanceNote": "Distinguish what the writer states from what is merely mentioned as a common view."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Evidence, experience and the bedside",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "STRETCH",
    "topicTag": "evidence-based-practice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "There is a tired argument in medicine that pits evidence against experience, as if a clinician must pledge loyalty to one camp. I find the framing unhelpful. A trial tells me what happened, on average, to a thousand people who are not my patient; my experience tells me how this particular person in front of me tends to respond. Neither claim is complete on its own. The danger I see most often is not too little evidence but too much certainty about how to apply it, with guidelines quoted as though they were commandments rather than carefully hedged averages. Yet I would not return to the era when senior opinion was unchallengeable, because experience untested by data is simply memory flattering itself. The honest position, uncomfortable as it is, sits in the friction between the two."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Which statement best captures the writer's view of evidence and experience?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Clinical experience should override published evidence."
            },
            {
              "id": "c",
              "text": "Published guidelines should be followed without exception."
            },
            {
              "id": "b",
              "text": "Both are necessary and neither is sufficient alone."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "By saying experience untested by data is 'memory flattering itself', the writer is",
          "answer": "b",
          "options": [
            {
              "id": "b",
              "text": "warning that unexamined experience can be self-deceiving."
            },
            {
              "id": "a",
              "text": "praising the reliability of senior clinical opinion."
            },
            {
              "id": "c",
              "text": "arguing that data is irrelevant at the bedside."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The writer criticises 'too much certainty' but also rejects unchallenged opinion. When an author balances two cautions, the answer usually names the middle position, not either extreme."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Knowing a patient over time",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "CORE",
    "topicTag": "continuity-of-care",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Modern services are built for access, and on its own terms the achievement is real: a patient can now be seen quickly by whoever is free. I would not trade that speed away lightly. But something is lost when nobody in particular knows you. The clinician meeting you for the first time reads your notes as a stranger reads a map, accurately enough, while missing the territory that only repeated visits reveal. A subtle change in how a familiar patient walks into the room can say more than a page of results, and that signal is invisible to someone seeing them once. I am not nostalgic for slower, less available care; demand has changed and so must we. Yet I worry that in optimising for the quick appointment we have quietly decided that knowing someone over years is a luxury rather than a form of safety."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the writer's central concern about modern services?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "That patients now wait too long to be seen."
            },
            {
              "id": "a",
              "text": "That faster access has come at the cost of clinicians knowing patients over time."
            },
            {
              "id": "c",
              "text": "That clinical notes are too inaccurate to be trusted."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer regards long-term familiarity with a patient as",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "an outdated luxury that services can no longer afford."
            },
            {
              "id": "c",
              "text": "less informative than a thorough reading of the notes."
            },
            {
              "id": "b",
              "text": "a genuine contributor to safe care."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The writer repeatedly affirms the value of access ('I would not trade that speed away lightly') while regretting a trade-off. The opinion lies in what is being lost, not in opposing speed."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Practising to protect ourselves",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "STRETCH",
    "topicTag": "defensive-practice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Every clinician I know orders the occasional test less for the patient than for the imagined courtroom. I will not pretend I am innocent of this; the fear of being blamed is real and the system does little to soothe it. But I have stopped calling defensive medicine a personal weakness. It is what reasonable people do when the consequences of missing something are career-ending and the consequences of over-investigating are invisible. The harm, though, is not invisible to the patient, who absorbs the extra scans, the incidental findings and the anxiety we have outsourced onto them to calm ourselves. I do not think we will fix this by lecturing doctors about courage. The behaviour will change only when the system stops punishing honest uncertainty more harshly than it punishes overreaction."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "How does the writer explain the existence of defensive medicine?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "As a rational response to a system that punishes missing things."
            },
            {
              "id": "b",
              "text": "As a simple failure of individual courage among doctors."
            },
            {
              "id": "c",
              "text": "As a practice that causes no real harm to patients."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer believes defensive practice will change mainly when",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "doctors are reminded to be braver in their decisions."
            },
            {
              "id": "b",
              "text": "the system stops penalising uncertainty more than overreaction."
            },
            {
              "id": "c",
              "text": "patients accept the burden of extra tests without complaint."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The writer admits personal involvement but reframes the cause as systemic. Beware the distractor that blames individual character, which the writer explicitly rejects."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Rethinking the value of clinical handover",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "STRETCH",
    "topicTag": "clinical-handover",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "For many years, handover at the change of shift was treated as little more than an administrative ritual — a hurried recitation of names, bed numbers and pending tasks that the outgoing team was glad to be rid of. It is tempting to dismiss it as dead time, yet a growing body of practice suggests the opposite: the handful of minutes spent transferring responsibility is among the most safety-critical of the day. What changed was less the procedure than the way clinicians came to understand it. Rather than a simple data transfer, handover began to be seen as a moment of shared sense-making, in which two teams briefly hold the same picture of a patient before one of them lets go. Structured formats have helped, imposing a predictable order that reduces the chance of an important detail slipping through. But structure is not the whole story. The most effective handovers I have observed are not the most rigidly scripted; they are the ones in which the receiving clinician feels able to interrupt, to query an assumption, to say that something does not quite add up. A format that silences such questions in the name of efficiency may tidy the encounter while quietly defeating its purpose. The lesson, then, is not that we need more paperwork, but that we should protect the conditions under which genuine questions can still be asked."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What change does the writer identify as central to handover becoming safer?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "The introduction of additional documentation requirements."
            },
            {
              "id": "c",
              "text": "A reduction in the number of minutes spent on each handover."
            },
            {
              "id": "a",
              "text": "A shift in how clinicians understood the purpose of handover."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer's main reservation about highly scripted formats is that they",
          "answer": "b",
          "options": [
            {
              "id": "b",
              "text": "can discourage the questions that make handover effective."
            },
            {
              "id": "a",
              "text": "take longer to complete than informal verbal handovers."
            },
            {
              "id": "c",
              "text": "are too difficult for receiving clinicians to memorise."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Part C rewards attention to opinion and nuance, not just facts. The writer praises structure but qualifies it — note where a 'but' or 'yet' signals the real position before choosing."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Running on empty in the caring professions",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "CORE",
    "topicTag": "compassion-fatigue",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "When colleagues describe compassion fatigue, the language often suggests a personal failing, as though the worn-out nurse simply cared too much or managed her feelings too poorly. I resist that reading. The numbness so many of us recognise is rarely a defect of character; more often it is a predictable response to caring intensely within systems that give nothing back. Resilience training has its place, yet I have watched it become a convenient way to relocate an organisational problem onto the individual. Telling an exhausted team to breathe more mindfully, while the rota stays brutal, is not support but evasion. None of this means clinicians bear no responsibility for their own wellbeing, but the heaviest lever sits with those who design the work, not those who endure it."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the writer believe is the main cause of compassion fatigue?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Individual clinicians caring too much and coping poorly."
            },
            {
              "id": "b",
              "text": "The conditions of work in unsupportive systems."
            },
            {
              "id": "c",
              "text": "A lack of mindfulness and breathing techniques."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer's attitude towards resilience training is that it",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "is the most effective remedy currently available."
            },
            {
              "id": "c",
              "text": "has no value whatsoever in clinical settings."
            },
            {
              "id": "b",
              "text": "can wrongly shift blame from the system to the individual."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The writer says resilience training 'has its place' yet criticises its misuse. Distinguish a measured criticism from outright rejection ('no value whatsoever')."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Sitting with not knowing",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "STRETCH",
    "topicTag": "clinical-uncertainty",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Patients come to us hoping for certainty, and much of our training is an elaborate apparatus for supplying it. Yet the longer I practise, the more I distrust the confident voice, my own included. A great deal of medicine is the careful management of not knowing: a probable diagnosis, a likely response, an outcome we frame in ranges rather than promises. I used to think admitting uncertainty would frighten people or undermine their trust. Experience has taught me almost the opposite. When I say honestly that I am not yet sure but here is how we will find out, patients tend to relax, because they sense they are being told the truth. False confidence, by contrast, eventually collapses, and the trust it borrowed must be repaid with interest. Uncertainty, handled openly, is not a weakness in the relationship; it is often what holds it together."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What has experience taught the writer about admitting uncertainty to patients?",
          "answer": "b",
          "options": [
            {
              "id": "b",
              "text": "It tends to strengthen trust because patients sense honesty."
            },
            {
              "id": "a",
              "text": "It usually frightens patients and damages their trust."
            },
            {
              "id": "c",
              "text": "It should be hidden behind a confident manner."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer's view of projecting false confidence is that it",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "is a reliable way to reassure anxious patients."
            },
            {
              "id": "b",
              "text": "ultimately costs more trust than it gains."
            },
            {
              "id": "c",
              "text": "is necessary when a diagnosis is not yet clear."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The writer reverses an initial belief ('I used to think... Experience has taught me almost the opposite'). Make sure your answer reflects the later, revised view, not the abandoned one."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The arithmetic patients actually hear",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "STRETCH",
    "topicTag": "risk-communication",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Tell a patient that a drug halves their risk and they will reach for the prescription pad themselves. Tell them the same fact differently, that it lowers their chance from two in a hundred to one in a hundred, and the enthusiasm cools. Both statements are true, which is precisely the problem. I have come to think that the way we phrase risk is not a neutral wrapping around the numbers but part of the message itself, shaping a decision before the patient has consciously made one. This is not an accusation that colleagues deceive; most of us reach for the more dramatic figure without noticing. Yet good intentions do not undo the effect. If I genuinely want a patient to choose for themselves, I owe them the plainest, least theatrical version of the numbers, even when a more flattering framing would nudge them toward what I privately think is right."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the writer's main point about how risk is communicated?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "Patients should be given only the most encouraging version of the figures."
            },
            {
              "id": "c",
              "text": "Statistics are too confusing to share with patients at all."
            },
            {
              "id": "a",
              "text": "The wording of a risk shapes the decision, even when the facts are identical."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer believes that clinicians who use dramatic framing usually",
          "answer": "b",
          "options": [
            {
              "id": "b",
              "text": "do so unintentionally, yet still influence the decision."
            },
            {
              "id": "a",
              "text": "do so deliberately to deceive their patients."
            },
            {
              "id": "c",
              "text": "have no real effect on the patient's choice."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The writer explicitly denies an accusation of deceit ('this is not an accusation that colleagues deceive'). Don't choose a distractor that assumes bad intent the writer has ruled out."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The lost art of letting people finish",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "FOUNDATION",
    "topicTag": "listening-skills",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "I once timed how long I let patients speak before interrupting, and the result embarrassed me. It was a matter of seconds. We are trained to gather information efficiently, and interrupting feels like keeping the consultation on track. Yet the studies suggest that patients who are allowed to finish rarely ramble; most have a short, organised story to tell if we simply let them tell it. When I bit my tongue and waited, the consultation did not run over as I had feared, and the real reason for the visit often surfaced only in that uninterrupted final sentence. Listening, I have realised, is not the passive thing it sounds. It is an active discipline, and one I am still, after many years, learning to practise."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What did the writer learn from allowing patients to finish speaking?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Patients usually ramble and waste the appointment time."
            },
            {
              "id": "b",
              "text": "Patients tell a focused story and reveal the real concern."
            },
            {
              "id": "c",
              "text": "Consultations always run far over their allotted time."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer describes listening as",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "an effortless and naturally passive activity."
            },
            {
              "id": "c",
              "text": "a habit that slows consultations down unnecessarily."
            },
            {
              "id": "b",
              "text": "an active skill that requires ongoing practice."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The writer overturns the fear that listening wastes time. Match the answer to the discovered outcome, and note 'not the passive thing it sounds' signals an active view."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The quiet costs of finding more",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "STRETCH",
    "topicTag": "overdiagnosis",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Screening campaigns are sold on a simple, appealing logic: find disease early and you save lives. Some of the time this is true, and I would not wish to discourage a frightened patient from a test that genuinely helps. But the arithmetic is rarely as clean as the posters suggest. Better imaging detects abnormalities that would never have caused harm, and once a finding has a name it is very hard to leave it alone. The patient who arrived feeling well leaves feeling marked, and the follow-up itself carries its own small risks. I am not against early detection; I am against pretending that detection is free. What troubles me is how seldom we tell people that doing nothing, watchfully, is sometimes the most skilful thing a clinician can offer."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the writer's central concern about screening?",
          "answer": "b",
          "options": [
            {
              "id": "b",
              "text": "That the harms of finding harmless abnormalities are downplayed."
            },
            {
              "id": "a",
              "text": "That screening tests are always unnecessary and should stop."
            },
            {
              "id": "c",
              "text": "That imaging technology is not yet sensitive enough."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer's view of choosing not to investigate is that it",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "is always negligent and exposes patients to risk."
            },
            {
              "id": "a",
              "text": "can be a legitimate and skilful clinical choice."
            },
            {
              "id": "c",
              "text": "should be the default response to every finding."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Watch the repeated qualifier 'I am not against early detection'. The writer targets how screening is presented, not screening itself; don't pick the absolute option."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The screen between us",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "CORE",
    "topicTag": "technology-in-care",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "I am not one of those clinicians who pines for the age of paper. Electronic records have caught errors that would once have slipped through, and I would not give that safety back. Still, something has shifted in the consulting room that the efficiency figures do not capture. I spend a measurable part of every appointment looking at a monitor rather than a face, and patients have learned to wait politely while I type. The tool meant to free my attention has, in practice, divided it. None of this is an argument against the technology itself, which is largely sound; it is an argument about how thoughtlessly we have arranged it. A device that improves the record while degrading the encounter has solved one problem by creating another we are slower to measure."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the writer's overall position on electronic records?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They are a mistake and paper systems were better."
            },
            {
              "id": "c",
              "text": "They have entirely improved the quality of consultations."
            },
            {
              "id": "b",
              "text": "They bring real benefits but are poorly arranged around the patient."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "By saying the technology has 'solved one problem by creating another we are slower to measure', the writer suggests that",
          "answer": "b",
          "options": [
            {
              "id": "b",
              "text": "the gain in record-keeping comes with a less visible cost."
            },
            {
              "id": "a",
              "text": "the harm to the encounter is easy to quantify."
            },
            {
              "id": "c",
              "text": "the technology has no measurable benefits at all."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Phrases like 'I am not one of those... who pines for paper' signal the writer accepts the technology. The criticism is about how it is used, not whether to use it."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — What a good team really shares",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "CORE",
    "topicTag": "teamwork-culture",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Hospitals love to celebrate teamwork, usually with posters of smiling staff and slogans about pulling together. I have worked in teams that fit the poster and were nonetheless quietly dysfunctional. What distinguishes the genuinely good ones, in my experience, is not warmth but candour: the junior who feels able to say 'I think that dose is wrong' to the consultant without rehearsing the sentence for an hour first. Friendliness can even disguise the problem, because a team that prizes getting along may bury the disagreements that keep patients safe. I am not arguing that morale does not matter; a miserable team frays. But if I had to choose, I would take a slightly tense group where people speak up over a cheerful one where everyone defers. Safety lives in the awkward sentences nobody wants to say."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the writer consider the most important feature of a good team?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "A warm and friendly atmosphere among staff."
            },
            {
              "id": "b",
              "text": "The freedom to speak up and voice disagreement."
            },
            {
              "id": "c",
              "text": "Strong loyalty that avoids open conflict."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer suggests that an emphasis on friendliness can",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "guarantee that patients are kept safe."
            },
            {
              "id": "c",
              "text": "be the only thing that genuinely matters."
            },
            {
              "id": "b",
              "text": "conceal the disagreements that protect patients."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The writer concedes 'morale does matter' before ranking candour higher. A concession is not the main claim; identify what the writer would choose 'if I had to choose'."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — What we do with our mistakes",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "CORE",
    "topicTag": "learning-from-error",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "We talk a great deal now about learning from error, and the phrase has acquired a reassuring, almost therapeutic tone. I welcome the shift away from naming and shaming, which only ever taught people to hide. But I have watched the new language curdle into its own kind of avoidance. A team can hold a flawless review, fill the form correctly, log the action points and feel absolved, while nothing about the work actually changes. Learning is not the meeting; it is the altered behaviour that should follow it, and that part is far harder and far less often achieved. I am not asking for a return to blame. I am asking that we stop mistaking the documentation of reflection for reflection itself, because a patient harmed twice by the same lapse will not be comforted to know the first incident was thoroughly discussed."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the writer's main criticism of current approaches to learning from error?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "That reviews are completed but rarely lead to changed behaviour."
            },
            {
              "id": "b",
              "text": "That blaming individuals remains far too common."
            },
            {
              "id": "c",
              "text": "That teams hold too few formal reviews of incidents."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer's attitude towards the move away from 'naming and shaming' is that it",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "was a mistake that should be reversed."
            },
            {
              "id": "b",
              "text": "is welcome, but has produced a new form of avoidance."
            },
            {
              "id": "c",
              "text": "has completely solved the problem of hidden errors."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The writer supports the no-blame shift yet identifies a new failure within it. A 'welcome but...' structure means the criticism qualifies the approval rather than rejecting it."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — When empathy becomes a clinical skill",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "CORE",
    "topicTag": "empathy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "For years I treated empathy as a personality trait, something a clinician either possessed or did not. That assumption was comfortable, but it quietly excused those of us who struggled to connect, as though warmth were beyond our control. The evidence now points the other way. Empathy, it seems, behaves less like a fixed gift and more like a technique that can be rehearsed, observed and refined. I do not mean the performance of feeling, which patients detect instantly, but the disciplined habit of pausing before responding. Critics worry that teaching empathy reduces it to a checklist, and they are not entirely wrong, yet a clumsy attempt to understand still beats a polished silence. What I have come to believe is that the skill is not in feeling more, but in showing, reliably, that one is trying to understand at all."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the writer's main point about empathy?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It is an innate trait that cannot be taught."
            },
            {
              "id": "c",
              "text": "It is best expressed through a fixed checklist."
            },
            {
              "id": "b",
              "text": "It can be developed as a learnable, practised skill."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer's attitude towards critics who fear empathy becomes a checklist is best described as",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "partly sympathetic but ultimately unconvinced by their objection."
            },
            {
              "id": "b",
              "text": "completely dismissive of any concern they raise."
            },
            {
              "id": "c",
              "text": "in full agreement that teaching empathy is harmful."
            }
          ]
        }
      ]
    },
    "guidanceNote": "Note the qualifier 'they are not entirely wrong, yet': the writer concedes a point but disagrees overall. Don't let a partial concession be misread as full agreement."
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Whose decision is it anyway",
    "prompt": "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    "difficulty": "CORE",
    "topicTag": "patient-autonomy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Respecting a patient's autonomy has become an unquestioned good, and rightly so after centuries of doctors deciding what was best for people without asking them. But I have begun to notice how the word can be used to avoid the harder parts of the job. Handing someone a list of options and stepping back is not autonomy; it can be abandonment dressed in respectful language. A frightened patient asking 'what would you do?' is not surrendering their independence, and refusing to answer in the name of neutrality strikes me as a quiet cruelty. Real respect, I think, means offering a recommendation while leaving the door genuinely open to refusal. Autonomy was never meant to be a reason for the expert in the room to fall silent."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What is the writer's main criticism of how autonomy is sometimes applied?",
          "answer": "a",
          "options": [
            {
              "id": "b",
              "text": "That patients are given too little freedom to choose."
            },
            {
              "id": "a",
              "text": "That clinicians use it as an excuse to withhold guidance."
            },
            {
              "id": "c",
              "text": "That doctors still decide everything for patients."
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer believes that genuine respect for autonomy involves",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "withholding any personal recommendation to stay neutral."
            },
            {
              "id": "c",
              "text": "deciding the best course and persuading the patient to accept it."
            },
            {
              "id": "b",
              "text": "making a recommendation while honouring the patient's right to refuse."
            }
          ]
        }
      ]
    },
    "guidanceNote": "The writer supports autonomy in principle but attacks one distortion of it. Identify the specific misuse being criticised rather than assuming the writer opposes the concept."
  },

  // ── OET Form 1 (canonical ingest 2026-08-04) ──
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "OET Form 1 · Reading Part C — The quiet skill of listening",
    "prompt": "Read the text and answer questions 1-8. Choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "communication",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Ask most patients what they remember about a good clinician, and they rarely mention a diagnosis or a procedure. They remember being listened to. It is a curious feature of modern healthcare that the skill patients value most is the one we train for least. Curricula devote years to pathology and pharmacology, and a handful of afternoons to what is dismissively called communication skills - as though listening were a soft add-on rather than the instrument through which almost everything else is delivered. Part of the problem is that listening looks like doing nothing. In a system that measures productivity by throughput, a clinician who sits quietly while a patient finds their words can appear to be wasting time. Yet the evidence points the other way. Studies of consultations show that when clinicians resist the urge to interrupt - and on average they interrupt within eleven seconds - patients disclose more, and disclose it sooner. The history, still the source of most diagnoses, improves. Paradoxically, the pause that seems to cost time saves it, because the alternative is the second appointment, the missed detail, the treatment aimed at the wrong target. There is also a defensive reflex at work. Listening fully means hearing distress you may not be able to fix, and there is a real temptation to retreat into tasks - to check a figure, to reach for the prescription pad - precisely when a patient becomes upset. The retreat is understandable, but patients read it accurately as avoidance. What they need in that moment is not a solution but acknowledgement: the sense that their fear has been registered by another human being. None of this is an argument against clinical knowledge. A warm clinician who is wrong is no comfort. The point is that knowledge and attention are not competitors for the same time; they are partners. The most efficient consultation is not the fastest but the one that gathers the right information - and the right information arrives most readily when the patient feels heard. If listening is a skill, it can be taught and practised. It begins with something almost embarrassingly simple: not speaking. It continues with the discipline of letting a silence sit long enough for the patient to fill it. And it ends, ideally, with a short summary handed back - so the thing that's really worrying you is - which checks that we have understood and tells the patient, unmistakably, that we were listening all along."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What do patients most remember about a good clinician?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "being listened to"
            },
            {
              "id": "b",
              "text": "an accurate diagnosis"
            },
            {
              "id": "c",
              "text": "a skilful procedure"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The writer finds it curious that:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "curricula ignore pharmacology"
            },
            {
              "id": "b",
              "text": "the most valued skill is the least trained"
            },
            {
              "id": "c",
              "text": "patients dislike procedures"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Listening can look like doing nothing because:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "patients rarely speak"
            },
            {
              "id": "b",
              "text": "clinicians are untrained"
            },
            {
              "id": "c",
              "text": "it produces no measurable throughput"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "The detail that clinicians interrupt within eleven seconds suggests that:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "interrupting is a strong, common habit"
            },
            {
              "id": "b",
              "text": "consultations run too long"
            },
            {
              "id": "c",
              "text": "patients speak too slowly"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "By the retreat into tasks the writer means:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "ending the appointment early"
            },
            {
              "id": "b",
              "text": "turning to activities to avoid a patient's distress"
            },
            {
              "id": "c",
              "text": "delegating to colleagues"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "A warm clinician who is wrong is no comfort is included to:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "criticise friendly clinicians"
            },
            {
              "id": "b",
              "text": "show warmth is unnecessary"
            },
            {
              "id": "c",
              "text": "affirm that knowledge still matters"
            }
          ]
        },
        {
          "id": "q7",
          "stem": "In the writer's view, knowledge and attention are:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "partners that work together"
            },
            {
              "id": "b",
              "text": "competitors for limited time"
            },
            {
              "id": "c",
              "text": "equally overrated"
            }
          ]
        },
        {
          "id": "q8",
          "stem": "The purpose of the short summary at the end is to:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "create a written record"
            },
            {
              "id": "b",
              "text": "check understanding and show the patient was heard"
            },
            {
              "id": "c",
              "text": "shorten the consultation"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "OET Form 1 · Reading Part C — Rethinking resilience",
    "prompt": "Read the text and answer questions 1-8. Choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "workforce",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "For a decade, resilience has been healthcare's favourite prescription for its own exhaustion. Staff are sent on resilience workshops, taught breathing exercises and urged to practise self-care, in the hope of stemming a rising tide of burnout. The intention is kind. The logic, however, deserves scrutiny, because it quietly relocates the problem from the system to the individual. Burnout, as originally defined, is not a personal weakness but a response to chronic workplace stressors that have not been managed - excessive workload, lack of control, insufficient reward, and a sense of unfairness. When an organisation answers these conditions with mindfulness classes, it treats a structural injury with a personal remedy. Worse, it can imply that staff who still struggle simply did not try hard enough to be resilient. A nurse working short-staffed through a third consecutive weekend does not lack resilience; she is being asked to absorb a failure that is not hers to fix. This is not to dismiss individual coping, which has its place. A clinician who sleeps well and has support outside work is genuinely better protected. But protection is not prevention. Handing someone an umbrella is sensible; it is not a substitute for repairing the roof. The evidence increasingly suggests that the interventions which actually reduce burnout are organisational: adequate staffing, manageable rotas, a real voice in decisions, and leaders who remove obstacles rather than add initiatives. There is a subtler cost to the resilience narrative, too. It can make staff reluctant to speak up. If exhaustion is framed as a personal shortfall, admitting to it feels like confessing inadequacy - and the people most in need of help become the least likely to ask. A culture that prized honest reporting of strain, treating it as data about the system rather than a verdict on the person, would surface problems earlier, while they are still cheap to solve. None of this lets individuals off the hook entirely; we each carry some responsibility for our own wellbeing. But the balance has tilted too far. Before we ask staff to become more resilient, we might ask why we keep designing work that demands so much resilience simply to survive."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "The writer's main concern about the focus on resilience is that it:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "uses breathing exercises that do not work"
            },
            {
              "id": "b",
              "text": "is disliked by staff"
            },
            {
              "id": "c",
              "text": "shifts responsibility from the system to the individual"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "Burnout is originally defined as:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "a response to unmanaged workplace stressors"
            },
            {
              "id": "b",
              "text": "a personal weakness"
            },
            {
              "id": "c",
              "text": "a passing tiredness"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "The umbrella and roof comparison argues that:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "individual effort is pointless"
            },
            {
              "id": "b",
              "text": "protection is not the same as prevention"
            },
            {
              "id": "c",
              "text": "coping can replace organisational change"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "The interventions the writer says actually reduce burnout are:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "mindfulness and self-care"
            },
            {
              "id": "b",
              "text": "resilience workshops"
            },
            {
              "id": "c",
              "text": "organisational changes such as adequate staffing"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "The subtler cost of the resilience narrative is that it:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "makes staff reluctant to admit strain"
            },
            {
              "id": "b",
              "text": "is expensive to run"
            },
            {
              "id": "c",
              "text": "lowers clinical skill"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "Honest reporting of strain should be treated as:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "grounds for discipline"
            },
            {
              "id": "b",
              "text": "data about the system"
            },
            {
              "id": "c",
              "text": "a verdict on the person"
            }
          ]
        },
        {
          "id": "q7",
          "stem": "None of this lets individuals off the hook entirely shows the writer:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "blames individuals for burnout"
            },
            {
              "id": "b",
              "text": "rejects all personal coping"
            },
            {
              "id": "c",
              "text": "accepts individuals have some responsibility"
            }
          ]
        },
        {
          "id": "q8",
          "stem": "The closing question implies that:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "work is often designed to demand too much resilience"
            },
            {
              "id": "b",
              "text": "staff should simply be more resilient"
            },
            {
              "id": "c",
              "text": "resilience cannot be taught"
            }
          ]
        }
      ]
    }
  },
  // ── OET Form 2 (canonical ingest 2026-08-04) ──
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "OET Form 2 · Reading Part C — The trouble with 'just in case'",
    "prompt": "Read the text and answer questions 1-8. Choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "clinical-reasoning",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Few phrases are as quietly costly in medicine as just in case. It sounds prudent - an extra test, a precautionary scan, a night's admission to be safe - and in any single instance the logic is hard to argue with. Who would refuse a test that might catch something serious? Yet multiplied across a system, this instinct produces a great deal of harm that never enters the mind of the person ordering the test. The harm is real but diffuse. Every test has a false-positive rate, and a positive result in a low-risk patient is more likely to be wrong than right. That wrong result triggers more tests, more anxiety, sometimes an invasive procedure with its own risks - a cascade set off by a finding that was never going to matter. The scan ordered just in case finds an incidental shadow; the shadow leads to a biopsy; the biopsy leads to a complication. The original symptom, meanwhile, was benign all along. Defensive practice is often blamed on fear of litigation, and that fear is not irrational. But studies suggest the bigger driver is discomfort with uncertainty - the sense that doing something feels safer than doing nothing, even when watchful waiting is wiser. Patients can share this instinct, and a clinician who explains why a test is unnecessary must spend more time and emotional effort than one who simply orders it. The path of least resistance runs towards over-investigation. None of this means caution is wrong. The point is that safe is not the same as more. A genuinely safe decision weighs the harm of missing something against the harm of finding things better left unfound. Framed that way, the courageous act is sometimes to explain, to reassure, and to wait - carrying the small, real risk of restraint rather than offloading it onto the patient as a cascade they never agreed to."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "Why does the writer call just in case costly?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "tests are expensive to run"
            },
            {
              "id": "b",
              "text": "it produces diffuse harm the orderer doesn't see"
            },
            {
              "id": "c",
              "text": "patients dislike extra tests"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "A positive test in a low-risk patient is:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "more likely to be wrong than right"
            },
            {
              "id": "b",
              "text": "usually accurate"
            },
            {
              "id": "c",
              "text": "always repeated"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "The cascade the writer describes refers to:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "a series of tests and procedures set off by one finding"
            },
            {
              "id": "b",
              "text": "a worsening of the original disease"
            },
            {
              "id": "c",
              "text": "a spread of infection"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "What does the writer say is the bigger driver of defensive practice?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "fear of litigation"
            },
            {
              "id": "b",
              "text": "patient demand"
            },
            {
              "id": "c",
              "text": "discomfort with uncertainty"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Why does the path of least resistance lead to over-investigation?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "explaining why a test is unneeded takes more effort"
            },
            {
              "id": "b",
              "text": "tests are quicker than examinations"
            },
            {
              "id": "c",
              "text": "guidelines require it"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "The writer argues that safe is:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the same as doing more"
            },
            {
              "id": "b",
              "text": "not the same as doing more"
            },
            {
              "id": "c",
              "text": "impossible to achieve"
            }
          ]
        },
        {
          "id": "q7",
          "stem": "What does the writer call the courageous act?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "ordering every possible test"
            },
            {
              "id": "b",
              "text": "referring to a specialist"
            },
            {
              "id": "c",
              "text": "explaining, reassuring and waiting"
            }
          ]
        },
        {
          "id": "q8",
          "stem": "The phrase a cascade they never agreed to suggests the patient:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "consented to the risks"
            },
            {
              "id": "b",
              "text": "bore risks they did not choose"
            },
            {
              "id": "c",
              "text": "requested the investigations"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "OET Form 2 · Reading Part C — What checklists can and can't do",
    "prompt": "Read the text and answer questions 1-8. Choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "patient-safety",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "When a surgical checklist was shown to cut deaths and complications, the response in some quarters was almost giddy: here at last was a simple, cheap fix for the messiness of human error. Airlines used checklists; now medicine would too. The enthusiasm was understandable, and the checklist is genuinely a fine tool. But the story that grew around it - that a laminated list can engineer safety on its own - has done nearly as much harm as good. A checklist works because of what happens around it, not because of the ticks. Its real function is to flatten hierarchy for a moment: to make it acceptable for the most junior person in the room to say we haven't confirmed the patient's allergies. Where teams treat it as a genuine pause - everyone stops, everyone listens - outcomes improve. Where it is rushed through by one person reading aloud while others carry on working, it changes nothing, and may even give false comfort. The same piece of paper produces opposite results depending on the culture it lands in. This is the part that resists copying. You can distribute a checklist overnight; you cannot distribute the willingness to be interrupted, or a senior clinician's grace in being corrected by a trainee. Those are cultural achievements, built slowly, and a checklist imposed on a culture that lacks them will be completed dutifully and mean nothing. Organisations that saw no benefit often concluded the tool had failed, when what had failed was the assumption that a tool could replace the relationships that make it work. The lesson generalises. Every safety fix that looks purely technical turns out, on inspection, to depend on something human - on people feeling able to speak, and others willing to hear. The paper is the easy part. The hard part, as ever, is the room."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What was the initial reaction to the surgical checklist?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "scepticism about its cost"
            },
            {
              "id": "b",
              "text": "excitement that it was a simple fix"
            },
            {
              "id": "c",
              "text": "concern that it copied airlines"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "According to the writer, a checklist works because of:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the number of items ticked"
            },
            {
              "id": "b",
              "text": "what happens around it in the team"
            },
            {
              "id": "c",
              "text": "its legal status"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "The checklist's real function is to:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "create a written record"
            },
            {
              "id": "b",
              "text": "speed up the operation"
            },
            {
              "id": "c",
              "text": "make it acceptable for anyone to raise a concern"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "When does a checklist change nothing?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "when it is rushed through while others work"
            },
            {
              "id": "b",
              "text": "when it is too long"
            },
            {
              "id": "c",
              "text": "when it is read by a senior clinician"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "Why does the writer say the key part resists copying?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the paper is hard to reproduce"
            },
            {
              "id": "b",
              "text": "the culture behind it can't simply be distributed"
            },
            {
              "id": "c",
              "text": "checklists are patented"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "Organisations that saw no benefit often wrongly concluded that:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "the tool itself had failed"
            },
            {
              "id": "b",
              "text": "their staff were incompetent"
            },
            {
              "id": "c",
              "text": "the checklist was too short"
            }
          ]
        },
        {
          "id": "q7",
          "stem": "The writer says every technical safety fix depends on:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "sufficient funding"
            },
            {
              "id": "b",
              "text": "something human - people speaking and being heard"
            },
            {
              "id": "c",
              "text": "regular auditing"
            }
          ]
        },
        {
          "id": "q8",
          "stem": "By the hard part, as ever, is the room, the writer means:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the physical operating theatre"
            },
            {
              "id": "b",
              "text": "the human relationships and culture"
            },
            {
              "id": "c",
              "text": "the equipment available"
            }
          ]
        }
      ]
    }
  },
  // ── OET Form 3 (canonical ingest 2026-08-05) ──
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "OET Form 3 · Reading Part C — The fifteen-minute appointment",
    "prompt": "Read the text and answer questions 1-8. Choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "clinical-practice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "There is a quiet arithmetic that governs modern medicine, and its basic unit is roughly fifteen minutes. That is the length of the standard appointment in much of general practice, and almost everything about the way care is delivered has arranged itself around that figure. It was never chosen because fifteen minutes is the right amount of time to understand a human being's suffering; it was chosen because it allows a certain number of patients to be seen in a day. The number came first, and the medicine has been folded to fit it. Much of the time this works, or appears to. A sore throat, a repeat prescription, a blood-pressure check - these fit comfortably inside the quarter-hour, and a brisk, focused consultation is exactly what the patient wants. The trouble begins with everything that does not announce itself so tidily. The patient who mentions, hand already on the door, that they have been feeling low. The elderly man whose four separate complaints are really one, if only there were time to join them up. The worried parent whose real question arrives only after the small talk the clock does not permit. These are not edge cases; they are the substance of medicine, and they do not keep to time. What gets lost is not usually the diagnosis - a competent clinician can still spot the dangerous thing - but the space in which a patient feels heard enough to say what actually brought them. Rushed people disclose less, and disclosure is where much of the real work lives. The doctor senses this too, and carries the low-grade guilt of the unfinished conversation from room to room across a day. None of this is an argument that longer is always better; a slow consultation can wander and reassure no one. It is an argument that time is not a luxury bolted onto good care but part of its very structure - and that a system which treats minutes as the thing to be saved may be quietly discarding the thing it exists to provide."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What does the writer say determined the fifteen-minute length?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "how many patients could be seen in a day"
            },
            {
              "id": "b",
              "text": "research into what makes care good"
            },
            {
              "id": "c",
              "text": "what patients asked for"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "According to the writer, which came first?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the medicine, then the number"
            },
            {
              "id": "b",
              "text": "the number, then the medicine folded to fit it"
            },
            {
              "id": "c",
              "text": "neither, they arose together"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "Which problem is said to fit the fifteen minutes comfortably?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "a patient who feels low"
            },
            {
              "id": "b",
              "text": "four complaints that are really one"
            },
            {
              "id": "c",
              "text": "a repeat prescription"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "The 'hand already on the door' examples are used to show:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "the real substance of medicine, which does not keep to time"
            },
            {
              "id": "b",
              "text": "rare, unusual cases"
            },
            {
              "id": "c",
              "text": "patients who waste time"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "What does the writer say is usually NOT lost?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the patient's trust"
            },
            {
              "id": "b",
              "text": "the diagnosis"
            },
            {
              "id": "c",
              "text": "the doctor's patience"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "Why does disclosure matter, according to the writer?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "it saves time later"
            },
            {
              "id": "b",
              "text": "it protects the doctor legally"
            },
            {
              "id": "c",
              "text": "it is where much of the real work lives"
            }
          ]
        },
        {
          "id": "q7",
          "stem": "What does the writer say the doctor carries between rooms?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "the guilt of the unfinished conversation"
            },
            {
              "id": "b",
              "text": "detailed written notes"
            },
            {
              "id": "c",
              "text": "the next patient's file"
            }
          ]
        },
        {
          "id": "q8",
          "stem": "The writer's overall argument is that time is:",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "a luxury added on to good care"
            },
            {
              "id": "b",
              "text": "part of the very structure of good care"
            },
            {
              "id": "c",
              "text": "always better in larger amounts"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "OET Form 3 · Reading Part C — Resilience is not the answer",
    "prompt": "Read the text and answer questions 1-8. Choose the answer (A, B or C) which fits best.",
    "difficulty": "STRETCH",
    "topicTag": "workforce",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Whenever healthcare staff are surveyed and found to be exhausted, demoralised, and leaving in numbers, a familiar remedy is wheeled out: resilience. There are workshops on it, modules, mindfulness apps distributed by the very organisations whose rotas made the mindfulness necessary. The message, however kindly meant, is that the problem lies in the individual's capacity to cope, and the solution is to help them cope better. It is worth pausing on how strange this is. We would not respond to a ward with a broken ventilation system by teaching the staff to breathe more efficiently. Resilience, as a personal quality, is real and valuable. People who can steady themselves under pressure are a gift to any team. The sleight of hand is not in praising resilience but in prescribing it - in taking a systemic failure and relocating it inside the worker, so that burnout becomes a sign of insufficient character rather than of impossible conditions. Once framed that way, the exhausted nurse is subtly at fault, and the institution is off the hook. If only she had attended the wellbeing session. The evidence points elsewhere. Burnout tracks not with weak personalities but with things done to people: excessive workload, lack of control over one's day, unfair treatment, and values in conflict with the job. These are features of systems, not flaws in souls, and they respond to systemic things - safe staffing, workable rotas, a say in decisions, and the simple experience of being listened to when you raise a concern. The cruelty of the resilience narrative is that it asks the depleted to generate, from their own reserves, the strength the organisation has failed to provide. It privatises a public failing. None of this means individuals are powerless, or that supporting wellbeing is wrong. It means that wellbeing offered instead of change is not support; it is a way of looking after the appearance of care while leaving its causes untouched. The honest response to a broken system is to mend the system."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "stem": "What remedy does the writer say is offered to exhausted staff?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "higher pay"
            },
            {
              "id": "b",
              "text": "longer holidays"
            },
            {
              "id": "c",
              "text": "resilience training"
            }
          ]
        },
        {
          "id": "q2",
          "stem": "The broken-ventilation analogy is used to show that:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "it is strange to fix a system problem by changing the individual"
            },
            {
              "id": "b",
              "text": "hospitals need better air quality"
            },
            {
              "id": "c",
              "text": "staff breathe inefficiently"
            }
          ]
        },
        {
          "id": "q3",
          "stem": "What does the writer call the 'sleight of hand'?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "praising resilience"
            },
            {
              "id": "b",
              "text": "prescribing resilience for a systemic failure"
            },
            {
              "id": "c",
              "text": "denying that resilience exists"
            }
          ]
        },
        {
          "id": "q4",
          "stem": "When burnout is framed as weak character, who is 'off the hook'?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "the individual worker"
            },
            {
              "id": "b",
              "text": "the patient"
            },
            {
              "id": "c",
              "text": "the institution"
            }
          ]
        },
        {
          "id": "q5",
          "stem": "According to the evidence cited, burnout tracks with:",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "things done to people, such as workload and lack of control"
            },
            {
              "id": "b",
              "text": "weak personalities"
            },
            {
              "id": "c",
              "text": "a lack of training"
            }
          ]
        },
        {
          "id": "q6",
          "stem": "What kind of solutions does the writer say the causes respond to?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "individual mindfulness"
            },
            {
              "id": "b",
              "text": "systemic changes such as safe staffing"
            },
            {
              "id": "c",
              "text": "resilience apps"
            }
          ]
        },
        {
          "id": "q7",
          "stem": "The writer says the resilience narrative 'privatises' a:",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "personal weakness"
            },
            {
              "id": "b",
              "text": "hospital budget"
            },
            {
              "id": "c",
              "text": "public failing"
            }
          ]
        },
        {
          "id": "q8",
          "stem": "What does the writer say wellbeing offered instead of change really is?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "a way of preserving the appearance of care while ignoring its causes"
            },
            {
              "id": "b",
              "text": "genuine support"
            },
            {
              "id": "c",
              "text": "a waste of money"
            }
          ]
        }
      ]
    }
  },
  // ── TWENTY-ONE FULL-LENGTH READING PART C ITEMS · ported 3 September 2026 ──
  //
  // The 21 items above breach the measured law on three axes: 51-405 words
  // (law 653-836), 2 questions in fifteen of them (law 8), and THREE options on
  // all 78 questions where OET gives FOUR. The option count is the one nothing
  // in the repo measured — gate:length measures length, gate:distractor measured
  // option LENGTHS — so it passed every gate we had. D4 now counts them.
  //
  // These 21 are 753-835 words, eight questions each, four options on all 168,
  // and the key is the uniquely longest option on 4 of 168 (2%) against a 25%
  // law. Text, stems, answers and options are verbatim from
  // _handoffs/AlmiOET_PartC_21_items.json; `prompt` and `topicTag` are the two
  // fields it does not carry and are noted in the PR.
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Twenty minutes that is not only about glasses",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "twenty-minutes-that-is-not-only-about-glasses",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Most people book a sight test because their arms have got shorter, and most of what I find is a refractive error that a lens will correct. That is the transaction, that is what the window advertises, and it is not what makes the appointment worth the time. In twenty minutes I look at the only blood vessels in the body that can be seen without cutting into it, at an optic nerve head that reports on pressure inside the skull, and at a retina that shows diabetic change before a patient has any symptom at all. Almost nobody who books the appointment knows this, and my profession has been curiously bad at telling them.\n\nReferral is where the difficulty concentrates. A raised pressure reading, a suspicious disc, a small haemorrhage at the back of one eye: they each sit in a wide zone between plainly normal and plainly urgent, and what happens next depends less on the finding than on the pathway available to me. In one region I can arrange a repeat measurement and see the patient again within a month. In another I have two options, refer or do not, and the referral disappears into a queue I cannot see.\n\nThe setting is the part outsiders find hardest to understand. Most sight tests in this country happen in a shop, funded partly by a fee that does not cover the appointment and partly by the sale of spectacles afterwards. That arrangement pays for near-universal access to a clinical examination and I would not casually dismantle it. It also means the clinical part of my day is subsidised by the retail part, and that a practice under commercial pressure feels that pressure in the length of the appointment rather than in anything a patient could point to.\n\nWhat this does to practice is subtler than critics assume. I have never known a colleague sell a lens they believed unnecessary. What I have seen, and have done, is finish an examination that raised a small question and not go back for the extra test, because the room was booked and the answer was probably nothing. Probably nothing is right about ninety-five times in a hundred. The profession's quality problem lives entirely in the other five, and it is a problem of minutes rather than of ethics.\n\nChildren are the group for whom the present arrangement works least well, and it is the failure I would fix first. A child does not report blurred vision, because a child has no comparison; the world has always looked like that. Amblyopia treated at four does well and treated at nine mostly does not, and the window closes silently. School screening exists in some places and not in others, and where it exists it is often among the first things cut. Meanwhile the sight test is free for children in this country and a substantial proportion of them never have one.\n\nThe equipment argument receives more attention than it deserves. Retinal imaging is now in most practices and it is genuinely useful — it documents, it compares across years, it shows a patient the thing I am describing. What it does not do is decide. An image of a disc is not an opinion about a disc, and a practice that has bought the camera has not thereby acquired the judgement to read what it produces. I have seen more anxiety created by photographs shown without interpretation than by any finding I have ever explained in words.\n\nThere is a conversation I have learned to hold differently. When I find something that needs watching but not treating, I used to say there was nothing to worry about, which is what the patient wants and is not what I mean. I now say what I am watching, why I am watching it, what would make me act, and when I want to see them again. It takes about ninety seconds longer, and the patients who come back are the ones I asked to come back rather than the ones who became frightened.\n\nIf the profession wants to be understood as clinical rather than retail, that argument will not be won by saying so. It will be won by what happens in the room when there is nothing to sell — the referral written carefully, the child seen without a fee, the ninety seconds spent explaining a finding to somebody who came in for reading glasses. Those things happen constantly and they are invisible, including to the people they happen to, which is a failure of explanation and also, I think, a kind of integrity."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what does the writer say about the sight test?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It reveals conditions the patient has no symptoms of"
            },
            {
              "id": "b",
              "text": "It is booked too late by most people who need it"
            },
            {
              "id": "c",
              "text": "It has become shorter as demand has increased"
            },
            {
              "id": "d",
              "text": "It cannot detect disease without additional equipment"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"they\" refer to?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the readings taken during the test"
            },
            {
              "id": "b",
              "text": "the three uncertain findings"
            },
            {
              "id": "c",
              "text": "the pathways available in each region"
            },
            {
              "id": "d",
              "text": "the queues into which referrals go"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, what is said about the commercial setting?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "It should be replaced by a publicly funded service"
            },
            {
              "id": "b",
              "text": "It leads directly to unnecessary sales of spectacles"
            },
            {
              "id": "c",
              "text": "It is misunderstood by regulators who inspect practices"
            },
            {
              "id": "d",
              "text": "It funds access but shows up in appointment length"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "What is identified as the real quality problem?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Colleagues who sell lenses they know are unnecessary"
            },
            {
              "id": "b",
              "text": "Practices that do not own retinal cameras"
            },
            {
              "id": "c",
              "text": "Examinations left incomplete when time is short"
            },
            {
              "id": "d",
              "text": "The fee paid for each sight test performed"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, why are children a particular concern?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They are charged a fee that deters their families"
            },
            {
              "id": "b",
              "text": "They do not report a problem they have always had"
            },
            {
              "id": "c",
              "text": "They are examined too often in the early school years"
            },
            {
              "id": "d",
              "text": "They respond less well to treatment than adults do"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph"],
          "stem": "In the sixth paragraph, what is said about retinal imaging?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It records and compares but does not interpret"
            },
            {
              "id": "b",
              "text": "It has replaced examination in most practices"
            },
            {
              "id": "c",
              "text": "It is too expensive for smaller practices to buy"
            },
            {
              "id": "d",
              "text": "It reduces the number of referrals that are made"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "What has the writer changed in how he explains findings?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "He now writes the explanation down for the patient"
            },
            {
              "id": "b",
              "text": "He asks a colleague to confirm before speaking"
            },
            {
              "id": "c",
              "text": "He avoids naming conditions the patient may look up"
            },
            {
              "id": "d",
              "text": "He says what would make him act"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what does the writer conclude?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "The profession should reduce its dependence on retail income"
            },
            {
              "id": "b",
              "text": "The public should be told more about what a sight test covers"
            },
            {
              "id": "c",
              "text": "The clinical work is real but goes unnoticed by everyone"
            },
            {
              "id": "d",
              "text": "Regulation should distinguish clinical from commercial practice"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The foot at the end of the appointment",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-foot-at-the-end-of-the-appointment",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A diabetic foot ulcer that ends in amputation almost always began as something a person could have shown somebody in under a minute. That sentence is the whole of my professional argument, and I have never found a way of saying it that produces action proportionate to it. Every part of the pathway is known. The screening interval is defined, the risk categories are defined, the treatment of an ulcer is defined, and the outcome remains that a substantial number of people lose part of a limb to a process that took months and was visible throughout.\n\nAnnual screening records three things: sensation, circulation, and whether the foot has ulcerated before. These place a patient in a category, and the category sets how often they are seen. The categories themselves are sound. What they do not capture is the practical question of who is going to look at this foot between appointments, which for a person who cannot reach their own feet and lives alone is the question that decides everything else.\n\nNeuropathy is the part patients understand least, and I blame the way we describe it. We say the nerves are damaged, and the patient hears that something is broken in a general way. What has actually happened is more specific and more dangerous: the alarm has been disconnected. A stone in the shoe, a seam, a new pair of shoes worn for one afternoon — none of these announces itself. The injury is the same injury anybody would sustain. What is missing is the pain that would have made anybody else stop walking.\n\nFootwear is where I lose most arguments, and I have some sympathy with the other side. Prescribed footwear works when it is worn, and adherence is poor for reasons that are not mysterious: it is heavy, it is conspicuous, and for a woman of seventy who has worn one kind of shoe her whole adult life it is a daily public statement about being ill. I have watched patients choose the shoe over the foot, and I no longer treat that as irrational. It is a trade between two things they value, made by the person who has to live inside the result.\n\nThe self-examination advice we give is close to useless in the form it is usually given. \"Check your feet daily\" is issued to people who cannot bend, cannot see well, and live by themselves. What works, where anybody has bothered to arrange it, is a mirror fixed at floor level, or a relative with a standing weekly job, or in one case a neighbour who was asked and was glad to have been. None of that is clinical. All of it is the difference between an ulcer found on Tuesday and an ulcer found in three weeks.\n\nThere is an argument that this is a resource problem and I want to complicate it. More podiatrists would help and I would take them tomorrow. But the delay I meet most often is not access to me — it is the fortnight between a patient noticing something and telling anybody, and that fortnight is made of embarrassment, of not wanting to make a fuss, and of a belief that a foot is not the sort of thing one telephones about. No increase in staffing touches that. A telephone number a person believes they are permitted to use might.\n\nAmputation figures are quoted at every conference I attend, and I have come to think we quote them badly. A number that large produces fatalism rather than urgency, and it describes an endpoint many months downstream of anything a clinician can act on. The figure I would put in front of a commissioner instead is the interval: how long, in this service, between a patient noticing a change and a trained person looking at it. That number is small, actionable, and almost nobody measures it.\n\nThe people who find these ulcers early are rarely clinicians. A district nurse changing a dressing on the other leg. A carer helping with socks. A daughter who noticed a stain on a sheet. None of them was ever told what to look for, and none has a route to me that does not run through an appointment they cannot book on somebody else's behalf. I have never worked in a service that trained the people who actually see the feet, and I cannot construct an argument against doing it.\n\nWhat I want a patient to leave with is not a leaflet about diabetes. It is one specific instruction attached to one specific person: if this looks different, telephone this number, and you will not be wasting anybody's time. The last clause is the one that matters and it is the one we leave out. I have had patients apologise to me for an ulcer that was going to cost them a toe, and the apology tells you exactly where the delay came from."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what is said about the pathway?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It is known in every part and the outcome persists"
            },
            {
              "id": "b",
              "text": "It varies too much between the regions to be effective"
            },
            {
              "id": "c",
              "text": "It has been revised without evidence to support it"
            },
            {
              "id": "d",
              "text": "It is followed closely in most services already"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"These\" refer to?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the annual screening appointments"
            },
            {
              "id": "b",
              "text": "the three findings recorded"
            },
            {
              "id": "c",
              "text": "the categories assigned to patients"
            },
            {
              "id": "d",
              "text": "the intervals between reviews"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, how is neuropathy described?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "As damage that makes the skin break more easily"
            },
            {
              "id": "b",
              "text": "As a condition that patients exaggerate when reporting"
            },
            {
              "id": "c",
              "text": "As a disconnected alarm rather than broken tissue"
            },
            {
              "id": "d",
              "text": "As the least important of the three screening findings"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph","writer"],
          "stem": "What is the writer's view of patients who reject prescribed footwear?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "They have not been shown how to wear it correctly"
            },
            {
              "id": "b",
              "text": "They would accept it if the evidence were explained"
            },
            {
              "id": "c",
              "text": "They are usually those with the mildest disease"
            },
            {
              "id": "d",
              "text": "Their choice is a trade between things they value"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what is said about daily foot checks?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They are performed more often than clinicians assume"
            },
            {
              "id": "b",
              "text": "They should be replaced by more frequent appointments"
            },
            {
              "id": "c",
              "text": "The advice fails unless somebody arranges the practicalities"
            },
            {
              "id": "d",
              "text": "They detect ulcers later than a weekly check would"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph"],
          "stem": "In the sixth paragraph, where is the main delay located?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "In the waiting time for a podiatry appointment"
            },
            {
              "id": "b",
              "text": "In the referral from primary care to the service"
            },
            {
              "id": "c",
              "text": "In the time taken to obtain prescribed footwear"
            },
            {
              "id": "d",
              "text": "Between noticing a change and telling anyone"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "Why does the writer object to quoting amputation figures?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "They produce fatalism and describe a distant endpoint"
            },
            {
              "id": "b",
              "text": "They are collected inconsistently between services"
            },
            {
              "id": "c",
              "text": "They understate the number of patients affected"
            },
            {
              "id": "d",
              "text": "They are disputed by the commissioners who see them"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph"],
          "stem": "In the final paragraph, which part does the writer say is omitted?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "The name of the clinician who will see the patient"
            },
            {
              "id": "b",
              "text": "The assurance that calling is not a nuisance"
            },
            {
              "id": "c",
              "text": "The description of what an early ulcer looks like"
            },
            {
              "id": "d",
              "text": "The interval at which the foot should be checked"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The patient who cannot be asked",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-patient-who-cannot-be-asked",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Every consultation in my profession has two parties and only one of them can speak. That single fact shapes more of veterinary practice than any technical difference from human medicine. The history is entirely second-hand, filtered through somebody who has been watching the animal for a fortnight and who may or may not have noticed the thing that matters. The examination has to carry weight that a conversation would otherwise carry. And the decision at the end belongs to a person who is not the patient.\n\nCost is the part of this the public most misunderstands and the part we are worst at raising early. It enters almost every plan I make, not as a footnote but as a constraint of the same order as the animal's condition, and pretending otherwise produces the worst outcome available: an estimate given after the owner has already agreed in principle, followed by a conversation nobody wanted, at the point where withdrawing feels to them like abandonment.\n\nWhat I have learned to do is put the money at the beginning, before the plan rather than after it, and to offer more than one plan, honestly labelled. The gold-standard investigation and the pragmatic one are both real veterinary medicine. Presenting only the first and then discounting it when the owner hesitates teaches them that the price was negotiable, which damages the next conversation and the one after that. Presenting both, with what each can and cannot rule out, treats the owner as the decision-maker they legally and morally are.\n\nEuthanasia is the aspect of the work outsiders ask about most, and it is not the part I find hardest. Done well and at the right time it is the most clearly good thing I do. What is hard is the week before it, when an owner asks whether it is time and what they are really asking is whether they are allowed to stop. I have stopped answering that question with clinical information alone. I now describe what I would expect the coming fortnight to contain, in plain terms, and let them place the line.\n\nAntimicrobial use in animals draws public criticism that is partly deserved and often misdirected. The bulk of veterinary antimicrobial use is in farmed animals and is a systems question about husbandry, housing and margins rather than about individual prescribing. In companion practice the pressure I feel is different and smaller: an owner who has taken a morning off work, an animal that cannot easily be re-examined because that owner cannot come back, and a temptation to cover the possibility rather than arrange the review. I recognise the shape of that temptation and I am not always proof against it.\n\nThe welfare conversation I find most difficult is about breeds. A great many of the animals I see have been bred to a shape that guarantees the condition I am treating, and the owner in front of me is not responsible for that and loves the animal completely. Telling them that the breathing difficulty is the breed rather than a misfortune is true, is of no use to them, and can sound like an accusation. I say it anyway, once, gently, and mostly for the sake of the animal they buy next.\n\nThere is a professional strain in all this that we have only recently begun to name. We perform a procedure human medicine does not perform, we absorb the financial arguments of strangers, and we are told with some regularity that we are in it for the money by people we have just given a discount to. The rates of distress in this profession are not a mystery and they are not a matter of individual resilience. The remedies that work are structural — how a rota is built, whether a difficult case is debriefed, whether a colleague answers the telephone at two in the morning.\n\nThe second consultation of the day is often the one that matters, and it is the one nobody counts. An owner told on Monday that the treatment might not work comes back on Thursday to ask a question they could not form at the time. That appointment is short, is frequently unbilled, and changes the outcome more than the first one did. Practice software counts consultations. It has no way of recording that the second was the real one.\n\nIf I could change one thing in how the public understands us, it would be the belief that a veterinary practice is either a business or a caring profession and cannot be both. It is a business, in the way a dental practice is, and the money pays for the equipment that made this morning's diagnosis possible. What follows from that is not cynicism. It is that the honest conversation about cost is part of the clinical care and not an interruption of it, and the practices that treat it so are the ones where owners are least often surprised."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what is said to shape veterinary practice most?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "The absence of a patient who can give a history"
            },
            {
              "id": "b",
              "text": "The range of species a practitioner must cover"
            },
            {
              "id": "c",
              "text": "The limits of the equipment available in practice"
            },
            {
              "id": "d",
              "text": "The frequency with which owners disagree with the advice given"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"It\" refer to?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the animal's condition"
            },
            {
              "id": "b",
              "text": "the cost"
            },
            {
              "id": "c",
              "text": "the estimate given afterwards"
            },
            {
              "id": "d",
              "text": "the consent in principle"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, why are two plans offered?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Because the practice is required to publish its prices"
            },
            {
              "id": "b",
              "text": "Because insurers will not fund the more expensive option"
            },
            {
              "id": "c",
              "text": "Because the owner is the person entitled to decide"
            },
            {
              "id": "d",
              "text": "Because the gold standard is rarely clinically necessary"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph","writer"],
          "stem": "What does the writer now do when an owner asks whether it is time?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "Gives the clinical information and leaves the decision open"
            },
            {
              "id": "b",
              "text": "Recommends a fixed period of further treatment first"
            },
            {
              "id": "c",
              "text": "Refers the question to a colleague who knows the animal"
            },
            {
              "id": "d",
              "text": "Describes what the coming fortnight is likely to hold"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what is said about antimicrobial use?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "Companion practice accounts for most veterinary use"
            },
            {
              "id": "b",
              "text": "Criticism of the profession is entirely unjustified"
            },
            {
              "id": "c",
              "text": "Prescribing is governed by rules stricter than in human medicine"
            },
            {
              "id": "d",
              "text": "Most use is in farming, not in practice"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph"],
          "stem": "In the sixth paragraph, why is the breed conversation difficult?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Owners rarely know which breed they have bought"
            },
            {
              "id": "b",
              "text": "The evidence linking breed to illness is contested"
            },
            {
              "id": "c",
              "text": "It is true and useless to that owner"
            },
            {
              "id": "d",
              "text": "Breeders dispute the figures that the profession quotes"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph"],
          "stem": "What is said about distress in the profession?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It responds to structural rather than personal remedies"
            },
            {
              "id": "b",
              "text": "It has been exaggerated by recent surveys"
            },
            {
              "id": "c",
              "text": "It is confined to those in their first years of practice"
            },
            {
              "id": "d",
              "text": "It is caused mainly by the performance of euthanasia"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what does the writer argue?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "That practices should be removed from commercial ownership"
            },
            {
              "id": "b",
              "text": "That the cost conversation is clinical care"
            },
            {
              "id": "c",
              "text": "That fees should be published before every consultation"
            },
            {
              "id": "d",
              "text": "That owners should be encouraged to insure their animals"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The number that keeps getting smaller",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-number-that-keeps-getting-smaller",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "When our trust extended its abdominal aortic aneurysm screening to a wider age band, I was asked to write the letter that went out with the invitations. It took eleven drafts. The difficulty was not the medicine, which is about as settled as screening medicine gets. It was that every honest version of the letter said two things at once, and the two things pulled in opposite directions: this test may save your life, and this test may find something that was never going to hurt you and set in motion a year you would rather not have had.\n\nScreening programmes are sold on the first half of that sentence, and I understand why. The arithmetic of the second half is genuinely hard to convey. If a thousand men are scanned, a handful have an aneurysm large enough to warrant surveillance, a smaller number are offered repair, and one or two avoid a death that would otherwise have come suddenly and without warning. Those are real people and it is a real benefit. But among the same thousand are men who learn they are carrying something with a frightening name, who will be scanned annually for the rest of their lives, and whose aneurysm would have sat quietly under the radar until they died of something else entirely. They are harder to count, because nothing visible happens to them. Their harm is a change in how they think about their own body.\n\nThe word the literature uses is overdiagnosis, and I have come to think it is a poor word for the job. It sounds like an error — like somebody read the scan wrong. Nothing was read wrong. The scan found exactly what was there. The problem is that what was there did not need finding, and there is at present no way to tell, at the moment of finding, which category a given man is in. A term that implies a mistake invites the response that better clinicians would avoid it, and better clinicians would not.\n\nI have watched this play out in the consultations that follow. Men who arrive for a surveillance scan having read a great deal on the internet often ask a question I find almost impossible to answer well: what would happen if I just stopped coming? The honest answer is that for most of them, statistically, nothing. But \"statistically nothing\" is not a thing a person can act on, and the moment I say it I can see them hearing something I did not say, which is that the scan never mattered. Some of my colleagues avoid the question by declining to entertain it. I think that is a mistake, though I hold the view less firmly than I did, because I have seen where the alternative leads — a man who disengages from surveillance on the strength of a conversation with me, and whose aneurysm is not one of the quiet ones.\n\nWhat has actually improved things, in my experience, has nothing to do with how the risk is explained and everything to do with when. We now have the conversation about what a positive result would mean before the first scan rather than after it, at the point when the man is not yet carrying a diagnosis and can consider the question as an abstraction. Uptake fell very slightly. The number of men who withdrew from surveillance after a positive result fell a great deal more. I take that as evidence that the earlier conversation is doing something useful, though I accept it is also consistent with a duller explanation: that the men most likely to disengage are simply the ones who now decline the first scan.\n\nThere is a version of this argument that I want to distance myself from. Some critics of screening write as though the programmes were designed by people indifferent to the harm, or as though the harms were being concealed. That has not been my experience of the people who run them. The information is published, the modelling is public, and the debates inside the programme are more searching than most of what is written about it from outside. The failure, such as it is, is one of communication rather than of intent, and it is a genuinely difficult communication problem rather than a lazily solved one.\n\nWhat I would change is smaller and duller than the argument usually gets. Invitation letters should state, in the first paragraph rather than the fourth, that a normal result is by far the most likely outcome and that an abnormal one does not usually mean surgery. Surveillance appointments should not be routinely scheduled in vascular surgery outpatients, because the setting tells the patient something the clinician then has to spend ten minutes undoing. And we should stop describing men on surveillance as patients. They are not ill. Most of them will never be ill from this. The vocabulary we use around them is, I suspect, doing more of the harm than the scanning ever did."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what made the letter difficult to draft?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "The clinical evidence behind the programme remained contested among the surgeons involved"
            },
            {
              "id": "b",
              "text": "It had to carry two messages that pulled against each other"
            },
            {
              "id": "c",
              "text": "The invitation was being extended to a much wider age band"
            },
            {
              "id": "d",
              "text": "The wording required approval from several separate departments"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, who does the word \"They\" refer to?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "the men in whom an aneurysm is found and monitored"
            },
            {
              "id": "b",
              "text": "the whole cohort of a thousand men invited for scanning"
            },
            {
              "id": "c",
              "text": "the men who avoid a sudden and unheralded death"
            },
            {
              "id": "d",
              "text": "the men whose aneurysm would never have harmed them"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, why is \"overdiagnosis\" called a poor term?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It implies that somebody made an error in interpreting the scan"
            },
            {
              "id": "b",
              "text": "It has been imported from health economics rather than clinical practice"
            },
            {
              "id": "c",
              "text": "It conflates harms that differ enormously in their eventual severity"
            },
            {
              "id": "d",
              "text": "It is unfamiliar to most of the men who receive an invitation letter"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "Why is the men's question hard to answer well?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "He is not permitted to advise a man to stop attending surveillance"
            },
            {
              "id": "b",
              "text": "The men who raise it have usually done little reading beforehand"
            },
            {
              "id": "c",
              "text": "The withdrawal figures for his own service are not available to him"
            },
            {
              "id": "d",
              "text": "The truthful answer is heard as something other than what he said"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph","writer"],
          "stem": "What is revealed about his view of colleagues who refuse the question?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "He now shares it, having seen the consequences of the alternative"
            },
            {
              "id": "b",
              "text": "He holds it less firmly than he once did"
            },
            {
              "id": "c",
              "text": "He has never considered that position defensible in any circumstance"
            },
            {
              "id": "d",
              "text": "He thinks it depends upon the seniority of the clinician concerned"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what change does the writer describe?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "The explanation of risk was rewritten in substantially plainer language"
            },
            {
              "id": "b",
              "text": "Surveillance scans began to be offered at considerably longer intervals"
            },
            {
              "id": "c",
              "text": "The conversation was moved to before the first scan"
            },
            {
              "id": "d",
              "text": "Written material was provided for men to take away and consider"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "What reservation does the writer raise about the figures?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "The reduction in withdrawals is smaller than the programme has reported"
            },
            {
              "id": "b",
              "text": "The comparison period was too short for the finding to carry weight"
            },
            {
              "id": "c",
              "text": "Uptake fell by considerably more than had been anticipated"
            },
            {
              "id": "d",
              "text": "The result is equally consistent with a duller explanation"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the sixth paragraph, what does the writer say about critics of screening?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Their conclusions are sound even where their tone is not"
            },
            {
              "id": "b",
              "text": "Their arguments have been overtaken by more recent modelling"
            },
            {
              "id": "c",
              "text": "The suggestion that harms are concealed is unfounded"
            },
            {
              "id": "d",
              "text": "They misread the modelling that the programmes publish annually"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The third person in the room",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-third-person-in-the-room",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Every clinician I know has a story about an interpreted consultation that went wrong, and almost all of the stories are about the same thing: not a mistranslated word, but a conversation that quietly became a conversation between two other people. The patient speaks for ninety seconds; the interpreter turns to you and says \"she says it's fine.\" Something was lost, and you cannot ask what, because asking implies a distrust you have no evidence for and would rather not introduce into a room where you are already the least vulnerable person present.\n\nFor a long time the professional advice on this was procedural. Speak to the patient, not the interpreter. Use short sentences. Avoid idiom. Pause frequently. It is sensible advice and I have given it to trainees for years, but I have come to think it addresses the easiest part of the problem. The mechanics of interpreted speech are not what most consultations founder on. What they founder on is that an interpreter is not a translation device but a person, usually from the same community as the patient, often known to them, and always carrying a judgement about what is and is not appropriate to say to a doctor.\n\nThat judgement is frequently protective, and it is not obviously wrong. An interpreter who softens a patient's account of their symptoms may be doing so because the patient signalled, in ways I could not read, that they did not want the detail conveyed. An interpreter who declines to translate a question about alcohol may be reading a family dynamic I cannot see. I have stopped assuming that a shortened rendering is a failure of the interpreter's technique. Some of them are, of course. But a good many are the visible edge of a negotiation the patient is conducting about their own privacy, and treating that as an error to be corrected can override exactly the thing consent is supposed to protect.\n\nWhere this leaves practical advice is less tidy than the guidance suggests. The most useful change I have made is also the least clinical: I now spend two minutes with the interpreter before the patient comes in, and I use that time to say what the consultation is for and what I will need. Not instructions — a briefing. The difference in what comes back is substantial, and colleagues who have tried it report the same. I would like to claim that as evidence, but I am conscious that we are all reporting on interventions we chose and believe in, which is the least reliable kind of evidence there is.\n\nThe area where I remain genuinely uncertain is family members. The guidance is close to absolute: do not use them, use a professional. The reasoning is sound and I follow it for anything consequential. But I have sat with an elderly woman whose daughter had interpreted for her for fifteen years, who became visibly distressed when a professional interpreter she had never met was brought into the room to discuss her medication, and I do not think what I did that day served her. The guidance is written for the cases that go wrong, which is the right way to write guidance and a poor way to conduct a single afternoon's clinic.\n\nThere is one thing I now regard as non-negotiable, and it took me longer than it should have to reach it. If a consultation is going to convey bad news, the interpreter must be told beforehand what is coming. Not for the patient's sake in the first instance, but for the interpreter's. They are about to say the worst sentence of someone's year in the first person, in their own voice, to a person from their own community, and then stand in the room while it lands. I have watched interpreters absorb that without warning and I have watched what it costs them. We do not usually count them among the people a difficult consultation is difficult for.\n\nWhat I would ask of services, if asking achieved anything, is that interpreter booking stop being treated as a logistical step comparable to booking a room. The quality of an interpreted consultation varies more with who is interpreting and what they know beforehand than with almost anything the clinician does inside the twenty minutes. That is an uncomfortable thing for clinicians to accept, because it locates the most important variable outside our control and inside a system that consistently treats it as an administrative detail. The remedy is not expensive and it is not clinical: name the interpreter in the booking, send them the reason for the appointment, and give them five minutes with the clinician before the patient comes in."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what do the writer's colleagues' stories have in common?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Interpreters had received no training in specialist clinical vocabulary"
            },
            {
              "id": "b",
              "text": "The consultation turned into an exchange between two other people"
            },
            {
              "id": "c",
              "text": "Patients proved unwilling to speak freely in front of an interpreter"
            },
            {
              "id": "d",
              "text": "A single clinical term had been rendered incorrectly at a critical moment"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"It\" refer to?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "the procedural advice about how to speak"
            },
            {
              "id": "b",
              "text": "a consultation that has already gone wrong"
            },
            {
              "id": "c",
              "text": "the interpreter's judgement about what may be said"
            },
            {
              "id": "d",
              "text": "the mechanics of interpreted speech"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "Why is the standard advice said to address the easier problem?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "Trainees have generally adopted it without needing to be told"
            },
            {
              "id": "b",
              "text": "It applies only to consultations that run beyond a certain length"
            },
            {
              "id": "c",
              "text": "It predates the widespread availability of professional interpreting services"
            },
            {
              "id": "d",
              "text": "Most consultations fail for reasons other than mechanics"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, what may a shortened rendering indicate?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "The interpreter is unfamiliar with the clinical subject under discussion"
            },
            {
              "id": "b",
              "text": "The patient is managing what they wish to disclose"
            },
            {
              "id": "c",
              "text": "The consultation has already overrun its allotted appointment time"
            },
            {
              "id": "d",
              "text": "The patient has expressly asked for that detail to be left out"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "What is said about the two minutes before the consultation?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They should be spent giving the interpreter clear instructions to follow"
            },
            {
              "id": "b",
              "text": "They work best where the interpreter is already known to the clinician"
            },
            {
              "id": "c",
              "text": "It is a briefing, and colleagues report the same effect"
            },
            {
              "id": "d",
              "text": "They constitute the strongest evidence he has gathered for any change"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph","writer"],
          "stem": "In the fifth paragraph, what position does the writer take on family interpreters?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "He follows the guidance while doubting that it fits every case"
            },
            {
              "id": "b",
              "text": "He now regards the guidance as having been overtaken by practice"
            },
            {
              "id": "c",
              "text": "He uses them wherever the patient expresses a clear preference"
            },
            {
              "id": "d",
              "text": "He avoids them altogether except in an emergency presentation"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph"],
          "stem": "Why must an interpreter be told in advance that bad news is coming?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "So that they may prepare the necessary clinical vocabulary in advance"
            },
            {
              "id": "b",
              "text": "To allow time for the patient's family to be brought into the room"
            },
            {
              "id": "c",
              "text": "Because of what delivering it costs the interpreter"
            },
            {
              "id": "d",
              "text": "Because the professional guidance has recently been revised to require it"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what does the writer describe as uncomfortable?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "That services treat interpreter booking as a purely logistical step"
            },
            {
              "id": "b",
              "text": "That clinicians receive so little training in working through an interpreter"
            },
            {
              "id": "c",
              "text": "The decisive factor lies outside the clinician's control"
            },
            {
              "id": "d",
              "text": "That twenty minutes cannot accommodate a properly interpreted consultation"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Written for a thousand, applied to one",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "written-for-a-thousand-applied-to-one",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "There is a particular silence that falls in a clinic room when a guideline and a patient fail to coincide. I have come to recognise it. The recommendation is unambiguous, the evidence behind it is respectable, and the person sitting opposite me is not the person the trial recruited. She is eighty-four rather than sixty-two; she takes nine other medicines rather than one; her stated priority is not to survive the decade but to keep gardening through the summer. The guideline has nothing whatever to say about her, and it says it with great confidence.\n\nThis is not a complaint about guidelines, which I use daily and would not practise without. It is a complaint about a habit of reading them. A recommendation is a statement about the average behaviour of a population under study conditions. Applying it to an individual requires a second act of judgement that the document itself cannot perform, and which the surrounding culture increasingly treats as a deviation to be justified rather than as the ordinary work of clinical practice. The guideline authors, in my experience, know this perfectly well; many say so explicitly in a preamble that almost nobody reads.\n\nWhat has changed is not the guidance but the machinery around it. Twenty years ago departing from a recommendation cost a sentence in the notes. It now frequently costs an exception report, a conversation with a governance lead, and a small anxiety that surfaces at three in the morning. The asymmetry is familiar to anyone who has thought about defensive practice: a clinician who follows a guideline into a poor outcome is protected by the following, while a clinician who departs from one into a good outcome accrues no corresponding credit. Over enough decisions that asymmetry does not merely influence behaviour — it selects for a certain kind of clinician.\n\nThe consequences are easiest to see in prescribing for the very old, where several guidelines, each individually reasonable, converge on a regimen no reasonable person would design from scratch. A patient with four common long-term conditions can accumulate a dozen medicines without a single irrational decision having been made anywhere along the line. Each was correct in isolation. The aggregate is a burden that no clinician chose and none feels able to unpick, because unpicking it means departing from four separate recommendations in one afternoon and writing down why.\n\nI want to be careful not to romanticise the alternative. The era before guidelines was not one of sensitive individualised care; it was one of enormous unexplained variation, in which where you happened to live determined what was done to you, and in which some of what was done was frankly indefensible. Guidelines compressed that variation, and the compression saved lives that can be counted. Anyone arguing for more clinical latitude has to reckon with what latitude actually produced when we had it, and I notice that the people who argue for it most fluently are rarely the ones whose practice would look worst under scrutiny.\n\nWhere I have landed, provisionally, is that the problem is one of documentation rather than of autonomy. Clinicians do not, on the whole, lack the judgement to individualise. What they lack is a low-cost, respectable way of recording that they have done so. If departing from a recommendation required one sentence naming the patient's stated priority and the specific feature that places them outside the trial population, and if that sentence were treated as sufficient rather than as the opening of a negotiation, I suspect a great deal of over-treatment would quietly disappear. The barrier is not courage. It is friction.\n\nTwo things would help beyond that, neither of them mine. Guidelines could state, prominently rather than in an appendix, the characteristics of the population they were derived from and the groups in whom the recommendation is untested — not as a caveat but as part of the recommendation itself. And governance processes could distinguish between a departure that was reasoned and recorded and one that was neither, which at present they very largely do not. Until they do, the safest thing for a clinician is to treat a population statistic as an instruction, and we should be honest that this is what we have designed the system to reward.\n\nNone of which is an argument for ignoring guidance, and I would be uneasy about being read that way. The recommendations I depart from are the ones I have read most carefully; the ones I follow without thinking are the ones I could not defend if asked. That inversion is worth sitting with. It suggests that the useful distinction is not between compliance and deviation at all, but between decisions a clinician has actually made and decisions that were made for them by a document they scanned."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what has become recognisable in the clinic room?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "A recommendation whose supporting evidence has since been superseded by better and larger trials"
            },
            {
              "id": "b",
              "text": "A patient who has decided in advance to refuse the treatment offered"
            },
            {
              "id": "c",
              "text": "The moment when guidance and the patient in front of him do not correspond"
            },
            {
              "id": "d",
              "text": "The point at which a consultation has run past its allotted time"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"it\" refer to?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the second act of judgement"
            },
            {
              "id": "b",
              "text": "a recommendation about a population"
            },
            {
              "id": "c",
              "text": "the preamble that nobody reads"
            },
            {
              "id": "d",
              "text": "the surrounding professional culture"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "According to the third paragraph, what has changed over twenty years?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "The administrative cost of departing from guidance"
            },
            {
              "id": "b",
              "text": "The quality of the evidence on which guidance rests"
            },
            {
              "id": "c",
              "text": "The number of conditions for which guidance now exists"
            },
            {
              "id": "d",
              "text": "The willingness of governance leads to review individual decisions"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "According to the third paragraph, what does the asymmetry do over time?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It causes guideline authors to write more cautiously than they otherwise would"
            },
            {
              "id": "b",
              "text": "It raises the volume of exception reporting beyond what governance can review"
            },
            {
              "id": "c",
              "text": "It favours one kind of clinician over another"
            },
            {
              "id": "d",
              "text": "It reduces the variation between departments in a measurable way"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fourth paragraph, how is the accumulation of medicines explained?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "Prescribers are insufficiently trained in the risks of polypharmacy in old age"
            },
            {
              "id": "b",
              "text": "Patients frequently request continuation of medicines started years earlier"
            },
            {
              "id": "c",
              "text": "Reviews are scheduled too infrequently for the regimen to be reconsidered"
            },
            {
              "id": "d",
              "text": "Each individual decision was correct"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph","writer"],
          "stem": "What point does the writer make about the period before guidelines?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "It generated evidence that later guidance disregarded"
            },
            {
              "id": "b",
              "text": "It has been misrepresented by the guideline movement"
            },
            {
              "id": "c",
              "text": "It allowed a degree of individualisation now impossible"
            },
            {
              "id": "d",
              "text": "It produced variation that was often indefensible"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "In the sixth paragraph, where does the writer locate the problem?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "In the recording of a departure rather than in the judgement behind it"
            },
            {
              "id": "b",
              "text": "In the reluctance of clinicians to accept responsibility for a difficult clinical decision"
            },
            {
              "id": "c",
              "text": "In the training of those who lead clinical governance processes"
            },
            {
              "id": "d",
              "text": "In the pace at which recommendations are revised and reissued"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "What does the writer propose that guidelines should state prominently?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "The date on which the recommendation is next scheduled for review"
            },
            {
              "id": "b",
              "text": "The groups in whom the recommendation has not been tested"
            },
            {
              "id": "c",
              "text": "The proportion of clinicians currently complying with them"
            },
            {
              "id": "d",
              "text": "The alternative treatments considered and rejected by the panel"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — What the night takes",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "what-the-night-takes",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "The literature on fatigue in clinicians is unusually consistent, which in medicine is itself worth noticing. Reaction time lengthens. Working memory contracts. The capacity to hold two competing explanations open — which is most of what diagnosis consists of — degrades earlier and further than the capacity to perform a familiar procedure. And, most awkwardly for a profession that prizes insight, self-assessment of impairment becomes unreliable at roughly the point where impairment becomes consequential. People are worst at judging their fatigue precisely when it matters most.\n\nNone of this is contested. What is contested is what follows from it, and here the argument becomes considerably less tidy than the safety literature suggests. The obvious inference is that night work should be reduced, and in some settings it demonstrably can be. But a hospital does not stop at midnight, and every hour of night cover removed from one group is an hour transferred to another — usually a smaller, more experienced group whose fatigue is less visible because it is absorbed rather than reported. I have watched a rota redesign that reduced junior night hours by a fifth and was described as a safety improvement. Nobody counted the consultant hours it created.\n\nThe handover is where the cost usually surfaces. A tired clinician does not typically make a dramatic error; they make a small omission at the point of transfer — the detail that seemed unimportant at four in the morning and was decisive by nine. The incident reports that follow attribute the failure to communication, which is true in the sense that a fall attributed to gravity is true. Communication was the mechanism. Fatigue was the reason the mechanism failed, and it is almost never recorded, partly because there is no field for it and partly because writing it down feels like an admission rather than an observation.\n\nSome of the interventions that get proposed strike me as displacement activity. Fatigue training, for instance, is popular and cheap and I have never seen convincing evidence that it changes anything, which is unsurprising given that the impairment it addresses is not knowledge-based. You cannot educate someone out of a slowed reaction time. Others are more promising but harder to fund: protected rest, adequate cover so that rest is takeable rather than nominal, and — the one I would prioritise — a structured handover with a fixed format, because a fixed format is the only thing that reliably survives a tired clinician's judgement about what is worth mentioning.\n\nI should acknowledge that my own view here is shaped by the specialty I work in, where the night is busy and continuous. Colleagues in specialties with quieter nights describe a different problem: not sustained load but sudden load after hours of inactivity, which the literature suggests is worse rather than better for decision quality. If that is right, the interventions that suit my department may be close to useless in theirs, and I am wary of the tendency — visible in a good deal of what is written about rotas — to generalise from one service's shape to everybody's.\n\nThe change I would make first requires no funding at all. Incident reporting forms should ask, as a routine field rather than a free-text possibility, how long the reporting clinician had been on duty and how long since they last slept. Not to attribute blame, which the form should say plainly, but because we currently have no denominator. We know that fatigued clinicians make errors. We do not know, in any given service, what proportion of errors occur in the last two hours of a shift, and until we do, every argument about rotas is being conducted on anecdote by people whose interests in the outcome are not identical.\n\nWhat I have stopped saying is that the profession has a culture problem about admitting tiredness. I said it for years. I now think the culture is downstream of the arithmetic: in a service with no slack, admitting you are too tired to continue means naming a colleague who must cover you, and people do not do that. Fix the establishment and the culture follows. Lecture the culture while the establishment is unchanged and you have merely added guilt to exhaustion.\n\nThere is one further asymmetry I have never seen addressed. The clinicians most exposed to sustained night work are, in most services, the least senior — which means the people whose judgement is being degraded are also the people with the smallest store of pattern recognition to degrade. Seniority buys a kind of resilience: a consultant recognises a presentation in a second that takes a registrar a careful minute, and fatigue costs the careful minute far more than it costs the second."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph","writer"],
          "stem": "In the first paragraph, what does the writer find most awkward about fatigue?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "The evidence base is smaller than most clinicians assume it to be"
            },
            {
              "id": "b",
              "text": "Procedural skill declines before diagnostic reasoning does"
            },
            {
              "id": "c",
              "text": "The effects vary considerably between individual practitioners"
            },
            {
              "id": "d",
              "text": "Self-assessment fails at the point impairment starts to matter"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the third paragraph, who does the word \"they\" refer to?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "a tired clinician"
            },
            {
              "id": "b",
              "text": "the authors of incident reports"
            },
            {
              "id": "c",
              "text": "clinicians receiving the handover"
            },
            {
              "id": "d",
              "text": "the patients affected by an omission"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "What is said about the rota redesign?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "It reduced total night hours across the department substantially"
            },
            {
              "id": "b",
              "text": "It was reversed once the consultant workload became apparent"
            },
            {
              "id": "c",
              "text": "It failed because the junior doctors resisted the new pattern"
            },
            {
              "id": "d",
              "text": "The hours it moved to consultants went uncounted"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph","writer"],
          "stem": "In the third paragraph, what is the writer's objection to incident reports?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They are completed too long after the event to be reliable"
            },
            {
              "id": "b",
              "text": "They name the mechanism and omit the reason"
            },
            {
              "id": "c",
              "text": "They are reviewed by people unfamiliar with night working"
            },
            {
              "id": "d",
              "text": "They attribute failures to individuals rather than to systems"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fourth paragraph, why is fatigue training called displacement activity?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "The impairment it targets is not a lack of knowledge"
            },
            {
              "id": "b",
              "text": "It is delivered by staff who do not themselves work nights"
            },
            {
              "id": "c",
              "text": "It has been shown to reduce reporting rather than error"
            },
            {
              "id": "d",
              "text": "It competes for funding with rest facilities"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph"],
          "stem": "Why is a fixed handover format preferred?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "It reduces the time a handover takes at the end of a long shift"
            },
            {
              "id": "b",
              "text": "It allows incidents to be traced back to a specific individual later"
            },
            {
              "id": "c",
              "text": "It satisfies the documentation requirements set by governance teams"
            },
            {
              "id": "d",
              "text": "It survives a tired clinician's judgement about what matters"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph"],
          "stem": "What is acknowledged in the fifth paragraph?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "His conclusions may not transfer to services shaped differently from his"
            },
            {
              "id": "b",
              "text": "The literature on quiet-night specialties is too thin to draw on"
            },
            {
              "id": "c",
              "text": "His department has not measured its own error rate at night"
            },
            {
              "id": "d",
              "text": "Colleagues in other specialties have disputed his account"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "What does the writer say has changed in his own thinking?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "He no longer regards structured handover as the priority intervention"
            },
            {
              "id": "b",
              "text": "He now believes fatigue reporting should be linked to appraisal"
            },
            {
              "id": "c",
              "text": "He no longer attributes the silence about tiredness to culture"
            },
            {
              "id": "d",
              "text": "He has come to accept that night work cannot be reduced at all"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The signature and the conversation",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-signature-and-the-conversation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "The consent form for the procedure I do most often runs to two sides and takes about ninety seconds to complete. The conversation it is supposed to record takes rather longer, and on a full list it is the part that compresses. Nobody decides to compress it. It compresses the way anything compresses when the thing on either side of it is fixed and the thing in the middle is not.\n\nWhat has interested me for some years is how thoroughly the form has displaced the conversation in our collective imagination. Ask a trainee whether a patient is consented and they will tell you whether the form is signed. The question and the answer have drifted apart without anyone noticing, and the drift is not a failure of teaching — trainees are taught the distinction explicitly and can recite it. It survives the teaching because the institution measures one of the two things and not the other, and people orient towards what is counted.\n\nI have sat in on audits of consent that examined completeness of documentation and found our department exemplary, which it was, on that measure. What such an audit cannot see is the patient who signed a form describing a risk she had not understood, in a corridor, forty minutes before a procedure she had assumed was routine because nobody had suggested otherwise. Her form was faultless. If she had later complained, the documentation would have protected the department and would have been, in every particular, an accurate record of something that did not happen in the way the record implies.\n\nThere is a counter-argument I take seriously, which is that a certain amount of ritual is unavoidable and possibly useful. Signing something marks a threshold. Patients report that the act of signing focuses them, and there is a reasonable literature suggesting that a moment of formality improves recall of what preceded it. I do not want a system in which nothing is signed. My objection is narrower: the signature has become the evidence rather than the marker, and evidence is what institutions defend.\n\nThe most useful change our department made was almost embarrassingly small. We moved consent for elective procedures out of the admission area and into the outpatient appointment where the decision was actually taken, typically two to three weeks earlier. Nothing else altered — same form, same information, same clinician. The rate at which patients subsequently asked a question before the procedure roughly doubled. I read that as evidence that the earlier conversation left them room to think, though a colleague reads the same figure as evidence that we simply gave them more time in which to become anxious, and I cannot rule that out from the data we have.\n\nWhere I am least certain is emergency work, in which the elegant model collapses. A patient who needs a decision within the hour cannot be given three weeks, and the conversation that occurs is necessarily compressed into something closer to an instruction with a pause in it. I have heard this described as a lesser form of consent, which I think is the wrong frame. It is a different transaction, in which the clinician carries more of the decision because the patient cannot, and pretending otherwise serves nobody. What it needs is its own honest description rather than the polite fiction that the same standard has been met more quickly.\n\nThe change I would argue for now is to the audit rather than to the form. Auditing consent by documentation is auditing the wrong object, and everybody involved knows it. An audit that instead sampled patients a week after their procedure and asked what they remembered being told would be harder to run, would produce worse numbers, and would measure something real. My experience of proposing this is that the objection is never that it would be uninformative. The objection is that nobody knows what would be done with the answer, which is, when you think about it, a remarkable thing to say about a safety process.\n\nI should be clear that I have no evidence my own conversations survive that test. I have never been audited that way. Nobody has.\n\nOne further thing has changed my mind about who the form is for. Early on I assumed it protected the patient, and defended it on that basis. I now think it protects the institution first, the clinician second, and the patient only insofar as those two interests happen to align with hers — which, in the ordinary case, they largely do. It is when they diverge that the design shows: a form that records what was said cannot record what was understood, and only one of those is the thing consent is for."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, why does the conversation compress?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Because trainees have not been taught how long it ought to take"
            },
            {
              "id": "b",
              "text": "Because the form and the procedure are fixed while it is not"
            },
            {
              "id": "c",
              "text": "Because patients typically ask fewer questions than clinicians expect"
            },
            {
              "id": "d",
              "text": "Because the department has been asked to increase its list throughput"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"It\" refer to?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "the explicit teaching of the distinction to trainees"
            },
            {
              "id": "b",
              "text": "the question asked of a trainee"
            },
            {
              "id": "c",
              "text": "the drift between consent and the form"
            },
            {
              "id": "d",
              "text": "the institution's system of measurement"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, what does the writer say about the audit that found the department exemplary?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "Its findings were later shown to have been compiled from incomplete departmental records"
            },
            {
              "id": "b",
              "text": "It was conducted by staff from outside the specialty concerned"
            },
            {
              "id": "c",
              "text": "It relied on a sample too small to support its conclusion"
            },
            {
              "id": "d",
              "text": "It examined a real property, but not the one that matters"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph","writer"],
          "stem": "What is the point of the example of the patient who signed in a corridor?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "The record can be accurate and still misrepresent what occurred"
            },
            {
              "id": "b",
              "text": "Corridors are an inappropriate setting for clinical discussion"
            },
            {
              "id": "c",
              "text": "Forty minutes is insufficient notice before an elective procedure"
            },
            {
              "id": "d",
              "text": "Departments are rarely held to account when a complaint is made"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph","writer"],
          "stem": "In the fourth paragraph, what is conceded about signing?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It provides the only defence available to a department after a complaint"
            },
            {
              "id": "b",
              "text": "It is required by regulation in every jurisdiction the writer knows of"
            },
            {
              "id": "c",
              "text": "A moment of formality may improve what a patient remembers"
            },
            {
              "id": "d",
              "text": "Patients who decline to sign are usually reconsidering the procedure itself"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph","writer"],
          "stem": "What does the writer identify as his narrow objection?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "That consent forms are longer than the information they convey warrants"
            },
            {
              "id": "b",
              "text": "That the signature has become the evidence rather than the marker"
            },
            {
              "id": "c",
              "text": "That patients are asked to sign in settings that cannot afford privacy"
            },
            {
              "id": "d",
              "text": "That the ritual has no demonstrable effect on subsequent recall"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what did the department change?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "The wording of the form was simplified for elective procedures"
            },
            {
              "id": "b",
              "text": "A second clinician was asked to confirm the discussion had occurred"
            },
            {
              "id": "c",
              "text": "Patients were given written information to take away and read"
            },
            {
              "id": "d",
              "text": "Consent moved to the appointment at which the decision was made"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph"],
          "stem": "What does the writer say about consent in emergency work?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It should be recognised as a different transaction"
            },
            {
              "id": "b",
              "text": "It is best deferred until the patient's condition allows discussion"
            },
            {
              "id": "c",
              "text": "It cannot meaningfully be documented at all"
            },
            {
              "id": "d",
              "text": "It should be governed by a separate and shorter form"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — What the camera cannot reach",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "what-the-camera-cannot-reach",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "I was among the more enthusiastic converts when remote consulting arrived at scale, and I have spent the years since revising the enthusiasm downwards in a way that I want to describe precisely, because the public argument about it has become unhelpfully binary.\n\nThe gains were real and they were not evenly distributed, which is the part usually missed. Remote appointments were transformative for patients who work shifts, for those who care for someone who cannot be left, and for anyone whose condition makes travel a calculation rather than an inconvenience. Uptake among the working-age employed rose. Non-attendance fell in exactly the groups who had previously been labelled, unhelpfully, as poor attenders — a label that turns out to have been describing transport and rotas rather than motivation.\n\nWhat I underestimated was how much of an examination happens before an examination begins. A patient crossing a waiting room is being assessed, whether or not anyone means to assess them. Gait, effort of breathing, whether they are accompanied and by whom, whether they sit down heavily, the small delay before standing that suggests pain nobody has yet mentioned — these are not incidental observations that a good history could replace. They frequently determine which history is taken. A video window that opens on a seated face at chest height has removed the whole of it, and removed it invisibly, so that the clinician does not experience an absence.\n\nThis matters differently in different specialties, and I have grown suspicious of arguments that generalise from one. In a service dealing largely with results and titration, remote consulting is close to costless and possibly better, since the patient is in their own kitchen with their own monitor readings. In a service where the presentation is undifferentiated — where the reason for the appointment is a symptom rather than a diagnosis — the loss is substantial, and the studies that report equivalence rarely separate the two.\n\nThe safety question, when it is raised, tends to be framed as missed diagnosis, and that framing has not matched my experience. The failures I have seen were not missed findings so much as consultations that ended too early. A face on a screen supplies fewer of the signals that prompt a clinician to ask one more question, and it supplies almost none of the ones that prompt a patient to volunteer something after the ostensible business is finished. The disclosure that comes while a patient is putting their coat on has no remote equivalent, and I do not think we have found a substitute for it.\n\nNone of which argues for reversal. Something my department does now, which costs nothing, is to make the mode of consultation a clinical decision rather than an administrative one. Bookings default to remote for review appointments and to face-to-face for anything undifferentiated, and either can be overridden by the clinician or requested by the patient without a reason being given. Complaints about access fell. Whether anything clinical improved I genuinely cannot say, because we changed it alongside a longer appointment slot and I would be inventing a finding if I attributed the effect to one of the two.\n\nThere is a version of the sceptical argument I want no part of. Some of it is nostalgia dressed as safety, and some of it comes from clinicians whose objection is to the loss of a particular kind of professional theatre rather than to any measurable harm. The consulting room is not sacred. It is merely, for some presentations, a better instrument than a camera, and the honest position is to say which presentations and why, rather than to defend the room as such.\n\nThe economics are worth stating plainly, because they shape the argument whether or not anyone admits it. A remote appointment is cheaper to provide and easier to schedule, and any service under pressure will drift towards it in the absence of a rule. That drift is not a clinical judgement accumulating; it is an operational default asserting itself, and it will find the specialties where the loss is greatest just as readily as the ones where there is none. I have watched it happen in a neighbouring service and I do not think anybody there decided anything.\n\nNone of this is an argument that the older arrangement was well designed either. A system in which every review required half a day of a patient's time was not a considered clinical choice; it was what the building made convenient. We have replaced one default with another and called the change a reform, when what we actually did was move the convenience from the patient's side of the desk to the service's."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the second paragraph, which groups benefited most?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Patients whose conditions required frequent monitoring of results"
            },
            {
              "id": "b",
              "text": "Older patients who had previously found the journey difficult"
            },
            {
              "id": "c",
              "text": "Patients for whom attending in person was logistically costly"
            },
            {
              "id": "d",
              "text": "Those who had expressed a preference for remote appointments beforehand"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the third paragraph, what does the word \"these\" refer to?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "the observations made before a consultation formally begins"
            },
            {
              "id": "b",
              "text": "the histories that clinicians take from patients who attend in person"
            },
            {
              "id": "c",
              "text": "the specialties in which remote consulting is costless"
            },
            {
              "id": "d",
              "text": "the symptoms a patient has come to describe"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph","writer"],
          "stem": "What does the writer say is most troubling about the loss?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It affects the least confident patients disproportionately at every stage of care"
            },
            {
              "id": "b",
              "text": "It is not experienced by the clinician as an absence"
            },
            {
              "id": "c",
              "text": "It cannot be recovered by asking additional questions"
            },
            {
              "id": "d",
              "text": "It has never been quantified in any published study"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "In the fourth paragraph, what distinction is drawn between services?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Between those with and without access to reliable video equipment"
            },
            {
              "id": "b",
              "text": "Between review of known problems and undifferentiated presentation"
            },
            {
              "id": "c",
              "text": "Between services led by consultants and those led by nursing staff"
            },
            {
              "id": "d",
              "text": "Between urban and rural populations with different travel burdens"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, how are the safety failures characterised?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "As diagnoses that were missed because an examination was impossible"
            },
            {
              "id": "b",
              "text": "As errors arising from poor connection quality during the consultation"
            },
            {
              "id": "c",
              "text": "As complaints that were made long after the appointment had ended"
            },
            {
              "id": "d",
              "text": "As consultations that finished before they should have"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph","writer"],
          "stem": "Why does the writer decline to claim a clinical benefit for the booking change?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "The department did not record outcomes before the change was made"
            },
            {
              "id": "b",
              "text": "The period of observation has so far been too short to draw upon"
            },
            {
              "id": "c",
              "text": "Complaints data is not a reliable proxy for clinical outcome"
            },
            {
              "id": "d",
              "text": "The change was made alongside another that he cannot separate from it"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph"],
          "stem": "In the sixth paragraph, what is said about the mode of consultation?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It is now decided clinically rather than administratively"
            },
            {
              "id": "b",
              "text": "It is chosen by the patient at the point of booking"
            },
            {
              "id": "c",
              "text": "It is fixed by specialty according to national guidance"
            },
            {
              "id": "d",
              "text": "It may be changed only with a documented clinical reason"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "What does the writer say about part of the sceptical argument?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It rests on studies that have since been withdrawn"
            },
            {
              "id": "b",
              "text": "It confuses nostalgia with safety"
            },
            {
              "id": "c",
              "text": "It is advanced mainly by clinicians nearing retirement"
            },
            {
              "id": "d",
              "text": "It has been encouraged by professional bodies"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The queue that is not a queue",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-queue-that-is-not-a-queue",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "The word \"waiting list\" does a great deal of quiet damage. It suggests a line, and a line implies an order that is fair by construction: those who arrived first are served first, and the only variable worth discussing is how fast the line moves. Almost nothing about a modern surgical waiting list works that way, and the mismatch between the word and the thing is, I have come to think, the reason public argument about waiting so rarely lands anywhere useful.\n\nWhat actually exists is a set of overlapping queues that are periodically re-sorted. A patient's position depends on clinical urgency, on the availability of a particular surgeon, on whether the procedure requires a bed rather than a day space, on how long they have already waited relative to a national threshold, and — in a way nobody advertises — on how likely they are to be cancelled if the list runs long. These are not corruptions of the queue. They are the queue. A hospital that allocated theatre time by date of referral alone would deliver worse outcomes and would be indefensible within a month.\n\nThe difficulty is that the sorting is invisible to the person being sorted. A patient who has waited eleven months and watches someone referred later go first is not observing a failure; she is observing a system doing what it was designed to do, in a language she was never given. The information exists. It is simply not communicated, because communicating it would require telling patients something the service is not comfortable saying aloud: that someone else's need was judged greater than theirs, by a person they have never met, using criteria they have not seen.\n\nI have watched two responses to this and I am persuaded by neither. The first is to publish everything — full criteria, live positions, the lot. Where this has been tried it has generated an enormous volume of contact from patients seeking to establish that their own case has been mis-scored, most of whom are correct that the score is crude and none of whom can be individually re-assessed at that volume. The second response is to say nothing beyond an estimated date, which protects the service and leaves the patient with a number that will move without explanation, which is its own kind of harm.\n\nSomething that has worked better in our department is duller than either. We began telling patients, at the point of listing, that their date might move and naming the two reasons it usually does: a more urgent case, or a cancellation upstream. Not their position, not the criteria — just the two mechanisms. Complaints about waiting did not fall. Complaints about being *told nothing* fell substantially, and those are different complaints with different remedies, though they arrive through the same channel and are usually counted together.\n\nI want to resist the conclusion that this is only a communication problem, because that framing is convenient for everybody who is not waiting. The list is long because capacity is insufficient, and no amount of well-phrased honesty shortens it by a day. What better communication does is remove a second injury laid on top of the first — the sense of having been forgotten, which patients describe far more bitterly than the wait itself, and which is the part we could fix without money.\n\nThere is a harder question underneath, which I have never seen a service answer well. Long waits do not distribute their harm evenly. A patient whose work is physical, or who has no one to help at home, deteriorates on a waiting list in ways that a patient with a desk job and a supportive household does not. Clinical urgency scoring captures almost none of this, and the scoring systems I have seen that attempt to capture it are so open to manipulation that services abandon them. So we use a proxy that we know is unjust in a predictable direction, and we do so knowingly, and I do not have a better proposal — only a conviction that pretending the proxy is neutral is worse than admitting it is not.\n\nOne consequence of all this is that the list rewards a particular kind of patient, and it is not the kind anyone would choose to reward. The patient who telephones weekly, who knows the name of the booking coordinator, who asks to be considered for a cancellation slot, does materially better than an equivalent patient who waits to be contacted. Nobody designed that advantage and no clinician would defend it, but it is real, it is measurable if anyone cared to measure it, and it maps almost exactly onto the distribution of confidence rather than of need."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph","writer"],
          "stem": "In the first paragraph, what is the objection to the term \"waiting list\"?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It implies a fairness of ordering that does not describe the reality"
            },
            {
              "id": "b",
              "text": "It has been retained long after the practice it described was abandoned entirely"
            },
            {
              "id": "c",
              "text": "It is understood differently by clinicians and by the patients on it"
            },
            {
              "id": "d",
              "text": "It suggests a delay that is shorter than the one patients experience"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"These\" refer to?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "the overlapping queues that are periodically re-sorted"
            },
            {
              "id": "b",
              "text": "the national thresholds against which waiting is measured"
            },
            {
              "id": "c",
              "text": "the outcomes a hospital would deliver under a simpler system"
            },
            {
              "id": "d",
              "text": "the factors that determine a patient's position"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "According to the third paragraph, why is the sorting not explained to patients?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "The criteria change too frequently for any explanation to remain accurate"
            },
            {
              "id": "b",
              "text": "Services are uncomfortable stating that another patient was judged more urgent"
            },
            {
              "id": "c",
              "text": "The information is held centrally and is not available to the treating team"
            },
            {
              "id": "d",
              "text": "Patients have not generally asked for it in the surveys that were conducted"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "What happened where full publication of criteria was tried?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Patients largely ignored the material that services made available"
            },
            {
              "id": "b",
              "text": "Complaints fell in the first year and rose again in the second"
            },
            {
              "id": "c",
              "text": "Services received more contact than they were able to act upon"
            },
            {
              "id": "d",
              "text": "The criteria were withdrawn after legal advice about their fairness"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what did the department begin telling patients?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Their approximate position within the surgical list at the time of listing"
            },
            {
              "id": "b",
              "text": "The two usual reasons a date moves"
            },
            {
              "id": "c",
              "text": "The clinical criteria by which urgency is assessed and periodically reviewed"
            },
            {
              "id": "d",
              "text": "An estimated date accompanied by a written explanation of the process"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph"],
          "stem": "What distinction is drawn about the complaints received?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "Complaints from patients differed in tone from those made by relatives"
            },
            {
              "id": "b",
              "text": "Written complaints proved more specific than those received by telephone"
            },
            {
              "id": "c",
              "text": "Complaints rose overall while their severity diminished considerably"
            },
            {
              "id": "d",
              "text": "Complaints about waiting and about not being told are different things"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "Why does the writer resist calling this a communication problem?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "That framing suits everyone except the person who is waiting"
            },
            {
              "id": "b",
              "text": "Communication has been studied less thoroughly than capacity"
            },
            {
              "id": "c",
              "text": "The department's own results were too small to support the claim"
            },
            {
              "id": "d",
              "text": "Patients rarely identify communication as their principal concern"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the seventh paragraph, what does the writer conclude about the urgency proxy?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It should be replaced by the scoring systems that services have abandoned"
            },
            {
              "id": "b",
              "text": "It performs adequately provided that it is reviewed at regular intervals"
            },
            {
              "id": "c",
              "text": "It is unjust in a predictable direction and should be admitted to be so"
            },
            {
              "id": "d",
              "text": "It disadvantages patients whose employment is physically demanding, and produces no other identifiable inequity"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Everything the leaflet cannot do",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "everything-the-leaflet-cannot-do",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "We audited our patient information leaflets two years ago, and the finding that stayed with me was not about reading age, though the reading ages were poor. It was that eighty per cent of them answered a question no patient had asked, and almost none answered the question patients ask most often, which is some version of: what will this feel like, and what will I be able to do afterwards?\n\nThe leaflets were, in a narrow sense, excellent. They described the procedure accurately. They listed complications with their frequencies. They had been reviewed by a clinician and, in most cases, by a committee. What they had not been reviewed by was anybody who had undergone the procedure, and the absence shows in a way that is obvious once seen and invisible until then. A leaflet written by a clinician describes what the clinician does. A patient wants to know what happens to them, which is a different account of the same event.\n\nHealth literacy is usually invoked at this point, and the concept is sound but the way it is applied in practice troubles me. It has come to function as a property of patients — a deficit they carry into the consultation, to be accommodated with simpler words. That framing puts the difficulty in the wrong place. A leaflet that a person cannot use is not evidence about that person. It is evidence about the leaflet, and the shift from one reading to the other changes what you do next: you stop simplifying vocabulary and start asking what the document is for.\n\nOur redesign was not sophisticated. We kept the clinical content, moved it to the second page, and gave the first page over to a chronology written in the second person: what happens when you arrive, what you will feel, when you will be able to eat, when you can drive, when the pain typically peaks and when it typically stops. Every sentence on that page came from an interview with a patient who had been through it. Nothing was removed. The reading age fell, but I think that was incidental — the plainer language followed from writing about experience rather than about procedure.\n\nThe measured effect was modest and I will not overstate it. Calls to the ward in the first week after discharge fell by around a fifth, which is the outcome we had hoped to move. Whether patients were better informed I cannot say, because we did not test knowledge before and after, and I have some sympathy with a colleague who pointed out that a fall in calls could equally mean patients had been discouraged from ringing.\n\nTwo things I would now regard as settled. The first is that the second-person chronology should come first for every procedural leaflet we produce; the cost of doing it is one interview and an afternoon. The second is that translation is not the same as adaptation, and we treated it as though it were. Our leaflets exist in eleven languages, all of them faithful translations of an English document whose assumptions — about who drives, who cooks, who will be at home during the day, who a patient will consult before deciding — do not hold uniformly across the communities we serve. They are accurate and they are not, in several of those communities, usable, which is a harder thing to notice than a mistranslation, because nothing in the document is wrong. A faithful translation of an unsuitable document is an unsuitable document in another language.\n\nWhat I have not solved, and what I suspect is not solvable at leaflet level, is that the people least able to use written information are also the least likely to be given time in the consultation to compensate for it. The leaflet is doing the most work exactly where it is least equipped to, and improving the document does not touch that. It is a scheduling problem wearing the costume of a literacy problem, and I notice that the version of it we choose to work on is the one that costs nothing.\n\nA separate failure, which the redesign did not touch, is the moment of handing over. Most leaflets are given at discharge, folded into a bag with a prescription and a follow-up card, at the point when a patient is least able to read anything. The page is then expected to work days later, in a house, with nobody to ask. Timing is not a property of the text, and it was the text we improved.\n\nThere is a smaller point I would add for anyone doing this work. Interview the patients who did badly, not only the ones who did well. Our chronology came from people whose recovery had been ordinary, and it reads, in retrospect, slightly optimistic. A patient whose pain lasts three weeks rather than one does not find the leaflet reassuring; they find it evidence that something has gone wrong, which is the opposite of what the page was for."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what did the audit finding that most struck the writer concern?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "The reading age at which the leaflets had been written"
            },
            {
              "id": "b",
              "text": "The frequency with which complications were listed inaccurately"
            },
            {
              "id": "c",
              "text": "The mismatch between what leaflets answered and what patients ask"
            },
            {
              "id": "d",
              "text": "The number of leaflets that had never been reviewed by a committee"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["paragraph"],
          "stem": "In the second paragraph, what had the leaflets not been reviewed by?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "anyone who had undergone the procedure"
            },
            {
              "id": "b",
              "text": "a clinician working outside the specialty"
            },
            {
              "id": "c",
              "text": "a committee with lay representation"
            },
            {
              "id": "d",
              "text": "an editor trained in plain-language writing for clinical audiences"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph","writer"],
          "stem": "What is the objection to how health literacy is applied?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "It rests on measures that were designed for a different purpose"
            },
            {
              "id": "b",
              "text": "It has been adopted more slowly in secondary than in primary care"
            },
            {
              "id": "c",
              "text": "It is invoked chiefly by services seeking to explain poor outcomes"
            },
            {
              "id": "d",
              "text": "It treats the difficulty as something the patient brings"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "In the fourth paragraph, what was done in the redesign?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Complication frequencies were removed to shorten the document"
            },
            {
              "id": "b",
              "text": "The first page was given over to a chronology of the patient's experience"
            },
            {
              "id": "c",
              "text": "The leaflet was rewritten by a professional plain-language editor"
            },
            {
              "id": "d",
              "text": "The clinical content was condensed and merged with the practical advice into a single page"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "What does the writer say about the fall in calls to the ward?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It was larger than the department had expected before the change"
            },
            {
              "id": "b",
              "text": "It may indicate discouragement rather than improved understanding"
            },
            {
              "id": "c",
              "text": "It was not sustained beyond the first month after the redesign"
            },
            {
              "id": "d",
              "text": "It occurred only among patients who had received the new leaflet"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["reference"],
          "stem": "In the sixth paragraph, what does the word \"They\" refer to?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "the leaflets produced in the eleven other languages"
            },
            {
              "id": "b",
              "text": "the communities that the service is responsible for serving"
            },
            {
              "id": "c",
              "text": "the assumptions carried by the original English document"
            },
            {
              "id": "d",
              "text": "the clinicians who reviewed the leaflets before publication"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "Which assumptions in the English leaflets does the writer question?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Assumptions about the frequency of the complications described"
            },
            {
              "id": "b",
              "text": "Assumptions about how much time a patient will spend in hospital"
            },
            {
              "id": "c",
              "text": "Assumptions about household roles and who is consulted"
            },
            {
              "id": "d",
              "text": "Assumptions about the level of formal education a reader will have"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the seventh paragraph, how is the underlying problem characterised?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "As a scheduling problem presented as one of literacy"
            },
            {
              "id": "b",
              "text": "As a failure of training among those who write the documents"
            },
            {
              "id": "c",
              "text": "As a consequence of producing leaflets centrally rather than locally"
            },
            {
              "id": "d",
              "text": "As evidence that written information should be abandoned altogether"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The easiest thing in the room to write",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-easiest-thing-in-the-room-to-write",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A prescription costs nothing to write and a great deal to withhold, and any account of antibiotic use that does not begin there is describing a different problem from the one clinicians actually have. The pharmacological case for restraint is not in dispute; I have never met a colleague who disputes it. What is in dispute, at four in the afternoon, is what a doctor is supposed to do with a patient who may be developing something serious and may equally be three days into a virus, when the tools for telling the two apart do not report back for forty-eight hours.\n\nStewardship programmes address this with guidance, with audit, and with feedback, and it is into the feedback that most of the effort now goes. Prescribers receive a figure showing their own rate against that of their peers, sometimes with a coloured marker beside it. It has a measurable effect, and the effect runs in the right direction, and I want to set out why I have nonetheless come to think it is the weakest of the three.\n\nA rate is not a decision. It is the sum of a year of decisions taken under conditions the number does not record: how many of those patients were seen at the end of a long shift, how many could not be reviewed the next day because they lived forty minutes from the surgery, how many had already been sent home twice. A prescriber whose list is drawn from a deprived population with poor access to follow-up will show a higher rate than a colleague in the next town, and the difference between them may be entirely appropriate. Adjusting for this is possible and almost nobody does it, because the adjustment is contestable and the raw number is not.\n\nThe delayed prescription is the intervention I have most changed my mind about. I was enthusiastic about it for years. It hands the patient a written object, defers the decision to a point at which the illness has declared itself, and reduces consumption in trials by a margin that is real. What those trials measure is whether the medicine is taken. What they do not measure is what the patient concludes, and the patients I have asked conclude something I never intended: that the doctor thought they needed it and was not permitted to give it today. The paper in the drawer teaches the wrong lesson while producing the right number.\n\nThere is a second-order effect that stewardship discussion rarely reaches. A doctor who declines and is wrong finds out within the week, vividly, and sometimes in a formal record. A doctor who prescribes and is wrong finds out never. Nothing in the feedback structure corrects that imbalance; it runs in the opposite direction from the incentive it was built to counter, and it explains why guidance that everybody accepts is followed less than everybody expects.\n\nWhat has worked in our practice is smaller and harder to publish. We changed the safety net. A patient who is not given an antibiotic now leaves with a named time and a route — not \"come back if you get worse\", which asks a frightened person to make a clinical judgement, but a telephone appointment already booked for the following afternoon, which they are free to cancel. Prescribing fell by an amount I would not put in a paper, because we changed one thing in one practice with no control group. What I am more confident of is that the conversations themselves became shorter and less adversarial, which had not been the aim.\n\nI am wary of the language that has grown up around all this. Calling a prescription \"inappropriate\" after the fact, with the culture result in hand, describes a decision that was never available at the time it was made. Retrospective correctness is not a standard any other part of medicine is judged by, and where it has been applied to antibiotics it has produced defensiveness rather than restraint. The honest description of most of these decisions is that they were taken without enough information, and the remedy for that is better information sooner, not sterner adjectives.\n\nThe thing that would change my own prescribing most is on no stewardship agenda I have seen, because it is not a behavioural intervention and it costs money: a test that separates bacterial from viral infection in the room, in minutes, with a result I would be willing to defend to a coroner. Everything else we are doing is an attempt to manage the consequences of not having one. That is worth saying plainly, because a decade of behaviour-change programmes has quietly reframed a diagnostic problem as a problem of discipline, and the two have different solutions and very different costs."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what is identified as the clinician's difficulty?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Colleagues who dispute the pharmacological case for restraint"
            },
            {
              "id": "b",
              "text": "Judging between two possibilities before the test reports"
            },
            {
              "id": "c",
              "text": "The cost of the prescriptions that are written"
            },
            {
              "id": "d",
              "text": "Patients who arrive expecting an antibiotic to be offered"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"It\" refer to?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "the guidance issued by stewardship programmes"
            },
            {
              "id": "b",
              "text": "the coloured marker placed on the report"
            },
            {
              "id": "c",
              "text": "the peer-comparison feedback given to prescribers"
            },
            {
              "id": "d",
              "text": "the audit from which the figures come"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, why is a prescribing rate said to mislead?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "It is calculated over too short a period to be stable"
            },
            {
              "id": "b",
              "text": "It is reported to prescribers long after the decisions were made"
            },
            {
              "id": "c",
              "text": "It counts repeat prescriptions alongside new ones"
            },
            {
              "id": "d",
              "text": "It ignores the circumstances in which the decisions were taken"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "What is said about the delayed prescription?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It reduces consumption but may leave the wrong impression"
            },
            {
              "id": "b",
              "text": "It has not been shown to reduce consumption in trials"
            },
            {
              "id": "c",
              "text": "It works best when the patient is telephoned the following day"
            },
            {
              "id": "d",
              "text": "It should be reserved for patients who cannot easily return"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what imbalance is described?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Guidance is issued faster than it can be read"
            },
            {
              "id": "b",
              "text": "Deprived populations are audited more closely than others"
            },
            {
              "id": "c",
              "text": "A wrong refusal becomes known; a wrong prescription does not"
            },
            {
              "id": "d",
              "text": "Senior clinicians are challenged far less often than their juniors are"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph"],
          "stem": "In the sixth paragraph, what did the practice change?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "The threshold at which an antibiotic is offered"
            },
            {
              "id": "b",
              "text": "The wording of the advice printed on the leaflet"
            },
            {
              "id": "c",
              "text": "The length of the appointment allocated to such patients"
            },
            {
              "id": "d",
              "text": "How the safety net after a refusal works"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "What objection does the writer make to the word \"inappropriate\"?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It is applied inconsistently between primary and secondary care"
            },
            {
              "id": "b",
              "text": "It judges a decision by information that arrived later"
            },
            {
              "id": "c",
              "text": "It has been borrowed from a regulatory rather than a clinical vocabulary"
            },
            {
              "id": "d",
              "text": "It is understood by patients to mean something stronger than intended"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what does the writer say would change his prescribing most?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "A rapid test that distinguishes bacterial from viral infection"
            },
            {
              "id": "b",
              "text": "Stronger national guidance with clearer thresholds for treatment"
            },
            {
              "id": "c",
              "text": "A behavioural programme designed around each prescriber's own comparative data"
            },
            {
              "id": "d",
              "text": "Protected time to discuss decisions with a microbiologist"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — A note for a reader who never arrives",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "a-note-for-a-reader-who-never-arrives",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "The clinical note has changed its reader. Within living professional memory it was written for the next person to see the patient — a colleague at three in the morning who needed to know what had been thought, and why. It is now composed, in substantial part, for people who will read it only if something goes wrong: a coder, an auditor, a solicitor, a panel. Nobody decided this. It is the accumulated result of a hundred reasonable requirements, each of which asked for one more thing to be recorded, and between them they have produced a document that is longer, more complete, and considerably less useful.\n\nCopy-forward is the mechanism most often blamed, and the blame is misplaced in an instructive way. Yesterday's assessment, yesterday's problem list, yesterday's plan: they are carried into today's entry with a single keystroke, and after a fortnight the record describes a patient who no longer exists. But nobody does this out of laziness. The alternative is retyping information that is already accurate, and a note which omits a problem will be criticised for the omission, whereas a note that carries a stale problem forward has never been criticised for anything.\n\nLength is the visible symptom and it is not the disease. I timed myself for a week: on a round of twelve patients I read, on average, about a fifth of what had been written about each of them, and I chose that fifth by scanning for the two or three places where somebody's judgement was likely to sit rather than somebody's compliance. Every clinician I have asked does a version of the same thing. We have built a document that is read by skipping, and we then hold people to the parts they skipped.\n\nThe most valuable line in any note is the one hardest to write and least often present: what the clinician believed was happening, what else it might be, and what would change their mind. That sentence is a hostage. It records uncertainty in permanent form, and uncertainty in permanent form is what a person is asked about, years afterwards, by somebody who already has the answer in front of them. So it is left out, and what remains is a list of observations from which no reasoning can be reconstructed.\n\nStructured templates were supposed to solve this, and they have solved the wrong half of it. A template guarantees that the fields are filled. It cannot make the content of a field mean anything, and it introduces a failure that free text does not have: a box completed by default reads exactly like a box completed by thought. \"No red flags\" may be the conclusion of a careful review or the setting the screen arrived in, and nothing in the note tells the two apart. I would rather read four honest sentences than a fully populated form.\n\nThere is a defence of the present arrangement that deserves more than I usually give it. Notes written for the next clinician alone were frequently unreadable, sometimes missing altogether, and often silent on matters — allergies, capacity, what the family had been told — whose absence caused real harm. The requirements accumulated because each of them answered somebody's death. Any proposal to strip the note back has to say which of those requirements it is prepared to lose, and I notice that such proposals almost never do.\n\nMy own position is narrower than the one I am usually taken to hold. I do not want fewer requirements. I want the note to have two parts that are visibly different: a record, which may be as long and as templated as governance needs it to be, and an assessment, which is short, signed, written in sentences, and which no system is permitted to populate on anyone's behalf. Services that have separated the two report that the second part is read. That is not a strong evidence base. It is more than the alternative can show.\n\nWhat persuades me is a smaller observation, taken from handover. When a colleague describes a patient to me in speech, the account runs to about ninety seconds, carries the reasoning, names the worry, and is very nearly always accurate. The same colleague's written entry about the same patient, made an hour later, contains none of the worry and most of the observations. Nothing about the person had altered in between. What altered was who they believed would read it, and until that alters back, better software will only produce the wrong document faster."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what change is described?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "The note has become shorter and less complete over time"
            },
            {
              "id": "b",
              "text": "The note is produced by administrators rather than by doctors"
            },
            {
              "id": "c",
              "text": "The note is now written largely for readers other than clinicians"
            },
            {
              "id": "d",
              "text": "The note is now stored in a form that colleagues cannot easily reach"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"they\" refer to?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the clinicians who use copy-forward each day"
            },
            {
              "id": "b",
              "text": "the entries made on the previous day"
            },
            {
              "id": "c",
              "text": "the criticisms made of incomplete notes"
            },
            {
              "id": "d",
              "text": "the requirements asking for more to be recorded"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, what does the writer describe doing on a ward round?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Reading a fraction of each note, chosen by scanning"
            },
            {
              "id": "b",
              "text": "Recording how long each entry took the previous team to write"
            },
            {
              "id": "c",
              "text": "Reading every entry in full and timing the exercise"
            },
            {
              "id": "d",
              "text": "Asking colleagues to summarise the note before he read it"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "Why is the line recording a clinician's reasoning often left out?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "It takes longer to write than the observations do"
            },
            {
              "id": "b",
              "text": "Templates provide no field in which to place it"
            },
            {
              "id": "c",
              "text": "It duplicates information already held elsewhere in the record"
            },
            {
              "id": "d",
              "text": "It can be used against the clinician afterwards"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what failing of templates is identified?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They take longer to complete than free text does"
            },
            {
              "id": "b",
              "text": "They are revised too rarely to reflect current guidance"
            },
            {
              "id": "c",
              "text": "A default entry looks exactly like a considered one"
            },
            {
              "id": "d",
              "text": "They cannot be adapted to the needs of different specialties"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph","writer"],
          "stem": "In the sixth paragraph, what does the writer concede?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "That each requirement answered a real harm"
            },
            {
              "id": "b",
              "text": "That templates have improved the completeness of the record"
            },
            {
              "id": "c",
              "text": "That earlier notes were shorter but easier to read"
            },
            {
              "id": "d",
              "text": "That governance departments have little influence on practice"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "What arrangement is proposed for the note?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "A single record with the assessment placed at the top"
            },
            {
              "id": "b",
              "text": "A shorter record with fewer governance requirements attached to it"
            },
            {
              "id": "c",
              "text": "A record reviewed by a second clinician before it is filed"
            },
            {
              "id": "d",
              "text": "A record, and a short assessment nobody may auto-fill"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph"],
          "stem": "In the final paragraph, what is said about spoken handover?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It is less accurate than the written entry made afterwards"
            },
            {
              "id": "b",
              "text": "It carries the reasoning that the written entry omits"
            },
            {
              "id": "c",
              "text": "It takes longer than most clinicians believe it does"
            },
            {
              "id": "d",
              "text": "It should be recorded and attached to the written note"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The rail that keeps somebody else awake",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-rail-that-keeps-somebody-else-awake",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Every falls policy I have worked under was written by people who will never be the one standing in a corridor at two in the morning deciding whether to put a rail up. That is not a complaint about the authors, who are careful and who have read more of the evidence than I have. It is an observation about what a policy can and cannot hold. A policy can tell you what to weigh. It cannot tell you what to do when the two things being weighed are a broken hip and a woman's ability to get out of bed and walk to the lavatory without asking anybody's permission.\n\nThe tools we use are risk-assessment scores completed on admission and repeated each week. Age, previous falls, medication, continence, cognition, mobility: these are added into a number, the number places the patient in a band, and the band determines what the care plan will say. The scores are reasonably good at identifying who is likely to fall. They are close to useless at indicating what to do about it, which is an entirely different question, and the plans that follow from them are for that reason mostly generic.\n\nBedrails are the clearest case. There is a body of evidence that they do not reduce falls, and a smaller body suggesting that they alter the character of the falls that do occur, because a patient determined to get up climbs over rather than steps down. Neither finding is believed at the bedside, and I include myself in that. What the rail actually buys is a few seconds of warning, and a few seconds is the difference between arriving and finding. Nobody writes that down, because written down it sounds as though the rail is for us.\n\nI have come to think the honesty problem here is larger than the clinical one. A rail restrains. We are not permitted to call it a restraint, and there are good historical reasons for the vocabulary we have instead, but the effect on an eighty-four-year-old who wants to walk to the window is the effect of a restraint whatever the form calls it. When we ask her permission we are asking it in a corridor staffed by one nurse to eleven patients, and her answer is shaped by what she can see we are able to offer.\n\nThe interventions with the best evidence are the ones our wards are least able to deliver. Medication review reduces falls. So does a physiotherapist seeing a patient within a day of admission, and adequate lighting, and not moving a confused person between four bays in a single week. Every one of those is a staffing or an estates decision taken far above the ward, and every one of them is absent from the care plan I am required to complete, which asks me instead to tick that the call bell is within reach.\n\nThere is a version of this argument I want to avoid making. It is not true that nothing at bedside level helps. Getting a patient into their own shoes rather than hospital slippers helps. Asking, on admission, what time of night they usually get up and for what reason helps more than any score and takes ninety seconds. The point is not that ward-level action is futile. It is that the actions which work are the ones nobody audits, and the actions which are audited are the ones that generate a record.\n\nOur incident forms make this worse in a way it took me years to see. A fall is reported. The form asks what was in place. If a rail was down, that appears; if the bell was out of reach, that appears. There is no field for the fact that the ward was two staff short, because staffing belongs to a separate reporting system that goes somewhere else and is never attached to the fall. So the record of every fall in this hospital reads as a series of omissions at the bedside, and the pattern that would show something else is dismantled at the point of entry.\n\nWhat I would change first is the least ambitious thing on this list. I would stop asking whether a patient is at risk of falling and start asking what this patient will get out of bed for tonight, and what would make that safe. The first question produces a band. The second produces a plan that is about one person, and it can be answered by anyone willing to sit down for two minutes, which on most nights is the part we do not have."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what is said about falls policies?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "They are written without reference to the published evidence"
            },
            {
              "id": "b",
              "text": "They are revised too often for nurses to keep up with them"
            },
            {
              "id": "c",
              "text": "They place too much weight on the patient's own preferences"
            },
            {
              "id": "d",
              "text": "They cannot resolve the judgement made at the bedside"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"these\" refer to?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the tools completed on admission and repeated weekly"
            },
            {
              "id": "b",
              "text": "the factors entered into the score"
            },
            {
              "id": "c",
              "text": "the bands into which the patients are placed"
            },
            {
              "id": "d",
              "text": "the care plans that follow from the score"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, what do bedrails actually achieve?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They reduce the number of falls among confused patients"
            },
            {
              "id": "b",
              "text": "They are preferred by relatives over the alternatives available"
            },
            {
              "id": "c",
              "text": "They give staff a few seconds of warning"
            },
            {
              "id": "d",
              "text": "They lower the severity of the injuries that falls produce"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph","writer"],
          "stem": "What does the writer say about the vocabulary used for bedrails?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "The chosen words describe the effect on the patient accurately"
            },
            {
              "id": "b",
              "text": "The terms differ between nursing and medical documentation"
            },
            {
              "id": "c",
              "text": "The avoided word still describes the patient's experience"
            },
            {
              "id": "d",
              "text": "The vocabulary has been imposed by regulators without consultation"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what is said about the best-evidenced interventions?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "They lie outside the ward's control"
            },
            {
              "id": "b",
              "text": "They have been tested only in populations unlike those on the ward"
            },
            {
              "id": "c",
              "text": "They are gradually being introduced as funding becomes available"
            },
            {
              "id": "d",
              "text": "They depend on equipment that most wards do not yet possess"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph","writer"],
          "stem": "What is conceded about action at the bedside?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "That its effect is too small to measure reliably"
            },
            {
              "id": "b",
              "text": "That it is more expensive than it first appears"
            },
            {
              "id": "c",
              "text": "That it should be replaced by staffing decisions"
            },
            {
              "id": "d",
              "text": "That some of it helps but is not audited"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph"],
          "stem": "In the seventh paragraph, what fault is found with the incident form?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It is completed too long after the event to be reliable"
            },
            {
              "id": "b",
              "text": "It has no field for staffing levels"
            },
            {
              "id": "c",
              "text": "It is reviewed by managers who did not witness the fall"
            },
            {
              "id": "d",
              "text": "It requires detail that discourages staff from reporting at all"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what change does the writer propose?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Asking what the patient will get up for tonight"
            },
            {
              "id": "b",
              "text": "Repeating the risk assessment more frequently than once a week"
            },
            {
              "id": "c",
              "text": "Training all staff to complete the assessment to one standard"
            },
            {
              "id": "d",
              "text": "Recording the reason a patient last got out of bed unaided"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Six months, and where the number came from",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "six-months-and-where-the-number-came-from",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Ask a dentist why the check-up interval is six months and you will get one of three answers: because the evidence supports it, because patients expect it, or an honest shrug. The first is the answer I gave for most of my career and it is the one I can no longer defend. The interval has no trial behind it. It has a history, which is a different thing, and the history is more interesting than the number: it appears to have entered practice through convention and administrative convenience, and to have remained there because nothing ever displaced it.\n\nGuidance in this country abandoned the fixed interval some years ago and put in its place a range determined by assessed risk — as short as three months, as long as two years for a low-risk adult. It was welcomed by the profession in principle and adopted by the profession slowly, and the gap between those two facts is where most of the interesting behaviour sits.\n\nWhy the slowness? Not ignorance; the guidance is short and everybody has read it. Partly it is the appointment book, which is built around predictable recall and does not absorb a two-year gap without effort. Partly it is that a longer interval must be explained to a patient who has understood six months as a standard of care, and the explaining takes longer than the examination. And partly — this is the part we discuss least — a recall is an appointment, an appointment is income, and telling a healthy adult to return in two years carries a cost that falls on the practice and a benefit that does not.\n\nI do not think this is corruption and I would resist anyone describing it so. Almost nobody consciously books a patient early for the money. What happens is subtler: when the evidence is equivocal and the incentive points one way, the equivocal cases resolve in that direction with remarkable consistency, and each individual decision feels defensible to the person making it. The pattern is visible only in aggregate, and no individual dentist ever sees the aggregate.\n\nThere is a real clinical argument on the other side and it should not be lost here. A short interval catches early caries, which is cheap to treat; a long one catches it later, which is not. Risk status also moves — a patient who was low risk at forty may not be at forty-six, and the mechanism for noticing that change is the very appointment we propose to space out. Anyone presenting extended intervals as costless is not describing dentistry as it is practised on the population we actually see.\n\nWhat has altered my own practice is not the interval but what I do with the time it releases. Where I have extended a recall, I have spent part of the saved chair time on something the six-month rhythm never allowed: a proper conversation about diet, about what a patient drinks between meals, about the sugar in medicines they may take for years. That conversation does not fit inside a check-up. It is the only part of the appointment with any chance of changing the disease rather than repairing it.\n\nThe recall letter deserves a mention of its own. Ours said, for twenty years, that the patient was \"due\" for examination. Due is the language of obligation, and it made the interval look like a rule rather than a judgement. We replaced it with a sentence explaining that the timing had been chosen for this patient and giving the reason, and the number of people telephoning to ask about it rose, which the practice manager first reported to me as a problem.\n\nChildren are where I find the argument hardest to hold. The evidence for extending intervals is drawn largely from adults, the disease moves faster in a child's mouth, and a family that loses the rhythm of attendance often does not recover it for years. I shorten intervals for children more readily than the guidance requires, and I am aware that this is exactly the pattern described earlier — an equivocal case resolving in the direction of another appointment. I believe my reason is clinical. I cannot prove it from the notes, and neither could anybody auditing me.\n\nIf I am honest about what would raise standards fastest, it is not a better interval. It is that most of what determines whether a set of teeth survives happens in a kitchen and a supermarket, and the profession's influence over either is negligible while its confidence about the six-month appointment remains high. We are very good at the part of this we can bill for, and we have organised our evidence, our guidance and our diaries around that part, and I do not exempt myself."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what does the writer say about the six-month interval?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It rests on a trial whose findings have since been questioned"
            },
            {
              "id": "b",
              "text": "It reached practice through convention rather than evidence"
            },
            {
              "id": "c",
              "text": "It was introduced by regulators in response to public demand"
            },
            {
              "id": "d",
              "text": "It has been abandoned everywhere except in general practice"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"It\" refer to?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "the fixed six-month interval"
            },
            {
              "id": "b",
              "text": "the risk assessment made at each visit"
            },
            {
              "id": "c",
              "text": "the guidance that replaced the fixed interval"
            },
            {
              "id": "d",
              "text": "the two-year maximum set for low-risk adults"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, which reason for slow adoption is described as least discussed?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "The difficulty of explaining a longer gap to patients"
            },
            {
              "id": "b",
              "text": "The design of the appointment book around recall"
            },
            {
              "id": "c",
              "text": "The absence of training in risk assessment methods"
            },
            {
              "id": "d",
              "text": "The effect of longer intervals on practice income"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph","writer"],
          "stem": "What does the writer say about the influence of income on decisions?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It works through equivocal cases, not conscious choice"
            },
            {
              "id": "b",
              "text": "It has been exaggerated by critics outside the profession"
            },
            {
              "id": "c",
              "text": "It affects newly qualified dentists more than established ones"
            },
            {
              "id": "d",
              "text": "It is prevented by the guidance now in force"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what argument is made for shorter intervals?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Patients prefer the reassurance that frequent examination gives"
            },
            {
              "id": "b",
              "text": "Practices with short intervals report fewer emergency attendances"
            },
            {
              "id": "c",
              "text": "Early decay is cheap to treat and risk changes"
            },
            {
              "id": "d",
              "text": "The examination itself has a preventive effect on patient behaviour"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph","writer"],
          "stem": "In the sixth paragraph, what does the writer do with the saved chair time?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Offer additional appointments to higher-risk patients"
            },
            {
              "id": "b",
              "text": "Discuss diet and what patients drink between meals"
            },
            {
              "id": "c",
              "text": "Carry out a more thorough examination at each visit"
            },
            {
              "id": "d",
              "text": "Complete the risk assessment the guidance requires"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph"],
          "stem": "What was the effect of rewriting the recall letter?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "Attendance rose among patients who had previously lapsed"
            },
            {
              "id": "b",
              "text": "Complaints about the practice fell over the following year"
            },
            {
              "id": "c",
              "text": "The practice manager reported an improvement in bookings"
            },
            {
              "id": "d",
              "text": "More patients telephoned to ask about their interval"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what conclusion is reached?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Influences outside the surgery matter more"
            },
            {
              "id": "b",
              "text": "The profession should campaign for changes to food labelling"
            },
            {
              "id": "c",
              "text": "The evidence for prevention is weaker than for restoration"
            },
            {
              "id": "d",
              "text": "Risk-based recall should be made mandatory across practices"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The tray that goes back full",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-tray-that-goes-back-full",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Malnutrition in hospital is not a shortage of food. There is food; it arrives three times a day, it is nutritionally adequate on paper, and a great deal of it returns to the kitchen untouched. I have spent enough of my career in front of screening scores to be confident that the profession's usual account of this problem — that we are not identifying patients quickly enough — describes something real and describes the smaller half of it.\n\nThe screening tool most of us use asks three things: current body mass index, unintentional weight loss over the preceding months, and whether acute illness has meant no intake for more than five days. It takes about four minutes, it is completed on admission by a nurse who has nine other admissions waiting, and it produces a score that triggers a referral. As an instrument for finding people at risk it performs about as well as anything else available to us.\n\nWhat it does not do — what no screening tool does — is tell anybody why the tray went back. The reasons I meet on a ward round are not nutritional. A woman cannot reach the tray because it was set down on the side of a table she is unable to turn towards. A man will not eat in front of other people because his dentures are in a locker two floors away. Somebody was taken to imaging at half past twelve and the meal was cleared before they returned. None of these is captured by a score, and each is fixable within a day by a person who happened to notice.\n\nSupplement prescribing has become the profession's default answer and I have come to distrust my own enthusiasm for it. The drinks work when they are drunk. The audits I have run put adherence somewhere below half, the reasons are unglamorous — they are sweet, they are cold, they arrive with the drug round rather than with food — and the prescribing continues anyway, because a prescription is an action that leaves a record behind it. Fixing the mealtime leaves no record at all.\n\nThere is a resource argument that I want to state fairly rather than dismiss. Protected mealtimes, where ward activity halts for an hour, are effective and unpopular, and unpopular for defensible reasons: the physiotherapist covers four wards, the imaging list does not respect the lunch hour, and drug rounds carry safety constraints of their own. Everybody agrees with the principle, and the principle is the first thing surrendered on a busy day. Calling that a failure of commitment misdescribes it. It is a scheduling conflict between two safe practices, and it has never been resolved at the level where resolving it is possible.\n\nI have changed one thing in my own practice and it is embarrassingly small. I ask the ward to record, for the patients I am asked to see, what proportion of the last three meals was eaten and what had been on the tray. Not a food chart in the formal sense, which nobody completes reliably — three lines. That record answers more of my questions than the screening score does, because it separates a patient who cannot eat from a patient who will not eat this, and those two need entirely different things from me.\n\nWeight is the measurement everybody trusts and it is the one I trust least on an acute ward. A patient in heart failure loses four kilograms in a week and it is fluid. A patient in the next bay gains two and that is also fluid. We know this perfectly well and we go on plotting the line, and where the line is the trigger for referral, oedema conceals the very patients most likely to need us. There is no easy substitute — grip strength brings problems of its own — but the confidence placed in the number is not proportionate to what the number can bear.\n\nFamilies are the resource the ward plan never mentions. A daughter who arrives at six, and who knows that her mother has eaten a boiled egg every morning for fifty years, will achieve more in ten minutes than my recommendation achieves in a week — and she is usually asked to leave before the meal comes round. Visiting policy and nutrition policy are written by different people who never meet. I have raised this twice and been told, both times and quite reasonably, that infection control has a view.\n\nIf I could change one thing above ward level it would not be more dietitians, though I would take them. It would be that food is treated as a treatment and audited like one. Nobody would tolerate a medicine that was prescribed, dispensed, delivered to the bedside and then removed forty minutes later without anyone recording whether it had been taken. That is precisely the standard we apply to lunch, in a building where a fifth of admissions are already malnourished on the day they arrive."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, how is the profession's usual account described?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "As mistaken about the nutritional adequacy of the food"
            },
            {
              "id": "b",
              "text": "As too dependent on evidence gathered outside hospitals"
            },
            {
              "id": "c",
              "text": "As focused on a group of patients who are rarely admitted"
            },
            {
              "id": "d",
              "text": "As correct but covering only part of the difficulty"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"It\" refer to?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the score that triggers a referral"
            },
            {
              "id": "b",
              "text": "the screening tool used on admission"
            },
            {
              "id": "c",
              "text": "the record of unintentional weight loss"
            },
            {
              "id": "d",
              "text": "the referral made after screening"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, what kind of reasons are given for uneaten meals?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Practical reasons that a score does not record"
            },
            {
              "id": "b",
              "text": "Reasons of taste that catering departments could address"
            },
            {
              "id": "c",
              "text": "Reasons of appetite arising from the illness itself"
            },
            {
              "id": "d",
              "text": "Reasons connected with the patient's cultural preferences"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "What does the writer say about supplement drinks?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They have been shown to be ineffective in hospital patients"
            },
            {
              "id": "b",
              "text": "They are most useful when given alongside the drug round"
            },
            {
              "id": "c",
              "text": "They are prescribed partly because prescribing leaves a record"
            },
            {
              "id": "d",
              "text": "They are prescribed less often than the evidence would justify"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, how is the failure of protected mealtimes explained?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "As a conflict between practices that are each defensible"
            },
            {
              "id": "b",
              "text": "As evidence that staff do not accept the underlying principle"
            },
            {
              "id": "c",
              "text": "As the consequence of insufficient dietetic staffing on wards"
            },
            {
              "id": "d",
              "text": "As a problem that has been resolved in most other hospitals"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph","writer"],
          "stem": "What does the writer's three-line record distinguish?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Patients who are losing weight from those who are stable"
            },
            {
              "id": "b",
              "text": "Those who cannot eat from those refusing this"
            },
            {
              "id": "c",
              "text": "Patients referred early from those referred late"
            },
            {
              "id": "d",
              "text": "Patients whose intake is affected by medication from others"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "In the seventh paragraph, what objection is made to weight?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "It is recorded too infrequently to show a trend"
            },
            {
              "id": "b",
              "text": "The scales used on wards are rarely calibrated"
            },
            {
              "id": "c",
              "text": "It has been replaced in guidance by grip strength"
            },
            {
              "id": "d",
              "text": "Fluid shifts can conceal the patients most in need"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what change is proposed?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "An increase in the number of dietitians employed"
            },
            {
              "id": "b",
              "text": "That screening be repeated weekly rather than on admission"
            },
            {
              "id": "c",
              "text": "That food be audited like a medicine"
            },
            {
              "id": "d",
              "text": "That catering be brought under clinical management"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — Reconciliation, and the list that is never true",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "reconciliation-and-the-list-that-is-never-true",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Medicines reconciliation is the most valuable half-hour in pharmacy practice and the least visible. A patient arrives with a bag, or without one; with a repeat slip four months old, or with a memory of a small white tablet taken at night. Somebody has to establish what this person was actually taking yesterday, which is a different question from what they had been prescribed, and the gap between those two is where most of the harm we prevent actually lives.\n\nThere are usually four sources and not one of them is authoritative. The general practice record, the patient's own account, the bag they brought in, and — increasingly — a national summary drawn from dispensing data. They disagree with one another in most admissions I have reconciled, and the disagreement is not usually an error in any of them. A dispensing record says what left a pharmacy. It does not say what was swallowed.\n\nThe word \"reconciliation\" does some quiet damage of its own. It implies that a true list exists and that our task is to recover it. For a substantial minority of patients no true list exists. A man who takes his wife's diuretic when his ankles swell is on nobody's record and is not lying when he says he takes nothing else; a woman who stopped her statin eight months ago because of cramp has a repeat prescription saying otherwise and no note anywhere of why. What we produce is not a recovered truth. It is the best account obtainable in the time available, and it ought to be labelled as such.\n\nTime is the constraint everybody names and it is worth being precise about. The half-hour is not spent reading. It is spent telephoning a surgery that closes at six, waiting for a relative to get home and open a cupboard, and asking again a question the patient has already answered differently twice. The reading takes four minutes. Every attempt I have seen to make reconciliation faster has made the reading faster, which is like sharpening the knife when the difficulty is that the vegetables have not arrived.\n\nDischarge is where the greater loss occurs, and it receives a fraction of the attention. On admission, several people will eventually notice a discrepancy. On discharge, the list leaves the building at four o'clock on a Friday with a patient who will next be seen in a fortnight, and the changes made during the stay — the drug stopped for a reason nobody wrote down, the dose halved because of a creatinine that has since recovered — travel without their explanations. Half of them are restored within the month, and the restoration is not an error either. It is what any sensible prescriber does with an unexplained absence.\n\nThe remedy for that is a sentence, not a system. Beside each change, the reason and the intended duration: stopped because of hyponatraemia, review in six weeks; halved because of acute kidney injury, restore when function recovers. It costs perhaps ninety seconds a patient. I have never worked anywhere that did it consistently, and I have worked in places with three separate electronic systems for recording the change itself.\n\nThere is a criticism of my own profession here that I would rather make than have made for me. We have been better at counting our interventions than at asking which of them mattered. A record of eleven hundred interventions in a quarter is a record of activity, and we quote it because it is the number we have. Within that total, the intervention that prevented a haemorrhage and the one that corrected a misspelt formulation name are indistinguishable, and I have signed off such totals myself without pressing the point.\n\nSomething else has changed that we discuss less than we should. A growing share of what a patient takes was never prescribed by anybody. Vitamin preparations bought in a supermarket, a herbal capsule recommended by a relative abroad, a course of antibiotics obtained without a consultation and kept in a drawer against the next occasion — none of these appears in any record available to us, and they are volunteered only when the question is put in a way that does not sound like an accusation. \"Anything at all, including things you would not call medicine\" finds more than \"are you taking any other medication\", and the difference between those two sentences has probably done me more good than any software I have been given.\n\nWhat I would want a patient to understand, if they ever asked me, is that the list on their discharge letter is a considered estimate rather than a fact, and that the single most useful thing they can do is bring everything in the house to the next appointment — including what they stopped, and what belongs to somebody else. Every pharmacist reading this has found something important in a carrier bag. Almost none of us tell patients that the bag is the most reliable document in the building."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what is said to matter most?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "Whether the patient has brought a current repeat prescription slip"
            },
            {
              "id": "b",
              "text": "How quickly the reconciliation can be completed after admission"
            },
            {
              "id": "c",
              "text": "Whether the general practice record has been updated recently"
            },
            {
              "id": "d",
              "text": "What was taken, not what was prescribed"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"They\" refer to?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "the admissions that have been reconciled"
            },
            {
              "id": "b",
              "text": "the errors found in each of the records"
            },
            {
              "id": "c",
              "text": "the four sources of information"
            },
            {
              "id": "d",
              "text": "the summaries drawn from dispensing data"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph","writer"],
          "stem": "In the third paragraph, why is the word \"reconciliation\" criticised?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It has been borrowed from accountancy without adaptation"
            },
            {
              "id": "b",
              "text": "It describes a task that pharmacists no longer perform"
            },
            {
              "id": "c",
              "text": "It suggests that a single true list exists to be found"
            },
            {
              "id": "d",
              "text": "It is not understood by patients when it is used to them"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "What does the writer say the half-hour is spent on?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Reading the four available records carefully"
            },
            {
              "id": "b",
              "text": "Chasing information from surgeries and relatives"
            },
            {
              "id": "c",
              "text": "Explaining the changes to the patient in detail"
            },
            {
              "id": "d",
              "text": "Recording the outcome in the electronic system"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what happens to changes made during a stay?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "They are reversed by hospital teams before discharge"
            },
            {
              "id": "b",
              "text": "They are recorded twice in different systems"
            },
            {
              "id": "c",
              "text": "They are reviewed by a pharmacist within a fortnight"
            },
            {
              "id": "d",
              "text": "They travel without the reasons behind them"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph"],
          "stem": "What is proposed for each medication change?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "A note of the reason and intended duration"
            },
            {
              "id": "b",
              "text": "A second signature from the consultant responsible"
            },
            {
              "id": "c",
              "text": "An automatic alert sent to the general practitioner"
            },
            {
              "id": "d",
              "text": "A review appointment booked before the patient leaves"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "In the seventh paragraph, what criticism does the writer make of pharmacy?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It counts interventions without weighing their value"
            },
            {
              "id": "b",
              "text": "It has resisted the introduction of electronic systems"
            },
            {
              "id": "c",
              "text": "It reports fewer interventions than it actually makes"
            },
            {
              "id": "d",
              "text": "It has allowed other professions to take over the task"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what does the writer want patients to do?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Ask the pharmacist to explain each change made"
            },
            {
              "id": "b",
              "text": "Bring everything in the house to the appointment"
            },
            {
              "id": "c",
              "text": "Keep a written diary of doses actually taken"
            },
            {
              "id": "d",
              "text": "Check the discharge letter against the repeat slip"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The exercises nobody does",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-exercises-nobody-does",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Adherence to home exercise is the largest untreated problem in musculoskeletal physiotherapy and the one we are least equipped to discuss, because discussing it means admitting that the intervention we provide is not the treatment. The treatment is what the patient does on the fourteen days between appointments. What we provide is instruction, a plan, and — if we are honest about the mechanism — a reason to have started at all.\n\nThe figures we quote to one another come from studies whose definitions are so various as to be barely comparable. Some count a patient who performed any exercise at all in a week; some require the prescribed frequency; a few rely on a sensor in the equipment. They yield adherence estimates running from about a third to about four fifths, and that range tells you more about the measurement than it does about patients.\n\nMy own practice changed after a period of asking patients, at the six-week point, not whether they had done the exercises but what had got in the way. The answers were consistent and almost none of them concerned motivation. The programme took twenty-five minutes and they had assumed it had to be done in a single block. They had stopped because it hurt on the third day and had no way of knowing whether that pain was the ordinary kind or the kind that means stop. They could not remember the third exercise, and the sheet was in a drawer, carrying a photocopied diagram of a person who looked nothing like them.\n\nOf those, the pain question is the one I now count as a failure of my explanation rather than of the patient's resolve. Somebody leaving a physiotherapy department with a loading programme and no account of what acceptable discomfort feels like has been given a task without its stopping rule. We would not prescribe a medicine in that manner. I had been doing it for years, and had been writing in the notes that the patient was non-compliant, which is a sentence about them describing a gap in me.\n\nThere is a defence of the standard exercise sheet that deserves acknowledgement. It is quick, it is consistent, and it gives a patient something physical to carry away from a service where the appointment may be twenty minutes and the waiting list nine weeks. Any alternative costing ten further minutes a patient has to justify those minutes against the person at the end of that list. That is a real trade, and the profession has no good method for making it.\n\nWhat I have settled on costs about four minutes. Three exercises, not eight. One of them is chosen by the patient from a pair I regard as equivalent, which is the only element I cannot justify from evidence and which I keep because it changes the conversation. And a written line, in their words rather than mine, saying what the exercise is for — not \"gluteal strengthening\" but \"so I can get up the stairs at my mother's\". Fewer exercises are done more often, and eight exercises performed at the rate we actually observe is a smaller total dose than three.\n\nTechnology has helped less than we expected and I want to be careful about why. The applications are good. They remind, they demonstrate, they record, and the recording is genuinely useful in a way a paper diary never was. What they do not do is any part of the thing that was actually missing — the stopping rule, the reason, and somebody having asked what would get in the way. An application delivers a programme faithfully. It cannot notice that the programme was wrong for this person.\n\nThere is one group for whom none of this is the issue, and I mention them because they are easy to lose in an argument about explanation. A patient working two jobs, or caring for somebody at home, or in pain that wakes them, does not need a better-worded sheet. They need a programme that fits the day they actually have, which is sometimes two exercises and sometimes none until something else changes. I have learned to say that aloud rather than negotiate downwards from eight, because a patient told the programme is negotiable stops pretending, and what they tell me after that is usable.\n\nI am left with a conclusion I would have disliked as a student. The most important minutes of a musculoskeletal appointment are not the assessment and not the hands-on treatment, both of which I enjoy and am reasonably good at. They are the last four, in which a person decides whether what has just been described is something they are actually going to do. Almost everything about the way our services are designed — the throughput, the room, the note that must be finished before the next patient — treats those four minutes as the part that can safely be shortened."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what is said about the treatment?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "It takes place mainly between appointments"
            },
            {
              "id": "b",
              "text": "It is undermined by the length of the waiting list"
            },
            {
              "id": "c",
              "text": "It works only when instruction is given repeatedly"
            },
            {
              "id": "d",
              "text": "It has been shown to be less effective than believed"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"They\" refer to?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the sensors placed in the equipment"
            },
            {
              "id": "b",
              "text": "the studies with differing definitions"
            },
            {
              "id": "c",
              "text": "the patients who performed some exercise"
            },
            {
              "id": "d",
              "text": "the frequencies that had been prescribed"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, what did patients give as obstacles?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "A lack of interest in recovering quickly"
            },
            {
              "id": "b",
              "text": "The cost of the equipment they were asked to buy"
            },
            {
              "id": "c",
              "text": "Disagreement with the diagnosis they had been given"
            },
            {
              "id": "d",
              "text": "Difficulties they had not been prepared for"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph","writer"],
          "stem": "What does the writer now regard as his own failure?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "Prescribing more exercises than the evidence supports"
            },
            {
              "id": "b",
              "text": "Not explaining what acceptable discomfort feels like"
            },
            {
              "id": "c",
              "text": "Relying on printed diagrams rather than demonstration"
            },
            {
              "id": "d",
              "text": "Reviewing patients at six weeks rather than sooner"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what is said in defence of the exercise sheet?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "It is more accurate than the alternatives available"
            },
            {
              "id": "b",
              "text": "It has been preferred by patients in departmental surveys"
            },
            {
              "id": "c",
              "text": "It reduces the number of follow-up appointments needed"
            },
            {
              "id": "d",
              "text": "It is quick and fits a pressed service"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph"],
          "stem": "Why are fewer exercises preferred?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Because the total amount actually performed is greater"
            },
            {
              "id": "b",
              "text": "Because patients are more likely to remember the names"
            },
            {
              "id": "c",
              "text": "Because they can be demonstrated in a shorter appointment"
            },
            {
              "id": "d",
              "text": "Because the evidence for the additional exercises is weak"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph"],
          "stem": "What limitation of the applications is identified?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "They are used mainly by younger and more able patients"
            },
            {
              "id": "b",
              "text": "They record less reliably than a written diary does"
            },
            {
              "id": "c",
              "text": "They deliver a programme without noticing it is unsuitable"
            },
            {
              "id": "d",
              "text": "They cost more than departments are able to spend"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what does the writer identify as most important?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "The assessment carried out at the first appointment"
            },
            {
              "id": "b",
              "text": "The hands-on treatment given during the session"
            },
            {
              "id": "c",
              "text": "The last four minutes of the appointment"
            },
            {
              "id": "d",
              "text": "The note completed before the next patient arrives"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The image and the question it was asked",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-image-and-the-question-it-was-asked",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "A radiograph answers the question it was asked. Most of the difficulty in my working week arises from requests that do not contain one. \"Abdominal pain\", \"query fracture\", \"unwell\": these are not clinical questions, they are categories, and an image produced in response to a category is an image nobody has decided in advance how to read. When it later turns out to have been the wrong examination, the conversation is about the radiographer or about the report, and almost never about the sentence that started it.\n\nThe request form has become an administrative object rather than a clinical one. It was designed to carry a question from one clinician to another, and it now carries a code, a justification tick, and the minimum of free text the system will accept. I do not blame the person completing it. The form has thirty fields and rewards speed, and nothing in it makes a good question easier to write than a poor one.\n\nJustification is the part of my role the public knows least about and the part I would defend most vigorously. A radiographer may decline to perform an examination that cannot be justified, and the authority is real, is exercised, and is uncomfortable. Declining means telephoning a doctor who is busy, is often senior, and who may well be right in ways the form did not convey. The commonest outcome of that call is not cancellation. It is that a question emerges in conversation which nobody had written down, and the examination changes.\n\nIncidental findings have altered the character of the job more than any equipment I have worked with. A scan requested for one purpose now routinely yields two or three observations of uncertain meaning, each generating further imaging, and the aggregate of that further imaging is a substantial fraction of what my department now does. This is not a failure. It is the arithmetic of resolution: the better the picture, the more it contains that we cannot interpret with confidence. What has not kept pace is any agreed account of what should be done with the small ambiguous thing.\n\nRadiation dose is where the profession's public voice and its private conversation diverge, and I think we should close that gap ourselves rather than wait to be made to. Publicly we reassure, and the reassurance is broadly correct: a chest radiograph is a few days of natural background. Privately we know that the dose which matters is not the single examination but the accumulated total for a patient who has had eleven of them in three years, and that almost nothing in our systems adds that total up or puts it in front of anyone at the moment of ordering.\n\nThere is an argument I hear from colleagues which I believe is mistaken. It runs that better protocols will fix the poor request, because a protocol converts a vague indication into a defined sequence. Protocols are valuable and I would not work without them, but a protocol applied to a question nobody asked produces a technically excellent answer to nothing. The defect is upstream, in a thirty-second interaction between a tired doctor and a form, and no amount of downstream excellence reaches it.\n\nWhat has worked in our department is cheap and slightly undignified. A radiographer sits in the acute assessment area for two hours each morning. Requests get discussed rather than transmitted; roughly one in six changes; and those that change are not usually cancelled but redirected — a different modality, or the same one with a different focus. Nobody has published this. It works because a conversation carries what a form cannot, and it is the first thing withdrawn when we are short-staffed, which is most mornings.\n\nReporting intervals deserve a mention, because they change what a request means. An examination performed on Tuesday and reported the following week has, for a patient sent home on Wednesday, answered nothing in time to matter. Departments count examinations performed, which is the number that appears on every dashboard I have seen, and the interval to a report is kept somewhere else entirely. The two figures describe the same service, and only one of them describes what happened to the patient.\n\nThe patient's part in all of this is nearly invisible and should not be. They are asked to lie still in a cold room by somebody who holds thirty seconds of information about why they are there, and they very often ask that person what the picture shows — a question I am not permitted to answer and which they are entitled to ask. That moment is the most awkward in my day. I have come to think the honest reply is not \"the doctor will discuss it\", which sounds evasive, but a plain account of who reads it, when, and how they will hear. It takes fifteen seconds, and it is the only part of the examination that belongs to them."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what problem is described?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Requests that state a category rather than a question"
            },
            {
              "id": "b",
              "text": "Reports that are written in language clinicians misread"
            },
            {
              "id": "c",
              "text": "Examinations performed on the wrong part of the body"
            },
            {
              "id": "d",
              "text": "Delays between the request and the examination itself"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"It\" refer to?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "the code entered on the form"
            },
            {
              "id": "b",
              "text": "the free text the system accepts"
            },
            {
              "id": "c",
              "text": "the request form"
            },
            {
              "id": "d",
              "text": "the clinician completing the request"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, what is the usual outcome of a justification call?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "The examination is cancelled by the referring clinician"
            },
            {
              "id": "b",
              "text": "The radiographer is overruled by a senior doctor"
            },
            {
              "id": "c",
              "text": "The request is passed to a consultant radiologist"
            },
            {
              "id": "d",
              "text": "A question emerges and the examination is altered"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "What is said about incidental findings?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They have been reduced by more careful protocols"
            },
            {
              "id": "b",
              "text": "They follow predictably from better resolution"
            },
            {
              "id": "c",
              "text": "They are reported less often than they are seen"
            },
            {
              "id": "d",
              "text": "They occur mainly in older patients being scanned"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what concern about dose is raised?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Public reassurance about single examinations is inaccurate"
            },
            {
              "id": "b",
              "text": "Equipment is calibrated less often than regulations require"
            },
            {
              "id": "c",
              "text": "Nobody sees a patient's accumulated total"
            },
            {
              "id": "d",
              "text": "Patients are not told the dose of any examination"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph"],
          "stem": "In the sixth paragraph, why are protocols said to be insufficient?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They are revised too slowly to reflect new equipment"
            },
            {
              "id": "b",
              "text": "They cannot repair a request that asks nothing"
            },
            {
              "id": "c",
              "text": "They differ between departments in the same region"
            },
            {
              "id": "d",
              "text": "They are applied inconsistently by junior staff"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "What does the writer say about the radiographer in the assessment area?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "The arrangement has been published and widely adopted"
            },
            {
              "id": "b",
              "text": "It has reduced the department's total workload substantially"
            },
            {
              "id": "c",
              "text": "It was introduced after a formal review of requesting"
            },
            {
              "id": "d",
              "text": "About one request in six is redirected"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what does the writer propose saying to patients?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "Who reads the image, and when"
            },
            {
              "id": "b",
              "text": "An assurance that the findings are usually normal"
            },
            {
              "id": "c",
              "text": "A description of the dose the examination involves"
            },
            {
              "id": "d",
              "text": "That the doctor will discuss the result with them"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — What \"nil by mouth\" costs",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "what-nil-by-mouth-costs",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "The recommendation I make most often is the one I trust least. A patient has had a stroke, the swallow is unsafe on assessment, and I write that oral intake should stop and that feeding proceed by another route. Every part of that sentence is defensible on the day it is written. What the sentence does not carry, because the form has nowhere to put it, is that a proportion of the patients for whom I write it will never eat again, and that the decision producing that outcome took eleven minutes at a bedside.\n\nThe tools are a bedside assessment, sometimes a videofluoroscopic study, and increasingly an endoscopic examination at the bedside. These differ in what they can see, in what they cost, and in how long a patient waits for them, and the difference in waiting is the one that decides most cases. A study available on Thursday does not help a decision that has to be made on Monday, and the Monday decision is rarely revisited with the same seriousness once the patient is stable and the route is working.\n\nThickened fluids are the intervention I have most publicly changed my mind about, which is uncomfortable in a small profession. They reduce the incidence of penetration on an instrumental study, which is what we measure. Whether they reduce pneumonia is a great deal less clear, and what is clear, from asking, is that a good many patients dislike them enough to drink markedly less, and dehydration brings its own list of harms that arrive later and are attributed elsewhere. We have optimised one observable at the expense of an outcome nobody plots on our charts.\n\nRisk feeding — continuing oral intake in the knowledge that aspiration is likely — is the part of the work that most needs a conversation and most often receives a form. The conversation is not difficult to have if it is had early. What is genuinely difficult is having it at the point where the family is exhausted, the patient can no longer contribute to it, and somebody has to decide whether the pleasure of a spoonful of ice cream is worth a risk that nobody in the room can quantify for this individual.\n\nThere is a defence of caution here and I hold part of it myself. The clinician who permits oral intake and whose patient develops aspiration pneumonia will be asked to account for the decision. The clinician who withholds it, and whose patient is fed by tube for eleven months and dies without tasting anything, will not be asked about that at all. The imbalance is not created by any individual and it acts on all of us, and pretending we are immune to it is the least honest thing my profession does.\n\nWhat I now do differently is small and has changed my week more than any equipment ever has. Beside every recommendation to stop oral intake I write a date on which it will be reviewed and the name of the person who will review it. Not a plan for reassessment in general terms, which everybody writes and nobody owns. A date and a name. About a third of those reviews change the recommendation, and before I began doing this I would have guessed the figure was near zero, which tells you how confident I was and how wrong.\n\nFamilies ask one question more than any other and the profession answers it badly. They ask whether their relative will be able to eat again. The truthful answer, most of the time, is that we do not know and that the honest range is wide. What we tend to say instead is either an optimistic version or a set of qualifications so heavy that a family takes from it whichever half they were already expecting. I have started giving the range itself, with both ends named, and it is received better than either alternative.\n\nOral hygiene is the intervention with the least glamour and, on the evidence I find most persuasive, one of the largest effects. Aspiration of a clean mouth and aspiration of a neglected one are not the same event. Yet mouth care is delegated to whoever has time, recorded in a box on a chart, and abandoned first on a short shift, while a swallow assessment by a specialist is booked, protected and audited. If I could move one hour of attention in a stroke unit, it would not be towards my own assessment.\n\nThe part of this I cannot solve is that the assessment happens once, in a corridor of a busy ward, with a patient who is frightened and tired and who is being asked to swallow water in front of a stranger. Everything I conclude rests on that one performance. On the following Tuesday, rested, at home, with a cup they know, the same person may swallow perfectly well, and there is no mechanism by which I would ever find that out."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what is said about the recommendation?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It is made after prolonged observation of the patient"
            },
            {
              "id": "b",
              "text": "It is usually reversed within the following fortnight"
            },
            {
              "id": "c",
              "text": "It is defensible yet has consequences the form omits"
            },
            {
              "id": "d",
              "text": "It has become less common in recent years"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"These\" refer to?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "the patients being assessed"
            },
            {
              "id": "b",
              "text": "the three assessment methods"
            },
            {
              "id": "c",
              "text": "the decisions taken at the bedside"
            },
            {
              "id": "d",
              "text": "the delays before a study is available"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph","writer"],
          "stem": "In the third paragraph, what is the objection to thickened fluids?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "They are more expensive than the alternatives available"
            },
            {
              "id": "b",
              "text": "They have never been tested in stroke populations"
            },
            {
              "id": "c",
              "text": "They are difficult for ward staff to prepare correctly"
            },
            {
              "id": "d",
              "text": "They improve one measure while patients drink less"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "What makes the risk-feeding conversation difficult?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "The point at which it is usually held"
            },
            {
              "id": "b",
              "text": "Disagreement between clinicians about the evidence"
            },
            {
              "id": "c",
              "text": "The absence of any form for recording it"
            },
            {
              "id": "d",
              "text": "The reluctance of families to discuss feeding at all"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what imbalance is described?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "Senior clinicians are held to a different standard from juniors"
            },
            {
              "id": "b",
              "text": "Instrumental studies are more available in some hospitals"
            },
            {
              "id": "c",
              "text": "Only one of the two possible mistakes is ever questioned"
            },
            {
              "id": "d",
              "text": "Families are consulted about some decisions and not others"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph","writer"],
          "stem": "In the sixth paragraph, what does the writer now record?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "The reason the recommendation was made"
            },
            {
              "id": "b",
              "text": "A review date and a named person"
            },
            {
              "id": "c",
              "text": "The family's view of the recommendation"
            },
            {
              "id": "d",
              "text": "An estimate of the likelihood of recovery"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph"],
          "stem": "What is said about the question families ask most?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "It is asked less often than clinicians assume"
            },
            {
              "id": "b",
              "text": "It cannot be answered until an instrumental study is done"
            },
            {
              "id": "c",
              "text": "It is usually directed to nursing staff rather than to us"
            },
            {
              "id": "d",
              "text": "It is answered either too brightly or too cautiously"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what does the writer say he cannot solve?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "That everything rests on one frightened performance"
            },
            {
              "id": "b",
              "text": "That instrumental studies are rationed by cost"
            },
            {
              "id": "c",
              "text": "That families are absent when the decision is taken"
            },
            {
              "id": "d",
              "text": "That the ward is too noisy for a reliable assessment"
            }
          ]
        }
      ]
    }
  },
  {
    "subTest": "READING",
    "taskType": "READING_PART_C",
    "profession": null,
    "title": "Part C — The kitchen that is not the kitchen",
    "prompt": "Read the text and answer questions 1–8. Choose the answer (a, b, c or d) which best fits the writer's meaning.",
    "difficulty": "CORE",
    "topicTag": "the-kitchen-that-is-not-the-kitchen",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "passages": [
        {
          "id": "p1",
          "body": "Almost everything I decide about a person's ability to live at home is decided in a building nothing like their home. The assessment kitchen on our ward has a kettle at a height nobody's kettle is at, a floor with no rug on it, and a doorway wide enough for the frame. A patient who manages a cup of tea in that room has demonstrated that they can manage a cup of tea in that room. On the strength of it, I write that they are safe for discharge.\n\nThe home visit is the obvious remedy and it has been quietly disappearing for a decade. It costs a therapist most of a morning including travel, it removes that therapist from a ward carrying fourteen referrals, and it is the first activity cancelled when the service is short. Nobody has decided to stop doing home visits. They have simply become the thing that does not happen on a Tuesday, then on most Tuesdays, and then, in the service's own figures, a category with a small number beside it.\n\nWhat the ward cannot show me is not equipment. It is sequence, and it is habit. The order in which a person does things in their own house is built over decades and carries them past obstacles they could not describe if asked. A woman who cannot demonstrate a safe transfer on our plinth may have a route to her own bed involving a chest of drawers, a window sill and a doorframe, in an order she has never once had to think about. My assessment finds the deficit. Her house contains the compensation, and the two never meet in the same room.\n\nThe equipment we issue is the part of the job the public sees and the part I am least confident about. Rails, frames, perching stools, raised seats: they go out in large numbers, and such follow-up data as anybody can obtain suggests a substantial proportion are unused within three months. The reasons, when I ask, are seldom about the equipment itself. It was delivered while the patient was still in hospital and put in a room they do not use; nobody showed them; or it was right for the person who was discharged and wrong for the person they had become six weeks later.\n\nThere is a defence of standardised assessment that I want to state properly, because I benefit from it. A scored, structured assessment can be compared between therapists, tracked over time, and defended to a panel. My own clinical impression, however good, can be none of those things, and services built on clinical impression alone have historically been inconsistent in ways that harmed exactly the patients least able to complain. The score is not the enemy. The trouble begins when the score is treated as the finding rather than as one input to it.\n\nFamily is the variable that changes an assessment most and that we measure least. Whether a daughter lives ten minutes away or four hours away is worth more than any score I generate, and it is recorded, if at all, in a free-text field nobody analyses. We are also poor at asking what a family is actually willing to do, as against what they say in a meeting on a ward in front of a relative they love. Those two answers differ, they differ predictably, and the difference arrives three weeks later as a failed discharge.\n\nWhat I have changed is to stop asking whether somebody can perform a task and start asking how they did it last time. Not \"can you get to the toilet at night\", to which everybody says yes, but \"tell me about the last time you got up in the night — what did you hold on to\". The answers are specific, they are checkable against what I observe, and they have caught things no standardised assessment I use would have found. It costs nothing. It is also the first part of the assessment I abandon when the ward is under pressure, which I notice and have not fixed.\n\nThe uncomfortable fact underneath all of this is that a proportion of the people I discharge as safe are not safe, and a proportion of those I judge unsafe would have managed. Both errors are invisible to me. The first returns to a different ward under a different team; the second goes to a place they did not want to go, and nobody records what they might have been able to do. I have been in this profession for nineteen years and I have never once been told the outcome of an assessment I got wrong."
        }
      ],
      "questions": [
        {
          "id": "q1",
          "kind": ["paragraph"],
          "stem": "In the first paragraph, what is said about the assessment kitchen?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "It is used by far too many patients to remain clean"
            },
            {
              "id": "b",
              "text": "It shows only what a patient can do in that room"
            },
            {
              "id": "c",
              "text": "It lacks the equipment that most patients have at home"
            },
            {
              "id": "d",
              "text": "It is being replaced by simulation in newer hospitals"
            }
          ]
        },
        {
          "id": "q2",
          "kind": ["reference"],
          "stem": "In the second paragraph, what does the word \"It\" refer to?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "the home visit"
            },
            {
              "id": "b",
              "text": "the ward with fourteen referrals"
            },
            {
              "id": "c",
              "text": "the therapist's whole morning"
            },
            {
              "id": "d",
              "text": "the service that is short-staffed"
            }
          ]
        },
        {
          "id": "q3",
          "kind": ["paragraph"],
          "stem": "In the third paragraph, what can a ward assessment not reveal?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "The strength a patient can generate on a good day"
            },
            {
              "id": "b",
              "text": "The equipment a patient already owns and uses"
            },
            {
              "id": "c",
              "text": "The habits built up in a person's own home"
            },
            {
              "id": "d",
              "text": "The distance between rooms in the patient's house"
            }
          ]
        },
        {
          "id": "q4",
          "kind": ["paragraph"],
          "stem": "Why is issued equipment often unused?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "Because patients prefer to manage without assistance"
            },
            {
              "id": "b",
              "text": "Because the wrong items are ordered by ward staff"
            },
            {
              "id": "c",
              "text": "Because it is too expensive for services to replace"
            },
            {
              "id": "d",
              "text": "Because it arrives before anybody explains it"
            }
          ]
        },
        {
          "id": "q5",
          "kind": ["paragraph"],
          "stem": "In the fifth paragraph, what is said about standardised assessment?",
          "answer": "c",
          "options": [
            {
              "id": "a",
              "text": "It has been shown to predict discharge outcomes accurately"
            },
            {
              "id": "b",
              "text": "It should be replaced by the therapist's clinical impression"
            },
            {
              "id": "c",
              "text": "It is useful but is not itself the finding"
            },
            {
              "id": "d",
              "text": "It takes longer to complete than the visit it replaces"
            }
          ]
        },
        {
          "id": "q6",
          "kind": ["paragraph"],
          "stem": "In the sixth paragraph, what is said about families?",
          "answer": "a",
          "options": [
            {
              "id": "a",
              "text": "What they say differs from what they do"
            },
            {
              "id": "b",
              "text": "They are consulted too late in the discharge process"
            },
            {
              "id": "c",
              "text": "They are rarely willing to take on any caring role"
            },
            {
              "id": "d",
              "text": "Their views are recorded in a field that is analysed"
            }
          ]
        },
        {
          "id": "q7",
          "kind": ["paragraph","writer"],
          "stem": "What change has the writer made to his questioning?",
          "answer": "d",
          "options": [
            {
              "id": "a",
              "text": "He asks the family rather than the patient directly"
            },
            {
              "id": "b",
              "text": "He repeats the standardised assessment after a week"
            },
            {
              "id": "c",
              "text": "He records the answers in a structured scoring form"
            },
            {
              "id": "d",
              "text": "He asks about the last time, not about ability"
            }
          ]
        },
        {
          "id": "q8",
          "kind": ["paragraph","writer"],
          "stem": "In the final paragraph, what does the writer say about his errors?",
          "answer": "b",
          "options": [
            {
              "id": "a",
              "text": "They are corrected by the teams who see the patient next"
            },
            {
              "id": "b",
              "text": "He never learns the outcome of either kind"
            },
            {
              "id": "c",
              "text": "They occur mainly in patients discharged at weekends"
            },
            {
              "id": "d",
              "text": "They have decreased over nineteen years of practice"
            }
          ]
        }
      ]
    }
  }
];
