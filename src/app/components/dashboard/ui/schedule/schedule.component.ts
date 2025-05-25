import { Component, computed, effect, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DateTime, Interval,Info } from 'luxon';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../../services/event/event.service';
import { Schedule } from '../../../../api/schedule';
import { ScheduleService } from '../../../../services/schedule/schedule.service';
import { FormatTimePipe, FormatTimeDatePipe } from '../../../../pipes/format-time.pipe';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ScheduleModule, CommonModule, FormatTimeDatePipe],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {
  title = 'Schedule';

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

  schedule_data: Schedule[] = [];

  constructor(private scheduleService: ScheduleService){}

  ngOnInit(): void {
    this.scheduleService.getAllSchedules().subscribe((data) => {
      this.schedule_data = data;
      console.log(this.schedule_data);
    });
  }
}
