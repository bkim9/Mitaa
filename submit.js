// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAA028ZEhA_ylFS1zut-h9mvp5V6aoFw4",
  authDomain: "mitaa-401922.firebaseapp.com",
  projectId: "mitaa-401922",
  storageBucket: "mitaa-401922.appspot.com",
  messagingSenderId: "736885150902",
  appId: "1:736885150902:web:192b10aa8e26abd20d4217",
  measurementId: "G-5EE34K29KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);


function sendEmail(name, email, message) {
    email.send({
        Host: "smtp.gmail.com",
        Username: 'kbbss96@gmail.com',
        Password: 'acewrgjwsybbeiyt',
        To: "kbbss96@gmail.com",
        
    })
}