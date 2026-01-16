import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../interfaces/product';
import { Comment } from '../interfaces/comment';
import {
  ProductsResponse,
  SingleProductResponse,
  SingleCommentResponse,
  CommentsResponse,
} from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class Products {
  #http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.#http
      .get<ProductsResponse>('products')
      .pipe(map((resp) => resp.products));
  }

  getProduct(id: number): Observable<Product> {
    return this.#http
      .get<SingleProductResponse>(`products/${id}`)
      .pipe(map((resp) => resp.product));
  }

  addProduct(prod: Product): Observable<Product> {
    return this.#http
      .post<SingleProductResponse>('products', prod)
      .pipe(map((resp) => resp.product));
  }

  deleteProduct(idProd: number): Observable<void> {
    return this.#http.delete<void>(`products/${idProd}`);
  }

  addComment(idProd: number, comment: string): Observable<Comment> {
    return this.#http
      .post<SingleCommentResponse>(`products/${idProd}/comments`, {
        text: comment,
      })
      .pipe(map((resp) => resp.comment));
  }

  getComments(idProd: number): Observable<Comment[]> {
    return this.#http
      .get<CommentsResponse>(`products/${idProd}/comments`)
      .pipe(map((resp) => resp.comments));
  }
}
