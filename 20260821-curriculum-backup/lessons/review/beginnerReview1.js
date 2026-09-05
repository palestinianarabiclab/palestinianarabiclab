export const lessonId = "Review-Beginner-Units1-5";

export const lesson = {
    meta: {
        level: "Beginner",
        unit: "Cumulative Review 1",
        lessonTitle: "Review Units 1-5",
        contentVersion: 2026071501,
        availableTabs: ["overview", "grammar", "practice"],
    },
    overview: {
        title: "Cumulative Review 1",
        description: "A teacher-led cumulative review of greetings, family, daily routine, food, and transportation. The learner may retry, check answers, and discuss mistakes.",
        goals: [
            "Recall essential vocabulary from Units 1-5.",
            "Build accurate present-tense sentences and questions.",
            "Review gender, possession, negation, quantities, directions, and commands.",
            "Use all five units together in one spoken situation.",
        ],
        speakingOutcomes: ["The learner can handle a connected real-life situation using material from Units 1-5."],
    },
    vocabulary: { core: [], extra: [] },
    dialogue: { title: "Review through practice", setting: "Use the Practice tab for this review.", lines: [] },
    grammar: [
        {
            title: "Review 1 — Introductions and agreement",
            short: "Pronouns, question words, and gender",
            description: "Build a complete introduction by choosing the right pronoun, question word, and masculine or feminine description. The form must match the person being described.",
            table: {
                title: "Fast recall",
                headers: ["Job", "Masculine", "Feminine", "Plural"],
                rows: [
                    ["pronoun", "هو", "هي", "همّ"],
                    ["from where?", "من وين إنت؟", "من وين إنتِ؟", "من وين إنتو؟"],
                    ["living", "ساكن", "ساكنة", "ساكنين"],
                    ["Palestinian", "فلسطيني", "فلسطينية", "فلسطينيين"],
                ],
            },
            examples: [
                { ar: "شو اسمِك ومن وين إنتِ؟", arabeezy: "sho ismik w min ween inti?", en: "What is your name, and where are you from? (to a woman)" },
                { ar: "هي فلسطينية وساكنة بغزّة.", arabeezy: "hiyye falasTeeniye w sakne b-ghazze.", en: "She is Palestinian and lives in Gaza." },
            ],
            commonMistakes: ["Match the description to the person: هو ساكن, هي ساكنة.", "Use شو for ‘what’, مين for ‘who’, وين for ‘where’, and كيف for ‘how’."],
            exercises: [
                { prompt: "Complete: ___ اسمِك؟ (to a woman)", options: ["شو", "مين", "وين", "قدّيش"], correct: "شو", explanation: "شو asks for the name: ‘what is your name?’" },
                { prompt: "Correct description for هي:", options: ["هي ساكنة بغزّة.", "هي ساكن بغزّة.", "هي ساكنين بغزّة.", "هي بسكن بغزّة."], correct: "هي ساكنة بغزّة.", explanation: "The active description agrees with the feminine subject." },
            ],
        },
        {
            title: "Review 2 — Family and possession",
            short: "عندي, attached ownership, dual, and adjective agreement",
            description: "Use عندي to say what family members you have, and attached endings to identify whose person or thing it is. Review two-person forms and adjective agreement.",
            table: {
                title: "Possession map",
                headers: ["Meaning", "Pattern", "Example"],
                rows: [
                    ["I have", "عندي", "عندي أخ"],
                    ["my", "ـي", "أخوي / أختي"],
                    ["his", "ـه", "أخوه"],
                    ["her", "ـها", "أختها"],
                    ["two", "ـين", "أخوين / أختين"],
                ],
            },
            examples: [
                { ar: "عندي أخوين وأخت وحدة.", arabeezy: "3indi akhwein w ukht wa7de.", en: "I have two brothers and one sister." },
                { ar: "أختها الكبيرة متزوّجة.", arabeezy: "ukht-ha el-kbeere mitzawwje.", en: "Her older sister is married." },
            ],
            commonMistakes: ["Negate عندي with ما: ما عندي إخوة.", "The adjective follows the gender: أخ كبير, أخت كبيرة."],
            exercises: [
                { prompt: "Choose: ‘I do not have brothers.’", options: ["ما عندي إخوة.", "مش عندي إخوة.", "ما إخوتي عندي.", "عندي ما إخوة."], correct: "ما عندي إخوة.", explanation: "Existence/possession with عندي is negated using ما." },
                { prompt: "Complete: عندي ___ . ‘two sisters’", options: ["أختين", "أختان", "أختات", "اتنين أخت"], correct: "أختين", explanation: "The spoken dual form is أختين." },
            ],
        },
        {
            title: "Review 3 — Daily routine",
            short: "Present conjugation, time, frequency, and ما",
            description: "A routine combines the بـ-present with a time or frequency expression. The beginning and ending of the verb identify the subject.",
            table: {
                title: "Present-tense checkpoints",
                headers: ["Subject", "Wake up", "Go"],
                rows: [
                    ["أنا", "بصحى", "بروح"],
                    ["إنتَ", "بتصحى", "بتروح"],
                    ["إنتِ", "بتصحي", "بتروحي"],
                    ["هو", "بصحى", "بروح"],
                    ["هي", "بتصحى", "بتروح"],
                    ["إحنا", "بنصحى", "بنروح"],
                    ["همّ", "بصحوا", "بروحوا"],
                ],
            },
            examples: [
                { ar: "كل يوم بصحى عالسبعة وبروح عالشغل.", arabeezy: "kol yom baS7a 3as-sab3a w baroo7 3ash-shoghol.", en: "Every day I wake up at seven and go to work." },
                { ar: "يوم الجمعة ما بنصحى بكّير.", arabeezy: "yom el-jom3a ma bnS7a bakkeer.", en: "On Friday we do not wake up early." },
            ],
            commonMistakes: ["Add ـي for feminine ‘you’: بتروحي.", "Use ما before the routine verb: ما بروح."],
            exercises: [
                { prompt: "Complete: إنتِ ___ عالجامعة كل يوم.", options: ["بتروحي", "بتروح", "بروحوا", "بنروح"], correct: "بتروحي", explanation: "Feminine singular ‘you’ takes تـ and final ـي." },
                { prompt: "Choose the natural negative routine.", options: ["أنا ما بشرب قهوة بالليل.", "أنا مش بشرب قهوة بالليل.", "أنا ما شربت كل ليلة.", "أنا لا قهوة بشرب."], correct: "أنا ما بشرب قهوة بالليل.", explanation: "ما negates a present-tense habitual verb." },
            ],
        },
        {
            title: "Review 4 — Food, quantity, and commands",
            short: "Order naturally and match the number phrase",
            description: "Food language combines بدّي with the item, a useful quantity, and a polite closer. Commands change for a man, woman, or group.",
            table: {
                title: "Ordering and commands",
                headers: ["Function", "Pattern", "Example"],
                rows: [
                    ["request", "بدّي + item", "بدّي قهوة"],
                    ["quantity", "number + حبّات", "تلات حبّات فلافل"],
                    ["to a man", "command", "خد / كُل / اشرب"],
                    ["to a woman", "command + ي", "خدي / كلي / اشربي"],
                    ["polite refusal", "لا يسلَموا", "لا يسلموا، شبعت"],
                ],
            },
            examples: [
                { ar: "بدّي تلات حبّات فلافل وكاسة شاي.", arabeezy: "baddi talat 7abbat falafel w kaset shay.", en: "I want three falafel pieces and a glass of tea." },
                { ar: "خدي حبّة وكليها.", arabeezy: "khodi 7abbe w kuliha.", en: "Take one and eat it. (to a woman)" },
            ],
            commonMistakes: ["Give an English cue for the missing item so the learner knows what to produce.", "Do not use the masculine command when addressing a woman."],
            exercises: [
                { prompt: "Complete with the English cue ‘pieces’: بدّي تلات ___ فلافل.", options: ["حبّات", "كاسات", "كيلو", "صحون"], correct: "حبّات", explanation: "حبّات is a natural counter for individual falafel pieces." },
                { prompt: "Tell a woman: ‘Drink the water.’", options: ["اشربي الميّ.", "اشرب الميّ.", "اشربوا الميّ.", "بتشربي الميّ."], correct: "اشربي الميّ.", explanation: "The feminine command ends in ـي." },
            ],
        },
        {
            title: "Review 5 — Transport, directions, and prohibition",
            short: "Ask the fare and guide someone safely",
            description: "Combine a transport question with place words, prepositions, directions, and commands. A negative command uses لا + present form without the habitual بـ.",
            table: {
                title: "Direction toolkit",
                headers: ["Job", "Palestinian Arabic", "Meaning"],
                rows: [
                    ["fare", "قدّيش الأجرة؟", "How much is the fare?"],
                    ["straight", "دغري", "straight"],
                    ["turn", "لف يمين / شمال", "turn right / left"],
                    ["location", "جنب / قبال / ورا", "beside / opposite / behind"],
                    ["prohibition", "لا تلف", "do not turn"],
                ],
            },
            examples: [
                { ar: "روح دغري، وبعد الإشارة لفّ شمال.", arabeezy: "roo7 doghri, w ba3d el-ishara liff shmal.", en: "Go straight, and after the traffic light turn left." },
                { ar: "لا تنزل هون؛ انزل قبال المستشفى.", arabeezy: "la tinzal hon; inzal qbal el-mustashfa.", en: "Do not get off here; get off opposite the hospital." },
            ],
            commonMistakes: ["Use وين للمكان and قدّيش للسعر.", "The prohibition is لا تلف, not لا لف."],
            exercises: [
                { prompt: "Which question asks for the taxi fare?", options: ["قدّيش الأجرة؟", "وين الأجرة؟", "مين الأجرة؟", "كيف الأجرة؟"], correct: "قدّيش الأجرة؟", explanation: "قدّيش asks about an amount or price." },
                { prompt: "Choose the negative command: ‘Do not turn right.’", options: ["لا تلف يمين.", "مش لف يمين.", "ما بتلف يمين.", "لا يمين لفّيت."], correct: "لا تلف يمين.", explanation: "A spoken prohibition uses لا + the matching present form without بـ." },
            ],
        },
    ],
    microChecks: { enabled: false, every: 5, items: [] },
    practice: {
        showRealUse: false,
        showWriting: false,
        separateExerciseTypes: true,
        quiz: [
            { id: "br1_q1", questionAr: "Choose the natural reply to صَبَاح الخِير (sabah el-kheir).", optionsEn: ["صَبَاح النُّور", "مَع السَّلَامَة", "شُو اِسْمَك؟"], correctIndex: 0 },
            { id: "br1_q2", questionAr: "Choose the meaning of عِنْدِي أَخ وَأُخْت (3indi akh w ukht).", optionsEn: ["I have a brother and a sister.", "I live with my parents.", "My brother is older."], correctIndex: 0 },
            { id: "br1_q3", questionAr: "Choose the sentence for: Every day I wake up early.", optionsEn: ["كُلّ يَوم بَصْحَى بَدْرِي.", "بِاللِّيل بَنَام بَدْرِي.", "اليَوم مَا بَرُوح."], correctIndex: 0 },
            { id: "br1_q4", questionAr: "Choose the polite phrase meaning: No thanks, I am full.", optionsEn: ["لَا يِسْلَمُوا، شِبْعِت.", "بَدِّي مَيّ.", "الجَاج زَاكِي."], correctIndex: 0 },
            { id: "br1_q5", questionAr: "Choose the question used to ask a taxi fare.", optionsEn: ["قَدِّيش الأُجْرَة؟", "كِيف الجَوّ؟", "مَع مِين سَاكِن؟"], correctIndex: 0 },
        ],
        rolePlays: [
            "You meet a new classmate, introduce yourself and your family, describe your morning routine, invite them to eat, then explain how to get from your home to class.",
        ],
        sections: [
            {
                title: "A - Recognition",
                matching: [
                    { ar: "مِن وِين؟", arabeezy: "min ween?", en: "Where are you from?" },
                    { ar: "أَهْلِي", arabeezy: "ahli", en: "my family / parents" },
                    { ar: "بَرْجَع", arabeezy: "barja3", en: "I return" },
                    { ar: "شِبْعِت", arabeezy: "shbi3t", en: "I am full" },
                    { ar: "دُغْرِي", arabeezy: "dughri", en: "straight" },
                ],
                multipleChoice: [],
            },
            {
                title: "B - Controlled review",
                fillInTheBlank: [
                    { prompt: "___ اِسْمَك؟", arabeezy: "___ ismak?", cueEn: "what", answer: "شُو" },
                    { prompt: "أَنَا سَاكِن ___ أَهْلِي.", arabeezy: "ana saken ___ ahli.", cueEn: "with", answer: "مَع" },
                    { prompt: "كُلّ يَوم ___ السَّاعَة سَبْعَة.", arabeezy: "kul yom ___ es-sa3a sab3a.", cueEn: "I wake up", answer: "بَصْحَى" },
                    { prompt: "أَنَا عَطْشَان، بَدِّي ___.", arabeezy: "ana 3atshan, baddi ___.", cueEn: "water", answer: "مَيّ" },
                    { prompt: "لَوْ سَمَحْت، بَنْزَل ___.", arabeezy: "law sama7t, banzal ___.", cueEn: "here", answer: "هِنَا" },
                    { prompt: "هِيَّ ___ فِي غَزَّة.", arabeezy: "hiyyeh ___ fi ghazzeh.", cueEn: "lives (feminine)", answer: "سَاكْنَة" },
                    { prompt: "أَنَا مَا ___ إِخْوَة.", arabeezy: "ana ma ___ ikhweh.", cueEn: "have", answer: "عِنْدِي" },
                    { prompt: "إِنْتِ ___ بَدْرِي كُلّ يَوم.", arabeezy: "inti ___ badri kul yom.", cueEn: "wake up (feminine)", answer: "بِتْصْحِي" },
                    { prompt: "بَدِّي تَلَاتَة ___ فَلَافِل.", arabeezy: "baddi talateh ___ falafel.", cueEn: "pieces", answer: "حَبَّات" },
                    { prompt: "رُوح دُغْرِي وُ___ شِمَال.", arabeezy: "roo7 dughri w ___ shmal.", cueEn: "turn", answer: "لِف" },
                ],
                correctTheMistake: [
                    { prompt: "Correct: هِيَّ مْنِيح.", arabeezy: "hiyyeh mneeh.", answer: "هِيَّ مْنِيحَة." },
                    { prompt: "Correct: أَنَا مِش عِنْدِي إِخْوَة.", arabeezy: "ana mish 3indi ikhweh.", answer: "أَنَا مَا عِنْدِي إِخْوَة." },
                    { prompt: "Correct: إِنْتِ بِتْصْحَى بَدْرِي.", arabeezy: "inti btiS7a badri.", answer: "إِنْتِ بِتْصْحِي بَدْرِي." },
                    { prompt: "Correct: السَّلَطَة زَاكِي.", arabeezy: "es-salaTa zaki.", answer: "السَّلَطَة زَاكِيَة." },
                    { prompt: "Correct the command: لِف جَعَان.", arabeezy: "lif ja3an.", answer: "لِف يَمِين." },
                    { prompt: "Correct: هُوَّ سَاكْنَة مَع أَهْلُه.", arabeezy: "huwwe sakneh ma3 ahlo.", answer: "هُوَّ سَاكِن مَع أَهْلُه." },
                ],
                reorderSentences: [
                    { prompt: "Build: I live with my family.", arabeezy: "ana saken ma3 ahli.", words: ["أَنَا سَاكِن", "مَع", "أَهْلِي."], answer: "أَنَا سَاكِن مَع أَهْلِي." },
                    { prompt: "Build: Every morning I drink coffee.", arabeezy: "kul Subu7 bashrab qahweh.", words: ["كُلّ صُبُح", "بَشْرَب", "قَهْوَة."], answer: "كُلّ صُبُح بَشْرَب قَهْوَة." },
                    { prompt: "Build: Go straight and turn left.", arabeezy: "roo7 dughri w lif shmal.", words: ["رُوح دُغْرِي", "وَلِف", "شِمَال."], answer: "رُوح دُغْرِي وَلِف شِمَال." },
                    { prompt: "Build: She lives with her family.", words: ["هِيَّ سَاكْنَة", "مَع", "أَهْلَهَا."], answer: "هِيَّ سَاكْنَة مَع أَهْلَهَا." },
                    { prompt: "Build: I do not have siblings.", words: ["أَنَا", "مَا عِنْدِي", "إِخْوَة."], answer: "أَنَا مَا عِنْدِي إِخْوَة." },
                    { prompt: "Build: I want three pieces of falafel.", words: ["بَدِّي", "تَلَاتَة حَبَّات", "فَلَافِل."], answer: "بَدِّي تَلَاتَة حَبَّات فَلَافِل." },
                ],
            },
        ],
        translation: [],
    },
    homework: { instructions: "Review your mistakes orally. No written homework is required for this checkpoint." },
    teacherNotes: { myNotes: "" },
};
