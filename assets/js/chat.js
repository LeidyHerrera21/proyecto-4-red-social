document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const faqOptions = document.getElementById("faq-options");
    const volverBtn = document.getElementById("volver-btn");
    const daltonismoBtn = document.getElementById("modo-daltonismo");

    // Lista de preguntas y respuestas frecuentes con enlaces clickeables
    const faqData = [
        { 
            question: "¿Cuál es el número de contacto?", 
            answer: 'Puedes contactarnos al número +51 949 565 477.' 
        },
        { 
            question: "¿Dónde se encuentran?", 
            answer: 'Nos ubicamos en <a href="https://www.google.com/maps/place/Jr.+Alfredo+Silva+180,+Barranco+15063/@-12.155262,-77.023144,17z" target="_blank" style="color: #00485E; font-weight: bold;">Jr. Alfredo Silva 180, Barranco</a>.' 
        },
        { 
            question: "¿Cuáles son los horarios de atención?", 
            answer: "Nuestro horario es de lunes a viernes de 8:30 AM a 5:30 PM." 
        },
        { 
            question: "¿Cómo puedo hacer una donación?", 
            answer: 'Puedes donar a través de nuestra web en la sección Donaciones.' 
        },
        { 
            question: "¿Cómo puedo ser voluntario?", 
            answer: 'Para ser voluntario, completa el formulario en nuestra sección de Voluntariado.' 
        },
        { 
            question: "¿Cómo puedo enviar mi CV?", 
            answer: 'Puedes enviarnos tu CV en la sección Trabaja con Nosotros ubicada en el menú principal.' 
        }
    ];

    // Función para mostrar preguntas frecuentes como botones
    function loadFaqOptions() {
        faqOptions.innerHTML = ""; // Limpiar opciones previas
        faqData.forEach(item => {
            const button = document.createElement("button");
            button.textContent = item.question;
            button.classList.add("faq-button");
            button.addEventListener("click", () => showChatResponse(item.question, item.answer));
            faqOptions.appendChild(button);
        });
    }

    // Función para mostrar la respuesta en el chat con HTML permitido
    function showChatResponse(question, answer) {
        const userMessage = document.createElement("p");
        userMessage.textContent = `👤 ${question}`;
        userMessage.classList.add("user-message");

        const botMessage = document.createElement("p");
        botMessage.innerHTML = `🤖 ${answer}`; // Permitir enlaces HTML
        botMessage.classList.add("bot-message");

        chatBox.appendChild(userMessage);
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll
    }

    // Cargar preguntas frecuentes al iniciar
    loadFaqOptions();

    // Botón volver (redirecciona a la página principal)
    volverBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    // Modo Daltonismo
    daltonismoBtn.addEventListener("click", function () {
        document.body.classList.toggle("daltonismo");
        if (document.body.classList.contains("daltonismo")) {
            localStorage.setItem("modoDaltonismo", "activado");
        } else {
            localStorage.removeItem("modoDaltonismo");
        }
    });

    // Cargar preferencia de daltonismo
    if (localStorage.getItem("modoDaltonismo") === "activado") {
        document.body.classList.add("daltonismo");
    }
});
