(function () {
    const config = window.__APP_CONFIG__?.firebase || null;
    const LESSONS_CACHE_KEY = "pal_arabic_cloud_lessons_cache_v1";
    const LESSONS_CACHE_TTL_MS = 6 * 60 * 60 * 1000;
    if (!config) {
        console.info("Firebase content sync is disabled. Local lessons are active.");
        return;
    }

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const existing = document.querySelector(`script[src="${src}"]`);
            if (existing) {
                existing.addEventListener("load", resolve, { once: true });
                existing.addEventListener("error", reject, { once: true });
                return;
            }
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    async function startFirebase() {
        await loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
        await loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js");

        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        window.db = firebase.firestore();
        window.dispatchEvent(new Event("palArabicFirebaseReady"));
        console.info("Firebase content sync is ready.");
    }

    const schedule = window.requestIdleCallback || ((callback) => setTimeout(callback, 1500));
    window.addEventListener("load", () => {
        schedule(() => {
            startFirebase().catch((error) => {
                console.warn("Firebase content sync could not start:", error);
            });
        });
    });
})();
