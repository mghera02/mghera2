import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import VueMeta from 'vue-meta';

Vue.use(VueMeta);

createApp(App).use(VueGtag, {
    config: {id: "G-0RRKBDQ9B3"}
}).mount("#app")