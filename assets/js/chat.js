document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const faqOptions = document.getElementById("faq-options");
    const volverBtn = document.getElementById("volver-btn");
    const daltonismoBtn = document.getElementById("modo-daltonismo");

    // Lista de preguntas y respuestas frecuentes con enlaces clickeables
    const faqData = [
        {
            question: "¿Cuál es el número de contacto?",
            answer: 'Puedes contactarnos al número  511-391-3300.'
        },
        {
            question: "¿Dónde se encuentran?",
            answer: 'Nos ubicamos en <a href="https://bit.ly/3wZQY7v" target="_blank" style="color: #00485E; font-weight: bold;">Jr. Alfredo Silva 180, Barranco</a>.'
        },
        {
            question: "¿Cuáles son los horarios de atención?",
            answer: "Nuestro horario es de lunes a viernes de 8:30 AM a 5:30 PM."
        },
        {
            question: "¿Qué servicios ofrece Infodis Perú?",
            answer: 'Conexión entre empresas inclusivas y personas con discapacidad, Buscador de instituciones y servicios para personas con discapacidad, Noticias, eventos y talleres actualizados sobre discapacidad e inclusión y Cursos de capacitación gratuitos, como Call Center, para fomentar habilidades laborales.'
        },
        {
            question: "¿Infodis Perú cobra por sus servicios?",
            answer: 'No, los servicios y capacitaciones ofrecidos por Infodis Perú son gratuitos.'
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
