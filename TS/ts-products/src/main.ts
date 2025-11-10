import type { Product } from "./interfaces/product";
import { ProductsService } from "./products-service";

const productsService = new ProductsService();

const productsTable = document.getElementById("products") as HTMLTableElement;
const formProducto = document.getElementById("formProducto") as HTMLFormElement;
const imgPreview = document.getElementById("imgPreview") as HTMLImageElement;

async function getProducts() {
    const products = await productsService.getProductos();
    products.forEach((p) => showProduct(p));
}

function showProduct(product: Product) {
    const tr = document.createElement("tr");
    const tdImage = document.createElement("td");
    const tdDesc = document.createElement("td");
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
    btnDelete.classList.add("btn", "btn-danger");
    btnDelete.textContent = "Delete";
    btnDelete.addEventListener("click", async () => {
        await productsService.delete(product.id!);
        tr.remove();
    });
    tdDelete.append(btnDelete);

    tr.append(tdImage, tdDesc, tdPrice, tdAvail, tdDelete);
    productsTable.querySelector("tbody")!.append(tr);
}

getProducts().catch(console.error);

(formProducto.image as HTMLImageElement).addEventListener("change", () => {
    const file = (formProducto.image as HTMLInputElement).files![0];
    const reader = new FileReader();

    if (file) {
        // Si se ha seleccionado un archivo válido (convertir a Base64)
        reader.readAsDataURL(file);
    }

    reader.addEventListener("load", () => {
        // Evento de conversión a Base64 completa (asíncrono)
        imgPreview.src = reader.result as string; // Mostramos la imagen cargada en un elemento <img> (previsualización)
    });
});

formProducto.addEventListener("submit", addProduct);

async function addProduct(event: Event) {
    event.preventDefault();

    const product = {
        description: (formProducto.description as HTMLInputElement).value,
        price: +(formProducto.price as HTMLInputElement).value,
        imageUrl: imgPreview.src,
        available: new Date().toISOString().split("T")[0],
        rating: 1,
    };
    try {
        showProduct(await productsService.add(product));
        formProducto.reset();
        imgPreview.src = "";
    } catch (error) {
        console.log(error);
    }
}
