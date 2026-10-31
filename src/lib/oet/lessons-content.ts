// GENERATED from Desktop\oet test\AlmiOET_Lessons_source_v1.json (beta-g PASS, Nov 2026) — 21 short lessons: Writing 6,
// Speaking 9, one technique lesson per Reading/Listening part. Original wording; not the official descriptors. Edit the source
// and regenerate rather than hand-editing here. Read through src/lib/oet/lessons.ts.
import type { Lesson } from "./lessons";

export const LESSONS: readonly Lesson[] = [
  {
    "area": "writing",
    "id": "writing-purpose",
    "criterion": "purpose",
    "title": "Make the purpose clear at once",
    "looksFor": "The assessor wants to know, within the first lines, why you are writing and what you want the reader to do. A good letter states the purpose early and clearly, then supports it with the details that follow. The reader should never need to search for the request. If the purpose is vague, buried or only hinted at, the whole letter loses strength.",
    "rules": [
      "State the reason for writing in the first paragraph, ideally in the first or second sentence.",
      "Name the action you want, such as assessment, follow-up or ongoing care, not just the patient.",
      "Mention any urgency early if the case needs prompt attention.",
      "Restate the specific request briefly in the closing paragraph.",
      "Never open with the patient's full history before saying why you are writing."
    ],
    "example": {
      "situation": "A practice nurse refers Mr Daniel Okafor, a fifty-eight-year-old man with type two diabetes and a slow-healing foot ulcer, to a community podiatry clinic.",
      "weak": "I am writing regarding Mr Daniel Okafor, who has been attending our practice for some years. He has type two diabetes, which was diagnosed some time ago. He lives with his wife and works as a taxi driver.",
      "good": "I am writing to refer Mr Daniel Okafor, who has type two diabetes, for your assessment and management of a slow-healing ulcer on his left foot. I would be grateful if you could see him soon, as the wound has not improved over the past three weeks.",
      "why": "The weak opening describes the patient but never says what the reader should do. The good one gives the request, the problem and the urgency in two sentences, so the podiatrist knows the task at once."
    },
    "selfCheck": [
      {
        "q": "Where should the main purpose of a referral letter usually appear?",
        "options": [
          "In the closing paragraph only",
          "In the opening paragraph",
          "After the social history"
        ],
        "answer": "b",
        "explain": "The reader should learn why you are writing straight away, so place the purpose in the opening paragraph."
      },
      {
        "q": "Which opening sentence states a clear purpose?",
        "options": [
          "I am writing about Mrs Lee, who was admitted last week.",
          "Mrs Lee is a retired teacher who lives alone.",
          "I am writing to request your review of Mrs Lee's worsening breathlessness."
        ],
        "answer": "c",
        "explain": "Only this option tells the reader what action is wanted and why. The others describe the patient without any request."
      },
      {
        "q": "Your patient needs to be seen within days. What should you do?",
        "options": [
          "Signal the urgency early in the letter",
          "Leave urgency out, as the reader will decide",
          "Mention it only in the final line"
        ],
        "answer": "a",
        "explain": "Urgency changes what the reader does, so it belongs near the start, alongside the purpose."
      }
    ]
  },
  {
    "area": "writing",
    "id": "writing-content",
    "criterion": "content",
    "title": "Choose the case notes that matter",
    "looksFor": "Here the assessor checks whether you have picked the information the reader really needs and reported it accurately. Not every note in the case belongs in the letter. Include everything relevant to the purpose and leave out what the reader does not need. Facts must match the notes exactly, without errors or invented details.",
    "rules": [
      "Ask of every note: will this reader need it to act or to continue care?",
      "Include current problems, recent changes, relevant treatment and any risks the reader must manage.",
      "Leave out old, resolved or unrelated details, such as a childhood fracture in a heart referral.",
      "Report facts from the notes accurately; never add symptoms, results or diagnoses yourself.",
      "Check that nothing essential, such as an allergy, is missing before you finish."
    ],
    "example": {
      "situation": "A ward nurse writes a discharge letter to a district nurse for Mrs Ellen Price, seventy-nine, going home after a hip replacement. The notes include a penicillin allergy and a childhood tonsillectomy.",
      "weak": "Mrs Price had her tonsils removed as a child and enjoys gardening. She has had a hip replacement and is now going home.",
      "good": "Mrs Price is going home today following a right hip replacement. Please note that she is allergic to penicillin. She will need regular wound checks and support to continue her exercise programme at home.",
      "why": "The weak version keeps irrelevant history and drops the allergy, which matters for safety. The good version gives the district nurse exactly what they need to care for her at home."
    },
    "selfCheck": [
      {
        "q": "Your patient is referred for chest pain and had appendicitis twenty years ago. Should you include it?",
        "options": [
          "Yes, all history must be included",
          "No, unless it is relevant to the referral",
          "Yes, but only in the first paragraph"
        ],
        "answer": "b",
        "explain": "Old, unrelated history does not help the reader act, so leave it out unless it links to the current problem."
      },
      {
        "q": "Which detail is almost always relevant in a discharge or transfer letter?",
        "options": [
          "A known drug allergy",
          "The patient's favourite hobby",
          "The name of the admitting porter"
        ],
        "answer": "a",
        "explain": "Allergies affect safe treatment by the next team, so they nearly always belong in the letter."
      },
      {
        "q": "You suspect the patient also has anaemia, but the notes do not say so. What should you do?",
        "options": [
          "Add it as a likely diagnosis",
          "Mention it as a possibility",
          "Leave it out, because it is not in the notes"
        ],
        "answer": "c",
        "explain": "Content must reflect the notes accurately. Adding your own diagnosis introduces information the case does not support."
      }
    ]
  },
  {
    "area": "writing",
    "id": "writing-conciseness-and-clarity",
    "criterion": "conciseness-and-clarity",
    "title": "Say it briefly and clearly",
    "looksFor": "The assessor looks at how efficiently you deliver the key information. A strong letter summarises related notes, avoids repetition and keeps each sentence easy to follow. The reader should grasp the main points in one quick read. Long lists of minor details, padding and vague phrasing all make the letter harder to use. Aim for a body of about 180–200 words.",
    "rules": [
      "Combine related notes into one sentence rather than listing each observation separately.",
      "Cut filler phrases such as 'I would like to inform you that'.",
      "Say each fact once; do not repeat it in the closing paragraph.",
      "Prefer clear, specific words to vague ones like 'some issues' or 'things'.",
      "Keep the body close to 180–200 words by summarising, not by dropping key facts."
    ],
    "example": {
      "situation": "A GP refers Mr Tom Hughes, sixty-four, to a respiratory clinic. The notes record a cough for two months, breathlessness on stairs and recent weight loss.",
      "weak": "I would like to inform you that Mr Hughes has a cough. The cough has been present for two months. He also gets breathless. The breathlessness happens on stairs. He has also lost some weight recently, which is a concern.",
      "good": "Mr Hughes has had a persistent cough for two months, with breathlessness on climbing stairs and recent weight loss.",
      "why": "The weak version spreads three linked symptoms over five short sentences with filler. The good version groups them into one clear sentence, saving words without losing any fact."
    },
    "selfCheck": [
      {
        "q": "What is the best way to report several related symptoms?",
        "options": [
          "Give each symptom its own sentence",
          "Group them in one clear sentence",
          "Leave out all but the main one"
        ],
        "answer": "b",
        "explain": "Grouping linked symptoms saves words and helps the reader see the picture, while keeping every relevant fact."
      },
      {
        "q": "Which phrase is filler that you can usually cut?",
        "options": [
          "I am writing to refer",
          "Please arrange a review",
          "I would like to take this opportunity to inform you that"
        ],
        "answer": "c",
        "explain": "This long phrase adds nothing. The other two carry the purpose or the request, so they are useful."
      },
      {
        "q": "Your letter body is far over the suggested length. What should you do first?",
        "options": [
          "Remove irrelevant details and merge related facts",
          "Delete the allergy information",
          "Remove the request from the final paragraph"
        ],
        "answer": "a",
        "explain": "Shorten by cutting what the reader does not need and by summarising. Never remove safety facts or the request."
      }
    ]
  },
  {
    "area": "writing",
    "id": "writing-genre-and-style",
    "criterion": "genre-and-style",
    "title": "Write as one professional to another",
    "looksFor": "This criterion is about tone and register. The assessor checks that your letter sounds like a professional writing to a colleague, and that it suits the reader's role. The style should be formal, polite and objective. Avoid chatty phrases, emotional language and unexplained abbreviations. For a non-clinical reader, such as a social worker, explain medical terms simply.",
    "rules": [
      "Use a formal, polite tone throughout, without slang, contractions or casual greetings.",
      "Report facts objectively; avoid judging the patient or showing strong emotion.",
      "Write abbreviations in full unless the reader will certainly understand them.",
      "Adjust technical language to the reader, and explain terms for non-clinical readers.",
      "Use polite requests such as 'I would be grateful if you could…' rather than commands."
    ],
    "example": {
      "situation": "A hospital nurse writes to a school nurse about Leo Bennett, aged nine, who has just been diagnosed with asthma, so the school can support him.",
      "weak": "Hi! Leo's got asthma now, poor kid. He's on his inhaler PRN, so just make sure he takes it when he's wheezy. Thanks a lot!",
      "good": "Leo has recently been diagnosed with asthma. He uses a reliever inhaler when needed, for example if he becomes wheezy or short of breath. I would be grateful if you could ensure he can use it during the school day.",
      "why": "The weak version is casual and emotional, uses contractions, and relies on an abbreviation. The good version is polite and objective, and states the request clearly and courteously."
    },
    "selfCheck": [
      {
        "q": "Which sentence suits a formal letter to a colleague?",
        "options": [
          "Just give him a ring if he's not OK.",
          "I would be grateful if you could contact him if his condition changes.",
          "Phone him ASAP if there's any trouble."
        ],
        "answer": "b",
        "explain": "This option is polite, formal and clear. The others are casual and use contractions or abbreviations."
      },
      {
        "q": "You are writing to a social worker. How should you handle the term 'dysphagia'?",
        "options": [
          "Explain it simply, for example 'difficulty swallowing'",
          "Use it without explanation",
          "Replace it with 'eating problems'"
        ],
        "answer": "a",
        "explain": "A non-clinical reader needs plain terms, but the meaning must stay accurate. 'Eating problems' is too vague."
      },
      {
        "q": "Which statement is objective?",
        "options": [
          "Sadly, she refuses to look after herself.",
          "She is a difficult and lazy patient.",
          "She has not attended her last two appointments."
        ],
        "answer": "c",
        "explain": "It reports a fact without judgement. The other options express opinion or emotion about the patient."
      }
    ]
  },
  {
    "area": "writing",
    "id": "writing-organisation-and-layout",
    "criterion": "organisation-and-layout",
    "title": "Organise the letter so it flows",
    "looksFor": "The assessor checks that your letter is easy to follow from start to finish. Information should be grouped into clear paragraphs, in an order that makes sense for the reader. The layout should follow normal letter conventions: the reader's details, the date, a greeting, a subject line, and a closing with your name and role. Related points belong together, not scattered.",
    "rules": [
      "Use a clear layout: recipient, date, greeting, subject line, body and sign-off.",
      "Open with the purpose, then give background and the current situation, and finish with the request.",
      "Give each paragraph one main theme, such as medical progress or social situation.",
      "Order points by importance to the reader, not by the date they appear in the notes.",
      "Link paragraphs with simple signposts such as 'Since admission' or 'Regarding her home situation'."
    ],
    "example": {
      "situation": "A physiotherapist writes a transfer letter for Mrs Aisha Rahman, eighty-one, who is moving from hospital to a rehabilitation unit after a stroke.",
      "weak": "Mrs Rahman lives alone. She had a stroke. She walks with a frame now. Her daughter visits. Please continue her therapy. Her blood pressure is controlled. She is motivated.",
      "good": "Mrs Rahman is being transferred to your unit for continued rehabilitation following a stroke. Since admission, her mobility has improved, and she now walks short distances with a frame. Her blood pressure is well controlled. Regarding her home situation, she lives alone, and her daughter visits regularly. I would be grateful if you could continue her therapy programme.",
      "why": "The weak version jumps between social, medical and request points in no order. The good version moves from purpose to progress, then home situation, then the request, so the reader follows easily."
    },
    "selfCheck": [
      {
        "q": "Where does the request usually sit in a well-organised letter?",
        "options": [
          "In the opening, and again briefly at the close",
          "Only in the middle paragraph",
          "Scattered through each paragraph"
        ],
        "answer": "a",
        "explain": "State the purpose at the start, then restate the specific request briefly at the end, so the letter feels complete."
      },
      {
        "q": "The case notes are in date order. How should you order your paragraphs?",
        "options": [
          "Exactly as the notes run",
          "By what the reader most needs to know",
          "Alphabetically by topic"
        ],
        "answer": "b",
        "explain": "Case notes are often in date order, but the reader needs the most relevant information first. Reorganise it for them."
      },
      {
        "q": "What is the subject line of a referral letter for?",
        "options": [
          "To sign off the letter",
          "To list all the medicines",
          "To identify the patient the letter is about"
        ],
        "answer": "c",
        "explain": "The subject line lets the reader see at a glance which patient the letter concerns, before reading the body."
      }
    ]
  },
  {
    "area": "writing",
    "id": "writing-language",
    "criterion": "language",
    "title": "Write accurate grammar and vocabulary",
    "looksFor": "The assessor looks at the accuracy of your English: grammar, vocabulary, spelling and punctuation. Small slips matter less than errors that confuse the reader or change the clinical meaning. Tense errors are common, for example mixing past events with current care. A range of structures helps, but accuracy comes first. Clear, correct simple sentences beat complex ones full of mistakes.",
    "rules": [
      "Use the past simple for finished events, such as 'was admitted', and the present for current status.",
      "Use the present perfect for changes up to now, such as 'has improved since admission'.",
      "Check articles, plurals and subject–verb agreement in every sentence.",
      "Spell medical and everyday words correctly, and keep a few minutes at the end to proofread.",
      "Choose a simpler correct structure when you are unsure of a complex one."
    ],
    "example": {
      "situation": "A ward nurse writes a discharge letter to a GP about Mr Peter Walsh, seventy, who was treated in hospital for a chest infection.",
      "weak": "Mr Walsh admit to the ward on Monday with chest infection. He is treated with antibiotics and his breathing improve since then. He have been discharged home today.",
      "good": "Mr Walsh was admitted to the ward on Monday with a chest infection. He was treated with antibiotics, and his breathing has improved since then. He has been discharged home today.",
      "why": "The weak version has wrong verb forms, a missing article and agreement errors, which blur when things happened. The good version uses correct tenses, so the GP knows what is finished and what is current."
    },
    "selfCheck": [
      {
        "q": "Which sentence is correct?",
        "options": [
          "Her pain has reduced since the operation.",
          "Her pain have reduced since the operation.",
          "Her pain reducing since the operation."
        ],
        "answer": "a",
        "explain": "The present perfect 'has reduced', with a singular subject, is correct for a change that continues up to now."
      },
      {
        "q": "Which error is most serious in a clinical letter?",
        "options": [
          "A missing comma in a long sentence",
          "A tense error that makes a stopped medicine seem current",
          "A slightly informal word choice"
        ],
        "answer": "b",
        "explain": "An error that changes the clinical meaning could affect care. Minor punctuation slips are far less serious."
      },
      {
        "q": "You are unsure whether a complex sentence is correct. What is the best choice?",
        "options": [
          "Keep it and hope it is right",
          "Make it even longer to show range",
          "Rewrite it as two clear, correct sentences"
        ],
        "answer": "c",
        "explain": "Accuracy matters more than complexity. Two correct sentences communicate better than one confused one."
      }
    ]
  },
  {
    "area": "speaking",
    "id": "speaking-intelligibility",
    "criterion": "intelligibility",
    "title": "Being easy to understand",
    "looksFor": "The assessor asks one simple question: can a listener follow you without effort? They notice how clearly you form sounds, where you put stress, and whether your rhythm and intonation support meaning. An accent is fine. What matters is that key words, such as medicine names and instructions, come across the first time, so the patient never has to guess.",
    "rules": [
      "Slow down slightly on key words such as medicine names, body parts and times.",
      "Stress the word that carries the new or important information in each sentence.",
      "Pronounce word endings clearly, especially plural s and past tense ed.",
      "Pause briefly between ideas so the listener can process each one.",
      "Never rush the end of an instruction, because that is usually where the action is."
    ],
    "example": {
      "situation": "A pharmacist explains to a patient how to use a new preventer inhaler. The patient looks unsure and leans closer to hear.",
      "weak": "(Fast, flat, no pauses) So you shake it breathe out put it in your mouth press and breathe in hold it then rinse your mouth after OK.",
      "good": "(Steady, with pauses) First, shake the inhaler. Then breathe out gently. Put it in your mouth, press once, and breathe in slowly. Hold your breath for a moment. Afterwards, rinse your mouth with water.",
      "why": "The good version separates the steps with pauses and stresses the action words. The patient hears each step clearly instead of decoding one long stream of sound."
    },
    "selfCheck": [
      {
        "q": "Does a strong accent lower your intelligibility score on its own?",
        "options": [
          "Yes, always",
          "No, only if it makes you hard to follow",
          "Only if the patient is elderly"
        ],
        "answer": "b",
        "explain": "An accent is normal. The real question is whether the listener can understand you without strain."
      },
      {
        "q": "Which words should you stress in 'Take it after food, not before'?",
        "options": [
          "after and before",
          "take",
          "it"
        ],
        "answer": "a",
        "explain": "The contrast between after and before is the key message, so stressing those words makes it clear."
      },
      {
        "q": "A patient keeps saying 'Sorry?'. What is the best first step?",
        "options": [
          "Repeat the same sentence faster",
          "Speak much louder",
          "Slow down and say it in shorter chunks"
        ],
        "answer": "c",
        "explain": "A slower pace and shorter chunks usually fix the problem. Extra speed or volume does not."
      }
    ]
  },
  {
    "area": "speaking",
    "id": "speaking-fluency",
    "criterion": "fluency",
    "title": "Keeping your speech flowing",
    "looksFor": "Fluency is about the flow of your speech. The assessor listens for a natural, even pace without long silences, many false starts or constant repetition. Some hesitation is normal, because everyone pauses to think. Problems start when pauses break up your meaning or when you keep restarting sentences. Fluent speakers use short holding phrases and linking words to keep going while they plan.",
    "rules": [
      "Use short holding phrases such as 'Let me think' or 'Right, so' instead of long silences.",
      "Plan the opening of each stage during the preparation time, so you can start smoothly.",
      "If you make a small mistake, carry on rather than restarting the whole sentence.",
      "Keep a steady pace; speaking very fast is not the same as being fluent."
    ],
    "example": {
      "situation": "A physiotherapist explains to a patient with low back pain why gentle movement is better than bed rest.",
      "weak": "So you should... er... you should not... er... the bed... you should not, I mean, stay in the... er... the bed all day because the... the muscles they... er... get stiff.",
      "good": "So, the best thing is to keep moving gently. Staying in bed all day tends to make the muscles stiffer, and that can make the pain last longer. Short, regular walks are a good start.",
      "why": "The weak turn breaks into pieces with restarts and fillers, so the message gets lost. The good turn moves at a steady pace and links ideas with words like 'and' and 'so'."
    },
    "selfCheck": [
      {
        "q": "Which habit most damages fluency?",
        "options": [
          "Restarting sentences again and again",
          "Pausing briefly between ideas",
          "Using 'well' now and then"
        ],
        "answer": "a",
        "explain": "Short pauses and the odd filler are natural. Repeated restarts break the flow and make you hard to follow."
      },
      {
        "q": "You forget a word in the middle of a sentence. What should you do?",
        "options": [
          "Stop and wait until you remember it",
          "Apologise several times",
          "Describe it in other words and continue"
        ],
        "answer": "c",
        "explain": "Paraphrasing keeps the conversation moving. Long silences and repeated apologies interrupt the flow."
      },
      {
        "q": "Does speaking very quickly show strong fluency?",
        "options": [
          "Yes, faster is always better",
          "No, a steady, natural pace is better",
          "Only in the second role-play"
        ],
        "answer": "b",
        "explain": "Fluency means smooth, even speech. Rushing often causes errors and makes you harder to understand."
      }
    ]
  },
  {
    "area": "speaking",
    "id": "speaking-appropriateness-of-language",
    "criterion": "appropriateness-of-language",
    "title": "Choosing the right words and tone",
    "looksFor": "Here the assessor checks whether your language suits the person and the moment. That means plain words instead of jargon, a polite and caring tone, and a register that fits a patient, carer or owner. It also means explaining any medical term you really need to use. Sounding too casual, too blunt or too technical will all lower this score.",
    "rules": [
      "Replace medical terms with everyday words, or explain the term straight after you say it.",
      "Soften difficult news and requests with phrases like 'I'm afraid' or 'Would you mind'.",
      "Avoid slang and over-familiar words such as 'mate' or 'sweetie'.",
      "Match your tone to the person's feelings, for example calm and gentle with a worried carer.",
      "Never give a bare command where a polite request or suggestion would work."
    ],
    "example": {
      "situation": "A GP tells a middle-aged man that his routine blood test shows raised cholesterol.",
      "weak": "Your lipid profile shows hypercholesterolaemia, so you need to start a statin and change your diet.",
      "good": "Your blood test shows that your cholesterol is a bit higher than we'd like. Cholesterol is a type of fat in the blood. A few things can help, such as changes to your diet, and possibly a tablet. Shall we talk them through?",
      "why": "The weak turn uses jargon and sounds like an order. The good turn uses plain words, explains the key term and invites the patient to share the decision."
    },
    "selfCheck": [
      {
        "q": "A patient's daughter is upset. Which opening fits best?",
        "options": [
          "Calm down, it's not that bad.",
          "Right, let's get on with it.",
          "I can see this is worrying for you."
        ],
        "answer": "c",
        "explain": "It recognises her feelings in a calm, respectful way. The other two dismiss or rush her."
      },
      {
        "q": "You need to use the word 'biopsy'. What should you do?",
        "options": [
          "Explain it simply, for example 'a small sample of tissue'",
          "Say it and move on quickly",
          "Spell it out letter by letter"
        ],
        "answer": "a",
        "explain": "Using a necessary term is fine if you explain it at once in everyday words."
      },
      {
        "q": "Which phrase is most appropriate with a patient?",
        "options": [
          "Take your top off now.",
          "Would you mind removing your top so I can listen to your chest?",
          "Hey mate, top off please."
        ],
        "answer": "b",
        "explain": "It is polite, gives the reason and avoids both bare commands and slang."
      }
    ]
  },
  {
    "area": "speaking",
    "id": "speaking-resources-of-grammar-and-expression",
    "criterion": "resources-of-grammar-and-expression",
    "title": "Using a range of grammar and vocabulary",
    "looksFor": "This criterion looks at the range and accuracy of your grammar and vocabulary. The assessor wants to hear you express ideas precisely, with varied sentence types and well-chosen words. Errors matter most when they change meaning or confuse the listener. Simple, correct language is acceptable, but a wider range helps you explain, reassure and advise more exactly.",
    "rules": [
      "Use modal verbs such as might, should and could to show how likely something is.",
      "Mix short sentences with linked ones, using because, although, if and so that.",
      "Use the present perfect for problems that started in the past and continue now.",
      "Learn a few ways to say each key idea, such as 'improve', 'ease' and 'settle'.",
      "Never sacrifice clarity for complexity; a correct simple sentence beats a confusing long one."
    ],
    "example": {
      "situation": "An occupational therapist advises a woman recovering from a hip replacement about staying safe at home.",
      "weak": "You must not sit low chair. You must use the frame. You must not bend. You must call if problem.",
      "good": "It's best to avoid low chairs for now, because bending too far can strain the new joint. If you use your frame around the house, you'll be much steadier. And if anything worries you, do give us a call.",
      "why": "The weak turn repeats one structure and drops small words like articles. The good turn uses linking words, conditionals and softer modals, so the advice is clearer and kinder."
    },
    "selfCheck": [
      {
        "q": "Which sentence uses modal verbs most precisely?",
        "options": [
          "You might feel a little sore, but it should settle in a few days.",
          "You must maybe rest.",
          "You will be sore always."
        ],
        "answer": "a",
        "explain": "Might and should show likelihood accurately. The other two are ungrammatical or far too absolute."
      },
      {
        "q": "When does a grammar mistake matter most?",
        "options": [
          "Whenever the assessor notices any slip",
          "When it changes or blurs your meaning",
          "Only in the first role-play"
        ],
        "answer": "b",
        "explain": "Small slips are common. Errors that confuse meaning, such as a wrong tense in a history, have more impact."
      },
      {
        "q": "A cough started last week and continues. Which question is correct?",
        "options": [
          "How long do you have the cough?",
          "How long are you having the cough?",
          "How long have you had the cough?"
        ],
        "answer": "c",
        "explain": "The present perfect links a past start to the present, which suits an ongoing symptom."
      }
    ]
  },
  {
    "area": "speaking",
    "id": "speaking-relationship-building",
    "criterion": "relationship-building",
    "title": "Building rapport and trust",
    "looksFor": "The assessor wants to see you build a respectful, caring relationship from the first moment. That starts with a proper greeting and introduction, and an explanation of why you are there. Throughout the role-play, they listen for empathy, a non-judgemental attitude and genuine attention. Acknowledging feelings, rather than ignoring them, is central to a strong score here.",
    "rules": [
      "Greet the person, give your name and role, and explain the purpose of the conversation.",
      "Name the emotion you notice, for example 'You sound really worried about this'.",
      "Never judge choices such as smoking or missed appointments; respond with understanding instead.",
      "Show you are listening with short responses like 'I see' and 'That makes sense'."
    ],
    "example": {
      "situation": "A vet sees the owner of an elderly dog that has gone off his food. The owner is tearful and blames herself for not coming sooner.",
      "weak": "Well, you really should have brought him in earlier. Let's have a look at him now.",
      "good": "Hello, I'm Sam, one of the vets here. I can see you're upset, and that's completely understandable. Small changes like this are easy to miss. You've done the right thing bringing him in today.",
      "why": "The weak turn blames the owner and skips the introduction. The good turn introduces the vet, names her feelings and reassures without judging, which builds trust."
    },
    "selfCheck": [
      {
        "q": "A patient admits he stopped taking his tablets. What is the best response?",
        "options": [
          "That was a silly thing to do.",
          "Thanks for telling me. Can you tell me what made you stop?",
          "You must start again today."
        ],
        "answer": "b",
        "explain": "It thanks him for his honesty and invites an explanation without judging him."
      },
      {
        "q": "What should you do in the first few seconds?",
        "options": [
          "Greet the person, introduce yourself and explain your role",
          "Ask the main question straight away",
          "Read your notes silently"
        ],
        "answer": "a",
        "explain": "A clear greeting and introduction set a respectful tone for the whole conversation."
      },
      {
        "q": "A carer says, 'I'm exhausted.' Which reply builds the relationship best?",
        "options": [
          "Everyone feels like that.",
          "Let's focus on your mother.",
          "Caring for someone is very tiring. How are you coping?"
        ],
        "answer": "c",
        "explain": "It acknowledges her feelings and shows interest in her as a person, not only as a carer."
      }
    ]
  },
  {
    "area": "speaking",
    "id": "speaking-understanding-the-patients-perspective",
    "criterion": "understanding-the-patients-perspective",
    "title": "Understanding the patient's point of view",
    "looksFor": "The assessor checks whether you find out what the person thinks, fears and expects, and then use it. Ask about their ideas, concerns and expectations, and notice clues such as hesitation or a worried comment. Then link your explanations back to what they told you. Asking is not enough; their view must visibly shape the conversation.",
    "rules": [
      "Ask what the person thinks is causing the problem before you give your own view.",
      "Pick up on cues such as 'My aunt had this' and gently explore them.",
      "Ask what they hope for, for example 'What were you hoping we could do today?'.",
      "Refer back to their concern when you explain, using words like 'You mentioned...'.",
      "Never brush aside a fear, even one that seems unlikely to you."
    ],
    "example": {
      "situation": "A practice nurse sees a young man with frequent headaches. He mentions in passing that a friend once had a brain tumour.",
      "weak": "Right. Headaches are usually caused by stress or not drinking enough water. Let's talk about that.",
      "good": "You mentioned your friend's illness. Is that something you're worried about with your own headaches? ... That's a very natural worry. Let me explain why your headaches sound like a different, common type, and what we can check today.",
      "why": "The weak turn ignores the cue about the friend. The good turn explores the fear, accepts it and shapes the explanation around it, so the reassurance actually reaches him."
    },
    "selfCheck": [
      {
        "q": "A patient says, 'I just want to know it's not serious.' What is this?",
        "options": [
          "An expectation you should address",
          "Small talk you can ignore",
          "A sign they are not listening"
        ],
        "answer": "a",
        "explain": "It tells you what they hope to get from the visit, so your explanation should respond to it."
      },
      {
        "q": "Which question best explores the patient's own ideas?",
        "options": [
          "Have you got any pain?",
          "What do you think might be causing it?",
          "When did it start?"
        ],
        "answer": "b",
        "explain": "It asks for the person's own explanation. The others gather facts but not their view."
      },
      {
        "q": "You have explored a concern. What else must you do?",
        "options": [
          "Move quickly to a new topic",
          "Write it down without comment",
          "Link your later advice back to that concern"
        ],
        "answer": "c",
        "explain": "The assessor wants to see the patient's view shape what you say, not just be collected."
      }
    ]
  },
  {
    "area": "speaking",
    "id": "speaking-providing-structure",
    "criterion": "providing-structure",
    "title": "Giving the conversation a clear shape",
    "looksFor": "This criterion is about organising the conversation so the person can follow it. The assessor listens for a clear opening, logical stages, signposting between topics and a proper close. Telling the person what comes next helps them feel in control. A role-play that jumps between topics feels confusing and scores lower here, even when the content is good.",
    "rules": [
      "Outline the plan early, for example 'First I'll ask a few questions, then we'll discuss options'.",
      "Signpost each change of topic with phrases like 'Now I'd like to move on to...'.",
      "Summarise briefly before a new stage, so the person can correct anything you misheard.",
      "Use the preparation time to put the tasks on your card into a logical order.",
      "Close properly by checking for questions and stating the next step."
    ],
    "example": {
      "situation": "A dietitian sees a man newly diagnosed with type two diabetes who wants to know what he can still eat.",
      "weak": "OK, so carbs... actually, how is your weight? Also, do you drink? Anyway, rice is a problem, and you should walk more.",
      "good": "First, I'd like to hear what a normal day of eating looks like for you. Then we'll talk about a few simple changes. Is that all right? ... Thanks. So, moving on to carbohydrates, let's look at the rice you mentioned.",
      "why": "The weak turn jumps between topics with no plan. The good turn sets out the stages, asks permission and signposts each move, so the patient always knows where they are."
    },
    "selfCheck": [
      {
        "q": "What is the main purpose of a short summary in the middle of the conversation?",
        "options": [
          "To check understanding and allow correction",
          "To fill time",
          "To repeat your instructions"
        ],
        "answer": "a",
        "explain": "A summary shows you have listened and gives the person a chance to correct anything."
      },
      {
        "q": "How should you end the role-play?",
        "options": [
          "Stop when the time runs out",
          "Thank them and say goodbye",
          "Check for questions and agree the next step"
        ],
        "answer": "c",
        "explain": "A clear close checks understanding and confirms what happens next, which completes the structure."
      },
      {
        "q": "Which phrase is a signpost?",
        "options": [
          "I see.",
          "Now, let's move on to your medication.",
          "That's interesting."
        ],
        "answer": "b",
        "explain": "It tells the listener the topic is changing. The other two are listening responses."
      }
    ]
  },
  {
    "area": "speaking",
    "id": "speaking-information-gathering",
    "criterion": "information-gathering",
    "title": "Asking questions that get the full picture",
    "looksFor": "The assessor checks how well you find out what you need to know. Strong candidates start with open questions, let the person tell their story without interrupting, and then use focused questions to fill gaps. They clarify vague answers and summarise to confirm. A rapid list of closed questions, or two questions at once, gathers less and sounds like a checklist.",
    "rules": [
      "Start with an open question such as 'Tell me what's been happening'.",
      "Let the person finish speaking before you ask your next question.",
      "Use closed questions only to check specific details, such as timing or severity.",
      "Ask one question at a time; never stack two or three together.",
      "Clarify vague words like 'a lot' or 'funny' by asking what the person means."
    ],
    "example": {
      "situation": "A children's nurse speaks to a father whose toddler has had a fever and is not eating well.",
      "weak": "Does she have a rash? Is she drinking? Has she been sick or had diarrhoea, and when did it start?",
      "good": "Can you tell me how she's been since the fever started? ... You said she's not herself. What do you mean by that? ... And how much has she been drinking today?",
      "why": "The weak turn stacks closed questions, so the father may answer only one. The good turn opens up, clarifies a vague phrase and then focuses, gathering more useful detail."
    },
    "selfCheck": [
      {
        "q": "Which is the best opening question?",
        "options": [
          "Is the pain sharp?",
          "Is it worse at night or in the morning?",
          "Tell me about the pain you've been having."
        ],
        "answer": "c",
        "explain": "An open question lets the person describe the problem in their own words first."
      },
      {
        "q": "A patient says she feels 'a bit off'. What should you do?",
        "options": [
          "Ask her what 'off' feels like for her",
          "Assume she means tired",
          "Move on to the next topic"
        ],
        "answer": "a",
        "explain": "Clarifying a vague phrase avoids wrong assumptions and gathers accurate information."
      },
      {
        "q": "What is wrong with 'Do you smoke or drink, and do you exercise?'",
        "options": [
          "It is too polite",
          "It asks several things at once",
          "It is an open question"
        ],
        "answer": "b",
        "explain": "Stacked questions confuse people and usually get only a partial answer."
      }
    ]
  },
  {
    "area": "speaking",
    "id": "speaking-information-giving",
    "criterion": "information-giving",
    "title": "Explaining clearly and checking understanding",
    "looksFor": "Here the assessor looks at how you share information. They want to see you find out what the person already knows, give information in small, clear chunks and check understanding along the way. Good explanations are tailored to the person, avoid overload and invite questions. Long, one-way speeches score poorly, even when every fact is correct.",
    "rules": [
      "Ask what the person already knows before you start explaining.",
      "Give one idea at a time, then pause to let it sink in.",
      "Check understanding by asking them to say the plan back, not just 'Do you understand?'",
      "Use simple comparisons or everyday examples to explain how something works.",
      "Never deliver a long monologue; invite questions as you go."
    ],
    "example": {
      "situation": "A speech and language therapist explains to a woman how to thicken drinks for her husband, who has swallowing problems after a stroke.",
      "weak": "So he's got dysphagia, so all fluids need thickening to the right consistency with the powder, stir it, wait, check it, every time, soup too, and keep him upright.",
      "good": "Have you come across thickened drinks before? ... OK. Since his stroke, thin drinks can go down the wrong way. This powder makes drinks thicker, so they're safer to swallow. Shall I show you, and then you try one while I watch?",
      "why": "The weak turn packs everything into one stream with jargon. The good turn checks what she knows, explains the reason simply and lets her practise, so understanding is checked."
    },
    "selfCheck": [
      {
        "q": "What is the best way to check understanding?",
        "options": [
          "Repeat everything twice",
          "Ask 'Do you understand?'",
          "Ask them to explain the plan in their own words"
        ],
        "answer": "c",
        "explain": "Saying it back shows what the person has really understood. A quick yes to 'Do you understand?' often hides confusion."
      },
      {
        "q": "Which approach avoids information overload?",
        "options": [
          "Give all the facts quickly at the start",
          "Give small chunks and pause between them",
          "Hand over a leaflet and stop talking"
        ],
        "answer": "b",
        "explain": "Small chunks with pauses give the person time to process each point and ask questions."
      },
      {
        "q": "Before explaining a condition, what should you find out first?",
        "options": [
          "What the person already knows about it",
          "Their full family history",
          "Whether they have read every leaflet"
        ],
        "answer": "a",
        "explain": "Starting from what they know lets you fill gaps without repeating or overloading them."
      }
    ]
  },
  {
    "area": "reading-listening",
    "id": "reading-part-a",
    "criterion": "reading-part-a",
    "title": "Reading Part A: scan fast, copy exactly",
    "looksFor": "This part checks whether you can find facts quickly, as you would when checking several documents on a busy ward. You get four short texts on one topic, 20 questions and strictly 15 minutes. It is a scanning task, not a reading-for-pleasure task. You must locate the right text, find the exact words, and copy them correctly into a gap that makes sense.",
    "rules": [
      "Spend a few seconds learning what each text is: a table, a guideline, a case summary or a list.",
      "For matching questions, look at headings and layout first; you rarely need to read whole paragraphs.",
      "Scan for key words, numbers and names, then read only the sentence around them.",
      "Copy the words exactly as printed, with correct spelling; answers are usually 1–3 words.",
      "Never spend long on one gap; move on and come back if time is left."
    ],
    "example": {
      "situation": "Text C, a leaflet, says: \"Patients should remove contact lenses before the procedure.\" The gap reads: \"Before the procedure, patients must take out their ______.\"",
      "weak": "The candidate reads every text from the top, loses two minutes, then writes \"lens\" from memory. The word is singular and does not match the text.",
      "good": "The candidate knows Text C is the patient leaflet, scans for \"before the procedure\", finds the sentence and copies \"contact lenses\" exactly, checking it fits the gap.",
      "why": "The strong candidate uses the layout to choose the right text, then copies the printed words. The weak answer changes the word form, which can cost the mark."
    },
    "selfCheck": [
      {
        "q": "What is the best first step when Part A begins?",
        "options": [
          "Read Text A carefully from start to finish",
          "Glance at all four texts to see what each one is",
          "Answer the last questions first"
        ],
        "answer": "b",
        "explain": "Knowing what each text contains lets you go straight to the right one for each question."
      },
      {
        "q": "The text says \"oral antibiotics\". Your gap needs a noun phrase. What should you write?",
        "options": [
          "antibiotics by mouth",
          "oral antibiotic",
          "oral antibiotics"
        ],
        "answer": "c",
        "explain": "Copy the exact printed words. Changing the wording or the plural can make the answer wrong."
      },
      {
        "q": "You cannot find an answer after a short search. What should you do?",
        "options": [
          "Move on and return to it at the end",
          "Keep searching until you find it",
          "Leave the rest of the section blank"
        ],
        "answer": "a",
        "explain": "Time is strict in this part. Easier marks later are worth more than one stubborn gap."
      }
    ]
  },
  {
    "area": "reading-listening",
    "id": "reading-part-b",
    "criterion": "reading-part-b",
    "title": "Reading Part B: find the main point",
    "looksFor": "This part checks whether you understand the point of a short workplace text, such as a policy, memo or email. Each extract is about 100–140 words, with one question and 3 options. The question often asks what the text is for, or what staff must do. Wrong options usually repeat words from the text but change the meaning, the person or the condition.",
    "rules": [
      "Read the question stem first so you know whether it asks about purpose, action or detail.",
      "Read the whole extract once; the key point is often near the end.",
      "Check each option against the text and reject any that says more than the text does.",
      "Be careful with options that copy words from the text; matching words do not mean a matching meaning.",
      "Watch small words such as only, all, must, may and unless."
    ],
    "example": {
      "situation": "A memo says: \"Hand gel stations remain at ward entrances. However, staff must now wash with soap and water after caring for any patient with diarrhoea.\" Question: The memo tells staff to…",
      "weak": "The candidate sees option a, \"use hand gel after caring for any patient\", and chooses it because \"hand gel\" and \"any patient\" both appear in the memo.",
      "good": "The candidate notices \"However\" and \"now\". The new instruction is soap and water after certain patients, so they choose \"wash hands with soap after caring for patients with diarrhoea\".",
      "why": "The memo exists to announce a change. The strong candidate follows signal words to the new instruction, while the weak one is caught by a distractor that copies words."
    },
    "selfCheck": [
      {
        "q": "An option uses the same words as the extract. What does this tell you?",
        "options": [
          "It is almost certainly correct",
          "Nothing yet; check that the meaning matches",
          "It is almost certainly wrong"
        ],
        "answer": "b",
        "explain": "Distractors often reuse words. Only the meaning decides the answer, so check it fully."
      },
      {
        "q": "Where is the main purpose of a memo often stated?",
        "options": [
          "Only in the title",
          "In the first word",
          "After a signal word such as however or therefore"
        ],
        "answer": "c",
        "explain": "Signal words often introduce the new rule or the real point of the text."
      },
      {
        "q": "The text says staff \"may\" contact the team. Option a says staff \"must\" contact the team. Is option a right?",
        "options": [
          "No, because may and must differ",
          "Yes, they mean the same",
          "Yes, if the rest of the option matches"
        ],
        "answer": "a",
        "explain": "May gives a choice and must gives an order. That small change makes the option wrong."
      }
    ]
  },
  {
    "area": "reading-listening",
    "id": "reading-part-c",
    "criterion": "reading-part-c",
    "title": "Reading Part C: opinion, reference and paraphrase",
    "looksFor": "This part checks whether you can follow a longer argument about a health topic. There are two texts of around 800 words, each with eight questions of 4 options. Questions test the writer's opinion, what a word like \"this\" refers to, and meaning from context. Correct answers are almost always paraphrased, so you must match ideas, not words.",
    "rules": [
      "Questions follow the order of the text, so use them to find your place.",
      "Read the paragraph the question points to, plus the sentence before and after.",
      "Separate the writer's view from views the writer reports and then disagrees with.",
      "For reference questions, look back to the nearest idea that makes sense in place of the word.",
      "Share the 45 minutes for Parts B and C wisely, and leave enough time for both long texts."
    ],
    "example": {
      "situation": "A text says: \"Many clinicians believe longer appointments always improve care. Yet the evidence suggests that it is how the time is used, not how much, that matters.\" Question: What is the writer's view?",
      "weak": "The candidate picks \"longer appointments always improve care\" because those exact words appear in the text, without noticing who holds this view.",
      "good": "The candidate sees \"Many clinicians believe\" followed by \"Yet\". The writer's view comes after \"Yet\", so they choose \"the quality of the time matters more than its length\".",
      "why": "The first sentence reports other people's view. The writer disagrees after \"Yet\". The correct option paraphrases that idea in new words."
    },
    "selfCheck": [
      {
        "q": "A sentence starts \"Some experts argue…\". What should you check next?",
        "options": [
          "Whether the writer agrees or disagrees",
          "How many experts there are",
          "Nothing; this is the writer's opinion"
        ],
        "answer": "a",
        "explain": "Writers often report a view in order to challenge it. Look for the writer's own response."
      },
      {
        "q": "The correct option in Part C usually…",
        "options": [
          "copies a full sentence from the text",
          "uses the longest wording",
          "says the same idea in different words"
        ],
        "answer": "c",
        "explain": "Correct answers are usually paraphrased. Copied words are more often a trap."
      },
      {
        "q": "A question asks what \"this approach\" refers to. Where do you look?",
        "options": [
          "At the end of the text",
          "Back at the idea just before the phrase",
          "At the title"
        ],
        "answer": "b",
        "explain": "Reference words usually point back to something recently mentioned. Test it by putting that idea in its place."
      }
    ]
  },
  {
    "area": "reading-listening",
    "id": "listening-part-a",
    "criterion": "listening-part-a",
    "title": "Listening Part A: notes, spelling and word limits",
    "looksFor": "This part checks whether you can catch specific details in a consultation and record them, as you would in a clinical note. There are two consultations, each about five minutes, with 12 note-completion gaps each. You hear the audio once. Answers are usually one to three words, so write the words you hear, spelt correctly.",
    "rules": [
      "Use the reading time to study the headings and guess what kind of word each gap needs.",
      "Write the words the speaker actually says; do not explain or summarise them.",
      "Keep answers short, usually one to three words, and leave out extra words.",
      "Spell carefully, especially medical words; a wrong spelling can lose the mark.",
      "If you miss a gap, let it go and listen for the next one."
    ],
    "example": {
      "situation": "The note heading reads \"Symptoms: pain worse when ______\". The patient says: \"It's not bad in the morning, but it really hurts when I climb stairs.\"",
      "weak": "The candidate hears \"morning\" first and writes \"in the morning\", then adds \"and sometimes at night\" from guesswork.",
      "good": "The candidate predicts an action or time is needed, waits for the contrast word \"but\", and writes \"climbing stairs\", which fits the gap.",
      "why": "The first detail was a distractor. The strong candidate predicted the type of answer, listened past the contrast, and kept to a short exact answer."
    },
    "selfCheck": [
      {
        "q": "What is the best use of the time before the audio starts?",
        "options": [
          "Read the headings and predict the type of word for each gap",
          "Rest your eyes and wait",
          "Write possible answers in every gap"
        ],
        "answer": "a",
        "explain": "Predicting the type of word helps you notice the answer when it is spoken."
      },
      {
        "q": "The patient says \"swelling in my ankles\". The gap is \"______ in ankles\". What do you write?",
        "options": [
          "oedema",
          "swelling",
          "ankles swollen badly"
        ],
        "answer": "b",
        "explain": "Write the word you hear. Changing it to a medical term risks a mistake and is not needed."
      },
      {
        "q": "You missed gap four completely. What should you do?",
        "options": [
          "Stop and try to remember it",
          "Leave the rest of the page",
          "Move on to gap five at once"
        ],
        "answer": "c",
        "explain": "The audio is not repeated. Moving on stops one missed gap from costing several more."
      }
    ]
  },
  {
    "area": "reading-listening",
    "id": "listening-part-b",
    "criterion": "listening-part-b",
    "title": "Listening Part B: gist in short workplace audio",
    "looksFor": "This part checks whether you understand the main point of short workplace talk, such as a handover, briefing or team discussion. There are six extracts of about 45 seconds, each with one question of 3 options. The question may ask about purpose, opinion or what happens next. Speakers often mention a wrong option first, then correct it.",
    "rules": [
      "Read the question and options before the extract starts, and note what each option claims.",
      "Listen for the speaker's final decision, not the first idea they mention.",
      "Notice correction words such as actually, but, instead and in fact.",
      "Choose the option that matches the whole extract, not one word you heard."
    ],
    "example": {
      "situation": "A nurse in charge says: \"I was going to move the training session to Friday. Actually, we'll keep it on Thursday, but run it twice so night staff can come.\" Question: What has changed?",
      "weak": "The candidate hears \"move\" and \"Friday\" and chooses \"The session is moving to Friday\".",
      "good": "The candidate hears \"Actually\" and notes the final plan: same day, extra session. They choose \"There will be two sessions on Thursday\".",
      "why": "Friday was only a plan the speaker dropped. The strong candidate waited for the correction word and matched the final decision."
    },
    "selfCheck": [
      {
        "q": "A speaker says \"We thought about X, but in the end we chose Y.\" What is the answer likely about?",
        "options": [
          "X",
          "Y",
          "Both equally"
        ],
        "answer": "b",
        "explain": "The final decision comes after but. X is mentioned only to be dropped."
      },
      {
        "q": "When should you read the question and options?",
        "options": [
          "Before the extract plays",
          "After the extract ends",
          "Only if you are unsure"
        ],
        "answer": "a",
        "explain": "Knowing what to listen for helps you catch the key moment in a short extract."
      },
      {
        "q": "Which word often signals that a speaker is correcting an earlier idea?",
        "options": [
          "also",
          "first",
          "actually"
        ],
        "answer": "c",
        "explain": "Actually often introduces a change of mind or a correction, so listen closely after it."
      }
    ]
  },
  {
    "area": "reading-listening",
    "id": "listening-part-c",
    "criterion": "listening-part-c",
    "title": "Listening Part C: follow the speaker's view",
    "looksFor": "This part checks whether you can follow a longer talk or interview about health care. There are two recordings of about 4–5 minutes, each with 6 questions of 3 options. Questions often test the speaker's opinion, attitude or reason for something. The answer is usually paraphrased, and speakers may describe a common view before giving their own.",
    "rules": [
      "Use the reading time to underline the key idea in each question stem.",
      "Questions follow the order of the talk, so track each one as the speaker moves on.",
      "Separate what the speaker believes from what others believe or once believed.",
      "Listen for attitude words such as surprised, concerned, sceptical or convinced.",
      "Choose by meaning; an option that repeats the speaker's words may still be wrong."
    ],
    "example": {
      "situation": "A physiotherapist says: \"People assume older patients don't want to exercise. In my experience, they're often keen; they just need a clear reason.\" Question: What does she say about older patients?",
      "weak": "The candidate hears \"don't want to exercise\" and chooses \"They usually avoid exercise\".",
      "good": "The candidate notes \"People assume\" and \"In my experience\". She disagrees with the common view, so they choose \"They are motivated when the purpose is explained\".",
      "why": "The first sentence is a view the speaker rejects. The correct option paraphrases her own experience, and the weak choice copies the rejected idea."
    },
    "selfCheck": [
      {
        "q": "A speaker says \"Many people think…\" and then \"I'd question that.\" Which is the speaker's view?",
        "options": [
          "What many people think",
          "Both views equally",
          "The opposite of what many people think"
        ],
        "answer": "c",
        "explain": "The speaker reports a common view and then challenges it. The answer reflects the challenge."
      },
      {
        "q": "Why do you need the question stems before the talk begins?",
        "options": [
          "To know which idea to listen for at each point",
          "To guess answers without listening",
          "To count the speaker's words"
        ],
        "answer": "a",
        "explain": "Questions follow the talk in order, so the stems guide your attention as it moves on."
      },
      {
        "q": "The speaker sounds doubtful about a new app. Which word best fits her attitude?",
        "options": [
          "enthusiastic",
          "sceptical",
          "neutral"
        ],
        "answer": "b",
        "explain": "Doubtful means unsure it works. Sceptical is the closest word for that attitude."
      }
    ]
  }
];
