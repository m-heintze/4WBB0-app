import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Router } from "@vaadin/router";

import "../elements/button";
import "../elements/bg-toothbrush";
import { layoutClasses } from "../css/layout-classes";


@customElement('page-challenge-teeth')
export class PageChallengeTeeth extends LitElement {
    render() {
        return html`
            <bg-toothbrush></bg-toothbrush>

            <div class="column">
                <h1>Brush your teeth</h1>

                <!-- <h2>Placeholder for the emoji calendar.</h2> -->
                <img src="/calendar.png">

                <!-- TODO: Create page that should appear when clicking the start button. -->
                <app-button @click="${() => { Router.go("/challenges/teeth/active") }}">Start!</app-button>
                <app-button red=true @click="${() => { Router.go("/challenges") }}">Back</app-button>
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

            img {
                display: block;
                padding-top: 2rem;
                padding-bottom: 4rem;
            }
        `
    ]
}

declare global {
    interface HTMLElementTagNameMap {
        'page-challenge-teeth': PageChallengeTeeth
    }
}
