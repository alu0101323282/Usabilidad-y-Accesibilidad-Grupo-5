
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
// Import the functions you need from the SDKs you need
const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const btnSignUp = document.getElementById('boton');
  // Añadir evento signup
btnSignUp.addEventListener('click', e => {
    e.preventDefault();
    // Obtener email y pass
    // TODO: comprobar que el email sea real
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = getAuth();
    // Sign in
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.location.href="/Proyecto-Final/login.html";
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
      const mensaje = document.getElementById('error-sign-in');
      mensaje.classList.remove('hide');
      // ..
  });

  });



  
