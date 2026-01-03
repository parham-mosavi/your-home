import { Component, inject, Inject } from '@angular/core';
import { AccounttcService } from '../../../services/accounttc.service';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TechnicianUser } from '../../../models/technician.model';
import { Observable, Subscription } from 'rxjs';
import { Loggedint } from '../../../models/loggedint-model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-registertec',
  imports: [RouterModule, MatRadioModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatButtonModule, MatInputModule, MatDatepickerModule],
  templateUrl: './registertec.component.html',
  styleUrl: './registertec.component.scss'
})
export class RegistertecComponent {
  accounttecService = inject(AccounttcService);
  fB = inject(FormBuilder);

  subscribedRegisterUser: Subscription | undefined;
  userResponse: Loggedint | undefined | null;
  passwordsNotMatch: boolean | undefined;

  ngOnDestroy(): void {
    this.subscribedRegisterUser?.unsubscribe();
    console.log('Un sub')
  }

  // phoneNumber

  registerFg = this.fB.group({
    firstNameCtrl: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
    lastNameCtrl: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
    phoneNumberCtrl: ['', [Validators.required]],
    passwordCtrl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    confirmPasswordCtrl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    cityCtrl: ['', [Validators.required]],
    countryCtrl: ['', [Validators.required]],
    techniqueCtrl: ['', [Validators.required]]
  })

  get FirstNameCtrl(): FormControl {
    return this.registerFg.get('firstNameCtrl') as FormControl;
  }

  get LastNameCtrl(): FormControl {
    return this.registerFg.get('lastNameCtrl') as FormControl;
  }

  get PhoneNumberCtrl(): FormControl {
    return this.registerFg.get('phoneNumberCtrl') as FormControl;
  }

  get PasswordCtrl(): FormControl {
    return this.registerFg.get('passwordCtrl') as FormControl;
  }

  get ConfirmPasswordCtrl(): FormControl {
    return this.registerFg.get('confirmPasswordCtrl') as FormControl;
  }

  get CityCtrl(): FormControl {
    return this.registerFg.get('cityCtrl') as FormControl;
  }

  get CountryCtrl(): FormControl {
    return this.registerFg.get('countryCtrl') as FormControl;
  }

  get TechniqueCtrl(): FormControl {
    return this.registerFg.get('techniqueCtrl') as FormControl;
  }

  register(): void {
    if (this.PasswordCtrl.value === this.ConfirmPasswordCtrl.value) {
      let userInput: TechnicianUser = {
        firstName: this.FirstNameCtrl.value,
        lastName: this.LastNameCtrl.value,
        phoneNumber: this.PhoneNumberCtrl.value,
        password: this.PasswordCtrl.value,
        confirmPassword: this.ConfirmPasswordCtrl.value,
        city: this.CityCtrl.value,
        country: this.CountryCtrl.value,
        technique: this.TechniqueCtrl.value
      }

      this.subscribedRegisterUser = this.accounttecService.register(userInput).subscribe({
        next: (res) => console.log(res),
      })

      // let response$: Observable<Loggedint | null> = this.accounttecService.register(userInput);

      // response$.subscribe({
      //   next: (res) => {
      //     console.log(res);
      //     this.userResponse = res;
      //   },
      //   error: (err) => {
      //     console.log(err.error);
      //     this.error = err.error;
      //   }
      // });
    }

    else {
      this.passwordsNotMatch === true;
    }
  }
}
