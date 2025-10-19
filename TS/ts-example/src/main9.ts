export interface Producto {
    id?: number;
    descripcion: string;
    precio: number;
}

const p1: Producto = {
    descripcion: "Mesa",
    precio: 123
}
console.log(p1);

const p2: Partial<Producto> = {
    precio: 14
}
console.log(p2);

const p3: Required<Producto> = {
    precio: 14,
    descripcion: "Silla",
    id: 12
}
console.log(p3);

const p4: Readonly<Required<Producto>> = {
    id: 1,
    precio: 14,
    descripcion: "Teclado"
}
// p4.precio = 56; // Cannot assign to 'precio' because it is a read-only property
console.log(p4);

const p5: Omit<Producto, "precio"> = {
    id: 1,
    descripcion: "Teclado"
}

console.log(p5); // Este producto no tiene precio