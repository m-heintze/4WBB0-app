import { LitElement } from 'lit';
import { DeviceAPI } from "../external/device-api";
export declare class WaterGlass extends LitElement {
    private _percentageFilled;
    set percentageFilled(p: number);
    get percentageFilled(): number;
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
