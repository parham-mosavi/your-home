import { Component, inject, Inject } from '@angular/core';
import { AccounttcService } from '../../../services/accounttc.service';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { technician } from '../../../models/technician.model';
import { Observable } from 'rxjs';
import { loggedint } from '../../../models/loggedint-model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registertec',
  imports: [RouterModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatButtonModule, MatInputModule],
  templateUrl: './registertec.component.html',
  styleUrl: './registertec.component.scss'
})
export class RegistertecComponent {
  accounttecService = inject(AccounttcService);
  fB = inject(FormBuilder);
  userResponse: loggedint | undefined | null;
  error: string | undefined;


  registerFg = this.fB.group({
    firstNameCtrl: ['', [Validators.required]],
    lastNameCtrl: ['', [Validators.required]],
    phoneNumberCtrl: ['', [Validators.required]],
    passwordCtrl: ['', [Validators.required]],
    confirmPasswordCtrl: ['', [Validators.required]],
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
    let userInput: technician = {
      firstName: this.FirstNameCtrl.value,
      lastName: this.LastNameCtrl.value,
      phoneNumber: this.PhoneNumberCtrl.value,
      password: this.PasswordCtrl.value,
      confirmPassword: this.ConfirmPasswordCtrl.value,
      city: this.CityCtrl.value,
      country: this.CountryCtrl.value,
      technique: this.TechniqueCtrl.value
    }

    let response$: Observable<loggedint | null> = this.accounttecService.register(userInput);

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
