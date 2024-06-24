import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { VueGtag } from 'vue-gtag-next';

import landingPage from './components/landingPage.vue';
import Home from './components/Home.vue';
import Gallery from './components/Gallery.vue';
import HolocronPage from './components/HolocronPage.vue';
import VoicePage from './components/VoicePage.vue';
import Portfolio from './components/Portfolio.vue';
import PrintPage from './components/3DPrintPage.vue';

const routes = [
  { path: '/', component: landingPage },
  { path: '/Home', component: Home },
  { path: '/Gallery', component: Gallery },
  { path: '/HolocronPage', component: HolocronPage },
  { path: '/VoicePage', component: VoicePage },
  { path: '/Portfolio', component: Portfolio },
  { path: '/PrintPage', component: PrintPage }
];

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(VueGtag, {
  property: {
    id: 'G-0RRKBDQ9B3'
  }
}, router);

app.use(router);
app.mount('#app');
