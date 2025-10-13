export class ProductsService {
  #products = [];

  getProductos() {
    this.#products = JSON.parse(localStorage.getItem("products") || '[]');
    return this.#products;
  }

  add(product) {
    this.#products.push(product);
    localStorage.setItem("products", JSON.stringify(this.#products));
  }

  delete(product) {
    this.#products = this.#products.filter(p => p !== product);
    localStorage.setItem("products", JSON.stringify(this.#products));
  }
}