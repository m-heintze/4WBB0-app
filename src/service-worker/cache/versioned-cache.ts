export class VersionedCache implements Cache {
    private name: string;
    private version: string;
    private completeName: string;

    constructor(name: string, version: string) {
        this.name = name;
        this.version = version;
        this.completeName = name + '-' + version;
    }

    async match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | undefined> {
        return (await caches.open(this.completeName)).match(request, options);
    }

    async matchAll(request: RequestInfo, options?: CacheQueryOptions): Promise<readonly Response[]> {
        return (await caches.open(this.completeName)).matchAll(request, options);
    }

    async add(request: RequestInfo): Promise<void> {
        return (await caches.open(this.completeName)).add(request);
    }

    async addAll(requests: RequestInfo[]): Promise<void> {
        return (await caches.open(this.completeName)).addAll(requests);
    }

    async delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean> {
        return (await caches.open(this.completeName)).delete(request, options);
    }

    async keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<readonly Request[]> {
        return (await caches.open(this.completeName)).keys(request, options);
    }

    async put(request: RequestInfo, response: Response): Promise<void> {
        return (await caches.open(this.completeName)).put(request, response);
    }

    /**
     * Removes all caches with the same name, but that are from a different version.
     */
    async deleteOtherVersions() {
        const cacheNames = await caches.keys();
        
        for (let i = 0; i < cacheNames.length; i++) {
            // Skip this cache if it does not have the same name.
            if (!cacheNames[i].startsWith(this.name)) continue;
            // Skip this cache if it is the used version.
            if (cacheNames[i].endsWith(this.version)) continue;

            // Cache has this name but is a different version, thus delete it.
            caches.delete(cacheNames[i]);
        }
    }
}