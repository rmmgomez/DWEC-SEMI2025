class Persona {
    constructor(public nombre: string, public edad: number) { }
}

const p = new Persona("Juan", 34);
console.log(`${p.nombre} - ${p.edad}`); // Juan - 34