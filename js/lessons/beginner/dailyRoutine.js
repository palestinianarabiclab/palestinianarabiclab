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
                "id": "kull_yom",
                "ar": "كُلّ يَوم",
                "arArabeezy": "kul yom",
                "en": "Every day",
                "enArabeezy": "kull_yom",
                "hint": "Use it for a repeated habit. بَحِبّ (I like) was learned in Food & Drink.",
                "exampleAr": "كُلّ يَوم بَحِبّ أَحْكِي مَع إِمِّي.",
                "exampleArabeezy": "kul yom ba7ibb a7ki ma3 immi.",
                "exampleEn": "Every day I like to talk with my mother."
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
                "id": "bakir",
                "ar": "بَدْرِي",
                "arArabeezy": "badri",
                "en": "Early",
                "enArabeezy": "badri",
                "hint": "The main Gaza form in this course. Use it after a routine verb.",
                "exampleAr": "كُلّ يَوم بَصْحَى بَدْرِي.",
                "exampleArabeezy": "kul yom baS7a badri.",
                "exampleEn": "Every day I wake up early."
            },
            {
                "id": "mita2kher",
                "ar": "مِتْأَخَّر",
                "arArabeezy": "mtakhr",
                "en": "Late",
                "enArabeezy": "mita2kher",
                "hint": "Male: مِتْأَخِّر. Female: مِتْأَخِّرَة. It is the opposite of بَدْرِي.",
                "exampleAr": "بَصْحَى مِتْأَخِّر.",
                "exampleArabeezy": "baS7a mit2akher.",
                "exampleEn": "I wake up late."
            },
            {
                "id": "batghassal",
                "ar": "بَغَسِّل",
                "arArabeezy": "baghassal",
                "en": "I wash (my face / hands)",
                "enArabeezy": "baghassal",
                "hint": "Usually followed by what you wash: وِجْهِي = my face.",
                "exampleAr": "الصُّبُح بَغَسِّل وِجْهِي.",
                "exampleArabeezy": "el-soboh baghassal wijhi.",
                "exampleEn": "In the morning I wash my face."
            },
            {
                "id": "bat7ammam",
                "ar": "بَتْحَمَّم",
                "arArabeezy": "bt7mm",
                "en": "I take a shower",
                "enArabeezy": "bat7ammam",
                "hint": "A common morning-routine verb in the I-form.",
                "exampleAr": "الصُّبُح بَغَسِّل وِجْهِي وَبَتْحَمَّم.",
                "exampleArabeezy": "el-soboh baghassal wijhi w bat7ammam.",
                "exampleEn": "In the morning I wash my face and take a shower."
            },
            {
                "id": "b3deen",
                "ar": "بَعْدِين",
                "arArabeezy": "ba3deen",
                "en": "Then / after that",
                "enArabeezy": "ba3deen",
                "hint": "Use it to move naturally from one action to the next.",
                "exampleAr": "بَصْحَى، بَعْدِين بَغَسِّل وِجْهِي.",
                "exampleArabeezy": "baS7a, ba3deen baghassal wijhi.",
                "exampleEn": "I wake up, then I wash my face."
            },
            {
                "id": "bafTar",
                "ar": "بَفْطَر",
                "arArabeezy": "bftr",
                "en": "I have breakfast",
                "enArabeezy": "bafTar",
                "hint": "The verb for having breakfast. فُطُور and أَهْلِي were learned earlier.",
                "exampleAr": "الصُّبُح بَفْطَر مَع أَهْلِي.",
                "exampleArabeezy": "el-soboh bafTar ma3 ahli.",
                "exampleEn": "In the morning I have breakfast with my family."
            },
            {
                "id": "bashrab_ahwe",
                "ar": "بَشْرَب قَهْوَة",
                "arArabeezy": "bashrab ahwe",
                "en": "I drink coffee",
                "enArabeezy": "bashrab_ahwe",
                "hint": "قَهْوَة and شَاي were learned in Food & Drink.",
                "exampleAr": "بَعْد الفُطُور بَشْرَب قَهْوَة.",
                "exampleArabeezy": "ba3d el-fuToor bashrab ahwe.",
                "exampleEn": "After breakfast I drink coffee."
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
                "id": "banzel",
                "ar": "بَنْزِل",
                "arArabeezy": "bnzl",
                "en": "I go out / I leave (home)",
                "enArabeezy": "banzel",
                "hint": "Here it means leaving the house. In a transport lesson it can also mean getting off.",
                "exampleAr": "بَعْد الفُطُور بَنْزِل مِن البِيت.",
                "exampleArabeezy": "ba3d el-fuToor banzel min el-beit.",
                "exampleEn": "After breakfast I leave the house."
            },
            {
                "id": "baruu7_alshoghl",
                "ar": "بَرُوح عَالشُّغُل",
                "arArabeezy": "baroo7 3ash-shoghol",
                "en": "I go to work",
                "enArabeezy": "baroo7_3al_shoghol",
                "hint": "عَـ + الشُّغُل joins naturally as عَالشُّغُل in speech.",
                "exampleAr": "كُلّ يَوم بَرُوح عَالشُّغُل السَّاعَة تَمَانْيَة.",
                "exampleArabeezy": "kul yom baroo7 3ash-shoghol el-sa3a tamanye.",
                "exampleEn": "Every day I go to work at eight."
            },
            {
                "id": "baruu7_al_dars",
                "ar": "بَرُوح عَالدَّرْس",
                "arArabeezy": "baroo7 3ad-dars",
                "en": "I go to class / lesson",
                "enArabeezy": "baroo7_3al_dars",
                "hint": "Use this version if you study rather than work.",
                "exampleAr": "الصُّبُح بَرُوح عَالدَّرْس.",
                "exampleArabeezy": "el-soboh baroo7 3ad-dars.",
                "exampleEn": "In the morning I go to class."
            },
            {
                "id": "bashtaghel",
                "ar": "بَشْتِغِل",
                "arArabeezy": "bshtghl",
                "en": "I work",
                "enArabeezy": "bashteghil",
                "hint": "This is the I-form of the verb already heard in بِتِشْتِغِل وَلَّا بِتِدْرُس؟",
                "exampleAr": "بَشْتِغِل مَع أَبُوي.",
                "exampleArabeezy": "bashtaghel ma3 abuy.",
                "exampleEn": "I work with my father."
            },
            {
                "id": "badros",
                "ar": "بَدْرُس",
                "arArabeezy": "bdrs",
                "en": "I study",
                "enArabeezy": "badros",
                "hint": "This is the I-form of the verb already heard in بِتِشْتِغِل وَلَّا بِتِدْرُس؟",
                "exampleAr": "بَرُوح عَالدَّرْس وَبَدْرُس عَرَبِي.",
                "exampleArabeezy": "baroo7 3ad-dars w badros 3arabi.",
                "exampleEn": "I go to class and study Arabic."
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
                "id": "batfarraj",
                "ar": "بَتْفَرَّج عَلَى...",
                "arArabeezy": "batfarraj 3ala...",
                "en": "I watch (TV, series, etc.)",
                "enArabeezy": "batfarraj_3ala",
                "hint": "Keep عَلَى after this verb: watch TV/a series.",
                "exampleAr": "بِالمَسَا بَتْفَرَّج عَلَى مُسَلْسَل.",
                "exampleArabeezy": "bel-masa batfarraj 3ala musalsal.",
                "exampleEn": "In the evening I watch a series."
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
                "id": "banaam",
                "ar": "بَنَام",
                "arArabeezy": "bnam",
                "en": "I sleep",
                "enArabeezy": "banaam",
                "hint": "The routine I-form for sleeping.",
                "exampleAr": "بَعْدِين بَنَام.",
                "exampleArabeezy": "ba3deen banaam.",
                "exampleEn": "Then I sleep."
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
            {
                "id": "bajli",
                "ar": "بَجْلِي الصُّحُون",
                "arArabeezy": "bjly els7wn",
                "en": "I wash the dishes",
                "enArabeezy": "bajli_esSu7oon",
                "hint": "A common Gaza home-routine verb. الصُّحُون = the dishes.",
                "exampleAr": "بَعْد الغَدَا بَجْلِي الصُّحُون.",
                "exampleArabeezy": "ba3d el-ghada bajli el-Su7oon.",
                "exampleEn": "After lunch I wash the dishes."
            },
            {
                "id": "banaddaf",
                "ar": "بَنَضَّف",
                "arArabeezy": "bndf",
                "en": "I clean",
                "enArabeezy": "banaddaf",
                "hint": "Use it with the house or a room.",
                "exampleAr": "بَنَضَّف البِيت وَبَعْدِين بَرْتَاح.",
                "exampleArabeezy": "banaddaf el-beit w ba3deen barta7.",
                "exampleEn": "I clean the house and then rest."
            },
            {
                "id": "baSalli",
                "ar": "بَصَلِّي",
                "arArabeezy": "bsly",
                "en": "I pray",
                "enArabeezy": "baSalli",
                "hint": "The routine I-form for praying.",
                "exampleAr": "الصُّبُح بَصَلِّي، وَبَعْدِين بَفْطَر.",
                "exampleArabeezy": "el-soboh baSalli, w ba3deen bafTar.",
                "exampleEn": "In the morning I pray, then have breakfast."
            },
            {
                "id": "usually_words",
                "ar": "عَادَةً / غَالِبًا",
                "arArabeezy": "3adatan / ghaliban",
                "en": "usually / most of the time",
                "hint": "عَادَةً describes a usual habit; غَالِبًا means most of the time.",
                "exampleAr": "عَادَةً بَصْحَى بَدْرِي.",
                "exampleArabeezy": "3adatan baS7a badri.",
                "exampleEn": "I usually wake up early."
            },
            {
                "id": "abl_ma",
                "ar": "قَبِل مَا...",
                "arArabeezy": "qabel ma...",
                "en": "Before (doing something)",
                "enArabeezy": "abl_ma",
                "hint": "Use it before a connected action. أَنْزِل means 'I leave' here; after قَبِل مَا the routine بَـ is dropped.",
                "exampleAr": "قَبِل مَا أَنْزِل، بَفْطَر.",
                "exampleArabeezy": "qabel ma anzel, bafTar.",
                "exampleEn": "Before I leave, I have breakfast."
            },
            {
                "id": "ba3d_ma",
                "ar": "بَعْد مَا...",
                "arArabeezy": "b3d ma. . .",
                "en": "After (doing something)",
                "enArabeezy": "ba3d_ma",
                "hint": "Use it before a connected action. In repeated routines Gaza speakers commonly keep the بَـ form: بَعْد مَا بَرْجَع.",
                "exampleAr": "بَعْد مَا بَرْجَع، بَرْتَاح شُوَيّ.",
                "exampleArabeezy": "ba3d ma barja3, barta7 shway.",
                "exampleEn": "After I come back, I rest a little."
            }
        ],
        extra: [
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
                "id": "bansa2",
                "ar": "برتب الْغُرْفَة",
                "arArabeezy": "brtb elghrfa",
                "en": "I tidy the room",
                "enArabeezy": "bartattib_elghurfeh",
                "hint": "Organize / straighten the room.",
                "exampleAr": "قَبِل مَا أَطْلَع برتب الْغُرْفَة.",
                "exampleArabeezy": "qbl ma atl3 brtb elghrfa.",
                "exampleEn": "Before I go out, I tidy the room."
            },
            {
                "id": "bistarih_shway",
                "ar": "بِسْتَرِيح شَوَيّ",
                "arArabeezy": "bstry7 shwy",
                "en": "I take a little rest",
                "enArabeezy": "bistariy7_shway",
                "hint": "Alternative to بَرْتَاح شَوَيّ.",
                "exampleAr": "بَعْد الشُّغُل بِسْتَرِيح شَوَيّ.",
                "exampleArabeezy": "b3d elshghl bstry7 shwy.",
                "exampleEn": "After work I take a little rest."
            }
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
        {
            title: "2. Negating a routine with مَا",
            short: "مَا بَفْطَر — مَا بِتْأَخَّرُوا — مَا بَنَام بَكِّير",
            description: "To negate an action in the everyday present, put مَا directly before the conjugated verb. Keep the person marking on the verb. مِش is normally used to negate descriptions, identities, and some planned or participle-like expressions; this unit’s routine actions use مَا as the safe core pattern.",
            table: {
                title: "Affirmative and negative routine",
                headers: ["Affirmative", "Negative", "Meaning"],
                rows: [
                    ["بَفْطَر", "مَا بَفْطَر", "I eat / do not eat breakfast"],
                    ["بِتْشْرَبِي قَهْوَة", "مَا بِتْشْرَبِي قَهْوَة", "you (f.) drink / do not drink coffee"],
                    ["بِنَام بَكِّير", "مَا بَنَام بَكِّير", "he sleeps / does not sleep early"],
                    ["بِتْأَخَّرُوا", "مَا بِتْأَخَّرُوا", "they are / are not late"],
                ],
            },
            examples: [
                { ar: "أَنَا مَا بَشْرَب قَهْوَة بِاللِّيل.", arabeezy: "ana ma bashrab qahweh bil-leil.", en: "I don’t drink coffee at night." },
                { ar: "هِيَّ مَا بِتْرُوح عَالشُّغُل يَوم الجُمْعَة.", arabeezy: "hiyyeh ma bitroo7 3ash-shughul yom el-jum3a.", en: "She doesn’t go to work on Friday." },
                { ar: "إِحْنَا مَا بِنْتْأَخَّر عَن الدَّرْس.", arabeezy: "i7na ma bnit2akhkhar 3an ed-dars.", en: "We aren’t late for class." },
            ],
            commonMistakes: [
                "Do not remove بـ after مَا: say مَا بَرُوح, not مَا رُوح for a habitual present statement.",
                "Do not use لَا as the default spoken negator for a personal routine. لَا appears in commands and fixed expressions; مَا is the core here.",
                "Some Palestinian speakers add final ـش for emphasis or regional style. This course first stabilises the widely understood مَا + present verb pattern.",
            ],
            exercises: [
                { prompt: "Make بَنَام بَكِّير negative.", options: ["مَا بَنَام بَكِّير.", "لَا بَنَام بَكِّير.", "مَا نَام بَكِّير."], correct: "مَا بَنَام بَكِّير.", explanation: "Place مَا before the complete present form بَنَام." },
                { prompt: "Choose: ‘They do not study at night.’", options: ["هُمَّ مَا بِدْرُسُوا بِاللِّيل.", "هُمَّ مِش بِدْرُس بِاللِّيل.", "هُمَّ لَا دَرَسُوا بِاللِّيل."], correct: "هُمَّ مَا بِدْرُسُوا بِاللِّيل.", explanation: "The plural present remains بِدْرُسُوا after مَا." },
                { prompt: "What is wrong with مَا رُوح عَالشُّغُل كُلّ يَوم?", options: ["The present verb is missing its بـ/person form.", "مَا can never negate a verb.", "عَ means the past."], correct: "The present verb is missing its بـ/person form.", explanation: "For ‘I don’t go’, use مَا بَرُوح." },
            ],
        },
        {
            title: "3. Asking and telling the time naturally",
            short: "أَيّ سَاعَة؟ — السَّاعَة سَبْعَة — عَالسَّبْعَة",
            description: "Palestinian Arabic commonly asks أَيّ سَاعَة؟ for a clock time and إِمْتَى؟ for a broader ‘when?’. Exact clock answers often use السَّاعَة + number. عَالسَّبْعَة means ‘around/at seven’ inside a plan or routine and can feel less like reading a clock.",
            table: {
                title: "Useful clock-time chunks",
                headers: ["Arabic", "Arabizi", "Natural meaning", "Usage"],
                rows: [
                    ["أَيّ سَاعَة؟", "ay sa3a?", "what time?", "asks for clock time"],
                    ["إِمْتَى؟", "eimta?", "when?", "asks for a day, period, or time"],
                    ["السَّاعَة سَبْعَة", "es-sa3a sab3a", "at seven / it is seven", "exact answer"],
                    ["عَالسَّبْعَة", "3as-sab3a", "at/around seven", "inside a routine or arrangement"],
                    ["سَبْعَة وَنُصّ", "sab3a w noSS", "seven thirty", "half past seven"],
                    ["سَبْعَة وَرُبُع", "sab3a w rubu3", "seven fifteen", "quarter past seven"],
                    ["تَمَانْيَة إِلَّا رُبُع", "tamanye illa rubu3", "quarter to eight", "7:45"],
                ],
            },
            examples: [
                { ar: "أَيّ سَاعَة بِتْصْحَى؟ — السَّاعَة سِتَّة وَنُصّ.", arabeezy: "ay sa3a bitS7a? — es-sa3a sitteh w noSS.", en: "What time do you wake up? — At six thirty." },
                { ar: "إِمْتَى بِتْرُوح عَالجَامْعَة؟ — بَعْد الفَطُور.", arabeezy: "eimta bitroo7 3al-jam3a? — ba3d el-faToor.", en: "When do you go to university? — After breakfast." },
                { ar: "عَادَةً بَرْجَع عَالبِيت عَالخَمْسَة.", arabeezy: "3adatan barja3 3al-beit 3al-khamseh.", en: "I usually return home at five." },
            ],
            commonMistakes: [
                "Do not translate English ‘at’ mechanically in every answer. السَّاعَة سَبْعَة is already a complete natural time answer.",
                "أَيّ سَاعَة requests a clock time; إِمْتَى allows answers like بُكْرَة, بَعْد الفَطُور, or يَوم الجُمْعَة.",
                "For 7:30, Palestinian speech says سَبْعَة وَنُصّ, not a literal ‘seven and thirty’." ,
            ],
            exercises: [
                { prompt: "You need an exact clock time. Which question is most precise?", options: ["أَيّ سَاعَة؟", "مِن وِين؟", "قَدِّيش مَرَّة؟"], correct: "أَيّ سَاعَة؟", explanation: "أَيّ سَاعَة asks specifically for the time on the clock." },
                { prompt: "Choose 7:30.", options: ["سَبْعَة وَنُصّ", "سَبْعَة إِلَّا نُصّ", "تَمَانْيَة وَرُبُع"], correct: "سَبْعَة وَنُصّ", explanation: "وَنُصّ means ‘and a half’: half past seven." },
                { prompt: "Which is a natural answer to إِمْتَى بِتْدْرُس؟", options: ["بَعْد العَشَا.", "السَّاعَة قَدِّيش؟", "مِن غَزَّة."], correct: "بَعْد العَشَا.", explanation: "إِمْتَى can be answered with a broad time phrase such as ‘after dinner’." },
            ],
        },
        {
            title: "4. Frequency words: how often a routine happens",
            short: "دَايْمًا، عَادَةً، غَالِبًا، أَحْيَانًا، نَادِرًا",
            description: "Frequency words let the student describe a real routine rather than a rigid list. They can appear before the verb or at the start of the sentence. Palestinian speakers also use chunks such as كُلّ يَوم, مَرَّتَيْن بِالأُسْبُوع, and مِن وَقْت لِوَقْت.",
            table: {
                title: "A practical frequency scale",
                headers: ["Expression", "Arabizi", "Approximate meaning", "Example chunk"],
                rows: [
                    ["دَايْمًا", "dayman", "always", "دَايْمًا بَفْطَر"],
                    ["عَادَةً", "3adatan", "usually", "عَادَةً بَصْحَى بَكِّير"],
                    ["غَالِبًا", "ghaliban", "most of the time", "غَالِبًا بَرُوح مَاشِي"],
                    ["أَحْيَانًا", "a7yanan", "sometimes", "أَحْيَانًا بَتْأَخَّر"],
                    ["نَادِرًا", "nadiran", "rarely", "نَادِرًا بَشْرَب قَهْوَة"],
                    ["وَلَا مَرَّة", "wala marra", "never / not once", "وَلَا مَرَّة بِتْأَخَّر"],
                ],
            },
            examples: [
                { ar: "عَادَةً بَفْطَر مَع أَهْلِي، بَس أَحْيَانًا مَا بَلْحَق.", arabeezy: "3adatan bafTar ma3 ahli, bas a7yanan ma bal7aq.", en: "I usually eat breakfast with my family, but sometimes I don’t have time." },
                { ar: "هِيَّ غَالِبًا بِتْدْرُس بِالمَسَا.", arabeezy: "hiyyeh ghaliban bitdros bil-masa.", en: "She studies in the evening most of the time." },
                { ar: "مَرَّتَيْن بِالأُسْبُوع بَنَضِّف البِيت.", arabeezy: "marratein bil-usboo3 banaDDif el-beit.", en: "I clean the house twice a week." },
            ],
            commonMistakes: [
                "دَايْمًا is a strong claim. If the routine has exceptions, عَادَةً or غَالِبًا is often more accurate.",
                "A frequency word does not replace person conjugation: هِيَّ أَحْيَانًا بِتْدْرُس, not هِيَّ أَحْيَانًا دَرَس.",
                "وَلَا مَرَّة is already negative in meaning, but spoken sentence patterns vary. Learn complete chunks from real examples.",
            ],
            exercises: [
                { prompt: "Choose the best word for a habit that happens on most days but not every day.", options: ["عَادَةً", "وَلَا مَرَّة", "دَايْمًا"], correct: "عَادَةً", explanation: "عَادَةً means ‘usually’ and allows exceptions." },
                { prompt: "Complete: ___ بَقْرَا قَبْل مَا أَنَام، مِش كُلّ يَوم. (sometimes)", options: ["أَحْيَانًا", "دَايْمًا", "وَلَا مَرَّة"], correct: "أَحْيَانًا", explanation: "أَحْيَانًا matches an action that happens sometimes, not daily." },
                { prompt: "Which phrase means ‘twice a week’?", options: ["مَرَّتَيْن بِالأُسْبُوع", "مَرَّة كُلّ يَوم", "أُسْبُوعَيْن"], correct: "مَرَّتَيْن بِالأُسْبُوع", explanation: "مَرَّتَيْن means twice; بِالأُسْبُوع means per week." },
            ],
        },
        {
            title: "5. Connecting the day with قَبْل مَا and بَعْد مَا",
            short: "قَبْل مَا أَطْلَع — بَعْد مَا أَرْجَع",
            description: "A natural routine is connected, not a list of isolated sentences. Use قَبْل مَا + verb for ‘before doing’ and بَعْد مَا + verb for ‘after doing’. The verb after مَا still agrees with the person. When the following item is a noun, مَا is not needed: بَعْد الفَطُور.",
            table: {
                title: "Verb connection versus noun time phrase",
                headers: ["Structure", "Example", "Meaning"],
                rows: [
                    ["قَبْل مَا + verb", "قَبْل مَا أَطْلَع", "before I leave"],
                    ["بَعْد مَا + verb", "بَعْد مَا أَرْجَع", "after I return"],
                    ["قَبْل + noun", "قَبْل الشُّغُل", "before work"],
                    ["بَعْد + noun", "بَعْد الفَطُور", "after breakfast"],
                ],
            },
            examples: [
                { ar: "قَبْل مَا أَطْلَع مِن البِيت، بَشْرَب قَهْوَة.", arabeezy: "qabel ma aTla3 min el-beit, bashrab qahweh.", en: "Before I leave home, I drink coffee." },
                { ar: "بَعْد مَا بِرْجَع مِن الشُّغُل، بِرْتَاح شُوَيّ.", arabeezy: "ba3d ma birja3 min esh-shughul, birta7 shway.", en: "After he returns from work, he rests a little." },
                { ar: "بَعْد العَشَا بَحْكِي مَع عِيلْتِي.", arabeezy: "ba3d el-3asha ba7ki ma3 3eelti.", en: "After dinner, I talk with my family." },
            ],
            commonMistakes: [
                "Use مَا before a following verb: بَعْد مَا أَرْجَع. Do not insert it before a noun: بَعْد الفَطُور.",
                "Conjugate the connected verb for its real subject: بَعْد مَا بِرْجَع (he), بَعْد مَا بِرْجَعُوا (they).",
                "Do not copy English word order mechanically. Learn قَبْل مَا and بَعْد مَا as spoken connectors.",
            ],
            exercises: [
                { prompt: "Choose: ‘after I return’.", options: ["بَعْد مَا أَرْجَع", "بَعْد أَنَا رَجَع", "بَعْد مِن أَرْجَع"], correct: "بَعْد مَا أَرْجَع", explanation: "The natural connector before a verb is بَعْد مَا." },
                { prompt: "Complete: ___ الفَطُور بَرُوح عَالشُّغُل. (after breakfast)", options: ["بَعْد", "بَعْد مَا", "قَبْل مَا"], correct: "بَعْد", explanation: "الفَطُور is a noun, so use بَعْد without مَا." },
                { prompt: "Choose the correct form for ‘before they sleep’.", options: ["قَبْل مَا يِنَامُوا", "قَبْل مَا يِنَام", "قَبْل هُمَّ نَام"], correct: "قَبْل مَا يِنَامُوا", explanation: "The verb after قَبْل مَا agrees with the plural subject through ـُوا." },
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
                "prompt": "Complete the Arabic sentence for: Every day I wake up early.\nكُلّ يَوم بَصْحَى ___.",
                "options": [
                    "بَدْرِي",
                    "الغَدَا",
                    "عَالشُّغُل",
                    "بَعْدِين"
                ],
                "correct": "بَدْرِي"
            },
            {
                "id": "daily_mc2",
                "type": "reorder",
                "prompt": "Reorder the Arabic words to match: I wake up, wash my face, then have breakfast.",
                "options": [
                    "بَصْحَى",
                    "بَغَسِّل",
                    "وِجْهِي",
                    "بَعْدِين",
                    "بَفْطَر"
                ],
                "correct": [
                    "بَصْحَى",
                    "بَغَسِّل",
                    "وِجْهِي",
                    "بَعْدِين",
                    "بَفْطَر"
                ]
            },
            {
                "id": "daily_mc3",
                "type": "choose",
                "prompt": "Choose the Gaza Palestinian Arabic sentence for: I go to work at eight.",
                "options": [
                    "بَرُوح عَالشُّغُل السَّاعَة تَمَانْيَة.",
                    "بَرُوح عَالدَّرْس السَّاعَة تَمَانْيَة.",
                    "بَرُوح عَالشُّغُل الصُّبُح.",
                    "بَشْتِغِل مَع أَبُوي السَّاعَة تَمَانْيَة."
                ],
                "correct": "بَرُوح عَالشُّغُل السَّاعَة تَمَانْيَة."
            },
            {
                "id": "daily_mc4",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: In the afternoon I return home and rest.\nبَعْد الضُّهُر بَرْجَع عَالبِيت و___.",
                "options": [
                    "بَرْتَاح",
                    "بَفْطَر",
                    "بَنْزِل",
                    "بَصْحَى"
                ],
                "correct": "بَرْتَاح"
            },
            {
                "id": "daily_mc5",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: In the evening I read a book, and at night I sleep.\nبِالمَسَا بَقْرَا كِتَاب، وَبِاللِّيل ___.",
                "options": [
                    "بَنَام",
                    "بَرُوح عَالدَّرْس",
                    "بَشْرَب قَهْوَة",
                    "بَنْزِل"
                ],
                "correct": "بَنَام"
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
            {
                "id": "daily_mc7",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: After I return, I rest a little.\nبَعْد مَا بَرْجَع، ___ شُوَيّ.",
                "options": [
                    "بَرْتَاح",
                    "بَصْحَى",
                    "بَنْزِل",
                    "بَتْحَمَّم"
                ],
                "correct": "بَرْتَاح"
            }
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
                            "مَع أَهْلِي.",
                            "بَفْطَر",
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
                            "وَبَرْتَاح.",
                            "بَرْجَع عَالبِيت",
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
                            "بَعْد مَا بَرْجَع"
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
