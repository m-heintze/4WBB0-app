import { LitElement } from 'lit';
export declare class PageUpdateAvailable extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Updates the app. The new service worker is already ready to go, and has the needed contents downloaded.
     */
    updateApp(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'page-update-available': PageUpdateAvailable;
    }
}
