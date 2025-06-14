import { Component } from '@angular/core';
import { UserCardComponent } from '../ui/user-card/user-card.component';
import {NabvarComponent} from '../ui/nabvar/nabvar.component';
import { MenuComponent } from "../ui/menu/menu.component";
import { CountChartComponent } from "../ui/count-chart/count-chart.component";
import { AttendanceChartComponent } from '../ui/attendanceChart/attendance-chart.component';
import { FinanceChartComponent } from '../ui/financeChart/finance-chart.component';
import { CalendarComponent } from '../ui/calendar/calendar.component';
import { AnnouncementComponent } from '../ui/announcement/announcement.component';

@Component({
  selector: 'app-admin',
  imports: [
    UserCardComponent,
    CountChartComponent, 
    AttendanceChartComponent, 
    FinanceChartComponent, 
    CalendarComponent,
    AnnouncementComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent {
  // student!: String;
  // teacher!: String;
  // parent!: String;
  // staff!: String;
}
