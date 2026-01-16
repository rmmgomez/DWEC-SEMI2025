import { Component, effect, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  Platform,
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterLink,
  IonRouterOutlet,
  IonSplitPane,
  IonAvatar,
  IonImg,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Auth } from './auth/services/auth';
import { User } from './auth/interfaces/user';
import { SplashScreen } from '@capacitor/splash-screen';
import {
  add,
  arrowUndoCircle,
  camera,
  chatboxEllipses,
  checkmarkCircle,
  close,
  documentText,
  exit,
  eye,
  home,
  images,
  informationCircle,
  logIn,
  menu,
  trash,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    IonAvatar,
    IonImg,
  ],
})
export class AppComponent {
  protected readonly title = signal('Products - ionic');
  user = signal<User | null>(null);

  #authService = inject(Auth);
  #platform = inject(Platform);

  public appPages = [
    { title: 'Home', url: '/products', icon: 'home' },
    { title: 'Add product', url: '/products/add', icon: 'add' },
  ];
  constructor(private router: Router) {
    addIcons({
      home,
      logIn,
      documentText,
      checkmarkCircle,
      images,
      camera,
      arrowUndoCircle,
      add,
      chatboxEllipses,
      menu,
      trash,
      close,
      exit,
      eye,
      informationCircle,
    });

    effect(() => {
      if (this.#authService.logged()) {
        this.#authService.getProfile().subscribe((user) => this.user.set(user));
      } else {
        this.user.set(null);
      }
    });

    this.initializeApp();
  }

  async initializeApp() {
    if (this.#platform.is('capacitor')) {
      await this.#platform.ready();
      SplashScreen.hide();
    }
  }

  async logout() {
    await this.#authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
