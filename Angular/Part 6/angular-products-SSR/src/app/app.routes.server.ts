import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'products/product-detail', renderMode: RenderMode.Client }, // Páginas privadas de usuarios
  {
    path: '404',
    renderMode: RenderMode.Server,
    status: 404,
    headers: {
      'Cache-Control': 'no-cache',
    },
  },
  { path: '**', renderMode: RenderMode.Server }, // Resto de páginas
];
