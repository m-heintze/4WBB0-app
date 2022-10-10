import { LitElement } from "lit";
export declare class AppButton extends LitElement {
    red: boolean;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "app-button": AppButton;
    }
}
