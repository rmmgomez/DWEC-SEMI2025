import { ChangeDetectionStrategy, Component, DestroyRef, inject, output } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule, NgForm } from '@angular/forms';
import { EncodeBase64Directive } from '../directives/encode-base64Directive';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductsService } from '../services/products-service';
import { Router } from '@angular/router';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductForm {
  newProduct: Product = {
    id: 0,
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0,
  };
  #productsService = inject(ProductsService);
  #router = inject(Router);
    
  // Este método cambia (no gestionamos la inserción en el array de productos)
  addProduct() {
    this.#productsService
      .insertProduct(this.newProduct)
      .subscribe(() => this.#router.navigate(['/products']));
  }
}
