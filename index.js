// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getDatabase,
    ref,
    child,
    get,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByUsWKozi5IX4IstNwbHGhQLPcJz15GQs",
    authDomain: "fir-test-3af26.firebaseapp.com",
    projectId: "fir-test-3af26",
    storageBucket: "fir-test-3af26.appspot.com",
    messagingSenderId: "436991631154",
    appId: "1:436991631154:web:4781044a0f3c00de31412b",
    measurementId: "G-GVTWK80SK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const messages = ref(database, '/messages');

onValue(messages, (snapshot) => {

    //console.log(snapshot);

    const ul = document.getElementById("messages");
    ul.replaceChildren();

    snapshot.forEach((childSnapshot) => {

        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        console.log(childKey);
        console.log(childData);

        const text = document.createTextNode(childData.messages);
        const li = document.createElement("li");

        li.appendChild(text);
        ul.appendChild(li);
    });

}, {
    onlyOnce: false
});