import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import "../elements/button";
import "../elements/bg-blocked";
import { layoutClasses } from "../css/layout-classes";


@customElement('page-home')
export class PageHome extends LitElement {
    render() {
        return html`
            <bg-blocked></bg-blocked>

            <div class="column">
                <h1>Water Savers</h1>

                <app-button @click="${() => { window.location.pathname = "/challenges" }}">Challenges</app-button>
                <app-button>Prizes</app-button>    
                <app-button>Numbers</app-button>
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
