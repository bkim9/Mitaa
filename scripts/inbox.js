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
    const inboxE = document.querySelector('#inboxes');
    // CreateElement
    if ("content" in document.createElement("template")) {
        const template = document.querySelector("#inbox-template");
        // Clone
        console.log(template);
        const clone = template.content.cloneNode(true);
        // console.log(itemData);
        // console.log(itemData["name"]);

        clone.querySelector('.name'       ).textContent = itemData.name
        clone.querySelector('.new-patient').textContent = itemData["new-patient"]
        clone.querySelector('.email'      ).textContent = itemData.email
        clone.querySelector('.location'   ).textContent = itemData.location
        clone.querySelector('.mobile'     ).textContent = itemData.mobile
        clone.querySelector('.note'       ).textContent = itemData.story
        inboxE.appendChild(clone);
    }
}

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

function display_items(data) {
    data.forEach(displayItem);
}

async function init() {
    let data = await getDocs(collection(db, "users"));
    display_items(data);
}

window.addEventListener("DOMContentLoaded", init);


// https://firebase.google.com/docs/firestore/query-data/get-data
// Get multiple documents from a collection,
// Get all documents in a collection

// https://firebase.google.com/docs/web/module-bundling
// Using Firebase with Rollup

// https://stackoverflow.com/questions/30950032/how-can-i-run-multiple-npm-scripts-in-parallel
