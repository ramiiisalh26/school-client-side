import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from '../../api/exam';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private baseUrl = "http://localhost:8080/api/v1/exam";

  constructor(private httpClient: HttpClient) { }

  addExams(exams: Exam[]): Observable<Exam[]>{
    return this.httpClient.post<Exam[]>(`${this.baseUrl}/add`,exams);
  }

  getExamById(exam_id: number): Observable<Exam>{
    return this.httpClient.get<Exam>(`${this.baseUrl}/${exam_id}`);
  }

  getAllExams(): Observable<Exam[]>{
    return this.httpClient.get<Exam[]>(`${this.baseUrl}/all`);
  }

  updateExam(exam_id: number, exam: Exam): Observable<Exam>{
    return this.httpClient.put<Exam>(`${this.baseUrl}/update/${exam_id}`,exam);
  }

  deleteExam(exam_id: number): Observable<Exam>{
    return this.httpClient.delete<Exam>(`${this.baseUrl}/${exam_id}`);
  }

  getExamsByClassName(class_name: String): Observable<Exam[]>{
    return this.httpClient.get<Exam[]>(`${this.baseUrl}/getExamsByClassName/${class_name}`);
  }

  getExamsByTeacherCode(teacher_code: String): Observable<Exam[]>{
    return this.httpClient.get<Exam[]>(`${this.baseUrl}/getExamsByTeacherCode/${teacher_code}`);
  }

  getExamsByCourseCode(course_code: String): Observable<Exam[]>{
    return this.httpClient.get<Exam[]>(`${this.baseUrl}/getExamsByCourseCode/${course_code}`);
  }

  getExamByCourseName(course_name: String): Observable<Exam[]>{
    return this.httpClient.get<Exam[]>(`${this.baseUrl}/getExamByCourseName/${course_name}`);
  }

}

