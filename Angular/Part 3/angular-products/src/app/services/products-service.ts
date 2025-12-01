import { inject, Injectable, Signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ProductsResponse, SingleProductResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #productsUrl = 'products';
  #http = inject(HttpClient);
  // Resource compartido para la aplicación
  readonly productsResource = httpResource<ProductsResponse>(() => `products`, {
    defaultValue: { products: [] },
  });

  getProductIdResource(id: Signal<number>) {
    return httpResource<SingleProductResponse>(
      () => (id() ? `products/${id()}` : undefined) // Cuando es undefined no lanza petición http
    );
  }
  /* getProducts(): Observable<Product[]> {
    return this.#http
      .get<ProductsResponse>(`${this.#productsUrl}`)
      .pipe(map((resp) => resp.products));
  } */

  changeRating(idProduct: number, rating: number): Observable<void> {
    return this.#http.put<void>(`${this.#productsUrl}/${idProduct}/rating`, {
      rating: rating,
    });
  }

  insertProduct(product: Product): Observable<Product> {
    return this.#http
      .post<SingleProductResponse>(this.#productsUrl, product)
      .pipe(map((resp) => resp.product));
  }

  deleteProduct(id: number): Observable<void> {
    return this.#http.delete<void>(`${this.#productsUrl}/${id}`);
  }
}
