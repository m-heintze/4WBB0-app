import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { DeviceAPI } from "../external/device-api"

@customElement('water-glass')
export class WaterGlass extends LitElement {
    @property()
    percentageFilled: number = 0;

    deviceAPI: DeviceAPI

    constructor() {
        super()

        this.deviceAPI = new DeviceAPI('http://192.168.4.1')
        this.deviceAPI.addEventListener("flow", (ev: any) => {
            this.percentageFilled += ev.detail.delta * 100
            console.log(ev.detail.delta)
        })
    }

    static styles = [
        css`
            * {
                box-sizing: border-box;
            }

            :host {
                display: block;
                width: 100%;
                height: 100%;
            }

            .container {
                position: relative;
                width: 100%;
                height: 100%;
            }

            .glass {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                border: .5rem solid white;
                border-top: none;
            }

            .water {
                position: absolute;
                /* Bottom should be the same as the border width of the glass. */
                /* bottom: .5rem; */
                bottom: 0;
                left: 0;
                width: 100%;

                background-color: lightblue;
                transition: height 1s ease-out;
            }
        `
    ];

    render() {
        return html`
            <!-- <div class="container" @click="${() => this.percentageFilled -= -5}"> -->
            <div class="container" @click="${async () => {console.log(await this.deviceAPI.toggleSolenoid()); console.log("click")}}">
                <div class="water" style="height: ${Math.min(this.percentageFilled, 100)}%;"></div>
                <div class="glass"></div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'water-glass': WaterGlass
    }
}
