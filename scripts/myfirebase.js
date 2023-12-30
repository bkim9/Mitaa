// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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
      let loc   = formElem.querySelector('select.location' ).value;
      let retunEl = formElem.querySelector('select.returning');
      let retun = '';
      if ( retunEl ) retun = retunEl.value;
      

      // // for referral form
      // let pfn      = formElem.querySelector('#patient-fname').value;
      // let pln      = formElem.querySelector('#patient-lname').value;
      // let pEmail   = formElem.querySelector('#patient-email').value;
      // let pPhone   = formElem.querySelector('#patient-tel').value;
      // let pDob     = formElem.querySelector('#dob').value;
      // let pGender  = formElem.querySelector('')
      // let facility = formElem.querySelector('#facility-name').value;
      // let dName    = formElem.querySelector('#doctor-name').value;
      // let dPhon    = formElem.querySelector('#doctor-tel').value;
      // let dEmail   = formElem.querySelector('#doctor-email').value;
      // let submiter = formElem.querySelector('#submiter-name').value;
      // let story = formElem.querySelector('#story').value;

      data.append("location", loc);
      data.append("new-patient", retun);
      data.append("updated-time", date);
      console.log(data);
      submitInfo(data);
    });
  });
}

window.addEventListener("DOMContentLoaded", initSubmit);

// function sendEmail(name, email, message) {
//     email.send({
//         Host: "smtp.gmail.com",
//         Username: 'kbbss96@gmail.com',
//         Password: 'acewrgjwsybbeiyt',
//         To: "kbbss96@gmail.com",
//     })
// }