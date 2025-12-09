import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Product } from '../interfaces/product';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64Directive';
import { ProductsService } from '../services/products-service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../shared/guards/leave-page-guard';
import { oneCheckedValidator } from '../../shared/directives/one-checked-validator';
import { matchEmail } from '../../shared/directives/match-email';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64Directive, ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductForm implements CanComponentDeactivate {
  #productsService = inject(ProductsService);
  #router = inject(Router);
  saved = false;

  /* productForm = new FormGroup({
    description: new FormControl('', { nonNullable: true }),
    price: new FormControl(0, { nonNullable: true }),
    available: new FormControl('', { nonNullable: true }),
    image: new FormControl('', { nonNullable: true }),
  }); */
  #fb = inject(NonNullableFormBuilder);
  emailGroup = this.#fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, Validators.email]],
    },
    { validators: [matchEmail] },
  );

  productForm = this.#fb.group({
    description: ['', [Validators.required, Validators.minLength(5)]],
    price: [0, [Validators.required, Validators.min(0.1)]],
    available: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    daysOpen: this.#fb.array(
      new Array(7).fill(0).map(() => this.#fb.control(false)), // Genera 7 objetos FormControl con valor false
      { validators: [oneCheckedValidator] },
    ),
    emailGroup: this.emailGroup,
  });
  imageBase64 = '';
  days = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
  daysOpen = new Array(7).fill(true);

  // Este método cambia (no gestionamos la inserción en el array de productos)
  addProduct() {
    const product: Product = {
      ...this.productForm.getRawValue(),
      rating: 1,
      imageUrl: this.imageBase64,
    };
    this.#productsService.insertProduct(product).subscribe(() => {
      this.saved = true;
      this.#router.navigate(['/products']);
    });
  }
  canDeactivate() {
    return (
      this.saved ||
      this.productForm.pristine ||
      confirm('¿Quieres abandonar la página?. Los cambios se perderán...')
    );
  }
  resetForm() {
    this.productForm.reset();
  }
}
