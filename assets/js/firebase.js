// Importar Firebase desde la CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

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
const auth = getAuth(app);
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
