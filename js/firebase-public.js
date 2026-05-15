(function () {
    const config = window.firebaseConfig || null;
    if (!config || typeof firebase === "undefined") {
        console.info("Firebase content sync is disabled. Local lessons are active.");
        return;
    }

    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        window.db = firebase.firestore();
        console.info("Firebase content sync is ready.");
    } catch (error) {
        console.warn("Firebase content sync could not start:", error);
    }
})();
