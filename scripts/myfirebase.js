// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDoc} from "firebase/firestore"; 

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
const db = getFirestore(app);
const auth = getAuth(app);
var admin = '';
var user = '';

function signinInfo(data) {
      signInWithEmailAndPassword(auth, data['user-email'], data.password)
      .then((userCredential) => {
          // Signed in          
          user = userCredential.user;
          alert('Hello ' + user.email + ' Nice!');
          window.localStorage.setItem('emailForSignIn', userCredential.user.email);
          window.location.href='./inbox.html';
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage + 'error code: ' +  errorCode);
      })
}

async function submitInfo(object) {
  admin = (await getDoc(doc(db, 'users','manager'))).data();
  try {
    const docRef = await addDoc(collection(db, admin), object);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  alert('Submitted');
}

function initSubmit() {
  const formElems = document.querySelectorAll("form");

  if (!formElems) {return;}
  formElems.forEach((formElem) => {
    console.log(formElem);
    formElem.addEventListener("submit", (e) => {
      e.preventDefault();
      new FormData(formElem);
    });

    formElem.addEventListener("formdata", (e) => {
      const date = new Date().toLocaleString("en-US");
      const data = e.formData;
      let locEl   = formElem.querySelector('select.location');
      let retunEl = formElem.querySelector('select.returning');
      let loc = '';
      if ( locEl ) loc = locEl.value;
      let retun = '';
      if ( retunEl ) retun = retunEl.value;
      
      data.append("location", loc);
      data.append("new-patient", retun);
      data.append("updated-time", date);
      var object = {};
      data.forEach((value, key) => object[key] = value);
      if(document.querySelector('#auth-form')) {
        signinInfo(object);
      } else {
        submitInfo(object);
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", initSubmit);

