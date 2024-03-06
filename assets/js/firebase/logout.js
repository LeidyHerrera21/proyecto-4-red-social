// Define una función para cerrar la sesión
function cerrarSesion() {
    // Realiza las acciones necesarias para cerrar la sesión,
    // como limpiar cookies, eliminar tokens de sesión, redireccionar a la página de inicio de sesión, etc.
    
    // Se elimina un token de sesión almacenado en localStorage:
    localStorage.removeItem('token');

    // Luego redireccionas a la página de inicio de sesión
    window.location.href = 'index.html';
}

// Agrega un event listener al enlace de cierre de sesión
document.getElementById('cerrar_sesion').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    cerrarSesion(); // Llama a la función de cierre de sesión
});