import { LitElement } from 'lit';
import "./water-glass";
export declare class WaterMeter extends LitElement {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'water-meter': WaterMeter;
    }
}
