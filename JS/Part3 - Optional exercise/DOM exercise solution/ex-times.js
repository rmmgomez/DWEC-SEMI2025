/* 
Objetivo: Muestra un mensaje letra por letra en un elemento del HTML, con un pequeño retardo entre cada letra.
 */
const writerElement = document.getElementById('writer');
const message = "Hola, soy un mensaje que se escribe solo.";
let index = 0;

const writerInterval = setInterval(function() {
  // Añadimos la siguiente letra del mensaje al elemento h2
  writerElement.textContent += message[index];
  
  // Avanzamos a la siguiente letra
  index++;
  
  // Si hemos llegado al final del mensaje, detenemos el intervalo
  if (index === message.length) {
    clearInterval(writerInterval);
  }
}, 150); // Escribe una letra cada 150 milisegundos

/* 
Crea un botón que, al ser pulsado, inicie una cuenta atrás de 5 segundos para mostrar una alerta. 
Si el usuario vuelve a pulsar el botón antes de que pasen los 5 segundos, la cuenta atrás se cancela.
*/
const actionBtn = document.getElementById('actionBtn');
const statusP = document.getElementById('status');
let timerId = null; // Variable para guardar el ID del temporizador

actionBtn.addEventListener('click', function() {
  // Si ya hay un temporizador activo, lo cancelamos.
  if (timerId) {
    clearTimeout(timerId);
    statusP.textContent = 'Secuencia cancelada. ¡A salvo!';
    timerId = null; // Reseteamos el ID
  } else {
    // Si no hay temporizador, creamos uno nuevo.
    statusP.textContent = 'Secuencia iniciada... ¡Cancela antes de 5 segundos!';
    timerId = setTimeout(function() {
      alert('💥 ¡BOOM!');
      statusP.textContent = 'Demasiado tarde...';
      timerId = null; // Reseteamos el ID
    }, 5000);
  }
});

/* EJERCICIO 3
Crear una función que acepte un nombre de usuario y un rol (por ejemplo, "Admin", "Editor"). 
Después de 4 segundos, esta función debe mostrar un mensaje de bienvenida personalizado en la 
consola que incluya ambos datos.
 */

/**
 * Muestra un saludo personalizado en la consola.
 * @param {string} usuario - El nombre del usuario.
 * @param {string} rol - El rol del usuario.
 */
function saludarUsuario(usuario, rol) {
  console.log(`👋 ¡Bienvenido, ${usuario}! Tu rol es: ${rol}.`);
}


console.log("Programando el saludo...");

setTimeout(saludarUsuario, 4000, "Ana", "Admin");