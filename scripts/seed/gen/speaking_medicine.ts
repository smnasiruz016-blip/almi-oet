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
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-advising-a-pregnant-patient-on-safe-medication-use",
    "title": "Medicine — Advising a pregnant patient on safe medication use",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Antenatal clinic, a booking appointment, the patient at ten weeks and seen alone.",
      "candidateRole": "You are the doctor. The patient has been taking over-the-counter medicines for headaches and a cold since before she knew she was pregnant.",
      "patientRole": "A 29-year-old at ten weeks in her first pregnancy who has taken assorted remedies from the chemist over the past month and has brought the empty boxes in her bag.",
      "patientConcern": "She feels guilty and is convinced she has already caused lasting harm during the weeks before she knew, and wants absolution rather than a lecture.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask her to take you through exactly what she has taken, using the boxes she has brought, including doses and how many days.\n\nAsk what else she may not think of as medicine: herbal remedies, supplements, cold and flu sachets, and anything borrowed from family.\n\nAsk what she is most worried about, and let her say the guilt out loud rather than assuming it.\n\nExplain, item by item, what is known about each of the things she has taken at this stage of pregnancy.\n\nBe honest about where the evidence is reassuring and where it is simply limited, without turning uncertainty into alarm.\n\nExplain which common remedies are considered safe in pregnancy and which should be avoided, and give her something written.\n\nExplain the headaches themselves: what usually causes them at this stage and what she can safely use for them.\n\nExplain what to do before taking anything new, including asking the pharmacist and mentioning the pregnancy every time.\n\nExplain what the routine antenatal scans will and will not tell her, so that she is not waiting on the twelve-week scan as a verdict.\n\nAgree what happens next and check she leaves with the guilt addressed rather than only the facts."
    },
    "guidanceNote": "Gather the specifics before reassuring so your advice is accurate; address the guilt directly and give a simple rule for checking future medicines."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-advising-weight-and-lifestyle-change-after-a-heart-scare",
    "title": "Medicine — Advising weight and lifestyle change after a heart scare",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Cardiology follow-up clinic, a first review appointment two weeks after discharge.",
      "candidateRole": "You are the doctor. The patient had a non-ST-elevation myocardial infarction two weeks ago and was stented.",
      "patientRole": "A 47-year-old delivery driver who feels completely well again, has already gone back to work, and has started smoking again after four days of stopping.",
      "patientConcern": "He believes the danger passed when the stent went in, and privately thinks giving up smoking is beyond him because he has failed at it three times.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how he has been since discharge, physically and otherwise, and what he has been told so far.\n\nAsk what he understands the stent to have done, and correct the belief that the problem has been fixed rather than treated.\n\nAsk directly about smoking, without a preamble that invites a false answer.\n\nExplain what the risk of a further event looks like over the next five years with and without change, using plain numbers.\n\nExplain which changes make the largest difference and in what order, so that he is not handed five equal instructions.\n\nExplore what happened in his previous attempts to stop smoking, and what got in the way each time.\n\nExplain what support is available now that was not available then, including medication and the stop-smoking service.\n\nAsk about diet and activity briefly, and about cardiac rehabilitation, which he has not yet attended.\n\nAgree one or two first steps he chooses himself, with a date attached to each.\n\nAgree the review point and make clear that a relapse is a reason to come back, not a reason to stay away."
    },
    "guidanceNote": "Resist overloading the patient with every change at once; negotiate small achievable goals and treat smoking cessation as something to support, not command."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-breaking-news-of-a-likely-cancer-diagnosis",
    "title": "Medicine — Breaking news of a likely cancer diagnosis",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Hospital outpatient clinic, a results appointment, the patient attending alone and expecting a routine answer.",
      "candidateRole": "You are the doctor. The CT scan shows a mass in the right lung, highly suspicious for malignancy, requiring urgent biopsy and staging.",
      "patientRole": "A 60-year-old who came in expecting to be told the cough was nothing, is alone today, and has a daughter waiting to hear by telephone.",
      "patientConcern": "Once the word is said, the patient's mind will go to how to tell the family and whether the dying will be painful, rather than to the treatment plan.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient understands about why the scan was done and what they have been expecting today.\n\nGive a brief warning that the news is not what they were hoping for, then stop and let it land.\n\nSay what the scan shows in one plain sentence, without hiding it inside a paragraph of explanation.\n\nStop talking and allow silence long enough for the patient to react.\n\nBe honest about what is not yet known: that a biopsy is needed before anything is certain, and what that means.\n\nAnswer whatever question comes first, even if it is out of order, rather than continuing your own sequence.\n\nExplain the next steps concretely: the biopsy, the staging scans, the multidisciplinary meeting, and roughly when each will happen.\n\nAsk whether there is someone who can be with them, and offer to speak to that person or to arrange a second appointment with them present.\n\nCheck what they will take away from today, and give them a written note of the plan and a contact number.\n\nAgree who will telephone them, when, and what to do in the meantime if symptoms change."
    },
    "guidanceNote": "Warn before the difficult news, pause to let it land, and avoid false reassurance; follow the patient's pace rather than rushing into the management plan."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-counselling-before-a-planned-knee-replacement",
    "title": "Medicine — Counselling before a planned knee replacement",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Pre-operative assessment clinic, four weeks before a planned admission.",
      "candidateRole": "You are the doctor. The patient is listed for an elective total knee replacement next month and needs pre-operative counselling.",
      "patientRole": "A 68-year-old retired teacher with well-controlled hypertension who has never had an operation, lives alone in a first-floor flat, and asks a great many questions.",
      "patientConcern": "The private fears are of not waking from the anaesthetic and of being a burden to her son during the recovery; neither has been said aloud.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what she has been told already and what she is expecting the operation to achieve.\n\nAsk what she is most worried about, and give her time rather than filling the pause yourself.\n\nExplain the sequence of the day of surgery: admission, the anaesthetic assessment, the operation, and waking up.\n\nExplain the anaesthetic options in plain terms and address the fear of not waking up with an honest figure rather than a platitude.\n\nExplain the realistic recovery timeline week by week, including when she will stand, walk, and manage stairs.\n\nExplain how the pain will be controlled at each stage and what she should expect it to feel like.\n\nAsk about her home: the stairs to the flat, who is nearby, and what she has already arranged.\n\nExplain what support is available for discharge and how it is organised, so that the burden is not only her son's.\n\nExplain the risks honestly, including infection, clots and the small chance of the knee not meeting expectations.\n\nAgree what she will do to prepare in the next four weeks, and arrange the follow-up contact before admission."
    },
    "guidanceNote": "Give concrete, sequenced information but check understanding often; draw out the unspoken fear about anaesthesia rather than only listing facts."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-discussing-statins-with-a-patient-worried-about-side-effects",
    "title": "Medicine — Discussing statins with a patient worried about side effects",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General practice consulting room, a booked appointment to discuss recent blood results.",
      "candidateRole": "You are the doctor. The patient has raised cholesterol and a ten-year cardiovascular risk of 18 per cent, and a statin is indicated.",
      "patientRole": "A 58-year-old whose friend stopped statins because of leg pains, who has read about memory problems online, and whose father had a stroke at 64.",
      "patientConcern": "The patient trusts personal accounts more than figures and suspects the doctor is chasing a target rather than treating a person.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient already knows about statins and where the information has come from.\n\nAsk what specifically worries them, so that you address muscle pain and memory rather than a general objection.\n\nAsk about the family history and about what they think their own risk is, before you give them the number.\n\nExplain what the risk score means in plain terms, using natural frequencies rather than percentages alone.\n\nExplain what a statin would change in that number, and be honest that it is a reduction in risk and not a guarantee.\n\nAddress the muscle side effects specifically: how often they genuinely occur, what they feel like, and that they are reversible.\n\nAddress the memory claim directly and say what the evidence does and does not show.\n\nAcknowledge the suspicion about targets openly, and say what you would recommend to a member of your own family.\n\nOffer a trial with a defined review, including what would be checked and when, so the decision is not permanent.\n\nAgree the next step, and make declining today a legitimate outcome that keeps the conversation open."
    },
    "guidanceNote": "Put the risks and benefits in proportion without dismissing what the patient has heard; offer a trial-and-review approach to share the decision."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-explaining-a-delayed-test-result",
    "title": "Medicine — Explaining a delayed test result",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Hospital outpatient clinic, a results appointment, where the CT scan was never booked because of an administrative error.",
      "candidateRole": "You are the medical registrar. The patient has attended for scan results that do not exist, and you must explain why.",
      "patientRole": "A 62-year-old retired teacher under investigation for six kilograms of unintentional weight loss, who has waited five weeks for this appointment and taken a taxi to get here.",
      "patientConcern": "The underlying fear is that a cancer has been missed or has grown during the delay, and that nobody is taking the case seriously.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient is expecting from today's appointment before you say anything else.\n\nTell them plainly and early that the scan was not arranged, and do not let them discover it through hints.\n\nApologise without conditions and without immediately explaining the system that caused it.\n\nExplain honestly what went wrong, as far as you know it, and say what you do not yet know.\n\nAllow them to be angry, and do not rush to defend the department while they are speaking.\n\nExplain what has happened clinically in the meantime: the results that are available and what they show.\n\nExplain what you are doing about the scan now, including when it will happen and who will book it.\n\nExplain the safety-netting: what symptoms would mean contacting the hospital sooner, and how to do that.\n\nExplain how the error will be reported and what they can do if they wish to raise a formal concern.\n\nAgree the follow-up date, give a direct contact, and make clear who is now accountable for the pathway."
    },
    "guidanceNote": "Be honest and take ownership of the error early rather than minimising it — patients forgive mistakes far more readily than evasiveness. Acknowledge the anxiety and anger as legitimate, give a concrete revised timeline, and check the patient leaves knowing exactly what happens next."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-explaining-a-new-atrial-fibrillation-diagnosis-and-blood-thinners",
    "title": "Medicine — Explaining a new atrial fibrillation diagnosis and blood thinners",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General practice consulting room, a follow-up after an irregular pulse was found at a routine check.",
      "candidateRole": "You are the doctor. The patient has confirmed atrial fibrillation on ECG and a CHA2DS2-VASc score that warrants anticoagulation.",
      "patientRole": "A 74-year-old who feels perfectly well, walks the dog daily, has had two minor falls in the past year, and does not want another tablet.",
      "patientConcern": "The patient is far more frightened of bleeding after a fall, which can be pictured, than of a stroke, which cannot.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient has been told so far and whether they have noticed anything themselves.\n\nAsk about the falls: how many, what caused them, and whether there were any injuries.\n\nExplain what atrial fibrillation is, using a simple description of what the heart is doing.\n\nExplain why the rhythm raises the risk of stroke, and what kind of stroke that tends to be.\n\nGive the actual numbers, both the stroke risk without treatment and the reduction with it, in a form they can hold on to.\n\nGive the bleeding risk honestly, including bleeding after a fall, and compare it directly with the stroke risk rather than leaving the two unweighed.\n\nAddress the fall risk itself as something that can be reduced, rather than as a reason to accept the stroke risk.\n\nExplain what taking the medication would involve day to day, including monitoring and what to do about a missed dose.\n\nAsk what would make the decision easier, and offer time, written information, or a discussion with family.\n\nAgree a next step, including a review of the falls, whether or not they start the medication today."
    },
    "guidanceNote": "Make the invisible stroke risk concrete and balance it honestly against bleeding; involve the patient in weighing the trade-off rather than simply prescribing."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-explaining-shingles-and-managing-pain-in-an-older-patient",
    "title": "Medicine — Explaining shingles and managing pain in an older patient",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General practice consulting room, a same-day appointment for a rash that began three days ago.",
      "candidateRole": "You are the doctor. The patient has a painful vesicular rash in a single dermatome on the left chest, consistent with shingles.",
      "patientRole": "A 71-year-old grandparent who looks after two grandchildren twice a week, one of whom is a baby, and is due to do so tomorrow.",
      "patientConcern": "The fear is of passing it to the grandchildren and of the rash spreading over the whole body, and of losing the childcare role.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask when the rash appeared, where the pain started, and whether the pain came before the rash.\n\nAsk about the eye, the ear and any weakness, so that a complicated case is not missed.\n\nAsk what they are most worried about, and let the grandchildren come up in their own words.\n\nExplain what shingles is and why it appears in a band on one side only.\n\nExplain the contagion question precisely: what can and cannot be passed on, to whom, and by what route.\n\nAsk specifically about the grandchildren's chickenpox and vaccination status, and about anyone pregnant or immunosuppressed in the family.\n\nExplain the antiviral treatment, why starting promptly matters, and how to take it.\n\nExplain the pain: how to manage it now, that it can be severe, and what post-herpetic neuralgia is so that it is not a shock later.\n\nExplain what would mean seeking help urgently, including eye involvement, spreading rash or confusion.\n\nAgree what will happen about tomorrow's childcare and arrange a review, mentioning the shingles vaccine for the future."
    },
    "guidanceNote": "Address the contagion worry directly and in plain language; be clear about realistic timelines for the rash and pain so the patient knows what is normal."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-helping-a-patient-improve-inhaler-adherence-in-asthma",
    "title": "Medicine — Helping a patient improve inhaler adherence in asthma",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "FOUNDATION",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General practice asthma review clinic, a routine annual review brought forward after repeated reliever prescriptions.",
      "candidateRole": "You are the doctor. The patient has needed six reliever inhalers in twelve months and has collected one preventer inhaler in the same period.",
      "patientRole": "A 24-year-old who uses the brown inhaler only when breathless, feels well most of the time, and has been woken at night twice in the past month.",
      "patientConcern": "The patient genuinely cannot see the logic of taking a medicine on days when nothing is wrong, and has never been told how the preventer works.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the asthma has actually been: night waking, exercise, days off work, and how often the blue inhaler is used.\n\nAsk exactly how and when each inhaler is used, and ask to see the technique rather than take it on trust.\n\nExplain what the reliever does and how quickly, and what it does not do.\n\nExplain what the preventer does, in terms of the inflammation that is present even on good days.\n\nExplain why the reliever use itself is the warning sign, and what the prescription count tells you.\n\nExplain what happens over years if the inflammation is left untreated, without overstating the immediate danger.\n\nCorrect the inhaler technique if it is wrong, and check it again after your explanation.\n\nAsk what actually gets in the way of taking it daily, and take the honest answer seriously.\n\nAgree a routine tied to something they already do every day, and a way of noticing when they have missed it.\n\nAgree a written asthma action plan, a review date, and what would mean seeking help urgently."
    },
    "guidanceNote": "Keep the explanation simple and practical; link the daily preventer to fewer attacks rather than relying on technical detail about inflammation."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-newly-diagnosed-hypertension-in-clinic",
    "title": "Medicine — Newly diagnosed hypertension in clinic",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General practice consulting room, a results appointment after three raised readings and a week of home monitoring.",
      "candidateRole": "You are the general practitioner. The patient has stage 1 hypertension confirmed on home readings, with a ten-year cardiovascular risk above the treatment threshold.",
      "patientRole": "A 45-year-old accountant who feels entirely well, works twelve-hour days through the tax season, drinks most evenings, has gained eight kilograms since forty, and is reluctant to start any medication.",
      "patientConcern": "The hidden fear is that tablets mean being ill for life and becoming like their father, who had a disabling stroke despite taking many medications.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient understands about the readings and what they were expecting to hear today.\n\nAsk what worries them about the diagnosis, and give room for something other than the medical answer.\n\nAsk about the family history, and let them tell you about their father in their own words.\n\nExplain what the readings mean and why treatment matters in someone who feels completely well.\n\nAddress the father's story directly: what it does and does not predict for them, and what was different about that case.\n\nExplain the lifestyle measures that genuinely move the number — salt, alcohol, weight, activity — and how much each is worth.\n\nExplain the option of medication honestly, including that it is not necessarily lifelong and is reviewed.\n\nCorrect the equation between taking a tablet and being seriously ill, in their terms rather than yours.\n\nAsk what they would be willing to try first, and agree a plan they have chosen rather than accepted.\n\nArrange follow-up with a defined review point and say what would change the plan at that review."
    },
    "guidanceNote": "Because the patient feels well, lead with their concerns rather than statistics. Draw out the fear about lifelong medication and the family history before recommending anything — acknowledging it openly makes shared decision-making genuine, not a script."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-persuading-a-hesitant-parent-about-the-mmr-vaccine",
    "title": "Medicine — Persuading a hesitant parent about the MMR vaccine",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Community child health clinic, a routine immunisation appointment for a fourteen-month-old.",
      "candidateRole": "You are the doctor. The child is due the first MMR vaccine and the parent wants to delay or decline it.",
      "patientRole": "The parent of a fourteen-month-old, who has read alarming claims in an online group, has vaccinated the child for everything else, and expects to be argued with.",
      "patientConcern": "The parent is frightened by the discredited autism claim and feels judged by health staff, and will dig in if the conversation becomes a contest.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the parent has read and where, and listen to the whole of it before responding.\n\nAsk what specifically worries them, since the concern may not be the one you assume.\n\nAcknowledge that they have kept every other appointment and that the question comes from care, not carelessness.\n\nExplain where the autism claim came from and what happened to it, factually and without ridicule.\n\nExplain what the vaccine contains and what the common side effects genuinely are.\n\nExplain what measles itself does, including the complications and how quickly it spreads, using something concrete rather than statistics alone.\n\nExplain the consequence of delay specifically, including the period of susceptibility and the timing of the second dose.\n\nAsk whether anything would change their mind, and offer written information or a further appointment.\n\nRespect that the decision is theirs and say so plainly, without withdrawing your recommendation.\n\nExplain what would happen if the child were exposed to measles before being immunised, and what could be done at that point.\n\nAgree what happens today and leave the door open, including how to book if they decide differently next week."
    },
    "guidanceNote": "Avoid lecturing; validate the parent's wish to protect their child, correct misinformation gently, and keep the door open even if they decline today."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-reassessing-long-term-opioid-use-for-back-pain",
    "title": "Medicine — Reassessing long-term opioid use for back pain",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General practice consulting room, a medication review booked after a repeat prescription query.",
      "candidateRole": "You are the doctor. The patient has taken a strong opioid for chronic low back pain for two years, with escalating doses and no functional gain.",
      "patientRole": "A 55-year-old former warehouse worker who takes the tablets four times daily, has stopped most activity, and has had two early requests for repeats.",
      "patientConcern": "The patient is frightened of being seen as drug-seeking and is certain that any reduction will leave them unable to cope with the pain.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask how the pain is now and what a typical day looks like, including what they can and cannot do.\n\nAsk what the tablets actually achieve: how much the pain drops, for how long, and what they allow them to do.\n\nAsk what they are afraid will happen if the dose comes down, and let the fear be stated rather than implied.\n\nSay plainly that you are not accusing them of anything and that this review applies to everyone on long-term opioids.\n\nExplain what is known about opioids in long-term back pain, including the loss of effect over time.\n\nExplain the harms honestly: tolerance, low mood, constipation, hormonal effects, falls, and the risk with any dose increase.\n\nExplain what a reduction would look like: how slow, how much at each step, and that it stops if things go badly.\n\nExplain what would be put in place alongside it, including physiotherapy, a pain service and non-opioid options.\n\nAsk what they would be willing to try, and let the first step be smaller than you would ideally choose.\n\nAgree the plan in writing with a review date, and make clear the prescription is not being stopped today."
    },
    "guidanceNote": "Lead with empathy for the genuine pain and avoid any hint of blame; frame reduction as a shared, gradual plan with support rather than a withdrawal of help."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-reassuring-parents-of-a-child-with-a-febrile-seizure",
    "title": "Medicine — Reassuring parents of a child with a febrile seizure",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "Paediatric emergency department, a cubicle, the child now alert and drinking after a brief seizure at home.",
      "candidateRole": "You are the doctor. The child had a simple febrile convulsion lasting under two minutes during a viral illness and has fully recovered.",
      "patientRole": "The parent of a two-year-old, still shaking, who thought the child was dying and called an ambulance, and whose partner is at home with an older child.",
      "patientConcern": "The parent is terrified the child has epilepsy or brain damage and that a further seizure could be fatal if it happens at night.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask the parent to describe exactly what happened, from before the seizure to now.\n\nAcknowledge how frightening it must have been, and say so before you begin explaining anything.\n\nExplain what a febrile seizure is, why it happens in young children, and how common it is.\n\nExplain what today's examination and observations show, and why you are reassured.\n\nAddress the two fears by name: epilepsy and brain damage, and say what the evidence actually shows about each.\n\nExplain the chance of it happening again, honestly, including that a further episode does not change the outlook.\n\nExplain exactly what to do if it happens again: safe positioning, timing it, and when to call an ambulance.\n\nExplain that treating the fever does not prevent seizures, so that they are not left feeling responsible for preventing the next one.\n\nAdvise on managing the illness itself, including fluids and what would mean returning.\n\nExplain what would prompt a different assessment in future, such as a longer seizure or one affecting only one side.\n\nAgree the discharge plan, give written information, and check they feel able to go home tonight."
    },
    "guidanceNote": "Acknowledge how frightening it was before giving facts; give clear, memorable safety advice for a future episode rather than only reassurance."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-starting-metformin-for-type-2-diabetes",
    "title": "Medicine — Starting metformin for type 2 diabetes",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "CORE",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General practice consulting room, a results appointment following a repeat HbA1c.",
      "candidateRole": "You are the doctor. Two HbA1c results confirm type 2 diabetes at 58 mmol/mol and you are recommending metformin alongside lifestyle change.",
      "patientRole": "A 52-year-old who has been trying to lose weight for three months, has already cut out sugary drinks, and would prefer to fix it with diet alone.",
      "patientConcern": "The patient hears a tablet as a verdict that they have already failed, and as the start of a lifetime of medication.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask what the patient already understands about the results and what they have changed so far.\n\nAcknowledge the changes they have already made, specifically, before recommending anything.\n\nExplain what the HbA1c number means and what it represents over three months.\n\nExplain what is happening in the body in plain terms, and why diet alone often does not do it at this level.\n\nAddress the sense of failure directly, and explain that diabetes progresses regardless of effort in many people.\n\nExplain what metformin does, how it differs from insulin, and why it is not a last resort.\n\nExplain the common early side effects honestly, and how the slow-release form and taking it with food reduce them.\n\nExplain that the medication is reviewed and can be reduced or stopped if the numbers allow, so it is not a life sentence today.\n\nAgree the dietary and activity changes they will make alongside it, in their own terms.\n\nAgree the follow-up: repeat HbA1c timing, retinal screening, foot check, and who they contact with problems."
    },
    "guidanceNote": "Acknowledge the wish to try diet first rather than dismissing it; frame medication as one tool, and be honest that diet and tablets often work best together."
  },
  {
    "subTest": "SPEAKING",
    "taskType": "SPEAKING_ROLEPLAY",
    "profession": "MEDICINE",
    "slug": "spk-medicine-supporting-a-patient-with-low-mood-and-poor-sleep",
    "title": "Medicine — Supporting a patient with low mood and poor sleep",
    "prompt": "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    "difficulty": "STRETCH",
    "topicTag": "advice",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "setting": "General practice consulting room, a double appointment booked at the receptionist's suggestion.",
      "candidateRole": "You are the doctor. The patient has described several weeks of low mood and poor sleep and has been reluctant to elaborate.",
      "patientRole": "A 30-year-old who has been sleeping three or four hours a night for six weeks, has stopped seeing friends, and is minimising how bad things have become.",
      "patientConcern": "The patient has had fleeting thoughts that life is not worth living, is ashamed of them, and will not volunteer them unless asked directly and calmly.",
      "prepSeconds": 180,
      "speakSeconds": 300,
      "candidateCard": "Ask open questions about how things have been over the past weeks, and let the answer run without interrupting.\n\nAsk about the practical markers: sleep, appetite, concentration, work, and whether anything is still enjoyable.\n\nAsk what has changed in their life recently, and about alcohol and any drug use, without judgement.\n\nAsk directly and calmly about thoughts of self-harm and of not wanting to be alive, and about any plan or preparation.\n\nRespond to whatever is disclosed without alarm, and thank them for saying it.\n\nAsk what support they have around them and whether anyone knows how they are.\n\nExplain what you think is happening, using plain language rather than a label alone.\n\nExplain the treatment options fairly, including talking therapy, medication, and what each involves and how long each takes to work.\n\nAgree a safety plan for the coming days, including who to contact and what to do at night when it is worst.\n\nAgree a specific early review and make sure they leave with a date, a number, and one thing to do before then."
    },
    "guidanceNote": "Create space for the patient to open up and ask directly but gently about safety; do not move to solutions before the patient feels heard."
  }
];
