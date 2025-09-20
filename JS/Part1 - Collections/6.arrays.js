"use strict";
let a = new Array(); // Crea un array vacío
a[0] = 13; // Asigna la primera posición del array
console.log(a.length); // Imprime 1
console.log(a[0]); // Imprime 13
console.log(a[1]); // Imprime undefined (posición no asignada aún)
a[1]="hola";
console.log(a.length); // Imprime 2
console.log(a.join("-"));


let  a = ["a"];
a.push("b", "c", "d"); // Inserta nuevos valores al final del array
console.log(a); // Imprime ["a", "b", "c", "d"]
a.unshift("A", "B", "C"); // Inserta nuevos valores al principio del array
console.log(a); // Imprime ["A", "B", "C", "a", "b", "c", "d"]

console.log(a.pop()); // Imprime y elimina la última posición → "d"
console.log(a.shift()); // Imprime y elimina la primera posición → "A"
console.log(a); // Imprime ["B", "C", "a", "b", "c"]



let  a = ["a", "b", "c", "d", "e", "f"];
a.splice(1, 3); // Elimina 3 elementos desde la posición 1 ("b", "c", "d")
console.log(a); // Imprime ["a", "e", "f"]
a.splice(1,1, "g", "h"); // Elimina 1 elemento en la posición 1 ("e"), e inserta "g", "h" en esa posición
console.log(a); // Imprime ["a", "g", "h", "f"]
a.splice(3, 0, "i"); // En la posición 3, no elimina nada, e inserta "i"
console.log(a); // Imprime ["a", "g", "h", "i", "f"]

let a2 = a.toSpliced(2, 1, "H");
console.log(a); // ["a", "g", "h", "i", "f"] -> No modificado
console.log(a2); // ["a", "g", "H", "i", "f"]

