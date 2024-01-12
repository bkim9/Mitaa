import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
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
const auth = getAuth(app);
const db  = getFirestore(app);

var firebase = require('firebase');
var firebaseui = require('firebaseui');

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// function clearItems(parent) {
//     while (parent.hasChildNodes())
//         parent.removeChild(parent.firstChild)
// }

// function updateDisplay() {
//     clearItems(document.querySelector('#experiences'));
//     display_items(load_items(0));
// }

function appendLi(parent, itemData, check, text) {
    const liClone = document.querySelector('#list-element').content.cloneNode(true);
    if ( itemData[check] ) {
        liClone.querySelector('li').textContent = text;
        parent.appendChild(liClone);
    }
}

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
            clone.querySelector('.patient-name').textContent = itemData['patient-fname'] + ' ' + itemData['patient-lname'];
            clone.querySelector('.location').textContent = itemData['location'];

            clone.querySelector('.doctor-email').textContent = itemData['doctor-email'];
            clone.querySelector('.doctor-facility').textContent = itemData['doctor-facility'];
            clone.querySelector('.doctor-name').textContent = itemData['doctor-name'];
            clone.querySelector('.doctor-tel').textContent = itemData['doctor-tel'];

            
            const gender = ( itemData['patient-male'] )? 'Male': 'Female';

            clone.querySelector('.patient-dob').textContent = itemData['patient-dob'];
            clone.querySelector('.patient-tel').textContent = itemData['patient-tel'];
            clone.querySelector('.patient-email').textContent = itemData['patient-email'];
            clone.querySelector('.patient-gender').textContent = gender;
            clone.querySelector('.patient-story').textContent = itemData['patient-story'];

            const reasonsEl = clone.querySelector('.reasons');
            appendLi(reasonsEl, itemData, 'reason-alzheimer', 'Alzheimer');
            appendLi(reasonsEl, itemData, 'reason-headache', 'Headache');
            appendLi(reasonsEl, itemData, 'reason-insomnia', 'Insomnia');
            appendLi(reasonsEl, itemData, 'reason-neck', 'Neck');

            const servicesEl = clone.querySelector('.services-requested');
            
            appendLi(servicesEl, itemData, 'service-eeg', 'EEG');
            appendLi(servicesEl, itemData, 'service-hot', 'HBOT');
            appendLi(servicesEl, itemData, 'service-leqembi', 'LEQEMBI');
            appendLi(servicesEl, itemData, 'service-other', 'Other');            
            appendLi(servicesEl, itemData, 'service-special', 'Special');
            appendLi(servicesEl, itemData, 'service-tms', 'TMS');

            const languagesEl = clone.querySelector('.patient-lans');
            appendLi(languagesEl, itemData, 'lan-eng', 'English');
            appendLi(languagesEl, itemData, 'lan-kor', 'Korean');
            appendLi(languagesEl, itemData, 'lan-spa', 'Spanish');
            appendLi(languagesEl, itemData, 'lan-oth', 'Other');

            clone.querySelector('.submitter-name').textContent = itemData['submitter-name'];
            referralInboxE.appendChild(clone);        
        } else {
            const template = document.querySelector("#inbox-appointment-template");
            // Clone
            console.log(template);
            const clone = template.content.cloneNode(true);
            clone.querySelector('.update-time').textContent = itemData["updated-time"];
            clone.querySelector('.name'       ).textContent = itemData.name;
            clone.querySelector('.new-patient').textContent = itemData["new-patient"];
            clone.querySelector('.email'      ).textContent = itemData.email
            clone.querySelector('.location'   ).textContent = itemData.location.trim();
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
