let personName = "John"; // Tipo implícito -> string
/* personName = 34; // ERROR: Type 'number' is not assignable to type 'string'. */
console.log(personName);

/*** TIPO INPLICITO ANY */
let a; // Tipo implícito any
a = 34;
a = "Hello";
console.log(a);

const arr = []; // tipo any[]
arr[0] = 23;
arr[1] = "hello";
console.log(arr);

/** TIPO EXPLÍCITO - Ejemplo number */

let num: number;
num = 23;
num++;
/* num = "Hola"; // ERROR: Type 'string' is not assignable to type 'number' */
console.log(num);


/** ARRAYS  */
const arrNum: number[] = [];
arrNum[0] = 24; // Ok
arrNum[1] = 35; // Ok
/* arrNum[2] = "34"; // Error: Type 'string' is not assignable to type 'number' */
/* arrNum.push("Hola");  // Error: Argument of type 'string' is not assignable to parameter of type 'number' */

const a2: Array<string> = [];
a2.push("Hola"); // Ok


/** FUNCIONES */
function suma(n1: number, n2: number): number {
    return n1 + n2;
}

console.log(suma(3, 5)); // 8
/* console.log(suma(3, "5")); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number' */

function saluda(): void {
    console.log("Hola");
}
console.log(saluda() + " chicos");

/** FUNCIONES FLECHA */

// Recibe 2 parámetros de tipo number y devuelve un number
let  f: (n1: number, n2: number) => number;
// No hace falta tipar parámetros o lo que devuelve al declararla
f = (n1, n2) => n1 + n2;
console.log(f(3, 5)); // 8
f = (n1, n2) => n1 - n2;
console.log(f(3, 5)); // -2

function operar(n1: number, n2: number, f: (n1: number, n2: number) => number): number {
    return f(n1, n2);
}

console.log(operar(3, 5, (n1, n2) => n1 * n2));

/** UNION DE TIPOS */

function longitud(cifra: number | string): number {
    return String(cifra).length;
}

console.log(longitud(345)); // 3
console.log(longitud("6546")); // 4

/** CREAR NUEVOS TIPOS */
// Se puede hacer también una unión de valores literales
type Rol = "admin" | "usuario" | "invitado";

/* class Persona {
    nombre: string;
    rol: Rol; // Solo puede ser "admin", "usuario" o "invitado"

    constructor(nombre: string, rol: Rol) {
        this.nombre = nombre;
        this.rol = rol;
    }
}

let p = new Persona("Juan", "admin"); // OK
console.log(p.nombre + " y soy " + p.rol); */
/* p = new Persona("Pepe", "mago"); // ERROR: Argument of type '"mago"' is not assignable to parameter of type 'Rol' */

/** TUPLAS */
type TuplaPersona = [string, number];

const tupla: TuplaPersona = ["Pepe", 23]; // OK
console.log(tupla[0]);
/* const p: TuplaPersona = [45, 23]; // ERROR: Type 'number' is not assignable to type 'string' */

/** CLASES */

/* class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona: Persona = new Persona("Juan", 54); */

// Array de personas
/* const personas: { nombre: string, edad: number }[] = [
    {
        nombre: "Ana",
        edad: 34
    },
    {
        nombre: "Juan",
        edad: 35
    }
];
console.log(personas); */

/* interface Persona {
    nombre: string;
    edad: number;
}

// Array de personas
const personas: Persona[] = [
    {
        nombre: "Ana",
        edad: 34
    },
    {
        nombre: "Juan",
        edad: 35
    }
];
console.log(personas); */

/** PRIVATE vs # */
/* class Persona {
    nombre: string;
    edad: number;
    #rol: string;

    constructor(nombre: string, edad: number, rol: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.#rol = rol;
    }
}

const p = new Persona("Juan", 42, "admin");
//console.log(p.#rol); // roperty '#rol' is not accessible outside class 'Persona' because it has a private identifier
Object.entries(p).forEach(([k,v]) => console.log(`${k} => ${v}`)); // No va a listar el atributo #rol */
/*
nombre => Juan
edad => 42
*/

/* class Persona {
// Lo malo que si queremos algún atributo private (#), no podemos pasárselo como tal
    constructor(public nombre: string, public edad: number) { }
}

const p = new Persona("Juan", 34);
console.log(`${p.nombre} - ${p.edad}`); // Juan - 34 */