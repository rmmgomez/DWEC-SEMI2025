const elem = document.getElementById("elem");
console.log(elem?.textContent);
if(elem) { // En el caso de asignación hay que comprobar
    elem.textContent = "Hola";
}

const a = ["perro", "casa", "árbol", "mesa", "coche"];
const palabra = a.find((p) => p.startsWith("z")); // Devuelve string | undefined

// console.log(palabra.toLocaleUpperCase()); // ERROR: 'palabra' is possibly 'undefined'
console.log(palabra?.toLocaleUpperCase()); // Si palabra es undefined, devuelve undefined sin acceder al método

const palabra2 = a.find((p) => p.startsWith("c")); // Devuelve string | undefined

// console.log(palabra2.toLocaleUpperCase()); // ERROR: 'palabra' is possibly 'undefined'
console.log(palabra2!.toLocaleUpperCase()); // Estamos seguros de que no es undefined (Cuidado!)

function saluda(nombre?: string) {
    if(!nombre) throw Error("Nombre no puede estar vacío");
    console.log(nombre.toLocaleUpperCase());
}

saluda();