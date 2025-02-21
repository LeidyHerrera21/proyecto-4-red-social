document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const faqOptions = document.getElementById("faq-options");
    const volverBtn = document.getElementById("volver-btn");
    const daltonismoBtn = document.getElementById("modo-daltonismo");

    // Lista de preguntas y respuestas frecuentes con enlaces clickeables
    const faqData = [
        {
            question: "¿Cuál es el número de contacto?",
            answer: 'Puedes contactarnos al número <a href="https://api.whatsapp.com/send/?phone=51949565477&text=Hola%21+Necesito+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0" target="_blank" style="color: #00485E; font-weight: bold;">+51 949 565 477</a>.'
        },
        
        {
            question: "¿Dónde se encuentran?",
            answer: 'Nos ubicamos en <a href="https://www.google.com/maps/dir//Jr.+Alfredo+Silva+180+Barranco+15063/@-12.1552622,-77.023144,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105b7925cf938af:0x64a15cb7e048ce75!2m2!1d-77.023144!2d-12.1552622?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" style="color: #00485E; font-weight: bold;">Jr. Alfredo Silva 180, Barranco</a>.'
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
