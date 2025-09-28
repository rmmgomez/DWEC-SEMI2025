const lista = document.getElementById("lista");
console.log("Primer hijo HTML" + lista.firstElementChild);
console.log("Primer hijo HTML/text/Comment" + lista.firstChild);

console.log("lista hijos" +lista.children);
console.log("lista hijos HTML/text/Comment" + lista.childNodes);

console.log("Texto " + lista.firstElementChild.textContent);
console.log("padre" + lista.parentElement);

let li = lista.firstElementChild;
while(li = li.nextElementSibling) {
    console.log(li.innerHTML);
}