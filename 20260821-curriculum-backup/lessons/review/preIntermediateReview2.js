export const lessonId = "Review-PreIntermediate-Units6-10";

export const lesson = {
    meta: { level: "Pre-Intermediate", unit: "Cumulative Review 2", lessonTitle: "Review Units 6-10", contentVersion: 2026071501, availableTabs: ["overview", "grammar", "practice"] },
    overview: {
        title: "Cumulative Review 2",
        description: "A teacher-led review of work and study, weather, shopping, health, and apartment problems.",
        goals: ["Review present-tense pronouns and time.", "Use comparison, quantities, commands, object pronouns, and location words.", "Connect Units 6-10 in practical dialogues."],
        speakingOutcomes: ["The learner can manage a connected work, shopping, health, and housing situation."],
    },
    vocabulary: { core: [], extra: [] }, dialogue: { title: "Review", setting: "Use Practice.", lines: [] },
    grammar: [
        {
            title: "Review 6 — Work, study, and people",
            short: "Expanded present, masculine plurals, and active descriptions",
            description: "Describe what people regularly do, where they do it, and what their role is. Keep subject–verb agreement clear and distinguish an action from an active description such as دارس or موظّف.",
            table: {
                title: "Action or description?",
                headers: ["Subject", "Repeated action", "Active description"],
                rows: [
                    ["هو", "بشتغل", "موظّف / دارس"],
                    ["هي", "بتشتغل", "موظّفة / دارسة"],
                    ["إحنا", "بنشتغل", "موظّفين / دارسين"],
                    ["همّ", "بشتغلوا", "موظّفين / دارسين"],
                ],
            },
            examples: [
                { ar: "همّ بشتغلوا بشركة وبدواموا من الأحد للخميس.", arabeezy: "humme bishtighlu b-sharike w bdawmu min el-a7ad lil-khamees.", en: "They work at a company and work Sunday through Thursday." },
                { ar: "هي دارسة تمريض، وهلّق بتتدرّب بالمستشفى.", arabeezy: "hiyye darse tamreeD, w halla2 btitdarrab bil-mustashfa.", en: "She studied nursing and is now training at the hospital." },
            ],
            commonMistakes: ["Use بتشتغل with هي but بشتغل with هو.", "A plural human subject takes a plural description: همّ موظّفين."],
            exercises: [
                { prompt: "Complete: همّ ___ بالجامعة.", options: ["بدرسوا", "بتدرس", "بدرس", "بندرس"], correct: "بدرسوا", explanation: "همّ takes the third-person plural form ending in ـوا." },
                { prompt: "Choose the matching description for هي.", options: ["هي موظّفة.", "هي موظّف.", "هي موظّفين.", "هي بموظّف."], correct: "هي موظّفة.", explanation: "The description agrees with the feminine singular subject." },
            ],
        },
        {
            title: "Review 7 — Weather and comparison",
            short: "Compare conditions and handle non-human plurals",
            description: "Weather comparisons use forms such as أحرّ، أبرد، أحسن followed by من. Non-human plurals are commonly treated as feminine singular in agreement: الشوارع زحمة، السيارات غالية.",
            table: {
                title: "Comparison and agreement",
                headers: ["Job", "Pattern", "Example"],
                rows: [
                    ["warmer than", "أدفى من", "اليوم أدفى من امبارح"],
                    ["colder than", "أبرد من", "الليل أبرد من النهار"],
                    ["non-human plural", "feminine singular description", "الشوارع مسكّرة"],
                    ["human plural", "plural description", "الناس تعبانين"],
                ],
            },
            examples: [
                { ar: "الجوّ اليوم أهدى وأدفى من امبارح.", arabeezy: "el-jaww el-yom ahda w adfa min embare7.", en: "The weather today is calmer and warmer than yesterday." },
                { ar: "الطرق مسكّرة عشان المطر، والناس متأخّرين.", arabeezy: "eT-Toroq msakkra 3ashan el-maTar, win-nas mit2akhkhreen.", en: "The roads are closed because of the rain, and people are late." },
            ],
            commonMistakes: ["Direct comparisons take من, not على.", "Use feminine singular agreement for non-human plurals, but plural agreement for people."],
            exercises: [
                { prompt: "Complete: اليوم أبرد ___ امبارح.", options: ["من", "على", "في", "عشان"], correct: "من", explanation: "A direct comparison takes من." },
                { prompt: "Choose the natural agreement.", options: ["السيارات غالية.", "السيارات غاليين.", "السيارات غالي.", "السيارات غالياتين."], correct: "السيارات غالية.", explanation: "A non-human plural commonly takes a feminine singular adjective." },
            ],
        },
        {
            title: "Review 8 — Shopping, numbers, and broken plurals",
            short: "Ask, count, compare, and match the noun phrase",
            description: "Shopping combines price questions, quantities, numbers, and plural vocabulary. Learn common broken plurals as word families and then check adjective agreement in the complete phrase.",
            table: {
                title: "Useful shopping families",
                headers: ["Singular", "Plural", "Example phrase"],
                rows: [
                    ["قميص", "قمصان", "القمصان غالية"],
                    ["فستان", "فساتين", "فساتين جداد"],
                    ["سعر", "أسعار", "الأسعار عالية"],
                    ["محلّ", "محلّات", "المحلّات فاتحة"],
                    ["كيلو", "كيلوين", "كيلوين بندورة"],
                ],
            },
            examples: [
                { ar: "قدّيش سعر القميص، وفي عليه خصم؟", arabeezy: "qaddeish se3r el-qameeS, w fi 3aleih khaSm?", en: "How much is the shirt, and is it discounted?" },
                { ar: "بدّي كيلوين بندورة ونصّ كيلو خيار.", arabeezy: "baddi kilowein bandora w noSS kilo khyar.", en: "I want two kilos of tomatoes and half a kilo of cucumbers." },
            ],
            commonMistakes: ["Memorize frequent broken plurals with their singular, not as a single universal rule.", "قدّيش asks price or amount; أيّ asks which option."],
            exercises: [
                { prompt: "Choose the plural of سعر.", options: ["أسعار", "سعرات", "سعرين", "سعور"], correct: "أسعار", explanation: "أسعار is the common broken plural of سعر." },
                { prompt: "Complete with the English cue ‘half a kilo’: بدّي ___ خيار.", options: ["نصّ كيلو", "نصّ حبّة", "اتنين كيلو", "تلات قطع"], correct: "نصّ كيلو", explanation: "The cue specifies the exact quantity the learner must produce." },
            ],
        },
        {
            title: "Review 9 — Health, commands, and direct objects",
            short: "Say what hurts and give the right person an instruction",
            description: "Body complaints often attach an object pronoun to the verb: راسي بوجعني. Commands and prohibitions change according to whether you address a man, woman, or group.",
            table: {
                title: "Health grammar",
                headers: ["Function", "Man", "Woman", "Group"],
                rows: [
                    ["take", "خد", "خدي", "خدوا"],
                    ["do not eat", "لا تاكل", "لا تاكلي", "لا تاكلوا"],
                    ["hurts...", "بوجعني", "بوجعكِ", "بوجعهم"],
                    ["book", "احجز", "احجزي", "احجزوا"],
                ],
            },
            examples: [
                { ar: "راسي بوجعني من الصبح.", arabeezy: "rasi bwaja3ni min eS-Subo7.", en: "My head has been hurting me since morning." },
                { ar: "خدي حبّة بعد الأكل، ولا تاخديها عالريق.", arabeezy: "khodi 7abbe ba3d el-akel, w la takhdiha 3ar-reeq.", en: "Take one pill after food, and do not take it on an empty stomach. (to a woman)" },
            ],
            commonMistakes: ["In بوجعني, ـني is the person experiencing the pain.", "A negative command uses لا and the matching verb form."],
            exercises: [
                { prompt: "What does بطني بوجعني mean?", options: ["My stomach hurts me.", "I hurt my stomach.", "Her stomach hurts.", "My stomach will hurt."], correct: "My stomach hurts me.", explanation: "ـني marks ‘me’ as the person affected." },
                { prompt: "Tell a group: ‘Do not take this medicine.’", options: ["لا تاخدوا هالدوا.", "لا تاخدي هالدوا.", "ما أخدتوا هالدوا.", "مش خدوا هالدوا."], correct: "لا تاخدوا هالدوا.", explanation: "The group prohibition uses لا + plural verb ending ـوا." },
            ],
        },
        {
            title: "Review 10 — Housing, place, possession, and result states",
            short: "Locate a problem and describe what is broken or blocked",
            description: "A useful housing report identifies the object, its exact location, its owner, and its current result state. Passive descriptions such as مكسور and مسدودة agree with the noun.",
            table: {
                title: "Reporting a housing problem",
                headers: ["Detail", "Useful language", "Example"],
                rows: [
                    ["location", "تحت / فوق / ورا / جنب", "تحت المغسلة"],
                    ["ownership", "ـي / ـك / ـه / ـها", "شقّتي / بابها"],
                    ["masculine state", "مكسور / مسدود", "الباب مكسور"],
                    ["feminine state", "مكسورة / مسدودة", "المغسلة مسدودة"],
                    ["request", "ممكن تبعت فنّي؟", "Could you send a technician?"],
                ],
            },
            examples: [
                { ar: "الماسورة اللي تحت المغسلة بتنقّط.", arabeezy: "el-masoora illi ta7t el-maghSale btinaqqoT.", en: "The pipe under the sink is dripping." },
                { ar: "باب البرندة مكسور، وممكن تبعتلنا فنّي؟", arabeezy: "bab el-barande maksour, w mumkin tib3at-lna fanni?", en: "The balcony door is broken; could you send us a technician?" },
            ],
            commonMistakes: ["Match the result state: الباب مكسور, المغسلة مسدودة.", "Give an exact location instead of saying only ‘there is a problem.’"],
            exercises: [
                { prompt: "Complete: المغسلة ___ .", options: ["مسدودة", "مسدود", "مسدودين", "بسدّ"], correct: "مسدودة", explanation: "المغسلة is feminine, so the result description is مسدودة." },
                { prompt: "Which report gives the clearest location?", options: ["في رطوبة ورا الخزانة.", "في مشكلة هون.", "الإشي خربان.", "مش منيح."], correct: "في رطوبة ورا الخزانة.", explanation: "It names both the problem and its exact position." },
            ],
        },
    ],
    microChecks: { enabled: false, every: 5, items: [] },
    practice: {
        showRealUse: false, showWriting: false, separateExerciseTypes: true,
        quiz: [
            { id: "pr2_q1", questionAr: "Choose: They work in a company.", optionsEn: ["هُمَّ بِشْتِغْلُوا فِي شَرِكَة.", "هُوَّ بِشْتِغِل فِي شَرِكَة.", "إِحْنَا بِنْدْرُس."], correctIndex: 0 },
            { id: "pr2_q2", questionAr: "Choose the comparison: Today is better than yesterday.", optionsEn: ["اليَوم أَحْسَن مِن اِمْبَارِح.", "اليَوم فِي هَوَا.", "اِمْبَارِح كَان بَرْد."], correctIndex: 0 },
            { id: "pr2_q3", questionAr: "Choose the phrase for half a kilo.", optionsEn: ["نُصّ كِيلُو", "تَلَات قِطَع", "خَمْسِين شِيكِل"], correctIndex: 0 },
            { id: "pr2_q4", questionAr: "Choose the instruction to a woman: Take one pill.", optionsEn: ["خُدِي حَبَّة.", "خُد حَبَّة.", "خُدُوا حَبَّة."], correctIndex: 0 },
            { id: "pr2_q5", questionAr: "Choose the passive state: The sink is blocked.", optionsEn: ["المَغْسَلَة مَسْدُودَة.", "المَغْسَلَة بْتِنْقُط.", "المَغْسَلَة سَدَّت."], correctIndex: 0 },
        ],
        rolePlays: ["You are moving near university: explain your schedule and transport, compare two apartments, ask the price, then report a health or repair problem politely."],
        sections: [
            { title: "A - Recognition", matching: [
                { ar: "مَوْعِد", arabeezy: "maw3ed", en: "appointment" }, { ar: "أَحْسَن مِن", arabeezy: "a7san min", en: "better than" },
                { ar: "خَصْم", arabeezy: "khaSm", en: "discount" }, { ar: "دُوخَة", arabeezy: "dookha", en: "dizziness" },
                { ar: "مَسْدُود", arabeezy: "masdood", en: "blocked" },
            ], multipleChoice: [] },
            { title: "B - Controlled review",
                fillInTheBlank: [
                    { prompt: "هُمَّ ___ فِي المَكْتَب.", arabeezy: "humme ___ fil-maktab.", cueEn: "work (they)", answer: "بِشْتِغْلُوا" },
                    { prompt: "الجَوّ اليَوم أَحْسَن ___ اِمْبَارِح.", arabeezy: "el-jaww el-yom a7san ___ imbari7.", cueEn: "than", answer: "مِن" },
                    { prompt: "بَدِّي نُصّ ___ بَنْدُورَة.", arabeezy: "baddi noSS ___ bandora.", cueEn: "kilo", answer: "كِيلُو" },
                    { prompt: "رَاسِي بِيْجَع___.", arabeezy: "rasi biyja3___.", cueEn: "me", answer: "نِي" },
                    { prompt: "فِي رُطُوبَة ___ الخِزَانَة.", arabeezy: "fi rToobeh ___ el-khizaneh.", cueEn: "behind", answer: "وَرَا" },
                    { prompt: "اِمْبَارِح ___ الجَوّ أَحَرّ.", arabeezy: "imbari7 ___ el-jaww a7arr.", cueEn: "was", answer: "كَان" },
                    { prompt: "بُكْرَا ___ أَرُوح عَالسُّوق.", arabeezy: "bukra ___ aroo7 3as-soo2.", cueEn: "will", answer: "رَاح" },
                    { prompt: "خُدِي حَبَّة مَرَّتِين ___ اليَوم.", arabeezy: "khodi 7abbeh marratein ___ el-yom.", cueEn: "per/in", answer: "فِي" },
                    { prompt: "المَغْسَلَة ___.", arabeezy: "el-maghSaleh ___.", cueEn: "blocked (feminine)", answer: "مَسْدُودَة" },
                    { prompt: "مُمْكِن ___ فَنِّي؟", arabeezy: "mumkin ___ fanni?", cueEn: "send", answer: "تِبْعَت" },
                ],
                correctTheMistake: [
                    { prompt: "Correct: هِيَّ بِشْتِغِل فِي مَكْتَب.", arabeezy: "hiyyeh bishtighil fi maktab.", answer: "هِيَّ بِتِشْتَغِل فِي مَكْتَب." },
                    { prompt: "Correct: السَّيَّارَات غَالْيِين.", arabeezy: "es-sayyarat ghalyeen.", answer: "السَّيَّارَات غَالْيَة." },
                    { prompt: "Correct: هَادِي القَمِيص الأَسْوَد.", arabeezy: "hadi el-qameeS el-aswad.", answer: "هَادَا القَمِيص الأَسْوَد." },
                    { prompt: "Correct: خُد حَبَّة. (to a woman)", arabeezy: "khod 7abbeh.", answer: "خُدِي حَبَّة." },
                    { prompt: "Correct: السَّخَّان خَرْبَانَة.", arabeezy: "es-sakhkhan kharbaneh.", answer: "السَّخَّان خَرْبَان." },
                    { prompt: "Correct: بُكْرَا رُحْت عَالسُّوق.", answer: "بُكْرَا رَاح أَرُوح عَالسُّوق." },
                ],
                reorderSentences: [
                    { prompt: "Build: They study from Saturday to Thursday.", arabeezy: "humme badarsu min es-sabt lil-khamees.", words: ["هُمَّ بَدْرُسُوا", "مِن السَّبِت", "لِلْخَمِيس."], answer: "هُمَّ بَدْرُسُوا مِن السَّبِت لِلْخَمِيس." },
                    { prompt: "Build: Yesterday was hotter than today.", arabeezy: "imbari7 kan a7arr min el-yom.", words: ["اِمْبَارِح", "كَان أَحَرّ", "مِن اليَوم."], answer: "اِمْبَارِح كَان أَحَرّ مِن اليَوم." },
                    { prompt: "Build: The pipe under the sink is dripping.", arabeezy: "el-masoora ta7t el-maghSaleh btin2oT.", words: ["المَاسُورَة", "تَحْت المَغْسَلَة", "بْتِنْقُط."], answer: "المَاسُورَة تَحْت المَغْسَلَة بْتِنْقُط." },
                    { prompt: "Build: Tomorrow I will go to the market.", words: ["بُكْرَا", "رَاح أَرُوح", "عَالسُّوق."], answer: "بُكْرَا رَاح أَرُوح عَالسُّوق." },
                    { prompt: "Build: Take one pill twice a day. (to a woman)", words: ["خُدِي حَبَّة", "مَرَّتِين", "فِي اليَوم."], answer: "خُدِي حَبَّة مَرَّتِين فِي اليَوم." },
                    { prompt: "Build: The sink is blocked.", words: ["المَغْسَلَة", "مَسْدُودَة."], answer: "المَغْسَلَة مَسْدُودَة." },
                ],
            },
        ], translation: [],
    },
    homework: { instructions: "Review errors orally; no written homework." }, teacherNotes: { myNotes: "" },
};
