{/* <div id="inboxes"> */}
// Created by Beomsu Kim on Dec.12th 2023
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore"; 

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

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// load from firebase


// function clearItems(parent) {
//     while (parent.hasChildNodes())
//         parent.removeChild(parent.firstChild)
// }

// function updateDisplay() {
//     clearItems(document.querySelector('#experiences'));
//     display_items(load_items(0));
// }

// function displayItem(item) {
//     const expE = document.querySelector('#experiences');
//     if( !checkFit(experinece) ) return;
//     // CreateElement
//     if ("content" in document.createElement("template")) {
//         const template = document.querySelector("#experience-template");
//         // Clone
//         const clone = template.content.cloneNode(true);
//         const skilllist = clone.querySelector('#skills-box')
//         appendArray(skilllist, experinece.label)
//         clone.querySelector('#job'    ).textContent = experinece.title
//         clone.querySelector('#company').textContent = experinece.company
//         clone.querySelector('#from'   ).textContent = experinece.from
//         clone.querySelector('#to'     ).textContent = experinece.to
//         clone.querySelector('#city'   ).textContent = experinece.city
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

// function display_items(data) {
//     const exp = data.experience;
//     const projs= data.projects;    
//     exp.forEach(displayExp);
//     projs.forEach(displayProj);
//     addClickCopy();
//     addClickBlock();
// }

// // firebase->localStorage
// async function importJSON() { 
//     fetch("./data.json") 
//         .then((res) => { 
//         return res.json(); 
//     }) 
//     .then((data) => {
//         store_items(data,0);
//         return data;
//     });
// }

// function init() {
//     importJSON();

//     let data = load_items(0);

//     // append skills buttons
//     const skillsEBox = document.querySelector('details.skills');
//     appendSkillButtons(skillsEBox,data.skills);

//     display_items(data);
// }

// window.addEventListener("DOMContentLoaded", init);