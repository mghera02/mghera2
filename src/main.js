import { createApp } from 'vue';
import App from './App.vue';
import VueGtag from 'vue-gtag';
import { createMetaManager } from 'vue-meta';

const app = createApp(App);

// Use VueGtag plugin
app.use(VueGtag, {
  config: { id: 'G-0RRKBDQ9B3' }
});

// Create a meta manager and assign it to the app's component option 'meta'
const metaManager = createMetaManager();
app.component('meta', metaManager);

// Mount the app
app.use(metaManager).mount('#app');
