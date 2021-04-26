import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey:"AIzaSyDAbEBL0-JSAob8vy71FQBs7TNGY8SlxNY",
    authDomain: "ux308-final.firebaseapp.com",
    projectId: "ux308-final",
    storageBucket: "ux308-final.appspot.com",
    messagingSenderId: "369464697812",
    appId: "1:369464697812:web:c4e1e5a2fd48a637dfac41"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };