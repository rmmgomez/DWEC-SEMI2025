import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {
  AlertController,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    FormsModule,
    IonGrid,
    IonCol,
    IonButton,
    IonIcon,
    IonRow,
    IonInput,
  ],
})
export class LoginPage {
  email = '';
  password = '';

  #authService = inject(Auth);
  #alertCtrl = inject(AlertController);

  constructor(private router: Router) {}
  login() {
    this.#authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/products']),
      error: async (error) => {
        (
          await this.#alertCtrl.create({
            header: 'Login error',
            message: 'Incorrect email and/or password',
            buttons: ['Ok'],
          })
        ).present();
      },
    });
  }
}
