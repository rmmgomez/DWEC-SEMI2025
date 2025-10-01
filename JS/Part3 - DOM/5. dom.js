const lista = document.getElementById("lista");
console.log("Primer hijo HTML: " + lista.firstElementChild.textContent);
console.log("Primer hijo HTML: " + lista.firstChild);

console.log("lista hijos " +lista.children);
console.log("lista hijos HTML: " + lista.childNodes);

console.log("Texto " + lista.firstElementChild.textContent);
console.log("padre" + lista.parentElement);

let li = lista.firstElementChild;
while(li = li.nextElementSibling) {
    console.log(li.textContent);
}