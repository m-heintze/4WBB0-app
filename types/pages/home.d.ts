import { LitElement } from 'lit';
import "../elements/button";
import "../elements/bg-blocked";
export declare class PageHome extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
    testRequest(): Promise<void>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'page-home': PageHome;
    }
}
