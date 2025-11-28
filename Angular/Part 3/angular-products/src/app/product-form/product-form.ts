import { ChangeDetectionStrategy, Component, DestroyRef, inject, output } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule, NgForm } from '@angular/forms';
import { EncodeBase64Directive } from '../directives/encode-base64Directive';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductsService } from '../services/products-service';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductForm {
  add = output<Product>();
  newProduct: Product = {
    id: 0,
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0,
  };
  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
    
  // Este método cambia (no gestionamos la inserción en el array de productos)
  addProduct(productForm: NgForm) {
    this.#productsService
      .insertProduct(this.newProduct)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((product) => {
        this.add.emit(product); // Emitimos el producto (con id) devuelto por el servidor
        productForm.resetForm(); // Reseteamos los campos de newProduct
        this.newProduct.imageUrl = ''; // La imagen también (no está vinculada al formulario)
      });
  }
}
