// 10 new Listening items of 1 November 2026: Part A +6 consultations, Part C +4 talks, so Listening reaches 20 full tests
// (A 40 = 20 x 2, C 40 = 20 x 2). Original scripts; audio rendered offline by scripts/render-audio.mts (Piper).
// New rows reach production through scripts/seed/append.ts (insert-only).
import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-gp-persistent-dry-cough",
    "title": "Part A — Persistent dry cough",
    "prompt": "You will hear a consultation between a GP and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "persistent-cough",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "g1": {
          "why": "Asked how long she has had the cough, the patient says about six weeks, starting after a cold.",
          "evidence": "About six weeks now.",
          "watch": "Do not write three weeks, the threshold the doctor mentions later, or twenty years at the bakery."
        },
        "g2": {
          "why": "She describes the cough as tickly, felt at the back of her throat, with no phlegm.",
          "evidence": "It's more of a tickly cough, right at the back of my throat",
          "watch": "Spell tickly with ck; do not write feather or throat, which only describe where she feels it."
        },
        "g3": {
          "why": "She says the cough is definitely worse at night, starting as soon as she lies down.",
          "evidence": "It's worse at night, definitely.",
          "watch": "Write night; first thing outside is when cold air triggers it, which is a different note."
        },
        "g4": {
          "why": "Asked what else sets the cough off, she names cold air when she steps outside in the morning.",
          "evidence": "Cold air. If I step outside first thing",
          "watch": "Write cold air, not a cold; the cold she had is how the cough began."
        },
        "g5": {
          "why": "As a baker she has been around flour dust for twenty years without problems before.",
          "evidence": "I've been around flour dust for twenty years",
          "watch": "Write the exposure, flour dust, not her job title or the twenty years."
        },
        "g6": {
          "why": "She gave up smoking twelve years ago, when her daughter was born.",
          "evidence": "I gave up twelve years ago, when my daughter was born.",
          "watch": "Write twelve years ago; twenty years is how long she has worked with flour."
        },
        "g7": {
          "why": "The patient names her blood pressure tablet as ramipril, started three or four months ago.",
          "evidence": "That's right, the ramipril.",
          "watch": "Spell ramipril carefully; do not write losartan, which is the replacement tablet."
        },
        "g8": {
          "why": "When the doctor asks about a burning feeling after food, she confirms she gets heartburn after late meals.",
          "evidence": "Now you mention it, yes, I do get heartburn.",
          "watch": "Write heartburn as one word; burning feeling is the doctor's question, not her answer."
        },
        "g9": {
          "why": "Asked what she has tried, she says honey and lemon as a hot drink before bed.",
          "evidence": "Honey and lemon, mainly.",
          "watch": "Write both parts, honey and lemon; ten minutes is only how long it helps."
        },
        "g10": {
          "why": "After listening, the doctor says her chest sounds clear and her oxygen level is normal.",
          "evidence": "Your chest sounds clear, and your oxygen level is ninety-eight per cent",
          "watch": "Write clear; do not write the oxygen figure, which belongs to a different note."
        },
        "g11": {
          "why": "The doctor plans to stop the old tablet and swap to a similar one called losartan.",
          "evidence": "swap to a similar one called losartan",
          "watch": "Spell losartan correctly; do not write ramipril, the tablet being stopped."
        },
        "g12": {
          "why": "Because she used to smoke and the cough has lasted over three weeks, the doctor requests a chest X-ray.",
          "evidence": "I'd also like you to have a chest X-ray.",
          "watch": "Include chest; the review in a month is the follow-up, not the investigation."
        }
      },
      "speakers": [
        {
          "role": "Doctor",
          "voice": "onyx"
        },
        {
          "role": "Patient",
          "voice": "nova"
        }
      ],
      "audioScript": "Doctor: Come in, have a seat. What can I do for you today? Patient: It's this cough. I just can't shake it off. Doctor: How long have you had it? Patient: About six weeks now. It started after a cold, or I thought it did, but the cold cleared up and the cough didn't. Doctor: Okay. And are you bringing anything up when you cough? Any phlegm? Patient: No, nothing at all. It's more of a tickly cough, right at the back of my throat, like there's a feather stuck there. Doctor: Right. Is it there all day, or are there times when it's worse? Patient: It's worse at night, definitely. As soon as my head's on the pillow it starts. Doctor: Does anything else set it off? Patient: Cold air. If I step outside first thing, that's it, I'm coughing all the way to the bus stop. Doctor: And what do you do for work? Patient: I'm a baker. Well, I mostly run the counter now, but I've been around flour dust for twenty years and it's never bothered me before. Doctor: That's useful to know. Have you ever smoked? Patient: I did, yes. I gave up twelve years ago, when my daughter was born. Not a single one since. Doctor: Well done. I can see from your record that we started you on a blood pressure tablet a little while back. Patient: That's right, the ramipril. About three months ago, I think. Or no, it'd be nearer four, because it was before the summer holidays. Doctor: That's interesting, because a dry cough like yours is a well-known side effect of that type of tablet. It can start weeks or even months after you begin taking it. Patient: Really? Nobody mentioned that to me. Doctor: Any problems with your stomach? A burning feeling after food, perhaps? Patient: Now you mention it, yes, I do get heartburn. Mostly after my tea, if I've eaten late. Doctor: And have you coughed up any blood at all, lost weight without trying, or had drenching sweats in bed? Patient: No blood. My weight's about the same, and no sweats. Doctor: Good. Are you short of breath? Patient: Only after a long coughing fit. Doctor: Have you tried anything for it yourself? Patient: Honey and lemon, mainly. A hot mug before bed. It helps for about ten minutes and then it's back. Doctor: Let me have a listen to your chest. Deep breaths for me. That's fine. Your chest sounds clear, and your oxygen level is ninety-eight per cent, which is normal. Patient: So what do you think it is? Doctor: The most likely cause is the blood pressure tablet. I'd like you to stop it and swap to a similar one called losartan, which does the same job but doesn't usually cause a cough. Patient: And will the cough go straight away? Doctor: Not straight away, I'm afraid. It can take a few weeks to settle once you're off the old tablet. But because you used to smoke and the cough has gone on for more than three weeks, I'd also like you to have a chest X-ray. It's a standard precaution, and I'll request it today. Patient: That makes me a bit nervous. Doctor: That's understandable, but it's routine, and most come back normal. For your stomach, try not to eat late, and cut down on coffee in the evenings. Doctor: Let's see you again in a month to check your blood pressure and go through the X-ray result. Patient: Thanks, doctor.",
      "gaps": [
        {
          "id": "g1",
          "label": "Cough duration",
          "answer": "six weeks",
          "variants": [
            "6 weeks"
          ]
        },
        {
          "id": "g2",
          "label": "Type of cough",
          "answer": "tickly"
        },
        {
          "id": "g3",
          "label": "Worse at",
          "answer": "night"
        },
        {
          "id": "g4",
          "label": "Trigger",
          "answer": "cold air",
          "acceptExhaustive": true
        },
        {
          "id": "g5",
          "label": "Workplace exposure",
          "answer": "flour dust",
          "acceptExhaustive": true
        },
        {
          "id": "g6",
          "label": "Stopped smoking",
          "answer": "twelve years",
          "variants": [
            "12 years"
          ]
        },
        {
          "id": "g7",
          "label": "Started recently",
          "answer": "ramipril"
        },
        {
          "id": "g8",
          "label": "Stomach symptom",
          "answer": "heartburn"
        },
        {
          "id": "g9",
          "label": "Self-treatment",
          "answer": "honey and lemon",
          "acceptExhaustive": true
        },
        {
          "id": "g10",
          "label": "Chest on examination",
          "answer": "clear"
        },
        {
          "id": "g11",
          "label": "New blood pressure tablet",
          "answer": "losartan"
        },
        {
          "id": "g12",
          "label": "Investigation",
          "answer": "chest X-ray",
          "variants": [
            "chest x ray"
          ]
        }
      ]
    },
    "guidanceNote": "The patient gives several possible causes of her cough: her job, her past smoking and a new tablet. Note each detail under its own heading, and listen for the doctor's plan at the end, where two different next steps are given."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-physio-sprained-wrist-bike-fall",
    "title": "Part A — Wrist sprain after a bike fall",
    "prompt": "You will hear a consultation between a physiotherapist and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "wrist-sprain",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "g1": {
          "why": "The patient says he came off the bike a fortnight ago, on a Saturday.",
          "evidence": "A fortnight ago, on the Saturday.",
          "watch": "Spell fortnight correctly; ten days is when the second X-ray was done."
        },
        "g2": {
          "why": "His front wheel dropped into a deep pothole full of rainwater, throwing him over the handlebars.",
          "evidence": "There was a pothole, a big one, full of rainwater",
          "watch": "Write pothole, not rainwater or handlebars, which only describe the scene."
        },
        "g3": {
          "why": "He landed on his left hand and points out he is right-handed.",
          "evidence": "Landed on my left. I'm right-handed",
          "watch": "Do not write right; that is his dominant hand, not the injured one."
        },
        "g4": {
          "why": "The fracture clinic repeated the X-ray ten days later and it was clear, so a sprain was diagnosed.",
          "evidence": "that one was clear as well",
          "watch": "Write the result, clear; do not write sprain, which is the diagnosis."
        },
        "g5": {
          "why": "He says he takes only paracetamol now, and just at bedtime.",
          "evidence": "Just paracetamol, and only at bedtime now.",
          "watch": "Spell paracetamol carefully; bedtime is only when he takes it, not what he takes."
        },
        "g6": {
          "why": "He first says seven, then corrects himself: twisting the wrist brings the pain to about six.",
          "evidence": "Sorry, no, more like a six.",
          "watch": "He corrects seven to six; two is his pain at rest."
        },
        "g7": {
          "why": "He says door handles are the worst task, then adds jars.",
          "evidence": "Door handles are the worst.",
          "watch": "Write door handles, which he calls the worst; jars are mentioned second."
        },
        "g8": {
          "why": "The wrist is puffy in the mornings and settles by lunchtime.",
          "evidence": "It's puffy in the mornings",
          "watch": "Write mornings, not lunchtime, which is when the swelling goes down."
        },
        "g9": {
          "why": "He works as a graphic designer and uses a computer all day.",
          "evidence": "I'm a graphic designer, so I'm on a computer all day.",
          "watch": "Write the job, not keyboard or mouse; check the spelling of designer."
        },
        "g10": {
          "why": "The grip meter shows about half the strength of his right hand.",
          "evidence": "It's about half the strength of your right hand",
          "watch": "Write half; a third is the movement he has lost, not his grip."
        },
        "g11": {
          "why": "At first he should do the exercises with his hand in a bowl of warm water to loosen it.",
          "evidence": "do them with your hand in a bowl of warm water",
          "watch": "Write warm water; three times a day is how often, not where."
        },
        "g12": {
          "why": "He hopes to get back on the bike because he has entered a triathlon in June.",
          "evidence": "I've entered a triathlon in June",
          "watch": "Spell triathlon carefully; June is when it is, not what it is."
        }
      },
      "speakers": [
        {
          "role": "Physiotherapist",
          "voice": "shimmer"
        },
        {
          "role": "Patient",
          "voice": "echo"
        }
      ],
      "audioScript": "Physiotherapist: Hello, come through. You're here about your wrist, is that right? Patient: Yeah, that's me. I came off my bike. Physiotherapist: Sorry to hear that. When did it happen? Patient: A fortnight ago, on the Saturday. I was cycling home along the canal road. Physiotherapist: And what happened exactly? Patient: There was a pothole, a big one, full of rainwater, so I couldn't see how deep it was. The front wheel just dropped in and I went straight over the handlebars. Physiotherapist: Ouch. And you put a hand out to save yourself? Patient: I did, yeah. Landed on my left. I'm right-handed, so at least it's not that one. Physiotherapist: Did you get it checked at the time? Patient: I went to A and E that evening. They X-rayed it and said there was no break, but the doctor pressed just below my thumb and it was sore, so they put me in a splint and sent me to the fracture clinic. Physiotherapist: That's the right thing to do, because there's a small bone there that doesn't always show up on the first X-ray. What did the fracture clinic say? Patient: They did another X-ray ten days later, and that one was clear as well. So they said it's a sprain, took the splint off, and sent me to you. Physiotherapist: Good. Are you taking anything for the pain? Patient: Just paracetamol, and only at bedtime now. Physiotherapist: And sitting here now, at rest, how bad is the pain out of ten? Patient: Maybe a two. But if I twist it, it jumps up to about a seven. Sorry, no, more like a six. Physiotherapist: What sort of things are hardest? Patient: Door handles are the worst. Jars too. Anything where I have to turn my hand over. Physiotherapist: Any swelling? Patient: It's puffy in the mornings, and then it goes down by about lunchtime. Physiotherapist: And what do you do for a living? Patient: I'm a graphic designer, so I'm on a computer all day. The mouse is fine, that's the other hand. It's the keyboard that bothers it, holding my wrist up over the keys. Physiotherapist: Okay. Let me have a look now. Can you make a fist for me? Now I'm going to press here, in the hollow at the base of your thumb. Any pain? Patient: No, that's fine, actually. Physiotherapist: Good, no tenderness there. Bending it back is a bit stiff; you've lost around a third of the movement compared with the other side. Now squeeze this grip meter as hard as you can. Patient: That's pathetic, isn't it? Physiotherapist: It's about half the strength of your right hand, which is quite normal two weeks after a sprain like this. Physiotherapist: So, exercises. I'd like you to do these three times a day, and to start with, do them with your hand in a bowl of warm water. It loosens everything up. Patient: Do I need to keep resting it? Physiotherapist: Use it for light things, but no press-ups or heavy lifting yet. Some ache during the exercises is fine, as long as it's settled within an hour. What are you hoping to get back to? Patient: Honestly, the bike. I've entered a triathlon in June and I really don't want to pull out. Physiotherapist: That's a realistic goal if you keep the exercises going. We'll build up your grip first, so you can hold the handlebars safely. I'll see you again in a week. Patient: Brilliant. Thanks very much.",
      "gaps": [
        {
          "id": "g1",
          "label": "Injury occurred",
          "answer": "fortnight",
          "variants": [
            "a fortnight"
          ]
        },
        {
          "id": "g2",
          "label": "Cause of fall",
          "answer": "pothole"
        },
        {
          "id": "g3",
          "label": "Wrist injured",
          "answer": "left"
        },
        {
          "id": "g4",
          "label": "Second X-ray",
          "answer": "clear"
        },
        {
          "id": "g5",
          "label": "Pain relief",
          "answer": "paracetamol"
        },
        {
          "id": "g6",
          "label": "Pain on twisting (out of 10)",
          "answer": "six",
          "variants": [
            "6"
          ]
        },
        {
          "id": "g7",
          "label": "Hardest task",
          "answer": "door handles",
          "acceptExhaustive": true
        },
        {
          "id": "g8",
          "label": "Swelling worse in the",
          "answer": "mornings"
        },
        {
          "id": "g9",
          "label": "Occupation",
          "answer": "graphic designer",
          "acceptExhaustive": true
        },
        {
          "id": "g10",
          "label": "Grip strength compared with right",
          "answer": "half"
        },
        {
          "id": "g11",
          "label": "Exercises done with hand in",
          "answer": "warm water",
          "acceptExhaustive": true
        },
        {
          "id": "g12",
          "label": "Patient's goal",
          "answer": "triathlon"
        }
      ]
    },
    "guidanceNote": "Several numbers are spoken close together, such as pain scores, days and hand strength. Check which number belongs to which heading, and note the hand that was injured, because the patient talks about both hands."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-optometry-dry-eyes-screen-work",
    "title": "Part A — Dry eyes from screen work",
    "prompt": "You will hear a consultation between an optometrist and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "STRETCH",
    "topicTag": "dry-eye",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "g1": {
          "why": "She describes the dry, scratchy feeling as being like sand under her eyelids.",
          "evidence": "like there's sand under the lids",
          "watch": "Write sand; dry and scratchy are her general words, not the comparison she makes."
        },
        "g2": {
          "why": "The symptoms started in March, when she began a new job as a data analyst.",
          "evidence": "Since March, when I started a new job.",
          "watch": "Write the month with a capital M; do not write her job title."
        },
        "g3": {
          "why": "She spends at least nine hours a day on a screen at work, plus her phone at home.",
          "evidence": "At work, nine hours, easily.",
          "watch": "Do not confuse nine hours on screens with eight hours, the target for lens wear."
        },
        "g4": {
          "why": "Her eyes are fine first thing but bad in the late afternoon, when she rubs them constantly.",
          "evidence": "It's the late afternoon that's bad.",
          "watch": "Include late; first thing is when her eyes feel fine."
        },
        "g5": {
          "why": "Her open-plan office has air conditioning running all year, even in winter.",
          "evidence": "Open plan, with air conditioning blasting all year round.",
          "watch": "Write air conditioning; open plan describes the layout, and winter is just a season."
        },
        "g6": {
          "why": "She confirms she wears monthly contact lenses, from seven in the morning till ten at night.",
          "evidence": "Yes, monthly ones.",
          "watch": "Write monthly, the lens type; seven and ten are the times she wears them."
        },
        "g7": {
          "why": "She has used whitening drops from the supermarket, which hide redness but do not help the dryness.",
          "evidence": "I bought some whitening drops from the supermarket",
          "watch": "Write whitening drops; lubricating drops are the optometrist's advice, not what she tried."
        },
        "g8": {
          "why": "With the orange dye in, her tears break up after about five seconds, below the expected ten.",
          "evidence": "Your tears are breaking up after about five seconds.",
          "watch": "Write five seconds; ten or more is the normal value, not her result."
        },
        "g9": {
          "why": "The optometrist says the oil glands along the edge of her eyelids look blocked.",
          "evidence": "and yours look blocked",
          "watch": "Write blocked; oily layer is what the glands make, not what is wrong with them."
        },
        "g10": {
          "why": "She should look across the room every twenty minutes, for about twenty seconds each time.",
          "evidence": "Every twenty minutes, look at something across the room for about twenty seconds",
          "watch": "Write twenty minutes, how often; twenty seconds is how long each break lasts."
        },
        "g11": {
          "why": "For the blocked glands she should use a heated eye mask every evening for ten minutes, then massage the lids.",
          "evidence": "I'd like you to use a heated eye mask every evening",
          "watch": "Write the full item, heated eye mask; ten minutes is only how long."
        },
        "g12": {
          "why": "She should swap to lubricating drops of the preservative-free kind, used as often as needed.",
          "evidence": "swap to lubricating drops, the preservative-free kind",
          "watch": "Spell preservative carefully; lubricating is already in the heading."
        }
      },
      "speakers": [
        {
          "role": "Optometrist",
          "voice": "echo"
        },
        {
          "role": "Patient",
          "voice": "aria"
        }
      ],
      "audioScript": "Optometrist: Good morning. Take a seat in the chair here. So, what's brought you in today? Patient: My eyes. They feel awful by the end of the day. Dry, and sort of scratchy, like there's sand under the lids. Optometrist: How long has this been going on? Patient: Since March, when I started a new job. I'm a data analyst, so it's screens all day. Optometrist: Roughly how many hours do you spend on a screen? Patient: At work, nine hours, easily. Then my phone in the evening, if I'm honest. Optometrist: And is it the same all day, or does it change? Patient: No, it's fine first thing. It's the late afternoon that's bad. By then I'm rubbing them constantly, and I've started getting headaches. Optometrist: What's the office like? Is it warm, draughty? Patient: Open plan, with air conditioning blasting all year round. Even in winter, it's always on. Optometrist: And you wear contact lenses, I see from your notes. Patient: Yes, monthly ones. I usually have them in from seven in the morning till ten at night. Optometrist: That's a long day for lenses. Have you tried anything for the dryness? Patient: I bought some whitening drops from the supermarket, the ones for red eyes. They make my eyes look better for an hour, but they don't actually feel any better. Optometrist: I'd stop using those, to be honest. They shrink the blood vessels to hide the redness, but they don't treat dryness, and if they're used a lot the redness can come back worse. Have you had any real pain, sensitivity to light, or blurring that doesn't clear when you blink? Patient: No, nothing like that. My vision's fine; it just goes a bit misty when they're really dry, and blinking sorts it out. Optometrist: Good. Let me take a look, then. Lenses out first, please. I'm putting a little orange dye in now. Keep your eyes open for me and try not to blink. Your tears are breaking up after about five seconds. We'd normally expect ten or more. Patient: Is that bad? Optometrist: It's a common pattern with screen work, and it's very treatable. Part of it is the tiny glands along the edge of your eyelids. They make an oily layer that stops your tears drying out, and yours look blocked. Patient: Oh. I didn't even know they existed. Optometrist: Most people don't. The other part is blinking. When we concentrate on a screen, we blink far less than normal, and often only halfway. So try this. Every twenty minutes, look at something across the room for about twenty seconds, and blink fully a few times. Patient: I can set a reminder on my laptop for that. Optometrist: Good idea. For the glands, I'd like you to use a heated eye mask every evening, for about ten minutes, and then gently massage the lids. That softens the oil so it can flow again. Patient: Okay. And should I still use drops? Optometrist: Yes, but swap to lubricating drops, the preservative-free kind, which you can use as often as you need, even with lenses in. Patient: And what about the lenses themselves? Optometrist: Try to cut down to about eight hours a day, and wear your glasses in the evenings. If you can, angle the air vent away from your desk too. I'd like to see you again in six weeks to check how the tear film is doing. Patient: That all sounds manageable. Thank you.",
      "gaps": [
        {
          "id": "g1",
          "label": "Feels like",
          "answer": "sand"
        },
        {
          "id": "g2",
          "label": "Symptoms began",
          "answer": "March"
        },
        {
          "id": "g3",
          "label": "Screen time at work",
          "answer": "nine hours",
          "variants": [
            "9 hours"
          ]
        },
        {
          "id": "g4",
          "label": "Symptoms worst in the",
          "answer": "late afternoon",
          "acceptExhaustive": true
        },
        {
          "id": "g5",
          "label": "Office environment",
          "answer": "air conditioning",
          "acceptExhaustive": true
        },
        {
          "id": "g6",
          "label": "Contact lens type",
          "answer": "monthly"
        },
        {
          "id": "g7",
          "label": "Already tried",
          "answer": "whitening drops",
          "acceptExhaustive": true
        },
        {
          "id": "g8",
          "label": "Tear break-up time",
          "answer": "five seconds",
          "variants": [
            "5 seconds"
          ]
        },
        {
          "id": "g9",
          "label": "Eyelid glands",
          "answer": "blocked"
        },
        {
          "id": "g10",
          "label": "Screen breaks every",
          "answer": "twenty minutes",
          "variants": [
            "20 minutes"
          ]
        },
        {
          "id": "g11",
          "label": "Each evening",
          "answer": "heated eye mask",
          "acceptExhaustive": true
        },
        {
          "id": "g12",
          "label": "Lubricating drops should be",
          "answer": "preservative-free",
          "variants": [
            "preservative free"
          ]
        }
      ]
    },
    "guidanceNote": "Listen for times and numbers that sound alike, such as twenty minutes and twenty seconds, or the hours on screens and in lenses. The advice comes quickly at the end, so be ready to note each treatment under its own heading."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-practice-nurse-first-combined-pill-review",
    "title": "Part A — First combined pill review",
    "prompt": "You will hear a consultation between a practice nurse and a patient. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "contraception-review",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "g1": {
          "why": "Asked for a reason apart from contraception, the patient says she chose this pill mainly for her skin, because of acne.",
          "evidence": "I've had acne on and off since school",
          "watch": "Write the condition, acne, not the general word skin; check the spelling with c before n."
        },
        "g2": {
          "why": "She describes breast tenderness in the first month, which has since gone.",
          "evidence": "In the first month I had breast tenderness",
          "watch": "Do not write spotting or headaches here; those come later and belong to other gaps."
        },
        "g3": {
          "why": "She had some spotting in the second packet, a small amount that has not returned.",
          "evidence": "Some spotting in the second packet.",
          "watch": "Write spotting, not bleeding; bleeding is the nurse's question word, not her answer."
        },
        "g4": {
          "why": "Her headaches happen only during the pill-free week, the break between packets.",
          "evidence": "I get headaches, but only in the pill-free week.",
          "watch": "Write the week, not the forehead; keep all three words, pill-free week."
        },
        "g5": {
          "why": "She takes paracetamol, which works; ibuprofen was tried once but suits her less well.",
          "evidence": "Just paracetamol. It works fine.",
          "watch": "Do not write ibuprofen; she tried it once and prefers the other painkiller."
        },
        "g6": {
          "why": "She has missed one pill, taken about twelve hours late the next morning.",
          "evidence": "One. I forgot one evening and took it the next morning.",
          "watch": "Write the number of pills, one, not twelve, which is how many hours late she was."
        },
        "g7": {
          "why": "She remembers with a phone alarm set for nine every night.",
          "evidence": "I've got a phone alarm set for nine every night.",
          "watch": "Write the method, phone alarm, not the time nine."
        },
        "g8": {
          "why": "The relative who had a clot is her aunt, her mother's sister, after an operation.",
          "evidence": "My aunt did, my mum's sister, after an operation.",
          "watch": "Write aunt, not mum or mother; her mum is mentioned only to explain which aunt."
        },
        "g9": {
          "why": "She is flying to Australia in March to visit her brother.",
          "evidence": "I'm going to Australia in March to see my brother.",
          "watch": "Write the country, not the month March; check the spelling of Australia."
        },
        "g10": {
          "why": "After the blood pressure, the nurse gives her BMI as twenty-four.",
          "evidence": "your BMI is twenty-four",
          "watch": "Do not write a blood pressure figure such as seventy-two; the BMI is a single number."
        },
        "g11": {
          "why": "Because everything is normal, the nurse issues a supply for the next twelve months.",
          "evidence": "I'm happy to give you a supply for the next twelve months.",
          "watch": "Write twelve months, not three months, which is how long she has been taking the pill."
        },
        "g12": {
          "why": "The nurse gives a leaflet about emergency contraception to read at home.",
          "evidence": "Here's a leaflet on emergency contraception",
          "watch": "Write both words; contraception alone does not say which kind the leaflet covers."
        }
      },
      "speakers": [
        {
          "role": "Nurse",
          "voice": "echo"
        },
        {
          "role": "Patient",
          "voice": "nova"
        }
      ],
      "audioScript": "Nurse: Hi, come in and take a seat. So this is your first check since starting the pill, isn't it? Patient: Yes, it's been three months now. Well, just over. Nurse: Great. Remind me, apart from contraception, was there another reason you went for the combined pill? Patient: Mainly my skin, actually. I've had acne on and off since school, and the doctor said this pill might help with that too. Nurse: And has it? Patient: A bit, I think. It's early days. Nurse: It can take a while. Any side effects in the first few weeks? Patient: In the first month I had breast tenderness, quite a lot actually, but that's gone now. Nurse: That's really common at the start, and it usually settles, like yours has. Any bleeding between periods? Patient: Some spotting in the second packet. Just a little, and nothing since. Nurse: Again, that often happens early on. If it comes back or gets heavier, let us know. What about headaches? Patient: Ah, yes, I meant to ask about that. I get headaches, but only in the pill-free week. They're not terrible. Nurse: Okay, this is important. Before or during a headache, do you ever get changes to your vision, like flashing lights or zigzag lines, or any tingling or numbness? Patient: No, nothing like that. It's just a dull ache across my forehead. Nurse: Good. If you ever got those warning signs, you'd stop the pill and be seen straight away, because that kind of migraine and this pill don't mix. What do you take for them? Patient: Just paracetamol. It works fine. I tried ibuprofen once, but the other one suits me better. Nurse: There are ways of taking the pill with fewer breaks, which might help if they carry on. Now, have you missed any pills? Patient: One. I forgot one evening and took it the next morning. Nurse: So less than twenty-four hours late? Patient: Yes, about twelve hours. Nurse: Then you did exactly the right thing, and you were still protected. How do you usually remember? Patient: I've got a phone alarm set for nine every night. The time I missed it, my phone had died. Nurse: That'll do it. Right, a few safety questions. Do you smoke? Patient: No, never. Nurse: Has anyone in your close family had a blood clot, in the legs or the lungs? Patient: My aunt did, my mum's sister, after an operation. She was about sixty. Nurse: Thanks. An aunt, and after surgery at that age, doesn't stop you using this pill. It's parents, brothers or sisters under forty-five we'd worry about more. Any long journeys coming up? Patient: Actually, yes. I'm going to Australia in March to see my brother. It's a really long flight. Nurse: Lovely. On the plane, walk about when you can, drink plenty of water, and do ankle exercises in your seat. Now let's check your numbers. Your blood pressure is one hundred and sixteen over seventy-two, which is perfect. And with your height and weight, your BMI is twenty-four. Patient: Is that okay? Nurse: It's absolutely fine. So everything looks good, and I'm happy to give you a supply for the next twelve months. You'll just need another blood pressure check before the next prescription. Patient: Brilliant, thanks. Nurse: It does. One last thing. Here's a leaflet on emergency contraception, so you know your options if you ever miss more pills or you're sick. Patient: Will do. Thanks so much.",
      "gaps": [
        {
          "id": "g1",
          "label": "Other reason for choosing pill",
          "answer": "acne"
        },
        {
          "id": "g2",
          "label": "Side effect in first month",
          "answer": "breast tenderness",
          "acceptExhaustive": true
        },
        {
          "id": "g3",
          "label": "Bleeding in second packet",
          "answer": "spotting"
        },
        {
          "id": "g4",
          "label": "Headaches occur only in",
          "answer": "pill-free week",
          "variants": [
            "pill free week"
          ]
        },
        {
          "id": "g5",
          "label": "Headache relieved by",
          "answer": "paracetamol"
        },
        {
          "id": "g6",
          "label": "Number of pills missed",
          "answer": "one",
          "variants": [
            "1"
          ]
        },
        {
          "id": "g7",
          "label": "Reminder method",
          "answer": "phone alarm",
          "acceptExhaustive": true
        },
        {
          "id": "g8",
          "label": "Relative with blood clot",
          "answer": "aunt"
        },
        {
          "id": "g9",
          "label": "Long-haul flight to",
          "answer": "Australia"
        },
        {
          "id": "g10",
          "label": "BMI",
          "answer": "twenty-four",
          "variants": [
            "24",
            "twenty four"
          ]
        },
        {
          "id": "g11",
          "label": "Supply issued for",
          "answer": "twelve months",
          "variants": [
            "12 months"
          ]
        },
        {
          "id": "g12",
          "label": "Leaflet given on",
          "answer": "emergency contraception",
          "acceptExhaustive": true
        }
      ]
    },
    "guidanceNote": "The nurse moves from side effects to safety questions to measurements. Several numbers are spoken close together, such as hours, months, blood pressure and BMI, so check each label tells you which number belongs in the gap."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-dietitian-toddler-fussy-eating",
    "title": "Part A — Toddler who is a fussy eater",
    "prompt": "You will hear a consultation between a dietitian and a parent. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "FOUNDATION",
    "topicTag": "fussy-eating",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "g1": {
          "why": "The mother says Leo began refusing foods from around eighteen months; he is now two and a half.",
          "evidence": "But from around eighteen months he just started refusing things",
          "watch": "Write when it began, eighteen months, not his current age of two and a half."
        },
        "g2": {
          "why": "The dietitian reassures her that his weight, and his height, have followed the fiftieth centile since birth.",
          "evidence": "His weight has tracked along the fiftieth centile since birth",
          "watch": "Write centile with a c; fiftieth, the position on the chart, not a weight."
        },
        "g3": {
          "why": "Among the few foods he eats, the main meal food is plain pasta with no sauce.",
          "evidence": "He'll eat plain pasta, with no sauce",
          "watch": "Include plain; toast, nuggets and yoghurt are other foods, not this gap."
        },
        "g4": {
          "why": "The only fruit he eats is bananas, as long as they are not too ripe.",
          "evidence": "Bananas, but only if they're not too ripe.",
          "watch": "Do not write apples; he used to like them but no longer eats them."
        },
        "g5": {
          "why": "He refuses any vegetable that is green, such as peas and broccoli.",
          "evidence": "He refuses anything green.",
          "watch": "Write the colour, green, not one example such as peas or broccoli."
        },
        "g6": {
          "why": "During the day he drinks four beakers of milk, before a bedtime bottle.",
          "evidence": "He has four beakers through the day",
          "watch": "Write the daytime amount, four beakers, not a litre, which is the dietitian's estimate of the total."
        },
        "g7": {
          "why": "He still has a bottle of milk at bedtime, after his daytime beakers.",
          "evidence": "and then a bottle at bedtime",
          "watch": "Write the time of day, bedtime; the word bottle is already in the label."
        },
        "g8": {
          "why": "He snacks mainly on rice cakes, because he will always eat them.",
          "evidence": "Mainly rice cakes, because he'll always eat those",
          "watch": "Write rice cakes as the parent says it; mid-morning and mid-afternoon are snack times, not foods."
        },
        "g9": {
          "why": "He watches the tablet while he eats in his high chair.",
          "evidence": "he watches the tablet while he eats",
          "watch": "Write tablet, not high chair, which is where he sits, or screen, the dietitian's word."
        },
        "g10": {
          "why": "New foods should go on the plate next to a safe food, something he already likes.",
          "evidence": "next to a safe food, something he already likes",
          "watch": "Write safe food, not pasta, which is only the dietitian's example of one."
        },
        "g11": {
          "why": "Children may need to try a food up to fifteen times before accepting it.",
          "evidence": "Children often need to try a food up to fifteen times before they accept it.",
          "watch": "Do not write two, which is how many tries the mother usually gives."
        },
        "g12": {
          "why": "The dietitian recommends vitamin drops, advised for all children under five.",
          "evidence": "I'd recommend vitamin drops for him",
          "watch": "Write vitamin drops, not iron; iron was mentioned only as a reason to reduce milk."
        }
      },
      "speakers": [
        {
          "role": "Dietitian",
          "voice": "onyx"
        },
        {
          "role": "Parent",
          "voice": "shimmer"
        }
      ],
      "audioScript": "Dietitian: Hello, come on in. You must be Leo's mum. And this is Leo? Parent: Yes, this is him. Say hello, Leo. He's a bit shy today. Dietitian: That's fine. So your health visitor referred you because you're worried about his eating. Tell me what's been happening. Parent: Well, he used to eat everything. As a baby he was brilliant. But from around eighteen months he just started refusing things, and now he's two and a half, and it's got worse, if anything. Dietitian: Okay. First, I've got his measurements from the health visitor, and I want to reassure you about one thing. His weight has tracked along the fiftieth centile since birth, and his height's the same. So he's growing really well. Parent: Oh, that's a relief. I was sure he'd be losing weight. Dietitian: No, not at all. So what does he eat on a typical day? Parent: Honestly, the same few things. He'll eat plain pasta, with no sauce, toast, sometimes chicken nuggets, and yoghurt. Dietitian: And fruit? Parent: Bananas, but only if they're not too ripe. He used to like apples, but not now. Dietitian: And vegetables? Parent: That's the battle. He refuses anything green. Peas, broccoli, even tiny bits mixed into something, he'll find them and spit them out. Dietitian: That's very common at his age. What about drinks? How much milk does he have? Parent: Quite a lot, I suppose. He has four beakers through the day, and then a bottle at bedtime. Dietitian: Right. That's probably over a litre altogether, and it's an important piece of the puzzle. Milk's very filling, so if he's having that much, he simply isn't hungry at mealtimes. At his age, around three hundred and fifty millilitres a day is plenty, plus water. Parent: Really? I thought milk was good for him. Dietitian: It is, in the right amount. Too much can also make it harder for him to get enough iron. I'd suggest cutting it down gradually over a couple of weeks, and giving that last drink of the day in a cup instead. What about snacks? Parent: He snacks a lot. Mainly rice cakes, because he'll always eat those, so at least I know he's had something. Dietitian: I understand. Try to keep to two planned snacks, mid-morning and mid-afternoon, so he comes to meals ready to eat. Where does he have his meals? Parent: In his high chair, but, well, he watches the tablet while he eats. Otherwise he won't sit still. Dietitian: Lots of families do that. But while he's watching a screen, he can't really notice the food, or how full he feels. I'd like you to try eating together at the table, with the screen put away, even if it's hard at first. Parent: Okay. And should I make him try new things? Dietitian: No pressure, and no bribes. Put a small amount of a new food on his plate next to a safe food, something he already likes, like his pasta. If he just touches it or licks it, that's progress. Children often need to try a food up to fifteen times before they accept it. Parent: Really? I usually give up after two goes. Dietitian: Most parents do. Keep going. One more thing. I'd recommend vitamin drops for him, which are advised for all children under five. Your health visitor can tell you where to get them. Parent: Right. I'll sort that out. Dietitian: Great. Let's see how he gets on over the next six weeks, and then I'll see you both again.",
      "gaps": [
        {
          "id": "g1",
          "label": "Refusing food since age",
          "answer": "eighteen months",
          "variants": [
            "18 months"
          ]
        },
        {
          "id": "g2",
          "label": "Weight and height on",
          "answer": "fiftieth centile",
          "variants": [
            "50th centile"
          ]
        },
        {
          "id": "g3",
          "label": "Main meal food accepted",
          "answer": "plain pasta",
          "acceptExhaustive": true
        },
        {
          "id": "g4",
          "label": "Only fruit eaten",
          "answer": "bananas"
        },
        {
          "id": "g5",
          "label": "Refuses all vegetables that are",
          "answer": "green"
        },
        {
          "id": "g6",
          "label": "Daytime milk",
          "answer": "four beakers",
          "variants": [
            "4 beakers"
          ]
        },
        {
          "id": "g7",
          "label": "Bottle still given at",
          "answer": "bedtime"
        },
        {
          "id": "g8",
          "label": "Usual snack",
          "answer": "rice cakes",
          "acceptExhaustive": true
        },
        {
          "id": "g9",
          "label": "Watches during meals",
          "answer": "tablet"
        },
        {
          "id": "g10",
          "label": "Offer new food next to a",
          "answer": "safe food",
          "acceptExhaustive": true
        },
        {
          "id": "g11",
          "label": "A food may need trying up to",
          "answer": "fifteen times",
          "variants": [
            "15 times"
          ]
        },
        {
          "id": "g12",
          "label": "Supplement recommended",
          "answer": "vitamin drops",
          "acceptExhaustive": true
        }
      ]
    },
    "guidanceNote": "The parent lists foods quickly, so listen for the exact food each label asks about. Numbers appear for age, growth, milk and repeated tries; match each one to its heading rather than writing the first number you hear."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_A",
    "profession": null,
    "slug": "lis-a-vet-itchy-dog-ear-scratching",
    "title": "Part A — Itchy dog scratching one ear",
    "prompt": "You will hear a consultation between a veterinary surgeon and a dog owner. Complete the notes with information you hear. Write a word or short phrase in each gap.",
    "difficulty": "CORE",
    "topicTag": "veterinary-skin-ear",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "g1": {
          "why": "Asked how long the scratching has lasted, the owner says about six weeks.",
          "evidence": "About six weeks.",
          "watch": "Do not write two months; that is when the food was changed, not how long he has been itchy."
        },
        "g2": {
          "why": "The owner says Bramble mainly licks his paws, all evening.",
          "evidence": "mainly he licks his paws",
          "watch": "Write paws, not toes; the toes are where the fur has stained."
        },
        "g3": {
          "why": "Only the left ear is affected; the right one seems fine.",
          "evidence": "He keeps scratching his left ear",
          "watch": "Do not write right; the owner says the right ear seems fine."
        },
        "g4": {
          "why": "The owner describes the smell from the left ear as yeasty, like bread.",
          "evidence": "Sort of yeasty, if that makes sense.",
          "watch": "Write yeasty, not bread, which is only a comparison; check the spelling y-e-a-s-t-y."
        },
        "g5": {
          "why": "He shakes his head mostly at night, and the noise wakes the family.",
          "evidence": "Yes, mostly at night.",
          "watch": "Write the time, at night, not all evening, which is when he licks his paws."
        },
        "g6": {
          "why": "The owner thinks the last flea treatment was in January and they forgot after that.",
          "evidence": "I think January.",
          "watch": "Write the month; overdue is the vet's comment, not the date."
        },
        "g7": {
          "why": "Bramble goes swimming in the lake most mornings.",
          "evidence": "He goes swimming in the lake most mornings.",
          "watch": "Write the activity, swimming, not the place, lake."
        },
        "g8": {
          "why": "Two months ago the owners switched him to a grain-free food on a friend's advice.",
          "evidence": "we put him on a grain-free one",
          "watch": "Write grain-free, the kind of food, not two months, which is when it changed."
        },
        "g9": {
          "why": "He had a similar spell of paw licking last summer, which cleared in the autumn.",
          "evidence": "Last summer he licked his paws a lot",
          "watch": "Write last summer, when it happened, not autumn, when it cleared up."
        },
        "g10": {
          "why": "Examining the left ear, the vet finds the canal red and narrowed, with a brown discharge.",
          "evidence": "The canal is red and narrowed",
          "watch": "Write narrowed, not red or brown; red is also used for the paws."
        },
        "g11": {
          "why": "The vet takes an ear swab to look at under the microscope.",
          "evidence": "I'm going to take an ear swab",
          "watch": "Write swab, not drops or microscope; the drops are chosen after the swab."
        },
        "g12": {
          "why": "The vet wants to see Bramble again in ten days to check the ear.",
          "evidence": "I'd like to see him again in ten days",
          "watch": "Write ten days, not several weeks, which is how long a diet trial would take."
        }
      },
      "speakers": [
        {
          "role": "Vet",
          "voice": "aria"
        },
        {
          "role": "Owner",
          "voice": "echo"
        }
      ],
      "audioScript": "Vet: Hello, come through. And this must be Bramble. Hello, gorgeous. So what's been going on with him? Owner: He's been scratching non-stop. It's driving us all mad, and him most of all, I think. Vet: Poor lad. How long has this been going on? Owner: About six weeks. It might have started a bit before, but it's really got going since then. Vet: And where is he scratching most? Owner: A bit all over, but mainly he licks his paws. He's at them all evening, and the fur between his toes has gone a rusty colour. Vet: That staining comes from saliva, so it tells me he's licking a lot. And the ears? Owner: That's the other thing. He keeps scratching his left ear, and sometimes he holds his head slightly to one side. Vet: Just the one side? Owner: Yes, the right one seems fine. And the left one smells. Sort of yeasty, if that makes sense. Like bread. Vet: It makes perfect sense, unfortunately. Is he shaking his head? Owner: Yes, mostly at night. You can hear his ears flapping, and it wakes us up. Vet: Right. When did he last have his flea treatment? Owner: Erm, good question. I think January. We sort of forgot after that. Vet: Okay, so he's a few months overdue. Fleas are worth ruling out in any itchy dog, even if you haven't seen any, so we'll get him back up to date today. Does he go in the water at all? Owner: All the time. He's a Labrador, he'd live in the water if he could. He goes swimming in the lake most mornings. Vet: That's useful to know, because water sitting in the ear canal makes it easier for an infection to take hold. Has anything changed recently? Food, bedding, washing powder? Owner: We did change his food. About two months ago we put him on a grain-free one, because a friend said it was better for skin. Vet: Okay. And has he ever had anything like this before? Owner: Actually, yes. Last summer he licked his paws a lot, but it cleared up by itself in the autumn. Vet: That's interesting, because itching that comes back at the same time of year can point towards an allergy to things like pollen. Let me have a look at him now. Good boy. His paws are a bit red between the pads, but there are no open sores. Now the left ear. Steady, Bramble. The canal is red and narrowed, and there's a brown discharge. The right ear's clean. Owner: Is it an infection? Vet: Very likely. I'm going to take an ear swab and look at it under the microscope. That tells me whether it's yeast or bacteria, so I can pick the right drops. I'll also give him his flea treatment while he's here. Owner: And the food? Should I change it back? Vet: Going back to his old food is sensible, but working out a food allergy properly needs a careful diet trial over several weeks. So let's settle the ear first, and talk about that afterwards. In the meantime, try to keep him out of the lake until the ear's better, and dry his ears after any baths. Owner: He won't like that, but okay. Vet: I'd like to see him again in ten days, to check the ear's settling. Owner: Great. Thanks very much.",
      "gaps": [
        {
          "id": "g1",
          "label": "Scratching for",
          "answer": "six weeks",
          "variants": [
            "6 weeks"
          ]
        },
        {
          "id": "g2",
          "label": "Mainly licks his",
          "answer": "paws"
        },
        {
          "id": "g3",
          "label": "Ear affected",
          "answer": "left ear",
          "variants": [
            "left"
          ]
        },
        {
          "id": "g4",
          "label": "Smell from ear",
          "answer": "yeasty"
        },
        {
          "id": "g5",
          "label": "Head shaking mostly",
          "answer": "at night",
          "acceptExhaustive": true
        },
        {
          "id": "g6",
          "label": "Last flea treatment",
          "answer": "January"
        },
        {
          "id": "g7",
          "label": "Daily activity",
          "answer": "swimming"
        },
        {
          "id": "g8",
          "label": "Food changed to",
          "answer": "grain-free",
          "variants": [
            "grain free"
          ]
        },
        {
          "id": "g9",
          "label": "Similar episode",
          "answer": "last summer",
          "acceptExhaustive": true
        },
        {
          "id": "g10",
          "label": "Left canal",
          "answer": "narrowed"
        },
        {
          "id": "g11",
          "label": "Sample taken",
          "answer": "ear swab",
          "variants": [
            "swab"
          ]
        },
        {
          "id": "g12",
          "label": "Recheck in",
          "answer": "ten days",
          "variants": [
            "10 days"
          ]
        }
      ]
    },
    "guidanceNote": "The owner gives the history and the vet then describes the examination. Left and right are both mentioned, as are several times of year and months, so be sure which side and which time each heading asks for."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-presentation-strength-lost-in-hospital",
    "title": "Part C — Why older patients lose strength in hospital",
    "prompt": "You will hear part of a presentation by a consultant geriatrician on why older patients lose strength in hospital and what wards can do about it. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "hospital-deconditioning",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "She says patients are put to bed not because anyone prescribes it but by default, and nobody suggests otherwise.",
          "evidence": "usually without anybody deciding that it should",
          "wrong": {
            "b": "The opposite: she says nobody writes bed rest in the notes any more.",
            "c": "Confusion is one reason for admission in her list, not the group the problem mainly affects."
          }
        },
        "q2": {
          "why": "The infection was often treated well; she blames how the patient was looked after during treatment.",
          "evidence": "What's taken her independence is the way we looked after her while we treated it.",
          "wrong": {
            "a": "The family blames the infection, but she says it was often treated perfectly well.",
            "c": "The woman walked to the post office on Monday; the weakness developed in hospital."
          }
        },
        "q3": {
          "why": "She says keeping patients still only moves the risk: the fall happens at home a month later instead.",
          "evidence": "The trouble is that it simply moves the risk.",
          "wrong": {
            "a": "She says it happens without anyone saying it out loud, not as formal policy.",
            "b": "Weaker legs are the result of bed rest and make the later fall more likely."
          }
        },
        "q4": {
          "why": "Dressed patients are treated as people going home by staff, relatives and the patients themselves.",
          "evidence": "Staff treat them differently, relatives treat them differently, and, frankly, they treat themselves differently.",
          "wrong": {
            "b": "Infection risk from gowns is never mentioned.",
            "c": "The opposite: she says getting people dressed costs almost nothing."
          }
        },
        "q5": {
          "why": "She welcomes physiotherapists but says the other twenty-three and a half hours, run by other staff, matter more.",
          "evidence": "But I'd argue that's the wrong answer to this particular problem.",
          "wrong": {
            "a": "Too strong: she calls more physiotherapists the wrong answer to this problem.",
            "c": "She never ranks physiotherapists against training; she wants it to be everyone's job."
          }
        },
        "q6": {
          "why": "She wants distance walked and time out of bed written down as seriously as blood pressure and temperature.",
          "evidence": "to be written down with the same seriousness, every single day",
          "wrong": {
            "a": "She asks the family what the patient could do last week, not to walk with them.",
            "b": "She mentions observations only as the model for recording mobility."
          }
        }
      },
      "speakers": [
        {
          "role": "Presenter",
          "voice": "shimmer"
        }
      ],
      "audioScript": "Presenter: Good morning. I'm a geriatrician, and I'd like to talk about something that happens on almost every ward in this hospital, usually without anybody deciding that it should. An older person comes in with a chest infection, or a fall, or a bit of confusion, and they're put to bed. Not because bed is the treatment. Nobody writes bed rest in the notes any more. They're put to bed because that's what a hospital bed is for, and then they stay there, because nobody gets round to suggesting otherwise. What does that cost? More than most of us assume, and faster. Studies in healthy older volunteers, people with nothing at all wrong with them, found that around ten days in bed took away a noticeable share of the strength in their legs, and they didn't get all of it back when they got up. Now add an acute illness, a poor appetite and a bit of delirium, and you can see why a woman who walked to the post office on Monday can need two people and a frame to get to the toilet by the following week. And I want to be precise about this, because the family will usually blame the infection. Often the infection's been treated perfectly well. What's taken her independence is the way we looked after her while we treated it. So why does it keep happening? I don't think it's laziness, and I don't think it's ignorance either. Let me start with the reason I hear most, which is falls. Wards are judged on their falls, quite rightly, and a patient who stays in bed can't fall over. So without anyone saying it out loud, keeping people still starts to look like the safe option. The trouble is that it simply moves the risk. The fall we prevent this week becomes the fall at home next month, in someone whose legs are now weaker than when she came in, and that fall doesn't appear on the ward's figures at all. We've swapped a risk we can see for one we can't. Then there's everything we attach to people. A drip, a catheter, oxygen tubing, a monitor lead. Each of them is reasonable on its own. Together they tie a patient to the bed far more effectively than any instruction could, and I'd encourage you, every morning, to ask whether each line is still earning its place. A catheter that's there because it was convenient in the emergency department is a very good way to stop someone walking. And there's something smaller, which I've come to think matters more than it looks. Pyjamas. A person in a hospital gown, lying down, is a patient. The same person dressed in their own clothes and sitting in a chair is somebody who's going home. Staff treat them differently, relatives treat them differently, and, frankly, they treat themselves differently. Getting people dressed costs almost nothing, and on the wards where it's become routine, people get up more. Now, I should be fair here, because I've been accused of making this sound simple. It isn't. Some patients are genuinely too unwell to move, and for them rest is right, at least for a day or two. And falls in hospital do real harm. I've seen a fractured hip on a ward I was responsible for, and the nurse involved was devastated, and she'd done nothing wrong. So I'm not asking anyone to take risks lightly. I'm asking that the risk of not moving gets weighed at all, because at the moment it usually isn't. The response I hear most often is that we need more physiotherapists. We do, and I'd never turn one away. But I'd argue that's the wrong answer to this particular problem. A physiotherapist might see a patient for half an hour a day. That leaves twenty-three and a half hours, and what happens in those hours is decided by the healthcare assistant who walks someone to the toilet instead of bringing a commode, by the nurse who sets up breakfast at the table instead of on the bed, by the doctor who asks the patient to stand up during the ward round. None of that needs a referral. It needs it to be everyone's job rather than one profession's. So here's what I'd like you to take away. We record blood pressure, temperature and oxygen levels every few hours, and nobody questions why. I'd like how far a patient walked, and how long they spent out of bed, to be written down with the same seriousness, every single day. And on admission, ask the family the one question you might not think of asking, which is what she could do last week. Because if you don't know where she started, you'll never notice what she's lost, and she'll go home a different person without anyone having decided that either.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker say about older patients staying in bed on admission?",
          "options": [
            {
              "id": "a",
              "text": "It usually happens without any deliberate decision being made."
            },
            {
              "id": "b",
              "text": "Doctors still prescribe it too readily for chest infections."
            },
            {
              "id": "c",
              "text": "It is mainly a problem in patients who arrive confused."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q2",
          "stem": "According to the speaker, what usually takes away the woman's independence?",
          "options": [
            {
              "id": "a",
              "text": "An infection that was treated too slowly."
            },
            {
              "id": "b",
              "text": "The way she is cared for during treatment."
            },
            {
              "id": "c",
              "text": "Weakness in her legs before she was admitted."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q3",
          "stem": "What does the speaker say about keeping patients in bed to prevent falls?",
          "options": [
            {
              "id": "a",
              "text": "Most wards have now adopted it as formal policy."
            },
            {
              "id": "b",
              "text": "It is justified once a patient's legs are weak."
            },
            {
              "id": "c",
              "text": "It shifts the danger to a later time and place."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q4",
          "stem": "Why does the speaker mention getting patients dressed?",
          "options": [
            {
              "id": "a",
              "text": "It alters how patients are seen, including by themselves."
            },
            {
              "id": "b",
              "text": "It lowers the infection risk linked with hospital gowns."
            },
            {
              "id": "c",
              "text": "It takes up too much staff time on busy mornings."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q5",
          "stem": "What is the speaker's view of employing more physiotherapists?",
          "options": [
            {
              "id": "a",
              "text": "It would solve the problem if the funding allowed."
            },
            {
              "id": "b",
              "text": "It matters less than what other staff do all day."
            },
            {
              "id": "c",
              "text": "It should come before training healthcare assistants."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q6",
          "stem": "What does the speaker finally ask staff to do?",
          "options": [
            {
              "id": "a",
              "text": "Encourage relatives to walk patients during visits."
            },
            {
              "id": "b",
              "text": "Take observations more often in patients who rarely get out of bed."
            },
            {
              "id": "c",
              "text": "Record mobility as routinely as the standard vital signs."
            }
          ],
          "answer": "c"
        }
      ]
    },
    "guidanceNote": "The speaker often states a common belief and then corrects it, so listen for the turn after words like \"the trouble is\" or \"but I'd argue\". Her concession about rest and falls is real but limited; do not let it replace her main argument."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-interview-pharmacist-minor-ailments-service",
    "title": "Part C — A pharmacist on the minor-ailments service",
    "prompt": "You will hear part of an interview with a community pharmacist about running a minor-ailments service and when to send people elsewhere. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "community-pharmacy",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "He says a surprising number mainly want to know whether their problem is something to worry about.",
          "evidence": "mainly want someone to tell them whether this is something to worry about",
          "wrong": {
            "a": "He says people assume this, and it is only sometimes true.",
            "c": "He never says people come to reach a GP faster."
          }
        },
        "q2": {
          "why": "Agreeing that the skill is knowing what he cannot treat, he says spotting the case that is not straightforward is hardest to teach.",
          "evidence": "it's the part that's hardest to teach",
          "wrong": {
            "a": "The opposite: he says treating a straightforward sore throat isn't difficult.",
            "b": "He explains referrals to patients but does not call this hard to teach."
          }
        },
        "q3": {
          "why": "A woman and a man with identical symptoms are handled differently, so who the patient is changes the action.",
          "evidence": "the same symptoms mean something different depending on who's in front of me",
          "wrong": {
            "b": "It is patients who sometimes find it unfair; he supports the rule.",
            "c": "He refuses to treat men and says a GP needs to look properly."
          }
        },
        "q4": {
          "why": "He explains what to expect and when to come back, which he calls safety-netting.",
          "evidence": "I tell them what I'd expect to happen, and when, and what would change my mind.",
          "wrong": {
            "a": "He does not simply refer them; he says not to just say no.",
            "b": "A week is when to come back or call the GP, not when he supplies antibiotics."
          }
        },
        "q5": {
          "why": "He calls over-referral the opposite risk, which people talk about much less than commercial pressure.",
          "evidence": "I'd also admit the opposite risk, which people talk about much less.",
          "wrong": {
            "a": "This is the critics' point, which is the commonly discussed one.",
            "c": "Missing serious illness is a concern he raises, but not as the less discussed risk."
          }
        },
        "q6": {
          "why": "He rejects judging by how many are seen and would judge by what happens to those referred on.",
          "evidence": "I'd judge it on what happens to the people we send on.",
          "wrong": {
            "b": "The opposite: this is how he says the service is often judged now.",
            "c": "He wants a good handover, but speed of seeing the GP is not his measure."
          }
        }
      },
      "speakers": [
        {
          "role": "Interviewer",
          "voice": "nova"
        },
        {
          "role": "Pharmacist",
          "voice": "onyx"
        }
      ],
      "audioScript": "Interviewer: Your pharmacy runs a minor-ailments service. For anyone who hasn't used one, what actually happens when somebody walks in? Pharmacist: They come to the counter, usually with something they've had for a day or two, a sore throat, an itchy rash, a child with earache, and we take them into the consultation room. It's a proper consultation. I take a history, I look where I can, and then either I can deal with it here, with advice or something from the shelf, or I can't, and I send them on. On a busy day I'll see somewhere between ten and fifteen people that way. It's free for the patient, and there's no appointment, which is really the whole point. Interviewer: And what do most people want from you? Pharmacist: Less than you'd think. People assume it's about getting a medicine without seeing a doctor. Sometimes it is. But a surprising number of them mainly want someone to tell them whether this is something to worry about. The mum with the feverish toddler at nine at night isn't really after a product. She's after permission to stop panicking, or a clear reason not to. I'd say a good half of my job is that conversation. Interviewer: The skill, presumably, is knowing what you can't treat. Pharmacist: That's exactly it, and it's the part that's hardest to teach. Treating a straightforward sore throat isn't difficult. Most of them are viral, they'll settle within a week or so, and the advice is fluids, rest and simple pain relief. What matters is spotting the one that isn't straightforward. The adult who can't swallow their own saliva. The child who's floppy and won't make eye contact. The headache that came on like a blow to the back of the head. Those people shouldn't be in my consultation room at all, and if they are, my job is to get them somewhere else quickly, sometimes by ringing for an ambulance myself rather than handing them a leaflet. Interviewer: Are there groups you'll always refer, however mild it seems? Pharmacist: A few. Very young babies with a temperature, for one. And there are some where the same symptoms mean something different depending on who's in front of me. A young woman with cystitis symptoms, I can usually manage, within the agreed pathway. A man with exactly the same symptoms, I won't, because in a man it's not treated as a simple infection, and it needs a GP to look into it properly. Patients sometimes find that unfair. I'd rather explain it than pretend. Interviewer: Do people get frustrated when you won't give them antibiotics? Pharmacist: Some do, and I understand why. They've taken a morning off work, they feel awful, and I'm telling them it'll get better on its own. What I've learned is not to just say no. I tell them what I'd expect to happen, and when, and what would change my mind. If you're no better in a week, if you can't keep fluids down, if your breathing changes, come back or call your GP, and here's how. That's what I mean by safety-netting, and honestly, I think it's the most important thing I say all day, because it's what protects them once they've walked out of the door. Interviewer: Critics would say pharmacists are under commercial pressure to sell something. Pharmacist: It's a fair challenge, and I won't pretend the shop isn't there. But the service pays us for the consultation, not for the product, and if somebody leaves with nothing but advice, that's a perfectly good outcome. I'd also admit the opposite risk, which people talk about much less. When you're new to this, it's very tempting to refer anything slightly uncertain, because it feels safe. It isn't really. You've just pushed that person back into the queue for a GP appointment they didn't need, and you've taught them the pharmacy can't help. Interviewer: So what makes a referral work well? Pharmacist: Being able to make it properly. At the moment, too often, I'm telling someone to ring their surgery in the morning and hope. That's not a referral, it's a suggestion. Where we have a direct route, where I can send my notes across and the practice knows why I'm sending them, it's completely different. The patient doesn't have to start again, the GP gets what I found, and I hear back if I got it wrong, which is how I get better. Interviewer: If you could change one thing about the service, what would it be? Pharmacist: That route, everywhere. The service is often judged on how many people we see. I'd judge it on what happens to the people we send on. If the handover is good, a pharmacy can safely take a great deal off general practice. If it isn't, we're just another door people knock on before the one they actually needed.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the pharmacist say many people mainly want from the service?",
          "options": [
            {
              "id": "a",
              "text": "A medicine without waiting to see a doctor."
            },
            {
              "id": "b",
              "text": "A judgement on whether their problem is serious."
            },
            {
              "id": "c",
              "text": "A faster route to a GP appointment."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q2",
          "stem": "What does he regard as the hardest skill to teach?",
          "options": [
            {
              "id": "a",
              "text": "Treating common viral infections with confidence."
            },
            {
              "id": "b",
              "text": "Explaining to patients why they are being referred."
            },
            {
              "id": "c",
              "text": "Recognising the patients who need to be elsewhere."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q3",
          "stem": "Why does he mention a man with urinary symptoms?",
          "options": [
            {
              "id": "a",
              "text": "To show the same symptoms may need different action."
            },
            {
              "id": "b",
              "text": "To give an example of a rule he thinks is unfair."
            },
            {
              "id": "c",
              "text": "To argue the pathway should be widened to include men."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q4",
          "stem": "How does he deal with patients who want antibiotics?",
          "options": [
            {
              "id": "a",
              "text": "He sends them to their GP to avoid an argument."
            },
            {
              "id": "b",
              "text": "He agrees to supply them if symptoms last a week."
            },
            {
              "id": "c",
              "text": "He tells them what should make them seek help again."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q5",
          "stem": "What risk does he say is discussed less often?",
          "options": [
            {
              "id": "a",
              "text": "Selling products that patients do not really need."
            },
            {
              "id": "b",
              "text": "Referring patients who could have been helped."
            },
            {
              "id": "c",
              "text": "Missing serious illness in a busy shop."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q6",
          "stem": "What does he think the service should be judged on?",
          "options": [
            {
              "id": "a",
              "text": "The outcome for the patients passed on."
            },
            {
              "id": "b",
              "text": "The number of patients each pharmacy sees."
            },
            {
              "id": "c",
              "text": "How quickly referred patients see their GP."
            }
          ],
          "answer": "a"
        }
      ]
    },
    "guidanceNote": "The interviewer sometimes suggests an answer, and the pharmacist does not always accept it. Listen for what he adds after agreeing. Two options may repeat words he uses, such as a week or a GP, but only one matches his meaning."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-presentation-helping-families-of-children-who-stammer",
    "title": "Part C — Helping families of children who stammer",
    "prompt": "You will hear part of a presentation by a speech and language therapist on helping families of young children who stammer. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "childhood-stammering",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "She says a parent who believes they caused the stammer will either hover anxiously or try not to notice, and neither helps the child.",
          "evidence": "A parent who believes they caused it will either hover anxiously over every word or try very hard not to notice, and neither of those helps the child.",
          "wrong": {
            "a": "Moving house is one of the parents' own theories, which she rejects; parents don't cause stammering.",
            "c": "She never says the guilt fades with therapy; she deals with it first because it gets in the way."
          }
        },
        "q2": {
          "why": "The child hears that their talking is a problem the adults have noticed and that they are failing at a trick.",
          "evidence": "They hear that the way they talk is a problem the grown-ups have noticed, and that there's a trick they're failing to use.",
          "wrong": {
            "b": "The opposite: she says it is kind and meant to help.",
            "c": "She never says children slow down too much; the risk is pushing harder or avoiding words."
          }
        },
        "q3": {
          "why": "The father slowed his own speech and waited, and the stammer reduced without anyone talking to the boy about his speech.",
          "evidence": "He slowed his own speech down a little, and he waited. Within a few weeks the boy was stammering noticeably less",
          "wrong": {
            "a": "Filming helped the father see his own behaviour; it did not change the boy's fluency.",
            "b": "The opposite: nobody had said a word to the child about his speech."
          }
        },
        "q4": {
          "why": "She used to dismiss these programmes but now accepts that the trials are good and they work for families who like structure.",
          "evidence": "But the trials are good, and I've seen it work beautifully with families who like a clear structure and a daily routine.",
          "wrong": {
            "a": "That was her earlier opinion, which she now says was unfair.",
            "b": "The opposite: it has to be done with a therapist, not improvised from a leaflet."
          }
        },
        "q5": {
          "why": "She accepts that many children stop on their own but says this is wrongly used as a reason not to refer.",
          "evidence": "But it's often used as a reason not to refer.",
          "wrong": {
            "a": "The opposite: she says a lot of preschool children will stop on their own.",
            "c": "She says even a child likely to recover benefits from an early appointment."
          }
        },
        "q6": {
          "why": "She encourages parents to talk about it openly and calmly, as they would about a grazed knee.",
          "evidence": "I encourage parents to talk about it openly and calmly, in the same voice they'd use about a grazed knee.",
          "wrong": {
            "b": "The opposite: she says stammering isn't a secret and should be talked about openly.",
            "c": "She never promises it will pass; she wants it discussed as something that happens."
          }
        }
      },
      "speakers": [
        {
          "role": "Presenter",
          "voice": "nova"
        }
      ],
      "audioScript": "Presenter: Good afternoon. I'm a speech and language therapist, and for most of my working life I've seen young children who stammer, usually between the ages of two and six, and usually with a parent sitting next to them looking worried and slightly guilty. I want to start with the guilt, because it gets in the way of everything else. Almost every parent I meet has a theory about what they did wrong. They moved house, they had another baby, they shouted one morning, they let the child watch too much television. And I tell them, every time, that parents don't cause stammering. The evidence points strongly to the way a child's brain is organising speech and language, and it often runs in families. That's not a small reassurance. A parent who believes they caused it will either hover anxiously over every word or try very hard not to notice, and neither of those helps the child. So what does help? Here's the argument I want to make this afternoon. The most useful thing I can do for a young child who stammers is often not done with the child at all. It's done with the adults, and it's about changing the conditions the child talks in rather than correcting the talking itself. Let me give you the most common example. When a child gets stuck, the instinct of nearly every loving adult is to say slow down, or take a deep breath, or start again. It's kind, and it's meant to help. But think about what the child hears. They hear that the way they talk is a problem the grown-ups have noticed, and that there's a trick they're failing to use. Some children start pushing harder to get the words out, and some begin to avoid words they've had trouble with. I'd much rather the parent said nothing about the stammer in that moment and simply waited, looking at the child, as if they had all the time in the world. Because the message that matters is that what you're saying is worth waiting for. I remember a father who came to me convinced that his son's stammer was getting worse. When I watched them play together, the boy was perfectly fluent for long stretches, but his dad was asking a question every few seconds, and whenever the boy got stuck, he finished the sentence for him. He was quick, he was clever, and he was trying to rescue him. We filmed ten minutes of them playing, and when he watched it back he said, quite quietly, I don't let him finish anything, do I. He made two changes. He slowed his own speech down a little, and he waited. Within a few weeks the boy was stammering noticeably less, and nobody had said a word to the child about his speech. Now I want to be fair here, because I haven't always been. There are well-researched programmes where the parent does talk to the child about their speech, praising smooth talking and, gently, now and then, asking them to say a bumpy word again. For years I was rather dismissive of that, because it seemed to go against everything I've just told you. But the trials are good, and I've seen it work beautifully with families who like a clear structure and a daily routine. So I don't think there's one right method. What I'd say is that the method has to suit the family, and that it has to be done with a therapist, not improvised from a leaflet. The other thing I'd like to challenge is waiting to see. A lot of preschool children who start to stammer will stop on their own, and that's true, and it's genuinely reassuring. But it's often used as a reason not to refer. We know some things that make it less likely a child will grow out of it, for instance if a close relative still stammers as an adult, or if it's been going on for more than a year. And even when a child is likely to recover, an early appointment does no harm. Parents come away knowing what to do instead of guessing, and the child's experience of talking stays a positive one. Finally, I want to mention the child's own feelings, because we tend to assume very young children don't notice. Many do. A four-year-old may tell you my words are stuck, or stop putting their hand up at nursery. When that happens, I encourage parents to talk about it openly and calmly, in the same voice they'd use about a grazed knee. Stammering is something that happens, it isn't a secret, and it certainly isn't naughty. So, to bring this together. If you see a family worried about a child's stammering, take away the blame first. Then help the adults give the child time rather than instructions. And refer early, because waiting to see costs the family months of worry that a single conversation could have eased.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the speaker say about parents' feelings of guilt?",
          "options": [
            {
              "id": "a",
              "text": "They are usually linked to a recent upheaval at home."
            },
            {
              "id": "b",
              "text": "They can lead parents to react in ways that do not help."
            },
            {
              "id": "c",
              "text": "They tend to fade once the child begins therapy."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q2",
          "stem": "Why does the speaker object to telling a child to slow down?",
          "options": [
            {
              "id": "a",
              "text": "It signals that adults see their talking as a problem."
            },
            {
              "id": "b",
              "text": "It is rarely said in a tone that is kind enough."
            },
            {
              "id": "c",
              "text": "It makes children speak too slowly for others to follow them."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q3",
          "stem": "What does the story of the father show?",
          "options": [
            {
              "id": "a",
              "text": "Filming a child at play tends to make them more fluent."
            },
            {
              "id": "b",
              "text": "The boy also needed some direct work on his speech."
            },
            {
              "id": "c",
              "text": "A change in the parent's behaviour reduced the stammer."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q4",
          "stem": "What is the speaker's view now of programmes in which parents comment on speech?",
          "options": [
            {
              "id": "a",
              "text": "They contradict what is known about how parents should react."
            },
            {
              "id": "b",
              "text": "They are safe for parents to run without a therapist."
            },
            {
              "id": "c",
              "text": "They can work well for some families."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q5",
          "stem": "What does the speaker say about waiting to see whether a stammer stops?",
          "options": [
            {
              "id": "a",
              "text": "Most young children who stammer will not stop on their own."
            },
            {
              "id": "b",
              "text": "The chance of natural recovery is no reason to delay referral."
            },
            {
              "id": "c",
              "text": "Early appointments should be kept for the children at higher risk."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q6",
          "stem": "If a young child seems aware of their stammer, the speaker advises parents to",
          "options": [
            {
              "id": "a",
              "text": "talk about it calmly and in a matter-of-fact way."
            },
            {
              "id": "b",
              "text": "avoid mentioning it so that it is not reinforced."
            },
            {
              "id": "c",
              "text": "reassure the child that it will soon go away."
            }
          ],
          "answer": "a"
        }
      ]
    },
    "guidanceNote": "The speaker builds one argument: work with the adults, not the child's speech. Listen for where she changes her mind about structured programmes, and separate what she used to think from what she thinks now. Several options repeat her words but reverse her point, so check the meaning, not the vocabulary."
  },
  {
    "subTest": "LISTENING",
    "taskType": "LISTENING_PART_C",
    "profession": null,
    "slug": "lis-c-interview-minor-injuries-and-when-to-x-ray",
    "title": "Part C — Minor injuries and deciding who needs an X-ray",
    "prompt": "You will hear part of an interview with an emergency nurse practitioner about seeing minor injuries and deciding who needs an X-ray. For questions 1–6, choose the answer (A, B or C) which fits best according to what you hear.",
    "difficulty": "CORE",
    "topicTag": "minor-injuries",
    "timeLimitSeconds": 0,
    "active": true,
    "payload": {
      "explanations": {
        "q1": {
          "why": "She says she does not X-ray because an ankle is swollen, as swelling alone says little about the bone.",
          "evidence": "because swelling on its own tells you very little about the bone",
          "wrong": {
            "a": "The opposite: swelling is something she does not X-ray for.",
            "b": "She says some of the most dramatic-looking ankles were sprains."
          }
        },
        "q2": {
          "why": "She used to give in sometimes, but now spends a few minutes showing and explaining why the picture would not change treatment.",
          "evidence": "Now I'd rather spend three minutes explaining.",
          "wrong": {
            "a": "That was her practice early in her career, not now.",
            "c": "She stresses the decision is not made to save money."
          }
        },
        "q3": {
          "why": "Hearing there is no fracture can make people think nothing is wrong and go back to football before the ligament heals.",
          "evidence": "then they're back on a football pitch a week later and the ligament never heals properly",
          "wrong": {
            "b": "The opposite: she says the radiation for an ankle is tiny.",
            "c": "She never says fractures are wrongly reported; her wrist point is that some do not show at all."
          }
        },
        "q4": {
          "why": "With drink, reduced sensation, a distracting injury or a toddler, she cannot rely on what the patient tells her about tenderness.",
          "evidence": "I can't rely on what they tell me about tenderness",
          "wrong": {
            "a": "Waiting is why patients want an X-ray, not why she orders one.",
            "b": "She says dramatic-looking ankles were often sprains."
          }
        },
        "q5": {
          "why": "A fracture in that bone may not show on the first film, so she splints and arranges follow-up if the signs are there.",
          "evidence": "If the clinical signs are there, I'll put the wrist in a splint and arrange follow-up through the fracture clinic",
          "wrong": {
            "b": "Follow-up is through the fracture clinic; she says nurse practitioners discharge most patients without a doctor.",
            "c": "She never mentions a repeat X-ray the same day."
          }
        },
        "q6": {
          "why": "She tells patients what recovery should look like and exactly when to return, in writing, and calls this the safety net.",
          "evidence": "That safety net is what makes it reasonable not to image.",
          "wrong": {
            "a": "She says there isn't always a second person checking.",
            "c": "She gives return advice; she does not book every patient a follow-up."
          }
        }
      },
      "speakers": [
        {
          "role": "Interviewer",
          "voice": "echo"
        },
        {
          "role": "Nurse",
          "voice": "shimmer"
        }
      ],
      "audioScript": "Interviewer: Most people who walk into a minor injuries unit with a twisted ankle expect to leave with an X-ray. How often do they actually need one? Nurse: Less often than they think. Of the ankle injuries I see in a shift, I'd expect to X-ray well under half. Most are sprains, and an X-ray wouldn't change a single thing I'd do for them. People are often surprised by that, because they assume the picture is the examination, when really it's the other way round. Interviewer: So how do you decide? Nurse: With my hands, mostly. We use a well-validated set of rules for ankles and feet. I press along the back edge and the tip of the bony bump on each side of the ankle, and on a couple of specific points on the foot. If those spots are tender, or if the patient couldn't take four steps, both straight after the injury and when I see them, they get an X-ray. If none of that applies, the chance of a significant fracture is very low. What I'm not doing is X-raying because the ankle's swollen or bruised, because swelling on its own tells you very little about the bone. Some of the most dramatic-looking ankles I've seen were sprains. Interviewer: But patients must push back. Nurse: They do, and I understand why. They've been in pain, they've waited, and an X-ray feels like proof that someone's taken them seriously. Early in my career I'd sometimes give in, I'll be honest. Now I'd rather spend three minutes explaining. I show them where I pressed and why it matters, and I tell them plainly that the picture wouldn't alter their treatment. Most people are perfectly happy once they understand the decision was made on purpose, and not to save money. The ones who leave unhappy are usually the ones nobody explained anything to. Interviewer: Is there a cost to over-imaging, apart from money? Nurse: There's radiation, though for an ankle it's tiny. The bigger cost is time, for that patient and everyone queuing behind them. And there's a less obvious problem. An X-ray can give false reassurance. People hear no fracture and assume nothing's wrong, then they're back on a football pitch a week later and the ligament never heals properly. Interviewer: Are there patients the rules don't work for? Nurse: Yes, and that matters just as much as the rules themselves. If someone's had a lot to drink, or they've got reduced feeling in their feet, say from diabetes, or there's a more painful injury somewhere else that's distracting them, I can't rely on what they tell me about tenderness. Very young children are another group, because a toddler can't tell you where it hurts. In those cases my threshold for imaging drops, and I'm comfortable with that. Interviewer: And wrists? Nurse: Wrists are my favourite example of why an X-ray isn't the final word. After a fall onto an outstretched hand, I'm always thinking about one small bone near the base of the thumb. If it's tender in that hollow, I'll X-ray, but a fracture there often doesn't show up on the first film. So a normal picture doesn't end the story. If the clinical signs are there, I'll put the wrist in a splint and arrange follow-up through the fracture clinic, because a missed break in that bone can lose its blood supply and leave someone with a painful wrist for years. Interviewer: That sounds as if you're sometimes treating a fracture you can't see. Nurse: I am, and that's the point I'd most like people to take away. The decision rests on the examination. The X-ray is there to answer a specific question that the examination has raised, and if I haven't got a question, I don't need the picture. Interviewer: What happens to the people you don't X-ray? Nurse: They get the same careful advice as everyone else, probably more. I tell them what normal recovery looks like, roughly how long it should take, and exactly what would make me want to see them again, for example if they still can't put weight on it after a few days, or the pain's getting worse rather than better. I write it down too, because nobody remembers much when they're sore and tired. That safety net is what makes it reasonable not to image. Without it, I'd simply be guessing. Interviewer: Has the job changed much since you started? Nurse: The biggest change is that nurse practitioners now request these X-rays ourselves, within agreed protocols, and we discharge most of our patients without a doctor being involved. That's a lot of responsibility. It means the examination has to be thorough every single time, because there isn't always a second person checking. But I think patients get a quicker, more consistent service, and frankly a better explanation than they used to.",
      "questions": [
        {
          "id": "q1",
          "stem": "What does the nurse say about swelling after an ankle injury?",
          "options": [
            {
              "id": "a",
              "text": "It is the main reason she asks for an X-ray."
            },
            {
              "id": "b",
              "text": "It suggests a fracture more often than a sprain."
            },
            {
              "id": "c",
              "text": "It is a poor guide to whether a bone is broken."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q2",
          "stem": "How does she now respond to patients who want an X-ray?",
          "options": [
            {
              "id": "a",
              "text": "She agrees to an X-ray if the patient insists."
            },
            {
              "id": "b",
              "text": "She explains the reasons for her decision."
            },
            {
              "id": "c",
              "text": "She points out what imaging costs the service."
            }
          ],
          "answer": "b"
        },
        {
          "id": "q3",
          "stem": "What less obvious risk of an X-ray does she describe?",
          "options": [
            {
              "id": "a",
              "text": "A normal result may lead patients to return to sport too soon."
            },
            {
              "id": "b",
              "text": "The radiation from an ankle film is more than people realise."
            },
            {
              "id": "c",
              "text": "Small fractures on the film are often reported wrongly."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q4",
          "stem": "When does her threshold for imaging drop?",
          "options": [
            {
              "id": "a",
              "text": "When the patient has had a long wait to be seen."
            },
            {
              "id": "b",
              "text": "When the injury looks far worse than a simple sprain."
            },
            {
              "id": "c",
              "text": "When she cannot rely on what the patient reports."
            }
          ],
          "answer": "c"
        },
        {
          "id": "q5",
          "stem": "What point does she make with the example of the wrist?",
          "options": [
            {
              "id": "a",
              "text": "Clinical signs can justify treatment despite a normal X-ray."
            },
            {
              "id": "b",
              "text": "Wrist injuries should always be passed on to a doctor to assess."
            },
            {
              "id": "c",
              "text": "A second X-ray on the same day is usually needed."
            }
          ],
          "answer": "a"
        },
        {
          "id": "q6",
          "stem": "What does she say makes it reasonable not to X-ray a patient?",
          "options": [
            {
              "id": "a",
              "text": "Having a second clinician check her findings."
            },
            {
              "id": "b",
              "text": "Clear advice on when to come back."
            },
            {
              "id": "c",
              "text": "A follow-up appointment for every patient."
            }
          ],
          "answer": "b"
        }
      ]
    },
    "guidanceNote": "The interviewer's questions tell you which question is coming next, so use them as signposts. The nurse often mentions an idea only to dismiss it, such as swelling, radiation or giving in to patients. Listen for her own position after words like but, now and the bigger cost."
  }
];
