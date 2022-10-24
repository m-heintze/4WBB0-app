import { css, html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Router } from "@vaadin/router";

import "../elements/button";
import "../elements/bg-blocked";
import { layoutClasses } from "../css/layout-classes";


@customElement('page-challenge-done')
export class PageChallengeDone extends LitElement {
    render() {
        let param = (new URL(window.location.href).searchParams.get("p"))
        if (param == null) param = "0"
        const percentage = Math.min(parseInt(param), 100)
        const smileyNum = Math.max(Math.ceil(percentage / 20), 1)
        const smileyUrl = "/s-hq-" + smileyNum + ".png"

        const howYouDid: string[] = [
            "You are great!",
            "Nice job!",
            "Hmmmm, you've done better",
            "You did very poorly",
            "A disappointment",
        ]

        const nextText: string[] = [
            "Continue like this!",
            "Continue like this!",
            "You can do better",
            "You can do better",
            "You can do better",
        ]

        return html`
            <bg-blocked></bg-blocked>
            
            <div class="column">
                <h1>${howYouDid[smileyNum - 1]}</h1>
            
                <img src="${smileyUrl}">
            
                <h2>${nextText[smileyNum - 1]}</h2>
            
                <app-button @click="${() => { Router.go("/") }}">Home</app-button>
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
        'page-challenge-done': PageChallengeDone
    }
}
