import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('page-update-available')
export class PageUpdateAvailable extends LitElement {
  render() {
    return html`
      <h1>Update available</h1>
      <p>The update is already downloaded. Press the button the update! Expect a page refresh.</p>
      <button @click=${this.updateApp}>Update now!</button>
    `
  }

  /**
   * Updates the app. The new service worker is already ready to go, and has the needed contents downloaded.
   */
  updateApp() {
    // Check if we can communicate with the service worker.
    // If not true, this function will never get called because the device does not support service workers.
    if (!navigator.serviceWorker.controller) return
    // Ask the service worker to allow the waiting service worker to become active.
    navigator.serviceWorker.getRegistration().then(reg => {
        if (!reg) { console.log("nope"); return; }
        if (!reg.waiting) { console.log("nope"); return; }

        reg.waiting.postMessage("skipWaiting pls")
    })
    console.log("asked kindly");

    // detect new sw being active
    navigator.serviceWorker.controller.addEventListener("statechange", () => {
        // reload page, by changing paths to the home screen.
        window.location.pathname = ""
    })

  }
}

declare global {
  interface HTMLElementTagNameMap {
    'page-update-available': PageUpdateAvailable
  }
}
