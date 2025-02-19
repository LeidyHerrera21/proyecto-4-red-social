 document.addEventListener("DOMContentLoaded", function () {
      const btnAumentarTexto = document.getElementById("btn-aumentar-texto");
      const btnReducirTexto = document.getElementById("btn-reducir-texto");
      let fontSize = 16;
      const contenido = document.getElementById("contenido");

            btnAumentarTexto.addEventListener("click", function () {
                fontSize += 2;
                contenido.style.fontSize = fontSize + "px";
            });

            btnReducirTexto.addEventListener("click", function () {
                if (fontSize > 10) { // Evita que el texto sea demasiado pequeño
                    fontSize -= 2;
                    contenido.style.fontSize = fontSize + "px";
                }
            });
 });

