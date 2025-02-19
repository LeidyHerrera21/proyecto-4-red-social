<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajustar tamaño del texto</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        #contenido {
            font-size: 16px;
            max-width: 600px;
            margin: auto;
        }
        .boton {
            padding: 10px;
            margin: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Ajustar tamaño del texto</h1>
    <p id="contenido">Este es un texto de ejemplo. Puedes aumentar o disminuir su tamaño usando los botones.</p>
    <button class="boton" id="btn-aumentar-texto">Aumentar texto</button>
    <button class="boton" id="btn-reducir-texto">Reducir texto</button>
    
    <script>
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
    </script>
</body>
</html>
