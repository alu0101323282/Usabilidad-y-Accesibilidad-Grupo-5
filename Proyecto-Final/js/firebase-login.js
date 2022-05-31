import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

const loginEmail = document.getElementById('log-in-email');
const loginPassword = document.getElementById('log-in-password');
const btnLogIn = document.getElementById('log-in-boton');
const btnLogout = document.getElementById('log-out-boton');



btnLogIn.addEventListener('click', e => {
    e.preventDefault();
    // Obtener email y pass
    // TODO: comprobar que el email sea real
    const email = loginEmail.value;
    const password = loginPassword.value;
    const auth = getAuth();
    // Sign in  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("Iniciado correctamente");
    window.location.href="/Proyecto-Final/index.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
    const mensaje = document.getElementById('error-log-in');
    mensaje.classList.remove('hide');
  });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      console.log('no logueado');
      // User is signed out
      // ...
    }
  });
});;

btnLogout.addEventListener('click', e => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth);
});

