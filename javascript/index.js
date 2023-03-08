function maquina_escribir(texto, tiempo_espera, elemento) {
    let i = 0;
    function agregarLetra() {
      if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
        setTimeout(agregarLetra, tiempo_espera);
      }
    }
    agregarLetra();
  }
  
  let texto = "Curriculum Vitae: Francisco Pablo Dominguez";
  let tiempo_espera = 100; // tiempo en milisegundos entre cada letra
  let elemento = document.getElementById("texto"); // elemento HTML donde se agregará el texto
  
  maquina_escribir(texto, tiempo_espera, elemento);

  // Obtener los elementos necesarios
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

// Función para abrir la ventana modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Función para cerrar la ventana modal
span.onclick = function() {
  modal.style.display = "none";
}

// Función para cerrar la ventana modal cuando se hace clic fuera de ella
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}