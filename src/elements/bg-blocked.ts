import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import "./scaling-container";
import "./button";


@customElement('bg-blocked')
export class BgBlocked extends LitElement {
    render() {
        return html``
    }

    static styles = [
        css`
            :host {
                z-index: -1;
                background-image:
                    linear-gradient(45deg, var(--c-bg-alt) 25%, transparent 25%), 
                    linear-gradient(135deg, var(--c-bg-alt) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, var(--c-bg-alt) 75%),
                    linear-gradient(135deg, transparent 75%, var(--c-bg-alt) 75%);
                background-size: 20vw 20vw; /* Must be a square */
                background-position:0 0, 12.5px 0, 12.5px -12.5px, 0x 12.5px;
                display: block;
                position: absolute;

                /* padding: 1rem; */
                height: 100%;
                width: 100%;
                top: 0;
            }
        `
    ]
}

declare global {
    interface HTMLElementTagNameMap {
        'bg-blocked': BgBlocked
    }
}
