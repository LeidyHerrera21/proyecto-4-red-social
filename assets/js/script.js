window.onload = function () {
    // 📌 Validación del formulario de CV
    const cvForm = document.getElementById('cv-form');
    if (cvForm) {
        cvForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fileInput = document.getElementById('cv');
            const file = fileInput.files[0];
            const validTypes = ["application/pdf", "application/msword", 
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

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
        changeBackgroundImage(); // Ejecutar al inicio
    }

    // 📌 Header con scroll (sin sobrecargar eventos)
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 📌 Acordeón de "Nosotros" (solo uno abierto a la vez)
    const aboutTitles = document.querySelectorAll('.about-title');
    if (aboutTitles.length > 0) {
        aboutTitles.forEach(title => {
            title.addEventListener('click', () => {
                // Cierra los demás
                document.querySelectorAll('.about-item').forEach(item => {
                    if (item !== title.parentElement) item.classList.remove('active');
                });
                // Alternar el seleccionado
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

    // 📌 Mover la barra de búsqueda al header (mejor manejo de errores)
    const searchContainer = document.querySelector('.search-container');
    if (header && searchContainer) {
        header.appendChild(searchContainer);
    }

    // 📌 Redirección al chatbot
    const chatbotButton = document.getElementById('chatbot-button');
    if (chatbotButton) {
        chatbotButton.addEventListener('click', () => window.location.href = 'chat.html');
    }
};
