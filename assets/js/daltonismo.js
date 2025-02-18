document.addEventListener("DOMContentLoaded", () => {
    const botonDaltonismo = document.getElementById("modo-daltonismo");

    // Cargar preferencia al iniciar la página
    if (localStorage.getItem("modoDaltonismo") === "activado") {
        document.body.classList.add("daltonismo");
        botonDaltonismo.checked = true;
    }

    botonDaltonismo.addEventListener("change", () => {
        document.body.classList.toggle("daltonismo");

        if (document.body.classList.contains("daltonismo")) {
            localStorage.setItem("modoDaltonismo", "activado");
        } else {
            localStorage.removeItem("modoDaltonismo");
        }
    });
});
