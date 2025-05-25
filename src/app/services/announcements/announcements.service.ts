import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../../api/announcement';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementsService {

  private baseUrl = "http://localhost:8080/api/v1/announcements";

  constructor(private httpClient: HttpClient) { }

  addAnnouncement(announcement: Announcement): Observable<Announcement>{
    return this.httpClient.post<Announcement>(`${this.baseUrl}/add`, announcement);
  }

  getAllAnnouncements(): Observable<Announcement[]>{
    return this.httpClient.get<Announcement[]>(`${this.baseUrl}/all`);
  } 

  getAnnouncementById(id: number): Observable<Announcement>{
    return this.httpClient.get<Announcement>(`${this.baseUrl}/${id}`);
  }

  updateAnnouncement(id: number, announcement: Announcement): Observable<Announcement>{
    return this.httpClient.put<Announcement>(`${this.baseUrl}/${id}`, announcement);
  }

  deleteAnnouncement(id: number): Observable<Announcement>{
    return this.httpClient.delete<Announcement>(`${this.baseUrl}/${id}`);
  }
  getAnnouncementByDate(date: String): Observable<Announcement[]>{
    return this.httpClient.get<Announcement[]>(`${this.baseUrl}/date/${date}`);
  }
}
