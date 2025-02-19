// Importar Firebase desde la CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBTLAhAUZyK2Hfw4lySSJuRaSJ9S8yKa3M",
    authDomain: "grupofundades-96cfa.firebaseapp.com",
    projectId: "grupofundades-96cfa",
    storageBucket: "grupofundades-96cfa.firebasestorage.app", // Corregido
    messagingSenderId: "11636375123",
    appId: "1:11636375123:web:67a29b9e9fc1b1989650a6",
    measurementId: "G-HC27GER130"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Se agregó la importación
const provider = new GoogleAuthProvider();

// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-google");

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log("Usuario autenticado:", result.user);
                    alert(`Bienvenido, ${result.user.displayName}`);
                })
                .catch((error) => {
                    console.error("Error en autenticación:", error);
                    alert("Error en autenticación, revisa la consola.");
                });
        });
    }
});
