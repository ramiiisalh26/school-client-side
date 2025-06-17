import { Component, computed, effect, Input, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DateTime, Interval,Info } from 'luxon';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../../services/event/event.service';
import { Schedule } from '../../../../api/schedule';
import { ScheduleService } from '../../../../services/schedule/schedule.service';
import { FormatTimePipe, FormatTimeDatePipe } from '../../../../pipes/format-time.pipe';
import { AuthService } from '../../../../services/auth/auth.service';
@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ScheduleModule, CommonModule, FormatTimeDatePipe,CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {
  title = 'Schedule';
  head_title: string | undefined;
  startTime: String | undefined
  endTime: String | undefined;

  @Input() teacher_code!: String | null
  @Input() student_group: string | undefined;

  schedule_week = false;
  schedule_day = true;
  schedule_week_btn() {
    this.schedule_week = false;
    this.schedule_day = true;
  }
  schedule_day_btn() {
    this.schedule_day = false;
    this.schedule_week = true;
  }

  schedule_week_data: Schedule[] = [];
  schedule_day_data: Map<String,Schedule> = new Map();

  constructor(private scheduleService: ScheduleService, private authService: AuthService){}

  
  ngOnInit(): void {
    if(this.teacher_code !== ""){
      this.scheduleService.getScheduleOfTeacher(this.teacher_code!).subscribe({
        next: (res) => {
          this.schedule_week_data = res;
          console.log(this.schedule_week_data);
          this.setScheduleDayArray();
        },
        error: (err)=> {
          console.error("Error from schedule:",err);
        }
      })
    }else if(this.student_group !== undefined){
      this.scheduleService.getScheduleOfTeacher(this.student_group).subscribe({
        next: (res) => {
          this.schedule_week_data = res;
        },
        error: (err)=> {
          console.error("Error from schedule:",err);
        }
      });
    }
    this.head_title = this.authService.getRole() + " Schedule";
  }

  setScheduleDayArray(): void{
    // this.schedule_day_data = Array(11).fill(0);
    this.schedule_week_data.forEach((schedule) => {

      const dayofWeek = DateTime.fromISO(schedule.day.toString());
      
      if (dayofWeek.weekday === DateTime.now().weekday) {
        const time = DateTime.fromISO(schedule.startTime).toFormat("HH:mm");
        switch (time) {
          case "08:00": this.schedule_day_data.set("08:00",schedule); break;
          case "09:00": this.schedule_day_data.set("09:00",schedule); break;
          case "10:00": this.schedule_day_data.set("10:00",schedule); break;
          case "11:00": this.schedule_day_data.set("11:00",schedule); break;
          case "12:00": this.schedule_day_data.set("12:00",schedule); break;
          case "13:00": this.schedule_day_data.set("13:00",schedule); break;
          case "14:00": this.schedule_day_data.set("14:00",schedule); break;
          case "15:00": this.schedule_day_data.set("15:00",schedule); break;
          case "16:00": this.schedule_day_data.set("16:00",schedule); break;
          case "17:00": this.schedule_day_data.set("17:00",schedule); break;
          case "18:00": this.schedule_day_data.set("18:00",schedule); break;
          case "19:00": this.schedule_day_data.set("19:00",schedule); break;
        }
        this.schedule_day_data 
      }
    })
    // console.log();
    console.log(this.schedule_day_data.get("08:00"))

  }

}
