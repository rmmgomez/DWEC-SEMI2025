let str = "I am amazed in America";

let reg = /am/gi; 
console.log(reg.test(str)); // Imprime true
console.log(reg.test(str)); // Imprime true
console.log(reg.test(str)); // Imprime true. Ahora tenemos 3 coincidencias con este nuevo patrón
console.log(reg.test(str)); // false (ha terminado la cadena)

console.log(reg.exec(str)); // Imprime ["am", index: 2, input: "I am amazed in America"]
console.log(reg.exec(str)); // Imprime ["am", index: 5, input: "I am amazed in America"]
console.log(reg.exec(str)); // Imprime ["Am", index: 15, input: "I am amazed in America"]
console.log(reg.exec(str)); // Imprime null. No hay más coincidencias

console.log(str.match(/am/gi)); // Imprime ["am", "am", "Am"]

const fechas = "Nací el 14/07/1953 y mi hermano el 16/09/1958";
console.log(fechas.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g));

console.log(str.replace(/am/gi, "xx")); // Imprime "I xx xxazed in xxerica"
console.log(str.replace(/am/gi, function(match) {
    return "-" + match.toUpperCase() + "-";
})); // Imprime "I -AM- -AM-azed in -AM-erica"