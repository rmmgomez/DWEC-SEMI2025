import {
  Component,
  computed,
  effect,
  inject,
  input,
  numberAttribute,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Products } from '../services/products';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  ],
})
export class ProductDetailPage {
  #productsService = inject(Products);
  id = input.required({ transform: numberAttribute });
  productResource = this.#productsService.getProductIdResource(this.id);
  product = computed(() => this.productResource.value()?.product);
}
