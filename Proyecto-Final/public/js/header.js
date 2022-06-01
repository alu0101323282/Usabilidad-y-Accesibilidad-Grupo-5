import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";


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

function cerrarSesion() {
    const auth = getAuth();
    signOut(auth);
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('sexo');
    localStorage.removeItem('pais');
    localStorage.removeItem('birthday');
    localStorage.removeItem('codigo-postal');
    localStorage.removeItem('correo');
    localStorage.removeItem('contraseña');
    localStorage.setItem('login', false);
    console.log('eliminado');
}

if(localStorage.getItem('login') === 'true') {
    console.log(localStorage.getItem('login'));
    $('#op1').text('Cerrar sesión');
    let op1 = document.getElementById('op1');
    op1.onclick = () => {cerrarSesion();};
    $('#op2').text('Mi Perfil');
    $('#op2').attr('href', 'perfil.html');
}