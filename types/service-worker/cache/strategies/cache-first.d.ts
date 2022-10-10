import { VersionedCache } from "../versioned-cache";
/**
 * Tries to find the answer to the request in the following manner:
 * 1. Looks in the cache. (if found, return)
 * 2. Get the answer from the internet.
 * 3. Save the answer in the cache.
 */
export declare function cacheFirst(vc: VersionedCache, request: Request): Promise<Response>;
