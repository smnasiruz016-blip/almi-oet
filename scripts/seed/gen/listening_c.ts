import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Building a culture of patient safety on the ward",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "FOUNDATION",
    topicTag: "patient safety",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Good morning, and thank you for joining this session on patient safety culture. When I first started reviewing incident reports, I assumed most errors came from individual carelessness, but the data told a very different story. What I found was that nearly all serious events involved a breakdown in communication between staff, rather than a single person's mistake. That insight changed how we approach safety entirely. Instead of asking who was to blame, we now ask what in the system allowed the error to reach the patient. The most powerful change we made was encouraging staff to report near misses without fear of punishment, because those reports reveal weaknesses before harm occurs. I want to be honest with you: this shift takes years, not weeks, and it depends far more on leadership behaviour than on any new policy document.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "What surprised the speaker when reviewing incident reports?",
          options: [
            { id: "a", text: "Most serious events stemmed from poor communication, not individual carelessness." },
            { id: "b", text: "The reports were rarely completed by frontline staff." },
            { id: "c", text: "Individual negligence caused the majority of harm." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "According to the speaker, lasting safety improvement depends mainly on",
          options: [
            { id: "a", text: "introducing detailed new policy documents." },
            { id: "b", text: "the everyday behaviour of those who lead." },
            { id: "c", text: "punishing staff who repeatedly make errors." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Part C distractors often repeat words from the talk. Match the meaning the speaker actually endorses, not just the vocabulary you recognise.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Preventing inpatient falls through hourly rounding",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "FOUNDATION",
    topicTag: "falls prevention",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Today I want to talk about how we cut inpatient falls on the medical unit. We had tried wristbands, bed alarms, and warning signs, and honestly none of them made a measurable difference on their own. The turning point came when we introduced structured hourly rounding, where a nurse checks each patient against four prompts: pain, position, toileting needs, and whether belongings are within reach. The third of these, toileting, turned out to be the single biggest factor, because so many falls happened when patients tried to reach the bathroom unaided. After three months of consistent rounding, our fall rate dropped by almost a third. I should stress that the technology was never the answer; the alarms only told us a patient had already fallen. What worked was anticipating the need before the patient acted on it.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "Which factor did the speaker identify as the leading cause of falls?",
          options: [
            { id: "a", text: "Patients trying to reach the bathroom without help." },
            { id: "b", text: "Poorly positioned bed alarms." },
            { id: "c", text: "Uncontrolled pain at night." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "What is the speaker's main point about bed alarms?",
          options: [
            { id: "a", text: "They prevented most falls once installed correctly." },
            { id: "b", text: "They only alerted staff after a fall had occurred." },
            { id: "c", text: "They worked best combined with warning signs." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "When a speaker lists several measures and then names one as decisive, expect a question on that contrast. Note the word that signals it, such as 'turning point' or 'biggest factor'.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Antibiotic stewardship and the 48-hour review",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "CORE",
    topicTag: "antibiotic stewardship",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "I'd like to share what our antibiotic stewardship team learned over the past year. Clinicians often worry that stewardship means withholding treatment, but that's a misunderstanding; our goal is the right drug, at the right dose, for the shortest effective time. The intervention that delivered the most benefit was surprisingly simple: a mandatory review at forty-eight hours, when culture results are usually back. At that point the prescriber must decide to stop, narrow, or continue, and document the reason. Before this, broad-spectrum antibiotics were routinely left running for a week by default. We did not see any rise in treatment failures after introducing the review, which reassured the sceptics. If there is one message to take away, it is that stewardship is about better decisions at the bedside, not about saying no.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "What was the most effective intervention the team introduced?",
          options: [
            { id: "a", text: "Banning broad-spectrum antibiotics on the ward." },
            { id: "b", text: "A required review of every antibiotic at 48 hours." },
            { id: "c", text: "Requiring two prescribers to approve each prescription." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "What does the speaker say about treatment failures after the change?",
          options: [
            { id: "a", text: "They rose slightly but were considered acceptable." },
            { id: "b", text: "They did not increase, easing the doubters' concerns." },
            { id: "c", text: "They could not be measured reliably." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Listen for the speaker correcting a common misconception early on; that correction is frequently tested. Distinguish what people 'worry' about from what the speaker states is true.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Responding to agitation in dementia care",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "CORE",
    topicTag: "dementia care",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "In my years working with people living with dementia, the question I'm asked most is how to manage agitation. My answer often disappoints people, because they expect a medication recommendation. In reality, agitation is almost always a form of communication, an attempt to express an unmet need that the person can no longer put into words. When a resident becomes distressed, I encourage staff to look first for pain, hunger, noise, or a full bladder before reaching for any sedative. We audited one home where antipsychotic use fell sharply once staff were trained to read behaviour as a signal. I won't pretend medication has no place, but it should be the last resort, not the first response. The most skilled carers I know spend their energy on prevention, keeping routines familiar and environments calm.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "How does the speaker mainly describe agitation in dementia?",
          options: [
            { id: "a", text: "As a side effect of existing medication." },
            { id: "b", text: "As an attempt to express an unmet need." },
            { id: "c", text: "As an unavoidable stage of the illness." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "What is the speaker's view on antipsychotic medication?",
          options: [
            { id: "a", text: "It should be the first response to distress." },
            { id: "b", text: "It has no legitimate role in dementia care." },
            { id: "c", text: "It should be used only as a last resort." },
          ],
          answer: "c",
        },
      ],
    },
    guidanceNote:
      "Beware absolute-sounding options ('no place at all'). Speakers often qualify their view; pick the option that captures the nuance they actually express.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Honest conversations at the end of life",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "STRETCH",
    topicTag: "end-of-life communication",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Talking with patients about dying is, for many clinicians, the hardest conversation in medicine. Early in my career I believed that protecting hope meant avoiding difficult truths, so I softened prognoses until they became almost meaningless. Over time I realised that vagueness does not protect patients; it isolates them and robs families of the chance to prepare. What patients consistently tell me they want is not false reassurance but honesty delivered with warmth, and the room to ask their own questions. I now begin by asking how much someone wishes to know, because people differ enormously, and a few prefer to leave details to relatives. The skill is not in finding the perfect words but in being willing to stay in the silence afterwards. Rushing to fill that silence is, I think, the most common mistake we make.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "What did the speaker come to realise about softening prognoses?",
          options: [
            { id: "a", text: "It left patients isolated and families unprepared." },
            { id: "b", text: "It successfully preserved patients' hope." },
            { id: "c", text: "It was preferred by most families." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "What does the speaker identify as the most common mistake?",
          options: [
            { id: "a", text: "Asking patients how much they want to know." },
            { id: "b", text: "Hurrying to speak rather than allowing silence." },
            { id: "c", text: "Giving families too much detail at once." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Reflective talks describe a change of view over time. Track the 'before' and 'after' positions carefully, as questions often test which belief the speaker now holds.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Recognising and preventing clinician burnout",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "CORE",
    topicTag: "burnout wellbeing",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Burnout among health professionals is too often framed as a personal failing, as though those affected simply lack resilience. I want to challenge that framing directly. The evidence shows that burnout is driven mainly by the conditions people work in: excessive workload, loss of control over their day, and a sense that their effort goes unrecognised. Telling an exhausted nurse to practise mindfulness, while changing none of those conditions, is at best unhelpful and at worst insulting. In our service, the measures that actually moved the needle were structural, such as protecting break times and giving teams a real say in rostering. Individual coping strategies have their place, but they cannot compensate for a broken system. If managers take one thing from today, let it be that wellbeing is an organisational responsibility first.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "What is the speaker's central argument about burnout?",
          options: [
            { id: "a", text: "It mainly reflects a lack of personal resilience." },
            { id: "b", text: "It is driven chiefly by working conditions." },
            { id: "c", text: "It can be resolved through mindfulness training." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Which measures does the speaker say actually helped?",
          options: [
            { id: "a", text: "Structural changes such as protected breaks and input into rostering." },
            { id: "b", text: "Individual coping courses offered to all staff." },
            { id: "c", text: "Encouraging staff to build personal resilience." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "When a speaker 'challenges a framing', the wrong options usually restate that framing. Choose the answer that reflects the speaker's counter-position.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Making telehealth consultations safe and effective",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "CORE",
    topicTag: "telehealth",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "When telehealth expanded rapidly, many of us assumed it was simply a face-to-face consultation moved onto a screen. Experience has taught me that this assumption is risky. A video call removes the incidental observations we rely on, the way a patient walks into the room, their breathing, even their smell, and these absences can hide important signs. The clinicians who adapt best are those who change their questioning, asking patients to describe and demonstrate things they would normally observe directly. I also insist that we set clear rules for when a remote consultation must be converted to a face-to-face visit, because uncertainty is not a reason to carry on regardless. Telehealth has genuinely widened access for people in remote areas, and I would not want to lose it. But it is a different skill, and we should train for it as such.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "What does the speaker say is the main risk of telehealth?",
          options: [
            { id: "a", text: "It loses incidental observations that reveal important signs." },
            { id: "b", text: "It is too expensive for most remote patients." },
            { id: "c", text: "It always takes longer than a face-to-face visit." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "What does the speaker insist clinicians should establish?",
          options: [
            { id: "a", text: "A limit on how many remote consultations they do daily." },
            { id: "b", text: "Clear rules for converting a remote visit to face-to-face." },
            { id: "c", text: "A preference for telephone over video calls." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Speakers often acknowledge a benefit before stating their main concern. Do not let the positive aside distract you from the central point being tested.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Improving health literacy through teach-back",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "FOUNDATION",
    topicTag: "health literacy",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Let me start with an uncomfortable fact: studies suggest that patients forget or misunderstand a large share of what we tell them, often within minutes of leaving the room. For years we tried to solve this by handing out more leaflets, but a leaflet a patient cannot read or interpret achieves nothing. The technique that changed my practice is called teach-back, where I ask the patient to explain in their own words what they will do when they get home. Crucially, I frame it as a check on my own clarity, not a test of the patient, so no one feels embarrassed. When someone struggles to teach it back, that tells me I have explained it poorly and need to try again differently. It costs almost nothing, yet it consistently catches dangerous misunderstandings about medication before patients leave.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "Why does the speaker frame teach-back as a check on their own clarity?",
          options: [
            { id: "a", text: "To avoid making the patient feel embarrassed or tested." },
            { id: "b", text: "To satisfy a documentation requirement." },
            { id: "c", text: "To speed up the consultation." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "What does the speaker say about handing out more leaflets?",
          options: [
            { id: "a", text: "It was the most effective solution they found." },
            { id: "b", text: "It achieved nothing for patients who could not interpret them." },
            { id: "c", text: "It worked well when combined with longer appointments." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Note why a speaker does something a particular way, not just what they do. The reasoning behind a technique is a common Part C question.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Understanding hesitancy to improve vaccination uptake",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "STRETCH",
    topicTag: "vaccination uptake",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "When uptake of a vaccine is low, the instinctive response is to push more information at people, on the assumption that hesitancy comes from ignorance. Our community work has taught me that this assumption is usually wrong and sometimes counterproductive. Most hesitant people are not short of information; they are short of trust, often because of past experiences in which the system let them down. Bombarding them with statistics can actually entrench their resistance, because it feels like being lectured rather than heard. What changed minds in our area was not a leaflet campaign but recruiting trusted local voices, including faith leaders, to hold open conversations. Convenience mattered too: when we brought clinics to workplaces and places of worship, attendance rose noticeably. The lesson is that uptake is built on relationships and access, not on the volume of facts we broadcast.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "According to the speaker, hesitancy mainly stems from",
          options: [
            { id: "a", text: "a lack of accurate information." },
            { id: "b", text: "a lack of trust shaped by past experiences." },
            { id: "c", text: "the inconvenience of clinic opening hours alone." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "What does the speaker say is the effect of giving hesitant people more statistics?",
          options: [
            { id: "a", text: "It can deepen their resistance by feeling like a lecture." },
            { id: "b", text: "It reliably persuades the majority over time." },
            { id: "c", text: "It has no effect in either direction." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Watch for a speaker calling a common assumption 'wrong' or 'counterproductive'. The tested point is usually the corrected belief, not the original assumption.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — A multimodal approach to chronic pain management",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "STRETCH",
    topicTag: "pain management",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Chronic pain has taught me more humility than almost any other area of practice. For a long time the prevailing model treated pain as a simple signal of tissue damage, so we chased a cure by escalating doses of opioids. The results were often disastrous: dependence rose while function did not improve. Modern understanding sees persistent pain as a condition of the nervous system itself, which can remain sensitised long after any injury has healed. That reframing matters, because it shifts our goal from eliminating pain entirely to helping people live well alongside it. The approaches with the strongest evidence are unglamorous: graded exercise, sleep, and psychological support, usually combined rather than used alone. I am not dismissing medication, but I now see it as a small part of a much broader plan, and rarely the part that restores someone's life.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "How does the speaker say modern understanding views persistent pain?",
          options: [
            { id: "a", text: "As a straightforward signal of ongoing tissue damage." },
            { id: "b", text: "As a condition of a sensitised nervous system." },
            { id: "c", text: "As a problem best solved by higher opioid doses." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "What is the speaker's main point about the goal of treatment?",
          options: [
            { id: "a", text: "It should shift toward helping people function despite pain." },
            { id: "b", text: "It should focus on completely eliminating the pain." },
            { id: "c", text: "It should rely chiefly on stronger medication." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Contrasts between an old model and a current one are frequent in Part C. Make sure you attribute each view to the right era before answering.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Tackling malnutrition risk in hospital patients",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "FOUNDATION",
    topicTag: "nutrition",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Nutrition is one of the most overlooked aspects of hospital care, and yet it influences almost everything else, from wound healing to length of stay. When we audited our wards, we were alarmed to find that a significant number of at-risk patients were missing meals not because of their illness but because of the system around them. Trays arrived during ward rounds, or were cleared away before a patient who needed help eating had been assisted. Our most effective change had nothing to do with supplements; it was introducing protected mealtimes, where non-urgent tasks pause so staff can focus on helping people eat. We also placed a simple screening tool at admission so risk was flagged from day one. The point I want to leave you with is that good nutrition is frequently an organisational issue rather than a clinical one.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "Why were at-risk patients missing meals, according to the audit?",
          options: [
            { id: "a", text: "Because of the way the ward system was organised." },
            { id: "b", text: "Because their illness removed their appetite." },
            { id: "c", text: "Because supplements were unavailable." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "What was the most effective change the speaker describes?",
          options: [
            { id: "a", text: "Prescribing nutritional supplements more widely." },
            { id: "b", text: "Introducing protected mealtimes with paused non-urgent tasks." },
            { id: "c", text: "Serving larger meal portions to everyone." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "If a speaker says a problem is 'organisational rather than clinical', expect a question testing that distinction. Listen for the cause they emphasise over the obvious one.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — The first hour in recognising sepsis",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "STRETCH",
    topicTag: "sepsis recognition",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Sepsis remains one of the great challenges in acute care, largely because its early signs are so easy to dismiss. The patient who is simply 'not quite right', slightly confused, breathing a little faster than usual, may be in the opening stages of a life-threatening response. What I want to stress today is that the trend matters more than any single reading. A heart rate that is creeping upward over a few hours tells you more than one figure taken in isolation. The biggest improvement in our outcomes came not from a new drug but from empowering our most junior staff to escalate concerns without waiting for permission, because they are often the first to notice subtle change. We also learned to trust a family member who says their relative is behaving unusually, as that observation has flagged deterioration more reliably than I once expected.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "What does the speaker emphasise about identifying early sepsis?",
          options: [
            { id: "a", text: "A single abnormal reading is the most reliable warning." },
            { id: "b", text: "The trend in a patient's signs matters more than one reading." },
            { id: "c", text: "Confusion alone confirms the diagnosis." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "What brought the biggest improvement in outcomes?",
          options: [
            { id: "a", text: "Introducing a new antibiotic to the protocol." },
            { id: "b", text: "Allowing junior staff to escalate concerns without waiting for permission." },
            { id: "c", text: "Restricting escalation to senior clinicians only." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Phrases like 'the trend matters more than' set up a comparison question. Identify the two things being compared and which the speaker values more.",
  },
  {
    subTest: "LISTENING",
    taskType: "LISTENING_PART_C",
    profession: null,
    title: "Part C — Sustaining gains in quality improvement projects",
    prompt:
      "You will hear part of a presentation. For each question, choose the answer (A, B or C) which fits best according to what you hear.",
    difficulty: "CORE",
    topicTag: "quality improvement",
    timeLimitSeconds: 0,
    payload: {
      audioScript:
        "Over the years I have led, and watched, a great many quality improvement projects, and I have become fascinated by why so few of them last. The launch is usually the easy part; enthusiasm is high and everyone is watching. The real test comes six months later, once the project team has moved on and attention has drifted elsewhere. What I have learned is that an improvement only endures when it is built into the everyday system, so that doing the right thing becomes the path of least resistance. Relying on individual diligence or willpower is a recipe for slow decay. We also made a deliberate choice to measure outcomes long after the formal project ended, because what you stop measuring, you stop sustaining. My advice is to plan for the second year from the very first day.",
      speakers: [{ role: "Presenter", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "According to the speaker, when is the real test of a project?",
          options: [
            { id: "a", text: "During the launch, when enthusiasm is highest." },
            { id: "b", text: "Around six months later, once attention has drifted." },
            { id: "c", text: "Before the project team has been assembled." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "What does the speaker say makes an improvement endure?",
          options: [
            { id: "a", text: "Building it into the everyday system so it becomes easiest to do." },
            { id: "b", text: "Relying on the diligence of committed individuals." },
            { id: "c", text: "Ending measurement once the project formally closes." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Part C often contrasts a system-level solution with reliance on individuals. The speaker's preferred answer is usually the structural one; the distractor restates the weaker approach.",
  },
];
