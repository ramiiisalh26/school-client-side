import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assignment } from '../../api/assignment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private baseUrl = "http://localhost:8080/api/v1/assignment";

  constructor(private httpClient: HttpClient) { }

  addAssignment(assignment: Assignment) : Observable<Assignment>{
    return this.httpClient.post<Assignment>(`${this.baseUrl}/add`,assignment);
  }

  getAllAssignment() : Observable<Assignment[]>{
    return this.httpClient.get<Assignment[]>(`${this.baseUrl}/all`);
  }

  getAssignmentById(assig_id: number): Observable<Assignment>{
    return this.httpClient.get<Assignment>(`${this.baseUrl}/${assig_id}`);
  }

  updateAssignment(assig_id: number, assignment: Assignment): Observable<Assignment>{
    return this.httpClient.put<Assignment>(`${this.baseUrl}/update/${assig_id}`,assignment);
  }

  deleteAssignmentById(assig_id: number): Observable<Assignment>{
    return this.httpClient.delete<Assignment>(`${this.baseUrl}/${assig_id}`);
  } 

  getAllAssignmentByTeacherCode(teacher_code: String): Observable<Assignment[]>{
    return this.httpClient.get<Assignment[]>(`${this.baseUrl}/getByTeacherCode/${teacher_code}`)
  }

  getAllAssignmentByStudentCode(student_code: String): Observable<Assignment[]>{
    return this.httpClient.get<Assignment[]>(`${this.baseUrl}/getByStudentCode/${student_code}`);
  }

  getAllAssignmentByCourseCode(course_code: String): Observable<Assignment[]>{
    return this.httpClient.get<Assignment[]>(`${this.baseUrl}/getByCourseCode/${course_code}`);
  }

}
