// Funcionalidad del modo daltonismo
document.getElementById("modo-daltonismo").addEventListener("click", () => {
    document.body.classList.toggle("daltonismo");

    // Guardar preferencia en LocalStorage
    if (document.body.classList.contains("daltonismo")) {
        localStorage.setItem("modoDaltonismo", "activado");
    } else {
        localStorage.removeItem("modoDaltonismo");
    }
});

// Cargar preferencia al iniciar la página
if (localStorage.getItem("modoDaltonismo") === "activado") {
    document.body.classList.add("daltonismo");
}
