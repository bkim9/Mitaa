import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs} from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyBAA028ZEhA_ylFS1zut-h9mvp5V6aoFw4",
    authDomain: "mitaa-401922.firebaseapp.com",
    projectId: "mitaa-401922",
    storageBucket: "mitaa-401922.appspot.com",
    messagingSenderId: "736885150902",
    appId: "1:736885150902:web:192b10aa8e26abd20d4217",
    measurementId: "G-5EE34K29KR"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// function clearItems(parent) {
//     while (parent.hasChildNodes())
//         parent.removeChild(parent.firstChild)
// }

// function updateDisplay() {
//     clearItems(document.querySelector('#experiences'));
//     display_items(load_items(0));
// }

function displayItem(item) {
    const itemData = item.data()
    const appointmentInboxE = document.querySelector('#inboxes-appointment');
    const referralInboxE = document.querySelector('#inboxes-referral');
    // CreateElement
    if (appointmentInboxE && referralInboxE && "content" in document.createElement("template")) {
        if( itemData["doctor-name"] ) {
            const template = document.querySelector("#inbox-referral-template");
            // Clone
            console.log(template);
            const clone = template.content.cloneNode(true);
            clone.querySelector('.update-time').textContent = itemData["updated-time"];
            clone.querySelector('.doctor-email').textContent = itemData['doctor-email'];
            clone.querySelector('.doctor-facility').textContent = itemData['doctor-facility'];
            clone.querySelector('.doctor-name').textContent = itemData['doctor-name'];
            clone.querySelector('.doctor-tel').textContent = itemData['doctor-tel'];
            clone.querySelector('.lan-eng').textContent = itemData['lan-eng'];
            clone.querySelector('.lan-kor').textContent = itemData['lan-kor'];
            clone.querySelector('.lan-oth').textContent = itemData['lan-oth'];
            clone.querySelector('.location').textContent = itemData['location'];
            
            clone.querySelector('.patient-dob').textContent = itemData['patient-dob'];
            clone.querySelector('.patient-email').textContent = itemData['patient-email'];
            clone.querySelector('.patient-dob').textContent = itemData['patient-dob'];
            clone.querySelector('.patient-email').textContent = itemData['patient-email'];
            clone.querySelector('.patient-name').textContent = itemData['patient-fname'] + ' ' + itemData['patient-lname'];
            clone.querySelector('.patient-gender').textContent = itemData['patient-male'];
            clone.querySelector('.patient-story').textContent = itemData['patient-story'];
            clone.querySelector('.patient-tel').textContent = itemData['patient-tel'];

            clone.querySelector('.reasons').textContent = 'line 58';
            // clone.querySelector('reason-alzheimer').textContent = itemData['reason-alzheimer'];
            // clone.querySelector('reason-headache').textContent = itemData['reason-headache'];
            // clone.querySelector('reason-insomnia').textContent = itemData['reason-insomnia'];
            // clone.querySelector('reason-neck').textContent = itemData['reason-neck'];

            clone.querySelector('.services-requested').textContent = 'line64';
            // clone.querySelector('service-eeg').textContent = itemData['service-eeg'];
            // clone.querySelector('service-hot').textContent = itemData['service-hot'];
            // clone.querySelector('service-leqembi').textContent = itemData['service-leqembi'];
            // clone.querySelector('service-other').textContent = itemData['service-other'];
            // clone.querySelector('service-special').textContent = itemData['service-special'];
            // clone.querySelector('service-tms').textContent = itemData['service-tms'];

            clone.querySelector('.submitter-name').textContent = itemData['submitter-name'];
            referralInboxE.appendChild(clone);        
        }else {
            const template = document.querySelector("#inbox-appointment-template");
            // Clone
            console.log(template);
            const clone = template.content.cloneNode(true);
            clone.querySelector('.update-time').textContent = itemData["updated-time"];
            clone.querySelector('.name'       ).textContent = itemData.name;
            clone.querySelector('.new-patient').textContent = itemData["new-patient"];
            clone.querySelector('.email'      ).textContent = itemData.email
            clone.querySelector('.location'   ).textContent = itemData.location
            clone.querySelector('.mobile'     ).textContent = itemData.mobile
            clone.querySelector('.note'       ).textContent = itemData.story
            appointmentInboxE.appendChild(clone);
        }
    }
}

function display_items(data) {
    data.forEach(displayItem);
}

async function init() {
    let data = await getDocs(collection(db, "users"));
    display_items(data);
}

window.addEventListener("DOMContentLoaded", init);

// /** 
//  * loads the current data from storage and appends
//  *
//  *  @return {Object[]|null} Article Array object from local storage or null if missing
//  */

// function load_items(storage_key) {
//     let items = JSON.parse(window.localStorage.getItem(storage_key));
//     if (!items) {
//         return [];
//     } else {
//         return items;
//     }
// }
  
// /**
//  * Stores items in localStorage
//  *
//  *  @param {Object[]} items - array of items to store
//  */
// function store_items(items, storage_key) {
//     window.localStorage.setItem(storage_key, JSON.stringify(items));
// }




// https://firebase.google.com/docs/firestore/query-data/get-data
// Get multiple documents from a collection,
// Get all documents in a collection

// https://firebase.google.com/docs/web/module-bundling
// Using Firebase with Rollup

// https://stackoverflow.com/questions/30950032/how-can-i-run-multiple-npm-scripts-in-parallel
