document.addEventListener("DOMContentLoaded", function () {
    const volverBtn = document.getElementById("volver-btn");

    if (volverBtn) {
        volverBtn.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    } else {
        console.error("No se encontró el botón con ID 'volver-btn'");
    }
});
