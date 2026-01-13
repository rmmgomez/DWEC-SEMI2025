import { Component, inject, signal } from '@angular/core';
import {
  ActionSheetController,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonRefresher,
  IonRefresherContent,
  IonRouterLink,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  NavController,
} from '@ionic/angular/standalone';

import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product';
import { Products } from '../services/products';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    IonRouterLink,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
  ],
})
export class HomePage {
  products = signal<Product[]>([]);

  #productsService = inject(Products);
  #navController = inject(NavController);
  #actionSheetCtrl = inject(ActionSheetController);

  ionViewWillEnter() {
    this.reloadProducts();
  }

  reloadProducts(refresher?: IonRefresher) {
    this.#productsService.getProducts().subscribe((prods) => {
      this.products.set(prods);
      refresher?.complete();
    });
  }

  async showOptions(prod: Product) {
    const actSheet = await this.#actionSheetCtrl.create({
      header: prod.description,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.#productsService
              .deleteProduct(prod.id!)
              .subscribe(() =>
                this.products.update((prods) =>
                  prods.filter((p) => p !== prod),
                ),
              );
          },
        },
        {
          text: 'See details',
          icon: 'eye',
          handler: () => {
            this.#navController.navigateForward(['/products', prod.id]);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    actSheet.present();
  }
}
