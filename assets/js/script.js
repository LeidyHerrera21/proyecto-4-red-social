const cvForm = document.getElementById('cv-form');

cvForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('cv');
    const file = fileInput.files[0];

    if (file && (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
        alert('Gracias por enviar tu currículum. Nos pondremos en contacto contigo pronto.');
        cvForm.reset();
    } else {
        alert('Por favor, sube un archivo válido (PDF o Word).');
    }
});

const heroImages = document.querySelectorAll('.hero-image');
let currentImageIndex = 0;

function changeBackgroundImage() {

    heroImages[currentImageIndex].classList.remove('active');


    currentImageIndex = (currentImageIndex + 1) % heroImages.length;


    heroImages[currentImageIndex].classList.add('active');
}

setInterval(changeBackgroundImage, 5000);

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const aboutTitles = document.querySelectorAll('.about-title');

aboutTitles.forEach(title => {
    title.addEventListener('click', () => {
        const aboutItem = title.parentElement; 
        aboutItem.classList.toggle('active'); 
    });
});
