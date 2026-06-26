// Seeds original OET Reading items (common to all professions, profession null).
// Part A = expeditious reading (matching + gap fill over short texts); Part B =
// short workplace texts with one MCQ each; Part C = a longer text with MCQ. All
// texts are original to AlmiOET — never copied from OET. Phase 0 ships one
// starter item per part.
//
// Run: npm run seed:reading  (needs DATABASE_URL set)

import { PrismaClient, Prisma } from "@prisma/client";
import { isDirectRun } from "./_entry";

const prisma = new PrismaClient();

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Hand hygiene texts",
    prompt:
      "Skim the four short texts on hand hygiene. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "CORE",
    topicTag: "infection-control",
    payload: {
      texts: [
        { id: "A", heading: "When to clean hands", body: "Clean hands before touching a patient and before a clean or aseptic procedure." },
        { id: "B", heading: "Technique", body: "Alcohol hand rub should be applied to dry hands and rubbed until fully evaporated, covering all surfaces." },
        { id: "C", heading: "When soap is required", body: "Use soap and water rather than alcohol rub when hands are visibly soiled or after caring for a patient with diarrhoea." },
        { id: "D", heading: "Skin care", body: "Apply emollient regularly to reduce the skin damage that repeated cleaning can cause." },
      ],
      questions: [
        { id: "q1", kind: "match", stem: "Which text says when alcohol rub is not appropriate?", options: [ { id: "A", text: "A" }, { id: "B", text: "B" }, { id: "C", text: "C" }, { id: "D", text: "D" } ], answer: "C" },
        { id: "q2", kind: "match", stem: "Which text describes correct rubbing technique?", options: [ { id: "A", text: "A" }, { id: "B", text: "B" }, { id: "C", text: "C" }, { id: "D", text: "D" } ], answer: "B" },
        { id: "q3", kind: "gap", stem: "Alcohol rub should be applied to ______ hands.", answer: "dry" },
      ],
    },
    guidanceNote: "Scan for the keyword in the question — you don't need to read every word to match a text.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Medicines policy extract",
    prompt: "Read the workplace text and choose the answer which best fits the meaning.",
    difficulty: "CORE",
    topicTag: "policy",
    payload: {
      passages: [
        { id: "p1", body: "Where a medicine is omitted, the reason must be recorded on the chart using the approved code. An omission without a documented reason is treated as a medication incident and must be reported, even if no harm resulted." },
      ],
      questions: [
        {
          id: "q1",
          stem: "According to the text, an undocumented omission must be:",
          options: [
            { id: "a", text: "ignored if no harm resulted" },
            { id: "b", text: "reported as a medication incident" },
            { id: "c", text: "corrected at the next drug round only" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Read to the end — the key condition often sits in the final clause.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — Article on shared decision-making",
    prompt: "Read the text and choose the answer which best fits the writer's meaning.",
    difficulty: "STRETCH",
    topicTag: "communication",
    payload: {
      passages: [
        { id: "p1", body: "Shared decision-making is often presented as simply offering patients options. In practice, the harder skill is eliciting what matters to the person in front of you — and resisting the pull to steer them toward the choice you would make. The evidence suggests clinicians consistently overestimate how well they already do this." },
      ],
      questions: [
        {
          id: "q1",
          stem: "What does the writer suggest is the harder part of shared decision-making?",
          options: [
            { id: "a", text: "Listing the available options" },
            { id: "b", text: "Drawing out and respecting the patient's own priorities" },
            { id: "c", text: "Recommending the clinician's preferred choice" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "What does the writer imply about clinicians' self-assessment?",
          options: [
            { id: "a", text: "They tend to overrate their own skill at it" },
            { id: "b", text: "They generally judge it accurately" },
            { id: "c", text: "They underrate their ability" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Distinguish what the writer states from what is merely mentioned as a common view.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_A",
    profession: null,
    title: "Part A — Preventing pressure injuries in immobile patients",
    prompt:
      "Skim the four short texts on preventing pressure injuries in immobile patients. Answer the questions by choosing the text (A–D) that gives the information, or by completing the gap.",
    difficulty: "FOUNDATION",
    topicTag: "pressure-injury-prevention",
    payload: {
      texts: [
        { id: "A", heading: "Risk screening", body: "All patients should be screened for pressure injury risk within six hours of admission using a validated assessment tool. Re-screening is repeated whenever the patient's condition changes and at least every 48 hours. Reduced mobility, poor nutrition, incontinence and impaired sensation each raise the overall risk score." },
        { id: "B", heading: "Repositioning", body: "Patients identified as at risk should be repositioned at regular intervals, with the timing recorded on the turning chart. A two-hourly schedule is the usual starting point, though the interval is shortened for those with very limited movement. The 30-degree tilt is preferred because it keeps pressure off the bony prominences." },
        { id: "C", heading: "Skin inspection", body: "The skin over the heels, sacrum and elbows is inspected at each shift change. Non-blanching redness that persists after pressure is removed is treated as an early-stage injury and reported without delay. Staff should avoid massaging reddened areas, as this can worsen tissue damage." },
        { id: "D", heading: "Support surfaces", body: "Where the risk score is high, a pressure-redistributing mattress is provided in addition to scheduled repositioning. Heel-offloading devices may be added for patients who cannot lift their own legs. Equipment alone does not remove the need for turning, and all surfaces are checked daily for faults." },
      ],
      questions: [
        { id: "q1", kind: "match", stem: "Which text states that reddened skin should not be rubbed?", options: [{ id: "A", text: "A" }, { id: "B", text: "B" }, { id: "C", text: "C" }, { id: "D", text: "D" }], answer: "C" },
        { id: "q2", kind: "match", stem: "Which text explains how soon after admission a patient should be assessed?", options: [{ id: "A", text: "A" }, { id: "B", text: "B" }, { id: "C", text: "C" }, { id: "D", text: "D" }], answer: "A" },
        { id: "q3", kind: "match", stem: "Which text makes clear that special equipment does not replace turning?", options: [{ id: "A", text: "A" }, { id: "B", text: "B" }, { id: "C", text: "C" }, { id: "D", text: "D" }], answer: "D" },
        { id: "q4", kind: "gap", stem: "The preferred position for keeping pressure off the bony prominences is the ______ tilt.", answer: "30-degree" },
      ],
    },
    guidanceNote:
      "In Part A you do not need to read every word. Match the key idea in the question to the heading first, then confirm in the body — this saves time under the strict clock.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Interpreter use during clinical consultations",
    prompt: "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "CORE",
    topicTag: "language-access",
    payload: {
      passages: [
        { id: "p1", body: "Memo to all clinical staff: When a patient has limited proficiency in the language of care, a professional interpreter must be arranged rather than relying on family members or bilingual colleagues. Family members may unintentionally summarise or soften information, and using them can compromise both accuracy and confidentiality. A child should never be asked to interpret. If a professional interpreter is unavailable in person, the approved telephone interpreting line is used. Staff should address and look at the patient throughout, not the interpreter, and should pause regularly to allow accurate relay. The interpreter's involvement is documented in the clinical record." },
      ],
      questions: [
        { id: "q1", stem: "According to the memo, the main reason for not using family members as interpreters is that they", options: [{ id: "a", text: "are usually unwilling to attend appointments at short notice." }, { id: "b", text: "may alter the information and reduce accuracy and confidentiality." }, { id: "c", text: "cannot be documented in the clinical record afterwards." }], answer: "b" },
      ],
    },
    guidanceNote:
      "Part B questions test the gist or purpose of a workplace text. Watch for distractors that mention real details from the text but answer a different question than the one asked.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_C",
    profession: null,
    title: "Part C — Rethinking the value of clinical handover",
    prompt: "Read the text and answer the questions by choosing the option (a, b or c) that best reflects the writer's meaning or opinion.",
    difficulty: "STRETCH",
    topicTag: "clinical-handover",
    payload: {
      passages: [
        { id: "p1", body: "For many years, handover at the change of shift was treated as little more than an administrative ritual — a hurried recitation of names, bed numbers and pending tasks that the outgoing team was glad to be rid of. It is tempting to dismiss it as dead time, yet a growing body of practice suggests the opposite: the handful of minutes spent transferring responsibility is among the most safety-critical of the day. What changed was less the procedure than the way clinicians came to understand it. Rather than a simple data transfer, handover began to be seen as a moment of shared sense-making, in which two teams briefly hold the same picture of a patient before one of them lets go. Structured formats have helped, imposing a predictable order that reduces the chance of an important detail slipping through. But structure is not the whole story. The most effective handovers I have observed are not the most rigidly scripted; they are the ones in which the receiving clinician feels able to interrupt, to query an assumption, to say that something does not quite add up. A format that silences such questions in the name of efficiency may tidy the encounter while quietly defeating its purpose. The lesson, then, is not that we need more paperwork, but that we should protect the conditions under which genuine questions can still be asked." },
      ],
      questions: [
        { id: "q1", stem: "What change does the writer identify as central to handover becoming safer?", options: [{ id: "a", text: "A shift in how clinicians understood the purpose of handover." }, { id: "b", text: "The introduction of additional documentation requirements." }, { id: "c", text: "A reduction in the number of minutes spent on each handover." }], answer: "a" },
        { id: "q2", stem: "The writer's main reservation about highly scripted formats is that they", options: [{ id: "a", text: "take longer to complete than informal verbal handovers." }, { id: "b", text: "can discourage the questions that make handover effective." }, { id: "c", text: "are too difficult for receiving clinicians to memorise." }], answer: "b" },
      ],
    },
    guidanceNote:
      "Part C rewards attention to opinion and nuance, not just facts. The writer praises structure but qualifies it — note where a 'but' or 'yet' signals the real position before choosing.",
  },
];

async function main() {
  const res = await prisma.oetItem.createMany({ data: ITEMS });
  console.log(`Seeded ${res.count} Reading item(s).`);
}

if (isDirectRun(import.meta.url)) {
  main()
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}
