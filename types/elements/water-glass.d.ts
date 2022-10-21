import { LitElement } from 'lit';
import { DeviceAPI } from "../external/device-api";
export declare class WaterGlass extends LitElement {
    percentageFilled: number;
    deviceAPI: DeviceAPI;
    constructor();
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'water-glass': WaterGlass;
    }
}
