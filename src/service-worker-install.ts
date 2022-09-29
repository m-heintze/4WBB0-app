const registerServiceWorker = async () => {
    console.log("Trying to install sw")

    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("/service-worker.js", {
                scope: "/",
            });
            if (registration.installing) {
                console.log("Service worker installing");
            } else if (registration.waiting) {
                console.log("Service worker installed");
            } else if (registration.active) {
                console.log("Service worker active");
            }
        } catch (error) {
            console.error(`(Not a problem if in development mode) Registration failed with ${error}`);
        }
    }
};

window.addEventListener("load", () => {
    registerServiceWorker();

    // Handle new service workers, i.e. app updates.
    navigator.serviceWorker.getRegistration().then(reg => {
        if (!reg) { console.log("nope"); return; }
        const updatePath = '/update'
        
        // Check if there already is an waiting service worker, and not currently on the update page.
        if (reg.waiting && !window.location.pathname.includes(updatePath)) {
            window.location.pathname = updatePath
        }

        // Listen for new installing service workers.
        reg.addEventListener("updatefound", () => {
            if (!reg.installing) { console.log("nope"); return; }
            console.log("new installing worker")

            // Listen for events on that new service worker.
            reg.installing.addEventListener("statechange", () => {
                // If reg.waiting != undefined the next service worker and thus update is ready.
                window.location.pathname = updatePath
            })
        })
    });
})

export { }
