import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dorehi',
  imports: [RouterModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule, MatButtonModule],
  templateUrl: './dorehi.component.html',
  styleUrl: './dorehi.component.scss'
})
export class DorehiComponent {

}
