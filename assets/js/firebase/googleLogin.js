import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from './show_message.js';

const googlebuttom = document.querySelector('#google-login')

googlebuttom.addEventListener('click', async () =>{

    const provider = new GoogleAuthProvider();

    // Forzar la selección de cuenta
    provider.setCustomParameters({
        prompt: 'select_account',
    });

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)

    
        showMessage("Bienvenid@ " + credentials.user.displayName, "success");

        setTimeout(() => {
            localStorage.setItem("user", credentials.user);
            window.location.href = "principal.html";
        }, 2000);


    } catch (error) {
        console.log(error)
    }

})