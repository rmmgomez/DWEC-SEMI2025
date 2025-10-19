class Persona {
    nombre: string;
    edad: number;
    #rol: string;

    constructor(nombre: string, edad: number, rol: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.#rol = rol;
    }

    toString() {
        return `${this.nombre} - ${this.edad} - ${this.#rol}`;
    }
}

const p = new Persona("Juan", 42, "admin");
// console.log(p.#rol); // Property '#rol' is not accessible outside class 'Persona' because it has a private identifier
Object.entries(p).forEach(([k,v]) => console.log(`${k} => ${v}`)); // Recorremos las propiedades del objeto
/*
nombre => Juan
edad => 42
rol => admin -> Estamos accediendo a una propiedad "private". En JavaScript se elimina el modificador
*/