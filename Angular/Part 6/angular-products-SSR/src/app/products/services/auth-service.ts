import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TokenResponse } from '../interfaces/responses';
import { LoginData } from '../interfaces/user';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #http = inject(HttpClient);
  #logged = signal(false);
  cookieService = inject(SsrCookieService);
  //...
  login(data: LoginData): Observable<void> {
    return this.#http.post<TokenResponse>('auth/login', data).pipe(
      map((r) => {
        this.cookieService.set('token', r.accessToken, {
          path: '/',
          expires: 365,
        });
        this.#logged.set(true);
      }),
    );
  }
  //...
}
