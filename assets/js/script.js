window.onload = function () {
    // 📌 Menú Hamburguesa solo en móviles
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        // Cerrar menú si se hace clic en un enlace
        document.querySelectorAll("nav ul li a").forEach(link => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }

    // 📌 Validación del formulario de CV
    const cvForm = document.getElementById('cv-form');
    if (cvForm) {
        cvForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fileInput = document.getElementById('cv');
            const file = fileInput.files[0];
            const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

            if (file && validTypes.includes(file.type)) {
                alert('Gracias por enviar tu currículum. Nos pondremos en contacto contigo pronto.');
                cvForm.reset();
            } else {
                alert('Por favor, sube un archivo válido en formato PDF (.pdf) o Word (.doc, .docx).');
            }
        });
    }

    // 📌 Cambio de imágenes de fondo con transición suave
    const heroImages = document.querySelectorAll('.hero-image');
    let currentImageIndex = 0;

    if (heroImages.length > 0) {
        function changeBackgroundImage() {
            heroImages.forEach((img, index) => img.style.opacity = index === currentImageIndex ? "1" : "0");
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        }
        setInterval(changeBackgroundImage, 5000);
        changeBackgroundImage();
    }

    // 📌 Header con scroll (sin sobrecargar eventos)
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // 📌 Acordeón de "Nosotros"
    const aboutTitles = document.querySelectorAll('.about-title');
    if (aboutTitles.length > 0) {
        aboutTitles.forEach(title => {
            title.addEventListener('click', () => {
                document.querySelectorAll('.about-item').forEach(item => {
                    if (item !== title.parentElement) item.classList.remove('active');
                });
                title.parentElement.classList.toggle('active');
            });
        });
    }

    // 📌 Barra de búsqueda con Enter y botón
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    if (searchBar && searchButton) {
        function performSearch() {
            const query = searchBar.value.trim();
            if (query) {
                alert(`Búsqueda: ${query}`); // Reemplazar con funcionalidad real
            }
        }
        searchButton.addEventListener('click', performSearch);
        searchBar.addEventListener('keypress', (e) => {
            if (e.key === "Enter") performSearch();
        });
    }

    // 📌 Redirección al Chat IA
    const chatBotButton = document.getElementById("chatbot-button");
    if (chatBotButton) {
        chatBotButton.addEventListener("click", function () {
            window.location.href = "chat.html";
        });
    } else {
        console.error("⚠️ Error: No se encontró el botón de Chat IA");
    }
};
