// Auto-generated from original app.js
// Cloud sync expects firebase + db on window (same as original).

// ========================= CLOUD SYNC (LESSON TEMPLATES) =========================
const CLOUD_LESSONS_COLLECTION = "content_lessons";
const CLOUD_LESSONS_DOC_SHAPE_VERSION = 1;

// Local buffer to avoid overwriting active teacher edits when a remote update arrives
const remoteLessonBuffer = {}; // { [lessonId]: lessonObj }

function getServerTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
}

function normalizeCloudLesson(doc) {
    const data = doc.data() || {};
    const lesson = data.lesson && typeof data.lesson === "object" ? data.lesson : data;
    if (!lesson || typeof lesson !== "object") return null;
    if (!lesson.meta || typeof lesson.meta !== "object") return null;
    return JSON.parse(JSON.stringify(lesson));
}

function saveLessonLocally(lessonId) {
    if (typeof window.saveLessonToLS === "function") {
        window.saveLessonToLS(lessonId);
    }
}

async function loadLessonsFromCloudOnce() {
    if (!window.db) return;
    try {
        const snap = await window.db.collection(CLOUD_LESSONS_COLLECTION).get();
        snap.forEach((doc) => {
            const lesson = normalizeCloudLesson(doc);
            if (lesson) {
                window.lessons[doc.id] = lesson;
                // keep a local offline copy too
                saveLessonLocally(doc.id);
            }
        });
    } catch (e) {
        console.warn("loadLessonsFromCloudOnce failed:", e);
    }
}

function subscribeLessonsFromCloud() {
    if (!window.db) return () => { };
    try {
        return window.db.collection(CLOUD_LESSONS_COLLECTION).onSnapshot(
            (snap) => {
                snap.docChanges().forEach((ch) => {
                    const id = ch.doc.id;
                    const lesson = normalizeCloudLesson(ch.doc);
                    if (!lesson) return;

                    // If teacher is actively editing this lesson, don't overwrite their local editor state.
                    const isTeacherEditingThis =
                        window.appState &&
                        window.appState.currentUser &&
                        window.appState.currentUser.role === "teacher" &&
                        window.appState.teacherEditingLessonId === id;

                    if (isTeacherEditingThis) {
                        remoteLessonBuffer[id] = lesson;
                        // Optional: show a gentle UI hint if editor exists
                        const banner = document.getElementById("tdRemoteUpdateBanner");
                        if (banner) banner.classList.remove("hidden");
                        return;
                    }

                    window.lessons[id] = lesson;
                    saveLessonLocally(id);

                    // If user is viewing this lesson right now, refresh view
                    if (window.appState && window.appState.currentLessonId === id) {
                        try {
                            window.renderLesson();
                        } catch { }
                    }
                    // If user is on levels page, refresh units display (titles may change)
                    try {
                        const levelsScreen = document.getElementById("levels-screen");
                        if (levelsScreen && levelsScreen.classList.contains("screen--active")) {
                            window.renderLevels();
                        }
                    } catch { }
                });
            },
            (err) => console.warn("subscribeLessonsFromCloud error:", err)
        );
    } catch (e) {
        console.warn("subscribeLessonsFromCloud failed:", e);
        return () => { };
    }
}

async function saveLessonToCloud(lessonId) {
    if (!window.db) return;
    try {
        await window.db.collection(CLOUD_LESSONS_COLLECTION).doc(lessonId).set(
            {
                lesson: window.lessons[lessonId],
                shapeVersion: CLOUD_LESSONS_DOC_SHAPE_VERSION,
                updatedAt: getServerTimestamp(),
                updatedBy: window.appState?.currentUser?.uid || null,
            },
            { merge: true }
        );
    } catch (e) {
        console.warn("saveLessonToCloud failed:", e);
    }
}


async function deleteLessonFromCloud(lessonId) {
    if (!window.db) return;
    try {
        await window.db.collection(CLOUD_LESSONS_COLLECTION).doc(lessonId).delete();
    } catch (e) {
        console.warn("deleteLessonFromCloud failed:", e);
    }
}


// =========================
// Lesson Cloud Sync - Lazy (to reduce reads)
// =========================
function startLessonCloudSync() {
    if (!window.db) return;
    if (window.appState._lessonsSyncStarted) return;
    window.appState._lessonsSyncStarted = true;

    // 1) Load once (pull latest cloud versions)
    loadLessonsFromCloudOnce().then(() => {
        // 2) Start realtime listener only while in Units/Lesson screens
        if (!window.appState._unsubscribeLessons) {
            window.appState._unsubscribeLessons = subscribeLessonsFromCloud();
        }
    });
}

function stopLessonCloudSync() {
    if (window.appState._unsubscribeLessons) {
        try { window.appState._unsubscribeLessons(); } catch { }
        window.appState._unsubscribeLessons = null;
    }
    window.appState._lessonsSyncStarted = false;
}

async function syncLessonsNow({ showToast = true } = {}) {
    await loadLessonsFromCloudOnce();
    if (showToast) window.toast("Synced window.lessons from cloud.");
}

function setLessonSyncForScreen(screenId) {
    // Only keep realtime listener on while user is in Units/Lesson view
    const shouldListen = screenId === "levels-screen" || screenId === "lesson-screen";
    if (shouldListen) startLessonCloudSync();
    else stopLessonCloudSync();
}


export {
  getServerTimestamp,
  loadLessonsFromCloudOnce,
  subscribeLessonsFromCloud,
  saveLessonToCloud,
  deleteLessonFromCloud,
  startLessonCloudSync,
  stopLessonCloudSync,
  syncLessonsNow,
  setLessonSyncForScreen,
};
