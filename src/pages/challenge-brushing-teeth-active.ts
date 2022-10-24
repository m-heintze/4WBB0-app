import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Router } from "@vaadin/router";

import "../elements/button";
import "../elements/bg-toothbrush";
import "../elements/water-meter";
import { layoutClasses } from "../css/layout-classes";


@customElement('page-challenge-teeth-active')
export class PageChallengeTeethActive extends LitElement {
    render() {
        return html`
            <bg-toothbrush></bg-toothbrush>

            <div class="column">
                <h1>Brush your teeth</h1>

                <water-meter></water-meter>

                <app-button @click="${() => { Router.go("/challenge/done?p=" + window.sessionStorage.getItem("percentage")); window.sessionStorage.setItem("percentage", "0") }}">Finished!</app-button>
                <app-button red=true @click="${() => { Router.go("/challenges/teeth") }}">Stop</app-button>
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

            water-meter {
                margin: 2rem 0;
            }
        `
    ]
}

declare global {
    interface HTMLElementTagNameMap {
        'page-challenge-teeth-active': PageChallengeTeethActive
    }
}
