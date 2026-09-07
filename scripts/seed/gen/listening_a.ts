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
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-ankle-injury-after-a-fall",
    "title": "Part A — Ankle injury after a fall",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: Good morning, come in and take a seat. I'm one of the nurse practitioners. Can you tell me what happened to your ankle? Patient: I twisted it while I was playing football, and it gave way underneath me. Clinician: Were you tackled, or did it go on its own? Patient: On its own. I turned to change direction and the foot stayed where it was. Clinician: That's a very typical mechanism. Did you hear anything at the time — a crack or a pop? Patient: No, nothing like that. Clinician: Good. And could you carry on playing? Patient: No, I had to come off straight away. I couldn't put my foot down at all for the first few minutes. Clinician: And when did this happen? Patient: It was three days ago, on Saturday afternoon. Clinician: Have you been able to walk on it since? Patient: A bit, but I'm limping badly and I'm holding on to the furniture at home. Clinician: How would you rate the pain right now, on a scale of zero to ten, where ten is the worst pain you can imagine? Patient: I'd say it's about seven, especially when I put weight on it. Clinician: And at rest? Patient: Much less. It settles if I keep still. Clinician: Have you taken anything for it? Patient: Just ibuprofen, two tablets in the morning and two at night. Clinician: Is that helping? Patient: It takes the edge off for a few hours. Clinician: Have you tried anything else — ice, elevation? Patient: I've been putting a bag of frozen peas on it, about twenty minutes at a time. Clinician: That's exactly right, and worth carrying on with. Have you used a support of any kind? Patient: My brother lent me a tubular bandage. Clinician: Where exactly is the swelling worst? Patient: It's mainly on the outer ankle, just below the bone. Clinician: And is there any bruising? Patient: Yes, it's gone quite purple underneath the heel. Clinician: That often appears a day or two after the injury and it looks more alarming than it is. Any numbness or pins and needles in the foot or toes? Patient: No, none. Clinician: Any previous problems with that ankle? Patient: I sprained the same one about two years ago, playing the same sport. Clinician: And did that need any treatment? Patient: Just rest, as far as I remember. Clinician: What do you do for work? Patient: I'm a warehouse picker, so I'm on my feet all day. Clinician: Have you been in? Patient: No, I've had this week off. Clinician: Right. I'm going to examine the ankle now, press over a few specific points, and that will tell us whether you need an X-ray or not. Most injuries like this one don't. Patient: Will I be back playing soon? Clinician: Most people are back to sport within about six weeks, and starting gentle movement early makes that quicker rather than slower. Patient: Do I need crutches? Clinician: I'd rather you didn't use them if you can manage without. Putting a normal amount of weight through it, as the pain allows, is what gets the ankle working again — crutches feel safer and slow it down. Patient: And the bandage? Clinician: Keep it for comfort during the day if you like, take it off at night, and stop using it altogether once the swelling settles. Patient: What about going back to the gym? Clinician: Cycling and swimming from about next week, provided it isn't painful afterwards. Running last, and football after running. Patient: And if it isn't improving? Clinician: If you're no better in two weeks, or if at any point you genuinely cannot put your foot to the floor, come back and we'll look again. I'll also give you a sheet of exercises — the balance ones matter most, because it's the balance that gets injured along with the ligament, and it's the reason people sprain the same ankle twice.",
      "gaps": [
        {
          "id": "g1",
          "label": "Activity at time of injury",
          "answer": "playing football"
        },
        {
          "id": "g2",
          "label": "Injured while turning to change",
          "answer": "direction"
        },
        {
          "id": "g3",
          "label": "Time since injury",
          "answer": "three days"
        },
        {
          "id": "g4",
          "label": "Pain score on weight-bearing (0-10)",
          "answer": "seven"
        },
        {
          "id": "g5",
          "label": "Pain relief taken",
          "answer": "ibuprofen"
        },
        {
          "id": "g6",
          "label": "Also applying, 20 minutes at a time",
          "answer": "frozen peas",
          "acceptExhaustive": true
        },
        {
          "id": "g7",
          "label": "Support borrowed from brother",
          "answer": "tubular bandage",
          "acceptExhaustive": true
        },
        {
          "id": "g8",
          "label": "Site of worst swelling",
          "answer": "outer ankle"
        },
        {
          "id": "g9",
          "label": "Bruising appeared under the",
          "answer": "heel"
        },
        {
          "id": "g10",
          "label": "Numbness or pins and needles",
          "answer": "none"
        },
        {
          "id": "g11",
          "label": "Sprained same ankle this long ago",
          "answer": "two years"
        },
        {
          "id": "g12",
          "label": "Occupation",
          "answer": "warehouse picker",
          "acceptExhaustive": true
        }
      ]
    },
    "guidanceNote": "Listen for the patient's exact words about timing and pain — they often paraphrase the note label, so write what you hear, not a rephrasing."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-antenatal-visit",
    "title": "Part A — Antenatal visit",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Midwife",
          "voice": "echo"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "audioScript": "Midwife: Come in and have a seat. How have you been since we last met? Patient: Reasonably well, thank you. A bit more tired than I was. Midwife: How many weeks pregnant are you now? Patient: I'm twenty-eight weeks. Midwife: So we're into the third trimester, and from here the appointments come a little closer together. Are you feeling the baby move? Patient: Yes, lots of movements, especially in the evening. Midwife: And is that the pattern you've got used to over the last few weeks? Patient: It is, more or less. He's quiet in the morning and busy after supper. Midwife: That's exactly what I want to hear. The important thing is not a number of kicks but the pattern you know — if that changes, ring us the same day rather than waiting. Patient: My friend told me to count to ten every day. Midwife: That advice has moved on. Knowing your own baby's pattern is more reliable. Now, any swelling in your hands or face? Patient: My fingers have been swelling a bit. I had to take my ring off on Tuesday. Midwife: And your feet or ankles? Patient: A little by the end of the day, but that started weeks ago. Midwife: How about headaches? Patient: I've had a few headaches this week. Midwife: Where do you feel them, and how long do they last? Patient: Across the front, and a couple of hours. Paracetamol usually shifts them. Midwife: Any problems with your vision — flashing lights, or spots? Patient: No, nothing like that. Midwife: Any pain under your ribs on the right side? Patient: No. Midwife: Good, and those are the three I ask everybody at this stage. And your blood pressure today is slightly raised. Patient: Is that a problem? Midwife: On its own, and once, no — but with the swelling and the headaches together it's worth a closer look, so I'm going to test your urine as well before you leave. Patient: What are you testing for? Midwife: Protein, mainly. If there's none, that's very reassuring. Patient: And if there is? Midwife: Then I'd ask the doctor to see you today. Most of the time it comes to nothing, and I'd much rather check than wonder. How is your iron? You were borderline last time. Patient: I've been taking the tablets, though they upset my stomach. Midwife: Try taking them with orange juice and every other day rather than daily — it's better absorbed and much easier to tolerate. Are you still working? Patient: Yes, until thirty-four weeks. Midwife: And how is the sleep? Patient: Not wonderful. I'm up twice a night. Midwife: That's very common now, and a pillow between the knees helps more than people expect. Right — let me listen to the baby, then we'll do the blood pressure again after five minutes of sitting quietly, because that alone sometimes settles it. Patient: Is there anything I should be doing differently? Midwife: Keep drinking, keep moving, and put your feet up when you can — the swelling is worse at the end of a long day on them. And this is the point in pregnancy where I'd ask you to slow down rather than push through. Patient: My mother says I should be resting completely. Midwife: I'd not go that far. Gentle activity is good for you and good for the baby. Patient: What happens at the next appointment? Midwife: We'll check the growth, do your bloods again for iron, and if you're rhesus negative there's an injection at around twenty-eight weeks — I'll check your notes. Patient: And the birth plan? Midwife: We'll start that around thirty-four weeks, so there's no rush. In the meantime, have a think about where you'd like to give birth, and we'll talk it through properly rather than filling in a form.",
      "gaps": [
        {
          "id": "g1",
          "label": "Gestation",
          "answer": "twenty-eight weeks"
        },
        {
          "id": "g2",
          "label": "Baby is most active",
          "answer": "in the evening",
          "acceptExhaustive": true
        },
        {
          "id": "g3",
          "label": "Advice: report any change in the",
          "answer": "pattern"
        },
        {
          "id": "g4",
          "label": "Swelling site",
          "answer": "fingers"
        },
        {
          "id": "g5",
          "label": "Had to remove her",
          "answer": "ring"
        },
        {
          "id": "g6",
          "label": "Other symptom this week",
          "answer": "headaches"
        },
        {
          "id": "g7",
          "label": "Headaches usually relieved by",
          "answer": "paracetamol"
        },
        {
          "id": "g8",
          "label": "Headaches felt across the",
          "answer": "front"
        },
        {
          "id": "g9",
          "label": "Blood pressure today is slightly",
          "answer": "raised"
        },
        {
          "id": "g10",
          "label": "Urine to be tested mainly for",
          "answer": "protein"
        },
        {
          "id": "g11",
          "label": "Iron tablets upset her",
          "answer": "stomach"
        },
        {
          "id": "g12",
          "label": "Plans to work until",
          "answer": "thirty-four weeks",
          "acceptExhaustive": true
        }
      ]
    },
    "guidanceNote": "Gestation is given in weeks; write the number-plus-weeks phrase rather than guessing a month."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-asthma-flare-up",
    "title": "Part A — Asthma flare-up",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "verse"
        },
        {
          "role": "Patient",
          "voice": "echo"
        }
      ],
      "audioScript": "Clinician: Come in. What's been happening with your breathing? Patient: I've been wheezing a lot, especially at night. Clinician: How long has this been going on? Patient: It's built up over the last ten days or so. Clinician: And is this worse than your usual? Patient: Much worse. Normally I hardly think about it. Clinician: How often are you using your reliever inhaler? Patient: About six times a day this week. Clinician: And before this started? Patient: Maybe twice a week, if that. Clinician: That's a significant change and it's the right reason to come in. Has anything set it off? Patient: I think it's the cold weather. It started when the frost came. Clinician: Any cold or chest infection alongside it? Patient: No, I've not been unwell otherwise. Clinician: Any change at home — a new pet, building work, damp? Patient: No, nothing new. Clinician: Can you speak in full sentences when it's bad? Patient: No, I have to stop for breath. Clinician: How far can you walk on the flat before you have to stop? Patient: About fifty metres, and then I need a minute. Clinician: Any cough? Patient: A dry cough that won't settle, mostly in the early hours. Clinician: Is it waking you? Patient: Every night this week. Clinician: Are you taking your preventer inhaler? Patient: I take the brown one most mornings. Clinician: Most mornings — so some are missed? Patient: If I'm rushing, yes. Clinician: That's very common, and I'm not asking to catch you out; I'm asking because it changes what we do next. Do you use a spacer with it? Patient: No, straight from the inhaler. Clinician: We'll come back to that, because it makes a real difference to how much reaches the lungs. Have you had oral steroids before for a flare-up like this? Patient: Twice, I think. The last time was last winter. Clinician: Any hospital admissions? Patient: No, never admitted. Clinician: Good. Do you smoke, or does anyone in the house? Patient: No, neither. Clinician: And do you have an action plan — the sheet that tells you what to do when it gets worse? Patient: I had one somewhere, but I couldn't tell you where it is. Clinician: We'll print a new one before you go. Right — I'm going to check your oxygen level and listen to your chest, and I'd like you to blow into the peak flow meter for me three times. That number, compared with your best, tells us how much room we've got. Patient: Will I need the steroids again? Clinician: Possibly, and if so it's a short course. But the more useful conversation is the one about the preventer and the spacer, because that's what stops us having this conversation again in February. Patient: Should I be doing anything different at home? Clinician: Three things. Take the brown inhaler every morning and every evening without exception, even on the good days. Use a spacer with it — I'll give you one now and watch you use it, because the technique is where most of the benefit is lost. And in cold weather, wrap a scarf loosely over your nose and mouth on the way to work; warming the air before it reaches the chest genuinely helps. Patient: That sounds too simple. Clinician: Most of the things that work are. Patient: When should I come back? Clinician: I'd like to see you in a week to repeat the peak flow, and sooner than that if the reliever isn't lasting four hours, or if you're using it more than you are now. If you ever find you can't finish a sentence, that's not a surgery appointment — that's an ambulance.",
      "gaps": [
        {
          "id": "g1",
          "label": "Main symptom",
          "answer": "wheezing"
        },
        {
          "id": "g2",
          "label": "Symptoms worse at",
          "answer": "night"
        },
        {
          "id": "g3",
          "label": "Symptoms have built up over",
          "answer": "ten days"
        },
        {
          "id": "g4",
          "label": "Reliever use this week",
          "answer": "six times"
        },
        {
          "id": "g5",
          "label": "Usual reliever use",
          "answer": "twice a week",
          "acceptExhaustive": true
        },
        {
          "id": "g6",
          "label": "Suspected trigger",
          "answer": "cold weather",
          "acceptExhaustive": true
        },
        {
          "id": "g7",
          "label": "Distance walked before stopping",
          "answer": "fifty metres"
        },
        {
          "id": "g8",
          "label": "Cough type",
          "answer": "dry"
        },
        {
          "id": "g9",
          "label": "Preventer inhaler colour",
          "answer": "brown"
        },
        {
          "id": "g10",
          "label": "Not using a",
          "answer": "spacer"
        },
        {
          "id": "g11",
          "label": "Has previously had a short course of oral",
          "answer": "steroids"
        },
        {
          "id": "g12",
          "label": "Document to be reprinted",
          "answer": "action plan",
          "acceptExhaustive": true
        }
      ]
    },
    "guidanceNote": "Inhaler frequency is a key figure; write the exact number of times the patient says."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-chest-pain-assessment",
    "title": "Part A — Chest pain assessment",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: I'm going to ask you some questions while my colleague sets up the monitor, so don't worry about the activity around you. Can you describe the chest pain for me? Patient: It feels like a tight pressure right in the centre. Clinician: Like a band, or like something sitting on you? Patient: Like a weight, pressing down. Clinician: And when did it start? Patient: About two hours ago, while I was climbing the stairs. Clinician: Did it come on suddenly or build up? Patient: It built up over a minute or two. Clinician: Did it ease when you stopped? Patient: A little at first, but it's been there ever since. Clinician: Does it move anywhere? Patient: Yes, it spreads down my left arm and up into my jaw. Clinician: Any other symptoms? Patient: I've been feeling quite breathless, and a bit sweaty. Clinician: Any nausea, or have you been sick? Patient: I felt sick, but I haven't been. Clinician: On a scale of nought to ten, how bad is it at its worst? Patient: About eight. Clinician: Have you had anything like this before? Patient: Never this bad, no. Clinician: Have you had anything at all like it, though — on exertion, perhaps? Patient: Now you say it, I've had some tightness walking up the hill to the shops these past few weeks. It went when I stopped, so I didn't think much of it. Clinician: That's useful and I'm glad you mentioned it. Do you take any regular medicines? Patient: Something for my blood pressure, and a statin. Clinician: Do you know the names? Patient: They're on a list in my wallet. Clinician: That's perfect, we'll take it from there. Any allergies? Patient: None that I know of. Clinician: Do you smoke? Patient: I gave up eleven years ago. Clinician: Well done. And is there any heart trouble in the family? Patient: My father had a heart attack at fifty-eight. Clinician: Thank you. My colleague is doing an ECG now — that's the tracing of your heart's electrical activity, and it takes about a minute. We'll also take some blood, and I'm going to give you aspirin to chew rather than swallow, because it works faster that way. Patient: Is this a heart attack? Clinician: I don't know yet, and I'm not going to guess. What I can tell you is that everything you've described means we treat it as a heart problem until the tests tell us otherwise, and that's the safest way round. Patient: My wife is in the waiting room. Clinician: Someone will bring her through as soon as the ECG is done. Patient: How long will I be here? Clinician: Several hours at least, because the blood test we take now has to be repeated after an interval — one result on its own doesn't tell us enough. If both are normal and the tracing stays normal, you'll go home with an outpatient appointment. Patient: And if they're not? Clinician: Then you stay, and the team will talk to you about the next step, which is usually a picture of the arteries themselves. Patient: I feel a bit foolish. It might be indigestion. Clinician: It might, and nobody here will mind if it is. The pain you've described — central, spreading to the arm and jaw, with sweating, coming on with exertion — is exactly what we ask people to come in for. Waiting at home to be sure is the mistake, not this. Patient: My daughter kept telling me to ring. Clinician: She was right, and you can tell her I said so.",
      "gaps": [
        {
          "id": "g1",
          "label": "Character of pain",
          "answer": "tight pressure"
        },
        {
          "id": "g2",
          "label": "Site of pain",
          "answer": "centre"
        },
        {
          "id": "g3",
          "label": "Onset while",
          "answer": "climbing the stairs",
          "acceptExhaustive": true
        },
        {
          "id": "g4",
          "label": "Pain began this long ago",
          "answer": "two hours"
        },
        {
          "id": "g5",
          "label": "Radiates down the",
          "answer": "left arm",
          "acceptExhaustive": true
        },
        {
          "id": "g6",
          "label": "Also radiates to the",
          "answer": "jaw"
        },
        {
          "id": "g7",
          "label": "Associated symptom",
          "answer": "breathless"
        },
        {
          "id": "g8",
          "label": "Pain score at worst (0-10)",
          "answer": "eight"
        },
        {
          "id": "g9",
          "label": "Recent tightness on walking up the",
          "answer": "hill"
        },
        {
          "id": "g10",
          "label": "Regular medicines: blood pressure tablet and a",
          "answer": "statin"
        },
        {
          "id": "g11",
          "label": "Stopped smoking this long ago",
          "answer": "eleven years"
        },
        {
          "id": "g12",
          "label": "Father's heart attack at age",
          "answer": "fifty-eight"
        }
      ]
    },
    "guidanceNote": "Listen for the patient's own words describing where pain spreads; radiation details often come straight after the word 'yes'."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-child-with-fever",
    "title": "Part A — Child with fever",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "aria"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: Come in and sit her on your knee — she looks happier there. When did your daughter's fever start? Patient: It came on yesterday evening, quite suddenly. She was fine at teatime. Clinician: Have you measured her temperature? Patient: Yes, it was thirty-nine degrees this morning. Clinician: What did you use? Patient: The one you put in the ear. Clinician: That's fine. And have you given her anything? Patient: Paracetamol, three doses since last night. Clinician: Does it bring the temperature down? Patient: It does for a few hours, and she perks up, then it climbs again. Clinician: That's actually reassuring — I'm as interested in how she is between the doses as in the number itself. Is she eating and drinking? Patient: She's refusing food but still taking some water. Clinician: Roughly how much has she drunk today? Patient: Maybe half a dozen small cups. Clinician: And wet nappies? Patient: Five since this morning, I'd say. Clinician: Good, that's the answer I was hoping for. Any vomiting or diarrhoea? Patient: She was sick once last night, after the paracetamol. Clinician: Any rash? Patient: I checked her all over this morning and there was nothing. Clinician: If a rash does appear, press a glass against it, and if it doesn't fade under the glass, ring 999 rather than us. Patient: I've seen that on a poster. Clinician: It's worth knowing. Any other symptoms? Patient: She's pulling at her right ear and seems very irritable. Clinician: Has she had ear trouble before? Patient: Twice last winter. Clinician: Any cough or runny nose? Patient: A bit of a snuffle for a couple of days beforehand. Clinician: Is she still playing at all? Patient: In between the doses she'll potter about. It's when it wears off she just wants to lie on me. Clinician: How old is she now? Patient: She's three in November. Clinician: And is she up to date with her immunisations? Patient: Yes, all of them. Clinician: Anyone else at home or at nursery unwell? Patient: There's been a lot going round the nursery. Clinician: Right. I'm going to take her temperature myself, check her breathing, feel her tummy and look in both ears, and I'll listen to her chest at the same time. It'll take two minutes and she may not enjoy the last part. Patient: Should I have brought her in sooner? Clinician: No — you've done exactly the right things, and you came when the ear started, which is the part that's likely to matter. Patient: How long will this go on? Clinician: If it is the ear, the fever usually settles within two to three days, and the ear pain a little after that. Most ear infections in children her age get better without antibiotics, so I may give you a prescription to hold rather than to use — take it if she's no better in three days, and not before. Patient: That feels strange. Clinician: I understand. It saves a lot of children a course of antibiotics they never needed, and the ones who do need it still get it. Keep the paracetamol going for comfort rather than for the number on the thermometer, keep her drinking little and often, and don't worry about food for a few days. Patient: When should I bring her back? Clinician: If she becomes floppy or very drowsy, if she can't keep fluids down, if you see fewer wet nappies, or if a rash appears that doesn't fade under a glass — any of those, same day.",
      "gaps": [
        {
          "id": "g1",
          "label": "Fever started",
          "answer": "yesterday evening",
          "acceptExhaustive": true
        },
        {
          "id": "g2",
          "label": "Temperature this morning",
          "answer": "thirty-nine degrees"
        },
        {
          "id": "g3",
          "label": "Medicine given",
          "answer": "paracetamol"
        },
        {
          "id": "g4",
          "label": "Number of doses given",
          "answer": "three"
        },
        {
          "id": "g5",
          "label": "Feeding",
          "answer": "refusing food"
        },
        {
          "id": "g6",
          "label": "Wet nappies since this morning",
          "answer": "five"
        },
        {
          "id": "g7",
          "label": "Vomiting",
          "answer": "once"
        },
        {
          "id": "g8",
          "label": "Checked all over for a rash and found",
          "answer": "nothing"
        },
        {
          "id": "g9",
          "label": "Pulling at her right",
          "answer": "ear"
        },
        {
          "id": "g10",
          "label": "Behaviour",
          "answer": "irritable"
        },
        {
          "id": "g11",
          "label": "Previous ear trouble last winter",
          "answer": "twice"
        },
        {
          "id": "g12",
          "label": "Immunisations",
          "answer": "up to date",
          "acceptExhaustive": true
        }
      ]
    },
    "guidanceNote": "Carers often answer two questions in one sentence; keep listening to the end before choosing your note."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-diabetes-annual-check",
    "title": "Part A — Diabetes annual check",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "echo"
        }
      ],
      "audioScript": "Clinician: Come in and sit down. This is your annual diabetes review, so it's a longer appointment than usual. How have your blood sugar readings been at home? Patient: They've been running high in the mornings, around twelve. Clinician: And later in the day? Patient: Better — seven or eight before my evening meal. Clinician: So it's the mornings specifically. How often are you testing? Patient: Most days, first thing. Clinician: Are you checking your feet regularly? Patient: I try to, but I've noticed some numbness in my toes lately. Clinician: When did you first notice that? Patient: Perhaps two months ago. It's not painful, just less feeling. Clinician: Both feet, or one? Patient: Both, I think. Clinician: Thank you — that's important and I'm glad you mentioned it. Any cuts or sores you've found down there? Patient: None that I've seen. Clinician: How is your weight? Patient: I've actually lost about four kilos without trying. Clinician: Over what period? Patient: Since the spring. Clinician: And are you drinking more than usual? Patient: Yes, I'm always thirsty and getting up at night to pass urine. Clinician: How many times a night? Patient: Twice, sometimes three. Clinician: Are you taking all your medication? Patient: Yes, metformin twice a day with food. Clinician: Any side effects from it? Patient: It upset my stomach at first, but that settled. Clinician: Good. How is your eyesight? Patient: Fine, and I had the retinal photographs in June. Clinician: And your last blood pressure reading? Patient: The machine at the chemist said it was a bit high. Clinician: We'll check it properly today. Tell me about your diet — has anything changed? Patient: Not really. My wife does the cooking and it's much the same as always. Clinician: And activity? Patient: I walk to the allotment most days, about fifteen minutes each way. Clinician: That's worth more than people think. Do you smoke? Patient: I stopped years ago. Clinician: Any alcohol? Patient: A glass of wine at the weekend. Clinician: Right. Today I'd like to take blood for your HbA1c and kidney function, check your blood pressure sitting and standing, and examine both feet properly — pulses and sensation. Patient: Is the numbness serious? Clinician: It's a common complication and it's the reason we examine feet every year, but it needs looking at rather than worrying about. The most important thing it changes is your footcare: check your feet daily, including between the toes and the soles with a mirror, and never walk barefoot indoors, because you may not feel a small injury. Patient: I hadn't thought of that. Clinician: Most people haven't until somebody says it. Patient: And the morning readings? Clinician: That pattern usually has a reason, and once we have the blood results we'll know whether it's the dose, the timing, or something happening overnight. I'd rather change one thing at a time and see what it does. Patient: Do I need to see anyone else? Clinician: Two things. I'd like the podiatrist to see you within the next few weeks, because with reduced sensation the annual foot check becomes a more regular one. And I'd like you to have a session with the diabetes nurse about the morning readings — she has more time than I do and she is better at this than I am. Patient: Is my diabetes getting worse? Clinician: It's changing, which is different. Type 2 diabetes moves over the years for almost everybody, and needing a different dose or a different tablet after several years is expected rather than a failure on your part. Patient: My brother ended up on insulin. Clinician: Some people do, eventually, and it is a treatment rather than a punishment. But we're a long way from that conversation today. Let me get the bloods done first, and I'll ring you myself with the results next week rather than leaving you to chase them.",
      "gaps": [
        {
          "id": "g1",
          "label": "Morning blood sugar readings are",
          "answer": "high"
        },
        {
          "id": "g2",
          "label": "Approximate morning reading",
          "answer": "twelve"
        },
        {
          "id": "g3",
          "label": "Foot symptom",
          "answer": "numbness"
        },
        {
          "id": "g4",
          "label": "Numbness first noticed",
          "answer": "two months"
        },
        {
          "id": "g5",
          "label": "Weight lost, unintentionally",
          "answer": "four kilos"
        },
        {
          "id": "g6",
          "label": "Fluid symptom",
          "answer": "thirsty"
        },
        {
          "id": "g7",
          "label": "Times up at night to pass urine",
          "answer": "twice"
        },
        {
          "id": "g8",
          "label": "Medication taken twice daily with food",
          "answer": "metformin"
        },
        {
          "id": "g9",
          "label": "Retinal photographs done in",
          "answer": "June"
        },
        {
          "id": "g10",
          "label": "Walks to the allotment, each way",
          "answer": "fifteen minutes"
        },
        {
          "id": "g11",
          "label": "Bloods today: HbA1c and",
          "answer": "kidney function",
          "acceptExhaustive": true
        },
        {
          "id": "g12",
          "label": "Advice: never walk indoors",
          "answer": "barefoot"
        }
      ]
    },
    "guidanceNote": "Numbers spoken aloud can be tricky; jot the figure as you hear it and check the unit the speaker uses."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-knee-pain-consultation",
    "title": "Part A — Knee pain consultation",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: Good morning, what's brought you in today? Patient: It's my right knee. It's been aching for about three weeks now, especially when I climb stairs. Clinician: Is going down as bad as going up? Patient: Down is worse, actually. Clinician: Did anything start it off? Patient: Not that I can pin down. I did start running again in the spring after a long gap. Clinician: How far were you running? Patient: I went from nothing to about five kilometres, three times a week. Clinician: That's quite a jump, and it's a common story in this room. Where exactly in the knee do you feel it? Patient: Around the front, under the kneecap. Clinician: Can you point with one finger, or is it more spread out? Patient: More spread out. I'd have to use my whole hand. Clinician: And is there any swelling? Patient: A little, mostly in the evenings. Clinician: Does the knee ever lock, or give way? Patient: It's never locked. It felt like it might give way once on a kerb, but it didn't. Clinician: Any clicking or grinding? Patient: A bit of clicking when I stand up from a low chair. Clinician: Is it stiff in the mornings? Patient: For about ten minutes, then it eases. Clinician: What have you taken for it? Patient: I've been taking paracetamol, but it only helps a bit. Clinician: How much, and how often? Patient: Two tablets, maybe twice a day when it's bad. Clinician: Have you tried anything else — ice, a support? Patient: I put a bag of ice on it after work sometimes. Clinician: Does that help? Patient: More than the tablets, if I'm honest. Clinician: What do you do for a living? Patient: I'm a teacher, so I'm up and down all day and there are two flights to my classroom. Clinician: And has the running stopped? Patient: I've cut it right back to once a week. Clinician: Any problems with the other knee, or with your hips or back? Patient: No, nothing. Clinician: Any previous injury to that knee? Patient: I twisted it playing hockey at school, but that was thirty years ago. Clinician: Right. I'm going to look at both knees, compare them, and test a few movements — some of that will reproduce the pain, which is useful rather than a bad sign. Patient: Will I need a scan? Clinician: Almost certainly not. Everything you've described fits a problem with how the kneecap is loaded, and the treatment for that is strengthening rather than imaging. A scan at this stage tends to find things that were always there and worry everybody. Patient: So I can keep running? Clinician: Eventually, and probably yes — but we build the hip and thigh strength first, and increase the distance far more slowly than last time. Patient: How long will it take? Clinician: The honest answer is that this kind of knee pain is slow — most people are substantially better by three months, and the ones who do the exercises get there sooner. It is not the answer anybody wants. Patient: Should I stop teaching on the stairs? Clinician: No, and I'd rather you didn't rearrange your life around it. Take the stairs at a pace that doesn't provoke it, and use the handrail going down for now. Patient: Is there anything I shouldn't do? Clinician: Deep squats and lunges, for the moment, and no hills — going downhill loads the front of the knee more than anything else you'll do. Patient: What about the ice? Clinician: Carry on. Fifteen minutes, a towel between the ice and the skin, and after activity rather than before. I'll refer you to physiotherapy today, and the wait is about four weeks, so I'll give you two exercises to start on now rather than have you wait doing nothing.",
      "gaps": [
        {
          "id": "g1",
          "label": "Affected joint",
          "answer": "right knee"
        },
        {
          "id": "g2",
          "label": "Duration of symptoms",
          "answer": "three weeks"
        },
        {
          "id": "g3",
          "label": "Clicking when standing from a low",
          "answer": "chair"
        },
        {
          "id": "g4",
          "label": "Restarted running in the",
          "answer": "spring"
        },
        {
          "id": "g5",
          "label": "Weekly running distance reached",
          "answer": "five kilometres"
        },
        {
          "id": "g6",
          "label": "Pain felt under the",
          "answer": "kneecap"
        },
        {
          "id": "g7",
          "label": "Swelling occurs mostly in the",
          "answer": "evenings"
        },
        {
          "id": "g8",
          "label": "Knee has never",
          "answer": "locked"
        },
        {
          "id": "g9",
          "label": "Morning stiffness lasts",
          "answer": "ten minutes"
        },
        {
          "id": "g10",
          "label": "Current medication",
          "answer": "paracetamol"
        },
        {
          "id": "g11",
          "label": "Helps more than the tablets",
          "answer": "ice"
        },
        {
          "id": "g12",
          "label": "Occupation",
          "answer": "teacher"
        }
      ]
    },
    "guidanceNote": "Write only what you hear. Spelling and exact detail matter — note key clinical facts as they are said."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-lower-back-pain",
    "title": "Part A — Lower back pain",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "echo"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "audioScript": "Clinician: Come through. How did the back pain begin? Patient: I was lifting a heavy box at work and felt a sudden pull. Clinician: Were you turning at the time, or lifting straight? Patient: Turning, I think. I was passing it sideways to a colleague. Clinician: And when was that? Patient: Four days ago. Clinician: Did you have to stop work? Patient: I finished the shift, but I've not been in since. Clinician: Does the pain travel anywhere? Patient: Yes, it shoots down the back of my left leg to the knee. Clinician: Does it go past the knee at all — into the calf or the foot? Patient: No, it stops around the knee. Clinician: Any numbness or weakness? Patient: My foot feels a bit tingly. Clinician: Which part of the foot? Patient: The outer side, mostly. Clinician: Can you stand on your toes on that leg? Patient: I think so. I've not tried. Clinician: We'll check it. Any problems passing water, or any numbness around the saddle area — between the legs? Patient: No, nothing like that. Clinician: Good, and those are the questions I ask everybody with back pain. What helps? Patient: Lying flat eases it a little. Clinician: And what makes it worse? Patient: Sitting, and getting up out of a chair. Coughing sets it off too. Clinician: How is it at night? Patient: I get to sleep, but turning over wakes me. Clinician: Have you taken anything? Patient: Paracetamol and some ibuprofen I had in the cupboard. Clinician: Any stomach trouble with the ibuprofen? Patient: No. Clinician: How much are you moving about during the day? Patient: Not much, to be honest. I've been on the sofa. Clinician: That's the part I'd change. Bed rest was the advice years ago and we now know it slows recovery — the muscles that support the back weaken quickly, and weak muscles hurt more. Patient: So I should be walking? Clinician: Short walks, several times a day, at whatever pace is comfortable, and building up. Not a route march. Patient: What about work? Patient's job involves lifting? Clinician: Tell me what the job is. Patient: I'm a delivery driver, so it's lifting and a lot of sitting. Clinician: Then a phased return with a lifting restriction is what I'd write, rather than signing you off completely. Have you had back trouble before? Patient: Once, about five years ago, and it settled on its own in a month. Clinician: That's a good sign for this one too. Most episodes like yours improve substantially within six weeks. I'm going to examine your legs — power, reflexes and sensation — and then we'll agree a plan. Patient: Do I need an X-ray? Clinician: No, and I'd advise against one. An X-ray of the back shows changes in almost everybody over thirty-five, most of which have nothing to do with the pain, and people who have one tend to do worse rather than better because of what they are told about it. Patient: My colleague had a scan. Clinician: Scans have their place, and the place is where there are warning signs — the ones I asked you about earlier, or a leg that is genuinely weakening. You have none of those. Patient: What about a referral to physiotherapy? Clinician: Yes, and I'll do that today. In the meantime, the two things that matter most are keeping moving and taking the painkillers regularly rather than waiting until it is bad — regular doses let you move, and the moving is the treatment. Patient: How long before I can drive properly again? Clinician: Most people manage short journeys within a week or two. Break them up, and put a small rolled towel behind the small of your back.",
      "gaps": [
        {
          "id": "g1",
          "label": "Injured while lifting a heavy",
          "answer": "box"
        },
        {
          "id": "g2",
          "label": "Injury occurred this long ago",
          "answer": "four days"
        },
        {
          "id": "g3",
          "label": "Pain radiates down the back of the",
          "answer": "left leg",
          "acceptExhaustive": true
        },
        {
          "id": "g4",
          "label": "Pain stops at the",
          "answer": "knee"
        },
        {
          "id": "g5",
          "label": "Sensory symptom in the foot",
          "answer": "tingly"
        },
        {
          "id": "g6",
          "label": "Tingling on the foot's",
          "answer": "outer side",
          "acceptExhaustive": true
        },
        {
          "id": "g7",
          "label": "Relieving factor",
          "answer": "lying flat"
        },
        {
          "id": "g8",
          "label": "Worse when",
          "answer": "sitting"
        },
        {
          "id": "g9",
          "label": "Also sets it off",
          "answer": "coughing"
        },
        {
          "id": "g10",
          "label": "Medication taken with paracetamol",
          "answer": "ibuprofen"
        },
        {
          "id": "g11",
          "label": "Occupation",
          "answer": "delivery driver",
          "acceptExhaustive": true
        },
        {
          "id": "g12",
          "label": "Previous episode settled within",
          "answer": "a month"
        }
      ]
    },
    "guidanceNote": "Onset questions often get a 'how' answer and a 'when' answer separately; capture each in its own gap."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-medication-side-effect",
    "title": "Part A — Medication side-effect",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "STRETCH",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "echo"
        }
      ],
      "audioScript": "Clinician: You mentioned a problem since starting the new tablets. Patient: Yes, since the blood pressure medication I've had a dry cough. Clinician: Tell me about the cough. Is it bringing anything up? Patient: Nothing at all. It's just a tickle at the back of my throat that I can't clear. Clinician: When does it bother you most? Patient: It's worse at night and keeps me awake. Clinician: Is your partner losing sleep as well? Patient: She's moved into the spare room, which tells you something. Clinician: How long have you been taking it? Patient: About three weeks now. Clinician: And did the cough start before or after? Patient: About a week after I started. Clinician: Have you had a cold, or any sore throat or fever alongside it? Patient: No, I've been perfectly well otherwise. Clinician: Any wheeze or breathlessness? Patient: No wheeze. I'm no more breathless than usual. Clinician: Any swelling? Patient: My ankles have looked a little puffy. Clinician: Both ankles, and worse at the end of the day? Patient: Yes, both, and worse by the evening. Clinician: Have you stopped the tablet at all? Patient: No, I've kept taking it as prescribed. Clinician: I'm glad — stopping a blood pressure tablet on your own is the one thing I'd ask you not to do. Do you know its name? Patient: It begins with an R, I think. It's on the box at home. Clinician: We'll look it up on the record in a moment. Are you taking anything else? Patient: A statin, and a water tablet in the morning. Clinician: Any new medicines apart from the blood pressure one? Patient: No, those two have been the same for years. Clinician: Do you smoke? Patient: Never have. Clinician: Any heartburn or acid coming up at night? Patient: A little, sometimes. Clinician: That can cause a night cough too, which is why I ask. Have you been checking your blood pressure at home? Patient: Yes, my daughter bought me a machine. It's been running about 130 over 80. Clinician: That's a good number and it means the tablet is doing its job, which is worth knowing before we change anything. Patient: So what happens now? Clinician: A dry cough is a well-recognised effect of that group of drugs. It isn't dangerous, but if it's keeping you awake it's not something to put up with either. There's an alternative that works in a very similar way and almost never causes it, so my suggestion is that we switch you across and see the cough settle over two to three weeks. Patient: And if it doesn't settle? Clinician: Then it wasn't the tablet, and we look further — at the reflux, and at your chest. Either way we'll know. I'll arrange a blood test a fortnight after the switch, because the new one needs the kidneys checking, and I'd like to see you in a month. Patient: Will the new one lower my blood pressure as well? Clinician: Just as well, in most people, and it works on the same system by a slightly different route — which is why it doesn't cause the cough. Patient: Any side effects with it? Clinician: Dizziness in the first week or two, particularly on standing up quickly, and that usually settles. Stand up slowly for the first fortnight, especially at night. Patient: Should I stop the old one first? Clinician: Stop the old one tomorrow morning and start the new one the same day. There's no gap and no tailing off with these. Patient: And the cough? Clinician: It nearly always settles within two to three weeks, though I'll warn you that in a small number of people it takes longer, which is frustrating rather than dangerous. Patient: My wife will be pleased either way. Clinician: I'll put a note on your record so that nobody restarts the old one by accident, and I'll mark it as a side effect rather than an allergy, because they mean different things.",
      "gaps": [
        {
          "id": "g1",
          "label": "Suspected cause",
          "answer": "blood pressure medication"
        },
        {
          "id": "g2",
          "label": "Main side-effect",
          "answer": "dry cough"
        },
        {
          "id": "g3",
          "label": "Cough worse at",
          "answer": "night"
        },
        {
          "id": "g4",
          "label": "Duration on the drug",
          "answer": "three weeks"
        },
        {
          "id": "g5",
          "label": "Cough began after starting, by about",
          "answer": "a week"
        },
        {
          "id": "g6",
          "label": "Other sign: ankles look",
          "answer": "puffy"
        },
        {
          "id": "g7",
          "label": "Ankle swelling worse by the",
          "answer": "evening"
        },
        {
          "id": "g8",
          "label": "Name of drug begins with the letter",
          "answer": "R"
        },
        {
          "id": "g9",
          "label": "Other regular medicines: a statin and a",
          "answer": "water tablet",
          "acceptExhaustive": true
        },
        {
          "id": "g10",
          "label": "Home blood pressure reading",
          "answer": "130 over 80",
          "acceptExhaustive": true
        },
        {
          "id": "g11",
          "label": "Plan: switch to an",
          "answer": "alternative"
        },
        {
          "id": "g12",
          "label": "Blood test after the switch to check the",
          "answer": "kidneys"
        }
      ]
    },
    "guidanceNote": "When a symptom is linked to a drug, listen for the medication name spoken just before the complaint."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-mental-health-check-in",
    "title": "Part A — Mental-health check-in",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "STRETCH",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "aria"
        }
      ],
      "audioScript": "Clinician: Thank you for coming in. We've got a bit longer today, so take your time. How has your mood been over the past few weeks? Patient: Quite low, honestly, and I've lost interest in things I used to enjoy. Clinician: What sort of things? Patient: I used to sing in a choir on Thursdays. I've not been since May. Clinician: And is that because of time, or because you don't want to? Patient: I just can't face it. Clinician: How long would you say this has been going on? Patient: It crept up. Six months, perhaps, but worse since the summer. Clinician: Was there anything happening around then? Patient: My mother died in July. Clinician: I'm sorry. That's a very significant thing to be carrying. How is your sleep? Patient: I wake very early, around four, and can't get back to sleep. Clinician: And getting off in the first place? Patient: That part's alright. It's the early waking. Clinician: And your appetite? Patient: I'm barely eating, food just doesn't appeal. Clinician: Has your weight changed? Patient: My clothes are looser. I've not weighed myself. Clinician: How is your energy and concentration? Patient: I feel exhausted, and I can't focus at work. I read the same email four times. Clinician: Are you still managing to go in? Patient: Every day, but I'm getting through rather than doing it well. Clinician: Does the day have a shape to it — better mornings, better evenings? Patient: Mornings are the worst by a long way. Clinician: That's a pattern I recognise and it's worth noting. Are you drinking more than you used to? Patient: A bit more wine in the evening. Three or four glasses, most nights. Clinician: Thank you for being straight with me about that. Are you getting any support — anyone you talk to? Patient: My sister rings, but I don't tell her much. Clinician: I'd like to ask you something directly, and I ask everybody. Have you had any thoughts of harming yourself? Patient: No. Nothing like that. I want to feel better, not disappear. Clinician: I'm glad, and thank you for answering. Have you felt like this before? Patient: Once, in my twenties. I had counselling and it helped. Clinician: Did you take medication then? Patient: No, just the talking. Clinician: That's useful, because it tells us something worked for you. Here's what I'd suggest. First, a referral for talking therapy, which you can also refer yourself to and which has a shorter wait than people expect. Second, a conversation about medication — not today, but worth thinking about given how long this has been going on. And third, the alcohol, because it makes early waking worse and it is working against everything else we do. Patient: I don't want to be on tablets for years. Clinician: That's a reasonable thing to say and it's worth talking about properly rather than deciding now. Most people who take them take them for months rather than years, and stopping is planned rather than abrupt. Patient: And would they change who I am? Clinician: No. The commonest description I hear afterwards is that things stopped feeling quite so heavy, not that anything about the person changed. Patient: What do I do in the meantime? Clinician: Two small things, and I mean small. Get outside in daylight in the first part of the day, even for ten minutes, because it helps the early waking more than anything else I could prescribe. And tell your sister a little more than you've been telling her. Patient: She'd worry. Clinician: She's already worrying, and at present she's doing it without knowing what about. I'd like to see you again in two weeks, and sooner if anything changes.",
      "gaps": [
        {
          "id": "g1",
          "label": "Mood",
          "answer": "low"
        },
        {
          "id": "g2",
          "label": "Has lost",
          "answer": "interest"
        },
        {
          "id": "g3",
          "label": "Stopped attending since May",
          "answer": "choir"
        },
        {
          "id": "g4",
          "label": "Symptoms began around",
          "answer": "six months"
        },
        {
          "id": "g5",
          "label": "Bereavement in",
          "answer": "July"
        },
        {
          "id": "g6",
          "label": "Wakes very early, at around",
          "answer": "four"
        },
        {
          "id": "g7",
          "label": "Appetite",
          "answer": "barely eating"
        },
        {
          "id": "g8",
          "label": "Clothes are now",
          "answer": "looser"
        },
        {
          "id": "g9",
          "label": "Worst time of day",
          "answer": "mornings"
        },
        {
          "id": "g10",
          "label": "Glasses of wine most nights",
          "answer": "three or four"
        },
        {
          "id": "g11",
          "label": "Previous episode treated with",
          "answer": "counselling"
        },
        {
          "id": "g12",
          "label": "Plan: referral for",
          "answer": "talking therapy",
          "acceptExhaustive": true
        }
      ]
    },
    "guidanceNote": "Patients may speak softly about low mood; focus on the single descriptive word that fits each note field."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-migraine-review",
    "title": "Part A — Migraine review",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "echo"
        },
        {
          "role": "Patient",
          "voice": "aria"
        }
      ],
      "audioScript": "Clinician: Come in. This is a review of the headaches rather than a new problem, so I want to go through how things have changed. How often are you getting these headaches now? Patient: About three times a week, usually in the afternoon. Clinician: And when we last spoke? Patient: Maybe once a fortnight. Clinician: So considerably more frequent. Has anything changed in that time — work, sleep, anything at all? Patient: I changed jobs in the spring. It's busier and I skip lunch most days. Clinician: That's worth holding on to; we'll come back to it. Where exactly do you feel them? Patient: Mostly behind my right eye, and it throbs. Clinician: Always the same side? Patient: Nearly always the right. Once or twice it's been the left. Clinician: How long does one last if you don't treat it? Patient: The best part of a day. Clinician: Anything make it worse? Patient: Bright light makes it much worse, so I have to lie down in a dark room. Clinician: And noise? Patient: Yes, that too. I can't have the television on. Clinician: Any sickness with them? Patient: I feel nauseated, and I've been sick twice. Clinician: Do you get any warning before one starts? Patient: Yes, I sometimes see flashing lines about ten minutes beforehand. Clinician: How long do those last? Patient: Twenty minutes or so, then the headache comes. Clinician: Any weakness, numbness or difficulty finding words with them? Patient: No, nothing like that. Clinician: Good, and that's a question I'll keep asking. What are you taking? Patient: Ibuprofen, usually two, sometimes more. Clinician: How many days a month would you say you take a painkiller of any kind? Patient: I've not counted. Fifteen, perhaps. Clinician: That's the number I most wanted, and it changes the plan. Taking painkillers on more than about ten days a month can start causing headaches in its own right — it's called medication-overuse headache, and it's very common and very reversible. Patient: So the tablets are making it worse? Clinician: They may be part of it. That doesn't mean you did anything wrong; it's an easy trap and it's rarely explained. What about triptans — have you tried one? Patient: No, nobody's offered. Clinician: We'll talk about that today. Are you keeping a diary? Patient: I started one and gave up. Clinician: Start again if you can, even roughly — date, how bad, what you took. It's the single most useful thing you can bring to the next appointment. What about your caffeine? Patient: Three or four coffees, mostly in the morning. Clinician: And water? Patient: Not much. Clinician: Right, here's what I'd suggest. First, eat lunch — skipped meals are one of the commonest triggers and it's the easiest thing on this list. Second, a triptan to take early in the attack rather than waiting. Third, we plan a reduction in the routine painkillers, which usually makes things briefly worse before it makes them better. Patient: How much better could this get? Clinician: For most people in your position, a great deal, and within about two months. Patient: Is there anything I should avoid? Clinician: I'd be careful with the idea of trigger lists, because people end up avoiding half their diet on very little evidence. The two that genuinely matter for most people are irregular meals and irregular sleep — including lie-ins at the weekend, which catch a lot of people out. Patient: I always sleep in on Saturday. Clinician: Then that is worth an experiment for a month. Patient: Should I be worried about anything serious? Clinician: Your description is typical, and typical is reassuring. The things that would concern me are a headache that comes on like a thunderclap within seconds, one that is worse first thing and with vomiting every morning, or any weakness or speech difficulty that doesn't clear. None of those is what you have. Patient: That's a relief. Clinician: I'll write the prescription and put a follow-up in for eight weeks. Bring the diary, even a scruffy one.",
      "gaps": [
        {
          "id": "g1",
          "label": "Headaches per week now",
          "answer": "three"
        },
        {
          "id": "g2",
          "label": "Usual time of day",
          "answer": "afternoon"
        },
        {
          "id": "g3",
          "label": "Frequency at last review",
          "answer": "once a fortnight",
          "acceptExhaustive": true
        },
        {
          "id": "g4",
          "label": "Changed this in the spring",
          "answer": "jobs"
        },
        {
          "id": "g5",
          "label": "Skips this most days",
          "answer": "lunch"
        },
        {
          "id": "g6",
          "label": "Pain felt behind the",
          "answer": "right eye",
          "acceptExhaustive": true
        },
        {
          "id": "g7",
          "label": "Pain quality",
          "answer": "throbs"
        },
        {
          "id": "g8",
          "label": "Aggravating factor",
          "answer": "bright light"
        },
        {
          "id": "g9",
          "label": "Warning sign before attack",
          "answer": "flashing lines",
          "acceptExhaustive": true
        },
        {
          "id": "g10",
          "label": "Warning appears this long beforehand",
          "answer": "ten minutes"
        },
        {
          "id": "g11",
          "label": "Days a month taking a painkiller",
          "answer": "fifteen"
        },
        {
          "id": "g12",
          "label": "Treatment to be offered",
          "answer": "a triptan"
        }
      ]
    },
    "guidanceNote": "Frequency answers are often a number plus a time unit; write the full phrase rather than just the number."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-new-skin-rash",
    "title": "Part A — New skin rash",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "verse"
        },
        {
          "role": "Patient",
          "voice": "aria"
        }
      ],
      "audioScript": "Clinician: Come in and sit down. Tell me about the rash. Patient: It appeared on my forearms three days ago. Clinician: Both arms at once? Patient: Yes, both, and it came up overnight. Clinician: What does it look like? Patient: Small red bumps that are very itchy. Clinician: Are there any blisters, or is the skin broken anywhere? Patient: No blisters. It's broken where I've scratched it. Clinician: How bad is the itch — is it keeping you awake? Patient: It's worst in the evening, and yes, it woke me twice last night. Clinician: Have you used anything new recently? Patient: I started a new laundry detergent last week. Clinician: Anything else new — soap, cream, jewellery, a new job? Patient: No, nothing else. Clinician: Any new medicines? Patient: I finished a course of antibiotics about ten days ago. Clinician: Which one, do you remember? Patient: Something for a chest infection. It'll be on the record. Clinician: We'll check. Is it spreading? Patient: Yes, it's now reaching my neck. Clinician: Anywhere else — trunk, legs, face? Patient: Not so far. Clinician: Any swelling of the lips, tongue or eyes? Patient: No. Clinician: Any wheeze, or any difficulty breathing or swallowing? Patient: None at all. Clinician: Good, and I ask because those would change what we do this afternoon rather than next week. Any fever, aches, or feeling generally unwell? Patient: I've felt fine in myself. Clinician: Has anyone else at home got anything similar? Patient: No, just me. Clinician: Any history of eczema, asthma or hay fever, in you or the family? Patient: I had eczema as a child, behind my knees. Clinician: That's useful. Have you put anything on it? Patient: A moisturiser I had in the cupboard, and some antihistamine tablets from the chemist. Clinician: Are the tablets helping? Patient: A little with the itch. Clinician: Are they the drowsy sort or the non-drowsy? Patient: Non-drowsy, I think. Clinician: We may use a drowsy one at night, which is often what breaks the scratching cycle. Right, let me look at your arms and neck properly, and I'll want to see the areas you haven't mentioned as well. Patient: What do you think it is? Clinician: The picture is most consistent with a contact reaction — the timing fits the detergent, and the forearms are exactly where sleeves and bedding sit. But the antibiotic is close enough in time that I don't want to dismiss it. Patient: So what do I do? Clinician: Change one thing at a time, or we'll never know which mattered. Rewash everything in a non-biological detergent with an extra rinse, keep the moisturiser going generously, and I'll give you a short course of a steroid cream for the worst areas. Patient: And if it doesn't settle? Clinician: Come back in a fortnight. If it's still there, or if it spreads further, we'd think about patch testing, which is how these are properly identified rather than guessed at. Patient: Should I stop work? Clinician: What is it you do? Patient: I'm a hairdresser. Clinician: Then that's worth knowing, because the hands and forearms of hairdressers see a great deal, and gloves matter. Are you wearing them? Patient: For colours, not for washing. Clinician: I'd wear them for both, and I'd choose the non-latex ones. Patient: Nobody has ever said. Clinician: It's one of the commonest occupational skin problems there is, and it's far easier to prevent than to treat once the skin is damaged. Patient: How long before it clears? Clinician: With the cream and the detergent change, most of it should settle within a week to ten days, and the itch usually goes before the redness does — so don't judge it by the mirror alone. Patient: And the scratching? Clinician: Keep your nails short, and use the moisturiser cold from the fridge, which takes the edge off better than anything.",
      "gaps": [
        {
          "id": "g1",
          "label": "Site of rash",
          "answer": "forearms"
        },
        {
          "id": "g2",
          "label": "Rash appeared this long ago",
          "answer": "three days"
        },
        {
          "id": "g3",
          "label": "Appearance",
          "answer": "small red bumps"
        },
        {
          "id": "g4",
          "label": "Main symptom",
          "answer": "itchy"
        },
        {
          "id": "g5",
          "label": "Itch is worst in the",
          "answer": "evening"
        },
        {
          "id": "g6",
          "label": "Possible trigger started last week",
          "answer": "laundry detergent",
          "acceptExhaustive": true
        },
        {
          "id": "g7",
          "label": "Finished ten days ago",
          "answer": "antibiotics"
        },
        {
          "id": "g8",
          "label": "Rash now spreading to the",
          "answer": "neck"
        },
        {
          "id": "g9",
          "label": "Childhood skin condition",
          "answer": "eczema"
        },
        {
          "id": "g10",
          "label": "Bought from the chemist",
          "answer": "antihistamine tablets",
          "acceptExhaustive": true
        },
        {
          "id": "g11",
          "label": "To be prescribed for worst areas",
          "answer": "steroid cream",
          "acceptExhaustive": true
        },
        {
          "id": "g12",
          "label": "If it persists, may need",
          "answer": "patch testing",
          "acceptExhaustive": true
        }
      ]
    },
    "guidanceNote": "Descriptions of appearance often use two adjectives; write the short phrase exactly as spoken."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-ongoing-sleep-problem",
    "title": "Part A — Ongoing sleep problem",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "STRETCH",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "echo"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: Tell me about your sleep difficulty. Patient: I lie awake for at least an hour before falling asleep. Clinician: And once you're off, do you stay asleep? Patient: Mostly, but I'm up once to the bathroom. Clinician: What time do you go to bed, and what time do you get up? Patient: I go up at half past nine and I'm up at seven. Clinician: So you're in bed for a good nine and a half hours. Patient: I'd never thought of it that way. Clinician: It matters more than it sounds, and we'll come back to it. How long has this gone on? Patient: For about three months now. Clinician: Did anything happen around then? Patient: I was made redundant in June. Clinician: I'm sorry to hear that. What's on your mind at night? Patient: I keep worrying about money. Clinician: Does the worrying start when you get into bed, or is it there through the evening? Patient: It's much worse once the light's off. Clinician: How do you feel during the day? Patient: I'm drowsy and I nap in the afternoon. Clinician: How long is the nap? Patient: Sixty minutes, sometimes longer. Clinician: And how do you feel on the days you don't nap? Patient: Rough, but I sleep better that night. Clinician: You've just answered one of my questions for me. Any caffeine in the evening? Patient: I usually have coffee after dinner. Clinician: How many during the day altogether? Patient: Four or five. Clinician: Alcohol? Patient: Two beers most evenings. It helps me drop off. Clinician: It does help people drop off, and then it fragments the second half of the night, which is why people wake at three. Patient: That's exactly when I wake on the nights I do. Clinician: What do you do when you can't sleep? Patient: I lie there and try. Sometimes I put the television on in the bedroom. Clinician: How is your mood in all this? Patient: Flat, I'd say. Not desperate. Clinician: Any thoughts of harming yourself? Patient: No, none. Clinician: Thank you for answering. Are you snoring, or has anyone said you stop breathing at night? Patient: My wife says I snore, but nothing else. Clinician: Right. I'm not going to offer you a sleeping tablet, and I'll explain why. They work for a fortnight and then stop working, and coming off them is harder than the original problem. What actually works, and works lastingly, is a short course of cognitive behavioural therapy for insomnia, and I can refer you today. Patient: That sounds like a lot for not sleeping. Clinician: It's four to six sessions, and the evidence for it is better than for anything I could prescribe. In the meantime, three things: get up at the same time every day whatever kind of night you had, stop the nap, and get out of bed if you're awake more than twenty minutes rather than lying there. Patient: Won't cutting out the nap just make me more tired? Clinician: For about a week, yes, and then it usually improves, because the nap is borrowing from the night. Patient: And the beers? Clinician: I'd rather they moved away from bedtime than disappeared. Two hours before you go up makes a real difference to the second half of the night. Patient: What about the coffee? Clinician: Nothing after two o'clock. Caffeine hangs about far longer than people realise. Patient: Is any of this going to help with the money worry? Clinician: Not directly, and I won't pretend otherwise. But there is a technique in the course that deals with exactly that — setting aside twenty minutes earlier in the evening to write the worry down, so that it has had its turn before the light goes off. It sounds far too simple and it is one of the more effective parts. I'll also give you the details of a free debt advice service, which is not a medical treatment but may do more for your sleep than I can.",
      "gaps": [
        {
          "id": "g1",
          "label": "Takes at least this long to fall asleep",
          "answer": "an hour"
        },
        {
          "id": "g2",
          "label": "Bedtime",
          "answer": "half past nine"
        },
        {
          "id": "g3",
          "label": "Problem has lasted",
          "answer": "three months"
        },
        {
          "id": "g4",
          "label": "Made redundant in",
          "answer": "June"
        },
        {
          "id": "g5",
          "label": "Night worry",
          "answer": "money"
        },
        {
          "id": "g6",
          "label": "Daytime effect",
          "answer": "drowsy"
        },
        {
          "id": "g7",
          "label": "Afternoon nap lasts at least",
          "answer": "sixty minutes"
        },
        {
          "id": "g8",
          "label": "Evening habit",
          "answer": "coffee"
        },
        {
          "id": "g9",
          "label": "Coffees per day",
          "answer": "four or five"
        },
        {
          "id": "g10",
          "label": "Also drinks most evenings",
          "answer": "two beers"
        },
        {
          "id": "g11",
          "label": "Referral to be made for",
          "answer": "cognitive behavioural therapy"
        },
        {
          "id": "g12",
          "label": "Advice: get out of bed after",
          "answer": "twenty minutes"
        }
      ]
    },
    "guidanceNote": "Listen for the duration phrase that answers 'how long'; it is usually a number plus weeks or months."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-post-operative-wound-check",
    "title": "Part A — Post-operative wound check",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "aria"
        },
        {
          "role": "Patient",
          "voice": "verse"
        }
      ],
      "audioScript": "Clinician: Come through. How is the wound healing since your operation? Patient: The edges look red and it feels warm around the stitches. Clinician: Let's start at the beginning — when was the surgery? Patient: Nine days ago. Clinician: And what was done? Patient: A hernia repair, in the groin. Clinician: How was the wound in the first few days? Patient: Fine. It looked clean and it was settling. Clinician: So this is a change. When did you first notice it? Patient: The day before yesterday. Clinician: Any discharge? Patient: There's a little yellow fluid coming out. Clinician: How much — enough to mark the dressing, or more? Patient: It's soaking through by the evening. Clinician: Any smell? Patient: A bit, yes. Clinician: Is it painful? Patient: The pain has actually got worse over the last two days. Clinician: And before that it was improving? Patient: It was, day by day. Clinician: That pattern — improving and then turning — is the one I most want to hear about, so I'm glad you came in. Have you had a temperature? Patient: I felt feverish last night, and I was shivering at one point. Clinician: Did you measure it? Patient: No, I haven't got a thermometer. Clinician: We'll do that here. Any redness spreading away from the wound? Patient: There's a pink area going up towards my hip. Clinician: Has that got bigger since yesterday? Patient: I think so. Clinician: Have you drawn round it? Patient: No. Clinician: We'll do that today — a pen line around the edge is the simplest way to tell tomorrow whether it's advancing. Are you eating and drinking normally? Patient: I've gone off my food since yesterday. Clinician: Are you diabetic, or on any steroids? Patient: I'm not diabetic. No steroids. Clinician: Any antibiotics since the operation? Patient: They gave me one dose at the hospital, that's all. Clinician: Any allergies? Patient: Penicillin brings me out in a rash. Clinician: Thank you, that's important and I'll make sure it's on the record. What do you do for work? Patient: I'm a plumber, so I've been off. Clinician: Have you been lifting? Patient: I moved a boiler part on Monday. I know I shouldn't have. Clinician: Well, it's said now. Right — I'm going to take your temperature, pulse and blood pressure, look at the wound with the dressing off, and take a swab. Patient: Will I need to go back to hospital? Clinician: I don't know yet. What you've described — a wound that improved and then turned, with fever and spreading redness — is an infection until proven otherwise, and it needs antibiotics today rather than a wait-and-see. If the redness is advancing quickly or you're unwell in yourself, then yes, I'd send you back to the surgical team. Patient: Should I keep the dressing on? Clinician: Yes, and change it daily now that it's discharging, or sooner if it soaks through. Wash your hands before and after, and don't use anything on it apart from what we give you — no creams, no antiseptic from the cupboard. Patient: My wife wanted to put honey on it. Clinician: There are dressings that use honey, and they are not the jar from the kitchen. Patient: Understood. Clinician: I want to see you again in forty-eight hours whatever happens, and I'll book that before you leave. Patient: And the lifting? Clinician: Nothing heavier than a full kettle for the next fortnight. I know that's difficult with your job, and I'd rather write you a fit note than have you back here with the repair failed. Patient: How long until I can work properly? Clinician: For a physical job, usually four to six weeks, and this infection may add a week to that.",
      "gaps": [
        {
          "id": "g1",
          "label": "Operation performed",
          "answer": "hernia repair",
          "acceptExhaustive": true
        },
        {
          "id": "g2",
          "label": "Surgery took place this long ago",
          "answer": "nine days"
        },
        {
          "id": "g3",
          "label": "Wound edges look",
          "answer": "red"
        },
        {
          "id": "g4",
          "label": "Local sign around the stitches",
          "answer": "warm"
        },
        {
          "id": "g5",
          "label": "Discharge",
          "answer": "yellow fluid"
        },
        {
          "id": "g6",
          "label": "Pain trend over two days",
          "answer": "worse"
        },
        {
          "id": "g7",
          "label": "Systemic sign last night",
          "answer": "feverish"
        },
        {
          "id": "g8",
          "label": "Also experienced at one point",
          "answer": "shivering"
        },
        {
          "id": "g9",
          "label": "Pink area spreading towards the",
          "answer": "hip"
        },
        {
          "id": "g10",
          "label": "Allergy",
          "answer": "penicillin"
        },
        {
          "id": "g11",
          "label": "Occupation",
          "answer": "plumber"
        },
        {
          "id": "g12",
          "label": "To be taken from the wound today",
          "answer": "a swab"
        }
      ]
    },
    "guidanceNote": "Signs of infection are usually listed one after another; keep your pen moving so you don't miss the next one."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-suspected-urinary-infection",
    "title": "Part A — Suspected urinary infection",
    "prompt": "You will hear a consultation between a clinician and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Clinician",
          "voice": "aria"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "audioScript": "Clinician: Come in. What's been troubling you? Patient: It stings when I pass urine, and it started two days ago. Clinician: Is the stinging while you go, or afterwards? Patient: While I go, mostly, and a bit afterwards. Clinician: Are you going more often? Patient: Yes, I'm rushing to the toilet all the time. Clinician: And at night? Patient: Three times last night, which is unusual for me. Clinician: Have you noticed the urine itself? Patient: It looks cloudy and smells strong. Clinician: Any blood that you've seen? Patient: No, none. Clinician: Any pain elsewhere? Patient: A dull ache low in my tummy. Clinician: Any pain in your back, over the kidneys — either side, around here? Patient: No, nothing there. Clinician: Any fever? Patient: No, I don't think so. Clinician: Any shivering or feeling generally unwell? Patient: No, I feel well in myself apart from this. Clinician: That's a useful answer, because it separates a bladder infection from something that has gone further up. Have you had this before? Patient: Twice in the last year. Clinician: And what happened then? Patient: Antibiotics both times, three days each, and it cleared quickly. Clinician: Any allergies to antibiotics? Patient: Not that I know of. Clinician: Are you on any regular medicines? Patient: Just the pill. Clinician: Any chance you could be pregnant? Patient: No. Clinician: Are you drinking much? Patient: I've been drinking more water since it started. Clinician: That's sensible. Any vaginal discharge or irritation? Patient: No. Clinician: Any change of partner recently? Patient: No, same partner. Clinician: Thank you — those are questions I ask everybody with these symptoms, because a couple of other conditions look very similar. Have you tried anything from the chemist? Patient: One of those sachets you dissolve in water. Clinician: Did it help? Patient: Not really. Clinician: They rarely do much, and there's no good evidence for them. Right, here's what I think and what I'd do. Everything you've described fits a straightforward bladder infection, and with three typical symptoms and no fever the guidance supports treating without waiting for a test. Patient: So no sample? Clinician: I'd still like one, because you've had two this year and it's worth knowing exactly what's growing and what it's sensitive to. But I won't make you wait three days for the result before starting. Patient: How long will it take to work? Clinician: Most people feel considerably better within forty-eight hours. Finish the course even so. Patient: And if I don't improve? Clinician: If you're no better in two days, or if at any point you develop a fever, back pain or shivering, come back the same day — that combination means it has moved up to the kidney and it's treated differently. Patient: Is there anything I can do to stop this happening again? Clinician: A few things, and I'd be honest that the evidence for some of them is better than for others. Drinking more through the day genuinely helps, and there was a good trial of it. Emptying your bladder after sex helps some women. Cranberry products — the evidence is weak, and I wouldn't spend money on them. Patient: My mother swears by them. Clinician: A lot of people do. Patient: What if I get three or four a year? Clinician: Then there are other options, including a low dose taken preventively, or a supply kept at home to start yourself as soon as symptoms begin. We're not there yet with two, but it's worth knowing the road exists. Patient: Thank you. Clinician: I'll print the prescription now and the sample pot is at reception — you can leave it on your way out.",
      "gaps": [
        {
          "id": "g1",
          "label": "Pain on passing urine",
          "answer": "stings"
        },
        {
          "id": "g2",
          "label": "Symptoms started this long ago",
          "answer": "two days"
        },
        {
          "id": "g3",
          "label": "Passing urine more often, including at night",
          "answer": "three times"
        },
        {
          "id": "g4",
          "label": "Urine appearance",
          "answer": "cloudy"
        },
        {
          "id": "g5",
          "label": "Urine smell",
          "answer": "strong"
        },
        {
          "id": "g6",
          "label": "Blood in urine",
          "answer": "none"
        },
        {
          "id": "g7",
          "label": "Dull ache low in the",
          "answer": "tummy"
        },
        {
          "id": "g8",
          "label": "Sample pot to be collected at",
          "answer": "reception"
        },
        {
          "id": "g9",
          "label": "Previous infections in the last year",
          "answer": "twice"
        },
        {
          "id": "g10",
          "label": "Regular medicine",
          "answer": "the pill"
        },
        {
          "id": "g11",
          "label": "Bought from the chemist",
          "answer": "sachets"
        },
        {
          "id": "g12",
          "label": "Expected improvement within",
          "answer": "forty-eight hours"
        }
      ]
    },
    "guidanceNote": "Everyday words like 'stings' often stand in for clinical terms; record the patient's actual word."
  },

  // ── OET Form 1 (canonical ingest 2026-08-04) ──
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-f1-physiotherapy-consultation-lower-back-pain",
    "form": "form-1",
    "title": "OET Form 1 · Listening Part A — Physiotherapy consultation (lower back pain)",
    "prompt": "You will hear a physiotherapist speaking to a patient. For questions 1-12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Physiotherapist",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "audioScript": "Physiotherapist: Good morning, Mr Okafor. I'm Sarah, one of the physiotherapists here. Before we start, can I just check I've got the right notes — you were referred by Dr Whitfield at the surgery? Patient: That's right, yes. Physiotherapist: Lovely. So, what's brought you in today? Patient: Morning. It's my lower back — it's been playing up for about three weeks now. Physiotherapist: And can you remember how it started? Was it something in particular, or did it come on gradually? Patient: No, I know exactly. I was moving some boxes at work — I lift deliveries — and I felt a sharp twinge on the left side. Physiotherapist: A sharp twinge on the left. Did you have to stop what you were doing? Patient: I finished the shift, but I was very careful for the rest of it. Physiotherapist: And how would you describe the pain now, three weeks on? Patient: It's more of a dull ache most of the time, but it becomes sharp when I bend forward. Physiotherapist: So the ache is there in the background and the sharpness comes with a movement. Anything else that brings it on? Patient: Getting out of the car, sometimes. And turning over in bed. Physiotherapist: That's very typical, and it's useful to know. Does it travel anywhere — down into your leg, for instance? Patient: A little into my left buttock, but not past the knee. Physiotherapist: Not below the knee. That's an important one, so thank you. On a scale of nought to ten, where nought is nothing at all and ten is the worst pain you can imagine, how bad is it at its worst? Patient: Probably a seven, first thing in the morning. Physiotherapist: And does it ease as the day goes on? Patient: It does, once I've moved about a bit. By the afternoon it's much better, and then it creeps back in the evening. Physiotherapist: Is there anything that eases it? Patient: A hot water bottle helps, and the ibuprofen I bought. Physiotherapist: How often are you taking that? Patient: Twice a day, after meals. Physiotherapist: Good, and with food — that's sensible. Have you tried anything else? Patient: My wife bought me one of those support belts, but I haven't really used it. Physiotherapist: We can talk about that later; the short answer is that it's fine occasionally and less good as a habit. Now, a few questions I ask everybody. Any numbness, pins and needles, or trouble with your bladder or bowels? Patient: No, nothing like that. Physiotherapist: No weakness in either leg? Nothing giving way? Patient: No. Physiotherapist: That's reassuring, and it's what I'd expect from everything else you've told me. How's it affecting your sleep? Patient: I'm waking two or three times a night because I can't get comfortable. Physiotherapist: Are you getting back off again afterwards? Patient: Usually, yes, but I'm tired by the end of the week. Physiotherapist: That's very common and it does improve as the pain settles. And work? Patient: I've been on light duties, no heavy lifting, for the last week. Physiotherapist: How has your employer been about that? Patient: Fine, actually. My manager sorted it out the same day. Physiotherapist: That makes a real difference to recovery, more than people expect. Right — I'd like to have a look at how you move, and then I'll go through a plan with you.",
      "gaps": [
        {
          "id": "g1",
          "label": "Complaint has lasted for",
          "answer": "three weeks"
        },
        {
          "id": "g2",
          "label": "Activity when it started",
          "answer": "moving boxes",
          "variants": [
            "lifting boxes",
            "moving some boxes"
          ]
        },
        {
          "id": "g3",
          "label": "Felt a sharp ___ on the left",
          "answer": "twinge"
        },
        {
          "id": "g4",
          "label": "Usual pain is a dull ___",
          "answer": "ache"
        },
        {
          "id": "g5",
          "label": "Becomes sharp when he ___",
          "answer": "bends forward",
          "variants": [
            "bending forward"
          ]
        },
        {
          "id": "g6",
          "label": "Pain radiates into the left ___",
          "answer": "buttock"
        },
        {
          "id": "g7",
          "label": "Pain does not go past the ___",
          "answer": "knee"
        },
        {
          "id": "g8",
          "label": "Severity out of ten (worst)",
          "answer": "seven",
          "variants": [
            "7"
          ]
        },
        {
          "id": "g9",
          "label": "Relieving factor (heat source)",
          "answer": "hot water bottle"
        },
        {
          "id": "g10",
          "label": "Medication taken",
          "answer": "ibuprofen"
        },
        {
          "id": "g11",
          "label": "No bladder or ___ problems",
          "answer": "bowel",
          "variants": [
            "bowels"
          ]
        },
        {
          "id": "g12",
          "label": "Wakes this many times a night",
          "answer": "two or three times",
          "variants": [
            "2 or 3 times",
            "two to three times"
          ]
        }
      ]
    },
    "guidanceNote": "Answers are the exact words spoken; note-completion accepts minor spelling/spacing variation."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-f1-dietitian-consultation-type-2-diabetes",
    "form": "form-1",
    "title": "OET Form 1 · Listening Part A — Dietitian consultation (type 2 diabetes)",
    "prompt": "You will hear a dietitian speaking to a patient. For questions 1-12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Dietitian",
          "voice": "onyx"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "audioScript": "Dietitian: Hello, Mrs Petrova, I'm Tom, the dietitian. Do come in and sit down. Dr Ellis asked me to go through your eating with you — is that alright? Patient: Yes, of course. I was expecting it. Dietitian: Before we start, I want to say that this isn't a telling-off, and I'm not going to hand you a list of things you can't have. Patient: That's a relief, honestly. Dietitian: Your recent blood test showed your HbA1c was a little high — that's your average blood sugar over a few months, rather than on one particular day. Patient: My husband said it was like a report card. Dietitian: That's not a bad description, although it's a report card on the last three months rather than on you. Talk me through a typical day, starting from when you get up. Patient: For breakfast, two slices of white toast with jam, and a coffee with sugar. Dietitian: How many sugars? Patient: Two. Dietitian: Right. And is breakfast always about the same time? Patient: About eight, when my husband leaves. Dietitian: And lunch? Patient: Usually a cheese sandwich and a packet of crisps, sometimes a fizzy drink. Dietitian: Is that at home or out? Patient: At home. I'm not working now. Dietitian: And your evening meal? Patient: My husband cooks — rice or pasta with a sauce, and we quite often have a dessert. Dietitian: Does he do most of the cooking? Patient: All of it, since his knee operation left him at home. He enjoys it. Dietitian: That's worth knowing, because any change we make has to work for him too, or it won't last a fortnight. Do you snack between meals? Patient: Biscuits with my afternoon tea — two or three. Dietitian: And in the evening, in front of the television? Patient: No, not usually. Dietitian: How much water in a day? Patient: Not much — maybe two glasses. Dietitian: And activity — anything you do regularly? Patient: I walk the dog for about twenty minutes in the evening. Dietitian: Every day? Patient: Most days. He won't let me forget. Dietitian: That's a good start, and I'd rather build on something you already do than invent something new. Now, I could give you fifteen changes today and you'd manage about two of them, so let's not change everything at once. First, swap the white toast for wholegrain — same amount, same jam, just a different loaf. Second, bring the sugar in your coffee down gradually rather than all at once; most people find a quarter of a spoon at a time is unnoticeable. And third, replace that lunchtime fizzy drink with water. Patient: That sounds manageable. Dietitian: That's exactly the response I want. I'll see you in six weeks and we'll see how those three have gone before we add anything. Patient: Can I ask something before I go? My neighbour told me I should cut out all carbohydrate. Dietitian: I hear that a lot, and I'd rather you didn't. Cutting out a whole food group is very hard to keep up, and most people who try it are back where they started by the spring, often feeling they've failed at something they were never going to sustain. It's the amount and the type that matter far more than removing it altogether. Patient: That isn't what I expected you to say. Dietitian: I know. The other thing worth saying is that weight is not the only measure here — how you feel, how steady your energy is through the afternoon, how you sleep — all of that counts, and it usually shifts before the scales do. Patient: That's encouraging, actually. Dietitian: Then that's a good place to stop. I'll write to Dr Ellis today and you'll get an appointment through in the post.",
      "gaps": [
        {
          "id": "g1",
          "label": "Referred because this was high",
          "answer": "HbA1c"
        },
        {
          "id": "g2",
          "label": "Breakfast: two slices of ___",
          "answer": "white toast"
        },
        {
          "id": "g3",
          "label": "Coffee taken with",
          "answer": "two sugars",
          "variants": [
            "2 sugars"
          ]
        },
        {
          "id": "g4",
          "label": "Lunch includes a packet of ___",
          "answer": "crisps"
        },
        {
          "id": "g5",
          "label": "Lunch sometimes with a ___",
          "answer": "fizzy drink"
        },
        {
          "id": "g6",
          "label": "Evening meal often followed by a ___",
          "answer": "dessert"
        },
        {
          "id": "g7",
          "label": "Afternoon snack (two or three)",
          "answer": "biscuits"
        },
        {
          "id": "g8",
          "label": "Water intake per day",
          "answer": "two glasses",
          "variants": [
            "2 glasses"
          ]
        },
        {
          "id": "g9",
          "label": "Evening activity: walks the ___",
          "answer": "dog"
        },
        {
          "id": "g10",
          "label": "Change: swap white toast for ___",
          "answer": "wholegrain"
        },
        {
          "id": "g11",
          "label": "Reduce this in coffee gradually",
          "answer": "sugar"
        },
        {
          "id": "g12",
          "label": "Replace fizzy drink with ___",
          "answer": "water"
        }
      ]
    }
  },
  // ── OET Form 2 (canonical ingest 2026-08-04) ──
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-f2-occupational-therapy-home-visit-post-stroke",
    "form": "form-2",
    "title": "OET Form 2 · Listening Part A — Occupational therapy home visit (post-stroke)",
    "prompt": "You will hear an occupational therapist speaking to a patient. For questions 1-12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Occupational therapist",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "audioScript": "Occupational therapist: Hello Mr Berg, I'm Priya, the occupational therapist. Thank you for letting me come round. I've come to see how you're managing at home since your stroke — it's much more useful for me to see the house than to ask you about it in a clinic. How have things been? Patient: Not too bad, but the mornings are hard. Getting washed and dressed takes me nearly an hour. Occupational therapist: An hour. And how long would it have taken you before? Patient: Fifteen minutes, if that. Occupational therapist: Which part is the most difficult? Patient: Doing up buttons — my right hand is still weak, and I'm right-handed normally. Occupational therapist: So it's the fine work rather than the big movements. Can you manage a zip? Patient: Yes, a zip's alright. It's the small buttons on a shirt. Occupational therapist: There's a button hook that can help with that. It looks like nothing much, but people get on with it very well. I'll bring one next time and show you. How about the stairs? Patient: I manage, but I come down one step at a time, holding the rail. There's only a rail on the left going up. Occupational therapist: And is the bathroom upstairs? Patient: Yes, both of them, so I've no choice. Occupational therapist: I'd recommend a second rail, on the other side. It's a straightforward job and it makes coming down considerably safer. And the bathroom — the bath? Patient: My daughter helps me. I don't feel safe on my own. Occupational therapist: Does she live nearby? Patient: Two streets away. She's very good, but she's got her own family. Occupational therapist: A bath board and a non-slip mat might give you more independence, which takes some of the weight off her as well. Would you be willing to try? Patient: I would, yes. I don't like being a nuisance. Occupational therapist: You're not, but I understand the feeling. Cooking? Patient: I can make a sandwich, but I haven't tried anything hot — I'm nervous about carrying a pan. Occupational therapist: That's a very reasonable thing to be nervous about, and I'd rather you were. A trolley can help you move things safely, so you're not carrying anything hot with one hand. There are also lighter pans that make a real difference. Patient: I hadn't thought of that. Occupational therapist: Are you getting out at all? Patient: Not really. I've lost my confidence since a fall last month. Occupational therapist: Can you tell me about the fall? Patient: In the hallway. I caught my foot on the rug and went down. Nothing broken. Occupational therapist: I'm glad. That rug is one of the first things I'd move, and I'll put it in my notes. Confidence usually comes back, but it comes back through doing rather than through waiting, so I'd like us to set one small outdoor goal for the next fortnight. Patient: What sort of goal do you mean? Occupational therapist: Something small and very specific. Not going into town — walking to the gate and back with somebody alongside you, three times in the fortnight. Small enough that you'll actually do it, specific enough that we both know afterwards whether it happened. Patient: I could probably manage that. Occupational therapist: Then that's what we'll write down, and I won't add anything else to it. I'll also speak to the equipment service about the second rail and the bath board, and I'd expect somebody to ring you within two weeks. If nobody has, ring me — the number's on the card I'll leave on the table. Patient: Thank you for coming out. Occupational therapist: It's much the most useful hour of my week.",
      "gaps": [
        {
          "id": "g1",
          "label": "Home visit after a",
          "answer": "stroke"
        },
        {
          "id": "g2",
          "label": "Washing and dressing takes nearly",
          "answer": "an hour",
          "variants": [
            "one hour"
          ]
        },
        {
          "id": "g3",
          "label": "Hardest task: doing up",
          "answer": "buttons"
        },
        {
          "id": "g4",
          "label": "His right hand is still",
          "answer": "weak"
        },
        {
          "id": "g5",
          "label": "Suggested aid: a",
          "answer": "button hook"
        },
        {
          "id": "g6",
          "label": "Comes down the stairs",
          "answer": "one step at a time"
        },
        {
          "id": "g7",
          "label": "Rail is only on",
          "answer": "the left"
        },
        {
          "id": "g8",
          "label": "Suggested for the bath: a",
          "answer": "bath board"
        },
        {
          "id": "g9",
          "label": "Nervous about carrying a",
          "answer": "pan"
        },
        {
          "id": "g10",
          "label": "Suggested to move things safely: a",
          "answer": "trolley"
        },
        {
          "id": "g11",
          "label": "Has lost his",
          "answer": "confidence"
        },
        {
          "id": "g12",
          "label": "Since a ___ last month",
          "answer": "fall"
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-f2-practice-nurse-asthma-review",
    "form": "form-2",
    "title": "OET Form 2 · Listening Part A — Practice-nurse asthma review",
    "prompt": "You will hear a practice nurse speaking to a patient. For questions 1-12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Practice nurse",
          "voice": "onyx"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "audioScript": "Practice nurse: Hello Ms Adams, I'm David, the practice nurse. This is your annual asthma review — it should take about twenty minutes. How have you been? Patient: Mostly okay, but I've been using my blue inhaler more than usual — most days this past month. Practice nurse: Right. Thank you for telling me that, because a lot of people don't. That's more than we'd like; ideally three times a week or fewer. Patient: I thought that was what it was for. Practice nurse: It is what it's for, and you should absolutely use it when you need it. It's just that needing it often is a signal, and the signal is that something else isn't quite right. Are you using your brown preventer every day? Patient: I forget it when I feel well. Practice nurse: That's the commonest thing I hear in this room, so you're in good company. But the preventer reduces the inflammation and works best taken daily, even when you feel fine. Patient: So it's not doing anything on the day I take it? Practice nurse: It is, but slowly, and it builds up. Think of it as the thing that stops the bad week happening rather than the thing that rescues you during it. Do you use a spacer? Patient: No, just the inhaler. Practice nurse: A spacer helps the medicine reach your lungs rather than the back of your throat. I'll give you one today, and I'll watch you use it, because the technique matters more than people think. Patient: Nobody's ever watched me before. Practice nurse: Then that alone may be worth the appointment. Any night symptoms — cough or wheeze? Patient: A couple of times a week. Practice nurse: Waking you, or do you sleep through it? Patient: It wakes me. Practice nurse: That's another one that tells us the preventer needs a run at it. What sets it off? Patient: Cold air, mostly, and my cat. Practice nurse: How long have you had the cat? Patient: Six years. I'm not getting rid of him, before you ask. Practice nurse: I wasn't going to. Most people won't, and there are other things we can do — keeping him out of the bedroom helps a surprising amount. Have you had your flu vaccine this year? Patient: Not yet. Practice nurse: I'd recommend it, and you can have it here today if you've time. And I'll write you an updated action plan — that's the sheet that tells you exactly what to do when things get worse, so you're not deciding at two in the morning. Patient: Do I need a peak flow meter? Practice nurse: You've got one at home, I see from the notes, though I suspect it's in a drawer. Patient: It is. Practice nurse: They're most useful when things are changing rather than every single day, so I'd get it out and take a reading while you're well, so you know what your normal looks like. There's no point discovering your best figure on a bad day. Patient: That makes sense. Practice nurse: And one last thing — how are you getting on with the repeat prescription? Patient: I order it when I run out. Practice nurse: Let's set the preventer up to come automatically, because running out is one of the commonest reasons people stop taking it, and it has nothing to do with how well anybody is managing.",
      "gaps": [
        {
          "id": "g1",
          "label": "Annual review for this condition",
          "answer": "asthma"
        },
        {
          "id": "g2",
          "label": "Reliever should be used at most",
          "answer": "three times a week",
          "variants": [
            "3 times a week"
          ]
        },
        {
          "id": "g3",
          "label": "Forgets the preventer when she feels",
          "answer": "well"
        },
        {
          "id": "g4",
          "label": "The preventer reduces",
          "answer": "inflammation"
        },
        {
          "id": "g5",
          "label": "The preventer works best taken",
          "answer": "daily"
        },
        {
          "id": "g6",
          "label": "Not using a",
          "answer": "spacer"
        },
        {
          "id": "g7",
          "label": "A spacer helps the medicine reach the",
          "answer": "lungs"
        },
        {
          "id": "g8",
          "label": "Night symptoms: cough or",
          "answer": "wheeze"
        },
        {
          "id": "g9",
          "label": "Trigger 1",
          "answer": "cold air"
        },
        {
          "id": "g10",
          "label": "Trigger 2: her",
          "answer": "cat"
        },
        {
          "id": "g11",
          "label": "Recommended: the",
          "answer": "flu vaccine"
        },
        {
          "id": "g12",
          "label": "Nurse to write an updated",
          "answer": "action plan"
        }
      ]
    }
  },
  // ── OET Form 3 (canonical ingest 2026-08-05) ──
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-f3-physiotherapist-and-lower-back-pain",
    "form": "form-3",
    "title": "OET Form 3 · Listening Part A — Physiotherapist and lower back pain",
    "prompt": "You will hear a physiotherapist speaking to a patient. For questions 1-12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Physiotherapist",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "audioScript": "Physiotherapist: Good morning, Mr Doyle. I'm Elena, one of the physiotherapists. Come and sit down — or stand, if that's more comfortable. Patient: Sitting's fine for now, thank you. Physiotherapist: I understand you've had some back pain — when did it start? Patient: About three weeks ago. I was lifting a box in the garage and felt a sharp twinge in my lower back. Physiotherapist: Was it heavy? Patient: Heavier than I expected. It had been up on a shelf all winter. Physiotherapist: And did the pain come on straight away, or later that day? Patient: Straight away. I had to put it down. Physiotherapist: And how would you describe the pain now? Patient: It's more of a dull ache, but it's worse when I sit for a long time. Physiotherapist: How long is a long time, roughly? Patient: Half an hour, forty minutes. I drive for work, so that's the problem. Physiotherapist: We'll come back to the driving, because there are some easy things there. Does it travel anywhere — down into your leg, for instance? Patient: No, it stays in my back. Physiotherapist: That's reassuring. Any numbness or pins and needles? Patient: None. Physiotherapist: Good. Have you been taking anything for it? Patient: Just ibuprofen, which takes the edge off. Physiotherapist: Is it letting you do more, or just making you more comfortable while you do the same? Patient: Just more comfortable, I suppose. Physiotherapist: That's a useful distinction. And have you been resting it? Patient: Yes, I've mostly been lying down. Physiotherapist: How much of the day, would you say? Patient: Most of the weekend, if I'm honest. Physiotherapist: I'm glad you were, because this is the part where I'm going to disagree with you. Too much bed rest can actually slow recovery — the muscles that support your back get weaker, and weaker muscles are sorer. Gentle movement is better — a short walk each day, even when it doesn't feel appealing. Patient: I didn't realise that. I thought I was doing the right thing. Physiotherapist: You were doing what nearly everybody does, and what we used to tell people. The advice changed some years ago and it hasn't reached everyone. Most cases like yours settle within six weeks. I'll show you some exercises before you go, and I'd like you to avoid heavy lifting for now — that's the one restriction I'll give you. Patient: Should I be worried it's something serious? Physiotherapist: I understand why you're asking, and no — your symptoms point to a simple muscular strain, and everything you've described fits that. But I'll always give people the list, so you know what you're watching for. If you ever develop weakness in your legs or problems passing urine, seek help immediately, the same day. Physiotherapist: Before you go — the driving, because that's where most of your day is spent. Two things. Move the seat slightly more upright than feels natural, and put a small rolled towel in the curve of your lower back; most car seats are shaped for a spine that nobody actually has. And stop every hour, even if it's only two minutes standing beside the car. Patient: I'd have to leave earlier. Physiotherapist: You would, and it is still cheaper than another three weeks of this. Patient: Fair enough. Physiotherapist: I'll write to your GP with the plan, and I'd like to see you again in a fortnight to check how the exercises are going. If you're much better before then, ring and cancel — that's a good outcome, not a wasted appointment.",
      "gaps": [
        {
          "id": "g1",
          "label": "Back pain started about",
          "answer": "three weeks ago",
          "variants": [
            "3 weeks ago"
          ]
        },
        {
          "id": "g2",
          "label": "Injured while lifting a",
          "answer": "box"
        },
        {
          "id": "g3",
          "label": "Initially felt a sharp",
          "answer": "twinge"
        },
        {
          "id": "g4",
          "label": "Pain is now a dull",
          "answer": "ache"
        },
        {
          "id": "g5",
          "label": "Pain is worse when ___ for a long time",
          "answer": "sitting",
          "variants": [
            "sits",
            "sit"
          ]
        },
        {
          "id": "g6",
          "label": "Pain does not travel into his",
          "answer": "leg"
        },
        {
          "id": "g7",
          "label": "Taking for the pain:",
          "answer": "ibuprofen"
        },
        {
          "id": "g8",
          "label": "Has mostly been",
          "answer": "lying down",
          "variants": [
            "resting",
            "lying"
          ]
        },
        {
          "id": "g9",
          "label": "Better than bed rest: gentle",
          "answer": "movement",
          "variants": [
            "exercise"
          ]
        },
        {
          "id": "g10",
          "label": "Recommended daily: a short",
          "answer": "walk"
        },
        {
          "id": "g11",
          "label": "Most cases settle within",
          "answer": "six weeks",
          "variants": [
            "6 weeks"
          ]
        },
        {
          "id": "g12",
          "label": "Told to avoid heavy",
          "answer": "lifting"
        }
      ]
    }
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-f3-midwife-antenatal-booking-visit",
    "form": "form-3",
    "title": "OET Form 3 · Listening Part A — Midwife antenatal booking visit",
    "prompt": "You will hear a midwife speaking to a patient. For questions 1-12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "speakers": [
        {
          "role": "Midwife",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "audioScript": "Midwife: Hello Sarah, I'm Grace, your midwife. Do sit down, and help yourself to water. This is your booking appointment, at around ten weeks, and it's the longest one we'll have — after this they get much shorter. Congratulations. Is this your first baby? Patient: Yes, it is. Midwife: Then there'll be a lot of questions today that might feel personal. Stop me at any point. How have you been feeling? Patient: Quite sick in the mornings, and very tired. Midwife: Is the sickness only in the mornings, or all day? Patient: Mostly first thing, and then it settles by lunch. Midwife: That's common in the first trimester and usually eases by about week fourteen, although I'll be honest that for some people it takes a bit longer. Are you managing to eat? Patient: Small amounts. I've gone off coffee completely. Midwife: That's often the body's way of protecting the baby, and it's very common with tea and coffee in particular. Are you keeping fluids down? Patient: Yes, water's fine. Midwife: Good — that's the one I worry about. Are you taking folic acid? Patient: Yes, 400 micrograms a day. Midwife: Perfect — that helps protect the baby's spine. Keep taking it until twelve weeks. Are you taking anything else? Patient: A general pregnancy multivitamin. Midwife: That's fine; just check it doesn't contain vitamin A, and bring me the box next time if you're not sure. Do you smoke? Patient: I stopped as soon as I found out. Midwife: Well done — that's genuinely the best thing you could do, and stopping this early puts you in a very good position. Does anyone smoke in the house? Patient: No, my partner never has. Midwife: Any alcohol? Patient: None at all. Midwife: Good. Now, today I'll check your blood pressure and take some blood — that's a few bottles, I'm afraid, but it's all done at once — and we'll arrange your first scan for around twelve weeks. Patient: Will I find out the due date then? Midwife: Yes, the scan gives us an accurate date, more accurate than counting from your last period. Any questions before we start? Patient: I've been getting headaches. Midwife: How often? Patient: Two or three a week, usually late afternoon. Midwife: Usually hormonal at this stage, and often mixed in with tiredness and not drinking enough. Paracetamol is safe if you need it. But if they become severe, or you see spots in your vision, tell us straight away — don't wait for the next appointment. Midwife: And while I think of it — is there anything in your own family, or your partner's, that we ought to know about? Diabetes, blood pressure, twins? Patient: My mother had high blood pressure when she was expecting me. Midwife: That's worth having in the notes, and it's a reason for us to keep a closer eye on yours rather than a reason for you to worry. Are you working at the moment? Patient: Yes, full time, mostly at a desk. Midwife: That's fine throughout, and you're entitled to paid time off for these appointments. Do tell your employer when you're ready — there's no rush at all, but they can't make adjustments they don't know about. Right — let's get that blood pressure done. Patient: One more thing — my sister says I should be avoiding soft cheese. Midwife: She's right, and there's a short list I'll give you in the folder: unpasteurised cheeses, pâté, raw or undercooked eggs unless they carry the lion mark, and liver. It looks alarming written down and it's a small list in practice. Patient: And exercise? Midwife: Carry on with what you already do. If you were running before, you can keep running; if you weren't, this isn't the moment to start. Walking and swimming suit almost everybody.",
      "gaps": [
        {
          "id": "g1",
          "label": "Type of appointment today: the",
          "answer": "booking",
          "variants": [
            "booking appointment"
          ]
        },
        {
          "id": "g2",
          "label": "Roughly how many weeks pregnant:",
          "answer": "ten weeks",
          "variants": [
            "10 weeks"
          ]
        },
        {
          "id": "g3",
          "label": "This is her first",
          "answer": "baby"
        },
        {
          "id": "g4",
          "label": "Feels sick in the",
          "answer": "mornings"
        },
        {
          "id": "g5",
          "label": "Also feels very",
          "answer": "tired"
        },
        {
          "id": "g6",
          "label": "Has gone off",
          "answer": "coffee"
        },
        {
          "id": "g7",
          "label": "Taking daily: folic",
          "answer": "acid"
        },
        {
          "id": "g8",
          "label": "Folic acid dose:",
          "answer": "400 micrograms",
          "variants": [
            "400 mcg",
            "400 micrograms a day"
          ]
        },
        {
          "id": "g9",
          "label": "Folic acid protects the baby's",
          "answer": "spine"
        },
        {
          "id": "g10",
          "label": "As soon as she found out, she stopped",
          "answer": "smoking",
          "variants": [
            "smoke"
          ]
        },
        {
          "id": "g11",
          "label": "First scan at around",
          "answer": "twelve weeks",
          "variants": [
            "12 weeks"
          ]
        },
        {
          "id": "g12",
          "label": "Warning sign with headaches: seeing",
          "answer": "spots"
        }
      ]
    }
  }
];
