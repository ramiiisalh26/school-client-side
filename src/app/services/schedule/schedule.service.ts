import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from '../../api/schedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private baseUrl = "http://localhost:8080/api/v1/schedule";

  constructor(private httpClient: HttpClient) { }

  addToSchedule(schedule: Schedule): Observable<Schedule>{
    return this.httpClient.post<Schedule>(`${this.baseUrl}/add`,schedule);
  }

  getAllSchedules(): Observable<Schedule[]>{
    return this.httpClient.get<Schedule[]>(`${this.baseUrl}/all`);
  }

  
  
  
  
}
