class User {
    constructor(name, edad = 18) {
        this.name = name;
        this.edad = edad;
    }

    sayHello() {
        console.log(`Hola, soy ${this.name}`);
    }
    
    sayType() {
        console.log("Soy un usuario");
    }
    toString() {
        return `${this.nombre} (${this.edad})`;
    }
    valueOf() { // OJO!!! sino pones toString entra aquí
        return this.edad; // Los objetos se compararán por edad
    }
}

class Admin extends User {
    #codigo
    constructor(name, codigo) {
        super(name); // Llamamos al constructor de User                
        this.codigo = codigo;
    }

    sayType() { // Método sobrescrito
        super.sayType(); // Llamamos a User.sayType (método del padre)
        console.log("Pero también un admin");
    }
    toString() {
        return `${this.name} con ${this.codigo} y ${this.edad} años`;
    }    
}

let admin = new Admin("Anthony", 43);
admin.sayHello(); // Imprime "Hola, soy Anthony"
admin.sayType(); // Imprime "Soy un usuario" y "Pero también un admin"
console.log("--- toString ---");
console.log("Info: " + admin.toString());
console.log("--- Comparamos objetos con valueOf ---");
let p = new User("Ana", 34);
let p2 = new User("Juan", 25);
console.log(p > p2); // true