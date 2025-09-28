const avatar = document.getElementById("avatar");

avatar.addEventListener('change', () => {
  const file = avatar.files[0];

  // Si no hay archivo, no hay error personalizado (el atributo required se encargará) 
  if(!file) {
    avatar.setCustomValidity("");
    return;
  }

  if(!file.type.startsWith("image")) {
    avatar.setCustomValidity("El archivo debe ser de tipo imagen");
  } else if(file.size > 100000) {
    avatar.setCustomValidity("No puedes seleccionar imágenes de más de 100KB");
  } else {
    avatar.setCustomValidity(""); // No hay error
  }
  avatar.reportValidity(); // Mostramos el posible mensaje de error sin esperar al envío (submit)
});
