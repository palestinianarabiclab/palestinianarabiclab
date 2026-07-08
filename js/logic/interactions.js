// Auto-generated refactor: keeps original logic mostly intact.
// NOTE: This module assigns key objects/functions to window to keep cross-file references working.

import * as CONST from '../core/constants.js';
import { defaultLessons as importedDefaultLessons } from '../lessons/index.js';
import { arabicLetters, arabicLettersExtras, arabicLettersExercises } from '../data/arabicLettersData.js';
import {
    createInitialContactSettings,
    loadContactSettings as loadStoredContactSettings,
    saveContactSettings as saveStoredContactSettings,
    buildWhatsAppUrl as buildWhatsAppUrlFromSettings,
    extractWhatsAppNumber,
} from './contactSettingsStore.js';
import {
    loadLessonsFromCloudOnce,
    syncLessonsNow,
    setLessonSyncForScreen,
} from '../cloud/lessonsCloud.js';

// Re-create original constant names in module scope
const LS_STUDENTS_KEY = CONST.LS_STUDENTS_KEY;
const LS_LESSON_PREFIX = CONST.LS_LESSON_PREFIX;
const LS_FONT_SIZE_KEY = CONST.LS_FONT_SIZE_KEY;
const LS_CUSTOM_UNITS_KEY = CONST.LS_CUSTOM_UNITS_KEY;
const LS_BACKUP_SETTINGS_KEY = CONST.LS_BACKUP_SETTINGS_KEY;
const LS_WHITEBOARD_PREFIX = CONST.LS_WHITEBOARD_PREFIX;
const LS_USER_ROLE_KEY = CONST.LS_USER_ROLE_KEY;
const LS_CONTACT_SETTINGS_KEY = CONST.LS_CONTACT_SETTINGS_KEY;
const LS_BOOKING_SETTINGS_KEY = CONST.LS_BOOKING_SETTINGS_KEY;
const LESSON_ID_GREETING = CONST.LESSON_ID_GREETING;
const LESSON_ID_DAILY_ROUTINE = CONST.LESSON_ID_DAILY_ROUTINE;
const LESSON_ID_FOOD_DRINK = CONST.LESSON_ID_FOOD_DRINK;
const LESSON_ID_FAMILY = CONST.LESSON_ID_FAMILY;
const LESSON_ID_TRANSPORT = CONST.LESSON_ID_TRANSPORT;
const LESSON_ID_WORK_STUDY = CONST.LESSON_ID_WORK_STUDY;
const LESSON_ID_HEALTH = CONST.LESSON_ID_HEALTH;
const LESSON_ID_APARTMENT = CONST.LESSON_ID_APARTMENT;
const LESSON_ID_SHOPPING = CONST.LESSON_ID_SHOPPING;
const LESSON_ID_WEATHER = CONST.LESSON_ID_WEATHER;
const LESSON_ID_OPINIONS = CONST.LESSON_ID_OPINIONS;
const LESSON_ID_COMPLAINTS = CONST.LESSON_ID_COMPLAINTS;
const LESSON_ID_PLANS_FUTURE = CONST.LESSON_ID_PLANS_FUTURE;
const LESSON_ID_FEELINGS = CONST.LESSON_ID_FEELINGS;
const LESSON_ID_HOBBIES = CONST.LESSON_ID_HOBBIES;
const BASE_PROGRESS_TEMPLATE = CONST.BASE_PROGRESS_TEMPLATE;
const EXTERNAL_BOOKING_URL = "https://bookingapp-tawny.vercel.app/";
const AD_TAB_INTERVAL = 3;

// Match original variable name used throughout the legacy code
const defaultLessons = importedDefaultLessons;
const saveLessonToCloud = () => {};

window.addEventListener("palArabicFirebaseReady", () => {
    loadLessonsFromCloudOnce().then(() => {
        const levelsScreen = document.getElementById("levels-screen");
        const lessonScreen = document.getElementById("lesson-screen");
        if (levelsScreen?.classList.contains("screen--active")) renderLevels();
        if (lessonScreen?.classList.contains("screen--active")) renderLesson();
    });
    loadCourseOfferSettings().catch(console.warn);
    watchStudentAuthState();
});

const noopAsync = async () => {};
const canUseTeacherRole = () => false;
const ensureTeacherDocRecord = noopAsync;
const ensureTeacherUserRecord = async () => false;
const resolveUserRole = async () => ({ role: "guest", data: {} });
const bootstrapTeacherAccess = noopAsync;
const createStudentAccount = noopAsync;
const renderTeacherBookingsView = async ({ bookingCache }) => bookingCache || new Map();
const openReschedulePanel = noopAsync;
const cancelTeacherBooking = noopAsync;
const rescheduleTeacherBooking = noopAsync;
const clearAllTeacherBookings = noopAsync;
const loadBookingStatusByEmail = noopAsync;
const submitGuestBooking = noopAsync;
const cancelGuestBooking = noopAsync;
const wireDialogueEditor = () => {};
const wireGrammarEditor = () => {};
const wireTranslationEditor = () => {};
const wireQuizEditor = () => {};
const wireRolePlayEditor = () => {};
const wireHomeworkEditor = () => {};
const wireTeacherNotesEditor = () => {};

function createDefaultBookingSettings(timezone = "Africa/Cairo") {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].reduce((acc, day) => {
        acc[day] = { enabled: false, start: "09:00", end: "17:00" };
        return acc;
    }, {});
    return {
        timezone,
        slotMinutes: 50,
        breakMinutes: 10,
        totalSlotMinutes: 60,
        days,
        exceptions: [],
    };
}

const createInitialBookingSettings = () => createDefaultBookingSettings();
const normalizeBookingSettings = (settings) => ({ ...createDefaultBookingSettings(settings?.timezone), ...(settings || {}) });
const loadStoredBookingSettings = (key, fallback) => {
    try {
        const raw = localStorage.getItem(key);
        return raw ? normalizeBookingSettings(JSON.parse(raw)) : fallback;
    } catch {
        return fallback;
    }
};
const saveStoredBookingSettings = (key, settings) => {
    try { localStorage.setItem(key, JSON.stringify(settings)); } catch {}
};
const loadBookingSettingsStateFromCloud = async (_db, fallback) => fallback;
const saveBookingSettingsStateToCloud = noopAsync;
const bookingToMinutes = (timeStr) => {
    const [hours, minutes] = String(timeStr || "0:0").split(":").map(Number);
    return (hours || 0) * 60 + (minutes || 0);
};
const bookingAddDaysToDateKey = (dateKey, days) => {
    const date = new Date(`${dateKey}T00:00:00`);
    date.setDate(date.getDate() + days);
    return date.toISOString().slice(0, 10);
};
const bookingGetZonedParts = (date) => ({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
});
const bookingZonedDateTimeToUtcMs = (_timeZone, year, month, day, hour, minute) =>
    new Date(year, month - 1, day, hour, minute).getTime();
const bookingIsSlotBlockedByException = () => false;
const bookingGetBookedSlotsMap = async () => new Map();
const bookingDoesSlotOverlap = () => false;
const bookingFindBookingConflict = async () => null;
const bookingGetAvailableSlots = async () => [];
const bookingGetSchedulableSlots = async () => [];
const loadContactSettingsStateFromCloud = async (_db, fallback) => fallback;
const saveContactSettingsStateToCloud = noopAsync;

const lessons = {};
// Expose for cloud module and other modules
window.lessons = lessons;
window.defaultLessons = defaultLessons;

function getLessonContentVersion(lesson) {
    return Number(lesson?.meta?.contentVersion || 0);
}

function preferBundledLessonIfNewer(id, incomingLesson) {
    const bundledLesson = defaultLessons[id];
    if (
        bundledLesson &&
        getLessonContentVersion(bundledLesson) > getLessonContentVersion(incomingLesson)
    ) {
        return JSON.parse(JSON.stringify(bundledLesson));
    }
    return incomingLesson;
}


let cloudSaveTimer = null;

function scheduleCloudSave() {
    if (!appState.currentUser || appState.currentUser.role !== "teacher") return;
    clearTimeout(cloudSaveTimer);
    cloudSaveTimer = setTimeout(() => {
        saveStudentsToCloud().catch(console.error);
    }, 600); // نصف ثانية بعد آخر تغيير
}

// ========================= STATE =========================
const appState = {
    students: [],
    currentStudentId: null,
    currentLessonId: LESSON_ID_GREETING,
    teacherMode: false,
    currentTab: "overview",
    lessonFontSize: 1,
    vocabCoreVisited: {},
    guestMode: false,
    guestStudent: null,
};
window.appState = appState;

let pendingAdBreakAction = null;
let lessonTabNavigationCount = 0;

let backupSettings = {
    frequency: "off",      // "off" | "daily" | "2d" | "weekly"
    lastBackupAt: null,    // ISO string
};

let contactSettings = createInitialContactSettings();
let courseOfferSettings = {
    courseAccessPrice: 15,
    courseAccessUnits: 15,
    paypalPaymentLink: "",
};
let currentAccessProfile = {
    courseAccess: false,
    accessType: "none",
};
let studentAccessUnsubscribe = null;
let runtimeBusyBlocks = [];
let runtimeBusyBlocksLoadedAt = 0;
let runtimeBusyBlocksLoadedDays = 0;
const runtimeBusyBlocksTtlMs = 60 * 1000;
let bookingSettings = createInitialBookingSettings();

function getDefaultBookingSettings() {
    return createDefaultBookingSettings(bookingSettings.timezone || getLocalTimezone() || "Africa/Cairo");
}

function getScopedStorageKey(baseKey) {
    const uid = appState.currentUser?.uid || "anonymous";
    return `${baseKey}:${uid}`;
}

function deriveStudentNameFromEmail(email = "") {
    const localPart = String(email || "").split("@")[0] || "";
    const cleaned = localPart
        .replace(/[._-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    return cleaned.length > 1 ? cleaned : "Student";
}

function getDisplayNameFromUser(user, profile = {}) {
    return (profile.name || user?.displayName || deriveStudentNameFromEmail(user?.email) || "Student").trim();
}

async function readStudentAccessProfile(uid) {
    if (!window.db || !uid) return {};
    try {
        const snap = await window.db.collection("users").doc(uid).get();
        return snap.exists ? (snap.data() || {}) : {};
    } catch (error) {
        console.warn("Could not read student access profile.", error);
        return {};
    }
}

async function ensureStudentProfileDoc(user, name = "") {
    if (!window.db || !user?.uid) return {};
    const ref = window.db.collection("users").doc(user.uid);
    const snap = await ref.get();
    const existing = snap.exists ? (snap.data() || {}) : {};
    const displayName = (name || existing.name || user.displayName || deriveStudentNameFromEmail(user.email) || "Student").trim();
    if (snap.exists) {
        await ref.set({
            email: user.email || existing.email || "",
            name: displayName,
            phone: existing.phone || "",
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        }, { merge: true });
    } else {
        await ref.set({
            email: user.email || "",
            name: displayName,
            phone: "",
            role: "student",
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }
    return { ...existing, name: displayName, email: user.email || existing.email || "", role: "student" };
}

function stopStudentAccessListener() {
    if (typeof studentAccessUnsubscribe === "function") {
        studentAccessUnsubscribe();
    }
    studentAccessUnsubscribe = null;
}

function applyStudentAccessProfile(user, profile = {}) {
    const name = getDisplayNameFromUser(user, profile);
    currentAccessProfile = {
        courseAccess: profile.courseAccess === true,
        accessType: profile.accessType || "none",
    };
    if (appState.currentUser?.role === "student") {
        const student = getCurrentStudent();
        if (student) {
            student.name = name;
            student.level = profile.level || student.level || "Beginner";
            student.progress = profile.progress || student.progress || {};
            student.homeworkNotes = profile.homeworkNotes || student.homeworkNotes || {};
        }
    }
    saveStudentsToLS({ skipCloud: true });
    const levelsScreen = document.getElementById("levels-screen");
    const lessonScreen = document.getElementById("lesson-screen");
    if (levelsScreen?.classList.contains("screen--active")) {
        const label = document.getElementById("currentStudentNameLevels");
        if (label) label.textContent = name;
        renderLevels();
        updateContinueButton();
    }
    if (lessonScreen?.classList.contains("screen--active") && !canOpenLesson(appState.currentLessonId)) {
        toast("Full course access was removed. Preview units are still available.");
        goToLevels();
    }
}

function startStudentAccessListener(user) {
    stopStudentAccessListener();
    if (!window.db || !user?.uid) return;
    studentAccessUnsubscribe = window.db.collection("users").doc(user.uid).onSnapshot((snap) => {
        if (!snap.exists || appState.currentUser?.uid !== user.uid) return;
        const profile = snap.data() || {};
        if ((profile.role || "student") !== "student") return;
        applyStudentAccessProfile(user, profile);
    }, (error) => {
        console.warn("Could not watch student course access.", error);
    });
}

async function startSignedInStudentLearning(user, profile = {}, { navigate = true } = {}) {
    const name = getDisplayNameFromUser(user, profile);
    appState.currentUser = {
        uid: user.uid,
        email: user.email || "",
        role: "student",
    };
    currentAccessProfile = {
        courseAccess: profile.courseAccess === true,
        accessType: profile.accessType || "none",
    };
    appState.guestMode = false;
    appState.guestStudent = null;
    const student = {
        id: user.uid,
        name,
        goals: [],
        level: profile.level || "Beginner",
        progress: profile.progress || {},
        homeworkNotes: profile.homeworkNotes || {},
    };
    appState.students = [student];
    appState.currentStudentId = student.id;
    appState.currentLessonId = appState.currentLessonId || LESSON_ID_GREETING;
    appState.currentTab = appState.currentTab || "overview";
    saveStudentsToLS({ skipCloud: true });
    updateAuthUI();
    startStudentAccessListener(user);
    if (navigate) goToLevels();
}

function waitForStudentAuth() {
    if (window.auth && window.db) return Promise.resolve(window.auth);
    return new Promise((resolve, reject) => {
        const started = Date.now();
        const timer = window.setInterval(() => {
            if (window.auth && window.db) {
                window.clearInterval(timer);
                resolve(window.auth);
                return;
            }
            if (Date.now() - started > 8000) {
                window.clearInterval(timer);
                reject(new Error("Student login is still loading. Please try again in a moment."));
            }
        }, 100);
    });
}

function watchStudentAuthState() {
    if (!window.auth) return;
    window.auth.onAuthStateChanged(async (user) => {
        if (!user) {
            stopStudentAccessListener();
            return;
        }
        const profile = await readStudentAccessProfile(user.uid);
        if ((profile.role || "student") !== "student") return;
        await startSignedInStudentLearning(user, profile, { navigate: false });
    });
}

async function signInStudentFromSite({ signup = false } = {}) {
    const msg = document.getElementById("studentSiteAuthMsg");
    const email = (document.getElementById("studentSiteEmail")?.value || "").trim().toLowerCase();
    const password = document.getElementById("studentSitePassword")?.value || "";
    if (msg) msg.textContent = signup ? "Creating your account..." : "Signing in...";
    const auth = await waitForStudentAuth();
    let cred;
    if (signup) {
        cred = await auth.createUserWithEmailAndPassword(email, password);
        const profile = await ensureStudentProfileDoc(cred.user);
        const displayName = getDisplayNameFromUser(cred.user, profile);
        await cred.user.updateProfile({ displayName });
        if (msg) msg.textContent = "Account created.";
        closeLearningChoiceModal();
        await startSignedInStudentLearning(cred.user, { ...profile, name: displayName });
        return;
    }
    cred = await auth.signInWithEmailAndPassword(email, password);
    const profile = await readStudentAccessProfile(cred.user.uid);
    if ((profile.role || "student") !== "student") throw new Error("This account is not a student account.");
    if (msg) msg.textContent = "Signed in.";
    closeLearningChoiceModal();
    await startSignedInStudentLearning(cred.user, profile);
}

function ensureBookingSettingsShape() {
    bookingSettings = normalizeBookingSettings(bookingSettings);
}

function loadBookingSettings() {
    bookingSettings = loadStoredBookingSettings(getScopedStorageKey(LS_BOOKING_SETTINGS_KEY), bookingSettings);
    return bookingSettings;
}

function saveBookingSettings() {
    saveStoredBookingSettings(getScopedStorageKey(LS_BOOKING_SETTINGS_KEY), bookingSettings);
}

async function loadBookingSettingsFromCloud() {
    if (!window.db) return bookingSettings;
    bookingSettings = await loadBookingSettingsStateFromCloud(window.db, bookingSettings);
    return bookingSettings;
}

async function saveBookingSettingsToCloud() {
    if (!window.db) return;
    await saveBookingSettingsStateToCloud(window.db, bookingSettings);
}

function loadContactSettings() {
    contactSettings = loadStoredContactSettings(getScopedStorageKey(LS_CONTACT_SETTINGS_KEY), contactSettings);
    return contactSettings;
}

function saveContactSettings() {
    saveStoredContactSettings(getScopedStorageKey(LS_CONTACT_SETTINGS_KEY), contactSettings);
}

async function loadContactSettingsFromCloud() {
    if (!window.db) return contactSettings;
    contactSettings = await loadContactSettingsStateFromCloud(window.db, contactSettings);
    return contactSettings;
}

async function saveContactSettingsToCloud() {
    if (!window.db || typeof firebase === "undefined") return;
    await saveContactSettingsStateToCloud(window.db, firebase, contactSettings);
}

function formatAccessPrice(value) {
    const amount = Number(value || 0);
    if (!Number.isFinite(amount) || amount <= 0) return "$15";
    return `$${amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2)}`;
}

function updateCourseOfferUi() {
    const priceLabel = document.getElementById("subscribeAccessPrice");
    if (priceLabel) {
        priceLabel.textContent = formatAccessPrice(courseOfferSettings.courseAccessPrice);
    }
    const paypalLink = document.getElementById("subscribePayPalLink");
    if (paypalLink) {
        const url = (courseOfferSettings.paypalPaymentLink || "").trim();
        paypalLink.hidden = !url;
        if (url) paypalLink.href = url;
    }
}

async function loadCourseOfferSettings() {
    if (!window.db) {
        updateCourseOfferUi();
        return courseOfferSettings;
    }
    try {
        const snap = await window.db.collection("bookingSettings").doc("primary").get();
        const data = snap.exists ? (snap.data() || {}) : {};
        courseOfferSettings = {
            ...courseOfferSettings,
            ...(data.courseOffers || {}),
        };
    } catch (error) {
        console.warn("Could not load course offer settings.", error);
    }
    updateCourseOfferUi();
    return courseOfferSettings;
}

async function ensureTeacherDoc(uid, email) {
    if (!window.db || typeof firebase === "undefined") return;
    return ensureTeacherDocRecord({ db, firebase, uid, email });
}

async function ensureTeacherUserDoc(uid, email) {
    if (!window.db || typeof firebase === "undefined") return false;
    return ensureTeacherUserRecord({ db, firebase, uid, email });
}


function buildWhatsAppUrl(message) {
    return buildWhatsAppUrlFromSettings(contactSettings, message);
}

function mergeBusyBlocksLists(existingList, incomingList) {
    const merged = [];
    const seen = new Set();
    [...(Array.isArray(existingList) ? existingList : []), ...(Array.isArray(incomingList) ? incomingList : [])].forEach((block) => {
        if (!block || !block.date || !block.start || !block.end) return;
        const key = `${block.date}|${block.start}|${block.end}|${block.sourceEventId || ""}|${block.note || ""}`;
        if (seen.has(key)) return;
        seen.add(key);
        merged.push(block);
    });
    return merged.sort((a, b) => `${a.date} ${a.start}`.localeCompare(`${b.date} ${b.start}`));
}

function isTikTokInAppBrowser() {
    const ua = navigator.userAgent || "";
    return /TikTok|BytedanceWebview|musical_ly/i.test(ua);
}

function isMobileDevice() {
    const ua = navigator.userAgent || "";
    return /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
}

let pendingWhatsAppTargets = null;

function openWhatsAppWithMessage(message) {
    const webUrl = buildWhatsAppUrl(message);
    const number = extractWhatsAppNumber(contactSettings);
    if (!webUrl || !number) {
        toast("WhatsApp contact not set.");
        return;
    }

    const appUrl = `whatsapp://send?phone=${number}&text=${encodeURIComponent(message)}`;
    const fallbackToWeb = () => {
        try {
            window.location.assign(webUrl);
        } catch {
            window.open(webUrl, "_blank", "noopener,noreferrer");
        }
    };

    if (isTikTokInAppBrowser()) {
        try {
            navigator.clipboard?.writeText(webUrl);
        } catch {}
        toast("If TikTok blocks WhatsApp, open in browser or paste the copied link.");
        fallbackToWeb();
        return;
    }

    if (isMobileDevice()) {
        pendingWhatsAppTargets = { appUrl, webUrl };
        const chooser = document.getElementById("whatsAppChooserModal");
        if (chooser) {
            chooser.classList.add("modal--open");
            return;
        }
    }

    const fallbackTimer = setTimeout(() => {
        fallbackToWeb();
    }, isMobileDevice() ? 900 : 1200);

    const clearFallback = () => {
        clearTimeout(fallbackTimer);
        document.removeEventListener("visibilitychange", clearFallback);
        window.removeEventListener("pagehide", clearFallback);
        window.removeEventListener("blur", clearFallback);
    };

    document.addEventListener("visibilitychange", clearFallback, { once: true });
    window.addEventListener("pagehide", clearFallback, { once: true });
    window.addEventListener("blur", clearFallback, { once: true });

    try {
        window.location.assign(appUrl);
    } catch {
        fallbackToWeb();
    }
}

function getLocalTimezone() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch {
        return "";
    }
}

function formatSlotTime(ts) {
    try {
        return new Date(ts).toLocaleString();
    } catch {
        return String(ts);
    }
}

function getDateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}

function toMinutes(timeStr) {
    return bookingToMinutes(timeStr);
}

function addDaysToDateKey(dateKey, days) {
    return bookingAddDaysToDateKey(dateKey, days);
}

function getZonedParts(date, timeZone) {
    return bookingGetZonedParts(date, timeZone);
}

function getTimeZoneOffsetMs(timeZone, date) {
    const parts = getZonedParts(date, timeZone);
    const asUtc = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second || 0);
    return asUtc - date.getTime();
}

function zonedDateTimeToUtcMs(timeZone, year, month, day, hour, minute) {
    return bookingZonedDateTimeToUtcMs(timeZone, year, month, day, hour, minute);
}

function normalizePhone(input) {
    const arabicDigits = "٠١٢٣٤٥٦٧٨٩";
    let s = (input || "").toString();
    s = s
        .split("")
        .map((ch) => {
            const idx = arabicDigits.indexOf(ch);
            return idx >= 0 ? String(idx) : ch;
        })
        .join("");
    return s.replace(/[^\d+]/g, "");
}

function getSelectedPhoneDialCode() {
    const countrySelect = document.getElementById("bookingPhoneCountry");
    if (!countrySelect) return "";
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    return selectedOption?.dataset?.dial || "";
}

function buildBookingPhoneValue(phoneRaw) {
    const normalized = normalizePhone(phoneRaw);
    if (!normalized) return "";
    if (normalized.startsWith("+")) return normalized;
    const dialCode = getSelectedPhoneDialCode();
    return `${dialCode}${normalized.replace(/^0+/, "")}`;
}

function getPreferredPhoneCountryCode() {
    try {
        const locale = navigator.language || "";
        const region = locale.includes("-") ? locale.split("-").pop().toUpperCase() : "";
        if (region) return region;
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
        if (timeZone.includes("Cairo")) return "EG";
        if (timeZone.includes("Jerusalem") || timeZone.includes("Gaza")) return "PS";
        if (timeZone.includes("Amman")) return "JO";
        if (timeZone.includes("Riyadh")) return "SA";
        if (timeZone.includes("Dubai")) return "AE";
    } catch {}
    return "EG";
}

function setupBookingPhoneField() {
    const countrySelect = document.getElementById("bookingPhoneCountry");
    const phoneInput = document.getElementById("bookingPhone");
    if (!countrySelect || !phoneInput) return;
    const preferred = getPreferredPhoneCountryCode();
    const matchingOption = Array.from(countrySelect.options).find((option) => option.value === preferred);
    if (matchingOption) {
        countrySelect.value = preferred;
    }
    const updatePlaceholder = () => {
        const dialCode = getSelectedPhoneDialCode();
        phoneInput.placeholder = dialCode ? `Mobile number (${dialCode})` : "Mobile number";
    };
    countrySelect.addEventListener("change", updatePlaceholder);
    updatePlaceholder();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
}

function isValidPhone(phone) {
    const digits = (phone || "").replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
}

function escapeHtml(str) {
    return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function escapeAttr(str) {
    return escapeHtml(str).replace(/`/g, "&#96;");
}

function isLocalDevHost() {
    try {
        const host = window.location.hostname || "";
        return host === "localhost" || host === "127.0.0.1";
    } catch {
        return false;
    }
}

function getBookingReasonLabels() {
    const labels = {
        travel: "For Travel",
        study: "For Study",
        work: "For Work",
        family: "Family Communication",
        fun: "For Fun",
        other: "Other",
    };
    return Array.from(document.querySelectorAll("#bookingReasonGroup input:checked"))
        .map((input) => labels[input.value] || input.value)
        .filter(Boolean);
}

async function hashEmail(email) {
    const normalized = (email || "").trim().toLowerCase();
    const encoder = new TextEncoder();
    const data = encoder.encode(normalized);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function isSlotBlockedByException(slotStartMs, slotMinutes) {
    return bookingIsSlotBlockedByException(slotStartMs, slotMinutes, {
        bookingSettings,
        runtimeBusyBlocks,
        getLocalTimezone,
    });
}

async function getBookedSlotsMap(startMs, endMs) {
    if (!window.db) return new Map();
    return bookingGetBookedSlotsMap(startMs, endMs, { db: window.db, bookingSettings });
}

function doesSlotOverlap(slotStartMs, slotMinutes, bookedMap, excludeBookingId = null) {
    return bookingDoesSlotOverlap(slotStartMs, slotMinutes, bookedMap, excludeBookingId);
}

async function findBookingConflict(slotStartMs, { excludeBookingId = null } = {}) {
    if (!window.db) return null;
    return bookingFindBookingConflict(slotStartMs, { db: window.db, bookingSettings }, { excludeBookingId });
}

async function getAvailableSlots(daysToShow = 14, options = {}) {
    if (!window.db) return [];
    return bookingGetAvailableSlots(daysToShow, {
        db: window.db,
        bookingSettings,
        runtimeBusyBlocks,
        getLocalTimezone,
        getDateKey,
    }, options);
}

async function getSchedulableSlots(daysToShow = 14, options = {}) {
    if (!window.db) return [];
    return bookingGetSchedulableSlots(daysToShow, {
        db: window.db,
        bookingSettings,
        runtimeBusyBlocks,
        getLocalTimezone,
        getDateKey,
    }, options);
}

const exportContext = {
    lessonId: null,
    studentName: "",
    source: "", // "lesson-view" أو "teacher-dashboard"
};
let customUnits = {
    Beginner: [],
    "Pre-Intermediate": [],
    Intermediate: [],
};
// =============== SECONDARY AUTH APP (لإنشاء الطلاب فقط) ===============
let secondaryAuth = null;

function getSecondaryAuth() {
    if (secondaryAuth) return secondaryAuth;

    if (typeof firebase === "undefined" || typeof firebaseConfig === "undefined") {
        console.warn("Firebase or firebaseConfig not available for secondary app.");
        return null;
    }

    // نحاول نلقى app باسم "teacherAdmin" لو موجود
    let secondaryApp = firebase.apps.find((a) => a.name === "teacherAdmin");
    if (!secondaryApp) {
        secondaryApp = firebase.initializeApp(firebaseConfig, "teacherAdmin");
    }

    secondaryAuth = secondaryApp.auth();
    return secondaryAuth;
}

// ================= AUTH UI =================
function updateAuthUI() {
    const authBar = document.getElementById("authBar");
    const navTeacher = document.querySelector('.top-nav__link[data-nav="teacher-dashboard-screen"]');
    const navProfiles = document.querySelector('.top-nav__link[data-nav="students-screen"]');
    if (authBar) authBar.style.display = "none";
    if (navTeacher) navTeacher.style.display = "none";
    if (navProfiles) navProfiles.style.display = "inline-flex";
    if (typeof window.setDrawingLayerForRole === "function") {
        window.setDrawingLayerForRole("guest");
    }
    updateFloatingChatVisibility();
}
function updateFloatingChatVisibility() {
    const floatingChatBtn = document.getElementById("floatingChatBtn");
    if (!floatingChatBtn) return;
    const isGuest = appState.currentUser?.role === "guest";
    const isLevelsScreen = document.getElementById("levels-screen")?.classList.contains("screen--active");
    floatingChatBtn.style.display = isGuest && isLevelsScreen ? "inline-flex" : "none";
}

// Public student build: no Firebase Auth session is required.
startFreeLearning({ navigate: false });
updateAuthUI();

// =======================
// Translation Sentence Generator (from lesson vocabulary)
// =======================

function normalizeText(s) {
    return (s || "").toString().trim();
}

function pickRandom(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function uniqBy(arr, keyFn) {
    const seen = new Set();
    const out = [];
    for (const x of arr) {
        const k = keyFn(x);
        if (!k || seen.has(k)) continue;
        seen.add(k);
        out.push(x);
    }
    return out;
}

// Try to detect nouns / greetings / misc from vocabulary (very lightweight)
function bucketVocabulary(vocabItems) {
    const items = (Array.isArray(vocabItems) ? vocabItems : [])
        .map((it) => ({
            ...it,
            ar: normalizeText(it.ar),
            en: normalizeText(it.en),
            hint: normalizeText(it.hint),
            exampleAr: normalizeText(it.exampleAr),
            exampleEn: normalizeText(it.exampleEn),
        }))
        .filter((it) => it.ar || it.en);

    // greetings / common phrases: heuristics by english keywords OR arabic starts
    const greetingKeywords = [
        "hello",
        "hi",
        "good morning",
        "good evening",
        "goodbye",
        "welcome",
        "nice to meet",
        "please",
        "thanks",
        "thank you",
    ];

    const greetings = items.filter((it) => {
        const en = it.en.toLowerCase();
        const ar = it.ar;
        return (
            greetingKeywords.some((k) => en.includes(k)) ||
            ar.includes("مرحبا") ||
            ar.includes("أهلا") ||
            ar.includes("صباح") ||
            ar.includes("مساء") ||
            ar.includes("مع السلامة") ||
            ar.includes("تشرف")
        );
    });

    // nouns: heuristic - english contains "my" forms or common noun list in hint
    // (Not perfect; we also just keep "others" as nouns candidates.)
    const nounCandidates = items.filter((it) => {
        const en = it.en.toLowerCase();
        const ar = it.ar;
        // If it looks like a noun (contains "/" or is a single word) we allow it
        const enWords = en.split(/\s+/).filter(Boolean);
        return enWords.length <= 3 || ar.length <= 12;
    });

    // verbs: if forms.present has content OR english starts with "to "
    const verbs = items.filter((it) => {
        const en = it.en.toLowerCase();
        const hasForms =
            it.forms &&
            ((it.forms.present && Object.keys(it.forms.present).length > 0) ||
                (it.forms.past && Object.keys(it.forms.past).length > 0) ||
                (it.forms.future && Object.keys(it.forms.future).length > 0));
        return hasForms || en.startsWith("to ");
    });

    const others = items;

    return {
        all: items,
        greetings: uniqBy(greetings, (x) => x.id || x.ar || x.en),
        nouns: uniqBy(nounCandidates, (x) => x.id || x.ar || x.en),
        verbs: uniqBy(verbs, (x) => x.id || x.ar || x.en),
        others: uniqBy(others, (x) => x.id || x.ar || x.en),
    };
}

/**
 * Generate translation sentences (not word=word) from lesson vocabulary
 * @param {object} lesson - the lesson object (has vocabulary)
 * @param {number} count - how many translation items to generate
 * @returns {Array} translation items [{id,type,textAr,textEn}]
 */
function generateTranslationFromVocab(lesson, count = 10) {
    const vocabCore = lesson?.vocabulary?.core || [];
    const vocabExtra = lesson?.vocabulary?.extra || [];
    const vocab = bucketVocabulary([...vocabCore, ...vocabExtra]);

    const results = [];

    // Some reusable fillers to make sentences natural
    const names = ["سارة", "أحمد", "لينا", "كريم", "نابل", "هبة"];
    const timesAr = ["اليوم", "هلّق", "بكرا"];
    const timesEn = ["today", "now", "tomorrow"];

    function addPair(en, ar) {
        const textEn = normalizeText(en);
        const textAr = normalizeText(ar);
        if (!textEn || !textAr) return;

        // avoid duplicates
        const key = (textEn + "||" + textAr).toLowerCase();
        if (results.some((r) => (r.textEn + "||" + r.textAr).toLowerCase() === key)) return;

        // alternate directions roughly half/half
        const type = results.length % 2 === 0 ? "enToAr" : "arToEn";

        results.push({
            id: `auto_t_${results.length + 1}`,
            type,
            textEn,
            textAr,
        });
    }

    // ---------- Template 1: Greeting + name ----------
    // "Hello, I'm X." / "مرحبا، أنا X."
    if (vocab.greetings.length) {
        const g = pickRandom(vocab.greetings);
        const helloAr = g?.ar || "مرحبا";
        const helloEn = g?.en || "Hello";
        const name = pickRandom(names);

        addPair(`${helloEn}! I'm ${name}.`, `${helloAr}! أنا ${name}.`);
    } else {
        const name = pickRandom(names);
        addPair(`Hello! I'm ${name}.`, `مرحبا! أنا ${name}.`);
    }

    // ---------- Template 2: How are you? + I'm fine ----------
    // "How are you today? I'm fine." / "كيفك اليوم؟ أنا منيح/منيحة."
    // If you have "كيفك" or "منيح" in vocab, use them, else fallback
    const howAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("كيف")))?.ar || "كيفك";
    const howEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("how are")))?.en ||
        "How are you";
    const fineAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("منيح") || x.ar.includes("منيحة")))
            ?.ar || "منيح";
    const fineEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("fine")))
            ?.en || "I’m fine";

    const tA = pickRandom(timesAr);
    const tE = timesEn[timesAr.indexOf(tA)] || "today";
    addPair(`${howEn} ${tE}? ${fineEn}.`, `${howAr} ${tA}؟ أنا ${fineAr}.`);

    // ---------- Template 3: Nice to meet you ----------
    // "Nice to meet you, X." / "تشرفنا يا X."
    const meetAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("تشرف")))?.ar || "تشرفنا";
    const meetEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("nice to meet")))
            ?.en || "Nice to meet you";
    const name2 = pickRandom(names);
    addPair(`${meetEn}, ${name2}.`, `${meetAr} يا ${name2}.`);

    // ---------- Template 4: Want + noun (biddi + noun) ----------
    // We'll pick a noun candidate; if none, use "قهوة" (coffee)
    const noun = pickRandom(vocab.nouns) || { ar: "قهوة", en: "coffee" };
    // Natural sentence:
    // "I want a coffee, please." / "بدي قهوة، لو سمحت."
    addPair(
        `I want ${noun.en || "coffee"}, please.`,
        `بدي ${noun.ar || "قهوة"}، لو سمحت.`
    );

    // ---------- Template 5: Do you have + noun? ----------
    // "Do you have ___?" / "عندك ___؟"
    const noun2 = pickRandom(shuffle(vocab.nouns)) || { ar: "مي", en: "water" };
    addPair(`Do you have ${noun2.en || "water"}?`, `عندك ${noun2.ar || "مي"}؟`);

    // ---------- Template 6: My family / my work / my study style ----------
    // If you have family nouns, use them, otherwise use generic
    const familyWord =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("family") || x.ar.includes("عيلة")))
            ?.ar || "عيلتي";
    const familyEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("family")))
            ?.en || "My family";

    addPair(`${familyEn} is big.`, `${familyWord} كبيرة.`);

    // ---------- Template 7: Goodbye + see you tomorrow ----------
    const byeAr =
        pickRandom(vocab.others.filter((x) => x.ar.includes("مع السلامة") || x.ar.includes("الله معك")))
            ?.ar || "مع السلامة";
    const byeEn =
        pickRandom(vocab.others.filter((x) => x.en.toLowerCase().includes("goodbye")))
            ?.en || "Goodbye";
    addPair(`${byeEn}, see you tomorrow.`, `${byeAr}، بشوفك بكرا.`);

    // ---------- Bonus: Use existing example sentences from vocab (if present) ----------
    // These are already full sentences and strongly "from the lesson"
    // We add a few of them if they exist, to reach target count.
    const examplePairs = vocab.all
        .filter((it) => it.exampleAr && it.exampleEn)
        .map((it) => ({ en: it.exampleEn, ar: it.exampleAr }));

    for (const ex of shuffle(examplePairs)) {
        if (results.length >= count) break;
        addPair(ex.en, ex.ar);
    }

    // If still not enough, generate variations with different nouns/times
    while (results.length < count) {
        const n = pickRandom(vocab.nouns) || { ar: "قهوة", en: "coffee" };
        const ta = pickRandom(timesAr);
        const te = timesEn[timesAr.indexOf(ta)] || "today";
        addPair(
            `I want ${n.en || "coffee"} ${te}.`,
            `بدي ${n.ar || "قهوة"} ${ta}.`
        );
    }

    return results.slice(0, count);
}

