export class DeviceAPI {
    baseUrl: string
    es: EventSource | undefined

    constructor(baseUrl: string) {
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
        const requestUrl = new URL('api/toggle_solenoid', this.baseUrl)
        const response = await fetch(requestUrl);

        if (await response.text() === "OK") {
            return true
        }

        return false
    }

    createEventSource() {
        this.es = new EventSource(new URL('api/events', this.baseUrl))
        this.registerEventHandlers()

        console.log("Created a new EventSource.")
    }

    private async registerEventHandlers() {
        if (this.es == undefined) {
            console.error("EventSource not created yet. Call createEventSource() instead of this function.")
            return
        }

        this.es.onerror = () => {
            console.log("An error occured in the EventSource, creating a new one to reconnect.")
            this.createEventSource()
        }

        this.es.addEventListener('system', event => {
            console.log("[ES] systen", event.data);
        });
        
        this.es.addEventListener('solenoid', event => {
            console.log("[ES] solenoid", event.data);
        });
        
        console.log("Registerd all handlers")
    }
}