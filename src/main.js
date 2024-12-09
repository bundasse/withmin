import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import store from './store';
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App)

library.add(faMagnifyingGlass)

app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
