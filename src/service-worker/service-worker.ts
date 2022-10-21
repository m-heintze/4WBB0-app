import { cacheFirst } from "./cache/strategies/cache-first";
import { VersionedCache } from "./cache/versioned-cache";

// @ts-ignore
const s: ServiceWorkerGlobalScope = self as ServiceWorkerGlobalScope;
const VERSION = 'v0.0.33';
const DEVICE_IP = '192.168.4.1';

const vc = new VersionedCache("app", VERSION)

s.addEventListener("fetch", async event => {
    event.respondWith(fetchEventHandler(event))
})

/**
 * Uses a cache first strategy as this app is meant to be totally offline.
 * TODO: Future exceptions are needed to stream live data using server sent events.
 * @param event The fetch event.
 * @returns The answer to the request.
 */
async function fetchEventHandler(event: FetchEvent) {
    if (event.request.url.includes(DEVICE_IP)) {
        console.log("[SW] URL exception, not using cache for:", event.request.url)

        return await fetch(event.request)
    }

    return cacheFirst(vc, event.request)
}

s.addEventListener("install", event => {
    /**
     * Pre cache the needed files for the app to work offline.
     * TODO: Font is not cached because it comes from google, maybe download it and serve it ourselves?
     */
    const installEventHandler = async () => {
        // Get the pwa cache map to find out what files are in need of caching.
        const pwaCacheMap = await (await fetch("/pwa-cache-map.txt")).text()

        // Cache each file if they are not in the cache already, using the cacheFirst strategy.
        for (const fileToCache of pwaCacheMap.split('\n')) {
            cacheFirst(vc, new Request(fileToCache))
        }
    };

    // Do not install before the event is handled.
    event.waitUntil(installEventHandler())
})

s.addEventListener("message", event => {
    console.log("SW", event.data);
    if (event.data == "skipWaiting pls") {
        s.skipWaiting()
    }
})

/**
 * Runs when this service worker is newly activated. (i.e. controls requests, and does its job)
 * Since a version might have changed, we no longer need to keep the old caches.
 * Thus we remove them.
 */
s.addEventListener("activate", () => {
    vc.deleteOtherVersions();
})