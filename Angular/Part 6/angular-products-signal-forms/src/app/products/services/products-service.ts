import { computed, inject, Injectable, Signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { ProductsResponse, SingleProductResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #productsUrl = 'products';
  #http = inject(HttpClient);

  readonly productsResource = httpResource<ProductsResponse>(() => `products`, {
    defaultValue: { products: [] },
  });

  getProduct(id: number): Observable<Product> {
    return this.#http
      .get<SingleProductResponse>(`${this.#productsUrl}/${id}`)
      .pipe(map((resp: SingleProductResponse) => resp.product));
  }
  getProductsSearchResource(search: Signal<string>) {
    const queryParams = computed(() => new URLSearchParams({ search: search() }).toString());
    return httpResource<ProductsResponse>(() => `products?${queryParams()}`);
  }

  getProductIdResource(id: Signal<number>) {
    return httpResource<SingleProductResponse>(
      () => (id() ? `products/${id()}` : undefined), // Cuando es undefined no lanza petición http
    );
  }

  changeRating(idProduct: number, rating: number): Observable<void> {
    return this.#http.put<void>(`${this.#productsUrl}/${idProduct}/rating`, {
      rating: rating,
    });
  }

  insertProduct(product: Product): Observable<Product> {
    return this.#http.post<SingleProductResponse>(this.#productsUrl, product).pipe(
      map((resp: SingleProductResponse) => resp.product),
      tap(() => this.productsResource.reload()),
    );
  }

  deleteProduct(id: number): Observable<void> {
    return this.#http
      .delete<void>(`${this.#productsUrl}/${id}`)
      .pipe(tap(() => this.productsResource.reload()));
  }
}
