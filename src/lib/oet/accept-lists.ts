/**
 * ACCEPT LISTS — the authored answers, as a CODE-SIDE OVERLAY.
 *
 * ── WHY THIS IS NOT A SEED CHANGE ───────────────────────────────────────────
 *
 * `scripts/seed/append.ts` is INSERT-ONLY (it dedupes on `taskType::title`), so
 * editing a payload in scripts/seed/gen would never reach a row that already
 * exists in production. Adding accept-lists that way would mean a migration or a
 * hand-written UPDATE over 200 answers. This overlay is merged in when the
 * AnswerKey is built instead, so the marking changes with a deploy and no
 * database row is touched. The seed source stays the record of what was
 * authored; this file is the record of what is also accepted.
 *
 * ── WHOSE JUDGEMENT THIS IS ─────────────────────────────────────────────────
 *
 * Nasir's, item by item, in the handoff of 1 September 2026. The rules he wrote
 * them under, kept here because they are what makes the list reviewable:
 *
 *   1. Only what was actually SAID is accepted. Nothing the audio never uttered.
 *   2. A shorter but correct answer counts — "toast" for "white toast".
 *   3. A drug name has no synonyms.
 *   4. A dangerous difference is never accepted.
 *   5. Where normalize() already handles it, it is not written out again.
 *
 * ── 🔴 TWO PLACES THE LIST IS DELIBERATELY NARROW ───────────────────────────
 *
 *   Migraine · "Warning sign" = `flashing lines`. "flashing lights" is REFUSED.
 *   The audio says lines, and lines-versus-lights is the thing the question
 *   measures. Accepting it would delete the question.
 *
 *   Urinary · "Pain on voiding" = `stings`. "burning" is REFUSED. Same meaning,
 *   but the word was never said — a Part A answer comes from what was heard,
 *   not from what the candidate already knows.
 *
 * And the one that is a safety matter rather than a marking one:
 *
 *   🔴 Midwife · "Folic acid dose" = `400 micrograms`. `400 mg` is NEVER
 *   accepted. It is a thousand-fold dose. No rule in normalize() may make those
 *   two equal, and scripts/gates/accept-lists.ts asserts they are not.
 *
 * ── HOW IT IS KEYED, AND WHY THE TWO SUB-TESTS DIFFER ───────────────────────
 *
 * Listening Part A: item `title`, then gap `label`.
 * Reading Part A:   item `title`, then the question's own `answer` — the Reading
 * stems are long sentences and transcribing them here would be a copying error
 * waiting to happen.
 *
 * Every key is checked against scripts/seed/gen by gate:accept-lists, which
 * FAILS THE BUILD on a title or label that matches nothing. A silently skipped
 * key would leave a gap with no accept-list and nobody would know.
 */

