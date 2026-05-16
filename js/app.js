// bootstrap only
import './core/errorHandler.js';
import './logic/interactions.js';
import './logic/branchingDialogue.js';
import './drawingLayer.js';

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js").catch((error) => {
            console.warn("Service worker registration failed:", error);
        });
    });
}

// Initialize error handler
console.log('App initialized with error handling');
