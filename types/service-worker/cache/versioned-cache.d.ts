export declare class VersionedCache implements Cache {
    private name;
    private version;
    private completeName;
    constructor(name: string, version: string);
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | undefined>;
    matchAll(request: RequestInfo, options?: CacheQueryOptions): Promise<readonly Response[]>;
    add(request: RequestInfo): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<readonly Request[]>;
    put(request: RequestInfo, response: Response): Promise<void>;
    /**
     * Removes all caches with the same name, but that are from a different version.
     */
    deleteOtherVersions(): Promise<void>;
}
