import { ProductsService } from "./products-service.js";

const productsService = new ProductsService();

const productsTable = document.getElementById("products");
const formProducto = document.getElementById("formProducto");
const imgPreview = document.getElementById("imgPreview");
const productTemplate = document.getElementById("productTemplate");

function getProducts() {
  const products = productsService.getProductos();
  products.forEach((p) => showProduct(p));
}

function showProduct(product) {
  const priceFormat = new Intl.NumberFormat("es", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);

  const availFormat = new Intl.DateTimeFormat("es").format(
    new Date(product.available)
  );

  const userHTML = productTemplate.content.cloneNode(true);
  const tr = userHTML.firstElementChild;

  tr.querySelector("img").src = product.imageUrl;
  tr.children[1].textContent = product.description;
  tr.children[2].textContent = priceFormat;
  tr.children[3].textContent = availFormat;

  const btnDelete = tr.querySelector("button");
  btnDelete.addEventListener("click", async (e) => {
    if (confirm("¿Estás seguro que quieres eliminar el producto?")) {
      productsService.delete(product);
      tr.remove();
    }
  });

  productsTable.querySelector("tbody").append(tr);
}

getProducts();

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

formProducto.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = {
    description: formProducto.description.value,
    price: +formProducto.price.value,
    imageUrl: imgPreview.src,
    available: new Date().toISOString().split("T")[0],
    rating: 1,
  };

  productsService.add(product);
  showProduct(product);
  formProducto.reset();
  imgPreview.src = "";
});
