let link = document.getElementById("toGoogle");
console.log(link.attributes);
for(let a of link.attributes) {
    console.log(`${a.name} - ${a.value}`);
}

console.log(link.attributes[0]);
console.log(link.attributes.id);
console.log(link.attributes['id']);

link.href = "https://iessanvicente.com";
link.setAttribute('title', "IES San Vicente");
link.setAttribute('inventado', "Valor inventado");
link.textContent = "IES San Vicente";

// Atributos data (DataSet)
link.dataset.valor = "34";

let div = document.getElementById("div1");
div.addEventListener("click", e => div.classList.toggle("blue"));