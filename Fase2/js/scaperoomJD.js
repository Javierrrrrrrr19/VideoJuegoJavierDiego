/*
* ESCENAS:
*   - ESCENA1: Se ve la mansión
*   - ESCENA2: Pasillo
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
function entrada() {
  // Oculto la puerta, ya no vamos a utilizarla
  document.getElementById("puerta").style.display = "none";
  // Muestro los acertijos, para entrar a la mansión
  document.getElementById("acertijos").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Para entrar a la casa debes de resolver 3 acertijos";
  document.getElementById("parrafo2").innerHTML = "";
}
let contenedor = document.getElementById("divincorrecto");
let texto = document.createElement("span");
contenedor.appendChild(texto);
function respuesta() {
  // Recojo la respuesta y lo paso a minúscula
  let respuesta = document.getElementById("respuesta").value.toLowerCase();
  //Si la respuesta es esteban oculto el div y cambio el mensaje
  if (respuesta == "esteban") {
    document.getElementById("pregunta").innerHTML = "Tienes una cerilla y entras en una habitación oscura con <br>-una vela, <br>-una lampara de aceite <br>-una chimenea<br> ¿Que enciendes primero?";
    document.getElementById("parrafo1").innerHTML = "Para entrar a la casa debes de resolver 2 acertijos";
    document.getElementById("respuesta").value = "";
  //Si la respuesta es cerilla oculto el div y cambio el mensaje
  } else if (respuesta == "cerilla") {
    document.getElementById("pregunta").innerHTML = "Tom mide 1,80 y trabaja en una carnieceriá y lleva zapatos de la talla 45<br> ¿Que pesa?";
    document.getElementById("parrafo1").innerHTML = "Para entrar a la casa debes de resolver 1 acertijo";
    document.getElementById("respuesta").value = "";
  //Si la respuesta es carne oculto el div y cambio el mensaje
  } else if (respuesta == "carne") {
    document.getElementById("acertijos").style.display = "none";
    document.getElementById("parrafo1").innerHTML = "Oyes una melodía que proviene de una de las habitaciones";
    document.getElementById("principal").style.backgroundImage = "url(img/Pasillo.png)";
    document.getElementById("respuesta").value = "";
  } else {//Si la respuesta no es alguna de las anteriores indico que se ha equivocado
    texto.textContent = "Respuesta incorrecta";
    contenedor.style.backgroundColor = "lightcoral";
  }
}
// Desde ESCENA2: Al superar los acertijos cambia a la escena2
function derechaBlok() {
  //Muestro el mensaje
  document.getElementById("parrafo1").innerHTML = "Necesitas un código para abrir la puerta";
}
//Desde ESCENA3: Habitación 1
function entradaIzq() {
  // Oculto la puerta de la izquierda y la derecha, ya no vamos a utilizarla
  document.getElementById("izquierda").style.display = "none";
  document.getElementById("derechaBlock").style.display = "none";
  //Cambio el fondo
  document.getElementById("principal").style.backgroundImage = "url(img/hab1.png)";
  //Muestro la caja de música
  document.getElementById("cajamusica").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Encuentra la caja música";
}
function codigo() {
  // Oculto la puerta de la izquierda, ya no vamos a utilizarla
  document.getElementById("cajamusica").style.display = "none";
  //Cambio el fondo
  document.getElementById("principal").style.backgroundImage = "url(img/hab1.png)";
  //Mostramos el código
  document.getElementById("codigo").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "J-Este código lo puedar en la otra puerta";
}
function volver() {
  //Oculto el código
  document.getElementById("codigo").style.display = "none";
  //Cambio el fondo
  document.getElementById("principal").style.backgroundImage = "url(img/Pasillo.png)";
  //Muestro los nuevos trigger de las puertas
  document.getElementById("izquierdaBlock").style.display = "block";
  document.getElementById("derecha").style.display = "block";
  //Muestro el mensaje
  document.getElementById("parrafo1").innerHTML = "J-Probemos";
}
function izquierdaBlock() {
  //Muestro el mensaje
  document.getElementById("parrafo1").innerHTML = "Para que volver aquí";
}
//Desde ESCENA3: Habitación 1
function entradaDer() {
  // Oculto la puerta de la izquierda, ya no vamos a utilizarla
  document.getElementById("derecha").style.display = "none";
  document.getElementById("izquierdaBlock").style.display = "none";
  //Mostramos para intoducir el código
  document.getElementById("codigoP").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Pon el código";
}
//Desde ESCENA3: Habitación 2
let contenedordos = document.getElementById("divincorrecto2");
let textodos = document.createElement("span");
contenedordos.appendChild(textodos);
function probar() {
  // Recojo la respuesta y lo paso a número
  let respuesta = document.getElementById("codigoAceptado").valueAsNumber;
  //Si la respuesta es correcta oculto el div y cambio el mensaje
  if (respuesta == 1985) {
    document.getElementById("codigoP").style.display = "none";
    document.getElementById("principal").style.backgroundImage = "url(img/hab2.png)";
    document.getElementById("parrafo1").innerHTML = "Encuentra las llaves";
    document.getElementById("codigoAceptado").value = "";
  } else {//Si la respuesta no es alguna de las anteriores indico que se ha equivocado
    textodos.textContent = "Respuesta incorrecta";
    contenedordos.style.backgroundColor = "lightcoral";
  }
}
// Desde ESCENA2: Al hacer click en el interruptor, se enciende la luz... Sólo si estaba apagada
function enciende() {
  // Cambio la imagen de fondo cuando enciendo la luz
  document.getElementById("principal").style.backgroundImage = "url(img/sotanoEncendido.jpg)";
  // Ponemos la imagen del interruptor más nítido
  document.getElementById("interruptor").style.backgroundImage = "url(img/interruptor.png)";
  // Evitamos que el interruptor vuelva a ser pulsado, desactivando los eventos de ratón
  document.getElementById("interruptor").style.pointerEvents = "none";
  //
}
// Desde ESCENA3: Al hacer click en la pata de Togo, aparece el perro

// Desde ESCENA4: Idea un nuevo evento que desencadene alguna acción en tu página