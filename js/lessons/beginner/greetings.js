import { LESSON_ID_GREETING } from '../../constants.js';

export const lessonId = LESSON_ID_GREETING;

export const lesson = {
    meta: {
        level: "Beginner",
        unit: "Greetings",
        lessonTitle: "Unit 1 - Greetings & Introductions (Gaza Palestinian Arabic)",
        contentVersion: 2026081504,
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
                exampleAr: "مَرْحَبَا يَا لِين.",
                exampleArabeezy: "marhaba ya Leen.",
                exampleEn: "Hello, Lynn.",
            },
            {
                id: "sabah_el_kheir",
                ar: "صَبَاح الخِير",
                en: "Good morning",
                enArabeezy: "sabah el-kheir",
                hint: "Morning greeting. Replies: صَبَاح النُّور، يِسْعِد صَبَاحَك.",
                exampleAr: "صَبَاح الخِير. ـ صَبَاح النُّور.",
                exampleArabeezy: "sabah el-kheir. - sabah en-noor.",
                exampleEn: "Good morning. — Good morning.",
            },
            {
                id: "masa_el_kheir",
                ar: "مَسَا الخِير",
                en: "Good evening",
                enArabeezy: "masa el-kheir",
                hint: "Evening greeting. Reply: مَسَا النُّور.",
                exampleAr: "مَسَا الخِير. ـ مَسَا النُّور.",
                exampleArabeezy: "masa el-kheir. - masa en-noor.",
                exampleEn: "Good evening. — Good evening.",
            },
            {
                id: "ahlan_wa_sahlan",
                ar: "أَهْلًا وَسَهْلًا",
                en: "Welcome",
                enArabeezy: "ahlan wa sahlan",
                hint: "Main welcome phrase. You can add فيك / فيكي / فيكم. Warmer extra phrase: نَوَّرْت (m), نَوَّرْتِي (f), نَوَّرْتُوا (pl).",
                exampleAr: "أَهْلًا وَسَهْلًا يَا لِين.",
                exampleArabeezy: "ahlan wa sahlan ya Leen.",
                exampleEn: "Welcome, Lynn.",
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
                id: "mabsut",
                ar: "مَبْسُوط",
                en: "happy / pleased",
                enArabeezy: "mabsut / mabsuta / mabsuTeen",
                hint:
                    "Positive feeling word. Masculine: مَبْسُوط, Feminine: مَبْسُوطَة, Plural: مَبْسُوطِين.",
                exampleAr: "أَنَا مَبْسُوط إِنَّك هُون.",
                exampleArabeezy: "ana mabsut innak hon.",
                exampleEn: "I’m happy you’re here.",
            }
            ,
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
                ar: "مِن وِين انت ؟",
                en: "From where?",
                enArabeezy: "min wen?",
                hint: "Ask origin. Full question:  مِن وِين إِنْتَ؟ / مِن وِين إِنْتِ ؟ Answer: أَنَا مِن غَزَّة / كَنَدَا / أَمْرِيكَا.",
                exampleAr: " مِن وِين انت ؟ ـ أَنَا مِن كَنَدَا.",
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
    ar: "قَدِّيش عُمُرَك؟",
    en: "How old are you?",
    enArabeezy: "addeesh omrak / omrik",
    hint: "Masc: قَدِّيش عُمُرَك؟ Fem: قَدِّيش عُمُرِك؟ Answer: عُمْرِي... سَنَة.",
    exampleAr: "قَدِّيش عُمُرِك؟ — عُمْرِي عِشْرِين سَنَة.",
    exampleArabeezy: "addeesh omrik? — omri 3ishreen saneh.",
    exampleEn: "How old are you? — I am twenty years old.",
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
                id: "shu_el_akhbar",
                ar: "شُو الْأَخْبَار؟",
                en: "what's new? / how are things?",
                enArabeezy: "shu el-akhbar",
                hint: "Warm follow-up after a greeting. You can add كُلُّه تَمَام؟ = is everything okay?",
                exampleAr: "مَرْحَبَا، شُو الْأَخْبَار؟",
                exampleArabeezy: "marhaba, shu el-akhbar?",
                exampleEn: "Hello, how are things?",
            },
            {
                id: "tammenni_3annak",
                ar: "طَمِّنِّي عَلَيْك / عَنْك",
                en: "Tell me how you are / reassure me about you",
                enArabeezy: "Tamminni 3aleek / 3annak",
                hint: "Use when you care about someone or have not heard from them. To a man: طَمِّنِّي عَنْك. To a woman: طَمِّنِينِي عَنْكِ. To a group: طَمِّنُونِي عَنْكُم.",
                exampleAr: "مَرْحَبَا، طَمِّنِّي عَنْك.",
                exampleArabeezy: "marhaba, Tamminni 3annak.",
                exampleEn: "Hello, tell me how you've been.",
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
                id: "wala_yhemmak_3ala_rasi",
                ar: "ولا يهمك، على راسي.",
                en: "Don’t worry, it’s my pleasure.",
                enArabeezy: "wala yhemmak, 3ala rasi.",
                hint: "Very natural Palestinian response. Warm, friendly, and supportive (informal).",
                exampleAr: "ولا يهمك، على راسي. بأي وقت.",
                exampleArabeezy: "wala yhemmak, 3ala rasi. bi ay wa2et.",
                exampleEn: "Don’t worry, it’s my pleasure. Anytime.",
            }

            ,
            {
                id: "law_samaHt",
                ar: "لَوْ سَمَحْت",
                en: "please / excuse me",
                enArabeezy: "law_sama7t / law_sama7ti",
                hint:
                    "Polite way to ask for something: ‘please’. Fem لَوْ سَمَحْتِي, plural لَوْ سَمَحْتُوا.",
                exampleAr: "لَوْ سَمَحْت، عِيد الْجُمْلَة.",
                exampleArabeezy: "law sama7t, 3eed el-jumle.",
                exampleEn: "Please repeat the sentence.",

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
        lines: [
            {
                "speaker": "Teacher",
                "ar": "مَرْحَبَا، أَهْلًا وَسَهْلًا فِي الدَّرْس!",
                "arArabeezy": "mr7ba, ahla wshla fy eldrs!",
                "en": "Hi, welcome to the lesson!"
            },
            {
                "speaker": "Lina",
                "ar": "مَرْحَبَا أُسْتَاذ.",
                "arArabeezy": "mr7ba astadh.",
                "en": "Hi, teacher."
            },
            {
                "speaker": "Teacher",
                "ar": "صَبَاح الْخِير، كِيفِك الْيَوْم؟",
                "arArabeezy": "sba7 elkhyr, kyfk elywm?",
                "en": "Good morning, how are you today?"
            },
            {
                "speaker": "Lina",
                "ar": "أَنَا مْنِيحَة، شُكْرًا. وَإِنْتَ؟",
                "arArabeezy": "ana mny7a, shkra. wint?",
                "en": "I’m good, thanks. And you?"
            },
            {
                "speaker": "Teacher",
                "ar": "أَنَا مْنِيح، الْحَمْدِلِلَّه.",
                "arArabeezy": "ana mny7, el7mdllh.",
                "en": "I’m good, praise be to God."
            },
            {
                "speaker": "Teacher",
                "ar": "شُو اِسْمِك؟",
                "arArabeezy": "shw asmk?",
                "en": "What’s your name?"
            },
            {
                "speaker": "Lina",
                "ar": "أَنَا اِسْمِي لِينْ.",
                "arArabeezy": "ana asmy lyn.",
                "en": "My name is Lynn."
            },
            {
                "speaker": "Teacher",
                "ar": "فُرْصَة سَعِيدَة يَا لِينْ.",
                "arArabeezy": "frsa s3yda ya lyn.",
                "en": "Nice to meet you, Lynn."
            },
            {
                "speaker": "Lina",
                "ar": "تْشَرَّفْت فِيك أُسْتَاذ.",
                "arArabeezy": "tshrft fyk astadh.",
                "en": "Pleased to meet you, teacher."
            },
            {
                "speaker": "Teacher",
                "ar": "مِنْ وِين إِنْتِي ",
                "arArabeezy": "mn wyn inty ?",
                "en": "Where are you from?"
            },
            {
                "speaker": "Lina",
                "ar": "أَنَا مِنْ كَنَدَا.",
                "arArabeezy": "ana mn knda.",
                "en": "I’m from Canada."
            },
            {
                "speaker": "Teacher",
                "ar": "حِلُو! وَهَلَّقيت وِين سَاكْنَة؟",
                "arArabeezy": "7lw! whlqyt wyn sakna?",
                "en": "Nice! And where do you live now?"
            },
            {
                "speaker": "Lina",
                "ar": "هَلَّقيت أَنَا سَاكْنَة فِي رَام اللّٰه.",
                "arArabeezy": "hlqyt ana sakna fy ram ellh.",
                "en": "Now I live in Ramallah."
            },
            {
                "speaker": "Lina",
                "ar": "وَإِنْتَ مِنْ وِين؟",
                "arArabeezy": "wint mn wyn?",
                "en": "And where are you from?"
            },
            {
                "speaker": "Teacher",
                "ar": "أَنَا مِنْ غَزَّة، بَسّ هَلَّقيت بَشْتِغِل فِي الْقُدْس.",
                "arArabeezy": "ana mn ghza, bs hlqyt bshtghl fy elqds.",
                "en": "I’m from Gaza, but now I work in Jerusalem."
            },
            {
                "speaker": "Teacher",
                "ar": "إِنْتِي طَالْبَة وَلَّا بِتْشْتِغْلِي؟",
                "arArabeezy": "inty talba wla btshtghly?",
                "en": "Are you a student or do you work?"
            },
            {
                "speaker": "Lina",
                "ar": "أَنَا طَالْبَة، بَدْرُس عَرَبِي وَإِنْجِلِيزِي.",
                "arArabeezy": "ana talba, bdrs 3rby winjlyzy.",
                "en": "I’m a student, I study Arabic and English."
            },
            {
                "speaker": "Teacher",
                "ar": "حِلُو، أَنَا كَمَان أُسْتَاذ عَرَبِي.",
                "arArabeezy": "7lw, ana kman astadh 3rby.",
                "en": "Nice, I’m also an Arabic teacher."
            },
            {
                "speaker": "Lina",
                "ar": "مَبْسُوطَة إِنِّي مَعَك فِي الدَّرْس.",
                "arArabeezy": "mbswta iny m3k fy eldrs.",
                "en": "I’m happy to be in your class."
            },
            {
                "speaker": "Teacher",
                "ar": "وَإِحْنَا مَبْسُوطِين فِيك كَمَان.",
                "arArabeezy": "wi7na mbswtyn fyk kman.",
                "en": "And we’re happy to have you too."
            },
            {
                "speaker": "Adam",
                "ar": "السَّلَامُ عَلَيْكُمْ يَا شَبَاب!",
                "arArabeezy": "elslam 3lykm ya shbab!",
                "en": "Peace be upon you, everyone!"
            },
            {
                "speaker": "Lina",
                "ar": "وَعَلَيْكُم السَّلَام، مَرْحَبَا!",
                "arArabeezy": "w3lykm elslam, mr7ba!",
                "en": "And peace be upon you, hi!"
            },
            {
                "speaker": "Teacher",
                "ar": "كِيفْكُم الْيَوْم؟",
                "arArabeezy": "kyfkm elywm?",
                "en": "How are you all today?"
            },
            {
                "speaker": "Adam",
                "ar": "إِحْنَا مْنَاح، بَسّ شَوَيّ تَعْبَانِين.",
                "arArabeezy": "i7na mna7, bs shwy t3banyn.",
                "en": "We’re fine, just a bit tired."
            },
            {
                "speaker": "Sara",
                "ar": "أَنَا مَبْسُوط إِنِّي بَدْرُس عَرَبِي مَعْكُم.",
                "arArabeezy": "ana mbswt iny bdrs 3rby m3km.",
                "en": "I’m happy that I study Arabic with you all."
            },
            {
                "speaker": "Teacher",
                "ar": "طَيِّب يَلَّا، هَادَا كَانَ التَّعَارُف الْأَوَّل.",
                "arArabeezy": "tyb yla, hada kan elt3arf elawl.",
                "en": "Alright, this was our first introduction."
            },
            {
                "speaker": "Teacher",
                "ar": "مَع السَّلَامَة، مَا تِنْسُوا الْوَاجِب.",
                "arArabeezy": "m3 elslama, ma tnswa elwajb.",
                "en": "Goodbye, don’t forget the homework."
            },
            {
                "speaker": "Lina",
                "ar": "مَع السَّلَامَة أُسْتَاذ، بِالتَّوْفِيق.",
                "arArabeezy": "m3 elslama astadh, beltwfyq.",
                "en": "Goodbye, teacher, good luck."
            },
            {
                "speaker": "Adam",
                "ar": "شُكْرًا، اِنْبِسِطُوا بِوَقْتْكُم الْيَوْم.",
                "arArabeezy": "shkra, anbstwa bwqtkm elywm.",
                "en": "Thank you, enjoy your time today."
            },

        ]
    },

    culture: [
        {
            title: "Greeting someone who is working",
            ar: "يِعْطِيك العَافْيَة",
            arabeezy: "yi3Teek el-3afyeh",
            en: "May God give you strength / Thanks for your effort.",
            explanation: "This is much wider than English ‘thank you’. Palestinians use it as a greeting, appreciation, or encouragement when someone is working, cooking, cleaning, teaching, or helping.",
            whenUsed: "Say it when entering a shop, approaching a worker, thanking a host who prepared food, or greeting your teacher. A natural reply is: الله يْعَافِيك (allah y3afeek).",
            register: "Warm, polite, and suitable in both casual and respectful situations.",
        },
        {
            title: "A warm Palestinian welcome",
            ar: "أَهْلًا وَسَهْلًا فِيك، نَوَّرْت",
            arabeezy: "ahlan w sahlan feek, nawwart",
            en: "Welcome—you lit up the place.",
            explanation: "نَوَّرْت is not normally understood literally. It tells a guest that their arrival brought light and happiness to the place.",
            whenUsed: "Use نَوَّرْت to a man, نَوَّرْتِي to a woman, and نَوَّرْتُوا to a group when welcoming guests, students, or someone returning after an absence.",
            register: "Warm and hospitable; common in Gaza and across Palestine.",
        },
        {
            title: "Asking about someone with care",
            ar: "طَمِّنِّي عَلَيْك",
            arabeezy: "Tamm inni 3aleik",
            en: "Tell me you’re okay / Let me know how you are.",
            explanation: "This carries more emotional concern than كِيفَك؟. It often means: give me reassuring news about you.",
            whenUsed: "Use it after illness, travel, a difficult event, a long absence, or when someone sounds worried. To a woman: طَمِّنِينِي عَلَيْكِ.",
            register: "Personal and caring; avoid using it as an empty first greeting with a stranger.",
        },
        {
            title: "Replying without exaggerating",
            ar: "الحَمْدُ لله، مَاشِي الحَال",
            arabeezy: "el-7amdulillah, mashi el-7al",
            en: "Thank God, things are going okay.",
            explanation: "A Palestinian answer does not always need to be strongly positive. مَاشِي الحَال politely says that life is manageable, even if things are not perfect.",
            whenUsed: "Use it when someone asks كِيفَك؟ and you want a neutral, realistic reply. The tone of voice can make it sound content or tired.",
            register: "Everyday and natural; appropriate with friends, neighbours, and colleagues.",
        },
        {
            title: "Showing respect when meeting someone",
            ar: "تْشَرَّفْنَا",
            arabeezy: "tsharrafna",
            en: "Nice to meet you / We are honoured.",
            explanation: "The literal idea is ‘we were honoured’, but in conversation it functions as a polite response after names are exchanged.",
            whenUsed: "Say it in a first meeting. You can answer with الشَّرَف إِلِي (esh-sharaf ili), meaning ‘the honour is mine’.",
            register: "Polite and slightly more formal than simply saying أَهْلِين.",
        },
        {
            title: "A goodbye with warmth",
            ar: "الله مَعَك",
            arabeezy: "allah ma3ak",
            en: "May God be with you.",
            explanation: "This is a warm leave-taking expression rather than a statement about location. It wishes the other person protection and ease.",
            whenUsed: "Use it when someone is leaving or travelling. To a woman: الله مَعِك. To a group: الله مَعْكُم.",
            register: "Common, warm, and natural with family, friends, guests, and acquaintances.",
        },
    ],

    grammarCapsuleIds: ["GC-01", "GC-02", "GC-03", "GC-04", "GC-05", "GC-06"],

    grammar: [
        {
            title: "1. Independent pronouns: who is speaking?",
            short: "أنا، إنتَ، إنتِ، هوَّ، هيَّ، إحنا، إنتو، همَّ",
            description: "Palestinian Arabic pronouns tell us who we are talking about. Unlike English, ‘you’ changes for a man, a woman, and a group. Learning that difference early prevents mistakes in questions, descriptions, and later verb conjugation.",
            table: {
                title: "Core Gaza Palestinian pronouns",
                headers: ["Person", "Arabic", "Arabizi", "English", "Typical use"],
                rows: [
                    ["1st singular", "أَنَا", "ana", "I", "أَنَا مِن غَزَّة"],
                    ["2nd masculine", "إِنْتَ", "inta", "you (man)", " مِن وِين إِنْتَ؟"],
                    ["2nd feminine", "إِنْتِ", "inti", "you (woman)", "إِنْتِ سَاكْنَة وِين؟"],
                    ["3rd masculine", "هُوَّ", "huwwe", "he", "هُوَّ مْنِيح"],
                    ["3rd feminine", "هِيَّ", "hiyyeh", "she", "هِيَّ مْنِيحَة"],
                    ["1st plural", "إِحْنَا", "i7na", "we", "إِحْنَا مِن فِلَسْطِين"],
                    ["2nd plural", "إِنْتُو", "intu", "you all", "إِنْتُو كِيفْكُم؟"],
                    ["3rd plural", "هُمَّ", "humme", "they", "هُمَّ سَاكْنِين هُون"],
                ],
            },
            examples: [
                { ar: " مِن وِين إِنْتَ؟", arabeezy: "inta min ween?", en: "Where are you from? (to a man)" },
                { ar: "مِن وِين إِنْتِ ؟", arabeezy: "inti min ween?", en: "Where are you from? (to a woman)" },
                { ar: "هُمَّ مِن غَزَّة، بَس هَلْقِيت سَاكْنِين بِرَام الله.", arabeezy: "humme min Ghazza, bas hal2eet sakneen b-Ramallah.", en: "They are from Gaza, but now they live in Ramallah." },
            ],
            commonMistakes: [
                "Do not use إِنْتَ for every person. Use إِنْتِ when speaking to one woman.",
                "هُوَّ and هِيَّ refer to someone who is not being addressed directly; they mean he and she.",
            ],
            exercises: [
                { prompt: "You are speaking directly to one woman. Which pronoun do you use?", options: ["إِنْتِ", "إِنْتَ", "هِيَّ"], correct: "إِنْتِ", explanation: "إِنْتِ is ‘you’ when addressing one woman. هِيَّ means ‘she’." },
                { prompt: "Complete: ___ مِن كَنَدَا. (They)", options: ["هُمَّ", "إِحْنَا", "هُوَّ"], correct: "هُمَّ", explanation: "هُمَّ is the everyday Palestinian pronoun for ‘they’." },
            ],
        },

    ],

    microChecks: {
        enabled: true,
        every: 5,
        items: [
            {
                id: "greet_mc1",
                type: "match",
                prompt: "Match the English word to Arabic: Hello",
                options: ["مَرْحَبَا", "صَبَاح الخِير", "مَسَا الخِير", "أَهْلًا وَسَهْلًا"],
                correct: "مَرْحَبَا",
            },
            {
                id: "greet_mc2",
                type: "choose",
                prompt: "Choose the Gaza Palestinian Arabic for: I am fine.",
                options: ["أَنَا تَمَام.", "أَنَا تَعْبَان.", "شُو الْأَخْبَار؟", "طَمِّنِّي عَنْك."],
                correct: "أَنَا تَمَام.",
            },
            {
                "id": "greet_mc3",
                "type": "complete",
                "prompt": "Complete the Arabic dialogue for: Where are you from? - I am from Canada.\n___ انت ؟ ـ أَنَا مِن كَنَدَا.",
                "options": [
                    "مِن وِين",
                    "قَدِّيش",
                    "عَلَى وِين",
                    "لِيش"
                ],
                "correct": "مِن وِين"
            },
            {
  "id": "greet_mc4",
  "type": "complete",
  "prompt": "Complete the Arabic question for: How old are you?\n___ عُمُرِك؟",
  "options": [
    "قَدِّيش",
    "مِن وِين",
    "كَيْف",
    "لِيش"
  ],
  "correct": "قَدِّيش"
},
            {
                id: "greet_mc5",
                type: "choose",
                prompt: "Someone helped you. Choose the phrase that means: Thank you.",
                options: ["شُكْرًا", "مَع السَّلَامَة", "قَدِّيش عُمُرَك؟", "شُو بِتْعْمَل؟"],
                correct: "شُكْرًا",
            },
            {
                id: "greet_mc6",
                type: "match",
                prompt: "Choose the English meaning of: بِنْشُوفَك بَعْدِين",
                options: ["See you later", "Good morning", "What is your name?", "Thank you"],
                correct: "See you later",
            },
        ],
    },

    practice: {
        maxTranslationItems: 6,
        showWriting: false,
        showRealUse: false,
        separateExerciseTypes: true,
        showCompleteDialogue: false,
        quiz: [
            {
                id: "greet_q1",
                questionAr: "Who are you speaking to when you say كِيفِك؟ (keefik?)",
                optionsEn: ["A woman how she is", "A man his name", "Where someone lives"],
                correctIndex: 0,
            },
            {
                id: "greet_q2",
                questionAr: "Choose the natural reply to صَبَاح الخِير (sabah el-kheir).",
                optionsEn: ["صَبَاح النُّور", "مَع السَّلَامَة", "شُو اِسْمَك؟"],
                correctIndex: 0,
            },
            {
                id: "greet_q3",
                questionAr: "Choose the English meaning of أَنَا مِن غَزَّة (ana min Ghazza).",
                optionsEn: ["I am from Gaza.", "I live with Gaza.", "My name is Gaza."],
                correctIndex: 0,
            },
            {
                id: "greet_q4",
                questionAr: "Choose the English meaning of أَنَا شُوَيّ تَعْبَان اليَوم.",
                optionsEn: ["I am a little tired today.", "I am fine today.", "I am from Gaza."],
                correctIndex: 0,
            },
            {
                id: "greet_q5",
                questionAr: "Choose the Palestinian Arabic phrase for “See you later.”",
                optionsEn: ["بِنْشُوفَك بَعْدِين", "شُو أَخْبَارَك؟", "أَنَا تَعْبَان"],
                correctIndex: 0,
            },
        ],
        rolePlays: [
            "Meet a new classmate: greet them, ask their name, ask where they are from, and say where you are from.",
        ],
        sections: [
            {
                title: "Recognition",
                matching: [
                    { ar: "مَرْحَبَا", arabeezy: "marhaba", en: "Hello" },
                    { ar: "كِيفَك؟", arabeezy: "keefak?", en: "How are you? (to a man)" },
                    { ar: "شُو اِسْمِك؟", arabeezy: "shu ismik?", en: "What is your name? (to a woman)" },
                    { ar: "مِن وِين؟", arabeezy: "min ween?", en: "Where are you from?" },
                    { ar: "مَع السَّلَامَة", arabeezy: "ma3 es-salameh", en: "Goodbye" },
                    { ar: "صَبَاح الخِير", arabeezy: "sabah el-kheir", en: "Good morning" },
                    { ar: "تْشَرَّفْنَا", arabeezy: "tsharrafna", en: "Nice to meet you" },
                    { ar: "اِسْمِي نُور", arabeezy: "ismi Noor", en: "My name is Noor" },
                    { ar: "أَنَا مِن كَنَدَا", arabeezy: "ana min Canada", en: "I am from Canada" },
                    { ar: "بِنْشُوفَك بَعْدِين", arabeezy: "binshoofak ba3deen", en: "See you later" },
                ],
                multipleChoice: [
                    {
                        prompt: "You meet a woman for the first time. Choose: What is your name?",
                        options: ["شُو اِسْمِك؟", "مِن وِين إِنْتِ ؟", "كِيفَك؟"],
                        correct: "شُو اِسْمِك؟",
                    },
                    {
                        prompt: "Someone says صَبَاح الخِير. Choose the natural reply.",
                        options: ["صَبَاح النُّور", "مَع السَّلَامَة", "اِسْمِي سَامِر"],
                        correct: "صَبَاح النُّور",
                    },
                    {
                        prompt: "Choose the natural answer to:  مِن وِين إِنْتَ؟",
                        options: ["أَنَا مِن فَرَنْسَا.", "اِسْمِي فَرَنْسَا.", "كِيفَك فَرَنْسَا؟"],
                        correct: "أَنَا مِن فَرَنْسَا.",
                    },
                    {
                        prompt: "You are leaving class. Choose the most suitable phrase.",
                        options: ["مَع السَّلَامَة.", "شُو اِسْمَك؟", "مِن وِين؟"],
                        correct: "مَع السَّلَامَة.",
                    },
                    {
                        prompt: "Choose the question that asks about someone's current home.",
                        options: ["وِين سَاكِن هَلْقِيت؟", "شُو اِسْمَك؟", "كِيفَك؟"],
                        correct: "وِين سَاكِن هَلْقِيت؟",
                    },
                ],
            },
            {
                title: "Fill in the missing word",
                fillInTheBlank: [
                    { prompt: "Write the Palestinian Arabic for (my name): ___ سَارَة.", arabeezy: "___ Sara.", answer: "اِسْمِي" },
                    { prompt: "Write the Palestinian Arabic for (where): ___ سَاكِن هَلْقِيت؟", arabeezy: "___ saken hal2eet?", answer: "وِين" },
                    { prompt: "Write the Palestinian Arabic for (from): أَنَا ___ كَنَدَا.", arabeezy: "ana ___ Canada.", answer: "مِن" },
                    { prompt: "Write (fine) in the feminine form: هِيَّ ___.", arabeezy: "hiyyeh ___.", answer: "مْنِيحَة" },
                    { prompt: "Write (living) in the masculine form: هُوَّ ___ فِي رَام الله.", arabeezy: "huwwe ___ fi Ramallah.", answer: "سَاكِن" },
                    { prompt: "Write the Palestinian Arabic for (what): ___ اِسْمِك؟", arabeezy: "___ ismik?", answer: "شُو" },
                    { prompt: "Write (living) in the feminine form: مَارْيَا ___ فِي القُدْس.", arabeezy: "Maria ___ fi il-Quds.", answer: "سَاكْنَة" },
                    { prompt: "Write (fine) in the masculine form: آدَم ___.", arabeezy: "Adam ___.", answer: "مْنِيح" },
                    { prompt: "Write the Palestinian Arabic for (in): أَنَا سَاكِن ___ غَزَّة.", arabeezy: "ana saken ___ Ghazza.", answer: "فِي" },
                    { prompt: "Write the Palestinian Arabic for (how): ___ اليَوم؟", arabeezy: "___ el-yom?", answer: "كِيفَك" },
                    { prompt: "Complete the morning reply: صَبَاح الخِير. — صَبَاح ___. (light)", arabeezy: "sabah el-kheir — sabah ___.", answer: "النُّور" },
                    { prompt: "Complete the closing: بِنْشُوفَك ___. (later)", arabeezy: "binshoofak ___.", answer: "بَعْدِين" },
                ],
                correctTheMistake: [
                    {
                        prompt: "The adjective must agree with a woman. Correct: هِيَّ مْنِيح.",
                        arabeezy: "hiyyeh mneeh.",
                        answer: "هِيَّ مْنِيحَة.",
                    },
                    {
                        prompt: "The speaker is a woman. Correct: أَنَا سَاكِن فِي القُدْس.",
                        arabeezy: "ana saken fi il-Quds.",
                        answer: "أَنَا سَاكْنَة فِي القُدْس.",
                    },
                    {
                        prompt: "Use the correct question word for a name. Correct: وِين اِسْمَك؟",
                        arabeezy: "ween ismak?",
                        answer: "شُو اِسْمَك؟",
                    },
                    {
                        prompt: "The adjective must agree with a man. Correct: هُوَّ مْنِيحَة.",
                        arabeezy: "huwwe mneeha.",
                        answer: "هُوَّ مْنِيح.",
                    },
                    {
                        prompt: "Use the correct question word for place. Correct: شُو سَاكِن هَلْقِيت؟",
                        arabeezy: "shu saken hal2eet?",
                        answer: "وِين سَاكِن هَلْقِيت؟",
                    },
                    {
                        prompt: "Use مِن for origin. Correct: أَنَا فِي إِسْبَانْيَا.",
                        arabeezy: "ana fi Spain.",
                        answer: "أَنَا مِن إِسْبَانْيَا.",
                    },
                ],
                reorderSentences: [
                    {
                        prompt: "Put the words in order: Where are you from?",
                        arabeezy: "inta min ween?",
                        words: ["وِين؟", "مِن", "إِنْتَ"],
                        answer: " مِن وِين إِنْتَ؟",
                    },
                    {
                        prompt: "Put the words in order: My name is Adam.",
                        arabeezy: "ismi Adam.",
                        words: ["آدَم.", "اِسْمِي"],
                        answer: "اِسْمِي آدَم.",
                    },
                    {
                        prompt: "Put the words in order: She lives in Jerusalem.",
                        arabeezy: "hiyyeh sakneh fi il-Quds.",
                        words: ["فِي", "هِيَّ", "القُدْس.", "سَاكْنَة"],
                        answer: "هِيَّ سَاكْنَة فِي القُدْس.",
                    },
                    {
                        prompt: "Put the words in order: How are you today? (to a woman)",
                        arabeezy: "keefik el-yom?",
                        words: ["اليَوم؟", "كِيفِك"],
                        answer: "كِيفِك اليَوم؟",
                    },
                    {
                        prompt: "Put the words in order: I live in Gaza.",
                        arabeezy: "ana saken fi Ghazza.",
                        words: ["غَزَّة.", "سَاكِن", "أَنَا", "فِي"],
                        answer: "أَنَا سَاكِن فِي غَزَّة.",
                    },
                    {
                        prompt: "Put the words in order: Welcome, Lynn.",
                        arabeezy: "ahlan wa sahlan ya Leen.",
                        words: ["يَا لِين.",  "أَهْلًا","وَسَهْلًا"],
                        answer: "أَهْلًا وَسَهْلًا يَا لِين.",
                    },
                ],
            },
        ],
        translation: [
            { id: "greet_t1", type: "enToAr", textEn: "Hi, how are you?", textAr: "مَرْحَبَا، كِيفَك؟", textArabeezy: "marhaba, keefak?" },
            { id: "greet_t2", type: "arToEn", textEn: "My name is Lynn.", textAr: "اِسْمِي لِين.", textArabeezy: "ismi Leen." },
            { id: "greet_t3", type: "enToAr", textEn: "Where are you from?", textAr: "إِنْتَ/مِن وِين إِنْتِ ؟", textArabeezy: "inta/inti min ween?" },
            { id: "greet_t4", type: "arToEn", textEn: "I am from Gaza.", textAr: "أَنَا مِن غَزَّة.", textArabeezy: "ana min Ghazza." },
            { id: "greet_t5", type: "enToAr", textEn: "I live in Ramallah.", textAr: "أَنَا سَاكِن/سَاكْنَة فِي رَام الله.", textArabeezy: "ana saken/sakneh fi Ramallah." },
            { id: "greet_t6", type: "enToAr", textEn: "How old are you?", textAr: "قَدِّيش عُمُرَك/عُمُرِك؟", textArabeezy: "addeesh 3omrak/3omrik?" },
            { id: "greet_t7", type: "arToEn", textEn: "I am fine, thank God.", textAr: "أَنَا مْنِيح/مْنِيحَة، الحَمْدُ لله." },
            { id: "greet_t8", type: "enToAr", textEn: "Tell me how you are.", textAr: "طَمِّنِّي عَلَيْك / عَنْك." },
            { id: "greet_t9", type: "enToAr", textEn: "What are you doing?", textAr: "شُو بِتْعْمَل؟" },
            { id: "greet_t10", type: "arToEn", textEn: "Do you work or study?", textAr: "بِتِشْتِغِل وَلَّا بِتِدْرُس؟" },
            { id: "greet_t11", type: "enToAr", textEn: "Thanks / thank you.", textAr: "يِسْلَمُوا / شُكْرًا." },
            { id: "greet_t12", type: "arToEn", textEn: "You're welcome, no problem.", textAr: "عَفْوًا، وَلَا يِهِمَّك." },
            { id: "greet_t13", type: "enToAr", textEn: "Nice to meet you.", textAr: "تْشَرَّفْنَا." },
            { id: "greet_t14", type: "arToEn", textEn: "Goodbye, see you later.", textAr: "مَع السَّلَامَة، بِنْشُوفَك بَعْدِين." },
        ],
    },

    homework: {
        instructions:
            `Write and record a 45-60 second self-introduction in Gaza Palestinian Arabic. Include: a greeting, your name, where you are from, where you live now, your age if you are comfortable, how you feel today, one polite phrase from the vocabulary list, and a natural closing. Use at least 8 words or phrases from the vocabulary list.

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
11. What are you doing?
12. Do you work or study?
13. Thanks / thank you.
14. You're welcome, no problem.
15. Goodbye, see you later.`,
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
