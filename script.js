document.getElementById("cambio").textContent = "Adios";
document.getElementById("cambio").style.color = "orange";

const titulo = document.getElementById('clickeable');
const boton = document.getElementById('click');

boton.addEventListener('click', () => {
  titulo.style.color = 'brown';
});