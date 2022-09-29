import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import "../elements/scaling-container";
import "../elements/button";
import { layoutClasses } from "../css/layout-classes";


@customElement('page-home')
export class PageHome extends LitElement {
    render() {
        return html`
            <!-- <scaling-container style="max-height: 3rem">
                <h1>Home! Hello Nicolas</h1>
            </scaling-container>
            <scaling-container>
                <app-button @click="${() => { window.location.pathname = "/challenges" }}">Challenges</app-button>
            </scaling-container>
            <scaling-container>
                <app-button>Prizes</app-button>
            </scaling-container>
            <scaling-container>
                <app-button>Numbers</app-button>
            </scaling-container> -->

            <div class="column">
                <h1>Home</h1>

                <app-button @click="${() => { window.location.pathname = "/challenges" }}">Challenges</app-button>
                <app-button>Prizes</app-button>    
                <app-button>Numbers</app-button>
                <div>
                </div>
            </div>
        `
    }

    static styles = [
        layoutClasses,
        css`
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
