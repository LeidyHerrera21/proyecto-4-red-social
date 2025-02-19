document.addEventListener("DOMContentLoaded", function () {
    const btnReducirTexto = document.getElementById("btn-reducir-texto");
    let fontSize = 16;


// Reducir tamaño del texto
    btnReducirTexto.addEventListener("click", function () {
        if (fontSize > 10) {
            fontSize -= 2;
            document.body.style.fontSize = fontSize + "px";
        }
    });
