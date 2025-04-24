import { Component } from '@angular/core';
import { UserCardComponent } from '../../ui/user-card/user-card.component';
import {NabvarComponent} from '../../ui/nabvar/nabvar.component';
import { MenuComponent } from "../../ui/menu/menu.component";
@Component({
  selector: 'app-admin',
  imports: [UserCardComponent, MenuComponent,NabvarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  // student!: String;
  // teacher!: String;
  // parent!: String;
  // staff!: String;
}
