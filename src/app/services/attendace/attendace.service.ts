import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendace } from '../../api/attendance/attendance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendaceService {

  private baseUrl = "http://localhost:8080/api/v1/attendance";

  constructor(private httpClient: HttpClient) { }

  addAttendace(attendace: Attendace[]): Observable<Attendace[]>{
    return this.httpClient.post<Attendace[]>(`${this.baseUrl}/add`,attendace);
  }

  getAttendaceById(id: number): Observable<Attendace>{
    return this.httpClient.get<Attendace>(`${this.baseUrl}/${id}`);
  }

  getAllAttendace(): Observable<Attendace[]>{
    return this.httpClient.get<Attendace[]>(`${this.baseUrl}/all`);
  }

  updateAttendace(id: number, attendace: Attendace): Observable<Attendace>{
    return this.httpClient.put<Attendace>(`${this.baseUrl}/update/${id}`,attendace);
  }

  deleteAttendace(id: number): Observable<Attendace>{
    return this.httpClient.delete<Attendace>(`${this.baseUrl}/${id}`);
  }

  getAllAttendanceByCourse(course_code: String): Observable<Attendace[]>{
    return this.httpClient.get<Attendace[]>(`${this.baseUrl}/${course_code}`);
  }

  getAllAttendanceByStudent(student_code: String): Observable<Attendace[]>{
    return this.httpClient.get<Attendace[]>(`${this.baseUrl}/${student_code}`);
  }

  getAttendancesByDate(date: string): Observable<Attendace[]>{
    return this.httpClient.get<Attendace[]>(`${this.baseUrl}/getAttendancesByDate/${date}`);
  }

  getStatusCount(): Observable<Map<String,number[]>>{
    return this.httpClient.get<Map<String,number[]>>(`${this.baseUrl}/getStatusCount`);
  }

  getAttendancesFromToday(from: Date, to: Date, status: String): Observable<Attendace[]>{
    return this.httpClient.get<Attendace[]>(`${this.baseUrl}/getAttendancesFromToday/${from}/${to}/${status}`);
  }

  getCountOfPresentStatus(): Observable<number[]>{
    return this.httpClient.get<number[]>(`${this.baseUrl}/getCountOfPresentStatus`);
  }

  getCountOfAbsentStatus(): Observable<number[]>{
    return this.httpClient.get<number[]>(`${this.baseUrl}/getCountOfAbsentStatus`); 
  }
}
