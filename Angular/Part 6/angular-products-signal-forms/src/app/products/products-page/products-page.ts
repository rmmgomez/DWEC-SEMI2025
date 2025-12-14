import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  linkedSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductItem } from '../product-item/product-item';
import { ProductsService } from '../services/products-service';
import { Title } from '@angular/platform-browser';
import { debounce, Field, form } from '@angular/forms/signals';

@Component({
  selector: 'products-page',
  imports: [ProductItem, Field],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPage {
  title = 'Mi lista de productos';
  showImage = signal(true);
  fileName = '';
  search = signal('');
  searchField = form(this.search, (schema) => {
    debounce(schema, 600);
  });
  readonly #productsService = inject(ProductsService); // Inyectamos el servicio
  // Cambiamos el tipo de resource para que use la signal search
  readonly productsResource = this.#productsService.getProductsSearchResource(this.search);
  // Modificamos la linkedSignal para que no guarde un array vacío (valor por defecto del resource)
  // mientras este carga datos. Para ello usamos computation
  products: WritableSignal<Product[]> = linkedSignal({
    source: () => this.productsResource.value()?.products,
    computation: (resp, previous) => (resp ? resp : previous?.value || []),
  });
  #titleService = inject(Title);

  filteredProducts = computed(() => {
    console.log(this.search());
    return this.search()
      ? this.products().filter((p) =>
          p.description.toLowerCase().includes(this.search().toLowerCase()),
        )
      : this.products();
  });

  constructor() {
    this.#titleService.setTitle('Título del navegador');
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
