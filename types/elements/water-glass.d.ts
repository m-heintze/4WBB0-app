import { LitElement } from 'lit';
export declare class WaterGlass extends LitElement {
    percentageFilled: number;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'water-glass': WaterGlass;
    }
}
