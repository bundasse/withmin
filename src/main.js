import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
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

app.use(router)
app.use(firebase)

app.mount('#app')
