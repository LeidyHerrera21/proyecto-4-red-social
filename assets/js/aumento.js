document.addEventListener("DOMContentLoaded", function () {
    const btnTexto = document.getElementById("btn-texto");
    const menuTexto = document.getElementById("menu-texto");
    const aumentarTexto = document.getElementById("aumentar-texto");
    const reducirTexto = document.getElementById("reducir-texto");
    let fontSize = 16;

    // Mostrar/ocultar menú al hacer clic en el botón flotante
    btnTexto.addEventListener("click", function () {
        menuTexto.style.display = (menuTexto.style.display === "block") ? "none" : "block";
    });

    // Aumentar tamaño del texto
    aumentarTexto.addEventListener("click", function () {
        fontSize += 2;
        document.body.style.fontSize = fontSize + "px";
    });

    // Reducir tamaño del texto
    reducirTexto.addEventListener("click", function () {
        if (fontSize > 10) {
            fontSize -= 2;
            document.body.style.fontSize = fontSize + "px";
        }
    });

    // Ocultar menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!btnTexto.contains(event.target) && !menuTexto.contains(event.target)) {
            menuTexto.style.display = "none";
        }
    });
});
