import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("scaling-container")
export class ScalingContainer extends LitElement {
    render() {
        return html`
            <slot></slot>
      `;
    }

    static styles = css`
        :host {
            width: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            flex-grow: 1;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        "scaling-container": ScalingContainer
    }
}
