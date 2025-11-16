import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { NgClass } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
import { ProductForm } from '../product-form/product-form';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'products-page',
  imports: [NgClass, ProductItem, ProductForm, FormsModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPage {
  title = 'Mi lista de productos';
  products = signal<Product[]>([]); /* Ahora los obtenemos del servicio */
  showImage = signal(true);
  fileName = '';
  search = signal('');
  #productsService = inject(ProductsService); // Inyectamos el servicio
  products$ = new BehaviorSubject<Product[]>([]);

  filteredProducts = computed(() => {
    return this.search()
      ? this.products().filter((p) =>
          p.description.toLowerCase().includes(this.search().toLowerCase())
        )
      : this.products();
  });

  constructor() {
    this.#productsService
      .getProducts()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (products) => this.products.set(products),
        error: (error) => console.error(error),
      });
  }

  toggleImage() {
    // this.showImage.set(!this.showImage());
    this.showImage.update((show) => !show);
  }

  addProduct(product: Product) {
    this.products$.next([...this.products$.getValue(), product]);
  }

  deleteProduct(product: Product) {
    this.products$.next(this.products$.getValue().filter((p) => p !== product));
  }
}
