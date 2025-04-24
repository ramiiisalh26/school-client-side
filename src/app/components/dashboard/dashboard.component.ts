import { Component } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-dashboard',
  imports: [AdminComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
