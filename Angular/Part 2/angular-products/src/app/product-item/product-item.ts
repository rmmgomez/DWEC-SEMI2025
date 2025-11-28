import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../interfaces/product';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { StarRating } from "../star-rating/star-rating";

@Component({
  selector: 'product-item',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, StarRating],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItem {
  product = input.required<Product>(); // required (obligatorio)
  showImage = input(true); // Con valor inicial por defecto (opcional)
  deleted = output<void>();

  deleteProduct() {
    this.deleted.emit(); // Lanzamos el evento
  }
}
