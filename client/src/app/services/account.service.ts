import { inject, Injectable, signal } from '@angular/core';
import { Buildingm } from '../models/buildingm.model';
import { map, Observable } from 'rxjs';
import { Loggedinm } from '../models/loggedinm-model';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login-model';
import { Router } from '@angular/router';
import { RegisterBM } from '../models/register-bm';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  http = inject(HttpClient)
  router = inject(Router);
  loggedInUserSig = signal<Loggedinm | null>(null);

  private readonly _baseApiUrl: string = 'http://localhost:5000/api/'

  register(userInput: RegisterBM): Observable<Loggedinm | null> {
    let respons$: Observable<Loggedinm | null> =
      this.http.post<Loggedinm>(this._baseApiUrl + 'bmaccount/register', userInput)
        .pipe(map(res => {
          if (res) {
            this.setCurrentUser(res);

            this.router.navigateByUrl('/homebui');
          }
          return null
        }))


    return respons$;
  }

  login(userInput: Login): Observable<Loggedinm | null> {
    let respons$: Observable<Loggedinm | null> =
      this.http.post<Loggedinm>(this._baseApiUrl + 'bmaneger/login', userInput)
        .pipe(map(res => {
          if (res) {
            this.setCurrentUser(res);

            this.router.navigateByUrl('/homebui');
          }

          return null

        }))


    return respons$;
  }

  relodloggedInManeger(): void {
    this.http.get<Loggedinm>(this._baseApiUrl + 'bmaccount').subscribe()
  }

  logoutm(): void {
    this.loggedInUserSig.set(null)

    localStorage.clear();

    this.router.navigateByUrl('/');
  }

  setCurrentUser(userInput: Loggedinm): void {
    this.loggedInUserSig.set(userInput);

    localStorage.setItem('loggedIn', JSON.stringify(userInput));
  }
}