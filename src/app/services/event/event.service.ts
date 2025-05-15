import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = "http://localhost:8080/api/v1/events";

  constructor(private httpClient: HttpClient) { }

  addEvents(events: Event): Observable<Event[]>{
    return this.httpClient.post<Event[]>(`${this.baseUrl}/add`,events);
  }

  getEvents(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseUrl}/all`);
  }

  getEventsById(id: number): Observable<Event>{
    return this.httpClient.get<Event>(`${this.baseUrl}/${id}`);
  }

  updateEvents(events: Event,id: number): Observable<Event>{
    return this.httpClient.put<Event>(`${this.baseUrl}/update/${id}`,events);
  }

  deleteEvents(id: number): void{
    this.httpClient.delete<Event>(`${this.baseUrl}/${id}`);
  }

  getEventsByDate(date: string): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseUrl}/getEventsByDate/${date}`);
  }
}
