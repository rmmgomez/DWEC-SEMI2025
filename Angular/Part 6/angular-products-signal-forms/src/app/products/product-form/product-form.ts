import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64Directive';
import { ProductsService } from '../services/products-service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../shared/guards/leave-page-guard';
import { Field, form, min, minLength, required, validate } from '@angular/forms/signals';
import { minDate } from '../../shared/validators/min-date';
import { LoadButton } from '../../load-button/load-button';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64Directive, Field, LoadButton],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductForm implements CanComponentDeactivate {
  productModel = signal<Product>({
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0,
  });
  loading = false;
  days = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

  productForm = form(this.productModel, (schema) => {
    required(schema.description, { message: 'Description cannot be empty' });
    required(schema.available, { message: 'Available date cannot be empty' });
    required(schema.imageUrl);
    required(schema.price, { message: 'Price cannot be empty' });
    minLength(schema.description, 5, {
      message: (context) =>
        `You must enter at least ${5 - context.field().value().length} characters more`,
    });
    min(schema.price, 0.01, { message: 'Price cannot be 0 or negative' });

    validate(schema.available, ({ value }) => {
      const today = new Date().toISOString().slice(0, 10);
      if (value() && value() < today) {
        return {
          kind: 'minDate',
          message: "Date can't be before today",
        };
      }
      return null;
    });
    minDate(schema.available, new Date().toISOString().slice(0, 10));
  });

  imageField = form(signal(''), (field) => {
    required(field, { message: 'You must choose an image file' });
  });

  #productsService = inject(ProductsService);
  #router = inject(Router);
  saved = false;

  // Este método cambia (no gestionamos la inserción en el array de productos)
  addProduct(event: Event) {
    event.preventDefault();
    this.#productsService.insertProduct(this.productModel()).subscribe(() => {
      this.saved = true;
      this.#router.navigate(['/products']);
    });
  }
  canDeactivate() {
    return (
      this.saved ||
      !this.productForm().dirty() ||
      confirm('¿Quieres abandonar la página?. Los cambios se perderán...')
    );
  }
  setFormData(p: Product) {
    this.productModel.set(p);
  }

  resetForm() {
    this.productModel.set({
      description: '',
      available: '',
      imageUrl: '',
      rating: 1,
      price: 0,
    });
  }

  clearDescription() {
    this.productForm.description().value.set(''); // Si hay debounce tarda
    this.productForm.description().setControlValue(''); // Cambio inmediato
  }
}
