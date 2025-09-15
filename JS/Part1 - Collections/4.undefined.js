function f(nombre) {
    if(nombre == undefined) {
        console.error("No has introducido un nombre!");
    } else {
        console.log(`Hola ${nombre}`);
    }
}

f("Juan"); // Hola Juan
f(); // // ERROR: No has introducido un nombre!


let a; // undefined
let b = null;

console.log(a == b); // true (son equivalentes)
console.log(a === b); // false (diferente tipo de datos)
console.log(typeof a);
console.log(typeof b);

let cantidad = 0;

// Usando el operador OR (||) undefined, null, 0, "", false
const cantidadConOR = cantidad || 50;
console.log(cantidadConOR); // 50 (porque 0 equivale a false)

// Usando el operador de coalescencia nula (??) sólo para undefined o null
const cantidadConNullish = cantidad ?? 50;
console.log(cantidadConNullish); // 0 (porque 0 no es null ni undefined)

let nombre = null;
console.log(nombre ?? "Anónimo"); // "Anónimo" (nombre es null)