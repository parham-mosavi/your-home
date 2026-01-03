import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountService } from '../../../services/account.service';
// import { LoggedInUser } from '../../../models/logged-in-model';
// import { AppUser } from '../../../models/app-user.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Buildingm } from '../../../models/buildingm.model';
import { Loggedinm } from '../../../models/loggedinm-model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatButtonModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  accountService = inject(AccountService);
  fB = inject(FormBuilder);
  userResponse: Loggedinm | undefined | null;
  error: string | undefined;

  registerFg = this.fB.group({
    firstNameCtrl: ['', [Validators.required]],
    lastNameCtrl: ['', [Validators.required]],
    phoneNumberCtrl: ['', [Validators.required]],
    cityCtrl: ['', [Validators.required]],
    countryCtrl: ['', [Validators.required]],
    plaqueCtrl: ['', [Validators.required]],
    floorCtrl: ['', [Validators.required]],
    unitCtrl: ['', [Validators.required]],
    postCodeCtrl: ['', [Validators.required]],
    passwordCtrl: ['', [Validators.required]],
    confirmPasswordCtrl: ['', [Validators.required]]
  });

  get FirstNameCtrl(): FormControl {
    return this.registerFg.get('firstNameCtrl') as FormControl;
  }

  get LastNameCtrl(): FormControl {
    return this.registerFg.get('lastNameCtrl') as FormControl;
  }

  get PhoneNumberCtrl(): FormControl {
    return this.registerFg.get('phoneNumberCtrl') as FormControl;
  }

  get CityCtrl(): FormControl {
    return this.registerFg.get('cityCtrl') as FormControl;
  }

  get PostCodeCtrl(): FormControl {
    return this.registerFg.get('postCodeCtrl') as FormControl;
  }

  get CountryCtrl(): FormControl {
    return this.registerFg.get('countryCtrl') as FormControl;
  }

  get PlaqueCtrl(): FormControl {
    return this.registerFg.get('plaqueCtrl') as FormControl;
  }

  get FloorCtrl(): FormControl {
    return this.registerFg.get('floorCtrl') as FormControl;
  }

  get UnitCtrl(): FormControl {
    return this.registerFg.get('unitCtrl') as FormControl;
  }

  get PasswordCtrl(): FormControl {
    return this.registerFg.get('passwordCtrl') as FormControl;
  }

  get ConfirmPasswordCtrl(): FormControl {
    return this.registerFg.get('confirmPasswordCtrl') as FormControl;
  }

  register(): void {
    let userInput: Buildingm = {
      firstName: this.FirstNameCtrl.value,
      lastName: this.LastNameCtrl.value,
      phoneNumber: this.PhoneNumberCtrl.value,
      city: this.CityCtrl.value,
      password: this.PasswordCtrl.value,
      confirmPassword: this.ConfirmPasswordCtrl.value,
      country: this.CountryCtrl.value,
      plaque: this.PlaqueCtrl.value,
      floor: this.FloorCtrl.value,
      postCode: this.PostCodeCtrl.value,
      unit: this.UnitCtrl.value
    }

    let response$: Observable<Loggedinm | null> = this.accountService.register(userInput);

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

//   let response$: Observable<LoggedInUser | null> = this.accountService.register(userInput);

//   response$.subscribe({
//     next: (res) => {
//       console.log(res);
//       this.userResponse = res;
//     },
//     error: (err) => {
//       console.log(err.error);
//       this.error = err.error;
//     }
//   });
// }