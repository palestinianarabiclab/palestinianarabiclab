import { LESSON_ID_DAILY_ROUTINE } from '../../constants.js';

export const lessonId = LESSON_ID_DAILY_ROUTINE;

export const lesson = {
    meta: {
        level: "Beginner",
        unit: "Daily Routine",
        lessonTitle: "Unit 3 - Daily Routine & Time",
        contentVersion: 2026081504,
    },

    overview: {
        title: "Unit 3 - Daily Routine & Time",
        description:
            "Students learn to talk about a normal day in natural Gaza Palestinian Arabic: waking up, washing, eating, going out, coming back, resting, studying, cleaning, talking with family, and sleeping.",
        goals: [
            "Describe a simple daily routine from morning to night.",
            "Ask and answer simple time questions: أَيّ سَاعَة؟ / إِمْتَى؟",
            "Use everyday routine verbs in short spoken sentences.",
            "Connect daily routine with family, greetings, and basic time words from previous units.",
            "Give a 60-90 second spoken description of a normal day.",
        ],
        speakingOutcomes: [
            "By the end of this unit, the student can say 8-10 sentences about their normal day.",
            "The student can ask another person about their routine.",
            "The student can explain being early, late, tired, or busy in simple Gaza Arabic.",
        ],
    },

    vocabulary: {
        core: [
            {
                "id": "baS7a",
                "ar": "بَصْحَى",
                "arArabeezy": "bs7a",
                "en": "I wake up",
                "enArabeezy": "baS7a",
                "hint": "A routine verb in the I-form. السَّاعَة + number tells the exact time.",
                "exampleAr": "كُلّ يَوم بَصْحَى السَّاعَة سَبْعَة.",
                "exampleArabeezy": "kul yom baS7a el-sa3a sab3a.",
                "exampleEn": "Every day I wake up at seven."
            },
            {
                id: "baghassal",
                ar: "بَغَسِّل",
                en: "I wash",
                enArabeezy: "baghassal",
                hint: "Daily action after waking up. Common chunk: بَغَسِّل وِجْهِي.",
                "exampleAr": "لَمَّا بَصْحَى، بَغَسِّل وِجْهِي وَإِيدَيَّ.",
    "exampleArabeezy": "lammā baṣḥā, baghassil wijhi w īdayya.",
    "exampleEn": "When I wake up, I wash my face and hands."
            },
            {
                "id": "bat7ammam",
                "ar": "بَتْحَمَّم",
                "arArabeezy": "bt7mm",
                "en": "I take a shower",
                "enArabeezy": "bat7ammam",
                "hint": "A common morning-routine verb in the I-form.",
               "exampleAr": "أُخْتِي بَتْحَمَّم الصُّبُح قَبْل مَا تِطْلَع.",
    "exampleArabeezy": "ukhti batḥammam el-ṣubuḥ qabl mā tiṭla‘.",
    "exampleEn": "My sister takes a shower in the morning before she goes out."
            },
            {
                "id": "bafTar",
                "ar": "بَفْطَر",
                "arArabeezy": "bftr",
                "en": "I have breakfast",
                "enArabeezy": "bafTar",
                "hint": "The verb for having breakfast. فُطُور and أَهْلِي were learned earlier.",
                "exampleAr": "إِحْنَا بِنِفْطَر سَوَا كُلّ يَوْم.",
    "exampleArabeezy": "iḥnā biniftar sawā kull yawm.",
    "exampleEn": "We have breakfast together every day."
            },
            {
                "id": "baakul",
                "ar": "بَاكُل",
                "arArabeezy": "bakl",
                "en": "I eat",
                "enArabeezy": "baakul",
                "hint": "A general eating verb. غَدَا and أَهْلِي were learned earlier.",
                "exampleAr": "بَاكُل الغَدَا مَع أَهْلِي.",
                "exampleArabeezy": "baakul el-ghada ma3 ahli.",
                "exampleEn": "I eat lunch with my family."
            },
            {
                id: "bashrab",
                ar: "بَشْرَب",
                en: "I drink",
                enArabeezy: "bashrab",
                hint: "Use with coffee, tea, water: بَشْرَب قَهْوَة / شَاي / مَيّ.",
                exampleAr: "الصُّبُح بَشْرَب قَهْوَة.",
                exampleArabeezy: "el-soboh bashrab ahwe.",
                exampleEn: "In the morning I drink coffee.",
            },
            {
                id: "ba7ki",
                ar: "بَحْكِي",
                en: "I talk / speak",
                enArabeezy: "ba7ki",
                hint: "Very useful for speaking goals: بَحْكِي عَرَبِي / بَحْكِي مَع أَخُوي.",
                exampleAr: "بِاللِّيل بَحْكِي مَع أَخُوي.",
                exampleArabeezy: "bel-leel ba7ki ma3 akhuy.",
                exampleEn: "At night I talk with my brother.",
            },
            {
                "id": "baTla3",
                "ar": "بَطْلَع",
                "arArabeezy": "baTla3",
                "en": "I go out / I leave (home)",
                "enArabeezy": "batla3",
                "hint": "In Palestinian Arabic, 'بطلع' (baTla3) is the most common verb for leaving the house. 'بنزل' (banzel) is used when heading down, going to town/market, or getting off transport.",
                "exampleAr": "بَعْد الفُطُور بَطْلَع مِن البِيت.",
                "exampleArabeezy": "ba3d el-fuToor baTla3 min el-beit.",
                "exampleEn": "After breakfast I leave the house."
            },
            {
                "id": "baruu7_alshoghl",
                "ar": "بَرُوح",
                "arArabeezy": "baroo7 ",
                "en": "I go ",
                "enArabeezy": "baroo7",
                "hint": "عَـ + الشُّغُل joins naturally as عَالشُّغُل in speech.",
                "exampleAr": "كُلّ يَوم بَرُوح عَالشُّغُل السَّاعَة تَمَانْيَة.",
                "exampleArabeezy": "kul yom baroo7 3ash-shoghol el-sa3a tamanye.",
                "exampleEn": "Every day I go to work at eight."
            },
            {
                "id": "ay_sa3a",
                "ar": "أَيّ سَاعَة؟",
                "en": "what time?",
                "enArabeezy": "ay sa3a?",
                "hint": "Ask about schedule: أَيّ سَاعَة بِتِصْحَى؟ / أَيّ سَاعَة بِتْرُوح؟",
                "exampleAr": "أَيّ سَاعَة بِتْرُوح عَالشُّغُل؟",
                "exampleArabeezy": "ay sa3a bitroo7 3al-shoghol?",
                "exampleEn": "What time do you go to work?",
            },
            {
                "id": "bashtaghel",
                "ar": "بَشْتِغِل",
                "arArabeezy": "bshtghl",
                "en": "I work",
                "enArabeezy": "bashteghil",
                "hint": "This is the I-form of the verb already heard in بِتِشْتِغِل وَلَّا بِتِدْرُس؟",
                "exampleAr": "أَخُوي بيشْتِغِل فِي مَحَلّ قَرِيب مِن البَيْت.",
    "exampleArabeezy": "akhūy bashtighil fi maḥall qarīb min el-bayt.",
    "exampleEn": "My brother works in a shop near the house."
            },
            {
                "id": "badros",
                "ar": "بَدْرُس",
                "arArabeezy": "bdrs",
                "en": "I study",
                "enArabeezy": "badros",
                "hint": "This is the I-form of the verb already heard in بِتِشْتِغِل وَلَّا بِتِدْرُس؟",
                "exampleAr": "أَنَا بَدْرُس بِاللِّيل لَمَّا أَرْجَع عَالبَيْت.",
    "exampleArabeezy": "ana badrus bil-layl lammā arja‘ ‘al-bayt.",
    "exampleEn": "I study at night when I come back home."
            },
            {
                "id": "barja3",
                "ar": "بَرْجَع",
                "arArabeezy": "brj3",
                "en": "I come back / I return",
                "enArabeezy": "barja3",
                "hint": "Use عَالبِيت for 'home/to the house' in natural speech.",
                "exampleAr": "بَعْد الضُّهُر بَرْجَع عَالبِيت.",
                "exampleArabeezy": "ba3d el-duhur barja3 3al-beit.",
                "exampleEn": "In the afternoon I come back home."
            },
            {
                "id": "bartaa7",
                "ar": "بَرْتَاح",
                "arArabeezy": "brta7",
                "en": "I rest / I relax",
                "enArabeezy": "barta7",
                "hint": "A common routine verb after work or study.",
                "exampleAr": "بَرْجَع عَالبِيت وَبَرْتَاح شُوَيّ.",
                "exampleArabeezy": "barja3 3al-beit w barta7 shway.",
                "exampleEn": "I come back home and rest a little."
            },
            {
                "id": "batfarraj",
                "ar": "بَتْفَرَّج عَلَى...",
                "arArabeezy": "batfarraj 3ala...",
                "en": "I watch (TV, series, etc.)",
                "enArabeezy": "batfarraj_3ala",
                "hint": "Keep عَلَى after this verb: watch TV/a series.",
                "exampleAr": "أَبُوي بِالمَسَا بِيِتْفَرَّج عَلَى التِّلِفْزْيُون.",
    "exampleArabeezy": "abūy bil-masā byitfarraj ‘alā el-tilifzyūn.",
    "exampleEn": "My father watches TV in the evening."
            },

            {
                "id": "baqra",
                "ar": "بَقْرَا",
                "arArabeezy": "bqra",
                "en": "I read",
                "enArabeezy": "baqra",
                "hint": "Use it with كِتَاب, a message, or an article.",
                "exampleAr": "بِالمَسَا بَقْرَا كِتَاب.",
                "exampleArabeezy": "bel-masa baqra kitab.",
                "exampleEn": "In the evening I read a book."
            },
            {
                "id": "banaam",
                "ar": "بَنَام",
                "arArabeezy": "bnam",
                "en": "I sleep",
                "enArabeezy": "banaam",
                "hint": "Daily routine, end of the day.",
                "exampleAr": "أُخْتِي بْتِنَام بَدْرِي عَشَانْ بتِصْحَى بَدْرِي.",
    "exampleArabeezy": "ukhti btinām badri ‘ashān tiṣḥā badri.",
    "exampleEn": "My sister sleeps early so she wakes up early."
            },
            {
                "id": "btabbikh",
                "ar": "بَطَبِّخ",
                "arArabeezy": "btbkh",
                "en": "I cook",
                "enArabeezy": "batabbekh",
                "hint": "Home routine when cooking.",
                "exampleAr": "مَرَّة فِي الْأُسْبُوع بَطَبِّخ أَكْل فِلَسْطِينِي.",
                "exampleArabeezy": "mra fy elasbw3 btbkh akl flstyny.",
                "exampleEn": "Once a week I cook Palestinian food."
            },
            {
                "id": "bajli",
                "ar": "بَجْلِي الصُّحُون",
                "arArabeezy": "bjly els7wn",
                "en": "I wash the dishes",
                "enArabeezy": "bajli_esSu7oon",
                "hint": "A common Gaza home-routine verb. الصُّحُون = the dishes.",
                "exampleAr": "بَعْد الأَكْل أَنَا بَجْلِي الصُّحُون.",
    "exampleArabeezy": "ba‘d el-akl ana bajli el-ṣuḥūn.",
    "exampleEn": "After eating, I wash the dishes."
            },
            {
                "id": "banaddaf",
                "ar": "بَنَضَّف",
                "arArabeezy": "bndf",
                "en": "I clean",
                "enArabeezy": "banaddaf",
                "hint": "Use it with the house or a room.",
                "exampleAr": "أُخْتِي بْتِنَضِّف غُرْفْتَهَا كُلّ يَوْم.",
    "exampleArabeezy": "ukhti btinaddif ghurftahā kull yawm.",
    "exampleEn": "My sister cleans her room every day."
            },
            {
                id: "badri",
                ar: "بَدْرِي",
                en: "early",
                enArabeezy: "badri",
                hint: "Natural Gaza word. Opposite: مِتْأَخِّر. Use with waking up, sleeping, arriving.",
                exampleAr: "بَصْحَى بَدْرِي فِي أَيَّام الشُّغُل.",
                exampleArabeezy: "baS7a badri fi ayyam el-shoghol.",
                exampleEn: "I wake up early on work days.",
            },
            {
                id: "mit2akher",
                ar: "مِتْأَخِّر / مِتْأَخِّرَة",
                en: "late",
                enArabeezy: "mit2akher / mit2akhra",
                hint: "Male: مِتْأَخِّر. Female: مِتْأَخِّرَة. Use with waking, sleeping, arriving.",
                "exampleAr": "أَنَا اليَوْم رِجِعْت مِتْأَخِّر عَالبَيْت.",
    "exampleArabeezy": "ana el-yawm riji‘t mit'akhkhar ‘al-bayt.",
    "exampleEn": "Today I came back home late."
            },
            {
                "id": "abl_ma",
                "ar": "قَبِل مَا...",
                "arArabeezy": "qbl ma. . .",
                "en": "Before (doing something)",
                "enArabeezy": "abl_ma",
                "hint": "Used before a verb.",
                "exampleAr": "قَبْل مَا أَرُوح عَالشُّغُل، بَشْرَب شَاي.",
    "exampleArabeezy": "qabl mā arūḥ ‘al-shughul, bashrab shāy.",
    "exampleEn": "Before I go to work, I drink tea."
            },
            {
                "id": "ba3d_ma",
                "ar": "بَعْد مَا...",
                "arArabeezy": "b3d ma. . .",
                "en": "After (doing something)",
                "enArabeezy": "ba3d_ma",
                "hint": "Used before a verb.",
                "exampleAr": "بَعْد مَا آكُل، بَشْرَب قَهْوَة.",
    "exampleArabeezy": "ba‘d mā ākul, bashrab qahwa.",
    "exampleEn": "After I eat, I drink coffee."
            },
            {
                "id": "b3deen",
                "ar": "بَعْدِين",
                "arArabeezy": "ba3deen",
                "en": "Then / after that",
                "enArabeezy": "ba3deen",
                "hint": "Use it to move naturally from one action to the next.",
                "exampleAr": "بَفْطَر مَع أَهْلِي، بَعْدِين بطلَع مِن البَيْت.",
    "exampleArabeezy": "baftar ma3 ahli, ba3deen baTla3 min el-bayt.",
    "exampleEn": "I have breakfast with my family, then I leave the house."
            },
            {
                "id": "ahyanan",
                "ar": "أَحْيَانًا",
                "arArabeezy": "a7yana",
                "en": "Sometimes",
                "enArabeezy": "a7yanan",
                "hint": "Put it before an action that does not happen every day.",
                "exampleAr": "أَحْيَانًا بَقْرَا، وَأَحْيَانًا بَتْفَرَّج.",
                "exampleArabeezy": "a7yanan baqra, w a7yanan batfarraj.",
                "exampleEn": "Sometimes I read, and sometimes I watch something."
            },
            {
                "id": "usually_words",
                "ar": "بَالْعَادَة / عَالأَغْلَب",
                "arArabeezy": "bel-3ade / 3al-aghlab",
                "en": "usually / most of the time",
                "enArabeezy": "bel_3ade / 3al_aghlab",
                "hint": "In spoken Palestinian, 'بَالْعَادَة' (bel-3ade) is used for habits ('usually'), while 'عَالأَغْلَب' (3al-aghlab) means 'mostly' or 'most likely'.",
                "exampleAr": "بَالْعَادَة بَرْجَع عَالبَيْت قَبْل المَسَا.",
    "exampleArabeezy": "bil-‘āda barja‘ ‘al-bayt qabl el-masā.",
    "exampleEn": "Usually I come back home before the evening."
            },


        ],
        extra: [

            {
                "id": "kull_yom",
                "ar": "كُلّ يَوم",
                "arArabeezy": "kul yom",
                "en": "Every day",
                "enArabeezy": "kull_yom",
                "hint": "Use with repeated actions: كُلّ يَوم بَصْحَى... / كُلّ يَوم بَرُوح...",
                "exampleAr": "كُلّ يَوم بَحْكِي مَع إِمِّي.",
                "exampleArabeezy": "kul yom ba7ki ma3 immi.",
                "exampleEn": "Every day I talk with my mother.",
            },

            {
                "id": "fi_elsob7",
                "ar": "الصُّبُح",
                "arArabeezy": "el-soboh",
                "en": "In the morning",
                "enArabeezy": "fi_esSob7",
                "hint": "The main Gaza form used for production in this course. قَهْوَة was learned in Food & Drink.",
                "exampleAr": "الصُّبُح بَحِبّ القَهْوَة.",
                "exampleArabeezy": "el-soboh ba7ibb el-ahwe.",
                "exampleEn": "In the morning I like coffee."
            },
            {
                "id": "ba3d_elDohr",
                "ar": "بَعْد الضُّهُر",
                "arArabeezy": "b3d eldhr",
                "en": "In the afternoon",
                "enArabeezy": "ba3d_eDDohr",
                "hint": "A time chunk meaning the part of the day after noon.",
                "exampleAr": "بَعْد الضُّهُر بَاكُل الغَدَا.",
                "exampleArabeezy": "ba3d el-duhur baakul el-ghada.",
                "exampleEn": "In the afternoon I eat lunch."
            },
            {
                "id": "belmasa",
                "ar": "بِالمَسَا",
                "arArabeezy": "bel-masa",
                "en": "In the evening",
                "enArabeezy": "belmasa",
                "hint": "The main evening form used for production in this course.",
                "exampleAr": "بِالمَسَا بَرْجَع عَالبِيت.",
                "exampleArabeezy": "bel-masa barja3 3al-beit.",
                "exampleEn": "In the evening I come back home."
            },
            {
                "id": "bel_leel",
                "ar": "بِاللِّيل",
                "arArabeezy": "bel-leel",
                "en": "At night",
                "enArabeezy": "bel-leel",
                "hint": "The main night-time expression used for production in this course.",
                "exampleAr": "بِاللِّيل بَنَام.",
                "exampleArabeezy": "bel-leel banaam.",
                "exampleEn": "At night I sleep."
            },

        ],
    },

    dialogue: {
        title: "Real Situation - Running Late in the Morning",
        setting: "Lina sees Omar rushing before work. They talk naturally about his morning and normal routine.",
        lines: [
            { speaker: "Lina", ar: "مَرْحَبَا عُمَر، لِيش مِسْتَعْجِل هِيك؟", arArabeezy: "marhaba 3omar, leesh mista3jel heek?", en: "Hi Omar, why are you in such a hurry?" },
            { speaker: "Omar", ar: "أَهْلِين لِينَا. وَالله صِحِيت مِتْأَخِّر اليَوم.", arArabeezy: "ahleen lina. wallah Si7eet mit2akher el-yom.", en: "Hi Lina. Honestly, I woke up late today." },
            { speaker: "Lina", ar: "عَنْجَد؟ عَادَةً بِتِصْحَى بَدْرِي.", arArabeezy: "3anjad? 3adatan bitiS7a badri.", en: "Really? You usually wake up early." },
            { speaker: "Omar", ar: "آه، بَس إِمْبَارِح نِمِت مِتْأَخِّر. كُنْت بَتْفَرَّج عَلَى مُسَلْسَل.", arArabeezy: "ah, bas imbare7 nimet mit2akher. kunt batfarraj 3ala musalsal.", en: "Yes, but yesterday I slept late. I was watching a series." },
            { speaker: "Lina", ar: "طَيِّب لَحِقْت تِفْطَر؟", arArabeezy: "tayyib li7e2t tifTar?", en: "Okay, did you manage to have breakfast?" },
            { speaker: "Omar", ar: "لَا، بَس غَسَّلْت وِجْهِي وَشِرِبْت قَهْوَة بِسُرْعَة.", arArabeezy: "la, bas ghassalt wijhi w shribt ahwe bisur3a.", en: "No, I just washed my face and drank coffee quickly." },
            { speaker: "Lina", ar: "إِمِّي دَايْمًا بِتِحْكِيلِي: قَبِل مَا تِنْزَلِي، اِفْطَرِي إِشِي.", arArabeezy: "immi dayman biti7keeli: qabel ma tinzali, ifTari ishi.", en: "My mom always tells me: before you leave, eat something." },
            { speaker: "Omar", ar: "مَعْهَا حَق. أَنَا غَالِبًا بَفْطَر مَع أَهْلِي، بَس اليَوم مَا لَحِقْت.", arArabeezy: "ma3ha 7a2. ana ghaliban bafTar ma3 ahli, bas el-yom ma li7e2t.", en: "She's right. I usually have breakfast with my family, but today I didn't have time." },
            { speaker: "Lina", ar: "أَيّ سَاعَة بِبْلَش شُغْلَك؟", arArabeezy: "ay sa3a biballesh shoghlak?", en: "What time does your work start?" },
            { speaker: "Omar", ar: "السَّاعَة تَمَانْيَة، وَأَنَا هَلْقِيت لَازِم أَنْزِل.", arArabeezy: "el-sa3a tamanye, w ana halla2et lazim anzel.", en: "At eight, and I have to leave now." },
            { speaker: "Lina", ar: "بِتْرُوح عَالشُّغُل مَشِي وَلَا بِتِرْكَب بَاص؟", arArabeezy: "bitroo7 3al-shoghol mashi wala bitirkab bas?", en: "Do you go to work walking or take a bus?" },
            { speaker: "Omar", ar: "غَالِبًا بَاص، بَس اليَوم بَدِّي تَاكْسِي عَشَان مِتْأَخِّر.", arArabeezy: "ghaliban bas, bas el-yom baddi taxi 3ashan mit2akher.", en: "Usually bus, but today I want a taxi because I'm late." },
            { speaker: "Lina", ar: "بَعْد الشُّغُل بِتِرْجَع عَالبِيت دُغْرِي؟", arArabeezy: "ba3d el-shoghol bitirja3 3al-beet dughri?", en: "After work do you go straight home?" },
            { speaker: "Omar", ar: "آه، بَرْجَع بَعْد الضُّهُر وَبَاكُل الغَدَا مَع أَهْلِي.", arArabeezy: "ah, barja3 ba3d el-duhur w baakul el-ghada ma3 ahli.", en: "Yes, I come back in the afternoon and eat lunch with my family." },
            { speaker: "Lina", ar: "وَبَعْدِين؟ بَتْنَام وَلَا بَتْرْتَاح بَس؟", arArabeezy: "w ba3deen? bitnaam wala bitirta7 bas?", en: "And then? Do you sleep or just rest?" },
            { speaker: "Omar", ar: "بَرْتَاح شُوَيّ. أَحْيَانًا بَنَضَّف غُرْفْتِي، وَبَعْدِين بَدْرُس عَرَبِي.", arArabeezy: "barta7 shway. a7yanan banaddaf ghurfti, w ba3deen badros 3arabi.", en: "I rest a little. Sometimes I clean my room, then I study Arabic." },
            { speaker: "Lina", ar: "حِلْو. أَنَا بِالمَسَا بَحْكِي مَع جَارْتِي عَرَبِي شُوَيّ.", arArabeezy: "7ilu. ana bel-masa ba7ki ma3 jarti 3arabi shway.", en: "Nice. In the evening I speak a little Arabic with my neighbor." },
            { speaker: "Omar", ar: "جَارْتِك مِن غَزَّة، صَح؟", arArabeezy: "jartik min ghazza, Sa7?", en: "Your neighbor is from Gaza, right?" },
            { speaker: "Lina", ar: "آه، وَدَايْمًا بِتْصَحِّحْلِي لَمَّا أَغْلَط.", arArabeezy: "ah, w dayman bitsa77i7li lamma aghlaT.", en: "Yes, and she always corrects me when I make mistakes." },
            { speaker: "Omar", ar: "مُمْتَاز. أَنَا بِاللِّيل بَحْكِي مَع أَخُوي، بَس مِش كُلّ يَوم.", arArabeezy: "mumtaz. ana bel-leel ba7ki ma3 akhuy, bas mish kul yom.", en: "Excellent. At night I talk with my brother, but not every day." },
            { speaker: "Lina", ar: "أَخُوك بِنَام مِتْأَخِّر زَيَّك؟", arArabeezy: "akhook binaam mit2akher zayyak?", en: "Does your brother sleep late like you?" },
            { speaker: "Omar", ar: "أَكْتَر مِنِّي! خُصُوصًا لَيْلَة الخَمِيس، عَشَان الجُمْعَة مَا عِنْدُه شُغُل.", arArabeezy: "aktar minni! khuSoSan leilet el-khamees, 3ashan el-jum3a ma 3indo shoghol.", en: "More than me, especially Thursday night, because he doesn't have work on Friday." },
            { speaker: "Lina", ar: "صَحّ. طَيِّب وَفِي رَمَضَان، كَمَان بِتْسَهْرُوا وَبِتْصْحُوا مِتْأَخِّر؟", arArabeezy: "Sa77. Tayyib w fi ramaDan, kaman bitsaharu w bitS7u mit2akher?", en: "Right. And in Ramadan, do you also stay up and wake up late?" },
            { speaker: "Omar", ar: "آه، فِي رَمَضَان رُوتِينَّا كُلُّه بِتْغَيَّر.", arArabeezy: "ah, fi ramaDan routine-na kullo bitghayyar.", en: "Yes, in Ramadan our whole routine changes." },
            { speaker: "Lina", ar: "مَفْهُوم، يَعْنِي بِتْصْحُوا مِتْأَخِّر؟", arArabeezy: "mafhoom, ya3ni bitS7u mit2akher?", en: "That makes sense. So do you wake up late?" },
            { speaker: "Omar", ar: "أَحْيَانًا، وَبِنَام مِتْأَخِّر كَمَان.", arArabeezy: "a7yanan, w binaam mit2akher kaman.", en: "Sometimes, and we sleep late too." },
            { speaker: "Lina", ar: "يَلَّا رُوح، شَكْلَك رَح تِتْأَخَّر.", arArabeezy: "yalla roo7, shaklak ra7 tit2akhar.", en: "Go on, looks like you're going to be late." },
            { speaker: "Omar", ar: "آه وَالله. بِنْشُوفِك بَعْدِين.", arArabeezy: "ah wallah. binshoofik ba3deen.", en: "Yes, honestly. See you later." },
            { speaker: "Lina", ar: "مَع السَّلَامَة، دِير بَالَك عَلَى حَالَك.", arArabeezy: "ma3 salameh, deer balak 3ala 7alak.", en: "Goodbye, take care." },
        ],
        questions: [
            { ar: "لِيش عُمَر كَان مِسْتَعْجِل؟", en: "Why was Omar in a hurry?" },
            { ar: "عُمَر عَادَةً بِصْحَى كِيف؟", en: "How does Omar usually wake up?" },
            { ar: "لِيش عُمَر نَام مِتْأَخِّر إِمْبَارِح؟", en: "Why did Omar sleep late yesterday?" },
            { ar: "عُمَر لَحِق يِفْطَر؟", en: "Did Omar manage to have breakfast?" },
            { ar: "إِمّ لِينَا دَايْمًا بِتِحْكِيلْهَا شُو؟", en: "What does Lina's mother always tell her?" },
            { ar: "شُغْل عُمَر بِبْلَش أَيّ سَاعَة؟", en: "What time does Omar's work start?" },
            { ar: "عُمَر اليَوم بَدُّه بَاص وَلَا تَاكْسِي؟ لِيش؟", en: "Does Omar want a bus or taxi today? Why?" },
            { ar: "عُمَر بِيِرْجَع عَالبِيت إِمْتَى؟", en: "When does Omar come back home?" },
            { ar: "بَعْد مَا بِرْجَع، عُمَر بِيِعْمَل شُو؟", en: "After he comes back, what does Omar do?" },
            { ar: "لِينَا بِتْحْكِي عَرَبِي مَع مِين بِالمَسَا؟", en: "Who does Lina speak Arabic with in the evening?" },
            { ar: "أَخُو عُمَر بِنَام بَدْرِي وَلَا مِتْأَخِّر؟", en: "Does Omar's brother sleep early or late?" },
            { ar: "لِيش أَخُو عُمَر بِنَام مِتْأَخِّر لَيْلَة الخَمِيس؟", en: "Why does Omar's brother sleep late on Thursday night?" },
            { ar: "فِي رَمَضَان رُوتِين عُمَر بِتْغَيَّر كِيف؟", en: "How does Omar's routine change in Ramadan?" },
            { ar: "اِحْكِي رُوتِين عُمَر بِخَمْس جُمَل.", en: "Tell Omar's routine in five sentences." },
            { ar: "اِحْكِي عَن رُوتِينَك إِنْت مِن الصُّبُح لِلِّيل.", en: "Talk about your routine from morning to night." },
        ],
    },

    grammar: [
        {
            title: "1. The everyday present with بـ",
            short: "بَصْحَى، بَرُوح، بَدْرُس، بَنَام",
            description: "For habits, routines, and things that normally happen, Gaza Palestinian Arabic usually places بَـ / بِـ at the beginning of the present verb. This is not a separate word meaning ‘am’. It is part of the spoken present form. The same verb changes at the beginning—and sometimes at the end—according to the person.",
            table: {
                title: "Present routine: رَاح / يْرُوح → to go",
                headers: ["Person", "Palestinian form", "Arabizi", "Example meaning"],
                rows: [
                    ["أَنَا", "بَرُوح", "baroo7", "I go / I usually go"],
                    ["إِنْتَ", "بِتْرُوح", "bitroo7", "you go (man)"],
                    ["إِنْتِ", "بِتْرُوحِي", "bitroo7i", "you go (woman)"],
                    ["هُوَّ", "بِرُوح", "biroo7", "he goes"],
                    ["هِيَّ", "بِتْرُوح", "bitroo7", "she goes"],
                    ["إِحْنَا", "بِنْرُوح", "binroo7", "we go"],
                    ["إِنْتُو", "بِتْرُوحُوا", "bitroo7u", "you all go"],
                    ["هُمَّ", "بِرُوحُوا", "biroo7u", "they go"],
                ],
            },
            examples: [
                { ar: "أَنَا كُلّ يَوم بَرُوح عَالشُّغُل.", arabeezy: "ana kul yom baroo7 3ash-shughul.", en: "I go to work every day." },
                { ar: "إِنْتِ أَيّ سَاعَة بِتْرُوحِي عَالجَامْعَة؟", arabeezy: "inti ay sa3a bitroo7i 3al-jam3a?", en: "What time do you go to university? (to a woman)" },
                { ar: "هُمَّ بِرُوحُوا مَع بَعْض وَبِرْجَعُوا بَكِّير.", arabeezy: "humme biro7u ma3 ba3D w birja3u bakkeer.", en: "They go together and come back early." },
            ],
            commonMistakes: [
                "Do not use one unchanged verb after every pronoun. Compare أَنَا بَرُوح, إِحْنَا بِنْرُوح, and هُمَّ بِرُوحُوا.",
                "The forms إِنْتَ بِتْرُوح and هِيَّ بِتْرُوح sound identical; the pronoun or context tells us who is meant.",
                "The vowel inside the verb is not always predictable. Learn a verb with useful forms and audio, not only as an abstract root.",
            ],
            exercises: [
                { prompt: "Complete: إِحْنَا كُلّ يَوم ___ عَالجَامْعَة. (we go)", options: ["بِنْرُوح", "بَرُوح", "بِرُوحُوا"], correct: "بِنْرُوح", explanation: "The first-person plural present commonly begins with بِنـ: إِحْنَا بِنْرُوح." },
                { prompt: "Choose: ‘She goes to work early.’", options: ["هِيَّ بِتْرُوح عَالشُّغُل بَكِّير.", "هِيَّ بَرُوح عَالشُّغُل بَكِّير.", "هِيَّ بِتْرُوحِي عَالشُّغُل بَكِّير."], correct: "هِيَّ بِتْرُوح عَالشُّغُل بَكِّير.", explanation: "Third-person feminine singular uses بِتْـ without the final ـي." },
                { prompt: "Which form addresses a group: ‘you all go’?", options: ["بِتْرُوحُوا", "بِرُوحُوا", "بِنْرُوح"], correct: "بِتْرُوحُوا", explanation: "إِنْتُو takes بِتْـ and the plural ending ـُوا." },
            ],
        },

    ],

    microChecks: {
        "enabled": true,
        "every": 5,
        "items": [
            {
                "id": "daily_mc1",
                "type": "complete",
                "prompt": "Complete the sentence for: 'Every day I wake up at seven o'clock.'\nكُلّ يَوم ___ السَّاعَة سَبْعَة.",
                "options": [
                    "بَصْحَى",
                    "بَأْكُل",
                    "بَنَام",
                    "بَرُوح"
                ],
                "correct": "بَصْحَى"
            },
            {
                "id": "daily_mc2",
                "type": "reorder",
                "prompt": "Reorder the Arabic words to match: After breakfast I leave the house.",
                "options": [
                    "بَطْلَع",
                    "البِيت",
                    "بَعْد",
                    "مِن",
                    "الفُطُور"
                ],
                "correct": [
                    "بَعْد",
                    "الفُطُور",
                    "بَطْلَع",
                    "مِن",
                    "البِيت"
                ]
            },
            {
                "id": "daily_mc3",
                "type": "choose",
                "prompt": "Choose the Palestinian Arabic sentence for: In the afternoon I return home.",
                "options": [
                    "بَعْد الضُّهُر بَرْجَع عَالبِيت.",
                    "الصُّبُح بَرُوح عَالشُّغُل.",
                    "بَعْد الضُّهُر بَطْلَع مِن البِيت.",
                    "كُلّ يَوم بَنَام السَّاعَة عَالْعَشَرَة."
                ],
                "correct": "بَعْد الضُّهُر بَرْجَع عَالبِيت."
            },
            {
                "id": "daily_mc4",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: In the evening I read a book.\nبِالمَسَا ___ كِتَاب.",
                "options": [
                    "بَقْرَا",
                    "بَفْطَر",
                    "بَنْزِل",
                    "بَصْحَى"
                ],
                "correct": "بَقْرَا"
            },
            {
                "id": "daily_mc5",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: After lunch, I wash the dishes.\nبَعْد الغَدَا ___ الصُّحُون.",
                "options": [
                    "بَجْلِي",
                    "بَاكُل",
                    "بَاخُذ",
                    "بَطْبَخ"
                ],
                "correct": "بَجْلِي"
            },
            {
                "id": "daily_mc6",
                "type": "choose",
                "prompt": "Choose the Gaza Palestinian Arabic sentence for: Before I leave, I have breakfast.",
                "options": [
                    "قَبِل مَا أَنْزِل، بَفْطَر.",
                    "بَعْد مَا بَرْجَع، بَرْتَاح.",
                    "عَادَةً بَصْحَى بَدْرِي.",
                    "بَعْد الغَدَا بَجْلِي الصُّحُون."
                ],
                "correct": "قَبِل مَا أَنْزِل، بَفْطَر."
            },
            
        ]
    },

    practice: {
        showRealUse: false,
        showWriting: false,
        separateExerciseTypes: true,
        showCompleteDialogue: false,
        quiz: [
            {
                id: "daily_q1",
                questionAr: "Choose the English meaning of: كُلّ يَوم بَصْحَى بَدْرِي.",
                optionsEn: [
                    "Every day I wake up early.",
                    "Every day I sleep late.",
                    "In the evening I return home."
                ],
                correctIndex: 0
            },
            {
                id: "daily_q2",
                questionAr: "Choose the natural Gaza Palestinian sentence for: In the morning I have breakfast with my family.",
                optionsEn: [
                    "الصُّبُح بَفْطَر مَع أَهْلِي.",
                    "بِالمَسَا بَنَام مَع أَهْلِي.",
                    "بَعْد الضُّهُر بَرُوح عَالدَّرْس."
                ],
                correctIndex: 0
            },
            {
                id: "daily_q3",
                questionAr: "Choose the correct order for a normal morning.",
                optionsEn: [
                    "بَصْحَى → بَغَسِّل وِجْهِي → بَفْطَر",
                    "بَنَام → بَرْجَع → بَصْحَى",
                    "بَتْفَرَّج → بَنْزِل → بَتْحَمَّم"
                ],
                correctIndex: 0
            },
            {
                id: "daily_q4",
                questionAr: "كَمِّل: بَعْد الفُطُور ___ مِن البِيت.",
                optionsEn: [
                    "بَنْزِل",
                    "بَنَام",
                    "بَجْلِي"
                ],
                correctIndex: 0
            },
            {
                id: "daily_q5",
                questionAr: "Choose the English meaning of: بَرْجَع عَالبِيت وَبَرْتَاح شُوَيّ.",
                optionsEn: [
                    "I return home and rest a little.",
                    "I leave home and go to work.",
                    "I clean the house and sleep."
                ],
                correctIndex: 0
            },
            {
                id: "daily_q6",
                questionAr: "كَمِّل: بِالمَسَا بَتْفَرَّج ___ مُسَلْسَل.",
                optionsEn: [
                    "عَلَى",
                    "مَع",
                    "مِن"
                ],
                correctIndex: 0
            },
            {
                id: "daily_q7",
                questionAr: "Which sentence means: Sometimes I read, and sometimes I watch something?",
                optionsEn: [
                    "أَحْيَانًا بَقْرَا، وَأَحْيَانًا بَتْفَرَّج.",
                    "كُلّ يَوم بَجْلِي الصُّحُون.",
                    "الصُّبُح بَرْجَع عَالبِيت."
                ],
                correctIndex: 0
            },
            {
                id: "daily_q8",
                questionAr: "Choose the best word: ___ بَصْحَى بَدْرِي، بَس مِش كُلّ يَوم.",
                optionsEn: [
                    "عَادَةً",
                    "بِاللِّيل",
                    "قَبِل مَا"
                ],
                correctIndex: 0
            },
            {
                id: "daily_q9",
                questionAr: "Choose the natural sentence for: After I come back, I rest a little.",
                optionsEn: [
                    "بَعْد مَا بَرْجَع، بَرْتَاح شُوَيّ.",
                    "قَبِل مَا أَنْزِل، بَنَام.",
                    "بِالمَسَا بَصْحَى بَدْرِي."
                ],
                correctIndex: 0
            },
            {
                id: "daily_q10",
                questionAr: "To a woman, how do you ask: What time do you wake up?",
                optionsEn: [
                    "أَيّ سَاعَة بِتْصْحِي؟",
                    "أَيّ سَاعَة بَصْحَى؟",
                    "أَيّ سَاعَة بِنْصَحى؟"
                ],
                correctIndex: 0
            }
        ],
        rolePlays: [
            "Student A asks about a normal day using أَيّ سَاعَة؟, وَبَعْدِين؟, and بَعْد مَا... Student B answers from morning to night. Then switch roles.",
            "Choose work or class. Explain when you leave, where you go, when you return, and what you do in the evening."
        ],
        sections: [
            {
                title: "A - Recognition and timeline",
                matching: [
                    {
                        ar: "الصُّبُح",
                        arabeezy: "el-soboh",
                        en: "in the morning"
                    },
                    {
                        ar: "بَعْد الضُّهُر",
                        arabeezy: "ba3d el-duhur",
                        en: "in the afternoon"
                    },
                    {
                        ar: "بِالمَسَا",
                        arabeezy: "bel-masa",
                        en: "in the evening"
                    },
                    {
                        ar: "بِاللِّيل",
                        arabeezy: "bel-leel",
                        en: "at night"
                    },
                    {
                        ar: "بَدْرِي",
                        arabeezy: "badri",
                        en: "early"
                    },
                    {
                        ar: "مِتْأَخِّر",
                        arabeezy: "mit2akher",
                        en: "late"
                    },
                    {
                        ar: "بَعْدِين",
                        arabeezy: "ba3deen",
                        en: "then / after that"
                    },
                    {
                        ar: "أَحْيَانًا",
                        arabeezy: "a7yanan",
                        en: "sometimes"
                    }
                ],
                multipleChoice: [
                    {
                        prompt: "Choose the action that normally comes first.",
                        options: [
                            "بَصْحَى",
                            "بَرْجَع عَالبِيت",
                            "بَنَام"
                        ],
                        correct: "بَصْحَى"
                    },
                    {
                        prompt: "Choose the home chore.",
                        options: [
                            "بَجْلِي الصُّحُون",
                            "بَرُوح عَالدَّرْس",
                            "بَشْرَب قَهْوَة"
                        ],
                        correct: "بَجْلِي الصُّحُون"
                    },
                    {
                        prompt: "Choose the pair that expresses alternatives for different students.",
                        options: [
                            "بَرُوح عَالشُّغُل / بَرُوح عَالدَّرْس",
                            "بَنَام / بِاللِّيل",
                            "بَدْرِي / الصُّبُح"
                        ],
                        correct: "بَرُوح عَالشُّغُل / بَرُوح عَالدَّرْس"
                    },
                    {
                        prompt: "Choose: I wake up early.",
                        options: [
                            "أَنَا بَصْحَى بَدْرِي.",
                            "أَنَا بِتْصْحَى بَدْرِي."
                        ],
                        correct: "أَنَا بَصْحَى بَدْرِي."
                    },
                    {
                        prompt: "Choose: You (woman) wake up early.",
                        options: [
                            "إِنْتِ بِتْصْحِي بَدْرِي.",
                            "إِنْتِ بَصْحَى بَدْرِي."
                        ],
                        correct: "إِنْتِ بِتْصْحِي بَدْرِي."
                    },
                    {
                        prompt: "Choose: You (man) go to work.",
                        options: [
                            "إِنْتَ بِتْرُوح عَالشُّغُل.",
                            "إِنْتَ بَرُوح عَالشُّغُل."
                        ],
                        correct: "إِنْتَ بِتْرُوح عَالشُّغُل."
                    },
                    {
                        prompt: "Choose: You (woman) sleep early.",
                        options: [
                            "إِنْتِ بِتْنَامِي بَدْرِي.",
                            "إِنْتِ بِتْنَام بَدْرِي."
                        ],
                        correct: "إِنْتِ بِتْنَامِي بَدْرِي."
                    }
                ]
            },
            {
                title: "B - Guided production",
                fillInTheBlank: [
                    {
                        prompt: "كُلّ يَوم ___ السَّاعَة سَبْعَة. (wake up)",
                        arabeezy: "kul yom ___ el-sa3a sab3a.",
                        answer: "بَصْحَى"
                    },
                    {
                        prompt: "الصُّبُح ___ وِجْهِي. (wash)",
                        arabeezy: "el-soboh ___ wijhi.",
                        answer: "بَغَسِّل"
                    },
                    {
                        prompt: "بَعْدِين ___ مَع أَهْلِي. (have breakfast)",
                        arabeezy: "ba3deen ___ ma3 ahli.",
                        answer: "بَفْطَر"
                    },
                    {
                        prompt: "بَعْد الفُطُور ___ مِن البِيت. (leave)",
                        arabeezy: "ba3d el-fuToor ___ min el-beit.",
                        answer: "بَنْزِل"
                    },
                    {
                        prompt: "أَنَا ___ عَالشُّغُل، وَأُخْتِي بِتْرُوح عَالدَّرْس. (go)",
                        arabeezy: "ana ___ 3ash-shoghol...",
                        answer: "بَرُوح"
                    },
                    {
                        prompt: "بَعْد الضُّهُر ___ عَالبِيت. (return)",
                        arabeezy: "ba3d el-duhur ___ 3al-beit.",
                        answer: "بَرْجَع"
                    },
                    {
                        prompt: "بِالمَسَا ___ عَلَى مُسَلْسَل. (watch)",
                        arabeezy: "bel-masa ___ 3ala musalsal.",
                        answer: "بَتْفَرَّج"
                    },
                    {
                        prompt: "بِاللِّيل ___ بَدْرِي. (sleep)",
                        arabeezy: "bel-leel ___ badri.",
                        answer: "بَنَام"
                    },
                    {
                        prompt: "___ مَا أَنْزِل، بَفْطَر. (before)",
                        arabeezy: "___ ma anzel, bafTar.",
                        answer: "قَبِل"
                    },
                    {
                        prompt: "___ مَا بَرْجَع، بَرْتَاح. (after)",
                        arabeezy: "___ ma barja3, barta7.",
                        answer: "بَعْد"
                    }
                ],
                correctTheMistake: [
                    {
                        prompt: "Correct the person form: أَنَا بِتْصْحَى بَدْرِي.",
                        arabeezy: "ana bitS7a badri.",
                        answer: "أَنَا بَصْحَى بَدْرِي."
                    },
                    {
                        prompt: "Correct the feminine form: إِنْتِ بِتْرُوح عَالدَّرْس.",
                        arabeezy: "inti bitroo7 3ad-dars.",
                        answer: "إِنْتِ بِتْرُوحِي عَالدَّرْس."
                    },
                    {
                        prompt: "Correct the connector: قَبِل الفُطُور بَشْرَب قَهْوَة. Intended meaning: After breakfast, I drink coffee.",
                        arabeezy: "qabel el-fuToor...",
                        answer: "بَعْد الفُطُور بَشْرَب قَهْوَة."
                    },
                    {
                        prompt: "Correct the time phrase: بِاللِّيل بَصْحَى بَدْرِي.",
                        arabeezy: "bel-leel baS7a badri.",
                        answer: "الصُّبُح بَصْحَى بَدْرِي."
                    }
                ],
                reorderSentences: [
                    {
                        prompt: "Build: Every day I wake up early.",
                        arabeezy: "kul yom baS7a badri.",
                        words: [
                            "بَدْرِي.",
                            "كُلّ يَوم",
                            "بَصْحَى"
                        ],
                        answer: "كُلّ يَوم بَصْحَى بَدْرِي."
                    },
                    {
                        prompt: "Build: In the morning I have breakfast with my family.",
                        arabeezy: "el-soboh bafTar ma3 ahli.",
                        words: [
                            
                            "بَفْطَر",
                            "مَع أَهْلِي.",
                            "الصُّبُح"
                        ],
                        answer: "الصُّبُح بَفْطَر مَع أَهْلِي."
                    },
                    {
                        prompt: "Build: After breakfast I leave the house.",
                        arabeezy: "ba3d el-fuToor banzel min el-beit.",
                        words: [
                            "بَنْزِل",
                            "مِن البِيت.",
                            "بَعْد الفُطُور"
                        ],
                        answer: "بَعْد الفُطُور بَنْزِل مِن البِيت."
                    },
                    {
                        prompt: "Build: In the afternoon I return home and rest.",
                        arabeezy: "ba3d el-duhur barja3 3al-beit w barta7.",
                        words: [
                           
                            "بَرْجَع عَالبِيت",
                             "وَبَرْتَاح.",
                            "بَعْد الضُّهُر"
                        ],
                        answer: "بَعْد الضُّهُر بَرْجَع عَالبِيت وَبَرْتَاح."
                    },
                    {
                        prompt: "Build the question to a woman: What time do you sleep?",
                        arabeezy: "ay sa3a bitnaami?",
                        words: [
                            "بِتْنَامِي؟",
                            "أَيّ سَاعَة"
                        ],
                        answer: "أَيّ سَاعَة بِتْنَامِي؟"
                    },
                    {
                        prompt: "Build: After I return, I rest a little.",
                        arabeezy: "ba3d ma barja3, barta7 shway.",
                        words: [
                            "بَرْتَاح شُوَيّ.",
                            "بَرْجَع،",
                            "بَعْد مَا "
                        ],
                        answer: "بَعْد مَا بَرْجَع، بَرْتَاح شُوَيّ."
                    }
                ]
            }
        ],
        translation: [
            {
                id: "daily_t1",
                type: "enToAr",
                textEn: "Every day I wake up early.",
                textAr: "كُلّ يَوم بَصْحَى بَدْرِي."
            },
            {
                id: "daily_t2",
                type: "arToEn",
                textEn: "In the morning I wash my face.",
                textAr: "الصُّبُح بَغَسِّل وِجْهِي."
            },
            {
                id: "daily_t3",
                type: "enToAr",
                textEn: "Then I have breakfast with my family.",
                textAr: "بَعْدِين بَفْطَر مَع أَهْلِي."
            },
            {
                id: "daily_t4",
                type: "arToEn",
                textEn: "After breakfast I drink coffee.",
                textAr: "بَعْد الفُطُور بَشْرَب قَهْوَة."
            },
            {
                id: "daily_t5",
                type: "enToAr",
                textEn: "I leave the house and go to work.",
                textAr: "بَنْزِل مِن البِيت وَبَرُوح عَالشُّغُل."
            },
            {
                id: "daily_t6",
                type: "arToEn",
                textEn: "I go to class and study Arabic.",
                textAr: "بَرُوح عَالدَّرْس وَبَدْرُس عَرَبِي."
            },
            {
                id: "daily_t7",
                type: "enToAr",
                textEn: "In the afternoon I return home.",
                textAr: "بَعْد الضُّهُر بَرْجَع عَالبِيت."
            },
            {
                id: "daily_t8",
                type: "arToEn",
                textEn: "I return home and rest a little.",
                textAr: "بَرْجَع عَالبِيت وَبَرْتَاح شُوَيّ."
            },
            {
                id: "daily_t9",
                type: "enToAr",
                textEn: "In the evening I watch a series.",
                textAr: "بِالمَسَا بَتْفَرَّج عَلَى مُسَلْسَل."
            },
            {
                id: "daily_t10",
                type: "arToEn",
                textEn: "Sometimes I read a book.",
                textAr: "أَحْيَانًا بَقْرَا كِتَاب."
            },
            {
                id: "daily_t11",
                type: "enToAr",
                textEn: "At night I sleep late.",
                textAr: "بِاللِّيل بَنَام مِتْأَخِّر."
            },
            {
                id: "daily_t12",
                type: "arToEn",
                textEn: "After lunch I wash the dishes.",
                textAr: "بَعْد الغَدَا بَجْلِي الصُّحُون."
            },
            {
                id: "daily_t13",
                type: "enToAr",
                textEn: "Usually I clean the house on Friday.",
                textAr: "عَادَةً بَنَضَّف البِيت يَوم الجُمْعَة."
            },
            {
                id: "daily_t14",
                type: "arToEn",
                textEn: "Before I leave, I have breakfast.",
                textAr: "قَبِل مَا أَنْزِل، بَفْطَر."
            },
            {
                id: "daily_t15",
                type: "enToAr",
                textEn: "After I return, I rest a little.",
                textAr: "بَعْد مَا بَرْجَع، بَرْتَاح شُوَيّ."
            }
        ]
    },

    homework: {
        instructions:
            `Write and record a 60-90 second description of your daily routine in Palestinian Arabic. Start from waking up in the morning and finish with sleeping at night. Mention: what time you wake up, what you eat or drink, where you go, when you come back, what you do in the evening, and what time you sleep. Try to use at least 8 words from the vocabulary list and at least 3 words from previous units.

Translate these sentences into Gaza Palestinian Arabic:
1. Hi, how are you today?
2. My name is Lina, and I live with my family.
3. Every day I wake up early.
4. In the morning I have breakfast with my mother.
5. My father goes to work at eight.
6. What time do you go to class?
7. Before I leave, I drink coffee.
8. I leave the house at eight.
9. In the afternoon I come back home.
10. I eat lunch with my family.
11. After I come back, I rest a little.
12. In the evening I study Arabic.
13. My sister reads a book at night.
14. My brother sleeps late every night.
15. Goodbye, see you later.`,
    },

    teacherNotes: {
        warmup: [
            "Start with Unit 1 and 2 recycling: مَرْحَبَا، كِيفَك؟ وِين سَاكِن؟ مِين سَاكِن مَعَك؟ Then ask about today.",
            "Ask whether the student is a morning person or a night person, then model: أَنَا بَصْحَى بَدْرِي / أَنَا بَنَام مِتْأَخِّر.",
            "Keep the routine as a timeline: الصُّبُح، بَعْد الضُّهُر، بِالمَسَا، بِاللِّيل.",
        ],
        vocabularySteps: [
            "Teach verbs as sentence chunks, not isolated words: بَصْحَى السَّاعَة سَبْعَة، بَفْطَر مَع أَهْلِي، بَرْجَع عَالبِيت.",
            "Teach the spoken b- pattern through repetition only; do not turn it into a grammar lecture.",
            "Recycle family words inside routine sentences so Unit 2 stays alive.",
        ],
        dialogueSteps: [
            "Read the dialogue as a real morning-rush story.",
            "Ask the student to retell Omar's routine in 4-6 sentences.",
            "Then replace Omar's routine with the student's real routine.",
        ],
        practiceTips: [
            "Require full answers: not السَّاعَة سَبْعَة only, but بَصْحَى السَّاعَة سَبْعَة.",
            "Drill masculine/feminine questions naturally: بِتِصْحَى؟ / بِتِصْحِي؟ بِتْنَام؟ / بِتْنَامِي؟",
            "If the student struggles, reduce to five core verbs: بَصْحَى، بَفْطَر، بَرُوح، بَرْجَع، بَنَام.",
        ],
        wrapup: [
            "Student says a 6-sentence routine without looking.",
            "Student asks the teacher 4 routine questions.",
            "End by connecting routine back to real life: record a voice note about tomorrow's normal day.",
        ],
        myNotes: "",
    },
};
