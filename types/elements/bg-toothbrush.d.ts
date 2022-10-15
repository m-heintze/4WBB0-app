import { LitElement } from 'lit';
import "./scaling-container";
import "./button";
export declare class BgToothbrush extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'bg-toothbrush': BgToothbrush;
    }
}
