import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AccounttcService } from '../../services/accounttc.service';
import { AccountService } from '../../services/account.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterLink, MatMenuModule, CommonModule, MatDividerModule, MatListModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatSnackBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  accountServis = inject(AccountService);
  accounttcServis = inject(AccounttcService)
  showError = true;
}