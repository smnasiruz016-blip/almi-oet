// Seeds original OET Speaking (role-play) items. These are PER-PROFESSION: each
// item carries a `profession`. Phase 0 ships Nursing starter content; the other
// 11 professions follow in content batches. Scenarios are original to AlmiOET —
// never copied from OET.
//
// Run: npm run seed:speaking  (needs DATABASE_URL set)

import { PrismaClient, Prisma } from "@prisma/client";
import { isDirectRun } from "./_entry";

const prisma = new PrismaClient();

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "NURSING",
    title: "Nursing — Reassuring a patient anxious about discharge",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "patient-education",
    payload: {
      setting: "A hospital ward. The patient is due to be discharged this afternoon.",
      candidateRole: "You are the ward nurse.",
      patientRole:
        "The patient is a 68-year-old recovering from pneumonia, worried about coping at home alone.",
      candidateCard:
        "Find out what specifically worries the patient about going home. Acknowledge the concern. Explain the discharge support available (community nurse visit, medication plan, who to call if breathless). Agree a simple plan and check the patient feels ready.",
      patientConcern:
        "The patient is afraid the breathlessness will return at night and no one will be there to help.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Open by drawing out the real worry before reassuring. Address the specific concern (night-time breathlessness), not a generic script. Build rapport, give clear structure, and check understanding at the end.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "NURSING",
    title: "Nursing — Supporting a patient hesitant about starting insulin",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A diabetes clinic in a community health centre.",
      candidateRole: "You are the practice nurse seeing a patient whose type 2 diabetes is no longer controlled on oral medication. The doctor has recommended starting insulin injections.",
      patientRole: "The patient is a 56-year-old who has had type 2 diabetes for nine years and has always managed it with tablets and diet.",
      candidateCard: "Find out how the patient feels about the doctor's recommendation. Explain why insulin is now being suggested and what starting it would involve (daily self-injection, blood-glucose checks, support available). Acknowledge their feelings, address their specific worries, and agree on a practical next step together.",
      patientConcern: "The patient secretly believes needing insulin means they have 'failed' and that their diabetes is now severe and life-threatening; they are also frightened of self-injecting and worry it will stop them driving and working. The candidate must gently draw out these fears and reassure realistically without dismissing them.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Lead with open questions and let the patient voice their fears before giving facts — naming insulin as a normal next stage (not a punishment or failure) and checking understanding will land far better than launching straight into injection technique.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Newly diagnosed hypertension in clinic",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A general practice consulting room. The patient has returned for results after three raised blood-pressure readings over the past month.",
      candidateRole: "You are the general practitioner.",
      patientRole: "The patient is a 45-year-old accountant recently found to have stage 1 hypertension. They feel completely well and are reluctant to start medication.",
      candidateCard: "Find out the patient's understanding of and concerns about the diagnosis. Explain what hypertension means and why treatment matters even without symptoms. Discuss lifestyle measures (diet, salt, alcohol, activity, weight) and the option of starting medication. Agree a realistic plan and arrange follow-up.",
      patientConcern: "The patient's hidden fear is that starting tablets means being 'on drugs for life' and becoming like their father, who had a disabling stroke despite taking many medications. They equate medication with being seriously ill and losing control.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Because the patient feels well, lead with their concerns rather than statistics. Draw out the fear about lifelong medication and the family history before recommending anything — acknowledging it openly makes shared decision-making genuine, not a script.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "MEDICINE",
    title: "Medicine — Explaining a delayed test result",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "A hospital outpatient clinic. The patient has attended to discuss results, but a CT scan was not booked due to an administrative error and has not yet been done.",
      candidateRole: "You are the hospital doctor (medical registrar) seeing the patient in clinic.",
      patientRole: "The patient is a 62-year-old retired teacher being investigated for unintentional weight loss and is anxiously awaiting CT scan results today.",
      candidateCard: "Find out the patient's expectations for today's visit. Explain honestly that the CT scan was not arranged because of a booking error and apologise. Reassure about the interim safety-netting, arrange the scan as a priority and a clear follow-up, and address the patient's concerns.",
      patientConcern: "The patient's underlying fear is that the delay means cancer has been missed or has worsened, and that they are 'not being taken seriously'. They may become angry and feel their time has been wasted, and need to feel the doctor is being honest and accountable.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Be honest and take ownership of the error early rather than minimising it — patients forgive mistakes far more readily than evasiveness. Acknowledge the anxiety and anger as legitimate, give a concrete revised timeline, and check the patient leaves knowing exactly what happens next.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — New inhaler technique and adherence",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "A community pharmacy consultation room.",
      candidateRole: "You are the pharmacist providing a first prescription of a preventer (corticosteroid) inhaler to a patient newly diagnosed with asthma.",
      patientRole: "The patient is a 34-year-old recently started on a brown preventer inhaler in addition to their blue reliever inhaler.",
      candidateCard: "Find out the patient's understanding of the two inhalers, explain the difference between the preventer and the reliever, check and advise on inhaler technique and rinsing the mouth, and agree a plan for daily use even when feeling well.",
      patientConcern: "The patient is reluctant to use a steroid inhaler every day because they have read online that steroids cause weight gain and weak bones, and they intend to only use it when breathless.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Draw out the patient's worry about daily steroids before reassuring; acknowledge the fear, explain that inhaled doses are low and act locally, and reach a shared plan rather than simply instructing.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHARMACY",
    title: "Pharmacy — Declining an OTC request and GP referral",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "referral",
    payload: {
      setting: "A community pharmacy counter.",
      candidateRole: "You are the pharmacist responding to a patient requesting an over-the-counter codeine-based painkiller for persistent headaches.",
      patientRole: "The patient is a 41-year-old asking by name for a strong codeine medicine they have been buying frequently for daily headaches over several weeks.",
      candidateCard: "Find out the nature, frequency and duration of the headaches and current painkiller use, explain why you cannot supply the codeine product today, raise the possibility of medication-overuse headache, and refer the patient to their GP for assessment.",
      patientConcern: "The patient is frustrated and anxious, fears being judged as drug-seeking, and is worried that without the medicine they will be unable to cope at work; they have not told anyone how often they are taking painkillers.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Refuse the supply without sounding accusatory; normalise medication-overuse headache as a common, treatable cause, validate the patient's distress, and frame the GP referral as help rather than punishment.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Anxious patient facing a first extraction",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a general dental surgery",
      candidateRole: "You are the dentist. A patient needs a non-restorable upper molar extracted today and is visibly anxious. Acknowledge the anxiety, explain what the procedure involves, address pain and recovery concerns, and reach agreement on going ahead.",
      patientRole: "The patient is a 34-year-old who has never had a tooth out, dreads the needle, and is worried about feeling everything and being off work the next day.",
      candidateCard: "Find out what specifically worries the patient; reassure about local anaesthetic and that they should feel pressure but not pain; explain the brief procedure and aftercare (bite on gauze, avoid rinsing/smoking, painkillers, possible mild swelling); agree on proceeding today or arranging a follow-up if not ready.",
      patientConcern: "The patient's real fear is not the tooth but a childhood memory of a painful dental experience, and they secretly worry the anaesthetic 'won't work' on them — they need this named and reassured, not just technical detail.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Slow down and check feelings before facts — naming the fear ('many people feel nervous before a first extraction') earns the trust that lets your clinical explanation actually land. Let the patient set the pace and confirm consent rather than rushing to the chair.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "DENTISTRY",
    title: "Dentistry — Parent declining fluoride for a child",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "a community dental clinic",
      candidateRole: "You are the dentist. A parent has brought their 6-year-old, who has early decay in two molars. You want to apply fluoride varnish and discuss diet, but the parent is hesitant about fluoride. Explore their concerns, give balanced information, and agree a prevention plan.",
      patientRole: "The parent is cautious, has read online that fluoride is 'harmful', and prefers 'natural' approaches, but does want to stop the decay getting worse.",
      candidateCard: "Find out what the parent has read and what worries them; explain how fluoride varnish works and that the small applied dose is safe and effective; acknowledge their wish to limit sugar naturally; discuss diet, snacking frequency and brushing; agree a plan the parent is comfortable with, even if that means revisiting varnish next visit.",
      patientConcern: "The parent is not truly anti-science but feels judged as a 'bad parent' for the decay and fears being lectured — they need respect and partnership before they will accept the varnish.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Resist correcting the parent head-on; ask what they've read, validate the underlying goal (a healthy child, less sugar), and offer fluoride as one option within a shared plan. Agreeing to revisit varnish next visit can be a successful patient-centred outcome — pushing for immediate consent is not the goal.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Advising a hesitant patient on early loading after ankle sprain",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "an outpatient physiotherapy clinic",
      candidateRole: "You are the physiotherapist seeing a patient one week after a grade II lateral ankle sprain sustained running. Imaging has excluded fracture.",
      patientRole: "The patient is a 28-year-old keen runner who has been resting completely, keeping the ankle elevated and avoiding all weight-bearing for fear of 'making it worse'.",
      candidateCard: "Find out how the patient has been managing the ankle. Explain that protected early movement and graded weight-bearing aid recovery and that prolonged total rest can slow it. Reassure that some discomfort with controlled loading is expected and safe. Advise a progressive plan (range-of-motion, gradual weight-bearing, balance work) and agree realistic short-term goals.",
      patientConcern: "The patient secretly fears that loading the ankle will re-tear the ligament and end their running, and has read online that they should not bear weight for six weeks.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Draw out the re-injury fear before correcting the six-week belief; acknowledge the worry as reasonable rather than dismissing it, then give the graded plan.",
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "PHYSIOTHERAPY",
    title: "Physiotherapy — Managing a patient with chronic low back pain seeking a scan",
    prompt:
      "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "a community musculoskeletal physiotherapy clinic",
      candidateRole: "You are the physiotherapist assessing a patient with non-specific chronic low back pain of eight months' duration, with no red-flag features identified.",
      patientRole: "The patient is a 45-year-old warehouse worker who is convinced that an MRI scan and bed rest are needed and is frustrated that previous appointments have only offered exercises.",
      candidateCard: "Find out the patient's beliefs about the cause of the pain and the impact on work and daily life. Explain why imaging is not usually helpful for non-specific back pain and why staying active is recommended over bed rest. Address concerns sensitively without dismissing them. Advise on graded activity, pacing and movement, and agree on a manageable next step.",
      patientConcern: "The patient fears the pain means serious permanent damage to the spine and worries that continuing to work will cause a wheelchair-dependent future, which is why they want proof from a scan.",
      prepSeconds: 60,
      speakSeconds: 300,
    },
    guidanceNote:
      "Validate the fear of permanent damage before explaining why a scan would not change management; offer the staying-active message as protective, not dismissive, and co-agree one concrete step.",
  },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "DIETETICS", title: "Dietetics — Newly diagnosed coeliac disease advice", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "FOUNDATION", topicTag: "advice", payload: { setting: "An outpatient dietetics clinic at a general hospital.", candidateRole: "You are the dietitian seeing a patient recently diagnosed with coeliac disease after a positive biopsy. This is their first dietetic appointment.", patientRole: "The patient is a 29-year-old who loves cooking and eating out, and has just been told they must follow a strict gluten-free diet for life.", candidateCard: "Find out what the patient already understands about coeliac disease and gluten. Explain, in plain terms, why a strict lifelong gluten-free diet is necessary and which everyday foods contain gluten. Advise on practical first steps (reading labels, avoiding cross-contamination, gluten-free staples, eating out). Reassure the patient and agree on one or two manageable changes to start with.", patientConcern: "The patient is privately worried that a gluten-free diet will end their social life and that they can never eat out or share family meals again. They will only relax if the dietitian acknowledges this and offers realistic eating-out strategies.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Check understanding before launching into food lists, and draw out the social worry — telling them gluten-free dining is possible, with concrete tactics, matters more than reciting every banned grain." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "DIETETICS", title: "Dietetics — Renal diet & phosphate concern in CKD", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "A renal dietetics clinic at a kidney care unit.", candidateRole: "You are the dietitian reviewing a patient with stage 4 chronic kidney disease whose recent blood tests show a raised phosphate level.", patientRole: "The patient is a 61-year-old with stage 4 CKD (not yet on dialysis) who feels well and does not understand why their diet needs to change when they have no symptoms.", candidateCard: "Find out about the patient's current eating habits, focusing on high-phosphate foods (dairy, processed meats, cola, nuts, processed foods). Explain simply why controlling phosphate matters for bones and blood vessels in kidney disease. Advise on practical swaps and how to take phosphate binders with meals. Agree a small number of realistic dietary changes and arrange follow-up.", patientConcern: "The patient feels completely well and secretly believes the diet change is pointless and overly restrictive; they fear losing all their favourite foods. They will only engage if the dietitian links phosphate control to preventing future harm and shows the diet can still be enjoyable.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Acknowledge that feeling well makes the advice hard to accept, and frame phosphate control as protecting bones and heart for the future — agree just one or two swaps rather than overwhelming the patient with a long forbidden list." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "OCCUPATIONAL_THERAPY", title: "Occupational Therapy — Equipment & home adaptation advice", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "A community OT home visit to an older adult with osteoarthritis and recent falls.", candidateRole: "You are the occupational therapist visiting a 78-year-old who has had two recent falls in the bathroom. You have assessed the home and recommend grab rails, a shower seat and a raised toilet seat. The patient is reluctant, feeling the equipment makes the home look 'like a hospital'.", patientRole: "The patient is a proud, independent retired farmer who is embarrassed by equipment and worried neighbours will think they can no longer cope.", candidateCard: "Acknowledge the patient's feelings; explain how the recommended equipment reduces fall risk and protects independence; address the appearance concern; agree a small first step the patient is willing to try.", patientConcern: "The patient fears that accepting equipment is the first step toward losing their home and being moved into residential care.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Lead with empathy and frame equipment as protecting independence, not signalling decline — uncover the unspoken fear of losing the home before pushing any single recommendation, and negotiate one acceptable first step." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "OCCUPATIONAL_THERAPY", title: "Occupational Therapy — Mental-health OT: graded return to routine", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "A community mental-health team clinic appointment for activity scheduling.", candidateRole: "You are the occupational therapist working with a 26-year-old recovering from a depressive episode. You want to introduce a graded activity-scheduling plan to rebuild daily structure, meaningful occupation and a gradual return to part-time study.", patientRole: "The patient has low motivation and energy, has withdrawn from friends and university, and feels that any plan is pointless because they expect to fail.", candidateCard: "Explore the patient's current daily routine and valued activities; explain the rationale for graded activity scheduling; collaboratively agree two small, achievable goals for the coming week; address the fear of failure.", patientConcern: "The patient is afraid that committing to goals will lead to disappointing their family again if they cannot keep up, so they would rather attempt nothing.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Keep goals genuinely small and patient-led — in mental-health OT the therapeutic value is in achievable graded steps; validate the fear of failure rather than over-promising, and let the patient choose the activities that matter to them." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "OPTOMETRY", title: "Optometry — Explaining a cataract referral to an anxious patient", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "A community optometry practice consulting room, during a routine sight test.", candidateRole: "You are the optometrist. You have found a visually significant cataract in the patient's right eye (vision reduced to 6/18, with glare difficulty driving at night) and need to recommend referral for cataract surgery assessment.", patientRole: "The patient is a 71-year-old who came in thinking they just needed stronger glasses and is alarmed by the word 'surgery'. They are worried the operation will be painful, will require a general anaesthetic, and that they might go blind if it goes wrong. They also care for a housebound spouse and worry about recovery time.", candidateCard: "Explain in plain language why new glasses alone will not fix the problem; outline what cataract surgery involves at a basic level; reassure realistically about the procedure (typically local anaesthetic, day-case, short recovery) without over-promising; and agree a referral plan, checking the patient's understanding and concerns.", patientConcern: "The patient's core hidden fear is losing independence and being unable to care for their spouse during recovery — they will only consent once reassured recovery is usually quick and support can be arranged.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Avoid jargon like 'phacoemulsification'; check understanding frequently. The hidden concern is the caregiving role, so explore the patient's home situation rather than only the medical facts — addressing it is what unlocks agreement." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "OPTOMETRY", title: "Optometry — Sudden visual change and possible retinal detachment", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "An optometry practice; the patient has telephoned and been brought in the same morning as an emergency appointment.", candidateRole: "You are the optometrist. The patient reports a sudden shower of new floaters and flashing lights in the left eye since yesterday, with a grey 'curtain' now spreading across the lower part of their vision. Your examination raises strong suspicion of a retinal detachment requiring urgent hospital eye-service assessment today.", patientRole: "The patient is a 55-year-old, highly short-sighted, who hoped it was 'just tiredness' and wants to go to an important family wedding this afternoon. They are reluctant to spend the day in hospital and keep asking whether it can wait until next week.", candidateCard: "Sensitively convey the urgency and why same-day assessment is essential; explain in lay terms what may be happening and what the hospital will do; address the patient's wish to delay; and arrange immediate referral, confirming how the patient will get to the hospital eye service safely.", patientConcern: "The patient's hidden concern is fear of letting their family down at the wedding; they need to hear clearly that delay risks permanent loss of sight in that eye before they will agree to go now.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Balance honesty about the sight-threatening risk with calm reassurance — do not minimise to placate the patient. Acknowledge the wedding explicitly; naming the genuine trade-off (a few hours now versus permanent vision loss) is usually what secures agreement to attend today." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "PODIATRY", title: "Podiatry — Advising an anxious patient at risk of foot ulceration", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "Community podiatry clinic.", candidateRole: "You are the podiatrist. A patient with diabetes and reduced foot sensation has attended for a routine review. You have found loss of protective sensation and dry, cracked skin, placing them at increased risk of ulceration.", patientRole: "The patient is a 58-year-old with type 2 diabetes who feels their feet are 'fine' because they have no pain, and is reluctant to change daily habits.", candidateCard: "Explain in plain terms why a lack of pain does not mean the feet are safe; agree a simple, realistic daily checking and moisturising routine; advise on appropriate footwear and when to seek urgent help. Check understanding throughout.", patientConcern: "The patient secretly fears that 'foot problems' lead to amputation like a relative experienced, so dismisses the risk to avoid thinking about it; they need reassurance that early action prevents this.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Don't lecture — draw out why the patient thinks their feet are fine, then connect prevention to their hidden fear. Avoid the word 'amputation' unless the patient raises it." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "PODIATRY", title: "Podiatry — Explaining orthotics for biomechanical heel pain", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "Private musculoskeletal podiatry clinic.", candidateRole: "You are the podiatrist. Following a biomechanical assessment you have diagnosed plantar heel pain (plantar fasciitis) linked to overpronation, and you are recommending custom orthoses alongside stretching and activity modification.", patientRole: "The patient is a 41-year-old recreational runner with several months of sharp morning heel pain who wants a quick fix and is sceptical about the cost and need for orthotics.", candidateCard: "Explain the likely cause of the heel pain and how orthoses, stretching and load management work together; set realistic expectations about the timeframe for improvement; address the patient's doubts about cost and whether the inserts are truly necessary.", patientConcern: "The patient is worried orthotics are an expensive, permanent crutch that will weaken their feet and stop them running, and wants to know if it is just a way of selling a product.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Acknowledge the cost and 'do I really need this' scepticism openly rather than glossing over it; frame orthoses as one temporary part of a plan, not a lifelong dependency, and tie advice back to returning to running." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "RADIOGRAPHY", title: "Radiography — MRI claustrophobia and cooperation", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "MRI suite in a hospital imaging department, immediately before a scheduled scan.", candidateRole: "You are the radiographer about to perform an MRI of the lumbar spine on a patient who has become visibly anxious in the waiting area.", patientRole: "The patient is a 44-year-old who has never had an MRI and is frightened by the idea of being enclosed in the scanner for 25 minutes.", candidateCard: "Explain in plain terms what the MRI involves (the tunnel, the loud knocking noise, staying still, the duration). Acknowledge the patient's fear without dismissing it. Offer concrete coping options — the call buzzer, headphones/music, a mirror to see out, going in feet-first where possible, a support person or a short break partway. Reassure about safety (no radiation, you are watching throughout) while being honest that the space is enclosed. Gain the patient's cooperation and willingness to proceed, and confirm what to do if they need to stop.", patientConcern: "The patient is terrified of a panic attack and being trapped unable to get out, and is too embarrassed to admit it unless the radiographer gently invites them to.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Don't over-reassure or rush to the buzzer. Name the fear out loud first — 'a lot of people feel closed in' — then offer the practical controls. Being honest that it IS a snug tunnel builds more trust than pretending it's roomy." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "RADIOGRAPHY", title: "Radiography — Radiation dose concern for paediatric CT", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "STRETCH", topicTag: "advice", payload: { setting: "CT department, with a worried parent accompanying a child referred for a head CT after a fall.", candidateRole: "You are the radiographer preparing to perform a non-contrast head CT on a 6-year-old child who fell from playground equipment and has been referred from the emergency department.", patientRole: "The patient's parent is anxious about radiation exposure to their young child and has read online that CT scans 'cause cancer'.", candidateCard: "Explain why the CT has been requested (to rule out a serious head injury that can't be seen otherwise) and that the decision was made because the clinical benefit outweighs the small risk. Address the radiation concern honestly — yes, CT uses X-rays, but paediatric scanners use child-sized low-dose settings, the dose is kept as low as reasonably achievable, and only the head is scanned. Avoid false promises. Explain practically what will happen (quick scan, staying still, you may offer immobilisation or a parent staying in with a lead apron per local policy). Address the cancer-risk question proportionately and gain consent to proceed.", patientConcern: "The parent fears they are consenting to something that could give their child cancer later in life, and wants to know whether the scan is truly necessary or whether it can be avoided.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Resist saying 'it's completely safe' — that's dishonest and parents see through it. Put the small risk next to the real risk of a missed bleed, explain dose-reduction and ALARA in plain words, and confirm a doctor judged it necessary. Validate the worry rather than correcting the internet." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "SPEECH_PATHOLOGY", title: "Speech Pathology — Voice disorder in a teacher", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "Outpatient voice clinic at a community health centre.", candidateRole: "You are the speech pathologist. A secondary-school teacher has been referred with persistent hoarseness. Laryngoscopy (done by ENT) showed bilateral vocal fold nodules with no sinister features. You need to explain the diagnosis in plain language, link it to voice use & habits, agree realistic vocal hygiene changes, and reassure while setting expectations for therapy.", patientRole: "The patient is a 41-year-old full-time teacher whose voice has been rough and tired for four months, worse by the afternoon. They drink a lot of coffee, little water, and often shout over noisy classes. They are anxious it might be something serious.", candidateCard: "Explain that the nodules are benign and very common in people who use their voice heavily; connect them to vocal strain, dehydration and shouting; negotiate two or three practical changes (hydration, reducing throat-clearing & shouting, using a microphone or gesture to gain attention); explain that voice therapy can resolve nodules without surgery; check understanding & address their worry.", patientConcern: "The patient is terrified the diagnosis means cancer and that they may have to give up teaching — they need explicit reassurance on both before they can engage with advice.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Resist launching straight into vocal hygiene tips. Surface and dismantle the cancer fear and the fear of losing their job first; only then will advice land. Use everyday words, not 'benign mucosal lesions'." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "SPEECH_PATHOLOGY", title: "Speech Pathology — Parent of a child who stammers", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "Paediatric speech & language clinic.", candidateRole: "You are the speech pathologist. You are meeting the parent of a 4-year-old who has developed stammering over the past five months (repetitions of whole words & first sounds, occasional blocks, some facial tension). You need to explain that early stammering is common and often resolves, that it is not caused by the parent, recommend a watchful monitoring approach with practical interaction strategies, and agree a review plan.", patientRole: "The patient is the parent of a 4-year-old. They are worried, feel guilty that they 'caused it' by correcting the child too much, and have read alarming things online. They want to know whether to finish the child's sentences and whether the child will stammer for life.", candidateCard: "Reassure that they did not cause the stammer; explain natural recovery is common at this age but monitoring matters; give two or three interaction strategies (slow your own speech, pause before replying, reduce questions, do not finish sentences or tell the child to slow down); explain when therapy would step up; agree a review in a set timeframe & safety-net advice.", patientConcern: "The parent feels overwhelming guilt that their parenting caused the stammer — they will not absorb any practical advice until that guilt is directly and warmly addressed.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "The single highest-impact move is to name and lift the parent's guilt early — stammering is neurological/developmental, not caused by correction. Give only a few concrete strategies; overloading an anxious parent reduces what they retain." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "VETERINARY_SCIENCE", title: "Veterinary Science — Discussing a newly diagnosed diabetic cat", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "A veterinary consulting room at a small-animal practice.", candidateRole: "You are the veterinarian. You have just diagnosed diabetes mellitus in a 9-year-old cat after blood and urine tests. You need to explain the diagnosis, discuss home management including twice-daily insulin injections and dietary change, and agree on a monitoring plan with the owner.", patientRole: "The owner is the carer of 'Biscuit', their pet, a 9-year-old overweight cat. They are anxious and have never given an injection before.", candidateCard: "Find out the owner's understanding & any worries about managing diabetes at home; explain what diabetes means for the cat and the role of insulin & diet; reassure & demonstrate that injections are manageable; advise on hypoglycaemia warning signs & when to call; agree a recheck/glucose-monitoring plan.", patientConcern: "The owner is secretly terrified they will hurt the cat with the needle and are quietly considering euthanasia because they fear they cannot cope with lifelong injections — draw this out and address it before the consultation ends.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Don't rush into the injection technique; check the owner's confidence first and name their fear gently, because an owner who feels incapable may decline treatment that is actually very achievable." },
  { subTest: "SPEAKING", taskType: "SPEAKING_ROLEPLAY", profession: "VETERINARY_SCIENCE", title: "Veterinary Science — Vaccination hesitancy in a new puppy", prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.", difficulty: "CORE", topicTag: "advice", payload: { setting: "A veterinary consulting room during a first puppy health check.", candidateRole: "You are the veterinarian. A new owner has brought in a healthy 9-week-old puppy but is reluctant to start the core vaccination course. You need to explore their concerns, explain the benefits and risks of vaccination, address misinformation respectfully, and agree on a way forward.", patientRole: "The owner is the carer of 'Rocket', their pet, a 9-week-old crossbreed puppy. They have read online that vaccines cause harm and want to delay or skip them.", candidateCard: "Find out the source & nature of the owner's concerns about vaccination; explain which diseases the core vaccines prevent & the real (low) risk of side effects; acknowledge their wish to protect the puppy; advise on the recommended schedule & socialisation window; agree on a plan the owner is comfortable with.", patientConcern: "The owner's real worry is that a friend's dog became unwell after a vaccine and they feel guilt-tripped by clinics; they want to feel respected and in control rather than pressured — acknowledge this before giving recommendations.", prepSeconds: 60, speakSeconds: 300 }, guidanceNote: "Avoid dismissing the online claims outright; validate the owner's protective intent first, then offer clear evidence, so the conversation stays collaborative rather than confrontational." },
];

async function main() {
  const res = await prisma.oetItem.createMany({ data: ITEMS });
  console.log(`Seeded ${res.count} Speaking item(s).`);
}

if (isDirectRun(import.meta.url)) {
  main()
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}
