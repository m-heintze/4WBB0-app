import { LitElement } from 'lit';
import "../elements/scaling-container";
import "../elements/button";
export declare class PageHome extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'page-home': PageHome;
    }
}
