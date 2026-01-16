import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const server = "https://api.fullstackpro.es/products-example"; // Pon la url del servidor aquí
  const reqClone = req.clone({
    url: `${server}/${req.url}`,
  });
  return next(reqClone);
};