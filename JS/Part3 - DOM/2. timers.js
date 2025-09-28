'use strict';

setTimeout(() => console.log("Hora: " + new Date().toString()), 5000);  // Se ejecutará en 5 segundos (5000 ms)
// setTimeout devuelve un número con el id, y a partir de ahí, podremos cancelarlo
let idTime = setTimeout(() => console.log("TimeOut: " + new Date().toString()), 5000);

let cont = 1;
const saludos = setInterval(() =>{
    console.log(`Hola ${cont++}`);
    // Cuando imprimimos 10, paramos
    if(cont > 10) clearInterval(saludos);
}, 5000);

function multiply(num1, num2) {
    console.log(num1 * num2);
}

setTimeout(multiply, 3000, 5, 7); // Después de 3 segundos imprimirá 35 (5*7)