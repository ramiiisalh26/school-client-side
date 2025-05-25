import { Component, computed, InputSignal, effect, signal,input, Signal, WritableSignal } from '@angular/core';
import {DateTime, Info, Interval} from "luxon";
import { CommonModule } from '@angular/common';
import { EventService } from '../../../../services/event/event.service';
import { Event } from '../../../../api/event';
import { FormatTimePipe } from "../../../../pipes/format-time.pipe";

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, FormatTimePipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent{

  localMeetings = signal<Event[]>([]);

  constructor(private eventServices: EventService){}

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
  });

  DATE_MED = DateTime.DATE_MED;
  
  myEffect = effect(() :void => {
    const date = this.activeDay()?.toISODate()?.toString() ?? "Invalid Date";
    if(date != "Invalid Date"){
      this.eventServices.getEventsByDate(date).subscribe((item) =>{
        console.log(item);
        this.localMeetings.set(item);
      });
    }
  
})

  goToPreviousMonth(): void{
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().minus({month: 1})
    )
  }

  goToNextMonth(): void{
    this.firstDayOfActiveMonth.set(
      this.firstDayOfActiveMonth().plus({month: 1})
    )
  }

  goToToday(){
    this.firstDayOfActiveMonth.set(this.today().startOf('month'));
  }
}

