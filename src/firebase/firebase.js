// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBSZnarpdKVeGh5sikbxhDXElR8PRvvc8",
    authDomain: "caldero-envios.firebaseapp.com",
    projectId: "caldero-envios",
    storageBucket: "caldero-envios.appspot.com",
    messagingSenderId: "455012053818",
    appId: "1:455012053818:web:0dcf6467bd0406561bd603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app, auth };