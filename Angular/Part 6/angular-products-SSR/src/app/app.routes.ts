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
    path: 'proyeccion',
    loadComponent: () => import('./proyeccion/proyeccion').then((m) => m.Proyeccion),
    title: 'Proyeccion | Angular Products',
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes').then((m) => m.productsRoutes),
  },
  {
    path: '404',
    /* Podría crearme un componente de error */
    loadComponent: () => import('./welcome/welcome').then((m) => m.Welcome),
    title: 'Bienvenido | Angular Products',
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome' },
];
