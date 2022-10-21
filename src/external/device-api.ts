export class DeviceAPI extends EventTarget {
    baseUrl: string
    es: EventSource | undefined
    isConnecting: boolean = false;

    constructor(baseUrl: string) {
        super()
        this.baseUrl = new URL(baseUrl).toString()
        this.createEventSource()
    }

    async health(): Promise<boolean> {
        const requestUrl = new URL('api/health', this.baseUrl)
        const response = await fetch(requestUrl);

        if (await response.text() === "OK") {
            return true
        }

        return false
    }

    async toggleSolenoid(): Promise<boolean> {
        console.log("Toggling solenoid")
        const requestUrl = new URL('api/solenoid/close', this.baseUrl)
        const response = await fetch(requestUrl);
        console.log("Got respo")

        if (await response.text() === "OK") {
            return true
        }

        return false
    }

    createEventSource() {
        if (this.isConnecting) { return };

        this.es = new EventSource(new URL('api/events', this.baseUrl))
        console.log("Created a new EventSource.")
     
        this.registerEventHandlers()
        this.isConnecting = false;
    }

    private async registerEventHandlers() {
        if (this.es == undefined) {
            console.error("EventSource not created yet. Call createEventSource() instead of this function.")
            return
        }

        this.es.onerror = () => {
            console.log("An error occured in the EventSource, creating a new one to reconnect.")
            if (this.isConnecting) {
                console.log("Nevermind, reconnection process was already starting.")
                return
            }

            this.isConnecting = true

            setTimeout(() => {
                this.createEventSource()
            }, 3000);
        }

        this.es.addEventListener('system', event => {
            console.log("[ES] system", event.data);
            this.dispatchEvent(new CustomEvent("system", JSON.parse(event.data)))
        });
        
        this.es.addEventListener('solenoid', event => {
            console.log("[ES] solenoid", event.data);
            this.dispatchEvent(new CustomEvent("solenoid", JSON.parse(event.data)))
        });
        
        this.es.addEventListener('flow', event => {
            console.log("[ES] flow", event.data);
            this.dispatchEvent(new CustomEvent("flow", {detail: JSON.parse(event.data)} ))
        });
        
        
        console.log("Registerd all handlers")
    }
}