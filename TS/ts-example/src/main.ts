/**
 * TIPADO IMPLÍCITO
 */
const s = "Hola"; // Tipado implícita (string)
// s = 23; // Type 'number' is not assignable to type 'string'
let a; // any (funciona como JavaScript)
a = 23;
a = "Hola";

console.log(s);
console.log(a);

const array = []; // any[] -> Array de cualquier cosa
array.push(23);
array.push("vaca");
console.log(array);

const array2 = ["Hola", "Adiós"]; // string[] -> Array de strings
array2.push("Qué tal?");
// array2.push(23); // Argument of type 'number' is not assignable to parameter of type 'string'

/**
 * TIPADO EXPLÍCITO
 */

let n: number;
n = 24;
n = 43;
// n = "hola"; // Type 'string' is not assignable to type 'number'

console.log(n);

const a1: string[] = [];
a1.push("Hola");
a1.push("Adiós");
// a1.push(123); // Argument of type 'number' is not assignable to parameter of type 'string'
console.log(a1);

const a2: Array<number> = [];
a2.push(24);
a2.push(120);
console.log(a2);

/**
 * TIPADO EN FUNCIONES
 */

function suma(n1: number, n2: number): number {
    if (n1 >= 0 && n2 >= 0) return n1 + n2;
    return 0;
}

console.log(suma(3, 5)); // 8
// console.log(suma(3, "5")); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'

/**
 * TIPO FUNCIÓN
 */

type Operacion = (n1: number, n2: number) => number;

function operar(f: Operacion, n1: number, n2: number) {
    const res = f(n1, n2);
    console.log(res);
}

operar(suma, 2, 3);
operar((n1, n2) => n1 * n2, 34, 52);

/**
 * UNIÓN DE TIPOS
 */

function longitud(cifra: number | string): number {
    if (typeof cifra === "number") {
        console.log(cifra.toFixed(2));
    }
    return String(cifra).length;
}

console.log(longitud(345)); // 3
console.log(longitud("6546")); // 4
// console.log(longitud(new Date())); // Argument of type 'Date' is not assignable to parameter of type 'string | number'

/**
 * CREACIÓN DE NUEVOS TIPOS
 */

type Rol = "admin" | "usuario" | "invitado";

let rol: Rol;
rol = "admin";
rol = "usuario";
// rol = "nadie"; // Type '"nadie"' is not assignable to type 'Rol'
console.log(rol);

/**
 * TUPLAS
 */

type TuplaPersona = [string, number];

const p1: TuplaPersona = ["Pepe", 23]; // OK
// const p2: TuplaPersona = [45, 23]; // ERROR: Type 'number' is not assignable to type 'string'
console.log(p1);

// type Coordenadas = [number, number];

/**
 * TIPADO DE OBJETOS
 */

class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona: Persona = new Persona("Juan", 54);
console.log(persona);

type Producto = { nombre: string; precio: number };

const producto: Producto = {
    nombre: "silla",
    precio: 23,
};
console.log(producto);

interface Rectangulo {
    alto: number;
    ancho: number;
}

const rectArray: Rectangulo[] = [
    {
        alto: 23,
        ancho: 54,
    },
    {
        alto: 62,
        ancho: 17,
    },
];
rectArray.forEach(r => console.log(`Área: ${r.alto * r.ancho}`));
