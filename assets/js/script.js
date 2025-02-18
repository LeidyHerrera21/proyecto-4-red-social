// Validación del formulario de CV
const cvForm = document.getElementById('cv-form');

if (cvForm) {
    cvForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fileInput = document.getElementById('cv');
        const file = fileInput.files[0];

        if (file && (file.type === 'application/pdf' || 
                     file.type === 'application/msword' || 
                     file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
            alert('Gracias por enviar tu currículum. Nos pondremos en contacto contigo pronto.');
            cvForm.reset();
        } else {
            alert('Por favor, sube un archivo válido en formato PDF (.pdf) o Word (.doc, .docx).');
        }
    });
}

// Cambio de imágenes de fondo
const heroImages = document.querySelectorAll('.hero-image');
let currentImageIndex = 0;

if (heroImages.length > 0) {
    function changeBackgroundImage() {
        heroImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].classList.add('active');
    }

    setInterval(changeBackgroundImage, 5000);
}

// Header con scroll
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Acordeón de "Nosotros"
const aboutTitles = document.querySelectorAll('.about-title');

if (aboutTitles.length > 0) {
    aboutTitles.forEach(title => {
        title.addEventListener('click', () => {
            const aboutItem = title.parentElement;
            aboutItem.classList.toggle('active');
        });
    });
}

// Barra de búsqueda
const searchButton = document.getElementById('search-button');

if (searchButton) {
    searchButton.addEventListener('click', function () {
        let query = document.getElementById('search-bar').value;
        alert('Búsqueda: ' + query); // Puedes reemplazar esto con la funcionalidad deseada
    });
}

// Mover la barra de búsqueda al header
document.addEventListener('DOMContentLoaded', function () {
    let searchContainer = document.querySelector('.search-container');
    let header = document.querySelector('header');

    if (searchContainer && header) {
        header.appendChild(searchContainer);
    } else {
        console.error('No se encontró la barra de búsqueda o el header.');
    }
});

// Redirección al chatbot
const chatbotButton = document.getElementById('chatbot-button');

if (chatbotButton) {
    chatbotButton.addEventListener('click', function () {
        window.location.href = 'chat.html'; // Redirige a la página del chat
    });
}