/** title → gap label → additional accepted answers. */
export const LISTENING_PART_A_ACCEPT: Record<string, Record<string, readonly string[]>> = {
  "OET Form 1 · Listening Part A — Physiotherapy consultation (lower back pain)": {
    "Complaint has lasted for": ["three weeks", "about three weeks", "three weeks now"],
    "Activity when it started": [
      "moving boxes",
      "lifting boxes",
      "moving some boxes",
      "boxes",
      "moving boxes at work",
      "lifting deliveries",
    ],
    "Felt a sharp ___ on the left": ["twinge", "sharp twinge"],
    "Usual pain is a dull ___": ["ache", "dull ache"],
    "Becomes sharp when he ___": [
      "bends forward",
      "bending forward",
      "bend forward",
      "bends forwards",
      "bending forwards",
    ],
    "Pain radiates into the left ___": ["buttock", "left buttock"],
    "Pain does not go past the ___": ["knee"],
    "Severity out of ten (worst)": ["seven", "seven out of ten", "7/10"],
    "Relieving factor (heat source)": ["hot water bottle", "water bottle", "heat"],
    "Medication taken": ["ibuprofen"],
    "No bladder or ___ problems": ["bowel"],
    "Wakes this many times a night": [
      "two or three times",
      "two or three",
      "two to three times",
      "two to three",
    ],
  },
  "OET Form 1 · Listening Part A — Dietitian consultation (type 2 diabetes)": {
    "Referred because this was high": [
      "HbA1c",
      "HbA1c level",
      "blood sugar",
      "average blood sugar",
      "blood sugar level",
    ],
    "Breakfast: two slices of ___": ["white toast", "toast", "white bread", "bread"],
    "Coffee taken with": ["two sugars", "sugar", "two spoons of sugar", "two spoonfuls of sugar"],
    "Lunch includes a packet of ___": ["crisps", "packet of crisps"],
    "Lunch sometimes with a ___": ["fizzy drink", "soft drink", "fizzy"],
    "Evening meal often followed by a ___": ["dessert", "pudding"],
    "Afternoon snack (two or three)": ["biscuits", "two or three biscuits"],
    "Water intake per day": ["two glasses", "two glasses of water", "two"],
    "Evening activity: walks the ___": ["dog"],
    "Change: swap white toast for ___": [
      "wholegrain",
      "whole grain",
      "wholegrain bread",
      "wholegrain toast",
      "wholemeal",
    ],
    "Reduce this in coffee gradually": ["sugar"],
    "Replace fizzy drink with ___": ["water"],
  },
  "OET Form 2 · Listening Part A — Occupational therapy home visit (post-stroke)": {
    "Home visit after a": ["stroke"],
    "Washing and dressing takes nearly": ["an hour", "one hour", "60 minutes", "sixty minutes"],
    "Hardest task: doing up": ["buttons", "doing up buttons", "fastening buttons"],
    "His right hand is still": ["weak", "weakness"],
    "Suggested aid: a": ["button hook", "buttonhook", "hook"],
    "Comes down the stairs": ["one step at a time", "one at a time", "step at a time", "one step"],
    "Rail is only on": ["the left", "left side", "left-hand side", "left going up"],
    "Suggested for the bath: a": ["bath board", "board"],
    "Nervous about carrying a": ["pan", "saucepan", "hot pan"],
    "Suggested to move things safely: a": ["trolley"],
    "Has lost his": ["confidence"],
    "Since a ___ last month": ["fall", "falling"],
  },
  "OET Form 2 · Listening Part A — Practice-nurse asthma review": {
    "Annual review for this condition": ["asthma"],
    "Reliever should be used at most": [
      "three times a week",
      "three times a week or fewer",
      "three times weekly",
      "three times per week",
      "three a week",
    ],
    "Forgets the preventer when she feels": ["well", "fine", "good", "she feels well"],
    "The preventer reduces": ["inflammation", "the inflammation", "swelling"],
    "The preventer works best taken": ["daily", "every day", "each day", "once a day"],
    "Not using a": ["spacer"],
    "A spacer helps the medicine reach the": ["lungs"],
    "Night symptoms: cough or": ["wheeze", "wheezing"],
    "Trigger 1": ["cold air", "the cold", "cold", "cold weather"],
    "Trigger 2: her": ["cat"],
    "Recommended: the": [
      "flu vaccine",
      "flu jab",
      "flu vaccination",
      "influenza vaccine",
      "flu injection",
    ],
    "Nurse to write an updated": ["action plan", "asthma action plan", "plan"],
  },
  "OET Form 3 · Listening Part A — Physiotherapist and lower back pain": {
    "Back pain started about": ["three weeks ago", "three weeks"],
    "Injured while lifting a": ["box", "lifting a box"],
    "Initially felt a sharp": ["twinge", "sharp twinge"],
    "Pain is now a dull": ["ache", "dull ache"],
    "Pain is worse when ___ for a long time": ["sitting", "sits", "sit", "sitting down", "seated"],
    "Pain does not travel into his": ["leg"],
    "Taking for the pain:": ["ibuprofen"],
    "Has mostly been": ["lying down", "resting", "lying", "in bed", "bed rest", "resting in bed"],
    "Better than bed rest: gentle": ["movement", "moving", "gentle movement", "exercise", "activity"],
    "Recommended daily: a short": ["walk", "short walk", "walking"],
    "Most cases settle within": ["six weeks", "within six weeks"],
    "Told to avoid heavy": ["lifting", "heavy lifting", "lift"],
  },
  "OET Form 3 · Listening Part A — Midwife antenatal booking visit": {
    "Type of appointment today: the": ["booking", "booking appointment", "booking visit"],
    "Roughly how many weeks pregnant:": ["ten weeks", "ten", "around ten weeks"],
    "This is her first": ["baby", "child"],
    "Feels sick in the": ["mornings", "morning"],
    "Also feels very": ["tired", "tiredness", "fatigued"],
    "Has gone off": ["coffee"],
    "Taking daily: folic": ["acid", "folic acid"],
    // 🔴 `400 mg` is NEVER here and must never be made equal to any of these.
    "Folic acid dose:": [
      "400 micrograms",
      "400 mcg",
      "400 micrograms a day",
      "400 ug",
      "four hundred micrograms",
    ],
    "Folic acid protects the baby's": ["spine", "the spine", "backbone"],
    "As soon as she found out, she stopped": ["smoking", "smoke", "smoking cigarettes"],
    "First scan at around": ["twelve weeks", "twelve", "around twelve weeks"],
    "Warning sign with headaches: seeing": ["spots", "spots in her vision", "spots in vision"],
  },

  // ── batch 2 · the fifteen short Part A items ──────────────────────────────
  "Part A — Ankle injury after a fall": {
    "Activity at time of injury": ["playing football", "football"],
    "Time since injury": ["three days ago", "three days", "Saturday", "Saturday afternoon"],
    "Current pain score (0–10)": ["seven out of ten", "seven", "7/10"],
    "Pain relief taken": ["ibuprofen"],
    "Site of worst swelling": ["outer ankle", "outside of the ankle", "outer side of the ankle"],
  },
  "Part A — Antenatal visit": {
    Gestation: ["twenty-eight weeks", "twenty-eight"],
    "Fetal movements": ["lots of movements", "lots", "plenty of movements", "many movements"],
    "Movement timing": ["in the evening", "evening", "evenings"],
    "Swelling site": ["fingers", "her fingers"],
    "Other symptom": ["headaches", "a few headaches"],
  },
  "Part A — Asthma flare-up": {
    "Main symptom": ["wheezing", "wheeze", "wheezy"],
    "Worse timing": ["at night", "night", "night-time"],
    "Reliever use": ["six times a day", "six a day", "six times daily"],
    Trigger: ["cold weather", "the cold", "cold", "cold air"],
    "Cough type": ["dry cough", "dry"],
  },
  "Part A — Chest pain assessment": {
    "Character of pain": ["tight pressure", "tightness", "pressure", "tight"],
    Location: ["centre", "center", "middle", "centre of the chest", "middle of the chest"],
    "Onset trigger": [
      "climbing the stairs",
      "climbing stairs",
      "going up the stairs",
      "stairs",
    ],
    "Radiates to": ["left arm", "down the left arm", "left arm and jaw"],
    "Associated symptom": [
      "breathless",
      "breathlessness",
      "short of breath",
      "shortness of breath",
      "sweaty",
      "sweating",
    ],
  },
  "Part A — Child with fever": {
    Onset: ["yesterday evening", "last night", "yesterday", "evening"],
    Temperature: ["thirty-nine degrees", "thirty-nine", "39 C", "thirty-nine degrees celsius"],
    Feeding: ["refusing food", "refusing to eat", "not eating", "refusing solids"],
    "Ear sign": [
      "pulling at her right ear",
      "pulling her right ear",
      "pulling at right ear",
      "pulling at her ear",
      "pulling ear",
      "right ear",
    ],
    Behaviour: ["irritable", "irritability", "very irritable"],
  },
  "Part A — Diabetes annual check": {
    "Morning readings": ["high", "running high", "raised", "around twelve", "twelve"],
    "Foot symptom": ["numbness", "numb", "numbness in her toes", "numbness in toes"],
    "Weight change": [
      "lost about four kilos",
      "lost four kilos",
      "four kilos",
      "4 kg",
      "lost weight",
      "weight loss",
    ],
    "Fluid symptom": ["thirsty", "thirst", "always thirsty", "increased thirst"],
    "Night symptom": [
      "pass urine",
      "passing urine",
      "getting up to pass urine",
      "urinating",
      "passing water",
    ],
  },
  "Part A — Knee pain consultation": {
    "Affected joint": ["right knee", "knee"],
    "Duration of symptoms": ["three weeks"],
    "Pain worsens when": ["climbing stairs", "climbing the stairs", "going upstairs", "stairs"],
    "Current medication": ["paracetamol"],
  },
  "Part A — Lower back pain": {
    Mechanism: ["lifting a heavy box", "lifting a box", "lifting", "a heavy box"],
    Duration: ["Four days ago", "four days"],
    Radiation: [
      "back of my left leg",
      "back of the left leg",
      "down the left leg",
      "left leg",
    ],
    "Sensory symptom": ["tingly", "tingling", "pins and needles"],
    "Relieving factor": ["Lying flat", "lying down", "lying", "flat"],
  },
  "Part A — Medication side-effect": {
    "Suspected cause": [
      "blood pressure medication",
      "blood pressure tablets",
      "blood pressure medicine",
      "the new tablets",
    ],
    "Main side-effect": ["dry cough", "cough", "dry"],
    "Worse timing": ["at night", "night", "night-time"],
    "Other sign": ["puffy", "puffy ankles", "swollen ankles", "swelling", "ankle swelling"],
    "Duration on drug": ["three weeks"],
  },
  "Part A — Mental-health check-in": {
    Mood: ["low", "quite low", "low mood"],
    "Loss of": ["interest", "interest in things", "enjoyment"],
    "Sleep pattern": [
      "wake very early",
      "waking early",
      "early waking",
      "wakes at four",
      "waking at four",
      "early morning waking",
    ],
    Appetite: ["barely eating", "not eating", "hardly eating", "poor appetite", "reduced appetite"],
    Concentration: [
      "can not focus",
      "cannot focus",
      "poor concentration",
      "unable to focus",
      "can not concentrate",
    ],
  },
  "Part A — Migraine review": {
    Frequency: ["three times a week", "three a week", "three times weekly"],
    Location: ["behind my right eye", "behind the right eye", "behind right eye", "right eye"],
    Quality: ["throbs", "throbbing", "throbbing pain"],
    "Aggravating factor": ["Bright light", "light", "bright lights"],
    // 🔴 "flashing lights" is NOT here. See the header.
    "Warning sign": ["flashing lines", "lines"],
  },
  "Part A — New skin rash": {
    Site: ["forearms", "arms"],
    Onset: ["three days ago", "three days"],
    Appearance: ["Small red bumps", "red bumps", "bumps", "small bumps", "small red lumps"],
    "Possible trigger": ["laundry detergent", "detergent", "new detergent", "washing powder"],
    Spread: ["neck", "to the neck"],
  },
  "Part A — Ongoing sleep problem": {
    "Time to fall asleep": ["at least an hour", "an hour", "over an hour", "sixty minutes"],
    Duration: ["three months"],
    "Night worry": ["money", "worrying about money", "finances", "worries about money"],
    "Daytime effect": ["drowsy", "drowsiness", "sleepy", "naps in the afternoon"],
    "Evening habit": ["coffee", "coffee after dinner", "caffeine"],
  },
  "Part A — Post-operative wound check": {
    "Wound colour": ["red", "redness", "red edges"],
    "Local sign": ["warm", "warmth", "hot", "feels warm"],
    Discharge: ["yellow fluid", "yellow discharge", "yellow"],
    "Pain trend": ["worse", "getting worse", "worsening", "has got worse"],
    "Systemic sign": ["feverish", "fever", "a temperature", "temperature"],
  },
  "Part A — Suspected urinary infection": {
    // 🔴 "burning" is NOT here. See the header.
    "Pain on voiding": ["stings", "stinging"],
    Onset: ["two days ago", "two days"],
    Frequency: ["all the time", "going all the time", "frequently", "more often"],
    "Urine appearance": ["cloudy", "cloudy urine"],
    "Pain site": ["low in my tummy", "lower tummy", "lower abdomen", "tummy", "abdomen"],
  },
};

