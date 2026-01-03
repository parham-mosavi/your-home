import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import { Loggedinm } from '../../../models/loggedinm-model';
import { Observable } from 'rxjs';
import { Buildingm } from '../../../models/buildingm.model';
import { Login } from '../../../models/login-model';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [RouterModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  accountService = inject(AccountService);
  fB = inject(FormBuilder);
  userResponse: Loggedinm | undefined | null;
  error: string | undefined;

  registerFg = this.fB.group({
    phoneNumberCtrl: ['', [Validators.required]],
    passwordCtrl: ['', [Validators.required]]
  });

  get PhoneNumberCtrl(): FormControl {
    return this.registerFg.get('phoneNumberCtrl') as FormControl;
  }

  get PasswordCtrl(): FormControl {
    return this.registerFg.get('passwordCtrl') as FormControl;
  }

  login(): void {
    let userInput: Login = {
      phoneNumber: this.PhoneNumberCtrl.value,
      password: this.PasswordCtrl.value
    }

    let response$: Observable<Loggedinm | null> = this.accountService.login(userInput);

    response$.subscribe({
      next: (res) => {
        console.log(res);
        this.userResponse = res;
      },
      error: (err) => {
        console.log(err.error);
        this.error = err.error;
      }
    });
  }
}
