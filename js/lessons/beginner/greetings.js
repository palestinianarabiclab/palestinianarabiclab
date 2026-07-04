import { LESSON_ID_GREETING } from '../../core/constants.js';

export const lessonId = LESSON_ID_GREETING;

export const lesson = {
    meta: {
        level: "Beginner",
        unit: "Greetings",
        lessonTitle: "Unit 1 - Greetings & Introductions (Gaza Palestinian Arabic)",
        contentVersion: 2026062708,
    },

    overview: {
        title: "Unit 1 - Greetings & Introductions",
        description:
            "Students learn to start a simple real conversation in Gaza Palestinian Arabic: greet someone, ask how they are, introduce their name, ask where someone is from, say where they live, and close politely.",
        goals: [
            "Greet someone naturally in a beginner-friendly conversation.",
            "Ask and answer: name, origin, and current place of living.",
            "Use simple feeling answers like مْنِيح / مْنِيحَة, تَمَام, and تَعْبَان / تَعْبَانَة.",
            "Use polite classroom phrases when they do not understand.",
            "Close a short conversation with natural Gaza-style phrases.",
        ],
        speakingOutcomes: [
            "By the end of this unit, the student can introduce themselves in 30-45 seconds.",
            "The student can meet a new classmate and ask 4-5 basic questions.",
            "The student can ask for help or repetition during a lesson.",
        ],
    },

    vocabulary: {
        core: [
            {
                id: "marhaba",
                ar: "مَرْحَبَا",
                en: "Hello",
                enArabeezy: "marhaba",
                hint: "Main greeting. Natural replies: أَهْلًا، أَهْلِين، مَرْحَبْتِين، يَا هَلَا.",
                exampleAr: "مَرْحَبَا، كِيفَك؟",
                exampleArabeezy: "marhaba, keefak?",
                exampleEn: "Hello, how are you?",
            },
            {
                id: "sabah_el_kheir",
                ar: "صَبَاح الخِير",
                en: "Good morning",
                enArabeezy: "sabah el-kheir",
                hint: "Morning greeting. Replies: صَبَاح النُّور، يِسْعِد صَبَاحَك.",
                exampleAr: "صَبَاح الخِير يَا أُسْتَاذ.",
                exampleArabeezy: "sabah el-kheir ya ustaz.",
                exampleEn: "Good morning, teacher.",
            },
            {
                id: "masa_el_kheir",
                ar: "مَسَا الخِير",
                en: "Good evening",
                enArabeezy: "masa el-kheir",
                hint: "Evening greeting. Reply: مَسَا النُّور.",
                exampleAr: "مَسَا الخِير يَا جَمَاعَة.",
                exampleArabeezy: "masa el-kheir ya jama3a.",
                exampleEn: "Good evening, everyone.",
            },
            {
                id: "ahlan_wa_sahlan",
                ar: "أَهْلًا وَسَهْلًا",
                en: "Welcome",
                enArabeezy: "ahlan wa sahlan",
                hint: "Main welcome phrase. You can add فيك / فيكي / فيكم. Warmer extra phrase: نَوَّرْت (m), نَوَّرْتِي (f), نَوَّرْتُوا (pl).",
                exampleAr: "أَهْلًا وَسَهْلًا فِيك، نَوَّرْت.",
                exampleArabeezy: "ahlan wa sahlan feeki, nourt.",
                exampleEn: "Welcome to you, I'm glad (you lit up the place).",
            },
           {
                id: "ya3teek_el_afyeh",
                ar: "يِعْطِيك الْعَافِيَة",
                en: "hello / good job / thanks for your effort",
                enArabeezy: "ya3teek el-3afyeh",
                hint:
                    "Very common Palestinian expression. Use it to greet someone who is working, helping, or doing something. Natural reply: الله يْعَافِيك.",
                exampleAr: "يِعْطِيك الْعَافِيَة. ـ الله يْعَافِيك.",
                exampleArabeezy: "ya3teek el-3afyeh. - allah y3afeek.",
                exampleEn: "Thanks for your effort. — God bless you.",
            },
            {
                id: "keefak",
                ar: "كِيفَك؟",
                en: "How are you?",
                enArabeezy: "keefak?",
                hint: "To a man: كِيفَك؟ To a woman: كِيفِك؟ To a group: كِيفْكُم؟ Also: كِيف حَالَك؟",
                exampleAr: "كِيفَك اليَوم؟",
                exampleArabeezy: "keefak el-yom?",
                exampleEn: "How are you today?",
            },
            {
                id: "shu_el_akhbar",
                ar: "شُو الْأَخْبَار؟",
                en: "what's new? / how are things?",
                enArabeezy: "shu el-akhbar",
                hint:  "Warm follow-up after a greeting. You can add كُلُّه تَمَام؟ = is everything okay?",
                exampleAr: "شُو الْأَخْبَار؟ كُلُّه تَمَام؟",
                exampleArabeezy: "shu el-akhbar? kullu tamam?",
                exampleEn: "Hey, what's new? Is everything okay?",
            },
              {
                id: "tammenni_3annak",
                ar: "طَمِّنِّي عَلَيْك / عَنْك",
                en: "Tell me how you are / reassure me about you",
                enArabeezy: "Tamminni 3aleek / 3annak",
                hint: "Use when you care about someone or have not heard from them. To a man: طَمِّنِّي عَنْك. To a woman: طَمِّنِينِي عَنْكِ. To a group: طَمِّنُونِي عَنْكُم.",
                exampleAr: "بَعْد الدَّرْس طَمِّنِّي عَلَيْك.",
                exampleArabeezy: "ba3d el-dars Tamminni 3aleek.",
                exampleEn: "After class, tell me how you're doing.",
            },
          {
    id: "tamam",
    ar: "تَمَام / بِخَيْر",
    en: "Good / fine",
    enArabeezy: "tamam / bekheer",
    hint: "The two most common answers to 'How are you?' in spoken Palestinian Arabic. تَمَام is also used to mean 'okay'.",
    exampleAr: "كَيْفَك؟ — أَنَا تَمَام، الحَمْدُ لله.",
    exampleArabeezy: "keefak? — ana tamam, el-hamdulillah.",
    exampleEn: "How are you? — I'm good, thank God.",
},
           
            {
                id: "ta3ban",
                ar: "تَعْبَان / تَعْبَانَة",
                en: "Tired",
                enArabeezy: "ta3ban / ta3baneh",
                hint: "Male: تَعْبَان. Female: تَعْبَانَة.",
                exampleAr: "أَنَا شُوَيّ تَعْبَان اليَوم.",
                exampleArabeezy: "ana shway ta3ban el-yom.",
                exampleEn: "I'm a little tired today.",
            },
            {
                id: "mashi_el_hal",
                ar: "مَاشِي الحَال",
                en: "Okay / so-so",
                enArabeezy: "mashi el-hal",
                hint: "Neutral answer: not great, not bad.",
                exampleAr: "كِيفَك؟ مَاشِي الحَال.",
                exampleArabeezy: "keefak? mashi el-hal.",
                exampleEn: "How are you? I'm okay.",
            },
          
            {
                id: "sho_ismak",
                ar: "شُو اِسْمَك؟",
                en: "What's your name?",
                 enArabeezy: "shu ismak / shu ismik",
                hint:
                    "Ask after the first greeting. To a man: شُو اِسْمَك؟ To a woman: شُو اِسْمِك؟ Answer: أَنَا اِسْمِي...",
                exampleAr: "شُو اِسْمِك؟ ـ أَنَا اِسْمِي لِين.",
                exampleArabeezy: "shu ismik? - ana ismi leen.",
                exampleEn: "What’s your name? — My name is Lynn.",
            },
            
            {
                id: "tasharrafna",
                ar: "تْشَرَّفْنَا",
                en: "Nice to meet you",
                enArabeezy: "tsharrafna",
                hint: "Similar polite expression: فُرْصَة سَعِيدَة.",
                exampleAr: "تْشَرَّفْنَا يَا لِين.",
                exampleArabeezy: "tsharrafna ya leen.",
                exampleEn: "Nice to meet you, Lynn.",
            },
            {
                id: "min_wen",
                ar: "مِن وِين؟",
                en: "From where?",
                enArabeezy: "min wen?",
                hint: "Ask origin. Full question: إِنْتَ مِن وِين؟ / إِنْتِ مِن وِين؟ Answer: أَنَا مِن غَزَّة / كَنَدَا / أَمْرِيكَا.",
                exampleAr: "إِنْتِ مِن وِين؟ ـ أَنَا مِن كَنَدَا.",
                exampleArabeezy: "inti min wen? - ana min canada.",
                exampleEn: "Where are you from? - I'm from Canada.",
            },
            {
                id: "wen_saken",
                ar: "وِين سَاكِن؟",
                en: "Where do you live?",
                enArabeezy: "wein saken / wein sakneh",
                hint:
                    "Ask about current home. Masc: وِين سَاكِن؟ Fem: وِين سَاكْنَة؟ Plural: وِين سَاكْنِين؟ Answer: أَنَا سَاكِن/سَاكْنَة فِي...",
                    exampleAr: "هَلْقِيت وِين سَاكْنَة؟ ـ سَاكْنَة فِي غَزَّة.",
                exampleArabeezy: "halla2et wen sakneh? - sakneh fi ghazza.",
                exampleEn: "Where do you live now? - I live in Gaza.",
            },
            {
                id: "addeesh_omrak",
                ar: "قَدِّيش عُمُرَك؟",
                en: "How old are you?",
                enArabeezy: "addeesh omrak?",
                hint: "To a man: قَدِّيش عُمُرَك؟ To a woman: قَدِّيش عُمُرِك؟ Answer: عُمْرِي... سَنَة.",
                exampleAr: "قَدِّيش عُمُرِك؟",
                exampleArabeezy: "addeesh omrik?",
                exampleEn: "How old are you?",
            },
             {
                id: "shu_bti3mel",
                ar: "شُو بِتْعْمَل؟",
                en: "what are you doing? / what are you up to?",
                enArabeezy: "shu bti3mel / shu bti3mali",
                hint:
                    "Casual small-talk question. To a man: شُو بِتْعْمَل؟ To a woman: شُو بِتْعْمَلِي؟ Related very casual check-in: شُو فِي مَا فِي؟",
                exampleAr: "أَهْلِين، شُو بِتْعْمَل؟",
                exampleArabeezy: "ahlein, shu bti3mel?",
                exampleEn: "Hey, what are you up to?",
            },
           {
                id: "btishtighel_walla_btudros",
                ar: "بِتِشْتِغِل وَلَّا بِتِدْرُس؟",
                en: "do you work or study?",
                enArabeezy: "btishtighel walla btudros",
                hint:
                    "Useful introduction question after name/origin. To a woman: بِتِشْتِغْلِي وَلَّا بِتِدْرُسِي؟ Keep it as a conversation question, not a vocabulary focus.",
                exampleAr: "بِتِشْتِغِل وَلَّا بِتِدْرُس؟",
                exampleArabeezy: "btishtighel walla btudros?",
                exampleEn: "Do you work or study?",
            },
            {
                id: "shukran",
                ar: "شُكْرًا",
                en: "Thank you",
                enArabeezy: "shukran",
                hint: "You can also say: يِسْلَمُوا. Natural replies: عَفْوًا، وَلَا يِهِمَّك، الله يْسَلِّمَك.",
                exampleAr: "شُكْرًا كْتِير. ـ عَفْوًا، وَلَا يِهِمَّك.",
                exampleArabeezy: "shukran kteer. - 3afwan, wala yhemmak.",
                exampleEn: "Thank you very much. - You're welcome, no problem.",
            },
            {
                id: "ma3_salama",
                ar: "مَع السَّلَامَة",
                en: "Goodbye",
                enArabeezy: "ma3 salameh",
                hint: "Other closings: الله مَعَك، فِي رِعَايِة الله، بَاي.",
                exampleAr: "مَع السَّلَامَة، الله مَعَك.",
                exampleArabeezy: "ma3 salameh, allah ma3ak.",
                exampleEn: "Goodbye, God be with you.",
            },
            {
                id: "binshoofak",
                ar: "بِنْشُوفَك بَعْدِين",
                en: "See you later",
                enArabeezy: "binshoofak ba3deen",
                hint: "To a woman: بِنْشُوفِك بَعْدِين. You can add: دِير بَالَك عَلَى حَالَك.",
                exampleAr: "يَلَّا، بِنْشُوفَك بَعْدِين.",
                exampleArabeezy: "yalla, binshoofak ba3deen.",
                exampleEn: "Alright, see you later.",
            },
        ],
    },

    dialogue: {
        title: "Real Situation - New Students Meet Before Class",
        setting: "A new student meets a classmate before the first Arabic lesson. The teacher joins briefly.",
        lines: [
            { speaker: "Samer", ar: "مَرْحَبَا، إِنْتِ جَدِيدَة فِي الصَّف؟", arArabeezy: "marhaba, inti jdeedeh fi el-Saff?", en: "Hi, are you new in the class?" },
            { speaker: "Lina", ar: "آه، مَرْحَبَا. أَنَا جَدِيدَة هِنَا.", arArabeezy: "ah, marhaba. ana jdeedeh hena.", en: "Yes, hi. I'm new here." },
            { speaker: "Samer", ar: "أَهْلِين. شُو اِسْمِك؟", arArabeezy: "ahleen. sho ismik?", en: "Hi. What's your name?" },
            { speaker: "Lina", ar: "اِسْمِي لِين. وَإِنْتَ شُو اِسْمَك؟", arArabeezy: "ismi leen. w inta sho ismak?", en: "My name is Lynn. And what's your name?" },
            { speaker: "Samer", ar: "اِسْمِي سَامِر. تْشَرَّفْنَا يَا لِين.", arArabeezy: "ismi samer. tsharrafna ya leen.", en: "My name is Samer. Nice to meet you, Lynn." },
            { speaker: "Lina", ar: "تْشَرَّفْنَا يَا سَامِر.", arArabeezy: "tsharrafna ya samer.", en: "Nice to meet you, Samer." },
            { speaker: "Samer", ar: "أَهْلًا وَسَهْلًا فِيكِي فِي الصَّف.", arArabeezy: "ahlan wa sahlan feeki fi el-Saff.", en: "Welcome to the class." },
            { speaker: "Samer", ar: "إِنْتِ مِن وِين؟", arArabeezy: "inti min wen?", en: "Where are you from?" },
            { speaker: "Lina", ar: "أَنَا مِن كَنَدَا.", arArabeezy: "ana min canada.", en: "I'm from Canada." },
            { speaker: "Lina", ar: "وَإِنْتَ مِن وِين؟", arArabeezy: "w inta min wen?", en: "And where are you from?" },
            { speaker: "Samer", ar: "أَنَا مِن غَزَّة.", arArabeezy: "ana min ghazza.", en: "I'm from Gaza." },
            { speaker: "Samer", ar: "هَلْقِيت إِنْتِ وِين سَاكْنَة؟", arArabeezy: "halla2et inti wen sakneh?", en: "Where do you live now?" },
            { speaker: "Lina", ar: "أَنَا سَاكْنَة فِي غَزَّة، قَرِيب مِن المَدْرَسَة.", arArabeezy: "ana sakneh fi ghazza, qareeb min el-madraseh.", en: "I live in Gaza, near the school." },
            { speaker: "Samer", ar: "قَدِّيش عُمُرِك، إِذَا عَادِي؟", arArabeezy: "addeesh omrik, iza 3adi?", en: "How old are you, if that's okay?" },
            { speaker: "Lina", ar: "عُمْرِي عِشْرِين سَنَة.", arArabeezy: "omri 3ishreen saneh.", en: "I'm twenty years old." },
            { speaker: "Lina", ar: "حِلْو. الصَّف وِين؟", arArabeezy: "7ilu. el-Saff wen?", en: "Nice. Where is the class?" },
            { speaker: "Samer", ar: "الصَّف هِنَا، جَنْب البَاب.", arArabeezy: "el-Saff hena, jamb el-bab.", en: "The class is here, next to the door." },
            { speaker: "Lina", ar: "يِسْلَمُوا، شُكْرًا.", arArabeezy: "yislamu, shukran.", en: "Thanks, thank you." },
            { speaker: "Samer", ar: "عَفْوًا، وَلَا يِهِمَّك.", arArabeezy: "3afwan, wala yhemmak.", en: "You're welcome, no problem." },
            { speaker: "Lina", ar: "شُو أَخْبَارَك مَع أَوَّل يَوم؟", arArabeezy: "sho akhbarak ma3 awwal yom?", en: "How are things on your first day?" },
            { speaker: "Samer", ar: "تَمَام، الحَمْدُ لله. وَإِنْتِ كِيفِك؟", arArabeezy: "tamam, el-hamdullah. w inti keefik?", en: "Good, thank God. And how are you?" },
            { speaker: "Lina", ar: "مْنِيحَة، بَس شُوَيّ تَعْبَانَة.", arArabeezy: "mneeha, bas shway ta3baneh.", en: "Good, but a little tired." },
            { speaker: "Samer", ar: "عَادِي، أَوَّل يَوم صَعْب شُوَيّ.", arArabeezy: "3adi, awwal yom sa3b shway.", en: "That's normal, the first day is a little hard." },
            { speaker: "Teacher", ar: "صَبَاح الخِير يَا طلاب.", arArabeezy: "sabah el-kheir ya talab.", en: "Good morning, students." },
            { speaker: "Samer", ar: "صَبَاح النُّور أُسْتَاذ.", arArabeezy: "sabah el-noor ustaz.", en: "Good morning, teacher." },
            { speaker: "Lina", ar: "صَبَاح النُّور.", arArabeezy: "sabah el-noor.", en: "Good morning." },
            { speaker: "Lina", ar: "يِعْطِيك العَافْيَة أُسْتَاذ.", arArabeezy: "ya3teek el-3afyeh ustaz.", en: "Thanks, teacher." },
            { speaker: "Teacher", ar: "كِيفْكُم اليَوم؟", arArabeezy: "keefkum el-yom?", en: "How are you all today?" },
            { speaker: "Lina", ar: "أُسْتَاذ، لَوْ سَمَحْت، عِيد السُّؤَال.", arArabeezy: "ustaz, law samaht, 3eed el-su2al.", en: "Teacher, please repeat the question." },
            { speaker: "Teacher", ar: "أَكِيد. كِيفْكُم اليَوم؟", arArabeezy: "akeed. keefkum el-yom?", en: "Of course. How are you all today?" },
            { speaker: "Lina", ar: "آه، فَهِمْت. شُكْرًا.", arArabeezy: "ah, fhimt. shukran.", en: "Ah, I understood. Thank you." },
            { speaker: "Teacher", ar: "عَفْوًا. يَلَّا نِبْدَا الدَّرْس.", arArabeezy: "3afwan. yalla nebda el-dars.", en: "You're welcome. Let's start the lesson." },
            { speaker: "Samer", ar: "بَعْد الدَّرْس بِنْشُوفَك، طَمِّنِينِي عَلَيْك.", arArabeezy: "ba3d el-dars binshoofak, Tamnineeni 3aleek.", en: "I'll see you after class, tell me how you're doing." },
            { speaker: "Lina", ar: "تَمَام، مَع السَّلَامَة.", arArabeezy: "tamam, ma3 salameh.", en: "Okay, goodbye." },
            { speaker: "Samer", ar: "الله مَعِك.", arArabeezy: "allah ma3ik.", en: "God be with you." },
        ],
        questions: [
            { ar: "مِين جَدِيد فِي الصَّف؟", en: "Who is new in the class?" },
            { ar: "شُو اِسْم البِنْت؟", en: "What is the girl's name?" },
            { ar: "شُو اِسْم الشَّب؟", en: "What is the young man's name?" },
            { ar: "سَامِر قَال لِلِين شُو بَعْد تْشَرَّفْنَا؟", en: "What did Samer say to Lynn after nice to meet you?" },
            { ar: "لِين مِن وِين؟", en: "Where is Lynn from?" },
            { ar: "سَامِر مِن وِين؟", en: "Where is Samer from?" },
            { ar: "لِين سَاكْنَة وِين هَلْقِيت؟", en: "Where does Lynn live now?" },
            { ar: "قَدِّيش عُمُر لِين؟", en: "How old is Lynn?" },
            { ar: "الصَّف وِين؟", en: "Where is the class?" },
            { ar: "لِين قَالَت شُو لَمَّا سَامِر سَاعَدْهَا؟", en: "What did Lynn say when Samer helped her?" },
            { ar: "سَامِر رَدّ عَلَيْهَا شُو؟", en: "What did Samer reply?" },
            { ar: "سَامِر كِيفُه اليَوم؟", en: "How is Samer today?" },
            { ar: "لِين كِيفَهَا اليَوم؟", en: "How is Lynn today?" },
            { ar: "لِين قَالَت لِلأُسْتَاذ شُو؟", en: "What did Lynn say to the teacher?" },
            { ar: "لِين طَلَبَت مِن الأُسْتَاذ شُو؟", en: "What did Lynn ask the teacher to do?" },
            { ar: "اِحْكِي عَن نَفْسَك بِخَمْس جُمَل.", en: "Talk about yourself in five sentences." },
        ],
    },

    microChecks: {
        enabled: true,
        every: 5,
        items: [
            {
                id: "greet_mc1",
                type: "match",
                prompt: "Match the English word to Arabic: Hello",
                options: ["مَرْحَبَا", "شُكْرًا", "مَع السَّلَامَة", "تَعْبَان"],
                correct: "مَرْحَبَا",
            },
            {
                id: "greet_mc2",
                type: "complete",
                prompt: "Complete: صَبَاح الخِير. - ___",
                options: ["صَبَاح النُّور", "مَسَا النُّور", "مَع السَّلَامَة", "طَمِّنِّي عَنْك"],
                correct: "صَبَاح النُّور",
            },
            {
                id: "greet_mc3",
                type: "reorder",
                prompt: "Reorder: My name is Lynn.",
                options: ["اِسْمِي", "لِين"],
                correct: ["اِسْمِي", "لِين"],
            },
            {
                id: "greet_mc4",
                type: "complete",
                prompt: "Complete: إِنْتِ ___ وِين؟",
                options: ["مِن", "شُو", "مَع", "فِي"],
                correct: "مِن",
            },
            {
                id: "greet_mc5",
                type: "match",
                prompt: "Choose a natural goodbye.",
                options: ["بِنْشُوفَك بَعْدِين", "شُو اِسْمَك؟", "أَنَا مِن غَزَّة", "كِيفَك؟"],
                correct: "بِنْشُوفَك بَعْدِين",
            },
        ],
    },

    practice: {
        quiz: [
            {
                id: "greet_q1",
                questionAr: "«كِيفِك؟» بِنْسْأَل فِيهَا:",
                optionsEn: ["A woman how she is", "A man his name", "Where someone lives"],
                correctIndex: 0,
            },
            {
                id: "greet_q2",
                questionAr: "الرَّد الطَّبِيعِي عَلَى «صَبَاح الخِير» هُو:",
                optionsEn: ["صَبَاح النُّور", "مَع السَّلَامَة", "شُو اِسْمَك؟"],
                correctIndex: 0,
            },
            {
                id: "greet_q3",
                questionAr: "«أَنَا مِن غَزَّة» مَعْنَاهَا:",
                optionsEn: ["I am from Gaza.", "I live with Gaza.", "My name is Gaza."],
                correctIndex: 0,
            },
            {
                id: "greet_q4",
                questionAr: "«لَوْ سَمَحْت، عِيد السُّؤَال» مَعْنَاهَا:",
                optionsEn: ["Please repeat the question.", "Please close the class.", "Please say goodbye."],
                correctIndex: 0,
            },
            {
                id: "greet_q5",
                questionAr: "إِذَا بِدَّك تِقُول See you later، بِتِقُول:",
                optionsEn: ["بِنْشُوفَك بَعْدِين", "شُو أَخْبَارَك؟", "أَنَا تَعْبَان"],
                correctIndex: 0,
            },
        ],
        rolePlays: [
            "Meet a new classmate: greet them, ask their name, ask where they are from, and say where you are from.",
            "Classroom help: tell the teacher you do not understand and ask them to repeat the question.",
            "End of class: thank the teacher and say goodbye naturally using مَع السَّلَامَة / الله مَعَك / بِنْشُوفَك بَعْدِين.",
            "Mini speaking prompt: introduce yourself in 5 sentences using اِسْمِي, أَنَا مِن, and سَاكِن/سَاكْنَة.",
        ],
        sections: [
            {
                matching: [
                    { ar: "مَرْحَبَا", en: "Hello" },
                    { ar: "كِيفَك؟", en: "How are you? (to a man)" },
                    { ar: "شُو اِسْمِك؟", en: "What is your name? (to a woman)" },
                    { ar: "مِن وِين؟", en: "Where from?" },
                    { ar: "طَمِّنِّي عَلَيْك", en: "Tell me how you are" },
                ],
                fillInTheBlank: [
                    { prompt: "شُو ___؟", answer: "اِسْمَك" },
                    { prompt: "أَنَا ___ غَزَّة.", answer: "مِن" },
                    { prompt: "أَنَا سَاكْنَة ___ غَزَّة.", answer: "فِي" },
                    { prompt: "مْنِيحَة، ___ لله.", answer: "الحَمْدُ" },
                    { prompt: "لَوْ سَمَحْت، ___ السُّؤَال.", answer: "عِيد" },
                ],
                reorderSentences: [
                    {
                        prompt: "Put the words in order: What is your name?",
                        words: ["شُو", "اِسْمَك؟"],
                        answer: "شُو اِسْمَك؟",
                    },
                    {
                        prompt: "Put the words in order: I am from Gaza.",
                        words: ["أَنَا", "مِن", "غَزَّة."],
                        answer: "أَنَا مِن غَزَّة.",
                    },
                    {
                        prompt: "Put the words in order: See you later.",
                        words: ["بِنْشُوفَك", "بَعْدِين."],
                        answer: "بِنْشُوفَك بَعْدِين.",
                    },
                ],
                writeYourOwnSentences: [
                    "Write 5 short sentences introducing yourself: greeting, name, origin, where you live, and how you feel.",
                    "Change these to feminine: كِيفَك؟ / سَاكِن / فَاهِم.",
                    "Change these to plural: كِيفَك؟ / مْنِيح / سَاكِن.",
                ],
            },
        ],
        translation: [
            { id: "greet_t1", type: "enToAr", textEn: "Hi, how are you?", textAr: "مَرْحَبَا، كِيفَك؟" },
            { id: "greet_t2", type: "arToEn", textEn: "My name is Lynn.", textAr: "اِسْمِي لِين." },
            { id: "greet_t3", type: "enToAr", textEn: "Where are you from?", textAr: "إِنْتَ/إِنْتِ مِن وِين؟" },
            { id: "greet_t4", type: "arToEn", textEn: "I am from Gaza.", textAr: "أَنَا مِن غَزَّة." },
            { id: "greet_t5", type: "enToAr", textEn: "I live in Ramallah.", textAr: "أَنَا سَاكِن/سَاكْنَة فِي رَام الله." },
            { id: "greet_t6", type: "enToAr", textEn: "How old are you?", textAr: "قَدِّيش عُمُرَك/عُمُرِك؟" },
            { id: "greet_t7", type: "arToEn", textEn: "I am fine, thank God.", textAr: "أَنَا مْنِيح/مْنِيحَة، الحَمْدُ لله." },
            { id: "greet_t8", type: "enToAr", textEn: "Tell me how you are.", textAr: "طَمِّنِّي عَلَيْك / عَنْك." },
            { id: "greet_t9", type: "enToAr", textEn: "Please repeat the question.", textAr: "لَوْ سَمَحْت، عِيد السُّؤَال." },
            { id: "greet_t10", type: "arToEn", textEn: "I do not understand the word.", textAr: "أَنَا مِش فَاهِم/فَاهْمَة الكِلْمَة." },
            { id: "greet_t11", type: "enToAr", textEn: "Thanks / thank you.", textAr: "يِسْلَمُوا / شُكْرًا." },
            { id: "greet_t12", type: "arToEn", textEn: "You're welcome, no problem.", textAr: "عَفْوًا، وَلَا يِهِمَّك." },
            { id: "greet_t13", type: "enToAr", textEn: "Nice to meet you.", textAr: "تْشَرَّفْنَا." },
            { id: "greet_t14", type: "arToEn", textEn: "Goodbye, see you later.", textAr: "مَع السَّلَامَة، بِنْشُوفَك بَعْدِين." },
        ],
    },

    homework: {
        instructions:
            `Write and record a 45-60 second self-introduction in Gaza Palestinian Arabic. Include: a greeting, your name, where you are from, where you live now, your age if you are comfortable, how you feel today, one classroom phrase, and a natural closing. Use at least 8 words or phrases from the vocabulary list.

Translate these sentences into Gaza Palestinian Arabic:
1. Hello, how are you?
2. My name is Lina.
3. What is your name?
4. Where are you from?
5. I am from Gaza.
6. I live in Ramallah.
7. How old are you?
8. I am good, thank God.
9. I am a little tired today.
10. Tell me how you are.
11. Please repeat the question.
12. I do not understand the word.
13. Thanks / thank you.
14. You're welcome, no problem.
15. Goodbye, see you later.`,
        tasks: [
            {
                title: "Writing",
                instructions: "Write 5-8 short sentences introducing yourself in Gaza Palestinian Arabic. Include your name, where you are from, where you live now, and how you feel today.",
                examples: ["مَرْحَبَا، اِسْمِي...", "أَنَا مِن...", "أَنَا سَاكِن/سَاكْنَة فِي...", "أَنَا مْنِيح/مْنِيحَة، الحَمْدُ لله."],
            },
            {
                title: "Speaking Recording",
                instructions: "Record 30-60 seconds. Pretend you are meeting a Palestinian friend for the first time. Greet them, introduce yourself, ask one question, and close politely.",
                examples: ["مَرْحَبَا، كِيفَك؟", "شُو اِسْمَك؟", "إِنْتَ مِن وِين؟", "مَع السَّلَامَة."],
            },
            {
                title: "Translation",
                instructions: "Translate the 15 homework sentences. Write each answer on a separate line and say the answers out loud.",
                examples: ["شُو اِسْمَك؟", "أَنَا مِن غَزَّة.", "طَمِّنِّي عَلَيْك.", "عَفْوًا، وَلَا يِهِمَّك."],
            },
            {
                title: "Real-Life Mission",
                instructions: "Simulate a real first meeting with a friend or teacher. Use at least 6 expressions from this unit and one reply to thanks.",
                examples: ["يِسْلَمُوا.", "الله يْسَلِّمَك.", "بِنْشُوفَك بَعْدِين."],
            },
        ],
    },

    teacherNotes: {
        warmup: [
            "Start with a real greeting exchange, not vocabulary explanation.",
            "Ask the student to repeat the same mini-dialogue with their real name and country.",
            "Keep corrections light; this unit is about confidence and first output.",
        ],
        vocabularySteps: [
            "Teach each item as a usable chunk: مَرْحَبَا، كِيفَك؟ / اِسْمِي... / أَنَا مِن...",
            "Show masculine/feminine only through examples: كِيفَك؟ / كِيفِك؟, سَاكِن / سَاكْنَة.",
            "Recycle classroom phrases often: لَوْ سَمَحْت، عِيد السُّؤَال.",
        ],
        dialogueSteps: [
            "Read the dialogue once naturally, then act it with the student.",
            "Make the student replace Lynn and Samer with their own name and city.",
            "Ask the dialogue questions as speaking practice, not only comprehension.",
        ],
        practiceTips: [
            "Push full answers: أَنَا مِن..., not only the country.",
            "Use quick substitutions: كِيفَك؟ كِيفِك؟ كِيفْكُم؟",
            "End with a 30-second self-introduction recording.",
        ],
        wrapup: [
            "Student introduces themselves without reading.",
            "Student asks the teacher two questions.",
            "Student says one natural closing.",
        ],
        myNotes: "",
    },
};
