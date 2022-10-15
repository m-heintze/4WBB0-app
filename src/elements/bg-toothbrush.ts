import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import "./scaling-container";
import "./button";


@customElement('bg-toothbrush')
export class BgToothbrush extends LitElement {
    render() {
        return html``
    }

    static styles = [
        css`
            :host {
                z-index: -1;
                background-image: url("/toothbrush-large.png");
                background-size: 80% auto;
                background-repeat: repeat-y;
                background-position: 50% -1rem;
                opacity: 20%;
                
                display: block;
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
            }
        `
    ]
}

declare global {
    interface HTMLElementTagNameMap {
        'bg-toothbrush': BgToothbrush
    }
}
