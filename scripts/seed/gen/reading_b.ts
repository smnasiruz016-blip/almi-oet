import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Incident reporting timeframe",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "FOUNDATION",
    topicTag: "incident-reporting",
    payload: {
      passages: [
        {
          id: "p1",
          body: "All clinical incidents, including near misses, must be logged on the electronic reporting system within 24 hours of the event being identified. Where an incident has resulted in moderate or severe harm, the ward manager must also be notified verbally before the end of the shift. Staff should record only the facts observed and avoid attributing blame to individuals. A separate paper form is no longer accepted and will be returned for re-entry.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "The notice makes clear that staff reporting a near miss should",
          options: [
            { id: "a", text: "complete the electronic log within one day of identifying it." },
            { id: "b", text: "tell the ward manager verbally before the shift ends." },
            { id: "c", text: "submit the older paper form alongside the electronic entry." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "The 24-hour electronic log applies to all incidents; verbal notification is only for moderate or severe harm, and the paper form is no longer accepted.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Consent policy for capacity assessment",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "CORE",
    topicTag: "consent-policy",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Consent for any procedure is valid only when the patient has been given enough information, is free from coercion, and has the capacity to decide. Capacity is presumed in every adult unless an assessment demonstrates otherwise, and it is decision-specific rather than global. A patient who declines a treatment that staff consider advisable has not, by that fact alone, shown a lack of capacity. The assessing clinician must record the reasoning behind any conclusion that capacity is absent.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "According to the policy, a patient refusing recommended treatment",
          options: [
            { id: "a", text: "should be presumed to lack capacity until reassessed." },
            { id: "b", text: "is not, for that reason alone, regarded as lacking capacity." },
            { id: "c", text: "may proceed without the clinician recording any reasoning." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Refusal of advisable treatment does not itself prove incapacity; capacity is presumed and decision-specific, and reasoning must always be documented.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Controlled drugs second check",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "CORE",
    topicTag: "controlled-drugs",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Schedule 2 controlled drugs must be administered and witnessed by two registered practitioners, both of whom sign the register at the point of administration. The running balance is to be reconciled against the stock at every shift handover, not only when a discrepancy is suspected. Any difference between the recorded balance and the physical count must be escalated immediately to the senior nurse on duty. Pre-signing the register before the drug is given is strictly prohibited.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "The main purpose of this section of the policy is to set out",
          options: [
            { id: "a", text: "how often new stock of controlled drugs should be ordered." },
            { id: "b", text: "the checking and signing requirements for administering controlled drugs." },
            { id: "c", text: "which staff are permitted to prescribe Schedule 2 medicines." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The passage is about controls on administration and record-keeping (two witnesses, reconciliation, no pre-signing), not ordering stock or prescribing rights.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Infection control hand hygiene memo",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "FOUNDATION",
    topicTag: "infection-control",
    payload: {
      passages: [
        {
          id: "p1",
          body: "A reminder to all clinical staff: alcohol-based hand rub is effective for most routine contacts, but it does not remove spores. When caring for a patient with suspected or confirmed Clostridioides difficile, you must wash with soap and water rather than relying on gel. Gloves are an addition to hand hygiene, not a substitute for it, and hands must be decontaminated after gloves are removed. Audit results for the past quarter showed gel being used in isolation rooms where washing was required.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "When caring for a patient with C. difficile, staff are told to",
          options: [
            { id: "a", text: "use alcohol-based hand rub as their main method." },
            { id: "b", text: "wash with soap and water rather than rely on gel." },
            { id: "c", text: "treat gloves as a replacement for hand decontamination." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Gel does not remove spores, so soap-and-water washing is required for C. difficile; gloves never replace hand hygiene.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Complaints procedure acknowledgement",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "CORE",
    topicTag: "complaints-procedure",
    payload: {
      passages: [
        {
          id: "p1",
          body: "A formal complaint should be acknowledged in writing within three working days of receipt. The acknowledgement does not need to contain findings; its role is simply to confirm that the concern has been received and to explain how the investigation will proceed. A full written response is expected within twenty-five working days, and if that deadline cannot be met the complainant must be told the reason for the delay. Verbal concerns resolved on the spot to the person's satisfaction need not enter the formal process.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "The acknowledgement sent within three working days is intended to",
          options: [
            { id: "a", text: "set out the conclusions of the investigation." },
            { id: "b", text: "confirm receipt and explain how the matter will be handled." },
            { id: "c", text: "tell the complainant why the final response is delayed." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The acknowledgement confirms receipt and process only; findings belong in the 25-day response, and delay reasons are given separately when that deadline slips.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Equipment recall action notice",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "STRETCH",
    topicTag: "equipment-recall",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Following a manufacturer field safety notice, all infusion pumps with serial numbers beginning FX7 are to be removed from clinical use immediately and quarantined in the equipment store. Units already connected to a patient may complete the current infusion under direct observation, after which they must not be reused. Replacement pumps from the loan pool should be requested through biomedical engineering. Do not return affected pumps to the manufacturer until a collection reference has been issued by the medical devices team.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "An affected pump that is currently running an infusion should be",
          options: [
            { id: "a", text: "disconnected at once and sent straight back to the manufacturer." },
            { id: "b", text: "allowed to finish the infusion under observation, then withdrawn from use." },
            { id: "c", text: "kept in service until a loan-pool replacement arrives." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Pumps mid-infusion may finish under observation then be withdrawn; returns wait for a collection reference, and loan replacements are requested separately.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Staff rostering swap email",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "FOUNDATION",
    topicTag: "staff-rostering",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Dear team, a reminder about shift swaps for the coming rota period. Any swap must be agreed between two staff of the same band and then submitted on the online roster for approval before it can take effect. Please do not assume a swap is confirmed simply because a colleague has agreed informally. Requests received less than 48 hours before the shift cannot be guaranteed, as cover levels need to be checked first. Annual leave requests follow a separate process and should not be entered as swaps.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "The email indicates that a shift swap becomes valid only once it has been",
          options: [
            { id: "a", text: "agreed informally between the two colleagues involved." },
            { id: "b", text: "submitted online and approved by the roster manager." },
            { id: "c", text: "entered through the annual leave request process." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "Informal agreement is not enough; the swap needs online submission and approval, and leave uses a different process entirely.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Data protection record access",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "STRETCH",
    topicTag: "data-protection",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Access to a patient's electronic record is permitted only where there is a direct care relationship or another lawful basis. Curiosity, including viewing the record of a colleague, relative, or public figure, is never an acceptable reason, even if no information is shared onward. Every access is logged and audited, and the system flags records opened by staff with no documented involvement in that person's care. Disciplinary action may follow regardless of whether the data was disclosed to anyone else.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "The passage stresses that viewing a record out of curiosity is unacceptable because",
          options: [
            { id: "a", text: "it is only an offence when the information is passed to others." },
            { id: "b", text: "access without a care relationship is prohibited even if nothing is shared." },
            { id: "c", text: "the system cannot identify who has opened a particular record." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The breach is the access itself without a lawful basis, not whether data was shared; all access is logged and identifiable.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Sharps disposal at point of use",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "CORE",
    topicTag: "sharps-disposal",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Sharps must be disposed of by the person who used them, at the point of use, and never passed to another member of staff for disposal. Needles are not to be re-sheathed by hand. Containers should be assembled correctly, dated on opening, and closed and replaced once the fill line is reached rather than overfilled. A container left above the marked line is a hazard and must be sealed immediately, even if the shift's supply of replacements is running low.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "The text states that responsibility for disposing of a sharp lies with",
          options: [
            { id: "a", text: "the person who used it, at the point of use." },
            { id: "b", text: "whichever colleague is nearest to the sharps container." },
            { id: "c", text: "the member of staff who last replaced the container." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "The user disposes of their own sharp at point of use; sharps are never handed on, and containers are sealed at the fill line, not overfilled.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Clinical escalation policy",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "STRETCH",
    topicTag: "escalation-policy",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Where a patient's early warning score reaches the escalation threshold, the bedside nurse must call the responsible doctor and document the time of the call. If there is no review within thirty minutes, the nurse is required to escalate further, to the registrar or the critical care outreach team, without waiting for the first clinician to respond. The policy makes plain that the obligation to escalate rests with the staff member at the bedside and cannot be deferred on the grounds that a call has already been placed.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "If the responsible doctor has not attended within thirty minutes, the nurse should",
          options: [
            { id: "a", text: "wait longer, since a call has already been made." },
            { id: "b", text: "escalate further to the registrar or outreach team." },
            { id: "c", text: "lower the early warning score and continue monitoring." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "A placed call does not discharge the duty; if there is no timely review, the bedside nurse must escalate further without waiting.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Visiting policy on protected mealtimes",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "FOUNDATION",
    topicTag: "visiting-policy",
    payload: {
      passages: [
        {
          id: "p1",
          body: "To support patients to eat well, the ward operates protected mealtimes between 12:00 and 13:00 and again from 17:30 to 18:30. General visiting is suspended during these periods so that staff can give attention to those who need help eating. Relatives who wish to assist their own family member with a meal are welcome and should speak to the nurse in charge on arrival. Outside these hours, visiting is open from 14:00 to 20:00.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "During protected mealtimes, a relative who wants to help their family member eat should",
          options: [
            { id: "a", text: "wait until general visiting reopens at 14:00." },
            { id: "b", text: "speak to the nurse in charge on arrival." },
            { id: "c", text: "assume visiting is fully suspended for everyone without exception." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "General visiting is paused at mealtimes, but relatives helping their own family member are an explicit exception and should check in with the nurse in charge.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Allergy alert documentation",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "CORE",
    topicTag: "allergy-alert",
    payload: {
      passages: [
        {
          id: "p1",
          body: "Every patient must have their allergy status confirmed and recorded at admission, including the specific substance and the nature of the reaction. 'No known allergies' is itself a positive entry and must be selected rather than left blank, since a blank field cannot be distinguished from an omission. Where an allergy is identified, the alert is to be activated in the electronic record so that prescribing of the relevant agent is blocked. A reported intolerance, such as nausea, should be recorded as such and not mislabelled as an allergy.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "The passage explains that 'no known allergies' must be actively recorded because",
          options: [
            { id: "a", text: "a blank field cannot be told apart from a missed entry." },
            { id: "b", text: "it automatically blocks prescribing of all medicines." },
            { id: "c", text: "intolerances such as nausea should be entered as allergies." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "An empty field is ambiguous, so 'no known allergies' must be chosen positively; intolerances are recorded separately, not as allergies.",
  },
  {
    subTest: "READING",
    taskType: "READING_PART_B",
    profession: null,
    title: "Part B — Audit memo on documentation timing",
    prompt:
      "Read the short workplace text and answer the question by choosing the best option (a, b or c).",
    difficulty: "STRETCH",
    topicTag: "audit-memo",
    payload: {
      passages: [
        {
          id: "p1",
          body: "The recent notes audit found that entries were generally accurate but frequently made several hours after the care was delivered, with some written retrospectively at the end of a shift. Contemporaneous recording matters because memory fades and because colleagues taking over rely on an up-to-date record. The audit also noted entries that were not timed or signed. From next month, spot checks will focus less on volume of detail and more on whether each entry is timely, timed, and attributable.",
        },
      ],
      questions: [
        {
          id: "q1",
          stem: "The memo suggests that the main concern raised by the audit was that notes were",
          options: [
            { id: "a", text: "inaccurate in the clinical detail they contained." },
            { id: "b", text: "recorded long after care rather than at the time." },
            { id: "c", text: "too brief to meet the required volume of detail." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote:
      "The audit found notes accurate but not contemporaneous; the focus is timeliness and attribution, not volume of detail.",
  },
];
