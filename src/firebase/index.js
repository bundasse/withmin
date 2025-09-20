import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyBjyC1N08oKfhM0VKdhk5_-TCBJq98IA8Q',
    authDomain: "withmin-c9467.firebaseapp.com",
    projectId: "withmin-c9467",
    storageBucket: "withmin-c9467.firebasestorage.app",
    messagingSenderId: '442896909281',
    appId: '1:442896909281:web:8d36ea0917f6deb64708a0'
    };  
    

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.firestore()

export { auth , db }