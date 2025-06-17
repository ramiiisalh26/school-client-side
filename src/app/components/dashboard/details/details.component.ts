import { Component, inject, OnInit } from '@angular/core';
import { ScheduleComponent } from '../ui/schedule/schedule.component';
import { AnnouncementComponent } from '../ui/announcement/announcement.component';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../../services/teacher/teacher.service';
import { Teacher } from '../../../api/teacher';
import { ScheduleService } from '../../../services/schedule/schedule.service';
import { Schedule } from '../../../api/schedule';
import { switchMap

 } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details',
  imports: [ScheduleComponent,AnnouncementComponent,CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  
  teacher_id = 0;
  teacher_info: Teacher | undefined;
  schedule_info: Schedule [] | undefined;

  constructor(private teacherServices: TeacherService, private scheduleServices: ScheduleService){
    this.teacher_id = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {

    this.teacherServices.getTeacherById(this.teacher_id).subscribe({
      next: (res) => {
        this.teacher_info = res;
        console.log(this.teacher_info)
      }
    })

    //  Insted of using nested method, here we use switchMap way

  //   this.teacherServices.getTeacherById(this.teacher_id).pipe(
  //     switchMap((res) => {
  //       this.teacher_info = res
  //       console.log(this.teacher_info.teacher_id);
  //       return this.scheduleServices.getScheduleOfTeacher(res.teacher_id);
  //     })
  //   ).subscribe({
  //     next: (schedule) => {
  //       this.schedule_info = schedule;
  //       console.log(this.schedule_info);
  //     },
  //     error: (err) => {
  //       console.error("Error fetching teacher:", err)
  //     }
  //   });
  }
}
