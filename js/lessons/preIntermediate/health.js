import { LESSON_ID_HEALTH } from '../../constants.js';

export const lessonId = LESSON_ID_HEALTH;

export const lesson = {
    meta: {
        level: "Pre-Intermediate",
        unit: "Health & Emergencies",
        lessonTitle: "Unit 9 - Health, Pharmacy & Emergencies in Gaza Palestinian Arabic",
        contentVersion: 2026082001,
    },

    overview: {
        title: "Unit 9 - Health, Pharmacy & Emergencies",
        description:
            "Students learn how to talk about feeling sick, describe common symptoms, ask for help at a pharmacy or clinic, and say clear emergency phrases in Gaza Palestinian Arabic.",
        goals: [
            "Say what hurts and describe simple symptoms.",
            "Ask for medicine, a doctor, a pharmacy, or a clinic.",
            "Give basic advice like rest, light food, medicine, and follow-up if symptoms continue.",
            "Use clear emergency language when something is serious.",
            "Recycle previous units: greetings, family, routine, food, weather, transport, shopping, time, and politeness.",
        ],
        speakingOutcomes: [
            "By the end of this unit, the student can explain a simple health problem in 60-90 seconds.",
            "The student can speak to a pharmacist or clinic receptionist.",
            "The student can describe pain, fever, cough, dizziness, and ask for urgent help.",
        ],
    },

    vocabulary: {
        core: [
            {
                id: "se7a",
                ar: "صِحّة",
                en: "health",
                enArabeezy: "ṣiḥḥa / se77a",
                hint:
                    "General word for health. صِحّة كْوَيْسِة = good health. Also used in toast: صَحّة! = cheers / to your health.",
                "exampleAr": "الصِّحَّة أَهَمّ إِشْي، عَشَان هَيْك لَمَّا أَتْعَب بَرُوح عَالدُّكْتُور وَمَا بَسْتَنَّى كْتِير.",
    "exampleArabeezy": "el-ṣiḥḥa ahamm ishy, ‘ashān heyk lammā at‘ab barūḥ ‘al-duktūr w mā bastannā ktīr.",
    "exampleEn": "Health is the most important thing, that's why when I get tired I go to the doctor and don't wait long."
            },
            {
                id: "salamtak",
                ar: "سَلَامْتَك",
                en: "Get well soon / I hope you feel better",
                enArabeezy: "salamtak",
                hint: "Male: سَلَامْتَك. Female: سَلَامْتِك. Plural: سَلَامِتْكُم. Used whenever someone is sick or hurt.",
                "exampleAr": "سَلَامْتَك، سَمِعْت إِنَّك كُنْت تَعْبَان اِمْبَارِح. هَلْقِيت أَحْسَن؟",
    "exampleArabeezy": "salāmtak, sami‘t innak kunt ta‘bān imbāriḥ. halqīt aḥsan?",
    "exampleEn": "Safety/well-being to you, I heard you were tired yesterday. Are you feeling better now?"
            },
            {
                id: "sho_malak",
                ar: "شُو مَالَك؟",
                en: "What's wrong?",
                enArabeezy: "sho malak?",
                hint: "To a woman: شُو مَالِك؟ To a group: شُو مَالْكُم؟",
                "exampleAr": "شُو مَالَك؟ وَجْهَك تَعْبَان مِن الصُّبْح.",
    "exampleArabeezy": "shu mālak? wajhak ta‘bān min el-ṣubḥ.",
    "exampleEn": "What's wrong with you? Your face looks tired since morning."
            },
           
            {
                id: "ba7es_7ali",
                ar: "بَحِسّ حَالِي",
                en: "I feel",
                enArabeezy: "ba7is 7ali",
                hint: "Use with feelings/symptoms: بَحِسّ حَالِي تَعْبَان / أَحْسَن / دَايِخ.",
                exampleAr: "اليَوم بَحِسّ حَالِي أَحْسَن مِن اِمْبَارِح.",
                exampleArabeezy: "el-yom ba7is 7ali a7san min embare7.",
                exampleEn: "Today I feel better than yesterday.",
            },
            {
                id: "waja3",
                ar: "وَجَع",
                en: "pain / ache",
                enArabeezy: "waja3",
                hint: "General pain word: وَجَع رَاس، وَجَع بَطِن، وَجَع ضَهْر.",
                "exampleAr": "عِنْدِي وَجَع بِبَطْنِي مِن بَعْد الغَدَا، وَمَا عَرَفْت أَنَام مِنُّه.",
    "exampleArabeezy": "‘indi waj_a bibatni min ba‘d el-ghadā, w mā ‘araft anām minnuh.",
    "exampleEn": "I have a pain in my stomach since after lunch, and I couldn't sleep because of it."
            },
            {
                id: "biyja3ni_body_parts",
                ar: "رَاسِي / بَطْنِي / ضَهْرِي بِيْجَعْنِي",
                en: "My head / stomach / back hurts",
                enArabeezy: "rasi / baTni / Dahri biyja3ni",
                hint: "Pattern: [Body Part + my] + بِيْجَعْنِي (biyja3ni). Note: If the body part is feminine like إِيد (hand) or رِجِل (leg), use بِتُوجَعْنِي (bitooja3ni) instead.",
                exampleAr: "رَاسِي بِيْجَعْنِي مِن الصُّبْح.",
                exampleArabeezy: "rasi biyja3ni min eS-Sub7",
                exampleEn: "My head has been hurting since morning."
            },

            {
                id: "7arara",
                ar: "حَرارَة / سُخونَة",
                en: "fever",
                enArabeezy: "ḥarāra / sukhūna",
                hint: "High temperature. عِنْدي حَرارَة = I have a fever.",
                "exampleAr": "هِيَّ عِنْدَهَا حَرَارَة مِن اللَّيْل، وَجِسْمَهَا سُخْن كْتِير.",
    "exampleArabeezy": "hiyya ‘indahā ḥarāra min el-layl, w jismahā sukhn ktīr.",
    "exampleEn": "She has had a fever since night, and her body is very warm/hot."
            },
             {
                id: "ku7a",
                ar: "كحَّة",
                en: "cough",
                enArabeezy: "ku77a",
                hint: "Verb: بَكُحّ = I cough.",
                "exampleAr": "عِنْدَهَا كحَّة مِن يَوْمَيْن، وَاللَّيْل بِتْزِيد عَلَيْهَا.",
    "exampleArabeezy": "‘indahā kuḥḥa min yawmayn, wel-layl bitzīd ‘alaihā.",
    "exampleEn": "She has had a cough for two days, and at night it gets worse for her."
            },
            {
                id: "bard_health",
                ar: "بَرْد / نَزْلَة بَرْد",
                en: "a cold",
                enArabeezy: "bard / nazlet bard",
                hint: "Not weather here. It means catching a cold.",
                "exampleAr": "أَبُوي مَعُه نَزْلَة بَرْد، فَمِن مُبَارْح وَهُوَ بيسْعَل .",
    "exampleArabeezy": "abūy ma‘uh nazlat bard, fa-min mubāriḥ w huwwa bis‘al ",
    "exampleEn": "My dad has a cold, so since yesterday he has been coughing "
            },
            {
                id: "rash7",
                ar: "رَشْح",
                en: "runny nose / cold symptoms",
                enArabeezy: "rash7",
                hint: "Common with cold. Also: أَنْفِي مَسْكِر = my nose is blocked.",
                "exampleAr": "عِنْدِي رَشْح وَأَنْفِي مَسَكَّر، فَمَا بَقْدَر أَنَام مْنِيح.",
    "exampleArabeezy": "‘indi rshaḥ w anfi masakkar, fa-mā baqdar anām mniḥ.",
    "exampleEn": "I have a runny nose and my nose is stuffed, so I can't sleep well."
            },
            {
                id: "mSaddi3",
                ar: "مْصَدِّع",
                en: "Having a headache",
                enArabeezy: "mSaddi3",
                hint: "An active participle used as an adjective. Female: مْصَدْعَة.",
                "exampleAr": "أَنَا مْصَدِّع اليَوْم، فَمَا بَدِّي أَطْلَع مَعَكُمْ اللَّيْلَة.",
    "exampleArabeezy": "ana mṣaddi‘ el-yawm, fa-mā baddi aṭla‘ ma‘akum el-layle.",
    "exampleEn": "I have a headache today, so I don't want to go out with you tonight."
            },
           
            {
                id: "dayekh",
                ar: "دَايِخ",
                en: "Dizzy",
                enArabeezy: "dayekh",
                hint: "Female: دَايْخَة. Noun is دُوخَة (dizziness).",
                "exampleAr": "هُوَ دَايِخ مِن الصُّبْح، فَخَلِّيه يِقْعُد شُوَيّ وَمَا يِطْلَع لِحَالُه.",
    "exampleArabeezy": "huwwa dāyikh min el-ṣubḥ, fa-khallih yiq‘ud shwayy w mā yiṭla‘ liḥāluh.",
    "exampleEn": "He has been dizzy since morning, so let him sit down a bit and not go out by himself."
            },
            {
                id: "magheS",
                ar: "مَغِص",
                en: "Stomach ache / cramps",
                enArabeezy: "magheS",
                hint: "Used for stomach cramps or abdominal pain.",
                "exampleAr": "أُخْتِي عِنْدَهَا مَغِص مِن اِمْبَارِح، وَقَالَتْ إِنَّهُ بَطْنَهَا بِيْجَعْهَا بَعْد الأَكْل.",
    "exampleArabeezy": "ukhti ‘indahā maghiṣ min imbāriḥ, w qālat innahu baṭnahā byij‘ahā ba‘d el-akl.",
    "exampleEn": "My sister has had cramps since yesterday, and she said her stomach hurts her after eating."
            },
            {
                id: "dawa",
                ar: "دَوَا",
                en: "medicine",
                enArabeezy: "dawa",
                hint: "General word. Plural: أَدْوِيَة.",
                "exampleAr": "بَدِّي أَرُوح عَالصَّيْدَلِيَّة أَجِيب دَوَا لِلكحَّة.",
    "exampleArabeezy": "baddi arūḥ ‘al-ṣaydaliyya ajīb dawā lil-kuḥḥa.",
    "exampleEn": "I want to go to the pharmacy to get medicine for the cough."
            },
            {
                id: "7abbe",
                ar: "حَبَّة",
                en: "pill / tablet",
                enArabeezy: "7abbe",
                hint: "One pill. Plural: حَبَّات.",
                "exampleAr": "الصَّيْدَلَانِي قَالَ لَهُ ياخُد حَبَّة بَعْد الأَكْل، وَمَا يِزِيد عَن الجُرْعَة المَكْتُوبَة.",
    "exampleArabeezy": "el-ṣaydalāni qāl lahu yikhud ḥabba ba‘d el-akl, w mā yizīd ‘an el-jur‘a el-maktūbe.",
    "exampleEn": "The pharmacist told him to take a pill after eating, and not to exceed the written dosage."
            },
            {
                id: "musakkin",
                ar: "مُسَكِّن",
                en: "painkiller",
                enArabeezy: "musakkin",
                hint: "Medicine to reduce pain.",
                "exampleAr": "عِنْدِي وَجَع رَاس كْتِير، بَسْ بَدِّي أَسْأَل الصَّيْدَلَانِي إِذَا فِي مُسَكِّن مُنَاسِب.",
    "exampleArabeezy": "‘indi waj_a rās ktīr, bas baddi as'al el-ṣaydalāni iza fi musakkin munāsib.",
    "exampleEn": "I have a lot of headache, but I want to ask the pharmacist if there is a suitable painkiller."
            },
            {
                id: "il7aqooni",
                ar: "إِلْحَقُونِي",
                en: "Help me! (Urgent)",
                enArabeezy: "il7aqooni",
                hint: "Used when in physical danger or medical distress. Literally means 'catch up to me'.",
                exampleAr: "إِلْحَقُونِي، الزَّلَمَة وَقَع عَالْأَرْض!",
                exampleArabeezy: "il7aqooni, ez-zalameh waqa3 3al-arD!",
                exampleEn: "Help! The man fell on the ground!"
            },
            {
                id: "doktor",
                ar: "دُكْتُور / دُكْتُورَة",
                en: "doctor",
                enArabeezy: "doktor / doktora",
                hint: "Male: دُكْتُور. Female: دُكْتُورَة.",
                "exampleAr": "أُخْتِي رَاحِت عَالدُّكْتُورَة لَمَّا ضَلَّت الكُحَّة مَعَهَا أَكْتَر مِن أُسْبُوع.",
    "exampleArabeezy": "ukhti rāḥit ‘al-duktūra lammā ḍallat el-kuḥḥa ma‘ahā aktar min usbū‘.",
    "exampleEn": "My sister went to the female doctor when the cough stayed with her for more than a week."
            },
            {
                id: "maw3id",
                ar: "مَوْعِد",
                en: "appointment",
                enArabeezy: "maw3id",
                hint: "Medical appointment or general appointment.",
               "exampleAr": "عِنْدِي مَوْعِد عِنْد الدُّكْتُور السَّاعَة خَمْسَة، فَلَازِم أَطْلَع مِن البَيْت بَدْرِي.",
    "exampleArabeezy": "‘indi maw‘id ‘ind el-duktūr el-sā‘a khamse, fa-lāzim aṭla‘ min el-bayt badri.",
    "exampleEn": "I have an appointment at the doctor's at five o'clock, so I must leave the house early."
            },
            {
                id: "saydaliyye",
                ar: "صَيْدَلِيَّة",
                en: "pharmacy",
                enArabeezy: "Saydaliyye",
                hint: "Place to buy medicine. Plural: صَيْدَلِيَّات.",
               "exampleAr": "فِي صَيْدَلِيَّة قَرِيبَة مِن البَيْت، بِنِقْدَر نِرُوح عَلَيْهَا مَشْي.",
    "exampleArabeezy": "fi ṣaydaliyya qarīibe min el-bayt, biniqdar nirūḥ ‘alaihā mashy.",
    "exampleEn": "There's a pharmacy close to the house, we can walk to it."
            },
            {
                id: "3iyade",
                ar: "عِيَادَة",
                en: "clinic",
                enArabeezy: "3iyade",
                hint: "Smaller than hospital. Doctor's clinic.",
                "exampleAr": "عِنْدَهَا مَوْعِد بِالعِيَادَة بُكْرَا، عَشَان الدُّكْتُور يِشُوف إِذَا الحَرَارَة نِزْلَت.",
    "exampleArabeezy": "‘indahā maw‘id bil-‘iyāda bukrā, ‘ashān el-duktūr yishūf iza el-ḥarāra nizlat.",
    "exampleEn": "She has an appointment at the clinic tomorrow, so the doctor can see if the fever has gone down."
            },
            
            {
                id: "ba7taj",
                ar: "بَحْتَاج",
                en: "I need",
                enArabeezy: "ba7taj",
                hint: "Useful chunk: بَحْتَاج دَوَا / دُكْتُور / رَاحَة.",
                "exampleAr": "بَحْتَاج أَرْتَاح اليَوْم، لِأَنِّي مِن مُبَارْح وَأَنَا تَعْبَان.",
    "exampleArabeezy": "baḥtāj artāḥ el-yawm, li'anni min mubāriḥ w ana ta‘bān.",
    "exampleEn": "I need to rest today, because since yesterday I've been tired."
            },
            {
                id: "ra7a",
                ar: "رَاحَة",
                en: "rest",
                enArabeezy: "ra7a",
                hint: "Common advice: خُد رَاحَة / لَازِم تِرْتَاح.",
                "exampleAr": "الدُّكْتُور قَالَ لَهَا تِشْرَب مَيّ كْتِير وَتَاخُد رَاحَة لِكَمْ يَوْم.",
    "exampleArabeezy": "el-duktūr qāl lahā tishrab mayy ktīr w tākhud rāḥa likam yawm.",
    "exampleEn": "The doctor told her to drink a lot of water and take rest for a few days."
            },
            {
                id: "marten",
                ar: "مَرَّتَيْن",
                en: "twice",
                enArabeezy: "marten",
                hint: "Frequency. Once = مَرَّة. Three times = تَلَات مَرَّات.",
                "exampleAr": "الدُّكْتُور قَالَ إِنَّهُ لَازِم يِقِيس الضَّغِط مَرَّتَيْن اليَوْم وَيِسَجِّل القِيَاس.",
    "exampleArabeezy": "el-duktūr qāl innahu lāzim yiqīs el-daghiṭ marratayn el-yawm w yisajjil el-qiyās.",
    "exampleEn": "The doctor said that he must measure the blood pressure twice today and record the reading."
            },
             {
                id: "7adeth",
                ar: "حَادِث",
                en: "accident",
                enArabeezy: "7adeth",
                hint: "Usually a traffic accident, but can be any accident.",
                "exampleAr": "صَار حَادِث عَالشَّارِع الرَّئِيسِي، فَصَار فِي زَحْمَة كْتِير.",
    "exampleArabeezy": "ṣār ḥādith ‘al-shāri‘ el-raʾīsi, fa-ṣār fi zaḥma ktīr.",
    "exampleEn": "An accident happened on the main street, so there became a lot of traffic congestion."
            },
            {
                id: "nazeef",
                ar: "نَزِيف",
                en: "bleeding",
                enArabeezy: "nazeef",
                hint: "Use for active bleeding. Verb: بِنْزِف.",
                exampleAr: "صَار فِي نَزِيف بَعْد الضَّرْبَة.",
                exampleArabeezy: "Sar fi nazeef ba3d eD-Darba.",
                exampleEn: "There was bleeding after the hit."
            },
            {
                id: "mustashfa",
                ar: "مُسْتَشْفَى",
                en: "hospital",
                enArabeezy: "mustashfa",
                hint: "For serious cases and emergencies.",
                "exampleAr": "لَمَّا صار الحَادِث، أَخَدُوا الزلمة عَالمُسْتَشْفَى عَشَانْ يِفْحَصُوه.",
    "exampleArabeezy": "lammā ṣār el-ḥādith, akhadū el-rajul ‘al-mustashfā ‘ashān yifḥaṣūh.",
    "exampleEn": "When the accident happened, they took the man to the hospital so they could examine him."
            },
            {
                id: "is3af",
                ar: "إِسْعَاف",
                en: "ambulance / emergency aid",
                enArabeezy: "is3af",
                hint: "Call an ambulance = اِتَّصِل بِالإِسْعَاف.",
                "exampleAr": "لَمَّا صَار الحَادِث، حَدّ اتَّصَل بِالإِسْعَاف وَطَلَب مِنْهُمْ يِجُوا بِسُرْعَة.",
    "exampleArabeezy": "lammā ṣār el-ḥādith, ḥadd itṣal bil-is‘āf w ṭalab minhum yijū bisur‘a.",
    "exampleEn": "When the accident happened, someone called the ambulance and asked them to come quickly."
            },
            {
                id: "qism_taware2",
                ar: "قِسْم طَوارِئ",
                en: "emergency room",
                enArabeezy: "ʾism ṭawāreʾ / qism tawāre2",
                hint: "Emergency department in a hospital.",
                "exampleAr": "وَدُّوه عَـقِسْم الطَّوَارِئ لَمَّا وَصَل عَالمُسْتَشْفَى، لِأَنَّه كَان بينزف.",
    "exampleArabeezy": "waddūh ‘a-ʿism el-ṭawāri’ lammā waṣal ‘al-mustashfā, li’annah kān biyinzif.",
    "exampleEn": "They took him to the emergency department when he arrived at the hospital, because he was bleeding."
            },
            {
                id: "a3rad",
                ar: "أَعْرَاض",
                en: "symptoms",
                enArabeezy: "a3raD",
                hint: "Signs of sickness: fever, cough, dizziness, pain.",
                "exampleAr": "قَبْل مَا أَرُوح عَالدُّكْتُور، كَتَبْت كُل الأَعْرَاض اللِّي عِنْدِي مِن مُبَارْح.",
    "exampleArabeezy": "qabl mā arūḥ ‘al-duktūr, katabt kull el-a‘rāḍ elli ‘indi min mubāriḥ.",
    "exampleEn": "Before I go to the doctor, I wrote down all the symptoms I've had since yesterday."
            },
            
            {
                id: "mighma_3aleih",
                ar: "مِغْمَى عَلَيْه",
                en: "unconscious / fainted",
                enArabeezy: "mighma 3aleih",
                hint: "For a woman: مِغْمَى عَلَيْهَا.",
                "exampleAr": "لَمَّا وَصَلْنَا، كَان هُوَّ مِغْمَى عَلَيْه، فَطَلَبْنَا الإِسْعَاف فَوْرًا.",
    "exampleArabeezy": "lammā waṣalnā, kān huwwa mighmā ‘alayh, fa-ṭalabnā el-is‘āf fawran.",
    "exampleEn": "When we arrived, he was fainted/unconscious, so we requested the ambulance immediately."
            },
            {
                id: "moraja3a",
                ar: "مُرَاجَعَة",
                en: "follow-up visit",
                enArabeezy: "moraja3a",
                hint: "Medical follow-up after seeing a doctor.",
                "exampleAr": "الدُّكْتُور طَلَب مِنْهَا تِرْجَع بَعْد أُسْبُوع عَشَان المُرَاجَعَة.",
    "exampleArabeezy": "el-duktūr ṭalab minhā tirja‘ ba‘d usbū‘ ‘ashān el-murāja‘a.",
    "exampleEn": "The doctor asked her to return after a week for the follow-up checkup."
            },
            {
                id: "jur7",
                ar: "جُرْح",
                en: "wound / cut",
                enArabeezy: "jur7",
                hint: "Plural: جُرُوح. Used for cuts and injuries.",
                "exampleAr": "الوَلَد عِنْدُه جُرْح صْغِير بِإِيدُه، فَغَسَلْنَاه وَغَطَّيْنَاه.",
    "exampleArabeezy": "el-walad ‘induh jurḥ ṣghīr bi-īduh, fa-ghasalnāh w ghaṭṭaynāh.",
    "exampleEn": "The boy has a small wound on his hand, so we washed it and covered it."
            },
            {
                id: "ibra",
                ar: "إِبْرَة",
                en: "injection / shot",
                enArabeezy: "ibra",
                hint: "A medical shot. Plural: إِبَر.",
               "exampleAr": "هِيَّ عِنْدَهَا مَوْعِد بُكْرَا عَشَان تَاخُد إِبْرَة عِنْد الدُّكْتُور.",
    "exampleArabeezy": "hiyya ‘indahā maw‘id bukrā ‘ashān tākhud ibra ‘ind el-duktūr.",
    "exampleEn": "She has an appointment tomorrow to take an injection/needle at the doctor's."    },
           
            {
                id: "mumarred",
                ar: "مُمَرِّض / مُمَرِّضَة",
                en: "nurse",
                enArabeezy: "mumarrid / mumarrDa",
                hint: "Male: مُمَرِّض. Female: مُمَرِّضَة.",
                "exampleAr": "المُمَرِّضَة سَأَلَتْه عَنْ أَعْرَاضِهِ وَقَاسَتْ لَهُ الحَرَارَة.",
    "exampleArabeezy": "el-mumarrida sa'altahu ‘an a‘rāḍihi w qāsat lahu el-ḥarāra.",
    "exampleEn": "The nurse asked him about his symptoms and measured his temperature."
            },
            {
                id: "ta2meen_se77i",
                ar: "تَأْمِين صِحِّي",
                en: "health insurance",
                enArabeezy: "ta2meen Se77i",
                hint: "Insurance that covers clinic/hospital costs.",
               "exampleAr": "هُوَ عِنْدُه تَأْمِين صِحِّي، فَقَبْل مَا يِرُوح عَالعِيَادَة سَأَل إِذَا التَّأْمِين بِغَطِّي الفَحْص.",
    "exampleArabeezy": "huwwa ‘induh taʾmīn ṣiḥḥi, fa-qabl mā yirūḥ ‘al-‘iyāda sa'al iza el-taʾmīn ighaṭṭi el-faḥṣ.",
    "exampleEn": "He has health insurance, so before going to the clinic he asked if the insurance covers the examination."
            },
            {
                id: "ma_ba2dar_atnaffas",
                ar: "مَا بَقْدَر أَتْنَفَّس مْنِيح",
                en: "I cannot breathe well",
                enArabeezy: "ma ba2dar atnaffas mnee7",
                hint: "Emergency sentence. Use clearly and directly.",
                "exampleAr": "مَا بَقْدَر أَتْنَفَّس مْنِيح، وَصَدْرِي بِيْوْجَعْنِي. إِلْحَقُونِي وَاتَّصِلُوا بِالإِسْعَاف.",
    "exampleArabeezy": "mā baqdar atnaffas mniḥ, w ṣadri byiwj‘anni. ilḥaqūni w itṣallū bil-is‘āf.",
    "exampleEn": "I can't breathe well, and my chest hurts me. Help me and call the ambulance."
            },
            {
                id: "7asaseyye",
                ar: "حَسَاسِيَّة",
                en: "allergy",
                enArabeezy: "7asaseyye",
                hint: "Allergy to food, medicine, dust, etc.",
                "exampleAr": "أُخْتِي عِنْدَهَا حَسَاسِيَّة مِن بَعْض الأَدْوِيَة، عَشَان هَيْك دَايْمًا بتحكي لدُّكْتُور قَبْل مَا تَاخُد اي دَوَا.",
    "exampleArabeezy": "ukhti ‘indahā ḥasāsiyya min ba‘D el-adwiyye, ‘ashān hayk dāyman btiḥki li-duktūr qabl mā tākhud ay dawā.",
    "exampleEn": "My sister has an allergy to some medications, that's why she always informs the doctor before taking medicine."
            },
            {
                id: "sukkar",
                ar: "سُكَّر",
                en: "diabetes / sugar level",
                enArabeezy: "sukkar",
                hint: "Useful recognition word. In speech: مَعُه سُكَّر = he has diabetes.",
               "exampleAr": "جَدِّي مَعُه سُكَّر، فَبِقِيس مُسْتَوَى السُّكَّر عِنْدُه بِشَكْل مُنْتَظَم.",
    "exampleArabeezy": "jaddi ma‘uh sukkar, fa-biqīs mustawā el-sukkar ‘induh bishakl muntazam.",
    "exampleEn": "My grandfather has diabetes, so he measures his sugar level regularly."
            },
            {
                id: "daghet",
                ar: "ضَغِط",
                en: "blood pressure",
                enArabeezy: "Daghet",
                hint: "High blood pressure = الضَّغِط عَالِي. Low = الضَّغِط نَازِل.",
                "exampleAr": "أُمِّي عِنْدَهَا ضَغِط، وَلَمَّا بْتِحِسّ بِدُوخَة بْتِقِيسُه فِي البَيْت.",
    "exampleArabeezy": "ummi ‘indahā daghiṭ, w lammā btihiss bidūkha btiqīsuh fi el-bayt.",
    "exampleEn": "My mother has blood pressure, and when she feels dizzy she measures it at home."
            },

        ],
    },

    dialogue: {
        title: "Health, Pharmacy & Emergencies - Feeling Sick Before Class",
        setting: "Noor feels sick before class. Samer helps her go to the clinic, speak with the doctor, buy medicine from the pharmacy, and go home safely.",
        lines: [
            { speaker: "Samer", ar: "نُور، سَلَامْتِك. شَكْلِك مِش عَلَى بَعْضِك اليَوْم.", arArabeezy: "noor, salamtik. shaklik mish 3ala ba3Dik el-yom.", en: "Noor, are you okay? You don’t look well today." },
            { speaker: "Noor", ar: "الله يْسَلْمَك. وَالله مِن الصُّبُح وَأَنَا تَعْبَانَة.", arArabeezy: "allah ysallmak. wallah min eS-Sobo7 w ana ta3bane.", en: "Thank you. I’ve been tired since the morning." },
            { speaker: "Samer", ar: "مَالِك؟ بَرْد؟ صُدَاع؟", arArabeezy: "malik? bard? Soda3?", en: "What’s wrong? A cold? A headache?" },
            { speaker: "Noor", ar: "رَاسِي بِوْجَعْنِي، وَحَاسَّة بِدُوخَة شُوَي، وَكَمَان عِنْدِي رَشْح وَكُحَّة مِن إِمْبَارِح.", arArabeezy: "rasi biwja3ni, w 7asse bdoo5a shway, w kaman 3indi rash7 w ko77a min embare7.", en: "My head hurts, I feel a little dizzy, and I also have a runny nose and a cough since yesterday." },
            { speaker: "Samer", ar: "أَكَلْتِي إِشِي قَبْل مَا تِطْلَعِي؟", arArabeezy: "akalti ishi 2abl ma tiTla3i?", en: "Did you eat anything before leaving?" },
            { speaker: "Noor", ar: "لَا، شْرِبْت قَهْوَة بَس. كُنْت مُسْتَعْجِلَة عَشَان أَلْحَق المُوَاصَلَات.", arArabeezy: "la, shribt ahwe bas. kont mesta3jle 3ashan al7aq el-mowaSalat.", en: "No, I only drank coffee. I was in a hurry to catch transportation." },
            { speaker: "Samer", ar: "يَا بِنْت، يُمْكِن الدُّوخَة مِن قِلَّة الأَكْل.", arArabeezy: "ya bint, yimkin ed-doo5a min 2illet el-akel.", en: "Maybe the dizziness is from not eating enough." },
            { speaker: "Noor", ar: "يُمْكِن، بَس حَاسَّة جِسْمِي مُكَسَّر كَمَان.", arArabeezy: "yimkin, bas 7asse jismi mkassar kaman.", en: "Maybe, but my whole body feels sore too." },
            { speaker: "Samer", ar: "شَكْلِك دَاخْلَة عَلَى بَرْد. الجَوّ هَالأَيَّام مُتْقَلِّب.", arArabeezy: "shaklik dakhle 3ala bard. el-jaw hal-ayam mit2allib.", en: "Looks like you’re getting a cold. The weather is unstable these days." },
            { speaker: "Noor", ar: "آه، إِمْبَارِح طِلِعْت بَدُون جَاكِيت، وَمِن وَقْتْهَا وَأَنَا مِش تَمَام.", arArabeezy: "ah, embare7 Tili3t bidoon jacket, w min wa2tha w ana mish tamam.", en: "Yes, yesterday I went out without a jacket, and since then I haven’t been well." },
            { speaker: "Samer", ar: "طَيِّب المُحَاضَرَة بَعْد قَدِّيش؟", arArabeezy: "Tayyib el-mo7aDara ba3d addeesh?", en: "Okay, how long until the lecture?" },
            { speaker: "Noor", ar: "بَعْد نُصّ سَاعَة.", arArabeezy: "ba3d noSS sa3a.", en: "In half an hour." },
            { speaker: "Samer", ar: "خَلِّينَا نِمُرّ عَالعِيَادَة بِسُرْعَة. هِيَّ جَنْب المَبْنَى، وَمَا بْتَاخُد وَقْت.", arArabeezy: "khallina nimorr 3al-3iyada bisor3a. hiyye janb el-mabna, w ma btakhod wa2t.", en: "Let’s quickly stop by the clinic. It’s next to the building and won’t take long." },
            { speaker: "Noor", ar: "مِش عَارْفَة... خَايْفَة أِتْأَخَّر.", arArabeezy: "mish 3arfe... khayfe it2akhkhar.", en: "I don’t know... I’m afraid I’ll be late." },
            { speaker: "Samer", ar: "الصِّحَّة أَهَمّ مِن المُحَاضَرَة. وَإِذَا اتْأَخَّرْتِي، بَحْكِي لِلْأُسْتَاذ إِنِّك تَعْبَانَة.", arArabeezy: "eS-Si77a aham min el-mo7aDara. w iza it2akhkharti, ba7ki lil-ustaz innik ta3bane.", en: "Health is more important than the lecture. If you’re late, I’ll tell the professor you’re sick." },
            { speaker: "Noor", ar: "خَلَص، يَلَّا.", arArabeezy: "khalaS, yalla.", en: "Okay, let’s go." },

            { speaker: "Receptionist", ar: "صَبَاح الخِير، سَلَامْتِك. عِنْدِك مَوْعِد وَلَّا جَايَّة طَوَارِئ؟", arArabeezy: "Saba7 el-kheir, salamtik. 3indik maw3id wala jayye Taware2?", en: "Good morning, are you okay? Do you have an appointment or are you here for emergency care?" },
            { speaker: "Noor", ar: "مَا عِنْدِي مَوْعِد. بَس تَعْبَانَة شُوَي، وَرَاسِي بِوْجَعْنِي وَعِنْدِي دُوخَة.", arArabeezy: "ma 3indi maw3id. bas ta3bane shway, w rasi biwja3ni w 3indi doo5a.", en: "I don’t have an appointment. I’m just a little sick, my head hurts, and I’m dizzy." },
            { speaker: "Receptionist", ar: "فِي حَرَارَة؟", arArabeezy: "fi 7arara?", en: "Do you have a fever?" },
            { speaker: "Noor", ar: "حَاسَّة إِنُّه فِي سُخُونَة، بَس مَا قِسْتْهَا.", arArabeezy: "7asse inno fi skhoone, bas ma 2ist-ha.", en: "I feel like I have a fever, but I didn’t check it." },
            { speaker: "Receptionist", ar: "تَمَام، اِسْتَنِّي خَمْس دَقَايِق وَالدُّكْتُور بِيِشُوفِك.", arArabeezy: "tamam, istanni khams da2aye2 w ed-doctor biyshoofik.", en: "Okay, wait five minutes and the doctor will see you." },

            { speaker: "Doctor", ar: "أَهْلًا نُور، سَلَامْتِك. اِحْكِيلِي شُو حَاسَّة؟", arArabeezy: "ahlan noor, salamtik. i7keeli shoo 7asse?", en: "Hello Noor, are you okay? Tell me what you’re feeling." },
            { speaker: "Noor", ar: "رَاسِي بِوْجَعْنِي، عِنْدِي رَشْح وَكُحَّة، وَحَاسَّة بِدُوخَة. وَكَمَان مِن الصُّبُح مَا أَكَلْتِش مْنِيح.", arArabeezy: "rasi biwja3ni, 3indi rash7 w ko77a, w 7asse bdoo5a. w kaman min eS-Sobo7 ma akaltish mnee7.", en: "My head hurts, I have a runny nose and cough, and I feel dizzy. Also, I haven’t eaten well since the morning." },
            { speaker: "Doctor", ar: "فِي وَجَع بِالحَلْق؟", arArabeezy: "fi waja3 bil-7ale2?", en: "Is there a sore throat?" },
            { speaker: "Noor", ar: "آه، شُوَي.", arArabeezy: "ah, shway.", en: "Yes, a little." },
            { speaker: "Doctor", ar: "فِي مَغَص أَو وَجَع بِالبَطْن؟", arArabeezy: "fi maghaS aw waja3 bil-baTen?", en: "Any cramps or stomach pain?" },
            { speaker: "Noor", ar: "لَا، بَطْنِي تَمَام.", arArabeezy: "la, baTni tamam.", en: "No, my stomach is fine." },
            { speaker: "Doctor", ar: "طَيِّب خَلِّينَا نْقِيس الحَرَارَة وَالضَّغْط.", arArabeezy: "Tayyib khallina n2ees el-7arara w eD-DaghT.", en: "Okay, let’s check your temperature and blood pressure." },
            { speaker: "Samer", ar: "دُكْتُور، شَكْلْهَا تَعْبَانَة مِن الصُّبُح.", arArabeezy: "doctor, shakilha ta3bane min eS-Sobo7.", en: "Doctor, she has looked sick since the morning." },
            { speaker: "Doctor", ar: "حَرَارْتِك مُرْتَفْعَة شُوَي، وَالضَّغْط نَازِل بَسِيط. غَالِبًا بَرْد مَع قِلَّة أَكْل وَتَعَب.", arArabeezy: "7arartik murtif3a shway, w eD-DaghT nazil baseeT. ghaliban bard ma3 2illet akel w ta3ab.", en: "Your temperature is a little high, and your blood pressure is slightly low. Most likely it’s a cold with lack of food and tiredness." },
            { speaker: "Noor", ar: "يَعْنِي فِي إِشِي خَطِير؟", arArabeezy: "ya3ni fi ishi khaTeer?", en: "So, is there anything serious?" },
            { speaker: "Doctor", ar: "لَا، إِنْ شَاء الله بَسِيط. بَس الأَفْضَل تْرُوحِي عَالبَيْت وَتِرْتَاحِي اليَوْم.", arArabeezy: "la, inshallah baseeT. bas el-afDal troo7i 3al-beit w tirta7i el-yom.", en: "No, God willing it’s simple. But it’s better to go home and rest today." },
            { speaker: "Noor", ar: "وَالمُحَاضَرَة؟", arArabeezy: "w el-mo7aDara?", en: "And the lecture?" },
            { speaker: "Doctor", ar: "المُحَاضَرَة بْتِتْعَوَّض. الصِّحَّة أَهَمّ.", arArabeezy: "el-mo7aDara btit3awwaD. eS-Si77a aham.", en: "The lecture can be made up. Health is more important." },
            { speaker: "Samer", ar: "شُو تِعْمَل بِالبَيْت؟", arArabeezy: "shoo ti3mal bil-beit?", en: "What should she do at home?" },
            { speaker: "Doctor", ar: "تِشْرَب سَوَايِل دَافْيَة، تَاكُل أَكْل خَفِيف، وَتِرْتَاح. وَإِذَا الحَرَارَة ضَلَّت عَالْيَة أَو الكُحَّة زَادِت، تِرْجَع بُكْرَة.", arArabeezy: "tishrab sawayil dafye, takol akel khafeef, w tirta7. w iza el-7arara Dallat 3alye aw el-ko77a zadit, tirja3 bokra.", en: "She should drink warm fluids, eat light food, and rest. If the fever stays high or the cough gets worse, she should come back tomorrow." },
            { speaker: "Noor", ar: "وَفِي دَوَا؟", arArabeezy: "w fi dawa?", en: "And is there medicine?" },
            { speaker: "Doctor", ar: "آه، هَاي الوَرَقَة فِيهَا اِسْم الدَّوَا وَطَرِيقَة اسْتِخْدَامُه. خَلِّي الصَّيْدَلِي يِشْرَحْلِك إِيَّاهَا.", arArabeezy: "ah, hay el-waraqa feeha ism ed-dawa w Tareeqet istikhdamo. khalli eS-Seidali yishra7lik iyyaha.", en: "Yes. This paper has the medicine name and how to use it. Ask the pharmacist to explain it to you." },
            { speaker: "Noor", ar: "بِدُّه وَصْفَة؟", arArabeezy: "biddo waSfe?", en: "Does it need a prescription?" },
            { speaker: "Doctor", ar: "لَا، مِن الصَّيْدَلِيَّة عَادِي. بَس إِذَا عِنْدِك حَسَاسِيَّة مِن أَدْوِيَة، اِحْكِي لِلصَّيْدَلِي.", arArabeezy: "la, min eS-Seidaliyye 3adi. bas iza 3indik 7asasiyye min adwiye, i7ki liS-Seidali.", en: "No, from the pharmacy normally. But if you have any allergy to medications, tell the pharmacist." },
            { speaker: "Noor", ar: "تَمَام، يِعْطِيك العَافْيَة.", arArabeezy: "tamam, ya3teek el-3afyeh.", en: "Okay, thank you." },
            { speaker: "Doctor", ar: "الله يْعَافِيك. سَلَامْتِك.", arArabeezy: "allah y3afeek. salamtik.", en: "You’re welcome. Get well soon." },

            { speaker: "Samer", ar: "الصَّيْدَلِيَّة جَنْب البَاب. نْجِيب الدَّوَا وَبُوصَلِك بِتَاكْسِي.", arArabeezy: "eS-Seidaliyye janb el-bab. njeeb ed-dawa w booSalik bi-taxi.", en: "The pharmacy is by the door. We’ll get the medicine and I’ll take you home by taxi." },
            { speaker: "Noor", ar: "يِسْلَمُوا، غَلَّبْتَك مَعِي.", arArabeezy: "yislamu, ghallabtak ma3i.", en: "Thank you, sorry for troubling you." },
            { speaker: "Samer", ar: "وَلَا غَلَبَة وَلَا إِشِي.", arArabeezy: "wala ghalabe wala ishi.", en: "No trouble at all." },

            { speaker: "Pharmacist", ar: "أَهْلًا، سَلَامْتِك. كِيف بَقْدَر أَسَاعْدِك؟", arArabeezy: "ahlan, salamtik. keef ba2dar asa3dik?", en: "Hello, are you okay? How can I help you?" },
            { speaker: "Noor", ar: "الله يْسَلْمَك. بَدِّي هَاد الدَّوَا، وَكَمَان مُسَكِّن خَفِيف لِوَجَع الرَّاس.", arArabeezy: "allah ysallmak. baddi had ed-dawa, w kaman msakkin khafeef la-waja3 er-ras.", en: "Thank you. I want this medicine, and also a mild painkiller for the headache." },
            { speaker: "Pharmacist", ar: "عِنْدِك حَسَاسِيَّة مِن أَي دَوَا؟", arArabeezy: "3indik 7asasiyye min ay dawa?", en: "Do you have an allergy to any medicine?" },
            { speaker: "Noor", ar: "مِش مُتَأَكِّدَة. مَرَّة تَعِبْت مِن دَوَا، بَس مِش ذَاكْرَة اسْمُه.", arArabeezy: "mish mit2akkde. marra ti3ibt min dawa, bas mish zakre ismo.", en: "I’m not sure. Once I felt bad from a medicine, but I don’t remember its name." },
            { speaker: "Pharmacist", ar: "طَيِّب، بِمَا إِنِّك مِش مُتَأَكِّدَة، مَا تَاخْدِي مُسَكِّن جَدِيد. خَلِّينَا نِتَأَكَّد مِن الدُّكْتُور أَوَّل.", arArabeezy: "Tayyib, bima innik mish mit2akkde, ma takhdi msakkin jdeed. khallina nit2akkad min ed-doktor awwal.", en: "Since you are not sure, don't take a new painkiller. Let's confirm with the doctor first." },
            { speaker: "Noor", ar: "تَمَام. قَدِّيش الحِسَاب؟", arArabeezy: "tamam. addeesh el-7isab?", en: "Okay. How much is it?" },
            { speaker: "Pharmacist", ar: "خَمْسَة وَعِشْرِين.", arArabeezy: "khamse w 3ishreen.", en: "Twenty-five." },
            { speaker: "Samer", ar: "كَاش وَلَّا بِطَاقَة؟", arArabeezy: "cash wala biTa2a?", en: "Cash or card?" },
            { speaker: "Pharmacist", ar: "الاتْنِين عَادِي.", arArabeezy: "el-itnain 3adi.", en: "Both are fine." },
            { speaker: "Noor", ar: "كَاش. تْفَضَّل.", arArabeezy: "cash. tfaDDal.", en: "Cash. Here you go." },
            { speaker: "Pharmacist", ar: "سَلَامْتِك، وَإِذَا الحَرَارَة زَادِت أَو صَار فِي ضِيق نَفَس، رُوحِي طَوَارِئ فَوْرًا.", arArabeezy: "salamtik, w iza el-7arara zadit aw Sar fi Deeq nafas, roo7i Taware2 fawran.", en: "Get well soon, and if the fever gets higher or you have shortness of breath, go to the emergency room immediately." },
            { speaker: "Noor", ar: "إِنْ شَاء الله مَا نُوصَل لِهَاي المَرْحَلَة.", arArabeezy: "inshallah ma nooSal l-hay el-mar7ale.", en: "God willing, we won’t reach that stage." },

            { speaker: "Samer", ar: "يَلَّا، التَّاكْسِي وَاقِف بَرَّا.", arArabeezy: "yalla, et-taxi wa2if barra.", en: "Come on, the taxi is waiting outside." },
            { speaker: "Noor", ar: "بَس طَمِّن الأُسْتَاذ إِنِّي مِش رَح أَحْضَر المُحَاضَرَة.", arArabeezy: "bas Tammin el-ustaz inni mish ra7 a7Dar el-mo7aDara.", en: "Just let the professor know that I won’t attend the lecture." },
            { speaker: "Samer", ar: "أَكِيد، بَحْكِيلُه إِنِّك تَعْبَانَة وَرُحْتِي عَالبَيْت.", arArabeezy: "akeed, ba7keelo innik ta3bane w ro7ti 3al-beit.", en: "Of course, I’ll tell him you’re sick and went home." },
            { speaker: "Noor", ar: "يِسْلَمُوا كْتِير.", arArabeezy: "yislamu kteer.", en: "Thank you so much." },
            { speaker: "Samer", ar: "وَلَا يْهِمِّك. بَس اِسْمَعِي، إِذَا حَسِّيتِي بِدُوخَة قَوِيَّة، أَو مَا قْدِرْتِي تِتْنَفَّسِي مْنِيح، أَو الحَرَارَة مَا نَزْلَت، اِتْصِلِي بِأَهْلِك أَو بِالإِسْعَاف فَوْرًا.", arArabeezy: "wala yhimmik. bas isma3i, iza 7asseeti bdoo5a qawiyye, aw ma 2dirti titnaffasi mnee7, aw el-7arara ma nazlat, itSili b2ahlik aw bil-is3af fawran.", en: "Don’t worry. But listen, if you feel severe dizziness, can’t breathe well, or the fever doesn’t go down, call your family or an ambulance immediately." },
            { speaker: "Noor", ar: "تَمَام، فْهِمْت.", arArabeezy: "tamam, fhimt.", en: "Okay, I understand." },
            { speaker: "Samer", ar: "وَابْعَتِيلِي لَمَّا تُوصَلِي.", arArabeezy: "w ab3ateeli lamma tooSali.", en: "And message me when you arrive." },
            { speaker: "Noor", ar: "إِنْ شَاء الله. بَعْد الرَّاحَة إِنْ شَاء الله بَصِير أَحْسَن.", arArabeezy: "inshallah. ba3d er-ra7a inshallah baSeer a7san.", en: "God willing. After resting, I’ll hopefully feel better." },
            { speaker: "Samer", ar: "إِنْ شَاء الله. سَلَامْتِك.", arArabeezy: "inshallah. salamtik.", en: "God willing. Get well soon." }
        ],

        questions: [
            { ar: "لِيش سَامِر انْتَبَه إِنّ نُور تَعْبَانَة؟", en: "Why did Samer notice that Noor was sick?" },
            { ar: "شُو الأَعْرَاض اللِّي كَانِت عِنْد نُور؟", en: "What symptoms did Noor have?" },
            { ar: "هَل نُور أَكَلَت قَبْل مَا تِطْلَع؟", en: "Did Noor eat before leaving?" },
            { ar: "لِيش سَامِر قَال إِنّ الدُّوخَة مُمْكِن تْكُون مِن قِلَّة الأَكْل؟", en: "Why did Samer say the dizziness might be from lack of food?" },
            { ar: "وِين اقْتَرَح سَامِر يْرُوحُوا قَبْل المُحَاضَرَة؟", en: "Where did Samer suggest they go before the lecture?" },
            { ar: "شُو سَأَلَت مُوَظَّفَة الاسْتِقْبَال نُور؟", en: "What did the receptionist ask Noor?" },
            { ar: "شُو قَاس الدُّكْتُور لِنُور؟", en: "What did the doctor check for Noor?" },
            { ar: "شُو قَال الدُّكْتُور عَن حَالْتْهَا؟", en: "What did the doctor say about her condition?" },
            { ar: "شُو نَصَائِح الدُّكْتُور لِنُور؟", en: "What advice did the doctor give Noor?" },
            { ar: "لِيش الصَّيْدَلِي مَا أَعْطَاهَا مُسَكِّن جَدِيد؟", en: "Why didn't the pharmacist give her a new painkiller?" },
            { ar: "شُو سَأَلَت نُور الصَّيْدَلِي؟", en: "What did Noor ask the pharmacist?" },
            { ar: "إِمْتَى لَازِم تْرُوح نُور عَالطَّوَارِئ؟", en: "When should Noor go to the emergency room?" }
        ],
    },

    grammar: [

        {
            title: "3. Medical advice: command forms by listener",
            short: "خُد / خُدِي / خُدُوا — ارْتَاح / ارْتَاحِي / ارْتَاحُوا",
            description: "Medical instructions address a specific listener, so the command changes for one man, one woman, and a group. In a real clinic or pharmacy, instructions should be clear and often include time, amount, and a condition. These examples teach language patterns only; actual medicine use must follow a qualified professional’s instructions.",
            table: {
                title: "Common advice commands",
                headers: ["Meaning", "One man", "One woman", "Group"],
                rows: [
                    ["take", "خُد", "خُدِي", "خُدُوا"],
                    ["rest", "ارْتَاح", "ارْتَاحِي", "ارْتَاحُوا"],
                    ["drink", "اِشْرَب", "اِشْرَبِي", "اِشْرَبُوا"],
                    ["call", "اتَّصِل", "اتَّصِلِي", "اتَّصِلُوا"],
                    ["go", "رُوح", "رُوحِي", "رُوحُوا"],
                    ["come back / return", "ارْجَع", "ارْجَعِي", "ارْجَعُوا"],
                ],
            },
            examples: [
                { ar: "خُد الدَّوَا زَيّ مَا حَكَالَك الدُّكْتُور.", arabeezy: "khod ed-dawa zayy ma 7akalak ed-duktoor.", en: "Take the medicine exactly as the doctor told you. (to a man)" },
                { ar: "ارْتَاحِي اليَوم وَاشْرَبِي سَوَايِل.", arabeezy: "irta7i el-yom w ishrabi sawayel.", en: "Rest today and drink fluids. (to a woman)" },
                { ar: "إِذَا زَاد الوَجَع، ارْجَعُوا عَالدُّكْتُور.", arabeezy: "iza zad el-waja3, irja3u 3ad-duktoor.", en: "If the pain increases, go back to the doctor. (to a group)" },
            ],
            commonMistakes: [
                "Match every coordinated command to the same listener: ارْتَاحِي وَاشْرَبِي for one woman.",
                "Do not keep the present-tense بـ in a direct command: خُد, not بِتَاخُد.",
                "Language practice must not invent a dosage. Repeat the professional’s exact amount and timing or ask for clarification.",
            ],
            exercises: [
                { prompt: "Address one woman: ‘Rest and drink water.’", options: ["ارْتَاحِي وَاشْرَبِي مَيّ.", "ارْتَاح وَاشْرَب مَيّ.", "ارْتَاحُوا وَاشْرَبُوا مَيّ."], correct: "ارْتَاحِي وَاشْرَبِي مَيّ.", explanation: "Both feminine singular commands take ـي." },
                { prompt: "Choose the group command: ‘Go back to the doctor.’", options: ["ارْجَعُوا عَالدُّكْتُور.", "ارْجَعِي عَالدُّكْتُور.", "بِتِرْجَعُوا عَالدُّكْتُور."], correct: "ارْجَعُوا عَالدُّكْتُور.", explanation: "The plural imperative ends in ـوا and has no habitual بـ." },
                { prompt: "Which instruction is safest linguistically?", options: ["خُد الدَّوَا زَيّ مَا حَكَالَك الدُّكْتُور.", "خُد أَيّ كَمِّيَّة بَدَّك إِيَّاهَا.", "غَيِّر الجُرْعَة لَحَالَك."], correct: "خُد الدَّوَا زَيّ مَا حَكَالَك الدُّكْتُور.", explanation: "It tells the learner to follow the professional’s actual instruction rather than inventing one." },
            ],
        },

    ],

    microChecks: {
        enabled: true,
        every: 5,
        items: [
            {
                id: "health_mc1",
                type: "choose",
                prompt: "Choose the Gaza Palestinian Arabic phrase for: What's wrong?",
                options: ["شُو مَالَك؟", "قَدِّيش هَادَا؟", "كِيف الجَوّ؟", "مِن وِين؟"],
                correct: "شُو مَالَك؟",
            },
            {
                id: "health_mc2",
                type: "complete",
                prompt: "Complete the Arabic sentence for: My head hurts.\nرَاسِي ___.",
                options: ["بِيْجَعْنِي", "بَشْتِرِي", "مُشْمِس", "مْنَاسِب"],
                correct: "بِيْجَعْنِي",
            },
            {
                "id": "health_mc3",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: I have a bad headache, I need coffee.\nأَنَا ___ كْتِير، بَدِّي قَهْوَة.",
                "options": [
                    "مْصَدِّع",
                    "فَرْحَان",
                    "شَغَّال",
                    "تَعْبَان"
                ],
                "correct": "مْصَدِّع"
            },
            {
                id: "health_mc4",
                type: "choose",
                prompt: "Choose the Gaza Palestinian Arabic word for: medicine.",
                options: ["دَوَا", "مَغَص", "دُوخَة", "كُحَّة"],
                correct: "دَوَا",
            },
            {
                "id": "health_mc5",
                "type": "reorder",
                "prompt": "Reorder the Arabic words to match: Help me, the man fell on the ground!",
                "options": [
                    "عَالْأَرْض",
                    "الزَّلَمَة",
                    "إِلْحَقُونِي",
                    "وَقَع"
                ],
                "correct": [
                    "إِلْحَقُونِي",
                    "الزَّلَمَة",
                    "وَقَع",
                    "عَالْأَرْض"
                ]
            },
            {
                "id": "health_mc7",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: I have an appointment at the doctor's.\nعِنْدِي ___ عِنْد الدُّكْتُور.",
                "options": [
                    "مَوْعِد",
                    "اِمْتِحَان",
                    "مَشْرُوع",
                    "دَرْس"
                ],
                "correct": "مَوْعِد"
            },
            { id: "health_mc6", type: "choose", prompt: "Choose the Gaza Palestinian Arabic word for: symptoms.", options: ["أَعْرَاض", "طَوَارِئ", "إِسْعَاف", "نَزِيف"], correct: "أَعْرَاض" },
            {
  "id": "health_mc7",
  "type": "complete",
  "prompt": "Complete the Arabic sentence for: Call the ambulance, the patient has passed out!\nاِتَّصِل بَالإِسْعَاف، المَرِيض ___!",
  "options": [
    "مِغْمَى عَلَيْه",
    "زَاكِي كْتِير",
    "عَالإِشَارَة",
    "مْصَدِّع عَ الأَخِير"
  ],
  "correct": "مِغْمَى عَلَيْه"
},
            { id: "health_mc8", type: "choose", prompt: "Choose the Gaza Palestinian Arabic word for: accident.", options: ["حَادِث", "جُرْح", "إِبْرَة", "مُرَاجَعَة"], correct: "حَادِث" },
            { id: "health_mc9", type: "choose", prompt: "Choose the Gaza Palestinian Arabic word for: nurse.", options: ["مُمَرِّض / مُمَرِّضَة", "ضَغِط", "سُكَّر", "حَسَاسِيَّة"], correct: "مُمَرِّض / مُمَرِّضَة" },
        ],
    },

    practice: {
        showRealUse: false,
        showWriting: false,
        separateExerciseTypes: true,
        quiz: [
            {
                id: "health_q1",
                questionAr: "Choose who you address with: «سَلَامْتِك»",
                optionsEn: ["to a woman who is sick/unwell", "when asking a price", "when asking where someone lives"],
                correctIndex: 0,
            },
            {
                id: "health_q2",
                questionAr: "Choose how to say: “My stomach hurts.”",
                optionsEn: ["بَطْنِي بِيْجَعْنِي.", "رَاسِي بِيْجَعْنِي.", "بَدِّي أَشْتِرِي."],
                correctIndex: 0,
            },
            {
                id: "health_q3",
                questionAr: "Choose the English meaning of: «خُد حَبَّة مَرَّتَيْن فِي اليَوم»",
                optionsEn: ["Take one pill twice a day.", "Take two kilos today.", "Go twice to the market."],
                correctIndex: 0,
            },
            {
                id: "health_q4",
                questionAr: "Choose the best action if the fever stays high.",
                optionsEn: ["see a doctor / go back to the clinic", "bargain at the market", "ask about the weather"],
                correctIndex: 0,
            },
            {
                id: "health_q5",
                questionAr: "Choose the English meaning of: «دُوخَة»",
                optionsEn: ["dizziness", "discount", "humidity"],
                correctIndex: 0,
            },
            {
                id: "health_q6",
                questionAr: "Classify this situation: مَا بَتِقْدَر تِتْنَفَّس مْنِيح.",
                optionsEn: ["serious/emergency phrase", "normal shopping phrase", "weather small talk"],
                correctIndex: 0,
            },
            {
                id: "health_q7",
                questionAr: "Choose where you would hear: «حَبَّة مَرَّتَيْن فِي اليَوم»",
                optionsEn: ["medicine instructions", "family names", "colors"],
                correctIndex: 0,
            },
            {
                id: "health_q8",
                questionAr: "Choose the English meaning of: «عِنْدِي حَسَاسِيَّة»",
                optionsEn: ["I have an allergy.", "I have a discount.", "I have a brother."],
                correctIndex: 0,
            },
            {
                id: "health_q9",
                questionAr: "Choose the appropriate response in a medical emergency.",
                optionsEn: ["اِتَّصِل بِالإِسْعَاف.", "آخِر سِعِر؟", "كِيف الجَوّ؟"],
                correctIndex: 0,
            },
        ],
        rolePlays: [
            "Clinic role-play: describe two symptoms and when they started; answer the doctor's questions and repeat the advice you receive.",
        ],
        sections: [
            {
                title: "A - Recognition",
                matching: [
                    { ar: "رَاسِي بِيْجَعْنِي", arabeezy: "rasi biyja3ni", en: "my head hurts" },
                    { ar: "سُخُونَة", arabeezy: "sukhooneh", en: "fever" },
                    { ar: "دُوخَة", arabeezy: "dookha", en: "dizziness" },
                    { ar: "دَوَا", arabeezy: "dawa", en: "medicine" },
                    { ar: "مَوْعِد", arabeezy: "maw3ed", en: "appointment" },
                    { ar: "طَوَارِئ", arabeezy: "Taware2", en: "emergency department" },
                ],
                multipleChoice: [
                    { prompt: "Choose the feminine instruction for “Take one pill.”", options: ["خُدِي حَبَّة (khodi 7abbeh)", "خُد حَبَّة (khod 7abbeh)", "خُدُوا حَبَّة (khodu 7abbeh)"], correct: "خُدِي حَبَّة (khodi 7abbeh)" },
                    { prompt: "Choose the phrase containing an object pronoun: “My head hurts me.”", options: ["رَاسِي بِيْجَعْنِي.", "عِنْدِي دَوَا.", "فِي عِيَادَة."], correct: "رَاسِي بِيْجَعْنِي." },
                ],
            },
            {
                title: "B - Health grammar practice",
                fillInTheBlank: [
                    { prompt: "رَاسِي بِيْجَع___.", arabeezy: "rasi biyja3___.", cueEn: "me", answer: "نِي" },
                    { prompt: "رَاسُه بِيْجَع___.", arabeezy: "raso biyja3___.", cueEn: "him", answer: "هُ" },
                    { prompt: "عِنْدِي مَوْعِد ___ الدُّكْتُور.", arabeezy: "3indi maw3ed ___ ed-doctor.", cueEn: "with/at", answer: "عِنْد" },
                    { prompt: "خُد حَبَّة مَرَّتَيْن ___ اليَوم.", arabeezy: "khod 7abbeh marratein ___ el-yom.", cueEn: "in/per", answer: "فِي" },
                    { prompt: "إِذَا الحَرَارَة ضَلَّت عَالْيَة، ___ بُكْرَا.", arabeezy: "iza el-7arara Dallet 3alyeh, ___ bukra.", cueEn: "come back (masculine)", answer: "اِرْجَع" },
                    { prompt: "إِذَا الحَرَارَة ضَلَّت عَالْيَة، ___ بُكْرَا.", arabeezy: "iza el-7arara Dallet 3alyeh, ___ bukra.", cueEn: "come back (feminine)", answer: "اِرْجَعِي" },
                    { prompt: "___ تِسْتَنَّاش.", arabeezy: "___ tistannash.", cueEn: "do not", answer: "مَا" },
                    { prompt: "لَو مَا بِتِقْدَر تِتْنَفَّس، ___ بِالإِسْعَاف.", arabeezy: "law ma bti2dar titnaffas, ___ bil-is3af.", cueEn: "call (masculine)", answer: "اِتَّصِل" },
                    { prompt: "عِنْدِي حَسَاسِيَّة ___ هَادَا الدَّوَا.", arabeezy: "3indi 7asasiyyeh ___ hada ed-dawa.", cueEn: "to/from", answer: "مِن" },
                    { prompt: "Review past: المُمَرِّضَة ___ الحَرَارَة.", arabeezy: "el-mumarriDa ___ el-7arara.", cueEn: "measured", answer: "قَاسَت" },
                    { prompt: "Review future: بُكْرَا ___ أَرُوح عَالْعِيَادَة.", arabeezy: "bukra ___ aroo7 3al-3iyadeh.", cueEn: "will", answer: "رَاح" },
                    { prompt: "Review shopping: بَدِّي نُصّ ___ بَنْدُورَة.", arabeezy: "baddi noSS ___ bandora.", cueEn: "kilo", answer: "كِيلُو" },
                ],
                correctTheMistake: [
                    { prompt: "Correct: هِيَّ تَعْبَان.", arabeezy: "hiyyeh ta3ban.", answer: "هِيَّ تَعْبَانَة." },
                    { prompt: "Correct the command to a woman: خُد حَبَّة.", arabeezy: "khod 7abbeh.", answer: "خُدِي حَبَّة." },
                    { prompt: "Correct: بَطْنِي بِيْجَعْنَك.", arabeezy: "baTni biyja3nak.", answer: "بَطْنِي بِيْجَعْنِي." },
                    { prompt: "Correct the future: بُكْرَا رُحْت عَالدُّكْتُور.", arabeezy: "bukra ru7t 3ad-doctor.", answer: "بُكْرَا رَاح أَرُوح عَالدُّكْتُور." },
                    { prompt: "Correct the object pronoun: رَاسُه بِيْجَعْنِي.", arabeezy: "raso biyja3ni.", answer: "رَاسُه بِيْجَعُه." },
                    { prompt: "Correct the negative command: لَا بِتَسْتَنَّى.", arabeezy: "la btistanna.", answer: "مَا تِسْتَنَّاش." },
                ],
                reorderSentences: [
                    { prompt: "Build: My stomach hurts since morning.", arabeezy: "baTni biyja3ni min eS-Subu7.", words: [" بِيْجَعْنِي","بَطْنِي",  "مِن الصُّبْح."], answer: "بَطْنِي بِيْجَعْنِي مِن الصُّبْح." },
                    { prompt: "Build: Take one pill twice a day.", arabeezy: "khod 7abbeh marratein fil-yom.", words: ["مَرَّتَيْن", "خُد حَبَّة", "فِي اليَوم."], answer: "خُد حَبَّة مَرَّتَيْن فِي اليَوم." },
                    { prompt: "Build: I have an allergy to medicine.", arabeezy: "3indi 7asasiyyeh min ed-dawa.", words: [" حَسَاسِيَّة", "عِنْدِي", "مِن الدَّوَا."], answer: "عِنْدِي حَسَاسِيَّة مِن الدَّوَا." },
                    { prompt: "Review future: Tomorrow I will go to the clinic.", arabeezy: "bukra ra7 aroo7 3al-3iyadeh.", words: ["بُكْرَا","عَالْعِيَادَة.",  "رَاح أَرُوح",], answer: "بُكْرَا رَاح أَرُوح عَالْعِيَادَة." },
                    { prompt: "Build: If you cannot breathe, call an ambulance immediately.", arabeezy: "iza ma bti2dar titnaffas, ittaSil bil-is3af 3aTool.", words: ["تِتْنَفَّس","إِذَا مَا بِتِقْدَر ", "اِتَّصِل بِالإِسْعَاف", "عَطُول."], answer: "إِذَا مَا بِتِقْدَر تِتْنَفَّس اِتَّصِل بِالإِسْعَاف عَطُول." },
                    { prompt: "Review: I want half a kilo of tomatoes.", arabeezy: "baddi noSS kilo bandora.", words: ["نُصّ كِيلُو", "بَدِّي", "بَنْدُورَة."], answer: "بَدِّي نُصّ كِيلُو بَنْدُورَة." },
                ],
            },
        ],
        translation: [
            { id: "health_t1", type: "enToAr", textEn: "Hope you're okay. What's wrong?", textAr: "سَلَامْتَك/سَلَامْتِك. شُو مَالَك/مَالِك؟" },
            { id: "health_t2", type: "arToEn", textEn: "My head has been hurting since morning.", textAr: "رَاسِي بِيْجَعْنِي مِن الصُّبْح." },
            { id: "health_t3", type: "enToAr", textEn: "I have a runny nose and a cough since yesterday.", textAr: "عِنْدِي رَشْح وَكُحَّة مِن اِمْبَارِح." },
            { id: "health_t4", type: "arToEn", textEn: "I have dizziness and a fever.", textAr: "عِنْدِي دُوخَة وَسُخُونَة." },
            { id: "health_t5", type: "enToAr", textEn: "My stomach hurts since morning.", textAr: "بَطْنِي بِيْجَعْنِي مِن الصُّبْح." },
            { id: "health_t6", type: "arToEn", textEn: "I need medicine and two days of rest.", textAr: "بَحْتَاج دَوَا وَرَاحَة يَومَيْن." },
            { id: "health_t7", type: "enToAr", textEn: "Take one pill twice a day.", textAr: "خُد/خُدِي حَبَّة مَرَّتَيْن فِي اليَوم." },
            { id: "health_t8", type: "arToEn", textEn: "I have an appointment with the doctor.", textAr: "عِنْدِي مَوْعِد عِنْد الدُّكْتُور." },
            { id: "health_t9", type: "enToAr", textEn: "Is there a pharmacy near the house?", textAr: "فِي صَيْدَلِيَّة قَرِيب مِن البَيْت؟" },
            { id: "health_t10", type: "arToEn", textEn: "If the fever stays high, come back tomorrow.", textAr: "إِذَا الحَرَارَة ضَلَّت عَالْيَة، اِرْجَع/اِرْجَعِي بُكْرَا." },
            { id: "health_t11", type: "enToAr", textEn: "I have an allergy to a medicine.", textAr: "عِنْدِي حَسَاسِيَّة مِن دَوَا." },
            { id: "health_t12", type: "arToEn", textEn: "My grandfather has diabetes.", textAr: "سِيدِي مَعُه سُكَّر." },
            { id: "health_t13", type: "enToAr", textEn: "The nurse measured the temperature and blood pressure.", textAr: "المُمَرِّضَة قَاسَت الحَرَارَة وَالضَّغِط." },
            { id: "health_t14", type: "arToEn", textEn: "I cannot breathe well.", textAr: "مَا بَقْدَر أَتْنَفَّس مْنِيح." },
            { id: "health_t15", type: "enToAr", textEn: "If the case is serious, call an ambulance immediately.", textAr: "إِذَا الحَالَة خَطِيرَة، اِتَّصِل بِالإِسْعَاف عَطُول." },
        ],
    },

    homework: {
        instructions:
            `Write and record a 75-90 second health story in Gaza Palestinian Arabic. Include: how you felt, what hurt, when it started, whether you had fever/cough/dizziness, what you ate or drank, whether you went to a clinic/pharmacy, what medicine you took, and what advice you got. Reuse at least 8 words from this unit and 5 old words from previous units.

Translate these sentences into Gaza Palestinian Arabic:
1. Hope you're okay. What's wrong?
2. My head has been hurting since morning.
3. I have a runny nose and a cough since yesterday.
4. I have dizziness and a fever.
5. My stomach hurts since morning.
6. I need medicine and two days of rest.
7. Take one pill twice a day.
8. I have an appointment with the doctor.
9. Is there a pharmacy near the house?
10. If the fever stays high, come back tomorrow.
11. I have an allergy to a medicine.
12. My grandfather has diabetes.
13. The nurse measured the temperature and blood pressure.
14. I cannot breathe well.
15. If the case is serious, call an ambulance immediately.`,
    },

    teacherNotes: {
        warmup: [
            "Start with: سَلَامْتَك، شُو مَالَك؟ and let the student answer with one symptom.",
            "Recycle routine and food naturally: ما أكلت، شربت قهوة، بعد الأكل، من الصبح.",
            "This unit's hidden focus is body parts, time phrases, frequency, and advice/commands.",
        ],
        vocabularySteps: [
            "Teach symptom chunks first: راسي بيجعني، بطني بيجعني، عندي كحة، عندي سخونة.",
            "Then teach places/actions: عيادة، صيدلية، دكتور، موعد، دوا.",
            "Keep emergency phrases short and clear: ما بقدر أتنفس منيح، اتصل بالإسعاف.",
        ],
        dialogueSteps: [
            "Act the dialogue in three scenes: before class, clinic, pharmacy.",
            "Ask the dialogue questions as spoken output and require full answers.",
            "Have the student replace Noor's symptoms with their own invented symptoms.",
        ],
        practiceTips: [
            "Use quick substitution drills: راسي / بطني / ضهري بيجعني.",
            "Practice instructions: خد حبة مرتين في اليوم، خدي الدوا بعد ما تاكلي، خد راحة.",
            "Do one emergency clarity drill: short sentence, no long explanation.",
        ],
        wrapup: [
            "Student explains a simple sickness without reading.",
            "Student asks for medicine at a pharmacy.",
            "Student says one emergency sentence clearly.",
        ],
        myNotes: "",
    },
};
