import { Component, inject } from '@angular/core';
import { ScheduleComponent } from '../ui/schedule/schedule.component';
import { AnnouncementComponent } from '../ui/announcement/announcement.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [ScheduleComponent,AnnouncementComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  teacher_id = 0;

  constructor(){
    this.teacher_id = Number(this.route.snapshot.params['id']);
  }
}
