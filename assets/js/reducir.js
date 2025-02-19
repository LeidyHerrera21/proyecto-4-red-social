document.addEventListener("DOMContentLoaded", function () {
    const btnReducirTexto = document.getElementById("btn-reducir-texto");
    let fontSize = 16;

    btnAumentarTexto.addEventListener("click", function () {
        fontSize -= 2;
        document.body.style.fontSize = fontSize + "px";
    });
});
