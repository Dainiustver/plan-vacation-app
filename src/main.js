import { createApp } from "vue";

import App from "./App.vue";
import store from "./store/store.js";
import router from "./router.js";
import "./assets/style.css";

import BaseButton from "./components/ui/BaseButton.vue";
import BaseContainer from "./components/ui/BaseContainer.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-container", BaseContainer);

app.use(router);
app.use(store);
app.mount("#app");
