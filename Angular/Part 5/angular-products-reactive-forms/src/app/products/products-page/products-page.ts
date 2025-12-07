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
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../services/products-service';
import { Title } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'products-page',
  imports: [ProductItem, FormsModule, ReactiveFormsModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPage {
  title = 'Mi lista de productos';
  showImage = signal(true);
  fileName = '';
  #titleService = inject(Title);
  searchControl = new FormControl('', { nonNullable: true });
  search = toSignal(
    this.searchControl.valueChanges.pipe(
      debounceTime(600), // 600 milisegundos hasta que deja de escribir
      distinctUntilChanged(), // Solo si el valor cambia
    ),
    { initialValue: '' },
  );

  readonly #productsService = inject(ProductsService); // Inyectamos el servicio
  // Cambiamos el tipo de resource para que use la signal search
  readonly productsResource = this.#productsService.getProductsSearchResource(this.search);
  // Modificamos la linkedSignal para que no guarde un array vacío (valor por defecto del resource)
  // mientras este carga datos. Para ello usamos computation
  products: WritableSignal<Product[]> = linkedSignal({
    source: () => this.productsResource.value()?.products,
    computation: (resp, previous) => (resp ? resp : previous?.value || []),
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
