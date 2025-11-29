import { Routes } from '@angular/router';
import { ProductsPage } from './products-page/products-page';
import { ProductForm } from './product-form/product-form';
import { ProductDetail } from './product-detail/product-detail';
import { productResolver } from './resolvers/product-resolver';

export const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductsPage, title: 'Productos | Angular Products' },
      { path: 'add', component: ProductForm, title: 'Añadir producto | Angular Products' },
      {
        path: ':id', resolve: { product: productResolver, }, component: ProductDetail, },
    ],
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products' },
];
