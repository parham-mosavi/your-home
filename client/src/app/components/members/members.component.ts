import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AccounttcService } from '../../services/accounttc.service';
import { Loggedint } from '../../models/loggedint-model';

@Component({
  selector: 'app-members',
  imports: [MatButtonModule,  MatCardModule, MatIconModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  accounttcservice = inject(AccounttcService);
  members: Loggedint[] | undefined;

  ngOnInit(): void {
    this.getAll();
    console.log('parham')
  }

  getAll(): void {
    let allTec: Observable<Loggedint[]> = this.accounttcservice.getalltec();

    allTec.subscribe({
      next: (res) => {
        console.log(res);
        this.members = res
        // console.log('parham')
      }
    });
  }
}
