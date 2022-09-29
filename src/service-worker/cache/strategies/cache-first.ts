import { VersionedCache } from "../versioned-cache";

/**
 * Tries to find the answer to the request in the following manner:
 * 1. Looks in the cache. (if found, return)
 * 2. Get the answer from the internet.
 * 3. Save the answer in the cache.
 */
export async function cacheFirst(vc: VersionedCache, request: Request) {
  let log: string = "[SW]: "

  // Check if the response is in the cache.
  const cacheResponse = await vc.match(request)
  if (cacheResponse !== undefined) {
    // The response was in the cache, return it.
    console.log(log, "cache", request.url)
    return cacheResponse;
  }

  // No response was found in the cache, fetch it from the web.
  const webResponse = fetch(request)
  // Put it in the cache for future usage.
  vc.put(request, (await webResponse).clone())

  // Return response to the client.
  console.log(log, "web", request.url)
  return webResponse;
}