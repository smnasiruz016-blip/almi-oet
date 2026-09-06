/**
 * ACCEPT LISTS — the authored answers, as a CODE-SIDE OVERLAY.
 *
 * ── 🔴 PART OF THE READING HALF SERVES NOTHING (3 September 2026) ────
 *
 * On 3 September 2026 `READING_PART_A_ACCEPT` had eighteen keys, and they were
 * EXACTLY the eighteen legacy Reading Part A titles retired from production
 * that day. Measured after that retire: the 195 gap answers still being served
 * carried 161 variants in their own payloads and 🔴 ZERO from this overlay.
 * Its 150 variant strings reached nothing a learner could open.
 *
 * ⚠️ THAT IS NO LONGER THE WHOLE OF THIS HALF. Since 7 September 2026 it also
 * carries the LIVE Reading Part A items — 47 keys in all, of which 17 are
 * retired. Do not read "the Reading half is dead" off this paragraph; read the
 * OVERLAY DEAD line the gate prints, which is computed.
 *
 * THE RETIRED KEYS ARE KEPT, AND NOT OUT OF SENTIMENT. `scripts/retire-
 * fragments.mts --restore` can put those items back in one command. A restore
 * with them deleted would mark right answers WRONG on exactly the variants
 * that were made honest that same evening — the defect closed in PR #35, walked
 * back in through the door marked "cleanup". A restore that quietly reintroduces
 * a defect is worse than a dead file.
 *
 * SO IT IS COUNTED, because a dead thing that is counted does not get forgotten.
 * `gate:accept-lists` prints on every run:
 *
 *     OVERLAY DEAD: <n> key(s) naming retired items, <m> variant(s) serving nothing
 *
 * computed from the checked-in retire lists in scripts/retire/, never typed by
 * hand. IT PRINTS, IT DOES NOT FAIL — a gate that fails on a state we chose
 * deliberately is noise, and noise is how gates get switched off.
 *
 * 🔴 IT WAS 18 AND 150. ON 7 SEPTEMBER 2026 IT BECAME 17 AND 159 — ONE KEY
 * FEWER AND NINE VARIANTS MORE, AND THE "MAY ONLY SHRINK" LINE ABOVE IS THE
 * THING THAT MOVED. Both halves of that are measured, not guessed:
 *
 *   − 1 key: "Source isolation precautions" held one row, `Gloves` →
 *     ["gloves"]. The 6 September bank lower-cased that answer, and the
 *     normaliser has always case-folded, so the row accepted nothing the
 *     marker did not already accept. It is gone.
 *   + 9 variants: the 6 September accept-list file covers EVERY Reading Part A
 *     item in scripts/seed/gen, and seventeen of those are retired. It has to:
 *     gate:accept-lists A4 counts coverage over the seed source, and the seed
 *     source still holds the retired items. The dead half is therefore not
 *     idle — it is what keeps A4 quiet on seventeen items nobody can open.
 *
 * ⚠️ SO THE RULE IS RESTATED, NOT QUIETLY DROPPED: the number shrinks when an
 * item is restored or deleted for good, and it may grow ONLY because the
 * coverage a retired item still owes A4 has been written. Any other growth is
 * dead weight and should be questioned. When the restore window closes and
 * those items are gone, `READING_PART_A_ACCEPT` loses them and the printed
 * line goes with them.
 *
 * `LISTENING_PART_A_ACCEPT` IS UNTOUCHED BY ANY OF THIS. All 34 Listening Part A
 * items are live and its 677 variants are doing real work on every attempt.
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
 * ── 🔴 THE LINE, AS CORRECTED ON 2 SEPTEMBER 2026 ───────────────────────────
 *
 * The first version of this file broke its own rule. It refused `flashing
 * lights` and `burning` because the audio never said them — and then accepted
 * `soft drink`, `pudding`, `wholemeal`, `saucepan`, `flu jab`, `backbone`,
 * `abdomen` and `finances`, which the audio never said either. 63 variants
 * across 20 items were withdrawn. The line is now written down:
 *
 *   ACCEPTED                              REFUSED
 *   the same word in another form         a different word
 *     weak→weakness, throbs→throbbing       warm→hot, dessert→pudding
 *   a spelling difference                 a different thing
 *     centre/center, dietitian/dietician    pan→saucepan, toast→bread
 *   shorter or longer, same thing         a different measure
 *     crisps / a packet of crisps           an hour→60 minutes
 *   an abbreviation                       a paraphrase
 *     micrograms→mcg, kilos→kg              daily→every day
 *
 * LENIENCY IS ON THE WRITING, NEVER ON THE LISTENING.
 *
 * Two of the withdrawals were mirror images of each other, and only a pass over
 * the WHOLE list could have found them: "Practice-nurse asthma review" says
 * "Cold air, mostly" and was accepting `cold weather`; "Part A — Asthma
 * flare-up" says "it's the cold weather" and was accepting `cold air`. Each had
 * borrowed the other item's word.
 *
 * A third came from counting rather than reading: inside the Dietitian item,
 * "Coffee taken with" (answer `two sugars`) also accepted `sugar` — which is
 * the whole answer to a DIFFERENT gap in the same item, "Reduce this in coffee
 * gradually". A gap measuring HOW MUCH could be answered without the amount.
 * gate:accept-lists check A10 now makes that collision impossible.
 *
 * ── 🔴 THREE PLACES THE LIST IS DELIBERATELY NARROW ─────────────────────
 *
 *   Migraine · g9 "Warning sign before attack" = `flashing lines`. "flashing
 *   lights" is REFUSED.
 *   Urinary · g1 "Pain on passing urine" = `stings`. "burning" is REFUSED.
 *   🔴 Midwife · "Folic acid dose:" = `400 micrograms`. `400 mg` is NEVER
 *   accepted — a thousand-fold dose. Asserted by check A9.
 *
 * ── 🔴 HOW IT IS KEYED, AND WHY THAT CHANGED ON 7 SEPTEMBER 2026 ───────
 *
 * BOTH HALVES ARE KEYED BY ID: item `slug`, then the gap's `id` (Listening) or
 * the question's `id` (Reading). Each row also carries the `label` it belongs
 * to — the gap's label, or for Reading the question's own `answer` — and
 * gate:accept-lists A2/A3 assert that the id EXISTS on that item and that the
 * label still MATCHES. The label is therefore data that is checked, not a
 * comment that can quietly go stale.
 *
 * 🔴 WHY IT CHANGED, IN ONE NUMBER: 45. The bank of 6 September 2026 rewrote
 * fifteen Listening Part A items from five gaps to twelve, and every one of
 * those items kept its slug and changed its gap LABELS. The overlay was keyed
 * by label. 45 keys stopped matching anything in a single afternoon, and with
 * them 132 authored variants — the exact SILENCE this file's gate exists to
 * prevent, arriving through the door marked "new content". A gap id survives a
 * rewording; a label does not.
 *
 * ⚠️ THOSE 45 ROWS ARE GONE, NOT MOVED. Their variants were authored against
 * ANSWERS that no longer exist ("Frequency" = `three times a week` is now
 * "Headaches per week now" = `three`), so carrying them across would have been
 * authoring, not migration. They are in git, at fa82f06^. The one Reading row
 * dropped with them — "Gloves" → ["gloves"] on Source isolation precautions —
 * died because the answer itself became lowercase, which the normaliser has
 * always folded; it accepted nothing the marker did not already accept.
 *
 * ── WHERE THE ROWS CAME FROM ─────────────────────────────────────
 *
 * The rows that survived the re-key, MERGED with the 536 answers / 951 variants
 * of `AlmiOET_accept_lists_2026-09-06.json` (Cowork, 6 September 2026), which
 * carries ONLY numerals↔words, a curated abbreviation map and a curated spelling
 * map. 🔴 The blanket pattern rules that file once had — `our`→`or`,
 * plural→gerund — were DELETED before it was handed over, because they marked
 * WRONG ANSWERS CORRECT: hours→hors, four→for, biscuits→biscuitbing. NO
 * PATTERN-GENERATED ROW MAY BE ADDED HERE. A variant is added by hand, one at a
 * time, and A11/A12 then ask whether the item's own audio or text says it.
 *
 * Every key is checked against scripts/seed/gen by gate:accept-lists, which
 * FAILS THE BUILD on a key that matches no gap or question. A silently skipped
 * key would leave a gap with no accept-list and nobody would know.
 */

/** One row: the extra answers accepted for one gap or one question, with the
 *  label it belongs to so the row cannot drift off its unit unnoticed. */
export type AcceptRow = { readonly label: string; readonly accept: readonly string[] };

