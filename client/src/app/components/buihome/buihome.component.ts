import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-buihome',
  imports: [RouterModule, RouterLink, MatMenuModule, CommonModule, MatDividerModule, MatListModule,
    MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './buihome.component.html',
  styleUrl: './buihome.component.scss'
})
export class BuihomeComponent {

}