/** title → the question's own `answer` → additional accepted answers. */
export const READING_PART_A_ACCEPT: Record<string, Record<string, readonly string[]>> = {
  "Part A — Aseptic non-touch technique": { "key parts": ["key parts", "the key parts"] },
  "Part A — Discharge planning checklist": {
    date: ["date", "expected date", "expected date of discharge", "date of discharge"],
  },
  "Part A — Falls risk assessment": { "six hours": ["six hours", "within six hours"] },
  "Part A — Hand hygiene texts": { dry: ["dry", "dry hands"] },
  "Part A — Informed consent essentials": { capacity: ["capacity", "mental capacity"] },
  "Part A — Insulin storage and handling": {
    "28": ["28", "28 days", "twenty-eight", "twenty-eight days"],
  },
  "Part A — Malnutrition screening": { dietitian: ["dietitian", "dietician"] },
  "Part A — Oxygen cylinder safety": { combustion: ["combustion", "supports combustion"] },
  "Part A — Pain assessment methods": {
    imaginable: ["imaginable", "worst pain imaginable", "the worst imaginable"],
  },
  "Part A — Preventing pressure injuries in immobile patients": {
    "30-degree": ["30-degree", "30-degree tilt", "thirty-degree", "thirty-degree tilt", "30 degrees"],
  },
  "Part A — Repositioning for skin protection": {
    two: ["two", "two hours", "every two hours", "two-hourly"],
  },
  "Part A — Safe patient transfers": { body: ["body", "your body", "close to your body"] },
  "Part A — Source isolation precautions": { Gloves: ["gloves"] },
  "Part A — Urinary catheter care": { bladder: ["bladder", "the level of the bladder"] },
  "Part A — Wound dressing selection": { autolytic: ["autolytic", "autolytic debridement"] },

  "OET Form 1 · Reading Part A — Preventing pressure injuries": {
    "the Braden Scale": ["Braden Scale", "Braden", "the Braden scale"],
    "18": ["18", "eighteen", "18 or below"],
    "the 30-degree tilt": [
      "30-degree tilt",
      "30 degree tilt",
      "thirty-degree tilt",
      "30-degree",
      "30 degrees",
    ],
    "non-blanching redness": [
      "non-blanching redness",
      "non-blanching",
      "nonblanching redness",
      "redness that does not blanch",
    ],
    MUST: ["MUST", "MUST tool", "the MUST tool"],
    "the dietitian": ["dietitian", "dietician"],
    surface: ["surface", "a hard surface", "an external surface"],
    condition: ["condition", "clinical condition"],
    floating: ["floating", "floated", "float", "off the mattress"],
    barrier: ["barrier", "barrier cream"],
    massage: ["massage", "massaging"],
    impairs: ["impairs", "impair", "impairs healing"],
    dehydrated: ["dehydrated", "dehydration", "dry"],
  },
  "OET Form 2 · Reading Part A — Preventing falls in older adults": {
    "a previous fall": [
      "previous fall",
      "a history of a previous fall",
      "history of a previous fall",
      "a fall",
    ],
    postural: [
      "postural",
      "postural blood pressure",
      "postural hypotension",
      "a drop on standing",
      "lying and standing",
      "orthostatic",
    ],
    "at least 50 hours": ["at least 50 hours", "50 hours", "fifty hours", "at least fifty hours"],
    "tai chi": ["tai chi", "taichi"],
    "an occupational therapist": ["occupational therapist", "OT"],
    "a low heel": ["low heel", "low heels", "low-heeled"],
    predictor: ["predictor", "strongest predictor"],
    prevention: ["prevention", "falls prevention"],
    dose: ["dose", "dosage", "sufficient dose"],
    walking: ["walking", "walk", "walking alone"],
    remove: ["remove", "removing", "removal"],
    bifocals: ["bifocals", "bifocal glasses", "bifocal lenses"],
    blood: ["blood", "blood pressure"],
  },
  "OET Form 3 · Reading Part A — Delirium in hospital": {
    "hours or days": ["hours or days", "hours to days", "over hours or days"],
    "the 4AT": ["4AT", "the 4AT"],
    night: ["night", "at night", "night-time"],
    // The stem asks for ONE site, and the text names two — so both are right.
    urinary: ["urinary", "urinary tract", "urinary tract infection", "UTI", "chest", "chest infection"],
    dehydration: ["dehydration", "dehydrated", "constipation", "pain"],
    mobile: ["mobile", "mobilised", "moving", "mobility"],
    "hearing aids": ["hearing aids", "their hearing aids"],
    sleep: ["sleep", "uninterrupted sleep"],
    hypoactive: ["hypoactive", "hypoactive delirium", "hypo-active"],
    problem: ["problem", "cause", "underlying cause", "underlying problem"],
    last: ["last", "last resort", "a last resort"],
    prolong: ["prolong", "prolongs", "prolonging"],
    dementia: ["dementia"],
  },
};

const EMPTY: readonly string[] = [];

/** Extra accepted answers for one Listening Part A gap. Empty when the item or
 *  the label is not in the overlay — the gate is what makes sure that never
 *  happens quietly. */
export function listeningAcceptFor(
  title: string | undefined,
  label: string,
): readonly string[] {
  if (!title) return EMPTY;
  return LISTENING_PART_A_ACCEPT[title]?.[label] ?? EMPTY;
}

/** Extra accepted answers for one Reading Part A free-text question, keyed by
 *  the question's own `answer`. */
export function readingAcceptFor(
  title: string | undefined,
  answer: string,
): readonly string[] {
  if (!title) return EMPTY;
  return READING_PART_A_ACCEPT[title]?.[answer] ?? EMPTY;
}
