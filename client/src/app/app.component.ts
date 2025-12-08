import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AccountService } from './services/account.service';
import { AccounttcService } from './services/accounttc.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatMenuModule, CommonModule, MatDividerModule, MatListModule,
    MatButtonModule, MatToolbarModule, MatIconModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  accountService = inject(AccountService);
  accounttcServis = inject(AccounttcService);

  ngOnInit(): void {
    let loggedinUserstr: string | null = localStorage.getItem('loggedIn');

    if (loggedinUserstr) {
      this.accountService.setCurrentUser(JSON.parse(loggedinUserstr))
    }

    let tecUser: string | null = localStorage.getItem('loggedInTec');

    if (tecUser) {
      this.accounttcServis.setCurrentUser(JSON.parse(tecUser))
    }
  }
}