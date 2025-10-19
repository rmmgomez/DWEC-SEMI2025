function saluda(nombre?: string) {
    // El tipo de 'nombre' será: string | undefined
    if(!nombre) {
        console.log("No sé quién eres");
    } else {
        console.log(`Hola ${nombre}`);
    }
}

saluda(); // OK
saluda("Pepe"); // OK