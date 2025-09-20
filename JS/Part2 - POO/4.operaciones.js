let usuario = {
    id: 3,
    nombre: "Pedro",
    email: "peter@gmail.com"
}

let {nombre, id, email} = usuario;
console.log(nombre); // Imprime "Pedro"

// Se pueden asignar variables con nombres diferentes a los atributos
let {nombre: nombreUsuario, email: emailUsuario} = usuario;
console.log(nombreUsuario); // Imprime "Pedro"

// Esta función recibirá un objeto como primer parámetro y lo desestructurará en variables
function imprimirUsuario({id, nombre, email}, otraInfo = "Nada") {
    // Cuerpo de la función
}

imprimirUsuario(usuario, "Es muy listo");

console.log("---- Spread ----");

function configGame(options) {
    let defaults = {
        name: "Player 1",
        level: 1,
        difficulty: "normal",
        gender: "female"
    };

    let config = {...defaults, ...options}; // Combinamos el objeto defaults con options
    console.log(config);    
}

let options = {
    name: "Super Master",
    gender: "male"
};
configGame(options); // {name: "Super Master", level: 1, difficulty: "normal", gender: "male"}


console.log("----Concatenación opcional (?.) ----");
const coche = {
  marca: 'Ford',
  modelo: 'Mustang',
  // motor: {
  //   cilindros: 8
  // }
};

const cilindros = coche?.motor?.cilindros;
console.log(cilindros); // undefined (no hay error)

const usuarios = [
  { nombre: 'Ana' },
  { nombre: 'Luis' }
];

const primerUsuario = usuarios?.[0]?.nombre;
const cuartoUsuario = usuarios?.[3]?.nombre ?? "Juanito";

console.log(primerUsuario); // "Ana"
console.log(cuartoUsuario); // undefined

const persona = {
  nombre: 'Carlos',
  saludar() {
    console.log('Hola!');
  }
};

const otraPersona = {
  nombre: 'Marta'
};

persona.saludar?.();        // Se ejecuta la función y muestra "Hola!"
otraPersona.saludar?.();    // No hace nada, no hay error

console.log("---- Coalescencia Nula ----");
const configuracion = {
  // tema: { 
  //   color: 'oscuro'
  // }
};

const temaActual = configuracion.tema?.color ?? 'claro'; // configuracion.tema devuelve "undefined"

console.log(temaActual); // "claro"