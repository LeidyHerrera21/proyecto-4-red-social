const botonPublicar = document.getElementById('boton-publicar');
const cuadroFlotante = document.querySelector('.cuadro-flotante');

botonPublicar.addEventListener('click', () => {
  cuadroFlotante.style.visibility = 'visible';
});

cuadroFlotante.addEventListener('submit', (e) => {
  e.preventDefault();

  // Captura la información del formulario
  const titulo = e.target.titulo.value;
  const contenido = e.target.contenido.value;

});



