import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64Directive';
import { ProductsService } from '../services/products-service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../shared/guards/leave-page-guard';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductForm implements CanComponentDeactivate {
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
  saved = false;

  // Este método cambia (no gestionamos la inserción en el array de productos)
  addProduct() {
    this.#productsService.insertProduct(this.newProduct).subscribe(() => {
      this.saved = true;
      this.#router.navigate(['/products']);
    });
  }
  canDeactivate() {
    return this.saved || confirm('¿Quieres abandonar la página?. Los cambios se perderán...');
  }
}
