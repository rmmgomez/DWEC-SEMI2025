import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome').then((m) => m.Welcome),
    title: 'Bienvenido | Angular Products',
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register').then((m) => m.Register),
    title: 'Register | Angular Products',
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes').then((m) => m.productsRoutes),
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome' },
];
