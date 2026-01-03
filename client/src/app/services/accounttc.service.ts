import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Loggedint } from '../models/loggedint-model';
import { map, Observable } from 'rxjs';
import { TechnicianUser } from '../models/technician.model';
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
  loggedIntecSig = signal<Loggedint | null>(null);

  private readonly _baseApiUrl: string = 'http://localhost:5000/api/'

  register(userInput: TechnicianUser): Observable<Loggedint | null> {
    let respons$: Observable<Loggedint | null> =
      this.http.post<Loggedint>(this._baseApiUrl + 'tecaccount/register-tec', userInput)
        .pipe(map(res => {
          if (res) {
            this.setCurrentUser(res);

            this.router.navigateByUrl('/hometec')
          }
          return null;
        }))

    return respons$;
  }

  login(userInput: Login): Observable<Loggedint | null> {
    let respons$: Observable<Loggedint | null> =
      this.http.post<Loggedint>(this._baseApiUrl + 'tecaccount/login-tec', userInput)
        .pipe(map(res => {
          if (res) {
            this.setCurrentUser(res);
            
            this.router.navigateByUrl('/hometec')
          }
          return null;
        }))

    return respons$;
  }

  getalltec(): Observable<Loggedint[]> {
    let respons$: Observable<Loggedint[]> =
      this.http.get<Loggedint[]>(this._baseApiUrl + 'tecmember/getall-tec');

    return respons$;
  }


  logoutt(): void {
    this.loggedIntecSig.set(null)

    localStorage.clear();

    this.router.navigateByUrl('/');
  }

  setCurrentUser(userInput: Loggedint): void {
    this.loggedIntecSig.set(userInput);
    
    if (isPlatformBrowser(this.platformId))
      localStorage.setItem('loggedInTec', JSON.stringify(userInput));
  }
}
