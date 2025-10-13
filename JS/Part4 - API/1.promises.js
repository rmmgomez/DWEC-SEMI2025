/* function getPromise() {
    return new Promise((resolve, reject) => {
        console.log("Promesa llamada...");
        setTimeout(function() {
            console.log("Resolviendo la promesa...");
            resolve(); // Promesa resuelta!.
        }, 3000); // Esperamos 3 segundos y acabamos la promesa
    });
}

// Imprimirá el mensaje pasados 3 segundos (la promesa termina)
getPromise().then(() => console.log("La promesa ha acabado!"));

console.log("El programa continúa. No espera que termine la promesa (operación asíncrona)"); */


function sumPromise(n1, n2, time = 2000) {
    if (n1 < 0 || n2 < 0) {
        return Promise.reject("Can't add negative numbers");
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1 + n2), time);
    });
}
function cuadrado(n1, time = 2000) {
    return Math.pow(n1, 2);
}
function mostrarResultado(n) {
    console.log(`El resultado de concatenar varias es: ${n}`)
}

/* sumPromise(4, 6).then((r1) => { // 10
    return sumPromise(r1, 10);
}).then((r2) => { // 20
    return r2 + 100;
}).then((r3) => { // 120
    console.log(r3); 
}).catch(error => {
    // Si se produce un error en cualquier parte de la cadena de promesas... (o promesa original rechazada)
    console.error("Error en la promesa " + error);
});
console.log("Hello world!"); */

/* sumPromise(4, 6)
    .then((r1) => { // 10
        return cuadrado(r1); //100
    }).then((r3) => { 
        mostrarResultado(r3);
    })
    .catch(error => {
        // Si se produce un error en cualquier parte de la cadena de promesas... (o promesa original rechazada)
        console.error("Error en la promesa " + error);
    }).finally(() => console.log("Aquí entro tanto si todo ha ido bien como si no")); */

/* sumPromise(4, 6).then(cuadrado).then(mostrarResultado); */

/* Si queremos crar varias promesas en paralelo. Cuando hayan finalizado todas el método then recibe el array con los resultados
    Si una falla todas las demás promesas se ignoran y se ejecuta el catch
*/
/* Promise.all([
    sumPromise(4, 7, 3000),
    sumPromise(9, 12, 1500),
    sumPromise(8, 36, 5000),
])
.then(res => console.log(res))
.catch(error => console.log(error)); // [11, 21, 44] */

/* Como el anterior, pero si alguna falla el resto se ejecuta, y el array en este caso tendrá:
status, value y reason(motivo del rejected) */
/* Promise.allSettled([
    sumPromise(4, 7, 3000),
    sumPromise(9, 12, 1500),
    sumPromise(-8, 36, 5000),
])
.then(res => console.log(res))
.catch(error => console.log(error)); // [11, 21, 44] */

/**Resultado de la promesa más rápida */
/* Promise.race([
    sumPromise(4, 7, 3000),
    sumPromise(9, 12, 1500),
    sumPromise(8, 36, 5000),
]).then(res => console.log(res)); */


