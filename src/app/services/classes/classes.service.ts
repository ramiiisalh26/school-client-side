import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classes } from '../../api/classes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private baseUrl = "http://localhost:8080/api/v1/classes";

  constructor(private httpClient: HttpClient) { }

  createClasses(classes: Classes): Observable<Classes[]>{
    return this.httpClient.post<Classes[]>(`${this.baseUrl}/create`,classes);
  }

  getClassesById(class_id: number): Observable<Classes>{
    return this.httpClient.get<Classes>(`${this.baseUrl}/${class_id}`);
  }

  getAllClasees(): Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${this.baseUrl}/all`);
  }

  updateClassesById(class_id: number, classes: Classes): Observable<Classes>{
    return this.httpClient.put<Classes>(`${this.baseUrl}/${class_id}`,classes);
  }

  deleteClassesById(class_id: number): Observable<Classes>{
    return this.httpClient.delete<Classes>(`${this.baseUrl}/${class_id}`);
  }

  getClassesByName(class_name: String): Observable<Classes>{
    return this.httpClient.get<Classes>(`${this.baseUrl}/getClassByName/${class_name}`);
  }

  getClassesByTeacherId(teacher_id: number): Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${this.baseUrl}/getClassesByTeacherId/${teacher_id}`);
  }

  getClassesByTeacherCode(teacher_code: String): Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${this.baseUrl}/getClassesByTeacherCode/${teacher_code}`);
  }

  getClassesByCourseCode(courses_code: String): Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${this.baseUrl}/getClassesByCourseCode/${courses_code}`);
  }

  getClassesByStudentId(student_id: number): Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${this.baseUrl}/getClassesByStudentId/${student_id}`);
  }

  getClassesByStudentCode(student_code: String): Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${this.baseUrl}/getClassesByStudentCode/${student_code}`);
  }

  getClassesByResultsId(result_id: number): Observable<Classes[]>{
    return this.httpClient.get<Classes[]>(`${this.baseUrl}/getClassesByResultsId/${result_id}`);
  }
}
