import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore, doc, getDoc} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";


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

const loginEmail = document.getElementById('log-in-email');
const loginPassword = document.getElementById('log-in-password');
const btnLogIn = document.getElementById('log-in-boton');
const btnLogout = document.getElementById('log-out-boton');



btnLogIn.addEventListener('click', e => {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;
    const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const userId = user.uid;
    localStorage.setItem('login', true);
    actualizarPerfil(userId);
    console.log("Iniciado correctamente");
    // ...
  })
  .catch((error) => {
    console.log('ERROR' + error.message);
    const mensaje = document.getElementById('error-log-in');
    mensaje.classList.remove('hide');
  });
});;

const actualizarPerfil = async (userId) => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const user = docSnap.data();
      await localStorage.setItem('nombre', user.name);
      await localStorage.setItem('apellidos', user.surname);
      await localStorage.setItem('sexo', user.sex);
      await localStorage.setItem('pais', user.country);
      await localStorage.setItem('birthday', user.birthday);
      await localStorage.setItem('codigo-postal', user.postcode);
      await localStorage.setItem('correo', user.email);
      await localStorage.setItem('contraseña', user.password);
      return window.location.href = '/Proyecto-Final/public/index.html';
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }



btnLogout.addEventListener('click', e => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth);
});

