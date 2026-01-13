import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ToastController,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonLabel,
} from '@ionic/angular/standalone';

import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Product } from '../interfaces/product';
import { Products } from '../services/products';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    FormsModule,
    IonButtons,
    IonItem,
    IonList,
    IonIcon,
    IonMenuButton,
    IonLabel,
    IonButton,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    RouterLink,
    IonInput,
  ],
})
export class ProductFormPage {
  constructor(private router: Router) {}
  newProd: Product = {
    description: '',
    price: 0,
    imageUrl: '',
  };

  #productsService = inject(Products);
  #toastCtrl = inject(ToastController);
  #changeDetector = inject(ChangeDetectorRef);

  addProduct() {
    this.#productsService.addProduct(this.newProd).subscribe({
      next: async (prod) => {
        (
          await this.#toastCtrl.create({
            position: 'bottom',
            duration: 3000,
            message: 'Product added succesfully',
            color: 'success',
          })
        ).present();
        this.router.navigate(['/products']);
      },
      error: async (error) =>
        (
          await this.#toastCtrl.create({
            position: 'bottom',
            duration: 3000,
            message: 'Error adding product',
          })
        ).present(),
    });
  }

  async takePhoto() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      height: 640,
      width: 640,
      allowEditing: true,
      resultType: CameraResultType.DataUrl, // Base64 (url encoded)
    });

    this.newProd.imageUrl = photo.dataUrl as string;
    this.#changeDetector.markForCheck();
  }

  async pickFromGallery() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 640,
      width: 640,
      // allowEditing: true,
      resultType: CameraResultType.DataUrl, // Base64 (url encoded)
    });

    this.newProd.imageUrl = photo.dataUrl as string;
    this.#changeDetector.markForCheck();
  }
}
