import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
    config: {
        id: 'G-0RRKBDQ9B3',
        params: {
            send_page_view: false
        }
    }
}, App)

createApp(App).mount('#app')
