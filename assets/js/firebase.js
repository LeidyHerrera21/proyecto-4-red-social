// Importar Firebase desde la CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAduPITzMNE_YUDyRU-3D2WK5tT4j55mrY",
    authDomain: "infodis-2d6a2.firebaseapp.com",
    projectId: "infodis-2d6a2",
    storageBucket: "infodis-2d6a2.appspot.com",
    messagingSenderId: "475388865279",
    appId: "1:475388865279:web:5be08752c0c78a6974faca",
    measurementId: "G-ECZC6Y9JJG"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-google");

    if (!loginButton) return;

 // Detectar cambios en la autenticación
onAuthStateChanged(auth, (user) => {
    if (user) {
        loginButton.innerHTML = `<img src="img/descarga.png" alt="Google Logo"> Cerrar sesión`;
        loginButton.classList.add("logout");
    } else {
        loginButton.innerHTML = `<img src="img/descarga.png" alt="Google Logo"> Iniciar sesión`;
        loginButton.classList.remove("logout");
    }
});


    // Manejar clic en el botón (iniciar o cerrar sesión)
    loginButton.addEventListener("click", () => {
        const user = auth.currentUser;
        if (user) {
            // Si hay usuario, cerrar sesión
            signOut(auth).then(() => {
                alert("Sesión cerrada correctamente.");
            }).catch((error) => {
                console.error("Error al cerrar sesión:", error);
            });
        } else {
            // Si no hay usuario, iniciar sesión con Google
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log("Usuario autenticado:", result.user);
                    alert(`Bienvenido, ${result.user.displayName}`);
                })
                .catch((error) => {
                    console.error("Error en autenticación:", error);
                    alert("Error en autenticación, revisa la consola.");
                });
        }
    });
});
    