/** slug → gap id → the gap's label and its extra accepted answers. */
export const LISTENING_PART_A_ACCEPT: Record<string, Record<string, AcceptRow>> = {
  "lis-a-ankle-injury-after-a-fall": {
    // Part A — Ankle injury after a fall
    g1: { label: "Activity at time of injury", accept: ["playing football", "football"] },
    g3: { label: "Time since injury", accept: ["three days ago", "three days", "Saturday", "Saturday afternoon", "3 days"] },
    g4: { label: "Pain score on weight-bearing (0-10)", accept: ["7"] },
    g5: { label: "Pain relief taken", accept: ["ibuprofen"] },
    g8: { label: "Site of worst swelling", accept: ["outer ankle", "outside of the ankle", "outer side of the ankle"] },
    g11: { label: "Sprained same ankle this long ago", accept: ["2 years"] },
  },
  "lis-a-antenatal-visit": {
    // Part A — Antenatal visit
    g1: { label: "Gestation", accept: ["twenty-eight weeks", "twenty-eight"] },
    g4: { label: "Swelling site", accept: ["fingers", "her fingers"] },
  },
  "lis-a-asthma-flare-up": {
    // Part A — Asthma flare-up
    g1: { label: "Main symptom", accept: ["wheezing", "wheeze", "wheezy"] },
    g3: { label: "Symptoms have built up over", accept: ["10 days"] },
    g4: { label: "Reliever use this week", accept: ["6 times"] },
    g7: { label: "Distance walked before stopping", accept: ["50 metres"] },
    g8: { label: "Cough type", accept: ["dry cough", "dry"] },
  },
  "lis-a-chest-pain-assessment": {
    // Part A — Chest pain assessment
    g1: { label: "Character of pain", accept: ["tight pressure", "tightness", "pressure", "tight"] },
    g2: { label: "Site of pain", accept: ["center"] },
    g4: { label: "Pain began this long ago", accept: ["2 hours"] },
    g7: { label: "Associated symptom", accept: ["breathless", "breathlessness", "sweaty", "sweating"] },
    g8: { label: "Pain score at worst (0-10)", accept: ["8"] },
    g11: { label: "Stopped smoking this long ago", accept: ["11 years"] },
  },
  "lis-a-child-with-fever": {
    // Part A — Child with fever
    g2: { label: "Temperature this morning", accept: ["39 degrees"] },
    g4: { label: "Number of doses given", accept: ["3"] },
    g5: { label: "Feeding", accept: ["refusing food", "refusing to eat", "not eating"] },
    g6: { label: "Wet nappies since this morning", accept: ["5"] },
    g10: { label: "Behaviour", accept: ["irritable", "irritability", "very irritable"] },
  },
  "lis-a-diabetes-annual-check": {
    // Part A — Diabetes annual check
    g2: { label: "Approximate morning reading", accept: ["12"] },
    g3: { label: "Foot symptom", accept: ["numbness", "numb", "numbness in her toes", "numbness in toes"] },
    g4: { label: "Numbness first noticed", accept: ["2 months"] },
    g5: { label: "Weight lost, unintentionally", accept: ["4 kilos"] },
    g6: { label: "Fluid symptom", accept: ["thirsty", "thirst", "always thirsty"] },
    g10: { label: "Walks to the allotment, each way", accept: ["15 minutes"] },
  },
  "lis-a-knee-pain-consultation": {
    // Part A — Knee pain consultation
    g1: { label: "Affected joint", accept: ["right knee", "knee"] },
    g2: { label: "Duration of symptoms", accept: ["three weeks", "3 weeks"] },
    g5: { label: "Weekly running distance reached", accept: ["5 kilometres"] },
    g9: { label: "Morning stiffness lasts", accept: ["10 minutes"] },
    g10: { label: "Current medication", accept: ["paracetamol"] },
  },
  "lis-a-lower-back-pain": {
    // Part A — Lower back pain
    g2: { label: "Injury occurred this long ago", accept: ["4 days"] },
    g7: { label: "Relieving factor", accept: ["Lying flat", "lying down", "lying", "flat"] },
  },
  "lis-a-medication-side-effect": {
    // Part A — Medication side-effect
    g1: { label: "Suspected cause", accept: ["blood pressure medication", "blood pressure tablets", "blood pressure medicine", "the new tablets", "BP medication"] },
    g2: { label: "Main side-effect", accept: ["dry cough", "cough", "dry"] },
    g4: { label: "Duration on the drug", accept: ["3 weeks"] },
  },
  "lis-a-mental-health-check-in": {
    // Part A — Mental-health check-in
    g1: { label: "Mood", accept: ["low", "quite low", "low mood"] },
    g4: { label: "Symptoms began around", accept: ["6 months"] },
    g6: { label: "Wakes very early, at around", accept: ["4"] },
    g7: { label: "Appetite", accept: ["barely eating", "not eating"] },
    g10: { label: "Glasses of wine most nights", accept: ["3 or 4"] },
  },
  "lis-a-migraine-review": {
    // Part A — Migraine review
    g1: { label: "Headaches per week now", accept: ["3"] },
    g8: { label: "Aggravating factor", accept: ["Bright light", "light", "bright lights"] },
    g10: { label: "Warning appears this long beforehand", accept: ["10 minutes"] },
    g11: { label: "Days a month taking a painkiller", accept: ["15"] },
  },
  "lis-a-new-skin-rash": {
    // Part A — New skin rash
    g2: { label: "Rash appeared this long ago", accept: ["3 days"] },
    g3: { label: "Appearance", accept: ["Small red bumps", "red bumps", "bumps", "small bumps"] },
  },
  "lis-a-ongoing-sleep-problem": {
    // Part A — Ongoing sleep problem
    g2: { label: "Bedtime", accept: ["half past 9"] },
    g3: { label: "Problem has lasted", accept: ["3 months"] },
    g5: { label: "Night worry", accept: ["money", "worrying about money", "worries about money"] },
    g6: { label: "Daytime effect", accept: ["drowsy", "drowsiness", "naps in the afternoon"] },
    g7: { label: "Afternoon nap lasts at least", accept: ["60 minutes"] },
    g8: { label: "Evening habit", accept: ["coffee", "coffee after dinner", "caffeine"] },
    g9: { label: "Coffees per day", accept: ["4 or 5"] },
    g10: { label: "Also drinks most evenings", accept: ["2 beers"] },
    g11: { label: "Referral to be made for", accept: ["CBT", "cognitive behavioral therapy"] },
    g12: { label: "Advice: get out of bed after", accept: ["20 minutes"] },
  },
  "lis-a-post-operative-wound-check": {
    // Part A — Post-operative wound check
    g2: { label: "Surgery took place this long ago", accept: ["9 days"] },
    g5: { label: "Discharge", accept: ["yellow fluid", "yellow discharge", "yellow"] },
  },
  "lis-a-suspected-urinary-infection": {
    // Part A — Suspected urinary infection
    g2: { label: "Symptoms started this long ago", accept: ["2 days"] },
    g3: { label: "Passing urine more often, including at night", accept: ["3 times"] },
    g4: { label: "Urine appearance", accept: ["cloudy", "cloudy urine"] },
    g12: { label: "Expected improvement within", accept: ["48 hours"] },
  },
  "lis-a-f1-physiotherapy-consultation-lower-back-pain": {
    // OET Form 1 · Listening Part A — Physiotherapy consultation (lower back pain)
    g1: { label: "Complaint has lasted for", accept: ["three weeks", "about three weeks", "three weeks now", "3 weeks"] },
    g2: { label: "Activity when it started", accept: ["moving boxes", "lifting boxes", "moving some boxes", "boxes", "moving boxes at work", "lifting deliveries"] },
    g3: { label: "Felt a sharp ___ on the left", accept: ["twinge", "sharp twinge"] },
    g4: { label: "Usual pain is a dull ___", accept: ["ache", "dull ache"] },
    g5: { label: "Becomes sharp when he ___", accept: ["bends forward", "bending forward", "bend forward", "bends forwards", "bending forwards"] },
    g6: { label: "Pain radiates into the left ___", accept: ["buttock", "left buttock"] },
    g7: { label: "Pain does not go past the ___", accept: ["knee"] },
    g8: { label: "Severity out of ten (worst)", accept: ["seven", "seven out of ten", "7/10", "7"] },
    g9: { label: "Relieving factor (heat source)", accept: ["hot water bottle", "water bottle"] },
    g10: { label: "Medication taken", accept: ["ibuprofen"] },
    g11: { label: "No bladder or ___ problems", accept: ["bowel", "bowels"] },
    g12: { label: "Wakes this many times a night", accept: ["two or three times", "two or three", "two to three times", "two to three", "2 or 3 times"] },
  },
  "lis-a-f1-dietitian-consultation-type-2-diabetes": {
    // OET Form 1 · Listening Part A — Dietitian consultation (type 2 diabetes)
    g1: { label: "Referred because this was high", accept: ["HbA1c", "HbA1c level", "blood sugar", "average blood sugar", "blood sugar level"] },
    g2: { label: "Breakfast: two slices of ___", accept: ["white toast", "toast"] },
    g3: { label: "Coffee taken with", accept: ["two sugars", "2 sugars"] },
    g4: { label: "Lunch includes a packet of ___", accept: ["crisps", "packet of crisps"] },
    g5: { label: "Lunch sometimes with a ___", accept: ["fizzy drink", "fizzy"] },
    g6: { label: "Evening meal often followed by a ___", accept: ["dessert"] },
    g7: { label: "Afternoon snack (two or three)", accept: ["biscuits", "two or three biscuits"] },
    g8: { label: "Water intake per day", accept: ["two glasses", "two glasses of water", "two", "2 glasses"] },
    g9: { label: "Evening activity: walks the ___", accept: ["dog"] },
    g10: { label: "Change: swap white toast for ___", accept: ["wholegrain", "whole grain", "wholegrain toast"] },
    g11: { label: "Reduce this in coffee gradually", accept: ["sugar"] },
    g12: { label: "Replace fizzy drink with ___", accept: ["water"] },
  },
  "lis-a-f2-occupational-therapy-home-visit-post-stroke": {
    // OET Form 2 · Listening Part A — Occupational therapy home visit (post-stroke)
    g1: { label: "Home visit after a", accept: ["stroke"] },
    g2: { label: "Washing and dressing takes nearly", accept: ["an hour", "one hour"] },
    g3: { label: "Hardest task: doing up", accept: ["buttons", "doing up buttons"] },
    g4: { label: "His right hand is still", accept: ["weak", "weakness"] },
    g5: { label: "Suggested aid: a", accept: ["button hook", "buttonhook", "hook"] },
    g6: { label: "Comes down the stairs", accept: ["one step at a time", "one at a time", "step at a time", "one step", "1 step at a time"] },
    g7: { label: "Rail is only on", accept: ["the left", "left side", "left-hand side", "left going up"] },
    g8: { label: "Suggested for the bath: a", accept: ["bath board", "board"] },
    g9: { label: "Nervous about carrying a", accept: ["pan"] },
    g10: { label: "Suggested to move things safely: a", accept: ["trolley"] },
    g11: { label: "Has lost his", accept: ["confidence"] },
    g12: { label: "Since a ___ last month", accept: ["fall", "falling"] },
  },
  "lis-a-f2-practice-nurse-asthma-review": {
    // OET Form 2 · Listening Part A — Practice-nurse asthma review
    g1: { label: "Annual review for this condition", accept: ["asthma"] },
    g2: { label: "Reliever should be used at most", accept: ["three times a week", "three times a week or fewer", "three a week", "3 times a week"] },
    g3: { label: "Forgets the preventer when she feels", accept: ["well", "fine", "she feels well"] },
    g4: { label: "The preventer reduces", accept: ["inflammation", "the inflammation"] },
    g5: { label: "The preventer works best taken", accept: ["daily"] },
    g6: { label: "Not using a", accept: ["spacer"] },
    g7: { label: "A spacer helps the medicine reach the", accept: ["lungs"] },
    g8: { label: "Night symptoms: cough or", accept: ["wheeze", "wheezing"] },
    g9: { label: "Trigger 1", accept: ["cold air", "the cold", "cold"] },
    g10: { label: "Trigger 2: her", accept: ["cat"] },
    g11: { label: "Recommended: the", accept: ["flu vaccine", "flu vaccination"] },
    g12: { label: "Nurse to write an updated", accept: ["action plan", "asthma action plan", "plan"] },
  },
  "lis-a-f3-physiotherapist-and-lower-back-pain": {
    // OET Form 3 · Listening Part A — Physiotherapist and lower back pain
    g1: { label: "Back pain started about", accept: ["three weeks ago", "three weeks", "3 weeks ago"] },
    g2: { label: "Injured while lifting a", accept: ["box", "lifting a box"] },
    g3: { label: "Initially felt a sharp", accept: ["twinge", "sharp twinge"] },
    g4: { label: "Pain is now a dull", accept: ["ache", "dull ache"] },
    g5: { label: "Pain is worse when ___ for a long time", accept: ["sitting", "sits", "sit", "sitting down"] },
    g6: { label: "Pain does not travel into his", accept: ["leg"] },
    g7: { label: "Taking for the pain:", accept: ["ibuprofen"] },
    g8: { label: "Has mostly been", accept: ["lying down", "resting", "lying", "in bed", "bed rest", "resting in bed"] },
    g9: { label: "Better than bed rest: gentle", accept: ["movement", "moving", "gentle movement", "exercise"] },
    g10: { label: "Recommended daily: a short", accept: ["walk", "short walk", "walking"] },
    g11: { label: "Most cases settle within", accept: ["six weeks", "within six weeks", "6 weeks"] },
    g12: { label: "Told to avoid heavy", accept: ["lifting", "heavy lifting", "lift"] },
  },
  "lis-a-f3-midwife-antenatal-booking-visit": {
    // OET Form 3 · Listening Part A — Midwife antenatal booking visit
    g1: { label: "Type of appointment today: the", accept: ["booking", "booking appointment"] },
    g2: { label: "Roughly how many weeks pregnant:", accept: ["ten weeks", "ten", "around ten weeks", "10 weeks"] },
    g3: { label: "This is her first", accept: ["baby"] },
    g4: { label: "Feels sick in the", accept: ["mornings", "morning"] },
    g5: { label: "Also feels very", accept: ["tired", "tiredness"] },
    g6: { label: "Has gone off", accept: ["coffee"] },
    g7: { label: "Taking daily: folic", accept: ["acid", "folic acid"] },
    g8: { label: "Folic acid dose:", accept: ["400 micrograms", "400 mcg", "400 micrograms a day", "400 ug", "four hundred micrograms"] },
    g9: { label: "Folic acid protects the baby's", accept: ["spine", "the spine"] },
    g10: { label: "As soon as she found out, she stopped", accept: ["smoking", "smoke"] },
    g11: { label: "First scan at around", accept: ["twelve weeks", "twelve", "around twelve weeks", "12 weeks"] },
    g12: { label: "Warning sign with headaches: seeing", accept: ["spots", "spots in her vision", "spots in vision"] },
  },
  "lis-a-script-3-dietetics-unintentional-weight-loss": {
    // Listening Part A · script 3 — Dietetics (unintentional weight loss)
    g1: { label: "Reported weight loss: approximately", accept: ["2 stone", "about two stone", "nearly two stone"] },
    g2: { label: "Period over which the loss occurred", accept: ["8 months", "since the summer"] },
    g3: { label: "Proportion of the main meal now eaten", accept: ["about half", "fifty per cent", "half of it"] },
    g5: { label: "Change in taste: everything tastes", accept: ["like a coin", "like metal", "metallic taste"] },
    g6: { label: "Problem with dentures since losing weight: they have become", accept: ["loose dentures", "they are loose"] },
    g7: { label: "Shopping is done by", accept: ["a neighbour", "her neighbor", "neighbour", "the neighbour"] },
    g8: { label: "Difficulty with cooking", accept: ["she cannot stand", "standing at the cooker", "standing up"] },
    g11: { label: "Bowel pattern", accept: ["constipation"] },
    g12: { label: "First action agreed: keep a ______ for seven days", accept: ["a food diary", "diary", "food record"] },
  },
  "lis-a-script-4-podiatry-an-ulcer-under-the-foot-in-diabetes": {
    // Listening Part A · script 4 — Podiatry (an ulcer under the foot in diabetes)
    g1: { label: "Mark first noticed", accept: ["3 weeks", "3 weeks ago", "about three weeks", "three weeks"] },
    g2: { label: "First noticed by", accept: ["her", "the wife", "wife"] },
    g3: { label: "Site: under the", accept: ["ball of the foot", "the big toe joint", "under the big toe"] },
    g4: { label: "Pain on pressure", accept: ["no pain", "not painful", "nothing"] },
    g5: { label: "Footwear worn indoors", accept: ["slipper"] },
    g6: { label: "Walks approximately ______ each day", accept: ["2 miles", "about two miles"] },
    g7: { label: "Last eye check", accept: ["a month ago", "one month ago"] },
    g8: { label: "Monofilament testing: sensation absent at ______ sites", accept: ["6", "all six", "six sites"] },
    g9: { label: "Foot pulses", accept: ["both felt", "both present", "palpable", "strong"] },
    g10: { label: "Nature of the lesion: ______ with a break underneath", accept: ["callus", "thick skin"] },
    g11: { label: "Dressing applied", accept: ["a foam dressing", "foam", "foam dressing"] },
    g12: { label: "Review appointment in", accept: ["1 week", "a week", "seven days"] },
  },
  "lis-a-script-5-dentistry-jaw-pain-and-night-grinding": {
    // Listening Part A · script 5 — Dentistry (jaw pain and night grinding)
    g1: { label: "Pain is worst", accept: ["first thing", "mornings", "on waking"] },
    g2: { label: "Duration of symptoms", accept: ["4 months", "about four months"] },
    g3: { label: "Site indicated: in front of the", accept: ["in front of the right ear", "the right ear"] },
    g4: { label: "Noise on opening", accept: ["a click", "clicks", "it clicks"] },
    g5: { label: "Number of episodes of locking", accept: ["2", "two", "two times"] },
    g6: { label: "Made worse during the day by", accept: ["chewing hard food", "eating"] },
    g7: { label: "Reported by her partner at night", accept: ["grinding her teeth", "he says she grinds"] },
    g8: { label: "Recent life change", accept: ["a job in April", "new job", "started a job"] },
    g9: { label: "Coffee intake: ______ a day", accept: ["6", "six coffees", "six cups"] },
    g10: { label: "Wakes each night at", accept: ["4", "4 am", "four o'clock"] },
    g11: { label: "Examination finding: back teeth are", accept: ["flat", "worn", "worn down"] },
    g12: { label: "Treatment to be provided: a", accept: ["a night splint", "soft night splint", "splint"] },
  },
  "lis-a-script-6-optometry-difficulty-driving-at-night": {
    // Listening Part A · script 6 — Optometry (difficulty driving at night)
    g1: { label: "Main difficulty reported", accept: ["driving at night", "driving in the dark"] },
    g2: { label: "Duration of the problem", accept: ["12 months", "a year", "one year"] },
    g3: { label: "Change noticed by day: he needs", accept: ["a lamp", "better lighting", "extra light"] },
    g4: { label: "Appearance of colours", accept: ["dull", "faded", "grey", "less bright"] },
    g6: { label: "Last eye test", accept: ["3 years", "3 years ago", "over three years", "three years"] },
    g7: { label: "General health condition", accept: ["blood pressure", "high BP", "hypertension"] },
    g9: { label: "Former occupation", accept: ["printer", "printing"] },
    g10: { label: "Vision, right eye", accept: ["6 over 12", "six over twelve"] },
    g11: { label: "Intraocular pressures", accept: ["both normal", "normal both eyes"] },
    g12: { label: "Plan: refer for", accept: ["an operation", "cataract operation", "surgery"] },
  },
  "lis-a-script-7-pharmacy-a-medicines-review": {
    // Listening Part A · script 7 — Pharmacy (a medicines review)
    g1: { label: "Number of different medicines", accept: ["11"] },
    g2: { label: "Time all medicines are taken", accept: ["all at once in the morning", "mornings"] },
    g3: { label: "Symptom on standing", accept: ["dizzy", "light-headed", "the room goes"] },
    g4: { label: "Time of day symptom is worst", accept: ["following breakfast", "post-breakfast"] },
    g5: { label: "Falls in the past year", accept: ["2", "two", "two falls"] },
    g6: { label: "Medicine she stopped herself", accept: ["diuretic", "water tablet"] },
    g7: { label: "Reason she stopped it", accept: ["needing the toilet", "passing water", "trips to the toilet"] },
    g8: { label: "Repeat prescriptions are ordered by", accept: ["he does", "son"] },
    g9: { label: "Difficulty with the packaging", accept: ["blister packaging", "blisters", "the packaging"] },
    g11: { label: "Reason she takes it", accept: ["knee pain", "knees"] },
    g12: { label: "First action: check her ______ sitting and standing", accept: ["BP", "her blood pressure"] },
  },
  "lis-a-script-8-nursing-a-leg-ulcer-at-a-home-visit": {
    // Listening Part A · script 8 — Nursing (a leg ulcer at a home visit)
    g1: { label: "Cause of the injury", accept: ["shopping trolley", "trolley"] },
    g2: { label: "Time since the injury", accept: ["5 weeks", "about five weeks"] },
    g3: { label: "Site of the wound", accept: ["front of the left leg", "left leg", "the left shin"] },
    g4: { label: "Dressing is currently changed every", accept: ["3 days", "every three days"] },
    g5: { label: "Amount of exudate", accept: ["a moderate amount", "medium"] },
    g6: { label: "Odour", accept: ["no odour", "no smell", "nothing"] },
    g7: { label: "Ankle swelling is worse", accept: ["at night", "evenings", "later in the day"] },
    g8: { label: "Where the patient is sleeping", accept: ["a chair", "downstairs in the chair", "the chair"] },
    g9: { label: "Compression cannot start until the ______ are done", accept: ["ankle pressures", "pressure readings", "the readings"] },
    g10: { label: "Pain score at dressing change", accept: ["7", "seven out of ten"] },
    g12: { label: "Referral to be made to the", accept: ["the leg clinic", "ulcer clinic"] },
  },
  "lis-a-script-9-veterinary-science-a-stiff-older-dog": {
    // Listening Part A · script 9 — Veterinary science (a stiff older dog)
    g1: { label: "Age", accept: ["9", "nine years", "nine years old"] },
    g2: { label: "Breed", accept: ["chocolate labrador", "lab", "labrador"] },
    g3: { label: "Stiffness is worst", accept: ["first thing in the morning", "in the morning", "on waking"] },
    g4: { label: "Duration of the problem", accept: ["6 months", "about six months"] },
    g5: { label: "Activity stopped altogether", accept: ["climbing the stairs", "going upstairs", "stairs"] },
    g6: { label: "No longer jumps into", accept: ["car", "the back of the car"] },
    g7: { label: "Weight gained since last year", accept: ["4 kg", "4 kilos", "about four kilos"] },
    g8: { label: "Currently being given", accept: ["a joint supplement", "supplement"] },
    g9: { label: "Owner's main concern", accept: ["pain", "whether he is in pain"] },
    g10: { label: "Examination: reduced movement in both", accept: ["both hips", "hip joints", "the hips"] },
    g11: { label: "Investigation to be arranged", accept: ["radiographs", "x-ray", "xrays"] },
    g12: { label: "Starting today: a two-week trial of", accept: ["analgesia", "pain medication", "painkillers"] },
  },
  "lis-a-script-10-radiography-safety-checks-before-an-mri-scan": {
    // Listening Part A · script 10 — Radiography (safety checks before an MRI scan)
    g1: { label: "Examination requested", accept: ["MRI", "MRI scan"] },
    g2: { label: "Site of the pain", accept: ["his back", "low back", "the lower back"] },
    g3: { label: "Duration of symptoms", accept: ["3 months", "about three months"] },
    g4: { label: "New symptom this week", accept: ["numbness", "pins and needles in the leg", "tingling"] },
    g5: { label: "Previous operation", accept: ["a hernia operation", "hernia", "hernia repair"] },
    g6: { label: "Metal implant", accept: ["knee replacement", "right knee replacement"] },
    g7: { label: "Year of the implant", accept: ["in 2019", "twenty nineteen"] },
    g8: { label: "Former occupation", accept: ["welder", "welding"] },
    g9: { label: "Previous eye injury", accept: ["no", "no injury", "none"] },
    g10: { label: "Difficulty reported", accept: ["claustrophobic", "enclosed spaces", "small spaces"] },
    g11: { label: "Offered during the scan", accept: ["a buzzer and music", "music", "music through headphones"] },
    g12: { label: "Expected length of the scan", accept: ["20 minutes", "about twenty minutes"] },
  },
  "lis-a-script-11-speech-pathology-hoarseness-in-a-teacher": {
    // Listening Part A · script 11 — Speech pathology (hoarseness in a teacher)
    g1: { label: "Occupation", accept: ["primary teacher", "teacher"] },
    g2: { label: "Quality of the voice: it becomes", accept: ["a croak", "croaky", "rough"] },
    g3: { label: "Time of day it is worst", accept: ["afternoons", "by the afternoon", "end of the day"] },
    g4: { label: "Duration of the problem", accept: ["4 months", "since September", "start of the school year"] },
    g5: { label: "Episodes of complete voice loss", accept: ["2", "two", "two days"] },
    g6: { label: "Sensation in the throat", accept: ["a lump in the throat", "like a lump", "lump"] },
    g7: { label: "Daily fluid intake", accept: ["1 glass", "a glass", "one glass a day"] },
    g8: { label: "Habit to be addressed first", accept: ["clearing her throat", "coughing to clear"] },
    g9: { label: "Teaches without a microphone in the", accept: ["gym", "the hall", "the sports hall"] },
    g10: { label: "Symptom reported at night", accept: ["acid", "indigestion", "reflux"] },
    g11: { label: "Finding at the ENT clinic", accept: ["nodules both sides", "vocal nodules"] },
    g12: { label: "Number of therapy sessions offered", accept: ["6", "six sessions"] },
  },
  "lis-a-script-12-occupational-therapy-recovery-after-a-wrist-fracture": {
    // Listening Part A · script 12 — Occupational therapy (recovery after a wrist fracture)
    g1: { label: "Injury", accept: ["a broken wrist", "broken wrist", "fractured wrist", "wrist fracture"] },
    g2: { label: "Plaster came off", accept: ["4 weeks ago", "a month ago", "four weeks"] },
    g3: { label: "Occupation", accept: ["hairdresser"] },
    g4: { label: "Hardest daily task", accept: ["jars", "opening a jar"] },
    g5: { label: "Hand affected", accept: ["her right hand", "right", "right hand"] },
    g6: { label: "Grip strength compared with the other side", accept: ["fifty per cent", "half", "half of the left"] },
    g7: { label: "Sensation in the fingers", accept: ["all normal", "no numbness", "nothing"] },
    g8: { label: "Swelling is worst: at the ______ of the day", accept: ["the end"] },
    g9: { label: "Aid provided", accept: ["an opener", "jar opener"] },
    g10: { label: "Exercise given", accept: ["squeezing putty"] },
    g11: { label: "Plan for work: return on", accept: ["half days", "part time", "shorter hours"] },
    g12: { label: "Review in", accept: ["3 weeks"] },
  },
  "lis-a-script-13-medicine-breathlessness-with-an-irregular-pulse": {
    // Listening Part A · script 13 — Medicine (breathlessness with an irregular pulse)
    g1: { label: "Main symptom", accept: ["breathless", "short of breath", "shortness of breath"] },
    g2: { label: "Duration", accept: ["2 months", "since Christmas"] },
    g3: { label: "Distance he can walk now", accept: ["50 metres", "fifty meters", "to the postbox"] },
    g4: { label: "Distance before it started", accept: ["1 mile", "one mile"] },
    g5: { label: "Number of pillows used at night", accept: ["3", "three pillows"] },
    g6: { label: "Ankles swell", accept: ["at the end of the day", "evenings", "in the evening"] },
    g7: { label: "Wakes gasping", accept: ["twice weekly", "two times a week"] },
    g8: { label: "Stopped smoking", accept: ["10 years ago", "ten years"] },
    g9: { label: "Former occupation", accept: ["bricklayer", "bricklaying"] },
    g10: { label: "Examination: the pulse is", accept: ["not steady", "uneven"] },
    g11: { label: "Arranged today: blood tests and a", accept: ["chest radiograph", "chest xray", "x-ray"] },
    g12: { label: "Before leaving the building: an", accept: ["EKG", "a tracing", "an ECG"] },
  },
  "lis-a-script-14-physiotherapy-knee-pain-in-a-runner": {
    // Listening Part A · script 14 — Physiotherapy (knee pain in a runner)
    g1: { label: "Sport", accept: ["run", "runs"] },
    g2: { label: "Weekly distance", accept: ["40 kilometres", "40 km", "forty km"] },
    g3: { label: "Site of pain: the ______ of the knee", accept: ["anterior", "the front"] },
    g4: { label: "Worst activity", accept: ["coming down the stairs", "downstairs", "going down stairs"] },
    g5: { label: "Duration", accept: ["6 weeks"] },
    g6: { label: "Change before onset", accept: ["a new pair of shoes", "different shoes", "shoes"] },
    g7: { label: "Swelling", accept: ["no swelling", "not swollen", "nothing"] },
    g8: { label: "Giving way", accept: ["it has not", "no", "not given way"] },
    g9: { label: "Examination finding: weak", accept: ["hip", "hips", "the hip muscles"] },
    g10: { label: "Advice on running", accept: ["cut to half", "half the distance", "reduce distance", "run less"] },
    g11: { label: "Exercise focus", accept: ["hip exercises", "hip strengthening", "strengthening the hips"] },
    g12: { label: "Exercises to be done ______ times a week", accept: ["4", "four times"] },
  },
  "lis-a-script-15-nursing-a-pre-operative-assessment": {
    // Listening Part A · script 15 — Nursing (a pre-operative assessment)
    g1: { label: "Operation planned", accept: ["hip replacement", "left hip replacement"] },
    g2: { label: "Date of surgery", accept: ["12th", "Tuesday the twelfth", "the 12th", "twelfth"] },
    g4: { label: "How long before surgery it must stop", accept: ["2 weeks", "two weeks before"] },
    g5: { label: "Allergy", accept: ["adhesive plasters", "plaster", "sticking plasters"] },
    g6: { label: "Previous problem with anaesthetic", accept: ["being sick", "nausea", "sickness", "vomiting"] },
    g7: { label: "Dental note: a ______ at the front", accept: ["a crown", "front crown"] },
    g8: { label: "Weight", accept: ["90 kg", "90 kilos", "ninety kg"] },
    g9: { label: "No food after", accept: ["12 midnight"] },
    g10: { label: "Clear fluids allowed until ______ in the morning", accept: ["6", "six o'clock"] },
    g11: { label: "Being collected by", accept: ["son", "the son"] },
    g12: { label: "To bring on the day: her", accept: ["her inhaler", "the inhaler"] },
  },
};

