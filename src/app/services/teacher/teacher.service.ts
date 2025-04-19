import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../../api/teacher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = "http://localhost:8080/api/v1/teacher";

  constructor(private httpClient: HttpClient) { }

  addTeacher(teacher: Teacher[]): Observable<Teacher[]>{
    return this.httpClient.post<Teacher[]>(`${this.baseUrl}/add`,teacher);
  }

  getTeacherById(teacher_id: number): Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${this.baseUrl}/${teacher_id}`);
  }

  getAllTeachers(): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`${this.baseUrl}/all`);
  }

  updateTeacher(teacher_id: number, teacher: Teacher): Observable<Teacher>{
    return this.httpClient.put<Teacher>(`${this.baseUrl}/update/${teacher_id}`,teacher);
  }

  deleteTeacherById(teacher_id: number): Observable<Teacher>{
    return this.httpClient.delete<Teacher>(`${this.baseUrl}/${teacher_id}`);
  }
  
}
