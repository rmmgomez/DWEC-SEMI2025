"use strict";

for(var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log(i); // 11 (global variable!!)

/** 
 * Probad este código usando var y haced click en cada párrafo a ver
 * qué pasa y qué se muestra en la consola.
 */

for(let i = 1; i <= 10; i++) {
    let p = document.createElement("p");
    p.textContent = "Paragraph " + i;
    document.body.append(p);
    
    p.addEventListener('click', e => console.log("Click " + i));
}