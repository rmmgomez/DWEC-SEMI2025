import { Routes } from '@angular/router';
import { loginActivateGuard } from './guards/login-activate-guard';
import { logoutActivateGuard } from './guards/logout-activate-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [logoutActivateGuard],
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'products',
    canActivate: [loginActivateGuard],
    loadChildren: () =>
      import('./products/products.routes').then((m) => m.productsRoutes),
  },
];
