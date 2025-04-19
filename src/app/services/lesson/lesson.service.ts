import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../../api/lesson';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private baseUrl = "http://localhost:8080/api/v1/lesson";

  constructor(private httpClient: HttpClient) { }

  addLessons(lesson: Lesson[]): Observable<Lesson[]>{
    return this.httpClient.post<Lesson[]>(`${this.baseUrl}/add`,lesson);
  }

  getLessonById(lesson_id: number): Observable<Lesson>{
    return this.httpClient.get<Lesson>(`${this.baseUrl}/${lesson_id}`);
  }

  getAllLessons(): Observable<Lesson[]>{
    return this.httpClient.get<Lesson[]>(`${this.baseUrl}/all`);
  }

  updateLesson(lesson_id: number, lesson: Lesson): Observable<Lesson>{
    return this.httpClient.put<Lesson>(`${this.baseUrl}/update/${lesson_id}`,lesson);
  }

  deleteLesson(lesson_id: number): Observable<Lesson>{
    return this.httpClient.delete<Lesson>(`${this.baseUrl}/${lesson_id}`);
  }

  getLessonsByCourseCode(course_code: String): Observable<Lesson[]>{
    return this.httpClient.get<Lesson[]>(`${this.baseUrl}/getLessonByCourseCode/${course_code}`);
  }

  getLessonsByClassName(class_name: String): Observable<Lesson[]>{
    return this.httpClient.get<Lesson[]>(`${this.baseUrl}/getLessonsByClassName/${class_name}`);
  }

  getLessonsByTeacherCode(teacher_code: String): Observable<Lesson[]>{
    return this.httpClient.get<Lesson[]>(`${this.baseUrl}/getLessonsByTeacherCode/${teacher_code}`);
  }

}
