import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import "../elements/button";
import "../elements/bg-blocked";
import { layoutClasses } from "../css/layout-classes";


@customElement('page-challenges')
export class PageChallenges extends LitElement {
    render() {
        return html`
            <bg-blocked></bg-blocked>

            <div class="column">
                <h1>Challenges</h1>

                <app-button @click="${() => { window.location.pathname = "/challenges" }}">Challenge 1</app-button>
                <app-button>Challenge 2</app-button>    
                <app-button>Challenge 3</app-button>

                <app-button red=true @click="${() => { window.location.pathname = "/" }}">Back</app-button>
            </div>
        `
    }

    static styles = [
        layoutClasses,
        css`
            * {
                box-sizing: border-box;
            }
            :host {
                display: block;
                height: 100%;
            }

            .column {
                padding: 1rem;
            }

            app-button + app-button {
                margin-top: 2rem;
            }
        `
    ]
}

declare global {
    interface HTMLElementTagNameMap {
        'page-challenges': PageChallenges
    }
}
