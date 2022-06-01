
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, setDoc} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB287HKSMIQCqshWHKQ-RsKZbwZQ2QPcQA",
  authDomain: "ullwear-f473d.firebaseapp.com",
  projectId: "ullwear-f473d",
  storageBucket: "ullwear-f473d.appspot.com",
  messagingSenderId: "453993810232",
  appId: "1:453993810232:web:c56161e18438cd7bcd19cd",
  measurementId: "G-B3W1DZDVR4"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore();
const usersRef = collection(db, 'users');

export const saveUser = async (userId, name, surname, email, password, sex, birthday, country, postcode) => {
  await setDoc(doc(usersRef, userId),{name, surname, email, password, sex, birthday, country, postcode});
  return window.location.href="./login.html";
}

const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const txtName = document.getElementById('nombre');
const txtSurname = document.getElementById('apellidos');
const txtBirthday = document.getElementById('birthday');
const txtCountry = document.getElementById('pais');
const txtPostcode = document.getElementById('codigo-postal');
const btnSignUp = document.getElementById('boton');

btnSignUp.addEventListener('click', e => {
    e.preventDefault();
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      const userId = user.uid;
      console.log("El id es: " + userId);
      const name = txtName.value;
      const surname = txtSurname.value;
      let sex = 'Hombre';
      if ($("#woman").prop("checked")) {     
        sex = 'Mujer';
      }
      const birthday = txtBirthday.value;
      let country = 'España';
      if (txtCountry.value === '1') {     
        country = 'Francia';
      } else if (txtCountry.value === '2') {
        country = 'Alemania';
      } else if (txtCountry.value === '3') {
        country = 'Portugal';
      }
      const postcode = txtPostcode.value;
      saveUser(userId, name, surname, email, password, sex, birthday, country, postcode);
    })
    .catch((error) => {
      console.log(error.message);
      const mensaje = document.getElementById('error-sign-in');
      mensaje.classList.remove('hide');
  });
});






  
