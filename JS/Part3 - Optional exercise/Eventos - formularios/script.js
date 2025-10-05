const miFormulario = document.getElementById('saludoForm');
const campoNombre = document.getElementById('nombre');
const parrafoMensaje = document.getElementById('mensaje');
const checkboxTerminos = document.getElementById('terminos'); // Nuevo
const botonEnviar = document.getElementById('enviarBtn'); // Nuevo

campoNombre.addEventListener('input', function() {
    campoNombre.setCustomValidity(''); 
    if (campoNombre.value.length < 3) {
        campoNombre.setCustomValidity('El nombre debe tener al menos 3 caracteres.');
    } else if (/\d/.test(campoNombre.value)) {
        campoNombre.setCustomValidity('El nombre no puede contener números.');
    }
});

campoNombre.addEventListener('focus', function() {
    console.log(`El campo ${this.id} ha recibido el foco.`);
    parrafoMensaje.textContent = 'Por favor, introduce tu nombre.';
});

campoNombre.addEventListener('blur', function() {
    console.log(`El campo ${this.id} ha perdido el foco.`);
    parrafoMensaje.textContent = ''; // Limpia el mensaje de ayuda
});

campoNombre.addEventListener('keydown', function(event) {
    // Podemos detectar qué tecla se presionó
    console.log(`Tecla presionada: ${event.key}`);
    // Ejemplo: no permitir la letra 'x'
    if (event.key === 'x') {
        console.log("La letra 'x' no está permitida.");
        event.preventDefault(); // Evita que la 'x' se escriba en el campo
    }
});

checkboxTerminos.addEventListener('change', function() {
    if (checkboxTerminos.checked) {
        console.log('Términos aceptados.');
        botonEnviar.disabled = false; // Habilita el botón
    } else {
        console.log('Términos no aceptados.');
        botonEnviar.disabled = true; // Deshabilita el botón
    }
});

miFormulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const nombreUsuario = campoNombre.value;
    const opcionSeleccionada = document.querySelector('input[name="lenguaje"]:checked');
     if (opcionSeleccionada) {
        const valor = opcionSeleccionada.value;
        console.log(`Tu lenguaje favorito es: ${valor}`);
    } else console.log('Por favor, selecciona una opción.');
    
    parrafoMensaje.textContent = `¡Hola, ${nombreUsuario}! Formulario enviado correctamente.`;
    miFormulario.reset(); // Método que limpia todos los campos del formulario
    botonEnviar.disabled = true; // Volver a deshabilitar el botón
});