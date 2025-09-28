console.log(document.querySelector("#div1 a").title); // Imprime "hello world"
console.log(document.querySelector("#div1 > a")); // null (no hay 'a' hijo de #div1)
console.log(document.querySelector(".normalLink[title^='bye']").title); // Imprime "bye world"
console.log(document.querySelector(".normalLink[title^='bye'] + a").title); // Imprime "hello again"

let elems = document.querySelectorAll(".normalLink");
elems.forEach((elem) => { // Imprime "hello world" y "bye world"
    console.log(elem.title);
});

let elems2 = document.querySelectorAll("a[title^='hello']"); // Atributo title empieza por “hello...”
elems2.forEach(function(elem) { // Imprime "hello world" y "hello again"
    console.log(elem.title);
});

let elems3 = document.querySelectorAll("a[title='hello world'] ~ a"); // Hermanos de <a title="hello world">
elems3.forEach(function(elem) { // Imprime "bye world" y "hello again"
    console.log(elem.title);
});

console.log(document.querySelector("a:not(.normalLink)")); // enlace que no tenga la clase normalLink 

let elems4 = document.querySelectorAll("a:has(~ .specialLink)");
console.log(elems4);