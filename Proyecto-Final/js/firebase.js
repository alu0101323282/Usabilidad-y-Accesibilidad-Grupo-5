// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, addDoc,doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"     //Importamos SDK de Firebase JS (de CDN) En concreto la libreria Cloud Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv3pLJyuZDam_igF4beIJS2G7NV9t72nM",
  authDomain: "fir-javascript-b7b77.firebaseapp.com",
  projectId: "fir-javascript-b7b77",
  storageBucket: "fir-javascript-b7b77.appspot.com",
  messagingSenderId: "477006593010",
  appId: "1:477006593010:web:d8a386f776ad192a4ac96b"
};

const app= initializeApp(firebaseConfig);

const db= getFirestore();

export const saveUser= (nombre,apellido,telefono) => {

  addDoc(collection(db, 'users'),{nombre, apellido, telefono})

}

export const getUser = (id)=> getDoc(doc(db, 'users', id));   //exportamos 
export const updateUser =(id, newfields)=> updateDoc(doc(db, 'users',id),newfields)

