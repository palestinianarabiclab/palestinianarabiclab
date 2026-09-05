export const lessonId = "Assessment-Placement-Test";

export const lesson = {
    meta: {
        level: "Placement",
        unit: "Placement Test",
        lessonTitle: "Palestinian Arabic Placement Test",
        contentVersion: 2026071501,
        availableTabs: ["overview", "practice"],
    },
    overview: {
        title: "Palestinian Arabic Placement Test",
        description: "An 18-question spoken Palestinian Arabic check. The questions progress from beginner comprehension to connected intermediate grammar. Arabic is supported by Arabizi so reading ability does not decide the result.",
        goals: [
            "Find the most useful starting level without studying for the test.",
            "Measure comprehension, grammar in context, and natural responses.",
            "Receive a Beginner, Pre-Intermediate, or Intermediate recommendation.",
        ],
        speakingOutcomes: ["This is a placement guide, not a pass-or-fail exam. Complete it without outside help."],
    },
    vocabulary: { core: [], extra: [] },
    dialogue: { title: "Placement", setting: "Complete the Practice tab.", lines: [] },
    microChecks: { enabled: false, every: 5, items: [] },
    practice: {
        assessmentMode: true,
        placementMode: true,
        assessmentTitle: "Palestinian Arabic Placement Test",
        questions: [
            { prompt: "Someone says: كيفك؟ (keefak/keefik?) Choose a natural reply.", options: ["منيح، الحمد لله. (mnee7, el-7amdillah.)", "من وين؟ (min ween?)", "قدّيش الأجرة؟ (qaddeish el-ojra?)"], correctIndex: 0, skill: "Beginner — greeting" },
            { prompt: "Choose: ‘My name is Adam and I live in Gaza.’", options: ["اسمي آدم وأنا ساكن بغزّة. (ismi adam w ana saken b-ghazze.)", "اسمك آدم وهو بغزّة. (ismak adam w huwwe b-ghazze.)", "أنا آدم ساكنة وين. (ana adam sakne ween.)"], correctIndex: 0, skill: "Beginner — introduction" },
            { prompt: "What does عندي أختين (3indi ukhtein) mean?", options: ["I have two sisters.", "My sister is two years old.", "I live with my sister."], correctIndex: 0, skill: "Beginner — family" },
            { prompt: "A woman says: ‘Every day I go to work.’", options: ["كل يوم بروح عالشغل. (kol yom baroo7 3ash-shoghol.)", "كل يوم بتروحي عالشغل. (kol yom bitroo7i 3ash-shoghol.)", "امبارح رحت عالشغل. (embare7 ri7t 3ash-shoghol.)"], correctIndex: 0, skill: "Beginner — present" },
            { prompt: "Choose: ‘I do not drink coffee at night.’", options: ["ما بشرب قهوة بالليل. (ma bashrab qahwe bil-lel.)", "مش شربت قهوة بكرة. (mish shribt qahwe bokra.)", "لا قهوة بالليل أنا. (la qahwe bil-lel ana.)"], correctIndex: 0, skill: "Beginner — negation" },
            { prompt: "A driver asks: وين بدّك تنزل؟ (ween baddak tinzal?)", options: ["قبال الجامعة، لو سمحت. (qbal el-jam3a, law sama7t.)", "عندي أخ وأخت. (3indi akh w ukht.)", "الأكل زاكي. (el-akel zaki.)"], correctIndex: 0, skill: "Beginner — response" },

            { prompt: "Choose the sentence with correct ‘they’ present tense.", options: ["همّ بشتغلوا بمكتب. (humme bishtighlu b-maktab.)", "همّ بتشتغل بمكتب. (humme btishtighil b-maktab.)", "همّ بشتغل بمكتب. (humme bishtighil b-maktab.)"], correctIndex: 0, skill: "Pre-Intermediate — plural present" },
            { prompt: "Choose: ‘Today is colder than yesterday.’", options: ["اليوم أبرد من امبارح. (el-yom abrad min embare7.)", "اليوم أبرد على امبارح. (el-yom abrad 3ala embare7.)", "اليوم برد لأنه امبارح. (el-yom bard la2inno embare7.)"], correctIndex: 0, skill: "Pre-Intermediate — comparison" },
            { prompt: "Which agreement sounds natural for non-human plural ‘cars’ in Palestinian Arabic?", options: ["السيارات غالية. (es-sayyarat ghalye.)", "السيارات غاليين. (es-sayyarat ghalyeen.)", "السيارات غالي. (es-sayyarat ghali.)"], correctIndex: 0, skill: "Pre-Intermediate — agreement" },
            { prompt: "A seller asks how much tomato you want. Choose ‘half a kilo.’", options: ["نصّ كيلو. (noSS kilo.)", "نصّ حبّة. (noSS 7abbe.)", "اتنين قطعة. (itnein qiT3a.)"], correctIndex: 0, skill: "Pre-Intermediate — quantity" },
            { prompt: "Tell a woman: ‘Take one pill and do not drink coffee.’", options: ["خدي حبّة ولا تشربي قهوة. (khodi 7abbe w la tishrabi qahwe.)", "خد حبّة وما شربت قهوة. (khod 7abbe w ma shribt qahwe.)", "خدوا حبّة ولا يشرب. (khodu 7abbe w la yishrab.)"], correctIndex: 0, skill: "Pre-Intermediate — command" },
            { prompt: "Choose the clearest report: ‘There is dampness behind the closet.’", options: ["في رطوبة ورا الخزانة. (fi rToobe wara el-khizane.)", "الخزانة فوق الرطوبة منيح. (el-khizane fo2 er-rToobe mnee7.)", "ورا في خزانة رطوبات. (wara fi khizane rToobat.)"], correctIndex: 0, skill: "Pre-Intermediate — location" },

            { prompt: "Choose a polite partial disagreement.", options: ["معك حق، بس أنا شايف الموضوع غير هيك. (ma3ak 7a2, bas ana shayef el-mawDoo3 gheir hek.)", "إنت غلط وما بتفهم. (inta ghalaT w ma btifham.)", "أكيد أنا الصح. (akeed ana eS-Sa7.)"], correctIndex: 0, skill: "Intermediate — opinion" },
            { prompt: "What does حكيتلهم وبعتتلهم الصور (7akeitlhom w ba3attilhom eS-Sowar) mean?", options: ["I spoke to them and sent them the photos.", "They spoke to me and sent us the photos.", "She spoke to him and he returned the photos."], correctIndex: 0, skill: "Intermediate — object pronouns" },
            { prompt: "Choose the completed past plural: ‘They came, but they did not fix it.’", options: ["إجوا، بس ما صلّحوه. (iju, bas ma Salla7u.)", "بييجوا، بس مش صلّح. (byeiju, bas mish Salla7.)", "راح ييجوا، بس ما صلّحوه امبارح. (ra7 yeeju, bas ma Salla7u embare7.)"], correctIndex: 0, skill: "Intermediate — past" },
            { prompt: "Choose the negative future with a backup plan.", options: ["مش راح نطلع؛ إذا شتت بنضلّ بالبيت. (mish ra7 niTla3; iza shatat bnDall bil-beit.)", "ما طلعنا بكرة؛ إذا امبارح. (ma Tli3na bokra; iza embare7.)", "مش نطلع راح؛ ضلّينا إذا. (mish niTla3 ra7; Dalleina iza.)"], correctIndex: 0, skill: "Intermediate — future condition" },
            { prompt: "What does صارلي سنتين بتعلّم (Sarli santain bat3allam) mean?", options: ["I have been learning for two years.", "I stopped learning two years ago.", "I will learn in two years."], correctIndex: 0, skill: "Intermediate — continuation" },
            { prompt: "Choose the best connected past narrative.", options: ["كنت عم بستنى لما اتصلوا فيّ، ولما سمعت الخبر صرت أهدى. (kunt 3am bastanna lamma itSalu fiyye, w lamma smi3t el-khabar Sirt ahda.)", "بكرة كنت بستنى امبارح وصرت راح. (bokra kunt bastanna embare7 w Sirt ra7.)", "عم بستنى لأنه بالنهاية قبل ما. (3am bastanna la2inno bin-nihaye qabl ma.)"], correctIndex: 0, skill: "Intermediate — narration" },
        ],
        quiz: [], rolePlays: [], translation: [], sections: [],
    },
    homework: { instructions: "No homework. Use the recommendation to choose a starting level." },
    teacherNotes: { myNotes: "" },
};
