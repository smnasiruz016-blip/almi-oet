// GENERATED — DO NOT HAND-EDIT.
//
// Source:  scripts/content/b3-model-scripts-2026-10-30.json
//          sha256(first 16) = f235461f82dd6b47
// Built by scripts/seed/gen/_build_model_scripts.mts, which checks every script against the seed before writing
// (scripts/seed/gen/model-scripts-check.ts — the same check scripts/gates/model-scripts.ts runs). 30 model script(s).
import type { ModelScript } from "../../../src/lib/oet/tasks/speaking-roleplay";

/** the numbers a script may say that are not on its card, with why (from the source) */
export const SCRIPT_NUMBERS_ALLOWED: Record<string, string> = {
  "111": "UK NHS 111, the non-emergency advice line",
  "999": "UK emergency number"
};
export const SCRIPT_NUMBERS_DERIVED: Record<string, Record<string, string>> = {
  "spk-medicine-a-woman-anxious-about-starting-a-statin": {
    "82": "100 minus the card 18",
    "100": "the card 18% said as 18 in 100"
  }
};

export const MODEL_SCRIPTS: Record<string, ModelScript> = {
  "spk-medicine-a-patient-who-feels-judged-about-her-weight": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, please have a seat. I'm one of the GPs. I've heard what you said, and you've booked about your knee, so let's start there. What's been happening?"
      },
      {
        "who": "I",
        "text": "My right knee aches, worse on stairs and standing up after sitting. And I meant it. I'm not here to be told to lose weight again."
      },
      {
        "who": "C",
        "text": "Understood. Today is about the knee. How is it affecting your day?"
      },
      {
        "who": "I",
        "text": "I'm on my feet in a shop, so by afternoon it's throbbing. I've stopped the long dog walk I used to love."
      },
      {
        "who": "C",
        "text": "That's frustrating, losing a walk you enjoyed. What have you tried so far?"
      },
      {
        "who": "I",
        "text": "Paracetamol, ice in the evenings, and a support from the chemist. They help a bit."
      },
      {
        "who": "C",
        "text": "On examination there's no fluid in the joint, the ligaments, which hold it steady, feel firm, and it bends fully, so nothing suggests a tear. The tenderness is around the kneecap, which fits irritation where it glides over the thigh bone. That usually settles with the right exercises."
      },
      {
        "who": "I",
        "text": "So what do I do?"
      },
      {
        "who": "C",
        "text": "I'll refer you to physiotherapy for exercises that strengthen the thigh muscles and ease pressure on the kneecap. Carry on with paracetamol as the packet directs, and the ice. If the knee becomes hot, red and swollen, you get a fever, or can't put weight on it, contact us the same day or call 111."
      },
      {
        "who": "I",
        "text": "Physio. Usually they just say it's my weight."
      },
      {
        "who": "C",
        "text": "Then I'm sorry. Your knee deserves treatment in its own right, and you'll get it whatever happens with your weight. You said you're tired of being told to lose weight. What has happened at previous appointments?"
      },
      {
        "who": "I",
        "text": "Whatever I came in for, it ended with that sentence. No help, nothing."
      },
      {
        "who": "C",
        "text": "That sounds demoralising. What did you find least useful about those appointments?"
      },
      {
        "who": "I",
        "text": "Feeling the reason I came didn't count. Even with an ear infection I got the talk."
      },
      {
        "who": "C",
        "text": "Thank you for telling me. Has that stopped you coming to the surgery in recent years?"
      },
      {
        "who": "I",
        "text": "Yes. I put this knee off for weeks. I nearly cancelled today."
      },
      {
        "who": "C",
        "text": "I'm glad you didn't. Here's what changes: we'll deal with what you book for. If anything else needs raising, I'll ask first, and no means no. I'll record that in your notes for other doctors. Is that fair?"
      },
      {
        "who": "I",
        "text": "If it actually happens."
      },
      {
        "who": "C",
        "text": "It will. One other thing: your recent blood test, which can be linked to weight. Would it be all right if we talk about the blood result and your weight today? It's fine to say no."
      },
      {
        "who": "I",
        "text": "Go on. As long as it's not a lecture."
      },
      {
        "who": "C",
        "text": "No lecture. The test, HbA1c, shows your average blood sugar over the last two to three months. Yours is a little above normal but below the diabetes level. We call that pre-diabetes."
      },
      {
        "who": "I",
        "text": "So I'm getting diabetes."
      },
      {
        "who": "C",
        "text": "Not necessarily. It means a higher than average chance of type 2 diabetes in future. It isn't diabetes, and it doesn't mean you'll definitely get it. Many people stay at this level or return to normal."
      },
      {
        "who": "I",
        "text": "I've tried everything, you know."
      },
      {
        "who": "C",
        "text": "I believe you. What have you tried, and what happened?"
      },
      {
        "who": "I",
        "text": "Slimming clubs, shakes, a calorie app. I lost weight each time, then it came back."
      },
      {
        "who": "C",
        "text": "That tells me willpower isn't the problem; you've lost weight several times. Weight returning is the body's normal response, which is why longer-term support matters. Can I tell you about options you may not have been offered?"
      },
      {
        "who": "I",
        "text": "Like what?"
      },
      {
        "who": "C",
        "text": "First, a structured programme for pre-diabetes: group sessions over several months on food, activity and sleep, not a diet sheet. Second, a dietitian, a food and nutrition specialist, working one-to-one around what you eat and your shifts."
      },
      {
        "who": "I",
        "text": "And?"
      },
      {
        "who": "C",
        "text": "Third, a specialist weight service: a doctor, dietitian and psychologist working together. That's also where weight-loss medicines are considered; some are weekly injections that reduce appetite. They don't suit everyone, and feeling sick is common at first. None of this is compulsory."
      },
      {
        "who": "I",
        "text": "I never knew. Could I start with the dietitian?"
      },
      {
        "who": "C",
        "text": "Of course. What would you find most useful from me?"
      },
      {
        "who": "I",
        "text": "Being listened to, like today. And sorting the knee."
      },
      {
        "who": "C",
        "text": "That I can do. So: physiotherapy, paracetamol and ice meanwhile, and a dietitian referral. Let's review in a few weeks about the knee only, unless you'd like otherwise. Could you tell me what we've agreed?"
      },
      {
        "who": "I",
        "text": "Physio, tablets and ice, a dietitian, and back in a few weeks about the knee. Sooner if it's hot or swollen."
      },
      {
        "who": "C",
        "text": "Exactly right. Thank you for coming in."
      }
    ],
    "words": 736,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          3,
          5
        ],
        "how": "Opens on the knee and asks what happened, its effect on her day and what she has tried."
      },
      {
        "bullet": 2,
        "turns": [
          7,
          9
        ],
        "how": "Explains the examination findings plainly and gives a knee plan with safety-netting that stands alone."
      },
      {
        "bullet": 3,
        "turns": [
          19
        ],
        "how": "Asks permission to talk about the blood result and her weight, in those words, and says no is fine."
      },
      {
        "bullet": 4,
        "turns": [
          21,
          23
        ],
        "how": "Explains HbA1c, where her result sits and what it does and does not predict, with no moral comment."
      },
      {
        "bullet": 5,
        "turns": [
          1,
          11,
          13
        ],
        "how": "Acknowledges her opening statement and asks about previous appointments and what was least useful."
      },
      {
        "bullet": 6,
        "turns": [
          25,
          27
        ],
        "how": "Asks what she has tried and reframes repeated weight loss as information, not failure."
      },
      {
        "bullet": 7,
        "turns": [
          27,
          29,
          31
        ],
        "how": "Offers a structured programme, dietitian, specialist weight service and medication, saying what each involves."
      },
      {
        "bullet": 8,
        "turns": [
          11
        ],
        "how": "States that the knee will be treated whatever happens with her weight."
      },
      {
        "bullet": 9,
        "turns": [
          15,
          17
        ],
        "how": "Asks whether anything stopped her attending and commits to asking first and recording her preference."
      },
      {
        "bullet": 10,
        "turns": [
          33,
          35
        ],
        "how": "Asks what she would find useful and books a knee-only review unless she asks otherwise."
      }
    ],
    "concern": {
      "turns": [
        10,
        11,
        12,
        13,
        16,
        17
      ],
      "how": "Her decade of instruction without help is invited and acknowledged, the doctor apologises, promises a changed approach and then offers real help she has not been given."
    },
    "safety": [
      {
        "point": "Hot, red, swollen knee, fever or inability to bear weight needs same-day review or a call to 111.",
        "turn": 9
      },
      {
        "point": "Pre-diabetes raises the chance of type 2 diabetes but is not diabetes and may not progress.",
        "turn": 23
      },
      {
        "point": "Weight-loss medicines are considered through the specialist service and commonly cause nausea at first.",
        "turn": 31
      }
    ],
    "notes": "The card gives no knee examination findings or diagnosis; the script invents a benign examination (no effusion, stable ligaments, full flexion, peripatellar tenderness) suggesting patellofemoral pain. A clinician should confirm this is an acceptable model finding for this patient."
  },
  "spk-medicine-a-request-for-a-longer-sick-note": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, good to see you again. I'm your GP; we've met twice about your back. I understand you'd like to talk about your fit note today. Before we get to that, how is the back now?"
      },
      {
        "who": "I",
        "text": "Better than it was. The sharp pain has mostly gone. It stiffens up if I sit too long."
      },
      {
        "who": "C",
        "text": "That's good progress. What can you do now that you couldn't a few weeks ago, and what's still difficult?"
      },
      {
        "who": "I",
        "text": "I can walk the kids to school, do the shopping, drive. Lifting heavy boxes, I haven't tried. I'd rather not."
      },
      {
        "who": "C",
        "text": "Is the pain worse at any particular time of day?"
      },
      {
        "who": "I",
        "text": "First thing in the morning. It's stiff for a while, then it eases off."
      },
      {
        "who": "C",
        "text": "And over these ten weeks, how have you been sleeping, and how has your mood been?"
      },
      {
        "who": "I",
        "text": "Sleep's not great. I lie awake. Mood's a bit low, if I'm honest. Not myself."
      },
      {
        "who": "C",
        "text": "Thank you; that changes what help I can offer, so we'll come back to it. I've examined your back today: full movement, normal nerve tests in your legs, no tenderness. The back has healed well."
      },
      {
        "who": "I",
        "text": "So that's it, then?"
      },
      {
        "who": "C",
        "text": "Not quite. Some morning stiffness can last a while; that's normal. Most people keep improving from here, and gradual activity, including work, usually speeds recovery. Resting too much makes backs stiffer."
      },
      {
        "who": "I",
        "text": "Right. I was hoping for another eight weeks off, though."
      },
      {
        "who": "C",
        "text": "I'd like to understand that. If you went back on Monday, what specifically would worry you? It doesn't have to be about the pain."
      },
      {
        "who": "I",
        "text": "Well, lifting, I suppose. And the atmosphere there. It's not easy."
      },
      {
        "who": "C",
        "text": "The atmosphere. Could you tell me a bit more about that?"
      },
      {
        "who": "I",
        "text": "My manager. When I phoned in, he said if I came back he'd be watching me. Like I'd been making it up."
      },
      {
        "who": "C",
        "text": "That sounds very stressful, when you've genuinely been in pain. You don't have to name anyone or complain here; I just want to understand what makes going back hard. How has it left you feeling?"
      },
      {
        "who": "I",
        "text": "Sick to my stomach. That's probably why I'm not sleeping."
      },
      {
        "who": "C",
        "text": "That makes sense. Have you had any thoughts of harming yourself, or that life isn't worth living?"
      },
      {
        "who": "I",
        "text": "No, nothing like that. Just worn down."
      },
      {
        "who": "C",
        "text": "Thank you. There's a free talking therapy service you can refer yourself to; I'll give you the details. If you ever feel unsafe, contact us urgently, call 111 or go to A&E."
      },
      {
        "who": "I",
        "text": "All right. I'll think about it."
      },
      {
        "who": "C",
        "text": "A fit note doesn't only say not fit for work. I can say you may be fit for work with support: a phased return, building up hours gradually, amended duties such as no heavy lifting, altered hours, or workplace adaptations."
      },
      {
        "who": "I",
        "text": "But then I'm back with him, aren't I?"
      },
      {
        "who": "C",
        "text": "You would, and I'm not dismissing that. But honestly, the longer anyone is off work, the harder returning becomes, physically and in confidence. I'm not saying that to pressure you; I want you to keep your job and your health."
      },
      {
        "who": "I",
        "text": "So what can I do about the manager?"
      },
      {
        "who": "C",
        "text": "There are practical routes. Occupational health, the workplace health service, can assess what you can do and advise your employer. A union representative can come to meetings with you. Human resources deal with how staff are treated. And I can write a letter describing what you can and can't do."
      },
      {
        "who": "I",
        "text": "A letter from you would help. He couldn't argue with that."
      },
      {
        "who": "C",
        "text": "Then let's agree the note: may be fit for work, taking account of a phased return starting with shorter shifts, no heavy lifting, regular breaks to change position, and referral to occupational health, until we next meet. Does that suit you?"
      },
      {
        "who": "I",
        "text": "Shorter shifts and no heavy lifting. Yes, I could manage that."
      },
      {
        "who": "C",
        "text": "Let me read it back once more: phased return with shorter shifts, no heavy lifting, regular breaks to change position, occupational health referral advised. And I'll write the letter today."
      },
      {
        "who": "I",
        "text": "And if they ignore it?"
      },
      {
        "who": "C",
        "text": "Then come back sooner. The note is advice; if your employer won't follow it, we'll review it, and occupational health, your union or human resources can take it up. Let's review in two weeks. Can you tell me what we've agreed?"
      },
      {
        "who": "I",
        "text": "Shorter shifts, no heavy lifting, your letter, I'll contact the union and the therapy service, and see you in two weeks, sooner if they ignore it."
      },
      {
        "who": "C",
        "text": "Exactly. I'm glad you told me what was really going on."
      }
    ],
    "words": 725,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          3,
          9
        ],
        "how": "Asks how the back is now and what he can and cannot do, then reviews today's examination."
      },
      {
        "bullet": 2,
        "turns": [
          9,
          11
        ],
        "how": "Explains the normal findings and the usual recovery from this point in plain words."
      },
      {
        "bullet": 3,
        "turns": [
          13
        ],
        "how": "Asks what specifically worries him about Monday and invites answers beyond the pain."
      },
      {
        "bullet": 4,
        "turns": [
          15,
          17
        ],
        "how": "Follows his hint about the atmosphere without pressing him to name or accuse anyone."
      },
      {
        "bullet": 5,
        "turns": [
          23
        ],
        "how": "Explains the may-be-fit options: phased return, amended duties, altered hours and adaptations."
      },
      {
        "bullet": 6,
        "turns": [
          25
        ],
        "how": "States honestly that long absence makes return harder and says it is not a threat."
      },
      {
        "bullet": 7,
        "turns": [
          27
        ],
        "how": "Offers occupational health, a union representative, human resources and a GP letter."
      },
      {
        "bullet": 8,
        "turns": [
          29,
          31
        ],
        "how": "Agrees specific wording for today's note and reads it back to him."
      },
      {
        "bullet": 9,
        "turns": [
          5,
          7,
          19,
          21
        ],
        "how": "Asks about time-of-day pain, sleep and mood, screens for risk and offers talking therapy."
      },
      {
        "bullet": 10,
        "turns": [
          33
        ],
        "how": "Agrees a review and explains what happens if the workplace does not follow the note."
      }
    ],
    "concern": {
      "turns": [
        13,
        14,
        15,
        16,
        17,
        25,
        27
      ],
      "how": "An open question about Monday lets him hint at the atmosphere; gentle follow-up draws out the manager's threat, which is acknowledged and answered with protective routes rather than more absence."
    },
    "safety": [
      {
        "point": "Low mood is screened with a direct question about self-harm and suicidal thoughts.",
        "turn": 19
      },
      {
        "point": "If he feels unsafe he should contact the practice urgently, call 111 or attend A&E.",
        "turn": 21
      },
      {
        "point": "Gradual activity including work usually aids back recovery; prolonged rest tends to worsen stiffness.",
        "turn": 11
      }
    ],
    "notes": "The two-week review interval is the script's choice, not given on the card. The examination findings (full movement, normal neurological tests, no tenderness) follow the card's statement that the examination is now normal."
  },
  "spk-medicine-explaining-a-diagnosis-that-was-missed": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Good afternoon, please sit down. I'm one of the consultants, and the trust asked me to meet you after reviewing your care. I'd like to start by telling you plainly what the review found. Is that all right?"
      },
      {
        "who": "I",
        "text": "Yes. That's why I'm here."
      },
      {
        "who": "C",
        "text": "In September you had a blood test that showed iron deficiency anaemia, which means a low blood count caused by a lack of iron. That result was filed, and nobody acted on it. Nothing was done for five months, until your diagnosis in February."
      },
      {
        "who": "I",
        "text": "Five months. I knew something wasn't right."
      },
      {
        "who": "C",
        "text": "I am truly sorry. On behalf of the hospital, I apologise. That result should have been acted on, and it wasn't. That was our failure, not yours."
      },
      {
        "who": "I",
        "text": "Well, thank you for saying it. What should have happened?"
      },
      {
        "who": "C",
        "text": "In a man of your age, that result should have led to an urgent referral to examine the bowel, usually with a camera test, with the appointment date sent to you in writing. That's the standard you were entitled to."
      },
      {
        "who": "I",
        "text": "So I'd have been diagnosed in the autumn. Did those five months make it worse? Has it spread because of this?"
      },
      {
        "who": "C",
        "text": "That's the most important question, and I'll be honest: we cannot know for certain. Some bowel cancers change a great deal in five months, others very little. I won't tell you it made no difference, and I won't tell you it did."
      },
      {
        "who": "I",
        "text": "That's not much of an answer."
      },
      {
        "who": "C",
        "text": "I understand. The investigation will look at this specifically, with experts reviewing your results and scans, and the report will say what can and can't be concluded. I'd rather that than guess today."
      },
      {
        "who": "I",
        "text": "And my treatment now? Does any of this change it?"
      },
      {
        "who": "C",
        "text": "No. Your cancer team has assessed the disease from your scans and tests, and the plan they agreed with you stays exactly as it is; today doesn't change it. If you'd like it explained again, your specialist nurse can arrange time with your surgeon."
      },
      {
        "who": "I",
        "text": "Is anybody going to be held responsible? Someone filed that result."
      },
      {
        "who": "C",
        "text": "That's fair. A patient safety investigation is under way, led by the trust's patient safety team, who weren't involved in your care. They'll look at how the result was filed, who saw it and why the system missed it. Any individual's actions are reviewed through a separate process."
      },
      {
        "who": "I",
        "text": "When will I hear?"
      },
      {
        "who": "C",
        "text": "You'll receive a written report. The team will confirm the expected date to you in writing this week, so it isn't left open. You can also tell them anything you'd like the investigation to look at."
      },
      {
        "who": "I",
        "text": "I might want to complain. Am I allowed to?"
      },
      {
        "who": "C",
        "text": "Absolutely, no permission needed. You have the right to a written account of what happened, to make a formal complaint, and to seek independent advice, for example from a solicitor or a patient advice charity. I've written direct phone numbers and email addresses on this sheet, not just department names."
      },
      {
        "who": "I",
        "text": "Right. Thank you."
      },
      {
        "who": "C",
        "text": "What would you like to come out of today? Is there a question you came with that I haven't answered?"
      },
      {
        "who": "I",
        "text": "I wanted to know if it was my fault for not chasing it. And whether anything will change."
      },
      {
        "who": "C",
        "text": "It was not your fault. Patients are entitled to expect results to be acted on. As for change, recommending changes is part of the investigation's job, and you'll be told what they are."
      },
      {
        "who": "I",
        "text": "My wife wanted to come today. I told her not to."
      },
      {
        "who": "C",
        "text": "Would you like her, or anyone else in your family, here for any of this? We can meet again with her present. And would you prefer a written summary of today before you leave?"
      },
      {
        "who": "I",
        "text": "Yes to both. She'll have questions I haven't thought of."
      },
      {
        "who": "C",
        "text": "Of course. Your named contact is our patient safety lead; her name, direct number and email are at the top of this sheet. Once the report is written, we'll meet again, with your wife, to go through it."
      },
      {
        "who": "I",
        "text": "Good. At least someone's being straight with me."
      },
      {
        "who": "C",
        "text": "You deserve that. Before you go, could you tell me what you're taking away from today, so I know I've explained it clearly?"
      },
      {
        "who": "I",
        "text": "The result was missed, and you've apologised. Nobody knows yet if the delay changed things. My treatment carries on. There's an investigation, a report, and I can complain or get advice. And we'll meet again with my wife."
      },
      {
        "who": "C",
        "text": "Exactly right. Contact your named person at any time."
      }
    ],
    "words": 730,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          3
        ],
        "how": "States at once the result, the date and that it was not acted on."
      },
      {
        "bullet": 2,
        "turns": [
          5
        ],
        "how": "Apologises on behalf of the organisation without conditions or system explanation."
      },
      {
        "bullet": 3,
        "turns": [
          7
        ],
        "how": "Explains that an urgent bowel referral was the standard and how soon he should have been seen."
      },
      {
        "bullet": 4,
        "turns": [
          9,
          11
        ],
        "how": "Says honestly that the effect of the delay cannot be known for certain and how the report will address it."
      },
      {
        "bullet": 5,
        "turns": [
          13
        ],
        "how": "Confirms the cancer team's plan stands and this meeting does not change it."
      },
      {
        "bullet": 6,
        "turns": [
          15,
          17
        ],
        "how": "Explains the patient safety investigation, who leads it and that a written report will follow with a confirmed date."
      },
      {
        "bullet": 7,
        "turns": [
          19
        ],
        "how": "Sets out his rights to a written account, a complaint and independent advice, with direct contact details."
      },
      {
        "bullet": 8,
        "turns": [
          21,
          23
        ],
        "how": "Asks what he wants from the meeting and answers the question he came with."
      },
      {
        "bullet": 9,
        "turns": [
          25
        ],
        "how": "Offers family presence at a further meeting and a written summary before he leaves."
      },
      {
        "bullet": 10,
        "turns": [
          27
        ],
        "how": "Names a contact person and offers a further meeting once the report is written."
      }
    ],
    "concern": {
      "turns": [
        8,
        9,
        11,
        14,
        15
      ],
      "how": "His two questions, whether the delay changed the outcome and who is responsible, are answered honestly: uncertainty is stated plainly and the independent investigation and separate individual review are explained."
    },
    "safety": [
      {
        "point": "Iron deficiency anaemia in a man of his age warrants urgent referral for bowel investigation.",
        "turn": 7
      },
      {
        "point": "The current treatment plan is unchanged by the disclosure.",
        "turn": 13
      },
      {
        "point": "An urgent referral should have been made; the appointment date comes in writing",
        "turn": 7
      }
    ],
    "notes": "The card gives no stage or details of his current disease, so the script keeps it general. It also gives no date for the written report; the script promises written confirmation of the date this week rather than inventing a timescale. [v2: beta-g's clinical fix applied.]"
  },
  "spk-medicine-a-man-who-does-not-want-to-know-his-diagnosis": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Good morning. I'm one of the doctors looking after you on the ward. Is this a good time to talk for a few minutes?"
      },
      {
        "who": "I",
        "text": "If it's about the test, I told them when I came in. I don't want to know. Tell my son."
      },
      {
        "who": "C",
        "text": "Thank you, and I'm not here to tell you anything you don't want to hear. I just wanted to check that what you said on admission is still what you want today."
      },
      {
        "who": "I",
        "text": "It is. Nothing's changed."
      },
      {
        "who": "C",
        "text": "All right. Would you mind telling me a little about what lies behind that wish? Only if you'd like to."
      },
      {
        "who": "I",
        "text": "My wife. Eight years ago they sat her down and told her everything. Every detail. After that she just gave up. Being told took her away faster than the illness did."
      },
      {
        "who": "C",
        "text": "I'm so sorry. That must have been very hard to watch, and it makes sense you'd want to protect yourself from the same."
      },
      {
        "who": "I",
        "text": "She was never the same after that conversation."
      },
      {
        "who": "C",
        "text": "It sounds as though it changed everything. So let me say plainly: I will not force information on you, today or any day. That's your choice, and I mean it."
      },
      {
        "who": "I",
        "text": "Good. Then talk to my son."
      },
      {
        "who": "C",
        "text": "I'll certainly involve him if you wish. There's one limit I must be honest about. If there's a treatment to decide on, you'd need to know enough to agree to it yourself. While you're able to make your own decisions, I can't treat you on your son's say-so."
      },
      {
        "who": "I",
        "text": "So you're going to tell me anyway."
      },
      {
        "who": "C",
        "text": "No. It doesn't have to be all or nothing. Some people want only the name of the condition, without details. Others want only the plan, without talk of the future. Some hear the outlook only if they ask. You can choose."
      },
      {
        "who": "I",
        "text": "I don't know. I don't want to hear bad news."
      },
      {
        "who": "C",
        "text": "Can I ask you one thing, then? People who don't want to be told often assume the news must be bad. Would you want to know if the news were good?"
      },
      {
        "who": "I",
        "text": "If it were good? Yes. I suppose I would."
      },
      {
        "who": "C",
        "text": "Then I can tell you that much, and nothing more unless you ask. The news is good. It's a condition that can be treated, and the outlook is good."
      },
      {
        "who": "I",
        "text": "Well. That's not what I expected. Then I'd like to hear the plan, but not the name. Not yet."
      },
      {
        "who": "C",
        "text": "That's absolutely fine. The plan would be a course of treatment, which the specialist team would explain step by step, including what it involves day to day, so that you can decide whether to agree. We'd go at your pace."
      },
      {
        "who": "I",
        "text": "Can my son be there for that?"
      },
      {
        "who": "C",
        "text": "Of course. And what would you like your son to be told? Everything, or only what you're told?"
      },
      {
        "who": "I",
        "text": "Tell him everything. He's strong. But he's not to tell me the details."
      },
      {
        "who": "C",
        "text": "I understand. So your son may be told the full picture and be with you when we discuss the plan. Shall we write this down together now, so the whole team follows the same instruction and nobody keeps asking you?"
      },
      {
        "who": "I",
        "text": "Yes, please. I don't want someone new every shift asking me."
      },
      {
        "who": "C",
        "text": "Here's what I'll put in your notes. You don't wish to be told the name of the condition or the details at present. You've been told the news is good. You'd like to hear the treatment plan, with your son present. Your son may be told everything. Is that right?"
      },
      {
        "who": "I",
        "text": "That's right."
      },
      {
        "who": "C",
        "text": "If you ever did want to know more, is there anyone else you'd want with you, besides your son?"
      },
      {
        "who": "I",
        "text": "My sister, maybe. She sat with me when my wife was ill."
      },
      {
        "who": "C",
        "text": "I'll add your sister now, so it's ready if that day comes. And you can change your mind at any time, in either direction. Nobody will think it strange."
      },
      {
        "who": "I",
        "text": "Even if I want to know everything next week?"
      },
      {
        "who": "C",
        "text": "Even then. I'll come back tomorrow morning and ask you again myself, before the specialist team meets you and your son. Could you tell me what we've agreed, so I know I've got it right?"
      },
      {
        "who": "I",
        "text": "You won't tell me the name. My son gets told everything and comes when you explain the plan. My sister too, if I ever want the rest. And you'll ask me again tomorrow."
      },
      {
        "who": "C",
        "text": "That's exactly right. Thank you for trusting me with what happened to your wife."
      }
    ],
    "words": 724,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          3
        ],
        "how": "Checks without challenge that his admission wish still stands today."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          7,
          9
        ],
        "how": "Asks what lies behind the wish and lets him talk about his wife, responding with empathy."
      },
      {
        "bullet": 3,
        "turns": [
          3,
          9
        ],
        "how": "States plainly that information will not be forced on him."
      },
      {
        "bullet": 4,
        "turns": [
          11
        ],
        "how": "Explains honestly that consent needs some information and that his son cannot authorise treatment while he has capacity."
      },
      {
        "bullet": 5,
        "turns": [
          13
        ],
        "how": "Offers the middle options: name only, plan only, or outlook only if asked."
      },
      {
        "bullet": 6,
        "turns": [
          15,
          17
        ],
        "how": "Asks whether he would want to know if the news were good, then shares only that."
      },
      {
        "bullet": 7,
        "turns": [
          21,
          23
        ],
        "how": "Agrees what the son may be told and that he may be present."
      },
      {
        "bullet": 8,
        "turns": [
          23,
          25
        ],
        "how": "Writes the decision down with him and reads it back so the whole team follows it."
      },
      {
        "bullet": 9,
        "turns": [
          27,
          29
        ],
        "how": "Asks who else he would want present and records his sister in advance."
      },
      {
        "bullet": 10,
        "turns": [
          29,
          31
        ],
        "how": "Says he can change his mind and nobody will think it strange; agrees the doctor will ask again tomorrow."
      }
    ],
    "concern": {
      "turns": [
        5,
        6,
        7,
        13,
        15,
        17
      ],
      "how": "His belief that being told hastened his wife's decline is invited and acknowledged, and the assumption of bad news is gently tested so he can hear that the news is good without details."
    },
    "safety": [
      {
        "point": "Treatment cannot be authorised by his son while he has capacity; he must have enough information to consent.",
        "turn": 11
      },
      {
        "point": "The diagnosis name and details are withheld as he wishes, and only the agreed information is shared.",
        "turn": 17
      }
    ],
    "notes": ""
  },
  "spk-medicine-a-woman-anxious-about-starting-a-statin": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm one of the GPs. Thanks for coming back about your heart risk check. I gather you've been reading about statins. What have you read, and where?"
      },
      {
        "who": "I",
        "text": "That they cause muscle damage and memory loss. It was on a health forum and in a newspaper. And my sister had awful leg pains on one and stopped it."
      },
      {
        "who": "C",
        "text": "Which part of that worries you most?"
      },
      {
        "who": "I",
        "text": "The muscles, because of my sister. And I don't want to take a tablet for the rest of my life."
      },
      {
        "who": "C",
        "text": "That's understandable. Let me explain your result first, then each worry. Your ten-year risk is 18%. Picture 100 women just like you. Over ten years, about 18 would have a heart attack or stroke, and 82 wouldn't."
      },
      {
        "who": "I",
        "text": "18 out of 100. That's more than I thought."
      },
      {
        "who": "C",
        "text": "It's calculated from your age, cholesterol, blood pressure and other details from the check. It's an estimate for a group like you, not a prediction for you personally."
      },
      {
        "who": "I",
        "text": "And if I took the statin?"
      },
      {
        "who": "C",
        "text": "A statin would lower that number, but not to zero. Some of those 18 would avoid a heart attack or stroke; others still wouldn't. I'll show you a chart on screen with the exact number for your figures, in the same 100 women."
      },
      {
        "who": "I",
        "text": "But what about the muscle damage?"
      },
      {
        "who": "C",
        "text": "I take that seriously. Muscle aches are a common complaint on statins, but in studies where people didn't know whether they were taking a statin or a dummy tablet, aches were reported almost as often on the dummy. Serious muscle damage is rare."
      },
      {
        "who": "I",
        "text": "How would I tell the difference?"
      },
      {
        "who": "C",
        "text": "Ordinary aches are usually mild. Serious muscle damage causes severe pain or weakness, sometimes with dark brown urine. Then you'd stop the tablet and contact us the same day, or 111 if we're closed, and a blood test would check the muscles. Muscle symptoms settle after stopping."
      },
      {
        "who": "I",
        "text": "And the memory?"
      },
      {
        "who": "C",
        "text": "Some people have reported memory problems, which is why it's been studied. Large studies haven't shown that statins cause lasting memory loss or dementia, and where people noticed problems, they went away after stopping. If you noticed anything, we'd review it."
      },
      {
        "who": "I",
        "text": "My sister was in agony, though. She could hardly walk."
      },
      {
        "who": "C",
        "text": "That sounds horrible for her, and I'm not doubting it. What happened after she stopped?"
      },
      {
        "who": "I",
        "text": "It went away, I think."
      },
      {
        "who": "C",
        "text": "That fits with it being reversible. But one person's side effect, even a sister's, doesn't predict yours. People react quite differently, and there are different statins and doses if one doesn't suit."
      },
      {
        "who": "I",
        "text": "Couldn't I just do it with diet? I'd rather change what I eat."
      },
      {
        "who": "C",
        "text": "Healthy eating and exercise genuinely help, whatever you decide. Honestly, though, diet usually lowers cholesterol only modestly, and takes months. At your level of risk, diet alone usually can't replace a statin, but it adds to it."
      },
      {
        "who": "I",
        "text": "So it's not one or the other."
      },
      {
        "who": "C",
        "text": "Exactly. Other things affect the same risk too. How has your blood pressure been, do you smoke, and has anyone in your family had heart problems?"
      },
      {
        "who": "I",
        "text": "Blood pressure was fine at the check, apparently. I stopped smoking years ago. My dad had a heart attack in his sixties."
      },
      {
        "who": "C",
        "text": "Stopping smoking was one of the best things you could do for your heart. I'll record your father's heart attack, and we'll keep checking your blood pressure, because the tablet isn't the only thing that matters."
      },
      {
        "who": "I",
        "text": "And would this tablet be forever?"
      },
      {
        "who": "C",
        "text": "Not necessarily. We could treat it as a trial: start it, review in three months with a blood test, and stop if it doesn't suit you. Many people continue because the benefit continues, but that's your decision at each review."
      },
      {
        "who": "I",
        "text": "That feels less frightening."
      },
      {
        "who": "C",
        "text": "So, what would you like to do? Either answer is fine with me. If you'd rather start with diet alone, we'll recheck your cholesterol and talk again."
      },
      {
        "who": "I",
        "text": "I'll try the tablet, alongside the diet. For three months."
      },
      {
        "who": "C",
        "text": "Good. I'll prescribe it today, book the blood test and review for three months' time, and send you the risk chart. If you get severe muscle pain, weakness or dark urine, stop it and contact us the same day. Can you tell me what you'll do if that happens?"
      },
      {
        "who": "I",
        "text": "Stop the tablet and ring you the same day. Otherwise, blood test and review in three months."
      },
      {
        "who": "C",
        "text": "Exactly. And if you change your mind before then, just ring and we'll talk it through."
      }
    ],
    "words": 726,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          3
        ],
        "how": "Asks what she read, where, and what worries her most before any reassurance."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          7
        ],
        "how": "Pictures 18% as 18 of 100 similar women and says what the estimate is based on."
      },
      {
        "bullet": 3,
        "turns": [
          9
        ],
        "how": "Explains in absolute terms that a statin lowers but does not remove the risk, using the same 100 women and a chart."
      },
      {
        "bullet": 4,
        "turns": [
          11,
          13
        ],
        "how": "Covers how common aches are, how serious damage differs, reversibility and what would be done."
      },
      {
        "bullet": 5,
        "turns": [
          15
        ],
        "how": "States what memory evidence does and does not show."
      },
      {
        "bullet": 6,
        "turns": [
          17,
          19
        ],
        "how": "Asks about her sister and explains that one person's side effect does not predict hers."
      },
      {
        "bullet": 7,
        "turns": [
          21
        ],
        "how": "Is honest that diet helps modestly and slowly and cannot replace a statin at her risk."
      },
      {
        "bullet": 8,
        "turns": [
          27
        ],
        "how": "Offers a trial with a three-month review and blood test, stopping if it does not suit her."
      },
      {
        "bullet": 9,
        "turns": [
          23,
          25
        ],
        "how": "Checks blood pressure, smoking and family history so the tablet is not the only factor."
      },
      {
        "bullet": 10,
        "turns": [
          29,
          31
        ],
        "how": "Asks her decision, says either answer is fine, and agrees next steps either way."
      }
    ],
    "concern": {
      "turns": [
        4,
        20,
        21,
        26,
        27
      ],
      "how": "Her wish to use diet and avoid lifelong tablets is answered honestly about diet's limits and with a time-limited trial she can stop."
    },
    "safety": [
      {
        "point": "Severe muscle pain, weakness or dark urine means stop the statin and seek same-day advice.",
        "turn": 13
      },
      {
        "point": "Review with a blood test at three months after starting.",
        "turn": 27
      }
    ],
    "notes": "The card asks for the statin's effect in absolute terms but gives no figure; the script refers to a decision-aid chart instead of inventing a number. A clinician may wish to insert a standard absolute-risk figure for an 18% baseline."
  },
  "spk-medicine-a-father-who-wants-antibiotics-for-his-son": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Father",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm one of the GPs here. Sorry for the long wait. I've examined your son now. Before I give my view, what's worrying you most?"
      },
      {
        "who": "I",
        "text": "Four days of fever, and the cough's worse at night. My mum came round and said straight away it's a chest infection. She says he needs antibiotics."
      },
      {
        "who": "C",
        "text": "That sounds tiring, and your mum has seen plenty of children's coughs. Is there anything else on your mind?"
      },
      {
        "who": "I",
        "text": "We've got a family wedding tomorrow, and I can't take another day off work. I need him better."
      },
      {
        "who": "C",
        "text": "That matters, and we'll plan for the wedding properly. First, let me tell you what I found. His chest sounds clear on both sides, with none of the crackly sounds we hear in a chest infection, and his breathing isn't fast or laboured."
      },
      {
        "who": "I",
        "text": "But the cough sounds awful."
      },
      {
        "who": "C",
        "text": "It does. Much of that noise is mucus at the back of his nose and throat, not his lungs. His throat is a little red, but his tonsils and eardrums look normal. His temperature is up, but he's alert and chatting to me."
      },
      {
        "who": "I",
        "text": "And he's drinking. He's just eating less."
      },
      {
        "who": "C",
        "text": "That's reassuring. A runny nose, a cough, a fever and a clear chest point to a virus, like a heavy cold. The cough often lasts two or three weeks, even once he feels better."
      },
      {
        "who": "I",
        "text": "But it's day four and he still has a temperature. Surely that means it's bacterial now?"
      },
      {
        "who": "C",
        "text": "That's a common worry. A viral fever can easily last three or four days. How he is in between matters more, and he's lively and drinking. The number of days alone doesn't mean it's bacterial."
      },
      {
        "who": "I",
        "text": "So you won't give him antibiotics. Not even just in case?"
      },
      {
        "who": "C",
        "text": "Antibiotics kill bacteria, not viruses, so they wouldn't shorten the cough or bring the fever down. But they can upset his tummy, cause diarrhoea or a rash, and occasionally an allergic reaction. He'd get the side effects with no benefit."
      },
      {
        "who": "I",
        "text": "I hadn't thought of it like that. But what if you're wrong?"
      },
      {
        "who": "C",
        "text": "That's a fair question. I'd change my mind if he started breathing fast or struggling, stopped drinking, or still had a fever beyond day five, so into Sunday. Then I'd want him checked again that same day."
      },
      {
        "who": "I",
        "text": "What else should I look out for?"
      },
      {
        "who": "C",
        "text": "Get help the same day if he's struggling to breathe, unusually drowsy or hard to wake, or hardly drinking and passing much less urine. If he has a rash that doesn't fade when you press a glass on it, or real trouble breathing, call 999."
      },
      {
        "who": "I",
        "text": "And tonight? What can I give him?"
      },
      {
        "who": "C",
        "text": "Keep him drinking little and often, and dress him in light clothes. Children's paracetamol or ibuprofen can make him more comfortable. Use the dose for his age printed on the bottle."
      },
      {
        "who": "I",
        "text": "How often can I give it?"
      },
      {
        "who": "C",
        "text": "Paracetamol every four to six hours, no more than four doses in twenty-four hours. Ibuprofen every six to eight hours, no more than three doses a day, with food. Write down the times so nobody doubles up. Honey in a warm drink can soothe the cough."
      },
      {
        "who": "I",
        "text": "So, the wedding. Should we cancel?"
      },
      {
        "who": "C",
        "text": "Not necessarily. He'll probably still be coughing and tired, and perhaps feverish. If he's drinking and comfortable, he can go. Let him rest when he needs to, and take his medicine and the timings."
      },
      {
        "who": "I",
        "text": "But it's nowhere near home. What if he gets worse while we're there?"
      },
      {
        "who": "C",
        "text": "The same rules apply anywhere. Ring 111 for advice, or for any urgent sign, call 999 or go to the nearest emergency department. You don't need to come back here first. Look up the nearest hospital tonight."
      },
      {
        "who": "I",
        "text": "I can do that. Actually, that makes me feel better about going."
      },
      {
        "who": "C",
        "text": "Good. It isn't the prescription you came in for, but I hope it's a plan. Can I check one thing? If he became very drowsy tomorrow, what would you do?"
      },
      {
        "who": "I",
        "text": "I wouldn't wait. If I couldn't wake him properly, I'd call 999 or take him straight to A and E, wherever we are."
      },
      {
        "who": "C",
        "text": "Exactly right. And if he stopped drinking, or the fever was still there on Sunday?"
      },
      {
        "who": "I",
        "text": "Get him seen the same day. Meanwhile, fluids, paracetamol or ibuprofen by the bottle, and honey drinks."
      },
      {
        "who": "C",
        "text": "That's it. If you're worried about anything, ring. I'd rather see him again than have you unsure at home. I hope the wedding goes well."
      },
      {
        "who": "I",
        "text": "Thanks, doctor. I'll tell my mum what you said about his chest."
      }
    ],
    "words": 739,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2,
          3,
          4
        ],
        "how": "Opens by asking what worries him most and whether anything else is on his mind, drawing out his mother's view before giving any opinion."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          6,
          7,
          8
        ],
        "how": "Reports the chest, throat, ears, temperature and the child's alertness and drinking as concrete findings."
      },
      {
        "bullet": 3,
        "turns": [
          9,
          10,
          11
        ],
        "how": "Explains the viral pattern, that such coughs often last two to three weeks, and that a day-four fever alone does not mean bacterial infection."
      },
      {
        "bullet": 4,
        "turns": [
          12,
          13
        ],
        "how": "States that antibiotics do not act on viruses and lists the side effects the child would face for no benefit, with no lecture on resistance."
      },
      {
        "bullet": 5,
        "turns": [
          14,
          15
        ],
        "how": "Names fast or laboured breathing, stopping drinking, or fever beyond day five (Sunday) as what would change the plan and prompt review."
      },
      {
        "bullet": 6,
        "turns": [
          15,
          16,
          17
        ],
        "how": "Gives same-day signs (breathing difficulty, drowsiness, poor fluids and urine, fever beyond day five) and a non-blanching rash or serious breathing trouble as 999 signs."
      },
      {
        "bullet": 7,
        "turns": [
          18,
          19,
          20,
          21
        ],
        "how": "Advises fluids, light clothing, paracetamol or ibuprofen at the age dose on the bottle with standard intervals and daily maximums, and honey drinks."
      },
      {
        "bullet": 8,
        "turns": [
          4,
          5,
          21,
          22,
          23,
          24,
          25,
          26
        ],
        "how": "Says the child can probably go if comfortable, what to expect, what to pack, and how to get help away from home."
      },
      {
        "bullet": 9,
        "turns": [
          27,
          28,
          29,
          30,
          31
        ],
        "how": "Asks what he would do if the child became drowsy, and he answers correctly."
      }
    ],
    "concern": {
      "turns": [
        2,
        3,
        4,
        5,
        6,
        7,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        22,
        23,
        24,
        25,
        26,
        31,
        32
      ],
      "how": "The father voices his mother's chest-infection view and the wedding early; the doctor acknowledges both, answers 'the cough sounds awful' and 'day four means bacterial' with the examination findings, and turns the wedding into a practical plan, so he leaves reassured rather than refused."
    },
    "safety": [
      {
        "point": "Antibiotics do not treat viral infections and carry side effects such as diarrhoea, rash and allergic reaction.",
        "turn": 13
      },
      {
        "point": "Seek same-day help for breathing difficulty, unusual drowsiness, poor fluid intake with reduced urine, or fever beyond day five.",
        "turn": 17
      },
      {
        "point": "A rash that does not fade under a glass, or serious breathing difficulty, needs a 999 call.",
        "turn": 17
      },
      {
        "point": "Paracetamol or ibuprofen at the age dose on the label: paracetamol every 4 to 6 hours (max 4 doses in 24 hours), ibuprofen every 6 to 8 hours (max 3 doses a day) with food.",
        "turn": 19
      },
      {
        "point": "Away from home, use 111 for advice or the nearest emergency department or 999 for urgent signs.",
        "turn": 25
      }
    ],
    "notes": "The card asks for 'doses and timings'; the script gives the standard UK label intervals and daily maximums for children's paracetamol and ibuprofen but defers the milligram dose to the age-banded label rather than inventing a figure; please confirm this is acceptable. 'Two or three weeks' for the cough is not on the card (it is the usual UK guidance for acute cough). The temperature value is not given, so none is stated. 111/999 are UK services."
  },
  "spk-medicine-explaining-an-abnormal-chest-x-ray": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, please come in and have a seat. I'm the GP who asked for your chest x-ray last week. Thank you for coming in. Before we start, can I ask what you were expecting from today?"
      },
      {
        "who": "I",
        "text": "Oh, I assumed you'd just tell me it was all clear. My husband's waiting in the car. I told him I'd only be ten minutes."
      },
      {
        "who": "C",
        "text": "I see. And since the x-ray, what have you been thinking about it?"
      },
      {
        "who": "I",
        "text": "Not much, really. I wondered when they said a double appointment, but I thought it was routine. Why? Is something wrong?"
      },
      {
        "who": "C",
        "text": "There is something on the x-ray that I need to talk to you about. Before I go on, would you like your husband to come in from the car to be with you?"
      },
      {
        "who": "I",
        "text": "Is it that bad? No, let me hear it first. I don't want to frighten him for nothing."
      },
      {
        "who": "C",
        "text": "That's fine, and you can change your mind at any point. The x-ray shows an area in the top part of your left lung that shouldn't be there, and it needs urgent tests."
      },
      {
        "who": "I",
        "text": "Oh. I wasn't expecting that at all."
      },
      {
        "who": "C",
        "text": "I know. It's a lot to take in. Take your time. There's no rush."
      },
      {
        "who": "I",
        "text": "Sorry. What kind of area? What does the report actually say?"
      },
      {
        "who": "C",
        "text": "The report describes a mass, which means a lump of tissue, about three centimetres across. What it can't tell us is what that lump is. An x-ray shows a shape, not what something is made of."
      },
      {
        "who": "I",
        "text": "Is it cancer? Please just tell me straight."
      },
      {
        "who": "C",
        "text": "I'll be honest with you. Cancer is one of the possibilities, and that's why we're moving quickly. But other things can look like this on an x-ray too, and I can't tell you which it is today. The tests are how we answer that question."
      },
      {
        "who": "I",
        "text": "So it could be. I keep jumping to the worst."
      },
      {
        "who": "C",
        "text": "That's completely understandable. Anyone would. What's going through your mind right now?"
      },
      {
        "who": "I",
        "text": "Just how long it'll take to know. I can't sit with this for months."
      },
      {
        "who": "C",
        "text": "You won't have to. I'm sending an urgent referral today to the lung specialists at the hospital, and you should be seen within two weeks. The first test will usually be a CT scan, which is a more detailed scan that takes pictures of the chest in slices."
      },
      {
        "who": "I",
        "text": "And then what?"
      },
      {
        "who": "C",
        "text": "Depending on the scan, you'll probably be offered a test to take a small sample of the area, called a biopsy, so it can be looked at under a microscope. Would you like me to explain more about those tests now, or is that enough for today?"
      },
      {
        "who": "I",
        "text": "I think that's enough. I don't want all the details yet. I just want to know it's happening."
      },
      {
        "who": "C",
        "text": "Then we'll leave the details for the specialists, and you can ask me anything at any time. Is there anything else you'd like to know today?"
      },
      {
        "who": "I",
        "text": "Will they ring me, or do I wait for a letter?"
      },
      {
        "who": "C",
        "text": "Usually the hospital phones or writes within a few days. If you haven't heard within a week, ring the surgery and ask for me, and I'll chase it myself."
      },
      {
        "who": "I",
        "text": "All right. Thank you."
      },
      {
        "who": "C",
        "text": "Can I ask how you're getting home today?"
      },
      {
        "who": "I",
        "text": "My husband's driving. He's in the car park."
      },
      {
        "who": "C",
        "text": "Good. Will you be with him tonight? And is there someone you can talk to about this, whenever you're ready?"
      },
      {
        "who": "I",
        "text": "Yes, he'll be there. And my daughter lives nearby. I just don't know how I'll tell them."
      },
      {
        "who": "C",
        "text": "You don't need perfect words. If it helps, he can come in now and I'll explain it to you both, or you can bring him another time."
      },
      {
        "who": "I",
        "text": "Actually, would you? I think I'd rather he heard it from you."
      },
      {
        "who": "C",
        "text": "Of course. I'll fetch him in a moment. Before that, here's a card with the surgery number. Ring and ask for me by name, and I'll call you back the same day. I'd also like to phone you in a couple of days to see how you're doing. Is that all right?"
      },
      {
        "who": "I",
        "text": "Yes. That helps, knowing I can reach you."
      },
      {
        "who": "C",
        "text": "Just so I know I've been clear, could you tell me in your own words what happens next?"
      },
      {
        "who": "I",
        "text": "The x-ray shows a lump that shouldn't be there, and they don't know what it is yet. The hospital will see me within two weeks, do a CT scan and probably take a sample. If I don't hear, I ring you."
      },
      {
        "who": "C",
        "text": "That's exactly right. Let's go and get your husband now."
      }
    ],
    "words": 743,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2,
          3,
          4
        ],
        "how": "Asks what she expected today and what she has thought since the x-ray before mentioning the result."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          6,
          29,
          30,
          31,
          35
        ],
        "how": "Offers to bring her husband in before giving the news, accepts her 'not yet', and fetches him when she later says yes."
      },
      {
        "bullet": 3,
        "turns": [
          7,
          8,
          9
        ],
        "how": "Gives the finding in one plain sentence, then stops and lets her react before adding anything."
      },
      {
        "bullet": 4,
        "turns": [
          10,
          11
        ],
        "how": "Explains that the report describes a three-centimetre mass, defines 'mass', and says the x-ray cannot show what it is."
      },
      {
        "bullet": 5,
        "turns": [
          12,
          13,
          14,
          15
        ],
        "how": "When asked, says cancer is one possibility, other causes are possible, and the tests will answer it; neither promises nor confirms."
      },
      {
        "bullet": 6,
        "turns": [
          16,
          17,
          18,
          19
        ],
        "how": "Describes the urgent referral, being seen within two weeks, the CT scan explained in plain words, and a likely biopsy."
      },
      {
        "bullet": 7,
        "turns": [
          15,
          16,
          19,
          20,
          21,
          22
        ],
        "how": "Asks what is on her mind and whether she wants more detail now, and stops when she says that is enough."
      },
      {
        "bullet": 8,
        "turns": [
          25,
          26,
          27,
          28,
          29
        ],
        "how": "Asks how she is getting home, whether she is alone tonight and who she can talk to."
      },
      {
        "bullet": 9,
        "turns": [
          22,
          23,
          24,
          31,
          32,
          33,
          34,
          35
        ],
        "how": "Gives the surgery number with a same-day callback, plans a follow-up call, says to ring if no hospital contact within a week, and checks understanding."
      }
    ],
    "concern": {
      "turns": [
        2,
        4,
        5,
        6,
        26,
        28,
        29,
        30,
        31,
        35
      ],
      "how": "She expected an 'all clear' and left her husband in the car; the doctor asks what she expected first, offers to bring him in before the news, returns to him when she worries about telling her family, and ends by fetching him at her request."
    },
    "safety": [
      {
        "point": "Does not promise that the mass is not cancer and does not say it is; the tests will decide.",
        "turn": 13
      },
      {
        "point": "Urgent referral with the patient seen within two weeks, CT scan first, then probably a biopsy.",
        "turn": 17
      },
      {
        "point": "Safety net for the referral: if no contact from the hospital within a week, ring the GP, who will chase it.",
        "turn": 23
      }
    ],
    "notes": "'Within a week' for chasing the hospital and a follow-up phone call 'in a couple of days' are the script's own reasonable choices, not given by the card."
  },
  "spk-medicine-a-man-who-has-been-told-to-stop-driving": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm one of the doctors in the first seizure clinic. I'm sorry to hear about what happened three days ago. Can you tell me about it in your own words?"
      },
      {
        "who": "I",
        "text": "I was having breakfast and apparently I just went. My wife said I went stiff and jerked for a minute or two. I woke on the floor with a sore tongue."
      },
      {
        "who": "C",
        "text": "That sounds frightening for both of you. So your wife saw the whole thing?"
      },
      {
        "who": "I",
        "text": "Yes. She rang for an ambulance, but I was coming round by the time they came."
      },
      {
        "who": "C",
        "text": "Thank you. Can I ask, since the first seizure, have you been driving at all?"
      },
      {
        "who": "I",
        "text": "Well, a bit. I'm a self-employed courier. I stuck to short local runs. I felt completely fine, so I thought it was all right."
      },
      {
        "who": "C",
        "text": "Thank you for being honest. That really helps. One seizure can be a one-off. A second tells us your brain has a tendency to have seizures, and that's what epilepsy means. So the diagnosis now is epilepsy."
      },
      {
        "who": "I",
        "text": "Epilepsy. Right. But I can still do the local runs, can't I? It's not as if I'm on the motorway."
      },
      {
        "who": "C",
        "text": "I'm afraid not, and I need to be very clear. You must not drive from today, any distance at all. It's your legal duty to tell the licensing authority yourself. With epilepsy it is usually a year without seizures, but the DVLA decides; for larger goods vehicles it is much longer."
      },
      {
        "who": "I",
        "text": "A year? But I feel fine. And it happened at home, not in the van."
      },
      {
        "who": "C",
        "text": "I understand why short trips feel safer. But a seizure doesn't give notice. Feeling well this morning tells us nothing about this afternoon, and on a quiet local road you could still hit a child or another car."
      },
      {
        "who": "I",
        "text": "So what happens if I just carry on? Will you report me?"
      },
      {
        "who": "C",
        "text": "I'd rather be honest now, so nothing surprises you later. If you kept driving, I'd first try to persuade you to stop. If that failed, I'd have to inform the licensing authority myself, and I'd tell you before I did. It's not a threat. It's about everyone's safety."
      },
      {
        "who": "I",
        "text": "That's my living gone. I've got a mortgage. Do you understand that?"
      },
      {
        "who": "C",
        "text": "I do, and I want to spend real time on that. What does your business involve day to day?"
      },
      {
        "who": "I",
        "text": "Parcels, mostly. I've got contracts with a few local firms, plus some regular pickups. Without the van, there's nothing."
      },
      {
        "who": "C",
        "text": "Could someone else do any of it for a while? A driver you pay, for example?"
      },
      {
        "who": "I",
        "text": "My nephew drives. Maybe he could take some runs. I'd still have the paperwork and the customers."
      },
      {
        "who": "C",
        "text": "That's a real possibility. You'd still run the business, just without driving. What happens to your income from Monday if nothing changes?"
      },
      {
        "who": "I",
        "text": "It'd stop. Simple as that."
      },
      {
        "who": "C",
        "text": "Then let's look at the help that exists. A benefits adviser can check what you're entitled to. Ask your insurer whether your policy covers loss of income, and your accountant about the business. Epilepsy charities also advise on driving and work, and I'll give you their details."
      },
      {
        "who": "I",
        "text": "OK. And treatment? Will tablets get me back on the road sooner?"
      },
      {
        "who": "C",
        "text": "I'm recommending a daily anti-seizure medicine. For many people it stops seizures or makes them much less frequent. It doesn't shorten the waiting period, but the time counts from your last seizure, so if the medicine works, the clock keeps running. Take it every day and never stop it suddenly."
      },
      {
        "who": "I",
        "text": "So the sooner I start, the better."
      },
      {
        "who": "C",
        "text": "Exactly. A few other safety points, briefly. Have showers rather than baths, only swim with someone who knows about your epilepsy, avoid heights and dangerous machinery, and don't bath young children on your own."
      },
      {
        "who": "I",
        "text": "That's fair. I can live with those."
      },
      {
        "who": "C",
        "text": "Thank you. So what will you do this week?"
      },
      {
        "who": "I",
        "text": "Tell the licensing people, ring my insurer and accountant, talk to my nephew about covering runs, and start the tablets."
      },
      {
        "who": "C",
        "text": "That's a good plan. I'll write to your GP today. Just to be sure I've been clear, what will you do tomorrow morning when it's time to start work?"
      },
      {
        "who": "I",
        "text": "I won't drive. Not even to the depot. My nephew can take me or I'll get a taxi, and I'll make the calls from home."
      },
      {
        "who": "C",
        "text": "That's exactly right. I know this is a hard week. We'll see you again in clinic to check how the medicine is going."
      },
      {
        "who": "I",
        "text": "Thanks, doctor. It's not what I wanted to hear, but at least I know where I stand."
      }
    ],
    "words": 742,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "how": "Asks him to describe the seizure three days ago, confirms his wife witnessed it, and asks directly about driving since the first seizure."
      },
      {
        "bullet": 2,
        "turns": [
          7
        ],
        "how": "Explains that one seizure can be a one-off but a second shows a tendency to recur, which is what epilepsy means."
      },
      {
        "bullet": 3,
        "turns": [
          8,
          9
        ],
        "how": "States he must not drive from today, must inform the licensing authority himself, and gives the usual minimum period before reapplying."
      },
      {
        "bullet": 4,
        "turns": [
          12,
          13
        ],
        "how": "When asked, explains honestly that the doctor would persuade first, then inform the authority, and would tell him beforehand."
      },
      {
        "bullet": 5,
        "turns": [
          8,
          10,
          11
        ],
        "how": "Answers 'local runs' and 'I feel fine' by explaining that a seizure gives no notice and the danger is not about distance."
      },
      {
        "bullet": 6,
        "turns": [
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ],
        "how": "Asks what the business involves, what someone else could do, and what happens to his income from Monday."
      },
      {
        "bullet": 7,
        "turns": [
          21
        ],
        "how": "Points him to a benefits adviser, his insurer, his accountant and epilepsy support charities."
      },
      {
        "bullet": 8,
        "turns": [
          22,
          23,
          24
        ],
        "how": "Recommends a daily anti-seizure medicine, says what it should achieve, and explains it does not shorten the period but keeps the seizure-free clock running."
      },
      {
        "bullet": 9,
        "turns": [
          25,
          26
        ],
        "how": "Covers baths, swimming, heights, machinery and bathing young children in one brief turn."
      },
      {
        "bullet": 10,
        "turns": [
          27,
          28,
          29,
          30,
          31
        ],
        "how": "Agrees the week's actions and asks what he will do tomorrow morning; he says he will not drive."
      }
    ],
    "concern": {
      "turns": [
        5,
        6,
        8,
        10,
        11,
        12,
        14,
        28,
        30,
        32
      ],
      "how": "The doctor asks openly about driving since the first seizure, thanks him for being honest, and answers his 'short local runs, I feel fine' reasoning with why a seizure gives no notice; his real fear, his income, is then given real time and practical options, so he accepts the ban."
    },
    "safety": [
      {
        "point": "No driving from today; with epilepsy usually a year without seizures, but the DVLA decides; much longer for larger goods vehicles",
        "turn": 9
      },
      {
        "point": "A seizure gives no warning, so short local journeys are not safe.",
        "turn": 11
      },
      {
        "point": "If he keeps driving, the doctor would inform the licensing authority after telling him.",
        "turn": 13
      },
      {
        "point": "Take the anti-seizure medicine every day and never stop it suddenly.",
        "turn": 23
      },
      {
        "point": "Showers not baths, swim only with someone who knows, avoid heights and dangerous machinery, do not bath young children alone.",
        "turn": 25
      }
    ],
    "notes": "v2: beta-g asked for \"at least six months after a first seizure\"; this card is epilepsy after a SECOND seizure, where the usual UK rule (DVLA, ordinary licence) is a year without seizures — the line now says a year is usual and the DVLA decides, and much longer for larger goods vehicles. Whether a courier van counts as an ordinary licence depends on its weight. For beta-g/owner to confirm. The medicine is not named."
  },
  "spk-medicine-a-daughter-who-wants-everything-done": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Daughter",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm the medical registrar looking after your mother. Thank you for coming in. What have you been told so far, and how do you think she's doing?"
      },
      {
        "who": "I",
        "text": "The nurses said she has pneumonia and they've changed her antibiotics. I thought she'd be picking up by now. She's always bounced back before."
      },
      {
        "who": "C",
        "text": "She has been very strong. She does have pneumonia, and we've changed to a second antibiotic, but I'm afraid it isn't working as we'd hoped. Her heart failure is also advanced, which means her heart is very weak, and she's very frail."
      },
      {
        "who": "I",
        "text": "But she's had heart failure for years. That's nothing new."
      },
      {
        "who": "C",
        "text": "That's true, but it has worsened, and it makes fighting this infection much harder. I'm worried she may not recover from this one. Has she ever said how she'd want to be cared for if she became this ill?"
      },
      {
        "who": "I",
        "text": "She used to say she didn't want to be kept going on machines. But that was years ago. Nothing's written down, as far as I know."
      },
      {
        "who": "C",
        "text": "Thank you, that helps. I'd like to talk about what we'd do if her heart stopped. Do you know what resuscitation involves?"
      },
      {
        "who": "I",
        "text": "Like on television. You shock them and they wake up."
      },
      {
        "who": "C",
        "text": "In real life it's much harder. It means pressing hard on the chest, which at her age often breaks ribs, putting in a tube to breathe for her, and sometimes electric shocks. For someone of ninety-one with her heart and frailty, it's very unlikely to work, and if it did, she'd probably be much more unwell afterwards."
      },
      {
        "who": "I",
        "text": "So you want me to sign something saying you won't bother. I'm not doing that."
      },
      {
        "who": "C",
        "text": "I can hear how upsetting this is. You're not being asked to sign anything, or to decide whether your mother lives. This is a medical decision the team makes, because we don't think resuscitation would help her. I'm explaining it, and I want to hear your view."
      },
      {
        "who": "I",
        "text": "But once that form's on her notes, everyone will just give up on her. That's what happens."
      },
      {
        "who": "C",
        "text": "I understand that fear, so let me be specific. Her antibiotics, oxygen, fluids, pain relief and nursing care all continue, and you can visit just as you do now. The only change is that if her heart stops, we won't try to restart it."
      },
      {
        "who": "I",
        "text": "Really? Nobody will stop the treatment?"
      },
      {
        "who": "C",
        "text": "No. Nobody will bother with her any less. If she gets worse, the nurses will still call a doctor to see her, and we'll look for anything we can treat."
      },
      {
        "who": "I",
        "text": "What about at night, though? Her breathing gets bad at night."
      },
      {
        "who": "C",
        "text": "That's an important question. What would you like to happen if her breathing gets worse overnight?"
      },
      {
        "who": "I",
        "text": "I'd want someone to see her straight away. And I'd want to be called. I don't want her on her own."
      },
      {
        "who": "C",
        "text": "That's reasonable. A doctor would see her, adjust her oxygen and treatment, and give medicine to ease the breathlessness so she's comfortable. Intensive care machines wouldn't help her, so we'd treat her here on the ward, and we'd phone you, day or night."
      },
      {
        "who": "I",
        "text": "OK. That's better than I thought. Should Mum be part of this? I don't want to talk behind her back."
      },
      {
        "who": "C",
        "text": "I agree, she should be involved as far as she can be. How much do you think she's able to take in at the moment?"
      },
      {
        "who": "I",
        "text": "She's drowsy, but she knows me. She's clearer in the mornings."
      },
      {
        "who": "C",
        "text": "Then I'll come back tomorrow morning to talk with her gently, with you there if you'd like."
      },
      {
        "who": "I",
        "text": "Yes, I'd like to be there. My brother's going to ask me all about this, though, and I'll get it wrong."
      },
      {
        "who": "C",
        "text": "You won't have to explain it alone. I'm happy to speak to him myself. How would you like us to keep the family updated?"
      },
      {
        "who": "I",
        "text": "Ring me, please. I'm the main contact. And maybe my brother could call you tonight."
      },
      {
        "who": "C",
        "text": "Of course. I'll note you as the first contact and tell the nurses your brother may call. Can I check what you'll tell him, in your own words?"
      },
      {
        "who": "I",
        "text": "That Mum's very poorly and the pneumonia isn't getting better. If her heart stops, they won't try to restart it because it wouldn't work. But everything else carries on, antibiotics, oxygen, care, and they'll ring me if she gets worse."
      },
      {
        "who": "C",
        "text": "That's exactly it. Thank you. I know this has been very hard, and you can ask us anything at any time."
      },
      {
        "who": "I",
        "text": "Thank you for being straight with me."
      }
    ],
    "words": 737,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2,
          3,
          4,
          5
        ],
        "how": "Asks what she has been told and understands, then gently corrects her belief that her mother should be recovering."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          6
        ],
        "how": "Asks what her mother has said about her care and whether anything is written down."
      },
      {
        "bullet": 3,
        "turns": [
          7,
          8,
          9
        ],
        "how": "Asks what she knows about resuscitation, then describes chest compressions, rib fractures, a breathing tube and shocks, and the poor likely outcome."
      },
      {
        "bullet": 4,
        "turns": [
          10,
          11
        ],
        "how": "States she is not signing anything or choosing whether her mother lives; it is a medical decision explained to her, and her view is sought."
      },
      {
        "bullet": 5,
        "turns": [
          13,
          14
        ],
        "how": "Lists everything that continues: antibiotics, oxygen, fluids, pain relief, nursing care and visiting."
      },
      {
        "bullet": 6,
        "turns": [
          12,
          13,
          15
        ],
        "how": "Names her fear of being 'given up on' and says a doctor will still be called and treatable causes looked for if her mother worsens."
      },
      {
        "bullet": 7,
        "turns": [
          16,
          17,
          18,
          19
        ],
        "how": "Asks what she would want if breathing worsens overnight, then explains review, oxygen, medicine for breathlessness, ward-based care and a phone call."
      },
      {
        "bullet": 8,
        "turns": [
          20,
          21,
          22,
          23
        ],
        "how": "Asks whether her mother should be involved and how much she can take in, and plans to talk to her in the morning."
      },
      {
        "bullet": 9,
        "turns": [
          19,
          24,
          25,
          26,
          27,
          28,
          29
        ],
        "how": "Agrees the daughter as first contact, offers to speak to her brother directly, and checks her understanding."
      }
    ],
    "concern": {
      "turns": [
        10,
        11,
        12,
        13,
        14,
        15,
        18,
        19,
        28,
        30
      ],
      "how": "She fears the form means her mother will be 'given up on'; the doctor names this fear, lists exactly what continues, explains what will happen if she deteriorates and overnight, and she confirms in her own words that everything except resuscitation carries on."
    },
    "safety": [
      {
        "point": "CPR in a frail 91-year-old with advanced heart failure involves chest compressions that often break ribs, is very unlikely to succeed, and survivors are usually more unwell.",
        "turn": 9
      },
      {
        "point": "A DNACPR decision is a medical decision; the relative is consulted, not asked to authorise it.",
        "turn": 11
      },
      {
        "point": "Antibiotics, oxygen, fluids, pain relief, nursing care and visiting all continue; only CPR is not attempted.",
        "turn": 13
      },
      {
        "point": "If she deteriorates, a doctor will still be called and treatable causes looked for.",
        "turn": 15
      },
      {
        "point": "Overnight deterioration: medical review, oxygen and treatment adjusted, medicine to ease breathlessness, ward-based care, family phoned.",
        "turn": 19
      }
    ],
    "notes": "The card mentions a 'ceiling of treatment' without defining it; the script assumes ward-based care with no intensive care, which is the usual meaning but should be confirmed for this patient. Fluids are said to continue because the card lists them."
  },
  "spk-medicine-explaining-a-medication-error": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm the doctor responsible for your care today. May I sit down? I need to tell you something important. An error has been made with your medication. For the last three days, you've been given twice the dose of your blood pressure tablet that you should have had."
      },
      {
        "who": "I",
        "text": "Twice? I knew it. I knew something wasn't right."
      },
      {
        "who": "C",
        "text": "I'm very sorry. On behalf of the team, I apologise. It should not have happened. When you came in, your dose was copied down wrongly onto your chart, and that wrong dose was given from then on."
      },
      {
        "who": "I",
        "text": "Who wrote it down? Was it the young doctor who admitted me?"
      },
      {
        "who": "C",
        "text": "I understand why you'd want to know. It's being looked into, and it wouldn't be fair to blame one person before we understand how it happened. What matters is that the team got this wrong, and I'm sorry."
      },
      {
        "who": "I",
        "text": "I asked twice, you know. I asked whether these tablets were what was making me dizzy."
      },
      {
        "who": "C",
        "text": "You did, and you were right. You noticed something was wrong and you said so, twice. You should have been listened to sooner, and I'm sorry you weren't."
      },
      {
        "who": "I",
        "text": "Well, thank you for saying that. So what has it done to me?"
      },
      {
        "who": "C",
        "text": "This tablet lowers your blood pressure. At double the dose, it pushed your blood pressure lower than it should be, especially when you stood up. That's what caused the dizzy spells and the near-fall. Did you hurt yourself when that happened?"
      },
      {
        "who": "I",
        "text": "No, I grabbed the bed rail. I was just shaken."
      },
      {
        "who": "C",
        "text": "I'm glad you weren't hurt. As far as we can tell so far, there's no lasting harm, and this effect usually settles once the dose is right. But to be honest, I'm still waiting for some results before I can say that fully."
      },
      {
        "who": "I",
        "text": "What have you done about it?"
      },
      {
        "who": "C",
        "text": "Your dose was corrected as soon as the error was found today. The nurses are checking your blood pressure regularly, lying and standing. We've taken blood tests to check your kidneys and salt levels, which can be affected, and we'll keep monitoring you closely for the next day or two."
      },
      {
        "who": "I",
        "text": "And will anything actually happen? Or does it just get swept under the carpet?"
      },
      {
        "who": "C",
        "text": "It's been formally reported as an incident, and there will be a review. The aim is to understand how the dose was copied wrongly and to change the system so it doesn't happen to anyone else. It's not about punishing somebody."
      },
      {
        "who": "I",
        "text": "Hmm. That's easy to say."
      },
      {
        "who": "C",
        "text": "It is, so you shouldn't have to take my word for it. You're entitled to a written account of what happened. Would you like me to arrange that for you?"
      },
      {
        "who": "I",
        "text": "Yes, I would. I want it in black and white."
      },
      {
        "who": "C",
        "text": "I'll arrange it today. What questions do you have for me?"
      },
      {
        "who": "I",
        "text": "Will the dizziness stop now? I want to go home on the day I was meant to."
      },
      {
        "who": "C",
        "text": "I'd expect it to improve as your blood pressure settles, but I can't promise yet when you'll go home. That depends on your readings and the blood results, and I don't have all of those yet. I'd rather tell you that than guess."
      },
      {
        "who": "I",
        "text": "And what about my tablets at home? Is my home dose right?"
      },
      {
        "who": "C",
        "text": "Good question. We'll check your dose carefully against your GP's records before you leave, so you go home on the correct one. Until you're steady, please press your call bell before getting up, and stand up slowly."
      },
      {
        "who": "I",
        "text": "All right. My son will want to know about all this."
      },
      {
        "who": "C",
        "text": "Of course. Would you like him told? And would you rather tell him yourself, or have me speak to him?"
      },
      {
        "who": "I",
        "text": "Could you speak to him? He'll have questions I can't answer."
      },
      {
        "who": "C",
        "text": "Yes, I'll ring him this afternoon if you give me his number. And I'll come back to see you tomorrow on the ward round with the consultant, to go over your results and the plan."
      },
      {
        "who": "I",
        "text": "Thank you. I appreciate you telling me straight."
      },
      {
        "who": "C",
        "text": "Can I check I've explained things clearly? What will you tell your son happened?"
      },
      {
        "who": "I",
        "text": "That I was given double my blood pressure tablet for three days because it was copied wrong, and that's why I was dizzy. It's been fixed, they're watching my blood pressure and bloods, there's a review, and I'm getting it in writing."
      },
      {
        "who": "C",
        "text": "That's exactly right. And if you feel dizzy at any point, press your call bell straight away. I'm sorry again that this happened."
      }
    ],
    "words": 736,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2,
          3
        ],
        "how": "Opens by saying plainly that an error was made and what it was: twice the intended blood pressure dose for three days."
      },
      {
        "bullet": 2,
        "turns": [
          3,
          4,
          5
        ],
        "how": "Apologises on behalf of the team and declines to name or blame the admitting doctor."
      },
      {
        "bullet": 3,
        "turns": [
          6,
          7
        ],
        "how": "Says explicitly that she asked twice, that she was right, and that she should have been listened to sooner."
      },
      {
        "bullet": 4,
        "turns": [
          8,
          9,
          10,
          11
        ],
        "how": "Explains the drug lowers blood pressure, that the double dose caused the dizziness and near-fall, and what harm has and has not been found so far."
      },
      {
        "bullet": 5,
        "turns": [
          12,
          13
        ],
        "how": "Describes the corrected dose, lying and standing blood pressure checks, kidney and salt blood tests, and monitoring over the next day or two."
      },
      {
        "bullet": 6,
        "turns": [
          14,
          15,
          16
        ],
        "how": "Explains the incident report and review, and that its purpose is to change the system, not to punish someone."
      },
      {
        "bullet": 7,
        "turns": [
          16,
          17,
          18
        ],
        "how": "Tells her she is entitled to a written account and offers to arrange it."
      },
      {
        "bullet": 8,
        "turns": [
          11,
          19,
          20,
          21,
          22,
          23
        ],
        "how": "Invites questions and is honest that results and discharge timing are not yet known."
      },
      {
        "bullet": 9,
        "turns": [
          24,
          25,
          26,
          27,
          29,
          30,
          31
        ],
        "how": "Agrees the doctor will ring her son, that the doctor and consultant will see her tomorrow, and checks her understanding."
      }
    ],
    "concern": {
      "turns": [
        2,
        6,
        7,
        8,
        9,
        28,
        30
      ],
      "how": "She had linked the dizziness to the tablets and asked twice; the doctor tells her before she asks, confirms she was right and should have been heard, explains the dizziness, and she ends by summarising the whole account correctly."
    },
    "safety": [
      {
        "point": "Dose corrected; lying and standing blood pressure and kidney and salt blood tests monitored over the next day or two.",
        "turn": 13
      },
      {
        "point": "Fall prevention: use the call bell before getting up, stand slowly, and report any dizziness at once.",
        "turn": 23
      }
    ],
    "notes": "The card does not name the drug, its dose, or the blood test results, so none are stated; the script names kidney function and salts as the tests taken, which is usual for antihypertensive overdose but should match the actual drug. 'No lasting harm so far' is hedged as pending results."
  },
  "spk-medicine-a-patient-who-wants-a-scan-you-do-not-think-is-needed": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, please take a seat. I'm one of the GPs here, and I examined you last time. I understand you'd like to talk about a scan. First, could you tell me what you're most worried the pain might be?"
      },
      {
        "who": "I",
        "text": "Honestly, I don't know, and that's the problem. It's been six weeks. My colleague had an MRI and it showed a slipped disc. I keep thinking I've got the same, or something worse."
      },
      {
        "who": "C",
        "text": "That sounds unsettling. When you say worse, what's on your mind? And what do you expect a scan would show?"
      },
      {
        "who": "I",
        "text": "Something serious, like a tumour. I just want a picture, so someone can tell me exactly what's wrong."
      },
      {
        "who": "C",
        "text": "That's understandable. Let me go through what I check for, out loud, so you can hear it. Any change in your bladder or bowels, such as difficulty passing urine, or leaking?"
      },
      {
        "who": "I",
        "text": "No, nothing like that."
      },
      {
        "who": "C",
        "text": "Any numbness between your legs or around your bottom, the saddle area? Any weakness in your legs?"
      },
      {
        "who": "I",
        "text": "No. It's just my lower back."
      },
      {
        "who": "C",
        "text": "Any fever, weight loss without trying, pain that wakes you at night, or have you ever been treated for cancer?"
      },
      {
        "who": "I",
        "text": "No to all of those. It doesn't wake me."
      },
      {
        "who": "C",
        "text": "Thank you. Those are the signs that would make me scan you today, and you have none of them. With your examination, that's reassuring. Can I explain something about back scans that surprises people?"
      },
      {
        "who": "I",
        "text": "Go on."
      },
      {
        "who": "C",
        "text": "When people your age with no back pain at all are scanned, many show disc bulges or wear and tear. That's often normal ageing, like grey hair on the inside. So a scan might well find something unrelated to your pain."
      },
      {
        "who": "I",
        "text": "But if something's there, surely it's better to know?"
      },
      {
        "who": "C",
        "text": "Once something's found, it can lead to more worry and sometimes injections or surgery that wouldn't help. Honestly, if we scanned today, my treatment would be the same. A scan would matter if warning signs appeared, or if the pain didn't settle and we were considering a procedure."
      },
      {
        "who": "I",
        "text": "Can I be honest? I think I'm being refused because scans are expensive."
      },
      {
        "who": "C",
        "text": "I'm glad you said that. Cost isn't the reason. With any of those warning signs, I'd scan you today. I'm advising against it because right now it's more likely to harm you than help."
      },
      {
        "who": "I",
        "text": "So what do I do in the meantime? I can't carry on like this."
      },
      {
        "who": "C",
        "text": "You shouldn't have to. First, take pain relief regularly, as the packet or pharmacist advises, not only when it's bad, so you can keep moving. Second, stay active. Resting in bed tends to make backs stiffer and slower to recover."
      },
      {
        "who": "I",
        "text": "I've been resting a lot, because moving hurts."
      },
      {
        "who": "C",
        "text": "That's common, and some discomfort when moving doesn't mean damage. I'll also refer you to a physiotherapist for exercises. Most people with this kind of pain improve a great deal over six to twelve weeks, though it can come and go."
      },
      {
        "who": "I",
        "text": "And if it doesn't get better?"
      },
      {
        "who": "C",
        "text": "Then we look again. I'll see you in four weeks, and we'll book it today. I'll examine you again and check on the physiotherapy. If you're no better, I'll change the treatment, and if it's not improving by around twelve weeks, or it's getting worse, I'll arrange imaging or a specialist opinion."
      },
      {
        "who": "I",
        "text": "So there is a point where you'd scan me."
      },
      {
        "who": "C",
        "text": "Yes. And I'll print those warning signs for you. If any appear, especially bladder or bowel changes, numbness between your legs or new leg weakness, don't wait for the review. Go to A&E the same day."
      },
      {
        "who": "I",
        "text": "That's helpful to have."
      },
      {
        "who": "C",
        "text": "How does that plan feel to you? Please be honest."
      },
      {
        "who": "I",
        "text": "I'm still a bit disappointed. I came in expecting a scan."
      },
      {
        "who": "C",
        "text": "That's fair, and I'd rather you said so. Which part feels most unsatisfying?"
      },
      {
        "who": "I",
        "text": "Not knowing for certain."
      },
      {
        "who": "C",
        "text": "I understand. I've looked carefully for the serious causes, and we have a clear point at which we'd look further. Shall I go over anything again?"
      },
      {
        "who": "I",
        "text": "No. It's not that you're refusing. A scan just wouldn't help yet."
      },
      {
        "who": "C",
        "text": "Exactly. So what will you do over the next four weeks?"
      },
      {
        "who": "I",
        "text": "Take the painkillers regularly, keep moving, see the physio and come back in four weeks. And go to A&E straight away if any warning signs appear."
      },
      {
        "who": "C",
        "text": "Perfect. Let's book that review now."
      }
    ],
    "words": 707,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          3,
          4
        ],
        "how": "Asks what she fears the pain is and what she expects the scan to show."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          7,
          9,
          11
        ],
        "how": "Asks about each red flag out loud and states that none is present."
      },
      {
        "bullet": 3,
        "turns": [
          13,
          15
        ],
        "how": "Explains that scans of pain-free people often show disc changes and that findings can lead to unneeded treatment."
      },
      {
        "bullet": 4,
        "turns": [
          15
        ],
        "how": "States the treatment would be the same today and names when a scan would change things."
      },
      {
        "bullet": 5,
        "turns": [
          16,
          17
        ],
        "how": "Answers the cost suspicion directly and gives the real reason."
      },
      {
        "bullet": 6,
        "turns": [
          19,
          21
        ],
        "how": "Proposes regular pain relief, staying active, physiotherapy and the usual six-to-twelve-week recovery."
      },
      {
        "bullet": 7,
        "turns": [
          23
        ],
        "how": "Books a four-week review and says what will happen there and when imaging would follow."
      },
      {
        "bullet": 8,
        "turns": [
          25
        ],
        "how": "Gives the red flags in writing and says not to wait for the review."
      },
      {
        "bullet": 9,
        "turns": [
          27,
          29,
          31
        ],
        "how": "Asks if the plan is acceptable, hears her disappointment and responds to it."
      }
    ],
    "concern": {
      "turns": [
        2,
        4,
        16,
        17,
        30,
        31,
        32
      ],
      "how": "Her belief that only a scan can show what is wrong is met by the spoken red-flag check and the explanation of incidental findings; the cost suspicion is named and answered directly, and a clear imaging trigger shows the refusal is not permanent."
    },
    "safety": [
      {
        "point": "No red flags present: no bladder or bowel change, saddle numbness, leg weakness, fever, weight loss, night pain or cancer history.",
        "turn": 11
      },
      {
        "point": "Early imaging of non-specific back pain is unlikely to change treatment and incidental findings can lead to unnecessary treatment.",
        "turn": 15
      },
      {
        "point": "Bed rest is discouraged; staying active aids recovery.",
        "turn": 19
      },
      {
        "point": "Bladder or bowel change, saddle numbness or new leg weakness means going to A&E the same day, without waiting for the review.",
        "turn": 25
      }
    ],
    "notes": "The card asks for a specific review date but gives none; the script uses four weeks from today and names around twelve weeks of non-improvement as the point for imaging or specialist referral. A clinician should confirm these intervals match local back-pain pathways."
  },
  "spk-medicine-stopping-a-long-term-sleeping-tablet": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Good afternoon, please sit down. I'm one of the GPs, and I'm reviewing your repeat prescriptions today. Before we talk about medicines, how is your sleep at the moment?"
      },
      {
        "who": "I",
        "text": "All right, I suppose, as long as I take my tablet."
      },
      {
        "who": "C",
        "text": "Could you describe a typical night? How long it takes to fall asleep, how often you wake, and how you feel in the morning?"
      },
      {
        "who": "I",
        "text": "It takes a while to drop off, longer than it used to. I wake around three and lie there for ages. In the mornings I'm groggy until lunchtime."
      },
      {
        "who": "C",
        "text": "That sounds tiring. If you didn't take the tablet one night, what do you think would happen?"
      },
      {
        "who": "I",
        "text": "I wouldn't sleep a wink. I've taken it since my husband died, nineteen years ago. A doctor once told me I should stop, and I've dreaded this appointment ever since."
      },
      {
        "who": "C",
        "text": "I can hear that's been worrying you, so let me be clear now. I won't stop your tablet suddenly, and you won't be left without a prescription. Any change will be slow, and we'll decide it together."
      },
      {
        "who": "I",
        "text": "Oh. That's a relief. I thought you'd take it away today."
      },
      {
        "who": "C",
        "text": "Not at all. Can I explain what this medicine does to sleep after many years?"
      },
      {
        "who": "I",
        "text": "Yes, go on."
      },
      {
        "who": "C",
        "text": "At first it helped you fall asleep, but the body gets used to it and that effect fades, which may be why dropping off is slow now. The sleep it gives is also lighter than natural sleep, which can explain waking at three and feeling groggy."
      },
      {
        "who": "I",
        "text": "So it isn't doing much for me?"
      },
      {
        "who": "C",
        "text": "Less than it did, but your body now relies on it, so stopping suddenly would feel dreadful. I'm also concerned about safety. You've fallen twice this year. Can you tell me about that?"
      },
      {
        "who": "I",
        "text": "Once in the bathroom at night, once in the garden. Nothing broken, thank goodness."
      },
      {
        "who": "C",
        "text": "I'm glad. At your age this tablet can make you unsteady, especially at night, and a fall can mean a broken hip. It can also affect memory, cause confusion and leave you drowsy in the day. It may well have played a part in both falls."
      },
      {
        "who": "I",
        "text": "I did feel very wobbly in the bathroom."
      },
      {
        "who": "C",
        "text": "That fits. I'd suggest a small first step: reducing your nightly dose by about a tenth, and staying there for two to four weeks, agreed with you, longer if needed. I'll see you in two weeks before we change anything else."
      },
      {
        "who": "I",
        "text": "But what if I can't sleep at all on less?"
      },
      {
        "who": "C",
        "text": "Some nights may be worse at first, and that usually settles. A routine helps: get up at the same time daily, avoid daytime naps, and keep the bedroom for sleep. If you wake at three and can't drift off, get up, sit somewhere calm and dim, and go back to bed when you feel sleepy."
      },
      {
        "who": "I",
        "text": "I usually just lie there and worry."
      },
      {
        "who": "C",
        "text": "That's common, and worrying keeps people awake. There's also a talking treatment designed for insomnia, which helps many people. Shall I refer you to our local service?"
      },
      {
        "who": "I",
        "text": "I'd try it, but in person, please. I'm no good with computers."
      },
      {
        "who": "C",
        "text": "Of course. What worries you most about the first fortnight?"
      },
      {
        "who": "I",
        "text": "Lying awake all night, being exhausted, and panicking."
      },
      {
        "who": "C",
        "text": "If a night goes badly, please don't take an extra tablet or go back to the old dose yourself. Get up, use the routine, and rest the next day. If you have several bad nights in a row, ring the surgery. We can always slow down."
      },
      {
        "who": "I",
        "text": "All right. That helps."
      },
      {
        "who": "C",
        "text": "Can I ask, has anything changed recently in your life that's affecting your sleep? Nineteen years is a long time."
      },
      {
        "who": "I",
        "text": "My sister moved away last spring. We used to talk every evening. The house feels very quiet now."
      },
      {
        "who": "C",
        "text": "That's a real loss, and it may be part of why the nights feel long. We'll talk more next time, and I can suggest local groups. So, this month you'll collect your tablets at the new lower dose, with printed instructions on exactly what to take."
      },
      {
        "who": "I",
        "text": "Having it written down would help."
      },
      {
        "who": "C",
        "text": "Could you tell me the plan in your own words, so I know I've explained it well?"
      },
      {
        "who": "I",
        "text": "I collect the lower dose and take it every night, no extra tablet on a bad night, I get up if I wake at three, and I come back in two weeks. And you'll refer me for the talking treatment."
      },
      {
        "who": "C",
        "text": "Exactly right. Let's book that appointment now."
      }
    ],
    "words": 733,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          3,
          4
        ],
        "how": "Asks about sleep onset, waking and mornings before mentioning the tablet."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          6
        ],
        "how": "Asks what she thinks would happen without it and hears what she was told before."
      },
      {
        "bullet": 3,
        "turns": [
          11,
          13
        ],
        "how": "Explains the fading effect on sleep onset and that the sleep is lighter than natural sleep."
      },
      {
        "bullet": 4,
        "turns": [
          13,
          15
        ],
        "how": "Explains falls, fractures, memory, confusion and drowsiness, linked to her two falls."
      },
      {
        "bullet": 5,
        "turns": [
          7
        ],
        "how": "Promises early that there is no sudden stop and no loss of prescription."
      },
      {
        "bullet": 6,
        "turns": [
          17
        ],
        "how": "Proposes a small first reduction, how long to stay on it and a two-week review."
      },
      {
        "bullet": 7,
        "turns": [
          19,
          21
        ],
        "how": "Offers a sleep routine, advice for three o'clock waking and referral for a talking treatment for insomnia."
      },
      {
        "bullet": 8,
        "turns": [
          23,
          25
        ],
        "how": "Asks her fortnight worries and agrees what to do after a bad night."
      },
      {
        "bullet": 9,
        "turns": [
          27,
          28,
          29
        ],
        "how": "Asks about recent life changes and acknowledges her sister moving away."
      },
      {
        "bullet": 10,
        "turns": [
          29,
          31,
          32
        ],
        "how": "Agrees what she collects from the pharmacy this month and checks she can repeat it."
      }
    ],
    "concern": {
      "turns": [
        6,
        7,
        8,
        18,
        19,
        25
      ],
      "how": "Her fear of being cut off is met at once with a clear promise of no sudden stop, and her fear of sleepless nights is answered with practical alternatives and a plan for bad nights, so the reduction feels safe."
    },
    "safety": [
      {
        "point": "Reduce slowly: about a tenth of the dose, held for two to four weeks, agreed with the patient",
        "turn": 7
      },
      {
        "point": "At her age the tablet increases falls and fracture risk, memory problems, confusion and daytime drowsiness.",
        "turn": 15
      },
      {
        "point": "She should not take extra tablets or return to the old dose on her own after a bad night; she should contact the surgery instead.",
        "turn": 25
      }
    ],
    "notes": "v2 (beta-g): the first step is about a tenth of the nightly dose, held for two to four weeks, agreed with the patient; review in two weeks. The card names no drug or dose. Her sister moving away is a made-up background detail for one bullet, not clinical content."
  },
  "spk-medicine-a-patient-who-wants-a-treatment-he-has-read-about": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, please sit down. I'm the doctor in clinic today. You told the nurse you've stopped your metformin. Thank you for telling us. I'd much rather know, so please don't feel bad about it."
      },
      {
        "who": "I",
        "text": "I feel a bit foolish, to be honest. I nearly didn't say anything."
      },
      {
        "who": "C",
        "text": "I'm really glad you did. Can you tell me what you read, and what appealed to you about it?"
      },
      {
        "who": "I",
        "text": "I've brought it. A clinic abroad says it can reverse diabetes, and this supplement I bought online says it reverses it naturally. I stopped the metformin three weeks ago to give it a fair chance."
      },
      {
        "who": "C",
        "text": "And what were you hoping for that your current treatment isn't giving you?"
      },
      {
        "who": "I",
        "text": "I'm fed up of just being managed. Every visit it's another tablet or another number. Nobody's ever talked about actually getting rid of it."
      },
      {
        "who": "C",
        "text": "That's a fair criticism. May I read your pages properly? Give me a moment."
      },
      {
        "who": "I",
        "text": "Go ahead."
      },
      {
        "who": "C",
        "text": "This page is the seller's own website, written to sell the product. The quotes are from customers, not studies, and no published research is listed. The clinic page names no trials either. So it's advertising, not independent evidence."
      },
      {
        "who": "I",
        "text": "But the reversing part isn't nonsense, is it? I've seen it on the news."
      },
      {
        "who": "C",
        "text": "That part is true. For many people with type 2 diabetes, losing a substantial amount of weight can put it into remission, meaning normal blood sugar without medicines. What isn't true is that this supplement does that. No pill bought online has good evidence for it."
      },
      {
        "who": "I",
        "text": "Right. So I've wasted my money."
      },
      {
        "who": "C",
        "text": "You were trying to do something positive, and that matters. Can I show you your own results from these three weeks?"
      },
      {
        "who": "I",
        "text": "Go on, then."
      },
      {
        "who": "C",
        "text": "Your blood sugar test this morning is higher than your results while you were on metformin. So the supplement hasn't replaced the tablet. Have you been thirstier, passing urine more, or more tired?"
      },
      {
        "who": "I",
        "text": "Now you mention it, I've been getting up at night for the toilet more."
      },
      {
        "who": "C",
        "text": "That fits with higher sugar. As for the supplement, the label lists plant extracts, but online products aren't checked like medicines, so the contents may not match the label. Some extracts affect blood sugar or other medicines, but honestly, for this product, nobody knows how it interacts with your tablets."
      },
      {
        "who": "I",
        "text": "That's a bit worrying."
      },
      {
        "who": "C",
        "text": "It is, so I'd stop it for now. But what you actually want, getting rid of diabetes rather than managing it, may be achievable. Structured weight-loss programmes, sometimes using meal replacements for a period, with regular support, have good evidence for remission. I can refer you to our local one today."
      },
      {
        "who": "I",
        "text": "Really? Nobody's mentioned that before."
      },
      {
        "who": "C",
        "text": "I'm sorry it hasn't come up. It takes real commitment and doesn't work for everyone, but it's genuine. Meanwhile, please restart your metformin today, as prescribed. It protects you while we work on the weight, and if you reach remission, we can review your medicines."
      },
      {
        "who": "I",
        "text": "So the tablets aren't necessarily forever?"
      },
      {
        "who": "C",
        "text": "Not necessarily. If your sugar stays in the normal range, we can look at reducing them. Does restarting today make sense to you?"
      },
      {
        "who": "I",
        "text": "Yes, it does, now you put it like that."
      },
      {
        "who": "C",
        "text": "Good. When I see you next, what would you like to have happened, in your own words? I'll write it down as the goal of that appointment."
      },
      {
        "who": "I",
        "text": "I'd like to have started the programme and lost some weight, and to feel I'm getting somewhere, not just being managed."
      },
      {
        "who": "C",
        "text": "I've written exactly that. One more thing. If you read something new, would you bring it to me before acting on it? I'm happy to look at it with you. It's good that you're reading."
      },
      {
        "who": "I",
        "text": "I can do that. I'd rather not go behind your back again."
      },
      {
        "who": "C",
        "text": "You didn't, you told us. Three questions help: who wrote it, are they selling something, and does it cite published research? And if you're very thirsty, passing lots of urine, or feel very unwell, sick or drowsy, contact us straight away or seek urgent help."
      },
      {
        "who": "I",
        "text": "Okay. Who wrote it, are they selling it, and is there any research."
      },
      {
        "who": "C",
        "text": "Exactly. So, just to check, what are you going to do from today?"
      },
      {
        "who": "I",
        "text": "Restart the metformin today, stop the supplement, wait to hear about the programme, and bring you anything I read before I try it."
      },
      {
        "who": "C",
        "text": "That's perfect. I'll make the referral this afternoon."
      }
    ],
    "words": 719,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          3
        ],
        "how": "Thanks him for disclosing that he stopped and says he would rather know."
      },
      {
        "bullet": 2,
        "turns": [
          3,
          4,
          5,
          6
        ],
        "how": "Asks what he read, what appealed and what he hoped for."
      },
      {
        "bullet": 3,
        "turns": [
          7,
          9
        ],
        "how": "Reads the pages properly and names their source as advertising without research."
      },
      {
        "bullet": 4,
        "turns": [
          10,
          11
        ],
        "how": "Confirms remission with substantial weight loss is real and the supplement claim is not."
      },
      {
        "bullet": 5,
        "turns": [
          13,
          15,
          16,
          17
        ],
        "how": "Uses his own blood sugar result and symptoms from the three weeks off treatment."
      },
      {
        "bullet": 6,
        "turns": [
          17
        ],
        "how": "Explains that the contents are unregulated and that interactions with his medicines are unknown."
      },
      {
        "bullet": 7,
        "turns": [
          19,
          21
        ],
        "how": "Offers a structured weight-loss programme with local referral as the achievable version."
      },
      {
        "bullet": 8,
        "turns": [
          21,
          23,
          24
        ],
        "how": "Agrees to restart metformin today and explains why."
      },
      {
        "bullet": 9,
        "turns": [
          25,
          26,
          27
        ],
        "how": "Asks his goal for next time in his words and writes it down."
      },
      {
        "bullet": 10,
        "turns": [
          27,
          29,
          30
        ],
        "how": "Offers to review future reading together and gives three checking questions."
      }
    ],
    "concern": {
      "turns": [
        2,
        3,
        6,
        7,
        19,
        20,
        29
      ],
      "how": "His embarrassment is eased by thanks and no blame, and his sense of being only managed is accepted as fair criticism and answered with a real route to remission."
    },
    "safety": [
      {
        "point": "Online supplements are unregulated; contents and interactions with his medicines are unknown, so he should stop it for now.",
        "turn": 19
      },
      {
        "point": "Metformin to be restarted today as prescribed.",
        "turn": 21
      },
      {
        "point": "Marked thirst, passing lots of urine, or feeling very unwell, sick or drowsy needs prompt contact or urgent help.",
        "turn": 29
      }
    ],
    "notes": "The card gives no results, so the script says only that today's blood sugar is higher than his results on metformin, with no value; a clinician should check this matches the intended case. The script restarts metformin at the prescribed dose; a clinician may prefer to rebuild the dose gradually if he had stomach side effects before."
  },
  "spk-medicine-normal-results-and-a-very-worried-patient": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, please take a seat. I'm one of the GPs here, and I have your test results. Before I start, how are you feeling?"
      },
      {
        "who": "I",
        "text": "Honestly? Anxious. I just want to know what you've found."
      },
      {
        "who": "C",
        "text": "Of course. The blood tests looked for common physical causes of headaches and tingling, such as anaemia, and were all normal. Your ECG, the heart tracing, showed a normal rhythm and no sign of strain or a past heart attack. The brain scan showed no tumour, bleeding or other abnormality."
      },
      {
        "who": "I",
        "text": "So everything's fine. Everyone says that, but I still get headaches, chest tightness, a lump in my throat, pins and needles. Something's been missed."
      },
      {
        "who": "C",
        "text": "I believe your symptoms are real. Normal tests don't mean you're imagining them. They tell us what isn't causing them, and that matters too."
      },
      {
        "who": "I",
        "text": "Thanks. People just look at me as if I'm wasting their time."
      },
      {
        "who": "C",
        "text": "You're not wasting anyone's time. Can I ask what you've been most afraid the tests would show?"
      },
      {
        "who": "I",
        "text": "My heart, mainly. The chest tightness frightens me. I keep thinking I'll just drop down one day with no warning."
      },
      {
        "who": "C",
        "text": "That's a frightening thought to live with. Why is it your heart that worries you most?"
      },
      {
        "who": "I",
        "text": "Well, my dad died of a heart attack. Suddenly."
      },
      {
        "who": "C",
        "text": "I'm so sorry. Would you tell me what happened, how old he was, and what you were told at the time?"
      },
      {
        "who": "I",
        "text": "He was thirty-four. He collapsed at work. I was only a child. They just said it was his heart. Nobody really explained anything."
      },
      {
        "who": "C",
        "text": "That must have been devastating. You're twenty-nine now. When did you last really think about him?"
      },
      {
        "who": "I",
        "text": "I don't know. Quite a lot lately, actually. I've never put it together like that."
      },
      {
        "who": "C",
        "text": "It may be worth thinking about. Can I ask about the symptoms themselves? When do they come on, what are you doing, and what makes them better or worse?"
      },
      {
        "who": "I",
        "text": "Mostly in the evenings, or lying in bed. Sometimes at work when it's busy. They ease off when I'm distracted, like playing football with my mates."
      },
      {
        "who": "C",
        "text": "That really helps. When the brain senses danger, it releases adrenaline. Muscles tighten in the chest, neck and head, causing tightness, headaches and a lump in the throat. Breathing speeds up, changing the gases in the blood, which can cause pins and needles."
      },
      {
        "who": "I",
        "text": "But they feel so physical."
      },
      {
        "who": "C",
        "text": "They are physical, real changes in your body. But the more you notice them, the more alarmed the body becomes, so it turns into a cycle."
      },
      {
        "who": "I",
        "text": "So why not just do more tests, to be sure?"
      },
      {
        "who": "C",
        "text": "I understand. But your tests are normal, and repeating them is very unlikely to find anything new. Tests carry small risks, and a harmless finding could mean more tests and more worry. And more tests haven't reassured you so far, have they?"
      },
      {
        "who": "I",
        "text": "No. I feel better for a day, then it starts again."
      },
      {
        "who": "C",
        "text": "So what would you need to see or hear to feel reassured?"
      },
      {
        "who": "I",
        "text": "I don't know. Maybe someone telling me for certain that I won't die like my dad."
      },
      {
        "who": "C",
        "text": "I can't promise that to anyone, and I won't be dishonest with you. No test can give that certainty. But your heart tests are normal, and because of your dad we'll keep checking your heart health routinely, such as blood pressure and cholesterol."
      },
      {
        "who": "I",
        "text": "That's something, I suppose. But what do I do about how I feel?"
      },
      {
        "who": "C",
        "text": "Talking therapy helps with exactly this. A therapist helps you understand the cycle of worry and symptoms and learn ways to break it. You can refer yourself to the local service online or by phone, and I'll give you the details. Meanwhile, slow breathing helps when symptoms start, and keep doing absorbing things like football."
      },
      {
        "who": "I",
        "text": "Okay. But what if I get a new symptom? Do I just ignore it?"
      },
      {
        "who": "C",
        "text": "No. For the next three months, I'll see you every four weeks, whether you have symptoms or not, so you don't need a new symptom to come back. But if something genuinely new happens, such as chest pain spreading to your arm or jaw, with sweating or breathlessness, or you collapse, call 999 straight away."
      },
      {
        "who": "I",
        "text": "That's actually reassuring, knowing the appointments are already booked."
      },
      {
        "who": "C",
        "text": "Good. Can you tell me what you're taking away from today?"
      },
      {
        "who": "I",
        "text": "My tests are normal but the symptoms are real, it might be linked to my dad, I'll refer myself for therapy, and I'll see you every four weeks. And 999 if it's something really serious."
      },
      {
        "who": "C",
        "text": "Exactly right. Let's book the first appointment before you leave."
      }
    ],
    "words": 746,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          3
        ],
        "how": "Names the blood tests, ECG and brain scan and what each has ruled out."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          19
        ],
        "how": "States that his symptoms are real and that normal tests do not mean imagining them."
      },
      {
        "bullet": 3,
        "turns": [
          7,
          8,
          9
        ],
        "how": "Asks what he feared the tests would show and lets him answer."
      },
      {
        "bullet": 4,
        "turns": [
          11,
          12,
          13,
          14
        ],
        "how": "Asks what happened to his father, his age, what he was told, and when he last thought about it."
      },
      {
        "bullet": 5,
        "turns": [
          15,
          16
        ],
        "how": "Asks about timing, activity and what makes the symptoms better or worse."
      },
      {
        "bullet": 6,
        "turns": [
          17,
          19
        ],
        "how": "Explains the adrenaline response producing each of his symptoms without labelling him."
      },
      {
        "bullet": 7,
        "turns": [
          20,
          21
        ],
        "how": "Explains that more tests are unlikely to help and can cause harm."
      },
      {
        "bullet": 8,
        "turns": [
          27
        ],
        "how": "Offers talking therapy, what it involves, self-referral and what to do meanwhile."
      },
      {
        "bullet": 9,
        "turns": [
          23,
          24,
          25
        ],
        "how": "Asks what would reassure him and admits honestly that no test can give certainty."
      },
      {
        "bullet": 10,
        "turns": [
          29
        ],
        "how": "Books four-weekly reviews for three months regardless of symptoms and gives a 999 safety net for new symptoms."
      }
    ],
    "concern": {
      "turns": [
        9,
        10,
        11,
        12,
        13,
        14
      ],
      "how": "The doctor asks why his heart worries him most, lets him describe his father's sudden death at 34, and then gently notes his own age of 29, so he makes the link himself rather than being told it is anxiety."
    },
    "safety": [
      {
        "point": "Normal ECG and brain scan described with what each rules out.",
        "turn": 3
      },
      {
        "point": "Family history of early sudden cardiac death acknowledged; routine heart-risk checks such as blood pressure and cholesterol continue.",
        "turn": 25
      },
      {
        "point": "Chest pain spreading to arm or jaw with sweating or breathlessness, or collapse, means calling 999.",
        "turn": 29
      }
    ],
    "notes": "The card says only blood tests, so the script describes them generally (with anaemia as one example) and does not list specific tests. A father dying suddenly of a heart attack at 34 is a strong family history of early heart disease; a clinician should confirm that lipid testing (possible familial hypercholesterolaemia) has been done or is planned, since the script promises ongoing cholesterol checks. The four-weekly review interval is not given on the card."
  },
  "spk-medicine-discussing-chemotherapy-that-will-not-cure": {
    "candidateLabel": "Doctor",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Good afternoon, thank you for coming in. I'm the registrar in the oncology team, and this is our nurse specialist, who'll be with us today. Before we talk about the scan, could you tell me what you already understand about it, and about what's been happening?"
      },
      {
        "who": "I",
        "text": "I know it's spread to other places. I'm not daft, I know that's bad. So please, just tell me what you would do."
      },
      {
        "who": "C",
        "text": "I will answer that, I promise. First, it helps me to know how much detail you'd like. Some people want numbers, some want the broad picture, and some only want to know what happens next. What would suit you?"
      },
      {
        "who": "I",
        "text": "Not numbers. I don't want to be told how long. The broad picture, and what happens next."
      },
      {
        "who": "C",
        "text": "Then that's what I'll give you. The scan shows the cancer has spread beyond the bowel, as you understood. The treatment we can offer cannot cure it."
      },
      {
        "who": "I",
        "text": "Right."
      },
      {
        "who": "C",
        "text": "That's a lot to hear. Take your time."
      },
      {
        "who": "I",
        "text": "I'd guessed. It's different hearing it, though. So what are the choices?"
      },
      {
        "who": "C",
        "text": "There are two. Chemotherapy can't cure the cancer, but for some people it slows it, which may give more time and ease symptoms. The cost is side effects, such as tiredness, sickness and a higher risk of infection, and regular hospital visits."
      },
      {
        "who": "I",
        "text": "And the other?"
      },
      {
        "who": "C",
        "text": "The other is best supportive care, which isn't doing nothing. It means actively controlling pain and other symptoms and keeping you as well as possible, with the palliative care team, who specialise in symptom control, and without chemotherapy's side effects."
      },
      {
        "who": "I",
        "text": "I've asked you twice now. What would you do?"
      },
      {
        "who": "C",
        "text": "That's a fair question, and I won't hide from it. If I wanted the chance of more time and could accept the side effects to get it, I would probably try chemotherapy. If staying out of hospital and feeling as well as possible day to day mattered most, I'd choose supportive care. So my honest answer depends on what matters most to you."
      },
      {
        "who": "I",
        "text": "That sounds like a bit of a dodge."
      },
      {
        "who": "C",
        "text": "I can see why it sounds like one. Let me ask it another way. Is there something in the coming months that you're hoping to be well enough for?"
      },
      {
        "who": "I",
        "text": "My granddaughter's getting married. In four months. I haven't told anyone here. I just want to be there, and not stuck in a wheelchair being sick."
      },
      {
        "who": "C",
        "text": "Thank you for telling me. That really matters, and we can plan around it either way. Chemotherapy might help control the cancer, but its side effects could affect how you feel around then, so we'd try to plan treatment and breaks to protect the wedding as far as we can."
      },
      {
        "who": "I",
        "text": "And if I start it and hate it?"
      },
      {
        "who": "C",
        "text": "Then you can stop. Starting doesn't mean you have to continue. We'd review how it's going regularly, and you can decide to stop at any point. Equally, if you choose supportive care now, you can talk to us again later, although what's possible can change if you become less well."
      },
      {
        "who": "I",
        "text": "That's good to know. What happens now, then?"
      },
      {
        "who": "C",
        "text": "Either way, I'll see you at a review appointment, and I'll refer you to the palliative care team, who help with symptoms whatever you decide. Our nurse specialist will give you a direct number, so you can ring with any questions or worries in the meantime."
      },
      {
        "who": "I",
        "text": "All right."
      },
      {
        "who": "C",
        "text": "Would you like your family with you when you make the decision?"
      },
      {
        "who": "I",
        "text": "Yes. My wife, definitely. And maybe my daughter."
      },
      {
        "who": "C",
        "text": "Then let's not decide today. Shall we book a time next week, with your wife and daughter here, so you can make the decision together?"
      },
      {
        "who": "I",
        "text": "Yes, I'd like that."
      },
      {
        "who": "C",
        "text": "Before you go, could you tell me what you'll say to your wife tonight, in your own words? It helps me check I've explained things clearly."
      },
      {
        "who": "I",
        "text": "I'll tell her it's spread and it can't be cured. There's chemo that might give me more time but has side effects, or the other care that's about keeping me comfortable. I can stop the chemo if it's too much. And I'll tell her about the wedding, I suppose."
      },
      {
        "who": "C",
        "text": "That's exactly right, and telling her about the wedding sounds like a good idea. Is there anything you'd like me to go over again?"
      },
      {
        "who": "I",
        "text": "No. I think that's enough for today."
      },
      {
        "who": "C",
        "text": "Of course. We'll see you next week with your family, and please ring the nurse specialist at any time before then."
      }
    ],
    "words": 733,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2
        ],
        "how": "Asks what he already understands about the scan before adding anything."
      },
      {
        "bullet": 2,
        "turns": [
          3,
          4,
          5
        ],
        "how": "Asks whether he wants numbers, the broad picture or next steps, and follows his choice."
      },
      {
        "bullet": 3,
        "turns": [
          5,
          7
        ],
        "how": "States once that treatment cannot cure, then pauses."
      },
      {
        "bullet": 4,
        "turns": [
          9,
          11
        ],
        "how": "Sets out chemotherapy and best supportive care side by side, with benefits and costs."
      },
      {
        "bullet": 5,
        "turns": [
          12,
          13
        ],
        "how": "Gives a personal answer to his direct question, tied to what matters to him."
      },
      {
        "bullet": 6,
        "turns": [
          15,
          16,
          17
        ],
        "how": "Asks what he hopes to be well for and gives him room to name the wedding."
      },
      {
        "bullet": 7,
        "turns": [
          18,
          19
        ],
        "how": "Explains that starting does not mean continuing and that he can stop at any point."
      },
      {
        "bullet": 8,
        "turns": [
          21
        ],
        "how": "Explains the review appointment, palliative care referral and who to telephone."
      },
      {
        "bullet": 9,
        "turns": [
          27,
          28
        ],
        "how": "Asks him to say what he will tell his wife tonight."
      },
      {
        "bullet": 10,
        "turns": [
          23,
          24,
          25
        ],
        "how": "Asks about family presence and agrees a time next week to decide."
      }
    ],
    "concern": {
      "turns": [
        15,
        16,
        17,
        29
      ],
      "how": "Instead of answering with a number, the doctor asks what he hopes to be well enough for, which lets him reveal the wedding he has told no one about; the plan is then shaped around protecting it."
    },
    "safety": [
      {
        "point": "Palliative chemotherapy cannot cure metastatic disease.",
        "turn": 5
      },
      {
        "point": "Chemotherapy side effects include tiredness, sickness and infection risk, with regular hospital visits.",
        "turn": 9
      },
      {
        "point": "Best supportive care is active symptom control with the palliative care team, not no treatment.",
        "turn": 11
      },
      {
        "point": "Options may change if he becomes less well, so deferring chemotherapy may not keep it available.",
        "turn": 19
      }
    ],
    "notes": ""
  },
  "spk-nursing-a-carer-who-will-not-use-the-hoist": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Husband",
    "turns": [
      {
        "who": "C",
        "text": "Good morning. I'm the community nurse who'll be visiting you both. Could you show me how you usually move your wife, and tell me how many times a day you do it?"
      },
      {
        "who": "I",
        "text": "Well, you saw it. Arms under hers and up she comes. Chair to bed, bed to commode, back again. Eight or nine times a day, I suppose."
      },
      {
        "who": "C",
        "text": "That's a lot of lifting. How is your own back coping?"
      },
      {
        "who": "I",
        "text": "It's never been good. It aches most evenings now, but I manage. I always have."
      },
      {
        "who": "C",
        "text": "Thank you. Can I explain what worries me about that hold? Under the arm there are nerves and the shoulder joint, with nothing protecting them. Since her stroke, her weak shoulder can't hold itself in place, so lifting by that arm can pull it out of its socket, which is called a dislocation, and damage the nerves."
      },
      {
        "who": "I",
        "text": "She's never complained."
      },
      {
        "who": "C",
        "text": "She may not be able to tell you. A damaged shoulder after a stroke can become very painful and slow her recovery. And taking her whole weight with a bent back, many times a day, is how backs give way. If yours went tomorrow, who would look after her?"
      },
      {
        "who": "I",
        "text": "Nobody. If I can't do it, she goes into a home. That's what that box in the hall means to me."
      },
      {
        "who": "C",
        "text": "That's a heavy thing to carry. What would the hoist mean to you?"
      },
      {
        "who": "I",
        "text": "It's undignified, swinging her about in a sling like a sack. It'll take three times as long. And it means admitting I can't look after my own wife."
      },
      {
        "who": "C",
        "text": "Those are all fair, so let me take them one at a time. A hoist used well is calm and steady, and you'd be beside her, talking to her. Being lifted under the arms with a sore shoulder isn't very dignified either. Have you asked her what she thinks?"
      },
      {
        "who": "I",
        "text": "Not really. I assumed."
      },
      {
        "who": "C",
        "text": "That's worth asking her together. On time, yes, it's slower while you're learning, but it gets quicker, and you won't need to rest your back afterwards."
      },
      {
        "who": "I",
        "text": "And the third? You can't fix that."
      },
      {
        "who": "C",
        "text": "No, but I see it differently. Using equipment isn't giving up caring. It's what lets you keep caring for her at home for longer."
      },
      {
        "who": "I",
        "text": "I still don't want to strap her into that thing every time."
      },
      {
        "who": "C",
        "text": "You may not need to. For the moves she can help with, standing on her good leg, say, a handling belt goes round her waist, so you hold the belt, not her arms. The hoist would only be for the moves she can't help with. It needn't be all or nothing."
      },
      {
        "who": "I",
        "text": "A belt sounds better. But I wouldn't know how to use either."
      },
      {
        "who": "C",
        "text": "Nobody should have to learn from a leaflet. I'd like someone from the therapy team to come and show you properly, when your daughter can be here too. Would that suit?"
      },
      {
        "who": "I",
        "text": "She's here on Saturdays. Could they come then?"
      },
      {
        "who": "C",
        "text": "I'll ask for a Saturday, though I can't promise yet. I should also be honest: I have to record what I saw today and that the hoist isn't in use, and pass that to the therapy team so they can plan."
      },
      {
        "who": "I",
        "text": "So I'm being reported, then."
      },
      {
        "who": "C",
        "text": "It isn't about blame. Anyone caring for her needs the same picture, so the right help arrives. I'd rather tell you now than have you find out later."
      },
      {
        "who": "I",
        "text": "Fair enough. I'd rather know."
      },
      {
        "who": "C",
        "text": "So, before my next visit, I'll contact the therapy team today and ring you with a date. Meanwhile, would you be willing to stop lifting her under the arms?"
      },
      {
        "who": "I",
        "text": "And do what instead? She still needs the commode."
      },
      {
        "who": "C",
        "text": "Good question. Please don't lift her yourself until the therapist has shown you how. If she needs moving before then, call for help: ring us and I'll ask the team to come as soon as possible. And if your back gets worse, see your own doctor."
      },
      {
        "who": "I",
        "text": "All right. I won't lift her myself until the therapist has shown me, and I'll ring for help if she needs moving."
      },
      {
        "who": "C",
        "text": "Thank you. Just to check I've been clear, could you tell me why that hold is risky, and what we've agreed?"
      },
      {
        "who": "I",
        "text": "It can pull her weak shoulder out and hurt the nerves, and it's wrecking my back. You're arranging a belt and someone to show us, hopefully on a Saturday with my daughter. The hoist only when she can't help."
      },
      {
        "who": "C",
        "text": "Exactly. Next visit, let's ask her together what she'd prefer. I'll ring you with a date."
      }
    ],
    "words": 741,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2,
          3,
          4
        ],
        "how": "Asks him to describe how and how often he moves her, then invites him to describe his back before commenting."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          7
        ],
        "how": "Explains in plain words the unprotected nerves and shoulder joint and the risk of dislocating a weak shoulder."
      },
      {
        "bullet": 3,
        "turns": [
          7
        ],
        "how": "Links repeated lifting to his back failing and asks who would care for her if it did."
      },
      {
        "bullet": 4,
        "turns": [
          9,
          10,
          11,
          13,
          15
        ],
        "how": "Asks what the hoist means to him, then answers dignity, time and his sense of himself one by one."
      },
      {
        "bullet": 5,
        "turns": [
          17
        ],
        "how": "Offers a handling belt for transfers she can help with and the hoist only for those she cannot."
      },
      {
        "bullet": 6,
        "turns": [
          19,
          21
        ],
        "how": "Offers a proper demonstration by the therapy team when his daughter can attend."
      },
      {
        "bullet": 7,
        "turns": [
          21,
          23
        ],
        "how": "States what will be recorded and passed on, and why, so it is not a surprise."
      },
      {
        "bullet": 8,
        "turns": [
          25,
          27,
          29,
          30,
          31
        ],
        "how": "Agrees what she will arrange, what he will stop doing meanwhile, and checks his understanding."
      }
    ],
    "concern": {
      "turns": [
        8,
        9,
        10,
        11,
        13,
        15
      ],
      "how": "His fear that the hoist means losing her to a home is drawn out with an open question; each worry (dignity, time, failing as a husband) is acknowledged and answered separately, reframing equipment as what keeps her at home."
    },
    "safety": [
      {
        "point": "Do not lift her yourself until the therapist has shown you; call for help if she needs moving",
        "turn": 5
      },
      {
        "point": "Repeated full-weight lifting puts his own back at serious risk.",
        "turn": 7
      },
      {
        "point": "If she cannot take her own weight he should not lift her but ring for help.",
        "turn": 27
      },
      {
        "point": "He should see his own doctor if his back suddenly worsens.",
        "turn": 27
      }
    ],
    "notes": "Interim advice (turn 27) that a supported stand using her good arm on the chair is safer than the underarm lift should be checked against local moving-and-handling policy; ideally a therapist assesses before any interim method is suggested. The card does not say who delivers the demonstration, so the script says 'the therapy team'. [v2: beta-g's clinical fix applied.]"
  },
  "spk-nursing-a-young-woman-going-home-with-a-new-stoma": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm the nurse looking after you today. I'm checking you're ready for tomorrow, without repeating the stoma nurse's teaching. How did your last three bag changes go?"
      },
      {
        "who": "I",
        "text": "Fine. I did the last one completely on my own."
      },
      {
        "who": "C",
        "text": "That's really good. And how does the skin around the stoma look?"
      },
      {
        "who": "I",
        "text": "The stoma nurse said it looks healthy."
      },
      {
        "who": "C",
        "text": "Good. Let's cover what most often brings people back in. With an ileostomy you lose more fluid, so you can get dehydrated, or dried out, quickly. Drink regularly through the day, and more in hot weather. Warning signs are strong thirst, dark urine or passing less, dizziness, headaches or cramps."
      },
      {
        "who": "I",
        "text": "How much is enough?"
      },
      {
        "who": "C",
        "text": "The amount the stoma nurse set for you is on your discharge sheet. Also watch for high output: very watery output, and emptying the bag much more often than usual. If that happens, ring the stoma nurse or the ward that day."
      },
      {
        "who": "I",
        "text": "And foods that block?"
      },
      {
        "who": "C",
        "text": "Yes. Nuts, sweetcorn, mushrooms, dried fruit and fruit skins can block the stoma, so chew well and go slowly. If nothing comes out for several hours and you have cramping pain, swelling or vomiting, that's urgent: ring the ward or go to A and E."
      },
      {
        "who": "I",
        "text": "What about my tablets?"
      },
      {
        "who": "C",
        "text": "Food passes through you faster now, so slow-release or specially coated tablets may come out before they're absorbed. If you see one whole in the bag, tell us. Check anything new, even from a chemist, with a pharmacist. And if you ever take the contraceptive pill, ask your GP, as it may work less well."
      },
      {
        "who": "I",
        "text": "Not at the moment. And supplies?"
      },
      {
        "who": "C",
        "text": "You're going home with a supply, and the delivery company's details are in your pack. Reorder by phone or online, well before you run low. The stoma nurse will visit you at home soon after discharge, and the date is on your letter."
      },
      {
        "who": "I",
        "text": "That's all fine."
      },
      {
        "who": "C",
        "text": "You've got the practical side sorted. How are you finding it all? Not the bag. You."
      },
      {
        "who": "I",
        "text": "I don't know. I just do it and try not to think."
      },
      {
        "who": "C",
        "text": "Take your time. There's no rush."
      },
      {
        "who": "I",
        "text": "I haven't looked at it in a mirror. Everyone says I'm doing so well, and I'm not, really."
      },
      {
        "who": "C",
        "text": "Thank you for telling me. That's very common after emergency surgery; your body changed overnight. Looking when you're ready is fine. What are you most worried about in the first fortnight at home?"
      },
      {
        "who": "I",
        "text": "Leaking, in a shop or at work. And the noise. I'd die if it happened in a meeting."
      },
      {
        "who": "C",
        "text": "Let's be specific. Leaks are less likely if the bag fits well and is emptied before it's too full. Many people keep a spare kit, with a pouch, wipes and spare underwear, in the car or at work, and that removes most of the fear. If it happened at work, you'd go to the toilet, change, and carry on."
      },
      {
        "who": "I",
        "text": "And the noise?"
      },
      {
        "who": "C",
        "text": "Noises do happen, and they sound louder to you than to others. Regular meals, eaten slowly, can help. Most people just think it's a stomach rumbling."
      },
      {
        "who": "I",
        "text": "Nobody at work knows, or my friends. And my partner, I don't know what he'll think."
      },
      {
        "who": "C",
        "text": "You don't have to tell everyone. Your employer only needs enough to support you, perhaps that you've had bowel surgery and may need quick access to a toilet. Friends can wait. Who would you most like to tell?"
      },
      {
        "who": "I",
        "text": "My partner. He visits, but I won't let him see it."
      },
      {
        "who": "C",
        "text": "That's understandable. Some people explain it first, before showing anything. He may be worried about hurting you. The stoma nurse could talk with you both. Would that help?"
      },
      {
        "who": "I",
        "text": "Yes, I'd like that."
      },
      {
        "who": "C",
        "text": "There's also a patient association for people with stomas, and a local group. Rather than give you a leaflet, could I ring the group today and ask someone to contact you?"
      },
      {
        "who": "I",
        "text": "Yes, please. I'd never ring them myself."
      },
      {
        "who": "C",
        "text": "I'll do that this afternoon. So, which signs mean you should ring us?"
      },
      {
        "who": "I",
        "text": "If I'm very thirsty, dizzy or my wee's dark, or there's much more watery output, I ring the stoma nurse or the ward. If nothing's coming out and I've got pain or I'm being sick, I get urgent help."
      },
      {
        "who": "C",
        "text": "Exactly. Keep a spare kit with you, check new tablets with a pharmacist, and I'll arrange the group and a joint talk with the stoma nurse and your partner. Anything else on your mind?"
      },
      {
        "who": "I",
        "text": "No. I feel a bit better about it now."
      }
    ],
    "words": 734,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2,
          3,
          4
        ],
        "how": "Briefly checks recent changes, an independent change and skin condition without re-teaching."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          6,
          7,
          9
        ],
        "how": "Covers fluids, dehydration signs, high output and when to ring, and foods that can block the stoma."
      },
      {
        "bullet": 3,
        "turns": [
          11
        ],
        "how": "Explains that slow-release and coated tablets may not be absorbed and to check new medicines with a pharmacist."
      },
      {
        "bullet": 4,
        "turns": [
          13
        ],
        "how": "Explains her supplies, how to reorder and the home visit by the stoma nurse."
      },
      {
        "bullet": 5,
        "turns": [
          15,
          16,
          17,
          18
        ],
        "how": "Asks how she is finding it and gives her time rather than filling the silence."
      },
      {
        "bullet": 6,
        "turns": [
          19,
          20,
          21,
          22,
          23
        ],
        "how": "Asks her main fear for the first fortnight and answers leaks, noise and a leak at work specifically."
      },
      {
        "bullet": 7,
        "turns": [
          24,
          25,
          26,
          27
        ],
        "how": "Discusses who needs to know, what to say to her employer, and how she might approach her partner."
      },
      {
        "bullet": 8,
        "turns": [
          13,
          21,
          27,
          29,
          30,
          33
        ],
        "how": "Names the stoma nurse, patient association and local group, offers to make first contact, and mentions a spare kit."
      }
    ],
    "concern": {
      "turns": [
        15,
        17,
        18,
        19,
        20,
        21,
        23,
        25,
        27
      ],
      "how": "An open question about her, not the bag, plus silence, lets her admit she has not looked at the stoma; her fears of leaks in public and of her partner's reaction are each met with specific, practical answers and an offer of a joint talk."
    },
    "safety": [
      {
        "point": "Signs of dehydration with an ileostomy: strong thirst, dark or reduced urine, dizziness, headaches, cramps.",
        "turn": 5
      },
      {
        "point": "High, watery output needs a same-day call to the stoma nurse or ward.",
        "turn": 7
      },
      {
        "point": "No output for several hours with cramping pain, swelling or vomiting needs urgent help.",
        "turn": 9
      },
      {
        "point": "Slow-release and coated tablets may not be absorbed; check new medicines with a pharmacist.",
        "turn": 11
      },
      {
        "point": "Oral contraception may be less reliable with an ileostomy; ask the GP.",
        "turn": 11
      }
    ],
    "notes": "Turn 11 says the contraceptive pill may work less well with an ileostomy; please confirm this is the advice you want given. No fluid volume or exact visit date is given because the card does not provide them; the script refers her to her discharge sheet and letter."
  },
  "spk-nursing-a-night-shift-worker-who-cannot-attend-the-diabetes-course": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm the practice nurse. This is your three-month diabetes review. First, could you tell me what happened with the two education course appointments?"
      },
      {
        "who": "I",
        "text": "Look, I know what you're going to say. I didn't turn up. I'm the patient who doesn't care."
      },
      {
        "who": "C",
        "text": "I'm not here to tell you off. I'd just like to understand. What got in the way?"
      },
      {
        "who": "I",
        "text": "They were both at ten in the morning. I work nights. I finish at six, get home, and I'm asleep by eight. Ten o'clock is the middle of my night."
      },
      {
        "who": "C",
        "text": "That makes complete sense, and I'm sorry they were booked like that. What does your working week actually look like?"
      },
      {
        "who": "I",
        "text": "Four nights on, usually Monday to Thursday. Weekends I try to be normal for the family."
      },
      {
        "who": "C",
        "text": "Can I explain briefly what the course covers, so you can judge whether it's worth it? Food, activity, how diabetes affects the body, and caring for your feet and eyes. People who go usually manage their sugar better than with leaflets alone, because they can ask questions about their own life."
      },
      {
        "who": "I",
        "text": "Maybe. But I'm not giving up my sleep to sit in a classroom."
      },
      {
        "who": "C",
        "text": "You shouldn't have to. Options may include an evening or weekend group, a shorter online course, or a one-to-one at the end of a shift. I'll check which actually run locally before I promise anything."
      },
      {
        "who": "I",
        "text": "Online would be easiest. Or seeing someone straight after a shift, before I crash."
      },
      {
        "who": "C",
        "text": "That's helpful. What time of day would genuinely work, so I can book that rather than the next free slot?"
      },
      {
        "who": "I",
        "text": "Friday morning, about half six, after my last shift. I'm not going back in that night."
      },
      {
        "who": "C",
        "text": "Then I'll book a Friday morning or the online version, whichever exists. Meanwhile, the course starts with food, so let's talk about that. When do you eat your main meal at work?"
      },
      {
        "who": "I",
        "text": "Around three in the morning. There's a vending machine, and a van outside that does chips and burgers. That's about it."
      },
      {
        "who": "C",
        "text": "That's hard. Is there anything you could bring in from home?"
      },
      {
        "who": "I",
        "text": "There's a fridge and a microwave in the break room. My wife cooks in the evening, so I suppose I could take some of that."
      },
      {
        "who": "C",
        "text": "That would be a great start. Could we choose two or three small changes for this week? What feels realistic to you?"
      },
      {
        "who": "I",
        "text": "Taking dinner in, instead of the van. And maybe water instead of the fizzy drinks from the machine."
      },
      {
        "who": "C",
        "text": "Those are both excellent. Would you add a third, perhaps a short walk when you wake, before your shift?"
      },
      {
        "who": "I",
        "text": "I could walk the dog. My wife always says I never do."
      },
      {
        "who": "C",
        "text": "Perfect. Now, about contact. I've noticed you haven't replied to our letters. How would you rather we got in touch?"
      },
      {
        "who": "I",
        "text": "Honestly, I stopped opening them. Every one felt like a telling-off. A text is better, in the evening, when I'm up."
      },
      {
        "who": "C",
        "text": "I'll record that now: texts, in the evening, no morning calls. I'm sorry the letters felt that way. Can I ask whether anyone has explained your last blood test result?"
      },
      {
        "who": "I",
        "text": "Not really. Someone said it was a bit high."
      },
      {
        "who": "C",
        "text": "It's called HbA1c. It shows your average sugar level over the past two or three months, not just today. Your result is printed here, and this is our target. Could you read me both numbers and tell me what they mean?"
      },
      {
        "who": "I",
        "text": "That one's mine, and that one's where I should be. So I'm above where I should be."
      },
      {
        "who": "C",
        "text": "That's right. Your changes should help bring it down, and we'll recheck it at your next review. You've had three months with this and no real conversation about it. Is anything worrying you?"
      },
      {
        "who": "I",
        "text": "My dad had diabetes. He lost a toe in the end. I've been waiting for that to happen to me."
      },
      {
        "who": "C",
        "text": "That must have been frightening, and I'm glad you told me. Problems like that are much less likely when sugar is controlled and feet are checked regularly, which starts today. If you notice a cut or sore that isn't healing, please come in promptly."
      },
      {
        "who": "I",
        "text": "That's a relief, actually. Nobody said that before."
      },
      {
        "who": "C",
        "text": "So, to sum up, can you tell me what we've agreed?"
      },
      {
        "who": "I",
        "text": "Dinner from home, water instead of fizzy drinks, and walking the dog. You'll text me about the course, ideally a Friday morning or online. And I'm trying to get my number down to the target."
      },
      {
        "who": "C",
        "text": "Exactly. I'll text you this week with the details. Does that plan feel manageable?"
      },
      {
        "who": "I",
        "text": "It does. Thanks for not lecturing me."
      }
    ],
    "words": 744,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "how": "Asks what happened rather than accusing, and explores his working week."
      },
      {
        "bullet": 2,
        "turns": [
          7
        ],
        "how": "Briefly explains the course content and why it helps more than a leaflet."
      },
      {
        "bullet": 3,
        "turns": [
          9
        ],
        "how": "Offers evening, weekend, online and one-to-one options, honestly checking what exists locally."
      },
      {
        "bullet": 4,
        "turns": [
          11,
          12,
          13
        ],
        "how": "Asks what time genuinely suits him and agrees to book that."
      },
      {
        "bullet": 5,
        "turns": [
          13,
          14,
          15,
          16
        ],
        "how": "Explores the three a.m. meal, what is available at work and what he could bring from home."
      },
      {
        "bullet": 6,
        "turns": [
          17,
          18,
          19,
          20
        ],
        "how": "Agrees three specific changes for this week, chosen with him."
      },
      {
        "bullet": 7,
        "turns": [
          21,
          22,
          23
        ],
        "how": "Asks his preferred contact method and records it."
      },
      {
        "bullet": 8,
        "turns": [
          23,
          24,
          25,
          26
        ],
        "how": "Explains HbA1c in plain words and asks him to read his result and target back."
      },
      {
        "bullet": 9,
        "turns": [
          27,
          28,
          29
        ],
        "how": "Asks if anything about the diagnosis worries him and addresses his fear of foot problems."
      }
    ],
    "concern": {
      "turns": [
        2,
        3,
        21,
        22,
        23
      ],
      "how": "His belief that he has been labelled as not caring is met with no blame and an apology for the timing; the unopened letters are discussed openly and replaced with his preferred contact method."
    },
    "safety": [
      {
        "point": "HbA1c reflects average blood sugar over the past two or three months.",
        "turn": 25
      },
      {
        "point": "A cut or sore on the foot that is not healing should be seen promptly.",
        "turn": 29
      }
    ],
    "notes": "The card asks him to say the number back, but gives no HbA1c value or target, so the script has him read both from the printout without stating figures. A real answer should use his actual result and individual target."
  },
  "spk-nursing-a-woman-who-has-cut-off-her-compression-bandage": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Good morning, I'm the clinic nurse seeing you today. I can see you've brought the bandage with you. Can you tell me what happened?"
      },
      {
        "who": "I",
        "text": "I cut it off two nights ago. I'm sorry. I know I've probably ruined everything, but I couldn't stand it any longer."
      },
      {
        "who": "C",
        "text": "There's no need to apologise. I'd really like to understand the pain. What was it like, and where did you feel it?"
      },
      {
        "who": "I",
        "text": "A throbbing, tight ache round my ankle and over the ulcer. It started soon after it went on, and two nights ago I couldn't sleep at all."
      },
      {
        "who": "C",
        "text": "Was it there when you were resting, or mainly when you were walking about?"
      },
      {
        "who": "I",
        "text": "Mostly at night in bed, to be honest. During the day it was bearable."
      },
      {
        "who": "C",
        "text": "That's important. Did you have pain in your foot or toes at night? Were your toes cold, numb or a different colour? And did hanging your leg out of bed ease it?"
      },
      {
        "who": "I",
        "text": "No. My toes were fine. It was the ankle, under the bandage. Hanging it down didn't help; propping it up was better."
      },
      {
        "who": "C",
        "text": "That helps. Let me look, and I'll tell you what I see. The ankle swelling has come back a little since the bandage came off. There are no marks where it dug in. Your toes are warm and pink, and when I press a nail, the colour returns quickly."
      },
      {
        "who": "I",
        "text": "So I haven't made it worse?"
      },
      {
        "who": "C",
        "text": "The ulcer looks much as it did. But before we reapply anything, I'd like to repeat the circulation check, comparing the blood pressure at your ankle and arm, to be sure a bandage is safe."
      },
      {
        "who": "I",
        "text": "But why so tight? Surely squeezing it is bad?"
      },
      {
        "who": "C",
        "text": "Fair question. The valves in your leg veins aren't working well, so blood pools and pushes fluid into the skin, which stops the ulcer healing. The bandage squeezes evenly to help the blood flow back up. So the bandage is the treatment; the dressing just protects the wound."
      },
      {
        "who": "I",
        "text": "Nobody explained it like that. They just wrapped it and sent me home."
      },
      {
        "who": "C",
        "text": "Then I'm sorry, because you should have been told. The first two or three nights are often uncomfortable while the swelling goes down, and that settles. An ache or tightness can be normal. Pain that gets worse, numbness, tingling or toes changing colour is not, and needs checking."
      },
      {
        "who": "I",
        "text": "I thought it was making the leg worse. I felt such a fool, cutting it off with the kitchen scissors."
      },
      {
        "who": "C",
        "text": "You weren't a fool. Nobody had warned you, and taking it off was the right thing to do. Now we need a better plan."
      },
      {
        "who": "I",
        "text": "So you want to put it back on?"
      },
      {
        "who": "C",
        "text": "If the check is fine, yes, but differently: a lighter bandage to start with, your usual painkillers as prescribed a little before bed, and your leg raised whenever you sit."
      },
      {
        "who": "I",
        "text": "And if it hurts like that again?"
      },
      {
        "who": "C",
        "text": "Then ring this number instead of reaching for the scissors; the card says who to ring at night. For an ache like before, ring and we'll see you soon. But if your toes go cold, numb, blue or white, or the pain is suddenly severe, take it off and ring straight away."
      },
      {
        "who": "I",
        "text": "That seems fair. Will you write that down? I won't remember it all."
      },
      {
        "who": "C",
        "text": "Of course: what's normal, what isn't, what to do, and the number. Two practical things. Will the bandage fit inside your shoe?"
      },
      {
        "who": "I",
        "text": "Not my usual one. Last time I wore my slippers to the shops."
      },
      {
        "who": "C",
        "text": "A bigger shoe or a wide adjustable one often works, and I can tell you where to find one. How did you manage washing?"
      },
      {
        "who": "I",
        "text": "Badly. I was trying to keep it dry with a carrier bag."
      },
      {
        "who": "C",
        "text": "There are waterproof covers made for that, which are much safer than a bag, and I'll show you one. If the bandage slips or feels loose, is there anyone who could help you?"
      },
      {
        "who": "I",
        "text": "My neighbour pops in most days. She's very good."
      },
      {
        "who": "C",
        "text": "That's good to know, but please don't rewrap it yourselves; ring us and we'll redo it. So, can you tell me what you'll do tonight, and if the pain comes back?"
      },
      {
        "who": "I",
        "text": "Painkillers before bed and my leg up. If it aches, I ring you instead of cutting it. If my toes go cold or numb or change colour, I take it off and ring straight away."
      },
      {
        "who": "C",
        "text": "That's exactly right. Let's do the circulation check now, and then put the lighter bandage on together."
      },
      {
        "who": "I",
        "text": "Thank you. I feel much better about trying again."
      }
    ],
    "words": 744,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          3,
          4,
          5,
          6
        ],
        "how": "Asks the nature, site, onset and timing of the pain and takes her answers seriously."
      },
      {
        "bullet": 2,
        "turns": [
          7,
          8
        ],
        "how": "Asks specifically about night foot pain, cold, numbness, toe colour change and relief on hanging the leg down."
      },
      {
        "bullet": 3,
        "turns": [
          9,
          11
        ],
        "how": "Examines the leg aloud, describing each finding, and plans a repeat circulation check before reapplying."
      },
      {
        "bullet": 4,
        "turns": [
          13
        ],
        "how": "Explains in plain words that compression is the treatment and the dressing only protects."
      },
      {
        "bullet": 5,
        "turns": [
          15
        ],
        "how": "Says what she should have been told: early nights are uncomfortable, it settles, and what pain is not normal."
      },
      {
        "bullet": 6,
        "turns": [
          17
        ],
        "how": "States plainly that she was right to remove it."
      },
      {
        "bullet": 7,
        "turns": [
          19,
          21
        ],
        "how": "Agrees a lighter system, painkiller timing, elevation and a number to ring instead of scissors."
      },
      {
        "bullet": 8,
        "turns": [
          21,
          22,
          23,
          29,
          30
        ],
        "how": "Agrees what to do if the pain recurs, writes it down, and checks her understanding."
      },
      {
        "bullet": 9,
        "turns": [
          23,
          24,
          25,
          26,
          27,
          28
        ],
        "how": "Checks footwear, washing and who could help if it slips."
      }
    ],
    "concern": {
      "turns": [
        2,
        3,
        10,
        11,
        14,
        15,
        16,
        17
      ],
      "how": "Her embarrassment and fear of having undone the treatment are met with no blame, honest findings, an apology for the missing warning, and a clear statement that removing it was right."
    },
    "safety": [
      {
        "point": "Night pain in the foot, cold or numb toes, colour change, or pain relieved by hanging the leg down need checking before compression.",
        "turn": 7
      },
      {
        "point": "The circulation check is repeated before compression is reapplied.",
        "turn": 11
      },
      {
        "point": "Worsening pain, numbness, tingling or toe colour change are not normal under compression.",
        "turn": 15
      },
      {
        "point": "If toes go cold, numb, blue or white or pain is suddenly severe, remove the bandage and ring straight away.",
        "turn": 21
      },
      {
        "point": "A slipped bandage should be redone by the clinic, not rewrapped at home.",
        "turn": 29
      }
    ],
    "notes": "Examination findings (turn 9) are invented for the role-play as reassuring; the card gives none. Repeating the ankle-arm pressure check before reapplying is my addition, consistent with the guidance not to restart on reassurance alone; please confirm it matches clinic practice."
  },
  "spk-nursing-explaining-a-delayed-discharge": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm the nurse looking after you today. I need to tell you straight away that you won't be going home this morning. There are two reasons: your medicines haven't come up from the pharmacy yet, and the transport booked for this morning has gone."
      },
      {
        "who": "I",
        "text": "Not this morning? I've been sitting here dressed since eight o'clock. My daughter's taken the day off work. She's waiting at the house."
      },
      {
        "who": "C",
        "text": "I know, and I'm really sorry. Can I explain exactly what's missing? The doctor started some new tablets while you were here, and those haven't arrived. The prescription is with the pharmacy now, waiting to be checked by a pharmacist and made up."
      },
      {
        "who": "I",
        "text": "Can't my daughter just pick them up from the chemist later?"
      },
      {
        "who": "C",
        "text": "I understand why that seems easier, but they need to come with you. Your local chemist might not have them in straight away, and you shouldn't have a gap. The pharmacist also checks that everything works safely together and gives you written instructions."
      },
      {
        "who": "I",
        "text": "And the ambulance?"
      },
      {
        "who": "C",
        "text": "The transport had a morning slot, but it couldn't wait because your tablets weren't ready, so that slot has gone. Honestly, the earliest realistic time now is late afternoon."
      },
      {
        "who": "I",
        "text": "Late afternoon. That's the whole day gone."
      },
      {
        "who": "C",
        "text": "It is, and I'm sorry for what this has cost you and your daughter. You were told it would be today, you got ready, and she rearranged her work. That isn't fair on either of you."
      },
      {
        "who": "I",
        "text": "I'll be honest with you. I think it's all about the bed. You've had me sat on the edge of it since eight so someone else can have it."
      },
      {
        "who": "C",
        "text": "I can see why it might look like that, but that isn't what's happening. This bed is yours until you leave, and nobody will move you off it. The only reasons you're still here are the medicines and the transport. Nothing else."
      },
      {
        "who": "I",
        "text": "Well, it feels like nobody's in charge."
      },
      {
        "who": "C",
        "text": "Then let me tell you exactly what I'll do now. I'll ring the pharmacy myself to chase your tablets, and I'll ask transport whether an earlier slot has come free. I'll come back to you by two o'clock with a time, even if the news hasn't changed."
      },
      {
        "who": "I",
        "text": "Two o'clock. Do you promise?"
      },
      {
        "who": "C",
        "text": "I promise I'll be back by two with an update. I can't promise when you'll leave until I've heard from them, and I don't want to give you a time I can't keep."
      },
      {
        "who": "I",
        "text": "And what about my daughter? She'll be beside herself."
      },
      {
        "who": "C",
        "text": "Would you like me to ring her and explain, so you don't have to? Or would you rather speak to her yourself? I can bring the phone over."
      },
      {
        "who": "I",
        "text": "Could you ring her? She'll ask questions I can't answer."
      },
      {
        "who": "C",
        "text": "Of course. I'll ring her straight after the pharmacy. Now, about today. You've been on the edge of that bed for hours. Shall I help you into the armchair? Lunch will be round soon. Would you like a drink now?"
      },
      {
        "who": "I",
        "text": "A cup of tea would be lovely. But I've packed all my tablets away, and some are due at one."
      },
      {
        "who": "C",
        "text": "Don't worry. We'll give you your one o'clock tablets from the ward as usual, so you won't miss them. Is there anything else you need before you go home?"
      },
      {
        "who": "I",
        "text": "Just to get home, really."
      },
      {
        "who": "C",
        "text": "While we wait, can I check what you know about your medicines? Can you tell me what the doctor explained about the new ones?"
      },
      {
        "who": "I",
        "text": "The doctor did explain, but honestly, I can't remember which is which."
      },
      {
        "who": "C",
        "text": "That's all right. When they arrive, I'll go through each one with you, what it's for and when to take it, and you'll have it written down. Do you know who's visiting you at home tomorrow?"
      },
      {
        "who": "I",
        "text": "My daughter said something about somebody coming. I'm not sure who, or when."
      },
      {
        "who": "C",
        "text": "I'll check your discharge plan and write down who's coming and roughly when, along with the ward's phone number. If anything is wrong tonight, ring the ward any time. And if you feel seriously unwell, call 999."
      },
      {
        "who": "I",
        "text": "All right. That makes me feel safer."
      },
      {
        "who": "C",
        "text": "So, just to check we're agreed, can you tell me what happens next?"
      },
      {
        "who": "I",
        "text": "You're chasing the tablets and the transport, you'll ring my daughter, and you'll be back by two with a time. I'll have lunch in the chair, and you'll give me my one o'clock tablets."
      },
      {
        "who": "C",
        "text": "Exactly right. Before you leave, we'll go through your medicines and phone numbers together. I'll get you that tea now."
      }
    ],
    "words": 740,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1
        ],
        "how": "States at once that she will not leave this morning and gives the two actual reasons."
      },
      {
        "bullet": 2,
        "turns": [
          3,
          4,
          5
        ],
        "how": "Explains the new tablets are missing, why they must come with her, and that the request is with the pharmacy."
      },
      {
        "bullet": 3,
        "turns": [
          7
        ],
        "how": "Explains the morning transport slot has gone and late afternoon is the realistic window."
      },
      {
        "bullet": 4,
        "turns": [
          9
        ],
        "how": "Apologises for the cost to her and her daughter without blaming ward pressure."
      },
      {
        "bullet": 5,
        "turns": [
          10,
          11
        ],
        "how": "Corrects her belief about the bed directly and calmly."
      },
      {
        "bullet": 6,
        "turns": [
          13,
          15
        ],
        "how": "Commits to chasing pharmacy and transport and returning by two o'clock, without promising a leaving time."
      },
      {
        "bullet": 7,
        "turns": [
          17,
          18,
          19
        ],
        "how": "Offers to phone her daughter or let her do it herself."
      },
      {
        "bullet": 8,
        "turns": [
          19,
          20,
          21
        ],
        "how": "Arranges lunch, a drink, the armchair and her one o'clock tablets."
      },
      {
        "bullet": 9,
        "turns": [
          21,
          23,
          25,
          27,
          29
        ],
        "how": "Asks what else she needs, checks medicine understanding and tomorrow's visit, and gives the ward number and who to ring tonight."
      }
    ],
    "concern": {
      "turns": [
        2,
        9,
        10,
        11,
        16,
        17
      ],
      "how": "Her daughter's wasted day is acknowledged with a specific apology and an offer to phone her; her belief about the bed is corrected plainly with the real reasons."
    },
    "safety": [
      {
        "point": "New medicines must go home with her to avoid a gap and come with pharmacist-checked instructions.",
        "turn": 5
      },
      {
        "point": "Her one o'clock doses are given from ward stock so none are missed.",
        "turn": 21
      },
      {
        "point": "She can ring the ward any time tonight, and should call 999 if seriously unwell.",
        "turn": 27
      }
    ],
    "notes": "The card's concern (kept in because the ward wants the bed for something else) is ambiguous; the script reads it as her believing the delay is about bed management and corrects that. The two o'clock return time is chosen by the nurse as 'a stated hour'; the card names no medicines or visitor, so these stay general."
  },
  "spk-nursing-a-patient-who-wants-to-leave-against-advice-after-chest-pain": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm the nurse who admitted you earlier. I can see you're dressed and ready to go. Could you tell me what's making you want to leave tonight?"
      },
      {
        "who": "I",
        "text": "I'm fine now. The pain's gone. I've got a job starting at seven tomorrow, and if I'm not there, the client will find someone else."
      },
      {
        "who": "C",
        "text": "That sounds like a real worry. What have you arranged for tomorrow?"
      },
      {
        "who": "I",
        "text": "Just me and a lad who works for me. He can't run the site alone. Honestly, I feel daft. It was probably indigestion. I made a fuss over nothing."
      },
      {
        "who": "C",
        "text": "You didn't make a fuss. Chest pain is exactly what we want people to come in with. What was the pain like, and what were you doing when it started?"
      },
      {
        "who": "I",
        "text": "Carrying plasterboard upstairs. A tight, heavy feeling across my chest, and I got sweaty. It eased after your tablets. Indigestion does that to me."
      },
      {
        "who": "C",
        "text": "Thank you. A tight, heavy pain during effort, with sweating, is something we take seriously, even when it settles. Can I explain where the tests are?"
      },
      {
        "who": "I",
        "text": "Go on, but I thought the blood test was fine."
      },
      {
        "who": "C",
        "text": "Your first result hasn't shown a problem. But this test looks for a substance that leaks from heart muscle if it's damaged, and it can take hours to rise. So one result rules nothing out. The second test, at one o'clock, tells us whether your heart muscle has been affected."
      },
      {
        "who": "I",
        "text": "So do the second one now and let me go."
      },
      {
        "who": "C",
        "text": "It has to be taken at the right time to mean anything. Also, your ECG, the tracing of your heart's electrical activity, has shown a change. It may be nothing serious, but we can't ignore it."
      },
      {
        "who": "I",
        "text": "A change? Nobody said. Am I having a heart attack?"
      },
      {
        "who": "C",
        "text": "I can't tell you that yet, and I won't guess. But with the kind of pain you had, we need the second test before anyone can say you're safe to go."
      },
      {
        "who": "I",
        "text": "And if I just go home and take it easy?"
      },
      {
        "who": "C",
        "text": "Honestly, if you went home and that test would have shown damage, you'd be without treatment while your heart might be unsettled. The pain could return, sometimes worse, with nobody there to help quickly. I'm not saying that will happen, only that we wouldn't know."
      },
      {
        "who": "I",
        "text": "Not great to hear. But if I lose this client, I lose next month's money."
      },
      {
        "who": "C",
        "text": "That's a real problem, not just an inconvenience. Is there someone you could phone tonight, your colleague or the client?"
      },
      {
        "who": "I",
        "text": "I could ring the lad, he's up late. And text the client that I'll call her first thing."
      },
      {
        "who": "C",
        "text": "Good. Could any of the work move later in the week, so tomorrow morning doesn't have to be you?"
      },
      {
        "who": "I",
        "text": "The lad could do the clearing out tomorrow. I'd want to be there for the main work later on."
      },
      {
        "who": "C",
        "text": "That helps. One thing I must be clear about: whatever you decide, you mustn't drive yourself home tonight. If the pain came back at the wheel, you could lose control, and that endangers you and everyone else on the road."
      },
      {
        "who": "I",
        "text": "I wasn't planning on leaving the van here."
      },
      {
        "who": "C",
        "text": "I know it's awkward, but it isn't safe. Here's a plan. The second test is at one o'clock. A doctor reviews you once the result is back. If everything is clear, we decide about you going home in the morning."
      },
      {
        "who": "I",
        "text": "So I might still get on site by the afternoon."
      },
      {
        "who": "C",
        "text": "Possibly, if everything's clear. I can't promise, but it's a real chance without taking a risk tonight. What would you like to do?"
      },
      {
        "who": "I",
        "text": "I'll stay. But I'm ringing the lad first, and I'm not promising anything if it drags on."
      },
      {
        "who": "C",
        "text": "That's fair. You're free to leave if you choose, and I won't stop you. But I'd write down the warning signs for you first, and you could come back at any time."
      },
      {
        "who": "I",
        "text": "What would those signs be?"
      },
      {
        "who": "C",
        "text": "Chest pain or tightness coming back, pain spreading to your arm, neck or jaw, or feeling breathless, sweaty or faint. If any happen, call 999 rather than driving in. Could you tell me what you'd watch for?"
      },
      {
        "who": "I",
        "text": "Pain coming back, down the arm or into the jaw, getting breathless or sweaty. And I ring 999, I don't drive."
      },
      {
        "who": "C",
        "text": "Exactly. So you'll phone your colleague now, the second test is at one, the doctor sees you afterwards, and we decide about home in the morning. All right?"
      },
      {
        "who": "I",
        "text": "Yes. Thanks for being straight with me."
      }
    ],
    "words": 735,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          3,
          5
        ],
        "how": "Open questions about why he wants to leave, tomorrow's arrangements and his own account of the pain come before any information."
      },
      {
        "bullet": 2,
        "turns": [
          9,
          11,
          13
        ],
        "how": "Explains in plain words why one blood result rules nothing out, that the one o'clock test is decisive, and that the ECG change cannot be ignored."
      },
      {
        "bullet": 3,
        "turns": [
          15
        ],
        "how": "States calmly what could happen at home untreated if the second test would have been abnormal, without predicting that it will be."
      },
      {
        "bullet": 4,
        "turns": [
          17,
          19
        ],
        "how": "Treats the job as a real problem and works out who to phone tonight and what can move later in the week."
      },
      {
        "bullet": 5,
        "turns": [
          21,
          23
        ],
        "how": "Says he must not drive himself home tonight and gives the reason: losing control if the pain returns."
      },
      {
        "bullet": 6,
        "turns": [
          23,
          31
        ],
        "how": "Gives the timed plan: second test at one, doctor's review after, decision about home in the morning if clear."
      },
      {
        "bullet": 7,
        "turns": [
          25,
          27,
          29
        ],
        "how": "Asks for his decision, says she will not stop him, that he can return at any time, and that she will write down the warning signs first."
      }
    ],
    "concern": {
      "turns": [
        4,
        5,
        16,
        17,
        19,
        25
      ],
      "how": "His embarrassment is answered at once (coming in was right), his belief that it was indigestion is met with the ECG and blood test facts, and the money worry is treated as real and partly solved by phoning his colleague and moving work, so staying becomes possible."
    },
    "safety": [
      {
        "point": "A single early blood result does not rule out heart muscle damage; the timed second test is needed.",
        "turn": 9
      },
      {
        "point": "The ECG change cannot be ignored even though he is now pain free.",
        "turn": 11
      },
      {
        "point": "He must not drive himself home tonight because recurrent pain at the wheel endangers him and others.",
        "turn": 21
      },
      {
        "point": "If chest pain, arm, neck or jaw pain, breathlessness, sweating or faintness occur, call 999 rather than driving in.",
        "turn": 29
      }
    ],
    "notes": "The card does not say whether the first blood result was normal; the script says only that it has not shown a problem, which the card implies. The card does not name the ECG change, so the script keeps it general."
  },
  "spk-nursing-a-relative-who-is-angry-that-nobody-telephoned": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Daughter",
    "turns": [
      {
        "who": "C",
        "text": "Good morning. I'm the nurse in charge of Ward 9 today. I understand something happened at the weekend that has upset you. Would you tell me what happened, from the beginning?"
      },
      {
        "who": "I",
        "text": "Upset? I'm furious. We came in on Saturday to visit Mum and her bed was empty. Stripped. Nobody could tell us where she was for nearly an hour."
      },
      {
        "who": "C",
        "text": "That must have been awful. Please go on."
      },
      {
        "who": "I",
        "text": "Eventually someone said she'd been moved to another ward in the middle of the night. Two in the morning! She's eighty-four. And by the time we found out, they'd moved her back. Nobody rang us. Not once."
      },
      {
        "who": "C",
        "text": "So she was moved twice, and the family weren't told about either move. Is there anything else that happened that I should know about?"
      },
      {
        "who": "I",
        "text": "Isn't that enough? She couldn't tell us much about it herself. We just stood there looking at an empty bed."
      },
      {
        "who": "C",
        "text": "It's more than enough. I'm very sorry that nobody telephoned you when your mother was moved, and again when she was moved back. That should have happened, and it didn't."
      },
      {
        "who": "I",
        "text": "Everyone says sorry. Then they tell me all about the bed shortage."
      },
      {
        "who": "C",
        "text": "I'm not going to do that. Can I ask what frightened you most about it? It might not be the empty bed itself."
      },
      {
        "who": "I",
        "text": "Honestly? It's that if you can lose her for an hour, you could miss something serious. A fall, her heart, anything. And we wouldn't know until it was too late."
      },
      {
        "who": "C",
        "text": "Thank you for telling me. That's an understandable fear, and it's about her safety, not just a phone call. I take it seriously."
      },
      {
        "who": "I",
        "text": "So what did happen at two in the morning? Why was she moved?"
      },
      {
        "who": "C",
        "text": "I'll be honest: I don't know yet. I wasn't on duty at the weekend, and I haven't read her record for those nights. I don't want to guess and give you the wrong story. I do know she's back on this ward now, and we're looking after her."
      },
      {
        "who": "I",
        "text": "That's not very reassuring, is it?"
      },
      {
        "who": "C",
        "text": "I understand. So this is what I'll do today. I'll read her notes, speak to the staff who were on that night, and telephone you before five o'clock with what I've found. Is the number on her record the best one?"
      },
      {
        "who": "I",
        "text": "Yes, that's my mobile. Before five. I'll be waiting."
      },
      {
        "who": "C",
        "text": "There's something else I'd like to do now, while you're here. I'm going to write in your mother's notes that her family must be telephoned before any ward move, at any hour of the day or night."
      },
      {
        "who": "I",
        "text": "And will people actually read that?"
      },
      {
        "who": "C",
        "text": "It goes in her nursing record, which every shift reads, and I'll make sure it's passed on at handover. There, it's written: the family are to be telephoned before any move, at any time, with your number. You can see it here."
      },
      {
        "who": "I",
        "text": "Right. Well, that's something, I suppose."
      },
      {
        "who": "C",
        "text": "You also have every right to raise this formally if you want to. The patient liaison service deals with concerns like yours. They're separate from the ward team, and I can give you their details."
      },
      {
        "who": "I",
        "text": "I don't want Mum treated differently because I've complained. People say that happens."
      },
      {
        "who": "C",
        "text": "I can see why you'd worry, but it won't affect her care in any way. Raising a concern is your right, and it helps us put things right."
      },
      {
        "who": "I",
        "text": "I'll think about it. I just want to know she's safe."
      },
      {
        "who": "C",
        "text": "Of course. Would it help to have the ward's direct telephone number, and the name of the nurse looking after your mother each day? Then you can ring and speak to someone who knows her."
      },
      {
        "who": "I",
        "text": "Yes. That would help a lot, actually. I wouldn't feel so in the dark."
      },
      {
        "who": "C",
        "text": "I'll write both down before you leave, and introduce you to today's nurse. So, to recap: I'll read the notes, speak to the night staff and call you before five, and the note about phoning before any move is in her record. Have I missed anything?"
      },
      {
        "who": "I",
        "text": "No. I think that covers it. I'm sorry I shouted."
      },
      {
        "who": "C",
        "text": "Please don't apologise. You had every reason to be upset. Just so I know I've been clear, what will you hear from me today?"
      },
      {
        "who": "I",
        "text": "A phone call before five, telling me what happened on Saturday night. And I can ring the ward directly if I'm worried."
      },
      {
        "who": "C",
        "text": "That's right. You can ask for me or her nurse by name. Thank you for telling me all this."
      }
    ],
    "words": 731,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          3,
          5
        ],
        "how": "Invites the full story with open prompts and says nothing about causes until she has finished."
      },
      {
        "bullet": 2,
        "turns": [
          7,
          9
        ],
        "how": "Apologises specifically for the two moves without a phone call and refuses to add the bed-shortage excuse."
      },
      {
        "bullet": 3,
        "turns": [
          9,
          11
        ],
        "how": "Asks what frightened her most and draws out her fear that the ward could miss something serious."
      },
      {
        "bullet": 4,
        "turns": [
          13
        ],
        "how": "Says honestly she was not on duty and must read the record before explaining the two o'clock move."
      },
      {
        "bullet": 5,
        "turns": [
          15
        ],
        "how": "Commits to reading the notes, speaking to the night staff and telephoning before five o'clock."
      },
      {
        "bullet": 6,
        "turns": [
          17,
          19
        ],
        "how": "Writes the instruction to telephone before any move at any hour in the record while she watches, and tells her it is done."
      },
      {
        "bullet": 7,
        "turns": [
          21,
          23
        ],
        "how": "Offers the patient liaison service as her right and says it will not affect her mother's care."
      },
      {
        "bullet": 8,
        "turns": [
          25,
          27
        ],
        "how": "Asks whether she would like the ward's direct number and the daily named nurse, and agrees to provide both."
      }
    ],
    "concern": {
      "turns": [
        9,
        10,
        11,
        13,
        17,
        19,
        25
      ],
      "how": "The nurse asks directly what frightened her most, names the fear as a safety concern rather than a complaint about a phone call, and answers it with concrete safeguards: the note in the record, a timed call back and a named nurse she can ring."
    },
    "safety": [
      {
        "point": "The nurse does not guess at what happened overnight and commits to reading the record before explaining.",
        "turn": 13
      },
      {
        "point": "A dated, timed call back before five o'clock is promised.",
        "turn": 15
      },
      {
        "point": "The record now instructs staff to telephone the family before any ward move at any hour.",
        "turn": 19
      }
    ],
    "notes": ""
  },
  "spk-nursing-a-man-going-home-with-a-urinary-catheter": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Good morning. I'm the nurse getting you ready to go home today. First, could you tell me what you understand about why you've got the catheter?"
      },
      {
        "who": "I",
        "text": "Something to do with my waterworks. I think it's there so I don't have accidents."
      },
      {
        "who": "C",
        "text": "That's a common idea, but it's the other way round. Your bladder wasn't emptying by itself, which is called urinary retention. The catheter is a thin tube that drains the urine, so your bladder doesn't fill up painfully. Do you know how long it's expected to stay?"
      },
      {
        "who": "I",
        "text": "I assumed it was for good now. At my age."
      },
      {
        "who": "C",
        "text": "It isn't meant to be permanent. Your plan, including when it's reviewed, is in this catheter passport, which you keep. The district nurse visits on Thursday, and the date it's due to be changed is on this page."
      },
      {
        "who": "I",
        "text": "Thursday? That's my club day. Not that I'll be going now."
      },
      {
        "who": "C",
        "text": "I'll come back to your club, because that matters. First, the two bags. This leg bag is for daytime. It straps to your thigh or calf, and this fixing strap holds the tube to your leg so it doesn't pull."
      },
      {
        "who": "I",
        "text": "And at night?"
      },
      {
        "who": "C",
        "text": "At bedtime you connect this larger night bag to the tap at the bottom of the leg bag and open the tap. The night bag sits on a stand on the floor, below the bed. In the morning, disconnect and empty it."
      },
      {
        "who": "I",
        "text": "Seems a lot of fiddling about."
      },
      {
        "who": "C",
        "text": "It does at first, but people get used to it quickly. To empty, wash your hands, open the tap over the toilet, let it drain, close it, then wash your hands again. Empty it at about two-thirds full, and always keep the bag below your bladder."
      },
      {
        "who": "I",
        "text": "Why below?"
      },
      {
        "who": "C",
        "text": "So urine always drains away from you. If the bag is higher, urine can flow back up the tube and cause an infection."
      },
      {
        "who": "I",
        "text": "Right. I was thinking I'd just drink less, so I don't have to empty it so often."
      },
      {
        "who": "C",
        "text": "I see why that seems sensible, but it makes things worse. Concentrated urine irritates the bladder and makes infections and blockages more likely. Drink enough through the day that your urine stays pale yellow. Water is best."
      },
      {
        "who": "I",
        "text": "What about washing? Can I still have my bath?"
      },
      {
        "who": "C",
        "text": "A shower is better than a bath while the catheter is in, because bath water can carry germs towards the tube. Once a day, wash gently around the tube with soap and water only. No creams or talc."
      },
      {
        "who": "I",
        "text": "And if something goes wrong? I live alone."
      },
      {
        "who": "C",
        "text": "That's important. Ring the district nurse, or the out-of-hours service at night, if no urine has drained for several hours, if you see blood or clots, if your urine is cloudy and you have a fever or shivering, if you have pain low in your tummy or in your back, or if the catheter falls out. The numbers are in your passport."
      },
      {
        "who": "I",
        "text": "I'll keep it by the phone."
      },
      {
        "who": "C",
        "text": "Good. Now, about Thursday. You said you weren't going to your club. Can you tell me what's putting you off?"
      },
      {
        "who": "I",
        "text": "Well, it's obvious. Everyone will know. They'll see the bag or smell something. I'd rather stay at home."
      },
      {
        "who": "C",
        "text": "That's an understandable worry. Here's what's actually visible: when a leg bag is strapped properly to your thigh or calf, it doesn't show under ordinary trousers. If the tap is closed and you empty it regularly, it shouldn't smell."
      },
      {
        "who": "I",
        "text": "Not even when I sit down?"
      },
      {
        "who": "C",
        "text": "Not usually. Slightly looser trousers help, and you can empty it just before you leave. What do you normally wear to the club?"
      },
      {
        "who": "I",
        "text": "Ordinary trousers. We play cards and have lunch, a couple of hours."
      },
      {
        "who": "C",
        "text": "Then you could empty it before you go, and once there if needed. And the district nurse's Thursday visit might fit around your club. Shall I ask whether they can come in the morning?"
      },
      {
        "who": "I",
        "text": "Would they do that? I suppose I could still go, then."
      },
      {
        "who": "C",
        "text": "I'll ask them today. Before you go, could you tell me two of the things that would make you ring the district nurse?"
      },
      {
        "who": "I",
        "text": "If nothing comes out into the bag for a few hours. And if my water's cloudy and I've got a temperature or the shivers."
      },
      {
        "who": "C",
        "text": "Exactly right. Blood, clots, pain or the catheter coming out are reasons too. So: leg bag by day, night bag at bedtime, plenty to drink, showers, and the nurse on Thursday. Happy with that plan?"
      },
      {
        "who": "I",
        "text": "Yes. And maybe the club after all."
      }
    ],
    "words": 738,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          3,
          5
        ],
        "how": "Asks what he understands, corrects the idea that it is for accidents, and points to the passport for how long it stays."
      },
      {
        "bullet": 2,
        "turns": [
          7,
          9
        ],
        "how": "Shows the leg bag, how to position and secure it, and how the night bag connects at bedtime."
      },
      {
        "bullet": 3,
        "turns": [
          11,
          13
        ],
        "how": "Explains emptying into the toilet with hand washing before and after, and why the bag stays below the bladder."
      },
      {
        "bullet": 4,
        "turns": [
          14,
          15
        ],
        "how": "Takes up his plan to drink less and explains why it would make things worse and how much to drink."
      },
      {
        "bullet": 5,
        "turns": [
          17
        ],
        "how": "Covers daily washing around the tube with soap and water only, and showering rather than bathing."
      },
      {
        "bullet": 6,
        "turns": [
          19
        ],
        "how": "Lists the specific reasons to ring the district nurse or out-of-hours service."
      },
      {
        "bullet": 7,
        "turns": [
          5,
          27
        ],
        "how": "Explains the Thursday district nurse visit and where the change date is recorded, and offers to time the visit around his club."
      },
      {
        "bullet": 8,
        "turns": [
          21,
          23,
          25,
          27
        ],
        "how": "Asks about the Thursday club specifically, what he thinks people would notice, his clothing, and says what is actually visible under trousers."
      },
      {
        "bullet": 9,
        "turns": [
          29,
          31
        ],
        "how": "Asks him to say back two reasons he would ring instead of asking if he has questions."
      }
    ],
    "concern": {
      "turns": [
        6,
        21,
        22,
        23,
        25,
        27,
        28
      ],
      "how": "The nurse notices his remark about the club, returns to it on purpose, asks what puts him off, answers his fear of being seen or smelt with facts about a properly worn leg bag, and offers to fit the nurse's visit around the club."
    },
    "safety": [
      {
        "point": "Keep the bag below the level of the bladder to stop urine flowing back and causing infection.",
        "turn": 13
      },
      {
        "point": "Drinking less makes infection and blockage more likely; drink enough to keep urine pale.",
        "turn": 15
      },
      {
        "point": "Ring if no urine drains for several hours, blood or clots, cloudy urine with fever or shivering, lower abdominal or back pain, or the catheter falls out.",
        "turn": 19
      }
    ],
    "notes": "The card does not say how long the catheter will stay; the script says only that it is not meant to be permanent and points to the plan in the passport, which a clinician should confirm fits this patient. The card gives no fluid volume, so the script uses the pale-yellow urine guide; the emptying point of about two-thirds full is conventional guidance and should be checked against local practice."
  },
  "spk-nursing-a-patient-starting-an-anticoagulant-who-has-read-about-the-risks": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm the nurse specialist for people who've recently started blood-thinning medicine. How have things been since starting the apixaban?"
      },
      {
        "who": "I",
        "text": "I need to tell you something. I stopped taking it, about ten days ago. I read about bleeding on the brain and I just couldn't carry on."
      },
      {
        "who": "C",
        "text": "Thank you for telling me, I really mean that. I'd far rather know than not know, and you're not in trouble."
      },
      {
        "who": "I",
        "text": "I thought you'd be cross. I haven't told anyone else."
      },
      {
        "who": "C",
        "text": "Not at all. Can you tell me exactly what you read, and what you took from it?"
      },
      {
        "who": "I",
        "text": "A forum, mostly. People saying their mother had a brain bleed on these tablets. And an article about serious bleeding. I keep picturing it."
      },
      {
        "who": "C",
        "text": "That sounds really frightening. When you pictured it, what were you most afraid of?"
      },
      {
        "who": "I",
        "text": "Collapsing at home on my own, with nobody finding me. Bleeding inside my head and not knowing."
      },
      {
        "who": "C",
        "text": "That's a very real fear, and I won't brush it aside. Could I explain why the medicine was started, and then look at both risks together?"
      },
      {
        "who": "I",
        "text": "Go on."
      },
      {
        "who": "C",
        "text": "Atrial fibrillation means the top chambers of your heart beat irregularly instead of squeezing properly. Blood can then sit still in part of the heart and form a clot. If a piece breaks off, it can travel to the brain and block a blood vessel. That's a stroke."
      },
      {
        "who": "I",
        "text": "So the tablet stops the clot."
      },
      {
        "who": "C",
        "text": "Exactly. It makes the blood less likely to clot, which is also why it can cause bleeding. So what you read isn't wrong. A serious bleed, even in the brain, can happen on it. But it's uncommon."
      },
      {
        "who": "I",
        "text": "Uncommon isn't never."
      },
      {
        "who": "C",
        "text": "No, and I won't pretend it is. But for someone with your history, the chance of a stroke without the medicine is much larger than the chance of a serious bleed with it. Your doctor worked out your own risk when it was started, and I can show you those figures."
      },
      {
        "who": "I",
        "text": "I just can't imagine having a stroke. I can imagine bleeding."
      },
      {
        "who": "C",
        "text": "That's honest. Can I describe what a stroke might mean? It can take away your words, or leave one side of your body weak. Some people can't dress themselves or drive afterwards and need help at home. Some recover well; others have lasting problems."
      },
      {
        "who": "I",
        "text": "My neighbour had one. She can't use her hand properly now. I hadn't thought of it like that."
      },
      {
        "who": "C",
        "text": "That's what the medicine protects you from. There are also ways to keep the bleeding risk low. Shall we go through them?"
      },
      {
        "who": "I",
        "text": "Yes, please. Like what?"
      },
      {
        "who": "C",
        "text": "If you cut yourself, press firmly for longer than usual, and get help if it won't stop. Tell your dentist before any treatment, and don't stop the tablet for it without advice. Avoid ibuprofen and aspirin from the shop. Paracetamol is usually fine, but check with the pharmacist."
      },
      {
        "who": "I",
        "text": "And how would I know if I was bleeding inside?"
      },
      {
        "who": "C",
        "text": "Get urgent help, by calling 999 or going to A&E, if you have a sudden severe headache, a bang to the head, vomit blood, pass black or bloody stools, or have bleeding that won't stop. Those are the signs that matter."
      },
      {
        "who": "I",
        "text": "That's actually less frightening, knowing what to look for."
      },
      {
        "who": "C",
        "text": "I'm glad. What would make it possible for you to take it every day?"
      },
      {
        "who": "I",
        "text": "Honestly, I'd forget some days anyway. And I'd want someone to check on me after a little while."
      },
      {
        "who": "C",
        "text": "Then let's do both. The pharmacy can give you a dosette box, with a section for each day, so you can see whether you've taken it. I'll book a review with me in two weeks, and confirm with your doctor today how you should restart. How does that sound?"
      },
      {
        "who": "I",
        "text": "All right. But what if I panic again, like last time?"
      },
      {
        "who": "C",
        "text": "Then please ring me rather than stopping. I'll give you my direct number; otherwise ring your GP or pharmacist. Stopping without telling anyone is the one thing I'd ask you not to do. Can you agree to that?"
      },
      {
        "who": "I",
        "text": "Yes. I'll ring you first."
      },
      {
        "who": "C",
        "text": "Thank you. So, just to check we're agreed, could you tell me what you'll do from today?"
      },
      {
        "who": "I",
        "text": "Restart once you've checked with the doctor, use the dosette box, see you in two weeks, and ring you if I'm frightened instead of stopping."
      },
      {
        "who": "C",
        "text": "That's exactly it. And if you ever notice the bleeding signs we talked about, or your face drooping, an arm going weak or your speech slurring, call 999 straight away."
      }
    ],
    "words": 737,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          3,
          5
        ],
        "how": "Thanks her straight away, says she would far rather know, and reassures her she is not in trouble."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          7
        ],
        "how": "Asks what she read, what she took from it and what she feared most before giving any information."
      },
      {
        "bullet": 3,
        "turns": [
          11,
          13
        ],
        "how": "Explains in plain words how an irregular heartbeat lets blood pool and clot, and how a clot travels to cause a stroke."
      },
      {
        "bullet": 4,
        "turns": [
          13,
          15
        ],
        "how": "Admits that serious bleeding, including in the brain, can happen, and sets it beside the much larger stroke risk without treatment."
      },
      {
        "bullet": 5,
        "turns": [
          17,
          19
        ],
        "how": "Describes what a stroke would mean for speech, movement, dressing, driving and independence, without dramatising."
      },
      {
        "bullet": 6,
        "turns": [
          21,
          23
        ],
        "how": "Covers cuts, dental treatment, painkillers to avoid and the bleeding signs that need urgent help."
      },
      {
        "bullet": 7,
        "turns": [
          25,
          27
        ],
        "how": "Asks what would help her take it daily and agrees a dosette box and a two-week review."
      },
      {
        "bullet": 8,
        "turns": [
          29,
          31
        ],
        "how": "Agrees that if she becomes frightened she will ring the nurse, her GP or the pharmacist instead of stopping."
      }
    ],
    "concern": {
      "turns": [
        3,
        8,
        9,
        14,
        15,
        16,
        17,
        18
      ],
      "how": "Her fear of being told off is defused by thanks, her imagined bleed is taken seriously and not denied, and the stroke she cannot picture is made concrete, so she weighs both risks herself and chooses to restart."
    },
    "safety": [
      {
        "point": "Avoid over-the-counter ibuprofen and aspirin while on the anticoagulant; check other painkillers with the pharmacist.",
        "turn": 21
      },
      {
        "point": "Severe headache, head injury, vomiting blood, black or bloody stools or bleeding that will not stop need urgent help.",
        "turn": 23
      },
      {
        "point": "How to restart after a gap is confirmed with the prescriber rather than guessed.",
        "turn": 27
      },
      {
        "point": "Face drooping, arm weakness or slurred speech means call 999 immediately.",
        "turn": 33
      }
    ],
    "notes": "The guidance note asks for plain numbers, but the card gives no figures for her bleeding or stroke risk, so the script does not invent any; it says her own figures were worked out when the medicine was started and offers to go through them. A clinician may want to add real figures for her risk profile. The restart is left to the prescriber because the card gives no dose."
  },
  "spk-nursing-telling-a-son-about-his-mother-s-fall-in-hospital": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Son",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm the nurse looking after your mother today. Thank you for coming in. I'm afraid I have to tell you that your mother has had a fall. I found her, and she's awake and talking."
      },
      {
        "who": "I",
        "text": "A fall? I was only here two hours ago. They told me she was doing well. Is she all right?"
      },
      {
        "who": "C",
        "text": "She's sore, but she's sitting up and talking. She's hurt her forearm and her hip. Can I go through what we know, and what we don't know yet?"
      },
      {
        "who": "I",
        "text": "Yes. Please."
      },
      {
        "who": "C",
        "text": "It happened about an hour ago. I found her on the floor between her bed and the toilet. Nobody saw her fall, which is what we call an unwitnessed fall, so we don't know exactly how she landed. She has a skin tear on her forearm, where the skin has split, and a bruise on her hip."
      },
      {
        "who": "I",
        "text": "Did she hit her head?"
      },
      {
        "who": "C",
        "text": "As far as I can tell, no. She says she didn't, and I found no bump or cut on her head. But because nobody saw it happen, I can't be completely certain, so we're keeping a close eye on her."
      },
      {
        "who": "I",
        "text": "This shouldn't have happened. She's in hospital, for goodness' sake."
      },
      {
        "who": "C",
        "text": "You're right, and I'm so sorry. This happened while she was in our care, and I'm sorry for that, whatever we find out about how it happened."
      },
      {
        "who": "I",
        "text": "So what have you done for her?"
      },
      {
        "who": "C",
        "text": "We checked her observations straight away, that's her blood pressure, pulse and other checks. I dressed the skin tear, and a doctor came to examine her. She's had pain relief, and the doctor has asked for x-rays of her hip and her wrist."
      },
      {
        "who": "I",
        "text": "X-rays? So is something broken?"
      },
      {
        "who": "C",
        "text": "I honestly can't tell you yet, and I don't want to guess either way. Only the x-rays can show that. The request has gone through, and I'm expecting them to be done later today. I'll come and find you as soon as we know."
      },
      {
        "who": "I",
        "text": "What I don't understand is why she was walking on her own. Was she just left? Did someone decide not to bother?"
      },
      {
        "who": "C",
        "text": "No, nobody decided to leave her alone. Let me tell you what I know. Her assessment said she could walk short distances by herself. She'd been asked to press her call bell when she wanted the toilet, and the bell was by her bed. This time, she got up without calling."
      },
      {
        "who": "I",
        "text": "But she's eighty-eight. Surely someone should have been with her."
      },
      {
        "who": "C",
        "text": "That's a fair question, and it's one we'll be looking at closely. It may be that what was in place wasn't enough for her, and I won't pretend otherwise."
      },
      {
        "who": "I",
        "text": "So what happens now? I don't want this happening again tonight."
      },
      {
        "who": "C",
        "text": "Neither do we. Her falls risk is being reviewed today. We've moved her bed to where staff can see her more easily, her call bell is fixed where she can reach it, and someone will check on her every hour. The team will also decide whether she needs help to walk from now on."
      },
      {
        "who": "I",
        "text": "Every hour. Is that really enough?"
      },
      {
        "who": "C",
        "text": "It's a start, and if the review shows she needs more, we'll do more. Until that decision is made, we'll ask her to have one of us with her whenever she walks."
      },
      {
        "who": "I",
        "text": "Right. And is this going to be written down somewhere, or just forgotten?"
      },
      {
        "who": "C",
        "text": "It will be recorded formally as an incident, which means it's looked at by the senior team so that we can learn from it. And we'll keep you and the family informed, including the x-ray results."
      },
      {
        "who": "I",
        "text": "I'll probably think of more questions on the way home."
      },
      {
        "who": "C",
        "text": "That's very normal. You can ring the ward at any time and ask for me or the nurse in charge. I'll write the number down for you. You can also ask to speak to the doctor."
      },
      {
        "who": "I",
        "text": "Can I see her now?"
      },
      {
        "who": "C",
        "text": "Of course. Before you do, can I check what you've taken from this? It's a lot to hear at once."
      },
      {
        "who": "I",
        "text": "She fell, nobody saw it, she's got a tear on her arm and a bruised hip, and you don't think she hit her head. The x-rays are later today. And someone will be with her when she walks."
      },
      {
        "who": "C",
        "text": "That's right. I'll tell you the x-ray results as soon as we have them. And again, I'm very sorry this happened. Let's go and see her together."
      },
      {
        "who": "I",
        "text": "Thank you for telling me straight."
      }
    ],
    "words": 730,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1
        ],
        "how": "Opens with one plain sentence: she has fallen, the nurse found her, and she is awake and talking."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          7
        ],
        "how": "Gives where and when she was found, the skin tear and bruise, explains unwitnessed, and says the head injury cannot be fully excluded."
      },
      {
        "bullet": 3,
        "turns": [
          9
        ],
        "how": "Apologises that it happened in their care without waiting to establish fault."
      },
      {
        "bullet": 4,
        "turns": [
          11
        ],
        "how": "Lists the observations, dressing, doctor's review, hip and wrist x-ray request and pain relief."
      },
      {
        "bullet": 5,
        "turns": [
          13
        ],
        "how": "Says honestly that only the x-rays can show a fracture and gives when they are expected."
      },
      {
        "bullet": 6,
        "turns": [
          15,
          17
        ],
        "how": "Answers why she was walking alone with her assessed ability, what she was told and the call bell in place, and denies any deliberate decision."
      },
      {
        "bullet": 7,
        "turns": [
          19,
          21
        ],
        "how": "Explains the falls risk review, bed position, call bell, hourly checks and the decision about help to walk."
      },
      {
        "bullet": 8,
        "turns": [
          23,
          25
        ],
        "how": "Says the fall will be recorded formally, the family kept informed, and how to ask questions later."
      }
    ],
    "concern": {
      "turns": [
        14,
        15,
        16,
        17
      ],
      "how": "The nurse answers his real question directly, says plainly that nobody chose to leave her, gives the facts about her assessment and the call bell, and admits the measures may not have been enough rather than defending them."
    },
    "safety": [
      {
        "point": "Because the fall was unwitnessed, a head injury cannot be fully ruled out and she is being watched closely.",
        "turn": 7
      },
      {
        "point": "No guess is made about a fracture before the x-rays.",
        "turn": 13
      },
      {
        "point": "Until the walking decision is made, she will have staff with her whenever she walks.",
        "turn": 21
      }
    ],
    "notes": "The card does not give her usual walking ability, what she had been told, the exact time of the fall or when the x-rays will be done; the script assumes she was assessed as able to walk short distances alone and had been asked to use her call bell, and says the x-rays are expected later today. A clinician should confirm these fit the scenario."
  },
  "spk-nursing-bowel-preparation-before-a-colonoscopy": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Good morning, I'm one of the pre-assessment nurses. Can I check your name and date of birth? Thank you. First, what do you know about the test, and why you've been referred?"
      },
      {
        "who": "I",
        "text": "The screening kit came back positive, so they want a camera inside. I read the sheet once, then it went in my pocket."
      },
      {
        "who": "C",
        "text": "That's right. It found tiny traces of blood, which has several possible causes. A colonoscopy is a thin, flexible camera that looks inside your bowel. What did you take from the sheet?"
      },
      {
        "who": "I",
        "text": "Not much. No eating, drinking loads. Thing is, I drive lorries, so I'm on the road most days."
      },
      {
        "who": "C",
        "text": "That matters, and we'll come back to it. Let's go through the sheet together. For two days before, you eat a low-residue diet, meaning low-fibre food, so the bowel clears easily."
      },
      {
        "who": "I",
        "text": "So what can I eat?"
      },
      {
        "who": "C",
        "text": "White bread, white rice, plain pasta, peeled potatoes, eggs, chicken and white fish. Avoid wholemeal bread, cereals, fruit, vegetables, nuts and seeds. On the day before, stop solid food completely at the time printed here. I'll underline it."
      },
      {
        "who": "I",
        "text": "Right. Then the sachets."
      },
      {
        "who": "C",
        "text": "Yes. This section gives the exact number of sachets, the water for each, and each dose time on the day before. I'll write the times large at the top. With each dose, drink the extra clear fluid shown, a glass at a time."
      },
      {
        "who": "I",
        "text": "What's a clear fluid? Can I have tea?"
      },
      {
        "who": "C",
        "text": "Tea or coffee without milk is fine, and so are water, clear squash, clear apple juice and clear soup. Avoid milk, anything red or purple, which can look like blood on camera, anything with bits in, and alcohol."
      },
      {
        "who": "I",
        "text": "I've got a delivery that day. Could I keep the drinks in the cab and stop at services?"
      },
      {
        "who": "C",
        "text": "Honestly, no. Once it works, often within an hour or so of the first dose, you'll have frequent, urgent, watery diarrhoea with little warning. Plan to be at home from the first dose, not working or on the road."
      },
      {
        "who": "I",
        "text": "That's a day's pay gone. Can't I take it later, once I'm home?"
      },
      {
        "who": "C",
        "text": "I understand. The times are set so your bowel is clear for the camera; otherwise you might have to repeat everything. Would a letter for your employer help?"
      },
      {
        "who": "I",
        "text": "Yeah. All right, I'll book the day off."
      },
      {
        "who": "C",
        "text": "Thank you. Also, you mustn't drive yourself home afterwards, because of the sedation. Now, what tablets do you take?"
      },
      {
        "who": "I",
        "text": "Blood pressure tablets in the morning, and iron tablets."
      },
      {
        "who": "C",
        "text": "For your blood pressure tablets on the preparation day, please check your instruction sheet or ask the unit, as they will tell you what to do. The iron tablets must stop seven days before the test, because iron coats the bowel and makes it hard to see. I'll write the stopping date on your sheet."
      },
      {
        "who": "I",
        "text": "Stop the iron, keep the others."
      },
      {
        "who": "C",
        "text": "Exactly. On the day, fast as the sheet says and arrive at the time on your letter. Sedation through a small needle in your hand makes you relaxed and drowsy. Most people are here a few hours."
      },
      {
        "who": "I",
        "text": "And someone has to fetch me?"
      },
      {
        "who": "C",
        "text": "Yes. Someone must collect you and stay with you for twenty-four hours. Who could do that?"
      },
      {
        "who": "I",
        "text": "My wife. She won't be thrilled, but she'll do it."
      },
      {
        "who": "C",
        "text": "Good. A tip that helps: mix the preparation ahead, chill it, and drink it through a straw. If you're being sick and can't keep it down, ring the unit on this number. I'm circling it."
      },
      {
        "who": "I",
        "text": "Got it."
      },
      {
        "who": "C",
        "text": "Before you go, what's worrying you most about the test itself?"
      },
      {
        "who": "I",
        "text": "Honestly? Cancer. My brother-in-law had bowel cancer. That's what positive means, isn't it?"
      },
      {
        "who": "C",
        "text": "That's a very natural worry, and I'm glad you said it. A positive result doesn't mean cancer, and most people with one don't have it. Often it's polyps, small growths usually removed during the test, or piles. If anything serious were found, finding it early gives the best chance."
      },
      {
        "who": "I",
        "text": "That's better than I thought. It's been on my mind all week."
      },
      {
        "who": "C",
        "text": "I can see that. The doctor usually tells you what they found before you go home. Could you tell me the main points back?"
      },
      {
        "who": "I",
        "text": "Low-fibre food for two days, stop solids at the underlined time, sachets at home with clear drinks, no driving once I start, iron stopped on your date, wife collects me."
      },
      {
        "who": "C",
        "text": "Perfect. If you can't keep it down, feel faint or very dizzy, or have severe tummy pain, ring the circled number, or NHS 111 out of hours. Any questions?"
      },
      {
        "who": "I",
        "text": "No, that's clearer than the sheet. Thanks."
      }
    ],
    "words": 748,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2,
          3,
          4
        ],
        "how": "Opens by asking what he knows about the test, the referral and the sheet, then clarifies the screening result."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          6,
          7
        ],
        "how": "Explains the low-residue diet with foods to eat and avoid, and when to stop solid food."
      },
      {
        "bullet": 3,
        "turns": [
          8,
          9,
          10,
          11
        ],
        "how": "Goes through sachets, water, dose times and extra clear fluid line by line on his own sheet, and defines clear fluids."
      },
      {
        "bullet": 4,
        "turns": [
          12,
          13,
          14,
          15,
          16,
          17
        ],
        "how": "Says honestly how fast and urgent the effect is, rules out working or driving once he starts, and rules out driving home."
      },
      {
        "bullet": 5,
        "turns": [
          17,
          18,
          19,
          20
        ],
        "how": "Blood pressure tablets continue; iron stopped seven days before, with the reason and the date written down."
      },
      {
        "bullet": 6,
        "turns": [
          21,
          22,
          23,
          24
        ],
        "how": "Covers fasting, arrival time, sedation, length of stay and needing someone for twenty-four hours."
      },
      {
        "bullet": 7,
        "turns": [
          25,
          33
        ],
        "how": "Gives the chill-and-straw tip and circles the unit number for when he cannot keep it down."
      },
      {
        "bullet": 8,
        "turns": [
          27,
          28,
          29,
          30,
          31
        ],
        "how": "Asks what worries him most and answers the cancer fear honestly without false reassurance."
      }
    ],
    "concern": {
      "turns": [
        4,
        12,
        13,
        14,
        15,
        27,
        28,
        29,
        30
      ],
      "how": "The toilet and driving worry is met with an honest account of the effect and an employer letter; the cancer fear is invited directly and answered honestly: most positive results are not cancer, but the test is needed."
    },
    "safety": [
      {
        "point": "Must not work or drive once the preparation is started.",
        "turn": 13
      },
      {
        "point": "Must not drive home after sedation.",
        "turn": 17
      },
      {
        "point": "Blood pressure tablets on the preparation day: check the instruction sheet or ask the unit",
        "turn": 19
      },
      {
        "point": "Someone collects him and stays with him for twenty-four hours after sedation.",
        "turn": 23
      },
      {
        "point": "Seek help if unable to keep the preparation down, faint, very dizzy or with severe abdominal pain.",
        "turn": 33
      }
    ],
    "notes": "The card asks for exact sachet numbers, water volumes, dose times and a telephone number but gives none, so the script reads them from his sheet rather than inventing them. Please check: the blood pressure advice (continue, taken an hour before a dose) - some units withhold diuretics or ACE inhibitors on the preparation day because of dehydration risk; the twenty-four-hour escort and no-driving period after sedation matches local policy; and which foods your unit lists for the low-residue diet. [v2: beta-g's clinical fix applied.]"
  },
  "spk-nursing-a-frightened-child-who-needs-a-swab": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Mother",
    "turns": [
      {
        "who": "C",
        "text": "Hello, I'm one of the nurses on the assessment unit. Are you his mum? Hello there, I can see you're feeling poorly. I'll just talk to Mum for a minute."
      },
      {
        "who": "I",
        "text": "Yes, I'm his mum. He's Jamie. If you're here for the swab, he won't have it. He's terrified."
      },
      {
        "who": "C",
        "text": "Thank you for telling me. I can see you're both exhausted. What happened at the other hospital, and what did he find worst?"
      },
      {
        "who": "I",
        "text": "Nobody explained anything. They laid him flat, two of them held him, and I had to hold his arms. He couldn't see what was happening. I felt awful."
      },
      {
        "who": "C",
        "text": "That sounds distressing for you both, and it really helps. So no lying flat, no strangers holding him, and he'll see everything. May I explain why the swab matters?"
      },
      {
        "who": "I",
        "text": "Go on."
      },
      {
        "who": "C",
        "text": "It's a quick sample from his nose and throat that checks for infections spread by coughs and sneezes, such as flu. The result tells us whether he needs his own room on the ward, to protect other children, and helps the doctors choose the right treatment."
      },
      {
        "who": "I",
        "text": "And how long does that take?"
      },
      {
        "who": "C",
        "text": "I'll check with the laboratory how long it's taking today and come and tell you myself."
      },
      {
        "who": "I",
        "text": "And if I say no? You'll just hold him down anyway."
      },
      {
        "who": "C",
        "text": "No. I won't hold him down, and I won't ask you to. If he still refuses after we've tried everything, we stop. He'd still be treated, but he'd likely stay in a single room, the doctors would decide treatment without that result, and he might wait longer for a bed."
      },
      {
        "who": "I",
        "text": "Right. Well, that's something. I just can't do that to him again."
      },
      {
        "who": "C",
        "text": "I understand. What I can do is give him real choices, so he feels in charge. May I talk to him?"
      },
      {
        "who": "I",
        "text": "You can try."
      },
      {
        "who": "C",
        "text": "Jamie, this is a special cotton bud. You can hold it first. Do you want Mummy's lap or the big bed? You choose which side of your nose, and you can count to three yourself."
      },
      {
        "who": "I",
        "text": "He's peeking at you. He says lap, and he wants me to stay."
      },
      {
        "who": "C",
        "text": "Lap is perfect, and Mum stays. Jamie, would you like me to do it, or the nurse who met you at the desk?"
      },
      {
        "who": "I",
        "text": "He says you. He liked your stickers."
      },
      {
        "who": "C",
        "text": "Then it's me. Mum, can I explain how you might help, and you tell me honestly if you're comfortable? He sits upright on your lap, back against your chest. One arm goes across his body like a cuddle, and your other hand rests on his forehead."
      },
      {
        "who": "I",
        "text": "That still sounds like holding him down."
      },
      {
        "who": "C",
        "text": "I can see why. But he's sitting up, he can see everything, and the cuddle stops him getting hurt if he jerks. If he fights to get away, we stop. It's support, not restraint, and only if you're willing."
      },
      {
        "who": "I",
        "text": "If we stop when he really wants to stop, then yes, I can do that."
      },
      {
        "who": "C",
        "text": "Thank you. Jamie, here's exactly what it feels like. It tickles inside your nose and at the back of your throat, and your eyes might water. It takes about four seconds. It might not be nice, but it's quick."
      },
      {
        "who": "I",
        "text": "He's asking if it hurts."
      },
      {
        "who": "C",
        "text": "Good question, Jamie. It's not a needle. Most children say it's tickly and a bit yucky. I won't say it's lovely, because I want you to trust me."
      },
      {
        "who": "I",
        "text": "Fair enough. He seems a little calmer."
      },
      {
        "who": "C",
        "text": "What would he like straight afterwards? A sticker, something on your phone, a drink?"
      },
      {
        "who": "I",
        "text": "He loves dinosaurs. A dinosaur sticker and his cartoon."
      },
      {
        "who": "C",
        "text": "Then that's the deal: swab, dinosaur sticker, cartoon. Are you happy to go ahead now? Or I can come back in twenty minutes, once he's settled."
      },
      {
        "who": "I",
        "text": "Twenty minutes might help. He's only just stopped crying."
      },
      {
        "who": "C",
        "text": "That's fine. I'll come back in twenty minutes, and he can keep the swab packet to get used to it. Could you tell me what we've agreed?"
      },
      {
        "who": "I",
        "text": "Lap, facing out, I cuddle him, he picks the side and counts to three, you do it, four seconds of tickle, then sticker and cartoon. If he really won't, you stop."
      },
      {
        "who": "C",
        "text": "Exactly. While you wait, if his breathing changes, he becomes very sleepy or floppy, or you're worried at all, press the call bell. See you both shortly."
      },
      {
        "who": "I",
        "text": "Thank you. That's the first time anyone's actually asked us."
      }
    ],
    "words": 712,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          3,
          4,
          5
        ],
        "how": "Asks what happened before and what he found worst, and uses the answer to plan the approach."
      },
      {
        "bullet": 2,
        "turns": [
          7,
          8,
          9
        ],
        "how": "Explains what the swab looks for, how it affects where he is nursed and his treatment, and how she will learn the timing."
      },
      {
        "bullet": 3,
        "turns": [
          10,
          11,
          12
        ],
        "how": "States plainly there will be no holding down and what happens to his care if he refuses."
      },
      {
        "bullet": 4,
        "turns": [
          15,
          16,
          17,
          18
        ],
        "how": "Offers holding the swab, lap or bed, which nostril, counting himself and who does it."
      },
      {
        "bullet": 5,
        "turns": [
          19,
          20,
          21,
          22
        ],
        "how": "Describes the upright cuddle hold, why it is support not restraint, and checks she is willing."
      },
      {
        "bullet": 6,
        "turns": [
          23,
          24,
          25
        ],
        "how": "Honest description: tickle, four seconds, watery eyes, may be unpleasant."
      },
      {
        "bullet": 7,
        "turns": [
          27,
          28,
          29
        ],
        "how": "Agrees a dinosaur sticker and his cartoon straight afterwards."
      },
      {
        "bullet": 8,
        "turns": [
          29,
          30,
          31,
          32
        ],
        "how": "Asks for agreement now, offers twenty minutes, accepts the delay and checks understanding."
      }
    ],
    "concern": {
      "turns": [
        2,
        4,
        5,
        10,
        11,
        20,
        21,
        22
      ],
      "how": "Her fear of being made to hold him down is addressed by refusing force outright, explaining the consequences honestly, and asking her consent for a supportive hold she can stop at any time."
    },
    "safety": [
      {
        "point": "No forced restraint; the procedure stops if he resists.",
        "turn": 11
      },
      {
        "point": "Declining the swab is explained honestly in terms of isolation and treatment decisions.",
        "turn": 11
      },
      {
        "point": "Call for help at once if breathing changes, he becomes very sleepy or floppy, or she is worried.",
        "turn": 33
      }
    ],
    "notes": "The card asks when the result will come back but gives no turnaround time, so the nurse promises to find out rather than stating one. The organisms tested for are kept general (flu and other viruses); please confirm what your unit's nose and throat swab actually tests for."
  },
  "spk-nursing-a-woman-who-has-stopped-her-antidepressant": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Before I take your reading, can I pause there? I'm the practice nurse seeing you today, and I'm really glad you told me. You're not in any trouble at all. Could we talk about it for a few minutes?"
      },
      {
        "who": "I",
        "text": "I thought you'd be cross. I know I should have asked someone first."
      },
      {
        "who": "C",
        "text": "Not at all. It's your decision, and telling me was the right thing. When did you stop, and how?"
      },
      {
        "who": "I",
        "text": "About three weeks ago. I'd been feeling so much better, I didn't see the point any more."
      },
      {
        "who": "C",
        "text": "Did you cut the dose down gradually, or stop them all at once?"
      },
      {
        "who": "I",
        "text": "All at once. Just didn't take the next one."
      },
      {
        "who": "C",
        "text": "Thank you. And how have you felt in the three weeks since, both in yourself and physically?"
      },
      {
        "who": "I",
        "text": "Physically a bit odd for the first week or so. Tired. My mood's been all right, mostly."
      },
      {
        "who": "C",
        "text": "Stopping this kind of tablet suddenly can cause things like dizziness, brief electric-shock feelings, often in the head, irritability, or poor sleep and vivid dreams. Have you had any?"
      },
      {
        "who": "I",
        "text": "Actually, yes. Dizzy when I turned my head, and these strange zaps. I thought I was imagining it. They've eased a bit now."
      },
      {
        "who": "C",
        "text": "You weren't imagining it. That's common after stopping suddenly, and it usually settles. How has your mood been over the last week?"
      },
      {
        "who": "I",
        "text": "Flatter, if I'm honest. Not like it was before, but I've been snapping at my partner."
      },
      {
        "who": "C",
        "text": "Thank you for being honest. How have you been sleeping, and how's your appetite?"
      },
      {
        "who": "I",
        "text": "Sleep's broken. Appetite's fine. Too fine, probably."
      },
      {
        "who": "C",
        "text": "I ask everyone this, so please don't be alarmed. Have you had any thoughts of harming yourself, or feeling that life isn't worth living?"
      },
      {
        "who": "I",
        "text": "No. Nothing like that. I had some dark days last year, but not now."
      },
      {
        "who": "C",
        "text": "Thank you, that's important to know. Can I ask what made you want to stop? Not just wanting to be off tablets, but what was behind it?"
      },
      {
        "who": "I",
        "text": "Two things. I've put on weight since I started them, and I hate it. And I don't want to be someone who's on tablets for life."
      },
      {
        "who": "C",
        "text": "Both are real concerns. Weight change happens for some people on these medicines, and your doctor can look at it with you, including whether another option might suit you better. Tell me more about the long-term worry."
      },
      {
        "who": "I",
        "text": "My mum's been on antidepressants for twenty years. I don't want that to be me."
      },
      {
        "who": "C",
        "text": "That makes sense. Taking them now doesn't mean taking them for ever. Many people take them for a set time after feeling better, then come off with their doctor's support."
      },
      {
        "who": "I",
        "text": "But if I've already stopped, why does it matter how?"
      },
      {
        "who": "C",
        "text": "Good question. The brain gets used to the medicine, so stopping suddenly can cause the symptoms you had, and for some people low mood returns. So it's normally reduced in steps, a smaller dose for a few weeks at a time, with check-ins. I can't decide what's right for you, but your doctor can."
      },
      {
        "who": "I",
        "text": "I don't want to be talked back onto them, though."
      },
      {
        "who": "C",
        "text": "That's fair, and it'll be your choice. The doctor will listen to your reasons and go through the options. There's an appointment with your doctor at half past four today. Could you make that?"
      },
      {
        "who": "I",
        "text": "Today? I suppose so, yes."
      },
      {
        "who": "C",
        "text": "I'll book it. Until then, please don't restart the tablets or take old ones on your own. One more thing: how would you like this written in your record? Some people's family can see their notes online."
      },
      {
        "who": "I",
        "text": "My partner and I share the app login. I'd rather it just said I'm seeing the doctor about my medication."
      },
      {
        "who": "C",
        "text": "I'll keep it brief: that we discussed your medication and you're seeing the doctor today. It may be worth having your own login, so your record stays private. Is that all right?"
      },
      {
        "who": "I",
        "text": "Yes, that's fine. I hadn't thought about the login."
      },
      {
        "who": "C",
        "text": "And if your mood drops before this afternoon, or any time after, ring the practice. If we're closed, call NHS 111. If you feel you might act on thoughts of harming yourself, call 999 or go to A and E. What would you do?"
      },
      {
        "who": "I",
        "text": "Ring here first, 111 when you're shut, 999 if it's an emergency. And see the doctor at half four."
      },
      {
        "who": "C",
        "text": "Exactly. Thank you for trusting me with this. Shall we do your blood pressure now?"
      },
      {
        "who": "I",
        "text": "Yes, please. I actually feel a bit lighter."
      }
    ],
    "words": 725,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2,
          3
        ],
        "how": "Thanks her for telling and says plainly she is not in trouble."
      },
      {
        "bullet": 2,
        "turns": [
          3,
          4,
          5,
          6,
          7,
          8
        ],
        "how": "Establishes when she stopped, that it was abrupt, and how she has felt physically and emotionally."
      },
      {
        "bullet": 3,
        "turns": [
          9,
          10,
          11
        ],
        "how": "Asks about dizziness, electric-shock sensations, irritability and sleep; she confirms some."
      },
      {
        "bullet": 4,
        "turns": [
          11,
          12,
          13,
          14,
          15,
          16
        ],
        "how": "Asks calmly about mood, sleep, appetite and thoughts of self-harm in the same tone."
      },
      {
        "bullet": 5,
        "turns": [
          17,
          18,
          19,
          20,
          21
        ],
        "how": "Draws out the weight and long-term worries and takes each seriously."
      },
      {
        "bullet": 6,
        "turns": [
          22,
          23
        ],
        "how": "Explains in plain terms why the medicine is reduced in steps, without prescribing."
      },
      {
        "bullet": 7,
        "turns": [
          25,
          26,
          27
        ],
        "how": "Offers a specific doctor appointment this afternoon and says what to do meanwhile."
      },
      {
        "bullet": 8,
        "turns": [
          27,
          28,
          29,
          30,
          31,
          32
        ],
        "how": "Agrees discreet record wording given the shared login, and checks she knows who to contact, including out of hours."
      }
    ],
    "concern": {
      "turns": [
        1,
        2,
        3,
        18,
        19,
        20,
        21,
        24,
        25
      ],
      "how": "Her expectation of a lecture is met with thanks and no blame; her weight and long-term worries are explored and validated, and she is told the decision stays hers."
    },
    "safety": [
      {
        "point": "Direct, calm question about thoughts of self-harm.",
        "turn": 15
      },
      {
        "point": "Do not restart or take old tablets without speaking to the doctor.",
        "turn": 27
      },
      {
        "point": "Same-day doctor appointment arranged.",
        "turn": 25
      },
      {
        "point": "Contact the practice, NHS 111 out of hours, or 999 or A and E if at risk of acting on thoughts of self-harm.",
        "turn": 31
      }
    ],
    "notes": "The appointment time is invented as an arrangement detail, not a clinical fact. The advice not to restart sertraline alone before the same-day review is a judgement call; please confirm it is appropriate. The tapering description is deliberately general."
  },
  "spk-nursing-explaining-an-mrsa-screening-result": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Hello, this is one of the nurses from the pre-operative assessment clinic. Am I speaking to the patient? Could you confirm your date of birth? Thank you. Is now a good time?"
      },
      {
        "who": "I",
        "text": "Yes, it's me, and yes, it's fine. Is it about my knee? Is something wrong?"
      },
      {
        "who": "C",
        "text": "It's about the nose swab we took last week. The result shows that you're carrying a germ called MRSA."
      },
      {
        "who": "I",
        "text": "MRSA? That's the hospital superbug, isn't it? Oh no. My grandchildren are coming tomorrow."
      },
      {
        "who": "C",
        "text": "I can hear that's a shock. What's going through your mind?"
      },
      {
        "who": "I",
        "text": "Well, I'm infectious, aren't I? And now they'll cancel my operation. I've waited so long for it."
      },
      {
        "who": "C",
        "text": "Let me take those one at a time. MRSA is a germ that lives harmlessly on the skin or in the nose of many healthy people. That's carrying it, which is what you have. An infection is when it gets into a wound or the body and makes you ill. You don't have an infection."
      },
      {
        "who": "I",
        "text": "So I'm not ill?"
      },
      {
        "who": "C",
        "text": "No, you're not ill. For your grandchildren, the risk to healthy people at home, children included, is very low. Ordinary handwashing and not sharing towels are enough. Hug them and have them visit as normal."
      },
      {
        "who": "I",
        "text": "Really? I was about to ring my daughter and tell her to keep them away."
      },
      {
        "who": "C",
        "text": "There's no need. If anyone at home had an open wound or a serious illness, they could mention it to their own doctor. Is anyone like that?"
      },
      {
        "who": "I",
        "text": "No, they're all healthy. So why does it matter, then?"
      },
      {
        "who": "C",
        "text": "Because surgery opens the skin. If MRSA got into the wound, or around your new knee joint, it could cause a serious infection that's harder to treat. So we clear as much as we can beforehand."
      },
      {
        "who": "I",
        "text": "I see. What do I have to do?"
      },
      {
        "who": "C",
        "text": "There are two parts, both for five days. First, a nasal ointment. Put a match-head-sized amount on a cotton bud or clean fingertip, apply it inside each nostril, then press the sides of your nose together to spread it. Three times a day for five days."
      },
      {
        "who": "I",
        "text": "Three times a day, five days. And the second part?"
      },
      {
        "who": "C",
        "text": "Second, a body wash, used instead of soap once a day for the same five days. Apply it to wet skin, especially armpits, groin and skin folds, leave it on as the leaflet says, then rinse. Wash your hair with it on the days the leaflet shows."
      },
      {
        "who": "I",
        "text": "That sounds manageable."
      },
      {
        "who": "C",
        "text": "Use a clean towel each time, and change your bedding and nightclothes at the start and again during the course, so the germ doesn't come back from the fabric."
      },
      {
        "who": "I",
        "text": "Lots of washing! And then what?"
      },
      {
        "who": "C",
        "text": "Two days after you finish, we'll swab your nose again. If it's clear, that's it. If it's still positive, we'd usually repeat the treatment, and the surgical team would plan around it, for example choosing a particular antibiotic on the day."
      },
      {
        "who": "I",
        "text": "But my operation is still on?"
      },
      {
        "who": "C",
        "text": "Yes, it's not cancelled. The date would only change if your surgeon decided it wasn't safe, for example if you developed an actual infection, like an infected cut or a chest infection."
      },
      {
        "who": "I",
        "text": "Oh, thank goodness. That's the main thing."
      },
      {
        "who": "C",
        "text": "We'll post the pack from the hospital pharmacy. It should arrive within a few days, with a leaflet repeating all this. If it hasn't come by the end of the week, ring us."
      },
      {
        "who": "I",
        "text": "Should I start straight away when it comes?"
      },
      {
        "who": "C",
        "text": "Yes, start the day it arrives. So I know I've explained clearly, could you tell me when you'll start and how long it lasts?"
      },
      {
        "who": "I",
        "text": "I start the day the pack comes. Ointment in my nose three times a day and the body wash every day, for five days. Fresh towels and change the bedding."
      },
      {
        "who": "C",
        "text": "Exactly right. If you're unsure once you have the pack, ring the clinic number on the leaflet. It's the line I'm calling from."
      },
      {
        "who": "I",
        "text": "Lovely. And will I get a letter about the second swab?"
      },
      {
        "who": "C",
        "text": "Rather than leave you waiting for a letter, I'll ring you myself with the result. Is this the best number?"
      },
      {
        "who": "I",
        "text": "Yes, this one. Thank you, I feel so much better. I'll tell my daughter the children can still come."
      },
      {
        "who": "C",
        "text": "Please do. Lots of people find that word frightening, so I'm glad we talked. Any other questions?"
      },
      {
        "who": "I",
        "text": "No, I think that's everything. Thank you, dear."
      }
    ],
    "words": 718,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          3,
          4,
          5
        ],
        "how": "Gives the result in one sentence, then stops and invites her reaction."
      },
      {
        "bullet": 2,
        "turns": [
          7,
          8,
          9
        ],
        "how": "Explains carrying MRSA versus having an infection, and that she is not ill."
      },
      {
        "bullet": 3,
        "turns": [
          9,
          10,
          11,
          12
        ],
        "how": "States the low risk to healthy family and grandchildren and the handwashing and towel precautions."
      },
      {
        "bullet": 4,
        "turns": [
          12,
          13
        ],
        "how": "Explains the risk to the wound and the new joint so the treatment makes sense."
      },
      {
        "bullet": 5,
        "turns": [
          15,
          16,
          17,
          18,
          19
        ],
        "how": "Explains the ointment three times daily for five days, body and hair wash use, and towels and bedding."
      },
      {
        "bullet": 6,
        "turns": [
          20,
          21
        ],
        "how": "Repeat swab two days after the course, and what happens if still positive."
      },
      {
        "bullet": 7,
        "turns": [
          22,
          23,
          24
        ],
        "how": "Says clearly the operation is not cancelled and what would change the date."
      },
      {
        "bullet": 8,
        "turns": [
          25,
          26
        ],
        "how": "Pack posted from the hospital pharmacy, expected within days, start on arrival."
      },
      {
        "bullet": 9,
        "turns": [
          27,
          28,
          29,
          30,
          31
        ],
        "how": "Teach-back of start and duration, the number to ring, and a promise to phone after the repeat swab."
      }
    ],
    "concern": {
      "turns": [
        4,
        6,
        7,
        9,
        10,
        11,
        23,
        24
      ],
      "how": "She raises the superbug fear, her grandchildren and cancellation; each is answered in turn with the carrier-versus-infection distinction, ordinary hygiene for family, and a clear statement that the operation stands."
    },
    "safety": [
      {
        "point": "Carrying MRSA is not the same as an infection; she is not ill.",
        "turn": 7
      },
      {
        "point": "Decolonisation reduces the risk of wound and joint infection after surgery.",
        "turn": 13
      },
      {
        "point": "The date changes only if the surgeon judges it unsafe, for example if a real infection develops.",
        "turn": 23
      }
    ],
    "notes": "Body-wash contact time and hair-wash days are left to the product leaflet because they differ between products. 'Within the next few days' for delivery is general. Please check the plan if the repeat swab is positive (repeat course and a choice of surgical antibiotic) against local policy."
  },
  "spk-nursing-a-smoker-due-for-an-operation-in-four-weeks": {
    "candidateLabel": "Nurse",
    "interlocutorLabel": "Patient",
    "turns": [
      {
        "who": "C",
        "text": "Good afternoon, I'm one of the pre-assessment nurses, checking a few things before your hernia repair. I expect smoking has come up. Before I add anything, what have you been told about smoking and this operation?"
      },
      {
        "who": "I",
        "text": "Here we go. My GP, the surgeon and the woman on the phone all told me to stop. Like I haven't heard it before."
      },
      {
        "who": "C",
        "text": "It sounds like you've heard it a lot. How did those conversations go?"
      },
      {
        "who": "I",
        "text": "Lectures. Nobody asked me anything. They just said stop, like it's easy."
      },
      {
        "who": "C",
        "text": "That sounds frustrating. I'd rather hear from you. Have you tried to stop before?"
      },
      {
        "who": "I",
        "text": "Twice. The first time I lasted about three months, the second about a couple of weeks."
      },
      {
        "who": "C",
        "text": "That's real effort. Three months is a long time. What helped you then?"
      },
      {
        "who": "I",
        "text": "Patches the first time, and my wife stopped with me. The second time I just went cold turkey."
      },
      {
        "who": "C",
        "text": "And what was going on when you started again?"
      },
      {
        "who": "I",
        "text": "First time, my dad died. Second time, stress at work, and everyone on break was smoking. I'll only fail again, so what's the point?"
      },
      {
        "who": "C",
        "text": "Those were hard moments, and many people restart at times like that. It doesn't mean you can't do it. May I explain what smoking does to this particular operation, rather than to health in general?"
      },
      {
        "who": "I",
        "text": "Go on, then."
      },
      {
        "who": "C",
        "text": "During the anaesthetic, a smoker's airways are more easily irritated, so breathing can be harder to manage. Afterwards, chest infections are more likely, and coughing strains the repair. Smoking also cuts the oxygen reaching the skin, so the wound heals more slowly and infects more easily, and the hernia is more likely to come back."
      },
      {
        "who": "I",
        "text": "I didn't know about it coming back."
      },
      {
        "who": "C",
        "text": "The good news is that stopping even for the four weeks before, and the weeks after while you heal, makes a real, measurable difference. It's worth doing even if you plan to start again afterwards."
      },
      {
        "who": "I",
        "text": "Hang on. If I tell them I'm still smoking, will they cancel it? That's what I'm actually worried about."
      },
      {
        "who": "C",
        "text": "I'll be honest with you: no. Your operation doesn't depend on you stopping. You're on the list either way. We encourage it because it lowers your risks, not as a condition."
      },
      {
        "who": "I",
        "text": "Right. That's a relief, actually. Nobody's said that."
      },
      {
        "who": "C",
        "text": "So rather than more advice, can I tell you about practical help? The stop smoking service gives you an adviser for weekly support and nicotine replacement, such as patches, gum or a mouth spray for cravings. People using the service are much more likely to succeed than going alone, and they start quickly."
      },
      {
        "who": "I",
        "text": "Patches did help before. Gum's not bad either."
      },
      {
        "who": "C",
        "text": "What's one thing you'd be willing to do this week? You choose, however small."
      },
      {
        "who": "I",
        "text": "I could stop smoking in the car and in the house. And maybe try the patches again."
      },
      {
        "who": "C",
        "text": "That's a good start, and it's your choice. Can I mention the day of surgery? Ideally don't smoke that morning, but if you have, please tell the anaesthetist. Smoking affects how much oxygen your blood can carry, so they need to know to keep you safe."
      },
      {
        "who": "I",
        "text": "So I won't get sent home for it?"
      },
      {
        "who": "C",
        "text": "No. Being honest won't cost you your place on the list. They'd much rather know, because hiding it is what could cause problems. Now, what would you like me to write in your notes about today?"
      },
      {
        "who": "I",
        "text": "Put that I'm thinking about it and I'll try the patches. Not that I refused advice."
      },
      {
        "who": "C",
        "text": "That's fair. I'll write that we discussed how smoking affects this operation, that you've chosen to stop smoking in the car and house this week, and that you'd like to try patches. Would you like me to refer you to the stop smoking service from here, today, so they ring you?"
      },
      {
        "who": "I",
        "text": "Yeah, go on. I'd probably put it off otherwise."
      },
      {
        "who": "C",
        "text": "I'll do it before you leave. I'll also write their number on this card, so you can ring them yourself if you haven't heard from them. Could you tell me what you're going to do?"
      },
      {
        "who": "I",
        "text": "No smoking in the car or the house this week, they'll ring me about patches, and I tell the anaesthetist if I've smoked on the day."
      },
      {
        "who": "C",
        "text": "Exactly. And the operation goes ahead either way. How are you feeling about it now?"
      },
      {
        "who": "I",
        "text": "Better. It's the first time someone's asked me rather than told me."
      },
      {
        "who": "C",
        "text": "I'm glad. Let me make that referral now, while you're here."
      }
    ],
    "words": 729,
    "coverage": [
      {
        "bullet": 1,
        "turns": [
          1,
          2,
          3,
          4
        ],
        "how": "Asks what he has been told and how those conversations went before giving any information."
      },
      {
        "bullet": 2,
        "turns": [
          5,
          6,
          7,
          8,
          9,
          10
        ],
        "how": "Explores both attempts: length, what helped and what led to restarting."
      },
      {
        "bullet": 3,
        "turns": [
          11,
          12,
          13,
          14
        ],
        "how": "Explains the operation-specific effects: anaesthetic and airway, chest infection, wound healing and recurrence."
      },
      {
        "bullet": 4,
        "turns": [
          15
        ],
        "how": "States that stopping for four weeks before and the weeks after makes a measurable difference, even if he restarts later."
      },
      {
        "bullet": 5,
        "turns": [
          16,
          17,
          18
        ],
        "how": "Answers directly and honestly that the operation does not depend on stopping."
      },
      {
        "bullet": 6,
        "turns": [
          19,
          20
        ],
        "how": "Describes the stop smoking service, weekly support and nicotine replacement, and quick start."
      },
      {
        "bullet": 7,
        "turns": [
          21,
          22,
          23
        ],
        "how": "He chooses one small step for this week: no smoking in the car or house."
      },
      {
        "bullet": 8,
        "turns": [
          23,
          24,
          25
        ],
        "how": "Explains the day of surgery, telling the anaesthetist, and that honesty will not cost his place."
      },
      {
        "bullet": 9,
        "turns": [
          25,
          26,
          27,
          28,
          29,
          30
        ],
        "how": "Agrees what goes in the notes, refers him from clinic today, gives a number and checks his plan."
      }
    ],
    "concern": {
      "turns": [
        4,
        10,
        11,
        16,
        17,
        18,
        24,
        25
      ],
      "how": "His expectation of a lecture is met by asking first; his fear of failing is normalised using his own history; his belief that the operation will be refused is corrected honestly and repeated for the day of surgery."
    },
    "safety": [
      {
        "point": "Smoking on the morning of surgery must be disclosed to the anaesthetist.",
        "turn": 23
      },
      {
        "point": "Smoking raises the risk of airway problems, chest infection, poor wound healing and hernia recurrence.",
        "turn": 13
      },
      {
        "point": "The operation is not conditional on stopping, so he has no reason to hide smoking.",
        "turn": 17
      }
    ],
    "notes": "The waiting time for the stop smoking service is kept general because the card gives none. Please confirm that the 'operation not conditional' statement matches local policy for elective hernia repair, as some units have stricter rules."
  }
};
