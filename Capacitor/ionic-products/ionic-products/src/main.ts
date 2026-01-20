import { bootstrapApplication } from '@angular/platform-browser';
import {
  PreloadAllModules,
  RouteReuseStrategy,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
  withRouterConfig,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { authInterceptor } from './app/interceptors/auth-interceptor';
import { baseUrlInterceptor } from './app/interceptors/base-url-interceptor';
defineCustomElements(window);
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
    ),
    provideHttpClient(withInterceptors([baseUrlInterceptor, authInterceptor])),
  ],
});
