const a = [23, 45, 67, 89, 12];
const iterador = Iterator.from(a);

console.log(iterador.next()); // { value: 23, done: false }
// ... hasta que se acaben los elementos

const cadena = "Hola";
const iteradorCadena = Iterator.from(cadena);

console.log(iteradorCadena.next()); // { value: 'H', done: false }
// ... hasta que se acaben los caracteres