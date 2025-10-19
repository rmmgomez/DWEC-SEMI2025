abstract class Figura {
    abstract getArea(): number;
}

class Cuadrado extends Figura {
    constructor(public lado: number) {
        super();
    }

    getArea(): number {
        return this.lado ** 2;
    }
}

const c = new Cuadrado(34);
console.log(c.getArea());