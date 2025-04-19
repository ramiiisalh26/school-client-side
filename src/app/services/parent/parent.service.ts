import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parent } from '../../api/parent';
import { Observable } from 'rxjs';
import { Student } from '../../api/student';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private baseUrl = "http://localhost:8080/api/v1/parent";

  constructor(private httpClient: HttpClient) {}

  addParent(parent: Parent[]): Observable<Parent[]>{
    return this.httpClient.post<Parent[]>(`${this.baseUrl}/add`,parent);
  }

  getAllParents(): Observable<Parent[]>{
    return this.httpClient.get<Parent[]>(`${this.baseUrl}/all`);
  }

  getParentById(parent_id: number): Observable<Parent>{
    return this.httpClient.get<Parent>(`${this.baseUrl}/${parent_id}`);
  }

  updateParent(parent_id: number, parent: Parent): Observable<Parent>{
    return this.httpClient.put<Parent>(`${this.baseUrl}/update/${parent_id}`,parent);
  }

  deleteParentById(parent_id: number): Observable<Parent>{
    return this.httpClient.delete<Parent>(`${this.baseUrl}/${parent_id}`);
  }

}
