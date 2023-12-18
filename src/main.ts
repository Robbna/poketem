import "./main.css";

import App from "./App.vue";

import { createApp } from "vue";
import { router } from "./router";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import BaseSpinner from "./common/components/base_spinner/BaseSpinner.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BaseSpinner: typeof BaseSpinner;
  }
}

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(PrimeVue);

app.component("BaseSpinner", BaseSpinner);

app.mount("#app");