/**
 * Ensure lesson has translation items (auto-generate if empty)
 * Call this when opening a lesson or rendering the Translation tab.
 */
function ensureLessonTranslation(lesson, count = 10) {
    if (!lesson.practice) lesson.practice = {};
    if (!Array.isArray(lesson.practice.translation) || lesson.practice.translation.length === 0) {
        lesson.practice.translation = generateTranslationFromVocab(lesson, count);
    }
}
function safeArr(x) { return Array.isArray(x) ? x : []; }
function txt(x) { return (x ?? "").toString().trim(); }
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function pick(arr) { return arr.length ? arr[Math.floor(Math.random() * arr.length)] : null; }
function uniqPairs(items) {
    const seen = new Set();
    return items.filter(it => {
        const key = (txt(it.textEn) + "||" + txt(it.textAr)).toLowerCase();
        if (!txt(it.textEn) || !txt(it.textAr)) return false;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}


function generateTranslationItemsFromLesson(lesson, minCount = 7) {
    const items = [];

    const vocab = lesson?.vocabulary || {};
    const core = safeArr(vocab.core);
    const extra = safeArr(vocab.extra);
    const allVocab = [...core, ...extra];

    // 1) أخذ أمثلة من vocabulary (أفضل مصدر لأنه جمل جاهزة من المنهج)
    for (const v of allVocab) {
        const ar = txt(v.exampleAr);
        const en = txt(v.exampleEn);
        if (ar && en) {
            items.push({ id: `ex_${txt(v.id) || Math.random()}`, textEn: en, textAr: ar });
        }
    }

    // 2) أخذ جمل من الحوار (كل سطر pair مع ترجمته)
    const lines = safeArr(lesson?.dialogue?.lines);
    for (const line of lines) {
        const ar = txt(line.ar);
        const en = txt(line.en);
        if (ar && en) {
            items.push({ id: `dlg_${Math.random()}`, textEn: en, textAr: ar });
        }
    }

    // 3) إذا لسه أقل من المطلوب: نولّد جمل بالقوالب
    const nouns = allVocab
        .map(v => ({ ar: txt(v.ar), en: txt(v.en) }))
        .filter(v => v.ar || v.en);

    const nameAr = ["سارة", "أحمد", "لينا", "كريم", "هبة", "نابل"];
    const nameEn = ["Sara", "Ahmad", "Lina", "Karim", "Hiba", "Nabil"];

    const getNoun = () => pick(nouns) || { ar: "قهوة", en: "coffee" };

    const templates = [
        () => {
            const i = Math.floor(Math.random() * nameAr.length);
            return { en: `Hello! I'm ${nameEn[i]}.`, ar: `مرحبا! أنا ${nameAr[i]}.` };
        },
        () => {
            return { en: `How are you today?`, ar: `كيفك اليوم؟` };
        },
        () => {
            const n = getNoun();
            return { en: `I want ${n.en || "coffee"}, please.`, ar: `بدي ${n.ar || "قهوة"}، لو سمحت.` };
        },
        () => {
            const n = getNoun();
            return { en: `Do you have ${n.en || "water"}?`, ar: `عندك ${n.ar || "مي"}؟` };
        },
        () => {
            const n = getNoun();
            return { en: `This is ${n.en || "it"}.`, ar: `هاد ${n.ar || "هاد"}.` };
        },
        () => {
            return { en: `Nice to meet you.`, ar: `تشرفنا.` };
        },
        () => {
            return { en: `Goodbye, see you tomorrow.`, ar: `مع السلامة، بشوفك بكرا.` };
        },
    ];

    let guard = 0;
    while (items.length < minCount && guard < 50) {
        const t = pick(templates);
        if (t) {
            const out = t();
            items.push({ id: `auto_${items.length + 1}`, textEn: out.en, textAr: out.ar });
        }
        guard++;
    }

    return uniqPairs(items).slice(0, Math.max(minCount, 7));
}


function ensureTranslationItems(lesson, minCount = 7) {
    if (!lesson.practice) lesson.practice = {};
    const list = safeArr(lesson.practice.translation);

    if (list.length > 0) return; // موجودة مسبقاً

    const generated = generateTranslationItemsFromLesson(lesson, minCount);

    // نحولها لصيغة القالب: type + textEn/textAr
    lesson.practice.translation = generated.map((it, idx) => ({
        id: it.id || `t_${idx + 1}`,
        type: idx % 2 === 0 ? "enToAr" : "arToEn",
        textEn: it.textEn,
        textAr: it.textAr,
    }));
}


// ========================= VOCAB MODAL STATE =========================
const vocabModalState = {
    list: [],       // array of items (core أو extra)
    index: 0,       // current index in list
    showExamples: true,// هل الأمثلة ظاهرة أو مخفية
    showAr: true,
    showEn: true,
    showArabeezy: true,
    nextClickCount: 0,
};
const translationState = {
    items: [],
    index: 0,
    hidePrompt: false,
    hideAnswer: false,
    shuffled: false,
};
const microCheckState = {
    isOpen: false,
    pendingNextAdvance: false,
    currentItem: null,
    currentLessonId: null,
    checked: false,
    selectedOption: null,
    buildAnswer: [],
    rotationIndexByLesson: {},
};

function getVocabMemoryKey(lessonId, studentId = appState.currentStudentId) {
    const sid = studentId || "anon";
    return `pal_vocab_memory_${sid}_${lessonId || "unknown"}`;
}

function loadVocabMemory(lessonId, studentId = appState.currentStudentId) {
    try {
        const raw = localStorage.getItem(getVocabMemoryKey(lessonId, studentId));
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function saveVocabMemory(lessonId, memory, studentId = appState.currentStudentId) {
    try {
        localStorage.setItem(
            getVocabMemoryKey(lessonId, studentId),
            JSON.stringify(memory || {})
        );
    } catch { }
}

function setVocabMemoryStatus(lessonId, itemId, status) {
    if (!lessonId || !itemId) return;
    const memory = loadVocabMemory(lessonId);
    memory[itemId] = status;
    saveVocabMemory(lessonId, memory);
}



function getMicroCheckConfig(lesson) {
    const cfg = lesson?.microChecks || {};
    return {
        enabled: cfg.enabled === true,
        every: Number.isFinite(cfg.every) ? cfg.every : 5,
        items: Array.isArray(cfg.items) ? cfg.items : [],
    };
}

function ensureMicroCheckItems(lesson) {
    if (!lesson || !lesson.microChecks) return;
    const items = Array.isArray(lesson.microChecks.items) ? lesson.microChecks.items : [];
    const existingTypes = new Set(items.map((it) => it.type));
    const needed = ["match", "complete", "reorder", "choose"].filter(
        (type) => !existingTypes.has(type)
    );
    if (!needed.length) return;
    const generated = buildMicroCheckItemsFromLesson(lesson, needed);
    if (generated.length) {
        lesson.microChecks.items = items.concat(generated);
    }
}

function buildMicroCheckItemsFromLesson(lesson, types) {
    const vocab = getLessonVocabPairs(lesson);
    const grammarRows = getLessonGrammarRows(lesson);
    const items = [];
    let autoId = 1;
    const makeId = (prefix) => `mc_auto_${prefix}_${autoId++}`;

    types.forEach((type) => {
        let item = null;
        if (type === "match") {
            item = buildMatchMicroCheck(vocab, makeId);
        } else if (type === "complete") {
            item = buildCompleteMicroCheck(vocab, makeId);
        } else if (type === "reorder") {
            item = buildReorderMicroCheck(vocab, makeId);
        } else if (type === "choose") {
            item = buildChooseMicroCheck(grammarRows, makeId);
        }
        if (item) items.push(item);
    });

    return items;
}

function getLessonVocabPairs(lesson) {
    const vocab = lesson?.vocabulary || {};
    const items = [...safeArr(vocab.core), ...safeArr(vocab.extra)].map((it) => ({
        ar: txt(it.ar),
        en: txt(it.en),
        exampleAr: txt(it.exampleAr),
        exampleEn: txt(it.exampleEn),
    }));
    return items.filter((it) => it.ar && it.en);
}

function getLessonGrammarRows(lesson) {
    const pronouns = [
        "أنا",
        "إنتَ",
        "إنتِ",
        "هو",
        "هي",
        "إحنا",
        "إنتو",
        "هم",
        "انت",
        "انتي",
    ];
    const items = safeArr(lesson?.grammar);
    const rows = [];
    items.forEach((g) => {
        const examples = Array.isArray(g.examples) ? g.examples : [];
        examples.forEach((ex) => {
            const exampleText = txt(ex.ar);
            if (!exampleText) return;
            const matched = pronouns.find((p) => exampleText.includes(p));
            if (!matched) return;
            rows.push({ pronoun: matched, example: exampleText });
        });
    });
    return rows;
}

function buildMatchMicroCheck(vocab, makeId) {
    if (vocab.length < 2) return null;
    const target = pick(vocab);
    if (!target) return null;
    const distractors = shuffleArray(vocab.filter((it) => it.en !== target.en))
        .map((it) => it.en)
        .filter(Boolean);
    const options = shuffleArray([target.en, ...distractors].slice(0, 4));
    if (options.length < 2) return null;
    return {
        id: makeId("match"),
        type: "match",
        prompt: `طابق الكلمة العربية مع الترجمة: ${target.ar}`,
        options,
        correct: target.en,
    };
}

function buildCompleteMicroCheck(vocab, makeId) {
    const candidates = vocab.filter(
        (it) => it.exampleAr && it.ar && it.exampleAr.includes(it.ar)
    );
    if (!candidates.length) return null;
    const target = pick(candidates);
    if (!target) return null;
    const prompt = target.exampleAr.replace(target.ar, "___");
    const distractors = shuffleArray(vocab.filter((it) => it.ar !== target.ar))
        .map((it) => it.ar)
        .filter(Boolean);
    const options = shuffleArray([target.ar, ...distractors].slice(0, 4));
    if (options.length < 2) return null;
    return {
        id: makeId("complete"),
        type: "complete",
        prompt,
        options,
        correct: target.ar,
    };
}

function buildReorderMicroCheck(vocab, makeId) {
    const sentences = vocab
        .map((it) => it.exampleAr || it.exampleEn)
        .filter(Boolean);
    const candidates = sentences
        .map((text) => ({ text, words: tokenizeMicroCheckWords(text) }))
        .filter((it) => it.words.length >= 3 && it.words.length <= 8);
    if (!candidates.length) return null;
    const target = pick(candidates);
    if (!target) return null;
    return {
        id: makeId("reorder"),
        type: "reorder",
        prompt: "رتّب الكلمات",
        options: target.words,
        correct: target.words,
    };
}

function buildChooseMicroCheck(rows, makeId) {
    if (rows.length < 2) return null;
    const target = pick(rows);
    if (!target) return null;
    const distractors = shuffleArray(rows.filter((r) => r.pronoun !== target.pronoun))
        .map((r) => r.pronoun)
        .filter(Boolean);
    const options = shuffleArray([target.pronoun, ...distractors].slice(0, 4));
    if (options.length < 2) return null;
    return {
        id: makeId("choose"),
        type: "choose",
        prompt: `اختر الضمير الصحيح: ${target.example}`,
        options,
        correct: target.pronoun,
    };
}

function tokenizeMicroCheckWords(text) {
    return String(text)
        .replace(/[.,!?;:()"]/g, "")
        .split(/\s+/)
        .filter(Boolean);
}

function pickNextMicroCheckItem(lesson) {
    const cfg = getMicroCheckConfig(lesson);
    if (!cfg.items.length) return null;
    const lessonId = appState.currentLessonId || "lesson";
    const nextIndex = microCheckState.rotationIndexByLesson[lessonId] || 0;
    microCheckState.rotationIndexByLesson[lessonId] =
        (nextIndex + 1) % cfg.items.length;
    return cfg.items[nextIndex];
}

function openMicroCheckModal(lesson) {
    const item = pickNextMicroCheckItem(lesson);
    if (!item) return false;
    const modal = document.getElementById("microCheckModal");
    if (!modal) return false;

    microCheckState.isOpen = true;
    microCheckState.currentItem = item;
    microCheckState.currentLessonId = appState.currentLessonId;
    microCheckState.checked = false;
    microCheckState.selectedOption = null;
    microCheckState.buildAnswer = [];

    renderMicroCheckItem(item);
    modal.classList.add("modal--open");
    return true;
}

function closeMicroCheckModal() {
    const modal = document.getElementById("microCheckModal");
    if (modal) modal.classList.remove("modal--open");
    microCheckState.isOpen = false;
    microCheckState.currentItem = null;
    microCheckState.checked = false;
    microCheckState.selectedOption = null;
    microCheckState.buildAnswer = [];
    microCheckState.pendingNextAdvance = false;
}

function renderMicroCheckItem(item) {
    const titleEl = document.getElementById("microCheckTitle");
    const promptEl = document.getElementById("microCheckPrompt");
    const optionsEl = document.getElementById("microCheckOptions");
    const builderEl = document.getElementById("microCheckBuilder");
    const feedbackEl = document.getElementById("microCheckFeedback");
    const resetBtn = document.getElementById("microCheckResetBtn");
    const checkBtn = document.getElementById("microCheckCheckBtn");
    const continueBtn = document.getElementById("microCheckContinueBtn");
    const closeBtn = document.getElementById("microCheckCloseBtn");

    if (!titleEl || !promptEl || !optionsEl || !builderEl || !feedbackEl) return;

    const titles = {
        match: "Match (Arabic ↔ English) – طابق",
        complete: "Complete the sentence – اختار الكلمة الناقصة",
        reorder: "Build it – رتّب الكلمات",
        choose: "Choose the correct form – اختر الصيغة",
    };

    titleEl.textContent = item.title || titles[item.type] || "Micro-Check";
    promptEl.textContent = item.prompt || "";
    feedbackEl.textContent = "";
    optionsEl.innerHTML = "";
    builderEl.innerHTML = "";

    if (resetBtn) resetBtn.style.display = item.type === "reorder" ? "" : "none";
    if (checkBtn) checkBtn.disabled = false;
    if (continueBtn) continueBtn.disabled = true;
    if (closeBtn) closeBtn.disabled = true;

    if (item.type === "reorder") {
        const bankLabel = document.createElement("div");
        bankLabel.className = "translation-muted";
        bankLabel.textContent = "Word bank";

        const answerLabel = document.createElement("div");
        answerLabel.className = "translation-muted";
        answerLabel.textContent = "Your sentence";

        const bank = document.createElement("div");
        bank.className = "microcheck__bank";
        const answer = document.createElement("div");
        answer.className = "microcheck__answer";

        const baseWords = Array.isArray(item.options) && item.options.length
            ? item.options
            : Array.isArray(item.correct)
                ? item.correct
                : String(item.correct || "")
                    .split(" ")
                    .filter(Boolean);
        const words = shuffleArray(baseWords || []);
        microCheckState.buildAnswer = [];

        function renderBank() {
            bank.innerHTML = "";
            words.forEach((w, idx) => {
                const chip = document.createElement("button");
                chip.type = "button";
                chip.className = "microcheck__chip";
                chip.textContent = w;
                chip.addEventListener("click", () => {
                    const picked = words.splice(idx, 1)[0];
                    microCheckState.buildAnswer.push(picked);
                    renderBank();
                    renderAnswer();
                });
                bank.appendChild(chip);
            });
        }

        function renderAnswer() {
            answer.innerHTML = "";
            microCheckState.buildAnswer.forEach((w, idx) => {
                const chip = document.createElement("button");
                chip.type = "button";
                chip.className = "microcheck__chip";
                chip.textContent = w;
                chip.addEventListener("click", () => {
                    const removed = microCheckState.buildAnswer.splice(idx, 1)[0];
                    words.splice(idx, 0, removed);
                    renderBank();
                    renderAnswer();
                });
                answer.appendChild(chip);
            });
        }

        renderBank();
        renderAnswer();

        builderEl.appendChild(bankLabel);
        builderEl.appendChild(bank);
        builderEl.appendChild(answerLabel);
        builderEl.appendChild(answer);

        if (resetBtn) {
            resetBtn.onclick = () => {
                words.splice(0, words.length, ...shuffleArray(baseWords || []));
                microCheckState.buildAnswer = [];
                renderBank();
                renderAnswer();
                feedbackEl.textContent = "";
                microCheckState.checked = false;
                if (continueBtn) continueBtn.disabled = true;
                if (closeBtn) closeBtn.disabled = true;
            };
        }
        return;
    }

    const options = shuffleArray(item.options || []);
    options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "microcheck__option";
        btn.textContent = opt;
        btn.dataset.option = opt;
        btn.addEventListener("click", () => {
            if (microCheckState.checked) return;
            microCheckState.selectedOption = opt;
            optionsEl.querySelectorAll(".microcheck__option").forEach((b) => {
                b.classList.toggle("is-selected", b.dataset.option === opt);
            });
        });
        optionsEl.appendChild(btn);
    });
}

function evaluateMicroCheck() {
    const item = microCheckState.currentItem;
    const feedbackEl = document.getElementById("microCheckFeedback");
    const continueBtn = document.getElementById("microCheckContinueBtn");
    const closeBtn = document.getElementById("microCheckCloseBtn");

    if (!item || !feedbackEl) return;

    if (item.type === "reorder") {
        const correct = Array.isArray(item.correct)
            ? item.correct
            : String(item.correct || "")
                .split(" ")
                .filter(Boolean);
        if (microCheckState.buildAnswer.length !== correct.length) {
            feedbackEl.textContent = "Complete the sentence first.";
            return;
        }
        const isCorrect =
            microCheckState.buildAnswer.join(" ").trim() === correct.join(" ").trim();
        feedbackEl.textContent = isCorrect ? "Correct!" : "Not quite. Try again.";
        microCheckState.checked = isCorrect;
        if (isCorrect) {
            if (continueBtn) continueBtn.disabled = false;
            if (closeBtn) closeBtn.disabled = false;
        }
        return;
    }

    if (!microCheckState.selectedOption) {
        feedbackEl.textContent = "Choose an answer first.";
        return;
    }

    const correct =
        Array.isArray(item.correct) ? item.correct[0] : item.correct;
    const isCorrect = microCheckState.selectedOption === correct;
    feedbackEl.textContent = isCorrect ? "Correct!" : "Not quite. Try again.";
    microCheckState.checked = isCorrect;

    document.querySelectorAll("#microCheckOptions .microcheck__option").forEach((btn) => {
        const isThisCorrect = btn.dataset.option === correct;
        btn.classList.toggle("is-correct", isThisCorrect && microCheckState.checked);
        btn.classList.toggle(
            "is-wrong",
            !isThisCorrect && btn.dataset.option === microCheckState.selectedOption && microCheckState.checked
        );
    });

    if (isCorrect) {
        if (continueBtn) continueBtn.disabled = false;
        if (closeBtn) closeBtn.disabled = false;
    }
}

function continueFromMicroCheck() {
    if (!microCheckState.checked) return;
    closeMicroCheckModal();
    if (microCheckState.pendingNextAdvance) {
        microCheckState.pendingNextAdvance = false;
        if (vocabModalState.list.length) {
            vocabModalState.index =
                (vocabModalState.index + 1) % vocabModalState.list.length;
            renderVocabModalFromState();
        }
    }
}

// ========================= HELPERS =========================
// ========================= WHITEBOARD =========================
const whiteboardState = {
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    ctx: null,
    color: "#111827",
    size: 3,
};

function getWhiteboardKeyForCurrentLesson() {
    return LS_WHITEBOARD_PREFIX + (appState.currentLessonId || "no_lesson");
}

function saveWhiteboardToLS() {
    const canvas = document.getElementById("whiteboardCanvas");
    if (!canvas) return;
    try {
        const dataUrl = canvas.toDataURL("image/png");
        localStorage.setItem(getWhiteboardKeyForCurrentLesson(), dataUrl);
    } catch {
        // ignore
    }
}

function loadWhiteboardFromLS() {
    const canvas = document.getElementById("whiteboardCanvas");
    if (!canvas) return;
    const dataUrl = localStorage.getItem(getWhiteboardKeyForCurrentLesson());
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!dataUrl) return;
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = dataUrl;
}

function initWhiteboardCanvas() {
    const canvas = document.getElementById("whiteboardCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    whiteboardState.ctx = ctx;

    // إعدادات الرسم
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    // تحميل أي رسم محفوظ
    loadWhiteboardFromLS();

    function getCanvasPos(evt) {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;

        if (evt.touches && evt.touches.length > 0) {
            clientX = evt.touches[0].clientX;
            clientY = evt.touches[0].clientY;
        } else {
            clientX = evt.clientX;
            clientY = evt.clientY;
        }

        return {
            x: ((clientX - rect.left) / rect.width) * canvas.width,
            y: ((clientY - rect.top) / rect.height) * canvas.height,
        };
    }

    function startDrawing(evt) {
        evt.preventDefault();
        whiteboardState.isDrawing = true;
        const pos = getCanvasPos(evt);
        whiteboardState.lastX = pos.x;
        whiteboardState.lastY = pos.y;
    }

    function draw(evt) {
        if (!whiteboardState.isDrawing) return;
        evt.preventDefault();
        const pos = getCanvasPos(evt);
        ctx.strokeStyle = whiteboardState.color;
        ctx.lineWidth = whiteboardState.size;

        ctx.beginPath();
        ctx.moveTo(whiteboardState.lastX, whiteboardState.lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();

        whiteboardState.lastX = pos.x;
        whiteboardState.lastY = pos.y;
    }

    function stopDrawing(evt) {
        if (!whiteboardState.isDrawing) return;
        whiteboardState.isDrawing = false;
        saveWhiteboardToLS();
    }

    // Mouse events
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    // Touch events
    canvas.addEventListener("touchstart", startDrawing, { passive: false });
    canvas.addEventListener("touchmove", draw, { passive: false });
    canvas.addEventListener("touchend", stopDrawing);
    canvas.addEventListener("touchcancel", stopDrawing);
}

// ========================= BACKUP SETTINGS =========================
function loadBackupSettings() {
    try {
        const raw = localStorage.getItem(LS_BACKUP_SETTINGS_KEY);
        if (!raw) {
            backupSettings = { frequency: "off", lastBackupAt: null };
            return;
        }
        const parsed = JSON.parse(raw);
        backupSettings = {
            frequency: parsed.frequency || "off",
            lastBackupAt: parsed.lastBackupAt || null,
        };
    } catch {
        backupSettings = { frequency: "off", lastBackupAt: null };
    }
}

function saveBackupSettings() {
    localStorage.setItem(LS_BACKUP_SETTINGS_KEY, JSON.stringify(backupSettings));
}

function backupFrequencyToDays(freq) {
    switch (freq) {
        case "daily":
            return 1;
        case "2d":
            return 2;
        case "weekly":
            return 7;
        default:
            return null; // off
    }
}

function checkBackupReminder() {
    const banner = document.getElementById("backupReminderBanner");
    const info = document.getElementById("backupLastInfo");
    if (!banner || !info) return;

    const daysLimit = backupFrequencyToDays(backupSettings.frequency);
    if (!daysLimit) {
        banner.classList.add("hidden");
        return;
    }

    if (!backupSettings.lastBackupAt) {
        // ما في ولا backup لسه
        banner.textContent =
            "You haven't created any backup yet. It's a good time to export your data now.";
        banner.classList.remove("hidden");
        info.textContent = "";
        return;
    }

    const last = new Date(backupSettings.lastBackupAt);
    const diffMs = Date.now() - last.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    if (diffDays >= daysLimit) {
        banner.textContent =
            `It has been about ${Math.round(diffDays)} day(s) since your last backup. ` +
            `Please export your data so you don't lose student progress.`;
        banner.classList.remove("hidden");
    } else {
        banner.classList.add("hidden");
    }

    info.textContent =
        "Last backup: " +
        last.toLocaleString() +
        "  |  Frequency: " +
        backupSettings.frequency;
}
// ========================= BACKUP EXPORT / IMPORT =========================
function buildBackupSnapshot() {
    return {
        version: 1,
        createdAt: new Date().toISOString(),
        students: appState.students || [],
        lessons: lessons || {},
        customUnits: customUnits || {},
        settings: {
            lessonFontSize: appState.lessonFontSize,
        },
    };
}

function downloadBackupFile(snapshot) {
    const json = JSON.stringify(snapshot, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    const date = new Date();
    const stamp =
        date.getFullYear().toString() +
        String(date.getMonth() + 1).padStart(2, "0") +
        String(date.getDate()).padStart(2, "0") +
        "_" +
        String(date.getHours()).padStart(2, "0") +
        String(date.getMinutes()).padStart(2, "0");

    a.href = url;
    a.download = `pal_arabic_backup_${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function handleExportBackup() {
    const snapshot = buildBackupSnapshot();
    downloadBackupFile(snapshot);

    // حدّث وقت آخر backup
    backupSettings.lastBackupAt = new Date().toISOString();
    saveBackupSettings();
    checkBackupReminder();
    alert("Backup exported successfully. Keep the JSON file in a safe place.");
}

function applyBackupSnapshot(snapshot) {
    if (!snapshot || typeof snapshot !== "object") {
        alert("Invalid backup file.");
        return;
    }

    // students
    if (Array.isArray(snapshot.students)) {
        appState.students = snapshot.students;
        saveStudentsToLS();
    }

    // lessons (نمحي القديم ونحط الجديد)
    if (snapshot.lessons && typeof snapshot.lessons === "object") {
        // clear current lessons
        Object.keys(lessons).forEach((id) => {
            delete lessons[id];
        });

        // clear old lesson entries from localStorage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(LS_LESSON_PREFIX)) {
                localStorage.removeItem(key);
                i--; // لأن length تغير
            }
        }

        Object.keys(snapshot.lessons).forEach((id) => {
            lessons[id] = snapshot.lessons[id];
            saveLessonToLS(id);
        });
    }

    // custom units
    if (snapshot.customUnits && typeof snapshot.customUnits === "object") {
        customUnits = {
            Beginner: snapshot.customUnits.Beginner || [],
            "Pre-Intermediate": snapshot.customUnits["Pre-Intermediate"] || [],
            Intermediate: snapshot.customUnits.Intermediate || [],
        };
        saveCustomUnits();
    }

    // settings (زي حجم الخط)
    if (snapshot.settings) {
        if (typeof snapshot.settings.lessonFontSize === "number") {
            appState.lessonFontSize = snapshot.settings.lessonFontSize;
            applyFontSize();
            saveFontSize();
        }
    }

    // إعادة رسم الواجهات الرئيسية
    renderStudents();
    renderTeacherPicker();
    if (getCurrentStudent()) {
        renderLevels();
    }

    alert("Backup imported successfully.");
}

function handleImportBackupFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const json = e.target.result;
            const snapshot = JSON.parse(json);
            if (
                !confirm(
                    "Importing this backup will replace current students, lessons and units.\nAre you sure?"
                )
            ) {
                return;
            }
            applyBackupSnapshot(snapshot);
        } catch (err) {
            console.error(err);
            alert("Could not read backup file.");
        }
    };
    reader.readAsText(file);
}

const $ = (s) => document.querySelector(s);
const $all = (s) => Array.from(document.querySelectorAll(s));

const arabicLettersState = {
    selectedId: arabicLetters[0]?.id || null,
    tab: "letters",
    selectedForm: "initial",
    initialized: false,
    mode: "student",
};
const arabicLettersModalState = {
    open: false,
};
const arabicLettersExerciseState = {
    match: new Map(),
    order: new Map(),
    mcq: new Map(),
};

function renderArabicLettersScreen() {
    if (!arabicLettersState.initialized) return;
    renderArabicLettersExtras();
    renderArabicLettersGrid();
    renderArabicLetterDetail();
    renderArabicLettersSide();
    renderArabicLettersExercises();
    setArabicLettersTab(arabicLettersState.tab || "letters");
}

function initArabicLettersScreen() {
    const lettersGrid = $("#lettersGrid");
    if (!lettersGrid || arabicLettersState.initialized) return;

    const tabButtons = $all(".letters-tab-btn");
    tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const tab = btn.dataset.lettersTab || "letters";
            setArabicLettersTab(tab);
        });
    });

    lettersGrid.addEventListener("click", (event) => {
        const card = event.target.closest(".letter-card");
        if (!card) return;
        const letterId = card.dataset.letterId;
        if (!letterId) return;
        arabicLettersState.selectedId = letterId;
        renderArabicLettersGrid();
        renderArabicLetterDetail();
        openLetterModal();
    });

    const exercises = $("#lettersExercises");
    if (exercises) {
        exercises.addEventListener("click", handleArabicLettersExerciseClick);
    }
    const btnLetterModalPrev = $("#btnLetterModalPrev");
    const btnLetterModalNext = $("#btnLetterModalNext");
    if (btnLetterModalPrev) {
        btnLetterModalPrev.addEventListener("click", () => {
            selectAdjacentArabicLetter(-1);
        });
    }
    if (btnLetterModalNext) {
        btnLetterModalNext.addEventListener("click", () => {
            selectAdjacentArabicLetter(1);
        });
    }

    const letterModal = $("#letterModal");
    if (letterModal) {
        letterModal.addEventListener("click", (event) => {
            const btn = event.target.closest("[data-letter-form]");
            if (!btn) return;
            const form = btn.dataset.letterForm;
            if (!form) return;
            arabicLettersState.selectedForm = form;
            renderArabicLetterDetail();
        });
    }

    $all("[data-close-letter-modal]").forEach((el) =>
        el.addEventListener("click", () => closeLetterModal())
    );

    const lettersSide = $("#lettersSide");
    if (lettersSide) {
        lettersSide.addEventListener("click", (event) => {
            const btn = event.target.closest("[data-letters-mode]");
            if (!btn) return;
            const mode = btn.dataset.lettersMode;
            if (!mode) return;
            setArabicLettersMode(mode);
        });
    }

    arabicLettersState.initialized = true;
    renderArabicLettersScreen();
}

function setArabicLettersTab(tab) {
    arabicLettersState.tab = tab;
    const lettersTab = $("#lettersTabLetters");
    const exercisesTab = $("#lettersTabExercises");
    const tabButtons = $all(".letters-tab-btn");

    if (lettersTab) lettersTab.classList.toggle("letters-tab--active", tab === "letters");
    if (exercisesTab) exercisesTab.classList.toggle("letters-tab--active", tab === "exercises");
    tabButtons.forEach((btn) => {
        const isActive = btn.dataset.lettersTab === tab;
        btn.classList.toggle("is-active", isActive);
    });
}

function setArabicLettersMode(mode) {
    arabicLettersState.mode = mode === "teacher" ? "teacher" : "student";
    renderArabicLettersSide();
}

function renderArabicLettersExtras() {
    const extras = $("#lettersExtras");
    if (!extras) return;
    extras.innerHTML = arabicLettersExtras
        .map(
            (item) => `
            <div class="letters-extra">
                <div class="letters-extra__title">${item.title}</div>
                <div class="letters-extra__text">${item.text}</div>
            </div>
        `
        )
        .join("");
}

function buildArabicLettersExportHtml() {
    const extrasHtml = arabicLettersExtras
        .map(
            (item) => `
            <div class="extra-card">
                <div class="extra-title">${escapeHtml(item.title)}</div>
                <div class="extra-text">${escapeHtml(item.text)}</div>
            </div>
        `
        )
        .join("");

    const lettersHtml = arabicLetters
        .map((letter) => {
            const sunMoon = letter.sunMoon === "sun" ? "Sun" : "Moon";
            const examples = letter.examples || {};
            const exInitial =
                examples.initial?.arTashkeel || examples.initial?.ar || "";
            const exMedial =
                examples.medial?.arTashkeel || examples.medial?.ar || "";
            const exFinal =
                examples.final?.arTashkeel || examples.final?.ar || "";
            return `
                <div class="letter-card">
                    <div class="letter-glyph" lang="ar">${escapeHtml(letter.letter)}</div>
                    <div class="letter-name">${escapeHtml(letter.nameEn)} (${escapeHtml(letter.nameAr)})</div>
                    <div class="letter-meta">${escapeHtml(letter.sound)} · ${sunMoon}</div>
                    <div class="letter-forms">
                        <div><span>Isolated</span><strong lang="ar">${escapeHtml(letter.forms.isolated)}</strong></div>
                        <div>
                            <span>Initial</span>
                            <strong lang="ar">${escapeHtml(letter.forms.initial)}</strong>
                            <em lang="ar">${escapeHtml(exInitial)}</em>
                        </div>
                        <div>
                            <span>Medial</span>
                            <strong lang="ar">${escapeHtml(letter.forms.medial)}</strong>
                            <em lang="ar">${escapeHtml(exMedial)}</em>
                        </div>
                        <div>
                            <span>Final</span>
                            <strong lang="ar">${escapeHtml(letter.forms.final)}</strong>
                            <em lang="ar">${escapeHtml(exFinal)}</em>
                        </div>
                    </div>
                    <div class="letter-example">
                        <span lang="ar">${escapeHtml(letter.exampleAr)}</span>
                        <span class="example-roman">${escapeHtml(letter.exampleArabeezy)}</span>
                    </div>
                    <div class="letter-note">${escapeHtml(letter.note)}</div>
                </div>
            `;
        })
        .join("");

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Arabic Letters Export</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: "IBM Plex Sans Arabic", system-ui, sans-serif; margin: 20px; color: #0f172a; direction: rtl; }
    h1 { font-size: 20px; margin-bottom: 8px; }
    .subtitle { font-size: 12px; color: #64748b; margin-bottom: 14px; }
    .extras { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 16px; }
    .extra-card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px 12px; }
    .extra-title { font-weight: 700; font-size: 12px; margin-bottom: 4px; }
    .extra-text { font-size: 11px; color: #475569; }
    .letters-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 12px; }
    .letter-card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px 12px; background: #fff; break-inside: avoid; page-break-inside: avoid; }
    .extra-card { break-inside: avoid; page-break-inside: avoid; }
    .letter-glyph { font-size: 32px; font-weight: 700; text-align: center; }
    .letter-name { text-align: center; font-weight: 600; margin-top: 4px; font-size: 13px; }
    .letter-meta { text-align: center; font-size: 11px; color: #64748b; margin-top: 2px; }
    .letter-forms { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; margin-top: 8px; }
    .letter-forms div { border: 1px solid #e2e8f0; border-radius: 8px; padding: 4px 6px; text-align: center; font-size: 11px; display: grid; gap: 2px; }
    .letter-forms span { display: block; color: #64748b; font-size: 9px; }
    .letter-forms strong { font-size: 13px; }
    .letter-forms em { font-style: normal; font-size: 11px; color: #475569; }
    .letter-example { margin-top: 6px; display: flex; justify-content: space-between; font-size: 11px; }
    .example-roman { color: #64748b; }
    .letter-note { margin-top: 6px; font-size: 10px; color: #64748b; }
    @media print { body { margin: 10mm; } }
  </style>
</head>
<body>
  <h1>Arabic Letters</h1>
  <div class="subtitle">Exported from Palestinian Arabic Local LMS</div>
  <div class="extras">${extrasHtml}</div>
  <div class="letters-grid">${lettersHtml}</div>
</body>
</html>`;
}

function exportArabicLettersPdf() {
    const html = buildArabicLettersExportHtml();
    const win = window.open("", "_blank");
    if (!win) {
        alert("Popup blocked – please allow popups to export PDF.");
        return;
    }
    win.document.write(html);
    win.document.close();
    win.focus();
    win.print();
}

function renderArabicLettersSide() {
    const side = $("#lettersSide");
    if (!side) return;

    const letter =
        arabicLetters.find((item) => item.id === arabicLettersState.selectedId) || arabicLetters[0];
    const mode = arabicLettersState.mode || "student";

    const tips =
        mode === "teacher"
            ? [
                "Start with sound + example word out loud.",
                "Show isolated form, then connect it in a short word.",
                "Highlight if it connects to the left or not.",
                "Use one quick exercise before moving on.",
            ]
            : [
                "Tap a letter card to open details.",
                "Say the sound, then read the example word.",
                "Notice how the shape changes in a word.",
                "Try one exercise for practice.",
            ];

    const flow =
        mode === "teacher"
            ? ["Model", "Repeat", "Connect", "Check"]
            : ["See", "Say", "Trace", "Practice"];

    const noteLower = (letter?.note || "").toLowerCase();
    const connectsLeft = noteLower.includes("does not connect")
        ? "Does not connect left"
        : "Connects left";

    side.innerHTML = `
        <div class="letters-panel">
            <div class="letters-panel__title">Mode</div>
            <div class="letters-mode">
                <button class="letters-mode__btn ${mode === "student" ? "is-active" : ""}" data-letters-mode="student">Student</button>
                <button class="letters-mode__btn ${mode === "teacher" ? "is-active" : ""}" data-letters-mode="teacher">Teacher</button>
            </div>
            <div class="letters-panel__meta">Switch tips and flow to match who is using the screen.</div>
        </div>

        <div class="letters-panel letters-focus">
            <div class="letters-panel__title">Current Letter</div>
            <div class="letters-focus__glyph" lang="ar">${letter?.letter || ""}</div>
            <div class="letters-focus__name">${letter?.nameEn || ""} (${letter?.nameAr || ""})</div>
            <div class="letters-focus__chips">
                <span class="letters-chip">${letter?.sunMoon === "sun" ? "Sun letter" : "Moon letter"}</span>
                <span class="letters-chip">${connectsLeft}</span>
            </div>
            <div class="letters-focus__note">${letter?.note || ""}</div>
        </div>

        <div class="letters-panel">
            <div class="letters-panel__title">${mode === "teacher" ? "Teaching Tips" : "Learning Tips"}</div>
            <ul class="letters-tiplist">
                ${tips.map((tip) => `<li>${tip}</li>`).join("")}
            </ul>
        </div>

        <div class="letters-panel">
            <div class="letters-panel__title">Quick Flow</div>
            <div class="letters-flow">
                ${flow.map((step, i) => `<span class="letters-flow__step">${i + 1}. ${step}</span>`).join("")}
            </div>
        </div>
    `;
}

function renderArabicLettersGrid() {
    const lettersGrid = $("#lettersGrid");
    if (!lettersGrid) return;

    lettersGrid.innerHTML = arabicLetters
        .map((letter) => {
            const isActive = letter.id === arabicLettersState.selectedId;
            const sunMoon = letter.sunMoon === "sun" ? "sun" : "moon";
            return `
                <button class="letter-card ${isActive ? "letter-card--active" : ""}" data-letter-id="${letter.id}">
                    <span class="letter-card__glyph" lang="ar">${letter.letter}</span>
                    <span class="letter-card__name">${letter.nameEn}</span>
                    <span class="letter-card__badge letter-card__badge--${sunMoon}">
                        ${sunMoon === "sun" ? "Sun" : "Moon"}
                    </span>
                </button>
            `;
        })
        .join("");
}

function renderArabicLetterDetail() {
    const letter = arabicLetters.find((item) => item.id === arabicLettersState.selectedId) || arabicLetters[0];
    if (!letter) return;
    const glyph = $("#letterModalGlyph");
    const name = $("#letterModalName");
    const sound = $("#letterModalSound");
    const formIsolated = $("#letterModalFormIsolated");
    const formInitial = $("#letterModalFormInitial");
    const formMedial = $("#letterModalFormMedial");
    const formFinal = $("#letterModalFormFinal");
    const exampleAr = $("#letterModalExampleAr");
    const exampleArabeezy = $("#letterModalExampleArabeezy");
    const note = $("#letterModalNote");
    const sunMoon = $("#letterModalSunMoon");
    const writingSteps = $("#letterModalWritingSteps");

    if (glyph) glyph.textContent = letter.letter;
    if (name) name.textContent = `${letter.nameEn} (${letter.nameAr})`;
    if (sound) sound.textContent = `Sound: ${letter.sound}`;
    if (sunMoon) sunMoon.textContent = letter.sunMoon === "sun" ? "Sun letter" : "Moon letter";
    if (formIsolated) formIsolated.textContent = letter.forms.isolated;
    if (formInitial) formInitial.textContent = letter.forms.initial;
    if (formMedial) formMedial.textContent = letter.forms.medial;
    if (formFinal) formFinal.textContent = letter.forms.final;
    if (exampleAr) exampleAr.textContent = letter.exampleAr;
    if (exampleArabeezy) exampleArabeezy.textContent = letter.exampleArabeezy;
    if (note) note.textContent = letter.note;

    renderLetterFormExample(letter);
    renderLetterFormButtons();
    renderLetterWritingSteps(letter, writingSteps);
    renderArabicLettersSide();
}

function selectAdjacentArabicLetter(direction) {
    const currentIndex = arabicLetters.findIndex((item) => item.id === arabicLettersState.selectedId);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + arabicLetters.length) % arabicLetters.length;
    arabicLettersState.selectedId = arabicLetters[nextIndex].id;
    renderArabicLettersGrid();
    renderArabicLetterDetail();
    if (arabicLettersModalState.open) openLetterModal();
}

function openLetterModal() {
    const modal = $("#letterModal");
    if (!modal) return;
    arabicLettersState.selectedForm = arabicLettersState.selectedForm || "initial";
    renderArabicLetterDetail();
    modal.classList.add("modal--open");
    arabicLettersModalState.open = true;
}

function closeLetterModal() {
    const modal = $("#letterModal");
    if (!modal) return;
    modal.classList.remove("modal--open");
    arabicLettersModalState.open = false;
}

function renderLetterFormExample(letter) {
    const label = $("#letterModalExampleLabel");
    const exampleAr = $("#letterModalExampleFormAr");
    const exampleArabeezy = $("#letterModalExampleFormArabeezy");
    const form = arabicLettersState.selectedForm || "initial";
    const example = letter.examples?.[form];

    if (label) {
        const labelText =
            form === "isolated"
                ? "Example (Isolated)"
                : form === "initial"
                    ? "Example (Beginning)"
                    : form === "medial"
                        ? "Example (Middle)"
                        : "Example (End)";
        label.textContent = labelText;
    }
    if (exampleAr) exampleAr.textContent = example?.ar || "";
    if (exampleArabeezy) exampleArabeezy.textContent = example?.arabeezy || "";
}

function renderLetterFormButtons() {
    $all(".letter-form--btn").forEach((btn) => {
        const form = btn.dataset.letterForm;
        btn.classList.toggle("letter-form--active", form === arabicLettersState.selectedForm);
    });
}

function renderLetterWritingSteps(letter, listEl) {
    if (!listEl) return;
    const steps =
        letter.writingSteps && letter.writingSteps.length
            ? letter.writingSteps
            : [
                "Start at the top guideline, then follow the curve smoothly.",
                "Lift the pen only when the stroke ends.",
                "Practice isolated, then connect it in a short word.",
            ];
    listEl.innerHTML = steps.map((step) => `<li>${step}</li>`).join("");
}

function renderArabicLettersExercises() {
    const exercises = $("#lettersExercises");
    if (!exercises) return;

    exercises.innerHTML = arabicLettersExercises
        .map((exercise) => {
            if (exercise.type === "match") return renderArabicLettersMatch(exercise);
            if (exercise.type === "order") return renderArabicLettersOrder(exercise);
            if (exercise.type === "mcq") return renderArabicLettersMcq(exercise);
            return "";
        })
        .join("");

    arabicLettersExercises.forEach((exercise) => {
        if (exercise.type === "match") {
            arabicLettersExerciseState.match.set(exercise.id, {
                selectedLeft: null,
                pairs: exercise.pairs,
                matchedLeft: new Set(),
                matchedRight: new Set(),
            });
        }
        if (exercise.type === "order") {
            arabicLettersExerciseState.order.set(exercise.id, {
                current: [],
                answer: exercise.answer,
            });
        }
        if (exercise.type === "mcq") {
            arabicLettersExerciseState.mcq.set(exercise.id, {
                selected: null,
                answer: exercise.answer,
            });
        }
    });
}

function renderArabicLettersMatch(exercise) {
    const rightItems = shuffleArray(exercise.pairs.map((item) => item.right));
    return `
        <div class="exercise-card" data-exercise-id="${exercise.id}" data-exercise-type="match">
            <div class="exercise-title">Match</div>
            <div class="exercise-prompt">${exercise.prompt}</div>
            <div class="match-grid">
                <div class="match-column">
                    ${exercise.pairs
            .map(
                (pair) => `
                        <button class="match-item" data-match-left="${pair.left}">
                            ${pair.left}
                        </button>
                    `
            )
            .join("")}
                </div>
                <div class="match-column">
                    ${rightItems
            .map(
                (item) => `
                        <button class="match-item" data-match-right="${item}" lang="ar">
                            ${item}
                        </button>
                    `
            )
            .join("")}
                </div>
            </div>
        </div>
    `;
}

function renderArabicLettersOrder(exercise) {
    const pool = shuffleArray(exercise.pool);
    return `
        <div class="exercise-card" data-exercise-id="${exercise.id}" data-exercise-type="order">
            <div class="exercise-title">Build it</div>
            <div class="exercise-prompt">${exercise.prompt}</div>
            <div class="order-answer" data-order-answer></div>
            <div class="order-pool">
                ${pool
            .map(
                (item) => `
                    <button class="order-chip" data-order-item="${item}" lang="ar">
                        ${item}
                    </button>
                `
            )
            .join("")}
            </div>
            <div class="order-status" data-order-status>Tap letters to build the word.</div>
            <div class="order-controls" style="margin-top:8px; display:flex; gap:8px;">
                <button class="btn btn--ghost btn--sm" data-order-action="undo">Undo</button>
                <button class="btn btn--ghost btn--sm" data-order-action="reset">Reset</button>
            </div>
        </div>
    `;
}

function renderArabicLettersMcq(exercise) {
    return `
        <div class="exercise-card" data-exercise-id="${exercise.id}" data-exercise-type="mcq">
            <div class="exercise-title">Choose</div>
            <div class="exercise-prompt">${exercise.prompt}</div>
            <div class="mcq-options">
                ${exercise.options
            .map(
                (item) => `
                    <button class="mcq-option" data-mcq-option="${item}" lang="ar">${item}</button>
                `
            )
            .join("")}
            </div>
        </div>
    `;
}

function handleArabicLettersExerciseClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const exerciseCard = target.closest("[data-exercise-id]");
    if (!exerciseCard) return;
    const exerciseId = exerciseCard.dataset.exerciseId;
    const exerciseType = exerciseCard.dataset.exerciseType;

    if (exerciseType === "match") handleArabicLettersMatchClick(exerciseId, exerciseCard, target);
    if (exerciseType === "order") handleArabicLettersOrderClick(exerciseId, exerciseCard, target);
    if (exerciseType === "mcq") handleArabicLettersMcqClick(exerciseId, exerciseCard, target);
}

function handleArabicLettersMatchClick(exerciseId, exerciseCard, target) {
    const state = arabicLettersExerciseState.match.get(exerciseId);
    if (!state) return;

    const leftBtn = target.closest("[data-match-left]");
    const rightBtn = target.closest("[data-match-right]");

    if (leftBtn) {
        const leftValue = leftBtn.dataset.matchLeft;
        if (state.matchedLeft.has(leftValue)) return;
        state.selectedLeft = leftValue;
        exerciseCard.querySelectorAll("[data-match-left]").forEach((btn) => {
            btn.classList.toggle("is-selected", btn.dataset.matchLeft === leftValue);
        });
        return;
    }

    if (rightBtn && state.selectedLeft) {
        const rightValue = rightBtn.dataset.matchRight;
        if (state.matchedRight.has(rightValue)) return;
        const expected = state.pairs.find((pair) => pair.left === state.selectedLeft)?.right;

        if (expected === rightValue) {
            state.matchedLeft.add(state.selectedLeft);
            state.matchedRight.add(rightValue);
            exerciseCard
                .querySelector(`[data-match-left="${state.selectedLeft}"]`)
                ?.classList.add("is-correct");
            rightBtn.classList.add("is-correct");
        } else {
            rightBtn.classList.add("is-wrong");
            setTimeout(() => rightBtn.classList.remove("is-wrong"), 500);
        }

        state.selectedLeft = null;
        exerciseCard.querySelectorAll("[data-match-left]").forEach((btn) => {
            btn.classList.remove("is-selected");
        });
    }
}

function handleArabicLettersOrderClick(exerciseId, exerciseCard, target) {
    const state = arabicLettersExerciseState.order.get(exerciseId);
    if (!state) return;

    const orderItem = target.closest("[data-order-item]");
    const actionBtn = target.closest("[data-order-action]");

    if (orderItem) {
        if (state.current.length >= state.answer.length) return;
        state.current.push(orderItem.dataset.orderItem);
        updateArabicLettersOrderState(state, exerciseCard);
        return;
    }

    if (actionBtn) {
        const action = actionBtn.dataset.orderAction;
        if (action === "undo") state.current.pop();
        if (action === "reset") state.current = [];
        updateArabicLettersOrderState(state, exerciseCard);
    }
}

function updateArabicLettersOrderState(state, exerciseCard) {
    const answerEl = exerciseCard.querySelector("[data-order-answer]");
    const statusEl = exerciseCard.querySelector("[data-order-status]");
    if (!answerEl || !statusEl) return;

    answerEl.innerHTML = state.current
        .map((item) => `<span class="order-chip" lang="ar">${item}</span>`)
        .join("");

    const isComplete = state.current.length === state.answer.length;
    const isCorrect = isComplete && state.current.join("") === state.answer.join("");
    if (isCorrect) {
        statusEl.textContent = "Great! You built the word.";
    } else if (isComplete) {
        statusEl.textContent = "Almost! Try again.";
    } else {
        statusEl.textContent = "Tap letters to build the word.";
    }
}

function handleArabicLettersMcqClick(exerciseId, exerciseCard, target) {
    const option = target.closest("[data-mcq-option]");
    if (!option) return;
    const state = arabicLettersExerciseState.mcq.get(exerciseId);
    if (!state) return;

    const selected = option.dataset.mcqOption;
    const isCorrect = selected === state.answer;
    exerciseCard.querySelectorAll("[data-mcq-option]").forEach((btn) => {
        btn.classList.remove("is-correct", "is-wrong");
    });
    option.classList.add(isCorrect ? "is-correct" : "is-wrong");
}
function openExportModal(source, lessonId, studentName = "") {
    exportContext.lessonId = lessonId;
    exportContext.studentName = studentName;
    exportContext.source = source;

    const modal = document.getElementById("exportModal");
    if (modal) modal.classList.add("modal--open");
}

function closeExportModal() {
    const modal = document.getElementById("exportModal");
    if (modal) modal.classList.remove("modal--open");
}

async function saveStudentsToCloud() {
    if (!appState.currentUser || appState.currentUser.role !== "teacher") return;

    const batch = db.batch();
    const ref = db.collection("teacherStudents");

    // نفضي كل طلاب هذا المعلم ثم نرفع من جديد (بسيطة مبدئيًا)
    const snap = await ref.where("teacherId", "==", appState.currentUser.uid).get();
    snap.forEach((doc) => batch.delete(doc.ref));

    appState.students.forEach((s) => {
        const docRef = ref.doc(s.id);
        batch.set(docRef, {
            teacherId: appState.currentUser.uid,
            name: s.name,
            level: s.level,
            goals: s.goals || [],
            progress: s.progress || {},
            homeworkNotes: s.homeworkNotes || {},
            lastSeen: s.lastSeen || null,
        });
    });

    await batch.commit();
}

function saveStudentsToLS({ skipCloud = false } = {}) {
    localStorage.setItem(getStudentsStorageKey(), JSON.stringify(appState.students));
    if (!skipCloud) scheduleCloudSave();
}


async function syncTeacherStudentsFromCloud() {
    if (!appState.currentUser || appState.currentUser.role !== "teacher") return;
    try {

    const ref = db.collection("teacherStudents");
    const snap = await ref.where("teacherId", "==", appState.currentUser.uid).get();

    const loaded = [];
    snap.forEach((doc) => {
        const d = doc.data();
        loaded.push({
            id: doc.id, // أو خلي ID محلي منفصل
            name: d.name,
            level: d.level,
            goals: d.goals || [],
            progress: d.progress || {},
            homeworkNotes: d.homeworkNotes || {},
            lastSeen: d.lastSeen || null,
        });
    });

    appState.students = loaded;
    saveStudentsToLS({ skipCloud: true }); // نخزن نسخة محلية
    } catch (err) {
        console.warn("Could not sync teacher students from cloud, using local students.", err);
        appState.students = loadStudentsFromLS();
    }
}

function loadStudentsFromLS() {
    try {
        const raw = localStorage.getItem(getStudentsStorageKey());
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function getStudentsStorageKey() {
    const uid = appState.currentUser?.uid || "anonymous";
    return `${LS_STUDENTS_KEY}:${uid}`;
}

function ensureStudentProgress(student, lessonId) {
    if (!student.progress) student.progress = {};
    if (!student.progress[lessonId]) {
        student.progress[lessonId] = { ...BASE_PROGRESS_TEMPLATE };
    } else {
        Object.keys(BASE_PROGRESS_TEMPLATE).forEach((key) => {
            if (!(key in student.progress[lessonId])) {
                student.progress[lessonId][key] = BASE_PROGRESS_TEMPLATE[key];
            }
        });
    }
}

function getCurrentStudent() {
    if (appState.currentUser && appState.currentUser.role === "guest") {
        return appState.guestStudent || null;
    }
    return appState.students.find((s) => s.id === appState.currentStudentId) || null;
}

function getStudentProgress(student, lessonId) {
    ensureStudentProgress(student, lessonId);
    return student.progress[lessonId];
}

function setStudentProgressField(sectionKey, value) {
    const student = getCurrentStudent();
    if (!student) return;
    ensureStudentProgress(student, appState.currentLessonId);
    student.progress[appState.currentLessonId][sectionKey] = value;
    saveStudentsToLS();
    updateProgressBar();
    updateSectionStatusBadge(sectionKey);
}

// lessons save/load
function loadLessonDataFromLS() {
    // start from defaults
    Object.keys(defaultLessons).forEach((id) => {
        lessons[id] = JSON.parse(JSON.stringify(defaultLessons[id]));
    });

    // then override / add from localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(LS_LESSON_PREFIX)) {
            const id = key.slice(LS_LESSON_PREFIX.length);
            try {
                const data = JSON.parse(localStorage.getItem(key));
                lessons[id] = preferBundledLessonIfNewer(id, data);
            } catch {
                /* ignore */
            }
        }
    }

    // Sanitize/normalize lessons loaded from localStorage (old/partial/corrupted entries can exist)
    Object.keys(lessons).forEach((id) => {
        const lesson = lessons[id];
        if (!lesson || typeof lesson !== "object") {
            delete lessons[id];
            return;
        }
        if (!lesson.meta || typeof lesson.meta !== "object") lesson.meta = {};
        lesson.meta.level = (lesson.meta.level || "").trim();
        lesson.meta.unit = (lesson.meta.unit || "").trim();
        lesson.meta.lessonTitle = (lesson.meta.lessonTitle || "").trim();

        // If meta is still missing core fields, drop it (prevents runtime crashes in teacher picker)
        if (!lesson.meta.level || !lesson.meta.unit || !lesson.meta.lessonTitle) {
            delete lessons[id];
            return;
        }

        if (!lesson.vocabulary) lesson.vocabulary = { core: [], extra: [] };
        if (!Array.isArray(lesson.vocabulary.core)) lesson.vocabulary.core = [];
        if (!Array.isArray(lesson.vocabulary.extra)) lesson.vocabulary.extra = [];

        if (!Array.isArray(lesson.useInLife)) lesson.useInLife = [];

        if (!lesson.dialogue) lesson.dialogue = { lines: [] };
        if (!Array.isArray(lesson.dialogue.lines)) lesson.dialogue.lines = [];

        if (!Array.isArray(lesson.grammar)) lesson.grammar = [];
        if (lesson.grammarTab && typeof lesson.grammarTab === "object") {
            delete lesson.grammarTab;
        }

        if (!lesson.practice) lesson.practice = { quiz: [], rolePlays: [], translation: [] };
        if (!Array.isArray(lesson.practice.quiz)) lesson.practice.quiz = [];
        if (!Array.isArray(lesson.practice.rolePlays)) lesson.practice.rolePlays = [];
        if (!Array.isArray(lesson.practice.translation)) lesson.practice.translation = [];

        if (!lesson.microChecks || typeof lesson.microChecks !== "object") {
            lesson.microChecks = { enabled: false, every: 5, items: [] };
        }
        lesson.microChecks.enabled = true;
        if (!Number.isFinite(lesson.microChecks.every)) lesson.microChecks.every = 5;
        if (!Array.isArray(lesson.microChecks.items)) lesson.microChecks.items = [];
    });
}
function markVocabularyDone() {
    // هذي الدالة تعتمد إنو عندك setStudentProgressField موجودة
    // وتشتغل على الدرس والطالب الحاليين
    try {
        setStudentProgressField("vocabulary", true);
    } catch (e) {
        console.warn("Could not mark vocabulary as done:", e);
    }
}

function saveLessonToLS(lessonId) {
    localStorage.setItem(LS_LESSON_PREFIX + lessonId, JSON.stringify(lessons[lessonId]));
}

// custom units
function loadCustomUnits() {
    try {
        const raw = localStorage.getItem(LS_CUSTOM_UNITS_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            customUnits = {
                Beginner: parsed.Beginner || [],
                "Pre-Intermediate": parsed["Pre-Intermediate"] || [],
                Intermediate: parsed.Intermediate || [],
            };
        }
    } catch {
        /* ignore */
    }
}
function saveCustomUnits() {
    localStorage.setItem(LS_CUSTOM_UNITS_KEY, JSON.stringify(customUnits));
}

// font size
function loadFontSize() {
    const raw = localStorage.getItem(LS_FONT_SIZE_KEY);
    if (!raw) {
        appState.lessonFontSize = 1;
    } else {
        const n = parseFloat(raw);
        appState.lessonFontSize = isNaN(n) ? 1 : n;
    }
    applyFontSize();
}
function saveFontSize() {
    localStorage.setItem(LS_FONT_SIZE_KEY, String(appState.lessonFontSize));
}
function applyFontSize() {
    const v = Math.max(0.85, Math.min(1.4, appState.lessonFontSize));
    document.documentElement.style.setProperty("--lesson-font-size", v + "rem");
}

// ========================= NAVIGATION =========================
function showScreen(id) {
    $all(".screen").forEach((sec) =>
        sec.classList.toggle("screen--active", sec.id === id)
    );
    setLessonSyncForScreen(id);
    updateFloatingChatVisibility();
}

function goToHome() {
    persistResumeBeforeNav();
    // ندخل وضع الصفحة الرئيسية فقط
    document.body.classList.add("home-only");

    // نخلي بس الهوم screen هي الظاهرة
    showScreen("home-screen");
}

function goToStudents() {
    persistResumeBeforeNav();
    const role = appState.currentUser?.role || "";
    if (!appState.currentUser || role === "student" || role === "guest") {
        if (getCurrentStudent()) {
            goToLevels();
        } else {
            goToHome();
        }
        return;
    }
    document.body.classList.remove("home-only");
    showScreen("students-screen");
    renderStudents();
}

function goToLevels() {
    persistResumeBeforeNav();
    document.body.classList.remove("home-only");
    if (isGuestUser() && appState.guestStudent && !appState.currentStudentId) {
        appState.currentStudentId = appState.guestStudent.id;
    }
    const currentStudent = getCurrentStudent();
    if (!currentStudent) {
        if (appState.currentUser?.role === "teacher") {
            goToStudents();
        } else {
            goToHome();
        }
        return;
    }
    showScreen("levels-screen");
    $("#currentStudentNameLevels").textContent = currentStudent.name;
    const btnSwitchProfile = $("#btnSwitchProfile");
    if (btnSwitchProfile) btnSwitchProfile.style.display = isGuestUser() ? "none" : "inline-flex";
    const btnStudentLogout = $("#btnStudentLogout");
    if (btnStudentLogout) btnStudentLogout.hidden = isGuestUser() || appState.currentUser?.role !== "student";
    renderLevels();
    updateContinueButton();
}

function goToArabicLetters() {
    persistResumeBeforeNav();
    document.body.classList.remove("home-only");
    showScreen("arabic-letters-screen");
    renderArabicLettersScreen();
}
function goToLessonView(opts = {}) {
    const { teacherMode = null } = opts;
    if (!getCurrentStudent()) {
        goToStudents();
        return;
    }
    if (!canOpenLesson(appState.currentLessonId)) {
        toast("This unit requires full course access.");
        goToLevels();
        openSubscribeModal();
        return;
    }
    showScreen("lesson-screen");
    if (teacherMode !== null) {
        appState.teacherMode = teacherMode;
        const teacherModeToggle = $("#teacherModeToggle");
        if (teacherModeToggle) teacherModeToggle.checked = teacherMode;
    }
    updateTeacherTabsVisibility();
    updateLessonTopBar();
    updateProgressBar();
    const lesson = lessons[appState.currentLessonId];
    updateLessonTabsVisibility(lesson);
    appState.currentTab = normalizeLessonTabKey(appState.currentTab, lesson);
    setActiveTab(appState.currentTab || "overview");

    // حاول يحمّل whiteboard حق هذا الدرس لو اللوحة مفتوحة
    const whiteboardPanel = document.getElementById("whiteboardPanel");
    if (whiteboardPanel && !whiteboardPanel.classList.contains("hidden")) {
        initWhiteboardCanvas();
    }
}

function shouldShowAdBreak() {
    return false;
}

function showAdBreak(onContinue) {
    onContinue?.();
}

function continueAfterAdBreak() {
    const action = pendingAdBreakAction;
    pendingAdBreakAction = null;
    action?.();
}

function openExternalBookingPage() {
    window.location.assign(EXTERNAL_BOOKING_URL);
}

function openCourseAccessPage() {
    window.location.assign(EXTERNAL_BOOKING_URL);
}

function buildLessonExportHtml(lesson, options) {
    const {
        includeVocab,
        includeDialogue,
        includeGrammar,
        includeHomework,
        includeTeacherNotes,
        version,
        studentName,
    } = options;

    const escapeHtml = (str) =>
        String(str || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // ========== Vocabulary ==========
    let vocabRows = "";
    if (includeVocab && lesson.vocabulary) {
        const allVocab = [
            ...(lesson.vocabulary.core || []),
            ...(lesson.vocabulary.extra || []),
        ];
        allVocab.forEach((w) => {
            vocabRows += `
            <tr>
                <td class="ar">${escapeHtml(w.ar)}</td>
                <td class="en">${escapeHtml(w.en)}</td>
                
                <td class="en">${escapeHtml(w.enArabeezy)}</td>
                <td class="en">
                    ${escapeHtml(w.exampleAr || "")}
                    ${w.exampleAr || w.exampleArabeezy || w.exampleEn ? " - " : ""}
                    ${escapeHtml(w.exampleArabeezy || "")}
                    ${w.exampleArabeezy && w.exampleEn ? " - " : ""}
                    ${escapeHtml(w.exampleEn || "")}
                </td>
            </tr>`;
        });
    }

    // ========== Dialogue ==========
    let dialogueHtml = "";
    if (includeDialogue && lesson.dialogue && lesson.dialogue.lines) {
        dialogueHtml = lesson.dialogue.lines
            .map(
                (line) => `
                <div class="dialogue-line">
                    <span class="speaker">${escapeHtml(line.speaker)}:</span>
                    <div class="dialogue-ar">${escapeHtml(line.ar)}</div>
                    ${line.arArabeezy || line.arabeezy
                        ? `<div class="dialogue-arabeezy">${escapeHtml(line.arArabeezy || line.arabeezy)}</div>`
                        : ""}
                    ${line.en
                        ? `<span class="dialogue-en">${escapeHtml(line.en)}</span>`
                        : ""
                    }
                </div>
            `
            )
            .join("");
    }

    // ========== Grammar ==========
    let grammarHtml = "";
    if (includeGrammar && lesson.grammar && lesson.grammar.length) {
        grammarHtml = lesson.grammar
            .map((g) => {
                const desc = g.description ? `<p>${escapeHtml(g.description)}</p>` : "";
                let tableHtml = "";
                if (g.table && Array.isArray(g.table.headers) && Array.isArray(g.table.rows)) {
                    const headCells = g.table.headers
                        .map((h) => `<th>${escapeHtml(h)}</th>`)
                        .join("");
                    const bodyRows = g.table.rows
                        .map(
                            (row) =>
                                `<tr>${row
                                    .map((cell) => `<td>${escapeHtml(cell)}</td>`)
                                    .join("")}</tr>`
                        )
                        .join("");
                    tableHtml = `
                        <div class="grammar-table">
                            <div class="grammar-table__title">${escapeHtml(g.table.title || "Table")}</div>
                            <table class="grammar-table__table">
                                <thead><tr>${headCells}</tr></thead>
                                <tbody>${bodyRows}</tbody>
                            </table>
                        </div>`;
                }

                const examples = Array.isArray(g.examples) ? g.examples : [];
                const examplesHtml = examples.length
                    ? `<div class="grammar-examples">
                            <div class="grammar-examples__title">Examples</div>
                            ${examples
                        .map(
                            (ex) => `
                                <div class="grammar-example">
                                    <div class="grammar-example__ar">${escapeHtml(ex.ar || "")}</div>
                                    <div class="grammar-example__arabeezy">${escapeHtml(ex.arabeezy || "")}</div>
                                    <div class="grammar-example__en">${escapeHtml(ex.en || "")}</div>
                                </div>`
                        )
                        .join("")}
                        </div>`
                    : "";

                const teacherNotes =
                    includeTeacherNotes && version === "teacher"
                        ? `<div class="grammar-teacher">
                                <div class="grammar-teacher__title">Teacher Notes</div>
                                <div class="grammar-teacher__text">${escapeHtml(
                            g.teacherNotes || ""
                        )}</div>
                           </div>`
                        : "";

                return `<div class="grammar-item">
                            <h4>${escapeHtml(g.title)}</h4>
                            ${desc}
                            ${tableHtml}
                            ${examplesHtml}
                            ${teacherNotes}
                        </div>`;
            })
            .join("");
    }

    // ========== Homework ==========
    let homeworkHtml = "";
    if (includeHomework && lesson.homework && lesson.homework.instructions) {
        const taskHtml = Array.isArray(lesson.homework.tasks)
            ? lesson.homework.tasks
                .map((task) => {
                    const examples = Array.isArray(task.examples)
                        ? `<ul>${task.examples.map((example) => `<li>${escapeHtml(example)}</li>`).join("")}</ul>`
                        : "";
                    return `<div class="homework-task">
                        <h4>${escapeHtml(task.title || "Homework task")}</h4>
                        <p>${escapeHtml(task.instructions || "")}</p>
                        ${examples}
                    </div>`;
                })
                .join("")
            : "";
        homeworkHtml = `<p>${escapeHtml(lesson.homework.instructions)}</p>${taskHtml}`;
    }

    // ========== Teacher Notes ==========
    let teacherNotesHtml = "";
    const notes = lesson.teacherNotes && lesson.teacherNotes.myNotes;
    if (includeTeacherNotes && version === "teacher" && notes) {
        teacherNotesHtml = `<p>${escapeHtml(notes)}</p>`;
    }

    return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8" />
<title>Lesson Export – ${escapeHtml(lesson.meta.lessonTitle)}</title>
<style>
    body {
        font-family:
            "Amiri",
            "Scheherazade New",
            "IBM Plex Sans Arabic",
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        margin: 20px;
        color: #111827;
        
      
    }
        .headtext{
         direction: center;
          text-align: center;
        }
    h1, h2, h3, h4 {
        margin: 0 0 6px;
        color: #0f172a;
    }
    h1 {
        font-size: 20px;
        margin-bottom: 10px;
        
    }
    .meta {
        font-size: 12px;
        margin-bottom: 14px;
         direction: ltr;
    }
    .meta div {
        margin-bottom: 2px;
    }
    .section {
    
        margin-top: 12px;
        padding-top: 10px;
        border-top: 1px solid #e5e7eb;
        /* 🔴 مهم: شلنا page-break-inside: avoid; عشان ما يطير القسم كله لصفحة جديدة ويترك الهيدر لحاله */
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 11px;
        direction: rtl; /* الجدول نفسه RTL */
    }
    th, td {
        border: 1px solid #e5e7eb;
        padding: 4px 6px;
        vertical-align: top;
    }
    th {
        background: #e0f2fe;
    }
    .ar {
        direction: rtl;
        text-align: right;
        font-family: "Amiri", "Scheherazade New", "IBM Plex Sans Arabic", system-ui, sans-serif;
        font-size: 20px;
    }
    .en {
        direction: ltr;
        text-align: left;
        font-size: 20px;
    }
    .small-note {
        font-size: 12px;
        color: #6b7280;
        margin-top: 4px;
        direction: ltr;
    }
    .grammar-item {
        margin-bottom: 8px;
        font-size: 18px;
        direction: ltr;
    }
    .grammar-item h4 {
        font-size: 18px;
        margin-bottom: 2px;
        direction: ltr;
    }
    .section-title {
        display:flex;
        justify-content:space-between;
        align-items:baseline;
        
    }
    .badge {
        font-size:10px;
        padding:2px 6px;
        border-radius:999px;
        background:#e5f9f5;
        color:#047857;
    }

    /* 🗨️ المحادثة RTL مع الإنجليزي تحت */
    .dialogue-line {
        margin-bottom: 6px;
        direction: rtl;
        text-align: right;
        font-size: 24px;
    }
    .speaker {
        font-weight: 700;
        margin-left: 4px;
    }
    .dialogue-ar {
        font-family: "Amiri", "Scheherazade New", "IBM Plex Sans Arabic", system-ui, sans-serif;
    }
    .dialogue-en {
        display: block;
       
        font-size: 20px;
        color: #4b5563;
        margin-right: 2em; /* شوي مسافة عن اسم المتحدث */
    }

    @media print {
        body { margin: 10mm; }
        .small-note { display:none; }
    }
</style>
</head>
<body>
    <h1 class="headtext">Palestinian Arabic – ${escapeHtml(lesson.meta.lessonTitle)}</h1>
    <div class="meta" >
        <div><strong>Level:</strong> ${escapeHtml(lesson.meta.level)}</div>
        <div><strong>Unit:</strong> ${escapeHtml(lesson.meta.unit)}</div>
        ${studentName
            ? `<div><strong>Student:</strong> ${escapeHtml(studentName)}</div>`
            : ""
        }
        <div><strong>Version:</strong> ${version === "teacher" ? "Teacher" : "Student"
        }</div>
    </div>

    ${vocabRows
            ? `<div class="section">
                <div class="section-title">
                    <h2>المفردات – Vocabulary</h2>
                    <span class="badge">Core & Extra</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>العربي</th>
                            <th>English</th>
                            <th>enArabeezy</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${vocabRows}
                    </tbody>
                </table>
            </div>`
            : ""
        }

    ${dialogueHtml
            ? `<div class="section">
                <h2>المحادثة – Dialogue</h2>
                ${dialogueHtml}
            </div>`
            : ""
        }

    ${grammarHtml
            ? `<div class="section">
                <h2>القواعد – Grammar</h2>
                ${grammarHtml}
            </div>`
            : ""
        }

    ${homeworkHtml
            ? `<div class="section">
                <h2>الواجب – Homework</h2>
                ${homeworkHtml}
            </div>`
            : ""
        }

    ${teacherNotesHtml
            ? `<div class="section">
                <h2>ملاحظات المعلم – Teacher Notes</h2>
                ${teacherNotesHtml}
            </div>`
            : ""
        }

    <p class="small-note">
        Generated from Palestinian Arabic Local LMS – you can print or save as PDF from your browser.
    </p>
</body>
</html>
        </div>
      </div>
    `;
}


function openPrintWindow(html) {
    const win = window.open("", "_blank");
    if (!win) {
        alert("Popup blocked – please allow popups to export PDF.");
        return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
    // نعطيه وقت بسيط يرنّدر قبل الطباعة
    win.focus();
    setTimeout(() => {
        win.print();
    }, 300);
}

function goToTeacherDashboard() {
    persistResumeBeforeNav();
    // لو مش مسجل، أو مش مدرّس:
    if (!appState.currentUser || appState.currentUser.role !== "teacher") {
        // بدل ما نعمل alert بس، نفتحه على مودال تسجيل دخول المدرّس
        if (typeof openAuthModal === "function") {
            openAuthModal("teacher");
        } else {
            alert("Teacher access only.");
        }
        return;
    }
    document.body.classList.remove("home-only")
    showScreen("teacher-dashboard-screen");
    renderTeacherPicker();
}




// ========================= STUDENTS =========================
function renderStudents() {
    const grid = $("#studentsGrid");
    const empty = $("#noStudentsMessage");
    grid.innerHTML = "";

    if (!appState.students.length) {
        empty.style.display = "block";
        return;
    }
    empty.style.display = "none";

    appState.students.forEach((student) => {
        const card = document.createElement("article");
        card.className = "student-card";

        const avatar = document.createElement("div");
        avatar.className = "student-card__avatar";
        avatar.textContent = student.name.charAt(0).toUpperCase();

        const nameEl = document.createElement("div");
        nameEl.className = "student-card__name";
        nameEl.textContent = student.name;

        const levelEl = document.createElement("div");
        levelEl.className = "student-card__level";
        levelEl.textContent = `Level: ${student.level}`;

        const goalsWrap = document.createElement("div");
        goalsWrap.className = "student-card__goals";

        const goals = student.goals || [];
        if (goals.length) {
            const map = {
                Travel: "✈️ Travel",
                Study: "🎓 Study",
                Family: "👨‍👩‍👧 Family",
                VisitPalestine: "🕌 Visit Palestine",
                Work: "💼 Work",
                Fun: "😊 For Fun",
            };
            goals.forEach((g) => {
                const tag = document.createElement("span");
                tag.className = "goal-tag";
                tag.textContent = map[g] || g;
                goalsWrap.appendChild(tag);
            });
        } else if (student.goal) {
            const tag = document.createElement("span");
            tag.className = "goal-tag";
            tag.textContent = student.goal;
            goalsWrap.appendChild(tag);
        }

        const footer = document.createElement("div");
        footer.className = "student-card__footer";

        const btnContinue = document.createElement("button");
        btnContinue.className = "btn btn--primary btn--sm";
        btnContinue.textContent = "Continue Learning";
        btnContinue.addEventListener("click", () => {
            appState.currentStudentId = student.id;
            // If teacher saved a resume spot for this student, go there
            if (!tryResumeStudent(student)) {
                setStudentLessonContext(student);
                goToLevels();
            }
        });

        const btnDelete = document.createElement("button");
        btnDelete.className = "student-card__delete";
        btnDelete.textContent = "❌";
        btnDelete.addEventListener("click", () => {
            if (!confirm(`Delete student "${student.name}"?`)) return;
            appState.students = appState.students.filter((s) => s.id !== student.id);
            saveStudentsToLS();
            if (appState.currentStudentId === student.id) appState.currentStudentId = null;
            renderStudents();
        });

        footer.appendChild(btnContinue);
        footer.appendChild(btnDelete);

        card.appendChild(avatar);
        card.appendChild(nameEl);
        card.appendChild(levelEl);
        card.appendChild(goalsWrap);
        card.appendChild(footer);

        grid.appendChild(card);
    });
}

// ========================= LEVELS & UNITS =========================
function findLessonIdFor(levelName, unitName) {
    return Object.keys(lessons).find(
        (id) =>
            lessons[id].meta &&
            lessons[id].meta.level === levelName &&
            lessons[id].meta.unit === unitName
    );
}

function getUnitsForLevel(levelName, preferredUnits) {
    const units = [...preferredUnits];
    Object.values(lessons).forEach((lesson) => {
        const unitName = lesson?.meta?.level === levelName ? lesson.meta.unit : "";
        if (unitName && !units.includes(unitName)) units.push(unitName);
    });
    return units;
}

function renderLevels() {
    const container = $("#levelsContainer");
    container.innerHTML = "";

    const levelsDef = [
        {
            level: "Beginner",
            units: ["Greetings", "Family", "Daily Routine", "Food & Drink", "Transportation"],
        },
        {
            level: "Pre-Intermediate",
            units: ["Work & Study", "Health & Emergencies", "Shopping & Prices", "Weather & Small Talk", "Apartment & Problems"],
        },
        {
            level: "Intermediate",
            units: ["Opinions", "Complaints", "Plans & Future", "Free Time & Hobbies", "Feelings"],
        },
    ];

    const student = getCurrentStudent();

    levelsDef.forEach((lvl) => {
        const card = document.createElement("article");
        card.className = "level-card";

        const titleRow = document.createElement("div");
        titleRow.className = "level-card__title";

        const title = document.createElement("h4");
        title.className = "td-lessonitem__title";
        title.textContent = lvl.level;

        const badge = document.createElement("span");
        badge.className = "badge badge--soft";
        badge.textContent = "Local track";

        titleRow.appendChild(title);
        titleRow.appendChild(badge);

        const unitsContainer = document.createElement("div");
        unitsContainer.className = "level-card__units";

        // default units plus any bundled/cloud lessons for this level
        const allUnits = getUnitsForLevel(lvl.level, lvl.units);

        // add custom units for this level
        if (customUnits[lvl.level] && customUnits[lvl.level].length) {
            customUnits[lvl.level].forEach((u) => {
                if (!allUnits.includes(u)) allUnits.push(u);
            });
        }

        allUnits.forEach((unitName) => {
            const pill = document.createElement("div");
            pill.className = "unit-pill";

            const nameSpan = document.createElement("span");
            nameSpan.className = "unit-pill__name";
            nameSpan.textContent = unitName;

            const statusSpan = document.createElement("span");
            statusSpan.className = "unit-pill__status";

            const lessonId = findLessonIdFor(lvl.level, unitName);
            let unlockBtn = null;

            if (lessonId) {
                if (!canOpenLesson(lessonId)) {
                    pill.classList.add("unit-pill--locked");
                    statusSpan.textContent = "Locked: full access required";
                    unlockBtn = document.createElement("button");
                    unlockBtn.className = "unit-pill__unlock";
                    unlockBtn.type = "button";
                    unlockBtn.textContent = "Get Full Access";
                    unlockBtn.addEventListener("click", (event) => {
                        event.stopPropagation();
                        openSubscribeModal();
                    });
                    pill.addEventListener("click", () => {
                        openSubscribeModal();
                    });
                } else {
                    pill.classList.add("unit-pill--clickable");
                }
                if (student) {
                    const progress = getStudentProgress(student, lessonId);
                    const total = Object.keys(progress).length || 1;
                    const completed = Object.values(progress).filter(Boolean).length;
                    const percent = Math.round((completed / total) * 100);
                    if (!statusSpan.textContent) {
                        statusSpan.textContent = `Progress: ${completed}/${total} sections`;
                    }

                    if (percent >= 80) {
                        pill.classList.add("unit-pill--done");
                    } else if (percent >= 30) {
                        pill.classList.add("unit-pill--mid");
                    } else {
                        pill.classList.add("unit-pill--low");
                    }
                } else {
                    statusSpan.textContent = "Open lesson";
                    pill.classList.add("unit-pill--low");
                }

                if (!pill.classList.contains("unit-pill--locked")) {
                    pill.addEventListener("click", () => {
                        showAdBreak(() => {
                            appState.currentLessonId = lessonId;
                            appState.currentTab = "overview";
                            goToLessonView();
                        });
                    });
                }
            } else {
                pill.classList.add("unit-pill--nolesson");
                statusSpan.textContent = "No lesson template yet";
            }

            pill.appendChild(nameSpan);
            pill.appendChild(statusSpan);
            if (unlockBtn) pill.appendChild(unlockBtn);
            unitsContainer.appendChild(pill);
        });

        card.appendChild(titleRow);
        card.appendChild(unitsContainer);
        container.appendChild(card);
    });

    const dialogueOnlyContainer = document.getElementById("dialogueOnlyContainer");
    if (dialogueOnlyContainer) dialogueOnlyContainer.innerHTML = "";
}

// ========================= LESSON VIEW =========================
function updateLessonTopBar() {
    const student = getCurrentStudent();
    const lesson = lessons[appState.currentLessonId];
    if (!student || !lesson) return;
    $("#lessonStudentName").textContent = student.name;
    $("#lessonMeta").textContent = `${lesson.meta.level} – ${lesson.meta.unit} – ${lesson.meta.lessonTitle}`;
}

function countCompletedSections(p) {
    return Object.values(p).filter(Boolean).length;
}
function updateProgressBar() {
    const student = getCurrentStudent();
    if (!student) {
        $("#lessonProgressFill").style.width = "0%";
        return;
    }
    const p = getStudentProgress(student, appState.currentLessonId);
    const c = countCompletedSections(p);
    const t = Object.keys(p).length || 1;
    const percent = Math.round((c / t) * 100);
    $("#lessonProgressFill").style.width = percent + "%";
}

function renderSectionStatus(container, sectionKey) {
    const student = getCurrentStudent();
    let done = false;
    if (student) {
        const p = getStudentProgress(student, appState.currentLessonId);
        done = !!p[sectionKey];
    }
    const div = document.createElement("div");
    div.className =
        "section-status " + (done ? "section-status--done" : "section-status--todo");
    div.dataset.sectionStatusKey = sectionKey;
    div.textContent = done ? "✓ Section completed" : "Section not completed yet";
    container.appendChild(div);
}
function updateSectionStatusBadge(sectionKey) {
    const badge = document.querySelector(
        `.section-status[data-section-status-key="${sectionKey}"]`
    );
    if (!badge) return;
    const student = getCurrentStudent();
    const p = student && getStudentProgress(student, appState.currentLessonId);
    const done = !!(p && p[sectionKey]);
    badge.className =
        "section-status " + (done ? "section-status--done" : "section-status--todo");
    badge.textContent = done ? "✓ Section completed" : "Section not completed yet";
}

function isGuestUser() {
    return !!(appState.currentUser && appState.currentUser.role === "guest");
}

function hasFullCourseAccess() {
    return currentAccessProfile.courseAccess === true;
}

function getAllLessonIds() {
    return Object.keys(lessons).filter((id) => lessons[id]?.meta);
}

function getOpenLessonIds() {
    return getAllLessonIds().filter((lessonId) => canOpenLesson(lessonId));
}

function isPreviewLesson(lessonId) {
    return lessonId === LESSON_ID_GREETING || lessonId === LESSON_ID_WORK_STUDY;
}

function startFreeLearning({ navigate = true } = {}) {
    stopStudentAccessListener();
    appState.currentUser = { uid: "guest", email: "Guest", role: "guest" };
    currentAccessProfile = { courseAccess: false, accessType: "none" };
    appState.guestMode = true;
    appState.guestStudent = {
        id: "guest",
        name: "Guest Learner",
        level: "Beginner",
        progress: {},
        homeworkNotes: {},
    };
    appState.students = [appState.guestStudent];
    appState.currentStudentId = "guest";
    appState.currentLessonId = appState.currentLessonId || LESSON_ID_GREETING;
    appState.currentTab = appState.currentTab || "overview";
    updateAuthUI();
    if (navigate) goToLevels();
}

async function signOutStudentFromSite() {
    stopStudentAccessListener();
    try {
        if (window.auth?.currentUser) {
            await window.auth.signOut();
        }
    } catch (error) {
        console.warn("Could not sign out from Firebase.", error);
    }
    appState.currentUser = null;
    appState.currentStudentId = null;
    appState.students = [];
    appState.guestMode = false;
    appState.guestStudent = null;
    currentAccessProfile = { courseAccess: false, accessType: "none" };
    updateAuthUI();
    goToHome();
}

function isGuestAllowedLesson(lessonId) {
    return !!lessonId && isPreviewLesson(lessonId);
}

function canOpenLesson(lessonId) {
    if (!lessonId) return false;
    if (hasFullCourseAccess()) return true;
    return isPreviewLesson(lessonId);
}

async function goToSubscribeScreen() {
    openExternalBookingPage();
}

// Open subscribe modal
function openSubscribeModal() {
    const modal = document.getElementById("subscribeModal");
    if (modal) {
        updateCourseOfferUi();
        if (window.db) loadCourseOfferSettings().catch(console.warn);
        modal.classList.add("modal--open");
        console.log("Subscribe modal opened");
    }
}

// Close subscribe modal
function closeSubscribeModal() {
    const modal = document.getElementById("subscribeModal");
    if (modal) {
        modal.classList.remove("modal--open");
        console.log("Subscribe modal closed");
    }
}

function openLearningChoiceModal() {
    if (window.auth?.currentUser && getCurrentStudent()) {
        goToLevels();
        return;
    }
    const modal = document.getElementById("learningChoiceModal");
    if (modal) modal.classList.add("modal--open");
}

function openStudentLoginModal() {
    const form = document.getElementById("studentSiteAuthForm");
    const msg = document.getElementById("studentSiteAuthMsg");
    if (form) form.hidden = false;
    if (msg) msg.textContent = "";
    openLearningChoiceModal();
}

function closeLearningChoiceModal() {
    const modal = document.getElementById("learningChoiceModal");
    if (modal) modal.classList.remove("modal--open");
}

function openBookingPortalModal() {
    const modal = document.getElementById("bookingPortalModal");
    const frame = document.getElementById("bookingPortalFrame");
    if (frame && !frame.src) frame.src = EXTERNAL_BOOKING_URL;
    if (modal) modal.classList.add("modal--open");
}

function closeBookingPortalModal() {
    const modal = document.getElementById("bookingPortalModal");
    if (modal) modal.classList.remove("modal--open");
}

function isGrammarTabEnabled(lesson) {
    if (!lesson) return false;
    const hasGrammar = Array.isArray(lesson.grammar) && lesson.grammar.length > 0;
    return appState.teacherMode && hasGrammar;
}

function updateLessonTabsVisibility(lesson) {
    const grammarTab = document.querySelector('.lesson-tab[data-tab="grammar"]');
    if (grammarTab) {
        grammarTab.textContent = "Grammar";
        grammarTab.style.display = isGrammarTabEnabled(lesson) ? "inline-flex" : "none";
    }
}

function normalizeLessonTabKey(tabKey, lesson) {
    if (tabKey === "grammar" && !isGrammarTabEnabled(lesson)) {
        return "translation";
    }
    return tabKey || "overview";
}


function getUseInLifeQuestions(lesson) {
    const raw = Array.isArray(lesson?.useInLife) ? lesson.useInLife : [];
    const items = raw
        .map((q) => {
            if (typeof q === "string") return { en: q };
            if (q && typeof q === "object") {
                return { ar: q.ar || "", en: q.en || "" };
            }
            return null;
        })
        .filter(Boolean)
        .filter((q) => q.ar || q.en);

    return items;
}

function persistResumeBeforeNav() {
    // Only save when lesson screen is active for the current student.
    // Prevents copying previous student's lesson into a newly selected student.
    try {
        const lessonScreen = document.getElementById("lesson-screen");
        const inLessonScreen = !!(lessonScreen && lessonScreen.classList.contains("screen--active"));
        if (inLessonScreen && appState && appState.currentLessonId && appState.currentStudentId) {
            saveResumeSpot({ silent: true });
        }
    } catch { }
}

function getDefaultLessonIdForLevel(level) {
    switch ((level || "").trim()) {
        case "Pre-Intermediate":
            return LESSON_ID_WORK_STUDY;
        case "Intermediate":
            return LESSON_ID_OPINIONS;
        case "Beginner":
        default:
            return LESSON_ID_GREETING;
    }
}

function setStudentLessonContext(student) {
    appState.currentLessonId = getDefaultLessonIdForLevel(student?.level);
    appState.currentTab = "overview";
}

// =======================
// Resume Last Spot (per student)
// =======================
function ensureStudentLastSeen(student) {
    if (!student) return;
    if (!student.lastSeen || typeof student.lastSeen !== "object") {
        student.lastSeen = null;
    }
}

function saveResumeSpot({ silent = false } = {}) {
    const student = getCurrentStudent();
    if (!student) return;
    ensureStudentLastSeen(student);

    student.lastSeen = {
        lessonId: appState.currentLessonId,
        tab: appState.currentTab || "overview",
        at: Date.now(),
    };

    saveStudentsToLS();
    // if teacher, also save student cloud snapshot (debounced)
    try { scheduleCloudSave(); } catch { }

    if (!silent) {
        toast("Saved! Next time this student will open right here.");
    }
    updateContinueButton();
}

function tryResumeStudent(student) {
    if (!student || !student.lastSeen) return false;
    const { lessonId, tab } = student.lastSeen || {};
    if (!lessonId || !lessons[lessonId]) return false;
    const lessonLevel = (lessons[lessonId]?.meta?.level || "").trim();
    const studentLevel = (student.level || "").trim();
    if (lessonLevel && studentLevel && lessonLevel !== studentLevel) return false;

    appState.currentLessonId = lessonId;
    appState.currentTab = tab || "overview";
    goToLessonView({ teacherMode: false });
    return true;
}

function updateContinueButton() {
    const btn = document.getElementById("btnContinueLesson");
    const student = getCurrentStudent();
    if (!btn) return;
    const canResume = !!(student && student.lastSeen && lessons[student.lastSeen.lessonId]);
    btn.disabled = !canResume;
    if (canResume) {
        const lesson = lessons[student.lastSeen.lessonId];
        btn.textContent = `Continue: ${lesson.meta.unit}`;
    } else {
        btn.textContent = "Continue";
    }
}

// Tabs
function renderPracticeTab(container, lesson) {
    return renderPracticeTabSimple(container, lesson);
}

function renderHomeworkTab(container, lesson) {
    return renderHomeworkTabClean(container, lesson);
}

function setActiveTab(tabKey) {
    const lesson = lessons[appState.currentLessonId];
    const normalizedTab = normalizeLessonTabKey(tabKey, lesson);
    appState.currentTab = normalizedTab;
    // Auto-save student's last spot whenever they switch tabs
    try { saveResumeSpot({ silent: true }); } catch { }
    $all(".lesson-tab").forEach((btn) =>
        btn.classList.toggle("lesson-tab--active", btn.dataset.tab === normalizedTab)
    );

    const container = $("#lessonTabContent");
    container.innerHTML = "";
    if (!lesson) return;

    switch (normalizedTab) {
        case "overview":
            renderOverviewTab(container, lesson);
            break;
        case "vocabulary":
            renderVocabularyTab(container, lesson);
            break;
        case "dialogue":
            renderDialogueTab(container, lesson);
            break;
        case "grammar":
            renderGrammarTab(container, lesson);
            break;
        case "translation":
            renderTranslationTab(container, lesson);
            break;
        case "practice":
            renderPracticeTab(container, lesson);
            break;
        case "homework":
            renderHomeworkTab(container, lesson);
            break;
        case "review":
            renderReviewTab(container, lesson);
            break;
        case "teacher-notes":
            renderTeacherNotesTab(container, lesson);
            break;
    }
}

// Overview
function renderOverviewTab(container, lesson) {
    const ov = lesson.overview;
    const h3 = document.createElement("h3");
    h3.textContent = ov.title;
    const p = document.createElement("p");
    p.textContent = ov.description;

    const goalsTitle = document.createElement("p");
    goalsTitle.textContent = "By the end of this lesson, the student can:";
    goalsTitle.style.fontWeight = "600";

    const ul = document.createElement("ul");
    ov.goals.forEach((g) => {
        const li = document.createElement("li");
        li.textContent = g;
        ul.appendChild(li);
    });

    const speakingOutcomes = Array.isArray(ov.speakingOutcomes) ? ov.speakingOutcomes : [];
    const speakingTitle = document.createElement("p");
    speakingTitle.textContent = "Speaking outcomes:";
    speakingTitle.style.fontWeight = "600";
    speakingTitle.style.marginTop = "10px";

    const speakingList = document.createElement("ul");
    speakingOutcomes.forEach((outcome) => {
        const li = document.createElement("li");
        li.textContent = outcome;
        speakingList.appendChild(li);
    });

    const useTitle = document.createElement("h4");
    useTitle.textContent = "Use it in your life";
    useTitle.style.marginTop = "12px";

    const useList = document.createElement("div");
    const useItems = getUseInLifeQuestions(lesson);
    useItems.forEach((q) => {
        const wrap = document.createElement("div");
        wrap.style.marginBottom = "6px";

        if (q.ar) {
            const ar = document.createElement("div");
            ar.className = "dialogue-col--ar";
            ar.style.fontSize = "1rem";
            ar.textContent = q.ar;
            wrap.appendChild(ar);
        }

        if (q.en) {
            const en = document.createElement("div");
            en.className = "translation-muted";
            en.textContent = q.en;
            wrap.appendChild(en);
        }

        useList.appendChild(wrap);
    });

    const btn = document.createElement("button");
    btn.className = "btn btn--primary btn--sm";
    btn.textContent = "Mark Overview as Done";
    btn.addEventListener("click", () => setStudentProgressField("overview", true));

    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(goalsTitle);
    container.appendChild(ul);
    if (speakingOutcomes.length) {
        container.appendChild(speakingTitle);
        container.appendChild(speakingList);
    }
    if (useItems.length) {
        container.appendChild(useTitle);
        container.appendChild(useList);
    }
    container.appendChild(btn);
    renderSectionStatus(container, "overview");
}

// Vocabulary


function renderVocabModalFromState() {
    const item = vocabModalState.list[vocabModalState.index];
    if (!item) return;

    const elAr = $("#vocabModalWord");
    const elEn = $("#vocabModalMeaning");
    const elArabeezy = $("#vocabModalArabeezy");
    const elHint = $("#vocabModalHint");
    const elProgress = $("#vocabModalProgress");

    const exAr = $("#vocabModalExampleAr");
    const exArabeezy = $("#vocabModalExampleArabeezy");
    const exEn = $("#vocabModalExampleEn");

    // Fill text
    elAr.textContent = item.ar || "";
    elEn.textContent = item.en || "";
    elArabeezy.textContent = item.enArabeezy || "";
    if (elHint) elHint.textContent = item.hint || "";

    if (exAr) exAr.textContent = item.exampleAr || "";
    if (exArabeezy) exArabeezy.textContent = item.exampleArabeezy || "";
    if (exEn) exEn.textContent = item.exampleEn || "";

    if (elProgress) {
        elProgress.textContent = `${vocabModalState.index + 1} / ${vocabModalState.list.length}`;
    }

    // ✅ Word visibility (Arabic word follows example toggle)
    elAr.style.display = (vocabModalState.showAr && vocabModalState.showExamples) ? "" : "none";
    elEn.style.display = vocabModalState.showEn ? "" : "none";
    elArabeezy.style.display = vocabModalState.showArabeezy ? "" : "none";

    // ✅ Examples visibility (independent, but respects each language toggle)
    const showEx = !!vocabModalState.showExamples;

    if (exAr) exAr.style.display = (showEx && vocabModalState.showAr) ? "" : "none";
    if (exEn) exEn.style.display = vocabModalState.showEn ? "" : "none";
    if (exArabeezy) exArabeezy.style.display = vocabModalState.showArabeezy ? "" : "none";

    // Buttons text
    const btnAr = $("#vocabToggleArBtn");          // لو عندك زر عربي
    const btnEn = $("#vocabToggleEnBtn");
    const btnEx = $("#vocabToggleExamplesBtn");
    const btnArabeezy = $("#vocabToggleArabeezyBtn");

    if (btnAr) btnAr.textContent = vocabModalState.showAr ? "👁 Hide" : "👁 Show";
    if (btnEn) btnEn.textContent = vocabModalState.showEn ? "👁 Hide" : "👁 Show";
    if (btnArabeezy) btnArabeezy.textContent = vocabModalState.showArabeezy ? "👁 Hide" : "👁 Show";
    if (btnEx) btnEx.textContent = vocabModalState.showExamples ? "👁 Hide" : "👁 Show";
}




function openVocabModal(list, index) {
    vocabModalState.list = list || [];
    vocabModalState.index = index || 0;
    vocabModalState.showExamples = true;
    vocabModalState.showAr = true;
    vocabModalState.showEn = true;
    vocabModalState.showArabeezy = true;
    vocabModalState.nextClickCount = 0;
    microCheckState.pendingNextAdvance = false;

    renderVocabModalFromState();
    $("#vocabModal").classList.add("modal--open");
}


function closeVocabModal() {
    $("#vocabModal").classList.remove("modal--open");
    vocabModalState.list = [];
    closeMicroCheckModal();
}


function ensureVocabVisitedSet() {
    const sid = appState.currentStudentId || "anon";
    if (!appState.vocabCoreVisited[sid]) {
        appState.vocabCoreVisited[sid] = {};
    }
    if (!appState.vocabCoreVisited[sid][appState.currentLessonId]) {
        appState.vocabCoreVisited[sid][appState.currentLessonId] = new Set();
    }
    return appState.vocabCoreVisited[sid][appState.currentLessonId];
}
function maybeAutoCompleteVocab() {
    const lesson = lessons[appState.currentLessonId];
    const set = ensureVocabVisitedSet();
    const totalCore = lesson.vocabulary.core.length;
    if (totalCore && set.size >= totalCore) {
        setStudentProgressField("vocabulary", true);
    }
}

function renderVocabularyGroup(container, titleText, items, isCore) {
    const title = document.createElement("div");
    title.className = "vocab-group-title";
    title.textContent = titleText;
    container.appendChild(title);

    const list = document.createElement("div");
    list.className = "vocab-list";

    items.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "vocab-item";

        const ar = document.createElement("div");
        ar.className = "vocab-item__ar";
        ar.textContent = item.ar;

        const en = document.createElement("div");
        en.className = "vocab-item__en";
        en.textContent = item.en;

        card.appendChild(ar);
        card.appendChild(en);

        card.addEventListener("click", () => {
            // ✅ نرسل الليست + index للمودال
            openVocabModal(items, index);

            // نفس منطق الـ progress القديم
            if (isCore) {
                const s = ensureVocabVisitedSet();
                s.add(item.id);
                maybeAutoCompleteVocab();
            }
        });

        list.appendChild(card);
    });

    container.appendChild(list);
}


function handleAddVocabItem(lesson, groupKey) {
    const ar = prompt("Arabic word (with vowels):");
    if (!ar) return;
    const en = prompt("English meaning:");
    if (!en) return;
    const hint = prompt("Optional hint / note:") || "";
    const enArabeezy = prompt("Arabeezy (optional):") || "";
    const exampleAr = prompt("Example sentence in Arabic (optional):") || "";
    const exampleArabeezy = prompt("Example sentence in Arabeezy (optional):") || "";
    const exampleEn = prompt("Example sentence in English (optional):") || "";
    lesson.vocabulary[groupKey].push({
        id: groupKey + "_" + Date.now(),
        ar,
        en,
        enArabeezy,
        hint,
        exampleAr,
        exampleArabeezy,
        exampleEn,
    });
    saveLessonToLS(appState.currentLessonId);
    saveLessonToCloud(appState.currentLessonId);
    setActiveTab("vocabulary");
}

function handleEditVocabItems(lesson) {
    const all = [
        ...lesson.vocabulary.core.map((i) => ({ ...i, groupKey: "core" })),
        ...lesson.vocabulary.extra.map((i) => ({ ...i, groupKey: "extra" })),
    ];
    if (!all.length) {
        alert("No vocabulary to edit.");
        return;
    }
    const list = all.map((i, idx) => `${idx + 1}. ${i.ar} / ${i.en}`).join("\n");
    const indexStr = prompt(
        "Choose item number to edit/delete:\n" + list + "\n\nEnter number (or cancel):"
    );
    if (!indexStr) return;
    const index = Number(indexStr) - 1;
    if (isNaN(index) || index < 0 || index >= all.length) return;
    const item = all[index];

    const action = prompt(
        `Selected: ${item.ar} / ${item.en}\nType:\n  e = edit\n  d = delete`
    );
    if (!action) return;

    const group = lesson.vocabulary[item.groupKey];
    const idxInGroup = group.findIndex((x) => x.id === item.id);
    if (action.toLowerCase() === "d") {
        if (idxInGroup !== -1) group.splice(idxInGroup, 1);
    } else if (action.toLowerCase() === "e") {
        const ar = prompt("Arabic:", item.ar) || item.ar;
        const en = prompt("English:", item.en) || item.en;
        const enArabeezy =
            prompt("Arabeezy:", item.enArabeezy || "") || item.enArabeezy || "";
        const hint = prompt("Hint:", item.hint || "") || item.hint || "";
        const exampleAr =
            prompt("Example Arabic:", item.exampleAr || "") || item.exampleAr || "";
        const exampleArabeezy =
            prompt("Example Arabeezy:", item.exampleArabeezy || "") || item.exampleArabeezy || "";
        const exampleEn =
            prompt("Example English:", item.exampleEn || "") || item.exampleEn || "";
        if (idxInGroup !== -1) {
            group[idxInGroup] = {
                ...item,
                ar,
                en,
                enArabeezy,
                hint,
                exampleAr,
                exampleArabeezy,
                exampleEn,
            };
        }
    }
    saveLessonToLS(appState.currentLessonId);
    saveLessonToCloud(appState.currentLessonId);
    setActiveTab("vocabulary");
}

function renderVocabularyTab(container, lesson) {
    const hint = document.createElement("p");
    hint.className = "teacher-edit-note";
    hint.textContent =
        "Tap a card to see details and example sentences. When you finish reviewing, press 'Done' to complete this section.";
    container.appendChild(hint);

    // ✅ شريط "تم إنهاء القسم"
    const doneBar = document.createElement("div");
    doneBar.className = "section-done-bar";

    const doneLabel = document.createElement("span");
    doneLabel.className = "section-done-text";


    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn--outline btn--sm section-done-btn";
    doneBtn.textContent = "Mark Vocabulary as Done";

    doneBtn.addEventListener("click", () => {
        markVocabularyDone();
    });

    doneBar.appendChild(doneLabel);
    doneBar.appendChild(doneBtn);
    container.appendChild(doneBar);

    // ✅ باقي تبويب المفردات
    const vocab = lesson.vocabulary || {};
    const core = Array.isArray(vocab.core) ? vocab.core : [];
    const extra = Array.isArray(vocab.extra) ? vocab.extra : [];

    if (core.length) {
        renderVocabularyGroup(container, "Core Vocabulary", core, true);
    }
    if (extra.length) {
        renderVocabularyGroup(container, "Extra Vocabulary", extra, false);
    }
}



// Dialogue
function renderDialogueTab(container, lesson) {
    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";
    header.style.gap = "8px";

    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Model Dialogue";

    const controls = document.createElement("div");
    controls.style.display = "flex";
    controls.style.gap = "6px";
    controls.style.flexWrap = "wrap";
    controls.style.justifyContent = "flex-end";

    const btnToggleEnglish = document.createElement("button");
    btnToggleEnglish.className = "btn btn--ghost btn--sm";
    btnToggleEnglish.textContent = "Show/Hide English";

    const btnToggleArabic = document.createElement("button");
    btnToggleArabic.className = "btn btn--ghost btn--sm";
    btnToggleArabic.textContent = "Show/Hide Arabic";

    const btnToggleArabeezy = document.createElement("button");
    btnToggleArabeezy.className = "btn btn--ghost btn--sm";
    btnToggleArabeezy.textContent = "Show/Hide Arabeezy";

    const dialogueQuestions = safeArr(lesson?.dialogue?.questions);
    let questionsModal = null;
    const btnQuestions = document.createElement("button");
    btnQuestions.className = "btn btn--outline btn--sm";
    btnQuestions.textContent = `Questions${dialogueQuestions.length ? ` (${dialogueQuestions.length})` : ""}`;
    btnQuestions.hidden = !dialogueQuestions.length;

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Dialogue as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("dialogue", true));

    controls.appendChild(btnToggleArabic);
    controls.appendChild(btnToggleEnglish);
    controls.appendChild(btnToggleArabeezy);
    controls.appendChild(btnQuestions);
    controls.appendChild(btnDone);

    header.appendChild(title);
    header.appendChild(controls);

    const layout = document.createElement("div");
    layout.className = "dialogue-layout";

    const enCol = document.createElement("div");
    enCol.className = "dialogue-col";

    const arCol = document.createElement("div");
    arCol.className = "dialogue-col dialogue-col--ar";

    lesson.dialogue.lines.forEach((line) => {
        const enLine = document.createElement("div");
        enLine.className = "dialogue-line";
        const enSpeaker = document.createElement("div");
        enSpeaker.className = "dialogue-speaker-en";
        enSpeaker.textContent = line.speaker;
        const enText = document.createElement("div");
        enText.className = "dialogue-text";
        enText.textContent = line.en;
        enLine.appendChild(enSpeaker);
        enLine.appendChild(enText);
        enCol.appendChild(enLine);

        const arLine = document.createElement("div");
        arLine.className = "dialogue-line";
        const arSpeaker = document.createElement("div");
        arSpeaker.className = "dialogue-speaker-ar";
        arSpeaker.textContent = line.speaker;
        const arContent = document.createElement("div");
        arContent.className = "dialogue-content";

        const arText = document.createElement("div");
        arText.className = "dialogue-text";
        arText.textContent = line.ar;
        arContent.appendChild(arText);

        const arArabeezyText = line.arArabeezy || line.arabeezy || "";
        if (arArabeezyText) {
            const arArabeezy = document.createElement("div");
            arArabeezy.className = "dialogue-arabeezy";
            arArabeezy.textContent = arArabeezyText;
            arContent.appendChild(arArabeezy);
        }
        arLine.appendChild(arSpeaker);
        arLine.appendChild(arContent);
        arCol.appendChild(arLine);
    });

    layout.appendChild(enCol);
    layout.appendChild(arCol);

    let englishVisible = true;
    let arabicVisible = true;
    let arabeezyVisible = true;


    function adjustLayout() {
        const showArabicCol = arabicVisible || arabeezyVisible;
        if (englishVisible && showArabicCol) {
            layout.style.gridTemplateColumns = "minmax(0, 1fr) minmax(0, 1fr)";
            enCol.style.display = "block";
            arCol.style.display = "block";
            enCol.style.margin = "0";
            arCol.style.margin = "0";
        } else if (englishVisible && !showArabicCol) {
            layout.style.gridTemplateColumns = "minmax(0, 1fr)";
            enCol.style.display = "block";
            arCol.style.display = "none";
            enCol.style.margin = "0 auto";
        } else if (!englishVisible && showArabicCol) {
            layout.style.gridTemplateColumns = "minmax(0, 1fr)";
            enCol.style.display = "none";
            arCol.style.display = "block";
            arCol.style.margin = "0 auto";
        } else {
            // لو الاثنين مخفيين، خليه فاضي لكن نحافظ على التخطيط
            layout.style.gridTemplateColumns = "minmax(0, 1fr)";
            enCol.style.display = "none";
            arCol.style.display = "none";
        }
    }

    function updateArabicVisibility() {
        arCol.querySelectorAll(".dialogue-text").forEach((el) => {
            el.style.display = arabicVisible ? "" : "none";
        });
    }

    function updateArabeezyVisibility() {
        arCol.querySelectorAll(".dialogue-arabeezy").forEach((el) => {
            el.style.display = arabeezyVisible ? "" : "none";
        });
    }

    btnToggleEnglish.addEventListener("click", () => {
        englishVisible = !englishVisible;
        adjustLayout();
    });

    btnToggleArabic.addEventListener("click", () => {
        arabicVisible = !arabicVisible;
        adjustLayout();
        updateArabicVisibility();
    });

    btnToggleArabeezy.addEventListener("click", () => {
        arabeezyVisible = !arabeezyVisible;
        adjustLayout();
        updateArabeezyVisibility();
    });

    function closeQuestionsModal() {
        if (questionsModal) questionsModal.classList.remove("modal--open");
    }

    function openQuestionsModal() {
        if (!questionsModal || !dialogueQuestions.length) return;
        questionsModal.classList.add("modal--open");
    }

    if (dialogueQuestions.length) {
        questionsModal = document.createElement("div");
        questionsModal.className = "modal dialogue-questions-modal";
        questionsModal.setAttribute("role", "dialog");
        questionsModal.setAttribute("aria-modal", "true");
        questionsModal.setAttribute("aria-label", "Dialogue questions");

        const backdrop = document.createElement("div");
        backdrop.className = "modal__backdrop";
        backdrop.addEventListener("click", closeQuestionsModal);

        const body = document.createElement("div");
        body.className = "modal__body dialogue-questions-modal__body";

        const modalHeader = document.createElement("div");
        modalHeader.className = "dialogue-questions-modal__header";
        const modalTitle = document.createElement("div");
        const eyebrow = document.createElement("span");
        eyebrow.className = "dialogue-questions-modal__eyebrow";
        eyebrow.textContent = "Dialogue Practice";
        const heading = document.createElement("h4");
        heading.textContent = "Questions";
        modalTitle.appendChild(eyebrow);
        modalTitle.appendChild(heading);

        const close = document.createElement("button");
        close.type = "button";
        close.className = "modal__close dialogue-questions-modal__close";
        close.textContent = "Close";
        close.addEventListener("click", closeQuestionsModal);

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(close);

        const list = document.createElement("ol");
        list.className = "dialogue-questions-modal__list";
        dialogueQuestions.forEach((question) => {
            const item = document.createElement("li");
            item.className = "dialogue-questions-modal__item";
            const ar = document.createElement("div");
            ar.className = "dialogue-questions-modal__ar";
            ar.textContent = typeof question === "string" ? question : question.ar || "";
            item.appendChild(ar);
            if (question && typeof question === "object" && question.en) {
                const en = document.createElement("div");
                en.className = "dialogue-questions-modal__en";
                en.textContent = question.en;
                item.appendChild(en);
            }
            list.appendChild(item);
        });

        body.appendChild(modalHeader);
        body.appendChild(list);
        questionsModal.appendChild(backdrop);
        questionsModal.appendChild(body);
        btnQuestions.addEventListener("click", openQuestionsModal);
    }

    // أول مرة
    adjustLayout();
    updateArabicVisibility();
    updateArabeezyVisibility();

    container.appendChild(header);
    container.appendChild(layout);
    if (questionsModal) container.appendChild(questionsModal);

    if (appState.teacherMode) {
        const note = document.createElement("p");
        note.className = "teacher-edit-note";
        note.textContent =
            "Teacher notes are disabled in the public student build.";
        container.appendChild(note);
    }

    renderSectionStatus(container, "dialogue");
}

// Translation
function renderTranslationTab(container, lesson) {
    ensureTranslationItems(lesson, 7);

    const list = safeArr(lesson?.practice?.translation);
    translationState.items = list;
    translationState.index = 0;
    translationState.hidePrompt = false;
    translationState.hideAnswer = false;
    translationState.shuffled = false;

    // زر "تم"
    const doneBar = document.createElement("div");
    doneBar.className = "section-done-bar";

    const doneText = document.createElement("span");
    doneText.className = "translation-muted";
    doneText.textContent = "بعد ما تخلص ترجمة الجمل اضغط تم لإنهاء القسم.";

    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn--outline btn--sm";
    doneBtn.textContent = "✓ تم إنهاء قسم الترجمة";
    doneBtn.addEventListener("click", () => {
        setStudentProgressField("translation", true);
    });

    doneBar.appendChild(doneText);
    doneBar.appendChild(doneBtn);
    container.appendChild(doneBar);

    // Toolbar (إخفاء مرتب، مش معجوق)
    const toolbar = document.createElement("div");
    toolbar.className = "translation-toolbar";

    const left = document.createElement("div");
    left.className = "group";

    const btnHidePrompt = document.createElement("button");
    btnHidePrompt.className = "btn btn--ghost btn--sm";
    btnHidePrompt.textContent = "Hide prompt";

    const btnHideAnswer = document.createElement("button");
    btnHideAnswer.className = "btn btn--ghost btn--sm";
    btnHideAnswer.textContent = "Hide answer";

    const btnShuffle = document.createElement("button");
    btnShuffle.className = "btn btn--ghost btn--sm";
    btnShuffle.textContent = "Shuffle";

    const btnReset = document.createElement("button");
    btnReset.className = "btn btn--ghost btn--sm";
    btnReset.textContent = "Reset";

    left.appendChild(btnHidePrompt);
    left.appendChild(btnHideAnswer);
    left.appendChild(btnShuffle);
    left.appendChild(btnReset);

    const right = document.createElement("div");
    right.className = "group";

    const counter = document.createElement("span");
    counter.className = "translation-muted";
    counter.textContent = list.length ? `1 / ${list.length}` : "0 / 0";

    const btnPrev = document.createElement("button");
    btnPrev.className = "btn btn--ghost btn--sm";
    btnPrev.textContent = "⬅ Prev";

    const btnNext = document.createElement("button");
    btnNext.className = "btn btn--ghost btn--sm";
    btnNext.textContent = "Next ➡";

    right.appendChild(btnPrev);
    right.appendChild(btnNext);
    right.appendChild(counter);

    toolbar.appendChild(left);
    toolbar.appendChild(right);
    container.appendChild(toolbar);

    // Card container
    const cardHost = document.createElement("div");
    container.appendChild(cardHost);

    // Render function
    function renderTranslationCard() {
        cardHost.innerHTML = "";

        const item = translationState.items[translationState.index];
        if (!item) {
            const p = document.createElement("p");
            p.className = "translation-muted";
            p.textContent = "No translation items available.";
            cardHost.appendChild(p);
            return;
        }

        const type = item.type === "arToEn" ? "Arabic → English" : "English → Arabic";

        const card = document.createElement("div");
        card.className = "translation-card";

        const badge = document.createElement("span");
        badge.className = "translation-badge";
        badge.textContent = type;

        const prompt = document.createElement("div");
        prompt.className = "translation-prompt";

        const answer = document.createElement("div");
        answer.className = "translation-answer";

        // prompt/answer content
        if (item.type === "enToAr") {
            prompt.textContent = translationState.hidePrompt ? "••••••••" : `EN: ${txt(item.textEn)}`;
            answer.textContent = translationState.hideAnswer ? "••••••••" : `AR: ${txt(item.textAr)}`;
        } else {
            prompt.textContent = translationState.hidePrompt ? "••••••••" : `AR: ${txt(item.textAr)}`;
            answer.textContent = translationState.hideAnswer ? "••••••••" : `EN: ${txt(item.textEn)}`;
        }

        const btnShow = document.createElement("button");
        btnShow.className = "btn btn--outline btn--sm";
        btnShow.textContent = "Show answer";

        btnShow.addEventListener("click", () => {
            const isVisible = answer.classList.toggle("is-visible");
            btnShow.textContent = isVisible ? "Hide answer" : "Show answer";
        });

        const footer = document.createElement("div");
        footer.className = "translation-footer";

        const tip = document.createElement("span");
        tip.className = "translation-muted";
        tip.textContent = "Try to say it out loud before showing the answer.";

        footer.appendChild(tip);
        footer.appendChild(btnShow);

        card.appendChild(badge);
        card.appendChild(prompt);
        card.appendChild(footer);
        card.appendChild(answer);

        cardHost.appendChild(card);

        counter.textContent = `${translationState.index + 1} / ${translationState.items.length}`;

        // Update toolbar button text states
        btnHidePrompt.textContent = translationState.hidePrompt ? "Show prompt" : "Hide prompt";
        btnHideAnswer.textContent = translationState.hideAnswer ? "Show answer" : "Hide answer";
    }

    // toolbar actions
    btnHidePrompt.addEventListener("click", () => {
        translationState.hidePrompt = !translationState.hidePrompt;
        renderTranslationCard();
    });

    btnHideAnswer.addEventListener("click", () => {
        translationState.hideAnswer = !translationState.hideAnswer;
        renderTranslationCard();
    });

    btnShuffle.addEventListener("click", () => {
        translationState.items = shuffleArray(translationState.items);
        translationState.index = 0;
        translationState.shuffled = true;
        renderTranslationCard();
    });

    btnReset.addEventListener("click", () => {
        translationState.index = 0;
        translationState.hidePrompt = false;
        translationState.hideAnswer = false;
        renderTranslationCard();
    });

    btnPrev.addEventListener("click", () => {
        if (!translationState.items.length) return;
        translationState.index =
            (translationState.index - 1 + translationState.items.length) % translationState.items.length;
        renderTranslationCard();
    });

    btnNext.addEventListener("click", () => {
        if (!translationState.items.length) return;
        translationState.index =
            (translationState.index + 1) % translationState.items.length;
        renderTranslationCard();
    });

    renderTranslationCard();
    renderSectionStatus(container, "translation");
}

// Grammar
function renderGrammarTab(container, lesson) {
    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Grammar Notes";
    container.appendChild(title);

    const items = safeArr(lesson?.grammar);
    if (!items.length) {
        const empty = document.createElement("p");
        empty.className = "translation-muted";
        empty.textContent = "No grammar points available yet.";
        container.appendChild(empty);
    } else {
        const accordion = document.createElement("div");
        accordion.className = "grammar-accordion";

        items.forEach((g, idx) => {
            const details = document.createElement("details");
            details.className = "grammar-accordion__item";
            if (idx === 0) details.open = true;

            const summary = document.createElement("summary");
            summary.className = "grammar-accordion__summary";

            const summaryTitle = document.createElement("span");
            summaryTitle.className = "grammar-accordion__title";
            summaryTitle.textContent = g.title || "Grammar point";

            const summaryHint = document.createElement("span");
            summaryHint.className = "grammar-accordion__hint";
            summaryHint.textContent = g.short || "Tap to see rules, examples, and notes.";

            summary.appendChild(summaryTitle);
            summary.appendChild(summaryHint);

            const body = document.createElement("div");
            body.className = "grammar-accordion__body";

            const desc = document.createElement("p");
            desc.className = "grammar-desc";
            desc.textContent = g.description || "";
            body.appendChild(desc);

            if (g.table && Array.isArray(g.table.headers) && Array.isArray(g.table.rows)) {
                const tableWrap = document.createElement("div");
                tableWrap.className = "grammar-topic-table";

                const tableTitle = document.createElement("div");
                tableTitle.className = "grammar-topic-table__title";
                tableTitle.textContent = g.table.title || "Table";

                const table = document.createElement("table");
                table.className = "grammar-table__table";

                const thead = document.createElement("thead");
                const headRow = document.createElement("tr");
                g.table.headers.forEach((h) => {
                    const th = document.createElement("th");
                    th.textContent = h;
                    headRow.appendChild(th);
                });
                thead.appendChild(headRow);

                const tbody = document.createElement("tbody");
                g.table.rows.forEach((row) => {
                    const tr = document.createElement("tr");
                    row.forEach((cell) => {
                        const td = document.createElement("td");
                        td.textContent = cell;
                        tr.appendChild(td);
                    });
                    tbody.appendChild(tr);
                });

                table.appendChild(thead);
                table.appendChild(tbody);
                tableWrap.appendChild(tableTitle);
                tableWrap.appendChild(table);
                body.appendChild(tableWrap);
            }

            const examples = Array.isArray(g.examples) ? g.examples : [];
            const examplesBlock = document.createElement("div");
            examplesBlock.className = "grammar-examples";
            const examplesTitle = document.createElement("div");
            examplesTitle.className = "grammar-examples__title";
            examplesTitle.textContent = "Examples";
            examplesBlock.appendChild(examplesTitle);

            if (!examples.length) {
                const emptyExamples = document.createElement("div");
                emptyExamples.className = "grammar-examples__empty";
                emptyExamples.textContent = "No examples yet.";
                examplesBlock.appendChild(emptyExamples);
            } else {
                const list = document.createElement("div");
                list.className = "grammar-examples__list";
                examples.forEach((ex) => {
                    const row = document.createElement("div");
                    row.className = "grammar-example";

                    const ar = document.createElement("div");
                    ar.className = "grammar-example__ar";
                    ar.textContent = ex.ar || "";

                    const arabeezy = document.createElement("div");
                    arabeezy.className = "grammar-example__arabeezy";
                    arabeezy.textContent = ex.arabeezy || "";

                    const en = document.createElement("div");
                    en.className = "grammar-example__en";
                    en.textContent = ex.en || "";

                    row.appendChild(ar);
                    row.appendChild(arabeezy);
                    row.appendChild(en);
                    list.appendChild(row);
                });
                examplesBlock.appendChild(list);
            }
            body.appendChild(examplesBlock);

            if (appState.teacherMode) {
                const notesWrap = document.createElement("div");
                notesWrap.className = "grammar-teacher";

                const notesTitle = document.createElement("div");
                notesTitle.className = "grammar-teacher__title";
                notesTitle.textContent = "Teacher Notes";

                const notesText = document.createElement("div");
                notesText.className = "grammar-teacher__text";
                notesText.textContent = g.teacherNotes || "No teacher notes yet.";

                notesWrap.appendChild(notesTitle);
                notesWrap.appendChild(notesText);
                body.appendChild(notesWrap);
            }

            details.appendChild(summary);
            details.appendChild(body);
            accordion.appendChild(details);
        });

        container.appendChild(accordion);
    }

    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn--outline btn--sm";
    doneBtn.textContent = "Mark Grammar as Done";
    doneBtn.addEventListener("click", () => setStudentProgressField("grammar", true));
    container.appendChild(doneBtn);
    renderSectionStatus(container, "grammar");
}


// Practice
function renderPracticeTabSimple(container, lesson) {
    const practice = lesson.practice || {};
    const quiz = Array.isArray(practice.quiz) ? practice.quiz : [];
    const rolePlays = Array.isArray(practice.rolePlays) ? practice.rolePlays : [];

    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Practice - Quiz & Role-play";
    container.appendChild(title);

    const quizBlock = document.createElement("div");
    let correctCount = 0;

    if (!quiz.length) {
        const empty = document.createElement("p");
        empty.className = "translation-muted";
        empty.textContent = "No quiz questions available yet.";
        quizBlock.appendChild(empty);
    }

    quiz.forEach((q) => {
        const qWrap = document.createElement("div");
        qWrap.className = "quiz-question";

        const qText = document.createElement("div");
        qText.className = "flashcard__ar";
        qText.style.direction = "rtl";
        qText.textContent = q.questionAr || "";

        const optionsWrap = document.createElement("div");
        optionsWrap.className = "quiz-options";

        const feedback = document.createElement("div");
        feedback.className = "quiz-feedback";

        const options = Array.isArray(q.optionsEn) ? q.optionsEn : [];
        options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "quiz-option";
            btn.textContent = opt;
            btn.addEventListener("click", () => {
                optionsWrap.querySelectorAll(".quiz-option").forEach((optionBtn) => {
                    optionBtn.classList.remove("quiz-option--correct", "quiz-option--incorrect");
                });
                if (idx === q.correctIndex) {
                    btn.classList.add("quiz-option--correct");
                    feedback.textContent = "Correct!";
                    correctCount++;
                    if (correctCount >= 5 || correctCount >= quiz.length) {
                        setStudentProgressField("practice", true);
                    }
                } else {
                    btn.classList.add("quiz-option--incorrect");
                    feedback.textContent = "Not quite. Try again.";
                }
            });
            optionsWrap.appendChild(btn);
        });

        qWrap.appendChild(qText);
        qWrap.appendChild(optionsWrap);
        qWrap.appendChild(feedback);
        quizBlock.appendChild(qWrap);
    });

    container.appendChild(quizBlock);

    const roleTitle = document.createElement("p");
    roleTitle.style.marginTop = "8px";
    roleTitle.style.fontWeight = "600";
    roleTitle.textContent = "Role-play prompts:";
    container.appendChild(roleTitle);

    const ul = document.createElement("ul");
    ul.className = "roleplay-list";
    if (!rolePlays.length) {
        const li = document.createElement("li");
        li.textContent = "No role-play prompts available yet.";
        ul.appendChild(li);
    }
    rolePlays.forEach((rp) => {
        const li = document.createElement("li");
        li.textContent = rp;
        ul.appendChild(li);
    });
    container.appendChild(ul);

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Practice as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("practice", true));
    container.appendChild(btnDone);

    renderSectionStatus(container, "practice");
}

function renderPracticeTabLegacy(container, lesson) {
    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Practice – Recognition, Production & Simulation";

    const quizBlock = document.createElement("div");
    let correctCount = 0;

    lesson.practice.quiz.forEach((q) => {
        const qWrap = document.createElement("div");
        qWrap.className = "quiz-question";

        const qText = document.createElement("div");
        qText.className = "flashcard__ar";
        qText.style.direction = "rtl";
        qText.textContent = q.questionAr;

        const optionsWrap = document.createElement("div");
        optionsWrap.className = "quiz-options";

        const feedback = document.createElement("div");
        feedback.className = "quiz-feedback";

        q.optionsEn.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "quiz-option";
            btn.textContent = opt;
            btn.addEventListener("click", () => {
                if (idx === q.correctIndex) {
                    btn.classList.add("quiz-option--correct");
                    feedback.textContent = "✅ Correct!";
                    correctCount++;
                    if (correctCount >= 5 || correctCount >= lesson.practice.quiz.length) {
                        setStudentProgressField("practice", true);
                    }
                } else {
                    btn.classList.add("quiz-option--incorrect");
                    feedback.textContent = "❌ Not quite. Try again.";
                }
            });
            optionsWrap.appendChild(btn);
        });

        qWrap.appendChild(qText);
        qWrap.appendChild(optionsWrap);
        qWrap.appendChild(feedback);
        quizBlock.appendChild(qWrap);
    });

    const roleTitle = document.createElement("p");
    roleTitle.style.marginTop = "8px";
    roleTitle.style.fontWeight = "600";
    roleTitle.textContent = "Role-play prompts:";

    const ul = document.createElement("ul");
    ul.className = "roleplay-list";
    lesson.practice.rolePlays.forEach((rp) => {
        const li = document.createElement("li");
        li.textContent = rp;
        ul.appendChild(li);
    });

    const structuredPractice = document.createElement("div");
    const practiceSections = Array.isArray(lesson.practice.sections)
        ? lesson.practice.sections
        : [];

    practiceSections.forEach((section) => {
        const sectionWrap = document.createElement("div");
        sectionWrap.className = "quiz-question";

        const sectionTitle = document.createElement("h4");
        sectionTitle.className = "td-lessonitem__title";
        sectionTitle.textContent = section.title || "Practice";
        sectionWrap.appendChild(sectionTitle);

        if (section.realSituationSimulation) {
            const sim = document.createElement("p");
            sim.className = "teacher-edit-note";
            sim.textContent = `Real Situation Simulation: ${section.realSituationSimulation}`;
            sectionWrap.appendChild(sim);
        }

        function appendList(label, items, formatter) {
            if (!Array.isArray(items) || !items.length) return;
            const subTitle = document.createElement("p");
            subTitle.style.fontWeight = "600";
            subTitle.textContent = label;
            sectionWrap.appendChild(subTitle);

            const list = document.createElement("ul");
            list.className = "roleplay-list";
            items.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = formatter(item);
                list.appendChild(li);
            });
            sectionWrap.appendChild(list);
        }

        appendList("Matching", section.matching, (item) => `${item.ar} = ${item.en}`);
        appendList("Multiple choice", section.multipleChoice, (item) => {
            const opts = Array.isArray(item.options) ? item.options.join(" / ") : "";
            return `${item.prompt} (${opts})`;
        });
        appendList("Fill in the blank", section.fillInTheBlank, (item) => `${item.prompt} Answer: ${item.answer}`);
        appendList("Reorder sentences", section.reorderSentences, (item) => {
            const words = Array.isArray(item.words) ? item.words.join(" / ") : "";
            return `${item.prompt} Words: ${words}`;
        });
        appendList("Translation (Arabic ↔ English)", section.translation, (item) => `${item.en} = ${item.ar}`);
        appendList("Write your own sentences (5–10)", section.writeYourOwnSentences, (item) => item);

        structuredPractice.appendChild(sectionWrap);
    });

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Practice as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("practice", true));

    container.appendChild(title);
    container.appendChild(quizBlock);
    container.appendChild(roleTitle);
    container.appendChild(ul);
    if (practiceSections.length) {
        container.appendChild(structuredPractice);
    }
    container.appendChild(btnDone);

    if (appState.teacherMode) {
        const note = document.createElement("p");
        note.className = "teacher-edit-note";
        note.textContent =
            "Teacher notes are disabled in the public student build.";
        container.appendChild(note);
    }

    renderSectionStatus(container, "practice");
}

// Homework
function renderHomeworkTabLegacy(container, lesson) {
    const student = getCurrentStudent();
    const progress = student && getStudentProgress(student, appState.currentLessonId);

    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Homework";

    const text = document.createElement("p");
    text.className = "homework-text";
    text.textContent = lesson.homework.instructions;

    const homeworkTasks = Array.isArray(lesson.homework.tasks)
        ? lesson.homework.tasks
        : [];
    const tasksWrap = document.createElement("div");
    homeworkTasks.forEach((task) => {
        const taskBlock = document.createElement("div");
        taskBlock.className = "quiz-question";

        const taskTitle = document.createElement("p");
        taskTitle.style.fontWeight = "600";
        taskTitle.textContent = task.title || "Homework task";
        taskBlock.appendChild(taskTitle);

        if (task.instructions) {
            const taskText = document.createElement("p");
            taskText.className = "homework-text";
            taskText.textContent = task.instructions;
            taskBlock.appendChild(taskText);
        }

        if (Array.isArray(task.examples) && task.examples.length) {
            const examples = document.createElement("ul");
            examples.className = "roleplay-list";
            task.examples.forEach((example) => {
                const li = document.createElement("li");
                li.textContent = example;
                examples.appendChild(li);
            });
            taskBlock.appendChild(examples);
        }

        tasksWrap.appendChild(taskBlock);
    });

    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.alignItems = "center";
    wrap.style.gap = "6px";
    wrap.style.marginBottom = "8px";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = "homeworkAssignedCheckbox";
    check.checked = progress && progress.homework;

    const label = document.createElement("label");
    label.htmlFor = "homeworkAssignedCheckbox";
    label.textContent = "Homework assigned / completed";

    wrap.appendChild(check);
    wrap.appendChild(label);

    check.addEventListener("change", () => {
        setStudentProgressField("homework", check.checked);
    });

    const notesLabel = document.createElement("p");
    notesLabel.className = "teacher-edit-note";
    notesLabel.textContent = "Teacher notes for this student:";

    const notes = document.createElement("textarea");
    notes.className = "homework-notes";
    notes.placeholder = "E.g. Needs more practice with kifak/kifik.";
    notes.value =
        (student &&
            student.homeworkNotes &&
            student.homeworkNotes[appState.currentLessonId]) ||
        "";

    notes.addEventListener("change", () => {
        if (!student) return;
        if (!student.homeworkNotes) student.homeworkNotes = {};
        student.homeworkNotes[appState.currentLessonId] = notes.value;
        saveStudentsToLS();
    });

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Homework as Done";
    btnDone.addEventListener("click", () => {
        check.checked = true;
        setStudentProgressField("homework", true);
    });

    container.appendChild(title);
    container.appendChild(text);
    if (homeworkTasks.length) {
        container.appendChild(tasksWrap);
    }
    container.appendChild(wrap);
    container.appendChild(notesLabel);
    container.appendChild(notes);
    container.appendChild(btnDone);

    if (appState.teacherMode) {
        const note = document.createElement("p");
        note.className = "teacher-edit-note";
        note.textContent =
            "Teacher notes are disabled in the public student build.";
        container.appendChild(note);
    }

    renderSectionStatus(container, "homework");
}

// Quick review

function renderPracticeTabInteractiveV1(container, lesson) {
    const practice = lesson.practice || {};
    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Practice - Recognition, Production & Simulation";
    container.appendChild(title);

    const intro = document.createElement("p");
    intro.className = "practice-intro";
    intro.textContent = "Practice starts with recognition, moves to guided production, then ends with real speaking situations.";
    container.appendChild(intro);

    function panel(titleText, metaText, open = false) {
        const details = document.createElement("details");
        details.className = "practice-panel";
        details.open = open;
        const summary = document.createElement("summary");
        summary.className = "practice-panel__summary";
        const heading = document.createElement("span");
        heading.className = "practice-panel__title";
        heading.textContent = titleText;
        const meta = document.createElement("span");
        meta.className = "practice-panel__meta";
        meta.textContent = metaText || "Open";
        summary.appendChild(heading);
        summary.appendChild(meta);
        const body = document.createElement("div");
        body.className = "practice-panel__body";
        details.appendChild(summary);
        details.appendChild(body);
        container.appendChild(details);
        return body;
    }

    function miniTitle(parent, text) {
        const el = document.createElement("div");
        el.className = "practice-mini-title";
        el.textContent = text;
        parent.appendChild(el);
    }

    function feedback() {
        const el = document.createElement("div");
        el.className = "practice-feedback";
        return el;
    }

    function normalizeAnswer(value) {
        return String(value || "").replace(/[،.؟!?\s]/g, "").trim();
    }

    const quizItems = safeArr(practice.quiz);
    if (quizItems.length) {
        const body = panel("Quick Quiz", `${quizItems.length} questions`, true);
        const grid = document.createElement("div");
        grid.className = "practice-grid";
        let correctCount = 0;
        quizItems.forEach((q, qIndex) => {
            const card = document.createElement("div");
            card.className = "practice-card";
            const prompt = document.createElement("div");
            prompt.className = "practice-card__prompt practice-card__prompt--ar";
            prompt.textContent = q.questionAr || `Question ${qIndex + 1}`;
            const options = document.createElement("div");
            options.className = "quiz-options";
            const fb = feedback();
            safeArr(q.optionsEn).forEach((opt, idx) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "quiz-option";
                btn.textContent = opt;
                btn.addEventListener("click", () => {
                    options.querySelectorAll(".quiz-option").forEach((b) => b.classList.remove("quiz-option--correct", "quiz-option--incorrect"));
                    const ok = idx === q.correctIndex;
                    btn.classList.add(ok ? "quiz-option--correct" : "quiz-option--incorrect");
                    fb.className = ok ? "practice-feedback practice-feedback--ok" : "practice-feedback practice-feedback--no";
                    fb.textContent = ok ? "Correct" : "Try again";
                    if (ok) correctCount++;
                    if (correctCount >= 5 || correctCount >= quizItems.length) setStudentProgressField("practice", true);
                });
                options.appendChild(btn);
            });
            card.appendChild(prompt);
            card.appendChild(options);
            card.appendChild(fb);
            grid.appendChild(card);
        });
        body.appendChild(grid);
    }

    safeArr(practice.sections).forEach((section, sectionIndex) => {
        const count = ["matching", "multipleChoice", "fillInTheBlank", "reorderSentences", "translation", "writeYourOwnSentences"]
            .reduce((total, key) => total + safeArr(section[key]).length, 0);
        const body = panel(section.title || "Practice", `${count} activities`, sectionIndex === 0);

        if (section.realSituationSimulation) {
            const sim = document.createElement("p");
            sim.className = "practice-simulation";
            sim.textContent = `Real Situation Simulation: ${section.realSituationSimulation}`;
            body.appendChild(sim);
        }

        if (safeArr(section.matching).length) {
            miniTitle(body, "Matching");
            const list = document.createElement("div");
            list.className = "practice-list";
            const choices = shuffleArray(safeArr(section.matching).map((item) => item.en));
            safeArr(section.matching).forEach((item) => {
                const row = document.createElement("div");
                row.className = "practice-row";
                const ar = document.createElement("div");
                ar.className = "practice-row__ar";
                ar.textContent = item.ar || "";
                const select = document.createElement("select");
                select.className = "practice-select";
                select.innerHTML = `<option value="">Choose meaning</option>`;
                choices.forEach((choice) => {
                    const opt = document.createElement("option");
                    opt.value = choice;
                    opt.textContent = choice;
                    select.appendChild(opt);
                });
                const fb = feedback();
                select.addEventListener("change", () => {
                    const ok = select.value === item.en;
                    fb.className = ok ? "practice-feedback practice-feedback--ok" : "practice-feedback practice-feedback--no";
                    fb.textContent = ok ? "Correct" : "Try again";
                });
                row.appendChild(ar);
                row.appendChild(select);
                row.appendChild(fb);
                list.appendChild(row);
            });
            body.appendChild(list);
        }

        if (safeArr(section.multipleChoice).length) {
            miniTitle(body, "Multiple Choice");
            const grid = document.createElement("div");
            grid.className = "practice-grid";
            safeArr(section.multipleChoice).forEach((item) => {
                const card = document.createElement("div");
                card.className = "practice-card";
                const prompt = document.createElement("div");
                prompt.className = "practice-card__prompt";
                prompt.textContent = item.prompt || "";
                const options = document.createElement("div");
                options.className = "quiz-options";
                const fb = feedback();
                safeArr(item.options).forEach((option) => {
                    const btn = document.createElement("button");
                    btn.type = "button";
                    btn.className = "quiz-option";
                    btn.textContent = option;
                    btn.addEventListener("click", () => {
                        options.querySelectorAll(".quiz-option").forEach((b) => b.classList.remove("quiz-option--correct", "quiz-option--incorrect"));
                        const ok = option === item.correct;
                        btn.classList.add(ok ? "quiz-option--correct" : "quiz-option--incorrect");
                        fb.className = ok ? "practice-feedback practice-feedback--ok" : "practice-feedback practice-feedback--no";
                        fb.textContent = ok ? "Correct" : `Answer: ${item.correct}`;
                    });
                    options.appendChild(btn);
                });
                card.appendChild(prompt);
                card.appendChild(options);
                card.appendChild(fb);
                grid.appendChild(card);
            });
            body.appendChild(grid);
        }

        if (safeArr(section.fillInTheBlank).length) {
            miniTitle(body, "Fill in the Blank");
            const list = document.createElement("div");
            list.className = "practice-list";
            safeArr(section.fillInTheBlank).forEach((item) => {
                const row = document.createElement("div");
                row.className = "practice-row practice-row--stack";
                const prompt = document.createElement("div");
                prompt.className = "practice-card__prompt practice-card__prompt--ar";
                prompt.textContent = item.prompt || "";
                const line = document.createElement("div");
                line.className = "practice-answer-line";
                const input = document.createElement("input");
                input.className = "practice-input";
                input.type = "text";
                input.placeholder = "Type the missing word";
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "btn btn--outline btn--sm";
                btn.textContent = "Check";
                const fb = feedback();
                btn.addEventListener("click", () => {
                    const ok = normalizeAnswer(input.value) === normalizeAnswer(item.answer);
                    fb.className = ok ? "practice-feedback practice-feedback--ok" : "practice-feedback practice-feedback--no";
                    fb.textContent = ok ? "Correct" : `Answer: ${item.answer}`;
                });
                line.appendChild(input);
                line.appendChild(btn);
                row.appendChild(prompt);
                row.appendChild(line);
                row.appendChild(fb);
                list.appendChild(row);
            });
            body.appendChild(list);
        }

        if (safeArr(section.reorderSentences).length) {
            miniTitle(body, "Reorder Sentences");
            const list = document.createElement("div");
            list.className = "practice-list";
            safeArr(section.reorderSentences).forEach((item) => {
                const row = document.createElement("div");
                row.className = "practice-row practice-row--stack";
                const prompt = document.createElement("div");
                prompt.className = "translation-muted";
                prompt.textContent = item.prompt || "Put the words in order.";
                const answer = document.createElement("div");
                answer.className = "practice-word-bank practice-word-bank--answer";
                const bank = document.createElement("div");
                bank.className = "practice-word-bank";
                const selected = [];
                safeArr(item.words).forEach((word) => {
                    const chip = document.createElement("button");
                    chip.type = "button";
                    chip.className = "practice-chip";
                    chip.textContent = word;
                    chip.addEventListener("click", () => {
                        selected.push(word);
                        chip.disabled = true;
                        chip.classList.add("practice-chip--used");
                        const chosen = document.createElement("button");
                        chosen.type = "button";
                        chosen.className = "practice-chip practice-chip--selected";
                        chosen.textContent = word;
                        chosen.addEventListener("click", () => {
                            const idx = selected.indexOf(word);
                            if (idx > -1) selected.splice(idx, 1);
                            chosen.remove();
                            chip.disabled = false;
                            chip.classList.remove("practice-chip--used");
                        });
                        answer.appendChild(chosen);
                    });
                    bank.appendChild(chip);
                });
                const fb = feedback();
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "btn btn--outline btn--sm";
                btn.textContent = "Check";
                btn.addEventListener("click", () => {
                    const ok = normalizeAnswer(selected.join(" ")) === normalizeAnswer(item.answer);
                    fb.className = ok ? "practice-feedback practice-feedback--ok" : "practice-feedback practice-feedback--no";
                    fb.textContent = ok ? "Correct" : `Answer: ${item.answer}`;
                });
                row.appendChild(prompt);
                row.appendChild(answer);
                row.appendChild(bank);
                row.appendChild(btn);
                row.appendChild(fb);
                list.appendChild(row);
            });
            body.appendChild(list);
        }

        if (safeArr(section.translation).length) {
            miniTitle(body, "Translation (Arabic <-> English)");
            const grid = document.createElement("div");
            grid.className = "practice-grid";
            safeArr(section.translation).forEach((item) => {
                const card = document.createElement("div");
                card.className = "practice-card";
                const prompt = document.createElement("div");
                prompt.className = "practice-card__prompt";
                prompt.textContent = item.en || item.ar || "";
                const answer = document.createElement("div");
                answer.className = "practice-answer hidden";
                answer.textContent = item.ar || item.en || "";
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "btn btn--ghost btn--sm";
                btn.textContent = "Show answer";
                btn.addEventListener("click", () => {
                    answer.classList.toggle("hidden");
                    btn.textContent = answer.classList.contains("hidden") ? "Show answer" : "Hide answer";
                });
                card.appendChild(prompt);
                card.appendChild(answer);
                card.appendChild(btn);
                grid.appendChild(card);
            });
            body.appendChild(grid);
        }

        if (safeArr(section.writeYourOwnSentences).length) {
            miniTitle(body, "Write Your Own Sentences (5-10)");
            const writing = document.createElement("div");
            writing.className = "practice-writing";
            safeArr(section.writeYourOwnSentences).forEach((item) => {
                const label = document.createElement("label");
                label.className = "practice-writing__prompt";
                label.textContent = item;
                const textarea = document.createElement("textarea");
                textarea.className = "homework-notes";
                textarea.rows = 2;
                textarea.placeholder = "Write your sentence here...";
                writing.appendChild(label);
                writing.appendChild(textarea);
            });
            body.appendChild(writing);
        }
    });

    const rolePlays = safeArr(practice.rolePlays);
    if (rolePlays.length) {
        const body = panel("Real Situation Simulation", `${rolePlays.length} speaking prompts`);
        const grid = document.createElement("div");
        grid.className = "practice-grid";
        rolePlays.forEach((rp, idx) => {
            const card = document.createElement("div");
            card.className = "practice-card practice-card--simulation";
            const badge = document.createElement("div");
            badge.className = "translation-badge";
            badge.textContent = `Simulation ${idx + 1}`;
            const text = document.createElement("p");
            text.className = "homework-text";
            text.textContent = rp;
            card.appendChild(badge);
            card.appendChild(text);
            grid.appendChild(card);
        });
        body.appendChild(grid);
    }

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Practice as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("practice", true));
    container.appendChild(btnDone);

    renderSectionStatus(container, "practice");
}

function renderHomeworkTabInteractiveV1(container, lesson) {
    const student = getCurrentStudent();
    const progress = student && getStudentProgress(student, appState.currentLessonId);

    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Homework";
    container.appendChild(title);

    const text = document.createElement("p");
    text.className = "homework-text homework-text--lead";
    text.textContent = lesson.homework?.instructions || "No homework assigned yet.";
    container.appendChild(text);

    const notes = document.createElement("textarea");
    notes.className = "homework-notes";
    notes.placeholder = "Write homework notes or paste practice sentences here.";
    notes.value =
        (student &&
            student.homeworkNotes &&
            student.homeworkNotes[appState.currentLessonId]) ||
        "";
    notes.addEventListener("change", () => {
        if (!student) return;
        if (!student.homeworkNotes) student.homeworkNotes = {};
        student.homeworkNotes[appState.currentLessonId] = notes.value;
        saveStudentsToLS();
    });

    const tasksWrap = document.createElement("div");
    tasksWrap.className = "homework-grid";
    safeArr(lesson.homework?.tasks).forEach((task, idx) => {
        const card = document.createElement("details");
        card.className = "homework-card";
        card.open = idx === 0;
        const summary = document.createElement("summary");
        summary.className = "homework-card__summary";
        const taskTitle = document.createElement("span");
        taskTitle.className = "homework-card__title";
        taskTitle.textContent = task.title || "Homework task";
        const meta = document.createElement("span");
        meta.className = "homework-card__meta";
        meta.textContent = `Task ${idx + 1}`;
        summary.appendChild(taskTitle);
        summary.appendChild(meta);
        const body = document.createElement("div");
        body.className = "homework-card__body";

        if (task.instructions) {
            const taskText = document.createElement("p");
            taskText.className = "homework-text";
            taskText.textContent = task.instructions;
            body.appendChild(taskText);
        }

        if (safeArr(task.examples).length) {
            const examplesTitle = document.createElement("div");
            examplesTitle.className = "practice-mini-title";
            examplesTitle.textContent = "Useful starters";
            body.appendChild(examplesTitle);
            const examples = document.createElement("div");
            examples.className = "homework-examples";
            safeArr(task.examples).forEach((example) => {
                const chip = document.createElement("button");
                chip.type = "button";
                chip.className = "homework-example";
                chip.textContent = example;
                chip.title = "Click to add to notes";
                chip.addEventListener("click", () => {
                    notes.value = notes.value ? `${notes.value}\n${example}` : example;
                    notes.dispatchEvent(new Event("change"));
                });
                examples.appendChild(chip);
            });
            body.appendChild(examples);
        }

        const taskCheck = document.createElement("label");
        taskCheck.className = "homework-task-check";
        const taskInput = document.createElement("input");
        taskInput.type = "checkbox";
        const taskCheckText = document.createElement("span");
        taskCheckText.textContent = "I finished this task";
        taskCheck.appendChild(taskInput);
        taskCheck.appendChild(taskCheckText);
        body.appendChild(taskCheck);

        card.appendChild(summary);
        card.appendChild(body);
        tasksWrap.appendChild(card);
    });
    container.appendChild(tasksWrap);

    const completeWrap = document.createElement("label");
    completeWrap.className = "homework-complete";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = "homeworkAssignedCheckbox";
    check.checked = progress && progress.homework;
    const labelText = document.createElement("span");
    labelText.textContent = "Homework assigned / completed";
    completeWrap.appendChild(check);
    completeWrap.appendChild(labelText);
    check.addEventListener("change", () => setStudentProgressField("homework", check.checked));

    const notesLabel = document.createElement("div");
    notesLabel.className = "practice-mini-title";
    notesLabel.textContent = "Notes";

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Homework as Done";
    btnDone.addEventListener("click", () => {
        check.checked = true;
        setStudentProgressField("homework", true);
    });

    container.appendChild(completeWrap);
    container.appendChild(notesLabel);
    container.appendChild(notes);
    container.appendChild(btnDone);
    renderSectionStatus(container, "homework");
}

function renderPracticeTabCleanOld(container, lesson) {
    const practice = lesson.practice || {};

    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Practice";
    container.appendChild(title);

    const layout = document.createElement("div");
    layout.className = "practice-clean";
    container.appendChild(layout);

    function normalize(value) {
        return String(value || "").replace(/[،.؟!?\s]/g, "").trim();
    }

    function section(parent, titleText, noteText) {
        const wrap = document.createElement("section");
        wrap.className = "practice-clean__section";
        const head = document.createElement("div");
        head.className = "practice-clean__head";
        const h = document.createElement("h5");
        h.textContent = titleText;
        const note = document.createElement("p");
        note.textContent = noteText || "";
        head.appendChild(h);
        if (noteText) head.appendChild(note);
        wrap.appendChild(head);
        parent.appendChild(wrap);
        return wrap;
    }

    function addFeedback(parent) {
        const fb = document.createElement("div");
        fb.className = "practice-clean__feedback";
        parent.appendChild(fb);
        return fb;
    }

    function setFeedback(fb, ok, message) {
        fb.className = ok ? "practice-clean__feedback is-ok" : "practice-clean__feedback is-no";
        fb.textContent = message;
    }

    function addChoiceButtons(parent, options, correctValue) {
        const choices = document.createElement("div");
        choices.className = "practice-clean__choices";
        const fb = addFeedback(parent);
        safeArr(options).forEach((option) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "practice-clean__choice";
            btn.textContent = option;
            btn.addEventListener("click", () => {
                choices.querySelectorAll("button").forEach((b) => b.classList.remove("is-ok", "is-no"));
                const ok = option === correctValue;
                btn.classList.add(ok ? "is-ok" : "is-no");
                setFeedback(fb, ok, ok ? "Correct" : `Answer: ${correctValue}`);
            });
            choices.appendChild(btn);
        });
        parent.insertBefore(choices, fb);
    }

    const recognition = section(
        layout,
        "A) Recognition",
        "Start easy: recognize the meaning before you produce the sentence."
    );

    const quickQuiz = safeArr(practice.quiz).slice(0, 6);
    if (quickQuiz.length) {
        const grid = document.createElement("div");
        grid.className = "practice-clean__grid";
        quickQuiz.forEach((q) => {
            const card = document.createElement("div");
            card.className = "practice-clean__card";
            const prompt = document.createElement("div");
            prompt.className = "practice-clean__arabic";
            prompt.textContent = q.questionAr || "";
            card.appendChild(prompt);
            addChoiceButtons(card, q.optionsEn, safeArr(q.optionsEn)[q.correctIndex]);
            grid.appendChild(card);
        });
        recognition.appendChild(grid);
    }

    const firstStructured = safeArr(practice.sections)[0] || {};
    if (safeArr(firstStructured.matching).length) {
        const matching = document.createElement("div");
        matching.className = "practice-clean__list";
        safeArr(firstStructured.matching).forEach((item) => {
            const row = document.createElement("div");
            row.className = "practice-clean__match";
            const ar = document.createElement("span");
            ar.className = "practice-clean__arabic";
            ar.textContent = item.ar || "";
            const en = document.createElement("span");
            en.textContent = item.en || "";
            row.appendChild(ar);
            row.appendChild(en);
            matching.appendChild(row);
        });
        recognition.appendChild(matching);
    }

    const controlled = section(
        layout,
        "B) Controlled Production",
        "Now build the sentence with a little support."
    );
    safeArr(practice.sections).forEach((block) => {
        if (safeArr(block.fillInTheBlank).length) {
            safeArr(block.fillInTheBlank).forEach((item) => {
                const card = document.createElement("div");
                card.className = "practice-clean__card";
                const prompt = document.createElement("div");
                prompt.className = "practice-clean__arabic";
                prompt.textContent = item.prompt || "";
                const controls = document.createElement("div");
                controls.className = "practice-clean__line";
                const input = document.createElement("input");
                input.className = "practice-clean__input";
                input.type = "text";
                input.placeholder = "اكتب الكلمة الناقصة";
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "btn btn--outline btn--sm";
                btn.textContent = "Check";
                const fb = document.createElement("div");
                fb.className = "practice-clean__feedback";
                btn.addEventListener("click", () => {
                    const ok = normalize(input.value) === normalize(item.answer);
                    setFeedback(fb, ok, ok ? "Correct" : `Answer: ${item.answer}`);
                });
                controls.appendChild(input);
                controls.appendChild(btn);
                card.appendChild(prompt);
                card.appendChild(controls);
                card.appendChild(fb);
                controlled.appendChild(card);
            });
        }

        if (safeArr(block.reorderSentences).length) {
            safeArr(block.reorderSentences).forEach((item) => {
                const card = document.createElement("div");
                card.className = "practice-clean__card";
                const prompt = document.createElement("p");
                prompt.className = "practice-clean__hint";
                prompt.textContent = item.prompt || "Put the words in order.";
                const answer = document.createElement("div");
                answer.className = "practice-clean__answer-bank";
                const bank = document.createElement("div");
                bank.className = "practice-clean__chips";
                const selected = [];
                safeArr(item.words).forEach((word) => {
                    const chip = document.createElement("button");
                    chip.type = "button";
                    chip.className = "practice-clean__chip";
                    chip.textContent = word;
                    chip.addEventListener("click", () => {
                        selected.push(word);
                        chip.disabled = true;
                        chip.classList.add("is-used");
                        const chosen = document.createElement("button");
                        chosen.type = "button";
                        chosen.className = "practice-clean__chip is-selected";
                        chosen.textContent = word;
                        chosen.addEventListener("click", () => {
                            const index = selected.indexOf(word);
                            if (index > -1) selected.splice(index, 1);
                            chosen.remove();
                            chip.disabled = false;
                            chip.classList.remove("is-used");
                        });
                        answer.appendChild(chosen);
                    });
                    bank.appendChild(chip);
                });
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "btn btn--outline btn--sm";
                btn.textContent = "Check order";
                const fb = document.createElement("div");
                fb.className = "practice-clean__feedback";
                btn.addEventListener("click", () => {
                    const ok = normalize(selected.join(" ")) === normalize(item.answer);
                    setFeedback(fb, ok, ok ? "Correct" : `Answer: ${item.answer}`);
                });
                card.appendChild(prompt);
                card.appendChild(answer);
                card.appendChild(bank);
                card.appendChild(btn);
                card.appendChild(fb);
                controlled.appendChild(card);
            });
        }
    });

    const real = section(
        layout,
        "C) Real Production",
        "Use the language in short realistic situations."
    );

    const translations = safeArr(practice.translation).length
        ? safeArr(practice.translation)
        : safeArr(practice.sections).flatMap((block) => safeArr(block.translation));
    if (translations.length) {
        const grid = document.createElement("div");
        grid.className = "practice-clean__grid";
        translations.slice(0, 10).forEach((item) => {
            const card = document.createElement("div");
            card.className = "practice-clean__card";
            const prompt = document.createElement("div");
            prompt.className = "practice-clean__prompt";
            prompt.textContent = item.textEn || item.en || item.textAr || item.ar || "";
            const answer = document.createElement("div");
            answer.className = "practice-clean__arabic hidden";
            answer.textContent = item.textAr || item.ar || item.textEn || item.en || "";
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "btn btn--ghost btn--sm";
            btn.textContent = "Show answer";
            btn.addEventListener("click", () => {
                answer.classList.toggle("hidden");
                btn.textContent = answer.classList.contains("hidden") ? "Show answer" : "Hide answer";
            });
            card.appendChild(prompt);
            card.appendChild(answer);
            card.appendChild(btn);
            grid.appendChild(card);
        });
        real.appendChild(grid);
    }

    const rolePlays = safeArr(practice.rolePlays);
    if (rolePlays.length) {
        const sims = document.createElement("div");
        sims.className = "practice-clean__simulation-list";
        rolePlays.forEach((text, index) => {
            const item = document.createElement("div");
            item.className = "practice-clean__simulation";
            const badge = document.createElement("span");
            badge.textContent = `Situation ${index + 1}`;
            const body = document.createElement("p");
            body.textContent = text;
            item.appendChild(badge);
            item.appendChild(body);
            sims.appendChild(item);
        });
        real.appendChild(sims);
    }

    const writingPrompts = safeArr(practice.sections).flatMap((block) => safeArr(block.writeYourOwnSentences));
    if (writingPrompts.length) {
        const writeBox = document.createElement("div");
        writeBox.className = "practice-clean__write";
        const label = document.createElement("label");
        label.textContent = "Write your own sentences";
        const help = document.createElement("p");
        help.textContent = writingPrompts.slice(0, 3).join(" ");
        const textarea = document.createElement("textarea");
        textarea.className = "homework-notes";
        textarea.rows = 5;
        textarea.placeholder = "Write 5-10 short sentences here...";
        writeBox.appendChild(label);
        writeBox.appendChild(help);
        writeBox.appendChild(textarea);
        real.appendChild(writeBox);
    }

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Practice as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("practice", true));
    container.appendChild(btnDone);
    renderSectionStatus(container, "practice");
}

function renderHomeworkTabCleanOld(container, lesson) {
    const student = getCurrentStudent();
    const progress = student && getStudentProgress(student, appState.currentLessonId);

    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Homework";
    container.appendChild(title);

    const intro = document.createElement("p");
    intro.className = "homework-clean__intro";
    intro.textContent = lesson.homework?.instructions || "Complete the homework tasks.";
    container.appendChild(intro);

    const notes = document.createElement("textarea");
    notes.className = "homework-notes";
    notes.placeholder = "Student notes / homework answers...";
    notes.value =
        (student &&
            student.homeworkNotes &&
            student.homeworkNotes[appState.currentLessonId]) ||
        "";
    notes.addEventListener("change", () => {
        if (!student) return;
        if (!student.homeworkNotes) student.homeworkNotes = {};
        student.homeworkNotes[appState.currentLessonId] = notes.value;
        saveStudentsToLS();
    });

    const grid = document.createElement("div");
    grid.className = "homework-clean";
    safeArr(lesson.homework?.tasks).forEach((task, index) => {
        const card = document.createElement("article");
        card.className = "homework-clean__card";
        const step = document.createElement("div");
        step.className = "homework-clean__step";
        step.textContent = `Task ${index + 1}`;
        const h = document.createElement("h5");
        h.textContent = task.title || "Homework task";
        const p = document.createElement("p");
        p.textContent = task.instructions || "";
        card.appendChild(step);
        card.appendChild(h);
        card.appendChild(p);

        if (safeArr(task.examples).length) {
            const examples = document.createElement("div");
            examples.className = "homework-clean__examples";
            safeArr(task.examples).forEach((example) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.textContent = example;
                btn.addEventListener("click", () => {
                    notes.value = notes.value ? `${notes.value}\n${example}` : example;
                    notes.dispatchEvent(new Event("change"));
                });
                examples.appendChild(btn);
            });
            card.appendChild(examples);
        }

        const done = document.createElement("label");
        done.className = "homework-clean__done";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const span = document.createElement("span");
        span.textContent = "Done";
        done.appendChild(checkbox);
        done.appendChild(span);
        card.appendChild(done);
        grid.appendChild(card);
    });
    container.appendChild(grid);

    const notesTitle = document.createElement("div");
    notesTitle.className = "practice-clean__label";
    notesTitle.textContent = "Notes / answers";
    container.appendChild(notesTitle);
    container.appendChild(notes);

    const complete = document.createElement("label");
    complete.className = "homework-clean__complete";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = progress && progress.homework;
    const text = document.createElement("span");
    text.textContent = "Homework assigned / completed";
    complete.appendChild(check);
    complete.appendChild(text);
    check.addEventListener("change", () => setStudentProgressField("homework", check.checked));
    container.appendChild(complete);

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Homework as Done";
    btnDone.addEventListener("click", () => {
        check.checked = true;
        setStudentProgressField("homework", true);
    });
    container.appendChild(btnDone);
    renderSectionStatus(container, "homework");
}

function renderPracticeTabClean(container, lesson) {
    const practice = lesson.practice || {};
    const sections = safeArr(practice.sections);
    const sectionA = sections.find((s) => String(s.title || "").startsWith("A")) || sections[0] || {};
    const sectionB = sections.find((s) => String(s.title || "").startsWith("B")) || sections[1] || {};
    const sectionC = sections.find((s) => String(s.title || "").startsWith("C")) || sections[2] || {};
    let activeStage = "recognition";
    let completed = new Set();

    const root = document.createElement("div");
    root.className = "practice-pro";

    const header = document.createElement("div");
    header.className = "practice-pro__header";
    const headerText = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = "Practice";
    const subtitle = document.createElement("p");
    subtitle.textContent = "A focused path: recognize first, build with support, then speak or write.";
    headerText.appendChild(title);
    headerText.appendChild(subtitle);

    const progressWrap = document.createElement("div");
    progressWrap.className = "practice-pro__progress";
    const progressNumber = document.createElement("strong");
    const progressLabel = document.createElement("span");
    progressLabel.textContent = "complete";
    progressWrap.appendChild(progressNumber);
    progressWrap.appendChild(progressLabel);
    header.appendChild(headerText);
    header.appendChild(progressWrap);

    const nav = document.createElement("div");
    nav.className = "practice-pro__nav";

    const stageArea = document.createElement("div");
    stageArea.className = "practice-pro__stage";

    const stages = [
        {
            id: "recognition",
            label: "A) Recognition",
            desc: "Understand the phrase before answering.",
            count: safeArr(practice.quiz).slice(0, 5).length + safeArr(sectionA.matching).length + safeArr(sectionA.multipleChoice).length,
        },
        {
            id: "controlled",
            label: "B) Controlled",
            desc: "Build correct sentences with help.",
            count: safeArr(sectionB.fillInTheBlank).length + safeArr(sectionB.reorderSentences).length,
        },
        {
            id: "real",
            label: "C) Real Use",
            desc: "Use the phrases in real situations.",
            count: safeArr(practice.translation).length + safeArr(sectionC.translation).length + safeArr(practice.rolePlays).length,
        },
    ];

    function normalizeAnswer(value) {
        return String(value || "").replace(/[،.؟!?\s]/g, "").trim();
    }

    function setProgress() {
        const total = stages.length;
        progressNumber.textContent = `${completed.size}/${total}`;
        if (completed.size >= total) setStudentProgressField("practice", true);
    }

    function markStageDone(stageId) {
        completed.add(stageId);
        setProgress();
        renderNav();
    }

    function makeButton(text, className = "btn btn--outline btn--sm") {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = className;
        btn.textContent = text;
        return btn;
    }

    function feedback(text = "") {
        const fb = document.createElement("div");
        fb.className = "practice-pro__feedback";
        fb.textContent = text;
        return fb;
    }

    function setFeedback(fb, ok, text) {
        fb.className = ok ? "practice-pro__feedback is-ok" : "practice-pro__feedback is-no";
        fb.textContent = text;
    }

    function stageShell(stage) {
        stageArea.innerHTML = "";
        const shell = document.createElement("div");
        shell.className = "practice-pro__panel";

        const head = document.createElement("div");
        head.className = "practice-pro__panel-head";
        const h = document.createElement("h5");
        h.textContent = stage.label;
        const p = document.createElement("p");
        p.textContent = stage.desc;
        head.appendChild(h);
        head.appendChild(p);

        const body = document.createElement("div");
        body.className = "practice-pro__body";
        shell.appendChild(head);
        shell.appendChild(body);
        stageArea.appendChild(shell);
        return body;
    }

    function renderNav() {
        nav.innerHTML = "";
        stages.forEach((stage) => {
            const btn = makeButton(stage.label, "practice-pro__tab");
            btn.classList.toggle("is-active", stage.id === activeStage);
            btn.classList.toggle("is-done", completed.has(stage.id));
            btn.innerHTML = `<span>${stage.label}</span><small>${stage.count || 0} items</small>`;
            btn.addEventListener("click", () => {
                activeStage = stage.id;
                renderNav();
                renderStage();
            });
            nav.appendChild(btn);
        });
    }

    function renderChoiceCard(parent, promptText, options, correctValue, isArabic = false) {
        const card = document.createElement("article");
        card.className = "practice-pro__card";
        const prompt = document.createElement("div");
        prompt.className = isArabic ? "practice-pro__arabic" : "practice-pro__prompt";
        prompt.textContent = promptText || "";
        const choices = document.createElement("div");
        choices.className = "practice-pro__choices";
        const fb = feedback();
        safeArr(options).forEach((option) => {
            const btn = makeButton(option, "practice-pro__choice");
            btn.addEventListener("click", () => {
                choices.querySelectorAll("button").forEach((b) => b.classList.remove("is-ok", "is-no"));
                const ok = option === correctValue;
                btn.classList.add(ok ? "is-ok" : "is-no");
                setFeedback(fb, ok, ok ? "Correct" : `Answer: ${correctValue}`);
            });
            choices.appendChild(btn);
        });
        card.appendChild(prompt);
        card.appendChild(choices);
        card.appendChild(fb);
        parent.appendChild(card);
    }

    function renderChoiceDrill(parent, items) {
        if (!items.length) return;
        let index = 0;
        const shell = document.createElement("article");
        shell.className = "practice-pro__drill";
        const counter = document.createElement("div");
        counter.className = "practice-pro__counter";
        const prompt = document.createElement("div");
        const choices = document.createElement("div");
        choices.className = "practice-pro__choices";
        const fb = feedback();
        const controls = document.createElement("div");
        controls.className = "practice-pro__controls";
        const prev = makeButton("Previous", "btn btn--ghost btn--sm");
        const next = makeButton("Next", "btn btn--ghost btn--sm");

        function paint() {
            const item = items[index];
            counter.textContent = `${index + 1} / ${items.length}`;
            prompt.className = item.isArabic ? "practice-pro__arabic" : "practice-pro__prompt";
            prompt.textContent = item.prompt || "";
            choices.innerHTML = "";
            fb.textContent = "";
            fb.className = "practice-pro__feedback";
            safeArr(item.options).forEach((option) => {
                const btn = makeButton(option, "practice-pro__choice");
                btn.addEventListener("click", () => {
                    choices.querySelectorAll("button").forEach((b) => b.classList.remove("is-ok", "is-no"));
                    const ok = option === item.correct;
                    btn.classList.add(ok ? "is-ok" : "is-no");
                    setFeedback(fb, ok, ok ? "Correct" : `Answer: ${item.correct}`);
                });
                choices.appendChild(btn);
            });
        }

        prev.addEventListener("click", () => {
            index = (index - 1 + items.length) % items.length;
            paint();
        });
        next.addEventListener("click", () => {
            index = (index + 1) % items.length;
            paint();
        });

        controls.appendChild(prev);
        controls.appendChild(next);
        shell.appendChild(counter);
        shell.appendChild(prompt);
        shell.appendChild(choices);
        shell.appendChild(fb);
        shell.appendChild(controls);
        parent.appendChild(shell);
        paint();
    }

    function renderRecognition() {
        const stage = stages[0];
        const body = stageShell(stage);
        const choiceItems = [
            ...safeArr(practice.quiz).slice(0, 5).map((q) => {
                const options = safeArr(q.optionsEn);
                return {
                    prompt: q.questionAr,
                    options,
                    correct: options[q.correctIndex],
                    isArabic: true,
                };
            }),
            ...safeArr(sectionA.multipleChoice).map((item) => ({
                prompt: item.prompt,
                options: item.options,
                correct: item.correct,
                isArabic: false,
            })),
        ];
        renderChoiceDrill(body, choiceItems);

        if (safeArr(sectionA.matching).length) {
            const match = document.createElement("div");
            match.className = "practice-pro__match-board";

            const promptCol = document.createElement("div");
            promptCol.className = "practice-pro__match-col";
            const answerCol = document.createElement("div");
            answerCol.className = "practice-pro__match-col";

            const promptTitle = document.createElement("div");
            promptTitle.className = "practice-pro__match-title";
            promptTitle.textContent = "Arabic";
            const answerTitle = document.createElement("div");
            answerTitle.className = "practice-pro__match-title";
            answerTitle.textContent = "Choose the matching number";
            promptCol.appendChild(promptTitle);
            answerCol.appendChild(answerTitle);

            const matchingItems = safeArr(sectionA.matching);
            matchingItems.forEach((item, idx) => {
                const promptRow = document.createElement("div");
                promptRow.className = "practice-pro__match-prompt";
                const number = document.createElement("span");
                number.className = "practice-pro__match-number";
                number.textContent = String(idx + 1);
                const ar = document.createElement("span");
                ar.className = "practice-pro__arabic";
                ar.textContent = item.ar || "";
                promptRow.appendChild(number);
                promptRow.appendChild(ar);
                promptCol.appendChild(promptRow);
            });

            shuffleArray(matchingItems.map((item, idx) => ({ ...item, matchNumber: idx + 1 }))).forEach((item) => {
                const answerRow = document.createElement("div");
                answerRow.className = "practice-pro__match-answer";
                const select = document.createElement("select");
                select.className = "practice-pro__match-select";
                const empty = document.createElement("option");
                empty.value = "";
                empty.textContent = "#";
                select.appendChild(empty);
                matchingItems.forEach((_candidate, idx) => {
                    const option = document.createElement("option");
                    option.value = String(idx + 1);
                    option.textContent = String(idx + 1);
                    select.appendChild(option);
                });
                const text = document.createElement("span");
                text.textContent = item.en || "";
                const fb = document.createElement("span");
                fb.className = "practice-pro__match-status";
                select.addEventListener("change", () => {
                    const ok = Number(select.value) === item.matchNumber;
                    answerRow.classList.toggle("is-ok", ok);
                    answerRow.classList.toggle("is-no", Boolean(select.value) && !ok);
                    fb.textContent = ok ? "Correct" : (select.value ? "Try again" : "");
                });
                answerRow.appendChild(select);
                answerRow.appendChild(text);
                answerRow.appendChild(fb);
                answerCol.appendChild(answerRow);
            });

            match.appendChild(promptCol);
            match.appendChild(answerCol);
            body.appendChild(match);
        }

        const done = makeButton("Finish Recognition", "btn btn--primary btn--sm");
        done.addEventListener("click", () => {
            markStageDone("recognition");
            activeStage = "controlled";
            renderStage();
        });
        body.appendChild(done);
    }

    function renderControlled() {
        const stage = stages[1];
        const body = stageShell(stage);

        safeArr(sectionB.fillInTheBlank).forEach((item) => {
            const card = document.createElement("article");
            card.className = "practice-pro__card";
            const prompt = document.createElement("div");
            prompt.className = "practice-pro__arabic";
            prompt.textContent = item.prompt || "";
            const row = document.createElement("div");
            row.className = "practice-pro__line";
            const input = document.createElement("input");
            input.className = "practice-pro__input";
            input.type = "text";
            input.placeholder = "Type the missing word";
            const check = makeButton("Check");
            const fb = feedback();
            check.addEventListener("click", () => {
                const ok = normalizeAnswer(input.value) === normalizeAnswer(item.answer);
                setFeedback(fb, ok, ok ? "Correct" : `Answer: ${item.answer}`);
            });
            row.appendChild(input);
            row.appendChild(check);
            card.appendChild(prompt);
            card.appendChild(row);
            card.appendChild(fb);
            body.appendChild(card);
        });

        safeArr(sectionB.reorderSentences).forEach((item) => {
            const card = document.createElement("article");
            card.className = "practice-pro__card";
            const prompt = document.createElement("p");
            prompt.className = "practice-pro__hint";
            prompt.textContent = item.prompt || "Put the words in order.";
            const answer = document.createElement("div");
            answer.className = "practice-pro__answer-bank";
            const bank = document.createElement("div");
            bank.className = "practice-pro__chips";
            const selected = [];

            safeArr(item.words).forEach((word) => {
                const chip = makeButton(word, "practice-pro__chip");
                chip.addEventListener("click", () => {
                    selected.push(word);
                    chip.disabled = true;
                    chip.classList.add("is-used");
                    const chosen = makeButton(word, "practice-pro__chip is-selected");
                    chosen.addEventListener("click", () => {
                        const index = selected.indexOf(word);
                        if (index > -1) selected.splice(index, 1);
                        chosen.remove();
                        chip.disabled = false;
                        chip.classList.remove("is-used");
                    });
                    answer.appendChild(chosen);
                });
                bank.appendChild(chip);
            });

            const fb = feedback();
            const check = makeButton("Check order");
            check.addEventListener("click", () => {
                const ok = normalizeAnswer(selected.join(" ")) === normalizeAnswer(item.answer);
                setFeedback(fb, ok, ok ? "Correct" : `Answer: ${item.answer}`);
            });
            card.appendChild(prompt);
            card.appendChild(answer);
            card.appendChild(bank);
            card.appendChild(check);
            card.appendChild(fb);
            body.appendChild(card);
        });

        const done = makeButton("Finish Controlled Practice", "btn btn--primary btn--sm");
        done.addEventListener("click", () => {
            markStageDone("controlled");
            activeStage = "real";
            renderStage();
        });
        body.appendChild(done);
    }

    function renderRealUse() {
        const stage = stages[2];
        const body = stageShell(stage);
        const translations = safeArr(practice.translation).length
            ? safeArr(practice.translation)
            : safeArr(sectionC.translation);

        if (translations.length) {
            const slider = document.createElement("div");
            slider.className = "practice-pro__translation";
            let index = 0;
            const card = document.createElement("article");
            card.className = "practice-pro__translate-card";
            const counter = document.createElement("div");
            counter.className = "practice-pro__counter";
            const direction = document.createElement("div");
            direction.className = "practice-pro__translate-direction";
            const prompt = document.createElement("div");
            prompt.className = "practice-pro__translate-prompt";
            const response = document.createElement("textarea");
            response.className = "practice-pro__translate-input";
            response.rows = 3;
            response.placeholder = "Write your translation here...";
            const answer = document.createElement("div");
            answer.className = "practice-pro__translate-answer hidden";
            const controls = document.createElement("div");
            controls.className = "practice-pro__controls";
            const prev = makeButton("Previous", "btn btn--ghost btn--sm");
            const show = makeButton("Show answer", "btn btn--outline btn--sm");
            const next = makeButton("Next", "btn btn--ghost btn--sm");
            const selfCheck = document.createElement("div");
            selfCheck.className = "practice-pro__self-check hidden";
            const gotIt = makeButton("Got it", "practice-pro__self-btn");
            const needsWork = makeButton("Need practice", "practice-pro__self-btn");
            const selfStatus = document.createElement("span");
            selfStatus.className = "practice-pro__self-status";
            selfCheck.appendChild(gotIt);
            selfCheck.appendChild(needsWork);
            selfCheck.appendChild(selfStatus);

            function paintTranslation() {
                const item = translations[index];
                counter.textContent = `${index + 1} / ${translations.length}`;
                const source = item.textEn || item.en || item.textAr || item.ar || "";
                const target = item.textAr || item.ar || item.textEn || item.en || "";
                const sourceIsArabic = Boolean(item.textAr || item.ar) && !(item.textEn || item.en);
                direction.textContent = sourceIsArabic ? "Arabic -> English" : "English -> Arabic";
                prompt.textContent = source;
                prompt.classList.toggle("is-arabic", sourceIsArabic);
                answer.textContent = target;
                answer.classList.toggle("is-arabic", !sourceIsArabic);
                answer.classList.add("hidden");
                response.value = "";
                selfCheck.classList.add("hidden");
                selfStatus.textContent = "";
                gotIt.classList.remove("is-ok");
                needsWork.classList.remove("is-no");
                show.textContent = "Show answer";
            }

            prev.addEventListener("click", () => {
                index = (index - 1 + translations.length) % translations.length;
                paintTranslation();
            });
            next.addEventListener("click", () => {
                index = (index + 1) % translations.length;
                paintTranslation();
            });
            show.addEventListener("click", () => {
                answer.classList.toggle("hidden");
                show.textContent = answer.classList.contains("hidden") ? "Show answer" : "Hide answer";
                selfCheck.classList.toggle("hidden", answer.classList.contains("hidden"));
            });
            gotIt.addEventListener("click", () => {
                gotIt.classList.add("is-ok");
                needsWork.classList.remove("is-no");
                selfStatus.textContent = "Nice. Move to the next one.";
            });
            needsWork.addEventListener("click", () => {
                needsWork.classList.add("is-no");
                gotIt.classList.remove("is-ok");
                selfStatus.textContent = "Mark it for review and try it again.";
            });

            controls.appendChild(prev);
            controls.appendChild(show);
            controls.appendChild(next);
            card.appendChild(counter);
            card.appendChild(direction);
            card.appendChild(prompt);
            card.appendChild(response);
            card.appendChild(answer);
            card.appendChild(selfCheck);
            card.appendChild(controls);
            slider.appendChild(card);
            body.appendChild(slider);
            paintTranslation();
        }

        const rolePlays = safeArr(practice.rolePlays);
        if (rolePlays.length) {
            const sims = document.createElement("div");
            sims.className = "practice-pro__situations";
            rolePlays.forEach((text, idx) => {
                const item = document.createElement("article");
                item.className = "practice-pro__situation";
                const badge = document.createElement("span");
                badge.textContent = `Situation ${idx + 1}`;
                const p = document.createElement("p");
                p.textContent = text;
                item.appendChild(badge);
                item.appendChild(p);
                sims.appendChild(item);
            });
            body.appendChild(sims);
        }

        const writingPrompts = safeArr(sectionC.writeYourOwnSentences);
        const write = document.createElement("div");
        write.className = "practice-pro__write";
        const label = document.createElement("label");
        label.textContent = "Write your own sentences";
        const help = document.createElement("p");
        help.textContent = writingPrompts.length
            ? writingPrompts.slice(0, 2).join(" ")
            : "Write 5-10 short sentences using the phrases from this lesson.";
        const textarea = document.createElement("textarea");
        textarea.className = "homework-notes";
        textarea.rows = 5;
        textarea.placeholder = "Write 5-10 short sentences here...";
        write.appendChild(label);
        write.appendChild(help);
        write.appendChild(textarea);
        body.appendChild(write);

        const done = makeButton("Finish Practice", "btn btn--primary btn--sm");
        done.addEventListener("click", () => markStageDone("real"));
        body.appendChild(done);
    }

    function renderStage() {
        if (activeStage === "controlled") renderControlled();
        else if (activeStage === "real") renderRealUse();
        else renderRecognition();
    }

    container.appendChild(root);
    root.appendChild(header);
    root.appendChild(nav);
    root.appendChild(stageArea);

    const doneAll = makeButton("Mark Practice as Done", "btn btn--outline btn--sm");
    doneAll.addEventListener("click", () => {
        completed = new Set(stages.map((stage) => stage.id));
        setProgress();
        renderNav();
    });
    root.appendChild(doneAll);

    renderNav();
    setProgress();
    renderStage();
    renderSectionStatus(container, "practice");
}

function renderHomeworkTabClean(container, lesson) {
    const student = getCurrentStudent();
    const progress = student && getStudentProgress(student, appState.currentLessonId);
    const tasks = safeArr(lesson.homework?.tasks);
    const taskState = new Set();

    if (!tasks.length) {
        const title = document.createElement("h4");
        title.className = "td-lessonitem__title";
        title.textContent = "Homework";

        const card = document.createElement("div");
        card.className = "homework-simple";

        const text = document.createElement("p");
        text.className = "homework-text homework-simple__text";
        text.textContent = lesson.homework?.instructions || "No homework assigned yet.";
        card.appendChild(text);

        const complete = document.createElement("label");
        complete.className = "homework-simple__complete";
        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = progress && progress.homework;
        const checkText = document.createElement("span");
        checkText.textContent = "Homework assigned / completed";
        complete.appendChild(check);
        complete.appendChild(checkText);
        check.addEventListener("change", () => setStudentProgressField("homework", check.checked));

        const notesLabel = document.createElement("label");
        notesLabel.className = "homework-simple__label";
        notesLabel.textContent = "Notes";

        const notes = document.createElement("textarea");
        notes.className = "homework-notes";
        notes.placeholder = "E.g. Needs more practice with kifak/kifik.";
        notes.value =
            (student &&
                student.homeworkNotes &&
                student.homeworkNotes[appState.currentLessonId]) ||
            "";
        notes.addEventListener("change", () => {
            if (!student) return;
            if (!student.homeworkNotes) student.homeworkNotes = {};
            student.homeworkNotes[appState.currentLessonId] = notes.value;
            saveStudentsToLS();
        });

        const btnDone = document.createElement("button");
        btnDone.className = "btn btn--primary btn--sm";
        btnDone.textContent = "Mark Homework as Done";
        btnDone.addEventListener("click", () => {
            check.checked = true;
            setStudentProgressField("homework", true);
        });

        container.appendChild(title);
        container.appendChild(card);
        container.appendChild(complete);
        container.appendChild(notesLabel);
        container.appendChild(notes);
        container.appendChild(btnDone);
        renderSectionStatus(container, "homework");
        return;
    }

    const root = document.createElement("div");
    root.className = "homework-pro";

    const header = document.createElement("div");
    header.className = "homework-pro__header";
    const h = document.createElement("h4");
    h.textContent = "Homework";
    const p = document.createElement("p");
    p.textContent = lesson.homework?.instructions || "Complete the homework tasks.";
    const meter = document.createElement("div");
    meter.className = "homework-pro__meter";
    header.appendChild(h);
    header.appendChild(p);
    header.appendChild(meter);

    const notes = document.createElement("textarea");
    notes.className = "homework-notes homework-pro__notes";
    notes.placeholder = "Write homework answers or teacher notes here...";
    notes.value =
        (student &&
            student.homeworkNotes &&
            student.homeworkNotes[appState.currentLessonId]) ||
        "";
    notes.addEventListener("change", () => {
        if (!student) return;
        if (!student.homeworkNotes) student.homeworkNotes = {};
        student.homeworkNotes[appState.currentLessonId] = notes.value;
        saveStudentsToLS();
    });

    function updateMeter() {
        meter.textContent = `${taskState.size}/${tasks.length || 0} tasks done`;
        if (tasks.length && taskState.size === tasks.length) setStudentProgressField("homework", true);
    }

    const grid = document.createElement("div");
    grid.className = "homework-pro__grid";
    tasks.forEach((task, idx) => {
        const card = document.createElement("article");
        card.className = "homework-pro__card";
        const badge = document.createElement("span");
        badge.className = "homework-pro__badge";
        badge.textContent = `Task ${idx + 1}`;
        const title = document.createElement("h5");
        title.textContent = task.title || "Homework task";
        const desc = document.createElement("p");
        desc.textContent = task.instructions || "";
        card.appendChild(badge);
        card.appendChild(title);
        card.appendChild(desc);

        if (safeArr(task.examples).length) {
            const examples = document.createElement("div");
            examples.className = "homework-pro__examples";
            safeArr(task.examples).forEach((example) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.textContent = example;
                btn.addEventListener("click", () => {
                    notes.value = notes.value ? `${notes.value}\n${example}` : example;
                    notes.dispatchEvent(new Event("change"));
                    notes.focus();
                });
                examples.appendChild(btn);
            });
            card.appendChild(examples);
        }

        const done = document.createElement("label");
        done.className = "homework-pro__check";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const span = document.createElement("span");
        span.textContent = "Done";
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                taskState.add(idx);
                card.classList.add("is-done");
            } else {
                taskState.delete(idx);
                card.classList.remove("is-done");
            }
            updateMeter();
        });
        done.appendChild(checkbox);
        done.appendChild(span);
        card.appendChild(done);
        grid.appendChild(card);
    });

    const notesBlock = document.createElement("div");
    notesBlock.className = "homework-pro__notes-block";
    const notesTitle = document.createElement("label");
    notesTitle.textContent = "Answers / notes";
    notesBlock.appendChild(notesTitle);
    notesBlock.appendChild(notes);

    const footer = document.createElement("div");
    footer.className = "homework-pro__footer";
    const complete = document.createElement("label");
    complete.className = "homework-pro__complete";
    const completeCheck = document.createElement("input");
    completeCheck.type = "checkbox";
    completeCheck.checked = progress && progress.homework;
    const completeText = document.createElement("span");
    completeText.textContent = "Homework assigned / completed";
    complete.appendChild(completeCheck);
    complete.appendChild(completeText);
    completeCheck.addEventListener("change", () => setStudentProgressField("homework", completeCheck.checked));

    const doneAll = document.createElement("button");
    doneAll.type = "button";
    doneAll.className = "btn btn--primary btn--sm";
    doneAll.textContent = "Mark Homework as Done";
    doneAll.addEventListener("click", () => {
        completeCheck.checked = true;
        setStudentProgressField("homework", true);
    });
    footer.appendChild(complete);
    footer.appendChild(doneAll);

    root.appendChild(header);
    root.appendChild(grid);
    root.appendChild(notesBlock);
    root.appendChild(footer);
    container.appendChild(root);
    updateMeter();
    renderSectionStatus(container, "homework");
}

function renderReviewTab(container, lesson) {
    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Quick Review – Flashcards";
    container.appendChild(title);

    const coreVocabulary = Array.isArray(lesson.vocabulary?.core) ? lesson.vocabulary.core : [];
    const extraVocabulary = Array.isArray(lesson.vocabulary?.extra) ? lesson.vocabulary.extra : [];
    const all = [...coreVocabulary, ...extraVocabulary];
    if (!all.length) {
        const p = document.createElement("p");
        p.textContent = "No vocabulary available for review.";
        container.appendChild(p);
        renderSectionStatus(container, "review");
        return;
    }

    let pool = shuffleArray(all).slice(0, Math.min(5, all.length));
    let index = 0;
    let showFront = true;

    const card = document.createElement("div");
    card.className = "flashcard";
    const arEl = document.createElement("div");
    arEl.className = "flashcard__ar";
    const enEl = document.createElement("div");
    enEl.className = "flashcard__en";

    function renderCard() {
        const item = pool[index];
        if (showFront) {
            arEl.textContent = item.ar;
            enEl.textContent = "(tap to reveal meaning)";
            enEl.style.color = "#6b7280";
        } else {
            arEl.textContent = item.ar;
            enEl.textContent = item.en;
            enEl.style.color = "#111827";
        }
    }

    card.appendChild(arEl);
    card.appendChild(enEl);
    card.addEventListener("click", () => {
        showFront = !showFront;
        renderCard();
    });

    const controlsRow = document.createElement("div");
    controlsRow.style.display = "flex";
    controlsRow.style.justifyContent = "space-between";
    controlsRow.style.alignItems = "center";
    controlsRow.style.marginTop = "6px";

    const navButtons = document.createElement("div");
    navButtons.style.display = "flex";
    navButtons.style.gap = "6px";

    const btnPrev = document.createElement("button");
    btnPrev.className = "btn btn--ghost btn--sm";
    btnPrev.textContent = "Prev";
    btnPrev.addEventListener("click", () => {
        if (index > 0) {
            index--;
            showFront = true;
            renderCard();
        }
    });

    const btnNext = document.createElement("button");
    btnNext.className = "btn btn--ghost btn--sm";
    btnNext.textContent = "Next";
    btnNext.addEventListener("click", () => {
        if (index < pool.length - 1) {
            index++;
            showFront = true;
            renderCard();
        } else {
            alert("Nice! Quick review completed.");
            setStudentProgressField("review", true);
        }
    });

    const btnRandom = document.createElement("button");
    btnRandom.className = "btn btn--outline btn--sm";
    btnRandom.textContent = "Random";
    btnRandom.addEventListener("click", () => {
        index = Math.floor(Math.random() * pool.length);
        showFront = true;
        renderCard();
    });

    navButtons.appendChild(btnPrev);
    navButtons.appendChild(btnNext);
    navButtons.appendChild(btnRandom);

    const btnDone = document.createElement("button");
    btnDone.className = "btn btn--primary btn--sm";
    btnDone.textContent = "Mark Quick Review as Done";
    btnDone.addEventListener("click", () => setStudentProgressField("review", true));

    controlsRow.appendChild(navButtons);
    controlsRow.appendChild(btnDone);

    container.appendChild(card);
    container.appendChild(controlsRow);

    renderCard();
    renderSectionStatus(container, "review");
}

// Teacher notes
function renderTeacherNotesTab(container, lesson) {
    const title = document.createElement("h4");
    title.className = "td-lessonitem__title";
    title.textContent = "Teacher Notes";

    const info = document.createElement("p");
    info.className = "teacher-edit-note";
    info.textContent =
        "Use this space to plan your flow, note common mistakes, or add extra prompts. Notes are saved locally on this device.";

    const textarea = document.createElement("textarea");
    textarea.className = "homework-notes";
    textarea.value = lesson.teacherNotes.myNotes || "";
    textarea.placeholder =
        "Lesson flow, timing, reminders about pronunciation, extra speaking prompts...";

    textarea.addEventListener("change", () => {
        lesson.teacherNotes.myNotes = textarea.value;
        saveLessonToLS(appState.currentLessonId);
        saveLessonToCloud(appState.currentLessonId);
    });

    container.appendChild(title);
    container.appendChild(info);
    container.appendChild(textarea);
}

// ========================= TEACHER MODE VISIBILITY =========================
function updateTeacherTabsVisibility() {
    const show = appState.teacherMode;
    $all(".lesson-tab--teacher-only").forEach((btn) => {
        btn.style.display = show ? "inline-flex" : "none";
    });
}

// ========================= TEACHER DASHBOARD (disabled in public student build) =========================
function getLessonIdsSorted() {
    return Object.keys(lessons).sort();
}

function getUniqueUnits() {
    return Array.from(new Set(getLessonIdsSorted().map((id) => lessons[id]?.meta?.unit).filter(Boolean))).sort();
}

function renderTeacherPicker() {}
function renderTeacherLessonList() {}
function createNewLessonTemplate() {}
function applyTeacherSectionFilter() {}
function renderTeacherEditor() {}

// ================= AUTH MODAL HELPERS =================
function openAuthModal() {
    openExternalBookingPage();
}

function closeAuthModal() {
    // Auth is disabled in the public student build.
}
// ========================= DOM READY =========================
document.addEventListener("DOMContentLoaded", async () => {
    loadLessonDataFromLS();
    await loadLessonsFromCloudOnce();
    loadCustomUnits();
    loadFontSize();
    appState.students = loadStudentsFromLS();
    loadBackupSettings();
    loadContactSettings();
    loadBookingSettings();
    await loadContactSettingsFromCloud();
    await loadBookingSettingsFromCloud();
    // top nav
    $all(".top-nav__link").forEach((btn) => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.nav;
            if (target === "home-screen") goToHome();
            else if (target === "students-screen") goToStudents();
            else if (target === "levels-screen") goToLevels();
            else if (target === "teacher-dashboard-screen") goToTeacherDashboard();
        });
    });

    const btnArabicLetters = $("#btnArabicLetters");
    if (btnArabicLetters) {
        btnArabicLetters.addEventListener("click", () => {
            goToArabicLetters();
        });
    }
    const btnSubscribe = $("#btnSubscribe");
    if (btnSubscribe) {
        btnSubscribe.addEventListener("click", () => {
            openSubscribeModal();
        });
    }
    const btnStudentSchedule = $("#btnStudentSchedule");
    if (btnStudentSchedule) {
        btnStudentSchedule.addEventListener("click", () => {
            openExternalBookingPage();
        });
    }
    const btnContact = $("#btnContact");
    if (btnContact) {
        btnContact.addEventListener("click", () => {
            openWhatsAppWithMessage("Hi! I want to ask about Palestinian Arabic lessons.");
        });
    }
    const btnBackFromSubscribe = document.getElementById("btnBackToUnitsFromSubscribe");
    if (btnBackFromSubscribe) {
        btnBackFromSubscribe.addEventListener("click", () => {
            goToLevels();
        });
    }
    const btnLettersBackToUnits = $("#btnLettersBackToUnits");
    if (btnLettersBackToUnits) {
        btnLettersBackToUnits.addEventListener("click", () => {
            goToLevels();
        });
    }
    const btnExportArabicLettersPdf = $("#btnExportArabicLettersPdf");
    if (btnExportArabicLettersPdf) {
        btnExportArabicLettersPdf.addEventListener("click", () => {
            exportArabicLettersPdf();
        });
    }
    const btnSaveContact = document.getElementById("btnSaveContact");
    const contactSaveMsg = document.getElementById("contactSaveMsg");
    const inputWhatsApp = document.getElementById("contactWhatsApp");
    const inputContactEmail = document.getElementById("contactEmail");
    const inputSitePrice = document.getElementById("contactSitePrice");
    if (inputWhatsApp) inputWhatsApp.value = contactSettings.whatsapp || "";
    if (inputContactEmail) inputContactEmail.value = contactSettings.email || "";
    if (inputSitePrice) inputSitePrice.value = contactSettings.sitePrice || "";
    if (btnSaveContact) {
        btnSaveContact.addEventListener("click", async () => {
            contactSettings.whatsapp = inputWhatsApp ? inputWhatsApp.value.trim() : "";
            contactSettings.email = inputContactEmail ? inputContactEmail.value.trim() : "";
            contactSettings.sitePrice = inputSitePrice ? inputSitePrice.value.trim() : "";
            saveContactSettings();
            await saveContactSettingsToCloud();
            if (contactSaveMsg) contactSaveMsg.textContent = "Saved.";
            setTimeout(() => {
                if (contactSaveMsg) contactSaveMsg.textContent = "";
            }, 1500);
        });
    }

    // Public student build: internal booking, availability, and calendar admin UI are disabled.
    // All booking actions go to the standalone booking app.
    const bookingSuccessModal = document.getElementById("bookingSuccessModal");
    try { window.buildBookingSelects = async () => []; } catch { }

    const guestSiteWhatsApp = document.getElementById("guestSiteWhatsApp");
    if (guestSiteWhatsApp) {
        guestSiteWhatsApp.addEventListener("click", openExternalBookingPage);
    }
    const trialContactBtn = document.getElementById("trialContactBtn");
    if (trialContactBtn) {
        trialContactBtn.addEventListener("click", openExternalBookingPage);
    }
    const trialEmailBtn = document.getElementById("trialEmailBtn");
    if (trialEmailBtn) {
        trialEmailBtn.addEventListener("click", openExternalBookingPage);
    }

    initArabicLettersScreen();
    // hero buttons
    // ===== HERO BUTTONS (أنا طالب / أنا مدرس) =====
    const btnHeroStudent = document.getElementById("btnHeroStudent");
    const btnHeroTeacher = document.getElementById("btnHeroTeacher");

    if (btnHeroStudent) {
        btnHeroStudent.addEventListener("click", async () => {
            const user = window.auth?.currentUser;
            if (!user) {
                openStudentLoginModal();
                return;
            }
            const profile = await readStudentAccessProfile(user.uid);
            if ((profile.role || "student") !== "student") {
                openStudentLoginModal();
                return;
            }
            await startSignedInStudentLearning(user, profile);
        });
    }

    const btnHeroGuest = document.getElementById("btnHeroGuest");
    if (btnHeroGuest) {
        btnHeroGuest.addEventListener("click", () => {
            startFreeLearning();
        });
    }

    if (btnHeroTeacher) {
        btnHeroTeacher.addEventListener("click", () => {
            // المدرّس → نفتح مودال تسجيل الدخول كـ TEACHER
            console.log("Teacher hero clicked");
            openAuthModal("teacher");
        });
    }
    // Subscribe modal buttons
    const subscribeBookingBtn = document.getElementById("subscribeBookingBtn");
    const subscribeAccessBtn = document.getElementById("subscribeAccessBtn");
    const learningLoginBtn = document.getElementById("learningLoginBtn");
    const studentSiteAuthForm = document.getElementById("studentSiteAuthForm");
    const studentSiteSignupSubmit = document.getElementById("studentSiteSignupSubmit");

    const floatingChatBtn = document.getElementById("floatingChatBtn");
    if (floatingChatBtn) {
        floatingChatBtn.addEventListener("click", () => {
            openWhatsAppWithMessage("Hello, I want to ask about Palestinian Arabic lessons.");
        });
    }

    document.querySelectorAll("[data-close-booking-success]").forEach((el) => {
        el.addEventListener("click", () => {
            if (bookingSuccessModal) bookingSuccessModal.classList.remove("modal--open");
        });
    });
    document.querySelectorAll("[data-close-whatsapp-chooser]").forEach((el) => {
        el.addEventListener("click", () => {
            const chooser = document.getElementById("whatsAppChooserModal");
            if (chooser) chooser.classList.remove("modal--open");
        });
    });
    const whatsappAppBtn = document.getElementById("openWhatsAppAppBtn");
    if (whatsappAppBtn) {
        whatsappAppBtn.addEventListener("click", () => {
            const chooser = document.getElementById("whatsAppChooserModal");
            if (chooser) chooser.classList.remove("modal--open");
            if (pendingWhatsAppTargets?.appUrl) {
                window.location.assign(pendingWhatsAppTargets.appUrl);
            }
        });
    }
    const whatsappWebBtn = document.getElementById("openWhatsAppWebBtn");
    if (whatsappWebBtn) {
        whatsappWebBtn.addEventListener("click", () => {
            const chooser = document.getElementById("whatsAppChooserModal");
            if (chooser) chooser.classList.remove("modal--open");
            if (pendingWhatsAppTargets?.webUrl) {
                window.location.assign(pendingWhatsAppTargets.webUrl);
            }
        });
    }
    const whatsappCopyBtn = document.getElementById("copyWhatsAppLinkBtn");
    if (whatsappCopyBtn) {
        whatsappCopyBtn.addEventListener("click", async () => {
            if (pendingWhatsAppTargets?.webUrl) {
                try {
                    await navigator.clipboard?.writeText(pendingWhatsAppTargets.webUrl);
                    toast("WhatsApp link copied.");
                } catch {
                    toast("Could not copy the WhatsApp link.");
                }
            }
        });
    }

    if (subscribeBookingBtn) {
        subscribeBookingBtn.addEventListener("click", () => {
            closeSubscribeModal();
            openExternalBookingPage();
        });
    }

    if (subscribeAccessBtn) {
        subscribeAccessBtn.addEventListener("click", () => {
            closeSubscribeModal();
            openCourseAccessPage();
        });
    }

    if (learningLoginBtn) {
        learningLoginBtn.addEventListener("click", () => {
            if (studentSiteAuthForm) studentSiteAuthForm.hidden = false;
        });
    }

    if (studentSiteAuthForm) {
        studentSiteAuthForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            try {
                await signInStudentFromSite({ signup: false });
            } catch (error) {
                const msg = document.getElementById("studentSiteAuthMsg");
                if (msg) msg.textContent = error.message || "Could not sign in.";
            }
        });
    }

    if (studentSiteSignupSubmit) {
        studentSiteSignupSubmit.addEventListener("click", async () => {
            try {
                await signInStudentFromSite({ signup: true });
            } catch (error) {
                const msg = document.getElementById("studentSiteAuthMsg");
                if (msg) msg.textContent = error.message || "Could not create account.";
            }
        });
    }

    // Close subscribe modal on backdrop click
    document.querySelectorAll("[data-close-subscribe]").forEach(el => {
        el.addEventListener("click", closeSubscribeModal);
    });

    document.querySelectorAll("[data-close-learning-choice]").forEach(el => {
        el.addEventListener("click", closeLearningChoiceModal);
    });

    document.querySelectorAll("[data-close-booking-portal]").forEach(el => {
        el.addEventListener("click", closeBookingPortalModal);
    });

    // add student
    $("#addStudentForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = $("#studentName").value.trim();
        const level = $("#studentLevel").value;
        if (!name) return;

        const goalCheckboxes = document.querySelectorAll('input[name="goalOption"]:checked');
        const goals = Array.from(goalCheckboxes).map((c) => c.value);

        const student = {
            id: "s_" + Date.now(),
            name,
            goals,
            level,
            progress: {},
            homeworkNotes: {},
        };
        appState.students.push(student);
        saveStudentsToLS();
        $("#studentName").value = "";
        goalCheckboxes.forEach((c) => (c.checked = false));
        $("#studentLevel").value = "Beginner";
        renderStudents();
    });
    // ================= WHITEBOARD UI =================
    const whiteboardPanel = document.getElementById("whiteboardPanel");
    const btnToggleWhiteboard = document.getElementById("btnToggleWhiteboard");
    const wbColorInput = document.getElementById("whiteboardColor");
    const wbSizeInput = document.getElementById("whiteboardSize");
    const wbSizeVal = document.getElementById("whiteboardSizeVal");
    const wbClearBtn = document.getElementById("whiteboardClear");
    const wbDownloadBtn = document.getElementById("whiteboardDownload");

    if (btnToggleWhiteboard && whiteboardPanel) {
        btnToggleWhiteboard.addEventListener("click", () => {
            const isHidden = whiteboardPanel.classList.contains("hidden");
            if (isHidden) {
                whiteboardPanel.classList.remove("hidden");
                // لما أفتح اللوحة، أهيّئ الكانفاس وأحمّل الرسمة
                initWhiteboardCanvas();
            } else {
                whiteboardPanel.classList.add("hidden");
            }
        });
    }

    if (wbColorInput) {
        wbColorInput.addEventListener("input", () => {
            whiteboardState.color = wbColorInput.value;
        });
    }

    if (wbSizeInput && wbSizeVal) {
        wbSizeInput.addEventListener("input", () => {
            const v = Number(wbSizeInput.value) || 3;
            whiteboardState.size = v;
            wbSizeVal.textContent = v + "px";
        });
        // قيمة ابتدائية
        whiteboardState.size = Number(wbSizeInput.value) || 3;
        wbSizeVal.textContent = whiteboardState.size + "px";
    }

    if (wbClearBtn) {
        wbClearBtn.addEventListener("click", () => {
            const canvas = document.getElementById("whiteboardCanvas");
            if (!canvas || !whiteboardState.ctx) return;
            if (!confirm("Clear this whiteboard for the current lesson?")) return;
            whiteboardState.ctx.clearRect(0, 0, canvas.width, canvas.height);
            saveWhiteboardToLS();
        });
    }

    if (wbDownloadBtn) {
        wbDownloadBtn.addEventListener("click", () => {
            const canvas = document.getElementById("whiteboardCanvas");
            if (!canvas) return;
            const link = document.createElement("a");
            const lesson = lessons[appState.currentLessonId];
            const title = lesson ? lesson.meta.lessonTitle || "lesson" : "lesson";
            link.download = `whiteboard_${title.replace(/\s+/g, "_")}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    }

    const btnExportLesson = document.getElementById("btnExportLessonPdf");
    if (btnExportLesson) {
        btnExportLesson.addEventListener("click", () => {
            const student = getCurrentStudent();
            const studentName = student ? student.name : "";
            const lessonId = appState.currentLessonId;
            if (!lessonId) {
                alert("No lesson selected.");
                return;
            }
            openExportModal("lesson-view", lessonId, studentName);
        });
    }
    const exportForm = document.getElementById("exportOptionsForm");
    if (exportForm) {
        exportForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const modal = document.getElementById("exportModal");
            const lessonId = exportContext.lessonId;
            const lesson = lessons[lessonId];
            if (!lesson) {
                alert("Lesson not found.");
                return;
            }

            const includeVocab = document.getElementById("expIncludeVocab").checked;
            const includeDialogue = document.getElementById("expIncludeDialogue").checked;
            const includeGrammar = document.getElementById("expIncludeGrammar").checked;
            const includeHomework = document.getElementById("expIncludeHomework").checked;
            let includeTeacherNotes =
                document.getElementById("expIncludeTeacherNotes").checked;

            const versionInput = exportForm.querySelector(
                'input[name="expVersion"]:checked'
            );
            const version = versionInput ? versionInput.value : "student";

            if (version === "student") {
                // مهما كان checkbox تبع Teacher Notes، نخفيه في Student version
                includeTeacherNotes = false;
            }

            const html = buildLessonExportHtml(lesson, {
                includeVocab,
                includeDialogue,
                includeGrammar,
                includeHomework,
                includeTeacherNotes,
                version,
                studentName: exportContext.studentName,
            });

            closeExportModal();
            openPrintWindow(html);
        });
    }
    // Legacy backup buttons are disabled in the public student build.
    const btnExportBackup = document.getElementById("btnExportBackup");
    const btnImportBackup = document.getElementById("btnImportBackup");
    const backupFileInput = document.getElementById("backupFileInput");
    const backupFrequencySelect = document.getElementById("backupFrequencySelect");
    const backupLastInfo = document.getElementById("backupLastInfo");

    if (backupFrequencySelect) {
        backupFrequencySelect.value = backupSettings.frequency || "off";
        backupFrequencySelect.addEventListener("change", () => {
            backupSettings.frequency = backupFrequencySelect.value;
            saveBackupSettings();
            checkBackupReminder();
        });
    }

    if (backupLastInfo && backupSettings.lastBackupAt) {
        const last = new Date(backupSettings.lastBackupAt);
        backupLastInfo.textContent =
            "Last backup: " +
            last.toLocaleString() +
            "  |  Frequency: " +
            backupSettings.frequency;
    }

    if (btnExportBackup) {
        btnExportBackup.addEventListener("click", () => {
            handleExportBackup();
        });
    }

    if (btnImportBackup && backupFileInput) {
        btnImportBackup.addEventListener("click", () => {
            backupFileInput.click();
        });

        backupFileInput.addEventListener("change", () => {
            const file = backupFileInput.files[0];
            if (file) {
                handleImportBackupFile(file);
                backupFileInput.value = "";
            }
        });
    }

    // تشيك التذكير بعد ما نحمّل الإعدادات
    checkBackupReminder();

    // أزرار إغلاق المودال
    document
        .querySelectorAll("[data-close-export-modal], #exportCancelBtn")
        .forEach((el) => {
            el.addEventListener("click", () => closeExportModal());
        });

    // level & teacher buttons
    document.getElementById("btnSwitchProfile")?.addEventListener("click", () => {
        // Save current lesson position before clearing current student
        try { persistResumeBeforeNav(); } catch { }
        appState.currentStudentId = null;
        goToStudents();
    });
    document.getElementById("btnStudentLogout")?.addEventListener("click", () => {
        signOutStudentFromSite();
    });
    const btnContinueLesson = document.getElementById("btnContinueLesson");
    if (btnContinueLesson) {
        btnContinueLesson.addEventListener("click", () => {
            const student = getCurrentStudent();
            if (!student) return;
            if (!tryResumeStudent(student)) {
                setStudentLessonContext(student);
                goToLevels();
                toast("No saved spot yet. Opened this student's level.");
            }
        });
    }
    document.getElementById("btnBackToLevels")?.addEventListener("click", () => goToLevels());
    document.getElementById("btnBackToStudents")?.addEventListener("click", () => goToStudents());
    document.getElementById("btnTDBackLevels")?.addEventListener("click", () => goToLevels());
    document.getElementById("btnTDBackStudents")?.addEventListener("click", () => goToStudents());
    // ================= VOCAB MODAL CONTROLS =================
    const btnPrev = document.getElementById("vocabPrevBtn");
    const btnNext = document.getElementById("vocabNextBtn");
    const btnToggleExamples = document.getElementById("vocabToggleExamplesBtn");
    const btnToggleAr = document.getElementById("vocabToggleArBtn");
    const btnToggleEn = document.getElementById("vocabToggleEnBtn");
    const btnToggleArabeezy = document.getElementById("vocabToggleArabeezyBtn");
    const btnDontKnow = document.getElementById("vocabDontKnowBtn");
    function checkIfVocabDone() {
        if (!currentLesson || !currentLesson.vocabulary) return;

        const allVocab = [
            ...(currentLesson.vocabulary.core || []),
            ...(currentLesson.vocabulary.extra || []),
        ];

        const visited = ensureVocabVisitedSet();
        const allSeen = allVocab.every((v) => visited.has(v.id));

        if (allSeen) {
            // لما يمرّ على كل الكلمات مرة واحدة على الأقل
            markLessonSectionDone("vocabulary");
            updateLessonProgressUI();
        }
    }
    function updateLessonProgressUI() {
        // حدّث شريط التقدم
        updateProgressBar();

        // حدّث بادج قسم المفردات فقط
        updateSectionStatusBadge("vocabulary");
    }

    if (btnPrev) {
        btnPrev.addEventListener("click", () => {
            if (!vocabModalState.list.length) return;
            vocabModalState.index =
                (vocabModalState.index - 1 + vocabModalState.list.length) %
                vocabModalState.list.length;
            vocabModalState.showExamples = true; // نرجّع الأمثلة ظاهرة عند الانتقال
            renderVocabModalFromState();
        });
    }

    if (btnNext) {
        btnNext.addEventListener("click", () => {
            if (!vocabModalState.list.length) return;

            const currentLesson = lessons[appState.currentLessonId];
            const microCfg = getMicroCheckConfig(currentLesson);
            if (microCfg.enabled && microCfg.items.length) {
                vocabModalState.nextClickCount += 1;
                if (vocabModalState.nextClickCount >= microCfg.every) {
                    vocabModalState.nextClickCount = 0;
                    microCheckState.pendingNextAdvance = true;
                    if (openMicroCheckModal(currentLesson)) {
                        return;
                    }
                    microCheckState.pendingNextAdvance = false;
                }
            }

            vocabModalState.index =
                (vocabModalState.index + 1) % vocabModalState.list.length;

            renderVocabModalFromState();
        });
    }

    if (btnDontKnow) {
        btnDontKnow.addEventListener("click", () => {
            const item = vocabModalState.list[vocabModalState.index];
            if (!item || !item.id) return;
            setVocabMemoryStatus(appState.currentLessonId, item.id, "review");
            renderVocabModalFromState();
        });
    }


    if (btnToggleExamples) {
        btnToggleExamples.addEventListener("click", () => {
            vocabModalState.showExamples = !vocabModalState.showExamples;
            renderVocabModalFromState();
        });
    }
    if (btnToggleAr) {
        btnToggleAr.addEventListener("click", () => {
            vocabModalState.showAr = !vocabModalState.showAr;
            renderVocabModalFromState();
        });
    }

    if (btnToggleEn) {
        btnToggleEn.addEventListener("click", () => {
            vocabModalState.showEn = !vocabModalState.showEn;
            renderVocabModalFromState();
        });
    }

    if (btnToggleArabeezy) {
        btnToggleArabeezy.addEventListener("click", () => {
            vocabModalState.showArabeezy = !vocabModalState.showArabeezy;
            renderVocabModalFromState();
        });
    }

    const microCheckCheckBtn = document.getElementById("microCheckCheckBtn");
    const microCheckContinueBtn = document.getElementById("microCheckContinueBtn");
    const microCheckCloseBtn = document.getElementById("microCheckCloseBtn");

    if (microCheckCheckBtn) {
        microCheckCheckBtn.addEventListener("click", () => evaluateMicroCheck());
    }
    if (microCheckContinueBtn) {
        microCheckContinueBtn.addEventListener("click", () => continueFromMicroCheck());
    }
    if (microCheckCloseBtn) {
        microCheckCloseBtn.addEventListener("click", () => continueFromMicroCheck());
    }
    // Public student build: auth, logout, add-unit, and teacher-dashboard controls are disabled.
    // lesson tabs
    $all(".lesson-tab").forEach((btn) => {
        btn.addEventListener("click", () => {
            const nextTab = btn.dataset.tab;
            if (!nextTab || nextTab === appState.currentTab) return;
            lessonTabNavigationCount += 1;
            if (lessonTabNavigationCount % AD_TAB_INTERVAL === 0) {
                showAdBreak(() => setActiveTab(nextTab));
            } else {
                setActiveTab(nextTab);
            }
        });
    });

    const adBreakContinueBtn = document.getElementById("adBreakContinueBtn");
    if (adBreakContinueBtn) {
        adBreakContinueBtn.addEventListener("click", continueAfterAdBreak);
    }

    // font size
    $("#btnFontSmaller").addEventListener("click", () => {
        appState.lessonFontSize = Math.max(0.85, appState.lessonFontSize - 0.05);
        applyFontSize();
        saveFontSize();
    });
    $("#btnFontLarger").addEventListener("click", () => {
        appState.lessonFontSize = Math.min(1.4, appState.lessonFontSize + 0.05);
        applyFontSize();
        saveFontSize();
    });

    // vocab modal closes
    $all("[data-close-modal]").forEach((el) =>
        el.addEventListener("click", () => closeVocabModal())
    );


    const tdSyncNowBtn = document.getElementById("tdSyncNowBtn");
    if (tdSyncNowBtn) {
        tdSyncNowBtn.addEventListener("click", async () => {
            await syncLessonsNow();
        });
    }
    // initial
    if (!isGuestUser()) {
        startFreeLearning({ navigate: false });
    }
    renderStudents();
    goToHome();


    const createStudentForm = document.getElementById("createStudentForm");
    if (createStudentForm) {
        createStudentForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // تأكيد أن المستخدم الحالي مدرّس
            if (!appState.currentUser || appState.currentUser.role !== "teacher") {
                alert("Only teachers can create students.");
                return;
            }

            const emailEl = document.getElementById("newStudentEmail");
            const passwordEl = document.getElementById("newStudentPassword");
            const msg = document.getElementById("createStudentMsg");

            const email = emailEl.value.trim();
            const password = passwordEl.value.trim();

            if (msg) {
                msg.textContent = "";
                msg.style.color = "#111827";
            }

            if (!email || !password) {
                if (msg) {
                    msg.style.color = "#b91c1c";
                    msg.textContent = "Please enter student email and a temporary password.";
                }
                return;
            }

            if (password.length < 6) {
                if (msg) {
                    msg.style.color = "#b91c1c";
                    msg.textContent = "Password must be at least 6 characters.";
                }
                return;
            }

            const submitBtn = createStudentForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Creating...";
            }

            try {
                const secAuth = getSecondaryAuth();
                if (!secAuth) {
                    if (msg) {
                        msg.style.color = "#b91c1c";
                        msg.textContent = "Secondary Firebase app is not available.";
                    }
                    return;
                }

                // 🧑‍🎓 إنشاء المستخدم الجديد باستخدام الـ secondary auth
                await createStudentAccount({
                    db,
                    firebase,
                    secondaryAuth: secAuth,
                    teacherUid: appState.currentUser.uid || null,
                    email,
                    password,
                });

                // تنظيف الحقول
                emailEl.value = "";
                passwordEl.value = "";

                if (msg) {
                    msg.style.color = "#15803d";
                    msg.textContent =
                        "Student account created successfully. Share the email and password with the student.";
                }
            } catch (err) {
                console.error("Create student error:", err);
                if (msg) {
                    msg.style.color = "#b91c1c";
                    if (err.code === "auth/email-already-in-use") {
                        msg.textContent = "This email is already in use. Pick another email for the student.";
                    } else if (err.code === "auth/invalid-email") {
                        msg.textContent = "Invalid email format.";
                    } else {
                        msg.textContent = "Error: " + err.message;
                    }
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Create Student";
                }
            }
        });
    }
});


