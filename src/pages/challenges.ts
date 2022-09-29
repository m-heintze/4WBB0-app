import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import "../elements/scaling-container";
import "../elements/button";


@customElement('page-challenges')
export class PageChallenges extends LitElement {
  render() {
    return html`
      <h1>Challenges placeholder</h1>
      <a href="/" style="color: #ececec">back to home</a>
      <scaling-container></scaling-container>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'page-challenges': PageChallenges
  }
}
