import { createApp } from "vue";
import App from "./App.vue";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = true;

const app = createApp(App);

app.use(VueSweetalert2);
app.mount("#app");