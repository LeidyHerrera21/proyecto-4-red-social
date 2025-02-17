document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const volverBtn = document.getElementById("volver-btn");

    // Función para agregar mensajes al chat
    function agregarMensaje(texto, clase) {
        let mensaje = document.createElement("div");
        mensaje.textContent = texto;
        mensaje.classList.add("message", clase);
        chatBox.appendChild(mensaje);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Evento para enviar mensaje
    sendButton.addEventListener("click", function () {
        let mensajeUsuario = userInput.value.trim();
        if (mensajeUsuario !== "") {
            agregarMensaje("Tú: " + mensajeUsuario, "user-message");

            setTimeout(() => {
                agregarMensaje("IA: Lo siento, pero aún estoy en desarrollo.", "bot-message");
            }, 500);
            userInput.value = "";
        }
    });

    // Permitir enviar con Enter
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });

    // Volver a la página principal
    volverBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
