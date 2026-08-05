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
  }
];