async function handleCreateStudentSubmit(e) {
    e.preventDefault();
    console.log("Create student submitted");
    if (!appState.currentUser || appState.currentUser.role !== "teacher") {
        alert("Only teachers can create students.");
        return;
    }

    const emailEl = document.getElementById("newStudentEmail");
    const passwordEl = document.getElementById("newStudentPassword");
    const msg = document.getElementById("createStudentMsg");

    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();

    if (msg) {
        msg.textContent = "";
        msg.style.color = "#111827";
    }

    if (!email || !password) {
        if (msg) {
            msg.style.color = "#b91c1c";
            msg.textContent = "Please enter student email and a temporary password.";
        }
        return;
    }

    if (password.length < 6) {
        if (msg) {
            msg.style.color = "#b91c1c";
            msg.textContent = "Password must be at least 6 characters.";
        }
        return;
    }

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Creating...";
    }

    try {
        const secAuth = getSecondaryAuth();
        if (!secAuth) {
            if (msg) {
                msg.style.color = "#b91c1c";
                msg.textContent = "Secondary Firebase app is not available.";
            }
            return;
        }

        await createStudentAccount({
            db,
            firebase,
            secondaryAuth: secAuth,
            teacherUid: appState.currentUser.uid || null,
            email,
            password,
        });

        emailEl.value = "";
        passwordEl.value = "";

        if (msg) {
            msg.style.color = "#15803d";
            msg.textContent =
                "Student account created successfully. Share the email and password with the student.";
        }
    } catch (err) {
        console.error("Create student error:", err);
        if (msg) {
            msg.style.color = "#b91c1c";
            if (err.code === "auth/email-already-in-use") {
                msg.textContent = "This email is already in use. Pick another email.";
            } else if (err.code === "auth/invalid-email") {
                msg.textContent = "Invalid email format.";
            } else {
                msg.textContent = "Error: " + err.message;
            }
        }
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Create Student";
        }
    }
}








let __toastTimer = null;
function toast(message) {
    const existing = document.getElementById("toast");
    let el = existing;
    if (!el) {
        el = document.createElement("div");
        el.id = "toast";
        el.style.position = "fixed";
        el.style.left = "50%";
        el.style.bottom = "18px";
        el.style.transform = "translateX(-50%)";
        el.style.padding = "10px 12px";
        el.style.borderRadius = "12px";
        el.style.background = "rgba(17,24,39,.92)";
        el.style.color = "white";
        el.style.fontSize = ".9rem";
        el.style.zIndex = "9999";
        el.style.maxWidth = "92vw";
        el.style.boxShadow = "0 10px 20px rgba(0,0,0,.18)";
        document.body.appendChild(el);
    }
    el.textContent = message;
    el.style.opacity = "1";
    if (__toastTimer) clearTimeout(__toastTimer);
    __toastTimer = setTimeout(() => {
        el.style.opacity = "0";
    }, 1800);
}




// ---- Expose key functions to window for cross-module access ----
try { Object.assign(window, { saveLessonToLS, toast, renderLesson, renderLevels }); } catch (e) { }




