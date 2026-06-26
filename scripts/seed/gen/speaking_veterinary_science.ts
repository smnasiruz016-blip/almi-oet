import { Prisma } from "@prisma/client";

export const ITEMS: Prisma.OetItemCreateManyInput[] = [
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Managing an overweight middle-aged Labrador",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room",
      candidateRole: "You are the veterinarian. The owner has brought in their seven-year-old Labrador for a routine check, and you have weighed the dog and found it is now well above its ideal weight.",
      patientRole: "The owner is a busy professional in their forties (with their pet, a seven-year-old male Labrador retriever) who feels the dog looks fine and enjoys his food.",
      candidateCard: "Find out about the dog's current diet, treats and exercise routine. Explain the health risks of the excess weight (joints, heart, reduced lifespan) and outline a realistic weight-management plan with measured feeding and gradual exercise. Advise on monthly weigh-ins and agree on a starting step.",
      patientConcern: "The owner secretly feels guilty and worries that cutting food or treats means taking away the dog's main source of happiness and that they have been a bad owner. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Acknowledge that treats are a real bond between owner and dog; reframe the plan around the dog's comfort and years of life rather than blame, so the owner feels supported, not judged."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Advanced dental disease in a small-breed dog",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room",
      candidateRole: "You are the veterinarian. On examination of a small-breed dog presented for bad breath, you have found heavy tartar, gum recession and several loose teeth that will need extraction under general anaesthetic.",
      patientRole: "The owner is a retired person (with their pet, a nine-year-old Yorkshire terrier) who came in only because of the smell and did not expect surgery to be mentioned.",
      candidateCard: "Explain the dental findings and why a scale, polish and likely extractions under anaesthetic are needed. Address the owner's questions about the procedure, discuss pre-anaesthetic blood testing for an older dog, and agree on booking the dental and pain relief afterwards.",
      patientConcern: "The owner is frightened that a general anaesthetic could kill their elderly dog and would rather avoid the procedure than risk losing him on the table. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Name the anaesthetic fear directly and explain the safeguards (blood test, monitoring, tailored protocol) honestly; balance the real but small risk against the ongoing pain of infected teeth."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Discussing quality of life in a dog with advanced cancer",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "a quiet veterinary consulting room",
      candidateRole: "You are the veterinarian. A dog previously diagnosed with an aggressive tumour has returned for review, and the disease has progressed despite treatment; the focus now is comfort and quality of life.",
      patientRole: "The owner is a person in their fifties (with their pet, an eleven-year-old golden retriever) who has cared for the dog through every stage of treatment and is exhausted.",
      candidateCard: "Sensitively review how the dog is coping at home (appetite, mobility, pain, enjoyment). Introduce the idea of a quality-of-life assessment, explain palliative options and honestly discuss when euthanasia becomes the kindest choice. Agree on a follow-up plan and support.",
      patientConcern: "The owner is terrified of 'giving up too soon' and feels that agreeing to let the dog go would be a betrayal of a loyal companion. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Lead with the dog's daily experience rather than a timeline; reassure the owner that choosing comfort is an act of love, not abandonment, and never pressure them toward a single answer."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Long-term management of feline chronic kidney disease",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room",
      candidateRole: "You are the veterinarian. Blood and urine tests confirm early-stage chronic kidney disease in an older cat that has been drinking more and losing a little weight.",
      patientRole: "The owner is a person in their sixties (with their pet, a thirteen-year-old domestic shorthair cat) who is unfamiliar with chronic illness and expected a simple course of medicine.",
      candidateCard: "Explain in plain terms what chronic kidney disease means and that it is managed, not cured. Discuss a renal diet, hydration, regular monitoring bloods and possible medication. Address the owner's worries and agree on a realistic monitoring schedule and first dietary change.",
      patientConcern: "The owner fears the cat is dying imminently and is overwhelmed that this might mean lifelong cost and difficult medicating of a fussy cat. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Separate the word 'chronic' from 'terminal' early; many cats live comfortably for years with diet and monitoring. Offer practical tips for feeding and dosing a reluctant cat to reduce the owner's sense of burden."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Addressing separation-related behaviour in a rescue dog",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room",
      candidateRole: "You are the veterinarian. The owner reports that their recently adopted rescue dog barks, destroys furniture and toilets indoors whenever left alone, and you have ruled out a physical cause.",
      patientRole: "The owner is a first-time dog owner in their thirties (with their pet, a two-year-old crossbreed rescue dog) who is frustrated and embarrassed by complaints from neighbours.",
      candidateCard: "Find out the dog's history and the pattern of behaviour when alone. Explain that this is likely separation-related distress, not deliberate disobedience. Outline a graduated departure-training plan, referral to a qualified behaviourist, and possible supportive measures. Agree on first steps.",
      patientConcern: "The owner is quietly considering returning the dog to the shelter and feels like a failure for not being able to cope. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Stress that the behaviour reflects anxiety rather than spite, which lifts the owner's sense of personal failure; offer a concrete, achievable first step and the safety net of a behaviourist referral so returning the dog stops feeling like the only option."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Deciding on neutering a young male cat",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room",
      candidateRole: "You are the veterinarian. The owner has brought in a young male cat for a vaccination and asks for your view on whether to have him neutered.",
      patientRole: "The owner is a young adult (with their pet, a six-month-old male tabby cat) who has heard mixed opinions from friends about neutering.",
      candidateCard: "Find out the owner's concerns and the cat's lifestyle (indoor or outdoor). Explain the benefits of neutering (reduced roaming, fighting, spraying and unwanted litters) and what the routine procedure involves. Answer questions honestly and agree on a decision or a time to book.",
      patientConcern: "The owner feels that neutering is 'unnatural' and worries it will change the cat's personality or make him lazy and fat. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Take the 'unnatural' and personality worries seriously rather than dismissing them; explain that temperament stays the same and weight is managed through feeding, so the owner makes an informed, unpressured choice."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Post-operative care after orthopaedic surgery",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room at discharge",
      candidateRole: "You are the veterinarian. A dog has just had cruciate ligament surgery on its knee and is being discharged; strict rest and controlled rehabilitation are essential for healing.",
      patientRole: "The owner is an active person in their forties (with their pet, a four-year-old energetic Border collie) who walks the dog for hours every day.",
      candidateCard: "Explain the post-operative instructions: confinement, lead-only toilet breaks, no jumping or stairs, wound care and medication. Describe the rehabilitation timeline and signs of complications to watch for. Address the owner's concerns and agree on the recheck appointment.",
      patientConcern: "The owner is worried that weeks of strict confinement will make the high-energy dog miserable and unmanageable, and doubts they can keep such an active dog still. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Validate how hard rest is for an energetic breed and offer practical mental-stimulation ideas (food puzzles, scent games) so the owner sees confinement as achievable rather than cruel, protecting the surgical repair."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Weighing treatment options against cost for a sick rabbit",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room",
      candidateRole: "You are the veterinarian. A pet rabbit has stopped eating and passing droppings (gut stasis), and you need imaging and supportive hospitalisation; there is also a more conservative outpatient option.",
      patientRole: "The owner is a parent (with their pet, a three-year-old house rabbit belonging to their child) on a limited budget who is anxious about the bill.",
      candidateCard: "Explain the likely diagnosis and why prompt treatment matters. Present the realistic options honestly, from full hospitalisation to a more limited outpatient plan, with the trade-offs of each. Discuss cost openly without pressure and agree together on a way forward.",
      patientConcern: "The owner is ashamed that money is a factor in their child's pet's care and is afraid you will judge them if they cannot afford the best option. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Raise cost matter-of-factly and without judgement; presenting a credible 'good, better, best' range lets the owner make a responsible choice within their means and removes the shame from the conversation."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Year-round parasite prevention for an outdoor cat",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room",
      candidateRole: "You are the veterinarian. A healthy outdoor cat is in for a check-up and the owner has not been using regular flea and worm prevention.",
      patientRole: "The owner is a person in their fifties (with their pet, a five-year-old outdoor domestic cat) who only treats the cat when they actually see fleas.",
      candidateCard: "Find out the cat's current routine and lifestyle. Explain why regular, year-round flea and worming treatment matters (hunting, environmental contamination, risk to people in the home). Recommend a suitable product and schedule, and agree on a plan the owner will follow.",
      patientConcern: "The owner thinks regular preventatives are an unnecessary expense and a way for the practice to make money when the cat looks perfectly healthy. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Acknowledge the cost-versus-need scepticism honestly; explain prevention in terms of the hidden risks (tapeworm, household exposure, hunting) so the owner sees the value rather than feeling sold to."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Wellness planning for a newly senior dog",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "FOUNDATION",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room",
      candidateRole: "You are the veterinarian. A dog has reached its senior years and you are recommending a senior-wellness approach including a check-up every six months and baseline blood and urine tests.",
      patientRole: "The owner is a person in their seventies (with their pet, a ten-year-old miniature schnauzer) who feels the dog is fine and that extra tests are fussing over nothing.",
      candidateCard: "Explain what changes in older dogs and the value of detecting problems early through regular checks and screening tests. Discuss diet, dental care, mobility and weight in the senior years. Address the owner's reluctance and agree on a sensible monitoring plan.",
      patientConcern: "The owner quietly dreads that screening tests will uncover a serious illness they would rather not know about, and prefers to let the dog 'just enjoy life'. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Gently name the 'rather not know' fear; frame early detection as a way to keep the dog comfortable and active for longer, not as hunting for bad news, so screening feels like care rather than threat."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Daily insulin and monitoring for a newly diagnosed diabetic dog",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "STRETCH",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room",
      candidateRole: "You are the veterinarian. A dog has just been diagnosed with diabetes mellitus and will need twice-daily insulin injections, consistent feeding and home monitoring.",
      patientRole: "The owner is a person in their sixties (with their pet, an eight-year-old female crossbreed) who has never given an injection and lives alone.",
      candidateCard: "Explain the diagnosis and why insulin and a fixed routine are essential. Demonstrate and reassure about injection technique, feeding timing and recognising low blood sugar. Discuss monitoring and recheck visits, address the owner's worries and agree on a starting plan.",
      patientConcern: "The owner is overwhelmed and afraid they will make a fatal mistake with the injections, and worries the rigid twice-daily routine will trap them and end their freedom. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Break the routine into small, learnable steps and confirm understanding rather than overwhelming with detail; reassure that the practice will support them and that many owners living alone manage diabetic pets successfully."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Itchy skin and a suspected food allergy in a young dog",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room",
      candidateRole: "You are the veterinarian. A young dog has recurrent itching, ear infections and red skin, and you suspect an allergy; you are recommending a strict elimination diet trial as the next step.",
      patientRole: "The owner is a person in their thirties (with their pet, a one-year-old French bulldog) who has already tried several shampoos and creams from the pet shop without success.",
      candidateCard: "Find out the history of the itching and what has been tried. Explain why an eight-week strict elimination diet trial is needed and how it must be followed exactly, including no treats or scraps. Discuss managing flare-ups meanwhile and agree on starting the trial.",
      patientConcern: "The owner is frustrated that there is no quick cure and doubts the whole family can stick to a diet trial with no treats, especially with children who feed the dog. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Acknowledge the frustration of slow progress and the practical challenge of a household-wide diet; emphasise that even one slipped treat undoes the trial, and problem-solve with the owner so the whole family can realistically commit."
  },
  {
    subTest: "SPEAKING",
    taskType: "SPEAKING_ROLEPLAY",
    profession: "VETERINARY_SCIENCE",
    title: "Veterinary Science — Heart murmur and lifelong cardiac medication in a small dog",
    prompt: "Read your role-play card. You have a short time to prepare, then carry out the consultation. Speak your part aloud.",
    difficulty: "CORE",
    topicTag: "advice",
    payload: {
      setting: "a veterinary consulting room",
      candidateRole: "You are the veterinarian. You have detected a heart murmur in a small-breed dog that has started coughing, and tests point to early heart disease requiring ongoing medication and monitoring.",
      patientRole: "The owner is a person in their fifties (with their pet, a twelve-year-old Cavalier King Charles spaniel) who came in only about an occasional cough.",
      candidateCard: "Explain the heart findings and what the diagnosis means for the dog. Discuss daily cardiac medication, salt-aware feeding, and watching breathing rate at home as a warning sign. Address the owner's questions and agree on the medication plan and a recheck.",
      patientConcern: "The owner is shocked that a minor cough signals heart disease and is afraid the dog could collapse and die suddenly at any moment. (grader-only)",
      prepSeconds: 60,
      speakSeconds: 300
    },
    guidanceNote: "Address the sudden-death fear honestly; explain that medication and home breathing-rate monitoring help keep the disease stable, giving the owner a concrete way to feel in control rather than helplessly waiting for a crisis."
  }
];
