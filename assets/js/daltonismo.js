document.addEventListener("DOMContentLoaded", () => {
    const botonDaltonismo = document.getElementById("modo-daltonismo");

    // Cargar preferencia guardada
    if (localStorage.getItem("modoDaltonismo") === "activado") {
        document.body.classList.add("daltonismo");
        botonDaltonismo.checked = true;
    }

    // Evento de cambio en el botón
    botonDaltonismo.addEventListener("change", () => {
        document.body.classList.toggle("daltonismo");

        if (document.body.classList.contains("daltonismo")) {
            localStorage.setItem("modoDaltonismo", "activado");
        } else {
            localStorage.removeItem("modoDaltonismo");
        }
    });
});
