console.log(3.32924325.toFixed(2)); // Imprime 3.33
console.log(5435.45.toExponential()); // Imprime 5.43545e+3
console.log((3).toFixed(2)); // Imprime 3.00 

console.log(Number.MIN_VALUE); // 5e-324 (número más pequeño)
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 (Número más grande)

console.log(5 / 0); 

let s1 = "32";
let s2 = "14";

console.log(s1 + s2); // 3214 (concatena cadenas)
console.log(Number(s1) + Number(s2)); // 46
console.log(+s1 + +s2); // 46

console.log(+true); // true equivale a 1
console.log(+false); // false equivale a 0
console.log(+null); // 0
console.log(+undefined); // NaN

let nombre = "Juan";
let num = +nombre;
console.log(num); // NaN
console.log(Number.isNaN(num)); // true
console.log(num + 23); // NaN (no se puede operar)

