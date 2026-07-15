export const lessonId = "Review-Intermediate-Units11-15";

export const lesson = {
    meta: { level: "Intermediate", unit: "Cumulative Review 3", lessonTitle: "Review Units 11-15", contentVersion: 2026071501, availableTabs: ["overview", "grammar", "practice"] },
    overview: {
        title: "Cumulative Review 3",
        description: "A cumulative teacher-led review of opinions, complaints, future plans, hobbies, and feelings through connected sentences and short narratives.",
        goals: [
            "Review polite opinions, agreement, disagreement, and comparison.",
            "Consolidate past tense and direct/indirect object pronouns.",
            "Use future forms, negation, conditions, and connected time phrases.",
            "Connect feelings, causes, events, and results in a short story.",
        ],
        speakingOutcomes: ["The learner can narrate a problem, explain feelings and reasons, and describe a future response."],
    },
    vocabulary: { core: [], extra: [] }, dialogue: { title: "Review", setting: "Use Practice.", lines: [] },
    grammar: [
        {
            title: "Review 11 — Opinion, comparison, and contrast",
            short: "State a view, soften disagreement, and compare evidence",
            description: "An intermediate answer does not stop at برأيي. It states the view, compares options, acknowledges another perspective, and gives a reason or contrast.",
            table: {
                title: "Opinion frame",
                headers: ["Move", "Useful language", "Example"],
                rows: [
                    ["open", "برأيي / بحسّ إنّه", "برأيي هادا أحسن"],
                    ["compare", "أحسن من / أقل / أكتر", "أرخص من التاني"],
                    ["acknowledge", "معك حق", "معك حق، بس..."],
                    ["contrast", "بس / مع إنّه", "غالي، بس بستاهل"],
                    ["conclude", "عشان هيك", "عشان هيك بفضّله"],
                ],
            },
            examples: [
                { ar: "معك حق إنّه أرخص، بس برأيي الخيار التاني أريح.", arabeezy: "ma3ak 7a2 inno arkhaS, bas bra2yi el-khyar et-tani arya7.", en: "You are right that it is cheaper, but in my opinion the second option is more comfortable." },
                { ar: "مع إنّ الخدمة أبطأ، أنا بفضّل هالمحلّ لأنه أضمن.", arabeezy: "ma3 inn el-khidme abTa2, ana bfaDDel hal-ma7all la2inno aDman.", en: "Although the service is slower, I prefer this shop because it is more reliable." },
            ],
            commonMistakes: ["A direct comparative takes من.", "Use لأنه for the reason and عشان هيك for the result."],
            exercises: [
                { prompt: "Choose the balanced disagreement.", options: ["معك حق، بس أنا شايف الموضوع غير هيك.", "إنت غلط.", "ما بدي أسمع.", "أكيد أنا الصح."], correct: "معك حق، بس أنا شايف الموضوع غير هيك.", explanation: "It acknowledges the other person before giving a different view." },
                { prompt: "Complete: هادا أريح ___ الخيار الأول.", options: ["من", "على", "عشان", "في"], correct: "من", explanation: "The comparison أريح takes من." },
            ],
        },
        {
            title: "Review 12 — Past events and who received what",
            short: "Conjugate the completed action and read attached pronouns",
            description: "A complaint story needs correct past endings and receiver suffixes. Read each long word in two layers: who performed the action, then who received it.",
            table: {
                title: "Past action + receiver",
                headers: ["Form", "Performer", "Receiver", "Meaning"],
                rows: [
                    ["حكالي", "he", "me", "he told me"],
                    ["حكيتله", "I", "him", "I told him"],
                    ["بعتنالهم", "we", "them", "we sent them"],
                    ["رجّعتولنا", "you all", "us", "you returned to us"],
                    ["وعدوني", "they", "me", "they promised me"],
                ],
            },
            examples: [
                { ar: "حكيتلهم عن المشكلة وبعتتلهم الصور.", arabeezy: "7akeitlhom 3an el-mushkile w ba3attilhom eS-Sowar.", en: "I told them about the problem and sent them the photos." },
                { ar: "وعدوني ييجوا الخميس، بس ما حدا إجا.", arabeezy: "wa3aduni yeeju el-khamees, bas ma 7ada ija.", en: "They promised me they would come Thursday, but nobody came." },
            ],
            commonMistakes: ["حكالي and حكيتله reverse both the performer and receiver.", "Use the simple past for completed complaint actions."],
            exercises: [
                { prompt: "What does بعتنالهم mean?", options: ["We sent them.", "They sent us.", "I sent her.", "You sent me."], correct: "We sent them.", explanation: "بعتنا marks ‘we sent’ and ـلهم marks ‘to them.’" },
                { prompt: "Choose: ‘They told me.’", options: ["حكولي.", "حكيتلهم.", "حكالها.", "حكينا."], correct: "حكولي.", explanation: "The plural action plus ـلي gives ‘they told me.’" },
            ],
        },
        {
            title: "Review 13 — Future, intention, and backup plans",
            short: "Separate what you want, what will happen, and what is scheduled",
            description: "Use بدّي for intention, راح for a future action or prediction, and a timed بـ-present for a scheduled arrangement. Add مش راح for a negative future and إذا for a backup condition.",
            table: {
                title: "Future choice",
                headers: ["Meaning", "Pattern", "Example"],
                rows: [
                    ["intention", "بدّي + verb", "بدّي أسافر"],
                    ["future", "راح + verb", "راح أسافر"],
                    ["scheduled", "time + بـ-present", "بكرة بسافر"],
                    ["negative future", "مش راح + verb", "مش راح أتأخّر"],
                    ["backup", "إذا...، بـpresent", "إذا شتت، بنضلّ"],
                ],
            },
            examples: [
                { ar: "بكرة بقابل المسؤول عالعشرة، ومش راح أتأخّر.", arabeezy: "bokra bqabel el-mas2ool 3al-3ashra, w mish ra7 at2akhkhar.", en: "Tomorrow I am meeting the person in charge at ten, and I will not be late." },
                { ar: "إذا ما انحلّت المشكلة، راح أقدّم شكوى.", arabeezy: "iza ma in7allat el-mushkile, ra7 aqaddim shakwa.", en: "If the problem is not solved, I will file a complaint." },
            ],
            commonMistakes: ["After future راح, use أروح rather than habitual بروح.", "The condition and its result must describe logically connected events."],
            exercises: [
                { prompt: "Choose the negative future.", options: ["مش راح أتأخّر.", "ما تأخّرت بكرة.", "مش بتأخّرت.", "لا راح تأخّرت."], correct: "مش راح أتأخّر.", explanation: "مش negates the complete راح future structure." },
                { prompt: "Complete the backup: إذا تأخّر الباص، ___ تاكسي.", options: ["بناخد", "أخدنا امبارح", "مش راح", "بدّهم"], correct: "بناخد", explanation: "The second clause gives the action taken if the condition happens." },
            ],
        },
        {
            title: "Review 14 — Habit, frequency, and continuation",
            short: "Show whether an activity repeats, continues, or stopped",
            description: "Use بـ-present for a habit, an exact frequency for how often, لسا for ‘still’, صارلي for duration until now, ضلّيت for keeping on, and بطّلت when the activity stopped.",
            table: {
                title: "Activity timeline",
                headers: ["Meaning", "Pattern", "Example"],
                rows: [
                    ["habit", "بـ-present", "بلعب الجمعة"],
                    ["frequency", "مرتين بالأسبوع", "بتمرّن مرتين"],
                    ["still", "لسا + present", "لسا بتعلّم"],
                    ["duration to now", "صارلي + duration + present", "صارلي سنة بلعب"],
                    ["stopped", "بطّلت + bare verb", "بطّلت ألعب"],
                ],
            },
            examples: [
                { ar: "صارلي سنتين بتعلّم عود، ولسا بتمرّن كل يوم.", arabeezy: "Sarli santain bat3allam 3ood, w lissa batmarran kol yom.", en: "I have been learning oud for two years, and I still practice every day." },
                { ar: "كنت ألعب تلات مرات بالأسبوع، بس بطّلت من شهر.", arabeezy: "kunt al3ab talat marrat bil-osboo3, bas baTTalt min shaher.", en: "I used to play three times a week, but I stopped a month ago." },
            ],
            commonMistakes: ["After بحب, بقدر, or بطّلت, the following verb normally drops habitual بـ.", "صارلي + duration connects a past starting point to the present."],
            exercises: [
                { prompt: "Choose: ‘I have been training for a year.’", options: ["صارلي سنة بتمرّن.", "لسا سنة تمرّنت.", "بطّلت سنة.", "راح بتمرّن سنة امبارح."], correct: "صارلي سنة بتمرّن.", explanation: "صارلي + duration + present expresses continuation until now." },
                { prompt: "What does بطّلت ألعب mean?", options: ["I stopped playing.", "I started playing.", "I still play.", "I will play."], correct: "I stopped playing.", explanation: "بطّلت marks the end of the activity." },
            ],
        },
        {
            title: "Review 15 — Emotional narrative",
            short: "Set the state, background, event, reaction, and result",
            description: "Bring the course together in a five-part story: use كان for the past state, كان عم for the ongoing background, simple past for the main event, صار or رجع for emotional change, and a connector for the result.",
            table: {
                title: "Complete story structure",
                headers: ["Stage", "Grammar", "Cue"],
                rows: [
                    ["initial state", "كان + feeling", "بالبداية كنت قلقان"],
                    ["background", "كان عم + verb", "كنت عم بستنى"],
                    ["event", "simple past", "لما اتصلوا"],
                    ["change", "صار / رجع", "صرت مبسوط"],
                    ["result", "عشان هيك / بالنهاية", "بالنهاية ارتحت"],
                ],
            },
            examples: [
                { ar: "كنت عم بستنى الردّ وكنت متوتّر، ولما اتصلوا فيّ ارتحت.", arabeezy: "kunt 3am bastanna er-radd w kunt mtwatter, w lamma itSalu fiyye irta7t.", en: "I was waiting for the response and was nervous; when they called me, I felt relieved." },
                { ar: "حكولي إنّ المشكلة انحلّت، عشان هيك صرت أهدى.", arabeezy: "7akuli inn el-mushkile in7allat, 3ashan hek Sirt ahda.", en: "They told me the problem was solved, so I became calmer." },
            ],
            commonMistakes: ["Use كان عم for the background and simple past for the event that interrupts it.", "صار describes a change; كان describes an existing state."],
            exercises: [
                { prompt: "Complete the interruption: كنت عم بسوق لما ___ التلفون.", options: ["رنّ", "عم برنّ", "راح يرنّ", "برنّ كل يوم"], correct: "رنّ", explanation: "The completed simple-past event interrupts the ongoing background." },
                { prompt: "Choose the logical narrative.", options: ["كنت قلقان، ولما وصل الخبر ارتحت، عشان هيك رجعت عالشغل.", "بكرة كنت قلقان امبارح.", "عشان هيك قبل ما صار بعدين.", "راح كنت عم ارتحت."], correct: "كنت قلقان، ولما وصل الخبر ارتحت، عشان هيك رجعت عالشغل.", explanation: "The sentence moves from state to event to reaction and result." },
            ],
        },
    ],
    microChecks: { enabled: false, every: 5, items: [] },
    practice: {
        showRealUse: false, showWriting: false, separateExerciseTypes: true,
        quiz: [
            { id: "ir3_q1", questionAr: "Choose the polite disagreement.", optionsEn: ["فَاهِم عَلَيْك، بَس رَأْيِي مُخْتَلِف.", "إِنْتَ غَلَط.", "مَا بَدِّي أَسْمَع."], correctIndex: 0 },
            { id: "ir3_q2", questionAr: "Choose the full past plural: They spoke.", optionsEn: ["هُمَّ حَكُوا.", "هُمَّ بِحْكُوا.", "هُمَّ رَاح يِحْكُوا."], correctIndex: 0 },
            { id: "ir3_q3", questionAr: "Choose the indirect object: They promised me.", optionsEn: ["وَعَدُونِي", "وَعَدُوه", "وَعَدْتُهَا"], correctIndex: 0 },
            { id: "ir3_q4", questionAr: "Choose the negative future.", optionsEn: ["مِش رَاح أَتْأَخَّر.", "مَا تْأَخَّرْت.", "مِش مُتْأَخِّر."], correctIndex: 0 },
            { id: "ir3_q5", questionAr: "Choose the cause-and-result sentence.", optionsEn: ["كُنْت مَضْغُوط، عَشَان هِيك أَخَدْت رَاحَة.", "بَرُوح عَالنَّادِي مَرَّتِين.", "قَدِّيش الإِيجَار؟"], correctIndex: 0 },
        ],
        rolePlays: ["Describe a complaint that happened: give your opinion, narrate what people said and did, explain how you felt, and state what you will do next."],
        sections: [
            { title: "A - Recognition", matching: [
                { ar: "بِرَأْيِي", arabeezy: "bira2yi", en: "in my opinion" },
                { ar: "وَعَدُونِي", arabeezy: "wa3aduni", en: "they promised me" },
                { ar: "مِش رَاح", arabeezy: "mish ra7", en: "will not" },
                { ar: "نَادِرًا", arabeezy: "nadiran", en: "rarely" },
                { ar: "عَشَان هِيك", arabeezy: "3ashan heek", en: "therefore / so" },
            ], multipleChoice: [] },
            { title: "B - Connected language review",
                fillInTheBlank: [
                    { prompt: "بِرَأْيِي، هَادَا أَحْسَن ___ الأَوَّل.", arabeezy: "bira2yi, hada a7san ___ el-awwal.", cueEn: "than", answer: "مِن" },
                    { prompt: "هُمَّ ___ الفَنِّي يِيجِي.", arabeezy: "humme ___ el-fanni yiji.", cueEn: "promised me", answer: "وَعَدُونِي" },
                    { prompt: "بُكْرَا ___ أَرُوح عَالمَوْعِد.", arabeezy: "bukra ___ aroo7 3al-maw3ed.", cueEn: "will", answer: "رَاح" },
                    { prompt: "عَادَةً بَرُوح عَالنَّادِي ___ بِالأُسْبُوع.", arabeezy: "3adatan baroo7 3an-nadi ___ bil-usboo3.", cueEn: "twice", answer: "مَرَّتِين" },
                    { prompt: "كُنْت تَعْبَان، ___ أَخَدْت رَاحَة.", arabeezy: "kunt ta3ban, ___ akhadt ra7a.", cueEn: "so/therefore", answer: "عَشَان هِيك" },
                    { prompt: "مَع إِنُّه غَالِي، أَنَا ___ هَادَا الخِيَار.", arabeezy: "ma3 innu ghali, ana ___ hada el-khiyar.", cueEn: "prefer", answer: "بَفَضِّل" },
                    { prompt: "المُشْكِلِة ___ تَلَات مَرَّات.", arabeezy: "el-mushkileh ___ talat marrat.", cueEn: "repeated", answer: "تْكَرَّرَت" },
                    { prompt: "إِذَا مَا زَبَطَت، ___ الخُطَّة.", arabeezy: "iza ma zabaTat, ___ el-khoTTeh.", cueEn: "we change", answer: "بِنْغَيِّر" },
                    { prompt: "بَلَّشْت أَتْعَلَّم وُ___ بَتْعَلَّم.", arabeezy: "ballasht at3allam w ___ bat3allam.", cueEn: "still", answer: "لِسَّا" },
                    { prompt: "هِيَّ ___ مَضْغُوطَة اِمْبَارِح.", arabeezy: "hiyyeh ___ maDghooTeh imbari7.", cueEn: "was", answer: "كَانَت" },
                ],
                correctTheMistake: [
                    { prompt: "Correct: هَادِي الشَّقَّة أَهْدَى عَلَى الأُولَى.", arabeezy: "hadi esh-shaqqa ahda 3ala el-oola.", answer: "هَادِي الشَّقَّة أَهْدَى مِن الأُولَى." },
                    { prompt: "Correct the past: هُمَّ حَكَيْنَا مَع المَسْؤُول.", arabeezy: "humme 7akeina ma3 el-mas2ool.", answer: "هُمَّ حَكُوا مَع المَسْؤُول." },
                    { prompt: "Correct the indirect object: هُمَّ وَعَدْنِي.", arabeezy: "humme wa3adni.", answer: "هُمَّ وَعَدُونِي." },
                    { prompt: "Correct the future: بُكْرَا رُحْت عَالشُّغُل.", arabeezy: "bukra ru7t 3ash-shughul.", answer: "بُكْرَا رَاح أَرُوح عَالشُّغُل." },
                    { prompt: "Correct: اِمْبَارِح أَنَا مَضْغُوط.", arabeezy: "imbari7 ana maDghooT.", answer: "اِمْبَارِح كُنْت مَضْغُوط." },
                    { prompt: "Correct the connector: كُنْت تَعْبَان، لَأَنّ أَخَدْت رَاحَة.", answer: "كُنْت تَعْبَان، عَشَان هِيك أَخَدْت رَاحَة." },
                ],
                reorderSentences: [
                    { prompt: "Build: They promised me they would solve it.", arabeezy: "wa3aduni innhom ra7 y7illuha.", words: ["وَعَدُونِي", "إِنَّهُم", "رَاح يِحِلُّوهَا."], answer: "وَعَدُونِي إِنَّهُم رَاح يِحِلُّوهَا." },
                    { prompt: "Build: Tomorrow I will not be late.", arabeezy: "bukra mish ra7 at2akhkhar.", words: ["بُكْرَا", "مِش رَاح", "أَتْأَخَّر."], answer: "بُكْرَا مِش رَاح أَتْأَخَّر." },
                    { prompt: "Build: I was stressed, so I took a break.", arabeezy: "kunt maDghooT, 3ashan heek akhadt ra7a.", words: ["كُنْت مَضْغُوط،", "عَشَان هِيك", "أَخَدْت رَاحَة."], answer: "كُنْت مَضْغُوط، عَشَان هِيك أَخَدْت رَاحَة." },
                    { prompt: "Build: If the plan does not work, we will change it.", words: ["إِذَا مَا زَبَطَت الخُطَّة،", "رَاح", "نْغَيِّرْهَا."], answer: "إِذَا مَا زَبَطَت الخُطَّة، رَاح نْغَيِّرْهَا." },
                    { prompt: "Build: She was stressed yesterday because of work.", words: ["هِيَّ كَانَت مَضْغُوطَة", "اِمْبَارِح", "عَشَان الشُّغُل."], answer: "هِيَّ كَانَت مَضْغُوطَة اِمْبَارِح عَشَان الشُّغُل." },
                    { prompt: "Build: I started learning and I am still learning.", words: ["بَلَّشْت أَتْعَلَّم", "وُلِسَّا", "بَتْعَلَّم."], answer: "بَلَّشْت أَتْعَلَّم وُلِسَّا بَتْعَلَّم." },
                ],
            },
        ], translation: [],
    },
    homework: { instructions: "Review errors orally; no written homework." }, teacherNotes: { myNotes: "" },
};
