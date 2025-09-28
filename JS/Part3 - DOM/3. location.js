console.log(location.href); // Imprime la URL actual
console.log(location.host); // Imprime el nombre del servidor (o la IP) como “localhost” 192.168.0.34
console.log(location.port); // Imprime el número del puerto (normalmente 80)
console.log(location.protocol); // Imprime el protocolo usado (http ó https)
console.log(location.search); // Imprime los parámetros de búsqueda de la url (Ej: '?p1=1&p2=2')

location.reload(); // Recarga la página actual
/* location.assign("https://google.com"); // Carga una nueva página */
/* location.replace("https://google.com"); // Carga una nueva página sin guardar la actual en el objeto history */

console.log(history.length); // Imprime el número de páginas almacenadas

/* history.back(); // Vuelve a la página anterior
history.forward(); // Va hacia la siguiente página
history.go(2); // Va dos páginas adelante (-2 iría dos páginas hacia atrás) */