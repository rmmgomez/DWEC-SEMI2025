import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './shared/interceptors/base-url-interceptor';
import { provideSignalFormsConfig, SignalFormsConfig } from '@angular/forms/signals';
import { provideSweetAlert2 } from '@sweetalert2/ngx-sweetalert2';
import { provideGoogleId } from './shared/google/google-login.config';
import { provideFacebookId } from './shared/facebook/facebook-login.config';

/* Para Tailwind necesitamos vaid, invalid y touched */
export const NG_STATUS_CLASSES: SignalFormsConfig['classes'] = {
  'ng-touched': (state) => state.touched(),
  'ng-untouched': (state) => !state.touched(),
  'ng-dirty': (state) => state.dirty(),
  'ng-pristine': (state) => !state.dirty(),
  'ng-valid': (state) => state.valid(),
  'ng-invalid': (state) => state.invalid(),
  'ng-pending': (state) => state.pending(),
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([baseUrlInterceptor])),
    provideSignalFormsConfig({
      classes: {
        ...NG_STATUS_CLASSES,
        'is-valid': (state) => state.touched() && state.valid(),
        'is-invalid': (state) => state.touched() && state.invalid(),
      },
    }),
    provideSweetAlert2({
      // Optional configuration
      fireOnInit: false,
      dismissOnDestroy: true,
    }),
    provideGoogleId('1002957697747-v0fevraaubhn6dl6g2a474l92k2b0cg3.apps.googleusercontent.com'),
    provideFacebookId('2699002260432657', 'v24.0')
  ],
};
