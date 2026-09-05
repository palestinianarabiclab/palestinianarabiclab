const CACHE_NAME = "pal-arabic-lab-v2026-08-21-13";
const STATIC_ASSETS = [
    "/",
    "/index.html",
    "/styles.css",
    "/stories.html",
    "/stories.css",
    "/js/stories.js",
    "/js/data/miftah-al-bayt.md",
    "/js/data/sirr-al-miftah-al-aswad.md",
    "/js/data/al-sura-alli-naqisha-wajh.md",
    "/js/data/awwal-yom-bil-shughul.md",
    "/js/data/awwal-ratib.md",
    "/js/data/al-mudir-al-jdid.md",
    "/js/data/baytna-al-jdid.md",
    "/js/data/al-jar-al-jdid.md",
    "/js/data/yom-ma-al-aila.md",
    "/js/data/azoumet-al-jomaa.md",
    "/js/data/akhir-bas.md",
    "/js/data/yom-bil-souq.md",
    "/js/data/rihla-al-bahr.md",
    "/js/data/bil-mataam.md",
    "/js/data/sira-nabawiyya.md",
    "/js/app.js",
    "/js/core/errorHandler.js",
    "/js/logic/interactions.js",
    "/js/logic/branchingDialogue.js",
    "/js/drawingLayer.js",
    "/js/cloud/lessonsCloud.js",
    "/js/core/constants.js",
    "/js/lessons/index.js",
    "/js/data/arabicLettersData.js",
    "/js/data/gazaSituationsData.js",
    "/js/data/palestinianCultureData.js",
    "/ads.txt",
    "/sitemap.xml",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {})
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
        )
    );
    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    if (request.method !== "GET") return;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;
    if (url.pathname === "/js/config.runtime.js") return;

    const shouldPreferNetwork =
        request.mode === "navigate"
        || request.destination === "style"
        || request.destination === "script";

    if (shouldPreferNetwork) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    if (response && response.ok) {
                        const copy = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                    }
                    return response;
                })
                .catch(() => caches.match(request))
        );
        return;
    }

    event.respondWith(
        caches.match(request).then((cached) => cached || fetch(request).then((response) => {
            if (response && response.ok) {
                const copy = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            }
            return response;
        }))
    );
});
