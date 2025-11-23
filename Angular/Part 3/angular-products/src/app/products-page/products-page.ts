import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductItem } from '../product-item/product-item';
import { ProductForm } from '../product-form/product-form';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products-service';

@Component({
  selector: 'products-page',
  imports: [ProductItem, ProductForm, FormsModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPage {
  title = 'Mi lista de productos';
  showImage = signal(true);
  fileName = '';
  search = signal('');
  readonly #productsService = inject(ProductsService); // Inyectamos el servicio
  readonly productsResource = this.#productsService.productsResource;
  products = linkedSignal(() => this.productsResource.value().products);

  filteredProducts = computed(() => {
    return this.search()
      ? this.products().filter((p) =>
          p.description.toLowerCase().includes(this.search().toLowerCase())
        )
      : this.products();
  });

  constructor() {
    /* this.#productsService
      .getProducts()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (products) => this.products.set(products),
        error: (error) => console.error(error),
      }); */
  }

  toggleImage() {
    // this.showImage.set(!this.showImage());
    this.showImage.update((show) => !show);
  }

  addProduct(product: Product) {
    this.products.update((products) => products.concat(product));
  }

  deleteProduct(product: Product) {
    this.products.update((products) => products.filter((p) => p !== product));
  }
}
