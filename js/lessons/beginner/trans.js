import { LESSON_ID_TRANSPORT } from '../../constants.js';

export const lessonId = LESSON_ID_TRANSPORT;
export const lesson = {
    meta: {
        level: "Beginner",
        unit: "Transportation",
        lessonTitle: "Unit 5 - Transportation & Getting Around",
        contentVersion: 2026081504,
    },

    overview: {
        title: "Unit 5 - Transportation & Getting Around",
        description:
            "In this unit, students learn how to talk about moving around in natural Gaza Palestinian Arabic: walking, taking a taxi or bus, getting off, arriving, being late, traffic, and asking about the fare.",
        goals: [
            "Name common ways to move around: taxi, bus, car, and walking.",
            "Use movement verbs: بَرُوح، بَرْكَب، بَنْزَل، بَمْشِي، بَوْصَل، بَتْأَخَّر.",
            "Ask practical taxi questions: قَدِّيش الأُجْرَة؟ and كَمْ سِعِر المِشْوَار؟",
            "Tell a driver where to stop using هِنَا and لَوْ سَمَحْت.",
            "Explain being late because of traffic.",
        ],
        speakingOutcomes: [
            "By the end of this unit, the student can describe a short route.",
            "The student can ask a taxi driver about the fare.",
            "The student can say where they want to get off.",
        ],
    },

    vocabulary: {
        core: [
            {
                id: "mwasalat",
                ar: "مُوَاصَلات",
                en: "transportation",
                enArabeezy: "mwasalat",
                hint: "Refers to public or general transport (buses, taxis, etc.).",
                exampleAr: "فِيه مُوَاصَلات هُون؟",
                exampleArabeezy: "feeh mwasalat hoon?",
                exampleEn: "Is there transportation here?"
            },
            {
                id: "mishwar",
                ar: "مِشْوَار",
                en: "errand / trip",
                enArabeezy: "mishwar",
                hint: "Very common daily word. I have an errand = عِنْدِي مِشْوَار.",
                exampleAr: "عِنْدِي مِشْوَار بَعْد الضُّهُر، وَلَازِم أَلَاقِي مُوَاصَلات بِسُرْعَة عَشَان مَا أِتْأَخَّر.",
                exampleArabeezy: "3indi mishwar ba3d el-Duhur, w lazim ala2i mwasalat b-sur3a 3ashan ma at2akhar.",
                exampleEn: "I have an errand after noon, and I need to find transportation quickly so I don't get late.",
            },
            {
                id: "sayyara",
                ar: "سَيَّارَة",
                en: "car",
                enArabeezy: "sayyara",
                hint:
                    "Plural: سَيَّارَات (cars). For ‘my car’: سَيَّارْتِي. Used for private cars and sometimes company cars.",
                exampleAr: "أَخوي بيسوق سَيّارة الشُّرْكَة.",
                exampleArabeezy: "akhwy bswq syara elshrka.",
                exampleEn: "My brother drives the company car.",
            },
            {
                id: "shari3",
                ar: "طَرِيق/ شَارِع",
                en: "street / road",
                enArabeezy: "shari3",
                hint:
                    "Plural: شَوَارِع. شَارِع رَئِيسِي = main street; شَارِع ضَيِّق = narrow street.",
                exampleAr: "الشَّوَارِع الْيَوْم مَلْيَانَة سَيَّارَات.",
                exampleArabeezy: "elshwar3 elywm mlyana syarat.",
                exampleEn: "The streets today are full of cars.",
            },
            
            {
                id: "taxi",
                ar: " تاكسي",
                en: "taxi",
                enArabeezy: "taxi",
                hint:
                    "Very common word. Both spellings تَكْسِي / تاكسي are used. Plural: تَكَاسِي. Often yellow or white, used inside the city.",
                exampleAr: "أَحْيانًا باخُد تاكسي لَمّا أكون مُسْتَعْجِل.",
                exampleArabeezy: "a7yana bakhd taksy lma akwn mst3jl.",
                exampleEn: "Sometimes I take a taxi when I’m in a hurry.",
            },

            {
                id: "bas",
                ar: "بَاص",
                en: "bus",
                enArabeezy: "bas",
                hint: "Plural: بَاصَات (basat).",
                exampleAr: "كُلّ يَوم بَرُوح عَالشُّغُل بِالبَاص.",
                exampleArabeezy: "kul yom baroo7 3al-shughul bil-bas.",
                exampleEn: "Every day I go to work by bus.",
            },
            {
                id: "qitar",
                ar: "قِطار",
                en: "train",
                enArabeezy: "qitar",
                hint: "Train. Used more for travel in countries that have trains.",
                exampleAr: "رِكِبنا القِطار لَمّا كُنّا بِالأُرْدُن.",
                exampleArabeezy: "rkbna elqtar lma kna belardn.",
                exampleEn: "We took the train when we were in Jordan.",
            },

            {
                id: "z7meh",
                ar: "زَحْمَة",
                en: "traffic / crowd / traffic jam",
                enArabeezy: "za7meh",
                hint: "Used a lot for traffic jam: فِي زَحْمَة فِي الشَّارِع.",
                exampleAr: "تَأَخَّرْت عَلى الدَّرْس عَشَان فِي زَحْمَة.",
                exampleArabeezy: "takhrt 3la eldrs 3shan fy z7ma.",
                exampleEn: "I was late to the lesson because there was traffic.",
            },
            {
                id: "ishara",
                ar: "إِشَارَة",
                en: "traffic light (short form)",
                enArabeezy: "ishara",
                hint:
                    "إِشَارَة ضَوْ = traffic light. People just say: عِنْد الإِشَارَة.",
                exampleAr: "التَّاكْسِي وِقِف عَالإِشَارَة الحَمْرَا.",
                exampleArabeezy: "eltaksy wqf 3alishara el7mra.",
                exampleEn: "The taxi stopped at the red light.",
            },
            {
                id: "mawqaf",
                ar: "مَوْقِف",
                en: "stop / station",
                enArabeezy: "mawqaf",
                hint: "Bus/taxi stop. Bus stop = مَوْقِف بَاصَات.",
                exampleAr: "مَوقِف الباصات قُدّام الجامْعَة.",
                exampleArabeezy: "mwqf elbasat qdam eljam3a.",
                exampleEn: "The bus stop is in front of the university.",
            },
            {
                id: "qareeb_ba3eed",
                ar: "قَرِيب / بَعِيد",
                en: "near / far",
                enArabeezy: "qareeb / ba3eed",
                hint: "Useful for directions. Feminine: قَرِيبَة / بَعِيدَة.",
                exampleAr: "بِيت سِتِّي قَرِيب، بَرُوح مَشِي.",
                exampleArabeezy: "beet sitti qareeb, baroo7 mashi.",
                exampleEn: "My grandmother's house is near, I go walking.",
            },
            {
                id: "ghali_rkhees",
                ar: "غَالِي / رَخِيص",
                en: "expensive / cheap",
                enArabeezy: "ghali / rkheeS",
                hint: "Feminine: غَالْيَة / رَخِيصَة. Useful for taxi prices.",
                exampleAr: "التَّاكْسِي غَالِي اليَوم.",
                exampleArabeezy: "el-taxi ghali el-yom.",
                exampleEn: "The taxi is expensive today.",
            },
            {
                id: "2addesh_el2ijra",
                ar: "قَدّيش الأُجْرَة؟",
                en: "How much is the fare?",
                enArabeezy: "2addesh_el2ijreh",
                hint: "Use with taxis/buses. Ask: قَدِّيش الأُجْرَة؟ You may also hear: كَمْ سِعِر المِشْوَار؟",
                exampleAr: "لما تاخد تاكسي، اسأل السواق: قديش الأجرة؟",
                exampleArabeezy: "lma takhd taksy, asal elswaq: qdysh elajra?",
                exampleEn: "When you take a taxi, ask the driver: How much is the fare?",
            },
            {
                id: "bdaTTi3",
                ar: "بَقَطِّع الشَّارِع",
                en: "I cross the street",
                enArabeezy: "ba2aTTi3_eshshari3",
                hint:
                    "Chunk: بَقَطِّع الشَّارِع = I cross the street. Used a lot with traffic lights.",
                exampleAr: "بقطع الشارع لما الإشارة تكون خضرا.",
                exampleArabeezy: "bqt3 elshar3 lma elishara tkwn khdra.",
                exampleEn: "I cross the street when the light is green.",
            },
            {
                id: "keef_arooh",
                ar: "كِيف بَقْدَر أَرُوح عَلَى...؟",
                en: "How can I go to…?",
                enArabeezy: "keef_ba2dar_aroo7_3ala",
                hint:
                    "Chunk for asking directions: كِيف بَقْدَر أَرُوح عَلَى الْجَامْعَة؟",
                exampleAr: "كِيف بَقْدَر أَرُوح عَلَى مَحَطَّة الباص",
                exampleArabeezy: "kyf bqdr arw7 3la m7ta elbas",
                exampleEn: "How can I go to the bus station?",
            },
            {
                id: "baroo7",
                ar: "بَرُوح",
                en: "I go",
                enArabeezy: "baroo7",
                hint: "Recycled from daily routine. I go to work/class/home.",
                exampleAr: "بَرُوح عَالشُّغُل الصُّبُح.",
                exampleArabeezy: "baroo7 3al shoghol el-sob7.",
                exampleEn: "I go to work in the morning.",
            },
            {
                id: "barkab",
                ar: "بَرْكَب",
                en: "I ride / take transport",
                enArabeezy: "barkab",
                hint: "Use with taxi, bus, car: بَرْكَب تَاكْسِي / بَرْكَب بَاص.",
                exampleAr: "بَرْكَب تَاكْسِي عَالشُّغُل.",
                exampleArabeezy: "barkab taxi 3al-shughul.",
                exampleEn: "I take a taxi to work.",
            },
            {
                id: "banzel",
                ar: "بَنْزَل",
                en: "I get off / go down",
                enArabeezy: "banzel",
                hint: "Transport: I get off here = بَنْزَل هِنَا.",
                exampleAr: "بَنْزِل قُدَّام مَدْخَل الْجَامْعَة.",
                exampleArabeezy: "bnzl qdam mdkhl eljam3a.",
                exampleEn: "I get off in front of the university entrance.",
            },
            {
                id: "bsoog",
                ar: "بَسُوق",
                en: "I drive",
                enArabeezy: "basooq",
                hint: "From سَاق = to drive. بَسُوق سَيَّارَة / بَسُوق بُصّ.",
                exampleAr: "أَبُوي بَسُوق سَيَّارَة صْغِيرَة.",
                exampleArabeezy: "abwy bswq syara sghyra.",
                exampleEn: "My father drives a small car.",
            },
            {
                id: "bamshi",
                ar: "بَمْشِي",
                en: "I walk",
                enArabeezy: "bamshi",
                hint: "Good for short distances.",
                exampleAr: "أَحْيَانًا بَمْشِي مِن البِيت عَالشُّغُل.",
                exampleArabeezy: "a7yanan bamshi min el-beet 3al-shughul.",
                exampleEn: "Sometimes I walk from home to work.",
            },
            {
                id: "bawsal",
                ar: "بَوْصَل",
                en: "I arrive / reach",
                enArabeezy: "bawsal",
                hint: "I arrive at work = بَوْصَل عَالشُّغُل.",
                exampleAr: "بَوْصَل عَالدَّرْس السَّاعَة تِسْعَة.",
                exampleArabeezy: "bawsal 3al dars el-sa3a tis3a.",
                exampleEn: "I arrive to class at nine.",
            },
            {
                id: "bat2akhar",
                ar: "بَتْأَخَّر",
                en: "I get late / I'm late",
                enArabeezy: "bat2akhar",
                hint: "I was late = اِتْأَخَّرْت (it2akhart).",
                exampleAr: "فِي زَحْمَة، وَأَنَا بَتْأَخَّر.",
                exampleArabeezy: "fi za7meh, w ana bat2akhar.",
                exampleEn: "There is traffic, and I am running late.",
            },
            {
                id: "bistanna",
                ar: "بَسْتَنَّى",
                en: "I wait",
                enArabeezy: "bistanna",
                hint: "I wait for the bus/taxi/person.",
                exampleAr: "بَسْتَنَّى البَاص عِنْد المَوْقِف.",
                exampleArabeezy: "bistanna el-bas 3ind el-mawqaf.",
                exampleEn: "I wait for the bus at the stop.",
            },
            {
                id: "mista3jel",
                ar: "مِسْتَعْجِل / مِسْتَعْجْلَة",
                en: "in a hurry",
                enArabeezy: "mista3jel / mista3jleh",
                hint: "Male/female forms. Very common with taxi situations.",
                exampleAr: "أَنَا مِسْتَعْجِل، بَدِّي تَاكْسِي.",
                exampleArabeezy: "ana mista3jel, baddi taxi.",
                exampleEn: "I'm in a hurry, I want a taxi.",
            },
            {
                id: "hena_hnak",
                ar: "هِنَا / هُنَاك",
                en: "here / there",
                enArabeezy: "hena / hnak",
                hint: "Useful for telling a driver where to stop.",
                exampleAr: "بَنْزَل هِنَا، مِش هُنَاك.",
                exampleArabeezy: "banzel hena, mish hnak.",
                exampleEn: "I get off here, not there.",
            },
            {
                id: "yameen_shmal",
                ar: "يَمِين / شِمَال",
                en: "right / left",
                enArabeezy: "yameen / shmal",
                hint: "Directions. Turn right/left = لف يَمِين / لف شِمَال.",
                exampleAr: "المَوْقِف عَالْيَمِين، مِش عَالشِّمَال.",
                exampleArabeezy: "el-mawqaf 3al-yameen, mish 3ash-shmal.",
                exampleEn: "The stop is on the right, not on the left.",
            },
            {
                id: "dughri",
                ar: "دُغْرِي",
                en: "straight",
                enArabeezy: "dughri",
                hint: "Very useful direction word: روح دُغْرِي.",
                exampleAr: "مِن المَوْقِف بَمْشِي دُغْرِي.",
                exampleArabeezy: "min el-mawqaf bamshi dughri.",
                exampleEn: "From the stop I walk straight.",
            },
            {
                id: "law_sama7t",
                ar: "لَوْ سَمَحْت",
                en: "please / excuse me",
                enArabeezy: "law sama7t",
                hint: "Useful with drivers and strangers.",
                exampleAr: "بَنْزَل هِنَا، لَوْ سَمَحْت.",
                exampleArabeezy: "banzel hena, law sama7t.",
                exampleEn: "I get off here, please.",
            },
        ],
    },

    dialogue: {
        title: "Real Situation - Late to Class and Taking a Taxi",
        setting: "Kareem is running late for class. Nour helps him choose transportation, ask about the fare, and find the university gate.",
        lines: [
            { speaker: "Nour", ar: "مَرْحَبَا كَرِيم، وِينِك؟ الدَّرْس قَرَّب يْبَلِّش.", arArabeezy: "mar7aba kareem, wenak? el-dars qarrab yballish.", en: "Hi Kareem, where are you? Class is about to start." },
            { speaker: "Kareem", ar: "أَهْلِين نُور، لِسَّه عِنْد البِيت. الطَّرِيق زَحْمَة.", arArabeezy: "ahleen nour, lissa 3ind el-beet. el-Taree2 za7meh.", en: "Hi Nour, I'm still near home. The road is crowded." },
            { speaker: "Nour", ar: "بِدَّك تِرْكَب بَاص وَلَا تَاكْسِي؟", arArabeezy: "biddak terkab bas wala taxi?", en: "Do you want to take a bus or a taxi?" },
            { speaker: "Kareem", ar: "كنت بِدِّي أَرْكَب بَاص، بَس أَنَا مِسْتَعْجِل.", arArabeezy: "kunt biddi arkab bas, bas ana mista3jel.", en: "I wanted to take a bus, but I'm in a hurry." },
            { speaker: "Nour", ar: "طيب اِرْكَب تَاكْسِي، بَس اِسْأَل عن الأُجْرَة بِالأَوَّل.", arArabeezy: "tayyib irkab taxi, bas is2al 3an el-ojra bil-awwal.", en: "Okay, take a taxi, but ask about the fare first." },
            { speaker: "Kareem", ar: "تَمَام، هِيني واقف عِنْد الشَّارِع.", arArabeezy: "tamam, hayni wa2ef 3ind el-share3.", en: "Okay, I'm standing by the street." },
            { speaker: "Driver", ar: "تَاكْسِي؟ وِين بِدَّك تِرُوح؟", arArabeezy: "taxi? wen biddak troo7?", en: "Taxi? Where do you want to go?" },
            { speaker: "Kareem", ar: "بِدِّي أَرُوح عَالجَامْعَة. قَدِّيش الأُجْرَة؟", arArabeezy: "biddi aroo7 3al-jam3a. addeesh el-ojra?", en: "I want to go to the university. How much is the fare?" },
            { speaker: "Driver", ar: "خمستاشر شِيكِل، الطَّرِيق زَحْمَة شُوي.", arArabeezy: "khamasTa3ash shekel, el-Taree2 za7meh shway.", en: "Fifteen shekels, the road is a bit crowded." },
            { speaker: "Kareem", ar: "ماشي، بَس لَوْ سَمَحْت بَسرعة. الدَّرْس قَرَّب يْبَلِّش.", arArabeezy: "mashi, bas law sama7t bisur3a. el-dars qarrab yballish.", en: "Okay, but please quickly. Class is about to start." },
            { speaker: "Driver", ar: "تَمَام، اِرْكَب.", arArabeezy: "tamam, irkab.", en: "Okay, get in." },
            { speaker: "Kareem", ar: "نُور، ركبت تَاكْسِي. الأُجْرَة خمستاشر.", arArabeezy: "nour, rkibt taxi. el-ojra khamasTa3ash.", en: "Nour, I took a taxi. The fare is fifteen." },
            { speaker: "Nour", ar: "مِش رَخِيص، بَس أحسن مِن التأخير.", arArabeezy: "mish rkheeS, bas a7san min el-ta2kheer.", en: "Not cheap, but better than being late." },
            { speaker: "Kareem", ar: "صح. هلقيت قَرِيب مِن الإِشَارَة.", arArabeezy: "sa7. halla2et qareeb min el-ishara.", en: "True. Now I'm close to the traffic light." },
            { speaker: "Driver", ar: "بِدَّك تِنْزَل عِنْد الإِشَارَة وَلَا عِنْد المَوْقِف؟", arArabeezy: "biddak tinzal 3ind el-ishara wala 3ind el-mawqaf?", en: "Do you want to get off at the traffic light or at the stop?" },
            { speaker: "Kareem", ar: "بَنْزَل هِنَا عِنْد الإِشَارَة، لَوْ سَمَحْت.", arArabeezy: "banzel hena 3ind el-ishara, law sama7t.", en: "I'll get off here at the light, please." },
            { speaker: "Driver", ar: "تَمَام، هَاي الإِشَارَة.", arArabeezy: "tamam, hay el-ishara.", en: "Okay, here's the light." },
            { speaker: "Kareem", ar: "يعطيك العافِية.", arArabeezy: "ya3Teek el-3afyeh.", en: "Thanks / may God give you wellness." },
            { speaker: "Driver", ar: "الله يعافِيك.", arArabeezy: "allah ya3afeek.", en: "You're welcome." },
            { speaker: "Kareem", ar: "نُور، نزلت مِن التَّاكْسِي وبَمْشِي دُغْرِي.", arArabeezy: "nour, nizilt min el-taxi w bamshi dughri.", en: "Nour, I got out of the taxi and I'm walking straight." },
            { speaker: "Nour", ar: "تَمَام. لف يَمِين بَعْد مَحَلّ الفلافل.", arArabeezy: "tamam. liff yameen ba3d ma7all el-falafel.", en: "Good. Turn right after the falafel shop." },
            { speaker: "Kareem", ar: "شايف المَحَلّ. بَعْده باب الجَامْعَة؟", arArabeezy: "shayef el-ma7all. ba3do bab el-jam3a?", en: "I see the shop. Is the university gate after it?" },
            { speaker: "Nour", ar: "آه، امَشِي شُوي وبتوصل.", arArabeezy: "ah, imshi shway w bitwSal.", en: "Yes, walk a little and you'll arrive." },
            { speaker: "Kareem", ar: "وْصِلْت. آسف اِتْأَخَّرْت.", arArabeezy: "wSilt. asef it2akhart.", en: "I arrived. Sorry I'm late." },
            { speaker: "Nour", ar: "وَلَا يهمك، الزَّحْمَة بَتْأَخَّر الكُلّ.", arArabeezy: "wala yhemmak, el-za7meh bit2akhar el-kul.", en: "No worries, traffic makes everyone late." },
            { speaker: "Kareem", ar: "بَعْد الدَّرْس بِدِّي أَرُوح عِنْد سِتِّي. بِيتها قَرِيب، بَرُوح مَشِي.", arArabeezy: "ba3d el-dars biddi aroo7 3ind sitti. beetha qareeb, baroo7 mashi.", en: "After class I want to go to my grandmother's. Her house is near, I'll walk." },
            { speaker: "Nour", ar: "حلو، بَعْدِين اِحْكِيلي كم أخد مَعَك المِشْوَار.", arArabeezy: "7ilu, ba3dain i7keeli kam akhad ma3ak el-mishwar.", en: "Nice, later tell me how long the trip took." },
            { speaker: "Kareem", ar: "تَمَام، يِسْلَمُوا.", arArabeezy: "tamam, yislamu.", en: "Okay, thanks." },
        ],
        questions: [
            { ar: "وِين كان كَرِيم فِي بِدَايَة المحادثة؟", en: "Where was Kareem at the beginning of the dialogue?" },
            { ar: "لِيش كَرِيم كان مِسْتَعْجِل؟", en: "Why was Kareem in a hurry?" },
            { ar: "نُور نُصّحته يركب شُو؟", en: "What did Nour advise him to take?" },
            { ar: "نُور قالتله يسأل عن شُو بِالأَوَّل؟", en: "What did Nour tell him to ask about first?" },
            { ar: "كَرِيم قال للسَوَّاق بده يِرُوح وِين؟", en: "Where did Kareem tell the driver he wanted to go?" },
            { ar: "قَدِّيش كإِنْت الأُجْرَة؟", en: "How much was the fare?" },
            { ar: "السَّوَّاق قال الطَّرِيق كِيف؟", en: "What did the driver say about the road?" },
            { ar: "كَرِيم بده ينزل عِنْد الإِشَارَة وَلَا عِنْد المَوْقِف؟", en: "Did Kareem want to get off at the light or at the stop?" },
            { ar: "شُو قال كَرِيم للسَوَّاق لَمَّا نزل؟", en: "What did Kareem say to the driver when he got off?" },
            { ar: "بَعْد ما نزل مِن التَّاكْسِي، كَرِيم مِشى كِيف؟", en: "After getting out of the taxi, how did Kareem walk?" },
            { ar: "نُور قالتله يلف وِين؟", en: "Where did Nour tell him to turn?" },
            { ar: "بَعْد الدَّرْس كَرِيم بده يِرُوح عِنْد مِين؟", en: "After class, who does Kareem want to visit?" },
            { ar: "اِحْكِي طَرِيق كَرِيم لِلْجَامْعَة بخمس جمل.", en: "Describe Kareem's route to the university in five sentences." },
            { ar: "اِحْكِي عن طَرِيقك إِنْت: بتِرْكَب بَاص وَلَا تَاكْسِي؟ وِين بتِنْزَل؟", en: "Talk about your route: do you take a bus or taxi? Where do you get off?" },
        ],
    },

    grammar: [
        {
            title: "1. Place, destination, source, and transport",
            short: "فِي، عَـ، مِن، بِـ، مَع",
            description: "English uses broad prepositions such as ‘in’, ‘to’, ‘from’, and ‘by’. Palestinian Arabic chooses a short form according to the relationship: فِي locates you inside/at a place, عَـ points toward a destination, مِن marks the starting point, بِـ introduces the means of transport, and مَع adds a companion. Learn each one inside a movement sentence.",
            table: {
                title: "Core movement prepositions",
                headers: ["Function", "Palestinian form", "Example", "Natural meaning"],
                rows: [
                    ["location", "فِي (fi)", "أَنَا فِي البِيت", "I am at home"],
                    ["destination", "عَـ / عَلَى (3a / 3ala)", "بَرُوح عَالسُّوق", "I go to the market"],
                    ["source", "مِن (min)", "بَرْجَع مِن الشُّغُل", "I return from work"],
                    ["means", "بِـ (bi-)", "بَرُوح بِالتَّاكْسِي", "I go by taxi"],
                    ["companion", "مَع (ma3)", "بَرْكَب مَع أَخُوي", "I ride with my brother"],
                ],
            },
            examples: [
                { ar: "أَنَا فِي البِيت، بَس بَعْد شُوَيّ بَرُوح عَالجَامْعَة.", arabeezy: "ana fil-beit, bas ba3d shway baroo7 3al-jam3a.", en: "I’m at home, but soon I’m going to university." },
                { ar: "بَرْجَع مِن الشُّغُل بِالبَاص.", arabeezy: "barja3 min esh-shughul bil-bas.", en: "I return from work by bus." },
                { ar: "اليَوم بَرْكَب مَع أُخْتِي، مِش لَحَالِي.", arabeezy: "el-yom barkab ma3 ukhti, mish la7ali.", en: "Today I’m riding with my sister, not alone." },
            ],
            commonMistakes: [
                "Do not use فِي for every English ‘to’: a destination normally uses عَـ in everyday movement—بَرُوح عَالسُّوق.",
                "The باء in بِالتَّاكْسِي means ‘by taxi’; the باء in بَرُوح is part of the habitual present. They have different jobs even though both are written بـ.",
                "عَـ attaches to the following word in speech: عَ + البِيت → عَالبِيت.",
            ],
            exercises: [
                { prompt: "Complete: بَرْجَع ___ الشُّغُل السَّاعَة خَمْسَة. (from)", options: ["مِن", "فِي", "مَع"], correct: "مِن", explanation: "مِن marks the point where the movement starts: from work." },
                { prompt: "Choose: ‘I go to the market by taxi.’", options: ["بَرُوح عَالسُّوق بِالتَّاكْسِي.", "بَرُوح فِي السُّوق مِن التَّاكْسِي.", "بَرُوح مِن السُّوق عَالتَّاكْسِي."], correct: "بَرُوح عَالسُّوق بِالتَّاكْسِي.", explanation: "عَـ marks the destination; بِـ marks the means of transport." },
                { prompt: "What does مَع add in بَرْكَب مَع أَخُوي?", options: ["a companion", "a destination", "a price"], correct: "a companion", explanation: "مَع means ‘with’ and introduces the person accompanying the speaker." },
            ],
        },
        {
            title: "2. Building a route with direction words",
            short: "دُغْرِي، يَمِين، شِمَال، قَبْل، بَعْد، عِنْد",
            description: "Giving directions requires landmarks and sequence, not isolated words. Gaza Palestinian speakers commonly say دُغْرِي or عَطُول for ‘straight’, then connect a turn to a landmark with عِنْد, قَبْل, or بَعْد. The preposition and landmark make the instruction usable.",
            table: {
                title: "Direction chunks a driver can follow",
                headers: ["Chunk", "Arabizi", "Meaning / function"],
                rows: [
                    ["كَمِّل دُغْرِي", "kammel dughri", "continue straight"],
                    ["لُفّ يَمِين", "luff yameen", "turn right"],
                    ["لُفّ شِمَال", "luff shmal", "turn left"],
                    ["عِنْد الإِشَارَة", "3ind el-ishara", "at the traffic light"],
                    ["قَبْل الدُّوَّار", "qabel ed-dawwar", "before the roundabout"],
                    ["بَعْد الجَامِع", "ba3d el-jame3", "after the mosque"],
                    ["قُدَّام المَدْرَسَة", "quddam el-madraseh", "in front of the school"],
                    ["مُقَابِل الصَّيْدَلِيَّة", "muqabel eS-Seidaliyyeh", "opposite the pharmacy"],
                ],
            },
            examples: [
                { ar: "كَمِّل دُغْرِي، وَعِنْد الإِشَارَة لُفّ يَمِين.", arabeezy: "kammel dughri, w 3ind el-ishara luff yameen.", en: "Continue straight, and at the traffic light turn right." },
                { ar: "البِيت بَعْد الجَامِع، مُقَابِل المَدْرَسَة.", arabeezy: "el-beit ba3d el-jame3, muqabel el-madraseh.", en: "The house is after the mosque, opposite the school." },
                { ar: "نَزِّلْنِي قَبْل الدُّوَّار بِشُوَيّ.", arabeezy: "nazzilni qabel ed-dawwar b-shway.", en: "Drop me off a little before the roundabout." },
            ],
            commonMistakes: [
                "يَمِين and شِمَال alone name directions; add a movement command such as لُفّ to tell the driver what to do.",
                "عِنْد can mean ‘at/by’ a landmark here. It also expresses possession in عِنْدِي; context separates the meanings.",
                "Palestinians may use both دُغْرِي and عَطُول for ‘straight/directly’, with local and personal variation.",
            ],
            exercises: [
                { prompt: "Choose: ‘Turn right at the traffic light.’", options: ["عِنْد الإِشَارَة لُفّ يَمِين.", "مِن الإِشَارَة كَمِّل شِمَال.", "الإِشَارَة فِي يَمِين."], correct: "عِنْد الإِشَارَة لُفّ يَمِين.", explanation: "عِنْد introduces the landmark, then لُفّ يَمِين gives the action." },
                { prompt: "Which chunk means ‘opposite the pharmacy’?", options: ["مُقَابِل الصَّيْدَلِيَّة", "جَنْب الصَّيْدَلِيَّة", "وَرَا الصَّيْدَلِيَّة"], correct: "مُقَابِل الصَّيْدَلِيَّة", explanation: "مُقَابِل means facing/opposite." },
                { prompt: "Put the route in a useful order.", options: ["كَمِّل دُغْرِي، بَعْدِين لُفّ شِمَال.", "شِمَال دُغْرِي بَعْدِين.", "بَعْدِين الإِشَارَة مِن."], correct: "كَمِّل دُغْرِي، بَعْدِين لُفّ شِمَال.", explanation: "The sequence gives an action first, then the next action with بَعْدِين." },
            ],
        },
        {
            title: "3. Commands for a driver: direct but polite",
            short: "وَقِّف، كَمِّل، لُفّ، نَزِّلْنِي، خُدْنَا",
            description: "Taxi instructions naturally use the masculine singular imperative because the driver is often addressed as one man. The command itself can be neutral, but لَو سَمَحْت, مَعَلِّش, or الله يِرْضَى عَلَيْك softens it. Attached endings such as ـنِي and ـنَا tell the driver who receives the action.",
            table: {
                title: "Practical driver instructions",
                headers: ["Instruction", "Arabizi", "Natural English"],
                rows: [
                    ["وَقِّف هُون", "waqqef hon", "stop here"],
                    ["كَمِّل دُغْرِي", "kammel dughri", "keep going straight"],
                    ["لُفّ يَمِين", "luff yameen", "turn right"],
                    ["نَزِّلْنِي هُون", "nazzilni hon", "drop me off here"],
                    ["خُدْنَا عَالسَّرَايَا", "khodna 3as-Saraya", "take us to Al-Saraya"],
                    ["اسْتَنَّى دَقِيقَة", "istanna daqeeqa", "wait one minute"],
                ],
            },
            examples: [
                { ar: "مَعَلِّش، نَزِّلْنِي عِنْد الصَّيْدَلِيَّة.", arabeezy: "ma3allish, nazzilni 3ind eS-Seidaliyyeh.", en: "Excuse me, drop me off by the pharmacy." },
                { ar: "لَو سَمَحْت كَمِّل دُغْرِي لِآخِر الشَّارِع.", arabeezy: "law sama7t kammel dughri la-akher esh-share3.", en: "Please continue straight to the end of the street." },
                { ar: "خُدْنَا عَالسُّوق، الله يِرْضَى عَلَيْك.", arabeezy: "khodna 3as-soo2, allah yarDa 3aleik.", en: "Take us to the market, please." },
            ],
            commonMistakes: [
                "نَزِّلْنِي is one spoken unit: نَزِّل (‘drop’) + ـنِي (‘me’). Do not add أَنَا after it.",
                "A loud bare command may sound impatient. In a normal ride, soften it and use a calm tone.",
                "Do not confuse وَقِّف (‘stop something/the car’) with وُقِف (‘was stopped’) or the noun مَوْقِف (‘station/stop’).",
            ],
            exercises: [
                { prompt: "Choose the natural request: ‘Drop me off here, please.’", options: ["لَو سَمَحْت نَزِّلْنِي هُون.", "أَنَا نَزِّل هُون.", "مَا نَزِّلْنِي هُون."], correct: "لَو سَمَحْت نَزِّلْنِي هُون.", explanation: "نَزِّلْنِي contains ‘me’, and لَو سَمَحْت softens the request." },
                { prompt: "What does the ending ـنَا mean in خُدْنَا?", options: ["us", "him", "you"], correct: "us", explanation: "خُدْنَا means ‘take us’." },
                { prompt: "Which command tells the driver to wait?", options: ["اسْتَنَّى دَقِيقَة.", "بِنْزَل هُون.", "قَدِّيش الأُجْرَة؟"], correct: "اسْتَنَّى دَقِيقَة.", explanation: "اسْتَنَّى is the masculine singular imperative ‘wait’." },
            ],
        },
        {
            title: "4. Negative commands: telling someone not to do something",
            short: "لَا تْلُفّ — لَا تْوَقِّف — مَا تِسْرَعْش",
            description: "A common clear negative command uses لَا + a second-person verb without the habitual بـ: لَا تْلُفّ (‘don’t turn’). Gaza and other Palestinian speech also use مَا...ـش, especially for stronger conversational prohibition: مَا تِسْرَعْش. Both patterns are useful to recognise; this unit keeps لَا + verb as the easiest productive pattern.",
            table: {
                title: "Positive and negative instructions",
                headers: ["Positive command", "Core negative", "Conversational alternative", "Meaning"],
                rows: [
                    ["لُفّ", "لَا تْلُفّ", "مَا تْلُفِّش", "turn / do not turn"],
                    ["وَقِّف", "لَا تْوَقِّف", "مَا تْوَقِّفْش", "stop / do not stop"],
                    ["تْسَرَّع", "لَا تِتْسَرَّع", "مَا تِتْسَرَّعْش", "hurry / do not rush"],
                    ["اِسْرَع", "لَا تِسْرَع", "مَا تِسْرَعْش", "speed up / do not speed"],
                ],
            },
            examples: [
                { ar: "لَا تْلُفّ هُون، لُفّ بَعْد الإِشَارَة.", arabeezy: "la tluff hon, luff ba3d el-ishara.", en: "Don’t turn here; turn after the traffic light." },
                { ar: "لَا تْوَقِّف فِي نُصّ الشَّارِع.", arabeezy: "la twaqqef fi noSS esh-share3.", en: "Don’t stop in the middle of the street." },
                { ar: "مَعَلِّش، مَا تِسْرَعْش، مِش مُسْتَعْجِلِين.", arabeezy: "ma3allish, ma tisra3sh, mish mista3jleen.", en: "Please don’t speed; we’re not in a hurry." },
            ],
            commonMistakes: [
                "After prohibitive لَا, do not keep the habitual بـ: لَا تْلُفّ, not لَا بِتْلُفّ.",
                "Do not combine both patterns incorrectly as لَا مَا تْلُفّ. Choose either لَا تْلُفّ or مَا تْلُفِّش.",
                "Negative commands can sound urgent. In non-emergencies, add مَعَلِّش or لَو سَمَحْت.",
            ],
            exercises: [
                { prompt: "Choose: ‘Don’t turn here.’", options: ["لَا تْلُفّ هُون.", "لَا بِتْلُفّ هُون.", "مَا لُفّ هُون."], correct: "لَا تْلُفّ هُون.", explanation: "The core prohibition uses لَا + second-person verb without the habitual بـ." },
                { prompt: "Which is a Gaza/Palestinian conversational alternative for ‘Don’t speed’?", options: ["مَا تِسْرَعْش.", "مِش اِسْرَع.", "لَا بِتِسْرَع."], correct: "مَا تِسْرَعْش.", explanation: "The مَا...ـش frame is widely recognised in conversational negative commands." },
                { prompt: "Correct لَا بِتْوَقِّف هُون.", options: ["لَا تْوَقِّف هُون.", "لَا وَقِّف هُون.", "مَا بِتْوَقِّفْش هُون."], correct: "لَا تْوَقِّف هُون.", explanation: "Remove the habitual بـ after prohibitive لَا." },
            ],
        },
        {
            title: "5. Explaining the trip: sequence, cause, and result",
            short: "أَوَّل إِشِي، بَعْدِين، عَشَان، فَـ",
            description: "A route becomes a short story when the student links actions. أَوَّل إِشِي starts the sequence, بَعْدِين moves to the next step, عَشَان gives a purpose or reason, and فَـ introduces a result. These connectors recycle the present tense without requiring a full past-tense system yet.",
            table: {
                title: "Route connectors",
                headers: ["Connector", "Arabizi", "Job", "Example chunk"],
                rows: [
                    ["أَوَّل إِشِي", "awwal ishi", "first", "أَوَّل إِشِي بَرْكَب البَاص"],
                    ["بَعْدِين", "ba3dein", "then", "بَعْدِين بِنْزَل عَالسَّرَايَا"],
                    ["عَشَان", "3ashan", "because / in order to", "بَطْلَع بَكِّير عَشَان الزَّحْمَة"],
                    ["لَأَنُّه", "la2anno", "because", "بِتْأَخَّر لَأَنُّه الشَّارِع زَحْمَة"],
                    ["فَـ", "fa-", "so / therefore", "الطَّرِيق بَعِيد، فَبَرْكَب"],
                ],
            },
            examples: [
                { ar: "أَوَّل إِشِي بَرْكَب البَاص، وَبَعْدِين بَمْشِي خَمْس دَقَايِق.", arabeezy: "awwal ishi barkab el-bas, w ba3dein bamshi khames daqayeq.", en: "First I take the bus, then I walk for five minutes." },
                { ar: "بَطْلَع بَكِّير عَشَان مَا أَتْأَخَّر.", arabeezy: "baTla3 bakkeer 3ashan ma at2akhkhar.", en: "I leave early so I won’t be late." },
                { ar: "الطَّرِيق بَعِيد، فَبَرْكَب تَاكْسِي.", arabeezy: "eT-Tareeq ba3eed, fabarkab taxi.", en: "The road is far, so I take a taxi." },
            ],
            commonMistakes: [
                "عَشَان can introduce purpose or cause; translate the whole relationship, not the word in isolation.",
                "Do not repeat disconnected أَنَا sentences. Connect steps with أَوَّل إِشِي and بَعْدِين to sound more natural.",
                "The attached فَـ is short in speech and writing; it introduces what happened as a result.",
            ],
            exercises: [
                { prompt: "Choose the connector for the next step in a route.", options: ["بَعْدِين", "مِن", "قُدَّام"], correct: "بَعْدِين", explanation: "بَعْدِين means ‘then/after that’ and advances the sequence." },
                { prompt: "Complete: بَطْلَع بَكِّير ___ مَا أَتْأَخَّر. (so that)", options: ["عَشَان", "مَع", "فِي"], correct: "عَشَان", explanation: "عَشَان introduces the purpose: so that I am not late." },
                { prompt: "Which sentence clearly expresses a result?", options: ["الطَّرِيق بَعِيد، فَبَرْكَب تَاكْسِي.", "الطَّرِيق مِن بَرْكَب تَاكْسِي.", "الطَّرِيق عِنْد تَاكْسِي."], correct: "الطَّرِيق بَعِيد، فَبَرْكَب تَاكْسِي.", explanation: "فَـ links the fact that the road is far to the result: taking a taxi." },
            ],
        },
    ],

    microChecks: {
        enabled: true,
        every: 5,
        items: [
            {
                "id": "trans_mc1",
                "type": "choose",
                "prompt": "Choose the Palestinian Arabic sentence for: Today the streets are full of cars.",
                "options": [
                    "الشَّوَارِع اليَوم مَلْيَانَة سَيَّارَات.",
                    "الشَّوَارِع اليَوم فَاضْيَة مِش هَادْيَة.",
                    "اليَوم مِش جَاي عَلَى بَالِي أَنَام.",
                    "بَدِّي أَرُوح عَالشُّغُل بَكْرِي."
                ],
                "correct": "الشَّوَارِع اليَوم مَلْيَانَة سَيَّارَات."
            },
            {
                "id": "trans_mc2",
                "type": "reorder",
                "prompt": "Reorder the Arabic words to match: We took the train when we were in Jordan.",
                "options": [
                    "كُنَّا",
                    "القِطَار",
                    "بِالأُرْدُن",
                    "رِكِبْنَا",
                    "لَمَّا"
                ],
                "correct": [
                    "رِكِبْنَا",
                    "القِطَار",
                    "لَمَّا",
                    "كُنَّا",
                    "بِالأُرْدُن"
                ]
            },
            {
                "id": "trans_mc3",
                "type": "reorder",
                "prompt": "Reorder the Arabic words to match: The taxi stopped at the red light.",
                "options": [
                    "الحَمْرَا",
                    "وِقِف",
                    "عَالإِشَارَة",
                    "التَّاكْسِي"
                ],
                "correct": [
                    "التَّاكْسِي",
                    "وِقِف",
                    "عَالإِشَارَة",
                    "الحَمْرَا"
                ]
            },
            {
                "id": "trans_mc4",
                "type": "choose",
                "prompt": "Choose the Palestinian Arabic sentence for: My grandma's house is close, I go on foot.",
                "options": [
                    "بِيت سِتِّي قَرِيب، بَرُوح مَشِي.",
                    "بِيت سِتِّي بَعِيد، بَرُوح بِالسَّيَّارَة.",
                    "الشَّوَارِع اليَوم مَلْيَانَة سَيَّارَات.",
                    "رِكِبْنَا القِطَار لَمَّا كُنَّا بِالأُرْدُن."
                ],
                "correct": "بِيت سِتِّي قَرِيب، بَرُوح مَشِي."
            },
            {
                "id": "trans_mc4",
                "type": "reorder",
                "prompt": "Reorder the Arabic words to match: I get off in front of the university entrance.",
                "options": [
                    "الْجَامْعَة",
                    "قُدَّام",
                    "بَنْزِل",
                    "مَدْخَل"
                ],
                "correct": [
                    "بَنْزِل",
                    "قُدَّام",
                    "مَدْخَل",
                    "الْجَامْعَة"
                ]
            },
            {
                "id": "trans_mc5",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: I arrive at class at nine o'clock.\n___ عَالدَّرْس السَّاعَة تِسْعَة.",
                "options": [
                    "بَوْصَل",
                    "بَرْجَع",
                    "بَطْلَع",
                    "بَنَام"
                ],
                "correct": "بَوْصَل"
            },
            {
                id: "trans_mc6",
                type: "complete",
                prompt: "Complete the Arabic request for: I get off here, please.\nبَنْزَل هِنَا، ___.",
                options: ["لَوْ سَمَحْت", "دُغْرِي", "هُنَاك", "مِسْتَعْجِل"],
                correct: "لَوْ سَمَحْت",
            },
        ],
    },

    practice: {
        showRealUse: false,
        showWriting: false,
        separateExerciseTypes: true,
        quiz: [
            {
                id: "trans_q1",
                questionAr: "Choose the English meaning of فِي زَحْمَة فِي الشَّارِع.",
                optionsEn: ["There is traffic in the street.", "There is food in the house.", "There is tea at night."],
                correctIndex: 0,
            },
            {
                id: "trans_q2",
                questionAr: "Complete the sentence: لَمَّا بَكُون مِسْتَعْجِل، بَرْكَب ___.",
                optionsEn: ["تَاكْسِي", "فواكه", "عشا"],
                correctIndex: 0,
            },
            {
                id: "trans_q3",
                questionAr: "Choose the English meaning of بَنْزَل هِنَا، لَوْ سَمَحْت.",
                optionsEn: ["I'll get off here, please.", "I eat here, please.", "I live here, please."],
                correctIndex: 0,
            },
            {
                id: "trans_q4",
                questionAr: "Change the verb to the present tense: أَنَا ركبت بَاص.",
                optionsEn: ["أَنَا بَرْكَب بَاص.", "أَنَا بَنْزَل بَاص.", "أَنَا بَدِّي بَاص."],
                correctIndex: 0,
            },
            {
                id: "trans_q5",
                questionAr: "Choose the correct direction: رُوح دُغْرِي وبَعْدِين لِف ___.",
                optionsEn: ["يَمِين", "عِنْد المَوْقِف", "بِالتَّاكْسِي"],
                correctIndex: 0,
            },
            {
                id: "trans_q6",
                questionAr: "Choose the English meaning of: «اِتْأَخَّرْت عشان الزَّحْمَة»",
                optionsEn: ["I was late because of traffic.", "I was hungry because of lunch.", "I walked because the house is near."],
                correctIndex: 0,
            },
            {
                id: "trans_q7",
                questionAr: "Choose the English meaning of: «بِيت سِتِّي قَرِيب، بَرُوح مَشِي»",
                optionsEn: ["My grandmother's house is near, I go walking.", "My grandmother's food is tasty.", "My grandmother is late."],
                correctIndex: 0,
            },
            {
                id: "trans_q8",
                questionAr: "Choose the opposite of: «رَخِيص»",
                optionsEn: ["غَالِي", "بَعِيد", "مِسْتَعْجِل"],
                correctIndex: 0,
            },
            {
                id: "trans_q9",
                questionAr: "Choose how to ask for the taxi fare.",
                optionsEn: ["قَدِّيش الأُجْرَة؟", "وِين ساكن؟", "شُو اسمك؟"],
                correctIndex: 0,
            },
        ],
        rolePlays: [
            "Taxi role-play: say where you want to go, ask about the fare, and tell the driver where to stop.",
        ],
        sections: [
            {
                title: "A - Recognition",
                matching: [
                    { ar: "تَاكْسِي", arabeezy: "taxi", en: "taxi" },
                    { ar: "بَاص", arabeezy: "bas", en: "bus" },
                    { ar: "زَحْمَة", arabeezy: "za7meh", en: "traffic" },
                    { ar: "أُجْرَة", arabeezy: "ujra", en: "fare" },
                    { ar: "بَنْزَل", arabeezy: "banzal", en: "I get off" },
                    { ar: "بَوْصَل", arabeezy: "bawSal", en: "I arrive" },
                ],
                multipleChoice: [
                    { prompt: "Review: Choose the meaning of كُلّ يَوم بَرُوح (kul yom baroo7).", options: ["Every day I go.", "Every day I eat.", "Every day I sleep."], correct: "Every day I go." },
                    { prompt: "Choose the question for “How much is the fare?”", options: ["قَدِّيش الأُجْرَة؟ (addeesh el-ujra?)", "وِين سَاكِن؟ (ween saken?)", "شُو بَدَّك؟ (shu baddak?)"], correct: "قَدِّيش الأُجْرَة؟ (addeesh el-ujra?)" },
                ],
            },
            {
                title: "B - Guided practice",
                fillInTheBlank: [
                    { prompt: "كُلّ يَوم ___ البَاص.", arabeezy: "kul yom ___ el-bas.", cueEn: "ride / take", answer: "بَرْكَب" },
                    { prompt: "فِي ___ فِي الشَّارِع.", arabeezy: "fi ___ fish-shari3.", cueEn: "traffic", answer: "زَحْمَة" },
                    { prompt: "___ الأُجْرَة؟", arabeezy: "___ el-ujra?", cueEn: "how much", answer: "قَدِّيش" },
                    { prompt: "بَنْزَل هِنَا، ___ سَمَحْت.", arabeezy: "banzal hena, ___ sama7t.", cueEn: "please", answer: "لَوْ" },
                    { prompt: "بَعْد الغَدَا عِنْدِي ___.", arabeezy: "ba3d el-ghada 3indi ___.", cueEn: "an errand / trip", answer: "مِشْوَار" },
                    { prompt: "أَنَا ___ هِنَا.", arabeezy: "ana ___ hena.", cueEn: "get off", answer: "بَنْزَل" },
                    { prompt: "عَادَةً ___ عَالجَامْعَة السَّاعَة تَمَانْيَة.", arabeezy: "3adatan ___ 3al-jam3a es-sa3a tamaniye.", cueEn: "arrive", answer: "بَوْصَل" },
                    { prompt: "لَمَّا بَكُون مِسْتَعْجِل ___ تَاكْسِي.", arabeezy: "lamma bakoon mista3jel ___ taxi.", cueEn: "take", answer: "بَرْكَب" },
                    { prompt: "رُوح دُغْرِي وَبَعْدِين لِف ___.", arabeezy: "roo7 dughri w ba3deen lif ___.", cueEn: "right", answer: "يَمِين" },
                    { prompt: "مَوْقِف البَاصَات ___ مِن البِيت.", arabeezy: "mawqif el-basat ___ min el-beit.", cueEn: "near", answer: "قَرِيب" },
                    { prompt: "Unit 4 review: بَعْد الدَّرْس ___ فَلَافِل.", arabeezy: "ba3d ed-dars ___ falafel.", cueEn: "I want", answer: "بَدِّي" },
                    { prompt: "Unit 3 review: الصُّبُح ___ عَالشُّغُل.", arabeezy: "eS-Subu7 ___ 3ash-shughul.", cueEn: "I go", answer: "بَرُوح" },
                ],
                correctTheMistake: [
                    { prompt: "Correct: أَنَا بِتْرَكَب بَاص.", arabeezy: "ana btirkab bas.", answer: "أَنَا بَرْكَب بَاص." },
                    { prompt: "Correct: هِيَّ مِسْتَعْجِل.", arabeezy: "hiyyeh mista3jel.", answer: "هِيَّ مِسْتَعْجْلَة." },
                    { prompt: "Correct: التَّاكْسِي رْخِيصَة.", arabeezy: "et-taxi rkheeSa.", answer: "التَّاكْسِي رْخِيص." },
                    { prompt: "Review — correct: إِنْتِ بِتْرُوح عَالشُّغُل.", arabeezy: "inti bitroo7 3ash-shughul.", answer: "إِنْتِ بِتْرُوحِي عَالشُّغُل." },
                    { prompt: "Use the feminine adjective. Correct: هِيَّ مِتْأَخِّر.", arabeezy: "hiyyeh mit2akhkher.", answer: "هِيَّ مِتْأَخِّرَة." },
                    { prompt: "Use the correct preposition. Correct: المَوْقِف قَرِيب عَلَى البِيت.", arabeezy: "el-mawqif qareeb 3ala el-beit.", answer: "المَوْقِف قَرِيب مِن البِيت." },
                ],
                reorderSentences: [
                    { prompt: "Build: I take the bus every day.", arabeezy: "barkab el-bas kul yom.", words: ["البَاص","بَرْكَب",  "كُلّ يَوم."], answer: "بَرْكَب البَاص كُلّ يَوم." },
                    { prompt: "Build: I get off here, please.", arabeezy: "banzal hena, law sama7t.", words: ["بَنْزَل", "لَوْ سَمَحْت." ,"هِنَا،"], answer: "بَنْزَل هِنَا، لَوْ سَمَحْت." },
                    { prompt: "Build: Go straight, then turn right.", arabeezy: "roo7 dughri, ba3deen lif yameen.", words: ["بَعْدِين","رُوح دُغْرِي،",  "لِف يَمِين."], answer: "رُوح دُغْرِي، بَعْدِين لِف يَمِين." },
                    { prompt: "Review: After class I want falafel.", arabeezy: "ba3d ed-dars baddi falafel.", words: [ "بَدِّي","بَعْد الدَّرْس", "فَلَافِل."], answer: "بَعْد الدَّرْس بَدِّي فَلَافِل." },
                    { prompt: "Put the words in order: The bus stop is near the house.", arabeezy: "mawqif el-basat qareeb min el-beit.", words: ["مَوْقِف البَاصَات","مِن البِيت.",  "قَرِيب"], answer: "مَوْقِف البَاصَات قَرِيب مِن البِيت." },
                    { prompt: "Put the words in order: I was late because of traffic.", arabeezy: "it2akhkhart 3ashan ez-za7meh.", words: ["عَشَان", "اِتْأَخَّرْت", "الزَّحْمَة."], answer: "اِتْأَخَّرْت عَشَان الزَّحْمَة." },
                ],
            },
        ],
        translation: [
            { id: "trans_t1", type: "enToAr", textEn: "I'm in a hurry, I want a taxi.", textAr: "أَنَا مِسْتَعْجِل/مِسْتَعْجْلَة، بَدِّي تَاكْسِي." },
            { id: "trans_t2", type: "arToEn", textEn: "There is traffic in the street.", textAr: "فِي زَحْمَة فِي الشَّارِع." },
            { id: "trans_t3", type: "enToAr", textEn: "I get off here, please.", textAr: "بَنْزَل هِنَا، لَوْ سَمَحْت." },
            { id: "trans_t4", type: "arToEn", textEn: "I take the bus every day.", textAr: "بَرْكَب البَاص كُلّ يَوم." },
            { id: "trans_t5", type: "enToAr", textEn: "Go straight and then turn right.", textAr: "روح دُغْرِي وبَعْدِين لف يَمِين." },
            { id: "trans_t6", type: "arToEn", textEn: "I was late because of traffic.", textAr: "اِتْأَخَّرْت عشان الزَّحْمَة." },
            { id: "trans_t7", type: "enToAr", textEn: "My grandmother's house is near, I go walking.", textAr: "بِيت سِتِّي قَرِيب، بَرُوح مَشِي." },
            { id: "trans_t8", type: "arToEn", textEn: "The taxi is expensive today.", textAr: "التَّاكْسِي غَالِي اليَوم." },
            { id: "trans_t9", type: "enToAr", textEn: "How much is the fare to the university?", textAr: "قَدِّيش الأُجْرَة لِلْجَامْعَة؟" },
            { id: "trans_t10", type: "arToEn", textEn: "How much is this trip?", textAr: "قَدِّيش المِشْوَار؟" },
            { id: "trans_t11", type: "enToAr", textEn: "The bus stop is near the house.", textAr: "مَوْقِف البَاصَات قَرِيب مِن البِيت." },
            { id: "trans_t12", type: "arToEn", textEn: "After lunch, I have an errand.", textAr: "بَعْد الغَدَا عِنْدِي مِشْوَار." },
            { id: "trans_t13", type: "enToAr", textEn: "Turn left at the traffic light.", textAr: "لف شِمَال عِنْد الإِشَارَة." },
            { id: "trans_t14", type: "arToEn", textEn: "After class, I want falafel and hummus.", textAr: "بَعْد الدَّرْس بَدِّي فَلَافِل وَحُمُّص." },
            { id: "trans_t15", type: "enToAr", textEn: "I'm late because there is traffic.", textAr: "أَنَا مِتْأَخِّر/مِتْأَخِّرَة عَشَان فِي زَحْمَة." },
        ],
    },

    homework: {
        instructions:
            `Write and record a 60-90 second story about how you move around in your city in Palestinian Arabic. Mention: where you go, what you ride, if the road is crowded, where you get off, and when you arrive. Try to use at least 8 words from the vocabulary list and at least 3 words from previous units.

Translate these sentences into Gaza Palestinian Arabic:
1. Hi, how are you today?
2. Every morning I go to work.
3. I am in a hurry, I want a taxi.
4. How much is the taxi fare?
5. How much is this trip?
6. The taxi is expensive today.
7. I take the bus every day.
8. There is traffic in the street.
9. I was late because of traffic.
10. I get off here, please.
11. Go straight and then turn right.
12. The bus stop is near the house.
13. My grandmother's house is near, I go walking.
14. After class, I want falafel and hummus.
15. Goodbye, see you later.`,
    },

    teacherNotes: {
        warmup: [
            "Start with: كِيف بْتَرُوح عَالشُّغُل/الجَامْعَة؟ تَاكْسِي؟ بَاص؟ مَشِي؟",
            "Draw a tiny route: البِيت -> الشَّارِع -> الإِشَارَة -> الجَامْعَة.",
            "Recycle old units through route stories: عِنْد سِتِّي، مَحَلّ فلافل، بَعْد الغدا، الصُّبُح.",
        ],
        vocabularySteps: [
            "Teach movement words as chunks: بَرْكَب تَاكْسِي، بَنْزَل هِنَا، بَوْصَل مِتْأَخِّر، فِي زَحْمَة.",
            "Keep directions as hidden support: يَمِين، شِمَال، دُغْرِي, not a separate grammar section.",
            "Use a mini-map and make the student move a finger while speaking.",
        ],
        dialogueSteps: [
            "Treat the dialogue as a realistic late-arrival story.",
            "Ask the student to retell Kareem's route in 4-6 sentences.",
            "Then replace Kareem's route with the student's real route.",
        ],
        practiceTips: [
            "Push full answers: بَرْكَب بَاص, not just بَاص.",
            "Drill driver language: بَنْزَل هِنَا، لَوْ سَمَحْت.",
            "Drill fare language: قَدِّيش الأُجْرَة؟ / كَمْ سِعِر المِشْوَار؟",
            "Use traffic as a reason: اِتْأَخَّرْت عشان الزَّحْمَة.",
        ],
        wrapup: [
            "Student says their route from home to work/class.",
            "Student gives one direction: روح دُغْرِي، لف يَمِين.",
            "Student records a short route voice note for homework.",
        ],
        myNotes: "",
    },
};
