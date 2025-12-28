import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { loggedint } from '../models/loggedint-model';
import { map, Observable } from 'rxjs';
import { loggedinm } from '../models/loggedinm-model';
import { technician } from '../models/technician.model';
import { Login } from '../models/login-model';
import { Router } from '@angular/router';
import { platformBrowser } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AccounttcService {
  http = inject(HttpClient);
  router = inject(Router);
  platformId = inject(PLATFORM_ID);
  loggedIntecSig = signal<loggedint | null>(null);

  private readonly _baseApiUrl: string = 'http://localhost:5000/api/'

  register(userInput: technician): Observable<loggedint | null> {
    let respons$: Observable<loggedint | null> =
      this.http.post<loggedint>(this._baseApiUrl + 'tecaccount/register-tec', userInput)
        .pipe(map(res => {
          if (res) {
            this.setCurrentUser(res);
          }
          return null;
        }))
    this.router.navigateByUrl('/hometec')

    return respons$;
  }

  login(userInput: Login): Observable<loggedint | null> {
    let respons$: Observable<loggedint | null> =
      this.http.post<loggedint>(this._baseApiUrl + 'tecaccount/login-tec', userInput)
        .pipe(map(res => {
          if (res) {
            this.setCurrentUser(res);
          }
          return null;
        }))
    this.router.navigateByUrl('/hometec')

    return respons$;
  }

  getalltec(): Observable<loggedint[]> {
    let respons$: Observable<loggedint[]> =
      this.http.get<loggedint[]>(this._baseApiUrl + 'tecmember/getall-tec');

    return respons$;
  }


  logoutt(): void {
    this.loggedIntecSig.set(null)

    localStorage.clear();

    this.router.navigateByUrl('/');
  }

  setCurrentUser(userInput: loggedint): void {
    this.loggedIntecSig.set(userInput);
    
    if (isPlatformBrowser(this.platformId))
      localStorage.setItem('loggedInTec', JSON.stringify(userInput));
  }
}
