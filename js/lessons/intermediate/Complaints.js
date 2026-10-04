import { LESSON_ID_COMPLAINTS } from '../../constants.js';

export const lessonId = LESSON_ID_COMPLAINTS;

export const lesson = {
    meta: {
        level: "Intermediate",
        unit: "Complaints",
        lessonTitle: "Unit 12 - Making Complaints Politely in Gaza Palestinian Arabic",
        contentVersion: 2026082001,
    },

    overview: {
        title: "Unit 12 - Making Complaints Politely",
        description:
            "Students learn how to complain politely but clearly about repeated real-life problems, follow up, and ask for a practical solution in Gaza Palestinian Arabic.",
        goals: [
            "Open a complaint politely without sounding aggressive.",
            "Explain a repeated problem clearly.",
            "Ask for a clear solution, time, or person responsible.",
            "Follow up when nothing changed.",
            "Reuse apartment, opinions, transport, food, weather, health, and politeness language.",
        ],
        speakingOutcomes: [
            "By the end of this unit, the student can make a polite complaint in 60-90 seconds.",
            "The student can follow up when the same problem happens again.",
            "The student can ask for a solution and close the conversation respectfully.",
        ],
    },

    vocabulary: {
        core: [
            {
                id: "shakwa",
                ar: "شَكْوَى",
                en: "complaint",
                enArabeezy: "shakwa",
                hint: "More formal than مُشْكِلِة. Use when the problem repeats or needs official follow-up.",
                   exampleAr: "عِنْدِي شَكْوَى عَن ضَعْف الإِنْتَرْنِت.",
    exampleArabeezy: "3indi shakwa 3an Da3f el-internet.",
    exampleEn: "I have a complaint about the weak internet.",
            },
            {
                id: "mushkile",
                ar: "مُشْكِلِة",
                en: "problem",
                enArabeezy: "mushkile",
                hint: "General word. Natural opener: عِنْدِي مُشْكِلِة صْغِيرَة.",
                  exampleAr: "عِنْدِي مُشْكِلِة صْغِيرَة بِالحَنَفِيَّة.",
    exampleArabeezy: "3indi mushkile Sgheere bil-7anafiye.",
    exampleEn: "I have a small problem with the tap.",
            },
            {
                id: "baddi_a7ki_3an",
                ar: "بَدِّي أَحْكِي عَن...",
                en: "I want to talk about...",
                enArabeezy: "baddi a7ki 3an...",
                hint: "Softer than starting with أَشْتَكِي. Add the problem after it.",
                exampleAr: "بَدِّي أَحْكِي عَن مُشْكِلِة الدَّوْشَة بِاللَّيْل.",
                exampleArabeezy: "baddi a7ki 3an mushkilet ed-doshe bil-lel.",
                exampleEn: "I want to talk about the noise problem at night.",
            },
            
            {
                id: "tkararat",
                ar: "تْكَرَّرَت",
                en: "it repeated / happened again",
                enArabeezy: "tkarrarat",
                hint: "Key complaint word: the problem happened more than once.",
                exampleAr: "المُشْكِلِة تْكَرَّرَت تَلَات مَرَّات.",
                exampleArabeezy: "el-mushkile tkarrarat talat marrat.",
                exampleEn: "The problem happened three times.",
            },

            {
                id: "mish_ma32ool",
                ar: "مِش مَعْقُول",
                en: "not acceptable / unbelievable",
                enArabeezy: "mish ma32ool",
                hint: "Strong but natural. Keep your tone calm.",
                exampleAr: "مِش مَعْقول كُل يوم نِسْتَنّى ساعة.",
                exampleArabeezy: "msh m3qwl kl ywm nstna sa3a.",
                exampleEn: "It’s not acceptable to wait an hour every day.",
            },
            {
                id: "mish_mree7",
                ar: "مِش مُرِيح",
                en: "not comfortable",
                enArabeezy: "mish mree7",
                hint: "Useful and softer than angry words. Use for noise, service, apartment, or situation.",
                exampleAr: "الصَّوْت بِاللَّيْل مِش مُرِيح.",
                exampleArabeezy: "eS-Sot bil-lel mish mree7.",
                exampleEn: "The sound at night is uncomfortable.",
            },

            {
                id: "ta2kheer",
                ar: "تَأْخِير",
                en: "delay",
                enArabeezy: "ta2kheer",
                hint: "Use with bus, taxi, technician, appointment, delivery, or service.",
                exampleAr: "التَّأْخِير خَلَّانِي أُوصَل عَالدَّرْس مُتْأَخِّر.",
                exampleArabeezy: "et-ta2kheer khallani ooSal 3ad-dars mit2akhkher.",
                exampleEn: "The delay made me arrive late to class.",
            },

            {
                id: "khidme",
                ar: "خِدْمِة",
                en: "service",
                enArabeezy: "khidme",
                hint: "Use with restaurant, internet company, office, pharmacy, or transport.",
                exampleAr: "الخِدْمِة كَانَت بَطِيئَة وَالأَكْل وِصِل بَارِد.",
                exampleArabeezy: "el-khidme kanat baTee2a w el-akil wiSil bared.",
                exampleEn: "The service was slow and the food arrived cold.",
            },
            {
                id: "mostawa",
                ar: "مُسْتَوَى",
                en: "level / standard",
                enArabeezy: "mostawa",
                hint: "Use with cleanliness, service, internet, teaching.",
                exampleAr: "مُسْتَوَى الخِدْمِة مِش مْنِيح.",
                exampleArabeezy: "mostawa el-khidme mish mnee7.",
                exampleEn: "The standard of service is not good.",
            },
            {
                id: "mas2ool",
                ar: "مَسْؤُول",
                en: "person in charge / manager",
                enArabeezy: "mas2ool",
                hint: "Polite request: مُمْكِن أَحْكِي مَع المَسْؤُول؟",
                exampleAr: "لَوْ سَمَحْت، مُمْكِن أَحْكِي مَع المَسْؤُول؟",
                exampleArabeezy: "law sama7t, mumkin a7ki ma3 el-mas2ool?",
                exampleEn: "Excuse me, can I speak with the person in charge?",
            },
            {
                id: "zaboon",
                ar: "زَبُون / عَمِيل",
                en: "customer",
                enArabeezy: "zaboon / 3ameel",
                hint: "زَبُون is common in shops/restaurants. عَمِيل sounds more formal.",
               exampleAr: "أَنَا زَبُون عِنْدْكُم، وَهَادِ تَانِي مَرَّة بِصِير مَعِي نَفْس الإِشْي.",
    exampleArabeezy: "ana zaboon 3indkom, w hadi tani marra biseer ma3i nafs el-ishi.",
    exampleEn: "I'm a customer here, and this is the second time the same thing has happened to me.",
            },
            {
                id: "wa3ad",
                ar: "وَعْد / وَعَدْتُونِي",
                en: "promise / you promised me",
                enArabeezy: "wa3d / wa3adtooni",
                hint: "Useful for follow-up after an agreement.",
                 exampleAr: "وَعَدْتُونِي تِحُلُّوا المُشْكِلِة اليَوْم.",
    exampleArabeezy: "wa3adtooni ti7ollo el-mushkile el-yoom.",
    exampleEn: "You promised me you would solve the problem today.",
            },
            {
                id: "7al",
                ar: "حَلّ",
                en: "solution",
                enArabeezy: "7all",
                hint: "Ask naturally: شُو الحَلّ؟ / بَدِّي حَلّ.",
                exampleAr: "بَدِّي حَلّ، لَأَنُّه المُشْكِلِة تْكَرَّرَت.",
                exampleArabeezy: "baddi 7all, la2anno el-mushkile tkarrarat.",
                exampleEn: "I want a solution because the problem repeated.",
            },
            {
                id: "co_core_20",
                ar: "عُذْر",
                en: "excuse",
                enArabeezy: "3ozr",
                exampleAr: "كُل مَرَّة بِنِسْمَع نَفْس العُذْر.",
    exampleArabeezy: "kol marra binisma3 nafs el-3ozr.",
    exampleEn: "Every time we hear the same excuse.",
            },
            {
                id: "co_core_21",
                ar: "مَقْنِع",
                en: "convincing",
                enArabeezy: "maqne3",
                  exampleAr: "هَاد العُذْر مِش مَقْنِع.",
    exampleArabeezy: "had el-3ozr mish maqne3.",
    exampleEn: "This excuse isn't convincing.",
            },
            {
                id: "co_core_22",
                ar: "يِتْجاهَل",
                en: "to ignore",
                enArabeezy: "yitjāhal",
                  exampleAr: "حَكَيْنَا مَعَه أَكْتَر مِن مَرَّة، بَس حَاسِس إِنُّه بِتْجاهَل المُشْكِلِة.",
    exampleArabeezy: "7akaina ma3o aktar min marra, bas 7ases inno bitjahal el-mushkile.",
    exampleEn: "We talked to him more than once, but I feel he's ignoring the problem.",
            },
            {
                id: "btigdar_tshoofha",
                ar: "بِتِقْدَر تِشُوفْهَا؟",
                en: "Can you check it?",
                enArabeezy: "btigdar tshoofha?",
                hint: "To a woman: بِتِقْدَرِي تِشُوفِيهَا؟ Use it for repair problems.",
                 exampleAr: "المُكَيِّف مِش شَغَّال، بِتِقْدَر تِشُوفْهَا؟",
    exampleArabeezy: "el-mkayef mish shaghghal, btigdar tshoofha?",
    exampleEn: "The air conditioner isn't working. Can you check it?",
            },
            {
                id: "min_7aqqi",
                ar: "مِن حَقِّي",
                en: "it's my right",
                enArabeezy: "min 7aqqi",
                hint: "Use when something was agreed or paid for.",
                exampleAr: "مِن حَقِّي أَسْكُن فِي شَقَّة نْضِيفَة وَهَادْيَة.",
                exampleArabeezy: "min 7aqqi askon fi sha2qa nDeefe w hadye.",
                exampleEn: "It is my right to live in a clean and quiet apartment.",
            },
            {
                id: "zay_ma_itafaqna",
                ar: "زَيّ مَا اتَّفَقْنَا",
                en: "as we agreed",
                enArabeezy: "zay ma ittafa2na",
                hint: "Useful after a deal, appointment, rent agreement, or repair promise.",
                exampleAr: "التَّصْلِيح مَا صَار زَيّ مَا اتَّفَقْنَا.",
                exampleArabeezy: "et-taSli7 ma Sar zay ma ittafa2na.",
                exampleEn: "The repair did not happen as we agreed.",
            },
            {
                id: "ma_sar_ishi",
                ar: "مَا صَار إِشِي",
                en: "nothing happened / nothing was done",
                enArabeezy: "ma Sar ishi",
                hint: "Follow-up complaint after waiting.",
                 exampleAr: "حَكَيْنَا مَعَاكُمْ اِمْبَارِح، وَلِسَّا مَا صَار إِشِي.",
    exampleArabeezy: "7akaina ma3akom embare7, w lissa ma Sar ishi.",
    exampleEn: "We talked to you yesterday, and still nothing was done.",
            },
            {
                id: "co_extra_5",
                ar: "تَعْويض",
                en: "compensation",
                enArabeezy: "ta3weeD",
                exampleAr: "طَلَبْنا تَعْويض بَسِيط عَالخَسارَة.",
                exampleArabeezy: "tlbna t3wyd bsyt 3alkhsara.",
                exampleEn: "We asked for a small compensation for the loss.",
            },
           

            {
                id: "mish_7all",
                ar: "هَادَا مِش حَلّ",
                en: "this is not a solution",
                enArabeezy: "hada mish 7all",
                hint: "Use when the offered answer is not enough.",
                exampleAr: "إِنَّك تِحْكِيلي اِسْتَنَّى أُسْبُوع، هَادَا مِش حَلّ.",
                exampleArabeezy: "innak ti7keeli istanna osboo3, hada mish 7all.",
                exampleEn: "Telling me to wait a week is not a solution.",
            },
            {
                id: "ma3leesh_3al_iz3aj",
                ar: "معلش عَالإِزْعَاج",
                en: "sorry for the bother",
                enArabeezy: "ma3leesh 3al-iz3aj",
                hint: "Useful before a complaint with a neighbour, landlord, office, or restaurant.",
                exampleAr: "معلش عَالإِزْعَاج، بَس فِي دَوْشَة كْتِير.",
                exampleArabeezy: "ma3leesh 3al-iz3aj, bas fi doshe kteer.",
                exampleEn: "Sorry for the bother, but there is a lot of noise.",
            },
            {
                id: "mish_qasdi_az3alak",
                ar: "مِش قَصْدِي أَزْعَلَك",
                en: "I don't mean to upset you",
                enArabeezy: "mish qaSdi az3alak",
                hint: "To a woman: أَزْعَلِك. To a group: أَزْعَلْكُم.",
                exampleAr: "مِش قَصْدِي أَزْعَلَك، بَس الصَّوْت عَالِي.",
                exampleArabeezy: "mish qaSdi az3alak, bas eS-Sot 3ali.",
                exampleEn: "I don't mean to upset you, but the sound is loud.",
            },
            {
                id: "fik_tkhafef",
                ar: "ممكن توطي الصَّوْت شُوَي؟",
                en: "Can you lower the sound a little?",
                enArabeezy: "feek tkhafef eS-Sot shway?",
                hint: "To a woman: فِيكِي. To a group: فِيكُم.",
                exampleAr: "لَوْ سَمَحْت، ممكن توطي الصَّوْت شُوَي؟",
                exampleArabeezy: "law sama7t, feek tkhafef eS-Sot shway?",
                exampleEn: "Please, can you lower the sound a little?",
            },
            {
                id: "sam7ni",
                ar: "سَامِحْنِي / سَامْحِينِي",
                en: "forgive me / sorry",
                enArabeezy: "sami7ni / sam7eeni",
                hint: "Natural apology. Also: سَامْحُونِي to a group.",
                exampleAr: "سَامِحْنِي عَالتَّأْخِير، البَاص كَان مُتْأَخِّر.",
                exampleArabeezy: "sami7ni 3at-ta2kheer, el-baS kan mit2akhkher.",
                exampleEn: "Sorry for the delay, the bus was late.",
            },

        ],
    },

    dialogue: {
        title: "Apartment Problems - Calling the Landlord",
        setting: "Rami calls Abu Ahmad about the internet and heating problems. Mona helps him explain the situation clearly and politely.",
        lines: [
            { speaker: "Rami", ar: "أَلُو، أَبُو أَحْمَد؟ يِعْطِيك العَافْيَة.", arArabeezy: "alo, abu a7mad? ya3teek el-3afyeh.", en: "Hello, Abu Ahmad? Hope you're well." },
            { speaker: "Abu Ahmad", ar: "الله يْعَافِيك يَا رَامِي، تْفَضَّل.", arArabeezy: "allah y3afeek ya rami, tfaDDal.", en: "Thanks, Rami. Go ahead." },
            { speaker: "Rami", ar: "مَعَلِّش عَالإِزْعَاج، بَس بَدِّي أَحْكِي مَعَك بِخُصُوص الإِنْتَرْنِت وَالتَّدْفِئَة.", arArabeezy: "ma3allish 3al-iz3aj, bas baddi a7ki ma3ak bkhSoos el-internet w et-tadfi2a.", en: "Sorry to bother you, but I want to talk to you about the internet and the heating." },
            { speaker: "Abu Ahmad", ar: "خَيْر؟ لِسَّه فِي مُشْكِلَة؟", arArabeezy: "kheir? lissa fi moshkile?", en: "What’s wrong? Is there still a problem?" },
            { speaker: "Rami", ar: "آه وَالله، نَفْس المُشْكِلَة لِسَّه مَوْجُودَة. الفَنِّي مَا إِجَاش، وَإِحْنَا مُسْتَنِّيِين مِن الضُّهُر.", arArabeezy: "ah wallah, nafs el-moshkile lissa mawjoode. el-fanni ma ijash, w i7na mistanniyin min eD-Duher.", en: "Yes, the same problem is still there. The technician didn’t come, and we’ve been waiting since noon." },
            { speaker: "Abu Ahmad", ar: "عَنْجَد؟ أَنَا حَكِيت مَعُه الصُّبُح وَحَكَالِي إِنُّه جَاي.", arArabeezy: "3anjad? ana 7akeet ma3o eS-Sobo7 w 7akali inno jay.", en: "Really? I spoke with him in the morning and he told me he was coming." },
            { speaker: "Rami", ar: "آه، فَاهِم عَلَيْك، بَس عَلَى أَرْض الوَاقِع مَا صَار إِشِي.", arArabeezy: "ah, fahem 3aleik, bas 3ala arD el-waqe3 ma Sar ishi.", en: "Yes, I understand, but in reality nothing happened." },
            { speaker: "Mona", ar: "قُلُّه عِنْدِي دَرْس أُونْلَايْن السَّاعَة سَبْعَة.", arArabeezy: "ollo 3indi dars online es-sa3a sab3a.", en: "Tell him I have an online lesson at seven." },
            { speaker: "Rami", ar: "وَكَمَان مُونَا عِنْدَهَا دَرْس أُونْلَايْن بَعْد شُوَي، وَالنِّت ضَعِيف جِدًّا.", arArabeezy: "w kaman mona 3indaha dars online ba3d shway, w en-net Da3eef jiddan.", en: "Also, Mona has an online lesson soon, and the internet is very weak." },
            { speaker: "Abu Ahmad", ar: "طَيِّب سَامْحُونِي، شَكْلُه اِتْأَخَّر بِمِشْوَار تَانِي.", arArabeezy: "Tayyib sam7ooni, shaklo it2akhkhar bmishwar tani.", en: "Okay, forgive me. It looks like he got delayed with another errand." },
            { speaker: "Rami", ar: "وَلَا يْهِمَّك، إِحْنَا مُقَدِّرِين، بَس المُشْكِلَة إِنَّهَا تْكَرَّرَت أَكْتَر مِن مَرَّة.", arArabeezy: "wala yhimmak, i7na m2addreen, bas el-moshkile innaha tkarrarat aktar min marra.", en: "No worries, we understand, but the problem is that this has happened more than once." },
            { speaker: "Abu Ahmad", ar: "مَعَك حَقّ.", arArabeezy: "ma3ak 7a2.", en: "You’re right." },
            { speaker: "Rami", ar: "إِمْبَارِح كَمَان اِسْتَنِّينَا، وَاليَوْم مِن الضُّهُر وَإِحْنَا بِنِسْتَنَّى. هَيْك المَوْضُوع صَار مُزْعِج.", arArabeezy: "embare7 kaman istannena, w el-yom min eD-Duher w i7na binistanna. hek el-mawDoo3 Sar miz3ij.", en: "Yesterday we waited too, and today we’ve been waiting since noon. This has become annoying." },
            { speaker: "Mona", ar: "وَالتَّدْفِئَة مِش شَغَّالَة، وَبِاللَّيْل الشَّقَّة بْتِصِير بَرْد.", arArabeezy: "w et-tadfi2a mish shaghghale, w bil-leil esh-sha22a btSeer bard.", en: "And the heating isn’t working, and at night the apartment gets cold." },
            { speaker: "Rami", ar: "وَكَمَان التَّدْفِئَة مِش شَغَّالَة. بِاللَّيْل الشَّقَّة بْتِصِير بَارْدَة، وَمِش مُرِيح الوَضْع.", arArabeezy: "w kaman et-tadfi2a mish shaghghale. bil-leil esh-sha22a btSeer barde, w mish mree7 el-waD3.", en: "And the heating isn’t working either. At night the apartment gets cold, and the situation isn’t comfortable." },
            { speaker: "Abu Ahmad", ar: "تَمَام، خَلِّينِي أَرِنّ عَلَيْه هَلَّق.", arArabeezy: "tamam, khallini arinn 3aleih halla2.", en: "Okay, let me call him now." },
            { speaker: "Mona", ar: "اِسْأَلُه بِالزَّبْط إِمْتَى، مِش بَس يِحْكِي إِنُّه جَاي.", arArabeezy: "is2alo biz-zabt imta, mish bas yi7ki inno jay.", en: "Ask him exactly when, not just say that he’s coming." },
            { speaker: "Rami", ar: "لَو سَمَحْت يَا أَبُو أَحْمَد، بَدْنَا وَقْت مُحَدَّد. يَعْنِي إِمْتَى بِالزَّبْط بِقْدَر يِيجِي؟", arArabeezy: "law sama7t ya abu a7mad, baddna wa2t m7addad. ya3ni imta biz-zabt bi2dar yeeji?", en: "Please, Abu Ahmad, we need a specific time. I mean, exactly when can he come?" },
            { speaker: "Abu Ahmad", ar: "تَمَام، خَمْس دَقَايِق وَبَرْجَعْلَك.", arArabeezy: "tamam, khams da2aye2 w barja3lak.", en: "Okay, five minutes and I’ll get back to you." },
            { speaker: "Rami", ar: "تَمَام، بِنِسْتَنَّى رَدَّك.", arArabeezy: "tamam, binistanna raddak.", en: "Okay, we’ll wait for your reply." },
            { speaker: "Mona", ar: "إِذَا مَا رَدّ، بَدْنَا حَلّ تَانِي. مِش مَعْقُول نِضَلّ نِسْتَنَّى كُلّ يَوْم.", arArabeezy: "iza ma radd, baddna 7all tani. mish ma32ool niDall nistanna kol yom.", en: "If he doesn’t respond, we need another solution. We can’t keep waiting every day." },
            { speaker: "Rami", ar: "صَحّ، بَس خَلِّينَا نْشُوف شُو بَدُّه يِحْكِي.", arArabeezy: "Sa77, bas khallina nshoof shoo baddo yi7ki.", en: "True, but let’s see what he says." },
            { speaker: "Abu Ahmad", ar: "رَامِي؟", arArabeezy: "rami?", en: "Rami?" },
            { speaker: "Rami", ar: "أَه، مَعَك.", arArabeezy: "ah, ma3ak.", en: "Yes, I’m with you." },
            { speaker: "Abu Ahmad", ar: "حَكِيت مَع الفَنِّي. بِيحْكِي إِنُّه بِيوصَل خِلَال نُصّ سَاعَة.", arArabeezy: "7akeet ma3 el-fanni. bi7ki inno byoSal khilal noSS sa3a.", en: "I spoke with the technician. He says he’ll arrive within half an hour." },
            { speaker: "Rami", ar: "تَمَام، مَشْكُور. بَس مُمْكِن تَبْعَتْلِي رِسَالَة بِالوَقْت؟ عَشَان يِكُون كُلّ إِشِي وَاضِح.", arArabeezy: "tamam, mashkoor. bas mumkin tab3atli risale bil-wa2t? 3ashan ykoon kol ishi waDe7.", en: "Okay, thank you. Could you send me a message with the time, so everything is clear?" },
            { speaker: "Abu Ahmad", ar: "أَكِيد، هَلَّق بَبْعَتْلَك.", arArabeezy: "akeed, halla2 bab3atlak.", en: "Of course, I’ll send it to you now." },
            { speaker: "Rami", ar: "يِعْطِيك العَافْيَة. وَإِذَا مَا إِجَاش خِلَال نُصّ سَاعَة، شُو الحَلّ؟", arArabeezy: "ya3teek el-3afyeh. w iza ma ijash khilal noSS sa3a, shoo el-7all?", en: "Thanks. And if he doesn’t come within half an hour, what’s the solution?" },
            { speaker: "Abu Ahmad", ar: "إِذَا مَا إِجَاش، بَبْعَتْلَك فَنِّي تَانِي بِالمَسَا.", arArabeezy: "iza ma ijash, bab3atlak fanni tani bil-masa.", en: "If he doesn’t come, I’ll send you another technician in the evening." },
            { speaker: "Rami", ar: "تَمَام. هَيْك أَحْسَن. إِحْنَا مِش بَدْنَا نْكَبِّر المَوْضُوع، بَس بَدْنَا حَلّ وَاضِح.", arArabeezy: "tamam. hek a7san. i7na mish baddna nkabbir el-mawDoo3, bas baddna 7all waDe7.", en: "Okay. That’s better. We don’t want to make a big issue out of it, but we need a clear solution." },
            { speaker: "Mona", ar: "وَقُلُّه إِذَا ضَلَّت المُشْكِلَة، بَدْنَا نِحْكِي بِالإِيجَار.", arArabeezy: "w ollo iza Dallat el-moshkile, baddna ni7ki bil-ijar.", en: "And tell him if the problem continues, we need to talk about the rent." },
            { speaker: "Rami", ar: "وَكَمَان يَا أَبُو أَحْمَد، إِذَا ضَلَّت نَفْس المُشْكِلَة بَعْد اليَوْم، لَازِم نِحْكِي بِمَوْضُوع الإِيجَار.", arArabeezy: "w kaman ya abu a7mad, iza Dallat nafs el-moshkile ba3d el-yom, lazem ni7ki bmawDoo3 el-ijar.", en: "Also, Abu Ahmad, if the same problem continues after today, we need to talk about the rent." },
            { speaker: "Abu Ahmad", ar: "مِن حَقِّكُم. إِذَا مَا انْحَلَّت اليَوْم، بَخْصِم لَكُم مِن إِيجَار هَالشَّهْر.", arArabeezy: "min 7a22kom. iza ma in7allat el-yom, bakhSim lakom min ijar hal-shaher.", en: "That’s your right. If it isn’t fixed today, I’ll deduct from this month’s rent." },
            { speaker: "Rami", ar: "مَشْكُور، هَيْك الكَلَام وَاضِح.", arArabeezy: "mashkoor, hek el-kalam waDe7.", en: "Thank you. That’s clear." },
            { speaker: "Abu Ahmad", ar: "وَلَا يْهِمَّكُم، وَسَامْحُونِي عَالتَّأْخِير.", arArabeezy: "wala yhimmakom, w sam7ooni 3at-ta2kheer.", en: "Don’t worry, and sorry for the delay." },
            { speaker: "Rami", ar: "وَلَا يْهِمَّك. إِحْنَا بَس بَدْنَا نِعْرَف شُو الخُطَّة، عَشَان نْرَتِّب حَالْنَا.", arArabeezy: "wala yhimmak. i7na bas baddna ni3raf shoo el-khoTTe, 3ashan nrattib 7alna.", en: "No worries. We just want to know the plan so we can organize ourselves." },
            { speaker: "Abu Ahmad", ar: "تَمَام، الرِّسَالَة بْتُوصَلَك هَلَّق.", arArabeezy: "tamam, er-risale btooSalak halla2.", en: "Okay, the message will reach you now." },
            { speaker: "Rami", ar: "يِعْطِيك العَافْيَة. مَع السَّلَامَة.", arArabeezy: "ya3teek el-3afyeh. ma3 es-salame.", en: "Thank you. Goodbye." },
            { speaker: "Abu Ahmad", ar: "الله مَعْكُم.", arArabeezy: "allah ma3kom.", en: "God be with you." },
            { speaker: "Mona", ar: "إِنْ شَاء الله يِيجِي قَبْل الدَّرْس. مِش نَاقْصْنَا تَأْخِير كَمَان.", arArabeezy: "inshallah yeeji 2abl ed-dars. mish na2iSna ta2kheer kaman.", en: "God willing, he comes before the lesson. We really don’t need more delay." },
            { speaker: "Rami", ar: "إِنْ شَاء الله. وَإِذَا زَبَطَت، بِنْحْكِيلُه مَشْكُور.", arArabeezy: "inshallah. w iza zabaTat, bin7keelo mashkoor.", en: "God willing. If it works out, we’ll thank him." },
            { speaker: "Mona", ar: "وَإِذَا مَا زَبَطَت؟", arArabeezy: "w iza ma zabaTat?", en: "And if it doesn’t work out?" },
            { speaker: "Rami", ar: "بِنْكَلْمُه بُكْرَة وَبِنْحْكِي بِوُضُوح: المُشْكِلَة لِسَّه مَوْجُودَة، وَلَازِم حَلّ نِهَائِي.", arArabeezy: "binkalmo bokra w bin7ki biwoDoo7: el-moshkile lissa mawjoode, w lazem 7all nihai.", en: "We’ll call him tomorrow and say clearly: the problem is still there, and we need a final solution." },
            { speaker: "Mona", ar: "مَزْبُوط. هَيْك أَحْسَن مِن إِنَّا نِضَلّ سَاكْتِين.", arArabeezy: "mazbooT. hek a7san min inna niDall saktin.", en: "Exactly. That’s better than staying silent." },
            { speaker: "Rami", ar: "آه، الوَاحِد يِحْكِي بِأَدَب، بَس بَرْضُه يِكُون وَاضِح.", arArabeezy: "ah, el-wa7ad yi7ki bi2adab, bas barDo ykoon waDe7.", en: "Yes, a person should speak politely, but also be clear." }
        ],

        questions: [
            { ar: "مَع مِين رَامِي كَان بِيحْكِي بِالتِّلِفُون؟", en: "Who was Rami talking to on the phone?" },
            { ar: "عَن أَي مُشْكِلْتِين رَامِي اِشْتَكَى؟", en: "What two problems did Rami complain about?" },
            { ar: "لِيش رَامِي وَمُونَا كَانُوا مُسْتَعْجِلِين عَلَى حَلّ مُشْكِلَة الإِنْتَرْنِت؟", en: "Why were Rami and Mona in a hurry to solve the internet problem?" },
            { ar: "مِن إِمْتَى كَانُوا مُسْتَنِّيِين الفَنِّي؟", en: "Since when had they been waiting for the technician?" },
            { ar: "شُو قَالَت مُونَا لِرَامِي يِطْلُب مِن أَبُو أَحْمَد؟", en: "What did Mona tell Rami to ask Abu Ahmad for?" },
            { ar: "لِيش رَامِي طَلَب وَقْت مُحَدَّد؟", en: "Why did Rami ask for a specific time?" },
            { ar: "شُو وَعَد أَبُو أَحْمَد يِعْمَل إِذَا الفَنِّي مَا إِجَاش؟", en: "What did Abu Ahmad promise to do if the technician didn’t come?" },
            { ar: "شُو طَلَب رَامِي بِخُصُوص الرِّسَالَة؟", en: "What did Rami ask for regarding the message?" },
            { ar: "لِيش رَامِي حَكَى عَن الإِيجَار؟", en: "Why did Rami talk about the rent?" },
            { ar: "كِيف كَان أُسْلُوب رَامِي: عَصَبِي وَلَّا مُؤَدَّب وَوَاضِح؟", en: "How was Rami’s style: angry, or polite and clear?" },
            { ar: "شُو الخُطَّة إِذَا المُشْكِلَة مَا انْحَلَّت؟", en: "What is the plan if the problem is not solved?" },
            { ar: "شُو الجُمْلَة اللِّي بْتِلَخِّص طَرِيقَة الشَّكْوَى فِي الحِوَار؟", en: "What sentence summarizes the way to complain in the dialogue?" }
        ],
    },

    grammar: [
        {
            title: "1. The spoken past tense: the full pattern",
            short: "Tell exactly who did what",
            description: "The Palestinian past is built from a completed verb stem plus a person ending. The endings carry the subject, so the pronoun can be omitted when it is already clear. The table uses حكى (to speak/tell), a very common verb in complaints.",
            table: {
                title: "حكى in the past",
                headers: ["Subject", "Palestinian Arabic", "Arabizi", "Ending"],
                rows: [
                    ["I", "أنا حكيت", "ana 7akeet", "ـيت"],
                    ["you (m.)", "إنت حكيت", "inta 7akeet", "ـيت"],
                    ["you (f.)", "إنتِ حكيتي", "inti 7akeeti", "ـيتي"],
                    ["he", "هو حكى", "huwwe 7aka", "base form"],
                    ["she", "هي حكت", "hiyye 7akat", "ـت"],
                    ["we", "إحنا حكينا", "i7na 7akeena", "ـينا"],
                    ["you (pl.)", "إنتو حكيتوا", "intu 7akeetu", "ـيتوا"],
                    ["they", "همّ حكوا", "humme 7aku", "ـوا"],
                ],
            },
            examples: [
                { ar: "أنا حكيت مع المسؤول امبارح.", arabeezy: "ana 7akeet ma3 el-mas2ool embare7.", en: "I spoke with the person in charge yesterday." },
                { ar: "هي حكت إنّ المشكلة تكررت.", arabeezy: "hiyye 7akat inn el-mushkile tkarrarat.", en: "She said that the problem happened again." },
                { ar: "إحنا حكينا معهم، بس ما ردّوا.", arabeezy: "i7na 7akeena ma3hom, bas ma raddu.", en: "We spoke with them, but they did not respond." },
            ],
            commonMistakes: [
                "حكيت can mean ‘I spoke’ or ‘you (m.) spoke’; context or the stated pronoun identifies the person.",
                "Do not add a separate subject pronoun after the verb as if copying English word order.",
            ],
            exercises: [
                { prompt: "Complete: ‘She spoke with the manager.’ هي ___ مع المدير.", options: ["حكت", "حكيت", "حكوا", "حكينا"], correct: "حكت", explanation: "The feminine singular past ending is ـت." },
                { prompt: "Choose: ‘We complained yesterday.’", options: ["إحنا اشتكينا امبارح.", "إحنا اشتكيتوا امبارح.", "إحنا اشتكت امبارح.", "إحنا بشتكي امبارح."], correct: "إحنا اشتكينا امبارح.", explanation: "The first-person plural past ends in ـنا." },
                { prompt: "Who does حكوا refer to?", options: ["they", "she", "I", "you (f.)"], correct: "they", explanation: "The plural past ending ـوا marks ‘they.’" },
            ],
        },
        {
            title: "2. High-frequency irregular past verbs",
            short: "Recognize the verbs that do not follow one neat model",
            description: "Some of the most useful spoken verbs change their internal shape in the past. Learn them as small families, not as isolated vocabulary. These forms are essential when explaining what happened before a complaint.",
            table: {
                title: "Common changing verbs",
                headers: ["Meaning", "he", "she", "I", "they"],
                rows: [
                    ["was", "كان", "كانت", "كنت", "كانوا"],
                    ["came", "إجا", "إجت", "إجيت", "إجوا"],
                    ["went", "راح", "راحت", "رحت", "راحوا"],
                    ["gave", "أعطى", "أعطت", "أعطيت", "أعطوا"],
                    ["took", "أخد", "أخدت", "أخدت", "أخدوا"],
                ],
            },
            examples: [
                { ar: "الفنّي إجا، بس ما صلّح العطل.", arabeezy: "el-fanni ija, bas ma Salla7 el-3oTol.", en: "The technician came, but he did not fix the fault." },
                { ar: "رحت عالمحلّ وأعطيتهم الفاتورة.", arabeezy: "ri7t 3al-ma7all w a3Teethom el-fatoora.", en: "I went to the shop and gave them the receipt." },
                { ar: "كانوا عارفين بالمشكلة من الأسبوع الماضي.", arabeezy: "kanu 3arfeen bil-mushkile min el-osboo3 el-maDi.", en: "They knew about the problem since last week." },
            ],
            commonMistakes: [
                "The past of ييجي is إجا, not a mechanically prefixed form.",
                "In Gaza speech أخد is common; do not force the formal أخذ pronunciation into the dialogue.",
            ],
            exercises: [
                { prompt: "Complete: ‘The technician came yesterday.’ الفنّي ___ امبارح.", options: ["إجا", "إجت", "إجيت", "بييجي"], correct: "إجا", explanation: "إجا is the masculine singular past of ييجي." },
                { prompt: "Choose: ‘They went to the office.’", options: ["راحوا عالمكتب.", "رحت عالمكتب.", "راحت عالمكتب.", "بروحوا عالمكتب."], correct: "راحوا عالمكتب.", explanation: "راحوا is the third-person plural past." },
                { prompt: "Complete: هي ___ الفاتورة للموظف.", options: ["أعطت", "أعطى", "أعطيت", "أعطوا"], correct: "أعطت", explanation: "هي takes the feminine past form أعطت." },
            ],
        },
        {
            title: "3. Indirect object pronouns: to me, to you, to them",
            short: "Attach the receiver to the verb",
            description: "Palestinian Arabic often attaches the person receiving information or a thing directly to the verb: حكالي ‘he told me’, بعتلك ‘I sent you’, رجعولنا ‘they returned to us’. The exact verb tells the action; the final suffix tells who received it.",
            table: {
                title: "Receiver suffixes with حكى",
                headers: ["Receiver", "Suffix", "Example", "Meaning"],
                rows: [
                    ["to me", "ـلي", "حكالي", "he told me"],
                    ["to you (m.)", "ـلك", "حكالك", "he told you"],
                    ["to you (f.)", "ـلِك", "حَكَالِك", "he told you"],
                    ["to him", "ـله", "حكاله", "he told him"],
                    ["to her", "ـلها", "حكالها", "he told her"],
                    ["to us", "ـلنا", "حكالنا", "he told us"],
                    ["to you (pl.)", "ـلكم", "حكالكم", "he told you all"],
                    ["to them", "ـلهم", "حكالهم", "he told them"],
                ],
            },
            examples: [
                { ar: "الموظف حكالي إنّه رح يتابع الموضوع.", arabeezy: "el-mwaZZaf 7akali inno ra7 yitabe3 el-mawDoo3.", en: "The employee told me he would follow up on the issue." },
                { ar: "بعتنالهم الصور والفاتورة.", arabeezy: "ba3atnalhom eS-Sowar wil-fatoora.", en: "We sent them the photos and the receipt." },
                { ar: "ليش ما رجّعتولنا المصاري؟", arabeezy: "leish ma rajja3tulna el-maSari?", en: "Why did you not return the money to us?" },
            ],
            commonMistakes: [
                "Do not confuse حكالي ‘he told me’ with حكيتله ‘I told him’; both the verb ending and receiver suffix matter.",
                "In fast speech, several parts join into one word. Read it from the outside: action first, receiver at the end.",
            ],
            exercises: [
                { prompt: "What does حكالي mean?", options: ["He told me.", "I told him.", "They told us.", "She told them."], correct: "He told me.", explanation: "حكى is ‘he spoke/told’ and ـلي is ‘to me.’" },
                { prompt: "Choose: ‘We sent them the complaint.’", options: ["بعتنالهم الشكوى.", "بعتولنا الشكوى.", "بعتلي الشكوى.", "بعتلها الشكوى."], correct: "بعتنالهم الشكوى.", explanation: "بعتنا = we sent; ـلهم = to them." },
                { prompt: "Complete: الموظفة رجّعت___ المصاري. ‘The employee returned the money to us.’", options: ["لنا", "لهم", "لك", "لي"], correct: "لنا", explanation: "ـلنا marks the receiver ‘to us.’" },
            ],
        },
        {
            title: "4. Sequencing a clear complaint",
            short: "Move from the first event to the unresolved result",
            description: "A useful complaint follows a timeline: say when the problem started, what you did, what they promised, and what still has not happened. أول إشي, بعدين, بعدها, and لهلّق prevent the listener from getting lost.",
            table: {
                title: "Complaint timeline",
                headers: ["Stage", "Spoken marker", "Purpose"],
                rows: [
                    ["start", "أول إشي / من يوم...", "when it began"],
                    ["next action", "بعدين", "what you did next"],
                    ["following event", "بعدها", "their response or another event"],
                    ["repetition", "كل مرة / رجعت تكررت", "show it is not isolated"],
                    ["unresolved now", "لهلّق / لحدّ هسّا", "connect the past to the present"],
                ],
            },
            examples: [
                { ar: "أول إشي اتصلت فيهم، وبعدين بعتتلهم الصور.", arabeezy: "awwal ishi itSalt feehom, w ba3dein ba3attilhom eS-Sowar.", en: "First I called them, and then I sent them the photos." },
                { ar: "وعدوني ييجوا الخميس، بس ما حدا إجا.", arabeezy: "wa3aduni yeeju el-khamees, bas ma 7ada ija.", en: "They promised me they would come Thursday, but nobody came." },
                { ar: "المشكلة رجعت تكررت، ولهلّق ما انحلّت.", arabeezy: "el-mushkile rij3at tkarrarat, w la-halla2 ma in7allat.", en: "The problem happened again, and it still has not been solved." },
            ],
            commonMistakes: [
                "Do not list unrelated details. Keep only facts that explain the problem, previous contact, and missing solution.",
                "لهلّق points to the current unresolved state; it is not just another word for امبارح.",
            ],
            exercises: [
                { prompt: "Choose the best marker for an unresolved problem now.", options: ["لهلّق", "امبارح", "أول إشي", "بعد بكرة"], correct: "لهلّق", explanation: "لهلّق means ‘up to now / still.’" },
                { prompt: "Put the complaint in a logical order.", options: ["أول إشي اتصلت، بعدين بعتت الصور، ولهلّق ما ردّوا.", "لهلّق ما ردّوا، أول إشي، بعدين.", "بعدين أول إشي ما ردّوا.", "اتصلت لهلّق قبل أول إشي."], correct: "أول إشي اتصلت، بعدين بعتت الصور، ولهلّق ما ردّوا.", explanation: "It moves from first action to next action to the present result." },
                { prompt: "Complete: وعدوني يصلّحوه السبت، ___ ما حدا إجا.", options: ["بس", "لأنه", "عشان هيك", "وبعدين لأنه"], correct: "بس", explanation: "بس contrasts the promise with what actually happened." },
            ],
        },
        {
            title: "5. From complaint to a practical solution",
            short: "Be polite, specific, and firm",
            description: "A successful complaint does more than describe frustration. Open politely, state the repeated problem, then request a concrete action or deadline. ممكن أعرف... is softer; بدي حلّ واضح is firm; ضروري... communicates urgency without insulting the listener.",
            table: {
                title: "Complaint strength",
                headers: ["Function", "Natural phrase", "Use"],
                rows: [
                    ["polite opening", "لو سمحت، عندي مشكلة", "begin calmly"],
                    ["follow-up", "أنا حكيت معكم قبل هيك", "show prior contact"],
                    ["ask for information", "ممكن أعرف إمتى...؟", "request a deadline"],
                    ["firm request", "بدي حلّ واضح اليوم", "ask for action"],
                    ["urgent but respectful", "ضروري ينحلّ الموضوع", "stress urgency"],
                ],
            },
            examples: [
                { ar: "لو سمحت، أنا حكيت معكم قبل هيك عن نفس المشكلة.", arabeezy: "law sama7t, ana 7akeet ma3kom qabl hek 3an nafs el-mushkile.", en: "Excuse me, I spoke with you before about the same problem." },
                { ar: "ممكن أعرف إمتى الفنّي رح ييجي بالزبط؟", arabeezy: "mumkin a3raf emta el-fanni ra7 yeeji biz-zabT?", en: "Could I know exactly when the technician will come?" },
                { ar: "أنا مقدّر وضعكم، بس ضروري ينحلّ الموضوع اليوم.", arabeezy: "ana mqadder waD3kom, bas Daroori yin7all el-mawDoo3 el-yom.", en: "I understand your situation, but this issue must be solved today." },
            ],
            commonMistakes: [
                "Polite does not mean vague. Ask who will act and when.",
                "Avoid opening with threats; first give the listener a clear chance to solve the problem.",
            ],
            exercises: [
                { prompt: "Choose the clearest polite request for a deadline.", options: ["ممكن أعرف إمتى رح تخلّصوا؟", "شو هالخدمة؟", "خلص بكفي.", "إنتو دايمًا هيك."], correct: "ممكن أعرف إمتى رح تخلّصوا؟", explanation: "It asks for specific information without attacking the listener." },
                { prompt: "Complete: أنا مقدّر وضعكم، ___ ضروري ينحلّ الموضوع.", options: ["بس", "لأنه", "ولا", "من"], correct: "بس", explanation: "بس balances understanding with a firm request." },
                { prompt: "Which complaint gives the listener a concrete action?", options: ["بدي تبدّلوا القطعة اليوم.", "أنا زعلان.", "الخدمة سيئة.", "مش معقول."], correct: "بدي تبدّلوا القطعة اليوم.", explanation: "It states both the requested action and the time." },
            ],
        },
    ],

    microChecks: {
        enabled: true,
        every: 5,
        items: [
            {
                "id": "comp_mc1",
                "type": "reorder",
                "prompt": "Reorder the Arabic words to match: I want to talk about the noise problem at night.",
                "options": [
                    "بِاللَّيْل",
                    "عَن",
                    "بَدِّي",
                    "الدَّوْشَة",
                    "مُشْكِلِة",
                    "أَحْكِي"
                ],
                "correct": [
                    "بَدِّي",
                    "أَحْكِي",
                    "عَن",
                    "مُشْكِلِة",
                    "الدَّوْشَة",
                    "بِاللَّيْل"
                ]
            },
            {
                "id": "comp_mc2",
                "type": "choose",
                "prompt": "Choose the Palestinian Arabic sentence for: The service was slow and the food arrived cold.",
                "options": [
                    "الخِدْمِة كَانَت بَطِيئَة وَالأَكْل وِصِل بَارِد.",
                    "الأَكْل كَان سُخْن وَالخِدْمِة سَرِيعَة.",
                    "بَدِّي أَحْكِي عَن مُشْكِلِة الدَّوْشَة.",
                    "الزَّلَمَة وَقَع عَالْأَرْض."
                ],
                "correct": "الخِدْمِة كَانَت بَطِيئَة وَالأَكْل وِصِل بَارِد."
            }
            ,
            {
                id: "comp_mc3",
                type: "match",
                prompt: "Review 11-15: Choose the polite sentence for speaking to the person in charge.",
                options: ["مُمْكِن أَحْكِي مَع المَسْؤُول؟", "الأَكْل وِصِل بَارِد.", "البَاص مُتْأَخِّر.", "أَنَا زَبُون."],
                correct: "مُمْكِن أَحْكِي مَع المَسْؤُول؟",
            },
            {
                "id": "comp_mc4",
                "type": "complete",
                "prompt": "Complete the Arabic sentence for: I feel like they are ignoring the problem.\nحَاسَّة إنّهُم عَم ___ المَشْكِلَة.",
                "options": [
                    "يِتْجَاهَلُوا",
                    "يِحِلُّوا",
                    "يِفْهَمُوا",
                    "يِكْتُبُوا"
                ],
                "correct": "يِتْجَاهَلُوا"
            }
            ,
            {
                id: "comp_mc5",
                type: "complete",
                prompt: "Review 21-25: حَكَيْنَا اِمْبَارِح، بَس لِسَّا ___.",
                options: ["مَا صَار إِشِي", "دَوْشَة", "خِدْمِة", "لِسَّا"],
                correct: "مَا صَار إِشِي",
            },
            
        ],
    },

    practice: {
        showRealUse: false,
        showWriting: false,
        separateExerciseTypes: true,
        quiz: [
            {
                id: "comp_q1",
                questionAr: "Choose when to use: «معلش عَالإِزْعَاج»",
                optionsEn: ["before a polite complaint", "to order food", "to ask age"],
                correctIndex: 0,
            },
            {
                id: "comp_q2",
                questionAr: "Choose the English meaning of: «لِسَّا نَفْس المُشْكِلِة»",
                optionsEn: ["It is still the same problem.", "Now it is better.", "The rent is cheap."],
                correctIndex: 0,
            },
            {
                id: "comp_q3",
                questionAr: "Choose when to use: «وَعَدْتُونِي»",
                optionsEn: ["someone promised something", "someone ordered food", "someone described weather"],
                correctIndex: 0,
            },
            {
                id: "comp_q4",
                questionAr: "Choose the English meaning of: «مِن حَقِّي»",
                optionsEn: ["it's my right", "I am hungry", "it is cheaper"],
                correctIndex: 0,
            },
            {
                id: "comp_q5",
                questionAr: "Choose the most polite sentence to say to a neighbour.",
                optionsEn: ["ممكن توطي  الصَّوْت شُوَي؟", "اسْكُت.", "إِنْتَ مُزْعِج."],
                correctIndex: 0,
            },
            {
                id: "comp_q6",
                questionAr: "Choose when to use: «هَادَا مِش حَلّ»",
                optionsEn: ["the offered answer is not enough", "the food is tasty", "the weather is nice"],
                correctIndex: 0,
            },
            {
                id: "comp_q7",
                questionAr: "Choose the English meaning of: «زَيّ مَا اتَّفَقْنَا»",
                optionsEn: ["as we agreed", "as I ate", "as the weather changed"],
                correctIndex: 0,
            },
            {
                id: "comp_q8",
                questionAr: "Choose the English meaning of: «تْكَرَّرَت»",
                optionsEn: ["it repeated", "it became cheaper", "it arrived early"],
                correctIndex: 0,
            },
            {
                id: "comp_q9",
                questionAr: "Choose what to say when the problem has been solved.",
                optionsEn: ["هَلِّق أَحْسَن.", "لِسَّا نَفْس المُشْكِلِة.", "هَادَا مِش حَلّ."],
                correctIndex: 0,
            },
        ],
        rolePlays: [
            "Call the landlord: the heater is still broken although a technician was promised yesterday. Explain what happened, use one past-tense verb and one receiver suffix such as حكيتله, and ask politely for a clear solution and time.",
        ],
        sections: [
            {
                title: "A/B - Complaint practice",
                matching: [
                    { ar: "شَكْوَى", arabeezy: "shakwa", en: "complaint" },
                    { ar: "تَأْخِير", arabeezy: "ta2kheer", en: "delay" },
                    { ar: "حَلّ", arabeezy: "7all", en: "solution" },
                    { ar: "مَسْؤُول", arabeezy: "mas2ool", en: "person in charge" },
                    { ar: "دَوْشَة", arabeezy: "dosheh", en: "noise" },
                    { ar: "وَعَدُونِي", arabeezy: "wa3adooni", en: "they promised me" },
                ],
                multipleChoice: [
                    { prompt: "Choose the polite opening for a complaint.", options: ["معلش عَالإِزْعَاج، بَس عِنْدِي مُشْكِلِة.", "إِنْتُو مَا بِتِفْهَمُوا.", "مَا بَدِّي أَحْكِي."], correct: "معلش عَالإِزْعَاج، بَس عِنْدِي مُشْكِلِة." },
                    { prompt: "Choose the sentence with an indirect object pronoun meaning “They promised me.”", options: ["وَعَدُونِي.", "وَعَدْتُه.", "وَعَدْنَا."], correct: "وَعَدُونِي." },
                ],
                fillInTheBlank: [
                    { prompt: "لِسَّا ___ المُشْكِلِة.", arabeezy: "lissa ___ el-mushkileh.", cueEn: "the same", answer: "نَفْس" },
                    { prompt: "بَدِّي ___ عَن مُشْكِلِة.", arabeezy: "baddi ___ 3an mushkileh.", cueEn: "talk", answer: "أَحْكِي" },
                    { prompt: "هَادَا مِش ___.", arabeezy: "hada mish ___.", cueEn: "a solution", answer: "حَلّ" },
                    { prompt: "مِن ___ أَسْكُن فِي شَقَّة هَادْيَة.", arabeezy: "min ___ askon fi shaqqa hadyeh.", cueEn: "my right", answer: "حَقِّي" },
                    { prompt: "هُمَّ ___ الفَنِّي يِيجِي اِمْبَارِح.", arabeezy: "humme ___ el-fanni yiji imbari7.", cueEn: "promised me", answer: "وَعَدُونِي" },
                    { prompt: "المُشْكِلِة ___ تَلَات مَرَّات.", arabeezy: "el-mushkileh ___ talat marrat.", cueEn: "repeated (past, feminine)", answer: "تْكَرَّرَت" },
                    { prompt: "___ عَن الدَّوْشَة.", arabeezy: "___ 3an ed-dosheh.", cueEn: "I spoke to him", answer: "حَكِيتْلُه" },
                    { prompt: "طَلَبْت ___ يِصَلِّحُوهَا اليَوم.", arabeezy: "Talabt ___ yiSalli7uha el-yom.", cueEn: "from them", answer: "مِنْهُم" },
                    { prompt: "مَا صَار ___ زَيّ مَا اتَّفَقْنَا.", arabeezy: "ma Sar ___ zayy ma ittafaqna.", cueEn: "anything", answer: "إِشِي" },
                    { prompt: "Review opinion: أَنَا مَعَك، ___ هَادَا مِش حَلّ.", arabeezy: "ana ma3ak, ___ hada mish 7all.", cueEn: "but", answer: "بَس" },
                    { prompt: "Review housing: البَاب ___.", arabeezy: "el-bab ___.", cueEn: "broken (passive description)", answer: "مَكْسُور" },
                    { prompt: "Review future: إِمْتَى ___ تِحِلُّوهَا؟", arabeezy: "eemta ___ t7illuha?", cueEn: "will", answer: "رَاح" },
                ],
                correctTheMistake: [
                    { prompt: "Correct: هُمَّ وَعَدْنِي يِيجُوا.", arabeezy: "humme wa3adni yiju.", answer: "هُمَّ وَعَدُونِي يِيجُوا." },
                    { prompt: "Correct the past: إِمْبَارِح بِتْكَرَّرَت المُشْكِلِة.", arabeezy: "imbari7 bitkarrarat el-mushkileh.", answer: "إِمْبَارِح تْكَرَّرَت المُشْكِلِة." },
                    { prompt: "Correct the passive description: البَاب كَسَر.", arabeezy: "el-bab kasar.", answer: "البَاب مَكْسُور." },
                    { prompt: "Correct the indirect object: حَكِيت هُوَّ عَن المُشْكِلِة.", arabeezy: "7akeit huwwe 3an el-mushkileh.", answer: "حَكِيتْلُه عَن المُشْكِلِة." },
                    { prompt: "Correct the agreement: المُشْكِلِة تْكَرَّر.", arabeezy: "el-mushkileh tkarrar.", answer: "المُشْكِلِة تْكَرَّرَت." },
                    { prompt: "Correct the time reference: بُكْرَا إِجَا الفَنِّي.", arabeezy: "bukra ija el-fanni.", answer: "بُكْرَا رَاح يِيجِي الفَنِّي." },
                ],
                reorderSentences: [
                    {
                        prompt: "Put the words in order: I want to talk about a problem.",
                        words: ["عَن","أَحْكِي","بَدِّي",   "مُشْكِلِة."],
                        answer: "بَدِّي أَحْكِي عَن مُشْكِلِة.",
                    },
                    {
                        prompt: "Put the words in order: Can you lower the sound a little?",
                        words: ["الصَّوْت","توطي","ممكن",   "شُوَي؟"],
                        answer: "ممكن توطي الصَّوْت شُوَي؟",
                    },
                    {
                        prompt: "Put the words in order: It did not happen as we agreed.",
                        words: ["مَا","زَيّ","صَار", "مَا",   "اتَّفَقْنَا."],
                        answer: "مَا صَار زَيّ مَا اتَّفَقْنَا.",
                    },
                    { prompt: "Build: They promised me the technician would come yesterday.", words: ["الفَنِّي يِيجِي","وَعَدُونِي",  "اِمْبَارِح."], answer: "وَعَدُونِي الفَنِّي يِيجِي اِمْبَارِح." },
                    { prompt: "Build: I spoke to him about the noise.", words: ["عَن", "حَكِيتْلُه", "الدَّوْشَة."], answer: "حَكِيتْلُه عَن الدَّوْشَة." },
                    { prompt: "Review: Although I understand you, this is not a solution.", words: ["فَاهِم عَلَيْك،","مَع إِنِّي",  "هَادَا مِش حَلّ."], answer: "مَع إِنِّي فَاهِم عَلَيْك، هَادَا مِش حَلّ." },
                ],
            },
        ],
        translation: [
            { id: "comp_t1", type: "enToAr", textEn: "Sorry for the bother, but I have a problem.", textAr: "معلش عَالإِزْعَاج، بَس عِنْدِي مُشْكِلِة." },
            { id: "comp_t2", type: "arToEn", textEn: "I want to talk about the heater problem.", textAr: "بَدِّي أَحْكِي عَن مُشْكِلِة السَّخَّان." },
            { id: "comp_t3", type: "enToAr", textEn: "The same problem happened three times this week.", textAr: "نَفْس المُشْكِلِة تْكَرَّرَت تَلَات مَرَّات هَاد الأُسْبُوع." },
            { id: "comp_t4", type: "arToEn", textEn: "It is still the same problem after the repair.", textAr: "لِسَّا نَفْس المُشْكِلِة بَعْد التَّصْلِيح." },
            { id: "comp_t5", type: "enToAr", textEn: "When can the technician come?", textAr: "إِمْتَى بِقْدَر يِيجِي الفَنِّي؟" },
            { id: "comp_t6", type: "arToEn", textEn: "This is not a solution.", textAr: "هَادَا مِش حَلّ." },
            { id: "comp_t7", type: "enToAr", textEn: "Can you check it today?", textAr: "بِتِقْدَر تِشُوفْهَا اليَوم؟" },
            { id: "comp_t8", type: "arToEn", textEn: "The bus has been late for half an hour.", textAr: "البَاص مُتْأَخِّر مِن نُصّ سَاعَة." },
            { id: "comp_t9", type: "enToAr", textEn: "The service was slow and the food arrived cold.", textAr: "الخِدْمِة كَانَت بَطِيئَة وَالأَكْل وِصِل بَارِد." },
            { id: "comp_t10", type: "arToEn", textEn: "Can you lower the sound a little?", textAr: "ممكن توطي  الصَّوْت شُوَي؟" },
            { id: "comp_t11", type: "enToAr", textEn: "I don't mean to upset you, but the sound is loud.", textAr: "مِش قَصْدِي أَزْعَلَك، بَس الصَّوْت عَالِي." },
            { id: "comp_t12", type: "arToEn", textEn: "Nothing happened as we agreed.", textAr: "مَا صَار إِشِي زَيّ مَا اتَّفَقْنَا." },
            { id: "comp_t13", type: "enToAr", textEn: "It is my right to live in a clean and quiet apartment.", textAr: "مِن حَقِّي أَسْكُن فِي شَقَّة نْضِيفَة وَهَادْيَة." },
            { id: "comp_t14", type: "arToEn", textEn: "After the technician came, now it is better.", textAr: "بَعْد مَا إِجَا الفَنِّي، هَلِّق أَحْسَن." },
            { id: "comp_t15", type: "enToAr", textEn: "Thank you very much; may God give you strength.", textAr: "مَشْكُور كْتِير، يِعْطِيك العَافْيِة." },
        ],
    },

    homework: {
        instructions:
            `Write and record a 90-second polite complaint in Gaza Palestinian Arabic. Choose one real-life situation: apartment repair, noisy neighbour, late bus, restaurant service, weak internet, or delayed appointment. Explain the problem, say how many times it happened, ask for a clear solution, and close politely. Reuse at least 10 words from this unit and 6 old words from previous units.

Translate these sentences into Gaza Palestinian Arabic:
1. Sorry for the bother, but I have a problem.
2. I want to talk about the heater problem.
3. The same problem happened three times this week.
4. It is still the same problem after the repair.
5. When can the technician come?
6. This is not a solution.
7. Can you check it today?
8. The bus has been late for half an hour.
9. The service was slow and the food arrived cold.
10. Can you lower the sound a little?
11. I don't mean to upset you, but the sound is loud.
12. Nothing happened as we agreed.
13. It is my right to live in a clean and quiet apartment.
14. After the technician came, now it is better.
15. Thank you very much; may God give you strength.`,
    },

    teacherNotes: {
        warmup: [
            "Start with a real opener: معلش عالإزعاج، بس عندي مشكلة.",
            "Recycle apartment, opinions, transport, food, weather, and health in complaint contexts.",
            "Question words are review only here; keep them inside full complaint sentences.",
        ],
        vocabularySteps: [
            "Teach complaint flow: opener -> problem -> repeated issue -> request -> clear time -> closing.",
            "Use verbs naturally: تكررت، وعدتوني، تأخر، صار، انحل، صلح، خفف.",
            "Use prepositions inside phrases: في الشقة، بعد التصليح، فوقينا، على الوقت، مع المسؤول.",
        ],
        dialogueSteps: [
            "Act the call naturally, with Mona giving short background comments to Rami.",
            "Ask dialogue questions orally and require full complaint sentences.",
            "Have the student replace heater/internet with another problem from their life.",
        ],
        practiceTips: [
            "Correct tone more than grammar; this unit is about sounding firm and respectful.",
            "Ask the student to follow up after a weak answer: طيب شو الحل؟ إمتى بالزبط؟",
            "End with a 60-second complaint role-play and a 20-second follow-up call.",
        ],
        wrapup: [
            "Student makes one polite complaint.",
            "Student asks for a clear solution and time.",
            "Student closes with thanks after the issue is accepted.",
        ],
        myNotes: "",
    },
};
