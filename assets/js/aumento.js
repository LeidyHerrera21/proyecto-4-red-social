document.addEventListener("DOMContentLoaded", function () {
    const btnAumentarTexto = document.getElementById("btn-aumentar-texto");
     const btnReducirTexto = document.getElementById("btn-reducir-texto");
    let fontSize = 16;

    btnAumentarTexto.addEventListener("click", function () {
        fontSize += 2;
        document.body.style.fontSize = fontSize + "px";
    });
});

// Reducir tamaño del texto
    btnReducirTexto.addEventListener("click", function () {
        if (fontSize > 10) {
            fontSize -= 2;
            document.body.style.fontSize = fontSize + "px";
        }
    });
