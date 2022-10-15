import { Router } from "@vaadin/router";

function initRouter() {
    const router = new Router(document.getElementById("main"));
    router.setRoutes([
        { path: "/", component: "page-home", action: () => { import("./pages/home") } },
        { path: "/dev", component: "page-dev", action: () => { import("./pages/developer") } },
        { path: "/update", component: "page-update-available", action: () => { import("./pages/update-available") } },
        { path: "/challenges", component: "page-challenges", action: () => { import("./pages/challenges") } },
        { path: "/challenges/teeth", component: "page-challenge-teeth", action: () => { import("./pages/challenge-brushing-teeth") } },
        { path: "/challenges/teeth/active", component: "page-challenge-teeth-active", action: () => { import("./pages/challenge-brushing-teeth-active") } },
    ])
}

window.addEventListener("load", () => {
    initRouter()
})