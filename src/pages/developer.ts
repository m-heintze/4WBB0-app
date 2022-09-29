import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('page-dev')
export class PageDev extends LitElement {
  render() {
    return html`
      <h1>Developer page</h1>
    `;
  }
}

declare global {
    interface HTMLElementTagNameMap {
        "page-dev": PageDev
    }
}
