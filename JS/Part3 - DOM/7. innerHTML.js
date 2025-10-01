const form = document.getElementById("form");

form.addEventListener('submit', e => {
    e.preventDefault();
    const texto = form.texto.value;
    document.getElementById("p1").textContent = texto;
});

/* 
Prueba a poner en el textarea:
<img src="" onerror="alert('Has sido hackeadorrrl')">
*/