import { createApp } from "vue";
import App from "./App.vue";

// PrimeVue
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import "primevue/resources/themes/mdc-dark-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

// VueSweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Codemirror
import { basicSetup } from 'codemirror';
import VueCodemirror from 'vue-codemirror';

globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = true;

const app = createApp(App);

app.use(VueCodemirror, {
  autofocus: true,
  disabled: false,
  indentWithTab: true,
  tabSize: 2,
  placeholder: 'Code goes here...',
  extensions: [basicSetup]
});
app.use(PrimeVue);
app.component('Dialog', Dialog);
app.component('Pbutton', Button);
app.use(VueSweetalert2);
app.mount("#app");