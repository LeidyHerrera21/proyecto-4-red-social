document.addEventListener("DOMContentLoaded", function () {
    const btnAumentarTexto = document.getElementById("btn-aumentar-texto");
    let fontSize = 16;

    btnAumentarTexto.addEventListener("click", function () {
        fontSize -= 2;
        document.body.style.fontSize = fontSize + "px";
    });
});
