import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
apiKey: import.meta.env.VITE_APIKEY,
authDomain: "withmin-c9467.firebaseapp.com",
projectId: "withmin-c9467",
storageBucket: "withmin-c9467.firebasestorage.app",
messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
appId: import.meta.env.VITE_APPID
};  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();
const db = firebase.firestore();
const storage= firebase.storage();

export default {auth,db,storage}