const texto = { hide: true };

document.write('<button onclick="hide(texto)">Mostrar / Ocultar</button>');

const text = document.getElementById("text");

function hide(texto) {
  texto.hide = !texto.hide;
  if (texto.hide) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}