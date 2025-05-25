import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {
  transform(value: String): string {
    if(!value) return '';
    const [hours, minutes] = value.split(':');
    return `${hours}:${minutes}`;
  }

}

@Pipe({
  name: 'formatTimeDate'
})
export class FormatTimeDatePipe implements PipeTransform {
  transform(value: string): string {
    if(!value) return '';
    const dt = DateTime.fromISO(value);
    if(!dt.isValid){
      return value;
    }
    return dt.toFormat('h:mm a');
  }
}