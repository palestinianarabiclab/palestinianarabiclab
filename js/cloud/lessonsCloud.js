// Auto-generated from original app.js
// Cloud sync expects firebase + db on window (same as original).

// ========================= CLOUD SYNC (LESSON TEMPLATES) =========================
const CLOUD_LESSONS_COLLECTION = "content_lessons";
const CLOUD_LESSONS_DOC_SHAPE_VERSION = 1;
const CLOUD_ENCODED_ARRAY_KEY = "__lessonCloudArray";
const LESSONS_CACHE_KEY = "pal_arabic_cloud_lessons_cache_v1";
const LESSONS_CACHE_TTL_MS = 6 * 60 * 60 * 1000;

// Local buffer to avoid overwriting active teacher edits when a remote update arrives
const remoteLessonBuffer = {}; // { [lessonId]: lessonObj }

function getServerTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
}

function normalizeCloudLesson(doc) {
    const data = doc.data() || {};
    const lesson = decodeLessonFromFirestore(data.lesson && typeof data.lesson === "object" ? data.lesson : data);
    if (!lesson || typeof lesson !== "object") return null;
    if (!lesson.meta || typeof lesson.meta !== "object") return null;
    return JSON.parse(JSON.stringify(lesson));
}

function decodeLessonFromFirestore(value) {
    if (Array.isArray(value)) {
        return value.map((item) => decodeLessonFromFirestore(item));
    }
    if (value && typeof value === "object") {
        if (
            Object.prototype.hasOwnProperty.call(value, CLOUD_ENCODED_ARRAY_KEY) &&
            Array.isArray(value[CLOUD_ENCODED_ARRAY_KEY])
        ) {
            return value[CLOUD_ENCODED_ARRAY_KEY].map((item) => decodeLessonFromFirestore(item));
        }
        return Object.fromEntries(
            Object.entries(value).map(([key, item]) => [key, decodeLessonFromFirestore(item)])
        );
    }
    return value;
}

function saveLessonLocally(lessonId) {
    if (typeof window.saveLessonToLS === "function") {
        window.saveLessonToLS(lessonId);
    }
}

function applyCloudLessons(lessonMap) {
    Object.entries(lessonMap || {}).forEach(([id, lesson]) => {
        if (!lesson || typeof lesson !== "object") return;
        window.lessons[id] = lesson;
        saveLessonLocally(id);
    });
}

function readCachedCloudLessons({ allowStale = false } = {}) {
    try {
        const raw = localStorage.getItem(LESSONS_CACHE_KEY);
        if (!raw) return false;
        const cached = JSON.parse(raw);
        const age = Date.now() - Number(cached.savedAt || 0);
        if (!allowStale && age > LESSONS_CACHE_TTL_MS) return false;
        if (!cached.lessons || typeof cached.lessons !== "object") return false;
        applyCloudLessons(cached.lessons);
        return true;
    } catch {
        return false;
    }
}

function writeCachedCloudLessons(lessonMap) {
    try {
        localStorage.setItem(
            LESSONS_CACHE_KEY,
            JSON.stringify({
                savedAt: Date.now(),
                lessons: lessonMap,
            })
        );
    } catch {}
}

async function loadLessonsFromCloudOnce({ force = false } = {}) {
    if (!force && readCachedCloudLessons()) return;
    if (!window.db) {
        readCachedCloudLessons({ allowStale: true });
        return;
    }
    try {
        const snap = await window.db.collection(CLOUD_LESSONS_COLLECTION).get();
        const lessonMap = {};
        snap.forEach((doc) => {
            const lesson = normalizeCloudLesson(doc);
            if (lesson) {
                lessonMap[doc.id] = lesson;
            }
        });
        applyCloudLessons(lessonMap);
        writeCachedCloudLessons(lessonMap);
    } catch (e) {
        console.warn("loadLessonsFromCloudOnce failed:", e);
        readCachedCloudLessons({ allowStale: true });
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

    // Public student site: use a short local cache instead of a realtime listener.
    loadLessonsFromCloudOnce();
}

function stopLessonCloudSync() {
    if (window.appState._unsubscribeLessons) {
        try { window.appState._unsubscribeLessons(); } catch { }
        window.appState._unsubscribeLessons = null;
    }
    window.appState._lessonsSyncStarted = false;
}

async function syncLessonsNow({ showToast = true } = {}) {
    await loadLessonsFromCloudOnce({ force: true });
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
