import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Router } from "@vaadin/router";

import "../elements/button";
import "../elements/bg-blocked";
import { layoutClasses } from "../css/layout-classes";


@customElement('page-home')
export class PageHome extends LitElement {
    render() {
        return html`
            <bg-blocked></bg-blocked>

            <div class="column">
                <h1>H<sub>2</sub>kn0w</h1>

                <app-button @click="${() => { Router.go("/challenges") }}" img="/toothbrush.png">Challenges</app-button>
                <app-button img="/prizes.png">Prizes</app-button>    
                <app-button img="/numbers.png">Numbers</app-button>
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
        'page-home': PageHome
    }
}
