export declare class DeviceAPI extends EventTarget {
    baseUrl: string;
    es: EventSource | undefined;
    isConnecting: boolean;
    constructor(baseUrl: string);
    health(): Promise<boolean>;
    toggleSolenoid(): Promise<boolean>;
    createEventSource(): void;
    private registerEventHandlers;
}
