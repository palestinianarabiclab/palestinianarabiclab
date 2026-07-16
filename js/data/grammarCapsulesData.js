export const grammarCapsules = {
    "GC-01": {
        id: "GC-01", title: "Say who you are talking about", short: "أنا، إنتَ، إنتِ، هو، هي، إحنا، إنتو، همّ",
        goal: "You can identify the speaker, the listener, and another person.",
        pattern: "person → matching independent pronoun",
        description: "Start with people, not terminology. Palestinian Arabic distinguishes ‘you’ to a man (إنتَ) from ‘you’ to a woman (إنتِ).",
        table: {
            title: "Core pronouns in Gaza Palestinian Arabic",
            headers: ["Person", "Arabic", "Arabizi", "English"],
            rows: [
                ["Speaker", "أَنَا", "ana", "I"],
                ["One man", "إِنْتَ", "inta", "you (man)"],
                ["One woman", "إِنْتِ", "inti", "you (woman)"],
                ["One man absent", "هُوَّ", "huwwe", "he"],
                ["One woman absent", "هِيَّ", "hiyye", "she"],
                ["Speaker + others", "إِحْنَا", "i7na", "we"],
                ["People addressed", "إِنْتُو", "intu", "you all"],
                ["People absent", "هُمَّ", "humme", "they"],
            ],
        },
        examples: [
            { ar: "إِنْتَ مِن وِين؟", arabeezy: "inta min ween?", en: "Where are you from? (to a man)" },
            { ar: "إِنْتِ مِن وِين؟", arabeezy: "inti min ween?", en: "Where are you from? (to a woman)" },
            { ar: "هُمَّ مِن غَزَّة.", arabeezy: "humme min ghazze.", en: "They are from Gaza." },
        ],
        commonMistakes: ["Do not use إنتَ for a woman. Use إنتِ."],
        exercises: [
            { prompt: "You are speaking to one woman. Choose ‘you’.", options: ["إِنْتِ", "إِنْتَ", "هِيَّ"], correct: "إِنْتِ", explanation: "إِنْتِ addresses one woman directly." },
            { prompt: "Choose ‘they’ in Palestinian Arabic.", options: ["هُمَّ", "إِحْنا", "هُوَّ"], correct: "هُمَّ", explanation: "هُمَّ means ‘they.’" },
        ],
        sayIt: "Point to three people or pictures and say: he, she, they.", usedIn: ["Greetings", "Family", "All people-based lessons"],
    },
    "GC-02": {
        id: "GC-02", title: "Say ‘I am / she is’ without an extra verb", short: "subject + information",
        goal: "You can say who someone is, where they are from, or how they feel now.",
        pattern: "subject + noun / description / place",
        description: "In a present description, put the information directly after the subject. Palestinian Arabic normally has no separate word for English am, is, or are.",
        table: {
            title: "Build a present-time sentence",
            headers: ["What you want to say", "Palestinian pattern", "Example", "Meaning"],
            rows: [
                ["Identity", "subject + noun", "هُوَّ طالِب", "He is a student"],
                ["Description", "subject + adjective", "سارة مْنيحَة", "Sara is fine"],
                ["Origin", "subject + مِن", "أَنا مِن كَنَدا", "I am from Canada"],
                ["Location", "subject + place", "هِيَّ بِغَزَّة", "She is in Gaza"],
            ],
        },
        examples: [
            { ar: "أَنا مِن كَنَدا.", arabeezy: "ana min Canada.", en: "I am from Canada." },
            { ar: "هُوَّ طالِب.", arabeezy: "huwwe Taleb.", en: "He is a student." },
            { ar: "هِيَّ بِغَزَّة.", arabeezy: "hiyye b-ghazze.", en: "She is in Gaza." },
        ],
        commonMistakes: ["Do not insert هُوَّ as a translation of ‘is’: سارة مْنيحة, not سارة هِيَّ مْنيحة."],
        exercises: [
            { prompt: "Choose: ‘Lina is from France.’", options: ["لينا مِن فَرَنْسا.", "لينا هِيَّ مِن فَرَنْسا.", "لينا يِكون مِن فَرَنْسا."], correct: "لينا مِن فَرَنْسا.", explanation: "No extra ‘is’ is needed." },
            { prompt: "What does هُوَّ مُدَرِّس mean?", options: ["He is a teacher.", "The teacher is here.", "You are a teacher."], correct: "He is a teacher.", explanation: "The description follows the subject directly." },
        ],
        sayIt: "Say your name, country, and city in three short sentences.", usedIn: ["Greetings", "Family", "Work & Study", "Feelings"],
    },
    "GC-03": {
        id: "GC-03", title: "Talk directly to a man or a woman", short: "ـَك (-ak) → man · ـِك (-ik) → woman",
        goal: "You can ask a man or woman their name and how they are.",
        pattern: "to a man: -ak · to a woman: -ik",
        description: "An attached ‘you/your’ changes its final vowel. Unvowelled Arabic may look identical, so listen for -ak versus -ik.",
        table: {
            title: "Speak directly to a man or a woman",
            headers: ["Meaning", "To a man", "To a woman"],
            rows: [
                ["How are you?", "كِيفَك؟ (keefak?)", "كِيفِك؟ (keefik?)"],
                ["What is your name?", "شُو اِسْمَك؟ (sho ismak?)", "شُو اِسْمِك؟ (sho ismik?)"],
                ["Where is your house?", "وِين بَيْتَك؟ (ween beetak?)", "وِين بَيْتِك؟ (ween beetik?)"],
            ],
        },
        examples: [
            { ar: "كِيفَك؟", arabeezy: "keefak?", en: "How are you? (to a man)" },
            { ar: "كِيفِك؟", arabeezy: "keefik?", en: "How are you? (to a woman)" },
            { ar: "شُو اِسْمِك؟", arabeezy: "sho ismik?", en: "What is your name? (to a woman)" },
        ],
        commonMistakes: ["This difference is the vowel -ak/-ik, not the feminine ending ـة."],
        exercises: [
            { prompt: "Ask one woman how she is.", options: ["كِيفِك؟", "كِيفَك؟", "كِيفُه؟"], correct: "كِيفِك؟", explanation: "-ik addresses a woman." },
            { prompt: "Which Arabizi asks a man for his name?", options: ["sho ismak?", "sho ismik?", "sho ismo?"], correct: "sho ismak?", explanation: "-ak addresses a man." },
        ],
        sayIt: "Ask a man, then a woman: What is your name? How are you?", usedIn: ["Greetings", "Family", "Health", "Direct conversation"],
    },
    "GC-04": {
        id: "GC-04", title: "Describe a woman", short: "many descriptions add ـة (-a / -e)",
        goal: "You can change a common masculine description to describe a woman.",
        pattern: "masculine description → feminine description + ـة",
        description: "Many descriptions add a feminine ending pronounced -a or -e. Learn the forms as spoken pairs.",
        table: {
            title: "Useful masculine and feminine pairs",
            headers: ["Masculine", "Feminine", "Meaning"],
            rows: [
                ["مْنِيح (mnee7)", "مْنِيحَة (mnee7a)", "fine / well"],
                ["تَعْبان (ta3ban)", "تَعْبانَة (ta3bane)", "tired"],
                ["ساكِن (saken)", "ساكْنِة (sakne)", "living / resident"],
                ["مَبْسوط (mabsooT)", "مَبْسوطَة (mabsooTa)", "happy"],
            ],
        },
        examples: [
            { ar: "مْنيح → مْنيحَة", arabeezy: "mnee7 → mnee7a", en: "fine: man → woman" },
            { ar: "تَعْبان → تَعْبانَة", arabeezy: "ta3ban → ta3bane", en: "tired: man → woman" },
            { ar: "ساكِن → ساكْنِة", arabeezy: "saken → sakne", en: "living: man → woman" },
        ],
        commonMistakes: ["This describes a woman. It does not explain how a woman performs a verb."],
        exercises: [
            { prompt: "Complete: مَرْيَم ___ بِغَزَّة. (living)", options: ["ساكْنِة", "ساكِن", "ساكْنين"], correct: "ساكْنِة", explanation: "Use the feminine description." },
            { prompt: "Choose the feminine form of تَعْبان.", options: ["تَعْبانَة", "تَعْبانِين", "تِعْبِت"], correct: "تَعْبانَة", explanation: "The description takes ـة." },
        ],
        sayIt: "Describe one man and one woman as fine, tired, or living somewhere.", usedIn: ["Greetings", "Family", "Work & Study", "Feelings"],
    },
    "GC-05": {
        id: "GC-05", title: "Say what a woman does", short: "إنتِ: تـ...ـي",
        goal: "You can ask or tell one woman about a present action.",
        pattern: "إنتِ + بِتـ + verb + ي",
        description: "With many present verbs, one woman addressed directly has تـ at the beginning and ـي at the end. This is separate from describing her with ـة.",
        table: {
            title: "Present actions: addressing one man or one woman",
            headers: ["Action", "To a man", "To a woman"],
            rows: [
                ["go", "إِنْتَ بِتْروح (inta bitroo7)", "إِنْتِ بِتْروحي (inti bitroo7i)"],
                ["study", "إِنْتَ بِتِدْرُس (inta btodros)", "إِنْتِ بِتِدْرُسي (inti btodrusi)"],
                ["work", "إِنْتَ بِتِشْتِغِل (inta btishtighil)", "إِنْتِ بِتِشْتِغْلي (inti btishtighli)"],
            ],
        },
        examples: [
            { ar: "إِنْتَ بِتْرُوح → إِنْتِ بِتْرُوحي", arabeezy: "inta bitroo7 → inti bitroo7i", en: "you go: man → woman" },
            { ar: "إِنْتِ بِتِدْرُسي وِين؟", arabeezy: "inti btodrusi ween?", en: "Where do you study? (to a woman)" },
            { ar: "إِنْتِ بِتِشْتِغْلي اليَوْم؟", arabeezy: "inti btishtighli el-yom?", en: "Are you working today? (to a woman)" },
        ],
        commonMistakes: ["Do not say إنتِ بتروح. Say إنتِ بتروحي."],
        exercises: [
            { prompt: "Complete to a woman: إنتِ ___ عَالجامْعَة.", options: ["بِتْرُوحي", "بِتْرُوح", "بِرُوحُوا"], correct: "بِتْرُوحي", explanation: "The feminine addressee takes final ـي." },
            { prompt: "Choose ‘Do you work here?’ to a woman.", options: ["بِتِشْتِغْلي هُون؟", "بِتِشْتِغِل هُون؟", "بِشْتِغْلُوا هُون؟"], correct: "بِتِشْتِغْلي هُون؟", explanation: "The verb ends in ـي." },
        ],
        sayIt: "Ask a woman where she lives, studies, or works.", usedIn: ["Daily Routine", "Work & Study", "Transportation", "Hobbies"],
    },
    "GC-06": {
        id: "GC-06", title: "Ask for one missing piece of information", short: "شو، مين، وين، من وين، كيف، قدّيش",
        goal: "You can choose the right question word for a person, place, origin, condition, or amount.",
        pattern: "question word + spoken chunk",
        description: "Learn complete chunks. وين asks location; من وين asks origin.",
        table: {
            title: "Choose the question word by the missing information",
            headers: ["You need", "Question word", "Natural Palestinian chunk"],
            rows: [
                ["a thing / name", "شُو؟ (sho?)", "شُو اِسْمَك؟"],
                ["a person", "مِين؟ (meen?)", "مِين هاد؟"],
                ["a location", "وِين؟ (ween?)", "وِين ساكِن؟"],
                ["an origin", "مِن وِين؟ (min ween?)", "إِنْتِ مِن وِين؟"],
                ["a condition / manner", "كِيف؟ (keef?)", "كِيفَك اليَوْم؟"],
                ["an amount / number", "قَدِّيش؟ (addeesh?)", "قَدِّيش عُمْرَك؟"],
            ],
        },
        examples: [
            { ar: "شُو اِسْمَك؟", arabeezy: "sho ismak?", en: "What is your name?" },
            { ar: "مِين هاد؟", arabeezy: "meen had?", en: "Who is this?" },
            { ar: "إِنْتِ مِن وِين؟", arabeezy: "inti min ween?", en: "Where are you from?" },
        ],
        commonMistakes: ["وين asks current location; من وين asks origin."],
        exercises: [
            { prompt: "Ask for a country or city of origin.", options: ["مِن وِين؟", "وِين؟", "كِيف؟"], correct: "مِن وِين؟", explanation: "مِن وِين means ‘from where?’" },
            { prompt: "Choose: ___ هاد؟ (who)", options: ["مِين", "قَدِّيش", "وِين"], correct: "مِين", explanation: "مِين asks about a person." },
        ],
        sayIt: "Ask your teacher their name, origin, and current city.", usedIn: ["Every unit"],
    },
};

export function getGrammarCapsules(ids = []) {
    return ids.map((id) => grammarCapsules[id]).filter(Boolean);
}
