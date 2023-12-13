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

// function displayItem(item) {
//     const expE = document.querySelector('#inboxes');
//     if( !checkFit(experinece) ) return;
//     // CreateElement
//     if ("content" in document.createElement("template")) {
//         const template = document.querySelector("#experience-template");
//         // Clone
//         const clone = template.content.cloneNode(true);
//         const skilllist = clone.querySelector('#skills-box')
//         appendArray(skilllist, experinece.label)
//         clone.querySelector('.name'    ).textContent = experinece.title
//         clone.querySelector('.email').textContent = experinece.company
//         clone.querySelector('.mobile'   ).textContent = experinece.from
//         clone.querySelector('.to'     ).textContent = experinece.to
//         clone.querySelector('.city'   ).textContent = experinece.city
//         const desclist = clone.querySelector('#desc')
//         appendArray(desclist, experinece.desc)
//         // hidden-desc
//         const hiddenDesc = clone.querySelector('#hidden-desc')
//         appendArray(hiddenDesc, experinece.desc, true)
//         // appendChild
//         expE.appendChild(clone);
//     }
// }

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
    data.forEach(displayInbox);
}

async function init() {

    let data = getDocs(collection(db, "users"));

    console.log(data);
    // display_items(data);
}

window.addEventListener("DOMContentLoaded", init);


// https://firebase.google.com/docs/firestore/query-data/get-data
// Get multiple documents from a collection,
// Get all documents in a collection

// https://firebase.google.com/docs/web/module-bundling
// Using Firebase with Rollup

// https://stackoverflow.com/questions/30950032/how-can-i-run-multiple-npm-scripts-in-parallel
