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
    texto.textContent = "";
  //Si la respuesta es cerilla oculto el div y cambio el mensaje
  } else if (respuesta == "cerilla") {
    document.getElementById("pregunta").innerHTML = "Tom mide 1,80 y trabaja en una carnieceriá y lleva zapatos de la talla 45<br> ¿Que pesa?";
    document.getElementById("parrafo1").innerHTML = "Para entrar a la casa debes de resolver 1 acertijo";
    document.getElementById("respuesta").value = "";
    texto.textContent = "";
  //Si la respuesta es carne oculto el div y cambio el mensaje
  } else if (respuesta == "carne") {
    document.getElementById("acertijos").style.display = "none";
    document.getElementById("parrafo1").innerHTML = "Oyes una melodía que proviene de una de las habitaciones";
    document.getElementById("principal").style.backgroundImage = "url(img/Pasillo.png)";
    document.getElementById("respuesta").value = "";
    texto.textContent = "";
  } else {//Si la respuesta no es alguna de las anteriores indico que se ha equivocado
    texto.textContent = "Respuesta incorrecta. Solo una palabra por respuesta(Por si acaso)";
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
  document.getElementById("parrafo1").innerHTML = "Encuentra la caja de música";
}
function codigo() {
  // Oculto la puerta de la izquierda, ya no vamos a utilizarla
  document.getElementById("cajamusica").style.display = "none";
  //Cambio el fondo
  document.getElementById("principal").style.backgroundImage = "url(img/hab1.png)";
  //Mostramos el código
  document.getElementById("codigo").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Jugador - Este código me puede servir para la otra puerta";
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
  document.getElementById("parrafo1").innerHTML = "Jugador - Probemos";
}
//Desde ESCENA4: Habitación 2
function izquierdaBlock() {
  //Muestro el mensaje
  document.getElementById("parrafo1").innerHTML = "Jugador - Para que volver aquí";
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

let contenedordos = document.getElementById("divincorrecto2");
let textodos = document.createElement("span");
contenedordos.appendChild(textodos);
function probar() {
  // Recojo la respuesta y lo paso a número
  let respuesta = document.getElementById("codigoAceptado").valueAsNumber;
  //Si la respuesta es correcta oculto el div, muestro el nuevo escenario y cambio el mensaje
  if (respuesta == 1985) {
    document.getElementById("codigoP").style.display = "none";
    document.getElementById("principal").style.backgroundImage = "url(img/hab2.png)";
    document.getElementById("parrafo1").innerHTML = "Hay una llave en esta habitacion";
    document.getElementById("parrafo2").innerHTML = "Debes de encontrarla";
    document.getElementById("llave").style.display = "block";

    document.getElementById("codigoAceptado").value = "";
  } else {//Si la respuesta no es alguna de las anteriores indico que se ha equivocado
    textodos.textContent = "Respuesta incorrecta";
    contenedordos.style.backgroundColor = "lightcoral";
  }
}

function llaveCandado() {
  // Oculto la llave, ya no vamos a utilizarla
  document.getElementById("llave").style.display = "none";
  // Muestro el candado
  document.getElementById("candado").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Ya tienes la llave";
  document.getElementById("parrafo2").innerHTML = "Jugador - Para que serviría una llave";
}
// Desde ESCENA5: Sotano apagado
function sotano() {
  // Oculto la llave, ya no vamos a utilizarla
  document.getElementById("candado").style.display = "none";
  // Muestro el interuptor y la caja fuerte
  document.getElementById("interruptorA").style.display = "block";
  document.getElementById("cajaFuerteA").style.display = "block";
  //Ponemos la imagen del sótano
  document.getElementById("principal").style.backgroundImage = "url(img/sotanoA.png)";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Jugador - No se ve nada";
  document.getElementById("parrafo2").innerHTML = "Jugador - Tiene que haber algún interruptor por aquí";
}
// Desde ESCENA6: Sotano encendido
function enciende() {
  // Cambio la imagen de fondo cuando enciendo la luz
  document.getElementById("principal").style.backgroundImage = "url(img/sotanoB.png)";
  // Cambiazo de interruptoes y caja fuerte
  document.getElementById("interruptorA").style.display = "none";
  document.getElementById("interruptorB").style.display = "block";
  document.getElementById("cajaFuerteA").style.display = "none";
  document.getElementById("cajaFuerteB").style.display = "block";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Jugador - Una caja fuerte?";
  document.getElementById("parrafo2").innerHTML = "Jugador - Ahí pueden estar los polvos mágicos";
}
// Desde ESCENA7: Acertijo caja fuerte
function acertijoCajaFuerte() {
  // Muestro el acertijo
  document.getElementById("matematico").style.display = "block";
  // Evitamos que la caja fuerte vuelva a ser pulsado, desactivando los eventos de ratón
  document.getElementById("cajaFuerteB").style.pointerEvents = "none";
  // Cambio el mensaje del bocadillo
  document.getElementById("parrafo1").innerHTML = "Para abrir la caja fuerte debes de resolver este acertijo";
  document.getElementById("parrafo2").innerHTML = "";
}

let contenedortres = document.getElementById("divincorrecto3");
let textotres = document.createElement("span");
contenedortres.appendChild(textotres);
function resultado() {
  // Recojo la respuesta y lo paso a número
  let respuesta = Number(document.getElementById("numeroAceptado").value);
  //Si la respuesta es correcta oculto el div, muestro el nuevo escenario y cambio el mensaje
  if (respuesta == 13) {
    //MOstramos el final
    document.getElementById("final").style.display = "block";
    //Ocultamos todo
    document.getElementById("matematico").style.display = "none";
    document.getElementById("interruptorB").style.display = "none";
    document.getElementById("cajaFuerteB").style.display = "none";
    // Cambio el mensaje del bocadillo y el valor del resultado
    document.getElementById("parrafo1").innerHTML = "Has consegido los feresquitos";
    document.getElementById("parrafo2").innerHTML = "Los tomas o no?";
    document.getElementById("numeroAceptado").value = "";
  } else {//Si la respuesta no es alguna de las anteriores indico que se ha equivocado
    textotres.textContent = "Respuesta incorrecta";
    contenedortres.style.backgroundColor = "lightcoral";
  }
}
// Desde ESCENA8: Finales