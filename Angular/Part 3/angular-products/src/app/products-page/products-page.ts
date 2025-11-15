import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { AsyncPipe, NgClass } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
import { ProductForm } from '../product-form/product-form';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products-service';
import { toObservable } from '@angular/core/rxjs-interop';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'products-page',
  imports: [NgClass, ProductItem, ProductForm, FormsModule, AsyncPipe],
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

  filteredProducts$ = combineLatest([
    this.products$,
    toObservable(this.search),
  ]).pipe(
    map(([products, search]) => {
      return search
        ? products.filter((p) =>
            p.description.toLowerCase().includes(this.search().toLowerCase())
          )
        : products;
    })
  );

  constructor() {
    this.#productsService.getProducts().subscribe(p => this.products$.next(p));
  }

  toggleImage() {
    // this.showImage.set(!this.showImage());
    this.showImage.update((show) => !show);
  }

  addProduct(product: Product) {
    this.products$.next([...this.products$.getValue(), product]);
  }

  deleteProduct(product: Product) {
    this.products$.next(this.products$.getValue().filter(p => p !== product));
  }
}
