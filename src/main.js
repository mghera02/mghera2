import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import smoothscroll from 'smoothscroll-polyfill';

import landingPage from './components/landingPage.vue';
import Home from './components/Home.vue';
import Gallery from './components/Gallery.vue';
import HolocronPage from './components/HolocronPage.vue';
import VoicePage from './components/VoicePage.vue';
import Portfolio from './components/Portfolio.vue';
import PrintPage from './components/3DPrintPage.vue';

smoothscroll.polyfill();

const routes = [
  { path: '/', component: landingPage },
  { path: '/Home', component: Home },
  { path: '/Gallery', component: Gallery },
  { path: '/HolocronPage', component: HolocronPage },
  { path: '/VoicePage', component: VoicePage },
  { path: '/Portfolio', component: Portfolio },
  { path: '/PrintPage', component: PrintPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
