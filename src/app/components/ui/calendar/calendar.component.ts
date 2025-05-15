import { Component, computed, InputSignal, signal, Signal, WritableSignal } from '@angular/core';
import {DateTime, Info, Interval} from "luxon";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  // meetings: InputSignal<String[]> =
  today: Signal<DateTime> = signal(DateTime.local());
  firstDayOfActiveMonth: WritableSignal<DateTime> = signal(
    this.today().startOf('month'),
  );

  activeDay: WritableSignal<DateTime | null> = signal(null);
  weekDays: Signal<string[]> = signal(Info.weekdays('short'));
  daysOfMonth: Signal<DateTime[]> = computed(() => {
    return Interval.fromDateTimes(
      this.firstDayOfActiveMonth().startOf('week'),
      this.firstDayOfActiveMonth().endOf('month').endOf('week')
    )
    .splitBy({ day: 1})
    .map((d) => {
      if(d.start === null){
        throw new Error("Wrong dates");
      }
      return d.start;
    });
  }) ;
  DATE_MED = DateTime.DATE_MED;

  goToPreviousMonth(): void{
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().minus({month: 1})
    );
  }

  goToNextMonth(){
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().plus({month: 1})
    )
  }

  goToToday(){
    this.firstDayOfActiveMonth.set(this.today().startOf('month'));
  }
}
