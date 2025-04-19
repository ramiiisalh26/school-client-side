import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../../api/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private baseUrl = "http://localhost:8080/api/v1/courses";

  constructor(private httpClient: HttpClient) { }

  getCoursesById(course_id: number): Observable<Courses>{
    return this.httpClient.get<Courses>(`${this.baseUrl}/${course_id}`);
  }

  getCoursesByName(course_name: String): Observable<Courses>{
    return this.httpClient.get<Courses>(`${this.baseUrl}/getCoursesByName/${course_name}`);
  }

  getAllCourses(): Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.baseUrl}/all`);
  }

  addCourses(courses: Courses[]): Observable<Courses[]>{
    return this.httpClient.post<Courses[]>(`${this.baseUrl}/add`,courses);
  }

  updateCourses(course_id: number,courses: Courses): Observable<Courses>{
    return this.httpClient.put<Courses>(`${this.baseUrl}/update/${course_id}`,courses);
  }

  deleteCourse(course_id: number): Observable<Courses>{
    return this.httpClient.delete<Courses>(`${this.baseUrl}/${course_id}`);
  }

  getAllCoursesByDepartment(department: String): Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.baseUrl}/getAllCoursesByDepartment/${department}`);
  }

  getAllCoursesByTeacherId(teacher_id: number): Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.baseUrl}/getAllCoursesByTeacherId/${teacher_id}`);
  }

  getAllCoursesByTeacherCode(teacher_code: number): Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.baseUrl}/getAllCoursesByTeacherCode/${teacher_code}`);
  }

  getAllCoursesByStudentId(student_id: number): Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.baseUrl}/getAllCoursesByStudentId/${student_id}`);
  }

  getAllCoursesByStudentCode(student_code: number): Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.baseUrl}/getAllCoursesByStudentCode/${student_code}`);
  }

  getAllCoursesByResultsId(result_id: number): Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.httpClient}/getAllCoursesByResultsId/${result_id}`)
  }

  getAllCoursesByAssignmentId(assignment_id: number) : Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.baseUrl}/getAllCoursesByAssignmentId/${assignment_id}`);
  }

  getAllCoursesByClassesId(class_id: number): Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.baseUrl}/getAllCoursesByClassesId/${class_id}`);
  }

  getAllCoursesByClassesName(class_name: String): Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.baseUrl}/getAllCoursesByClassesName/${class_name}`);
  }

}
