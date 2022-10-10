import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-button")
export class AppButton extends LitElement {
    @property()
    red: boolean = false;
    @property()
    img: string | undefined = undefined;

    render() {
        return html`
            ${this.img ? html`<img src="${this.img}" alt="image">` : ""}
            <button class="${this.red ? "red" : ""}">
                <slot></slot>
            </button>
      `;
    }

    static styles = css`
        * {
            box-sizing: border-box;
        }

        :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100%;
            height: 100%;
            min-height: 6rem;
            max-height: 10rem;
        }

        img {
            margin-bottom: -2rem;
            height: 4rem;
            z-index: 1;
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
