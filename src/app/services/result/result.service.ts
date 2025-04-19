import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../../api/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private baseUrl = "http://localhost:8080/api/v1/result";

  constructor(private httpClient: HttpClient) { }

  getAllResults(): Observable<Result[]>{
    return this.httpClient.get<Result[]>(`${this.baseUrl}/all`);
  }

  getResultsById(result_id: number): Observable<Result>{
    return this.httpClient.get<Result>(`${this.baseUrl}/${result_id}`);
  }

  addResults(results: Result[]): Observable<Result[]>{
    return this.httpClient.post<Result[]>(`${this.baseUrl}/add`,results);
  }

  updateResultById(result_id: number,result: Result): Observable<Result>{
    return this.httpClient.put<Result>(`${this.baseUrl}/${result_id}`,result);
  }

  deleteResultById(result_id: number): Observable<Result>{
    return this.httpClient.delete<Result>(`${this.baseUrl}/${result_id}`);
  }

  getResultsByTeacherId(teacher_id: number): Observable<Result[]>{
    return this.httpClient.get<Result[]>(`${this.baseUrl}/getResultByTeacherId/${teacher_id}`);
  }

  getResultByTeacherCode(teacher_code: String): Observable<Result[]>{
    return this.httpClient.get<Result[]>(`${this.baseUrl}/getResultByStudentId/${teacher_code}`);
  }

  getResultByStudentId(student_id: number): Observable<Result[]>{
    return this.httpClient.get<Result[]>(`${this.baseUrl}/getResultByStudentId/${student_id}`);
  }

  getResultByStudentCode(student_code: String): Observable<Result[]>{
    return this.httpClient.get<Result[]>(`${this.baseUrl}/getResultByStudentCode/${student_code}`);
  }

  getResultByCourseId(course_id: number): Observable<Result[]>{
    return this.httpClient.get<Result[]>(`${this.baseUrl}/getResultByCourseId/${course_id}`);
  }

  getResultByCourseCode(course_code: String): Observable<Result[]>{
    return this.httpClient.get<Result[]>(`${this.baseUrl}/getResultByCourseCode/${course_code}`);
  }


}
