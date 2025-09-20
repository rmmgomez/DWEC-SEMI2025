"use strict";
let a = new Array(); // Crea un array vacío
a[0] = 13; // Asigna la primera posición del array
console.log(a.length); // Imprime 1
console.log(a[0]); // Imprime 13
console.log(a[1]); // Imprime undefined (posición no asignada aún)
a[1]="hola";
console.log(a.length); // Imprime 2
console.log(a.join("-"));