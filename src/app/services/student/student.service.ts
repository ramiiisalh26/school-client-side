import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../api/student';
import { Student_chart } from '../../api/Student_chart';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/api/v1/student";

  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}/all`)
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/${id}`)
  }

  getStudentByCode(student_code: String): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/${student_code}`)
  }

  addStudent(student: Student[]): Observable<Student[]>{
    return this.httpClient.post<Student[]>(`${this.baseUrl}/add`,student);
  }

  updateStudent(id: number, student: Student): Observable<Student>{
    return this.httpClient.put<Student>(`${this.baseUrl}/${id}`,student);
  }

  deleteStudent(id: number): Observable<Student>{
    return this.httpClient.delete<Student>(`${this.baseUrl}/${id}`);
  }

  getStudentByParentId(parent_id: number): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}/getStudentByParentId/${parent_id}`);
  }

  getBoysAndGirlsCount(): Observable<Student_chart>{
    return this.httpClient.get<Student_chart>(`${this.baseUrl}/getBoysAndGirlsCount`);
  }

  getCountOfStudent(): Observable<number>{
    return this.httpClient.get<number>(`${this.baseUrl}/getCountOfStudent`);
  }
}
