class Product {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    getDescuento(descuento) {
        let totalDesc = this.precio * descuento / 100;
        return this.precio - totalDesc;
    }
}

let p = new Product("Producto", 50);
console.log(p); // Product {nombre: "Producto", precio: 50}
console.log(typeof Product); // Imprime "function". Internamente sigue siendo una función como en versiones antiguas
console.log(p.getDescuento(20)); // Imprime 40

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }
    getName() { // Getter
        return this.#name;
    }

    setName(name) { // Setter
        this.#name = name;
    }
}

let user = new User("john");
// console.log(u.#name); // ERROR: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
user.setName("Alex");
console.log(user.getName()); // Alex

class Empleado {
    static #sueldoMinimo = 15000;

    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    static creaBecario(nombre) {
        return new Empleado(nombre, Empleado.#sueldoMinimo);
    }
}

let e = Empleado.creaBecario("Elena");
console.log(e); // Empleado {nombre: 'Elena', sueldo: '15000'}