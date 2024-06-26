import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "/router";
import { gsap } from "gsap";

const app = createApp(App);
app.use(router, gsap);
app.mount("#app");