/** slug → question id → the question's own `answer` (as the label) and its
 *  extra accepted answers. Free-text questions only. */
export const READING_PART_A_ACCEPT: Record<string, Record<string, AcceptRow>> = {
  "rea-a-aseptic-non-touch-technique": {
    // Part A — Aseptic non-touch technique
    q8: { label: "key parts", accept: ["key parts", "the key parts"] },
  },
  "rea-a-discharge-planning-checklist": {
    // Part A — Discharge planning checklist
    q8: { label: "date", accept: ["date", "expected date", "expected date of discharge", "date of discharge"] },
  },
  "rea-a-falls-risk-assessment": {
    // Part A — Falls risk assessment
    q8: { label: "six hours", accept: ["six hours", "within six hours", "6 hours"] },
    q9: { label: "twelve months", accept: ["12 months"] },
  },
  "rea-a-hand-hygiene-texts": {
    // Part A — Hand hygiene texts
    q8: { label: "dry", accept: ["dry", "dry hands"] },
    q9: { label: "thirty", accept: ["30"] },
  },
  "rea-a-informed-consent-essentials": {
    // Part A — Informed consent essentials
    q8: { label: "capacity", accept: ["capacity", "mental capacity"] },
  },
  "rea-a-insulin-storage-and-handling": {
    // Part A — Insulin storage and handling
    q8: { label: "28", accept: ["28", "28 days", "twenty-eight", "twenty-eight days"] },
    q17: { label: "two", accept: ["2"] },
  },
  "rea-a-malnutrition-screening": {
    // Part A — Malnutrition screening
    q8: { label: "dietitian", accept: ["dietitian", "dietician"] },
  },
  "rea-a-oxygen-cylinder-safety": {
    // Part A — Oxygen cylinder safety
    q8: { label: "combustion", accept: ["combustion", "supports combustion"] },
  },
  "rea-a-pain-assessment-methods": {
    // Part A — Pain assessment methods
    q8: { label: "imaginable", accept: ["imaginable", "worst pain imaginable", "the worst imaginable"] },
    q11: { label: "four", accept: ["4"] },
  },
  "rea-a-preventing-pressure-injuries-in-immobile-patients": {
    // Part A — Preventing pressure injuries in immobile patients
    q8: { label: "30-degree", accept: ["30-degree", "30-degree tilt", "thirty-degree", "thirty-degree tilt", "30 degrees"] },
    q11: { label: "six hours", accept: ["6 hours"] },
  },
  "rea-a-repositioning-for-skin-protection": {
    // Part A — Repositioning for skin protection
    q8: { label: "two", accept: ["two", "two hours", "every two hours", "two-hourly", "2"] },
  },
  "rea-a-safe-patient-transfers": {
    // Part A — Safe patient transfers
    q8: { label: "body", accept: ["body", "your body", "close to your body"] },
  },
  "rea-a-urinary-catheter-care": {
    // Part A — Urinary catheter care
    q8: { label: "bladder", accept: ["bladder", "the level of the bladder"] },
  },
  "rea-a-wound-dressing-selection": {
    // Part A — Wound dressing selection
    q8: { label: "autolytic", accept: ["autolytic", "autolytic debridement"] },
    q9: { label: "seven", accept: ["7"] },
    q19: { label: "two", accept: ["2"] },
  },
  "rea-a-f1-preventing-pressure-injuries": {
    // OET Form 1 · Reading Part A — Preventing pressure injuries
    q8: { label: "the Braden Scale", accept: ["Braden Scale", "Braden", "the Braden scale"] },
    q9: { label: "18", accept: ["18", "eighteen", "18 or below"] },
    q10: { label: "the 30-degree tilt", accept: ["30-degree tilt", "30 degree tilt", "thirty-degree tilt", "30-degree", "30 degrees"] },
    q11: { label: "non-blanching redness", accept: ["non-blanching redness", "non-blanching", "nonblanching redness", "redness that does not blanch"] },
    q12: { label: "MUST", accept: ["MUST", "MUST tool", "the MUST tool"] },
    q13: { label: "the dietitian", accept: ["dietitian", "dietician"] },
    q14: { label: "surface", accept: ["surface"] },
    q15: { label: "condition", accept: ["condition", "clinical condition"] },
    q16: { label: "floating", accept: ["floating", "floated", "float"] },
    q17: { label: "barrier", accept: ["barrier", "barrier cream"] },
    q18: { label: "massage", accept: ["massage", "massaging"] },
    q19: { label: "impairs", accept: ["impairs", "impair", "impairs healing"] },
    q20: { label: "dehydrated", accept: ["dehydrated", "dehydration"] },
  },
  "rea-a-f2-preventing-falls-in-older-adults": {
    // OET Form 2 · Reading Part A — Preventing falls in older adults
    q8: { label: "a previous fall", accept: ["previous fall", "a history of a previous fall", "history of a previous fall", "a fall"] },
    q9: { label: "postural", accept: ["postural", "postural blood pressure", "a drop on standing", "postural hypotension"] },
    q10: { label: "at least 50 hours", accept: ["at least 50 hours", "50 hours", "fifty hours", "at least fifty hours"] },
    q11: { label: "tai chi", accept: ["tai chi", "taichi"] },
    q12: { label: "an occupational therapist", accept: ["occupational therapist", "OT"] },
    q13: { label: "a low heel", accept: ["low heel", "low heels", "low-heeled"] },
    q14: { label: "predictor", accept: ["predictor", "strongest predictor"] },
    q15: { label: "prevention", accept: ["prevention", "falls prevention"] },
    q16: { label: "dose", accept: ["dose", "dosage", "sufficient dose"] },
    q17: { label: "walking", accept: ["walking", "walk", "walking alone"] },
    q18: { label: "remove", accept: ["remove", "removing", "removal"] },
    q19: { label: "bifocals", accept: ["bifocals", "bifocal glasses", "bifocal lenses"] },
    q20: { label: "blood", accept: ["blood", "blood pressure"] },
  },
  "rea-a-f3-delirium-in-hospital": {
    // OET Form 3 · Reading Part A — Delirium in hospital
    q8: { label: "hours or days", accept: ["hours or days", "hours to days", "over hours or days"] },
    q9: { label: "the 4AT", accept: ["4AT", "the 4AT"] },
    q10: { label: "night", accept: ["night", "at night", "night-time"] },
    q11: { label: "urinary", accept: ["urinary", "urinary tract", "urinary tract infection", "UTI", "chest", "chest infection"] },
    q12: { label: "dehydration", accept: ["dehydration", "dehydrated", "constipation", "pain"] },
    q13: { label: "mobile", accept: ["mobile", "mobilised", "mobility"] },
    q14: { label: "hearing aids", accept: ["hearing aids", "their hearing aids"] },
    q15: { label: "sleep", accept: ["sleep", "uninterrupted sleep"] },
    q16: { label: "hypoactive", accept: ["hypoactive", "hypoactive delirium", "hypo-active"] },
    q17: { label: "problem", accept: ["problem", "cause", "underlying cause", "underlying problem"] },
    q18: { label: "last", accept: ["last", "last resort", "a last resort"] },
    q19: { label: "prolong", accept: ["prolong", "prolongs", "prolonging"] },
    q20: { label: "dementia", accept: ["dementia"] },
  },
  "rea-a-anaphylaxis": {
    // Part A — Anaphylaxis
    q8: { label: "anterolateral thigh", accept: ["outer thigh", "the thigh", "thigh"] },
    q9: { label: "5 minutes", accept: ["5 mins", "after 5 minutes", "five minutes"] },
    q10: { label: "mast cell tryptase", accept: ["serum tryptase", "tryptase"] },
    q11: { label: "80 per cent", accept: ["80%", "about 80%", "eighty per cent"] },
    q13: { label: "two", accept: ["2", "two auto-injectors"] },
    q14: { label: "adolescents", accept: ["adolescence", "teenagers"] },
    q15: { label: "one in five", accept: ["1 in 5", "20 per cent", "20%", "a fifth"] },
    q16: { label: "bradycardia", accept: ["a slow heart rate", "a slow pulse"] },
    q17: { label: "not first-line", accept: ["not first line", "not first-line treatment"] },
    q18: { label: "12 hours", accept: ["twelve hours"] },
    q19: { label: "6 hours", accept: ["six hours"] },
    q20: { label: "upright", accept: ["an upright", "standing"] },
  },
  "rea-a-sepsis": {
    // Part A — Sepsis
    q8: { label: "one hour", accept: ["1 hour", "an hour", "within one hour"] },
    q9: { label: "2 mmol/L", accept: ["2 millimoles", "2 mmol/L or above", "two"] },
    q10: { label: "30 mL/kg", accept: ["30 ml per kg", "30ml/kg"] },
    q11: { label: "hypotension", accept: ["a low blood pressure", "low blood pressure"] },
    q12: { label: "the neutrophil count", accept: ["neutrophil count", "the blood result", "the count"] },
    q13: { label: "source control", accept: ["control of the source", "controlling the source"] },
    q14: { label: "confusion", accept: ["new confusion"] },
    q15: { label: "arrival", accept: ["the patient's arrival"] },
    q16: { label: "3", accept: ["three"] },
    q17: { label: "an undrained collection", accept: ["undrained collection"] },
    q18: { label: "65 mmHg", accept: ["65", "sixty-five mmHg"] },
    q19: { label: "blood pressure", accept: ["BP", "the blood pressure"] },
    q20: { label: "too long", accept: ["long"] },
  },
  "rea-a-pressure-ulcer-prevention": {
    // Part A — Pressure ulcer prevention
    q8: { label: "six hours", accept: ["6 hours", "within six hours"] },
    q9: { label: "three seconds", accept: ["3 seconds"] },
    q10: { label: "30-degree tilt", accept: ["30 degrees", "the 30-degree tilt", "thirty degrees"] },
    q12: { label: "weekly", accept: ["every week", "once a week"] },
    q13: { label: "unstageable", accept: ["unstageable category"] },
    q14: { label: "twice a day", accept: ["at least twice a day", "twice daily", "two times a day"] },
    q15: { label: "healing category 3", accept: ["a healing category 3"] },
    q17: { label: "offloaded", accept: ["off-loaded"] },
    q18: { label: "defeats", accept: ["defeat"] },
    q19: { label: "a warning", accept: ["warning"] },
    q20: { label: "visible sign", accept: ["sign", "visible change"] },
  },
  "rea-a-hypoglycaemia": {
    // Part A — Hypoglycaemia
    q8: { label: "4.0 mmol/L", accept: ["4 mmol/L", "4.0", "below four", "four"] },
    q9: { label: "15–20 g", accept: ["15 to 20 grams", "15-20 grams", "15g to 20g"] },
    q10: { label: "between the gum and the cheek", accept: ["gum and cheek", "in the cheek", "inside the cheek"] },
    q11: { label: "15 minutes", accept: ["after 15 minutes", "fifteen minutes"] },
    q13: { label: "the liver", accept: ["liver"] },
    q14: { label: "insulin and sulfonylureas", accept: ["insulin and sulfonylurea", "insulin and sulfonylurea tablets", "insulin and the tablets"] },
    q15: { label: "intoxication", accept: ["a stroke", "being drunk", "drunkenness"] },
    q16: { label: "nothing", accept: ["no food or drink", "nothing at all"] },
    q17: { label: "long-acting", accept: ["long acting", "slow release", "slow-acting"] },
    q18: { label: "medical review", accept: ["a review", "doctor's review"] },
    q19: { label: "admission", accept: ["admission and observation", "observation", "to be admitted"] },
    q20: { label: "night", accept: ["at night", "overnight", "the night"] },
  },
  "rea-a-acute-stroke": {
    // Part A — Acute stroke
    q8: { label: "face", accept: ["the face"] },
    q9: { label: "the time of onset", accept: ["last known well", "the time it started", "the time last known well", "time of onset", "when the symptoms started"] },
    q10: { label: "hypoglycaemia", accept: ["hypoglycemia", "low blood glucose", "low blood sugar", "low glucose"] },
    q11: { label: "a bleed", accept: ["a bleeding", "bleed", "haemorrhage", "hemorrhage"] },
    q12: { label: "4.5 hours", accept: ["4.5", "four and a half hours", "within 4.5 hours"] },
    q13: { label: "the swallow", accept: ["swallow", "swallowing"] },
    q14: { label: "pneumonia", accept: ["aspiration pneumonia"] },
    q15: { label: "identical", accept: ["alike", "the same"] },
    q16: { label: "24 hours", accept: ["24", "twenty-four hours"] },
    q17: { label: "painless", accept: ["not painful", "without pain"] },
    q18: { label: "pressure", accept: ["blood pressure", "the pressure"] },
    q19: { label: "days", accept: ["a few days", "the first days"] },
    q20: { label: "irregular", accept: ["an irregular"] },
  },
  "rea-a-preventing-blood-clots-in-hospital": {
    // Part A — Preventing blood clots in hospital
    q8: { label: "24 hours", accept: ["twenty-four hours", "within 24 hours"] },
    q9: { label: "the risk of bleeding", accept: ["bleeding", "bleeding risk", "risk of bleeding"] },
    q10: { label: "being unable to move", accept: ["being immobile", "immobility", "inability to move", "not moving"] },
    q11: { label: "an injected anticoagulant", accept: ["anticoagulant", "anticoagulant injection", "injection", "the injection"] },
    q12: { label: "swelling", accept: ["one calf swollen", "swollen"] },
    q14: { label: "daily", accept: ["each day", "every day"] },
    q15: { label: "condition", accept: ["clinical condition"] },
    q16: { label: "measured", accept: ["sized"] },
    q17: { label: "breathing in", accept: ["breathing", "inhaling", "inspiration"] },
    q18: { label: "arterial", accept: ["artery"] },
    q19: { label: "home", accept: ["gone home"] },
    q20: { label: "writing", accept: ["written", "written form"] },
  },
  "rea-a-high-risk-medicines": {
    // Part A — High-risk medicines
    q8: { label: "units", accept: ["the word units", "unit"] },
    q10: { label: "potassium", accept: ["concentrated potassium"] },
    q11: { label: "label it", accept: ["label the syringe", "labeled", "labelled", "put a label on it"] },
    q12: { label: "the patient", accept: ["patient"] },
    q13: { label: "the second victim", accept: ["second victim"] },
    q14: { label: "apart", accept: ["not side by side", "separated", "stored apart"] },
    q15: { label: "nought", accept: ["a nought", "naught", "zero"] },
    q16: { label: "chart", accept: ["drug chart", "the chart"] },
    q17: { label: "week", accept: ["the week"] },
    q18: { label: "margin", accept: ["a narrow margin"] },
    q19: { label: "large", accept: ["big", "larger", "serious"] },
    q20: { label: "system", accept: ["the system"] },
  },
  "rea-a-wound-infection-and-antibiotics": {
    // Part A — Wound infection and antibiotics
    q8: { label: "outwards", accept: ["beyond the margin", "outward", "spreading outwards"] },
    q9: { label: "when it is clinically infected", accept: ["clinically infected", "if infected", "only when infected"] },
    q10: { label: "the deepest viable tissue", accept: ["deep tissue", "deepest viable tissue", "the deepest tissue"] },
    q11: { label: "the indication", accept: ["indication", "reason", "the reason"] },
    q12: { label: "48 to 72 hours", accept: ["48 hours", "48-72 hours", "forty-eight to seventy-two hours"] },
    q13: { label: "Clostridioides difficile", accept: ["C difficile", "C. diff", "clostridioides", "difficile"] },
    q14: { label: "keep it", accept: ["keep leftovers", "keep them", "keep what is left", "save it", "store it"] },
    q16: { label: "increasing", accept: ["getting worse", "worsening"] },
    q17: { label: "tablets", accept: ["by mouth", "oral", "oral tablets"] },
    q18: { label: "stop", accept: ["a stop date", "stopping"] },
    q20: { label: "only", accept: ["the only one"] },
  },
  "rea-a-oxygen-therapy": {
    // Part A — Oxygen therapy
    q8: { label: "a target range", accept: ["a target saturation range", "target range", "target saturation"] },
    q9: { label: "94 to 98 per cent", accept: ["94 to 98", "94 to 98%", "94-98 per cent", "94-98%"] },
    q10: { label: "88 to 92 per cent", accept: ["88 to 92", "88 to 92%", "88-92 per cent", "88-92%"] },
    q11: { label: "a Venturi mask", accept: ["Venturi", "Venturi mask"] },
    q12: { label: "carbon dioxide", accept: ["CO2", "the carbon dioxide"] },
    q13: { label: "a blood gas", accept: ["a gas", "blood gas", "blood gases"] },
    q14: { label: "oil or grease", accept: ["grease", "oil", "oil and grease"] },
    q15: { label: "five", accept: ["5"] },
    q16: { label: "varnish", accept: ["nail varnish", "polish"] },
    q17: { label: "fifteen", accept: ["15"] },
    q18: { label: "reducing", accept: ["decreasing", "lowering", "turning down"] },
    q19: { label: "retention", accept: ["retaining"] },
    q20: { label: "assessment", accept: ["an assessment", "formal assessment"] },
  },
  "rea-a-acute-kidney-injury": {
    // Part A — Acute kidney injury
    q8: { label: "26 micromol/L", accept: ["26", "26 micromol per litre"] },
    q10: { label: "a bladder scan", accept: ["bladder scan"] },
    q13: { label: "a litre", accept: ["a liter", "litre", "one litre"] },
    q14: { label: "sick day rules", accept: ["the sick day rules"] },
    q16: { label: "kidney", accept: ["the kidney"] },
    q17: { label: "twelve hours", accept: ["12 hours"] },
    q18: { label: "emergency", accept: ["an emergency"] },
    q19: { label: "chronic kidney disease", accept: ["CKD", "chronic kidney"] },
    q20: { label: "date", accept: ["a date"] },
  },
  "rea-a-blood-transfusion-safety": {
    // Part A — Blood transfusion safety
    q8: { label: "at the bedside", accept: ["bedside", "the bedside"] },
    q9: { label: "two samples", accept: ["2 samples", "two"] },
    q10: { label: "the fifteen-minute set", accept: ["at fifteen minutes", "fifteen-minute"] },
    q11: { label: "four hours", accept: ["4 hours", "within four hours"] },
    q12: { label: "the intravenous line", accept: ["intravenous line"] },
    q13: { label: "the giving set", accept: ["giving set"] },
    q14: { label: "haemovigilance", accept: ["national haemovigilance"] },
    q15: { label: "laboratory", accept: ["a laboratory error"] },
    q20: { label: "notes", accept: ["the notes"] },
  },
  "rea-a-chest-pain-and-acute-coronary-syndrome": {
    // Part A — Chest pain and acute coronary syndrome
    q8: { label: "ten minutes", accept: ["10 minutes", "within ten minutes"] },
    q9: { label: "300 mg", accept: ["300 milligrams"] },
    q10: { label: "chew", accept: ["chew it"] },
    q11: { label: "the troponin", accept: ["troponin"] },
    q12: { label: "94 per cent", accept: ["94%", "below 94 per cent"] },
    q13: { label: "cardiac rehabilitation", accept: ["rehabilitation"] },
    q14: { label: "low mood", accept: ["mood"] },
    q15: { label: "blocked artery", accept: ["a blocked artery", "blocked coronary artery", "occluded artery"] },
    q16: { label: "onset", accept: ["the onset"] },
    q18: { label: "normal", accept: ["completely normal"] },
  },
  "rea-a-an-asthma-attack-in-adults": {
    // Part A — An asthma attack in adults
    q8: { label: "33 per cent", accept: ["33%", "below 33 per cent"] },
    q9: { label: "a silent chest", accept: ["silent", "silent chest"] },
    q13: { label: "potassium", accept: ["the potassium"] },
    q14: { label: "two working days", accept: ["2 working days"] },
    q16: { label: "98", accept: ["98 per cent"] },
    q17: { label: "virus", accept: ["a virus"] },
    q18: { label: "75", accept: ["75 per cent"] },
    q20: { label: "four", accept: ["4", "four weeks"] },
  },
  "rea-a-venepuncture-and-handling-the-sample": {
    // Part A — Venepuncture and handling the sample
    q8: { label: "one hand's width", accept: ["1 hand's width", "a hand's width"] },
    q9: { label: "the potassium", accept: ["potassium"] },
    q10: { label: "the alcohol", accept: ["alcohol"] },
    q11: { label: "at the bedside", accept: ["bedside", "the bedside"] },
    q12: { label: "blood cultures", accept: ["cultures"] },
    q13: { label: "resheath", accept: ["resheath it"] },
    q14: { label: "stay seated", accept: ["remain seated", "sit down", "to stay seated"] },
    q15: { label: "red cells", accept: ["the red cells"] },
    q16: { label: "reject", accept: ["reject it"] },
    q17: { label: "time", accept: ["the time"] },
    q18: { label: "swab", accept: ["a clean swab"] },
    q19: { label: "point", accept: ["the point"] },
    q20: { label: "form", accept: ["the form"] },
  },
  "rea-a-sharps-injury-and-exposure-to-blood": {
    // Part A — Sharps injury and exposure to blood
    q8: { label: "scrub", accept: ["scrub it"] },
    q9: { label: "plenty of water", accept: ["water"] },
    q10: { label: "a hollow needle", accept: ["hollow", "hollow needle"] },
    q11: { label: "four weeks", accept: ["4 weeks"] },
    q13: { label: "the side effects", accept: ["side effects"] },
    q14: { label: "a safety device", accept: ["safety device"] },
    q15: { label: "hours", accept: ["a few hours"] },
    q17: { label: "hepatitis B", accept: ["hep B", "hepatitis B status"] },
    q19: { label: "line", accept: ["the line"] },
  },
  "rea-a-pneumonia-acquired-in-the-community": {
    // Part A — Pneumonia acquired in the community
    q8: { label: "a full minute", accept: ["full minute"] },
    q9: { label: "a chest radiograph", accept: ["chest radiograph", "radiograph"] },
    q10: { label: "two", accept: ["2", "two separate sites"] },
    q11: { label: "clinical judgement", accept: ["judgement"] },
    q12: { label: "the hour", accept: ["within the hour"] },
    q13: { label: "forty-eight hours", accept: ["48 hours"] },
    q15: { label: "oxygen", accept: ["what oxygen"] },
    q17: { label: "policy", accept: ["local policy"] },
    q18: { label: "day", accept: ["third day"] },
    q19: { label: "swallow", accept: ["the swallow"] },
  },
  "rea-a-delirium-in-the-older-inpatient": {
    // Part A — Delirium in the older inpatient
    q10: { label: "pain, constipation", accept: ["pain constipation and a full bladder"] },
    q11: { label: "a clock", accept: ["clock"] },
    q12: { label: "a night move", accept: ["night move"] },
    q13: { label: "the family", accept: ["family"] },
    q16: { label: "single", accept: ["single words"] },
    q17: { label: "last", accept: ["last resort"] },
    q18: { label: "discharge", accept: ["discharge summary"] },
    q19: { label: "stay", accept: ["longer stay"] },
    q20: { label: "chart", accept: ["the chart"] },
  },
  "rea-a-urinary-catheters-and-infection": {
    // Part A — Urinary catheters and infection
    q8: { label: "the balloon", accept: ["balloon"] },
    q9: { label: "the area", accept: ["area around the catheter"] },
    q10: { label: "the smallest", accept: ["smallest"] },
    q11: { label: "the sampling port", accept: ["port", "sampling port"] },
    q13: { label: "a bladder scan", accept: ["bladder scan"] },
    q14: { label: "early", accept: ["early in the day"] },
    q19: { label: "nursing", accept: ["nursing decision"] },
    q20: { label: "hours", accept: ["six hours"] },
  },
  "rea-a-pain-relief-after-surgery": {
    // Part A — Pain relief after surgery
    q8: { label: "on movement", accept: ["movement"] },
    q9: { label: "paracetamol", accept: ["regular paracetamol"] },
    q10: { label: "an anti-inflammatory", accept: ["anti-inflammatory"] },
    q12: { label: "eight", accept: ["8", "below eight"] },
    q13: { label: "a laxative", accept: ["laxative"] },
    q14: { label: "a firm pillow", accept: ["firm pillow", "pillow"] },
    q15: { label: "patient", accept: ["the patient"] },
    q16: { label: "minute", accept: ["a full minute"] },
    q18: { label: "rescue", accept: ["rescue dose"] },
    q19: { label: "sleep", accept: ["poor sleep"] },
  },
  "rea-a-malnutrition-and-feeding-in-hospital": {
    // Part A — Malnutrition and feeding in hospital
    q9: { label: "unplanned", accept: ["unplanned weight loss"] },
    q10: { label: "the mealtime", accept: ["mealtime"] },
    q12: { label: "the pH", accept: ["pH"] },
    q14: { label: "swallowing", accept: ["where swallowing is unsafe"] },
    q17: { label: "gut", accept: ["the gut"] },
    q18: { label: "lung", accept: ["the lung"] },
    q20: { label: "one", accept: ["1", "one at a time"] },
  },
  "rea-a-a-flare-up-of-chronic-obstructive-lung-disease": {
    // Part A — A flare-up of chronic obstructive lung disease
    q8: { label: "the colour", accept: ["colour", "the color"] },
    q9: { label: "a whole minute", accept: ["whole minute"] },
    q10: { label: "carbon dioxide", accept: ["CO2", "CO₂"] },
    q11: { label: "a target range", accept: ["target range"] },
    q12: { label: "a blood gas", accept: ["blood gas", "gas"] },
    q13: { label: "non-invasive ventilation", accept: ["ventilation"] },
    q14: { label: "a written plan", accept: ["written plan"] },
    q15: { label: "drug", accept: ["a drug"] },
    q17: { label: "course", accept: ["defined course"] },
    q18: { label: "rehabilitation", accept: ["pulmonary rehabilitation"] },
  },
  "rea-a-atrial-fibrillation-and-anticoagulation": {
    // Part A — Atrial fibrillation and anticoagulation
    q8: { label: "a tracing", accept: ["tracing"] },
    q9: { label: "sixty-five", accept: ["over sixty-five"] },
    q10: { label: "bleeding", accept: ["the risk of bleeding"] },
    q11: { label: "the kidney function", accept: ["kidney function"] },
    q12: { label: "the target range", accept: ["time spent inside the target range"] },
    q13: { label: "rate control", accept: ["control of the rate", "controlling the rate"] },
    q14: { label: "bruising", accept: ["ordinary bruising"] },
    q15: { label: "knew", accept: ["never knew"] },
    q16: { label: "risk", accept: ["the risk"] },
    q18: { label: "monitoring", accept: ["routine monitoring"] },
    q19: { label: "stroke", accept: ["stroke risk"] },
  },
  "rea-a-seizures-and-prolonged-convulsions": {
    // Part A — Seizures and prolonged convulsions
    q8: { label: "something soft", accept: ["soft"] },
    q9: { label: "their side", accept: ["side"] },
    q10: { label: "five minutes", accept: ["5 minutes", "more than five minutes"] },
    q11: { label: "a benzodiazepine", accept: ["benzodiazepine"] },
    q12: { label: "the breathing", accept: ["breathing"] },
    q13: { label: "the anaesthetic team", accept: ["anaesthetic team"] },
    q14: { label: "an hour", accept: ["an hour or longer"] },
    q16: { label: "glucose", accept: ["low glucose"] },
    q19: { label: "times", accept: ["same times"] },
  },
  "rea-a-diabetic-ketoacidosis": {
    // Part A — Diabetic ketoacidosis
    q8: { label: "in the blood", accept: ["blood"] },
    q9: { label: "deep sighing", accept: ["deep sighing breathing"] },
    q11: { label: "fixed-rate", accept: ["a fixed-rate infusion"] },
    q13: { label: "the electrocardiogram", accept: ["electrocardiogram", "the ECG"] },
    q14: { label: "subcutaneous insulin", accept: ["the subcutaneous insulin"] },
    q15: { label: "litres", accept: ["liters"] },
    q19: { label: "insulin", accept: ["the insulin"] },
  },
  "rea-a-heart-failure-and-fluid-overload": {
    // Part A — Heart failure and fluid overload
    q8: { label: "a month ago", accept: ["a month"] },
    q10: { label: "the neck", accept: ["neck"] },
    q11: { label: "the weight", accept: ["weight and the fluid chart"] },
    q12: { label: "a jug", accept: ["jug"] },
    q14: { label: "carers", accept: ["the person who is caring for them"] },
    q18: { label: "call", accept: ["telephone call"] },
    q20: { label: "travel", accept: ["travels"] },
  },
  "rea-a-caring-for-a-patient-with-a-tracheostomy": {
    // Part A — Caring for a patient with a tracheostomy
    q8: { label: "dry secretions", accept: ["dry"] },
    q9: { label: "the suction", accept: ["suction"] },
    q10: { label: "half", accept: ["half the internal diameter"] },
    q12: { label: "under the flange", accept: ["under the tapes"] },
    q14: { label: "one", accept: ["1", "one number"] },
    q15: { label: "out", accept: ["the way out"] },
    q16: { label: "inner", accept: ["inner tube"] },
    q18: { label: "stoma", accept: ["the stoma"] },
    q19: { label: "escalate", accept: ["stop and escalate"] },
    q20: { label: "routine", accept: ["the whole routine"] },
  },
  "rea-a-care-in-the-last-days-of-life": {
    // Part A — Care in the last days of life
    q8: { label: "the reasons", accept: ["reasons"] },
    q9: { label: "tablets", accept: ["medicines"] },
    q10: { label: "by injection", accept: ["injection"] },
    q11: { label: "the family", accept: ["family"] },
    q12: { label: "reposition", accept: ["reposition first"] },
    q14: { label: "a written note", accept: ["written note"] },
    q20: { label: "visiting", accept: ["visiting rules"] },
  },
  "rea-a-infectious-diarrhoea-on-the-ward": {
    // Part A — Infectious diarrhoea on the ward
    q8: { label: "a single room", accept: ["single room"] },
    q9: { label: "a stool chart", accept: ["stool chart"] },
    q10: { label: "spores", accept: ["the spores"] },
    q11: { label: "two days", accept: ["2 days"] },
    q12: { label: "the toxin", accept: ["toxin"] },
    q13: { label: "the surgical team", accept: ["surgical team"] },
    q14: { label: "the antibiotic", accept: ["antibiotic that caused it"] },
    q16: { label: "corridor", accept: ["the corridor"] },
    q17: { label: "patient", accept: ["that patient"] },
    q20: { label: "prescription", accept: ["a prescription"] },
  },
  "rea-a-caring-for-a-patient-with-dementia-in-hospital": {
    // Part A — Caring for a patient with dementia in hospital
    q8: { label: "the document", accept: ["document"] },
    q9: { label: "from behind", accept: ["behind"] },
    q10: { label: "one", accept: ["1", "one idea"] },
    q11: { label: "tone", accept: ["tone and expression"] },
    q12: { label: "a full bladder", accept: ["full bladder"] },
    q13: { label: "the batteries", accept: ["batteries"] },
    q15: { label: "about", accept: ["about them"] },
    q17: { label: "night", accept: ["at night"] },
    q18: { label: "routine", accept: ["the routine"] },
    q20: { label: "discharge", accept: ["the discharge"] },
  },
  "rea-a-peripheral-cannulas-and-phlebitis": {
    // Part A — Peripheral cannulas and phlebitis
    q8: { label: "the smallest", accept: ["smallest"] },
    q9: { label: "a joint", accept: ["joint"] },
    q11: { label: "flush", accept: ["flushed"] },
    q12: { label: "a warm compress", accept: ["warm compress"] },
    q13: { label: "the tip", accept: ["tip"] },
    q14: { label: "the reason", accept: ["reason for removal"] },
    q15: { label: "date", accept: ["recorded date"] },
    q16: { label: "connector", accept: ["the connector"] },
    q19: { label: "system", accept: ["a system"] },
    q20: { label: "technique", accept: ["the technique"] },
  },
};

const EMPTY: readonly string[] = [];

/** Extra accepted answers for one Listening Part A gap, BY GAP ID. Empty when
 *  the item or the id is not in the overlay — the gate is what makes sure that
 *  never happens quietly. */
export function listeningAcceptFor(
  slug: string | undefined,
  gapId: string,
): readonly string[] {
  if (!slug) return EMPTY;
  return LISTENING_PART_A_ACCEPT[slug]?.[gapId]?.accept ?? EMPTY;
}

/** Extra accepted answers for one Reading Part A free-text question, BY
 *  QUESTION ID. */
export function readingAcceptFor(
  slug: string | undefined,
  questionId: string,
): readonly string[] {
  if (!slug) return EMPTY;
  return READING_PART_A_ACCEPT[slug]?.[questionId]?.accept ?? EMPTY;
}
