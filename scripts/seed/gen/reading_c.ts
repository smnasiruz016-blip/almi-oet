import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — When empathy becomes a clinical skill",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "CORE",
    topicTag: "empathy",
    payload: {
      passages: [
        {
          id: "p1",
          body: "For years I treated empathy as a personality trait, something a clinician either possessed or did not. That assumption was comfortable, but it quietly excused those of us who struggled to connect, as though warmth were beyond our control. The evidence now points the other way. Empathy, it seems, behaves less like a fixed gift and more like a technique that can be rehearsed, observed and refined. I do not mean the performance of feeling, which patients detect instantly, but the disciplined habit of pausing before responding. Critics worry that teaching empathy reduces it to a checklist, and they are not entirely wrong, yet a clumsy attempt to understand still beats a polished silence. What I have come to believe is that the skill is not in feeling more, but in showing, reliably, that one is trying to understand at all.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "What is the writer's main point about empathy?",
          options: [
            { id: "a", text: "It is an innate trait that cannot be taught." },
            { id: "b", text: "It can be developed as a learnable, practised skill." },
            { id: "c", text: "It is best expressed through a fixed checklist." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "The writer's attitude towards critics who fear empathy becomes a checklist is best described as",
          options: [
            { id: "a", text: "partly sympathetic but ultimately unconvinced by their objection." },
            { id: "b", text: "completely dismissive of any concern they raise." },
            { id: "c", text: "in full agreement that teaching empathy is harmful." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Note the qualifier 'they are not entirely wrong, yet': the writer concedes a point but disagrees overall. Don't let a partial concession be misread as full agreement.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — Evidence, experience and the bedside",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "STRETCH",
    topicTag: "evidence-based-practice",
    payload: {
      passages: [
        {
          id: "p1",
          body: "There is a tired argument in medicine that pits evidence against experience, as if a clinician must pledge loyalty to one camp. I find the framing unhelpful. A trial tells me what happened, on average, to a thousand people who are not my patient; my experience tells me how this particular person in front of me tends to respond. Neither claim is complete on its own. The danger I see most often is not too little evidence but too much certainty about how to apply it, with guidelines quoted as though they were commandments rather than carefully hedged averages. Yet I would not return to the era when senior opinion was unchallengeable, because experience untested by data is simply memory flattering itself. The honest position, uncomfortable as it is, sits in the friction between the two.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "Which statement best captures the writer's view of evidence and experience?",
          options: [
            { id: "a", text: "Clinical experience should override published evidence." },
            { id: "b", text: "Both are necessary and neither is sufficient alone." },
            { id: "c", text: "Published guidelines should be followed without exception." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "By saying experience untested by data is 'memory flattering itself', the writer is",
          options: [
            { id: "a", text: "praising the reliability of senior clinical opinion." },
            { id: "b", text: "warning that unexamined experience can be self-deceiving." },
            { id: "c", text: "arguing that data is irrelevant at the bedside." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The writer criticises 'too much certainty' but also rejects unchallenged opinion. When an author balances two cautions, the answer usually names the middle position, not either extreme.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — The quiet costs of finding more",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "STRETCH",
    topicTag: "overdiagnosis",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Screening campaigns are sold on a simple, appealing logic: find disease early and you save lives. Some of the time this is true, and I would not wish to discourage a frightened patient from a test that genuinely helps. But the arithmetic is rarely as clean as the posters suggest. Better imaging detects abnormalities that would never have caused harm, and once a finding has a name it is very hard to leave it alone. The patient who arrived feeling well leaves feeling marked, and the follow-up itself carries its own small risks. I am not against early detection; I am against pretending that detection is free. What troubles me is how seldom we tell people that doing nothing, watchfully, is sometimes the most skilful thing a clinician can offer.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "What is the writer's central concern about screening?",
          options: [
            { id: "a", text: "That screening tests are always unnecessary and should stop." },
            { id: "b", text: "That the harms of finding harmless abnormalities are downplayed." },
            { id: "c", text: "That imaging technology is not yet sensitive enough." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "The writer's view of choosing not to investigate is that it",
          options: [
            { id: "a", text: "can be a legitimate and skilful clinical choice." },
            { id: "b", text: "is always negligent and exposes patients to risk." },
            { id: "c", text: "should be the default response to every finding." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Watch the repeated qualifier 'I am not against early detection'. The writer targets how screening is presented, not screening itself; don't pick the absolute option.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — Running on empty in the caring professions",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "CORE",
    topicTag: "compassion-fatigue",
    payload: {
      passages: [
        {
          id: "p1",
          body: "When colleagues describe compassion fatigue, the language often suggests a personal failing, as though the worn-out nurse simply cared too much or managed her feelings too poorly. I resist that reading. The numbness so many of us recognise is rarely a defect of character; more often it is a predictable response to caring intensely within systems that give nothing back. Resilience training has its place, yet I have watched it become a convenient way to relocate an organisational problem onto the individual. Telling an exhausted team to breathe more mindfully, while the rota stays brutal, is not support but evasion. None of this means clinicians bear no responsibility for their own wellbeing, but the heaviest lever sits with those who design the work, not those who endure it.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "What does the writer believe is the main cause of compassion fatigue?",
          options: [
            { id: "a", text: "Individual clinicians caring too much and coping poorly." },
            { id: "b", text: "The conditions of work in unsupportive systems." },
            { id: "c", text: "A lack of mindfulness and breathing techniques." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "The writer's attitude towards resilience training is that it",
          options: [
            { id: "a", text: "is the most effective remedy currently available." },
            { id: "b", text: "can wrongly shift blame from the system to the individual." },
            { id: "c", text: "has no value whatsoever in clinical settings." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The writer says resilience training 'has its place' yet criticises its misuse. Distinguish a measured criticism from outright rejection ('no value whatsoever').",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — Whose decision is it anyway",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "CORE",
    topicTag: "patient-autonomy",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Respecting a patient's autonomy has become an unquestioned good, and rightly so after centuries of doctors deciding what was best for people without asking them. But I have begun to notice how the word can be used to avoid the harder parts of the job. Handing someone a list of options and stepping back is not autonomy; it can be abandonment dressed in respectful language. A frightened patient asking 'what would you do?' is not surrendering their independence, and refusing to answer in the name of neutrality strikes me as a quiet cruelty. Real respect, I think, means offering a recommendation while leaving the door genuinely open to refusal. Autonomy was never meant to be a reason for the expert in the room to fall silent.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "What is the writer's main criticism of how autonomy is sometimes applied?",
          options: [
            { id: "a", text: "That clinicians use it as an excuse to withhold guidance." },
            { id: "b", text: "That patients are given too little freedom to choose." },
            { id: "c", text: "That doctors still decide everything for patients." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "The writer believes that genuine respect for autonomy involves",
          options: [
            { id: "a", text: "withholding any personal recommendation to stay neutral." },
            { id: "b", text: "making a recommendation while honouring the patient's right to refuse." },
            { id: "c", text: "deciding the best course and persuading the patient to accept it." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The writer supports autonomy in principle but attacks one distortion of it. Identify the specific misuse being criticised rather than assuming the writer opposes the concept.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — The screen between us",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "CORE",
    topicTag: "technology-in-care",
    payload: {
      passages: [
        {
          id: "p1",
          body: "I am not one of those clinicians who pines for the age of paper. Electronic records have caught errors that would once have slipped through, and I would not give that safety back. Still, something has shifted in the consulting room that the efficiency figures do not capture. I spend a measurable part of every appointment looking at a monitor rather than a face, and patients have learned to wait politely while I type. The tool meant to free my attention has, in practice, divided it. None of this is an argument against the technology itself, which is largely sound; it is an argument about how thoughtlessly we have arranged it. A device that improves the record while degrading the encounter has solved one problem by creating another we are slower to measure.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "What is the writer's overall position on electronic records?",
          options: [
            { id: "a", text: "They are a mistake and paper systems were better." },
            { id: "b", text: "They bring real benefits but are poorly arranged around the patient." },
            { id: "c", text: "They have entirely improved the quality of consultations." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "By saying the technology has 'solved one problem by creating another we are slower to measure', the writer suggests that",
          options: [
            { id: "a", text: "the harm to the encounter is easy to quantify." },
            { id: "b", text: "the gain in record-keeping comes with a less visible cost." },
            { id: "c", text: "the technology has no measurable benefits at all." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Phrases like 'I am not one of those... who pines for paper' signal the writer accepts the technology. The criticism is about how it is used, not whether to use it.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — Sitting with not knowing",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "STRETCH",
    topicTag: "clinical-uncertainty",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Patients come to us hoping for certainty, and much of our training is an elaborate apparatus for supplying it. Yet the longer I practise, the more I distrust the confident voice, my own included. A great deal of medicine is the careful management of not knowing: a probable diagnosis, a likely response, an outcome we frame in ranges rather than promises. I used to think admitting uncertainty would frighten people or undermine their trust. Experience has taught me almost the opposite. When I say honestly that I am not yet sure but here is how we will find out, patients tend to relax, because they sense they are being told the truth. False confidence, by contrast, eventually collapses, and the trust it borrowed must be repaid with interest. Uncertainty, handled openly, is not a weakness in the relationship; it is often what holds it together.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "What has experience taught the writer about admitting uncertainty to patients?",
          options: [
            { id: "a", text: "It usually frightens patients and damages their trust." },
            { id: "b", text: "It tends to strengthen trust because patients sense honesty." },
            { id: "c", text: "It should be hidden behind a confident manner." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "The writer's view of projecting false confidence is that it",
          options: [
            { id: "a", text: "is a reliable way to reassure anxious patients." },
            { id: "b", text: "ultimately costs more trust than it gains." },
            { id: "c", text: "is necessary when a diagnosis is not yet clear." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The writer reverses an initial belief ('I used to think... Experience has taught me almost the opposite'). Make sure your answer reflects the later, revised view, not the abandoned one.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — What a good team really shares",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "CORE",
    topicTag: "teamwork-culture",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Hospitals love to celebrate teamwork, usually with posters of smiling staff and slogans about pulling together. I have worked in teams that fit the poster and were nonetheless quietly dysfunctional. What distinguishes the genuinely good ones, in my experience, is not warmth but candour: the junior who feels able to say 'I think that dose is wrong' to the consultant without rehearsing the sentence for an hour first. Friendliness can even disguise the problem, because a team that prizes getting along may bury the disagreements that keep patients safe. I am not arguing that morale does not matter; a miserable team frays. But if I had to choose, I would take a slightly tense group where people speak up over a cheerful one where everyone defers. Safety lives in the awkward sentences nobody wants to say.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "What does the writer consider the most important feature of a good team?",
          options: [
            { id: "a", text: "A warm and friendly atmosphere among staff." },
            { id: "b", text: "The freedom to speak up and voice disagreement." },
            { id: "c", text: "Strong loyalty that avoids open conflict." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "The writer suggests that an emphasis on friendliness can",
          options: [
            { id: "a", text: "guarantee that patients are kept safe." },
            { id: "b", text: "conceal the disagreements that protect patients." },
            { id: "c", text: "be the only thing that genuinely matters." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The writer concedes 'morale does matter' before ranking candour higher. A concession is not the main claim; identify what the writer would choose 'if I had to choose'.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — The arithmetic patients actually hear",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "STRETCH",
    topicTag: "risk-communication",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Tell a patient that a drug halves their risk and they will reach for the prescription pad themselves. Tell them the same fact differently, that it lowers their chance from two in a hundred to one in a hundred, and the enthusiasm cools. Both statements are true, which is precisely the problem. I have come to think that the way we phrase risk is not a neutral wrapping around the numbers but part of the message itself, shaping a decision before the patient has consciously made one. This is not an accusation that colleagues deceive; most of us reach for the more dramatic figure without noticing. Yet good intentions do not undo the effect. If I genuinely want a patient to choose for themselves, I owe them the plainest, least theatrical version of the numbers, even when a more flattering framing would nudge them toward what I privately think is right.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "What is the writer's main point about how risk is communicated?",
          options: [
            { id: "a", text: "The wording of a risk shapes the decision, even when the facts are identical." },
            { id: "b", text: "Patients should be given only the most encouraging version of the figures." },
            { id: "c", text: "Statistics are too confusing to share with patients at all." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "The writer believes that clinicians who use dramatic framing usually",
          options: [
            { id: "a", text: "do so deliberately to deceive their patients." },
            { id: "b", text: "do so unintentionally, yet still influence the decision." },
            { id: "c", text: "have no real effect on the patient's choice." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The writer explicitly denies an accusation of deceit ('this is not an accusation that colleagues deceive'). Don't choose a distractor that assumes bad intent the writer has ruled out.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — Knowing a patient over time",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "CORE",
    topicTag: "continuity-of-care",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Modern services are built for access, and on its own terms the achievement is real: a patient can now be seen quickly by whoever is free. I would not trade that speed away lightly. But something is lost when nobody in particular knows you. The clinician meeting you for the first time reads your notes as a stranger reads a map, accurately enough, while missing the territory that only repeated visits reveal. A subtle change in how a familiar patient walks into the room can say more than a page of results, and that signal is invisible to someone seeing them once. I am not nostalgic for slower, less available care; demand has changed and so must we. Yet I worry that in optimising for the quick appointment we have quietly decided that knowing someone over years is a luxury rather than a form of safety.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "What is the writer's central concern about modern services?",
          options: [
            { id: "a", text: "That faster access has come at the cost of clinicians knowing patients over time." },
            { id: "b", text: "That patients now wait too long to be seen." },
            { id: "c", text: "That clinical notes are too inaccurate to be trusted." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "The writer regards long-term familiarity with a patient as",
          options: [
            { id: "a", text: "an outdated luxury that services can no longer afford." },
            { id: "b", text: "a genuine contributor to safe care." },
            { id: "c", text: "less informative than a thorough reading of the notes." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The writer repeatedly affirms the value of access ('I would not trade that speed away lightly') while regretting a trade-off. The opinion lies in what is being lost, not in opposing speed.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — The lost art of letting people finish",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "FOUNDATION",
    topicTag: "listening-skills",
    payload: {
      passages: [
        {
          id: "p1",
          body: "I once timed how long I let patients speak before interrupting, and the result embarrassed me. It was a matter of seconds. We are trained to gather information efficiently, and interrupting feels like keeping the consultation on track. Yet the studies suggest that patients who are allowed to finish rarely ramble; most have a short, organised story to tell if we simply let them tell it. When I bit my tongue and waited, the consultation did not run over as I had feared, and the real reason for the visit often surfaced only in that uninterrupted final sentence. Listening, I have realised, is not the passive thing it sounds. It is an active discipline, and one I am still, after many years, learning to practise.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "What did the writer learn from allowing patients to finish speaking?",
          options: [
            { id: "a", text: "Patients usually ramble and waste the appointment time." },
            { id: "b", text: "Patients tell a focused story and reveal the real concern." },
            { id: "c", text: "Consultations always run far over their allotted time." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "The writer describes listening as",
          options: [
            { id: "a", text: "an effortless and naturally passive activity." },
            { id: "b", text: "an active skill that requires ongoing practice." },
            { id: "c", text: "a habit that slows consultations down unnecessarily." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The writer overturns the fear that listening wastes time. Match the answer to the discovered outcome, and note 'not the passive thing it sounds' signals an active view.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — Practising to protect ourselves",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "STRETCH",
    topicTag: "defensive-practice",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Every clinician I know orders the occasional test less for the patient than for the imagined courtroom. I will not pretend I am innocent of this; the fear of being blamed is real and the system does little to soothe it. But I have stopped calling defensive medicine a personal weakness. It is what reasonable people do when the consequences of missing something are career-ending and the consequences of over-investigating are invisible. The harm, though, is not invisible to the patient, who absorbs the extra scans, the incidental findings and the anxiety we have outsourced onto them to calm ourselves. I do not think we will fix this by lecturing doctors about courage. The behaviour will change only when the system stops punishing honest uncertainty more harshly than it punishes overreaction.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "How does the writer explain the existence of defensive medicine?",
          options: [
            { id: "a", text: "As a rational response to a system that punishes missing things." },
            { id: "b", text: "As a simple failure of individual courage among doctors." },
            { id: "c", text: "As a practice that causes no real harm to patients." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "The writer believes defensive practice will change mainly when",
          options: [
            { id: "a", text: "doctors are reminded to be braver in their decisions." },
            { id: "b", text: "the system stops penalising uncertainty more than overreaction." },
            { id: "c", text: "patients accept the burden of extra tests without complaint." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The writer admits personal involvement but reframes the cause as systemic. Beware the distractor that blames individual character, which the writer explicitly rejects.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — What we do with our mistakes",
    prompt:
      "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "CORE",
    topicTag: "learning-from-error",
    payload: {
      passages: [
        {
          id: "p1",
          body: "We talk a great deal now about learning from error, and the phrase has acquired a reassuring, almost therapeutic tone. I welcome the shift away from naming and shaming, which only ever taught people to hide. But I have watched the new language curdle into its own kind of avoidance. A team can hold a flawless review, fill the form correctly, log the action points and feel absolved, while nothing about the work actually changes. Learning is not the meeting; it is the altered behaviour that should follow it, and that part is far harder and far less often achieved. I am not asking for a return to blame. I am asking that we stop mistaking the documentation of reflection for reflection itself, because a patient harmed twice by the same lapse will not be comforted to know the first incident was thoroughly discussed.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "What is the writer's main criticism of current approaches to learning from error?",
          options: [
            { id: "a", text: "That reviews are completed but rarely lead to changed behaviour." },
            { id: "b", text: "That blaming individuals remains far too common." },
            { id: "c", text: "That teams hold too few formal reviews of incidents." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "The writer's attitude towards the move away from 'naming and shaming' is that it",
          options: [
            { id: "a", text: "was a mistake that should be reversed." },
            { id: "b", text: "is welcome, but has produced a new form of avoidance." },
            { id: "c", text: "has completely solved the problem of hidden errors." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The writer supports the no-blame shift yet identifies a new failure within it. A 'welcome but...' structure means the criticism qualifies the approval rather than rejecting it.",
  },
];
