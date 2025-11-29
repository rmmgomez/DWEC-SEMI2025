import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  input,
  numberAttribute,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../services/products-service';
import { rxResource, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, tap } from 'rxjs';
import { Router } from '@angular/router';
import { StarRating } from '../star-rating/star-rating';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'product-detail',
  imports: [StarRating, IntlCurrencyPipe, DatePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetail {
  id = input.required({ transform: numberAttribute });
  #productsService = inject(ProductsService);
  #title = inject(Title);
  #router = inject(Router);
  #destroyRef = inject(DestroyRef);
  #changeDetector = inject(ChangeDetectorRef);

  productResource = rxResource({
    params: () => this.id(), // Dependencia
    stream: ({params: id}) => 
      this.#productsService.getProduct(id).pipe(
        tap((p) => this.#title.setTitle(p.description + ' | Angular Products')),
        catchError(() => {
          this.#router.navigate(['/products']); // Volvemos a la página principal
          return EMPTY; // Devolvemos observable vacío (catchError debe devolver un observable)
        })
      ),
  });

  changeRating(rating: number) {
    const product = this.productResource.value()!;
    const oldRating = product.rating;
    product.rating = rating;

    this.#productsService
      .changeRating(product.id!, rating)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        error: () => {
          product.rating = oldRating;
          this.#changeDetector.markForCheck();
        },
      });
  }

  goBack() {
    this.#router.navigate(['/products']);
  }
}
