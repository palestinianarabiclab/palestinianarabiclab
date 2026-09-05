export const lessonId = "Assessment-Beginner-Final";

export const lesson = {
    meta: {
        level: "Beginner",
        unit: "Beginner Final",
        lessonTitle: "Beginner Final Assessment",
        contentVersion: 2026081501,
        availableTabs: ["overview", "practice"],
    },
    overview: {
        title: "Beginner Final Assessment",
        description: "A scored end-of-level check for Units 1-5. Answers are submitted together, so the learner does not receive immediate correctness feedback.",
        goals: ["Measure recognition and sentence control.", "Identify topics that need review.", "Complete one teacher-scored speaking task."],
        speakingOutcomes: ["The learner can complete a connected beginner speaking situation with limited support."],
    },
    vocabulary: { core: [], extra: [] },
    dialogue: { title: "Assessment", setting: "Complete the Practice tab.", lines: [] },
    microChecks: { enabled: false, every: 5, items: [] },
    practice: {
        assessmentMode: true,
        assessmentTitle: "Beginner Final",
        questions: [
            { prompt: "Someone asks: كِيفَك؟ Choose a natural reply.", options: ["مِن وِين؟", "أَنَا تَمَام، الحَمْدُ لله.", "مَع السَّلَامَة."], correctIndex: 1, skill: "Unit 1 — Greetings" },
            { prompt: "Choose the Gaza Palestinian Arabic for: My name is Lina.", options: ["شُو اِسْمِك؟", "أَنَا مِن غَزَّة.", "اِسْمِي لِينَا."], correctIndex: 2, skill: "Unit 1 — Introduction" },
            { prompt: "Choose the question for a woman: Where are you from?", options: ["إِنْتِ مِن وِين؟", "وِين سَاكْنَة؟", "قَدِّيش عُمُرِك؟"], correctIndex: 0, skill: "Unit 1 — Questions" },
            { prompt: "Choose the English meaning of: بِنْشُوفِك بَعْدِين.", options: ["How are you today?", "See you later. (to a woman)", "Nice to meet you."], correctIndex: 1, skill: "Unit 1 — Closing" },

            { prompt: "Choose the English meaning of: عِنْدِي أُخْتِين.", options: ["I have two sisters.", "I have one brother.", "I live with my sisters."], correctIndex: 0, skill: "Unit 2 — Family" },
            { prompt: "Choose the sentence for: My brother is older than me.", options: ["أَخُوي أَصْغَر مِنِّي.", "أَخُوي قَدِّي.", "أَخُوي أَكْبَر مِنِّي."], correctIndex: 2, skill: "Unit 2 — Comparison" },
            { prompt: "Complete the Arabic sentence for: I live with my family.\nأَنَا ___ أَهْلِي.", options: ["مَا عِنْدِي", "سَاكِن مَع", "أَكْبَر مِن"], correctIndex: 1, skill: "Unit 2 — Living with family" },
            { prompt: "Choose the English meaning of خَالَة.", options: ["mother's sister", "father's sister", "mother's brother"], correctIndex: 0, skill: "Unit 2 — Relatives" },

            { prompt: "Choose the sentence addressed to a woman: You wake up early.", options: ["إِنْتِ بِتْصْحَى بَدْرِي.", "إِنْتِ بَصْحَى بَدْرِي.", "إِنْتِ بِتْصْحِي بَدْرِي."], correctIndex: 2, skill: "Unit 3 — Present tense" },
            { prompt: "Choose the English meaning of: بَعْد مَا بَرْجَع، بَرْتَاح شُوَيّ.", options: ["Before I leave, I have breakfast.", "After I return, I rest a little.", "At night I sleep late."], correctIndex: 1, skill: "Unit 3 — Sequence" },
            { prompt: "Choose the question meaning: What time do you go to class? (to a man)", options: ["أَيّ سَاعَة بِتْرُوح عَالدَّرْس؟", "وِين سَاكِن؟", "شُو بِتَاكُل الصُّبُح؟"], correctIndex: 0, skill: "Unit 3 — Time question" },
            { prompt: "Choose the sentence for: I do not drink coffee at night.", options: ["بِاللِّيل بَشْرَب قَهْوَة.", "بِاللِّيل مَا بَنَام.", "بِاللِّيل مَا بَشْرَب قَهْوَة."], correctIndex: 2, skill: "Unit 3 — Negation" },

            { prompt: "Choose the Gaza Palestinian Arabic sentence for: I am hungry.", options: ["أَنَا جَعَان.", "أَنَا عَطْشَان.", "أَنَا شْبِعِت."], correctIndex: 0, skill: "Unit 4 — Hunger" },
            { prompt: "Choose the sentence for: I do not like fish.", options: ["بَحِبّ السَّمَك.", "مَا بَحِبّ السَّمَك.", "السَّمَك مِش جَاي عَلَى بَالِي."], correctIndex: 1, skill: "Unit 4 — Preference" },
            { prompt: "Your host offers more food, but you are full. Choose the appropriate reply.", options: ["بَدِّي كَمَان جَاج.", "أَنَا جَعَان.", "لَا يِسْلَمُوا، شْبِعِت."], correctIndex: 2, skill: "Unit 4 — Polite refusal" },
            { prompt: "Choose the command to one woman: Drink the water.", options: ["اِشْرَبِي المَيّ.", "اِشْرَب المَيّ.", "اِشْرَبُوا المَيّ."], correctIndex: 0, skill: "Unit 4 — Command" },

            { prompt: "Choose the sentence for: I take the bus every day.", options: ["كُلّ يَوم بَنْزَل عِنْد المَوْقِف.", "كُلّ يَوم بَرْكَب البَاص.", "كُلّ يَوم بَمْشِي دُغْرِي."], correctIndex: 1, skill: "Unit 5 — Transportation" },
            { prompt: "Choose the question used to ask the taxi fare.", options: ["وِين المَوْقِف؟", "مِن وِين؟", "قَدِّيش أُجْرَة التَّاكْسِي؟"], correctIndex: 2, skill: "Unit 5 — Fare" },
            { prompt: "Choose the direction meaning: Go straight, then turn right.", options: ["رُوح دُغْرِي، بَعْدِين لِف يَمِين.", "لِف شِمَال عِنْد الإِشَارَة.", "بَنْزَل هِنَا، لَوْ سَمَحْت."], correctIndex: 0, skill: "Unit 5 — Directions" },
            { prompt: "A driver asks: وِين بَدَّك تِنْزَل؟ Choose the relevant reply.", options: ["أَنَا مِسْتَعْجِل.", "بَنْزَل هِنَا، لَوْ سَمَحْت.", "التَّاكْسِي غَالِي."], correctIndex: 1, skill: "Unit 5 — Driver interaction" },
        ],
        speaking: {
            prompt: "Meet a new classmate. Introduce yourself, mention your family, describe your morning, say what food you like, and explain how you travel to class or work.",
            criteria: ["Task completion (0-2)", "Understandable pronunciation (0-2)", "Present-tense control (0-2)", "Question formation (0-2)", "Natural polite phrases (0-2)"],
            maxScore: 10,
        },
        quiz: [], rolePlays: [], translation: [], sections: [],
    },
    homework: { instructions: "No homework. Use the result to choose the next review step." },
    teacherNotes: { myNotes: "" },
};
