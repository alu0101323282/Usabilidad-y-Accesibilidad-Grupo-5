// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, addDoc,doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"     //Importamos SDK de Firebase JS (de CDN) En concreto la libreria Cloud Firestore
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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
const auth = getAuth(app);

export const saveUser= (nombre,apellido,email,password) => {

  addDoc(collection(db, 'Usuarios'),{nombre, apellido, email, password})

}

export const getUser = (id)=> getDoc(doc(db, 'Usuarios', id));   //exportamos 
export const updateUser =(id, newfields)=> updateDoc(doc(db, 'Usuarios',id),newfields)




createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

