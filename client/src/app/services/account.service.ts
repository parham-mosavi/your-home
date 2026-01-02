import { inject, Injectable, signal } from '@angular/core';
import { buildingm } from '../models/buildingm.model';
import { map, Observable } from 'rxjs';
import { loggedinm } from '../models/loggedinm-model';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  http = inject(HttpClient)
  router = inject(Router);
  loggedInUserSig = signal<loggedinm | null>(null);

  private readonly _baseApiUrl: string = 'http://localhost:5000/api/'

  register(userInput: buildingm): Observable<loggedinm | null> {
    let respons$: Observable<loggedinm | null> =
      this.http.post<loggedinm>(this._baseApiUrl + 'bmaneger/register', userInput)
        .pipe(map(res => {
          if (res) {
            this.setCurrentUser(res);
            
            this.router.navigateByUrl('/homebui');
          }
          return null
        }))


    return respons$;
  }

  login(userInput: Login): Observable<loggedinm | null> {
    let respons$: Observable<loggedinm | null> =
      this.http.post<loggedinm>(this._baseApiUrl + 'bmaneger/login', userInput)
        .pipe(map(res => {
          if (res) {
            this.setCurrentUser(res);

            this.router.navigateByUrl('/homebui');
          }

          return null

        }))

    
    return respons$;
  }

  logoutm(): void {
    this.loggedInUserSig.set(null)

    localStorage.clear();

    this.router.navigateByUrl('/');
  }

  setCurrentUser(userInput: loggedinm): void {
    this.loggedInUserSig.set(userInput);

    localStorage.setItem('loggedIn', JSON.stringify(userInput));
  }
}