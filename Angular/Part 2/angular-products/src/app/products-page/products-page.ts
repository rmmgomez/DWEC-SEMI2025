import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductItem } from '../product-item/product-item';
import { ProductForm } from '../product-form/product-form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'products-page',
  imports: [ProductItem, ProductForm, FormsModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPage {
  title = 'Mi lista de productos';
  products = signal<Product[]>([
    {
      id: 1,
      description: 'SSD hard drive',
      available: '2016-10-03',
      price: 75,
      imageUrl: '/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: '/motherboard.jpg',
      rating: 4,
    },
  ]);
  showImage = signal(true);
  fileName = '';
  search = signal('');

  toggleImage() {
    // this.showImage.set(!this.showImage());
    this.showImage.update((show) => !show);
  }

  addProduct(product: Product) {
    product.id = Math.max(...this.products().map((p) => p.id!)) + 1;
    this.products.update((products) => [...products, product]);
  }

  deleteProduct(product: Product) {
    this.products.update((products) => products.filter((p) => p !== product));
  }

  filteredProducts = computed(() => {
    return this.search()
      ? this.products().filter((p) =>
          p.description.toLowerCase().includes(this.search().toLowerCase())
        )
      : this.products();
  });
}
