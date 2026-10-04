import { LESSON_ID_OPINIONS } from '../../constants.js';

export const lessonId = LESSON_ID_OPINIONS;

export const lesson = {
    meta: {
        level: "Intermediate",
        unit: "Opinions",
        lessonTitle: "Unit 11 - Opinions & Preferences in Gaza Palestinian Arabic",
        contentVersion: 2026082001,
    },

    overview: {
        title: "Unit 11 - Opinions & Preferences",
        description:
            "Students learn how to give opinions, agree, disagree politely, compare options, and explain preferences in natural Gaza Palestinian Arabic while recycling apartment, food, weather, study, health, shopping, and transport vocabulary.",
        goals: [
            "Give a simple opinion without sounding too formal.",
            "Agree and disagree politely using Gaza-style softeners.",
            "Compare two choices and explain why one is better.",
            "Ask other people for their opinion and keep the conversation going.",
            "Reuse older vocabulary inside real opinion conversations.",
        ],
        speakingOutcomes: [
            "By the end of this unit, the student can give an opinion and a reason in 3-4 sentences.",
            "The student can compare two apartments, meals, routes, classes, or plans.",
            "The student can disagree politely without sounding rude.",
        ],
    },

    vocabulary: {
        core: [
            {
                id: "ra2y",
                ar: "رَأْي",
                en: "opinion",
                enArabeezy: "ra2y",
                hint: "My opinion = رَأْيِي. Your opinion = رَأْيَك / رَأْيِك. Plural: آرَاء.",
                exampleAr: "عِنْدَك رَأْي عَن الشَّقَّة؟",
                exampleArabeezy: "3indak ra2y 3an esh-sha2qa?",
                exampleEn: "Do you have an opinion about the apartment?",
            },
            {
                id: "shu_ra2yak",
                ar: "شُو رَأْيَك؟",
                en: "What do you think?",
                enArabeezy: "sho ra2yak?",
                hint: "To a woman: شُو رَأْيِك؟ To a group: شُو رَأْيْكُم؟",
                exampleAr: "شُو رَأْيِك إنتي يا مريم بالدِّراسَة هُون؟",
                exampleArabeezy: "sho ra2yik inti ya Maryam bid-dirasa hon?",
                exampleEn: "What do you (f.) think, Maryam, about studying here?",
            },
            {
                id: "7asab_ra3yi",
                ar: "حَسَب رَأْيِي",
                en: "In my opinion",
                enArabeezy: "7asab ra'yi",
                hint: "Standard phrase for stating an opinion.",
                exampleAr: "• حَسَب رَأْيِي، الدَّوَام المَسَائِي أريح إلكو.",
                exampleArabeezy: "7asab ra'yi, ed-dawaam el-masa2i aryaH ilku.",
                exampleEn: "In my opinion, the evening shift is more comfortable for you."
            },
            {
                id: "ana_shayef",
                ar: "أَنَا شَايِف / شَايْفَة",
                en: "I think / I see it as",
                enArabeezy: "ana shayef / shayfe",
                hint: "Male: شَايِف. Female: شَايْفَة. Very common in speech.",
                exampleAr: "أَنَا شَايْفَة الإِيجَار غَالِي شُوَيّ.",
                exampleArabeezy: "ana shayfe el-ijar ghali shway.",
                exampleEn: "I think the rent is a little expensive.",
            },
            {
                id: "bil_nisbe_ili",
                ar: "بالنِّسْبَة إِلِي",
                en: "for me / from my point of view",
                enArabeezy: "bil-nisbe ʾe-li",
                hint: "Good to show that it’s a personal view.",
                exampleAr: "بالنِّسْبَة إِلِي، الشُّغُل مَع الدِّراسَة مُتْعِب.",
                exampleArabeezy: "belnsba ily, elshghl m3 eldrasa mt3b.",
                exampleEn: "For me, working while studying is tiring.",
            },
            {
                id: "ba7es",
                ar: "بَحِسّ",
                en: "I feel / I have the feeling",
                enArabeezy: "ba7is",
                hint: "Soft opinion, not only emotion.",
                exampleAr: "بَحِسّ إِنُّه هَالفَصْل أَصْعَب مِن الفَصْل اللِّي قَبْلُه، خصوصاً مَع كَثْرَة المَوَادّ.",
exampleArabeezy: "ba7is inno hal-faṣl aṣ‘ab min el-faṣl illi qablu, khāṣṣah ma‘ kathret el-mawād.",
exampleEn: "I feel this semester is harder than the one before it, especially with the heavy course load."
            },
            {
                id: "bisara7a",
                ar: "بِصَرَاحَة",
                en: "honestly",
                enArabeezy: "biSara7a",
                hint: "Use before honest opinions. Softer than sounding direct.",
                exampleAr: "بِصَرَاحَة، الأَكْل كَان زَاكِي، بَس الخِدْمِة كَانَت بَطِيئَة كْتِير.",
exampleArabeezy: "bi-ṣarāḥa, el-akl kān zāki, bas el-khidme kānet baṭīʾa ktīr.",
exampleEn: "Honestly, the food was delicious, but the service was very slow."
            },
            {
                id: "3a_fikra",
                ar: "عَلَى فِكْرَة",
                en: "by the way",
                enArabeezy: "3ala fikra",
                hint: "Adds a side opinion or reminder.",
                exampleAr: "عَلَى فِكْرَة، أُخْتِي جَرَّبَت هَاد المَكَان مِن قَبْل، وَمَدَحَت الخِدْمِة هُنَاك.",
exampleArabeezy: "'ala fikra, ukhti jarrabat hal-makan min qabl, w madaHat el-khidme hunak.",
exampleEn: "By the way, my sister tried this place before, and she praised the service there."
            },
            {
                id: "ma_ba3raf",
                ar: "مَا بَعْرَف",
                en: "I don't know / I'm not sure",
                enArabeezy: "ma ba3raf",
                hint: "Soft hesitation before giving an opinion.",
                exampleAr: "مَا بَعْرَف، الشَّقَّة صْغِيرَة وَلَّا كْبِيرَة؟",
                exampleArabeezy: "ma ba3raf, esh-sha2qa Sgheere walla kbeere?",
                exampleEn: "I don't know—is the apartment small or big?",
            },
            {
                id: "mumkin",
                ar: "مُمْكِن",
                en: "maybe / possible",
                enArabeezy: "mumkin",
                hint: "Useful for soft opinions: مُمْكِن تَكُون أَحْسَن.",
                exampleAr: "مُمْكِن الشَّقَّة التَّانْيَة تِكُون أَحْسَن، لِأَنَّهَا أَهْدَى وَأَقْرَب عَلَى المَوَاصَلَات.",
exampleArabeezy: "mumkin el-shaqqa el-tanye tkun aḥsan, li'annahā ahdā w aqrab 'ala el-muwāṣalāt.",
exampleEn: "The other apartment might be better, because it's quieter and closer to public transportation."
            },
            {
                id: "Sa77_miyya_bil_miyya",
                ar: "صَحّ مِيَّة بِالمِيَّة",
                en: "100% correct / Absolutely",
                enArabeezy: "Sa77 miyya bil-miyya",
                hint: "Enthusiastic agreement.",
                exampleAr: "صَحّ مِيَّة بِالمِيَّة، إِذَا كَان المَكَان بَعِيد، المَوَاصَلَات بِتِفْرِق كْتِير.",
exampleArabeezy: "ṣaḥḥ miyyè bil-miyyè, iza kān el-makān ba'īd, el-muwāṣalāt bitifriq ktīr.",
exampleEn: "100% true, if the place is far, public transportation makes a big difference."
            },
            {
                id: "ana_ma3ak_fi_hadi",
                ar: "أَنَا مَعَك فِي هَادِي",
                en: "I'm with you on this one",
                enArabeezy: "ana ma3ak fi hadi",
                hint: "Agrees with a specific point during a debate.",
               exampleAr: "أَنَا مَعَك فِي هَادِي، الدِّرَاسَة مَع الشُّغُل صَعْبَة، خَاصَّة لَمَّا يِكُون عِنْدَك اِمْتِحَان.",
exampleArabeezy: "ana ma'ak fi hadi, el-dirase ma' el-shughul ṣa'be, khāṣṣah lamma yikun 'indak imtiḥān.",
exampleEn: "I agree with you on this one, studying along with work is difficult, especially when you have an exam."
            },
            {
                id: "mazboot",
                ar: "مَزْبُوط",
                en: "true / exactly",
                enArabeezy: "mazbooT",
                hint: "Quick agreement: مَزْبُوط / بِالزَّبْط، كَلَامَك صَحّ.",
                exampleAr: "مَزْبُوط، هَاد المَكَان أَهْدَى مِن الأَوَّل، وَكَمَان الإِيجَار أَرْخَص.",
exampleArabeezy: "mazbūṭ, hād el-makān ahdā min el-awwal, w kamān el-ījār arkhaṣ.",
exampleEn: "That's right, this place is quieter than the first one, and the rent is also cheaper."
            },
            {
                id: "kalamak_sa7",
                ar: "كَلَامَك صَحّ",
                en: "what you're saying is right",
                enArabeezy: "kalamak Sa77",
                hint: "To a woman: كَلَامِك صَحّ.",
                exampleAr: "كَلَامِك صَحّ، أَنَا كَمَان جَرَّبْت المَوَاصَلَات الصُّبْح، وَفِعْلًا بَتْكُون زَحْمَة.",
exampleArabeezy: "kalāmak ṣaḥḥ, ana kamān jarrabt el-muwāṣalāt el-ṣubḥ, w fi'lan batkun zaḥme.",
exampleEn: "What you're saying is right, I also tried public transportation in the morning, and it really gets crowded."
            },
            {
                id: "bas_baraDo",
                ar: "بَس بَرَضُه...",
                en: "But still...",
                enArabeezy: "bas baraDo...",
                hint: "Essential Gaza dialect softener before offering a counter-argument.",
               exampleAr: "عارف إني مقصّر، بَس بَرَضُه الظُّرُوف صعبة.",
exampleArabeezy: "‘ārif inni mqaṣṣir, bas barḍuh el-ẓurūf ṣa‘be.",
exampleEn: "I know I'm falling short, but still, the circumstances are difficult."
            },
            {
                id: "mish_shariT",
                ar: "مِش ضَرُورِي/ مِش شَرِط",
                en: "Not necessarily",
                enArabeezy: "mish ShariT / mish Daroori",
                hint: "Polite way to challenge a generalization.",
                exampleAr: "مِش شَرِط إِذَا المَطْعَم غَالِي يِكُون أَكْلُه أَزْكَى، أَحْيَانًا المَكَان البَسِيط بِيْكُون أَحْسَن.",
exampleArabeezy: "mish shariṭ iza el-maṭ'am ghāli yikūn akluh azkay, aḥyānan el-makān el-basīṭ biyikūn aḥsan.",
exampleEn: "It's not a rule that if a restaurant is expensive its food will be tastier, sometimes a simple place is better."
            },
            {
                id: "mish_moqtane3",
                ar: "مِش مُقْتَنِع / مُقْتَنْعَة",
                en: "not convinced",
                enArabeezy: "mish moqtane3 / moqtan3a",
                hint: "Male: مُقْتَنِع. Female: مُقْتَنْعَة.",
               exampleAr: "أَنَا مِش مُقْتَنِع بِهَاد الخِيَار، لِأَنَّه الإِيجَار غَالِي وَالمَكَان بَعِيد عَن الشُّغُل.",
exampleArabeezy: "ana mish muqtani‘ bi-hād el-khiyār, li'annahu el-ījār ghāli wel-makān ba‘īd ‘an el-shughul.",
exampleEn: "I'm not convinced by this option, because the rent is expensive and the place is far from work."
            },

            {
                id: "ana_bafaddel",
                ar: "أَنَا بَفَضِّل",
                en: "I prefer",
                enArabeezy: "ana bafaDDel",
                hint: "Use with a noun or option: بَفَضِّل شَقَّة أَهْدَى.",
                exampleAr: "أَنَا بَفَضِّل أَقْعُد بِالبَيْت اليَوْم، عِنْدِي شُغُل كْتِير وَبَدِّي ارتاح شُوَي.",
exampleArabeezy: "ana bafḍil aq‘ud bil-bayt el-yawm, ‘indi shughul ktīr w baddi irtaḥ shway.",
exampleEn: "I prefer to stay home today, I have a lot of work and I want to rest a bit."
            },
            {
                id: "a7san_min",
                ar: "أَحْسَن مِن",
                en: "better than",
                enArabeezy: "a7san min",
                hint: "Comparison: هَادِي أَحْسَن مِن هَدِيك.",
                exampleAr: "هَاد المَكَان أَحْسَن مِن الأَوَّل، فِيه مَسَاحَة أَكْبَر وَالمَوَاصَلَات أَسْهَل.",
exampleArabeezy: "hād el-makān aḥsan min el-awwal, fīh masāḥa akbar wel-muwāṣalāt ashhal.",
exampleEn: "This place is better than the first one, it has more space and transportation is easier."
            },
            {
                id: "awda_min",
                ar: "أَهْدَى مِن",
                en: "quieter than",
                enArabeezy: "ahda min",
                hint: "Useful for places, apartments, streets, and cafés.",
                exampleAr: "هَاي الشَّقَّة أَهْدَى مِن هَدِيك، خَاصَّة بِاللَّيْل، وَهَاد الإِشْي مُهِمّ إِلِي.",
exampleArabeezy: "hāy el-shaqqa ahdā min hadīk, khāṣṣah bil-layl, w hād el-ishyi muhimm ili.",
exampleEn: "This apartment is quieter than that one, especially at night, and this thing is important to me."
            },
            {
                id: "aghla_min",
                ar: "أَغْلَى مِن",
                en: "more expensive than",
                enArabeezy: "aghla min",
                hint: "Recycle shopping and apartment rent.",
                exampleAr: "تذاكر السَّفَر السنة هاي أغلَى مِن السَّنة الماضية.",
exampleArabeezy: "tadhākir el-safar el-sane hāy aghlā min el-sane el-māḍiye.",
exampleEn: "Travel tickets this year are more expensive than last year.",
            },
            {
                id: "arkhas_min",
                ar: "أَرْخَص مِن",
                en: "cheaper than",
                enArabeezy: "arkhaS min",
                hint: "Useful in shopping, rent, taxis, and food.",
                exampleAr: "الخضرة في السُّوق أرخص مِن السوبرماركت.",
exampleArabeezy: "el-khuḍra fis-sūq arkhaṣ min el-sūbarmārkit.",
exampleEn: "Vegetables in the market are cheaper than in the supermarket.",
            },
            {
                id: "asra3_min",
                ar: "أَسْرَع مِن",
                en: "faster than",
                enArabeezy: "asra3 min",
                hint: "Compare transport, service, internet, or repair.",
                exampleAr: "التَّاكْسِي أَسْرَع مِن البَاص، بَس إِذَا الطَّرِيق زَحْمَة مُمْكِن الفَرْق مَا يِكُون كْبِير.",
exampleArabeezy: "el-taksi asra' min el-baṣ, bas iza el-ṭarīq zaḥme mumkin el-farq mā yikūn kbīr.",
exampleEn: "The taxi is faster than the bus, but if the road is crowded, the difference might not be big."
            },
            {
                id: "3ala_7asab",
                ar: "عَلَى حَسَب",
                en: "it depends on",
                enArabeezy: "3ala 7asab",
                hint: "Very useful intermediate chunk.",
                exampleAr: "عَلَى حَسَب الوَقْت وَالمَكَان، إِذَا مُسْتَعْجِل بَرُوح بِالتَّاكْسِي، وَإِذَا فِي عِنْدِي وَقْت بَرْكَب البَاص.",
exampleArabeezy: "'ala hasab el-waqt wel-makān, iza musta'jil barūḥ bil-taksi, w iza fī 'indi waqt barkab el-baṣ.",
exampleEn: "Depending on the time and place, if I'm in a rush I go by taxi, and if I have time I take the bus."
            },
            {
                id: "el_mohim",
                ar: "المُهِمّ",
                en: "the important thing is",
                enArabeezy: "el-muhim",
                hint: "Use to summarize your point.",
                exampleAr: "المُهِمّ إنّهُم وصلوا سالمين عَالبَيت.",
exampleArabeezy: "el-muhimm innahum wiṣlu sālimīn ‘al-bayt.",
exampleEn: "The important thing is that they arrived safely home."
            },
            {
                id: "ma_btifriq",
                ar: "مَا بِتِفْرِق مَعِي",
                en: "it doesn't matter to me",
                enArabeezy: "ma btifriq ma3i",
                hint: "Use when an option is not important.",
                exampleAr: "مَا بِتِفْرِق مَعِي أَيّ شَقَّة نِخْتَار، المُهِمّ الإِيجَار يِكُون مَنَاسِب وَالمَوَاصَلَات سَهْلَة.",
exampleArabeezy: "mā bitifriq ma'i ayy shaqqa nikhtār, el-muhimm el-ījār yikūn munāsib wel-muwāṣalāt sahle.",
exampleEn: "It doesn't make a difference to me which apartment we choose, the important thing is that the rent is reasonable and transportation is easy."
            },
            {
                id: "ana_ma3",
                ar: "أَنَا مَع",
                en: "I support / I am for",
                enArabeezy: "ana ma3",
                hint: "Use for ideas/plans: أَنَا مَع الفِكْرَة.",
                exampleAr: "أَنَا مَع الفِكْرَة، خَلِّينَا نِجَرِّب المَكَان الجَدِيد وَإِذَا مَا عَجَبْنَا بِنِرْجَع لِلأَوَّل.",
exampleArabeezy: "ana ma' el-fikra, khallīnā nijarrib el-makān el-jadīd w iza mā 'ajabnā binirja' lil-awwal.",
exampleEn: "I'm with the idea, let's try the new place and if we don't like it we'll go back to the first one."
            },
           
            {
                id: "bala_z3al",
                ar: "بَلَا زَعَل",
                en: "no offense",
                enArabeezy: "bala za3al",
                hint: "Use before a sensitive disagreement.",
                exampleAr: "بَلَا زَعَل، أَنَا مِش مَعَك فِي هَاد الرَّأْي، أَنَا بَشُوف إِنُّه فِي خِيَار أَفْضَل.",
exampleArabeezy: "balā za‘al, ana mish ma‘ak fi hād el-ra'y, ana bashūf innuh fi khiyār afḍal.",
exampleEn: "No offense, I'm not with you on this opinion, I see that there is a better option."
            },
            {
                id: "fahmak",
                ar: "فَاهِم عَلَيْك",
                en: "I understand you",
                enArabeezy: "fahem 3aleik",
                hint: "To a woman: فَاهِم عَلَيْكِ. Softens disagreement.",
                exampleAr: "فَاهِم عَلَيْك، وَبَعْرَف لِيش بَتْفَضِّل هَاد المَكَان، بَس أَنَا بَرْضُه بَفَضِّل الأَوَّل.",
exampleArabeezy: "fāhim 'alayk, w ba'rif lēsh batfaḍḍil hād el-makān, bas ana barḍuh bafaḍḍil el-awwal.",
exampleEn: "I understand you, and I know why you prefer this place, but I still prefer the first one."
            },
            {
                id: "min_na7yeti",
                ar: "مِن نَاحْيِتِي",
                en: "from my side / as for me",
                enArabeezy: "min na7yeti",
                hint: "Natural way to introduce a personal preference.",
                exampleAr: "مِن نَاحْيِتِي، بَفَضِّل المَكَان القَرِيب مِن الجَامْعَة، عَشَان مَا أَضَلّ سَاعَة بِالمَوَاصَلَات.",
exampleArabeezy: "min nāḥyiti, bafaḍḍil el-makān el-qarīb min el-jāmi‘a, ‘ashān mā aḍall sā‘a bil-muwāṣalāt.",
exampleEn: "From my side, I prefer the place close to the university, so I don't stay an hour in transportation."
            },
            {
                id: "law_biddi",
                ar: "لَوْ بَدِّي أَخْتَار",
                en: "if I had to choose",
                enArabeezy: "law biddi akhtar",
                hint: "Good closing phrase before a final decision.",
                "exampleAr": "لَوْ بَدِّي أَخْتَار بَيْن الشَّقَّتِين، بَاخُد التَّانْيَة، لِأَنَّهَا أَهْدَى وَالإِيجَار أَنْسَب.",
  "exampleArabeezy": "law baddi akhtār bayn el-shaqqatayn, bākhud el-tānye, li'annahā ahdā wel-ījār ansab.",
  "exampleEn": "If I wanted to choose between the two apartments, I'd take the second one, because it's quieter and the rent is more suitable."
            },
            {
                id: "qarar",
                ar: "قَرَار",
                en: "decision",
                enArabeezy: "qarar",
                hint: "Final choice after opinions. My decision = قَرَارِي.",
               "exampleAr": "قَرَارُهُم كان شُجاع في هالمرحلة الصَّعْبة.",
  "exampleArabeezy": "qarāruhum kān shujā‘ fī hal-marḥala el-ṣa‘be.",
  "exampleEn": "Their decision was brave in this difficult stage."
            },
            {
                id: "mash_mosta3jil",
                ar: "مِش مُسْتَعْجِل",
                en: "not in a rush",
                enArabeezy: "mish musta3jil",
                hint: "Female: مِش مُسْتَعْجِلَة.",
                "exampleAr": "أَنَا مِش مُسْتَعْجِل، خَلِّينَا نِفَكَّر مْنِيح وَنِقَارِن بَيْن الخِيَارَات.",
  "exampleArabeezy": "ana mish musta‘jil, khallīnā nifakkir mnīḥ w niqārin bayn el-khiyārāt.",
  "exampleEn": "I'm not in a rush, let's think well and compare between the options."
            },
            {
                id: "khallina",
                ar: "خَلِّينَا",
                en: "let's",
                enArabeezy: "khallina",
                hint: "Useful for making a group suggestion.",
                "exampleAr": "خَلِّينَا نِتْفِق عَلَى مَوْعِد تَانِي لِلِاجْتِمَاع.",
  "exampleArabeezy": "khallīnā nitfiq ‘alā maw‘id tāni lil-ijtimā‘.",
  "exampleEn": "Let's agree on another time for the meeting."
            },
            {
                id: "ma_fi_maqaarana",
                ar: "مَا فِي مَقَارَنَة",
                en: "There's no comparison!",
                enArabeezy: "ma fi maqaarana",
                hint: "When one option is far superior.",
                "exampleAr": "مَا فِي مُقَارَنَة بَيْن الأَكْل البَيْتِي وَالأَكْل الجَاهِز، خَاصَّة إِذَا أُمِّي هِيَ اللِّي طَابْخَة.",
  "exampleArabeezy": "mā fī muqārana bayn el-akl el-bayti wel-akl el-jāhiz, khāṣṣah iza ummi hiye el-li ṭābkhah.",
  "exampleEn": "There is no comparison between homemade food and ready-made food, especially if my mother is the one who cooked it."  },
            {
                id: "min_ghair_ma",
                ar: "مِن غِير مَا",
                en: "without",
                enArabeezy: "min ghair ma",
                hint: "Intermediate connector.",
                "exampleAr": "مِن غِير مَا نِحْكِي كْتِير، خَلِّينَا نِقَارِن السِّعْر وَالمَكَان وَالمَوَاصَلَات، وَبَعْدَهَا نِقَرِّر.",
  "exampleArabeezy": "min ghīr mā niḥki ktīr, khallīnā niqārin el-si‘r wel-makān wel-muwāṣalāt, w ba‘dahā niqarir.",
  "exampleEn": "Without talking too much, let's compare the price, location, and transportation, and then decide."
            },

        ],
    },

    dialogue: {
        title: "Choosing an Apartment - Comparing Options",
        setting: "Samer, Mona, Rami, and Noor compare three apartments and decide which one is best before calling the landlord.",
        lines: [
            { speaker: "Samer", ar: "يَلَّا، شُو رَأْيْكُم بِالشُّقَق اللِّي شُفْنَاهَا اليَوْم؟", arArabeezy: "yalla, shoo ra2ykom bish-sho2a2 illi shofnaha el-yom?", en: "So, what do you think about the apartments we saw today?" },
            { speaker: "Mona", ar: "بِصَرَاحَة؟ أَنَا مَا ارْتَحْت لِشَقَّة الطَّابِق الأَوَّل.", arArabeezy: "biSara7a? ana ma irta7t la-sha22et eT-Tabe2 el-awwal.", en: "Honestly? I didn’t feel comfortable with the first-floor apartment." },
            { speaker: "Rami", ar: "لِيش؟ الإِيجَار أَرْخَص وَالمَكَان قَرِيب مِن كُلّ إِشِي.", arArabeezy: "leesh? el-ijar arkhaS w el-makan 2areeb min kol ishi.", en: "Why? The rent is cheaper and the place is close to everything." },
            { speaker: "Mona", ar: "صَحّ، بَس الدُّوشَة كْتِير. أَوَّل مَا فَتَحْنَا الشُّبَّاك، صَوْت السَّيَّارَات كَان عَالِي.", arArabeezy: "Sa77, bas ed-doshe kteer. awwal ma fata7na esh-shobbak, Sot es-sayyarat kan 3ali.", en: "True, but it’s very noisy. As soon as we opened the window, the traffic was loud." },
            { speaker: "Noor", ar: "أَنَا مَع مُونَا. إِذَا كُلّ يَوْم هَيْك، الوَاحِد مَا رَح يِعْرَف يِرْتَاح.", arArabeezy: "ana ma3 mona. iza kol yom hek, el-wa7ad ma ra7 yi3raf yirta7.", en: "I’m with Mona. If it’s like that every day, a person won’t be able to relax." },
            { speaker: "Samer", ar: "بَس لَا تِنْسُوا إِنَّهَا أَوْفَر بِحَوَالَي مِيَّتِين شِيكل.", arArabeezy: "bas la tinsou innaha awfar b7awali miyyetain shekel.", en: "But don’t forget it saves about two hundred shekels." },
            { speaker: "Rami", ar: "مَعَك حَقّ... بَس بِالنِّسْبَة إِلِي الرَّاحَة أَهَمّ مِن فَرْق السِّعِر.", arArabeezy: "ma3ak 7a2... bas bin-nisbe ili er-ra7a aham min far2 es-si3er.", en: "You’re right... but for me, comfort is more important than the price difference." },
            { speaker: "Noor", ar: "وَأَنَا هَيْك بِفَكِّر.", arArabeezy: "w ana hek bfakkir.", en: "That’s how I think too." },
            { speaker: "Mona", ar: "أَمَّا شَقَّة الطَّابِق التَّالِت عَجْبِتْنِي كْتِير.", arArabeezy: "amma sha22et eT-Tabe2 et-talet 3ajabitni kteer.", en: "But I really liked the third-floor apartment." },
            { speaker: "Rami", ar: "آه، هَاي أَحْسَن وَحْدَة بِرَأْيِي.", arArabeezy: "ah, hay a7san wa7de bra2yi.", en: "Yes, this one is the best in my opinion." },
            { speaker: "Samer", ar: "شُو اللِّي عَجَبْكُم فِيهَا؟", arArabeezy: "shoo illi 3ajabkom feeha?", en: "What did you like about it?" },
            { speaker: "Noor", ar: "هَادْيَة، وَفِيهَا ضَو، وَالبَرَنْدَة حِلْوَة.", arArabeezy: "hadye, w feeha Daw, w el-barande 7ilwe.", en: "It’s quiet, has light, and the balcony is nice." },
            { speaker: "Rami", ar: "وَكَمَان المَطْبَخ أَكْبَر، وَالإِنْتَرْنِت فِيهَا أَسْرَع.", arArabeezy: "w kaman el-maTbakh akbar, w el-internet feeha asra3.", en: "Also, the kitchen is bigger, and the internet there is faster." },
            { speaker: "Samer", ar: "بَس إِيجَارْهَا أَغْلَى.", arArabeezy: "bas ijarha aghla.", en: "But its rent is more expensive." },
            { speaker: "Mona", ar: "بِصَرَاحَة بِتِسْتَاهَل.", arArabeezy: "biSara7a btistahal.", en: "Honestly, it’s worth it." },
            { speaker: "Rami", ar: "بِالزَّبْط. بْتِدْفَع أَكْتَر شُوَي، بَس بْتِرْتَاح.", arArabeezy: "biz-zabt. btedf3 aktar shway, bas btirta7.", en: "Exactly. You pay a little more, but you feel comfortable." },
            { speaker: "Noor", ar: "أَنَا بُفَضِّل أَدْفَع زِيَادَة بَسِيطَة وَلَا أَضَلّ مُنْزَعْجَة كُلّ يَوْم.", arArabeezy: "ana bfaDDil adfa3 ziyade baseeTa wala aDall minza3je kol yom.", en: "I’d rather pay a little extra than stay annoyed every day." },
            { speaker: "Samer", ar: "أَمَّا أَنَا كُنْت مَع شَقَّة الطَّابِق الرَّابِع.", arArabeezy: "amma ana kont ma3 sha22et eT-Tabe2 er-rabe3.", en: "As for me, I preferred the fourth-floor apartment." },
            { speaker: "Rami", ar: "لِيش؟", arArabeezy: "leesh?", en: "Why?" },
            { speaker: "Samer", ar: "الإِطْلَالَة كْتِير حِلْوَة.", arArabeezy: "el-iTlale kteer 7ilwe.", en: "The view is really nice." },
            { speaker: "Noor", ar: "حِلْوَة... بَس صْغِيرَة.", arArabeezy: "7ilwe... bas Sgheere.", en: "It’s nice... but small." },
            { speaker: "Mona", ar: "وَكَمَان حَسِّيت فِيهَا رُطُوبَة.", arArabeezy: "w kaman 7asseet feeha rToobe.", en: "And I also felt there was humidity." },
            { speaker: "Rami", ar: "إِذَا فِيهَا رُطُوبَة، أَنَا مُسْتَحِيل أَسْكُن فِيهَا.", arArabeezy: "iza feeha rToobe, ana mesta7eel askon feeha.", en: "If there’s humidity, there’s no way I’d live in it." },
            { speaker: "Noor", ar: "الصِّحَّة أَهَمّ مِن أَي إِطْلَالَة.", arArabeezy: "eS-Si77a aham min ay iTlale.", en: "Health is more important than any view." },
            { speaker: "Samer", ar: "صَحّ، خُصُوصًا إِذَا الوَاحِد عِنْدُه حَسَاسِيَّة.", arArabeezy: "Sa77, khuSooSan iza el-wa7ad 3indo 7asasiyye.", en: "True, especially if someone has allergies." },
            { speaker: "Rami", ar: "طَيِّب خَلِّينَا نْقَارِنْهَا بِهُدُوء.", arArabeezy: "Tayyib khallina nqarinha bihodoo2.", en: "Okay, let’s compare them calmly." },
            { speaker: "Mona", ar: "الأُولَى أَرْخَص.", arArabeezy: "el-oola arkhaS.", en: "The first one is cheaper." },
            { speaker: "Noor", ar: "التَّالْتَة أَهْدَى.", arArabeezy: "et-talte ahda.", en: "The third one is quieter." },
            { speaker: "Samer", ar: "الرَّابْعَة إِطْلَالْتْهَا أَحْلَى.", arArabeezy: "er-rab3a iTlalitha a7la.", en: "The fourth one has the best view." },
            { speaker: "Rami", ar: "بَس التَّالْتَة مُتَوَازْنَة أَكْتَر.", arArabeezy: "bas et-talte mitwazne aktar.", en: "But the third one is more balanced." },
            { speaker: "Mona", ar: "أَنَا صَوْتِي مَعْهَا.", arArabeezy: "ana Sooti ma3ha.", en: "My vote is for it." },
            { speaker: "Noor", ar: "وَأَنَا كَمَان.", arArabeezy: "w ana kaman.", en: "Me too." },
            { speaker: "Samer", ar: "شَكْلِي خْسِرْت التَّصْوِيت. 😂", arArabeezy: "shakli khsirt et-taSweet.", en: "Looks like I lost the vote." },
            { speaker: "Rami", ar: "ههههه... غَيِّر رَأْيَك.", arArabeezy: "hahaha... ghayyer ra2yak.", en: "Haha... change your mind." },
            { speaker: "Samer", ar: "يُمْكِن غَيَّرْتُه فِعْلًا.", arArabeezy: "yimkin ghayyarto fi3lan.", en: "Maybe I actually changed it." },
            { speaker: "Noor", ar: "طَيِّب وَالسَّخَّان؟", arArabeezy: "Tayyib w es-sakhkhan?", en: "Okay, and what about the water heater?" },
            { speaker: "Mona", ar: "آه، هَاي أَهَمّ نُقْطَة.", arArabeezy: "ah, hay aham no2Ta.", en: "Yes, that’s the most important point." },
            { speaker: "Rami", ar: "أَنَا مِش مَع إِنَّا نْوَقِّع العَقْد قَبْل مَا يِتْصَلَّح.", arArabeezy: "ana mish ma3 inna nwaqqi3 el-3a2d 2abl ma yitSalla7.", en: "I’m not okay with signing the contract before it gets fixed." },
            { speaker: "Noor", ar: "وَلَا أَنَا.", arArabeezy: "wala ana.", en: "Me neither." },
            { speaker: "Samer", ar: "شُو رَأْيْكُم نِتْصِل بِصَاحِب البَيْت؟", arArabeezy: "shoo ra2ykom nitSil biSa7ib el-beit?", en: "What do you think about calling the landlord?" },
            { speaker: "Mona", ar: "فِكْرَة مُمْتَازَة.", arArabeezy: "fikra momtaze.", en: "Excellent idea." },
            { speaker: "Rami", ar: "بَس نِحْكِي مَعُه بِهُدُوء.", arArabeezy: "bas ni7ki ma3o bihodoo2.", en: "But let’s talk to him calmly." },
            { speaker: "Samer", ar: "أَلُو أَبُو أَحْمَد، يِعْطِيك العَافْيَة.", arArabeezy: "alo abu a7mad, ya3teek el-3afyeh.", en: "Hello, Abu Ahmad. Hope you’re well." },
            { speaker: "Abu Ahmad", ar: "الله يْعَافِيك، شُو صَار؟", arArabeezy: "allah y3afeek, shoo Sar?", en: "Thanks. What happened?" },
            { speaker: "Samer", ar: "إِحْنَا قَرَّرْنَا نَاخُد شَقَّة الطَّابِق التَّالِت.", arArabeezy: "i7na qarrarna nakhod sha22et eT-Tabe2 et-talet.", en: "We decided to take the third-floor apartment." },
            { speaker: "Abu Ahmad", ar: "الحَمْدُ لله.", arArabeezy: "el-7amdullah.", en: "Thank God." },
            { speaker: "Samer", ar: "بَس بَدْنَا نِتْأَكَّد إِنّ السَّخَّان يِتْصَلَّح قَبْل مَا نِسْكُن.", arArabeezy: "bas baddna nit2akkad inn es-sakhkhan yitSalla7 2abl ma niskon.", en: "But we want to make sure the water heater gets fixed before we move in." },
            { speaker: "Abu Ahmad", ar: "وَلَا يْهِمْكُم، بُكْرَة الفَنِّي بِيْكُون عِنْدَكُم.", arArabeezy: "wala yhimmkom, bokra el-fanni bikoon 3indakum.", en: "Don’t worry, tomorrow the technician will be there." },
            { speaker: "Rami", ar: "إِذَا انْحَلّ المَوْضُوع، بِالنِّسْبَة إِلِي كُلّ إِشِي تَمَام.", arArabeezy: "iza in7all el-mawDoo3, bin-nisbe ili kol ishi tamam.", en: "If the issue gets solved, everything is fine for me." },
            { speaker: "Noor", ar: "وَأَنَا هَيْك.", arArabeezy: "w ana hek.", en: "Same for me." },
            { speaker: "Mona", ar: "خَلَاص، هَيْك اتَّفَقْنَا.", arArabeezy: "khalaS, hek ittafa2na.", en: "Okay, then we agreed." },
            { speaker: "Samer", ar: "طَيِّب... بِمَا إِنُّه خَلَّصْنَا، مِين جَعَان؟ 😂", arArabeezy: "Tayyib... bima inno khallaSna, meen ja3an?", en: "Okay... since we’re done, who’s hungry?" },
            { speaker: "Rami", ar: "أَنَا مِن أَوَّل النِّقَاش جَعَان.", arArabeezy: "ana min awwal en-niqash ja3an.", en: "I’ve been hungry since the start of the discussion." },
            { speaker: "Noor", ar: "أَنَا بِرَأْيِي نِفْطَر هُون.", arArabeezy: "ana bra2yi nifTar hoon.", en: "In my opinion, let’s eat here." },
            { speaker: "Mona", ar: "مَعِك حَقّ، الأَكْل هُون زَاكِي.", arArabeezy: "ma3ik 7a2, el-akel hoon zaki.", en: "You’re right, the food here is tasty." },
            { speaker: "Samer", ar: "هَاي أَوَّل مَرَّة اليَوْم كُلْنَا اتَّفَقْنَا عَلَى نَفْس الرَّأْي. 😂", arArabeezy: "hay awwal marra el-yom kolna ittafa2na 3ala nafs er-ra2i.", en: "This is the first time today we all agreed on the same opinion." }
        ],

        questions: [
            { ar: "أَي شَقَّة مُونَا مَا ارْتَاحِتْلَهَا؟", en: "Which apartment did Mona not feel comfortable with?" },
            { ar: "لِيش رَامِي كَان شَايِف إِنَّهَا خِيَار مْنِيح؟", en: "Why did Rami think it was a good option?" },
            { ar: "لِيش نُور كَانِت مَع مُونَا؟", en: "Why did Noor agree with Mona?" },
            { ar: "شُو مُمَيِّزَات شَقَّة الطَّابِق التَّالِت؟", en: "What are the advantages of the third-floor apartment?" },
            { ar: "شُو كَان عَيْب شَقَّة الطَّابِق التَّالِت؟", en: "What was the disadvantage of the third-floor apartment?" },
            { ar: "لِيش سَامِر كَان مَع شَقَّة الطَّابِق الرَّابِع؟", en: "Why did Samer prefer the fourth-floor apartment?" },
            { ar: "شُو المُشْكِلَة اللِّي لَاحَظُوهَا فِي الشَّقَّة الرَّابْعَة؟", en: "What problem did they notice in the fourth apartment?" },
            { ar: "لِيش نُور قَالَت: الصِّحَّة أَهَمّ مِن أَي إِطْلَالَة؟", en: "Why did Noor say: health is more important than any view?" },
            { ar: "أَي شَقَّة اخْتَارُوا بِالنِّهَايَة؟", en: "Which apartment did they choose in the end?" },
            { ar: "شُو الشَّرْط قَبْل مَا يْوَقِّعُوا عَقْد الإِيجَار؟", en: "What was the condition before signing the rental contract?" },
            { ar: "شُو وَعَدْهُم أَبُو أَحْمَد؟", en: "What did Abu Ahmad promise them?" },
            { ar: "شُو قَرَّرُوا يِعْمَلُوا بَعْد مَا خَلَّصُوا؟", en: "What did they decide to do after they finished?" }
        ],
    },

    grammar: [
        {
            title: "1. Giving an opinion: direct, soft, or uncertain",
            short: "Choose how strongly you want to sound",
            description: "The opening phrase shows how certain or direct you are. برأيي gives a clear opinion; بحسّ إنّه makes it personal and softer; بعتقد إنّه presents a belief; and يمكن leaves real uncertainty. Match إنّه or إنّها to the thing you are discussing.",
            table: {
                title: "Opinion strength",
                headers: ["Palestinian Arabic", "Arabizi", "Natural use"],
                rows: [
                    ["برأيي...", "bra2yi...", "a clear personal opinion"],
                    ["بالنسبة إلي...", "bin-nisbe ili...", "from my point of view"],
                    ["بحسّ إنّه / إنّها...", "ba7is inno / innha...", "a softer impression"],
                    ["بعتقد إنّه / إنّها...", "ba3taqid inno / innha...", "a considered belief"],
                    ["يمكن...", "yimkin...", "an uncertain possibility"],
                ],
            },
            examples: [
                { ar: "برأيي، الشقّة التالتة أحسن خيار.", arabeezy: "bra2yi, esh-sha22a et-talte a7san khyar.", en: "In my opinion, the third apartment is the best choice." },
                { ar: "بحسّ إنّها غالية شوي بالنسبة إلنا.", arabeezy: "ba7is innha ghalye shway bin-nisbe ilna.", en: "I feel it is a little expensive for us." },
                { ar: "يمكن الطريق التاني يكون أسرع.", arabeezy: "yimkin eT-Tareeq et-tani ykoon asra3.", en: "Maybe the other route is faster." },
            ],
            commonMistakes: [
                "Do not translate ‘I think’ the same way every time; each opening carries a different tone.",
                "Use إنّه with a masculine noun and إنّها with a feminine noun: المطعم → إنّه; الشقّة → إنّها.",
            ],
            exercises: [
                { prompt: "Choose the softest opening: ‘___ the class is a little difficult.’", options: ["بحسّ إنّه", "أكيد", "مستحيل", "معك حق"], correct: "بحسّ إنّه", explanation: "بحسّ إنّه presents the statement as a personal impression." },
                { prompt: "Complete: بعتقد ___ الشقّة مريحة.", options: ["إنّها", "إنّه", "من", "ولا"], correct: "إنّها", explanation: "الشقّة is feminine, so speakers use إنّها." },
                { prompt: "Which phrase signals genuine uncertainty?", options: ["يمكن", "برأيي", "أكيد", "بالزبط"], correct: "يمكن", explanation: "يمكن means ‘maybe.’" },
            ],
        },
        {
            title: "2. Agreeing and disagreeing politely",
            short: "Acknowledge the person before challenging the idea",
            description: "Natural Palestinian disagreement often has two moves: acknowledge part of the other view, then add your point with بس. Use بلا زعل before a sensitive opinion. مش مقتنع is firmer than أنا شايف الموضوع غير هيك.",
            table: {
                title: "From agreement to disagreement",
                headers: ["Function", "Phrase", "Tone"],
                rows: [
                    ["full agreement", "أنا معك / معك حق / مزبوط", "warm and direct"],
                    ["partial agreement", "معك حق، بس...", "polite and balanced"],
                    ["different view", "أنا شايف الموضوع غير هيك", "calm disagreement"],
                    ["strong disagreement", "أنا مش مقتنع / مقتنعة", "clear and firm"],
                    ["sensitive point", "بلا زعل، بس...", "softens what follows"],
                ],
            },
            examples: [
                { ar: "معك حق، بس الإيجار كمان مهم.", arabeezy: "ma3ak 7a2, bas el-ijar kaman muhim.", en: "You are right, but the rent matters too." },
                { ar: "أنا شايفة الموضوع غير هيك.", arabeezy: "ana shayfe el-mawDoo3 gheir hek.", en: "I see the matter differently." },
                { ar: "بلا زعل، أنا مش مقتنع بهالحلّ.", arabeezy: "bala za3al, ana mish moqtane3 b-hal-7all.", en: "No offense, I am not convinced by this solution." },
            ],
            commonMistakes: [
                "أنا معك agrees with a person; أنا مع الفكرة supports an idea.",
                "Use مقتنع for a man and مقتنعة for a woman speaking about herself.",
            ],
            exercises: [
                { prompt: "Choose a polite partial disagreement.", options: ["معك حق، بس عندي ملاحظة.", "إنت غلط.", "مستحيل تفهم.", "خلص اسكت."], correct: "معك حق، بس عندي ملاحظة.", explanation: "It acknowledges the other view first." },
                { prompt: "A woman says: ‘I am not convinced.’", options: ["أنا مش مقتنعة.", "أنا مش مقتنع.", "أنا ما مقتنعة.", "أنا مو بوافق."], correct: "أنا مش مقتنعة.", explanation: "The participle agrees with the female speaker." },
                { prompt: "Complete: أنا شايف الموضوع ___ هيك.", options: ["غير", "أكتر", "ولا", "عشان"], correct: "غير", explanation: "غير هيك means ‘differently.’" },
            ],
        },
        {
            title: "3. Comparing choices in conversation",
            short: "Compare qualities, amounts, and equality",
            description: "Short comparisons such as أحسن، أرخص، أغلى، أسرع take من. For amounts, use أكتر or أقل. Use نفس for equality, and مش قدّ when one option does not measure up to another.",
            table: {
                title: "Comparison patterns",
                headers: ["Pattern", "Example", "Meaning"],
                rows: [
                    ["comparative + من", "هاد أسرع من هداك", "faster than"],
                    ["أكتر + noun", "فيها ضو أكتر", "more light"],
                    ["أقل + noun", "فيها دوشة أقل", "less noise"],
                    ["نفس + noun", "نفس السعر", "the same price"],
                    ["مش قدّ + noun", "مش قدّ التاني", "not as good as the other"],
                ],
            },
            examples: [
                { ar: "الباص أرخص من التاكسي، بس التاكسي أسرع.", arabeezy: "el-baS arkhaS min et-taksi, bas et-taksi asra3.", en: "The bus is cheaper than the taxi, but the taxi is faster." },
                { ar: "الشقة هاي فيها ضو أكتر ودوشة أقل.", arabeezy: "esh-sha22a hay feeha Daw aktar w doshe aqall.", en: "This apartment has more light and less noise." },
                { ar: "الخدمة منيحة، بس مش قدّ خدمة المحلّ التاني.", arabeezy: "el-khidme mnee7a, bas mish qadd khidmit el-ma7all et-tani.", en: "The service is good, but not as good as the other shop’s." },
            ],
            commonMistakes: ["Keep من after direct comparisons: أغلى من، أحسن من، أهدى من.", "أكتر expresses a greater amount or degree; it does not automatically mean ‘better.’"],
            exercises: [
                { prompt: "Complete: المطعم هادا أرخص ___ المطعم اللي جنبنا.", options: ["من", "عن", "في", "عشان"], correct: "من", explanation: "Direct comparative forms take من." },
                { prompt: "Choose: ‘This room has less noise.’", options: ["الأوضة هاي فيها دوشة أقل.", "الأوضة هاي أرخص من.", "الأوضة هاي نفس دوشة.", "الأوضة هاي أكتر هادية."], correct: "الأوضة هاي فيها دوشة أقل.", explanation: "أقل + noun expresses a smaller amount." },
                { prompt: "What does مش قدّ التاني mean here?", options: ["It is not as good as the other one.", "It is exactly the same.", "It costs more.", "It is the second one."], correct: "It is not as good as the other one.", explanation: "مش قدّ marks an unequal comparison." },
            ],
        },
        {
            title: "4. Building longer spoken sentences",
            short: "Connect opinion, reason, contrast, and result",
            description: "بس introduces contrast, لأنه gives a reason, and عشان هيك gives a result. مع إنّه introduces an unexpected contrast. من ناحية... ومن ناحية تانية... helps weigh two sides of a choice.",
            table: {
                title: "Spoken connectors",
                headers: ["Connector", "Job", "Example cue"],
                rows: [
                    ["بس", "contrast", "good, but expensive"],
                    ["لأنه / لأنها", "reason", "because it is far"],
                    ["عشان هيك", "result", "so we left"],
                    ["مع إنّه / إنّها", "unexpected contrast", "although it is far"],
                    ["من ناحية... ومن ناحية تانية...", "weigh two sides", "one advantage, one drawback"],
                ],
            },
            examples: [
                { ar: "ما عجبتني الشقّة لأنها ضيّقة، وعشان هيك ما أخدناها.", arabeezy: "ma 3ajabitni esh-sha22a la2innha Dayye2a, w 3ashan hek ma akhadnaha.", en: "I did not like the apartment because it is cramped, so we did not take it." },
                { ar: "مع إنّه المطعم غالي، الأكل فيه بستاهل.", arabeezy: "ma3 inno el-maT3am ghali, el-akel feeh bistahal.", en: "Although the restaurant is expensive, the food is worth it." },
                { ar: "من ناحية الشغل مناسب، ومن ناحية تانية الطريق بعيد.", arabeezy: "min na7yet esh-shoghol mnasib, w min na7ye tanye eT-Tareeq b3eed.", en: "For work it is suitable, but on the other hand the journey is far." },
            ],
            commonMistakes: ["لأنه gives the cause; عشان هيك introduces the consequence.", "Prefer short spoken connectors over stacked formal written expressions."],
            exercises: [
                { prompt: "Complete with a result: الطريق مسكّر، ___ رح نتأخّر.", options: ["عشان هيك", "لأنه", "مع إنه", "من ناحية"], correct: "عشان هيك", explanation: "Being late is the result." },
                { prompt: "Complete with a reason: ما رحت عالشغل ___ كنت تعبان.", options: ["لأني", "عشان هيك", "بس", "مع إني"], correct: "لأني", explanation: "لأني introduces the speaker’s reason." },
                { prompt: "Which means ‘although it is far’?", options: ["مع إنّه بعيد", "عشان هيك بعيد", "لأنه بعيد", "بس من بعيد"], correct: "مع إنّه بعيد", explanation: "مع إنّه introduces an unexpected contrast." },
            ],
        },
        {
            title: "5. Negating opinions: ما, مش, and Gaza ما...ش",
            short: "Negate the verb or the description",
            description: "Use ما before a present verb: ما بوافق. Use مش before an adjective, participle, or comparison: مش مناسب، مش مقتنع، مش أحسن. Everyday Gaza speech also commonly wraps verbs with ما...ش: ما بوافقش، ما بعرفش.",
            table: {
                title: "Choosing the negative pattern",
                headers: ["What follows?", "Pattern", "Example"],
                rows: [
                    ["present verb", "ما + verb", "ما بوافق"],
                    ["Gaza verb form", "ما + verb + ش", "ما بوافقش"],
                    ["adjective", "مش + adjective", "مش مناسب"],
                    ["participle/state", "مش + participle", "مش مقتنعة"],
                    ["comparison", "مش + comparative", "مش أحسن من الأول"],
                ],
            },
            examples: [
                { ar: "أنا ما بوافق على هالاقتراح.", arabeezy: "ana ma bwafiq 3ala hal-iqtira7.", en: "I do not agree with this suggestion." },
                { ar: "بصراحة، أنا ما اقتنعتش بالسبب.", arabeezy: "biSara7a, ana ma iqtana3tish bis-sabab.", en: "Honestly, I was not convinced by the reason." },
                { ar: "الخيار التاني مش أرخص، بس أريح.", arabeezy: "el-khyar et-tani mish arkhaS, bas arya7.", en: "The second option is not cheaper, but it is more comfortable." },
            ],
            commonMistakes: ["Say ما بوافق / ما بوافقش with a verb, but مش موافق with the participle.", "The final ـش is a spoken Gaza feature; both ما بعرف and ما بعرفش are understandable."],
            exercises: [
                { prompt: "Choose the natural negation of a present verb: ‘I don’t agree.’", options: ["ما بوافق.", "مش بوافق.", "ما موافق.", "لا أنا بوافق."], correct: "ما بوافق.", explanation: "ما directly negates the present verb." },
                { prompt: "Complete: هادا الحلّ ___ مناسب إلنا.", options: ["مش", "ما", "ولا", "لأنه"], correct: "مش", explanation: "مناسب is an adjective, so it takes مش." },
                { prompt: "Which Gaza form also means ‘I don’t know’?", options: ["ما بعرفش", "مش بعرف", "بعرف ما", "لا بعرفش"], correct: "ما بعرفش", explanation: "Gaza speech commonly uses ما...ش around a verb." },
            ],
        },
    ],

    microChecks: {
        enabled: true,
        every: 5,
        items: [
            {
                id: "op_mc1",
                type: "complete",
                prompt: "Complete: In my opinion. ___، الشَّقَّة التَّالِتة أَحْسَن.",
                options: ["بِرَأْيِي", "قَدِّيش", "سَخَّان", "مَغْسَلَة"],
                correct: "بِرَأْيِي",
            },

            {
                "id": "op_mc2",
                "type": "reorder",
                "prompt": "Reorder the Arabic words to match: Honestly, the food is delicious but expensive.",
                "options": [
                    "غَالِي",
                    "بَس",
                    "الأَكْل",
                    "بِصَرَاحَة،",
                    "زَاكِي"
                ],
                "correct": [
                    "بِصَرَاحَة،",
                    "الأَكْل",
                    "زَاكِي",
                    "بَس",
                    "غَالِي"
                ]
            },
            {
                "id": "op_mc3",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: The fourth apartment might be better because of the view.\n___ الشَقَّة الرَّابِعة أَحْسَن عَشَان الإِطْلَالَة.",
                "options": [
                    "مُمْكِن",
                    "أَكيد",
                    "لَازِم",
                    "بَس"
                ],
                "correct": "مُمْكِن"
            },
            {
                "id": "op_mc4",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: It's not a rule that everything expensive has excellent quality.\n___ كُلّ إِشِي غَالِي يِكُون جَوْدْتُه مُمْتَازَة.",
                "options": [
                    "مِش شَرِط",
                    "بِضُورَة",
                    "عَ فِكْرَة",
                    "مِنْ جَديد"
                ],
                "correct": "مِش شَرِط"
            },
            {
                "id": "op_mc5",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: This one is better than the first-floor apartment.\nهَادِي ___ مِن شَقَّة الطَّابِق الأَوَّل.",
                "options": [
                    "أَحْسَن",
                    "أَكْبَر",
                    "أَرْخَص",
                    "أَبْعَد"
                ],
                "correct": "أَحْسَن"
            },
            {
                "id": "op_mc6",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: Depending on the rent and transportation.\n___ الإِيجَار وَالمَوَاصَلَات.",
                "options": [
                    "عَلَى حَسَب",
                    "قَبْل",
                    "بَعْد",
                    "مِنْ غَيْر"
                ],
                "correct": "عَلَى حَسَب"
            },
            {
                "id": "op_mc7",
                "type": "reorder",
                "prompt": "Reorder the Arabic words to match: The floor doesn't matter to me, but the rent matters.",
                "options": [
                    "الإِيجَار",
                    "بَس",
                    "بِفْرِق",
                    "مَا",
                    "مَعِي،",
                    "بِفْرِق",
                    "الطَّابِق"
                ],
                "correct": [
                    "الطَّابِق",
                    "مَا",
                    "بِفْرِق",
                    "مَعِي،",
                    "بَس",
                    "الإِيجَار",
                    "بِفْرِق"
                ]
            },
            {
  "id": "op_mc8",
  "type": "complete",
  "prompt": "Complete the Arabic sentence for: As for me, I prefer the place close to work.\n___، بَفَضِّل المَكَان القَرِيب مِن الشُّغُل.",
  "options": [
    "مِن نَاحْيِتِي",
    "مِن جِيد",
    "عَ كُلّ حَال",
    "بِالصُّدْفَة"
  ],
  "correct": "مِن نَاحْيِتِي"
},
{
  "id": "op_mc9",
  "type": "complete",
  "prompt": "Complete the Arabic sentence for: We want to compare between the rent, the view, and the transportation.\nبَدِّنَا ___ بَيْن الإِيجَار، الإِطْلَالَة، وَالمُوَاصَلَات.",
  "options": [
    "نِقَارِن",
    "نِشْتَرِي",
    "نِتْفَاوَض",
    "نِدْفَع"
  ],
  "correct": "نِقَارِن"
}
        ],
    },

    practice: {
        showRealUse: false,
        showWriting: false,
        separateExerciseTypes: true,
        quiz: [
            {
                id: "op_q1",
                questionAr: "Choose when to use: «شُو رَأْيَك؟»",
                optionsEn: ["ask someone's opinion", "ask for medicine", "ask for the weather"],
                correctIndex: 0,
            },
            {
                id: "op_q2",
                questionAr: "Choose the most polite way to disagree.",
                optionsEn: ["فَاهِم عَلَيْك، بَس...", "إنت غلط.", "ما بدي أسمع."],
                correctIndex: 0,
            },
            {
                id: "op_q3",
                questionAr: "Choose the English meaning of: «أَنَا بَفَضِّل»",
                optionsEn: ["I prefer", "I am sick", "I am late"],
                correctIndex: 0,
            },
            {
                id: "op_q4",
                questionAr: "Choose the English meaning of: «أَرْخَص مِن»",
                optionsEn: ["cheaper than", "quieter than", "more expensive than"],
                correctIndex: 0,
            },
            {
                id: "op_q5",
                questionAr: "Choose the English meaning of: «عَلَى حَسَب»",
                optionsEn: ["it depends on", "I agree", "not necessary"],
                correctIndex: 0,
            },
            {
                id: "op_q6",
                questionAr: "Choose how a male speaker says: “I am not convinced.”",
                optionsEn: ["أَنَا مِش مُقْتَنِع.", "أَنَا مِش مُقْتَنْعَة.", "مَعَك حَقّ."],
                correctIndex: 0,
            },
            {
                id: "op_q7",
                questionAr: "Choose the function of the connector «المُهِمّ».",
                optionsEn: ["summarize the main point", "ask for a bus", "say goodbye"],
                correctIndex: 0,
            },
            {
                id: "op_q8",
                questionAr: "Choose the English meaning of: «بَلَا زَعَل»",
                optionsEn: ["no offense", "good morning", "how much is it"],
                correctIndex: 0,
            },
            {
                id: "op_q9",
                questionAr: "Choose the English meaning of: «لَوْ بَدِّي أَخْتَار»",
                optionsEn: ["if I had to choose", "if I were sick", "if the water is off"],
                correctIndex: 0,
            },
        ],
        rolePlays: [
            "Compare two choices, state your opinion, agree or disagree politely, give two reasons, and make a final decision.",
        ],
        sections: [
            {
                title: "A - Recognition",
                matching: [
                    { ar: "بِرَأْيِي", arabeezy: "bira2yi", en: "in my opinion" },
                    { ar: "مَعَك حَقّ", arabeezy: "ma3ak 7a2", en: "you are right" },
                    { ar: "مِش مُقْتَنِع", arabeezy: "mish muqtane3", en: "not convinced" },
                    { ar: "أَحْسَن مِن", arabeezy: "a7san min", en: "better than" },
                    { ar: "عَلَى حَسَب", arabeezy: "3ala 7asab", en: "it depends on" },
                    { ar: "بَلَا زَعَل", arabeezy: "bala za3al", en: "no offense" },
                ],
                multipleChoice: [
                    { prompt: "Choose the polite disagreement.", options: ["فَاهِم عَلَيْك، بَس أَنَا مِش مُقْتَنِع.", "إِنْتَ غَلَط.", "مَا بَدِّي أَسْمَع."], correct: "فَاهِم عَلَيْك، بَس أَنَا مِش مُقْتَنِع." },
                    { prompt: "Choose the connector that introduces a reason.", options: ["لَأَنّ (la2ann)", "بَس (bas)", "مَع إِنُّه (ma3 innu)"], correct: "لَأَنّ (la2ann)" },
                ],
            },
            {
                title: "B - Opinion grammar practice",
                fillInTheBlank: [
                    { prompt: "بِرَأْيِي، البَاص أَرْخَص ___ التَّاكْسِي.", arabeezy: "bira2yi, el-bas arkhaS ___ et-taxi.", cueEn: "than", answer: "مِن" },
                    { prompt: "بَفَضِّل الشَّقَّة التَّالِتة ___ هَادْيَة.", arabeezy: "bafaDDil esh-shaqqa et-talteh ___ hadyeh.", cueEn: "because it (feminine)", answer: "لَأَنَّهَا" },
                    { prompt: "أَنَا مَعَك، ___ الإِيجَار غَالِي.", arabeezy: "ana ma3ak, ___ el-ijar ghali.", cueEn: "but", answer: "بَس" },
                    { prompt: "___ إِنُّه أَغْلَى، هُوَّ أَحْسَن.", arabeezy: "___ innu aghla, huwwe a7san.", cueEn: "although", answer: "مَع" },
                    { prompt: "___، الخِيَار التَّانِي أَنْسَب.", arabeezy: "___, el-khiyar et-tani ansab.", cueEn: "in my opinion", answer: "بِرَأْيِي" },
                    { prompt: "فَاهِم عَلَيْك، بَس أَنَا مِش ___.", arabeezy: "fahem 3aleik, bas ana mish ___.", cueEn: "convinced (male)", answer: "مُقْتَنِع" },
                    { prompt: "القَرَار ___ السِّعِر وَالمَوَاصَلَات.", arabeezy: "el-qarar ___ es-si3er wil-mwaSalat.", cueEn: "depends on", answer: "عَلَى حَسَب" },
                    { prompt: "لَو بَدِّي أَخْتَار، ___ الشَّقَّة الأَهْدَى.", arabeezy: "law baddi akhtar, ___ esh-shaqqa el-ahda.", cueEn: "I would take", answer: "بَاخُد" },
                    { prompt: "المُهِمّ ___ المَكَان يِكُون نْضِيف.", arabeezy: "el-muhimm ___ el-makan ykoon nDeef.", cueEn: "that", answer: "إِنُّه" },
                    { prompt: "Review future: بُكْرَا ___ نِقَارِن بَيْنَهُم.", arabeezy: "bukra ___ nqarin beinom.", cueEn: "will", answer: "رَاح" },
                    { prompt: "Review housing: فِي رُطُوبَة ___ الخِزَانَة.", arabeezy: "fi rToobeh ___ el-khizaneh.", cueEn: "behind", answer: "وَرَا" },
                    { prompt: "Review health: رَاسِي بِيْجَع___.", arabeezy: "rasi biyja3___.", cueEn: "me", answer: "نِي" },
                ],
                correctTheMistake: [
                    { prompt: "Correct: هَادِي الشَّقَّة أَحْسَن عَلَى الأُولَى.", arabeezy: "hadi esh-shaqqa a7san 3ala el-oola.", answer: "هَادِي الشَّقَّة أَحْسَن مِن الأُولَى." },
                    { prompt: "Correct: أَنَا مِش مُقْتَنِعَة. (male speaker)", arabeezy: "ana mish muqtan3a.", answer: "أَنَا مِش مُقْتَنِع." },
                    { prompt: "Correct: هُوَّ بَفَضِّل الشَّقَّة لَأَنُّه هَادْيَة.", arabeezy: "huwwe bafaDDil esh-shaqqa la2annu hadyeh.", answer: "هُوَّ بَفَضِّل الشَّقَّة لَأَنَّهَا هَادْيَة." },
                    { prompt: "Review past: اِمْبَارِح رَاح أَكُون مَعَك.", arabeezy: "imbari7 ra7 akoon ma3ak.", answer: "اِمْبَارِح كُنْت مَعَك." },
                    { prompt: "Correct the connector: بَفَضِّل الشَّقَّة لَأَنُّه هَادْيَة.", arabeezy: "bafaDDil esh-shaqqa la2annu hadyeh.", answer: "بَفَضِّل الشَّقَّة لَأَنَّهَا هَادْيَة." },
                    { prompt: "Correct the comparison: التَّاكْسِي أَغْلَى عَن البَاص.", arabeezy: "et-taxi aghla 3an el-bas.", answer: "التَّاكْسِي أَغْلَى مِن البَاص." },
                ],
                reorderSentences: [
                    { prompt: "Build: In my opinion, the bus is cheaper.", arabeezy: "bira2yi el-bas arkhaS.", words: [ "البَاص","بِرَأْيِي،", "أَرْخَص."], answer: "بِرَأْيِي، البَاص أَرْخَص." },
                    { prompt: "Build: I understand you, but I disagree.", arabeezy: "fahem 3aleik, bas ana mish ma3ak.", words: ["بَس","فَاهِم"," عَلَيْك،",  "أَنَا مِش مَعَك."], answer: "فَاهِم عَلَيْك، بَس أَنَا مِش مَعَك." },
                    { prompt: "Build: It depends on the price.", arabeezy: "3ala 7asab es-si3er.", words: ["حَسَب","عَلَى ", "السِّعِر."], answer: "عَلَى حَسَب السِّعِر." },
                    { prompt: "Review future: Tomorrow we will decide.", arabeezy: "bukra ra7 nqarrir.", words: ["رَاح","بُكْرَا",  "نِقَرِّر."], answer: "بُكْرَا رَاح نِقَرِّر." },
                    { prompt: "Build: Although it is more expensive, it is better.", arabeezy: "ma3 innu aghla, huwwe a7san.", words: ["أَغْلَى،","مَع إِنُّه",  "هُوَّ أَحْسَن."], answer: "مَع إِنُّه أَغْلَى، هُوَّ أَحْسَن." },
                    { prompt: "Review housing: There is dampness behind the closet.", arabeezy: "fi rToobeh wara el-khizaneh.", words: ["وَرَا","فِي رُطُوبَة",  "الخِزَانَة."], answer: "فِي رُطُوبَة وَرَا الخِزَانَة." },
                ],
            },
        ],
        translation: [
            { id: "op_t1", type: "enToAr", textEn: "What do you think of the apartment?", textAr: "شُو رَأْيَك/رَأْيِك فِي الشَّقَّة؟" },
            { id: "op_t2", type: "arToEn", textEn: "In my opinion, the third floor is quieter.", textAr: "بِرَأْيِي الطَّابِق التَّالِت أَهْدَى." },
            { id: "op_t3", type: "enToAr", textEn: "Honestly, I am not convinced by the first apartment.", textAr: "بِصَرَاحَة، أَنَا مِش مُقْتَنِع/مُقْتَنْعَة بِالشَّقَّة الأُولَى." },
            { id: "op_t4", type: "arToEn", textEn: "You're right, but the rent is expensive.", textAr: "مَعَك/مَعِك حَقّ، بَس الإِيجَار غَالِي." },
            { id: "op_t5", type: "enToAr", textEn: "I prefer a quieter apartment even if it is more expensive.", textAr: "أَنَا بَفَضِّل شَقَّة أَهْدَى حَتَّى لَوْ أَغْلَى." },
            { id: "op_t6", type: "arToEn", textEn: "It depends on the rent and transportation.", textAr: "عَلَى حَسَب الإِيجَار وَالمَوَاصَلَات." },
            { id: "op_t7", type: "enToAr", textEn: "This apartment is better than the first one.", textAr: "هَادِي الشَّقَّة أَحْسَن مِن الأُولَى." },
            { id: "op_t8", type: "arToEn", textEn: "The bus is cheaper than the taxi.", textAr: "البَاص أَرْخَص مِن التَّاكْسِي." },
            { id: "op_t9", type: "enToAr", textEn: "I understand you, but I am not convinced.", textAr: "فَاهِم عَلَيْك، بَس أَنَا مِش مُقْتَنِع/مُقْتَنْعَة." },
            { id: "op_t10", type: "arToEn", textEn: "No offense, but I do not support paying a large deposit.", textAr: "بَلَا زَعَل، بَس أَنَا مِش مَع نِدْفَع تَأْمِين كْتِير." },
            { id: "op_t11", type: "enToAr", textEn: "The important thing is that the place is clean and quiet.", textAr: "المُهِمّ إِنُّه المَكَان يِكُون نْضِيف وَهَادِي." },
            { id: "op_t12", type: "arToEn", textEn: "Let's compare the rent, view, and internet.", textAr: "خَلِّينَا نِقَارِن بَيْن الإِيجَار، الإِطْلَالَة، وَالإِنْتَرْنِت." },
            { id: "op_t13", type: "enToAr", textEn: "If I had to choose, I would take the third-floor apartment.", textAr: "لَوْ بَدِّي أَخْتَار، بَاخُد شَقَّة الطَّابِق التَّالِت." },
            { id: "op_t14", type: "arToEn", textEn: "I'm not in a rush; the decision can wait until tomorrow.", textAr: "أَنَا مِش مُسْتَعْجِل/مُسْتَعْجِلَة؛ القَرَار لِبُكْرَا." },
            { id: "op_t15", type: "enToAr", textEn: "Everyone has an opinion, and that's okay.", textAr: "كُلّ وَاحِد إِلُه رَأْي، وَهَادَا عَادِي." },
        ],
    },

    homework: {
        instructions:
            `Write and record a 90-second opinion conversation in Gaza Palestinian Arabic. Choose one topic: apartments, food, transport, studying, weather, or weekend plans. Give your opinion, compare two options, agree or disagree politely, and explain your final decision. Reuse at least 10 words from this unit and 6 old words from previous units.

Translate these sentences into Gaza Palestinian Arabic:
1. What do you think of the apartment?
2. In my opinion, the third floor is quieter.
3. Honestly, I am not convinced by the first apartment.
4. You're right, but the rent is expensive.
5. I prefer a quieter apartment even if it is more expensive.
6. It depends on the rent and transportation.
7. This apartment is better than the first one.
8. The bus is cheaper than the taxi.
9. I understand you, but I am not convinced.
10. No offense, but I do not support paying a large deposit.
11. The important thing is that the place is clean and quiet.
12. Let's compare the rent, view, and internet.
13. If I had to choose, I would take the third-floor apartment.
14. I'm not in a rush; the decision can wait until tomorrow.
15. Everyone has an opinion, and that's okay.`,
    },

    teacherNotes: {
        warmup: [
            "Start by asking: شو رأيك في الشقة الأخيرة؟ Let the student answer with one sentence only.",
            "Recycle older topics intentionally: food, apartment, transport, weather, study, and health.",
            "This unit's hidden focus is comparison, polite disagreement, and decision-making.",
        ],
        vocabularySteps: [
            "Teach opinion chunks as conversation tools, not definitions: برأيي، بصراحة، أنا شايف، بفكر، على حسب.",
            "Pair agreement/disagreement chunks: معك حق / فاهم عليك بس / بلا زعل.",
            "Use comparison drills with older vocabulary: الباص أرخص من التكسي، الطابق التالت أهدى، الإنترنت أسرع.",
        ],
        dialogueSteps: [
            "Act the dialogue as a real group decision after viewing apartments.",
            "Ask the dialogue questions orally and push full opinion answers.",
            "Make the student choose a different apartment and defend their choice.",
        ],
        practiceTips: [
            "Do not accept one-word answers; require opinion + reason.",
            "Use soft disagreement role-play so the student learns tone.",
            "End with a 60-second decision speech: لو بدي أختار...",
        ],
        wrapup: [
            "Student gives one opinion, one agreement, one polite disagreement.",
            "Student compares two options using at least three comparison words.",
            "Student states a final decision and reason.",
        ],
        myNotes: "",
    },
};
