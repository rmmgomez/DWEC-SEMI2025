let date = new Date();
console.log(date);
date.setDate(date.getDate() - 31);
console.log(date);

let a = ['adiós', 'árbol', 'oído', 'óptimo', 'ñapa', 'niño'];
a.sort();
console.log(a.toString());
a.sort(new Intl.Collator('es').compare);
console.log(a.toString());

let animales = ['perro', 'gato', 'pez', 'loro'];

const formatter = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });
console.log(formatter.format(animales)); // perro, gato, pez y loro
const formatter2 = new Intl.ListFormat('de', { style: 'long', type: 'conjunction' });
console.log(formatter2.format(animales)); // perro, gato, pez und loro

let number = 15300.9555;

console.log(new Intl.NumberFormat('en-UK').format(number)); // 15,300.956
console.log(new Intl.NumberFormat('es-ES').format(number)); // 15.300,956

console.log(new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(number));
// 15.300,96 €
console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number));
// $15,300.96

console.log(new Intl.DateTimeFormat('es-ES', {
    dateStyle: "short"
}).format(date)); // 25/4/22

console.log(new Intl.DateTimeFormat('es-ES', {
    dateStyle: "full"
}).format(date)); // lunes, 25 de abril de 2022

console.log(new Intl.DateTimeFormat('es-ES', {
    day: "2-digit", month: "2-digit", year: "numeric"
}).format(date)); // 25/04/2022

console.log(new Intl.DateTimeFormat('es-ES', {
    day: "numeric", month: "long", year: "numeric" ,
    hour: 'numeric', minute: 'numeric', hourCycle: 'h12', dayPeriod: 'long'
}).format(date)); // 25 de abril de 2022 2:00 de la madrugada