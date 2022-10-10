import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-button")
export class AppButton extends LitElement {
    @property()
    red: boolean = false;

    render() {
        return html`
        <button class="${this.red ? "red" : ""}" >
            <slot></slot>
        </button>
      `;
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            min-height: 6rem;
            max-height: 8rem;

        }
        
        button {
            display: block;
            width: 100%;
            height: 100%;
            
            outline: none;
            border: none;
            border-radius: 1rem;

            font-family: "Bubblegum Sans", cursive;
            font-size: 4rem;
            color: var(--c-text-btn);
            background-color: var(--c-btn-bg);

            box-shadow: 0 .25rem .25rem 0 rgba(0,0,0,.25)
        }

        button.red {
            background-color: var(--c-btn-bg-red);
            color: var(--c-text-light);
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        "app-button": AppButton
    }
}
