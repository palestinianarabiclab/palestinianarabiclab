const CACHE_NAME = "pal-arabic-lab-v2026-07-15-17";
const STATIC_ASSETS = [
    "/",
    "/index.html",
    "/styles.css",
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
