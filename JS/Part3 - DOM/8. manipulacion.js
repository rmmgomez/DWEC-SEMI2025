// let ul = document.querySelector("ul"); // Obtiene la primera lista (ul)
// let li3 = ul.children[2]; // Tercer elemento de la lista (li)

// Es lo mismo que arriba
let li3 = document.querySelector("ul > li:nth-child(3)");
console.log(li3);

let newLi3 = document.createElement("li"); // Crea un nuevo elemento de lista
newLi3.innerText = "Now I'm the third element"; // Y le asigna un texto

li3.before(newLi3); // Añado el nuevo antes del tercero actual
li3.innerText = "I'm the fourth element..."; // Cambiamos el texto para reflejar que es el cuarto elemento
