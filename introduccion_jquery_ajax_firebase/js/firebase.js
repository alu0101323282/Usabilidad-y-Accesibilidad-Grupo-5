// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDCZe7_OnjsRFB6iwvhTShu49c2LWTGx2w",

  authDomain: "uya-definitivo.firebaseapp.com",

  databaseURL: "https://uya-definitivo-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "uya-definitivo",

  storageBucket: "uya-definitivo.appspot.com",

  messagingSenderId: "525072438633",

  appId: "1:525072438633:web:ee1263a3fe765240c199f8",

  measurementId: "G-RG8P2JDDFS"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

import { getDatabase } from "firebase/database";

const database = getDatabase();

import { getDatabase, ref, set } from "firebase/database";

document.getElementById('formulario').addEventListener('submit',writeUserData);

function writeUserData() {
  let nombre = document.getElementById('first_name').value;
    let apellido = document.getElementById('last_name').value;
    let telefono = document.getElementById('phone_number').value;

  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: nombre,
    email: apellido,
    profile_picture : telefono
  });
}

