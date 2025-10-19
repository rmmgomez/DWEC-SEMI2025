const SERVER = "https://api.fullstackpro.es/products-example";
/* 
Códigos que te devuelve el servidor entre otros:
Códigos 2xx: Respuestas Exitosas
  200 OK: Es el código más común. Significa que la petición tuvo éxito. La respuesta exacta depende del método usado (GET, POST, etc.).
  201 Created: La petición tuvo éxito y, como resultado, se creó un nuevo recurso en el servidor. Es típico de las peticiones POST o PUT.
  204 No Content: El servidor procesó la petición con éxito, pero no devuelve ningún contenido.
Códigos 4xx: Errores del Cliente
  400 Bad Request: El servidor no puede entender la petición debido a una sintaxis incorrecta.
  401 Unauthorized: El cliente debe autenticarse para obtener la respuesta solicitada. Se requiere iniciar sesión.
  403 Forbidden: El cliente no tiene los permisos necesarios para acceder al contenido. Aunque esté autenticado, no tiene autorización.
  404 Not Found: Es el error más famoso. El servidor no pudo encontrar el recurso solicitado.
  429 Too Many Requests: El usuario ha enviado demasiadas peticiones en un período de tiempo determinado
Códigos 5xx: Errores del Servidor
  500 Internal Server Error: Un error genérico que indica que algo salió mal en el servidor, pero no se puede especificar el problema exacto.
  502 Bad Gateway: El servidor estaba actuando como intermediario y recibió una respuesta inválida de otro servidor.
  503 Service Unavailable: El servidor no está disponible en este momento, generalmente por sobrecarga o mantenimiento.
  504 Gateway Timeout: El servidor intermediario no recibió una respuesta a tiempo del servidor principal.
*/

const productsTable = document.getElementById("products");
const formProducto = document.getElementById("formProducto");
const imgPreview = document.getElementById("imgPreview");

function getProducts() {
  fetch(`${SERVER}/products`)
    .then((resp) => resp.json()) // deserializar la respuesta como objeto JSON.
    .then((json) => { // A su vez me devuelve otra promesa con el JSON resultante
      json.products.forEach((p) => showProduct(p));
    });
}

function showProduct(product) {
  const tr = document.createElement("tr");
  const tdImage = document.createElement("td");
  const tdDesc = document.createElement("th");
  const tdPrice = document.createElement("td");
  const tdAvail = document.createElement("td");
  const tdDelete = document.createElement("td");

  const img = document.createElement("img");
  img.src = product.imageUrl;

  tdImage.append(img);
  tdDesc.textContent = product.description;
  tdPrice.textContent = new Intl.NumberFormat("es", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);
  tdAvail.textContent = new Intl.DateTimeFormat("es").format(
    new Date(product.available)
  );

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn","btn-danger");
  btnDelete.textContent = "Delete";
  btnDelete.addEventListener("click", (e) => {
    fetch(`${SERVER}/products/${product.id}`, { method: "DELETE" })
      .then((r) => tr.remove());
  });
  tdDelete.append(btnDelete);

  tr.append(tdImage, tdDesc, tdPrice, tdAvail, tdDelete);
  productsTable.querySelector("tbody").append(tr);
}

getProducts();

// FORM

formProducto.image.addEventListener("change", (e) => {
  const file = formProducto.image.files[0];
  const reader = new FileReader();

  if (file) {
    // Si se ha seleccionado un archivo válido (convertir a Base64)
    reader.readAsDataURL(file);
  }

  reader.addEventListener("load", () => {
    // Evento de conversión a Base64 completa (asíncrono)
    imgPreview.src = reader.result; // Mostramos la imagen cargada en un elemento <img> (previsualización)
  });
});

formulario.foto.addEventListener('change',  () => {
    const file   = formulario.foto.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => { // Evento de conversión a Base64 completa (asíncrono)
        imagePreview.src = reader.result; // Mostramos la imagen cargada en un elemento <img> (previsualización)
    }, false);

    if (file) { // Si se ha seleccionado un archivo válido (convertir a Base64)
        reader.readAsDataURL(file);
    }
});

formProducto.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = {
    description: formProducto.description.value,
    price: +formProducto.price.value,
    imageUrl: imgPreview.src,
    available: new Date().toISOString().split("T")[0],
    rating: 1,
  };

  fetch(`${SERVER}/products`, {
    method: "POST",
    body: JSON.stringify(product), // El servidor requiere que le enviemos los datos en JSON, los serializo
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((json) => {
      showProduct(json.product);
      formProducto.reset();
      imgPreview.src = "";
    });
});
