// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
import { collection, addDoc } from "firebase/firestore"; 

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
const db = getFirestore(app);

window.addEventListener("DOMContentLoaded", initSubmit);

function initSubmit() {
  const formElem = document.querySelector("form");
  formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    new FormData(formElem);
  });

  formElem.addEventListener("formdata", (e) => {
    const data = e.formData;
    console.log(formElem);
    var loc = formElem.querySelector('select.location').value;
    var retun = formElem.querySelector('select.returning').value;
    data.append("location", loc)
    data.append("new-patient", retun)
    submitInfo(data);
    // var json = JSON.stringify(object);
  });
}

async function submitInfo(info) {
  var object = {};
  info.forEach((value, key) => object[key] = value);
  try {
    const docRef = await addDoc(collection(db, "users"), object);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}









// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  });
}






// when the app has the browser focus
// onMessage(messaging, (payload)=> {
//   console.log('Message received. ', payload);
// })


async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

function sendEmail(name, email, message) {
    email.send({
        Host: "smtp.gmail.com",
        Username: 'kbbss96@gmail.com',
        Password: 'acewrgjwsybbeiyt',
        To: "kbbss96@gmail.com",
    })
}