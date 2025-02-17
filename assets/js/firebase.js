// Importar Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBTLAhAUZyK2Hfw4lySSJuRaSJ9S8yKa3M",
    authDomain: "grupofundades-96cfa.firebaseapp.com",
    projectId: "grupofundades-96cfa",
    storageBucket: "grupofundades-96cfa.appspot.com",
    messagingSenderId: "11636375123",
    appId: "1:11636375123:web:2fbe1610eb85baa19650a6",
    measurementId: "G-749PF5EWP1"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const auth = firebase.auth();

// Crear botón de inicio de sesión en la parte superior derecha
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.createElement("button");
    loginButton.id = "login-google";
    loginButton.textContent = "Iniciar sesión con Google";
    loginButton.style.position = "absolute";
    loginButton.style.top = "10px";
    loginButton.style.right = "10px";
    loginButton.style.padding = "10px 15px";
    loginButton.style.backgroundColor = "#00485E";
    loginButton.style.color = "white";
    loginButton.style.border = "none";
    loginButton.style.borderRadius = "5px";
    loginButton.style.cursor = "pointer";
    document.body.appendChild(loginButton);

// Función para iniciar sesión con Google
document.getElementById("login-google").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Usuario autenticado:", result.user);
            alert(`Bienvenido, ${result.user.displayName}`);
        })
        .catch((error) => {
            console.error("Error en autenticación:", error);
        });
});
