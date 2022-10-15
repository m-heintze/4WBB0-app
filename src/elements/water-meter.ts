import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

import "./water-glass"

@customElement('water-meter')
export class WaterMeter extends LitElement {

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
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 100%;
            }

            .smileys {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                min-height: 12rem;
                height: 100%;

                margin-left: 1rem;
            }
        `
    ];

    render() {
        return html`
        <div class="container">
            <water-glass></water-glass>
            <div class="smileys">
                <img src="/s5.png">
                <img src="/s4.png">
                <img src="/s3.png">
                <img src="/s2.png">
                <img src="/s1.png">
            </div>
        </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'water-meter': WaterMeter
    }
}
