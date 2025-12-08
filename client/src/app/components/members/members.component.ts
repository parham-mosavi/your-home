import { Component, inject } from '@angular/core';
import { AccounttcService } from '../../services/accounttc.service';
import { Observable } from 'rxjs';
import { loggedint } from '../../models/loggedint-model';

@Component({
  selector: 'app-members',
  imports: [],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  accounttcservice = inject(AccounttcService);
  members: loggedint[] | undefined;

  ngOnInit(): void {
    this.getAll();
    console.log('parham')
  }

  getAll(): void {
    let allTec: Observable<loggedint[]> = this.accounttcservice.getalltec();

    allTec.subscribe({
      next: (res) => {
        console.log(res);
        this.members = res
        // console.log('parham')
      }
    });
  }
}
