// GENERATED — DO NOT HAND-EDIT.
//
// Source:  C:/Projects/_handoffs/AlmiOET_Listening_PartA_13_items.json
//          sha256(first 16) = b125cc661b4f8377
// Built by scripts/seed/gen/_build_listening_sets.mts, which validates every
// payload against the runtime zod schema in src/lib/oet/tasks/listening.ts
// before writing. 13 LISTENING_PART_A item(s).
//
// Full-length consultation scripts, 550-600 words, 12 gaps each, written to the
// measured law in _handoffs/AlmiOET_likhne_ka_zabta.md §2.
//
// To change an item, change the source JSON and re-run the builder. Editing
// this file by hand breaks the only proof that it matches what was measured.
import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-3-dietetics-unintentional-weight-loss",
    "title": "Listening Part A · script 3 — Dietetics (unintentional weight loss)",
    "prompt": "You will hear a dietitian speaking to a patient. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "The number that matters is the loss over time, not the weight itself; each reason for eating less is separated out one at a time.",
    "payload": {
      "explanations": {"g1":{"why":"She weighed ten stone something at Christmas and eight stone on Sunday, and sums it up herself as two stone.","evidence":"So two stone, near enough.","watch":"Write the amount lost, two stone, not her current weight of eight stone or the earlier ten."},"g2":{"why":"Asked how long the loss has taken, she says it started in the summer, before Christmas, so about eight months.","evidence":"The summer, I'd say. Eight months.","watch":"Do not count from Christmas; she corrects herself and says the loss began in the summer."},"g3":{"why":"She still serves her usual dinner but only manages about half of it before she feels full.","evidence":"I get about half of it down, and then I've had enough.","watch":"Write the proportion, half; she does not say a quarter or most of it."},"g4":{"why":"Asked what she has stopped eating altogether, she names bread, saying it sits heavily.","evidence":"Bread. I can't be doing with bread now. It sits.","watch":"Write bread only; tea and chicken are foods that taste odd, not foods she has stopped."},"g5":{"why":"She says everything now tastes metallic, and compares it to having a coin in her mouth.","evidence":"Everything tastes metallic. Tea, chicken, the lot.","watch":"Check the spelling of metallic, with double l; do not write the foods she lists."},"g6":{"why":"Talking about chewing, she explains that her dentures have gone loose since she lost the weight.","evidence":"They've gone loose since I lost the weight","watch":"Write loose, not lost; she removes the dentures for hard food because they no longer fit."},"g7":{"why":"Asked who does her shopping, she says her neighbour brings it, going on a Friday.","evidence":"My neighbour brings it. She's very good, she goes on a Friday.","watch":"Write the person, neighbour; her daughter appears only as the owner of the scales."},"g8":{"why":"Cooking is hard because she can no longer stand at the cooker for twenty minutes and must sit down halfway.","evidence":"Standing. I can't stand at that cooker for twenty minutes any more.","watch":"Write standing, the problem, not twenty minutes or the food going cold."},"g9":{"why":"Asked about something she would always say yes to, she names custard and says she would have it any time.","evidence":"Custard. I'd have custard any time.","watch":"Spell custard correctly; do not write bread, which is the food she has given up."},"g10":{"why":"The dietitian checks she still takes metformin and says it can take the edge off appetite in some people.","evidence":"Are you still on the metformin? Patient: Twice a day. Dietitian: That can take the edge off an appetite in some people","watch":"Spell metformin carefully; twice a day is the dose pattern, not the name of the medicine."},"g11":{"why":"Asked about her bowels, she answers with one word: she is constipated, and has been for a while.","evidence":"How are your bowels? Patient: Constipated.","watch":"Write constipated or constipation, spelled in full; do not describe the bowel in your own words."},"g12":{"why":"Before changing any meal, the dietitian asks for a food diary of everything she eats, kept for seven days.","evidence":"A food diary — everything that goes in, for seven days","watch":"Write food diary; next Thursday is when she brings it back, not what she keeps."}},
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
      "gaps": [
        {
          "id": "g1",
          "label": "Reported weight loss: approximately",
          "answer": "two stone",
          "variants": [
            "2 stone",
            "about two stone",
            "nearly two stone"
          ]
        },
        {
          "id": "g2",
          "label": "Period over which the loss occurred",
          "answer": "eight months",
          "variants": [
            "8 months",
            "since the summer"
          ]
        },
        {
          "id": "g3",
          "label": "Proportion of the main meal now eaten",
          "answer": "half",
          "variants": [
            "about half",
            "half of it"
          ]
        },
        {
          "id": "g4",
          "label": "Food stopped altogether",
          "answer": "bread"
        },
        {
          "id": "g5",
          "label": "Change in taste: everything tastes",
          "answer": "metallic",
          "variants": [
            "like a coin",
            "metallic taste"
          ]
        },
        {
          "id": "g6",
          "label": "Problem with dentures since losing weight: they have become",
          "answer": "loose",
          "variants": [
            "they are loose"
          ]
        },
        {
          "id": "g7",
          "label": "Shopping is done by",
          "answer": "her neighbour",
          "variants": [
            "the neighbour",
            "a neighbour",
            "neighbour"
          ]
        },
        {
          "id": "g8",
          "label": "Difficulty with cooking",
          "answer": "standing",
          "variants": [
            "standing up",
            "she cannot stand",
            "standing at the cooker"
          ]
        },
        {
          "id": "g9",
          "label": "Food she would always accept",
          "answer": "custard"
        },
        {
          "id": "g10",
          "label": "Medication that may reduce appetite",
          "answer": "metformin"
        },
        {
          "id": "g11",
          "label": "Bowel pattern",
          "answer": "constipated",
          "variants": [
            "constipation"
          ]
        },
        {
          "id": "g12",
          "label": "First action agreed: keep a ______ for seven days",
          "answer": "food diary",
          "variants": [
            "diary",
            "a food diary"
          ]
        }
      ],
      "audioScript": "Dietitian: Come in and sit down, Mrs Odell. I'm Tomas, one of the dietitians. Your doctor has sent you across because of your weight, so I'd like to hear it from you rather than from the letter. Patient: Well, it's gone down. I know that. My skirts are hanging off me. Dietitian: Has anybody else said anything about it? Patient: The girl in the post office asked if I'd been poorly. That's when I rang the surgery. Dietitian: Do you have a number in mind? Patient: I weighed myself at my daughter's at Christmas and I was ten stone something. I was on her scales again on Sunday and it said eight stone. So two stone, near enough. Dietitian: And Christmas to now — how long is that in months for you? Patient: It started before Christmas, really. The summer, I'd say. Eight months. Dietitian: Thank you. That's the number that matters, not the weight itself. Now, an ordinary day. What happens at dinner time? Patient: I still cook it. I put it on the plate the same as always and I get about half of it down, and then I've had enough. It's not that it's horrible. I'm just full. Dietitian: Half the plate. Is there anything you've stopped having altogether? Patient: Bread. I can't be doing with bread now. It sits. Dietitian: Anything else changed about how food is? Patient: Everything tastes metallic. Tea, chicken, the lot. Like I've got a coin in my mouth. Dietitian: That's useful — it's a common reason people stop eating and nobody asks about it. What about chewing? Patient: My teeth. Well, they're not mine, are they. They've gone loose since I lost the weight, so I take them out for anything hard. Dietitian: So the food you can manage has got softer and smaller at the same time. Who does your shopping? Patient: My neighbour brings it. She's very good, she goes on a Friday. Dietitian: And the cooking itself — any difficulty with that? Patient: Standing. I can't stand at that cooker for twenty minutes any more. I have to sit down halfway through and then it's gone cold. Dietitian: Is there anything you'd always say yes to? Something that goes down easily. Patient: Custard. I'd have custard any time. My mother's answer to everything. Dietitian: Then we'll use it. Now, your tablets. Are you still on the metformin? Patient: Twice a day. Dietitian: That can take the edge off an appetite in some people, and I'll mention it to your doctor — I won't be changing it. How are your bowels? Patient: Constipated. I've been like that a while. Dietitian: That'll be doing you no favours either, and it'll settle as the eating settles. Here's what I'd like first, before I change a single meal. A food diary — everything that goes in, for seven days, written at the time and not at bedtime. Patient: It'll look very dull. Dietitian: Dull is what I want. And I'm not going to sit here and tell you to eat more, because nobody in the history of this clinic has ever eaten more because a dietitian told them to. What I want is the reason your body stopped asking, and then to take that reason away. So bring me the dull one. Then I'll know whether we're solving a taste problem, a teeth problem or a standing-up problem, and they need three different answers. Bring it back to me next Thursday. Patient: Drinks as well? Dietitian: Everything that goes past your lips. That is where half the answer usually hides."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-4-podiatry-an-ulcer-under-the-foot-in-diabetes",
    "title": "Listening Part A · script 4 — Podiatry (an ulcer under the foot in diabetes)",
    "prompt": "You will hear a podiatrist speaking to a patient. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Absent pain is the finding here, not a reassurance: the monofilament and the pulses are recorded separately because they answer different questions.",
    "payload": {
      "explanations": {"g1":{"why":"Asked when the mark appeared, the patient says three weeks ago, though it may have been there longer.","evidence":"Three weeks ago, thereabouts.","watch":"Keep the unit weeks; months is used later for how the hard skin built up."},"g2":{"why":"The podiatrist checks whether his wife spotted it, and he confirms she did while cutting his nails.","evidence":"And you said your wife made you come — was it her who spotted it? Patient: She did.","watch":"Write his wife, not the patient himself; he says he would not have come without her."},"g3":{"why":"On examination, the podiatrist locates the mark on the ball of the foot, right under the big toe joint.","evidence":"It's underneath, on the ball of the foot, right under the big toe joint.","watch":"Write big toe joint; do not shorten it to toe or write heel."},"g4":{"why":"When the podiatrist presses on the mark, the patient says it does not hurt at all.","evidence":"Does that hurt when I press? Patient: No. Nothing at all.","watch":"Record no pain; do not mistake the absence of pain for a word meaning it is mild."},"g5":{"why":"Asked what he wears round the house, he says slippers, which he wears for most of the day.","evidence":"Slippers. All day, mostly.","watch":"Write slippers; the proper shoes are advised later for walking, not what he wears now."},"g6":{"why":"He says he walks two miles on an ordinary day, to the shop and back and round the park.","evidence":"Two miles. I go down to the shop and back and then round the park.","watch":"Keep the unit miles and the number two; do not write the shop or park."},"g7":{"why":"Asked about his last eye check, he says it was last month and the result was fine.","evidence":"When was your last eye check? Patient: Last month.","watch":"Write last month; since my fifties refers to his diabetes, not to his eyes."},"g8":{"why":"The podiatrist tests six sites with the monofilament and the patient feels none of them.","evidence":"That was six of them. You felt none","watch":"Write the number of sites, six; none is how many he felt, not how many were tested."},"g9":{"why":"The podiatrist reports that both pulses in the foot are palpable, strong and easy to find.","evidence":"Both pulses in this foot are palpable — strong and easy","watch":"Write palpable, spelled correctly; both refers to the pulses, not to both feet."},"g10":{"why":"Explaining the mark, the podiatrist calls it hard skin built up over months, with a small break underneath.","evidence":"It's hard skin, built up over months, and there's a small break underneath it.","watch":"Write hard skin, the lesion itself; the small break is already in the note."},"g11":{"why":"After taking the hard skin down, the podiatrist dresses it with a foam pad to take the pressure off.","evidence":"dress it with a foam pad to take the pressure off","watch":"Write foam pad; light-coloured socks are advice, not the dressing applied."},"g12":{"why":"The podiatrist says she wants to see him again in one week, and he queries the short wait.","evidence":"I want to see you again in one week.","watch":"Write one week; do not write next week only, or a time for ringing in."}},
      "speakers": [
        {
          "role": "Podiatrist",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Mark first noticed",
          "answer": "three weeks ago",
          "variants": [
            "three weeks",
            "3 weeks",
            "about three weeks"
          ]
        },
        {
          "id": "g2",
          "label": "First noticed by",
          "answer": "his wife",
          "variants": [
            "wife",
            "her",
            "the wife"
          ]
        },
        {
          "id": "g3",
          "label": "Site: under the",
          "answer": "big toe joint",
          "variants": [
            "the big toe joint",
            "ball of the foot",
            "under the big toe"
          ]
        },
        {
          "id": "g4",
          "label": "Pain on pressure",
          "answer": "none",
          "variants": [
            "no pain",
            "nothing"
          ]
        },
        {
          "id": "g5",
          "label": "Footwear worn indoors",
          "answer": "slippers",
          "variants": [
            "slipper"
          ]
        },
        {
          "id": "g6",
          "label": "Walks approximately ______ each day",
          "answer": "two miles",
          "variants": [
            "2 miles",
            "about two miles"
          ]
        },
        {
          "id": "g7",
          "label": "Last eye check",
          "answer": "last month",
          "variants": [
            "a month ago",
            "one month ago"
          ]
        },
        {
          "id": "g8",
          "label": "Monofilament testing: sensation absent at ______ sites",
          "answer": "six",
          "variants": [
            "6",
            "all six",
            "six sites"
          ]
        },
        {
          "id": "g9",
          "label": "Foot pulses",
          "answer": "both palpable",
          "variants": [
            "palpable",
            "both pulses palpable",
            "strong"
          ]
        },
        {
          "id": "g10",
          "label": "Nature of the lesion: ______ with a break underneath",
          "answer": "hard skin",
          "variants": [
            "thick skin"
          ]
        },
        {
          "id": "g11",
          "label": "Dressing applied",
          "answer": "foam pad",
          "variants": [
            "foam",
            "a foam dressing",
            "foam dressing"
          ]
        },
        {
          "id": "g12",
          "label": "Review appointment in",
          "answer": "one week",
          "variants": [
            "a week",
            "1 week"
          ]
        }
      ],
      "audioScript": "Podiatrist: Mr Bhatti, come through. Sock and shoe off for me, both if you don't mind, and tell me what brought you. Patient: There's a mark on the bottom of my foot. I wouldn't have come, only my wife made me. Podiatrist: When did it turn up? Patient: Three weeks ago, thereabouts. It might have been there longer, I couldn't say. Podiatrist: And you said your wife made you come — was it her who spotted it? Patient: She did. She cuts my nails for me because I can't reach round, and she saw it and started on at me straight away. Podiatrist: She was right to. Let me have a proper look. It's underneath, on the ball of the foot, right under the big toe joint. Does that hurt when I press? Patient: No. Nothing at all. Podiatrist: No pain at all. I want to come back to that, because people think no pain means no problem and here it means the opposite. What do you wear round the house? Patient: Slippers. All day, mostly. I'm retired now. Podiatrist: How long have you had the diabetes? Patient: Since my fifties. Tablets to begin with, and there's an injection as well now. Podiatrist: And how far are you walking on an ordinary day? Patient: Two miles. I go down to the shop and back and then round the park. Podiatrist: That's good for you and it's a lot of weight going through this spot. When was your last eye check? Patient: Last month. They said it was fine this time. Podiatrist: Good — I ask because the eyes and the feet tell the same story. Now, this is the monofilament. It's a little plastic hair. Close your eyes and say yes each time you feel it. Patient: ... Was that it? I didn't feel anything. Podiatrist: That was six of them. You felt none, and that's the important finding today. The nerve that warns you has stopped warning you, so a stone in your slipper could sit there all afternoon. Most people expect some kind of warning before a foot goes wrong. Pain is that warning, and yours has been quietly switched off. Patient: I thought that was just old age. Podiatrist: It's the diabetes, and it can be helped but not undone. Now the blood supply. Both pulses in this foot are palpable — strong and easy — and that is genuinely good news, because it means you have the circulation to heal this. Patient: So what's the mark? Podiatrist: It's hard skin, built up over months, and there's a small break underneath it. I'm going to take that hard skin down today, dress it with a foam pad to take the pressure off, and I want to see you again in one week. Patient: A week? For that? Podiatrist: For that. And two things about socks while you're here: nothing with a tight band at the top, nothing with a thick seam across the toes, and a light colour if you can find them, because you will see something on a pale sock long before you feel it. Patient: It's a lot to remember. Podiatrist: It's two things, and the rest is my job. Look inside the shoe, and look at the foot. Nothing on the floor without something on your feet, indoors included. Hand inside both shoes every morning before you put them on. Patient: Can I still walk down to the shop? Podiatrist: You can, in proper shoes, and I'd rather you did. Ring me before next week if the sock marks at all."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-5-dentistry-jaw-pain-and-night-grinding",
    "title": "Listening Part A · script 5 — Dentistry (jaw pain and night grinding)",
    "prompt": "You will hear a dentist speaking to a patient. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "The morning pain, the clicking and the worn back teeth all point the same way; the answers are the patient's own words.",
    "payload": {
      "explanations": {"g1":{"why":"The patient says the worst of the ache is first thing, when she wakes, and the dentist sums this up as worst in the morning.","evidence":"And the worst of it is first thing — I wake up and it's already sore","watch":"Write the time of day, morning; four o'clock is when she wakes at night, a different gap."},"g2":{"why":"Asked how long it has been going on, she says four months, on and off at first and now most days.","evidence":"Four months. It was on and off at first and now it's most days.","watch":"Keep the unit months; in the last month refers to the locking, not the overall duration."},"g3":{"why":"Pointing with one finger, she shows the pain just in front of her right ear.","evidence":"Just here. In front of my right ear.","watch":"Include right; writing only ear loses the side, which the note asks for."},"g4":{"why":"Asked whether the joint makes a noise, she says it clicks every time she opens wide.","evidence":"It clicks. Every time I open wide.","watch":"Write clicking or it clicks; do not confuse it with locking, which is the next gap."},"g5":{"why":"Asked whether the jaw has ever stuck, she says it has happened twice, both times in the last month.","evidence":"Twice. Both times in the last month.","watch":"Write the number of episodes, twice; a few seconds is how long each one lasted."},"g6":{"why":"Asked what makes it worse during the day, she says chewing, especially food she has to work at.","evidence":"Chewing. Anything I have to work at — a steak, a crusty roll","watch":"Write chewing, not the foods steak or roll, and not the screen at work, which she links to headaches."},"g7":{"why":"Her partner tells her she grinds at night, and after the examination she and the dentist both confirm it as grinding.","evidence":"So I am grinding. Dentist: You're grinding","watch":"Write grinding; clicking is the noise she makes on opening, not what her partner hears at night."},"g8":{"why":"Asked what has changed recently, she says she started a new job in April, which she finds a lot.","evidence":"I started a new job in April.","watch":"Write a new job; April is when it started, not the change itself."},"g9":{"why":"Asked how much coffee she drinks, she says six a day, perhaps more on a bad day.","evidence":"Six a day. Maybe more on a bad one.","watch":"Write the number six; do not add the possible extra cups."},"g10":{"why":"She falls asleep easily but says she is awake at four every night, thinking about work.","evidence":"I'm awake at four, every night, thinking about work.","watch":"Write four; do not confuse it with four months, the length of her symptoms."},"g11":{"why":"On examination, the dentist finds her back teeth are worn flat, with enamel gone from the biting surfaces.","evidence":"your back teeth are worn flat.","watch":"Write worn flat; do not write enamel or biting surfaces, which explain the finding."},"g12":{"why":"The dentist will take impressions and make her a soft splint to wear at night over the upper teeth.","evidence":"make you a soft splint to wear at night","watch":"Write soft splint; impressions are the step taken today to make it, not the treatment."}},
      "speakers": [
        {
          "role": "Dentist",
          "voice": "onyx"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Pain is worst",
          "answer": "in the morning",
          "variants": [
            "first thing",
            "mornings",
            "on waking"
          ]
        },
        {
          "id": "g2",
          "label": "Duration of symptoms",
          "answer": "four months",
          "variants": [
            "4 months",
            "about four months"
          ]
        },
        {
          "id": "g3",
          "label": "Site indicated: in front of the",
          "answer": "right ear",
          "variants": [
            "the right ear",
            "in front of the right ear"
          ]
        },
        {
          "id": "g4",
          "label": "Noise on opening",
          "answer": "clicking",
          "variants": [
            "a click",
            "it clicks",
            "clicks"
          ]
        },
        {
          "id": "g5",
          "label": "Number of episodes of locking",
          "answer": "twice",
          "variants": [
            "two",
            "2",
            "two times"
          ]
        },
        {
          "id": "g6",
          "label": "Made worse during the day by",
          "answer": "chewing",
          "variants": []
        },
        {
          "id": "g7",
          "label": "Reported by her partner at night",
          "answer": "grinding",
          "variants": [
            "grinding her teeth",
            "he says she grinds"
          ]
        },
        {
          "id": "g8",
          "label": "Recent life change",
          "answer": "a new job",
          "variants": [
            "new job",
            "started a job",
            "a job in April"
          ]
        },
        {
          "id": "g9",
          "label": "Coffee intake: ______ a day",
          "answer": "six",
          "variants": [
            "6",
            "six coffees"
          ]
        },
        {
          "id": "g10",
          "label": "Wakes each night at",
          "answer": "four",
          "variants": [
            "4",
            "four o'clock",
            "4 am"
          ]
        },
        {
          "id": "g11",
          "label": "Examination finding: back teeth are",
          "answer": "worn flat",
          "variants": [
            "worn",
            "flat",
            "worn down"
          ]
        },
        {
          "id": "g12",
          "label": "Treatment to be provided: a",
          "answer": "soft splint",
          "variants": [
            "splint",
            "a night splint",
            "soft night splint"
          ]
        }
      ],
      "audioScript": "Dentist: Miss Rowntree, before I look in your mouth I'd like the story. Tell me about this jaw. Patient: It aches. And the worst of it is first thing — I wake up and it's already sore before I've done anything to it. Dentist: Any pain from a tooth itself — hot, cold, anything sweet? Patient: No, nothing like that. It isn't toothache. It's the side of my face. Dentist: Worst in the morning. And how long has this been going on? Patient: Four months. It was on and off at first and now it's most days. Dentist: Show me with one finger where it actually hurts. Patient: Just here. In front of my right ear. Dentist: Right in front of the ear, that's the joint itself. Does it make any noise? Patient: It clicks. Every time I open wide. My sister can hear it across the table. Dentist: Has it ever stuck — so you couldn't open, or couldn't close? Patient: Twice. Both times in the last month. It only lasted a few seconds but it frightened me. Dentist: That's worth knowing. Do you get headaches with it? Patient: Across my temples. I'd put those down to the screen at work. Dentist: Possibly. The joint you pointed at is the only one in the body with a partner on the other side, so it never works alone, and the muscles round it run up into exactly where you're describing. What makes it worse in the day? Patient: Chewing. Anything I have to work at — a steak, a crusty roll, and it's aching by the end of it. Dentist: Does anyone tell you what you do at night? Patient: My partner says I grind. He says it wakes him up. I don't know I'm doing it. Dentist: That's the piece that ties this together. Now, has anything changed in the last few months? Anything at all. Patient: I started a new job in April. It's a good job. It's just a lot. Dentist: And how much coffee is a lot? Patient: Six a day. Maybe more on a bad one. Dentist: And the sleep itself? Patient: I get off all right and then I'm awake at four, every night, thinking about work. Dentist: Thank you. Let me look now. Open for me. Right — your back teeth are worn flat. The enamel's gone off the biting surfaces on both sides and they should be nothing like that at your age. Patient: So I am grinding. Dentist: You're grinding, and you're doing it at four in the morning while you think about the new job. Nobody chooses it and nobody remembers it, which is why it goes on for months before anyone sits where you're sitting. The joint aches in the morning because it has been working all night. So we do two things. I'm going to take impressions today and make you a soft splint to wear at night — it doesn't stop the grinding, it gives the teeth and the joint something else to take it. It goes over the upper teeth, it takes a night or two to feel normal, and you bring it straight back to me if it feels high anywhere when you bite. Patient: And the other thing? Dentist: The coffee comes down, slowly, and we talk about the four o'clock. I can protect your teeth from this. I can't protect them from the job. Patient: Will the splint stop the clicking? Dentist: Probably not, and that isn't what it's for. The click can stay; it's the ache you came about."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-6-optometry-difficulty-driving-at-night",
    "title": "Listening Part A · script 6 — Optometry (difficulty driving at night)",
    "prompt": "You will hear an optometrist speaking to a patient. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Three separate complaints point at the lens rather than the prescription; pressures and family history are recorded even when they are normal.",
    "payload": {
      "explanations": {"g1":{"why":"Asked what made him ring, the patient says night driving is the honest answer; he now leaves the car at home after dark.","evidence":"Night driving. That's the honest answer.","watch":"Write night driving; headlights spreading is how the problem feels, not the main difficulty itself."},"g2":{"why":"Asked how long the headlight problem has been happening, he says about a year, creeping up gradually.","evidence":"About a year. It crept up.","watch":"Write about a year; three years is his last eye test, a different gap."},"g3":{"why":"In daylight with his glasses on, he says he needs more light, and has put a lamp behind his chair.","evidence":"I need more light. I've put a lamp behind my chair for the paper","watch":"Write more light; stronger lenses is what his wife thinks he needs, not what he notices."},"g4":{"why":"Asked about colours, he says they look washed out; a blue shirt looked grey to him.","evidence":"Washed out. My daughter bought me a blue shirt","watch":"Write washed out; blue is the true colour of the shirt, not how colours appear to him."},"g5":{"why":"Asked about family eye trouble, he says his mother had glaucoma and used drops for years.","evidence":"My mother had glaucoma. She had drops for years.","watch":"Spell glaucoma correctly; cataract is the finding in his own eye, not his mother's condition."},"g6":{"why":"Asked when he last had an eye test, he says three years ago, maybe a little more.","evidence":"Three years ago. Maybe a bit more.","watch":"Keep three years ago; about a year is how long the night problem has lasted."},"g7":{"why":"His only general health condition, he says, is high blood pressure.","evidence":"High blood pressure. That's the only thing they've ever found.","watch":"Write high blood pressure; glaucoma is his mother's condition, not his."},"g8":{"why":"He takes amlodipine for his blood pressure, one in the morning, for about six years.","evidence":"Amlodipine. One in the morning, for about six years.","watch":"Spell amlodipine carefully; six years is how long he has taken it, not the medicine."},"g9":{"why":"Asked what he did before retiring, he says he was a printer for forty years.","evidence":"I was a printer. Forty years of small type under a bad light","watch":"Write printer; forty years is the length of his career, not the occupation."},"g10":{"why":"After the letter chart, the optometrist reads out six over twelve for the right eye.","evidence":"That's six over twelve on the right and six over nine on the left","watch":"Take the right eye, 6/12; 6/9 is the left eye, the neighbouring detail."},"g11":{"why":"After the air-puff test, the optometrist says the pressures are normal in both eyes.","evidence":"They're normal, both eyes, and given your mother that's worth saying out loud.","watch":"Write normal; do not write glaucoma, which the normal pressures make less of a worry."},"g12":{"why":"Because new glasses will not fix the cataract, the optometrist refers him for cataract surgery.","evidence":"I'm going to refer you for cataract surgery.","watch":"Spell cataract correctly and include surgery; new glasses are what he is told will not help."}},
      "speakers": [
        {
          "role": "Optometrist",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Main difficulty reported",
          "answer": "night driving",
          "variants": [
            "driving at night",
            "driving in the dark"
          ]
        },
        {
          "id": "g2",
          "label": "Duration of the problem",
          "answer": "about a year",
          "variants": [
            "a year",
            "one year"
          ]
        },
        {
          "id": "g3",
          "label": "Change noticed by day: he needs",
          "answer": "more light",
          "variants": [
            "a lamp"
          ]
        },
        {
          "id": "g4",
          "label": "Appearance of colours",
          "answer": "washed out",
          "variants": [
            "grey"
          ]
        },
        {
          "id": "g5",
          "label": "Family history: mother had",
          "answer": "glaucoma"
        },
        {
          "id": "g6",
          "label": "Last eye test",
          "answer": "three years ago",
          "variants": [
            "three years",
            "3 years",
            "over three years"
          ]
        },
        {
          "id": "g7",
          "label": "General health condition",
          "answer": "high blood pressure",
          "variants": [
            "blood pressure"
          ]
        },
        {
          "id": "g8",
          "label": "Current medication",
          "answer": "amlodipine"
        },
        {
          "id": "g9",
          "label": "Former occupation",
          "answer": "a printer",
          "variants": [
            "printer",
            "printing"
          ]
        },
        {
          "id": "g10",
          "label": "Vision, right eye",
          "answer": "6/12",
          "variants": [
            "six over twelve",
            "6 over 12"
          ]
        },
        {
          "id": "g11",
          "label": "Intraocular pressures",
          "answer": "normal",
          "variants": [
            "normal both eyes",
            "both normal"
          ]
        },
        {
          "id": "g12",
          "label": "Plan: refer for",
          "answer": "cataract surgery",
          "variants": [
            "surgery"
          ]
        }
      ],
      "audioScript": "Optometrist: Mr Lindqvist, come and sit in the chair. Before I put any lenses in front of you, I want to hear what made you ring us. Patient: Night driving. That's the honest answer. I've started leaving the car at home after dark and my wife has noticed, which is how I ended up here. Optometrist: What is it about the dark that's different? Patient: Headlights. They spread. A car comes towards me and the light goes out sideways across the whole windscreen and for a second I've lost the edge of the road. Optometrist: That's a very clear description, thank you. How long has that been happening? Patient: About a year. It crept up. I couldn't tell you the week it started. Optometrist: And in the daytime, with your glasses on — anything changed there? Patient: I need more light. I've put a lamp behind my chair for the paper and my wife says the kitchen is like an operating theatre. Optometrist: More light to do the same job. What about colours? Patient: Washed out. My daughter bought me a blue shirt and I'd have said it was grey. Optometrist: Good — that's three things pointing the same way and none of them is the glasses. Anybody in the family with eye trouble? Patient: My mother had glaucoma. She had drops for years. And my wife is convinced I just need stronger lenses. Optometrist: That is what almost everybody comes in expecting, and it is exactly why I ask all of this before I touch the machine. Then I'll pay particular attention to your pressures and your nerve. When did you last have an eye test? Patient: Three years ago. Maybe a bit more. I've been meaning to. Optometrist: Everybody has. Any general health conditions I should know about? Patient: High blood pressure. That's the only thing they've ever found. Optometrist: And what do you take for it? Patient: Amlodipine. One in the morning, for about six years. Optometrist: Thank you. And what did you do before you retired? Patient: I was a printer. Forty years of small type under a bad light, which I'm sure hasn't helped. Optometrist: It won't have caused this, I promise you. Right — let's measure. Cover the left eye and read down for me as far as you comfortably can... Thank you. And now the other way... That's six over twelve on the right and six over nine on the left, so the right is the one you're noticing. Patient: Is that bad? Optometrist: It's below the driving standard on that eye on its own, and it's exactly what I'd expect from what you told me at the start. Now the pressures — small puff of air, don't jump. Patient: ... That wasn't as bad as last time. Optometrist: They're normal, both eyes, and given your mother that's worth saying out loud. And here's the lens itself — there's a cloudiness in the middle of the right one. That's a cataract, and it's what scatters the headlights, drinks your light and takes the blue out of a shirt. Patient: So new glasses won't fix it. Optometrist: No, and I'd be taking your money if I sold them to you. I'm going to refer you for cataract surgery. Until you're seen, no driving at night — and I'll write that down for you so it isn't just something I said. Patient: How long will I be waiting? Optometrist: Weeks rather than days, and the letter goes today. If the nights worry you before then, ring me and we'll go through it again."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-7-pharmacy-a-medicines-review",
    "title": "Listening Part A · script 7 — Pharmacy (a medicines review)",
    "prompt": "You will hear a pharmacist speaking to a patient during a medicines review. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Two of the twelve answers are decisions the patient made herself, which is exactly what a repeat list never shows.",
    "payload": {
      "explanations": {"g1":{"why":"She counted her medicines on the table before coming and says there are eleven.","evidence":"Eleven. I counted them out on the table before I came","watch":"Write eleven; three is how many she can explain, not the total."},"g2":{"why":"Asked when she takes them, she says all of them in the morning, with her tea, in one go.","evidence":"In the morning. All of them, with my tea, in one go.","watch":"Write in the morning; after breakfast is when the dizziness is worst, a different gap."},"g3":{"why":"Her new symptom is dizziness when she stands up from the chair; she has to hold the sideboard.","evidence":"Dizziness. When I stand up out of the chair, the room goes","watch":"Write dizziness; falls are a separate gap, and the sideboard is only what she holds."},"g4":{"why":"Asked when the dizziness is worse, she says after breakfast, more or less every time.","evidence":"After breakfast. Every time, more or less.","watch":"Write after breakfast; in the morning is when she takes the tablets, the neighbouring detail."},"g5":{"why":"Asked about falls in the last year, she says she has fallen twice, with no damage either time.","evidence":"Twice. Neither time did any damage.","watch":"Write twice; two months is how long ago she stopped a tablet."},"g6":{"why":"Not all eleven are taken as written: she stopped the water tablet herself about two months ago.","evidence":"I stopped the water tablet myself, about two months ago.","watch":"Write the water tablet; ibuprofen is a medicine she buys, not one she stopped."},"g7":{"why":"She stopped the water tablet because of the toilet: she could not go to the shops without knowing where one was.","evidence":"The toilet. I couldn't get to the shops without knowing where one was","watch":"Write the toilet; the shops are where she wanted to go, not the reason itself."},"g8":{"why":"Her son orders the repeats on the computer, ordering everything on the list whether she takes it or not.","evidence":"My son does it on the computer.","watch":"Write her son; the surgery and the pharmacist do not order her repeats."},"g9":{"why":"She has trouble getting tablets out of the blister packs because her thumbs will not manage them.","evidence":"The blister packs. My thumbs won't do them.","watch":"Write blister packs; the knife is how she copes, not the difficulty."},"g10":{"why":"The medicine she buys herself without a prescription is ibuprofen, from the supermarket.","evidence":"Ibuprofen. I get it from the supermarket.","watch":"Spell ibuprofen correctly; do not write the supermarket, which is where she buys it."},"g11":{"why":"Asked what she takes the ibuprofen for, she says her knees; it is the only thing that helps them.","evidence":"Most days. It's my knees.","watch":"Write her knees; most days is how often she takes it, not the reason."},"g12":{"why":"Before anything is changed, the pharmacist wants her blood pressure taken sitting and then standing, a minute apart.","evidence":"I want your blood pressure taken sitting and then standing","watch":"Write blood pressure; ringing the surgery and writing a list come later in the plan."}},
      "speakers": [
        {
          "role": "Pharmacist",
          "voice": "onyx"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Number of different medicines",
          "answer": "eleven",
          "variants": [
            "11"
          ]
        },
        {
          "id": "g2",
          "label": "Time all medicines are taken",
          "answer": "in the morning",
          "variants": [
            "mornings",
            "all at once in the morning"
          ]
        },
        {
          "id": "g3",
          "label": "Symptom on standing",
          "answer": "dizziness",
          "variants": [
            "dizzy",
            "the room goes"
          ]
        },
        {
          "id": "g4",
          "label": "Time of day symptom is worst",
          "answer": "after breakfast",
          "acceptExhaustive": true,
          "variants": []
        },
        {
          "id": "g5",
          "label": "Falls in the past year",
          "answer": "twice",
          "variants": [
            "two",
            "2",
            "two falls"
          ]
        },
        {
          "id": "g6",
          "label": "Medicine she stopped herself",
          "answer": "the water tablet",
          "variants": [
            "water tablet"
          ]
        },
        {
          "id": "g7",
          "label": "Reason she stopped it",
          "answer": "the toilet",
          "variants": []
        },
        {
          "id": "g8",
          "label": "Repeat prescriptions are ordered by",
          "answer": "her son",
          "variants": [
            "son",
            "he does"
          ]
        },
        {
          "id": "g9",
          "label": "Difficulty with the packaging",
          "answer": "blister packs",
          "variants": [
            "blisters"
          ]
        },
        {
          "id": "g10",
          "label": "Medicine bought without a prescription",
          "answer": "ibuprofen"
        },
        {
          "id": "g11",
          "label": "Reason she takes it",
          "answer": "her knees",
          "variants": [
            "knees"
          ]
        },
        {
          "id": "g12",
          "label": "First action: check her ______ sitting and standing",
          "answer": "blood pressure",
          "variants": [
            "BP",
            "her blood pressure"
          ]
        }
      ],
      "audioScript": "Pharmacist: Mrs Cadwallader, thank you for coming in. This is a medicines review, so there's nothing wrong — I just want to go through the lot with you properly. How many different ones are you on? Patient: I did wonder what I'd done wrong when the letter came. Pharmacist: Nothing at all. Everybody on more than a handful of them gets one of these, and mostly what comes out of it is that somebody has been taking something nobody has looked at for years. Patient: Eleven. I counted them out on the table before I came, because I knew you'd ask. Pharmacist: That's exactly the right thing to do. When do you take them? Patient: In the morning. All of them, with my tea, in one go. It's the only way I remember. Pharmacist: Eleven at once. Now, has anything felt different in the last few months? Patient: Dizziness. When I stand up out of the chair, the room goes and I have to hold the sideboard for a moment. Pharmacist: Is there a time of day it's worse? Patient: After breakfast. Every time, more or less. Pharmacist: After breakfast — so within the hour of taking eleven tablets. Hold that thought, it's important. Have you fallen at all in the last year? Patient: Twice. Neither time did any damage. I didn't bother anybody about it. Pharmacist: I'm glad you've told me now. Are you taking all eleven as they're written? Patient: No. I stopped the water tablet myself, about two months ago. Pharmacist: Can you tell me why? Patient: The toilet. I couldn't get to the shops without knowing where one was, and I stopped going out. So I stopped the tablet instead. Pharmacist: That's a very reasonable decision and I'm not going to tell you off for it. What I will say is that nobody knew — and half of what your doctor thinks is happening isn't happening. Who orders your repeats? Patient: My son does it on the computer. He orders everything on the list, whether I'm taking it or not. Pharmacist: So the water tablet is still coming. Do you have any trouble getting them out? Patient: The blister packs. My thumbs won't do them. I use a knife, which my son doesn't like. Pharmacist: We can solve that today. Anything you buy yourself, without a prescription? Patient: Ibuprofen. I get it from the supermarket. Pharmacist: How often, and what for? Patient: Most days. It's my knees. It's the only thing that touches them. Pharmacist: Thank you for telling me, because that's the piece nobody had. That one can push your blood pressure up and it doesn't sit well with two of the others on your list. Patient: Nobody's ever asked me that before. Pharmacist: One more, and people find this one odd. Do you know what each of them is actually for? Patient: Three of them I could tell you. The rest I just take because I always have. Pharmacist: Here's what I'd like first, before anything is changed. I want your blood pressure taken sitting and then standing, a minute apart, and I'll do it here now. If it drops when you stand, we have the reason for the dizziness and the falls, and it's fixable. Then I'll ring the surgery about the water tablet and the shop-bought one together — one conversation, not three. And before you leave I'll write you a single page saying what each of them is for, big enough to read, to keep by the kettle."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-8-nursing-a-leg-ulcer-at-a-home-visit",
    "title": "Listening Part A · script 8 — Nursing (a leg ulcer at a home visit)",
    "prompt": "You will hear a community nurse speaking to a patient at home. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "The wound is described in the words a chart uses; where the patient sleeps is part of the treatment, not background.",
    "payload": {
      "explanations": {"g1":{"why":"Asked how it happened, the patient says a shopping trolley ran back at him in the car park.","evidence":"A shopping trolley. In the car park.","watch":"Write a shopping trolley; the car park is where it happened, not the cause."},"g2":{"why":"He dates the injury to five weeks ago, the day of his grandson's christening.","evidence":"Five weeks. I know because it was the day of my grandson's christening.","watch":"Keep the unit weeks; Christmas is when he started sleeping in the chair."},"g3":{"why":"He says it is the left leg, on the front, and the nurse confirms the left shin.","evidence":"Left shin, yes, I can see it.","watch":"Include left; writing only shin or leg loses the side the note asks for."},"g4":{"why":"The carer who comes in changes the dressing every three days, the patient reports.","evidence":"Every three days, she says.","watch":"Write three days; five weeks is the age of the injury, not the dressing frequency."},"g5":{"why":"Looking at the pad, the nurse calls the amount of exudate moderate, neither heavy nor dry.","evidence":"I'd call that moderate, not heavy, not dry.","watch":"Write moderate; heavy and dry are the words she rules out."},"g6":{"why":"The patient notices no smell, and the nurse records no odour, which she finds reassuring.","evidence":"No odour, and that's genuinely reassuring","watch":"Record the absence, no odour; do not write a description of smell that was never present."},"g7":{"why":"He says the ankle swelling is worse in the evening and better again by the morning.","evidence":"It's worse in the evening.","watch":"Write in the evening; the morning is when the swelling is better, the opposite detail."},"g8":{"why":"He has been sleeping in the chair since Christmas because the stairs are too much.","evidence":"In the chair. I have done since Christmas.","watch":"Write in the chair; the stairs are the reason, not where he sleeps."},"g9":{"why":"Compression must wait until the ankle readings on Friday show the blood supply is safe.","evidence":"I'm booking you for the ankle readings on Friday","watch":"Write ankle readings; Friday is the day, and bandages are the compression itself."},"g10":{"why":"Asked to score the pain when the dressing comes off, he says seven out of ten.","evidence":"Seven. That's the worst bit of the week","watch":"Write the number seven; ten is the top of the scale, not his score."},"g11":{"why":"Before the visit he took paracetamol, about an hour earlier.","evidence":"Paracetamol. About an hour ago.","watch":"Spell paracetamol correctly; an hour ago is the timing, not the medicine."},"g12":{"why":"The nurse is referring him to the leg ulcer clinic, which will see him alongside her.","evidence":"I'm referring you to the leg ulcer clinic","watch":"Write leg ulcer clinic in full; the doctor is asked about pain relief, a different action."}},
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Cause of the injury",
          "answer": "a shopping trolley",
          "variants": [
            "shopping trolley",
            "trolley"
          ]
        },
        {
          "id": "g2",
          "label": "Time since the injury",
          "answer": "five weeks",
          "variants": [
            "5 weeks",
            "about five weeks"
          ]
        },
        {
          "id": "g3",
          "label": "Site of the wound",
          "answer": "left shin",
          "variants": [
            "the left shin",
            "left leg",
            "front of the left leg"
          ]
        },
        {
          "id": "g4",
          "label": "Dressing is currently changed every",
          "answer": "three days",
          "variants": [
            "3 days",
            "every three days"
          ]
        },
        {
          "id": "g5",
          "label": "Amount of exudate",
          "answer": "moderate",
          "variants": [
            "a moderate amount"
          ]
        },
        {
          "id": "g6",
          "label": "Odour",
          "answer": "no odour",
          "variants": [
            "no smell"
          ]
        },
        {
          "id": "g7",
          "label": "Ankle swelling is worse",
          "answer": "in the evening",
          "variants": [
            "evenings",
            "at night"
          ]
        },
        {
          "id": "g8",
          "label": "Where the patient is sleeping",
          "answer": "in the chair",
          "variants": [
            "the chair",
            "a chair"
          ]
        },
        {
          "id": "g9",
          "label": "Compression cannot start until the ______ are done",
          "answer": "ankle readings",
          "variants": [
            "the readings"
          ]
        },
        {
          "id": "g10",
          "label": "Pain score at dressing change",
          "answer": "seven",
          "variants": [
            "7",
            "seven out of ten"
          ]
        },
        {
          "id": "g11",
          "label": "Analgesia taken before the visit",
          "answer": "paracetamol"
        },
        {
          "id": "g12",
          "label": "Referral to be made to the",
          "answer": "leg ulcer clinic",
          "variants": [
            "ulcer clinic",
            "the leg clinic"
          ]
        }
      ],
      "audioScript": "Nurse: Right, Mr Iremonger, let's get this leg up on the stool and have a proper look at it. Start me at the beginning — how did it happen? Patient: A shopping trolley. In the car park. It ran back at me and caught me across the shin, and I thought nothing of it at the time. Nurse: Before I touch it — are you managing to eat? Skin needs building material, and it does not much care how good my dressings are. Patient: I eat all right. My daughter brings a dinner round most days and stands over me. Nurse: Good. And how long ago was that? Patient: Five weeks. I know because it was the day of my grandson's christening. Nurse: Five weeks is the number that matters here. Which leg — remind me while I write. Patient: The left. On the front, the shin. Nurse: Left shin, yes, I can see it. And who's been changing this dressing? Patient: The girl who comes in. Every three days, she says. Nurse: Has anything like this ever happened to that leg before? Patient: Never. I've had the veins for years, but the skin has always held. Nurse: Then this is the first time it has broken, and I would very much like it to be the last. Let's take it down and see what we've got... Right. There's a fair amount coming through onto the pad — I'd call that moderate, not heavy, not dry. Does it smell to you at all? Patient: No. Nothing. I'd have said if it did. Nurse: No odour, and that's genuinely reassuring — it's the first thing I look for. Now, this ankle. Is it always this size? Patient: It's worse in the evening. By the time the news is on I can't get my slipper on. It's better again by the morning. Nurse: Worse in the evening, better after a night flat. Speaking of which — where are you sleeping? Patient: In the chair. I have done since Christmas. The stairs are too much of a business. Nurse: In the chair. So that leg is hanging down for twenty-four hours a day, and everything that comes down it stays down it. That is doing more to this wound than any dressing I put on it. Patient: The other nurse said something about bandages. Nurse: She did, and she was right, and I can't start them today. Compression is the treatment, but I have to know the blood supply first — I'm booking you for the ankle readings on Friday, and if they come back safe you'll be in compression next week. Patient: It's a lot of visits, all this. Nurse: It is, for a few weeks. Then it stops being a lot of visits. Patient: And if they don't? Nurse: Then we've learned something important and we go a different way. Now, pain. When she takes this dressing off, what is it out of ten? Patient: Seven. That's the worst bit of the week, if I'm honest. Nurse: Seven is far too high and nobody should be quietly putting up with that. Did you take anything before I came? Patient: Paracetamol. About an hour ago. Nurse: Then we'll time it properly next visit, and I'll speak to your doctor about something better for dressing days. And I'm referring you to the leg ulcer clinic — they'll see you alongside me, not instead of me. Patient: Can I still get out to the shop? Nurse: Yes, and I'd rather you did. It's the sitting still with that leg down that harms it, not the walking."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-9-veterinary-science-a-stiff-older-dog",
    "title": "Listening Part A · script 9 — Veterinary science (a stiff older dog)",
    "prompt": "You will hear a veterinary surgeon speaking to a dog's owner. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Age is not the diagnosis: the owner's own account gives both the pattern and the plan.",
    "payload": {
      "explanations": {"g1":{"why":"The owner answers the vet's question about Bruno's age directly and adds that the dog had his birthday in March.","evidence":"Nine. He was nine in March.","watch":"Write the age only. Do not write March, which is the month of his birthday, not his age."},"g2":{"why":"The vet suggests the breed and the owner confirms it, adding the colour of the dog's coat.","evidence":"A labrador, yes. Chocolate.","watch":"Check the spelling of labrador. The colour chocolate is extra detail, not the breed itself."},"g3":{"why":"The owner says the stiffness is at its worst as soon as the dog gets up, and that he loosens up after about ten minutes.","evidence":"It's worst first thing — he comes out of his bed like an old man","watch":"Do not write ten minutes, which is how long it takes him to loosen up, not when it is worst."},"g4":{"why":"When the vet asks how long, the owner gives six months and says it may be slightly longer.","evidence":"Six months. Maybe a bit more.","watch":"Write months, not years. The cold is what the owner blamed, not a time."},"g5":{"why":"Asked what the dog has given up completely, the owner names the stairs: he now sleeps at the bottom and will not try them.","evidence":"The stairs. He used to sleep on the landing and now he sleeps at the bottom. He won't attempt them.","watch":"Do not write the landing, which is where he used to sleep, not the activity he stopped."},"g6":{"why":"The owner explains that the dog used to leap into the back of the car but now waits to be lifted in.","evidence":"The car. He used to fly into the back of it.","watch":"Do not write the stairs, which answer the previous gap, or lift, which is what the owner now does."},"g7":{"why":"The owner reports the weight gain over the past year and links it to the dog taking fewer walks.","evidence":"He's put on about four kilos since last year.","watch":"Include the unit, kilos. A number alone, or the wrong unit, does not complete the note."},"g8":{"why":"Asked what the dog is getting now, the owner names a supplement bought from the pet shop and given since the summer.","evidence":"A supplement. The green tub from the pet shop.","watch":"Do not write the green tub or the pet shop; these describe where it came from, not what it is."},"g9":{"why":"When the vet asks what worries the owner most, the owner says it is pain, because he cannot tell whether the dog is suffering.","evidence":"The pain. I can't tell if he's in pain.","watch":"Write pain only. Limping and crying are things the dog does not do, not the concern."},"g10":{"why":"On examination the vet finds that movement is reduced in both hips, with the dog tensing on both sides.","evidence":"Both hips have less movement than I'd want","watch":"Do not write back legs, which is what the vet feels; the reduced movement is in the hips."},"g11":{"why":"The vet's first plan is x-rays under sedation, to see what the hips look like instead of guessing.","evidence":"I'd like x-rays, sedated, so I can see what those hips actually look like","watch":"Spell x-rays correctly. Sedated describes how they will be done; it is not the investigation."},"g12":{"why":"The second part of the plan, starting the same day, is a two-week trial of pain relief, with the kidneys checked first.","evidence":"And starting today, a two-week trial of proper pain relief — a licensed one, with his kidneys checked first.","watch":"Do not write the supplement, which the owner already gives. Kidneys are checked first; they are not the trial."}},
      "speakers": [
        {
          "role": "Vet",
          "voice": "alloy"
        },
        {
          "role": "Owner",
          "voice": "onyx"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Age",
          "answer": "nine",
          "variants": [
            "9",
            "nine years",
            "nine years old"
          ]
        },
        {
          "id": "g2",
          "label": "Breed",
          "answer": "a labrador",
          "variants": [
            "labrador",
            "chocolate labrador",
            "lab"
          ]
        },
        {
          "id": "g3",
          "label": "Stiffness is worst",
          "answer": "first thing",
          "variants": [
            "in the morning",
            "first thing in the morning"
          ]
        },
        {
          "id": "g4",
          "label": "Duration of the problem",
          "answer": "six months",
          "variants": [
            "6 months",
            "about six months"
          ]
        },
        {
          "id": "g5",
          "label": "Activity stopped altogether",
          "answer": "the stairs",
          "variants": [
            "stairs"
          ]
        },
        {
          "id": "g6",
          "label": "No longer jumps into",
          "answer": "the car",
          "variants": [
            "car",
            "the back of the car"
          ]
        },
        {
          "id": "g7",
          "label": "Weight gained since last year",
          "answer": "four kilos",
          "variants": [
            "4 kilos",
            "4 kg",
            "about four kilos"
          ]
        },
        {
          "id": "g8",
          "label": "Currently being given",
          "answer": "a supplement",
          "variants": [
            "supplement",
            "a joint supplement"
          ]
        },
        {
          "id": "g9",
          "label": "Owner's main concern",
          "answer": "the pain",
          "variants": [
            "pain"
          ]
        },
        {
          "id": "g10",
          "label": "Examination: reduced movement in both",
          "answer": "hips",
          "variants": [
            "the hips",
            "both hips",
            "hip joints"
          ]
        },
        {
          "id": "g11",
          "label": "Investigation to be arranged",
          "answer": "x-rays",
          "variants": [
            "xrays",
            "x-ray"
          ]
        },
        {
          "id": "g12",
          "label": "Starting today: a two-week trial of",
          "answer": "pain relief",
          "acceptExhaustive": true,
          "variants": []
        }
      ],
      "audioScript": "Vet: Let's have him on the floor rather than the table, he'll be happier. Now — how old is Bruno? Owner: Nine. He was nine in March. Vet: And he's a labrador, isn't he? A big one. Owner: A labrador, yes. Chocolate. He's always been a big lad. Vet: Right. Tell me what you're seeing, in your own words, not what you think I want to hear. Owner: He's stiff. It's worst first thing — he comes out of his bed like an old man and then he loosens off after ten minutes or so and you'd hardly know. Vet: Worst first thing and better with movement. That's a very typical pattern. How long? Owner: Six months. Maybe a bit more. I kept telling myself it was just the cold. Vet: Everybody does, and the cold is never the whole answer. Is he eating normally? Owner: He'd eat the table. That's never been a problem with him. Vet: Good — appetite is one of the first things to go when a dog is really unwell, so that's reassuring. Is there anything he's stopped doing altogether? Owner: The stairs. He used to sleep on the landing and now he sleeps at the bottom. He won't attempt them. Vet: That's important — dogs don't give things up for no reason. Anything else? Owner: The car. He used to fly into the back of it. Now he stands there and looks at me until I lift him, and he's not a light dog. Vet: No, he isn't, and that brings me to the next question. Has his weight changed? Owner: He's put on about four kilos since last year. He's not doing the walks he used to, so that's my fault really. Vet: It's the same circle in every one of these: sore joint, less exercise, more weight, sorer joint. We can break it. Are you giving him anything at the moment? Owner: A supplement. The green tub from the pet shop. I've been giving it since the summer. Vet: Those are safe and some dogs seem better on them. Nothing in it is going to touch pain, though, and I'd rather you knew that. What worries you most? Owner: The pain. I can't tell if he's in pain. He doesn't cry, he doesn't limp much, he just... goes and lies down. Vet: Then let me tell you something that will help you for the rest of his life. Dogs almost never tell you about long, slow pain. They stop doing things instead. The stairs and the car are the crying. Owner: Oh. Vet: Now, let me feel these back legs. Extend this one... and this one. Both hips have less movement than I'd want, and he's tensing before I reach the end of the range on both sides. Nothing sudden, nothing hot, no swelling anywhere. Owner: I feel terrible. I've been telling people he's just getting old. Vet: He is getting old, and old is not a diagnosis and it is not a reason to leave him sore. You brought him in. That is the part that counts. Owner: So what happens now? Vet: Two things. I'd like x-rays, sedated, so I can see what those hips actually look like rather than guess. And starting today, a two-week trial of proper pain relief — a licensed one, with his kidneys checked first. Owner: And if it makes no difference? Vet: Then I've learned something. But I'll be honest with you: in a dog who has given up the stairs, it usually makes a very large difference, and it's the owner who tells me, not the dog."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-10-radiography-safety-checks-before-an-mri-scan",
    "title": "Listening Part A · script 10 — Radiography (safety checks before an MRI scan)",
    "prompt": "You will hear a radiographer speaking to a patient before a scan. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "The safety questions are asked and recorded even when the answer is 'never'.",
    "payload": {
      "explanations": {"g1":{"why":"The radiographer states which scan the patient is booked for today before starting the safety questions.","evidence":"You're down for an MRI today.","watch":"Write the letters MRI. Do not write safety checklist, which is what the radiographer does first."},"g2":{"why":"The patient says the problem is his back and then makes the site more exact: the lower back.","evidence":"My back. The lower back, and it's been going on a while.","watch":"Do not write the left leg, which is where the new pins and needles are felt."},"g3":{"why":"Asked how long a while is, the patient gives three months and explains it began after moving a wardrobe.","evidence":"Three months. It started after I moved a wardrobe","watch":"Write months. The wardrobe is the cause, and Monday relates to the new symptom, not the duration."},"g4":{"why":"The patient reports a new symptom since about Monday: pins and needles down the back of his left leg.","evidence":"Pins and needles. Down the back of my left leg, since about Monday. That's new.","watch":"Write the full phrase pins and needles. Monday is when it started, not the symptom."},"g5":{"why":"Asked about operations, the patient names a hernia repair carried out years ago.","evidence":"A hernia repair. Years back.","watch":"Do not confuse this with the knee replacement, which answers the metal implant question."},"g6":{"why":"When asked about metal left in the body, the patient says he has a knee replacement on the right side.","evidence":"A knee replacement. The right one.","watch":"The hernia repair is the earlier answer. Here the implant is the knee replacement."},"g7":{"why":"The patient gives the year of the knee replacement and adds that he retired in the same year.","evidence":"Twenty nineteen. Same year I retired.","watch":"Write the year as a number or in words. Do not write retired; that is extra detail."},"g8":{"why":"Asked about his work, the patient says he was a welder for thirty-one years, which explains the eye question that follows.","evidence":"I was a welder. Thirty-one years.","watch":"Write the job, not the number of years he did it."},"g9":{"why":"The patient says he has never had an eye injury at work because he always wore the mask.","evidence":"Never. I wore the mask, always.","watch":"Do not write his father's lost eye; that happened to a different person."},"g10":{"why":"Asked how he copes in small spaces, the patient says he gets claustrophobia.","evidence":"Not good. I get claustrophobia.","watch":"Check the spelling of claustrophobia. Lifts and tunnels are only examples from the question."},"g11":{"why":"To help with the claustrophobia, the radiographer offers music played through headphones during the scan.","evidence":"I'll offer you music through the headphones","watch":"The buzzer is for stopping the scan, not for comfort; the comfort offered is music through the headphones."},"g12":{"why":"The radiographer says the scan will last about twenty minutes and promises updates between each set.","evidence":"About twenty minutes. I'll talk to you between each set","watch":"Include the unit, minutes, and the right number."}},
      "speakers": [
        {
          "role": "Radiographer",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Examination requested",
          "answer": "an MRI",
          "variants": [
            "MRI",
            "MRI scan"
          ]
        },
        {
          "id": "g2",
          "label": "Site of the pain",
          "answer": "lower back",
          "variants": [
            "the lower back",
            "low back",
            "his back"
          ]
        },
        {
          "id": "g3",
          "label": "Duration of symptoms",
          "answer": "three months",
          "variants": [
            "3 months",
            "about three months"
          ]
        },
        {
          "id": "g4",
          "label": "New symptom this week",
          "answer": "pins and needles",
          "variants": [
            "pins and needles in the leg"
          ]
        },
        {
          "id": "g5",
          "label": "Previous operation",
          "answer": "a hernia repair",
          "variants": [
            "hernia repair",
            "hernia",
            "a hernia operation"
          ]
        },
        {
          "id": "g6",
          "label": "Metal implant",
          "answer": "a knee replacement",
          "variants": [
            "knee replacement",
            "right knee replacement"
          ]
        },
        {
          "id": "g7",
          "label": "Year of the implant",
          "answer": "2019",
          "variants": [
            "twenty nineteen",
            "in 2019"
          ]
        },
        {
          "id": "g8",
          "label": "Former occupation",
          "answer": "a welder",
          "variants": [
            "welder",
            "welding"
          ]
        },
        {
          "id": "g9",
          "label": "Previous eye injury",
          "answer": "never",
          "variants": [
            "no injury"
          ]
        },
        {
          "id": "g10",
          "label": "Difficulty reported",
          "answer": "claustrophobia",
          "variants": [
            "claustrophobic",
            "small spaces"
          ]
        },
        {
          "id": "g11",
          "label": "Offered for comfort during the scan",
          "answer": "headphones",
          "variants": [
            "music",
            "music through headphones",
            "a buzzer and music"
          ]
        },
        {
          "id": "g12",
          "label": "Expected length of the scan",
          "answer": "twenty minutes",
          "variants": [
            "20 minutes",
            "about twenty minutes"
          ]
        }
      ],
      "audioScript": "Radiographer: Mr Vasquez, come and sit down. Before you go anywhere near that room I have a safety checklist, and some of it is going to sound odd. Bear with me — it matters. Patient: Fire away. I've had scans before, mind you. Radiographer: Then some of this will be familiar, and I'm going to ask it all again anyway, because the answers change and because the person asking is responsible for what happens next. You're down for an MRI today. Do you know why you've been sent? Patient: My back. The lower back, and it's been going on a while. Radiographer: How long is a while? Patient: Three months. It started after I moved a wardrobe and it hasn't settled. Radiographer: And has anything changed recently — anything new this week? Patient: Pins and needles. Down the back of my left leg, since about Monday. That's new. Radiographer: Thank you for telling me. I'll make sure that's on the front of the request, because it changes what the doctor is looking for. Now the safety part. Have you had any operations? Patient: A hernia repair. Years back. Radiographer: Anything metal put in and left in? A pin, a plate, a joint? Patient: A knee replacement. The right one. Radiographer: That's exactly what I need to know. What year was that? Patient: Twenty nineteen. Same year I retired. Radiographer: Good — anything from that era we can check properly against the manufacturer's information, and modern joints are almost all fine. Now, this one surprises people. What did you do for a living? Patient: I was a welder. Thirty-one years. Radiographer: Then here's why I ask. A welder can carry a fragment of metal in the eye from decades ago and never know — some of them are the size of a grain of sand. The magnet in that room would move it, and that is one of the few things we cannot undo. Patient: Nobody's ever asked me that. Not once, and I've been in and out of hospitals. Radiographer: Somebody should have. It gets missed because it sounds like a strange question and because most people never worked with the stuff. Have you ever had an injury to the eye at work — anything that took you to a hospital or a doctor? Patient: Never. I wore the mask, always. My father lost an eye and that was enough for me. Radiographer: Then I'm satisfied, and I'll write down that I asked and what you told me. One more — how are you in small spaces? Lifts, tunnels? Patient: Not good. I get claustrophobia. I don't mind admitting it. Radiographer: Most of my job is that sentence. It's open at both ends, your head is towards the opening for this one, and I can see you the whole time. I'll give you the buzzer, and I'll offer you music through the headphones — pick something you know rather than something calming, it works better. Patient: Does it hurt at all? Radiographer: Not in the slightest. It is noisy — a knocking, like somebody working on the road outside — and it is completely painless. How long am I in there, you were going to ask. Patient: How long am I in there? Radiographer: About twenty minutes. I'll talk to you between each set so you always know how much is left, and if you press that buzzer I stop. Not \"I finish this bit\" — I stop. Patient: Can my wife come in with me? Radiographer: She can sit where you can see her, once I've checked her for metal as well."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-11-speech-pathology-hoarseness-in-a-teacher",
    "title": "Listening Part A · script 11 — Speech pathology (hoarseness in a teacher)",
    "prompt": "You will hear a speech and language therapist speaking to a patient. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Two causes twelve hours apart, and both are recorded; the plan is counted in sessions.",
    "payload": {
      "explanations": {"g1":{"why":"The patient begins by saying what she does all day: she teaches a Year five class.","evidence":"I'm a teacher. Year five, thirty-two of them","watch":"Write the job. Do not write year five or nineteen years, which are details about the job."},"g2":{"why":"The patient describes the change in her voice: it becomes hoarse, and by the end of the day it is a croak.","evidence":"It goes hoarse. It's fine when I get up","watch":"Check the spelling of hoarse; it is not horse."},"g3":{"why":"The patient says her voice has become rough by the afternoon, and the therapist confirms it is not the morning.","evidence":"By the afternoon it's gone rough.","watch":"Do not write the morning, which is when the voice is fine."},"g4":{"why":"The patient says the problem has lasted four months, since the start of the school year.","evidence":"Four months. Since the start of this school year, really.","watch":"Do not write nineteen years, which is how long she has been teaching."},"g5":{"why":"Asked if the voice ever went completely, the patient says it happened twice, on two whole days.","evidence":"Twice. Two whole days where nothing came out but a whisper","watch":"Do not write a whisper, which describes what was left of the voice, not how often."},"g6":{"why":"The patient describes a feeling like a lump in her throat, while saying swallowing is normal.","evidence":"Like there's a lump.","watch":"Do not write swallowing, which she says is fine."},"g7":{"why":"Asked what she drinks in a day, the patient admits it is only one glass.","evidence":"Honestly? One glass. There's no time","watch":"Write the amount with glass. Do not write water as the amount."},"g8":{"why":"The therapist calls throat clearing the habit she wants to deal with first, and later lists it among the things the sessions will address.","evidence":"In them we deal with the throat clearing, the water, the sports hall and the reflux","watch":"Do not write shouting or water. The therapist names clearing the throat as the first habit."},"g9":{"why":"Asked where she teaches without a microphone, the patient names the sports hall, twice a week.","evidence":"The sports hall. Twice a week. You have to shout in there","watch":"Do not write twice a week, which is how often, not where."},"g10":{"why":"The therapist asks about heartburn and the patient says she has it most nights and keeps tablets by the bed.","evidence":"Any heartburn? Patient: Most nights. I keep tablets by the bed.","watch":"Do not write tablets, which is what she takes, not the symptom."},"g11":{"why":"The patient reports what the ear, nose and throat clinic found: nodules on both sides.","evidence":"Nodules, they said. Both sides.","watch":"Write the plural nodules. Callouses is the therapist's comparison, not the finding."},"g12":{"why":"The therapist states the number of sessions she is offering the patient.","evidence":"I'm offering you six sessions.","watch":"Do not write thirty-two, the number of children in the class."}},
      "speakers": [
        {
          "role": "Therapist",
          "voice": "onyx"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Occupation",
          "answer": "a teacher",
          "variants": [
            "teacher"
          ]
        },
        {
          "id": "g2",
          "label": "Quality of the voice: it becomes",
          "answer": "hoarse",
          "variants": [
            "rough",
            "a croak",
            "croaky"
          ]
        },
        {
          "id": "g3",
          "label": "Time of day it is worst",
          "answer": "the afternoon",
          "variants": [
            "by the afternoon",
            "end of the day",
            "afternoons"
          ]
        },
        {
          "id": "g4",
          "label": "Duration of the problem",
          "answer": "four months",
          "variants": [
            "4 months",
            "start of the school year"
          ]
        },
        {
          "id": "g5",
          "label": "Episodes of complete voice loss",
          "answer": "twice",
          "variants": [
            "two",
            "2",
            "two days"
          ]
        },
        {
          "id": "g6",
          "label": "Sensation in the throat",
          "answer": "a lump",
          "variants": [
            "lump",
            "like a lump",
            "a lump in the throat"
          ]
        },
        {
          "id": "g7",
          "label": "Daily fluid intake",
          "answer": "one glass",
          "variants": [
            "a glass",
            "1 glass",
            "one glass a day"
          ]
        },
        {
          "id": "g8",
          "label": "Habit to be addressed first",
          "answer": "throat clearing",
          "variants": [
            "clearing her throat"
          ]
        },
        {
          "id": "g9",
          "label": "Teaches without a microphone in the",
          "answer": "sports hall",
          "variants": [
            "the sports hall",
            "the hall"
          ]
        },
        {
          "id": "g10",
          "label": "Symptom reported at night",
          "answer": "heartburn",
          "variants": [
            "reflux",
            "acid"
          ]
        },
        {
          "id": "g11",
          "label": "Finding at the ENT clinic",
          "answer": "nodules",
          "variants": [
            "nodules both sides"
          ]
        },
        {
          "id": "g12",
          "label": "Number of therapy sessions offered",
          "answer": "six",
          "variants": [
            "6",
            "six sessions"
          ]
        }
      ],
      "audioScript": "Therapist: Mrs Achterberg, I've read the letter, but I'd like the story from you. Start with what you do all day. Patient: I'm a teacher. Year five, thirty-two of them, and I've been doing it nineteen years. Therapist: Nineteen years is a long time to be heard at the back of a room. And the voice? Patient: It goes hoarse. It's fine when I get up and by the end of the day it's a croak. My husband says I sound like a different woman at dinner. Therapist: So it's the afternoon that's worst, not the morning. Patient: By the afternoon it's gone rough. Last lesson of the day is the hardest thing I do. Therapist: How long has this been the pattern? Patient: Four months. Since the start of this school year, really. Therapist: Has it ever gone completely? Patient: Twice. Two whole days where nothing came out but a whisper, and I had to take the time off, which I hated. Therapist: Two days is not a small thing, and I want you to notice that you called taking them off something you hated rather than something you needed. Any feeling in the throat itself? Patient: Like there's a lump. Not when I swallow — swallowing is fine, food goes down normally. It's just there. Therapist: That's a very common description and I'm glad swallowing is normal. What are you drinking across a day? Patient: Honestly? One glass. There's no time and there's nowhere to go if I drink more. Therapist: One glass in a working day, and the voice needs water more than almost anything else I can teach you. Now — do you catch yourself clearing your throat? Patient: Constantly. My daughter mimics me. Therapist: That's the habit I want first. Every clear is the cords slamming together — it feels like tidying and it's the opposite. Where do you teach without a microphone? Patient: The sports hall. Twice a week. You have to shout in there, there's no other way. Therapist: There is, and we'll come to it. Any heartburn? Patient: Most nights. I keep tablets by the bed. Therapist: Right, so acid coming up at night on top of shouting all day. Those two are not separate problems — the lining takes the insult from underneath while the muscles take it from above, and the voice is what sits between them. Patient: I'd never have put those two together. Therapist: Nobody does, because they happen twelve hours apart. Now, the ear, nose and throat clinic saw you — do you know what they found? Patient: Nodules, they said. Both sides. They said it wasn't anything sinister and sent me here. Therapist: They're right on both counts, and the fact somebody has looked at the cords is why I can start today rather than send you away. Nodules are callouses. They come from use, and they go with changed use. Patient: I did think they were going to tell me something dreadful. I'd got myself into a state about it before the appointment. Therapist: A great many people in that waiting room have, and almost none of them say so out loud. Patient: So it's fixable. Therapist: In most teachers, yes. I'm offering you six sessions. In them we deal with the throat clearing, the water, the sports hall and the reflux — and I'll teach you to get thirty-two children's attention without your voice, because that is what has been paying for all of this. Patient: Do I have to stop teaching? Therapist: Not for a day. That is the whole point of doing it this way."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-12-occupational-therapy-recovery-after-a-wrist-fracture",
    "title": "Listening Part A · script 12 — Occupational therapy (recovery after a wrist fracture)",
    "prompt": "You will hear an occupational therapist speaking to a patient. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Grip is recorded as a comparison with the other side, and the driving answer is a judgement rather than a measurement.",
    "payload": {
      "explanations": {"g1":{"why":"The patient says she broke her wrist falling off her bike, and the therapist names this as a wrist fracture.","evidence":"A wrist fracture, yes.","watch":"Write wrist, not hand. The bike fall is the cause, not the injury."},"g2":{"why":"When asked about the plaster, the patient says it came off four weeks ago.","evidence":"Four weeks ago. I thought that would be the end of it","watch":"Do not write six weeks, which is how long the bone usually takes to heal."},"g3":{"why":"Asked what she does for a living, the patient says she is a hairdresser with her own chair in a salon.","evidence":"I'm a hairdresser. I've got my own chair","watch":"Write the job. Do not write salon, which is the place she works."},"g4":{"why":"The patient names opening jars as the hardest thing in her day, mentioning a jar of coffee.","evidence":"Opening jars. It sounds silly","watch":"Do not write coffee. The task is opening jars, not the contents."},"g5":{"why":"Asked which hand was broken, the patient says it was the right, her good hand.","evidence":"The right. My good one, of course.","watch":"Do not confuse it with the left, which is used for the grip comparison."},"g6":{"why":"After measuring both sides, the therapist says the grip on the injured hand is about half of the left.","evidence":"that's about half of the left, which is roughly what I'd expect","watch":"Write about half. Do not write the left, which is the side used for comparison."},"g7":{"why":"The patient says she has no numbness or pins and needles; the fingers feel normal.","evidence":"No, nothing like that. It's all normal that way.","watch":"Do not write numbness or pins and needles; these are what she does not have."},"g8":{"why":"The patient says the hand swells at the end of the day, while mornings are fine.","evidence":"It puffs up at the end of the day.","watch":"Write end only; the words of the day are already in the note. Do not write evening or morning."},"g9":{"why":"The first thing the therapist gives her to take home is a jar opener, which grips the lid.","evidence":"This is a jar opener — it grips the lid","watch":"Write jar opener. Do not write lid or putty; putty is the exercise."},"g10":{"why":"The second thing to take home is putty, to squeeze, roll and pull apart twice a day.","evidence":"Putty. Squeeze it, roll it, pull it apart","watch":"Do not write television or ten minutes; these say when and how long, not what."},"g11":{"why":"The therapist says she should not return for full days yet but on reduced hours.","evidence":"Go back on reduced hours — half days, three days a week","watch":"Do not write full days, which is what she must not do yet."},"g12":{"why":"The therapist will see her again in three weeks to measure the grip again.","evidence":"I'll see you in three weeks and we'll measure that grip again.","watch":"Do not write four weeks, which is when the plaster came off."}},
      "speakers": [
        {
          "role": "Therapist",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Injury",
          "answer": "a wrist fracture",
          "variants": [
            "wrist fracture",
            "fractured wrist"
          ]
        },
        {
          "id": "g2",
          "label": "Plaster came off",
          "answer": "four weeks ago",
          "variants": [
            "four weeks",
            "a month ago"
          ]
        },
        {
          "id": "g3",
          "label": "Occupation",
          "answer": "a hairdresser",
          "variants": [
            "hairdresser"
          ]
        },
        {
          "id": "g4",
          "label": "Hardest daily task",
          "answer": "opening jars",
          "variants": [
            "jars",
            "opening a jar"
          ]
        },
        {
          "id": "g5",
          "label": "Hand affected",
          "answer": "the right",
          "variants": [
            "right",
            "right hand",
            "her right hand"
          ]
        },
        {
          "id": "g6",
          "label": "Grip strength compared with the other side",
          "answer": "about half",
          "variants": [
            "half",
            "half of the left"
          ]
        },
        {
          "id": "g7",
          "label": "Sensation in the fingers",
          "answer": "normal",
          "variants": [
            "nothing",
            "no numbness",
            "all normal"
          ]
        },
        {
          "id": "g8",
          "label": "Swelling is worst: at the ______ of the day",
          "answer": "end",
          "variants": [
            "the end"
          ]
        },
        {
          "id": "g9",
          "label": "Aid provided",
          "answer": "a jar opener",
          "variants": [
            "jar opener",
            "an opener"
          ]
        },
        {
          "id": "g10",
          "label": "Exercise given",
          "answer": "putty",
          "variants": [
            "squeezing putty"
          ]
        },
        {
          "id": "g11",
          "label": "Plan for work: return on",
          "answer": "reduced hours",
          "variants": [
            "half days",
            "part time"
          ]
        },
        {
          "id": "g12",
          "label": "Review in",
          "answer": "three weeks",
          "variants": [
            "3 weeks"
          ]
        }
      ],
      "audioScript": "Therapist: Come in and sit down, Mrs Nkemelu. I'm Ruth, one of the occupational therapists. Tell me what brought you to us, in your own words rather than what's in the letter. Patient: I broke my wrist. I came off my bike in March, straight onto my hand. Therapist: A wrist fracture, yes. Has anybody explained to you what happens to a hand inside plaster? Patient: Not really. They said the bone would knit and that was about it. Therapist: The bone gets on with knitting, and everything around it quietly stiffens — the small joints, the tendons, the soft tissue that lets your fingers slide. That stiffness is not damage and it is not a sign anything has gone wrong. It is simply what happens to a part that has been held still, and it is the part that answers to work rather than to time. And when did the plaster come off? Patient: Four weeks ago. I thought that would be the end of it, honestly. Nobody told me it would still be like this a month later. Therapist: Most people are told the bone heals in six weeks and nobody mentions the hand. What do you do for a living? Patient: I'm a hairdresser. I've got my own chair in a salon on the high street. Therapist: Then this matters more than it would for most people. What's the single hardest thing in an ordinary day? Patient: Opening jars. It sounds silly, but I stood in my kitchen last Tuesday and cried over a jar of coffee. Therapist: It isn't silly at all, and it's the answer I hear most often. Which hand was it? Patient: The right. My good one, of course. Therapist: Let's measure rather than guess. Squeeze this as hard as you can... and now the other side. Right, that's about half of the left, which is roughly what I'd expect at this stage and not where you'll stay. Any numbness or pins and needles in the fingers? Patient: No, nothing like that. It's all normal that way. Therapist: Good — that's an important thing to be able to write down. What about swelling? Patient: It puffs up at the end of the day. Mornings are fine, evenings it's like a glove. Therapist: Right. Two things for you to take home. This is a jar opener — it grips the lid so your wrist doesn't have to, and I want you using it rather than struggling, because struggling teaches the hand to avoid the movement altogether. Patient: Can I drive? Therapist: Tell me two things. Can you turn a key, and can you hold a steering wheel with both hands without thinking about it? Patient: The key is horrible. The wheel I could probably manage. Therapist: Then not yet, and I would rather say that plainly than leave you to guess. It is not about the pain — it is whether you could take a hand off that wheel and put it back in a hurry. Patient: And the other? Therapist: Putty. Squeeze it, roll it, pull it apart, ten minutes twice a day while you watch television. It's dull and it works. Patient: When can I go back? Therapist: Not full days yet. Go back on reduced hours — half days, three days a week, and no colouring until we've talked again. I'll see you in three weeks and we'll measure that grip again. Patient: Will it go back to how it was? Therapist: For most wrists like this, near enough — and the ones that get there used the hand while they waited."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-13-medicine-breathlessness-with-an-irregular-pulse",
    "title": "Listening Part A · script 13 — Medicine (breathlessness with an irregular pulse)",
    "prompt": "You will hear a doctor speaking to a patient. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "Distance walked before and now is the measure; the examination finding is what changes the plan.",
    "payload": {
      "explanations": {"g1":{"why":"The patient names his main problem himself and says it has come on slowly.","evidence":"It's the breathlessness. It's crept up on me","watch":"Spell breathlessness with a double s. Do not write chest pain, which he says he does not have."},"g2":{"why":"Asked how long it has been creeping up, the patient says about two months, since after Christmas.","evidence":"Two months, near enough.","watch":"Write the time span, not Christmas, which is when he first noticed."},"g3":{"why":"The patient says he can now walk only fifty metres, to the postbox on the corner.","evidence":"Fifty metres. To the postbox at the corner","watch":"Include the unit, metres. Do not write a mile, which is the earlier distance."},"g4":{"why":"Before the breathlessness started the patient could walk a mile easily, to the allotment and back.","evidence":"A mile, easily.","watch":"Do not write fifty metres, which is what he can manage now."},"g5":{"why":"The patient sleeps on three pillows because he cannot breathe when lying flat.","evidence":"Three pillows now.","watch":"Write the number. Do not write flat, which is how he cannot lie."},"g6":{"why":"The patient says his ankles swell by the evening, and his wife noticed the sock marks.","evidence":"They swell by the evening.","watch":"Do not write sock marks, which is how the swelling was noticed, not when."},"g7":{"why":"The patient says he wakes up gasping about twice a week and sits on the edge of the bed.","evidence":"I wake up gasping. Twice a week, maybe.","watch":"Do not write twice in one night; that is the doctor's warning, not how often it happens now."},"g8":{"why":"Asked if he smokes, the patient says he gave up ten years ago after thirty years of smoking.","evidence":"I stopped ten years ago.","watch":"Do not write thirty years, which is how long he smoked."},"g9":{"why":"Asked what he did for a living, the patient says he was a bricklayer for forty-one years.","evidence":"I was a bricklayer. Forty-one years of it.","watch":"Write the job, not the number of years."},"g10":{"why":"On examination the doctor says the pulse is irregular and is not keeping a steady beat.","evidence":"Your pulse is irregular — it isn't keeping a steady beat","watch":"Check the spelling of irregular, with a double r."},"g11":{"why":"The doctor lists what he is arranging today: blood tests and a chest x-ray.","evidence":"Today I'm arranging blood tests and a chest x-ray","watch":"Write chest x-ray. Do not write ECG, which answers the next gap."},"g12":{"why":"The doctor sends the patient for an ECG, a tracing of the heart rhythm, before he leaves the building.","evidence":"I'm sending you round for an ECG before you leave the building","watch":"Do not write chest x-ray, the previous item. Write the letters ECG."}},
      "speakers": [
        {
          "role": "Doctor",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Main symptom",
          "answer": "breathlessness",
          "variants": [
            "breathless"
          ]
        },
        {
          "id": "g2",
          "label": "Duration",
          "answer": "two months",
          "variants": [
            "2 months"
          ]
        },
        {
          "id": "g3",
          "label": "Distance he can walk now",
          "answer": "fifty metres",
          "variants": [
            "50 metres",
            "fifty meters",
            "to the postbox"
          ]
        },
        {
          "id": "g4",
          "label": "Distance before it started",
          "answer": "a mile",
          "variants": [
            "one mile",
            "1 mile"
          ]
        },
        {
          "id": "g5",
          "label": "Number of pillows used at night",
          "answer": "three",
          "variants": [
            "3",
            "three pillows"
          ]
        },
        {
          "id": "g6",
          "label": "Ankles swell",
          "answer": "by the evening",
          "variants": [
            "in the evening",
            "evenings"
          ]
        },
        {
          "id": "g7",
          "label": "Wakes gasping",
          "answer": "twice a week",
          "variants": [
            "two times a week",
            "twice weekly"
          ]
        },
        {
          "id": "g8",
          "label": "Stopped smoking",
          "answer": "ten years ago",
          "variants": [
            "ten years",
            "10 years ago"
          ]
        },
        {
          "id": "g9",
          "label": "Former occupation",
          "answer": "a bricklayer",
          "variants": [
            "bricklayer",
            "bricklaying"
          ]
        },
        {
          "id": "g10",
          "label": "Examination: the pulse is",
          "answer": "irregular",
          "variants": [
            "not steady"
          ]
        },
        {
          "id": "g11",
          "label": "Arranged today: blood tests and a",
          "answer": "chest x-ray",
          "variants": [
            "x-ray",
            "chest xray"
          ]
        },
        {
          "id": "g12",
          "label": "Before leaving the building: an",
          "answer": "ECG",
          "variants": [
            "an ECG",
            "EKG",
            "a tracing"
          ]
        }
      ],
      "audioScript": "Doctor: Mr Achterberg, thank you for waiting. Your wife rang about your breathing. I'd like to hear it from you. Patient: It's the breathlessness. It's crept up on me and I've been putting it down to my age. Doctor: Your wife rang rather than you. Is that the usual arrangement? Patient: She's the one who worries. Left to me I'd have sat on it a good while longer. Doctor: Then I'm grateful to her, and I'd be glad if you told her I said so. How long has it been creeping? Patient: Two months, near enough. It was after Christmas I first noticed. Doctor: Any pain in the chest with it? Patient: No pain at all. That's exactly why I decided it wasn't anything to do with my heart. Doctor: A great many people believe the heart always announces itself with pain across the chest. Very often it does not. It simply stops keeping up with what you are asking of it, and breath is the first thing you notice. I want to put a number on it rather than a word. How far can you walk now before you have to stop? Patient: Fifty metres. To the postbox at the corner and I'm hanging onto the wall. Doctor: And before this started, what could you manage? Patient: A mile, easily. I walked to the allotment and back most days without thinking about it. Doctor: A mile down to fifty metres in two months. That's the sentence I'll be writing down. How are you sleeping — flat, or propped up? Patient: Three pillows now. If I lie flat I can't get my breath at all. Doctor: And your ankles? Patient: They swell by the evening. My wife noticed the sock marks before I did — great deep lines across both of them, and I'd been pulling the socks on and off for weeks without once looking down. Doctor: Does anything wake you in the night? Patient: I wake up gasping. Twice a week, maybe. I sit on the edge of the bed until it passes and I haven't told anybody that until now. Doctor: I'm very glad you have. Do you smoke? Patient: I stopped ten years ago. Thirty years before that, mind. Doctor: Any cough with it? Patient: A dry one now and then. Nothing that troubles me. Doctor: And what did you do? Patient: I was a bricklayer. Forty-one years of it. Doctor: Let me listen and feel your pulse... Your pulse is irregular — it isn't keeping a steady beat, and that on its own can explain a good deal of what you've described. Patient: Nobody has ever said that to me before. Doctor: It is easy to miss on a busy day, and it is easy to miss in yourself, because a rhythm that comes and goes feels like nothing much at the time. Patient: Is that the heart, then? Doctor: It's very likely the heart, and the good news in that sentence is that it is usually treatable. Today I'm arranging blood tests and a chest x-ray, and I'm sending you round for an ECG before you leave the building — that's the tracing of the rhythm, and it takes five minutes. I would rather you had it done while you are standing in this building than posted an appointment for a fortnight's time and left wondering. Patient: Should I be doing anything different in the meantime? Doctor: Keep walking to whatever you can manage and no further. And if you wake gasping twice in one night, ring us — that is not a thing to sit out."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-14-physiotherapy-knee-pain-in-a-runner",
    "title": "Listening Part A · script 14 — Physiotherapy (knee pain in a runner)",
    "prompt": "You will hear a physiotherapist speaking to a patient. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "The knee is where it is felt; the hip is where the finding is.",
    "payload": {
      "explanations": {"g1":{"why":"Asked what she does with the knee, the patient says running, the only thing she wants to do.","evidence":"Running. That's the whole problem","watch":"Write the sport, not parkrun or race, which are particular running events."},"g2":{"why":"The patient says she runs about forty kilometres a week, over four or five runs.","evidence":"About forty kilometres. Four runs","watch":"Do not write four runs, which is how many, not the distance. Include the unit."},"g3":{"why":"The patient cannot point to one spot; the pain is all round the front of the knee, under the kneecap.","evidence":"It's sort of all round the front of the knee, under the kneecap.","watch":"Write front only. Do not write kneecap or one spot."},"g4":{"why":"The patient says going downstairs is the worst, while running uphill and on the flat is fine.","evidence":"Going downstairs. Running uphill is fine","watch":"Do not write running uphill, which she says is fine."},"g5":{"why":"Asked how long it has been going on, the patient says six weeks, starting as a niggle.","evidence":"Six weeks. It started as a niggle","watch":"Be careful: six weeks is also how long it may take to settle. Here it is the duration so far."},"g6":{"why":"Asked what changed before the pain started, the patient says she bought new shoes in the sales.","evidence":"New shoes. I bought a different pair in the sales","watch":"Do not write the sales, which is where she bought them, not the change."},"g7":{"why":"The patient says there is no swelling at all, and both knees look the same in the mirror.","evidence":"Any swelling? Patient: None. It doesn't puff up at all","watch":"Do not leave this gap empty; none is the answer. Do not write aches."},"g8":{"why":"The patient says the knee has never given way; it aches but does not collapse.","evidence":"Never. It aches, it doesn't collapse.","watch":"Do not write aches; the question is whether it gives way."},"g9":{"why":"Watching her stand on one leg, the physiotherapist sees the hip drop and says her hip muscles are weak.","evidence":"Your hip muscles are weak, and the knee is where you're feeling it.","watch":"Do not write knee. The weakness is in the hip; the knee is where it is felt."},"g10":{"why":"The physiotherapist tells her to reduce the distance, cutting to about half for a fortnight while keeping the runs.","evidence":"Reduce the distance — cut to about half for a fortnight","watch":"Do not write stop running. The advice is to run less, not to stop."},"g11":{"why":"The physiotherapist says the exercise work is hip strength, not knee exercises.","evidence":"the work is hip strength, not knee exercises","watch":"Do not write knee exercises, which the physiotherapist rules out."},"g12":{"why":"After listing the hip exercises, the physiotherapist says to do them four times a week.","evidence":"side-lying, bridges, step-downs, four times a week.","watch":"Do not write five, which is how many runs she sometimes does."}},
      "speakers": [
        {
          "role": "Physiotherapist",
          "voice": "onyx"
        },
        {
          "role": "Patient",
          "voice": "alloy"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Sport",
          "answer": "running",
          "variants": [
            "run",
            "runs"
          ]
        },
        {
          "id": "g2",
          "label": "Weekly distance",
          "answer": "forty kilometres",
          "variants": [
            "40 kilometres",
            "40 km",
            "forty km"
          ]
        },
        {
          "id": "g3",
          "label": "Site of pain: the ______ of the knee",
          "answer": "front",
          "variants": [
            "the front"
          ]
        },
        {
          "id": "g4",
          "label": "Worst activity",
          "answer": "going downstairs",
          "variants": [
            "downstairs",
            "coming down the stairs",
            "going down stairs"
          ]
        },
        {
          "id": "g5",
          "label": "Duration",
          "answer": "six weeks",
          "variants": [
            "6 weeks"
          ]
        },
        {
          "id": "g6",
          "label": "Change before onset",
          "answer": "new shoes",
          "variants": [
            "shoes",
            "a new pair of shoes",
            "different shoes"
          ]
        },
        {
          "id": "g7",
          "label": "Swelling",
          "answer": "none",
          "variants": [
            "no swelling",
            "nothing"
          ]
        },
        {
          "id": "g8",
          "label": "Giving way",
          "answer": "never",
          "variants": [
            "it has not",
            "not given way"
          ]
        },
        {
          "id": "g9",
          "label": "Examination finding: weak",
          "answer": "hip muscles",
          "variants": [
            "hips",
            "hip",
            "the hip muscles"
          ]
        },
        {
          "id": "g10",
          "label": "Advice on running",
          "answer": "reduce the distance",
          "variants": [
            "cut to half",
            "half the distance",
            "reduce distance",
            "run less"
          ]
        },
        {
          "id": "g11",
          "label": "Exercise focus",
          "answer": "hip strength",
          "variants": [
            "hip exercises"
          ]
        },
        {
          "id": "g12",
          "label": "Exercises to be done ______ times a week",
          "answer": "four",
          "variants": [
            "4",
            "four times"
          ]
        }
      ],
      "audioScript": "Physiotherapist: Come through, Miss Larkin. I'm Owen. Before I look at the knee, tell me what you do with it. Patient: Running. That's the whole problem, isn't it — it's the only thing I actually want to do. Physiotherapist: How much, in a normal week? Patient: About forty kilometres. Four runs, sometimes five if the weather's good. Physiotherapist: Point to where it hurts with one finger, if you can. Patient: That's the difficulty — I can't. It's sort of all round the front of the knee, under the kneecap. Not one spot. Physiotherapist: That vagueness is itself useful information. What's the worst thing you do to it? Patient: Going downstairs. Running uphill is fine, running on the flat is fine, and coming down the stairs at work makes me hold the rail like an old woman. Physiotherapist: Any injuries before this one? Patient: None. I've been lucky, which is probably why I've never learned to do any of the boring parts properly. Physiotherapist: Almost nobody does them until something stops them. How long has this been going on? Patient: Six weeks. It started as a niggle and it hasn't gone away. Physiotherapist: What changed six or seven weeks ago? Anything at all. Patient: New shoes. I bought a different pair in the sales because my old ones were finished. Physiotherapist: Thank you — that's the kind of thing nobody thinks to mention. Any swelling? Patient: None. It doesn't puff up at all — I've looked at it beside the other one in the mirror more than once, and you honestly could not tell them apart. Physiotherapist: And has it ever given way underneath you? Patient: Never. It aches, it doesn't collapse. Physiotherapist: Good — both of those are reassuring and both go in the notes, because it is the absence of a thing that often tells me most, and nobody thinks to write down what did not happen. Now stand on this leg for me and let your other foot hang... Watch what your hip does. It drops away on the left, every time. Your hip muscles are weak, and the knee is where you're feeling it. Patient: I don't understand what my hip has to do with it. Physiotherapist: When the hip drops on the standing side, the thigh bone rolls inwards, and the kneecap stops travelling in the groove it is built to run in. It slides a fraction off centre instead — which is nothing at all once, and something quite different when it happens thousands of times in an hour with your body weight behind it. Patient: So it isn't the knee at all. Physiotherapist: The knee is the messenger. Two things. Reduce the distance — cut to about half for a fortnight, and keep the runs, because stopping completely helps nobody. And the work is hip strength, not knee exercises: side-lying, bridges, step-downs, four times a week. Patient: I've got a race in the autumn. I'm not giving that up. Physiotherapist: I'm not asking you to, and that is exactly why I want the work started now rather than in the week before it. A fortnight of doing less is what buys the autumn. Patient: How long before it settles? Physiotherapist: Six weeks for most people, and I'd rather tell you that now than have you give up in the third week thinking it's failed. Patient: Can I keep the parkrun on Saturdays? Physiotherapist: Keep it, and let it be one of the shorter runs rather than the fast one. What I am taking off you is distance, not running, and the difference matters more than it sounds."
    }
  },
  {
    "taskType": "LISTENING_PART_A",
    "subTest": "LISTENING",
    "profession": null,
    "slug": "lis-a-script-15-nursing-a-pre-operative-assessment",
    "title": "Listening Part A · script 15 — Nursing (a pre-operative assessment)",
    "prompt": "You will hear a nurse speaking to a patient at a pre-operative assessment. For questions 1–12, complete the notes with a word or short phrase.",
    "difficulty": "CORE",
    "topicTag": "consultation",
    "timeLimitSeconds": 0,
    "active": true,
    "guidanceNote": "The two fasting times are separate numbers, and what to bring on the day is part of the assessment.",
    "payload": {
      "explanations": {"g1":{"why":"Asked which operation she is booked for, the patient says a hip replacement on the left side.","evidence":"A hip replacement. The left one.","watch":"Do not write knees, which is what she takes ibuprofen for."},"g2":{"why":"The patient gives the date of the operation as the twelfth, a Tuesday.","evidence":"The twelfth. A Tuesday.","watch":"Write the date. Tuesday alone is the day of the week, not the date."},"g3":{"why":"Going through her medicines, the nurse says most continue but the ibuprofen must stop.","evidence":"Most of these carry on exactly as they are, but the ibuprofen stops.","watch":"Check the spelling of ibuprofen."},"g4":{"why":"The nurse says the ibuprofen must stop two weeks before the operation and not a day less.","evidence":"Two weeks before, and not a day less.","watch":"Include the unit, weeks. Do not write two nights, which is the hospital stay."},"g5":{"why":"Asked about allergies, the patient names plasters, which make her skin red and blistered.","evidence":"Plasters. My skin comes up red and blisters underneath them","watch":"Do not write blisters or red skin; these are the reaction, not the allergy."},"g6":{"why":"The patient says she was very sick afterwards both times she had an anaesthetic.","evidence":"Both times I was terribly sick afterwards","watch":"Do not write twice, which is how many anaesthetics she had, not the problem."},"g7":{"why":"Asked about her teeth, the patient says she has a crown at the front, on the top.","evidence":"I've got a crown at the front, on the top.","watch":"Write crown. Do not write caps or loose, which were only the nurse's examples."},"g8":{"why":"The nurse weighs the patient and reads out the result.","evidence":"ninety kilos, thank you.","watch":"Include the unit, kilos. Do not confuse with forty years, the wedding ring."},"g9":{"why":"The nurse states that no food is allowed after midnight before surgery.","evidence":"No food after midnight.","watch":"Do not write six, which is the time limit for clear fluids, not food."},"g10":{"why":"The nurse says clear fluids such as water or black tea are allowed until six in the morning.","evidence":"Clear fluids — water, black tea, no milk — until six in the morning","watch":"Do not write midnight, which is the limit for food."},"g11":{"why":"Asked who will bring and collect her, the patient says her son, who is taking the day off.","evidence":"My son. He's taking the day off.","watch":"Do not write husband; she says her husband has died and she lives alone."},"g12":{"why":"The nurse tells her to bring her inhaler on the day, held in her hand rather than in her bag.","evidence":"bring your inhaler — in your hand, not in the bag","watch":"Do not write the letter or medicines list, which she brought to this appointment."}},
      "speakers": [
        {
          "role": "Nurse",
          "voice": "alloy"
        },
        {
          "role": "Patient",
          "voice": "onyx"
        }
      ],
      "gaps": [
        {
          "id": "g1",
          "label": "Operation planned",
          "answer": "a hip replacement",
          "variants": [
            "hip replacement",
            "left hip replacement"
          ]
        },
        {
          "id": "g2",
          "label": "Date of surgery",
          "answer": "the twelfth",
          "variants": [
            "twelfth",
            "12th",
            "the 12th",
            "Tuesday the twelfth"
          ]
        },
        {
          "id": "g3",
          "label": "Medicine to stop before surgery",
          "answer": "ibuprofen"
        },
        {
          "id": "g4",
          "label": "How long before surgery it must stop",
          "answer": "two weeks",
          "variants": [
            "2 weeks",
            "two weeks before"
          ]
        },
        {
          "id": "g5",
          "label": "Allergy",
          "answer": "plasters",
          "variants": [
            "plaster"
          ]
        },
        {
          "id": "g6",
          "label": "Previous problem with anaesthetic",
          "answer": "sick",
          "variants": [
            "sickness"
          ]
        },
        {
          "id": "g7",
          "label": "Dental note: a ______ at the front",
          "answer": "crown",
          "variants": [
            "a crown",
            "front crown"
          ]
        },
        {
          "id": "g8",
          "label": "Weight",
          "answer": "ninety kilos",
          "variants": [
            "90 kilos",
            "90 kg",
            "ninety kg"
          ]
        },
        {
          "id": "g9",
          "label": "No food after",
          "answer": "midnight",
          "variants": [
            "12 midnight"
          ]
        },
        {
          "id": "g10",
          "label": "Clear fluids allowed until ______ in the morning",
          "answer": "six",
          "variants": [
            "6"
          ]
        },
        {
          "id": "g11",
          "label": "Being collected by",
          "answer": "her son",
          "variants": [
            "son",
            "the son"
          ]
        },
        {
          "id": "g12",
          "label": "To bring on the day: her",
          "answer": "inhaler",
          "variants": [
            "her inhaler",
            "the inhaler"
          ]
        }
      ],
      "audioScript": "Nurse: Take a seat, Mrs Whitcombe. I'm Deborah, one of the pre-assessment nurses. This appointment is so that nothing about the day itself comes as a surprise. Which operation are you booked for? Patient: A hip replacement. The left one. Nurse: And the date they've given you? Patient: The twelfth. A Tuesday. Nurse: Good, and thank you for bringing the letter with you — half of what I do in this room is make sure the paper and the person are describing the same thing. Now your medicines — have you brought the list? Thank you. Most of these carry on exactly as they are, but the ibuprofen stops. Two weeks before, and not a day less. Patient: I take that for my knees. Nurse: I know, and I'm sorry, but it thins the blood more than people realise and it changes how much you bleed on the table. We'll sort something else out for the knees. Now, any allergies? Patient: Plasters. My skin comes up red and blisters underneath them, and it has done since I was a girl, so it is not something new that anybody could argue about. Nurse: That goes on the front of the notes and on your wristband, and theatre will use a different dressing. Have you had an anaesthetic before? Patient: Twice. Both times I was terribly sick afterwards — the whole day, I couldn't keep water down. Nurse: Then the anaesthetist will plan for that before you go to sleep rather than treat it after you wake up. Anything about your teeth I should know? Crowns, caps, anything loose? Patient: I've got a crown at the front, on the top. Nurse: Noted — that protects it when they manage your airway. Let's get your weight... ninety kilos, thank you. Now the fasting, and this is the part people get wrong. No food after midnight. Patient: Not even a cup of tea? Nurse: We'll come to drinks in a moment, and the answer is better than people expect. Clear fluids — water, black tea, no milk — until six in the morning, and I'd like you to actually drink them. Arriving thirsty makes everything harder. Who's bringing you and collecting you? Patient: My son. He's taking the day off. Nurse: One more thing about that morning. Take off any rings you can, and no nail varnish on your hands or your feet — the monitor clips onto a fingertip and it has to read straight through the nail. Patient: My wedding ring hasn't come off in forty years. Nurse: Then we tape over it, which is perfectly usual and nobody will make a fuss. Expect to arrive early and wait a while afterwards — that is not a delay, that is simply how the list runs, and the waiting is far easier when somebody has warned you about it. And at home afterwards — is there anybody with you? Patient: No, I live alone. I have done since my husband died. Nurse: Then I'll ask the therapists to see you before you leave the ward rather than after, and they will have you standing on it the same day, which surprises almost everybody. A new hip is not something you protect by keeping still. And on the day, bring your inhaler — in your hand, not in the bag that goes to the locker. Patient: How long will I be in? Nurse: Two nights if it goes as it usually does, and you will be sent home when you can manage stairs safely, not when a date says so."
    }
  }
];
