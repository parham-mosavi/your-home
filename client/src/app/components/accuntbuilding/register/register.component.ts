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
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RegisterBM } from '../../../models/register-bm';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, MatRadioModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatButtonModule, MatInputModule, MatDatepickerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  accountService = inject(AccountService);
  fB = inject(FormBuilder);
  userResponse: Loggedinm | undefined | null;
  passwordMatch: boolean = true ;

  registerFg = this.fB.group({
    firstNameCtrl: ['', [Validators.required , Validators.minLength(1), Validators.maxLength(30)]],
    lastNameCtrl: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
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
  
  get PasswordCtrl(): FormControl {
    return this.registerFg.get('passwordCtrl') as FormControl;
  }

  get ConfirmPasswordCtrl(): FormControl {
    return this.registerFg.get('confirmPasswordCtrl') as FormControl;
  }
  
  // get PostCodeCtrl(): FormControl {
  //   return this.registerFg.get('postCodeCtrl') as FormControl;
  // }
  
  // get CityCtrl(): FormControl {
  //   return this.registerFg.get('cityCtrl') as FormControl;
  // }
  // get CountryCtrl(): FormControl {
  //   return this.registerFg.get('countryCtrl') as FormControl;
  // }

  // get PlaqueCtrl(): FormControl {
  //   return this.registerFg.get('plaqueCtrl') as FormControl;
  // }

  // get FloorCtrl(): FormControl {
  //   return this.registerFg.get('floorCtrl') as FormControl;
  // }

  // get UnitCtrl(): FormControl {
  //   return this.registerFg.get('unitCtrl') as FormControl;
  // }

  register(): void {
    if(this.PasswordCtrl.value === this.ConfirmPasswordCtrl.value) {

      let userInput: RegisterBM = {
        firstName: this.FirstNameCtrl.value,
        lastName: this.LastNameCtrl.value,
        phoneNumber: this.PhoneNumberCtrl.value,
        password: this.PasswordCtrl.value,
        confirmPassword: this.ConfirmPasswordCtrl.value
        // city: this.CityCtrl.value,
        // country: this.CountryCtrl.value,
        // plaque: this.PlaqueCtrl.value,
        // floor: this.FloorCtrl.value,
        // postCode: this.PostCodeCtrl.value,
        // unit: this.UnitCtrl.value
      }
      
      let response$: Observable<Loggedinm | null> = this.accountService.register(userInput);
      
      response$.subscribe({
        next: (res) => {
          console.log(res);
          this.userResponse = res;
        },
      });
    }
    this.passwordMatch = false;
  }
}