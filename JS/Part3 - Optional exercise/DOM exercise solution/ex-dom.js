/* --- INSTRUCCIONES ---
Abre la consola de tu navegador (F12) y escribe el código para cada desafío.
El objetivo es que tu código devuelva el elemento o la lista de elementos correcta.
Ejemplo: console.log(document.getElementById('mapa-del-tesoro')); */

// --- Soluciones al Desafío 1: Selectores Básicos ---

// 1.1: Selecciona el div con el ID 'mapa-del-tesoro'.
console.log("1.1:", document.getElementById('mapa-del-tesoro'));

// 1.2: Selecciona TODAS las secciones (elementos con la clase 'seccion').
console.log("1.2:", document.getElementsByClassName('seccion'));

// 1.3: Selecciona TODOS los párrafos (etiquetas <p>).
console.log("1.3:", document.getElementsByTagName('p'));

// --- Soluciones al Desafío 2: Navegación Padre-Hijo-Hermano ---

// 2.1: Desde el elemento con ID 'brujula', selecciona su elemento padre (el <ul>).
console.log("2.1:", document.getElementById('brujula').parentNode);

// 2.2: Selecciona TODOS los hijos del elemento con ID 'lista-herramientas'.
console.log("2.2:", document.getElementById('lista-herramientas').children);

// 2.3: Desde el elemento 'brujula', selecciona su hermano SIGUIENTE (la 'Pala').
console.log("2.3:", document.getElementById('brujula').nextElementSibling);

// 2.4: Desde el elemento 'brujula', selecciona su hermano ANTERIOR (el 'Mapa').
console.log("2.4:", document.getElementById('brujula').previousElementSibling);

// --- Soluciones al Desafío 3: QuerySelector ---

// 3.1: Selecciona el PRIMER elemento que tenga la clase 'item'.
console.log("3.1:", document.querySelector('.item'));

// 3.2: Selecciona el elemento con el ID 'articulo-principal'.
console.log("3.2:", document.querySelector('#articulo-principal'));

// --- Soluciones al Desafío 4: QuerySelectorAll y Selectores de CSS Avanzados ---

// 4.1 (Descendientes): Selecciona todos los párrafos (<p>) que están DENTRO de la sección con ID 'articulo-principal'.
console.log("4.1:", document.querySelectorAll('#articulo-principal p'));

// 4.2 (Hijos directos): Selecciona solo los <li> que son HIJOS DIRECTOS de 'lista-herramientas'.
console.log("4.2:", document.querySelectorAll('#lista-herramientas > li'));

// 4.3 (Hermano adyacente): Selecciona el párrafo que está INMEDIATAMENTE DESPUÉS del h2 de la "Pista 1".
console.log("4.3:", document.querySelector('#articulo-principal h2 + p'));

// 4.4 (Hermano general): Selecciona TODOS los párrafos que son hermanos y vienen DESPUÉS del h2 de la "Pista 2".
console.log("4.4:", document.querySelectorAll('#lista-herramientas + h2 ~ p')); // Nota: La Pista 2 no tiene un h2, se ajusta al HTML. La lógica correcta sería para la sección de la Pista 2.
// Corrección para el HTML provisto:
console.log("4.4 (Corregido):", document.querySelectorAll('#lista-herramientas ~ p'));

// 4.5 (Atributo): Selecciona TODAS las secciones que tengan el atributo 'data-status'.
console.log("4.5:", document.querySelectorAll('section[data-status]'));

// 4.6 (Atributo con valor): Selecciona solo las secciones cuyo atributo 'data-status' sea 'activo'.
console.log("4.6:", document.querySelectorAll('section[data-status="activo"]'));

// 4.7 (Atributo con valor diferente): Selecciona el enlace <a> que NO se abre en una nueva pestaña.
console.log("4.7:", document.querySelector('a:not([target="_blank"])'));