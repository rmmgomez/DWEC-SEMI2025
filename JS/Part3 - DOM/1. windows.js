'use strict';
// Tamaño total de la ventana (excluye la barra superior del navegador, title)
console.log("Window: " + outerWidth + " - " + outerHeight);
window.open("https://www.google.com");

// Propiedades de la pantalla
console.log("width/height: " + window.screen.width + " - " + window.screen.height); // Ancho de pantalla y alto (Resolución)
console.log("avail: " + window.screen.availWidth + " - " + window.screen.availHeight); // Excluyendo la barra del S.O.

// Propiedades del navegador
console.log("Info: " + window.navigator.userAgent); // Imprime la información del navegador
window.navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
    console.log("Precisión: " + position.coords.accuracy);
    console.log("Altitud: " + position.coords.altitude); 
    console.log("Precisión de la altitud: " + position.coords.altitudeAccuracy); 
    console.log("Orientación en grados: " + position.coords.heading); 
    console.log("Velocidad en M/s si está disp. " + position.coords.speed);
});

//  Podemos omitir el objeto window (está implícito)
console.log("history: " + history.length); // Páginas visitadas en la pestaña actual. Lo mismo que window.history.length

const btnGoogle = document.getElementById("btnGoogle");
btnGoogle.addEventListener("click", e => location.assign("https://google.es"));