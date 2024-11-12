import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {initializeApp} from "firebase/app";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "withmin-c9467.firebaseapp.com",
  projectId: "withmin-c9467",
  storageBucket: "withmin-c9467.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

const firebase = initializeApp(firebaseConfig)
const app = createApp(App)

library.add(faMagnifyingGlass)
  
app.use(router)
app.use(firebase)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
