/*
* ESCENAS:
*   - ESCENA1: Se ve la mansión
*   - ESCENA2: Se ve el sótano sin luz
*   - ESCENA3: Se ve el sótano encendido
*   - ESCENA4: Se ve a Togo en el sótano encendido
*   - ESCENA5: Idea alguna escena más. Incorpora nuevos objetos que activen eventos.
*/

/*
*  NOTA IMPORTANTE:
*  A diferencia de CSS, donde las rutas relativas lo son desde la localización del fichero CSS,
*  las rutas relativas en un JavaScript, aunque esté en fichero aparte, lo son desde la raiz del proyecto !!!!!
*/

// Desde ESCENA1: Al hacer click en la puerta de la mansión cambia a la escena2
function entra() {
  // Cambio la imagen de fondo cuando entro en la mansión.
  document.getElementById("principal").style.backgroundImage = "url(img/sotanoApagado.jpg)";
  // Oculto la puerta, ya no vamos a utilizarla
  document.getElementById("puerta").style.display = "none";
  // Muestro el interruptor, no se verá muy bien
  document.getElementById("interruptor").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Oyes a Togo en el sótano.";
  document.getElementById("parrafo2").innerHTML = "Al bajar, se cierra la puerta y te quedas a oscuras.";
  document.getElementById("parrafo3").innerHTML = "Busca un interruptor";
}
// Desde ESCENA2: Al hacer click en el interruptor, se enciende la luz... Sólo si estaba apagada
function enciende() {
  // Cambio la imagen de fondo cuando enciendo la luz
  document.getElementById("principal").style.backgroundImage = "url(img/sotanoEncendido.jpg)";
  // Ponemos la imagen del interruptor más nítido
  document.getElementById("interruptor").style.backgroundImage = "url(img/interruptor.png)";
  // Evitamos que el interruptor vuelva a ser pulsado, desactivando los eventos de ratón
  document.getElementById("interruptor").style.pointerEvents = "none";
  // Mostramos la pata de Togo
  document.getElementById("pata").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Ahora que ves bien, puedes buscar a Togo";
  document.getElementById("parrafo2").innerHTML = "¿Dónde puede estar?";
  document.getElementById("parrafo3").innerHTML = "";
}
// Desde ESCENA3: Al hacer click en la pata de Togo, aparece el perro
function saleTogo() {
  // Ocultamos la pata de Togo
  document.getElementById("pata").style.display = "none";
  // Mostramos a Togo encima de la alfombra
  document.getElementById("togo").style.display = "block";
  // Cambio el mensaje del bocadillo.
  document.getElementById("parrafo1").innerHTML = "Bien has encontrado a tu perro Togo";
  document.getElementById("parrafo2").innerHTML = "Ya puedes volver a casa";
  document.getElementById("parrafo3").innerHTML = "";
}
// Desde ESCENA4: Idea un nuevo evento que desencadene alguna acción en tu página