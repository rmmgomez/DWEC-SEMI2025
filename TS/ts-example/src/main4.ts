class Persona {
    constructor(public nombre: string, public edad: number) { }

    saluda() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

class Usuario extends Persona {
    constructor(nombre: string, edad: number, public email: string, public password: string) {
        super(nombre, edad);
    }

    login(email: string, password: string) {
        if(email === this.email && password === this.password) {
            console.log("Muy bien!");
        } else {
            console.log("Email o password incorrecto!");
        }
    }
}

class Cliente extends Persona {
    constructor(nombre: string, edad: number, public vip: boolean) {
        super(nombre, edad);
    }
}

const usuario: Persona = new Usuario("Pepe", 24, "pepe@email.com", "1234");
// console.log(usuario.login("pepe@email.com", "1234")); // Property 'login' does not exist on type 'Persona'
console.log(usuario);

const personas: Persona[] = [
    usuario,
    new Cliente("Juanito", 24, true),
    new Usuario("Pepito", 94, "p@e.es", "54325"),
    new Cliente("Ana", 36, false),
    new Persona("Mario", 64),
];

personas.forEach(p => {
    p.saluda();
    if(p instanceof Usuario) {
        p.login("pepe@email.com", "1234")
    }
})

