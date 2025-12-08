import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { AccounttcService } from '../../services/accounttc.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink, MatMenuModule, CommonModule, MatDividerModule, MatListModule,
    MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  accountServis = inject(AccountService);
  accounttcServis = inject(AccounttcService)

  logoutt() {
    this.accounttcServis.logoutt();
  }
  
  logoutm() {
    this.accountServis.logoutm();
  }
}
